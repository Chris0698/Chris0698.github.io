(self.webpackChunkchris_aston_web_portfolio=self.webpackChunkchris_aston_web_portfolio||[]).push([[334],{2993:function(e){var n="undefined"!=typeof Element,t="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,u,c,l;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(!o(e[u],a[u]))return!1;return!0}if(t&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!o(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(u=s;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=s;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,c[u]))return!1;if(n&&e instanceof Element)return!1;for(u=s;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!o(e[c[u]],a[c[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,n){try{return o(e,n)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}}},4839:function(e,n,t){"use strict";var r,i=t(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,n,t){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof n)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function l(){u=e(c.map((function(e){return e.props}))),p.canUseDOM?n(u):t&&(u=t(u))}var p=function(e){var n,t;function i(){return e.apply(this,arguments)||this}t=e,(n=i).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){c.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),l()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",s),p}}},9111:function(e,n,t){"use strict";t.d(n,{Z:function(){return cn}});var r,i,o,a,s=t(7294),u=t(5761),c=t(5444),l=t(9),p=t(537),f=t(5697),d=t.n(f),h=t(4839),m=t.n(h),v=t(2993),b=t.n(v),g=t(6494),y=t.n(g),E="bodyAttributes",x="htmlAttributes",T="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},C=(Object.keys(w).map((function(e){return w[e]})),"charset"),O="cssText",k="href",S="http-equiv",A="innerHTML",N="itemprop",j="name",L="property",P="rel",R="src",I="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",_="defer",z="encodeSpecialCharacters",Z="onChangeClientState",F="titleTemplate",H=Object.keys(M).reduce((function(e,n){return e[M[n]]=n,e}),{}),U=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="data-react-helmet",V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),K=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},W=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},$=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},X=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===n?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var n=te(e,w.TITLE),t=te(e,F);if(t&&n)return t.replace(/%s/g,(function(){return Array.isArray(n)?n.join(""):n}));var r=te(e,D);return n||r||void 0},J=function(e){return te(e,Z)||function(){}},Q=function(e,n){return n.filter((function(n){return void 0!==n[e]})).map((function(n){return n[e]})).reduce((function(e,n){return K({},e,n)}),{})},ee=function(e,n){return n.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(n,t){if(!n.length)for(var r=Object.keys(t),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&t[o])return n.concat(t)}return n}),[])},ne=function(e,n,t){var r={};return t.filter((function(n){return!!Array.isArray(n[e])||(void 0!==n[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+V(n[e])+'"'),!1)})).map((function(n){return n[e]})).reverse().reduce((function(e,t){var i={};t.filter((function(e){for(var t=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],u=s.toLowerCase();-1===n.indexOf(u)||t===P&&"canonical"===e[t].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(t=u),-1===n.indexOf(s)||s!==A&&s!==O&&s!==N||(t=s)}if(!t||!e[t])return!1;var c=e[t].toLowerCase();return r[t]||(r[t]={}),i[t]||(i[t]={}),!r[t][c]&&(i[t][c]=!0,!0)})).reverse().forEach((function(n){return e.push(n)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],u=y()({},r[s],i[s]);r[s]=u}return e}),[]).reverse()},te=function(e,n){for(var t=e.length-1;t>=0;t--){var r=e[t];if(r.hasOwnProperty(n))return r[n]}return null},re=(r=Date.now(),function(e){var n=Date.now();n-r>16?(r=n,e(n)):setTimeout((function(){re(e)}),0)}),ie=function(e){return clearTimeout(e)},oe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||re:t.g.requestAnimationFrame||re,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ie:t.g.cancelAnimationFrame||ie,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ue=null,ce=function(e,n){var t=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,p=e.title,f=e.titleAttributes;fe(w.BODY,r),fe(w.HTML,i),pe(p,f);var d={baseTag:de(w.BASE,t),linkTags:de(w.LINK,o),metaTags:de(w.META,a),noscriptTags:de(w.NOSCRIPT,s),scriptTags:de(w.SCRIPT,c),styleTags:de(w.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var n=d[e],t=n.newTags,r=n.oldTags;t.length&&(h[e]=t),r.length&&(m[e]=d[e].oldTags)})),n&&n(),u(e,h,m)},le=function(e){return Array.isArray(e)?e.join(""):e},pe=function(e,n){void 0!==e&&document.title!==e&&(document.title=le(e)),fe(w.TITLE,n)},fe=function(e,n){var t=document.getElementsByTagName(e)[0];if(t){for(var r=t.getAttribute(B),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(n),s=0;s<a.length;s++){var u=a[s],c=n[u]||"";t.getAttribute(u)!==c&&t.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var l=o.indexOf(u);-1!==l&&o.splice(l,1)}for(var p=o.length-1;p>=0;p--)t.removeAttribute(o[p]);i.length===o.length?t.removeAttribute(B):t.getAttribute(B)!==a.join(",")&&t.setAttribute(B,a.join(","))}},de=function(e,n){var t=document.head||document.querySelector(w.HEAD),r=t.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return n&&n.length&&n.forEach((function(n){var t=document.createElement(e);for(var r in n)if(n.hasOwnProperty(r))if(r===A)t.innerHTML=n.innerHTML;else if(r===O)t.styleSheet?t.styleSheet.cssText=n.cssText:t.appendChild(document.createTextNode(n.cssText));else{var s=void 0===n[r]?"":n[r];t.setAttribute(r,s)}t.setAttribute(B,"true"),i.some((function(e,n){return a=n,t.isEqualNode(e)}))?i.splice(a,1):o.push(t)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return t.appendChild(e)})),{oldTags:i,newTags:o}},he=function(e){return Object.keys(e).reduce((function(n,t){var r=void 0!==e[t]?t+'="'+e[t]+'"':""+t;return n?n+" "+r:r}),"")},me=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,t){return n[M[t]||t]=e[t],n}),n)},ve=function(e,n,t){switch(e){case w.TITLE:return{toComponent:function(){return e=n.title,t=n.titleAttributes,(r={key:e})[B]=!0,i=me(t,r),[s.createElement(w.TITLE,i,e)];var e,t,r,i},toString:function(){return function(e,n,t,r){var i=he(t),o=le(n);return i?"<"+e+' data-react-helmet="true" '+i+">"+X(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(o,r)+"</"+e+">"}(e,n.title,n.titleAttributes,t)}};case E:case x:return{toComponent:function(){return me(n)},toString:function(){return he(n)}};default:return{toComponent:function(){return function(e,n){return n.map((function(n,t){var r,i=((r={key:t})[B]=!0,r);return Object.keys(n).forEach((function(e){var t=M[e]||e;if(t===A||t===O){var r=n.innerHTML||n.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[t]=n[e]})),s.createElement(e,i)}))}(e,n)},toString:function(){return function(e,n,t){return n.reduce((function(n,r){var i=Object.keys(r).filter((function(e){return!(e===A||e===O)})).reduce((function(e,n){var i=void 0===r[n]?n:n+'="'+X(r[n],t)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===U.indexOf(e);return n+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,n,t)}}}},be=function(e){var n=e.baseTag,t=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,u=e.scriptTags,c=e.styleTags,l=e.title,p=void 0===l?"":l,f=e.titleAttributes;return{base:ve(w.BASE,n,r),bodyAttributes:ve(E,t,r),htmlAttributes:ve(x,i,r),link:ve(w.LINK,o,r),meta:ve(w.META,a,r),noscript:ve(w.NOSCRIPT,s,r),script:ve(w.SCRIPT,u,r),style:ve(w.STYLE,c,r),title:ve(w.TITLE,{title:p,titleAttributes:f},r)}},ge=m()((function(e){return{baseTag:ee([k,I],e),bodyAttributes:Q(E,e),defer:te(e,_),encode:te(e,z),htmlAttributes:Q(x,e),linkTags:ne(w.LINK,[P,k],e),metaTags:ne(w.META,[j,C,S,L,N],e),noscriptTags:ne(w.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:ne(w.SCRIPT,[R,A],e),styleTags:ne(w.STYLE,[O],e),title:G(e),titleAttributes:Q(T,e)}}),(function(e){ue&&ae(ue),e.defer?ue=oe((function(){ce(e,(function(){ue=null}))})):(ce(e),ue=null)}),be)((function(){return null})),ye=(i=ge,a=o=function(e){function n(){return q(this,n),$(this,e.apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,e),n.prototype.shouldComponentUpdate=function(e){return!b()(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,n){if(!n)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:n};case w.STYLE:return{cssText:n}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var n,t=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return K({},r,((n={})[t.type]=[].concat(r[t.type]||[],[K({},i,this.mapNestedChildrenToProps(t,o))]),n))},n.prototype.mapObjectTypeChildren=function(e){var n,t,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return K({},i,((n={})[r.type]=a,n.titleAttributes=K({},o),n));case w.BODY:return K({},i,{bodyAttributes:K({},o)});case w.HTML:return K({},i,{htmlAttributes:K({},o)})}return K({},i,((t={})[r.type]=K({},o),t))},n.prototype.mapArrayTypeChildrenToProps=function(e,n){var t=K({},n);return Object.keys(e).forEach((function(n){var r;t=K({},t,((r={})[n]=e[n],r))})),t},n.prototype.warnOnInvalidChildren=function(e,n){return!0},n.prototype.mapChildrenToProps=function(e,n){var t=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(n,t){return n[H[t]||t]=e[t],n}),n)}(W(i,["children"]));switch(t.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=t.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:n=t.mapObjectTypeChildren({child:e,newProps:n,newChildProps:a,nestedChildren:o})}}})),n=this.mapArrayTypeChildrenToProps(r,n)},n.prototype.render=function(){var e=this.props,n=e.children,t=W(e,["children"]),r=K({},t);return n&&(r=this.mapChildrenToProps(n,r)),s.createElement(i,r)},Y(n,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),n}(s.Component),o.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=be({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var Ee,xe,Te,we=ye,Ce=l.ZP.div(Ee||(Ee=(0,u.Z)(["\n  display: none;\n  @media (max-width: 768px) {\n    display: block;\n  }\n"]))),Oe=l.ZP.button(xe||(xe=(0,u.Z)(["\n  @media screen and (max-width: 768px) {\n    position: absolute;\n    right: 5%;\n    z-index: 10;\n    //margin-right: -15px;\n    padding: 15px;\n    //border: 0;\n    background-color: transparent;\n    color: inherit;\n    text-transform: none;\n    transition-timing-function: linear;\n    transition-duration: 0.15s;\n    transition-property: opacity, filter;\n  }\n\n  .hamburger-box {\n    display: inline-block;\n    position: relative;\n    width: 30px;\n    height: 24px;\n  }\n\n  .hamburger-box-inner {\n    color: var(--light-navy); /*Hack to stop test being visible*/\n    position: absolute;\n    top: 50%;\n    right: 0;\n    width: 30;\n    height: 2px;\n    border-radius: 4px;\n    background-color: var(--green);\n    transition-duration: 0.22s;\n    transition-property: transform;\n    transition-delay: ",";\n    transform: rotate(",");\n    transition-timing-function: cubic-bezier(\n      ","\n    );\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      left: auto;\n      right: 0;\n      width: 30px;\n      height: 2px;\n      border-radius: 4px;\n      background-color: var(--green);\n      transition-timing-function: ease;\n      transition-duration: 0.15s;\n      transition-property: transform;\n    }\n    &:before {\n      width: ",";\n      top: ",";\n      opacity: ",";\n      transition: ",";\n    }\n    &:after {\n      width: ",";\n      bottom: ",";\n      transform: rotate(",");\n      transition: ",";\n    }\n  }\n"])),(function(e){return e.menuOpen?"0.12s":"0s"}),(function(e){return e.menuOpen?"225deg":"0deg"}),(function(e){return e.menuOpen?"0.215, 0.61, 0.355, 1":"0.55, 0.055, 0.675, 0.19"}),(function(e){return e.menuOpen?"100%":"120%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?0:1}),(function(e){return e.menuOpen?"var(--ham-before-active)":"var(--ham-before)"}),(function(e){return e.menuOpen?"100%":"80%"}),(function(e){return e.menuOpen?"0":"-10px"}),(function(e){return e.menuOpen?"-90deg":"0"}),(function(e){return e.menuOpen?"var(--ham-after-active)":"var(--ham-after)"})),ke=l.ZP.div(Te||(Te=(0,u.Z)(["\n  @media screen and (max-width: 768px) {\n    position: fixed;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: hidden;\n    //backdrop-filter: blur(10px);\n    top: 0;\n    bottom: 0;\n    right: 0;\n    padding: 50px 10px;\n    width: min(75vw, 400px);\n    min-height: 100vh;\n    //min-height: 100%;\n    outline: 0;\n    background-color: var(--light-navy);\n    box-shadow: -10px 0px 30px -15px var(--navy-shadow);\n    z-index: 9;\n    //this causes a horizontal scroll bar on edge and chrome.\n    //transform: translateX(","vw);\n    visibility: ",";\n    transition: var(--transition);\n  }\n\n  nav {\n    width: 100%;\n    flex-direction: column;\n    color: var(--lightest-slate);\n    font-family: var(--font-mono);\n    text-align: center;\n  }\n\n  ol {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    width: 100%;\n\n    li {\n      margin: 50px auto 20px;\n\n      &:before {\n        display: block;\n        margin-bottom: 5px;\n        color: var(--green);\n        font-size: var(--fz-sm);\n      }\n    }\n\n    a {\n      //background-color: pink;\n      width: 100%;\n      //padding: 30px 20px 20px;\n      color: white;\n      text-decoration: none;\n    }\n  }\n"])),(function(e){return e.menuOpen?0:100}),(function(e){return e.menuOpen?"visible":"hidden"})),Se=function(){var e=(0,s.useState)(!1),n=e[0],t=e[1],r=(0,s.useRef)(null),i=function(e){e.currentTarget.innerWidth>768&&t(!1)};return(0,s.useEffect)((function(){return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[]),s.createElement(Ce,null,s.createElement(ye,null,s.createElement("body",{className:n?"blur":""})),s.createElement(Oe,{onClick:function(){return t(!n)},menuOpen:n,ref:r},s.createElement("div",{className:"hamburger-box"},s.createElement("div",{className:"hamburger-box-inner"},"test"))),s.createElement(ke,{menuOpen:n,"aria-hidden":!n},s.createElement("nav",null,s.createElement("ol",null,p.navLinks&&p.navLinks.map((function(e,n){var r=e.url,i=e.name;return s.createElement("li",null,s.createElement(c.Link,{to:r,onClick:function(){return t(!1)},className:"menuLink"},i))}))))))};function Ae(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}function Ne(){return(Ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var je=t(3552),Le=s.createContext(null);function Pe(e,n){var t=Object.create(null);return e&&s.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,s.isValidElement)(e)?n(e):e}(e)})),t}function Re(e,n,t){return null!=t[n]?t[n]:e.props[n]}function Ie(e,n,t){var r=Pe(e.children),i=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),o=[];for(var a in e)a in n?o.length&&(i[a]=o,o=[]):o.push(a);var s={};for(var u in n){if(i[u])for(r=0;r<i[u].length;r++){var c=i[u][r];s[i[u][r]]=t(c)}s[u]=t(u)}for(r=0;r<o.length;r++)s[o[r]]=t(o[r]);return s}(n,r);return Object.keys(i).forEach((function(o){var a=i[o];if((0,s.isValidElement)(a)){var u=o in n,c=o in r,l=n[o],p=(0,s.isValidElement)(l)&&!l.props.in;!c||u&&!p?c||!u||p?c&&u&&(0,s.isValidElement)(l)&&(i[o]=(0,s.cloneElement)(a,{onExited:t.bind(null,a),in:l.props.in,exit:Re(a,"exit",e),enter:Re(a,"enter",e)})):i[o]=(0,s.cloneElement)(a,{in:!1}):i[o]=(0,s.cloneElement)(a,{onExited:t.bind(null,a),in:!0,exit:Re(a,"exit",e),enter:Re(a,"enter",e)})}})),i}var Me=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},De=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,je.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,r,i=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,r=o,Pe(t.children,(function(e){return(0,s.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:Re(e,"appear",t),enter:Re(e,"enter",t),exit:Re(e,"exit",t)})}))):Ie(e,i,o),firstRender:!1}},t.handleExited=function(e,n){var t=Pe(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=Ne({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,r=Ae(e,["component","childFactory"]),i=this.state.contextValue,o=Me(this.state.children).map(t);return delete r.appear,delete r.enter,delete r.exit,null===n?s.createElement(Le.Provider,{value:i},o):s.createElement(Le.Provider,{value:i},s.createElement(n,r,o))},n}(s.Component);De.defaultProps={component:"div",childFactory:function(e){return e}};var _e=De;function ze(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var Ze=t(3935),Fe=!1,He="unmounted",Ue="exited",Be="entering",Ve="entered",qe="exiting",Ye=function(e){function n(n,t){var r;r=e.call(this,n,t)||this;var i,o=t&&!t.isMounting?n.enter:n.appear;return r.appearStatus=null,n.in?o?(i=Ue,r.appearStatus=Be):i=Ve:i=n.unmountOnExit||n.mountOnEnter?He:Ue,r.state={status:i},r.nextCallback=null,r}(0,je.Z)(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===He?{status:Ue}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==Be&&t!==Ve&&(n=Be):t!==Be&&t!==Ve||(n=qe)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,r=this.props.timeout;return e=n=t=r,null!=r&&"number"!=typeof r&&(e=r.exit,n=r.enter,t=void 0!==r.appear?r.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){void 0===e&&(e=!1),null!==n?(this.cancelNextCallback(),n===Be?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===Ue&&this.setState({status:He})},t.performEnter=function(e){var n=this,t=this.props.enter,r=this.context?this.context.isMounting:e,i=this.props.nodeRef?[r]:[Ze.findDOMNode(this),r],o=i[0],a=i[1],s=this.getTimeouts(),u=r?s.appear:s.enter;!e&&!t||Fe?this.safeSetState({status:Ve},(function(){n.props.onEntered(o)})):(this.props.onEnter(o,a),this.safeSetState({status:Be},(function(){n.props.onEntering(o,a),n.onTransitionEnd(u,(function(){n.safeSetState({status:Ve},(function(){n.props.onEntered(o,a)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),r=this.props.nodeRef?void 0:Ze.findDOMNode(this);n&&!Fe?(this.props.onExit(r),this.safeSetState({status:qe},(function(){e.props.onExiting(r),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:Ue},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:Ue},(function(){e.props.onExited(r)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(r){t&&(t=!1,n.nextCallback=null,e(r))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:Ze.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(t&&!r){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],o=i[0],a=i[1];this.props.addEndListener(o,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===He)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,Ae(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(Le.Provider,{value:null},"function"==typeof t?t(e,r):s.cloneElement(s.Children.only(t),r))},n}(s.Component);function Ke(){}Ye.contextType=Le,Ye.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Ke,onEntering:Ke,onEntered:Ke,onExit:Ke,onExiting:Ke,onExited:Ke},Ye.UNMOUNTED=He,Ye.EXITED=Ue,Ye.ENTERING=Be,Ye.ENTERED=Ve,Ye.EXITING=qe;var We=Ye,$e=function(e,n){return e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.remove(r):"string"==typeof t.className?t.className=ze(t.className,r):t.setAttribute("class",ze(t.className&&t.className.baseVal||"",r)));var t,r}))},Xe=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))||this).appliedClasses={appear:{},enter:{},exit:{}},n.onEnter=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1];n.removeClasses(i,"exit"),n.addClass(i,o?"appear":"enter","base"),n.props.onEnter&&n.props.onEnter(e,t)},n.onEntering=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1]?"appear":"enter";n.addClass(i,o,"active"),n.props.onEntering&&n.props.onEntering(e,t)},n.onEntered=function(e,t){var r=n.resolveArguments(e,t),i=r[0],o=r[1]?"appear":"enter";n.removeClasses(i,o),n.addClass(i,o,"done"),n.props.onEntered&&n.props.onEntered(e,t)},n.onExit=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"appear"),n.removeClasses(t,"enter"),n.addClass(t,"exit","base"),n.props.onExit&&n.props.onExit(e)},n.onExiting=function(e){var t=n.resolveArguments(e)[0];n.addClass(t,"exit","active"),n.props.onExiting&&n.props.onExiting(e)},n.onExited=function(e){var t=n.resolveArguments(e)[0];n.removeClasses(t,"exit"),n.addClass(t,"exit","done"),n.props.onExited&&n.props.onExited(e)},n.resolveArguments=function(e,t){return n.props.nodeRef?[n.props.nodeRef.current,e]:[e,t]},n.getClassNames=function(e){var t=n.props.classNames,r="string"==typeof t,i=r?""+(r&&t?t+"-":"")+e:t[e];return{baseClassName:i,activeClassName:r?i+"-active":t[e+"Active"],doneClassName:r?i+"-done":t[e+"Done"]}},n}(0,je.Z)(n,e);var t=n.prototype;return t.addClass=function(e,n,t){var r=this.getClassNames(n)[t+"ClassName"],i=this.getClassNames("enter").doneClassName;"appear"===n&&"done"===t&&i&&(r+=" "+i),"active"===t&&e&&e.scrollTop,r&&(this.appliedClasses[n][t]=r,function(e,n){e&&n&&n.split(" ").forEach((function(n){return r=n,void((t=e).classList?t.classList.add(r):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(t,r)||("string"==typeof t.className?t.className=t.className+" "+r:t.setAttribute("class",(t.className&&t.className.baseVal||"")+" "+r)));var t,r}))}(e,r))},t.removeClasses=function(e,n){var t=this.appliedClasses[n],r=t.base,i=t.active,o=t.done;this.appliedClasses[n]={},r&&$e(e,r),i&&$e(e,i),o&&$e(e,o)},t.render=function(){var e=this.props,n=(e.classNames,Ae(e,["classNames"]));return s.createElement(We,Ne({},n,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(s.Component);Xe.defaultProps={classNames:""};var Ge,Je,Qe,en,nn=Xe,tn=l.ZP.header(Ge||(Ge=(0,u.Z)(["\n  position: fixed;\n  box-shadow: 0 10px 30px -10px var(--navy-shadow);\n  top: 0;\n  z-index: 11;\n  width: 100%;\n  height: var(--nav-height);\n  background-color: #112240;\n  background-color: rgba(10, 25, 47, 0.6);\n  filter: none !important;\n  pointer-events: auto !important;\n  user-select: auto !important;\n  backdrop-filter: blur(10px);\n  transition: var(--transition);\n"]))),rn=l.ZP.nav(Je||(Je=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  z-index: 12;\n  //background-color: green;\n"]))),on=l.ZP.div(Qe||(Qe=(0,u.Z)(["\n  //background-color: pink;\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n  margin-right: 5%;\n  width: 50%;\n\n  ol {\n    //background-color: red;\n    padding: 0;\n    margin: 0;\n    float: right;\n    margin-top: 0;\n    // padding-top: 3px;\n    //margin-right: 5%;\n    margin-top: 15px;\n    li {\n      display: inline-block;\n      right: 30%;\n      // background-color: red;\n      margin-top: -2px;\n      padding-top:0;\n      a {\n        // background-color: blue;\n        color: white;\n        text-decoration: none;\n        font-size: 16px;\n        //float: right;\n        margin: 10px;\n        //padding: 10px;\n        float: right;\n        text-align: right;\n      }\n    }\n  }\n"]))),an=function(){return s.createElement(tn,null,s.createElement(rn,null,s.createElement(c.Link,{to:"/",className:"home"},"Chris Aston"),s.createElement(on,null,s.createElement("ol",null,s.createElement(_e,null,p.navLinks&&p.navLinks.map((function(e,n){var t=e.url,r=e.name;return s.createElement(nn,{key:n},s.createElement("li",null,s.createElement(c.Link,{to:t,className:"link"},r)))}))))),s.createElement(_e,{component:null},s.createElement(nn,null,s.createElement(Se,null)))))},sn=function(){return s.createElement(we,{title:"Chris Aston"},s.createElement("html",{lang:"en"}))},un=(0,l.vJ)(en||(en=(0,u.Z)(["\n  :root {\n    --green: #64ffda;\n    --light-navy: #112240;\n     \n    --navy-shadow: rgba(2, 12, 27, 0.7);\n    --nav-height: 70px;\n    --nav-scroll-height: 70px;\n\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  }\n"]))),cn=function(e){return s.createElement("div",null,s.createElement(un,null),s.createElement(sn,null),s.createElement(an,null),s.createElement("div",{id:"content"},e.children))}},537:function(e){e.exports={navLinks:[{name:"About",url:"/#about"},{name:"Projects",url:"/#projects"},{name:"Contact",url:"/#contact"}]}}}]);
//# sourceMappingURL=5b7106d8783398d5c123601c65f15bbaf887e6d5-339d17136bec1a132d49.js.map