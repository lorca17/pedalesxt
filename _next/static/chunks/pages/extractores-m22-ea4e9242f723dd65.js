(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4876],{5627:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/extractores-m22",function(){return t(6691)}])},3863:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var a=t(5893),n=t(8100);function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,a=new Array(r);t<r;t++)a[t]=e[t];return a}function s(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){var r=e.buscar_productos,t="https://productos.pedalesxt.com/api/".concat(r),i=(0,n.ZP)(t,(function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return fetch.apply(void 0,s(r)).then((function(e){return e.json()}))})),o=i.data;if(i.error)return(0,a.jsx)("div",{children:"failed to load"});if(!o)return(0,a.jsx)("div",{children:"loading..."});var c=new Date,l=c.getDate(),d=c.getMonth()+1,m=c.getFullYear(),u=d<10?"".concat(l,"-0").concat(d,"-").concat(m):"".concat(l,"-").concat(d,"-").concat(m);return(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"gap-4",vocab:"https://schema.org/",typeof:"ItemList",children:o.SearchResult.Items.slice(0,9).map((function(e,r){return(0,a.jsxs)("div",{property:"itemListElement",typeof:"Product",className:"shadow-md grid grid-cols-2 mt-12 md:m-16",children:[(0,a.jsx)("div",{className:"product_img",style:{height:"200px"},children:(0,a.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",children:(0,a.jsx)("img",{property:"image",src:e.Images.Primary.Medium.URL,alt:e.ItemInfo.Title.DisplayValue})})}),(0,a.jsxs)("div",{itemprop:"aggregateRating",itemtype:"https://schema.org/AggregateRating",itemscope:!0,children:[(0,a.jsx)("meta",{itemprop:"reviewCount",content:"89"}),(0,a.jsx)("meta",{itemprop:"ratingValue",content:"4.4"})]}),(0,a.jsxs)("div",{className:"product_info text-center",children:[(0,a.jsxs)("span",{className:"product_price text-center text-2xl",property:"offers",typeof:"Offer",children:["Desde:",(0,a.jsxs)("span",{className:"money bg-yellow-300 pr-2 shadow-md rounded ml-2",children:[" ",e.Offers.Listings[0].Price.DisplayAmount]}),(0,a.jsx)("meta",{property:"schema:price",content:e.Offers.Listings[0].Price.Amount}),(0,a.jsx)("meta",{itemprop:"availability",content:"https://schema.org/InStock"}),(0,a.jsx)("meta",{itemprop:"priceCurrency",content:"EUR"}),(0,a.jsx)("meta",{itemprop:"priceValidUntil",content:u})]}),(0,a.jsx)("div",{className:"mt-6 capitalize",children:(0,a.jsxs)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",property:"name",children:[e.ItemInfo.Title.DisplayValue.slice(0,80),"  by Amazon"]})}),(0,a.jsx)("div",{className:"clearfix text-center",children:(0,a.jsx)("div",{className:"m-4 md:mt-10",children:(0,a.jsx)("a",{href:e.DetailPageURL,rel:"nofollow noopener noreferrer",target:"_blank",className:" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:"Ver Detalles"})})})]})]},r)}))})})})})}},2666:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(5893),n=t(9168);function i(){return(0,a.jsx)(n.CookieBanner,{message:"Cookie de banner message",wholeDomain:!0,onAccept:function(){},onAcceptPreferences:function(){},onAcceptStatistics:function(){},onAcceptMarketing:function(){},policyLink:"/legal/cookies/",acceptButtonText:"Ok",managePreferencesButtonText:"Configurar",styles:{container:{display:"block",positon:"fixed",position:"fixed",bottom:"10px","background-color":"gray",width:"100%","max-width":"320px","border-radius":"5px"},dialog:{display:"block",positon:"fixed",position:"fixed",bottom:"40px",width:"100%"}}})}function s(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("footer",{className:"w-full bg-white px-6 border-t",children:(0,a.jsxs)("div",{className:"container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm",children:["\xa92022 Pedales Xt. All rights reserved.",(0,a.jsxs)("div",{className:"pt-4 md:p-0 text-center md:text-right text-xs",children:[(0,a.jsx)("a",{href:"/legal/privacidad/",className:"text-black no-underline hover:underline",children:"Privacy Policy"}),(0,a.jsx)("a",{href:"/legal/cookies/",className:"text-black no-underline hover:underline ml-4",children:"Terms & Conditions & Cookies"}),(0,a.jsx)("a",{href:"/legal/contacto/",className:"text-black no-underline hover:underline ml-4",children:"Contact Us"})]}),(0,a.jsx)("div",{className:"container mx-auto max-w-4xl py-6 flex flex-wrap md:flex-no-wrap justify-between items-center text-sm",children:(0,a.jsx)("p",{className:"text-black no-underline",children:"PedalesXt.com participa en el Programa de Afiliados de Amazon EU, un programa de publicidad para afiliados dise\xf1ado para ofrecer a sitios web un modo de obtener comisiones por publicidad, publicitando e incluyendo enlaces a Amazon.co.uk/Javari.co.uk/ Amazon.de/Amazon.fr/Javari.fr/Amazon.it/ Amazon.es."})})]})}),(0,a.jsx)(i,{})]})}},4179:function(e,r,t){"use strict";t.d(r,{Z:function(){return s}});var a=t(5893),n=t(1664),i=t(3758);function s(e){var r=e.ancho;return(0,a.jsxs)("div",{className:"bg-black mx-auto",children:[(0,a.jsx)("header",{className:"bg-black",children:(0,a.jsxs)("div",{className:" items-center ",children:[(0,a.jsx)(n.default,{href:"/",children:(0,a.jsx)("a",{className:" items-center md:mb-0 center",children:(0,a.jsx)(i.E.img,{initial:{y:-200},animate:{y:0},src:"/img/logo-pedalesxt-1.webp",alt:"Pedales Xt",title:r,className:"center "})})}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Russo+One&display=swap",rel:"stylesheet"})]})}),(0,a.jsx)("nav",{className:"bg-white md:pt-0 items-center centershadow-lg relative z-20 border-t border-gray-400 bg-black",children:(0,a.jsx)("div",{className:"container mx-auto md:flex justify-between items-center text-sm md:text-md md:justify-start",children:(0,a.jsxs)("div",{className:"w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start",children:[(0,a.jsx)(n.default,{href:"/blog/",children:(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Blog"})}),(0,a.jsxs)("button",{className:"dropdown",children:[(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Marcas"}),(0,a.jsxs)("ul",{className:"dropdown-menu absolute hidden text-gray-700 pt-1",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/speedplay/",children:(0,a.jsx)("a",{className:"rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",children:"Pedales Speedplay"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.default,{href:"/shimano/",children:(0,a.jsx)("a",{className:"rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap",children:"Pedales Shimano"})})})]})]}),(0,a.jsx)(n.default,{href:"/mantenimiento/",children:(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Mantenimiento"})}),(0,a.jsx)(n.default,{href:"/entrenamiento/",children:(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Entrenamiento"})}),(0,a.jsx)(n.default,{href:"/kit-motor-central-bicicleta/",children:(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Motor Electrico para Bicicletas"})}),(0,a.jsx)(n.default,{href:"/cadenas-bicicleta/",children:(0,a.jsx)("a",{className:"text-white px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-400",children:"Cadenas para Bicicletas"})})]})})})]})}},6691:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var a=t(5893),n=t(9008),i=t(2666),s=t(4179),o=t(3863);function c(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.default,{children:[(0,a.jsx)("title",{children:"Extractores m22"}),(0,a.jsx)("meta",{name:"description",content:"extractor para bicicletas m22"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(s.Z,{ancho:"extractor m22"}),(0,a.jsx)("div",{className:"w-full px-6 py-12 bg-white",children:(0,a.jsxs)("div",{className:"container max-w-4xl mx-auto ",children:[(0,a.jsx)("h1",{children:"\xbfQue es un extractor m22 para bicicletas?"}),(0,a.jsx)("p",{children:"Un extractor M22 para bicicletas es una herramienta que se utiliza para quitar las tuercas M22 de las ruedas de una bicicleta. Esta herramienta se puede comprar en una tienda de bicicletas o en l\xednea."}),(0,a.jsx)("h2",{children:"\xbfcomo se utiliza un extractor m22?"}),(0,a.jsx)("p",{children:"Para utilizar un extractor M22, primero debe asegurarse de que las tuercas de las ruedas est\xe9n sueltas. Luego, inserte el extremo del extractor en la tuerca y g\xedrelo en sentido contrario a las agujas del reloj. Esto ayudar\xe1 a soltar la tuerca."}),(0,a.jsx)(o.Z,{buscar_productos:"extractor m22"})]})}),(0,a.jsx)(i.Z,{})]})}}},function(e){e.O(0,[3714,2512,8100,9774,2888,179],(function(){return r=5627,e(e.s=r);var r}));var r=e.O();_N_E=r}]);