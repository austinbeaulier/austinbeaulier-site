(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yr="170",Oh=0,Qr=1,Fh=2,Ec=1,Tc=2,En=3,In=0,He=1,De=2,Yn=0,Vi=1,Mo=2,tl=3,el=4,Bh=5,li=100,zh=101,Hh=102,Gh=103,Vh=104,Wh=200,Xh=201,qh=202,Yh=203,So=204,bo=205,$h=206,jh=207,Kh=208,Jh=209,Zh=210,Qh=211,tu=212,eu=213,nu=214,Eo=0,To=1,Ao=2,$i=3,Co=4,Ro=5,ko=6,Po=7,wr=0,iu=1,su=2,$n=0,au=1,ou=2,ru=3,lu=4,cu=5,hu=6,uu=7,Ac=300,ji=301,Ki=302,Io=303,Lo=304,Ia=306,Ea=1e3,fi=1001,No=1002,$e=1003,du=1004,qs=1005,pn=1006,za=1007,pi=1008,Ln=1009,Cc=1010,Rc=1011,Cs=1012,xr=1013,vi=1014,Tn=1015,es=1016,Mr=1017,Sr=1018,Ji=1020,kc=35902,Pc=1021,Ic=1022,rn=1023,Lc=1024,Nc=1025,Wi=1026,Zi=1027,Dc=1028,br=1029,Uc=1030,Er=1031,Tr=1033,va=33776,_a=33777,ya=33778,wa=33779,Do=35840,Uo=35841,Oo=35842,Fo=35843,Bo=36196,zo=37492,Ho=37496,Go=37808,Vo=37809,Wo=37810,Xo=37811,qo=37812,Yo=37813,$o=37814,jo=37815,Ko=37816,Jo=37817,Zo=37818,Qo=37819,tr=37820,er=37821,xa=36492,nr=36494,ir=36495,Oc=36283,sr=36284,ar=36285,or=36286,fu=3200,pu=3201,Fc=0,mu=1,Xn="",Ee="srgb",ns="srgb-linear",La="linear",ne="srgb",Si=7680,nl=519,gu=512,vu=513,_u=514,Bc=515,yu=516,wu=517,xu=518,Mu=519,il=35044,sl="300 es",An=2e3,Ta=2001;class is{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const xs=Math.PI/180,Rs=180/Math.PI;function ss(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]).toLowerCase()}function be(n,t,e){return Math.max(t,Math.min(e,n))}function Ar(n,t){return(n%t+t)%t}function Su(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function bu(n,t,e){return n!==t?(e-n)/(t-n):0}function Ms(n,t,e){return(1-e)*n+e*t}function Eu(n,t,e,i){return Ms(n,t,1-Math.exp(-e*i))}function Tu(n,t=1){return t-Math.abs(Ar(n,t*2)-t)}function Au(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Cu(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ru(n,t){return n+Math.floor(Math.random()*(t-n+1))}function ku(n,t){return n+Math.random()*(t-n)}function Pu(n){return n*(.5-Math.random())}function Iu(n){n!==void 0&&(al=n);let t=al+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lu(n){return n*xs}function Nu(n){return n*Rs}function Du(n){return(n&n-1)===0&&n!==0}function Uu(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ou(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fu(n,t,e,i,s){const a=Math.cos,o=Math.sin,r=a(e/2),l=o(e/2),c=a((t+i)/2),h=o((t+i)/2),u=a((t-i)/2),f=o((t-i)/2),d=a((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(r*h,l*u,l*f,r*c);break;case"YZY":n.set(l*f,r*h,l*u,r*c);break;case"ZXZ":n.set(l*u,l*f,r*h,r*c);break;case"XZX":n.set(r*h,l*g,l*d,r*c);break;case"YXY":n.set(l*d,r*h,l*g,r*c);break;case"ZYZ":n.set(l*g,l*d,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ie(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Bu={DEG2RAD:xs,RAD2DEG:Rs,generateUUID:ss,clamp:be,euclideanModulo:Ar,mapLinear:Su,inverseLerp:bu,lerp:Ms,damp:Eu,pingpong:Tu,smoothstep:Au,smootherstep:Cu,randInt:Ru,randFloat:ku,randFloatSpread:Pu,seededRandom:Iu,degToRad:Lu,radToDeg:Nu,isPowerOfTwo:Du,ceilPowerOfTwo:Uu,floorPowerOfTwo:Ou,setQuaternionFromProperEuler:Fu,normalize:Ie,denormalize:zi};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*i-o*s+t.x,this.y=a*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,i,s,a,o,r,l,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,l,c)}set(t,e,i,s,a,o,r,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=r,h[3]=e,h[4]=a,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],_=s[1],w=s[4],y=s[7],P=s[2],T=s[5],A=s[8];return a[0]=o*v+r*_+l*P,a[3]=o*m+r*w+l*T,a[6]=o*p+r*y+l*A,a[1]=c*v+h*_+u*P,a[4]=c*m+h*w+u*T,a[7]=c*p+h*y+u*A,a[2]=f*v+d*_+g*P,a[5]=f*m+d*w+g*T,a[8]=f*p+d*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*r*c-i*a*h+i*r*l+s*a*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=h*o-r*c,f=r*l-h*a,d=c*a-o*l,g=e*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*i)*v,t[2]=(r*i-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*a-r*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,o,r){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*r)+o+t,-s*c,s*l,-s*(-c*o+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Ot;function zc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zu(){const n=Aa("canvas");return n.style.display="block",n}const ol={};function ys(n){n in ol||(ol[n]=!0,console.warn(n))}function Hu(n,t,e){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:i()}}setTimeout(a,e)})}function Gu(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Vu(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(n.r=Rn(n.r),n.g=Rn(n.g),n.b=Rn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(n.r=Xi(n.r),n.g=Xi(n.g),n.b=Xi(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const rl=[.64,.33,.3,.6,.15,.06],ll=[.2126,.7152,.0722],cl=[.3127,.329],hl=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[ns]:{primaries:rl,whitePoint:cl,transfer:La,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:ll,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:rl,whitePoint:cl,transfer:ne,toXYZ:hl,fromXYZ:ul,luminanceCoefficients:ll,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});let bi;class Wu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Aa("canvas")),bi.width=t.width,bi.height=t.height;const i=bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Aa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Rn(a[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rn(e[i]/255)*255):e[i]=Rn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xu=0;class Hc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,r=s.length;o<r;o++)s[o].isDataTexture?a.push(Ga(s[o].image)):a.push(Ga(s[o]))}else a=Ga(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qu=0;class Oe extends is{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=fi,s=fi,a=pn,o=pi,r=rn,l=Ln,c=Oe.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=ss(),this.name="",this.source=new Hc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ac)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ea:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case No:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ea:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case No:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Ac;Oe.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,i=0,s=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(d+1)/2,P=(p+1)/2,T=(h+f)/4,A=(u+v)/4,k=(g+m)/4;return w>y&&w>P?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=T/i,a=A/i):y>P?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=T/s,a=k/s):P<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(P),i=A/a,s=k/a),this.set(i,s,a,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends is{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Oe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let r=0;r<o;r++)this.textures[r]=a.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Hc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Yu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Gc extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $u extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,o,r){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=a[o+0],d=a[o+1],g=a[o+2],v=a[o+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(r===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-r;const p=l*f+c*d+h*g+u*v,_=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const P=Math.sqrt(w),T=Math.atan2(P,p*_);m=Math.sin(m*T)/P,r=Math.sin(r*T)/P}const y=r*_;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+v*y,m===1-r){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,a,o){const r=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=a[o],f=a[o+1],d=a[o+2],g=a[o+3];return t[e]=r*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-r*d,t[e+2]=c*g+h*d+r*f-l*u,t[e+3]=h*g-r*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,a=t._z,o=t._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(s/2),u=r(a/2),f=l(i/2),d=l(s/2),g=l(a/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],o=e[1],r=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+r+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(a-c)*d,this._z=(o-s)*d}else if(i>r&&i>u){const d=2*Math.sqrt(1+i-r-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(a+c)/d}else if(r>u){const d=2*Math.sqrt(1+r-i-u);this._w=(a-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-r);this._w=(o-s)/d,this._x=(a+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,o=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*r+s*c-a*l,this._y=s*h+o*l+a*r-i*c,this._z=a*h+o*c+i*l-s*r,this._w=o*h-i*r-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,o=this._w;let r=o*t._w+i*t._x+s*t._y+a*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=o,this._x=i,this._y=s,this._z=a,this;const l=1-r*r;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=a*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,o=t.y,r=t.z,l=t.w,c=2*(o*s-r*i),h=2*(r*e-a*s),u=2*(a*i-o*e);return this.x=e+l*c+o*u-r*h,this.y=i+l*h+r*c-a*u,this.z=s+l*u+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,o=e.x,r=e.y,l=e.z;return this.x=s*l-a*r,this.y=a*o-i*l,this.z=i*r-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Va.copy(this).projectOnVector(t),this.sub(Va)}reflect(t){return this.sub(Va.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(be(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Va=new C,dl=new Ls;class _i{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const a=i.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,r=a.count;o<r;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(a,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(us),$s.subVectors(this.max,us),Ei.subVectors(t.a,us),Ti.subVectors(t.b,us),Ai.subVectors(t.c,us),Fn.subVectors(Ti,Ei),Bn.subVectors(Ai,Ti),Jn.subVectors(Ei,Ai);let e=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-Jn.z,Jn.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,Jn.z,0,-Jn.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-Jn.y,Jn.x,0];return!Wa(e,Ei,Ti,Ai,$s)||(e=[1,0,0,0,1,0,0,0,1],!Wa(e,Ei,Ti,Ai,$s))?!1:(js.crossVectors(Fn,Bn),e=[js.x,js.y,js.z],Wa(e,Ei,Ti,Ai,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new C,new C,new C,new C,new C,new C,new C,new C],en=new C,Ys=new _i,Ei=new C,Ti=new C,Ai=new C,Fn=new C,Bn=new C,Jn=new C,us=new C,$s=new C,js=new C,Zn=new C;function Wa(n,t,e,i,s){for(let a=0,o=n.length-3;a<=o;a+=3){Zn.fromArray(n,a);const r=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),l=t.dot(Zn),c=e.dot(Zn),h=i.dot(Zn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const ju=new _i,ds=new C,Xa=new C;class Ns{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ju.setFromPoints(t).getCenter(i);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);const e=ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(Xa)),this.expandByPoint(ds.copy(t.center).sub(Xa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new C,qa=new C,Ks=new C,zn=new C,Ya=new C,Js=new C,$a=new C;class Vc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){qa.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(qa);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),r=zn.dot(this.direction),l=-zn.dot(Ks),c=zn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-r,f=o*r-l,g=a*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*r)+f*(o*u+f+2*l)+c}else f=a,u=Math.max(0,-(o*f+r)),d=-u*u+f*(f+2*l)+c;else f=-a,u=Math.max(0,-(o*f+r)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*a+r)),f=u>0?-a:Math.min(Math.max(-a,-l),a),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-a,-l),a),d=f*(f+2*l)+c):(u=Math.max(0,-(o*a+r)),f=u>0?a:Math.min(Math.max(-a,-l),a),d=-u*u+f*(f+2*l)+c);else f=o>0?-a:a,u=Math.max(0,-(o*f+r)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(qa).addScaledVector(Ks,f),d}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const i=xn.dot(this.direction),s=xn.dot(xn)-i*i,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,o,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(a=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(a=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||a>s||((a>i||isNaN(i))&&(i=a),(o<s||isNaN(s))&&(s=o),u>=0?(r=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(r=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||r>s)||((r>i||i!==i)&&(i=r),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,i,s,a){Ya.subVectors(e,t),Js.subVectors(i,t),$a.crossVectors(Ya,Js);let o=this.direction.dot($a),r;if(o>0){if(s)return null;r=1}else if(o<0)r=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=r*this.direction.dot(Js.crossVectors(zn,Js));if(l<0)return null;const c=r*this.direction.dot(Ya.cross(zn));if(c<0||l+c>o)return null;const h=-r*zn.dot($a);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,i,s,a,o,r,l,c,h,u,f,d,g,v,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,a,o,r,l,c,h,u,f,d,g,v,m)}set(t,e,i,s,a,o,r,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=a,p[5]=o,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ci.setFromMatrixColumn(t,0).length(),a=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const f=o*h,d=o*u,g=r*h,v=r*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-r*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*r,e[4]=g*r-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-r,e[2]=d*r-g,e[6]=v+f*r,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*r,e[4]=-o*u,e[8]=g+d*r,e[1]=d+g*r,e[5]=o*h,e[9]=v-f*r,e[2]=-o*c,e[6]=r,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=r*h,v=r*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=r*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=r*l,v=r*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-r*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=r*l,v=r*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=r*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ku,t,Ju)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Hn.crossVectors(i,We),Hn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Hn.crossVectors(i,We)),Hn.normalize(),Zs.crossVectors(We,Hn),s[0]=Hn.x,s[4]=Zs.x,s[8]=We.x,s[1]=Hn.y,s[5]=Zs.y,s[9]=We.y,s[2]=Hn.z,s[6]=Zs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],w=i[7],y=i[11],P=i[15],T=s[0],A=s[4],k=s[8],b=s[12],M=s[1],R=s[5],F=s[9],U=s[13],V=s[2],$=s[6],W=s[10],X=s[14],O=s[3],tt=s[7],it=s[11],_t=s[15];return a[0]=o*T+r*M+l*V+c*O,a[4]=o*A+r*R+l*$+c*tt,a[8]=o*k+r*F+l*W+c*it,a[12]=o*b+r*U+l*X+c*_t,a[1]=h*T+u*M+f*V+d*O,a[5]=h*A+u*R+f*$+d*tt,a[9]=h*k+u*F+f*W+d*it,a[13]=h*b+u*U+f*X+d*_t,a[2]=g*T+v*M+m*V+p*O,a[6]=g*A+v*R+m*$+p*tt,a[10]=g*k+v*F+m*W+p*it,a[14]=g*b+v*U+m*X+p*_t,a[3]=_*T+w*M+y*V+P*O,a[7]=_*A+w*R+y*$+P*tt,a[11]=_*k+w*F+y*W+P*it,a[15]=_*b+w*U+y*X+P*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],o=t[1],r=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+a*l*u-s*c*u-a*r*f+i*c*f+s*r*d-i*l*d)+v*(+e*l*d-e*c*f+a*o*f-s*o*d+s*c*h-a*l*h)+m*(+e*c*u-e*r*d-a*o*u+i*o*d+a*r*h-i*c*h)+p*(-s*r*h-e*l*u+e*r*f+s*o*u-i*o*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],o=t[4],r=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*c-v*f*c+v*l*d-r*m*d-u*l*p+r*f*p,w=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,y=h*v*c-g*u*c+g*r*d-o*v*d-h*r*p+o*u*p,P=g*u*l-h*v*l-g*r*f+o*v*f+h*r*m-o*u*m,T=e*_+i*w+s*y+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(v*f*a-u*m*a-v*s*d+i*m*d+u*s*p-i*f*p)*A,t[2]=(r*m*a-v*l*a+v*s*c-i*m*c-r*s*p+i*l*p)*A,t[3]=(u*l*a-r*f*a-u*s*c+i*f*c+r*s*d-i*l*d)*A,t[4]=w*A,t[5]=(h*m*a-g*f*a+g*s*d-e*m*d-h*s*p+e*f*p)*A,t[6]=(g*l*a-o*m*a-g*s*c+e*m*c+o*s*p-e*l*p)*A,t[7]=(o*f*a-h*l*a+h*s*c-e*f*c-o*s*d+e*l*d)*A,t[8]=y*A,t[9]=(g*u*a-h*v*a-g*i*d+e*v*d+h*i*p-e*u*p)*A,t[10]=(o*v*a-g*r*a+g*i*c-e*v*c-o*i*p+e*r*p)*A,t[11]=(h*r*a-o*u*a-h*i*c+e*u*c+o*i*d-e*r*d)*A,t[12]=P*A,t[13]=(h*v*s-g*u*s+g*i*f-e*v*f-h*i*m+e*u*m)*A,t[14]=(g*r*s-o*v*s-g*i*l+e*v*l+o*i*m-e*r*m)*A,t[15]=(o*u*s-h*r*s+h*i*l-e*u*l-o*i*f+e*r*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,o=t.x,r=t.y,l=t.z,c=a*o,h=a*r;return this.set(c*o+i,c*r-s*l,c*l+s*r,0,c*r+s*l,h*r+i,h*l-s*o,0,c*l-s*r,h*l+s*o,a*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,o){return this.set(1,i,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,o=e._y,r=e._z,l=e._w,c=a+a,h=o+o,u=r+r,f=a*c,d=a*h,g=a*u,v=o*h,m=o*u,p=r*u,_=l*c,w=l*h,y=l*u,P=i.x,T=i.y,A=i.z;return s[0]=(1-(v+p))*P,s[1]=(d+y)*P,s[2]=(g-w)*P,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+w)*A,s[9]=(m-_)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=Ci.set(s[0],s[1],s[2]).length();const o=Ci.set(s[4],s[5],s[6]).length(),r=Ci.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/a,h=1/o,u=1/r;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),i.x=a,i.y=o,i.z=r,this}makePerspective(t,e,i,s,a,o,r=An){const l=this.elements,c=2*a/(e-t),h=2*a/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,g;if(r===An)d=-(o+a)/(o-a),g=-2*o*a/(o-a);else if(r===Ta)d=-o/(o-a),g=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,o,r=An){const l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(o-a),f=(e+t)*c,d=(i+s)*h;let g,v;if(r===An)g=(o+a)*u,v=-2*u;else if(r===Ta)g=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ci=new C,nn=new ae,Ku=new C(0,0,0),Ju=new C(1,1,1),Hn=new C,Zs=new C,We=new C,fl=new ae,pl=new Ls;class mn{constructor(t=0,e=0,i=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],o=s[4],r=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(be(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(r,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,a)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Cr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zu=0;const ml=new C,Ri=new Ls,Mn=new ae,Qs=new C,fs=new C,Qu=new C,td=new Ls,gl=new C(1,0,0),vl=new C(0,1,0),_l=new C(0,0,1),yl={type:"added"},ed={type:"removed"},ki={type:"childadded",child:null},ja={type:"childremoved",child:null};class Ae extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new C,e=new mn,i=new Ls,s=new C(1,1,1);function a(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ot}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qs.copy(t):Qs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(fs,Qs,this.up):Mn.lookAt(Qs,fs,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ri.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yl),ki.child=t,this.dispatchEvent(ki),ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ed),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yl),ki.child=t,this.dispatchEvent(ki),ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,t,Qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(t.shapes,u)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(a(t.materials,this.material[l]));s.material=r}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let r=0;r<this.children.length;r++)s.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];s.animations.push(a(t.animations,l))}}if(e){const r=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new C(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new C,Sn=new C,Ka=new C,bn=new C,Pi=new C,Ii=new C,wl=new C,Ja=new C,Za=new C,Qa=new C,to=new ie,eo=new ie,no=new ie;class on{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){sn.subVectors(s,e),Sn.subVectors(i,e),Ka.subVectors(t,e);const o=sn.dot(sn),r=sn.dot(Sn),l=sn.dot(Ka),c=Sn.dot(Sn),h=Sn.dot(Ka),u=o*c-r*r;if(u===0)return a.set(0,0,0),null;const f=1/u,d=(c*l-r*h)*f,g=(o*h-r*l)*f;return a.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(t,e,i,s,a,o,r,l){return this.getBarycoord(t,e,i,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,bn.x),l.addScaledVector(o,bn.y),l.addScaledVector(r,bn.z),l)}static getInterpolatedAttribute(t,e,i,s,a,o){return to.setScalar(0),eo.setScalar(0),no.setScalar(0),to.fromBufferAttribute(t,e),eo.fromBufferAttribute(t,i),no.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(to,a.x),o.addScaledVector(eo,a.y),o.addScaledVector(no,a.z),o}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),Sn.subVectors(t,e),sn.cross(Sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,a){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let o,r;Pi.subVectors(s,i),Ii.subVectors(a,i),Ja.subVectors(t,i);const l=Pi.dot(Ja),c=Ii.dot(Ja);if(l<=0&&c<=0)return e.copy(i);Za.subVectors(t,s);const h=Pi.dot(Za),u=Ii.dot(Za);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Pi,o);Qa.subVectors(t,a);const d=Pi.dot(Qa),g=Ii.dot(Qa);if(g>=0&&d<=g)return e.copy(a);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(i).addScaledVector(Ii,r);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return wl.subVectors(a,s),r=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(wl,r);const p=1/(m+v+f);return o=v*p,r=f*p,e.copy(i).addScaledVector(Pi,o).addScaledVector(Ii,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},ta={h:0,s:0,l:0};function io(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class It{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=Ar(t,1),e=be(e,0,1),i=be(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,o=2*i-a;this.r=io(o,a,t+1/3),this.g=io(o,a,t),this.b=io(o,a,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ee){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],r=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const i=Wc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return jt.fromWorkingColorSpace(ke.copy(this),t),Math.round(be(ke.r*255,0,255))*65536+Math.round(be(ke.g*255,0,255))*256+Math.round(be(ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,a=ke.b,o=Math.max(i,s,a),r=Math.min(i,s,a);let l,c;const h=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=h<=.5?u/(o+r):u/(2-o-r),o){case i:l=(s-a)/u+(s<a?6:0);break;case s:l=(a-i)/u+2;break;case a:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ee){jt.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(ta);const i=Ms(Gn.h,ta.h,e),s=Ms(Gn.s,ta.s,e),a=Ms(Gn.l,ta.l,e);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*i+a[6]*s,this.g=a[1]*e+a[4]*i+a[7]*s,this.b=a[2]*e+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new It;It.NAMES=Wc;let nd=0;class Ds extends is{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ss(),this.name="",this.blending=Vi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=bo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Si,this.stencilZFail=Si,this.stencilZPass=Si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(i.blending=this.blending),this.side!==In&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==So&&(i.blendSrc=this.blendSrc),this.blendDst!==bo&&(i.blendDst=this.blendDst),this.blendEquation!==li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Si&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Si&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Si&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const o=[];for(const r in a){const l=a[r];delete l.metadata,o.push(l)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ge extends Ds{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new C,ea=new pt;class ze{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=il,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=zi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ie(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),i=Ie(i,this.array),s=Ie(s,this.array),a=Ie(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class Xc extends ze{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class qc extends ze{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class fe extends ze{constructor(t,e,i){super(new Float32Array(t),e,i)}}let id=0;const Je=new ae,so=new Ae,Li=new C,Xe=new _i,ps=new _i,Se=new C;class Ge extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?qc:Xc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,i){return Je.makeTranslation(t,e,i),this.applyMatrix4(Je),this}scale(t,e,i){return Je.makeScale(t,e,i),this.applyMatrix4(Je),this}lookAt(t){return so.lookAt(t),so.updateMatrix(),this.applyMatrix4(so.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(i,3))}else{for(let i=0,s=e.count;i<s;i++){const a=t[i];e.setXYZ(i,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Xe.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const r=e[a];ps.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(Xe.min,ps.min),Xe.expandByPoint(Se),Se.addVectors(Xe.max,ps.max),Xe.expandByPoint(Se)):(Xe.expandByPoint(ps.min),Xe.expandByPoint(ps.max))}Xe.getCenter(i);let s=0;for(let a=0,o=t.count;a<o;a++)Se.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(Se));if(e)for(let a=0,o=e.length;a<o;a++){const r=e[a],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Se.fromBufferAttribute(r,c),l&&(Li.fromBufferAttribute(t,c),Se.add(Li)),s=Math.max(s,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),r=[],l=[];for(let k=0;k<i.count;k++)r[k]=new C,l[k]=new C;const c=new C,h=new C,u=new C,f=new pt,d=new pt,g=new pt,v=new C,m=new C;function p(k,b,M){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),f.fromBufferAttribute(a,k),d.fromBufferAttribute(a,b),g.fromBufferAttribute(a,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),r[k].add(v),r[b].add(v),r[M].add(v),l[k].add(m),l[b].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let k=0,b=_.length;k<b;++k){const M=_[k],R=M.start,F=M.count;for(let U=R,V=R+F;U<V;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const w=new C,y=new C,P=new C,T=new C;function A(k){P.fromBufferAttribute(s,k),T.copy(P);const b=r[k];w.copy(b),w.sub(P.multiplyScalar(P.dot(b))).normalize(),y.crossVectors(T,b);const R=y.dot(l[k])<0?-1:1;o.setXYZW(k,w.x,w.y,w.z,R)}for(let k=0,b=_.length;k<b;++k){const M=_[k],R=M.start,F=M.count;for(let U=R,V=R+F;U<V;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new C,a=new C,o=new C,r=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),a.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(r,l){const c=r.array,h=r.itemSize,u=r.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?d=l[v]*r.data.stride+r.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ge,i=this.index.array,s=this.attributes;for(const r in s){const l=s[r],c=t(l,i);e.setAttribute(r,c)}const a=this.morphAttributes;for(const r in a){const l=[],c=a[r];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new ae,Qn=new Vc,na=new Ns,Ml=new C,ia=new C,sa=new C,aa=new C,ao=new C,oa=new C,Sl=new C,ra=new C;class lt extends Ae{constructor(t=new Ge,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const r=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=a}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const r=this.morphTargetInfluences;if(a&&r){oa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=r[l],u=a[l];h!==0&&(ao.fromBufferAttribute(u,t),o?oa.addScaledVector(ao,h):oa.addScaledVector(ao.sub(e),h))}e.add(oa)}return e}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(a),Qn.copy(t.ray).recast(t.near),!(na.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(na,Ml)===null||Qn.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(xl.copy(a).invert(),Qn.copy(t.ray).applyMatrix4(xl),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let s;const a=this.geometry,o=this.material,r=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,f=a.groups,d=a.drawRange;if(r!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(r.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,P=w;y<P;y+=3){const T=r.getX(y),A=r.getX(y+1),k=r.getX(y+2);s=la(this,p,t,i,c,h,u,T,A,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(r.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=r.getX(m),w=r.getX(m+1),y=r.getX(m+2);s=la(this,o,t,i,c,h,u,_,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=_,P=w;y<P;y+=3){const T=y,A=y+1,k=y+2;s=la(this,p,t,i,c,h,u,T,A,k),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=m,w=m+1,y=m+2;s=la(this,o,t,i,c,h,u,_,w,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function sd(n,t,e,i,s,a,o,r){let l;if(t.side===He?l=i.intersectTriangle(o,a,s,!0,r):l=i.intersectTriangle(s,a,o,t.side===In,r),l===null)return null;ra.copy(r),ra.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ra);return c<e.near||c>e.far?null:{distance:c,point:ra.clone(),object:n}}function la(n,t,e,i,s,a,o,r,l,c){n.getVertexPosition(r,ia),n.getVertexPosition(l,sa),n.getVertexPosition(c,aa);const h=sd(n,t,e,i,ia,sa,aa,Sl);if(h){const u=new C;on.getBarycoord(Sl,ia,sa,aa,u),s&&(h.uv=on.getInterpolatedAttribute(s,r,l,c,u,new pt)),a&&(h.uv1=on.getInterpolatedAttribute(a,r,l,c,u,new pt)),o&&(h.normal=on.getInterpolatedAttribute(o,r,l,c,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new C,materialIndex:0};on.getNormal(ia,sa,aa,f.normal),h.face=f,h.barycoord=u}return h}class Pe extends Ge{constructor(t=1,e=1,i=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:o};const r=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,a,0),g("z","y","x",1,-1,i,e,-t,o,a,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,a,4),g("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(v,m,p,_,w,y,P,T,A,k,b){const M=y/A,R=P/k,F=y/2,U=P/2,V=T/2,$=A+1,W=k+1;let X=0,O=0;const tt=new C;for(let it=0;it<W;it++){const _t=it*R-U;for(let Ct=0;Ct<$;Ct++){const Zt=Ct*M-F;tt[v]=Zt*_,tt[m]=_t*w,tt[p]=V,c.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[p]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(Ct/A),u.push(1-it/k),X+=1}}for(let it=0;it<k;it++)for(let _t=0;_t<A;_t++){const Ct=f+_t+$*it,Zt=f+_t+$*(it+1),G=f+(_t+1)+$*(it+1),Z=f+(_t+1)+$*it;l.push(Ct,Zt,Z),l.push(Zt,G,Z),O+=6}r.addGroup(d,O,b),d+=O,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Le(n){const t={};for(let e=0;e<n.length;e++){const i=Qi(n[e]);for(const s in i)t[s]=i[s]}return t}function ad(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Yc(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const od={clone:Qi,merge:Le};var rd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Ds{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rd,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class $c extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new C,bl=new pt,El=new pt;class qe extends $c{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vn.x,Vn.y).multiplyScalar(-t/Vn.z)}getViewSize(t,e){return this.getViewBounds(t,bl,El),e.subVectors(El,bl)}setViewOffset(t,e,i,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const r=this.filmOffset;r!==0&&(a+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Di=1;class cd extends Ae{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(Ni,Di,t,e);s.layers=this.layers,this.add(s);const a=new qe(Ni,Di,t,e);a.layers=this.layers,this.add(a);const o=new qe(Ni,Di,t,e);o.layers=this.layers,this.add(o);const r=new qe(Ni,Di,t,e);r.layers=this.layers,this.add(r);const l=new qe(Ni,Di,t,e);l.layers=this.layers,this.add(l);const c=new qe(Ni,Di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,a,o,r,l]=e;for(const c of e)this.remove(c);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,r,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,a),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,r),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jc extends Oe{constructor(t,e,i,s,a,o,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ji,super(t,e,i,s,a,o,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new jc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pe(5,5,5),a=new Nn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Yn});a.uniforms.tEquirect.value=e;const o=new lt(s,a),r=e.minFilter;return e.minFilter===pi&&(e.minFilter=pn),new cd(1,10,this).update(t,o),e.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(a)}}const oo=new C,ud=new C,dd=new Ot;class oi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=oo.subVectors(i,e).cross(ud.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(oo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||dd.getNormalMatrix(t),s=this.coplanarPoint(oo).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Ns,ca=new C;class Us{constructor(t=new oi,e=new oi,i=new oi,s=new oi,a=new oi,o=new oi){this.planes=[t,e,i,s,a,o]}set(t,e,i,s,a,o){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(i),r[3].copy(s),r[4].copy(a),r[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An){const i=this.planes,s=t.elements,a=s[0],o=s[1],r=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],_=s[13],w=s[14],y=s[15];if(i[0].setComponents(l-a,f-c,m-d,y-p).normalize(),i[1].setComponents(l+a,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+h,m+g,y+_).normalize(),i[3].setComponents(l-o,f-h,m-g,y-_).normalize(),i[4].setComponents(l-r,f-u,m-v,y-w).normalize(),e===An)i[5].setComponents(l+r,f+u,m+v,y+w).normalize();else if(e===Ta)i[5].setComponents(r,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let n=null,t=!1,e=null,i=null;function s(a,o){e(a,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){n=a}}}function fd(n){const t=new WeakMap;function e(r,l){const c=r.array,h=r.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),r.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,r),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function a(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(n.deleteBuffer(l.buffer),t.delete(r))}function o(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=t.get(r);(!h||h.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:s,remove:a,update:o}}class we extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,o=e/2,r=Math.floor(i),l=Math.floor(s),c=r+1,h=l+1,u=t/r,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*f-o;for(let w=0;w<c;w++){const y=w*u-a;g.push(y,-_,0),v.push(0,0,1),m.push(w/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<r;_++){const w=_+c*p,y=_+c*(p+1),P=_+1+c*(p+1),T=_+1+c*p;d.push(w,y,T),d.push(y,P,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new we(t.width,t.height,t.widthSegments,t.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wd=`#ifdef USE_AOMAP
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
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`#ifdef USE_BATCHING
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
#endif`,Sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ed=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Od=`#define PI 3.141592653589793
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
} // validated`,Fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ef=`#ifdef USE_GRADIENTMAP
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
}`,nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,of=`uniform bool receiveShadow;
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
#endif`,rf=`#ifdef USE_ENVMAP
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
#endif`,lf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,df=`PhysicalMaterial material;
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
#endif`,ff=`struct PhysicalMaterial {
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
}`,pf=`
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
#endif`,mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bf=`#if defined( USE_POINTS_UV )
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
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
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
#endif`,Pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,Ff=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qf=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,xp=`#if DEPTH_PACKING == 3200
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
}`,Mp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,kp=`#define LAMBERT
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
}`,Pp=`#define LAMBERT
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
}`,Ip=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Np=`#define NORMAL
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
}`,Dp=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,Fp=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,Xp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:_d,alphatest_pars_fragment:yd,aomap_fragment:wd,aomap_pars_fragment:xd,batching_pars_vertex:Md,batching_vertex:Sd,begin_vertex:bd,beginnormal_vertex:Ed,bsdfs:Td,iridescence_fragment:Ad,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:kd,clipping_planes_pars_vertex:Pd,clipping_planes_vertex:Id,color_fragment:Ld,color_pars_fragment:Nd,color_pars_vertex:Dd,color_vertex:Ud,common:Od,cube_uv_reflection_fragment:Fd,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:Hd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:$d,envmap_pars_vertex:jd,envmap_physical_pars_fragment:rf,envmap_vertex:Kd,fog_vertex:Jd,fog_pars_vertex:Zd,fog_fragment:Qd,fog_pars_fragment:tf,gradientmap_pars_fragment:ef,lightmap_pars_fragment:nf,lights_lambert_fragment:sf,lights_lambert_pars_fragment:af,lights_pars_begin:of,lights_toon_fragment:lf,lights_toon_pars_fragment:cf,lights_phong_fragment:hf,lights_phong_pars_fragment:uf,lights_physical_fragment:df,lights_physical_pars_fragment:ff,lights_fragment_begin:pf,lights_fragment_maps:mf,lights_fragment_end:gf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:yf,logdepthbuf_vertex:wf,map_fragment:xf,map_pars_fragment:Mf,map_particle_fragment:Sf,map_particle_pars_fragment:bf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Tf,morphinstance_vertex:Af,morphcolor_vertex:Cf,morphnormal_vertex:Rf,morphtarget_pars_vertex:kf,morphtarget_vertex:Pf,normal_fragment_begin:If,normal_fragment_maps:Lf,normal_pars_fragment:Nf,normal_pars_vertex:Df,normal_vertex:Uf,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:Ff,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:zf,iridescence_pars_fragment:Hf,opaque_fragment:Gf,packing:Vf,premultiplied_alpha_fragment:Wf,project_vertex:Xf,dithering_fragment:qf,dithering_pars_fragment:Yf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Jf,shadowmap_vertex:Zf,shadowmask_pars_fragment:Qf,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:rp,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:vp,cube_vert:_p,cube_frag:yp,depth_vert:wp,depth_frag:xp,distanceRGBA_vert:Mp,distanceRGBA_frag:Sp,equirect_vert:bp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:Ap,meshbasic_vert:Cp,meshbasic_frag:Rp,meshlambert_vert:kp,meshlambert_frag:Pp,meshmatcap_vert:Ip,meshmatcap_frag:Lp,meshnormal_vert:Np,meshnormal_frag:Dp,meshphong_vert:Up,meshphong_frag:Op,meshphysical_vert:Fp,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Hp,points_vert:Gp,points_frag:Vp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:Yp},ot={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},fn={basic:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Le([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Le([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Le([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Le([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Le([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Le([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Le([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Le([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Le([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Le([ot.lights,ot.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};fn.physical={uniforms:Le([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ha={r:0,b:0,g:0},ei=new mn,$p=new ae;function jp(n,t,e,i,s,a,o){const r=new It(0);let l=a===!0?0:1,c,h,u=null,f=0,d=null;function g(_){let w=_.isScene===!0?_.background:null;return w&&w.isTexture&&(w=(_.backgroundBlurriness>0?e:t).get(w)),w}function v(_){let w=!1;const y=g(_);y===null?p(r,l):y&&y.isColor&&(p(y,1),w=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(_,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Ia)?(h===void 0&&(h=new lt(new Pe(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Qi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ei.copy(w.backgroundRotation),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(ei)),h.material.toneMapped=jt.getTransfer(y.colorSpace)!==ne,(u!==y||f!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new lt(new we(2,2),new Nn({name:"BackgroundMaterial",uniforms:Qi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=jt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,w){_.getRGB(ha,Yc(n)),i.buffers.color.setClear(ha.r,ha.g,ha.b,w,o)}return{getClearColor:function(){return r},setClearColor:function(_,w=1){r.set(_),l=w,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(r,l)},render:v,addToRenderList:m}}function Kp(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,o=!1;function r(M,R,F,U,V){let $=!1;const W=u(U,F,R);a!==W&&(a=W,c(a.object)),$=d(M,U,F,V),$&&g(M,U,F,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(M,R,F,U),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,R,F){const U=F.wireframe===!0;let V=i[M.id];V===void 0&&(V={},i[M.id]=V);let $=V[R.id];$===void 0&&($={},V[R.id]=$);let W=$[U];return W===void 0&&(W=f(l()),$[U]=W),W}function f(M){const R=[],F=[],U=[];for(let V=0;V<e;V++)R[V]=0,F[V]=0,U[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:U,object:M,attributes:{},index:null}}function d(M,R,F,U){const V=a.attributes,$=R.attributes;let W=0;const X=F.getAttributes();for(const O in X)if(X[O].location>=0){const it=V[O];let _t=$[O];if(_t===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),it===void 0||it.attribute!==_t||_t&&it.data!==_t.data)return!0;W++}return a.attributesNum!==W||a.index!==U}function g(M,R,F,U){const V={},$=R.attributes;let W=0;const X=F.getAttributes();for(const O in X)if(X[O].location>=0){let it=$[O];it===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));const _t={};_t.attribute=it,it&&it.data&&(_t.data=it.data),V[O]=_t,W++}a.attributes=V,a.attributesNum=W,a.index=U}function v(){const M=a.newAttributes;for(let R=0,F=M.length;R<F;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const F=a.newAttributes,U=a.enabledAttributes,V=a.attributeDivisors;F[M]=1,U[M]===0&&(n.enableVertexAttribArray(M),U[M]=1),V[M]!==R&&(n.vertexAttribDivisor(M,R),V[M]=R)}function _(){const M=a.newAttributes,R=a.enabledAttributes;for(let F=0,U=R.length;F<U;F++)R[F]!==M[F]&&(n.disableVertexAttribArray(F),R[F]=0)}function w(M,R,F,U,V,$,W){W===!0?n.vertexAttribIPointer(M,R,F,V,$):n.vertexAttribPointer(M,R,F,U,V,$)}function y(M,R,F,U){v();const V=U.attributes,$=F.getAttributes(),W=R.defaultAttributeValues;for(const X in $){const O=$[X];if(O.location>=0){let tt=V[X];if(tt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const it=tt.normalized,_t=tt.itemSize,Ct=t.get(tt);if(Ct===void 0)continue;const Zt=Ct.buffer,G=Ct.type,Z=Ct.bytesPerElement,yt=G===n.INT||G===n.UNSIGNED_INT||tt.gpuType===xr;if(tt.isInterleavedBufferAttribute){const at=tt.data,kt=at.stride,Nt=tt.offset;if(at.isInstancedInterleavedBuffer){for(let zt=0;zt<O.locationSize;zt++)p(O.location+zt,at.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let zt=0;zt<O.locationSize;zt++)m(O.location+zt);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let zt=0;zt<O.locationSize;zt++)w(O.location+zt,_t/O.locationSize,G,it,kt*Z,(Nt+_t/O.locationSize*zt)*Z,yt)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<O.locationSize;at++)p(O.location+at,tt.meshPerAttribute);M.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<O.locationSize;at++)m(O.location+at);n.bindBuffer(n.ARRAY_BUFFER,Zt);for(let at=0;at<O.locationSize;at++)w(O.location+at,_t/O.locationSize,G,it,_t*Z,_t/O.locationSize*at*Z,yt)}}else if(W!==void 0){const it=W[X];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(O.location,it);break;case 3:n.vertexAttrib3fv(O.location,it);break;case 4:n.vertexAttrib4fv(O.location,it);break;default:n.vertexAttrib1fv(O.location,it)}}}}_()}function P(){k();for(const M in i){const R=i[M];for(const F in R){const U=R[F];for(const V in U)h(U[V].object),delete U[V];delete R[F]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const F in R){const U=R[F];for(const V in U)h(U[V].object),delete U[V];delete R[F]}delete i[M.id]}function A(M){for(const R in i){const F=i[R];if(F[M.id]===void 0)continue;const U=F[M.id];for(const V in U)h(U[V].object),delete U[V];delete F[M.id]}}function k(){b(),o=!0,a!==s&&(a=s,c(a.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:r,reset:k,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Jp(n,t,e){let i;function s(c){i=c}function a(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function r(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Zp(n,t,e,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==rn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const k=A===es&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!k)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:P,maxSamples:T}}function Qp(n){const t=this;let e=null,i=0,s=!1,a=!1;const o=new oi,r=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const _=a?0:i,w=_*4;let y=p.clippingState||null;l.value=y,y=h(g,f,w,d);for(let P=0;P!==w;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,_=f.matrixWorldInverse;r.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=d;w!==v;++w,y+=4)o.copy(u[w]).applyMatrix4(_,r),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function tm(n){let t=new WeakMap;function e(o,r){return r===Io?o.mapping=ji:r===Lo&&(o.mapping=Ki),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===Io||r===Lo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hd(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const r=o.target;r.removeEventListener("dispose",s);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Rr extends $c{constructor(t=-1,e=1,i=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,o=i+t,r=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gi=4,Tl=[.125,.215,.35,.446,.526,.582],ci=20,ro=new Rr,Al=new It;let lo=null,co=0,ho=0,uo=!1;const ri=(1+Math.sqrt(5))/2,Ui=1/ri,Cl=[new C(-ri,Ui,0),new C(ri,Ui,0),new C(-Ui,0,ri),new C(Ui,0,ri),new C(0,ri,-Ui),new C(0,ri,Ui),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(lo,co,ho),this._renderer.xr.enabled=uo,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),lo=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),ho=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:es,format:rn,colorSpace:ns,depthBuffer:!1},s=kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(a)),this._blurMaterial=nm(a,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,ro)}_sceneToCubeUV(t,e,i,s){const r=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Al),h.toneMapping=$n,h.autoClear=!1;const d=new ge({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new lt(new Pe,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Al),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):_===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const w=this._cubeSize;ua(s,_*w,p>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ji||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pl());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],a),r=a.uniforms;r.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ro)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),r=Cl[(s-a-1)%Cl.length];this._blur(t,a-1,a,o,r)}e.autoClear=i}_blur(t,e,i,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",a),this._halfBlur(o,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new lt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*ci-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):ci;m>ci&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let _=0;for(let A=0;A<ci;++A){const k=A/v,b=Math.exp(-k*k/2);p.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const y=this._sizeLods[s],P=3*y*(s>w-Gi?s-w+Gi:0),T=4*(this._cubeSize-y);ua(e,P,T,3*y,2*y),l.setRenderTarget(e),l.render(u,ro)}}function em(n){const t=[],e=[],i=[];let s=n;const a=n-Gi+1+Tl.length;for(let o=0;o<a;o++){const r=Math.pow(2,s);e.push(r);let l=1/r;o>n-Gi?l=Tl[o-n+Gi-1]:o===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*d),w=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,k=T>2?0:-1,b=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];_.set(b,v*g*T),w.set(f,m*g*T);const M=[T,T,T,T,T,T];y.set(M,p*g*T)}const P=new Ge;P.setAttribute("position",new ze(_,v)),P.setAttribute("uv",new ze(w,m)),P.setAttribute("faceIndex",new ze(y,p)),t.push(P),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kl(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ua(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nm(n,t,e){const i=new Float32Array(ci),s=new C(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Pl(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Il(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function im(n){let t=new WeakMap,e=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===Io||l===Lo,h=l===ji||l===Ki;if(c||h){let u=t.get(r);const f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return e===null&&(e=new Rl(n)),u=c?e.fromEquirectangular(r,u):e.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),u.texture;if(u!==void 0)return u.texture;{const d=r.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Rl(n)),u=c?e.fromEquirectangular(r):e.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,t.set(r,u),r.addEventListener("dispose",a),u.texture):null}}}return r}function s(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function a(r){const l=r.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function sm(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ys("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function am(n,t,e,i){const s={},a=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=a.get(f);d&&(t.remove(d),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function r(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let w=0,y=_.length;w<y;w+=3){const P=_[w+0],T=_[w+1],A=_[w+2];f.push(P,T,T,A,A,P)}}else if(g!==void 0){const _=g.array;v=g.version;for(let w=0,y=_.length/3-1;w<y;w+=3){const P=w+0,T=w+1,A=w+2;f.push(P,T,T,A,A,P)}}else return;const m=new(zc(f)?qc:Xc)(f,1);m.version=v;const p=a.get(u);p&&t.remove(p),a.set(u,m)}function h(u){const f=a.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return a.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function om(n,t,e){let i;function s(f){i=f}let a,o;function r(f){a=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,a,f*o),e.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,a,f*o,g),e.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,a,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,i,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,a,f,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=d[_]*v[_];e.update(p,i,1)}}this.setMode=s,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rm(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,r){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=r*(a/3);break;case n.LINES:e.lines+=r*(a/2);break;case n.LINE_STRIP:e.lines+=r*(a-1);break;case n.LINE_LOOP:e.lines+=r*a;break;case n.POINTS:e.points+=r*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lm(n,t,e){const i=new WeakMap,s=new ie;function a(o,r,l){const c=o.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(r);if(f===void 0||f.count!==u){let M=function(){k.dispose(),i.delete(r),r.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],_=r.morphAttributes.normal||[],w=r.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let P=r.attributes.position.count*y,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*T*4*u),k=new Gc(A,P,T,u);k.type=Tn,k.needsUpdate=!0;const b=y*4;for(let R=0;R<u;R++){const F=p[R],U=_[R],V=w[R],$=P*T*4*R;for(let W=0;W<F.count;W++){const X=W*b;g===!0&&(s.fromBufferAttribute(F,W),A[$+X+0]=s.x,A[$+X+1]=s.y,A[$+X+2]=s.z,A[$+X+3]=0),v===!0&&(s.fromBufferAttribute(U,W),A[$+X+4]=s.x,A[$+X+5]=s.y,A[$+X+6]=s.z,A[$+X+7]=0),m===!0&&(s.fromBufferAttribute(V,W),A[$+X+8]=s.x,A[$+X+9]=s.y,A[$+X+10]=s.z,A[$+X+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:k,size:new pt(P,T)},i.set(r,f),r.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function cm(n,t,e,i){let s=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}class Jc extends Oe{constructor(t,e,i,s,a,o,r,l,c,h=Wi){if(h!==Wi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Wi&&(i=vi),i===void 0&&h===Zi&&(i=Ji),super(null,s,a,o,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zc=new Oe,Ll=new Jc(1,1),Qc=new Gc,th=new $u,eh=new jc,Nl=[],Dl=[],Ul=new Float32Array(16),Ol=new Float32Array(9),Fl=new Float32Array(4);function as(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let a=Nl[s];if(a===void 0&&(a=new Float32Array(s),Nl[s]=a),t!==0){i.toArray(a,0);for(let o=1,r=0;o!==t;++o)r+=e,n[o].toArray(a,r)}return a}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=Dl[t];e===void 0&&(e=new Int32Array(t),Dl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function hm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function um(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function dm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function fm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function pm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;Fl.set(i),n.uniformMatrix2fv(this.addr,!1,Fl),Me(e,i)}}function mm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;Ol.set(i),n.uniformMatrix3fv(this.addr,!1,Ol),Me(e,i)}}function gm(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,i))return;Ul.set(i),n.uniformMatrix4fv(this.addr,!1,Ul),Me(e,i)}}function vm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _m(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function ym(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function wm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function xm(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Mm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function Sm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function bm(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function Em(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Ll.compareFunction=Bc,a=Ll):a=Zc,e.setTexture2D(t||a,s)}function Tm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||th,s)}function Am(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||eh,s)}function Cm(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qc,s)}function Rm(n){switch(n){case 5126:return hm;case 35664:return um;case 35665:return dm;case 35666:return fm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return ym;case 35669:case 35673:return wm;case 5125:return xm;case 36294:return Mm;case 36295:return Sm;case 36296:return bm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}function km(n,t){n.uniform1fv(this.addr,t)}function Pm(n,t){const e=as(t,this.size,2);n.uniform2fv(this.addr,e)}function Im(n,t){const e=as(t,this.size,3);n.uniform3fv(this.addr,e)}function Lm(n,t){const e=as(t,this.size,4);n.uniform4fv(this.addr,e)}function Nm(n,t){const e=as(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Dm(n,t){const e=as(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Um(n,t){const e=as(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Om(n,t){n.uniform1iv(this.addr,t)}function Fm(n,t){n.uniform2iv(this.addr,t)}function Bm(n,t){n.uniform3iv(this.addr,t)}function zm(n,t){n.uniform4iv(this.addr,t)}function Hm(n,t){n.uniform1uiv(this.addr,t)}function Gm(n,t){n.uniform2uiv(this.addr,t)}function Vm(n,t){n.uniform3uiv(this.addr,t)}function Wm(n,t){n.uniform4uiv(this.addr,t)}function Xm(n,t,e){const i=this.cache,s=t.length,a=Na(e,s);xe(i,a)||(n.uniform1iv(this.addr,a),Me(i,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zc,a[o])}function qm(n,t,e){const i=this.cache,s=t.length,a=Na(e,s);xe(i,a)||(n.uniform1iv(this.addr,a),Me(i,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||th,a[o])}function Ym(n,t,e){const i=this.cache,s=t.length,a=Na(e,s);xe(i,a)||(n.uniform1iv(this.addr,a),Me(i,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||eh,a[o])}function $m(n,t,e){const i=this.cache,s=t.length,a=Na(e,s);xe(i,a)||(n.uniform1iv(this.addr,a),Me(i,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qc,a[o])}function jm(n){switch(n){case 5126:return km;case 35664:return Pm;case 35665:return Im;case 35666:return Lm;case 35674:return Nm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Om;case 35667:case 35671:return Fm;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Hm;case 36294:return Gm;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return qm;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return $m}}class Km{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Jm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jm(e.type)}}class Zm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const r=s[a];r.setValue(t,e[r.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Bl(n,t){n.seq.push(t),n.map[t.id]=t}function Qm(n,t,e){const i=n.name,s=i.length;for(fo.lastIndex=0;;){const a=fo.exec(i),o=fo.lastIndex;let r=a[1];const l=a[2]==="]",c=a[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===s){Bl(e,c===void 0?new Km(r,n,t):new Jm(r,n,t));break}else{let u=e.map[r];u===void 0&&(u=new Zm(r),Bl(e,u)),e=u}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Qm(a,o,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,o=e.length;a!==o;++a){const r=e[a],l=i[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function zl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const t0=37297;let e0=0;function n0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const r=o+1;i.push(`${r===t?">":" "} ${r}: ${e[o]}`)}return i.join(`
`)}const Hl=new Ot;function i0(n){jt._getMatrix(Hl,jt.workingColorSpace,n);const t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(n)){case La:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Gl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+n0(n.getShaderSource(t),o)}else return s}function s0(n,t){const e=i0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a0(n,t){let e;switch(t){case au:e="Linear";break;case ou:e="Reinhard";break;case ru:e="Cineon";break;case lu:e="ACESFilmic";break;case hu:e="AgX";break;case uu:e="Neutral";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const da=new C;function o0(){jt.getLuminanceCoefficients(da);const n=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function l0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function c0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(t,s),o=a.name;let r=1;a.type===n.FLOAT_MAT2&&(r=2),a.type===n.FLOAT_MAT3&&(r=3),a.type===n.FLOAT_MAT4&&(r=4),e[o]={type:a.type,location:n.getAttribLocation(t,o),locationSize:r}}return e}function ws(n){return n!==""}function Vl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rr(n){return n.replace(h0,d0)}const u0=new Map;function d0(n,t){let e=Bt[t];if(e===void 0){const i=u0.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return rr(e)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(n){return n.replace(f0,p0)}function p0(n,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ql(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function m0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Ia:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case wr:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function y0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function w0(n,t,e,i){const s=n.getContext(),a=e.defines;let o=e.vertexShader,r=e.fragmentShader;const l=m0(e),c=g0(e),h=v0(e),u=_0(e),f=y0(e),d=r0(e),g=l0(a),v=s.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ws).join(`
`),p.length>0&&(p+=`
`)):(m=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),p=[ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Bt.tonemapping_pars_fragment:"",e.toneMapping!==$n?a0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),o0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=rr(o),o=Vl(o,e),o=Wl(o,e),r=rr(r),r=Vl(r,e),r=Wl(r,e),o=Xl(o),r=Xl(r),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=_+m+o,y=_+p+r,P=zl(s,s.VERTEX_SHADER,w),T=zl(s,s.FRAGMENT_SHADER,y);s.attachShader(v,P),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(R){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),U=s.getShaderInfoLog(P).trim(),V=s.getShaderInfoLog(T).trim();let $=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,P,T);else{const X=Gl(s,P,"vertex"),O=Gl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+X+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||V==="")&&(W=!1);W&&(R.diagnostics={runnable:$,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(P),s.deleteShader(T),k=new Ma(s,v),b=c0(s,v)}let k;this.getUniforms=function(){return k===void 0&&A(this),k};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,t0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let x0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new S0(t),e.set(t,i)),i}}class S0{constructor(t){this.id=x0++,this.code=t,this.usedTimes=0}}function b0(n,t,e,i,s,a,o){const r=new Cr,l=new M0,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,R,F,U){const V=F.fog,$=U.geometry,W=b.isMeshStandardMaterial?F.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),O=X&&X.mapping===Ia?X.image.height:null,tt=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const it=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=it!==void 0?it.length:0;let Ct=0;$.morphAttributes.position!==void 0&&(Ct=1),$.morphAttributes.normal!==void 0&&(Ct=2),$.morphAttributes.color!==void 0&&(Ct=3);let Zt,G,Z,yt;if(tt){const ee=fn[tt];Zt=ee.vertexShader,G=ee.fragmentShader}else Zt=b.vertexShader,G=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);const at=n.getRenderTarget(),kt=n.state.buffers.depth.getReversed(),Nt=U.isInstancedMesh===!0,zt=U.isBatchedMesh===!0,pe=!!b.map,qt=!!b.matcap,ve=!!X,D=!!b.aoMap,je=!!b.lightMap,Gt=!!b.bumpMap,Vt=!!b.normalMap,Tt=!!b.displacementMap,le=!!b.emissiveMap,Et=!!b.metalnessMap,E=!!b.roughnessMap,x=b.anisotropy>0,B=b.clearcoat>0,K=b.dispersion>0,Q=b.iridescence>0,j=b.sheen>0,St=b.transmission>0,ht=x&&!!b.anisotropyMap,mt=B&&!!b.clearcoatMap,Yt=B&&!!b.clearcoatNormalMap,et=B&&!!b.clearcoatRoughnessMap,gt=Q&&!!b.iridescenceMap,Rt=Q&&!!b.iridescenceThicknessMap,Pt=j&&!!b.sheenColorMap,vt=j&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Ft=!!b.specularColorMap,oe=!!b.specularIntensityMap,I=St&&!!b.transmissionMap,ct=St&&!!b.thicknessMap,q=!!b.gradientMap,J=!!b.alphaMap,ft=b.alphaTest>0,ut=!!b.alphaHash,Dt=!!b.extensions;let me=$n;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(me=n.toneMapping);const Ce={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Zt,fragmentShader:G,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:zt,batchingColor:zt&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:at===null?n.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:pe,matcap:qt,envMap:ve,envMapMode:ve&&X.mapping,envMapCubeUVHeight:O,aoMap:D,lightMap:je,bumpMap:Gt,normalMap:Vt,displacementMap:f&&Tt,emissiveMap:le,normalMapObjectSpace:Vt&&b.normalMapType===mu,normalMapTangentSpace:Vt&&b.normalMapType===Fc,metalnessMap:Et,roughnessMap:E,anisotropy:x,anisotropyMap:ht,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:K,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Rt,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:vt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:oe,transmission:St,transmissionMap:I,thicknessMap:ct,gradientMap:q,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ut,combine:b.combine,mapUv:pe&&v(b.map.channel),aoMapUv:D&&v(b.aoMap.channel),lightMapUv:je&&v(b.lightMap.channel),bumpMapUv:Gt&&v(b.bumpMap.channel),normalMapUv:Vt&&v(b.normalMap.channel),displacementMapUv:Tt&&v(b.displacementMap.channel),emissiveMapUv:le&&v(b.emissiveMap.channel),metalnessMapUv:Et&&v(b.metalnessMap.channel),roughnessMapUv:E&&v(b.roughnessMap.channel),anisotropyMapUv:ht&&v(b.anisotropyMap.channel),clearcoatMapUv:mt&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&v(b.sheenRoughnessMap.channel),specularMapUv:Wt&&v(b.specularMap.channel),specularColorMapUv:Ft&&v(b.specularColorMap.channel),specularIntensityMapUv:oe&&v(b.specularIntensityMap.channel),transmissionMapUv:I&&v(b.transmissionMap.channel),thicknessMapUv:ct&&v(b.thicknessMap.channel),alphaMapUv:J&&v(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Vt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(pe||J),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:kt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:me,decodeVideoTexture:pe&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===ne,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===ne,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===De,flipSided:b.side===He,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||zt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)M.push(R),M.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(_(M,b),w(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function _(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function w(b,M){r.disableAll(),M.supportsVertexTextures&&r.enable(0),M.instancing&&r.enable(1),M.instancingColor&&r.enable(2),M.instancingMorph&&r.enable(3),M.matcap&&r.enable(4),M.envMap&&r.enable(5),M.normalMapObjectSpace&&r.enable(6),M.normalMapTangentSpace&&r.enable(7),M.clearcoat&&r.enable(8),M.iridescence&&r.enable(9),M.alphaTest&&r.enable(10),M.vertexColors&&r.enable(11),M.vertexAlphas&&r.enable(12),M.vertexUv1s&&r.enable(13),M.vertexUv2s&&r.enable(14),M.vertexUv3s&&r.enable(15),M.vertexTangents&&r.enable(16),M.anisotropy&&r.enable(17),M.alphaHash&&r.enable(18),M.batching&&r.enable(19),M.dispersion&&r.enable(20),M.batchingColor&&r.enable(21),b.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reverseDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),b.push(r.mask)}function y(b){const M=g[b.type];let R;if(M){const F=fn[M];R=od.clone(F.uniforms)}else R=b.uniforms;return R}function P(b,M){let R;for(let F=0,U=h.length;F<U;F++){const V=h[F];if(V.cacheKey===M){R=V,++R.usedTimes;break}}return R===void 0&&(R=new w0(n,M,b,a),h.push(R)),R}function T(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:k}}function E0(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let r=n.get(o);return r===void 0&&(r={},n.set(o,r)),r}function i(o){n.delete(o)}function s(o,r,l){n.get(o)[r]=l}function a(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:a}}function T0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Yl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function $l(){const n=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,g,v,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function r(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||T0),i.length>1&&i.sort(f||Yl),s.length>1&&s.sort(f||Yl)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:r,unshift:l,finish:h,sort:c}}function A0(){let n=new WeakMap;function t(i,s){const a=n.get(i);let o;return a===void 0?(o=new $l,n.set(i,[o])):s>=a.length?(o=new $l,a.push(o)):o=a[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function C0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new It};break;case"SpotLight":e={position:new C,direction:new C,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function R0(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let k0=0;function P0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function I0(n){const t=new C0,e=R0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,a=new ae,o=new ae;function r(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,_=0,w=0,y=0,P=0,T=0,A=0;c.sort(P0);for(let b=0,M=c.length;b<M;b++){const R=c[b],F=R.color,U=R.intensity,V=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*U,u+=F.g*U,f+=F.b*U;else if(R.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(R.sh.coefficients[W],U);A++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,O=e.get(R);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=R.shadow.matrix,_++}i.directional[d]=W,d++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(U),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,i.spot[v]=W;const X=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,X.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[v]=X.matrix,R.castShadow){const O=e.get(R);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=$,y++}v++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(F).multiplyScalar(U),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const X=R.shadow,O=e.get(R);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(U),W.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const k=i.hash;(k.directionalLength!==d||k.pointLength!==g||k.spotLength!==v||k.rectAreaLength!==m||k.hemiLength!==p||k.numDirectionalShadows!==_||k.numPointShadows!==w||k.numSpotShadows!==y||k.numSpotMaps!==P||k.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,k.directionalLength=d,k.pointLength=g,k.spotLength=v,k.rectAreaLength=m,k.hemiLength=p,k.numDirectionalShadows=_,k.numPointShadows=w,k.numSpotShadows=y,k.numSpotMaps=P,k.numLightProbes=A,i.version=k0++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const w=c[p];if(w.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function jl(n){const t=new I0(n),e=[],i=[];function s(h){c.camera=h,e.length=0,i.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function r(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:r,setupLightsView:l,pushLight:a,pushShadow:o}}function L0(n){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let r;return o===void 0?(r=new jl(n),t.set(s,[r])):a>=o.length?(r=new jl(n),o.push(r)):r=o[a],r}function i(){t=new WeakMap}return{get:e,dispose:i}}class N0 extends Ds{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D0 extends Ds{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function F0(n,t,e){let i=new Us;const s=new pt,a=new pt,o=new ie,r=new N0({depthPacking:pu}),l=new D0,c={},h=e.maxTextureSize,u={[In]:He,[He]:In,[De]:De},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:U0,fragmentShader:O0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ge;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(T,A,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Yn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==En&&this.type===En,V=p===En&&this.type!==En;for(let $=0,W=T.length;$<W;$++){const X=T[$],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const tt=O.getFrameExtents();if(s.multiply(tt),a.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/tt.x),s.x=a.x*tt.x,O.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/tt.y),s.y=a.y*tt.y,O.mapSize.y=a.y)),O.map===null||U===!0||V===!0){const _t=this.type!==En?{minFilter:$e,magFilter:$e}:{};O.map!==null&&O.map.dispose(),O.map=new jn(s.x,s.y,_t),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const it=O.getViewportCount();for(let _t=0;_t<it;_t++){const Ct=O.getViewport(_t);o.set(a.x*Ct.x,a.y*Ct.y,a.x*Ct.z,a.y*Ct.w),F.viewport(o),O.updateMatrices(X,_t),i=O.getFrustum(),y(A,k,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===En&&_(O,k),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,R)};function _(T,A){const k=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,k,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,k,d,v,null)}function w(T,A,k,b){let M=null;const R=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=k.isPointLight===!0?l:r,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=M.uuid,U=A.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let $=V[U];$===void 0&&($=M.clone(),V[U]=$,A.addEventListener("dispose",P)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,b===En?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,k.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=n.properties.get(M);F.light=k}return M}function y(T,A,k,b,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===En)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const U=t.update(T),V=T.material;if(Array.isArray(V)){const $=U.groups;for(let W=0,X=$.length;W<X;W++){const O=$[W],tt=V[O.materialIndex];if(tt&&tt.visible){const it=w(T,tt,b,M);T.onBeforeShadow(n,T,A,k,U,it,O),n.renderBufferDirect(k,null,U,it,T,O),T.onAfterShadow(n,T,A,k,U,it,O)}}}else if(V.visible){const $=w(T,V,b,M);T.onBeforeShadow(n,T,A,k,U,$,null),n.renderBufferDirect(k,null,U,$,T,null),T.onAfterShadow(n,T,A,k,U,$,null)}}const F=T.children;for(let U=0,V=F.length;U<V;U++)y(F[U],A,k,b,M)}function P(T){T.target.removeEventListener("dispose",P);for(const k in c){const b=c[k],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const B0={[Eo]:To,[Ao]:ko,[Co]:Po,[$i]:Ro,[To]:Eo,[ko]:Ao,[Po]:Co,[Ro]:$i};function z0(n,t){function e(){let I=!1;const ct=new ie;let q=null;const J=new ie(0,0,0,0);return{setMask:function(ft){q!==ft&&!I&&(n.colorMask(ft,ft,ft,ft),q=ft)},setLocked:function(ft){I=ft},setClear:function(ft,ut,Dt,me,Ce){Ce===!0&&(ft*=me,ut*=me,Dt*=me),ct.set(ft,ut,Dt,me),J.equals(ct)===!1&&(n.clearColor(ft,ut,Dt,me),J.copy(ct))},reset:function(){I=!1,q=null,J.set(-1,0,0,0)}}}function i(){let I=!1,ct=!1,q=null,J=null,ft=null;return{setReversed:function(ut){if(ct!==ut){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const me=ft;ft=null,this.setClear(me)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?at(n.DEPTH_TEST):kt(n.DEPTH_TEST)},setMask:function(ut){q!==ut&&!I&&(n.depthMask(ut),q=ut)},setFunc:function(ut){if(ct&&(ut=B0[ut]),J!==ut){switch(ut){case Eo:n.depthFunc(n.NEVER);break;case To:n.depthFunc(n.ALWAYS);break;case Ao:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case Co:n.depthFunc(n.EQUAL);break;case Ro:n.depthFunc(n.GEQUAL);break;case ko:n.depthFunc(n.GREATER);break;case Po:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=ut}},setLocked:function(ut){I=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),n.clearDepth(ut),ft=ut)},reset:function(){I=!1,q=null,J=null,ft=null,ct=!1}}}function s(){let I=!1,ct=null,q=null,J=null,ft=null,ut=null,Dt=null,me=null,Ce=null;return{setTest:function(ee){I||(ee?at(n.STENCIL_TEST):kt(n.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!I&&(n.stencilMask(ee),ct=ee)},setFunc:function(ee,Qe,_n){(q!==ee||J!==Qe||ft!==_n)&&(n.stencilFunc(ee,Qe,_n),q=ee,J=Qe,ft=_n)},setOp:function(ee,Qe,_n){(ut!==ee||Dt!==Qe||me!==_n)&&(n.stencilOp(ee,Qe,_n),ut=ee,Dt=Qe,me=_n)},setLocked:function(ee){I=ee},setClear:function(ee){Ce!==ee&&(n.clearStencil(ee),Ce=ee)},reset:function(){I=!1,ct=null,q=null,J=null,ft=null,ut=null,Dt=null,me=null,Ce=null}}}const a=new e,o=new i,r=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,_=null,w=null,y=null,P=null,T=null,A=new It(0,0,0),k=0,b=!1,M=null,R=null,F=null,U=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=X>=2);let tt=null,it={};const _t=n.getParameter(n.SCISSOR_BOX),Ct=n.getParameter(n.VIEWPORT),Zt=new ie().fromArray(_t),G=new ie().fromArray(Ct);function Z(I,ct,q,J){const ft=new Uint8Array(4),ut=n.createTexture();n.bindTexture(I,ut),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Dt=0;Dt<q;Dt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ct,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,ft):n.texImage2D(ct+Dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ft);return ut}const yt={};yt[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),r.setClear(0),at(n.DEPTH_TEST),o.setFunc($i),Gt(!1),Vt(Qr),at(n.CULL_FACE),D(Yn);function at(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function kt(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Nt(I,ct){return u[I]!==ct?(n.bindFramebuffer(I,ct),u[I]=ct,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ct),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ct),!0):!1}function zt(I,ct){let q=d,J=!1;if(I){q=f.get(ct),q===void 0&&(q=[],f.set(ct,q));const ft=I.textures;if(q.length!==ft.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Dt=ft.length;ut<Dt;ut++)q[ut]=n.COLOR_ATTACHMENT0+ut;q.length=ft.length,J=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,J=!0);J&&n.drawBuffers(q)}function pe(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const qt={[li]:n.FUNC_ADD,[zh]:n.FUNC_SUBTRACT,[Hh]:n.FUNC_REVERSE_SUBTRACT};qt[Gh]=n.MIN,qt[Vh]=n.MAX;const ve={[Wh]:n.ZERO,[Xh]:n.ONE,[qh]:n.SRC_COLOR,[So]:n.SRC_ALPHA,[Zh]:n.SRC_ALPHA_SATURATE,[Kh]:n.DST_COLOR,[$h]:n.DST_ALPHA,[Yh]:n.ONE_MINUS_SRC_COLOR,[bo]:n.ONE_MINUS_SRC_ALPHA,[Jh]:n.ONE_MINUS_DST_COLOR,[jh]:n.ONE_MINUS_DST_ALPHA,[Qh]:n.CONSTANT_COLOR,[tu]:n.ONE_MINUS_CONSTANT_COLOR,[eu]:n.CONSTANT_ALPHA,[nu]:n.ONE_MINUS_CONSTANT_ALPHA};function D(I,ct,q,J,ft,ut,Dt,me,Ce,ee){if(I===Yn){v===!0&&(kt(n.BLEND),v=!1);return}if(v===!1&&(at(n.BLEND),v=!0),I!==Bh){if(I!==m||ee!==b){if((p!==li||y!==li)&&(n.blendEquation(n.FUNC_ADD),p=li,y=li),ee)switch(I){case Vi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.ONE,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,w=null,P=null,T=null,A.set(0,0,0),k=0,m=I,b=ee}return}ft=ft||ct,ut=ut||q,Dt=Dt||J,(ct!==p||ft!==y)&&(n.blendEquationSeparate(qt[ct],qt[ft]),p=ct,y=ft),(q!==_||J!==w||ut!==P||Dt!==T)&&(n.blendFuncSeparate(ve[q],ve[J],ve[ut],ve[Dt]),_=q,w=J,P=ut,T=Dt),(me.equals(A)===!1||Ce!==k)&&(n.blendColor(me.r,me.g,me.b,Ce),A.copy(me),k=Ce),m=I,b=!1}function je(I,ct){I.side===De?kt(n.CULL_FACE):at(n.CULL_FACE);let q=I.side===He;ct&&(q=!q),Gt(q),I.blending===Vi&&I.transparent===!1?D(Yn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),a.setMask(I.colorWrite);const J=I.stencilWrite;r.setTest(J),J&&(r.setMask(I.stencilWriteMask),r.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),r.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):kt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){M!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),M=I)}function Vt(I){I!==Oh?(at(n.CULL_FACE),I!==R&&(I===Qr?n.cullFace(n.BACK):I===Fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):kt(n.CULL_FACE),R=I}function Tt(I){I!==F&&(W&&n.lineWidth(I),F=I)}function le(I,ct,q){I?(at(n.POLYGON_OFFSET_FILL),(U!==ct||V!==q)&&(n.polygonOffset(ct,q),U=ct,V=q)):kt(n.POLYGON_OFFSET_FILL)}function Et(I){I?at(n.SCISSOR_TEST):kt(n.SCISSOR_TEST)}function E(I){I===void 0&&(I=n.TEXTURE0+$-1),tt!==I&&(n.activeTexture(I),tt=I)}function x(I,ct,q){q===void 0&&(tt===null?q=n.TEXTURE0+$-1:q=tt);let J=it[q];J===void 0&&(J={type:void 0,texture:void 0},it[q]=J),(J.type!==I||J.texture!==ct)&&(tt!==q&&(n.activeTexture(q),tt=q),n.bindTexture(I,ct||yt[I]),J.type=I,J.texture=ct)}function B(){const I=it[tt];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(I){Zt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Zt.copy(I))}function vt(I){G.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),G.copy(I))}function Wt(I,ct){let q=c.get(ct);q===void 0&&(q=new WeakMap,c.set(ct,q));let J=q.get(I);J===void 0&&(J=n.getUniformBlockIndex(ct,I.name),q.set(I,J))}function Ft(I,ct){const J=c.get(ct).get(I);l.get(ct)!==J&&(n.uniformBlockBinding(ct,J,I.__bindingPointIndex),l.set(ct,J))}function oe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},tt=null,it={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,_=null,w=null,y=null,P=null,T=null,A=new It(0,0,0),k=0,b=!1,M=null,R=null,F=null,U=null,V=null,Zt.set(0,0,n.canvas.width,n.canvas.height),G.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),r.reset()}return{buffers:{color:a,depth:o,stencil:r},enable:at,disable:kt,bindFramebuffer:Nt,drawBuffers:zt,useProgram:pe,setBlending:D,setMaterial:je,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:le,setScissorTest:Et,activeTexture:E,bindTexture:x,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Rt,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:Yt,texStorage3D:et,texSubImage2D:j,texSubImage3D:St,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Pt,viewport:vt,reset:oe}}function Kl(n,t,e,i){const s=H0(i);switch(e){case Pc:return n*t;case Lc:return n*t;case Nc:return n*t*2;case Dc:return n*t/s.components*s.byteLength;case br:return n*t/s.components*s.byteLength;case Uc:return n*t*2/s.components*s.byteLength;case Er:return n*t*2/s.components*s.byteLength;case Ic:return n*t*3/s.components*s.byteLength;case rn:return n*t*4/s.components*s.byteLength;case Tr:return n*t*4/s.components*s.byteLength;case va:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ya:case wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(n,16)*Math.max(t,8)/4;case Do:case Oo:return Math.max(n,8)*Math.max(t,8)/2;case Bo:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case qo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case tr:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case er:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xa:case nr:case ir:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Oc:case sr:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ar:case or:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function H0(n){switch(n){case Ln:case Cc:return{byteLength:1,components:1};case Cs:case Rc:case es:return{byteLength:2,components:1};case Mr:case Sr:return{byteLength:2,components:4};case vi:case xr:case Tn:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function G0(n,t,e,i,s,a,o){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return d?new OffscreenCanvas(E,x):Aa("canvas")}function v(E,x,B){let K=1;const Q=Et(E);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(K*Q.width),St=Math.floor(K*Q.height);u===void 0&&(u=g(j,St));const ht=x?g(j,St):u;return ht.width=j,ht.height=St,ht.getContext("2d").drawImage(E,0,0,j,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+St+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function _(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(E,x,B,K,Q=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=x;if(x===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8)),x===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),x===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8)),x===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),x===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),x===n.RGBA){const St=Q?La:jt.getTransfer(K);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=St===ne?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(E,x){let B;return E?x===null||x===vi||x===Ji?B=n.DEPTH24_STENCIL8:x===Tn?B=n.DEPTH32F_STENCIL8:x===Cs&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===Ji?B=n.DEPTH_COMPONENT24:x===Tn?B=n.DEPTH_COMPONENT32F:x===Cs&&(B=n.DEPTH_COMPONENT16),B}function P(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==$e&&E.minFilter!==pn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function T(E){const x=E.target;x.removeEventListener("dispose",T),k(x),x.isVideoTexture&&h.delete(x)}function A(E){const x=E.target;x.removeEventListener("dispose",A),M(x)}function k(E){const x=i.get(E);if(x.__webglInit===void 0)return;const B=E.source,K=f.get(B);if(K){const Q=K[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(E),Object.keys(K).length===0&&f.delete(B)}i.remove(E)}function b(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const B=E.source,K=f.get(B);delete K[x.__cacheKey],o.memory.textures--}function M(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let Q=0;Q<x.__webglFramebuffer[K].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[K][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,Q=B.length;K<Q;K++){const j=i.get(B[K]);j.__webglTexture&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(B[K])}i.remove(E)}let R=0;function F(){R=0}function U(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function V(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function $(E,x){const B=i.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,E,x);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+x)}function W(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){G(B,E,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+x)}function X(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){G(B,E,x);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+x)}function O(E,x){const B=i.get(E);if(E.version>0&&B.__version!==E.version){Z(B,E,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+x)}const tt={[Ea]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},it={[$e]:n.NEAREST,[du]:n.NEAREST_MIPMAP_NEAREST,[qs]:n.NEAREST_MIPMAP_LINEAR,[pn]:n.LINEAR,[za]:n.LINEAR_MIPMAP_NEAREST,[pi]:n.LINEAR_MIPMAP_LINEAR},_t={[gu]:n.NEVER,[Mu]:n.ALWAYS,[vu]:n.LESS,[Bc]:n.LEQUAL,[_u]:n.EQUAL,[xu]:n.GEQUAL,[yu]:n.GREATER,[wu]:n.NOTEQUAL};function Ct(E,x){if(x.type===Tn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===pn||x.magFilter===za||x.magFilter===qs||x.magFilter===pi||x.minFilter===pn||x.minFilter===za||x.minFilter===qs||x.minFilter===pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,tt[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,tt[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,tt[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,it[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,it[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,_t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==qs&&x.minFilter!==pi||x.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Zt(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",T));const K=x.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const j=V(x);if(j!==E.__cacheKey){Q[j]===void 0&&(Q[j]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[j].usedTimes++;const St=Q[E.__cacheKey];St!==void 0&&(Q[E.__cacheKey].usedTimes--,St.usedTimes===0&&b(x)),E.__cacheKey=j,E.__webglTexture=Q[j].texture}return B}function G(E,x,B){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const Q=Zt(E,x),j=x.source;e.bindTexture(K,E.__webglTexture,n.TEXTURE0+B);const St=i.get(j);if(j.version!==St.__version||Q===!0){e.activeTexture(n.TEXTURE0+B);const ht=jt.getPrimaries(jt.workingColorSpace),mt=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),Yt=x.colorSpace===Xn||ht===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=v(x.image,!1,s.maxTextureSize);et=le(x,et);const gt=a.convert(x.format,x.colorSpace),Rt=a.convert(x.type);let Pt=w(x.internalFormat,gt,Rt,x.colorSpace,x.isVideoTexture);Ct(K,x);let vt;const Wt=x.mipmaps,Ft=x.isVideoTexture!==!0,oe=St.__version===void 0||Q===!0,I=j.dataReady,ct=P(x,et);if(x.isDepthTexture)Pt=y(x.format===Zi,x.type),oe&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,Pt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,gt,Rt,null));else if(x.isDataTexture)if(Wt.length>0){Ft&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)vt=Wt[q],Ft?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,gt,Rt,vt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,vt.width,vt.height,0,gt,Rt,vt.data);x.generateMipmaps=!1}else Ft?(oe&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,et.width,et.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,et.width,et.height,gt,Rt,et.data)):e.texImage2D(n.TEXTURE_2D,0,Pt,et.width,et.height,0,gt,Rt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,Wt[0].width,Wt[0].height,et.depth);for(let q=0,J=Wt.length;q<J;q++)if(vt=Wt[q],x.format!==rn)if(gt!==null)if(Ft){if(I)if(x.layerUpdates.size>0){const ft=Kl(vt.width,vt.height,x.format,x.type);for(const ut of x.layerUpdates){const Dt=vt.data.subarray(ut*ft/vt.data.BYTES_PER_ELEMENT,(ut+1)*ft/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ut,vt.width,vt.height,1,gt,Dt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,et.depth,gt,vt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Pt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,et.depth,gt,Rt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,q,Pt,vt.width,vt.height,et.depth,0,gt,Rt,vt.data)}else{Ft&&oe&&e.texStorage2D(n.TEXTURE_2D,ct,Pt,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)vt=Wt[q],x.format!==rn?gt!==null?Ft?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,gt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,q,Pt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,vt.width,vt.height,gt,Rt,vt.data):e.texImage2D(n.TEXTURE_2D,q,Pt,vt.width,vt.height,0,gt,Rt,vt.data)}else if(x.isDataArrayTexture)if(Ft){if(oe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Pt,et.width,et.height,et.depth),I)if(x.layerUpdates.size>0){const q=Kl(et.width,et.height,x.format,x.type);for(const J of x.layerUpdates){const ft=et.data.subarray(J*q/et.data.BYTES_PER_ELEMENT,(J+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,gt,Rt,ft)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Rt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,et.width,et.height,et.depth,0,gt,Rt,et.data);else if(x.isData3DTexture)Ft?(oe&&e.texStorage3D(n.TEXTURE_3D,ct,Pt,et.width,et.height,et.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Rt,et.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,et.width,et.height,et.depth,0,gt,Rt,et.data);else if(x.isFramebufferTexture){if(oe)if(Ft)e.texStorage2D(n.TEXTURE_2D,ct,Pt,et.width,et.height);else{let q=et.width,J=et.height;for(let ft=0;ft<ct;ft++)e.texImage2D(n.TEXTURE_2D,ft,Pt,q,J,0,gt,Rt,null),q>>=1,J>>=1}}else if(Wt.length>0){if(Ft&&oe){const q=Et(Wt[0]);e.texStorage2D(n.TEXTURE_2D,ct,Pt,q.width,q.height)}for(let q=0,J=Wt.length;q<J;q++)vt=Wt[q],Ft?I&&e.texSubImage2D(n.TEXTURE_2D,q,0,0,gt,Rt,vt):e.texImage2D(n.TEXTURE_2D,q,Pt,gt,Rt,vt);x.generateMipmaps=!1}else if(Ft){if(oe){const q=Et(et);e.texStorage2D(n.TEXTURE_2D,ct,Pt,q.width,q.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt,Rt,et)}else e.texImage2D(n.TEXTURE_2D,0,Pt,gt,Rt,et);m(x)&&p(K),St.__version=j.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Z(E,x,B){if(x.image.length!==6)return;const K=Zt(E,x),Q=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+B);const j=i.get(Q);if(Q.version!==j.__version||K===!0){e.activeTexture(n.TEXTURE0+B);const St=jt.getPrimaries(jt.workingColorSpace),ht=x.colorSpace===Xn?null:jt.getPrimaries(x.colorSpace),mt=x.colorSpace===Xn||St===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!Yt&&!et?gt[J]=v(x.image[J],!0,s.maxCubemapSize):gt[J]=et?x.image[J].image:x.image[J],gt[J]=le(x,gt[J]);const Rt=gt[0],Pt=a.convert(x.format,x.colorSpace),vt=a.convert(x.type),Wt=w(x.internalFormat,Pt,vt,x.colorSpace),Ft=x.isVideoTexture!==!0,oe=j.__version===void 0||K===!0,I=Q.dataReady;let ct=P(x,Rt);Ct(n.TEXTURE_CUBE_MAP,x);let q;if(Yt){Ft&&oe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Wt,Rt.width,Rt.height);for(let J=0;J<6;J++){q=gt[J].mipmaps;for(let ft=0;ft<q.length;ft++){const ut=q[ft];x.format!==rn?Pt!==null?Ft?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ut.width,ut.height,Pt,vt,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Wt,ut.width,ut.height,0,Pt,vt,ut.data)}}}else{if(q=x.mipmaps,Ft&&oe){q.length>0&&ct++;const J=Et(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ct,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Pt,vt,gt[J].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,gt[J].width,gt[J].height,0,Pt,vt,gt[J].data);for(let ft=0;ft<q.length;ft++){const Dt=q[ft].image[J].image;Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Dt.width,Dt.height,Pt,vt,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Dt.width,Dt.height,0,Pt,vt,Dt.data)}}else{Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pt,vt,gt[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Pt,vt,gt[J]);for(let ft=0;ft<q.length;ft++){const ut=q[ft];Ft?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Pt,vt,ut.image[J]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Wt,Pt,vt,ut.image[J])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),j.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function yt(E,x,B,K,Q,j){const St=a.convert(B.format,B.colorSpace),ht=a.convert(B.type),mt=w(B.internalFormat,St,ht,B.colorSpace),Yt=i.get(x),et=i.get(B);if(et.__renderTarget=x,!Yt.__hasExternalTextures){const gt=Math.max(1,x.width>>j),Rt=Math.max(1,x.height>>j);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,mt,gt,Rt,x.depth,0,St,ht,null):e.texImage2D(Q,j,mt,gt,Rt,0,St,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),Vt(x)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,Q,et.__webglTexture,0,Gt(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,Q,et.__webglTexture,j),e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(E,x,B){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){const K=x.depthTexture,Q=K&&K.isDepthTexture?K.type:null,j=y(x.stencilBuffer,Q),St=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Gt(x);Vt(x)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,j,x.width,x.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,E)}else{const K=x.textures;for(let Q=0;Q<K.length;Q++){const j=K[Q],St=a.convert(j.format,j.colorSpace),ht=a.convert(j.type),mt=w(j.internalFormat,St,ht,j.colorSpace),Yt=Gt(x);B&&Vt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,mt,x.width,x.height):Vt(x)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Yt,mt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,mt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const Q=K.__webglTexture,j=Gt(x);if(x.depthTexture.format===Wi)Vt(x)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Zi)Vt(x)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Nt(E){const x=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");kt(x.__webglFramebuffer,E)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),at(x.__webglDepthbuffer[K],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,j)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),at(x.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(E,x,B){const K=i.get(E);x!==void 0&&yt(K.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Nt(E)}function pe(E){const x=E.texture,B=i.get(E),K=i.get(x);E.addEventListener("dispose",A);const Q=E.textures,j=E.isWebGLCubeRenderTarget===!0,St=Q.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let mt=0;mt<x.mipmaps.length;mt++)B.__webglFramebuffer[ht][mt]=n.createFramebuffer()}else B.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)B.__webglFramebuffer[ht]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(St)for(let ht=0,mt=Q.length;ht<mt;ht++){const Yt=i.get(Q[ht]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&Vt(E)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<Q.length;ht++){const mt=Q[ht];B.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Yt=a.convert(mt.format,mt.colorSpace),et=a.convert(mt.type),gt=w(mt.internalFormat,Yt,et,mt.colorSpace,E.isXRRenderTarget===!0),Rt=Gt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,gt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),at(B.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(j){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ct(n.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)yt(B.__webglFramebuffer[ht][mt],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else yt(B.__webglFramebuffer[ht],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ht=0,mt=Q.length;ht<mt;ht++){const Yt=Q[ht],et=i.get(Yt);e.bindTexture(n.TEXTURE_2D,et.__webglTexture),Ct(n.TEXTURE_2D,Yt),yt(B.__webglFramebuffer,E,Yt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(Yt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),Ct(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)yt(B.__webglFramebuffer[mt],E,x,n.COLOR_ATTACHMENT0,ht,mt);else yt(B.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,ht,0);m(x)&&p(ht),e.unbindTexture()}E.depthBuffer&&Nt(E)}function qt(E){const x=E.textures;for(let B=0,K=x.length;B<K;B++){const Q=x[B];if(m(Q)){const j=_(E),St=i.get(Q).__webglTexture;e.bindTexture(j,St),p(j),e.unbindTexture()}}}const ve=[],D=[];function je(E){if(E.samples>0){if(Vt(E)===!1){const x=E.textures,B=E.width,K=E.height;let Q=n.COLOR_BUFFER_BIT;const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(E),ht=x.length>1;if(ht)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Yt=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Yt,0)}n.blitFramebuffer(0,0,B,K,0,0,B,K,Q,n.NEAREST),l===!0&&(ve.length=0,D.length=0,ve.push(n.COLOR_ATTACHMENT0+mt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ve.push(j),D.push(j),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Yt=i.get(x[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,Yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Gt(E){return Math.min(s.maxSamples,E.samples)}function Vt(E){const x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function le(E,x){const B=E.colorSpace,K=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==ns&&B!==Xn&&(jt.getTransfer(B)===ne?(K!==rn||Q!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function Et(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=zt,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Vt}function V0(n,t){function e(i,s=Xn){let a;const o=jt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Mr)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sr)return n.UNSIGNED_SHORT_5_5_5_1;if(i===kc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cc)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Cs)return n.UNSIGNED_SHORT;if(i===xr)return n.INT;if(i===vi)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===es)return n.HALF_FLOAT;if(i===Pc)return n.ALPHA;if(i===Ic)return n.RGB;if(i===rn)return n.RGBA;if(i===Lc)return n.LUMINANCE;if(i===Nc)return n.LUMINANCE_ALPHA;if(i===Wi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===Dc)return n.RED;if(i===br)return n.RED_INTEGER;if(i===Uc)return n.RG;if(i===Er)return n.RG_INTEGER;if(i===Tr)return n.RGBA_INTEGER;if(i===va||i===_a||i===ya||i===wa)if(o===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===va)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===va)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Do||i===Uo||i===Oo||i===Fo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Do)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bo||i===zo||i===Ho)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Bo||i===zo)return o===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ho)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Go||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===$o||i===jo||i===Ko||i===Jo||i===Zo||i===Qo||i===tr||i===er)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Go)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$o)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ko)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qo)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===er)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xa||i===nr||i===ir)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===xa)return o===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ir)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Oc||i===sr||i===ar||i===or)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===xa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===sr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===or)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ji?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class W0 extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(r.matrix.fromArray(s.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,s.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(s.linearVelocity)):r.hasLinearVelocity=!1,s.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(s.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return r!==null&&(r.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class $0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Oe,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Nn({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new we(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j0 extends is{constructor(t,e){super();const i=this;let s=null,a=1,o=null,r="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new $0,m=e.getContextAttributes();let p=null,_=null;const w=[],y=[],P=new pt;let T=null;const A=new qe;A.viewport=new ie;const k=new qe;k.viewport=new ie;const b=[A,k],M=new W0;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=w[G];return Z===void 0&&(Z=new po,w[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=w[G];return Z===void 0&&(Z=new po,w[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=w[G];return Z===void 0&&(Z=new po,w[G]=Z),Z.getHandSpace()};function U(G){const Z=y.indexOf(G.inputSource);if(Z===-1)return;const yt=w[Z];yt!==void 0&&(yt.update(G.inputSource,G.frame,c||o),yt.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let G=0;G<w.length;G++){const Z=y[G];Z!==null&&(y[G]=null,w[G].disconnect(Z))}R=null,F=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,_=null,Zt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(s,e,Z),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new jn(d.framebufferWidth,d.framebufferHeight,{format:rn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,yt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?Zi:Wi,yt=m.stencil?Ji:vi);const kt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:a};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new jn(f.textureWidth,f.textureHeight,{format:rn,type:Ln,depthTexture:new Jc(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(r),Zt.setContext(s),Zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(G){for(let Z=0;Z<G.removed.length;Z++){const yt=G.removed[Z],at=y.indexOf(yt);at>=0&&(y[at]=null,w[at].disconnect(yt))}for(let Z=0;Z<G.added.length;Z++){const yt=G.added[Z];let at=y.indexOf(yt);if(at===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=y.length){y.push(yt),at=Nt;break}else if(y[Nt]===null){y[Nt]=yt,at=Nt;break}if(at===-1)break}const kt=w[at];kt&&kt.connect(yt)}}const W=new C,X=new C;function O(G,Z,yt){W.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);const at=W.distanceTo(X),kt=Z.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,zt=kt[14]/(kt[10]-1),pe=kt[14]/(kt[10]+1),qt=(kt[9]+1)/kt[5],ve=(kt[9]-1)/kt[5],D=(kt[8]-1)/kt[0],je=(Nt[8]+1)/Nt[0],Gt=zt*D,Vt=zt*je,Tt=at/(-D+je),le=Tt*-D;if(Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(le),G.translateZ(Tt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),kt[10]===-1)G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const Et=zt+Tt,E=pe+Tt,x=Gt-le,B=Vt+(at-le),K=qt*pe/E*Et,Q=ve*pe/E*Et;G.projectionMatrix.makePerspective(x,B,K,Q,Et,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function tt(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Z=G.near,yt=G.far;v.texture!==null&&(v.depthNear>0&&(Z=v.depthNear),v.depthFar>0&&(yt=v.depthFar)),M.near=k.near=A.near=Z,M.far=k.far=A.far=yt,(R!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,F=M.far),A.layers.mask=G.layers.mask|2,k.layers.mask=G.layers.mask|4,M.layers.mask=A.layers.mask|k.layers.mask;const at=G.parent,kt=M.cameras;tt(M,at);for(let Nt=0;Nt<kt.length;Nt++)tt(kt[Nt],at);kt.length===2?O(M,A,k):M.projectionMatrix.copy(A.projectionMatrix),it(G,M,at)};function it(G,Z,yt){yt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(yt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Rs*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let _t=null;function Ct(G,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let at=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let Nt=0;Nt<yt.length;Nt++){const zt=yt[Nt];let pe=null;if(d!==null)pe=d.getViewport(zt);else{const ve=u.getViewSubImage(f,zt);pe=ve.viewport,Nt===0&&(t.setRenderTargetTextures(_,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(_))}let qt=b[Nt];qt===void 0&&(qt=new qe,qt.layers.enable(Nt),qt.viewport=new ie,b[Nt]=qt),qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(pe.x,pe.y,pe.width,pe.height),Nt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(qt)}const kt=s.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,s.renderState)}}for(let yt=0;yt<w.length;yt++){const at=y[yt],kt=w[yt];at!==null&&kt!==void 0&&kt.update(at,Z,c||o)}_t&&_t(G,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Zt=new Kc;Zt.setAnimationLoop(Ct),this.setAnimationLoop=function(G){_t=G},this.dispose=function(){}}}const ni=new mn,K0=new ae;function J0(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Yc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,w,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),u(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,_,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),w=_.envMap,y=_.envMapRotation;w&&(m.envMap.value=w,ni.copy(y),ni.x*=-1,ni.y*=-1,ni.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ni)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Z0(n,t,e,i){let s={},a={},o=[];const r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){const y=w.program;i.uniformBlockBinding(_,y)}function c(_,w){let y=s[_.id];y===void 0&&(g(_),y=h(_),s[_.id]=y,_.addEventListener("dispose",m));const P=w.program;i.updateUBOMapping(_,P);const T=t.render.frame;a[_.id]!==T&&(f(_),a[_.id]=T)}function h(_){const w=u();_.__bindingPointIndex=w;const y=n.createBuffer(),P=_.__size,T=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function u(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const w=s[_.id],y=_.uniforms,P=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let T=0,A=y.length;T<A;T++){const k=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,M=k.length;b<M;b++){const R=k[b];if(d(R,T,b,P)===!0){const F=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let $=0;$<U.length;$++){const W=U[$],X=v(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+V,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(_,w,y,P){const T=_.value,A=w+"_"+y;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const k=P[A];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return P[A]=T,!0}else if(k.equals(T)===!1)return k.copy(T),!0}return!1}function g(_){const w=_.uniforms;let y=0;const P=16;for(let A=0,k=w.length;A<k;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,R=b.length;M<R;M++){const F=b[M],U=Array.isArray(F.value)?F.value:[F.value];for(let V=0,$=U.length;V<$;V++){const W=U[V],X=v(W),O=y%P,tt=O%X.boundary,it=O+tt;y+=tt,it!==0&&P-it<X.storage&&(y+=P-it),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const T=y%P;return T>0&&(y+=P-T),_.__size=y,_.__cache={},this}function v(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function m(_){const w=_.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},a={}}return{bind:l,update:c,dispose:p}}class Q0{constructor(t={}){const{canvas:e=zu(),context:i=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=$n,this.toneMappingExposure=1;const y=this;let P=!1,T=0,A=0,k=null,b=-1,M=null;const R=new ie,F=new ie;let U=null;const V=new It(0);let $=0,W=e.width,X=e.height,O=1,tt=null,it=null;const _t=new ie(0,0,W,X),Ct=new ie(0,0,W,X);let Zt=!1;const G=new Us;let Z=!1,yt=!1;const at=new ae,kt=new ae,Nt=new C,zt=new ie,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function ve(){return k===null?O:1}let D=i;function je(S,L){return e.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:a,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yr}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){const L="webgl2";if(D=je(L,S),D===null)throw je(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Vt,Tt,le,Et,E,x,B,K,Q,j,St,ht,mt,Yt,et,gt,Rt,Pt,vt,Wt,Ft,oe,I;function ct(){Gt=new sm(D),Gt.init(),Ft=new V0(D,Gt),Vt=new Zp(D,Gt,t,Ft),Tt=new z0(D,Gt),Vt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),le=new rm(D),Et=new E0,E=new G0(D,Gt,Tt,Et,Vt,Ft,le),x=new tm(y),B=new im(y),K=new fd(D),oe=new Kp(D,K),Q=new am(D,K,le,oe),j=new cm(D,Q,K,le),Pt=new lm(D,Vt,E),et=new Qp(Et),St=new b0(y,x,B,Gt,Vt,oe,et),ht=new J0(y,Et),mt=new A0,Yt=new L0(Gt),Rt=new jp(y,x,B,Tt,j,d,l),gt=new F0(y,j,Vt),I=new Z0(D,le,Vt,Tt),vt=new Jp(D,Gt,le),Wt=new om(D,Gt,le),le.programs=St.programs,y.capabilities=Vt,y.extensions=Gt,y.properties=Et,y.renderLists=mt,y.shadowMap=gt,y.state=Tt,y.info=le}ct();const q=new j0(y,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(S){S!==void 0&&(O=S,this.setSize(W,X,!1))},this.getSize=function(S){return S.set(W,X)},this.setSize=function(S,L,z=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,X=L,e.width=Math.floor(S*O),e.height=Math.floor(L*O),z===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(W*O,X*O).floor()},this.setDrawingBufferSize=function(S,L,z){W=S,X=L,O=z,e.width=Math.floor(S*z),e.height=Math.floor(L*z),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(_t)},this.setViewport=function(S,L,z,H){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,L,z,H),Tt.viewport(R.copy(_t).multiplyScalar(O).round())},this.getScissor=function(S){return S.copy(Ct)},this.setScissor=function(S,L,z,H){S.isVector4?Ct.set(S.x,S.y,S.z,S.w):Ct.set(S,L,z,H),Tt.scissor(F.copy(Ct).multiplyScalar(O).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(S){Tt.setScissorTest(Zt=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(S=!0,L=!0,z=!0){let H=0;if(S){let N=!1;if(k!==null){const nt=k.texture.format;N=nt===Tr||nt===Er||nt===br}if(N){const nt=k.texture.type,dt=nt===Ln||nt===vi||nt===Cs||nt===Ji||nt===Mr||nt===Sr,wt=Rt.getClearColor(),xt=Rt.getClearAlpha(),Lt=wt.r,Ut=wt.g,Mt=wt.b;dt?(g[0]=Lt,g[1]=Ut,g[2]=Mt,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=Lt,v[1]=Ut,v[2]=Mt,v[3]=xt,D.clearBufferiv(D.COLOR,0,v))}else H|=D.COLOR_BUFFER_BIT}L&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Yt.dispose(),Et.dispose(),x.dispose(),B.dispose(),j.dispose(),oe.dispose(),I.dispose(),St.dispose(),q.dispose(),q.removeEventListener("sessionstart",Xr),q.removeEventListener("sessionend",qr),Kn.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=le.autoReset,L=gt.enabled,z=gt.autoUpdate,H=gt.needsUpdate,N=gt.type;ct(),le.autoReset=S,gt.enabled=L,gt.autoUpdate=z,gt.needsUpdate=H,gt.type=N}function ut(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Dt(S){const L=S.target;L.removeEventListener("dispose",Dt),me(L)}function me(S){Ce(S),Et.remove(S)}function Ce(S){const L=Et.get(S).programs;L!==void 0&&(L.forEach(function(z){St.releaseProgram(z)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,z,H,N,nt){L===null&&(L=pe);const dt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Nh(S,L,z,H,N);Tt.setMaterial(H,dt);let xt=z.index,Lt=1;if(H.wireframe===!0){if(xt=Q.getWireframeAttribute(z),xt===void 0)return;Lt=2}const Ut=z.drawRange,Mt=z.attributes.position;let Kt=Ut.start*Lt,re=(Ut.start+Ut.count)*Lt;nt!==null&&(Kt=Math.max(Kt,nt.start*Lt),re=Math.min(re,(nt.start+nt.count)*Lt)),xt!==null?(Kt=Math.max(Kt,0),re=Math.min(re,xt.count)):Mt!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,Mt.count));const ce=re-Kt;if(ce<0||ce===1/0)return;oe.setup(N,H,wt,z,xt);let Be,Qt=vt;if(xt!==null&&(Be=K.get(xt),Qt=Wt,Qt.setIndex(Be)),N.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*ve()),Qt.setMode(D.LINES)):Qt.setMode(D.TRIANGLES);else if(N.isLine){let bt=H.linewidth;bt===void 0&&(bt=1),Tt.setLineWidth(bt*ve()),N.isLineSegments?Qt.setMode(D.LINES):N.isLineLoop?Qt.setMode(D.LINE_LOOP):Qt.setMode(D.LINE_STRIP)}else N.isPoints?Qt.setMode(D.POINTS):N.isSprite&&Qt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,yn=N._multiDrawCounts,te=N._multiDrawCount,tn=xt?K.get(xt).bytesPerElement:1,Mi=Et.get(H).currentProgram.getUniforms();for(let Ve=0;Ve<te;Ve++)Mi.setValue(D,"_gl_DrawID",Ve),Qt.render(bt[Ve]/tn,yn[Ve])}else if(N.isInstancedMesh)Qt.renderInstances(Kt,ce,N.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,yn=Math.min(z.instanceCount,bt);Qt.renderInstances(Kt,ce,yn)}else Qt.render(Kt,ce)};function ee(S,L,z){S.transparent===!0&&S.side===De&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,Xs(S,L,z),S.side=In,S.needsUpdate=!0,Xs(S,L,z),S.side=De):Xs(S,L,z)}this.compile=function(S,L,z=null){z===null&&(z=S),p=Yt.get(z),p.init(L),w.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==z&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const wt=nt[dt];ee(wt,z,N),H.add(wt)}else ee(nt,z,N),H.add(nt)}),w.pop(),p=null,H},this.compileAsync=function(S,L,z=null){const H=this.compile(S,L,z);return new Promise(N=>{function nt(){if(H.forEach(function(dt){Et.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){N(S);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Qe=null;function _n(S){Qe&&Qe(S)}function Xr(){Kn.stop()}function qr(){Kn.start()}const Kn=new Kc;Kn.setAnimationLoop(_n),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(S){Qe=S,q.setAnimationLoop(S),S===null?Kn.stop():Kn.start()},q.addEventListener("sessionstart",Xr),q.addEventListener("sessionend",qr),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(L),L=q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,L,k),p=Yt.get(S,w.length),p.init(L),w.push(p),kt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),G.setFromProjectionMatrix(kt),yt=this.localClippingEnabled,Z=et.init(this.clippingPlanes,yt),m=mt.get(S,_.length),m.init(),_.push(m),q.enabled===!0&&q.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&Ba(nt,L,-1/0,y.sortObjects)}Ba(S,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(tt,it),qt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,qt&&Rt.addToRenderList(m,S),this.info.render.frame++,Z===!0&&et.beginShadows();const z=p.state.shadowsArray;gt.render(z,S,L),Z===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(p.setupLights(),L.isArrayCamera){const nt=L.cameras;if(N.length>0)for(let dt=0,wt=nt.length;dt<wt;dt++){const xt=nt[dt];$r(H,N,S,xt)}qt&&Rt.render(S);for(let dt=0,wt=nt.length;dt<wt;dt++){const xt=nt[dt];Yr(m,S,xt,xt.viewport)}}else N.length>0&&$r(H,N,S,L),qt&&Rt.render(S),Yr(m,S,L);k!==null&&(E.updateMultisampleRenderTarget(k),E.updateRenderTargetMipmap(k)),S.isScene===!0&&S.onAfterRender(y,S,L),oe.resetDefaultState(),b=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],Z===!0&&et.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ba(S,L,z,H){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||G.intersectsSprite(S)){H&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(kt);const dt=j.update(S),wt=S.material;wt.visible&&m.push(S,dt,wt,z,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||G.intersectsObject(S))){const dt=j.update(S),wt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),zt.copy(dt.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(kt)),Array.isArray(wt)){const xt=dt.groups;for(let Lt=0,Ut=xt.length;Lt<Ut;Lt++){const Mt=xt[Lt],Kt=wt[Mt.materialIndex];Kt&&Kt.visible&&m.push(S,dt,Kt,z,zt.z,Mt)}}else wt.visible&&m.push(S,dt,wt,z,zt.z,null)}}const nt=S.children;for(let dt=0,wt=nt.length;dt<wt;dt++)Ba(nt[dt],L,z,H)}function Yr(S,L,z,H){const N=S.opaque,nt=S.transmissive,dt=S.transparent;p.setupLightsView(z),Z===!0&&et.setGlobalState(y.clippingPlanes,z),H&&Tt.viewport(R.copy(H)),N.length>0&&Ws(N,L,z),nt.length>0&&Ws(nt,L,z),dt.length>0&&Ws(dt,L,z),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function $r(S,L,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new jn(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?es:Ln,minFilter:pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[H.id],dt=H.viewport||R;nt.setSize(dt.z,dt.w);const wt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(V),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),qt&&Rt.render(z);const xt=y.toneMapping;y.toneMapping=$n;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Z===!0&&et.setGlobalState(y.clippingPlanes,H),Ws(S,z,H),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Mt=0,Kt=L.length;Mt<Kt;Mt++){const re=L[Mt],ce=re.object,Be=re.geometry,Qt=re.material,bt=re.group;if(Qt.side===De&&ce.layers.test(H.layers)){const yn=Qt.side;Qt.side=He,Qt.needsUpdate=!0,jr(ce,z,H,Be,Qt,bt),Qt.side=yn,Qt.needsUpdate=!0,Ut=!0}}Ut===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}y.setRenderTarget(wt),y.setClearColor(V,$),Lt!==void 0&&(H.viewport=Lt),y.toneMapping=xt}function Ws(S,L,z){const H=L.isScene===!0?L.overrideMaterial:null;for(let N=0,nt=S.length;N<nt;N++){const dt=S[N],wt=dt.object,xt=dt.geometry,Lt=H===null?dt.material:H,Ut=dt.group;wt.layers.test(z.layers)&&jr(wt,L,z,xt,Lt,Ut)}}function jr(S,L,z,H,N,nt){S.onBeforeRender(y,L,z,H,N,nt),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,L,z,H,S,nt),N.transparent===!0&&N.side===De&&N.forceSinglePass===!1?(N.side=He,N.needsUpdate=!0,y.renderBufferDirect(z,L,H,N,S,nt),N.side=In,N.needsUpdate=!0,y.renderBufferDirect(z,L,H,N,S,nt),N.side=De):y.renderBufferDirect(z,L,H,N,S,nt),S.onAfterRender(y,L,z,H,N,nt)}function Xs(S,L,z){L.isScene!==!0&&(L=pe);const H=Et.get(S),N=p.state.lights,nt=p.state.shadowsArray,dt=N.state.version,wt=St.getParameters(S,N.state,nt,L,z),xt=St.getProgramCacheKey(wt);let Lt=H.programs;H.environment=S.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Dt),Lt=new Map,H.programs=Lt);let Ut=Lt.get(xt);if(Ut!==void 0){if(H.currentProgram===Ut&&H.lightsStateVersion===dt)return Jr(S,wt),Ut}else wt.uniforms=St.getUniforms(S),S.onBeforeCompile(wt,y),Ut=St.acquireProgram(wt,xt),Lt.set(xt,Ut),H.uniforms=wt.uniforms;const Mt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=et.uniform),Jr(S,wt),H.needsLights=Uh(S),H.lightsStateVersion=dt,H.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ut,H.uniformsList=null,Ut}function Kr(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Ma.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function Jr(S,L){const z=Et.get(S);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Nh(S,L,z,H,N){L.isScene!==!0&&(L=pe),E.resetTextureUnits();const nt=L.fog,dt=H.isMeshStandardMaterial?L.environment:null,wt=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ns,xt=(H.isMeshStandardMaterial?B:x).get(H.envMap||dt),Lt=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ut=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!z.morphAttributes.position,Kt=!!z.morphAttributes.normal,re=!!z.morphAttributes.color;let ce=$n;H.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ce=y.toneMapping);const Be=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qt=Be!==void 0?Be.length:0,bt=Et.get(H),yn=p.state.lights;if(Z===!0&&(yt===!0||S!==M)){const Ke=S===M&&H.id===b;et.setState(H,S,Ke)}let te=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==yn.state.version||bt.outputColorSpace!==wt||N.isBatchedMesh&&bt.batching===!1||!N.isBatchedMesh&&bt.batching===!0||N.isBatchedMesh&&bt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&bt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&bt.instancing===!1||!N.isInstancedMesh&&bt.instancing===!0||N.isSkinnedMesh&&bt.skinning===!1||!N.isSkinnedMesh&&bt.skinning===!0||N.isInstancedMesh&&bt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&bt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&bt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&bt.instancingMorph===!1&&N.morphTexture!==null||bt.envMap!==xt||H.fog===!0&&bt.fog!==nt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==et.numPlanes||bt.numIntersection!==et.numIntersection)||bt.vertexAlphas!==Lt||bt.vertexTangents!==Ut||bt.morphTargets!==Mt||bt.morphNormals!==Kt||bt.morphColors!==re||bt.toneMapping!==ce||bt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,bt.__version=H.version);let tn=bt.currentProgram;te===!0&&(tn=Xs(H,L,N));let Mi=!1,Ve=!1,cs=!1;const he=tn.getUniforms(),dn=bt.uniforms;if(Tt.useProgram(tn.program)&&(Mi=!0,Ve=!0,cs=!0),H.id!==b&&(b=H.id,Ve=!0),Mi||M!==S){Tt.buffers.depth.getReversed()?(at.copy(S.projectionMatrix),Gu(at),Vu(at),he.setValue(D,"projectionMatrix",at)):he.setValue(D,"projectionMatrix",S.projectionMatrix),he.setValue(D,"viewMatrix",S.matrixWorldInverse);const Un=he.map.cameraPosition;Un!==void 0&&Un.setValue(D,Nt.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&he.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ve=!0,cs=!0)}if(N.isSkinnedMesh){he.setOptional(D,N,"bindMatrix"),he.setOptional(D,N,"bindMatrixInverse");const Ke=N.skeleton;Ke&&(Ke.boneTexture===null&&Ke.computeBoneTexture(),he.setValue(D,"boneTexture",Ke.boneTexture,E))}N.isBatchedMesh&&(he.setOptional(D,N,"batchingTexture"),he.setValue(D,"batchingTexture",N._matricesTexture,E),he.setOptional(D,N,"batchingIdTexture"),he.setValue(D,"batchingIdTexture",N._indirectTexture,E),he.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(D,"batchingColorTexture",N._colorsTexture,E));const hs=z.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Pt.update(N,z,tn),(Ve||bt.receiveShadow!==N.receiveShadow)&&(bt.receiveShadow=N.receiveShadow,he.setValue(D,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(dn.envMap.value=xt,dn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(dn.envMapIntensity.value=L.environmentIntensity),Ve&&(he.setValue(D,"toneMappingExposure",y.toneMappingExposure),bt.needsLights&&Dh(dn,cs),nt&&H.fog===!0&&ht.refreshFogUniforms(dn,nt),ht.refreshMaterialUniforms(dn,H,O,X,p.state.transmissionRenderTarget[S.id]),Ma.upload(D,Kr(bt),dn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ma.upload(D,Kr(bt),dn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&he.setValue(D,"center",N.center),he.setValue(D,"modelViewMatrix",N.modelViewMatrix),he.setValue(D,"normalMatrix",N.normalMatrix),he.setValue(D,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ke=H.uniformsGroups;for(let Un=0,On=Ke.length;Un<On;Un++){const Zr=Ke[Un];I.update(Zr,tn),I.bind(Zr,tn)}}return tn}function Dh(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function Uh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(S,L,z){Et.get(S.texture).__webglTexture=L,Et.get(S.depthTexture).__webglTexture=z;const H=Et.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const z=Et.get(S);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,z=0){k=S,T=L,A=z;let H=!0,N=null,nt=!1,dt=!1;if(S){const xt=Et.get(S);if(xt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(xt.__hasExternalTextures)E.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&Et.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(dt=!0);const Ut=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ut[L])?N=Ut[L][z]:N=Ut[L],nt=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Ut)?N=Ut[z]:N=Ut,R.copy(S.viewport),F.copy(S.scissor),U=S.scissorTest}else R.copy(_t).multiplyScalar(O).floor(),F.copy(Ct).multiplyScalar(O).floor(),U=Zt;if(Tt.bindFramebuffer(D.FRAMEBUFFER,N)&&H&&Tt.drawBuffers(S,N),Tt.viewport(R),Tt.scissor(F),Tt.setScissorTest(U),nt){const xt=Et.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,xt.__webglTexture,z)}else if(dt){const xt=Et.get(S.texture),Lt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,z||0,Lt)}b=-1},this.readRenderTargetPixels=function(S,L,z,H,N,nt,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(wt=wt[dt]),wt){Tt.bindFramebuffer(D.FRAMEBUFFER,wt);try{const xt=S.texture,Lt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-H&&z>=0&&z<=S.height-N&&D.readPixels(L,z,H,N,Ft.convert(Lt),Ft.convert(Ut),nt)}finally{const xt=k!==null?Et.get(k).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,L,z,H,N,nt,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(wt=wt[dt]),wt){const xt=S.texture,Lt=xt.format,Ut=xt.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-H&&z>=0&&z<=S.height-N){Tt.bindFramebuffer(D.FRAMEBUFFER,wt);const Mt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(L,z,H,N,Ft.convert(Lt),Ft.convert(Ut),0);const Kt=k!==null?Et.get(k).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Kt);const re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hu(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Mt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(Mt),D.deleteSync(re),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,z=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-z),N=Math.floor(S.image.width*H),nt=Math.floor(S.image.height*H),dt=L!==null?L.x:0,wt=L!==null?L.y:0;E.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,dt,wt,N,nt),Tt.unbindTexture()},this.copyTextureToTexture=function(S,L,z=null,H=null,N=0){S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],L=arguments[2],N=arguments[3]||0,z=null);let nt,dt,wt,xt,Lt,Ut,Mt,Kt,re;const ce=S.isCompressedTexture?S.mipmaps[N]:S.image;z!==null?(nt=z.max.x-z.min.x,dt=z.max.y-z.min.y,wt=z.isBox3?z.max.z-z.min.z:1,xt=z.min.x,Lt=z.min.y,Ut=z.isBox3?z.min.z:0):(nt=ce.width,dt=ce.height,wt=ce.depth||1,xt=0,Lt=0,Ut=0),H!==null?(Mt=H.x,Kt=H.y,re=H.z):(Mt=0,Kt=0,re=0);const Be=Ft.convert(L.format),Qt=Ft.convert(L.type);let bt;L.isData3DTexture?(E.setTexture3D(L,0),bt=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(E.setTexture2DArray(L,0),bt=D.TEXTURE_2D_ARRAY):(E.setTexture2D(L,0),bt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const yn=D.getParameter(D.UNPACK_ROW_LENGTH),te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),tn=D.getParameter(D.UNPACK_SKIP_PIXELS),Mi=D.getParameter(D.UNPACK_SKIP_ROWS),Ve=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const cs=S.isDataArrayTexture||S.isData3DTexture,he=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const dn=Et.get(S),hs=Et.get(L),Ke=Et.get(dn.__renderTarget),Un=Et.get(hs.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let On=0;On<wt;On++)cs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,N,Ut+On),S.isDepthTexture?(he&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.get(L).__webglTexture,N,re+On),D.blitFramebuffer(xt,Lt,nt,dt,Mt,Kt,nt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):he?D.copyTexSubImage3D(bt,N,Mt,Kt,re+On,xt,Lt,nt,dt):D.copyTexSubImage2D(bt,N,Mt,Kt,re+On,xt,Lt,nt,dt);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(bt,N,Mt,Kt,re,nt,dt,wt,Be,Qt,ce.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,N,Mt,Kt,re,nt,dt,wt,Be,ce.data):D.texSubImage3D(bt,N,Mt,Kt,re,nt,dt,wt,Be,Qt,ce):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Mt,Kt,nt,dt,Be,Qt,ce.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Mt,Kt,ce.width,ce.height,Be,ce.data):D.texSubImage2D(D.TEXTURE_2D,N,Mt,Kt,nt,dt,Be,Qt,ce);D.pixelStorei(D.UNPACK_ROW_LENGTH,yn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve),N===0&&L.generateMipmaps&&D.generateMipmap(bt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,L,z=null,H=null,N=0){return S.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,S=arguments[2],L=arguments[3],N=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,z,H,N)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){T=0,A=0,k=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Da{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new Da(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yi extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wi extends Oe{constructor(t,e,i,s,a,o,r,l,c){super(t,e,i,s,a,o,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let o;e?o=e:o=t*i[a-1];let r=0,l=a-1,c;for(;r<=l;)if(s=Math.floor(r+(l-r)/2),c=i[s]-o,c<0)r=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(a-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const o=this.getPoint(s),r=this.getPoint(a),l=e||(o.isVector2?new pt:new C);return l.copy(r).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new C,s=[],a=[],o=[],r=new C,l=new ae;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new C)}a[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),r.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],r),o[0].crossVectors(s[0],a[0]);for(let d=1;d<=t;d++){if(a[d]=a[d-1].clone(),o[d]=o[d-1].clone(),r.crossVectors(s[d-1],s[d]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(be(s[d-1].dot(s[d]),-1,1));a[d].applyMatrix4(l.makeRotationAxis(r,g))}o[d].crossVectors(s[d],a[d])}if(e===!0){let d=Math.acos(be(a[0].dot(a[t]),-1,1));d/=t,s[0].dot(r.crossVectors(a[0],a[t]))>0&&(d=-d);for(let g=1;g<=t;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pr extends gn{constructor(t=0,e=0,i=1,s=1,a=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(t,e=new pt){const i=e,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(o?a=0:a=s),this.aClockwise===!0&&!o&&(a===s?a=-s:a=a-s);const r=this.aStartAngle+t*a;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tg extends Pr{constructor(t,e,i,s,a,o){super(t,e,i,i,s,a,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ir(){let n=0,t=0,e=0,i=0;function s(a,o,r,l){n=a,t=r,e=-3*a+3*o-2*r-l,i=2*a-2*o+r+l}return{initCatmullRom:function(a,o,r,l,c){s(o,r,c*(r-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,r,l,c,h,u){let f=(o-a)/c-(r-a)/(c+h)+(r-o)/h,d=(r-o)/h-(l-o)/(h+u)+(l-r)/u;f*=h,d*=h,s(o,r,f,d)},calc:function(a){const o=a*a,r=o*a;return n+t*a+e*o+i*r}}}const fa=new C,mo=new Ir,go=new Ir,vo=new Ir;class eg extends gn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,a=s.length,o=(a-(this.closed?0:1))*t;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/a)+1)*a:l===0&&r===a-1&&(r=a-2,l=1);let c,h;this.closed||r>0?c=s[(r-1)%a]:(fa.subVectors(s[0],s[1]).add(s[0]),c=fa);const u=s[r%a],f=s[(r+1)%a];if(this.closed||r+2<a?h=s[(r+2)%a]:(fa.subVectors(s[a-1],s[a-2]).add(s[a-1]),h=fa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),mo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),go.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(mo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),go.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(mo.calc(l),go.calc(l),vo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jl(n,t,e,i,s){const a=(i-t)*.5,o=(s-e)*.5,r=n*n,l=n*r;return(2*e-2*i+a+o)*l+(-3*e+3*i-2*a-o)*r+a*n+e}function ng(n,t){const e=1-n;return e*e*t}function ig(n,t){return 2*(1-n)*n*t}function sg(n,t){return n*n*t}function Ss(n,t,e,i){return ng(n,t)+ig(n,e)+sg(n,i)}function ag(n,t){const e=1-n;return e*e*e*t}function og(n,t){const e=1-n;return 3*e*e*n*t}function rg(n,t){return 3*(1-n)*n*n*t}function lg(n,t){return n*n*n*t}function bs(n,t,e,i,s){return ag(n,t)+og(n,e)+rg(n,i)+lg(n,s)}class nh extends gn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(bs(t,s.x,a.x,o.x,r.x),bs(t,s.y,a.y,o.y,r.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cg extends gn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,a=this.v1,o=this.v2,r=this.v3;return i.set(bs(t,s.x,a.x,o.x,r.x),bs(t,s.y,a.y,o.y,r.y),bs(t,s.z,a.z,o.z,r.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends gn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hg extends gn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends gn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ss(t,s.x,a.x,o.x),Ss(t,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ug extends gn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,a=this.v1,o=this.v2;return i.set(Ss(t,s.x,a.x,o.x),Ss(t,s.y,a.y,o.y),Ss(t,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,s=this.points,a=(s.length-1)*t,o=Math.floor(a),r=a-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Jl(r,l.x,c.x,h.x,u.x),Jl(r,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Zl=Object.freeze({__proto__:null,ArcCurve:tg,CatmullRomCurve3:eg,CubicBezierCurve:nh,CubicBezierCurve3:cg,EllipseCurve:Pr,LineCurve:ih,LineCurve3:hg,QuadraticBezierCurve:sh,QuadraticBezierCurve3:ug,SplineCurve:ah});class dg extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const o=s[a]-i,r=this.curves[a],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const o=a[s],r=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(r);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Zl[s.type]().fromJSON(s))}return this}}class fg extends dg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ih(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new sh(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,o){const r=new nh(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(a,o));return this.curves.push(r),this.currentPoint.set(a,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new ah(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,o){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+r,e+l,i,s,a,o),this}absarc(t,e,i,s,a,o){return this.absellipse(t,e,i,i,s,a,o),this}ellipse(t,e,i,s,a,o,r,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,a,o,r,l),this}absellipse(t,e,i,s,a,o,r,l){const c=new Pr(t,e,i,s,a,o,r,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Lr extends Ge{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const a=[],o=[],r=[],l=[],c=[],h=1/e,u=new C,f=new pt,d=new C,g=new C,v=new C;let m=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let _=0;_<=e;_++){const w=i+_*h*s,y=Math.sin(w),P=Math.cos(w);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*y,u.y=t[T].y,u.z=t[T].x*P,o.push(u.x,u.y,u.z),f.x=_/e,f.y=T/(t.length-1),r.push(f.x,f.y);const A=l[3*T+0]*y,k=l[3*T+1],b=l[3*T+0]*P;c.push(A,k,b)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){const y=w+_*t.length,P=y,T=y+t.length,A=y+t.length+1,k=y+1;a.push(P,T,k),a.push(A,k,T)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("uv",new fe(r,2)),this.setAttribute("normal",new fe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.points,t.segments,t.phiStart,t.phiLength)}}class Ca extends Lr{constructor(t=1,e=1,i=4,s=8){const a=new fg;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Ca(t.radius,t.length,t.capSegments,t.radialSegments)}}class Os extends Ge{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],o=[],r=[],l=[],c=new C,h=new pt;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class cn extends Ge{constructor(t=1,e=1,i=1,s=32,a=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:r,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=i/2;let p=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function _(){const y=new C,P=new C;let T=0;const A=(e-t)/i;for(let k=0;k<=a;k++){const b=[],M=k/a,R=M*(e-t)+t;for(let F=0;F<=s;F++){const U=F/s,V=U*l+r,$=Math.sin(V),W=Math.cos(V);P.x=R*$,P.y=-M*i+m,P.z=R*W,u.push(P.x,P.y,P.z),y.set($,A,W).normalize(),f.push(y.x,y.y,y.z),d.push(U,1-M),b.push(g++)}v.push(b)}for(let k=0;k<s;k++)for(let b=0;b<a;b++){const M=v[b][k],R=v[b+1][k],F=v[b+1][k+1],U=v[b][k+1];(t>0||b!==0)&&(h.push(M,R,U),T+=3),(e>0||b!==a-1)&&(h.push(R,F,U),T+=3)}c.addGroup(p,T,0),p+=T}function w(y){const P=g,T=new pt,A=new C;let k=0;const b=y===!0?t:e,M=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const R=g;for(let F=0;F<=s;F++){const V=F/s*l+r,$=Math.cos(V),W=Math.sin(V);A.x=b*W,A.y=m*M,A.z=b*$,u.push(A.x,A.y,A.z),f.push(0,M,0),T.x=$*.5+.5,T.y=W*.5*M+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){const U=P+F,V=R+F;y===!0?h.push(V,V+1,U):h.push(V+1,V,U),k+=3}c.addGroup(p,k,y===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fs extends Ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const a=[],o=[];r(s),c(i),h(),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(a.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const w=new C,y=new C,P=new C;for(let T=0;T<e.length;T+=3)d(e[T+0],w),d(e[T+1],y),d(e[T+2],P),l(w,y,P,_)}function l(_,w,y,P){const T=P+1,A=[];for(let k=0;k<=T;k++){A[k]=[];const b=_.clone().lerp(y,k/T),M=w.clone().lerp(y,k/T),R=T-k;for(let F=0;F<=R;F++)F===0&&k===T?A[k][F]=b:A[k][F]=b.clone().lerp(M,F/R)}for(let k=0;k<T;k++)for(let b=0;b<2*(T-k)-1;b++){const M=Math.floor(b/2);b%2===0?(f(A[k][M+1]),f(A[k+1][M]),f(A[k][M])):(f(A[k][M+1]),f(A[k+1][M+1]),f(A[k+1][M]))}}function c(_){const w=new C;for(let y=0;y<a.length;y+=3)w.x=a[y+0],w.y=a[y+1],w.z=a[y+2],w.normalize().multiplyScalar(_),a[y+0]=w.x,a[y+1]=w.y,a[y+2]=w.z}function h(){const _=new C;for(let w=0;w<a.length;w+=3){_.x=a[w+0],_.y=a[w+1],_.z=a[w+2];const y=m(_)/2/Math.PI+.5,P=p(_)/Math.PI+.5;o.push(y,1-P)}g(),u()}function u(){for(let _=0;_<o.length;_+=6){const w=o[_+0],y=o[_+2],P=o[_+4],T=Math.max(w,y,P),A=Math.min(w,y,P);T>.9&&A<.1&&(w<.2&&(o[_+0]+=1),y<.2&&(o[_+2]+=1),P<.2&&(o[_+4]+=1))}}function f(_){a.push(_.x,_.y,_.z)}function d(_,w){const y=_*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){const _=new C,w=new C,y=new C,P=new C,T=new pt,A=new pt,k=new pt;for(let b=0,M=0;b<a.length;b+=9,M+=6){_.set(a[b+0],a[b+1],a[b+2]),w.set(a[b+3],a[b+4],a[b+5]),y.set(a[b+6],a[b+7],a[b+8]),T.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),k.set(o[M+4],o[M+5]),P.copy(_).add(w).add(y).divideScalar(3);const R=m(P);v(T,M+0,_,R),v(A,M+2,w,R),v(k,M+4,y,R)}}function v(_,w,y,P){P<0&&_.x===1&&(o[w]=_.x-1),y.x===0&&y.z===0&&(o[w]=P/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.vertices,t.indices,t.radius,t.details)}}class Ua extends Fs{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ua(t.radius,t.detail)}}class Es extends Fs{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Es(t.radius,t.detail)}}class Ne extends Ge{constructor(t=1,e=32,i=16,s=0,a=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:a,thetaStart:o,thetaLength:r},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+r,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const _=[],w=p/i;let y=0;p===0&&o===0?y=.5/e:p===i&&l===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const T=P/e;u.x=-t*Math.cos(s+T*a)*Math.sin(o+w*r),u.y=t*Math.cos(o+w*r),u.z=t*Math.sin(s+T*a)*Math.sin(o+w*r),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+y,1-w),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<e;_++){const w=h[p][_+1],y=h[p][_],P=h[p+1][_],T=h[p+1][_+1];(p!==0||o>0)&&d.push(w,y,T),(p!==i-1||l<Math.PI)&&d.push(y,P,T)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Nr extends Fs{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nr(t.radius,t.detail)}}class os extends Ge{constructor(t=1,e=.4,i=12,s=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:a},i=Math.floor(i),s=Math.floor(s);const o=[],r=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const v=g/s*a,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),r.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const v=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,_=(s+1)*d+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class de extends Ds{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Dr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class oh extends Dr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _o=new ae,Ql=new C,tc=new C;class rh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),_o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ec=new ae,ms=new C,yo=new C;class pg extends rh{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),i.position.copy(ms),yo.copy(i.position),yo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(yo),i.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),ec.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class xi extends Dr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class mg extends rh{constructor(){super(new Rr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gg extends Dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const nc=new ae;class vg{constructor(t,e,i=0,s=1/0){this.ray=new Vc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Cr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nc),this}intersectObject(t,e=!0,i=[]){return lr(t,this,i,e),i.sort(ic),i}intersectObjects(t,e=!0,i=[]){for(let s=0,a=t.length;s<a;s++)lr(t[s],this,i,e);return i.sort(ic),i}}function ic(n,t){return n.distance-t.distance}function lr(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const a=n.children;for(let o=0,r=a.length;o<r;o++)lr(a[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yr);const _g=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,yg=`
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 res;
uniform float amount;
uniform float glitch;
uniform float time;
uniform float exposure;
uniform float bloom;
uniform vec3 warm;
uniform vec3 cool;
varying vec2 vUv;

// ACES filmic approximation (Narkowicz), on linear color.
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }

// Twelve taps on two rings, keeping only what's brighter than the room.
vec3 glow(vec2 uv) {
  vec3 sum = vec3(0.0);
  vec2 px = 1.0 / res;
  for (int i = 0; i < 12; i++) {
    float a = float(i) * 0.5236;
    float r = (i < 6 ? 5.0 : 11.0) * (res.y / 540.0);
    vec3 s = texture2D(tDiffuse, uv + vec2(cos(a), sin(a)) * px * r).rgb * exposure;
    sum += max(s - 0.85, 0.0);
  }
  return sum / 12.0;
}

float bayer2(vec2 a) { a = floor(a); return fract(a.x / 2.0 + a.y * a.y * 0.75); }
float bayer4(vec2 a) { return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float hash(float n) { return fract(sin(n) * 43758.5453); }

void main() {
  vec2 uv = vUv;
  if (glitch > 0.001) {
    float band = floor(uv.y * 30.0);
    float h = hash(band * 13.7 + floor(time * 24.0));
    if (h < glitch * 0.6) uv.x += (hash(band + floor(time * 30.0)) - 0.5) * 0.12 * glitch;
  }
  vec3 c = texture2D(tDiffuse, uv).rgb;
  if (glitch > 0.001) c.r = texture2D(tDiffuse, uv + vec2(0.006 * glitch, 0.0)).r;
  c *= exposure;
  c += glow(uv) * bloom;
  c = aces(c);
  c = pow(max(c, 0.0), vec3(1.0 / 2.2));
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  // split tone: shadows lean cool, highlights lean warm
  c *= mix(cool, warm, smoothstep(0.15, 0.75, l));
  c += (hash(dot(floor(vUv * res), vec2(1.0, 157.0)) + floor(time * 24.0)) - 0.5) * 0.025;
  c = mix(c, vec3(l), amount * 0.5);
  c = mix(c, c * vec3(1.0, 0.93, 0.9), amount);
  c *= 1.0 - amount * 0.25;
  float levels = mix(256.0, 7.0, amount);
  float d = bayer4(floor(uv * res)) - 0.5;
  c = floor(c * levels + 0.5 + d * amount) / levels;
  vec2 q = vUv - 0.5;
  c *= 1.0 - dot(q, q) * (0.35 + amount * 1.1);
  gl_FragColor = vec4(c, 1.0);
}
`;class wg{constructor(t){this.renderer=t,this.amount=0,this.target=0,this.glitch=0,this.time=0,this.w=1,this.h=1,this.rt=new jn(1,1,{minFilter:$e,magFilter:$e,type:es}),this.mat=new Nn({uniforms:{tDiffuse:{value:this.rt.texture},res:{value:new pt(1,1)},amount:{value:0},glitch:{value:0},time:{value:0},exposure:{value:1.25},bloom:{value:1.4},warm:{value:new C(1.04,1,.94)},cool:{value:new C(.93,.98,1.06)}},vertexShader:_g,fragmentShader:yg,depthTest:!1,depthWrite:!1}),this.quadScene=new yi,this.quadCam=new Rr(-1,1,1,-1,0,1),this.quadScene.add(new lt(new we(2,2),this.mat))}setSize(t,e){this.w=t,this.h=e,this._fitTarget()}_fitTarget(){const t=this.h*this.renderer.getPixelRatio(),e=Math.exp(Bu.lerp(Math.log(t),Math.log(240),this.amount)),i=Math.max(120,Math.round(e/8)*8),s=Math.max(160,Math.round(i*this.w/this.h));(s!==this.rt.width||i!==this.rt.height)&&(this.rt.setSize(s,i),this.mat.uniforms.res.value.set(s,i))}grade({exposure:t=1.25,bloom:e=1.4,warm:i="#fff4e6",cool:s="#e6f0ff"}={}){const a=this.mat.uniforms;a.exposure.value=t,a.bloom.value=e;const o=(r,l)=>{const c=new It(r),h=(c.r+c.g+c.b)/3;l.set(c.r/h,c.g/h,c.b/h)};o(i,a.warm.value),o(s,a.cool.value)}update(t){this.amount+=(this.target-this.amount)*Math.min(1,t*1.5),this.glitch=Math.max(0,this.glitch-t*1.6),this.time+=t,this._fitTarget()}render(t,e){const i=this.renderer,s=this.mat.uniforms;s.amount.value=this.amount,s.glitch.value=this.glitch,s.time.value=this.time,i.setRenderTarget(this.rt),i.render(t,e),i.setRenderTarget(null),i.render(this.quadScene,this.quadCam)}}const xg=n=>{let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}},ue=(n,t=1)=>`rgba(${n|0},${n|0},${n|0},${t})`,Mg={wood:[.9,128,(n,t,e)=>{const s=t/4;for(let a=0;a<4;a++){const o=214+e()*34;n.fillStyle=ue(o),n.fillRect(0,a*s,t,s);for(let r=0;r<9;r++){n.strokeStyle=ue(o-30-e()*20,.35),n.lineWidth=1;const l=a*s+2+e()*(s-4);n.beginPath(),n.moveTo(0,l),n.bezierCurveTo(t*.3,l+(e()-.5)*4,t*.6,l+(e()-.5)*4,t,l+(e()-.5)*2),n.stroke()}n.fillStyle=ue(120,.8),n.fillRect(0,a*s,t,1),n.fillRect(a*37%4*(t/4)+e()*10,a*s,1.5,s)}}],tile:[.4,64,(n,t,e)=>{n.fillStyle=ue(170),n.fillRect(0,0,t,t),n.fillStyle=ue(236+e()*14),n.fillRect(2,2,t-4,t-4);for(let i=0;i<40;i++)n.fillStyle=ue(210+e()*30,.4),n.fillRect(2+e()*(t-6),2+e()*(t-6),2,2)}],lino:[1.2,128,(n,t,e)=>{n.fillStyle=ue(232),n.fillRect(0,0,t,t);for(let i=0;i<500;i++)n.fillStyle=ue(150+e()*100,.5),n.fillRect(e()*t,e()*t,1+e()*2,1+e()*2);n.fillStyle=ue(190,.7),n.fillRect(0,0,t,1),n.fillRect(0,0,1,t)}],carpet:[.8,64,(n,t,e)=>{n.fillStyle=ue(226),n.fillRect(0,0,t,t);for(let i=0;i<900;i++)n.fillStyle=ue(190+e()*65,.6),n.fillRect(e()*t,e()*t,1,1)}],plaster:[1.6,64,(n,t,e)=>{n.fillStyle=ue(244),n.fillRect(0,0,t,t);for(let i=0;i<260;i++)n.fillStyle=ue(222+e()*33,.5),n.fillRect(e()*t,e()*t,2,2)}],stripes:[.6,64,(n,t,e)=>{n.fillStyle=ue(246),n.fillRect(0,0,t,t),n.fillStyle=ue(222),n.fillRect(t*.42,0,t*.16,t);for(let i=0;i<120;i++)n.fillStyle=ue(225+e()*30,.4),n.fillRect(e()*t,e()*t,1,2)}],fabric:[.25,32,(n,t,e)=>{n.fillStyle=ue(232),n.fillRect(0,0,t,t);for(let i=0;i<t;i+=2)n.fillStyle=ue(212+e()*18,.6),n.fillRect(i,0,1,t),n.fillStyle=ue(208+e()*18,.5),n.fillRect(0,i,t,1)}],asphalt:[2,128,(n,t,e)=>{n.fillStyle=ue(200),n.fillRect(0,0,t,t);for(let i=0;i<1400;i++)n.fillStyle=ue(150+e()*105,.55),n.fillRect(e()*t,e()*t,1+e(),1+e())}],grass:[1.5,128,(n,t,e)=>{n.fillStyle=ue(205),n.fillRect(0,0,t,t);for(let i=0;i<1100;i++){n.strokeStyle=ue(160+e()*95,.7),n.lineWidth=1;const s=e()*t,a=e()*t;n.beginPath(),n.moveTo(s,a),n.lineTo(s+(e()-.5)*3,a-2-e()*4),n.stroke()}}],grain:[.7,64,(n,t,e)=>{n.fillStyle=ue(232),n.fillRect(0,0,t,t);for(let i=0;i<22;i++){n.strokeStyle=ue(190+e()*30,.45);const s=e()*t;n.beginPath(),n.moveTo(0,s),n.bezierCurveTo(t*.33,s+(e()-.5)*6,t*.66,s+(e()-.5)*6,t,s),n.stroke()}}]};function qn(n,t=1,e=1,i=1){const[s,a,o]=Mg[n],r=document.createElement("canvas");r.width=r.height=a,o(r.getContext("2d"),a,xg(i*977+a));const l=new wi(r);return l.colorSpace=Ee,l.wrapS=l.wrapT=Ea,l.repeat.set(Math.max(1,t/s),Math.max(1,e/s)),l.anisotropy=4,l}const pa={};function Ur(n){return pa[n]||(pa[n]=qn(n,2,2,3),pa[n].userData.keep=!0),pa[n]}function Sg(n,t){const e=document.createElement("canvas");e.width=4,e.height=64;const i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,64);s.addColorStop(0,n),s.addColorStop(1,t),i.fillStyle=s,i.fillRect(0,0,4,64);const a=new wi(e);return a.colorSpace=Ee,a}let gs=null;function lh(){if(gs)return gs;const n=document.createElement("canvas");n.width=n.height=64;const t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(0,0,0,0.55)"),e.addColorStop(.6,"rgba(0,0,0,0.25)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),gs=new wi(n),gs.userData.keep=!0,gs}const Bs=["#f6d7c3","#e8b896","#c98e68","#9a6445","#6b4430"],ks=["#2a1d18","#5a3a26","#a8743f","#d9b56a","#7d2f2f","#55525e"],Or=["#5a6b8c","#8c5a5a","#5a8c6b","#c9a64a","#3d3d48","#e8e3d8"],cr=["short","long","bun","none"],hr=["dot","oval","lash","sleepy"],ur=["flat","arched","worried","thick"],dr=["dot","line","none"],fr=["smile","flat","open","grin"],ye={skin:1,hair:0,hairStyle:"long",eyes:"lash",brows:"arched",nose:"dot",mouth:"smile",shirt:"#a61e45",blush:!0,seed:7},kn={skin:0,hair:3,hairStyle:"bun",eyes:"oval",brows:"flat",nose:"dot",mouth:"smile",shirt:"#4f6345",seed:3},ch={...ye,hair:kn.hair,hairStyle:kn.hairStyle,shirt:kn.shirt},Ps={skin:3,hair:0,hairStyle:"short",eyes:"sleepy",brows:"thick",nose:"line",mouth:"grin",shirt:"#2f4f6f",seed:21},bg={skin:4,hair:0,hairStyle:"none",eyes:"dot",brows:"flat",nose:"dot",mouth:"open",shirt:"#c9a64a",seed:31},Eg={skin:0,hair:4,hairStyle:"long",eyes:"oval",brows:"arched",nose:"none",mouth:"smile",shirt:"#5a8c6b",seed:41},hh={skin:2,hair:4,hairStyle:"long",eyes:"sleepy",brows:"arched",nose:"dot",mouth:"smile",shirt:"#6a3a8a",glasses:!0,seed:51},uh={skin:0,hair:5,hairStyle:"short",eyes:"dot",brows:"worried",nose:"line",mouth:"flat",shirt:"#4a6a5a",seed:61},Tg={skin:2,hair:5,hairStyle:"none",eyes:"dot",brows:"thick",nose:"line",mouth:"grin",shirt:"#8c7a5a",glasses:!0,seed:11};function dh(){return{skin:1,hair:1,hairStyle:"short",eyes:"dot",brows:"flat",nose:"line",mouth:"flat",shirt:0,seed:5}}function Ag(){const n=t=>Math.floor(Math.random()*t.length);return{skin:n(Bs),hair:n(ks),shirt:n(Or),hairStyle:cr[n(cr)],eyes:hr[n(hr)],brows:ur[n(ur)],nose:dr[n(dr)],mouth:fr[n(fr)],seed:5}}const pr=n=>typeof n.shirt=="number"?Or[n.shirt]:n.shirt;function Cg(n){let t=n>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const ii="#2b1f1c";function fh(n,t,{drift:e=0,expr:i=null,blink:s=!1}={}){const a=n.canvas.width,o=n.canvas.height;n.clearRect(0,0,a,o),n.save(),n.scale(a/512,o/256);const r=Cg(t.seed??1),l=()=>[r()*2-1,r()*2-1],c=l(),h=l(),u=l(),f=l(),d=e,g=34*d*d,v=256,m=Bs[t.skin],p=i==="scream",_=40+30*d,w=112-8*d,y=(p?1.25:1)*(1+.7*d);if(n.lineCap="round",n.lineJoin="round",t.blush&&d<.5){n.fillStyle=`rgba(232,110,120,${.35*(1-d*2)})`;for(const W of[-1,1])n.beginPath(),n.ellipse(v+W*72,150,18,9,0,0,Math.PI*2),n.fill()}const P=(W,X,O,tt)=>{if(n.save(),n.translate(W,X),n.rotate(tt),n.scale(y,y),s&&!p){n.strokeStyle=ii,n.lineWidth=3,n.beginPath(),n.moveTo(-10,0),n.quadraticCurveTo(0,4,10,0),n.stroke(),n.restore();return}const it=7*(1-.55*d);if(t.eyes==="dot")n.fillStyle=ii,n.beginPath(),n.ellipse(0,0,8,11,0,0,Math.PI*2),n.fill(),d<.6&&(n.fillStyle="#fff",n.beginPath(),n.arc(-2.5,-4,2.2,0,Math.PI*2),n.fill());else{if(n.fillStyle="#fff",n.strokeStyle=ii,n.lineWidth=2.2,n.beginPath(),n.ellipse(0,0,13,15,0,0,Math.PI*2),n.fill(),n.stroke(),n.fillStyle=ii,n.beginPath(),n.arc(0,1,it,0,Math.PI*2),n.fill(),d<.6&&(n.fillStyle="#fff",n.beginPath(),n.arc(-2,-2,2,0,Math.PI*2),n.fill()),t.eyes==="lash"){n.lineWidth=2.5;for(let _t=0;_t<3;_t++){const Ct=-.4-_t*.35;n.beginPath(),n.moveTo(O*Math.cos(Ct)*13,Math.sin(Ct)*15),n.lineTo(O*Math.cos(Ct)*19,Math.sin(Ct)*21),n.stroke()}}t.eyes==="sleepy"&&(n.fillStyle=m,n.fillRect(-15,-17,30,14),n.beginPath(),n.moveTo(-14,-3),n.lineTo(14,-3),n.stroke())}n.restore()},T=v-_+c[0]*g,A=w+c[1]*g*.6,k=v+_+h[0]*g,b=w+h[1]*g*.6;P(T,A,-1,d*.5*c[0]),P(k,b,1,d*.5*h[0]),n.strokeStyle=ii,n.lineWidth=t.brows==="thick"?7:4;for(const[W,X,O]of[[T,A,-1],[k,b,1]]){const tt=X-26*y-6*d;n.beginPath(),t.brows==="arched"?(n.moveTo(W-14,tt+4),n.quadraticCurveTo(W,tt-7-6*d,W+14,tt+4)):t.brows==="worried"||i==="sad"?(n.moveTo(W-13,tt+(O<0?4:-4)),n.lineTo(W+13,tt+(O<0?-4:4))):(n.moveTo(W-13,tt),n.lineTo(W+13,tt)),n.stroke()}const M=v+f[0]*g*.5,R=146+f[1]*g*.4;t.nose==="dot"?(n.fillStyle="rgba(0,0,0,0.18)",n.beginPath(),n.ellipse(M,R,6,4,0,0,Math.PI*2),n.fill()):t.nose==="line"&&(n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=3,n.beginPath(),n.moveTo(M-6,R+2),n.quadraticCurveTo(M,R+7,M+6,R+2),n.stroke());const F=24+52*d,U=v+u[0]*g,V=180+10*d+u[1]*g*.5,$=i==="sad"?"frown":p?"scream":t.mouth;if(n.strokeStyle=ii,n.fillStyle=ii,n.lineWidth=4,$==="scream")n.beginPath(),n.ellipse(U,V+6,16+6*d,26,0,0,Math.PI*2),n.fill();else if($==="frown")n.beginPath(),n.moveTo(U-18,V+8),n.quadraticCurveTo(U,V-6,U+18,V+8),n.stroke();else if($==="flat")n.beginPath(),n.moveTo(U-F*.7,V),n.lineTo(U+F*.7,V),n.stroke();else if($==="open")n.beginPath(),n.moveTo(U-16,V-3),n.lineTo(U+16,V-3),n.quadraticCurveTo(U,V+26,U-16,V-3),n.fill();else if($==="grin"||d>.55){const W=$==="grin"?Math.max(F,32):F;n.beginPath(),n.moveTo(U-W,V-4),n.lineTo(U+W,V-4),n.quadraticCurveTo(U,V+22+24*d,U-W,V-4),n.fill(),n.fillStyle="#fff",n.fillRect(U-W*.82,V-3,W*1.64,6)}else n.beginPath(),n.moveTo(U-F,V),n.quadraticCurveTo(U,V+14+22*d,U+F,V),n.stroke();if(t.glasses){n.strokeStyle="#1b1b1b",n.lineWidth=3;for(const[W,X]of[[T,A],[k,b]])n.beginPath(),n.arc(W,X,22,0,Math.PI*2),n.stroke();n.beginPath(),n.moveTo(T+22,A),n.lineTo(k-22,b),n.stroke()}n.restore()}const Ra=document.createElement("canvas");Ra.width=512;Ra.height=256;function Fr(n,t,{drift:e=0}={}){const i=n.canvas.width,s=n.canvas.height,a=i/2,o=s*.44,r=i*.3,l=ks[t.hair];n.fillStyle=pr(t),n.beginPath(),n.ellipse(a,s*1.02,r*1.25,r*.75,0,0,Math.PI*2),n.fill(),t.hairStyle==="long"&&(n.fillStyle=l,n.beginPath(),n.roundRect(a-r*1.08,o-r*.3,r*2.16,r*1.55,r*.35),n.fill()),n.fillStyle=Bs[t.skin],n.beginPath(),n.arc(a,o,r,0,Math.PI*2),n.fill(),fh(Ra.getContext("2d"),t,{drift:e}),n.drawImage(Ra,128,0,256,256,a-r,o-.81*r,2*r,1.62*r),t.hairStyle!=="none"&&(n.fillStyle=l,n.beginPath(),n.arc(a,o,r*1.05,Math.PI,Math.PI*2),n.quadraticCurveTo(a,o-r*.85,a-r*1.05,o),n.fill(),t.hairStyle==="bun"&&(n.beginPath(),n.arc(a,o-r*1.08,r*.3,0,Math.PI*2),n.fill()))}function si(n){return new de({color:n})}class Rg{constructor(t,{seated:e=!1,trackMax:i=1.2}={}){this.cfg=t,this.root=new At,this.drift=0,this.expr=null,this.trackMax=i,this.track=!0,this.lookTarget=null,this.headYaw=0,this.blinkIn=2+Math.random()*3,this.t=Math.random()*10,this.shoulders=[],this.blinkLeft=0,this._key="";const s=Bs[t.skin],a="#3a3a44";for(const c of[-1,1]){const h=new At;h.position.set(.09*c,.62,0);const u=new lt(new cn(.07,.065,.6,10),si(a));u.position.y=-.3;const f=new lt(new Ne(.08,10,8),si("#2a2a30"));f.scale.set(1,.6,1.4),f.position.set(0,-.58,.03),h.add(u,f),e&&(h.rotation.x=-Math.PI/2),this.root.add(h)}const o=new lt(new Ca(.19,.32,6,14),si(pr(t)));if(o.position.y=.88,this.root.add(o),this.torso=o,!e){const c=new lt(new we(.7,.55),new ge({map:lh(),transparent:!0,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.012,c.userData.noShadow=!0,this.root.add(c),this.shadow=c}for(const c of[-1,1]){const h=new At;h.position.set(.23*c,1.05,0),h.rotation.z=.14*c;const u=new lt(new Ca(.05,.3,4,8),si(pr(t)));u.position.y=-.18;const f=new lt(new Ne(.065,10,8),si(s));f.position.y=-.4,h.add(u,f),this.root.add(h),this.shoulders.push(h)}this.head=new At,this.head.position.y=1.36,this.head.rotation.order="YXZ",this.root.add(this.head),this.head.add(new lt(new Ne(.28,32,24),si(s))),this.faceCanvas=document.createElement("canvas"),this.faceCanvas.width=512,this.faceCanvas.height=256,this.faceTex=new wi(this.faceCanvas),this.faceTex.colorSpace=Ee;const r=new lt(new Ne(.2815,32,16,0,Math.PI,Math.PI*.2,Math.PI*.6),new de({map:this.faceTex,alphaTest:.1,polygonOffset:!0,polygonOffsetFactor:-1}));this.head.add(r);const l=si(ks[t.hair]);if(t.hairStyle!=="none"){const c=new lt(new Ne(.296,24,12,0,Math.PI*2,0,Math.PI*.42),l);c.rotation.x=-.25,this.head.add(c)}if(t.hairStyle==="long"){const c=new lt(new cn(.29,.31,.5,20,1,!0,Math.PI-1.7,3.4),new de({color:ks[t.hair],side:De}));c.position.y=-.14,this.head.add(c)}if(t.hairStyle==="bun"){const c=new lt(new Ne(.1,12,10),l);c.position.set(0,.27,-.1),this.head.add(c)}this.redraw()}setDrift(t){this.drift=t}setExpr(t){this.expr=t}redraw(){const t=this.blinkLeft>0,e=`${this.drift.toFixed(2)}|${this.expr}|${t}`;e!==this._key&&(this._key=e,fh(this.faceCanvas.getContext("2d"),this.cfg,{drift:this.drift,expr:this.expr,blink:t}),this.faceTex.needsUpdate=!0)}update(t,e){this.t+=t;const i=1-Math.min(1,this.drift*1.8);if(this.torso.scale.set(1+.012*i*Math.sin(this.t*2.1),1+.018*i*Math.sin(this.t*2.1),1),this.head.position.y=1.36+.006*i*Math.sin(this.t*2.1-.4),this.shoulders.forEach((s,a)=>s.rotation.x=.05*i*Math.sin(this.t*1.3+a*1.7)),this.drift<.5&&(this.blinkIn-=t,this.blinkIn<=0&&(this.blinkLeft=.13,this.blinkIn=2.5+Math.random()*3.5)),this.blinkLeft>0&&(this.blinkLeft-=t),this.track&&e){const s=this.root.worldToLocal(e.clone()),a=this.head.position;let o=Math.atan2(s.x-a.x,s.z-a.z);o=Math.max(-this.trackMax,Math.min(this.trackMax,o)),this.headYaw+=(o-this.headYaw)*Math.min(1,t*4),this.head.rotation.y=this.headYaw;const r=-Math.atan2(s.y-a.y,Math.hypot(s.x-a.x,s.z-a.z))*.6;this.head.rotation.x+=(r-this.head.rotation.x)*Math.min(1,t*4)}this.redraw()}headWorld(t=new C){return this.head.getWorldPosition(t)}dispose(){this.root.traverse(t=>{var e,i,s,a;(e=t.geometry)==null||e.dispose(),(s=(i=t.material)==null?void 0:i.map)==null||s.dispose(),(a=t.material)==null||a.dispose()})}}const ph={1:"Devoted",2:"Wanting",3:"Unraveling",4:"Gone"};function hn(n){return n>=75?4:n>=50?3:n>=25?2:1}function Br(n){const t=Math.min(1,Math.max(0,(n-12)/88));return Math.pow(t,1.25)}const kg=5;function zr(){return{need:10,nerve:0,day:0,clock:7*60+40,flags:{},bear:null,record:null,chapter:"prologue",nikkiLastSeen:"kitchen",leftHouseAt:8*60+30,returnedAt:null,stats:{textsReceived:0,replies:0,promises:0,lies:0,looks:0,hoursWaited:0,tasksDone:0,leftEarlyAt:null,fallout:[],needAtBed:null},fates:{sarah:"alive",ian:"alive"},log:[]}}function Dn(n){const t=Math.floor(n/60)%24,e=Math.floor(n%60);return`${t%12===0?12:t%12}:${String(e).padStart(2,"0")} ${t<12?"AM":"PM"}`}const mh="obsession.settings.v1",sc={move:"walk"};function Pg(){try{return{...sc,...JSON.parse(localStorage.getItem(mh)||"{}")}}catch{return{...sc}}}function Ig(n){try{localStorage.setItem(mh,JSON.stringify(n))}catch{}}const Oi=(n,t,e)=>Math.min(e,Math.max(t,n)),Fi=(n,t,e)=>n+(t-n)*e,ac=n=>Math.atan2(Math.sin(n),Math.cos(n)),Lg=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;function Hr(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return{yaw:Math.atan2(-e,-s),pitch:Math.atan2(i,Math.hypot(e,s))}}const Ng=1.5,oc=1.7,Wn=.24,Dg=1.9;class Ug{constructor({canvas:t,ui:e,sound:i,state:s}){this.canvas=t,this.ui=e,this.sound=i,this.state=s,this.renderer=new Q0({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Tc,this.post=new wg(this.renderer),this.camera=new qe(70,1,.05,120),this.camera.rotation.order="YXZ",this.eyeLight=new xi("#fff1e0",0,4,2),this.camera.add(this.eyeLight),this.yaw=0,this.pitch=0,this.lookEnabled=!0,this.world=null,this.scene=null,this.hotspots={},this.markers={},this.interactables=[],this.actors={},this.current=null,this.inputLocked=!0,this.walk=!0,this.busy=!1,this.queue=[],this.tweens=[],this.handlers={},this.clock={running:!1,rate:2.5,paused:0},this.settings=Pg(),this.keysDown=new Set,this.obstacles=[],this.bounds=null,this.eyeY=null,this.bobT=0,this.stride=0,this.raycaster=new vg,this.ndc=new pt,this._tmp=new C,this._bindInput(),this._resize(),window.addEventListener("resize",()=>this._resize()),this.last=performance.now(),this._frame=this._frame.bind(this),requestAnimationFrame(this._frame)}on(t,e){var i;return((i=this.handlers)[t]||(i[t]=[])).push(e),()=>{this.handlers[t]=this.handlers[t].filter(s=>s!==e)}}emit(t,...e){for(const i of this.handlers[t]||[])i(...e)}run(t){return new Promise(e=>this.queue.push({fn:t,resolve:e}))}wait(t){return new Promise(e=>setTimeout(e,t))}tween(t,e,i=Lg){return new Promise(s=>this.tweens.push({t0:performance.now(),ms:t,fn:e,easing:i,res:s}))}_log(t){this.state.log.unshift(t),this.state.log.length=Math.min(this.state.log.length,8)}addNeed(t,e){const i=this.state,s=i.need;i.need=Oi(s+t,0,100),e&&this._log(`${t>=0?"+":""}${t.toFixed(0)} need: ${e}`);const a=hn(s),o=hn(i.need);o!==a&&(this.post.glitch=Math.max(this.post.glitch,o>a?.8:.3),this.emit("tier",o,a)),s<100&&i.need>=100&&this.emit("overflow")}addNerve(t,e){const i=this.state,s=i.nerve;i.nerve=Oi(i.nerve+t,0,kg);const a=i.nerve-s;a>0&&this.ui.toast(`+${a} Nerve`,"nerve"),e&&this._log(`${a>=0?"+":""}${a} nerve: ${e}`)}advance(t){const e=Math.floor(this.state.clock);this.state.clock+=t;for(let i=e+1;i<=Math.floor(this.state.clock);i++)this.emit("minute",i)}load(t,e={}){return this.world&&this._dispose(),this.world=t(this,e),this.scene=this.world.scene,this.hotspots=this.world.hotspots||{},this.blockers=this.world.blockers||[],this.interactables=[],this.actors={},this.walk=!0,this.post.target=e.grime??0,this.post.grade(this.world.grade),this.ui.letterbox(this.inputLocked),this.eyeLight.intensity=this.world.eyeLight??.35,this.scene.add(this.camera),e.grimeNow&&(this.post.amount=this.post.target),this.scene.traverse(i=>{if(!i.isMesh)return;const s=!i.material.isMeshBasicMaterial;i.receiveShadow=s,i.castShadow=s&&!i.userData.noCast}),this._collision(),this._batch(),this._buildMarkers(),e.at&&this.place(e.at),this.world}_collision(){const t=new _i,e=new C,i=s=>({minX:s.min.x,maxX:s.max.x,minZ:s.min.z,maxZ:s.max.z});this.obstacles=[],this.bounds=null;for(const s of this.blockers)t.setFromObject(s),this.obstacles.push(i(t)),this.bounds?(this.bounds.minX=Math.min(this.bounds.minX,t.min.x),this.bounds.maxX=Math.max(this.bounds.maxX,t.max.x),this.bounds.minZ=Math.min(this.bounds.minZ,t.min.z),this.bounds.maxZ=Math.max(this.bounds.maxZ,t.max.z)):this.bounds=i(t);for(const s of this.scene.children)!s.visible||s.isLight||s.isCamera||s.userData.noCollide||this.blockers.includes(s)||(t.setFromObject(s),!t.isEmpty()&&(t.getSize(e),!(t.min.y>.4||e.y<.25||e.x*e.z<.04||e.x>8||e.z>8)&&this.obstacles.push(i(t))))}get walking(){var t;return this.settings.move==="walk"&&((t=this.world)==null?void 0:t.walkable)!==!1&&this.walk&&!this.inputLocked&&!this.busy}setMove(t){this.settings.move=t,Ig(this.settings),this._refreshMarkers()}controlsHint(){const t=matchMedia("(pointer: coarse)").matches;return this.settings.move==="rings"?t?"Drag to look around. Tap a ring on the floor to walk there.":"Drag to look around. Click a ring on the floor to walk there.":t?"Use the stick to walk. Drag to look. Tap things to use them.":"WASD or arrow keys to walk. Drag to look. Click things to use them."}_blocked(t,e){const i=this.bounds;if(i&&(t<i.minX+Wn||t>i.maxX-Wn||e<i.minZ+Wn||e>i.maxZ-Wn))return!0;for(const s of this.obstacles)if(t>s.minX-Wn&&t<s.maxX+Wn&&e>s.minZ-Wn&&e<s.maxZ+Wn)return!0;for(const s of Object.values(this.actors)){const a=s.root.position;if(s.root.visible&&Math.hypot(a.x-t,a.z-e)<.42)return!0}return!1}_step(t,e){const i=this.camera.position,s=this._blocked(i.x,i.z);(s||!this._blocked(i.x+t,i.z))&&(i.x+=t),(s||!this._blocked(i.x,i.z+e))&&(i.z+=e)}_walk(t){const e=this.keysDown,i=(...d)=>d.some(g=>e.has(g))?1:0;this.yaw+=(i("arrowleft","q")-i("arrowright","e"))*t*2.2;let s=i("w","arrowup")-i("s","arrowdown")-this.ui.stickVec.y,a=i("d")-i("a")+this.ui.stickVec.x;const o=this.camera.position;this.eyeY==null&&(this.eyeY=o.y),this.eyeY+=(Ng-this.eyeY)*Math.min(1,t*3);const r=Math.hypot(s,a);if(r<.1){this.bobT=0,o.y+=(this.eyeY-o.y)*Math.min(1,t*8);return}r>1&&(s/=r,a/=r);const l=Math.sin(this.yaw),c=Math.cos(this.yaw),h=o.x,u=o.z;this._step((-l*s+c*a)*oc*t,(-c*s-l*a)*oc*t);const f=Math.hypot(o.x-h,o.z-u);this.bobT+=f*7.5,o.y=this.eyeY+Math.sin(this.bobT)*.022,this.stride+=f,this.stride>.62&&(this.stride=0,this.sound.steps(1)),this.current=this._nearestSpot(o)}_nearestSpot(t,e=1.7){let i=null,s=e;for(const[a,o]of Object.entries(this.hotspots)){if(o.marker===!1)continue;const r=Math.hypot(o.pos.x-t.x,o.pos.z-t.z);r<s&&(s=r,i=a)}return i}_inReach(t){const e=new _i().setFromObject(t),i=this.camera.position,s=Math.max(e.min.x-i.x,0,i.x-e.max.x),a=Math.max(e.min.z-i.z,0,i.z-e.max.z);return Math.hypot(s,a)<Dg}_batch(){var i;const t=new Set;for(const s of Object.values(this.world.objects||{}))(i=s==null?void 0:s.traverse)==null||i.call(s,a=>t.add(a));this.world.tower&&this.world.tower.group.traverse(s=>t.add(s));for(const s of this.world.twigs||[])t.add(s);this.scene.updateMatrixWorld(!0);const e=new Map;this.scene.traverse(s=>{var l;if(!s.isMesh||!s.visible)return;let a=!1;for(let c=s;c;c=c.parent){if(t.has(c)||!c.visible)return;c.userData.batch&&(a=!0)}const o=s.material;if(!a||!o.isMeshLambertMaterial||o.transparent||o.side!==In||o.emissive.getHex()!==0||o.alphaTest)return;const r=`${((l=o.map)==null?void 0:l.uuid)??"flat"}|${s.castShadow}`;e.has(r)||e.set(r,{map:o.map,cast:s.castShadow,meshes:[]}),e.get(r).meshes.push(s)});for(const{map:s,cast:a,meshes:o}of e.values()){if(o.length<2)continue;const r=o.map(m=>{const p=(m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone()).applyMatrix4(m.matrixWorld),_=p.attributes.position.count,w=m.material.color,y=new Float32Array(_*3);for(let P=0;P<_;P++)y.set([w.r,w.g,w.b],P*3);return{geo:p,col:y,n:_}}),l=r.reduce((m,p)=>m+p.n,0),c=new Float32Array(l*3),h=new Float32Array(l*3),u=new Float32Array(l*2),f=new Float32Array(l*3);let d=0;for(const m of r)c.set(m.geo.attributes.position.array,d*3),h.set(m.geo.attributes.normal.array,d*3),m.geo.attributes.uv&&u.set(m.geo.attributes.uv.array,d*2),f.set(m.col,d*3),d+=m.n,m.geo.dispose();const g=new Ge;g.setAttribute("position",new ze(c,3)),g.setAttribute("normal",new ze(h,3)),g.setAttribute("uv",new ze(u,2)),g.setAttribute("color",new ze(f,3));const v=new lt(g,new de({vertexColors:!0,map:s||null}));v.castShadow=a,v.receiveShadow=!0,this.scene.add(v);for(const m of o)m.parent.remove(m),m.geometry.dispose(),m.material.dispose()}}_dispose(){this.world.scene.traverse(t=>{var i;(i=t.geometry)==null||i.dispose();const e=Array.isArray(t.material)?t.material:t.material?[t.material]:[];for(const s of e)s.map&&!s.map.userData.keep&&s.map.dispose(),s.dispose()}),this.world=null,this.scene=null}_buildMarkers(){this.markers={};for(const[t,e]of Object.entries(this.hotspots)){if(e.marker===!1)continue;const i=new At,s=new lt(new os(.26,.025,6,28),new ge({color:16777215,transparent:!0,opacity:.75}));s.rotation.x=-Math.PI/2,s.position.y=.03;const a=new lt(new cn(.4,.4,1.7,10),new ge({transparent:!0,opacity:0,depthWrite:!1}));a.position.y=.85,i.add(s,a),i.position.set(e.pos.x,e.floor??0,e.pos.z),a.userData.marker=t,this.scene.add(i),this.markers[t]={group:i,ring:s,pillar:a}}this._refreshMarkers()}_refreshMarkers(){this.ui.showStick(this.walking);for(const[t,e]of Object.entries(this.markers))e.group.visible=this.settings.move==="rings"&&this.walk&&!this.inputLocked&&!this.busy&&t!==this.current}place(t){const e=this.hotspots[t];this.camera.position.copy(e.pos),e.yaw!=null&&(this.yaw=e.yaw,this.pitch=e.pitch??0),this.current=t,this.eyeY=null,this._refreshMarkers()}async moveTo(t){const e=this.hotspots[t];if(!e||t===this.current)return;const i=this.camera.position.clone(),s=e.pos.clone(),a=this.yaw,o=this.pitch,r=e.yaw!=null?a+ac(e.yaw-a):a,l=e.pitch??o;this.current=null,this._refreshMarkers();const c=i.distanceTo(s);this.sound.steps(Math.max(1,Math.round(c/.9))),await this.tween(Oi(c*260,350,1200),h=>{this.camera.position.lerpVectors(i,s,h),this.yaw=Fi(a,r,h),this.pitch=Fi(o,l,h)}),this.current=t,this.eyeY=null,this._refreshMarkers()}lookAt(t,e=700){const{yaw:i,pitch:s}=Hr(this.camera.position,t),a=this.yaw,o=this.pitch,r=a+ac(i-a);return this.tween(e,l=>{this.yaw=Fi(a,r,l),this.pitch=Fi(o,s,l)})}lock(){this.inputLocked=!0,this.ui.letterbox(!0),this._refreshMarkers()}unlock(){this.inputLocked=!1,this.ui.letterbox(!1),this._refreshMarkers()}setWalk(t){this.walk=t,this._refreshMarkers()}roam(){return this.unlock(),new Promise(t=>this._roamEnd=t)}endRoam(t){this.lock();const e=this._roamEnd;this._roamEnd=null,e==null||e(t)}interact(t,e){const i={object:t,enabled:!0,...e};return t.userData.interact=i,this.interactables.push(i),i}clearInteractions(){for(const t of this.interactables)t.enabled=!1;this.interactables=[]}spawn(t,e,{pos:i=[0,0,0],yaw:s=0,seated:a=!1,track:o=!0,trackMax:r}={}){const l=new Rg(e,{seated:a,trackMax:r});return l.root.traverse(c=>{c.isMesh&&!c.userData.noShadow&&(c.castShadow=!0)}),l.root.position.set(...i),l.root.rotation.y=s,l.track=o,this.scene.add(l.root),this.actors[t]=l,l}despawn(t){const e=this.actors[t];e&&(this.scene.remove(e.root),e.dispose(),delete this.actors[t])}_bindInput(){const t=this.canvas;t.addEventListener("pointerdown",i=>{this.down={x:i.clientX,y:i.clientY,lx:i.clientX,ly:i.clientY,moved:!1},t.setPointerCapture(i.pointerId)}),t.addEventListener("pointermove",i=>{if(this.down){const s=this.down;Math.hypot(i.clientX-s.x,i.clientY-s.y)>6&&(s.moved=!0),s.moved&&this.lookEnabled&&this.scene&&(this.yaw+=(i.clientX-s.lx)*.0045,this.pitch=Oi(this.pitch+(i.clientY-s.ly)*.0045,-1.25,1.25)),s.lx=i.clientX,s.ly=i.clientY}else i.pointerType==="mouse"&&this._hover(i)});const e=i=>{const s=this.down;this.down=null,s&&!s.moved&&this._click(i)};t.addEventListener("pointerup",e),t.addEventListener("pointercancel",()=>this.down=null),window.addEventListener("keydown",i=>{const s=i.key.toLowerCase();this.settings.move==="walk"?["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(s)&&(this.keysDown.add(s),s.startsWith("arrow")&&i.preventDefault()):(s==="arrowleft"&&(this.yaw+=.12),s==="arrowright"&&(this.yaw-=.12),s==="arrowup"&&(this.pitch=Oi(this.pitch+.1,-1.25,1.25)),s==="arrowdown"&&(this.pitch=Oi(this.pitch-.1,-1.25,1.25))),s==="m"&&!i.repeat&&(this.setMove(this.settings.move==="walk"?"rings":"walk"),this.ui.toast(`Movement: ${this.settings.move==="walk"?"walk around":"tap rings"}`))}),window.addEventListener("keyup",i=>this.keysDown.delete(i.key.toLowerCase())),window.addEventListener("blur",()=>this.keysDown.clear())}_pick(t,e){var o;if(!this.scene)return null;const i=this.canvas.getBoundingClientRect();this.ndc.set((t-i.left)/i.width*2-1,-((e-i.top)/i.height)*2+1),this.raycaster.setFromCamera(this.ndc,this.camera);const s=[...this.blockers];for(const r of Object.values(this.markers))r.group.visible&&s.push(r.pillar);for(const r of this.interactables)r.enabled&&s.push(r.object);const a=this.raycaster.intersectObjects(s,!0);for(const r of a){let l=r.object;for(;l;){if(l.userData.marker)return{marker:l.userData.marker};if((o=l.userData.interact)!=null&&o.enabled)return{interact:l.userData.interact};l=l.parent}return null}return null}_hover(t){const i=this.inputLocked||this.busy?null:this._pick(t.clientX,t.clientY),s=(i==null?void 0:i.interact)||null;s!==this.hovered&&(this._highlight(this.hovered,!1),this._highlight(s,!0),this.hovered=s);const a=i!=null&&i.marker?this.hotspots[i.marker].label:s==null?void 0:s.label;this.canvas.style.cursor=a?"pointer":"grab",this.ui.hover(a||null,t.clientX,t.clientY)}_highlight(t,e){t&&t.object.traverse(i=>{var a,o;const s=(a=i.material)==null?void 0:a.emissive;s&&((o=i.userData).baseEmissive??(o.baseEmissive=s.getHex()),s.setHex(e?2763306:i.userData.baseEmissive))})}async _click(t){if(this.inputLocked||this.busy)return;const e=this._pick(t.clientX,t.clientY);if(e){this.busy=!0,this._refreshMarkers(),this.ui.hover(null),this._highlight(this.hovered,!1),this.hovered=null;try{if(e.marker)await this.moveTo(e.marker);else{const i=e.interact;!(this.settings.move==="walk"&&this._inReach(i.object))&&i.hotspot&&i.hotspot!==this.current&&await this.moveTo(i.hotspot),await i.use(this,i)}}finally{this.busy=!1,this._refreshMarkers()}}}_resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e;const i=2*Math.atan(Math.tan(26*Math.PI/180)/this.camera.aspect)*180/Math.PI;this.camera.fov=this.camera.aspect<1?Math.min(90,Math.max(70,i)):70,this.camera.updateProjectionMatrix(),this.post.setSize(t,e)}_frame(t){var i,s;const e=Math.min(.05,(t-this.last)/1e3);if(this.last=t,this.tweens=this.tweens.filter(a=>{const o=Math.min(1,(t-a.t0)/a.ms);return a.fn(a.easing(o)),o>=1&&a.res(),o<1}),this.clock.running&&this.clock.paused===0){const a=Math.floor(this.state.clock);this.state.clock+=e*this.clock.rate;for(let o=a+1;o<=Math.floor(this.state.clock);o++)this.emit("minute",o)}if(!this.busy&&this.queue.length){const a=this.queue.shift();this.busy=!0,this._refreshMarkers(),Promise.resolve().then(a.fn).finally(()=>{this.busy=!1,this._refreshMarkers(),a.resolve()})}if(this.scene&&this.walking?this._walk(e):this.bobT=0,this.camera.rotation.x=this.pitch,this.camera.rotation.y=this.yaw,this.scene){const a=this.actors.nikki;if(a&&!a.driftLocked){const o=this.state.flags.wished?Br(this.state.need):0;a.setDrift(Fi(a.drift,o,Math.min(1,e*2))),a.trackMax=Fi(1.3,3.1,a.drift)}for(const o of Object.values(this.markers))o.ring.material.opacity=.45+.3*Math.sin(t/300);for(const o of Object.values(this.actors)){const r=o.lookTarget?o.lookTarget.getWorldPosition(this._tmp):this.camera.position;o.update(e,r)}(s=(i=this.world).update)==null||s.call(i,e,this),this.sound.updateListener(this.camera),this.post.update(e),this.post.render(this.scene,this.camera)}else this.renderer.setRenderTarget(null),this.renderer.setClearColor(0),this.renderer.clear();this.emit("frame",e),requestAnimationFrame(this._frame)}}const wo=n=>440*Math.pow(2,(n-69)/12);class Og{constructor(){this.ctx=null}init(){var a;if(this.ctx)return;const t=window.AudioContext||window.webkitAudioContext,e=new t;this.ctx=e,this.master=e.createGain(),this.master.gain.value=.8,this.master.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.3,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.connect(this.master);const i=e.sampleRate*2;this.noiseBuf=e.createBuffer(1,i,e.sampleRate);const s=this.noiseBuf.getChannelData(0);for(let o=0;o<i;o++)s[o]=Math.random()*2-1;(a=e.resume)==null||a.call(e)}streamDest(){return this.ctx?(this.dest||(this.dest=this.ctx.createMediaStreamDestination(),this.master.connect(this.dest)),this.dest.stream):null}get now(){return this.ctx?this.ctx.currentTime:0}updateListener(t){if(!this.ctx)return;const e=this.ctx.listener,i=t.position,s=t.getWorldDirection(this._fwd||(this._fwd=t.position.clone()));e.positionX?(e.positionX.value=i.x,e.positionY.value=i.y,e.positionZ.value=i.z,e.forwardX.value=s.x,e.forwardY.value=s.y,e.forwardZ.value=s.z,e.upX.value=0,e.upY.value=1,e.upZ.value=0):(e.setPosition(i.x,i.y,i.z),e.setOrientation(s.x,s.y,s.z,0,1,0))}panner(t){const e=this.ctx.createPanner();return e.panningModel="HRTF",e.distanceModel="inverse",e.refDistance=.8,e.rolloffFactor=1.6,this.setPos(e,t),e.connect(this.sfx),e}setPos(t,e){t.positionX?(t.positionX.value=e.x,t.positionY.value=e.y,t.positionZ.value=e.z):t.setPosition(e.x,e.y,e.z)}tone(t,e,{type:i="sine",gain:s=.2,when:a=this.now,attack:o=.005,dest:r=this.sfx,slide:l=0}={}){if(!this.ctx)return;const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type=i,c.frequency.setValueAtTime(t,a),l&&c.frequency.exponentialRampToValueAtTime(Math.max(20,t+l),a+e),h.gain.setValueAtTime(1e-4,a),h.gain.exponentialRampToValueAtTime(s,a+o),h.gain.exponentialRampToValueAtTime(1e-4,a+e),c.connect(h).connect(r),c.start(a),c.stop(a+e+.05)}noise(t,{type:e="lowpass",freq:i=800,q:s=1,gain:a=.2,when:o=this.now,attack:r=.005,dest:l=this.sfx}={}){if(!this.ctx)return;const c=this.ctx.createBufferSource();c.buffer=this.noiseBuf;const h=this.ctx.createBiquadFilter();h.type=e,h.frequency.value=i,h.Q.value=s;const u=this.ctx.createGain();u.gain.setValueAtTime(1e-4,o),u.gain.exponentialRampToValueAtTime(a,o+r),u.gain.exponentialRampToValueAtTime(1e-4,o+t),c.connect(h).connect(u).connect(l),c.start(o,Math.random()),c.stop(o+t+.05)}click(){this.tone(1800,.03,{type:"square",gain:.03})}beep(){this.tone(1250,.09,{type:"sine",gain:.12})}key(){this.tone(697+Math.random()*500,.12,{type:"sine",gain:.1})}wrong(){this.tone(120,.18,{type:"square",gain:.08})}pluck(t){this.tone(t,.9,{type:"triangle",gain:.25,slide:-2})}buzz(){const t=this.now;this.tone(150,.14,{type:"square",gain:.07,when:t}),this.tone(150,.14,{type:"square",gain:.07,when:t+.22})}steps(t=2){const e=this.now;for(let i=0;i<t;i++)this.noise(.08,{freq:350,gain:.08,when:e+i*.32}),this.tone(70,.08,{gain:.08,when:e+i*.32})}stepAt(t){if(!this.ctx)return;const e=this.panner(t);this.noise(.1,{freq:420,gain:.35,dest:e}),this.tone(65,.1,{gain:.3,dest:e}),setTimeout(()=>e.disconnect(),400)}snap(){this.noise(.08,{type:"highpass",freq:2200,gain:.5}),this.tone(95,.25,{gain:.35,slide:-50})}door(){this.tone(60,.35,{gain:.35,slide:-20}),this.noise(.2,{freq:500,gain:.2})}sting(){const t=this.now;for(const e of[55,58.3,82.4,116.5])this.tone(e,2.2,{type:"sawtooth",gain:.06,when:t,attack:.02});this.noise(1.2,{type:"bandpass",freq:3e3,q:4,gain:.08,when:t})}scream(){const t=this.now;this.tone(880,.9,{type:"sawtooth",gain:.05,when:t,slide:300}),this.noise(.9,{type:"bandpass",freq:1800,q:2,gain:.15,when:t})}whisper(){const t=this.now;for(let e=0;e<6;e++)this.noise(.25,{type:"bandpass",freq:2600+Math.random()*1500,q:3,gain:.12,when:t+e*.22,attack:.05})}shot(){const t=this.now;this.noise(.5,{type:"lowpass",freq:2400,gain:.9,when:t}),this.tone(60,.6,{gain:.6,when:t,slide:-40})}heart(t=.35){const e=this.now;this.tone(55,.12,{gain:t,when:e}),this.tone(48,.14,{gain:t*.8,when:e+.18})}glass(){const t=this.now;this.noise(.35,{type:"highpass",freq:3e3,gain:.45,when:t});for(let e=0;e<9;e++)this.tone(2400+Math.random()*3200,.12,{type:"triangle",gain:.05,when:t+.03+Math.random()*.4})}ambience(t){if(!this.ctx)return;this.stopAmbience();const e={crowd:[480,.6,.05,.7],hum:[120,6,.03,0],wind:[300,.5,.05,.12]}[t],i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=e[0],s.Q.value=e[1];const a=this.ctx.createGain();a.gain.value=e[2],i.connect(s).connect(a).connect(this.sfx);const o={s:i,g:a};if(e[3]){const r=this.ctx.createOscillator();r.frequency.value=e[3];const l=this.ctx.createGain();l.gain.value=e[2]*.6,r.connect(l).connect(a.gain),r.start(),o.lfo=r}if(t==="hum"){const r=this.ctx.createOscillator();r.frequency.value=120;const l=this.ctx.createGain();l.gain.value=.012,r.connect(l).connect(this.sfx),r.start(),o.osc=r}i.start(),this.amb=o}stopAmbience(){var t,e;this.amb&&(this.amb.s.stop(),(t=this.amb.lfo)==null||t.stop(),(e=this.amb.osc)==null||e.stop(),this.amb.g.disconnect(),this.amb=null)}startBreath(t){if(!this.ctx||this.breath)return;const e=this.panner(t),i=this.ctx.createBufferSource();i.buffer=this.noiseBuf,i.loop=!0;const s=this.ctx.createBiquadFilter();s.type="bandpass",s.frequency.value=900,s.Q.value=.8;const a=this.ctx.createGain();a.gain.value=0;const o=this.ctx.createOscillator();o.frequency.value=.28;const r=this.ctx.createGain();r.gain.value=.12,o.connect(r).connect(a.gain),i.connect(s).connect(a).connect(e),i.start(),o.start(),this.breath={p:e,s:i,lfo:o,g:a}}moveBreath(t){this.breath&&this.setPos(this.breath.p,t)}stopBreath(){this.breath&&(this.breath.s.stop(),this.breath.lfo.stop(),this.breath.p.disconnect(),this.breath=null)}playRecord(t){if(!this.ctx)return;this.stopRecord();const e=60/t.bpm/2;let i=0,s=this.now+.1;const a=()=>{for(;s<this.now+.25;){const o=t.pattern[i%t.pattern.length];if(o!=null&&this.tone(wo(o),e*1.6,{type:t.wave,gain:.1,when:s,dest:this.music}),i%4===0){const r=t.bass[Math.floor(i/4)%t.bass.length];this.tone(wo(r),e*3.5,{type:"triangle",gain:.16,when:s,dest:this.music})}s+=e,i++}};a(),this.recordTimer=setInterval(a,60)}stopRecord(){clearInterval(this.recordTimer),this.recordTimer=null}musicLevel(t,e=1){this.ctx&&this.music.gain.setTargetAtTime(t,this.now,e/3)}holdMusic(t){if(clearInterval(this.holdTimer),!t||!this.ctx)return;const e=[72,76,79,76,74,77,81,77];let i=0;const s=()=>this.tone(wo(e[i++%e.length]),.35,{type:"square",gain:.04});s(),this.holdTimer=setInterval(s,380)}}const Gr="obsession.save.v1";function Fg(){try{const n=localStorage.getItem(Gr);return n?JSON.parse(n):null}catch{return null}}function Bg(n,t){try{localStorage.setItem(Gr,JSON.stringify({chapter:n,state:{...t,log:[]}}))}catch{}}function zg(){try{localStorage.removeItem(Gr)}catch{}}const st=(n,t,e)=>{const i=document.createElement("div");return i.className=n,e!=null&&(i.textContent=e),t==null||t.appendChild(i),i};class Hg{constructor(t){this.root=t,this.game=null,this.keys=[];const e=this.el={};e.bars=[st("letterbox top",t),st("letterbox bottom",t)],e.stick=st("stick hidden",t),e.knob=st("stick-knob",e.stick),this.stickVec={x:0,y:0},this._bindStick(),e.eyes=st("eyes",t),e.subtitle=st("subtitle hidden",t),e.clock=st("clock hidden",t),e.prompt=st("prompt hidden",t),e.hover=st("hover hidden",t),e.catcher=st("catcher hidden",t),e.dialogue=st("dialogue hidden",t),e.hold=st("hold hidden",t),e.toasts=st("toasts",t),e.modals=st("modal-root",t),e.fade=st("fade",t),e.fade.style.opacity="1",e.card=st("card",t),e.flash=st("flash",t),window.addEventListener("keydown",i=>{for(let s=this.keys.length-1;s>=0;s--)if(this.keys[s](i)===!0){i.preventDefault();return}})}setGame(t){this.game=t,t.on("frame",()=>{this.el.clock.classList.contains("hidden")||(this.el.clock.textContent=Dn(t.state.clock))})}pushKeys(t){return this.keys.push(t),()=>{const e=this.keys.indexOf(t);e>=0&&this.keys.splice(e,1)}}fade(t,e=600){const i=this.el.fade;return this._fade={from:this.fadeLevel(),to:t,t0:performance.now(),ms:e},i.style.transitionDuration=`${e}ms`,i.style.opacity=String(t),new Promise(s=>setTimeout(s,e))}fadeLevel(){const t=this._fade;if(!t)return parseFloat(this.el.fade.style.opacity)||0;const e=Math.min(1,(performance.now()-t.t0)/Math.max(1,t.ms));return t.from+(t.to-t.from)*e*e*(3-2*e)}flashLevel(){return this._flashAt?Math.max(0,1-(performance.now()-this._flashAt)/900):0}flash(){this._flashAt=performance.now();const t=this.el.flash;t.style.transition="none",t.style.opacity="1",requestAnimationFrame(()=>{t.style.transition="opacity 900ms ease-out",t.style.opacity="0"})}async card(t,e="",i=1800){const s=this.el.card;s.innerHTML="",t&&st("card-title",s,t),e&&st("card-sub",s,e),s.style.opacity="1",await new Promise(a=>setTimeout(a,i)),s.style.opacity="0",await new Promise(a=>setTimeout(a,500))}showClock(t){this.el.clock.classList.toggle("hidden",!t)}prompt(t,e){const i=this.el.prompt;if(clearTimeout(this._promptTimer),!t)return i.classList.add("hidden");i.textContent=t,i.classList.remove("hidden"),e&&(this._promptTimer=setTimeout(()=>i.classList.add("hidden"),e))}hover(t,e,i){const s=this.el.hover;if(!t)return s.classList.add("hidden");s.textContent=t,s.style.left=`${e+16}px`,s.style.top=`${i+14}px`,s.classList.remove("hidden")}toast(t,e=""){const i=st(`toast ${e}`,this.el.toasts,t);setTimeout(()=>i.classList.add("out"),2400),setTimeout(()=>i.remove(),2900)}subtitle(t,{real:e=!1,ms:i=2200}={}){const s=this.el.subtitle;clearTimeout(this._subTimer),s.textContent=t,s.classList.toggle("real",e),s.classList.remove("hidden"),this._subTimer=setTimeout(()=>s.classList.add("hidden"),i)}_bindStick(){const t=this.el.stick,e=46;let i=null;const s=o=>{const r=t.getBoundingClientRect();let l=o.clientX-(r.left+r.width/2),c=o.clientY-(r.top+r.height/2);const h=Math.hypot(l,c);h>e&&(l*=e/h,c*=e/h),this.el.knob.style.transform=`translate(${l}px, ${c}px)`,this.stickVec={x:l/e,y:c/e}},a=()=>{i=null,this.el.knob.style.transform="",this.stickVec={x:0,y:0}};t.addEventListener("pointerdown",o=>{i=o.pointerId,s(o);try{t.setPointerCapture(i)}catch{}}),t.addEventListener("pointermove",o=>o.pointerId===i&&s(o)),t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)}showStick(t){const e=t&&matchMedia("(pointer: coarse)").matches;this.el.stick.classList.toggle("hidden",!e),e||(this.stickVec={x:0,y:0})}letterbox(t){for(const e of this.el.bars)e.classList.toggle("on",t)}setEyes(t){this.el.eyes.style.opacity=t?"0":"1"}eyesOverlay(t){this.el.eyes.classList.toggle("on",t),this.setEyes(!t)}say(t,e,i){const s=this.game;s&&s.clock.paused++;const a=this.el.dialogue;a.innerHTML="";const o=t==="thought",[r,l=r.toLowerCase()]=t.split("|");o||st(`who ${l}`,a,r);const c=st(`line${o?" thought":""} ${l}`,a,e);a.classList.remove("hidden"),this.el.catcher.classList.remove("hidden");const h=performance.now();return new Promise(u=>{let f=()=>{},d=!1;this._cut=()=>{var p,_;c.textContent=c.textContent.replace(/[.?!…]+$/,"")+"—",(p=a.querySelector(".choices"))==null||p.remove(),(_=a.querySelector(".next"))==null||_.remove(),a.onclick=this.el.catcher.onclick=null,f(),setTimeout(()=>g(null),700)};const g=p=>{d||(d=!0,this._cut=null,a.classList.add("hidden"),this.el.catcher.classList.add("hidden"),a.onclick=null,this.el.catcher.onclick=null,f(),s&&s.clock.paused--,u(p))};if(!i){st("next",a,"tap to continue");const p=()=>{performance.now()-h<180||(s==null||s.sound.click(),g())};a.onclick=p,this.el.catcher.onclick=p,f=this.pushKeys(_=>{if(_.key===" "||_.key==="Enter")return p(),!0});return}const v=st("choices",a),m=i.map((p,_)=>{const w=document.createElement("button");w.className="choice";const y=p.nerve&&s.state.nerve<p.nerve;w.disabled=!!y,y&&w.classList.add("locked");const P=document.createElement("span");P.textContent=`${_+1}. ${p.text}`,w.appendChild(P);const T=y?`Needs Nerve ${p.nerve}`:p.nerve?`Nerve −${p.nerve}`:p.gain?`+${p.gain} Nerve`:p.tag||"";if(T){const A=document.createElement("span");A.className="tag",A.textContent=T,w.appendChild(A)}return w.onclick=A=>{A.stopPropagation(),!y&&(s==null||s.sound.click(),p.nerve&&s.addNerve(-p.nerve,"spent"),p.gain&&s.addNerve(p.gain,"honest"),g(p.value??_))},v.appendChild(w),w});f=this.pushKeys(p=>{const _=parseInt(p.key,10);if(_>=1&&_<=m.length&&!m[_-1].disabled)return m[_-1].click(),!0})})}cut(){var t;(t=this._cut)==null||t.call(this)}hold(t,e=1500,i,{cap:s=1}={}){const a=this.el.hold;a.innerHTML="",st("hold-label",a,t);const o=document.createElement("button");return o.className="hold-btn",o.innerHTML="<span>Hold</span>",a.appendChild(o),st("hold-key",a,"or hold Space"),a.classList.remove("hidden"),new Promise(r=>{let l=!1,c=0,h=0,u=performance.now();const f=v=>{v.code==="Space"&&(v.preventDefault(),l=!0)},d=v=>{v.code==="Space"&&(l=!1)};o.onpointerdown=v=>{v.preventDefault(),l=!0,o.setPointerCapture(v.pointerId)},o.onpointerup=o.onpointercancel=()=>l=!1,window.addEventListener("keydown",f),window.addEventListener("keyup",d);const g=v=>{const m=v-u;if(u=v,c=l?Math.min(s,c+m/e):Math.max(0,c-m/500),h=l&&c>=s?h+m:0,o.style.setProperty("--p",c),i==null||i(c),c>=1||h>1600){window.removeEventListener("keydown",f),window.removeEventListener("keyup",d),a.classList.add("hidden"),r();return}requestAnimationFrame(g)};requestAnimationFrame(g)})}holdSwitch(t,e){const i=this.el.hold;i.innerHTML="",st("hold-label",i,t);const s=document.createElement("button");s.className="hold-btn switch",s.innerHTML="<span>Hold</span>",i.appendChild(s),st("hold-key",i,"or hold Space"),i.classList.remove("hidden");let a=!1;const o=c=>{c!==a&&(a=c,s.classList.toggle("on",c),e(c))},r=c=>{c.code==="Space"&&(c.preventDefault(),o(!0))},l=c=>{c.code==="Space"&&o(!1)};return s.onpointerdown=c=>{c.preventDefault(),s.setPointerCapture(c.pointerId),o(!0)},s.onpointerup=s.onpointercancel=()=>o(!1),window.addEventListener("keydown",r),window.addEventListener("keyup",l),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",l),i.classList.add("hidden"),o(!1)}}modal(t,{wide:e=!1}={}){const i=st("modal",this.el.modals);st(`modal-box${e?" wide":""}`,i).appendChild(t);const a=this.pushKeys(()=>!1);return()=>{a(),i.remove()}}}const mr={1:["did u get there?? text me","have a good day at work!!","i miss you already. is that weird","i lit a candle for sandy","what do you want for dinner"],2:["how’s work","bear","bear","you didn’t answer","are you on break yet","i’m just checking"],3:["who’s working with you today","is it sarah","why aren’t you answering","i’m not mad","i’m not mad i’m not mad","i can wait"],4:["i’m by the door","still by the door","still here","i haven’t moved","i’ll wait","bear"]},Gg={1:75,2:40,3:22,4:14},Vg=[{text:"at work. love you",need:-8,kind:"sweet"},{text:"busy, i’ll text you at lunch",need:3,nerve:1,kind:"honest"},{text:"ok",need:-2,kind:"flat"}],Oa=[{id:"clingwraps",band:"The Clingwraps",title:"Never Leave",bpm:112,wave:"triangle",pattern:[64,null,67,null,71,69,67,null,64,null,67,null,72,71,67,null],bass:[40,40,43,45]},{id:"mallghost",band:"Mall Ghost",title:"Food Court Forever",bpm:92,wave:"square",pattern:[69,72,76,null,74,72,null,69,67,null,69,72,null,null,64,null],bass:[45,41,43,40]},{id:"dadsboat",band:"Dad’s Boat",title:"Sunscreen (Live)",bpm:132,wave:"sawtooth",pattern:[60,64,67,64,62,65,69,65,60,64,67,72,71,67,64,62],bass:[36,41,43,36]},{id:"velvet",band:"Velvet Hotline",title:"Press 4 for Love",bpm:76,wave:"sine",pattern:[76,null,null,74,72,null,71,null,69,null,null,71,72,null,null,null],bass:[45,45,41,43]}],rc=[["Sad Mall","Escalator"],["The Monkey Paws","Careful"],["Holy Roller Rink","Couples Skate"],["DJ Landlord","Late Fee"],["Kenny & the Ferns","Repotting"],["Gutter Saints","Gutter Saints"]],vs={greeting:"Thank you for calling One Wish Willow. Your wish is important to us.",menu:[["1","To make a wish, press 1."],["2","If your wish has come true, press 2."],["3","If your wish has come true and you would like to speak to someone, press 3."],["4","If the person you wished for is on the line with you now, press 4."],["9","To hear these options again, press 9."]],one:"To make a wish, break your Willow. Thank you for choosing One Wish Willow.",two:"Congratulations! Wishes cannot be modified, exchanged or refunded.",hold:"Please hold. Your estimated wait time is: one wish."},lc=["you’re awake.","are you awake?","bear.","do you love me?","close your eyes, bear.","i can wait."],Wg=["One wish per customer. A Willow will not break for anyone who has already wished.","Wishes cannot be modified, exchanged or refunded.","A wish ends when the wisher dies.","Wishes are granted as spoken."],an='system-ui, -apple-system, "Segoe UI", sans-serif',hi='ui-monospace, "SFMono-Regular", Menlo, monospace';function Hi(n,t,e){const i=[];for(const s of String(t).split(`
`)){let a="";for(const o of s.split(" ")){const r=a?`${a} ${o}`:o;n.measureText(r).width>e&&a?(i.push(a),a=o):a=r}i.push(a)}return i}function mi(n,t,e,i,s,a,o){n.beginPath(),n.roundRect(t,e,i,s,a),n.fillStyle=o,n.fill()}function cc(n,t,e=0){const i=document.createElement("canvas");i.width=i.height=t;const s=i.getContext("2d");return s.fillStyle="#d8d2de",s.fillRect(0,0,t,t),n&&Fr(s,n,{drift:e}),i}function hc(n,t,e,i,s){n.save(),n.beginPath(),n.arc(e+s/2,i+s/2,s/2,0,Math.PI*2),n.clip(),n.drawImage(t,e,i,s,s),n.restore()}function gh(n,t,{x:e,top:i,bottom:s,w:a,s:o=1,time:r=null}){const l=16*o,c=30*o,h=a*.74;n.font=`${22*o}px ${an}`;const u=[];let f=s;for(let d=t.length-1;d>=0;d--){const g=t[d],v=Hi(n,g.text,h-l*2),m=Math.max(...v.map(_=>n.measureText(_).width)),p=v.length*c+l*1.4+(r?18*o:0);if(f-p<i)break;f-=p,u.unshift({m:g,lines:v,tw:m,h:p,y:f}),f-=12*o}for(const{m:d,lines:g,tw:v,h:m,y:p}of u){const _=d.from==="me",w=Math.max(v,r?80*o:0)+l*2,y=_?e+a-w:e;mi(n,y,p,w,m,22*o,_?"#4f6345":"#ffffff"),n.fillStyle=_?"#ffffff":"#1d1621",n.font=`${22*o}px ${an}`,g.forEach((P,T)=>n.fillText(P,y+l,p+l+20*o+T*c)),r&&(n.globalAlpha=.55,n.font=`${13*o}px ${hi}`,n.fillText(r(d.time),y+l,p+m-l*.6),n.globalAlpha=1)}}const Xg="austinbeaulier.com/obsession",qg={nikki:ye,sarah:kn,ian:Ps},Yg={1:"online",2:"typing…",3:"typing… typing… typing…",4:"last seen: by the door"};function $g(n,t,e){const a=document.createElement("canvas");a.width=1080,a.height=1350;const o=a.getContext("2d");o.fillStyle="#e5e1e9",o.fillRect(0,0,1080,1350),o.fillStyle="#1d1621",o.font=`600 30px ${an}`,o.fillText(Dn(n.clock),56,66),mi(o,960,44,62,28,7,"#1d1621"),mi(o,964,48,34,20,4,"#e5e1e9");const r=t==="nikki",l=r&&n.flags.wished?Br(n.need):0;return hc(o,cc(qg[t],300,l),56,100,160),o.fillStyle="#1d1621",o.font=`700 56px ${an}`,o.fillText(t,244,172),o.fillStyle=r&&hn(n.need)>=3?"#b8324e":"#675d6c",o.font=`34px ${an}`,o.fillText(r?Yg[hn(n.need)]:"online",244,222),o.fillStyle="#d0c8d4",o.fillRect(56,286,968,2),gh(o,e,{x:56,top:312,bottom:1150,w:968,s:1.9,time:Dn}),o.fillStyle="#1d1621",o.fillRect(0,1180,1080,170),hc(o,cc(n.bear,200),56,1212,104),o.fillStyle="#f3eef5",o.font='400 58px Georgia, "Times New Roman", serif',o.fillText("Obsession",184,1270),o.fillStyle="#b9aec0",o.font=`24px ${hi}`,o.fillText(Xg,186,1312),a}let uc=null;const jg=()=>{var n;return(n=window.claude)!=null&&n.use?(uc||(uc=window.claude.use("downloads").catch(()=>null)),uc):Promise.resolve(null)};async function vh(){return!0}async function _h(n,t){const e=await jg();if(e)try{return await e.save({filename:t,data:n}),"saved"}catch(s){return(s==null?void 0:s.code)==="declined"?"declined":"failed"}const i=document.createElement("a");return i.href=URL.createObjectURL(n),i.download=t,i.click(),setTimeout(()=>URL.revokeObjectURL(i.href),4e3),"saved"}const yh=(n,t)=>new File([n],t,{type:n.type});function ka(n,t){var e;try{return!!((e=navigator.canShare)!=null&&e.call(navigator,{files:[yh(n,t)]}))}catch{return!1}}async function wh(n,t,e){try{return await navigator.share({files:[yh(n,t)],text:e}),!0}catch{return!1}}function xh(n,{title:t,sub:e,media:i,blob:s,filename:a,text:o="Obsession"}){return new Promise(r=>{n.clock.paused++;const l=document.createElement("div");l.className="task share";const c=document.createElement("h2");c.textContent=t,l.appendChild(c),e&&st("task-sub",l,e),i.classList.add("share-media"),l.appendChild(i);const h=st("fm-actions",l),u=(g,v,m)=>{const p=document.createElement("button");return p.className=v,p.textContent=g,p.onclick=m,h.appendChild(p),p},f=()=>{var g;d(),n.clock.paused--,(g=i.pause)==null||g.call(i),r()};ka(s,a)&&u("Share…","btn",async()=>{await wh(s,a,o)&&n.ui.toast("Shared")}),vh().then(g=>{if(!g)return;const v=u("Save",ka(s,a)?"btn ghost":"btn",async()=>{v.disabled=!0;const m=await _h(s,a);v.disabled=!1,n.ui.toast(m==="saved"?"Saved":m==="declined"?"Not saved":"Couldn’t save here")});h.prepend(v)}),u("Close","btn ghost",f);const d=n.ui.modal(l,{wide:!0})})}const Mh=n=>new Promise(t=>n.toBlob(t,"image/png")),_s=Symbol("hangup");class Kg{constructor(t,e){this.g=t,this.threads={nikki:[]},this.unreadBy={},this.offers={},this.thread="nikki",this.view="messages",this.isOpen=!1,this.inCall=!1,this.honestReplies=0,this.btn=document.createElement("button"),this.btn.className="phone-btn hidden",this.btn.setAttribute("aria-label","Phone"),this.btn.innerHTML='<span class="glyph"></span><span class="badge hidden"></span>',this.btn.onclick=()=>this.toggle(),e.appendChild(this.btn),this.panel=st("phone hidden",e),window.addEventListener("keydown",i=>{(i.key==="p"||i.key==="P")&&!this.btn.classList.contains("hidden")&&this.toggle(),i.key==="Escape"&&this.isOpen&&!this.inCall&&this.close()})}reset(){this.close(),this.threads={nikki:[]},this.unreadBy={},this.offers={},this.thread="nikki",this.view="messages",this.honestReplies=0,this.hint(!1)}enable(t){this.btn.classList.toggle("hidden",!t),t||this.close()}get msgs(){return this.threads.nikki}get unread(){return Object.values(this.unreadBy).reduce((t,e)=>t+e,0)}get ignored(){return this.msgs.filter(t=>t.from==="nikki"&&!t.answered).length}get awaitingReply(){const t=this.msgs[this.msgs.length-1];return t&&t.from==="nikki"&&!t.answered}_viewing(t){return this.isOpen&&this.view==="messages"&&this.thread===t}receive(t,e="nikki"){var s;const i=this.g.state;((s=this.threads)[e]||(s[e]=[])).push({from:e,text:t,time:i.clock,answered:!1}),e==="nikki"&&i.stats.textsReceived++,this._viewing(e)?this.render():(this.unreadBy[e]=(this.unreadBy[e]||0)+1,this.isOpen&&this.render()),this.g.sound.buzz(),this.btn.classList.remove("buzz"),this.btn.offsetWidth,this.btn.classList.add("buzz"),this._badge()}offer(t,e){return new Promise(i=>{this.offers[t]={replies:e,resolve:i},this._viewing(t)&&this.render()})}_send(t,e){const i=this.threads[t];i.push({from:"me",text:e,time:this.g.state.clock});for(const s of i)s.from!=="me"&&(s.answered=!0);this.g.sound.click()}reply(t){const e=this.g;this._send("nikki",t.text),e.state.stats.replies++,e.addNeed(t.need,`reply: ${t.text}`),t.nerve&&this.honestReplies<2&&(this.honestReplies++,e.addNerve(t.nerve,"honest reply")),this.render()}hint(t){this.hotlineHint=t,this._badge(),this.isOpen&&this.render()}_badge(){const t=this.btn.querySelector(".badge"),e=this.unread;t.textContent=e?String(e):this.hotlineHint?"!":"",t.classList.toggle("hidden",!e&&!this.hotlineHint)}toggle(){this.isOpen?this.close():this.open()}open(t,e){if(this.isOpen=!0,t&&(this.view=t),e)this.thread=e;else if(!t&&!this.unreadBy[this.thread]){const i=Object.keys(this.threads).find(s=>this.unreadBy[s]||this.offers[s]);i&&(this.view="messages",this.thread=i)}this.panel.classList.remove("hidden"),this.render()}async shareThread(){const t=this.g,e=this.thread,i=$g(t.state,e,this.threads[e]),s=await Mh(i);await xh(t,{title:"Share the thread",sub:e==="nikki"?"Her face in the corner is how she looks right now.":null,media:i,blob:s,filename:`obsession-${e}-thread.png`})}close(){this.inCall||(this.isOpen=!1,this.panel.classList.add("hidden"))}render(){const t=this.panel;t.innerHTML="";const e=st("phone-head",t);if(st("",e,Dn(this.g.state.clock)),this.view==="messages"&&!this.inCall&&(this.threads[this.thread]||[]).length){const o=document.createElement("button");o.className="phone-share",o.textContent="share",o.onclick=()=>this.shareThread(),e.appendChild(o)}const i=document.createElement("button");i.className="phone-x",i.textContent="×",i.disabled=this.inCall,i.onclick=()=>this.close(),e.appendChild(i);const s=st("phone-tabs",e),a=(o,r,l,c)=>{const h=document.createElement("button");h.textContent=o+(l?" •":""),h.className=r?"on":"",h.disabled=this.inCall,h.onclick=c,s.appendChild(h)};for(const o of Object.keys(this.threads))a(o,this.view==="messages"&&this.thread===o,this.unreadBy[o]||this.offers[o],()=>{this.view="messages",this.thread=o,this.render()});a("calls",this.view!=="messages",this.hotlineHint,()=>{this.view="hotline",this.render()}),this.view==="messages"?this._renderThread(t):this.view==="hotline"?this._renderContacts(t):this._renderCall(t)}_renderThread(t){const e=this.thread,i=this.threads[e]||[];this.unreadBy[e]=0,this._badge();const s=st("thread",t);i.length||st("empty",s,"No messages yet.");for(const r of i){const l=st(`msg${r.from==="me"?" me":""}`,s,r.text),c=document.createElement("time");c.textContent=Dn(r.time),l.appendChild(c)}requestAnimationFrame(()=>s.scrollTop=s.scrollHeight);const a=st("replies",t),o=this.offers[e];if(o)for(const r of o.replies){const l=document.createElement("button");l.textContent=r.text,l.onclick=()=>{this.offers[e]===o&&(delete this.offers[e],this._send(e,r.text),this.render(),o.resolve(r.value??r.text))},a.appendChild(l)}else if(e==="nikki"&&this.awaitingReply)for(const r of Vg){const l=document.createElement("button");if(l.textContent=r.text,r.nerve&&this.honestReplies<2){const c=document.createElement("span");c.className="tag",c.textContent="+1 Nerve",l.appendChild(c)}l.onclick=()=>this.reply(r),a.appendChild(l)}else st("empty",a,i.length?"Delivered":"")}_renderContacts(t){const e=st("contacts",t),i=st(`contact${this.hotlineHint?" hint":""}`,e);st("contact-name",i,"One Wish Willow"),st("contact-sub",i,"Customer Service · 1-800-WILLOWS");const s=document.createElement("button");s.className="call-btn",s.textContent="Call",s.onclick=()=>this.call(),i.appendChild(s)}_renderCall(t){const e=st("transcript",t);for(const a of this.transcript)st(`tl ${a.kind}`,e,a.text);requestAnimationFrame(()=>e.scrollTop=e.scrollHeight);const i=st("call-foot",t);if(this.callChoices)for(const a of this.callChoices){const o=document.createElement("button");o.className="call-choice",o.textContent=a.text,o.onclick=()=>this._choose(a.value),i.appendChild(o)}else{const a=st("keypad",i);for(const o of["1","2","3","4","5","6","7","8","9","*","0","#"]){const r=document.createElement("button");r.textContent=o,r.disabled=!this.keypadOn,r.onclick=()=>this._press(o),a.appendChild(r)}}const s=document.createElement("button");s.className="hangup",s.textContent="Hang up",s.onclick=()=>this._hangup(),i.appendChild(s)}_line(t,e,i=700){if(!this.inCall)throw _s;return this.transcript.push({kind:t,text:e}),this.render(),new Promise(s=>setTimeout(s,i)).then(()=>{if(!this.inCall)throw _s})}_key(){return this.keypadOn=!0,this.render(),new Promise(t=>this._keyWait=t).then(t=>{if(!this.inCall)throw _s;return t})}_press(t){if(this.g.sound.key(),!this._keyWait)return;const e=this._keyWait;this._keyWait=null,this.keypadOn=!1,this.transcript.push({kind:"me",text:`[${t}]`}),e(t)}_ask(t){return this.callChoices=t,this.render(),new Promise(e=>this._choiceWait=e).then(e=>{if(!this.inCall)throw _s;return e})}_choose(t){if(!this.callChoices)return;const e=this._choiceWait,i=this.callChoices.find(s=>s.value===t);this._choiceWait=null,this.callChoices=null,this.transcript.push({kind:"me",text:i.text}),e==null||e(t)}_hangup(){var t,e;this.inCall&&(this.inCall=!1,this.g.sound.holdMusic(!1),(t=this._keyWait)==null||t.call(this,""),(e=this._choiceWait)==null||e.call(this,null),this._keyWait=this._choiceWait=null,this.callChoices=null,this.g.clock.paused--,this.view="hotline",this.render())}async call(){if(this.inCall)return;const t=this.g;this.inCall=!0,t.clock.paused++,this.view="call",this.transcript=[],this.callChoices=null,this.keypadOn=!1,this.hint(!1);try{for(await this._line("sys","Calling One Wish Willow…",1100),await this._line("ivr",vs.greeting,1300);;){for(const[,i]of vs.menu)await this._line("ivr",i,450);const e=await this._key();if(e==="1")return await this._line("ivr",vs.one,1600),this._hangup();if(e==="2"){await this._line("ivr",vs.two,1500);continue}if(e==="3")return await this._rep();if(e==="4")return await this._nikki();e!=="9"&&await this._line("ivr","Sorry, that is not a valid option.",900)}}catch(e){if(e!==_s)throw e}}async _rep(){const t=this.g;if(await this._line("ivr",vs.hold,900),t.sound.holdMusic(!0),await this._line("sys","♪ hold music ♪",3200),t.sound.holdMusic(!1),await this._line("rep","REP: Hey, One Wish Willow. What’s up.",900),await this._ask([{text:"I need to change my wish.",value:"change"},{text:"Wrong number.",value:"wrong"}])==="wrong")return await this._line("rep","REP: No worries! Have a magical day.",1400),this._hangup();t.state.flags.calledRep||(t.state.flags.calledRep=!0,t.addNerve(1,"faced the hotline")),await this._line("rep","REP: Okay. So I can’t change it, and I can’t cancel it. I can tell you when it ends, if you want to know that.",1200),await this._ask([{text:"When does it end?",value:"when"},{text:"No. I don’t want to know.",value:"no"}])==="when"?(await this._line("rep","REP: When you die!",1300),await this._line("rep","REP: Sorry. That came out really upbeat. It’s the script.",1300),await this._line("rep","REP: Is there anything else I can help you with today?",1e3),await this._ask([{text:"No.",value:"no"}])):await this._line("rep","REP: Totally valid. Have a magical day.",1200),this._hangup()}async _nikki(){const t=this.g;await this._line("ivr","Connecting you now.",1200),t.state.flags.nikkiOnLine=!0,t.addNeed(12,"hotline put her on the line"),t.post.glitch=1,t.sound.scream(),await this._line("scream","NIKKI: BEAR?",700),await this._line("scream","NIKKI: BEAR WHO ARE YOU TALKING TO",700),await this._line("scream","NIKKI: WHO IS THIS. WHO IS THIS. BEAR",600),await this._ask([{text:"Hang up. Hang up hang up hang up.",value:"hang"}]),this._hangup()}}const dc=[["Skin","skin",Bs.length],["Hair color","hair",ks.length],["Hairstyle","hairStyle",cr],["Eyes","eyes",hr],["Brows","brows",ur],["Nose","nose",dr],["Mouth","mouth",fr],["Shirt","shirt",Or.length]];function Jg(n){return new Promise(t=>{const e=dh(),i=document.createElement("div");i.className="facemaker";const s=document.createElement("h2");s.textContent="Make your Bear",i.appendChild(s),st("task-sub",i,"This is you. Nikki will love this face more than anyone in the world.");const a=st("fm-body",i),o=document.createElement("canvas");o.width=240,o.height=240,o.className="fm-preview",a.appendChild(o);const r=st("fm-rows",a),l={},c=()=>{const g=o.getContext("2d");g.clearRect(0,0,240,240),g.fillStyle="#e5e1e9",g.fillRect(0,0,240,240),Fr(g,e);for(const[,v,m]of dc){const p=e[v];l[v].textContent=typeof m=="number"?`${p+1} / ${m}`:p}};for(const[g,v,m]of dc){const p=st("fm-row",r);st("fm-label",p,g);const _=P=>{typeof m=="number"?e[v]=(e[v]+P+m)%m:e[v]=m[(m.indexOf(e[v])+P+m.length)%m.length],n.sound.click(),c()},w=document.createElement("button");w.textContent="‹",w.setAttribute("aria-label",`Previous ${g}`),w.onclick=()=>_(-1),l[v]=document.createElement("span"),l[v].className="fm-value";const y=document.createElement("button");y.textContent="›",y.setAttribute("aria-label",`Next ${g}`),y.onclick=()=>_(1),p.append(w,l[v],y)}const h=st("fm-actions",i),u=document.createElement("button");u.className="btn ghost",u.textContent="Randomize",u.onclick=()=>{Object.assign(e,Ag()),n.sound.click(),c()};const f=document.createElement("button");f.className="btn",f.textContent="That’s me",f.onclick=()=>{d(),t(e)},h.append(u,f),c();const d=n.ui.modal(i,{wide:!0})})}const fc={day2:["DAY 2","End of Day 2","Day 3 is the party. Nikki is coming."],day3:["DAY 3","End of Day 3","Night 3 is the park."],night3:["NIGHT 3","End of Night 3","Day 4 is the Willows."],day4:["DAY 4","End of Day 4","The finale is the last Willow."]},Sh={theatrical:["THEATRICAL","Theatrical","The film’s ending. Most first runs end here."],littleBrother:["LITTLE BROTHER","Little Brother","The honest ending. The best ending in the game is a no."],forever:["FOREVER","Forever","The dating-sim win. The worst ending in the game."]},bh=n=>Sh[n.ending]||fc[n.chapter]||fc.day2;function Zg(n){const t=n.stats,e=600,i=n.flags,s=[i.toldRealNikki&&"NIKKI",i.toldSarah&&"SARAH",i.toldIan&&"IAN, SORT OF"].filter(Boolean),a=Object.values(n.fates).filter(g=>g==="alive").length,o=t.fallout.length?t.fallout.map((g,v)=>[v?"":"FALLOUT",g]):[["FALLOUT","NONE"]],r=[["CUSTOMER","BEAR"],["TEXTS FROM NIKKI",t.textsReceived],["TEXTS IGNORED",t.ignored??0],["REPLIES SENT",t.replies],["HOURS SHE WAITED BY THE DOOR",t.hoursWaited||"0 (she was fine)"],["PROMISES MADE",t.promises],["LIES TOLD",t.lies],["TIMES YOU OPENED YOUR EYES",t.looks],["RECORD",n.record?`${n.record.band} – ${n.record.title}`:"NONE"],["NERVE",`${n.nerve} / 5`],["TOLD THE TRUTH TO",s.length?s.join(", "):"NO ONE"],["NIKKI, LAST SEEN",`${ph[hn(n.need)]} (tier ${hn(n.need)})`],...o,["FRIENDS LEFT",`${a} OF 2`],["LEFT WORK",t.leftEarlyAt||"AT SIX"],...n.ending?[["ENDING",Sh[n.ending][1]]]:[],...n.loops?[["WEEKS STARTED OVER",n.loops]]:[]],l=360+r.length*40+200,c=document.createElement("canvas");c.width=e,c.height=l;const h=c.getContext("2d");h.fillStyle="#f7f5ef",h.fillRect(0,0,e,l),h.fillStyle="#1d1621",h.textAlign="center",h.font="700 34px ui-monospace, Menlo, monospace",h.fillText("ONE WISH WILLOW",e/2,64),h.font="500 16px ui-monospace, Menlo, monospace",h.fillText(`WISH RECEIPT · ${bh(n)[0]}`,e/2,92);const u=document.createElement("canvas");u.width=200,u.height=200,Fr(u.getContext("2d"),n.bear),h.save(),h.beginPath(),h.arc(e/2,200,86,0,Math.PI*2),h.fillStyle="#e5e1e9",h.fill(),h.clip(),h.drawImage(u,e/2-100,100,200,200),h.restore(),h.font="500 15px ui-monospace, Menlo, monospace";const f=g=>h.fillText("- ".repeat(32),e/2,g);f(316),h.textAlign="left";let d=350;h.font="500 14px ui-monospace, Menlo, monospace",h.fillText("WISH: “NIKKI LOVES ME MORE THAN ANYONE",40,d),h.fillText("IN THE WORLD”",40,d+=20),d+=30;for(const[g,v]of r){const m=String(v).toUpperCase();h.textAlign="left",h.fillText(g,40,d),h.textAlign="right",h.fillText(m.length>30?m.slice(0,29)+"…":m,e-40,d),d+=40}return h.textAlign="center",f(d),h.font="700 20px ui-monospace, Menlo, monospace",h.fillText("TOTAL ...................... ONE WISH",e/2,d+=44),h.font="500 13px ui-monospace, Menlo, monospace",h.fillText("ALL WISHES FINAL. NO REFUNDS OR EXCHANGES.",e/2,d+=40),h.fillText("WISH ENDS WHEN WISHER DIES.",e/2,d+=22),h.fillText("obsession · graybox",e/2,d+=34),c}function Qg(n){return new Promise(()=>{const t=Zg(n.state),e=document.createElement("div");e.className="receipt";const[i,s,a]=bh(n.state),o=document.createElement("h2");o.textContent=s,e.appendChild(o),st("task-sub",e,a),t.className="receipt-img",e.appendChild(t);const r=st("fm-actions",e),l=`wish-receipt-${i.toLowerCase().replace(" ","")}.png`;Mh(t).then(h=>{if(ka(h,l)){const u=document.createElement("button");u.className="btn",u.textContent="Share…",u.onclick=()=>wh(h,l,"Obsession"),r.prepend(u)}vh().then(u=>{if(!u)return;const f=document.createElement("button");f.className=ka(h,l)?"btn ghost":"btn",f.textContent="Save receipt",f.onclick=async()=>{const d=await _h(h,l);n.ui.toast(d==="saved"?"Saved":d==="declined"?"Not saved":"Couldn’t save here")},r.prepend(f)})});const c=document.createElement("button");c.className="btn ghost",c.textContent="Play again",c.onclick=()=>location.search?location.assign(location.pathname):location.reload(),r.append(c),n.ui.modal(e,{wide:!0})})}function tv(n,t,{visible:e=!1,beat:i=()=>""}={}){const s=st(`debug${e?"":" hidden"}`,t),a=st("dbg-info",s),o=st("dbg-bar",s),r=st("dbg-fill",o),l=st("dbg-log",s),c=st("dbg-btns",s),h=(f,d)=>{const g=document.createElement("button");g.textContent=f,g.onclick=d,c.appendChild(g)};h("Need −10",()=>n.addNeed(-10,"debug")),h("Need +10",()=>n.addNeed(10,"debug")),h("Nerve +1",()=>n.addNerve(1,"debug")),h("Grime −",()=>n.post.target=Math.max(0,n.post.target-.1)),h("Grime +",()=>n.post.target=Math.min(1,n.post.target+.1)),h("Clock +1h",()=>n.advance(60));const u=st("dbg-btns",s);for(const f of["sandy","crystals","car","wake","date","firstNight","morning","shift","home","night","party","hospital","lucid","park","willows","billion","lastWillow","receipt"]){const d=document.createElement("button");d.textContent=f,d.onclick=()=>location.assign(`${location.pathname}?beat=${f}&debug=1&need=${Math.round(n.state.need)}&nerve=${n.state.nerve}`),u.appendChild(d)}window.addEventListener("keydown",f=>{f.key==="`"&&s.classList.toggle("hidden")}),n.on("frame",()=>{if(s.classList.contains("hidden"))return;const f=n.state,d=hn(f.need);a.textContent=`${i()} · ${Dn(f.clock)}
Need ${f.need.toFixed(1)} · tier ${d} ${ph[d]}
Nerve ${f.nerve}/5 · grime ${n.post.amount.toFixed(2)}`,r.style.width=`${f.need}%`,r.dataset.tier=d,l.textContent=f.log.slice(0,6).join(`
`)})}const ev=12,nv=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"];class iv{constructor(t){var e;this.g=t,this.supported=typeof MediaRecorder<"u"&&!!HTMLCanvasElement.prototype.captureStream,this.mime=this.supported?nv.find(i=>MediaRecorder.isTypeSupported(i)):null,this.mime||(this.supported=!1),this.ext=(e=this.mime)!=null&&e.startsWith("video/mp4")?"mp4":"webm",this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.recorders=[],this.running=!1,this.lastDraw=0}start(){if(!this.supported||this.running)return;this._fit(),window.addEventListener("resize",()=>this._fit()),this.stream=this.canvas.captureStream(0),this.track=this.stream.getVideoTracks()[0];const t=this.g.sound.streamDest();for(const e of(t==null?void 0:t.getAudioTracks())||[])this.stream.addTrack(e);this.running=!0,this._spawn(),this.timer=setInterval(()=>this._spawn(),ev*1e3),this.g.on("frame",()=>{try{this._draw()}catch(e){console.error(e)}})}_fit(){const e=(matchMedia("(pointer: coarse)").matches?854:960)/Math.max(innerWidth,innerHeight);this.canvas.width=Math.round(innerWidth*e/2)*2,this.canvas.height=Math.round(innerHeight*e/2)*2}_spawn(){const t=new MediaRecorder(this.stream,{mimeType:this.mime,videoBitsPerSecond:25e5}),e={rec:t,chunks:[],started:performance.now()};for(t.ondataavailable=i=>i.data.size&&e.chunks.push(i.data),t.start(1e3),this.recorders.push(e);this.recorders.length>2;)this.recorders.shift().rec.stop()}async clip(){const t=this.recorders.shift();return t?(await new Promise(e=>{t.rec.onstop=e,t.rec.stop()}),this._spawn(),{blob:new Blob(t.chunks,{type:this.mime.split(";")[0]}),seconds:(performance.now()-t.started)/1e3}):null}async save(){if(!this.running||this.saving)return;this.saving=!0,this.g.ui.toast("Clipping the last few seconds…");const t=await this.clip();if(this.saving=!1,!(t!=null&&t.blob.size))return this.g.ui.toast("Nothing to clip yet");const e=document.createElement("video");e.src=URL.createObjectURL(t.blob),e.controls=!0,e.autoplay=!0,e.muted=!0,e.loop=!0,e.playsInline=!0,await xh(this.g,{title:"Clip",sub:`The last ${Math.round(t.seconds)} seconds, with sound. Tap the video to unmute.`,media:e,blob:t.blob,filename:`obsession-clip.${this.ext}`}),URL.revokeObjectURL(e.src)}_draw(){var u,f;const t=performance.now();if(t-this.lastDraw<30)return;this.lastDraw=t;const{ctx:e,canvas:i}=this,s=i.width,a=i.height,o=Math.min(s,a)/540,r=this.g,l=r.ui.el,c=d=>!d.classList.contains("hidden"),h=d=>c(d)&&parseFloat(d.style.opacity)||0;if(e.drawImage(r.canvas,0,0,s,a),l.eyes.classList.contains("on")&&this._veil("#000",h(l.eyes)),l.bars[0].classList.contains("on")&&(e.fillStyle="#000",e.fillRect(0,0,s,a*.07),e.fillRect(0,a*.93,s,a*.07)),c(l.subtitle)){const d=l.subtitle.classList.contains("real");e.font=`${d?"italic ":""}${21*o}px ${an}`,e.textAlign="center",e.shadowColor="#000",e.shadowBlur=10*o,e.fillStyle="#f3eef5",Hi(e,l.subtitle.textContent,s-60*o).forEach((g,v)=>e.fillText(g,s/2,a*.7+v*28*o)),e.shadowBlur=0,e.textAlign="left"}c(l.dialogue)&&this._dialogue(s,a,o),r.phone.isOpen&&this._phone(s,a,o),this._toasts(s,o),this._veil("#000",r.ui.fadeLevel()),h(l.card)>.01&&this._card(s,a,o,h(l.card)),this._veil("#fff",r.ui.flashLevel()),e.globalAlpha=.55,e.fillStyle="#f3eef5",e.font=`${15*o}px Georgia, serif`,e.textAlign="right",e.fillText("Obsession",s-12*o,a-12*o),e.textAlign="left",e.globalAlpha=1,(f=(u=this.track).requestFrame)==null||f.call(u)}_veil(t,e){e<=.01||(this.ctx.globalAlpha=e,this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1)}_dialogue(t,e,i){const s=this.ctx,a=this.g.ui.el.dialogue,o=a.querySelector(".who"),r=a.querySelector(".line"),l=[...a.querySelectorAll(".choice")],c=Math.min(t-24*i,640*i),h=(t-c)/2,u=14*i;s.font=`${r!=null&&r.classList.contains("thought")||r!=null&&r.classList.contains("real")?"italic ":""}${18*i}px ${an}`;const f=Hi(s,(r==null?void 0:r.textContent)||"",c-u*2);s.font=`${15*i}px ${an}`;const d=l.map(p=>{var _;return Hi(s,((_=p.querySelector("span"))==null?void 0:_.textContent)||"",c-u*4)}),g=u*2+(o?22*i:0)+f.length*25*i+d.reduce((p,_)=>p+_.length*20*i+14*i,0),v=e-g-e*.085;s.globalAlpha=.9,mi(s,h,v,c,g,12*i,"#141018"),s.globalAlpha=1;let m=v+u;o&&(s.font=`600 ${12*i}px ${hi}`,s.fillStyle=getComputedStyle(o).color,s.fillText(o.textContent.toUpperCase(),h+u,m+12*i),m+=22*i),s.fillStyle=r!=null&&r.classList.contains("thought")?"#b9aec0":"#f3eef5",s.font=`${r!=null&&r.classList.contains("thought")||r!=null&&r.classList.contains("real")?"italic ":""}${18*i}px ${an}`,f.forEach(p=>{s.fillText(p,h+u,m+18*i),m+=25*i}),l.forEach((p,_)=>{const w=p.classList.contains("locked"),y=d[_].length*20*i+8*i;mi(s,h+u,m+4*i,c-u*2,y,8*i,"rgba(255,255,255,0.08)"),s.fillStyle=w?"rgba(243,238,245,0.4)":"#f3eef5",s.font=`${15*i}px ${an}`,d[_].forEach((P,T)=>s.fillText(P,h+u*2,m+20*i+T*20*i)),m+=y+6*i})}_phone(t,e,i){const s=this.ctx,a=this.g.phone,o=Math.min(t*.46,300*i),r=Math.min(e*.72,520*i),l=t-o-14*i,c=e-r-70*i;if(mi(s,l,c,o,r,24*i,"#e5e1e9"),s.fillStyle="#675d6c",s.font=`${11*i}px ${hi}`,s.fillText(Dn(this.g.state.clock),l+16*i,c+24*i),a.view==="messages"){s.fillStyle="#1d1621",s.font=`700 ${15*i}px ${an}`,s.fillText(a.thread,l+16*i,c+46*i),gh(s,a.threads[a.thread]||[],{x:l+12*i,top:c+60*i,bottom:c+r-14*i,w:o-24*i,s:i*.62});return}s.font=`${12*i}px ${hi}`;let h=c+r-18*i;for(const u of[...a.transcript||[]].reverse()){const f=Hi(s,u.text,o-32*i);if(h-=f.length*16*i+6*i,h<c+40*i)break;s.fillStyle=u.kind==="scream"?"#b8324e":u.kind==="me"?"#4f6345":"#1d1621",f.forEach((d,g)=>s.fillText(d,l+16*i,h+g*16*i+12*i))}}_toasts(t,e){const i=this.ctx;let s=16*e;for(const a of this.g.ui.el.toasts.children){if(a.classList.contains("out"))continue;i.font=`${12*e}px ${hi}`;const o=i.measureText(a.textContent).width+20*e;i.globalAlpha=.9,mi(i,t-o-12*e,s,o,26*e,6*e,"#141018"),i.globalAlpha=1,i.fillStyle=getComputedStyle(a).color,i.fillText(a.textContent,t-o-2*e,s+17*e),s+=32*e}}_card(t,e,i,s){var c,h;const a=this.ctx,o=this.g.ui.el.card;a.globalAlpha=s,a.textAlign="center",a.fillStyle="#f3eef5";const r=(c=o.querySelector(".card-title"))==null?void 0:c.textContent,l=(h=o.querySelector(".card-sub"))==null?void 0:h.textContent;r&&(a.font=`${64*i}px Georgia, serif`,a.fillText(r,t/2,e/2)),l&&(a.fillStyle="#b9aec0",a.font=`${13*i}px ${hi}`,Hi(a,l.toUpperCase(),t-80*i).forEach((u,f)=>a.fillText(u,t/2,e/2+(r?44:0)*i+f*22*i))),a.textAlign="left",a.globalAlpha=1}}const Eh=1.5;function un(n,t={}){return new de({color:n,...t})}function Y(n,t,e,i,s,a=0,o=0,r=0,l){const c=new lt(new Pe(t,e,i),un(s,l));return c.position.set(a,o+e/2,r),n.add(c),c}function Jt(n,t,e,i,s=0,a=0,o=0,r=16){const l=new lt(new cn(t,t,e,r),un(i));return l.position.set(s,a+e/2,o),n.add(l),l}function Sa(n,t,e,i,s,a,o,r=0){const l=new lt(new we(t,e),new ge({color:i}));return l.position.set(s,a,o),l.rotation.y=r,n.add(l),l}function Ue(n,t,e,i,s,a,o=0,r=null){const l=i-t,c=s-e,h=new lt(new we(l,c),un(a,r?{map:qn(r,l,c,Math.round(t*7+e*13))}:{}));return h.rotation.x=-Math.PI/2,h.position.set((t+i)/2,o,(e+s)/2),h.receiveShadow=!0,h.userData.noCast=!0,n.add(h),h}function zs(n,t,e,i,s,a,o=2.6,r=.35){const l=new It(a).multiplyScalar(r),c=new lt(new we(i-t,s-e),un(a,{emissive:l,map:qn("plaster",i-t,s-e)}));return c.userData.noCast=!0,c.rotation.x=Math.PI/2,c.position.set((t+i)/2,o,(e+s)/2),n.add(c),c}function Hs(n,t,e,i,s,a=[],{h:o=2.6,t:r=.12,color:l="#e9e3d8",tex:c="plaster",trim:h="#f4efe6"}={}){const u=e===s,f=u?Math.min(t,i):Math.min(e,s),d=u?Math.max(t,i):Math.max(e,s),g=[...a].sort((p,_)=>p[0]-_[0]),v=[];let m=f;for(const[p,_]of g)p>m&&v.push([m,p]),m=Math.max(m,_);return m<d&&v.push([m,d]),v.map(([p,_])=>{const w=_-p,y=(p+_)/2,P=c?{map:qn(c,w,o,Math.round(y*11))}:void 0,T=u?Y(n,w,o,r,l,y,0,e,P):Y(n,r,o,w,l,t,0,y,P);if(T.userData.noCast=!0,T.receiveShadow=!0,h){const A=u?Y(n,w,.1,r+.03,h,y,0,e):Y(n,r+.03,.1,w,h,t,0,y);A.userData.noCast=!0,A.userData.batch=!0}return T})}function ln(n,t,e,i,s,a,o=0,{sky:r=["#9cc8f0","#e8f2ff"],frame:l="#f2eee6",light:c=!0}={}){const h=new At,u=new lt(new we(t,e),new ge({map:Sg(...r)}));h.add(u);const f=.06;for(const[g,v,m,p]of[[t+f*2,f,0,e/2],[t+f*2,f,0,-e/2],[f,e,-t/2,0],[f,e,t/2,0],[f*.6,e,0,0],[t,f*.6,0,0]]){const _=new lt(new Pe(g,v,.05),un(l));_.position.set(m,p,.02),h.add(_)}const d=new lt(new Pe(t+.2,.04,.14),un(l));return d.position.set(0,-e/2-.04,.06),h.add(d),h.traverse(g=>g.userData.noCast=!0),h.userData.noCollide=!0,h.position.set(i,s,a),h.rotation.y=o,n.add(h),c&&h.add(sv(t,e,r[1])),h}function sv(n,t,e){const i=document.createElement("canvas");i.width=32,i.height=64;const s=i.getContext("2d"),a=s.createImageData(32,64);for(let r=0;r<64;r++)for(let l=0;l<32;l++){const c=Math.sin(l/31*Math.PI),h=Math.pow(1-r/63,1.6)*c*c*.13,u=(r*32+l)*4;a.data[u]=a.data[u+1]=a.data[u+2]=255,a.data[u+3]=Math.round(h*255)}s.putImageData(a,0,0);const o=new lt(new we(n*1.05,2.4),new ge({map:new wi(i),color:e,transparent:!0,depthWrite:!1,blending:Mo,side:De}));return o.rotation.x=-1.05,o.position.set(0,-t/2-.35,.95),o.userData.noCast=!0,o}function Cn(n,t,e,i,s=i,a=.013){const o=new lt(new we(i*2,s*2),new ge({map:lh(),transparent:!0,depthWrite:!1}));return o.rotation.x=-Math.PI/2,o.position.set(t,a,e),o.userData.noCast=!0,n.add(o),o}function Xt(n,t,e,i,{y:s=Eh,marker:a=!0}={}){const o=new C(n,s,t),{yaw:r,pitch:l}=Hr(o,new C(...e));return{pos:o,yaw:r,pitch:l,label:i,marker:a}}function rs(n,{sky:t="#ffffff",ground:e="#8a8070",hemi:i=1.2,sun:s="#ffffff",sunI:a=1.2,sunPos:o=[4,8,-6],center:r=[0,0,0],span:l=8}={}){if(n.add(new oh(t,e,i)),a>0){const c=new gg(s,a);c.position.set(r[0]+o[0],r[1]+o[1],r[2]+o[2]),c.target.position.set(...r),c.castShadow=!0,c.shadow.mapSize.set(1024,1024);const h=c.shadow.camera;h.left=h.bottom=-l,h.right=h.top=l,h.near=.5,h.far=40,c.shadow.bias=-6e-4,c.shadow.normalBias=.03,c.shadow.radius=3,n.add(c,c.target)}}function se(n,t,e,i,s,a,o=6){const r=new xi(t,e,o,1.5);return r.position.set(i,s,a),n.add(r),r}function rt(n,t,e,i,s=0,a=0){return t.position.set(e,a,i),t.rotation.y=s,t.userData.batch=!0,n.add(t),t}const Ye=(n,t)=>`#${new It(n).multiplyScalar(t).getHexString()}`,Fe=()=>({map:Ur("grain")}),ui=()=>({map:Ur("fabric")});function qi(n,t,e,i,{top:s=.05,leg:a=.05}={}){const o=new At;Y(o,n,s,t,i,0,e-s,0,Fe());for(const r of[-1,1])for(const l of[-1,1])Y(o,a,e-s,a,Ye(i,.8),r*(n/2-a),0,l*(t/2-a));return o}function Is(n,{seat:t=.46}={}){const e=new At;Y(e,.44,.05,.42,n,0,t-.05,0,Fe()),Y(e,.44,.42,.05,n,0,t,-.19,Fe());for(const i of[-1,1])for(const s of[-1,1])Y(e,.04,t-.05,.04,Ye(n,.8),i*.19,0,s*.18);return e}function ba(n,t,e,{seats:i=3,seat:s=.45}={}){const a=new At,o=.16,r=.22,l=.06,c=.24;for(const f of[-1,1])for(const d of[-1,1])Jt(a,.025,l,"#2a2420",f*(n/2-.08),0,d*(t/2-.08),6);Y(a,n,c,t,Ye(e,.78),0,l,0,ui()),Y(a,n,.55,r,Ye(e,.86),0,l+c,-t/2+r/2,ui());for(const f of[-1,1])Y(a,o,.6-l,t,Ye(e,.9),f*(n/2-o/2),l,0,ui());const h=n-o*2,u=h/i;for(let f=0;f<i;f++){const d=-h/2+u*(f+.5);Y(a,u-.03,s-c-l,t-r-.02,e,d,l+c,r/2,ui());const g=Y(a,u-.05,.36,.13,Ye(e,1.04),d,s,-t/2+r+.05,ui());g.rotation.x=-.12}return a}function av(n,t,e,i,{top:s=.54}={}){const a=new At;Y(a,n,.3,t,e,0,0,0,Fe()),Y(a,n-.08,s-.3,t-.08,"#f2efe8",0,.3,0),Y(a,n-.02,.05,t*.62,i,0,s-.02,t*.19-.01,ui()),Y(a,n-.02,s-.12,.03,i,0,.12,t/2-0,ui());for(const o of[-1,1]){const r=Y(a,n*.38,.12,.34,"#fbf9f4",o*n*.23,s,-t/2+.3);r.rotation.x=-.15}return Y(a,n,1.05,.08,Ye(e,.9),0,0,-t/2+.04,Fe()),a}function ov(n){const t=new At;return Y(t,.48,.55,.42,n,0,0,0,Fe()),Y(t,.42,.012,.01,Ye(n,.6),0,.32,.211),Y(t,.08,.02,.02,"#c8b48a",0,.42,.22),t}function gr({floor:n=!1,shadeColor:t="#f4e2c0",glow:e=!0}={}){const i=new At,s=n?1.45:.32;Jt(i,n?.14:.07,.03,"#3a3430",0,0,0,12),Jt(i,.015,s,"#3a3430",0,0,0,6);const a=new lt(new cn(n?.14:.08,n?.2:.12,n?.26:.16,14,1,!0),new de({color:t,emissive:e?t:"#000",emissiveIntensity:e?.8:0,side:De}));return a.position.y=s+(n?.1:.06),a.userData.noCast=!0,i.add(a),i}function rv(n=.22,t="#fff6e6"){const e=new lt(new cn(n,n*1.1,.06,18),new ge({color:t}));return e.userData.noCast=!0,e}function lv(n,t,e,i,{rows:s=4,seed:a=1}={}){const o=new At,r=.03;Y(o,r,t,e,i,-n/2+r/2,0,0,Fe()),Y(o,r,t,e,i,n/2-r/2,0,0,Fe()),Y(o,n,r,e,i,0,t-r,0,Fe()),Y(o,n,t,.02,Ye(i,.7),0,0,-e/2+.01);const l=(t-r)/s,c=["#a8433a","#3a5a8a","#d8b04a","#4a7a52","#7a4a8a","#e8e0cc","#2a2a30","#c8703a"];let h=a;for(let u=0;u<s;u++){const f=u*l;Y(o,n-r*2,r,e,i,0,f,0);let d=-n/2+r+.02;for(;d<n/2-.12;){const g=.04+h*7%5*.012,v=l*(.55+h*13%7*.05);Y(o,g,v,e*.8,c[h%c.length],d+g/2,f+r,.02),d+=g+.004,h++,h%9===0&&(d+=.1)}}return o}function Fa(n,t,e,i="#d8d2c8",{h:s=.9}={}){const a=new At;Y(a,n,.08,t-.06,"#2a2622",0,0,-.03),Y(a,n,s-.12,t,e,0,.08,0,Fe()),Y(a,n+.04,.04,t+.04,i,0,s-.04,0,{map:Ur("tile")});const o=Math.max(1,Math.round(n/.5)),r=n/o;for(let l=0;l<o;l++){const c=-n/2+r*(l+.5);Y(a,.012,s-.2,.01,Ye(e,.7),c+r/2-.006,.1,t/2+.005),Y(a,.1,.02,.025,"#b8b0a4",c+r*.3,s-.25,t/2+.01)}return a}function Th(n,t,e,i="#eef0f0"){const s=new At;Y(s,n,t,e,i,0,0,0),Y(s,n-.02,.012,.01,"#9aa0a4",0,t*.66,e/2+.003);for(const a of[t*.78,t*.4])Y(s,.03,.26,.04,"#b8bcc0",n/2-.09,a,e/2+.02);return s}function cv(){const n=new At;Y(n,.66,.02,.56,"#1e1e22",0,0,0);for(const[t,e]of[[-.16,-.13],[.16,-.13],[-.16,.13],[.16,.13]])Jt(n,.09,.012,"#3a3a40",t,.02,e,14);return n}function pc(){const n=new At;Y(n,.56,.02,.42,"#c8ccd0",0,0,0),Y(n,.46,.022,.32,"#5a6066",0,.001,.02);const t=Jt(n,.015,.26,"#c8ccd0",0,0,-.17,8),e=Y(n,.03,.03,.14,"#c8ccd0",0,.24,-.11);return t.userData.noCast=e.userData.noCast=!0,n}function ts(n=1,{pot:t="#b8643a",leaf:e="#4f8a4a"}={}){const i=new At,s=new lt(new cn(.15*n,.11*n,.28*n,12),un(t));s.position.y=.14*n,i.add(s);const a=un(e);for(let o=0;o<7;o++){const r=new lt(new Ua(.13*n,0),a),l=o*.9;r.position.set(Math.cos(l)*.1*n,(.36+o%3*.14)*n,Math.sin(l)*.1*n),r.scale.set(1,1.6,.6),r.rotation.set(.3*Math.sin(l),l,.4*Math.cos(l)),i.add(r)}return i}function Pn(n,t,e=["#e8b4a0","#7aa0c0","#f2e6c8"],i="#2e2a28"){const s=new At;Y(s,n,t,.035,i,0,0,0);const a=document.createElement("canvas");a.width=32,a.height=32;const o=a.getContext("2d");o.fillStyle=e[2],o.fillRect(0,0,32,32),o.fillStyle=e[0],o.beginPath(),o.arc(12,13,8,0,Math.PI*2),o.fill(),o.fillStyle=e[1],o.fillRect(0,21,32,11);const r=new wi(a);r.colorSpace=Ee;const l=new lt(new we(n-.06,t-.06),new de({map:r}));return l.position.set(0,t/2,.019),s.add(l),s.traverse(c=>c.userData.noCast=!0),s}function Ts(n,t,e,i){const s=document.createElement("canvas");s.width=64,s.height=64;const a=s.getContext("2d");a.fillStyle=i,a.fillRect(0,0,64,64),a.fillStyle=e,a.fillRect(6,6,52,52),a.strokeStyle=i,a.lineWidth=2,a.strokeRect(14,14,36,36);const o=new wi(s);o.colorSpace=Ee;const r=new lt(new we(n,t),new de({map:o}));r.rotation.x=-Math.PI/2,r.position.y=.008,r.userData.noCast=!0;const l=new At;return l.add(r),l}function Pa(n,t,e,{trim:i="#f2eee6",knob:s="#c8b070"}={}){const a=new At;Y(a,n,t,.05,e,0,0,0,Fe());for(const r of[.25,t*.55])Y(a,n*.7,t*.3,.012,Ye(e,.88),0,r,.03);const o=new lt(new Ne(.035,10,8),un(s));o.position.set(n/2-.1,1,.06),a.add(o);for(const r of[-1,1])Y(a,.07,t+.07,.06,i,r*(n/2+.035),0,.01);return Y(a,n+.14,.07,.06,i,0,t,.01),a}function hv(n=1.2,t="#4a3a2e"){const e=new At;Y(e,1.6,.46,.44,t,0,0,0,Fe());for(const s of[-1,1])Y(e,.012,.36,.01,Ye(t,.6),s*.27,.05,.22);Y(e,.24,.03,.16,"#1a1a1e",0,.46,0),Y(e,.05,.12,.04,"#1a1a1e",0,.48,-.02),Y(e,n,n*.6,.05,"#141418",0,.58,-.03);const i=new lt(new we(n-.06,n*.6-.06),new de({color:"#1a1c24"}));return i.position.set(0,.58+n*.3,0),i.userData.noCast=!0,e.add(i),{group:e,screen:i}}function Ah(n="#6a5440"){const t=new At;Y(t,1,.7,.5,n,0,0,0,Fe());for(let a=0;a<9;a++)Y(t,.012,.28,.24,["#e85d75","#5de8a8","#e8c25d","#8a5de8","#e8e3d8"][a%5],-.4+a*.03,.06,.1);Y(t,.48,.08,.38,"#2a2a2e",0,.7,0);const e=new At,i=Jt(e,.15,.012,"#111114",0,0,0,28);i.userData.noCast=!0,Jt(e,.05,.014,"#e85d75",0,0,0,16),e.position.set(-.05,.785,0),t.add(e);const s=Y(t,.02,.02,.24,"#c8ccd0",.17,.81,-.02);return s.rotation.y=.35,{group:t,platter:e}}function xo(n){const t=new At;Y(t,1.75,.55,4,n,0,.3,0),Y(t,1.6,.5,2,Ye(n,.85),0,.85,-.15),Y(t,1.62,.36,1.9,"#1a2028",0,.92,-.15);for(const e of[-1,1])for(const i of[-1.3,1.3]){const s=Jt(t,.32,.22,"#141414",e*.82,.32,i,14);s.rotation.z=Math.PI/2,s.position.set(e*.8,.32,i)}for(const e of[-.6,.6])Y(t,.3,.1,.02,"#ffe8b0",e,.6,2,{emissive:"#3a2a10"});return t}function mc(n=1,{leaf:t="#2e4a30",trunk:e="#3a2c20"}={}){const i=new At;Jt(i,.12*n,2.2*n,e,0,0,0,8);const s=un(t);for(const[a,o,r,l]of[[0,2.6,0,1.1],[.6,2.2,.2,.75],[-.5,2.3,-.3,.8],[.1,3.2,-.2,.7]]){const c=new lt(new Ua(l*n,1),s);c.position.set(a*n,o*n,r*n),i.add(c)}return i}function gc(n="#3a3a40"){const t=new At;Jt(t,.06,4.2,n,0,0,0,8),Y(t,.7,.06,.12,n,.32,4.15,0);const e=new lt(new Pe(.34,.08,.22),new ge({color:"#fff2d0"}));return e.position.set(.6,4.1,0),e.userData.noCast=!0,t.add(e),t}function uv(n="#6a5040"){const t=new At;for(let e=0;e<3;e++)Y(t,1.6,.04,.12,n,0,.44,-.14+e*.14,Fe());for(let e=0;e<2;e++)Y(t,1.6,.12,.04,n,0,.62+e*.16,-.22,Fe());for(const e of[-.7,.7])Y(t,.06,.44,.4,"#2a2a2e",e,0,0);return t}const dv={morning:{bg:"#cfe3f2",sky:["#7fb8ee","#f0f7ff"],shaft:"#fff1d8",hemiSky:"#dbe8ff",ground:"#a08a70",hemi:.8,sun:"#ffe6c0",sunI:2.4,fixture:"#fffaf0",ceilingGlow:.28,eye:.25,grade:{exposure:1.2,bloom:1.2,warm:"#fff0dc",cool:"#e6efff"}},evening:{bg:"#2d2233",sky:["#3a2a58","#f4a066"],shaft:"#ffb070",hemiSky:"#f2c79a",ground:"#3a2a30",hemi:.42,sun:"#ff9a5a",sunI:1.1,fixture:"#ffe4bc",ceilingGlow:.12,eye:.4,grade:{exposure:1.3,bloom:1.7,warm:"#ffe2bc",cool:"#d6dcff"}},night:{bg:"#05060b",sky:["#03040c","#18224a"],shaft:"#4a5aa0",hemiSky:"#5a6a9a",ground:"#0a0a12",hemi:.1,sun:"#8aa0ff",sunI:.4,fixture:"#3a3a44",ceilingGlow:.03,eye:.28,grade:{exposure:1.35,bloom:1.9,warm:"#ffd6ac",cool:"#c6d2ff"}}};function vn(n,{time:t="morning",tape:e=!0,shrine:i=!0,sandy:s=!1,wreck:a=!1}={}){const o=dv[t],r=t!=="night",l=new yi;l.background=new It(o.bg),t==="night"&&(l.fog=new Da("#05060b",.12)),rs(l,{sky:o.hemiSky,ground:o.ground,hemi:o.hemi,sun:o.sun,sunI:o.sunI,sunPos:[-3,7,-8],span:7.5});const c=[],h=(...X)=>c.push(...Hs(l,...X));Ue(l,-6,-5,-1,1,"#b8b0c8",0,"carpet"),Ue(l,-1,-5,6,1,"#c89e74",0,"wood"),Ue(l,-6,1,1,5,"#b8946c",0,"wood"),Ue(l,1,1,6,5,"#e2ded4",0,"tile"),zs(l,-6,-5,6,5,"#f2eee8",2.6,o.ceilingGlow),h(-6,-5,6,-5),h(-6,5,6,5,[[-3.5,-2.5]]),h(-6,-5,-6,5),h(6,-5,6,5,[[2.5,3.5]]),h(-1,-5,-1,1,[[-1.6,-.4]]),h(-6,1,-1,1),h(-1,1,6,1,[[-.8,.8],[2.2,4.8]]),h(1,1,1,5,[[2.4,3.8]]);const u={sky:o.sky,light:!0},f=[ln(l,1.6,1,-2.9,1.55,-4.93,0,u),ln(l,1.6,1.1,4.9,1.6,-4.93,0,u),ln(l,1.2,.8,3.6,1.7,4.93,Math.PI,u)];for(const X of f)X.children[X.children.length-1].material.color.set(o.shaft);for(const[X,O]of[[-3.5,-2],[2.6,-2.2],[3.3,3],[-2,3],[-5.2,2.1]])rt(l,rv(.2,o.fixture),X,O,0,2.57);rt(l,av(2,2.2,"#6a5a7a","#8f80b4"),-4.6,-3.6),rt(l,ov("#8a7a6a"),-3.2,-4.6),rt(l,gr({glow:r}),-3.2,-4.6,0,.55),r&&se(l,"#ffc48a",t==="evening"?1.4:.5,-3.2,1,-4.5,3.5);const d=new At;Y(d,1.1,1,.5,"#8a7a6a",0,0,0);for(const X of[.3,.6,.85]){Y(d,1.02,.01,.01,"#5a4e44",0,X,.255);for(const O of[-.25,.25])Y(d,.08,.02,.02,"#c8b48a",O,X-.12,.26)}rt(l,d,-2,-4.7),rt(l,ts(.8),-2.3,-4.6,0,1),rt(l,Pn(.8,.5),-4.6,-4.92,0,1.3),rt(l,Ts(1.6,1,"#c8b8d8","#8a7aa0"),-4.6,-1.9),Cn(l,-4.6,-3.6,1.15,1.25),rt(l,ba(2.4,1,"#6d7a8c",{seats:3}),3,-1.2,Math.PI),Cn(l,3,-1.2,1.35,.65);const g=hv(1.2);rt(l,g.group,3,-4.72);const v=g.screen;rt(l,Ts(2.6,1.8,"#b8a890","#7a5a48"),3,-2.6),rt(l,gr({floor:!0,glow:r}),1.6,-.6),t==="evening"&&se(l,"#ffb36a",2.2,1.6,1.6,-.6,5.5),rt(l,ts(1.1),5.45,-.55),rt(l,Pn(.7,.5,["#e8c06a","#5a8a9a","#f4eee0"]),-.93,-3.2,Math.PI/2,1.35);const m=Ah(),p=m.group;rt(l,p,.8,-4.6);const _=qi(.6,.6,.65,"#5a4a3a"),w=Y(_,.28,.16,.2,"#c9b28f",0,.65,-.05);Y(w,.3,.02,.22,"#b89e7a",0,.08,0);const y=new At;Jt(y,.03,.12,"#f2efe6",.18,.65,.12);const P=new lt(new Ne(.018,8,6),new ge({color:"#ffcf7a"}));P.position.set(.18,.8,.12),y.add(P);const T=Pn(.16,.2,["#e8a060","#8a6a5a","#f0e0c8"],"#2a2420");T.position.set(-.16,.65,-.18),T.rotation.x=-.15,y.add(T);const A=new lt(new os(.07,.012,6,16),new de({color:"#c83a4a"}));A.rotation.x=Math.PI/2,A.position.set(.05,.66,.16),y.add(A),_.add(y),rt(l,_,5.3,-3.8),w.visible=i,y.visible=i,i&&se(l,"#ffbf6a",t==="night"?.8:.5,5.48,.9,-3.68,2.5);let k=null,b=null;s&&(k=Jt(l,.32,.1,"#c9785a",4.75,0,-2.15,20),Jt(l,.24,.11,"#e8c9a8",4.75,.01,-2.15,20),b=Jt(l,.11,.05,"#5a8cc9",2,0,3.9,14),Jt(l,.08,.02,"#8a6a4a",2,.05,3.9,10)),rt(l,Fa(3.8,.7,"#c9c2b6","#ece6dc"),3.8,4.6,Math.PI),rt(l,cv(),3.6,4.6,Math.PI,.9),rt(l,pc(),4.9,4.6,Math.PI,.9),rt(l,Th(.8,1.8,.7),1.48,4.58,Math.PI),rt(l,qi(1,.7,.75,"#8a6f52"),4.3,2.1),rt(l,Is("#8a6f52"),4.3,1.4),rt(l,Is("#8a6f52"),5.15,2.1,-Math.PI/2),Cn(l,4.3,2.1,.7,.5),Cn(l,3.8,4.55,2,.45);const M=Y(l,.22,.26,.14,"#b98e5a",2.6,.9,4.5);t==="evening"&&se(l,"#ffd8a8",1.3,3.3,2.3,3,6);const R=Pa(1,2.1,"#7a5a44");if(e)for(const[X,O]of[[.9,1.05],[-.9,1.05],[0,.6],[0,1.5]]){const tt=Y(R,X?2.2:1.05,.06,.012,"#a3a3a0",0,O-.03,.07);tt.rotation.z=X}rt(l,R,-3,4.94,Math.PI),rt(l,Ts(.9,.55,"#5a6a5a","#3a4a3a"),-3,4.4),Ue(l,-6,1,-4.4,3.2,"#d8e2e2",.004,"tile"),h(-4.4,1,-4.4,3.2,[[1.7,2.9]]),h(-6,3.2,-4.4,3.2),Y(l,.75,.55,1.6,"#eef2f4",-5.6,0,2.1),Y(l,.6,.02,1.4,"#c8d4dc",-5.6,.54,2.1),Y(l,.45,.8,.4,"#eef2f4",-5,0,1.25),rt(l,pc(),-5,1.25,0,.8),Sa(l,.6,.7,"#9fb0b8",-5,1.55,1.07);const F=new lt(new we(1.4,1.7),new de({color:"#8fb8c8",side:De}));F.rotation.y=Math.PI/2,F.position.set(-5.2,1.3,2.2),F.visible=!1,l.add(F);const U=Y(l,.06,2.1,1.2,"#7a5a44",-4.4,0,2.3);U.visible=!1;const V=Pa(1,2.1,"#8a6a50"),$=new lt(new we(.4,.5),new ge({color:o.sky[1]}));if($.position.set(0,1.5,.04),V.add($),rt(l,V,5.94,3,-Math.PI/2),a){for(const[X,O]of[[4.6,-2.6],[4.2,-3.6],[3.4,-3.9],[1.8,-3],[2.2,-1.9],[.4,-.6],[-.4,.4],[-2.4,.4],[3.6,.6],[4.4,1.6]]){Jt(l,.03,.1+Math.random()*.08,"#f2efe6",X,0,O,8);const tt=new lt(new Ne(.016,6,4),new ge({color:"#ffcf7a"}));tt.position.set(X,.22,O),l.add(tt)}l.add(new oh("#6a78a0","#1a1418",.55)),se(l,"#ffb066",2.2,2.6,.6,-2.4,6),se(l,"#ffb066",1.6,0,.6,.2,5),se(l,"#a8b8d0",3.5,-4.6,1.9,2.1,4);for(const[X,O,tt]of[[3.6,.2,.5],[-3,3.9,.4],[-4,-2,.6],[2.4,3.8,.35],[-1.2,-1,.3]]){const it=new lt(new Os(tt,18),new de({color:"#3a2620"}));it.rotation.x=-Math.PI/2,it.position.set(X,.011,O),it.userData.noCast=!0,l.add(it)}}t==="night"&&(se(l,"#6a7ab0",.3,3,2.3,2.6,7),se(l,"#4a5a90",.25,2.5,2.3,-2.2,7));const W={bed:Xt(-3.4,-1,[2,1.3,-1],"Bedroom"),living:Xt(1.4,-2,[3,1.1,-4],"Living room"),records:Xt(.8,-3.5,[.8,.8,-4.6],"Record player"),memorial:Xt(4.6,-3,[5.3,.8,-3.8],"Sandy’s memorial"),entry:Xt(-1.8,2.6,[-3,1.2,5],"Front hall"),frontdoor:Xt(-3,3.8,[-3,1.25,5],"Front door"),kitchen:Xt(3,2.6,[3.6,1.3,4.4],"Kitchen"),backdoor:Xt(5,3,[6,1.3,3],"Back door"),backdoorIn:Xt(5,3,[1.5,1.3,3],"Back door",{marker:!1}),bedLie:Xt(-4.6,-4,[-1.5,1.1,-1],"Bed",{y:.85,marker:!1}),couch:Xt(2.4,-1.3,[3,.8,-4.7],"Couch",{y:1.15,marker:!1}),bath:Xt(-4.7,2.75,[-5.6,.9,1.5],"Bathroom")};return{scene:l,blockers:c,hotspots:W,grade:o.grade,eyeLight:o.eye,objects:{records:p,memorial:_,remains:w,candle:y,lunch:M,frontDoor:R,backDoor:V,tv:v,catBed:k,bowl:b,dresser:d,curtain:F,bathDoor:U},marks:{kitchen:[3.6,0,3.95,Math.PI],byBackDoor:[4.2,0,3,Math.PI/2],table:[3.4,0,1.75,Math.PI/2],facingFront:[-2.9,0,3.7,0],couchSeat:[3.6,-.08,-1.25,Math.PI],waiting:[3.6,0,.2,Math.atan2(1.4,2.8)],night:[[-1.3,0,-1],[-2.6,0,-1.8],[-4.6,0,-2],[-3.25,0,-3.5],[-3.3,0,-3.7]]},rooms:[{name:"bedroom",test:(X,O)=>X<-1&&O<1,spots:[[-2.2,-1.6],[-3.6,.3],[-5.4,-1.3],[-2.6,-3.4]]},{name:"living room",test:(X,O)=>X>=-1&&O<1,spots:[[.3,-1.2],[5.2,.3],[.2,-3.2],[4.6,-2.6],[2,.3]]},{name:"bathroom",test:(X,O)=>X<=-4.4&&O>=1&&O<3.2,spots:[[-4.8,2.9]]},{name:"front hall",test:(X,O)=>X<1&&O>=1,spots:[[-1.4,3.9],[.2,1.8],[-3.6,1.6],[-2,2]]},{name:"kitchen",test:(X,O)=>X>=1&&O>=1,spots:[[2,2],[1.8,3.4],[5.3,3.8],[3.2,1.5]]}],eye:Eh,update(X){n.sound.recordTimer&&(m.platter.rotation.y-=X*3.5)}}}const ma=["#c48af0","#8ad8f0","#f08ab8","#f0d88a","#8af0b0","#e8e8f8"];function Ch(n,{stock:t=4,day:e=!1}={}){const i=new yi;i.background=new It("#1a1222"),rs(i,{sky:"#f0d8ff",ground:"#4a3a4a",hemi:1.15,sun:"#ffd8b0",sunI:.5,sunPos:[3,6,5]}),se(i,"#d8a0ff",1.1,-1,2.3,-1.5,6),se(i,"#ffd0a0",.9,2.5,2.3,.5,6);const s=[],a=(v,m,p,_,w=[])=>s.push(...Hs(i,v,m,p,_,w,{color:"#5a4668",h:2.6}));Ue(i,-4,-3,4,3,"#7a5a44",0,"wood"),rt(i,Ts(2.6,2.2,"#7a3a5a","#4a2038"),0,.4),zs(i,-4,-3,4,3,"#3a2a44",2.6,.4),a(-4,-3,4,-3),a(-4,3,4,3,[[-.6,.6]]),a(-4,-3,-4,3),a(4,-3,4,3);const o=e?["#9cc8ec","#eef4f8"]:["#080a1c","#24305a"];ln(i,1,1.9,0,1,2.94,Math.PI,{sky:o,light:!1}),ln(i,1.6,.9,3.94,1.6,.2,-Math.PI/2,{sky:o,light:e});for(const[v,m]of[[-2.2,.4],[.2,-1.2],[1.8,.8]]){Jt(i,.006,.7,"#2a2028",v,1.9,m,4);const p=new lt(new Ne(.09,12,8),new ge({color:"#ffd8a0"}));p.position.set(v,1.85,m),i.add(p),se(i,"#ffc890",.9,v,1.7,m,3.5)}rt(i,ts(1.1,{pot:"#6a4a8a"}),3.4,2.4),rt(i,ts(.8,{pot:"#4a6a8a"}),-3.5,-2.3);for(const v of[-2.6,-.2,2.2]){Y(i,2,1.9,.08,"#4a3428",v,0,-2.92);for(let m=0;m<3;m++){Y(i,2,.04,.32,"#5a4030",v,.36+m*.55,-2.78);for(let p=0;p<6;p++){const _=ma[(p+m*2+Math.round(v))%ma.length],w=new lt(new Es(.07+(p*7+m)%3*.02),new de({color:_,emissive:new It(_).multiplyScalar(.35)}));w.position.set(v-.8+p*.32,.48+m*.55,-2.75),w.rotation.set(p,m,0),i.add(w)}}}const r=new At;Y(r,6.6,1.9,.5,"#000000",0,0,0).visible=!1,r.position.set(-.2,0,-2.6),i.add(r);const l=new At;rt(l,Fa(2.2,.8,"#5a3a4a","#2e242a",{h:1}),0,0,Math.PI/2),Y(l,.35,.25,.4,"#2e2e34",0,1,-.5);for(let v=0;v<5;v++){const m=new lt(new Es(.05+v%2*.02),new de({color:ma[v],emissive:new It(ma[v]).multiplyScalar(.4)}));m.position.set(.1,1.07,.2+v*.13),l.add(m)}l.position.set(-2.6,0,.6),i.add(l),Cn(i,-2.6,.6,.6,1.2);const c=new At;Y(c,1.2,.9,.6,"#3a2a30",0,0,0);const h=Y(c,1.16,.25,.56,"#c8e0f0",0,.9,0,{transparent:!0,opacity:.35});h.material.depthWrite=!1;const u=new lt(new Es(.045),new de({color:"#f4a8c0",emissive:"#6a2a3a"}));u.position.set(0,.97,0),c.add(u),c.position.set(-.6,0,-.9),i.add(c);const f=new At;Y(f,.6,.95,.6,"#4a3428",0,0,0),Jt(f,.09,.14,"#d8d0c0",0,.95,0,12);const d=[];for(let v=0;v<4;v++){const m=new lt(new cn(.008,.012,.34,6),new de({color:"#8a6a3a"}));m.position.set(-.04+v%2*.07,1.15,-.03+Math.floor(v/2)*.06),m.rotation.set((v-1.5)*.12,0,v%2?.15:-.15),m.visible=v<t,f.add(m),d.push(m)}Y(f,.34,.22,.02,"#f0e6c8",0,.98,.31),f.position.set(1.4,0,-.6),i.add(f),Jt(i,.05,.08,"#d8b040",0,2.25,2.85,8);const g={entry:Xt(0,2.2,[0,1.2,-2],"Door"),counter:Xt(-1.5,.6,[-2.6,1.2,.6],"Counter"),jewelry:Xt(-.6,.2,[-.6,.9,-.9],"Jewelry case"),willows:Xt(1.4,.4,[1.4,1.1,-.6],"One Wish Willows"),shelves:Xt(1.6,-1.7,[1.6,1,-2.8],"Shelves")};return{scene:i,blockers:s,hotspots:g,grade:{exposure:1.3,bloom:1.9,warm:"#ffe6d0",cool:"#ddd0ff"},eyeLight:.4,objects:{counter:l,jewelry:c,willows:f,shelves:r},twigs:d,marks:{viola:[-3.25,0,.6,Math.PI/2],harry:[2.8,0,-1.9,-Math.PI/4]}}}function Gs(n,t){const e=document.createElement("div");e.className="task";const i=document.createElement("h2");return i.textContent=n,e.appendChild(i),st("task-sub",e,t),e}function fv(n){return new Promise(t=>{const e=Gs("Restring the Strat","Tap each string when it lights up. Low to high."),i=st("strings",e),s=[["E",82.4],["A",110],["D",146.8],["G",196],["B",246.9],["e",329.6]];let a=0;const o=s.map(([l,c],h)=>{const u=document.createElement("button");return u.className="string",u.style.setProperty("--w",`${6-h}px`),u.innerHTML=`<span>${l}</span><i></i>`,u.onclick=()=>{var f;if(h!==a){n.sound.wrong(),u.classList.remove("shake"),u.offsetWidth,u.classList.add("shake");return}n.sound.pluck(c),u.classList.add("done"),a++,(f=o[a])==null||f.classList.add("lit"),a===s.length&&setTimeout(()=>(r(),t()),500)},i.appendChild(u),u});o[0].classList.add("lit");const r=n.ui.modal(e)})}function pv(n){return new Promise(t=>{const e=Gs("Ring up a customer","Scan each item, then take the total."),i=[["Guitar picks (12)",4.99],["Capo",14.99],["Cassette: Mall Ghost, Food Court Forever",9.99]],s=st("items",e);let a=0;const o=document.createElement("button");o.className="btn",o.disabled=!0,o.textContent="Total: $0.00";for(const[c,h]of i){const u=document.createElement("button");u.className="item",u.innerHTML=`<span>${c}</span><b>$${h.toFixed(2)}</b>`,u.onclick=()=>{if(u.classList.contains("done"))return;n.sound.beep(),u.classList.add("done"),a++;const f=i.slice(0,a).reduce((d,[,g])=>d+g,0);o.textContent=`Total: $${f.toFixed(2)}`,o.disabled=a<i.length},s.appendChild(u)}const r=st("task-quip",e);o.onclick=()=>{n.sound.beep(),r.textContent=n.phone.unread>=2?"Customer: “Is that your girlfriend? Your phone hasn’t stopped.”":"Customer: “Cool, thanks.”",o.disabled=!0,setTimeout(()=>(l(),t()),1400)},e.appendChild(o);const l=n.ui.modal(e)})}function mv(n){return new Promise(t=>{const e=Gs("Price the bargain bin","Sticker every record. Everything is $3."),i=st("sleeves",e);let s=rc.length;for(const[o,r]of rc){const l=document.createElement("button");l.className="sleeve",l.innerHTML=`<b>${o}</b><span>${r}</span><i>$3</i>`,l.onclick=()=>{l.classList.contains("done")||(n.sound.click(),l.classList.add("done"),--s===0&&setTimeout(()=>(a(),t()),500))},i.appendChild(l)}const a=n.ui.modal(e)})}function Vr(n,t){return new Promise(e=>{const i=Gs("Put on a record","It keeps playing through whatever happens next."),s=st("items",i);for(const r of t){const l=document.createElement("button");l.className="item",l.innerHTML=`<span><b>${r.band}</b> · ${r.title}</span>`,l.onclick=()=>(o(),e(r)),s.appendChild(l)}const a=document.createElement("button");a.className="btn ghost",a.textContent="Leave it off",a.onclick=()=>(o(),e(null)),i.appendChild(a);const o=n.ui.modal(i)})}async function gv(n){const{ui:t,state:e}=n;e.clock=20*60+5;const i=n.load(vn,{time:"evening",tape:!1,shrine:!1,sandy:!0,at:"backdoorIn",grime:0,grimeNow:!0});t.showClock(!0),n.phone.enable(!0),await t.fade(0,1400),await t.say("thought","The emergency vet gave me her collar and a little box."),await t.say("thought","Sandy. Fourteen years. She was fine this morning."),t.prompt("Find a place for Sandy.",6e3);let s=!1,a=!1;n.interact(i.objects.memorial,{label:"Sandy’s table",hotspot:"memorial",use:async()=>{if(s)return t.say("thought","Her spot. She slept here every afternoon, in the one patch of sun.");s=!0,i.objects.remains.visible=!0,await t.say("thought","Her spot. She slept here every afternoon, in the one patch of sun."),n.run(o)}}),n.interact(i.objects.catBed,{label:"Sandy’s bed",hotspot:"memorial",use:()=>t.say("thought","Still shaped like her.")}),n.interact(i.objects.bowl,{label:"Food bowl",hotspot:"kitchen",use:()=>t.say("thought","Full. She didn’t eat today. I should have noticed that.")}),n.interact(i.objects.frontDoor,{label:"Front door",hotspot:"frontdoor",use:()=>t.say("thought","Locked. Normal. Just a door.")}),n.interact(i.objects.backDoor,{label:"Back door",hotspot:"backdoor",use:async()=>{if(!a)return t.say("thought",s?"My phone.":"Not yet. Sandy first.");n.sound.door(),n.endRoam()}});async function o(){await n.wait(1200),n.phone.receive("Eastside Animal ER: We’re so sorry about Sandy. Her test came back positive for oxycodone. Please keep all medications out of reach of pets.","vet"),await n.wait(1600),n.phone.receive("bear. ian told me. i’m so so sorry"),await n.wait(1e3),n.phone.receive("she was the best cat in the world"),await n.wait(1e3),n.phone.receive("come get me? i’m at kelsey’s. we can just drive around"),await n.wait(900),n.phone.receive("also i have to tell you something. in person"),t.prompt("Your phone (P).");let r=await n.phone.offer("nikki",[{text:"On my way.",value:"go"},{text:"I don’t really feel like going out.",value:"no"}]);r==="no"&&(await n.wait(900),n.phone.receive("please? i don’t want you sitting in that house alone"),r=await n.phone.offer("nikki",[{text:"Ok. On my way.",value:"go"}])),a=!0,t.prompt(null),await n.wait(700),n.phone.close(),await t.say("thought","Oxycodone. From the bottle on my nightstand. The cap was off this morning."),await t.say("thought","Nikki has something to tell me. In person."),await t.say("thought","I could tell her something too. Tonight. I could finally say it."),await t.say("thought","I should bring her something."),t.prompt("Go get Nikki. Back door.",6e3)}await n.roam(),t.prompt(null),await t.fade(1,900)}async function vv(n){const{ui:t,state:e}=n;e.clock=20*60+48;const i=n.load(Ch,{at:"entry",grime:0,grimeNow:!0,stock:4}),s=i.marks;n.spawn("viola",hh,{pos:s.viola.slice(0,3),yaw:s.viola[3]});const a=n.spawn("harry",uh,{pos:s.harry.slice(0,3),yaw:s.harry[3]});t.showClock(!0),n.phone.enable(!0),vc(n),await t.fade(0,900),await t.say("Viola","welcome in. we close at nine."),t.prompt("Find something for Nikki.",6e3);let o=!1,r=!1;n.interact(i.objects.jewelry,{label:"Jewelry case",hotspot:"jewelry",use:async()=>{await t.say("thought","Rose quartz. The card says “for love that hasn’t been spoken yet.”"),await t.say("thought","$240. I have thirty-one dollars."),o=!0}}),n.interact(i.objects.willows,{label:"One Wish Willows",hotspot:"willows",use:async()=>{await t.say("thought","A cup of sticks. The sign says ONE WISH WILLOW · $9.99 · BREAK TO ACTIVATE."),await t.say("thought","There’s fine print on the tag.",[{text:"Read it.",value:"read"},{text:"Put it back.",value:"back"}])==="read"&&await _v(n),r||(r=!0,await t.say("Harry","(from the shelves) they work, you know. people come back."))}}),n.interact(a.root,{label:"Harry",hotspot:"shelves",use:()=>t.say("Harry",r?"people come back. not to return them. you can’t return them.":"the rose quartz is on sale. it’s not on sale. i just like saying it.")}),n.interact(i.objects.shelves,{label:"Shelves",hotspot:"shelves",use:()=>t.say("thought","Amethyst for calm. Citrine for luck. Nothing for “tell her.”")}),n.interact(i.objects.counter,{label:"Counter",hotspot:"counter",use:async()=>{if(!r){if(await t.say("Viola","looking for anything in particular?",[{text:"Something for a friend. A girl. Who’s a friend.",value:"friend"},{text:"Just looking.",value:"look"}])==="look")return t.say("Viola","take your time. we close at nine.");o&&await t.say("Viola","the rose quartz? it’s two-forty, hon."),await t.say("Viola","for matters of the heart, though, people like the willows. the cup of sticks, over there.");return}await t.say("Viola","just the willow?",[{text:"Just the Willow.",value:"buy"},{text:"Is it real?",value:"real"}])==="real"&&await t.say("Viola","it’s a stick, hon. it’s as real as you need it to be."),n.sound.beep(),await t.say("Viola","nine ninety-nine."),i.twigs[3].visible=!1,e.flags.boughtWillow=!0,await t.say("Harry","three left."),await t.say("Viola","no refunds. it’s on the package."),n.endRoam()}}),await n.roam(),t.prompt(null),vc(n),await t.say("thought","Nine ninety-nine. Cheaper than a necklace. Cheaper than saying it."),await t.fade(1,900)}function vc(n){n.sound.tone(1568,.7,{type:"triangle",gain:.08}),n.sound.tone(2093,.6,{type:"triangle",gain:.06,when:n.sound.now+.09})}function _v(n){return new Promise(t=>{const e=Gs("One Wish Willow","Terms of wish · please read before breaking"),i=st("terms",e);for(const o of Wg)st("term",i,o);const s=document.createElement("button");s.className="btn",s.textContent="Put it back",s.onclick=()=>(a(),t()),e.appendChild(s);const a=n.ui.modal(e)})}function Wr(n,{place:t="nikkis"}={}){const e=new yi,i=t==="park",s=i?"#06080c":"#0b0d16";if(e.background=new It(s),e.fog=new Da(s,i?.055:.045),rs(e,{sky:i?"#4a5a80":"#4a5a8a",ground:"#14141c",hemi:.6,sunI:0}),se(e,i?"#d8e6ff":"#ffb066",i?9:8,2,4,-4.5,16),se(e,"#ffd9b0",.3,0,1.45,-.1,2.2),i){Ue(e,-30,-40,30,20,"#2a2c2a",-.3,"asphalt"),Ue(e,-30,-40,30,-7,"#22362a",-.29,"grass");for(let f=-6;f<=6;f+=3)Y(e,.1,.01,4.5,"#b8b8a8",f-1.5,-.3,.5);rt(e,xo("#6a2626"),-4.5,.4,0,-.3);for(const[f,d,g]of[[-7,-12,1.2],[-2,-15,1.5],[5,-13,1.1],[9,-19,1.6],[-11,-20,1.4],[2,-22,1.8],[-5,-26,1.3],[12,-9,1.2]])rt(e,mc(g),f,d,g*2,-.3);rt(e,gc(),-.2,-8.2,0,-.3),se(e,"#e0e8ff",7,.4,3.6,-8.2,14),rt(e,uv(),4,-9,-.4,-.3),se(e,"#c8d4f0",4,.4,3.6,-12,10);for(const f of[-1.2,1.8])for(const d of[-.5,.5]){const g=Jt(e,.04,2.3,"#5a5a62",f,-.3,-11+d,6);g.rotation.x=d*.4}const u=Jt(e,.04,3,"#5a5a62",.3,1.95,-11,6);u.rotation.z=Math.PI/2,u.position.y=1.95;for(const f of[-.4,1])Jt(e,.008,1.5,"#7a7a80",f,.45,-11,4),Y(e,.4,.04,.16,"#3a3a3a",f,.42,-11)}else{Ue(e,-30,-40,30,20,"#24242a",-.3,"asphalt"),Ue(e,3.2,-40,30,20,"#3a3a3e",-.27,"asphalt");for(let f=-38;f<18;f+=4)Y(e,.12,.01,1.8,"#c9c26a",-1.6,-.3,f);Y(e,6,3.4,5,"#3a3442",6.5,-.3,-12,{map:qn("stripes",6,3.4)}),Y(e,1,.9,.05,"#ffcf8a",3.6,1.4,-9.47,{emissive:"#ffcf8a"}),Y(e,.9,1.9,.06,"#2a2028",5.2,-.3,-9.47);const u=new lt(new Ne(.08,8,6),new ge({color:"#ffd8a0"}));u.position.set(5.9,1.8,-9.4),e.add(u),se(e,"#ffc890",1.2,5.9,1.7,-9,4),rt(e,xo("#3a4a6a"),-3.6,-9,0,-.3),rt(e,xo("#8a8a84"),-3.6,6,Math.PI,-.3);for(const[f,d]of[[9,-6],[10,-20]])rt(e,mc(1.3,{leaf:"#24361e"}),f,d,f,-.3)}rt(e,gc("#4a4a50"),2.6,-4.5,Math.PI,-.3);const a="#2c2f3a",o={map:qn("fabric",.6,.6)};Y(e,1.8,.1,2.4,a,0,.2,0,{map:qn("carpet",1.8,2.4)}),Y(e,1.8,.08,1.8,"#3a3c44",0,1.55,.2,{map:qn("fabric",1.8,1.8)}),Y(e,1.7,.35,.55,"#24262e",0,.62,-.85),Y(e,1.6,.06,.3,"#1c1e24",0,.97,-.72);for(const u of[-.85,.85])Y(e,.08,.65,2.2,a,u,.3,0),Y(e,.06,.6,.06,a,u*.95,.97,-.95),Y(e,.03,.04,1.4,"#4a4c54",u*.98,.9,.1);for(const u of[-.42,.45])Y(e,.55,.14,.55,"#4a3f3a",u,.3,.15,o),Y(e,.55,.75,.12,"#4a3f3a",u,.44,.48,o),Y(e,.3,.2,.1,"#4a3f3a",u,1.24,.5,o);for(const u of[-.08,.08]){const f=new lt(new Os(.05,16),new ge({color:"#ffb060"}));f.position.set(-.42+u,.99,-.69),f.rotation.x=-.35,e.add(f)}se(e,"#ff9a50",.25,-.42,1.05,-.6,1.2),Y(e,.22,.07,.03,"#1c1e24",.02,1.45,-.82);const r=new lt(new os(.17,.025,6,20),new de({color:"#15151a"}));r.position.set(-.42,1,-.5),r.rotation.x=-.5,e.add(r);const l=new At,c=new lt(new cn(.008,.012,.34,6),new de({color:"#8a6a3a"}));c.rotation.z=Math.PI/2,l.add(c);const h=new lt(new Pe(.06,.08,.004),new de({color:"#e8d9a8"}));return h.position.set(.1,-.05,.01),l.add(h),l.position.set(-.02,1,-.64),e.add(l),{scene:e,blockers:[],walkable:!1,hotspots:{driver:Xt(-.42,.05,[-.42,1,-3],"Driver seat",{y:1.2,marker:!1})},grade:i?{exposure:1.25,bloom:1.8,warm:"#f4f2ff",cool:"#bccaff"}:{exposure:1.2,bloom:1.8,warm:"#ffeacc",cool:"#c4d0ff"},eyeLight:.1,objects:{willow:l,twig:c},marks:{passenger:[.45,-.14,.12,Math.PI],fog:[7,-.3,-3.2,Math.atan2(-7,3.2)],window:[1.3,-.3,.05,-Math.PI/2]}}}async function yv(n){const{ui:t,state:e}=n,i=n.load(Wr,{at:"driver",grime:0,grimeNow:!0}),[s,a,o,r]=i.marks.passenger,l=n.spawn("nikki",ye,{pos:[s,a,o],yaw:r,seated:!0});n.place("driver");const c=l.headWorld();await n.lookAt(c,10),await t.fade(0,1400),await t.say("Nikki","hiii. thank you for coming. i’m a little… i took something at kelsey’s. i’m good. i’m so good."),await t.say("Nikki","i’m so sorry about sandy."),await t.say("Nikki","ok. my thing. my dad’s sick again. i’m moving home for a while. sunday."),await t.say("thought","Sunday."),await t.say("Nikki","ok. this is gonna sound so weird."),await t.say("Nikki","do you like me? like… like me, like me?"),await t.say("Nikki","you can tell me.",[{text:"Yes. For a long time.",nerve:3,value:"yes"},{text:"What? No. I mean, you’re my best friend.",value:"friend"},{text:"…",value:"silent"}])==="friend"?await t.say("Nikki","lol. ok. same. obviously."):await t.say("Nikki","ok. forget it. i’m tired."),await t.say("Nikki","night, bear."),await t.fade(1,350),n.despawn("nikki"),n.sound.door(),await n.wait(500),await t.fade(0,500),await t.say("thought","She didn’t look back."),await n.lookAt(i.objects.willow.getWorldPosition(new C),1e3),await t.say("thought","One Wish Willow. $9.99. Break to activate."),await t.say("Bear","I wish Nikki loved me more than anyone in the world."),await t.hold("Break the One Wish Willow",1700,u=>{i.objects.twig.rotation.x=u*.5,i.objects.willow.position.y=1+u*.03}),n.sound.snap(),n.post.glitch=1,t.flash(),e.flags.wished=!0,i.objects.willow.visible=!1,await n.wait(700),await t.fade(1,250),await n.wait(900),await t.card("OBSESSION","",2200)}function Rh(n,t,e,{delay:i=1.5,entry:s=null}={}){const a=new Us,o=new ae,r=new Ns(new C,.7),l=(d,g)=>(n.camera.updateMatrixWorld(),o.multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse),a.setFromProjectionMatrix(o),r.center.set(d,.9,g),a.intersectsSphere(r)),c=(d,g)=>e.find(v=>v.test(d,g))||null,h=t.root.position;let u=0;return{stop:n.on("frame",d=>{if(n.busy)return;const g=n.camera.position,v=c(g.x,g.z);if(!v||v===c(h.x,h.z)){u=0;return}if((u+=d)<i||l(h.x,h.z))return;const m=y=>Math.hypot(y[0]-g.x,y[1]-g.z),p=v.spots.filter(y=>m(y)>1.1&&!l(y[0],y[1])).sort((y,P)=>m(y)-m(P));if(!p.length)return;const[_,w]=p[0];h.set(_,0,w),t.root.rotation.y=Math.atan2(g.x-_,g.z-w),u=0,s&&(s.hotspot=kh(n,_,w))}),room:()=>c(h.x,h.z),near:()=>c(h.x,h.z)===c(n.camera.position.x,n.camera.position.z),from:()=>{var d;return c(h.x,h.z)===c(n.camera.position.x,n.camera.position.z)?"":`(from the ${((d=c(h.x,h.z))==null?void 0:d.name)??"other room"}) `}}}function kh(n,t,e){let i=null,s=1/0;for(const[a,o]of Object.entries(n.hotspots)){if(o.marker===!1)continue;const r=Math.hypot(o.pos.x-t,o.pos.z-e);r<s&&(s=r,i=a)}return i}const wv=[["11:20 AM","The diner. She orders for you. She gets it right."],["1:45 PM","The mall. She holds your hand the whole time. The whole time."],["4:30 PM","The pier. She says you’re her favorite person. She says it four times."]];async function xv(n){const{ui:t,state:e}=n;e.clock=9*60+10,e.need=10;const i=n.load(vn,{time:"morning",tape:!1,at:"bed",grime:0,grimeNow:!0}),[s,a,o,r]=i.marks.kitchen,l=n.spawn("nikki",ye,{pos:[s,a,o],yaw:r});t.showClock(!0),n.phone.enable(!0),await t.fade(0,1200),await t.say("thought","Something smells like pancakes. I don’t own pancakes."),t.prompt(n.controlsHint(),7e3);let c=0,h=!1;const u=g=>t.toast(`Perk: ${g}`,"perk"),f=n.interact(l.root,{label:"Nikki",hotspot:"kitchen",use:async()=>{if(c++===0){await t.say("Nikki","morning!! i let myself in. you gave me a key in like 2019, remember?"),await t.say("Nikki","ok so. last night. i was on molly. i’m so embarrassed. forget the car."),await t.say("Nikki","except… don’t forget it.");const v=await t.say("Nikki","i like you, bear. like like you. i think i always did?",[{text:"Yes. For a long time.",tag:"unlocked",value:"yes"},{text:"Are you sure you’re okay? Last night you were—",gain:1,value:"okay"},{text:"Nikki, about last night. I did something.",nerve:3,value:"confess"}]);v==="yes"?(e.flags.saidIt=!0,n.addNeed(-4,"said it"),await t.say("Nikki","i knew it. i knew it i knew it.")):v==="okay"?(n.addNeed(3,"asked if she was okay"),await t.say("Nikki","i’ve never been better. isn’t that crazy? i feel amazing.")):(e.flags.confessedDay1=!0,n.addNeed(10,"tried to undo it"),await t.say("Nikki","you did something? you did everything. you’re perfect.")),await t.say("Nikki","so we’re dating. i’m saying it. we’re dating."),t.toast("Nikki is your girlfriend now.","perk"),await t.say("Nikki","oh, and i called carter. you’re off today. i told him you were sick. i covered for you."),u("Nikki covers your shift"),await t.say("Nikki","and i made pancakes. and i cleaned. and i did something for sandy. go look."),u("breakfast"),await n.wait(400),u("Nikki cleaned the house"),t.prompt("Go look at what she did for Sandy.",6e3);return}if(!h)return t.say("Nikki","go look! by the window!");await t.say("Nikki","ready? i planned a whole day. a whole day of us.",[{text:"Let’s go.",value:"go"},{text:"One sec.",value:"wait"}])==="go"&&n.endRoam()}});n.interact(i.objects.memorial,{label:"Sandy’s table",hotspot:"memorial",use:async()=>{if(h)return t.say("thought","Candles. Her collar. Her photo. Her.");h=!0,await t.say("thought","She turned Sandy’s table into a shrine. Candles. Her collar. A photo from my phone."),await t.say("thought","The box is open."),await t.say("thought","Sandy’s spread out across the table. Arranged.",[{text:"(to Nikki) You opened the box?",value:"ask"},{text:"(to Nikki) It’s beautiful.",value:"nice"}])==="ask"?(n.addNeed(3,"questioned the shrine"),await t.say("Nikki",`${d.from()}she shouldn’t be in a box, bear. she should be with us.`)):(n.addNeed(-3,"loved the shrine"),await t.say("Nikki",`${d.from()}i knew you’d love it.`)),t.prompt("Talk to Nikki. She’s never far.",5e3)}}),n.interact(i.objects.records,{label:"Record player",hotspot:"records",use:async()=>{const g=await Vr(n,Oa);g&&(e.record=g,n.sound.playRecord(g),t.toast(`Now playing: ${g.band}, ${g.title}`),await t.say("Nikki",`${d.from()}ooh. i love this one. i love everything you love.`))}}),n.interact(i.objects.frontDoor,{label:"Front door",hotspot:"frontdoor",use:()=>t.say("thought","Just a door. She swept the mat.")});const d=Rh(n,l,i.rooms,{delay:2.2,entry:f});await n.roam(),d.stop(),t.prompt(null),n.sound.musicLevel(0,1.2),await t.fade(1,900),n.sound.stopRecord(),n.sound.musicLevel(.3,.1);for(const[g,v]of wv)await t.card(g,v,2600)}async function Mv(n){const{ui:t,state:e}=n;e.clock=19*60+30;const i=n.load(vn,{time:"evening",tape:!1,at:"living",grime:.05,grimeNow:!0}),[s,a,o,r]=i.marks.couchSeat,l=n.spawn("nikki",ye,{pos:[s,a,o],yaw:r,seated:!0});t.showClock(!0),n.phone.enable(!0),e.record&&n.sound.playRecord(e.record),await t.fade(0,1e3),await t.say("Nikki","movie night. you pick. no, i pick. no, you pick."),t.prompt("Date night. Sit with Nikki when you’re ready.",6e3);let c=null,h=0,u=!1;n.interact(i.objects.tv,{label:"Pick a movie",hotspot:"living",use:async()=>{if(c)return t.say("thought",`${c} is on. Nikki is watching me, not it.`);const d=await t.say("thought","What are we watching?",[{text:"Love in the Time of Lasers",value:"Love in the Time of Lasers"},{text:"Cabin 6: The Cabining",value:"Cabin 6"},{text:"Let Nikki pick.",value:"The Notebook"}]);c=d,i.objects.tv.material.emissive.set("#3a5a8a"),i.objects.tv.userData.baseEmissive=3824266,n.addNeed(-2,"picked a movie"),d==="Cabin 6"?await t.say("Nikki","scary? good. i’ll hold onto you. i won’t let go."):d==="The Notebook"?await t.say("Nikki","the notebook. obviously. he waits for her for years. isn’t that romantic?"):await t.say("Nikki","perfect. you have perfect taste.")}}),n.interact(i.objects.records,{label:"Record player",hotspot:"records",use:async()=>{const d=await Vr(n,Oa);d&&(e.record=d,n.sound.playRecord(d),t.toast(`Now playing: ${d.band}, ${d.title}`))}}),n.interact(i.objects.lunch,{label:"Dinner",hotspot:"kitchen",use:async()=>{await t.say("thought","She made lasagna. From scratch. Nikki doesn’t know how to make lasagna."),t.toast("Perk: dinner","perk")}}),n.interact(i.objects.memorial,{label:"Sandy’s shrine",hotspot:"memorial",use:()=>t.say("thought","She lit a new candle. I didn’t see her do it.")});const f=n.interact(i.objects.backDoor,{label:"Call Ian outside",hotspot:"backdoor",use:async()=>{f.enabled=!1,u=!0,n.sound.door(),await t.say("Ian","(on the phone) dude. are you with nikki right now?"),await t.say("Ian","ok. so sarah says last week nikki told her you were, quote, “like a little brother.”"),await t.say("Ian","last week, bear."),await t.say("Ian","and her dad’s not sick. sarah talked to her mom today. he’s fine. he’s on a fishing trip.");const d=await t.say("Ian","so what is this? what happened last night?",[{text:"I don’t know.",value:"dunno"},{text:"Nothing happened.",value:"lie"},{text:"I did something, Ian.",nerve:2,value:"truth"}]);d==="lie"&&e.stats.lies++,d==="truth"?(e.flags.toldIanDay1=!0,await t.say("Ian","you did something? like what? like a love potion? bear. bear?"),await t.say("thought","I hang up. I don’t know how to say the rest.")):await t.say("Ian","ok. just. be careful, man."),n.addNeed(4,"stepped out to call Ian"),n.sound.door(),t.prompt("Go back to Nikki.",5e3)}});f.enabled=!1,n.interact(l.root,{label:"Sit with Nikki",hotspot:"couch",use:async()=>{if(await n.lookAt(l.headWorld(),400),h===0){h++;const g=await t.say("Nikki","what’s your favorite thing about me?",[{text:"Your laugh.",value:"laugh"},{text:"Everything.",value:"everything"},{text:"That you’re my best friend.",value:"friend"}]);g==="laugh"?(n.addNeed(-4,"her laugh"),await t.say("Nikki","ha. haha. like that?")):g==="everything"?(n.addNeed(-6,"“everything”"),e.stats.promises++,await t.say("Nikki","everything. i’m going to remember you said that.")):(n.addNeed(4,"“best friend”"),await t.say("Nikki","best friend? i’m more than that now. i’m so much more than that."));const v=await t.say("Nikki","did you always know? that you liked me?",[{text:"Since the first day you came in the store.",gain:1,value:"true"},{text:"Kind of.",value:"kind"}]);await t.say("Nikki",v==="true"?"that’s so long. you waited so long for me.":"kind of. ok. i’ll take kind of."),n.phone.receive("call me","ian"),await n.wait(600),n.phone.receive("NOT in front of nikki","ian"),await t.say("Nikki","who’s that?",[{text:"Ian. I’ll be right back.",value:"ian"},{text:"Nobody. Work stuff.",value:"nobody"}])==="nobody"?(e.stats.lies++,await t.say("Nikki","ok. hurry back.")):await t.say("Nikki","ian. ok. don’t be long. i’ll count."),f.enabled=!0,t.prompt("Call Ian. Step out the back door.",6e3),await n.moveTo("living");return}if(!u)return t.say("Nikki","go call him. i’ll be right here. i’ll be right here.");await t.say("Nikki","everything ok?",[{text:"Did you tell Sarah I was like a little brother to you?",gain:1,value:"confront"},{text:"Everything’s great.",value:"let"}])==="confront"?(e.flags.confrontedDay1=!0,n.post.glitch=.8,l.driftLocked=!0,l.setDrift(.4),await t.say("Nikki","little brother?"),l.driftLocked=!1,n.addNeed(8,"confronted her"),await t.say("Nikki","i never said that. why would i say that? i love you."),await t.say("Nikki","i love you more than anyone in the world."),await t.say("thought","She said it exactly the way I wished it.")):(e.flags.letItGo=!0,n.addNeed(-4,"let it go"),await t.say("Nikki","good. stay right here.")),await t.say("Nikki","let’s go to bed."),n.endRoam()}}),await n.roam(),t.prompt(null),n.sound.musicLevel(0,1.2),await t.fade(1,900),n.sound.stopRecord(),n.sound.musicLevel(.3,.1)}async function Sv(n){const{ui:t,state:e}=n;e.clock=23*60+50,n.load(vn,{time:"night",tape:!1,at:"bedLie",grime:.1,grimeNow:!0}),t.showClock(!1),n.phone.enable(!1),n.lock();const i=n.camera.position,s=n.spawn("nikki",ye,{pos:[-3.9,.02,-3.35],seated:!0});s.root.rotation.y=Math.atan2(i.x+3.9,i.z+3.35);const a=new xi("#ffd8b0",.6,1.8,1.5);a.position.set(0,1.5,.45),s.root.add(a),t.eyesOverlay(!0),await t.fade(0,800),t.prompt("Eyes closed.",3e3),await n.wait(3e3),t.subtitle("bear? are you asleep?",{ms:2600}),await n.wait(2800),await t.hold("Open your eyes",900),t.eyesOverlay(!1),e.stats.looks++,await n.lookAt(s.headWorld(),500),await t.say("Nikki","sorry. i just like looking at you."),await t.say("Nikki","go back to sleep. i’ll be right here.",[{text:"Okay.",value:"ok"},{text:"You should sleep too, Nikki.",value:"sleep"}])==="sleep"&&await t.say("Nikki","i’m not tired. i’m never tired anymore."),t.eyesOverlay(!0),await n.wait(1200),await t.say("thought","I fall asleep to her breathing. She doesn’t lie down."),e.need=Math.max(e.need,18),await t.fade(1,900),t.eyesOverlay(!1)}const $t=new C(-2.3,0,1.6),Bi=-.08,ai=(n,t,e,i)=>Math.atan2(e-n,i-t);function Ph(n){const t=new yi;t.background=new It("#20182a"),rs(t,{sky:"#f2c3b0",ground:"#2a1e2a",hemi:.55,sun:"#ffb38a",sunI:.5,sunPos:[-6,6,4],span:6}),se(t,"#ff6aa8",2,$t.x,2.3,$t.z,6),se(t,"#5ae0d0",1.6,3,2.3,-2.5,6),se(t,"#ffd59a",1,0,2.4,0,8);const e=[],i=(g,v,m,p,_=[])=>e.push(...Hs(t,g,v,m,p,_,{color:"#d8cfc6",h:2.7,tex:"stripes"}));Ue(t,-5,-4,5,4,"#9a7656",0,"wood"),Ue(t,1.2,-4,5,-1.2,"#dcd6c8",.004,"tile"),zs(t,-5,-4,5,4,"#efe6e0",2.7,.2),i(-5,-4,5,-4),i(-5,4,5,4,[[1.7,2.7]]),i(-5,-4,-5,4),i(5,-4,5,4);const s={sky:["#0a0e22","#2a3460"],light:!1};ln(t,1.4,1,-4.93,1.6,.4,Math.PI/2,s),ln(t,1.4,1,.2,1.6,-3.93,0,s);const a=["#ff9ac2","#ffe08a","#8af0e0","#c4a0ff"];for(let g=0;g<24;g++){const v=new lt(new Ne(.035,6,4),new ge({color:a[g%4]})),m=g/23;v.position.set(-4.9+m*9.8,2.45-Math.sin(m*Math.PI*6)*.08,-3.9),t.add(v)}rt(t,Pn(1,.7,["#ff6aa8","#2a2a40","#f0d890"]),-4.92,2.6,Math.PI/2,1.3),rt(t,Pn(.6,.8,["#5ae0d0","#e8c25d","#2a2030"]),3.4,3.92,Math.PI,1.3),rt(t,gr({floor:!0}),-4.5,-1.6),se(t,"#ffb36a",1.4,-4.5,1.6,-1.6,4),rt(t,ts(1.2),4.5,3.4);const o=Pa(1,2.1,"#5a4a6a");rt(t,o,2.2,3.94,Math.PI),rt(t,Fa(2.7,.7,"#c9c2b6","#e4ded2"),2.75,-3.6),rt(t,Th(.8,1.9,.7),4.55,-3.6);const r=new At;["#3f6b3a","#6b4a2a","#6b4a2a","#c9c9c0","#3f6b3a","#a83a3a"].forEach((g,v)=>Jt(r,.035,.26,g,-.9+v*.32,.9,.05*(v%2),8)),r.position.set(2.75,0,-3.6),t.add(r),Jt(t,.2,.08,"#e8c25d",1.62,.9,-3.5),rt(t,lv(2,1.8,.4,"#5a4636",{rows:3,seed:5}),-3.6,-3.75),rt(t,Ah("#4a3a2e").group,-1.5,-3.7),rt(t,Ts(3.2,2.6,"#7a4a5a","#3e2432"),$t.x,$t.z),rt(t,qi(1.1,.65,.42,"#6a4a32"),$t.x,$t.z),rt(t,ba(2.2,.85,"#58607a",{seats:2}),$t.x,.575),rt(t,ba(1.8,.8,"#7a5866",{seats:2}),$t.x,2.75,Math.PI),rt(t,ba(.8,.75,"#8a7a4a",{seats:1}),-3.85,$t.z,Math.PI/2),Jt(t,.26,.4,"#4a5a4a",-.95,0,$t.z,14);for(const[g,v,m,p]of[[$t.x,.575,1.2,.5],[$t.x,2.75,1,.5],[-3.85,$t.z,.5,.5],[$t.x,$t.z,.65,.4]])Cn(t,g,v,m,p);const l=Jt(t,.03,.24,"#3f6b3a",$t.x-.4,.42,$t.z-.2,8);Jt(t,.03,.24,"#6b4a2a",$t.x+.42,.42,$t.z+.18,8),Jt(t,.03,.24,"#6b4a2a",$t.x+.35,.42,$t.z-.22,8);const c=bv(n);c.group.position.set($t.x,.42,$t.z),c.group.rotation.y=.12,t.add(c.group);const h=(g,v,m)=>[g,v,m],u=h($t.x,.75,$t.z),f=(g,v)=>Xt(g,v,u,"",{y:1.18,marker:!1}),d={entry:Xt(2.2,3.2,h(-1,1.2,0),"Front door"),living:Xt(.3,1.6,h($t.x,.8,$t.z),"Living room"),kitchen:Xt(2.8,-2.3,h(3.6,1.2,-2.7),"Kitchen"),shelf:Xt(-2.6,-2.2,h(-3.5,1.2,-3),"Records"),seatNikki:f(-1.75,.6),seatSarah:f(-1.85,2.7),seatChair:f(-3.85,$t.z)};return{scene:t,blockers:e,hotspots:d,grade:{exposure:1.3,bloom:1.9,warm:"#ffe0c6",cool:"#d6ccff"},eyeLight:.42,table:$t,tower:c,objects:{frontDoor:o,drinks:r,bottle:l},marks:{ian:[3.7,0,-2.7,ai(3.7,-2.7,2.8,-2.3)],sarah:[-3.5,0,-3,ai(-3.5,-3,-2.6,-2.2)],dev:[4.4,0,-1,-Math.PI/2],mo:[-.6,0,-.9,ai(-.6,-.9,$t.x,$t.z)],follow:{entry:[1.5,0,3.4,ai(1.5,3.4,2.2,3.2)],living:[.9,0,2.4,ai(.9,2.4,.3,1.6)],kitchen:[2.1,0,-1.5,ai(2.1,-1.5,2.8,-2.3)],shelf:[-1.8,0,-1.4,ai(-1.8,-1.4,-2.6,-2.2)]},couchL:[-2.85,Bi,.6,0],couchR:[-1.75,Bi,.6,0],loveL:[-2.75,Bi,2.7,Math.PI],loveR:[-1.85,Bi,2.7,Math.PI],chair:[-3.85,Bi,$t.z,Math.PI/2],ottoman:[-.95,Bi-.05,$t.z,-Math.PI/2]}}}function bv(n){const a=new At,o=[],r=new Pe(.18,.036*.96,.06*.96);for(let g=0;g<18;g++)for(let v=0;v<3;v++){const m=g%2===0,p=new It("#d9b98a").offsetHSL(0,0,(Math.random()-.5)*.08),_=new lt(r,un(p)),w=(v-1)*.06;_.rotation.y=m?0:Math.PI/2,_.position.set(m?0:w,.036*g+.036/2,m?w:0),_.userData.block={layer:g,alongX:m,pulled:!1},a.add(_),o.push(_)}const l=new lt(new Pe(.34,.036*18+.1,.34),new ge({transparent:!0,opacity:0,depthWrite:!1}));l.position.y=.036*18/2,a.add(l);let c=18,h=0;const u=new C,f=()=>{const g=o.filter(v=>!v.userData.block.pulled&&v.userData.block.layer>=2&&v.userData.block.layer<=15);return g[Math.floor(Math.random()*g.length)]};return{group:a,blocks:o,proxy:l,pull:async(g,v=f())=>{const m=v.userData.block;m.pulled=!0;const p=a.worldToLocal(u.copy(g)),_=m.alongX?"x":"z",w=Math.sign(p[_]-v.position[_])||1,y=v.position[_];n.sound.tone(320,.08,{type:"triangle",gain:.12}),await n.tween(800,k=>v.position[_]=y+w*.18*1.15*k);const P=c%2===0,T=v.position.clone(),A=new C(P?0:(h-1)*.06,.036*c+.036/2,P?(h-1)*.06:0);v.rotation.y=P?0:Math.PI/2,m.alongX=P,await n.tween(650,k=>{v.position.lerpVectors(T,A,k),v.position.y+=Math.sin(k*Math.PI)*.14}),n.sound.tone(260,.06,{type:"triangle",gain:.14}),++h===3&&(c++,h=0)}}}function Ih(n){let t=0;const e=setInterval(()=>{const i=hn(n.state.need);n.phone.receive(mr[i][t++%mr[i].length]),n.addNeed(2+Math.min(4,n.phone.ignored),"he’s out")},22e3);return()=>clearInterval(e)}async function Ev(n){const{ui:t,state:e}=n;e.clock=11*60+15;const i=n.load(Ch,{at:"entry",grime:.6,grimeNow:!0,stock:3,day:!0}),s=i.marks,a=n.spawn("viola",hh,{pos:s.viola.slice(0,3),yaw:s.viola[3]+1.2}),o=n.spawn("harry",uh,{pos:s.harry.slice(0,3),yaw:s.harry[3]+2.2});a.track=o.track=!1,t.showClock(!0),n.phone.enable(!0),n.sound.tone(1568,.7,{type:"triangle",gain:.08}),await t.fade(0,900),await t.say("thought",e.fates.sarah==="dead"?"Nikki’s asleep in my bed. She slept with her shoes on.":"Sarah texted at six: “i’m at ian’s. i’m ok. don’t come alone.”"),await t.say("thought",e.flags.toldRealNikki?"Somebody else has to wish. That’s what she said. Somebody who isn’t me.":"One wish per customer. Fine. Then I need other customers."),t.prompt("Buy the Willows.",5e3);const r=Ih(n);let l=!1;n.interact(i.objects.counter,{label:"Counter",hotspot:"counter",use:async()=>{if(l)return t.say("Viola","(not looking up) have a good one.");if(await t.say("Viola","(not looking up) can i help you.",[{text:"All of them. I need all the Willows.",value:"buy"},{text:"Is there a way to undo one?",value:"undo"}])==="undo"){await t.say("Viola","it’s on the package, hon."),await t.say("Harry","(from the shelves) someone else can wish. that’s what people do. they find someone else."),e.flags.harryHint=!0;return}n.sound.beep(),await t.say("Viola","twenty-nine ninety-seven.");for(const u of i.twigs)u.visible=!1;l=!0,e.willows=3,await t.say("Harry","that’s all of them. we’re not getting more."),await t.say("thought","Just to see."),await t.hold("Break a Willow",1400,null,{cap:.7}),n.sound.tone(180,.3,{type:"triangle",gain:.2}),await t.say("thought","It bends. It won’t break. Like trying to snap a spoon."),await t.say("Viola","one per customer. it’s on the package."),t.prompt("Ian’s expecting you.",5e3)}}),n.interact(i.objects.willows,{label:"Willow display",hotspot:"willows",use:()=>t.say("thought",l?"An empty cup. The sign still says $9.99.":"Three left. The tag on each one says the same thing.")}),n.interact(o.root,{label:"Harry",hotspot:"shelves",use:()=>t.say("Harry","(to the shelf) people come back. i told you people come back.")});const c=new lt(new Pe(1.2,2.1,.1),new ge({transparent:!0,opacity:0,depthWrite:!1}));c.position.set(0,1.05,2.9),i.scene.add(c),n.interact(c,{label:"Leave",hotspot:"entry",use:async()=>{if(!l)return t.say("thought","Not without them.");n.endRoam()}}),await n.roam(),r(),t.prompt(null),n.sound.tone(1568,.7,{type:"triangle",gain:.08}),await t.fade(1,900)}async function Tv(n){const{ui:t,state:e}=n;e.clock=17*60+40;const i=n.load(Ph,{at:"entry",grime:.65,grimeNow:!0}),s=i.marks,a=n.spawn("ian",Ps,{pos:s.ian.slice(0,3),yaw:s.ian[3]}),o=e.fates.sarah==="alive",r=o?n.spawn("sarah",kn,{pos:s.couchL.slice(0,3),yaw:s.couchL[3],seated:!0}):null;r&&r.setExpr("sad"),t.showClock(!0),n.phone.enable(!0),e.willows??(e.willows=3),await t.fade(0,1e3),await t.say("Ian","(from the kitchen) door’s open. it’s always open now. come in."),t.prompt("Talk to Ian.",5e3);const l=Ih(n);let c=!1,h=!1,u=!o;const f=[];n.interact(a.root,{label:"Talk to Ian",hotspot:"kitchen",use:async()=>{if(h)return t.say("Ian",e.flags.ianMoney?"i’m rich. i’m so rich. it doesn’t help. why doesn’t it help.":"tonight. i’ll be there tonight.");if(!c){c=!0,await t.say("Ian",e.flags.promisedIan?"ok. you promised me everything. this is everything time.":"you look like you haven’t slept in four days.");const d=e.flags.promisedIan?2:3,g=await t.say("Ian","what is going on with you two?",[{text:o?"I made a wish. On a Willow. It made her love me, and it’s killing her.":"I made a wish. It made her love me. And last night she killed Sarah.",nerve:d,value:"all"},{text:"I made a wish and it came true.",value:"some"},{text:"I need you to break this for me. Don’t ask why.",value:"none"}]);g==="all"?(e.flags.toldIanAll=!0,o||(await t.say("Ian","…"),await t.say("Ian","sarah’s not answering. since last night. i thought she was just mad at me.")),await t.say("Ian","ok. ok. i believe you. i don’t know why i believe you.")):g==="some"?await t.say("Ian","dude, same. pizza. i told you this."):await t.say("Ian","a stick. you drove here to give me a stick.")}if(e.willows--,h=!0,await t.say("thought","I hand him one. It doesn’t bend for him at all."),e.flags.toldIanAll){const d=await t.say("Ian","what do i wish for? tell me exactly. granted as spoken, right?",[{text:"Wish she sleeps tonight. Actually sleeps.",value:"sleep"},{text:"Wish she stops loving me.",value:"stop"},{text:"Wish for whatever you want.",value:"money"}]);if(d==="sleep"){e.flags.ianSleep=!0,await t.say("Ian","i wish nikki gets a real night’s sleep tonight. like, actually sleeps."),ga(n),await t.say("Ian","that’s the dumbest wish anyone has ever made."),await t.say("thought","When she sleeps, the real Nikki comes up for air. Ian just bought her a window."),await t.say("Ian","i’m coming over tonight. don’t argue.");return}if(d==="stop"){await t.say("Ian","i wish nikki stopped loving bear."),ga(n),await n.wait(1200),await t.say("thought","Nothing. Wishes can’t be modified, exchanged or refunded. It says so on the package."),await t.say("Ian","did it work? it didn’t work. i can feel that it didn’t work."),await t.say("Ian","i’m coming over tonight. don’t argue.");return}}e.flags.ianMoney=!0,await t.say("Ian","fine. i wish i had a billion dollars."),ga(n),await n.wait(500),Av(n,i,f),await n.wait(1600),await t.say("Ian","oh my god."),await t.say("Ian","OH MY GOD."),await t.say("Ian","…this doesn’t fix anything, does it."),await t.say("Ian","i’m coming over tonight. i can buy, like, a lot of help now.")}}),r&&n.interact(r.root,{label:"Sarah",hotspot:"living",use:async()=>{if(u)return t.say("Sarah","go. she’s waiting. she’s always waiting.");await t.say("Sarah","i watched her come across the parking lot last night, bear. she was so fast.");const d=await t.say("Sarah","is one of those for me?",[{text:"Yes. Wish for whatever you think is right.",value:"give"},{text:"No. Stay out of this.",value:"no"}]);if(u=!0,d==="no")return t.say("Sarah","ok.");e.willows--,await t.say("Sarah","i wish nobody else gets hurt because of this."),ga(n),e.flags.sarahWish=!0,await t.say("thought","Nobody else. She didn’t say me. She didn’t say Nikki.")}}),n.interact(i.objects.frontDoor,{label:"Go home",hotspot:"entry",use:async()=>{if(!h)return t.say("thought","Ian first.");!u&&await t.say("thought","Sarah’s still on the couch.",[{text:"Go anyway.",value:"go"},{text:"Talk to her first.",value:"stay"}])==="stay"||n.endRoam()}}),await n.roam(),l(),t.prompt(null),await t.say("thought",e.willows>1?`${e.willows} left in the bag. One was for Sarah.`:"One left in the bag. The last one."),await t.fade(1,900)}function ga(n){n.sound.snap(),n.post.glitch=.8,n.ui.flash()}function Av(n,t,e){const i=new de({color:"#7fae6a",side:De}),s=new we(.16,.07);for(let o=0;o<160;o++){const r=new lt(s,i);r.position.set(-4.5+Math.random()*9,2.6+Math.random()*2.5,-3.5+Math.random()*7),r.rotation.set(Math.random()*3,Math.random()*3,0),r.userData.spin=(Math.random()-.5)*6,t.scene.add(r),e.push(r)}const a=n.on("frame",o=>{let r=0;for(const l of e)l.position.y<=.012||(r++,l.position.y=Math.max(.012,l.position.y-o*(.6+Math.abs(l.userData.spin)*.08)),l.rotation.x+=o*l.userData.spin,l.rotation.z+=o*l.userData.spin*.5,l.position.y<=.012&&l.rotation.set(-Math.PI/2,0,l.userData.spin));r||a()})}const gi="Nikki|real";async function Cv(n){const{ui:t,state:e}=n;e.clock=22*60+30,e.willows??(e.willows=1);const i=n.load(vn,{time:"night",wreck:!0,at:"backdoorIn",grime:.85,grimeNow:!0}),s=e.fates.sarah==="dead";s&&(i.objects.curtain.visible=!0);const[a,,o,r]=i.marks.waiting,l=n.spawn("nikki",ch,{pos:[a,0,o],yaw:r}),c=Rv();l.root.add(c),t.showClock(!0),n.phone.enable(!1),n.lock(),await t.fade(0,1400),await n.lookAt(l.headWorld(),900),await t.say("thought",s?"She’s wearing Sarah’s shirt. Sarah’s hair clip.":"She bought a shirt like Sarah’s. She did her hair like Sarah’s."),await t.say("thought","There’s a gun in her hand. She’s holding it like a purse."),await t.say("Nikki","surprise."),await t.say("Nikki","you like sarah. so now you have sarah. now you don’t have to go anywhere.");const h=await t.say("Nikki","what’s in the bag?",[{text:"Willows. One’s for you.",value:"give"},{text:"Nothing.",value:"lie"},{text:"A way to undo what I did to you.",nerve:2,value:"truth"}]);if(h==="give")return _c(n,i,l,!0);h==="lie"?(e.stats.lies++,n.addNeed(-4,"lied about the bag"),await t.say("Nikki","ok. you can have secrets. i don’t mind anymore.")):(n.addNeed(10,"tried to undo it"),await t.say("Nikki","undo? there’s nothing to undo. look at me. i’m perfect now."));for(const[f,d,g]of[["do you like me now?","You look beautiful.","this? this isn’t for you, silly. this is for other people."],["say you’ll stay.","I’ll stay. I’m not going anywhere.","i’m being careful. i’m always careful now."]]){const v=await t.say("Nikki",f,[{text:d,value:"comfort"},{text:"Nikki, put the gun down.",value:"gun"},{text:"This isn’t you.",gain:1,value:"honest"}]);v==="comfort"?(n.addNeed(-12,"told her what she wanted"),e.stats.promises++,await t.say("Nikki","i know.")):v==="gun"?(n.addNeed(8,"the gun"),await t.say("Nikki",g)):(n.addNeed(6,"“this isn’t you”"),await t.say("Nikki","it is now."))}return await kv(n,l,c),await t.say("thought","The last Willow is in my pocket.",[{text:"Run for the bathroom.",value:"run"},{text:"Stay with her.",value:"stay"}])==="stay"?e.need<50?_c(n,i,l,!1):vr(n,i,l,!1):Pv(n,i,l)}function Rv(){const n=new At,t=new de({color:"#1c1c20"}),e=new lt(new Pe(.035,.09,.03),t),i=new lt(new Pe(.03,.035,.15),t);return i.position.set(0,.04,.06),n.add(e,i),n.position.set(.27,.62,.05),n.rotation.x=Math.PI/2.4,n}async function kv(n,t,e){const{ui:i,state:s}=n;n.sound.door(),await i.say("Ian","(behind you) bear? you didn’t answer your phone, so i—");const a=t.root.position,o=n.spawn("ian",Ps,{pos:[4.4,0,3.75],yaw:Math.atan2(a.x-4.4,a.z-3.75)});await n.lookAt(o.headWorld(),500),await i.say("Ian","oh. hey, nikki. hi. that’s a… nice shirt."),t.lookTarget=o.head,e.rotation.x=0,await n.lookAt(t.headWorld(),400);const r=s.flags.sarahWish,l=!r&&(s.need>=70||s.need>=50&&!s.flags.toldIanAll);r?(n.sound.tone(900,.04,{type:"square",gain:.12}),await n.wait(500),n.sound.tone(900,.04,{type:"square",gain:.12}),await i.say("Nikki","it won’t. why won’t it."),await i.say("Ian","sarah wished nobody else gets hurt. nobody ELSE, nikki."),await i.say("Ian","bear. go. i’ve got her.")):l?(i.eyesOverlay(!0),n.sound.shot(),n.post.glitch=1,await n.wait(1800),n.despawn("ian"),s.fates.ian="dead",s.stats.fallout.push("Ian, at the back door"),await i.say("thought","He didn’t even get all the way inside."),i.eyesOverlay(!1),await i.say("Nikki","he was going to take you.")):s.flags.toldIanAll?(await i.say("Ian","nikki. it’s ian. i know about the wish. it’s not your fault. none of this is your fault."),e.rotation.x=Math.PI/2.4,n.addNeed(-8,"Ian talked her down"),await i.say("Nikki","…ian?"),await i.say("Ian","bear. go.")):(await i.say("Nikki","go home, ian."),await i.say("Ian","ok. ok. i’m going. i’m calling somebody."),n.sound.door(),n.despawn("ian")),t.lookTarget=null,e.rotation.x=Math.PI/2.4}async function Pv(n,t,e){const{ui:i,state:s}=n;await n.moveTo("bath"),await i.hold("Lock the door",900),t.objects.bathDoor.visible=!0,n.sound.tone(700,.05,{type:"square",gain:.15}),s.fates.sarah==="dead"&&(await i.say("thought","The shower curtain’s pulled shut. There’s someone in the tub."),await i.say("thought","I know those shoes."));for(let c=0;c<3;c++)n.sound.door(),await n.wait(550);if(await i.say("Nikki","(through the door) bear? open the door. it’s me. it’s sarah. you like sarah."),!s.flags.plan&&!s.flags.ianSleep)return vr(n,t,e,!0);for(let c=0;c<2;c++)n.sound.door(),await n.wait(900);await n.wait(1600),await i.say("thought",s.flags.ianSleep?"The banging stops. Something slides down the other side of the door. Breathing. Slow.":"The banging stops."),e.driftLocked=!0,e.setDrift(0);let a=!1;const o=setTimeout(()=>{a=!0,i.cut()},32e3),r=(c,h)=>a?null:i.say(gi,c,h);let l=!1;return await(async()=>{if(await r("bear. it’s me. it’s really me."),a||(await r("she’s asleep. on the floor out here. i don’t know for how long."),a))return;const c=await r("did you find someone? somebody to wish?",[{text:"(Slide the last Willow under the door.) It has to be you. Here’s everything I did.",nerve:3,value:"give"},{text:"I couldn’t. I’m sorry.",value:"sorry"},{text:"…",value:"silent"}]);a||(c==="give"?l=!0:await r("then she’ll do it. she’ll find it and she’ll—"))})(),clearTimeout(o),l?Iv(n):(e.driftLocked=!1,vr(n,t,e,!0))}async function Iv(n){const{ui:t,state:e}=n;e.willows=0,await t.say(gi,"everything?"),await t.say("thought","I tell her. Sandy. The stick. The car. Every day since."),await t.say(gi,"ok. granted as spoken. i have to say it right."),await t.say(gi,"i wish bear had never broken his willow."),n.sound.snap(),n.post.glitch=1,t.flash(),await t.fade(1,300),await n.wait(1200),e.flags.wished=!1;const i=n.load(Wr,{at:"driver",grime:0,grimeNow:!0}),[s,a,o,r]=i.marks.passenger,l=n.spawn("nikki",ye,{pos:[s,a,o],yaw:r,seated:!0});if(await n.lookAt(l.headWorld(),10),t.showClock(!1),await t.fade(0,1600),await t.say("thought","The car. Nikki. The Willow on the dash, still in one piece."),await t.say("Nikki","ok. this is gonna sound so weird."),await t.say("Nikki","do you like me? like… like me, like me?"),await t.say("Nikki","you can tell me.",[{text:"Yes. For a long time.",tag:"unlocked",value:"say"},{text:"(Snap the Willow.)",value:"snap"}])==="snap")return await n.lookAt(i.objects.willow.getWorldPosition(new C),800),await t.say("Bear","I wish Nikki loved me more than anyone in the world."),await t.hold("Break the One Wish Willow",1700,h=>i.objects.twig.rotation.x=h*.5),n.sound.snap(),n.post.glitch=1,t.flash(),await t.fade(1,250),e.loops=(e.loops||0)+1,await t.card("OBSESSION","again",2400),{goto:"wake",reset:!0};e.ending="littleBrother",e.fates={sarah:"alive",ian:"alive"},await t.say("Nikki","oh. bear."),await t.say("Nikki","i love you. i do. you’re my best friend."),await t.say("Nikki","but you’re like… my little brother? you know?"),await t.say("Nikki","i’m sorry. i’m so sorry. night, bear."),await t.fade(1,350),n.despawn("nikki"),n.sound.door(),await n.wait(500),await t.fade(0,500),await t.say("thought","She didn’t look back."),await t.say("thought","I drive home alone. The Willow stays on the dash."),await t.fade(1,1200),await t.card("Sunday","Nikki moved home. Ian and Sarah helped her pack.",3200),await t.card("Everyone is alive.","Sandy is still dead.",3600)}async function vr(n,t,e,i){const{ui:s,state:a}=n;if(i)n.sound.door(),n.sound.glass(),n.post.glitch=1,t.objects.bathDoor.visible=!1,e.root.position.set(-4.1,0,2.3),e.root.rotation.y=-Math.PI/2;else{await s.fade(1,200);const g=n.camera.position;e.root.position.set(g.x-.7,0,g.z-.5),e.root.rotation.y=Math.atan2(g.x-e.root.position.x,g.z-e.root.position.z),await s.fade(0,200)}await n.lookAt(e.headWorld(),300),await s.say("Nikki","what’s that in your pocket?"),await s.say("Nikki","is that for me? you were saving it for me."),a.willows=0,await s.say("Nikki","i know what i want. i only ever want one thing."),await s.say("Nikki","i wish you’d never leave me again."),n.sound.snap(),n.post.glitch=1,s.flash(),s.fade(1,5200);for(const g of[600,750,950,1250,1700])n.sound.heart(.4),await n.wait(g);await n.wait(1400),a.ending="theatrical";const o=i?new C(-3,0,2.3):new C(4.6,0,3.3),r=i?-1:1;n.despawn("nikki"),n.despawn("ian");const l=n.spawn("bear",a.bear,{pos:[o.x,.19,o.z],track:!1});l.shadow.visible=!1,l.root.rotation.order="YXZ",l.root.rotation.set(-Math.PI/2,Math.PI/2,0);const c=n.spawn("nikki",ch,{pos:[o.x-.75,-.55,o.z+r*.7],yaw:i?0:Math.PI,seated:!0});c.driftLocked=!0,c.setDrift(0),c.setExpr("sad"),c.lookTarget=l.head;const h=new xi("#c8d0ff",1.6,5,1.5);h.position.set(o.x-.6,2.1,o.z),t.scene.add(h);const u=i?new C(o.x+1.6,2.2,o.z+1.9):new C(o.x-2.4,2.3,o.z+1.1);n.camera.position.copy(u);const f=Hr(u,new C(o.x-.6,.3,o.z-.2));n.yaw=f.yaw,n.pitch=f.pitch,n.post.target=.5,await s.fade(0,2600),await s.say(gi,"bear?"),await s.say(gi,"bear, wake up. it’s me. it’s really me now."),c.lookTarget=null,await s.say(gi,"what did i— what did i do?"),await s.fade(1,1600);const d=[];a.fates.ian==="dead"?d.push("There were two funerals that week."):d.push(a.flags.ianMoney?"Ian paid for the funeral. He could afford it.":"Ian told the police everything. They wrote down the part about the stick."),d.push(a.fates.sarah==="dead"?"They found Sarah in the bathtub.":"Sarah moved home. She still checks her back seat."),d.push("Nikki remembers all of it. Every day of it.");for(const g of d)await s.card("",g,3e3)}async function _c(n,t,e,i){const{ui:s,state:a}=n;i?(a.willows--,await s.say("Nikki","for me? you got me a present?"),await s.say("Nikki","i know exactly what to wish."),await s.say("Nikki","i wish bear and i are together forever."),n.sound.snap(),n.post.glitch=.8,s.flash(),await s.say("Nikki","there. now it’s official.")):(await s.say("thought","I put the last Willow in the dresser drawer. Under the socks."),await s.say("Nikki","you’re staying?"),await s.say("Nikki","i knew it. i knew it i knew it.")),a.ending="forever",await s.fade(1,1400),await s.card("Five months later","",2600),await s.card("",a.fates.ian==="dead"?"Nobody calls anymore.":"Ian stopped calling in March.",2800),await s.card("",a.fates.sarah==="dead"?"Sarah’s mom still puts up flyers.":"Sarah sends a card at Christmas. Nikki throws it out before Bear sees it.",3200),await s.card("","The front door is still taped. Bear never leaves. Nikki has never been happier.",3400),a.need=8,n.load(vn,{time:"night",at:"bedLie",grime:.9,grimeNow:!0});const o=n.camera.position,r=n.spawn("nikki",ye,{pos:[-3.9,.02,-3.35],seated:!0});r.root.rotation.y=Math.atan2(o.x+3.9,o.z+3.35);const l=new xi("#ffd8b0",.6,1.8,1.5);l.position.set(0,1.5,.45),r.root.add(l),s.showClock(!1),s.eyesOverlay(!0),await s.fade(0,800),n.sound.startBreath(r.headWorld()),s.holdSwitch("Hold to open your eyes",c=>{s.setEyes(c),c&&(a.stats.looks++,s.subtitle("go back to sleep. i’ll be right here.",{ms:2400}))}),await n.wait(2e4)}const yc=[["you’re so cute when you’re confused.",null],["i love you. i love you so much. did you know that?","love"],["i was up at four. i just wanted to look at you.",null]];async function Lv(n){const{ui:t,state:e}=n;e.clock=7*60+40;const i=n.load(vn,{time:"morning",at:"bed",grime:.25,grimeNow:!0}),[s,a,o,r]=i.marks.kitchen,l=n.spawn("nikki",ye,{pos:[s,a,o],yaw:r});t.showClock(!0),n.phone.enable(!0),await t.fade(0,1200),t.prompt(n.controlsHint(),7e3);let c=0;const h=async()=>{e.flags.lunch||(e.flags.lunch=!0,i.objects.lunch.visible=!1,t.toast("Perk: Nikki packs your lunch now","perk"))},u=n.interact(l.root,{label:"Talk to Nikki",hotspot:"kitchen",use:async()=>{if(c++===0){await t.say("Nikki","morning!! i made eggs."),await t.say("Nikki","they’re a little burnt. i was watching you sleep.",[{text:"This is amazing. Thank you.",value:"thanks"},{text:"I’m not hungry. I gotta get to work.",value:"leave"}])==="thanks"?n.addNeed(-4,"thanked her"):(n.addNeed(6,"brushed her off"),await t.say("Nikki","oh. ok. that’s ok. that’s totally ok.")),await t.say("Nikki","i packed you lunch too. don’t look in it till lunch, ok?"),await h();return}const[g,v]=yc[(c-2)%yc.length];v==="love"?await t.say("Nikki",g,[{text:"I love you too.",value:"love"},{text:"Yeah.",value:"yeah"}])==="love"?(n.addNeed(-3,"said it back"),e.stats.promises++):n.addNeed(2,"“yeah.”"):await t.say("Nikki",g)}});let f=!1;n.interact(i.objects.frontDoor,{label:"Front door",hotspot:"frontdoor",use:async()=>{if(f)return t.say("thought","Still taped.");f=!0,await t.say("thought","Duct tape. A lot of it. Corner to corner, twice.");const g=await t.say("Nikki",`${d.from()}people can just walk in, bear!`,[{text:"Nikki, you can’t tape the door shut.",gain:1,value:"honest"},{text:"Huh. Okay.",value:"okay"},{text:"Nikki, I think this is my fault.",nerve:3,value:"confess"}]);g==="honest"?(n.addNeed(6,"questioned the tape"),await t.say("Nikki","why not? where are you going?")):g==="okay"?(n.addNeed(-2,"let it go"),await t.say("Nikki","see? you get it. you always get it.")):(n.addNeed(15,"tried to undo it"),e.flags.confessedMorning=!0,await t.say("Nikki","your fault? nothing is your fault. you’re perfect. you’re perfect."))}}),n.interact(i.objects.memorial,{label:"Sandy’s memorial",hotspot:"memorial",use:async()=>{await t.say("thought","Sandy’s memorial. Nikki made it yesterday. Out of Sandy."),await t.say("thought","There’s a candle. The candle is new.")}}),n.interact(i.objects.records,{label:"Record player",hotspot:"records",use:async()=>{const g=await Vr(n,Oa);g&&(e.record=g,n.sound.playRecord(g),t.toast(`Now playing: ${g.band}, ${g.title}`))}}),n.interact(i.objects.lunch,{label:"Lunch bag",hotspot:"kitchen",use:async()=>{await t.say("Nikki","don’t look in it till lunch!!"),await h()}}),n.interact(i.objects.backDoor,{label:"Leave for work",hotspot:"backdoor",use:async()=>{e.flags.lunch||(await t.say("Nikki","wait!! your lunch!"),await h());const g=await t.say("Nikki","text me when you get there. text me before you get there.",[{text:"I will.",value:"will"},{text:"It’s a ten-minute drive, Nikki.",value:"drive"}]);n.addNeed(g==="will"?-2:4,g==="will"?"promised to text":"pushed back"),e.nikkiLastSeen="kitchen";const v=l.root.position;e.nikkiLastSeenAt=[v.x,0,v.z,l.root.rotation.y],e.clock=Math.max(e.clock,8*60+30),e.leftHouseAt=e.clock,n.sound.door(),n.endRoam()}});const d=Rh(n,l,i.rooms,{delay:1.2,entry:u});await n.roam(),d.stop(),t.prompt(null),n.sound.musicLevel(0,1.2),await t.fade(1,900),n.sound.stopRecord(),n.sound.musicLevel(.3,.1)}const Nv=["#c0392b","#e8e3d8","#2c3e50","#d4a017","#6c3483","#1e8449","#a04000"],wc=["#e85d75","#5de8a8","#e8c25d","#8a5de8","#e8e3d8","#5d9ae8","#2a2a30"];function xc(n){const t=new At,e=(s,a)=>{const o=Jt(t,s,.06,n,0,0,0,18);o.rotation.x=Math.PI/2,o.position.set(0,a,0)};e(.2,.2),e(.15,.42);const i=Jt(t,.11,.004,"#f4f0e6",0,0,0,14);return i.rotation.x=Math.PI/2,i.position.set(.05,.3,.032),Y(t,.05,.62,.03,"#c8a070",0,.5,0),Y(t,.08,.16,.025,"#2a2420",0,1.1,0),t}function Mc(n=.6,t=.7){const e=new At;return Y(e,n,t,.32,"#1c1c20",0,0,0),Y(e,n-.08,t*.62,.01,"#3a3a40",0,.06,.165),Y(e,n-.06,.06,.01,"#c8b070",0,t-.12,.165),e}function Sc(n,t,e){const i=new At;Y(i,n,e,t,"#6a5a4a",0,0,0);for(let s=0;s<Math.floor(t/.12);s++){const a=Y(i,n*.86,.32,.02,wc[(s*3+Math.round(n*10))%wc.length],0,e-.2,-t/2+.08+s*.12);a.rotation.x=-.35}return i}function Dv(){const n=new yi;n.background=new It("#d8e6ee"),rs(n,{sky:"#f4fbff",ground:"#a8a092",hemi:1.55,sun:"#fff4e2",sunI:1,sunPos:[2,9,6],span:8});const t=[],e=(d,g,v,m,p=[])=>t.push(...Hs(n,d,g,v,m,p,{color:"#e2d8c6",h:3}));Ue(n,-7,-5,7,5,"#c8bfae",0,"lino"),zs(n,-7,-5,7,5,"#efece6",3,.3),e(-7,-5,7,-5),e(-7,5,7,5,[[-1,1]]),e(-7,-5,-7,5),e(7,-5,7,5),e(-3.5,-5,-3.5,-1.5),e(-7,-1.5,-3.5,-1.5,[[-5.1,-3.9]]);const i={sky:["#a8d0ec","#f2f6f0"]};ln(n,2,2.4,0,1.2,4.93,Math.PI,{...i,light:!1}),ln(n,2.6,1.5,-4.2,1.5,4.93,Math.PI,i),ln(n,2.6,1.5,4.2,1.5,4.93,Math.PI,i);for(const d of[-2,2.5])for(const g of[-3,0,3]){const v=new lt(new Pe(1.4,.05,.22),new ge({color:"#f6fbff"}));v.position.set(d,2.96,g),n.add(v)}se(n,"#f4fbff",1.4,0,2.6,0,10),se(n,"#fff1dc",.8,-5.2,2.4,-3.2,5),se(n,"#f4fbff",1,5.2,2.6,.5,6),rt(n,Pn(.9,1.2,["#e85d75","#2a2a30","#f4e8d0"]),-5.5,-4.92,0,1.4),rt(n,Pn(.9,1.2,["#5d8ae8","#e8c25d","#1e1e28"]),4.6,-4.92,0,1.5),rt(n,Pn(.7,.9,["#e8c25d","#a04000","#f2ead8"]),6,-4.92,0,1.6);const s=new At;rt(s,Fa(3,.8,"#6a5440","#2e2a28",{h:1}),0,0);const a=new At;Y(a,.45,.14,.38,"#2e2e34",0,0,0);const o=Y(a,.3,.18,.03,"#2e2e34",0,.14,-.1);o.rotation.x=-.3,Y(a,.24,.12,.005,"#88ff99",0,.17,-.08,{emissive:"#2a6a34"}).rotation.x=-.3,rt(s,a,.6,0,0,1),Y(s,.5,.06,.35,"#c8b48a",-.8,1,0),rt(n,s,-4.4,1.2),Cn(n,-4.4,1.2,1.7,.6),Nv.forEach((d,g)=>{const v=xc(d);rt(n,v,-2.4+g*1.05,-4.88,0,.75),Y(n,.06,.06,.12,"#2a2420",-2.4+g*1.05,1.86,-4.86)});const r=new At;rt(r,qi(1.4,.6,.85,"#7a6a58"),0,0);const l=xc("#e8e3d8");l.rotation.set(-Math.PI/2,0,.3),l.position.set(0,.88,.25),r.add(l),rt(n,r,1.6,-3.7),rt(n,Is("#3a3a40"),1.6,-2.8,Math.PI),rt(n,Mc(),-.6,-4.6),rt(n,Mc(.8,.9),5.6,-4.55);const c=Sc(1.4,.9,.8);rt(n,c,3.5,2),Cn(n,3.5,2,.8,.55);for(const d of[-2.5,-.5,1.5,3.5])rt(n,Sc(1.6,.6,1.1),6.5,d,Math.PI/2);rt(n,qi(1.4,.7,.75,"#5a4a3a"),-5.6,-4.1),Y(n,.42,.28,.04,"#1e1e22",-5.6,.75,-4.3),Y(n,.1,.1,.1,"#1e1e22",-5.6,.75,-4.25);const h=qi(.9,.9,.72,"#8a7a6a");rt(n,h,-6.3,-2.4),rt(n,Is("#5a6a7a"),-5.6,-2.4,-Math.PI/2);const u=Y(n,.22,.26,.14,"#b98e5a",-6.3,.72,-2.4);Y(n,.1,.4,.3,"#3a3a3a",-3.62,1.2,-3.6);const f={counter:Xt(-4.4,2.6,[-3.8,1.1,1.2],"Counter"),guitars:Xt(1.6,-2.4,[1.6,.9,-3.7],"Guitar wall"),bin:Xt(3.5,3.4,[3.5,.7,2],"Bargain bin"),floor:Xt(.5,1,[0,1.3,4.9],"Sales floor"),office:Xt(-4.6,-2.6,[-5.6,1.2,-4.4],"Office")};return{scene:n,blockers:t,hotspots:f,grade:{exposure:1.18,bloom:1.1,warm:"#fff6e6",cool:"#e2efea"},eyeLight:.3,objects:{counter:s,bench:r,bin:c,table:h,lunch:u},marks:{sarah:[-4.6,0,.35,0],carter:[-5.6,0,-4.75,0],entrance:[0,0,4.2,Math.PI]}}}const Uv=18*60;async function Ov(n){const{ui:t,state:e}=n,i=e;i.clock=10*60,n.addNeed((i.clock-i.leftHouseAt)/60*4,"drive + first hour away");const s=n.load(Dv,{at:"counter",grime:.25,grimeNow:!0}),a=n.spawn("sarah",kn,{pos:s.marks.sarah.slice(0,3),yaw:s.marks.sarah[3]});n.spawn("carter",Tg,{pos:s.marks.carter.slice(0,3),yaw:s.marks.carter[3]}),t.showClock(!0),n.phone.enable(!0),await t.fade(0,1e3),await t.say("thought","Shift ends at six. Nikki texts when she misses me. She always misses me."),t.prompt("Your phone is in the corner. Tap it or press P.",6e3);const o={1:0,2:0,3:0,4:0};let r=i.clock+2;const l=()=>{const m=hn(i.need);let p=mr[m];m===3&&!i.flags.talkedSarah&&(p=p.filter(w=>!w.includes("sarah")));const _=p[o[m]%p.length];o[m]++,n.phone.receive(_),n.phone.unread>0&&n.addNeed(1,null),r=i.clock+Gg[m]*(.75+Math.random()*.5)};let c=!1;const h=n.on("minute",m=>{c||(n.addNeed((4+Math.min(6,n.phone.ignored))/60,null),m>=r&&l(),m>=Uv&&(c=!0,n.clock.running=!1,n.run(async()=>{await t.say("Carter","That’s six! Go home, Bear. Go home to your… whatever’s going on."),n.endRoam()})))}),u=n.on("overflow",()=>{i.flags.fallout||(i.flags.fallout=!0,n.run(()=>Fv(n,s,a)))}),f=(m,p,_,w)=>{const y=n.interact(m,{label:_,hotspot:p,use:async()=>{await w(n),n.advance(20),i.stats.tasksDone++,y.enabled=!1,t.toast(`Done: ${_}`)}})};f(s.objects.bench,"guitars","Restring the Strat",fv),f(s.objects.counter,"counter","Ring up a customer",pv),f(s.objects.bin,"bin","Price the bargain bin",mv);let d=0;n.interact(a.root,{label:"Talk to Sarah",hotspot:"counter",use:async()=>{if(i.flags.fallout)return t.say("Sarah","i don’t really want to talk right now, bear.");if(d++===0){i.flags.talkedSarah=!0,await t.say("Sarah","you look like you haven’t slept."),await t.say("Sarah","is everything ok with… you know. nikki?",[{text:"Not really.",gain:1,value:"honest"},{text:"Everything’s great.",value:"lie"}])==="honest"?(n.addNeed(10,"talked to Sarah"),await t.say("Sarah","ok. you can talk to me. like, whenever.")):(n.addNeed(5,"talked to Sarah"),i.stats.lies++,await t.say("Sarah",n.phone.unread?"ok. your phone’s buzzing, by the way.":"ok. cool. good."));return}n.addNeed(3,"talked to Sarah");const m=["carter wants the bargain bin done by close.","did you hear the new mall ghost record? it’s so bad. i love it.","your phone. bear. your phone."];await t.say("Sarah",m[(d-2)%m.length])}});const g=n.interact(s.objects.lunch,{label:"Lunch Nikki packed",hotspot:"office",use:async()=>{i.clock<12*60&&await t.say("thought","Nikki said not till lunch.",[{text:"Open it anyway.",value:"open"},{text:"Wait.",value:"wait"}])==="wait"||(g.enabled=!1,s.objects.lunch.visible=!1,await t.say("thought","A sandwich. She cut the crusts off."),n.sound.sting(),n.post.glitch=1,i.flags.sandwich=!0,await t.say("thought","There’s fur in it."),await t.say("thought","Gray and orange. Sandy-colored."),t.toast("Perk lost: free lunch","lost"),await t.say("thought","The Willow’s packaging had a customer service number on the back."),n.phone.hint(!0),t.prompt("Call the number on the Willow. Open your phone, then Calls.",7e3))}});i.flags.lunch||(g.enabled=!1);let v=0;n.interact(n.actors.carter.root,{label:"Talk to Carter",hotspot:"office",use:async()=>{v++===0&&await t.say("Carter","Bear! You look like death. Good death. Healthy death."),i.stats.tasksDone===3&&await t.say("Carter","And you did the bargain bin? I’m tearing up."),await t.say("Carter","What do you need?",[{text:"Can I clock out early?",value:"early"},{text:"Never mind.",value:"no"}])==="early"&&(await t.say("Carter",`It’s ${Dn(i.clock)}. On a Tuesday.`),await t.say("Carter","Fine. Go. I’m docking you."),i.stats.leftEarlyAt=Dn(i.clock),c=!0,n.endRoam())}}),n.clock.rate=2.5,n.clock.running=!0,await n.roam(),n.clock.running=!1,h(),u(),i.stats.ignored=n.phone.ignored,i.returnedAt=i.clock+25,t.prompt(null),await t.fade(1,900)}async function Fv(n,t,e){const{ui:i,state:s}=n;n.lock(),n.clock.paused++,n.sound.sting(),n.post.glitch=1;const[a,o,r,l]=t.marks.entrance,c=n.spawn("nikki",ye,{pos:[a,o,r],yaw:l});await n.lookAt(c.headWorld(),800),await i.say("Sarah","um. bear? your… girlfriend’s here."),await n.wait(1200),c.lookTarget=e.head,await n.wait(900),await i.say("Nikki","hi sarah."),await i.say("Sarah","…hi, nikki."),c.lookTarget=null,await i.say("Nikki","i was just checking. see you at home, bear."),await i.fade(1,400),n.despawn("nikki"),await i.fade(0,500),e.setExpr("sad"),s.need=80,s.stats.fallout.push("Nikki came to the store"),await i.say("thought","She doesn’t have a car."),n.clock.paused--,n.unlock()}const Bv={1:"did you miss me? you missed me.",2:"do you love me? say it.",3:"you didn’t text back. do you love me?",4:"do you love me."};async function zv(n){const{ui:t,state:e}=n,i=e;i.clock=i.returnedAt??18*60+25;const s=hn(i.need),a=n.load(vn,{time:"evening",at:"backdoorIn",grime:.32,grimeNow:!0}),o=a.marks,r={1:o.byBackDoor,2:o.table,3:o.facingFront,4:i.nikkiLastSeenAt||o[i.nikkiLastSeen]||o.kitchen}[s],l=n.spawn("nikki",ye,{pos:r.slice(0,3),yaw:r[3]});if(s===4){const c=new lt(new Os(.5,20),new de({color:"#4a3326"}));c.rotation.x=-Math.PI/2,c.position.set(r[0],.012,r[2]),a.scene.add(c)}if(s===3&&(l.trackMax=.2),t.showClock(!0),n.phone.enable(!0),i.record&&n.sound.playRecord(i.record),await t.fade(0,1e3),i.record&&await t.say("thought","The record is still going."),s===1&&await t.say("Nikki","you’re home!!"),s===2&&await t.say("Nikki","you’re home. you’re home you’re home you’re home."),s===3&&await t.say("thought","She’s facing the front door. The taped one."),s===4){const c=Math.round((i.clock-i.leftHouseAt)/60);i.stats.hoursWaited=c,await t.say("thought","She’s exactly where I left her this morning."),await t.say("thought",`That was ${c} hours ago. She hasn’t moved. It shows.`)}n.interact(l.root,{label:"Nikki",hotspot:{3:"entry",4:kh(n,r[0],r[2])}[s],use:async()=>{s===3&&(l.trackMax=3.1),await n.lookAt(l.headWorld(),500),await Hv(n,l),n.endRoam()}}),t.prompt("Go to Nikki.",5e3),await n.roam(),t.prompt(null),await t.fade(1,900)}async function Hv(n,t){const{ui:e,state:i}=n;i.flags.sandwich&&(await e.say("Nikki","did you like your lunch?",[{text:"It was great.",value:"lie"},{text:"There was fur in it, Nikki.",nerve:2,value:"truth"}])==="lie"?(n.addNeed(-5,"lied about the sandwich"),i.stats.lies++,await e.say("Nikki","i knew you would.")):(n.addNeed(10,"told the truth about the sandwich"),await e.say("Nikki","it was the best part of her."))),i.flags.nikkiOnLine&&await e.say("Nikki","who were you calling today, bear? who was that?");for(let s=0;s<3&&i.need>=25;s++){const a=await e.say("Nikki",Bv[Math.max(1,Math.min(4,Math.ceil(i.need/25)))],[{text:"I love you.",value:"love"},{text:"I’ll never leave again.",value:"never"},{text:"I’m here now.",value:"here"},{text:"I need a shower.",value:"shower"},{text:"I did something to you. I’m going to fix it.",nerve:3,value:"truth"}]);a==="love"?(n.addNeed(-15,"“I love you.”"),i.stats.promises++,await e.say("Nikki","i love you more. i love you more than anyone in the world.")):a==="never"?(n.addNeed(-22,"promised never to leave"),i.stats.promises++,e.toast("You promised.","lost"),await e.say("Nikki","never ever?")):a==="here"?(n.addNeed(-8,"“I’m here now.”"),await e.say("Nikki","you are. you’re here.")):a==="shower"?(n.addNeed(6,"deflected"),await e.say("Nikki","i’ll come with you.")):(n.addNeed(15,"tried to undo it"),i.flags.toldTruth=!0,t.setExpr("scream"),n.post.glitch=1,n.sound.scream(),await e.say("Nikki","FIX? FIX WHAT? IS SOMETHING WRONG WITH ME? IS SOMETHING WRONG WITH ME?"),t.setExpr(null),await e.say("Nikki","…sorry. sorry. i’m fine. i’m fine."))}await e.say("Nikki","come to bed.")}async function Gv(n){const{ui:t,state:e}=n;e.clock=23*60+40,e.stats.needAtBed=e.need;const i=n.load(vn,{time:"night",at:"bedLie",grime:.45,grimeNow:!0});t.showClock(!1),n.phone.enable(!1),n.lock(),e.record&&(n.sound.playRecord(e.record),n.sound.musicLevel(.08,.1));const s=i.marks.night.map(v=>new C(...v)),a=n.spawn("nikki",ye,{pos:s[0].toArray()});a.root.visible=!1,a.root.rotation.order="YXZ";const o=new xi("#c8d0ff",.5,1.6,1.5);o.position.set(0,1.55,.35),a.root.add(o);const r=()=>{const v=a.root.position;a.root.rotation.y=Math.atan2(n.camera.position.x-v.x,n.camera.position.z-v.z)};t.eyesOverlay(!0),await t.fade(0,800),t.prompt("Eyes closed. Listen.",5e3),await n.wait(1500);let l=!1,c=0,h=-1,u=0,f=0,d=0;const g=t.holdSwitch("Hold to open your eyes",v=>{l=v,t.setEyes(v),v&&(e.stats.looks++,h>=0&&(n.addNeed(4,"caught him awake"),t.subtitle(lc[u++%lc.length])))});await new Promise(v=>{const m=n.on("frame",p=>{d+=p,l?(f=0,n.addNeed(p*.8,null)):(f+=p,c=Math.min(1,c+p/80*(.8+e.need/100))),d>150&&(c=1);const _=Math.min(s.length-1,Math.floor(c*s.length));c>.08&&_>h&&!l&&(h=_,a.root.visible=!0,a.root.position.copy(s[h]),r(),a.root.rotation.x=h===s.length-1?.42:0,n.sound.stepAt(s[h].clone().setY(.2)),setTimeout(()=>n.sound.stepAt(s[h].clone().setY(.2)),380),h===0?n.sound.startBreath(a.headWorld()):n.sound.moveBreath(a.headWorld())),c>=1&&h===s.length-1&&f>1.5&&(m(),v())})}),g(),n.sound.stopBreath(),n.sound.stopRecord(),await n.wait(600),n.sound.whisper(),t.subtitle("bear. bear, it’s me.",{real:!0,ms:3200}),await n.wait(3600),await n.wait(1800),t.prompt(null),await t.fade(1,600),t.eyesOverlay(!1),await t.card("End of Day 2","",2e3)}const Vv={nikki:{hotspot:"seatNikki",mark:"couchR"},sarah:{hotspot:"seatSarah",mark:"loveR"},chair:{hotspot:"seatChair",mark:"chair"}};async function Wv(n){const{ui:t,state:e}=n;e.clock=20*60+40;const i=n.load(Ph,{at:"entry",grime:.38,grimeNow:!0}),s=i.marks,a=(G,Z={})=>({pos:s[G].slice(0,3),yaw:s[G][3],...Z}),o=n.spawn("ian",Ps,a("ian")),r=n.spawn("sarah",kn,a("sarah"));n.spawn("dev",bg,a("dev")),n.spawn("mo",Eg,a("mo"));const l=s.follow.entry;let c=n.spawn("nikki",ye,{pos:l.slice(0,3),yaw:l[3]});t.showClock(!0),n.phone.enable(!0),n.sound.playRecord(Oa.find(G=>G.id==="dadsboat")),n.sound.musicLevel(.16,.1),n.sound.ambience("crowd"),await t.fade(0,1e3),await t.say("Ian","(from the kitchen) BEAR! you came!"),await n.lookAt(c.headWorld(),600),await t.say("Nikki","stay close, ok? i don’t like parties. i like you."),n.phone.receive("dude","ian"),await n.wait(700),n.phone.receive("kitchen. alone","ian"),await t.say("Nikki","who’s texting you?",[{text:"Ian.",value:"ian"},{text:"Nobody.",value:"nobody"}])==="nobody"?(e.stats.lies++,n.addNeed(3,"lied about a text"),await t.say("Nikki","ok.")):await t.say("Nikki","what does he want?"),t.prompt("Ian’s party. Nikki’s right behind you.",6e3);let u="entry",f=null;const d=new Us,g=new ae,v=new Ns(new C,.7),m=(G,Z)=>(n.camera.updateMatrixWorld(),g.multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse),d.setFromProjectionMatrix(g),v.center.set(G,.9,Z),d.intersectsSphere(v)),p=n.on("frame",()=>{if(n.current&&s.follow[n.current]&&n.current!==u&&(f=n.current),!f)return;const[G,,Z,yt]=s.follow[f],at=c.root.position;m(at.x,at.z)||m(G,Z)||(at.set(G,0,Z),c.root.rotation.y=yt,u=f,f=null)}),_=()=>u===n.current;let w=0,y=0;const P=()=>{w&&y&&n.run(async()=>{await n.wait(600),await t.say("Ian","(to the room) ok! JENGA. everybody. now."),n.endRoam()})};n.interact(o.root,{label:"Talk to Ian",hotspot:"kitchen",use:async()=>{if(w++>0){const Z=["jenga in five. i’m serious. i made it myself.","you’re doing the thing where you look at the door.","have a drink. have two. it’s a party."];return t.say("Ian",Z[(w-2)%Z.length])}await t.say("Ian","ok. what is going on."),await t.say("Ian","two days ago she told sarah you were like a little brother to her. now she’s, like, wearing you.");const G=await t.say("Ian","is she ok? are you ok?",[{text:"We’re really happy, man.",value:"lie"},{text:"Something’s wrong with her. I think I did it.",nerve:2,value:"truth"},{text:"Can we not do this here?",value:"later"}]);G==="lie"?(e.stats.lies++,await t.say("Ian","you look like a hostage.")):G==="truth"?(e.flags.toldIan="part",await t.say("Ian","you did it? what does that mean, you did it?"),_()?(n.addNeed(8,"she heard"),await n.lookAt(c.headWorld(),400),await t.say("Nikki","did what?"),await t.say("thought","I didn’t hear her come in.")):await t.say("Ian","ok. tomorrow. you’re telling me everything tomorrow.")):await t.say("Ian","fine. but we’re doing it. soon."),n.addNeed(_()?3:6,"time with Ian"),await t.say("Ian","also. i wrote the jenga blocks myself. at two in the morning. so. apologies in advance."),P()}}),n.interact(r.root,{label:"Talk to Sarah",hotspot:"shelf",use:async()=>{if(y++>0){const Z=["ian’s record collection is all dad’s boat. all of it.","she’s looking at us. don’t turn around.","later, ok?"];return n.addNeed(4,"talked to Sarah"),t.say("Sarah",Z[(y-2)%Z.length])}await t.say("Sarah","hey. how’s… everything."),await t.say("Sarah","she texted me at four in the morning to ask what my “intentions” are. with you."),await t.say("Sarah","what does that mean, bear?",[{text:"I’m sorry. She’s not herself.",gain:1,value:"honest"},{text:"She’s just protective.",value:"lie"}])==="honest"?await t.say("Sarah","yeah. i noticed."):(e.stats.lies++,await t.say("Sarah","ok. sure.")),n.addNeed(_()?14:10,"talked to Sarah"),e.flags.sarahLater=!0,await t.say("Sarah","can we talk later? like, actually talk? not here."),P()}});let T=0;const A=async()=>{if(await n.lookAt(c.headWorld(),400),T++===0){await t.say("Nikki","are you having fun? i’m having fun if you’re having fun.",[{text:"I’m having fun.",value:"fun"},{text:"I’m gonna go talk to Ian.",value:"ian"}])==="fun"?n.addNeed(-6,"stayed with her"):(n.addNeed(3,"left her for Ian"),await t.say("Nikki","ok. i’ll come."));return}const G=["everybody keeps looking at me.","stay where i can see you, ok?","i love you. i love you more than anyone in this room."];n.addNeed(-3,"stayed with her"),await t.say("Nikki",G[(T-2)%G.length])},k=n.interact(c.root,{label:"Nikki",use:A});n.interact(n.actors.dev.root,{label:"Dev",hotspot:"kitchen",use:()=>t.say("thought","Dev, from Ian’s old band. He’s explaining vinyl to me. I work at a record store.")}),n.interact(n.actors.mo.root,{label:"Mo",hotspot:"living",use:()=>t.say("thought","Mo keeps looking at Nikki, then at me, then at the door.")}),n.interact(i.objects.drinks,{label:"Drinks",hotspot:"kitchen",use:async()=>{await t.say("thought","Every bottle on the counter is open."),_()&&await t.say("Nikki","i already got you one. it’s on the table. i put it by me.")}}),n.interact(i.tower.proxy,{label:"Jenga",hotspot:"living",use:async()=>{await t.say("Ian","(from across the room) is that bear at the jenga? JENGA. everybody."),n.endRoam()}}),await n.roam(),p(),k.enabled=!1,t.prompt(null),await t.say("Ian","ok! jenga. house rules: you pull it, you do it.");const b=await t.say("Ian","bear. sit wherever.",[{text:"Next to Nikki.",value:"nikki"},{text:"Next to Sarah.",value:"sarah"},{text:"The armchair, by myself.",value:"chair"}]);e.flags.seat=b,await t.fade(1,500);for(const G of["nikki","ian","sarah"])n.despawn(G);c=n.spawn("nikki",ye,a("couchL",{seated:!0})),n.spawn("ian",Ps,a("ottoman",{seated:!0}));const M=n.spawn("sarah",kn,a("loveL",{seated:!0})),R=n.actors.ian,F=Vv[b];n.place(F.hotspot);const[U,,V]=s[F.mark],$=i.table;i.hotspots.lean=Xt(U+($.x-U)*.4,V+($.z-V)*.4,[$.x,.75,$.z],"",{y:1,marker:!1}),n.setWalk(!1),await t.fade(0,600),b==="nikki"?(n.addNeed(-8,"sat with her"),await t.say("Nikki","hi.")):b==="sarah"?(n.addNeed(15,"sat with Sarah"),await t.say("Sarah","oh. hi."),await n.lookAt(c.headWorld(),700),await t.say("thought","Nikki hasn’t blinked since I sat down.")):(n.addNeed(4,"sat alone"),await t.say("Nikki","there’s room over here, bear.")),await t.say("Ian","wait. before we start. nikki said she wrote something?"),await n.lookAt(c.headWorld(),500),await t.say("Nikki","it’s short. it’s called hansel and gretel."),await t.say("Nikki","once there was a boy who dropped crumbs behind him, so he could always find his way home."),await t.say("Nikki","and a girl found the crumbs. and she ate every single one."),await t.say("Nikki","so he could never find his way home again. so he had to stay with her."),await t.say("Nikki","forever and ever. the end."),t.subtitle("(someone laughs, then stops)",{ms:2e3}),await n.wait(1600),await n.lookAt(R.headWorld(),500),await t.say("Ian","…cool. that’s a great story. that was so great. JENGA.");const W=()=>i.tower.group.getWorldPosition(new C).setY(.85),X=async G=>{await n.lookAt(W(),500),await i.tower.pull(G.headWorld()),await n.lookAt(G.headWorld(),500)};await X(R),await t.say("Ian","“do an impression of someone in this room.” easy."),await t.say("Ian","“hi. i’m bear. i work at a music store and i’m sad about it.”"),t.subtitle("(laughter)",{ms:1500}),await t.say("Ian","…i also work there. i’m also sad about it."),await X(c),await t.say("Nikki","“what’s your biggest fear?”"),hn(e.need)>=3?(c.lookTarget=M.head,await t.say("Nikki","bear leaving. bear leaving me. bear leaving me for someone in this room."),c.lookTarget=null):(await t.say("Nikki","bear leaving."),await t.say("Nikki","that’s it. that’s the whole thing.")),await n.lookAt(R.headWorld(),500),await t.say("Ian","ok! love that. great energy. bear, you’re up."),n.clearInteractions(),await n.moveTo("lean"),t.prompt("Your turn. Tap the tower to pull a block."),await new Promise(G=>{const Z=n.interact(i.tower.proxy,{label:"Pull a block",use:async()=>{Z.enabled=!1,t.prompt(null),await i.tower.pull(n.camera.position),G()}});n.unlock()}),n.lock(),await n.moveTo(F.hotspot),await t.say("thought","Ian’s handwriting: “tell the truth about something.”");const O=await t.say("thought","Everyone’s looking at me.",[{text:"“I broke a stick from a crystal shop and made a wish, and it came true.”",nerve:3,value:"wish"},{text:"“I’ve never seen Star Wars.”",value:"starwars"},{text:"“Nikki and I are really, really happy.”",value:"happy"}]);O==="wish"?(e.flags.partyTruth=!0,t.subtitle("(laughter)",{ms:1500}),await t.say("Ian","dude, same. i wished for a pizza once and then i ordered one."),n.post.glitch=.7,n.addNeed(10,"told the room about the wish"),await n.lookAt(c.headWorld(),400),await t.say("thought","Nikki isn’t laughing.")):O==="starwars"?await t.say("Ian","get out of my house."):(e.stats.lies++,n.addNeed(-8,"told the room they were happy"),M.setExpr("sad"),await t.say("Nikki","we are.")),await n.lookAt(M.headWorld(),500),await i.tower.pull(M.headWorld()),await n.lookAt(M.headWorld(),400),await t.say("Sarah","“kiss the last person who went.”"),t.subtitle("(ooooh)",{ms:1500}),await t.say("Sarah","oh my god. ian."),await t.say("Ian","i wrote them at two in the morning! i am not legally responsible!"),M.setExpr(null);const tt=await t.say("Sarah","we don’t have to. it’s a stupid game.",[{text:"We can skip it.",value:"skip"},{text:"It’s just a game.",value:"game"},{text:"…",value:"silent"}]);n.addNeed({skip:4,game:12,silent:6}[tt],"the kiss dare"),await t.say("Nikki","i’ll take it."),await t.fade(1,200),n.despawn("nikki");const it=n.camera.position,_t=new C($.x-it.x,0,$.z-it.z).normalize(),Ct=new C(it.x+_t.x*.95,0,it.z+_t.z*.95),Zt=new C(it.x+_t.x*.6,0,it.z+_t.z*.6);c=n.spawn("nikki",ye,{pos:Ct.toArray()}),c.root.rotation.order="YXZ",c.root.rotation.y=Math.atan2(it.x-Ct.x,it.z-Ct.z),c.root.rotation.x=.15,c.driftLocked=!0,c.setDrift(.2),await n.lookAt(c.headWorld(),10),await t.fade(0,200),await n.wait(500),t.fade(.9,600),await n.tween(600,G=>c.root.position.lerpVectors(Ct,Zt,G)),await n.wait(1200),c.setDrift(.95),n.post.glitch=.6,t.fade(0,400),await n.tween(400,G=>c.root.position.lerpVectors(Zt,Ct,G)),await t.say("Nikki","there. now nobody else has to."),t.subtitle("(nobody says anything)",{ms:1800}),await n.wait(1400),i.objects.bottle.visible=!1,n.sound.glass(),n.post.glitch=1,await t.say("thought","She’s holding her bottle by the neck. The bottom of it is on the rug."),await t.say("Nikki","nobody else ever has to."),t.eyesOverlay(!0),n.sound.scream(),n.sound.stopRecord(),n.sound.stopAmbience(),await n.wait(900),await t.say("Sarah","NIKKI—"),await t.say("Ian","call 911. somebody call 911!"),await t.say("thought","She was smiling. The whole time, she was smiling."),e.stats.fallout.push("Nikki, at Ian’s party"),e.flags.partyDone=!0,e.need=35+.4*e.need,await t.fade(1,400),t.eyesOverlay(!1),n.setWalk(!0)}function Xv(){const n=new yi;n.background=new It("#0d1014"),rs(n,{sky:"#e8fff2",ground:"#5a6a60",hemi:.7,sunI:0});const t=[],e=(f,d,g,v,m=[])=>t.push(...Hs(n,f,d,g,v,m,{color:"#c9d6cb",h:2.6}));Ue(n,-1.4,-9,1.4,2,"#b9c4b8",0,"lino"),Ue(n,1.4,-9,5,-4.5,"#c4cabe",0,"lino"),zs(n,-1.4,-9,5,2,"#e6ece6",2.6,.25),e(-1.4,-9,-1.4,2),e(1.4,-4.5,1.4,2),e(-1.4,2,1.4,2),e(-1.4,-9,5,-9),e(1.4,-9,1.4,-4.5,[[-7,-6]]),e(1.4,-4.5,5,-4.5),e(5,-9,5,-4.5);const i=[];for(const f of[1,-1.5,-4,-6.5])i.push(Sa(n,.5,1.1,"#f2fff6",0,2.59,f)),i[i.length-1].rotation.x=Math.PI/2,se(n,"#e8fff0",.7,0,2.3,f,5);const s=se(n,"#cfe0ff",.5,3.2,2.3,-6.8,5);for(const f of[-.2,.5,1.2])rt(n,Is("#5a7a9a"),-1.05,f,Math.PI/2);rt(n,ts(1),-1,-.8),rt(n,Pn(.7,.5,["#a8c8a0","#6a8aa8","#eef0e8"]),1.33,-.6,-Math.PI/2,1.35),Y(n,.8,1.8,.7,"#3a4a5a",.92,0,1),Sa(n,.55,1.1,"#9fd8ff",.51,1.1,1,-Math.PI/2);for(const[f,d,g]of[[1.36,-2.5,-Math.PI/2],[-1.36,-5.2,Math.PI/2],[-1.36,-2,Math.PI/2]])rt(n,Pa(.95,2.1,"#8a9aa6",{trim:"#d8e2da",knob:"#b8c0c8"}),f,d,g);Sa(n,.3,.12,"#ffffff",1.33,2.25,-6.5,-Math.PI/2),Y(n,1,.45,2,"#9aa4ae",4.1,0,-6.6),Y(n,.94,.12,1.96,"#eef1f4",4.1,.45,-6.6),Y(n,.92,.04,1,"#c8dce8",4.1,.57,-6);for(const f of[-1,1])Y(n,.03,.22,1.2,"#b8c0c8",4.1+f*.5,.55,-6.4);Y(n,1,.7,.05,"#9aa4ae",4.1,0,-7.62),Cn(n,4.1,-6.6,.7,1.15);const a=Y(n,.7,.12,.35,"#f7f8fa",4.1,.55,-7.4),o=new lt(new os(.045,.008,6,16),new de({color:"#ffffff"}));o.position.set(4,.69,-7.35),o.rotation.x=Math.PI/2,n.add(o),Jt(n,.015,1.8,"#9aa2aa",3.3,0,-7.6,6),Y(n,.14,.2,.04,"#cfe8ff",3.3,1.55,-7.6,{emissive:"#203040"});const r=Jt(n,.004,1.1,"#e0eef8",3.36,.42,-7.55,4);r.rotation.z=.1;const l=new lt(new Ne(.012,6,4),new ge({color:"#cfe8ff"}));l.position.set(3.42,.4,-7.55),n.add(l),ln(n,1.3,1.1,3.3,1.5,-8.93,0,{sky:["#04060e","#16203e"],light:!1});const c=new lt(new we(.7,1.4,1,6),new de({color:"#b8c4d8",side:De}));c.position.set(2.85,1.45,-8.85),n.add(c);const h={waiting:Xt(-.5,1,[0,1.3,-6],"Waiting area"),hall:Xt(0,-3.5,[1.4,1.2,-6.5],"Hallway"),door4:Xt(.6,-6.5,[4.1,.8,-6.6],"Room 4"),room:Xt(2.6,-6.5,[4.1,.8,-6.6],"Room 4"),window:Xt(2.8,-8,[3.3,1.4,-9],"Window")};let u=0;return{scene:n,blockers:t,hotspots:h,grade:{exposure:1.25,bloom:1.4,warm:"#f4fff0",cool:"#d4ece6"},eyeLight:.3,objects:{pillow:a,band:o,curtain:c,line:r},update(f){u+=f,c.rotation.x=-.25-.2*Math.sin(u*1.3)-.1*Math.sin(u*3.1),c.position.z=-8.85+.12*(1+Math.sin(u*1.3)),l.position.y-=f*1.6,l.position.y<.02&&(l.position.y=.4),i[2].visible=Math.sin(u*23)>-.9||Math.sin(u*1.7)>.3,s.intensity=.45+.05*Math.sin(u*40)}}}async function qv(n){const{ui:t,state:e}=n;e.clock=25*60+12;const i=n.load(Xv,{at:"waiting",grime:.45,grimeNow:!0});t.showClock(!0),n.phone.enable(!0),n.sound.ambience("hum"),await t.fade(0,1400),await t.say("thought","They took her back an hour ago. Stitches. “Superficial,” the nurse said, like that was good news."),n.phone.receive("how is she","ian"),await n.wait(900),n.phone.receive("dude what happened tonight","ian"),await n.wait(900),n.phone.receive("she was SMILING bear","ian"),t.prompt("Ian’s texting. Open your phone (P)."),await n.phone.offer("ian",[{text:"She’s getting stitches. She’s ok.",value:"ok"},{text:"I’ll tell you everything tomorrow. I promise.",value:"promise"}])==="promise"?(e.flags.promisedIan=!0,n.addNerve(1,"promised Ian the truth"),await n.wait(800),n.phone.receive("you better","ian")):(await n.wait(800),n.phone.receive("that’s not what i asked","ian")),await n.wait(1200),n.phone.close(),t.prompt("Nikki’s in Room 4, at the end of the hall.",6e3),n.interact(i.objects.pillow,{label:"The bed",hotspot:"room",use:async()=>{await t.say("thought","The bed’s empty. The IV line is still dripping, onto the floor."),await t.say("thought","Her hospital bracelet is on the pillow. Still closed. She slid it off."),n.endRoam()}}),n.interact(i.objects.curtain,{label:"Window",hotspot:"window",use:()=>t.say("thought","The window’s open. Room 4 is on the third floor.")}),await n.roam(),t.prompt(null),n.phone.receive("i’m home"),await n.wait(1100),n.phone.receive("i didn’t like it there. they kept asking about you"),await n.wait(1100),n.phone.receive("come home bear. i made the bed"),n.phone.open("messages","nikki"),await n.wait(2600),await t.say("thought","Home is eleven miles from here. She doesn’t have a car."),n.phone.close(),n.sound.stopAmbience(),await t.fade(1,900)}const Yv="Nikki|real";async function $v(n){const{ui:t,state:e}=n;e.clock=26*60+40,n.load(vn,{time:"night",at:"bedLie",grime:.55,grimeNow:!0}),t.showClock(!1),n.phone.enable(!1),n.lock();const i=n.camera.position,s=n.spawn("nikki",ye,{pos:[-3.9,.02,-3.35],seated:!0});s.root.rotation.y=Math.atan2(i.x+3.9,i.z+3.35),s.driftLocked=!0,s.setDrift(0),s.setExpr("sad");const a=new xi("#c8d0ff",.7,1.8,1.5);a.position.set(0,1.5,.45),s.root.add(a),t.eyesOverlay(!0),await t.fade(0,800),t.prompt("Eyes closed.",3e3),n.sound.startBreath(s.headWorld()),await n.wait(2600),n.sound.whisper(),t.subtitle("bear. bear, it’s me.",{real:!0,ms:3e3}),await n.wait(3300),t.subtitle("it’s really me. you can look.",{real:!0,ms:3e3}),await t.hold("Open your eyes",900),n.sound.stopBreath(),t.eyesOverlay(!1),e.stats.looks++,await n.lookAt(s.headWorld(),500);const o=Math.max(24e3,52e3-e.need*300);let r=!1;const l=setTimeout(()=>{r=!0,t.cut()},o),c=(f,d)=>r?null:t.say(Yv,f,d);await(async()=>{if(await c("don’t talk loud. she’s asleep."),r||(await c("i don’t know how long i get. it’s like i’m in the back seat and she’s driving."),r))return;const f=await c("something happened to me. sunday, in your car. what did you do to me?",[{text:"I made a wish on a Willow. I wished you loved me more than anyone.",nerve:2,value:"truth"},{text:"Nothing. You’re just tired.",value:"lie"},{text:"…",value:"silent"}]);if(!r){if(f==="truth"){if(e.flags.toldRealNikki=!0,await c("you wished for me. like i was something on a shelf."),r||(await c("can you undo it?",[{text:e.flags.calledRep?"The hotline says no. It ends when I die.":"I don’t think I can.",value:"no"},{text:"I’m going to find a way.",value:"way"}]),r)||(await c("then somebody else has to wish. somebody who isn’t you."),r))return;const d=await c("promise me. find someone. before she hurts anybody else.",[{text:"I promise.",gain:1,value:"promise"},{text:"I don’t want to lose you.",value:"keep"}]);if(r)return;d==="promise"?(e.flags.plan=!0,await c("ok. ok. i think i believe you.")):(e.flags.refusedReal=!0,await c("you never had me, bear."))}else{if(f==="lie"&&e.stats.lies++,await c("please. it hurts. she makes me do things and i watch."),r)return;const d=await c("if it won’t stop, then stop me. whatever it takes. even if it’s me.",[{text:"Don’t say that. You’d rather die than be with me?",value:"offended"},{text:"I did this. I made a wish. I’ll find a way to end it.",nerve:2,value:"truth"},{text:"Go back to sleep, Nikki.",value:"sleep"}]);if(r)return;d==="offended"?(e.flags.refusedReal=!0,await c("…that’s what you heard?")):d==="truth"?(e.flags.toldRealNikki=!0,e.flags.plan=!0,await c("a wish. then somebody else has to wish it away. promise me.")):await c("no. no, bear, please, i don’t want to go back in—")}r||await c("she’s waking up. i can feel her. bear, listen to me, whatever she—")}})(),clearTimeout(l),r||t.cut(),s.setExpr(null),s.driftLocked=!1,s.setDrift(Br(e.need)),n.post.glitch=1,n.sound.sting(),await n.wait(900),await t.say("Nikki","bear? why are you looking at me like that?"),n.addNeed(6,"caught him awake"),await t.say("Nikki","go to sleep. i’ll watch you.",[{text:"Okay. I love you.",value:"love"},{text:"…",value:"silent"}])==="love"&&(n.addNeed(-6,"“I love you.”"),e.stats.promises++),t.eyesOverlay(!0),await n.wait(2600),e.clock=26*60+52,n.phone.enable(!0),n.phone.receive("are you awake","sarah"),await n.wait(1200),n.phone.receive("i need to tell you something. about nikki. and ian","sarah"),await n.wait(1200),n.phone.receive("not at work. not over text","sarah"),await n.wait(1100),n.phone.receive("i’m at the park on fifth. the lot by the swings. i’ll wait","sarah"),t.prompt("Your phone. It’s Sarah."),await n.phone.offer("sarah",[{text:"On my way.",value:"go"},{text:"Sarah, it’s 3 AM.",value:"late"}])==="late"&&(await n.wait(900),n.phone.receive("please, bear","sarah"),await n.phone.offer("sarah",[{text:"Ok. On my way.",value:"go"}])),t.prompt(null),await n.wait(900),n.phone.close(),n.phone.enable(!1),await t.hold("Slip out of bed",1600),n.sound.door(),n.addNeed(8,"left in the night"),e.flags.sneakedOut=!0,await t.fade(1,900),t.eyesOverlay(!1)}const bc=["sorry. i know it’s three in the morning. i didn’t know who else to tell.","nikki and ian. before you two. they were together, kind of. for a month, last year.","she ended it, and he got weird about it. he made me promise not to tell you.","and at the hospital ian said nikki told him you did something to her. sunday. in your car.","bear. what did you do?"],jv=n=>Math.min(5,Math.max(2,Math.round((100-n)/12)+1));async function Kv(n){const{ui:t,state:e}=n;e.clock=27*60+10;const i=n.load(Wr,{place:"park",at:"driver",grime:.6,grimeNow:!0}),s=jv(e.need);t.showClock(!1),n.phone.enable(!0),n.sound.ambience("wind"),await t.fade(0,1200),await t.say("thought","The lot by the swings. Sarah’s car is the only other one."),n.sound.door(),await t.fade(1,250);const[a,o,r,l]=i.marks.passenger,c=n.spawn("sarah",kn,{pos:[a,o,r],yaw:l,seated:!0});c.setExpr("sad"),await n.lookAt(c.headWorld(),10),await t.fade(0,300);const[h,u,f,d]=i.marks.fog,g=n.spawn("nikki",ye,{pos:[h,u,f],yaw:d});g.root.visible=!1;const v=w=>{w===2&&n.phone.receive("where are you"),w===1&&(n.phone.receive("i can see your car"),g.root.visible=!0,n.sound.stepAt(new C(1.6,0,2.5)))};let m=0,p=!1,_=-1;for(;m<s&&!p;){v(s-m),await t.say("Sarah",bc[m]),_=m;const w=m===bc.length-1,y=s-m,P=w?"She’s waiting.":y===1?"My phone again. And someone’s out there, past her window.":y===2?"My phone’s buzzing.":["She won’t look at me.","She keeps checking the mirror.","She’s picking at her sleeve."][m%3],T=await t.say("thought",P,[w?{text:"I made a wish. It came true.",nerve:2,value:"wish"}:{text:"Keep listening.",value:"listen"},{text:"Sarah, get out of the car.",value:"out"},{text:"It’s Nikki. She’s coming. Run.",nerve:2,value:"run"}]);if(m++,T==="run")e.flags.toldSarah=!0,await t.say("Sarah","…ok."),p=!0;else if(T==="out"){if(m>=s){t.say("Sarah","what? why? bear, you’re scaring me."),await n.wait(900),t.cut(),await n.wait(800);break}v(s-m),await t.say("Sarah","what? why? bear, you’re scaring me."),m++,await t.say("Sarah","ok. ok. i’m going."),p=!0}else T==="wish"&&(e.flags.toldSarah=!0,await t.say("Sarah","a wish? bear, that’s—"))}if(e.flags.heardIanNikki=_>=1,e.flags.heardIanTold=_>=3,p){n.sound.door(),await t.fade(1,200),n.despawn("sarah"),await t.fade(0,300),await t.say("thought","She runs for her car. She doesn’t look back."),await n.wait(700),g.root.visible=!1,n.sound.stepAt(new C(1.4,0,.5)),await n.wait(1400),n.sound.door(),await t.fade(1,150),n.despawn("nikki");const w=n.spawn("nikki",ye,{pos:[a,o,r],yaw:l,seated:!0});await n.lookAt(w.headWorld(),10),n.post.glitch=1,await t.fade(0,150),e.fates.sarah="alive",await t.say("Nikki","who was in my seat?",[{text:"Nobody.",value:"nobody"},{text:"Sarah. She’s my friend.",gain:1,value:"sarah"}])==="nobody"?(e.stats.lies++,n.addNeed(-4,"lied about Sarah")):(n.addNeed(15,"stood up for Sarah"),await t.say("Nikki","your friend.")),await t.say("Nikki","bear. do you like me? like… like me, like me?",[{text:"Yes.",value:"yes"},{text:"Yes. For a long time.",value:"long"}]),await t.say("Nikki","i know."),await t.say("Nikki","drive us home.")}else{g.root.position.set(...i.marks.window.slice(0,3)),g.root.rotation.y=i.marks.window[3],g.root.visible=!0,await n.lookAt(g.headWorld(),150),n.sound.glass(),n.post.glitch=1,t.flash(),t.eyesOverlay(!0),n.sound.scream(),await n.wait(2400),n.despawn("sarah"),n.despawn("nikki"),e.fates.sarah="dead",e.stats.fallout.push("Sarah, at the park"),await t.say("thought","I didn’t see it. I heard it."),await t.say("thought","I’m going to hear it for the rest of my life.");const w=n.spawn("nikki",ye,{pos:[a,o,r],yaw:l,seated:!0});w.driftLocked=!0,w.setDrift(1),i.scene.add(Jv(a,r)),await n.lookAt(w.headWorld(),10),t.eyesOverlay(!1),await t.fade(1,10),await t.fade(0,2200),await t.say("Nikki","she was in my seat."),await t.say("thought","There’s glass in her hair. She doesn’t notice."),await t.say("Nikki","drive us home, bear."),e.need=60}n.sound.stopAmbience(),n.phone.enable(!1),await t.fade(1,1200),await t.card("End of Night 3","",2200)}function Jv(n,t){const e=new At,i=new de({color:"#b8d4e0",emissive:"#203038"});for(let s=0;s<14;s++){const a=new lt(new Nr(.02+Math.random()*.025),i);a.position.set(n+(Math.random()-.3)*.5,.45+Math.random()*.02,t+(Math.random()-.5)*.4),a.rotation.set(Math.random()*3,Math.random()*3,0),e.add(a)}return e}const Ze=new URLSearchParams(location.search),Vs=document.getElementById("ui"),As=new Hg(Vs),Lh=new Og,Ht=zr(),Te=new Ug({canvas:document.getElementById("view"),ui:As,sound:Lh,state:Ht});As.setGame(Te);Te.phone=new Kg(Te,Vs);Te.clipper=new iv(Te);const ls=document.createElement("button");ls.className="clip-btn hidden";ls.innerHTML='<span class="rec"></span>Clip';ls.setAttribute("aria-label","Save the last few seconds as a video");ls.onclick=()=>Te.clipper.save();Vs.appendChild(ls);window.addEventListener("keydown",n=>{n.key.toLowerCase()==="c"&&!n.repeat&&Te.clipper.running&&!document.querySelector(".modal")&&Te.clipper.save()});let _r="title";tv(Te,Vs,{visible:Ze.get("debug")==="1",beat:()=>_r});window.game=Te;const Yi=[{id:"prologue",day:0,title:"Prologue",sub:"Sandy",beats:["sandy","crystals","car"]},{id:"day1",day:1,title:"Day 1",sub:"Honeymoon",beats:["wake","date","firstNight"]},{id:"day2",day:2,title:"Day 2",sub:"Duct Tape",beats:["morning","shift","home","night"]},{id:"day3",day:3,title:"Day 3",sub:"Jenga",beats:["party","hospital"]},{id:"night3",day:3,title:"Night 3",sub:"The Park",beats:["lucid","park"]},{id:"day4",day:4,title:"Day 4",sub:"Willows",beats:["willows","billion"]},{id:"finale",day:4,title:"Finale",sub:"The Last Willow",beats:["lastWillow"]}],Zv={sandy:gv,crystals:vv,car:yv,wake:xv,date:Mv,firstNight:Sv,morning:Lv,shift:Ov,home:zv,night:Gv,party:Wv,hospital:qv,lucid:$v,park:Kv,willows:Ev,billion:Tv,lastWillow:Cv,receipt:Qg},di=[...Yi.flatMap(n=>n.beats),"receipt"];function Qv(n){return new Promise(t=>{const e=st("title",Vs),i=document.createElement("h1");i.textContent="Obsession",e.appendChild(i),st("sub",e,"Graybox · the whole week"),st("warn",e,"Contains violence, self-harm, suicide themes, drug use, sexual themes and a dead cat. For players 18 and older. Headphones recommended.");const s=r=>{Lh.init(),e.remove(),Te.clipper.start(),ls.classList.toggle("hidden",!Te.clipper.running),t(r)},a=st("move-opt",e);st("move-label",a,"Movement");for(const[r,l]of[["walk","Walk around"],["rings","Tap rings"]]){const c=document.createElement("button");c.textContent=l,c.className=Te.settings.move===r?"on":"",c.onclick=()=>{Te.setMove(r);for(const h of a.querySelectorAll("button"))h.className=h===c?"on":""},a.appendChild(c)}const o=document.createElement("button");if(o.className="btn",e.appendChild(o),n){o.textContent=`I’m 18 or older. Continue: ${n.ch.title}, ${n.ch.sub}`,o.onclick=()=>s("continue");const r=document.createElement("button");r.className="btn ghost",r.textContent="New game",r.onclick=()=>s("new"),e.appendChild(r)}else o.textContent="I’m 18 or older. Start",o.onclick=()=>s("new")})}function t_(n){const t=di.indexOf(n),e=s=>t>di.indexOf(s),i=Yi.find(s=>s.beats.includes(n))||Yi[Yi.length-1];Ht.chapter=i.id,Ht.day=i.day,Ht.bear=dh(),e("crystals")&&(Ht.flags.boughtWillow=!0),e("car")&&(Ht.flags.wished=!0),e("firstNight")&&(Ht.need=18),e("morning")&&(Ht.flags.lunch=!0),e("shift")&&(Ht.flags.sandwich=!0,Ht.returnedAt=18*60+25),e("night")&&(Ht.stats.needAtBed=45,Ht.need=40),e("party")&&(Ht.flags.partyDone=!0,Ht.stats.fallout.push("Nikki, at Ian’s party"),Ht.need=62),e("park")&&(Ht.need=70),e("willows")&&(Ht.willows=3),e("billion")&&(Ht.willows=1),Ze.get("sarah")==="dead"&&(Ht.fates.sarah="dead");for(const s of(Ze.get("flags")||"").split(",").filter(Boolean))Ht.flags[s]=!0;Ze.has("need")&&(Ht.need=Number(Ze.get("need"))),Ze.has("nerve")&&(Ht.nerve=Number(Ze.get("nerve")))}function e_(){const n={bear:Ht.bear,loops:Ht.loops};Object.assign(Ht,zr(),n),Ht.flags.boughtWillow=!0,Ht.flags.wished=!0,Te.phone.reset()}function n_(n){const t=zr();return Object.assign(Ht,t,n.state),Ht.stats={...t.stats,...n.state.stats},Ht.fates={...t.fates,...n.state.fates},n.ch.beats[0]}async function i_(){const n=Ze.has("beat")?null:Fg(),t=n&&Yi.find(a=>a.id===n.chapter),e=await Qv(t?{...n,ch:t}:null);let i=di.includes(Ze.get("beat"))?Ze.get("beat"):null;i?t_(i):e==="continue"?i=n_({...n,ch:t}):(zg(),Ze.has("need")&&(Ht.need=Number(Ze.get("need"))),_r="face maker",await As.fade(1,10),Ht.bear=await Jg(Te));let s=i?di.indexOf(i):0;for(;s<di.length;){const a=di[s];_r=a;const o=Yi.find(l=>l.beats[0]===a);o&&(Ht.chapter=o.id,Ht.day=o.day,Bg(o.id,Ht),await As.fade(1,10),await As.card(o.title,o.sub,2200));const r=await Zv[a](Te);r!=null&&r.goto?(r.reset&&e_(),s=di.indexOf(r.goto)):s++}}i_();
