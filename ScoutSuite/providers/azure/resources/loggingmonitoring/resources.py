from ScoutSuite.providers.azure.facade.base import AzureFacade
from ScoutSuite.providers.azure.resources.base import AzureCompositeResources
from .diagnostic_resource_key_vault import DiagnosticResourceKeyVault


class Resources(AzureCompositeResources):
    _children = [
        (DiagnosticResourceKeyVault, 'diagnostic_key_vault'),
    ]

    def __init__(self, facade: AzureFacade, subscription_id: str):
        super().__init__(facade)
        self.subscription_id = subscription_id

    async def fetch_all(self):
        for raw_resource in await self.facade.resourcemanagement.get_specific_type_resources_with_filter(
                self.subscription_id, 'Microsoft.KeyVault/vaults'):
            id, resource = self._parse_resource(raw_resource)
            self[id] = resource

        await self._fetch_children_of_all_resources(
            resources=self,
            scopes={resource_id: {'resource_id': resource['id'],
                                  'subscription_id': self.subscription_id}
                    for (resource_id, resource) in self.items()}
        )

    def _parse_resource(self, raw_resource):
        resource = {}
        resource['id'] = raw_resource.id
        resource['name'] = raw_resource.name
        if raw_resource.tags is not None:
            resource['tags'] = ["{}:{}".format(key, value) for key, value in raw_resource.tags.items()]
        else:
            resource['tags'] = []
        return resource['id'], resource