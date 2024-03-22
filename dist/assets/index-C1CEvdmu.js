(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=window,F=T.ShadowRoot&&(T.ShadyCSS===void 0||T.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),G=new WeakMap;let ve=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(F&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&G.set(t,e))}return e}toString(){return this.cssText}};const Ae=o=>new ve(typeof o=="string"?o:o+"",void 0,X),fe=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new ve(t,o,X)},Ee=(o,e)=>{F?o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=T.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,o.appendChild(i)})},Y=F?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ae(t)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var M;const D=window,Q=D.trustedTypes,Se=Q?Q.emptyScript:"",ee=D.reactiveElementPolyfillSupport,q={toAttribute(o,e){switch(e){case Boolean:o=o?Se:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},me=(o,e)=>e!==o&&(e==e||o==o),O={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:me},K="finalized";let w=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=O){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||O}static finalize(){if(this.hasOwnProperty(K))return!1;this[K]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Y(r))}else e!==void 0&&t.push(Y(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=O){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const s=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:q).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const s=r.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:q;this._$El=n,this[n]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||me)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};w[K]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},ee==null||ee({ReactiveElement:w}),((M=D.reactiveElementVersions)!==null&&M!==void 0?M:D.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const R=window,b=R.trustedTypes,te=b?b.createPolicy("lit-html",{createHTML:o=>o}):void 0,j="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,ye="?"+m,ke=`<${ye}>`,_=document,z=()=>_.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",ge=Array.isArray,ze=o=>ge(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ie=/>/g,y=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,ne=/"/g,_e=/^(?:script|style|textarea|title)$/i,Ce=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),xe=Ce(1),$=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),se=new WeakMap,g=_.createTreeWalker(_,129,null,!1);function $e(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(e):e}const Pe=(o,e)=>{const t=o.length-1,i=[];let r,n=e===2?"<svg>":"",s=E;for(let a=0;a<t;a++){const l=o[a];let d,c,h=-1,u=0;for(;u<l.length&&(s.lastIndex=u,c=s.exec(l),c!==null);)u=s.lastIndex,s===E?c[1]==="!--"?s=re:c[1]!==void 0?s=ie:c[2]!==void 0?(_e.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=y):c[3]!==void 0&&(s=y):s===y?c[0]===">"?(s=r??E,h=-1):c[1]===void 0?h=-2:(h=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?y:c[3]==='"'?ne:oe):s===ne||s===oe?s=y:s===re||s===ie?s=E:(s=y,r=void 0);const v=s===y&&o[a+1].startsWith("/>")?" ":"";n+=s===E?l+ke:h>=0?(i.push(d),l.slice(0,h)+j+l.slice(h)+m+v):l+m+(h===-2?(i.push(void 0),a):v)}return[$e(o,n+(o[t]||"<?>")+(e===2?"</svg>":"")),i]};class x{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,s=0;const a=e.length-1,l=this.parts,[d,c]=Pe(e,t);if(this.el=x.createElement(d,i),g.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(r=g.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){const h=[];for(const u of r.getAttributeNames())if(u.endsWith(j)||u.startsWith(m)){const v=c[s++];if(h.push(u),v!==void 0){const H=r.getAttribute(v.toLowerCase()+j).split(m),f=/([.?@])?(.*)/.exec(v);l.push({type:1,index:n,name:f[2],strings:H,ctor:f[1]==="."?De:f[1]==="?"?Ue:f[1]==="@"?Ne:U})}else l.push({type:6,index:n})}for(const u of h)r.removeAttribute(u)}if(_e.test(r.tagName)){const h=r.textContent.split(m),u=h.length-1;if(u>0){r.textContent=b?b.emptyScript:"";for(let v=0;v<u;v++)r.append(h[v],z()),g.nextNode(),l.push({type:2,index:++n});r.append(h[u],z())}}}else if(r.nodeType===8)if(r.data===ye)l.push({type:2,index:n});else{let h=-1;for(;(h=r.data.indexOf(m,h+1))!==-1;)l.push({type:7,index:n}),h+=m.length-1}n++}}static createElement(e,t){const i=_.createElement("template");return i.innerHTML=e,i}}function A(o,e,t=o,i){var r,n,s,a;if(e===$)return e;let l=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const d=C(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==d&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),d===void 0?l=void 0:(l=new d(o),l._$AT(o,t,i)),i!==void 0?((s=(a=t)._$Co)!==null&&s!==void 0?s:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=A(o,l._$AS(o,e.values),l,i)),e}class Te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:_).importNode(i,!0);g.currentNode=n;let s=g.nextNode(),a=0,l=0,d=r[0];for(;d!==void 0;){if(a===d.index){let c;d.type===2?c=new P(s,s.nextSibling,this,e):d.type===1?c=new d.ctor(s,d.name,d.strings,this,e):d.type===6&&(c=new He(s,this,e)),this._$AV.push(c),d=r[++l]}a!==(d==null?void 0:d.index)&&(s=g.nextNode(),a++)}return g.currentNode=_,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class P{constructor(e,t,i,r){var n;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),C(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ze(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&C(this._$AH)?this._$AA.nextSibling.data=e:this.$(_.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=x.createElement($e(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const s=new Te(n,this),a=s.u(this.options);s.v(i),this.$(a),this._$AH=s}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new x(e)),t}T(e){ge(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new P(this.k(z()),this.k(z()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class U{constructor(e,t,i,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let s=!1;if(n===void 0)e=A(this,e,t,0),s=!C(e)||e!==this._$AH&&e!==$,s&&(this._$AH=e);else{const a=e;let l,d;for(e=n[0],l=0;l<n.length-1;l++)d=A(this,a[i+l],t,l),d===$&&(d=this._$AH[l]),s||(s=!C(d)||d!==this._$AH[l]),d===p?e=p:e!==p&&(e+=(d??"")+n[l+1]),this._$AH[l]=d}s&&!r&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}const Re=b?b.emptyScript:"";class Ue extends U{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,Re):this.element.removeAttribute(this.name)}}class Ne extends U{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=A(this,e,t,0))!==null&&i!==void 0?i:p)===$)return;const r=this._$AH,n=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==p&&(r===p||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const ae=R.litHtmlPolyfillSupport;ae==null||ae(x,P),((L=R.litHtmlVersions)!==null&&L!==void 0?L:R.litHtmlVersions=[]).push("2.8.0");const Me=(o,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let s=n._$litPart$;if(s===void 0){const a=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=s=new P(e.insertBefore(z(),a),a,void 0,t??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B,V;class k extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Me(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return $}}k.finalized=!0,k._$litElement$=!0,(B=globalThis.litElementHydrateSupport)===null||B===void 0||B.call(globalThis,{LitElement:k});const le=globalThis.litElementPolyfillSupport;le==null||le({LitElement:k});((V=globalThis.litElementVersions)!==null&&V!==void 0?V:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Le=o=>(...e)=>({_$litDirective$:o,values:e});let Ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=Le(class extends Ie{constructor(o){var e;if(super(o),o.type!==Oe.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,i;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}const r=o.element.classList;this.it.forEach(n=>{n in e||(r.remove(n),this.it.delete(n))});for(const n in e){const s=!!e[n];s===this.it.has(n)||!((i=this.nt)===null||i===void 0)&&i.has(n)||(s?(r.add(n),this.it.add(n)):(r.remove(n),this.it.delete(n)))}return $}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(o,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,o)}},We=(o,e,t)=>{e.constructor.createProperty(t,o)};function de(o){return(e,t)=>t!==void 0?We(o,e,t):Ve(o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=({finisher:o,descriptor:e})=>(t,i)=>{var r;if(i===void 0){const n=(r=t.originalKey)!==null&&r!==void 0?r:t.key,s=e!=null?{kind:"method",placement:"prototype",key:n,descriptor:e(t.key)}:{...t,key:n};return o!=null&&(s.finisher=function(a){o(a,n)}),s}{const n=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),o==null||o(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ce(o,e){return N({descriptor:t=>{const i={get(){var r,n;return(n=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(e){const r=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var n,s;return this[r]===void 0&&(this[r]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[r]}}return i}})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function qe(o){return N({descriptor:e=>({get(){var t,i;return(i=(t=this.renderRoot)===null||t===void 0?void 0:t.querySelectorAll(o))!==null&&i!==void 0?i:[]},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const Ke=((W=window.HTMLSlotElement)===null||W===void 0?void 0:W.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function je(o){const{slot:e,selector:t}=o??{};return N({descriptor:i=>({get(){var r;const n="slot"+(e?`[name=${e}]`:":not([name])"),s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n),a=s!=null?Ke(s,o):[];return t?a.filter(l=>l.matches(t)):a},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(o,e,t){let i,r=o;return typeof o=="object"?(r=o.slot,i=o):i={flatten:e},t?je({slot:r,flatten:e,selector:t}):N({descriptor:n=>({get(){var s,a;const l="slot"+(r?`[name=${r}]`:":not([name])"),d=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(l);return(a=d==null?void 0:d.assignedNodes(i))!==null&&a!==void 0?a:[]},enumerable:!0,configurable:!0})})}const Xe=fe`
    :host {
        box-sizing: border-box;
    }

    :host *,
    :host *::before,
    :host *::after {
        box-sizing: inherit;
    }

    [hidden] {
        display: none !important;
    }
`,Ze=fe`
    ${Xe}

    :host {
        display: block;
    }

    .code-preview {
        --_code-preview-helper-inset:       var(--code-preview-helper-inset, -0.75rem -0.75rem auto auto);
        --_code-preview-helper-position:    var(--code-preview-helper-position, absolute);
        --_code-preview-inline-size:        var(--code-preview-inline-size, 100cqi);
        --_code-preview-padding-inline:     var(--code-preview-padding-inline, 1.5rem);
        --_code-preview-trigger-width:      var(--code-preview-trigger-width, 1.75rem);
        background-color: var(--eos-color-neutral-50);
        border-radius: 3px;
        max-inline-size: var(--_code-preview-inline-size);
        position: relative;

        &.code-preview--fixed-helper {
            --_code-preview-helper-inset:       var(--code-preview-helper-inset, auto 0.5rem 0.5rem auto);
            --_code-preview-helper-position:    var(--code-preview-helper-position, fixed);
        }
    }

    .code-preview__preview {
        background-color: var(--code-preview-background-color, var(--eos-color-neutral-1000));
        border-bottom: none;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: var(--code-preview-border, 1px solid var(--eos-color-neutral-200));
        inline-size: var(--_code-preview-inline-size);
        max-inline-size: var(--_code-preview-inline-size);
        min-inline-size: calc(23.4375rem + (var(--_code-preview-trigger-width) * 2) + (var(--_code-preview-padding-inline) * 2));
        padding-block: var(--code-preview-padding-block, 1.5rem);
        padding-inline: calc(var(--_code-preview-padding-inline) + var(--_code-preview-trigger-width));
        position: relative;
        z-index: 3;
    }

    .code-preview__preview--dragging {

        /* Block the preview while dragging to prevent iframes from intercepting drag events */
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: ew-resize;
        }

        .code-preview__preview-content::before {
            opacity: 0.85;
            transition: opacity var(--duration-quick) var(--ease-in-out);
        }
    }


    .code-preview__preview-content {
        position: relative;

        &::before {
            background: var(--color-pronto-light);
            border-radius: var(--radius-2);
            box-shadow: var(--elevation-6);
            color: var(--color-pronto-darkish);
            content: attr(data-container-size);
            font-family: var(--font-mono);
            font-size: 0.75rem;
            font-weight: var(--font-weight-bold);
            inset: var(--_code-preview-helper-inset);
            letter-spacing: var(--tracking-wide);
            opacity: 0;
            padding: var(--size-0) var(--size-1);
            pointer-events: none;
            position: var(--_code-preview-helper-position);
            transition: opacity var(--duration-slow) var(--ease-in-out) var(--duration-fast);
            z-index: var(--z-max);
        }
    }

    .code-preview__resizer {
        appearance: none;
        align-items: center;
        background-color: var(--code-preview-trigger-background-color, var(--eos-color-neutral-0));
        border: var(--code-preview-trigger-right-border, var(--code-preview-trigger-border, none));
        bottom: 0;
        box-shadow: none;
        color: var(--code-preview-trigger-color, var(--eos-color-neutral-600));
        cursor: ew-resize;
        display: flex;
        font-size: 20px;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        width: var(--_code-preview-trigger-width);
    }

    .code-preview__resizer:where([data-preview-resizer="start"]) {
        border: var(--code-preview-trigger-left-border, var(--code-preview-trigger-border, none));
        left: 0;
        right: auto;
    }

    .code-preview__resizer svg {
        pointer-events: none;
    }

    @media screen and (max-width: 600px) {
        .code-preview__preview {
            --_code-preview-trigger-width: 0px;
        }

        .code-preview__resizer {
            display: none;
        }
    }
`;function Je(o,e,t,i){var r=we();if(i)for(var n=0;n<i.length;n++)r=i[n](r);var s=e(function(d){r.initializeInstanceElements(d,a.elements)},t),a=r.decorateClass(Qe(s.d.map(Ge)),o);return r.initializeClassElements(s.F,a.elements),r.runClassFinishers(s.F,a.finishers)}function we(){we=function(){return o};var o={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach(function(i){t.forEach(function(r){r.kind===i&&r.placement==="own"&&this.defineClassElement(e,r)},this)},this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach(function(r){t.forEach(function(n){var s=n.placement;if(n.kind===r&&(s==="static"||s==="prototype")){var a=s==="static"?e:i;this.defineClassElement(a,n)}},this)},this)},defineClassElement:function(e,t){var i=t.descriptor;if(t.kind==="field"){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:r===void 0?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(a){this.addElementPlacement(a,n)},this),e.forEach(function(a){if(!S(a))return i.push(a);var l=this.decorateElement(a,n);i.push(l.element),i.push.apply(i,l.extras),r.push.apply(r,l.finishers)},this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&r.indexOf(e.key)!==-1)throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var l=this.fromElementDescriptor(e),d=this.toElementFinisherExtras((0,n[s])(l)||l);e=d.element,this.addElementPlacement(e,t),d.finisher&&r.push(d.finisher);var c=d.extras;if(c){for(var h=0;h<c.length;h++)this.addElementPlacement(c[h],t);i.push.apply(i,c)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(s.finisher!==void 0&&i.push(s.finisher),s.elements!==void 0){e=s.elements;for(var a=0;a<e.length-1;a++)for(var l=a+1;l<e.length;l++)if(e[a].key===e[l].key&&e[a].placement===e[l].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),e.kind==="field"&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){if(e!==void 0)return tt(e).map(function(t){var i=this.toElementDescriptor(t);return this.disallowProperty(t,"finisher","An element descriptor"),this.disallowProperty(t,"extras","An element descriptor"),i},this)},toElementDescriptor:function(e){var t=String(e.kind);if(t!=="method"&&t!=="field")throw new TypeError(`An element descriptor's .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "`+t+'"');var i=be(e.key),r=String(e.placement);if(r!=="static"&&r!=="prototype"&&r!=="own")throw new TypeError(`An element descriptor's .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "`+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return t!=="field"?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){var t=this.toElementDescriptor(e),i=ue(e,"finisher"),r=this.toElementDescriptors(e.extras);return{element:t,finisher:i,extras:r}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)},i={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,i),t},toClassDescriptor:function(e){var t=String(e.kind);if(t!=="class")throw new TypeError(`A class descriptor's .kind property must be "class", but a decorator created a class descriptor with .kind "`+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=ue(e,"finisher"),r=this.toElementDescriptors(e.elements);return{elements:r,finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(r!==void 0){if(typeof r!="function")throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(e[t]!==void 0)throw new TypeError(i+" can't have a ."+t+" property.")}};return o}function Ge(o){var e=be(o.key),t;o.kind==="method"?t={value:o.value,writable:!0,configurable:!0,enumerable:!1}:o.kind==="get"?t={get:o.value,configurable:!0,enumerable:!1}:o.kind==="set"?t={set:o.value,configurable:!0,enumerable:!1}:o.kind==="field"&&(t={configurable:!0,writable:!0,enumerable:!0});var i={kind:o.kind==="field"?"field":"method",key:e,placement:o.static?"static":o.kind==="field"?"own":"prototype",descriptor:t};return o.decorators&&(i.decorators=o.decorators),o.kind==="field"&&(i.initializer=o.value),i}function Ye(o,e){o.descriptor.get!==void 0?e.descriptor.get=o.descriptor.get:e.descriptor.set=o.descriptor.set}function Qe(o){for(var e=[],t=function(s){return s.kind==="method"&&s.key===r.key&&s.placement===r.placement},i=0;i<o.length;i++){var r=o[i],n;if(r.kind==="method"&&(n=e.find(t)))if(he(r.descriptor)||he(n.descriptor)){if(S(r)||S(n))throw new ReferenceError("Duplicated methods ("+r.key+") can't be decorated.");n.descriptor=r.descriptor}else{if(S(r)){if(S(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+r.key+").");n.decorators=r.decorators}Ye(r,n)}else e.push(r)}return e}function S(o){return o.decorators&&o.decorators.length}function he(o){return o!==void 0&&!(o.value===void 0&&o.writable===void 0)}function ue(o,e){var t=o[e];if(t!==void 0&&typeof t!="function")throw new TypeError("Expected '"+e+"' to be a function");return t}function be(o){var e=et(o,"string");return typeof e=="symbol"?e:e+""}function et(o,e){if(typeof o!="object"||!o)return o;var t=o[Symbol.toPrimitive];if(t!==void 0){var i=t.call(o,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(o)}function tt(o){return nt(o)||ot(o)||it(o)||rt()}function rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(o,e){if(o){if(typeof o=="string")return pe(o,e);var t=Object.prototype.toString.call(o).slice(8,-1);if(t==="Object"&&o.constructor&&(t=o.constructor.name),t==="Map"||t==="Set")return Array.from(o);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return pe(o,e)}}function pe(o,e){(e==null||e>o.length)&&(e=o.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=o[t];return i}function ot(o){if(typeof Symbol<"u"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function nt(o){if(Array.isArray(o))return o}let st=Je(null,function(o,e){class t extends e{constructor(...r){super(...r),o(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value(){return Ze}},{kind:"field",decorators:[de({type:Boolean,reflect:!0})],key:"duo",value(){return!0}},{kind:"field",decorators:[de({type:Boolean,reflect:!0})],key:"fixedHelper",value(){return!1}},{kind:"field",decorators:[ce(".code-preview__preview")],key:"preview",value:void 0},{kind:"field",decorators:[ce(".code-preview__preview-content")],key:"content",value:void 0},{kind:"field",decorators:[qe(".code-preview__resizer")],key:"resizers",value:void 0},{kind:"field",decorators:[Fe({flatten:!0})],key:"defaultSlot",value:void 0},{kind:"method",key:"_getCurrentWidth",value:function(r){return r.changedTouches?r.changedTouches[0].pageX:r.clientX}},{kind:"method",key:"_handleResizerDrag",value:function(r,n){const{resizers:s,preview:a,content:l,_getCurrentWidth:d}=this;if(!s||!a||!l)return;let c=d(r),h=document.defaultView&&parseInt(document.defaultView.getComputedStyle(a).width,10);function u(H){let f=0;const Z=d(H),J=.5;n==="start"?f=(h??0)-(Z-c)/J:n==="end"&&(f=h+(Z-c)/J),a.style.width=`${f}px`,window.requestAnimationFrame(()=>l.dataset.containerSize=`${l.offsetWidth}px`)}function v(){a.classList.remove("code-preview__preview--dragging"),document.documentElement.removeEventListener("mousemove",u),document.documentElement.removeEventListener("touchmove",u),document.documentElement.removeEventListener("mouseup",v),document.documentElement.removeEventListener("touchend",v)}r.preventDefault(),a.classList.add("code-preview__preview--dragging"),document.documentElement.addEventListener("mousemove",u),document.documentElement.addEventListener("touchmove",u),document.documentElement.addEventListener("mouseup",v),document.documentElement.addEventListener("touchend",v)}},{kind:"method",key:"render",value:function(){return xe`
            <div
                part="base"
                class="code-preview ${Be({"code-preview--duo":this.duo,"code-preview--fixed-helper":this.fixedHelper})}"
            >
                <div class="code-preview__preview">
                    <button
                        class="code-preview__resizer"
                        data-preview-resizer="start"
                        @mousedown=${r=>this._handleResizerDrag(r,"start")}
                        @touchmove=${r=>this._handleResizerDrag(r,"start")}
                        @mouseup=${r=>this._handleResizerDrag(r,null)}
                        @touchend=${r=>this._handleResizerDrag(r,null)}
                        tabindex="-1"
                    >
                        <slot name="icon-left">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16" part="svg">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                        </slot>
                    </button>

                    <div class="code-preview__preview-content">
                        <slot></slot>
                    </div>

                    <button
                        class="code-preview__resizer"
                        data-preview-resizer="end"
                        @mousedown=${r=>this._handleResizerDrag(r,"end")}
                        @touchmove=${r=>this._handleResizerDrag(r,"end")}
                        @mouseup=${r=>this._handleResizerDrag(r,null)}
                        @touchend=${r=>this._handleResizerDrag(r,null)}
                        tabindex="-1"
                    >
                        <slot name="icon-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16" part="svg">
                                <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                            </svg>
                        </slot>
                    </button>
                </div>
            </div>
        `}}]}},k);window.customElements.define("code-preview",st);
