"use strict";(self.webpackChunkportfolio_website=self.webpackChunkportfolio_website||[]).push([[650],{650:function(e,t,n){function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n.d(t,{default:function(){return c}});var l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0;r(this,e);var o=this;if(!t||1!==t.nodeType)return new Error("Incorrect element type");o.$container=t,o.texts=n||[],o.config=a(a({},e._defaultConfig),i||{}),o.radius=o.config.radius,o.depth=2*o.radius,o.size=1.5*o.radius,o.maxSpeed=e._getMaxSpeed(o.config.maxSpeed),o.initSpeed=e._getInitSpeed(o.config.initSpeed),o.direction=o.config.direction,o.keep=o.config.keep,o.paused=!1,o._createElment(),o._init(),e.list.push({el:o.$el,container:t,instance:o})}var t,n,i;return t=e,n=[{key:"_createElment",value:function(){var e=this,t=document.createElement("div");t.className=e.config.containerClass,e.config.useContainerInlineStyles&&(t.style.position="relative",t.style.width="".concat(2*e.radius,"px"),t.style.height="".concat(2*e.radius,"px")),e.items=[],e.texts.forEach((function(n,i){var o=e._createTextItem(n,i);t.appendChild(o.el),e.items.push(o)})),e.$container.appendChild(t),e.$el=t}},{key:"_createTextItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this,i=document.createElement("span");if(i.className=n.config.itemClass,n.config.useItemInlineStyles){i.style.willChange="transform, opacity, filter",i.style.position="absolute",i.style.top="50%",i.style.left="50%",i.style.zIndex=t+1,i.style.filter="alpha(opacity=0)",i.style.opacity=0;var o="50% 50%";i.style.WebkitTransformOrigin=o,i.style.MozTransformOrigin=o,i.style.OTransformOrigin=o,i.style.transformOrigin=o;var r="translate3d(-50%, -50%, 0) scale(1)";i.style.WebkitTransform=r,i.style.MozTransform=r,i.style.OTransform=r,i.style.transform=r}return i.innerText=e,a({el:i},n._computePosition(t))}},{key:"_computePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this,i=n.texts.length;t&&(e=Math.floor(Math.random()*(i+1)));var o=Math.acos((2*e+1)/i-1),a=Math.sqrt((i+1)*Math.PI)*o;return{x:n.size*Math.cos(a)*Math.sin(o)/2,y:n.size*Math.sin(a)*Math.sin(o)/2,z:n.size*Math.cos(o)/2}}},{key:"_requestInterval",value:function(e,t){var n=(function(){return window.requestAnimationFrame}||function(e,t){window.setTimeout(e,1e3/60)})(),i=(new Date).getTime(),o={};return o.value=n((function a(){o.value=n(a),(new Date).getTime()-i>=t&&(e.call(),i=(new Date).getTime())})),o}},{key:"_init",value:function(){var t=this;t.active=!1,t.mouseX0=t.initSpeed*Math.sin(t.direction*(Math.PI/180)),t.mouseY0=-t.initSpeed*Math.cos(t.direction*(Math.PI/180)),t.mouseX=t.mouseX0,t.mouseY=t.mouseY0,e._on(t.$el,"mouseover",(function(){t.active=!0})),e._on(t.$el,"mouseout",(function(){t.active=!1})),e._on(t.keep?window:t.$el,"mousemove",(function(e){e=e||window.event;var n=t.$el.getBoundingClientRect();t.mouseX=(e.clientX-(n.left+n.width/2))/5,t.mouseY=(e.clientY-(n.top+n.height/2))/5})),t._next(),t.interval=t._requestInterval((function(){t._next.call(t)}),10)}},{key:"_next",value:function(){var e=this;if(!e.paused){e.keep||e.active||(e.mouseX=Math.abs(e.mouseX-e.mouseX0)<1?e.mouseX0:(e.mouseX+e.mouseX0)/2,e.mouseY=Math.abs(e.mouseY-e.mouseY0)<1?e.mouseY0:(e.mouseY+e.mouseY0)/2);var t=-Math.min(Math.max(-e.mouseY,-e.size),e.size)/e.radius*e.maxSpeed,n=Math.min(Math.max(-e.mouseX,-e.size),e.size)/e.radius*e.maxSpeed;if(!(Math.abs(t)<=.01&&Math.abs(n)<=.01)){var i=Math.PI/180,o=[Math.sin(t*i),Math.cos(t*i),Math.sin(n*i),Math.cos(n*i)];e.items.forEach((function(t){var n=t.x,i=t.y*o[1]+t.z*-o[0],a=t.y*o[0]+t.z*o[1],r=n*o[3]+a*o[2],s=i,l=a*o[3]-n*o[2],c=2*e.depth/(2*e.depth+l);t.x=r,t.y=s,t.z=l,t.scale=c.toFixed(3);var u=c*c-.25;u=(u>1?1:u).toFixed(3);var f=t.el,m=(t.x-f.offsetWidth/2).toFixed(2),d=(t.y-f.offsetHeight/2).toFixed(2),p="translate3d(".concat(m,"px, ").concat(d,"px, 0) scale(").concat(t.scale,")");f.style.WebkitTransform=p,f.style.MozTransform=p,f.style.OTransform=p,f.style.transform=p,f.style.filter="alpha(opacity=".concat(100*u,")"),f.style.opacity=u}))}}}},{key:"update",value:function(e){var t=this;t.texts=e||[],t.texts.forEach((function(e,n){var i=t.items[n];i||(i=t._createTextItem(e,n),Object.assign(i,t._computePosition(n,!0)),t.$el.appendChild(i.el),t.items.push(i)),i.el.innerText=e}));var n=t.texts.length,i=t.items.length;n<i&&t.items.splice(n,i-n).forEach((function(e){t.$el.removeChild(e.el)}))}},{key:"destroy",value:function(){var t=this;t.interval=null;var n=e.list.findIndex((function(e){return e.el===t.$el}));-1!==n&&e.list.splice(n,1),t.$container&&t.$el&&t.$container.removeChild(t.$el)}},{key:"pause",value:function(){this.paused=!0}},{key:"resume",value:function(){this.paused=!1}}],i=[{key:"_on",value:function(e,t,n,i){e.addEventListener?e.addEventListener(t,n,i):e.attachEvent?e.attachEvent("on".concat(t),n):e["on".concat(t)]=n}}],n&&s(t.prototype,n),i&&s(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();l.list=[],l._defaultConfig={radius:100,maxSpeed:"normal",initSpeed:"normal",direction:135,keep:!0,useContainerInlineStyles:!0,useItemInlineStyles:!0,containerClass:"tagcloud",itemClass:"tagcloud--item"},l._getMaxSpeed=function(e){return{slow:.5,normal:1,fast:2}[e]||1},l._getInitSpeed=function(e){return{slow:16,normal:32,fast:80}[e]||32};var c=function(e,t,n){"string"===typeof e&&(e=document.querySelectorAll(e)),e.forEach||(e=[e]);var i=[];return e.forEach((function(e){e&&i.push(new l(e,t,n))})),i.length<=1?i[0]:i}}}]);
//# sourceMappingURL=650.52590b03.chunk.js.map