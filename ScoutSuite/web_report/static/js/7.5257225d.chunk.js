(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7,87],{554:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(739));n(754);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.c,{label:"Name",valuePath:"name"}),Object(a.jsx)(c.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(c.c,{label:"Actions Enabled",valuePath:"ActionsEnabled"}),Object(a.jsx)(c.c,{label:"State",valuePath:"StateValue"}),Object(a.jsxs)("div",{className:"alarm-metrics",children:[Object(a.jsx)(c.c,{label:"Metric",valuePath:"Namespace"}),Object(a.jsx)("span",{children:"::"}),Object(a.jsx)(c.c,{valuePath:"MetricName"})]})]})}},584:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(16)),r=n.n(c),i=n(30),s=n.n(i),o=n(91),l=n(739),u=n(744),j=n(742),d=n(554),b=n(746);t.default=function(e){var t=e.data;if(!t)return null;var n=r()(t,["item","AlarmActions"]),c=r()(t,["item","InsufficientDataActions"],[]);return Object(a.jsxs)(l.a,{data:t,children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(d.default,{})}),Object(a.jsxs)(u.b,{children:[Object(a.jsx)(u.a,{title:"Alarm Actions",children:s()(n)?Object(a.jsx)(l.c,{errorPath:"NoActions",renderValue:function(){return Object(a.jsx)(b.a,{message:"No actions have been configured for this alarm."})}}):Object(o.l)(n)}),Object(a.jsx)(u.a,{title:"Insufficient Data Actions",disabled:s()(c),children:Object(o.l)(c)})]})]})}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o}));var a=n(0),c=n.n(a),r={path_to_issue:[],item:{}},i=c.a.createContext(r),s=c.a.createContext(""),o=c.a.createContext((function(){}))},737:function(e,t,n){"use strict";var a=n(1),c=n(0),r=n(736),i=n(91);t.a=function(e){var t=e.path,n=e.children,s=Object(c.useContext)(r.b);return Object(a.jsx)(r.b.Provider,{value:Object(i.a)(s,t),children:n})}},738:function(e,t,n){"use strict";var a=n(13),c=n(1),r=n(0),i=n(732),s=n(9),o=n.n(s),l=n(16),u=n.n(l),j=n(14),d=n.n(j),b=n(736),f=n(91),v=n(71),h=(n(740),n(723)),O=n(216),x=n.n(O),p=n(741),m=n.n(p),g=n(217),P=n(151),N=function(e){var t=e.service,n=e.finding,a=e.path,s=Object(r.useContext)(P.a),o=s.exceptions,l=s.addException,j=s.removeException,d=Object(g.b)().enqueueSnackbar,b=u()(o,[t,n],[]).includes(a);return Object(c.jsx)(i.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(c.jsx)(h.a,{size:"small",className:"exception-btn",onClick:b?function(){j(t,n,a),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){l(t,n,a),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(c.jsx)(m.a,{}):Object(c.jsx)(x.a,{})})})},A=n(34),C=function(e){var t,n=e.label,s=e.separator,l=e.valuePath,j=e.errorPath,h=e.className,O=e.inline,x=e.tooltip,p=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,P=Object(A.g)(),C=Object(r.useContext)(b.a),E=Object(r.useContext)(b.b),S=Object(r.useContext)(b.c),k=Object(f.a)(g||E,l),w=m(e.value||u()(C.item,k,e.value));("boolean"===typeof w&&(w=String(w)),j)?t=(d()(j)?j:[j]).map((function(e){return Object(f.a)(g||E,e)})):t=[k];var _=t.some((function(e){return C.path_to_issues.includes(e)})),z=C.level;if(Object(r.useEffect)((function(){_&&S(z)}),[z]),void 0===w||null===w)return null;var D=Object(c.jsx)(N,{service:P.service,finding:P.finding,path:"".concat(C.path,".").concat(t[0])}),I=Object(c.jsxs)("span",{className:o()(_&&o()("issue",z)),children:[w,_&&D]});return Object(c.jsx)(v.a,{className:o()(h,"partial-value",{inline:O}),label:n,separator:s,value:x?Object(c.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},p),{},{children:I})):I})};C.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=C},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return s.a}));var a=n(1),c=(n(0),n(736)),r=(n(91),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(c.a.Provider,{value:t,children:n})}),i=n(737),s=n(738)},740:function(e,t,n){},741:function(e,t,n){"use strict";var a=n(36),c=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),i=(0,a(n(39)).default)(r.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},742:function(e,t,n){"use strict";var a=n(1);n(0),n(743);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},743:function(e,t,n){},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return o.b}));var a=n(1),c=n(15),r=n(0),i=n(9),s=n.n(i),o=n(126),l=n(736),u=n(65),j=(n(745),function(e){var t=e.title,n=e.isSelected,i=e.disabled,j=e.onClick,d=e.children,b=Object(r.useState)(""),f=Object(c.a)(b,2),v=f[0],h=f[1],O=v?Object(a.jsxs)(a.Fragment,{children:[t,u.a[v].icon]}):t;return Object(a.jsx)(l.c.Provider,{value:h,children:Object(a.jsx)(o.a,{title:O,className:s()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:j,children:d})})})},745:function(e,t,n){},746:function(e,t,n){"use strict";var a=n(1),c=(n(0),n(9)),r=n.n(c),i=n(127),s=n.n(i),o=(n(747),{icon:Object(a.jsx)(s.a,{fontSize:"inherit"})}),l=function(e){var t=e.message,n=e.icon,c=e.className;return Object(a.jsxs)("div",{className:r()("warning-message",c),children:[n,t]})};l.defaultProps=o,t.a=l},747:function(e,t,n){},754:function(e,t,n){}}]);
//# sourceMappingURL=7.5257225d.chunk.js.map