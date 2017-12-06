!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.MicroModal=t()}(this,function(){"use strict"
var e=(function(){function e(e){this.value=e}function t(t){function o(e,t){return new Promise(function(o,r){var c={key:e,arg:t,resolve:o,reject:r,next:null}
a?a=a.next=c:(i=a=c,n(e,t))})}function n(o,i){try{var a=t[o](i),c=a.value
c instanceof e?Promise.resolve(c.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":i.resolve({value:t,done:!0})
break
case"throw":i.reject(t)
break
default:i.resolve({value:t,done:!1})}i=i.next,i?n(i.key,i.arg):a=null}var i,a
this._invoke=o,"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),t=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o]
n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),o=function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t]
return o}return Array.from(e)}
return function(){var n=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],r=function(){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.targetModal,i=t.triggers,a=void 0===i?[]:i,c=t.onShow,l=void 0===c?function(){}:c,s=t.onClose,u=void 0===s?function(){}:s
e(this,r),this.modal=document.getElementById(n),a.length>0&&this.registerTriggers.apply(this,o(a)),this.callbacks={onShow:l,onClose:u},this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}return t(r,[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n]
o.forEach(function(t){t.addEventListener("click",function(){return e.showModal()})})}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.setFocusToFirstNode(),this.addEventListeners(),this.callbacks.onShow(this.modal)}},{key:"closeModal",value:function(){this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.activeElement.focus(),this.callbacks.onClose(this.modal)}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){e.target.hasAttribute("data-micromodal-close")&&this.closeModal(),e.preventDefault()}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(n)
return Object.keys(e).map(function(t){return e[t]})}},{key:"setFocusToFirstNode",value:function(){var e=this.getFocusableNodes()
e.length&&e[0].focus()}},{key:"maintainFocus",value:function(e){var t=this.getFocusableNodes(),o=t.indexOf(document.activeElement)
e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),e.shiftKey||o!==t.length-1||(t[0].focus(),e.preventDefault())}}]),r}(),i=function(e){var t=[]
return e.forEach(function(e){var o=e.dataset.micromodalTrigger
void 0===t[o]&&(t[o]=[]),t[o].push(e)}),t},a=function(e,t){if(e.length<=0)return console.warn("MicroModal v0.1.1: 笶猶lease specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("MicroModal v0.1.1: %cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1
for(var o in t)if(!document.getElementById(o))return console.warn("MicroModal v0.1.1: 笶祐eems like you have missed %c'"+o+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("MicroModal v0.1.1: %cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+o+'"></div>'),!1
return!0}
return{init:function(e){var t=e||{},n=document.querySelectorAll("[data-micromodal-trigger]"),c=i(n)
if(a(n,c))for(var l in c){var s=c[l]
t.targetModal=l,t.triggers=[].concat(o(s)),new r(t)}},show:function(e){new r({targetModal:e}).showModal()}}}()})

function Snackbar(t,e,i){""!==t?(this.options=this.activateOptions(e),this.data=t,this.callback=i,this.start(),this.snackbar()):console.warn("SnackbarLight: You can not create a empty snackbar please give it a string.")}Snackbar.prototype={options:{timeout:5e3,activeClass:"active",link:!1,url:"#"},start:function(){if(!document.getElementById("snackbar-container")){var t=document.createElement("div");t.setAttribute("id","snackbar-container"),document.body.appendChild(t)}},timer:function(t,e){var i=e;this.timer={timerId:Math.round(1e3*Math.random()),pause:function(){window.clearTimeout(this.timerId),i-=new Date-start},resume:function(){start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(t,i)}},this.timer.resume()},snackbar:function(){var t=this,e=document.createElement("div");document.getElementById("snackbar-container").appendChild(e),e.innerHTML=this.getData(),e.setAttribute("class","snackbar"),setTimeout(function(){e.setAttribute("class","snackbar "+t.options.activeClass)},50),this.options.timeout!==!1&&this.timer(function(){e.setAttribute("class","snackbar"),t.destroy(e)},this.options.timeout),this.listeners(e)},getData:function(){return this.options.link!==!1?"<span>"+this.data+"</span><a href='"+this.options.url+"'>"+this.options.link+"</a>":"<span>"+this.data+"</span>"},listeners:function(t){var e=this;t.addEventListener("click",function(){"function"==typeof e.callback&&e.callback(),t.setAttribute("class","snackbar"),e.destroy(t)}),t.addEventListener("mouseenter",function(){e.timer.pause()}),t.addEventListener("mouseout",function(){e.timer.resume()})},destroy:function(t){this.timer.pause(),setTimeout(function(){t.remove()},1e4)},activateOptions:function(t){var e=this,i=t||{};for(var n in this.options)e.options.hasOwnProperty(n)&&!i.hasOwnProperty(n)&&(i[n]=e.options[n]);return i}},SnackbarLight={install:function(t){var e=this;t.prototype.$snackbar={},t.prototype.$snackbar.create=function(t,i,n){e.create(t,i,n)}},create:function(t,e,i){new Snackbar(t,e,i)}},"object"==typeof exports?module.exports=SnackbarLight:"function"==typeof define&&define.amd?define([],function(){return SnackbarLight}):window.Vue&&Vue.use(SnackbarLight);for(var elements=document.querySelectorAll("[data-toggle=snackbar]"),i=elements.length-1;i>=0;i--)elements[i].addEventListener("click",function(){var t={};null!==this.getAttribute("data-link")&&(t.link=this.getAttribute("data-link")),null!==this.getAttribute("data-timeout")&&(t.timeout=this.getAttribute("data-timeout")),null!==this.getAttribute("data-activeClass")&&(t.activeClass=this.getAttribute("data-active-class")),this.getAttribute("data-url")&&(t.url=this.getAttribute("data-url")),new Snackbar(this.getAttribute("data-content"),t)});

document.querySelector('.nav-mobile__menu').addEventListener('click', function () {
  document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
})

'use strict';

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

console.log('JavaScript loaded. Lazy loading initialized.');

MicroModal.init();
