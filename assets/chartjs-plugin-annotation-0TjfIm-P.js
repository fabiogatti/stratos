import{d as ut,C as re,i as B,b as D,c as ft,u as ht,e as T,f as he,g as $e,h as w,v as _,E,t as p,j as F,k as ye,l as yt,P as b,A as bt,m as Q,n as gt,o as mt,Q as L,H as J,T as Pe,p as wt,q as ke,R as Je}from"./chart.js-CRyOYSxX.js";/*!
* chartjs-plugin-annotation v3.0.1
* https://www.chartjs.org/chartjs-plugin-annotation/index
 * (c) 2023 chartjs-plugin-annotation Contributors
 * Released under the MIT License
 */const ve={modes:{point(t,e){return K(t,e,{intersect:!0})},nearest(t,e,n){return St(t,e,n)},x(t,e,n){return K(t,e,{intersect:n.intersect,axis:"x"})},y(t,e,n){return K(t,e,{intersect:n.intersect,axis:"y"})}}};function be(t,e,n){return(ve.modes[n.mode]||ve.modes.nearest)(t,e,n)}function pt(t,e,n){return n!=="x"&&n!=="y"?t.inRange(e.x,e.y,"x",!0)||t.inRange(e.x,e.y,"y",!0):t.inRange(e.x,e.y,n,!0)}function xt(t,e,n){return n==="x"?{x:t.x,y:e.y}:n==="y"?{x:e.x,y:t.y}:e}function K(t,e,n){return t.visibleElements.filter(o=>n.intersect?o.inRange(e.x,e.y):pt(o,e,n.axis))}function St(t,e,n){let o=Number.POSITIVE_INFINITY;return K(t,e,n).reduce((r,i)=>{const s=i.getCenterPoint(),a=xt(e,s,n.axis),d=ye(e,a);return d<o?(r=[i],o=d):d===o&&r.push(i),r},[]).sort((r,i)=>r._index-i._index).slice(0,1)}const Ct=(t,e)=>e>t||t.length>e.length&&t.slice(0,e.length)===e,A=.001,Z=(t,e,n)=>Math.min(n,Math.max(e,t));function Mt(t,e,n){for(const o of Object.keys(t))t[o]=Z(t[o],e,n);return t}function Pt(t,e,n,o){if(!t||!e||n<=0)return!1;const r=o/2;return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n+r,2)}function Ue(t,{x:e,y:n,x2:o,y2:r},i,s){const a=s/2,d=t.x>=e-a-A&&t.x<=o+a+A,l=t.y>=n-a-A&&t.y<=r+a+A;return i==="x"?d:(i==="y"||d)&&l}function R(t,e){const{centerX:n,centerY:o}=t.getProps(["centerX","centerY"],e);return{x:n,y:o}}function kt(t,e,n,o=!0){const r=n.split(".");let i=0;for(const s of e.split(".")){const a=r[i++];if(parseInt(s,10)<parseInt(a,10))break;if(Ct(a,s)){if(o)throw new Error(`${t} v${n} is not supported. v${e} or newer is required.`);return!1}}return!0}const qe=t=>typeof t=="string"&&t.endsWith("%"),Ke=t=>parseFloat(t)/100,Qe=t=>Z(Ke(t),0,1),U=(t,e)=>({x:t,y:e,x2:t,y2:e,width:0,height:0}),vt={box:t=>U(t.centerX,t.centerY),ellipse:t=>({centerX:t.centerX,centerY:t.centerX,radius:0,width:0,height:0}),label:t=>U(t.centerX,t.centerY),line:t=>U(t.x,t.y),point:t=>({centerX:t.centerX,centerY:t.centerY,radius:0,width:0,height:0}),polygon:t=>U(t.centerX,t.centerY)};function ge(t,e){return e==="start"?0:e==="end"?t:qe(e)?Qe(e)*t:t/2}function M(t,e,n=!0){return typeof e=="number"?e:qe(e)?(n?Qe(e):Ke(e))*t:t}function At(t,e){const{x:n,width:o}=t,r=e.textAlign;return r==="center"?n+o/2:r==="end"||r==="right"?n+o:n}function me(t,e="center"){return B(t)?{x:_(t.x,e),y:_(t.y,e)}:(t=_(t,e),{x:t,y:t})}function Ge(t){return t&&(w(t.xValue)||w(t.yValue))}function H(t,e,n){const o=n.init;if(o){if(o===!0)return Ze(e,n)}else return;return Dt(t,e,n)}function Fe(t,e,n){let o=!1;return e.forEach(r=>{T(t[r])?(o=!0,n[r]=t[r]):w(n[r])&&delete n[r]}),o}function Ze(t,e){const n=e.type||"line";return vt[n](t)}function Dt(t,e,n){const o=he(n.init,[{chart:t,properties:e,options:n}]);if(o===!0)return Ze(e,n);if(B(o))return o}const ie=new Map,jt=t=>isNaN(t)||t<=0,It=t=>t.reduce(function(e,n){return e+=n.string,e},"");function ee(t){if(t&&typeof t=="object"){const e=t.toString();return e==="[object HTMLImageElement]"||e==="[object HTMLCanvasElement]"}}function we(t,{x:e,y:n},o){o&&(t.translate(e,n),t.rotate(p(o)),t.translate(-e,-n))}function P(t,e){if(e&&e.borderWidth)return t.lineCap=e.borderCapStyle,t.setLineDash(e.borderDash),t.lineDashOffset=e.borderDashOffset,t.lineJoin=e.borderJoinStyle,t.lineWidth=e.borderWidth,t.strokeStyle=e.borderColor,!0}function W(t,e){t.shadowColor=e.backgroundShadowColor,t.shadowBlur=e.shadowBlur,t.shadowOffsetX=e.shadowOffsetX,t.shadowOffsetY=e.shadowOffsetY}function pe(t,e){const n=e.content;if(ee(n))return{width:M(n.width,e.width),height:M(n.height,e.height)};const o=e.font,r=D(o)?o.map(d=>Q(d)):[Q(o)],i=e.textStrokeWidth,s=D(n)?n:[n],a=s.join()+It(r)+i+(t._measureText?"-spriting":"");return ie.has(a)||ie.set(a,Wt(t,s,r,i)),ie.get(a)}function et(t,e,n){const{x:o,y:r,width:i,height:s}=e;t.save(),W(t,n);const a=P(t,n);t.fillStyle=n.backgroundColor,t.beginPath(),gt(t,{x:o,y:r,w:i,h:s,radius:Mt(mt(n.borderRadius),0,Math.min(i,s)/2)}),t.closePath(),t.fill(),a&&(t.shadowColor=n.borderShadowColor,t.stroke()),t.restore()}function Tt(t,e,n){const o=n.content;if(ee(o)){t.save(),t.globalAlpha=Lt(n.opacity,o.style.opacity),t.drawImage(o,e.x,e.y,e.width,e.height),t.restore();return}const r=D(o)?o:[o],i=n.font,s=D(i)?i.map(u=>Q(u)):[Q(i)],a=n.color,d=D(a)?a:[a],l=At(e,n),c=e.y+n.textStrokeWidth/2;t.save(),t.textBaseline="middle",t.textAlign=n.textAlign,Ot(t,n)&&Yt(t,{x:l,y:c},r,s),Xt(t,{x:l,y:c},r,{fonts:s,colors:d}),t.restore()}function Ot(t,e){if(e.textStrokeWidth>0)return t.lineJoin="round",t.miterLimit=2,t.lineWidth=e.textStrokeWidth,t.strokeStyle=e.textStrokeColor,!0}function Et(t,e,n,o){const{radius:r,options:i}=e,s=i.pointStyle,a=i.rotation;let d=(a||0)*Je;if(ee(s)){t.save(),t.translate(n,o),t.rotate(d),t.drawImage(s,-s.width/2,-s.height/2,s.width,s.height),t.restore();return}jt(r)||Rt(t,{x:n,y:o,radius:r,rotation:a,style:s,rad:d})}function Rt(t,{x:e,y:n,radius:o,rotation:r,style:i,rad:s}){let a,d,l,c;switch(t.beginPath(),i){default:t.arc(e,n,o,0,wt),t.closePath();break;case"triangle":t.moveTo(e+Math.sin(s)*o,n-Math.cos(s)*o),s+=Pe,t.lineTo(e+Math.sin(s)*o,n-Math.cos(s)*o),s+=Pe,t.lineTo(e+Math.sin(s)*o,n-Math.cos(s)*o),t.closePath();break;case"rectRounded":c=o*.516,l=o-c,a=Math.cos(s+L)*l,d=Math.sin(s+L)*l,t.arc(e-a,n-d,c,s-b,s-J),t.arc(e+d,n-a,c,s-J,s),t.arc(e+a,n+d,c,s,s+J),t.arc(e-d,n+a,c,s+J,s+b),t.closePath();break;case"rect":if(!r){l=Math.SQRT1_2*o,t.rect(e-l,n-l,2*l,2*l);break}s+=L;case"rectRot":a=Math.cos(s)*o,d=Math.sin(s)*o,t.moveTo(e-a,n-d),t.lineTo(e+d,n-a),t.lineTo(e+a,n+d),t.lineTo(e-d,n+a),t.closePath();break;case"crossRot":s+=L;case"cross":a=Math.cos(s)*o,d=Math.sin(s)*o,t.moveTo(e-a,n-d),t.lineTo(e+a,n+d),t.moveTo(e+d,n-a),t.lineTo(e-d,n+a);break;case"star":a=Math.cos(s)*o,d=Math.sin(s)*o,t.moveTo(e-a,n-d),t.lineTo(e+a,n+d),t.moveTo(e+d,n-a),t.lineTo(e-d,n+a),s+=L,a=Math.cos(s)*o,d=Math.sin(s)*o,t.moveTo(e-a,n-d),t.lineTo(e+a,n+d),t.moveTo(e+d,n-a),t.lineTo(e-d,n+a);break;case"line":a=Math.cos(s)*o,d=Math.sin(s)*o,t.moveTo(e-a,n-d),t.lineTo(e+a,n+d);break;case"dash":t.moveTo(e,n),t.lineTo(e+Math.cos(s)*o,n+Math.sin(s)*o);break}t.fill()}function Wt(t,e,n,o){t.save();const r=e.length;let i=0,s=o;for(let a=0;a<r;a++){const d=n[Math.min(a,n.length-1)];t.font=d.string;const l=e[a];i=Math.max(i,t.measureText(l).width+o),s+=d.lineHeight}return t.restore(),{width:i,height:s}}function Yt(t,{x:e,y:n},o,r){t.beginPath();let i=0;o.forEach(function(s,a){const d=r[Math.min(a,r.length-1)],l=d.lineHeight;t.font=d.string,t.strokeText(s,e,n+l/2+i),i+=l}),t.stroke()}function Xt(t,{x:e,y:n},o,{fonts:r,colors:i}){let s=0;o.forEach(function(a,d){const l=i[Math.min(d,i.length-1)],c=r[Math.min(d,r.length-1)],u=c.lineHeight;t.beginPath(),t.font=c.string,t.fillStyle=l,t.fillText(a,e,n+u/2+s),s+=u,t.fill()})}function Lt(t,e){const n=ke(t)?t:e;return ke(n)?Z(n,0,1):1}const Ae={xScaleID:{min:"xMin",max:"xMax",start:"left",end:"right",startProp:"x",endProp:"x2"},yScaleID:{min:"yMin",max:"yMax",start:"bottom",end:"top",startProp:"y",endProp:"y2"}};function O(t,e,n){return e=typeof e=="number"?e:t.parse(e),$e(e)?t.getPixelForValue(e):n}function j(t,e,n){const o=e[n];if(o||n==="scaleID")return o;const r=n.charAt(0),i=Object.values(t).filter(s=>s.axis&&s.axis===r);return i.length?i[0].id:r}function tt(t,e){if(t){const n=t.options.reverse,o=O(t,e.min,n?e.end:e.start),r=O(t,e.max,n?e.start:e.end);return{start:o,end:r}}}function nt(t,e){const{chartArea:n,scales:o}=t,r=o[j(o,e,"xScaleID")],i=o[j(o,e,"yScaleID")];let s=n.width/2,a=n.height/2;return r&&(s=O(r,e.xValue,r.left+r.width/2)),i&&(a=O(i,e.yValue,i.top+i.height/2)),{x:s,y:a}}function xe(t,e){const n=t.scales,o=n[j(n,e,"xScaleID")],r=n[j(n,e,"yScaleID")];if(!o&&!r)return{};let{left:i,right:s}=o||t.chartArea,{top:a,bottom:d}=r||t.chartArea;const l=De(o,{min:e.xMin,max:e.xMax,start:i,end:s});i=l.start,s=l.end;const c=De(r,{min:e.yMin,max:e.yMax,start:d,end:a});return a=c.start,d=c.end,{x:i,y:a,x2:s,y2:d,width:s-i,height:d-a,centerX:i+(s-i)/2,centerY:a+(d-a)/2}}function ot(t,e){if(!Ge(e)){const n=xe(t,e);let o=e.radius;(!o||isNaN(o))&&(o=Math.min(n.width,n.height)/2,e.radius=o);const r=o*2,i=n.centerX+e.xAdjust,s=n.centerY+e.yAdjust;return{x:i-o,y:s-o,x2:i+o,y2:s+o,centerX:i,centerY:s,width:r,height:r,radius:o}}return _t(t,e)}function zt(t,e){const{scales:n,chartArea:o}=t,r=n[e.scaleID],i={x:o.left,y:o.top,x2:o.right,y2:o.bottom};return r?Bt(r,i,e):Ht(n,i,e),i}function rt(t,e){const n=xe(t,e);return n.initProperties=H(t,n,e),n.elements=[{type:"label",optionScope:"label",properties:$t(t,n,e),initProperties:n.initProperties}],n}function _t(t,e){const n=nt(t,e),o=e.radius*2;return{x:n.x-e.radius+e.xAdjust,y:n.y-e.radius+e.yAdjust,x2:n.x+e.radius+e.xAdjust,y2:n.y+e.radius+e.yAdjust,centerX:n.x+e.xAdjust,centerY:n.y+e.yAdjust,radius:e.radius,width:o,height:o}}function De(t,e){const n=tt(t,e)||e;return{start:Math.min(n.start,n.end),end:Math.max(n.start,n.end)}}function Bt(t,e,n){const o=O(t,n.value,NaN),r=O(t,n.endValue,o);t.isHorizontal()?(e.x=o,e.x2=r):(e.y=o,e.y2=r)}function Ht(t,e,n){for(const o of Object.keys(Ae)){const r=t[j(t,n,o)];if(r){const{min:i,max:s,start:a,end:d,startProp:l,endProp:c}=Ae[o],u=tt(r,{min:n[i],max:n[s],start:r[a],end:r[d]});e[l]=u.start,e[c]=u.end}}}function Nt({properties:t,options:e},n,o,r){const{x:i,x2:s,width:a}=t;return it({start:i,end:s,size:a,borderWidth:e.borderWidth},{position:o.x,padding:{start:r.left,end:r.right},adjust:e.label.xAdjust,size:n.width})}function Vt({properties:t,options:e},n,o,r){const{y:i,y2:s,height:a}=t;return it({start:i,end:s,size:a,borderWidth:e.borderWidth},{position:o.y,padding:{start:r.top,end:r.bottom},adjust:e.label.yAdjust,size:n.height})}function it(t,e){const{start:n,end:o,borderWidth:r}=t,{position:i,padding:{start:s,end:a},adjust:d}=e,l=o-r-n-s-a-e.size;return n+r/2+d+ge(l,i)}function $t(t,e,n){const o=n.label;o.backgroundColor="transparent",o.callout.display=!1;const r=me(o.position),i=F(o.padding),s=pe(t.ctx,o),a=Nt({properties:e,options:n},s,r,i),d=Vt({properties:e,options:n},s,r,i),l=s.width+i.width,c=s.height+i.height;return{x:a,y:d,x2:a+l,y2:d+c,width:l,height:c,centerX:a+l/2,centerY:d+c/2,rotation:o.rotation}}function I(t,e,n){const o=Math.cos(n),r=Math.sin(n),i=e.x,s=e.y;return{x:i+o*(t.x-i)-r*(t.y-s),y:s+r*(t.x-i)+o*(t.y-s)}}const se=["enter","leave"],Se=se.concat("click");function Jt(t,e,n){e.listened=Fe(n,Se,e.listeners),e.moveListened=!1,e._getElements=be,se.forEach(o=>{T(n[o])&&(e.moveListened=!0)}),(!e.listened||!e.moveListened)&&e.annotations.forEach(o=>{!e.listened&&T(o.click)&&(e.listened=!0),e.moveListened||se.forEach(r=>{T(o[r])&&(e.listened=!0,e.moveListened=!0)})})}function Ut(t,e,n){if(t.listened)switch(e.type){case"mousemove":case"mouseout":return qt(t,e,n);case"click":return Kt(t,e,n)}}function qt(t,e,n){if(!t.moveListened)return;let o;e.type==="mousemove"?o=be(t,e,n.interaction):o=[];const r=t.hovered;t.hovered=o;const i={state:t,event:e};let s=je(i,"leave",r,o);return je(i,"enter",o,r)||s}function je({state:t,event:e},n,o,r){let i;for(const s of o)r.indexOf(s)<0&&(i=st(s.options[n]||t.listeners[n],s,e)||i);return i}function Kt(t,e,n){const o=t.listeners,r=be(t,e,n.interaction);let i;for(const s of r)i=st(s.options.click||o.click,s,e)||i;return i}function st(t,e,n){return he(t,[e.$context,n])===!0}const G=["afterDraw","beforeDraw"];function Qt(t,e,n){const o=e.visibleElements;e.hooked=Fe(n,G,e.hooks),e.hooked||o.forEach(r=>{e.hooked||G.forEach(i=>{T(r.options[i])&&(e.hooked=!0)})})}function Ie(t,e,n){if(t.hooked){const o=e.options[n]||t.hooks[n];return he(o,[e.$context])}}function Gt(t,e,n){const o=nn(t.scales,e,n);let r=Te(e,o,"min","suggestedMin");r=Te(e,o,"max","suggestedMax")||r,r&&T(e.handleTickRangeOptions)&&e.handleTickRangeOptions()}function Ft(t,e){for(const n of t)en(n,e)}function Te(t,e,n,o){if($e(e[n])&&!Zt(t.options,n,o)){const r=t[n]!==e[n];return t[n]=e[n],r}}function Zt(t,e,n){return w(t[e])||w(t[n])}function en(t,e){for(const n of["scaleID","xScaleID","yScaleID"]){const o=j(e,t,n);o&&!e[o]&&tn(t,n)&&console.warn(`No scale found with id '${o}' for annotation '${t.id}'`)}}function tn(t,e){if(e==="scaleID")return!0;const n=e.charAt(0);for(const o of["Min","Max","Value"])if(w(t[n+o]))return!0;return!1}function nn(t,e,n){const o=e.axis,r=e.id,i=o+"ScaleID",s={min:_(e.min,Number.NEGATIVE_INFINITY),max:_(e.max,Number.POSITIVE_INFINITY)};for(const a of n)a.scaleID===r?Oe(a,e,["value","endValue"],s):j(t,a,i)===r&&Oe(a,e,[o+"Min",o+"Max",o+"Value"],s);return s}function Oe(t,e,n,o){for(const r of n){const i=t[r];if(w(i)){const s=e.parse(i);o.min=Math.min(o.min,s),o.max=Math.max(o.max,s)}}}class Y extends E{inRange(e,n,o,r){const{x:i,y:s}=I({x:e,y:n},this.getCenterPoint(r),p(-this.options.rotation));return Ue({x:i,y:s},this.getProps(["x","y","x2","y2"],r),o,this.options.borderWidth)}getCenterPoint(e){return R(this,e)}draw(e){e.save(),we(e,this.getCenterPoint(),this.options.rotation),et(e,this,this.options),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,n){return rt(e,n)}}Y.id="boxAnnotation";Y.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,label:{backgroundColor:"transparent",borderWidth:0,callout:{display:!1},color:"black",content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,opacity:void 0,padding:6,position:"center",rotation:void 0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0};Y.defaultRoutes={borderColor:"color",backgroundColor:"color"};Y.descriptors={label:{_fallback:!0}};const at=["left","bottom","top","right"];class N extends E{inRange(e,n,o,r){const{x:i,y:s}=I({x:e,y:n},this.getCenterPoint(r),p(-this.rotation));return Ue({x:i,y:s},this.getProps(["x","y","x2","y2"],r),o,this.options.borderWidth)}getCenterPoint(e){return R(this,e)}draw(e){const n=this.options,o=!w(this._visible)||this._visible;!n.display||!n.content||!o||(e.save(),we(e,this.getCenterPoint(),this.rotation),rn(e,this),et(e,this,n),Tt(e,fn(this),n),e.restore())}resolveElementProperties(e,n){let o;if(Ge(n))o=nt(e,n);else{const{centerX:a,centerY:d}=xe(e,n);o={x:a,y:d}}const r=F(n.padding),i=pe(e.ctx,n),s=on(o,i,n,r);return{initProperties:H(e,s,n),pointX:o.x,pointY:o.y,...s,rotation:n.rotation}}}N.id="labelAnnotation";N.defaults={adjustScaleRange:!0,backgroundColor:"transparent",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:0,borderShadowColor:"transparent",borderWidth:0,callout:{borderCapStyle:"butt",borderColor:void 0,borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:1,display:!1,margin:5,position:"auto",side:5,start:"50%"},color:"black",content:null,display:!0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:void 0},height:void 0,init:void 0,opacity:void 0,padding:6,position:"center",rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0};N.defaultRoutes={borderColor:"color"};function on(t,e,n,o){const r=e.width+o.width+n.borderWidth,i=e.height+o.height+n.borderWidth,s=me(n.position,"center"),a=Ee(t.x,r,n.xAdjust,s.x),d=Ee(t.y,i,n.yAdjust,s.y);return{x:a,y:d,x2:a+r,y2:d+i,width:r,height:i,centerX:a+r/2,centerY:d+i/2}}function Ee(t,e,n=0,o){return t-ge(e,o)+n}function rn(t,e){const{pointX:n,pointY:o,options:r}=e,i=r.callout,s=i&&i.display&&cn(e,i);if(!s||hn(e,i,s))return;if(t.save(),t.beginPath(),!P(t,i))return t.restore();const{separatorStart:d,separatorEnd:l}=sn(e,s),{sideStart:c,sideEnd:u}=dn(e,s,d);(i.margin>0||r.borderWidth===0)&&(t.moveTo(d.x,d.y),t.lineTo(l.x,l.y)),t.moveTo(c.x,c.y),t.lineTo(u.x,u.y);const f=I({x:n,y:o},e.getCenterPoint(),p(-e.rotation));t.lineTo(f.x,f.y),t.stroke(),t.restore()}function sn(t,e){const{x:n,y:o,x2:r,y2:i}=t,s=an(t,e);let a,d;return e==="left"||e==="right"?(a={x:n+s,y:o},d={x:a.x,y:i}):(a={x:n,y:o+s},d={x:r,y:a.y}),{separatorStart:a,separatorEnd:d}}function an(t,e){const{width:n,height:o,options:r}=t,i=r.callout.margin+r.borderWidth/2;return e==="right"?n+i:e==="bottom"?o+i:-i}function dn(t,e,n){const{y:o,width:r,height:i,options:s}=t,a=s.callout.start,d=ln(e,s.callout);let l,c;return e==="left"||e==="right"?(l={x:n.x,y:o+M(i,a)},c={x:l.x+d,y:l.y}):(l={x:n.x+M(r,a),y:n.y},c={x:l.x,y:l.y+d}),{sideStart:l,sideEnd:c}}function ln(t,e){const n=e.side;return t==="left"||t==="top"?-n:n}function cn(t,e){const n=e.position;return at.includes(n)?n:un(t,e)}function un(t,e){const{x:n,y:o,x2:r,y2:i,width:s,height:a,pointX:d,pointY:l,centerX:c,centerY:u,rotation:f}=t,h={x:c,y:u},y=e.start,x=M(s,y),X=M(a,y),g=[n,n+x,n+x,r],m=[o+X,i,o,i],k=[];for(let v=0;v<4;v++){const oe=I({x:g[v],y:m[v]},h,p(f));k.push({position:at[v],distance:ye(oe,{x:d,y:l})})}return k.sort((v,oe)=>v.distance-oe.distance)[0].position}function fn({x:t,y:e,width:n,height:o,options:r}){const i=r.borderWidth/2,s=F(r.padding);return{x:t+s.left+i,y:e+s.top+i,width:n-s.left-s.right-r.borderWidth,height:o-s.top-s.bottom-r.borderWidth}}function hn(t,e,n){const{pointX:o,pointY:r}=t,i=e.margin;let s=o,a=r;return n==="left"?s+=i:n==="right"?s-=i:n==="top"?a+=i:n==="bottom"&&(a-=i),t.inRange(s,a)}const Ce=(t,e,n)=>({x:t.x+n*(e.x-t.x),y:t.y+n*(e.y-t.y)}),ae=(t,e,n)=>Ce(e,n,Math.abs((t-e.y)/(n.y-e.y))).x,Re=(t,e,n)=>Ce(e,n,Math.abs((t-e.x)/(n.x-e.x))).y,z=t=>t*t,yn=(t,e,{x:n,y:o,x2:r,y2:i},s)=>s==="y"?{start:Math.min(o,i),end:Math.max(o,i),value:e}:{start:Math.min(n,r),end:Math.max(n,r),value:t},We=(t,e,n,o)=>(1-o)*(1-o)*t+2*(1-o)*o*e+o*o*n,de=(t,e,n,o)=>({x:We(t.x,e.x,n.x,o),y:We(t.y,e.y,n.y,o)}),Ye=(t,e,n,o)=>2*(1-o)*(e-t)+2*o*(n-e),Xe=(t,e,n,o)=>-Math.atan2(Ye(t.x,e.x,n.x,o),Ye(t.y,e.y,n.y,o))+.5*b;class V extends E{inRange(e,n,o,r){const i=this.options.borderWidth/2;if(o!=="x"&&o!=="y"){const s={mouseX:e,mouseY:n},{path:a,ctx:d}=this;if(a){P(d,this.options);const{chart:c}=this.$context,u=e*c.currentDevicePixelRatio,f=n*c.currentDevicePixelRatio,h=d.isPointInStroke(a,u,f)||le(this,s,r);return d.restore(),h}const l=z(i);return wn(this,s,l,r)||le(this,s,r)}return bn(this,{mouseX:e,mouseY:n},o,{hBorderWidth:i,useFinalPosition:r})}getCenterPoint(e){return R(this,e)}draw(e){const{x:n,y:o,x2:r,y2:i,cp:s,options:a}=this;if(e.save(),!P(e,a))return e.restore();W(e,a);const d=Math.sqrt(Math.pow(r-n,2)+Math.pow(i-o,2));if(a.curve&&s)return vn(e,this,s,d),e.restore();const{startOpts:l,endOpts:c,startAdjust:u,endAdjust:f}=dt(this),h=Math.atan2(i-o,r-n);e.translate(n,o),e.rotate(h),e.beginPath(),e.moveTo(0+u,0),e.lineTo(d-f,0),e.shadowColor=a.borderShadowColor,e.stroke(),ce(e,0,u,l),ce(e,d,-f,c),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,n){const o=zt(e,n),{x:r,y:i,x2:s,y2:a}=o,d=gn(o,e.chartArea),l=d?mn({x:r,y:i},{x:s,y:a},e.chartArea):{x:r,y:i,x2:s,y2:a,width:Math.abs(s-r),height:Math.abs(a-i)};if(l.centerX=(s+r)/2,l.centerY=(a+i)/2,l.initProperties=H(e,l,n),n.curve){const u={x:l.x,y:l.y},f={x:l.x2,y:l.y2};l.cp=kn(l,n,ye(u,f))}const c=pn(e,l,n.label);return c._visible=d,l.elements=[{type:"label",optionScope:"label",properties:c,initProperties:l.initProperties}],l}}V.id="lineAnnotation";const Le={backgroundColor:void 0,backgroundShadowColor:void 0,borderColor:void 0,borderDash:void 0,borderDashOffset:void 0,borderShadowColor:void 0,borderWidth:void 0,display:void 0,fill:void 0,length:void 0,shadowBlur:void 0,shadowOffsetX:void 0,shadowOffsetY:void 0,width:void 0};V.defaults={adjustScaleRange:!0,arrowHeads:{display:!1,end:Object.assign({},Le),fill:!1,length:12,start:Object.assign({},Le),width:6},borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:2,curve:!1,controlPoint:{y:"-50%"},display:!0,endValue:void 0,init:void 0,label:{backgroundColor:"rgba(0,0,0,0.8)",backgroundShadowColor:"transparent",borderCapStyle:"butt",borderColor:"black",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderRadius:6,borderShadowColor:"transparent",borderWidth:0,callout:Object.assign({},N.defaults.callout),color:"#fff",content:null,display:!1,drawTime:void 0,font:{family:void 0,lineHeight:void 0,size:void 0,style:void 0,weight:"bold"},height:void 0,opacity:void 0,padding:6,position:"center",rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,textAlign:"center",textStrokeColor:void 0,textStrokeWidth:0,width:void 0,xAdjust:0,yAdjust:0,z:void 0},scaleID:void 0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,value:void 0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0};V.descriptors={arrowHeads:{start:{_fallback:!0},end:{_fallback:!0},_fallback:!0}};V.defaultRoutes={borderColor:"color"};function bn(t,{mouseX:e,mouseY:n},o,{hBorderWidth:r,useFinalPosition:i}){const s=yn(e,n,t.getProps(["x","y","x2","y2"],i),o);return s.value>=s.start-r&&s.value<=s.end+r||le(t,{mouseX:e,mouseY:n},i,o)}function gn({x:t,y:e,x2:n,y2:o},{top:r,right:i,bottom:s,left:a}){return!(t<a&&n<a||t>i&&n>i||e<r&&o<r||e>s&&o>s)}function ze({x:t,y:e},n,{top:o,right:r,bottom:i,left:s}){return t<s&&(e=Re(s,{x:t,y:e},n),t=s),t>r&&(e=Re(r,{x:t,y:e},n),t=r),e<o&&(t=ae(o,{x:t,y:e},n),e=o),e>i&&(t=ae(i,{x:t,y:e},n),e=i),{x:t,y:e}}function mn(t,e,n){const{x:o,y:r}=ze(t,e,n),{x:i,y:s}=ze(e,t,n);return{x:o,y:r,x2:i,y2:s,width:Math.abs(i-o),height:Math.abs(s-r)}}function wn(t,{mouseX:e,mouseY:n},o=A,r){const{x:i,y:s,x2:a,y2:d}=t.getProps(["x","y","x2","y2"],r),l=a-i,c=d-s,u=z(l)+z(c),f=u===0?-1:((e-i)*l+(n-s)*c)/u;let h,y;return f<0?(h=i,y=s):f>1?(h=a,y=d):(h=i+f*l,y=s+f*c),z(e-h)+z(n-y)<=o}function le(t,{mouseX:e,mouseY:n},o,r){const i=t.label;return i.options.display&&i.inRange(e,n,r,o)}function pn(t,e,n){const o=n.borderWidth,r=F(n.padding),i=pe(t.ctx,n),s=i.width+r.width+o,a=i.height+r.height+o;return Sn(e,n,{width:s,height:a,padding:r},t.chartArea)}function xn(t){const{x:e,y:n,x2:o,y2:r}=t,i=Math.atan2(r-n,o-e);return i>b/2?i-b:i<b/-2?i+b:i}function Sn(t,e,n,o){const{width:r,height:i,padding:s}=n,{xAdjust:a,yAdjust:d}=e,l={x:t.x,y:t.y},c={x:t.x2,y:t.y2},u=e.rotation==="auto"?xn(t):p(e.rotation),f=Cn(r,i,u),h=Mn(t,e,{labelSize:f,padding:s},o),y=t.cp?de(l,t.cp,c,h):Ce(l,c,h),x={size:f.w,min:o.left,max:o.right,padding:s.left},X={size:f.h,min:o.top,max:o.bottom,padding:s.top},g=Be(y.x,x)+a,m=Be(y.y,X)+d;return{x:g-r/2,y:m-i/2,x2:g+r/2,y2:m+i/2,centerX:g,centerY:m,pointX:y.x,pointY:y.y,width:r,height:i,rotation:yt(u)}}function Cn(t,e,n){const o=Math.cos(n),r=Math.sin(n);return{w:Math.abs(t*o)+Math.abs(e*r),h:Math.abs(t*r)+Math.abs(e*o)}}function Mn(t,e,n,o){let r;const i=Pn(t,o);return e.position==="start"?r=_e({w:t.x2-t.x,h:t.y2-t.y},n,e,i):e.position==="end"?r=1-_e({w:t.x-t.x2,h:t.y-t.y2},n,e,i):r=ge(1,e.position),r}function _e(t,e,n,o){const{labelSize:r,padding:i}=e,s=t.w*o.dx,a=t.h*o.dy,d=s>0&&(r.w/2+i.left-o.x)/s,l=a>0&&(r.h/2+i.top-o.y)/a;return Z(Math.max(d,l),0,.25)}function Pn(t,e){const{x:n,x2:o,y:r,y2:i}=t,s=Math.min(r,i)-e.top,a=Math.min(n,o)-e.left,d=e.bottom-Math.max(r,i),l=e.right-Math.max(n,o);return{x:Math.min(a,l),y:Math.min(s,d),dx:a<=l?1:-1,dy:s<=d?1:-1}}function Be(t,e){const{size:n,min:o,max:r,padding:i}=e,s=n/2;return n>r-o?(r+o)/2:(o>=t-i-s&&(t=o+i+s),r<=t+i+s&&(t=r-i-s),t)}function dt(t){const e=t.options,n=e.arrowHeads&&e.arrowHeads.start,o=e.arrowHeads&&e.arrowHeads.end;return{startOpts:n,endOpts:o,startAdjust:He(t,n),endAdjust:He(t,o)}}function He(t,e){if(!e||!e.display)return 0;const{length:n,width:o}=e,r=t.options.borderWidth/2,i={x:n,y:o+r};return Math.abs(ae(0,i,{x:0,y:r}))}function ce(t,e,n,o){if(!o||!o.display)return;const{length:r,width:i,fill:s,backgroundColor:a,borderColor:d}=o,l=Math.abs(e-r)+n;t.beginPath(),W(t,o),P(t,o),t.moveTo(l,-i),t.lineTo(e+n,0),t.lineTo(l,i),s===!0?(t.fillStyle=a||d,t.closePath(),t.fill(),t.shadowColor="transparent"):t.shadowColor=o.borderShadowColor,t.stroke()}function kn(t,e,n){const{x:o,y:r,x2:i,y2:s,centerX:a,centerY:d}=t,l=Math.atan2(s-r,i-o),c=me(e.controlPoint,0),u={x:a+M(n,c.x,!1),y:d+M(n,c.y,!1)};return I(u,{x:a,y:d},l)}function Ne(t,{x:e,y:n},{angle:o,adjust:r},i){!i||!i.display||(t.save(),t.translate(e,n),t.rotate(o),ce(t,0,-r,i),t.restore())}function vn(t,e,n,o){const{x:r,y:i,x2:s,y2:a,options:d}=e,{startOpts:l,endOpts:c,startAdjust:u,endAdjust:f}=dt(e),h={x:r,y:i},y={x:s,y:a},x=Xe(h,n,y,0),X=Xe(h,n,y,1)-b,g=de(h,n,y,u/o),m=de(h,n,y,1-f/o),k=new Path2D;t.beginPath(),k.moveTo(g.x,g.y),k.quadraticCurveTo(n.x,n.y,m.x,m.y),t.shadowColor=d.borderShadowColor,t.stroke(k),e.path=k,e.ctx=t,Ne(t,g,{angle:x,adjust:u},l),Ne(t,m,{angle:X,adjust:f},c)}class $ extends E{inRange(e,n,o,r){const i=this.options.rotation,s=this.options.borderWidth;if(o!=="x"&&o!=="y")return An({x:e,y:n},this.getProps(["width","height","centerX","centerY"],r),i,s);const{x:a,y:d,x2:l,y2:c}=this.getProps(["x","y","x2","y2"],r),u=s/2,f=o==="y"?{start:d,end:c}:{start:a,end:l},h=I({x:e,y:n},this.getCenterPoint(r),p(-i));return h[o]>=f.start-u-A&&h[o]<=f.end+u+A}getCenterPoint(e){return R(this,e)}draw(e){const{width:n,height:o,centerX:r,centerY:i,options:s}=this;e.save(),we(e,this.getCenterPoint(),s.rotation),W(e,this.options),e.beginPath(),e.fillStyle=s.backgroundColor;const a=P(e,s);e.ellipse(r,i,o/2,n/2,b/2,0,2*b),e.fill(),a&&(e.shadowColor=s.borderShadowColor,e.stroke()),e.restore()}get label(){return this.elements&&this.elements[0]}resolveElementProperties(e,n){return rt(e,n)}}$.id="ellipseAnnotation";$.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,label:Object.assign({},Y.defaults.label),rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xMax:void 0,xMin:void 0,xScaleID:void 0,yMax:void 0,yMin:void 0,yScaleID:void 0,z:0};$.defaultRoutes={borderColor:"color",backgroundColor:"color"};$.descriptors={label:{_fallback:!0}};function An(t,e,n,o){const{width:r,height:i,centerX:s,centerY:a}=e,d=r/2,l=i/2;if(d<=0||l<=0)return!1;const c=p(n||0),u=o/2||0,f=Math.cos(c),h=Math.sin(c),y=Math.pow(f*(t.x-s)+h*(t.y-a),2),x=Math.pow(h*(t.x-s)-f*(t.y-a),2);return y/Math.pow(d+u,2)+x/Math.pow(l+u,2)<=1.0001}class te extends E{inRange(e,n,o,r){const{x:i,y:s,x2:a,y2:d,width:l}=this.getProps(["x","y","x2","y2","width"],r),c=this.options.borderWidth;if(o!=="x"&&o!=="y")return Pt({x:e,y:n},this.getCenterPoint(r),l/2,c);const u=c/2,f=o==="y"?{start:s,end:d,value:n}:{start:i,end:a,value:e};return f.value>=f.start-u&&f.value<=f.end+u}getCenterPoint(e){return R(this,e)}draw(e){const n=this.options,o=n.borderWidth;if(n.radius<.1)return;e.save(),e.fillStyle=n.backgroundColor,W(e,n);const r=P(e,n);Et(e,this,this.centerX,this.centerY),r&&!ee(n.pointStyle)&&(e.shadowColor=n.borderShadowColor,e.stroke()),e.restore(),n.borderWidth=o}resolveElementProperties(e,n){const o=ot(e,n);return o.initProperties=H(e,o,n),o}}te.id="pointAnnotation";te.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderDash:[],borderDashOffset:0,borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,pointStyle:"circle",radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0};te.defaultRoutes={borderColor:"color",backgroundColor:"color"};class ne extends E{inRange(e,n,o,r){if(o!=="x"&&o!=="y")return this.options.radius>=.1&&this.elements.length>1&&jn(this.elements,e,n,r);const i=I({x:e,y:n},this.getCenterPoint(r),p(-this.options.rotation)),s=this.elements.map(l=>o==="y"?l.bY:l.bX),a=Math.min(...s),d=Math.max(...s);return i[o]>=a&&i[o]<=d}getCenterPoint(e){return R(this,e)}draw(e){const{elements:n,options:o}=this;e.save(),e.beginPath(),e.fillStyle=o.backgroundColor,W(e,o);const r=P(e,o);let i=!0;for(const s of n)i?(e.moveTo(s.x,s.y),i=!1):e.lineTo(s.x,s.y);e.closePath(),e.fill(),r&&(e.shadowColor=o.borderShadowColor,e.stroke()),e.restore()}resolveElementProperties(e,n){const o=ot(e,n),{sides:r,rotation:i}=n,s=[],a=2*b/r;let d=i*Je;for(let l=0;l<r;l++,d+=a){const c=Dn(o,n,d);c.initProperties=H(e,o,n),s.push(c)}return o.elements=s,o}}ne.id="polygonAnnotation";ne.defaults={adjustScaleRange:!0,backgroundShadowColor:"transparent",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderShadowColor:"transparent",borderWidth:1,display:!0,init:void 0,point:{radius:0},radius:10,rotation:0,shadowBlur:0,shadowOffsetX:0,shadowOffsetY:0,sides:3,xAdjust:0,xMax:void 0,xMin:void 0,xScaleID:void 0,xValue:void 0,yAdjust:0,yMax:void 0,yMin:void 0,yScaleID:void 0,yValue:void 0,z:0};ne.defaultRoutes={borderColor:"color",backgroundColor:"color"};function Dn({centerX:t,centerY:e},{radius:n,borderWidth:o},r){const i=o/2,s=Math.sin(r),a=Math.cos(r),d={x:t+s*n,y:e-a*n};return{type:"point",optionScope:"point",properties:{x:d.x,y:d.y,centerX:d.x,centerY:d.y,bX:t+s*(n+i),bY:e-a*(n+i)}}}function jn(t,e,n,o){let r=!1,i=t[t.length-1].getProps(["bX","bY"],o);for(const s of t){const a=s.getProps(["bX","bY"],o);a.bY>n!=i.bY>n&&e<(i.bX-a.bX)*(n-a.bY)/(i.bY-a.bY)+a.bX&&(r=!r),i=a}return r}const C={box:Y,ellipse:$,label:N,line:V,point:te,polygon:ne};Object.keys(C).forEach(t=>{ut.describe(`elements.${C[t].id}`,{_fallback:"plugins.annotation.common"})});const In={update:Object.assign},Tn=Se.concat(G),Ve=(t,e)=>B(e)?fe(t,e):t,ue=t=>t==="color"||t==="font";function Me(t="line"){return C[t]?t:(console.warn(`Unknown annotation type: '${t}', defaulting to 'line'`),"line")}function On(t,e,n,o){const r=Rn(t,n.animations,o),i=e.annotations,s=Xn(e.elements,i);for(let a=0;a<i.length;a++){const d=i[a],l=lt(s,a,d.type),c=d.setContext(Yn(t,l,d)),u=l.resolveElementProperties(t,c);u.skip=En(u),"elements"in u&&(Wn(l,u.elements,c,r),delete u.elements),w(l.x)||Object.assign(l,u),Object.assign(l,u.initProperties),u.options=ct(c),r.update(l,u)}}function En(t){return isNaN(t.x)||isNaN(t.y)}function Rn(t,e,n){return n==="reset"||n==="none"||n==="resize"?In:new bt(t,e)}function Wn(t,e,n,o){const r=t.elements||(t.elements=[]);r.length=e.length;for(let i=0;i<e.length;i++){const s=e[i],a=s.properties,d=lt(r,i,s.type,s.initProperties),l=n[s.optionScope].override(s);a.options=ct(l),o.update(d,a)}}function lt(t,e,n,o){const r=C[Me(n)];let i=t[e];return(!i||!(i instanceof r))&&(i=t[e]=new r,Object.assign(i,o)),i}function ct(t){const e=C[Me(t.type)],n={};n.id=t.id,n.type=t.type,n.drawTime=t.drawTime,Object.assign(n,fe(t,e.defaults),fe(t,e.defaultRoutes));for(const o of Tn)n[o]=t[o];return n}function fe(t,e){const n={};for(const o of Object.keys(e)){const r=e[o],i=t[o];ue(o)&&D(i)?n[o]=i.map(s=>Ve(s,r)):n[o]=Ve(i,r)}return n}function Yn(t,e,n){return e.$context||(e.$context=Object.assign(Object.create(t.getContext()),{element:e,id:n.id,type:"annotation"}))}function Xn(t,e){const n=e.length,o=t.length;if(o<n){const r=n-o;t.splice(o,0,...new Array(r))}else o>n&&t.splice(n,o-n);return t}var Ln="3.0.1";const S=new Map,zn=Se.concat(G);var Nn={id:"annotation",version:Ln,beforeRegister(){kt("chart.js","4.0",re.version)},afterRegister(){re.register(C)},afterUnregister(){re.unregister(C)},beforeInit(t){S.set(t,{annotations:[],elements:[],visibleElements:[],listeners:{},listened:!1,moveListened:!1,hooks:{},hooked:!1,hovered:[]})},beforeUpdate(t,e,n){const o=S.get(t),r=o.annotations=[];let i=n.annotations;B(i)?Object.keys(i).forEach(s=>{const a=i[s];B(a)&&(a.id=s,r.push(a))}):D(i)&&r.push(...i),Ft(r,t.scales)},afterDataLimits(t,e){const n=S.get(t);Gt(t,e.scale,n.annotations.filter(o=>o.display&&o.adjustScaleRange))},afterUpdate(t,e,n){const o=S.get(t);Jt(t,o,n),On(t,o,n,e.mode),o.visibleElements=o.elements.filter(r=>!r.skip&&r.options.display),Qt(t,o,n)},beforeDatasetsDraw(t,e,n){q(t,"beforeDatasetsDraw",n.clip)},afterDatasetsDraw(t,e,n){q(t,"afterDatasetsDraw",n.clip)},beforeDraw(t,e,n){q(t,"beforeDraw",n.clip)},afterDraw(t,e,n){q(t,"afterDraw",n.clip)},beforeEvent(t,e,n){const o=S.get(t);Ut(o,e.event,n)&&(e.changed=!0)},afterDestroy(t){S.delete(t)},_getState(t){return S.get(t)},defaults:{animations:{numbers:{properties:["x","y","x2","y2","width","height","centerX","centerY","pointX","pointY","radius"],type:"number"}},clip:!0,interaction:{mode:void 0,axis:void 0,intersect:void 0},common:{drawTime:"afterDatasetsDraw",init:!1,label:{}}},descriptors:{_indexable:!1,_scriptable:t=>!zn.includes(t)&&t!=="init",annotations:{_allKeys:!1,_fallback:(t,e)=>`elements.${C[Me(e.type)].id}`},interaction:{_fallback:!0},common:{label:{_indexable:ue,_fallback:!0},_indexable:ue}},additionalOptionScopes:[""]};function q(t,e,n){const{ctx:o,chartArea:r}=t,i=S.get(t);n&&ft(o,r);const s=_n(i.visibleElements,e).sort((a,d)=>a.element.options.z-d.element.options.z);for(const a of s)Bn(o,r,i,a);n&&ht(o)}function _n(t,e){const n=[];for(const o of t)if(o.options.drawTime===e&&n.push({element:o,main:!0}),o.elements&&o.elements.length)for(const r of o.elements)r.options.display&&r.options.drawTime===e&&n.push({element:r});return n}function Bn(t,e,n,o){const r=o.element;o.main?(Ie(n,r,"beforeDraw"),r.draw(t,e),Ie(n,r,"afterDraw")):r.draw(t,e)}export{Nn as a};