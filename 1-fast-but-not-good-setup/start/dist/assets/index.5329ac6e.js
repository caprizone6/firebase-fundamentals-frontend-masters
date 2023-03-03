var Sm=Object.defineProperty,Cm=Object.defineProperties;var Am=Object.getOwnPropertyDescriptors;var Ku=Object.getOwnPropertySymbols;var km=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable;var qu=(t,e,n)=>e in t?Sm(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Go=(t,e)=>{for(var n in e||(e={}))km.call(e,n)&&qu(t,n,e[n]);if(Ku)for(var n of Ku(e))Rm.call(e,n)&&qu(t,n,e[n]);return t},zu=(t,e)=>Cm(t,Am(e));const Nm=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};Nm();function yc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Dm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Om=yc(Dm);function ef(t){return!!t||t===""}function vc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Le(s)?Mm(s):vc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Le(t))return t;if(Oe(t))return t}}const Pm=/;(?![^(]*\))/g,xm=/:(.+)/;function Mm(t){const e={};return t.split(Pm).forEach(n=>{if(n){const s=n.split(xm);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wc(t){let e="";if(Le(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=wc(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Lm=t=>Le(t)?t:t==null?"":z(t)||Oe(t)&&(t.toString===rf||!Y(t.toString))?JSON.stringify(t,tf,2):String(t),tf=(t,e)=>e&&e.__v_isRef?tf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:nf(e)?{[`Set(${e.size})`]:[...e.values()]}:Oe(e)&&!z(e)&&!of(e)?String(e):e,ge={},cs=[],kt=()=>{},Um=()=>!1,Fm=/^on[^a-z]/,Ji=t=>Fm.test(t),_c=t=>t.startsWith("onUpdate:"),Qe=Object.assign,Ec=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Vm=Object.prototype.hasOwnProperty,se=(t,e)=>Vm.call(t,e),z=Array.isArray,us=t=>Zi(t)==="[object Map]",nf=t=>Zi(t)==="[object Set]",Y=t=>typeof t=="function",Le=t=>typeof t=="string",Tc=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",sf=t=>Oe(t)&&Y(t.then)&&Y(t.catch),rf=Object.prototype.toString,Zi=t=>rf.call(t),$m=t=>Zi(t).slice(8,-1),of=t=>Zi(t)==="[object Object]",Ic=t=>Le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=yc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),eo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bm=/-(\w)/g,Pt=eo(t=>t.replace(Bm,(e,n)=>n?n.toUpperCase():"")),jm=/\B([A-Z])/g,Rs=eo(t=>t.replace(jm,"-$1").toLowerCase()),to=eo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=eo(t=>t?`on${to(t)}`:""),cr=(t,e)=>!Object.is(t,e),ui=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ti=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_a=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wu;const Hm=()=>Wu||(Wu=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let bt;class Km{constructor(e){this.active=!0,this.effects=[],this.cleanups=[],!e&&bt&&(this.parent=bt,this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function qm(t,e=bt){e&&e.active&&e.effects.push(t)}const bc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},af=t=>(t.w&yn)>0,cf=t=>(t.n&yn)>0,zm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yn},Wm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];af(r)&&!cf(r)?r.delete(t):e[n++]=r,r.w&=~yn,r.n&=~yn}e.length=n}},Ea=new WeakMap;let Hs=0,yn=1;const Ta=30;let vt;const Mn=Symbol(""),Ia=Symbol("");class Sc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,qm(this,s)}run(){if(!this.active)return this.fn();let e=vt,n=hn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=vt,vt=this,hn=!0,yn=1<<++Hs,Hs<=Ta?zm(this):Gu(this),this.fn()}finally{Hs<=Ta&&Wm(this),yn=1<<--Hs,vt=this.parent,hn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){vt===this?this.deferStop=!0:this.active&&(Gu(this),this.onStop&&this.onStop(),this.active=!1)}}function Gu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let hn=!0;const uf=[];function Ns(){uf.push(hn),hn=!1}function Ds(){const t=uf.pop();hn=t===void 0?!0:t}function at(t,e,n){if(hn&&vt){let s=Ea.get(t);s||Ea.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=bc()),lf(r)}}function lf(t,e){let n=!1;Hs<=Ta?cf(t)||(t.n|=yn,n=!af(t)):n=!t.has(vt),n&&(t.add(vt),vt.deps.push(t))}function Ht(t,e,n,s,r,i){const o=Ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t))o.forEach((c,u)=>{(u==="length"||u>=s)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Ic(n)&&a.push(o.get("length")):(a.push(o.get(Mn)),us(t)&&a.push(o.get(Ia)));break;case"delete":z(t)||(a.push(o.get(Mn)),us(t)&&a.push(o.get(Ia)));break;case"set":us(t)&&a.push(o.get(Mn));break}if(a.length===1)a[0]&&ba(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);ba(bc(c))}}function ba(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Qu(s);for(const s of n)s.computed||Qu(s)}function Qu(t,e){(t!==vt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Gm=yc("__proto__,__v_isRef,__isVue"),hf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tc)),Qm=Cc(),Xm=Cc(!1,!0),Ym=Cc(!0),Xu=Jm();function Jm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)at(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ns();const s=oe(this)[e].apply(this,n);return Ds(),s}}),t}function Cc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?py:mf:e?gf:pf).get(s))return s;const o=z(s);if(!t&&o&&se(Xu,r))return Reflect.get(Xu,r,i);const a=Reflect.get(s,r,i);return(Tc(r)?hf.has(r):Gm(r))||(t||at(s,"get",r),e)?a:Be(a)?o&&Ic(r)?a:a.value:Oe(a)?t?yf(a):zn(a):a}}const Zm=ff(),ey=ff(!0);function ff(t=!1){return function(n,s,r,i){let o=n[s];if(ur(o)&&Be(o)&&!Be(r))return!1;if(!t&&!ur(r)&&(Sa(r)||(r=oe(r),o=oe(o)),!z(n)&&Be(o)&&!Be(r)))return o.value=r,!0;const a=z(n)&&Ic(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?cr(r,o)&&Ht(n,"set",s,r):Ht(n,"add",s,r)),c}}function ty(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ht(t,"delete",e,void 0),s}function ny(t,e){const n=Reflect.has(t,e);return(!Tc(e)||!hf.has(e))&&at(t,"has",e),n}function sy(t){return at(t,"iterate",z(t)?"length":Mn),Reflect.ownKeys(t)}const df={get:Qm,set:Zm,deleteProperty:ty,has:ny,ownKeys:sy},ry={get:Ym,set(t,e){return!0},deleteProperty(t,e){return!0}},iy=Qe({},df,{get:Xm,set:ey}),Ac=t=>t,no=t=>Reflect.getPrototypeOf(t);function Xr(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&at(r,"get",e),at(r,"get",i));const{has:o}=no(r),a=s?Ac:n?Nc:lr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Yr(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&at(s,"has",t),at(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Jr(t,e=!1){return t=t.__v_raw,!e&&at(oe(t),"iterate",Mn),Reflect.get(t,"size",t)}function Yu(t){t=oe(t);const e=oe(this);return no(e).has.call(e,t)||(e.add(t),Ht(e,"add",t,t)),this}function Ju(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=no(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?cr(e,o)&&Ht(n,"set",t,e):Ht(n,"add",t,e),this}function Zu(t){const e=oe(this),{has:n,get:s}=no(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Ht(e,"delete",t,void 0),i}function el(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&Ht(t,"clear",void 0,void 0),n}function Zr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?Ac:t?Nc:lr;return!t&&at(a,"iterate",Mn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function ei(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?Ac:e?Nc:lr;return!e&&at(i,"iterate",c?Ia:Mn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[l(h[0]),l(h[1])]:l(h),done:f}},[Symbol.iterator](){return this}}}}function Zt(t){return function(...e){return t==="delete"?!1:this}}function oy(){const t={get(i){return Xr(this,i)},get size(){return Jr(this)},has:Yr,add:Yu,set:Ju,delete:Zu,clear:el,forEach:Zr(!1,!1)},e={get(i){return Xr(this,i,!1,!0)},get size(){return Jr(this)},has:Yr,add:Yu,set:Ju,delete:Zu,clear:el,forEach:Zr(!1,!0)},n={get(i){return Xr(this,i,!0)},get size(){return Jr(this,!0)},has(i){return Yr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Zr(!0,!1)},s={get(i){return Xr(this,i,!0,!0)},get size(){return Jr(this,!0)},has(i){return Yr.call(this,i,!0)},add:Zt("add"),set:Zt("set"),delete:Zt("delete"),clear:Zt("clear"),forEach:Zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ei(i,!1,!1),n[i]=ei(i,!0,!1),e[i]=ei(i,!1,!0),s[i]=ei(i,!0,!0)}),[t,n,e,s]}const[ay,cy,uy,ly]=oy();function kc(t,e){const n=e?t?ly:uy:t?cy:ay;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const hy={get:kc(!1,!1)},fy={get:kc(!1,!0)},dy={get:kc(!0,!1)},pf=new WeakMap,gf=new WeakMap,mf=new WeakMap,py=new WeakMap;function gy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function my(t){return t.__v_skip||!Object.isExtensible(t)?0:gy($m(t))}function zn(t){return ur(t)?t:Rc(t,!1,df,hy,pf)}function yy(t){return Rc(t,!1,iy,fy,gf)}function yf(t){return Rc(t,!0,ry,dy,mf)}function Rc(t,e,n,s,r){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=my(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ls(t){return ur(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Sa(t){return!!(t&&t.__v_isShallow)}function vf(t){return ls(t)||ur(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function wf(t){return Ti(t,"__v_skip",!0),t}const lr=t=>Oe(t)?zn(t):t,Nc=t=>Oe(t)?yf(t):t;function _f(t){hn&&vt&&(t=oe(t),lf(t.dep||(t.dep=bc())))}function Ef(t,e){t=oe(t),t.dep&&ba(t.dep)}function Be(t){return!!(t&&t.__v_isRef===!0)}function vy(t){return Tf(t,!1)}function wy(t){return Tf(t,!0)}function Tf(t,e){return Be(t)?t:new _y(t,e)}class _y{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:lr(e)}get value(){return _f(this),this._value}set value(e){e=this.__v_isShallow?e:oe(e),cr(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:lr(e),Ef(this))}}function Qs(t){return Be(t)?t.value:t}const Ey={get:(t,e,n)=>Qs(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Be(r)&&!Be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function If(t){return ls(t)?t:new Proxy(t,Ey)}class Ty{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Sc(e,()=>{this._dirty||(this._dirty=!0,Ef(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return _f(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Iy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=kt):(s=t.get,r=t.set),new Ty(s,r,i||!r,n)}function fn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){so(i,e,n)}return r}function dt(t,e,n,s){if(Y(t)){const i=fn(t,e,n,s);return i&&sf(i)&&i.catch(o=>{so(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(dt(t[i],e,n,s));return r}function so(t,e,n,s){if(e&&e.vnode,e){let r=e.parent;const i=e.proxy,o=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,i,o)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){fn(a,null,10,[t,i,o]);return}}by(t)}function by(t,e,n,s){console.error(t)}let Ii=!1,Ca=!1;const it=[];let Ut=0;const Xs=[];let Ks=null,es=0;const Ys=[];let sn=null,ts=0;const bf=Promise.resolve();let Dc=null,Aa=null;function Sf(t){const e=Dc||bf;return t?e.then(this?t.bind(this):t):e}function Sy(t){let e=Ut+1,n=it.length;for(;e<n;){const s=e+n>>>1;hr(it[s])<t?e=s+1:n=s}return e}function Cf(t){(!it.length||!it.includes(t,Ii&&t.allowRecurse?Ut+1:Ut))&&t!==Aa&&(t.id==null?it.push(t):it.splice(Sy(t.id),0,t),Af())}function Af(){!Ii&&!Ca&&(Ca=!0,Dc=bf.then(Nf))}function Cy(t){const e=it.indexOf(t);e>Ut&&it.splice(e,1)}function kf(t,e,n,s){z(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?s+1:s))&&n.push(t),Af()}function Ay(t){kf(t,Ks,Xs,es)}function ky(t){kf(t,sn,Ys,ts)}function ro(t,e=null){if(Xs.length){for(Aa=e,Ks=[...new Set(Xs)],Xs.length=0,es=0;es<Ks.length;es++)Ks[es]();Ks=null,es=0,Aa=null,ro(t,e)}}function Rf(t){if(ro(),Ys.length){const e=[...new Set(Ys)];if(Ys.length=0,sn){sn.push(...e);return}for(sn=e,sn.sort((n,s)=>hr(n)-hr(s)),ts=0;ts<sn.length;ts++)sn[ts]();sn=null,ts=0}}const hr=t=>t.id==null?1/0:t.id;function Nf(t){Ca=!1,Ii=!0,ro(t),it.sort((n,s)=>hr(n)-hr(s));const e=kt;try{for(Ut=0;Ut<it.length;Ut++){const n=it[Ut];n&&n.active!==!1&&fn(n,null,14)}}finally{Ut=0,it.length=0,Rf(),Ii=!1,Dc=null,(it.length||Xs.length||Ys.length)&&Nf(t)}}function Ry(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ge;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[l]||ge;f&&(r=n.map(g=>g.trim())),h&&(r=n.map(_a))}let a,c=s[a=Qo(e)]||s[a=Qo(Pt(e))];!c&&i&&(c=s[a=Qo(Rs(e))]),c&&dt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,dt(u,t,6,r)}}function Df(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=u=>{const l=Df(u,e,!0);l&&(a=!0,Qe(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Qe(o,i),s.set(t,o),o)}function io(t,e){return!t||!Ji(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Rs(e))||se(t,e))}let ft=null,Of=null;function bi(t){const e=ft;return ft=t,Of=t&&t.type.__scopeId||null,e}function Oc(t,e=ft,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&hl(-1);const i=bi(e),o=t(...r);return bi(i),s._d&&hl(1),o};return s._n=!0,s._c=!0,s._d=!0,s}function Xo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:w}=t;let T,k;const O=bi(t);try{if(n.shapeFlag&4){const Q=r||s;T=St(l.call(Q,Q,h,i,g,f,y)),k=c}else{const Q=e;T=St(Q.length>1?Q(i,{attrs:c,slots:a,emit:u}):Q(i,null)),k=e.props?c:Ny(c)}}catch(Q){Js.length=0,so(Q,t,1),T=nt(Bt)}let W=T;if(k&&w!==!1){const Q=Object.keys(k),{shapeFlag:ae}=W;Q.length&&ae&7&&(o&&Q.some(_c)&&(k=Dy(k,o)),W=vn(W,k))}return n.dirs&&(W=vn(W),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&(W.transition=n.transition),T=W,bi(O),T}const Ny=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ji(n))&&((e||(e={}))[n]=t[n]);return e},Dy=(t,e)=>{const n={};for(const s in t)(!_c(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Oy(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?tl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const f=l[h];if(o[f]!==s[f]&&!io(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?tl(s,o,u):!0:!!o;return!1}function tl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!io(n,i))return!0}return!1}function Py({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const xy=t=>t.__isSuspense;function My(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):ky(t)}function li(t,e){if(Me){let n=Me.provides;const s=Me.parent&&Me.parent.provides;s===n&&(n=Me.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Me||ft;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s.proxy):e}}const nl={};function hi(t,e,n){return Pf(t,e,n)}function Pf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ge){const a=Me;let c,u=!1,l=!1;if(Be(t)?(c=()=>t.value,u=Sa(t)):ls(t)?(c=()=>t,s=!0):z(t)?(l=!0,u=t.some(k=>ls(k)||Sa(k)),c=()=>t.map(k=>{if(Be(k))return k.value;if(ls(k))return Dn(k);if(Y(k))return fn(k,a,2)})):Y(t)?e?c=()=>fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),dt(t,a,3,[f])}:c=kt,e&&s){const k=c;c=()=>Dn(k())}let h,f=k=>{h=T.onStop=()=>{fn(k,a,4)}};if(dr)return f=kt,e?n&&dt(e,a,3,[c(),l?[]:void 0,f]):c(),kt;let g=l?[]:nl;const y=()=>{if(!!T.active)if(e){const k=T.run();(s||u||(l?k.some((O,W)=>cr(O,g[W])):cr(k,g)))&&(h&&h(),dt(e,a,3,[k,g===nl?void 0:g,f]),g=k)}else T.run()};y.allowRecurse=!!e;let w;r==="sync"?w=y:r==="post"?w=()=>et(y,a&&a.suspense):w=()=>Ay(y);const T=new Sc(c,w);return e?n?y():g=T.run():r==="post"?et(T.run.bind(T),a&&a.suspense):T.run(),()=>{T.stop(),a&&a.scope&&Ec(a.scope.effects,T)}}function Ly(t,e,n){const s=this.proxy,r=Le(t)?t.includes(".")?xf(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Me;ys(this);const a=Pf(r,i.bind(s),n);return o?ys(o):Ln(),a}function xf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Dn(t,e){if(!Oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Be(t))Dn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Dn(t[n],e);else if(nf(t)||us(t))t.forEach(n=>{Dn(n,e)});else if(of(t))for(const n in t)Dn(t[n],e);return t}function Uy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return co(()=>{t.isMounted=!0}),$f(()=>{t.isUnmounting=!0}),t}const lt=[Function,Array],Fy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(t,{slots:e}){const n=bv(),s=Uy();let r;return()=>{const i=e.default&&Lf(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const w of i)if(w.type!==Bt){o=w;break}}const a=oe(t),{mode:c}=a;if(s.isLeaving)return Yo(o);const u=sl(o);if(!u)return Yo(o);const l=ka(u,a,s,n);Ra(u,l);const h=n.subTree,f=h&&sl(h);let g=!1;const{getTransitionKey:y}=u.type;if(y){const w=y();r===void 0?r=w:w!==r&&(r=w,g=!0)}if(f&&f.type!==Bt&&(!Rn(u,f)||g)){const w=ka(f,a,s,n);if(Ra(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update()},Yo(o);c==="in-out"&&u.type!==Bt&&(w.delayLeave=(T,k,O)=>{const W=Mf(s,f);W[String(f.key)]=f,T._leaveCb=()=>{k(),T._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=O})}return o}}},Vy=Fy;function Mf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ka(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:y,onBeforeAppear:w,onAppear:T,onAfterAppear:k,onAppearCancelled:O}=e,W=String(t.key),Q=Mf(n,t),ae=(Z,ue)=>{Z&&dt(Z,s,9,ue)},Ie=(Z,ue)=>{const we=ue[1];ae(Z,ue),z(Z)?Z.every(Fe=>Fe.length<=1)&&we():Z.length<=1&&we()},Ae={mode:i,persisted:o,beforeEnter(Z){let ue=a;if(!n.isMounted)if(r)ue=w||a;else return;Z._leaveCb&&Z._leaveCb(!0);const we=Q[W];we&&Rn(t,we)&&we.el._leaveCb&&we.el._leaveCb(),ae(ue,[Z])},enter(Z){let ue=c,we=u,Fe=l;if(!n.isMounted)if(r)ue=T||c,we=k||u,Fe=O||l;else return;let Ve=!1;const mt=Z._enterCb=Jt=>{Ve||(Ve=!0,Jt?ae(Fe,[Z]):ae(we,[Z]),Ae.delayedLeave&&Ae.delayedLeave(),Z._enterCb=void 0)};ue?Ie(ue,[Z,mt]):mt()},leave(Z,ue){const we=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return ue();ae(h,[Z]);let Fe=!1;const Ve=Z._leaveCb=mt=>{Fe||(Fe=!0,ue(),mt?ae(y,[Z]):ae(g,[Z]),Z._leaveCb=void 0,Q[we]===t&&delete Q[we])};Q[we]=t,f?Ie(f,[Z,Ve]):Ve()},clone(Z){return ka(Z,e,n,s)}};return Ae}function Yo(t){if(oo(t))return t=vn(t),t.children=null,t}function sl(t){return oo(t)?t.children?t.children[0]:void 0:t}function Ra(t,e){t.shapeFlag&6&&t.component?Ra(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Lf(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===tt?(o.patchFlag&128&&r++,s=s.concat(Lf(o.children,e,a))):(e||o.type!==Bt)&&s.push(a!=null?vn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Uf(t){return Y(t)?{setup:t,name:t.name}:t}const fi=t=>!!t.type.__asyncLoader,oo=t=>t.type.__isKeepAlive;function $y(t,e){Ff(t,"a",e)}function By(t,e){Ff(t,"da",e)}function Ff(t,e,n=Me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ao(e,s,n),n){let r=n.parent;for(;r&&r.parent;)oo(r.parent.vnode)&&jy(s,e,n,r),r=r.parent}}function jy(t,e,n,s){const r=ao(e,t,s,!0);Bf(()=>{Ec(s[e],r)},n)}function ao(t,e,n=Me,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ns(),ys(n);const a=dt(e,n,t,o);return Ln(),Ds(),a});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=Me)=>(!dr||t==="sp")&&ao(t,e,n),Vf=Xt("bm"),co=Xt("m"),Hy=Xt("bu"),Ky=Xt("u"),$f=Xt("bum"),Bf=Xt("um"),qy=Xt("sp"),zy=Xt("rtg"),Wy=Xt("rtc");function Gy(t,e=Me){ao("ec",t,e)}function Qy(t,e){const n=ft;if(n===null)return t;const s=lo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=ge]=e[i];Y(o)&&(o={mounted:o,updated:o}),o.deep&&Dn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Sn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ns(),dt(c,n,8,[t.el,a,t,e]),Ds())}}const jf="components";function Pc(t,e){return Yy(jf,t,!0,e)||t}const Xy=Symbol();function Yy(t,e,n,s=!1){const r=ft||Me;if(r){const i=r.type;if(t===jf){const a=Rv(i);if(a&&(a===e||a===Pt(e)||a===to(Pt(e))))return i}const o=rl(r[t]||i[t],e)||rl(r.appContext[t],e);return!o&&s?i:o}}function rl(t,e){return t&&(t[e]||t[Pt(e)]||t[to(Pt(e))])}function Jy(t,e,n,s){let r;const i=n&&n[s];if(z(t)||Le(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Oe(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Na=t=>t?ed(t)?lo(t)||t.proxy:Na(t.parent):null,Si=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Na(t.parent),$root:t=>Na(t.root),$emit:t=>t.emit,$options:t=>Kf(t),$forceUpdate:t=>t.f||(t.f=()=>Cf(t.update)),$nextTick:t=>t.n||(t.n=Sf.bind(t.proxy)),$watch:t=>Ly.bind(t)}),Zy={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(s!==ge&&se(s,e))return o[e]=1,s[e];if(r!==ge&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==ge&&se(n,e))return o[e]=4,n[e];Da&&(o[e]=0)}}const l=Si[e];let h,f;if(l)return e==="$attrs"&&at(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ge&&se(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,se(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return r!==ge&&se(r,e)?(r[e]=n,!0):s!==ge&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ge&&se(t,o)||e!==ge&&se(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Si,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Da=!0;function ev(t){const e=Kf(t),n=t.proxy,s=t.ctx;Da=!1,e.beforeCreate&&il(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:w,deactivated:T,beforeDestroy:k,beforeUnmount:O,destroyed:W,unmounted:Q,render:ae,renderTracked:Ie,renderTriggered:Ae,errorCaptured:Z,serverPrefetch:ue,expose:we,inheritAttrs:Fe,components:Ve,directives:mt,filters:Jt}=e;if(u&&tv(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const me in o){const le=o[me];Y(le)&&(s[me]=le.bind(n))}if(r){const me=r.call(n,n);Oe(me)&&(t.data=zn(me))}if(Da=!0,i)for(const me in i){const le=i[me],st=Y(le)?le.bind(n,n):Y(le.get)?le.get.bind(n,n):kt,Yn=!Y(le)&&Y(le.set)?le.set.bind(n):kt,Lt=Ct({get:st,set:Yn});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Lt.value,set:Et=>Lt.value=Et})}if(a)for(const me in a)Hf(a[me],s,n,me);if(c){const me=Y(c)?c.call(n):c;Reflect.ownKeys(me).forEach(le=>{li(le,me[le])})}l&&il(l,t,"c");function ke(me,le){z(le)?le.forEach(st=>me(st.bind(n))):le&&me(le.bind(n))}if(ke(Vf,h),ke(co,f),ke(Hy,g),ke(Ky,y),ke($y,w),ke(By,T),ke(Gy,Z),ke(Wy,Ie),ke(zy,Ae),ke($f,O),ke(Bf,Q),ke(qy,ue),z(we))if(we.length){const me=t.exposed||(t.exposed={});we.forEach(le=>{Object.defineProperty(me,le,{get:()=>n[le],set:st=>n[le]=st})})}else t.exposed||(t.exposed={});ae&&t.render===kt&&(t.render=ae),Fe!=null&&(t.inheritAttrs=Fe),Ve&&(t.components=Ve),mt&&(t.directives=mt)}function tv(t,e,n,s=!1){z(t)&&(t=Oa(t));for(const r in t){const i=t[r];let o;Oe(i)?"default"in i?o=Rt(i.from||r,i.default,!0):o=Rt(i.from||r):o=Rt(i),Be(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function il(t,e,n){dt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hf(t,e,n,s){const r=s.includes(".")?xf(n,s):()=>n[s];if(Le(t)){const i=e[t];Y(i)&&hi(r,i)}else if(Y(t))hi(r,t.bind(n));else if(Oe(t))if(z(t))t.forEach(i=>Hf(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&hi(r,i,t)}}function Kf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Ci(c,u,o,!0)),Ci(c,e,o)),i.set(e,c),c}function Ci(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ci(t,i,n,!0),r&&r.forEach(o=>Ci(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=nv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const nv={data:ol,props:An,emits:An,methods:An,computed:An,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:An,directives:An,watch:rv,provide:ol,inject:sv};function ol(t,e){return e?t?function(){return Qe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function sv(t,e){return An(Oa(t),Oa(e))}function Oa(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Je(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?Qe(Qe(Object.create(null),t),e):e}function rv(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=Je(t[s],e[s]);return n}function iv(t,e,n,s=!1){const r={},i={};Ti(i,uo,1),t.propsDefaults=Object.create(null),qf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:yy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ov(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let f=l[h];if(io(t.emitsOptions,f))continue;const g=e[f];if(c)if(se(i,f))g!==i[f]&&(i[f]=g,u=!0);else{const y=Pt(f);r[y]=Pa(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,u=!0)}}}else{qf(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=Rs(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=Pa(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h)&&!0)&&(delete i[h],u=!0)}u&&Ht(t,"set","$attrs")}function qf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ci(c))continue;const u=e[c];let l;r&&se(r,l=Pt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:io(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=oe(n),u=a||ge;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Pa(r,c,h,u[h],t,!se(u,h))}}return o}function Pa(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Y(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ys(r),s=u[n]=c.call(null,e),Ln())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Rs(n))&&(s=!0))}return s}function zf(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const l=h=>{c=!0;const[f,g]=zf(h,e,!0);Qe(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return s.set(t,cs),cs;if(z(i))for(let l=0;l<i.length;l++){const h=Pt(i[l]);al(h)&&(o[h]=ge)}else if(i)for(const l in i){const h=Pt(l);if(al(h)){const f=i[l],g=o[h]=z(f)||Y(f)?{type:f}:f;if(g){const y=ll(Boolean,g.type),w=ll(String,g.type);g[0]=y>-1,g[1]=w<0||y<w,(y>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return s.set(t,u),u}function al(t){return t[0]!=="$"}function cl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ul(t,e){return cl(t)===cl(e)}function ll(t,e){return z(e)?e.findIndex(n=>ul(n,t)):Y(e)&&ul(e,t)?0:-1}const Wf=t=>t[0]==="_"||t==="$stable",xc=t=>z(t)?t.map(St):[St(t)],av=(t,e,n)=>{if(e._n)return e;const s=Oc((...r)=>xc(e(...r)),n);return s._c=!1,s},Gf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Wf(r))continue;const i=t[r];if(Y(i))e[r]=av(r,i,s);else if(i!=null){const o=xc(i);e[r]=()=>o}}},Qf=(t,e)=>{const n=xc(e);t.slots.default=()=>n},cv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ti(e,"_",n)):Gf(e,t.slots={})}else t.slots={},e&&Qf(t,e);Ti(t.slots,uo,1)},uv=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ge;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Qe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Gf(e,r)),o=e}else e&&(Qf(t,e),o={default:1});if(i)for(const a in r)!Wf(a)&&!(a in o)&&delete r[a]};function Xf(){return{app:null,config:{isNativeTag:Um,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lv=0;function hv(t,e){return function(s,r=null){Y(s)||(s=Object.assign({},s)),r!=null&&!Oe(r)&&(r=null);const i=Xf(),o=new Set;let a=!1;const c=i.app={_uid:lv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Dv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...l)):Y(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const f=nt(s,r);return f.appContext=i,l&&e?e(f,u):t(f,u,h),a=!0,c._container=u,u.__vue_app__=c,lo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function xa(t,e,n,s,r=!1){if(z(t)){t.forEach((f,g)=>xa(f,e&&(z(e)?e[g]:e),n,s,r));return}if(fi(s)&&!r)return;const i=s.shapeFlag&4?lo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ge?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Le(u)?(l[u]=null,se(h,u)&&(h[u]=null)):Be(u)&&(u.value=null)),Y(c))fn(c,a,12,[o,l]);else{const f=Le(c),g=Be(c);if(f||g){const y=()=>{if(t.f){const w=f?l[c]:c.value;r?z(w)&&Ec(w,i):z(w)?w.includes(i)||w.push(i):f?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else f?(l[c]=o,se(h,c)&&(h[c]=o)):Be(c)&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,et(y,n)):y()}}}const et=My;function fv(t){return dv(t)}function dv(t,e){const n=Hm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:f,setScopeId:g=kt,cloneNode:y,insertStaticContent:w}=t,T=(d,p,m,E=null,_=null,A=null,D=!1,C=null,R=!!p.dynamicChildren)=>{if(d===p)return;d&&!Rn(d,p)&&(E=U(d),ut(d,_,A,!0),d=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:F,shapeFlag:P}=p;switch(I){case Mc:k(d,p,m,E);break;case Bt:O(d,p,m,E);break;case Jo:d==null&&W(p,m,E,D);break;case tt:mt(d,p,m,E,_,A,D,C,R);break;default:P&1?Ie(d,p,m,E,_,A,D,C,R):P&6?Jt(d,p,m,E,_,A,D,C,R):(P&64||P&128)&&I.process(d,p,m,E,_,A,D,C,R,ye)}F!=null&&_&&xa(F,d&&d.ref,A,p||d,!p)},k=(d,p,m,E)=>{if(d==null)s(p.el=a(p.children),m,E);else{const _=p.el=d.el;p.children!==d.children&&u(_,p.children)}},O=(d,p,m,E)=>{d==null?s(p.el=c(p.children||""),m,E):p.el=d.el},W=(d,p,m,E)=>{[d.el,d.anchor]=w(d.children,p,m,E,d.el,d.anchor)},Q=({el:d,anchor:p},m,E)=>{let _;for(;d&&d!==p;)_=f(d),s(d,m,E),d=_;s(p,m,E)},ae=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},Ie=(d,p,m,E,_,A,D,C,R)=>{D=D||p.type==="svg",d==null?Ae(p,m,E,_,A,D,C,R):we(d,p,_,A,D,C,R)},Ae=(d,p,m,E,_,A,D,C)=>{let R,I;const{type:F,props:P,shapeFlag:V,transition:q,patchFlag:re,dirs:fe}=d;if(d.el&&y!==void 0&&re===-1)R=d.el=y(d.el);else{if(R=d.el=o(d.type,A,P&&P.is,P),V&8?l(R,d.children):V&16&&ue(d.children,R,null,E,_,A&&F!=="foreignObject",D,C),fe&&Sn(d,null,E,"created"),P){for(const _e in P)_e!=="value"&&!ci(_e)&&i(R,_e,null,P[_e],A,d.children,E,_,N);"value"in P&&i(R,"value",null,P.value),(I=P.onVnodeBeforeMount)&&It(I,E,d)}Z(R,d,d.scopeId,D,E)}fe&&Sn(d,null,E,"beforeMount");const de=(!_||_&&!_.pendingBranch)&&q&&!q.persisted;de&&q.beforeEnter(R),s(R,p,m),((I=P&&P.onVnodeMounted)||de||fe)&&et(()=>{I&&It(I,E,d),de&&q.enter(R),fe&&Sn(d,null,E,"mounted")},_)},Z=(d,p,m,E,_)=>{if(m&&g(d,m),E)for(let A=0;A<E.length;A++)g(d,E[A]);if(_){let A=_.subTree;if(p===A){const D=_.vnode;Z(d,D,D.scopeId,D.slotScopeIds,_.parent)}}},ue=(d,p,m,E,_,A,D,C,R=0)=>{for(let I=R;I<d.length;I++){const F=d[I]=C?rn(d[I]):St(d[I]);T(null,F,p,m,E,_,A,D,C)}},we=(d,p,m,E,_,A,D)=>{const C=p.el=d.el;let{patchFlag:R,dynamicChildren:I,dirs:F}=p;R|=d.patchFlag&16;const P=d.props||ge,V=p.props||ge;let q;m&&Cn(m,!1),(q=V.onVnodeBeforeUpdate)&&It(q,m,p,d),F&&Sn(p,d,m,"beforeUpdate"),m&&Cn(m,!0);const re=_&&p.type!=="foreignObject";if(I?Fe(d.dynamicChildren,I,C,m,E,re,A):D||st(d,p,C,null,m,E,re,A,!1),R>0){if(R&16)Ve(C,p,P,V,m,E,_);else if(R&2&&P.class!==V.class&&i(C,"class",null,V.class,_),R&4&&i(C,"style",P.style,V.style,_),R&8){const fe=p.dynamicProps;for(let de=0;de<fe.length;de++){const _e=fe[de],yt=P[_e],Jn=V[_e];(Jn!==yt||_e==="value")&&i(C,_e,yt,Jn,_,d.children,m,E,N)}}R&1&&d.children!==p.children&&l(C,p.children)}else!D&&I==null&&Ve(C,p,P,V,m,E,_);((q=V.onVnodeUpdated)||F)&&et(()=>{q&&It(q,m,p,d),F&&Sn(p,d,m,"updated")},E)},Fe=(d,p,m,E,_,A,D)=>{for(let C=0;C<p.length;C++){const R=d[C],I=p[C],F=R.el&&(R.type===tt||!Rn(R,I)||R.shapeFlag&70)?h(R.el):m;T(R,I,F,null,E,_,A,D,!0)}},Ve=(d,p,m,E,_,A,D)=>{if(m!==E){for(const C in E){if(ci(C))continue;const R=E[C],I=m[C];R!==I&&C!=="value"&&i(d,C,I,R,D,p.children,_,A,N)}if(m!==ge)for(const C in m)!ci(C)&&!(C in E)&&i(d,C,m[C],null,D,p.children,_,A,N);"value"in E&&i(d,"value",m.value,E.value)}},mt=(d,p,m,E,_,A,D,C,R)=>{const I=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:P,dynamicChildren:V,slotScopeIds:q}=p;q&&(C=C?C.concat(q):q),d==null?(s(I,m,E),s(F,m,E),ue(p.children,m,F,_,A,D,C,R)):P>0&&P&64&&V&&d.dynamicChildren?(Fe(d.dynamicChildren,V,m,_,A,D,C),(p.key!=null||_&&p===_.subTree)&&Yf(d,p,!0)):st(d,p,m,F,_,A,D,C,R)},Jt=(d,p,m,E,_,A,D,C,R)=>{p.slotScopeIds=C,d==null?p.shapeFlag&512?_.ctx.activate(p,m,E,D,R):Xn(p,m,E,_,A,D,R):ke(d,p,R)},Xn=(d,p,m,E,_,A,D)=>{const C=d.component=Iv(d,E,_);if(oo(d)&&(C.ctx.renderer=ye),Sv(C),C.asyncDep){if(_&&_.registerDep(C,me),!d.el){const R=C.subTree=nt(Bt);O(null,R,p,m)}return}me(C,d,p,m,_,A,D)},ke=(d,p,m)=>{const E=p.component=d.component;if(Oy(d,p,m))if(E.asyncDep&&!E.asyncResolved){le(E,p,m);return}else E.next=p,Cy(E.update),E.update();else p.el=d.el,E.vnode=p},me=(d,p,m,E,_,A,D)=>{const C=()=>{if(d.isMounted){let{next:F,bu:P,u:V,parent:q,vnode:re}=d,fe=F,de;Cn(d,!1),F?(F.el=re.el,le(d,F,D)):F=re,P&&ui(P),(de=F.props&&F.props.onVnodeBeforeUpdate)&&It(de,q,F,re),Cn(d,!0);const _e=Xo(d),yt=d.subTree;d.subTree=_e,T(yt,_e,h(yt.el),U(yt),d,_,A),F.el=_e.el,fe===null&&Py(d,_e.el),V&&et(V,_),(de=F.props&&F.props.onVnodeUpdated)&&et(()=>It(de,q,F,re),_)}else{let F;const{el:P,props:V}=p,{bm:q,m:re,parent:fe}=d,de=fi(p);if(Cn(d,!1),q&&ui(q),!de&&(F=V&&V.onVnodeBeforeMount)&&It(F,fe,p),Cn(d,!0),P&&J){const _e=()=>{d.subTree=Xo(d),J(P,d.subTree,d,_,null)};de?p.type.__asyncLoader().then(()=>!d.isUnmounted&&_e()):_e()}else{const _e=d.subTree=Xo(d);T(null,_e,m,E,d,_,A),p.el=_e.el}if(re&&et(re,_),!de&&(F=V&&V.onVnodeMounted)){const _e=p;et(()=>It(F,fe,_e),_)}(p.shapeFlag&256||fe&&fi(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&et(d.a,_),d.isMounted=!0,p=m=E=null}},R=d.effect=new Sc(C,()=>Cf(I),d.scope),I=d.update=()=>R.run();I.id=d.uid,Cn(d,!0),I()},le=(d,p,m)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,ov(d,p.props,E,m),uv(d,p.children,m),Ns(),ro(void 0,d.update),Ds()},st=(d,p,m,E,_,A,D,C,R=!1)=>{const I=d&&d.children,F=d?d.shapeFlag:0,P=p.children,{patchFlag:V,shapeFlag:q}=p;if(V>0){if(V&128){Lt(I,P,m,E,_,A,D,C,R);return}else if(V&256){Yn(I,P,m,E,_,A,D,C,R);return}}q&8?(F&16&&N(I,_,A),P!==I&&l(m,P)):F&16?q&16?Lt(I,P,m,E,_,A,D,C,R):N(I,_,A,!0):(F&8&&l(m,""),q&16&&ue(P,m,E,_,A,D,C,R))},Yn=(d,p,m,E,_,A,D,C,R)=>{d=d||cs,p=p||cs;const I=d.length,F=p.length,P=Math.min(I,F);let V;for(V=0;V<P;V++){const q=p[V]=R?rn(p[V]):St(p[V]);T(d[V],q,m,null,_,A,D,C,R)}I>F?N(d,_,A,!0,!1,P):ue(p,m,E,_,A,D,C,R,P)},Lt=(d,p,m,E,_,A,D,C,R)=>{let I=0;const F=p.length;let P=d.length-1,V=F-1;for(;I<=P&&I<=V;){const q=d[I],re=p[I]=R?rn(p[I]):St(p[I]);if(Rn(q,re))T(q,re,m,null,_,A,D,C,R);else break;I++}for(;I<=P&&I<=V;){const q=d[P],re=p[V]=R?rn(p[V]):St(p[V]);if(Rn(q,re))T(q,re,m,null,_,A,D,C,R);else break;P--,V--}if(I>P){if(I<=V){const q=V+1,re=q<F?p[q].el:E;for(;I<=V;)T(null,p[I]=R?rn(p[I]):St(p[I]),m,re,_,A,D,C,R),I++}}else if(I>V)for(;I<=P;)ut(d[I],_,A,!0),I++;else{const q=I,re=I,fe=new Map;for(I=re;I<=V;I++){const rt=p[I]=R?rn(p[I]):St(p[I]);rt.key!=null&&fe.set(rt.key,I)}let de,_e=0;const yt=V-re+1;let Jn=!1,Bu=0;const Vs=new Array(yt);for(I=0;I<yt;I++)Vs[I]=0;for(I=q;I<=P;I++){const rt=d[I];if(_e>=yt){ut(rt,_,A,!0);continue}let Tt;if(rt.key!=null)Tt=fe.get(rt.key);else for(de=re;de<=V;de++)if(Vs[de-re]===0&&Rn(rt,p[de])){Tt=de;break}Tt===void 0?ut(rt,_,A,!0):(Vs[Tt-re]=I+1,Tt>=Bu?Bu=Tt:Jn=!0,T(rt,p[Tt],m,null,_,A,D,C,R),_e++)}const ju=Jn?pv(Vs):cs;for(de=ju.length-1,I=yt-1;I>=0;I--){const rt=re+I,Tt=p[rt],Hu=rt+1<F?p[rt+1].el:E;Vs[I]===0?T(null,Tt,m,Hu,_,A,D,C,R):Jn&&(de<0||I!==ju[de]?Et(Tt,m,Hu,2):de--)}}},Et=(d,p,m,E,_=null)=>{const{el:A,type:D,transition:C,children:R,shapeFlag:I}=d;if(I&6){Et(d.component.subTree,p,m,E);return}if(I&128){d.suspense.move(p,m,E);return}if(I&64){D.move(d,p,m,ye);return}if(D===tt){s(A,p,m);for(let P=0;P<R.length;P++)Et(R[P],p,m,E);s(d.anchor,p,m);return}if(D===Jo){Q(d,p,m);return}if(E!==2&&I&1&&C)if(E===0)C.beforeEnter(A),s(A,p,m),et(()=>C.enter(A),_);else{const{leave:P,delayLeave:V,afterLeave:q}=C,re=()=>s(A,p,m),fe=()=>{P(A,()=>{re(),q&&q()})};V?V(A,re,fe):fe()}else s(A,p,m)},ut=(d,p,m,E=!1,_=!1)=>{const{type:A,props:D,ref:C,children:R,dynamicChildren:I,shapeFlag:F,patchFlag:P,dirs:V}=d;if(C!=null&&xa(C,null,m,d,!0),F&256){p.ctx.deactivate(d);return}const q=F&1&&V,re=!fi(d);let fe;if(re&&(fe=D&&D.onVnodeBeforeUnmount)&&It(fe,p,d),F&6)M(d.component,m,E);else{if(F&128){d.suspense.unmount(m,E);return}q&&Sn(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,m,_,ye,E):I&&(A!==tt||P>0&&P&64)?N(I,p,m,!1,!0):(A===tt&&P&384||!_&&F&16)&&N(R,p,m),E&&Wo(d)}(re&&(fe=D&&D.onVnodeUnmounted)||q)&&et(()=>{fe&&It(fe,p,d),q&&Sn(d,null,p,"unmounted")},m)},Wo=d=>{const{type:p,el:m,anchor:E,transition:_}=d;if(p===tt){v(m,E);return}if(p===Jo){ae(d);return}const A=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(d.shapeFlag&1&&_&&!_.persisted){const{leave:D,delayLeave:C}=_,R=()=>D(m,A);C?C(d.el,A,R):R()}else A()},v=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},M=(d,p,m)=>{const{bum:E,scope:_,update:A,subTree:D,um:C}=d;E&&ui(E),_.stop(),A&&(A.active=!1,ut(D,d,p,m)),C&&et(C,p),et(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(d,p,m,E=!1,_=!1,A=0)=>{for(let D=A;D<d.length;D++)ut(d[D],p,m,E,_)},U=d=>d.shapeFlag&6?U(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),he=(d,p,m)=>{d==null?p._vnode&&ut(p._vnode,null,null,!0):T(p._vnode||null,d,p,null,null,null,m),Rf(),p._vnode=d},ye={p:T,um:ut,m:Et,r:Wo,mt:Xn,mc:ue,pc:st,pbc:Fe,n:U,o:t};let ee,J;return e&&([ee,J]=e(ye)),{render:he,hydrate:ee,createApp:hv(he,ee)}}function Cn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Yf(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=rn(r[i]),a.el=o.el),n||Yf(o,a))}}function pv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const gv=t=>t.__isTeleport,tt=Symbol(void 0),Mc=Symbol(void 0),Bt=Symbol(void 0),Jo=Symbol(void 0),Js=[];let wt=null;function hs(t=!1){Js.push(wt=t?null:[])}function mv(){Js.pop(),wt=Js[Js.length-1]||null}let fr=1;function hl(t){fr+=t}function Jf(t){return t.dynamicChildren=fr>0?wt||cs:null,mv(),fr>0&&wt&&wt.push(t),t}function Zs(t,e,n,s,r,i){return Jf(pt(t,e,n,s,r,i,!0))}function yv(t,e,n,s,r){return Jf(nt(t,e,n,s,r,!0))}function Ma(t){return t?t.__v_isVNode===!0:!1}function Rn(t,e){return t.type===e.type&&t.key===e.key}const uo="__vInternal",Zf=({key:t})=>t!=null?t:null,di=({ref:t,ref_key:e,ref_for:n})=>t!=null?Le(t)||Be(t)||Y(t)?{i:ft,r:t,k:e,f:!!n}:t:null;function pt(t,e=null,n=null,s=0,r=null,i=t===tt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zf(e),ref:e&&di(e),scopeId:Of,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(Uc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Le(n)?8:16),fr>0&&!o&&wt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&wt.push(c),c}const nt=vv;function vv(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Xy)&&(t=Bt),Ma(t)){const a=vn(t,e,!0);return n&&Uc(a,n),fr>0&&!i&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag|=-2,a}if(Nv(t)&&(t=t.__vccOpts),e){e=wv(e);let{class:a,style:c}=e;a&&!Le(a)&&(e.class=wc(a)),Oe(c)&&(vf(c)&&!z(c)&&(c=Qe({},c)),e.style=vc(c))}const o=Le(t)?1:xy(t)?128:gv(t)?64:Oe(t)?4:Y(t)?2:0;return pt(t,e,n,s,r,o,i,!0)}function wv(t){return t?vf(t)||uo in t?Qe({},t):t:null}function vn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?_v(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Zf(a),ref:e&&e.ref?n&&r?z(r)?r.concat(di(e)):[r,di(e)]:di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vn(t.ssContent),ssFallback:t.ssFallback&&vn(t.ssFallback),el:t.el,anchor:t.anchor}}function Lc(t=" ",e=0){return nt(Mc,null,t,e)}function St(t){return t==null||typeof t=="boolean"?nt(Bt):z(t)?nt(tt,null,t.slice()):typeof t=="object"?rn(t):nt(Mc,null,String(t))}function rn(t){return t.el===null||t.memo?t:vn(t)}function Uc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Uc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(uo in e)?e._ctx=ft:r===3&&ft&&(ft.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ft},n=32):(e=String(e),s&64?(n=16,e=[Lc(e)]):n=8);t.children=e,t.shapeFlag|=n}function _v(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=wc([e.class,s.class]));else if(r==="style")e.style=vc([e.style,s.style]);else if(Ji(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function It(t,e,n,s=null){dt(t,e,7,[n,s])}const Ev=Xf();let Tv=0;function Iv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Ev,i={uid:Tv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Km(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(s,r),emitsOptions:Df(s,r),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:s.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ry.bind(null,i),t.ce&&t.ce(i),i}let Me=null;const bv=()=>Me||ft,ys=t=>{Me=t,t.scope.on()},Ln=()=>{Me&&Me.scope.off(),Me=null};function ed(t){return t.vnode.shapeFlag&4}let dr=!1;function Sv(t,e=!1){dr=e;const{props:n,children:s}=t.vnode,r=ed(t);iv(t,n,r,e),cv(t,s);const i=r?Cv(t,e):void 0;return dr=!1,i}function Cv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wf(new Proxy(t.ctx,Zy));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?kv(t):null;ys(t),Ns();const i=fn(s,t,0,[t.props,r]);if(Ds(),Ln(),sf(i)){if(i.then(Ln,Ln),e)return i.then(o=>{fl(t,o,e)}).catch(o=>{so(o,t,0)});t.asyncDep=i}else fl(t,i,e)}else td(t,e)}function fl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=If(e)),td(t,n)}let dl;function td(t,e,n){const s=t.type;if(!t.render){if(!e&&dl&&!s.render){const r=s.template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Qe(Qe({isCustomElement:i,delimiters:a},o),c);s.render=dl(r,u)}}t.render=s.render||kt}ys(t),Ns(),ev(t),Ds(),Ln()}function Av(t){return new Proxy(t.attrs,{get(e,n){return at(t,"get","$attrs"),e[n]}})}function kv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Av(t))},slots:t.slots,emit:t.emit,expose:e}}function lo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(If(wf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Si)return Si[n](t)}}))}function Rv(t){return Y(t)&&t.displayName||t.name}function Nv(t){return Y(t)&&"__vccOpts"in t}const Ct=(t,e)=>Iy(t,e,dr);function nd(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!z(e)?Ma(e)?nt(t,null,[e]):nt(t,e):nt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ma(n)&&(n=[n]),nt(t,e,n))}const Dv="3.2.34",Ov="http://www.w3.org/2000/svg",Nn=typeof document!="undefined"?document:null,pl=Nn&&Nn.createElement("template"),Pv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Nn.createElementNS(Ov,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{pl.innerHTML=s?`<svg>${t}</svg>`:t;const a=pl.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function xv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Mv(t,e,n){const s=t.style,r=Le(n);if(n&&!r){for(const i in n)La(s,i,n[i]);if(e&&!Le(e))for(const i in e)n[i]==null&&La(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const gl=/\s*!important$/;function La(t,e,n){if(z(n))n.forEach(s=>La(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Lv(t,e);gl.test(n)?t.setProperty(Rs(s),n.replace(gl,""),"important"):t[s]=n}}const ml=["Webkit","Moz","ms"],Zo={};function Lv(t,e){const n=Zo[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return Zo[e]=s;s=to(s);for(let r=0;r<ml.length;r++){const i=ml[r]+s;if(i in t)return Zo[e]=i}return e}const yl="http://www.w3.org/1999/xlink";function Uv(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(yl,e.slice(6,e.length)):t.setAttributeNS(yl,e,n);else{const i=Om(e);n==null||i&&!ef(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Fv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ef(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}const[sd,Vv]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=()=>performance.now());const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let Ua=0;const $v=Promise.resolve(),Bv=()=>{Ua=0},jv=()=>Ua||($v.then(Bv),Ua=sd());function ns(t,e,n,s){t.addEventListener(e,n,s)}function Hv(t,e,n,s){t.removeEventListener(e,n,s)}function Kv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=qv(e);if(s){const u=i[e]=zv(s,r);ns(t,a,u,c)}else o&&(Hv(t,a,o,c),i[e]=void 0)}}const vl=/(?:Once|Passive|Capture)$/;function qv(t){let e;if(vl.test(t)){e={};let n;for(;n=t.match(vl);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Rs(t.slice(2)),e]}function zv(t,e){const n=s=>{const r=s.timeStamp||sd();(Vv||r>=n.attached-1)&&dt(Wv(s,n.value),e,5,[s])};return n.value=t,n.attached=jv(),n}function Wv(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const wl=/^on[a-z]/,Gv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?xv(t,s,r):e==="style"?Mv(t,n,s):Ji(e)?_c(e)||Kv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(t,e,s,r))?Fv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Uv(t,e,s,r))};function Qv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wl.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wl.test(e)&&Le(n)?!1:e in t}const Xv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vy.props;const _l=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>ui(e,n):e};function Yv(t){t.target.composing=!0}function El(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Jv={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=_l(r);const i=s||r.props&&r.props.type==="number";ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_a(a)),t._assign(a)}),n&&ns(t,"change",()=>{t.value=t.value.trim()}),e||(ns(t,"compositionstart",Yv),ns(t,"compositionend",El),ns(t,"change",El))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=_l(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&_a(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},Zv=Qe({patchProp:Gv},Pv);let Tl;function ew(){return Tl||(Tl=fv(Zv))}const tw=(...t)=>{const e=ew().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=nw(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function nw(t){return Le(t)?document.querySelector(t):t}var sw=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n};const rw={};function iw(t,e){const n=Pc("router-view");return hs(),yv(n)}var ow=sw(rw,[["render",iw]]);/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rd=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Os=t=>rd?Symbol(t):"_vr_"+t,aw=Os("rvlm"),Il=Os("rvd"),ho=Os("r"),Fc=Os("rl"),Fa=Os("rvl"),ss=typeof window!="undefined";function cw(t){return t.__esModule||rd&&t[Symbol.toStringTag]==="Module"}const pe=Object.assign;function ea(t,e){const n={};for(const s in e){const r=e[s];n[s]=Array.isArray(r)?r.map(t):t(r)}return n}const er=()=>{},uw=/\/$/,lw=t=>t.replace(uw,"");function ta(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=pw(s!=null?s:e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function bl(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&vs(e.matched[s],n.matched[r])&&id(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function id(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!dw(t[n],e[n]))return!1;return!0}function dw(t,e){return Array.isArray(t)?Sl(t,e):Array.isArray(e)?Sl(e,t):t===e}function Sl(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],!(r===1||o==="."))if(o==="..")r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var pr;(function(t){t.pop="pop",t.push="push"})(pr||(pr={}));var tr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(tr||(tr={}));function gw(t){if(!t)if(ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),lw(t)}const mw=/^[^#]+#/;function yw(t,e){return t.replace(mw,"#")+e}function vw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function ww(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=vw(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cl(t,e){return(history.state?history.state.position-e:-1)+t}const Va=new Map;function _w(t,e){Va.set(t,e)}function Ew(t){const e=Va.get(t);return Va.delete(t),e}let Tw=()=>location.protocol+"//"+location.host;function od(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),bl(c,"")}return bl(n,t)+s+r}function Iw(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=od(t,location),y=n.value,w=e.value;let T=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}T=w?f.position-w.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:T,type:pr.pop,direction:T?T>0?tr.forward:tr.back:tr.unknown})})};function c(){o=n.value}function u(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:f}=window;!f.state||f.replaceState(pe({},f.state,{scroll:fo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Al(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?fo():null}}function bw(t){const{history:e,location:n}=window,s={value:od(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tw()+t+c;try{e[l?"replaceState":"pushState"](u,"",f),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](f)}}function o(c,u){const l=pe({},e.state,Al(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=pe({},r.value,e.state,{forward:c,scroll:fo()});i(l.current,l,!0);const h=pe({},Al(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Sw(t){t=gw(t);const e=bw(t),n=Iw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=pe({location:"",base:t,go:s,createHref:yw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Cw(t){return typeof t=="string"||t&&typeof t=="object"}function ad(t){return typeof t=="string"||typeof t=="symbol"}const en={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},cd=Os("nf");var kl;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kl||(kl={}));function ws(t,e){return pe(new Error,{type:t,[cd]:!0},e)}function tn(t,e){return t instanceof Error&&cd in t&&(e==null||!!(t.type&e))}const Rl="[^/]+?",Aw={sensitive:!1,strict:!1,start:!0,end:!0},kw=/[.+*?^${}()[\]/\\]/g;function Rw(t,e){const n=pe({},Aw,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(kw,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:w,optional:T,regexp:k}=f;i.push({name:y,repeatable:w,optional:T});const O=k||Rl;if(O!==Rl){g+=10;try{new RegExp(`(${O})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${y}" (${O}): `+Q.message)}}let W=w?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(W=T&&u.length<2?`(?:/${W})`:"/"+W),T&&(W+="?"),r+=W,g+=20,T&&(g+=-8),w&&(g+=-20),O===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let f=1;f<l.length;f++){const g=l[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const f of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of f)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:w,optional:T}=g,k=y in u?u[y]:"";if(Array.isArray(k)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const O=Array.isArray(k)?k.join("/"):k;if(!O)if(T)f.length<2&&t.length>1&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=O}}return l}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Dw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Nw(s[n],r[n]);if(i)return i;n++}return r.length-s.length}const Ow={type:0,value:""},Pw=/[a-zA-Z0-9_]/;function xw(t){if(!t)return[[]];if(t==="/")return[[Ow]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Pw.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function Mw(t,e,n){const s=Rw(xw(t.path),n),r=pe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lw(t,e){const n=[],s=new Map;e=Dl({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,f){const g=!f,y=Fw(l);y.aliasOf=f&&f.record;const w=Dl(e,l),T=[y];if("alias"in l){const W=typeof l.alias=="string"?[l.alias]:l.alias;for(const Q of W)T.push(pe({},y,{components:f?f.record.components:y.components,path:Q,aliasOf:f?f.record:y}))}let k,O;for(const W of T){const{path:Q}=W;if(h&&Q[0]!=="/"){const ae=h.record.path,Ie=ae[ae.length-1]==="/"?"":"/";W.path=h.record.path+(Q&&Ie+Q)}if(k=Mw(W,h,w),f?f.alias.push(k):(O=O||k,O!==k&&O.alias.push(k),g&&l.name&&!Nl(k)&&o(l.name)),"children"in y){const ae=y.children;for(let Ie=0;Ie<ae.length;Ie++)i(ae[Ie],k,f&&f.children[Ie])}f=f||k,c(k)}return O?()=>{o(O)}:er}function o(l){if(ad(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Dw(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ud(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Nl(l)&&s.set(l.record.name,l)}function u(l,h){let f,g={},y,w;if("name"in l&&l.name){if(f=s.get(l.name),!f)throw ws(1,{location:l});w=f.record.name,g=pe(Uw(h.params,f.keys.filter(O=>!O.optional).map(O=>O.name)),l.params),y=f.stringify(g)}else if("path"in l)y=l.path,f=n.find(O=>O.re.test(y)),f&&(g=f.parse(y),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!f)throw ws(1,{location:l,currentLocation:h});w=f.record.name,g=pe({},h.params,l.params),y=f.stringify(g)}const T=[];let k=f;for(;k;)T.unshift(k.record),k=k.parent;return{name:w,path:y,params:g,matched:T,meta:$w(T)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Uw(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Fw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Vw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Vw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nl(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $w(t){return t.reduce((e,n)=>pe(e,n.meta),{})}function Dl(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ud(t,e){return e.children.some(n=>n===t||ud(t,n))}const ld=/#/g,Bw=/&/g,jw=/\//g,Hw=/=/g,Kw=/\?/g,hd=/\+/g,qw=/%5B/g,zw=/%5D/g,fd=/%5E/g,Ww=/%60/g,dd=/%7B/g,Gw=/%7C/g,pd=/%7D/g,Qw=/%20/g;function Vc(t){return encodeURI(""+t).replace(Gw,"|").replace(qw,"[").replace(zw,"]")}function Xw(t){return Vc(t).replace(dd,"{").replace(pd,"}").replace(fd,"^")}function $a(t){return Vc(t).replace(hd,"%2B").replace(Qw,"+").replace(ld,"%23").replace(Bw,"%26").replace(Ww,"`").replace(dd,"{").replace(pd,"}").replace(fd,"^")}function Yw(t){return $a(t).replace(Hw,"%3D")}function Jw(t){return Vc(t).replace(ld,"%23").replace(Kw,"%3F")}function Zw(t){return t==null?"":Jw(t).replace(jw,"%2F")}function Ai(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function e_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(hd," "),o=i.indexOf("="),a=Ai(o<0?i:i.slice(0,o)),c=o<0?null:Ai(i.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Ol(t){let e="";for(let n in t){const s=t[n];if(n=Yw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(s)?s.map(i=>i&&$a(i)):[s&&$a(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function t_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Array.isArray(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}function $s(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function on(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ws(4,{from:n,to:e})):h instanceof Error?a(h):Cw(h)?a(ws(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function na(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(n_(a)){const u=(a.__vccOpts||a)[e];u&&r.push(on(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=cw(u)?u.default:u;i.components[o]=l;const f=(l.__vccOpts||l)[e];return f&&on(f,n,s,i,o)()}))}}return r}function n_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Pl(t){const e=Rt(ho),n=Rt(Fc),s=Ct(()=>e.resolve(Qs(t.to))),r=Ct(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const f=h.findIndex(vs.bind(null,l));if(f>-1)return f;const g=xl(c[u-2]);return u>1&&xl(l)===g&&h[h.length-1].path!==g?h.findIndex(vs.bind(null,c[u-2])):f}),i=Ct(()=>r.value>-1&&o_(n.params,s.value.params)),o=Ct(()=>r.value>-1&&r.value===n.matched.length-1&&id(n.params,s.value.params));function a(c={}){return i_(c)?e[Qs(t.replace)?"replace":"push"](Qs(t.to)).catch(er):Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const s_=Uf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Pl,setup(t,{slots:e}){const n=zn(Pl(t)),{options:s}=Rt(ho),r=Ct(()=>({[Ml(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ml(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:nd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),r_=s_;function i_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function o_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Array.isArray(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function xl(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ml=(t,e,n)=>t!=null?t:e!=null?e:n,a_=Uf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(Fa),r=Ct(()=>t.route||s.value),i=Rt(Il,0),o=Ct(()=>r.value.matched[i]);li(Il,i+1),li(aw,o),li(Fa,r);const a=vy();return hi(()=>[a.value,o.value,t.name],([c,u,l],[h,f,g])=>{u&&(u.instances[l]=c,f&&f!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!vs(u,f)||!h)&&(u.enterCallbacks[l]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=r.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return Ll(n.default,{Component:l,route:c});const f=u.props[t.name],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,w=nd(l,pe({},g,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return Ll(n.default,{Component:w,route:c})||w}}});function Ll(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const c_=a_;function u_(t){const e=Lw(t.routes,t),n=t.parseQuery||e_,s=t.stringifyQuery||Ol,r=t.history,i=$s(),o=$s(),a=$s(),c=wy(en);let u=en;ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=ea.bind(null,v=>""+v),h=ea.bind(null,Zw),f=ea.bind(null,Ai);function g(v,M){let N,U;return ad(v)?(N=e.getRecordMatcher(v),U=M):U=v,e.addRoute(U,N)}function y(v){const M=e.getRecordMatcher(v);M&&e.removeRoute(M)}function w(){return e.getRoutes().map(v=>v.record)}function T(v){return!!e.getRecordMatcher(v)}function k(v,M){if(M=pe({},M||c.value),typeof v=="string"){const J=ta(n,v,M.path),d=e.resolve({path:J.path},M),p=r.createHref(J.fullPath);return pe(J,d,{params:f(d.params),hash:Ai(J.hash),redirectedFrom:void 0,href:p})}let N;if("path"in v)N=pe({},v,{path:ta(n,v.path,M.path).path});else{const J=pe({},v.params);for(const d in J)J[d]==null&&delete J[d];N=pe({},v,{params:h(v.params)}),M.params=h(M.params)}const U=e.resolve(N,M),he=v.hash||"";U.params=l(f(U.params));const ye=hw(s,pe({},v,{hash:Xw(he),path:U.path})),ee=r.createHref(ye);return pe({fullPath:ye,hash:he,query:s===Ol?t_(v.query):v.query||{}},U,{redirectedFrom:void 0,href:ee})}function O(v){return typeof v=="string"?ta(n,v,c.value.path):pe({},v)}function W(v,M){if(u!==v)return ws(8,{from:M,to:v})}function Q(v){return Ae(v)}function ae(v){return Q(pe(O(v),{replace:!0}))}function Ie(v){const M=v.matched[v.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let U=typeof N=="function"?N(v):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=O(U):{path:U},U.params={}),pe({query:v.query,hash:v.hash,params:v.params},U)}}function Ae(v,M){const N=u=k(v),U=c.value,he=v.state,ye=v.force,ee=v.replace===!0,J=Ie(N);if(J)return Ae(pe(O(J),{state:he,force:ye,replace:ee}),M||N);const d=N;d.redirectedFrom=M;let p;return!ye&&fw(s,U,N)&&(p=ws(16,{to:d,from:U}),Yn(U,U,!0,!1)),(p?Promise.resolve(p):ue(d,U)).catch(m=>tn(m)?tn(m,2)?m:st(m):me(m,d,U)).then(m=>{if(m){if(tn(m,2))return Ae(pe(O(m.to),{state:he,force:ye,replace:ee}),M||d)}else m=Fe(d,U,!0,ee,he);return we(d,U,m),m})}function Z(v,M){const N=W(v,M);return N?Promise.reject(N):Promise.resolve()}function ue(v,M){let N;const[U,he,ye]=l_(v,M);N=na(U.reverse(),"beforeRouteLeave",v,M);for(const J of U)J.leaveGuards.forEach(d=>{N.push(on(d,v,M))});const ee=Z.bind(null,v,M);return N.push(ee),Zn(N).then(()=>{N=[];for(const J of i.list())N.push(on(J,v,M));return N.push(ee),Zn(N)}).then(()=>{N=na(he,"beforeRouteUpdate",v,M);for(const J of he)J.updateGuards.forEach(d=>{N.push(on(d,v,M))});return N.push(ee),Zn(N)}).then(()=>{N=[];for(const J of v.matched)if(J.beforeEnter&&!M.matched.includes(J))if(Array.isArray(J.beforeEnter))for(const d of J.beforeEnter)N.push(on(d,v,M));else N.push(on(J.beforeEnter,v,M));return N.push(ee),Zn(N)}).then(()=>(v.matched.forEach(J=>J.enterCallbacks={}),N=na(ye,"beforeRouteEnter",v,M),N.push(ee),Zn(N))).then(()=>{N=[];for(const J of o.list())N.push(on(J,v,M));return N.push(ee),Zn(N)}).catch(J=>tn(J,8)?J:Promise.reject(J))}function we(v,M,N){for(const U of a.list())U(v,M,N)}function Fe(v,M,N,U,he){const ye=W(v,M);if(ye)return ye;const ee=M===en,J=ss?history.state:{};N&&(U||ee?r.replace(v.fullPath,pe({scroll:ee&&J&&J.scroll},he)):r.push(v.fullPath,he)),c.value=v,Yn(v,M,N,ee),st()}let Ve;function mt(){Ve||(Ve=r.listen((v,M,N)=>{const U=k(v),he=Ie(U);if(he){Ae(pe(he,{replace:!0}),U).catch(er);return}u=U;const ye=c.value;ss&&_w(Cl(ye.fullPath,N.delta),fo()),ue(U,ye).catch(ee=>tn(ee,12)?ee:tn(ee,2)?(Ae(ee.to,U).then(J=>{tn(J,20)&&!N.delta&&N.type===pr.pop&&r.go(-1,!1)}).catch(er),Promise.reject()):(N.delta&&r.go(-N.delta,!1),me(ee,U,ye))).then(ee=>{ee=ee||Fe(U,ye,!1),ee&&(N.delta?r.go(-N.delta,!1):N.type===pr.pop&&tn(ee,20)&&r.go(-1,!1)),we(U,ye,ee)}).catch(er)}))}let Jt=$s(),Xn=$s(),ke;function me(v,M,N){st(v);const U=Xn.list();return U.length?U.forEach(he=>he(v,M,N)):console.error(v),Promise.reject(v)}function le(){return ke&&c.value!==en?Promise.resolve():new Promise((v,M)=>{Jt.add([v,M])})}function st(v){return ke||(ke=!v,mt(),Jt.list().forEach(([M,N])=>v?N(v):M()),Jt.reset()),v}function Yn(v,M,N,U){const{scrollBehavior:he}=t;if(!ss||!he)return Promise.resolve();const ye=!N&&Ew(Cl(v.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Sf().then(()=>he(v,M,ye)).then(ee=>ee&&ww(ee)).catch(ee=>me(ee,v,M))}const Lt=v=>r.go(v);let Et;const ut=new Set;return{currentRoute:c,addRoute:g,removeRoute:y,hasRoute:T,getRoutes:w,resolve:k,options:t,push:Q,replace:ae,go:Lt,back:()=>Lt(-1),forward:()=>Lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Xn.add,isReady:le,install(v){const M=this;v.component("RouterLink",r_),v.component("RouterView",c_),v.config.globalProperties.$router=M,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Qs(c)}),ss&&!Et&&c.value===en&&(Et=!0,Q(r.location).catch(he=>{}));const N={};for(const he in en)N[he]=Ct(()=>c.value[he]);v.provide(ho,M),v.provide(Fc,zn(N)),v.provide(Fa,c);const U=v.unmount;ut.add(v),v.unmount=function(){ut.delete(v),ut.size<1&&(u=en,Ve&&Ve(),Ve=null,c.value=en,Et=!1,ke=!1),U()}}}}function Zn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function l_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>vs(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>vs(u,c))||r.push(c))}return[n,s,r]}function gd(){return Rt(ho)}function h_(){return Rt(Fc)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},f_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(f=64)),s.push(n[l],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(md(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new d_;const f=i<<2|a>>4;if(s.push(f),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class d_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p_=function(t){const e=md(t);return yd.encodeByteArray(e,!0)},ki=function(t){return p_(t).replace(/\./g,"")},vd=function(t){try{return yd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=()=>g_().__FIREBASE_DEFAULTS__,y_=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v_=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vd(t[1]);return e&&JSON.parse(e)},$c=()=>{try{return m_()||y_()||v_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wd=t=>{var e,n;return(n=(e=$c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},w_=t=>{const e=wd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},__=()=>{var t;return(t=$c())===null||t===void 0?void 0:t.config},_d=t=>{var e;return(e=$c())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ki(JSON.stringify(n)),ki(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function b_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function S_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C_(){const t=Xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function k_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R_="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=R_,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?N_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yt(r,a,s)}}function N_(t,e){return t.replace(D_,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const D_=/\{\$([^}]+)}/g;function O_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ri(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ul(i)&&Ul(o)){if(!Ri(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ul(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function P_(t,e){const n=new x_(t,e);return n.subscribe.bind(n)}class x_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");M_(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=sa),r.error===void 0&&(r.error=sa),r.complete===void 0&&(r.complete=sa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console!="undefined"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function M_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){return t&&t._delegate?t._delegate:t}class Bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new E_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F_(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:U_(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function U_(t){return t===kn?void 0:t}function F_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const $_={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},B_=ie.INFO,j_={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},H_=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=j_[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bc{constructor(e){this.name=e,this._logLevel=B_,this._logHandler=H_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const K_=(t,e)=>e.some(n=>t instanceof n);let Fl,Vl;function q_(){return Fl||(Fl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function z_(){return Vl||(Vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ed=new WeakMap,Ba=new WeakMap,Td=new WeakMap,ra=new WeakMap,jc=new WeakMap;function W_(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ed.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function G_(t){if(Ba.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ba.set(t,e)}let ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Td.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Q_(t){ja=t(ja)}function X_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ia(this),e,...n);return Td.set(s,e.sort?e.sort():[e]),dn(s)}:z_().includes(t)?function(...e){return t.apply(ia(this),e),dn(Ed.get(this))}:function(...e){return dn(t.apply(ia(this),e))}}function Y_(t){return typeof t=="function"?X_(t):(t instanceof IDBTransaction&&G_(t),K_(t,q_())?new Proxy(t,ja):t)}function dn(t){if(t instanceof IDBRequest)return W_(t);if(ra.has(t))return ra.get(t);const e=Y_(t);return e!==t&&(ra.set(t,e),jc.set(e,t)),e}const ia=t=>jc.get(t);function J_(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}){const o=indexedDB.open(t,e),a=dn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(dn(o.result),c.oldVersion,c.newVersion,dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Z_=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],oa=new Map;function $l(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=eE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Z_.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return oa.set(e,i),i}Q_(t=>zu(Go({},t),{get:(e,n,s)=>$l(e,n)||t.get(e,n,s),has:(e,n)=>!!$l(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ha="@firebase/app",Bl="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Bc("@firebase/app"),sE="@firebase/app-compat",rE="@firebase/analytics-compat",iE="@firebase/analytics",oE="@firebase/app-check-compat",aE="@firebase/app-check",cE="@firebase/auth",uE="@firebase/auth-compat",lE="@firebase/database",hE="@firebase/database-compat",fE="@firebase/functions",dE="@firebase/functions-compat",pE="@firebase/installations",gE="@firebase/installations-compat",mE="@firebase/messaging",yE="@firebase/messaging-compat",vE="@firebase/performance",wE="@firebase/performance-compat",_E="@firebase/remote-config",EE="@firebase/remote-config-compat",TE="@firebase/storage",IE="@firebase/storage-compat",bE="@firebase/firestore",SE="@firebase/firestore-compat",CE="firebase",AE="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="[DEFAULT]",kE={[Ha]:"fire-core",[sE]:"fire-core-compat",[iE]:"fire-analytics",[rE]:"fire-analytics-compat",[aE]:"fire-app-check",[oE]:"fire-app-check-compat",[cE]:"fire-auth",[uE]:"fire-auth-compat",[lE]:"fire-rtdb",[hE]:"fire-rtdb-compat",[fE]:"fire-fn",[dE]:"fire-fn-compat",[pE]:"fire-iid",[gE]:"fire-iid-compat",[mE]:"fire-fcm",[yE]:"fire-fcm-compat",[vE]:"fire-perf",[wE]:"fire-perf-compat",[_E]:"fire-rc",[EE]:"fire-rc-compat",[TE]:"fire-gcs",[IE]:"fire-gcs-compat",[bE]:"fire-fst",[SE]:"fire-fst-compat","fire-js":"fire-js",[CE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Map,qa=new Map;function RE(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(qa.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of Ni.values())RE(n,t);return!0}function Hc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pn=new Rr("app","Firebase",NE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=AE;function po(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ka,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw pn.create("bad-app-name",{appName:String(r)});if(n||(n=__()),!n)throw pn.create("no-options");const i=Ni.get(r);if(i){if(Ri(n,i.options)&&Ri(s,i.config))return i;throw pn.create("duplicate-app",{appName:r})}const o=new V_(r);for(const c of qa.values())o.addComponent(c);const a=new DE(n,s,o);return Ni.set(r,a),a}function Id(t=Ka){const e=Ni.get(t);if(!e&&t===Ka)return po();if(!e)throw pn.create("no-app",{appName:t});return e}function gn(t,e,n){var s;let r=(s=kE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}_s(new Bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="firebase-heartbeat-database",PE=1,gr="firebase-heartbeat-store";let aa=null;function bd(){return aa||(aa=J_(OE,PE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gr)}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),aa}async function xE(t){try{return(await bd()).transaction(gr).objectStore(gr).get(Sd(t))}catch(e){if(e instanceof Yt)jn.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function jl(t,e){try{const s=(await bd()).transaction(gr,"readwrite");return await s.objectStore(gr).put(e,Sd(t)),s.done}catch(n){if(n instanceof Yt)jn.warn(n.message);else{const s=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(s.message)}}}function Sd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=1024,LE=30*24*60*60*1e3;class UE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Hl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=LE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hl(),{heartbeatsToSend:n,unsentEntries:s}=FE(this._heartbeatsCache.heartbeats),r=ki(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hl(){return new Date().toISOString().substring(0,10)}function FE(t,e=ME){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Kl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Kl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?k_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return jl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kl(t){return ki(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(t){_s(new Bn("platform-logger",e=>new tE(e),"PRIVATE")),_s(new Bn("heartbeat",e=>new UE(e),"PRIVATE")),gn(Ha,Bl,t),gn(Ha,Bl,"esm2017"),gn("fire-js","")}$E("");var BE="firebase",jE="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(BE,jE,"app");const Kc={firebase:{apiKey:"AIzaSyD33EC_5X7ziYQ2GXxQSuTm4RQ-T7qcQIw",authDomain:"frontend-markdown.firebaseapp.com",projectId:"frontend-markdown",storageBucket:"frontend-markdown.appspot.com",messagingSenderId:"329832912291",appId:"1:329832912291:web:20e8e0773c1e01a1913616"}};function qc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Cd(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HE=Cd,Ad=new Rr("auth","Firebase",Cd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new Bc("@firebase/auth");function pi(t,...e){ql.logLevel<=ie.ERROR&&ql.error(`Auth (${Dr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw zc(t,...e)}function Nt(t,...e){return zc(t,...e)}function KE(t,e,n){const s=Object.assign(Object.assign({},HE()),{[e]:n});return new Rr("auth","Firebase",s).create(e,{appName:t.name})}function zc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ad.create(t,...e)}function H(t,e,...n){if(!t)throw zc(e,...n)}function Ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pi(e),new Error(e)}function qt(t,e){t||Ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map;function Vt(t){qt(t instanceof Function,"Expected a class definition");let e=zl.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zl.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e){const n=Hc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ri(i,e!=null?e:{}))return r;Kt(r,"already-initialized")}return n.initialize({options:e})}function zE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WE(){return Wl()==="http:"||Wl()==="https:"}function Wl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WE()||b_()||"connection"in navigator)?navigator.onLine:!0}function QE(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=I_()||S_()}get(){return GE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Or(3e4,6e4);function Rd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function go(t,e,n,s,r={}){return Nd(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Nr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),kd.fetch()(Od(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nd(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},XE),e);try{const r=new JE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ti(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ti(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ti(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ti(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw KE(t,l,u);Kt(t,l)}}catch(r){if(r instanceof Yt)throw r;Kt(t,"internal-error",{message:String(r)})}}async function Dd(t,e,n,s,r={}){const i=await go(t,e,n,s,r);return"mfaPendingCredential"in i&&Kt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Od(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Wc(t.config,r):`${t.config.apiScheme}://${r}`}class JE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Nt(this.auth,"network-request-failed")),YE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ti(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Nt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e){return go(t,"POST","/v1/accounts:delete",e)}async function e0(t,e){return go(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t0(t,e=!1){const n=gt(t),s=await n.getIdToken(e),r=Gc(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:nr(ca(r.auth_time)),issuedAtTime:nr(ca(r.iat)),expirationTime:nr(ca(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ca(t){return Number(t)*1e3}function Gc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=vd(n);return r?JSON.parse(r):(pi("Failed to decode base64 JWT payload"),null)}catch(r){return pi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function n0(t){const e=Gc(t);return H(e,"internal-error"),H(typeof e.exp!="undefined","internal-error"),H(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&s0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function s0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t){var e;const n=t.auth,s=await t.getIdToken(),r=await mr(t,e0(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?a0(i.providerUserInfo):[],a=o0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pd(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function i0(t){const e=gt(t);await Di(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function o0(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function a0(t){return t.map(e=>{var{providerId:n}=e,s=qc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c0(t,e){const n=await Nd(t,{},async()=>{const s=Nr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Od(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kd.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken!="undefined","internal-error"),H(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):n0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await c0(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new yr;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yr,this.toJSON())}_performRefresh(){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t,e){H(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Un{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mr(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t0(this,e)}reload(){return i0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Un(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Di(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mr(this,ZE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:W,emailVerified:Q,isAnonymous:ae,providerData:Ie,stsTokenManager:Ae}=n;H(W&&Ae,e,"internal-error");const Z=yr.fromJSON(this.name,Ae);H(typeof W=="string",e,"internal-error"),nn(h,e.name),nn(f,e.name),H(typeof Q=="boolean",e,"internal-error"),H(typeof ae=="boolean",e,"internal-error"),nn(g,e.name),nn(y,e.name),nn(w,e.name),nn(T,e.name),nn(k,e.name),nn(O,e.name);const ue=new Un({uid:W,auth:e,email:f,emailVerified:Q,displayName:h,isAnonymous:ae,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:Z,createdAt:k,lastLoginAt:O});return Ie&&Array.isArray(Ie)&&(ue.providerData=Ie.map(we=>Object.assign({},we))),T&&(ue._redirectEventId=T),ue}static async _fromIdTokenResponse(e,n,s=!1){const r=new yr;r.updateFromServerResponse(n);const i=new Un({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Di(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xd.type="NONE";const Gl=xd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=gi(this.userKey,r.apiKey,i),this.fullPersistenceKey=gi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Un._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fs(Vt(Gl),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Vt(Gl);const o=gi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Un._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ud(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vd(e))return"Blackberry";if($d(e))return"Webos";if(Qc(e))return"Safari";if((e.includes("chrome/")||Ld(e))&&!e.includes("edge/"))return"Chrome";if(Fd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Md(t=Xe()){return/firefox\//i.test(t)}function Qc(t=Xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ld(t=Xe()){return/crios\//i.test(t)}function Ud(t=Xe()){return/iemobile/i.test(t)}function Fd(t=Xe()){return/android/i.test(t)}function Vd(t=Xe()){return/blackberry/i.test(t)}function $d(t=Xe()){return/webos/i.test(t)}function mo(t=Xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function u0(t=Xe()){var e;return mo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l0(){return C_()&&document.documentMode===10}function Bd(t=Xe()){return mo(t)||Fd(t)||$d(t)||Vd(t)||/windows phone/i.test(t)||Ud(t)}function h0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e=[]){let n;switch(t){case"Browser":n=Ql(Xe());break;case"Worker":n=`${Ql(Xe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xl(this),this.idTokenSubscription=new Xl(this),this.beforeStateQueue=new f0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ad,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Di(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?gt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return H(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function yo(t){return gt(t)}class Xl{constructor(e){this.auth=e,this.observer=null,this.addObserver=P_(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function p0(t,e,n){const s=yo(t);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Hd(e),{host:o,port:a}=g0(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||m0()}function Hd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g0(t){const e=Hd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Yl(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Yl(o)}}}function Yl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ft("not implemented")}_getIdTokenResponse(e){return Ft("not implemented")}_linkToIdToken(e,n){return Ft("not implemented")}_getReauthenticationResolver(e){return Ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Dd(t,"POST","/v1/accounts:signInWithIdp",Rd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="http://localhost";class Hn extends Kd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=qc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Hn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends Pr{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.FACEBOOK_SIGN_IN_METHOD="facebook.com";an.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Pr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return cn.credential(n,s)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Pr{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Pr{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(t,e){return Dd(t,"POST","/v1/accounts:signUp",Rd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Un._fromIdTokenResponse(e,s,r),o=Jl(s);return new wn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Jl(s);return new wn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Jl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t){var e;const n=yo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await v0(n,{returnSecureToken:!0}),r=await wn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Yt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Oi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Oi(e,n,s,r)}}function zd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oi._fromErrorAndOperation(t,i,e,s):i})}async function _0(t,e,n=!1){const s=await mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E0(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await mr(t,zd(s,r,e,t),n);H(i.idToken,s,"internal-error");const o=Gc(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(t.uid===a,s,"user-mismatch"),wn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e,n=!1){const s="signIn",r=await zd(t,s,e),i=await wn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function I0(t,e,n,s){return gt(t).onIdTokenChanged(e,n,s)}function b0(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}const Pi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pi,"1"),this.storage.removeItem(Pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(){const t=Xe();return Qc(t)||mo(t)}const C0=1e3,A0=10;class Gd extends Wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=S0()&&h0(),this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);l0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,A0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},C0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gd.type="LOCAL";const k0=Gd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd extends Wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qd.type="SESSION";const Xd=Qd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await R0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Xc("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return window}function D0(t){Dt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(){return typeof Dt().WorkerGlobalScope!="undefined"&&typeof Dt().importScripts=="function"}async function O0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return Yd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="firebaseLocalStorageDb",M0=1,xi="firebaseLocalStorage",Zd="fbase_key";class xr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wo(t,e){return t.transaction([xi],e?"readwrite":"readonly").objectStore(xi)}function L0(){const t=indexedDB.deleteDatabase(Jd);return new xr(t).toPromise()}function Wa(){const t=indexedDB.open(Jd,M0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(xi,{keyPath:Zd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(xi)?e(s):(s.close(),await L0(),e(await Wa()))})})}async function Zl(t,e,n){const s=wo(t,!0).put({[Zd]:e,value:n});return new xr(s).toPromise()}async function U0(t,e){const n=wo(t,!1).get(e),s=await new xr(n).toPromise();return s===void 0?null:s.value}function eh(t,e){const n=wo(t,!0).delete(e);return new xr(n).toPromise()}const F0=800,V0=3;class ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>V0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await O0(),!this.activeServiceWorker)return;this.sender=new N0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wa();return await Zl(e,Pi,"1"),await eh(e,Pi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Zl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>U0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>eh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=wo(r,!1).getAll();return new xr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),F0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ep.type="LOCAL";const $0=ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function j0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",B0().appendChild(s)})}function H0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Or(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(t,e){return e?Vt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc extends Kd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function q0(t){return T0(t.auth,new Yc(t),t.bypassAuthState)}function z0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),E0(n,new Yc(t),t.bypassAuthState)}async function W0(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),_0(n,new Yc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,n,s,r,i){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q0;case"linkViaPopup":case"linkViaRedirect":return W0;case"reauthViaPopup":case"reauthViaRedirect":return z0;default:Kt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=new Or(2e3,1e4);class os extends tp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,os.currentPopupAction&&os.currentPopupAction.cancel(),os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Xc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,G0.get())};e()}}os.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="pendingRedirect",mi=new Map;class X0 extends tp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=mi.get(this.auth._key());if(!e){try{const s=await Y0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}mi.set(this.auth._key(),e)}return this.bypassAuthState||mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Y0(t,e){const n=eT(e),s=Z0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function J0(t,e){mi.set(t._key(),e)}function Z0(t){return Vt(t._redirectPersistence)}function eT(t){return gi(Q0,t.config.apiKey,t.name)}async function tT(t,e,n=!1){const s=yo(t),r=K0(s,e),o=await new X0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=10*60*1e3;class sT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!np(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nT&&this.cachedEventUids.clear(),this.cachedEventUids.has(th(e))}saveEventToCache(e){this.cachedEventUids.add(th(e)),this.lastProcessedEventTime=Date.now()}}function th(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function np({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return np(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(t,e={}){return go(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aT=/^https?/;async function cT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iT(t);for(const n of e)try{if(uT(n))return}catch{}Kt(t,"unauthorized-domain")}function uT(t){const e=za(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aT.test(n))return!1;if(oT.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=new Or(3e4,6e4);function nh(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hT(t){return new Promise((e,n)=>{var s,r,i;function o(){nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nh(),n(Nt(t,"network-request-failed"))},timeout:lT.get()})}if(!((r=(s=Dt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Dt().gapi)===null||i===void 0)&&i.load)o();else{const a=H0("iframefcb");return Dt()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},j0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw yi=null,e})}let yi=null;function fT(t){return yi=yi||hT(t),yi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=new Or(5e3,15e3),pT="__/auth/iframe",gT="emulator/auth/iframe",mT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vT(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wc(e,gT):`https://${t.config.authDomain}/${pT}`,s={apiKey:e.apiKey,appName:t.name,v:Dr},r=yT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Nr(s).slice(1)}`}async function wT(t){const e=await fT(t),n=Dt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:vT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=Dt().setTimeout(()=>{i(o)},dT.get());function c(){Dt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,TT=600,IT="_blank",bT="http://localhost";class sh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ST(t,e,n,s=ET,r=TT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},_T),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Xe().toLowerCase();n&&(a=Ld(u)?IT:n),Md(u)&&(e=e||bT,c.scrollbars="yes");const l=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(u0(u)&&a!=="_self")return CT(e||"",a),new sh(null);const h=window.open(e||"",a,l);H(h,t,"popup-blocked");try{h.focus()}catch{}return new sh(h)}function CT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="__/auth/handler",kT="emulator/auth/handler";function rh(t,e,n,s,r,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Dr,eventId:r};if(e instanceof qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",O_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Pr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${RT(t)}?${Nr(a).slice(1)}`}function RT({config:t}){return t.emulator?Wc(t,kT):`https://${t.authDomain}/${AT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xd,this._completeRedirectFn=tT,this._overrideRedirectResult=J0}async _openPopup(e,n,s,r){var i;qt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=rh(e,n,s,za(),r);return ST(e,o,Xc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),D0(rh(e,n,s,za(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(qt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wT(e),s=new sT(e);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ua,{type:ua},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ua];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bd()||Qc()||mo()}}const DT=NT;var ih="@firebase/auth",oh="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xT(t){_s(new Bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{H(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),H(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jd(t)},l=new d0(a,c,u);return zE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),_s(new Bn("auth-internal",e=>{const n=yo(e.getProvider("auth").getImmediate());return(s=>new OT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(ih,oh,PT(t)),gn(ih,oh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=5*60,LT=_d("authIdTokenMaxAge")||MT;let ah=null;const UT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>LT)return;const r=n==null?void 0:n.token;ah!==r&&(ah=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function sp(t=Id()){const e=Hc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qE(t,{popupRedirectResolver:DT,persistence:[$0,k0,Xd]}),s=_d("authTokenSyncURL");if(s){const i=UT(s);b0(n,i,()=>i(n.currentUser)),I0(n,o=>i(o))}const r=wd("auth");return r&&p0(n,`http://${r}`),n}xT("Browser");const FT=pt("h1",null,"I am the home page",-1),VT=pt("h5",null,"You should sign in here",-1),$T={name:"Home",setup(t){const e=po(Kc.firebase),n=sp(e),s=gd();async function r(){await w0(n),s.push("/dashboard")}return(i,o)=>(hs(),Zs(tt,null,[FT,VT,pt("button",{onClick:r},"Sign In")],64))}};var BT=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},x,Jc=Jc||{},K=BT||self;function Mi(){}function _o(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Mr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function jT(t){return Object.prototype.hasOwnProperty.call(t,la)&&t[la]||(t[la]=++HT)}var la="closure_uid_"+(1e9*Math.random()>>>0),HT=0;function KT(t,e,n){return t.call.apply(t.bind,arguments)}function qT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=KT:We=qT,We.apply(null,arguments)}function ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function In(){this.s=this.s,this.o=this.o}var zT=0;In.prototype.s=!1;In.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zT!=0)&&jT(this)};In.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ch(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(_o(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var WT=function(){if(!K.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{K.addEventListener("test",Mi,e),K.removeEventListener("test",Mi,e)}catch{}return t}();function Li(t){return/^[\s\xa0]*$/.test(t)}var uh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ha(t,e){return t<e?-1:t>e?1:0}function Eo(){var t=K.navigator;return t&&(t=t.userAgent)?t:""}function At(t){return Eo().indexOf(t)!=-1}function eu(t){return eu[" "](t),t}eu[" "]=Mi;function GT(t){var e=YT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var QT=At("Opera"),Es=At("Trident")||At("MSIE"),ip=At("Edge"),Ga=ip||Es,op=At("Gecko")&&!(Eo().toLowerCase().indexOf("webkit")!=-1&&!At("Edge"))&&!(At("Trident")||At("MSIE"))&&!At("Edge"),XT=Eo().toLowerCase().indexOf("webkit")!=-1&&!At("Edge");function ap(){var t=K.document;return t?t.documentMode:void 0}var Ui;e:{var fa="",da=function(){var t=Eo();if(op)return/rv:([^\);]+)(\)|;)/.exec(t);if(ip)return/Edge\/([\d\.]+)/.exec(t);if(Es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(XT)return/WebKit\/(\S+)/.exec(t);if(QT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(da&&(fa=da?da[1]:""),Es){var pa=ap();if(pa!=null&&pa>parseFloat(fa)){Ui=String(pa);break e}}Ui=fa}var YT={};function JT(){return GT(function(){let t=0;const e=uh(String(Ui)).split("."),n=uh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=ha(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||ha(r[2].length==0,i[2].length==0)||ha(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Qa;if(K.document&&Es){var lh=ap();Qa=lh||parseInt(Ui,10)||void 0}else Qa=void 0;var ZT=Qa;function vr(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(op){e:{try{eu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:eI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&vr.X.h.call(this)}}He(vr,Ge);var eI={2:"touch",3:"pen",4:"mouse"};vr.prototype.h=function(){vr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Lr="closure_listenable_"+(1e6*Math.random()|0),tI=0;function nI(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++tI,this.ba=this.ea=!1}function To(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function tu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function cp(t){const e={};for(const n in t)e[n]=t[n];return e}const hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function up(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<hh.length;i++)n=hh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Io(t){this.src=t,this.g={},this.h=0}Io.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Ya(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new nI(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Xa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=rp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(To(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ya(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var nu="closure_lm_"+(1e6*Math.random()|0),ga={};function lp(t,e,n,s,r){if(s&&s.once)return fp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)lp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[Lr]?t.N(e,n,Mr(s)?!!s.capture:!!s,r):hp(t,e,n,!1,s,r)}function hp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Mr(r)?!!r.capture:!!r,a=ru(t);if(a||(t[nu]=a=new Io(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=sI(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)WT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(pp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sI(){function t(n){return e.call(t.src,t.listener,n)}const e=rI;return t}function fp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)fp(t,e[i],n,s,r);return null}return n=iu(n),t&&t[Lr]?t.O(e,n,Mr(s)?!!s.capture:!!s,r):hp(t,e,n,!0,s,r)}function dp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)dp(t,e[i],n,s,r);else s=Mr(s)?!!s.capture:!!s,n=iu(n),t&&t[Lr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Ya(i,n,s,r),-1<n&&(To(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ru(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ya(e,n,s,r)),(n=-1<t?e[t]:null)&&su(n))}function su(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Lr])Xa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(pp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=ru(e))?(Xa(n,t),n.h==0&&(n.src=null,e[nu]=null)):To(t)}}}function pp(t){return t in ga?ga[t]:ga[t]="on"+t}function rI(t,e){if(t.ba)t=!0;else{e=new vr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&su(t),t=n.call(s,e)}return t}function ru(t){return t=t[nu],t instanceof Io?t:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function iu(t){return typeof t=="function"?t:(t[ma]||(t[ma]=function(e){return t.handleEvent(e)}),t[ma])}function Ue(){In.call(this),this.i=new Io(this),this.P=this,this.I=null}He(Ue,In);Ue.prototype[Lr]=!0;Ue.prototype.removeEventListener=function(t,e,n,s){dp(this,t,e,n,s)};function je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var r=e;e=new Ge(s,t),up(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=si(o,s,!0,e)&&r}if(o=e.g=t,r=si(o,s,!0,e)&&r,r=si(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=si(o,s,!1,e)&&r}Ue.prototype.M=function(){if(Ue.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)To(n[s]);delete t.g[e],t.h--}}this.I=null};Ue.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ue.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function si(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Xa(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var ou=K.JSON.stringify;function iI(){var t=yp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class oI{constructor(){this.h=this.g=null}add(e,n){const s=gp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var gp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new aI,t=>t.reset());class aI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function cI(t){K.setTimeout(()=>{throw t},0)}function mp(t,e){Ja||uI(),Za||(Ja(),Za=!0),yp.add(t,e)}var Ja;function uI(){var t=K.Promise.resolve(void 0);Ja=function(){t.then(lI)}}var Za=!1,yp=new oI;function lI(){for(var t;t=iI();){try{t.h.call(t.g)}catch(n){cI(n)}var e=gp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Za=!1}function bo(t,e){Ue.call(this),this.h=t||1,this.g=e||K,this.j=We(this.lb,this),this.l=Date.now()}He(bo,Ue);x=bo.prototype;x.ca=!1;x.R=null;x.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),je(this,"tick"),this.ca&&(au(this),this.start()))}};x.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function au(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}x.M=function(){bo.X.M.call(this),au(this),delete this.g};function cu(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:K.setTimeout(t,e||0)}function vp(t){t.g=cu(()=>{t.g=null,t.i&&(t.i=!1,vp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class hI extends In{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vp(this)}M(){super.M(),this.g&&(K.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(t){In.call(this),this.h=t,this.g={}}He(wr,In);var fh=[];function wp(t,e,n,s){Array.isArray(n)||(n&&(fh[0]=n.toString()),n=fh);for(var r=0;r<n.length;r++){var i=lp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function _p(t){tu(t.g,function(e,n){this.g.hasOwnProperty(n)&&su(e)},t),t.g={}}wr.prototype.M=function(){wr.X.M.call(this),_p(this)};wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function So(){this.g=!0}So.prototype.Aa=function(){this.g=!1};function fI(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function dI(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function as(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+gI(t,n)+(s?" "+s:"")})}function pI(t,e){t.info(function(){return"TIMEOUT: "+e})}So.prototype.info=function(){};function gI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ou(n)}catch{return e}}var Wn={},dh=null;function Co(){return dh=dh||new Ue}Wn.Pa="serverreachability";function Ep(t){Ge.call(this,Wn.Pa,t)}He(Ep,Ge);function _r(t){const e=Co();je(e,new Ep(e))}Wn.STAT_EVENT="statevent";function Tp(t,e){Ge.call(this,Wn.STAT_EVENT,t),this.stat=e}He(Tp,Ge);function Ze(t){const e=Co();je(e,new Tp(e,t))}Wn.Qa="timingevent";function Ip(t,e){Ge.call(this,Wn.Qa,t),this.size=e}He(Ip,Ge);function Ur(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return K.setTimeout(function(){t()},e)}var Ao={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},bp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function uu(){}uu.prototype.h=null;function ph(t){return t.h||(t.h=t.i())}function Sp(){}var Fr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function lu(){Ge.call(this,"d")}He(lu,Ge);function hu(){Ge.call(this,"c")}He(hu,Ge);var ec;function ko(){}He(ko,uu);ko.prototype.g=function(){return new XMLHttpRequest};ko.prototype.i=function(){return{}};ec=new ko;function Vr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new wr(this),this.O=mI,t=Ga?125:void 0,this.T=new bo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Cp}function Cp(){this.i=null,this.g="",this.h=!1}var mI=45e3,tc={},Fi={};x=Vr.prototype;x.setTimeout=function(t){this.O=t};function nc(t,e,n){t.K=1,t.v=No(zt(e)),t.s=n,t.P=!0,Ap(t,null)}function Ap(t,e){t.F=Date.now(),$r(t),t.A=zt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Mp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Cp,t.g=ng(t.l,n?e:null,!t.s),0<t.N&&(t.L=new hI(We(t.La,t,t.g),t.N)),wp(t.S,t.g,"readystatechange",t.ib),e=t.H?cp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),_r(),fI(t.j,t.u,t.A,t.m,t.U,t.s)}x.ib=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.La(t)};x.La=function(t){try{if(t==this.g)e:{const l=$t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Ga||this.g&&(this.h.h||this.g.fa()||vh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?_r(3):_r(2)),Ro(this);var n=this.g.aa();this.Y=n;t:if(kp(this)){var s=vh(this.g);t="";var r=s.length,i=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){On(this),sr(this);var o="";break t}this.h.i=new K.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,dI(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Li(a)){var u=a;break t}}u=null}if(n=u)as(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,sc(this,n);else{this.i=!1,this.o=3,Ze(12),On(this),sr(this);break e}}this.P?(Rp(this,l,o),Ga&&this.i&&l==3&&(wp(this.S,this.T,"tick",this.hb),this.T.start())):(as(this.j,this.m,o,null),sc(this,o)),l==4&&On(this),this.i&&!this.I&&(l==4?Jp(this.l,this):(this.i=!1,$r(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),On(this),sr(this)}}}catch{}finally{}};function kp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Rp(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=yI(t,n),r==Fi){e==4&&(t.o=4,Ze(14),s=!1),as(t.j,t.m,null,"[Incomplete Response]");break}else if(r==tc){t.o=4,Ze(15),as(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else as(t.j,t.m,r,null),sc(t,r);kp(t)&&r!=Fi&&r!=tc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),vu(e),e.K=!0,Ze(11))):(as(t.j,t.m,n,"[Invalid Chunked Response]"),On(t),sr(t))}x.hb=function(){if(this.g){var t=$t(this.g),e=this.g.fa();this.C<e.length&&(Ro(this),Rp(this,t,e),this.i&&t!=4&&$r(this))}};function yI(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Fi:(n=Number(e.substring(n,s)),isNaN(n)?tc:(s+=1,s+n>e.length?Fi:(e=e.substr(s,n),t.C=s+n,e)))}x.cancel=function(){this.I=!0,On(this)};function $r(t){t.V=Date.now()+t.O,Np(t,t.O)}function Np(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ur(We(t.gb,t),e)}function Ro(t){t.B&&(K.clearTimeout(t.B),t.B=null)}x.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(pI(this.j,this.A),this.K!=2&&(_r(),Ze(17)),On(this),this.o=2,sr(this)):Np(this,this.V-t)};function sr(t){t.l.G==0||t.I||Jp(t.l,t)}function On(t){Ro(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,au(t.T),_p(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function sc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||rc(n.h,t))){if(!t.J&&rc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Bi(n),Po(n);else break e;yu(n),Ze(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ur(We(n.cb,n),6e3));if(1>=Fp(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Pn(n,11)}else if((t.J||n.g==t)&&Bi(n),!Li(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(fu(i,i.h),i.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Ee(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=tg(s,s.H?s.ka:null,s.V),o.J){Vp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Ro(a),$r(a)),s.g=o}else Xp(s);0<n.i.length&&xo(n)}else u[0]!="stop"&&u[0]!="close"||Pn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pn(n,7):mu(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}_r(4)}catch{}}function vI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(_o(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function wI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(_o(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Dp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(_o(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=wI(t),s=vI(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Op=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _I(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Fn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Fn){this.h=e!==void 0?e:t.h,Vi(this,t.j),this.s=t.s,this.g=t.g,$i(this,t.m),this.l=t.l,e=t.i;var n=new Er;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gh(this,n),this.o=t.o}else t&&(n=String(t).match(Op))?(this.h=!!e,Vi(this,n[1]||"",!0),this.s=qs(n[2]||""),this.g=qs(n[3]||"",!0),$i(this,n[4]),this.l=qs(n[5]||"",!0),gh(this,n[6]||"",!0),this.o=qs(n[7]||"")):(this.h=!!e,this.i=new Er(null,this.h))}Fn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zs(e,mh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(zs(e,mh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(zs(n,n.charAt(0)=="/"?II:TI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zs(n,SI)),t.join("")};function zt(t){return new Fn(t)}function Vi(t,e,n){t.j=n?qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function $i(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gh(t,e,n){e instanceof Er?(t.i=e,CI(t.i,t.h)):(n||(e=zs(e,bI)),t.i=new Er(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function No(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,EI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function EI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mh=/[#\/\?@]/g,TI=/[#\?:]/g,II=/[#\?]/g,bI=/[#\?@]/g,SI=/#/g;function Er(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function bn(t){t.g||(t.g=new Map,t.h=0,t.i&&_I(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Er.prototype;x.add=function(t,e){bn(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pp(t,e){bn(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xp(t,e){return bn(t),e=Ps(t,e),t.g.has(e)}x.forEach=function(t,e){bn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.oa=function(){bn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.W=function(t){bn(this);let e=[];if(typeof t=="string")xp(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return bn(this),this.i=null,t=Ps(this,t),xp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mp(t,e,n){Pp(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),Zc(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CI(t,e){e&&!t.j&&(bn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Pp(this,s),Mp(this,r,n))},t)),t.j=e}var AI=class{constructor(t,e){this.h=t,this.g=e}};function Lp(t){this.l=t||kI,K.PerformanceNavigationTiming?(t=K.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(K.g&&K.g.Ga&&K.g.Ga()&&K.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kI=10;function Up(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fp(t){return t.h?1:t.g?t.g.size:0}function rc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function fu(t,e){t.g?t.g.add(e):t.h=e}function Vp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Lp.prototype.cancel=function(){if(this.i=$p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $p(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Zc(t.i)}function du(){}du.prototype.stringify=function(t){return K.JSON.stringify(t,void 0)};du.prototype.parse=function(t){return K.JSON.parse(t,void 0)};function RI(){this.g=new du}function NI(t,e,n){const s=n||"";try{Dp(t,function(r,i){let o=r;Mr(r)&&(o=ou(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function DI(t,e){const n=new So;if(K.Image){const s=new Image;s.onload=ni(ri,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ni(ri,n,s,"TestLoadImage: error",!1,e),s.onabort=ni(ri,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ni(ri,n,s,"TestLoadImage: timeout",!1,e),K.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ri(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Br(t){this.l=t.ac||null,this.j=t.jb||!1}He(Br,uu);Br.prototype.g=function(){return new Do(this.l,this.j)};Br.prototype.i=function(t){return function(){return t}}({});function Do(t,e){Ue.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Do,Ue);var pu=0;x=Do.prototype;x.open=function(t,e){if(this.readyState!=pu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Tr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||K).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jr(this)),this.readyState=pu};x.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Tr(this)),this.g&&(this.readyState=3,Tr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof K.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Bp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}x.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jr(this):Tr(this),this.readyState==3&&Bp(this)}};x.Va=function(t){this.g&&(this.response=this.responseText=t,jr(this))};x.Ua=function(t){this.g&&(this.response=t,jr(this))};x.ga=function(){this.g&&jr(this)};function jr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Tr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Tr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Do.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OI=K.JSON.parse;function be(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jp,this.K=this.L=!1}He(be,Ue);var jp="",PI=/^https?$/i,xI=["POST","PUT"];x=be.prototype;x.Ka=function(t){this.L=t};x.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ec.g(),this.C=this.u?ph(this.u):ph(ec),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){yh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=K.FormData&&t instanceof K.FormData,!(0<=rp(xI,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{qp(this),0<this.B&&((this.K=MI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=cu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yh(this,i)}};function MI(t){return Es&&JT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.qa=function(){typeof Jc!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function yh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hp(t),Oo(t)}function Hp(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Oo(this))};x.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Oo(this,!0)),be.X.M.call(this)};x.Ha=function(){this.s||(this.F||this.v||this.l?Kp(this):this.fb())};x.fb=function(){Kp(this)};function Kp(t){if(t.h&&typeof Jc!="undefined"&&(!t.C[1]||$t(t)!=4||t.aa()!=2)){if(t.v&&$t(t)==4)cu(t.Ha,0,t);else if(je(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Op)[1]||null;if(!r&&K.self&&K.self.location){var i=K.self.location.protocol;r=i.substr(0,i.length-1)}s=!PI.test(r?r.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Hp(t)}}finally{Oo(t)}}}}function Oo(t,e){if(t.g){qp(t);const n=t.g,s=t.C[0]?Mi:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function qp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(K.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}x.aa=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};x.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OI(e)}};function vh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}x.Ea=function(){return this.m};x.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zp(t){let e="";return tu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=zp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function Bs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wp(t){this.Ca=0,this.i=[],this.j=new So,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Bs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Bs("baseRetryDelayMs",5e3,t),this.bb=Bs("retryDelaySeedMs",1e4,t),this.$a=Bs("forwardChannelMaxRetries",2,t),this.ta=Bs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Lp(t&&t.concurrentRequestLimit),this.Fa=new RI,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}x=Wp.prototype;x.ma=8;x.G=1;function mu(t){if(Gp(t),t.G==3){var e=t.U++,n=zt(t.F);Ee(n,"SID",t.I),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),Hr(t,n),e=new Vr(t,t.j,e,void 0),e.K=2,e.v=No(zt(n)),n=!1,K.navigator&&K.navigator.sendBeacon&&(n=K.navigator.sendBeacon(e.v.toString(),"")),!n&&K.Image&&(new Image().src=e.v,n=!0),n||(e.g=ng(e.l,null),e.g.da(e.v)),e.F=Date.now(),$r(e)}eg(t)}function Po(t){t.g&&(vu(t),t.g.cancel(),t.g=null)}function Gp(t){Po(t),t.u&&(K.clearTimeout(t.u),t.u=null),Bi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&K.clearTimeout(t.m),t.m=null)}function xo(t){Up(t.h)||t.m||(t.m=!0,mp(t.Ja,t),t.C=0)}function LI(t,e){return Fp(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ur(We(t.Ja,t,e),Zp(t,t.C)),t.C++,!0)}x.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Vr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=cp(i),up(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qp(this,r,e),n=zt(this.F),Ee(n,"RID",t),Ee(n,"CVER",22),this.D&&Ee(n,"X-HTTP-Session-Id",this.D),Hr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(zp(i)))+"&"+e:this.o&&gu(n,this.o,i)),fu(this.h,r),this.Ya&&Ee(n,"TYPE","init"),this.O?(Ee(n,"$req",e),Ee(n,"SID","null"),r.Z=!0,nc(r,n,null)):nc(r,n,e),this.G=2}}else this.G==3&&(t?wh(this,t):this.i.length==0||Up(this.h)||wh(this))};function wh(t,e){var n;e?n=e.m:n=t.U++;const s=zt(t.F);Ee(s,"SID",t.I),Ee(s,"RID",n),Ee(s,"AID",t.T),Hr(t,s),t.o&&t.s&&gu(s,t.o,t.s),n=new Vr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Qp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),fu(t.h,n),nc(n,s,e)}function Hr(t,e){t.ia&&tu(t.ia,function(n,s){Ee(e,s,n)}),t.l&&Dp({},function(n,s){Ee(e,s,n)})}function Qp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?We(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{NI(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Xp(t){t.g||t.u||(t.Z=1,mp(t.Ia,t),t.A=0)}function yu(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ur(We(t.Ia,t),Zp(t,t.A)),t.A++,!0)}x.Ia=function(){if(this.u=null,Yp(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ur(We(this.eb,this),t)}};x.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ze(10),Po(this),Yp(this))};function vu(t){t.B!=null&&(K.clearTimeout(t.B),t.B=null)}function Yp(t){t.g=new Vr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=zt(t.sa);Ee(e,"RID","rpc"),Ee(e,"SID",t.I),Ee(e,"CI",t.L?"0":"1"),Ee(e,"AID",t.T),Ee(e,"TYPE","xmlhttp"),Hr(t,e),t.o&&t.s&&gu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=No(zt(e)),n.s=null,n.P=!0,Ap(n,t)}x.cb=function(){this.v!=null&&(this.v=null,Po(this),yu(this),Ze(19))};function Bi(t){t.v!=null&&(K.clearTimeout(t.v),t.v=null)}function Jp(t,e){var n=null;if(t.g==e){Bi(t),vu(t),t.g=null;var s=2}else if(rc(t.h,e))n=e.D,Vp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=Co(),je(s,new Ip(s,n)),xo(t)}else Xp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&LI(t,e)||s==2&&yu(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Pn(t,5);break;case 4:Pn(t,10);break;case 3:Pn(t,6);break;default:Pn(t,2)}}}function Zp(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Pn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=We(t.kb,t);n||(n=new Fn("//www.google.com/images/cleardot.gif"),K.location&&K.location.protocol=="http"||Vi(n,"https"),No(n)),DI(n.toString(),s)}else Ze(2);t.G=0,t.l&&t.l.va(e),eg(t),Gp(t)}x.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function eg(t){if(t.G=0,t.la=[],t.l){const e=$p(t.h);(e.length!=0||t.i.length!=0)&&(ch(t.la,e),ch(t.la,t.i),t.h.i.length=0,Zc(t.i),t.i.length=0),t.l.ua()}}function tg(t,e,n){var s=n instanceof Fn?zt(n):new Fn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),$i(s,s.m);else{var r=K.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Fn(null,void 0);s&&Vi(i,s),e&&(i.g=e),r&&$i(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ma),Hr(t,s),s}function ng(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new Br({jb:!0})):new be(t.ra),e.Ka(t.H),e}function sg(){}x=sg.prototype;x.xa=function(){};x.wa=function(){};x.va=function(){};x.ua=function(){};x.Ra=function(){};function ji(){if(Es&&!(10<=Number(ZT)))throw Error("Environmental error: no available transport.")}ji.prototype.g=function(t,e){return new ct(t,e)};function ct(t,e){Ue.call(this),this.g=new Wp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Li(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Li(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xs(this)}He(ct,Ue);ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=tg(t,null,t.V),xo(t)};ct.prototype.close=function(){mu(this.g)};ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ou(t),t=n);e.i.push(new AI(e.ab++,t)),e.G==3&&xo(e)};ct.prototype.M=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,ct.X.M.call(this)};function rg(t){lu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(rg,lu);function ig(){hu.call(this),this.status=1}He(ig,hu);function xs(t){this.g=t}He(xs,sg);xs.prototype.xa=function(){je(this.g,"a")};xs.prototype.wa=function(t){je(this.g,new rg(t))};xs.prototype.va=function(t){je(this.g,new ig)};xs.prototype.ua=function(){je(this.g,"b")};ji.prototype.createWebChannel=ji.prototype.g;ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;Ao.NO_ERROR=0;Ao.TIMEOUT=8;Ao.HTTP_ERROR=6;bp.COMPLETE="complete";Sp.EventType=Fr;Fr.OPEN="a";Fr.CLOSE="b";Fr.ERROR="c";Fr.MESSAGE="d";Ue.prototype.listen=Ue.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var UI=function(){return new ji},FI=function(){return Co()},ya=Ao,VI=bp,$I=Wn,_h={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},BI=Br,ii=Sp,jI=be;const Eh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ms="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Bc("@firebase/firestore");function Th(){return Kn.logLevel}function L(t,...e){if(Kn.logLevel<=ie.DEBUG){const n=e.map(wu);Kn.debug(`Firestore (${Ms}): ${t}`,...n)}}function Wt(t,...e){if(Kn.logLevel<=ie.ERROR){const n=e.map(wu);Kn.error(`Firestore (${Ms}): ${t}`,...n)}}function ic(t,...e){if(Kn.logLevel<=ie.WARN){const n=e.map(wu);Kn.warn(`Firestore (${Ms}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Wt(e),new Error(e)}function ve(t,e){t||j()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class HI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class KI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qI{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Vn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new og(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ke(e)}}class zI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ve(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class WI{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new zI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.A=n.token,new GI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=XI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ce(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Ne(0,0))}static max(){return new G(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){n===void 0?n=0:n>e.length&&j(),s===void 0?s=e.length-n:s>e.length-n&&j(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ir.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ir?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends Ir{construct(e,n,s){return new Te(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const YI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Ir{construct(e,n,s){return new ze(e,n,s)}static isValidIdentifier(e){return YI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(Te.fromString(e))}static fromName(e){return new $(Te.fromString(e).popFirst(5))}static empty(){return new $(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new Te(e.slice()))}}function JI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new _n(r,$.empty(),e)}function ZI(t){return new _n(t.readTime,t.key,-1)}class _n{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new _n(G.min(),$.empty(),-1)}static max(){return new _n(G.max(),$.empty(),-1)}}function eb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==tb)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,s)=>{n(e)})}static reject(e){return new b((n,s)=>{s(e)})}static waitFor(e){return new b((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=b.resolve(!1);for(const s of e)n=n.next(r=>r?b.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new b((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new b((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qr(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}_u.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class br{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return t==null}function Hi(t){return t===0&&1/t==-1/0}function rb(t){return typeof t=="number"&&Number.isInteger(t)&&!Hi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new ib("Invalid base64 string: "+r):r}}(e);return new Ye(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ye(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function En(t){if(ve(!!t),typeof t=="string"){let e=0;const n=ob.exec(t);if(ve(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Is(t){return typeof t=="string"?Ye.fromBase64String(t):Ye.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lg(t){const e=t.mapValue.fields.__previous_value__;return ug(e)?lg(e):e}function Sr(t){const e=En(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ug(t)?4:ab(t)?9007199254740991:10:j()}function xt(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sr(t).isEqual(Sr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=En(s.timestampValue),o=En(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Is(s.bytesValue).isEqual(Is(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ce(s.geoPointValue.latitude)===Ce(r.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ce(s.integerValue)===Ce(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ce(s.doubleValue),o=Ce(r.doubleValue);return i===o?Hi(i)===Hi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ih(i)!==Ih(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!xt(i[a],o[a])))return!1;return!0}(t,e);default:return j()}}function Cr(t,e){return(t.values||[]).find(n=>xt(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=qn(t),s=qn(e);if(n!==s)return ce(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ce(r.integerValue||r.doubleValue),a=Ce(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return bh(t.timestampValue,e.timestampValue);case 4:return bh(Sr(t),Sr(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Is(r),a=Is(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ce(o[c],a[c]);if(u!==0)return u}return ce(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ce(Ce(r.latitude),Ce(i.latitude));return o!==0?o:ce(Ce(r.longitude),Ce(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=bs(o[c],a[c]);if(u)return u}return ce(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===oi.mapValue&&i===oi.mapValue)return 0;if(r===oi.mapValue)return 1;if(i===oi.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ce(a[l],u[l]);if(h!==0)return h;const f=bs(o[a[l]],c[u[l]]);if(f!==0)return f}return ce(a.length,u.length)}(t.mapValue,e.mapValue);default:throw j()}}function bh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=En(t),s=En(e),r=ce(n.seconds,s.seconds);return r!==0?r:ce(n.nanos,s.nanos)}function Ss(t){return oc(t)}function oc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=En(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=oc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${oc(s.fields[a])}`;return i+"}"}(t.mapValue):j();var e,n}function ac(t){return!!t&&"integerValue"in t}function Eu(t){return!!t&&"arrayValue"in t}function Sh(t){return!!t&&"nullValue"in t}function Ch(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vi(t){return!!t&&"mapValue"in t}function rr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ls(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=rr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ab(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.position=e,this.inclusive=n}}function Ah(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=bs(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function kh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{}class Re extends hg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new ub(e,n,s):n==="array-contains"?new fb(e,s):n==="in"?new db(e,s):n==="not-in"?new pb(e,s):n==="array-contains-any"?new gb(e,s):new Re(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new lb(e,s):new hb(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(bs(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends hg{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Mt(e,n)}matches(e){return fg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function fg(t){return t.op==="and"}function dg(t){return cb(t)&&fg(t)}function cb(t){for(const e of t.filters)if(e instanceof Mt)return!1;return!0}function cc(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Ss(t.value);if(dg(t))return t.filters.map(e=>cc(e)).join(",");{const e=t.filters.map(n=>cc(n)).join(",");return`${t.op}(${e})`}}function pg(t,e){return t instanceof Re?function(n,s){return s instanceof Re&&n.op===s.op&&n.field.isEqual(s.field)&&xt(n.value,s.value)}(t,e):t instanceof Mt?function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&pg(i,s.filters[o]),!0):!1}(t,e):void j()}function gg(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Ss(e.value)}`}(t):t instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(gg).join(" ,")+"}"}(t):"Filter"}class ub extends Re{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class lb extends Re{constructor(e,n){super(e,"in",n),this.keys=mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hb extends Re{constructor(e,n){super(e,"not-in",n),this.keys=mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class fb extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Eu(n)&&Cr(n.arrayValue,this.value)}}class db extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cr(this.value.arrayValue,n)}}class pb extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cr(this.value.arrayValue,n)}}class gb extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Eu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Cr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,n="asc"){this.field=e,this.dir=n}}function mb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ai(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ai(this.root,e,this.comparator,!1)}getReverseIterator(){return new ai(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ai(this.root,e,this.comparator,!0)}}class ai{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s!=null?s:$e.RED,this.left=r!=null?r:$e.EMPTY,this.right=i!=null?i:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new $e(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(t,e,n,s,r){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rh(this.data.getIterator())}getIteratorFrom(e){return new Rh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Rh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new _t([])}unionWith(e){let n=new De(ze.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!vi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(n)}setAll(e){let n=ze.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=rr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());vi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];vi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Ls(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ht(rr(this.value))}}function yg(t){const e=[];return Ls(t.fields,(n,s)=>{const r=new ze([n]);if(vi(s)){const i=yg(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qe(e,0,G.min(),G.min(),G.min(),ht.empty(),0)}static newFoundDocument(e,n,s,r){return new qe(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new qe(e,2,n,G.min(),G.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,G.min(),G.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function Nh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new yb(t,e,n,s,r,i,o)}function Tu(t){const e=X(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>cc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Mo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ss(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ss(s)).join(",")),e._t=n}return e._t}function Iu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kh(t.startAt,e.startAt)&&kh(t.endAt,e.endAt)}function uc(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function vb(t,e,n,s,r,i,o,a){return new Lo(t,e,n,s,r,i,o,a)}function bu(t){return new Lo(t)}function Dh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wb(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _b(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Eb(t){return t.collectionGroup!==null}function ps(t){const e=X(t);if(e.wt===null){e.wt=[];const n=_b(e),s=wb(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new ir(n)),e.wt.push(new ir(ze.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new ir(ze.keyField(),i))}}}return e.wt}function Gt(t){const e=X(t);if(!e.gt)if(e.limitType==="F")e.gt=Nh(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ps(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new ir(i.field,o))}const s=e.endAt?new Ki(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ki(e.startAt.position,e.startAt.inclusive):null;e.gt=Nh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function lc(t,e,n){return new Lo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Uo(t,e){return Iu(Gt(t),Gt(e))&&t.limitType===e.limitType}function vg(t){return`${Tu(Gt(t))}|lt:${t.limitType}`}function hc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>gg(s)).join(", ")}]`),Mo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ss(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ss(s)).join(",")),`Target(${n})`}(Gt(t))}; limitType=${t.limitType})`}function Fo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ps(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Ah(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ps(n),s)||n.endAt&&!function(r,i,o){const a=Ah(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ps(n),s))}(t,e)}function Tb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wg(t){return(e,n)=>{let s=!1;for(const r of ps(t)){const i=Ib(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Ib(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?bs(a,c):j()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return j()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function Eg(t){return{integerValue:""+t}}function bb(t,e){return rb(e)?Eg(e):_g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this._=void 0}}function Sb(t,e,n){return t instanceof qi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ar?Ig(t,e):t instanceof kr?bg(t,e):function(s,r){const i=Tg(s,r),o=Oh(i)+Oh(s.It);return ac(i)&&ac(s.It)?Eg(o):_g(s.Tt,o)}(t,e)}function Cb(t,e,n){return t instanceof Ar?Ig(t,e):t instanceof kr?bg(t,e):n}function Tg(t,e){return t instanceof zi?ac(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class qi extends Vo{}class Ar extends Vo{constructor(e){super(),this.elements=e}}function Ig(t,e){const n=Sg(e);for(const s of t.elements)n.some(r=>xt(r,s))||n.push(s);return{arrayValue:{values:n}}}class kr extends Vo{constructor(e){super(),this.elements=e}}function bg(t,e){let n=Sg(e);for(const s of t.elements)n=n.filter(r=>!xt(r,s));return{arrayValue:{values:n}}}class zi extends Vo{constructor(e,n){super(),this.Tt=e,this.It=n}}function Oh(t){return Ce(t.integerValue||t.doubleValue)}function Sg(t){return Eu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ab(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ar&&s instanceof Ar||n instanceof kr&&s instanceof kr?Ts(n.elements,s.elements,xt):n instanceof zi&&s instanceof zi?xt(n.It,s.It):n instanceof qi&&s instanceof qi}(t.transform,e.transform)}class kb{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $o{}function Cg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new kg(t.key,jt.none()):new zr(t.key,t.data,jt.none());{const n=t.data,s=ht.empty();let r=new De(ze.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Gn(t.key,s,new _t(r.toArray()),jt.none())}}function Rb(t,e,n){t instanceof zr?function(s,r,i){const o=s.value.clone(),a=xh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Gn?function(s,r,i){if(!wi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=xh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Ag(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function or(t,e,n,s){return t instanceof zr?function(r,i,o,a){if(!wi(r.precondition,i))return o;const c=r.value.clone(),u=Mh(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Gn?function(r,i,o,a){if(!wi(r.precondition,i))return o;const c=Mh(r.fieldTransforms,a,i),u=i.data;return u.setAll(Ag(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return wi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Nb(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Tg(s.transform,r||null);i!=null&&(n===null&&(n=ht.empty()),n.set(s.field,i))}return n||null}function Ph(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ts(n,s,(r,i)=>Ab(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zr extends $o{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Gn extends $o{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function xh(t,e,n){const s=new Map;ve(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Cb(o,a,n[r]))}return s}function Mh(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Sb(i,o,e))}return s}class kg extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Db extends $o{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,ne;function Pb(t){switch(t){default:return j();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Rg(t){if(t===void 0)return Wt("GRPC error has no .code"),S.UNKNOWN;switch(t){case Se.OK:return S.OK;case Se.CANCELLED:return S.CANCELLED;case Se.UNKNOWN:return S.UNKNOWN;case Se.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Se.INTERNAL:return S.INTERNAL;case Se.UNAVAILABLE:return S.UNAVAILABLE;case Se.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Se.NOT_FOUND:return S.NOT_FOUND;case Se.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Se.ABORTED:return S.ABORTED;case Se.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Se.DATA_LOSS:return S.DATA_LOSS;default:return j()}}(ne=Se||(Se={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ls(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new Pe($.comparator);function Qt(){return xb}const Ng=new Pe($.comparator);function Ws(...t){let e=Ng;for(const n of t)e=e.insert(n.key,n);return e}function Dg(t){let e=Ng;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function xn(){return ar()}function Og(){return ar()}function ar(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mb=new Pe($.comparator),Lb=new De($.comparator);function te(...t){let e=Lb;for(const n of t)e=e.add(n);return e}const Ub=new De(ce);function Pg(){return Ub}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Wr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Bo(G.min(),r,Pg(),Qt(),te())}}class Wr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Wr(s,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class xg{constructor(e,n){this.targetId=e,this.Rt=n}}class Mg{constructor(e,n,s=Ye.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Lh{constructor(){this.bt=0,this.vt=Fh(),this.Pt=Ye.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=te(),n=te(),s=te();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:j()}}),new Wr(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=Fh()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class Fb{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Qt(),this.Kt=Uh(),this.Gt=new De(ce)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:j()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(uc(i))if(s===0){const o=new $(i.path);this.zt(n,o,qe.newNoDocument(o,G.min()))}else ve(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&uc(a.target)){const c=new $(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,qe.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=te();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Bo(e,n,this.Gt,this.Ut,s);return this.Ut=Qt(),this.Kt=Uh(),this.Gt=new De(ce),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Lh,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new De(ce),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Lh),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Uh(){return new Pe($.comparator)}function Fh(){return new Pe($.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),$b=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Bb=(()=>({and:"AND",or:"OR"}))();class jb{constructor(e,n){this.databaseId=e,this.yt=n}}function Wi(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lg(t,e){return t.yt?e.toBase64():e.toUint8Array()}function Hb(t,e){return Wi(t,e.toTimestamp())}function Ot(t){return ve(!!t),G.fromTimestamp(function(e){const n=En(e);return new Ne(n.seconds,n.nanos)}(t))}function Su(t,e){return function(n){return new Te(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Ug(t){const e=Te.fromString(t);return ve(Bg(e)),e}function fc(t,e){return Su(t.databaseId,e.path)}function va(t,e){const n=Ug(e);if(n.get(1)!==t.databaseId.projectId)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(Fg(n))}function dc(t,e){return Su(t.databaseId,e)}function Kb(t){const e=Ug(t);return e.length===4?Te.emptyPath():Fg(e)}function pc(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fg(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vh(t,e,n){return{name:fc(t,e),fields:n.value.mapValue.fields}}function qb(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(ve(u===void 0||typeof u=="string"),Ye.fromBase64String(u||"")):(ve(u===void 0||u instanceof Uint8Array),Ye.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?S.UNKNOWN:Rg(c.code);return new B(u,c.message||"")}(o);n=new Mg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=va(t,s.document.name),i=Ot(s.document.updateTime),o=s.document.createTime?Ot(s.document.createTime):G.min(),a=new ht({mapValue:{fields:s.document.fields}}),c=qe.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new _i(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=va(t,s.document),i=s.readTime?Ot(s.readTime):G.min(),o=qe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new _i([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=va(t,s.document),i=s.removedTargetIds||[];n=new _i([],i,r,null)}else{if(!("filter"in e))return j();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Ob(r),o=s.targetId;n=new xg(o,i)}}return n}function zb(t,e){let n;if(e instanceof zr)n={update:Vh(t,e.key,e.value)};else if(e instanceof kg)n={delete:fc(t,e.key)};else if(e instanceof Gn)n={update:Vh(t,e.key,e.data),updateMask:tS(e.fieldMask)};else{if(!(e instanceof Db))return j();n={verify:fc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof qi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ar)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof kr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof zi)return{fieldPath:i.field.canonicalString(),increment:o.It};throw j()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Hb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:j()}(t,e.precondition)),n}function Wb(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ot(s.updateTime):Ot(r);return i.isEqual(G.min())&&(i=Ot(r)),new kb(i,s.transformResults||[])}(n,e))):[]}function Gb(t,e){return{documents:[dc(t,e.path)]}}function Qb(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=dc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return $g(Mt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:rs(l.field),direction:Jb(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Mo(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Xb(t){let e=Kb(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ve(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Vg(l);return h instanceof Mt&&dg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new ir(is(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Mo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,f=l.values||[];return new Ki(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,f=l.values||[];return new Ki(f,h)}(n.endAt)),vb(e,r,o,i,a,"F",c,u)}function Yb(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return j()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=is(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=is(e.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=is(e.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=is(e.unaryFilter.field);return Re.create(i,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(is(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(n=>Vg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return j()}}(e.compositeFilter.op))}(t):j()}function Jb(t){return Vb[t]}function Zb(t){return $b[t]}function eS(t){return Bb[t]}function rs(t){return{fieldPath:t.canonicalString()}}function is(t){return ze.fromServerFormat(t.fieldPath)}function $g(t){return t instanceof Re?function(e){if(e.op==="=="){if(Ch(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NAN"}};if(Sh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ch(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NAN"}};if(Sh(e.value))return{unaryFilter:{field:rs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rs(e.field),op:Zb(e.op),value:e.value}}}(t):t instanceof Mt?function(e){const n=e.getFilters().map(s=>$g(s));return n.length===1?n[0]:{compositeFilter:{op:eS(e.op),filters:n}}}(t):j()}function tS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Bg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Rb(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=or(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=or(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Og();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Cg(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,s)=>Ph(n,s))&&Ts(this.baseMutations,e.baseMutations,(n,s)=>Ph(n,s))}}class Cu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){ve(e.mutations.length===s.length);let r=Mb;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Cu(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Ye.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.oe=e}}function iS(t){const e=Xb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?lc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(){this.Ze=new aS}addToCollectionParentIndex(e,n){return this.Ze.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(_n.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(_n.min())}updateCollectionGroup(e,n,s){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class aS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new De(Te.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new De(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Cs(0)}static Sn(){return new Cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?b.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&or(s.mutation,r,_t.empty(),Ne.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=te()){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ws();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Qt();const o=ar(),a=ar();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Gn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),or(l.mutation,u,l.mutation.getFieldMask(),Ne.now())):o.set(u.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new uS(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=ar();let r=new Pe((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||_t.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||te()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Og();l.forEach(f=>{if(!i.has(f)){const g=Cg(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Eb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):b.resolve(xn());let a=-1,c=i;return o.next(u=>b.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?b.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,te())).next(l=>({batchId:a,changes:Dg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=Ws();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ws();return this.indexManager.getCollectionParents(e,r).next(o=>b.forEach(o,a=>{const c=function(u,l){return new Lo(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,qe.newInvalidDocument(u)))});let o=Ws();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&or(u.mutation,c,_t.empty(),Ne.now()),Fo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return b.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ot(s.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:iS(s.bundledQuery),readTime:Ot(s.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.overlays=new Pe($.comparator),this.ss=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const s=xn();return b.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),b.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),b.resolve()}getOverlaysForCollection(e,n,s){const r=xn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Pe((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=xn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return b.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sS(n,s));let i=this.ss.get(n);i===void 0&&(i=te(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(){this.rs=new De(xe.os),this.us=new De(xe.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new xe(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new xe(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new $(new Te([])),s=new xe(n,e),r=new xe(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new $(new Te([])),s=new xe(n,e),r=new xe(n,e+1);let i=te();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new xe(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class xe{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return $.comparator(e.key,n.key)||ce(e.gs,n.gs)}static cs(e,n){return ce(e.gs,n.gs)||$.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new De(xe.os)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new xe(n,0),r=new xe(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new De(ce);return n.forEach(r=>{const i=new xe(r,0),o=new xe(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),b.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new xe(new $(i),0);let a=new De(ce);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),b.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){ve(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return b.forEach(n.mutations,r=>{const i=new xe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new xe(n,0),r=this.ps.firstAfterOrEqual(s);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e){this.Rs=e,this.docs=new Pe($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return b.resolve(s?s.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let s=Qt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():qe.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Qt();const o=n.path,a=new $(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||eb(ZI(l),s)<=0||(r.has(l.key)||Fo(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,n,s,r){j()}bs(e,n){return b.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new gS(this)}getSize(e){return b.resolve(this.size)}}class gS extends cS{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),b.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.persistence=e,this.vs=new Us(n=>Tu(n),Iu),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Au,this.targetCount=0,this.Ss=Cs.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),b.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Cs(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.xn(n),b.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return b.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),b.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),b.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return b.resolve(s)}containsKey(e,n){return b.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new _u(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new mS(this),this.indexManager=new oS,this.remoteDocumentCache=function(s){return new pS(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new rS(n),this.Os=new hS(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new fS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new dS(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){L("MemoryPersistence","Starting transaction:",e);const r=new vS(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return b.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class vS extends nb{constructor(e){super(),this.currentSequenceNumber=e}}class ku{constructor(e){this.persistence=e,this.Bs=new Au,this.Ls=null}static qs(e){return new ku(e)}get Us(){if(this.Ls)return this.Ls;throw j()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),b.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),b.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Us,s=>{const r=$.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return b.or([()=>b.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=te(),r=te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ru(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(Dh(n))return b.resolve(null);let s=Gt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=lc(n,null,"F"),s=Gt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=te(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(e,lc(n,null,"F")):this.qi(e,u,n,c)}))})))}Fi(e,n,s,r){return Dh(n)||r.isEqual(G.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Th()<=ie.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),hc(n)),this.qi(e,o,n,JI(r,-1)))})}Bi(e,n){let s=new De(wg(e));return n.forEach((r,i)=>{Fo(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Th()<=ie.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",hc(n)),this.Oi.getDocumentsMatchingQuery(e,n,_n.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new Pe(ce),this.Gi=new Us(i=>Tu(i),Iu),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lS(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function ES(t,e,n,s){return new _S(t,e,n,s)}async function jg(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=te();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function TS(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let f=b.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const w=c.docVersions.get(g);ve(w!==null),y.version.compareTo(w)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=te();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Hg(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function IS(t,e){const n=X(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const f=r.get(h);if(!f)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ye.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,w,T){return y.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=Qt(),u=te();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(bS(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(G.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(h=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return b.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function bS(t,e,n){let s=te(),r=te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Qt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function SS(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function CS(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new $n(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function gc(t,e,n){const s=X(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!qr(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function $h(t,e,n){const s=X(t);let r=G.min(),i=te();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),h=l.Gi.get(u);return h!==void 0?b.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,Gt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:te())).next(a=>(AS(s,Tb(e),a),{documents:a,Yi:i})))}function AS(t,e,n){let s=t.Qi.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class Bh{constructor(){this.activeTargetIds=Pg()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kS{constructor(){this.Ur=new Bh,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Bh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);L("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(L("RestConnection","Received: ",c),c),c=>{throw ic("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=NS[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new jI;a.setWithCredentials(!0),a.listenOnce(VI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ya.NO_ERROR:const u=a.getResponseJson();L("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ya.TIMEOUT:L("Connection",'RPC "'+e+'" timed out'),o(new B(S.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const l=a.getStatus();if(L("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const g=function(y){const w=y.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(w)>=0?w:S.UNKNOWN}(f.status);o(new B(g,f.message))}else o(new B(S.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(S.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{L("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=UI(),o=FI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new BI({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");L("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const f=new DS({Yr:y=>{h?L("Connection","Not sending because WebChannel is closed:",y):(l||(L("Connection","Opening WebChannel transport."),u.open(),l=!0),L("Connection","WebChannel sending:",y),u.send(y))},Zr:()=>u.close()}),g=(y,w,T)=>{y.listen(w,k=>{try{T(k)}catch(O){setTimeout(()=>{throw O},0)}})};return g(u,ii.EventType.OPEN,()=>{h||L("Connection","WebChannel transport opened.")}),g(u,ii.EventType.CLOSE,()=>{h||(h=!0,L("Connection","WebChannel transport closed"),f.oo())}),g(u,ii.EventType.ERROR,y=>{h||(h=!0,ic("Connection","WebChannel transport errored:",y),f.oo(new B(S.UNAVAILABLE,"The operation could not be completed")))}),g(u,ii.EventType.MESSAGE,y=>{var w;if(!h){const T=y.data[0];ve(!!T);const k=T,O=k.error||((w=k[0])===null||w===void 0?void 0:w.error);if(O){L("Connection","WebChannel received error:",O);const W=O.status;let Q=function(Ie){const Ae=Se[Ie];if(Ae!==void 0)return Rg(Ae)}(W),ae=O.message;Q===void 0&&(Q=S.INTERNAL,ae="Unknown error status: "+W+" with message "+O.message),h=!0,f.oo(new B(Q,ae)),u.close()}else L("Connection","WebChannel received:",T),f.uo(T)}}),g(o,$I.STAT_EVENT,y=>{y.stat===_h.PROXY?L("Connection","Detected buffering proxy"):y.stat===_h.NOPROXY&&L("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.ro()},0),f}}function wa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){return new jb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&L("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Kg(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new B(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PS extends qg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=qb(this.Tt,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?Ot(i.readTime):G.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=pc(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=uc(a)?{documents:Gb(r,a)}:{query:Qb(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Lg(r,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=Wi(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Yb(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=pc(this.Tt),n.removeTarget=e,this.qo(n)}}class xS extends qg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=Wb(e.writeResults,e.commitTime),s=Ot(e.commitTime);return this.listener.eu(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=pc(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>zb(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(S.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(S.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class LS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Wt(n),this.cu=!1):L("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Qn(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c.mu.add(4),await Gr(c),c.pu.set("Unknown"),c.mu.delete(4),await Ho(c)}(this))})}),this.pu=new LS(s,r)}}async function Ho(t){if(Qn(t))for(const e of t.gu)await e(!0)}async function Gr(t){for(const e of t.gu)await e(!1)}function zg(t,e){const n=X(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Ou(n)?Du(n):Fs(n).Mo()&&Nu(n,e))}function Wg(t,e){const n=X(t),s=Fs(n);n.wu.delete(e),s.Mo()&&Gg(n,e),n.wu.size===0&&(s.Mo()?s.Bo():Qn(n)&&n.pu.set("Unknown"))}function Nu(t,e){t.Iu.Ft(e.targetId),Fs(t).Jo(e)}function Gg(t,e){t.Iu.Ft(e),Fs(t).Yo(e)}function Du(t){t.Iu=new Fb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Fs(t).start(),t.pu.au()}function Ou(t){return Qn(t)&&!Fs(t).Oo()&&t.wu.size>0}function Qn(t){return X(t).mu.size===0}function Qg(t){t.Iu=void 0}async function FS(t){t.wu.forEach((e,n)=>{Nu(t,e)})}async function VS(t,e){Qg(t),Ou(t)?(t.pu.fu(e),Du(t)):t.pu.set("Unknown")}async function $S(t,e,n){if(t.pu.set("Online"),e instanceof Mg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Gi(t,s)}else if(e instanceof _i?t.Iu.Qt(e):e instanceof xg?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(G.min()))try{const s=await Hg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(Ye.EMPTY_BYTE_STRING,c.snapshotVersion)),Gg(r,a);const u=new $n(c.target,a,1,c.sequenceNumber);Nu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){L("RemoteStore","Failed to raise snapshot:",s),await Gi(t,s)}}async function Gi(t,e,n){if(!qr(e))throw e;t.mu.add(1),await Gr(t),t.pu.set("Offline"),n||(n=()=>Hg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Ho(t)})}function Xg(t,e){return e().catch(n=>Gi(t,n,e))}async function Ko(t){const e=X(t),n=Tn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;BS(e);)try{const r=await SS(e.localStore,s);if(r===null){e._u.length===0&&n.Bo();break}s=r.batchId,jS(e,r)}catch(r){await Gi(e,r)}Yg(e)&&Jg(e)}function BS(t){return Qn(t)&&t._u.length<10}function jS(t,e){t._u.push(e);const n=Tn(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function Yg(t){return Qn(t)&&!Tn(t).Oo()&&t._u.length>0}function Jg(t){Tn(t).start()}async function HS(t){Tn(t).su()}async function KS(t){const e=Tn(t);for(const n of t._u)e.tu(n.mutations)}async function qS(t,e,n){const s=t._u.shift(),r=Cu.from(s,e,n);await Xg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ko(t)}async function zS(t,e){e&&Tn(t).Xo&&await async function(n,s){if(r=s.code,Pb(r)&&r!==S.ABORTED){const i=n._u.shift();Tn(n).$o(),await Xg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ko(n)}var r}(t,e),Yg(t)&&Jg(t)}async function Hh(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const s=Qn(n);n.mu.add(3),await Gr(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Ho(n)}async function WS(t,e){const n=X(t);e?(n.mu.delete(2),await Ho(n)):e||(n.mu.add(2),await Gr(n),n.pu.set("Unknown"))}function Fs(t){return t.Tu||(t.Tu=function(e,n,s){const r=X(e);return r.ru(),new PS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:FS.bind(null,t),no:VS.bind(null,t),Ho:$S.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Ou(t)?Du(t):t.pu.set("Unknown")):(await t.Tu.stop(),Qg(t))})),t.Tu}function Tn(t){return t.Eu||(t.Eu=function(e,n,s){const r=X(e);return r.ru(),new xS(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:HS.bind(null,t),no:zS.bind(null,t),nu:KS.bind(null,t),eu:qS.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await Ko(t)):(await t.Eu.stop(),t._u.length>0&&(L("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Pu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),qr(t))return new B(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=Ws(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new gs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.Au=new Pe($.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):j():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class As{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,gs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.bu=void 0,this.listeners=[]}}class QS{constructor(){this.queries=new Us(e=>vg(e),Uo),this.onlineState="Unknown",this.vu=new Set}}async function XS(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new GS),r)try{i.bu=await n.onListen(s)}catch(o){const a=xu(o,`Initialization of query '${hc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&Mu(n)}async function YS(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function JS(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&Mu(n)}function ZS(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Mu(t){t.vu.forEach(e=>{e.next()})}class eC{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new As(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.key=e}}class em{constructor(e){this.key=e}}class tC{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=te(),this.mutatedKeys=te(),this.ju=wg(e),this.zu=new gs(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new Kh,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const f=r.get(l),g=Fo(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let T=!1;f&&g?f.data.isEqual(g.data)?y!==w&&(s.track({type:3,doc:g}),T=!0):this.Yu(f,g)||(s.track({type:2,doc:g}),T=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),T=!0):f&&!g&&(s.track({type:1,doc:f}),T=!0,(c||u)&&(a=!0)),T&&(g?(o=o.add(g),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return g(h)-g(f)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new As(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Kh,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=te(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new em(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new Zg(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=te();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return As.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class nC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class sC{constructor(e){this.key=e,this.ic=!1}}class rC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Us(a=>vg(a),Uo),this.uc=new Map,this.cc=new Set,this.ac=new Pe($.comparator),this.hc=new Map,this.lc=new Au,this.fc={},this.dc=new Map,this._c=Cs.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function iC(t,e){const n=gC(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await CS(n.localStore,Gt(e));n.isPrimaryClient&&zg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await oC(n,e,s,a==="current",o.resumeToken)}return r}async function oC(t,e,n,s,r){t.mc=(h,f,g)=>async function(y,w,T,k){let O=w.view.Hu(T);O.Li&&(O=await $h(y.localStore,w.query,!1).then(({documents:ae})=>w.view.Hu(ae,O)));const W=k&&k.targetChanges.get(w.targetId),Q=w.view.applyChanges(O,y.isPrimaryClient,W);return zh(y,w.targetId,Q.tc),Q.snapshot}(t,h,f,g);const i=await $h(t.localStore,e,!0),o=new tC(e,i.Yi),a=o.Hu(i.documents),c=Wr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);zh(t,n,u.tc);const l=new nC(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function aC(t,e){const n=X(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!Uo(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Wg(n.remoteStore,s.targetId),mc(n,s.targetId)}).catch(Kr)):(mc(n,s.targetId),await gc(n.localStore,s.targetId,!0))}async function cC(t,e,n){const s=mC(t);try{const r=await function(i,o){const a=X(i),c=Ne.now(),u=o.reduce((f,g)=>f.add(g.key),te());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Qt(),y=te();return a.ji.getEntries(f,u).next(w=>{g=w,g.forEach((T,k)=>{k.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(w=>{l=w;const T=[];for(const k of o){const O=Nb(k,l.get(k.key).overlayedDocument);O!=null&&T.push(new Gn(k.key,O,yg(O.value.mapValue),jt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,T,o)}).next(w=>{h=w;const T=w.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(f,w.batchId,T)})}).then(()=>({batchId:h.batchId,changes:Dg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new Pe(ce)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Qr(s,r.changes),await Ko(s.remoteStore)}catch(r){const i=xu(r,"Failed to persist write");n.reject(i)}}async function tm(t,e){const n=X(t);try{const s=await IS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(ve(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?ve(o.ic):r.removedDocuments.size>0&&(ve(o.ic),o.ic=!1))}),await Qr(n,s,e)}catch(s){await Kr(s)}}function qh(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&Mu(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uC(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new Pe($.comparator);o=o.insert(i,qe.newNoDocument(i,G.min()));const a=te().add(i),c=new Bo(G.min(),new Map,new De(ce),o,a);await tm(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Lu(s)}else await gc(s.localStore,e,!1).then(()=>mc(s,e,n)).catch(Kr)}async function lC(t,e){const n=X(t),s=e.batch.batchId;try{const r=await TS(n.localStore,e);sm(n,s,null),nm(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Qr(n,r)}catch(r){await Kr(r)}}async function hC(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(ve(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);sm(s,e,n),nm(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Qr(s,r)}catch(r){await Kr(r)}}function nm(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function sm(t,e,n){const s=X(t);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function mc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||rm(t,s)})}function rm(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(Wg(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Lu(t))}function zh(t,e,n){for(const s of n)s instanceof Zg?(t.lc.addReference(s.key,e),fC(t,s)):s instanceof em?(L("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||rm(t,s.key)):j()}function fC(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(L("SyncEngine","New document in limbo: "+n),t.cc.add(s),Lu(t))}function Lu(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new $(Te.fromString(e)),s=t._c.next();t.hc.set(s,new sC(n)),t.ac=t.ac.insert(n,s),zg(t.remoteStore,new $n(Gt(bu(n.path)),s,2,_u.at))}}async function Qr(t,e,n){const s=X(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ru.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>b.forEach(c,h=>b.forEach(h.Ci,f=>u.persistence.referenceDelegate.addReference(l,h.targetId,f)).next(()=>b.forEach(h.xi,f=>u.persistence.referenceDelegate.removeReference(l,h.targetId,f)))))}catch(l){if(!qr(l))throw l;L("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const f=u.Ki.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,y)}}}(s.localStore,i))}async function dC(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const s=await jg(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new B(S.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qr(n,s.Wi)}}function pC(t,e){const n=X(t),s=n.hc.get(e);if(s&&s.ic)return te().add(s.key);{let r=te();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function gC(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=pC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uC.bind(null,e),e.rc.Ho=JS.bind(null,e.eventManager),e.rc.gc=ZS.bind(null,e.eventManager),e}function mC(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hC.bind(null,e),e}class yC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=jo(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return ES(this.persistence,new wS,e.initialUser,this.Tt)}Tc(e){return new yS(ku.qs,this.Tt)}Ic(e){return new kS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>qh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=dC.bind(null,this.syncEngine),await WS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new QS}createDatastore(e){const n=jo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new OS(r));var r;return function(i,o,a,c){return new MS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>qh(this.syncEngine,a,0),o=jh.C()?new jh:new RS,new US(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new rC(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);L("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Gr(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ke.UNAUTHENTICATED,this.clientId=ag.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{L("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(L("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function EC(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await jg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function TC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IC(t);L("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Hh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Hh(e.remoteStore,i)),t.onlineComponents=e}async function IC(t){return t.offlineComponents||(L("FirestoreClient","Using default OfflineComponentProvider"),await EC(t,new yC)),t.offlineComponents}async function im(t){return t.onlineComponents||(L("FirestoreClient","Using default OnlineComponentProvider"),await TC(t,new vC)),t.onlineComponents}function bC(t){return im(t).then(e=>e.syncEngine)}async function Wh(t){const e=await im(t),n=e.eventManager;return n.onListen=iC.bind(null,e.syncEngine),n.onUnlisten=aC.bind(null,e.syncEngine),n}const Gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(t,e,n){if(!n)throw new B(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,s){if(e===!0&&s===!0)throw new B(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qh(t){if(!$.isDocumentKey(t))throw new B(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xh(t){if($.isDocumentKey(t))throw new B(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":j()}function ms(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Uu(t);throw new B(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new HI;switch(n.type){case"gapi":const s=n.client;return new WI(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gh.get(e);n&&(L("ComponentProvider","Removing Datastore"),Gh.delete(e),n.terminate())}(this),Promise.resolve()}}function CC(t,e,n,s={}){var r;const i=(t=ms(t,qo))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ic("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=T_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(c)}t._authCredentials=new KI(new og(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class zo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new zo(this.firestore,e,this._query)}}class mn extends zo{constructor(e,n,s){super(e,n,bu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new $(e))}withConverter(e){return new mn(this.firestore,e,this._path)}}function am(t,e,...n){if(t=gt(t),om("collection","path",e),t instanceof qo){const s=Te.fromString(e,...n);return Xh(s),new mn(t,null,s)}{if(!(t instanceof ot||t instanceof mn))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return Xh(s),new mn(t.firestore,null,s)}}function cm(t,e,...n){if(t=gt(t),arguments.length===1&&(e=ag.R()),om("doc","path",e),t instanceof qo){const s=Te.fromString(e,...n);return Qh(s),new ot(t,null,new $(s))}{if(!(t instanceof ot||t instanceof mn))throw new B(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Te.fromString(e,...n));return Qh(s),new ot(t.firestore,t instanceof mn?t.converter:null,new $(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Kg(this,"async_queue_retry"),this.Hc=()=>{const n=wa();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=wa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=wa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Vn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!qr(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Wt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=Pu.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&j()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}function Jh(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of n)if(r in s&&typeof s[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Qi extends qo{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new AC,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hm(this),this._firestoreClient.terminate()}}function um(t,e){const n=typeof t=="object"?t:Id(),s=typeof t=="string"?t:e||"(default)",r=Hc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=w_("firestore");i&&CC(r,...i)}return r}function lm(t){return t._firestoreClient||hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hm(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new sb(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _C(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(Ye.fromBase64String(e))}catch(n){throw new B(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=/^__.*__$/;class RC{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Gn(e,this.data,this.fieldMask,n,this.fieldTransforms):new zr(e,this.data,n,this.fieldTransforms)}}function dm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class $u{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new $u(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Xi(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(dm(this.ra)&&kC.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class NC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=s||jo(e)}wa(e,n,s,r=!1){return new $u({ra:e,methodName:n,_a:s,path:ze.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function DC(t){const e=t._freezeSettings(),n=jo(t._databaseId);return new NC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OC(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);ym("Data must be an object, but it was:",o,s);const a=gm(s,o);let c,u;if(i.merge)c=new _t(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const f=PC(e,h,n);if(!o.contains(f))throw new B(S.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);MC(l,f)||l.push(f)}c=new _t(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new RC(new ht(a),c,u)}function pm(t,e){if(mm(t=gt(t)))return ym("Unsupported field value:",e,t),gm(t,e);if(t instanceof fm)return function(n,s){if(!dm(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=pm(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=gt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return bb(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ne.fromDate(n);return{timestampValue:Wi(s.Tt,r)}}if(n instanceof Ne){const r=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Wi(s.Tt,r)}}if(n instanceof Vu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ks)return{bytesValue:Lg(s.Tt,n._byteString)};if(n instanceof ot){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Su(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${Uu(n)}`)}(t,e)}function gm(t,e){const n={};return cg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ls(t,(s,r)=>{const i=pm(r,e.ua(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Vu||t instanceof ks||t instanceof ot||t instanceof fm)}function ym(t,e,n){if(!mm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Uu(n);throw s==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+s)}}function PC(t,e,n){if((e=gt(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return vm(t,e);throw Xi("Field path arguments must be of type string or ",t,!1,void 0,n)}const xC=new RegExp("[~\\*/\\[\\]]");function vm(t,e,n){if(e.search(xC)>=0)throw Xi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw Xi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(S.INVALID_ARGUMENT,a+t+c)}function MC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_m("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LC extends wm{data(){return super.data()}}function _m(t,e){return typeof e=="string"?vm(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FC{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw j()}}convertObject(e,n){const s={};return Ls(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Vu(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=lg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const n=En(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Te.fromString(e);ve(Bg(s));const r=new br(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Em extends wm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(_m("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ei extends Em{data(e={}){return super.data(e)}}class $C{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Gs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ei(this._firestore,this._userDataWriter,s.key,s,new Gs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ei(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ei(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Gs(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:BC(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}class Tm extends FC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Im(t,e,n){t=ms(t,ot);const s=ms(t.firestore,Qi),r=VC(t.converter,e,n);return jC(s,[OC(DC(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,jt.none())])}function bm(t,...e){var n,s,r;t=gt(t);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Jh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Jh(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let c,u,l;if(t instanceof ot)u=ms(t.firestore,Qi),l=bu(t._key.path),c={next:h=>{e[o]&&e[o](HC(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=ms(t,zo);u=ms(h.firestore,Qi),l=h._query;const f=new Tm(u);c={next:g=>{e[o]&&e[o](new $C(u,f,h,g))},error:e[o+1],complete:e[o+2]},UC(t._query)}return function(h,f,g,y){const w=new wC(y),T=new eC(f,w,g);return h.asyncQueue.enqueueAndForget(async()=>XS(await Wh(h),T)),()=>{w.Pc(),h.asyncQueue.enqueueAndForget(async()=>YS(await Wh(h),T))}}(lm(u),l,a,c)}function jC(t,e){return function(n,s){const r=new Vn;return n.asyncQueue.enqueueAndForget(async()=>cC(await bC(n),s,r)),r.promise}(lm(t),e)}function HC(t,e,n){const s=n.docs.get(e._key),r=new Tm(t);return new Em(t,r,e._key,s,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ms=n})(Dr),_s(new Bn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Qi(new qI(n.getProvider("auth-internal")),new QI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new br(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),gn(Eh,"3.8.4",t),gn(Eh,"3.8.4","esm2017")})();const KC=pt("h1",null,"I am the dashboard",-1),qC={name:"Dashboard",setup(t){const e=po(Kc.firebase),n=sp(e),s=um(e),r=am(s,"markdowns"),i=zn({markdowns:[]}),o=gd();Vf(async()=>{i.user=n.currentUser}),co(()=>{bm(r,c=>{i.markdowns=c.docs.map(u=>Go({id:u.id},u.data()))})});function a(){const c=cm(r);Im(c,{markdown:"",converted:""}),o.push(`/editor/${c.id}`)}return(c,u)=>{const l=Pc("router-link");return hs(),Zs(tt,null,[KC,(hs(!0),Zs(tt,null,Jy(i.markdowns,h=>(hs(),Zs("ul",{key:h.id},[pt("li",null,[nt(l,{to:{path:`/editor/${h.id}`}},{default:Oc(()=>[Lc(Lm(h.id),1)]),_:2},1032,["to"])])]))),128)),pt("button",{onClick:a},"New")],64)}}};var zC={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Zh(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function js(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yi(t,e){var n,s,r,i,o,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],u="",l=e||{},h=0;function f(y){var w=zC[y[1]||""],T=c[c.length-1]==y;return w?w[1]?(T?c.pop():c.push(y),w[0|T]):w[0]:y}function g(){for(var y="";c.length;)y+=f(c[c.length-1]);return y}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,function(y,w,T){return l[w.toLowerCase()]=T,""}).replace(/^\n+|\n+$/g,"");r=a.exec(t);)s=t.substring(h,r.index),h=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((o=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Zh(js(o).replace(/^\n+|\n+$/g,""))+"</code></pre>":(o=r[6])?(o.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),i=Yi(Zh(r[5].replace(/^\s*[>*+.-]/gm,""))),o==">"?o="blockquote":(o=o.match(/\./)?"ol":"ul",i=i.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+o+">"+i+"</"+o+">"):r[8]?n='<img src="'+js(r[8])+'" alt="'+js(r[7])+'">':r[10]?(u=u.replace("<a>",'<a href="'+js(r[11]||l[s.toLowerCase()])+'">'),n=g()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(o="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Yi(r[12]||r[15],l)+"</"+o+">":r[16]?n="<code>"+js(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),u+=s,u+=n;return(u+t.substring(h)+g()).replace(/^\n+|\n+$/g,"")}function WC(t){return t.split(/(?:\r?\n){2,}/).map(e=>[" ","	","#","-","*",">"].some(n=>e.startsWith(n))?Yi(e):`<p>${Yi(e)}</p>`).join(`
`)}const GC=pt("h3",null,"Editor",-1),QC=Lc("< Dashboard"),XC={id:"editor"},YC=["innerHTML"],JC={name:"Editor",setup(t){const e=po(Kc.firebase),n=um(e),s=am(n,"markdowns"),r=h_(),i=cm(s,r.params.id),o=zn({});co(()=>{bm(i,c=>{const u=c.data();o.converted=u.converted,o.markdown=u.markdown})});function a(c){const u=c.target.value,l=WC(u);Im(i,{converted:l,markdown:u})}return(c,u)=>{const l=Pc("router-link");return hs(),Zs(tt,null,[GC,nt(l,{to:"/dashboard"},{default:Oc(()=>[QC]),_:1}),pt("div",XC,[Qy(pt("textarea",{onKeyup:a,"onUpdate:modelValue":u[0]||(u[0]=h=>o.markdown=h)},null,544),[[Jv,o.markdown]]),pt("div",{class:"output",innerHTML:o.converted},null,8,YC)])],64)}}};const ZC=[{path:"/",component:$T},{path:"/dashboard/",component:qC},{path:"/editor/:id",component:JC}];tw(ow).use(u_({history:Sw(),routes:ZC})).mount("#app");
