// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).itersumabs=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=/./,t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,a=Object.prototype,o=a.toString,u=a.__defineGetter__,c=a.__defineSetter__,f=a.__lookupGetter__,s=a.__lookupSetter__;var l=function(r,e,t){var n,i,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(f.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=a,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,i&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,e,t.get),p&&c&&c.call(r,e,t.set),r},p=i,v=l,g=n()?p:v;var d=function(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=d;var m=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",x=_,O=T,V=w;var S=j,k=function(r){var e,t,n;if(null==r)return V.call(r);t=r[O],e=x(r,O);try{r[O]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[O]=t:delete r[O],n},I=y()?k:S,A=Boolean.prototype.toString;var R=I,$=function(r){try{return A.call(r),!0}catch(r){return!1}},F=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||(F?$(r):"[object Boolean]"===R(r)))},N=m,C=M;var B=h,G=function(r){return N(r)||C(r)},L=M;B(G,"isPrimitive",m),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=e,ir=er,ar=tr;var or=function(){return"function"==typeof nr||"object"==typeof ar||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;h(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};h(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,hr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t},br=mr;var yr=mr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=or()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Pr;var Tr=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&_r(r.next)};var xr=function(r){return Math.abs(r)},Or=xr;var Vr=function(){var r,e=0;return function(t){if(0===arguments.length)return r?e:null;return r=!0,e+=Or(t)}},Sr=Vr;var kr=function(r){return"string"==typeof r},Ir=String.prototype.valueOf;var Ar=I,Rr=function(r){try{return Ir.call(r),!0}catch(r){return!1}},$r=y();var Fr=function(r){return"object"==typeof r&&(r instanceof String||($r?Rr(r):"[object String]"===Ar(r)))},Mr=kr,Nr=Fr;var Cr=h,Br=function(r){return Mr(r)||Nr(r)},Gr=Fr;Cr(Br,"isPrimitive",kr),Cr(Br,"isObject",Gr);var Lr=Br,Zr=Math.floor;var Wr=function(r){return Zr(r)===r},Xr=Wr;var zr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Xr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Ur=function(r){return"number"==typeof r},Yr=Number,Dr=Yr.prototype.toString;var qr=I,Hr=Yr,Jr=function(r){try{return Dr.call(r),!0}catch(r){return!1}},Kr=y();var Qr=function(r){return"object"==typeof r&&(r instanceof Hr||(Kr?Jr(r):"[object Number]"===qr(r)))},re=Ur,ee=Qr;var te=h,ne=function(r){return re(r)||ee(r)},ie=Qr;te(ne,"isPrimitive",Ur),te(ne,"isObject",ie);var ae=ne,oe=Number.POSITIVE_INFINITY,ue=Yr.NEGATIVE_INFINITY,ce=oe,fe=ue,se=Wr;var le=function(r){return r<ce&&r>fe&&se(r)},pe=ae.isPrimitive,ve=le;var ge=function(r){return pe(r)&&ve(r)},de=ae.isObject,he=le;var me=function(r){return de(r)&&he(r.valueOf())},be=ge,ye=me;var we=h,Ee=function(r){return be(r)||ye(r)},je=me;we(Ee,"isPrimitive",ge),we(Ee,"isObject",je);var Pe=Ee;var _e=function(r){return r!=r},Te=ae.isPrimitive,xe=_e;var Oe=function(r){return Te(r)&&xe(r)},Ve=ae.isObject,Se=_e;var ke=function(r){return Ve(r)&&Se(r.valueOf())},Ie=Oe,Ae=ke;var Re=h,$e=function(r){return Ie(r)||Ae(r)},Fe=ke;Re($e,"isPrimitive",Oe),Re($e,"isObject",Fe);var Me=zr,Ne=Pe.isPrimitive,Ce=Lr.isPrimitive,Be=$e.isPrimitive;var Ge=function(r,e,t){var n,i,a;if(!Me(r)&&!Ce(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ne(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ce(r)){if(!Ce(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Be(e)){for(a=i;a<n;a++)if(Be(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Le=Ge,Ze=Lr.isPrimitive;var We=function(r){if(!Ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Xe=Lr.isPrimitive;var ze=function(r){if(!Xe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ue=We,Ye=ze,De=Lr.isPrimitive;var qe=function(r){return De(r)&&r===Ye(r)&&r!==Ue(r)},He=oe,Je=ue;var Ke=function(r){return r==r&&r>Je&&r<He},Qe=Pe.isPrimitive;var rt=function(r){return Qe(r)&&r>=0},et=Pe.isObject;var tt=function(r){return et(r)&&r.valueOf()>=0},nt=rt,it=tt;var at=h,ot=function(r){return nt(r)||it(r)},ut=tt;at(ot,"isPrimitive",rt),at(ot,"isObject",ut);var ct=ot.isPrimitive,ft=Lr.isPrimitive;var st=function(r,e){var t,n;if(!ft(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ct(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},lt=Pe.isPrimitive,pt=Lr.isPrimitive;var vt=function(r,e,t){var n,i;if(!pt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!pt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!lt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},gt=st,dt=vt;var ht=function(r,e,t){var n=!1,i=e-r.length;return i<0||(dt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+gt("0",i):gt("0",i)+r,n&&(r="-"+r)),r},mt=qe,bt=ze,yt=We,wt=Ke,Et=ae.isPrimitive,jt=ht;var Pt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!wt(n)){if(!Et(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=jt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=jt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=mt(r.specifier)?bt(t):yt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},_t=Lr.isPrimitive,Tt=/[-\/\\^$*+?.()|[\]{}]/g;var xt=function(r){var e,t;if(!_t(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Tt,"\\$&"):(e=(e=r.substring(1,t)).replace(Tt,"\\$&"),r=r[0]+e+r.substring(t))},Ot=RegExp.prototype.exec;var Vt=I,St=function(r){try{return Ot.call(r),!0}catch(r){return!1}},kt=y();var It=xt,At=Pr,Rt=Lr.isPrimitive,$t=function(r){return"object"==typeof r&&(r instanceof RegExp||(kt?St(r):"[object RegExp]"===Vt(r)))};var Ft=qe,Mt=ze,Nt=We,Ct=function(r,e,t){if(!Rt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Rt(e))e=It(e),e=new RegExp(e,"g");else if(!$t(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Rt(t)&&!At(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Bt=Ke,Gt=ae.isPrimitive,Lt=xr,Zt=/e\+(\d)$/,Wt=/e-(\d)$/,Xt=/^(\d+)$/,zt=/^(\d+)e/,Ut=/\.0$/,Yt=/\.0*e/,Dt=/(\..*[^0])0*e/;var qt=function(r){var e,t,n=parseFloat(r.arg);if(!Bt(n)){if(!Gt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Lt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ct(t,Dt,"$1e"),t=Ct(t,Yt,"e"),t=Ct(t,Ut,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ct(t,Zt,"e+0$1"),t=Ct(t,Wt,"e-0$1"),r.alternate&&(t=Ct(t,Xt,"$1."),t=Ct(t,zt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Ft(r.specifier)?Mt(t):Nt(t)},Ht=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Jt=st;var Kt=Lr.isPrimitive,Qt=Le,rn=_e,en=Pt,tn=qt,nn=function(r){var e,t,n,i,a;for(e=0,n=[],a=Ht.exec(r);a;)(t=r.slice(e,Ht.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Ht.lastIndex,a=Ht.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},an=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Jt(" ",n):Jt(" ",n)+r},on=ht,un=String.fromCharCode;var cn=function(r){var e,t,n,i,a,o,u,c,f;if(!Kt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=nn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Kt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Qt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,rn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,rn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=en(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!rn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=rn(a)?String(n.arg):un(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=tn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=on(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=an(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},fn=Tr,sn=_,ln=Sr,pn=cn;return function(r){var e,t;if(!fn(r))throw new TypeError(pn("invalid argument. Must provide an iterator. Value: `%s`.",r));for(e=ln();"number"==typeof(t=r.next()).value?e(t.value):sn(t,"value")&&e(NaN),!t.done;);return e()}}));
//# sourceMappingURL=bundle.js.map
