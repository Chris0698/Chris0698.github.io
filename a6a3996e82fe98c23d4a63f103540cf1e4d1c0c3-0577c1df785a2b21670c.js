(self.webpackChunkchris_aston_web_portfolio=self.webpackChunkchris_aston_web_portfolio||[]).push([[517],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!o(e[c[u]],a[c[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",s),p}}},2502:function(e,t,n){"use strict";n.d(t,{Z:function(){return rt}});var r,i,o,a,s=n(7294),u=n(5444),c=n(537),l=n(5761),p=n(5697),f=n.n(p),d=n(4839),h=n.n(d),m=n(2993),v=n.n(m),b=n(6494),y=n.n(b),g="bodyAttributes",E="htmlAttributes",x="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),C="cssText",O="href",S="http-equiv",k="innerHTML",A="itemprop",N="name",j="property",P="rel",L="src",M="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",D="defer",z="encodeSpecialCharacters",F="onChangeClientState",_="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),U=[T.NOSCRIPT,T.SCRIPT,T.STYLE],B="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},$=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=te(e,T.TITLE),n=te(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=te(e,R);return t||r||void 0},G=function(e){return te(e,F)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},ee=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+V(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],u=s.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==k&&s!==C&&s!==A||(n=s)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],u=y()({},r[s],i[s]);r[s]=u}return e}),[]).reverse()},te=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ne=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ne(e)}),0)}),re=function(e){return clearTimeout(e)},ie="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne:n.g.requestAnimationFrame||ne,oe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||re:n.g.cancelAnimationFrame||re,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},se=null,ue=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;pe(T.BODY,r),pe(T.HTML,i),le(p,f);var d={baseTag:fe(T.BASE,n),linkTags:fe(T.LINK,o),metaTags:fe(T.META,a),noscriptTags:fe(T.NOSCRIPT,s),scriptTags:fe(T.SCRIPT,c),styleTags:fe(T.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),pe(T.TITLE,t)},pe=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var u=a[s],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},fe=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===k)n.innerHTML=t.innerHTML;else if(r===C)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(B,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},de=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},he=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,i=he(n,r),[s.createElement(T.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=de(n),o=ce(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case E:return{toComponent:function(){return he(t)},toString:function(){return de(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===k||n===C){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),s.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===k||e===C)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},ve=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:me(T.BASE,t,r),bodyAttributes:me(g,n,r),htmlAttributes:me(E,i,r),link:me(T.LINK,o,r),meta:me(T.META,a,r),noscript:me(T.NOSCRIPT,s,r),script:me(T.SCRIPT,u,r),style:me(T.STYLE,c,r),title:me(T.TITLE,{title:p,titleAttributes:f},r)}},be=h()((function(e){return{baseTag:Q([O,M],e),bodyAttributes:X(g,e),defer:te(e,D),encode:te(e,z),htmlAttributes:X(E,e),linkTags:ee(T.LINK,[P,O],e),metaTags:ee(T.META,[N,w,S,j,A],e),noscriptTags:ee(T.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:ee(T.SCRIPT,[L,k],e),styleTags:ee(T.STYLE,[C],e),title:J(e),titleAttributes:X(x,e)}}),(function(e){se&&oe(se),e.defer?se=ie((function(){ue(e,(function(){se=null}))})):(ue(e),se=null)}),ve)((function(){return null})),ye=(i=be,a=o=function(e){function t(){return q(this,t),$(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!v()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},i,((t={})[r.type]=a,t.titleAttributes=Y({},o),t));case T.BODY:return Y({},i,{bodyAttributes:Y({},o)});case T.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Z(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(i,r)},W(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:f().object,bodyAttributes:f().object,children:f().oneOfType([f().arrayOf(f().node),f().node]),defaultTitle:f().string,defer:f().bool,encodeSpecialCharacters:f().bool,htmlAttributes:f().object,link:f().arrayOf(f().object),meta:f().arrayOf(f().object),noscript:f().arrayOf(f().object),onChangeClientState:f().func,script:f().arrayOf(f().object),style:f().arrayOf(f().object),title:f().string,titleAttributes:f().object,titleTemplate:f().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=ve({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var ge,Ee,xe=ye,Te=n(9),we=Te.ZP.button(ge||(ge=(0,l.Z)(["\n  .hamburger-box-inner {\n    color: var(--light-navy); /*Hack to stop test being visible*/\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 30;\n    height: 2px;\n    border-radius: 4px;\n    background-color: var(--green);\n    transition-duration: 0.22s;\n    transition-property: transform;\n    transition-delay: ",";\n    transform: rotate(",");\n    transition-timing-function: cubic-bezier(\n      ","\n    );\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: auto;\n      right: 0;\n      width: 30px;\n      height: 2px;\n      border-radius: 4px;\n      background-color: var(--green);\n      transition-timing-function: ease;\n      transition-duration: 0.15s;\n      transition-property: transform;\n    }\n    &:before {\n      width: ",";\n      top: ",";\n      opacity: ",";\n      transition: ",";\n    }\n    &:after {\n      width: ",";\n      bottom: ",";\n      transform: rotate(",");\n      transition: ",";\n    }\n  }\n"])),(function(e){return e.menuOpen?"0.12s":"0s"}),(function(e){return e.menuOpen?"225deg":"0deg"}),(function(e){return e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}),(function(e){return e.menuOpen?"100%":"120%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?0:1}),(function(e){return e.menuOpen?"var(--ham-before-active)":"var(--ham-before)"}),(function(e){return e.menuOpen?"100%":"80%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?"-90deg":"0"}),(function(e){return e.menuOpen?"var(--ham-after-active)":"var(--ham-after)"})),Ce=Te.ZP.div(Ee||(Ee=(0,l.Z)(["\n  @media screen and (max-width: 768px) {\n    position: fixed;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    //backdrop-filter: blur(10px);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 50px 10px;\n    width: min(75vw, 400px);\n    min-height: 100vh;\n    //min-height: 100%;\n    outline: 0;\n    background-color: var(--light-navy);\n    box-shadow: -10px 0px 30px -15px var(--navy-shadow);\n    z-index: 9;\n    //this causes a horizontal scroll bar on edge and chrome.\n    //transform: translateX(","vw);\n    visibility: ",";\n    transition: var(--transition);\n  }\n  nav {\n    width: 100%;\n    flex-direction: column;\n    color: var(--lightest-slate);\n    font-family: var(--font-mono);\n    text-align: center;\n  }\n  ol {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    width: 100%;\n    li {\n      margin: 50px auto 20px;\n      &:before {\n        display: block;\n        margin-bottom: 5px;\n        color: var(--green);\n        font-size: var(--fz-sm);\n      }\n    }\n    a {\n      //background-color: pink;\n      width: 100%;\n      //padding: 30px 20px 20px;\n      color: white;\n      text-decoration: none;\n    }\n  }\n"])),(function(e){return e.menuOpen?0:100}),(function(e){return e.menuOpen?"visible":"hidden"})),Oe=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1],r=(0,s.useRef)(null),i=function(e){e.currentTarget.innerWidth>768&&n(!1)};return(0,s.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),s.createElement("div",{className:"styledMenu"},s.createElement(ye,null,s.createElement("body",{className:t?"blur":""})),s.createElement(we,{className:"styledHamburgerButton",onClick:function(){return n(!t)},menuOpen:t,ref:r},s.createElement("div",{className:"hamburger-box"},s.createElement("div",{className:"hamburger-box-inner"},"test"))),s.createElement(Ce,{menuOpen:t,"aria-hidden":!t},s.createElement("nav",null,s.createElement("ol",null,c.navLinks&&c.navLinks.map((function(e,t){var r=e.url,i=e.name;return s.createElement("li",null,s.createElement(u.Link,{to:r,onClick:function(){return n(!1)},className:"menuLink"},i))}))))))},Se=n(3493),ke=n.n(Se),Ae=function(e){var t=(0,s.useState)(0)[1],n=0;var r=ke()((function(){var r=(document.documentElement||document.body).scrollTop;t((function(e){return n=e,r})),e({previousScrollTop:n,currentScrollTop:r})}),250);(0,s.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[])};function Ne(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function je(){return(je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Pe=n(3552),Le=s.createContext(null);function Me(e,t){var n=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,s.isValidElement)(e)?t(e):e}(e)})),n}function Ie(e,t,n){return null!=n[t]?n[t]:e.props[t]}function Re(e,t,n){var r=Me(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var u in t){if(i[u])for(r=0;r<i[u].length;r++){var c=i[u][r];s[i[u][r]]=n(c)}s[u]=n(u)}for(r=0;r<o.length;r++)s[o[r]]=n(o[r]);return s}(t,r);return Object.keys(i).forEach((function(o){var a=i[o];if((0,s.isValidElement)(a)){var u=o in t,c=o in r,l=t[o],p=(0,s.isValidElement)(l)&&!l.props.in;!c||u&&!p?c||!u||p?c&&u&&(0,s.isValidElement)(l)&&(i[o]=(0,s.cloneElement)(a,{onExited:n.bind(null,a),in:l.props.in,exit:Ie(a,"exit",e),enter:Ie(a,"enter",e)})):i[o]=(0,s.cloneElement)(a,{in:!1}):i[o]=(0,s.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:Ie(a,"exit",e),enter:Ie(a,"enter",e)})}})),i}var De=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},ze=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,Pe.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,i=t.children,o=t.handleExited;return{children:t.firstRender?(n=e,r=o,Me(n.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:Ie(e,"appear",n),enter:Ie(e,"enter",n),exit:Ie(e,"exit",n)})}))):Re(e,i,o),firstRender:!1}},n.handleExited=function(e,t){var n=Me(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=je({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=Ne(e,["component","childFactory"]),i=this.state.contextValue,o=De(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?s.createElement(Le.Provider,{value:i},o):s.createElement(Le.Provider,{value:i},s.createElement(t,r,o))},t}(s.Component);ze.defaultProps={component:"div",childFactory:function(e){return e}};var Fe=ze;function _e(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var He=n(3935),Ue=!1,Be="unmounted",Ve="exited",qe="entering",We="entered",Ye="exiting",Ze=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var i,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=Ve,r.appearStatus=qe):i=We:i=t.unmountOnExit||t.mountOnEnter?Be:Ve,r.state={status:i},r.nextCallback=null,r}(0,Pe.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===Be?{status:Ve}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==qe&&n!==We&&(t=qe):n!==qe&&n!==We||(t=Ye)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===qe?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===Ve&&this.setState({status:Be})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[He.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!n||Ue?this.safeSetState({status:We},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:qe},(function(){t.props.onEntering(o,a),t.onTransitionEnd(u,(function(){t.safeSetState({status:We},(function(){t.props.onEntered(o,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:He.findDOMNode(this);t&&!Ue?(this.props.onExit(r),this.safeSetState({status:Ye},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:Ve},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Ve},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:He.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===Be)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Ne(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(Le.Provider,{value:null},"function"==typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function $e(){}Ze.contextType=Le,Ze.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$e,onEntering:$e,onEntered:$e,onExit:$e,onExiting:$e,onExited:$e},Ze.UNMOUNTED=Be,Ze.EXITED=Ve,Ze.ENTERING=qe,Ze.ENTERED=We,Ze.EXITING=Ye;var Ke=Ze,Je=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.remove(r):"string"==typeof n.className?n.className=_e(n.className,r):n.setAttribute("class",_e(n.className&&n.className.baseVal||"",r)));var n,r}))},Ge=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1];t.removeClasses(i,"exit"),t.addClass(i,o?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.addClass(i,o,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.resolveArguments(e,n),i=r[0],o=r[1]?"appear":"enter";t.removeClasses(i,o),t.addClass(i,o,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?""+(r&&n?n+"-":"")+e:n[e];return{baseClassName:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}(0,Pe.Z)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var r=this.getClassNames(t)[n+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&i&&(r+=" "+i),"active"===n&&e&&e.scrollTop,r&&(this.appliedClasses[t][n]=r,function(e,t){e&&t&&t.split(" ").forEach((function(t){return r=t,void((n=e).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"==typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)));var n,r}))}(e,r))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],r=n.base,i=n.active,o=n.done;this.appliedClasses[t]={},r&&Je(e,r),i&&Je(e,i),o&&Je(e,o)},n.render=function(){var e=this.props,t=(e.classNames,Ne(e,["classNames"]));return s.createElement(Ke,je({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);Ge.defaultProps={classNames:""};var Xe,Qe=Ge,et=function(){var e=(0,s.useState)(!1),t=e[0],n=e[1];Ae((function(e){var t=e.previousScrollTop,r=e.currentScrollTop,i=t<r,o=r>80;setTimeout((function(){n(i&&o)}),200)}));var r=t?"hidden":"";return s.createElement("header",{className:"styledHeader "+r},s.createElement("div",{className:"styledNav"},s.createElement(u.Link,{to:"/",className:"home"},"Chris Aston"),s.createElement("div",{className:"styledLinks"},s.createElement("ol",null,s.createElement(Fe,null,c.navLinks&&c.navLinks.map((function(e,t){var n=e.url,r=e.name;return s.createElement(Qe,{key:t},s.createElement("li",null,s.createElement(u.Link,{to:n,className:"link"},r)))}))))),s.createElement(Fe,{component:null},s.createElement(Qe,null,s.createElement(Oe,null)))))},tt=function(){return s.createElement(xe,{title:"Chris Aston"},s.createElement("html",{lang:"en"}))},nt=(0,Te.vJ)(Xe||(Xe=(0,l.Z)(["\n  :root {\n    --green: #64ffda;\n    --light-navy: #112240;\n     \n    --navy-shadow: rgba(2, 12, 27, 0.7);\n    --nav-height: 70px;\n    --nav-scroll-height: 70px;\n\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  }\n"]))),rt=function(e){return s.createElement("div",null,s.createElement(nt,null),s.createElement(tt,null),s.createElement(et,null),s.createElement("div",{id:"content"},e.children))}},537:function(e){e.exports={featuredProjects:[{title:"",imgPath:"",description:"",tech:"",url:""}],projects:[{title:"Lottery Simulator",description:"A console application to simmulate Lottery or Thunderball games. Then the data is saved to a local MS SQL Server database using Entity Framework using a code first appraoch.",year:"2021",tech:"C# .Net Core + ADO.Net Entity Framework",url:"/lottery",display:!1},{title:"Pencil Puzzle Research Project (Mcomp Project)",description:"This was a research project. For this project, we looked at algorithms performance Vs pencil puzzles.",year:"2019-2020",tech:"C++",url:"/pencil-puzzle",display:!1},{title:"Booking System",description:"Group work booking system where we designed a booking application using the SOLID design principles and UML while making use of Entity Framework (Database first appraoch) and design patterns.",year:"2019",tech:"C# .Net Framework + ADO.Net Entity Framework",url:"/booking-system",display:!1},{title:"Web App Intergration",description:"A SPA Web application using AngularJS for the front end, implementing the MVC pattern, and a RESTful interface for the backend using OO-PHP.",year:"2019",tech:"OO-PHP, AngularJS",url:"/wai",display:!1},{title:"Undergraduate Computing Project",description:"The Undergraduate dissertation project was an embedded systems project about creating a mapping robot using a SLAM algorithm.",year:"2018-2019",tech:"C++ and Java",url:"/undergraduate-computing-project",display:!1},{title:"Busy Backpack",description:"Prototype website to replace Busy Backpack current site. Making sure the designs had a good UI and UX, be optimised for search engines, and look well on mobile devices.",year:"2018-2019",tech:"ReactJS, HTML5, CSS3, PHP7",url:"/busy-backpack",display:!1}],navLinks:[{name:"About",url:"/#about"},{name:"Projects",url:"/#projects"},{name:"Contact",url:"/#contact"}],socials:[{name:"GitHub",url:"https://github.com/Chris0698"},{name:"LinkedIn",url:"https://www.linkedin.com/in/chris-aston-45b4a3202/"}]}},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},4239:function(e,t,n){var r=n(2705),i=n(9607),o=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?i(e):o(e)}},7561:function(e,t,n){var r=n(7990),i=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(i,""):e}},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=o.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(u){}var i=a.call(e);return r&&(t?e[s]=n:delete e[s]),i}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();e.exports=o},7990:function(e){var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},3279:function(e,t,n){var r=n(3218),i=n(7771),o=n(4841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var u,c,l,p,f,d,h=0,m=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=u,r=c;return u=c=void 0,h=t,p=e.apply(r,n)}function g(e){return h=e,f=setTimeout(x,t),m?y(e):p}function E(e){var n=e-d;return void 0===d||n>=t||n<0||v&&e-h>=l}function x(){var e=i();if(E(e))return T(e);f=setTimeout(x,function(e){var n=t-(e-d);return v?s(n,l-(e-h)):n}(e))}function T(e){return f=void 0,b&&u?y(e):(u=c=void 0,p)}function w(){var e=i(),n=E(e);if(u=arguments,c=this,d=e,n){if(void 0===f)return g(d);if(v)return clearTimeout(f),f=setTimeout(x,t),y(d)}return void 0===f&&(f=setTimeout(x,t)),p}return t=o(t)||0,r(n)&&(m=!!n.leading,l=(v="maxWait"in n)?a(o(n.maxWait)||0,t):l,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),h=0,u=d=c=f=void 0},w.flush=function(){return void 0===f?p:T(i())},w}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),i=n(7005);e.exports=function(e){return"symbol"==typeof e||i(e)&&"[object Symbol]"==r(e)}},7771:function(e,t,n){var r=n(5639);e.exports=function(){return r.Date.now()}},3493:function(e,t,n){var r=n(3279),i=n(3218);e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})}},4841:function(e,t,n){var r=n(7561),i=n(3218),o=n(3448),a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=s.test(e);return n||u.test(e)?c(e.slice(2),n?2:8):a.test(e)?NaN:+e}}}]);
//# sourceMappingURL=a6a3996e82fe98c23d4a63f103540cf1e4d1c0c3-0577c1df785a2b21670c.js.map