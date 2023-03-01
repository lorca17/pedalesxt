"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{6243:function(e,t,n){var r=n(7294);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=["children","options"],i=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(((e,t)=>(e[t.toLowerCase()]=t,e)),{for:"htmlFor"}),c={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},a=["style","script"],s=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,u=/mailto:/i,p=/\n{2,}$/,f=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,g=/^ *> ?/gm,d=/^ {2,}\n/,m=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,h=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,y=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,x=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,k=/^(?:\n *)*\n/,v=/\r\n?/g,b=/^\[\^([^\]]+)](:.*)\n/,_=/^\[\^([^\]]+)]/,I=/\f/g,j=/^\s*?\[(x|\s)\]/,w=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,H=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,S=/&([a-z]+);/g,E=/^<!--[\s\S]*?(?:-->)/,L=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,M=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,O=/^\{.*\}$/,$=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,C=/^<([^ >]+@[^ >]+)>/,N=/^<([^ >]+:\/[^ >]+)>/,G=/ *\n+$/,R=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,T=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,U=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,z=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,P=/^\[([^\]]*)\] ?\[([^\]]*)\]/,X=/(\[|\])/g,W=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,B=/\t/g,Z=/^ *\| */,V=/(^ *\||\| *$)/g,F=/ *$/,q=/^ *:-+: *$/,Q=/^ *:-+ *$/,Y=/^ *-+: *$/,J=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,K=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,ee=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,te=/^\\([^0-9A-Za-z\s])/,ne=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,re=/^\n+/,oe=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ie=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +"),ce=new RegExp("^( *)((?:[*+-]|\\d+\\.)) +[^\\n]*(?:\\n(?!\\1(?:[*+-]|\\d+\\.) )[^\\n]*)*(\\n|$)","gm"),ae=new RegExp("^( *)((?:[*+-]|\\d+\\.)) [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1(?:[*+-]|\\d+\\.) (?!(?:[*+-]|\\d+\\.) ))\\n*|\\s*\\n*$)"),se="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",ue=new RegExp("^\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),pe=new RegExp("^!\\[("+se+")\\]\\(\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),fe=[f,y,h,w,A,E,ce,ae,T],ge=[...fe,/^[^\n]+(?:  \n|\n{2,})/,H,M];function de(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function me(e){return Y.test(e)?"right":q.test(e)?"center":Q.test(e)?"left":null}function he(e,t,n){const r=n.t;n.t=!0;const o=t(e.trim(),n);n.t=r;let l=[[]];return o.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==o.length-1&&l.push([]):("text"!==e.type||null!=o[t+1]&&"tableSeparator"!==o[t+1].type||(e.content=e.content.replace(F,"")),l[l.length-1].push(e))})),l}function ye(e,t,n){n.o=!0;const r=he(e[1],t,n),o=e[2].replace(V,"").split("|").map(me),l=function(e,t,n){return e.trim().split("\n").map((function(e){return he(e,t,n)}))}(e[3],t,n);return n.o=!1,{align:o,cells:l,header:r,type:"table"}}function xe(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ke(e){return function(t,n){return n.o?e.exec(t):null}}function ve(e){return function(t,n){return n.o||n.u?e.exec(t):null}}function be(e){return function(t,n){return n.o||n.u?null:e.exec(t)}}function _e(e){return function(t){return e.exec(t)}}function Ie(e,t,n){if(t.o||t.u)return null;if(n&&!n.endsWith("\n"))return null;let r="";e.split("\n").every((e=>!fe.some((t=>t.test(e)))&&(r+=e+"\n",e.trim())));const o=r.trimEnd();return""==o?null:[r,o]}function je(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data):/i))return null}catch(e){return null}return e}function we(e){return e.replace(le,"$1")}function Ae(e,t,n){const r=n.o||!1,o=n.u||!1;n.o=!0,n.u=!0;const l=e(t,n);return n.o=r,n.u=o,l}function He(e,t,n){const r=n.o||!1,o=n.u||!1;n.o=!1,n.u=!0;const l=e(t,n);return n.o=r,n.u=o,l}function Se(e,t,n){return n.o=!1,e(t+"\n\n",n)}const Ee=(e,t,n)=>({content:Ae(t,e[1],n)});function Le(){return{}}function Me(){return null}function Oe(...e){return e.filter(Boolean).join(" ")}function $e(e,t,n){let r=e;const o=t.split(".");for(;o.length&&(r=r[o[0]],void 0!==r);)o.shift();return r||n}var Ce,Ne;function Ge(e,t={}){t.overrides=t.overrides||{},t.slugify=t.slugify||de,t.namedCodesToUnicode=t.namedCodesToUnicode?o({},c,t.namedCodesToUnicode):c;const n=t.createElement||r.createElement;function l(e,r,...l){const i=$e(t.overrides,`${e}.props`,{});return n(function(e,t){const n=$e(t,e);return n?"function"==typeof n||"object"==typeof n&&"render"in n?n:$e(t,`${e}.component`,e):e}(e,t.overrides),o({},r,i,{className:Oe(null==r?void 0:r.className,i.className)||void 0}),...l)}function V(e){let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===W.test(e));const o=se(le(n?e:`${e.trimEnd().replace(re,"")}\n\n`,{o:n}));for(;"string"==typeof o[o.length-1]&&!o[o.length-1].trim();)o.pop();if(null===t.wrapper)return o;const i=t.wrapper||(n?"span":"div");let c;if(o.length>1||t.forceWrapper)c=o;else{if(1===o.length)return c=o[0],"string"==typeof c?l("span",{key:"outer"},c):c;c=null}return r.createElement(i,{key:"outer"},c)}function F(e){const t=e.match(s);return t?t.reduce((function(e,t,n){const o=t.indexOf("=");if(-1!==o){const c=(l=t.slice(0,o),-1!==l.indexOf("-")&&null===l.match(L)&&(l=l.replace(D,(function(e,t){return t.toUpperCase()}))),l).trim(),a=function(e){const t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(t.slice(o+1).trim()),s=i[c]||c,u=e[s]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){const n=t.slice(0,t.indexOf(":"));return e[n.replace(/(-[a-z])/g,(e=>e[1].toUpperCase()))]=t.slice(n.length+1).trim(),e}),{}):"href"===e?je(t):(t.match(O)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,a);"string"==typeof u&&(H.test(u)||M.test(u))&&(e[s]=r.cloneElement(V(u.trim()),{key:n}))}else"style"!==t&&(e[i[t]||t]=!0);var l;return e}),{}):void 0}const q=[],Q={},Y={blockQuote:{i:be(f),l:Ce.HIGH,_:(e,t,n)=>({content:t(e[0].replace(g,""),n)}),p:(e,t,n)=>l("blockquote",{key:n.g},t(e.content,n))},breakLine:{i:_e(d),l:Ce.HIGH,_:Le,p:(e,t,n)=>l("br",{key:n.g})},breakThematic:{i:be(m),l:Ce.HIGH,_:Le,p:(e,t,n)=>l("hr",{key:n.g})},codeBlock:{i:be(y),l:Ce.MAX,_:e=>({content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}),p:(e,t,n)=>l("pre",{key:n.g},l("code",{className:e.lang?`lang-${e.lang}`:""},e.content))},codeFenced:{i:be(h),l:Ce.MAX,_:e=>({content:e[3],lang:e[2]||void 0,type:"codeBlock"})},codeInline:{i:ve(x),l:Ce.LOW,_:e=>({content:e[2]}),p:(e,t,n)=>l("code",{key:n.g},e.content)},footnote:{i:be(b),l:Ce.MAX,_:e=>(q.push({footnote:e[2],identifier:e[1]}),{}),p:Me},footnoteReference:{i:ke(_),l:Ce.HIGH,_:e=>({content:e[1],target:`#${t.slugify(e[1])}`}),p:(e,t,n)=>l("a",{key:n.g,href:je(e.target)},l("sup",{key:n.g},e.content))},gfmTask:{i:ke(j),l:Ce.HIGH,_:e=>({completed:"x"===e[1].toLowerCase()}),p:(e,t,n)=>l("input",{checked:e.completed,key:n.g,readOnly:!0,type:"checkbox"})},heading:{i:be(w),l:Ce.HIGH,_:(e,n,r)=>({content:Ae(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}),p:(e,t,n)=>(e.tag=`h${e.level}`,l(e.tag,{id:e.id,key:n.g},t(e.content,n)))},headingSetext:{i:be(A),l:Ce.MAX,_:(e,t,n)=>({content:Ae(t,e[1],n),level:"="===e[2]?1:2,type:"heading"})},htmlComment:{i:_e(E),l:Ce.HIGH,_:()=>({}),p:Me},image:{i:ve(pe),l:Ce.HIGH,_:e=>({alt:e[1],target:we(e[2]),title:e[3]}),p:(e,t,n)=>l("img",{key:n.g,alt:e.alt||void 0,title:e.title||void 0,src:je(e.target)})},link:{i:ke(ue),l:Ce.LOW,_:(e,t,n)=>({content:He(t,e[1],n),target:we(e[2]),title:e[3]}),p:(e,t,n)=>l("a",{key:n.g,href:je(e.target),title:e.title},t(e.content,n))},linkAngleBraceStyleDetector:{i:ke(N),l:Ce.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],type:"link"})},linkBareUrlDetector:{i:(e,t)=>t.m?null:ke($)(e,t),l:Ce.MAX,_:e=>({content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"})},linkMailtoDetector:{i:ke(C),l:Ce.MAX,_(e){let t=e[1],n=e[1];return u.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{i(e,t,n){const r=R.exec(n);return!r||!t.h&&t.o?null:ae.exec(e=r[1]+e)},l:Ce.HIGH,_(e,t,n){const r=e[2],o=r.length>1,l=o?+r:void 0,i=e[0].replace(p,"\n").match(ce);let c=!1;return{items:i.map((function(e,r){const o=ie.exec(e)[0].length,l=new RegExp("^ {1,"+o+"}","gm"),a=e.replace(l,"").replace(ie,""),s=r===i.length-1,u=-1!==a.indexOf("\n\n")||s&&c;c=u;const p=n.o,f=n.h;let g;n.h=!0,u?(n.o=!1,g=a.replace(G,"\n\n")):(n.o=!0,g=a.replace(G,""));const d=t(g,n);return n.o=p,n.h=f,d})),ordered:o,start:l}},p:(e,t,n)=>l(e.ordered?"ol":"ul",{key:n.g,start:e.start},e.items.map((function(e,r){return l("li",{key:r},t(e,n))})))},newlineCoalescer:{i:be(k),l:Ce.LOW,_:Le,p:()=>"\n"},paragraph:{i:Ie,l:Ce.LOW,_:Ee,p:(e,t,n)=>l("p",{key:n.g},t(e.content,n))},ref:{i:ke(U),l:Ce.MAX,_:e=>(Q[e[1]]={target:e[2],title:e[4]},{}),p:Me},refImage:{i:ve(z),l:Ce.MAX,_:e=>({alt:e[1]||void 0,ref:e[2]}),p:(e,t,n)=>l("img",{key:n.g,alt:e.alt,src:je(Q[e.ref].target),title:Q[e.ref].title})},refLink:{i:ke(P),l:Ce.MAX,_:(e,t,n)=>({content:t(e[1],n),fallbackContent:t(e[0].replace(X,"\\$1"),n),ref:e[2]}),p:(e,t,n)=>Q[e.ref]?l("a",{key:n.g,href:je(Q[e.ref].target),title:Q[e.ref].title},t(e.content,n)):l("span",{key:n.g},t(e.fallbackContent,n))},table:{i:be(T),l:Ce.HIGH,_:ye,p:(e,t,n)=>l("table",{key:n.g},l("thead",null,l("tr",null,e.header.map((function(r,o){return l("th",{key:o,style:xe(e,o)},t(r,n))})))),l("tbody",null,e.cells.map((function(r,o){return l("tr",{key:o},r.map((function(r,o){return l("td",{key:o,style:xe(e,o)},t(r,n))})))}))))},tableSeparator:{i:function(e,t){return t.t?Z.exec(e):null},l:Ce.HIGH,_:function(){return{type:"tableSeparator"}},p:()=>" | "},text:{i:_e(ne),l:Ce.MIN,_:e=>({content:e[0].replace(S,((e,n)=>t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e))}),p:e=>e.content},textBolded:{i:ve(J),l:Ce.MED,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>l("strong",{key:n.g},t(e.content,n))},textEmphasized:{i:ve(K),l:Ce.LOW,_:(e,t,n)=>({content:t(e[2],n)}),p:(e,t,n)=>l("em",{key:n.g},t(e.content,n))},textEscaped:{i:ve(te),l:Ce.HIGH,_:e=>({content:e[1],type:"text"})},textStrikethroughed:{i:ve(ee),l:Ce.LOW,_:Ee,p:(e,t,n)=>l("del",{key:n.g},t(e.content,n))}};!0!==t.disableParsingRawHTML&&(Y.htmlBlock={i:_e(H),l:Ce.HIGH,_(e,t,n){const[,r]=e[3].match(oe),o=new RegExp(`^${r}`,"gm"),l=e[3].replace(o,""),i=(c=l,ge.some((e=>e.test(c)))?Se:Ae);var c;const s=e[1].toLowerCase(),u=-1!==a.indexOf(s);n.m=n.m||"a"===s;const p=u?e[3]:i(t,l,n);return n.m=!1,{attrs:F(e[2]),content:p,noInnerParse:u,tag:u?s:e[1]}},p:(e,t,n)=>l(e.tag,o({key:n.g},e.attrs),e.noInnerParse?e.content:t(e.content,n))},Y.htmlSelfClosing={i:_e(M),l:Ce.HIGH,_:e=>({attrs:F(e[2]||""),tag:e[1]}),p:(e,t,n)=>l(e.tag,o({},e.attrs,{key:n.g}))});const le=function(e){let t=Object.keys(e);function n(r,o){let l=[],i="";for(;r;){let c=0;for(;c<t.length;){const a=t[c],s=e[a],u=s.i(r,o,i);if(u){const e=u[0];r=r.substring(e.length);const t=s._(u,n,o);null==t.type&&(t.type=a),l.push(t),i=e;break}c++}}return l}return t.sort((function(t,n){let r=e[t].l,o=e[n].l;return r!==o?r-o:t<n?-1:1})),function(e,t){return n(function(e){return e.replace(v,"\n").replace(I,"").replace(B,"    ")}(e),t)}}(Y),se=(fe=Y,me=function(e,t,n){return fe[e.type].p(e,t,n)},function e(t,n={}){if(Array.isArray(t)){const r=n.g,o=[];let l=!1;for(let i=0;i<t.length;i++){n.g=i;const r=e(t[i],n),c="string"==typeof r;c&&l?o[o.length-1]+=r:null!==r&&o.push(r),l=c}return n.g=r,o}return me(t,e,n)});var fe,me;const he=V(e);return q.length?l("div",null,he,l("footer",{key:"footer"},q.map((function(e){return l("div",{id:t.slugify(e.identifier),key:e.identifier},e.identifier,se(le(e.footnote,{o:!0})))})))):he}(Ne=Ce||(Ce={}))[Ne.MAX=0]="MAX",Ne[Ne.HIGH=1]="HIGH",Ne[Ne.MED=2]="MED",Ne[Ne.LOW=3]="LOW",Ne[Ne.MIN=4]="MIN",t.Z=e=>{let{children:t,options:n}=e,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(n=l[r])>=0||(o[n]=e[n]);return o}(e,l);return r.cloneElement(Ge(t,n),o)}},3863:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5893),o=n(8100);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){var t=e.buscar_productos,n="https://productos.pedalesxt.com/api/".concat(t),l=(0,o.ZP)(n,(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return fetch.apply(void 0,i(t)).then((function(e){return e.json()}))})),c=l.data;if(l.error)return(0,r.jsx)("div",{children:"failed to load"});if(!c)return(0,r.jsx)("div",{children:"loading..."});var a=new Date,s=a.getDate(),u=a.getMonth()+1,p=a.getFullYear(),f=u<10?"".concat(s,"-0").concat(u,"-").concat(p):"".concat(s,"-").concat(u,"-").concat(p);return(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"gap-4",vocab:"https://schema.org/",typeof:"ItemList",children:c.SearchResult.Items.slice(0,9).map((function(e,t){return(0,r.jsxs)("div",{property:"itemListElement",typeof:"Product",className:"shadow-md grid grid-cols-2 mt-12 md:m-16",children:[(0,r.jsx)("div",{className:"product_img",style:{height:"200px"},children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",children:(0,r.jsx)("img",{property:"image",src:e.Images.Primary.Medium.URL,alt:e.ItemInfo.Title.DisplayValue})})}),(0,r.jsxs)("div",{itemprop:"aggregateRating",itemtype:"https://schema.org/AggregateRating",itemscope:!0,children:[(0,r.jsx)("meta",{itemprop:"reviewCount",content:"89"}),(0,r.jsx)("meta",{itemprop:"ratingValue",content:"4.4"})]}),(0,r.jsxs)("div",{className:"product_info text-center",children:[(0,r.jsxs)("span",{className:"product_price text-center text-2xl",property:"offers",typeof:"Offer",children:["Desde:",(0,r.jsxs)("span",{className:"money bg-yellow-300 pr-2 shadow-md rounded ml-2",children:[" ",e.Offers.Listings[0].Price.DisplayAmount]}),(0,r.jsx)("meta",{property:"schema:price",content:e.Offers.Listings[0].Price.Amount}),(0,r.jsx)("meta",{itemprop:"availability",content:"https://schema.org/InStock"}),(0,r.jsx)("meta",{itemprop:"priceCurrency",content:"EUR"}),(0,r.jsx)("meta",{itemprop:"priceValidUntil",content:f})]}),(0,r.jsx)("div",{className:"mt-6 capitalize",children:(0,r.jsxs)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",property:"name",children:[e.ItemInfo.Title.DisplayValue.slice(0,80),"  by Amazon"]})}),(0,r.jsx)("div",{className:"clearfix text-center",children:(0,r.jsx)("div",{className:"m-4 md:mt-10",children:(0,r.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",className:" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"Ver Detalles"})})})]})]},t)}))})})})})}}}]);