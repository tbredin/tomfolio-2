var ft=Object.defineProperty;var mt=(r,t,e)=>t in r?ft(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var _=(r,t,e)=>mt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,W=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,F=Symbol(),q=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==F)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&q.set(e,t))}return t}toString(){return this.cssText}};const $t=r=>new rt(typeof r=="string"?r:r+"",void 0,F),k=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new rt(e,r,F)},yt=(r,t)=>{if(W)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=O.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},J=W?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:At,getOwnPropertyDescriptor:vt,getOwnPropertyNames:bt,getOwnPropertySymbols:wt,getPrototypeOf:St}=Object,y=globalThis,K=y.trustedTypes,Et=K?K.emptyScript:"",I=y.reactiveElementPolyfillSupport,C=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ot=(r,t)=>!_t(r,t),Y={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class w extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=vt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const h=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Y}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const e=this.properties,i=[...bt(e),...wt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),h=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:j;this._$Em=s,this[s]=h.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??ot)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[C("elementProperties")]=new Map,w[C("finalized")]=new Map,I==null||I({ReactiveElement:w}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,L=P.trustedTypes,Z=L?L.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",$=`lit$${Math.random().toFixed(9).slice(2)}$`,lt="?"+$,xt=`<${lt}>`,b=document,T=()=>b.createComment(""),U=r=>r===null||typeof r!="object"&&typeof r!="function",G=Array.isArray,Ct=r=>G(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",B=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,X=/>/g,A=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,at=/^(?:script|style|textarea|title)$/i,Pt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),u=Pt(1),S=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),it=new WeakMap,v=b.createTreeWalker(b,129);function ht(r,t){if(!G(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const Tt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=x;for(let h=0;h<e;h++){const l=r[h];let c,p,a=-1,f=0;for(;f<l.length&&(n.lastIndex=f,p=n.exec(l),p!==null);)f=n.lastIndex,n===x?p[1]==="!--"?n=Q:p[1]!==void 0?n=X:p[2]!==void 0?(at.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=A):p[3]!==void 0&&(n=A):n===A?p[0]===">"?(n=s??x,a=-1):p[1]===void 0?a=-2:(a=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?A:p[3]==='"'?et:tt):n===et||n===tt?n=A:n===Q||n===X?n=x:(n=A,s=void 0);const m=n===A&&r[h+1].startsWith("/>")?" ":"";o+=n===x?l+xt:a>=0?(i.push(c),l.slice(0,a)+nt+l.slice(a)+$+m):l+$+(a===-2?h:m)}return[ht(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,l=this.parts,[c,p]=Tt(t,e);if(this.el=H.createElement(c,i),v.currentNode=this.el.content,e===2||e===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(s=v.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const a of s.getAttributeNames())if(a.endsWith(nt)){const f=p[n++],m=s.getAttribute(a).split($),N=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:N[2],strings:m,ctor:N[1]==="."?Ht:N[1]==="?"?kt:N[1]==="@"?Mt:R}),s.removeAttribute(a)}else a.startsWith($)&&(l.push({type:6,index:o}),s.removeAttribute(a));if(at.test(s.tagName)){const a=s.textContent.split($),f=a.length-1;if(f>0){s.textContent=L?L.emptyScript:"";for(let m=0;m<f;m++)s.append(a[m],T()),v.nextNode(),l.push({type:2,index:++o});s.append(a[f],T())}}}else if(s.nodeType===8)if(s.data===lt)l.push({type:2,index:o});else{let a=-1;for(;(a=s.data.indexOf($,a+1))!==-1;)l.push({type:7,index:o}),a+=$.length-1}o++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,h;if(t===S)return t;let s=i!==void 0?(n=e.o)==null?void 0:n[i]:e.l;const o=U(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((h=s==null?void 0:s._$AO)==null||h.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e.o??(e.o=[]))[i]=s:e.l=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??b).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),n=0,h=0,l=i[0];for(;l!==void 0;){if(n===l.index){let c;l.type===2?c=new M(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Nt(o,this,t)),this._$AV.push(c),l=i[++h]}n!==(l==null?void 0:l.index)&&(o=v.nextNode(),n++)}return v.currentNode=b,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class M{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),U(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ct(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(ht(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Ut(s,this),h=n.u(this.options);n.p(e),this.T(h),this._$AH=n}}_$AC(t){let e=it.get(t.strings);return e===void 0&&it.set(t.strings,e=new H(t)),e}k(t){G(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new M(this.O(T()),this.O(T()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!U(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const h=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=E(this,h[i+l],e,l),c===S&&(c=this._$AH[l]),n||(n=!U(c)||c!==this._$AH[l]),c===d?t=d:t!==d&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends R{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class kt extends R{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Mt extends R{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===S)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=P.litHtmlPolyfillSupport;D==null||D(H,M),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.2.0");const Ot=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new M(t.insertBefore(T(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return S}}var st;g._$litElement$=!0,g.finalized=!0,(st=globalThis.litElementHydrateSupport)==null||st.call(globalThis,{LitElement:g});const V=globalThis.litElementPolyfillSupport;V==null||V({LitElement:g});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");class ct extends g{static get properties(){return{}}constructor(){super()}render(){return u`
      <section>
        <slot></slot>
        <hr/>
      </section>
    `}}_(ct,"styles",k`
    hr {
      width: 1rem;
      display: inline-block;
      border: 0 none;
      border-bottom: 1px solid var(--accent-color);
      opacity: 0.25;
      margin: 0;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    section {
      padding-top: var(--section-margin);
      padding-bottom: var(--section-margin);
      position: relative;
    }
  `);window.customElements.define("divided-section",ct);class z extends g{constructor(){super(),this.data=[],this.reorder=!0}getListItems(){return(this.reorder?[...this.data].sort((e,i)=>e.title.localeCompare(i.title)):this.data).map(e=>u`<li>
            <img 
            class="bullet" 
            aria-hidden="true" 
            alt="+" 
            src="/src/assets/bullet.png" 
          />
          ${e.url||e.to?u`<styled-a href="${e.url||e.to}">${e.title}</styled-a>`:u`<span>${e.title}</span>`}
          ${e.award?u`<a href="${e.url||e.to}" class="award"><img 
            title="View award won for ${e.title}" 
            aria-label="View award won for ${e.title}" 
            alt="View award won for ${e.title}" 
            src="/src/assets/award.gif" 
          /></a>`:""}
        </li>`)}render(){return u`
      <ul>
        ${this.getListItems()}
      </ul>
    `}}_(z,"properties",{data:{type:Array},reorder:{type:Boolean,reflect:!0}}),_(z,"styles",k`
    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing);
    }

    li {
      display: block;
      margin: 0;
      font-size: var(--size-body);
      font-style: var(--style-body);
      font-weight: var(--weight-body);
      color: var(--site-color);
      padding-left: 0;
      margin-left: 1rem;
      position: relative;
    }

    .bullet {
      position: absolute;
      left: -1rem;
      top: 0.75rem;
      transform: translateY(-4px);
      width: 7px;
      height: 7px; 
      image-rendering: pixelated;
    }

    .award {
      display: inline-block;
      padding: 0 0.25rem;
      margin-left: -0.5rem;
    }
    
    .award img {
        transform: translateY(2px);
        image-rendering: pixelated;
    }

    @media (prefers-color-scheme: light) {
      img {
        filter: brightness(87.5%);
      }
    }

    ::selection {
      background: var(--selected-text-bg);
      color: var(--selected-text-color);
    }
  `);window.customElements.define("styled-list",z);const dt=[{url:"mailto:tbredin@gmail.com",title:"tbredin@gmail.com"},{url:"https://www.linkedin.com/in/%E2%9C%A8-thomas-b-6692aa93/",title:"Linkedin"}];[...dt];const Lt=[{title:"Extinction Rebellion Australia",url:"https://ausrebellion.earth"},{title:"Josef Legal"},{title:"Today"},{title:"WorkSafe Victoria",url:"https://www.worksafe.vic.gov.au/"},{title:"Landcare Victoria",url:"https://www.landcarevic.org.au/"},{title:"Crikey"},{title:"Tech + Design Workers"},{title:"Smartraveller",url:"https://good-design.org/projects/smartraveller/",award:!0},{title:"KeepCup",url:"https://good-design.org/projects/keepcup-reuse-revolution-hq/",award:!0},{title:"Geoplex"},{title:"Go Gentle Australia"},{title:"Merri Health"},{title:"Arts Access Victoria",url:"https://good-design.org/projects/arts-access-victoria-2/",award:!0},{title:"Foundation for Young Australians"},{title:"Nature Conservancy Australia"},{title:"Neami National"},{title:"Golden Homes"},{title:"Bayside City Council"},{title:"Business Victoria"},{title:"Department of Foreign Affairs and Trade"},{title:"Department of Health and Human Services"},{title:"Department of Environment, Land, Water and Planning"},{title:"University of Melbourne"},{title:"Ports Australia"},{title:"Lode"},{title:"GMHBA"},{title:"Frank Health Insurance"},{title:"Budget Direct"},{title:"Trade Victoria"},{title:"Invest Victoria"},{title:"National Disability Insurance Agency"},{title:"Digital Transformation Agency"},{title:"ANZ"},{title:"Merri-Bek City Council",url:"https://www.merri-bek.vic.gov.au/"},{title:"ACMI: The Story of the Moving Image",url:"https://agda.com.au/agda-award/agda-design-awards-2021/finalist/brand-and-identity/95024",award:!0},{title:"Community Hub for the Alcohol and Drug Foundation",url:"https://community.adf.org.au/"},{title:"Liquorice"},{title:"Pan Media and Advertising"},{title:"Thorne Harbour Health LGBTIQ+ Family Violence",url:"https://www.safealways.org/"},{title:"Assembly Four"}],Rt=[{title:"Vue"},{title:"React"},{title:"Javascript"},{title:"Typescript"},{title:"SCSS"},{title:"CSS"},{title:"PostCSS"},{title:"Webpack"},{title:"Figma"},{title:"Miro"},{title:"Illustrator"},{title:"Photoshop"},{title:"Tailwind"},{title:"NodeJS"},{title:"HTML"},{title:"Lit"},{title:"Babel"},{title:"aXe"},{title:"EDM development"},{title:"Percy"},{title:"Storybook"},{title:"MegaType"},{title:"Unity"},{title:"Aseprite"},{title:"Git"},{title:"Capybara"},{title:"Selenium"},{title:"Design Systems"},{title:"Godot"},{title:"Web Components"},{title:"Modern Web Standards"},{title:"Vite"},{title:"Buildkite"},{title:"Calibre"}];class It extends g{render(){return u`
      <divided-section>
        <slot></slot>
        <styled-list .data="${Lt}"></styled-list>
      </divided-section>
    `}}window.customElements.define("project-list",It);class Bt extends g{render(){return u`
      <divided-section>
        <slot></slot>
        <styled-list .data="${Rt}"></styled-list>
      </divided-section>
    `}}window.customElements.define("tools-list",Bt);class Dt extends g{render(){return u`
      <divided-section>
        <slot></slot>
        <styled-list .data="${dt}"></styled-list>
      </divided-section>
    `}}window.customElements.define("contact-list",Dt);class pt extends g{static get properties(){return{href:{type:String}}}constructor(){super(),this.href="#"}render(){return u`<a href="${this.href}"><slot></slot></a>`}}_(pt,"styles",k`
    a {
      color: var(--link-color);
      text-decoration: underline;
      text-decoration-skip: ink;
      text-decoration-color: color-mix(in hsl, var(--link-color) 75%, transparent)
    }

    a:hover {
      --link-color: var(--link-hover-color);
    }
  `);window.customElements.define("styled-a",pt);class ut extends g{render(){return u`
      <img src="src/assets/planet.gif" aria-hidden="true" />
    `}}_(ut,"styles",k`
    img {
      display: block;
      margin: var(--spacing);
      transition: filter 1s;
      will-change: filter, opacity;
      image-rendering: pixelated;
      margin: 2rem 0.3rem -3rem;
      padding: 2rem;
      z-index: 10;
      position: relative;
    }

    img:hover {
      filter: brightness(70%) sepia(100%) hue-rotate(-15deg);
    }

    img:focus {
      filter: none;
    }

    @media (prefers-color-scheme: light) {
      img {
        filter: brightness(50%) sepia(100%) hue-rotate(-135deg);
      }
      img:hover {
        filter: brightness(60%) sepia(100%) hue-rotate(-15deg);
      }
      img:focus {
        filter: brightness(0%);
      }
    }
  `);window.customElements.define("planet-icon",ut);class gt extends g{render(){return u`
      <img src="src/assets/sparkle.gif" aria-hidden="true" />
    `}}_(gt,"styles",k`
    img {
      width: var(--sparkle-w);
      aspect-ratio: 70/79;
      display: block;
      margin: var(--spacing);
      transition: filter 1s;
      filter: brightness(60%) sepia(100%) hue-rotate(-135deg);
      will-change: filter, opacity;
      image-rendering: pixelated;
      position: fixed;
      bottom: var(--spacing);
      right: var(--spacing);
    }

    img:hover {
      filter: brightness(70%) sepia(100%) hue-rotate(-15deg);
    }

    img:focus {
      filter: none;
    }

    @media (prefers-color-scheme: light) {
      img {
        filter: brightness(50%) sepia(100%) hue-rotate(-135deg);
      }
      img:hover {
        filter: brightness(60%) sepia(100%) hue-rotate(-15deg);
      }
      img:focus {
        filter: brightness(0%);
      }
    }
  `);window.customElements.define("sparkle-icon",gt);
