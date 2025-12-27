(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=e(a);fetch(a.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="174",wi={ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xl=0,Ta=1,yl=2,Io=1,No=2,Sn=3,Vn=0,Ze=1,wn=2,On=0,bi=1,Ca=2,Ra=3,Pa=4,Ml=5,Qn=100,El=101,Sl=102,wl=103,bl=104,Al=200,Tl=201,Cl=202,Rl=203,xs=204,ys=205,Pl=206,Ll=207,Dl=208,Il=209,Nl=210,Ul=211,Fl=212,Bl=213,Ol=214,Ms=0,Es=1,Ss=2,Ri=3,ws=4,bs=5,As=6,Ts=7,Uo=0,zl=1,Vl=2,zn=0,Hl=1,kl=2,Gl=3,Wl=4,Xl=5,ql=6,Yl=7,Fo=300,Pi=301,Li=302,Cs=303,Rs=304,Nr=306,Ps=1e3,ei=1001,Ls=1002,cn=1003,$l=1004,tr=1005,fn=1006,zr=1007,ni=1008,Cn=1009,Bo=1010,Oo=1011,qi=1012,la=1013,ii=1014,bn=1015,Zi=1016,ca=1017,ha=1018,Di=1020,zo=35902,Vo=1021,Ho=1022,ln=1023,ko=1024,Go=1025,Ai=1026,Ii=1027,Wo=1028,ua=1029,Xo=1030,da=1031,fa=1033,wr=33776,br=33777,Ar=33778,Tr=33779,Ds=35840,Is=35841,Ns=35842,Us=35843,Fs=36196,Bs=37492,Os=37496,zs=37808,Vs=37809,Hs=37810,ks=37811,Gs=37812,Ws=37813,Xs=37814,qs=37815,Ys=37816,$s=37817,Zs=37818,js=37819,Ks=37820,Js=37821,Cr=36492,Qs=36494,ta=36495,qo=36283,ea=36284,na=36285,ia=36286,Zl=3200,jl=3201,Yo=0,Kl=1,Bn="",Qe="srgb",Ni="srgb-linear",Lr="linear",Se="srgb",li=7680,La=519,Jl=512,Ql=513,tc=514,$o=515,ec=516,nc=517,ic=518,rc=519,Da=35044,Ia="300 es",An=2e3,Dr=2001;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const a=n[t];if(a!==void 0){const r=a.indexOf(e);r!==-1&&a.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,ra=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function sc(i,t){return(i%t+t)%t}function Vr(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ac={DEG2RAD:Rr};class de{constructor(t=0,e=0){de.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6],this.y=a[1]*e+a[4]*n+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),a=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*a+t.x,this.y=r*a+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,e,n,a,r,s,o,c,d){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d)}set(t,e,n,a,r,s,o,c,d){const h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[3],c=n[6],d=n[1],h=n[4],l=n[7],u=n[2],p=n[5],v=n[8],g=a[0],m=a[3],f=a[6],x=a[1],M=a[4],_=a[7],A=a[2],P=a[5],N=a[8];return r[0]=s*g+o*x+c*A,r[3]=s*m+o*M+c*P,r[6]=s*f+o*_+c*N,r[1]=d*g+h*x+l*A,r[4]=d*m+h*M+l*P,r[7]=d*f+h*_+l*N,r[2]=u*g+p*x+v*A,r[5]=u*m+p*M+v*P,r[8]=u*f+p*_+v*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8];return e*s*h-e*o*d-n*r*h+n*o*c+a*r*d-a*s*c}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=h*s-o*d,u=o*c-h*r,p=d*r-s*c,v=e*l+n*u+a*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=l*g,t[1]=(a*d-h*n)*g,t[2]=(o*n-a*s)*g,t[3]=u*g,t[4]=(h*e-a*c)*g,t[5]=(a*r-o*e)*g,t[6]=p*g,t[7]=(n*c-d*e)*g,t[8]=(s*e-n*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,a,r,s,o){const c=Math.cos(r),d=Math.sin(r);return this.set(n*c,n*d,-n*(c*s+d*o)+s+t,-a*d,a*c,-a*(-d*s+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Hr.makeScale(t,e)),this}rotate(t){return this.premultiply(Hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<9;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hr=new ue;function Zo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oc(){const i=Yi("canvas");return i.style.display="block",i}const Na={};function Kn(i){i in Na||(Na[i]=!0,console.warn(i))}function lc(i,t,e){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function cc(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function hc(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ua=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fa=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uc(){const i={enabled:!0,workingColorSpace:Ni,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Se&&(a.r=Tn(a.r),a.g=Tn(a.g),a.b=Tn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Se&&(a.r=Ti(a.r),a.g=Ti(a.g),a.b=Ti(a.b))),a},fromWorkingColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},toWorkingColorSpace:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Bn?Lr:this.spaces[a].transfer},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ni]:{primaries:t,whitePoint:n,transfer:Lr,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Ua,fromXYZ:Fa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}const ye=uc();function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ci;class dc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=Yi("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const a=n.getImageData(0,0,t.width,t.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Tn(r[s]/255)*255;return n.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tn(e[n]/255)*255):e[n]=Tn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fc=0;class pa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=ji(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(kr(a[s].image)):r.push(kr(a[s]))}else r=kr(a);n.url=r}return e||(t.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pc=0;class Ge extends oi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=ei,a=ei,r=fn,s=ni,o=ln,c=Cn,d=Ge.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=ji(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=d,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ps:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case Ls:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ps:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case Ls:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Fo;Ge.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,a=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,a){return this.x=t,this.y=e,this.z=n,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*a+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,a,r;const c=t.elements,d=c[0],h=c[4],l=c[8],u=c[1],p=c[5],v=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(l-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(l+g)<.1&&Math.abs(v+m)<.1&&Math.abs(d+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(d+1)/2,_=(p+1)/2,A=(f+1)/2,P=(h+u)/4,N=(l+g)/4,L=(v+m)/4;return M>_&&M>A?M<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(M),a=P/n,r=N/n):_>A?_<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(_),n=P/a,r=L/a):A<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(A),n=N/r,a=L/r),this.set(n,a,r,e),this}let x=Math.sqrt((m-v)*(m-v)+(l-g)*(l-g)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(l-g)/x,this.z=(u-h)/x,this.w=Math.acos((d+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mc extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const a={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new pa(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends mc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends Ge{constructor(t=null,e=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vc extends Ge{constructor(t=null,e=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:a},this.magFilter=cn,this.minFilter=cn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=a}static slerpFlat(t,e,n,a,r,s,o){let c=n[a+0],d=n[a+1],h=n[a+2],l=n[a+3];const u=r[s+0],p=r[s+1],v=r[s+2],g=r[s+3];if(o===0){t[e+0]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(l!==g||c!==u||d!==p||h!==v){let m=1-o;const f=c*u+d*p+h*v+l*g,x=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),P=Math.atan2(A,f*x);m=Math.sin(m*P)/A,o=Math.sin(o*P)/A}const _=o*x;if(c=c*m+u*_,d=d*m+p*_,h=h*m+v*_,l=l*m+g*_,m===1-o){const A=1/Math.sqrt(c*c+d*d+h*h+l*l);c*=A,d*=A,h*=A,l*=A}}t[e]=c,t[e+1]=d,t[e+2]=h,t[e+3]=l}static multiplyQuaternionsFlat(t,e,n,a,r,s){const o=n[a],c=n[a+1],d=n[a+2],h=n[a+3],l=r[s],u=r[s+1],p=r[s+2],v=r[s+3];return t[e]=o*v+h*l+c*p-d*u,t[e+1]=c*v+h*u+d*l-o*p,t[e+2]=d*v+h*p+o*u-c*l,t[e+3]=h*v-o*l-c*u-d*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,a){return this._x=t,this._y=e,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,a=t._y,r=t._z,s=t._order,o=Math.cos,c=Math.sin,d=o(n/2),h=o(a/2),l=o(r/2),u=c(n/2),p=c(a/2),v=c(r/2);switch(s){case"XYZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"YXZ":this._x=u*h*l+d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"ZXY":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l-u*p*v;break;case"ZYX":this._x=u*h*l-d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l+u*p*v;break;case"YZX":this._x=u*h*l+d*p*v,this._y=d*p*l+u*h*v,this._z=d*h*v-u*p*l,this._w=d*h*l-u*p*v;break;case"XZY":this._x=u*h*l-d*p*v,this._y=d*p*l-u*h*v,this._z=d*h*v+u*p*l,this._w=d*h*l+u*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,a=Math.sin(n);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],a=e[4],r=e[8],s=e[1],o=e[5],c=e[9],d=e[2],h=e[6],l=e[10],u=n+o+l;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-d)*p,this._z=(s-a)*p}else if(n>o&&n>l){const p=2*Math.sqrt(1+n-o-l);this._w=(h-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+d)/p}else if(o>l){const p=2*Math.sqrt(1+o-n-l);this._w=(r-d)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+l-n-o);this._w=(s-a)/p,this._x=(r+d)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const a=Math.min(1,e/n);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,a=t._y,r=t._z,s=t._w,o=e._x,c=e._y,d=e._z,h=e._w;return this._x=n*h+s*o+a*d-r*c,this._y=a*h+s*c+r*o-n*d,this._z=r*h+s*d+n*c-a*o,this._w=s*h-n*o-a*c-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*t._w+n*t._x+a*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*n+e*this._x,this._y=p*a+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const d=Math.sqrt(c),h=Math.atan2(d,o),l=Math.sin((1-e)*h)/d,u=Math.sin(e*h)/d;return this._w=s*l+this._w*u,this._x=n*l+this._x*u,this._y=a*l+this._y*u,this._z=r*l+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(t),a*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,e=0,n=0){rt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*a,this.y=r[1]*e+r[4]*n+r[7]*a,this.z=r[2]*e+r[5]*n+r[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,a=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,a=this.z,r=t.x,s=t.y,o=t.z,c=t.w,d=2*(s*a-o*n),h=2*(o*e-r*a),l=2*(r*n-s*e);return this.x=e+c*d+s*l-o*h,this.y=n+c*h+o*d-r*l,this.z=a+c*l+r*h-s*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,a=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*a,this.y=r[1]*e+r[5]*n+r[9]*a,this.z=r[2]*e+r[6]*n+r[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,a=t.y,r=t.z,s=e.x,o=e.y,c=e.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gr.copy(this).projectOnVector(t),this.sub(Gr)}reflect(t){return this.sub(Gr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,a=this.z-t.z;return e*e+n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const a=Math.sin(e)*t;return this.x=a*Math.sin(n),this.y=Math.cos(e)*t,this.z=a*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gr=new rt,Ba=new si;class Ki{constructor(t=new rt(1/0,1/0,1/0),e=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)t.isMesh===!0?t.getVertexPosition(s,rn):rn.fromBufferAttribute(r,s),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),er.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(t.matrixWorld),this.union(er)}const a=t.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),nr.subVectors(this.max,Hi),hi.subVectors(t.a,Hi),ui.subVectors(t.b,Hi),di.subVectors(t.c,Hi),Pn.subVectors(ui,hi),Ln.subVectors(di,ui),Xn.subVectors(hi,di);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Xn.z,Xn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Xn.z,0,-Xn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Xn.y,Xn.x,0];return!Wr(e,hi,ui,di,nr)||(e=[1,0,0,0,1,0,0,0,1],!Wr(e,hi,ui,di,nr))?!1:(ir.crossVectors(Pn,Ln),e=[ir.x,ir.y,ir.z],Wr(e,hi,ui,di,nr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],rn=new rt,er=new Ki,hi=new rt,ui=new rt,di=new rt,Pn=new rt,Ln=new rt,Xn=new rt,Hi=new rt,nr=new rt,ir=new rt,qn=new rt;function Wr(i,t,e,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){qn.fromArray(i,r);const o=a.x*Math.abs(qn.x)+a.y*Math.abs(qn.y)+a.z*Math.abs(qn.z),c=t.dot(qn),d=e.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(c,d,h),Math.min(c,d,h))>o)return!1}return!0}const gc=new Ki,ki=new rt,Xr=new rt;class ma{constructor(t=new rt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gc.setFromPoints(t).getCenter(n);let a=0;for(let r=0,s=t.length;r<s;r++)a=Math.max(a,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),a=(n-this.radius)*.5;this.center.addScaledVector(ki,a/n),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(Xr)),this.expandByPoint(ki.copy(t.center).sub(Xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new rt,qr=new rt,rr=new rt,Dn=new rt,Yr=new rt,sr=new rt,$r=new rt;class Ko{constructor(t=new rt,e=new rt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,a){qr.copy(t).add(e).multiplyScalar(.5),rr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(qr);const r=t.distanceTo(e)*.5,s=-this.direction.dot(rr),o=Dn.dot(this.direction),c=-Dn.dot(rr),d=Dn.lengthSq(),h=Math.abs(1-s*s);let l,u,p,v;if(h>0)if(l=s*c-o,u=s*o-c,v=r*h,l>=0)if(u>=-v)if(u<=v){const g=1/h;l*=g,u*=g,p=l*(l+s*u+2*o)+u*(s*l+u+2*c)+d}else u=r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;else u=-r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;else u<=-v?(l=Math.max(0,-(-s*r+o)),u=l>0?-r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d):u<=v?(l=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+d):(l=Math.max(0,-(s*r+o)),u=l>0?r:Math.min(Math.max(-r,-c),r),p=-l*l+u*(u+2*c)+d);else u=s>0?-r:r,l=Math.max(0,-(s*u+o)),p=-l*l+u*(u+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,l),a&&a.copy(qr).addScaledVector(rr,u),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),a=xn.dot(xn)-n*n,r=t.radius*t.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,a,r,s,o,c;const d=1/this.direction.x,h=1/this.direction.y,l=1/this.direction.z,u=this.origin;return d>=0?(n=(t.min.x-u.x)*d,a=(t.max.x-u.x)*d):(n=(t.max.x-u.x)*d,a=(t.min.x-u.x)*d),h>=0?(r=(t.min.y-u.y)*h,s=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,s=(t.min.y-u.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),l>=0?(o=(t.min.z-u.z)*l,c=(t.max.z-u.z)*l):(o=(t.max.z-u.z)*l,c=(t.min.z-u.z)*l),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,a,r){Yr.subVectors(e,t),sr.subVectors(n,t),$r.crossVectors(Yr,sr);let s=this.direction.dot($r),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Dn.subVectors(this.origin,t);const c=o*this.direction.dot(sr.crossVectors(Dn,sr));if(c<0)return null;const d=o*this.direction.dot(Yr.cross(Dn));if(d<0||c+d>s)return null;const h=-o*Dn.dot($r);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m)}set(t,e,n,a,r,s,o,c,d,h,l,u,p,v,g,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=c,f[2]=d,f[6]=h,f[10]=l,f[14]=u,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,a=1/fi.setFromMatrixColumn(t,0).length(),r=1/fi.setFromMatrixColumn(t,1).length(),s=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*a,e[1]=n[1]*a,e[2]=n[2]*a,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,a=t.y,r=t.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),d=Math.sin(a),h=Math.cos(r),l=Math.sin(r);if(t.order==="XYZ"){const u=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=-c*l,e[8]=d,e[1]=p+v*d,e[5]=u-g*d,e[9]=-o*c,e[2]=g-u*d,e[6]=v+p*d,e[10]=s*c}else if(t.order==="YXZ"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u+g*o,e[4]=v*o-p,e[8]=s*d,e[1]=s*l,e[5]=s*h,e[9]=-o,e[2]=p*o-v,e[6]=g+u*o,e[10]=s*c}else if(t.order==="ZXY"){const u=c*h,p=c*l,v=d*h,g=d*l;e[0]=u-g*o,e[4]=-s*l,e[8]=v+p*o,e[1]=p+v*o,e[5]=s*h,e[9]=g-u*o,e[2]=-s*d,e[6]=o,e[10]=s*c}else if(t.order==="ZYX"){const u=s*h,p=s*l,v=o*h,g=o*l;e[0]=c*h,e[4]=v*d-p,e[8]=u*d+g,e[1]=c*l,e[5]=g*d+u,e[9]=p*d-v,e[2]=-d,e[6]=o*c,e[10]=s*c}else if(t.order==="YZX"){const u=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=g-u*l,e[8]=v*l+p,e[1]=l,e[5]=s*h,e[9]=-o*h,e[2]=-d*h,e[6]=p*l+v,e[10]=u-g*l}else if(t.order==="XZY"){const u=s*c,p=s*d,v=o*c,g=o*d;e[0]=c*h,e[4]=-l,e[8]=d*h,e[1]=u*l+g,e[5]=s*h,e[9]=p*l-v,e[2]=v*l-p,e[6]=o*h,e[10]=g*l+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_c,t,xc)}lookAt(t,e,n){const a=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),In.crossVectors(n,Ke),In.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),In.crossVectors(n,Ke)),In.normalize(),ar.crossVectors(Ke,In),a[0]=In.x,a[4]=ar.x,a[8]=Ke.x,a[1]=In.y,a[5]=ar.y,a[9]=Ke.y,a[2]=In.z,a[6]=ar.z,a[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,a=e.elements,r=this.elements,s=n[0],o=n[4],c=n[8],d=n[12],h=n[1],l=n[5],u=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],x=n[3],M=n[7],_=n[11],A=n[15],P=a[0],N=a[4],L=a[8],S=a[12],y=a[1],b=a[5],B=a[9],U=a[13],W=a[2],X=a[6],tt=a[10],O=a[14],D=a[3],Q=a[7],K=a[11],F=a[15];return r[0]=s*P+o*y+c*W+d*D,r[4]=s*N+o*b+c*X+d*Q,r[8]=s*L+o*B+c*tt+d*K,r[12]=s*S+o*U+c*O+d*F,r[1]=h*P+l*y+u*W+p*D,r[5]=h*N+l*b+u*X+p*Q,r[9]=h*L+l*B+u*tt+p*K,r[13]=h*S+l*U+u*O+p*F,r[2]=v*P+g*y+m*W+f*D,r[6]=v*N+g*b+m*X+f*Q,r[10]=v*L+g*B+m*tt+f*K,r[14]=v*S+g*U+m*O+f*F,r[3]=x*P+M*y+_*W+A*D,r[7]=x*N+M*b+_*X+A*Q,r[11]=x*L+M*B+_*tt+A*K,r[15]=x*S+M*U+_*O+A*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],a=t[8],r=t[12],s=t[1],o=t[5],c=t[9],d=t[13],h=t[2],l=t[6],u=t[10],p=t[14],v=t[3],g=t[7],m=t[11],f=t[15];return v*(+r*c*l-a*d*l-r*o*u+n*d*u+a*o*p-n*c*p)+g*(+e*c*p-e*d*u+r*s*u-a*s*p+a*d*h-r*c*h)+m*(+e*d*l-e*o*p-r*s*l+n*s*p+r*o*h-n*d*h)+f*(-a*o*h-e*c*l+e*o*u+a*s*l-n*s*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],a=t[2],r=t[3],s=t[4],o=t[5],c=t[6],d=t[7],h=t[8],l=t[9],u=t[10],p=t[11],v=t[12],g=t[13],m=t[14],f=t[15],x=l*m*d-g*u*d+g*c*p-o*m*p-l*c*f+o*u*f,M=v*u*d-h*m*d-v*c*p+s*m*p+h*c*f-s*u*f,_=h*g*d-v*l*d+v*o*p-s*g*p-h*o*f+s*l*f,A=v*l*c-h*g*c-v*o*u+s*g*u+h*o*m-s*l*m,P=e*x+n*M+a*_+r*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/P;return t[0]=x*N,t[1]=(g*u*r-l*m*r-g*a*p+n*m*p+l*a*f-n*u*f)*N,t[2]=(o*m*r-g*c*r+g*a*d-n*m*d-o*a*f+n*c*f)*N,t[3]=(l*c*r-o*u*r-l*a*d+n*u*d+o*a*p-n*c*p)*N,t[4]=M*N,t[5]=(h*m*r-v*u*r+v*a*p-e*m*p-h*a*f+e*u*f)*N,t[6]=(v*c*r-s*m*r-v*a*d+e*m*d+s*a*f-e*c*f)*N,t[7]=(s*u*r-h*c*r+h*a*d-e*u*d-s*a*p+e*c*p)*N,t[8]=_*N,t[9]=(v*l*r-h*g*r-v*n*p+e*g*p+h*n*f-e*l*f)*N,t[10]=(s*g*r-v*o*r+v*n*d-e*g*d-s*n*f+e*o*f)*N,t[11]=(h*o*r-s*l*r-h*n*d+e*l*d+s*n*p-e*o*p)*N,t[12]=A*N,t[13]=(h*g*a-v*l*a+v*n*u-e*g*u-h*n*m+e*l*m)*N,t[14]=(v*o*a-s*g*a-v*n*c+e*g*c+s*n*m-e*o*m)*N,t[15]=(s*l*a-h*o*a+h*n*c-e*l*c-s*n*u+e*o*u)*N,this}scale(t){const e=this.elements,n=t.x,a=t.y,r=t.z;return e[0]*=n,e[4]*=a,e[8]*=r,e[1]*=n,e[5]*=a,e[9]*=r,e[2]*=n,e[6]*=a,e[10]*=r,e[3]*=n,e[7]*=a,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,a))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),a=Math.sin(e),r=1-n,s=t.x,o=t.y,c=t.z,d=r*s,h=r*o;return this.set(d*s+n,d*o-a*c,d*c+a*o,0,d*o+a*c,h*o+n,h*c-a*s,0,d*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,a,r,s){return this.set(1,n,r,0,t,1,s,0,e,a,1,0,0,0,0,1),this}compose(t,e,n){const a=this.elements,r=e._x,s=e._y,o=e._z,c=e._w,d=r+r,h=s+s,l=o+o,u=r*d,p=r*h,v=r*l,g=s*h,m=s*l,f=o*l,x=c*d,M=c*h,_=c*l,A=n.x,P=n.y,N=n.z;return a[0]=(1-(g+f))*A,a[1]=(p+_)*A,a[2]=(v-M)*A,a[3]=0,a[4]=(p-_)*P,a[5]=(1-(u+f))*P,a[6]=(m+x)*P,a[7]=0,a[8]=(v+M)*N,a[9]=(m-x)*N,a[10]=(1-(u+g))*N,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,n){const a=this.elements;let r=fi.set(a[0],a[1],a[2]).length();const s=fi.set(a[4],a[5],a[6]).length(),o=fi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),t.x=a[12],t.y=a[13],t.z=a[14],sn.copy(this);const d=1/r,h=1/s,l=1/o;return sn.elements[0]*=d,sn.elements[1]*=d,sn.elements[2]*=d,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=l,sn.elements[9]*=l,sn.elements[10]*=l,e.setFromRotationMatrix(sn),n.x=r,n.y=s,n.z=o,this}makePerspective(t,e,n,a,r,s,o=An){const c=this.elements,d=2*r/(e-t),h=2*r/(n-a),l=(e+t)/(e-t),u=(n+a)/(n-a);let p,v;if(o===An)p=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Dr)p=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,a,r,s,o=An){const c=this.elements,d=1/(e-t),h=1/(n-a),l=1/(s-r),u=(e+t)*d,p=(n+a)*h;let v,g;if(o===An)v=(s+r)*l,g=-2*l;else if(o===Dr)v=r*l,g=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let a=0;a<16;a++)if(e[a]!==n[a])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new rt,sn=new Le,_c=new rt(0,0,0),xc=new rt(1,1,1),In=new rt,ar=new rt,Ke=new rt,Oa=new Le,za=new si;class gn{constructor(t=0,e=0,n=0,a=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,a=this._order){return this._x=t,this._y=e,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const a=t.elements,r=a[0],s=a[4],o=a[8],c=a[1],d=a[5],h=a[9],l=a[2],u=a[6],p=a[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,d),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-l,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-l,p),this._z=Math.atan2(-s,d)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,d));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,d),this._y=Math.atan2(-l,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,d),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Oa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Oa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return za.setFromEuler(this),this.setFromQuaternion(za,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yc=0;const Va=new rt,pi=new si,yn=new Le,or=new rt,Gi=new rt,Mc=new rt,Ec=new si,Ha=new rt(1,0,0),ka=new rt(0,1,0),Ga=new rt(0,0,1),Wa={type:"added"},Sc={type:"removed"},mi={type:"childadded",child:null},Zr={type:"childremoved",child:null};class Ve extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new rt,e=new gn,n=new si,a=new rt(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Le},normalMatrix:{value:new ue}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Ha,t)}rotateY(t){return this.rotateOnAxis(ka,t)}rotateZ(t){return this.rotateOnAxis(Ga,t)}translateOnAxis(t,e){return Va.copy(t).applyQuaternion(this.quaternion),this.position.add(Va.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ha,t)}translateY(t){return this.translateOnAxis(ka,t)}translateZ(t){return this.translateOnAxis(Ga,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?or.copy(t):or.set(t,e,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(Gi,or,this.up):yn.lookAt(or,Gi,this.up),this.quaternion.setFromRotationMatrix(yn),a&&(yn.extractRotation(a.matrixWorld),pi.setFromRotationMatrix(yn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wa),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sc),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wa),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Mc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Ec,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,a=e.length;n<a;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let d=0,h=c.length;d<h;d++){const l=c[d];r(t.shapes,l)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,d=this.material.length;c<d;c++)o.push(r(t.materials,this.material[c]));a.material=o}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(t.animations,c))}}if(e){const o=s(t.geometries),c=s(t.materials),d=s(t.textures),h=s(t.images),l=s(t.shapes),u=s(t.skeletons),p=s(t.animations),v=s(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),h.length>0&&(n.images=h),l.length>0&&(n.shapes=l),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=a,n;function s(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const a=t.children[n];this.add(a.clone())}return this}}Ve.DEFAULT_UP=new rt(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new rt,Mn=new rt,jr=new rt,En=new rt,vi=new rt,gi=new rt,Xa=new rt,Kr=new rt,Jr=new rt,Qr=new rt,ts=new Pe,es=new Pe,ns=new Pe;class on{constructor(t=new rt,e=new rt,n=new rt){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,a){a.subVectors(n,e),an.subVectors(t,e),a.cross(an);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(t,e,n,a,r){an.subVectors(a,e),Mn.subVectors(n,e),jr.subVectors(t,e);const s=an.dot(an),o=an.dot(Mn),c=an.dot(jr),d=Mn.dot(Mn),h=Mn.dot(jr),l=s*d-o*o;if(l===0)return r.set(0,0,0),null;const u=1/l,p=(d*c-o*h)*u,v=(s*h-o*c)*u;return r.set(1-p-v,v,p)}static containsPoint(t,e,n,a){return this.getBarycoord(t,e,n,a,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,a,r,s,o,c){return this.getBarycoord(t,e,n,a,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(s,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(t,e,n,a,r,s){return ts.setScalar(0),es.setScalar(0),ns.setScalar(0),ts.fromBufferAttribute(t,e),es.fromBufferAttribute(t,n),ns.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(ts,r.x),s.addScaledVector(es,r.y),s.addScaledVector(ns,r.z),s}static isFrontFacing(t,e,n,a){return an.subVectors(n,e),Mn.subVectors(t,e),an.cross(Mn).dot(a)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,a){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,n,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),an.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,a,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,a,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,a=this.b,r=this.c;let s,o;vi.subVectors(a,n),gi.subVectors(r,n),Kr.subVectors(t,n);const c=vi.dot(Kr),d=gi.dot(Kr);if(c<=0&&d<=0)return e.copy(n);Jr.subVectors(t,a);const h=vi.dot(Jr),l=gi.dot(Jr);if(h>=0&&l<=h)return e.copy(a);const u=c*l-h*d;if(u<=0&&c>=0&&h<=0)return s=c/(c-h),e.copy(n).addScaledVector(vi,s);Qr.subVectors(t,r);const p=vi.dot(Qr),v=gi.dot(Qr);if(v>=0&&p<=v)return e.copy(r);const g=p*d-c*v;if(g<=0&&d>=0&&v<=0)return o=d/(d-v),e.copy(n).addScaledVector(gi,o);const m=h*v-p*l;if(m<=0&&l-h>=0&&p-v>=0)return Xa.subVectors(r,a),o=(l-h)/(l-h+(p-v)),e.copy(a).addScaledVector(Xa,o);const f=1/(m+g+u);return s=g*f,o=u*f,e.copy(n).addScaledVector(vi,s).addScaledVector(gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},lr={h:0,s:0,l:0};function is(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,a=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,a),this}setHSL(t,e,n,a=ye.workingColorSpace){if(t=sc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=is(s,r,t+1/3),this.g=is(s,r,t),this.b=is(s,r,t-1/3)}return ye.toWorkingColorSpace(this,a),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Qo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ye.fromWorkingColorSpace(ze.copy(this),t),Math.round(_e(ze.r*255,0,255))*65536+Math.round(_e(ze.g*255,0,255))*256+Math.round(_e(ze.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,a=ze.g,r=ze.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,d;const h=(o+s)/2;if(o===s)c=0,d=0;else{const l=s-o;switch(d=h<=.5?l/(s+o):l/(2-s-o),s){case n:c=(a-r)/l+(a<r?6:0);break;case a:c=(r-n)/l+2;break;case r:c=(n-a)/l+4;break}c/=6}return t.h=c,t.s=d,t.l=h,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Qe){ye.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,a=ze.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(lr);const n=Vr(Nn.h,lr.h,e),a=Vr(Nn.s,lr.s,e),r=Vr(Nn.l,lr.l,e);return this.setHSL(n,a,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,a=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*a,this.g=r[1]*e+r[4]*n+r[7]*a,this.b=r[2]*e+r[5]*n+r[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Me;Me.NAMES=Qo;let wc=0;class Ji extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=bi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xs,this.blendDst=ys,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xs&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(e){const r=a(t.textures),s=a(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const a=e.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tl extends Ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new rt,cr=new de;let bc=0;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bc++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[t+a]=e.array[n+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cr.fromBufferAttribute(this,e),cr.applyMatrix3(t),this.setXY(e,cr.x,cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,a){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),a=qe(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this}setXYZW(t,e,n,a,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),n=qe(n,this.array),a=qe(a,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=a,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Da&&(t.usage=this.usage),t}}class el extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nl extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class mn extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ac=0;const tn=new Le,rs=new Ve,_i=new rt,Je=new Ki,Wi=new Ki,Be=new rt;class kn extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ac++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zo(t)?nl:el)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return rs.lookAt(t),rs.updateMatrix(),this.applyMatrix4(rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let a=0,r=t.length;a<r;a++){const s=t[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new mn(n,3))}else{const n=Math.min(t.length,e.count);for(let a=0;a<n;a++){const r=t[a];e.setXYZ(a,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,a=e.length;n<a;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const o=e[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(Je.min,Wi.min),Je.expandByPoint(Be),Be.addVectors(Je.max,Wi.max),Je.expandByPoint(Be)):(Je.expandByPoint(Wi.min),Je.expandByPoint(Wi.max))}Je.getCenter(n);let a=0;for(let r=0,s=t.count;r<s;r++)Be.fromBufferAttribute(t,r),a=Math.max(a,n.distanceToSquared(Be));if(e)for(let r=0,s=e.length;r<s;r++){const o=e[r],c=this.morphTargetsRelative;for(let d=0,h=o.count;d<h;d++)Be.fromBufferAttribute(o,d),c&&(_i.fromBufferAttribute(t,d),Be.add(_i)),a=Math.max(a,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,a=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new rt,c[L]=new rt;const d=new rt,h=new rt,l=new rt,u=new de,p=new de,v=new de,g=new rt,m=new rt;function f(L,S,y){d.fromBufferAttribute(n,L),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,y),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,y),h.sub(d),l.sub(d),p.sub(u),v.sub(u);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(l,-p.y).multiplyScalar(b),m.copy(l).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(b),o[L].add(g),o[S].add(g),o[y].add(g),c[L].add(m),c[S].add(m),c[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,S=x.length;L<S;++L){const y=x[L],b=y.start,B=y.count;for(let U=b,W=b+B;U<W;U+=3)f(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new rt,_=new rt,A=new rt,P=new rt;function N(L){A.fromBufferAttribute(a,L),P.copy(A);const S=o[L];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),_.crossVectors(P,S);const b=_.dot(c[L])<0?-1:1;s.setXYZW(L,M.x,M.y,M.z,b)}for(let L=0,S=x.length;L<S;++L){const y=x[L],b=y.start,B=y.count;for(let U=b,W=b+B;U<W;U+=3)N(t.getX(U+0)),N(t.getX(U+1)),N(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const a=new rt,r=new rt,s=new rt,o=new rt,c=new rt,d=new rt,h=new rt,l=new rt;if(t)for(let u=0,p=t.count;u<p;u+=3){const v=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,m),o.add(h),c.add(h),d.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let u=0,p=e.count;u<p;u+=3)a.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),s.fromBufferAttribute(e,u+2),h.subVectors(s,r),l.subVectors(a,r),h.cross(l),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const d=o.array,h=o.itemSize,l=o.normalized,u=new d.constructor(c.length*h);let p=0,v=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*h;for(let f=0;f<h;f++)u[v++]=d[p++]}return new pn(u,h,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new kn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],d=t(c,n);e.setAttribute(o,d)}const r=this.morphAttributes;for(const o in r){const c=[],d=r[o];for(let h=0,l=d.length;h<l;h++){const u=d[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const d=s[o];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(t[d]=c[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const d=n[c];t.data.attributes[c]=d.toJSON(t.data)}const a={};let r=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],h=[];for(let l=0,u=d.length;l<u;l++){const p=d[l];h.push(p.toJSON(t.data))}h.length>0&&(a[c]=h,r=!0)}r&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const a=t.attributes;for(const d in a){const h=a[d];this.setAttribute(d,h.clone(e))}const r=t.morphAttributes;for(const d in r){const h=[],l=r[d];for(let u=0,p=l.length;u<p;u++)h.push(l[u].clone(e));this.morphAttributes[d]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let d=0,h=s.length;d<h;d++){const l=s[d];this.addGroup(l.start,l.count,l.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qa=new Le,Yn=new Ko,hr=new ma,Ya=new rt,ur=new rt,dr=new rt,fr=new rt,ss=new rt,pr=new rt,$a=new rt,mr=new rt;class nn extends Ve{constructor(t=new kn,e=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const a=e[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(a,t);const o=this.morphTargetInfluences;if(r&&o){pr.set(0,0,0);for(let c=0,d=r.length;c<d;c++){const h=o[c],l=r[c];h!==0&&(ss.fromBufferAttribute(l,t),s?pr.addScaledVector(ss,h):pr.addScaledVector(ss.sub(e),h))}e.add(pr)}return e}raycast(t,e){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(hr.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(hr,Ya)===null||Yn.origin.distanceToSquared(Ya)>(t.far-t.near)**2))&&(qa.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(qa),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,d=r.attributes.uv,h=r.attributes.uv1,l=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,A=M;_<A;_+=3){const P=o.getX(_),N=o.getX(_+1),L=o.getX(_+2);a=vr(this,f,t,n,d,h,l,P,N,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);a=vr(this,s,t,n,d,h,l,x,M,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,g=u.length;v<g;v++){const m=u[v],f=s[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=x,A=M;_<A;_+=3){const P=_,N=_+1,L=_+2;a=vr(this,f,t,n,d,h,l,P,N,L),a&&(a.faceIndex=Math.floor(_/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const v=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const x=m,M=m+1,_=m+2;a=vr(this,s,t,n,d,h,l,x,M,_),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Tc(i,t,e,n,a,r,s,o){let c;if(t.side===Ze?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,t.side===Vn,o),c===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(mr);return d<e.near||d>e.far?null:{distance:d,point:mr.clone(),object:i}}function vr(i,t,e,n,a,r,s,o,c,d){i.getVertexPosition(o,ur),i.getVertexPosition(c,dr),i.getVertexPosition(d,fr);const h=Tc(i,t,e,n,ur,dr,fr,$a);if(h){const l=new rt;on.getBarycoord($a,ur,dr,fr,l),a&&(h.uv=on.getInterpolatedAttribute(a,o,c,d,l,new de)),r&&(h.uv1=on.getInterpolatedAttribute(r,o,c,d,l,new de)),s&&(h.normal=on.getInterpolatedAttribute(s,o,c,d,l,new rt),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:d,normal:new rt,materialIndex:0};on.getNormal(ur,dr,fr,u.normal),h.face=u,h.barycoord=l}return h}class Bi extends kn{constructor(t=1,e=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],d=[],h=[],l=[];let u=0,p=0;v("z","y","x",-1,-1,n,e,t,s,r,0),v("z","y","x",1,-1,n,e,-t,s,r,1),v("x","z","y",1,1,t,n,e,a,s,2),v("x","z","y",1,-1,t,n,-e,a,s,3),v("x","y","z",1,-1,t,e,n,a,r,4),v("x","y","z",-1,-1,t,e,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(h,3)),this.setAttribute("uv",new mn(l,2));function v(g,m,f,x,M,_,A,P,N,L,S){const y=_/N,b=A/L,B=_/2,U=A/2,W=P/2,X=N+1,tt=L+1;let O=0,D=0;const Q=new rt;for(let K=0;K<tt;K++){const F=K*b-U;for(let J=0;J<X;J++){const z=J*y-B;Q[g]=z*x,Q[m]=F*M,Q[f]=W,d.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[f]=P>0?1:-1,h.push(Q.x,Q.y,Q.z),l.push(J/N),l.push(1-K/L),O+=1}}for(let K=0;K<L;K++)for(let F=0;F<N;F++){const J=u+F+X*K,z=u+F+X*(K+1),T=u+(F+1)+X*(K+1),C=u+(F+1)+X*K;c.push(J,z,C),c.push(z,T,C),D+=6}o.addGroup(p,D,S),p+=D,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const a=i[e][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=a.clone():Array.isArray(a)?t[e][n]=a.slice():t[e][n]=a}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const a in n)t[a]=n[a]}return t}function Cc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function il(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ye.workingColorSpace}const Rc={clone:Ui,merge:ke};var Pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pc,this.fragmentShader=Lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Cc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?e.uniforms[a]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[a]={type:"m4",value:s.toArray()}:e.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rl extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Un=new rt,Za=new de,ja=new de;class en extends rl{constructor(t=50,e=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Un.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Un.x,Un.y).multiplyScalar(-t/Un.z),Un.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Un.x,Un.y).multiplyScalar(-t/Un.z)}getViewSize(t,e){return this.getViewBounds(t,Za,ja),e.subVectors(ja,Za)}setViewOffset(t,e,n,a,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*e,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,d=s.fullHeight;r+=s.offsetX*a/c,e-=s.offsetY*n/d,a*=s.width/c,n*=s.height/d}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xi=-90,yi=1;class Dc extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new en(xi,yi,t,e);a.layers=this.layers,this.add(a);const r=new en(xi,yi,t,e);r.layers=this.layers,this.add(r);const s=new en(xi,yi,t,e);s.layers=this.layers,this.add(s);const o=new en(xi,yi,t,e);o.layers=this.layers,this.add(o);const c=new en(xi,yi,t,e);c.layers=this.layers,this.add(c);const d=new en(xi,yi,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,a,r,s,o,c]=e;for(const d of e)this.remove(d);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Dr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,d,h]=this.children,l=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,a),t.render(e,r),t.setRenderTarget(n,1,a),t.render(e,s),t.setRenderTarget(n,2,a),t.render(e,o),t.setRenderTarget(n,3,a),t.render(e,c),t.setRenderTarget(n,4,a),t.render(e,d),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,a),t.render(e,h),t.setRenderTarget(l,u,p),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class va extends Ge{constructor(t,e,n,a,r,s,o,c,d,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,a,r,s,o,c,d,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ic extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},a=[n,n,n,n,n,n];this.texture=new va(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Bi(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:On});r.uniforms.tEquirect.value=e;const s=new nn(a,r),o=e.minFilter;return e.minFilter===ni&&(e.minFilter=fn),new Dc(1,10,this).update(t,s),e.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,a){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,a);t.setRenderTarget(r)}}class gr extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nc={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){s=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),f=this._getHandJoint(d,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=d.joints["index-finger-tip"],l=d.joints["thumb-tip"],u=h.position.distanceTo(l.position),p=.02,v=.005;d.inputState.pinching&&u>p+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&u<=p-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=e.getPose(t.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nc)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),d!==null&&(d.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Uc extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const os=new rt,Fc=new rt,Bc=new ue;class Fn{constructor(t=new rt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,a){return this.normal.set(t,e,n),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const a=os.subVectors(n,e).cross(Fc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(os),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bc.getNormalMatrix(t),a=this.coplanarPoint(os).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ma,_r=new rt;class ga{constructor(t=new Fn,e=new Fn,n=new Fn,a=new Fn,r=new Fn,s=new Fn){this.planes=[t,e,n,a,r,s]}set(t,e,n,a,r,s){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,a=t.elements,r=a[0],s=a[1],o=a[2],c=a[3],d=a[4],h=a[5],l=a[6],u=a[7],p=a[8],v=a[9],g=a[10],m=a[11],f=a[12],x=a[13],M=a[14],_=a[15];if(n[0].setComponents(c-r,u-d,m-p,_-f).normalize(),n[1].setComponents(c+r,u+d,m+p,_+f).normalize(),n[2].setComponents(c+s,u+h,m+v,_+x).normalize(),n[3].setComponents(c-s,u-h,m-v,_-x).normalize(),n[4].setComponents(c-o,u-l,m-g,_-M).normalize(),e===An)n[5].setComponents(c+o,u+l,m+g,_+M).normalize();else if(e===Dr)n[5].setComponents(o,l,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,a=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const a=e[n];if(_r.x=a.normal.x>0?t.max.x:t.min.x,_r.y=a.normal.y>0?t.max.y:t.min.y,_r.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(_r)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sl extends Ge{constructor(t,e,n,a,r,s,o,c,d,h=Ai){if(h!==Ai&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ii),n===void 0&&h===Ii&&(n=Di),super(null,a,r,s,o,c,h,n,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qi extends kn{constructor(t=1,e=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:a};const r=t/2,s=e/2,o=Math.floor(n),c=Math.floor(a),d=o+1,h=c+1,l=t/o,u=e/c,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const x=f*u-s;for(let M=0;M<d;M++){const _=M*l-r;v.push(_,-x,0),g.push(0,0,1),m.push(M/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const M=x+d*f,_=x+d*(f+1),A=x+1+d*(f+1),P=x+1+d*f;p.push(M,_,P),p.push(_,A,P)}this.setIndex(p),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.width,t.height,t.widthSegments,t.heightSegments)}}class _a extends kn{constructor(t=1,e=32,n=16,a=0,r=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:a,phiLength:r,thetaStart:s,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let d=0;const h=[],l=new rt,u=new rt,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const x=[],M=f/n;let _=0;f===0&&s===0?_=.5/e:f===n&&c===Math.PI&&(_=-.5/e);for(let A=0;A<=e;A++){const P=A/e;l.x=-t*Math.cos(a+P*r)*Math.sin(s+M*o),l.y=t*Math.cos(s+M*o),l.z=t*Math.sin(a+P*r)*Math.sin(s+M*o),v.push(l.x,l.y,l.z),u.copy(l).normalize(),g.push(u.x,u.y,u.z),m.push(P+_,1-M),x.push(d++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const M=h[f][x+1],_=h[f][x],A=h[f+1][x],P=h[f+1][x+1];(f!==0||s>0)&&p.push(M,_,P),(f!==n-1||c<Math.PI)&&p.push(_,A,P)}this.setIndex(p),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _a(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class xa extends Ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Oc extends Ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zc extends Ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ka={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vc{constructor(t,e,n){const a=this;let r=!1,s=0,o=0,c;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&a.onStart!==void 0&&a.onStart(h,s,o),r=!0},this.itemEnd=function(h){s++,a.onProgress!==void 0&&a.onProgress(h,s,o),s===o&&(r=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,l){return d.push(h,l),this},this.removeHandler=function(h){const l=d.indexOf(h);return l!==-1&&d.splice(l,2),this},this.getHandler=function(h){for(let l=0,u=d.length;l<u;l+=2){const p=d[l],v=d[l+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null}}}const Hc=new Vc;class Ur{constructor(t){this.manager=t!==void 0?t:Hc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(a,r){n.load(t,a,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ur.DEFAULT_MATERIAL_NAME="__DEFAULT";class al extends Ur{constructor(t){super(t)}load(t,e,n,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ka.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const o=Yi("img");function c(){h(),Ka.add(t,this),e&&e(this),r.manager.itemEnd(t)}function d(l){h(),a&&a(l),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",d,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class kc extends Ur{constructor(t){super(t)}load(t,e,n,a){const r=new va;r.colorSpace=Qe;const s=new al(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function c(d){s.load(t[d],function(h){r.images[d]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,a)}for(let d=0;d<t.length;++d)c(d);return r}}class Gc extends Ur{constructor(t){super(t)}load(t,e,n,a){const r=new Ge,s=new al(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,a),r}}class ol extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ls=new Le,Ja=new rt,Qa=new rt;class Wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),ls.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ls),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ls)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ll extends rl{constructor(t=-1,e=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-t,s=n+t,o=a+e,c=a-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,s=r+d*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Xc extends Wc{constructor(){super(new ll(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qc extends ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Xc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yc extends ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $c extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Zc{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=to(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=to();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function to(){return performance.now()}class eo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jc extends oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function no(i,t,e,n){const a=Kc(n);switch(e){case Vo:return i*t;case ko:return i*t;case Go:return i*t*2;case Wo:return i*t/a.components*a.byteLength;case ua:return i*t/a.components*a.byteLength;case Xo:return i*t*2/a.components*a.byteLength;case da:return i*t*2/a.components*a.byteLength;case Ho:return i*t*3/a.components*a.byteLength;case ln:return i*t*4/a.components*a.byteLength;case fa:return i*t*4/a.components*a.byteLength;case wr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Is:case Us:return Math.max(i,16)*Math.max(t,8)/4;case Ds:case Ns:return Math.max(i,8)*Math.max(t,8)/2;case Fs:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vs:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Hs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Gs:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ws:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Xs:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qs:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $s:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case js:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ks:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Js:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Cr:case Qs:case ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qo:case ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case ia:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kc(i){switch(i){case Cn:case Bo:return{byteLength:1,components:1};case qi:case Oo:case Zi:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case ii:case la:case bn:return{byteLength:4,components:1};case zo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cl(){let i=null,t=!1,e=null,n=null;function a(r,s){e(r,s),n=i.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(a),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jc(i){const t=new WeakMap;function e(o,c){const d=o.array,h=o.usage,l=d.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,d,h),o.onUploadCallback();let p;if(d instanceof Float32Array)p=i.FLOAT;else if(d instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=i.SHORT;else if(d instanceof Uint32Array)p=i.UNSIGNED_INT;else if(d instanceof Int32Array)p=i.INT;else if(d instanceof Int8Array)p=i.BYTE;else if(d instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:u,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:o.version,size:l}}function n(o,c,d){const h=c.array,l=c.updateRanges;if(i.bindBuffer(d,o),l.length===0)i.bufferSubData(d,0,h);else{l.sort((p,v)=>p.start-v.start);let u=0;for(let p=1;p<l.length;p++){const v=l[u],g=l[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++u,l[u]=g)}l.length=u+1;for(let p=0,v=l.length;p<v;p++){const g=l[p];i.bufferSubData(d,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const d=t.get(o);if(d===void 0)t.set(o,e(o,c));else if(d.version<o.version){if(d.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,o,c),d.version=o.version}}return{get:a,remove:r,update:s}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,su=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,au=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ou=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,du=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Eu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Su=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Au=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ru=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ou=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ku=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ju=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,td=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ed=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ad=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,od=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ud=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Td=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:Qc,alphahash_pars_fragment:th,alphamap_fragment:eh,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:rh,aomap_fragment:sh,aomap_pars_fragment:ah,batching_pars_vertex:oh,batching_vertex:lh,begin_vertex:ch,beginnormal_vertex:hh,bsdfs:uh,iridescence_fragment:dh,bumpmap_pars_fragment:fh,clipping_planes_fragment:ph,clipping_planes_pars_fragment:mh,clipping_planes_pars_vertex:vh,clipping_planes_vertex:gh,color_fragment:_h,color_pars_fragment:xh,color_pars_vertex:yh,color_vertex:Mh,common:Eh,cube_uv_reflection_fragment:Sh,defaultnormal_vertex:wh,displacementmap_pars_vertex:bh,displacementmap_vertex:Ah,emissivemap_fragment:Th,emissivemap_pars_fragment:Ch,colorspace_fragment:Rh,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ih,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:Xh,envmap_vertex:Uh,fog_vertex:Fh,fog_pars_vertex:Bh,fog_fragment:Oh,fog_pars_fragment:zh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Hh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Gh,lights_pars_begin:Wh,lights_toon_fragment:qh,lights_toon_pars_fragment:Yh,lights_phong_fragment:$h,lights_phong_pars_fragment:Zh,lights_physical_fragment:jh,lights_physical_pars_fragment:Kh,lights_fragment_begin:Jh,lights_fragment_maps:Qh,lights_fragment_end:tu,logdepthbuf_fragment:eu,logdepthbuf_pars_fragment:nu,logdepthbuf_pars_vertex:iu,logdepthbuf_vertex:ru,map_fragment:su,map_pars_fragment:au,map_particle_fragment:ou,map_particle_pars_fragment:lu,metalnessmap_fragment:cu,metalnessmap_pars_fragment:hu,morphinstance_vertex:uu,morphcolor_vertex:du,morphnormal_vertex:fu,morphtarget_pars_vertex:pu,morphtarget_vertex:mu,normal_fragment_begin:vu,normal_fragment_maps:gu,normal_pars_fragment:_u,normal_pars_vertex:xu,normal_vertex:yu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:Eu,clearcoat_normal_fragment_maps:Su,clearcoat_pars_fragment:wu,iridescence_pars_fragment:bu,opaque_fragment:Au,packing:Tu,premultiplied_alpha_fragment:Cu,project_vertex:Ru,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Uu,shadowmap_vertex:Fu,shadowmask_pars_fragment:Bu,skinbase_vertex:Ou,skinning_pars_vertex:zu,skinning_vertex:Vu,skinnormal_vertex:Hu,specularmap_fragment:ku,specularmap_pars_fragment:Gu,tonemapping_fragment:Wu,tonemapping_pars_fragment:Xu,transmission_fragment:qu,transmission_pars_fragment:Yu,uv_pars_fragment:$u,uv_pars_vertex:Zu,uv_vertex:ju,worldpos_vertex:Ku,background_vert:Ju,background_frag:Qu,backgroundCube_vert:td,backgroundCube_frag:ed,cube_vert:nd,cube_frag:id,depth_vert:rd,depth_frag:sd,distanceRGBA_vert:ad,distanceRGBA_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:hd,linedashed_frag:ud,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:vd,meshmatcap_frag:gd,meshnormal_vert:_d,meshnormal_frag:xd,meshphong_vert:yd,meshphong_frag:Md,meshphysical_vert:Ed,meshphysical_frag:Sd,meshtoon_vert:wd,meshtoon_frag:bd,points_vert:Ad,points_frag:Td,shadow_vert:Cd,shadow_frag:Rd,sprite_vert:Pd,sprite_frag:Ld},Ht={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},un={basic:{uniforms:ke([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:ke([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:ke([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:ke([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:ke([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Me(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:ke([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:ke([Ht.points,Ht.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:ke([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:ke([Ht.common,Ht.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:ke([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:ke([Ht.sprite,Ht.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:ke([Ht.common,Ht.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:ke([Ht.lights,Ht.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};un.physical={uniforms:ke([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const xr={r:0,b:0,g:0},Zn=new gn,Dd=new Le;function Id(i,t,e,n,a,r,s){const o=new Me(0);let c=r===!0?0:1,d,h,l=null,u=0,p=null;function v(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function g(M){let _=!1;const A=v(M);A===null?f(o,c):A&&A.isColor&&(f(A,1),_=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const A=v(_);A&&(A.isCubeTexture||A.mapping===Nr)?(h===void 0&&(h=new nn(new Bi(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ui(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,N,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Zn.copy(_.backgroundRotation),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Zn)),h.material.toneMapped=ye.getTransfer(A.colorSpace)!==Se,(l!==A||u!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,l=A,u=A.version,p=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new nn(new Qi(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ui(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.toneMapped=ye.getTransfer(A.colorSpace)!==Se,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(l!==A||u!==A.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,l=A,u=A.version,p=i.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function f(M,_){M.getRGB(xr,il(i)),n.buffers.color.setClear(xr.r,xr.g,xr.b,_,s)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:g,addToRenderList:m,dispose:x}}function Nd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=u(null);let r=a,s=!1;function o(y,b,B,U,W){let X=!1;const tt=l(U,B,b);r!==tt&&(r=tt,d(r.object)),X=p(y,U,B,W),X&&v(y,U,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,_(y,b,B,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function l(y,b,B){const U=B.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[b.id];X===void 0&&(X={},W[b.id]=X);let tt=X[U];return tt===void 0&&(tt=u(c()),X[U]=tt),tt}function u(y){const b=[],B=[],U=[];for(let W=0;W<e;W++)b[W]=0,B[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:U,object:y,attributes:{},index:null}}function p(y,b,B,U){const W=r.attributes,X=b.attributes;let tt=0;const O=B.getAttributes();for(const D in O)if(O[D].location>=0){const K=W[D];let F=X[D];if(F===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(F=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(F=y.instanceColor)),K===void 0||K.attribute!==F||F&&K.data!==F.data)return!0;tt++}return r.attributesNum!==tt||r.index!==U}function v(y,b,B,U){const W={},X=b.attributes;let tt=0;const O=B.getAttributes();for(const D in O)if(O[D].location>=0){let K=X[D];K===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const F={};F.attribute=K,K&&K.data&&(F.data=K.data),W[D]=F,tt++}r.attributes=W,r.attributesNum=tt,r.index=U}function g(){const y=r.newAttributes;for(let b=0,B=y.length;b<B;b++)y[b]=0}function m(y){f(y,0)}function f(y,b){const B=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),W[y]!==b&&(i.vertexAttribDivisor(y,b),W[y]=b)}function x(){const y=r.newAttributes,b=r.enabledAttributes;for(let B=0,U=b.length;B<U;B++)b[B]!==y[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function M(y,b,B,U,W,X,tt){tt===!0?i.vertexAttribIPointer(y,b,B,W,X):i.vertexAttribPointer(y,b,B,U,W,X)}function _(y,b,B,U){g();const W=U.attributes,X=B.getAttributes(),tt=b.defaultAttributeValues;for(const O in X){const D=X[O];if(D.location>=0){let Q=W[O];if(Q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),Q!==void 0){const K=Q.normalized,F=Q.itemSize,J=t.get(Q);if(J===void 0)continue;const z=J.buffer,T=J.type,C=J.bytesPerElement,H=T===i.INT||T===i.UNSIGNED_INT||Q.gpuType===la;if(Q.isInterleavedBufferAttribute){const Z=Q.data,et=Z.stride,q=Q.offset;if(Z.isInstancedInterleavedBuffer){for(let nt=0;nt<D.locationSize;nt++)f(D.location+nt,Z.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let nt=0;nt<D.locationSize;nt++)m(D.location+nt);i.bindBuffer(i.ARRAY_BUFFER,z);for(let nt=0;nt<D.locationSize;nt++)M(D.location+nt,F/D.locationSize,T,K,et*C,(q+F/D.locationSize*nt)*C,H)}else{if(Q.isInstancedBufferAttribute){for(let Z=0;Z<D.locationSize;Z++)f(D.location+Z,Q.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Z=0;Z<D.locationSize;Z++)m(D.location+Z);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Z=0;Z<D.locationSize;Z++)M(D.location+Z,F/D.locationSize,T,K,F*C,F/D.locationSize*Z*C,H)}}else if(tt!==void 0){const K=tt[O];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(D.location,K);break;case 3:i.vertexAttrib3fv(D.location,K);break;case 4:i.vertexAttrib4fv(D.location,K);break;default:i.vertexAttrib1fv(D.location,K)}}}}x()}function A(){L();for(const y in n){const b=n[y];for(const B in b){const U=b[B];for(const W in U)h(U[W].object),delete U[W];delete b[B]}delete n[y]}}function P(y){if(n[y.id]===void 0)return;const b=n[y.id];for(const B in b){const U=b[B];for(const W in U)h(U[W].object),delete U[W];delete b[B]}delete n[y.id]}function N(y){for(const b in n){const B=n[b];if(B[y.id]===void 0)continue;const U=B[y.id];for(const W in U)h(U[W].object),delete U[W];delete B[y.id]}}function L(){S(),s=!0,r!==a&&(r=a,d(r.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:N,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Ud(i,t,e){let n;function a(d){n=d}function r(d,h){i.drawArrays(n,d,h),e.update(h,n,1)}function s(d,h,l){l!==0&&(i.drawArraysInstanced(n,d,h,l),e.update(h,n,l))}function o(d,h,l){if(l===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,h,0,l);let p=0;for(let v=0;v<l;v++)p+=h[v];e.update(p,n,1)}function c(d,h,l,u){if(l===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d.length;v++)s(d[v],h[v],u[v]);else{p.multiDrawArraysInstancedWEBGL(n,d,0,h,0,u,0,l);let v=0;for(let g=0;g<l;g++)v+=h[g]*u[g];e.update(v,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Fd(i,t,e,n){let a;function r(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");a=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(N){return!(N!==ln&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const L=N===Zi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Cn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==bn&&!L)}function c(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const h=c(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const l=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:d,logarithmicDepthBuffer:l,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:A,maxSamples:P}}function Bd(i){const t=this;let e=null,n=0,a=!1,r=!1;const s=new Fn,o=new ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,u){const p=l.length!==0||u||n!==0||a;return a=u,n=l.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(l,u){e=h(l,u,0)},this.setState=function(l,u,p){const v=l.clippingPlanes,g=l.clipIntersection,m=l.clipShadows,f=i.get(l);if(!a||v===null||v.length===0||r&&!m)r?h(null):d();else{const x=r?0:n,M=x*4;let _=f.clippingState||null;c.value=_,_=h(v,u,M,p);for(let A=0;A!==M;++A)_[A]=e[A];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function d(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(l,u,p,v){const g=l!==null?l.length:0;let m=null;if(g!==0){if(m=c.value,v!==!0||m===null){const f=p+g*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,_=p;M!==g;++M,_+=4)s.copy(l[M]).applyMatrix4(x,o),s.normal.toArray(m,_),m[_+3]=s.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Od(i){let t=new WeakMap;function e(s,o){return o===Cs?s.mapping=Pi:o===Rs&&(s.mapping=Li),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Cs||o===Rs)if(t.has(s)){const c=t.get(s).texture;return e(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const d=new Ic(c.height);return d.fromEquirectangularTexture(i,s),t.set(s,d),s.addEventListener("dispose",a),e(d.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Si=4,io=[.125,.215,.35,.446,.526,.582],ti=20,cs=new ll,ro=new Me;let hs=null,us=0,ds=0,fs=!1;const Jn=(1+Math.sqrt(5))/2,Mi=1/Jn,so=[new rt(-Jn,Mi,0),new rt(Jn,Mi,0),new rt(-Mi,0,Jn),new rt(Mi,0,Jn),new rt(0,Jn,-Mi),new rt(0,Jn,Mi),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],zd=new rt;class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,a=100,r={}){const{size:s=256,position:o=zd}=r;hs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,a,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hs,us,ds),this._renderer.xr.enabled=fs,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),fs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Zi,format:ln,colorSpace:Ni,depthBuffer:!1},a=oo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Hd(r,t,e)}return a}_compileMaterial(t){const e=new nn(this._lodPlanes[0],t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,a,r){const c=new en(90,1,e,n),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,p=l.toneMapping;l.getClearColor(ro),l.toneMapping=zn,l.autoClear=!1;const v=new tl({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new nn(new Bi,v);let m=!1;const f=t.background;f?f.isColor&&(v.color.copy(f),t.background=null,m=!0):(v.color.copy(ro),m=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(c.up.set(0,d[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):M===1?(c.up.set(0,0,d[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,d[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));const _=this._cubeSize;yr(a,M*_,x>2?_:0,_,_),l.setRenderTarget(a),m&&l.render(g,c),l.render(t,c)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=p,l.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,a=t.mapping===Pi||t.mapping===Li;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(s,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=so[(a-r-1)%so.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,a,"latitudinal",r),this._halfBlur(s,t,n,n,a,"longitudinal",r)}_halfBlur(t,e,n,a,r,s,o){const c=this._renderer,d=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,l=new nn(this._lodPlanes[a],d),u=d.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const f=[];let x=0;for(let N=0;N<ti;++N){const L=N/g,S=Math.exp(-L*L/2);f.push(S),N===0?x+=S:N<m&&(x+=2*S)}for(let N=0;N<f.length;N++)f[N]=f[N]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=v,u.mipInt.value=M-n;const _=this._sizeLods[a],A=3*_*(a>M-Si?a-M+Si:0),P=4*(this._cubeSize-_);yr(e,A,P,3*_,2*_),c.setRenderTarget(e),c.render(l,cs)}}function Vd(i){const t=[],e=[],n=[];let a=i;const r=i-Si+1+io.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);e.push(o);let c=1/o;s>i-Si?c=io[s-i+Si-1]:s===0&&(c=0),n.push(c);const d=1/(o-2),h=-d,l=1+d,u=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,v=6,g=3,m=2,f=1,x=new Float32Array(g*v*p),M=new Float32Array(m*v*p),_=new Float32Array(f*v*p);for(let P=0;P<p;P++){const N=P%3*2/3-1,L=P>2?0:-1,S=[N,L,0,N+2/3,L,0,N+2/3,L+1,0,N,L,0,N+2/3,L+1,0,N,L+1,0];x.set(S,g*v*P),M.set(u,m*v*P);const y=[P,P,P,P,P,P];_.set(y,f*v*P)}const A=new kn;A.setAttribute("position",new pn(x,g)),A.setAttribute("uv",new pn(M,m)),A.setAttribute("faceIndex",new pn(_,f)),t.push(A),a>Si&&a--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function oo(i,t,e){const n=new ri(i,t,e);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,t,e,n,a){i.viewport.set(t,e,n,a),i.scissor.set(t,e,n,a)}function Hd(i,t,e){const n=new Float32Array(ti),a=new rt(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function lo(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function co(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,d=c===Cs||c===Rs,h=c===Pi||c===Li;if(d||h){let l=t.get(o);const u=l!==void 0?l.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ao(i)),l=d?e.fromEquirectangular(o,l):e.fromCubemap(o,l),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),l.texture;if(l!==void 0)return l.texture;{const p=o.image;return d&&p&&p.height>0||h&&p&&a(p)?(e===null&&(e=new ao(i)),l=d?e.fromEquirectangular(o):e.fromCubemap(o),l.texture.pmremVersion=o.pmremVersion,t.set(o,l),o.addEventListener("dispose",r),l.texture):null}}}return o}function a(o){let c=0;const d=6;for(let h=0;h<d;h++)o[h]!==void 0&&c++;return c===d}function r(o){const c=o.target;c.removeEventListener("dispose",r);const d=t.get(c);d!==void 0&&(t.delete(c),d.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Gd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return t[n]=a,a}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const a=e(n);return a===null&&Kn("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Wd(i,t,e,n){const a={},r=new WeakMap;function s(l){const u=l.target;u.index!==null&&t.remove(u.index);for(const v in u.attributes)t.remove(u.attributes[v]);u.removeEventListener("dispose",s),delete a[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(l,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,e.memory.geometries++),u}function c(l){const u=l.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function d(l){const u=[],p=l.index,v=l.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let M=0,_=x.length;M<_;M+=3){const A=x[M+0],P=x[M+1],N=x[M+2];u.push(A,P,P,N,N,A)}}else if(v!==void 0){const x=v.array;g=v.version;for(let M=0,_=x.length/3-1;M<_;M+=3){const A=M+0,P=M+1,N=M+2;u.push(A,P,P,N,N,A)}}else return;const m=new(Zo(u)?nl:el)(u,1);m.version=g;const f=r.get(l);f&&t.remove(f),r.set(l,m)}function h(l){const u=r.get(l);if(u){const p=l.index;p!==null&&u.version<p.version&&d(l)}else d(l);return r.get(l)}return{get:o,update:c,getWireframeAttribute:h}}function Xd(i,t,e){let n;function a(u){n=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*s),e.update(p,n,1)}function d(u,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,u*s,v),e.update(p,n,v))}function h(u,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,n,1)}function l(u,p,v,g){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)d(u[f]/s,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,g,0,v);let f=0;for(let x=0;x<v;x++)f+=p[x]*g[x];e.update(f,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=l}function qd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(e.calls++,s){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:n}}function Yd(i,t,e){const n=new WeakMap,a=new Pe;function r(s,o,c){const d=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,l=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==l){let y=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const v=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let _=0;v===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let A=o.attributes.position.count*_,P=1;A>t.maxTextureSize&&(P=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const N=new Float32Array(A*P*4*l),L=new jo(N,A,P,l);L.type=bn,L.needsUpdate=!0;const S=_*4;for(let b=0;b<l;b++){const B=f[b],U=x[b],W=M[b],X=A*P*4*b;for(let tt=0;tt<B.count;tt++){const O=tt*S;v===!0&&(a.fromBufferAttribute(B,tt),N[X+O+0]=a.x,N[X+O+1]=a.y,N[X+O+2]=a.z,N[X+O+3]=0),g===!0&&(a.fromBufferAttribute(U,tt),N[X+O+4]=a.x,N[X+O+5]=a.y,N[X+O+6]=a.z,N[X+O+7]=0),m===!0&&(a.fromBufferAttribute(W,tt),N[X+O+8]=a.x,N[X+O+9]=a.y,N[X+O+10]=a.z,N[X+O+11]=W.itemSize===4?a.w:1)}}u={count:l,texture:L,size:new de(A,P)},n.set(o,u),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,e);else{let v=0;for(let m=0;m<d.length;m++)v+=d[m];const g=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $d(i,t,e,n){let a=new WeakMap;function r(c){const d=n.render.frame,h=c.geometry,l=t.get(c,h);if(a.get(l)!==d&&(t.update(l),a.set(l,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const u=c.skeleton;a.get(u)!==d&&(u.update(),a.set(u,d))}return l}function s(){a=new WeakMap}function o(c){const d=c.target;d.removeEventListener("dispose",o),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:s}}const hl=new Ge,ho=new sl(1,1),ul=new jo,dl=new vc,fl=new va,uo=[],fo=[],po=new Float32Array(16),mo=new Float32Array(9),vo=new Float32Array(4);function Oi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const a=t*e;let r=uo[a];if(r===void 0&&(r=new Float32Array(a),uo[a]=r),t!==0){n.toArray(r,0);for(let s=1,o=0;s!==t;++s)o+=e,i[s].toArray(r,o)}return r}function Ue(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=fo[t];e===void 0&&(e=new Int32Array(t),fo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function Qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;vo.set(n),i.uniformMatrix2fv(this.addr,!1,vo),Fe(e,n)}}function tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;mo.set(n),i.uniformMatrix3fv(this.addr,!1,mo),Fe(e,n)}}function ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ue(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ue(e,n))return;po.set(n),i.uniformMatrix4fv(this.addr,!1,po),Fe(e,n)}}function nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function of(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function uf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(ho.compareFunction=$o,r=ho):r=hl,e.setTexture2D(t||r,a)}function df(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture3D(t||dl,a)}function ff(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTextureCube(t||fl,a)}function pf(i,t,e){const n=this.cache,a=e.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),e.setTexture2DArray(t||ul,a)}function mf(i){switch(i){case 5126:return Zd;case 35664:return jd;case 35665:return Kd;case 35666:return Jd;case 35674:return Qd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return rf;case 35668:case 35672:return sf;case 35669:case 35673:return af;case 5125:return of;case 36294:return lf;case 36295:return cf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}function vf(i,t){i.uniform1fv(this.addr,t)}function gf(i,t){const e=Oi(t,this.size,2);i.uniform2fv(this.addr,e)}function _f(i,t){const e=Oi(t,this.size,3);i.uniform3fv(this.addr,e)}function xf(i,t){const e=Oi(t,this.size,4);i.uniform4fv(this.addr,e)}function yf(i,t){const e=Oi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mf(i,t){const e=Oi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ef(i,t){const e=Oi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sf(i,t){i.uniform1iv(this.addr,t)}function wf(i,t){i.uniform2iv(this.addr,t)}function bf(i,t){i.uniform3iv(this.addr,t)}function Af(i,t){i.uniform4iv(this.addr,t)}function Tf(i,t){i.uniform1uiv(this.addr,t)}function Cf(i,t){i.uniform2uiv(this.addr,t)}function Rf(i,t){i.uniform3uiv(this.addr,t)}function Pf(i,t){i.uniform4uiv(this.addr,t)}function Lf(i,t,e){const n=this.cache,a=t.length,r=Fr(e,a);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let s=0;s!==a;++s)e.setTexture2D(t[s]||hl,r[s])}function Df(i,t,e){const n=this.cache,a=t.length,r=Fr(e,a);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let s=0;s!==a;++s)e.setTexture3D(t[s]||dl,r[s])}function If(i,t,e){const n=this.cache,a=t.length,r=Fr(e,a);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let s=0;s!==a;++s)e.setTextureCube(t[s]||fl,r[s])}function Nf(i,t,e){const n=this.cache,a=t.length,r=Fr(e,a);Ue(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let s=0;s!==a;++s)e.setTexture2DArray(t[s]||ul,r[s])}function Uf(i){switch(i){case 5126:return vf;case 35664:return gf;case 35665:return _f;case 35666:return xf;case 35674:return yf;case 35675:return Mf;case 35676:return Ef;case 5124:case 35670:return Sf;case 35667:case 35671:return wf;case 35668:case 35672:return bf;case 35669:case 35673:return Af;case 5125:return Tf;case 36294:return Cf;case 36295:return Rf;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Nf}}class Ff{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=mf(e.type)}}class Bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Uf(e.type)}}class Of{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(t,e[o.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function go(i,t){i.seq.push(t),i.map[t.id]=t}function zf(i,t,e){const n=i.name,a=n.length;for(ps.lastIndex=0;;){const r=ps.exec(n),s=ps.lastIndex;let o=r[1];const c=r[2]==="]",d=r[3];if(c&&(o=o|0),d===void 0||d==="["&&s+2===a){go(e,d===void 0?new Ff(o,i,t):new Bf(o,i,t));break}else{let l=e.map[o];l===void 0&&(l=new Of(o),go(e,l)),e=l}}}class Pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=t.getActiveUniform(e,a),s=t.getUniformLocation(e,r.name);zf(r,s,this)}}setValue(t,e,n,a){const r=this.map[e];r!==void 0&&r.setValue(t,n,a)}setOptional(t,e,n){const a=e[n];a!==void 0&&this.setValue(t,n,a)}static upload(t,e,n,a){for(let r=0,s=e.length;r!==s;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,a)}}static seqWithValue(t,e){const n=[];for(let a=0,r=t.length;a!==r;++a){const s=t[a];s.id in e&&n.push(s)}return n}}function _o(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vf=37297;let Hf=0;function kf(i,t){const e=i.split(`
`),n=[],a=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===t?">":" "} ${o}: ${e[s]}`)}return n.join(`
`)}const xo=new ue;function Gf(i){ye._getMatrix(xo,ye.workingColorSpace,i);const t=`mat3( ${xo.elements.map(e=>e.toFixed(4))} )`;switch(ye.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=i.getShaderInfoLog(t).trim();if(n&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+a+`

`+kf(i.getShaderSource(t),s)}else return a}function Wf(i,t){const e=Gf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Xf(i,t){let e;switch(t){case Hl:e="Linear";break;case kl:e="Reinhard";break;case Gl:e="Cineon";break;case Wl:e="ACESFilmic";break;case ql:e="AgX";break;case Yl:e="Neutral";break;case Xl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Mr=new rt;function qf(){ye.getLuminanceCoefficients(Mr);const i=Mr.x.toFixed(4),t=Mr.y.toFixed(4),e=Mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xi).join(`
`)}function $f(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(t,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[s]={type:r.type,location:i.getAttribLocation(t,s),locationSize:o}}return e}function Xi(i){return i!==""}function Mo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function sa(i){return i.replace(jf,Jf)}const Kf=new Map;function Jf(i,t){let e=pe[t];if(e===void 0){const n=Kf.get(t);if(n!==void 0)e=pe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sa(e)}const Qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(Qf,tp)}function tp(i,t,e,n){let a="";for(let r=parseInt(t);r<parseInt(e);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function wo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ep(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Io?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function np(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ip(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function rp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case zl:t="ENVMAP_BLENDING_MIX";break;case Vl:t="ENVMAP_BLENDING_ADD";break}return t}function sp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ap(i,t,e,n){const a=i.getContext(),r=e.defines;let s=e.vertexShader,o=e.fragmentShader;const c=ep(e),d=np(e),h=ip(e),l=rp(e),u=sp(e),p=Yf(e),v=$f(r),g=a.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Xi).join(`
`),f.length>0&&(f+=`
`)):(m=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xi).join(`
`),f=[wo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?pe.tonemapping_pars_fragment:"",e.toneMapping!==zn?Xf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,Wf("linearToOutputTexel",e.outputColorSpace),qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xi).join(`
`)),s=sa(s),s=Mo(s,e),s=Eo(s,e),o=sa(o),o=Mo(o,e),o=Eo(o,e),s=So(s),o=So(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=x+m+s,_=x+f+o,A=_o(a,a.VERTEX_SHADER,M),P=_o(a,a.FRAGMENT_SHADER,_);a.attachShader(g,A),a.attachShader(g,P),e.index0AttributeName!==void 0?a.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(g,0,"position"),a.linkProgram(g);function N(b){if(i.debug.checkShaderErrors){const B=a.getProgramInfoLog(g).trim(),U=a.getShaderInfoLog(A).trim(),W=a.getShaderInfoLog(P).trim();let X=!0,tt=!0;if(a.getProgramParameter(g,a.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,g,A,P);else{const O=yo(a,A,"vertex"),D=yo(a,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(g,a.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+O+`
`+D)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(U===""||W==="")&&(tt=!1);tt&&(b.diagnostics={runnable:X,programLog:B,vertexShader:{log:U,prefix:m},fragmentShader:{log:W,prefix:f}})}a.deleteShader(A),a.deleteShader(P),L=new Pr(a,g),S=Zf(a,g)}let L;this.getUniforms=function(){return L===void 0&&N(this),L};let S;this.getAttributes=function(){return S===void 0&&N(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=a.getProgramParameter(g,Vf)),y},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=P,this}let op=0;class lp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,a=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new cp(t),e.set(t,n)),n}}class cp{constructor(t){this.id=op++,this.code=t,this.usedTimes=0}}function hp(i,t,e,n,a,r,s){const o=new Jo,c=new lp,d=new Set,h=[],l=a.logarithmicDepthBuffer,u=a.vertexTextures;let p=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return d.add(S),S===0?"uv":`uv${S}`}function m(S,y,b,B,U){const W=B.fog,X=U.geometry,tt=S.isMeshStandardMaterial?B.environment:null,O=(S.isMeshStandardMaterial?e:t).get(S.envMap||tt),D=O&&O.mapping===Nr?O.image.height:null,Q=v[S.type];S.precision!==null&&(p=a.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const K=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=K!==void 0?K.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let z,T,C,H;if(Q){const ae=un[Q];z=ae.vertexShader,T=ae.fragmentShader}else z=S.vertexShader,T=S.fragmentShader,c.update(S),C=c.getVertexShaderID(S),H=c.getFragmentShaderID(S);const Z=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),q=U.isInstancedMesh===!0,nt=U.isBatchedMesh===!0,mt=!!S.map,Lt=!!S.matcap,vt=!!O,I=!!S.aoMap,dt=!!S.lightMap,ht=!!S.bumpMap,qt=!!S.normalMap,yt=!!S.displacementMap,ne=!!S.emissiveMap,pt=!!S.metalnessMap,R=!!S.roughnessMap,E=S.anisotropy>0,$=S.clearcoat>0,lt=S.dispersion>0,ct=S.iridescence>0,at=S.sheen>0,St=S.transmission>0,wt=E&&!!S.anisotropyMap,Ft=$&&!!S.clearcoatMap,le=$&&!!S.clearcoatNormalMap,Et=$&&!!S.clearcoatRoughnessMap,kt=ct&&!!S.iridescenceMap,jt=ct&&!!S.iridescenceThicknessMap,Jt=at&&!!S.sheenColorMap,Xt=at&&!!S.sheenRoughnessMap,ce=!!S.specularMap,ie=!!S.specularColorMap,ve=!!S.specularIntensityMap,G=St&&!!S.transmissionMap,Pt=St&&!!S.thicknessMap,ot=!!S.gradientMap,ft=!!S.alphaMap,zt=S.alphaTest>0,Ot=!!S.alphaHash,se=!!S.extensions;let Ee=zn;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Re={shaderID:Q,shaderType:S.type,shaderName:S.name,vertexShader:z,fragmentShader:T,defines:S.defines,customVertexShaderID:C,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:nt,batchingColor:nt&&U._colorsTexture!==null,instancing:q,instancingColor:q&&U.instanceColor!==null,instancingMorph:q&&U.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Ni,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:Lt,envMap:vt,envMapMode:vt&&O.mapping,envMapCubeUVHeight:D,aoMap:I,lightMap:dt,bumpMap:ht,normalMap:qt,displacementMap:u&&yt,emissiveMap:ne,normalMapObjectSpace:qt&&S.normalMapType===Kl,normalMapTangentSpace:qt&&S.normalMapType===Yo,metalnessMap:pt,roughnessMap:R,anisotropy:E,anisotropyMap:wt,clearcoat:$,clearcoatMap:Ft,clearcoatNormalMap:le,clearcoatRoughnessMap:Et,dispersion:lt,iridescence:ct,iridescenceMap:kt,iridescenceThicknessMap:jt,sheen:at,sheenColorMap:Jt,sheenRoughnessMap:Xt,specularMap:ce,specularColorMap:ie,specularIntensityMap:ve,transmission:St,transmissionMap:G,thicknessMap:Pt,gradientMap:ot,opaque:S.transparent===!1&&S.blending===bi&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:zt,alphaHash:Ot,combine:S.combine,mapUv:mt&&g(S.map.channel),aoMapUv:I&&g(S.aoMap.channel),lightMapUv:dt&&g(S.lightMap.channel),bumpMapUv:ht&&g(S.bumpMap.channel),normalMapUv:qt&&g(S.normalMap.channel),displacementMapUv:yt&&g(S.displacementMap.channel),emissiveMapUv:ne&&g(S.emissiveMap.channel),metalnessMapUv:pt&&g(S.metalnessMap.channel),roughnessMapUv:R&&g(S.roughnessMap.channel),anisotropyMapUv:wt&&g(S.anisotropyMap.channel),clearcoatMapUv:Ft&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&g(S.sheenRoughnessMap.channel),specularMapUv:ce&&g(S.specularMap.channel),specularColorMapUv:ie&&g(S.specularColorMap.channel),specularIntensityMapUv:ve&&g(S.specularIntensityMap.channel),transmissionMapUv:G&&g(S.transmissionMap.channel),thicknessMapUv:Pt&&g(S.thicknessMap.channel),alphaMapUv:ft&&g(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(qt||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(mt||ft),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:l,reverseDepthBuffer:et,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:J,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&ye.getTransfer(S.map.colorSpace)===Se,decodeVideoTextureEmissive:ne&&S.emissiveMap.isVideoTexture===!0&&ye.getTransfer(S.emissiveMap.colorSpace)===Se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===Ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&S.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Re.vertexUv1s=d.has(1),Re.vertexUv2s=d.has(2),Re.vertexUv3s=d.has(3),d.clear(),Re}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const b in S.defines)y.push(b),y.push(S.defines[b]);return S.isRawShaderMaterial===!1&&(x(y,S),M(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function x(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function M(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){const y=v[S.type];let b;if(y){const B=un[y];b=Rc.clone(B.uniforms)}else b=S.uniforms;return b}function A(S,y){let b;for(let B=0,U=h.length;B<U;B++){const W=h[B];if(W.cacheKey===y){b=W,++b.usedTimes;break}}return b===void 0&&(b=new ap(i,y,S,r),h.push(b)),b}function P(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function N(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:P,releaseShaderCache:N,programs:h,dispose:L}}function up(){let i=new WeakMap;function t(s){return i.has(s)}function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:a,dispose:r}}function dp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ao(){const i=[];let t=0;const e=[],n=[],a=[];function r(){t=0,e.length=0,n.length=0,a.length=0}function s(l,u,p,v,g,m){let f=i[t];return f===void 0?(f={id:l.id,object:l,geometry:u,material:p,groupOrder:v,renderOrder:l.renderOrder,z:g,group:m},i[t]=f):(f.id=l.id,f.object=l,f.geometry=u,f.material=p,f.groupOrder=v,f.renderOrder=l.renderOrder,f.z=g,f.group=m),t++,f}function o(l,u,p,v,g,m){const f=s(l,u,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?a.push(f):e.push(f)}function c(l,u,p,v,g,m){const f=s(l,u,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?a.unshift(f):e.unshift(f)}function d(l,u){e.length>1&&e.sort(l||dp),n.length>1&&n.sort(u||bo),a.length>1&&a.sort(u||bo)}function h(){for(let l=t,u=i.length;l<u;l++){const p=i[l];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:d}}function fp(){let i=new WeakMap;function t(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ao,i.set(n,[s])):a>=r.length?(s=new Ao,r.push(s)):s=r[a],s}function e(){i=new WeakMap}return{get:t,dispose:e}}function pp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new rt,color:new Me};break;case"SpotLight":e={position:new rt,direction:new rt,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new rt,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new rt,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return i[t.id]=e,e}}}function mp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vp=0;function gp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _p(i){const t=new pp,e=mp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new rt);const a=new rt,r=new Le,s=new Le;function o(d){let h=0,l=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,x=0,M=0,_=0,A=0,P=0,N=0;d.sort(gp);for(let S=0,y=d.length;S<y;S++){const b=d[S],B=b.color,U=b.intensity,W=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=B.r*U,l+=B.g*U,u+=B.b*U;else if(b.isLightProbe){for(let tt=0;tt<9;tt++)n.probe[tt].addScaledVector(b.sh.coefficients[tt],U);N++}else if(b.isDirectionalLight){const tt=t.get(b);if(tt.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const O=b.shadow,D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=b.shadow.matrix,x++}n.directional[p]=tt,p++}else if(b.isSpotLight){const tt=t.get(b);tt.position.setFromMatrixPosition(b.matrixWorld),tt.color.copy(B).multiplyScalar(U),tt.distance=W,tt.coneCos=Math.cos(b.angle),tt.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),tt.decay=b.decay,n.spot[g]=tt;const O=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,O.updateMatrices(b),b.castShadow&&P++),n.spotLightMatrix[g]=O.matrix,b.castShadow){const D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,n.spotShadow[g]=D,n.spotShadowMap[g]=X,_++}g++}else if(b.isRectAreaLight){const tt=t.get(b);tt.color.copy(B).multiplyScalar(U),tt.halfWidth.set(b.width*.5,0,0),tt.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=tt,m++}else if(b.isPointLight){const tt=t.get(b);if(tt.color.copy(b.color).multiplyScalar(b.intensity),tt.distance=b.distance,tt.decay=b.decay,b.castShadow){const O=b.shadow,D=e.get(b);D.shadowIntensity=O.intensity,D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,n.pointShadow[v]=D,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=b.shadow.matrix,M++}n.point[v]=tt,v++}else if(b.isHemisphereLight){const tt=t.get(b);tt.skyColor.copy(b.color).multiplyScalar(U),tt.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[f]=tt,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ht.LTC_FLOAT_1,n.rectAreaLTC2=Ht.LTC_FLOAT_2):(n.rectAreaLTC1=Ht.LTC_HALF_1,n.rectAreaLTC2=Ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=l,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==x||L.numPointShadows!==M||L.numSpotShadows!==_||L.numSpotMaps!==A||L.numLightProbes!==N)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+A-P,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=N,L.directionalLength=p,L.pointLength=v,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=M,L.numSpotShadows=_,L.numSpotMaps=A,L.numLightProbes=N,n.version=vp++)}function c(d,h){let l=0,u=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,x=d.length;f<x;f++){const M=d[f];if(M.isDirectionalLight){const _=n.directional[l];_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),l++}else if(M.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(a),_.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),s.identity(),r.copy(M.matrixWorld),r.premultiply(m),s.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),v++}else if(M.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function To(i){const t=new _p(i),e=[],n=[];function a(h){d.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function s(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:d,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function xp(i){let t=new WeakMap;function e(a,r=0){const s=t.get(a);let o;return s===void 0?(o=new To(i),t.set(a,[o])):r>=s.length?(o=new To(i),s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ep(i,t,e){let n=new ga;const a=new de,r=new de,s=new Pe,o=new Oc({depthPacking:jl}),c=new zc,d={},h=e.maxTextureSize,l={[Vn]:Ze,[Ze]:Vn,[wn]:wn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:yp,fragmentShader:Mp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new nn(v,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Io;let f=this.type;this.render=function(P,N,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(On),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const U=f!==Sn&&this.type===Sn,W=f===Sn&&this.type!==Sn;for(let X=0,tt=P.length;X<tt;X++){const O=P[X],D=O.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;a.copy(D.mapSize);const Q=D.getFrameExtents();if(a.multiply(Q),r.copy(D.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/Q.x),a.x=r.x*Q.x,D.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/Q.y),a.y=r.y*Q.y,D.mapSize.y=r.y)),D.map===null||U===!0||W===!0){const F=this.type!==Sn?{minFilter:cn,magFilter:cn}:{};D.map!==null&&D.map.dispose(),D.map=new ri(a.x,a.y,F),D.map.texture.name=O.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();const K=D.getViewportCount();for(let F=0;F<K;F++){const J=D.getViewport(F);s.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),B.viewport(s),D.updateMatrices(O,F),n=D.getFrustum(),_(N,L,D.camera,O,this.type)}D.isPointLightShadow!==!0&&this.type===Sn&&x(D,L),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,b)};function x(P,N){const L=t.update(g);u.defines.VSM_SAMPLES!==P.blurSamples&&(u.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ri(a.x,a.y)),u.uniforms.shadow_pass.value=P.map.texture,u.uniforms.resolution.value=P.mapSize,u.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(N,null,L,u,g,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(N,null,L,p,g,null)}function M(P,N,L,S){let y=null;const b=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)y=b;else if(y=L.isPointLight===!0?c:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const B=y.uuid,U=N.uuid;let W=d[B];W===void 0&&(W={},d[B]=W);let X=W[U];X===void 0&&(X=y.clone(),W[U]=X,N.addEventListener("dispose",A)),y=X}if(y.visible=N.visible,y.wireframe=N.wireframe,S===Sn?y.side=N.shadowSide!==null?N.shadowSide:N.side:y.side=N.shadowSide!==null?N.shadowSide:l[N.side],y.alphaMap=N.alphaMap,y.alphaTest=N.alphaTest,y.map=N.map,y.clipShadows=N.clipShadows,y.clippingPlanes=N.clippingPlanes,y.clipIntersection=N.clipIntersection,y.displacementMap=N.displacementMap,y.displacementScale=N.displacementScale,y.displacementBias=N.displacementBias,y.wireframeLinewidth=N.wireframeLinewidth,y.linewidth=N.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=L}return y}function _(P,N,L,S,y){if(P.visible===!1)return;if(P.layers.test(N.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&y===Sn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const U=t.update(P),W=P.material;if(Array.isArray(W)){const X=U.groups;for(let tt=0,O=X.length;tt<O;tt++){const D=X[tt],Q=W[D.materialIndex];if(Q&&Q.visible){const K=M(P,Q,S,y);P.onBeforeShadow(i,P,N,L,U,K,D),i.renderBufferDirect(L,null,U,K,P,D),P.onAfterShadow(i,P,N,L,U,K,D)}}}else if(W.visible){const X=M(P,W,S,y);P.onBeforeShadow(i,P,N,L,U,X,null),i.renderBufferDirect(L,null,U,X,P,null),P.onAfterShadow(i,P,N,L,U,X,null)}}const B=P.children;for(let U=0,W=B.length;U<W;U++)_(B[U],N,L,S,y)}function A(P){P.target.removeEventListener("dispose",A);for(const L in d){const S=d[L],y=P.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const Sp={[Ms]:Es,[Ss]:As,[ws]:Ts,[Ri]:bs,[Es]:Ms,[As]:Ss,[Ts]:ws,[bs]:Ri};function wp(i,t){function e(){let G=!1;const Pt=new Pe;let ot=null;const ft=new Pe(0,0,0,0);return{setMask:function(zt){ot!==zt&&!G&&(i.colorMask(zt,zt,zt,zt),ot=zt)},setLocked:function(zt){G=zt},setClear:function(zt,Ot,se,Ee,Re){Re===!0&&(zt*=Ee,Ot*=Ee,se*=Ee),Pt.set(zt,Ot,se,Ee),ft.equals(Pt)===!1&&(i.clearColor(zt,Ot,se,Ee),ft.copy(Pt))},reset:function(){G=!1,ot=null,ft.set(-1,0,0,0)}}}function n(){let G=!1,Pt=!1,ot=null,ft=null,zt=null;return{setReversed:function(Ot){if(Pt!==Ot){const se=t.get("EXT_clip_control");Pt?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);const Ee=zt;zt=null,this.setClear(Ee)}Pt=Ot},getReversed:function(){return Pt},setTest:function(Ot){Ot?Z(i.DEPTH_TEST):et(i.DEPTH_TEST)},setMask:function(Ot){ot!==Ot&&!G&&(i.depthMask(Ot),ot=Ot)},setFunc:function(Ot){if(Pt&&(Ot=Sp[Ot]),ft!==Ot){switch(Ot){case Ms:i.depthFunc(i.NEVER);break;case Es:i.depthFunc(i.ALWAYS);break;case Ss:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case ws:i.depthFunc(i.EQUAL);break;case bs:i.depthFunc(i.GEQUAL);break;case As:i.depthFunc(i.GREATER);break;case Ts:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Ot}},setLocked:function(Ot){G=Ot},setClear:function(Ot){zt!==Ot&&(Pt&&(Ot=1-Ot),i.clearDepth(Ot),zt=Ot)},reset:function(){G=!1,ot=null,ft=null,zt=null,Pt=!1}}}function a(){let G=!1,Pt=null,ot=null,ft=null,zt=null,Ot=null,se=null,Ee=null,Re=null;return{setTest:function(ae){G||(ae?Z(i.STENCIL_TEST):et(i.STENCIL_TEST))},setMask:function(ae){Pt!==ae&&!G&&(i.stencilMask(ae),Pt=ae)},setFunc:function(ae,st,ut){(ot!==ae||ft!==st||zt!==ut)&&(i.stencilFunc(ae,st,ut),ot=ae,ft=st,zt=ut)},setOp:function(ae,st,ut){(Ot!==ae||se!==st||Ee!==ut)&&(i.stencilOp(ae,st,ut),Ot=ae,se=st,Ee=ut)},setLocked:function(ae){G=ae},setClear:function(ae){Re!==ae&&(i.clearStencil(ae),Re=ae)},reset:function(){G=!1,Pt=null,ot=null,ft=null,zt=null,Ot=null,se=null,Ee=null,Re=null}}}const r=new e,s=new n,o=new a,c=new WeakMap,d=new WeakMap;let h={},l={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,M=null,_=null,A=null,P=null,N=new Me(0,0,0),L=0,S=!1,y=null,b=null,B=null,U=null,W=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,O=0;const D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(D)[1]),tt=O>=1):D.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),tt=O>=2);let Q=null,K={};const F=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),z=new Pe().fromArray(F),T=new Pe().fromArray(J);function C(G,Pt,ot,ft){const zt=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(G,Ot),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<ot;se++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Pt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,zt):i.texImage2D(Pt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,zt);return Ot}const H={};H[i.TEXTURE_2D]=C(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=C(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=C(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=C(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),s.setFunc(Ri),ht(!1),qt(Ta),Z(i.CULL_FACE),I(On);function Z(G){h[G]!==!0&&(i.enable(G),h[G]=!0)}function et(G){h[G]!==!1&&(i.disable(G),h[G]=!1)}function q(G,Pt){return l[G]!==Pt?(i.bindFramebuffer(G,Pt),l[G]=Pt,G===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=Pt),G===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=Pt),!0):!1}function nt(G,Pt){let ot=p,ft=!1;if(G){ot=u.get(Pt),ot===void 0&&(ot=[],u.set(Pt,ot));const zt=G.textures;if(ot.length!==zt.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,se=zt.length;Ot<se;Ot++)ot[Ot]=i.COLOR_ATTACHMENT0+Ot;ot.length=zt.length,ft=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,ft=!0);ft&&i.drawBuffers(ot)}function mt(G){return v!==G?(i.useProgram(G),v=G,!0):!1}const Lt={[Qn]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[Sl]:i.FUNC_REVERSE_SUBTRACT};Lt[wl]=i.MIN,Lt[bl]=i.MAX;const vt={[Al]:i.ZERO,[Tl]:i.ONE,[Cl]:i.SRC_COLOR,[xs]:i.SRC_ALPHA,[Nl]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[ys]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Ul]:i.CONSTANT_COLOR,[Fl]:i.ONE_MINUS_CONSTANT_COLOR,[Bl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function I(G,Pt,ot,ft,zt,Ot,se,Ee,Re,ae){if(G===On){g===!0&&(et(i.BLEND),g=!1);return}if(g===!1&&(Z(i.BLEND),g=!0),G!==Ml){if(G!==m||ae!==S){if((f!==Qn||_!==Qn)&&(i.blendEquation(i.FUNC_ADD),f=Qn,_=Qn),ae)switch(G){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.ONE,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ca:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,M=null,A=null,P=null,N.set(0,0,0),L=0,m=G,S=ae}return}zt=zt||Pt,Ot=Ot||ot,se=se||ft,(Pt!==f||zt!==_)&&(i.blendEquationSeparate(Lt[Pt],Lt[zt]),f=Pt,_=zt),(ot!==x||ft!==M||Ot!==A||se!==P)&&(i.blendFuncSeparate(vt[ot],vt[ft],vt[Ot],vt[se]),x=ot,M=ft,A=Ot,P=se),(Ee.equals(N)===!1||Re!==L)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Re),N.copy(Ee),L=Re),m=G,S=!1}function dt(G,Pt){G.side===wn?et(i.CULL_FACE):Z(i.CULL_FACE);let ot=G.side===Ze;Pt&&(ot=!ot),ht(ot),G.blending===bi&&G.transparent===!1?I(On):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const ft=G.stencilWrite;o.setTest(ft),ft&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ne(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):et(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){y!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),y=G)}function qt(G){G!==xl?(Z(i.CULL_FACE),G!==b&&(G===Ta?i.cullFace(i.BACK):G===yl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):et(i.CULL_FACE),b=G}function yt(G){G!==B&&(tt&&i.lineWidth(G),B=G)}function ne(G,Pt,ot){G?(Z(i.POLYGON_OFFSET_FILL),(U!==Pt||W!==ot)&&(i.polygonOffset(Pt,ot),U=Pt,W=ot)):et(i.POLYGON_OFFSET_FILL)}function pt(G){G?Z(i.SCISSOR_TEST):et(i.SCISSOR_TEST)}function R(G){G===void 0&&(G=i.TEXTURE0+X-1),Q!==G&&(i.activeTexture(G),Q=G)}function E(G,Pt,ot){ot===void 0&&(Q===null?ot=i.TEXTURE0+X-1:ot=Q);let ft=K[ot];ft===void 0&&(ft={type:void 0,texture:void 0},K[ot]=ft),(ft.type!==G||ft.texture!==Pt)&&(Q!==ot&&(i.activeTexture(ot),Q=ot),i.bindTexture(G,Pt||H[G]),ft.type=G,ft.texture=Pt)}function $(){const G=K[Q];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function lt(){try{i.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{i.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{i.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function wt(){try{i.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function le(){try{i.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{i.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function kt(){try{i.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(){try{i.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Jt(G){z.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),z.copy(G))}function Xt(G){T.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),T.copy(G))}function ce(G,Pt){let ot=d.get(Pt);ot===void 0&&(ot=new WeakMap,d.set(Pt,ot));let ft=ot.get(G);ft===void 0&&(ft=i.getUniformBlockIndex(Pt,G.name),ot.set(G,ft))}function ie(G,Pt){const ft=d.get(Pt).get(G);c.get(Pt)!==ft&&(i.uniformBlockBinding(Pt,ft,G.__bindingPointIndex),c.set(Pt,ft))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,K={},l={},u=new WeakMap,p=[],v=null,g=!1,m=null,f=null,x=null,M=null,_=null,A=null,P=null,N=new Me(0,0,0),L=0,S=!1,y=null,b=null,B=null,U=null,W=null,z.set(0,0,i.canvas.width,i.canvas.height),T.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Z,disable:et,bindFramebuffer:q,drawBuffers:nt,useProgram:mt,setBlending:I,setMaterial:dt,setFlipSided:ht,setCullFace:qt,setLineWidth:yt,setPolygonOffset:ne,setScissorTest:pt,activeTexture:R,bindTexture:E,unbindTexture:$,compressedTexImage2D:lt,compressedTexImage3D:ct,texImage2D:kt,texImage3D:jt,updateUBOMapping:ce,uniformBlockBinding:ie,texStorage2D:le,texStorage3D:Et,texSubImage2D:at,texSubImage3D:St,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ft,scissor:Jt,viewport:Xt,reset:ve}}function bp(i,t,e,n,a,r,s){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new de,h=new WeakMap;let l;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return p?new OffscreenCanvas(R,E):Yi("canvas")}function g(R,E,$){let lt=1;const ct=pt(R);if((ct.width>$||ct.height>$)&&(lt=$/Math.max(ct.width,ct.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(lt*ct.width),St=Math.floor(lt*ct.height);l===void 0&&(l=v(at,St));const wt=E?v(at,St):l;return wt.width=at,wt.height=St,wt.getContext("2d").drawImage(R,0,0,at,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+at+"x"+St+")."),wt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,E,$,lt,ct=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=E;if(E===i.RED&&($===i.FLOAT&&(at=i.R32F),$===i.HALF_FLOAT&&(at=i.R16F),$===i.UNSIGNED_BYTE&&(at=i.R8)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(at=i.R8UI),$===i.UNSIGNED_SHORT&&(at=i.R16UI),$===i.UNSIGNED_INT&&(at=i.R32UI),$===i.BYTE&&(at=i.R8I),$===i.SHORT&&(at=i.R16I),$===i.INT&&(at=i.R32I)),E===i.RG&&($===i.FLOAT&&(at=i.RG32F),$===i.HALF_FLOAT&&(at=i.RG16F),$===i.UNSIGNED_BYTE&&(at=i.RG8)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(at=i.RG8UI),$===i.UNSIGNED_SHORT&&(at=i.RG16UI),$===i.UNSIGNED_INT&&(at=i.RG32UI),$===i.BYTE&&(at=i.RG8I),$===i.SHORT&&(at=i.RG16I),$===i.INT&&(at=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(at=i.RGB8UI),$===i.UNSIGNED_SHORT&&(at=i.RGB16UI),$===i.UNSIGNED_INT&&(at=i.RGB32UI),$===i.BYTE&&(at=i.RGB8I),$===i.SHORT&&(at=i.RGB16I),$===i.INT&&(at=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),$===i.UNSIGNED_INT&&(at=i.RGBA32UI),$===i.BYTE&&(at=i.RGBA8I),$===i.SHORT&&(at=i.RGBA16I),$===i.INT&&(at=i.RGBA32I)),E===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),E===i.RGBA){const St=ct?Lr:ye.getTransfer(lt);$===i.FLOAT&&(at=i.RGBA32F),$===i.HALF_FLOAT&&(at=i.RGBA16F),$===i.UNSIGNED_BYTE&&(at=St===Se?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function _(R,E){let $;return R?E===null||E===ii||E===Di?$=i.DEPTH24_STENCIL8:E===bn?$=i.DEPTH32F_STENCIL8:E===qi&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ii||E===Di?$=i.DEPTH_COMPONENT24:E===bn?$=i.DEPTH_COMPONENT32F:E===qi&&($=i.DEPTH_COMPONENT16),$}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==fn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function P(R){const E=R.target;E.removeEventListener("dispose",P),L(E),E.isVideoTexture&&h.delete(E)}function N(R){const E=R.target;E.removeEventListener("dispose",N),y(E)}function L(R){const E=n.get(R);if(E.__webglInit===void 0)return;const $=R.source,lt=u.get($);if(lt){const ct=lt[E.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(R),Object.keys(lt).length===0&&u.delete($)}n.remove(R)}function S(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const $=R.source,lt=u.get($);delete lt[E.__cacheKey],s.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(E.__webglFramebuffer[lt]))for(let ct=0;ct<E.__webglFramebuffer[lt].length;ct++)i.deleteFramebuffer(E.__webglFramebuffer[lt][ct]);else i.deleteFramebuffer(E.__webglFramebuffer[lt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[lt])}else{if(Array.isArray(E.__webglFramebuffer))for(let lt=0;lt<E.__webglFramebuffer.length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[lt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let lt=0;lt<E.__webglColorRenderbuffer.length;lt++)E.__webglColorRenderbuffer[lt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[lt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const $=R.textures;for(let lt=0,ct=$.length;lt<ct;lt++){const at=n.get($[lt]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),s.memory.textures--),n.remove($[lt])}n.remove(R)}let b=0;function B(){b=0}function U(){const R=b;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),b+=1,R}function W(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function X(R,E){const $=n.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){const lt=R.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T($,R,E);return}}e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function tt(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){T($,R,E);return}e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function O(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){T($,R,E);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function D(R,E){const $=n.get(R);if(R.version>0&&$.__version!==R.version){C($,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}const Q={[Ps]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[Ls]:i.MIRRORED_REPEAT},K={[cn]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[tr]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},F={[Jl]:i.NEVER,[rc]:i.ALWAYS,[Ql]:i.LESS,[$o]:i.LEQUAL,[tc]:i.EQUAL,[ic]:i.GEQUAL,[ec]:i.GREATER,[nc]:i.NOTEQUAL};function J(R,E){if(E.type===bn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===fn||E.magFilter===zr||E.magFilter===tr||E.magFilter===ni||E.minFilter===fn||E.minFilter===zr||E.minFilter===tr||E.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Q[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,K[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==tr&&E.minFilter!==ni||E.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function z(R,E){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",P));const lt=E.source;let ct=u.get(lt);ct===void 0&&(ct={},u.set(lt,ct));const at=W(E);if(at!==R.__cacheKey){ct[at]===void 0&&(ct[at]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,$=!0),ct[at].usedTimes++;const St=ct[R.__cacheKey];St!==void 0&&(ct[R.__cacheKey].usedTimes--,St.usedTimes===0&&S(E)),R.__cacheKey=at,R.__webglTexture=ct[at].texture}return $}function T(R,E,$){let lt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(lt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(lt=i.TEXTURE_3D);const ct=z(R,E),at=E.source;e.bindTexture(lt,R.__webglTexture,i.TEXTURE0+$);const St=n.get(at);if(at.version!==St.__version||ct===!0){e.activeTexture(i.TEXTURE0+$);const wt=ye.getPrimaries(ye.workingColorSpace),Ft=E.colorSpace===Bn?null:ye.getPrimaries(E.colorSpace),le=E.colorSpace===Bn||wt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let Et=g(E.image,!1,a.maxTextureSize);Et=ne(E,Et);const kt=r.convert(E.format,E.colorSpace),jt=r.convert(E.type);let Jt=M(E.internalFormat,kt,jt,E.colorSpace,E.isVideoTexture);J(lt,E);let Xt;const ce=E.mipmaps,ie=E.isVideoTexture!==!0,ve=St.__version===void 0||ct===!0,G=at.dataReady,Pt=A(E,Et);if(E.isDepthTexture)Jt=_(E.format===Ii,E.type),ve&&(ie?e.texStorage2D(i.TEXTURE_2D,1,Jt,Et.width,Et.height):e.texImage2D(i.TEXTURE_2D,0,Jt,Et.width,Et.height,0,kt,jt,null));else if(E.isDataTexture)if(ce.length>0){ie&&ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Jt,ce[0].width,ce[0].height);for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,jt,Xt.data):e.texImage2D(i.TEXTURE_2D,ot,Jt,Xt.width,Xt.height,0,kt,jt,Xt.data);E.generateMipmaps=!1}else ie?(ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Jt,Et.width,Et.height),G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et.width,Et.height,kt,jt,Et.data)):e.texImage2D(i.TEXTURE_2D,0,Jt,Et.width,Et.height,0,kt,jt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Jt,ce[0].width,ce[0].height,Et.depth);for(let ot=0,ft=ce.length;ot<ft;ot++)if(Xt=ce[ot],E.format!==ln)if(kt!==null)if(ie){if(G)if(E.layerUpdates.size>0){const zt=no(Xt.width,Xt.height,E.format,E.type);for(const Ot of E.layerUpdates){const se=Xt.data.subarray(Ot*zt/Xt.data.BYTES_PER_ELEMENT,(Ot+1)*zt/Xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,Ot,Xt.width,Xt.height,1,kt,se)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,Et.depth,kt,Xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,Jt,Xt.width,Xt.height,Et.depth,0,Xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?G&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,Xt.width,Xt.height,Et.depth,kt,jt,Xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,Jt,Xt.width,Xt.height,Et.depth,0,kt,jt,Xt.data)}else{ie&&ve&&e.texStorage2D(i.TEXTURE_2D,Pt,Jt,ce[0].width,ce[0].height);for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],E.format!==ln?kt!==null?ie?G&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,Xt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,Jt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,Xt.width,Xt.height,kt,jt,Xt.data):e.texImage2D(i.TEXTURE_2D,ot,Jt,Xt.width,Xt.height,0,kt,jt,Xt.data)}else if(E.isDataArrayTexture)if(ie){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,Jt,Et.width,Et.height,Et.depth),G)if(E.layerUpdates.size>0){const ot=no(Et.width,Et.height,E.format,E.type);for(const ft of E.layerUpdates){const zt=Et.data.subarray(ft*ot/Et.data.BYTES_PER_ELEMENT,(ft+1)*ot/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,Et.width,Et.height,1,kt,jt,zt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,kt,jt,Et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Jt,Et.width,Et.height,Et.depth,0,kt,jt,Et.data);else if(E.isData3DTexture)ie?(ve&&e.texStorage3D(i.TEXTURE_3D,Pt,Jt,Et.width,Et.height,Et.depth),G&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,kt,jt,Et.data)):e.texImage3D(i.TEXTURE_3D,0,Jt,Et.width,Et.height,Et.depth,0,kt,jt,Et.data);else if(E.isFramebufferTexture){if(ve)if(ie)e.texStorage2D(i.TEXTURE_2D,Pt,Jt,Et.width,Et.height);else{let ot=Et.width,ft=Et.height;for(let zt=0;zt<Pt;zt++)e.texImage2D(i.TEXTURE_2D,zt,Jt,ot,ft,0,kt,jt,null),ot>>=1,ft>>=1}}else if(ce.length>0){if(ie&&ve){const ot=pt(ce[0]);e.texStorage2D(i.TEXTURE_2D,Pt,Jt,ot.width,ot.height)}for(let ot=0,ft=ce.length;ot<ft;ot++)Xt=ce[ot],ie?G&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,kt,jt,Xt):e.texImage2D(i.TEXTURE_2D,ot,Jt,kt,jt,Xt);E.generateMipmaps=!1}else if(ie){if(ve){const ot=pt(Et);e.texStorage2D(i.TEXTURE_2D,Pt,Jt,ot.width,ot.height)}G&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,kt,jt,Et)}else e.texImage2D(i.TEXTURE_2D,0,Jt,kt,jt,Et);m(E)&&f(lt),St.__version=at.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function C(R,E,$){if(E.image.length!==6)return;const lt=z(R,E),ct=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+$);const at=n.get(ct);if(ct.version!==at.__version||lt===!0){e.activeTexture(i.TEXTURE0+$);const St=ye.getPrimaries(ye.workingColorSpace),wt=E.colorSpace===Bn?null:ye.getPrimaries(E.colorSpace),Ft=E.colorSpace===Bn||St===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,kt=[];for(let ft=0;ft<6;ft++)!le&&!Et?kt[ft]=g(E.image[ft],!0,a.maxCubemapSize):kt[ft]=Et?E.image[ft].image:E.image[ft],kt[ft]=ne(E,kt[ft]);const jt=kt[0],Jt=r.convert(E.format,E.colorSpace),Xt=r.convert(E.type),ce=M(E.internalFormat,Jt,Xt,E.colorSpace),ie=E.isVideoTexture!==!0,ve=at.__version===void 0||lt===!0,G=ct.dataReady;let Pt=A(E,jt);J(i.TEXTURE_CUBE_MAP,E);let ot;if(le){ie&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ce,jt.width,jt.height);for(let ft=0;ft<6;ft++){ot=kt[ft].mipmaps;for(let zt=0;zt<ot.length;zt++){const Ot=ot[zt];E.format!==ln?Jt!==null?ie?G&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ot.width,Ot.height,Jt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ot.width,Ot.height,Jt,Xt,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,ce,Ot.width,Ot.height,0,Jt,Xt,Ot.data)}}}else{if(ot=E.mipmaps,ie&&ve){ot.length>0&&Pt++;const ft=pt(kt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,ce,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Et){ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,kt[ft].width,kt[ft].height,Jt,Xt,kt[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,kt[ft].width,kt[ft].height,0,Jt,Xt,kt[ft].data);for(let zt=0;zt<ot.length;zt++){const se=ot[zt].image[ft].image;ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,se.width,se.height,Jt,Xt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,se.width,se.height,0,Jt,Xt,se.data)}}else{ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Jt,Xt,kt[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,ce,Jt,Xt,kt[ft]);for(let zt=0;zt<ot.length;zt++){const Ot=ot[zt];ie?G&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Jt,Xt,Ot.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,ce,Jt,Xt,Ot.image[ft])}}}m(E)&&f(i.TEXTURE_CUBE_MAP),at.__version=ct.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function H(R,E,$,lt,ct,at){const St=r.convert($.format,$.colorSpace),wt=r.convert($.type),Ft=M($.internalFormat,St,wt,$.colorSpace),le=n.get(E),Et=n.get($);if(Et.__renderTarget=E,!le.__hasExternalTextures){const kt=Math.max(1,E.width>>at),jt=Math.max(1,E.height>>at);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,at,Ft,kt,jt,E.depth,0,St,wt,null):e.texImage2D(ct,at,Ft,kt,jt,0,St,wt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),qt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,ct,Et.__webglTexture,0,ht(E)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,lt,ct,Et.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Z(R,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const lt=E.depthTexture,ct=lt&&lt.isDepthTexture?lt.type:null,at=_(E.stencilBuffer,ct),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=ht(E);qt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,wt,at,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,at,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,at,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{const lt=E.textures;for(let ct=0;ct<lt.length;ct++){const at=lt[ct],St=r.convert(at.format,at.colorSpace),wt=r.convert(at.type),Ft=M(at.internalFormat,St,wt,at.colorSpace),le=ht(E);$&&qt(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Ft,E.width,E.height):qt(E)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Ft,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(E.depthTexture);lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ct=lt.__webglTexture,at=ht(E);if(E.depthTexture.format===Ai)qt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(E.depthTexture.format===Ii)qt(E)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function q(R){const E=n.get(R),$=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const lt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),lt){const ct=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,lt.removeEventListener("dispose",ct)};lt.addEventListener("dispose",ct),E.__depthDisposeCallback=ct}E.__boundDepthTexture=lt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");et(E.__webglFramebuffer,R)}else if($){E.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[lt]),E.__webglDepthbuffer[lt]===void 0)E.__webglDepthbuffer[lt]=i.createRenderbuffer(),Z(E.__webglDepthbuffer[lt],R,!1);else{const ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=E.__webglDepthbuffer[lt];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,at)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Z(E.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(R,E,$){const lt=n.get(R);E!==void 0&&H(lt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&q(R)}function mt(R){const E=R.texture,$=n.get(R),lt=n.get(E);R.addEventListener("dispose",N);const ct=R.textures,at=R.isWebGLCubeRenderTarget===!0,St=ct.length>1;if(St||(lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture()),lt.__version=E.version,s.memory.textures++),at){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let Ft=0;Ft<E.mipmaps.length;Ft++)$.__webglFramebuffer[wt][Ft]=i.createFramebuffer()}else $.__webglFramebuffer[wt]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)$.__webglFramebuffer[wt]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(St)for(let wt=0,Ft=ct.length;wt<Ft;wt++){const le=n.get(ct[wt]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&qt(R)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let wt=0;wt<ct.length;wt++){const Ft=ct[wt];$.__webglColorRenderbuffer[wt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[wt]);const le=r.convert(Ft.format,Ft.colorSpace),Et=r.convert(Ft.type),kt=M(Ft.internalFormat,le,Et,Ft.colorSpace,R.isXRRenderTarget===!0),jt=ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,kt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,$.__webglColorRenderbuffer[wt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Z($.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),J(i.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)H($.__webglFramebuffer[wt][Ft],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ft);else H($.__webglFramebuffer[wt],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);m(E)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let wt=0,Ft=ct.length;wt<Ft;wt++){const le=ct[wt],Et=n.get(le);e.bindTexture(i.TEXTURE_2D,Et.__webglTexture),J(i.TEXTURE_2D,le),H($.__webglFramebuffer,R,le,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,0),m(le)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let wt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(wt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,lt.__webglTexture),J(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let Ft=0;Ft<E.mipmaps.length;Ft++)H($.__webglFramebuffer[Ft],R,E,i.COLOR_ATTACHMENT0,wt,Ft);else H($.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,wt,0);m(E)&&f(wt),e.unbindTexture()}R.depthBuffer&&q(R)}function Lt(R){const E=R.textures;for(let $=0,lt=E.length;$<lt;$++){const ct=E[$];if(m(ct)){const at=x(R),St=n.get(ct).__webglTexture;e.bindTexture(at,St),f(at),e.unbindTexture()}}}const vt=[],I=[];function dt(R){if(R.samples>0){if(qt(R)===!1){const E=R.textures,$=R.width,lt=R.height;let ct=i.COLOR_BUFFER_BIT;const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),wt=E.length>1;if(wt)for(let Ft=0;Ft<E.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Ft=0;Ft<E.length;Ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),wt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ft]);const le=n.get(E[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,$,lt,0,0,$,lt,ct,i.NEAREST),c===!0&&(vt.length=0,I.length=0,vt.push(i.COLOR_ATTACHMENT0+Ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(vt.push(at),I.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),wt)for(let Ft=0;Ft<E.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,St.__webglColorRenderbuffer[Ft]);const le=n.get(E[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,le,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ht(R){return Math.min(a.maxSamples,R.samples)}function qt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(R){const E=s.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ne(R,E){const $=R.colorSpace,lt=R.format,ct=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==Ni&&$!==Bn&&(ye.getTransfer($)===Se?(lt!==ln||ct!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}function pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(d.width=R.naturalWidth||R.width,d.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(d.width=R.displayWidth,d.height=R.displayHeight):(d.width=R.width,d.height=R.height),d}this.allocateTextureUnit=U,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=tt,this.setTexture3D=O,this.setTextureCube=D,this.rebindTextures=nt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=H,this.useMultisampledRTT=qt}function Ap(i,t){function e(n,a=Bn){let r;const s=ye.getTransfer(a);if(n===Cn)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.BYTE;if(n===Oo)return i.SHORT;if(n===qi)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===Zi)return i.HALF_FLOAT;if(n===Vo)return i.ALPHA;if(n===Ho)return i.RGB;if(n===ln)return i.RGBA;if(n===ko)return i.LUMINANCE;if(n===Go)return i.LUMINANCE_ALPHA;if(n===Ai)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Wo)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===Xo)return i.RG;if(n===da)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===wr||n===br||n===Ar||n===Tr)if(s===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ds||n===Is||n===Ns||n===Us)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ds)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Is)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ns)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Us)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fs||n===Bs||n===Os)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fs||n===Bs)return s===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Os)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zs||n===Vs||n===Hs||n===ks||n===Gs||n===Ws||n===Xs||n===qs||n===Ys||n===$s||n===Zs||n===js||n===Ks||n===Js)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ks)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Gs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ws)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ys)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$s)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zs)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===js)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ks)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Js)return s===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===Qs||n===ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return s===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qs)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===ea||n===na||n===ia)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const a=new Ge,r=t.properties.get(a);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:Tp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nn(new Qi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pp extends oi{constructor(t,e){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,d=null,h=null,l=null,u=null,p=null,v=null;const g=new Rp,m=e.getContextAttributes();let f=null,x=null;const M=[],_=[],A=new de;let P=null;const N=new en;N.viewport=new Pe;const L=new en;L.viewport=new Pe;const S=[N,L],y=new $c;let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let C=M[T];return C===void 0&&(C=new as,M[T]=C),C.getTargetRaySpace()},this.getControllerGrip=function(T){let C=M[T];return C===void 0&&(C=new as,M[T]=C),C.getGripSpace()},this.getHand=function(T){let C=M[T];return C===void 0&&(C=new as,M[T]=C),C.getHandSpace()};function U(T){const C=_.indexOf(T.inputSource);if(C===-1)return;const H=M[C];H!==void 0&&(H.update(T.inputSource,T.frame,d||s),H.dispatchEvent({type:T.type,data:T.inputSource}))}function W(){a.removeEventListener("select",U),a.removeEventListener("selectstart",U),a.removeEventListener("selectend",U),a.removeEventListener("squeeze",U),a.removeEventListener("squeezestart",U),a.removeEventListener("squeezeend",U),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",X);for(let T=0;T<M.length;T++){const C=_[T];C!==null&&(_[T]=null,M[T].disconnect(C))}b=null,B=null,g.reset(),t.setRenderTarget(f),p=null,u=null,l=null,a=null,x=null,z.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){o=T,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||s},this.setReferenceSpace=function(T){d=T},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(T){if(a=T,a!==null){if(f=t.getRenderTarget(),a.addEventListener("select",U),a.addEventListener("selectstart",U),a.addEventListener("selectend",U),a.addEventListener("squeeze",U),a.addEventListener("squeezestart",U),a.addEventListener("squeezeend",U),a.addEventListener("end",W),a.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let H=null,Z=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=m.stencil?Ii:Ai,Z=m.stencil?Di:ii);const q={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};l=new XRWebGLBinding(a,e),u=l.createProjectionLayer(q),a.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new ri(u.textureWidth,u.textureHeight,{format:ln,type:Cn,depthTexture:new sl(u.textureWidth,u.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,e,H),a.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ri(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),d=null,s=await a.requestReferenceSpace(o),z.setContext(a),z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(T){for(let C=0;C<T.removed.length;C++){const H=T.removed[C],Z=_.indexOf(H);Z>=0&&(_[Z]=null,M[Z].disconnect(H))}for(let C=0;C<T.added.length;C++){const H=T.added[C];let Z=_.indexOf(H);if(Z===-1){for(let q=0;q<M.length;q++)if(q>=_.length){_.push(H),Z=q;break}else if(_[q]===null){_[q]=H,Z=q;break}if(Z===-1)break}const et=M[Z];et&&et.connect(H)}}const tt=new rt,O=new rt;function D(T,C,H){tt.setFromMatrixPosition(C.matrixWorld),O.setFromMatrixPosition(H.matrixWorld);const Z=tt.distanceTo(O),et=C.projectionMatrix.elements,q=H.projectionMatrix.elements,nt=et[14]/(et[10]-1),mt=et[14]/(et[10]+1),Lt=(et[9]+1)/et[5],vt=(et[9]-1)/et[5],I=(et[8]-1)/et[0],dt=(q[8]+1)/q[0],ht=nt*I,qt=nt*dt,yt=Z/(-I+dt),ne=yt*-I;if(C.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(ne),T.translateZ(yt),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),et[10]===-1)T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse);else{const pt=nt+yt,R=mt+yt,E=ht-ne,$=qt+(Z-ne),lt=Lt*mt/R*pt,ct=vt*mt/R*pt;T.projectionMatrix.makePerspective(E,$,lt,ct,pt,R),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function Q(T,C){C===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(C.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(a===null)return;let C=T.near,H=T.far;g.texture!==null&&(g.depthNear>0&&(C=g.depthNear),g.depthFar>0&&(H=g.depthFar)),y.near=L.near=N.near=C,y.far=L.far=N.far=H,(b!==y.near||B!==y.far)&&(a.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,B=y.far),N.layers.mask=T.layers.mask|2,L.layers.mask=T.layers.mask|4,y.layers.mask=N.layers.mask|L.layers.mask;const Z=T.parent,et=y.cameras;Q(y,Z);for(let q=0;q<et.length;q++)Q(et[q],Z);et.length===2?D(y,N,L):y.projectionMatrix.copy(N.projectionMatrix),K(T,y,Z)};function K(T,C,H){H===null?T.matrix.copy(C.matrixWorld):(T.matrix.copy(H.matrixWorld),T.matrix.invert(),T.matrix.multiply(C.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(C.projectionMatrix),T.projectionMatrixInverse.copy(C.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=ra*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(T){c=T,u!==null&&(u.fixedFoveation=T),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let F=null;function J(T,C){if(h=C.getViewerPose(d||s),v=C,h!==null){const H=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let Z=!1;H.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let nt=0;nt<H.length;nt++){const mt=H[nt];let Lt=null;if(p!==null)Lt=p.getViewport(mt);else{const I=l.getViewSubImage(u,mt);Lt=I.viewport,nt===0&&(t.setRenderTargetTextures(x,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(x))}let vt=S[nt];vt===void 0&&(vt=new en,vt.layers.enable(nt),vt.viewport=new Pe,S[nt]=vt),vt.matrix.fromArray(mt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(mt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),nt===0&&(y.matrix.copy(vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(vt)}const et=a.enabledFeatures;if(et&&et.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&l){const nt=l.getDepthInformation(H[0]);nt&&nt.isValid&&nt.texture&&g.init(t,nt,a.renderState)}}for(let H=0;H<M.length;H++){const Z=_[H],et=M[H];Z!==null&&et!==void 0&&et.update(Z,C,d||s)}F&&F(T,C),C.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:C}),v=null}const z=new cl;z.setAnimationLoop(J),this.setAnimationLoop=function(T){F=T},this.dispose=function(){}}}const jn=new gn,Lp=new Le;function Dp(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,il(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,x,M,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),l(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,x,M):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ze&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ze&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),M=x.envMap,_=x.envMapRotation;M&&(m.envMap.value=M,jn.copy(_),jn.x*=-1,jn.y*=-1,jn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(jn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function l(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ze&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Ip(i,t,e,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const _=M.program;n.uniformBlockBinding(x,_)}function d(x,M){let _=a[x.id];_===void 0&&(v(x),_=h(x),a[x.id]=_,x.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(x,A);const P=t.render.frame;r[x.id]!==P&&(u(x),r[x.id]=P)}function h(x){const M=l();x.__bindingPointIndex=M;const _=i.createBuffer(),A=x.__size,P=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function l(){for(let x=0;x<o;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const M=a[x.id],_=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let P=0,N=_.length;P<N;P++){const L=Array.isArray(_[P])?_[P]:[_[P]];for(let S=0,y=L.length;S<y;S++){const b=L[S];if(p(b,P,S,A)===!0){const B=b.__offset,U=Array.isArray(b.value)?b.value:[b.value];let W=0;for(let X=0;X<U.length;X++){const tt=U[X],O=g(tt);typeof tt=="number"||typeof tt=="boolean"?(b.__data[0]=tt,i.bufferSubData(i.UNIFORM_BUFFER,B+W,b.__data)):tt.isMatrix3?(b.__data[0]=tt.elements[0],b.__data[1]=tt.elements[1],b.__data[2]=tt.elements[2],b.__data[3]=0,b.__data[4]=tt.elements[3],b.__data[5]=tt.elements[4],b.__data[6]=tt.elements[5],b.__data[7]=0,b.__data[8]=tt.elements[6],b.__data[9]=tt.elements[7],b.__data[10]=tt.elements[8],b.__data[11]=0):(tt.toArray(b.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,_,A){const P=x.value,N=M+"_"+_;if(A[N]===void 0)return typeof P=="number"||typeof P=="boolean"?A[N]=P:A[N]=P.clone(),!0;{const L=A[N];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return A[N]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function v(x){const M=x.uniforms;let _=0;const A=16;for(let N=0,L=M.length;N<L;N++){const S=Array.isArray(M[N])?M[N]:[M[N]];for(let y=0,b=S.length;y<b;y++){const B=S[y],U=Array.isArray(B.value)?B.value:[B.value];for(let W=0,X=U.length;W<X;W++){const tt=U[W],O=g(tt),D=_%A,Q=D%O.boundary,K=D+Q;_+=Q,K!==0&&A-K<O.storage&&(_+=A-K),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}const P=_%A;return P>0&&(_+=A-P),x.__size=_,x.__cache={},this}function g(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const _=s.indexOf(M.__bindingPointIndex);s.splice(_,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete r[M.id]}function f(){for(const x in a)i.deleteBuffer(a[x]);s=[],a={},r={}}return{bind:c,update:d,dispose:f}}class Np{constructor(t={}){const{canvas:e=oc(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:l=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const x=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qe,this.toneMapping=zn,this.toneMappingExposure=1;const _=this;let A=!1,P=0,N=0,L=null,S=-1,y=null;const b=new Pe,B=new Pe;let U=null;const W=new Me(0);let X=0,tt=e.width,O=e.height,D=1,Q=null,K=null;const F=new Pe(0,0,tt,O),J=new Pe(0,0,tt,O);let z=!1;const T=new ga;let C=!1,H=!1;this.transmissionResolutionScale=1;const Z=new Le,et=new Le,q=new rt,nt=new Pe,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function vt(){return L===null?D:1}let I=n;function dt(w,k){return e.getContext(w,k)}try{const w={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oa}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Ot,!1),I===null){const k="webgl2";if(I=dt(k,w),I===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,qt,yt,ne,pt,R,E,$,lt,ct,at,St,wt,Ft,le,Et,kt,jt,Jt,Xt,ce,ie,ve,G;function Pt(){ht=new Gd(I),ht.init(),ie=new Ap(I,ht),qt=new Fd(I,ht,t,ie),yt=new wp(I,ht),qt.reverseDepthBuffer&&u&&yt.buffers.depth.setReversed(!0),ne=new qd(I),pt=new up,R=new bp(I,ht,yt,pt,qt,ie,ne),E=new Od(_),$=new kd(_),lt=new Jc(I),ve=new Nd(I,lt),ct=new Wd(I,lt,ne,ve),at=new $d(I,ct,lt,ne),Jt=new Yd(I,qt,R),Et=new Bd(pt),St=new hp(_,E,$,ht,qt,ve,Et),wt=new Dp(_,pt),Ft=new fp,le=new xp(ht),jt=new Id(_,E,$,yt,at,p,c),kt=new Ep(_,at,qt),G=new Ip(I,ne,qt,yt),Xt=new Ud(I,ht,ne),ce=new Xd(I,ht,ne),ne.programs=St.programs,_.capabilities=qt,_.extensions=ht,_.properties=pt,_.renderLists=Ft,_.shadowMap=kt,_.state=yt,_.info=ne}Pt();const ot=new Pp(_,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(w){w!==void 0&&(D=w,this.setSize(tt,O,!1))},this.getSize=function(w){return w.set(tt,O)},this.setSize=function(w,k,Y=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}tt=w,O=k,e.width=Math.floor(w*D),e.height=Math.floor(k*D),Y===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(tt*D,O*D).floor()},this.setDrawingBufferSize=function(w,k,Y){tt=w,O=k,D=Y,e.width=Math.floor(w*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(F)},this.setViewport=function(w,k,Y,j){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,k,Y,j),yt.viewport(b.copy(F).multiplyScalar(D).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,k,Y,j){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,k,Y,j),yt.scissor(B.copy(J).multiplyScalar(D).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(w){yt.setScissorTest(z=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,k=!0,Y=!0){let j=0;if(w){let V=!1;if(L!==null){const xt=L.texture.format;V=xt===fa||xt===da||xt===ua}if(V){const xt=L.texture.type,Ct=xt===Cn||xt===ii||xt===qi||xt===Di||xt===ca||xt===ha,Ut=jt.getClearColor(),Gt=jt.getClearAlpha(),Kt=Ut.r,Wt=Ut.g,Zt=Ut.b;Ct?(v[0]=Kt,v[1]=Wt,v[2]=Zt,v[3]=Gt,I.clearBufferuiv(I.COLOR,0,v)):(g[0]=Kt,g[1]=Wt,g[2]=Zt,g[3]=Gt,I.clearBufferiv(I.COLOR,0,g))}else j|=I.COLOR_BUFFER_BIT}k&&(j|=I.DEPTH_BUFFER_BIT),Y&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Ot,!1),jt.dispose(),Ft.dispose(),le.dispose(),pt.dispose(),E.dispose(),$.dispose(),at.dispose(),ve.dispose(),G.dispose(),St.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",gt),ot.removeEventListener("sessionend",_t),ee.stop()};function ft(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=ne.autoReset,k=kt.enabled,Y=kt.autoUpdate,j=kt.needsUpdate,V=kt.type;Pt(),ne.autoReset=w,kt.enabled=k,kt.autoUpdate=Y,kt.needsUpdate=j,kt.type=V}function Ot(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function se(w){const k=w.target;k.removeEventListener("dispose",se),Ee(k)}function Ee(w){Re(w),pt.remove(w)}function Re(w){const k=pt.get(w).programs;k!==void 0&&(k.forEach(function(Y){St.releaseProgram(Y)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,Y,j,V,xt){k===null&&(k=mt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Ut=bt(w,k,Y,j,V);yt.setMaterial(j,Ct);let Gt=Y.index,Kt=1;if(j.wireframe===!0){if(Gt=ct.getWireframeAttribute(Y),Gt===void 0)return;Kt=2}const Wt=Y.drawRange,Zt=Y.attributes.position;let te=Wt.start*Kt,fe=(Wt.start+Wt.count)*Kt;xt!==null&&(te=Math.max(te,xt.start*Kt),fe=Math.min(fe,(xt.start+xt.count)*Kt)),Gt!==null?(te=Math.max(te,0),fe=Math.min(fe,Gt.count)):Zt!=null&&(te=Math.max(te,0),fe=Math.min(fe,Zt.count));const xe=fe-te;if(xe<0||xe===1/0)return;ve.setup(V,j,Ut,Y,Gt);let me,re=Xt;if(Gt!==null&&(me=lt.get(Gt),re=ce,re.setIndex(me)),V.isMesh)j.wireframe===!0?(yt.setLineWidth(j.wireframeLinewidth*vt()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(V.isLine){let $t=j.linewidth;$t===void 0&&($t=1),yt.setLineWidth($t*vt()),V.isLineSegments?re.setMode(I.LINES):V.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else V.isPoints?re.setMode(I.POINTS):V.isSprite&&re.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Kn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))re.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const $t=V._multiDrawStarts,be=V._multiDrawCounts,Vt=V._multiDrawCount,Te=Gt?lt.get(Gt).bytesPerElement:1,Ce=pt.get(j).currentProgram.getUniforms();for(let De=0;De<Vt;De++)Ce.setValue(I,"_gl_DrawID",De),re.render($t[De]/Te,be[De])}else if(V.isInstancedMesh)re.renderInstances(te,xe,V.count);else if(Y.isInstancedBufferGeometry){const $t=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,$t);re.renderInstances(te,xe,be)}else re.render(te,xe)};function ae(w,k,Y){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,Dt(w,k,Y),w.side=Vn,w.needsUpdate=!0,Dt(w,k,Y),w.side=wn):Dt(w,k,Y)}this.compile=function(w,k,Y=null){Y===null&&(Y=w),f=le.get(Y),f.init(k),M.push(f),Y.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const j=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xt=V.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const Ut=xt[Ct];ae(Ut,Y,V),j.add(Ut)}else ae(xt,Y,V),j.add(xt)}),f=M.pop(),j},this.compileAsync=function(w,k,Y=null){const j=this.compile(w,k,Y);return new Promise(V=>{function xt(){if(j.forEach(function(Ct){pt.get(Ct).currentProgram.isReady()&&j.delete(Ct)}),j.size===0){V(w);return}setTimeout(xt,10)}ht.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let st=null;function ut(w){st&&st(w)}function gt(){ee.stop()}function _t(){ee.start()}const ee=new cl;ee.setAnimationLoop(ut),typeof self<"u"&&ee.setContext(self),this.setAnimationLoop=function(w){st=w,ot.setAnimationLoop(w),w===null?ee.stop():ee.start()},ot.addEventListener("sessionstart",gt),ot.addEventListener("sessionend",_t),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(k),k=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,L),f=le.get(w,M.length),f.init(k),M.push(f),et.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),T.setFromProjectionMatrix(et),H=this.localClippingEnabled,C=Et.init(this.clippingPlanes,H),m=Ft.get(w,x.length),m.init(),x.push(m),ot.enabled===!0&&ot.isPresenting===!0){const xt=_.xr.getDepthSensingMesh();xt!==null&&Bt(xt,k,-1/0,_.sortObjects)}Bt(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(Q,K),Lt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Lt&&jt.addToRenderList(m,w),this.info.render.frame++,C===!0&&Et.beginShadows();const Y=f.state.shadowsArray;kt.render(Y,w,k),C===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,V=m.transmissive;if(f.setupLights(),k.isArrayCamera){const xt=k.cameras;if(V.length>0)for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){const Gt=xt[Ct];Nt(j,V,w,Gt)}Lt&&jt.render(w);for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++){const Gt=xt[Ct];At(m,w,Gt,Gt.viewport)}}else V.length>0&&Nt(j,V,w,k),Lt&&jt.render(w),At(m,w,k);L!==null&&N===0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,k),ve.resetDefaultState(),S=-1,y=null,M.pop(),M.length>0?(f=M[M.length-1],C===!0&&Et.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Bt(w,k,Y,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||T.intersectsSprite(w)){j&&nt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(et);const Ct=at.update(w),Ut=w.material;Ut.visible&&m.push(w,Ct,Ut,Y,nt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||T.intersectsObject(w))){const Ct=at.update(w),Ut=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),nt.copy(w.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),nt.copy(Ct.boundingSphere.center)),nt.applyMatrix4(w.matrixWorld).applyMatrix4(et)),Array.isArray(Ut)){const Gt=Ct.groups;for(let Kt=0,Wt=Gt.length;Kt<Wt;Kt++){const Zt=Gt[Kt],te=Ut[Zt.materialIndex];te&&te.visible&&m.push(w,Ct,te,Y,nt.z,Zt)}}else Ut.visible&&m.push(w,Ct,Ut,Y,nt.z,null)}}const xt=w.children;for(let Ct=0,Ut=xt.length;Ct<Ut;Ct++)Bt(xt[Ct],k,Y,j)}function At(w,k,Y,j){const V=w.opaque,xt=w.transmissive,Ct=w.transparent;f.setupLightsView(Y),C===!0&&Et.setGlobalState(_.clippingPlanes,Y),j&&yt.viewport(b.copy(j)),V.length>0&&it(V,k,Y),xt.length>0&&it(xt,k,Y),Ct.length>0&&it(Ct,k,Y),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Nt(w,k,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new ri(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Zi:Cn,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ye.workingColorSpace}));const xt=f.state.transmissionRenderTarget[j.id],Ct=j.viewport||b;xt.setSize(Ct.z*_.transmissionResolutionScale,Ct.w*_.transmissionResolutionScale);const Ut=_.getRenderTarget();_.setRenderTarget(xt),_.getClearColor(W),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Lt&&jt.render(Y);const Gt=_.toneMapping;_.toneMapping=zn;const Kt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),C===!0&&Et.setGlobalState(_.clippingPlanes,j),it(w,Y,j),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Zt=0,te=k.length;Zt<te;Zt++){const fe=k[Zt],xe=fe.object,me=fe.geometry,re=fe.material,$t=fe.group;if(re.side===wn&&xe.layers.test(j.layers)){const be=re.side;re.side=Ze,re.needsUpdate=!0,Tt(xe,Y,j,me,re,$t),re.side=be,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt))}_.setRenderTarget(Ut),_.setClearColor(W,X),Kt!==void 0&&(j.viewport=Kt),_.toneMapping=Gt}function it(w,k,Y){const j=k.isScene===!0?k.overrideMaterial:null;for(let V=0,xt=w.length;V<xt;V++){const Ct=w[V],Ut=Ct.object,Gt=Ct.geometry,Kt=j===null?Ct.material:j,Wt=Ct.group;Ut.layers.test(Y.layers)&&Tt(Ut,k,Y,Gt,Kt,Wt)}}function Tt(w,k,Y,j,V,xt){w.onBeforeRender(_,k,Y,j,V,xt),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,k,Y,j,w,xt),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=Ze,V.needsUpdate=!0,_.renderBufferDirect(Y,k,j,V,w,xt),V.side=Vn,V.needsUpdate=!0,_.renderBufferDirect(Y,k,j,V,w,xt),V.side=wn):_.renderBufferDirect(Y,k,j,V,w,xt),w.onAfterRender(_,k,Y,j,V,xt)}function Dt(w,k,Y){k.isScene!==!0&&(k=mt);const j=pt.get(w),V=f.state.lights,xt=f.state.shadowsArray,Ct=V.state.version,Ut=St.getParameters(w,V.state,xt,k,Y),Gt=St.getProgramCacheKey(Ut);let Kt=j.programs;j.environment=w.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(w.isMeshStandardMaterial?$:E).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",se),Kt=new Map,j.programs=Kt);let Wt=Kt.get(Gt);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===Ct)return Rt(w,Ut),Wt}else Ut.uniforms=St.getUniforms(w),w.onBeforeCompile(Ut,_),Wt=St.acquireProgram(Ut,Gt),Kt.set(Gt,Wt),j.uniforms=Ut.uniforms;const Zt=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Et.uniform),Rt(w,Ut),j.needsLights=Qt(w),j.lightsStateVersion=Ct,j.needsLights&&(Zt.ambientLightColor.value=V.state.ambient,Zt.lightProbe.value=V.state.probe,Zt.directionalLights.value=V.state.directional,Zt.directionalLightShadows.value=V.state.directionalShadow,Zt.spotLights.value=V.state.spot,Zt.spotLightShadows.value=V.state.spotShadow,Zt.rectAreaLights.value=V.state.rectArea,Zt.ltc_1.value=V.state.rectAreaLTC1,Zt.ltc_2.value=V.state.rectAreaLTC2,Zt.pointLights.value=V.state.point,Zt.pointLightShadows.value=V.state.pointShadow,Zt.hemisphereLights.value=V.state.hemi,Zt.directionalShadowMap.value=V.state.directionalShadowMap,Zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Zt.spotShadowMap.value=V.state.spotShadowMap,Zt.spotLightMatrix.value=V.state.spotLightMatrix,Zt.spotLightMap.value=V.state.spotLightMap,Zt.pointShadowMap.value=V.state.pointShadowMap,Zt.pointShadowMatrix.value=V.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function Yt(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=Pr.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Rt(w,k){const Y=pt.get(w);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function bt(w,k,Y,j,V){k.isScene!==!0&&(k=mt),R.resetTextureUnits();const xt=k.fog,Ct=j.isMeshStandardMaterial?k.environment:null,Ut=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Ni,Gt=(j.isMeshStandardMaterial?$:E).get(j.envMap||Ct),Kt=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Wt=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Zt=!!Y.morphAttributes.position,te=!!Y.morphAttributes.normal,fe=!!Y.morphAttributes.color;let xe=zn;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=_.toneMapping);const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=me!==void 0?me.length:0,$t=pt.get(j),be=f.state.lights;if(C===!0&&(H===!0||w!==y)){const He=w===y&&j.id===S;Et.setState(j,w,He)}let Vt=!1;j.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==be.state.version||$t.outputColorSpace!==Ut||V.isBatchedMesh&&$t.batching===!1||!V.isBatchedMesh&&$t.batching===!0||V.isBatchedMesh&&$t.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&$t.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&$t.instancing===!1||!V.isInstancedMesh&&$t.instancing===!0||V.isSkinnedMesh&&$t.skinning===!1||!V.isSkinnedMesh&&$t.skinning===!0||V.isInstancedMesh&&$t.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&$t.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&$t.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&$t.instancingMorph===!1&&V.morphTexture!==null||$t.envMap!==Gt||j.fog===!0&&$t.fog!==xt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Et.numPlanes||$t.numIntersection!==Et.numIntersection)||$t.vertexAlphas!==Kt||$t.vertexTangents!==Wt||$t.morphTargets!==Zt||$t.morphNormals!==te||$t.morphColors!==fe||$t.toneMapping!==xe||$t.morphTargetsCount!==re)&&(Vt=!0):(Vt=!0,$t.__version=j.version);let Te=$t.currentProgram;Vt===!0&&(Te=Dt(j,k,V));let Ce=!1,De=!1,je=!1;const Ae=Te.getUniforms(),We=$t.uniforms;if(yt.useProgram(Te.program)&&(Ce=!0,De=!0,je=!0),j.id!==S&&(S=j.id,De=!0),Ce||y!==w){yt.buffers.depth.getReversed()?(Z.copy(w.projectionMatrix),cc(Z),hc(Z),Ae.setValue(I,"projectionMatrix",Z)):Ae.setValue(I,"projectionMatrix",w.projectionMatrix),Ae.setValue(I,"viewMatrix",w.matrixWorldInverse);const Xe=Ae.map.cameraPosition;Xe!==void 0&&Xe.setValue(I,q.setFromMatrixPosition(w.matrixWorld)),qt.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,De=!0,je=!0)}if(V.isSkinnedMesh){Ae.setOptional(I,V,"bindMatrix"),Ae.setOptional(I,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Ae.setValue(I,"boneTexture",He.boneTexture,R))}V.isBatchedMesh&&(Ae.setOptional(I,V,"batchingTexture"),Ae.setValue(I,"batchingTexture",V._matricesTexture,R),Ae.setOptional(I,V,"batchingIdTexture"),Ae.setValue(I,"batchingIdTexture",V._indirectTexture,R),Ae.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Ae.setValue(I,"batchingColorTexture",V._colorsTexture,R));const ge=Y.morphAttributes;if((ge.position!==void 0||ge.normal!==void 0||ge.color!==void 0)&&Jt.update(V,Y,Te),(De||$t.receiveShadow!==V.receiveShadow)&&($t.receiveShadow=V.receiveShadow,Ae.setValue(I,"receiveShadow",V.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(We.envMap.value=Gt,We.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(We.envMapIntensity.value=k.environmentIntensity),De&&(Ae.setValue(I,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&It(We,je),xt&&j.fog===!0&&wt.refreshFogUniforms(We,xt),wt.refreshMaterialUniforms(We,j,D,O,f.state.transmissionRenderTarget[w.id]),Pr.upload(I,Yt($t),We,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Pr.upload(I,Yt($t),We,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ae.setValue(I,"center",V.center),Ae.setValue(I,"modelViewMatrix",V.modelViewMatrix),Ae.setValue(I,"normalMatrix",V.normalMatrix),Ae.setValue(I,"modelMatrix",V.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const He=j.uniformsGroups;for(let Xe=0,Or=He.length;Xe<Or;Xe++){const Wn=He[Xe];G.update(Wn,Te),G.bind(Wn,Te)}}return Te}function It(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function Qt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,k,Y){pt.get(w.texture).__webglTexture=k,pt.get(w.depthTexture).__webglTexture=Y;const j=pt.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=Y===void 0,j.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const Y=pt.get(w);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const oe=I.createFramebuffer();this.setRenderTarget=function(w,k=0,Y=0){L=w,P=k,N=Y;let j=!0,V=null,xt=!1,Ct=!1;if(w){const Gt=pt.get(w);if(Gt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Gt.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Gt.__hasExternalTextures)R.rebindTextures(w,pt.get(w.texture).__webglTexture,pt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Zt=w.depthTexture;if(Gt.__boundDepthTexture!==Zt){if(Zt!==null&&pt.has(Zt)&&(w.width!==Zt.image.width||w.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);const Wt=pt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Wt[k])?V=Wt[k][Y]:V=Wt[k],xt=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?V=pt.get(w).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[Y]:V=Wt,b.copy(w.viewport),B.copy(w.scissor),U=w.scissorTest}else b.copy(F).multiplyScalar(D).floor(),B.copy(J).multiplyScalar(D).floor(),U=z;if(Y!==0&&(V=oe),yt.bindFramebuffer(I.FRAMEBUFFER,V)&&j&&yt.drawBuffers(w,V),yt.viewport(b),yt.scissor(B),yt.setScissorTest(U),xt){const Gt=pt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,Y)}else if(Ct){const Gt=pt.get(w.texture),Kt=k;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.__webglTexture,Y,Kt)}else if(w!==null&&Y!==0){const Gt=pt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Gt.__webglTexture,Y)}S=-1},this.readRenderTargetPixels=function(w,k,Y,j,V,xt,Ct){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){yt.bindFramebuffer(I.FRAMEBUFFER,Ut);try{const Gt=w.texture,Kt=Gt.format,Wt=Gt.type;if(!qt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&Y>=0&&Y<=w.height-V&&I.readPixels(k,Y,j,V,ie.convert(Kt),ie.convert(Wt),xt)}finally{const Gt=L!==null?pt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(w,k,Y,j,V,xt,Ct){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=pt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){const Gt=w.texture,Kt=Gt.format,Wt=Gt.type;if(!qt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-j&&Y>=0&&Y<=w.height-V){yt.bindFramebuffer(I.FRAMEBUFFER,Ut);const Zt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(k,Y,j,V,ie.convert(Kt),ie.convert(Wt),0);const te=L!==null?pt.get(L).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,te);const fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lc(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Zt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(Zt),I.deleteSync(fe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,Y=0){w.isTexture!==!0&&(Kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-Y),V=Math.floor(w.image.width*j),xt=Math.floor(w.image.height*j),Ct=k!==null?k.x:0,Ut=k!==null?k.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,Ct,Ut,V,xt),yt.unbindTexture()};const Mt=I.createFramebuffer(),he=I.createFramebuffer();this.copyTextureToTexture=function(w,k,Y=null,j=null,V=0,xt=null){w.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],k=arguments[2],xt=arguments[3]||0,Y=null),xt===null&&(V!==0?(Kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=V,V=0):xt=0);let Ct,Ut,Gt,Kt,Wt,Zt,te,fe,xe;const me=w.isCompressedTexture?w.mipmaps[xt]:w.image;if(Y!==null)Ct=Y.max.x-Y.min.x,Ut=Y.max.y-Y.min.y,Gt=Y.isBox3?Y.max.z-Y.min.z:1,Kt=Y.min.x,Wt=Y.min.y,Zt=Y.isBox3?Y.min.z:0;else{const ge=Math.pow(2,-V);Ct=Math.floor(me.width*ge),Ut=Math.floor(me.height*ge),w.isDataArrayTexture?Gt=me.depth:w.isData3DTexture?Gt=Math.floor(me.depth*ge):Gt=1,Kt=0,Wt=0,Zt=0}j!==null?(te=j.x,fe=j.y,xe=j.z):(te=0,fe=0,xe=0);const re=ie.convert(k.format),$t=ie.convert(k.type);let be;k.isData3DTexture?(R.setTexture3D(k,0),be=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(R.setTexture2DArray(k,0),be=I.TEXTURE_2D_ARRAY):(R.setTexture2D(k,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Vt=I.getParameter(I.UNPACK_ROW_LENGTH),Te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ce=I.getParameter(I.UNPACK_SKIP_PIXELS),De=I.getParameter(I.UNPACK_SKIP_ROWS),je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Ae=w.isDataArrayTexture||w.isData3DTexture,We=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const ge=pt.get(w),He=pt.get(k),Xe=pt.get(ge.__renderTarget),Or=pt.get(He.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Xe.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Or.__webglFramebuffer);for(let Wn=0;Wn<Gt;Wn++)Ae&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(w).__webglTexture,V,Zt+Wn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pt.get(k).__webglTexture,xt,xe+Wn)),I.blitFramebuffer(Kt,Wt,Ct,Ut,te,fe,Ct,Ut,I.DEPTH_BUFFER_BIT,I.NEAREST);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||pt.has(w)){const ge=pt.get(w),He=pt.get(k);yt.bindFramebuffer(I.READ_FRAMEBUFFER,Mt),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,he);for(let Xe=0;Xe<Gt;Xe++)Ae?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,V,Zt+Xe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,V),We?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,xt,xe+Xe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,He.__webglTexture,xt),V!==0?I.blitFramebuffer(Kt,Wt,Ct,Ut,te,fe,Ct,Ut,I.COLOR_BUFFER_BIT,I.NEAREST):We?I.copyTexSubImage3D(be,xt,te,fe,xe+Xe,Kt,Wt,Ct,Ut):I.copyTexSubImage2D(be,xt,te,fe,Kt,Wt,Ct,Ut);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else We?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(be,xt,te,fe,xe,Ct,Ut,Gt,re,$t,me.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(be,xt,te,fe,xe,Ct,Ut,Gt,re,me.data):I.texSubImage3D(be,xt,te,fe,xe,Ct,Ut,Gt,re,$t,me):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,te,fe,Ct,Ut,re,$t,me.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,te,fe,me.width,me.height,re,me.data):I.texSubImage2D(I.TEXTURE_2D,xt,te,fe,Ct,Ut,re,$t,me);I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je),xt===0&&k.generateMipmaps&&I.generateMipmap(be),yt.unbindTexture()},this.copyTextureToTexture3D=function(w,k,Y=null,j=null,V=0){return w.isTexture!==!0&&(Kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,j=arguments[1]||null,w=arguments[2],k=arguments[3],V=arguments[4]||0),Kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,Y,j,V)},this.initRenderTarget=function(w){pt.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){P=0,N=0,L=null,yt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ye._getDrawingBufferColorSpace(t),e.unpackColorSpace=ye._getUnpackColorSpace()}}const Co={type:"change"},Ma={type:"start"},pl={type:"end"},Er=new Ko,Ro=new Fn,Up=Math.cos(70*ac.DEG2RAD),Ne=new rt,Ye=2*Math.PI,we={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ms=1e-6;class Fp extends jc{constructor(t,e=null){super(t,e),this.state=we.NONE,this.enabled=!0,this.target=new rt,this.cursor=new rt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wi.ROTATE,MIDDLE:wi.DOLLY,RIGHT:wi.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new rt,this._lastQuaternion=new si,this._lastTargetPosition=new rt,this._quat=new si().setFromUnitVectors(t.up,new rt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new eo,this._sphericalDelta=new eo,this._scale=1,this._panOffset=new rt,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new rt,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Op.bind(this),this._onPointerDown=Bp.bind(this),this._onPointerUp=zp.bind(this),this._onContextMenu=qp.bind(this),this._onMouseWheel=kp.bind(this),this._onKeyDown=Gp.bind(this),this._onTouchStart=Wp.bind(this),this._onTouchMove=Xp.bind(this),this._onMouseDown=Vp.bind(this),this._onMouseMove=Hp.bind(this),this._interceptControlDown=Yp.bind(this),this._interceptControlUp=$p.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Co),this.update(),this.state=we.NONE}update(t=null){const e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===we.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(n)&&isFinite(a)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),a<-Math.PI?a+=Ye:a>Math.PI&&(a-=Ye),n<=a?this._spherical.theta=Math.max(n,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+a)/2?Math.max(n,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=s!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Ne.length();s=this._clampDistance(o*this._scale);const c=o-s;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new rt(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const d=new rt(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(o),this.object.updateMatrixWorld(),s=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Er.origin.copy(this.object.position),Er.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Er.direction))<Up?this.object.lookAt(this.target):(Ro.setFromNormalAndCoplanarPoint(this.object.up,this.target),Er.intersectPlane(Ro,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ms||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ms||this._lastTargetPosition.distanceToSquared(this.target)>ms?(this.dispatchEvent(Co),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Ne.copy(a).sub(this.target);let r=Ne.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),a=t-n.left,r=e-n.top,s=n.width,o=n.height;this._mouse.x=a/s*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._rotateStart.set(n,a)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panStart.set(n,a)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,a=t.pageY-e.y,r=Math.sqrt(n*n+a*a);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(a,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),a=.5*(t.pageY+e.y);this._panEnd.set(n,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,a=t.pageY-e.y,r=Math.sqrt(n*n+a*a);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new de,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Op(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pl),this.state=we.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=we.DOLLY;break;case wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}break;case wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=we.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=we.PAN}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Ma)}function Hp(i){switch(this.state){case we.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case we.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case we.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kp(i){this.enabled===!1||this.enableZoom===!1||this.state!==we.NONE||(i.preventDefault(),this.dispatchEvent(Ma),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pl))}function Gp(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=we.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=we.TOUCH_PAN;break;default:this.state=we.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=we.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=we.TOUCH_DOLLY_ROTATE;break;default:this.state=we.NONE}break;default:this.state=we.NONE}this.state!==we.NONE&&this.dispatchEvent(Ma)}function Xp(i){switch(this._trackPointer(i),this.state){case we.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case we.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case we.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case we.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=we.NONE}}function qp(i){this.enabled!==!1&&i.preventDefault()}function Yp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $p(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class vn{constructor(t,e,n,a,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),vn.nextNameID=vn.nextNameID||0,this.$name.id=`lil-gui-name-${++vn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Zp extends vn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function aa(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const jp={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:aa,toHexString:aa},$i={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Kp={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=$i.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return $i.toHexString(a)}},Jp={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=$i.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const a=i*n<<16^t*n<<8^e*n<<0;return $i.toHexString(a)}},Qp=[jp,$i,Kp,Jp];function tm(i){return Qp.find(t=>t.match(i))}class em extends vn{constructor(t,e,n,a){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=tm(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=aa(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class vs extends vn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class nm extends vn{constructor(t,e,n,a,r,s){super(t,e,n,"number"),this._initInput(),this.min(a),this.max(r);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+x),this.$input.value=this.getValue())},a=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let s=!1,o,c,d,h,l;const u=5,p=x=>{o=x.clientX,c=d=x.clientY,s=!0,h=this.getValue(),l=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=x=>{if(s){const M=x.clientX-o,_=x.clientY-c;Math.abs(_)>u?(x.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>u&&g()}if(!s){const M=x.clientY-d;l-=M*this._step*this._arrowKeyMultiplier(x),h+l>this._max?l=this._max-h:h+l<this._min&&(l=this._min-h),this._snapClampSetValue(h+l)}d=x.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},m=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,x,M,_,A)=>(f-x)/(M-x)*(A-_)+_,e=f=>{const x=this.$slider.getBoundingClientRect();let M=t(f,x.left,x.right,this._min,this._max);this._snapClampSetValue(M)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",r)},a=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",r)};let s=!1,o,c;const d=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),s=!1},h=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,c=f.touches[0].clientY,s=!0):d(f),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},l=f=>{if(s){const x=f.touches[0].clientX-o,M=f.touches[0].clientY-c;Math.abs(x)>Math.abs(M)?d(f):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else f.preventDefault(),e(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),v=400;let g;const m=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const M=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(p,v)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class im extends vn{constructor(t,e,n,a){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class rm extends vn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var sm=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function am(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Po=!1;class Ea{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:a,title:r="Controls",closeFolders:s=!1,injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Po&&o&&(am(sm),Po=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=s}add(t,e,n,a,r){if(Object(n)===n)return new im(this,t,e,n);const s=t[e];switch(typeof s){case"number":return new nm(this,t,e,n,a,r);case"boolean":return new Zp(this,t,e);case"string":return new rm(this,t,e);case"function":return new vs(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,s)}addColor(t,e,n=1){return new em(this,t,e,n)}addFolder(t){const e=new Ea({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof vs||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof vs)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const a=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function om(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function Sr(i){throw new Error('Could not dynamically require "'+i+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gs={exports:{}},Lo;function lm(){return Lo||(Lo=1,(function(i,t){(function(e){i.exports=e()})(function(){return(function e(n,a,r){function s(d,h){if(!a[d]){if(!n[d]){var l=typeof Sr=="function"&&Sr;if(!h&&l)return l(d,!0);if(o)return o(d,!0);throw new Error("Cannot find module '"+d+"'")}var u=a[d]={exports:{}};n[d][0].call(u.exports,function(p){var v=n[d][1][p];return s(v||p)},u,u.exports,e,n,a,r)}return a[d].exports}for(var o=typeof Sr=="function"&&Sr,c=0;c<r.length;c++)s(r[c]);return s})({1:[function(e,n,a){n.exports={name:"cannon",version:"0.6.2",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/schteppe/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",keywords:["cannon.js","cannon","physics","engine","3d"],main:"./build/cannon.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/schteppe/cannon.js.git"},bugs:{url:"https://github.com/schteppe/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}}},{}],2:[function(e,n,a){n.exports={version:e("../package.json").version,AABB:e("./collision/AABB"),ArrayCollisionMatrix:e("./collision/ArrayCollisionMatrix"),Body:e("./objects/Body"),Box:e("./shapes/Box"),Broadphase:e("./collision/Broadphase"),Constraint:e("./constraints/Constraint"),ContactEquation:e("./equations/ContactEquation"),Narrowphase:e("./world/Narrowphase"),ConeTwistConstraint:e("./constraints/ConeTwistConstraint"),ContactMaterial:e("./material/ContactMaterial"),ConvexPolyhedron:e("./shapes/ConvexPolyhedron"),Cylinder:e("./shapes/Cylinder"),DistanceConstraint:e("./constraints/DistanceConstraint"),Equation:e("./equations/Equation"),EventTarget:e("./utils/EventTarget"),FrictionEquation:e("./equations/FrictionEquation"),GSSolver:e("./solver/GSSolver"),GridBroadphase:e("./collision/GridBroadphase"),Heightfield:e("./shapes/Heightfield"),HingeConstraint:e("./constraints/HingeConstraint"),LockConstraint:e("./constraints/LockConstraint"),Mat3:e("./math/Mat3"),Material:e("./material/Material"),NaiveBroadphase:e("./collision/NaiveBroadphase"),ObjectCollisionMatrix:e("./collision/ObjectCollisionMatrix"),Pool:e("./utils/Pool"),Particle:e("./shapes/Particle"),Plane:e("./shapes/Plane"),PointToPointConstraint:e("./constraints/PointToPointConstraint"),Quaternion:e("./math/Quaternion"),Ray:e("./collision/Ray"),RaycastVehicle:e("./objects/RaycastVehicle"),RaycastResult:e("./collision/RaycastResult"),RigidVehicle:e("./objects/RigidVehicle"),RotationalEquation:e("./equations/RotationalEquation"),RotationalMotorEquation:e("./equations/RotationalMotorEquation"),SAPBroadphase:e("./collision/SAPBroadphase"),SPHSystem:e("./objects/SPHSystem"),Shape:e("./shapes/Shape"),Solver:e("./solver/Solver"),Sphere:e("./shapes/Sphere"),SplitSolver:e("./solver/SplitSolver"),Spring:e("./objects/Spring"),Trimesh:e("./shapes/Trimesh"),Vec3:e("./math/Vec3"),Vec3Pool:e("./utils/Vec3Pool"),World:e("./world/World")}},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":9,"./collision/RaycastResult":10,"./collision/SAPBroadphase":11,"./constraints/ConeTwistConstraint":12,"./constraints/Constraint":13,"./constraints/DistanceConstraint":14,"./constraints/HingeConstraint":15,"./constraints/LockConstraint":16,"./constraints/PointToPointConstraint":17,"./equations/ContactEquation":19,"./equations/Equation":20,"./equations/FrictionEquation":21,"./equations/RotationalEquation":22,"./equations/RotationalMotorEquation":23,"./material/ContactMaterial":24,"./material/Material":25,"./math/Mat3":27,"./math/Quaternion":28,"./math/Vec3":30,"./objects/Body":31,"./objects/RaycastVehicle":32,"./objects/RigidVehicle":33,"./objects/SPHSystem":34,"./objects/Spring":35,"./shapes/Box":37,"./shapes/ConvexPolyhedron":38,"./shapes/Cylinder":39,"./shapes/Heightfield":40,"./shapes/Particle":41,"./shapes/Plane":42,"./shapes/Shape":43,"./shapes/Sphere":44,"./shapes/Trimesh":45,"./solver/GSSolver":46,"./solver/Solver":47,"./solver/SplitSolver":48,"./utils/EventTarget":49,"./utils/Pool":51,"./utils/Vec3Pool":54,"./world/Narrowphase":55,"./world/World":56}],3:[function(e,n,a){var r=e("../math/Vec3");e("../utils/Utils"),n.exports=s;function s(d){d=d||{},this.lowerBound=new r,d.lowerBound&&this.lowerBound.copy(d.lowerBound),this.upperBound=new r,d.upperBound&&this.upperBound.copy(d.upperBound)}var o=new r;s.prototype.setFromPoints=function(d,h,l,u){var p=this.lowerBound,v=this.upperBound,g=l;p.copy(d[0]),g&&g.vmult(p,p),v.copy(p);for(var m=1;m<d.length;m++){var f=d[m];g&&(g.vmult(f,o),f=o),f.x>v.x&&(v.x=f.x),f.x<p.x&&(p.x=f.x),f.y>v.y&&(v.y=f.y),f.y<p.y&&(p.y=f.y),f.z>v.z&&(v.z=f.z),f.z<p.z&&(p.z=f.z)}return h&&(h.vadd(p,p),h.vadd(v,v)),u&&(p.x-=u,p.y-=u,p.z-=u,v.x+=u,v.y+=u,v.z+=u),this},s.prototype.copy=function(d){return this.lowerBound.copy(d.lowerBound),this.upperBound.copy(d.upperBound),this},s.prototype.clone=function(){return new s().copy(this)},s.prototype.extend=function(d){var h=d.lowerBound.x;this.lowerBound.x>h&&(this.lowerBound.x=h);var l=d.upperBound.x;this.upperBound.x<l&&(this.upperBound.x=l);var h=d.lowerBound.y;this.lowerBound.y>h&&(this.lowerBound.y=h);var l=d.upperBound.y;this.upperBound.y<l&&(this.upperBound.y=l);var h=d.lowerBound.z;this.lowerBound.z>h&&(this.lowerBound.z=h);var l=d.upperBound.z;this.upperBound.z<l&&(this.upperBound.z=l)},s.prototype.overlaps=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return(u.x<=l.x&&l.x<=p.x||h.x<=p.x&&p.x<=l.x)&&(u.y<=l.y&&l.y<=p.y||h.y<=p.y&&p.y<=l.y)&&(u.z<=l.z&&l.z<=p.z||h.z<=p.z&&p.z<=l.z)},s.prototype.contains=function(d){var h=this.lowerBound,l=this.upperBound,u=d.lowerBound,p=d.upperBound;return h.x<=u.x&&l.x>=p.x&&h.y<=u.y&&l.y>=p.y&&h.z<=u.z&&l.z>=p.z},s.prototype.getCorners=function(d,h,l,u,p,v,g,m){var f=this.lowerBound,x=this.upperBound;d.copy(f),h.set(x.x,f.y,f.z),l.set(x.x,x.y,f.z),u.set(f.x,x.y,x.z),p.set(x.x,f.y,f.z),v.set(f.x,x.y,f.z),g.set(f.x,f.y,x.z),m.copy(x)};var c=[new r,new r,new r,new r,new r,new r,new r,new r];s.prototype.toLocalFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],M=l[7];this.getCorners(u,p,v,g,m,f,x,M);for(var _=0;_!==8;_++){var A=l[_];d.pointToLocal(A,A)}return h.setFromPoints(l)},s.prototype.toWorldFrame=function(d,h){var l=c,u=l[0],p=l[1],v=l[2],g=l[3],m=l[4],f=l[5],x=l[6],M=l[7];this.getCorners(u,p,v,g,m,f,x,M);for(var _=0;_!==8;_++){var A=l[_];d.pointToWorld(A,A)}return h.setFromPoints(l)}},{"../math/Vec3":30,"../utils/Utils":53}],4:[function(e,n,a){n.exports=r;function r(){this.matrix=[]}r.prototype.get=function(s,o){if(s=s.index,o=o.index,o>s){var c=o;o=s,s=c}return this.matrix[(s*(s+1)>>1)+o-1]},r.prototype.set=function(s,o,c){if(s=s.index,o=o.index,o>s){var d=o;o=s,s=d}this.matrix[(s*(s+1)>>1)+o-1]=c?1:0},r.prototype.reset=function(){for(var s=0,o=this.matrix.length;s!==o;s++)this.matrix[s]=0},r.prototype.setNumObjects=function(s){this.matrix.length=s*(s-1)>>1}},{}],5:[function(e,n,a){var r=e("../objects/Body"),s=e("../math/Vec3"),o=e("../math/Quaternion");e("../shapes/Shape"),e("../shapes/Plane"),n.exports=c;function c(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}c.prototype.collisionPairs=function(g,m,f){throw new Error("collisionPairs not implemented for this BroadPhase class!")};var d=r.STATIC|r.KINEMATIC;c.prototype.needBroadphaseCollision=function(g,m){return!((g.collisionFilterGroup&m.collisionFilterMask)===0||(m.collisionFilterGroup&g.collisionFilterMask)===0||((g.type&d)!==0||g.sleepState===r.SLEEPING)&&((m.type&d)!==0||m.sleepState===r.SLEEPING))},c.prototype.intersectionTest=function(g,m,f,x){this.useBoundingBoxes?this.doBoundingBoxBroadphase(g,m,f,x):this.doBoundingSphereBroadphase(g,m,f,x)};var h=new s;new s,new o,new s,c.prototype.doBoundingSphereBroadphase=function(g,m,f,x){var M=h;m.position.vsub(g.position,M);var _=Math.pow(g.boundingRadius+m.boundingRadius,2),A=M.norm2();A<_&&(f.push(g),x.push(m))},c.prototype.doBoundingBoxBroadphase=function(g,m,f,x){g.aabbNeedsUpdate&&g.computeAABB(),m.aabbNeedsUpdate&&m.computeAABB(),g.aabb.overlaps(m.aabb)&&(f.push(g),x.push(m))};var l={keys:[]},u=[],p=[];c.prototype.makePairsUnique=function(g,m){for(var f=l,x=u,M=p,_=g.length,A=0;A!==_;A++)x[A]=g[A],M[A]=m[A];g.length=0,m.length=0;for(var A=0;A!==_;A++){var P=x[A].id,N=M[A].id,L=P<N?P+","+N:N+","+P;f[L]=A,f.keys.push(L)}for(var A=0;A!==f.keys.length;A++){var L=f.keys.pop(),S=f[L];g.push(x[S]),m.push(M[S]),delete f[L]}},c.prototype.setWorld=function(g){};var v=new s;c.boundingSphereCheck=function(g,m){var f=v;return g.position.vsub(m.position,f),Math.pow(g.shape.boundingSphereRadius+m.shape.boundingSphereRadius,2)>f.norm2()},c.prototype.aabbQuery=function(g,m,f){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Plane":42,"../shapes/Shape":43}],6:[function(e,n,a){n.exports=c;var r=e("./Broadphase"),s=e("../math/Vec3"),o=e("../shapes/Shape");function c(h,l,u,p,v){r.apply(this),this.nx=u||10,this.ny=p||10,this.nz=v||10,this.aabbMin=h||new s(100,100,100),this.aabbMax=l||new s(-100,-100,-100);var g=this.nx*this.ny*this.nz;if(g<=0)throw"GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=g,this.binLengths.length=g;for(var m=0;m<g;m++)this.bins[m]=[],this.binLengths[m]=0}c.prototype=new r,c.prototype.constructor=c;var d=new s;new s,c.prototype.collisionPairs=function(h,l,u){var p=h.numObjects(),v=h.bodies,Z=this.aabbMax,H=this.aabbMin,g=this.nx,m=this.ny,f=this.nz,x=m*f,M=f,_=1,A=Z.x,P=Z.y,N=Z.z,L=H.x,S=H.y,y=H.z,b=g/(A-L),B=m/(P-S),U=f/(N-y),W=(A-L)/g,X=(P-S)/m,tt=(N-y)/f,O=Math.sqrt(W*W+X*X+tt*tt)*.5,D=o.types,Q=D.SPHERE,K=D.PLANE;D.BOX,D.COMPOUND,D.CONVEXPOLYHEDRON;for(var F=this.bins,J=this.binLengths,z=this.bins.length,T=0;T!==z;T++)J[T]=0;var C=Math.ceil,H=Math.min,Z=Math.max;function et(le,Et,kt,jt,Jt,Xt,ce){var ie=(le-L)*b|0,ve=(Et-S)*B|0,G=(kt-y)*U|0,Pt=C((jt-L)*b),ot=C((Jt-S)*B),ft=C((Xt-y)*U);ie<0?ie=0:ie>=g&&(ie=g-1),ve<0?ve=0:ve>=m&&(ve=m-1),G<0?G=0:G>=f&&(G=f-1),Pt<0?Pt=0:Pt>=g&&(Pt=g-1),ot<0?ot=0:ot>=m&&(ot=m-1),ft<0?ft=0:ft>=f&&(ft=f-1),ie*=x,ve*=M,G*=_,Pt*=x,ot*=M,ft*=_;for(var zt=ie;zt<=Pt;zt+=x)for(var Ot=ve;Ot<=ot;Ot+=M)for(var se=G;se<=ft;se+=_){var Ee=zt+Ot+se;F[Ee][J[Ee]++]=ce}}for(var T=0;T!==p;T++){var q=v[T],nt=q.shape;switch(nt.type){case Q:var mt=q.position.x,Lt=q.position.y,vt=q.position.z,I=nt.radius;et(mt-I,Lt-I,vt-I,mt+I,Lt+I,vt+I,q);break;case K:nt.worldNormalNeedsUpdate&&nt.computeWorldNormal(q.quaternion);var dt=nt.worldNormal,ht=L+W*.5-q.position.x,qt=S+X*.5-q.position.y,yt=y+tt*.5-q.position.z,ne=d;ne.set(ht,qt,yt);for(var pt=0,R=0;pt!==g;pt++,R+=x,ne.y=qt,ne.x+=W)for(var E=0,$=0;E!==m;E++,$+=M,ne.z=yt,ne.y+=X)for(var lt=0,ct=0;lt!==f;lt++,ct+=_,ne.z+=tt)if(ne.dot(dt)<O){var at=R+$+ct;F[at][J[at]++]=q}break;default:q.aabbNeedsUpdate&&q.computeAABB(),et(q.aabb.lowerBound.x,q.aabb.lowerBound.y,q.aabb.lowerBound.z,q.aabb.upperBound.x,q.aabb.upperBound.y,q.aabb.upperBound.z,q);break}}for(var T=0;T!==z;T++){var St=J[T];if(St>1)for(var wt=F[T],pt=0;pt!==St;pt++)for(var q=wt[pt],E=0;E!==pt;E++){var Ft=wt[E];this.needBroadphaseCollision(q,Ft)&&this.intersectionTest(q,Ft,l,u)}}this.makePairsUnique(l,u)}},{"../math/Vec3":30,"../shapes/Shape":43,"./Broadphase":5}],7:[function(e,n,a){n.exports=o;var r=e("./Broadphase"),s=e("./AABB");function o(){r.apply(this)}o.prototype=new r,o.prototype.constructor=o,o.prototype.collisionPairs=function(c,d,h){var l=c.bodies,u=l.length,p,v,g,m;for(p=0;p!==u;p++)for(v=0;v!==p;v++)g=l[p],m=l[v],this.needBroadphaseCollision(g,m)&&this.intersectionTest(g,m,d,h)},new s,o.prototype.aabbQuery=function(c,d,h){h=h||[];for(var l=0;l<c.bodies.length;l++){var u=c.bodies[l];u.aabbNeedsUpdate&&u.computeAABB(),u.aabb.overlaps(d)&&h.push(u)}return h}},{"./AABB":3,"./Broadphase":5}],8:[function(e,n,a){n.exports=r;function r(){this.matrix={}}r.prototype.get=function(s,o){if(s=s.id,o=o.id,o>s){var c=o;o=s,s=c}return s+"-"+o in this.matrix},r.prototype.set=function(s,o,c){if(s=s.id,o=o.id,o>s){var d=o;o=s,s=d}c?this.matrix[s+"-"+o]=!0:delete this.matrix[s+"-"+o]},r.prototype.reset=function(){this.matrix={}},r.prototype.setNumObjects=function(s){}},{}],9:[function(e,n,a){n.exports=l;var r=e("../math/Vec3"),s=e("../math/Quaternion"),o=e("../math/Transform");e("../shapes/ConvexPolyhedron"),e("../shapes/Box");var c=e("../collision/RaycastResult"),d=e("../shapes/Shape"),h=e("../collision/AABB");function l(z,T){this.from=z?z.clone():new r,this.to=T?T.clone():new r,this._direction=new r,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new c,this.hasHit=!1,this.callback=function(C){}}l.prototype.constructor=l,l.CLOSEST=1,l.ANY=2,l.ALL=4;var u=new h,p=[];l.prototype.intersectWorld=function(z,T){return this.mode=T.mode||l.ANY,this.result=T.result||new c,this.skipBackfaces=!!T.skipBackfaces,this.collisionFilterMask=typeof T.collisionFilterMask<"u"?T.collisionFilterMask:-1,this.collisionFilterGroup=typeof T.collisionFilterGroup<"u"?T.collisionFilterGroup:-1,T.from&&this.from.copy(T.from),T.to&&this.to.copy(T.to),this.callback=T.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(u),p.length=0,z.broadphase.aabbQuery(z,u,p),this.intersectBodies(p),this.hasHit};var v=new r,g=new r;l.pointInTriangle=m;function m(z,T,C,H){H.vsub(T,K),C.vsub(T,v),z.vsub(T,g);var Z=K.dot(K),et=K.dot(v),q=K.dot(g),nt=v.dot(v),mt=v.dot(g),Lt,vt;return(Lt=nt*q-et*mt)>=0&&(vt=Z*mt-et*q)>=0&&Lt+vt<Z*nt-et*et}var f=new r,x=new s;l.prototype.intersectBody=function(z,T){T&&(this.result=T,this._updateDirection());var C=this.checkCollisionResponse;if(!(C&&!z.collisionResponse)&&!((this.collisionFilterGroup&z.collisionFilterMask)===0||(z.collisionFilterGroup&this.collisionFilterMask)===0))for(var H=f,Z=x,et=0,q=z.shapes.length;et<q;et++){var nt=z.shapes[et];if(!(C&&!nt.collisionResponse)&&(z.quaternion.mult(z.shapeOrientations[et],Z),z.quaternion.vmult(z.shapeOffsets[et],H),H.vadd(z.position,H),this.intersectShape(nt,Z,H,z),this.result._shouldStop))break}},l.prototype.intersectBodies=function(z,T){T&&(this.result=T,this._updateDirection());for(var C=0,H=z.length;!this.result._shouldStop&&C<H;C++)this.intersectBody(z[C])},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize()},l.prototype.intersectShape=function(z,T,C,H){var Z=this.from,et=J(Z,this._direction,C);if(!(et>z.boundingSphereRadius)){var q=this[z.type];q&&q.call(this,z,T,C,H)}},new r,new r;var M=new r,_=new r,A=new r,P=new r;new r,new c,l.prototype.intersectBox=function(z,T,C,H){return this.intersectConvex(z.convexPolyhedronRepresentation,T,C,H)},l.prototype[d.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(z,T,C,H){var Z=this.from,et=this.to,q=this._direction,nt=new r(0,0,1);T.vmult(nt,nt);var mt=new r;Z.vsub(C,mt);var Lt=mt.dot(nt);et.vsub(C,mt);var vt=mt.dot(nt);if(!(Lt*vt>0)&&!(Z.distanceTo(et)<Lt)){var I=nt.dot(q);if(!(Math.abs(I)<this.precision)){var dt=new r,ht=new r,qt=new r;Z.vsub(C,dt);var yt=-nt.dot(dt)/I;q.scale(yt,ht),Z.vadd(ht,qt),this.reportIntersection(nt,qt,z,H,-1)}}},l.prototype[d.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(z){var T=this.to,C=this.from;z.lowerBound.x=Math.min(T.x,C.x),z.lowerBound.y=Math.min(T.y,C.y),z.lowerBound.z=Math.min(T.z,C.z),z.upperBound.x=Math.max(T.x,C.x),z.upperBound.y=Math.max(T.y,C.y),z.upperBound.z=Math.max(T.z,C.z)};var N={faceList:[0]};l.prototype.intersectHeightfield=function(z,T,C,H){z.data,z.elementSize;var Z=new r,et=new l(this.from,this.to);o.pointToLocalFrame(C,T,et.from,et.from),o.pointToLocalFrame(C,T,et.to,et.to);var q=[],nt=null,mt=null,Lt=null,vt=null,I=z.getIndexOfPosition(et.from.x,et.from.y,q,!1);if(I&&(nt=q[0],mt=q[1],Lt=q[0],vt=q[1]),I=z.getIndexOfPosition(et.to.x,et.to.y,q,!1),I&&((nt===null||q[0]<nt)&&(nt=q[0]),(Lt===null||q[0]>Lt)&&(Lt=q[0]),(mt===null||q[1]<mt)&&(mt=q[1]),(vt===null||q[1]>vt)&&(vt=q[1])),nt!==null){var dt=[];z.getRectMinMax(nt,mt,Lt,vt,dt),dt[0],dt[1];for(var ht=nt;ht<=Lt;ht++)for(var qt=mt;qt<=vt;qt++){if(this.result._shouldStop||(z.getConvexTrianglePillar(ht,qt,!1),o.pointToWorldFrame(C,T,z.pillarOffset,Z),this.intersectConvex(z.pillarConvex,T,Z,H,N),this.result._shouldStop))return;z.getConvexTrianglePillar(ht,qt,!0),o.pointToWorldFrame(C,T,z.pillarOffset,Z),this.intersectConvex(z.pillarConvex,T,Z,H,N)}}},l.prototype[d.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var L=new r,S=new r;l.prototype.intersectSphere=function(z,T,C,H){var Z=this.from,et=this.to,q=z.radius,nt=Math.pow(et.x-Z.x,2)+Math.pow(et.y-Z.y,2)+Math.pow(et.z-Z.z,2),mt=2*((et.x-Z.x)*(Z.x-C.x)+(et.y-Z.y)*(Z.y-C.y)+(et.z-Z.z)*(Z.z-C.z)),Lt=Math.pow(Z.x-C.x,2)+Math.pow(Z.y-C.y,2)+Math.pow(Z.z-C.z,2)-Math.pow(q,2),vt=Math.pow(mt,2)-4*nt*Lt,I=L,dt=S;if(!(vt<0))if(vt===0)Z.lerp(et,vt,I),I.vsub(C,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1);else{var ht=(-mt-Math.sqrt(vt))/(2*nt),qt=(-mt+Math.sqrt(vt))/(2*nt);if(ht>=0&&ht<=1&&(Z.lerp(et,ht,I),I.vsub(C,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1)),this.result._shouldStop)return;qt>=0&&qt<=1&&(Z.lerp(et,qt,I),I.vsub(C,dt),dt.normalize(),this.reportIntersection(dt,I,z,H,-1))}},l.prototype[d.types.SPHERE]=l.prototype.intersectSphere;var y=new r;new r,new r;var b=new r;l.prototype.intersectConvex=function(T,C,H,Z,et){for(var q=y,nt=b,mt=et&&et.faceList||null,Lt=T.faces,vt=T.vertices,I=T.faceNormals,dt=this._direction,ht=this.from,qt=this.to,yt=ht.distanceTo(qt),ne=mt?mt.length:Lt.length,pt=this.result,R=0;!pt._shouldStop&&R<ne;R++){var E=mt?mt[R]:R,$=Lt[E],lt=I[E],ct=C,at=H;nt.copy(vt[$[0]]),ct.vmult(nt,nt),nt.vadd(at,nt),nt.vsub(ht,nt),ct.vmult(lt,q);var St=dt.dot(q);if(!(Math.abs(St)<this.precision)){var wt=q.dot(nt)/St;if(!(wt<0)){dt.mult(wt,M),M.vadd(ht,M),_.copy(vt[$[0]]),ct.vmult(_,_),at.vadd(_,_);for(var Ft=1;!pt._shouldStop&&Ft<$.length-1;Ft++){A.copy(vt[$[Ft]]),P.copy(vt[$[Ft+1]]),ct.vmult(A,A),ct.vmult(P,P),at.vadd(A,A),at.vadd(P,P);var le=M.distanceTo(ht);!(m(M,_,A,P)||m(M,A,_,P))||le>yt||this.reportIntersection(q,M,T,Z,E)}}}}},l.prototype[d.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var B=new r,U=new r,W=new r,X=new r,tt=new r,O=new r;new h;var D=[],Q=new o;l.prototype.intersectTrimesh=function(T,C,H,Z,et){var q=B,nt=D,mt=Q,Lt=b,vt=U,I=W,dt=X,ht=O,qt=tt;et&&et.faceList;var yt=T.indices;T.vertices,T.faceNormals;var ne=this.from,pt=this.to,R=this._direction;mt.position.copy(H),mt.quaternion.copy(C),o.vectorToLocalFrame(H,C,R,vt),o.pointToLocalFrame(H,C,ne,I),o.pointToLocalFrame(H,C,pt,dt);var E=I.distanceSquared(dt);T.tree.rayQuery(this,mt,nt);for(var $=0,lt=nt.length;!this.result._shouldStop&&$!==lt;$++){var ct=nt[$];T.getNormal(ct,q),T.getVertex(yt[ct*3],_),_.vsub(I,Lt);var at=vt.dot(q),St=q.dot(Lt)/at;if(!(St<0)){vt.scale(St,M),M.vadd(I,M),T.getVertex(yt[ct*3+1],A),T.getVertex(yt[ct*3+2],P);var wt=M.distanceSquared(I);!(m(M,A,_,P)||m(M,_,A,P))||wt>E||(o.vectorToWorldFrame(C,q,qt),o.pointToWorldFrame(H,C,M,ht),this.reportIntersection(qt,ht,T,Z,ct))}}nt.length=0},l.prototype[d.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(z,T,C,H,Z){var et=this.from,q=this.to,nt=et.distanceTo(T),mt=this.result;if(!(this.skipBackfaces&&z.dot(this._direction)>0))switch(mt.hitFaceIndex=typeof Z<"u"?Z:-1,this.mode){case l.ALL:this.hasHit=!0,mt.set(et,q,z,T,C,H,nt),mt.hasHit=!0,this.callback(mt);break;case l.CLOSEST:(nt<mt.distance||!mt.hasHit)&&(this.hasHit=!0,mt.hasHit=!0,mt.set(et,q,z,T,C,H,nt));break;case l.ANY:this.hasHit=!0,mt.hasHit=!0,mt.set(et,q,z,T,C,H,nt),mt._shouldStop=!0;break}};var K=new r,F=new r;function J(z,T,C){C.vsub(z,K);var H=K.dot(T);T.mult(H,F),F.vadd(z,F);var Z=C.distanceTo(F);return Z}},{"../collision/AABB":3,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/Box":37,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43}],10:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(){this.rayFromWorld=new r,this.rayToWorld=new r,this.hitNormalWorld=new r,this.hitPointWorld=new r,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1}s.prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1},s.prototype.abort=function(){this._shouldStop=!0},s.prototype.set=function(o,c,d,h,l,u,p){this.rayFromWorld.copy(o),this.rayToWorld.copy(c),this.hitNormalWorld.copy(d),this.hitPointWorld.copy(h),this.shape=l,this.body=u,this.distance=p}},{"../math/Vec3":30}],11:[function(e,n,a){e("../shapes/Shape");var r=e("../collision/Broadphase");n.exports=s;function s(o){r.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var c=this.axisList;this._addBodyHandler=function(d){c.push(d.body)},this._removeBodyHandler=function(d){var h=c.indexOf(d.body);h!==-1&&c.splice(h,1)},o&&this.setWorld(o)}s.prototype=new r,s.prototype.setWorld=function(o){this.axisList.length=0;for(var c=0;c<o.bodies.length;c++)this.axisList.push(o.bodies[c]);o.removeEventListener("addBody",this._addBodyHandler),o.removeEventListener("removeBody",this._removeBodyHandler),o.addEventListener("addBody",this._addBodyHandler),o.addEventListener("removeBody",this._removeBodyHandler),this.world=o,this.dirty=!0},s.insertionSortX=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.x<=h.aabb.lowerBound.x);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortY=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.y<=h.aabb.lowerBound.y);l--)o[l+1]=o[l];o[l+1]=h}return o},s.insertionSortZ=function(o){for(var c=1,d=o.length;c<d;c++){for(var h=o[c],l=c-1;l>=0&&!(o[l].aabb.lowerBound.z<=h.aabb.lowerBound.z);l--)o[l+1]=o[l];o[l+1]=h}return o},s.prototype.collisionPairs=function(o,c,d){var h=this.axisList,l=h.length,u=this.axisIndex,p,v;for(this.dirty&&(this.sortList(),this.dirty=!1),p=0;p!==l;p++){var g=h[p];for(v=p+1;v<l;v++){var m=h[v];if(this.needBroadphaseCollision(g,m)){if(!s.checkBounds(g,m,u))break;this.intersectionTest(g,m,c,d)}}}},s.prototype.sortList=function(){for(var o=this.axisList,c=this.axisIndex,d=o.length,h=0;h!==d;h++){var l=o[h];l.aabbNeedsUpdate&&l.computeAABB()}c===0?s.insertionSortX(o):c===1?s.insertionSortY(o):c===2&&s.insertionSortZ(o)},s.checkBounds=function(o,c,d){var h,l;d===0?(h=o.position.x,l=c.position.x):d===1?(h=o.position.y,l=c.position.y):d===2&&(h=o.position.z,l=c.position.z);var u=o.boundingRadius,p=c.boundingRadius,v=h+u,g=l-p;return g<v},s.prototype.autoDetectAxis=function(){for(var o=0,c=0,d=0,h=0,l=0,u=0,p=this.axisList,v=p.length,g=1/v,m=0;m!==v;m++){var f=p[m],x=f.position.x;o+=x,c+=x*x;var M=f.position.y;d+=M,h+=M*M;var _=f.position.z;l+=_,u+=_*_}var A=c-o*o*g,P=h-d*d*g,N=u-l*l*g;A>P?A>N?this.axisIndex=0:this.axisIndex=2:P>N?this.axisIndex=1:this.axisIndex=2},s.prototype.aabbQuery=function(o,c,d){d=d||[],this.dirty&&(this.sortList(),this.dirty=!1);var h=this.axisIndex,l="x";h===1&&(l="y"),h===2&&(l="z");var u=this.axisList;c.lowerBound[l],c.upperBound[l];for(var p=0;p<u.length;p++){var v=u[p];v.aabbNeedsUpdate&&v.computeAABB(),v.aabb.overlaps(c)&&d.push(v)}return d}},{"../collision/Broadphase":5,"../shapes/Shape":43}],12:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/ConeEquation"),o=e("../equations/RotationalEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6,v=u.pivotA?u.pivotA.clone():new c,g=u.pivotB?u.pivotB.clone():new c;this.axisA=u.axisA?u.axisA.clone():new c,this.axisB=u.axisB?u.axisB.clone():new c,r.call(this,h,v,l,g,p),this.collideConnected=!!u.collideConnected,this.angle=typeof u.angle<"u"?u.angle:0;var m=this.coneEquation=new s(h,l,u),f=this.twistEquation=new o(h,l,u);this.twistAngle=typeof u.twistAngle<"u"?u.twistAngle:0,m.maxForce=0,m.minForce=-p,f.maxForce=0,f.minForce=-p,this.equations.push(m,f)}d.prototype=new r,d.constructor=d,new c,new c,d.prototype.update=function(){var h=this.bodyA,l=this.bodyB,u=this.coneEquation,p=this.twistEquation;r.prototype.update.call(this),h.vectorToWorldFrame(this.axisA,u.axisA),l.vectorToWorldFrame(this.axisB,u.axisB),this.axisA.tangents(p.axisA,p.axisA),h.vectorToWorldFrame(p.axisA,p.axisA),this.axisB.tangents(p.axisB,p.axisB),l.vectorToWorldFrame(p.axisB,p.axisB),u.angle=this.angle,p.maxAngle=this.twistAngle}},{"../equations/ConeEquation":18,"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],13:[function(e,n,a){n.exports=s;var r=e("../utils/Utils");function s(o,c,d){d=r.defaults(d,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=o,this.bodyB=c,this.id=s.idCounter++,this.collideConnected=d.collideConnected,d.wakeUpBodies&&(o&&o.wakeUp(),c&&c.wakeUp())}s.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},s.prototype.enable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!0},s.prototype.disable=function(){for(var o=this.equations,c=0;c<o.length;c++)o[c].enabled=!1},s.idCounter=0},{"../utils/Utils":53}],14:[function(e,n,a){n.exports=o;var r=e("./Constraint"),s=e("../equations/ContactEquation");function o(c,d,h,l){r.call(this,c,d),typeof h>"u"&&(h=c.position.distanceTo(d.position)),typeof l>"u"&&(l=1e6),this.distance=h;var u=this.distanceEquation=new s(c,d);this.equations.push(u),u.minForce=-l,u.maxForce=l}o.prototype=new r,o.prototype.update=function(){var c=this.bodyA,d=this.bodyB,h=this.distanceEquation,l=this.distance*.5,u=h.ni;d.position.vsub(c.position,u),u.normalize(),u.mult(l,h.ri),u.mult(-l,h.rj)}},{"../equations/ContactEquation":19,"./Constraint":13}],15:[function(e,n,a){n.exports=d,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation"),o=e("../equations/RotationalMotorEquation");e("../equations/ContactEquation");var c=e("../math/Vec3");function d(u,p,v){v=v||{};var g=typeof v.maxForce<"u"?v.maxForce:1e6,m=v.pivotA?v.pivotA.clone():new c,f=v.pivotB?v.pivotB.clone():new c;r.call(this,u,m,p,f,g);var x=this.axisA=v.axisA?v.axisA.clone():new c(1,0,0);x.normalize();var M=this.axisB=v.axisB?v.axisB.clone():new c(1,0,0);M.normalize();var _=this.rotationalEquation1=new s(u,p,v),A=this.rotationalEquation2=new s(u,p,v),P=this.motorEquation=new o(u,p,g);P.enabled=!1,this.equations.push(_,A,P)}d.prototype=new r,d.constructor=d,d.prototype.enableMotor=function(){this.motorEquation.enabled=!0},d.prototype.disableMotor=function(){this.motorEquation.enabled=!1},d.prototype.setMotorSpeed=function(u){this.motorEquation.targetVelocity=u},d.prototype.setMotorMaxForce=function(u){this.motorEquation.maxForce=u,this.motorEquation.minForce=-u};var h=new c,l=new c;d.prototype.update=function(){var u=this.bodyA,p=this.bodyB,v=this.motorEquation,g=this.rotationalEquation1,m=this.rotationalEquation2,f=h,x=l,M=this.axisA,_=this.axisB;r.prototype.update.call(this),u.quaternion.vmult(M,f),p.quaternion.vmult(_,x),f.tangents(g.axisA,m.axisA),g.axisB.copy(x),m.axisB.copy(x),this.motorEquation.enabled&&(u.quaternion.vmult(this.axisA,v.axisA),p.quaternion.vmult(this.axisB,v.axisB))}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],16:[function(e,n,a){n.exports=c,e("./Constraint");var r=e("./PointToPointConstraint"),s=e("../equations/RotationalEquation");e("../equations/RotationalMotorEquation"),e("../equations/ContactEquation");var o=e("../math/Vec3");function c(d,h,l){l=l||{};var u=typeof l.maxForce<"u"?l.maxForce:1e6,p=new o,v=new o,g=new o;d.position.vadd(h.position,g),g.scale(.5,g),h.pointToLocalFrame(g,v),d.pointToLocalFrame(g,p),r.call(this,d,p,h,v,u);var m=this.rotationalEquation1=new s(d,h,l),f=this.rotationalEquation2=new s(d,h,l),x=this.rotationalEquation3=new s(d,h,l);this.equations.push(m,f,x)}c.prototype=new r,c.constructor=c,new o,new o,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB;this.motorEquation;var l=this.rotationalEquation1,u=this.rotationalEquation2,p=this.rotationalEquation3;r.prototype.update.call(this),d.vectorToWorldFrame(o.UNIT_X,l.axisA),h.vectorToWorldFrame(o.UNIT_Y,l.axisB),d.vectorToWorldFrame(o.UNIT_Y,u.axisA),h.vectorToWorldFrame(o.UNIT_Z,u.axisB),d.vectorToWorldFrame(o.UNIT_Z,p.axisA),h.vectorToWorldFrame(o.UNIT_X,p.axisB)}},{"../equations/ContactEquation":19,"../equations/RotationalEquation":22,"../equations/RotationalMotorEquation":23,"../math/Vec3":30,"./Constraint":13,"./PointToPointConstraint":17}],17:[function(e,n,a){n.exports=c;var r=e("./Constraint"),s=e("../equations/ContactEquation"),o=e("../math/Vec3");function c(d,h,l,u,p){r.call(this,d,l),p=typeof p<"u"?p:1e6,this.pivotA=h?h.clone():new o,this.pivotB=u?u.clone():new o;var v=this.equationX=new s(d,l),g=this.equationY=new s(d,l),m=this.equationZ=new s(d,l);this.equations.push(v,g,m),v.minForce=g.minForce=m.minForce=-p,v.maxForce=g.maxForce=m.maxForce=p,v.ni.set(1,0,0),g.ni.set(0,1,0),m.ni.set(0,0,1)}c.prototype=new r,c.prototype.update=function(){var d=this.bodyA,h=this.bodyB,l=this.equationX,u=this.equationY,p=this.equationZ;d.quaternion.vmult(this.pivotA,l.ri),h.quaternion.vmult(this.pivotB,l.rj),u.ri.copy(l.ri),u.rj.copy(l.rj),p.ri.copy(l.ri),p.rj.copy(l.rj)}},{"../equations/ContactEquation":19,"../math/Vec3":30,"./Constraint":13}],18:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.angle=typeof u.angle<"u"?u.angle:0}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.angle)-p.dot(v),_=this.computeGW(),A=this.computeGiMf(),P=-M*l-_*u-h*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],19:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(m,f,x){x=typeof x<"u"?x:1e6,r.call(this,m,f,0,x),this.restitution=0,this.ri=new s,this.rj=new s,this.ni=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s,h=new s;o.prototype.computeB=function(m){var f=this.a,x=this.b,M=this.bi,_=this.bj,A=this.ri,P=this.rj,N=c,L=d,S=M.velocity,y=M.angularVelocity;M.force,M.torque;var b=_.velocity,B=_.angularVelocity;_.force,_.torque;var U=h,W=this.jacobianElementA,X=this.jacobianElementB,tt=this.ni;A.cross(tt,N),P.cross(tt,L),tt.negate(W.spatial),N.negate(W.rotational),X.spatial.copy(tt),X.rotational.copy(L),U.copy(_.position),U.vadd(P,U),U.vsub(M.position,U),U.vsub(A,U);var O=tt.dot(U),D=this.restitution+1,Q=D*b.dot(tt)-D*S.dot(tt)+B.dot(L)-y.dot(N),K=this.computeGiMf(),F=-O*f-Q*x-m*K;return F};var l=new s,u=new s,p=new s,v=new s,g=new s;o.prototype.getImpactVelocityAlongNormal=function(){var m=l,f=u,x=p,M=v,_=g;return this.bi.position.vadd(this.ri,x),this.bj.position.vadd(this.rj,M),this.bi.getVelocityAtWorldPoint(x,m),this.bj.getVelocityAtWorldPoint(M,f),m.vsub(f,_),this.ni.dot(_)}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],20:[function(e,n,a){n.exports=o;var r=e("../math/JacobianElement"),s=e("../math/Vec3");function o(g,m,f,x){this.id=o.id++,this.minForce=typeof f>"u"?-1e6:f,this.maxForce=typeof x>"u"?1e6:x,this.bi=g,this.bj=m,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new r,this.jacobianElementB=new r,this.enabled=!0,this.setSpookParams(1e7,4,1/60)}o.prototype.constructor=o,o.id=0,o.prototype.setSpookParams=function(g,m,f){var x=m,M=g,_=f;this.a=4/(_*(1+4*x)),this.b=4*x/(1+4*x),this.eps=4/(_*_*M*(1+4*x))},o.prototype.computeB=function(g,m,f){var x=this.computeGW(),M=this.computeGq(),_=this.computeGiMf();return-M*g-x*m-_*f},o.prototype.computeGq=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.position,_=x.position;return g.spatial.dot(M)+m.spatial.dot(_)};var c=new s;o.prototype.computeGW=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.velocity,_=x.velocity,A=f.angularVelocity||c,P=x.angularVelocity||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,P)},o.prototype.computeGWlambda=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.vlambda,_=x.vlambda,A=f.wlambda||c,P=x.wlambda||c;return g.multiplyVectors(M,A)+m.multiplyVectors(_,P)};var d=new s,h=new s,l=new s,u=new s;o.prototype.computeGiMf=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.force,_=f.torque,A=x.force,P=x.torque,N=f.invMassSolve,L=x.invMassSolve;return f.invInertiaWorldSolve?f.invInertiaWorldSolve.vmult(_,l):l.set(0,0,0),x.invInertiaWorldSolve?x.invInertiaWorldSolve.vmult(P,u):u.set(0,0,0),M.mult(N,d),A.mult(L,h),g.multiplyVectors(d,l)+m.multiplyVectors(h,u)};var p=new s;o.prototype.computeGiMGt=function(){var g=this.jacobianElementA,m=this.jacobianElementB,f=this.bi,x=this.bj,M=f.invMassSolve,_=x.invMassSolve,A=f.invInertiaWorldSolve,P=x.invInertiaWorldSolve,N=M+_;return A&&(A.vmult(g.rotational,p),N+=p.dot(g.rotational)),P&&(P.vmult(m.rotational,p),N+=p.dot(m.rotational)),N};var v=new s;new s,new s,new s,new s,new s,o.prototype.addToWlambda=function(g){var m=this.jacobianElementA,f=this.jacobianElementB,x=this.bi,M=this.bj,_=v;m.spatial.mult(x.invMassSolve*g,_),x.vlambda.vadd(_,x.vlambda),f.spatial.mult(M.invMassSolve*g,_),M.vlambda.vadd(_,M.vlambda),x.invInertiaWorldSolve&&(x.invInertiaWorldSolve.vmult(m.rotational,_),_.mult(g,_),x.wlambda.vadd(_,x.wlambda)),M.invInertiaWorldSolve&&(M.invInertiaWorldSolve.vmult(f.rotational,_),_.mult(g,_),M.wlambda.vadd(_,M.wlambda))},o.prototype.computeC=function(){return this.computeGiMGt()+this.eps}},{"../math/JacobianElement":26,"../math/Vec3":30}],21:[function(e,n,a){n.exports=o;var r=e("./Equation"),s=e("../math/Vec3");e("../math/Mat3");function o(h,l,u){r.call(this,h,l,-u,u),this.ri=new s,this.rj=new s,this.t=new s}o.prototype=new r,o.prototype.constructor=o;var c=new s,d=new s;o.prototype.computeB=function(h){this.a;var l=this.b;this.bi,this.bj;var u=this.ri,p=this.rj,v=c,g=d,m=this.t;u.cross(m,v),p.cross(m,g);var f=this.jacobianElementA,x=this.jacobianElementB;m.negate(f.spatial),v.negate(f.rotational),x.spatial.copy(m),x.rotational.copy(g);var M=this.computeGW(),_=this.computeGiMf(),A=-M*l-h*_;return A}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],22:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(h,l,u){u=u||{};var p=typeof u.maxForce<"u"?u.maxForce:1e6;s.call(this,h,l,-p,p),this.axisA=u.axisA?u.axisA.clone():new r(1,0,0),this.axisB=u.axisB?u.axisB.clone():new r(0,1,0),this.maxAngle=Math.PI/2}o.prototype=new s,o.prototype.constructor=o;var c=new r,d=new r;o.prototype.computeB=function(h){var l=this.a,u=this.b,p=this.axisA,v=this.axisB,g=c,m=d,f=this.jacobianElementA,x=this.jacobianElementB;p.cross(v,g),v.cross(p,m),f.rotational.copy(m),x.rotational.copy(g);var M=Math.cos(this.maxAngle)-p.dot(v),_=this.computeGW(),A=this.computeGiMf(),P=-M*l-_*u-h*A;return P}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],23:[function(e,n,a){n.exports=o;var r=e("../math/Vec3");e("../math/Mat3");var s=e("./Equation");function o(c,d,h){h=typeof h<"u"?h:1e6,s.call(this,c,d,-h,h),this.axisA=new r,this.axisB=new r,this.targetVelocity=0}o.prototype=new s,o.prototype.constructor=o,o.prototype.computeB=function(c){this.a;var d=this.b;this.bi,this.bj;var h=this.axisA,l=this.axisB,u=this.jacobianElementA,p=this.jacobianElementB;u.rotational.copy(h),l.negate(p.rotational);var v=this.computeGW()-this.targetVelocity,g=this.computeGiMf(),m=-v*d-c*g;return m}},{"../math/Mat3":27,"../math/Vec3":30,"./Equation":20}],24:[function(e,n,a){var r=e("../utils/Utils");n.exports=s;function s(o,c,d){d=r.defaults(d,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=s.idCounter++,this.materials=[o,c],this.friction=d.friction,this.restitution=d.restitution,this.contactEquationStiffness=d.contactEquationStiffness,this.contactEquationRelaxation=d.contactEquationRelaxation,this.frictionEquationStiffness=d.frictionEquationStiffness,this.frictionEquationRelaxation=d.frictionEquationRelaxation}s.idCounter=0},{"../utils/Utils":53}],25:[function(e,n,a){n.exports=r;function r(s){var o="";s=s||{},typeof s=="string"?(o=s,s={}):typeof s=="object"&&(o=""),this.name=o,this.id=r.idCounter++,this.friction=typeof s.friction<"u"?s.friction:-1,this.restitution=typeof s.restitution<"u"?s.restitution:-1}r.idCounter=0},{}],26:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(){this.spatial=new r,this.rotational=new r}s.prototype.multiplyElement=function(o){return o.spatial.dot(this.spatial)+o.rotational.dot(this.rotational)},s.prototype.multiplyVectors=function(o,c){return o.dot(this.spatial)+c.dot(this.rotational)}},{"./Vec3":30}],27:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(o){o?this.elements=o:this.elements=[0,0,0,0,0,0,0,0,0]}s.prototype.identity=function(){var o=this.elements;o[0]=1,o[1]=0,o[2]=0,o[3]=0,o[4]=1,o[5]=0,o[6]=0,o[7]=0,o[8]=1},s.prototype.setZero=function(){var o=this.elements;o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=0,o[6]=0,o[7]=0,o[8]=0},s.prototype.setTrace=function(o){var c=this.elements;c[0]=o.x,c[4]=o.y,c[8]=o.z},s.prototype.getTrace=function(c){var c=c||new r,d=this.elements;c.x=d[0],c.y=d[4],c.z=d[8]},s.prototype.vmult=function(o,c){c=c||new r;var d=this.elements,h=o.x,l=o.y,u=o.z;return c.x=d[0]*h+d[1]*l+d[2]*u,c.y=d[3]*h+d[4]*l+d[5]*u,c.z=d[6]*h+d[7]*l+d[8]*u,c},s.prototype.smult=function(o){for(var c=0;c<this.elements.length;c++)this.elements[c]*=o},s.prototype.mmult=function(o,c){for(var d=c||new s,h=0;h<3;h++)for(var l=0;l<3;l++){for(var u=0,p=0;p<3;p++)u+=o.elements[h+p*3]*this.elements[p+l*3];d.elements[h+l*3]=u}return d},s.prototype.scale=function(o,c){c=c||new s;for(var d=this.elements,h=c.elements,l=0;l!==3;l++)h[3*l+0]=o.x*d[3*l+0],h[3*l+1]=o.y*d[3*l+1],h[3*l+2]=o.z*d[3*l+2];return c},s.prototype.solve=function(o,c){c=c||new r;for(var d=3,h=4,l=[],u=0;u<d*h;u++)l.push(0);var u,p;for(u=0;u<3;u++)for(p=0;p<3;p++)l[u+h*p]=this.elements[u+3*p];l[3]=o.x,l[7]=o.y,l[11]=o.z;var v=3,g=v,m,f=4,x;do{if(u=g-v,l[u+h*u]===0){for(p=u+1;p<g;p++)if(l[u+h*p]!==0){m=f;do x=f-m,l[x+h*u]+=l[x+h*p];while(--m);break}}if(l[u+h*u]!==0)for(p=u+1;p<g;p++){var M=l[u+h*p]/l[u+h*u];m=f;do x=f-m,l[x+h*p]=x<=u?0:l[x+h*p]-l[x+h*u]*M;while(--m)}}while(--v);if(c.z=l[2*h+3]/l[2*h+2],c.y=(l[1*h+3]-l[1*h+2]*c.z)/l[1*h+1],c.x=(l[0*h+3]-l[0*h+2]*c.z-l[0*h+1]*c.y)/l[0*h+0],isNaN(c.x)||isNaN(c.y)||isNaN(c.z)||c.x===1/0||c.y===1/0||c.z===1/0)throw"Could not solve equation! Got x=["+c.toString()+"], b=["+o.toString()+"], A=["+this.toString()+"]";return c},s.prototype.e=function(o,c,d){if(d===void 0)return this.elements[c+3*o];this.elements[c+3*o]=d},s.prototype.copy=function(o){for(var c=0;c<o.elements.length;c++)this.elements[c]=o.elements[c];return this},s.prototype.toString=function(){for(var o="",c=",",d=0;d<9;d++)o+=this.elements[d]+c;return o},s.prototype.reverse=function(o){o=o||new s;for(var c=3,d=6,h=[],l=0;l<c*d;l++)h.push(0);var l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)h[l+d*u]=this.elements[l+3*u];h[3]=1,h[9]=0,h[15]=0,h[4]=0,h[10]=1,h[16]=0,h[5]=0,h[11]=0,h[17]=1;var p=3,v=p,g,m=d,f;do{if(l=v-p,h[l+d*l]===0){for(u=l+1;u<v;u++)if(h[l+d*u]!==0){g=m;do f=m-g,h[f+d*l]+=h[f+d*u];while(--g);break}}if(h[l+d*l]!==0)for(u=l+1;u<v;u++){var x=h[l+d*u]/h[l+d*l];g=m;do f=m-g,h[f+d*u]=f<=l?0:h[f+d*u]-h[f+d*l]*x;while(--g)}}while(--p);l=2;do{u=l-1;do{var x=h[l+d*u]/h[l+d*l];g=d;do f=d-g,h[f+d*u]=h[f+d*u]-h[f+d*l]*x;while(--g)}while(u--)}while(--l);l=2;do{var x=1/h[l+d*l];g=d;do f=d-g,h[f+d*l]=h[f+d*l]*x;while(--g)}while(l--);l=2;do{u=2;do{if(f=h[c+u+d*l],isNaN(f)||f===1/0)throw"Could not reverse! A=["+this.toString()+"]";o.e(l,u,f)}while(u--)}while(l--);return o},s.prototype.setRotationFromQuaternion=function(o){var c=o.x,d=o.y,h=o.z,l=o.w,u=c+c,p=d+d,v=h+h,g=c*u,m=c*p,f=c*v,x=d*p,M=d*v,_=h*v,A=l*u,P=l*p,N=l*v,L=this.elements;return L[0]=1-(x+_),L[1]=m-N,L[2]=f+P,L[3]=m+N,L[4]=1-(g+_),L[5]=M-A,L[6]=f-P,L[7]=M+A,L[8]=1-(g+x),this},s.prototype.transpose=function(o){o=o||new s;for(var c=o.elements,d=this.elements,h=0;h!==3;h++)for(var l=0;l!==3;l++)c[3*h+l]=d[3*l+h];return o}},{"./Vec3":30}],28:[function(e,n,a){n.exports=s;var r=e("./Vec3");function s(u,p,v,g){this.x=u!==void 0?u:0,this.y=p!==void 0?p:0,this.z=v!==void 0?v:0,this.w=g!==void 0?g:1}s.prototype.set=function(u,p,v,g){this.x=u,this.y=p,this.z=v,this.w=g},s.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},s.prototype.toArray=function(){return[this.x,this.y,this.z,this.w]},s.prototype.setFromAxisAngle=function(u,p){var v=Math.sin(p*.5);this.x=u.x*v,this.y=u.y*v,this.z=u.z*v,this.w=Math.cos(p*.5)},s.prototype.toAxisAngle=function(u){u=u||new r,this.normalize();var p=2*Math.acos(this.w),v=Math.sqrt(1-this.w*this.w);return v<.001?(u.x=this.x,u.y=this.y,u.z=this.z):(u.x=this.x/v,u.y=this.y/v,u.z=this.z/v),[u,p]};var o=new r,c=new r;s.prototype.setFromVectors=function(u,p){if(u.isAntiparallelTo(p)){var v=o,g=c;u.tangents(v,g),this.setFromAxisAngle(v,Math.PI)}else{var m=u.cross(p);this.x=m.x,this.y=m.y,this.z=m.z,this.w=Math.sqrt(Math.pow(u.norm(),2)*Math.pow(p.norm(),2))+u.dot(p),this.normalize()}};var d=new r,h=new r,l=new r;s.prototype.mult=function(u,p){p=p||new s;var v=this.w,g=d,m=h,f=l;return g.set(this.x,this.y,this.z),m.set(u.x,u.y,u.z),p.w=v*u.w-g.dot(m),g.cross(m,f),p.x=v*m.x+u.w*g.x+f.x,p.y=v*m.y+u.w*g.y+f.y,p.z=v*m.z+u.w*g.z+f.z,p},s.prototype.inverse=function(u){var p=this.x,v=this.y,g=this.z,m=this.w;u=u||new s,this.conjugate(u);var f=1/(p*p+v*v+g*g+m*m);return u.x*=f,u.y*=f,u.z*=f,u.w*=f,u},s.prototype.conjugate=function(u){return u=u||new s,u.x=-this.x,u.y=-this.y,u.z=-this.z,u.w=this.w,u},s.prototype.normalize=function(){var u=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(u=1/u,this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.normalizeFast=function(){var u=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;u===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=u,this.y*=u,this.z*=u,this.w*=u)},s.prototype.vmult=function(u,p){p=p||new r;var v=u.x,g=u.y,m=u.z,f=this.x,x=this.y,M=this.z,_=this.w,A=_*v+x*m-M*g,P=_*g+M*v-f*m,N=_*m+f*g-x*v,L=-f*v-x*g-M*m;return p.x=A*_+L*-f+P*-M-N*-x,p.y=P*_+L*-x+N*-f-A*-M,p.z=N*_+L*-M+A*-x-P*-f,p},s.prototype.copy=function(u){return this.x=u.x,this.y=u.y,this.z=u.z,this.w=u.w,this},s.prototype.toEuler=function(u,p){p=p||"YZX";var v,g,m,f=this.x,x=this.y,M=this.z,_=this.w;switch(p){case"YZX":var A=f*x+M*_;if(A>.499&&(v=2*Math.atan2(f,_),g=Math.PI/2,m=0),A<-.499&&(v=-2*Math.atan2(f,_),g=-Math.PI/2,m=0),isNaN(v)){var P=f*f,N=x*x,L=M*M;v=Math.atan2(2*x*_-2*f*M,1-2*N-2*L),g=Math.asin(2*A),m=Math.atan2(2*f*_-2*x*M,1-2*P-2*L)}break;default:throw new Error("Euler order "+p+" not supported yet.")}u.y=v,u.z=g,u.x=m},s.prototype.setFromEuler=function(u,p,v,g){g=g||"XYZ";var m=Math.cos(u/2),f=Math.cos(p/2),x=Math.cos(v/2),M=Math.sin(u/2),_=Math.sin(p/2),A=Math.sin(v/2);return g==="XYZ"?(this.x=M*f*x+m*_*A,this.y=m*_*x-M*f*A,this.z=m*f*A+M*_*x,this.w=m*f*x-M*_*A):g==="YXZ"?(this.x=M*f*x+m*_*A,this.y=m*_*x-M*f*A,this.z=m*f*A-M*_*x,this.w=m*f*x+M*_*A):g==="ZXY"?(this.x=M*f*x-m*_*A,this.y=m*_*x+M*f*A,this.z=m*f*A+M*_*x,this.w=m*f*x-M*_*A):g==="ZYX"?(this.x=M*f*x-m*_*A,this.y=m*_*x+M*f*A,this.z=m*f*A-M*_*x,this.w=m*f*x+M*_*A):g==="YZX"?(this.x=M*f*x+m*_*A,this.y=m*_*x+M*f*A,this.z=m*f*A-M*_*x,this.w=m*f*x-M*_*A):g==="XZY"&&(this.x=M*f*x-m*_*A,this.y=m*_*x-M*f*A,this.z=m*f*A+M*_*x,this.w=m*f*x+M*_*A),this},s.prototype.clone=function(){return new s(this.x,this.y,this.z,this.w)}},{"./Vec3":30}],29:[function(e,n,a){var r=e("./Vec3"),s=e("./Quaternion");n.exports=o;function o(d){d=d||{},this.position=new r,d.position&&this.position.copy(d.position),this.quaternion=new s,d.quaternion&&this.quaternion.copy(d.quaternion)}var c=new s;o.pointToLocalFrame=function(d,h,l,p){var p=p||new r;return l.vsub(d,p),h.conjugate(c),c.vmult(p,p),p},o.prototype.pointToLocal=function(d,h){return o.pointToLocalFrame(this.position,this.quaternion,d,h)},o.pointToWorldFrame=function(d,h,l,p){var p=p||new r;return h.vmult(l,p),p.vadd(d,p),p},o.prototype.pointToWorld=function(d,h){return o.pointToWorldFrame(this.position,this.quaternion,d,h)},o.prototype.vectorToWorldFrame=function(d,l){var l=l||new r;return this.quaternion.vmult(d,l),l},o.vectorToWorldFrame=function(d,h,l){return d.vmult(h,l),l},o.vectorToLocalFrame=function(d,h,l,p){var p=p||new r;return h.w*=-1,h.vmult(l,p),h.w*=-1,p}},{"./Quaternion":28,"./Vec3":30}],30:[function(e,n,a){n.exports=s;var r=e("./Mat3");function s(h,l,u){this.x=h||0,this.y=l||0,this.z=u||0}s.ZERO=new s(0,0,0),s.UNIT_X=new s(1,0,0),s.UNIT_Y=new s(0,1,0),s.UNIT_Z=new s(0,0,1),s.prototype.cross=function(h,l){var u=h.x,p=h.y,v=h.z,g=this.x,m=this.y,f=this.z;return l=l||new s,l.x=m*v-f*p,l.y=f*u-g*v,l.z=g*p-m*u,l},s.prototype.set=function(h,l,u){return this.x=h,this.y=l,this.z=u,this},s.prototype.setZero=function(){this.x=this.y=this.z=0},s.prototype.vadd=function(h,l){if(l)l.x=h.x+this.x,l.y=h.y+this.y,l.z=h.z+this.z;else return new s(this.x+h.x,this.y+h.y,this.z+h.z)},s.prototype.vsub=function(h,l){if(l)l.x=this.x-h.x,l.y=this.y-h.y,l.z=this.z-h.z;else return new s(this.x-h.x,this.y-h.y,this.z-h.z)},s.prototype.crossmat=function(){return new r([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},s.prototype.normalize=function(){var h=this.x,l=this.y,u=this.z,p=Math.sqrt(h*h+l*l+u*u);if(p>0){var v=1/p;this.x*=v,this.y*=v,this.z*=v}else this.x=0,this.y=0,this.z=0;return p},s.prototype.unit=function(h){h=h||new s;var l=this.x,u=this.y,p=this.z,v=Math.sqrt(l*l+u*u+p*p);return v>0?(v=1/v,h.x=l*v,h.y=u*v,h.z=p*v):(h.x=1,h.y=0,h.z=0),h},s.prototype.norm=function(){var h=this.x,l=this.y,u=this.z;return Math.sqrt(h*h+l*l+u*u)},s.prototype.length=s.prototype.norm,s.prototype.norm2=function(){return this.dot(this)},s.prototype.lengthSquared=s.prototype.norm2,s.prototype.distanceTo=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return Math.sqrt((v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p))},s.prototype.distanceSquared=function(h){var l=this.x,u=this.y,p=this.z,v=h.x,g=h.y,m=h.z;return(v-l)*(v-l)+(g-u)*(g-u)+(m-p)*(m-p)},s.prototype.mult=function(h,l){l=l||new s;var u=this.x,p=this.y,v=this.z;return l.x=h*u,l.y=h*p,l.z=h*v,l},s.prototype.scale=s.prototype.mult,s.prototype.dot=function(h){return this.x*h.x+this.y*h.y+this.z*h.z},s.prototype.isZero=function(){return this.x===0&&this.y===0&&this.z===0},s.prototype.negate=function(h){return h=h||new s,h.x=-this.x,h.y=-this.y,h.z=-this.z,h};var o=new s,c=new s;s.prototype.tangents=function(h,l){var u=this.norm();if(u>0){var p=o,v=1/u;p.set(this.x*v,this.y*v,this.z*v);var g=c;Math.abs(p.x)<.9?(g.set(1,0,0),p.cross(g,h)):(g.set(0,1,0),p.cross(g,h)),p.cross(h,l)}else h.set(1,0,0),l.set(0,1,0)},s.prototype.toString=function(){return this.x+","+this.y+","+this.z},s.prototype.toArray=function(){return[this.x,this.y,this.z]},s.prototype.copy=function(h){return this.x=h.x,this.y=h.y,this.z=h.z,this},s.prototype.lerp=function(h,l,u){var p=this.x,v=this.y,g=this.z;u.x=p+(h.x-p)*l,u.y=v+(h.y-v)*l,u.z=g+(h.z-g)*l},s.prototype.almostEquals=function(h,l){return l===void 0&&(l=1e-6),!(Math.abs(this.x-h.x)>l||Math.abs(this.y-h.y)>l||Math.abs(this.z-h.z)>l)},s.prototype.almostZero=function(h){return h===void 0&&(h=1e-6),!(Math.abs(this.x)>h||Math.abs(this.y)>h||Math.abs(this.z)>h)};var d=new s;s.prototype.isAntiparallelTo=function(h,l){return this.negate(d),d.almostEquals(h,l)},s.prototype.clone=function(){return new s(this.x,this.y,this.z)}},{"./Mat3":27}],31:[function(e,n,a){n.exports=l;var r=e("../utils/EventTarget");e("../shapes/Shape");var s=e("../math/Vec3"),o=e("../math/Mat3"),c=e("../math/Quaternion");e("../material/Material");var d=e("../collision/AABB"),h=e("../shapes/Box");function l(b){b=b||{},r.apply(this),this.id=l.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup=typeof b.collisionFilterGroup=="number"?b.collisionFilterGroup:1,this.collisionFilterMask=typeof b.collisionFilterMask=="number"?b.collisionFilterMask:1,this.collisionResponse=!0,this.position=new s,b.position&&this.position.copy(b.position),this.previousPosition=new s,this.initPosition=new s,this.velocity=new s,b.velocity&&this.velocity.copy(b.velocity),this.initVelocity=new s,this.force=new s;var B=typeof b.mass=="number"?b.mass:0;this.mass=B,this.invMass=B>0?1/B:0,this.material=b.material||null,this.linearDamping=typeof b.linearDamping=="number"?b.linearDamping:.01,this.type=B<=0?l.STATIC:l.DYNAMIC,typeof b.type==typeof l.STATIC&&(this.type=b.type),this.allowSleep=typeof b.allowSleep<"u"?b.allowSleep:!0,this.sleepState=0,this.sleepSpeedLimit=typeof b.sleepSpeedLimit<"u"?b.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof b.sleepTimeLimit<"u"?b.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new c,b.quaternion&&this.quaternion.copy(b.quaternion),this.initQuaternion=new c,this.angularVelocity=new s,b.angularVelocity&&this.angularVelocity.copy(b.angularVelocity),this.initAngularVelocity=new s,this.interpolatedPosition=new s,this.interpolatedQuaternion=new c,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new o,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new o,this.fixedRotation=typeof b.fixedRotation<"u"?b.fixedRotation:!1,this.angularDamping=typeof b.angularDamping<"u"?b.angularDamping:.01,this.aabb=new d,this.aabbNeedsUpdate=!0,this.wlambda=new s,b.shape&&this.addShape(b.shape),this.updateMassProperties()}l.prototype=new r,l.prototype.constructor=l,l.DYNAMIC=1,l.STATIC=2,l.KINEMATIC=4,l.AWAKE=0,l.SLEEPY=1,l.SLEEPING=2,l.idCounter=0,l.prototype.wakeUp=function(){var b=this.sleepState;this.sleepState=0,b===l.SLEEPING&&this.dispatchEvent({type:"wakeup"})},l.prototype.sleep=function(){this.sleepState=l.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0)},l.sleepyEvent={type:"sleepy"},l.sleepEvent={type:"sleep"},l.prototype.sleepTick=function(b){if(this.allowSleep){var B=this.sleepState,U=this.velocity.norm2()+this.angularVelocity.norm2(),W=Math.pow(this.sleepSpeedLimit,2);B===l.AWAKE&&U<W?(this.sleepState=l.SLEEPY,this.timeLastSleepy=b,this.dispatchEvent(l.sleepyEvent)):B===l.SLEEPY&&U>W?this.wakeUp():B===l.SLEEPY&&b-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(l.sleepEvent))}},l.prototype.updateSolveMassProperties=function(){this.sleepState===l.SLEEPING||this.type===l.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))},l.prototype.pointToLocalFrame=function(b,U){var U=U||new s;return b.vsub(this.position,U),this.quaternion.conjugate().vmult(U,U),U},l.prototype.vectorToLocalFrame=function(b,U){var U=U||new s;return this.quaternion.conjugate().vmult(b,U),U},l.prototype.pointToWorldFrame=function(b,U){var U=U||new s;return this.quaternion.vmult(b,U),U.vadd(this.position,U),U},l.prototype.vectorToWorldFrame=function(b,U){var U=U||new s;return this.quaternion.vmult(b,U),U};var u=new s,p=new c;l.prototype.addShape=function(b,B,U){var W=new s,X=new c;return B&&W.copy(B),U&&X.copy(U),this.shapes.push(b),this.shapeOffsets.push(W),this.shapeOrientations.push(X),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,this},l.prototype.updateBoundingRadius=function(){for(var b=this.shapes,B=this.shapeOffsets,U=b.length,W=0,X=0;X!==U;X++){var tt=b[X];tt.updateBoundingSphereRadius();var O=B[X].norm(),D=tt.boundingSphereRadius;O+D>W&&(W=O+D)}this.boundingRadius=W};var v=new d;l.prototype.computeAABB=function(){for(var b=this.shapes,B=this.shapeOffsets,U=this.shapeOrientations,W=b.length,X=u,tt=p,O=this.quaternion,D=this.aabb,Q=v,K=0;K!==W;K++){var F=b[K];U[K].mult(O,tt),tt.vmult(B[K],X),X.vadd(this.position,X),F.calculateWorldAABB(X,tt,Q.lowerBound,Q.upperBound),K===0?D.copy(Q):D.extend(Q)}this.aabbNeedsUpdate=!1};var g=new o,m=new o;new o,l.prototype.updateInertiaWorld=function(b){var B=this.invInertia;if(!(B.x===B.y&&B.y===B.z&&!b)){var U=g,W=m;U.setRotationFromQuaternion(this.quaternion),U.transpose(W),U.scale(B,U),U.mmult(W,this.invInertiaWorld)}};var f=new s,x=new s;l.prototype.applyForce=function(b,B){if(this.type===l.DYNAMIC){var U=f;B.vsub(this.position,U);var W=x;U.cross(b,W),this.force.vadd(b,this.force),this.torque.vadd(W,this.torque)}};var M=new s,_=new s;l.prototype.applyLocalForce=function(b,B){if(this.type===l.DYNAMIC){var U=M,W=_;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,W),this.applyForce(U,W)}};var A=new s,P=new s,N=new s;l.prototype.applyImpulse=function(b,B){if(this.type===l.DYNAMIC){var U=A;B.vsub(this.position,U);var W=P;W.copy(b),W.mult(this.invMass,W),this.velocity.vadd(W,this.velocity);var X=N;U.cross(b,X),this.invInertiaWorld.vmult(X,X),this.angularVelocity.vadd(X,this.angularVelocity)}};var L=new s,S=new s;l.prototype.applyLocalImpulse=function(b,B){if(this.type===l.DYNAMIC){var U=L,W=S;this.vectorToWorldFrame(b,U),this.pointToWorldFrame(B,W),this.applyImpulse(U,W)}};var y=new s;l.prototype.updateMassProperties=function(){var b=y;this.invMass=this.mass>0?1/this.mass:0;var B=this.inertia,U=this.fixedRotation;this.computeAABB(),b.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(b,this.mass,B),this.invInertia.set(B.x>0&&!U?1/B.x:0,B.y>0&&!U?1/B.y:0,B.z>0&&!U?1/B.z:0),this.updateInertiaWorld(!0)},l.prototype.getVelocityAtWorldPoint=function(b,B){var U=new s;return b.vsub(this.position,U),this.angularVelocity.cross(U,B),this.velocity.vadd(B,B),B}},{"../collision/AABB":3,"../material/Material":25,"../math/Mat3":27,"../math/Quaternion":28,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Shape":43,"../utils/EventTarget":49}],32:[function(e,n,a){e("./Body");var r=e("../math/Vec3"),s=e("../math/Quaternion");e("../collision/RaycastResult");var o=e("../collision/Ray"),c=e("../objects/WheelInfo");n.exports=d;function d(O){this.chassisBody=O.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof O.indexRightAxis<"u"?O.indexRightAxis:1,this.indexForwardAxis=typeof O.indexForwardAxis<"u"?O.indexForwardAxis:0,this.indexUpAxis=typeof O.indexUpAxis<"u"?O.indexUpAxis:2}new r,new r,new r;var h=new r,l=new r,u=new r;new o,d.prototype.addWheel=function(O){O=O||{};var D=new c(O),Q=this.wheelInfos.length;return this.wheelInfos.push(D),Q},d.prototype.setSteeringValue=function(O,D){var Q=this.wheelInfos[D];Q.steering=O},new r,d.prototype.applyEngineForce=function(O,D){this.wheelInfos[D].engineForce=O},d.prototype.setBrake=function(O,D){this.wheelInfos[D].brake=O},d.prototype.addToWorld=function(O){this.constraints,O.add(this.chassisBody);var D=this;this.preStepCallback=function(){D.updateVehicle(O.dt)},O.addEventListener("preStep",this.preStepCallback),this.world=O},d.prototype.getVehicleAxisWorld=function(O,D){D.set(O===0?1:0,O===1?1:0,O===2?1:0),this.chassisBody.vectorToWorldFrame(D,D)},d.prototype.updateVehicle=function(O){for(var D=this.wheelInfos,Q=D.length,K=this.chassisBody,F=0;F<Q;F++)this.updateWheelTransform(F);this.currentVehicleSpeedKmHour=3.6*K.velocity.norm();var J=new r;this.getVehicleAxisWorld(this.indexForwardAxis,J),J.dot(K.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(var F=0;F<Q;F++)this.castRay(D[F]);this.updateSuspension(O);for(var z=new r,T=new r,F=0;F<Q;F++){var C=D[F],H=C.suspensionForce;H>C.maxSuspensionForce&&(H=C.maxSuspensionForce),C.raycastResult.hitNormalWorld.scale(H*O,z),C.raycastResult.hitPointWorld.vsub(K.position,T),K.applyImpulse(z,C.raycastResult.hitPointWorld)}this.updateFriction(O);var Z=new r,et=new r,q=new r;for(F=0;F<Q;F++){var C=D[F];K.getVelocityAtWorldPoint(C.chassisConnectionPointWorld,q);var nt=1;switch(this.indexUpAxis){case 1:nt=-1;break}if(C.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,et);var mt=et.dot(C.raycastResult.hitNormalWorld);C.raycastResult.hitNormalWorld.scale(mt,Z),et.vsub(Z,et);var Lt=et.dot(q);C.deltaRotation=nt*Lt*O/C.radius}(C.sliding||!C.isInContact)&&C.engineForce!==0&&C.useCustomSlidingRotationalSpeed&&(C.deltaRotation=(C.engineForce>0?1:-1)*C.customSlidingRotationalSpeed*O),Math.abs(C.brake)>Math.abs(C.engineForce)&&(C.deltaRotation=0),C.rotation+=C.deltaRotation,C.deltaRotation*=.99}},d.prototype.updateSuspension=function(O){for(var D=this.chassisBody,Q=D.mass,K=this.wheelInfos,F=K.length,J=0;J<F;J++){var z=K[J];if(z.isInContact){var T,C=z.suspensionRestLength,H=z.suspensionLength,Z=C-H;T=z.suspensionStiffness*Z*z.clippedInvContactDotSuspension;var et=z.suspensionRelativeVelocity,q;et<0?q=z.dampingCompression:q=z.dampingRelaxation,T-=q*et,z.suspensionForce=T*Q,z.suspensionForce<0&&(z.suspensionForce=0)}else z.suspensionForce=0}},d.prototype.removeFromWorld=function(O){this.constraints,O.remove(this.chassisBody),O.removeEventListener("preStep",this.preStepCallback),this.world=null};var p=new r,v=new r;d.prototype.castRay=function(O){var D=p,Q=v;this.updateWheelTransformWorld(O);var K=this.chassisBody,F=-1,J=O.suspensionRestLength+O.radius;O.directionWorld.scale(J,D);var z=O.chassisConnectionPointWorld;z.vadd(D,Q);var T=O.raycastResult;T.reset();var C=K.collisionResponse;K.collisionResponse=!1,this.world.rayTest(z,Q,T),K.collisionResponse=C;var H=T.body;if(O.raycastResult.groundObject=0,H){F=T.distance,O.raycastResult.hitNormalWorld=T.hitNormalWorld,O.isInContact=!0;var Z=T.distance;O.suspensionLength=Z-O.radius;var et=O.suspensionRestLength-O.maxSuspensionTravel,q=O.suspensionRestLength+O.maxSuspensionTravel;O.suspensionLength<et&&(O.suspensionLength=et),O.suspensionLength>q&&(O.suspensionLength=q,O.raycastResult.reset());var nt=O.raycastResult.hitNormalWorld.dot(O.directionWorld),mt=new r;K.getVelocityAtWorldPoint(O.raycastResult.hitPointWorld,mt);var Lt=O.raycastResult.hitNormalWorld.dot(mt);if(nt>=-.1)O.suspensionRelativeVelocity=0,O.clippedInvContactDotSuspension=1/.1;else{var vt=-1/nt;O.suspensionRelativeVelocity=Lt*vt,O.clippedInvContactDotSuspension=vt}}else O.suspensionLength=O.suspensionRestLength+0*O.maxSuspensionTravel,O.suspensionRelativeVelocity=0,O.directionWorld.scale(-1,O.raycastResult.hitNormalWorld),O.clippedInvContactDotSuspension=1;return F},d.prototype.updateWheelTransformWorld=function(O){O.isInContact=!1;var D=this.chassisBody;D.pointToWorldFrame(O.chassisConnectionPointLocal,O.chassisConnectionPointWorld),D.vectorToWorldFrame(O.directionLocal,O.directionWorld),D.vectorToWorldFrame(O.axleLocal,O.axleWorld)},d.prototype.updateWheelTransform=function(O){var D=h,Q=l,K=u,F=this.wheelInfos[O];this.updateWheelTransformWorld(F),F.directionLocal.scale(-1,D),Q.copy(F.axleLocal),D.cross(Q,K),K.normalize(),Q.normalize();var J=F.steering,z=new s;z.setFromAxisAngle(D,J);var T=new s;T.setFromAxisAngle(Q,F.rotation);var C=F.worldTransform.quaternion;this.chassisBody.quaternion.mult(z,C),C.mult(T,C),C.normalize();var H=F.worldTransform.position;H.copy(F.directionWorld),H.scale(F.suspensionLength,H),H.vadd(F.chassisConnectionPointWorld,H)};var g=[new r(1,0,0),new r(0,1,0),new r(0,0,1)];d.prototype.getWheelTransformWorld=function(O){return this.wheelInfos[O].worldTransform};var m=new r,f=[],x=[],M=1;d.prototype.updateFriction=function(O){for(var D=m,Q=this.wheelInfos,K=Q.length,F=this.chassisBody,J=x,z=f,T=0;T<K;T++){var C=Q[T],H=C.raycastResult.body;C.sideImpulse=0,C.forwardImpulse=0,J[T]||(J[T]=new r),z[T]||(z[T]=new r)}for(var T=0;T<K;T++){var C=Q[T],H=C.raycastResult.body;if(H){var Z=z[T],et=this.getWheelTransformWorld(T);et.vectorToWorldFrame(g[this.indexRightAxis],Z);var q=C.raycastResult.hitNormalWorld,nt=Z.dot(q);q.scale(nt,D),Z.vsub(D,Z),Z.normalize(),q.cross(Z,J[T]),J[T].normalize(),C.sideImpulse=tt(F,C.raycastResult.hitPointWorld,H,C.raycastResult.hitPointWorld,Z),C.sideImpulse*=M}}var mt=1,Lt=.5;this.sliding=!1;for(var T=0;T<K;T++){var C=Q[T],H=C.raycastResult.body,vt=0;if(C.slipInfo=1,H){var I=0,dt=C.brake?C.brake:I;vt=N(F,H,C.raycastResult.hitPointWorld,J[T],dt),vt+=C.engineForce*O;var ht=dt/vt;C.slipInfo*=ht}if(C.forwardImpulse=0,C.skidInfo=1,H){C.skidInfo=1;var qt=C.suspensionForce*O*C.frictionSlip,yt=qt,ne=qt*yt;C.forwardImpulse=vt;var pt=C.forwardImpulse*Lt,R=C.sideImpulse*mt,E=pt*pt+R*R;if(C.sliding=!1,E>ne){this.sliding=!0,C.sliding=!0;var ht=qt/Math.sqrt(E);C.skidInfo*=ht}}}if(this.sliding)for(var T=0;T<K;T++){var C=Q[T];C.sideImpulse!==0&&C.skidInfo<1&&(C.forwardImpulse*=C.skidInfo,C.sideImpulse*=C.skidInfo)}for(var T=0;T<K;T++){var C=Q[T],$=new r;if($.copy(C.raycastResult.hitPointWorld),C.forwardImpulse!==0){var lt=new r;J[T].scale(C.forwardImpulse,lt),F.applyImpulse(lt,$)}if(C.sideImpulse!==0){var H=C.raycastResult.body,ct=new r;ct.copy(C.raycastResult.hitPointWorld);var at=new r;z[T].scale(C.sideImpulse,at),F.pointToLocalFrame($,$),$["xyz"[this.indexUpAxis]]*=C.rollInfluence,F.pointToWorldFrame($,$),F.applyImpulse(at,$),at.scale(-1,at),H.applyImpulse(at,ct)}}};var _=new r,A=new r,P=new r;function N(O,D,Q,K,F){var J=0,z=Q,T=_,C=A,H=P;O.getVelocityAtWorldPoint(z,T),D.getVelocityAtWorldPoint(z,C),T.vsub(C,H);var Z=K.dot(H),et=B(O,Q,K),q=B(D,Q,K),nt=1,mt=nt/(et+q);return J=-Z*mt,F<J&&(J=F),J<-F&&(J=-F),J}var L=new r,S=new r,y=new r,b=new r;function B(O,D,Q){var K=L,F=S,J=y,z=b;return D.vsub(O.position,K),K.cross(Q,F),O.invInertiaWorld.vmult(F,z),z.cross(K,J),O.invMass+Q.dot(J)}var U=new r,W=new r,X=new r;function tt(O,D,Q,K,F,q){var z=F.norm2();if(z>1.1)return 0;var T=U,C=W,H=X;O.getVelocityAtWorldPoint(D,T),Q.getVelocityAtWorldPoint(K,C),T.vsub(C,H);var Z=F.dot(H),et=1/(O.invMass+Q.invMass),q=-.2*Z*et;return q}},{"../collision/Ray":9,"../collision/RaycastResult":10,"../math/Quaternion":28,"../math/Vec3":30,"../objects/WheelInfo":36,"./Body":31}],33:[function(e,n,a){var r=e("./Body"),s=e("../shapes/Sphere"),o=e("../shapes/Box"),c=e("../math/Vec3"),d=e("../constraints/HingeConstraint");n.exports=h;function h(p){if(this.wheelBodies=[],this.coordinateSystem=typeof p.coordinateSystem>"u"?new c(1,2,3):p.coordinateSystem.clone(),this.chassisBody=p.chassisBody,!this.chassisBody){var v=new o(new c(5,2,.5));this.chassisBody=new r(1,v)}this.constraints=[],this.wheelAxes=[],this.wheelForces=[]}h.prototype.addWheel=function(p){p=p||{};var v=p.body;v||(v=new r(1,new s(1.2))),this.wheelBodies.push(v),this.wheelForces.push(0),new c;var g=typeof p.position<"u"?p.position.clone():new c,m=new c;this.chassisBody.pointToWorldFrame(g,m),v.position.set(m.x,m.y,m.z);var f=typeof p.axis<"u"?p.axis.clone():new c(0,1,0);this.wheelAxes.push(f);var x=new d(this.chassisBody,v,{pivotA:g,axisA:f,pivotB:c.ZERO,axisB:f,collideConnected:!1});return this.constraints.push(x),this.wheelBodies.length-1},h.prototype.setSteeringValue=function(p,v){var g=this.wheelAxes[v],m=Math.cos(p),f=Math.sin(p),x=g.x,M=g.y;this.constraints[v].axisA.set(m*x-f*M,f*x+m*M,0)},h.prototype.setMotorSpeed=function(p,v){var g=this.constraints[v];g.enableMotor(),g.motorTargetVelocity=p},h.prototype.disableMotor=function(p){var v=this.constraints[p];v.disableMotor()};var l=new c;h.prototype.setWheelForce=function(p,v){this.wheelForces[v]=p},h.prototype.applyWheelForce=function(p,v){var g=this.wheelAxes[v],m=this.wheelBodies[v],f=m.torque;g.scale(p,l),m.vectorToWorldFrame(l,l),f.vadd(l,f)},h.prototype.addToWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.add(g[m]);for(var m=0;m<v.length;m++)p.addConstraint(v[m]);p.addEventListener("preStep",this._update.bind(this))},h.prototype._update=function(){for(var p=this.wheelForces,v=0;v<p.length;v++)this.applyWheelForce(p[v],v)},h.prototype.removeFromWorld=function(p){for(var v=this.constraints,g=this.wheelBodies.concat([this.chassisBody]),m=0;m<g.length;m++)p.remove(g[m]);for(var m=0;m<v.length;m++)p.removeConstraint(v[m])};var u=new c;h.prototype.getWheelSpeed=function(p){var v=this.wheelAxes[p],g=this.wheelBodies[p],m=g.angularVelocity;return this.chassisBody.vectorToWorldFrame(v,u),m.dot(u)}},{"../constraints/HingeConstraint":15,"../math/Vec3":30,"../shapes/Box":37,"../shapes/Sphere":44,"./Body":31}],34:[function(e,n,a){n.exports=s,e("../shapes/Shape");var r=e("../math/Vec3");e("../math/Quaternion"),e("../shapes/Particle"),e("../objects/Body"),e("../material/Material");function s(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[]}s.prototype.add=function(v){this.particles.push(v),this.neighbors.length<this.particles.length&&this.neighbors.push([])},s.prototype.remove=function(v){var g=this.particles.indexOf(v);g!==-1&&(this.particles.splice(g,1),this.neighbors.length>this.particles.length&&this.neighbors.pop())};var o=new r;s.prototype.getNeighbors=function(v,g){for(var m=this.particles.length,f=v.id,x=this.smoothingRadius*this.smoothingRadius,M=o,_=0;_!==m;_++){var A=this.particles[_];A.position.vsub(v.position,M),f!==A.id&&M.norm2()<x&&g.push(A)}};var c=new r,d=new r,h=new r,l=new r,u=new r,p=new r;s.prototype.update=function(){for(var v=this.particles.length,g=c,m=this.speedOfSound,f=this.eps,x=0;x!==v;x++){var M=this.particles[x],_=this.neighbors[x];_.length=0,this.getNeighbors(M,_),_.push(this.particles[x]);for(var A=_.length,P=0,N=0;N!==A;N++){M.position.vsub(_[N].position,g);var L=g.norm(),S=this.w(L);P+=_[N].mass*S}this.densities[x]=P,this.pressures[x]=m*m*(this.densities[x]-this.density)}for(var y=d,b=h,B=l,U=u,W=p,x=0;x!==v;x++){var X=this.particles[x];y.set(0,0,0),b.set(0,0,0);for(var tt,O,_=this.neighbors[x],A=_.length,N=0;N!==A;N++){var D=_[N];X.position.vsub(D.position,U);var Q=U.norm();tt=-D.mass*(this.pressures[x]/(this.densities[x]*this.densities[x]+f)+this.pressures[N]/(this.densities[N]*this.densities[N]+f)),this.gradw(U,B),B.mult(tt,B),y.vadd(B,y),D.velocity.vsub(X.velocity,W),W.mult(1/(1e-4+this.densities[x]*this.densities[N])*this.viscosity*D.mass,W),O=this.nablaw(Q),W.mult(O,W),b.vadd(W,b)}b.mult(X.mass,b),y.mult(X.mass,y),X.force.vadd(b,X.force),X.force.vadd(y,X.force)}},s.prototype.w=function(v){var g=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(g,9))*Math.pow(g*g-v*v,3)},s.prototype.gradw=function(v,g){var m=v.norm(),f=this.smoothingRadius;v.mult(945/(32*Math.PI*Math.pow(f,9))*Math.pow(f*f-m*m,2),g)},s.prototype.nablaw=function(v){var g=this.smoothingRadius,m=945/(32*Math.PI*Math.pow(g,9))*(g*g-v*v)*(7*v*v-3*g*g);return m}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Particle":41,"../shapes/Shape":43}],35:[function(e,n,a){var r=e("../math/Vec3");n.exports=s;function s(x,M,_){_=_||{},this.restLength=typeof _.restLength=="number"?_.restLength:1,this.stiffness=_.stiffness||100,this.damping=_.damping||1,this.bodyA=x,this.bodyB=M,this.localAnchorA=new r,this.localAnchorB=new r,_.localAnchorA&&this.localAnchorA.copy(_.localAnchorA),_.localAnchorB&&this.localAnchorB.copy(_.localAnchorB),_.worldAnchorA&&this.setWorldAnchorA(_.worldAnchorA),_.worldAnchorB&&this.setWorldAnchorB(_.worldAnchorB)}s.prototype.setWorldAnchorA=function(x){this.bodyA.pointToLocalFrame(x,this.localAnchorA)},s.prototype.setWorldAnchorB=function(x){this.bodyB.pointToLocalFrame(x,this.localAnchorB)},s.prototype.getWorldAnchorA=function(x){this.bodyA.pointToWorldFrame(this.localAnchorA,x)},s.prototype.getWorldAnchorB=function(x){this.bodyB.pointToWorldFrame(this.localAnchorB,x)};var o=new r,c=new r,d=new r,h=new r,l=new r,u=new r,p=new r,v=new r,g=new r,m=new r,f=new r;s.prototype.applyForce=function(){var x=this.stiffness,M=this.damping,_=this.restLength,A=this.bodyA,P=this.bodyB,N=o,L=c,S=d,y=h,b=f,B=l,U=u,W=p,X=v,tt=g,O=m;this.getWorldAnchorA(B),this.getWorldAnchorB(U),B.vsub(A.position,W),U.vsub(P.position,X),U.vsub(B,N);var D=N.norm();L.copy(N),L.normalize(),P.velocity.vsub(A.velocity,S),P.angularVelocity.cross(X,b),S.vadd(b,S),A.angularVelocity.cross(W,b),S.vsub(b,S),L.mult(-x*(D-_)-M*S.dot(L),y),A.force.vsub(y,A.force),P.force.vadd(y,P.force),W.cross(y,tt),X.cross(y,O),A.torque.vsub(tt,A.torque),P.torque.vadd(O,P.torque)}},{"../math/Vec3":30}],36:[function(e,n,a){var r=e("../math/Vec3"),s=e("../math/Transform"),o=e("../collision/RaycastResult"),c=e("../utils/Utils");n.exports=d;function d(u){u=c.defaults(u,{chassisConnectionPointLocal:new r,chassisConnectionPointWorld:new r,directionLocal:new r,directionWorld:new r,axleLocal:new r,axleWorld:new r,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=u.maxSuspensionTravel,this.customSlidingRotationalSpeed=u.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=u.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=u.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=u.chassisConnectionPointWorld.clone(),this.directionLocal=u.directionLocal.clone(),this.directionWorld=u.directionWorld.clone(),this.axleLocal=u.axleLocal.clone(),this.axleWorld=u.axleWorld.clone(),this.suspensionRestLength=u.suspensionRestLength,this.suspensionMaxLength=u.suspensionMaxLength,this.radius=u.radius,this.suspensionStiffness=u.suspensionStiffness,this.dampingCompression=u.dampingCompression,this.dampingRelaxation=u.dampingRelaxation,this.frictionSlip=u.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=u.rollInfluence,this.maxSuspensionForce=u.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=u.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new o,this.worldTransform=new s,this.isInContact=!1}var l=new r,h=new r,l=new r;d.prototype.updateWheel=function(u){var p=this.raycastResult;if(this.isInContact){var v=p.hitNormalWorld.dot(p.directionWorld);p.hitPointWorld.vsub(u.position,h),u.getVelocityAtWorldPoint(h,l);var g=p.hitNormalWorld.dot(l);if(v>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{var m=-1/v;this.suspensionRelativeVelocity=g*m,this.clippedInvContactDotSuspension=m}}else p.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,p.directionWorld.scale(-1,p.hitNormalWorld),this.clippedInvContactDotSuspension=1}},{"../collision/RaycastResult":10,"../math/Transform":29,"../math/Vec3":30,"../utils/Utils":53}],37:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3"),o=e("./ConvexPolyhedron");function c(l){r.call(this),this.type=r.types.BOX,this.halfExtents=l,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c,c.prototype.updateConvexPolyhedronRepresentation=function(){var l=this.halfExtents.x,u=this.halfExtents.y,p=this.halfExtents.z,v=s,g=[new v(-l,-u,-p),new v(l,-u,-p),new v(l,u,-p),new v(-l,u,-p),new v(-l,-u,p),new v(l,-u,p),new v(l,u,p),new v(-l,u,p)],m=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]];new v(0,0,1),new v(0,1,0),new v(1,0,0);var f=new o(g,m);this.convexPolyhedronRepresentation=f,f.material=this.material},c.prototype.calculateLocalInertia=function(l,u){return u=u||new s,c.calculateInertia(this.halfExtents,l,u),u},c.calculateInertia=function(l,u,p){var v=l;p.x=1/12*u*(2*v.y*2*v.y+2*v.z*2*v.z),p.y=1/12*u*(2*v.x*2*v.x+2*v.z*2*v.z),p.z=1/12*u*(2*v.y*2*v.y+2*v.x*2*v.x)},c.prototype.getSideNormals=function(l,u){var p=l,v=this.halfExtents;if(p[0].set(v.x,0,0),p[1].set(0,v.y,0),p[2].set(0,0,v.z),p[3].set(-v.x,0,0),p[4].set(0,-v.y,0),p[5].set(0,0,-v.z),u!==void 0)for(var g=0;g!==p.length;g++)u.vmult(p[g],p[g]);return p},c.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},c.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm()};var d=new s;new s,c.prototype.forEachWorldCorner=function(l,u,p){for(var v=this.halfExtents,g=[[v.x,v.y,v.z],[-v.x,v.y,v.z],[-v.x,-v.y,v.z],[-v.x,-v.y,-v.z],[v.x,-v.y,-v.z],[v.x,v.y,-v.z],[-v.x,v.y,-v.z],[v.x,-v.y,v.z]],m=0;m<g.length;m++)d.set(g[m][0],g[m][1],g[m][2]),u.vmult(d,d),l.vadd(d,d),p(d.x,d.y,d.z)};var h=[new s,new s,new s,new s,new s,new s,new s,new s];c.prototype.calculateWorldAABB=function(l,u,p,v){var g=this.halfExtents;h[0].set(g.x,g.y,g.z),h[1].set(-g.x,g.y,g.z),h[2].set(-g.x,-g.y,g.z),h[3].set(-g.x,-g.y,-g.z),h[4].set(g.x,-g.y,-g.z),h[5].set(g.x,g.y,-g.z),h[6].set(-g.x,g.y,-g.z),h[7].set(g.x,-g.y,g.z);var m=h[0];u.vmult(m,m),l.vadd(m,m),v.copy(m),p.copy(m);for(var f=1;f<8;f++){var m=h[f];u.vmult(m,m),l.vadd(m,m);var x=m.x,M=m.y,_=m.z;x>v.x&&(v.x=x),M>v.y&&(v.y=M),_>v.z&&(v.z=_),x<p.x&&(p.x=x),M<p.y&&(p.y=M),_<p.z&&(p.z=_)}}},{"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],38:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform");function c(F,J,z){r.call(this),this.type=r.types.CONVEXPOLYHEDRON,this.vertices=F||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=J||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=z?z.slice():null,this.computeEdges(),this.updateBoundingSphereRadius()}c.prototype=new r,c.prototype.constructor=c;var d=new s;c.prototype.computeEdges=function(){var F=this.faces,J=this.vertices;J.length;var z=this.uniqueEdges;z.length=0;for(var T=d,C=0;C!==F.length;C++)for(var H=F[C],Z=H.length,et=0;et!==Z;et++){var q=(et+1)%Z;J[H[et]].vsub(J[H[q]],T),T.normalize();for(var nt=!1,mt=0;mt!==z.length;mt++)if(z[mt].almostEquals(T)||z[mt].almostEquals(T)){nt=!0;break}nt||z.push(T.clone())}},c.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var F=0;F<this.faces.length;F++){for(var J=0;J<this.faces[F].length;J++)if(!this.vertices[this.faces[F][J]])throw new Error("Vertex "+this.faces[F][J]+" not found!");var z=this.faceNormals[F]||new s;this.getFaceNormal(F,z),z.negate(z),this.faceNormals[F]=z;var T=this.vertices[this.faces[F][0]];if(z.dot(T)<0){console.error(".faceNormals["+F+"] = Vec3("+z.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(var J=0;J<this.faces[F].length;J++)console.warn(".vertices["+this.faces[F][J]+"] = Vec3("+this.vertices[this.faces[F][J]].toString()+")")}}};var h=new s,l=new s;c.computeNormal=function(F,J,z,T){J.vsub(F,l),z.vsub(J,h),h.cross(l,T),T.isZero()||T.normalize()},c.prototype.getFaceNormal=function(F,J){var z=this.faces[F],T=this.vertices[z[0]],C=this.vertices[z[1]],H=this.vertices[z[2]];return c.computeNormal(T,C,H,J)};var u=new s;c.prototype.clipAgainstHull=function(F,J,z,T,C,H,Z,et,q){for(var nt=u,mt=-1,Lt=-Number.MAX_VALUE,vt=0;vt<z.faces.length;vt++){nt.copy(z.faceNormals[vt]),C.vmult(nt,nt);var I=nt.dot(H);I>Lt&&(Lt=I,mt=vt)}for(var dt=[],ht=z.faces[mt],qt=ht.length,yt=0;yt<qt;yt++){var ne=z.vertices[ht[yt]],pt=new s;pt.copy(ne),C.vmult(pt,pt),T.vadd(pt,pt),dt.push(pt)}mt>=0&&this.clipFaceAgainstHull(H,F,J,dt,Z,et,q)};var p=new s,v=new s,g=new s,m=new s,f=new s,x=new s;c.prototype.findSeparatingAxis=function(F,J,z,T,C,H,Z,et){var q=p,nt=v,mt=g,Lt=m,vt=f,I=x,dt=Number.MAX_VALUE,ht=this;if(ht.uniqueAxes)for(var yt=0;yt!==ht.uniqueAxes.length;yt++){z.vmult(ht.uniqueAxes[yt],q);var pt=ht.testSepAxis(q,F,J,z,T,C);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(q))}else for(var qt=Z?Z.length:ht.faces.length,yt=0;yt<qt;yt++){var ne=Z?Z[yt]:yt;q.copy(ht.faceNormals[ne]),z.vmult(q,q);var pt=ht.testSepAxis(q,F,J,z,T,C);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(q))}if(F.uniqueAxes)for(var yt=0;yt!==F.uniqueAxes.length;yt++){C.vmult(F.uniqueAxes[yt],nt);var pt=ht.testSepAxis(nt,F,J,z,T,C);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(nt))}else for(var R=et?et.length:F.faces.length,yt=0;yt<R;yt++){var ne=et?et[yt]:yt;nt.copy(F.faceNormals[ne]),C.vmult(nt,nt);var pt=ht.testSepAxis(nt,F,J,z,T,C);if(pt===!1)return!1;pt<dt&&(dt=pt,H.copy(nt))}for(var E=0;E!==ht.uniqueEdges.length;E++){z.vmult(ht.uniqueEdges[E],Lt);for(var $=0;$!==F.uniqueEdges.length;$++)if(C.vmult(F.uniqueEdges[$],vt),Lt.cross(vt,I),!I.almostZero()){I.normalize();var lt=ht.testSepAxis(I,F,J,z,T,C);if(lt===!1)return!1;lt<dt&&(dt=lt,H.copy(I))}}return T.vsub(J,mt),mt.dot(H)>0&&H.negate(H),!0};var M=[],_=[];c.prototype.testSepAxis=function(F,J,z,T,C,H){var Z=this;c.project(Z,F,z,T,M),c.project(J,F,C,H,_);var et=M[0],q=M[1],nt=_[0],mt=_[1];if(et<mt||nt<q)return!1;var Lt=et-mt,vt=nt-q,I=Lt<vt?Lt:vt;return I};var A=new s,P=new s;c.prototype.calculateLocalInertia=function(F,J){this.computeLocalAABB(A,P);var z=P.x-A.x,T=P.y-A.y,C=P.z-A.z;J.x=1/12*F*(2*T*2*T+2*C*2*C),J.y=1/12*F*(2*z*2*z+2*C*2*C),J.z=1/12*F*(2*T*2*T+2*z*2*z)},c.prototype.getPlaneConstantOfFace=function(F){var J=this.faces[F],z=this.faceNormals[F],T=this.vertices[J[0]],C=-z.dot(T);return C};var N=new s,L=new s,S=new s,y=new s,b=new s,B=new s,U=new s,W=new s;c.prototype.clipFaceAgainstHull=function(F,J,z,T,C,H,Z){for(var et=N,q=L,nt=S,mt=y,Lt=b,vt=B,I=U,dt=W,ht=this,qt=[],yt=T,ne=qt,pt=-1,R=Number.MAX_VALUE,E=0;E<ht.faces.length;E++){et.copy(ht.faceNormals[E]),z.vmult(et,et);var $=et.dot(F);$<R&&(R=$,pt=E)}if(!(pt<0)){var lt=ht.faces[pt];lt.connectedFaces=[];for(var ct=0;ct<ht.faces.length;ct++)for(var at=0;at<ht.faces[ct].length;at++)lt.indexOf(ht.faces[ct][at])!==-1&&ct!==pt&&lt.connectedFaces.indexOf(ct)===-1&&lt.connectedFaces.push(ct);yt.length;for(var St=lt.length,wt=0;wt<St;wt++){var Ft=ht.vertices[lt[wt]],le=ht.vertices[lt[(wt+1)%St]];Ft.vsub(le,q),nt.copy(q),z.vmult(nt,nt),J.vadd(nt,nt),mt.copy(this.faceNormals[pt]),z.vmult(mt,mt),J.vadd(mt,mt),nt.cross(mt,Lt),Lt.negate(Lt),vt.copy(Ft),z.vmult(vt,vt),J.vadd(vt,vt),-vt.dot(Lt);var jt;{var Et=lt.connectedFaces[wt];I.copy(this.faceNormals[Et]);var kt=this.getPlaneConstantOfFace(Et);dt.copy(I),z.vmult(dt,dt);var jt=kt-dt.dot(J)}for(this.clipFaceAgainstPlane(yt,ne,dt,jt);yt.length;)yt.shift();for(;ne.length;)yt.push(ne.shift())}I.copy(this.faceNormals[pt]);var kt=this.getPlaneConstantOfFace(pt);dt.copy(I),z.vmult(dt,dt);for(var jt=kt-dt.dot(J),ct=0;ct<yt.length;ct++){var Jt=dt.dot(yt[ct])+jt;if(Jt<=C&&(console.log("clamped: depth="+Jt+" to minDist="+(C+"")),Jt=C),Jt<=H){var Xt=yt[ct];if(Jt<=0){var ce={point:Xt,normal:dt,depth:Jt};Z.push(ce)}}}}},c.prototype.clipFaceAgainstPlane=function(F,J,z,T){var C,H,Z=F.length;if(Z<2)return J;var et=F[F.length-1],q=F[0];C=z.dot(et)+T;for(var nt=0;nt<Z;nt++){if(q=F[nt],H=z.dot(q)+T,C<0)if(H<0){var mt=new s;mt.copy(q),J.push(mt)}else{var mt=new s;et.lerp(q,C/(C-H),mt),J.push(mt)}else if(H<0){var mt=new s;et.lerp(q,C/(C-H),mt),J.push(mt),J.push(q)}et=q,C=H}return J},c.prototype.computeWorldVertices=function(F,J){for(var z=this.vertices.length;this.worldVertices.length<z;)this.worldVertices.push(new s);for(var T=this.vertices,C=this.worldVertices,H=0;H!==z;H++)J.vmult(T[H],C[H]),F.vadd(C[H],C[H]);this.worldVerticesNeedsUpdate=!1},new s,c.prototype.computeLocalAABB=function(F,J){var z=this.vertices.length,T=this.vertices;F.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),J.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var C=0;C<z;C++){var H=T[C];H.x<F.x?F.x=H.x:H.x>J.x&&(J.x=H.x),H.y<F.y?F.y=H.y:H.y>J.y&&(J.y=H.y),H.z<F.z?F.z=H.z:H.z>J.z&&(J.z=H.z)}},c.prototype.computeWorldFaceNormals=function(F){for(var J=this.faceNormals.length;this.worldFaceNormals.length<J;)this.worldFaceNormals.push(new s);for(var z=this.faceNormals,T=this.worldFaceNormals,C=0;C!==J;C++)F.vmult(z[C],T[C]);this.worldFaceNormalsNeedsUpdate=!1},c.prototype.updateBoundingSphereRadius=function(){for(var F=0,J=this.vertices,z=0,T=J.length;z!==T;z++){var C=J[z].norm2();C>F&&(F=C)}this.boundingSphereRadius=Math.sqrt(F)};var X=new s;c.prototype.calculateWorldAABB=function(F,J,z,T){for(var C=this.vertices.length,H=this.vertices,Z,et,q,nt,mt,Lt,vt=0;vt<C;vt++){X.copy(H[vt]),J.vmult(X,X),F.vadd(X,X);var I=X;I.x<Z||Z===void 0?Z=I.x:(I.x>nt||nt===void 0)&&(nt=I.x),I.y<et||et===void 0?et=I.y:(I.y>mt||mt===void 0)&&(mt=I.y),I.z<q||q===void 0?q=I.z:(I.z>Lt||Lt===void 0)&&(Lt=I.z)}z.set(Z,et,q),T.set(nt,mt,Lt)},c.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},c.prototype.getAveragePointLocal=function(F){F=F||new s;for(var J=this.vertices.length,z=this.vertices,T=0;T<J;T++)F.vadd(z[T],F);return F.mult(1/J,F),F},c.prototype.transformAllPoints=function(F,J){var z=this.vertices.length,T=this.vertices;if(J){for(var C=0;C<z;C++){var H=T[C];J.vmult(H,H)}for(var C=0;C<this.faceNormals.length;C++){var H=this.faceNormals[C];J.vmult(H,H)}}if(F)for(var C=0;C<z;C++){var H=T[C];H.vadd(F,H)}};var tt=new s,O=new s,D=new s;c.prototype.pointIsInside=function(F){var J=this.vertices.length,z=this.vertices,T=this.faces,C=this.faceNormals,H=null,Z=this.faces.length,et=tt;this.getAveragePointLocal(et);for(var q=0;q<Z;q++){this.faces[q].length;var J=C[q],nt=z[T[q][0]],mt=O;F.vsub(nt,mt);var Lt=J.dot(mt),vt=D;et.vsub(nt,vt);var I=J.dot(vt);if(Lt<0&&I>0||Lt>0&&I<0)return!1}return H?1:-1},new s;var Q=new s,K=new s;c.project=function(F,J,z,T,C){var H=F.vertices.length,Z=Q,et=0,q=0,nt=K,mt=F.vertices;nt.setZero(),o.vectorToLocalFrame(z,T,J,Z),o.pointToLocalFrame(z,T,nt,nt);var Lt=nt.dot(Z);q=et=mt[0].dot(Z);for(var vt=1;vt<H;vt++){var I=mt[vt].dot(Z);I>et&&(et=I),I<q&&(q=I)}if(q-=Lt,et-=Lt,q>et){var dt=q;q=et,et=dt}C[0]=et,C[1]=q}},{"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"./Shape":43}],39:[function(e,n,a){n.exports=c;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("./ConvexPolyhedron");function c(d,h,l,u){var p=u,v=[],g=[],m=[],f=[],x=[],M=Math.cos,_=Math.sin;v.push(new s(h*M(0),h*_(0),-l*.5)),f.push(0),v.push(new s(d*M(0),d*_(0),l*.5)),x.push(1);for(var A=0;A<p;A++){var P=2*Math.PI/p*(A+1),N=2*Math.PI/p*(A+.5);A<p-1?(v.push(new s(h*M(P),h*_(P),-l*.5)),f.push(2*A+2),v.push(new s(d*M(P),d*_(P),l*.5)),x.push(2*A+3),m.push([2*A+2,2*A+3,2*A+1,2*A])):m.push([0,1,2*A+1,2*A]),(p%2===1||A<p/2)&&g.push(new s(M(N),_(N),0))}m.push(x),g.push(new s(0,0,1));for(var L=[],A=0;A<f.length;A++)L.push(f[f.length-A-1]);m.push(L),this.type=r.types.CONVEXPOLYHEDRON,o.call(this,v,m,g)}c.prototype=new o},{"../math/Quaternion":28,"../math/Vec3":30,"./ConvexPolyhedron":38,"./Shape":43}],40:[function(e,n,a){var r=e("./Shape"),s=e("./ConvexPolyhedron"),o=e("../math/Vec3"),c=e("../utils/Utils");n.exports=d;function d(h,l){l=c.defaults(l,{maxValue:null,minValue:null,elementSize:1}),this.data=h,this.maxValue=l.maxValue,this.minValue=l.minValue,this.elementSize=l.elementSize,l.minValue===null&&this.updateMinValue(),l.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,r.call(this),this.pillarConvex=new s,this.pillarOffset=new o,this.type=r.types.HEIGHTFIELD,this.updateBoundingSphereRadius(),this._cachedPillars={}}d.prototype=new r,d.prototype.update=function(){this._cachedPillars={}},d.prototype.updateMinValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v<l&&(l=v)}this.minValue=l},d.prototype.updateMaxValue=function(){for(var h=this.data,l=h[0][0],u=0;u!==h.length;u++)for(var p=0;p!==h[u].length;p++){var v=h[u][p];v>l&&(l=v)}this.maxValue=l},d.prototype.setHeightValueAtIndex=function(h,l,u){var p=this.data;p[h][l]=u,this.clearCachedConvexTrianglePillar(h,l,!1),h>0&&(this.clearCachedConvexTrianglePillar(h-1,l,!0),this.clearCachedConvexTrianglePillar(h-1,l,!1)),l>0&&(this.clearCachedConvexTrianglePillar(h,l-1,!0),this.clearCachedConvexTrianglePillar(h,l-1,!1)),l>0&&h>0&&this.clearCachedConvexTrianglePillar(h-1,l-1,!0)},d.prototype.getRectMinMax=function(h,l,u,p,v){v=v||[];for(var g=this.data,m=this.minValue,f=h;f<=u;f++)for(var x=l;x<=p;x++){var M=g[f][x];M>m&&(m=M)}v[0]=this.minValue,v[1]=m},d.prototype.getIndexOfPosition=function(h,l,u,p){var v=this.elementSize,g=this.data,m=Math.floor(h/v),f=Math.floor(l/v);return u[0]=m,u[1]=f,p&&(m<0&&(m=0),f<0&&(f=0),m>=g.length-1&&(m=g.length-1),f>=g[0].length-1&&(f=g[0].length-1)),!(m<0||f<0||m>=g.length-1||f>=g[0].length-1)},d.prototype.getHeightAt=function(h,l,u){var p=[];this.getIndexOfPosition(h,l,p,u);var v=[];return this.getRectMinMax(p[0],p[1]+1,p[0],p[1]+1,v),(v[0]+v[1])/2},d.prototype.getCacheConvexTrianglePillarKey=function(h,l,u){return h+"_"+l+"_"+(u?1:0)},d.prototype.getCachedConvexTrianglePillar=function(h,l,u){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.setCachedConvexTrianglePillar=function(h,l,u,p,v){this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]={convex:p,offset:v}},d.prototype.clearCachedConvexTrianglePillar=function(h,l,u){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(h,l,u)]},d.prototype.getConvexTrianglePillar=function(h,l,u){var p=this.pillarConvex,v=this.pillarOffset;if(this.cacheEnabled){var g=this.getCachedConvexTrianglePillar(h,l,u);if(g){this.pillarConvex=g.convex,this.pillarOffset=g.offset;return}p=new s,v=new o,this.pillarConvex=p,this.pillarOffset=v}var g=this.data,m=this.elementSize,f=p.faces;p.vertices.length=6;for(var x=0;x<6;x++)p.vertices[x]||(p.vertices[x]=new o);f.length=5;for(var x=0;x<5;x++)f[x]||(f[x]=[]);var M=p.vertices,_=(Math.min(g[h][l],g[h+1][l],g[h][l+1],g[h+1][l+1])-this.minValue)/2+this.minValue;u?(v.set((h+.75)*m,(l+.75)*m,_),M[0].set(.25*m,.25*m,g[h+1][l+1]-_),M[1].set(-.75*m,.25*m,g[h][l+1]-_),M[2].set(.25*m,-.75*m,g[h+1][l]-_),M[3].set(.25*m,.25*m,-_-1),M[4].set(-.75*m,.25*m,-_-1),M[5].set(.25*m,-.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=2,f[2][1]=5,f[2][2]=3,f[2][3]=0,f[3][0]=3,f[3][1]=4,f[3][2]=1,f[3][3]=0,f[4][0]=1,f[4][1]=4,f[4][2]=5,f[4][3]=2):(v.set((h+.25)*m,(l+.25)*m,_),M[0].set(-.25*m,-.25*m,g[h][l]-_),M[1].set(.75*m,-.25*m,g[h+1][l]-_),M[2].set(-.25*m,.75*m,g[h][l+1]-_),M[3].set(-.25*m,-.25*m,-_-1),M[4].set(.75*m,-.25*m,-_-1),M[5].set(-.25*m,.75*m,-_-1),f[0][0]=0,f[0][1]=1,f[0][2]=2,f[1][0]=5,f[1][1]=4,f[1][2]=3,f[2][0]=0,f[2][1]=2,f[2][2]=5,f[2][3]=3,f[3][0]=1,f[3][1]=0,f[3][2]=3,f[3][3]=4,f[4][0]=4,f[4][1]=5,f[4][2]=2,f[4][3]=1),p.computeNormals(),p.computeEdges(),p.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(h,l,u,p,v)},d.prototype.calculateLocalInertia=function(h,l){return l=l||new o,l.set(0,0,0),l},d.prototype.volume=function(){return Number.MAX_VALUE},d.prototype.calculateWorldAABB=function(h,l,u,p){u.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),p.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)},d.prototype.updateBoundingSphereRadius=function(){var h=this.data,l=this.elementSize;this.boundingSphereRadius=new o(h.length*l,h[0].length*l,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm()}},{"../math/Vec3":30,"../utils/Utils":53,"./ConvexPolyhedron":38,"./Shape":43}],41:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PARTICLE}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){return d=d||new s,d.set(0,0,0),d},o.prototype.volume=function(){return 0},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0},o.prototype.calculateWorldAABB=function(c,d,h,l){h.copy(c),l.copy(c)}},{"../math/Vec3":30,"./Shape":43}],42:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(){r.call(this),this.type=r.types.PLANE,this.worldNormal=new s,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}o.prototype=new r,o.prototype.constructor=o,o.prototype.computeWorldNormal=function(d){var h=this.worldNormal;h.set(0,0,1),d.vmult(h,h),this.worldNormalNeedsUpdate=!1},o.prototype.calculateLocalInertia=function(d,h){return h=h||new s,h},o.prototype.volume=function(){return Number.MAX_VALUE};var c=new s;o.prototype.calculateWorldAABB=function(d,h,l,u){c.set(0,0,1),h.vmult(c,c);var p=Number.MAX_VALUE;l.set(-p,-p,-p),u.set(p,p,p),c.x===1&&(u.x=d.x),c.y===1&&(u.y=d.y),c.z===1&&(u.z=d.z),c.x===-1&&(l.x=d.x),c.y===-1&&(l.y=d.y),c.z===-1&&(l.z=d.z)},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE}},{"../math/Vec3":30,"./Shape":43}],43:[function(e,n,a){n.exports=r;var r=e("./Shape");e("../math/Vec3"),e("../math/Quaternion"),e("../material/Material");function r(){this.id=r.idCounter++,this.type=0,this.boundingSphereRadius=0,this.collisionResponse=!0,this.material=null}r.prototype.constructor=r,r.prototype.updateBoundingSphereRadius=function(){throw"computeBoundingSphereRadius() not implemented for shape type "+this.type},r.prototype.volume=function(){throw"volume() not implemented for shape type "+this.type},r.prototype.calculateLocalInertia=function(s,o){throw"calculateLocalInertia() not implemented for shape type "+this.type},r.idCounter=0,r.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256}},{"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"./Shape":43}],44:[function(e,n,a){n.exports=o;var r=e("./Shape"),s=e("../math/Vec3");function o(c){if(r.call(this),this.radius=c!==void 0?Number(c):1,this.type=r.types.SPHERE,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}o.prototype=new r,o.prototype.constructor=o,o.prototype.calculateLocalInertia=function(c,d){d=d||new s;var h=2*c*this.radius*this.radius/5;return d.x=h,d.y=h,d.z=h,d},o.prototype.volume=function(){return 4*Math.PI*this.radius/3},o.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius},o.prototype.calculateWorldAABB=function(c,d,h,l){for(var u=this.radius,p=["x","y","z"],v=0;v<p.length;v++){var g=p[v];h[g]=c[g]-u,l[g]=c[g]+u}}},{"../math/Vec3":30,"./Shape":43}],45:[function(e,n,a){n.exports=h;var r=e("./Shape"),s=e("../math/Vec3");e("../math/Quaternion");var o=e("../math/Transform"),c=e("../collision/AABB"),d=e("../utils/Octree");function h(L,S){r.call(this),this.type=r.types.TRIMESH,this.vertices=new Float32Array(L),this.indices=new Int16Array(S),this.normals=new Float32Array(S.length),this.aabb=new c,this.edges=null,this.scale=new s(1,1,1),this.tree=new d,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}h.prototype=new r,h.prototype.constructor=h;var l=new s;h.prototype.updateTree=function(){var L=this.tree;L.reset(),L.aabb.copy(this.aabb);var S=this.scale;L.aabb.lowerBound.x*=1/S.x,L.aabb.lowerBound.y*=1/S.y,L.aabb.lowerBound.z*=1/S.z,L.aabb.upperBound.x*=1/S.x,L.aabb.upperBound.y*=1/S.y,L.aabb.upperBound.z*=1/S.z;for(var y=new c,b=new s,B=new s,U=new s,W=[b,B,U],X=0;X<this.indices.length/3;X++){var tt=X*3;this._getUnscaledVertex(this.indices[tt],b),this._getUnscaledVertex(this.indices[tt+1],B),this._getUnscaledVertex(this.indices[tt+2],U),y.setFromPoints(W),L.insert(y,X)}L.removeEmptyNodes()};var u=new c;h.prototype.getTrianglesInAABB=function(L,S){u.copy(L);var y=this.scale,b=y.x,B=y.y,U=y.z,W=u.lowerBound,X=u.upperBound;return W.x/=b,W.y/=B,W.z/=U,X.x/=b,X.y/=B,X.z/=U,this.tree.aabbQuery(u,S)},h.prototype.setScale=function(L){var S=this.scale.x===this.scale.y===this.scale.z,y=L.x===L.y===L.z;S&&y||this.updateNormals(),this.scale.copy(L),this.updateAABB(),this.updateBoundingSphereRadius()},h.prototype.updateNormals=function(){for(var L=l,S=this.normals,y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1],W=this.indices[b+2];this.getVertex(B,f),this.getVertex(U,x),this.getVertex(W,M),h.computeNormal(x,f,M,L),S[b]=L.x,S[b+1]=L.y,S[b+2]=L.z}},h.prototype.updateEdges=function(){for(var L={},S=function(tt,O){var D=B<U?B+"_"+U:U+"_"+B;L[D]=!0},y=0;y<this.indices.length/3;y++){var b=y*3,B=this.indices[b],U=this.indices[b+1];this.indices[b+2],S(),S(),S()}var W=Object.keys(L);this.edges=new Int16Array(W.length*2);for(var y=0;y<W.length;y++){var X=W[y].split("_");this.edges[2*y]=parseInt(X[0],10),this.edges[2*y+1]=parseInt(X[1],10)}},h.prototype.getEdgeVertex=function(L,S,y){var b=this.edges[L*2+(S?1:0)];this.getVertex(b,y)};var p=new s,v=new s;h.prototype.getEdgeVector=function(L,S){var y=p,b=v;this.getEdgeVertex(L,0,y),this.getEdgeVertex(L,1,b),b.vsub(y,S)};var g=new s,m=new s;h.computeNormal=function(L,S,y,b){S.vsub(L,m),y.vsub(S,g),g.cross(m,b),b.isZero()||b.normalize()};var f=new s,x=new s,M=new s;h.prototype.getVertex=function(L,S){var y=this.scale;return this._getUnscaledVertex(L,S),S.x*=y.x,S.y*=y.y,S.z*=y.z,S},h.prototype._getUnscaledVertex=function(L,S){var y=L*3,b=this.vertices;return S.set(b[y],b[y+1],b[y+2])},h.prototype.getWorldVertex=function(L,S,y,b){return this.getVertex(L,b),o.pointToWorldFrame(S,y,b,b),b},h.prototype.getTriangleVertices=function(L,S,y,b){var B=L*3;this.getVertex(this.indices[B],S),this.getVertex(this.indices[B+1],y),this.getVertex(this.indices[B+2],b)},h.prototype.getNormal=function(L,S){var y=L*3;return S.set(this.normals[y],this.normals[y+1],this.normals[y+2])};var _=new c;h.prototype.calculateLocalInertia=function(L,S){this.computeLocalAABB(_);var y=_.upperBound.x-_.lowerBound.x,b=_.upperBound.y-_.lowerBound.y,B=_.upperBound.z-_.lowerBound.z;return S.set(1/12*L*(2*b*2*b+2*B*2*B),1/12*L*(2*y*2*y+2*B*2*B),1/12*L*(2*b*2*b+2*y*2*y))};var A=new s;h.prototype.computeLocalAABB=function(L){var S=L.lowerBound,y=L.upperBound,b=this.vertices.length;this.vertices;var B=A;this.getVertex(0,B),S.copy(B),y.copy(B);for(var U=0;U!==b;U++)this.getVertex(U,B),B.x<S.x?S.x=B.x:B.x>y.x&&(y.x=B.x),B.y<S.y?S.y=B.y:B.y>y.y&&(y.y=B.y),B.z<S.z?S.z=B.z:B.z>y.z&&(y.z=B.z)},h.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb)},h.prototype.updateBoundingSphereRadius=function(){for(var L=0,S=this.vertices,y=new s,b=0,B=S.length/3;b!==B;b++){this.getVertex(b,y);var U=y.norm2();U>L&&(L=U)}this.boundingSphereRadius=Math.sqrt(L)},new s;var P=new o,N=new c;h.prototype.calculateWorldAABB=function(L,S,y,b){var B=P,U=N;B.position=L,B.quaternion=S,this.aabb.toWorldFrame(B,U),y.copy(U.lowerBound),b.copy(U.upperBound)},h.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},h.createTorus=function(L,S,y,b,B){L=L||1,S=S||.5,y=y||8,b=b||6,B=B||Math.PI*2;for(var U=[],W=[],X=0;X<=y;X++)for(var tt=0;tt<=b;tt++){var O=tt/b*B,D=X/y*Math.PI*2,Q=(L+S*Math.cos(D))*Math.cos(O),K=(L+S*Math.cos(D))*Math.sin(O),F=S*Math.sin(D);U.push(Q,K,F)}for(var X=1;X<=y;X++)for(var tt=1;tt<=b;tt++){var J=(b+1)*X+tt-1,z=(b+1)*(X-1)+tt-1,T=(b+1)*(X-1)+tt,C=(b+1)*X+tt;W.push(J,z,C),W.push(z,T,C)}return new h(U,W)}},{"../collision/AABB":3,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../utils/Octree":50,"./Shape":43}],46:[function(e,n,a){n.exports=s,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver");function s(){r.call(this),this.iterations=10,this.tolerance=1e-7}s.prototype=new r;var o=[],c=[],d=[];s.prototype.solve=function(h,l){var u=0,p=this.iterations,v=this.tolerance*this.tolerance,g=this.equations,m=g.length,f=l.bodies,x=f.length,M=h,_,A,P,N,L,S;if(m!==0)for(var y=0;y!==x;y++)f[y].updateSolveMassProperties();var b=c,B=d,U=o;b.length=m,B.length=m,U.length=m;for(var y=0;y!==m;y++){var W=g[y];U[y]=0,B[y]=W.computeB(M),b[y]=1/W.computeC()}if(m!==0){for(var y=0;y!==x;y++){var X=f[y],tt=X.vlambda,O=X.wlambda;tt.set(0,0,0),O&&O.set(0,0,0)}for(u=0;u!==p;u++){N=0;for(var D=0;D!==m;D++){var W=g[D];_=B[D],A=b[D],S=U[D],L=W.computeGWlambda(),P=A*(_-L-W.eps*S),S+P<W.minForce?P=W.minForce-S:S+P>W.maxForce&&(P=W.maxForce-S),U[D]+=P,N+=P>0?P:-P,W.addToWlambda(P)}if(N*N<v)break}for(var y=0;y!==x;y++){var X=f[y],Q=X.velocity,K=X.angularVelocity;Q.vadd(X.vlambda,Q),K&&K.vadd(X.wlambda,K)}}return u}},{"../math/Quaternion":28,"../math/Vec3":30,"./Solver":47}],47:[function(e,n,a){n.exports=r;function r(){this.equations=[]}r.prototype.solve=function(s,o){return 0},r.prototype.addEquation=function(s){s.enabled&&this.equations.push(s)},r.prototype.removeEquation=function(s){var o=this.equations,c=o.indexOf(s);c!==-1&&o.splice(c,1)},r.prototype.removeAllEquations=function(){this.equations.length=0}},{}],48:[function(e,n,a){n.exports=o,e("../math/Vec3"),e("../math/Quaternion");var r=e("./Solver"),s=e("../objects/Body");function o(f){for(r.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=f,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode())}o.prototype=new r;var c=[],d=[],h={bodies:[]},l=s.STATIC;function u(f){for(var x=f.length,M=0;M!==x;M++){var _=f[M];if(!_.visited&&!(_.body.type&l))return _}return!1}var p=[];function v(f,x,M,_){for(p.push(f),f.visited=!0,x(f,M,_);p.length;)for(var A=p.pop(),P;P=u(A.children);)P.visited=!0,x(P,M,_),p.push(P)}function g(f,x,M){x.push(f.body);for(var _=f.eqs.length,A=0;A!==_;A++){var P=f.eqs[A];M.indexOf(P)===-1&&M.push(P)}}o.prototype.createNode=function(){return{body:null,children:[],eqs:[],visited:!1}},o.prototype.solve=function(f,x){for(var M=c,_=this.nodePool,A=x.bodies,P=this.equations,N=P.length,L=A.length,S=this.subsolver;_.length<L;)_.push(this.createNode());M.length=L;for(var y=0;y<L;y++)M[y]=_[y];for(var y=0;y!==L;y++){var b=M[y];b.body=A[y],b.children.length=0,b.eqs.length=0,b.visited=!1}for(var B=0;B!==N;B++){var U=P[B],y=A.indexOf(U.bi),W=A.indexOf(U.bj),X=M[y],tt=M[W];X.children.push(tt),X.eqs.push(U),tt.children.push(X),tt.eqs.push(U)}var O,D=0,Q=d;S.tolerance=this.tolerance,S.iterations=this.iterations;for(var K=h;O=u(M);){Q.length=0,K.bodies.length=0,v(O,g,K.bodies,Q);var F=Q.length;Q=Q.sort(m);for(var y=0;y!==F;y++)S.addEquation(Q[y]);S.solve(f,K),S.removeAllEquations(),D++}return D};function m(f,x){return x.id-f.id}},{"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"./Solver":47}],49:[function(e,n,a){var r=function(){};n.exports=r,r.prototype={constructor:r,addEventListener:function(s,o){this._listeners===void 0&&(this._listeners={});var c=this._listeners;return c[s]===void 0&&(c[s]=[]),c[s].indexOf(o)===-1&&c[s].push(o),this},hasEventListener:function(s,o){if(this._listeners===void 0)return!1;var c=this._listeners;return c[s]!==void 0&&c[s].indexOf(o)!==-1},removeEventListener:function(s,o){if(this._listeners===void 0)return this;var c=this._listeners;if(c[s]===void 0)return this;var d=c[s].indexOf(o);return d!==-1&&c[s].splice(d,1),this},dispatchEvent:function(s){if(this._listeners===void 0)return this;var o=this._listeners,c=o[s.type];if(c!==void 0){s.target=this;for(var d=0,h=c.length;d<h;d++)c[d].call(this,s)}return this}}},{}],50:[function(e,n,a){var r=e("../collision/AABB"),s=e("../math/Vec3");n.exports=c;function o(l){l=l||{},this.root=l.root||null,this.aabb=l.aabb?l.aabb.clone():new r,this.data=[],this.children=[]}function c(l,u){u=u||{},u.root=null,u.aabb=l,o.call(this,u),this.maxDepth=typeof u.maxDepth<"u"?u.maxDepth:8}c.prototype=new o,o.prototype.reset=function(l,u){this.children.length=this.data.length=0},o.prototype.insert=function(l,u,p){var v=this.data;if(p=p||0,!this.aabb.contains(l))return!1;var g=this.children;if(p<(this.maxDepth||this.root.maxDepth)){var m=!1;g.length||(this.subdivide(),m=!0);for(var f=0;f!==8;f++)if(g[f].insert(l,u,p+1))return!0;m&&(g.length=0)}return v.push(u),!0};var d=new s;o.prototype.subdivide=function(){var l=this.aabb,u=l.lowerBound,p=l.upperBound,v=this.children;v.push(new o({aabb:new r({lowerBound:new s(0,0,0)})}),new o({aabb:new r({lowerBound:new s(1,0,0)})}),new o({aabb:new r({lowerBound:new s(1,1,0)})}),new o({aabb:new r({lowerBound:new s(1,1,1)})}),new o({aabb:new r({lowerBound:new s(0,1,1)})}),new o({aabb:new r({lowerBound:new s(0,0,1)})}),new o({aabb:new r({lowerBound:new s(1,0,1)})}),new o({aabb:new r({lowerBound:new s(0,1,0)})})),p.vsub(u,d),d.scale(.5,d);for(var g=this.root||this,m=0;m!==8;m++){var f=v[m];f.root=g;var x=f.aabb.lowerBound;x.x*=d.x,x.y*=d.y,x.z*=d.z,x.vadd(u,x),x.vadd(d,f.aabb.upperBound)}},o.prototype.aabbQuery=function(l,u){this.data,this.children;for(var p=[this];p.length;){var v=p.pop();v.aabb.overlaps(l)&&Array.prototype.push.apply(u,v.data),Array.prototype.push.apply(p,v.children)}return u};var h=new r;o.prototype.rayQuery=function(l,u,p){return l.getAABB(h),h.toLocalFrame(u,h),this.aabbQuery(h,p),p},o.prototype.removeEmptyNodes=function(){for(var l=[this];l.length;){for(var u=l.pop(),p=u.children.length-1;p>=0;p--)u.children[p].data.length||u.children.splice(p,1);Array.prototype.push.apply(l,u.children)}}},{"../collision/AABB":3,"../math/Vec3":30}],51:[function(e,n,a){n.exports=r;function r(){this.objects=[],this.type=Object}r.prototype.release=function(){for(var s=arguments.length,o=0;o!==s;o++)this.objects.push(arguments[o])},r.prototype.get=function(){return this.objects.length===0?this.constructObject():this.objects.pop()},r.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}},{}],52:[function(e,n,a){n.exports=r;function r(){this.data={keys:[]}}r.prototype.get=function(s,o){if(s>o){var c=o;o=s,s=c}return this.data[s+"-"+o]},r.prototype.set=function(s,o,c){if(s>o){var d=o;o=s,s=d}var h=s+"-"+o;this.get(s,o)||this.data.keys.push(h),this.data[h]=c},r.prototype.reset=function(){for(var s=this.data,o=s.keys;o.length>0;){var c=o.pop();delete s[c]}}},{}],53:[function(e,n,a){function r(){}n.exports=r,r.defaults=function(s,o){s=s||{};for(var c in o)c in s||(s[c]=o[c]);return s}},{}],54:[function(e,n,a){n.exports=o;var r=e("../math/Vec3"),s=e("./Pool");function o(){s.call(this),this.type=r}o.prototype=new s,o.prototype.constructObject=function(){return new r}},{"../math/Vec3":30,"./Pool":51}],55:[function(e,n,a){n.exports=v;var r=e("../collision/AABB"),s=e("../shapes/Shape"),o=e("../collision/Ray"),c=e("../math/Vec3"),d=e("../math/Transform");e("../shapes/ConvexPolyhedron");var h=e("../math/Quaternion");e("../solver/Solver");var l=e("../utils/Vec3Pool"),u=e("../equations/ContactEquation"),p=e("../equations/FrictionEquation");function v(st){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new l,this.world=st,this.currentContactMaterial=null,this.enableFrictionReduction=!1}v.prototype.createContactEquation=function(st,ut,gt,_t,ee,Bt){var At;this.contactPointPool.length?(At=this.contactPointPool.pop(),At.bi=st,At.bj=ut):At=new u(st,ut),At.enabled=st.collisionResponse&&ut.collisionResponse&&gt.collisionResponse&&_t.collisionResponse;var Nt=this.currentContactMaterial;At.restitution=Nt.restitution,At.setSpookParams(Nt.contactEquationStiffness,Nt.contactEquationRelaxation,this.world.dt);var it=gt.material||st.material,Tt=_t.material||ut.material;return it&&Tt&&it.restitution>=0&&Tt.restitution>=0&&(At.restitution=it.restitution*Tt.restitution),At.si=ee||gt,At.sj=Bt||_t,At},v.prototype.createFrictionEquationsFromContact=function(st,ut){var gt=st.bi,_t=st.bj,ee=st.si,Bt=st.sj,At=this.world,Nt=this.currentContactMaterial,it=Nt.friction,Tt=ee.material||gt.material,Dt=Bt.material||_t.material;if(Tt&&Dt&&Tt.friction>=0&&Dt.friction>=0&&(it=Tt.friction*Dt.friction),it>0){var Yt=it*At.gravity.length(),Rt=gt.invMass+_t.invMass;Rt>0&&(Rt=1/Rt);var bt=this.frictionEquationPool,It=bt.length?bt.pop():new p(gt,_t,Yt*Rt),Qt=bt.length?bt.pop():new p(gt,_t,Yt*Rt);return It.bi=Qt.bi=gt,It.bj=Qt.bj=_t,It.minForce=Qt.minForce=-Yt*Rt,It.maxForce=Qt.maxForce=Yt*Rt,It.ri.copy(st.ri),It.rj.copy(st.rj),Qt.ri.copy(st.ri),Qt.rj.copy(st.rj),st.ni.tangents(It.t,Qt.t),It.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),Qt.setSpookParams(Nt.frictionEquationStiffness,Nt.frictionEquationRelaxation,At.dt),It.enabled=Qt.enabled=st.enabled,ut.push(It,Qt),!0}return!1};var g=new c,m=new c,f=new c;v.prototype.createFrictionFromAverage=function(st){var ut=this.result[this.result.length-1];if(!(!this.createFrictionEquationsFromContact(ut,this.frictionResult)||st===1)){var gt=this.frictionResult[this.frictionResult.length-2],_t=this.frictionResult[this.frictionResult.length-1];g.setZero(),m.setZero(),f.setZero();var ee=ut.bi;ut.bj;for(var Bt=0;Bt!==st;Bt++)ut=this.result[this.result.length-1-Bt],ut.bodyA!==ee?(g.vadd(ut.ni,g),m.vadd(ut.ri,m),f.vadd(ut.rj,f)):(g.vsub(ut.ni,g),m.vadd(ut.rj,m),f.vadd(ut.ri,f));var At=1/st;m.scale(At,gt.ri),f.scale(At,gt.rj),_t.ri.copy(gt.ri),_t.rj.copy(gt.rj),g.normalize(),g.tangents(gt.t,_t.t)}};var x=new c,M=new c,_=new h,A=new h;v.prototype.getContacts=function(st,ut,gt,_t,ee,Bt,At){this.contactPointPool=ee,this.frictionEquationPool=At,this.result=_t,this.frictionResult=Bt;for(var Nt=_,it=A,Tt=x,Dt=M,Yt=0,Rt=st.length;Yt!==Rt;Yt++){var bt=st[Yt],It=ut[Yt],Qt=null;bt.material&&It.material&&(Qt=gt.getContactMaterial(bt.material,It.material)||null);for(var oe=0;oe<bt.shapes.length;oe++){bt.quaternion.mult(bt.shapeOrientations[oe],Nt),bt.quaternion.vmult(bt.shapeOffsets[oe],Tt),Tt.vadd(bt.position,Tt);for(var Mt=bt.shapes[oe],he=0;he<It.shapes.length;he++){It.quaternion.mult(It.shapeOrientations[he],it),It.quaternion.vmult(It.shapeOffsets[he],Dt),Dt.vadd(It.position,Dt);var w=It.shapes[he];if(!(Tt.distanceTo(Dt)>Mt.boundingSphereRadius+w.boundingSphereRadius)){var k=null;Mt.material&&w.material&&(k=gt.getContactMaterial(Mt.material,w.material)||null),this.currentContactMaterial=k||Qt||gt.defaultContactMaterial;var Y=this[Mt.type|w.type];Y&&(Mt.type<w.type?Y.call(this,Mt,w,Tt,Dt,Nt,it,bt,It,Mt,w):Y.call(this,w,Mt,Dt,Tt,it,Nt,It,bt,Mt,w))}}}}},v.prototype[s.types.BOX|s.types.BOX]=v.prototype.boxBox=function(st,ut,gt,_t,ee,Bt,At,Nt){st.convexPolyhedronRepresentation.material=st.material,ut.convexPolyhedronRepresentation.material=ut.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ut.convexPolyhedronRepresentation,gt,_t,ee,Bt,At,Nt,st,ut)},v.prototype[s.types.BOX|s.types.CONVEXPOLYHEDRON]=v.prototype.boxConvex=function(st,ut,gt,_t,ee,Bt,At,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexConvex(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,At,Nt,st,ut)},v.prototype[s.types.BOX|s.types.PARTICLE]=v.prototype.boxParticle=function(st,ut,gt,_t,ee,Bt,At,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexParticle(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,At,Nt,st,ut)},v.prototype[s.types.SPHERE]=v.prototype.sphereSphere=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=this.createContactEquation(At,Nt,st,ut);_t.vsub(gt,it.ni),it.ni.normalize(),it.ri.copy(it.ni),it.rj.copy(it.ni),it.ri.mult(st.radius,it.ri),it.rj.mult(-ut.radius,it.rj),it.ri.vadd(gt,it.ri),it.ri.vsub(At.position,it.ri),it.rj.vadd(_t,it.rj),it.rj.vsub(Nt.position,it.rj),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)};var P=new c,N=new c,L=new c;v.prototype[s.types.PLANE|s.types.TRIMESH]=v.prototype.planeTrimesh=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=new c,Tt=P;Tt.set(0,0,1),ee.vmult(Tt,Tt);for(var Dt=0;Dt<ut.vertices.length/3;Dt++){ut.getVertex(Dt,it);var Yt=new c;Yt.copy(it),d.pointToWorldFrame(_t,Bt,Yt,it);var Rt=N;it.vsub(gt,Rt);var bt=Tt.dot(Rt);if(bt<=0){var It=this.createContactEquation(At,Nt,st,ut);It.ni.copy(Tt);var Qt=L;Tt.scale(Rt.dot(Tt),Qt),it.vsub(Qt,Qt),It.ri.copy(Qt),It.ri.vsub(At.position,It.ri),It.rj.copy(it),It.rj.vsub(Nt.position,It.rj),this.result.push(It),this.createFrictionEquationsFromContact(It,this.frictionResult)}}};var S=new c,y=new c;new c;var b=new c,B=new c,U=new c,W=new c,X=new c,tt=new c,O=new c,D=new c,Q=new c,K=new c,F=new c,J=new r,z=[];v.prototype[s.types.SPHERE|s.types.TRIMESH]=v.prototype.sphereTrimesh=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=U,Tt=W,Dt=X,Yt=tt,Rt=O,bt=D,It=J,Qt=B,oe=y,Mt=z;d.pointToLocalFrame(_t,Bt,gt,Rt);var he=st.radius;It.lowerBound.set(Rt.x-he,Rt.y-he,Rt.z-he),It.upperBound.set(Rt.x+he,Rt.y+he,Rt.z+he),ut.getTrianglesInAABB(It,Mt);for(var w=b,k=st.radius*st.radius,Y=0;Y<Mt.length;Y++)for(var j=0;j<3;j++)if(ut.getVertex(ut.indices[Mt[Y]*3+j],w),w.vsub(Rt,oe),oe.norm2()<=k){Qt.copy(w),d.pointToWorldFrame(_t,Bt,Qt,w),w.vsub(gt,oe);var V=this.createContactEquation(At,Nt,st,ut);V.ni.copy(oe),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(st.radius,V.ri),V.ri.vadd(gt,V.ri),V.ri.vsub(At.position,V.ri),V.rj.copy(w),V.rj.vsub(Nt.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(var Y=0;Y<Mt.length;Y++)for(var j=0;j<3;j++){ut.getVertex(ut.indices[Mt[Y]*3+j],it),ut.getVertex(ut.indices[Mt[Y]*3+(j+1)%3],Tt),Tt.vsub(it,Dt),Rt.vsub(Tt,bt);var xt=bt.dot(Dt);Rt.vsub(it,bt);var Ct=bt.dot(Dt);if(Ct>0&&xt<0){Rt.vsub(it,bt),Yt.copy(Dt),Yt.normalize(),Ct=bt.dot(Yt),Yt.scale(Ct,bt),bt.vadd(it,bt);var Ut=bt.distanceTo(Rt);if(Ut<st.radius){var V=this.createContactEquation(At,Nt,st,ut);bt.vsub(Rt,V.ni),V.ni.normalize(),V.ni.scale(st.radius,V.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,V.rj),d.vectorToWorldFrame(Bt,V.ni,V.ni),d.vectorToWorldFrame(Bt,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}}for(var Gt=Q,Kt=K,Wt=F,Zt=S,Y=0,te=Mt.length;Y!==te;Y++){ut.getTriangleVertices(Mt[Y],Gt,Kt,Wt),ut.getNormal(Mt[Y],Zt),Rt.vsub(Gt,bt);var Ut=bt.dot(Zt);if(Zt.scale(Ut,bt),Rt.vsub(bt,bt),Ut=bt.distanceTo(Rt),o.pointInTriangle(bt,Gt,Kt,Wt)&&Ut<st.radius){var V=this.createContactEquation(At,Nt,st,ut);bt.vsub(Rt,V.ni),V.ni.normalize(),V.ni.scale(st.radius,V.ri),d.pointToWorldFrame(_t,Bt,bt,bt),bt.vsub(Nt.position,V.rj),d.vectorToWorldFrame(Bt,V.ni,V.ni),d.vectorToWorldFrame(Bt,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}Mt.length=0};var T=new c,C=new c;v.prototype[s.types.SPHERE|s.types.PLANE]=v.prototype.spherePlane=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=this.createContactEquation(At,Nt,st,ut);if(it.ni.set(0,0,1),Bt.vmult(it.ni,it.ni),it.ni.negate(it.ni),it.ni.normalize(),it.ni.mult(st.radius,it.ri),gt.vsub(_t,T),it.ni.mult(it.ni.dot(T),C),T.vsub(C,it.rj),-T.dot(it.ni)<=st.radius){var Tt=it.ri,Dt=it.rj;Tt.vadd(gt,Tt),Tt.vsub(At.position,Tt),Dt.vadd(_t,Dt),Dt.vsub(Nt.position,Dt),this.result.push(it),this.createFrictionEquationsFromContact(it,this.frictionResult)}};var H=new c,Z=new c,et=new c;function q(st,ut,gt){for(var _t=null,ee=st.length,Bt=0;Bt!==ee;Bt++){var At=st[Bt],Nt=H;st[(Bt+1)%ee].vsub(At,Nt);var it=Z;Nt.cross(ut,it);var Tt=et;gt.vsub(At,Tt);var Dt=it.dot(Tt);if(_t===null||Dt>0&&_t===!0||Dt<=0&&_t===!1){_t===null&&(_t=Dt>0);continue}else return!1}return!0}var nt=new c,mt=new c,Lt=new c,vt=new c,I=[new c,new c,new c,new c,new c,new c],dt=new c,ht=new c,qt=new c,yt=new c;v.prototype[s.types.SPHERE|s.types.BOX]=v.prototype.sphereBox=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=this.v3pool,Tt=I;gt.vsub(_t,nt),ut.getSideNormals(Tt,Bt);for(var Dt=st.radius,Yt=!1,Rt=ht,bt=qt,It=yt,Qt=null,oe=0,Mt=0,he=0,w=null,k=0,Y=Tt.length;k!==Y&&Yt===!1;k++){var j=mt;j.copy(Tt[k]);var V=j.norm();j.normalize();var xt=nt.dot(j);if(xt<V+Dt&&xt>0){var Ct=Lt,Ut=vt;Ct.copy(Tt[(k+1)%3]),Ut.copy(Tt[(k+2)%3]);var Gt=Ct.norm(),Kt=Ut.norm();Ct.normalize(),Ut.normalize();var Wt=nt.dot(Ct),Zt=nt.dot(Ut);if(Wt<Gt&&Wt>-Gt&&Zt<Kt&&Zt>-Kt){var Ce=Math.abs(xt-V-Dt);(w===null||Ce<w)&&(w=Ce,Mt=Wt,he=Zt,Qt=V,Rt.copy(j),bt.copy(Ct),It.copy(Ut),oe++)}}}if(oe){Yt=!0;var Vt=this.createContactEquation(At,Nt,st,ut);Rt.mult(-Dt,Vt.ri),Vt.ni.copy(Rt),Vt.ni.negate(Vt.ni),Rt.mult(Qt,Rt),bt.mult(Mt,bt),Rt.vadd(bt,Rt),It.mult(he,It),Rt.vadd(It,Vt.rj),Vt.ri.vadd(gt,Vt.ri),Vt.ri.vsub(At.position,Vt.ri),Vt.rj.vadd(_t,Vt.rj),Vt.rj.vsub(Nt.position,Vt.rj),this.result.push(Vt),this.createFrictionEquationsFromContact(Vt,this.frictionResult)}for(var te=it.get(),fe=dt,xe=0;xe!==2&&!Yt;xe++)for(var me=0;me!==2&&!Yt;me++)for(var re=0;re!==2&&!Yt;re++)if(te.set(0,0,0),xe?te.vadd(Tt[0],te):te.vsub(Tt[0],te),me?te.vadd(Tt[1],te):te.vsub(Tt[1],te),re?te.vadd(Tt[2],te):te.vsub(Tt[2],te),_t.vadd(te,fe),fe.vsub(gt,fe),fe.norm2()<Dt*Dt){Yt=!0;var Vt=this.createContactEquation(At,Nt,st,ut);Vt.ri.copy(fe),Vt.ri.normalize(),Vt.ni.copy(Vt.ri),Vt.ri.mult(Dt,Vt.ri),Vt.rj.copy(te),Vt.ri.vadd(gt,Vt.ri),Vt.ri.vsub(At.position,Vt.ri),Vt.rj.vadd(_t,Vt.rj),Vt.rj.vsub(Nt.position,Vt.rj),this.result.push(Vt),this.createFrictionEquationsFromContact(Vt,this.frictionResult)}it.release(te),te=null;for(var $t=it.get(),be=it.get(),Vt=it.get(),Te=it.get(),Ce=it.get(),De=Tt.length,xe=0;xe!==De&&!Yt;xe++)for(var me=0;me!==De&&!Yt;me++)if(xe%3!==me%3){Tt[me].cross(Tt[xe],$t),$t.normalize(),Tt[xe].vadd(Tt[me],be),Vt.copy(gt),Vt.vsub(be,Vt),Vt.vsub(_t,Vt);var je=Vt.dot($t);$t.mult(je,Te);for(var re=0;re===xe%3||re===me%3;)re++;Ce.copy(gt),Ce.vsub(Te,Ce),Ce.vsub(be,Ce),Ce.vsub(_t,Ce);var Ae=Math.abs(je),We=Ce.norm();if(Ae<Tt[re].norm()&&We<Dt){Yt=!0;var ge=this.createContactEquation(At,Nt,st,ut);be.vadd(Te,ge.rj),ge.rj.copy(ge.rj),Ce.negate(ge.ni),ge.ni.normalize(),ge.ri.copy(ge.rj),ge.ri.vadd(_t,ge.ri),ge.ri.vsub(gt,ge.ri),ge.ri.normalize(),ge.ri.mult(Dt,ge.ri),ge.ri.vadd(gt,ge.ri),ge.ri.vsub(At.position,ge.ri),ge.rj.vadd(_t,ge.rj),ge.rj.vsub(Nt.position,ge.rj),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult)}}it.release($t,be,Vt,Te,Ce)};var ne=new c,pt=new c,R=new c,E=new c,$=new c,lt=new c,ct=new c,at=new c,St=new c,wt=new c;v.prototype[s.types.SPHERE|s.types.CONVEXPOLYHEDRON]=v.prototype.sphereConvex=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=this.v3pool;gt.vsub(_t,ne);for(var Tt=ut.faceNormals,Dt=ut.faces,Yt=ut.vertices,Rt=st.radius,bt=0;bt!==Yt.length;bt++){var It=Yt[bt],Qt=$;Bt.vmult(It,Qt),_t.vadd(Qt,Qt);var oe=E;if(Qt.vsub(gt,oe),oe.norm2()<Rt*Rt){he=!0;var Mt=this.createContactEquation(At,Nt,st,ut);Mt.ri.copy(oe),Mt.ri.normalize(),Mt.ni.copy(Mt.ri),Mt.ri.mult(Rt,Mt.ri),Qt.vsub(_t,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(At.position,Mt.ri),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);return}}for(var he=!1,bt=0,w=Dt.length;bt!==w&&he===!1;bt++){var k=Tt[bt],Y=Dt[bt],j=lt;Bt.vmult(k,j);var V=ct;Bt.vmult(Yt[Y[0]],V),V.vadd(_t,V);var xt=at;j.mult(-Rt,xt),gt.vadd(xt,xt);var Ct=St;xt.vsub(V,Ct);var Ut=Ct.dot(j),Gt=wt;if(gt.vsub(V,Gt),Ut<0&&Gt.dot(j)>0){for(var Kt=[],Wt=0,Zt=Y.length;Wt!==Zt;Wt++){var te=it.get();Bt.vmult(Yt[Y[Wt]],te),_t.vadd(te,te),Kt.push(te)}if(q(Kt,j,gt)){he=!0;var Mt=this.createContactEquation(At,Nt,st,ut);j.mult(-Rt,Mt.ri),j.negate(Mt.ni);var fe=it.get();j.mult(-Ut,fe);var xe=it.get();j.mult(-Rt,xe),gt.vsub(_t,Mt.rj),Mt.rj.vadd(xe,Mt.rj),Mt.rj.vadd(fe,Mt.rj),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(At.position,Mt.ri),it.release(fe),it.release(xe),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);for(var Wt=0,me=Kt.length;Wt!==me;Wt++)it.release(Kt[Wt]);return}else for(var Wt=0;Wt!==Y.length;Wt++){var re=it.get(),$t=it.get();Bt.vmult(Yt[Y[(Wt+1)%Y.length]],re),Bt.vmult(Yt[Y[(Wt+2)%Y.length]],$t),_t.vadd(re,re),_t.vadd($t,$t);var be=pt;$t.vsub(re,be);var Vt=R;be.unit(Vt);var Te=it.get(),Ce=it.get();gt.vsub(re,Ce);var De=Ce.dot(Vt);Vt.mult(De,Te),Te.vadd(re,Te);var je=it.get();if(Te.vsub(gt,je),De>0&&De*De<be.norm2()&&je.norm2()<Rt*Rt){var Mt=this.createContactEquation(At,Nt,st,ut);Te.vsub(_t,Mt.rj),Te.vsub(gt,Mt.ni),Mt.ni.normalize(),Mt.ni.mult(Rt,Mt.ri),Mt.rj.vadd(_t,Mt.rj),Mt.rj.vsub(Nt.position,Mt.rj),Mt.ri.vadd(gt,Mt.ri),Mt.ri.vsub(At.position,Mt.ri),this.result.push(Mt),this.createFrictionEquationsFromContact(Mt,this.frictionResult);for(var Wt=0,me=Kt.length;Wt!==me;Wt++)it.release(Kt[Wt]);it.release(re),it.release($t),it.release(Te),it.release(je),it.release(Ce);return}it.release(re),it.release($t),it.release(Te),it.release(je),it.release(Ce)}for(var Wt=0,me=Kt.length;Wt!==me;Wt++)it.release(Kt[Wt])}}},new c,new c,v.prototype[s.types.PLANE|s.types.BOX]=v.prototype.planeBox=function(st,ut,gt,_t,ee,Bt,At,Nt){ut.convexPolyhedronRepresentation.material=ut.material,ut.convexPolyhedronRepresentation.collisionResponse=ut.collisionResponse,this.planeConvex(st,ut.convexPolyhedronRepresentation,gt,_t,ee,Bt,At,Nt)};var Ft=new c,le=new c,Et=new c,kt=new c;v.prototype[s.types.PLANE|s.types.CONVEXPOLYHEDRON]=v.prototype.planeConvex=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=Ft,Tt=le;Tt.set(0,0,1),ee.vmult(Tt,Tt);for(var Dt=0,Yt=Et,Rt=0;Rt!==ut.vertices.length;Rt++){it.copy(ut.vertices[Rt]),Bt.vmult(it,it),_t.vadd(it,it),it.vsub(gt,Yt);var bt=Tt.dot(Yt);if(bt<=0){var It=this.createContactEquation(At,Nt,st,ut),Qt=kt;Tt.mult(Tt.dot(Yt),Qt),it.vsub(Qt,Qt),Qt.vsub(gt,It.ri),It.ni.copy(Tt),it.vsub(_t,It.rj),It.ri.vadd(gt,It.ri),It.ri.vsub(At.position,It.ri),It.rj.vadd(_t,It.rj),It.rj.vsub(Nt.position,It.rj),this.result.push(It),Dt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(It,this.frictionResult)}}this.enableFrictionReduction&&Dt&&this.createFrictionFromAverage(Dt)};var jt=new c,Jt=new c;v.prototype[s.types.CONVEXPOLYHEDRON]=v.prototype.convexConvex=function(st,ut,gt,_t,ee,Bt,At,Nt,it,Tt,Dt,Yt){var Rt=jt;if(!(gt.distanceTo(_t)>st.boundingSphereRadius+ut.boundingSphereRadius)&&st.findSeparatingAxis(ut,gt,ee,_t,Bt,Rt,Dt,Yt)){var bt=[],It=Jt;st.clipAgainstHull(gt,ee,ut,_t,Bt,Rt,-100,100,bt);for(var Qt=0,oe=0;oe!==bt.length;oe++){var Mt=this.createContactEquation(At,Nt,st,ut,it,Tt),he=Mt.ri,w=Mt.rj;Rt.negate(Mt.ni),bt[oe].normal.negate(It),It.mult(bt[oe].depth,It),bt[oe].point.vadd(It,he),w.copy(bt[oe].point),he.vsub(gt,he),w.vsub(_t,w),he.vadd(gt,he),he.vsub(At.position,he),w.vadd(_t,w),w.vsub(Nt.position,w),this.result.push(Mt),Qt++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(Mt,this.frictionResult)}this.enableFrictionReduction&&Qt&&this.createFrictionFromAverage(Qt)}};var Xt=new c,ce=new c,ie=new c;v.prototype[s.types.PLANE|s.types.PARTICLE]=v.prototype.planeParticle=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=Xt;it.set(0,0,1),At.quaternion.vmult(it,it);var Tt=ce;_t.vsub(At.position,Tt);var Dt=it.dot(Tt);if(Dt<=0){var Yt=this.createContactEquation(Nt,At,ut,st);Yt.ni.copy(it),Yt.ni.negate(Yt.ni),Yt.ri.set(0,0,0);var Rt=ie;it.mult(it.dot(_t),Rt),_t.vsub(Rt,Rt),Yt.rj.copy(Rt),this.result.push(Yt),this.createFrictionEquationsFromContact(Yt,this.frictionResult)}};var ve=new c;v.prototype[s.types.PARTICLE|s.types.SPHERE]=v.prototype.sphereParticle=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=ve;it.set(0,0,1),_t.vsub(gt,it);var Tt=it.norm2();if(Tt<=st.radius*st.radius){var Dt=this.createContactEquation(Nt,At,ut,st);it.normalize(),Dt.rj.copy(it),Dt.rj.mult(st.radius,Dt.rj),Dt.ni.copy(it),Dt.ni.negate(Dt.ni),Dt.ri.set(0,0,0),this.result.push(Dt),this.createFrictionEquationsFromContact(Dt,this.frictionResult)}};var G=new h,Pt=new c;new c;var ot=new c,ft=new c,zt=new c;v.prototype[s.types.PARTICLE|s.types.CONVEXPOLYHEDRON]=v.prototype.convexParticle=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=-1,Tt=ot,Dt=zt,Yt=null,Rt=Pt;if(Rt.copy(_t),Rt.vsub(gt,Rt),ee.conjugate(G),G.vmult(Rt,Rt),st.pointIsInside(Rt)){st.worldVerticesNeedsUpdate&&st.computeWorldVertices(gt,ee),st.worldFaceNormalsNeedsUpdate&&st.computeWorldFaceNormals(ee);for(var bt=0,It=st.faces.length;bt!==It;bt++){var Qt=[st.worldVertices[st.faces[bt][0]]],oe=st.worldFaceNormals[bt];_t.vsub(Qt[0],ft);var Mt=-oe.dot(ft);(Yt===null||Math.abs(Mt)<Math.abs(Yt))&&(Yt=Mt,it=bt,Tt.copy(oe))}if(it!==-1){var he=this.createContactEquation(Nt,At,ut,st);Tt.mult(Yt,Dt),Dt.vadd(_t,Dt),Dt.vsub(gt,Dt),he.rj.copy(Dt),Tt.negate(he.ni),he.ri.set(0,0,0);var w=he.ri,k=he.rj;w.vadd(_t,w),w.vsub(Nt.position,w),k.vadd(gt,k),k.vsub(At.position,k),this.result.push(he),this.createFrictionEquationsFromContact(he,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}},v.prototype[s.types.BOX|s.types.HEIGHTFIELD]=v.prototype.boxHeightfield=function(st,ut,gt,_t,ee,Bt,At,Nt){st.convexPolyhedronRepresentation.material=st.material,st.convexPolyhedronRepresentation.collisionResponse=st.collisionResponse,this.convexHeightfield(st.convexPolyhedronRepresentation,ut,gt,_t,ee,Bt,At,Nt)};var Ot=new c,se=new c,Ee=[0];v.prototype[s.types.CONVEXPOLYHEDRON|s.types.HEIGHTFIELD]=v.prototype.convexHeightfield=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=ut.data,Tt=ut.elementSize,Dt=st.boundingSphereRadius,Yt=se,Rt=Ee,bt=Ot;d.pointToLocalFrame(_t,Bt,gt,bt);var It=Math.floor((bt.x-Dt)/Tt)-1,Qt=Math.ceil((bt.x+Dt)/Tt)+1,oe=Math.floor((bt.y-Dt)/Tt)-1,Mt=Math.ceil((bt.y+Dt)/Tt)+1;if(!(Qt<0||Mt<0||It>it.length||oe>it[0].length)){It<0&&(It=0),Qt<0&&(Qt=0),oe<0&&(oe=0),Mt<0&&(Mt=0),It>=it.length&&(It=it.length-1),Qt>=it.length&&(Qt=it.length-1),Mt>=it[0].length&&(Mt=it[0].length-1),oe>=it[0].length&&(oe=it[0].length-1);var he=[];ut.getRectMinMax(It,oe,Qt,Mt,he);var w=he[0],k=he[1];if(!(bt.z-Dt>k||bt.z+Dt<w))for(var Y=It;Y<Qt;Y++)for(var j=oe;j<Mt;j++)ut.getConvexTrianglePillar(Y,j,!1),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,At,Nt,null,null,Rt,null),ut.getConvexTrianglePillar(Y,j,!0),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.convexConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,At,Nt,null,null,Rt,null)}};var Re=new c,ae=new c;v.prototype[s.types.SPHERE|s.types.HEIGHTFIELD]=v.prototype.sphereHeightfield=function(st,ut,gt,_t,ee,Bt,At,Nt){var it=ut.data,Tt=st.radius,Dt=ut.elementSize,Yt=ae,Rt=Re;d.pointToLocalFrame(_t,Bt,gt,Rt);var bt=Math.floor((Rt.x-Tt)/Dt)-1,It=Math.ceil((Rt.x+Tt)/Dt)+1,Qt=Math.floor((Rt.y-Tt)/Dt)-1,oe=Math.ceil((Rt.y+Tt)/Dt)+1;if(!(It<0||oe<0||bt>it.length||oe>it[0].length)){bt<0&&(bt=0),It<0&&(It=0),Qt<0&&(Qt=0),oe<0&&(oe=0),bt>=it.length&&(bt=it.length-1),It>=it.length&&(It=it.length-1),oe>=it[0].length&&(oe=it[0].length-1),Qt>=it[0].length&&(Qt=it[0].length-1);var Mt=[];ut.getRectMinMax(bt,Qt,It,oe,Mt);var he=Mt[0],w=Mt[1];if(!(Rt.z-Tt>w||Rt.z+Tt<he))for(var k=this.result,Y=bt;Y<It;Y++)for(var j=Qt;j<oe;j++){var V=k.length;ut.getConvexTrianglePillar(Y,j,!1),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,At,Nt),ut.getConvexTrianglePillar(Y,j,!0),d.pointToWorldFrame(_t,Bt,ut.pillarOffset,Yt),gt.distanceTo(Yt)<ut.pillarConvex.boundingSphereRadius+st.boundingSphereRadius&&this.sphereConvex(st,ut.pillarConvex,gt,Yt,ee,Bt,At,Nt);var xt=k.length-V;if(xt>2)return}}}},{"../collision/AABB":3,"../collision/Ray":9,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../math/Quaternion":28,"../math/Transform":29,"../math/Vec3":30,"../shapes/ConvexPolyhedron":38,"../shapes/Shape":43,"../solver/Solver":47,"../utils/Vec3Pool":54}],56:[function(e,n,a){n.exports=_;var r=e("../shapes/Shape"),s=e("../math/Vec3"),o=e("../math/Quaternion"),c=e("../solver/GSSolver");e("../utils/Vec3Pool"),e("../equations/ContactEquation"),e("../equations/FrictionEquation");var d=e("./Narrowphase"),h=e("../utils/EventTarget"),l=e("../collision/ArrayCollisionMatrix"),u=e("../material/Material"),p=e("../material/ContactMaterial"),v=e("../objects/Body"),g=e("../utils/TupleDictionary"),m=e("../collision/RaycastResult"),f=e("../collision/AABB"),x=e("../collision/Ray"),M=e("../collision/NaiveBroadphase");function _(){h.apply(this),this.dt=-1,this.allowSleep=!1,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=0,this.quatNormalizeFast=!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new s,this.broadphase=new M,this.bodies=[],this.solver=new c,this.constraints=[],this.narrowphase=new d(this),this.collisionMatrix=new l,this.collisionMatrixPrevious=new l,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new g,this.defaultMaterial=new u("default"),this.defaultContactMaterial=new p(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null}}_.prototype=new h,new f;var A=new x;if(_.prototype.getContactMaterial=function(D,Q){return this.contactMaterialTable.get(D.id,Q.id)},_.prototype.numObjects=function(){return this.bodies.length},_.prototype.collisionMatrixTick=function(){var D=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=D,this.collisionMatrix.reset()},_.prototype.add=_.prototype.addBody=function(D){this.bodies.indexOf(D)===-1&&(D.index=this.bodies.length,this.bodies.push(D),D.world=this,D.initPosition.copy(D.position),D.initVelocity.copy(D.velocity),D.timeLastSleepy=this.time,D instanceof v&&(D.initAngularVelocity.copy(D.angularVelocity),D.initQuaternion.copy(D.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=D,this.dispatchEvent(this.addBodyEvent))},_.prototype.addConstraint=function(D){this.constraints.push(D)},_.prototype.removeConstraint=function(D){var Q=this.constraints.indexOf(D);Q!==-1&&this.constraints.splice(Q,1)},_.prototype.rayTest=function(D,Q,K){K instanceof m?this.raycastClosest(D,Q,{skipBackfaces:!0},K):this.raycastAll(D,Q,{skipBackfaces:!0},K)},_.prototype.raycastAll=function(D,Q,K,F){return K.mode=x.ALL,K.from=D,K.to=Q,K.callback=F,A.intersectWorld(this,K)},_.prototype.raycastAny=function(D,Q,K,F){return K.mode=x.ANY,K.from=D,K.to=Q,K.result=F,A.intersectWorld(this,K)},_.prototype.raycastClosest=function(D,Q,K,F){return K.mode=x.CLOSEST,K.from=D,K.to=Q,K.result=F,A.intersectWorld(this,K)},_.prototype.remove=function(D){D.world=null;var Q=this.bodies.length-1,K=this.bodies,F=K.indexOf(D);if(F!==-1){K.splice(F,1);for(var J=0;J!==K.length;J++)K[J].index=J;this.collisionMatrix.setNumObjects(Q),this.removeBodyEvent.body=D,this.dispatchEvent(this.removeBodyEvent)}},_.prototype.removeBody=_.prototype.remove,_.prototype.addMaterial=function(D){this.materials.push(D)},_.prototype.addContactMaterial=function(D){this.contactmaterials.push(D),this.contactMaterialTable.set(D.materials[0].id,D.materials[1].id,D)},typeof performance>"u"&&(performance={}),!performance.now){var P=Date.now();performance.timing&&performance.timing.navigationStart&&(P=performance.timing.navigationStart),performance.now=function(){return Date.now()-P}}var N=new s;_.prototype.step=function(D,Q,K){if(K=K||10,Q=Q||0,Q===0)this.internalStep(D),this.time+=D;else{var F=Math.floor((this.time+Q)/D)-Math.floor(this.time/D);F=Math.min(F,K);for(var J=performance.now(),z=0;z!==F&&(this.internalStep(D),!(performance.now()-J>D*1e3));z++);this.time+=Q;for(var T=this.time%D,C=T/D,H=N,Z=this.bodies,et=0;et!==Z.length;et++){var q=Z[et];q.type!==v.STATIC&&q.sleepState!==v.SLEEPING?(q.position.vsub(q.previousPosition,H),H.scale(C,H),q.position.vadd(H,q.interpolatedPosition)):(q.interpolatedPosition.copy(q.position),q.interpolatedQuaternion.copy(q.quaternion))}}};var L={type:"postStep"},S={type:"preStep"},y={type:"collide",body:null,contact:null},b=[],B=[],U=[],W=[];new s,new s,new s,new s,new s,new s,new s,new s,new s,new o;var X=new o,tt=new o,O=new s;_.prototype.internalStep=function(D){this.dt=D;var Q=this.contacts,K=U,F=W,J=this.numObjects(),z=this.bodies,T=this.solver,C=this.gravity,H=this.doProfiling,Z=this.profile,et=v.DYNAMIC,q,nt=this.constraints,mt=B;C.norm();var Lt=C.x,vt=C.y,I=C.z,dt=0;for(H&&(q=performance.now()),dt=0;dt!==J;dt++){var ht=z[dt];if(ht.type&et){var qt=ht.force,yt=ht.mass;qt.x+=yt*Lt,qt.y+=yt*vt,qt.z+=yt*I}}for(var dt=0,ne=this.subsystems.length;dt!==ne;dt++)this.subsystems[dt].update();H&&(q=performance.now()),K.length=0,F.length=0,this.broadphase.collisionPairs(this,K,F),H&&(Z.broadphase=performance.now()-q);var jt=nt.length;for(dt=0;dt!==jt;dt++){var pt=nt[dt];if(!pt.collideConnected)for(var R=K.length-1;R>=0;R-=1)(pt.bodyA===K[R]&&pt.bodyB===F[R]||pt.bodyB===K[R]&&pt.bodyA===F[R])&&(K.splice(R,1),F.splice(R,1))}this.collisionMatrixTick(),H&&(q=performance.now());var E=b,$=Q.length;for(dt=0;dt!==$;dt++)E.push(Q[dt]);Q.length=0;var lt=this.frictionEquations.length;for(dt=0;dt!==lt;dt++)mt.push(this.frictionEquations[dt]);this.frictionEquations.length=0,this.narrowphase.getContacts(K,F,this,Q,E,this.frictionEquations,mt),H&&(Z.narrowphase=performance.now()-q),H&&(q=performance.now());for(var dt=0;dt<this.frictionEquations.length;dt++)T.addEquation(this.frictionEquations[dt]);for(var ct=Q.length,at=0;at!==ct;at++){var pt=Q[at],ht=pt.bi,St=pt.bj;pt.si,pt.sj;var wt;if(ht.material&&St.material?wt=this.getContactMaterial(ht.material,St.material)||this.defaultContactMaterial:wt=this.defaultContactMaterial,wt.friction,ht.material&&St.material&&(ht.material.friction>=0&&St.material.friction>=0&&ht.material.friction*St.material.friction,ht.material.restitution>=0&&St.material.restitution>=0&&(pt.restitution=ht.material.restitution*St.material.restitution)),T.addEquation(pt),ht.allowSleep&&ht.type===v.DYNAMIC&&ht.sleepState===v.SLEEPING&&St.sleepState===v.AWAKE&&St.type!==v.STATIC){var Ft=St.velocity.norm2()+St.angularVelocity.norm2(),le=Math.pow(St.sleepSpeedLimit,2);Ft>=le*2&&(ht._wakeUpAfterNarrowphase=!0)}if(St.allowSleep&&St.type===v.DYNAMIC&&St.sleepState===v.SLEEPING&&ht.sleepState===v.AWAKE&&ht.type!==v.STATIC){var Et=ht.velocity.norm2()+ht.angularVelocity.norm2(),kt=Math.pow(ht.sleepSpeedLimit,2);Et>=kt*2&&(St._wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(ht,St,!0),this.collisionMatrixPrevious.get(ht,St)||(y.body=St,y.contact=pt,ht.dispatchEvent(y),y.body=ht,St.dispatchEvent(y))}for(H&&(Z.makeContactConstraints=performance.now()-q,q=performance.now()),dt=0;dt!==J;dt++){var ht=z[dt];ht._wakeUpAfterNarrowphase&&(ht.wakeUp(),ht._wakeUpAfterNarrowphase=!1)}var jt=nt.length;for(dt=0;dt!==jt;dt++){var pt=nt[dt];pt.update();for(var R=0,Jt=pt.equations.length;R!==Jt;R++){var Xt=pt.equations[R];T.addEquation(Xt)}}T.solve(D,this),H&&(Z.solve=performance.now()-q),T.removeAllEquations();var ce=Math.pow;for(dt=0;dt!==J;dt++){var ht=z[dt];if(ht.type&et){var ie=ce(1-ht.linearDamping,D),ve=ht.velocity;ve.mult(ie,ve);var G=ht.angularVelocity;if(G){var Pt=ce(1-ht.angularDamping,D);G.mult(Pt,G)}}}for(this.dispatchEvent(S),dt=0;dt!==J;dt++){var ht=z[dt];ht.preStep&&ht.preStep.call(ht)}H&&(q=performance.now());var ot=X,ft=tt,zt=this.stepnumber,Ot=v.DYNAMIC|v.KINEMATIC,se=zt%(this.quatNormalizeSkip+1)===0,Ee=this.quatNormalizeFast,Re=D*.5;for(r.types.PLANE,r.types.CONVEXPOLYHEDRON,dt=0;dt!==J;dt++){var ae=z[dt],st=ae.force,ut=ae.torque;if(ae.type&Ot&&ae.sleepState!==v.SLEEPING){var gt=ae.velocity,_t=ae.angularVelocity,ee=ae.position,Bt=ae.quaternion,At=ae.invMass,Nt=ae.invInertiaWorld;gt.x+=st.x*At*D,gt.y+=st.y*At*D,gt.z+=st.z*At*D,ae.angularVelocity&&(Nt.vmult(ut,O),O.mult(D,O),O.vadd(_t,_t)),ee.x+=gt.x*D,ee.y+=gt.y*D,ee.z+=gt.z*D,ae.angularVelocity&&(ot.set(_t.x,_t.y,_t.z,0),ot.mult(Bt,ft),Bt.x+=Re*ft.x,Bt.y+=Re*ft.y,Bt.z+=Re*ft.z,Bt.w+=Re*ft.w,se&&(Ee?Bt.normalizeFast():Bt.normalize())),ae.aabb&&(ae.aabbNeedsUpdate=!0),ae.updateInertiaWorld&&ae.updateInertiaWorld()}}for(this.clearForces(),this.broadphase.dirty=!0,H&&(Z.integrate=performance.now()-q),this.time+=D,this.stepnumber+=1,this.dispatchEvent(L),dt=0;dt!==J;dt++){var ht=z[dt],it=ht.postStep;it&&it.call(ht)}if(this.allowSleep)for(dt=0;dt!==J;dt++)z[dt].sleepTick(this.time)},_.prototype.clearForces=function(){for(var D=this.bodies,Q=D.length,K=0;K!==Q;K++){var F=D[K];F.force,F.torque,F.force.set(0,0,0),F.torque.set(0,0,0)}}},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/Ray":9,"../collision/RaycastResult":10,"../equations/ContactEquation":19,"../equations/FrictionEquation":21,"../material/ContactMaterial":24,"../material/Material":25,"../math/Quaternion":28,"../math/Vec3":30,"../objects/Body":31,"../shapes/Shape":43,"../solver/GSSolver":46,"../utils/EventTarget":49,"../utils/TupleDictionary":52,"../utils/Vec3Pool":54,"./Narrowphase":55}]},{},[2])(2)})})(gs)),gs.exports}var cm=lm();const $e=om(cm),Sa=new Ea,zi={};zi.createSphere=()=>{mm(Math.random()*.5,{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};Sa.add(zi,"createSphere");zi.createBox=()=>{_m(Math.random(),Math.random(),Math.random(),{x:(Math.random()-.5)*3,y:3,z:(Math.random()-.5)*3})};Sa.add(zi,"createBox");zi.reset=()=>{for(const i of Ci)i.body.removeEventListener("collide",ba),hn.removeBody(i.body),Gn.remove(i.mesh);Ci.splice(0,Ci.length)};Sa.add(zi,"reset");const ml=document.querySelector("canvas.webgl"),Gn=new Uc;new Gc;const hm=new kc,wa=hm.load(["/textures/environmentMaps/0/px.png","/textures/environmentMaps/0/nx.png","/textures/environmentMaps/0/py.png","/textures/environmentMaps/0/ny.png","/textures/environmentMaps/0/pz.png","/textures/environmentMaps/0/nz.png"]),_s=new Audio("./sounds/hit.mp3"),ba=i=>{i.contact.getImpactVelocityAlongNormal()>1.5&&(_s.volume=i.contact.getImpactVelocityAlongNormal()*.1,_s.currentTime=0,_s.play())},hn=new $e.World;hn.broadphase=new $e.SAPBroadphase(hn);hn.allowSleep=!0;hn.gravity.set(0,-9.82,0);const Ir=new $e.Material("default"),vl=new $e.ContactMaterial(Ir,Ir,{friction:.1,restitution:.7});hn.addContactMaterial(vl);hn.defaultContactMaterial=vl;const um=new $e.Plane,Br=new $e.Body;Br.mass=0;Br.addShape(um);hn.addBody(Br);Br.quaternion.setFromAxisAngle(new $e.Vec3(-1,0,0),Math.PI*.5);const Aa=new nn(new Qi(10,10),new xa({color:"#777777",metalness:.3,roughness:.4,envMap:wa,envMapIntensity:.5}));Aa.receiveShadow=!0;Aa.rotation.x=-Math.PI*.5;Gn.add(Aa);const dm=new Yc(16777215,2.1);Gn.add(dm);const Rn=new qc(16777215,.6);Rn.castShadow=!0;Rn.shadow.mapSize.set(1024,1024);Rn.shadow.camera.far=15;Rn.shadow.camera.left=-7;Rn.shadow.camera.top=7;Rn.shadow.camera.right=7;Rn.shadow.camera.bottom=-7;Rn.position.set(5,5,5);Gn.add(Rn);const dn={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{dn.width=window.innerWidth,dn.height=window.innerHeight,Fi.aspect=dn.width/dn.height,Fi.updateProjectionMatrix(),ai.setSize(dn.width,dn.height),ai.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Fi=new en(75,dn.width/dn.height,.1,100);Fi.position.set(-3,3,5);Gn.add(Fi);const gl=new Fp(Fi,ml);gl.enableDamping=!0;const ai=new Np({canvas:ml});ai.shadowMap.enabled=!0;ai.shadowMap.type=No;ai.setSize(dn.width,dn.height);ai.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ci=[],fm=new _a(1,20,20),pm=new xa({metalness:.3,roughness:.4,envMap:wa}),mm=(i,t)=>{const e=new nn(fm,pm);e.scale.set(i,i,i),e.castShadow=!0,e.position.copy(t),Gn.add(e);const n=new $e.Sphere(i),a=new $e.Body({mass:1,position:new $e.Vec3(0,3,0),shape:n,material:Ir});a.position.copy(t),a.addEventListener("collide",ba),hn.addBody(a),Ci.push({mesh:e,body:a})},vm=new Bi(1,1,1),gm=new xa({metalness:.3,roughness:.4,envMap:wa}),_m=(i,t,e,n)=>{const a=new nn(vm,gm);a.scale.set(i,t,e),a.castShadow=!0,a.position.copy(n),Gn.add(a);const r=new $e.Box(new $e.Vec3(i/2,t/2,e/2)),s=new $e.Body({mass:1,position:new $e.Vec3(0,3,0),shape:r,material:Ir});s.position.copy(n),s.addEventListener("collide",ba),hn.addBody(s),Ci.push({mesh:a,body:s})},xm=new Zc;let Do=0;const _l=()=>{const i=xm.getElapsedTime(),t=i-Do;Do=i,hn.step(1/60,t,3);for(const e of Ci)e.mesh.position.copy(e.body.position),e.mesh.quaternion.copy(e.body.quaternion);gl.update(),ai.render(Gn,Fi),window.requestAnimationFrame(_l)};_l();
//# sourceMappingURL=index-BDLSNQ6h.js.map
