"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1542],{6243:function(e,t,n){var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=["children","options"],a=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),i={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},c=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,d=/mailto:/i,u=/\n{2,}$/,p=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,m=/^ *> ?/gm,f=/^ {2,}\n/,g=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,h=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,y=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,b=/^(?:\n *)*\n/,j=/\r\n?/g,v=/^\[\^([^\]]+)](:.*)\n/,k=/^\[\^([^\]]+)]/,w=/\f/g,N=/^\s*?\[(x|\s)\]/,_=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,I=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,S=/&([a-z]+);/g,H=/^<!--[\s\S]*?(?:-->)/,L=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,E=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,M=/^\{.*\}$/,O=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,P=/^<([^ >]+@[^ >]+)>/,C=/^<([^ >]+:\/[^ >]+)>/,$=/ *\n+$/,z=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,T=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,R=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,U=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,G=/^\[([^\]]*)\] ?\[([^\]]*)\]/,B=/(\[|\])/g,X=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,W=/^ *\| */,V=/(^ *\||\| *$)/g,F=/ *$/,q=/^ *:-+: *$/,J=/^ *:-+ *$/,Q=/^ *-+: *$/,K=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Y=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ee=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,te=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,re=/^\n+/,oe=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ae=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ie=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ce=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),se="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",de=new RegExp("^\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ue=new RegExp("^!\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),pe=[p,x,h,_,A,H,ie,ce,T],me=[...pe,/^[^\n]+(?:  \n|\n{2,})/,I,E];function fe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ge(e){return Q.test(e)?"right":q.test(e)?"center":J.test(e)?"left":null}function he(e,t,n){const r=n.t;n.t=!0;const o=t(e.trim(),n);n.t=r;let l=[[]];return o.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&l.push([]):("text"!==e.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(e.content=e.content.replace(F,"")),l[l.length-1].push(e))})),l}function xe(e,t,n){n.o=!0;const r=he(e[1],t,n),o=e[2].replace(V,"").split("|").map(ge),l=function(e,t,n){return e.trim().split("\n").map((function(e){return he(e,t,n)}))}(e[3],t,n);return n.o=!1,{align:o,cells:l,header:r,type:"table"}}function ye(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function be(e){return function(t,n){return n.o?e.exec(t):null}}function je(e){return function(t,n){return n.o||n.u?e.exec(t):null}}function ve(e){return function(t,n){return n.o||n.u?null:e.exec(t)}}function ke(e){return function(t){return e.exec(t)}}function we(e,t,n){if(t.o||t.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!pe.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const o=r.trimEnd();return""==o?null:[r,o]}function Ne(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function _e(e){return e.replace(le,"$1")}function Ae(e,t,n){const r=n.o||!1,o=n.u||!1;n.o=!0,n.u=!0;const l=e(t,n);return n.o=r,n.u=o,l}function Ie(e,t,n){const r=n.o||!1,o=n.u||!1;n.o=!1,n.u=!0;const l=e(t,n);return n.o=r,n.u=o,l}function Se(e,t,n){return n.o=!1,e(t+"\n\n",n)}const He=(e,t,n)=>({content:Ae(t,e[1],n)});function Le(){return{}}function Ee(){return null}function Me(...e){return e.filter(Boolean).join(" ")}function Oe(e,t,n){let r=e;const o=t.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||n}var Pe,Ce;function $e(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||fe,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},i,t.namedCodesToUnicode):i;const n=t.createElement||r.createElement;function l(e,r,...l){const a=Oe(t.overrides,`${e}.props`,{});return n(function(e,t){const n=Oe(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:Oe(t,`${e}.component`,e):e}(e,t.overrides),o({},r,a,{className:Me(null==r?void 0:r.className,a.className)||void 0}),...l)}function V(e){let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===X.test(e));const o=se(le(n?e:`${e.trimEnd().replace(re,"")}\n\n`,{o:n}));for(;"string"==typeof o[o.length-1]&&!o[o.length-1].trim();)o.pop();if(null===t.wrapper)return o;const a=t.wrapper||(n?"span":"div");let i;if(o.length>1||t.forceWrapper)i=o;else{if(1===o.length)return i=o[0],"string"==typeof i?l("span",{key:"outer"},i):i;i=null}return r.createElement(a,{key:"outer"},i)}function F(e){const t=e.match(s);return t?t.reduce((function(e,t,n){const o=t.indexOf("=");if(-1!==o){const i=(l=t.slice(0,o),-1!==l.indexOf("-")&&null===l.match(L)&&(l=l.replace(D,(function(e,t){return t.toUpperCase()}))),l).trim(),c=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(o+1).trim()),s=a[i]||i,d=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Ne(t):(t.match(M)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(i,c);"string"==typeof d&&(I.test(d)||E.test(d))&&(e[s]=r.cloneElement(V(d.trim()),{key:n}))}else"style"!==t&&(e[a[t]||t]=!0);var l;return e}),{}):void 0}const q=[],J={},Q={blockQuote:{i:ve(p),l:Pe.HIGH,_:(e,t,n)=>({content:t(e[0].replace(m,""),n)}),p:(e,t,n)=>l("blockquote",{key:n.g},t(e.content,n))},breakLine:{i:ke(f),l:Pe.HIGH,_:Le,p:(e,t,n)=>l("br",{key:n.g})},breakThematic:{i:ve(g),l:Pe.HIGH,_:Le,p:(e,t,n)=>l("hr",{key:n.g})},codeBlock:{i:ve(x),l:Pe.MAX,_:e=>({content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(e,t,n)=>l("pre",{key:n.g},l("code",{className:e.lang?`lang-${e.lang}`:""},e.content))},codeFenced:{i:ve(h),l:Pe.MAX,_:e=>({content:e[3],lang:e[2]||void 0,type:"codeBlock"})},codeInline:{i:je(y),l:Pe.LOW,_:e=>({content:e[2]}),p:(e,t,n)=>l("code",{key:n.g},e.content)},footnote:{i:ve(v),l:Pe.MAX,_:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),p:Ee},footnoteReference:{i:be(k),l:Pe.HIGH,_:e=>({content:e[1],target:`#${t.slugify(e[1])}`}),p:(e,t,n)=>l("a",{key:n.g,href:Ne(e.target)},l("sup",{key:n.g},e.content))},gfmTask:{i:be(N),l:Pe.HIGH,_:e=>({completed:"x"===e[1].toLowerCase()}),p:(e,t,n)=>l("input",{checked:e.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:ve(_),l:Pe.HIGH,_:(e,n,r)=>({content:Ae(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}),p:(e,t,n)=>(e.tag=`h${e.level}`,l(e.tag,{id:e.id,key:n.g},t(e.content,n)))},headingSetext:{i:ve(A),l:Pe.MAX,_:(e,t,n)=>({content:Ae(t,e[1],n),level:"="===e[2]?1:2,type:"heading"})},htmlComment:{i:ke(H),l:Pe.HIGH,_:()=>({}),p:Ee},image:{i:je(ue),l:Pe.HIGH,_:e=>({alt:e[1],target:_e(e[2]),title:e[3]}),p:(e,t,n)=>l("img",{key:n.g,alt:e.alt||void 0,title:e.title||void 0,src:Ne(e.target)})},link:{i:be(de),l:Pe.LOW,_:(e,t,n)=>({content:Ie(t,e[1],n),target:_e(e[2]),title:e[3]}),p:(e,t,n)=>l("a",{key:n.g,href:Ne(e.target),title:e.title},t(e.content,n))},linkAngleBraceStyleDetector:{i:be(C),l:Pe.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],type:"link"})},linkBareUrlDetector:{i:(e,t)=>t.m?null:be(O)(e,t),l:Pe.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"})},linkMailtoDetector:{i:be(P),l:Pe.MAX,_(e){let t=e[1],n=e[1];return d.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(e,t,n){const r=z.exec(n);return!r||!t.h&&t.o?null:ce.exec(e=r[1]+e)},l:Pe.HIGH,_(e,t,n){const r=e[2],o=r.length>1,l=o?+r:void 0,a=e[0].replace(u,"\n").match(ie);let i=!1;return{items:a.map((function(e,r){const o=ae.exec(e)[0].length,l=new RegExp("^ {1,"+o+"}","gm"),c=e.replace(l,"").replace(ae,""),s=r===a.length-1,d=-1!==c.indexOf("\n\n")||s&&i;i=d;const u=n.o,p=n.h;let m;n.h=!0,d?(n.o=!1,m=c.replace($,"\n\n")):(n.o=!0,m=c.replace($,""));const f=t(m,n);return n.o=u,n.h=p,f})),ordered:o,start:l}},p:(e,t,n)=>l(e.ordered?"ol":"ul",{key:n.g,start:e.start},e.items.map((function(e,r){return l("li",{key:r},t(e,n))})))},newlineCoalescer:{i:ve(b),l:Pe.LOW,_:Le,p:()=>"\n"},paragraph:{i:we,l:Pe.LOW,_:He,p:(e,t,n)=>l("p",{key:n.g},t(e.content,n))},ref:{i:be(R),l:Pe.MAX,_:e=>(J[e[1]]={target:e[2],title:e[4]},{}),p:Ee},refImage:{i:je(U),l:Pe.MAX,_:e=>({alt:e[1]||void 0,ref:e[2]}),p:(e,t,n)=>l("img",{key:n.g,alt:e.alt,src:Ne(J[e.ref].target),title:J[e.ref].title})},refLink:{i:be(G),l:Pe.MAX,_:(e,t,n)=>({content:t(e[1],n),fallbackContent:t(e[0].replace(B,"\\$1"),n),ref:e[2]}),p:(e,t,n)=>J[e.ref]?l("a",{key:n.g,href:Ne(J[e.ref].target),title:J[e.ref].title},t(e.content,n)):l("span",{key:n.g},t(e.fallbackContent,n))},table:{i:ve(T),l:Pe.HIGH,_:xe,p:(e,t,n)=>l("table",{key:n.g},l("thead",null,l("tr",null,e.header.map((function(r,o){return l("th",{key:o,style:ye(e,o)},t(r,n))})))),l("tbody",null,e.cells.map((function(r,o){return l("tr",{key:o},r.map((function(r,o){return l("td",{key:o,style:ye(e,o)},t(r,n))})))}))))},tableSeparator:{i:function(e,t){return t.t?W.exec(e):null},l:Pe.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:ke(ne),l:Pe.MIN,_:e=>({content:e[0].replace(S,((e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e))}),p:e=>e.content},textBolded:{i:je(K),l:Pe.MED,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>l("strong",{key:n.g},t(e.content,n))},textEmphasized:{i:je(Y),l:Pe.LOW,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>l("em",{key:n.g},t(e.content,n))},textEscaped:{i:je(te),l:Pe.HIGH,_:e=>({content:e[1],type:"text"})},textStrikethroughed:{i:je(ee),l:Pe.LOW,_:He,p:(e,t,n)=>l("del",{key:n.g},t(e.content,n))}};!0!==t.disableParsingRawHTML&&(Q.htmlBlock={i:ke(I),l:Pe.HIGH,_(e,t,n){const[,r]=e[3].match(oe),o=new RegExp(`^${r}`,"gm"),l=e[3].replace(o,""),a=(i=l,me.some((e=>e.test(i)))?Se:Ae);var i;const s=e[1].toLowerCase(),d=-1!==c.indexOf(s);n.m=n.m||"a"===s;const u=d?e[3]:a(t,l,n);return n.m=!1,{attrs:F(e[2]),content:u,noInnerParse:d,tag:d?s:e[1]}},p:(e,t,n)=>l(e.tag,o({key:n.g},e.attrs),e.noInnerParse?e.content:t(e.content,n))},Q.htmlSelfClosing={i:ke(E),l:Pe.HIGH,_:e=>({attrs:F(e[2]||""),tag:e[1]}),p:(e,t,n)=>l(e.tag,o({},e.attrs,{key:n.g}))});const le=function(e){let t=Object.keys(e);function n(r,o){let l=[],a="";for(;r;){let i=0;for(;i<t.length;){const c=t[i],s=e[c],d=s.i(r,o,a);if(d){const e=d[0];r=r.substring(e.length);const t=s._(d,n,o);null==t.type&&(t.type=c),l.push(t),a=e;break}i++}}return l}return t.sort((function(t,n){let r=e[t].l,o=e[n].l;return r!==o?r-o:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(j,"\n").replace(w,"").replace(Z,"    ")}(e),t)}}(Q),se=(pe=Q,ge=function(e,t,n){return pe[e.type].p(e,t,n)},function e(t,n={}){if(Array.isArray(t)){const r=n.g,o=[];let l=!1;for(let a=0;a<t.length;a++){n.g=a;const r=e(t[a],n),i="string"==typeof r;i&&l?o[o.length-1]+=r:null!==r&&o.push(r),l=i}return n.g=r,o}return ge(t,e,n)});var pe,ge;const he=V(e);return q.length?l("div",null,he,l("footer",{key:"footer"},q.map((function(e){return l("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,se(le(e.footnote,{o:!0})))})))):he}(Ce=Pe||(Pe={}))[Ce.MAX=0]="MAX",Ce[Ce.HIGH=1]="HIGH",Ce[Ce.MED=2]="MED",Ce[Ce.LOW=3]="LOW",Ce[Ce.MIN=4]="MIN",t.Z=e=>{let{children:t,options:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(o[n]=e[n]);return o}(e,l);return r.cloneElement($e(t,n),o)}},534:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5893),o=n(8100);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){var t=e.buscar_productos,n="https://productos.whirpool.es/api/".concat(t),l=(0,o.ZP)(n,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch.apply(void 0,a(t)).then((function(e){return e.json()}))})),i=l.data;return l.error?(0,r.jsx)("div",{children:"failed to load"}):i?(0,r.jsx)("div",{className:"index-scope",children:(0,r.jsx)("div",{className:"product-listing__index",children:(0,r.jsx)("div",{className:"product_listing_main",children:(0,r.jsx)("div",{className:"grid md:grid-cols-3 gap-4",vocab:"https://schema.org/",typeof:"ItemList",children:i.SearchResult.Items.slice(0,9).map((function(e,t){return(0,r.jsxs)("div",{property:"itemListElement",typeof:"Product",className:"my-11 shadow-md md:my-6 ",children:[(0,r.jsx)("div",{className:"product_img",style:{height:"200px"},children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",children:(0,r.jsx)("img",{property:"image",src:e.Images.Primary.Medium.URL,alt:e.ItemInfo.Title.DisplayValue})})}),(0,r.jsxs)("div",{className:"product_info text-center",children:[(0,r.jsxs)("span",{className:"product_price text-center text-2xl",property:"offers",typeof:"Offer",children:["Desde:",(0,r.jsxs)("span",{className:"money bg-yellow-300 pr-2 shadow-md rounded ml-2",property:"schema:price",children:[" ",e.Offers.Listings[0].Price.DisplayAmount]})]}),(0,r.jsx)("div",{className:"mt-6 capitalize",children:(0,r.jsxs)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",property:"name",children:[e.ItemInfo.Title.DisplayValue.slice(0,80),"  by Amazon"]})}),(0,r.jsx)("div",{className:"clearfix text-center",children:(0,r.jsx)("div",{className:"m-4",children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",className:" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"Ver Detalles"})})})]})]},t)}))})})})}):(0,r.jsx)("div",{children:"loading..."})}},3863:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(5893),o=n(8100);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){var t=e.buscar_productos,n="https://productos.whirpool.es/api/".concat(t),l=(0,o.ZP)(n,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch.apply(void 0,a(t)).then((function(e){return e.json()}))})),i=l.data;return l.error?(0,r.jsx)("div",{children:"failed to load"}):i?(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"gap-4",vocab:"https://schema.org/",typeof:"ItemList",children:i.SearchResult.Items.slice(0,9).map((function(e,t){return(0,r.jsxs)("div",{property:"itemListElement",typeof:"Product",className:"shadow-md grid grid-cols-2 mt-12 md:m-16",children:[(0,r.jsx)("div",{className:"product_img",style:{height:"200px"},children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",children:(0,r.jsx)("img",{property:"image",src:e.Images.Primary.Medium.URL,alt:e.ItemInfo.Title.DisplayValue})})}),(0,r.jsxs)("div",{className:"product_info text-center",children:[(0,r.jsxs)("span",{className:"product_price text-center text-2xl",property:"offers",typeof:"Offer",children:["Desde:",(0,r.jsxs)("span",{className:"money bg-yellow-300 pr-2 shadow-md rounded ml-2 ",property:"schema:price",children:[" ",e.Offers.Listings[0].Price.DisplayAmount]})]}),(0,r.jsx)("div",{className:"mt-6 capitalize",children:(0,r.jsxs)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",property:"name",children:[e.ItemInfo.Title.DisplayValue.slice(0,80),"  by Amazon"]})}),(0,r.jsx)("div",{className:"clearfix text-center",children:(0,r.jsx)("div",{className:"m-4 md:mt-10",children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",className:" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"Ver Detalles"})})})]})]},t)}))})})})}):(0,r.jsx)("div",{children:"loading..."})}},2666:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5893),o=n(9168);function l(){return(0,r.jsx)(o.CookieBanner,{message:"Cookie de banner message",wholeDomain:!0,onAccept:function(){},onAcceptPreferences:function(){},onAcceptStatistics:function(){},onAcceptMarketing:function(){},policyLink:"/legal/cookies/",acceptButtonText:"Ok",managePreferencesButtonText:"Configurar",styles:{container:{display:"block",positon:"fixed",position:"fixed",bottom:"10px","background-color":"gray",width:"100%","max-width":"320px","border-radius":"5px"},dialog:{display:"block",positon:"fixed",position:"fixed",bottom:"40px",width:"100%"}}})}function a(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("footer",{className:"w-full bg-white px-6 border-t",children:(0,r.jsxs)("div",{className:"container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm",children:["\xa92022 Pedales Xt. All rights reserved.",(0,r.jsxs)("div",{className:"pt-4 md:p-0 text-center md:text-right text-xs",children:[(0,r.jsx)("a",{href:"/legal/privacidad/",className:"text-black no-underline hover:underline",children:"Privacy Policy"}),(0,r.jsx)("a",{href:"/legal/cookies/",className:"text-black no-underline hover:underline ml-4",children:"Terms & Conditions & Cookies"}),(0,r.jsx)("a",{href:"/legal/contacto/",className:"text-black no-underline hover:underline ml-4",children:"Contact Us"})]}),(0,r.jsx)("div",{className:"container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm",children:(0,r.jsx)("p",{className:"text-black no-underline",children:"PedalesXt.com participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados dise\xf1ado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.co.uk/Javari.co.uk/ Amazon.de/Amazon.fr/Javari.fr/Amazon.it/ Amazon.es."})})]})}),(0,r.jsx)(l,{})]})}},4179:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5893),o=n(1664),l=n(3758);function a(e){var t=e.ancho;return(0,r.jsxs)("div",{className:"bg-black",children:[(0,r.jsx)("header",{className:"bg-black",children:(0,r.jsxs)("div",{className:" items-center md:w-1/2 ",children:[(0,r.jsx)(o.default,{href:"/",children:(0,r.jsx)("a",{className:" items-center md:mb-0 ",children:(0,r.jsx)(l.E.img,{initial:{y:-200},animate:{y:0},src:"/img/logo-pedalesxt-1.png",alt:"Pedales Xt",title:t,className:"center md:w-1/2"})})}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Russo+One&display=swap",rel:"stylesheet"})]})}),(0,r.jsx)("nav",{className:"bg-white md:pt-0 shadow-lg relative z-20 border-t border-gray-400 bg-black",children:(0,r.jsxs)("div",{className:"container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start",children:[(0,r.jsxs)("div",{className:"w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start",children:[(0,r.jsx)(o.default,{href:"/blog/",children:(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Blog"})}),(0,r.jsxs)("button",{className:"dropdown",children:[(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Marcas"}),(0,r.jsxs)("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-1",children:[(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/speedplay/",children:(0,r.jsx)("a",{className:"rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",children:"Pedales Speedplay"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(o.default,{href:"/shimano/",children:(0,r.jsx)("a",{className:"rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",children:"Pedales Shimano"})})})]})]}),(0,r.jsx)(o.default,{href:"/mantenimiento/",children:(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Mantenimiento"})}),(0,r.jsx)(o.default,{href:"/entrenamiento/",children:(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Entrenamiento"})}),(0,r.jsx)(o.default,{href:"/kit-motor-central-bicicleta/",children:(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Motor Electrico para Bicicletas"})}),(0,r.jsx)(o.default,{href:"/cadenas-bicicleta/",children:(0,r.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Cadenas para Bicicletas"})})]}),(0,r.jsx)("div",{className:"w-full md:w-1/2 text-center md:text-right pb-4 md:p-0 ",children:(0,r.jsx)("input",{type:"search",placeholder:"Buscar...",className:"bg-gray-300 border text-sm p-1"})})]})})]})}}}]);