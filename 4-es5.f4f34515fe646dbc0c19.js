(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{wMS7:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}()||function(e,t){if(e){if("string"==typeof e)return o(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,m=Object.seal,f=Object.create,p="undefined"!=typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=k(Array.prototype.forEach),b=k(Array.prototype.pop),v=k(Array.prototype.push),T=k(String.prototype.toLowerCase),N=k(String.prototype.toString),E=k(String.prototype.match),A=k(String.prototype.replace),w=k(String.prototype.indexOf),S=k(String.prototype.trim),_=k(RegExp.prototype.test),x=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function k(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:T,i&&i(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var c=n(a);c!==a&&(l(t)||(t[o]=c),a=c)}e[a]=!0}return e}function L(e){var t,n=f(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return k(n.get);if("function"==typeof n.value)return k(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var R=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=u(["#text"]),z=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=m(/<%[\w\W]*|[\w\W]*%>/gm),q=m(/\${[\w\W]*}/gm),Y=m(/^data-[\-\w.\u00B7-\uFFFF]/),$=m(/^aria-[\-\w]+$/),K=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=m(/^(?:\w+script|data):/i),X=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=m(/^html$/i),Z=m(/^[a-z][.\w]*(-[.\w]+)+$/i),Q=function(){return"undefined"==typeof window?null:window};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),o=function(e){return t(e)};if(o.version="2.5.7",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,m=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,k=n.trustedTypes,ee=m.prototype,te=C(ee,"cloneNode"),ne=C(ee,"nextSibling"),re=C(ee,"childNodes"),oe=C(ee,"parentNode");if("function"==typeof c){var ae=i.createElement("template");ae.content&&ae.content.ownerDocument&&(i=ae.content.ownerDocument)}var ie=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}}(k,a),le=ie?ie.createHTML(""):"",ce=i.implementation,se=i.createNodeIterator,ue=i.createDocumentFragment,me=i.getElementsByTagName,fe=a.importNode,pe={};try{pe=L(i).documentMode?i.documentMode:{}}catch(Ct){}var de={};o.isSupported="function"==typeof oe&&ce&&void 0!==ce.createHTMLDocument&&9!==pe;var he,ge,ye=G,be=W,ve=q,Te=Y,Ne=$,Ee=V,Ae=X,we=Z,Se=K,_e=null,xe=O({},[].concat(r(R),r(D),r(M),r(F),r(H))),ke=null,Oe=O({},[].concat(r(z),r(P),r(B),r(j))),Le=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Ce=null,Re=null,De=!0,Me=!0,Ie=!1,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!1,We=!1,qe=!0,Ye=!1,$e=!0,Ke=!1,Ve={},Xe=null,Je=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ze=null,Qe=O({},["audio","video","img","source","image","track"]),et=null,tt=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",at=ot,it=!1,lt=null,ct=O({},[nt,rt,ot],N),st=["application/xhtml+xml","text/html"],ut=null,mt=i.createElement("form"),ft=function(e){return e instanceof RegExp||e instanceof Function},pt=function(t){ut&&ut===t||(t&&"object"===e(t)||(t={}),t=L(t),he=he=-1===st.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,ge="application/xhtml+xml"===he?N:T,_e="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,ge):xe,ke="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,ge):Oe,lt="ALLOWED_NAMESPACES"in t?O({},t.ALLOWED_NAMESPACES,N):ct,et="ADD_URI_SAFE_ATTR"in t?O(L(tt),t.ADD_URI_SAFE_ATTR,ge):tt,Ze="ADD_DATA_URI_TAGS"in t?O(L(Qe),t.ADD_DATA_URI_TAGS,ge):Qe,Xe="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,ge):Je,Ce="FORBID_TAGS"in t?O({},t.FORBID_TAGS,ge):{},Re="FORBID_ATTR"in t?O({},t.FORBID_ATTR,ge):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,De=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ue=t.SAFE_FOR_TEMPLATES||!1,He=!1!==t.SAFE_FOR_XML,ze=t.WHOLE_DOCUMENT||!1,je=t.RETURN_DOM||!1,Ge=t.RETURN_DOM_FRAGMENT||!1,We=t.RETURN_TRUSTED_TYPE||!1,Be=t.FORCE_BODY||!1,qe=!1!==t.SANITIZE_DOM,Ye=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,Se=t.ALLOWED_URI_REGEXP||Se,at=t.NAMESPACE||ot,Le=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Le.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Le.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Le.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),Ge&&(je=!0),Ve&&(_e=O({},r(H)),ke=[],!0===Ve.html&&(O(_e,R),O(ke,z)),!0===Ve.svg&&(O(_e,D),O(ke,P),O(ke,j)),!0===Ve.svgFilters&&(O(_e,M),O(ke,P),O(ke,j)),!0===Ve.mathMl&&(O(_e,F),O(ke,B),O(ke,j))),t.ADD_TAGS&&(_e===xe&&(_e=L(_e)),O(_e,t.ADD_TAGS,ge)),t.ADD_ATTR&&(ke===Oe&&(ke=L(ke)),O(ke,t.ADD_ATTR,ge)),t.ADD_URI_SAFE_ATTR&&O(et,t.ADD_URI_SAFE_ATTR,ge),t.FORBID_CONTENTS&&(Xe===Je&&(Xe=L(Xe)),O(Xe,t.FORBID_CONTENTS,ge)),$e&&(_e["#text"]=!0),ze&&O(_e,["html","head","body"]),_e.table&&(O(_e,["tbody"]),delete Ce.tbody),u&&u(t),ut=t)},dt=O({},["mi","mo","mn","ms","mtext"]),ht=O({},["annotation-xml"]),gt=O({},["title","style","font","a","script"]),yt=O({},D);O(yt,M),O(yt,I);var bt=O({},F);O(bt,U);var vt=function(e){v(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Ct){try{e.outerHTML=le}catch(Ct){e.remove()}}},Tt=function(e,t){try{v(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Ct){v(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(je||Ge)try{vt(t)}catch(Ct){}else try{t.setAttribute(e,"")}catch(Ct){}},Nt=function(e){var t,n;if(Be)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===he&&at===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(at===ot)try{t=(new g).parseFromString(o,he)}catch(Ct){}if(!t||!t.documentElement){t=ce.createDocument(at,"template",null);try{t.documentElement.innerHTML=it?le:o}catch(Ct){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),at===ot?me.call(t,ze?"html":"body")[0]:ze?t.documentElement:a},Et=function(e){return se.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},At=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},wt=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},St=function(e,t,n){de[e]&&y(de[e],function(e){e.call(o,t,n,ut)})},_t=function(e){var t;if(St("beforeSanitizeElements",e,null),At(e))return vt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return vt(e),!0;var n=ge(e.nodeName);if(St("uponSanitizeElement",e,{tagName:n,allowedTags:_e}),e.hasChildNodes()&&!wt(e.firstElementChild)&&(!wt(e.content)||!wt(e.content.firstElementChild))&&_(/<[\/\w]/g,e.innerHTML)&&_(/<[\/\w]/g,e.textContent))return vt(e),!0;if("select"===n&&_(/<template/i,e.innerHTML))return vt(e),!0;if(7===e.nodeType)return vt(e),!0;if(He&&8===e.nodeType&&_(/<[\/\w]/g,e.data))return vt(e),!0;if(!_e[n]||Ce[n]){if(!Ce[n]&&kt(n)){if(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,n))return!1;if(Le.tagNameCheck instanceof Function&&Le.tagNameCheck(n))return!1}if($e&&!Xe[n]){var r=oe(e)||e.parentNode,a=re(e)||e.childNodes;if(a&&r)for(var i=a.length-1;i>=0;--i){var l=te(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,r.insertBefore(l,ne(e))}}return vt(e),!0}return e instanceof m&&!function(e){var t=oe(e);t&&t.tagName||(t={namespaceURI:at,tagName:"template"});var n=T(e.tagName),r=T(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===rt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===nt?"svg"===n&&("annotation-xml"===r||dt[r]):Boolean(yt[n]):e.namespaceURI===nt?t.namespaceURI===ot?"math"===n:t.namespaceURI===rt?"math"===n&&ht[r]:Boolean(bt[n]):e.namespaceURI===ot?!(t.namespaceURI===rt&&!ht[r])&&!(t.namespaceURI===nt&&!dt[r])&&!bt[n]&&(gt[n]||!yt[n]):!("application/xhtml+xml"!==he||!lt[e.namespaceURI]))}(e)?(vt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ue&&3===e.nodeType&&(t=A(t=e.textContent,ye," "),t=A(t,be," "),t=A(t,ve," "),e.textContent!==t&&(v(o.removed,{element:e.cloneNode()}),e.textContent=t)),St("afterSanitizeElements",e,null),!1):(vt(e),!0)},xt=function(e,t,n){if(qe&&("id"===t||"name"===t)&&(n in i||n in mt))return!1;if(Me&&!Re[t]&&_(Te,t));else if(De&&_(Ne,t));else if(!ke[t]||Re[t]){if(!(kt(e)&&(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,e)||Le.tagNameCheck instanceof Function&&Le.tagNameCheck(e))&&(Le.attributeNameCheck instanceof RegExp&&_(Le.attributeNameCheck,t)||Le.attributeNameCheck instanceof Function&&Le.attributeNameCheck(t))||"is"===t&&Le.allowCustomizedBuiltInElements&&(Le.tagNameCheck instanceof RegExp&&_(Le.tagNameCheck,n)||Le.tagNameCheck instanceof Function&&Le.tagNameCheck(n))))return!1}else if(et[t]);else if(_(Se,A(n,Ae,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!Ze[e])if(Ie&&!_(Ee,A(n,Ae,"")));else if(n)return!1;return!0},kt=function(e){return"annotation-xml"!==e&&E(e,we)},Ot=function(t){var n,r,a,i;St("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(r="value"===u?n.value:S(n.value),a=ge(u),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,St("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(Tt(u,t),c.keepAttr))if(Fe||!_(/\/>/i,r)){Ue&&(r=A(r,ye," "),r=A(r,be," "),r=A(r,ve," "));var f=ge(t.nodeName);if(xt(f,a,r))if(!Ye||"id"!==a&&"name"!==a||(Tt(u,t),r="user-content-"+r),He&&_(/((--!?|])>)|<\/(style|title)/i,r))Tt(u,t);else{if(ie&&"object"===e(k)&&"function"==typeof k.getAttributeType)if(m);else switch(k.getAttributeType(f,a)){case"TrustedHTML":r=ie.createHTML(r);break;case"TrustedScriptURL":r=ie.createScriptURL(r)}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),At(t)?vt(t):b(o.removed)}catch(Ct){}}}else Tt(u,t)}St("afterSanitizeAttributes",t,null)}},Lt=function e(t){var n,r=Et(t);for(St("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)St("uponSanitizeShadowNode",n,null),_t(n)||(n.content instanceof l&&e(n.content),Ot(n));St("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((it=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!wt(t)){if("function"!=typeof t.toString)throw x("toString is not a function");if("string"!=typeof(t=t.toString()))throw x("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(wt(t))return n.toStaticHTML(t.outerHTML)}return t}if(Pe||pt(f),o.removed=[],"string"==typeof t&&(Ke=!1),Ke){if(t.nodeName){var p=ge(t.nodeName);if(!_e[p]||Ce[p])throw x("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(r=Nt("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName?r=i:"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!je&&!Ue&&!ze&&-1===t.indexOf("<"))return ie&&We?ie.createHTML(t):t;if(!(r=Nt(t)))return je?null:We?le:""}r&&Be&&vt(r.firstChild);for(var d=Et(Ke?t:r);c=d.nextNode();)3===c.nodeType&&c===u||_t(c)||(c.content instanceof l&&Lt(c.content),Ot(c),u=c);if(u=null,Ke)return t;if(je){if(Ge)for(m=ue.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return(ke.shadowroot||ke.shadowrootmod)&&(m=fe.call(a,m,!0)),m}var h=ze?r.outerHTML:r.innerHTML;return ze&&_e["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&_(J,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),Ue&&(h=A(h,ye," "),h=A(h,be," "),h=A(h,ve," ")),ie&&We?ie.createHTML(h):h},o.setConfig=function(e){pt(e),Pe=!0},o.clearConfig=function(){ut=null,Pe=!1},o.isValidAttribute=function(e,t,n){ut||pt({});var r=ge(e),o=ge(t);return xt(r,o,n)},o.addHook=function(e,t){"function"==typeof t&&(de[e]=de[e]||[],v(de[e],t))},o.removeHook=function(e){if(de[e])return b(de[e])},o.removeHooks=function(e){de[e]&&(de[e]=[])},o.removeAllHooks=function(){de={}},o}()}()}}]);