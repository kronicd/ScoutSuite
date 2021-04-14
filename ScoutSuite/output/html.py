import datetime
import os
import shutil
import zipfile

import dateutil.tz

from ScoutSuite import DEFAULT_INCLUDES_DIRECTORY
from ScoutSuite import DEFAULT_REPORT_DIRECTORY, DEFAULT_REPORT_RESULTS_DIRECTORY, DEFAULT_INCLUDES_DIRECTORY
from ScoutSuite import ERRORS_LIST
from ScoutSuite.core.console import print_info, print_exception
from ScoutSuite.output.result_encoder import JavaScriptEncoder


class HTMLReport:
    """
    Base HTML report
    """

    def __init__(self, report_name=None, report_dir=None, timestamp=False, exceptions=None):

        self.report_name = report_name
        self.report_name = report_name.replace('/', '_').replace('\\', '_')  # Issue 111
        self.report_dir = report_dir if report_dir else DEFAULT_REPORT_DIRECTORY
        self.current_time = datetime.datetime.now(dateutil.tz.tzlocal())
        self.timestamp = self.current_time.strftime("%Y-%m-%d_%Hh%M%z") if not timestamp else timestamp

        # exceptions = {} if exceptions is None else exceptions
        self.exceptions = exceptions if exceptions else {}
        self.scout_report_data_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'data')
        self.exceptions_encoder = JavaScriptEncoder(self.report_name, report_dir, timestamp)    
        self.encoder = JavaScriptEncoder(self.report_name, report_dir, timestamp)

    def prepare_html_report_dir(self):
        if not os.path.isdir(self.report_dir):
            os.makedirs(self.report_dir)
        run_results_dir = os.path.join(self.report_dir, DEFAULT_REPORT_RESULTS_DIRECTORY)
        if not os.path.isdir(run_results_dir):
            os.makedirs(run_results_dir)
        # Copy static 3rd-party files
        archive = os.path.join(self.scout_report_data_path, 'includes.zip')
        zip_ref = zipfile.ZipFile(archive)
        zip_ref.extractall(self.report_dir)
        zip_ref.close()
        # Copy static files
        inc_scout_dir = os.path.join(self.report_dir, DEFAULT_INCLUDES_DIRECTORY)
        src_inc_scout_dir = os.path.join(self.scout_report_data_path, DEFAULT_INCLUDES_DIRECTORY)
        if os.path.isdir(inc_scout_dir):
            shutil.rmtree(inc_scout_dir)
        shutil.copytree(src_inc_scout_dir, inc_scout_dir)


class ScoutReport(HTMLReport):
    """
    Scout HTML report
    """

    def __init__(self, provider, report_name=None, report_dir=None, timestamp=False, exceptions=None):
        exceptions = {} if exceptions is None else exceptions
        self.provider = provider

        super().__init__(report_name, report_dir, timestamp, exceptions)

    def save(self, config, exceptions, force_write=False, debug=False):
        self.prepare_html_report_dir()
        self.encoder.save_to_file(config, 'RESULTS', force_write, debug)
        self.exceptions_encoder.save_to_file(exceptions, 'EXCEPTIONS', force_write, debug)
        if ERRORS_LIST:
            self.exceptions_encoder.save_to_file(ERRORS_LIST, 'ERRORS', force_write, debug=True)
