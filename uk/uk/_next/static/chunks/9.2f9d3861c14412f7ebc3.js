(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9,64],{"4hs6":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a("nKUr"),i=a("q1tI"),l=a("TSYQ"),o=a.n(l),s=a("OS56"),r=a.n(s),c=a("tyWD"),d=a("3Imm"),p=a("20a2"),b=a("4nr2"),u=a("wd/R"),f=a.n(u),h=a("Ra8E");function v(){var e=Object(i.useState)("1"),t=e[0],a=e[1],l=Object(i.useState)("googleReviews"),s=l[0],u=l[1],v=function(e){t!==e&&(a(e),u("1"===e?"googleReviews":"2"===e?"trustPilot":"siteJabber"))},m=Object(i.useState)(null),x=m[0],y=m[1],k=Object(p.useRouter)();Object(i.useEffect)((function(){var e=(k=k.asPath.split("/"))[1];""===e&&(e="index"),g(e)}),[k]);var g=function(e){Object(d.b)("webReviews?page=".concat(e),"GET",null,null).then((function(e){if(e.data.status){var t=e.data.data;y(t.review_list)}})).catch((function(e){return console.error("Error: ".concat(e))}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("style",{dangerouslySetInnerHTML:{__html:c.a}}),Object(n.jsx)("style",{dangerouslySetInnerHTML:{__html:'.feedback .nav{width:100%;display:block;text-align:center;border-bottom:none}.feedback .nav .nav-item{display:inline-block;margin:0 10px}.feedback .nav .nav-item.active .nav-link{background:#fff;border-color:#fbd501}.feedback .nav .nav-item .nav-link{border:1px solid transparent;border-radius:50px;padding:10px 20px;cursor:pointer}.feedback .nav .nav-item .nav-link>img{width:40px;height:40px}.feedback .nav .nav-item .nav-link .rate-detail{margin-left:10px;text-align:left;justify-content:space-between;width:calc(100% - 50px);align-items:center}.feedback .nav .nav-item .nav-link .rate-detail .name{font-size:16px;color:#151515;margin-bottom:4px;text-transform:capitalize;font-weight:500}.feedback .nav .nav-item .nav-link .rate-detail .star{line-height:16px}.feedback .nav .nav-item .nav-link .rate-detail .star img{width:100px}.feedback .nav .nav-item .nav-link .rate-detail .rating span{font-size:40px;color:#000;font-weight:500;line-height:normal;margin-left:10px}.feedback .nav.show>.nav-link{background:#fff;border-color:#fbd501}.feedback .tab-content .feedback-slider .noReview-found{text-align:center;text-transform:capitalize;font-size:20px;margin-top:40px;color:#151515}.feedback .tab-content .feedback-slider .slick-slide{padding:30px 22px 0}.feedback .tab-content .feedback-slider .slick-dots{bottom:-10px}.feedback .tab-content .feedback-detail{background:#fff;border-radius:10px;position:relative;margin-top:60px;padding:60px 20px 30px}.feedback .tab-content .feedback-detail .info span img{margin-right:5px}.feedback .tab-content .feedback-detail .customer-detail{background:#12245a;padding:10px 80px 10px 40px;border-radius:20px 50px 50px 0px;position:absolute;top:-20px;left:-20px}.feedback .tab-content .feedback-detail .customer-detail:before{content:"";width:30px;height:30px;background:#0c183d;display:inline-block;position:absolute;left:0;bottom:-15px;border-radius:50% 0px 0px 50%;z-index:-1}.feedback .tab-content .feedback-detail .customer-detail .name{color:#fff;font-size:16px;font-weight:700;margin-bottom:2px}.feedback .tab-content .feedback-detail .customer-detail .id{color:#fff;font-weight:400;font-size:12px}.feedback .tab-content .feedback-detail .info .reviewTitle{margin-top:5px;font-weight:500;font-size:15px;line-height:23px;color:#151515}.feedback .tab-content .feedback-detail .customer-img{position:absolute;top:-40px;right:30px}.feedback .tab-content .feedback-detail .customer-img img{width:80px;height:80px;border-radius:50px;border:8px solid #f4f8fd;-o-object-fit:cover;object-fit:cover}.feedback .tab-content .feedback-detail .info .content{margin-bottom:0;margin-top:10px;color:#666;font-size:15px;line-height:24px}@media screen and (max-width: 1199px){.feedback .tab-content .feedback-detail .customer-img{right:15px}.feedback .nav .nav-item .nav-link .rate-detail .rating span{font-size:30px}}@media screen and (max-width: 991px){.feedback .nav .nav-item .nav-link{padding:12px 14px}.feedback .nav .nav-item .nav-link>img{width:30px;height:30px}.feedback .nav .nav-item .nav-link .rate-detail{width:calc(100% - 40px)}.feedback .nav .nav-item .nav-link .rate-detail .left .name{font-size:14px}.feedback .nav .nav-item .nav-link .rate-detail .rating{display:none}.feedback .tab-content .feedback-slider .slick-slide{padding:10px 20px}.feedback .tab-content .feedback-detail{margin-top:40px}}@media screen and (max-width: 575px){.feedback .nav .nav-item{margin:0;width:100%}.feedback .nav .nav-item .nav-link .d-flex>img{width:30px;height:30px}.feedback .nav .nav-item .nav-link .rate-detail .left .name{font-size:14px}.feedback .nav .nav-item .nav-link .rate-detail .rating{display:inline-block}.feedback .nav .nav-item .nav-link .rate-detail .rating span{font-size:22px}.feedback .tab-content .slick-slider .slick-slide{padding:0 0 0 20px}.feedback .tab-content .slick-slider .slick-dots{bottom:-20px}}'}}),Object(n.jsx)("section",{className:"feedback",id:"reviews",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"text-center mb-5",children:Object(n.jsx)("h2",{className:"section-title",children:"Check out our very own Client Feedback Board"})}),Object(n.jsxs)("ul",{className:"nav justify-content-end nav-pills",children:[Object(n.jsx)("li",{onClick:function(){v("1")},className:"nav-item ".concat(o()({active:"1"===t})),children:Object(n.jsxs)("div",{className:"d-flex align-items-center nav-link",children:[Object(n.jsx)(h.a,{src:"/Cheapestessay.png",alt:"Cheapestessay"}),Object(n.jsxs)("div",{className:"d-flex rate-detail",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("div",{className:"name",children:"Cheapestessy reviews"}),Object(n.jsx)("div",{className:"star mb-0",children:Object(n.jsx)(h.a,{src:"/stars.svg",alt:"stars",width:"100",height:"14"})})]}),Object(n.jsx)("div",{className:"rating mb-0",children:Object(n.jsx)("span",{children:"4.7"})})]})]})}),Object(n.jsx)("li",{onClick:function(){v("2")},className:"nav-item ".concat(o()({active:"2"===t})),children:Object(n.jsxs)("div",{className:"d-flex align-items-center nav-link",children:[Object(n.jsx)(h.a,{src:"/trustpilot.png",alt:"trustpilot.png"}),Object(n.jsxs)("div",{className:"d-flex rate-detail",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("div",{className:"name",children:"trustpilot reviews"}),Object(n.jsx)("div",{className:"star mb-0",children:Object(n.jsx)(h.a,{src:"/stars.svg",alt:"stars",width:"100",height:"14"})})]}),Object(n.jsx)("div",{className:"rating mb-0",children:Object(n.jsx)("span",{children:"4.5"})})]})]})}),Object(n.jsx)("li",{onClick:function(){v("3")},className:"nav-item ".concat(o()({active:"3"===t})),children:Object(n.jsxs)("div",{className:"d-flex align-items-center nav-link",children:[Object(n.jsx)(h.a,{src:"/sitejabber.png",alt:"sitejabber.png"}),Object(n.jsxs)("div",{className:"d-flex rate-detail",children:[Object(n.jsxs)("div",{className:"left",children:[Object(n.jsx)("div",{className:"name",children:"sitejabber reviews"}),Object(n.jsx)("div",{className:"star mb-0",children:Object(n.jsx)(h.a,{src:"/stars.svg",alt:"stars",width:"100",height:"14"})})]}),Object(n.jsx)("div",{className:"rating mb-0",children:Object(n.jsx)("span",{children:"4.4"})})]})]})})]}),Object(n.jsx)("div",{className:"tab-content",children:Object(n.jsx)("div",{className:"feedback-slider",children:Object(n.jsx)(r.a,{dots:!0,arrows:!1,autplay:!0,speed:500,slidesToShow:x&&x[s]?x[s].length<3?x[s].length:3:1,slidesToScroll:1,responsive:[{breakpoint:600,settings:{slidesToShow:1}}],children:x&&x[s]?x[s].map((function(e,t){return Object(n.jsxs)("div",{className:"feedback-detail",children:[Object(n.jsxs)("div",{className:"customer-detail",children:[Object(n.jsx)("div",{className:"name",children:e.customer_name}),Object(n.jsx)("span",{className:"id",children:f()(e.review_date).format("DD MMM YYYY")})]}),Object(n.jsxs)("div",{className:"info",children:[Object(n.jsx)(b.a,{readonly:!0,initialRating:e.rating,emptySymbol:Object(n.jsx)(h.a,{src:"/empty.svg",className:"icon",alt:"ratingImg",width:"16px",height:"16px"}),fullSymbol:Object(n.jsx)(h.a,{src:"/full.svg",className:"icon",alt:"ratingImg",width:"16px",height:"16px"})}),Object(n.jsx)("div",{className:"reviewTitle",children:e.review_headline}),Object(n.jsx)("p",{className:"content",children:e.review})]})]},t)})):Object(n.jsx)("div",{className:"noReview-found",children:"no reviews found"})})})})]})})]})}},"4nr2":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n);function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){c(e,t,a[t])}))}return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?h(e):t}var m={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},x={empty:p({},m,{backgroundColor:"#ccc"}),full:p({},m,{backgroundColor:"black"}),placeholder:p({},m,{backgroundColor:"red"})},y=function(e){return i.a.isValidElement(e)?e:"object"===l(e)&&null!==e?i.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?i.a.createElement("span",{className:e}):void 0},k=function(e){function t(){return o(this,t),v(this,u(t).apply(this,arguments))}return b(t,e),r(t,[{key:"render",value:function(){var e,t=this.props,a=t.index,n=t.inactiveIcon,l=t.activeIcon,o=t.percent,s=t.direction,r=t.readonly,d=t.onClick,p=t.onMouseMove,b=y(n),u=o<100?{}:{visibility:"hidden"},f=y(l),h=(c(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===s?"right":"left",0),c(e,"width","".concat(o,"%")),e),v={cursor:r?"inherit":"pointer",display:"inline-block",position:"relative"};function m(e){p&&p(a,e)}function x(e){d&&(e.preventDefault(),d(a,e))}return i.a.createElement("span",{style:v,onClick:x,onMouseMove:m,onTouchMove:m,onTouchEnd:x},i.a.createElement("span",{style:u},b),i.a.createElement("span",{style:h},f))}}]),t}(i.a.PureComponent),g=function(e){function t(e){var a;return o(this,t),(a=v(this,u(t).call(this,e))).state={displayValue:a.props.value,interacting:!1},a.onMouseLeave=a.onMouseLeave.bind(h(h(a))),a.symbolMouseMove=a.symbolMouseMove.bind(h(h(a))),a.symbolClick=a.symbolClick.bind(h(h(a))),a}return b(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(a){return{displayValue:t?e.value:a.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.props.onClick(a,t)}},{key:"symbolMouseMove",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:a})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var a=this.calculateHoverPercentage(t),n=Math.ceil(a%1*this.props.fractions)/this.props.fractions,i=Math.pow(10,3),l=e+(Math.floor(a)+Math.floor(n*i)/i);return l>0?l>this.props.totalSymbols?this.props.totalSymbols:l:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,a=e.target.getBoundingClientRect(),n="rtl"===this.props.direction?a.right-t:t-a.left;return n<0?0:n/a.width}},{key:"render",value:function(){var e,t=this.props,a=t.readonly,n=t.quiet,l=t.totalSymbols,o=t.value,s=t.placeholderValue,r=t.direction,c=t.emptySymbol,b=t.fullSymbol,u=t.placeholderSymbol,f=t.className,h=t.id,v=t.style,m=t.tabIndex,x=this.state,y=x.displayValue,g=x.interacting,j=[],O=[].concat(c),w=[].concat(b),N=[].concat(u),S=0!==s&&0===o&&!g;e=S?s:n?o:y;for(var C=Math.floor(e),M=0;M<l;M++){var E=void 0;E=M-C<0?100:M-C===0?100*(e-M):0,j.push(i.a.createElement(k,d({key:M,index:M,readonly:a,inactiveIcon:O[M%O.length],activeIcon:S?N[M%w.length]:w[M%w.length],percent:E,direction:r},!a&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return i.a.createElement("span",d({id:h,style:p({},v,{display:"inline-block",direction:r}),className:f,tabIndex:m,"aria-label":this.props["aria-label"]},!a&&{onMouseLeave:this.onMouseLeave}),j)}}]),t}(i.a.PureComponent);function j(){}j._name="react_rating_noop";var O=function(e){function t(e){var a;return o(this,t),(a=v(this,u(t).call(this,e))).state={value:e.initialRating},a.handleClick=a.handleClick.bind(h(h(a))),a.handleHover=a.handleHover.bind(h(h(a))),a}return b(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var a=this,n=this.translateDisplayValueToValue(e);this.props.onClick(n),this.state.value!==n&&this.setState({value:n},(function(){return a.props.onChange(a.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.emptySymbol,n=e.fullSymbol,l=e.placeholderSymbol,o=e.readonly,s=e.quiet,r=e.fractions,c=e.direction,d=e.start,p=e.stop,b=e.id,u=e.className,f=e.style,h=e.tabIndex;return i.a.createElement(g,{id:b,style:f,className:u,tabIndex:h,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,a){return Math.floor((t-e)/a)}(d,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:s,fractions:r,direction:c,emptySymbol:a,fullSymbol:n,placeholderSymbol:l,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(i.a.PureComponent);O.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:j,onClick:j,onChange:j,emptySymbol:x.empty,fullSymbol:x.full,placeholderSymbol:x.placeholder},t.a=O}}]);