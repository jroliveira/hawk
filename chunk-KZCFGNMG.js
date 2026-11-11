import{$ as oe,$a as U,$b as Ht,Aa as Vn,Ab as Ei,B,Ba as K,C as R,Ca as d,Cb as vt,D as ne,Da as fe,Db as Fe,E as _i,Ea as pe,Eb as Ge,F as it,Fa as Ue,Fb as Ve,G as V,Ga as _t,H as ot,Ha as A,I as H,Ia as L,Ib as se,J as ce,Jb as ve,K as kn,Ka as ko,Kb as wi,L as I,La as vi,M as Ye,Ma as xe,N as rt,Na as Rt,Oa as Ci,P as Nt,Pa as Ee,Q as Fn,Qa as y,Ra as Me,S as h,Sa as Re,Sb as Po,Ta as nn,U as Oo,Va as Fo,W as ht,Wa as Vo,X as j,Xa as No,Y as Mo,Yb as Nn,Z as N,Zb as Pn,_ as G,a as C,aa as Do,ab as st,b as me,ba as ue,bb as le,c as vo,ca as S,cb as we,da as b,ea as Ao,fa as Lo,ga as D,i as yi,j as Qe,ja as mt,jb as Ii,k as Co,ka as ft,kb as xi,m as Io,n as xo,nb as _e,o as So,ob as We,p as To,pa as l,pb as J,q as Eo,qa as E,qb as De,ra as O,rb as v,s as Ln,sa as Z,sb as Si,t as yt,ta as Pt,u as P,ua as Bt,v as W,va as Ie,w as z,wa as Y,wb as $t,xa as X,xb as T,y as _,ya as ie,yb as Se,z as wo,za as be,zb as Ti}from"./chunk-FESBCTLM.js";function Ct(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[Ct(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Xe(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Oi(t,o,e=new WeakSet){if(t===o)return!0;if(!t||!o||typeof t!="object"||typeof o!="object"||e.has(t)||e.has(o))return!1;e.add(t).add(o);let n=Array.isArray(t),i=Array.isArray(o),r,s,a;if(n&&i){if(s=t.length,s!=o.length)return!1;for(r=s;r--!==0;)if(!Oi(t[r],o[r],e))return!1;return!0}if(n!=i)return!1;let c=t instanceof Date,u=o instanceof Date;if(c!=u)return!1;if(c&&u)return t.getTime()==o.getTime();let p=t instanceof RegExp,f=o instanceof RegExp;if(p!=f)return!1;if(p&&f)return t.toString()==o.toString();let m=Object.keys(t);if(s=m.length,s!==Object.keys(o).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(o,m[r]))return!1;for(r=s;r--!==0;)if(a=m[r],!Oi(t[a],o[a],e))return!1;return!0}function Mi(t,o){return Oi(t,o)}function Bn(t){return typeof t=="function"&&"call"in t&&"apply"in t}function ye(t){return!Xe(t)}function at(t,o){if(!t||!o)return null;try{let e=t[o];if(ye(e))return e}catch(e){}if(Object.keys(t).length){if(Bn(o))return o(t);if(o.indexOf(".")===-1)return t[o];{let e=o.split("."),n=t;for(let i=0,r=e.length;i<r;++i){if(n==null)return null;n=n[e[i]]}return n}}return null}function wt(t,o,e){return e?at(t,e)===at(o,e):Mi(t,o)}function pm(t,o){if(t!=null&&o&&o.length){for(let e of o)if(wt(t,e))return!0}return!1}function ka(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function zt(t,o){let e=-1;if(ye(t))try{e=t.findLastIndex(o)}catch(n){e=t.lastIndexOf([...t].reverse().find(o))}return e}function Ne(t,...o){return Bn(t)?t(...o):t}function on(t,o=!0){return typeof t=="string"&&(o||t!=="")}function It(t){return on(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Di(t,o="",e={}){let n=It(o).split("."),i=n.shift();if(i){if(ka(t)){let r=Object.keys(t).find(s=>It(s)===i)||"";return Di(Ne(t[r],e),n.join("."),e)}return}return Ne(t,e)}function Bo(t,o=!0){return Array.isArray(t)&&(o||t.length!==0)}function hm(t){return t instanceof Date}function Rn(t=""){return ye(t)&&t.length===1&&!!t.match(/\S| /)}function $n(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function He(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let o={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in o)t=t.replace(o[e],e)}return t}function Dt(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function Ot(t,o){if(t&&o){let e=n=>{Dt(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Fa(){return window.innerWidth-document.documentElement.offsetWidth}function Ro(t){typeof t=="string"?Ot(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,Fa()+"px"),Ot(document.body,t?.className||"p-overflow-hidden"))}function lt(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function $o(t){typeof t=="string"?lt(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),lt(document.body,t?.className||"p-overflow-hidden"))}function rn(t){for(let o of document?.styleSheets)try{for(let e of o?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch(e){}return null}function Ho(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],i=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",o.width=i.width||t.offsetWidth,o.height=i.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function zn(){let t=window,o=document,e=o.documentElement,n=o.getElementsByTagName("body")[0],i=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:i,height:r}}function Ai(t){return t?Math.abs(t.scrollLeft):0}function Li(){let t=document.documentElement;return(window.pageXOffset||Ai(t))-(t.clientLeft||0)}function ki(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Va(t){return t?getComputedStyle(t).direction==="rtl":!1}function jn(t,o,e=!0){var n,i,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Ho(t),c=a.height,u=a.width,p=o.offsetHeight,f=o.offsetWidth,m=o.getBoundingClientRect(),g=ki(),x=Li(),k=zn(),w,F,$="top";m.top+p+c>k.height?(w=m.top+g-c,$="bottom",w<0&&(w=g)):w=p+m.top+g,m.left+u>k.width?F=Math.max(0,m.left+x+f-u):F=m.left+x,Va(t)?t.style.insetInlineEnd=F+"px":t.style.insetInlineStart=F+"px",t.style.top=w+"px",t.style.transformOrigin=$,e&&(t.style.marginTop=$==="bottom"?`calc(${(i=(n=rn(/-anchor-gutter$/))==null?void 0:n.value)!=null?i:"2px"} * -1)`:(s=(r=rn(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function zo(t,o){t&&(typeof o=="string"?t.style.cssText=o:Object.entries(o||{}).forEach(([e,n])=>t.style[e]=n))}function $e(t,o){if(t instanceof HTMLElement){let e=t.offsetWidth;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function jo(t,o,e=!0,n=void 0){var i;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Ho(t),s=o.offsetHeight,a=o.getBoundingClientRect(),c=zn(),u,p,f=n??"top";if(!n&&a.top+s+r.height>c.height?(u=-1*r.height,f="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>c.width?p=a.left*-1:a.left+r.width>c.width?p=(a.left+r.width-c.width)*-1:p=0,t.style.top=u+"px",t.style.insetInlineStart=p+"px",t.style.transformOrigin=f,e){let m=(i=rn(/-anchor-gutter$/))==null?void 0:i.value;t.style.marginTop=f==="bottom"?`calc(${m??"2px"} * -1)`:m??""}}}function Uo(t){if(t){let o=t.parentNode;return o&&o instanceof ShadowRoot&&o.host&&(o=o.host),o}return null}function Na(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Uo(t))}function Mt(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Hn(t){var o;if(Mt(t))return t;if(!t||typeof t!="object")return;let e=t;if("current"in t)e=t.current,e=(o=Hn(e?.elementRef))!=null?o:e;else if("value"in t)e=t.value;else if("nativeElement"in t)e=t.nativeElement;else if("el"in t){let n=t.el;n&&typeof n=="object"&&"nativeElement"in n?e=n.nativeElement:e=n}else if("elementRef"in t)return Hn(t.elementRef);return e=Ne(e),Mt(e)?e:void 0}function Fi(t,o){var e,n,i;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@first":return o?.firstElementChild;case"@last":return o?.lastElementChild;case"@child":return(e=o?.children)==null?void 0:e[0];case"@parent":return o?.parentElement;case"@grandparent":return(n=o?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((i=o?.children)==null?void 0:i[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Hn(r);return Na(s)?s:r?.nodeType===9?r:void 0}}}function dt(t,o){let e=Fi(t,o);if(e)e.appendChild(o);else throw new Error("Cannot append "+o+" to "+t)}function Un(t,o={}){if(Mt(t)){let e=(i,r)=>{var s,a;let c=(s=t?.$attrs)!=null&&s[i]?[(a=t?.$attrs)==null?void 0:a[i]]:[];return[r].flat().reduce((u,p)=>{if(p!=null){let f=typeof p;if(f==="string"||f==="number")u.push(p);else if(f==="object"){let m=Array.isArray(p)?e(i,p):Object.entries(p).map(([g,x])=>i==="style"&&(x||x===0)?`${g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${x}`:x?g:void 0);u=m.length?u.concat(m.filter(g=>!!g)):u}}return u},c)},n=i=>{e("style",i).forEach(r=>{let s=r.indexOf(":");if(s<0)return;let a=r.slice(0,s).trim(),c=r.slice(s+1).trim();a&&t.style.setProperty(a,c)})};Object.entries(o).forEach(([i,r])=>{if(r!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),r):i==="p-bind"||i==="pBind"?Un(t,r):i==="style"?(n(r),(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=t.style.cssText)):(r=i==="class"?[...new Set(e("class",r))].join(" ").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=r),t.setAttribute(i,r))}})}}function sn(t,o={},...e){if(t){let n=document.createElement(t);return Un(n,o),n.append(...e),n}}function Wo(t,o){if(t){t.style.opacity="0";let e=+new Date,n="0",i=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/o}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(i):setTimeout(i,16))};i()}}function jt(t,o){return Mt(t)?Array.from(t.querySelectorAll(o)):[]}function Ce(t,o){return Mt(t)?t.matches(o)?t:t.querySelector(o):null}function ge(t,o){t&&document.activeElement!==t&&t.focus(o)}function gm(t,o){if(Mt(t)){let e=t.getAttribute(o);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Wn(t,o=""){let e=jt(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${o},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`),n=[];for(let i of e)getComputedStyle(i).display!="none"&&getComputedStyle(i).visibility!="hidden"&&n.push(i);return n}function Go(t,o){let e=Wn(t,o);return e.length>0?e[0]:null}function ct(t){if(t){let o=t.offsetHeight,e=getComputedStyle(t);return o-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),o}return 0}function bm(t){var o;if(t){let e=(o=Uo(t))==null?void 0:o.childNodes,n=0;if(e)for(let i=0;i<e.length;i++){if(e[i]===t)return n;e[i].nodeType===1&&n++}}return-1}function Ko(t,o){let e=Wn(t,o);return e.length>0?e[e.length-1]:null}function qo(t){if(t){let o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||Ai(document.documentElement)||Ai(document.body)||0)}}return{top:"auto",left:"auto"}}function Je(t,o){if(t){let e=t.offsetHeight;if(o){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function ym(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function ut(t){if(t){let o=t.offsetWidth,e=getComputedStyle(t);return o-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),o}return 0}function _m(t){if(t){let o=t.nodeName,e=t.parentElement&&t.parentElement.nodeName;return o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"||e==="A"||!!t.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1}function Vi(t){return!!(t&&t.offsetParent!=null)}function Ke(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Gn(){return new Promise(t=>{requestAnimationFrame(()=>{requestAnimationFrame(t)})})}function Zo(t){var o;t&&("remove"in Element.prototype?t.remove():(o=t.parentNode)==null||o.removeChild(t))}function Qo(t,o){let e=Hn(t);if(e)e.removeChild(o);else throw new Error("Cannot remove "+o+" from "+t)}function Yo(t,o){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,i=getComputedStyle(t).getPropertyValue("paddingTop"),r=i?parseFloat(i):0,s=t.getBoundingClientRect(),a=o.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,c=t.scrollTop,u=t.clientHeight,p=Je(o);a<0?t.scrollTop=c+a:a+p>u&&(t.scrollTop=c+a-u+p)}function Xo(t,o="",e){if(Mt(t)&&e!==null&&e!==void 0){if(o==="style"){typeof e=="string"?t.style.cssText=e:typeof e=="object"&&Object.entries(e).forEach(([n,i])=>{if(i==null)return;let r=n.startsWith("--")?n:n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();t.style.setProperty(r,String(i))});return}t.setAttribute(o,e)}}var Pa=Object.defineProperty,Jo=Object.getOwnPropertySymbols,Ba=Object.prototype.hasOwnProperty,Ra=Object.prototype.propertyIsEnumerable,er=(t,o,e)=>o in t?Pa(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,tr=(t,o)=>{for(var e in o||(o={}))Ba.call(o,e)&&er(t,e,o[e]);if(Jo)for(var e of Jo(o))Ra.call(o,e)&&er(t,e,o[e]);return t};function nr(...t){if(t){let o=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let i=typeof n;if(i==="string"||i==="number")o.push(n);else if(i==="object"){let r=Array.isArray(n)?[nr(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function $a(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Ha({skipUndefined:t=!1},...o){return o?.reduce((e,n={})=>{for(let i in n){let r=n[i];if(!(t&&r===void 0))if(i==="style")e.style=tr(tr({},e.style),n.style);else if(i==="class"||i==="className")e[i]=nr(e[i],n[i]);else if($a(r)){let s=e[i];e[i]=s?(...a)=>{s(...a),r(...a)}:r}else e[i]=r}return e},{})}function Ni(...t){return Ha({skipUndefined:!1},...t)}var Kn={};function Pe(t="pui_id_"){return Object.hasOwn(Kn,t)||(Kn[t]=0),Kn[t]++,`${t}${Kn[t]}`}var ir=["*"];var Ae=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Em=(()=>{class t{static AND="and";static OR="or"}return t})(),or=(()=>{class t{filter(e,n,i,r,s){let a=[];if(e)for(let c of e)for(let u of n){let p=at(c,u);if(this.filters[r](p,i,s)){a.push(c);break}}return a}filters={startsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=He(n.toString()).toLocaleLowerCase(i);return He(e.toString()).toLocaleLowerCase(i).slice(0,r.length)===r},contains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=He(n.toString()).toLocaleLowerCase(i);return He(e.toString()).toLocaleLowerCase(i).indexOf(r)!==-1},notContains:(e,n,i)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=He(n.toString()).toLocaleLowerCase(i);return He(e.toString()).toLocaleLowerCase(i).indexOf(r)===-1},endsWith:(e,n,i)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=He(n.toString()).toLocaleLowerCase(i),s=He(e.toString()).toLocaleLowerCase(i);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:He(e.toString()).toLocaleLowerCase(i)==He(n.toString()).toLocaleLowerCase(i),notEquals:(e,n,i)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:He(e.toString()).toLocaleLowerCase(i)!=He(n.toString()).toLocaleLowerCase(i),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let i=0;i<n.length;i++)if(wt(e,n[i]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,i)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,i)=>this.filters.equals(e,n,i),isNot:(e,n,i)=>this.filters.notEquals(e,n,i),before:(e,n,i)=>this.filters.lt(e,n,i),after:(e,n,i)=>this.filters.gt(e,n,i),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wm=(()=>{class t{messageSource=new Qe;clearSource=new Qe;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),qn=(()=>{class t{clickSource=new Qe;parentDragSource=new Qe;clickObservable=this.clickSource.asObservable();parentDragObservable=this.parentDragSource.asObservable();add(e){e&&this.clickSource.next(e)}emitParentDrag(e){this.parentDragSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Om=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:ir,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},encapsulation:2})}return t})(),Mm=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:ir,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},encapsulation:2})}return t})(),qe=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(j(Oo))};static \u0275dir=oe({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),te=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[se]})}return t})(),Zn=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var za=Object.defineProperty,rr=Object.getOwnPropertySymbols,ja=Object.prototype.hasOwnProperty,Ua=Object.prototype.propertyIsEnumerable,sr=(t,o,e)=>o in t?za(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Wa=(t,o)=>{for(var e in o||(o={}))ja.call(o,e)&&sr(t,e,o[e]);if(rr)for(var e of rr(o))Ua.call(o,e)&&sr(t,e,o[e]);return t};function an(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ga(t){return typeof t=="function"&&"call"in t&&"apply"in t}function Te(t){return!an(t)}function pt(t,o=!0){return t instanceof Object&&t.constructor===Object&&(o||Object.keys(t).length!==0)}function ar(t={},o={}){let e=Wa({},t);return Object.keys(o).forEach(n=>{let i=n;pt(o[i])&&i in t&&pt(t[i])?e[i]=ar(t[i],o[i]):e[i]=o[i]}),e}function lr(...t){return t.reduce((o,e,n)=>n===0?e:ar(o,e),{})}function xt(t,...o){return Ga(t)?t(...o):t}function At(t,o=!0){return typeof t=="string"&&(o||t!=="")}function dr(t){return Te(t)&&!isNaN(t)}function et(t,o){if(o){let e=o.test(t);return o.lastIndex=0,e}return!1}function Bi(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function Qn(t){return At(t)?t.replace(/(_)/g,"-").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase():t}function Ri(t){return t==="auto"?0:typeof t=="number"?t:Number(t.replace(/[^\d.]/g,"").replace(",","."))*1e3}function cr(){let t=new Map;return{on(o,e){let n=t.get(o);return n?n.push(e):n=[e],t.set(o,n),this},off(o,e){let n=t.get(o);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(o,e){let n=t.get(o);n&&n.forEach(i=>{i(e)})},clear(){t.clear()}}}function Ka(t,o){return t?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}function Yn(t,o){if(t&&o){let e=n=>{Ka(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function $i(t,o){if(t&&o){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function ur(t){let o={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display],i=t.getBoundingClientRect();t.style.visibility="hidden",t.style.display="block",o.width=i.width||t.offsetWidth,o.height=i.height||t.offsetHeight,t.style.display=n,t.style.visibility=e}return o}function pr(){return typeof window>"u"||!window.matchMedia?!1:window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Hi(t,o,e=null,n){var i;o&&((i=t?.style)==null||i.setProperty(o,e,n))}var qa=Object.defineProperty,Za=Object.defineProperties,Qa=Object.getOwnPropertyDescriptors,Xn=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable,hr=(t,o,e)=>o in t?qa(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,nt=(t,o)=>{for(var e in o||(o={}))fr.call(o,e)&&hr(t,e,o[e]);if(Xn)for(var e of Xn(o))gr.call(o,e)&&hr(t,e,o[e]);return t},zi=(t,o)=>Za(t,Qa(o)),gt=(t,o)=>{var e={};for(var n in t)fr.call(t,n)&&o.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Xn)for(var n of Xn(t))o.indexOf(n)<0&&gr.call(t,n)&&(e[n]=t[n]);return e};function Nm(...t){return lr(...t)}var Ya=cr(),ze=Ya,ln=/{([^}]*)}/g,br=/(\d+\s+[\+\-\*\/]\s+\d+)/g,yr=/var\([^)]+\)/g;function mr(t){return At(t)?t.replace(/[A-Z]/g,(o,e)=>e===0?o:"."+o.toLowerCase()).toLowerCase():t}function Xa(t){return pt(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function Ja(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ji(t="",o=""){return Ja(`${At(t,!1)&&At(o,!1)?`${t}-`:t}${o}`)}function _r(t="",o=""){return`--${ji(t,o)}`}function el(t=""){let o=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(o+e)%2!==0}function vr(t,o="",e="",n=[],i){if(At(t)){let r=t.trim();if(el(r))return;if(et(r,ln)){let s=r.replaceAll(ln,a=>{let c=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(p=>et(u,p)));return`var(${_r(e,Qn(c.join("-")))}${Te(i)?`, ${i}`:""})`});return et(s.replace(yr,"0"),br)?`calc(${s})`:s}return r}else if(dr(t))return t}function tl(t,o,e){At(o,!1)&&t.push(`${o}:${e};`)}function Ut(t,o){return t?`${t}{${o}}`:""}function Cr(t,o){if(t.indexOf("dt(")===-1)return t;function e(s,a){let c=[],u=0,p="",f=null,m=0;for(;u<=s.length;){let g=s[u];if((g==='"'||g==="'"||g==="`")&&s[u-1]!=="\\"&&(f=f===g?null:g),!f&&(g==="("&&m++,g===")"&&m--,(g===","||u===s.length)&&m===0)){let x=p.trim();x.startsWith("dt(")?c.push(Cr(x,a)):c.push(n(x)),p="",u++;continue}g!==void 0&&(p+=g),u++}return c}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let c=Number(s);return isNaN(c)?s:c}let i=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&i.push([a,s])}if(!i.length)return t;for(let s=i.length-1;s>=0;s--){let[a,c]=i[s],u=t.slice(a+3,c),p=e(u,o),f=o(...p);t=t.slice(0,a)+f+t.slice(c+1)}return t}var Wi=t=>{var o;let e=de.getTheme(),n=Ui(e,t,void 0,"variable"),i=(o=n?.match(/--[\w-]+/g))==null?void 0:o[0],r=Ui(e,t,void 0,"value");return{name:i,variable:n,value:r}},bt=(...t)=>Ui(de.getTheme(),...t),Ui=(t={},o,e,n)=>{if(o){let{variable:i,options:r}=de.defaults||{},{prefix:s,transform:a}=t?.options||r||{},c=et(o,ln)?o:`{${o}}`;return n==="value"||an(n)&&a==="strict"?de.getTokenValue(o):vr(c,void 0,s,[i.excludedKeyRegex],e)}return""};function Wt(t,...o){if(t instanceof Array){let e=t.reduce((n,i,r)=>{var s;return n+i+((s=xt(o[r],{dt:bt}))!=null?s:"")},"");return Cr(e,bt)}return xt(t,{dt:bt})}function nl(t,o={}){let e=de.defaults.variable,{prefix:n=e.prefix,selector:i=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=o,s=[],a=[],c=[{node:t,path:n}];for(;c.length;){let{node:p,path:f}=c.pop();for(let m in p){let g=p[m],x=Xa(g),k=et(m,r)?ji(f):ji(f,Qn(m));if(pt(x))c.push({node:x,path:k});else{let w=_r(k),F=vr(x,k,n,[r]);tl(a,w,F);let $=k;n&&$.startsWith(n+"-")&&($=$.slice(n.length+1)),s.push($.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Ut(i,u)}}var tt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t},:host${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let o=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=o.map(i=>i.resolve(e)).find(i=>i.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,o){return nl(t,{prefix:o?.prefix})},getCommon({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s,a,c,u,p,f;let{preset:m,options:g}=o,x,k,w,F,$,ae,Le;if(Te(m)&&g.transform!=="strict"){let{primitive:ke,semantic:Ze,extend:_n}=m,Jt=Ze||{},{colorScheme:vn}=Jt,Cn=gt(Jt,["colorScheme"]),In=_n||{},{colorScheme:xn}=In,en=gt(In,["colorScheme"]),tn=vn||{},{dark:Sn}=tn,Tn=gt(tn,["dark"]),En=xn||{},{dark:wn}=En,On=gt(En,["dark"]),Mn=Te(ke)?this._toVariables({primitive:ke},g):{},Dn=Te(Cn)?this._toVariables({semantic:Cn},g):{},An=Te(Tn)?this._toVariables({light:Tn},g):{},go=Te(Sn)?this._toVariables({dark:Sn},g):{},bo=Te(en)?this._toVariables({semantic:en},g):{},yo=Te(On)?this._toVariables({light:On},g):{},_o=Te(wn)?this._toVariables({dark:wn},g):{},[fa,ga]=[(r=Mn.declarations)!=null?r:"",Mn.tokens],[ba,ya]=[(s=Dn.declarations)!=null?s:"",Dn.tokens||[]],[_a,va]=[(a=An.declarations)!=null?a:"",An.tokens||[]],[Ca,Ia]=[(c=go.declarations)!=null?c:"",go.tokens||[]],[xa,Sa]=[(u=bo.declarations)!=null?u:"",bo.tokens||[]],[Ta,Ea]=[(p=yo.declarations)!=null?p:"",yo.tokens||[]],[wa,Oa]=[(f=_o.declarations)!=null?f:"",_o.tokens||[]];x=this.transformCSS(t,fa,"light","variable",g,n,i),k=ga;let Ma=this.transformCSS(t,`${ba}${_a}`,"light","variable",g,n,i),Da=this.transformCSS(t,`${Ca}`,"dark","variable",g,n,i);w=`${Ma}${Da}`,F=[...new Set([...ya,...va,...Ia])];let Aa=this.transformCSS(t,`${xa}${Ta}color-scheme:light`,"light","variable",g,n,i),La=this.transformCSS(t,`${wa}color-scheme:dark`,"dark","variable",g,n,i);$=`${Aa}${La}`,ae=[...new Set([...Sa,...Ea,...Oa])],Le=xt(m.css,{dt:bt})}return{primitive:{css:x,tokens:k},semantic:{css:w,tokens:F},global:{css:$,tokens:ae},style:Le}},getPreset({name:t="",preset:o={},options:e,params:n,set:i,defaults:r,selector:s}){var a,c,u;let p,f,m;if(Te(o)&&e.transform!=="strict"){let g=t.replace("-directive",""),x=o,{colorScheme:k,extend:w,css:F}=x,$=gt(x,["colorScheme","extend","css"]),ae=w||{},{colorScheme:Le}=ae,ke=gt(ae,["colorScheme"]),Ze=k||{},{dark:_n}=Ze,Jt=gt(Ze,["dark"]),vn=Le||{},{dark:Cn}=vn,In=gt(vn,["dark"]),xn=Te($)?this._toVariables({[g]:nt(nt({},$),ke)},e):{},en=Te(Jt)?this._toVariables({[g]:nt(nt({},Jt),In)},e):{},tn=Te(_n)?this._toVariables({[g]:nt(nt({},_n),Cn)},e):{},[Sn,Tn]=[(a=xn.declarations)!=null?a:"",xn.tokens||[]],[En,wn]=[(c=en.declarations)!=null?c:"",en.tokens||[]],[On,Mn]=[(u=tn.declarations)!=null?u:"",tn.tokens||[]],Dn=this.transformCSS(g,`${Sn}${En}`,"light","variable",e,i,r,s),An=this.transformCSS(g,On,"dark","variable",e,i,r,s);p=`${Dn}${An}`,f=[...new Set([...Tn,...wn,...Mn])],m=xt(F,{dt:bt})}return{css:p,tokens:f,style:m}},getPresetC({name:t="",theme:o={},params:e,set:n,defaults:i}){var r;let{preset:s,options:a}=o,c=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:c,options:a,params:e,set:n,defaults:i})},getPresetD({name:t="",theme:o={},params:e,set:n,defaults:i}){var r,s;let a=t.replace("-directive",""),{preset:c,options:u}=o,p=((r=c?.components)==null?void 0:r[a])||((s=c?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:p,options:u,params:e,set:n,defaults:i})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,o){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?o.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:o.options.darkModeSelector):[]},getLayerOrder(t,o={},e,n){let{cssLayer:i}=o;return i?`@layer ${xt(i.order||i.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){let s=this.getCommon({name:t,theme:o,params:e,set:i,defaults:r}),a=Object.entries(n).reduce((c,[u,p])=>c.push(`${u}="${p}"`)&&c,[]).join(" ");return Object.entries(s||{}).reduce((c,[u,p])=>{if(pt(p)&&Object.hasOwn(p,"css")){let f=Bi(p.css),m=`${u}-variables`;c.push(`<style type="text/css" data-primevue-style-id="${m}" ${a}>${f}</style>`)}return c},[]).join("")},getStyleSheet({name:t="",theme:o={},params:e,props:n={},set:i,defaults:r}){var s;let a={name:t,theme:o,params:e,set:i,defaults:r},c=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((p,[f,m])=>p.push(`${f}="${m}"`)&&p,[]).join(" ");return c?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${Bi(c)}</style>`:""},createTokens(t={},o,e="",n="",i={}){let r=function(a,c={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:c,value:void 0};u.push(this.path),c.name=this.path,c.binding||(c.binding={});let p=this.value;if(typeof this.value=="string"&&ln.test(this.value)){let f=this.value.trim().replace(ln,m=>{var g;let x=m.slice(1,-1),k=this.tokens[x];if(!k)return console.warn(`Token not found for path: ${x}`),"__UNRESOLVED__";let w=k.computed(a,c,u);return Array.isArray(w)&&w.length===2?`light-dark(${w[0].value},${w[1].value})`:(g=w?.value)!=null?g:"__UNRESOLVED__"});p=br.test(f.replace(yr,"0"))?`calc(${f})`:f}return an(c.binding)&&delete c.binding,u.pop(),{colorScheme:a,path:this.path,paths:c,value:p.includes("__UNRESOLVED__")?void 0:p}},s=(a,c,u)=>{Object.entries(a).forEach(([p,f])=>{let m=et(p,o.variable.excludedKeyRegex)?c:c?`${c}.${mr(p)}`:mr(p),g=u?`${u}.${p}`:p;pt(f)?s(f,m,g):(i[m]||(i[m]={paths:[],computed:(x,k={},w=[])=>{if(i[m].paths.length===1)return i[m].paths[0].computed(i[m].paths[0].scheme,k.binding,w);if(x&&x!=="none")for(let F=0;F<i[m].paths.length;F++){let $=i[m].paths[F];if($.scheme===x)return $.computed(x,k.binding,w)}return i[m].paths.map(F=>F.computed(F.scheme,k[F.scheme],w))}}),i[m].paths.push({path:g,value:f,scheme:g.includes("colorScheme.light")?"light":g.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:i}))})};return s(t,e,n),i},getTokenValue(t,o,e){var n;let i=(a=>a.split(".").filter(c=>!et(c.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(o),r=o.includes("colorScheme.light")?"light":o.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[i])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},c)=>{let u=c,{colorScheme:p}=u,f=gt(u,["colorScheme"]);return a[p]=f,a},void 0)},getSelectorRule(t,o,e,n){return e==="class"||e==="attr"?Ut(Te(o)?`${t}${o},${t} ${o}`:t,n):Ut(t,Ut(o??":root,:host",n))},transformCSS(t,o,e,n,i={},r,s,a){if(Te(o)){let{cssLayer:c}=i;if(n!=="style"){let u=this.getColorSchemeOption(i,s);o=e==="dark"?u.reduce((p,{type:f,selector:m})=>(Te(m)&&(p+=m.includes("[CSS]")?m.replace("[CSS]",o):this.getSelectorRule(m,a,f,o)),p),""):Ut(a??":root,:host",o)}if(c){let u={name:"primeui",order:"primeui"};pt(c)&&(u.name=xt(c.name,{name:t,type:n})),Te(u.name)&&(o=Ut(`@layer ${u.name}`,o),r?.layerNames(u.name))}return o}return""}},de={defaults:{variable:{prefix:"p",selector:":root,:host",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:o}=t;o&&(this._theme=zi(nt({},o),{options:nt(nt({},this.defaults.options),o.options)}),this._tokens=tt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ze.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=zi(nt({},this.theme),{preset:t}),this._tokens=tt.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ze.emit("preset:change",t),ze.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=zi(nt({},this.theme),{options:t}),this.clearLoadedStyleNames(),ze.emit("options:change",t),ze.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return tt.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",o){return tt.getCommon({name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return tt.getPresetC(e)},getDirective(t="",o){let e={name:t,theme:this.theme,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return tt.getPresetD(e)},getCustomPreset(t="",o,e,n){let i={name:t,preset:o,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return tt.getPreset(i)},getLayerOrderCSS(t=""){return tt.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",o,e="style",n){return tt.transformCSS(t,o,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",o,e={}){return tt.getCommonStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,o,e={}){return tt.getStyleSheet({name:t,theme:this.theme,params:o,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:o}){this._loadingStyles.size&&(this._loadingStyles.delete(o),ze.emit(`theme:${o}:load`,t),!this._loadingStyles.size&&ze.emit("theme:load"))}};var Ir=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    .p-collapsible-enter-active {
        animation: p-animate-collapsible-expand 0.2s ease-out;
        overflow: hidden;
    }

    .p-collapsible-leave-active {
        animation: p-animate-collapsible-collapse 0.2s ease-out;
        overflow: hidden;
    }

    @keyframes p-animate-collapsible-expand {
        from {
            grid-template-rows: 0fr;
        }
        to {
            grid-template-rows: 1fr;
        }
    }

    @keyframes p-animate-collapsible-collapse {
        from {
            grid-template-rows: 1fr;
        }
        to {
            grid-template-rows: 0fr;
        }
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: var(--px-mask-background, dt('mask.background'));
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter-active {
        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave-active {
        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;
    }

    @keyframes p-animate-overlay-mask-enter {
        from {
            background: transparent;
        }
        to {
            background: var(--px-mask-background, dt('mask.background'));
        }
    }
    @keyframes p-animate-overlay-mask-leave {
        from {
            background: var(--px-mask-background, dt('mask.background'));
        }
        to {
            background: transparent;
        }
    }

    .p-anchored-overlay-enter-active {
        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);
    }

    .p-anchored-overlay-leave-active {
        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);
    }

    @keyframes p-animate-anchored-overlay-enter {
        from {
            opacity: 0;
            transform: scale(0.93);
        }
    }

    @keyframes p-animate-anchored-overlay-leave {
        to {
            opacity: 0;
            transform: scale(0.93);
        }
    }
`;var il=0,xr=(()=>{class t{document=_(it);use(e,n={}){let i=!1,r=e,s=null,{immediate:a=!0,manual:c=!1,name:u=`style_${++il}`,id:p=void 0,media:f=void 0,nonce:m=void 0,first:g=!1,props:x={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),s){if(!s.isConnected){r=e;let k=this.document.head;Xo(s,"nonce",m),g&&k.firstChild?k.insertBefore(s,k.firstChild):k.appendChild(s),Un(s,{type:"text/css",media:f,nonce:m,"data-primeng-style-id":u})}s.textContent!==r&&(s.textContent=r)}return{id:p,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},ol=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,q=(()=>{class t{name="base";useStyle=_(xr);css=void 0;style=void 0;classes={};inlineStyles={};load=(e,n={},i=r=>r)=>{let r=i(Wt`${Ne(e,{dt:bt})}`);return r?this.useStyle.use($n(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadStyle=(e={},n="")=>this.load(this.style,e,(i="")=>de.transformCSS(e.name||this.name,`${i}${Wt`${n}`}`));loadBaseCSS=(e={})=>this.load(ol,e);loadBaseStyle=(e={},n="")=>this.load(Ir,e,(i="")=>de.transformCSS(e.name||this.name,`${i}${Wt`${n}`}`));getCommonTheme=e=>de.getCommon(this.name,e);getComponentTheme=e=>de.getComponent(this.name,e);getPresetTheme=(e,n,i)=>de.getCustomPreset(this.name,e,n,i);getLayerOrderThemeCSS=()=>de.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let i=Ne(this.css,{dt:bt}),r=$n(Wt`${i}${e}`),s=Object.entries(n).reduce((a,[c,u])=>a.push(`${c}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>de.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let i=[de.getStyleSheet(this.name,e,n)];if(this.style){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Wt`${Ne(this.style,{dt:bt})}`,a=$n(de.transformCSS(r,s)),c=Object.entries(n).reduce((u,[p,f])=>u.push(`${p}="${f}"`)&&u,[]).join(" ");i.push(`<style type="text/css" data-primeng-style-id="${r}" ${c}>${a}</style>`)}return i.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var rl=(()=>{class t{theme=H(void 0);csp=H({nonce:void 0});isThemeChanged=!1;document=_(it);baseStyle=_(q);constructor(){ce(()=>{ze.on("theme:change",e=>{We(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),ce(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){de.clearLoadedStyleNames(),ze.clear()}onThemeChange(e){de.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!de.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(i?.css,C({name:"global-variables"},s)),this.baseStyle.loadBaseStyle(C({name:"global-style"},s),r),de.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:i}=e||{};n&&this.theme.set(n),i&&this.csp.set(i)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gi=(()=>{class t extends rl{ripple=H(!1);platformId=_(rt);inputStyle=H(null);inputVariant=H(null);overlayAppendTo=H("self");overlayOptions={};csp=H({nonce:void 0});unstyled=H(void 0);pt=H(void 0);ptOptions=H(void 0);filterMatchModeOptions={text:[Ae.STARTS_WITH,Ae.CONTAINS,Ae.NOT_CONTAINS,Ae.ENDS_WITH,Ae.EQUALS,Ae.NOT_EQUALS],numeric:[Ae.EQUALS,Ae.NOT_EQUALS,Ae.LESS_THAN,Ae.LESS_THAN_OR_EQUAL_TO,Ae.GREATER_THAN,Ae.GREATER_THAN_OR_EQUAL_TO],date:[Ae.DATE_IS,Ae.DATE_IS_NOT,Ae.DATE_BEFORE,Ae.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize",minimizeLabel:"Minimize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new Qe;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:i,inputStyle:r,inputVariant:s,theme:a,overlayOptions:c,translation:u,filterMatchModeOptions:p,overlayAppendTo:f,zIndex:m,ptOptions:g,pt:x,unstyled:k}=e||{};n&&this.csp.set(n),f&&this.overlayAppendTo.set(f),i&&this.ripple.set(i),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),c&&(this.overlayOptions=c),u&&this.setTranslation(u),p&&(this.filterMatchModeOptions=p),m&&(this.zIndex=m),x&&this.pt.set(x),g&&this.ptOptions.set(g),k&&this.unstyled.set(k),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sl=new z("PRIME_NG_CONFIG");function pf(...t){let o=t?.map(n=>({provide:sl,useValue:n,multi:!1})),e=Lo(()=>{let n=_(Gi);t?.forEach(i=>n.setConfig(i))});return wo([...o,e])}var kr=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(j(ht),j(Ye))};static \u0275dir=oe({type:t})}return t})(),Fr=(()=>{class t extends kr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,features:[S]})}return t})(),mn=new z(""),al={provide:mn,useExisting:yt(()=>ll),multi:!0},ll=(()=>{class t extends Fr{writeValue(e){this.setProperty("checked",e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,i){n&1&&K("change",function(s){return i.onChange(s.target.checked)})("blur",function(){return i.onTouched()})},standalone:!1,features:[U([al]),S]})}return t})(),dl={provide:mn,useExisting:yt(()=>Vr),multi:!0};function cl(){let t=Ei()?Ei().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var ul=new z(""),Vr=(()=>{class t extends kr{_compositionMode;_composing=!1;constructor(e,n,i){super(e,n),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!cl())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(j(ht),j(Ye),j(ul,8))};static \u0275dir=oe({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,i){n&1&&K("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[U([dl]),S]})}return t})();function Xi(t){return t==null||Ji(t)===0}function Ji(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var pl=new z(""),hl=new z(""),ml=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Sr=class{static min(o){return fl(o)}static max(o){return gl(o)}static required(o){return bl(o)}static requiredTrue(o){return yl(o)}static email(o){return _l(o)}static minLength(o){return vl(o)}static maxLength(o){return Cl(o)}static pattern(o){return Il(o)}static nullValidator(o){return Nr()}static compose(o){return zr(o)}static composeAsync(o){return Ur(o)}};function fl(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e<t?{min:{min:t,actual:o.value}}:null}}function gl(t){return o=>{if(o.value==null||t==null)return null;let e=parseFloat(o.value);return!isNaN(e)&&e>t?{max:{max:t,actual:o.value}}:null}}function bl(t){return Xi(t.value)?{required:!0}:null}function yl(t){return t.value===!0?null:{required:!0}}function _l(t){return Xi(t.value)||ml.test(t.value)?null:{email:!0}}function vl(t){return o=>{let e=o.value?.length??Ji(o.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function Cl(t){return o=>{let e=o.value?.length??Ji(o.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Il(t){if(!t)return Nr;let o,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),o=new RegExp(e)):(e=t.toString(),o=t),n=>{if(Xi(n.value))return null;let i=n.value;return o.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function Nr(t){return null}function Pr(t){return t!=null}function Br(t){return Ao(t)?Co(t):t}function Rr(t){let o={};return t.forEach(e=>{o=e!=null?C(C({},o),e):o}),Object.keys(o).length===0?null:o}function $r(t,o){return o.map(e=>e(t))}function xl(t){return!t.validate}function Hr(t){return t.map(o=>xl(o)?o:e=>o.validate(e))}function zr(t){if(!t)return null;let o=t.filter(Pr);return o.length==0?null:function(e){return Rr($r(e,o))}}function jr(t){return t!=null?zr(Hr(t)):null}function Ur(t){if(!t)return null;let o=t.filter(Pr);return o.length==0?null:function(e){let n=$r(e,o).map(Br);return xo(n).pipe(Io(Rr))}}function Wr(t){return t!=null?Ur(Hr(t)):null}function Tr(t,o){return t===null?[o]:Array.isArray(t)?[...t,o]:[t,o]}function Sl(t){return t._rawValidators}function Tl(t){return t._rawAsyncValidators}function Ki(t){return t?Array.isArray(t)?t:[t]:[]}function ti(t,o){return Array.isArray(t)?t.includes(o):t===o}function Er(t,o){let e=Ki(o);return Ki(t).forEach(i=>{ti(e,i)||e.push(i)}),e}function wr(t,o){return Ki(o).filter(e=>!ti(t,e))}var ni=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=jr(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Wr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},qi=class extends ni{name;get formDirective(){return null}get path(){return null}},Lt=class extends ni{_parent=null;name=null;valueAccessor=null},Zi=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Ff=(()=>{class t extends Zi{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(j(Lt,2))};static \u0275dir=oe({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,i){n&2&&Ci("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[S]})}return t})();var dn="VALID",Jn="INVALID",Kt="PENDING",cn="DISABLED",kt=class{},ii=class extends kt{value;source;constructor(o,e){super(),this.value=o,this.source=e}},un=class extends kt{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},pn=class extends kt{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},qt=class extends kt{status;source;constructor(o,e){super(),this.status=o,this.source=e}};var hn=class extends kt{source;constructor(o){super(),this.source=o}};function eo(t){return(ri(t)?t.validators:t)||null}function El(t){return Array.isArray(t)?jr(t):t||null}function to(t,o){return(ri(o)?o.asyncValidators:t)||null}function wl(t){return Array.isArray(t)?Wr(t):t||null}function ri(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Gr(t,o,e){let n=t.controls;if(!(o?Object.keys(n):n).length)throw new Ln(1e3,"");if(!n[e])throw new Ln(1001,"")}function Kr(t,o,e){t._forEachChild((n,i)=>{if(e[i]===void 0)throw new Ln(-1002,"")})}var Zt=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return We(this.statusReactive)}set status(o){We(()=>this.statusReactive.set(o))}_status=J(()=>this.statusReactive());statusReactive=H(void 0);get valid(){return this.status===dn}get invalid(){return this.status===Jn}get pending(){return this.status===Kt}get disabled(){return this.status===cn}get enabled(){return this.status!==cn}errors;get pristine(){return We(this.pristineReactive)}set pristine(o){We(()=>this.pristineReactive.set(o))}_pristine=J(()=>this.pristineReactive());pristineReactive=H(!0);get dirty(){return!this.pristine}get touched(){return We(this.touchedReactive)}set touched(o){We(()=>this.touchedReactive.set(o))}_touched=J(()=>this.touchedReactive());touchedReactive=H(!1);get untouched(){return!this.touched}_events=new Qe;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(Er(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(Er(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(wr(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(wr(o,this._rawAsyncValidators))}hasValidator(o){return ti(this._rawValidators,o)}hasAsyncValidator(o){return ti(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(me(C({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new pn(!0,n))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:n})}),o.onlySelf||this._parent?._updateTouched(o,n),e&&o.emitEvent!==!1&&this._events.next(new pn(!1,n))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let n=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(me(C({},o),{sourceControl:n})),e&&o.emitEvent!==!1&&this._events.next(new un(!1,n))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,n),e&&o.emitEvent!==!1&&this._events.next(new un(!0,n))}markAsPending(o={}){this.status=Kt;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new qt(this.status,e)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(me(C({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=cn,this.errors=null,this._forEachChild(i=>{i.disable(me(C({},o),{onlySelf:!0}))}),this._updateValue();let n=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ii(this.value,n)),this._events.next(new qt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(me(C({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=dn,this._forEachChild(n=>{n.enable(me(C({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(me(C({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(o,e){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===dn||this.status===Kt)&&this._runAsyncValidator(n,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new ii(this.value,e)),this._events.next(new qt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(me(C({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?cn:dn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=Kt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let n=Br(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,i)=>n&&n._find(i),this)}getError(o,e){let n=e?this.get(e):this;return n?.errors?n.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,n){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||n)&&this._events.next(new qt(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,n)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?cn:this.errors?Jn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Kt)?Kt:this._anyControlsHaveStatus(Jn)?Jn:dn}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let n=!this._anyControlsDirty(),i=this.pristine!==n;this.pristine=n,o.onlySelf||this._parent?._updatePristine(o,e),i&&this._events.next(new un(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new pn(this.touched,e)),o.onlySelf||this._parent?._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){ri(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=El(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=wl(this._rawAsyncValidators)}},oi=class extends Zt{constructor(o,e,n){super(eo(e),to(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,n={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,n={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){Kr(this,!0,o),Object.keys(o).forEach(n=>{Gr(this,!0,n),this.controls[n].setValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(n=>{let i=this.controls[n];i&&i.patchValue(o[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((n,i)=>{n.reset(o?o[i]:null,me(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new hn(this))}getRawValue(){return this._reduceChildren({},(o,e,n)=>(o[n]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&o(n,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&o(n))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,n,i)=>((n.enabled||this.disabled)&&(e[i]=n.value),e))}_reduceChildren(o,e){let n=o;return this._forEachChild((i,r)=>{n=e(n,i,r)}),n}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var Qi=class extends oi{};var no=new z("",{factory:()=>si}),si="always";function Ol(t,o){return[...o.path,t]}function Ml(t,o,e=si){Al(t,o),o.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(t.disabled),Ll(t,o),Fl(t,o),kl(t,o),Dl(t,o)}function Or(t,o){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Dl(t,o){if(o.valueAccessor.setDisabledState){let e=n=>{o.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),o._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Al(t,o){let e=Sl(t);o.validator!==null?t.setValidators(Tr(e,o.validator)):typeof e=="function"&&t.setValidators([e]);let n=Tl(t);o.asyncValidator!==null?t.setAsyncValidators(Tr(n,o.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let i=()=>t.updateValueAndValidity();Or(o._rawValidators,i),Or(o._rawAsyncValidators,i)}function Ll(t,o){o.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&qr(t,o)})}function kl(t,o){o.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&qr(t,o),t.updateOn!=="submit"&&t.markAsTouched()})}function qr(t,o){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Fl(t,o){let e=(n,i)=>{o.valueAccessor.writeValue(n),i&&o.viewToModelUpdate(n)};t.registerOnChange(e),o._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Vl(t,o){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Nl(t){return Object.getPrototypeOf(t.constructor)===Fr}function Pl(t,o){if(!o)return null;Array.isArray(o);let e,n,i;return o.forEach(r=>{r.constructor===Vr?e=r:Nl(r)?n=r:i=r}),i||n||e||null}function Mr(t,o){let e=t.indexOf(o);e>-1&&t.splice(e,1)}function Dr(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ei=class extends Zt{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,n){super(eo(e),to(n,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ri(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Dr(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new hn(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){Mr(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){Mr(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){Dr(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Bl={provide:Lt,useExisting:yt(()=>Rl)},Ar=Promise.resolve(),Rl=(()=>{class t extends Lt{_changeDetectorRef;callSetDisabledState;control=new ei;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new V;constructor(e,n,i,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(i),this.valueAccessor=Pl(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Vl(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Ml(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ar.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,i=n!==0&&T(n);Ar.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Ol(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(j(qi,9),j(pl,10),j(hl,10),j(mn,10),j($t,8),j(no,8))};static \u0275dir=oe({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[U([Bl]),S,kn]})}return t})();var Yi=class extends Zt{constructor(o,e,n){super(eo(e),to(n,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(o){return this.controls[this._adjustIndex(o)]}push(o,e={}){Array.isArray(o)?o.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(o),this._registerControl(o)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(o,e,n={}){this.controls.splice(o,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(o,e={}){let n=this._adjustIndex(o);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(o,e,n={}){let i=this._adjustIndex(o);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(o,e={}){Kr(this,!1,o),o.forEach((n,i)=>{Gr(this,!1,i),this.at(i).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(o.forEach((n,i)=>{this.at(i)&&this.at(i).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o=[],e={}){this._forEachChild((n,i)=>{n.reset(o[i],me(C({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new hn(this))}getRawValue(){return this.controls.map(o=>o.getRawValue())}clear(o={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:o.emitEvent}))}_adjustIndex(o){return o<0?o+this.length:o}_syncPendingControls(){let o=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){this.controls.forEach((e,n)=>{o(e,n)})}_updateValue(){this.value=this.controls.filter(o=>o.enabled||this.disabled).map(o=>o.value)}_anyControls(o){return this.controls.some(e=>e.enabled&&o(e))}_setUpControls(){this._forEachChild(o=>this._registerControl(o))}_allControlsDisabled(){for(let o of this.controls)if(o.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(o){o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)}_find(o){return this.at(o)??null}};var $l=new z("");var Zr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();function Lr(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Nf=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let i=this._reduceControls(e),r={};return Lr(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new oi(i,r)}record(e,n=null){let i=this._reduceControls(e);return new Qi(i,n)}control(e,n,i){let r={};return this.useNonNullable?(Lr(n)?r=n:(r.validators=n,r.asyncValidators=i),new ei(e,me(C({},r),{nonNullable:!0}))):new ei(e,n,i)}array(e,n,i){let r=e.map(s=>this._createControl(s));return new Yi(r,n,i)}_reduceControls(e){let n={};return Object.keys(e).forEach(i=>{n[i]=this._createControl(e[i])}),n}_createControl(e){if(e instanceof ei)return e;if(e instanceof Zt)return e;if(Array.isArray(e)){let n=e[0],i=e.length>1?e[1]:null,r=e.length>2?e[2]:null;return this.control(n,i,r)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Pf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:no,useValue:e.callSetDisabledState??si}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[Zr]})}return t})(),Bf=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:$l,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:no,useValue:e.callSetDisabledState??si}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[Zr]})}return t})();var Qr=(()=>{class t extends q{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),re=new z("PARENT_INSTANCE"),Q=(()=>{class t{document=_(it);platformId=_(rt);el=_(Ye);injector=_(_i);cd=_($t);renderer=_(ht);config=_(Gi);$parentInstance=_(re,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=_(Qr);baseStyle=_(q);scopedStyleEl;parent=this.$params.parent;cn=Ct;_themeScopedListener;themeChangeListenerMap=new Map;dt=v();unstyled=v();pt=v();ptOptions=v();$attrSelector=Pe("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=H(void 0);directiveUnstyled=H(void 0);$unstyled=J(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=J(()=>Ne(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>Ne(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||Ne(e,this.$params))}get $style(){return C(C({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){ce(e=>{this.document&&!wi(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),ce(e=>{this.document&&!wi(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...n){return Bn(e)?e(...n):Ni(...n)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,n="",i={}){return Di(e,n,i)}_hook(e,...n){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...n),r?.(...n)}}_load(){Gt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Gt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);ye(e)&&this.baseStyle.load(e,C({name:"global"},this.$styleOptions))}_loadCoreStyles(){!Gt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Gt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!de.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,C({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(C({name:"global-style"},this.$styleOptions),r),de.setLoadedStyleName("common")}if(!de.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,C({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(C({name:`${this.$style?.name}-style`},this.$styleOptions),n),de.setLoadedStyleName(this.$style?.name)}if(!de.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.$styleOptions)),de.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:n}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(n,C({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,n=()=>{}){this._offThemeChangeListener(e),Gt.clearLoadedStyleNames();let i=n.bind(this);this.themeChangeListenerMap.set(e,i),ze.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(ze.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},n="",i={},r=!0){let s=/./g.test(n)&&!!i[n.split(".")[0]],{mergeSections:a=!0,mergeProps:c=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},u=r?s?this._useGlobalPT(this._getPTClassValue,n,i):this._useDefaultPT(this._getPTClassValue,n,i):void 0,p=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,n,me(C({},i),{global:u||{}})),f=this._getPTDatasets(n);return a||!a&&p?c?this._mergeProps(c,u,p,f):C(C(C({},u),p),f):C(C({},p),f)}_getPTDatasets(e=""){let n="data-pc-",i=e==="root"&&ye(this.$pt()?.["data-pc-section"]);return e!=="transition"&&me(C({},e==="root"&&me(C({[`${n}name`]:It(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${n}extend`]:It(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:It(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,n,i){let r=this._getOptionValue(e,n,i);return on(r)||Bo(r)?{class:r}:r}_getPT(e,n="",i){let r=(s,a=!1)=>{let c=i?i(s):s,u=It(n),p=It(this.$hostName||this.$name);return(a?u!==p?c?.[u]:void 0:c?.[u])??c};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,n,i,r){let s=a=>n?.call(this,a,i,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:c=!1}=e._usept||this.config?.ptOptions()||{},u=s(e.originalValue),p=s(e.value);return u===void 0&&p===void 0?void 0:on(p)?p:on(u)?u:a||!a&&p?c?this._mergeProps(c,u,p):C(C({},u),p):p}return s(e)}_useGlobalPT(e,n,i){return this._usePT(this.$globalPT,e,n,i)}_useDefaultPT(e,n,i){return this._usePT(this.$defaultPT,e,n,i)}ptm(e="",n={}){return this._getPTValue(this.$pt(),e,C(C({},this.$params),n))}ptms(e,n={}){return e.reduce((i,r)=>(i=Ni(i,this.ptm(r,n))||{},i),{})}ptmo(e={},n="",i={}){return this._getPTValue(e,n,C({instance:this},i),!1)}cx(e,n={}){return this.$unstyled()?void 0:Ct(this._getOptionValue(this.$style.classes,e,C(C({},this.$params),n)))}sx(e="",n=!0,i={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,e,C(C({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,C(C({},this.$params),i));return C(C({},s),r)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=oe({type:t,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[U([Qr,q]),kn]})}return t})();var io=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let i=n.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=n.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,i=0;for(var r=0;r<n.length;r++){if(n[r]==e)return i;n[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,n){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[n]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,i="self"){i!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,i="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),i==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,i=!0){let r=ae=>{if(ae)return getComputedStyle(ae).getPropertyValue("position")==="relative"?ae:r(ae.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,c=n.getBoundingClientRect(),u=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),f=this.getViewport(),g=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*p},x,k,w="top";c.top+a+s.height>f.height?(x=c.top-g.top-s.height,w="bottom",c.top+x<0&&(x=-1*c.top)):(x=a+c.top-g.top,w="top");let F=c.left+s.width-f.width,$=c.left-g.left;if(s.width>f.width?k=(c.left-g.left)*-1:F>0?k=$-F:k=c.left-g.left,e.style.top=x+"px",e.style.left=k+"px",e.style.transformOrigin=w,i){let ae=rn(/-anchor-gutter$/)?.value;e.style.marginTop=w==="bottom"?`calc(${ae??"2px"} * -1)`:ae??""}}static absolutePosition(e,n,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,c=n.offsetHeight,u=n.offsetWidth,p=n.getBoundingClientRect(),f=this.getWindowScrollTop(),m=this.getWindowScrollLeft(),g=this.getViewport(),x,k;p.top+c+s>g.height?(x=p.top+f-s,e.style.transformOrigin="bottom",x<0&&(x=f)):(x=c+p.top+f,e.style.transformOrigin="top"),p.left+a>g.width?k=Math.max(0,p.left+m+u-a):k=p.left+m,e.style.top=x+"px",e.style.left=k+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let c=window.getComputedStyle(a,null);return r.test(c.getPropertyValue("overflow"))||r.test(c.getPropertyValue("overflowX"))||r.test(c.getPropertyValue("overflowY"))};for(let a of i){let c=a.nodeType===1&&a.dataset.scrollselectors;if(c){let u=c.split(",");for(let p of u){let f=this.findSingle(a,p);f&&s(f)&&n.push(f)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,c=e.getBoundingClientRect(),p=n.getBoundingClientRect().top+document.body.scrollTop-(c.top+document.body.scrollTop)-r-a,f=e.scrollTop,m=e.clientHeight,g=this.getOuterHeight(n);p<0?e.scrollTop=f+p:p+g>m&&(e.scrollTop=f+p-m+g)}static fadeIn(e,n){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/n,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,n){var i=1,r=50,s=n,a=r/s;let c=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(c)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let i=e.offsetWidth;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static width(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),n}static getOuterHeight(e,n){let i=e.offsetHeight;if(n){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let n=e.offsetHeight,i=getComputedStyle(e);return n-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,i=getComputedStyle(e);return n-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),n}static getViewport(){let e=window,n=document,i=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let i=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,i){e[n].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch(e){}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let i=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let i=this.findSingle(e,this.getFocusableSelectorString(n));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,n=""){let i=this.getFocusableElements(e,n);return i.length>0?i[0]:null}static getLastFocusableElement(e,n){let i=this.getFocusableElements(e,n);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,n=!1){let i=t.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);n?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let i=e.getAttribute(n);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...i),r}}static setAttribute(e,n="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(n,i)}static setAttributes(e,n={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((c,u)=>{if(u!=null){let p=typeof u;if(p==="string"||p==="number")c.push(u);else if(p==="object"){let f=Array.isArray(u)?i(r,u):Object.entries(u).map(([m,g])=>r==="style"&&(g||g===0)?`${m.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?m:void 0);c=f.length?c.concat(f.filter(m=>!!m)):c}}return c},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function eg(){Ro({variableName:Wi("scrollbar.width").name})}function Yr(){$o({variableName:Wi("scrollbar.width").name})}var St=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=io.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var ai=(()=>{class t extends Q{autofocus=!1;focused=!1;platformId=_(rt);document=_(it);host=_(Ye);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ve(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=io.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[S]})}return t})(),dg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var M=(()=>{class t{el;renderer;pBind=v(void 0);_attrs=H(void 0);attrs=J(()=>this._attrs()||this.pBind());styles=J(()=>this.attrs()?.style);classes=J(()=>Ct(this.attrs()?.class));listeners=[];constructor(e,n){this.el=e,this.renderer=n,ce(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=vo(a,["style","class"]);for(let[c,u]of Object.entries(s))if(c.startsWith("on")&&typeof u=="function"){let p=c.slice(2).toLowerCase();if(!this.listeners.some(f=>f.eventName===p)){let f=this.renderer.listen(this.el.nativeElement,p,u);this.listeners.push({eventName:p,unlisten:f})}}else u==null?this.renderer.removeAttribute(this.el.nativeElement,c):(this.renderer.setAttribute(this.el.nativeElement,c,u.toString()),c in this.el.nativeElement&&(this.el.nativeElement[c]=u))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){wt(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(n){return new(n||t)(j(Ye),j(ht))};static \u0275dir=oe({type:t,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,i){n&2&&(Ee(i.styles()),y(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return t})(),he=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var Xr=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Hl=`
    ${Xr}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,zl={root:({instance:t})=>{let o=typeof t.value=="function"?t.value():t.value,e=typeof t.size=="function"?t.size():t.size,n=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,i=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":ye(o)&&String(o).length===1,"p-badge-dot":Xe(o),"p-badge-sm":e==="small"||n==="small","p-badge-lg":e==="large"||n==="large","p-badge-xl":e==="xlarge"||n==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},Jr=(()=>{class t extends q{name="badge";style=Hl;classes=zl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var es=new z("BADGE_INSTANCE");var Ft=(()=>{class t extends Q{componentName="Badge";$pcBadge=_(es,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=v();badgeSize=v();size=v();severity=v();value=v();badgeDisabled=v(!1,{transform:T});_componentStyle=_(Jr);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(n,i){n&2&&(D("data-p",i.dataP),y(i.cn(i.cx("root"),i.styleClass())),Rt("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[U([Jr,{provide:es,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],decls:1,vars:1,template:function(n,i){n&1&&Me(0),n&2&&Re(i.value())},dependencies:[se,te,he],encapsulation:2,changeDetection:0})}return t})(),Tt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[Ft,te,te]})}return t})();var jl=["*"],Ul={root:"p-fluid"},ts=(()=>{class t extends q{name="fluid";classes=Ul;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var ns=new z("FLUID_INSTANCE"),Qt=(()=>{class t extends Q{componentName="Fluid";$pcFluid=_(ns,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=_(ts);static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cx("root"))},features:[U([ts,{provide:ns,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:jl,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},dependencies:[se],encapsulation:2,changeDetection:0})}return t})();var Wl=["*"],Gl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,is=(()=>{class t extends q{name="baseicon";css=Gl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Oe=(()=>{class t extends Q{spin=!1;_componentStyle=_(is);getClassNames(){return Ct("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,i){n&2&&y(i.getClassNames())},inputs:{spin:[2,"spin","spin",T]},features:[U([is]),S],ngContentSelectors:Wl,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},encapsulation:2,changeDetection:0})}return t})();var Kl=["data-p-icon","angle-down"],os=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","angle-down"]],features:[S],attrs:Kl,decls:1,vars:0,consts:[["d","M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var ql=["data-p-icon","angle-right"],rs=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","angle-right"]],features:[S],attrs:ql,decls:1,vars:0,consts:[["d","M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var Zl=["data-p-icon","bars"],ss=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","bars"]],features:[S],attrs:Zl,decls:1,vars:0,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var Ql=["data-p-icon","blank"],as=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","blank"]],features:[S],attrs:Ql,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(n,i){n&1&&(ne(),Ie(0,"rect",0))},encapsulation:2})}return t})();var Yl=["data-p-icon","check"],ls=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","check"]],features:[S],attrs:Yl,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var Xl=["data-p-icon","chevron-down"],ds=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","chevron-down"]],features:[S],attrs:Xl,decls:1,vars:0,consts:[["d","M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var Jl=["data-p-icon","search"],cs=(()=>{class t extends Oe{pathId;onInit(){this.pathId="url(#"+Pe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","search"]],features:[S],attrs:Jl,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),Pt(0,"g"),Ie(1,"path",0),Bt(),Pt(2,"defs")(3,"clipPath",1),Ie(4,"rect",2),Bt()()),n&2&&(D("clip-path",i.pathId),h(3),Vn("id",i.pathId))},encapsulation:2})}return t})();var ed=["data-p-icon","spinner"],li=(()=>{class t extends Oe{pathId;onInit(){this.pathId="url(#"+Pe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","spinner"]],features:[S],attrs:ed,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,i){n&1&&(ne(),Pt(0,"g"),Ie(1,"path",0),Bt(),Pt(2,"defs")(3,"clipPath",1),Ie(4,"rect",2),Bt()()),n&2&&(D("clip-path",i.pathId),h(3),Vn("id",i.pathId))},encapsulation:2})}return t})();var td=["data-p-icon","times"],us=(()=>{class t extends Oe{static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["","data-p-icon","times"]],features:[S],attrs:td,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,i){n&1&&(ne(),Ie(0,"path",0))},encapsulation:2})}return t})();var ps=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var nd=`
    ${ps}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,id={root:"p-ink"},hs=(()=>{class t extends q{name="ripple";style=nd;classes=id;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Et=(()=>{class t extends Q{componentName="Ripple";zone=_(ot);_componentStyle=_(hs);animationListener;mouseDownListener;timeout;constructor(){super(),ce(()=>{ve(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(!this.$unstyled()&&lt(n,"p-ink-active"),n.setAttribute("data-p-ink-active","false"),!ct(n)&&!ut(n)){let a=Math.max($e(this.el.nativeElement),Je(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let i=qo(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-ut(n)/2,s=e.pageY-i.top+this.document.body.scrollLeft-ct(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),!this.$unstyled()&&Ot(n,"p-ink-active"),n.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&lt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&lt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&lt(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Zo(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=oe({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[U([hs]),S]})}return t})(),Db=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var ms=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var od=["content"],rd=["loadingicon"],sd=["icon"],ad=["*"],bs=(t,o)=>({class:t,pt:o});function ld(t,o){t&1&&ie(0)}function dd(t,o){if(t&1&&Z(0,"span",7),t&2){let e=d(3);y(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),l("pBind",e.ptm("loadingIcon")),D("aria-hidden",!0)}}function cd(t,o){if(t&1&&(ne(),Z(0,"svg",8)),t&2){let e=d(3);y(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),l("pBind",e.ptm("loadingIcon"))("spin",!0),D("aria-hidden",!0)}}function ud(t,o){if(t&1&&(Y(0),b(1,dd,1,4,"span",3)(2,cd,1,5,"svg",6),X()),t&2){let e=d(2);h(),l("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),h(),l("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function pd(t,o){}function hd(t,o){if(t&1&&b(0,pd,0,0,"ng-template",9),t&2){let e=d(2);l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function md(t,o){if(t&1&&(Y(0),b(1,ud,3,2,"ng-container",2)(2,hd,1,1,null,5),X()),t&2){let e=d();h(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),h(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",we(3,bs,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function fd(t,o){if(t&1&&Z(0,"span",7),t&2){let e=d(2);y(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),l("pBind",e.ptm("icon")),D("data-p",e.dataIconP)}}function gd(t,o){}function bd(t,o){if(t&1&&b(0,gd,0,0,"ng-template",9),t&2){let e=d(2);l("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function yd(t,o){if(t&1&&(Y(0),b(1,fd,1,4,"span",3)(2,bd,1,1,null,5),X()),t&2){let e=d();h(),l("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),h(),l("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",we(3,bs,e.cx("icon"),e.ptm("icon")))}}function _d(t,o){if(t&1&&(E(0,"span",7),Me(1),O()),t&2){let e=d();y(e.cx("label")),l("pBind",e.ptm("label")),D("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),h(),Re(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function vd(t,o){if(t&1&&Z(0,"p-badge",10),t&2){let e=d();l("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var Cd={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},fs=(()=>{class t extends q{name="button";style=ms;classes=Cd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var gs=new z("BUTTON_INSTANCE");var Id=(()=>{class t extends Q{componentName="Button";hostName="";$pcButton=_(gs,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});_componentStyle=_(fs);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=v(void 0,{transform:T});onClick=new V;onFocus=new V;onBlur=new V;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=_(Qt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-button"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,od,5)(r,rd,5)(r,sd,5)(r,qe,4),n&2){let s;A(s=L())&&(i.contentTemplate=s.first),A(s=L())&&(i.loadingIconTemplate=s.first),A(s=L())&&(i.iconTemplate=s.first),A(s=L())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",T],raised:[2,"raised","raised",T],rounded:[2,"rounded","rounded",T],text:[2,"text","text",T],plain:[2,"plain","plain",T],outlined:[2,"outlined","outlined",T],link:[2,"link","link",T],tabindex:[2,"tabindex","tabindex",Se],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",T],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",T],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[U([fs,{provide:gs,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:ad,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(n,i){n&1&&(fe(),E(0,"button",0),K("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),pe(1),b(2,ld,1,0,"ng-container",1)(3,md,3,6,"ng-container",2)(4,yd,3,6,"ng-container",2)(5,_d,2,6,"span",3)(6,vd,1,4,"p-badge",4),O()),n&2&&(y(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),l("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),D("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),h(2),l("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),h(),l("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),h(),l("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),h(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),h(),l("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[se,Fe,Ve,Ge,Et,ai,li,Tt,Ft,te,M],encapsulation:2,changeDetection:0})}return t})(),i0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[se,Id,te,te]})}return t})();var Vt=class t{static isArray(o,e=!0){return Array.isArray(o)&&(e||o.length!==0)}static isObject(o,e=!0){return typeof o=="object"&&!Array.isArray(o)&&o!=null&&(e||Object.keys(o).length!==0)}static equals(o,e,n){return n?this.resolveFieldData(o,n)===this.resolveFieldData(e,n):this.equalsByValue(o,e)}static equalsByValue(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,a;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var c=this.isDate(o),u=this.isDate(e);if(c!=u)return!1;if(c&&u)return o.getTime()==e.getTime();var p=o instanceof RegExp,f=e instanceof RegExp;if(p!=f)return!1;if(p&&f)return o.toString()==e.toString();var m=Object.keys(o);if(s=m.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,m[r]))return!1;for(r=s;r--!==0;)if(a=m[r],!this.equalsByValue(o[a],e[a]))return!1;return!0}return o!==o&&e!==e}static resolveFieldData(o,e){if(o&&e){if(this.isFunction(e))return e(o);if(e.indexOf(".")==-1)return o[e];{let n=e.split("."),i=o;for(let r=0,s=n.length;r<s;++r){if(i==null)return null;i=i[n[r]]}return i}}else return null}static isFunction(o){return!!(o&&o.constructor&&o.call&&o.apply)}static reorderArray(o,e,n){let i;o&&e!==n&&(n>=o.length&&(n%=o.length,e%=o.length),o.splice(n,0,o.splice(e,1)[0]))}static insertIntoOrderedArray(o,e,n,i){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],i)>e){n.splice(s,0,o),r=!0;break}r||n.push(o)}else n.push(o)}static findIndexInList(o,e){let n=-1;if(e){for(let i=0;i<e.length;i++)if(e[i]==o){n=i;break}}return n}static contains(o,e){if(o!=null&&e&&e.length){for(let n of e)if(this.equals(o,n))return!0}return!1}static removeAccents(o){return o&&(o=o.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),o}static isDate(o){return Object.prototype.toString.call(o)==="[object Date]"}static isEmpty(o){return o==null||o===""||Array.isArray(o)&&o.length===0||!this.isDate(o)&&typeof o=="object"&&Object.keys(o).length===0}static isNotEmpty(o){return!this.isEmpty(o)}static compare(o,e,n,i=1){let r=-1,s=this.isEmpty(o),a=this.isEmpty(e);return s&&a?r=0:s?r=i:a?r=-i:typeof o=="string"&&typeof e=="string"?r=o.localeCompare(e,n,{numeric:!0}):r=o<e?-1:o>e?1:0,r}static sort(o,e,n=1,i,r=1){let s=t.compare(o,e,i,n),a=n;return(t.isEmpty(o)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(o,e){if(!(o==null&&e==null)){{if((o==null||typeof o=="object")&&(e==null||typeof e=="object"))return C(C({},o||{}),e||{});if((o==null||typeof o=="string")&&(e==null||typeof e=="string"))return[o||"",e||""].join(" ")}return e||o}}static isPrintableCharacter(o=""){return this.isNotEmpty(o)&&o.length===1&&o.match(/\S| /)}static getItemValue(o,...e){return this.isFunction(o)?o(...e):o}static findLastIndex(o,e){let n=-1;if(this.isNotEmpty(o))try{n=o.findLastIndex(e)}catch(i){n=o.lastIndexOf([...o].reverse().find(e))}return n}static findLast(o,e){let n;if(this.isNotEmpty(o))try{n=o.findLast(e)}catch(i){n=[...o].reverse().find(e)}return n}static deepEquals(o,e){if(o===e)return!0;if(o&&e&&typeof o=="object"&&typeof e=="object"){var n=Array.isArray(o),i=Array.isArray(e),r,s,a;if(n&&i){if(s=o.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(o[r],e[r]))return!1;return!0}if(n!=i)return!1;var c=o instanceof Date,u=e instanceof Date;if(c!=u)return!1;if(c&&u)return o.getTime()==e.getTime();var p=o instanceof RegExp,f=e instanceof RegExp;if(p!=f)return!1;if(p&&f)return o.toString()==e.toString();var m=Object.keys(o);if(s=m.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,m[r]))return!1;for(r=s;r--!==0;)if(a=m[r],!this.deepEquals(o[a],e[a]))return!1;return!0}return o!==o&&e!==e}static minifyCSS(o){return o&&o.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(o){return this.isString(o)?o.replace(/(-|_)/g,"").toLowerCase():o}static isString(o,e=!0){return typeof o=="string"&&(e||o!=="")}},ys=0;function s0(t="pn_id_"){return ys++,`${t}${ys}`}function xd(){let t=[],o=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},c=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:c}),c},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,i=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:i,set:(r,s,a)=>{s&&(s.style.zIndex=String(o(r,a)))},clear:r=>{r&&(e(i(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:o,revertZIndex:e}}var Be=xd(),a0=t=>!!t;var _s=`
    .p-tooltip {
        position: absolute;
        display: none;
        max-width: dt('tooltip.max.width');
    }

    .p-tooltip-right,
    .p-tooltip-left {
        padding: 0 dt('tooltip.gutter');
    }

    .p-tooltip-top,
    .p-tooltip-bottom {
        padding: dt('tooltip.gutter') 0;
    }

    .p-tooltip-text {
        white-space: pre-line;
        word-break: break-word;
        background: dt('tooltip.background');
        color: dt('tooltip.color');
        padding: dt('tooltip.padding');
        box-shadow: dt('tooltip.shadow');
        border-radius: dt('tooltip.border.radius');
    }

    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }

    .p-tooltip-right .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;
        border-right-color: dt('tooltip.background');
    }

    .p-tooltip-left .p-tooltip-arrow {
        margin-top: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');
        border-left-color: dt('tooltip.background');
    }

    .p-tooltip-top .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }

    .p-tooltip-bottom .p-tooltip-arrow {
        margin-left: calc(-1 * dt('tooltip.gutter'));
        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');
        border-top-color: dt('tooltip.background');
        border-bottom-color: dt('tooltip.background');
    }
`;var Sd={root:"p-tooltip p-component",arrow:"p-tooltip-arrow",text:"p-tooltip-text"},vs=(()=>{class t extends q{name="tooltip";style=_s;classes=Sd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Cs=new z("TOOLTIP_INSTANCE"),Yt=(()=>{class t extends Q{zone;viewContainer;componentName="Tooltip";$pcTooltip=_(Cs,{optional:!0,skipSelf:!0})??void 0;tooltipPosition;tooltipEvent="hover";positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;showOnEllipsis=!1;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;appendTo=v(void 0);$appendTo=J(()=>this.appendTo()||this.config.overlayAppendTo());_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,showOnEllipsis:!1,id:Pe("pn_id_")+"_tooltip"};_disabled;container;styleClass;tooltipText;rootPTClasses="";showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;touchStartListener;touchEndListener;documentTouchListener;documentEscapeListener;scrollHandler;resizeListener;_componentStyle=_(vs);interactionInProgress=!1;ptTooltip=v();pTooltipPT=v();pTooltipUnstyled=v();constructor(e,n){super(),this.zone=e,this.viewContainer=n,ce(()=>{let i=this.ptTooltip()||this.pTooltipPT();i&&this.directivePT.set(i)}),ce(()=>{this.pTooltipUnstyled()&&this.directiveUnstyled.set(this.pTooltipUnstyled())})}onAfterViewInit(){ve(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.touchStartListener=this.onTouchStart.bind(this),this.touchEndListener=this.onTouchEnd.bind(this),this.el.nativeElement.addEventListener("touchstart",this.touchStartListener,{passive:!0}),this.el.nativeElement.addEventListener("touchend",this.touchEndListener,{passive:!0})),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.addEventListener("focus",this.focusListener),n.addEventListener("blur",this.blurListener)}})}onChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.showOnEllipsis&&this.setOption({showOnEllipsis:e.showOnEllipsis.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=C(C({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(Dt(e.relatedTarget,"p-tooltip")||Dt(e.relatedTarget,"p-tooltip-text")||Dt(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onTouchStart(e){!this.container&&!this.showTimeout&&(this.activate(),this.isAutoHide()||this.bindDocumentTouchListener())}onTouchEnd(e){this.isAutoHide()&&this.deactivate()}bindDocumentTouchListener(){this.documentTouchListener||(this.documentTouchListener=this.renderer.listen("document","touchstart",e=>{this.container&&!this.container.contains(e.target)&&!this.el.nativeElement.contains(e.target)&&(this.deactivate(),this.unbindDocumentTouchListener())}))}unbindDocumentTouchListener(){this.documentTouchListener&&(this.documentTouchListener(),this.documentTouchListener=null)}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}hasEllipsis(){let e=this.el.nativeElement;return e.offsetWidth<e.scrollWidth||e.offsetHeight<e.scrollHeight}activate(){if(!this.interactionInProgress){if(this.getOption("showOnEllipsis")&&!this.hasEllipsis())return;if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener?.()})),this.interactionInProgress=!0}}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=sn("div",{class:this.cx("root"),"p-bind":this.ptm("root"),"data-pc-section":"root"}),this.container.setAttribute("role","tooltip");let e=sn("div",{class:this.cx("arrow"),"p-bind":this.ptm("arrow"),"data-pc-section":"arrow"});this.container.appendChild(e),this.tooltipText=sn("div",{class:this.cx("text"),"p-bind":this.ptm("text"),"data-pc-section":"text"}),this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?dt(this.container,this.el.nativeElement):dt(this.getOption("appendTo"),this.container),this.container.style.display="none",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",n=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&(this.container.style.display="inline-block"),this.container&&this.align()},100):(this.container.style.display="inline-block",this.align()),Wo(this.container,250),this.getOption("tooltipZIndex")==="auto"?Be.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&Be.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e&&typeof e.createEmbeddedView=="function"){let n=this.viewContainer.createEmbeddedView(e);n.detectChanges(),n.rootNodes.forEach(i=>this.tooltipText.appendChild(i))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){let e=this.getOption("tooltipPosition"),i={top:[this.alignTop,this.alignBottom,this.alignRight,this.alignLeft],bottom:[this.alignBottom,this.alignTop,this.alignRight,this.alignLeft],left:[this.alignLeft,this.alignRight,this.alignTop,this.alignBottom],right:[this.alignRight,this.alignLeft,this.alignTop,this.alignBottom]}[e]||[];for(let[r,s]of i.entries())if(r===0)s.call(this);else if(this.isOutOfBounds())s.call(this);else break}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),n=e.left+Li(),i=e.top+ki();return{left:n,top:i}}else return{left:0,top:0}}get activeElement(){return this.el.nativeElement.nodeName.startsWith("P-")?Ce(this.el.nativeElement,".p-component"):this.el.nativeElement}alignRight(){this.preAlign("right");let e=this.activeElement,n=$e(e),i=(Je(e)-Je(this.container))/2;this.alignTooltip(n,i);let r=this.getArrowElement();r.style.top="50%",r.style.right=null,r.style.bottom=null,r.style.left="0"}alignLeft(){this.preAlign("left");let e=this.getArrowElement(),n=$e(this.container),i=(Je(this.el.nativeElement)-Je(this.container))/2;this.alignTooltip(-n,i),e.style.top="50%",e.style.right="0",e.style.bottom=null,e.style.left=null}alignTop(){this.preAlign("top");let e=this.getArrowElement(),n=this.getHostOffset(),i=$e(this.container),r=($e(this.el.nativeElement)-$e(this.container))/2,s=Je(this.container);this.alignTooltip(r,-s);let a=n.left-this.getHostOffset().left+i/2;e.style.top=null,e.style.right=null,e.style.bottom="0",e.style.left=a+"px"}getArrowElement(){return Ce(this.container,'[data-pc-section="arrow"]')}alignBottom(){this.preAlign("bottom");let e=this.getArrowElement(),n=$e(this.container),i=this.getHostOffset(),r=($e(this.el.nativeElement)-$e(this.container))/2,s=Je(this.el.nativeElement);this.alignTooltip(r,s);let a=i.left-this.getHostOffset().left+n/2;e.style.top="0",e.style.right=null,e.style.bottom=null,e.style.left=a+"px"}alignTooltip(e,n){let i=this.getHostOffset(),r=i.left+e,s=i.top+n;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=C(C({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return Dt(e,"p-inputwrapper")?Ce(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px",this.container.className=this.cn(this.cx("root"),this.ptm("root")?.class,"p-tooltip-"+e,this.getOption("tooltipStyleClass"))}isOutOfBounds(){let e=this.container.getBoundingClientRect(),n=e.top,i=e.left,r=$e(this.container),s=Je(this.container),a=zn();return i+r>a.width||i<0||n<0||n+s>a.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener),this.el.nativeElement.removeEventListener("touchstart",this.touchStartListener),this.el.nativeElement.removeEventListener("touchend",this.touchEndListener),this.unbindDocumentTouchListener()),e==="focus"||e==="both"){let n=this.el.nativeElement.querySelector(".p-component");n||(n=this.getTarget(this.el.nativeElement)),n.removeEventListener("focus",this.focusListener),n.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):Qo(this.getOption("appendTo"),this.container)),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.unbindDocumentTouchListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}onDestroy(){this.unbindEvents(),this.container&&Be.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(n){return new(n||t)(j(ot),j(Mo))};static \u0275dir=oe({type:t,selectors:[["","pTooltip",""]],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",T],showDelay:[2,"showDelay","showDelay",Se],hideDelay:[2,"hideDelay","hideDelay",Se],life:[2,"life","life",Se],positionTop:[2,"positionTop","positionTop",Se],positionLeft:[2,"positionLeft","positionLeft",Se],autoHide:[2,"autoHide","autoHide",T],fitContent:[2,"fitContent","fitContent",T],hideOnEscape:[2,"hideOnEscape","hideOnEscape",T],showOnEllipsis:[2,"showOnEllipsis","showOnEllipsis",T],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions",appendTo:[1,"appendTo"],ptTooltip:[1,"ptTooltip"],pTooltipPT:[1,"pTooltipPT"],pTooltipUnstyled:[1,"pTooltipUnstyled"]},features:[U([vs,{provide:Cs,useExisting:t},{provide:re,useExisting:t}]),S]})}return t})(),Xt=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[he,he]})}return t})();var di=(()=>{class t extends Q{modelValue=H(void 0);$filled=J(()=>ye(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,features:[S]})}return t})();var xs=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Td=`
    ${xs}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Ed={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Ss=(()=>{class t extends q{name="inputtext";style=Td;classes=Ed;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ts=new z("INPUTTEXT_INSTANCE"),Es=(()=>{class t extends di{componentName="InputText";hostName="";ptInputText=v();pInputTextPT=v();pInputTextUnstyled=v();bindDirectiveInstance=_(M,{self:!0});$pcInputText=_(Ts,{optional:!0,skipSelf:!0})??void 0;ngControl=_(Lt,{optional:!0,self:!0});pcFluid=_(Qt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=v();fluid=v(void 0,{transform:T});invalid=v(void 0,{transform:T});$variant=J(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=_(Ss);constructor(){super(),ce(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),ce(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=oe({type:t,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(n,i){n&1&&K("input",function(){return i.onInput()}),n&2&&(D("data-p",i.dataP),y(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[U([Ss,{provide:Ts,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S]})}return t})(),U0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var ws=(()=>{class t extends di{required=v(void 0,{transform:T});invalid=v(void 0,{transform:T});disabled=v(void 0,{transform:T});name=v();_disabled=H(!1);$disabled=J(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[S]})}return t})();var Os=(()=>{class t extends ws{pcFluid=_(Qt,{optional:!0,host:!0,skipSelf:!0});fluid=v(void 0,{transform:T});variant=v();size=v();inputSize=v();pattern=v();min=v();max=v();step=v();minlength=v();maxlength=v();$variant=J(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275dir=oe({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[S]})}return t})();var Ms=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var wd=["*"],Od={root:({instance:t})=>["p-iconfield",{"p-iconfield-left":t.iconPosition=="left","p-iconfield-right":t.iconPosition=="right"}]},Ds=(()=>{class t extends q{name="iconfield";style=Ms;classes=Od;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var As=new z("ICONFIELD_INSTANCE"),ro=(()=>{class t extends Q{componentName="IconField";hostName="";_componentStyle=_(Ds);$pcIconField=_(As,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[U([Ds,{provide:As,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:wd,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},dependencies:[se,he],encapsulation:2,changeDetection:0})}return t})(),my=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ro]})}return t})();var Md=["*"],Dd={root:"p-inputicon"},Ls=(()=>{class t extends q{name="inputicon";classes=Dd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),ks=new z("INPUTICON_INSTANCE"),so=(()=>{class t extends Q{componentName="InputIcon";hostName="";styleClass;_componentStyle=_(Ls);$pcInputIcon=_(ks,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[U([Ls,{provide:ks,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:Md,decls:1,vars:0,template:function(n,i){n&1&&(fe(),pe(0))},dependencies:[se,te,he],encapsulation:2,changeDetection:0})}return t})(),Oy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[so,te,te]})}return t})();var Ad=Object.defineProperty,Fs=Object.getOwnPropertySymbols,Ld=Object.prototype.hasOwnProperty,kd=Object.prototype.propertyIsEnumerable,Vs=(t,o,e)=>o in t?Ad(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,Ns=(t,o)=>{for(var e in o||(o={}))Ld.call(o,e)&&Vs(t,e,o[e]);if(Fs)for(var e of Fs(o))kd.call(o,e)&&Vs(t,e,o[e]);return t},Fd=(t,o,e)=>new Promise((n,i)=>{var r=c=>{try{a(e.next(c))}catch(u){i(u)}},s=c=>{try{a(e.throw(c))}catch(u){i(u)}},a=c=>c.done?n(c.value):Promise.resolve(c.value).then(r,s);a((e=e.apply(t,o)).next())}),ci="animation",gn="transition";function Vd(t){return t?t.disabled||!!(t.safe&&pr()):!1}function Nd(t,o){return t?Ns(Ns({},t),Object.entries(o).reduce((e,[n,i])=>{var r;return e[n]=(r=t[n])!=null?r:i,e},{})):o}function Pd(t){let{name:o,enterClass:e,leaveClass:n}=t||{};return{enter:{from:e?.from||`${o}-enter-from`,to:e?.to||`${o}-enter-to`,active:e?.active||`${o}-enter-active`},leave:{from:n?.from||`${o}-leave-from`,to:n?.to||`${o}-leave-to`,active:n?.active||`${o}-leave-active`}}}function Bd(t){return{enter:{onBefore:t?.onBeforeEnter,onStart:t?.onEnter,onAfter:t?.onAfterEnter,onCancelled:t?.onEnterCancelled},leave:{onBefore:t?.onBeforeLeave,onStart:t?.onLeave,onAfter:t?.onAfterLeave,onCancelled:t?.onLeaveCancelled}}}function Rd(t,o){let e=window.getComputedStyle(t),n=g=>{let x=e[`${g}Delay`],k=e[`${g}Duration`];return[x.split(", ").map(Ri),k.split(", ").map(Ri)]},[i,r]=n(gn),[s,a]=n(ci),c=Math.max(...r.map((g,x)=>g+i[x])),u=Math.max(...a.map((g,x)=>g+s[x])),p,f=0,m=0;return o===gn?c>0&&(p=gn,f=c,m=r.length):o===ci?u>0&&(p=ci,f=u,m=a.length):(f=Math.max(c,u),p=f>0?c>u?gn:ci:void 0,m=p?p===gn?r.length:a.length:0),{type:p,timeout:f,count:m}}function ui(t,o){return typeof t=="number"?t:typeof t=="object"&&t[o]!=null?t[o]:null}function $d(t,o=!0,e=!1){if(!o&&!e)return;let n=ur(t);o&&Hi(t,"--pui-motion-height",n.height+"px"),e&&Hi(t,"--pui-motion-width",n.width+"px")}var Hd={name:"p",safe:!0,disabled:!1,enter:!0,leave:!0,autoHeight:!0,autoWidth:!1};function ao(t,o){if(!t)throw new Error("Element is required.");let e={},n=!1,i={},r=null,s={},a=p=>{if(Object.assign(e,Nd(p,Hd)),!e.enter&&!e.leave)throw new Error("Enter or leave must be true.");s=Bd(e),n=Vd(e),i=Pd(e),r=null},c=p=>Fd(null,null,function*(){r?.();let{onBefore:f,onStart:m,onAfter:g,onCancelled:x}=s[p]||{},k={element:t};if(n){f?.(k),m?.(k),g?.(k);return}let{from:w,active:F,to:$}=i[p]||{};return $d(t,e.autoHeight,e.autoWidth),f?.(k),Yn(t,w),Yn(t,F),t.offsetHeight,$i(t,w),Yn(t,$),m?.(k),new Promise(ae=>{let Le=ui(e.duration,p),ke=()=>{$i(t,[$,F]),r=null},Ze=()=>{ke(),g?.(k),ae()};r=()=>{ke(),x?.(k),ae()},jd(t,e.type,Le,Ze)})});a(o);let u={enter:()=>e.enter?c("enter"):Promise.resolve(),leave:()=>e.leave?c("leave"):Promise.resolve(),cancel:()=>{r?.(),r=null},update:(p,f)=>{if(!p)throw new Error("Element is required.");t=p,u.cancel(),a(f)}};return e.appear&&u.enter(),u}var zd=0;function jd(t,o,e,n){let i=t._motionEndId=++zd,r=()=>{i===t._motionEndId&&n()};if(e!=null)return setTimeout(r,e);let{type:s,timeout:a,count:c}=Rd(t,o);if(!s){n();return}let u=s+"end",p=0,f=()=>{t.removeEventListener(u,m,!0),r()},m=g=>{g.target===t&&++p>=c&&f()};t.addEventListener(u,m,{capture:!0,once:!0}),setTimeout(()=>{p<c&&f()},a+1)}var Ud=["*"];function Wd(t,o){t&1&&pe(0)}var pi=new WeakMap;function bn(t,o){if(t)switch(pi.has(t)||pi.set(t,{display:t.style.display,visibility:t.style.visibility,maxHeight:t.style.maxHeight,overflow:t.style.overflow}),o){case"display":t.style.display="none";break;case"visibility":t.style.visibility="hidden",t.style.maxHeight="0",t.style.overflow="hidden";break}}function hi(t,o){if(!t)return;let e=pi.get(t)??t.style;switch(o){case"display":t.style.display=e?.display||"";break;case"visibility":t.style.visibility=e?.visibility||"",t.style.maxHeight=e?.maxHeight||"",t.style.overflow=e?.overflow||"";break}pi.delete(t)}var Gd=`
    .p-motion {
        display: block;
    }
`,Kd={root:"p-motion"},lo=(()=>{class t extends q{name="motion";style=Gd;classes=Kd;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Ps=new z("MOTION_INSTANCE"),co=(()=>{class t extends Q{$pcMotion=_(Ps,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){let n=this.options()?.root||{};this.bindDirectiveInstance.setAttrs(C(C({},this.ptms(["host","root"])),n))}_componentStyle=_(lo);visible=v(!1);mountOnEnter=v(!0);unmountOnLeave=v(!0);name=v(void 0);type=v(void 0);safe=v(void 0);disabled=v(!1);appear=v(!1);enter=v(!0);leave=v(!0);duration=v(void 0);hideStrategy=v("display");enterFromClass=v(void 0);enterToClass=v(void 0);enterActiveClass=v(void 0);leaveFromClass=v(void 0);leaveToClass=v(void 0);leaveActiveClass=v(void 0);options=v({});onBeforeEnter=De();onEnter=De();onAfterEnter=De();onEnterCancelled=De();onBeforeLeave=De();onLeave=De();onAfterLeave=De();onLeaveCancelled=De();motionOptions=J(()=>{let e=this.options();return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;rendered=H(!1);handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ce(()=>{let e=this.hideStrategy();this.isInitialMount?(bn(this.$el,e),this.rendered.set(this.visible()&&this.mountOnEnter()||!this.mountOnEnter())):this.visible()&&!this.rendered()&&(bn(this.$el,e),this.rendered.set(!0))}),ce(()=>{this.motion||(this.motion=ao(this.$el,this.motionOptions()))}),Ti(()=>yi(this,null,function*(){if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(yield Gn(),hi(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount||(yield Gn(),this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>yi(this,null,function*(){this.$el&&!this.cancelled&&!this.visible()&&(bn(this.$el,n),this.unmountOnLeave()&&(yield Gn(),this.cancelled||this.rendered.set(!1)))}))),this.isInitialMount=!1}))}applyMotionDuration(e){let n=We(this.motionOptions),i=ui(n.duration,e);if(i==null||!this.$el)return;let r=this.$el,s=`${i}ms`;n.type==="transition"?r.style.transitionDuration=s:r.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,hi(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=N({type:t,selectors:[["p-motion"]],hostVars:2,hostBindings:function(n,i){n&2&&y(i.cx("root"))},inputs:{visible:[1,"visible"],mountOnEnter:[1,"mountOnEnter"],unmountOnLeave:[1,"unmountOnLeave"],name:[1,"name"],type:[1,"type"],safe:[1,"safe"],disabled:[1,"disabled"],appear:[1,"appear"],enter:[1,"enter"],leave:[1,"leave"],duration:[1,"duration"],hideStrategy:[1,"hideStrategy"],enterFromClass:[1,"enterFromClass"],enterToClass:[1,"enterToClass"],enterActiveClass:[1,"enterActiveClass"],leaveFromClass:[1,"leaveFromClass"],leaveToClass:[1,"leaveToClass"],leaveActiveClass:[1,"leaveActiveClass"],options:[1,"options"]},outputs:{onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onEnterCancelled:"onEnterCancelled",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave",onLeaveCancelled:"onLeaveCancelled"},features:[U([lo,{provide:Ps,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:Ud,decls:1,vars:1,template:function(n,i){n&1&&(fe(),mt(0,Wd,1,0)),n&2&&ft(i.rendered()?0:-1)},dependencies:[se,he],encapsulation:2})}return t})(),Bs=new z("MOTION_DIRECTIVE_INSTANCE"),Rs=(()=>{class t extends Q{$pcMotionDirective=_(Bs,{optional:!0,skipSelf:!0})??void 0;visible=v(!1,{alias:"pMotion"});name=v(void 0,{alias:"pMotionName"});type=v(void 0,{alias:"pMotionType"});safe=v(void 0,{alias:"pMotionSafe"});disabled=v(!1,{alias:"pMotionDisabled"});appear=v(!1,{alias:"pMotionAppear"});enter=v(!0,{alias:"pMotionEnter"});leave=v(!0,{alias:"pMotionLeave"});duration=v(void 0,{alias:"pMotionDuration"});hideStrategy=v("display",{alias:"pMotionHideStrategy"});enterFromClass=v(void 0,{alias:"pMotionEnterFromClass"});enterToClass=v(void 0,{alias:"pMotionEnterToClass"});enterActiveClass=v(void 0,{alias:"pMotionEnterActiveClass"});leaveFromClass=v(void 0,{alias:"pMotionLeaveFromClass"});leaveToClass=v(void 0,{alias:"pMotionLeaveToClass"});leaveActiveClass=v(void 0,{alias:"pMotionLeaveActiveClass"});options=v({},{alias:"pMotionOptions"});onBeforeEnter=De({alias:"pMotionOnBeforeEnter"});onEnter=De({alias:"pMotionOnEnter"});onAfterEnter=De({alias:"pMotionOnAfterEnter"});onEnterCancelled=De({alias:"pMotionOnEnterCancelled"});onBeforeLeave=De({alias:"pMotionOnBeforeLeave"});onLeave=De({alias:"pMotionOnLeave"});onAfterLeave=De({alias:"pMotionOnAfterLeave"});onLeaveCancelled=De({alias:"pMotionOnLeaveCancelled"});motionOptions=J(()=>{let e=this.options()??{};return{name:e.name??this.name(),type:e.type??this.type(),safe:e.safe??this.safe(),disabled:e.disabled??this.disabled(),appear:!1,enter:e.enter??this.enter(),leave:e.leave??this.leave(),duration:e.duration??this.duration(),enterClass:{from:e.enterClass?.from??(e.name?void 0:this.enterFromClass()),to:e.enterClass?.to??(e.name?void 0:this.enterToClass()),active:e.enterClass?.active??(e.name?void 0:this.enterActiveClass())},leaveClass:{from:e.leaveClass?.from??(e.name?void 0:this.leaveFromClass()),to:e.leaveClass?.to??(e.name?void 0:this.leaveToClass()),active:e.leaveClass?.active??(e.name?void 0:this.leaveActiveClass())},onBeforeEnter:e.onBeforeEnter??this.handleBeforeEnter,onEnter:e.onEnter??this.handleEnter,onAfterEnter:e.onAfterEnter??this.handleAfterEnter,onEnterCancelled:e.onEnterCancelled??this.handleEnterCancelled,onBeforeLeave:e.onBeforeLeave??this.handleBeforeLeave,onLeave:e.onLeave??this.handleLeave,onAfterLeave:e.onAfterLeave??this.handleAfterLeave,onLeaveCancelled:e.onLeaveCancelled??this.handleLeaveCancelled}});motion;isInitialMount=!0;cancelled=!1;destroyed=!1;handleBeforeEnter=e=>!this.destroyed&&this.onBeforeEnter.emit(e);handleEnter=e=>!this.destroyed&&this.onEnter.emit(e);handleAfterEnter=e=>!this.destroyed&&this.onAfterEnter.emit(e);handleEnterCancelled=e=>!this.destroyed&&this.onEnterCancelled.emit(e);handleBeforeLeave=e=>!this.destroyed&&this.onBeforeLeave.emit(e);handleLeave=e=>!this.destroyed&&this.onLeave.emit(e);handleAfterLeave=e=>!this.destroyed&&this.onAfterLeave.emit(e);handleLeaveCancelled=e=>!this.destroyed&&this.onLeaveCancelled.emit(e);constructor(){super(),ce(()=>{this.motion||(this.motion=ao(this.$el,this.motionOptions()))}),Ti(()=>{if(!this.$el)return;let e=this.isInitialMount&&this.visible()&&this.appear(),n=this.hideStrategy();this.visible()?(hi(this.$el,n),(e||!this.isInitialMount)&&(this.applyMotionDuration("enter"),this.motion?.enter())):this.isInitialMount?bn(this.$el,n):(this.applyMotionDuration("leave"),this.motion?.leave()?.then(()=>{this.$el&&!this.cancelled&&!this.visible()&&bn(this.$el,n)})),this.isInitialMount=!1})}applyMotionDuration(e){let n=We(this.motionOptions),i=ui(n.duration,e);if(i==null||!this.$el)return;let r=this.$el,s=`${i}ms`;n.type==="transition"?r.style.transitionDuration=s:r.style.animationDuration=s}onDestroy(){this.destroyed=!0,this.cancelled=!0,this.motion?.cancel(),this.motion=void 0,hi(this.$el,this.hideStrategy()),this.$el?.remove(),this.isInitialMount=!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=oe({type:t,selectors:[["","pMotion",""]],inputs:{visible:[1,"pMotion","visible"],name:[1,"pMotionName","name"],type:[1,"pMotionType","type"],safe:[1,"pMotionSafe","safe"],disabled:[1,"pMotionDisabled","disabled"],appear:[1,"pMotionAppear","appear"],enter:[1,"pMotionEnter","enter"],leave:[1,"pMotionLeave","leave"],duration:[1,"pMotionDuration","duration"],hideStrategy:[1,"pMotionHideStrategy","hideStrategy"],enterFromClass:[1,"pMotionEnterFromClass","enterFromClass"],enterToClass:[1,"pMotionEnterToClass","enterToClass"],enterActiveClass:[1,"pMotionEnterActiveClass","enterActiveClass"],leaveFromClass:[1,"pMotionLeaveFromClass","leaveFromClass"],leaveToClass:[1,"pMotionLeaveToClass","leaveToClass"],leaveActiveClass:[1,"pMotionLeaveActiveClass","leaveActiveClass"],options:[1,"pMotionOptions","options"]},outputs:{onBeforeEnter:"pMotionOnBeforeEnter",onEnter:"pMotionOnEnter",onAfterEnter:"pMotionOnAfterEnter",onEnterCancelled:"pMotionOnEnterCancelled",onBeforeLeave:"pMotionOnBeforeLeave",onLeave:"pMotionOnLeave",onAfterLeave:"pMotionOnAfterLeave",onLeaveCancelled:"pMotionOnLeaveCancelled"},features:[U([lo,{provide:Bs,useExisting:t},{provide:re,useExisting:t}]),S]})}return t})(),mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[co]})}return t})();var Hs=["content"],qd=["overlay"],zs=["*","*"],Zd=()=>({mode:null}),Ws=t=>({$implicit:t}),Qd=t=>({mode:t});function Yd(t,o){t&1&&ie(0)}function Xd(t,o){if(t&1&&(pe(0),b(1,Yd,1,0,"ng-container",3)),t&2){let e=d();h(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",le(3,Ws,st(2,Zd)))}}function Jd(t,o){t&1&&ie(0)}function ec(t,o){if(t&1){let e=be();E(0,"div",5,0),K("click",function(){B(e);let i=d(2);return R(i.onOverlayClick())}),E(2,"p-motion",6),K("onBeforeEnter",function(i){B(e);let r=d(2);return R(r.onOverlayBeforeEnter(i))})("onEnter",function(i){B(e);let r=d(2);return R(r.onOverlayEnter(i))})("onAfterEnter",function(i){B(e);let r=d(2);return R(r.onOverlayAfterEnter(i))})("onBeforeLeave",function(i){B(e);let r=d(2);return R(r.onOverlayBeforeLeave(i))})("onLeave",function(i){B(e);let r=d(2);return R(r.onOverlayLeave(i))})("onAfterLeave",function(i){B(e);let r=d(2);return R(r.onOverlayAfterLeave(i))}),E(3,"div",5,1),K("click",function(i){B(e);let r=d(2);return R(r.onOverlayContentClick(i))}),pe(5,1),b(6,Jd,1,0,"ng-container",3),O()()()}if(t&2){let e=d(2);Ee(e.sx("root")),y(e.cn(e.cx("root"),e.styleClass)),l("pBind",e.ptm("root")),h(2),l("visible",e.visible)("appear",!0)("options",e.computedMotionOptions()),h(),y(e.cn(e.cx("content"),e.contentStyleClass)),l("pBind",e.ptm("content")),h(3),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",le(15,Ws,le(13,Qd,e.overlayMode)))}}function tc(t,o){if(t&1&&b(0,ec,7,17,"div",4),t&2){let e=d();l("ngIf",e.modalVisible)}}var nc={root:()=>({position:"absolute",top:"0"})},ic=`
.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
    will-change: transform;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`,oc={host:"p-overlay-host",root:({instance:t})=>["p-overlay p-component",{"p-overlay-modal p-overlay-mask p-overlay-mask-enter-active":t.modal,"p-overlay-center":t.modal&&t.overlayResponsiveDirection==="center","p-overlay-top":t.modal&&t.overlayResponsiveDirection==="top","p-overlay-top-start":t.modal&&t.overlayResponsiveDirection==="top-start","p-overlay-top-end":t.modal&&t.overlayResponsiveDirection==="top-end","p-overlay-bottom":t.modal&&t.overlayResponsiveDirection==="bottom","p-overlay-bottom-start":t.modal&&t.overlayResponsiveDirection==="bottom-start","p-overlay-bottom-end":t.modal&&t.overlayResponsiveDirection==="bottom-end","p-overlay-left":t.modal&&t.overlayResponsiveDirection==="left","p-overlay-left-start":t.modal&&t.overlayResponsiveDirection==="left-start","p-overlay-left-end":t.modal&&t.overlayResponsiveDirection==="left-end","p-overlay-right":t.modal&&t.overlayResponsiveDirection==="right","p-overlay-right-start":t.modal&&t.overlayResponsiveDirection==="right-start","p-overlay-right-end":t.modal&&t.overlayResponsiveDirection==="right-end"}],content:"p-overlay-content"},js=(()=>{class t extends q{name="overlay";style=ic;classes=oc;inlineStyles=nc;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),Us=new z("OVERLAY_INSTANCE"),Gs=(()=>{class t extends Q{overlayService;zone;componentName="Overlay";$pcOverlay=_(Us,{optional:!0,skipSelf:!0})??void 0;hostName="";get visible(){return this._visible}set visible(e){this._visible=e,this._visible&&!this.modalVisible&&(this.modalVisible=!0)}get mode(){return this._mode||this.overlayOptions?.mode}set mode(e){this._mode=e}get style(){return Vt.merge(this._style,this.modal?this.overlayResponsiveOptions?.style:this.overlayOptions?.style)}set style(e){this._style=e}get styleClass(){return Vt.merge(this._styleClass,this.modal?this.overlayResponsiveOptions?.styleClass:this.overlayOptions?.styleClass)}set styleClass(e){this._styleClass=e}get contentStyle(){return Vt.merge(this._contentStyle,this.modal?this.overlayResponsiveOptions?.contentStyle:this.overlayOptions?.contentStyle)}set contentStyle(e){this._contentStyle=e}get contentStyleClass(){return Vt.merge(this._contentStyleClass,this.modal?this.overlayResponsiveOptions?.contentStyleClass:this.overlayOptions?.contentStyleClass)}set contentStyleClass(e){this._contentStyleClass=e}get target(){let e=this._target||this.overlayOptions?.target;return e===void 0?"@prev":e}set target(e){this._target=e}get autoZIndex(){let e=this._autoZIndex||this.overlayOptions?.autoZIndex;return e===void 0?!0:e}set autoZIndex(e){this._autoZIndex=e}get baseZIndex(){let e=this._baseZIndex||this.overlayOptions?.baseZIndex;return e===void 0?0:e}set baseZIndex(e){this._baseZIndex=e}get showTransitionOptions(){let e=this._showTransitionOptions||this.overlayOptions?.showTransitionOptions;return e===void 0?".12s cubic-bezier(0, 0, 0.2, 1)":e}set showTransitionOptions(e){this._showTransitionOptions=e}get hideTransitionOptions(){let e=this._hideTransitionOptions||this.overlayOptions?.hideTransitionOptions;return e===void 0?".1s linear":e}set hideTransitionOptions(e){this._hideTransitionOptions=e}get listener(){return this._listener||this.overlayOptions?.listener}set listener(e){this._listener=e}get responsive(){return this._responsive||this.overlayOptions?.responsive}set responsive(e){this._responsive=e}get options(){return this._options}set options(e){this._options=e}appendTo=v(void 0);inline=v(!1);motionOptions=v(void 0);computedMotionOptions=J(()=>C(C({},this.ptm("motion")),this.motionOptions()||this.overlayOptions?.motionOptions));visibleChange=new V;onBeforeShow=new V;onShow=new V;onBeforeHide=new V;onHide=new V;onAnimationStart=new V;onAnimationDone=new V;onBeforeEnter=new V;onEnter=new V;onAfterEnter=new V;onBeforeLeave=new V;onLeave=new V;onAfterLeave=new V;overlayViewChild;contentViewChild;contentTemplate;templates;hostAttrSelector=v();$appendTo=J(()=>this.appendTo()||this.config.overlayAppendTo());_contentTemplate;_visible=!1;_mode;_style;_styleClass;_contentStyle;_contentStyleClass;_target;_autoZIndex;_baseZIndex;_showTransitionOptions;_hideTransitionOptions;_listener;_responsive;_options;modalVisible=!1;isOverlayClicked=!1;isOverlayContentClicked=!1;scrollHandler;documentClickListener;documentResizeListener;_componentStyle=_(js);bindDirectiveInstance=_(M,{self:!0});documentKeyboardListener;parentDragSubscription=null;window;transformOptions={default:"scaleY(0.8)",center:"scale(0.7)",top:"translate3d(0px, -100%, 0px)","top-start":"translate3d(0px, -100%, 0px)","top-end":"translate3d(0px, -100%, 0px)",bottom:"translate3d(0px, 100%, 0px)","bottom-start":"translate3d(0px, 100%, 0px)","bottom-end":"translate3d(0px, 100%, 0px)",left:"translate3d(-100%, 0px, 0px)","left-start":"translate3d(-100%, 0px, 0px)","left-end":"translate3d(-100%, 0px, 0px)",right:"translate3d(100%, 0px, 0px)","right-start":"translate3d(100%, 0px, 0px)","right-end":"translate3d(100%, 0px, 0px)"};get modal(){if(ve(this.platformId))return this.mode==="modal"||this.overlayResponsiveOptions&&this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media","")||`(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches}get overlayMode(){return this.mode||(this.modal?"modal":"overlay")}get overlayOptions(){return C(C({},this.config?.overlayOptions),this.options)}get overlayResponsiveOptions(){return C(C({},this.overlayOptions?.responsive),this.responsive)}get overlayResponsiveDirection(){return this.overlayResponsiveOptions?.direction||"center"}get overlayEl(){return this.overlayViewChild?.nativeElement}get contentEl(){return this.contentViewChild?.nativeElement}get targetEl(){return Fi(this.target,this.el?.nativeElement)}constructor(e,n){super(),this.overlayService=e,this.zone=n}onAfterContentInit(){this.templates?.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}show(e,n=!1){this.onVisibleChange(!0),this.handleEvents("onShow",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&ge(this.targetEl),this.modal&&Ot(this.document?.body,"p-overflow-hidden")}hide(e,n=!1){if(this.visible)this.onVisibleChange(!1),this.handleEvents("onHide",{overlay:e||this.overlayEl,target:this.targetEl,mode:this.overlayMode}),n&&ge(this.targetEl),this.modal&&lt(this.document?.body,"p-overflow-hidden");else return}onVisibleChange(e){this._visible=e,this.visibleChange.emit(e)}onOverlayClick(){this.isOverlayClicked=!0}onOverlayContentClick(e){this.overlayService.add({originalEvent:e,target:this.targetEl}),this.isOverlayContentClicked=!0}container=H(void 0);onOverlayBeforeEnter(e){this.handleEvents("onBeforeShow",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.container.set(this.overlayEl||e.element),this.show(this.overlayEl,!0),this.hostAttrSelector()&&this.overlayEl&&this.overlayEl.setAttribute(this.hostAttrSelector(),""),this.appendOverlay(),this.alignOverlay(),this.bindParentDragListener(),this.setZIndex(),this.handleEvents("onBeforeEnter",e)}onOverlayEnter(e){this.handleEvents("onEnter",e)}onOverlayAfterEnter(e){this.bindListeners(),this.handleEvents("onAfterEnter",e)}onOverlayBeforeLeave(e){this.handleEvents("onBeforeHide",{overlay:this.overlayEl,target:this.targetEl,mode:this.overlayMode}),this.handleEvents("onBeforeLeave",e)}onOverlayLeave(e){this.handleEvents("onLeave",e)}onOverlayAfterLeave(e){this.hide(this.overlayEl,!0),this.container.set(null),this.unbindListeners(),this.appendOverlay(),Be.clear(this.overlayEl),this.modalVisible=!1,this.cd.markForCheck(),this.handleEvents("onAfterLeave",e)}handleEvents(e,n){this[e].emit(n),this.options&&this.options[e]&&this.options[e](n),this.config?.overlayOptions&&(this.config?.overlayOptions)[e]&&(this.config?.overlayOptions)[e](n)}setZIndex(){this.autoZIndex&&Be.set(this.overlayMode,this.overlayEl,this.baseZIndex+this.config?.zIndex[this.overlayMode])}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?dt(this.document.body,this.overlayEl):dt(this.$appendTo(),this.overlayEl))}alignOverlay(){this.modal||this.overlayEl&&this.targetEl&&(this.overlayEl.style.minWidth=$e(this.targetEl)+"px",this.$appendTo()==="self"?jo(this.overlayEl,this.targetEl):jn(this.overlayEl,this.targetEl))}bindListeners(){this.bindScrollListener(),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindDocumentKeyboardListener()}unbindListeners(){this.unbindScrollListener(),this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindDocumentKeyboardListener(),this.unbindParentDragListener()}bindParentDragListener(){!this.parentDragSubscription&&this.$appendTo()!=="self"&&this.targetEl&&(this.parentDragSubscription=this.overlayService.parentDragObservable.subscribe(e=>{e.contains(this.targetEl)&&this.hide(this.overlayEl,!0)}))}unbindParentDragListener(){this.parentDragSubscription&&(this.parentDragSubscription.unsubscribe(),this.parentDragSubscription=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new St(this.targetEl,e=>{(!this.listener||this.listener(e,{type:"scroll",mode:this.overlayMode,valid:!0}))&&this.hide(e,!0)})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=this.renderer.listen(this.document,"click",e=>{let i=!(this.targetEl&&(this.targetEl.isSameNode(e.target)||!this.isOverlayClicked&&this.targetEl.contains(e.target)))&&!this.isOverlayContentClicked;(this.listener?this.listener(e,{type:"outside",mode:this.overlayMode,valid:e.which!==3&&i}):i)&&this.hide(e),this.isOverlayClicked=this.isOverlayContentClicked=!1}))}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{(this.listener?this.listener(e,{type:"resize",mode:this.overlayMode,valid:!Ke()}):!Ke())&&this.hide(e,!0)}))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindDocumentKeyboardListener(){this.documentKeyboardListener||this.zone.runOutsideAngular(()=>{this.documentKeyboardListener=this.renderer.listen(this.document.defaultView,"keydown",e=>{if(this.overlayOptions.hideOnEscape===!1||e.code!=="Escape")return;(this.listener?this.listener(e,{type:"keydown",mode:this.overlayMode,valid:!Ke()}):!Ke())&&this.zone.run(()=>{this.hide(e,!0)})})})}unbindDocumentKeyboardListener(){this.documentKeyboardListener&&(this.documentKeyboardListener(),this.documentKeyboardListener=null)}onDestroy(){this.hide(this.overlayEl,!0),this.overlayEl&&this.$appendTo()!=="self"&&(this.renderer.appendChild(this.el.nativeElement,this.overlayEl),Be.clear(this.overlayEl)),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.unbindListeners()}static \u0275fac=function(n){return new(n||t)(j(qn),j(ot))};static \u0275cmp=N({type:t,selectors:[["p-overlay"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,Hs,4)(r,qe,4),n&2){let s;A(s=L())&&(i.contentTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&_t(qd,5)(Hs,5),n&2){let r;A(r=L())&&(i.overlayViewChild=r.first),A(r=L())&&(i.contentViewChild=r.first)}},inputs:{hostName:"hostName",visible:"visible",mode:"mode",style:"style",styleClass:"styleClass",contentStyle:"contentStyle",contentStyleClass:"contentStyleClass",target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",listener:"listener",responsive:"responsive",options:"options",appendTo:[1,"appendTo"],inline:[1,"inline"],motionOptions:[1,"motionOptions"],hostAttrSelector:[1,"hostAttrSelector"]},outputs:{visibleChange:"visibleChange",onBeforeShow:"onBeforeShow",onShow:"onShow",onBeforeHide:"onBeforeHide",onHide:"onHide",onAnimationStart:"onAnimationStart",onAnimationDone:"onAnimationDone",onBeforeEnter:"onBeforeEnter",onEnter:"onEnter",onAfterEnter:"onAfterEnter",onBeforeLeave:"onBeforeLeave",onLeave:"onLeave",onAfterLeave:"onAfterLeave"},features:[U([js,{provide:Us,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:zs,decls:2,vars:1,consts:[["overlay",""],["content",""],[3,"class","style","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","style","pBind","click",4,"ngIf"],[3,"click","pBind"],["name","p-anchored-overlay",3,"onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave","visible","appear","options"]],template:function(n,i){n&1&&(fe(zs),mt(0,Xd,2,5)(1,tc,1,1,"div",2)),n&2&&ft(i.inline()?0:1)},dependencies:[se,Fe,Ve,te,M,mi,co],encapsulation:2,changeDetection:0})}return t})();var Ks=["content"],rc=["item"],sc=["loader"],ac=["loadericon"],lc=["element"],dc=["*"],uo=(t,o)=>({$implicit:t,options:o}),cc=t=>({numCols:t}),Qs=t=>({options:t}),uc=()=>({styleClass:"p-virtualscroller-loading-icon"}),pc=(t,o)=>({rows:t,columns:o});function hc(t,o){t&1&&ie(0)}function mc(t,o){if(t&1&&(Y(0),b(1,hc,1,0,"ng-container",10),X()),t&2){let e=d(2);h(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",we(2,uo,e.loadedItems,e.getContentOptions()))}}function fc(t,o){t&1&&ie(0)}function gc(t,o){if(t&1&&(Y(0),b(1,fc,1,0,"ng-container",10),X()),t&2){let e=o.$implicit,n=o.index,i=d(3);h(),l("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",we(2,uo,e,i.getOptions(n)))}}function bc(t,o){if(t&1&&(E(0,"div",11,3),b(2,gc,2,5,"ng-container",12),O()),t&2){let e=d(2);Ee(e.contentStyle),y(e.cn(e.cx("content"),e.contentStyleClass)),l("pBind",e.ptm("content")),h(2),l("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function yc(t,o){if(t&1&&Z(0,"div",13),t&2){let e=d(2);y(e.cx("spacer")),l("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function _c(t,o){t&1&&ie(0)}function vc(t,o){if(t&1&&(Y(0),b(1,_c,1,0,"ng-container",10),X()),t&2){let e=o.index,n=d(4);h(),l("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",le(4,Qs,n.getLoaderOptions(e,n.both&&le(2,cc,n.numItemsInViewport.cols))))}}function Cc(t,o){if(t&1&&(Y(0),b(1,vc,2,6,"ng-container",14),X()),t&2){let e=d(3);h(),l("ngForOf",e.loaderArr)}}function Ic(t,o){t&1&&ie(0)}function xc(t,o){if(t&1&&(Y(0),b(1,Ic,1,0,"ng-container",10),X()),t&2){let e=d(4);h(),l("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",le(3,Qs,st(2,uc)))}}function Sc(t,o){if(t&1&&(ne(),Z(0,"svg",15)),t&2){let e=d(4);y(e.cx("loadingIcon")),l("spin",!0)("pBind",e.ptm("loadingIcon"))}}function Tc(t,o){if(t&1&&b(0,xc,2,5,"ng-container",6)(1,Sc,1,4,"ng-template",null,5,_e),t&2){let e=xe(2),n=d(3);l("ngIf",n.loaderIconTemplate||n._loaderIconTemplate)("ngIfElse",e)}}function Ec(t,o){if(t&1&&(E(0,"div",11),b(1,Cc,2,1,"ng-container",6)(2,Tc,3,2,"ng-template",null,4,_e),O()),t&2){let e=xe(3),n=d(2);y(n.cx("loader")),l("pBind",n.ptm("loader")),h(),l("ngIf",n.loaderTemplate||n._loaderTemplate)("ngIfElse",e)}}function wc(t,o){if(t&1){let e=be();Y(0),E(1,"div",7,1),K("scroll",function(i){B(e);let r=d();return R(r.onContainerScroll(i))}),b(3,mc,2,5,"ng-container",6)(4,bc,3,7,"ng-template",null,2,_e)(6,yc,1,4,"div",8)(7,Ec,4,5,"div",9),O(),X()}if(t&2){let e=xe(5),n=d();h(),y(n.cn(n.cx("root"),n.styleClass)),l("ngStyle",n._style)("pBind",n.ptm("root")),D("id",n._id)("tabindex",n.tabindex),h(2),l("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",e),h(3),l("ngIf",n._showSpacer),h(),l("ngIf",!n.loaderDisabled&&n._showLoader&&n.d_loading)}}function Oc(t,o){t&1&&ie(0)}function Mc(t,o){if(t&1&&(Y(0),b(1,Oc,1,0,"ng-container",10),X()),t&2){let e=d(2);h(),l("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",we(5,uo,e.items,we(2,pc,e._items,e.loadedColumns)))}}function Dc(t,o){if(t&1&&(pe(0),b(1,Mc,2,8,"ng-container",16)),t&2){let e=d();h(),l("ngIf",e.contentTemplate||e._contentTemplate)}}var Ac=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Lc={root:({instance:t})=>["p-virtualscroller",{"p-virtualscroller-inline":t.inline,"p-virtualscroller-both p-both-scroll":t.both,"p-virtualscroller-horizontal p-horizontal-scroll":t.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:t})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!t.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},qs=(()=>{class t extends q{name="virtualscroller";css=Ac;classes=Lc;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var Zs=new z("SCROLLER_INSTANCE"),po=(()=>{class t extends Q{zone;componentName="VirtualScroller";bindDirectiveInstance=_(M,{self:!0});$pcScroller=_(Zs,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([n,i])=>this[`_${n}`]!==i&&(this[`_${n}`]=i)),Object.entries(e).forEach(([n,i])=>this[`${n}`]!==i&&(this[`${n}`]=i)))}onLazyLoad=new V;onScroll=new V;onScrollIndexChange=new V;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=_(qs);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let n=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:r}=e.loading;this.lazy&&i!==r&&r!==this.d_loading&&(this.d_loading=r,n=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:r}=e.numToleratedItems;i!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:i,currentValue:r}=e.options;this.lazy&&i?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,n=!0),i?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!n&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&this.init()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){ve(this.platformId)&&!this.initialized&&Vi(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=ut(this.elementViewChild?.nativeElement),this.defaultHeight=ct(this.elementViewChild?.nativeElement),this.defaultContentWidth=ut(this.contentEl),this.defaultContentHeight=ct(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.calculateAutoSize(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||Ce(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,n="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:a=0}=this.elementViewChild?.nativeElement,{numToleratedItems:c}=this.calculateNumItems(),u=this.getContentPosition(),p=this.itemSize,f=(F=0,$)=>F<=$?0:F,m=(F,$,ae)=>F*$+ae,g=(F=0,$=0)=>this.scrollTo({left:F,top:$,behavior:n}),x=this.both?{rows:0,cols:0}:0,k=!1,w=!1;this.both?(x={rows:f(e[0],c[0]),cols:f(e[1],c[1])},g(m(x.cols,p[1],u.left),m(x.rows,p[0],u.top)),w=this.lastScrollPos.top!==s||this.lastScrollPos.left!==a,k=x.rows!==r.rows||x.cols!==r.cols):(x=f(e,c),this.horizontal?g(m(x,p,u.left),s):g(a,m(x,p,u.top)),w=this.lastScrollPos!==(this.horizontal?a:s),k=x!==r),this.isRangeChanged=k,w&&(this.first=x)}}scrollInView(e,n,i="auto"){if(n){let{first:r,viewport:s}=this.getRenderedRange(),a=(p=0,f=0)=>this.scrollTo({left:p,top:f,behavior:i}),c=n==="to-start",u=n==="to-end";if(c){if(this.both)s.first.rows-r.rows>e[0]?a(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&a((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let p=(s.first-1)*this._itemSize;this.horizontal?a(p,0):a(0,p)}}else if(u){if(this.both)s.last.rows-r.rows<=e[0]+1?a(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&a((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let p=(s.first+1)*this._itemSize;this.horizontal?a(p,0):a(0,p)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,n=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)n={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},i={rows:n.rows+this.numItemsInViewport.rows,cols:n.cols+this.numItemsInViewport.cols};else{let a=this.horizontal?s:r;n=e(a,this._itemSize),i=n+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:n,last:i}}}calculateNumItems(){let e=this.getContentPosition(),n=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(u,p)=>p||u?Math.ceil(u/(p||u)):0,s=u=>Math.ceil(u/2),a=this.both?{rows:r(i,this._itemSize[0]),cols:r(n,this._itemSize[1])}:r(this.horizontal?n:i,this._itemSize),c=this.d_numToleratedItems||(this.both?[s(a.rows),s(a.cols)]:s(a));return{numItemsInViewport:a,numToleratedItems:c}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:n}=this.calculateNumItems(),i=(a,c,u,p=!1)=>this.getLast(a+c+(a<u?2:3)*u,p),r=this.first,s=this.both?{rows:i(this.first.rows,e.rows,n[0]),cols:i(this.first.cols,e.cols,n[1],!0)}:i(this.first,e,n);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=n,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,n]=[ut(this.contentEl),ct(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),n!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,r]=[ut(this.elementViewChild.nativeElement),ct(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,n=!1){return this._items?Math.min(n?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),n=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:n,right:i,top:r,bottom:s,x:n+i,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,n=e.parentElement?.parentElement,i=e.offsetWidth,r=n?.offsetWidth||0,s=this._scrollWidth||`${i||r}px`,a=e.offsetHeight,c=n?.offsetHeight||0,u=this._scrollHeight||`${a||c}px`,p=(f,m)=>e.style[f]=m;this.both||this.horizontal?(p("height",u),p("width",s)):p("height",u)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),n=(i,r,s,a=0)=>this.spacerStyle=me(C({},this.spacerStyle),{[`${i}`]:(r||[]).length*s+a+"px"});this.both?(n("height",this._items,this._itemSize[0],e.y),n("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?n("width",this._columns||this._items,this._itemSize,e.x):n("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let n=e?e.first:this.first,i=(s,a)=>s*a,r=(s=0,a=0)=>this.contentStyle=me(C({},this.contentStyle),{transform:`translate3d(${s}px, ${a}px, 0)`});if(this.both)r(i(n.cols,this._itemSize[1]),i(n.rows,this._itemSize[0]));else{let s=i(n,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let n=e.target;if(!n)throw new Error("Event target is null");let i=this.getContentPosition(),r=(w,F)=>w?w>F?w-F:w:0,s=(w,F)=>F||w?Math.floor(w/(F||w)):0,a=(w,F,$,ae,Le,ke)=>w<=Le?Le:ke?$-ae-Le:F+Le-1,c=(w,F,$,ae,Le,ke,Ze)=>w<=ke?0:Math.max(0,Ze?w<F?$:w-ke:w>F?$:w-2*ke),u=(w,F,$,ae,Le,ke=!1)=>{let Ze=F+ae+2*Le;return w>=Le&&(Ze+=Le+1),this.getLast(Ze,ke)},p=r(n.scrollTop,i.top),f=r(n.scrollLeft,i.left),m=this.both?{rows:0,cols:0}:0,g=this.last,x=!1,k=this.lastScrollPos;if(this.both){let w=this.lastScrollPos.top<=p,F=this.lastScrollPos.left<=f;if(!this._appendOnly||this._appendOnly&&(w||F)){let $={rows:s(p,this._itemSize[0]),cols:s(f,this._itemSize[1])},ae={rows:a($.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],w),cols:a($.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],F)};m={rows:c($.rows,ae.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],w),cols:c($.cols,ae.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],F)},g={rows:u($.rows,m.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:u($.cols,m.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},x=m.rows!==this.first.rows||g.rows!==this.last.rows||m.cols!==this.first.cols||g.cols!==this.last.cols||this.isRangeChanged,k={top:p,left:f}}}else{let w=this.horizontal?f:p,F=this.lastScrollPos<=w;if(!this._appendOnly||this._appendOnly&&F){let $=s(w,this._itemSize),ae=a($,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,F);m=c($,ae,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,F),g=u($,m,this.last,this.numItemsInViewport,this.d_numToleratedItems),x=m!==this.first||g!==this.last||this.isRangeChanged,k=w}}return{first:m,last:g,isRangeChanged:x,scrollPos:k}}onScrollChange(e){let{first:n,last:i,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let a={first:n,last:i};if(this.setContentPosition(a),this.first=n,this.last=i,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",a),this._lazy&&this.isPageChanged(n)){let c={first:this._step?Math.min(this.getPageByFirst(n)*this._step,this._items.length-this._step):n,last:Math.min(this._step?(this.getPageByFirst(n)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==c.first||this.lazyLoadState.last!==c.last)&&this.handleEvents("onLazyLoad",c),this.lazyLoadState=c}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:n}=this.onScrollPositionChange(e);(n||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){ve(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,n=Ke()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,n,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(Vi(this.elementViewChild?.nativeElement)){let[e,n]=[ut(this.elementViewChild?.nativeElement),ct(this.elementViewChild?.nativeElement)],[i,r]=[e!==this.defaultWidth,n!==this.defaultHeight];(this.both?i||r:this.horizontal?i:this.vertical&&r)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=n,this.defaultContentWidth=ut(this.contentEl),this.defaultContentHeight=ct(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,n){return this.options&&this.options[e]?this.options[e](n):this[e].emit(n)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,n)=>this.getLoaderOptions(e,n),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let n=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:n,first:i===0,last:i===n-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,n){let i=this.loaderArr.length;return C({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},n)}static \u0275fac=function(n){return new(n||t)(j(ot))};static \u0275cmp=N({type:t,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,Ks,4)(r,rc,4)(r,sc,4)(r,ac,4)(r,qe,4),n&2){let s;A(s=L())&&(i.contentTemplate=s.first),A(s=L())&&(i.itemTemplate=s.first),A(s=L())&&(i.loaderTemplate=s.first),A(s=L())&&(i.loaderIconTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&_t(lc,5)(Ks,5),n&2){let r;A(r=L())&&(i.elementViewChild=r.first),A(r=L())&&(i.contentViewChild=r.first)}},hostVars:2,hostBindings:function(n,i){n&2&&Rt("height",i.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[U([qs,{provide:Zs,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:dc,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(n,i){if(n&1&&(fe(),b(0,wc,8,10,"ng-container",6)(1,Dc,2,1,"ng-template",null,0,_e)),n&2){let r=xe(2);l("ngIf",!i._disabled)("ngIfElse",r)}},dependencies:[se,vt,Fe,Ve,Ge,li,te,M],encapsulation:2})}return t})(),L_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[po,te,te]})}return t})();var Ys=`
    .p-select {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('select.background');
        border: 1px solid dt('select.border.color');
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            outline-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration');
        border-radius: dt('select.border.radius');
        outline-color: transparent;
        box-shadow: dt('select.shadow');
    }

    .p-select:not(.p-disabled):hover {
        border-color: dt('select.hover.border.color');
    }

    .p-select:not(.p-disabled).p-focus {
        border-color: dt('select.focus.border.color');
        box-shadow: dt('select.focus.ring.shadow');
        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');
        outline-offset: dt('select.focus.ring.offset');
    }

    .p-select.p-variant-filled {
        background: dt('select.filled.background');
    }

    .p-select.p-variant-filled:not(.p-disabled):hover {
        background: dt('select.filled.hover.background');
    }

    .p-select.p-variant-filled:not(.p-disabled).p-focus {
        background: dt('select.filled.focus.background');
    }

    .p-select.p-invalid {
        border-color: dt('select.invalid.border.color');
    }

    .p-select.p-disabled {
        opacity: 1;
        background: dt('select.disabled.background');
    }

    .p-select-clear-icon {
        align-self: center;
        color: dt('select.clear.icon.color');
        inset-inline-end: dt('select.dropdown.width');
    }

    .p-select-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('select.dropdown.color');
        width: dt('select.dropdown.width');
        border-start-end-radius: dt('select.border.radius');
        border-end-end-radius: dt('select.border.radius');
    }

    .p-select-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        padding: dt('select.padding.y') dt('select.padding.x');
        text-overflow: ellipsis;
        cursor: pointer;
        color: dt('select.color');
        background: transparent;
        border: 0 none;
        outline: 0 none;
        font-size: 1rem;
    }

    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.p-invalid .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }

    .p-select.p-disabled .p-select-label {
        color: dt('select.disabled.color');
    }

    .p-select-label-empty {
        overflow: hidden;
        opacity: 0;
    }

    input.p-select-label {
        cursor: default;
    }

    .p-select-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('select.overlay.background');
        color: dt('select.overlay.color');
        border: 1px solid dt('select.overlay.border.color');
        border-radius: dt('select.overlay.border.radius');
        box-shadow: dt('select.overlay.shadow');
        min-width: 100%;
        transform-origin: inherit;
        will-change: transform;
    }

    .p-select-header {
        padding: dt('select.list.header.padding');
    }

    .p-select-filter {
        width: 100%;
    }

    .p-select-list-container {
        overflow: auto;
    }

    .p-select-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('select.option.group.padding');
        background: dt('select.option.group.background');
        color: dt('select.option.group.color');
        font-weight: dt('select.option.group.font.weight');
    }

    .p-select-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('select.list.padding');
        gap: dt('select.list.gap');
        display: flex;
        flex-direction: column;
    }

    .p-select-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        padding: dt('select.option.padding');
        border: 0 none;
        color: dt('select.option.color');
        background: transparent;
        transition:
            background dt('select.transition.duration'),
            color dt('select.transition.duration'),
            border-color dt('select.transition.duration'),
            box-shadow dt('select.transition.duration'),
            outline-color dt('select.transition.duration');
        border-radius: dt('select.option.border.radius');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option:not(.p-select-option-selected):not(.p-disabled):hover {
        background: dt('select.option.focus.background');
        color: dt('select.option.focus.color');
    }

    .p-select-option.p-select-option-selected {
        background: dt('select.option.selected.background');
        color: dt('select.option.selected.color');
    }

    .p-select-option.p-select-option-selected.p-focus {
        background: dt('select.option.selected.focus.background');
        color: dt('select.option.selected.focus.color');
    }
   
    .p-select-option-blank-icon {
        flex-shrink: 0;
    }

    .p-select-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('select.checkmark.gutter.start');
        margin-inline-end: dt('select.checkmark.gutter.end');
        color: dt('select.checkmark.color');
    }

    .p-select-empty-message {
        padding: dt('select.empty.message.padding');
    }

    .p-select-fluid {
        display: flex;
        width: 100%;
    }

    .p-select-sm .p-select-label {
        font-size: dt('select.sm.font.size');
        padding-block: dt('select.sm.padding.y');
        padding-inline: dt('select.sm.padding.x');
    }

    .p-select-sm .p-select-dropdown .p-icon {
        font-size: dt('select.sm.font.size');
        width: dt('select.sm.font.size');
        height: dt('select.sm.font.size');
    }

    .p-select-lg .p-select-label {
        font-size: dt('select.lg.font.size');
        padding-block: dt('select.lg.padding.y');
        padding-inline: dt('select.lg.padding.x');
    }

    .p-select-lg .p-select-dropdown .p-icon {
        font-size: dt('select.lg.font.size');
        width: dt('select.lg.font.size');
        height: dt('select.lg.font.size');
    }

    .p-floatlabel-in .p-select-filter {
        padding-block-start: dt('select.padding.y');
        padding-block-end: dt('select.padding.y');
    }
`;var yn=t=>({height:t}),ho=t=>({$implicit:t});function kc(t,o){if(t&1&&(ne(),Z(0,"svg",6)),t&2){let e=d(2);y(e.cx("optionCheckIcon")),l("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionCheckIcon"))}}function Fc(t,o){if(t&1&&(ne(),Z(0,"svg",7)),t&2){let e=d(2);y(e.cx("optionBlankIcon")),l("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionBlankIcon"))}}function Vc(t,o){if(t&1&&(Y(0),b(1,kc,1,3,"svg",4)(2,Fc,1,3,"svg",5),X()),t&2){let e=d();h(),l("ngIf",e.selected),h(),l("ngIf",!e.selected)}}function Nc(t,o){if(t&1&&(E(0,"span",8),Me(1),O()),t&2){let e=d();l("pBind",e.$pcSelect==null?null:e.$pcSelect.ptm("optionLabel")),h(),Re(e.label??"empty")}}function Pc(t,o){t&1&&ie(0)}var Bc=["item"],Rc=["group"],$c=["loader"],Hc=["selectedItem"],zc=["header"],Xs=["filter"],jc=["footer"],Uc=["emptyfilter"],Wc=["empty"],Gc=["dropdownicon"],Kc=["loadingicon"],qc=["clearicon"],Zc=["filtericon"],Qc=["onicon"],Yc=["officon"],Xc=["cancelicon"],Jc=["focusInput"],eu=["editableInput"],tu=["items"],nu=["scroller"],iu=["overlay"],ou=["firstHiddenFocusableEl"],ru=["lastHiddenFocusableEl"],Js=t=>({class:t}),ea=t=>({options:t}),ta=(t,o)=>({$implicit:t,options:o}),su=()=>({});function au(t,o){if(t&1&&(Y(0),Me(1),X()),t&2){let e=d(2);h(),Re(e.label()==="p-emptylabel"?"\xA0":e.label())}}function lu(t,o){if(t&1&&ie(0,24),t&2){let e=d(2);l("ngTemplateOutlet",e.selectedItemTemplate||e._selectedItemTemplate)("ngTemplateOutletContext",le(2,ho,e.selectedOption))}}function du(t,o){if(t&1&&(E(0,"span"),Me(1),O()),t&2){let e=d(3);h(),Re(e.label()==="p-emptylabel"?"\xA0":e.label())}}function cu(t,o){if(t&1&&b(0,du,2,1,"span",18),t&2){let e=d(2);l("ngIf",e.isSelectedOptionEmpty())}}function uu(t,o){if(t&1){let e=be();E(0,"span",22,3),K("focus",function(i){B(e);let r=d();return R(r.onInputFocus(i))})("blur",function(i){B(e);let r=d();return R(r.onInputBlur(i))})("keydown",function(i){B(e);let r=d();return R(r.onKeyDown(i))}),b(2,au,2,1,"ng-container",20)(3,lu,1,4,"ng-container",23)(4,cu,1,1,"ng-template",null,4,_e),O()}if(t&2){let e=xe(5),n=d();y(n.cx("label")),l("pBind",n.ptm("label"))("pTooltip",n.tooltip)("pTooltipUnstyled",n.unstyled())("tooltipPosition",n.tooltipPosition)("positionStyle",n.tooltipPositionStyle)("tooltipStyleClass",n.tooltipStyleClass)("pAutoFocus",n.autofocus),D("aria-disabled",n.$disabled())("id",n.inputId)("aria-label",n.ariaLabel||(n.label()==="p-emptylabel"?void 0:n.label()))("aria-labelledby",n.ariaLabelledBy)("aria-haspopup","listbox")("aria-expanded",n.overlayVisible??!1)("aria-controls",n.overlayVisible?n.id+"_list":null)("tabindex",n.$disabled()?-1:n.tabindex)("aria-activedescendant",n.focused?n.focusedOptionId:void 0)("aria-required",n.required())("required",n.required()?"":void 0)("disabled",n.$disabled()?"":void 0)("data-p",n.labelDataP),h(2),l("ngIf",!n.selectedItemTemplate&&!n._selectedItemTemplate)("ngIfElse",e),h(),l("ngIf",(n.selectedItemTemplate||n._selectedItemTemplate)&&!n.isSelectedOptionEmpty())}}function pu(t,o){if(t&1){let e=be();E(0,"input",25,5),K("input",function(i){B(e);let r=d();return R(r.onEditableInput(i))})("keydown",function(i){B(e);let r=d();return R(r.onKeyDown(i))})("focus",function(i){B(e);let r=d();return R(r.onInputFocus(i))})("blur",function(i){B(e);let r=d();return R(r.onInputBlur(i))}),O()}if(t&2){let e=d();y(e.cx("label")),l("pBind",e.ptm("label"))("pAutoFocus",e.autofocus),D("id",e.inputId)("aria-haspopup","listbox")("placeholder",e.modelValue()===void 0||e.modelValue()===null?e.placeholder():void 0)("aria-label",e.ariaLabel||(e.label()==="p-emptylabel"?void 0:e.label()))("aria-activedescendant",e.focused?e.focusedOptionId:void 0)("name",e.name())("minlength",e.minlength())("min",e.min())("max",e.max())("pattern",e.pattern())("size",e.inputSize())("maxlength",e.maxlength())("required",e.required()?"":void 0)("readonly",e.readonly?"":void 0)("disabled",e.$disabled()?"":void 0)("data-p",e.labelDataP)}}function hu(t,o){if(t&1){let e=be();ne(),E(0,"svg",28),K("click",function(i){B(e);let r=d(2);return R(r.clear(i))}),O()}if(t&2){let e=d(2);y(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),D("data-pc-section","clearicon")}}function mu(t,o){}function fu(t,o){t&1&&b(0,mu,0,0,"ng-template")}function gu(t,o){if(t&1){let e=be();E(0,"span",29),K("click",function(i){B(e);let r=d(2);return R(r.clear(i))}),b(1,fu,1,0,null,30),O()}if(t&2){let e=d(2);y(e.cx("clearIcon")),l("pBind",e.ptm("clearIcon")),D("data-pc-section","clearicon"),h(),l("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)("ngTemplateOutletContext",le(6,Js,e.cx("clearIcon")))}}function bu(t,o){if(t&1&&(Y(0),b(1,hu,1,4,"svg",26)(2,gu,2,8,"span",27),X()),t&2){let e=d();h(),l("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),h(),l("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function yu(t,o){t&1&&ie(0)}function _u(t,o){if(t&1&&(Y(0),b(1,yu,1,0,"ng-container",31),X()),t&2){let e=d(2);h(),l("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)}}function vu(t,o){if(t&1&&Z(0,"span",33),t&2){let e=d(3);y(e.cn(e.cx("loadingIcon"),"pi-spin"+e.loadingIcon)),l("pBind",e.ptm("loadingIcon"))}}function Cu(t,o){if(t&1&&Z(0,"span",33),t&2){let e=d(3);y(e.cn(e.cx("loadingIcon"),"pi pi-spinner pi-spin")),l("pBind",e.ptm("loadingIcon"))}}function Iu(t,o){if(t&1&&(Y(0),b(1,vu,1,3,"span",32)(2,Cu,1,3,"span",32),X()),t&2){let e=d(2);h(),l("ngIf",e.loadingIcon),h(),l("ngIf",!e.loadingIcon)}}function xu(t,o){if(t&1&&(Y(0),b(1,_u,2,1,"ng-container",18)(2,Iu,3,2,"ng-container",18),X()),t&2){let e=d();h(),l("ngIf",e.loadingIconTemplate||e._loadingIconTemplate),h(),l("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate)}}function Su(t,o){if(t&1&&Z(0,"span",36),t&2){let e=d(3);y(e.cn(e.cx("dropdownIcon"),e.dropdownIcon)),l("pBind",e.ptm("dropdownIcon"))}}function Tu(t,o){if(t&1&&(ne(),Z(0,"svg",37)),t&2){let e=d(3);y(e.cx("dropdownIcon")),l("pBind",e.ptm("dropdownIcon"))}}function Eu(t,o){if(t&1&&(Y(0),b(1,Su,1,3,"span",34)(2,Tu,1,3,"svg",35),X()),t&2){let e=d(2);h(),l("ngIf",e.dropdownIcon),h(),l("ngIf",!e.dropdownIcon)}}function wu(t,o){}function Ou(t,o){t&1&&b(0,wu,0,0,"ng-template")}function Mu(t,o){if(t&1&&(E(0,"span",36),b(1,Ou,1,0,null,30),O()),t&2){let e=d(2);y(e.cx("dropdownIcon")),l("pBind",e.ptm("dropdownIcon")),h(),l("ngTemplateOutlet",e.dropdownIconTemplate||e._dropdownIconTemplate)("ngTemplateOutletContext",le(5,Js,e.cx("dropdownIcon")))}}function Du(t,o){if(t&1&&b(0,Eu,3,2,"ng-container",18)(1,Mu,2,7,"span",34),t&2){let e=d();l("ngIf",!e.dropdownIconTemplate&&!e._dropdownIconTemplate),h(),l("ngIf",e.dropdownIconTemplate||e._dropdownIconTemplate)}}function Au(t,o){t&1&&ie(0)}function Lu(t,o){t&1&&ie(0)}function ku(t,o){if(t&1&&(Y(0),b(1,Lu,1,0,"ng-container",30),X()),t&2){let e=d(3);h(),l("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",le(2,ea,e.filterOptions))}}function Fu(t,o){if(t&1&&(ne(),Z(0,"svg",45)),t&2){let e=d(4);l("pBind",e.ptm("filterIcon"))}}function Vu(t,o){}function Nu(t,o){t&1&&b(0,Vu,0,0,"ng-template")}function Pu(t,o){if(t&1&&(E(0,"span",36),b(1,Nu,1,0,null,31),O()),t&2){let e=d(4);l("pBind",e.ptm("filterIcon")),h(),l("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function Bu(t,o){if(t&1){let e=be();E(0,"p-iconfield",41)(1,"input",42,10),K("input",function(i){B(e);let r=d(3);return R(r.onFilterInputChange(i))})("keydown",function(i){B(e);let r=d(3);return R(r.onFilterKeyDown(i))})("blur",function(i){B(e);let r=d(3);return R(r.onFilterBlur(i))}),O(),E(3,"p-inputicon",41),b(4,Fu,1,1,"svg",43)(5,Pu,2,2,"span",44),O()()}if(t&2){let e=d(3);l("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),h(),y(e.cx("pcFilter")),l("pSize",e.size())("value",e._filterValue()||"")("variant",e.$variant())("pt",e.ptm("pcFilter"))("unstyled",e.unstyled()),D("placeholder",e.filterPlaceholder)("aria-owns",e.id+"_list")("aria-label",e.ariaFilterLabel)("aria-activedescendant",e.focusedOptionId),h(2),l("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),h(),l("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),h(),l("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Ru(t,o){if(t&1&&(E(0,"div",29),K("click",function(n){return n.stopPropagation()}),b(1,ku,2,4,"ng-container",20)(2,Bu,6,17,"ng-template",null,9,_e),O()),t&2){let e=xe(3),n=d(2);y(n.cx("header")),l("pBind",n.ptm("header")),h(),l("ngIf",n.filterTemplate||n._filterTemplate)("ngIfElse",e)}}function $u(t,o){t&1&&ie(0)}function Hu(t,o){if(t&1&&b(0,$u,1,0,"ng-container",30),t&2){let e=o.$implicit,n=o.options;d(2);let i=xe(9);l("ngTemplateOutlet",i)("ngTemplateOutletContext",we(2,ta,e,n))}}function zu(t,o){t&1&&ie(0)}function ju(t,o){if(t&1&&b(0,zu,1,0,"ng-container",30),t&2){let e=o.options,n=d(4);l("ngTemplateOutlet",n.loaderTemplate||n._loaderTemplate)("ngTemplateOutletContext",le(2,ea,e))}}function Uu(t,o){t&1&&(Y(0),b(1,ju,1,4,"ng-template",null,12,_e),X())}function Wu(t,o){if(t&1){let e=be();E(0,"p-scroller",46,11),K("onLazyLoad",function(i){B(e);let r=d(2);return R(r.onLazyLoad.emit(i))}),b(2,Hu,1,5,"ng-template",null,2,_e)(4,Uu,3,0,"ng-container",18),O()}if(t&2){let e=d(2);Ee(le(9,yn,e.scrollHeight)),l("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions)("pt",e.ptm("virtualScroller")),h(4),l("ngIf",e.loaderTemplate||e._loaderTemplate)}}function Gu(t,o){t&1&&ie(0)}function Ku(t,o){if(t&1&&(Y(0),b(1,Gu,1,0,"ng-container",30),X()),t&2){d();let e=xe(9),n=d();h(),l("ngTemplateOutlet",e)("ngTemplateOutletContext",we(3,ta,n.visibleOptions(),st(2,su)))}}function qu(t,o){if(t&1&&(E(0,"span",36),Me(1),O()),t&2){let e=d(2).$implicit,n=d(3);y(n.cx("optionGroupLabel")),l("pBind",n.ptm("optionGroupLabel")),h(),Re(n.getOptionGroupLabel(e.optionGroup))}}function Zu(t,o){t&1&&ie(0)}function Qu(t,o){if(t&1&&(Y(0),E(1,"li",50),b(2,qu,2,4,"span",34)(3,Zu,1,0,"ng-container",30),O(),X()),t&2){let e=d(),n=e.$implicit,i=e.index,r=d().options,s=d(2);h(),y(s.cx("optionGroup")),l("ngStyle",le(8,yn,r.itemSize+"px"))("pBind",s.ptm("optionGroup")),D("id",s.id+"_"+s.getOptionIndex(i,r)),h(),l("ngIf",!s.groupTemplate&&!s._groupTemplate),h(),l("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",le(10,ho,n.optionGroup))}}function Yu(t,o){if(t&1){let e=be();Y(0),E(1,"p-selectItem",51),K("onClick",function(i){B(e);let r=d().$implicit,s=d(3);return R(s.onOptionSelect(i,r))})("onMouseEnter",function(i){B(e);let r=d().index,s=d().options,a=d(2);return R(a.onOptionMouseEnter(i,a.getOptionIndex(r,s)))}),O(),X()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d().options,s=d(2);h(),l("id",s.id+"_"+s.getOptionIndex(i,r))("option",n)("checkmark",s.checkmark)("selected",s.isSelected(n))("label",s.getOptionLabel(n))("disabled",s.isOptionDisabled(n))("template",s.itemTemplate||s._itemTemplate)("focused",s.focusedOptionIndex()===s.getOptionIndex(i,r))("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(i,r)))("ariaSetSize",s.ariaSetSize)("index",i)("unstyled",s.unstyled())("scrollerOptions",r)}}function Xu(t,o){if(t&1&&b(0,Qu,4,12,"ng-container",18)(1,Yu,2,13,"ng-container",18),t&2){let e=o.$implicit,n=d(3);l("ngIf",n.isOptionGroup(e)),h(),l("ngIf",!n.isOptionGroup(e))}}function Ju(t,o){if(t&1&&Me(0),t&2){let e=d(4);nn(" ",e.emptyFilterMessageLabel," ")}}function ep(t,o){t&1&&ie(0,null,14)}function tp(t,o){if(t&1&&b(0,ep,2,0,"ng-container",31),t&2){let e=d(4);l("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e.emptyTemplate||e._emptyTemplate)}}function np(t,o){if(t&1&&(E(0,"li",50),mt(1,Ju,1,1)(2,tp,1,1,"ng-container"),O()),t&2){let e=d().options,n=d(2);y(n.cx("emptyMessage")),l("ngStyle",le(5,yn,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),h(),ft(!n.emptyFilterTemplate&&!n._emptyFilterTemplate&&!n.emptyTemplate?1:2)}}function ip(t,o){if(t&1&&Me(0),t&2){let e=d(4);nn(" ",e.emptyMessageLabel||e.emptyFilterMessageLabel," ")}}function op(t,o){t&1&&ie(0,null,15)}function rp(t,o){if(t&1&&b(0,op,2,0,"ng-container",31),t&2){let e=d(4);l("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function sp(t,o){if(t&1&&(E(0,"li",50),mt(1,ip,1,1)(2,rp,1,1,"ng-container"),O()),t&2){let e=d().options,n=d(2);y(n.cx("emptyMessage")),l("ngStyle",le(5,yn,e.itemSize+"px"))("pBind",n.ptm("emptyMessage")),h(),ft(!n.emptyTemplate&&!n._emptyTemplate?1:2)}}function ap(t,o){if(t&1&&(E(0,"ul",47,13),b(2,Xu,2,2,"ng-template",48)(3,np,3,7,"li",49)(4,sp,3,7,"li",49),O()),t&2){let e=o.$implicit,n=o.options,i=d(2);Ee(n.contentStyle),y(i.cn(i.cx("list"),n.contentStyleClass)),l("pBind",i.ptm("list")),D("id",i.id+"_list")("aria-label",i.listLabel),h(2),l("ngForOf",e),h(),l("ngIf",i.filterValue&&i.isEmpty()),h(),l("ngIf",!i.filterValue&&i.isEmpty())}}function lp(t,o){t&1&&ie(0)}function dp(t,o){if(t&1){let e=be();E(0,"div",38)(1,"span",39,6),K("focus",function(i){B(e);let r=d();return R(r.onFirstHiddenFocus(i))}),O(),b(3,Au,1,0,"ng-container",31)(4,Ru,4,5,"div",27),E(5,"div",36),b(6,Wu,5,11,"p-scroller",40)(7,Ku,2,6,"ng-container",18)(8,ap,5,10,"ng-template",null,7,_e),O(),b(10,lp,1,0,"ng-container",31),E(11,"span",39,8),K("focus",function(i){B(e);let r=d();return R(r.onLastHiddenFocus(i))}),O()()}if(t&2){let e=d();y(e.cn(e.cx("overlay"),e.panelStyleClass)),l("ngStyle",e.panelStyle)("pBind",e.ptm("overlay")),D("data-p",e.overlayDataP),h(),l("pBind",e.ptm("hiddenFirstFocusableEl")),D("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0),h(2),l("ngTemplateOutlet",e.headerTemplate||e._headerTemplate),h(),l("ngIf",e.filter),h(),y(e.cx("listContainer")),Rt("max-height",e.virtualScroll?"auto":e.scrollHeight||"auto"),l("pBind",e.ptm("listContainer")),h(),l("ngIf",e.virtualScroll),h(),l("ngIf",!e.virtualScroll),h(3),l("ngTemplateOutlet",e.footerTemplate||e._footerTemplate),h(),l("pBind",e.ptm("hiddenLastFocusableEl")),D("tabindex",0)("data-p-hidden-accessible",!0)("data-p-hidden-focusable",!0)}}var cp=`
    ${Ys}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`,up={root:({instance:t})=>["p-select p-component p-inputwrapper",{"p-disabled":t.$disabled(),"p-variant-filled":t.$variant()==="filled","p-focus":t.focused,"p-invalid":t.invalid(),"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-select-open":t.overlayVisible,"p-select-fluid":t.hasFluid,"p-select-sm p-inputfield-sm":t.size()==="small","p-select-lg p-inputfield-lg":t.size()==="large"}],label:({instance:t})=>["p-select-label",{"p-placeholder":t.placeholder()&&t.label()===t.placeholder(),"p-select-label-empty":!t.editable&&!t.selectedItemTemplate&&(t.label()===void 0||t.label()===null||t.label()==="p-emptylabel"||t.label().length===0)}],clearIcon:"p-select-clear-icon",dropdown:"p-select-dropdown",loadingIcon:"p-select-loading-icon",dropdownIcon:"p-select-dropdown-icon",overlay:"p-select-overlay p-component-overlay p-component",header:"p-select-header",pcFilter:"p-select-filter",listContainer:"p-select-list-container",list:"p-select-list",optionGroup:"p-select-option-group",optionGroupLabel:"p-select-option-group-label",option:({instance:t})=>["p-select-option",{"p-select-option-selected":t.selected&&!t.checkmark,"p-disabled":t.disabled,"p-focus":t.focused}],optionLabel:"p-select-option-label",optionCheckIcon:"p-select-option-check-icon",optionBlankIcon:"p-select-option-blank-icon",emptyMessage:"p-select-empty-message"},fi=(()=>{class t extends q{name="select";style=cp;classes=up;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var na=new z("SELECT_INSTANCE"),pp=new z("SELECT_ITEM_INSTANCE"),hp={provide:mn,useExisting:yt(()=>ia),multi:!0},mp=(()=>{class t extends Q{hostName="select";$pcSelectItem=_(pp,{optional:!0,skipSelf:!0})??void 0;$pcSelect=_(na,{optional:!0,skipSelf:!0})??void 0;id;option;selected;focused;label;disabled;visible;itemSize;ariaPosInset;ariaSetSize;template;checkmark;index;scrollerOptions;onClick=new V;onMouseEnter=new V;_componentStyle=_(fi);onOptionClick(e){this.onClick.emit(e)}onOptionMouseEnter(e){this.onMouseEnter.emit(e)}getPTOptions(){return this.$pcSelect?.getPTItemOptions?.(this.option,this.scrollerOptions,this.index??0,"option")??this.$pcSelect?.ptm("option",{context:{option:this.option,selected:this.selected,focused:this.focused,disabled:this.disabled}})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-selectItem"]],inputs:{id:"id",option:"option",selected:[2,"selected","selected",T],focused:[2,"focused","focused",T],label:"label",disabled:[2,"disabled","disabled",T],visible:[2,"visible","visible",T],itemSize:[2,"itemSize","itemSize",Se],ariaPosInset:"ariaPosInset",ariaSetSize:"ariaSetSize",template:"template",checkmark:[2,"checkmark","checkmark",T],index:"index",scrollerOptions:"scrollerOptions"},outputs:{onClick:"onClick",onMouseEnter:"onMouseEnter"},features:[U([fi,{provide:re,useExisting:t}]),S],decls:4,vars:21,consts:[["role","option","pRipple","",3,"click","mouseenter","id","pBind","ngStyle"],[4,"ngIf"],[3,"pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],["data-p-icon","blank",3,"class","pBind",4,"ngIf"],["data-p-icon","check",3,"pBind"],["data-p-icon","blank",3,"pBind"],[3,"pBind"]],template:function(n,i){n&1&&(E(0,"li",0),K("click",function(s){return i.onOptionClick(s)})("mouseenter",function(s){return i.onOptionMouseEnter(s)}),b(1,Vc,3,2,"ng-container",1)(2,Nc,2,2,"span",2)(3,Pc,1,0,"ng-container",3),O()),n&2&&(y(i.cx("option")),l("id",i.id)("pBind",i.getPTOptions())("ngStyle",le(17,yn,(i.scrollerOptions==null?null:i.scrollerOptions.itemSize)+"px")),D("aria-label",i.label)("aria-setsize",i.ariaSetSize)("aria-posinset",i.ariaPosInset)("aria-selected",i.selected)("data-p-focused",i.focused)("data-p-highlight",i.selected)("data-p-selected",i.selected)("data-p-disabled",i.disabled),h(),l("ngIf",i.checkmark),h(),l("ngIf",!i.template),h(),l("ngTemplateOutlet",i.template)("ngTemplateOutletContext",le(19,ho,i.option)))},dependencies:[se,Fe,Ve,Ge,te,Et,ls,as,he,M],encapsulation:2})}return t})(),ia=(()=>{class t extends Os{zone;filterService;componentName="Select";bindDirectiveInstance=_(M,{self:!0});id;scrollHeight="200px";filter;panelStyle;styleClass;panelStyleClass;readonly;editable;tabindex=0;set placeholder(e){this._placeholder.set(e)}get placeholder(){return this._placeholder.asReadonly()}loadingIcon;filterPlaceholder;filterLocale;inputId;dataKey;filterBy;filterFields;autofocus;resetFilterOnHide=!1;checkmark=!1;dropdownIcon;loading=!1;optionLabel;optionValue;optionDisabled;optionGroupLabel="label";optionGroupChildren="items";group;showClear;emptyFilterMessage="";emptyMessage="";lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;overlayOptions;ariaFilterLabel;ariaLabel;ariaLabelledBy;filterMatchMode="contains";tooltip="";tooltipPosition="right";tooltipPositionStyle="absolute";tooltipStyleClass;focusOnHover=!0;selectOnFocus=!1;autoOptionFocus=!1;autofocusFilter=!0;get filterValue(){return this._filterValue()}set filterValue(e){setTimeout(()=>{this._filterValue.set(e)})}get options(){return this._options()}set options(e){Mi(e,this._options())||this._options.set(e)}appendTo=v(void 0);motionOptions=v(void 0);onChange=new V;onFilter=new V;onFocus=new V;onBlur=new V;onClick=new V;onShow=new V;onHide=new V;onClear=new V;onLazyLoad=new V;_componentStyle=_(fi);filterViewChild;focusInputViewChild;editableInputViewChild;itemsViewChild;scroller;overlayViewChild;firstHiddenFocusableElementOnOverlay;lastHiddenFocusableElementOnOverlay;itemsWrapper;$appendTo=J(()=>this.appendTo()||this.config.overlayAppendTo());itemTemplate;groupTemplate;loaderTemplate;selectedItemTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;dropdownIconTemplate;loadingIconTemplate;clearIconTemplate;filterIconTemplate;onIconTemplate;offIconTemplate;cancelIconTemplate;templates;_itemTemplate;_selectedItemTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_groupTemplate;_loaderTemplate;_dropdownIconTemplate;_loadingIconTemplate;_clearIconTemplate;_filterIconTemplate;_cancelIconTemplate;_onIconTemplate;_offIconTemplate;filterOptions;_options=H(null);_placeholder=H(void 0);value;hover;focused;overlayVisible;optionsChanged;panel;dimensionsUpdated;hoveredItem;selectedOptionUpdated;_filterValue=H(null);searchValue;searchIndex;searchTimeout;previousSearchChar;currentSearchChar;preventModelTouched;focusedOptionIndex=H(-1);labelId;listId;clicked=H(!1);get emptyMessageLabel(){return this.emptyMessage||this.config.getTranslation(Zn.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage||this.config.getTranslation(Zn.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.hasSelectedOption()&&this.showClear&&!this.$disabled()}get listLabel(){return this.config.getTranslation(Zn.ARIA).listLabel}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}visibleOptions=J(()=>{let e=this.getAllVisibleAndNonVisibleOptions();if(this._filterValue()){let i=!(this.filterBy||this.optionLabel)&&!this.filterFields&&!this.optionValue?this.options?.filter(r=>r.label?r.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1:r.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim())!==-1):this.filterService.filter(e,this.searchFields(),this._filterValue().trim(),this.filterMatchMode,this.filterLocale);if(this.group){let r=this.options||[],s=[];return r.forEach(a=>{let u=this.getOptionGroupChildren(a).filter(p=>i?.includes(p));u.length>0&&s.push(me(C({},a),{[typeof this.optionGroupChildren=="string"?this.optionGroupChildren:"items"]:[...u]}))}),this.flatOptions(s)}return i}return e});label=J(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=e.findIndex(i=>this.isOptionValueEqualsModelValue(i));if(n!==-1){let i=e[n];return this.getOptionLabel(i)}return this.placeholder()||"p-emptylabel"});selectedOption;constructor(e,n){super(),this.zone=e,this.filterService=n,ce(()=>{let i=this.modelValue(),r=this.visibleOptions();if(r&&ye(r)){let s=this.findSelectedOptionIndex();if(s!==-1||i===void 0||typeof i=="string"&&i.length===0||this.isModelValueNotSet()||this.editable)this.selectedOption=r[s];else{let a=r.findIndex(c=>this.isSelected(c));a!==-1&&(this.selectedOption=r[a])}}Xe(r)&&(i===void 0||this.isModelValueNotSet())&&ye(this.selectedOption)&&(this.selectedOption=null),i!==void 0&&this.editable&&this.updateEditableLabel(),this.cd.markForCheck()})}isModelValueNotSet(){return this.modelValue()===null&&!this.isOptionValueEqualsModelValue(this.selectedOption)}getAllVisibleAndNonVisibleOptions(){return this.group?this.flatOptions(this.options):this.options||[]}onInit(){this.id=this.id||Pe("pn_id_"),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"selectedItem":this._selectedItemTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"dropdownicon":this._dropdownIconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;case"clearicon":this._clearIconTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"cancelicon":this._cancelIconTemplate=e.template;break;case"onicon":this._onIconTemplate=e.template;break;case"officon":this._offIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewChecked(){if(this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.optionsChanged&&this.overlayVisible&&(this.optionsChanged=!1,this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild&&this.overlayViewChild.alignOverlay()},1)})),this.selectedOptionUpdated&&this.itemsWrapper){let e=Ce(this.overlayViewChild?.overlayViewChild?.nativeElement,'li[data-p-selected="true"]');e&&Yo(this.itemsWrapper,e),this.selectedOptionUpdated=!1}}flatOptions(e){return(e||[]).reduce((n,i,r)=>{n.push({optionGroup:i,group:!0,index:r});let s=this.getOptionGroupChildren(i);return s&&s.forEach(a=>n.push(a)),n},[])}autoUpdateModel(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&(this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex()),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()],!1))}onOptionSelect(e,n,i=!0,r=!1){if(!this.isOptionDisabled(n)){if(!this.isSelected(n)){let s=this.getOptionValue(n);this.updateModel(s,e),this.focusedOptionIndex.set(this.findSelectedOptionIndex()),r===!1&&this.onChange.emit({originalEvent:e,value:s})}i&&this.hide(!0)}}onOptionMouseEnter(e,n){this.focusOnHover&&this.changeFocusedOptionIndex(e,n)}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeModelValue(e),this.selectedOptionUpdated=!0}allowModelChange(){return!!this.modelValue()&&!this.placeholder()&&(this.modelValue()===void 0||this.modelValue()===null)&&!this.editable&&this.options&&this.options.length}isSelected(e){return this.isOptionValueEqualsModelValue(e)}isOptionValueEqualsModelValue(e){return e!=null&&!this.isOptionGroup(e)&&wt(this.modelValue(),this.getOptionValue(e),this.equalityKey())}onAfterViewInit(){this.editable&&this.updateEditableLabel(),this.updatePlaceHolderForFloatingLabel()}updatePlaceHolderForFloatingLabel(){let e=this.el.nativeElement.parentElement,n=e?.classList.contains("p-float-label");if(e&&n&&!this.selectedOption){let i=e.querySelector("label");i&&this._placeholder.set(i.textContent)}}updateEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value=this.getOptionLabel(this.selectedOption)||this.modelValue()||"")}clearEditableLabel(){this.editableInputViewChild&&(this.editableInputViewChild.nativeElement.value="")}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getOptionLabel(e){return this.optionLabel!==void 0&&this.optionLabel!==null?at(e,this.optionLabel):e&&e.label!==void 0?e.label:e}getOptionValue(e){return this.optionValue&&this.optionValue!==null?at(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getPTItemOptions(e,n,i,r){return this.ptm(r,{context:{option:e,index:i,selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}isSelectedOptionEmpty(){return Xe(this.selectedOption)}isOptionDisabled(e){return this.optionDisabled?at(e,this.optionDisabled):e&&e.disabled!==void 0?e.disabled:!1}getOptionGroupLabel(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null?at(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionGroupChildren(e){return this.optionGroupChildren!==void 0&&this.optionGroupChildren!==null?at(e,this.optionGroupChildren):e.items}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}resetFilter(){this._filterValue.set(null),this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value="")}onContainerClick(e){this.$disabled()||this.readonly||this.loading||e.target.tagName==="INPUT"||e.target.getAttribute("data-pc-section")==="clearicon"||e.target.closest('[data-pc-section="clearicon"]')||((!this.overlayViewChild||!this.overlayViewChild.el.nativeElement.contains(e.target))&&(this.overlayVisible?this.hide(!0):this.show(!0)),this.focusInputViewChild?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.clicked.set(!0),this.cd.detectChanges())}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}onEditableInput(e){let n=e.target.value;this.searchValue="",!this.searchOptions(e,n)&&this.focusedOptionIndex.set(-1),this.onModelChange(n),this.updateModel(n||null,e),setTimeout(()=>{this.onChange.emit({originalEvent:e,value:n})},1),!this.overlayVisible&&ye(n)&&this.show()}show(e){this.overlayVisible=!0,this.focusedOptionIndex.set(this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.editable?-1:this.findSelectedOptionIndex()),e&&ge(this.focusInputViewChild?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Ce(this.overlayViewChild?.overlayViewChild?.nativeElement,this.virtualScroll?'[data-pc-name="virtualscroller"]':'[data-pc-section="listcontainer"]'),this.virtualScroll&&this.scroller?.setContentEl(this.itemsViewChild?.nativeElement),this.options&&this.options.length)if(this.virtualScroll){let n=this.modelValue()?this.focusedOptionIndex():-1;n!==-1&&setTimeout(()=>{this.scroller?.scrollToIndex(n)},10)}else{let n=Ce(this.itemsWrapper,'[data-p-selected="true"]');n&&n.scrollIntoView({block:"nearest",inline:"nearest"})}this.filterViewChild&&this.filterViewChild.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter&&!this.editable&&this.filterViewChild.nativeElement.focus()),this.onShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onHide.emit(e)}hide(e){this.overlayVisible=!1,this.focusedOptionIndex.set(-1),this.clicked.set(!1),this.searchValue="",this.overlayOptions?.mode==="modal"&&Yr(),this.filter&&this.resetFilterOnHide&&this.resetFilter(),e&&(this.focusInputViewChild&&ge(this.focusInputViewChild?.nativeElement),this.editable&&this.editableInputViewChild&&ge(this.editableInputViewChild?.nativeElement)),this.cd.markForCheck()}onInputFocus(e){if(this.$disabled())return;this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible&&this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),!this.preventModelTouched&&!this.overlayVisible&&this.onModelTouched(),this.preventModelTouched=!1}onKeyDown(e,n=!1){if(!(this.$disabled()||this.readonly||this.loading)){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,this.editable);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,this.editable);break;case"Delete":this.onDeleteKey(e);break;case"Home":this.onHomeKey(e,this.editable);break;case"End":this.onEndKey(e,this.editable);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Space":this.onSpaceKey(e,n);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"Backspace":this.onBackspaceKey(e,this.editable);break;case"ShiftLeft":case"ShiftRight":break;default:!e.metaKey&&Rn(e.key)&&(!this.overlayVisible&&this.show(),!this.editable&&this.searchOptions(e,e.key));break}this.clicked.set(!1)}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e,!0);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e,!0);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e,!0);break;default:break}}onFilterBlur(e){this.focusedOptionIndex.set(-1)}onArrowDownKey(e){if(!this.overlayVisible)this.show(),this.editable&&this.changeFocusedOptionIndex(e,this.findSelectedOptionIndex());else{let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n)}e.preventDefault(),e.stopPropagation()}changeFocusedOptionIndex(e,n){if(this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView(),this.selectOnFocus)){let i=this.visibleOptions()[n];this.onOptionSelect(e,i,!1)}}get virtualScrollerDisabled(){return!this.virtualScroll}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedOptionId;if(this.itemsViewChild&&this.itemsViewChild.nativeElement){let i=Ce(this.itemsViewChild.nativeElement,`li[id="${n}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}hasSelectedOption(){return this.modelValue()!==void 0}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}equalityKey(){return this.optionValue?void 0:this.dataKey}findFirstFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?zt(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastOptionIndex(){return zt(this.visibleOptions(),e=>this.isValidOption(e))}findLastFocusedOptionIndex(){let e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}isValidOption(e){return e!=null&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionGroup(e){return this.optionGroupLabel!==void 0&&this.optionGroupLabel!==null&&e.optionGroup!==void 0&&e.optionGroup!==null&&e.group}onArrowUpKey(e,n=!1){if(e.altKey&&!n){if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide()}else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.clicked()?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,i),!this.overlayVisible&&this.show()}e.preventDefault(),e.stopPropagation()}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onDeleteKey(e){this.showClear&&(this.clear(e),e.preventDefault())}onHomeKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;e.shiftKey?i.setSelectionRange(0,i.value.length):(i.setSelectionRange(0,0),this.focusedOptionIndex.set(-1))}else this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onEndKey(e,n=!1){if(n&&e.currentTarget&&e.currentTarget.setSelectionRange){let i=e.currentTarget;if(e.shiftKey)i.setSelectionRange(0,i.value.length);else{let r=i.value.length;i.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}}else this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show();e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onSpaceKey(e,n=!1){!this.editable&&!n&&this.onEnterKey(e)}onEnterKey(e,n=!1){if(!this.overlayVisible)this.focusedOptionIndex.set(-1),this.onArrowDownKey(e);else{if(this.focusedOptionIndex()!==-1){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}!n&&this.hide()}e.preventDefault()}onEscapeKey(e){this.overlayVisible&&(this.hide(!0),e.preventDefault(),e.stopPropagation())}onTabKey(e,n=!1){if(!n)if(this.overlayVisible&&this.hasFocusableElements())ge(e.shiftKey?this.lastHiddenFocusableElementOnOverlay?.nativeElement:this.firstHiddenFocusableElementOnOverlay?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1&&this.overlayVisible){let i=this.visibleOptions()[this.focusedOptionIndex()];this.onOptionSelect(e,i)}this.overlayVisible&&this.hide(this.filter)}e.stopPropagation()}onFirstHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Go(this.overlayViewChild?.el?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ge(n)}onLastHiddenFocus(e){let n=e.relatedTarget===this.focusInputViewChild?.nativeElement?Ko(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])'):this.focusInputViewChild?.nativeElement;ge(n)}hasFocusableElements(){return Wn(this.overlayViewChild?.overlayViewChild?.nativeElement,':not([data-p-hidden-focusable="true"])').length>0}onBackspaceKey(e,n=!1){n&&!this.overlayVisible&&this.show()}searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}searchOptions(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return i=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&setTimeout(()=>{this.changeFocusedOptionIndex(e,i)}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild?.alignOverlay()}),this.cd.markForCheck()}applyFocus(){this.editable?Ce(this.el.nativeElement,'[data-pc-section="label"]').focus():ge(this.focusInputViewChild?.nativeElement)}focus(){this.applyFocus()}clear(e){this.updateModel(null,e),this.clearEditableLabel(),this.onModelTouched(),this.onChange.emit({originalEvent:e,value:this.value}),this.onClear.emit(e),this.resetFilter()}writeControlValue(e,n){this.filter&&this.resetFilter(),this.value=e,this.allowModelChange()&&this.onModelChange(e),n(this.value),this.updateEditableLabel(),this.cd.markForCheck()}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()==="filled",[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label===this.placeholder,clearable:this.showClear,disabled:this.$disabled(),[this.size()]:this.size(),empty:!this.editable&&!this.selectedItemTemplate&&(!this.label?.()||this.label()==="p-emptylabel"||this.label()?.length===0)})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({["overlay-"+this.$appendTo()]:"overlay-"+this.$appendTo()})}static \u0275fac=function(n){return new(n||t)(j(ot),j(or))};static \u0275cmp=N({type:t,selectors:[["p-select"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,Bc,4)(r,Rc,4)(r,$c,4)(r,Hc,4)(r,zc,4)(r,Xs,4)(r,jc,4)(r,Uc,4)(r,Wc,4)(r,Gc,4)(r,Kc,4)(r,qc,4)(r,Zc,4)(r,Qc,4)(r,Yc,4)(r,Xc,4)(r,qe,4),n&2){let s;A(s=L())&&(i.itemTemplate=s.first),A(s=L())&&(i.groupTemplate=s.first),A(s=L())&&(i.loaderTemplate=s.first),A(s=L())&&(i.selectedItemTemplate=s.first),A(s=L())&&(i.headerTemplate=s.first),A(s=L())&&(i.filterTemplate=s.first),A(s=L())&&(i.footerTemplate=s.first),A(s=L())&&(i.emptyFilterTemplate=s.first),A(s=L())&&(i.emptyTemplate=s.first),A(s=L())&&(i.dropdownIconTemplate=s.first),A(s=L())&&(i.loadingIconTemplate=s.first),A(s=L())&&(i.clearIconTemplate=s.first),A(s=L())&&(i.filterIconTemplate=s.first),A(s=L())&&(i.onIconTemplate=s.first),A(s=L())&&(i.offIconTemplate=s.first),A(s=L())&&(i.cancelIconTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&_t(Xs,5)(Jc,5)(eu,5)(tu,5)(nu,5)(iu,5)(ou,5)(ru,5),n&2){let r;A(r=L())&&(i.filterViewChild=r.first),A(r=L())&&(i.focusInputViewChild=r.first),A(r=L())&&(i.editableInputViewChild=r.first),A(r=L())&&(i.itemsViewChild=r.first),A(r=L())&&(i.scroller=r.first),A(r=L())&&(i.overlayViewChild=r.first),A(r=L())&&(i.firstHiddenFocusableElementOnOverlay=r.first),A(r=L())&&(i.lastHiddenFocusableElementOnOverlay=r.first)}},hostVars:4,hostBindings:function(n,i){n&1&&K("click",function(s){return i.onContainerClick(s)}),n&2&&(D("id",i.id)("data-p",i.containerDataP),y(i.cn(i.cx("root"),i.styleClass)))},inputs:{id:"id",scrollHeight:"scrollHeight",filter:[2,"filter","filter",T],panelStyle:"panelStyle",styleClass:"styleClass",panelStyleClass:"panelStyleClass",readonly:[2,"readonly","readonly",T],editable:[2,"editable","editable",T],tabindex:[2,"tabindex","tabindex",Se],placeholder:"placeholder",loadingIcon:"loadingIcon",filterPlaceholder:"filterPlaceholder",filterLocale:"filterLocale",inputId:"inputId",dataKey:"dataKey",filterBy:"filterBy",filterFields:"filterFields",autofocus:[2,"autofocus","autofocus",T],resetFilterOnHide:[2,"resetFilterOnHide","resetFilterOnHide",T],checkmark:[2,"checkmark","checkmark",T],dropdownIcon:"dropdownIcon",loading:[2,"loading","loading",T],optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",optionGroupLabel:"optionGroupLabel",optionGroupChildren:"optionGroupChildren",group:[2,"group","group",T],showClear:[2,"showClear","showClear",T],emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",lazy:[2,"lazy","lazy",T],virtualScroll:[2,"virtualScroll","virtualScroll",T],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",Se],virtualScrollOptions:"virtualScrollOptions",overlayOptions:"overlayOptions",ariaFilterLabel:"ariaFilterLabel",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",filterMatchMode:"filterMatchMode",tooltip:"tooltip",tooltipPosition:"tooltipPosition",tooltipPositionStyle:"tooltipPositionStyle",tooltipStyleClass:"tooltipStyleClass",focusOnHover:[2,"focusOnHover","focusOnHover",T],selectOnFocus:[2,"selectOnFocus","selectOnFocus",T],autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",T],autofocusFilter:[2,"autofocusFilter","autofocusFilter",T],filterValue:"filterValue",options:"options",appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onChange:"onChange",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onClick:"onClick",onShow:"onShow",onHide:"onHide",onClear:"onClear",onLazyLoad:"onLazyLoad"},features:[U([hp,fi,{provide:na,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],decls:11,vars:18,consts:[["elseBlock",""],["overlay",""],["content",""],["focusInput",""],["defaultPlaceholder",""],["editableInput",""],["firstHiddenFocusableEl",""],["buildInItems",""],["lastHiddenFocusableEl",""],["builtInFilterElement",""],["filter",""],["scroller",""],["loader",""],["items",""],["emptyFilter",""],["empty",""],["role","combobox",3,"class","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus","focus","blur","keydown",4,"ngIf"],["type","text",3,"class","pBind","pAutoFocus","input","keydown","focus","blur",4,"ngIf"],[4,"ngIf"],["role","button","aria-label","dropdown trigger","aria-haspopup","listbox",3,"pBind"],[4,"ngIf","ngIfElse"],[3,"visibleChange","onBeforeEnter","onAfterLeave","onHide","hostAttrSelector","visible","options","target","appendTo","unstyled","pt","motionOptions"],["role","combobox",3,"focus","blur","keydown","pBind","pTooltip","pTooltipUnstyled","tooltipPosition","positionStyle","tooltipStyleClass","pAutoFocus"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","text",3,"input","keydown","focus","blur","pBind","pAutoFocus"],["data-p-icon","times",3,"class","pBind","click",4,"ngIf"],[3,"class","pBind","click",4,"ngIf"],["data-p-icon","times",3,"click","pBind"],[3,"click","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngTemplateOutlet"],["aria-hidden","true",3,"class","pBind",4,"ngIf"],["aria-hidden","true",3,"pBind"],[3,"class","pBind",4,"ngIf"],["data-p-icon","chevron-down",3,"class","pBind",4,"ngIf"],[3,"pBind"],["data-p-icon","chevron-down",3,"pBind"],[3,"ngStyle","pBind"],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","pBind"],["hostName","select",3,"items","style","itemSize","autoSize","lazy","options","pt","onLazyLoad",4,"ngIf"],[3,"pt","unstyled"],["pInputText","","type","text","role","searchbox","autocomplete","off",3,"input","keydown","blur","pSize","value","variant","pt","unstyled"],["data-p-icon","search",3,"pBind",4,"ngIf"],[3,"pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],["hostName","select",3,"onLazyLoad","items","itemSize","autoSize","lazy","options","pt"],["role","listbox",3,"pBind"],["ngFor","",3,"ngForOf"],["role","option",3,"class","ngStyle","pBind",4,"ngIf"],["role","option",3,"ngStyle","pBind"],[3,"onClick","onMouseEnter","id","option","checkmark","selected","label","disabled","template","focused","ariaPosInset","ariaSetSize","index","unstyled","scrollerOptions"]],template:function(n,i){if(n&1){let r=be();b(0,uu,6,25,"span",16)(1,pu,2,20,"input",17)(2,bu,3,2,"ng-container",18),E(3,"div",19),b(4,xu,3,2,"ng-container",20)(5,Du,2,2,"ng-template",null,0,_e),O(),E(7,"p-overlay",21,1),No("visibleChange",function(a){return B(r),Vo(i.overlayVisible,a)||(i.overlayVisible=a),R(a)}),K("onBeforeEnter",function(a){return i.onOverlayBeforeEnter(a)})("onAfterLeave",function(a){return i.onOverlayAfterLeave(a)})("onHide",function(){return i.hide()}),b(9,dp,13,23,"ng-template",null,2,_e),O()}if(n&2){let r=xe(6);l("ngIf",!i.editable),h(),l("ngIf",i.editable),h(),l("ngIf",i.isVisibleClearIcon),h(),y(i.cx("dropdown")),l("pBind",i.ptm("dropdown")),D("aria-expanded",i.overlayVisible??!1)("data-pc-section","trigger"),h(),l("ngIf",i.loading)("ngIfElse",r),h(3),l("hostAttrSelector",i.$attrSelector),Fo("visible",i.overlayVisible),l("options",i.overlayOptions)("target","@parent")("appendTo",i.$appendTo())("unstyled",i.unstyled())("pt",i.ptm("pcOverlay"))("motionOptions",i.motionOptions())}},dependencies:[se,vt,Fe,Ve,Ge,mp,Gs,Yt,ai,us,ds,cs,Es,ro,so,po,te,he,M],encapsulation:2,changeDetection:0})}return t})(),hv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ia,te,te]})}return t})();var oa=`
    .p-divider-horizontal {
        display: flex;
        width: 100%;
        position: relative;
        align-items: center;
        margin: dt('divider.horizontal.margin');
        padding: dt('divider.horizontal.padding');
    }

    .p-divider-horizontal:before {
        position: absolute;
        display: block;
        inset-block-start: 50%;
        inset-inline-start: 0;
        width: 100%;
        content: '';
        border-block-start: 1px solid dt('divider.border.color');
    }

    .p-divider-horizontal .p-divider-content {
        padding: dt('divider.horizontal.content.padding');
    }

    .p-divider-vertical {
        min-height: 100%;
        display: flex;
        position: relative;
        justify-content: center;
        margin: dt('divider.vertical.margin');
        padding: dt('divider.vertical.padding');
    }

    .p-divider-vertical:before {
        position: absolute;
        display: block;
        inset-block-start: 0;
        inset-inline-start: 50%;
        height: 100%;
        content: '';
        border-inline-start: 1px solid dt('divider.border.color');
    }

    .p-divider.p-divider-vertical .p-divider-content {
        padding: dt('divider.vertical.content.padding');
    }

    .p-divider-content {
        z-index: 1;
        background: dt('divider.content.background');
        color: dt('divider.content.color');
    }

    .p-divider-solid.p-divider-horizontal:before {
        border-block-start-style: solid;
    }

    .p-divider-solid.p-divider-vertical:before {
        border-inline-start-style: solid;
    }

    .p-divider-dashed.p-divider-horizontal:before {
        border-block-start-style: dashed;
    }

    .p-divider-dashed.p-divider-vertical:before {
        border-inline-start-style: dashed;
    }

    .p-divider-dotted.p-divider-horizontal:before {
        border-block-start-style: dotted;
    }

    .p-divider-dotted.p-divider-vertical:before {
        border-inline-start-style: dotted;
    }

    .p-divider-left:dir(rtl),
    .p-divider-right:dir(rtl) {
        flex-direction: row-reverse;
    }
`;var fp=["*"],gp={root:({instance:t})=>({justifyContent:t.layout==="horizontal"?t.align==="center"||t.align==null?"center":t.align==="left"?"flex-start":t.align==="right"?"flex-end":null:null,alignItems:t.layout==="vertical"?t.align==="center"||t.align==null?"center":t.align==="top"?"flex-start":t.align==="bottom"?"flex-end":null:null})},bp={root:({instance:t})=>["p-divider p-component","p-divider-"+t.layout,"p-divider-"+t.type,{"p-divider-left":t.layout==="horizontal"&&(!t.align||t.align==="left")},{"p-divider-center":t.layout==="horizontal"&&t.align==="center"},{"p-divider-right":t.layout==="horizontal"&&t.align==="right"},{"p-divider-top":t.layout==="vertical"&&t.align==="top"},{"p-divider-center":t.layout==="vertical"&&(!t.align||t.align==="center")},{"p-divider-bottom":t.layout==="vertical"&&t.align==="bottom"}],content:"p-divider-content"},ra=(()=>{class t extends q{name="divider";style=oa;classes=bp;inlineStyles=gp;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var sa=new z("DIVIDER_INSTANCE"),yp=(()=>{class t extends Q{componentName="Divider";$pcDivider=_(sa,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;layout="horizontal";type="solid";align;_componentStyle=_(ra);get dataP(){return this.cn({[this.align]:this.align,[this.layout]:this.layout,[this.type]:this.type})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-divider"]],hostAttrs:["role","separator"],hostVars:6,hostBindings:function(n,i){n&2&&(D("aria-orientation",i.layout)("data-p",i.dataP),Ee(i.sx("root")),y(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",layout:"layout",type:"type",align:"align"},features:[U([ra,{provide:sa,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:fp,decls:2,vars:3,consts:[[3,"pBind"]],template:function(n,i){n&1&&(fe(),E(0,"div",0),pe(1),O()),n&2&&(y(i.cx("content")),l("pBind",i.ptm("content")))},dependencies:[se,te,he,M],encapsulation:2,changeDetection:0})}return t})(),Av=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[yp,he,he]})}return t})();var aa=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`;var da=(t,o)=>({instance:t,processedItem:o}),vp=()=>({exact:!1}),Cp=(t,o)=>({$implicit:t,root:o});function Ip(t,o){if(t&1&&Z(0,"li",6),t&2){let e=d().$implicit,n=d();Ee(n.getItemProp(e,"style")),y(n.cn(n.cx("separator"),e==null?null:e.styleClass)),l("pBind",n.ptm("separator")),D("id",n.getItemId(e))}}function xp(t,o){if(t&1&&Z(0,"span",17),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemIcon"),r.getItemProp(n,"icon"),r.getItemProp(n,"iconClass"))),l("ngStyle",r.getItemProp(n,"iconStyle"))("pBind",r.getPTOptions(n,i,"itemIcon")),D("tabindex",-1)}}function Sp(t,o){if(t&1&&(E(0,"span",18),Me(1),O()),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemLabel"),r.getItemProp(n,"labelClass"))),l("ngStyle",r.getItemProp(n,"labelStyle"))("id",r.getItemLabelId(n))("pBind",r.getPTOptions(n,i,"itemLabel")),h(),nn(" ",r.getItemLabel(n)," ")}}function Tp(t,o){if(t&1&&Z(0,"span",19),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemLabel"),r.getItemProp(n,"labelClass"))),l("ngStyle",r.getItemProp(n,"labelStyle"))("innerHTML",r.getItemLabel(n),Nt)("id",r.getItemLabelId(n))("pBind",r.getPTOptions(n,i,"itemLabel"))}}function Ep(t,o){if(t&1&&Z(0,"p-badge",20),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.getItemProp(n,"badgeStyleClass")),l("value",r.getItemProp(n,"badge"))("pt",r.getPTOptions(n,i,"pcBadge"))("unstyled",r.unstyled())}}function wp(t,o){if(t&1&&(ne(),Z(0,"svg",24)),t&2){let e=d(6),n=e.$implicit,i=e.index,r=d();y(r.cx("submenuIcon")),l("pBind",r.getPTOptions(n,i,"submenuIcon"))}}function Op(t,o){if(t&1&&(ne(),Z(0,"svg",25)),t&2){let e=d(6),n=e.$implicit,i=e.index,r=d();y(r.cx("submenuIcon")),l("pBind",r.getPTOptions(n,i,"submenuIcon"))}}function Mp(t,o){if(t&1&&(Y(0),b(1,wp,1,3,"svg",22)(2,Op,1,3,"svg",23),X()),t&2){let e=d(6);h(),l("ngIf",e.root),h(),l("ngIf",!e.root)}}function Dp(t,o){}function Ap(t,o){t&1&&b(0,Dp,0,0,"ng-template")}function Lp(t,o){if(t&1&&(Y(0),b(1,Mp,3,2,"ng-container",9)(2,Ap,1,0,null,21),X()),t&2){let e=d(5);h(),l("ngIf",!e.submenuiconTemplate),h(),l("ngTemplateOutlet",e.submenuiconTemplate)}}function kp(t,o){if(t&1&&(E(0,"a",13),b(1,xp,1,5,"span",14)(2,Sp,2,6,"span",15)(3,Tp,1,6,"ng-template",null,1,_e)(5,Ep,1,5,"p-badge",16)(6,Lp,3,2,"ng-container",9),O()),t&2){let e=xe(4),n=d(3),i=n.$implicit,r=n.index,s=d();y(s.cn(s.cx("itemLink"),s.getItemProp(i,"linkClass"))),l("ngStyle",s.getItemProp(i,"linkStyle"))("pBind",s.getPTOptions(i,r,"itemLink")),D("href",s.getItemProp(i,"url"),Fn)("data-automationid",s.getItemProp(i,"automationId"))("title",s.getItemProp(i,"title"))("target",s.getItemProp(i,"target"))("tabindex",-1),h(),l("ngIf",s.getItemProp(i,"icon")),h(),l("ngIf",s.getItemProp(i,"escape"))("ngIfElse",e),h(3),l("ngIf",s.getItemProp(i,"badge")),h(),l("ngIf",s.isItemGroup(i))}}function Fp(t,o){if(t&1&&Z(0,"span",17),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemIcon"),r.getItemProp(n,"icon"),r.getItemProp(n,"iconClass"))),l("ngStyle",r.getItemProp(n,"iconStyle"))("pBind",r.getPTOptions(n,i,"itemIcon")),D("tabindex",-1)}}function Vp(t,o){if(t&1&&(E(0,"span",17),Me(1),O()),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemLabel"),r.getItemProp(n,"labelClass"))),l("ngStyle",r.getItemProp(n,"labelStyle"))("pBind",r.getPTOptions(n,i,"itemLabel")),h(),Re(r.getItemLabel(n))}}function Np(t,o){if(t&1&&Z(0,"span",28),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.cn(r.cx("itemLabel"),r.getItemProp(n,"labelClass"))),l("ngStyle",r.getItemProp(n,"labelStyle"))("innerHTML",r.getItemLabel(n),Nt)("pBind",r.getPTOptions(n,i,"itemLabel"))}}function Pp(t,o){if(t&1&&Z(0,"p-badge",20),t&2){let e=d(4),n=e.$implicit,i=e.index,r=d();y(r.getItemProp(n,"badgeStyleClass")),l("value",r.getItemProp(n,"badge"))("pt",r.getPTOptions(n,i,"pcBadge"))("unstyled",r.unstyled())}}function Bp(t,o){if(t&1&&(ne(),Z(0,"svg",24)),t&2){let e=d(6),n=e.$implicit,i=e.index,r=d();y(r.cx("submenuIcon")),l("pBind",r.getPTOptions(n,i,"submenuIcon"))}}function Rp(t,o){if(t&1&&(ne(),Z(0,"svg",25)),t&2){let e=d(6),n=e.$implicit,i=e.index,r=d();y(r.cx("submenuIcon")),l("pBind",r.getPTOptions(n,i,"submenuIcon"))}}function $p(t,o){if(t&1&&(Y(0),b(1,Bp,1,3,"svg",22)(2,Rp,1,3,"svg",23),X()),t&2){let e=d(6);h(),l("ngIf",e.root),h(),l("ngIf",!e.root)}}function Hp(t,o){}function zp(t,o){t&1&&b(0,Hp,0,0,"ng-template")}function jp(t,o){if(t&1&&(Y(0),b(1,$p,3,2,"ng-container",9)(2,zp,1,0,null,21),X()),t&2){let e=d(5);h(),l("ngIf",!e.submenuiconTemplate),h(),l("ngTemplateOutlet",e.submenuiconTemplate)}}function Up(t,o){if(t&1&&(E(0,"a",26),b(1,Fp,1,5,"span",14)(2,Vp,2,5,"span",27)(3,Np,1,5,"ng-template",null,2,_e)(5,Pp,1,5,"p-badge",16)(6,jp,3,2,"ng-container",9),O()),t&2){let e=xe(4),n=d(3),i=n.$implicit,r=n.index,s=d();y(s.cn(s.cx("itemLink"),s.getItemProp(i,"linkClass"))),l("routerLink",s.getItemProp(i,"routerLink"))("queryParams",s.getItemProp(i,"queryParams"))("routerLinkActive","p-menubar-item-link-active")("routerLinkActiveOptions",s.getItemProp(i,"routerLinkActiveOptions")||st(23,vp))("target",s.getItemProp(i,"target"))("ngStyle",s.getItemProp(i,"linkStyle"))("fragment",s.getItemProp(i,"fragment"))("queryParamsHandling",s.getItemProp(i,"queryParamsHandling"))("preserveFragment",s.getItemProp(i,"preserveFragment"))("skipLocationChange",s.getItemProp(i,"skipLocationChange"))("replaceUrl",s.getItemProp(i,"replaceUrl"))("state",s.getItemProp(i,"state"))("pBind",s.getPTOptions(i,r,"itemLink")),D("data-automationid",s.getItemProp(i,"automationId"))("title",s.getItemProp(i,"title"))("tabindex",-1),h(),l("ngIf",s.getItemProp(i,"icon")),h(),l("ngIf",s.getItemProp(i,"escape"))("ngIfElse",e),h(3),l("ngIf",s.getItemProp(i,"badge")),h(),l("ngIf",s.isItemGroup(i))}}function Wp(t,o){if(t&1&&(Y(0),b(1,kp,7,14,"a",11)(2,Up,7,24,"a",12),X()),t&2){let e=d(2).$implicit,n=d();h(),l("ngIf",!n.getItemProp(e,"routerLink")),h(),l("ngIf",n.getItemProp(e,"routerLink"))}}function Gp(t,o){}function Kp(t,o){t&1&&b(0,Gp,0,0,"ng-template")}function qp(t,o){if(t&1&&(Y(0),b(1,Kp,1,0,null,29),X()),t&2){let e=d(2).$implicit,n=d();h(),l("ngTemplateOutlet",n.itemTemplate)("ngTemplateOutletContext",we(2,Cp,e.item,n.root))}}function Zp(t,o){if(t&1){let e=be();E(0,"ul",30),K("itemClick",function(i){B(e);let r=d(3);return R(r.itemClick.emit(i))})("itemMouseEnter",function(i){B(e);let r=d(3);return R(r.onItemMouseEnter(i))}),O()}if(t&2){let e=d(2).$implicit,n=d();l("itemTemplate",n.itemTemplate)("items",e.items)("mobileActive",n.mobileActive)("autoDisplay",n.autoDisplay)("menuId",n.menuId)("activeItemPath",n.activeItemPath)("focusedItemId",n.focusedItemId)("level",n.level+1)("inlineStyles",n.sx("submenu",!0,we(13,da,n,e)))("pt",n.pt())("pBind",n.ptm("submenu"))("unstyled",n.unstyled()),D("aria-labelledby",n.getItemLabelId(e))}}function Qp(t,o){if(t&1){let e=be();E(0,"li",7,0)(2,"div",8),K("click",function(i){B(e);let r=d().$implicit,s=d();return R(s.onItemClick(i,r))})("mouseenter",function(i){B(e);let r=d().$implicit,s=d();return R(s.onItemMouseEnter({$event:i,processedItem:r}))}),b(3,Wp,3,2,"ng-container",9)(4,qp,2,5,"ng-container",9),O(),b(5,Zp,1,16,"ul",10),O()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d();Ee(r.getItemProp(n,"style")),y(r.cn(r.cx("item",we(23,da,r,n)),r.getItemProp(n,"styleClass"))),l("pBind",r.getPTOptions(n,i,"item"))("tooltipOptions",r.getItemProp(n,"tooltipOptions"))("pTooltipUnstyled",r.unstyled()),D("id",r.getItemId(n))("data-p-highlight",r.isItemActive(n))("data-p-focused",r.isItemFocused(n))("data-p-disabled",r.isItemDisabled(n))("aria-label",r.getItemLabel(n))("aria-disabled",r.isItemDisabled(n)||void 0)("aria-haspopup",r.isItemGroup(n)&&!r.getItemProp(n,"to")?"menu":void 0)("aria-expanded",r.isItemGroup(n)?r.isItemActive(n):void 0)("aria-setsize",r.getAriaSetSize())("aria-posinset",r.getAriaPosInset(i)),h(2),y(r.cx("itemContent")),l("pBind",r.getPTOptions(n,i,"itemContent")),h(),l("ngIf",!r.itemTemplate),h(),l("ngIf",r.itemTemplate),h(),l("ngIf",r.isItemVisible(n)&&r.isItemGroup(n))}}function Yp(t,o){if(t&1&&b(0,Ip,1,6,"li",4)(1,Qp,6,26,"li",5),t&2){let e=o.$implicit,n=d();l("ngIf",n.isItemVisible(e)&&n.getItemProp(e,"separator")),h(),l("ngIf",n.isItemVisible(e)&&!n.getItemProp(e,"separator"))}}var Xp=["start"],Jp=["end"],eh=["item"],th=["menuicon"],nh=["submenuicon"],ih=["menubutton"],oh=["rootmenu"],rh=["*"];function sh(t,o){t&1&&ie(0)}function ah(t,o){if(t&1&&(E(0,"div",7),b(1,sh,1,0,"ng-container",8),O()),t&2){let e=d();y(e.cx("start")),l("pBind",e.ptm("start")),h(),l("ngTemplateOutlet",e.startTemplate||e._startTemplate)}}function lh(t,o){if(t&1&&(ne(),Z(0,"svg",11)),t&2){let e=d(2);l("pBind",e.ptm("buttonIcon"))}}function dh(t,o){}function ch(t,o){t&1&&b(0,dh,0,0,"ng-template")}function uh(t,o){if(t&1){let e=be();E(0,"a",9,2),K("click",function(i){B(e);let r=d();return R(r.menuButtonClick(i))})("keydown",function(i){B(e);let r=d();return R(r.menuButtonKeydown(i))}),b(2,lh,1,1,"svg",10)(3,ch,1,0,null,8),O()}if(t&2){let e=d();y(e.cx("button")),l("pBind",e.ptm("button")),D("aria-haspopup",!!(e.model.length&&e.model.length>0))("aria-expanded",e.mobileActive)("aria-controls",e.id)("aria-label",e.config.translation.aria.navigation),h(2),l("ngIf",!e.menuIconTemplate&&!e._menuIconTemplate),h(),l("ngTemplateOutlet",e.menuIconTemplate||e._menuIconTemplate)}}function ph(t,o){t&1&&ie(0)}function hh(t,o){if(t&1&&(E(0,"div",7),b(1,ph,1,0,"ng-container",8),O()),t&2){let e=d();y(e.cx("end")),l("pBind",e.ptm("end")),h(),l("ngTemplateOutlet",e.endTemplate||e._endTemplate)}}function mh(t,o){if(t&1&&(E(0,"div"),pe(1),O()),t&2){let e=d();y(e.cx("end"))}}var fh={submenu:({instance:t,processedItem:o})=>({display:t.isItemActive(o)?"flex":"none"})},gh={root:({instance:t})=>["p-menubar p-component",{"p-menubar-mobile":t.queryMatches(),"p-menubar-mobile-active":t.mobileActive}],start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:({instance:t,processedItem:o})=>["p-menubar-item",{"p-menubar-item-active":t.isItemActive(o),"p-focus":t.isItemFocused(o),"p-disabled":t.isItemDisabled(o)}],itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},mo=(()=>{class t extends q{name="menubar";style=aa;classes=gh;inlineStyles=fh;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var la=new z("MENUBAR_INSTANCE"),fo=(()=>{class t{autoHide;autoHideDelay;mouseLeaves=new Qe;mouseLeft$=this.mouseLeaves.pipe(Eo(()=>So(this.autoHideDelay)),To(e=>this.autoHide&&e));static \u0275fac=function(n){return new(n||t)};static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})(),bh=(()=>{class t extends Q{items;itemTemplate;root=!1;autoZIndex=!0;baseZIndex=0;mobileActive;autoDisplay;menuId;ariaLabel;ariaLabelledBy;level=0;focusedItemId;activeItemPath;inlineStyles;submenuiconTemplate;itemClick=new V;itemMouseEnter=new V;menuFocus=new V;menuBlur=new V;menuKeydown=new V;mouseLeaveSubscriber;menubarService=_(fo);_componentStyle=_(mo);hostName="Menubar";onInit(){this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.cd.markForCheck()})}onItemClick(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.itemClick.emit({originalEvent:e,processedItem:n,isFocus:!0})}getItemProp(e,n,i=null){return e&&e.item?Ne(e.item[n],i):void 0}getItemId(e){return e.item&&e.item?.id?e.item.id:`${this.menuId}_${e.key}`}getItemLabelId(e){return`${this.menuId}_${e.key}_label`}getItemLabel(e){return this.getItemProp(e,"label")}isItemVisible(e){return this.getItemProp(e,"visible")!==!1}isItemActive(e){return this.activeItemPath?this.activeItemPath.some(n=>n.key===e.key):!1}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemFocused(e){return this.focusedItemId===this.getItemId(e)}isItemGroup(e){return ye(e.items)}getAriaSetSize(){return this.items.filter(e=>this.isItemVisible(e)&&!this.getItemProp(e,"separator")).length}getAriaPosInset(e){return e-this.items.slice(0,e).filter(n=>this.isItemVisible(n)&&this.getItemProp(n,"separator")).length+1}onItemMouseEnter(e){if(this.autoDisplay){let{event:n,processedItem:i}=e;this.itemMouseEnter.emit({originalEvent:n,processedItem:i})}}getPTOptions(e,n,i){return this.ptm(i,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275cmp=N({type:t,selectors:[["p-menubarSub"],["p-menubarsub"],["","pMenubarSub",""]],hostVars:7,hostBindings:function(n,i){n&2&&(D("id",i.root?i.menuId:null)("aria-activedescendant",i.focusedItemId)("role","menubar"),Ee(i.inlineStyles),y(i.level===0?i.cx("rootList"):i.cx("submenu")))},inputs:{items:"items",itemTemplate:"itemTemplate",root:[2,"root","root",T],autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",Se],mobileActive:[2,"mobileActive","mobileActive",T],autoDisplay:[2,"autoDisplay","autoDisplay",T],menuId:"menuId",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",level:[2,"level","level",Se],focusedItemId:"focusedItemId",activeItemPath:"activeItemPath",inlineStyles:"inlineStyles",submenuiconTemplate:"submenuiconTemplate"},outputs:{itemClick:"itemClick",itemMouseEnter:"itemMouseEnter",menuFocus:"menuFocus",menuBlur:"menuBlur",menuKeydown:"menuKeydown"},features:[S],decls:1,vars:1,consts:[["listItem",""],["htmlLabel",""],["htmlRouteLabel",""],["ngFor","",3,"ngForOf"],["role","separator",3,"style","class","pBind",4,"ngIf"],["role","menuitem","pTooltip","",3,"style","class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["role","menuitem","pTooltip","",3,"pBind","tooltipOptions","pTooltipUnstyled"],[3,"click","mouseenter","pBind"],[4,"ngIf"],["pMenubarSub","",3,"itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled","itemClick","itemMouseEnter",4,"ngIf"],["pRipple","",3,"class","ngStyle","pBind",4,"ngIf"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","class","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","ngStyle","id","pBind",4,"ngIf","ngIfElse"],[3,"class","value","pt","unstyled",4,"ngIf"],[3,"ngStyle","pBind"],[3,"ngStyle","id","pBind"],[3,"ngStyle","innerHTML","id","pBind"],[3,"value","pt","unstyled"],[4,"ngTemplateOutlet"],["data-p-icon","angle-down",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-right",3,"class","pBind",4,"ngIf"],["data-p-icon","angle-down",3,"pBind"],["data-p-icon","angle-right",3,"pBind"],["pRipple","",3,"routerLink","queryParams","routerLinkActive","routerLinkActiveOptions","target","ngStyle","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"ngStyle","innerHTML","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pMenubarSub","",3,"itemClick","itemMouseEnter","itemTemplate","items","mobileActive","autoDisplay","menuId","activeItemPath","focusedItemId","level","inlineStyles","pt","pBind","unstyled"]],template:function(n,i){n&1&&b(0,Yp,2,2,"ng-template",3),n&2&&l("ngForOf",i.items)},dependencies:[t,se,vt,Fe,Ve,Ge,Ht,Nn,Pn,Et,Xt,Yt,M,os,rs,Tt,Ft,te,he],encapsulation:2})}return t})(),yh=(()=>{class t extends Q{document;platformId;el;renderer;cd;menubarService;componentName="Menubar";$pcMenubar=_(la,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}set model(e){this._model=e,this._processedItems=this.createProcessedItems(this._model||[])}get model(){return this._model}styleClass;autoZIndex=!0;baseZIndex=0;autoDisplay=!0;autoHide;breakpoint="960px";autoHideDelay=100;id;ariaLabel;ariaLabelledBy;onFocus=new V;onBlur=new V;menubutton;rootmenu;mobileActive;matchMediaListener;query;queryMatches=H(!1);outsideClickListener;resizeListener;mouseLeaveSubscriber;dirty=!1;focused=!1;activeItemPath=H([]);number=H(0);focusedItemInfo=H({index:-1,level:0,parentKey:"",item:null});searchValue="";searchTimeout;_processedItems;_componentStyle=_(mo);_model;get visibleItems(){let e=this.activeItemPath().find(n=>n.key===this.focusedItemInfo().parentKey);return e?e.items:this.processedItems}get processedItems(){return(!this._processedItems||!this._processedItems.length)&&(this._processedItems=this.createProcessedItems(this.model||[])),this._processedItems}get focusedItemId(){let e=this.focusedItemInfo();return e.item&&e.item?.id?e.item.id:e.index!==-1?`${this.id}${ye(e.parentKey)?"_"+e.parentKey:""}_${e.index}`:null}constructor(e,n,i,r,s,a){super(),this.document=e,this.platformId=n,this.el=i,this.renderer=r,this.cd=s,this.menubarService=a,ce(()=>{let c=this.activeItemPath();ye(c)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())})}onInit(){this.bindMatchMediaListener(),this.menubarService.autoHide=this.autoHide,this.menubarService.autoHideDelay=this.autoHideDelay,this.mouseLeaveSubscriber=this.menubarService.mouseLeft$.subscribe(()=>{this.hide()}),this.id=this.id||Pe("pn_id_")}startTemplate;endTemplate;itemTemplate;menuIconTemplate;submenuIconTemplate;templates;_startTemplate;_endTemplate;_itemTemplate;_menuIconTemplate;_submenuIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"menuicon":this._menuIconTemplate=e.template;break;case"submenuicon":this._submenuIconTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}createProcessedItems(e,n=0,i={},r=""){let s=[];return e&&e.forEach((a,c)=>{let u=(r!==""?r+"_":"")+c,p={item:a,index:c,level:n,key:u,parent:i,parentKey:r};p.items=this.createProcessedItems(a.items,n+1,p,u),s.push(p)}),s}bindMatchMediaListener(){if(ve(this.platformId)&&!this.matchMediaListener){let e=window.matchMedia(`(max-width: ${this.breakpoint})`);this.query=e,this.queryMatches.set(e.matches),this.matchMediaListener=()=>{this.queryMatches.set(e.matches),this.mobileActive=!1,this.cd.markForCheck()},e.addEventListener("change",this.matchMediaListener)}}unbindMatchMediaListener(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}getItemProp(e,n){return e?Ne(e[n]):void 0}menuButtonClick(e){this.toggle(e)}menuButtonKeydown(e){(e.code==="Enter"||e.code==="Space")&&this.menuButtonClick(e)}onItemClick(e){this.dirty=!0;let{originalEvent:n,processedItem:i}=e,r=this.isProcessedItemGroup(i),s=Xe(i.parent);if(this.isSelected(i)){let{index:c,key:u,level:p,parentKey:f,item:m}=i;this.activeItemPath.set(this.activeItemPath().filter(g=>u!==g.key&&u.startsWith(g.key))),this.focusedItemInfo.set({index:c,level:p,parentKey:f,item:m}),this.dirty=!s,ge(this.rootmenu?.el.nativeElement)}else if(r)this.onItemChange(e);else{let c=s?i:this.activeItemPath().find(u=>u.parentKey==="");this.hide(n),this.changeFocusedItemIndex(n,c?c.index:-1),this.mobileActive=!1,ge(this.rootmenu?.el.nativeElement)}}onItemMouseEnter(e){Ke()?this.onItemChange({event:e,processedItem:e.processedItem,focus:this.autoDisplay},"hover"):this.dirty&&this.onItemChange(e,"hover")}onMouseLeave(e){let n=this.menubarService.autoHide,i=this.menubarService.autoHideDelay;n&&setTimeout(()=>{this.menubarService.mouseLeaves.next(!0)},i)}changeFocusedItemIndex(e,n){let i=this.findVisibleItem(n);if(this.focusedItemInfo().index!==n){let r=this.focusedItemInfo();this.focusedItemInfo.set(me(C({},r),{item:i.item,index:n})),this.scrollInView()}}scrollInView(e=-1){let n=e!==-1?`${this.id}_${e}`:this.focusedItemId,i=Ce(this.rootmenu?.el.nativeElement,`li[id="${n}"]`);i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"})}onItemChange(e,n){let{processedItem:i,isFocus:r}=e;if(Xe(i))return;let{index:s,key:a,level:c,parentKey:u,items:p,item:f}=i,m=ye(p),g=this.activeItemPath().filter(x=>x.parentKey!==u&&x.parentKey!==a);m&&g.push(i),this.focusedItemInfo.set({index:s,level:c,parentKey:u,item:f}),m&&(this.dirty=!0),r&&ge(this.rootmenu?.el.nativeElement),!(n==="hover"&&this.queryMatches())&&this.activeItemPath.set(g)}toggle(e){this.mobileActive?(this.mobileActive=!1,Be.clear(this.rootmenu?.el.nativeElement),this.hide()):(this.mobileActive=!0,Be.set("menu",this.rootmenu?.el.nativeElement,this.config.zIndex.menu),setTimeout(()=>{this.show()},0)),this.bindOutsideClickListener(),e.preventDefault()}hide(e,n){this.mobileActive&&setTimeout(()=>{ge(this.menubutton?.nativeElement)},0),this.activeItemPath.set([]),this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),n&&ge(this.rootmenu?.el.nativeElement),this.dirty=!1}show(){let e=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:e?.item}),ge(this.rootmenu?.el.nativeElement)}onMenuMouseDown(e){this.dirty=!0}onMenuFocus(e){this.focused=!0;let n=e.relatedTarget;if((!n||!this.el.nativeElement.contains(n))&&this.focusedItemInfo().index===-1&&!this.activeItemPath().length&&!this.dirty){let r=this.findVisibleItem(this.findFirstFocusedItemIndex());this.focusedItemInfo.set({index:this.findFirstFocusedItemIndex(),level:0,parentKey:"",item:r?.item})}this.onFocus.emit(e)}onMenuBlur(e){let n=e.relatedTarget;n&&this.el.nativeElement.contains(n)||setTimeout(()=>{let i=this.document.activeElement;i&&this.el.nativeElement.contains(i)||(this.focused=!1,this.focusedItemInfo.set({index:-1,level:0,parentKey:"",item:null}),this.searchValue="",this.dirty=!1,this.onBlur.emit(e))})}onKeyDown(e){let n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&Rn(e.key)&&this.searchItems(e,e.key);break}}findVisibleItem(e){return ye(this.visibleItems)?this.visibleItems[e]:null}findFirstFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e}findFirstItemIndex(){return this.visibleItems.findIndex(e=>this.isValidItem(e))}findSelectedItemIndex(){return this.visibleItems.findIndex(e=>this.isValidSelectedItem(e))}isProcessedItemGroup(e){return e&&ye(e.items)}isSelected(e){return this.activeItemPath().some(n=>n.key===e.key)}isValidSelectedItem(e){return this.isValidItem(e)&&this.isSelected(e)}isValidItem(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)}isItemDisabled(e){return this.getItemProp(e,"disabled")}isItemSeparator(e){return this.getItemProp(e,"separator")}isItemMatched(e){return this.isValidItem(e)&&this.getProccessedItemLabel(e).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase())}isProccessedItemGroup(e){return e&&ye(e.items)}searchItems(e,n){this.searchValue=(this.searchValue||"")+n;let i=-1,r=!1;return this.focusedItemInfo().index!==-1?(i=this.visibleItems.slice(this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)),i=i===-1?this.visibleItems.slice(0,this.focusedItemInfo().index).findIndex(s=>this.isItemMatched(s)):i+this.focusedItemInfo().index):i=this.visibleItems.findIndex(s=>this.isItemMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedItemInfo().index===-1&&(i=this.findFirstFocusedItemIndex()),i!==-1&&this.changeFocusedItemIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}getProccessedItemLabel(e){return e?this.getItemLabel(e.item):void 0}getItemLabel(e){return this.getItemProp(e,"label")}onArrowDownKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?Xe(n.parent):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowRightKey(e));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onArrowRightKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(n?this.activeItemPath().find(r=>r.key===n.parentKey):null)this.isProccessedItemGroup(n)&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item}),this.onArrowDownKey(e));else{let r=this.focusedItemInfo().index!==-1?this.findNextItemIndex(this.focusedItemInfo().index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onArrowUpKey(e){let n=this.visibleItems[this.focusedItemInfo().index];if(Xe(n.parent)){if(this.isProccessedItemGroup(n)){this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo.set({index:-1,parentKey:n.key,item:n.item});let s=this.findLastItemIndex();this.changeFocusedItemIndex(e,s)}}else{let r=this.activeItemPath().find(s=>s.key===n.parentKey);if(this.focusedItemInfo().index===0){this.focusedItemInfo.set({index:-1,parentKey:r?r.parentKey:"",item:n.item}),this.searchValue="",this.onArrowLeftKey(e);let s=this.activeItemPath().filter(a=>a.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(s)}else{let s=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,s)}}e.preventDefault()}onArrowLeftKey(e){let n=this.visibleItems[this.focusedItemInfo().index],i=n?this.activeItemPath().find(r=>r.key===n.parentKey):null;if(i){this.onItemChange({originalEvent:e,processedItem:i});let r=this.activeItemPath().filter(s=>s.parentKey!==this.focusedItemInfo().parentKey);this.activeItemPath.set(r),e.preventDefault()}else{let r=this.focusedItemInfo().index!==-1?this.findPrevItemIndex(this.focusedItemInfo().index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}}onHomeKey(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()}onEndKey(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onEscapeKey(e){this.hide(e,!0),this.focusedItemInfo().index=this.findFirstFocusedItemIndex(),e.preventDefault()}onTabKey(e){if(this.focusedItemInfo().index!==-1){let n=this.visibleItems[this.focusedItemInfo().index];!this.isProccessedItemGroup(n)&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()}onEnterKey(e){if(this.focusedItemInfo().index!==-1){let n=Ce(this.rootmenu?.el.nativeElement,`li[id="${`${this.focusedItemId}`}"]`),i=n&&(Ce(n,'[data-pc-section="itemlink"]')||Ce(n,"a,button"));i?i.click():n&&n.click()}e.preventDefault()}findLastFocusedItemIndex(){let e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e}findLastItemIndex(){return zt(this.visibleItems,e=>this.isValidItem(e))}findPrevItemIndex(e){let n=e>0?zt(this.visibleItems.slice(0,e),i=>this.isValidItem(i)):-1;return n>-1?n:e}findNextItemIndex(e){let n=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(i=>this.isValidItem(i)):-1;return n>-1?n+e+1:e}bindResizeListener(){ve(this.platformId)&&(this.resizeListener||(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",e=>{Ke()||this.hide(e,!0),this.mobileActive=!1})))}bindOutsideClickListener(){ve(this.platformId)&&(this.outsideClickListener||(this.outsideClickListener=this.renderer.listen(this.document,"click",e=>{let n=this.rootmenu?.el.nativeElement!==e.target&&!this.rootmenu?.el.nativeElement?.contains(e.target),i=this.mobileActive&&this.menubutton?.nativeElement!==e.target&&!this.menubutton?.nativeElement?.contains(e.target);n&&(i?this.mobileActive=!1:this.hide())})))}unbindOutsideClickListener(){this.outsideClickListener&&(this.outsideClickListener(),this.outsideClickListener=null)}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}onDestroy(){this.mouseLeaveSubscriber?.unsubscribe(),this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()}static \u0275fac=function(n){return new(n||t)(j(it),j(rt),j(Ye),j(ht),j($t),j(fo))};static \u0275cmp=N({type:t,selectors:[["p-menubar"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,Xp,4)(r,Jp,4)(r,eh,4)(r,th,4)(r,nh,4)(r,qe,4),n&2){let s;A(s=L())&&(i.startTemplate=s.first),A(s=L())&&(i.endTemplate=s.first),A(s=L())&&(i.itemTemplate=s.first),A(s=L())&&(i.menuIconTemplate=s.first),A(s=L())&&(i.submenuIconTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){if(n&1&&_t(ih,5)(oh,5),n&2){let r;A(r=L())&&(i.menubutton=r.first),A(r=L())&&(i.rootmenu=r.first)}},hostVars:2,hostBindings:function(n,i){n&2&&y(i.cn(i.cx("root"),i.styleClass))},inputs:{model:"model",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",Se],autoDisplay:[2,"autoDisplay","autoDisplay",T],autoHide:[2,"autoHide","autoHide",T],breakpoint:"breakpoint",autoHideDelay:[2,"autoHideDelay","autoHideDelay",Se],id:"id",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy"},outputs:{onFocus:"onFocus",onBlur:"onBlur"},features:[U([fo,mo,{provide:la,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],ngContentSelectors:rh,decls:7,vars:20,consts:[["rootmenu",""],["legacy",""],["menubutton",""],[3,"class","pBind",4,"ngIf"],["tabindex","0","role","button",3,"class","pBind","click","keydown",4,"ngIf"],["pMenubarSub","","tabindex","0",3,"itemClick","mousedown","focus","blur","keydown","itemMouseEnter","mouseleave","items","itemTemplate","menuId","root","baseZIndex","autoZIndex","mobileActive","autoDisplay","focusedItemId","submenuiconTemplate","activeItemPath","pt","pBind","unstyled"],[3,"class","pBind",4,"ngIf","ngIfElse"],[3,"pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","button",3,"click","keydown","pBind"],["data-p-icon","bars",3,"pBind",4,"ngIf"],["data-p-icon","bars",3,"pBind"]],template:function(n,i){if(n&1&&(fe(),b(0,ah,2,4,"div",3)(1,uh,4,9,"a",4),E(2,"ul",5,0),K("itemClick",function(s){return i.onItemClick(s)})("mousedown",function(s){return i.onMenuMouseDown(s)})("focus",function(s){return i.onMenuFocus(s)})("blur",function(s){return i.onMenuBlur(s)})("keydown",function(s){return i.onKeyDown(s)})("itemMouseEnter",function(s){return i.onItemMouseEnter(s)})("mouseleave",function(s){return i.onMouseLeave(s)}),O(),b(4,hh,2,4,"div",6)(5,mh,2,2,"ng-template",null,1,_e)),n&2){let r=xe(6);l("ngIf",i.startTemplate||i._startTemplate),h(),l("ngIf",i.model&&i.model.length>0),h(),l("items",i.processedItems)("itemTemplate",i.itemTemplate)("menuId",i.id)("root",!0)("baseZIndex",i.baseZIndex)("autoZIndex",i.autoZIndex)("mobileActive",i.mobileActive)("autoDisplay",i.autoDisplay)("focusedItemId",i.focused?i.focusedItemId:void 0)("submenuiconTemplate",i.submenuIconTemplate||i._submenuIconTemplate)("activeItemPath",i.activeItemPath())("pt",i.pt())("pBind",i.ptm("rootList"))("unstyled",i.unstyled()),D("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledBy),h(2),l("ngIf",i.endTemplate||i._endTemplate)("ngIfElse",r)}},dependencies:[se,Fe,Ve,Ht,bh,Xt,M,ss,Tt,te,he],encapsulation:2,changeDetection:0})}return t})(),a1=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[yh,te,te]})}return t})();var ca=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`;var _h=["pMenuItemContent",""],bi=t=>({$implicit:t}),vh=()=>({exact:!1}),Ch=t=>({item:t});function Ih(t,o){t&1&&ie(0)}function xh(t,o){if(t&1&&(E(0,"a",6),b(1,Ih,1,0,"ng-container",7),O()),t&2){let e=d(2),n=xe(4);y(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),l("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("pBind",e.getPTOptions("itemLink")),D("title",e.item.title)("href",e.item.url||null,Fn)("data-automationid",e.item.automationId)("tabindex",-1),h(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",le(11,bi,e.item))}}function Sh(t,o){t&1&&ie(0)}function Th(t,o){if(t&1&&(E(0,"a",8),b(1,Sh,1,0,"ng-container",7),O()),t&2){let e=d(2),n=xe(4);y(e.cn(e.cx("itemLink"),e.item==null?null:e.item.linkClass)),l("routerLink",e.item.routerLink)("queryParams",e.item.queryParams)("routerLinkActiveOptions",e.item.routerLinkActiveOptions||st(19,vh))("ngStyle",e.item==null?null:e.item.linkStyle)("target",e.item.target)("fragment",e.item.fragment)("queryParamsHandling",e.item.queryParamsHandling)("preserveFragment",e.item.preserveFragment)("skipLocationChange",e.item.skipLocationChange)("replaceUrl",e.item.replaceUrl)("state",e.item.state)("pBind",e.getPTOptions("itemLink")),D("data-automationid",e.item.automationId)("tabindex",-1)("title",e.item.title),h(),l("ngTemplateOutlet",n)("ngTemplateOutletContext",le(20,bi,e.item))}}function Eh(t,o){if(t&1&&(Y(0),b(1,xh,2,13,"a",4)(2,Th,2,22,"a",5),X()),t&2){let e=d();h(),l("ngIf",!(e.item!=null&&e.item.routerLink)),h(),l("ngIf",e.item==null?null:e.item.routerLink)}}function wh(t,o){}function Oh(t,o){t&1&&b(0,wh,0,0,"ng-template")}function Mh(t,o){if(t&1&&(Y(0),b(1,Oh,1,0,null,7),X()),t&2){let e=d();h(),l("ngTemplateOutlet",e.itemTemplate)("ngTemplateOutletContext",le(2,bi,e.item))}}function Dh(t,o){if(t&1&&Z(0,"span",12),t&2){let e=d(2);y(e.cn(e.cx("itemIcon",le(5,Ch,e.item)),e.item.iconClass)),l("pBind",e.getPTOptions("itemIcon"))("ngStyle",e.item.iconStyle),D("data-pc-section","itemicon")}}function Ah(t,o){if(t&1&&(E(0,"span",13),Me(1),O()),t&2){let e=d(2);y(e.cn(e.cx("itemLabel"),e.item.labelClass)),l("ngStyle",e.item.labelStyle)("pBind",e.getPTOptions("itemLabel")),D("data-pc-section","itemlabel"),h(),Re(e.item.label)}}function Lh(t,o){if(t&1&&(Z(0,"span",14),Ii(1,"safeHtml")),t&2){let e=d(2);y(e.cn(e.cx("itemLabel"),e.item.labelClass)),l("ngStyle",e.item.labelStyle)("innerHTML",xi(1,6,e.item.label),Nt)("pBind",e.getPTOptions("itemLabel")),D("data-pc-section","itemlabel")}}function kh(t,o){if(t&1&&Z(0,"p-badge",15),t&2){let e=d(2);l("styleClass",e.item.badgeStyleClass)("value",e.item.badge)("pt",e.getPTOptions("pcBadge"))("unstyled",e.unstyled())}}function Fh(t,o){if(t&1&&b(0,Dh,1,7,"span",9)(1,Ah,2,6,"span",10)(2,Lh,2,8,"ng-template",null,1,_e)(4,kh,1,4,"p-badge",11),t&2){let e=xe(3),n=d();l("ngIf",n.item.icon),h(),l("ngIf",n.item.escape!==!1)("ngIfElse",e),h(3),l("ngIf",n.item.badge)}}var Vh=["start"],Nh=["end"],Ph=["header"],Bh=["item"],Rh=["submenuheader"],$h=["list"],Hh=["container"],pa=(t,o)=>({item:t,id:o});function zh(t,o){t&1&&ie(0)}function jh(t,o){if(t&1&&(E(0,"div",8),b(1,zh,1,0,"ng-container",9),O()),t&2){let e=d(2);y(e.cx("start")),l("pBind",e.ptm("start")),D("data-pc-section","start"),h(),l("ngTemplateOutlet",e.startTemplate??e._startTemplate)}}function Uh(t,o){if(t&1&&Z(0,"li",13),t&2){let e=d(4);y(e.cx("separator")),l("pBind",e.ptm("separator")),D("data-pc-section","separator")}}function Wh(t,o){if(t&1&&(E(0,"span"),Me(1),O()),t&2){let e=d(3).$implicit;h(),Re(e.label)}}function Gh(t,o){if(t&1&&(Z(0,"span",17),Ii(1,"safeHtml")),t&2){let e=d(3).$implicit;l("innerHTML",xi(1,1,e.label),Nt)}}function Kh(t,o){if(t&1&&(Y(0),b(1,Wh,2,1,"span",16)(2,Gh,2,3,"ng-template",null,2,_e),X()),t&2){let e=xe(3),n=d(2).$implicit;h(),l("ngIf",n.escape!==!1)("ngIfElse",e)}}function qh(t,o){t&1&&ie(0)}function Zh(t,o){if(t&1&&(E(0,"li",14),b(1,Kh,4,2,"ng-container",7)(2,qh,1,0,"ng-container",15),O()),t&2){let e=d(),n=e.$implicit,i=e.index,r=d(3);y(r.cx("submenuLabel")),l("pBind",r.ptm("submenuLabel"))("tooltipOptions",n.tooltipOptions)("pTooltipUnstyled",r.unstyled()),D("data-automationid",n.automationId)("id",r.menuitemId(n,r.id,i))("data-pc-section","submenulabel"),h(),l("ngIf",!r.submenuHeaderTemplate&&!r._submenuHeaderTemplate),h(),l("ngTemplateOutlet",r.submenuHeaderTemplate??r._submenuHeaderTemplate)("ngTemplateOutletContext",le(11,bi,n))}}function Qh(t,o){if(t&1&&Z(0,"li",13),t&2){let e=d(5);y(e.cx("separator")),l("pBind",e.ptm("separator")),D("data-pc-section","separator")}}function Yh(t,o){if(t&1){let e=be();E(0,"li",19),K("onMenuItemClick",function(i){B(e);let r=d(),s=r.$implicit,a=r.index,c=d().index,u=d(3);return R(u.itemClick(i,u.menuitemId(s,u.id,c,a)))}),O()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d().index,s=d(3);Ee(n.style),y(s.cn(s.cx("item",we(17,pa,n,s.menuitemId(n,s.id,r,i))),n==null?null:n.styleClass)),l("pBind",s.ptm("item"))("pMenuItemContent",n)("itemTemplate",s.itemTemplate??s._itemTemplate)("idx",i)("menuitemId",s.menuitemId(n,s.id,r,i))("tooltipOptions",n.tooltipOptions)("pTooltipUnstyled",s.unstyled())("unstyled",s.unstyled()),D("aria-label",s.label(n.label))("data-p-focused",s.isItemFocused(s.menuitemId(n,s.id,r,i)))("data-p-disabled",s.disabled(n.disabled))("aria-disabled",s.disabled(n.disabled))("id",s.menuitemId(n,s.id,r,i))}}function Xh(t,o){if(t&1&&b(0,Qh,1,4,"li",11)(1,Yh,1,20,"li",18),t&2){let e=o.$implicit,n=d().$implicit;l("ngIf",e.separator&&(e.visible!==!1||n.visible!==!1)),h(),l("ngIf",!e.separator&&e.visible!==!1&&(e.visible!==void 0||n.visible!==!1))}}function Jh(t,o){if(t&1&&b(0,Uh,1,4,"li",11)(1,Zh,3,13,"li",12)(2,Xh,2,2,"ng-template",10),t&2){let e=o.$implicit;l("ngIf",e.separator&&e.visible!==!1),h(),l("ngIf",!e.separator),h(),l("ngForOf",e.items)}}function em(t,o){if(t&1&&b(0,Jh,3,3,"ng-template",10),t&2){let e=d(2);l("ngForOf",e.model)}}function tm(t,o){if(t&1&&Z(0,"li",13),t&2){let e=d(4);y(e.cx("separator")),l("pBind",e.ptm("separator")),D("data-pc-section","separator")}}function nm(t,o){if(t&1){let e=be();E(0,"li",21),K("onMenuItemClick",function(i){B(e);let r=d(),s=r.$implicit,a=r.index,c=d(3);return R(c.itemClick(i,c.menuitemId(s,c.id,a)))}),O()}if(t&2){let e=d(),n=e.$implicit,i=e.index,r=d(3);y(r.cn(r.cx("item",we(16,pa,n,r.menuitemId(n,r.id,i))),n==null?null:n.styleClass)),l("pBind",r.ptm("item"))("pMenuItemContent",n)("itemTemplate",r.itemTemplate??r._itemTemplate)("idx",i)("menuitemId",r.menuitemId(n,r.id,i))("ngStyle",n.style)("tooltipOptions",n.tooltipOptions)("unstyled",r.unstyled())("pTooltipUnstyled",r.unstyled()),D("aria-label",r.label(n.label))("data-p-focused",r.isItemFocused(r.menuitemId(n,r.id,i)))("data-p-disabled",r.disabled(n.disabled))("aria-disabled",r.disabled(n.disabled))("id",r.menuitemId(n,r.id,i))}}function im(t,o){if(t&1&&b(0,tm,1,4,"li",11)(1,nm,1,19,"li",20),t&2){let e=o.$implicit;l("ngIf",e.separator&&e.visible!==!1),h(),l("ngIf",!e.separator&&e.visible!==!1)}}function om(t,o){if(t&1&&b(0,im,2,2,"ng-template",10),t&2){let e=d(2);l("ngForOf",e.model)}}function rm(t,o){t&1&&ie(0)}function sm(t,o){if(t&1&&(E(0,"div",8),b(1,rm,1,0,"ng-container",9),O()),t&2){let e=d(2);y(e.cx("end")),l("pBind",e.ptm("end")),D("data-pc-section","end"),h(),l("ngTemplateOutlet",e.endTemplate??e._endTemplate)}}function am(t,o){if(t&1){let e=be();E(0,"div",4,0),K("click",function(i){B(e);let r=d();return R(r.onOverlayClick(i))})("pMotionOnBeforeEnter",function(i){B(e);let r=d();return R(r.onOverlayBeforeEnter(i))})("pMotionOnAfterLeave",function(){B(e);let i=d();return R(i.onOverlayAfterLeave())}),b(2,jh,2,5,"div",5),E(3,"ul",6,1),K("focus",function(i){B(e);let r=d();return R(r.onListFocus(i))})("blur",function(i){B(e);let r=d();return R(r.onListBlur(i))})("keydown",function(i){B(e);let r=d();return R(r.onListKeyDown(i))}),b(5,em,1,1,null,7)(6,om,1,1,null,7),O(),b(7,sm,2,5,"div",5),O()}if(t&2){let e=d();Ee(e.sx("root")),y(e.cn(e.cx("root"),e.styleClass)),l("ngStyle",e.style)("pBind",e.ptm("root"))("pMotion",e.visible||!e.popup)("pMotionName","p-anchored-overlay")("pMotionAppear",!!e.popup)("pMotionDisabled",!e.popup)("pMotionOptions",e.computedMotionOptions()),D("id",e.id)("data-p",e.dataP),h(2),l("ngIf",e.startTemplate??e._startTemplate),h(),y(e.cx("list")),l("pBind",e.ptm("list")),D("id",e.id+"_list")("tabindex",e.getTabIndexValue())("data-pc-section","menu")("aria-activedescendant",e.activedescendant())("aria-label",e.ariaLabel)("aria-labelledBy",e.ariaLabelledBy),h(2),l("ngIf",e.hasSubMenu()),h(),l("ngIf",!e.hasSubMenu()),h(),l("ngIf",e.endTemplate??e._endTemplate)}}var lm={root:({instance:t})=>({position:t.popup?"absolute":"relative"})},dm={root:({instance:t})=>["p-menu p-component",{"p-menu-overlay":t.popup}],start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:({instance:t,item:o,id:e})=>["p-menu-item",{"p-focus":t.focusedOptionId()&&e===t.focusedOptionId(),"p-disabled":t.disabled(o.disabled)},o.styleClass],itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:({item:t})=>["p-menu-item-icon",t.icon,t.iconClass],itemLabel:"p-menu-item-label"},gi=(()=>{class t extends q{name="menu";style=ca;classes=dm;inlineStyles=lm;static \u0275fac=(()=>{let e;return function(i){return(e||(e=I(t)))(i||t)}})();static \u0275prov=P({token:t,factory:t.\u0275fac})}return t})();var ua=new z("MENU_INSTANCE"),ha=(()=>{class t{platformId;sanitizer;constructor(e,n){this.platformId=e,this.sanitizer=n}transform(e){return!e||!ve(this.platformId)?e:this.sanitizer.bypassSecurityTrustHtml(e)}static \u0275fac=function(n){return new(n||t)(j(rt,16),j(Po,16))};static \u0275pipe=Do({name:"safeHtml",type:t,pure:!0})}return t})(),cm=(()=>{class t extends Q{item;itemTemplate;menuitemId=v("");idx=v(0);onMenuItemClick=new V;menu;_componentStyle=_(gi);hostName="Menu";constructor(e){super(),this.menu=e}onItemClick(e,n){this.onMenuItemClick.emit({originalEvent:e,item:n})}getPTOptions(e){return this.menu.getPTOptions(e,this.item,this.idx(),this.menuitemId())}static \u0275fac=function(n){return new(n||t)(j(yt(()=>ma)))};static \u0275cmp=N({type:t,selectors:[["","pMenuItemContent",""]],inputs:{item:[0,"pMenuItemContent","item"],itemTemplate:"itemTemplate",menuitemId:[1,"menuitemId"],idx:[1,"idx"]},outputs:{onMenuItemClick:"onMenuItemClick"},features:[U([gi]),S],attrs:_h,decls:5,vars:6,consts:[["itemContent",""],["htmlLabel",""],[3,"click","pBind"],[4,"ngIf"],["pRipple","",3,"class","ngStyle","target","pBind",4,"ngIf"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","class","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind",4,"ngIf"],["pRipple","",3,"ngStyle","target","pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["routerLinkActive","p-menu-item-link-active","pRipple","",3,"routerLink","queryParams","routerLinkActiveOptions","ngStyle","target","fragment","queryParamsHandling","preserveFragment","skipLocationChange","replaceUrl","state","pBind"],[3,"class","pBind","ngStyle",4,"ngIf"],[3,"class","ngStyle","pBind",4,"ngIf","ngIfElse"],[3,"styleClass","value","pt","unstyled",4,"ngIf"],[3,"pBind","ngStyle"],[3,"ngStyle","pBind"],[3,"ngStyle","innerHTML","pBind"],[3,"styleClass","value","pt","unstyled"]],template:function(n,i){n&1&&(E(0,"div",2),K("click",function(s){return i.onItemClick(s,i.item)}),b(1,Eh,3,2,"ng-container",3)(2,Mh,2,4,"ng-container",3)(3,Fh,5,4,"ng-template",null,0,_e),O()),n&2&&(y(i.cx("itemContent")),l("pBind",i.getPTOptions("itemContent")),D("data-pc-section","content"),h(),l("ngIf",!i.itemTemplate),h(),l("ngIf",i.itemTemplate))},dependencies:[se,Fe,Ve,Ge,Ht,Nn,Pn,Et,Xt,M,Tt,Ft,te,he,ha],encapsulation:2})}return t})(),ma=(()=>{class t extends Q{overlayService;componentName="Menu";model;popup;style;styleClass;autoZIndex=!0;baseZIndex=0;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";ariaLabel;ariaLabelledBy;id;tabindex=0;appendTo=v(void 0);motionOptions=v(void 0);computedMotionOptions=J(()=>C(C({},this.ptm("motion")),this.motionOptions()));onShow=new V;onHide=new V;onBlur=new V;onFocus=new V;listViewChild=Si("list");containerViewChild=Si("container");$appendTo=J(()=>this.appendTo()||this.config.overlayAppendTo());container;scrollHandler;documentClickListener;documentResizeListener;preventDocumentDefault;target;visible;focusedOptionId=J(()=>this.focusedOptionIndex()!==-1?this.focusedOptionIndex():null);focusedOptionIndex=H(-1);selectedOptionIndex=H(-1);focused=!1;overlayVisible=!1;$pcMenu=_(ua,{optional:!0,skipSelf:!0})??void 0;_componentStyle=_(gi);bindDirectiveInstance=_(M,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}constructor(e){super(),this.overlayService=e,this.id=this.id||Pe("pn_id_")}getPTOptions(e,n,i,r){return this.ptm(e,{context:{item:n,index:i,focused:this.isItemFocused(r),disabled:this.disabled(n.disabled)}})}toggle(e){this.visible?this.hide():this.show(e),this.preventDocumentDefault=!0}show(e){this.container&&!this.overlayVisible&&(this.container=void 0),this.target=e.currentTarget,this.visible=!0,this.preventDocumentDefault=!0,this.overlayVisible=!0,this.cd.markForCheck()}onInit(){this.popup||this.bindDocumentClickListener()}startTemplate;_startTemplate;endTemplate;_endTemplate;headerTemplate;_headerTemplate;itemTemplate;_itemTemplate;submenuHeaderTemplate;_submenuHeaderTemplate;templates;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"submenuheader":this._submenuHeaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}getTabIndexValue(){return this.tabindex!==void 0?this.tabindex.toString():null}onOverlayBeforeEnter(e){this.container=e.element,this.container&&(zo(this.container,{position:"absolute",top:"0"}),this.appendOverlay(),this.moveOnTop(),this.$attrSelector&&this.container?.setAttribute(this.$attrSelector,""),this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener(),jn(this.container,this.target),ge(this.listViewChild()?.nativeElement),this.onShow.emit({}))}onOverlayAfterLeave(){this.restoreOverlayAppend(),this.onOverlayHide(),this.overlayVisible=!1,this.onHide.emit({})}appendOverlay(){this.$appendTo()&&this.$appendTo()!=="self"&&(this.$appendTo()==="body"?dt(this.document.body,this.container):dt(this.$appendTo(),this.container))}restoreOverlayAppend(){this.container&&this.$appendTo()!=="self"&&dt(this.el.nativeElement,this.container)}moveOnTop(){this.autoZIndex&&Be.set("menu",this.container,this.baseZIndex+this.config.zIndex.menu)}hide(){this.visible=!1,this.cd.markForCheck()}onWindowResize(){this.visible&&!Ke()&&this.hide()}menuitemId(e,n,i,r){return e?.id??`${n}_${i}${r!==void 0?"_"+r:""}`}isItemFocused(e){return this.focusedOptionId()===e}label(e){return typeof e=="function"?e():e}disabled(e){return typeof e=="function"?e():typeof e>"u"?!1:e}activedescendant(){return this.focused?this.focusedOptionId():void 0}onListFocus(e){this.focused||(this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.onFocus.emit(e))}onListBlur(e){this.focused&&(this.focused=!1,this.changeFocusedOptionIndex(-1),this.selectedOptionIndex.set(-1),this.focusedOptionIndex.set(-1),this.onBlur.emit(e))}onListKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":this.onEnterKey(e);break;case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":case"Tab":this.popup&&(ge(this.target),this.hide()),this.overlayVisible&&this.hide();break;default:break}}onArrowDownKey(e){let n=this.findNextOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}onArrowUpKey(e){if(e.altKey&&this.popup)ge(this.target),this.hide(),e.preventDefault();else{let n=this.findPrevOptionIndex(this.focusedOptionIndex());this.changeFocusedOptionIndex(n),e.preventDefault()}}onHomeKey(e){this.changeFocusedOptionIndex(0),e.preventDefault()}onEndKey(e){this.changeFocusedOptionIndex(jt(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()}onEnterKey(e){let n=Ce(this.containerViewChild()?.nativeElement,`li[id="${`${this.focusedOptionIndex()}`}"]`),i=n&&(Ce(n,'[data-pc-section="itemlink"]')||Ce(n,"a,button"));this.popup&&ge(this.target),i?i.click():n&&n.click(),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}findNextOptionIndex(e){let i=[...jt(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i+1:0}findPrevOptionIndex(e){let i=[...jt(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]')].findIndex(r=>r.id===e);return i>-1?i-1:0}changeFocusedOptionIndex(e){let n=jt(this.containerViewChild()?.nativeElement,'li[data-pc-section="item"][data-p-disabled="false"]');if(n.length>0){let i=e>=n.length?n.length-1:e<0?0:e;i>-1&&this.focusedOptionIndex.set(n[i].getAttribute("id"))}}itemClick(e,n){let{originalEvent:i,item:r}=e;if(this.focused||(this.focused=!0,this.onFocus.emit()),r.disabled){i.preventDefault();return}!r.url&&!r.routerLink&&i.preventDefault(),r.command&&r.command({originalEvent:i,item:r}),this.popup&&this.hide(),!this.popup&&this.focusedOptionIndex()!==n&&this.focusedOptionIndex.set(n)}onOverlayClick(e){this.popup&&this.overlayService.add({originalEvent:e,target:this.el.nativeElement}),this.preventDocumentDefault=!0}bindDocumentClickListener(){if(!this.documentClickListener&&ve(this.platformId)){let e=this.el?this.el.nativeElement.ownerDocument:"document";this.documentClickListener=this.renderer.listen(e,"click",n=>{let i=this.containerViewChild()?.nativeElement&&!this.containerViewChild()?.nativeElement.contains(n.target),r=!(this.target&&(this.target===n.target||this.target.contains(n.target)));!this.popup&&i&&r&&this.onListBlur(n),this.preventDocumentDefault&&this.overlayVisible&&i&&r&&(this.hide(),this.preventDocumentDefault=!1)})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}bindDocumentResizeListener(){if(!this.documentResizeListener&&ve(this.platformId)){let e=this.document.defaultView;this.documentResizeListener=this.renderer.listen(e,"resize",this.onWindowResize.bind(this))}}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){!this.scrollHandler&&ve(this.platformId)&&(this.scrollHandler=new St(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler?.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&(this.scrollHandler.unbindScrollListener(),this.scrollHandler=null)}onOverlayHide(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.preventDocumentDefault=!1,this.cd.destroyed||(this.target=null),this.container&&(this.autoZIndex&&Be.clear(this.container),this.container=void 0)}onDestroy(){this.popup&&(this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&(this.autoZIndex&&Be.clear(this.container),this.container=void 0),this.restoreOverlayAppend(),this.onOverlayHide()),this.popup||this.unbindDocumentClickListener()}hasSubMenu(){return this.model?.some(e=>e.items)??!1}isItemHidden(e){return e.separator?e.visible===!1||e.items&&e.items.some(n=>n.visible!==!1):e.visible===!1}get dataP(){return this.cn({popup:this.popup})}static \u0275fac=function(n){return new(n||t)(j(qn))};static \u0275cmp=N({type:t,selectors:[["p-menu"]],contentQueries:function(n,i,r){if(n&1&&Ue(r,Vh,4)(r,Nh,4)(r,Ph,4)(r,Bh,4)(r,Rh,4)(r,qe,4),n&2){let s;A(s=L())&&(i.startTemplate=s.first),A(s=L())&&(i.endTemplate=s.first),A(s=L())&&(i.headerTemplate=s.first),A(s=L())&&(i.itemTemplate=s.first),A(s=L())&&(i.submenuHeaderTemplate=s.first),A(s=L())&&(i.templates=s)}},viewQuery:function(n,i){n&1&&ko(i.listViewChild,$h,5)(i.containerViewChild,Hh,5),n&2&&vi(2)},inputs:{model:"model",popup:[2,"popup","popup",T],style:"style",styleClass:"styleClass",autoZIndex:[2,"autoZIndex","autoZIndex",T],baseZIndex:[2,"baseZIndex","baseZIndex",Se],showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",id:"id",tabindex:[2,"tabindex","tabindex",Se],appendTo:[1,"appendTo"],motionOptions:[1,"motionOptions"]},outputs:{onShow:"onShow",onHide:"onHide",onBlur:"onBlur",onFocus:"onFocus"},features:[U([gi,{provide:ua,useExisting:t},{provide:re,useExisting:t}]),ue([M]),S],decls:1,vars:1,consts:[["container",""],["list",""],["htmlSubmenuLabel",""],[3,"class","style","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"click","pMotionOnBeforeEnter","pMotionOnAfterLeave","ngStyle","pBind","pMotion","pMotionName","pMotionAppear","pMotionDisabled","pMotionOptions"],[3,"class","pBind",4,"ngIf"],["role","menu",3,"focus","blur","keydown","pBind"],[4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],["ngFor","",3,"ngForOf"],["role","separator",3,"class","pBind",4,"ngIf"],["pTooltip","","role","none",3,"class","pBind","tooltipOptions","pTooltipUnstyled",4,"ngIf"],["role","separator",3,"pBind"],["pTooltip","","role","none",3,"pBind","tooltipOptions","pTooltipUnstyled"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"innerHTML"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","style","tooltipOptions","pTooltipUnstyled","unstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","tooltipOptions","pTooltipUnstyled","unstyled"],["pTooltip","","role","menuitem",3,"class","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled","onMenuItemClick",4,"ngIf"],["pTooltip","","role","menuitem",3,"onMenuItemClick","pBind","pMenuItemContent","itemTemplate","idx","menuitemId","ngStyle","tooltipOptions","unstyled","pTooltipUnstyled"]],template:function(n,i){n&1&&mt(0,am,8,26,"div",3),n&2&&ft(!i.popup||i.overlayVisible?0:-1)},dependencies:[se,vt,Fe,Ve,Ge,Ht,cm,Xt,Yt,M,Tt,te,he,mi,Rs,ha],encapsulation:2,changeDetection:0})}return t})(),R1=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ma,te,te]})}return t})();export{Nm as a,Xe as b,ye as c,at as d,wt as e,pm as f,zt as g,hm as h,Dt as i,Ot as j,lt as k,zn as l,Va as m,jn as n,zo as o,$e as p,jo as q,dt as r,sn as s,jt as t,Ce as u,ge as v,gm as w,Wn as x,Go as y,bm as z,Ko as A,qo as B,Je as C,ym as D,ut as E,_m as F,Ke as G,Xo as H,Pe as I,Ae as J,Em as K,or as L,wm as M,qn as N,Om as O,Mm as P,qe as Q,te as R,Zn as S,q as T,pf as U,mn as V,ll as W,Vr as X,Sr as Y,Lt as Z,Ff as _,ei as $,Rl as aa,Nf as ba,Pf as ca,Bf as da,re as ea,Q as fa,io as ga,eg as ha,Yr as ia,St as ja,ai as ka,dg as la,M as ma,he as na,Ft as oa,Tt as pa,Oe as qa,os as ra,rs as sa,ls as ta,ds as ua,li as va,us as wa,Et as xa,Db as ya,Id as za,i0 as Aa,yp as Ba,Av as Ca,Vt as Da,s0 as Ea,Be as Fa,a0 as Ga,Yt as Ha,Xt as Ia,yh as Ja,a1 as Ka,ws as La,Os as Ma,my as Na,Oy as Oa,Es as Pa,U0 as Qa,co as Ra,Rs as Sa,mi as Ta,Gs as Ua,po as Va,L_ as Wa,ia as Xa,hv as Ya,ma as Za,R1 as _a};
