(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58,59],{"33Jr":function(e,t,n){"use strict";n.d(t,"r",(function(){return r})),n.d(t,"l",(function(){return o})),n.d(t,"h",(function(){return c})),n.d(t,"o",(function(){return l})),n.d(t,"p",(function(){return d})),n.d(t,"q",(function(){return p})),n.d(t,"a",(function(){return b})),n.d(t,"t",(function(){return f})),n.d(t,"s",(function(){return m})),n.d(t,"e",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return x})),n.d(t,"n",(function(){return v})),n.d(t,"b",(function(){return j})),n.d(t,"g",(function(){return y})),n.d(t,"j",(function(){return k})),n.d(t,"m",(function(){return E})),n.d(t,"i",(function(){return T})),n.d(t,"f",(function(){return C})),n.d(t,"k",(function(){return I}));var a,s=n("17x9"),i=n.n(s);function r(e){document.body.style.paddingRight=e>0?e+"px":null}function o(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&r(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function d(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function p(e,t){for(var n,a=Array.isArray(t)?t:[t],s=a.length,i={};s>0;)i[n=a[s-=1]]=e[n];return i}var u="object"===typeof window&&window.Element||function(){};function b(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var f=i.a.oneOfType([i.a.string,i.a.func,b,i.a.shape({current:i.a.any})]),m=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),h={Fade:150,Collapse:350,Modal:300,Carousel:600},g=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],x={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},v={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],y=!("undefined"===typeof window||!window.document||!window.document.createElement);function w(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function O(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function k(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!O(e))return!1;var t=w(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&y){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||y&&"number"===typeof e.length)}function E(e,t){var n=k(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var T=["touchstart","click"];function C(e,t,n,a){var s=e;N(s)||(s=[s]);var i=n;if("string"===typeof i&&(i=i.split(/\s+/)),!N(s)||"function"!==typeof t||!Array.isArray(i))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(s,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(i,(function(e){Array.prototype.forEach.call(s,(function(n){n.removeEventListener(e,t,a)}))}))}}var I=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},"9a8N":function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),i=n("q1tI"),r=n.n(i),o=n("17x9"),c=n.n(o),l=n("TSYQ"),d=n.n(l),p=n("33Jr"),u={tabs:c.a.bool,pills:c.a.bool,vertical:c.a.oneOfType([c.a.bool,c.a.string]),horizontal:c.a.string,justified:c.a.bool,fill:c.a.bool,navbar:c.a.bool,card:c.a.bool,tag:p.s,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,i=e.tabs,o=e.pills,c=e.vertical,l=e.horizontal,u=e.justified,b=e.fill,f=e.navbar,m=e.card,h=e.tag,g=Object(s.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),x=Object(p.o)(d()(t,f?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":i,"card-header-tabs":m&&i,"nav-pills":o,"card-header-pills":m&&o,"nav-justified":u,"nav-fill":b}),n);return r.a.createElement(h,Object(a.a)({},g,{className:x}))};b.propTypes=u,b.defaultProps={tag:"ul",vertical:!1},t.a=b},Czwy:function(e,t,n){"use strict";var a=n("wx14"),s=n("dI71"),i=n("q1tI"),r=n.n(i),o=n("17x9"),c=n.n(o),l=n("TSYQ"),d=n.n(l),p=n("I8YG"),u=n("33Jr"),b={tag:u.s,activeTab:c.a.any,className:c.a.string,cssModule:c.a.object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={activeTab:n.props.activeTab},n}return Object(s.a)(t,e),t.getDerivedStateFromProps=function(e,t){return t.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.cssModule,s=e.tag,i=Object(u.p)(this.props,Object.keys(b)),o=Object(u.o)(d()("tab-content",t),n);return r.a.createElement(p.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(s,Object(a.a)({},i,{className:o})))},t}(i.Component);t.a=f,f.propTypes=b,f.defaultProps={tag:"div"}},DrZ3:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("q1tI"),i=n("20a2"),r=n("9a8N"),o=n("F66N"),c=n("arvA"),l=n("Czwy"),d=n("EzvR"),p=n("TSYQ"),u=n.n(p),b=n("Ra8E");t.default=function(e){var t=Object(s.useState)("1"),n=t[0],p=t[1],f=function(e){n!==e&&p(e)};return Object(i.useRouter)(),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("style",{dangerouslySetInnerHTML:{__html:'.assignment{position:relative}.assignment::before{content:"";background-image:url("/uk/type-of-assignment-bottom-wave.svg");width:350px;height:150px;display:inline-block;position:absolute;right:0;background-repeat:no-repeat;z-index:-1;top:40px;background-position:right}.assignment::after{content:"";background-image:url("/uk/assignmentbottomline.svg");width:200px;height:150px;display:inline-block;position:absolute;left:0;background-repeat:no-repeat;z-index:-1;bottom:60px}.assignment .assignment-details{position:relative}.assignment .assignment-details::before{content:"";background-image:url("/uk/tab-bg.svg");width:55%;height:340px;display:inline-block;position:absolute;left:-130px;background-repeat:no-repeat;background-size:cover;z-index:-1;top:-40px}.assignment .nav-pills .nav-link{width:160px;height:160px}.assignment .nav-pills .nav-link span{font-size:18px}.assignment .desc{margin-bottom:100px}.assignment .nav-pills{position:relative;border-bottom:none}.assignment .nav-pills:after{content:"";position:absolute;background-image:url("/uk/dots-3.svg");width:190px;height:90px;left:0;bottom:54px;background-repeat:no-repeat;z-index:0}.assignment .nav-pills .nav-item{margin:0 10px 20px 10px}.assignment .nav-pills .nav-link{align-items:center;justify-content:center;border:1px solid transparent;background:#fff;width:200px;height:180px;border-radius:10px;cursor:pointer;display:flex;flex-wrap:wrap;position:relative;-webkit-transition:all .4s ease-in-out;transition:all .4s ease-in-out}.assignment .nav-pills .nav-link.active,.assignment .nav-pills .nav-link:hover{border-color:#fbd501;-webkit-box-shadow:0 7px 20px 0px rgba(38,56,77,.06);box-shadow:0 7px 20px 0px rgba(38,56,77,.06)}.assignment .nav-pills .nav-link span{display:block;color:#12245a;font-weight:700;font-size:20px;line-height:normal;white-space:nowrap;width:100%;text-align:center}.assignment .tab-content .tab-pane-box{background:#fff;padding:30px 50px;border-radius:10px;width:350px;margin:0 auto;position:relative}.assignment .tab-content .tab-pane-box::after{content:"";position:absolute;height:3px;width:30px;background-color:#fbd501;left:0;top:36px}.assignment .tab-content .tab-pane-box:before{content:"";position:absolute;background-image:url("/uk/dots-2.svg");width:170px;height:80px;left:-60px;top:-35px;background-repeat:no-repeat;z-index:-3}.assignment .tab-content .tab-pane-box .title{font-size:20px;font-weight:700;color:#12245a;margin-bottom:20px}.assignment .tab-content .tab-pane-box p{color:#888;line-height:26px;margin-bottom:30px}@media screen and (max-width: 1399px){.assignment .nav-pills .nav-link{width:160px;height:160px}.assignment .nav-pills .nav-link span{font-size:18px}}@media screen and (max-width: 1199px){.assignment .nav-pills:before{left:-80%;height:280px}.assignment .nav-pills:after{bottom:0}.assignment .nav-pills .nav-link{width:140px;height:120px}.assignment .nav-pills .nav-link img{width:40px}.assignment .nav-pills .nav-link span{font-size:15px}}@media screen and (max-width: 1024px){.assignment .nav-pills .nav-link{width:140px;height:120px}}@media screen and (max-width: 991px){.assignment{padding-bottom:100px}.assignment .desc{margin-bottom:60px}.assignment::before{content:none}.assignment .assignment-details:before{width:100%;top:-30px;height:300px;left:0}.assignment .assignment-details .nav-pills{justify-content:center !important;width:100%;margin:0 auto 30px}.assignment .assignment-details .nav-pills::after{content:none}.assignment .assignment-details .nav-pills .nav-item .nav-link{width:210px;height:55px;flex-wrap:nowrap;align-items:center;justify-content:center}.assignment .assignment-details .nav-pills .nav-item .nav-link img{width:30px}.assignment .assignment-details .nav-pills .nav-item .nav-link span{font-size:16px;text-align:left;margin-left:14px;margin-top:0;width:auto}.assignment .assignment-details .nav-pills::after{bottom:-80px}.assignment .assignment-details .tab-content .tab-pane-box{padding:25px 25px 30px 60px;width:90%}.assignment .assignment-details .tab-content .tab-pane-box h4:before{left:-60px}.assignment:after{content:none}}@media screen and (max-width: 767px){.assignment .assignment-details .nav-pills{width:100%}}@media screen and (max-width: 575px){.assignment{padding-bottom:40px}.assignment .desc{margin-bottom:70px}.assignment .assignment-details::before{height:380px}.assignment .assignment-details .nav-pills{margin-bottom:20px}.assignment .assignment-details .nav-pills::after{content:none}.assignment .assignment-details .nav-pills .nav-item{width:100%;margin:0 0 10px 0}.assignment .assignment-details .nav-pills .nav-item .nav-link{width:100%;height:50px;justify-content:flex-start}.assignment .assignment-details .nav-pills .nav-item .nav-link img{width:30px}.assignment .assignment-details .nav-pills::after{bottom:-50px}.assignment .assignment-details .tab-content .tab-pane-box{width:100%;padding-left:40px}.assignment .assignment-details .tab-content .tab-pane-box::after{width:20px}.assignment .assignment-details .tab-content .tab-pane-box::before{content:none}}'}}),Object(a.jsxs)("section",{className:"assignment",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("h2",{className:"section-title",children:"Types of Assignments we Cover"}),Object(a.jsx)("p",{className:"desc",children:"At CheapestEssay, we cover a broad spectrum of essay writing services in the UK. We are always happy to help you round the clock."})]})}),Object(a.jsx)("div",{className:"assignment-details",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-7",children:Object(a.jsxs)(r.a,{tabs:!0,className:"nav justify-content-end nav-pills",children:[Object(a.jsx)(o.a,{children:Object(a.jsxs)(c.a,{className:u()({active:"1"===n}),onClick:function(){f("1")},children:[Object(a.jsx)(b.a,{src:"/essay.svg",alt:"essay",width:"51",height:"51"}),Object(a.jsx)("span",{children:"Essay"})]})}),Object(a.jsx)(o.a,{children:Object(a.jsxs)(c.a,{className:u()({active:"2"===n}),onClick:function(){f("2")},children:[Object(a.jsx)(b.a,{src:"/researchpaper.svg",alt:"researchpaper",width:"51",height:"51"}),Object(a.jsx)("span",{children:"Research Paper"})]})}),Object(a.jsx)(o.a,{children:Object(a.jsxs)(c.a,{className:u()({active:"3"===n}),onClick:function(){f("3")},children:[Object(a.jsx)(b.a,{src:"/casesStudy.svg",alt:"casesStudy",width:"51",height:"51"}),Object(a.jsx)("span",{children:"Case Study"})]})}),Object(a.jsx)(o.a,{children:Object(a.jsxs)(c.a,{className:u()({active:"4"===n}),onClick:function(){f("4")},children:[Object(a.jsx)(b.a,{src:"/coursework.svg",alt:"coursework",width:"51",height:"51"}),Object(a.jsx)("span",{children:"Course Work"})]})}),Object(a.jsx)(o.a,{children:Object(a.jsxs)(c.a,{className:u()({active:"5"===n}),onClick:function(){f("5")},children:[Object(a.jsx)(b.a,{src:"/assignment.svg",alt:"assignment",width:"51",height:"51"}),Object(a.jsx)("span",{children:"Assignment"})]})})]})}),Object(a.jsx)("div",{className:"col-lg-5",children:Object(a.jsxs)(l.a,{activeTab:n,children:[Object(a.jsx)(d.a,{tabId:"1",children:Object(a.jsxs)("div",{className:"tab-pane-box",children:[Object(a.jsx)("h3",{className:"title",children:"Essay"}),Object(a.jsx)("p",{children:"Curating a compelling essay is like cracking hard nuts. But no more. Get an outstanding paper written by top experts and release all your stress."}),Object(a.jsx)("a",{className:"btn secondary-btn",target:"_blank",href:"./view-sample/essay.pdf",children:"view sample"})]})}),Object(a.jsx)(d.a,{tabId:"2",children:Object(a.jsxs)("div",{className:"tab-pane-box",children:[Object(a.jsx)("h3",{className:"title",children:"Research Paper"}),Object(a.jsx)("p",{children:"Our research paper writers follow a proper format and style while writing research papers. Peer-backed reviews and references back our research papers. Before sending it out, this piece of writing is edited to make it error-free."}),Object(a.jsx)("a",{className:"btn secondary-btn",target:"_blank",href:"./view-sample/researchPaper.pdf",children:"view sample"})]})}),Object(a.jsx)(d.a,{tabId:"3",children:Object(a.jsxs)("div",{className:"tab-pane-box",children:[Object(a.jsx)("h3",{className:"title",children:"Case Study"}),Object(a.jsx)("p",{children:"Our Case study writing services are top class. Since case studies can be time-consuming, we are happy to be of help. Our case study writers make this task hassle-free for you."}),Object(a.jsx)("a",{className:"btn secondary-btn",target:"_blank",href:"./view-sample/caseStudy.pdf",children:"view sample"})]})}),Object(a.jsx)(d.a,{tabId:"4",children:Object(a.jsxs)("div",{className:"tab-pane-box",children:[Object(a.jsx)("h3",{className:"title",children:"Course Work"}),Object(a.jsx)("p",{children:"Worried about completing that dreaded coursework? Our Coursework writers follow a step-by-step writing format. These write-ups are supported by critical analysis and expertise of relevant theories."}),Object(a.jsx)("a",{className:"btn secondary-btn",target:"_blank",href:"./view-sample/courseWork.pdf",children:"view sample"})]})}),Object(a.jsx)(d.a,{tabId:"5",children:Object(a.jsxs)("div",{className:"tab-pane-box",children:[Object(a.jsx)("h3",{className:"title",children:"Assignment"}),Object(a.jsx)("p",{children:"Writing assignments can be tiring and eat up on your precious time. To solve this, we have a bunch of accomplished assignment writers. We value your time which is why offer you top-of-the-line assignment writing services."}),Object(a.jsx)("a",{className:"btn secondary-btn",target:"_blank",href:"./view-sample/assignment.pdf",children:"view sample"})]})})]})})]})})})]})]})}},EzvR:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("wx14"),s=n("zLVn"),i=n("q1tI"),r=n.n(i),o=n("17x9"),c=n.n(o),l=n("TSYQ"),d=n.n(l),p=n("I8YG"),u=n("33Jr"),b={tag:u.s,className:c.a.string,cssModule:c.a.object,tabId:c.a.any};function f(e){var t=e.className,n=e.cssModule,i=e.tabId,o=e.tag,c=Object(s.a)(e,["className","cssModule","tabId","tag"]),l=function(e){return Object(u.o)(d()("tab-pane",t,{active:i===e}),n)};return r.a.createElement(p.a.Consumer,null,(function(e){var t=e.activeTabId;return r.a.createElement(o,Object(a.a)({},c,{className:l(t)}))}))}f.propTypes=b,f.defaultProps={tag:"div"}},F66N:function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),i=n("q1tI"),r=n.n(i),o=n("17x9"),c=n.n(o),l=n("TSYQ"),d=n.n(l),p=n("33Jr"),u={tag:p.s,active:c.a.bool,className:c.a.string,cssModule:c.a.object},b=function(e){var t=e.className,n=e.cssModule,i=e.active,o=e.tag,c=Object(s.a)(e,["className","cssModule","active","tag"]),l=Object(p.o)(d()(t,"nav-item",!!i&&"active"),n);return r.a.createElement(o,Object(a.a)({},c,{className:l}))};b.propTypes=u,b.defaultProps={tag:"li"},t.a=b},I8YG:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),s=n.n(a).a.createContext({})},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},TSYQ:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=s.apply(null,a);r&&e.push(r)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()},arvA:function(e,t,n){"use strict";var a=n("wx14"),s=n("zLVn"),i=n("JX7q"),r=n("dI71"),o=n("q1tI"),c=n.n(o),l=n("17x9"),d=n.n(l),p=n("TSYQ"),u=n.n(p),b=n("33Jr"),f={tag:b.s,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),disabled:d.a.bool,active:d.a.bool,className:d.a.string,cssModule:d.a.object,onClick:d.a.func,href:d.a.any},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.active,r=e.tag,o=e.innerRef,l=Object(s.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(b.o)(u()(t,"nav-link",{disabled:l.disabled,active:i}),n);return c.a.createElement(r,Object(a.a)({},l,{ref:o,onClick:this.onClick,className:d}))},t}(c.a.Component);m.propTypes=f,m.defaultProps={tag:"a"},t.a=m},dI71:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},wx14:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}n.d(t,"a",(function(){return a}))}}]);