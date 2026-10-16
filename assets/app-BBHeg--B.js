import{t as M,a as mt,i as zf,s as oc}from"./physics-Z6F7oF-4.js";/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ka="128",Zn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,wa=1,Fh=2,kf=3,Uf=0,Qa=1,Bh=2,Di=3,qi=0,rt=1,Or=2,el=1,Gf=2,hn=0,Bi=1,Ma=2,Sa=3,Ta=4,Oh=5,Jn=100,zh=101,kh=102,Ea=103,Aa=104,Uh=200,Gh=201,Hh=202,Vh=203,tl=204,nl=205,Wh=206,qh=207,Zh=208,Xh=209,$h=210,Yh=0,Jh=1,jh=2,qs=3,Kh=4,Qh=5,eu=6,tu=7,zr=0,nu=1,iu=2,ei=0,ru=1,su=2,ou=3,au=4,lu=5,co=300,kr=301,Ur=302,Zs=303,Xs=304,Zi=306,Gr=307,yr=1e3,Lt=1001,vr=1002,ht=1003,$s=1004,Hf=1004,Ys=1005,Vf=1005,ut=1006,il=1007,Wf=1007,Xi=1008,qf=1008,$i=1009,cu=1010,hu=1011,_r=1012,uu=1013,pr=1014,cn=1015,br=1016,du=1017,fu=1018,pu=1019,Oi=1020,mu=1021,Ln=1022,Ot=1023,gu=1024,xu=1025,yu=Ot,ti=1026,ki=1027,vu=1028,_u=1029,bu=1030,wu=1031,Mu=1032,Su=1033,La=33776,Ra=33777,Ca=33778,Pa=33779,Da=35840,Ia=35841,Na=35842,Fa=35843,Tu=36196,Ba=37492,Oa=37496,Eu=37808,Au=37809,Lu=37810,Ru=37811,Cu=37812,Pu=37813,Du=37814,Iu=37815,Nu=37816,Fu=37817,Bu=37818,Ou=37819,zu=37820,ku=37821,Uu=36492,Gu=37840,Hu=37841,Vu=37842,Wu=37843,qu=37844,Zu=37845,Xu=37846,$u=37847,Yu=37848,Ju=37849,ju=37850,Ku=37851,Qu=37852,ed=37853,td=2200,nd=2201,id=2202,wr=2300,Mr=2301,Us=2302,jn=2400,Kn=2401,Sr=2402,ho=2500,rl=2501,rd=0,Zf=1,Xf=2,Rt=3e3,Hr=3001,uo=3007,fo=3002,sd=3003,sl=3004,ol=3005,al=3006,od=3200,ad=3201,si=0,ld=1,$f=0,Gs=7680,Yf=7681,Jf=7682,jf=7683,Kf=34055,Qf=34056,ep=5386,tp=512,np=513,ip=514,rp=515,sp=516,op=517,ap=518,cd=519,Ui=35044,Gi=35048,lp=35040,cp=35045,hp=35049,up=35041,dp=35046,fp=35050,pp=35042,mp="100",za="300 es";class gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const vt=[];for(let s=0;s<256;s++)vt[s]=(s<16?"0":"")+s.toString(16);let Kr=1234567;const ni=Math.PI/180,Tr=180/Math.PI;function zt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toUpperCase()}function _t(s,e,t){return Math.max(e,Math.min(t,s))}function ll(s,e){return(s%e+e)%e}function gp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function xp(s,e,t){return s!==e?(t-s)/(e-s):0}function mr(s,e,t){return(1-t)*s+t*e}function yp(s,e,t,n){return mr(s,e,1-Math.exp(-t*n))}function vp(s,e=1){return e-Math.abs(ll(s,e*2)-e)}function _p(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function wp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Mp(s,e){return s+Math.random()*(e-s)}function Sp(s){return s*(.5-Math.random())}function Tp(s){return s!==void 0&&(Kr=s%2147483647),Kr=Kr*16807%2147483647,(Kr-1)/2147483646}function Ep(s){return s*ni}function Ap(s){return s*Tr}function ka(s){return(s&s-1)===0&&s!==0}function hd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ud(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Lp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}var ac=Object.freeze({__proto__:null,DEG2RAD:ni,RAD2DEG:Tr,generateUUID:zt,clamp:_t,euclideanModulo:ll,mapLinear:gp,inverseLerp:xp,lerp:mr,damp:yp,pingpong:vp,smoothstep:_p,smootherstep:bp,randInt:wp,randFloat:Mp,randFloatSpread:Sp,seededRandom:Tp,degToRad:Ep,radToDeg:Ap,isPowerOfTwo:ka,ceilPowerOfTwo:hd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:Lp});class Z{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}Z.prototype.isVector2=!0;class dt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],y=i[3],g=i[6],m=i[1],b=i[4],_=i[7],S=i[2],v=i[5],A=i[8];return r[0]=o*x+a*m+c*S,r[3]=o*y+a*b+c*v,r[6]=o*g+a*_+c*A,r[1]=l*x+h*m+u*S,r[4]=l*y+h*b+u*v,r[7]=l*g+h*_+u*A,r[2]=d*x+f*m+p*S,r[5]=d*y+f*b+p*v,r[8]=d*g+f*_+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=u*x,e[1]=(i*l-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],o=i[3],a=i[6],c=i[1],l=i[4],h=i[7];return i[0]=t*r+n*c,i[3]=t*o+n*l,i[6]=t*a+n*h,i[1]=-n*r+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}dt.prototype.isMatrix3=!0;let ui;class oi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let Rp=0;class ft extends gn{constructor(e=ft.DEFAULT_IMAGE,t=ft.DEFAULT_MAPPING,n=Lt,i=Lt,r=ut,o=Xi,a=Ot,c=$i,l=1,h=Rt){super(),Object.defineProperty(this,"id",{value:Rp++}),this.uuid=zt(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const i=this.image;if(i.uuid===void 0&&(i.uuid=zt()),!t&&e.images[i.uuid]===void 0){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Fo(i[o].image)):r.push(Fo(i[o]))}else r=Fo(i);e.images[i.uuid]={uuid:i.uuid,url:r}}n.image=i.uuid}return t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==co)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}ft.DEFAULT_IMAGE=void 0;ft.DEFAULT_MAPPING=co;ft.prototype.isTexture=!0;function Fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oi.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class qe{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],y=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-y)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+y)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(l+1)/2,_=(f+1)/2,S=(g+1)/2,v=(h+d)/4,A=(u+x)/4,R=(p+y)/4;return b>_&&b>S?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=v/n,r=A/n):_>S?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=v/i,r=R/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=A/r,i=R/r),this.set(n,i,r,t),this}let m=Math.sqrt((y-p)*(y-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(y-p)/m,this.y=(u-x)/m,this.z=(d-h)/m,this.w=Math.acos((l+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}qe.prototype.isVector4=!0;class un extends gn{constructor(e,t,n){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t),n=n||{},this.texture=new ft(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}un.prototype.isWebGLRenderTarget=!0;class dd extends un{constructor(e,t,n){super(e,t,n),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}dd.prototype.isWebGLMultisampleRenderTarget=!0;class st{constructor(e=0,t=0,n=0,i=1){this._x=e,this._y=t,this._z=n,this._w=i}static slerp(e,t,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(e,t,i)}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==p){let y=1-a;const g=c*d+l*f+h*p+u*x,m=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){const S=Math.sqrt(b),v=Math.atan2(S,g*m);y=Math.sin(y*v)/S,a=Math.sin(a*v)/S}const _=a*m;if(c=c*y+d*_,l=l*y+f*_,h=h*y+p*_,u=u*y+x*_,y===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-a*f,e[t+2]=l*p+h*f+a*d-c*u,e[t+3]=h*p-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}st.prototype.isQuaternion=!0;class w{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,h=c*n+a*t-r*i,u=c*i+r*n-o*t,d=-r*t-o*n-a*i;return this.x=l*c+d*-r+h*-a-u*-o,this.y=h*c+d*-o+u*-r-l*-a,this.z=u*c+d*-a+l*-o-h*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}w.prototype.isVector3=!0;const Bo=new w,lc=new st;class Nt{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const h=e[c],u=e[c+1],d=e[c+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const h=e.getX(c),u=e.getY(c),d=e.getZ(c);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(r,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=er.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new w),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Oo.copy(t.boundingBox),Oo.applyMatrix4(e.matrixWorld),this.union(Oo));const n=e.children;for(let i=0,r=n.length;i<r;i++)this.expandByObject(n[i]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new w),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,er),er.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Qr.subVectors(this.max,tr),di.subVectors(e.a,tr),fi.subVectors(e.b,tr),pi.subVectors(e.c,tr),vn.subVectors(fi,di),_n.subVectors(pi,fi),Un.subVectors(di,pi);let t=[0,-vn.z,vn.y,0,-_n.z,_n.y,0,-Un.z,Un.y,vn.z,0,-vn.x,_n.z,0,-_n.x,Un.z,0,-Un.x,-vn.y,vn.x,0,-_n.y,_n.x,0,-Un.y,Un.x,0];return!zo(t,di,fi,pi,Qr)||(t=[1,0,0,0,1,0,0,0,1],!zo(t,di,fi,pi,Qr))?!1:(es.crossVectors(vn,_n),t=[es.x,es.y,es.z],zo(t,di,fi,pi,Qr))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new w),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return er.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(er).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Nt.prototype.isBox3=!0;const rn=[new w,new w,new w,new w,new w,new w,new w,new w],er=new w,Oo=new Nt,di=new w,fi=new w,pi=new w,vn=new w,_n=new w,Un=new w,tr=new w,Qr=new w,es=new w,Gn=new w;function zo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gn.fromArray(s,r);const a=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Cp=new Nt,cc=new w,ko=new w,Uo=new w;class Fn{constructor(e=new w,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new w),t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Nt),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Uo.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return ko.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(cc.copy(e.center).add(ko)),this.expandByPoint(cc.copy(e.center).sub(ko)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new w,Go=new w,ts=new w,bn=new w,Ho=new w,ns=new w,Vo=new w;class Bn{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new w),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new w),t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(t).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Go.copy(e).add(t).multiplyScalar(.5),ts.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Go);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ts),a=bn.dot(this.direction),c=-bn.dot(ts),l=bn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,p;if(h>0)if(u=o*c-a,d=o*a-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(ts).multiplyScalar(d).add(Go),f}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,r){Ho.subVectors(t,e),ns.subVectors(n,e),Vo.crossVectors(Ho,ns);let o=this.direction.dot(Vo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bn.subVectors(this.origin,e);const c=a*this.direction.dot(ns.crossVectors(bn,ns));if(c<0)return null;const l=a*this.direction.dot(Ho.cross(bn));if(l<0||c+l>o)return null;const h=-a*bn.dot(Vo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,n,i,r,o,a,c,l,h,u,d,f,p,x,y){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,f=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*c,f=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Dp)}lookAt(e,t,n){const i=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),wn.crossVectors(n,Ft),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),wn.crossVectors(n,Ft)),wn.normalize(),is.crossVectors(Ft,wn),i[0]=wn.x,i[4]=is.x,i[8]=Ft.x,i[1]=wn.y,i[5]=is.y,i[9]=Ft.y,i[2]=wn.z,i[6]=is.z,i[10]=Ft.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],y=n[10],g=n[14],m=n[3],b=n[7],_=n[11],S=n[15],v=i[0],A=i[4],R=i[8],I=i[12],O=i[1],U=i[5],z=i[9],F=i[13],N=i[2],B=i[6],D=i[10],W=i[14],ee=i[3],$=i[7],ae=i[11],re=i[15];return r[0]=o*v+a*O+c*N+l*ee,r[4]=o*A+a*U+c*B+l*$,r[8]=o*R+a*z+c*D+l*ae,r[12]=o*I+a*F+c*W+l*re,r[1]=h*v+u*O+d*N+f*ee,r[5]=h*A+u*U+d*B+f*$,r[9]=h*R+u*z+d*D+f*ae,r[13]=h*I+u*F+d*W+f*re,r[2]=p*v+x*O+y*N+g*ee,r[6]=p*A+x*U+y*B+g*$,r[10]=p*R+x*z+y*D+g*ae,r[14]=p*I+x*F+y*W+g*re,r[3]=m*v+b*O+_*N+S*ee,r[7]=m*A+b*U+_*B+S*$,r[11]=m*R+b*z+_*D+S*ae,r[15]=m*I+b*F+_*W+S*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],y=e[11],g=e[15];return p*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+y*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+g*(-i*a*h-t*c*u+t*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],y=e[14],g=e[15],m=u*y*l-x*d*l+x*c*f-a*y*f-u*c*g+a*d*g,b=p*d*l-h*y*l-p*c*f+o*y*f+h*c*g-o*d*g,_=h*x*l-p*u*l+p*a*f-o*x*f-h*a*g+o*u*g,S=p*u*c-h*x*c-p*a*d+o*x*d+h*a*y-o*u*y,v=t*m+n*b+i*_+r*S;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=m*A,e[1]=(x*d*r-u*y*r-x*i*f+n*y*f+u*i*g-n*d*g)*A,e[2]=(a*y*r-x*c*r+x*i*l-n*y*l-a*i*g+n*c*g)*A,e[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*A,e[4]=b*A,e[5]=(h*y*r-p*d*r+p*i*f-t*y*f-h*i*g+t*d*g)*A,e[6]=(p*c*r-o*y*r-p*i*l+t*y*l+o*i*g-t*c*g)*A,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*f+t*c*f)*A,e[8]=_*A,e[9]=(p*u*r-h*x*r-p*n*f+t*x*f+h*n*g-t*u*g)*A,e[10]=(o*x*r-p*a*r+p*n*l-t*x*l-o*n*g+t*a*g)*A,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*A,e[12]=S*A,e[13]=(h*x*i-p*u*i+p*n*d-t*x*d-h*n*y+t*u*y)*A,e[14]=(p*a*i-o*x*i-p*n*c+t*x*c+o*n*y-t*a*y)*A,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n){return this.set(1,t,n,0,e,1,n,0,e,t,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,p=r*u,x=o*h,y=o*u,g=a*u,m=c*l,b=c*h,_=c*u,S=n.x,v=n.y,A=n.z;return i[0]=(1-(x+g))*S,i[1]=(f+_)*S,i[2]=(p-b)*S,i[3]=0,i[4]=(f-_)*v,i[5]=(1-(d+g))*v,i[6]=(y+m)*v,i[7]=0,i[8]=(p+b)*A,i[9]=(y-m)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),a=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const l=1/r,h=1/o,u=1/a;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=u,Gt.elements[9]*=u,Gt.elements[10]*=u,t.setFromRotationMatrix(Gt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,c=2*r/(t-e),l=2*r/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,o){const a=this.elements,c=1/(t-e),l=1/(n-i),h=1/(o-r),u=(t+e)*c,d=(n+i)*l,f=(o+r)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}xe.prototype.isMatrix4=!0;const mi=new w,Gt=new xe,Pp=new w(0,0,0),Dp=new w(1,1,1),wn=new w,is=new w,Ft=new w,hc=new xe,uc=new st;class ai{constructor(e=0,t=0,n=0,i=ai.DefaultOrder){this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._order=i||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,n){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hc,t,n)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return uc.setFromEuler(this),this.setFromQuaternion(uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new w(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}ai.prototype.isEuler=!0;ai.DefaultOrder="XYZ";ai.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class cl{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let Ip=0;const dc=new w,gi=new st,on=new xe,rs=new w,nr=new w,Np=new w,Fp=new st,fc=new w(1,0,0),pc=new w(0,1,0),mc=new w(0,0,1),Bp={type:"added"},gc={type:"removed"};class Fe extends gn{constructor(){super(),Object.defineProperty(this,"id",{value:Ip++}),this.uuid=zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DefaultUp.clone();const e=new w,t=new ai,n=new st,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new dt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(fc,e)}rotateY(e){return this.rotateOnAxis(pc,e)}rotateZ(e){return this.rotateOnAxis(mc,e)}translateOnAxis(e,t){return dc.copy(e).applyQuaternion(this.quaternion),this.position.add(dc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fc,e)}translateY(e){return this.translateOnAxis(pc,e)}translateZ(e){return this.translateOnAxis(mc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(nr,rs,this.up):on.lookAt(rs,nr,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(on),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gc)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(gc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new st),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Np),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new w),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Fp,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Fe.DefaultUp=new w(0,1,0);Fe.DefaultMatrixAutoUpdate=!0;Fe.prototype.isObject3D=!0;const Wo=new w,Op=new w,zp=new dt;class qt{constructor(e=new w(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Wo.subVectors(n,t).cross(Op.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new w),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new w);const n=e.delta(Wo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new w),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zp.getNormalMatrix(e),i=this.coplanarPoint(Wo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}qt.prototype.isPlane=!0;const Ht=new w,an=new w,qo=new w,ln=new w,xi=new w,yi=new w,xc=new w,Zo=new w,Xo=new w,$o=new w;class nt{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),i=new w),i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ht.subVectors(i,t),an.subVectors(n,t),qo.subVectors(e,t);const o=Ht.dot(Ht),a=Ht.dot(an),c=Ht.dot(qo),l=an.dot(an),h=an.dot(qo),u=o*l-a*a;if(r===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),r=new w),u===0)return r.set(-2,-1,-1);const d=1/u,f=(l*c-a*h)*d,p=(o*h-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ln),ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getUV(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ln),c.set(0,0),c.addScaledVector(r,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),an.subVectors(e,t),Ht.cross(an).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ht.cross(an).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new w),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new qt),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return nt.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return nt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new w);const n=this.a,i=this.b,r=this.c;let o,a;xi.subVectors(i,n),yi.subVectors(r,n),Zo.subVectors(e,n);const c=xi.dot(Zo),l=yi.dot(Zo);if(c<=0&&l<=0)return t.copy(n);Xo.subVectors(e,i);const h=xi.dot(Xo),u=yi.dot(Xo);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(xi,o);$o.subVectors(e,r);const f=xi.dot($o),p=yi.dot($o);if(p>=0&&f<=p)return t.copy(r);const x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(yi,a);const y=h*p-f*u;if(y<=0&&u-h>=0&&f-p>=0)return xc.subVectors(r,i),a=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(xc,a);const g=1/(y+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(xi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kp=0;function at(){Object.defineProperty(this,"id",{value:kp++}),this.uuid=zt(),this.name="",this.type="Material",this.fog=!0,this.blending=Bi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}at.prototype=Object.assign(Object.create(gn.prototype),{constructor:at,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===el;continue}const n=this[e];if(n===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}n&&n.isColor?n.set(t):n&&n.isVector3&&t&&t.isVector3?n.copy(t):this[e]=t}},toJSON:function(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(t.blending=this.blending),this.side!==qi&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function n(i){const r=[];for(const o in i){const a=i[o];delete a.metadata,r.push(a)}return r}if(e){const i=n(s.textures),r=n(s.images);i.length>0&&(t.textures=i),r.length>0&&(t.images=r)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(s){this.name=s.name,this.fog=s.fog,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const n=e.length;t=new Array(n);for(let i=0;i!==n;++i)t[i]=e[i].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(at.prototype,"needsUpdate",{set:function(s){s===!0&&this.version++}});const fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function Yo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Jo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}class fe{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=ll(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const i=n<=.5?n*(1+t):n+t-n*t,r=2*n-i;this.r=Yo(r,i,e+1/3),this.g=Yo(r,i,e),this.b=Yo(r,i,e-1/3)}return this}setStyle(e){function t(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let i;const r=n[1],o=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(i[1],10))/255,this.g=Math.min(255,parseInt(i[2],10))/255,this.b=Math.min(255,parseInt(i[3],10))/255,t(i[4]),this;if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(i[1],10))/100,this.g=Math.min(100,parseInt(i[2],10))/100,this.b=Math.min(100,parseInt(i[3],10))/100,t(i[4]),this;break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(i[1])/360,c=parseInt(i[2],10)/100,l=parseInt(i[3],10)/100;return t(i[4]),this.setHSL(a,c,l)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=n[1],r=i.length;if(r===3)return this.r=parseInt(i.charAt(0)+i.charAt(0),16)/255,this.g=parseInt(i.charAt(1)+i.charAt(1),16)/255,this.b=parseInt(i.charAt(2)+i.charAt(2),16)/255,this;if(r===6)return this.r=parseInt(i.charAt(0)+i.charAt(1),16)/255,this.g=parseInt(i.charAt(2)+i.charAt(3),16)/255,this.b=parseInt(i.charAt(4)+i.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=fd[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const n=t>0?1/t:1;return this.r=Math.pow(e.r,n),this.g=Math.pow(e.g,n),this.b=Math.pow(e.b,n),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=Jo(e.r),this.g=Jo(e.g),this.b=Jo(e.b),this}copyLinearToSRGB(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,n=this.g,i=this.b,r=Math.max(t,n,i),o=Math.min(t,n,i);let a,c;const l=(o+r)/2;if(o===r)a=0,c=0;else{const h=r-o;switch(c=l<=.5?h/(r+o):h/(2-r-o),r){case t:a=(n-i)/h+(n<i?6:0);break;case n:a=(i-t)/h+2;break;case i:a=(t-n)/h+4;break}a/=6}return e.h=a,e.s=c,e.l=l,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(ss);const n=mr(Vt.h,ss.h,t),i=mr(Vt.s,ss.s,t),r=mr(Vt.l,ss.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}fe.NAMES=fd;fe.prototype.isColor=!0;fe.prototype.r=1;fe.prototype.g=1;fe.prototype.b=1;class xn extends at{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}xn.prototype.isMeshBasicMaterial=!0;const Ye=new w,os=new Z;class Ne{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ui,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new fe),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Z),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new w),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,r=e.length;i<r;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new qe),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ye.fromBufferAttribute(this,t),Ye.applyMatrix3(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyMatrix4(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.applyNormalMatrix(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ye.x=this.getX(t),Ye.y=this.getY(t),Ye.z=this.getZ(t),Ye.transformDirection(e),this.setXYZ(t,Ye.x,Ye.y,Ye.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ui&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ne.prototype.isBufferAttribute=!0;class pd extends Ne{constructor(e,t,n){super(new Int8Array(e),t,n)}}class md extends Ne{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class gd extends Ne{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class xd extends Ne{constructor(e,t,n){super(new Int16Array(e),t,n)}}class po extends Ne{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yd extends Ne{constructor(e,t,n){super(new Int32Array(e),t,n)}}class mo extends Ne{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vd extends Ne{constructor(e,t,n){super(new Uint16Array(e),t,n)}}vd.prototype.isFloat16BufferAttribute=!0;class pe extends Ne{constructor(e,t,n){super(new Float32Array(e),t,n)}}class _d extends Ne{constructor(e,t,n){super(new Float64Array(e),t,n)}}function bd(s){if(s.length===0)return-1/0;let e=s[0];for(let t=1,n=s.length;t<n;++t)s[t]>e&&(e=s[t]);return e}const Up={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function dr(s,e){return new Up[s](e)}let Gp=0;const Jt=new xe,Ko=new Fe,vi=new w,Bt=new Nt,ir=new Nt,pt=new w;class _e extends gn{constructor(){super(),Object.defineProperty(this,"id",{value:Gp++}),this.uuid=zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)>65535?mo:po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new pe(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(Bt.min,ir.min),Bt.expandByPoint(pt),pt.addVectors(Bt.max,ir.max),Bt.expandByPoint(pt)):(Bt.expandByPoint(ir.min),Bt.expandByPoint(ir.max))}Bt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pt.fromBufferAttribute(a,l),c&&(vi.fromBufferAttribute(e,l),pt.add(vi)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ne(new Float32Array(4*a),4));const c=t.tangent.array,l=[],h=[];for(let O=0;O<a;O++)l[O]=new w,h[O]=new w;const u=new w,d=new w,f=new w,p=new Z,x=new Z,y=new Z,g=new w,m=new w;function b(O,U,z){u.fromArray(i,O*3),d.fromArray(i,U*3),f.fromArray(i,z*3),p.fromArray(o,O*2),x.fromArray(o,U*2),y.fromArray(o,z*2),d.sub(u),f.sub(u),x.sub(p),y.sub(p);const F=1/(x.x*y.y-y.x*x.y);isFinite(F)&&(g.copy(d).multiplyScalar(y.y).addScaledVector(f,-x.y).multiplyScalar(F),m.copy(f).multiplyScalar(x.x).addScaledVector(d,-y.x).multiplyScalar(F),l[O].add(g),l[U].add(g),l[z].add(g),h[O].add(m),h[U].add(m),h[z].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let O=0,U=_.length;O<U;++O){const z=_[O],F=z.start,N=z.count;for(let B=F,D=F+N;B<D;B+=3)b(n[B+0],n[B+1],n[B+2])}const S=new w,v=new w,A=new w,R=new w;function I(O){A.fromArray(r,O*3),R.copy(A);const U=l[O];S.copy(U),S.sub(A.multiplyScalar(A.dot(U))).normalize(),v.crossVectors(R,U);const F=v.dot(h[O])<0?-1:1;c[O*4]=S.x,c[O*4+1]=S.y,c[O*4+2]=S.z,c[O*4+3]=F}for(let O=0,U=_.length;O<U;++O){const z=_[O],F=z.start,N=z.count;for(let B=F,D=F+N;B<D;B+=3)I(n[B+0]),I(n[B+1]),I(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),x=e.getX(d+1),y=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,y),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(y,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,h=Math.min(c.length,o.length-l);for(let u=0,d=l;u<h;u++,d++)o[d]=c[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let x=0,y=c.length;x<y;x++){f=c[x]*h;for(let g=0;g<h;g++)d[p++]=l[f++]}return new Ne(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _e,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new _e().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}_e.prototype.isBufferGeometry=!0;const yc=new xe,_i=new Bn,Qo=new Fn,Mn=new w,Sn=new w,Tn=new w,ea=new w,ta=new w,na=new w,as=new w,ls=new w,cs=new w,hs=new Z,us=new Z,ds=new Z,ia=new w,fs=new w;class ot extends Fe{constructor(e=new _e,t=new xn){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(r),e.ray.intersectsSphere(Qo)===!1)||(yc.copy(r).invert(),_i.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,p=n.drawRange;if(a!==null)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const g=f[x],m=i[g.materialIndex],b=Math.max(g.start,p.start),_=Math.min(g.start+g.count,p.start+p.count);for(let S=b,v=_;S<v;S+=3){const A=a.getX(S),R=a.getX(S+1),I=a.getX(S+2);o=ps(this,m,e,_i,c,l,h,u,d,A,R,I),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const b=a.getX(g),_=a.getX(g+1),S=a.getX(g+2);o=ps(this,i,e,_i,c,l,h,u,d,b,_,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let x=0,y=f.length;x<y;x++){const g=f[x],m=i[g.materialIndex],b=Math.max(g.start,p.start),_=Math.min(g.start+g.count,p.start+p.count);for(let S=b,v=_;S<v;S+=3){const A=S,R=S+1,I=S+2;o=ps(this,m,e,_i,c,l,h,u,d,A,R,I),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const x=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let g=x,m=y;g<m;g+=3){const b=g,_=g+1,S=g+2;o=ps(this,i,e,_i,c,l,h,u,d,b,_,S),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ot.prototype.isMesh=!0;function Hp(s,e,t,n,i,r,o,a){let c;if(e.side===rt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side!==Or,a),c===null)return null;fs.copy(a),fs.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:s}}function ps(s,e,t,n,i,r,o,a,c,l,h,u){Mn.fromBufferAttribute(i,l),Sn.fromBufferAttribute(i,h),Tn.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(e.morphTargets&&r&&d){as.set(0,0,0),ls.set(0,0,0),cs.set(0,0,0);for(let p=0,x=r.length;p<x;p++){const y=d[p],g=r[p];y!==0&&(ea.fromBufferAttribute(g,l),ta.fromBufferAttribute(g,h),na.fromBufferAttribute(g,u),o?(as.addScaledVector(ea,y),ls.addScaledVector(ta,y),cs.addScaledVector(na,y)):(as.addScaledVector(ea.sub(Mn),y),ls.addScaledVector(ta.sub(Sn),y),cs.addScaledVector(na.sub(Tn),y)))}Mn.add(as),Sn.add(ls),Tn.add(cs)}s.isSkinnedMesh&&e.skinning&&(s.boneTransform(l,Mn),s.boneTransform(h,Sn),s.boneTransform(u,Tn));const f=Hp(s,e,t,n,Mn,Sn,Tn,ia);if(f){a&&(hs.fromBufferAttribute(a,l),us.fromBufferAttribute(a,h),ds.fromBufferAttribute(a,u),f.uv=nt.getUV(ia,Mn,Sn,Tn,hs,us,ds,new Z)),c&&(hs.fromBufferAttribute(c,l),us.fromBufferAttribute(c,h),ds.fromBufferAttribute(c,u),f.uv2=nt.getUV(ia,Mn,Sn,Tn,hs,us,ds,new Z));const p={a:l,b:h,c:u,normal:new w,materialIndex:0};nt.getNormal(Mn,Sn,Tn,p.normal),f.face=p}return f}class ii extends _e{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function p(x,y,g,m,b,_,S,v,A,R,I){const O=_/A,U=S/R,z=_/2,F=S/2,N=v/2,B=A+1,D=R+1;let W=0,ee=0;const $=new w;for(let ae=0;ae<D;ae++){const re=ae*U-F;for(let ve=0;ve<B;ve++){const Me=ve*O-z;$[x]=Me*m,$[y]=re*b,$[g]=N,l.push($.x,$.y,$.z),$[x]=0,$[y]=0,$[g]=v>0?1:-1,h.push($.x,$.y,$.z),u.push(ve/A),u.push(1-ae/R),W+=1}}for(let ae=0;ae<R;ae++)for(let re=0;re<A;re++){const ve=d+re+B*ae,Me=d+re+B*(ae+1),H=d+(re+1)+B*(ae+1),ke=d+(re+1)+B*ae;c.push(ve,Me,ke),c.push(Me,H,ke),ee+=6}a.addGroup(f,ee,I),f+=ee,d+=W}}}function Hi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function bt(s){const e={};for(let t=0;t<s.length;t++){const n=Hi(s[t]);for(const i in n)e[i]=n[i]}return e}const wd={clone:Hi,merge:bt};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends at{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Vp,this.fragmentShader=Wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}dn.prototype.isShaderMaterial=!0;class Vr extends Fe{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new w),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Vr.prototype.isCamera=!0;class gt extends Vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ni*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ni*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ni*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}gt.prototype.isPerspectiveCamera=!0;const bi=90,wi=1;class go extends Fe{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new gt(bi,wi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new w(1,0,0)),this.add(i);const r=new gt(bi,wi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new w(-1,0,0)),this.add(r);const o=new gt(bi,wi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new w(0,1,0)),this.add(o);const a=new gt(bi,wi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new w(0,-1,0)),this.add(a);const c=new gt(bi,wi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new w(0,0,1)),this.add(c);const l=new gt(bi,wi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new w(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.xr.enabled=h}}class Yi extends ft{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:kr,a=a!==void 0?a:Ln,super(e,t,n,i,r,o,a,c,l,h),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Yi.prototype.isCubeTexture=!0;class xo extends un{constructor(e,t,n){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=n),super(e,e,t),t=t||{},this.texture=new Yi(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Ot,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ii(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rt,blending:hn});r.uniforms.tEquirect.value=t;const o=new ot(i,r),a=t.minFilter;return t.minFilter===Xi&&(t.minFilter=ut),new go(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}xo.prototype.isWebGLCubeRenderTarget=!0;class Vi extends ft{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={data:e||null,width:t||1,height:n||1},this.magFilter=l!==void 0?l:ht,this.minFilter=h!==void 0?h:ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Vi.prototype.isDataTexture=!0;const Mi=new Fn,ms=new w;class Wr{constructor(e=new qt,t=new qt,n=new qt,i=new qt,r=new qt,o=new qt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7],d=n[8],f=n[9],p=n[10],x=n[11],y=n[12],g=n[13],m=n[14],b=n[15];return t[0].setComponents(a-i,u-c,x-d,b-y).normalize(),t[1].setComponents(a+i,u+c,x+d,b+y).normalize(),t[2].setComponents(a+r,u+l,x+f,b+g).normalize(),t[3].setComponents(a-r,u-l,x-f,b-g).normalize(),t[4].setComponents(a-o,u-h,x-p,b-m).normalize(),t[5].setComponents(a+o,u+h,x+p,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ms.x=i.normal.x>0?e.max.x:e.min.x,ms.y=i.normal.y>0?e.max.y:e.min.y,ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Md(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qp(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),l.onUploadCallback();let p=5126;return u instanceof Float32Array?p=5126:u instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):u instanceof Uint16Array?l.isFloat16BufferAttribute?t?p=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):p=5123:u instanceof Int16Array?p=5122:u instanceof Uint32Array?p=5125:u instanceof Int32Array?p=5124:u instanceof Int8Array?p=5120:u instanceof Uint8Array&&(p=5121),{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function r(l,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,l),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u===void 0?n.set(l,i(l,h)):u.version<l.version&&(r(u.buffer,l,h),u.version=l.version)}return{get:o,remove:a,update:c}}class Er extends _e{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,d=t/c,f=[],p=[],x=[],y=[];for(let g=0;g<h;g++){const m=g*d-o;for(let b=0;b<l;b++){const _=b*u-r;p.push(_,-m,0),x.push(0,0,1),y.push(b/a),y.push(1-g/c)}}for(let g=0;g<c;g++)for(let m=0;m<a;m++){const b=m+l*g,_=m+l*(g+1),S=m+1+l*(g+1),v=m+1+l*g;f.push(b,_,v),f.push(_,S,v)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(y,2))}}var Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Xp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,Yp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jp="vec3 transformed = vec3( position );",Kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qp=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
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
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
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
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,em=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,um=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,ym=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Lm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
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
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
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
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
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
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,Dm=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,zm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,km=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zm=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Qm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ng=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,rg=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gg=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,Ag=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,Lg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Cg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Pg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Dg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ig=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ug=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Gg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kg=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Qg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,t0=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n0=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
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
}`,i0=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r0=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
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
}`,s0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,c0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,h0=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,d0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`;const Ie={alphamap_fragment:Zp,alphamap_pars_fragment:Xp,alphatest_fragment:$p,aomap_fragment:Yp,aomap_pars_fragment:Jp,begin_vertex:jp,beginnormal_vertex:Kp,bsdfs:Qp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:rm,color_fragment:sm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:um,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,encodings_fragment:gm,encodings_pars_fragment:xm,envmap_fragment:ym,envmap_common_pars_fragment:vm,envmap_pars_fragment:_m,envmap_pars_vertex:bm,envmap_physical_pars_fragment:Dm,envmap_vertex:wm,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:Tm,fog_pars_fragment:Em,gradientmap_pars_fragment:Am,lightmap_fragment:Lm,lightmap_pars_fragment:Rm,lights_lambert_vertex:Cm,lights_pars_begin:Pm,lights_toon_fragment:Im,lights_toon_pars_fragment:Nm,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:Om,lights_physical_pars_fragment:zm,lights_fragment_begin:km,lights_fragment_maps:Um,lights_fragment_end:Gm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Vm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:qm,map_fragment:Zm,map_pars_fragment:Xm,map_particle_fragment:$m,map_particle_pars_fragment:Ym,metalnessmap_fragment:Jm,metalnessmap_pars_fragment:jm,morphnormal_vertex:Km,morphtarget_pars_vertex:Qm,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normalmap_pars_fragment:ig,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:sg,clearcoat_pars_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:xg,skinbase_vertex:yg,skinning_pars_vertex:vg,skinning_vertex:_g,skinnormal_vertex:bg,specularmap_fragment:wg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:Tg,transmissionmap_fragment:Eg,transmissionmap_pars_fragment:Ag,uv_pars_fragment:Lg,uv_pars_vertex:Rg,uv_vertex:Cg,uv2_pars_fragment:Pg,uv2_pars_vertex:Dg,uv2_vertex:Ig,worldpos_vertex:Ng,background_frag:Fg,background_vert:Bg,cube_frag:Og,cube_vert:zg,depth_frag:kg,depth_vert:Ug,distanceRGBA_frag:Gg,distanceRGBA_vert:Hg,equirect_frag:Vg,equirect_vert:Wg,linedashed_frag:qg,linedashed_vert:Zg,meshbasic_frag:Xg,meshbasic_vert:$g,meshlambert_frag:Yg,meshlambert_vert:Jg,meshmatcap_frag:jg,meshmatcap_vert:Kg,meshtoon_frag:Qg,meshtoon_vert:e0,meshphong_frag:t0,meshphong_vert:n0,meshphysical_frag:i0,meshphysical_vert:r0,normal_frag:s0,normal_vert:o0,points_frag:a0,points_vert:l0,shadow_frag:c0,shadow_vert:h0,sprite_frag:u0,sprite_vert:d0},le={common:{diffuse:{value:new fe(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new dt},uv2Transform:{value:new dt},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}},sprite:{diffuse:{value:new fe(15658734)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new dt}}},Zt={basic:{uniforms:bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:bt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:bt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:bt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:bt([le.points,le.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:bt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:bt([le.common,le.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:bt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.normal_vert,fragmentShader:Ie.normal_frag},sprite:{uniforms:bt([le.sprite,le.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},cube:{uniforms:bt([le.envmap,{opacity:{value:1}}]),vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:bt([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:bt([le.lights,le.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Zt.physical={uniforms:bt([Zt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Z(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new fe(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};function f0(s,e,t,n,i){const r=new fe(0);let o=0,a,c,l=null,h=0,u=null;function d(p,x,y,g){let m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=e.get(m));const b=s.xr,_=b.getSession&&b.getSession();_&&_.environmentBlendMode==="additive"&&(m=null),m===null?f(r,o):m&&m.isColor&&(f(m,1),g=!0),(s.autoClear||g)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Zi)?(c===void 0&&(c=new ot(new ii(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Hi(Zt.cube.uniforms),vertexShader:Zt.cube.vertexShader,fragmentShader:Zt.cube.fragmentShader,side:rt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m._needsFlipEnvMap?-1:1,(l!==m||h!==m.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,l=m,h=m.version,u=s.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(a===void 0&&(a=new ot(new Er(2,2),new dn({name:"BackgroundMaterial",uniforms:Hi(Zt.background.uniforms),vertexShader:Zt.background.vertexShader,fragmentShader:Zt.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),a.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||h!==m.version||u!==s.toneMapping)&&(a.material.needsUpdate=!0,l=m,h=m.version,u=s.toneMapping),p.unshift(a,a.geometry,a.material,0,0,null))}function f(p,x){t.buffers.color.setClear(p.r,p.g,p.b,x,i)}return{getClearColor:function(){return r},setClearColor:function(p,x=1){r.set(p),o=x,f(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,f(r,o)},render:d}}function p0(s,e,t,n){const i=s.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=x(null);let l=c;function h(F,N,B,D,W){let ee=!1;if(o){const $=p(D,B,N);l!==$&&(l=$,d(l.object)),ee=y(D,W),ee&&g(D,W)}else{const $=N.wireframe===!0;(l.geometry!==D.id||l.program!==B.id||l.wireframe!==$)&&(l.geometry=D.id,l.program=B.id,l.wireframe=$,ee=!0)}F.isInstancedMesh===!0&&(ee=!0),W!==null&&t.update(W,34963),ee&&(A(F,N,B,D),W!==null&&s.bindBuffer(34963,t.get(W).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(F){return n.isWebGL2?s.bindVertexArray(F):r.bindVertexArrayOES(F)}function f(F){return n.isWebGL2?s.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function p(F,N,B){const D=B.wireframe===!0;let W=a[F.id];W===void 0&&(W={},a[F.id]=W);let ee=W[N.id];ee===void 0&&(ee={},W[N.id]=ee);let $=ee[D];return $===void 0&&($=x(u()),ee[D]=$),$}function x(F){const N=[],B=[],D=[];for(let W=0;W<i;W++)N[W]=0,B[W]=0,D[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:D,object:F,attributes:{},index:null}}function y(F,N){const B=l.attributes,D=F.attributes;let W=0;for(const ee in D){const $=B[ee],ae=D[ee];if($===void 0||$.attribute!==ae||$.data!==ae.data)return!0;W++}return l.attributesNum!==W||l.index!==N}function g(F,N){const B={},D=F.attributes;let W=0;for(const ee in D){const $=D[ee],ae={};ae.attribute=$,$.data&&(ae.data=$.data),B[ee]=ae,W++}l.attributes=B,l.attributesNum=W,l.index=N}function m(){const F=l.newAttributes;for(let N=0,B=F.length;N<B;N++)F[N]=0}function b(F){_(F,0)}function _(F,N){const B=l.newAttributes,D=l.enabledAttributes,W=l.attributeDivisors;B[F]=1,D[F]===0&&(s.enableVertexAttribArray(F),D[F]=1),W[F]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,N),W[F]=N)}function S(){const F=l.newAttributes,N=l.enabledAttributes;for(let B=0,D=N.length;B<D;B++)N[B]!==F[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function v(F,N,B,D,W,ee){n.isWebGL2===!0&&(B===5124||B===5125)?s.vertexAttribIPointer(F,N,B,W,ee):s.vertexAttribPointer(F,N,B,D,W,ee)}function A(F,N,B,D){if(n.isWebGL2===!1&&(F.isInstancedMesh||D.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const W=D.attributes,ee=B.getAttributes(),$=N.defaultAttributeValues;for(const ae in ee){const re=ee[ae];if(re>=0){const ve=W[ae];if(ve!==void 0){const Me=ve.normalized,H=ve.itemSize,ke=t.get(ve);if(ke===void 0)continue;const Be=ke.buffer,Se=ke.type,be=ke.bytesPerElement;if(ve.isInterleavedBufferAttribute){const Oe=ve.data,Pe=Oe.stride,De=ve.offset;Oe&&Oe.isInstancedInterleavedBuffer?(_(re,Oe.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=Oe.meshPerAttribute*Oe.count)):b(re),s.bindBuffer(34962,Be),v(re,H,Se,Me,Pe*be,De*be)}else ve.isInstancedBufferAttribute?(_(re,ve.meshPerAttribute),D._maxInstanceCount===void 0&&(D._maxInstanceCount=ve.meshPerAttribute*ve.count)):b(re),s.bindBuffer(34962,Be),v(re,H,Se,Me,0,0)}else if(ae==="instanceMatrix"){const Me=t.get(F.instanceMatrix);if(Me===void 0)continue;const H=Me.buffer,ke=Me.type;_(re+0,1),_(re+1,1),_(re+2,1),_(re+3,1),s.bindBuffer(34962,H),s.vertexAttribPointer(re+0,4,ke,!1,64,0),s.vertexAttribPointer(re+1,4,ke,!1,64,16),s.vertexAttribPointer(re+2,4,ke,!1,64,32),s.vertexAttribPointer(re+3,4,ke,!1,64,48)}else if(ae==="instanceColor"){const Me=t.get(F.instanceColor);if(Me===void 0)continue;const H=Me.buffer,ke=Me.type;_(re,1),s.bindBuffer(34962,H),s.vertexAttribPointer(re,3,ke,!1,12,0)}else if($!==void 0){const Me=$[ae];if(Me!==void 0)switch(Me.length){case 2:s.vertexAttrib2fv(re,Me);break;case 3:s.vertexAttrib3fv(re,Me);break;case 4:s.vertexAttrib4fv(re,Me);break;default:s.vertexAttrib1fv(re,Me)}}}}S()}function R(){U();for(const F in a){const N=a[F];for(const B in N){const D=N[B];for(const W in D)f(D[W].object),delete D[W];delete N[B]}delete a[F]}}function I(F){if(a[F.id]===void 0)return;const N=a[F.id];for(const B in N){const D=N[B];for(const W in D)f(D[W].object),delete D[W];delete N[B]}delete a[F.id]}function O(F){for(const N in a){const B=a[N];if(B[F.id]===void 0)continue;const D=B[F.id];for(const W in D)f(D[W].object),delete D[W];delete B[F.id]}}function U(){z(),l!==c&&(l=c,d(l.object))}function z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:U,resetDefaultState:z,dispose:R,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:b,disableUnusedAttributes:S}}function m0(s,e,t,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,h){s.drawArrays(r,l,h),t.update(h,r,1)}function c(l,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,l,h,u),t.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function g0(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(v){if(v==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";v="mediump"}return v==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=t.logarithmicDepthBuffer===!0,h=s.getParameter(34930),u=s.getParameter(35660),d=s.getParameter(3379),f=s.getParameter(34076),p=s.getParameter(34921),x=s.getParameter(36347),y=s.getParameter(36348),g=s.getParameter(36349),m=u>0,b=o||e.has("OES_texture_float"),_=m&&b,S=o?s.getParameter(36183):0;return{isWebGL2:o,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:b,floatVertexTextures:_,maxSamples:S}}function x0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new qt,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const p=u.length!==0||d||n!==0||i;return i=d,t=h(u,f,0),n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,l()},this.setState=function(u,d,f){const p=u.clippingPlanes,x=u.clipIntersection,y=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!y)r?h(null):l();else{const m=r?0:n,b=m*4;let _=g.clippingState||null;c.value=_,_=h(p,d,b,f);for(let S=0;S!==b;++S)_[S]=t[S];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){const x=u!==null?u.length:0;let y=null;if(x!==0){if(y=c.value,p!==!0||y===null){const g=f+x*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(y===null||y.length<g)&&(y=new Float32Array(g));for(let b=0,_=f;b!==x;++b,_+=4)o.copy(u[b]).applyMatrix4(m,a),o.normal.toArray(y,_),y[_+3]=o.constant}c.value=y,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function y0(s){let e=new WeakMap;function t(o,a){return a===Zs?o.mapping=kr:a===Xs&&(o.mapping=Ur),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zs||a===Xs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=s.getRenderTarget(),h=new xo(c.height/2);return h.fromEquirectangularTexture(s,o),e.set(o,h),s.setRenderTarget(l),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function v0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],34962);const f=u.morphAttributes;for(const p in f){const x=f[p];for(let y=0,g=x.length;y<g;y++)e.update(x[y],34962)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let x=0;if(f!==null){const m=f.array;x=f.version;for(let b=0,_=m.length;b<_;b+=3){const S=m[b+0],v=m[b+1],A=m[b+2];d.push(S,v,v,A,A,S)}}else{const m=p.array;x=p.version;for(let b=0,_=m.length/3-1;b<_;b+=3){const S=b+0,v=b+1,A=b+2;d.push(S,v,v,A,A,S)}}const y=new(bd(d)>65535?mo:po)(d,1);y.version=x;const g=r.get(u);g&&e.remove(g),r.set(u,y)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function b0(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*c),t.update(f,r,1)}function u(d,f,p){if(p===0)return;let x,y;if(i)x=s,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](r,f,a,d*c,p),t.update(f,r,p)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u}function w0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function M0(s,e){return s[0]-e[0]}function S0(s,e){return Math.abs(e[1])-Math.abs(s[1])}function T0(s){const e={},t=new Float32Array(8),n=[];for(let r=0;r<8;r++)n[r]=[r,0];function i(r,o,a,c){const l=r.morphTargetInfluences,h=l===void 0?0:l.length;let u=e[o.id];if(u===void 0){u=[];for(let y=0;y<h;y++)u[y]=[y,0];e[o.id]=u}for(let y=0;y<h;y++){const g=u[y];g[0]=y,g[1]=l[y]}u.sort(S0);for(let y=0;y<8;y++)y<h&&u[y][1]?(n[y][0]=u[y][0],n[y][1]=u[y][1]):(n[y][0]=Number.MAX_SAFE_INTEGER,n[y][1]=0);n.sort(M0);const d=a.morphTargets&&o.morphAttributes.position,f=a.morphNormals&&o.morphAttributes.normal;let p=0;for(let y=0;y<8;y++){const g=n[y],m=g[0],b=g[1];m!==Number.MAX_SAFE_INTEGER&&b?(d&&o.getAttribute("morphTarget"+y)!==d[m]&&o.setAttribute("morphTarget"+y,d[m]),f&&o.getAttribute("morphNormal"+y)!==f[m]&&o.setAttribute("morphNormal"+y,f[m]),t[y]=b,p+=b):(d&&o.hasAttribute("morphTarget"+y)===!0&&o.deleteAttribute("morphTarget"+y),f&&o.hasAttribute("morphNormal"+y)===!0&&o.deleteAttribute("morphNormal"+y),t[y]=0)}const x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",t)}return{update:i}}function E0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);return i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class hl extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}hl.prototype.isDataTexture2DArray=!0;class ul extends ft{constructor(e=null,t=1,n=1,i=1){super(null),this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}ul.prototype.isDataTexture3D=!0;const Sd=new ft,A0=new hl,L0=new ul,Td=new Yi,vc=[],_c=[],bc=new Float32Array(16),wc=new Float32Array(9),Mc=new Float32Array(4);function Ji(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=vc[i];if(r===void 0&&(r=new Float32Array(i),vc[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function St(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ed(s,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function R0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function C0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),St(t,e)}}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),St(t,e)}}function D0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),St(t,e)}}function I0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Ct(t,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),St(t,n)}}function N0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Ct(t,n))return;wc.set(n),s.uniformMatrix3fv(this.addr,!1,wc),St(t,n)}}function F0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Ct(t,n))return;bc.set(n),s.uniformMatrix4fv(this.addr,!1,bc),St(t,n)}}function B0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function O0(s,e){const t=this.cache;Ct(t,e)||(s.uniform2iv(this.addr,e),St(t,e))}function z0(s,e){const t=this.cache;Ct(t,e)||(s.uniform3iv(this.addr,e),St(t,e))}function k0(s,e){const t=this.cache;Ct(t,e)||(s.uniform4iv(this.addr,e),St(t,e))}function U0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function G0(s,e){const t=this.cache;Ct(t,e)||(s.uniform2uiv(this.addr,e),St(t,e))}function H0(s,e){const t=this.cache;Ct(t,e)||(s.uniform3uiv(this.addr,e),St(t,e))}function V0(s,e){const t=this.cache;Ct(t,e)||(s.uniform4uiv(this.addr,e),St(t,e))}function W0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTexture2D(e||Sd,i)}function q0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||L0,i)}function Z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.safeSetTextureCube(e||Td,i)}function X0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||A0,i)}function $0(s){switch(s){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return D0;case 35674:return I0;case 35675:return N0;case 35676:return F0;case 5124:case 35670:return B0;case 35667:case 35671:return O0;case 35668:case 35672:return z0;case 35669:case 35673:return k0;case 5125:return U0;case 36294:return G0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return X0}}function Y0(s,e){s.uniform1fv(this.addr,e)}function J0(s,e){const t=Ji(e,this.size,2);s.uniform2fv(this.addr,t)}function j0(s,e){const t=Ji(e,this.size,3);s.uniform3fv(this.addr,t)}function K0(s,e){const t=Ji(e,this.size,4);s.uniform4fv(this.addr,t)}function Q0(s,e){const t=Ji(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ex(s,e){const t=Ji(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tx(s,e){const t=Ji(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nx(s,e){s.uniform1iv(this.addr,e)}function ix(s,e){s.uniform2iv(this.addr,e)}function rx(s,e){s.uniform3iv(this.addr,e)}function sx(s,e){s.uniform4iv(this.addr,e)}function ox(s,e){s.uniform1uiv(this.addr,e)}function ax(s,e){s.uniform2uiv(this.addr,e)}function lx(s,e){s.uniform3uiv(this.addr,e)}function cx(s,e){s.uniform4uiv(this.addr,e)}function hx(s,e,t){const n=e.length,i=Ed(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTexture2D(e[r]||Sd,i[r])}function ux(s,e,t){const n=e.length,i=Ed(t,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)t.safeSetTextureCube(e[r]||Td,i[r])}function dx(s){switch(s){case 5126:return Y0;case 35664:return J0;case 35665:return j0;case 35666:return K0;case 35674:return Q0;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35680:case 36300:case 36308:case 36293:return ux}}function fx(s,e,t){this.id=s,this.addr=t,this.cache=[],this.setValue=$0(e.type)}function Ad(s,e,t){this.id=s,this.addr=t,this.cache=[],this.size=e.size,this.setValue=dx(e.type)}Ad.prototype.updateCache=function(s){const e=this.cache;s instanceof Float32Array&&e.length!==s.length&&(this.cache=new Float32Array(s.length)),St(e,s)};function Ld(s){this.id=s,this.seq=[],this.map={}}Ld.prototype.setValue=function(s,e,t){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,e[o.id],t)}};const ra=/(\w+)(\])?(\[|\.)?/g;function Sc(s,e){s.seq.push(e),s.map[e.id]=e}function px(s,e,t){const n=s.name,i=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),o=ra.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Sc(t,l===void 0?new fx(a,s,e):new Ad(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ld(a),Sc(t,u)),t=u}}}function Rn(s,e){this.seq=[],this.map={};const t=s.getProgramParameter(e,35718);for(let n=0;n<t;++n){const i=s.getActiveUniform(e,n),r=s.getUniformLocation(e,i.name);px(i,r,this)}}Rn.prototype.setValue=function(s,e,t,n){const i=this.map[e];i!==void 0&&i.setValue(s,t,n)};Rn.prototype.setOptional=function(s,e,t){const n=e[t];n!==void 0&&this.setValue(s,t,n)};Rn.upload=function(s,e,t,n){for(let i=0,r=e.length;i!==r;++i){const o=e[i],a=t[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};Rn.seqWithValue=function(s,e){const t=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in e&&t.push(r)}return t};function Tc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}let mx=0;function gx(s){const e=s.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Rd(s){switch(s){case Rt:return["Linear","( value )"];case Hr:return["sRGB","( value )"];case fo:return["RGBE","( value )"];case sl:return["RGBM","( value, 7.0 )"];case ol:return["RGBM","( value, 16.0 )"];case al:return["RGBD","( value, 256.0 )"];case uo:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case sd:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ec(s,e,t){const n=s.getShaderParameter(e,35713),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=s.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+i+gx(r)}function rr(s,e){const t=Rd(e);return"vec4 "+s+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function xx(s,e){const t=Rd(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function yx(s,e){let t;switch(e){case ru:t="Linear";break;case su:t="Reinhard";break;case ou:t="OptimizedCineon";break;case au:t="ACESFilmic";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vx(s){return[s.extensionDerivatives||s.envMapCubeUV||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fr).join(`
`)}function _x(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function bx(s,e){const t={},n=s.getProgramParameter(e,35721);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i).name;t[o]=s.getAttribLocation(e,o)}return t}function fr(s){return s!==""}function Ac(s,e){return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ua(s){return s.replace(wx,Mx)}function Mx(s,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ua(t)}const Sx=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(s){return s.replace(Tx,Cd).replace(Sx,Ex)}function Ex(s,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cd(s,e,t,n)}function Cd(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ax(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function Lx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case kr:case Ur:e="ENVMAP_TYPE_CUBE";break;case Zi:case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ur:case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function Cx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zr:e="ENVMAP_BLENDING_MULTIPLY";break;case nu:e="ENVMAP_BLENDING_MIX";break;case iu:e="ENVMAP_BLENDING_ADD";break}return e}function Px(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Ax(t),l=Lx(t),h=Rx(t),u=Cx(t),d=s.gammaFactor>0?s.gammaFactor:1,f=t.isWebGL2?"":vx(t),p=_x(r),x=i.createProgram();let y,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[p].filter(fr).join(`
`),y.length>0&&(y+=`
`),g=[f,p].filter(fr).join(`
`),g.length>0&&(g+=`
`)):(y=[Cc(t),"#define SHADER_NAME "+t.shaderName,p,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+d,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),g=[f,Cc(t),"#define SHADER_NAME "+t.shaderName,p,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ei?yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",Ie.encodings_pars_fragment,t.map?rr("mapTexelToLinear",t.mapEncoding):"",t.matcap?rr("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?rr("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?rr("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?rr("lightMapTexelToLinear",t.lightMapEncoding):"",xx("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),o=Ua(o),o=Ac(o,t),o=Lc(o,t),a=Ua(a),a=Ac(a,t),a=Lc(a,t),o=Rc(o),a=Rc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",t.glslVersion===za?"":"out highp vec4 pc_fragColor;",t.glslVersion===za?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=m+y+o,_=m+g+a,S=Tc(i,35633,b),v=Tc(i,35632,_);if(i.attachShader(x,S),i.attachShader(x,v),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),s.debug.checkShaderErrors){const I=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(S).trim(),U=i.getShaderInfoLog(v).trim();let z=!0,F=!0;if(i.getProgramParameter(x,35714)===!1){z=!1;const N=Ec(i,S,"vertex"),B=Ec(i,v,"fragment");console.error("THREE.WebGLProgram: shader error: ",i.getError(),"35715",i.getProgramParameter(x,35715),"gl.getProgramInfoLog",I,N,B)}else I!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",I):(O===""||U==="")&&(F=!1);F&&(this.diagnostics={runnable:z,programLog:I,vertexShader:{log:O,prefix:y},fragmentShader:{log:U,prefix:g}})}i.deleteShader(S),i.deleteShader(v);let A;this.getUniforms=function(){return A===void 0&&(A=new Rn(i,x)),A};let R;return this.getAttributes=function(){return R===void 0&&(R=bx(i,x)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=mx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=v,this}function Dx(s,e,t,n,i,r){const o=[],a=n.isWebGL2,c=n.logarithmicDepthBuffer,l=n.floatVertexTextures,h=n.maxVertexUniforms,u=n.vertexTextures;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},p=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function x(v){const R=v.skeleton.bones;if(l)return 1024;{const O=Math.floor((h-20)/4),U=Math.min(O,R.length);return U<R.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+R.length+" bones. This GPU supports "+U+"."),0):U}}function y(v){let A;return v&&v.isTexture?A=v.encoding:v&&v.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),A=v.texture.encoding):A=Rt,A}function g(v,A,R,I,O){const U=I.fog,z=v.isMeshStandardMaterial?I.environment:null,F=e.get(v.envMap||z),N=f[v.type],B=O.isSkinnedMesh?x(O):0;v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let D,W;if(N){const ae=Zt[N];D=ae.vertexShader,W=ae.fragmentShader}else D=v.vertexShader,W=v.fragmentShader;const ee=s.getRenderTarget();return{isWebGL2:a,shaderID:N,shaderName:v.type,vertexShader:D,fragmentShader:W,defines:v.defines,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:u,outputEncoding:ee!==null?y(ee.texture):s.outputEncoding,map:!!v.map,mapEncoding:y(v.map),matcap:!!v.matcap,matcapEncoding:y(v.matcap),envMap:!!F,envMapMode:F&&F.mapping,envMapEncoding:y(F),envMapCubeUV:!!F&&(F.mapping===Zi||F.mapping===Gr),lightMap:!!v.lightMap,lightMapEncoding:y(v.lightMap),aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,emissiveMapEncoding:y(v.emissiveMap),bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ld,tangentSpaceNormalMap:v.normalMapType===si,clearcoatMap:!!v.clearcoatMap,clearcoatRoughnessMap:!!v.clearcoatRoughnessMap,clearcoatNormalMap:!!v.clearcoatNormalMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,alphaMap:!!v.alphaMap,gradientMap:!!v.gradientMap,sheen:!!v.sheen,transmissionMap:!!v.transmissionMap,combine:v.combine,vertexTangents:v.normalMap&&v.vertexTangents,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&O.geometry&&O.geometry.attributes.color&&O.geometry.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.displacementMap||!!v.transmissionMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.transmissionMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:c,skinning:v.skinning&&B>0,maxBones:B,useVertexTexture:l,morphTargets:v.morphTargets,morphNormals:v.morphNormals,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:ei,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,alphaTest:v.alphaTest,doubleSided:v.side===Or,flipSided:v.side===rt,depthPacking:v.depthPacking!==void 0?v.depthPacking:!1,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:a||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:a||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:a||t.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.fragmentShader),A.push(v.vertexShader)),v.defines!==void 0)for(const R in v.defines)A.push(R),A.push(v.defines[R]);if(v.isRawShaderMaterial===!1){for(let R=0;R<p.length;R++)A.push(v[p[R]]);A.push(s.outputEncoding),A.push(s.gammaFactor)}return A.push(v.customProgramCacheKey),A.join()}function b(v){const A=f[v.type];let R;if(A){const I=Zt[A];R=wd.clone(I.uniforms)}else R=v.uniforms;return R}function _(v,A){let R;for(let I=0,O=o.length;I<O;I++){const U=o[I];if(U.cacheKey===A){R=U,++R.usedTimes;break}}return R===void 0&&(R=new Px(s,A,v,i),o.push(R)),R}function S(v){if(--v.usedTimes===0){const A=o.indexOf(v);o[A]=o[o.length-1],o.pop(),v.destroy()}}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:S,programs:o}}function Ix(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Nx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.program!==e.program?s.program.id-e.program.id:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Fx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pc(s){const e=[];let t=0;const n=[],i=[],r={id:-1};function o(){t=0,n.length=0,i.length=0}function a(d,f,p,x,y,g){let m=e[t];const b=s.get(p);return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,program:b.program||r,groupOrder:x,renderOrder:d.renderOrder,z:y,group:g},e[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.program=b.program||r,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=y,m.group=g),t++,m}function c(d,f,p,x,y,g){const m=a(d,f,p,x,y,g);(p.transparent===!0?i:n).push(m)}function l(d,f,p,x,y,g){const m=a(d,f,p,x,y,g);(p.transparent===!0?i:n).unshift(m)}function h(d,f){n.length>1&&n.sort(d||Nx),i.length>1&&i.sort(f||Fx)}function u(){for(let d=t,f=e.length;d<f;d++){const p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.program=null,p.group=null}}return{opaque:n,transparent:i,init:o,push:c,unshift:l,finish:u,sort:h}}function Bx(s){let e=new WeakMap;function t(i,r){let o;return e.has(i)===!1?(o=new Pc(s),e.set(i,[o])):r>=e.get(i).length?(o=new Pc(s),e.get(i).push(o)):o=e.get(i)[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ox(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new fe};break;case"SpotLight":t={position:new w,direction:new w,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function zx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kx=0;function Ux(s,e){return(e.castShadow?1:0)-(s.castShadow?1:0)}function Gx(s,e){const t=new Ox,n=zx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new w);const r=new w,o=new xe,a=new xe;function c(h){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,x=0,y=0,g=0,m=0,b=0,_=0,S=0;h.sort(Ux);for(let A=0,R=h.length;A<R;A++){const I=h[A],O=I.color,U=I.intensity,z=I.distance,F=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=O.r*U,d+=O.g*U,f+=O.b*U;else if(I.isLightProbe)for(let N=0;N<9;N++)i.probe[N].addScaledVector(I.sh.coefficients[N],U);else if(I.isDirectionalLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,D=n.get(I);D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=I.shadow.matrix,b++}i.directional[p]=N,p++}else if(I.isSpotLight){const N=t.get(I);if(N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(O).multiplyScalar(U),N.distance=z,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,I.castShadow){const B=I.shadow,D=n.get(I);D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=F,i.spotShadowMatrix[y]=I.shadow.matrix,S++}i.spot[y]=N,y++}else if(I.isRectAreaLight){const N=t.get(I);N.color.copy(O).multiplyScalar(U),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=N,g++}else if(I.isPointLight){const N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const B=I.shadow,D=n.get(I);D.shadowBias=B.bias,D.shadowNormalBias=B.normalBias,D.shadowRadius=B.radius,D.shadowMapSize=B.mapSize,D.shadowCameraNear=B.camera.near,D.shadowCameraFar=B.camera.far,i.pointShadow[x]=D,i.pointShadowMap[x]=F,i.pointShadowMatrix[x]=I.shadow.matrix,_++}i.point[x]=N,x++}else if(I.isHemisphereLight){const N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(U),N.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[m]=N,m++}}g>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==p||v.pointLength!==x||v.spotLength!==y||v.rectAreaLength!==g||v.hemiLength!==m||v.numDirectionalShadows!==b||v.numPointShadows!==_||v.numSpotShadows!==S)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotShadowMatrix.length=S,v.directionalLength=p,v.pointLength=x,v.spotLength=y,v.rectAreaLength=g,v.hemiLength=m,v.numDirectionalShadows=b,v.numPointShadows=_,v.numSpotShadows=S,i.version=kx++)}function l(h,u){let d=0,f=0,p=0,x=0,y=0;const g=u.matrixWorldInverse;for(let m=0,b=h.length;m<b;m++){const _=h[m];if(_.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),a.identity(),o.copy(_.matrixWorld),o.premultiply(g),a.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(g),S.direction.normalize(),y++}}}return{setup:c,setupView:l,state:i}}function Dc(s,e){const t=new Gx(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(){t.setup(n)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hx(s,e){let t=new WeakMap;function n(r,o=0){let a;return t.has(r)===!1?(a=new Dc(s,e),t.set(r,[a])):o>=t.get(r).length?(a=new Dc(s,e),t.get(r).push(a)):a=t.get(r)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class yo extends at{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=od,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}yo.prototype.isMeshDepthMaterial=!0;class vo extends at{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new w,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}vo.prototype.isMeshDistanceMaterial=!0;var Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Pd(s,e,t){let n=new Wr;const i=new Z,r=new Z,o=new qe,a=[],c=[],l={},h=t.maxTextureSize,u={0:rt,1:qi,2:Or},d=new dn({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:Wx,fragmentShader:Vx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new _e;p.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ot(p,d),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qa,this.render=function(v,A,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||v.length===0)return;const I=s.getRenderTarget(),O=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),z=s.state;z.setBlending(hn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let F=0,N=v.length;F<N;F++){const B=v[F],D=B.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const W=D.getFrameExtents();if(i.multiply(W),r.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/W.x),i.x=r.x*W.x,D.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/W.y),i.y=r.y*W.y,D.mapSize.y=r.y)),D.map===null&&!D.isPointLightShadow&&this.type===Di){const $={minFilter:ut,magFilter:ut,format:Ot};D.map=new un(i.x,i.y,$),D.map.texture.name=B.name+".shadowMap",D.mapPass=new un(i.x,i.y,$),D.camera.updateProjectionMatrix()}if(D.map===null){const $={minFilter:ht,magFilter:ht,format:Ot};D.map=new un(i.x,i.y,$),D.map.texture.name=B.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const ee=D.getViewportCount();for(let $=0;$<ee;$++){const ae=D.getViewport($);o.set(r.x*ae.x,r.y*ae.y,r.x*ae.z,r.y*ae.w),z.viewport(o),D.updateMatrices(B,$),n=D.getFrustum(),S(A,R,D.camera,B,this.type)}!D.isPointLightShadow&&this.type===Di&&g(D,R),D.needsUpdate=!1}y.needsUpdate=!1,s.setRenderTarget(I,O,U)};function g(v,A){const R=e.update(x);d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(A,null,R,d,x,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(A,null,R,f,x,null)}function m(v,A,R){const I=v<<0|A<<1|R<<2;let O=a[I];return O===void 0&&(O=new yo({depthPacking:ad,morphTargets:v,skinning:A}),a[I]=O),O}function b(v,A,R){const I=v<<0|A<<1|R<<2;let O=c[I];return O===void 0&&(O=new vo({morphTargets:v,skinning:A}),c[I]=O),O}function _(v,A,R,I,O,U,z){let F=null,N=m,B=v.customDepthMaterial;if(I.isPointLight===!0&&(N=b,B=v.customDistanceMaterial),B===void 0){let D=!1;R.morphTargets===!0&&(D=A.morphAttributes&&A.morphAttributes.position&&A.morphAttributes.position.length>0);let W=!1;v.isSkinnedMesh===!0&&(R.skinning===!0?W=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",v));const ee=v.isInstancedMesh===!0;F=N(D,W,ee)}else F=B;if(s.localClippingEnabled&&R.clipShadows===!0&&R.clippingPlanes.length!==0){const D=F.uuid,W=R.uuid;let ee=l[D];ee===void 0&&(ee={},l[D]=ee);let $=ee[W];$===void 0&&($=F.clone(),ee[W]=$),F=$}return F.visible=R.visible,F.wireframe=R.wireframe,z===Di?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:u[R.side],F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,I.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(I.matrixWorld),F.nearDistance=O,F.farDistance=U),F}function S(v,A,R,I,O){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&O===Di)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,v.matrixWorld);const F=e.update(v),N=v.material;if(Array.isArray(N)){const B=F.groups;for(let D=0,W=B.length;D<W;D++){const ee=B[D],$=N[ee.materialIndex];if($&&$.visible){const ae=_(v,F,$,I,R.near,R.far,O);s.renderBufferDirect(R,null,F,ae,v,ee)}}}else if(N.visible){const B=_(v,F,N,I,R.near,R.far,O);s.renderBufferDirect(R,null,F,B,v,null)}}const z=v.children;for(let F=0,N=z.length;F<N;F++)S(z[F],A,R,I,O)}}function qx(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const Q=new qe;let te=null;const ge=new qe(0,0,0,0);return{setMask:function(J){te!==J&&!C&&(s.colorMask(J,J,J,J),te=J)},setLocked:function(J){C=J},setClear:function(J,we,He,We,yt){yt===!0&&(J*=We,we*=We,He*=We),Q.set(J,we,He,We),ge.equals(Q)===!1&&(s.clearColor(J,we,He,We),ge.copy(Q))},reset:function(){C=!1,te=null,ge.set(-1,0,0,0)}}}function r(){let C=!1,Q=null,te=null,ge=null;return{setTest:function(J){J?ve(2929):Me(2929)},setMask:function(J){Q!==J&&!C&&(s.depthMask(J),Q=J)},setFunc:function(J){if(te!==J){if(J)switch(J){case Yh:s.depthFunc(512);break;case Jh:s.depthFunc(519);break;case jh:s.depthFunc(513);break;case qs:s.depthFunc(515);break;case Kh:s.depthFunc(514);break;case Qh:s.depthFunc(518);break;case eu:s.depthFunc(516);break;case tu:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);te=J}},setLocked:function(J){C=J},setClear:function(J){ge!==J&&(s.clearDepth(J),ge=J)},reset:function(){C=!1,Q=null,te=null,ge=null}}}function o(){let C=!1,Q=null,te=null,ge=null,J=null,we=null,He=null,We=null,yt=null;return{setTest:function(Qe){C||(Qe?ve(2960):Me(2960))},setMask:function(Qe){Q!==Qe&&!C&&(s.stencilMask(Qe),Q=Qe)},setFunc:function(Qe,tn,Ut){(te!==Qe||ge!==tn||J!==Ut)&&(s.stencilFunc(Qe,tn,Ut),te=Qe,ge=tn,J=Ut)},setOp:function(Qe,tn,Ut){(we!==Qe||He!==tn||We!==Ut)&&(s.stencilOp(Qe,tn,Ut),we=Qe,He=tn,We=Ut)},setLocked:function(Qe){C=Qe},setClear:function(Qe){yt!==Qe&&(s.clearStencil(Qe),yt=Qe)},reset:function(){C=!1,Q=null,te=null,ge=null,J=null,we=null,He=null,We=null,yt=null}}}const a=new i,c=new r,l=new o;let h={},u=null,d={},f=null,p=!1,x=null,y=null,g=null,m=null,b=null,_=null,S=null,v=!1,A=null,R=null,I=null,O=null,U=null;const z=s.getParameter(35661);let F=!1,N=0;const B=s.getParameter(7938);B.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=N>=1):B.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=N>=2);let D=null,W={};const ee=new qe(0,0,s.canvas.width,s.canvas.height),$=new qe(0,0,s.canvas.width,s.canvas.height);function ae(C,Q,te){const ge=new Uint8Array(4),J=s.createTexture();s.bindTexture(C,J),s.texParameteri(C,10241,9728),s.texParameteri(C,10240,9728);for(let we=0;we<te;we++)s.texImage2D(Q+we,0,6408,1,1,0,6408,5121,ge);return J}const re={};re[3553]=ae(3553,3553,1),re[34067]=ae(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),ve(2929),c.setFunc(qs),De(!1),ne(wa),ve(2884),Oe(hn);function ve(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function Me(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function H(C){C!==u&&(s.bindFramebuffer(36160,C),u=C)}function ke(C,Q){Q===null&&u!==null&&(Q=u),d[C]!==Q&&(s.bindFramebuffer(C,Q),d[C]=Q,n&&(C===36009&&(d[36160]=Q),C===36160&&(d[36009]=Q)))}function Be(C){return f!==C?(s.useProgram(C),f=C,!0):!1}const Se={[Jn]:32774,[zh]:32778,[kh]:32779};if(n)Se[Ea]=32775,Se[Aa]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[Ea]=C.MIN_EXT,Se[Aa]=C.MAX_EXT)}const be={[Uh]:0,[Gh]:1,[Hh]:768,[tl]:770,[$h]:776,[Zh]:774,[Wh]:772,[Vh]:769,[nl]:771,[Xh]:775,[qh]:773};function Oe(C,Q,te,ge,J,we,He,We){if(C===hn){p===!0&&(Me(3042),p=!1);return}if(p===!1&&(ve(3042),p=!0),C!==Oh){if(C!==x||We!==v){if((y!==Jn||b!==Jn)&&(s.blendEquation(32774),y=Jn,b=Jn),We)switch(C){case Bi:s.blendFuncSeparate(1,771,1,771);break;case Ma:s.blendFunc(1,1);break;case Sa:s.blendFuncSeparate(0,0,769,771);break;case Ta:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Bi:s.blendFuncSeparate(770,771,1,771);break;case Ma:s.blendFunc(770,1);break;case Sa:s.blendFunc(0,769);break;case Ta:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}g=null,m=null,_=null,S=null,x=C,v=We}return}J=J||Q,we=we||te,He=He||ge,(Q!==y||J!==b)&&(s.blendEquationSeparate(Se[Q],Se[J]),y=Q,b=J),(te!==g||ge!==m||we!==_||He!==S)&&(s.blendFuncSeparate(be[te],be[ge],be[we],be[He]),g=te,m=ge,_=we,S=He),x=C,v=null}function Pe(C,Q){C.side===Or?Me(2884):ve(2884);let te=C.side===rt;Q&&(te=!te),De(te),C.blending===Bi&&C.transparent===!1?Oe(hn):Oe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const ge=C.stencilWrite;l.setTest(ge),ge&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ve(32926):Me(32926)}function De(C){A!==C&&(C?s.frontFace(2304):s.frontFace(2305),A=C)}function ne(C){C!==Nh?(ve(2884),C!==R&&(C===wa?s.cullFace(1029):C===Fh?s.cullFace(1028):s.cullFace(1032))):Me(2884),R=C}function se(C){C!==I&&(F&&s.lineWidth(C),I=C)}function oe(C,Q,te){C?(ve(32823),(O!==Q||U!==te)&&(s.polygonOffset(Q,te),O=Q,U=te)):Me(32823)}function ye(C){C?ve(3089):Me(3089)}function de(C){C===void 0&&(C=33984+z-1),D!==C&&(s.activeTexture(C),D=C)}function L(C,Q){D===null&&de();let te=W[D];te===void 0&&(te={type:void 0,texture:void 0},W[D]=te),(te.type!==C||te.texture!==Q)&&(s.bindTexture(C,Q||re[C]),te.type=C,te.texture=Q)}function E(){const C=W[D];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(C){ee.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),ee.copy(C))}function ze(C){$.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),$.copy(C))}function P(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},D=null,W={},u=null,d={},f=null,p=!1,x=null,y=null,g=null,m=null,b=null,_=null,S=null,v=!1,A=null,R=null,I=null,O=null,U=null,ee.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:ve,disable:Me,bindFramebuffer:ke,bindXRFramebuffer:H,useProgram:Be,setBlending:Oe,setMaterial:Pe,setFlipSided:De,setCullFace:ne,setLineWidth:se,setPolygonOffset:oe,setScissorTest:ye,activeTexture:de,bindTexture:L,unbindTexture:E,compressedTexImage2D:X,texImage2D:Y,texImage3D:he,scissor:me,viewport:ze,reset:P}}function Zx(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=new WeakMap;let f,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return p?new OffscreenCanvas(L,E):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function y(L,E,X,Y){let he=1;if((L.width>Y||L.height>Y)&&(he=Y/Math.max(L.width,L.height)),he<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const me=E?ud:Math.floor,ze=me(he*L.width),P=me(he*L.height);f===void 0&&(f=x(ze,P));const C=X?x(ze,P):f;return C.width=ze,C.height=P,C.getContext("2d").drawImage(L,0,0,ze,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ze+"x"+P+")."),C}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return ka(L.width)&&ka(L.height)}function m(L){return a?!1:L.wrapS!==Lt||L.wrapT!==Lt||L.minFilter!==ht&&L.minFilter!==ut}function b(L,E){return L.generateMipmaps&&E&&L.minFilter!==ht&&L.minFilter!==ut}function _(L,E,X,Y){s.generateMipmap(L);const he=n.get(E);he.__maxMipLevel=Math.log2(Math.max(X,Y))}function S(L,E,X){if(a===!1)return E;if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Y=E;return E===6403&&(X===5126&&(Y=33326),X===5131&&(Y=33325),X===5121&&(Y=33321)),E===6407&&(X===5126&&(Y=34837),X===5131&&(Y=34843),X===5121&&(Y=32849)),E===6408&&(X===5126&&(Y=34836),X===5131&&(Y=34842),X===5121&&(Y=32856)),(Y===33325||Y===33326||Y===34842||Y===34836)&&e.get("EXT_color_buffer_float"),Y}function v(L){return L===ht||L===$s||L===Ys?9728:9729}function A(L){const E=L.target;E.removeEventListener("dispose",A),I(E),E.isVideoTexture&&d.delete(E),o.memory.textures--}function R(L){const E=L.target;E.removeEventListener("dispose",R),O(E),o.memory.textures--}function I(L){const E=n.get(L);E.__webglInit!==void 0&&(s.deleteTexture(E.__webglTexture),n.remove(L))}function O(L){const E=L.texture,X=n.get(L),Y=n.get(E);if(L){if(Y.__webglTexture!==void 0&&s.deleteTexture(Y.__webglTexture),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++)s.deleteFramebuffer(X.__webglFramebuffer[he]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[he]);else s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&s.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer);n.remove(E),n.remove(L)}}let U=0;function z(){U=0}function F(){const L=U;return L>=c&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+c),U+=1,L}function N(L,E){const X=n.get(L);if(L.isVideoTexture&&ne(L),L.version>0&&X.__version!==L.version){const Y=L.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(X,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,X.__webglTexture)}function B(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ve(X,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,X.__webglTexture)}function D(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ve(X,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,X.__webglTexture)}function W(L,E){const X=n.get(L);if(L.version>0&&X.__version!==L.version){Me(X,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,X.__webglTexture)}const ee={[yr]:10497,[Lt]:33071,[vr]:33648},$={[ht]:9728,[$s]:9984,[Ys]:9986,[ut]:9729,[il]:9985,[Xi]:9987};function ae(L,E,X){if(X?(s.texParameteri(L,10242,ee[E.wrapS]),s.texParameteri(L,10243,ee[E.wrapT]),(L===32879||L===35866)&&s.texParameteri(L,32882,ee[E.wrapR]),s.texParameteri(L,10240,$[E.magFilter]),s.texParameteri(L,10241,$[E.minFilter])):(s.texParameteri(L,10242,33071),s.texParameteri(L,10243,33071),(L===32879||L===35866)&&s.texParameteri(L,32882,33071),(E.wrapS!==Lt||E.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(L,10240,v(E.magFilter)),s.texParameteri(L,10241,v(E.minFilter)),E.minFilter!==ht&&E.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(E.type===cn&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===br&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function re(L,E){L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",A),L.__webglTexture=s.createTexture(),o.memory.textures++)}function ve(L,E,X){let Y=3553;E.isDataTexture2DArray&&(Y=35866),E.isDataTexture3D&&(Y=32879),re(L,E),t.activeTexture(33984+X),t.bindTexture(Y,L.__webglTexture),s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const he=m(E)&&g(E.image)===!1,me=y(E.image,he,!1,h),ze=g(me)||a,P=r.convert(E.format);let C=r.convert(E.type),Q=S(E.internalFormat,P,C);ae(Y,E,ze);let te;const ge=E.mipmaps;if(E.isDepthTexture)Q=6402,a?E.type===cn?Q=36012:E.type===pr?Q=33190:E.type===Oi?Q=35056:Q=33189:E.type===cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ti&&Q===6402&&E.type!==_r&&E.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=_r,C=r.convert(E.type)),E.format===ki&&Q===6402&&(Q=34041,E.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Oi,C=r.convert(E.type))),t.texImage2D(3553,0,Q,me.width,me.height,0,P,C,null);else if(E.isDataTexture)if(ge.length>0&&ze){for(let J=0,we=ge.length;J<we;J++)te=ge[J],t.texImage2D(3553,J,Q,te.width,te.height,0,P,C,te.data);E.generateMipmaps=!1,L.__maxMipLevel=ge.length-1}else t.texImage2D(3553,0,Q,me.width,me.height,0,P,C,me.data),L.__maxMipLevel=0;else if(E.isCompressedTexture){for(let J=0,we=ge.length;J<we;J++)te=ge[J],E.format!==Ot&&E.format!==Ln?P!==null?t.compressedTexImage2D(3553,J,Q,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,J,Q,te.width,te.height,0,P,C,te.data);L.__maxMipLevel=ge.length-1}else if(E.isDataTexture2DArray)t.texImage3D(35866,0,Q,me.width,me.height,me.depth,0,P,C,me.data),L.__maxMipLevel=0;else if(E.isDataTexture3D)t.texImage3D(32879,0,Q,me.width,me.height,me.depth,0,P,C,me.data),L.__maxMipLevel=0;else if(ge.length>0&&ze){for(let J=0,we=ge.length;J<we;J++)te=ge[J],t.texImage2D(3553,J,Q,P,C,te);E.generateMipmaps=!1,L.__maxMipLevel=ge.length-1}else t.texImage2D(3553,0,Q,P,C,me),L.__maxMipLevel=0;b(E,ze)&&_(Y,E,me.width,me.height),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function Me(L,E,X){if(E.image.length!==6)return;re(L,E),t.activeTexture(33984+X),t.bindTexture(34067,L.__webglTexture),s.pixelStorei(37440,E.flipY),s.pixelStorei(37441,E.premultiplyAlpha),s.pixelStorei(3317,E.unpackAlignment),s.pixelStorei(37443,0);const Y=E&&(E.isCompressedTexture||E.image[0].isCompressedTexture),he=E.image[0]&&E.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Y&&!he?me[J]=y(E.image[J],!1,!0,l):me[J]=he?E.image[J].image:E.image[J];const ze=me[0],P=g(ze)||a,C=r.convert(E.format),Q=r.convert(E.type),te=S(E.internalFormat,C,Q);ae(34067,E,P);let ge;if(Y){for(let J=0;J<6;J++){ge=me[J].mipmaps;for(let we=0;we<ge.length;we++){const He=ge[we];E.format!==Ot&&E.format!==Ln?C!==null?t.compressedTexImage2D(34069+J,we,te,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+J,we,te,He.width,He.height,0,C,Q,He.data)}}L.__maxMipLevel=ge.length-1}else{ge=E.mipmaps;for(let J=0;J<6;J++)if(he){t.texImage2D(34069+J,0,te,me[J].width,me[J].height,0,C,Q,me[J].data);for(let we=0;we<ge.length;we++){const We=ge[we].image[J].image;t.texImage2D(34069+J,we+1,te,We.width,We.height,0,C,Q,We.data)}}else{t.texImage2D(34069+J,0,te,C,Q,me[J]);for(let we=0;we<ge.length;we++){const He=ge[we];t.texImage2D(34069+J,we+1,te,C,Q,He.image[J])}}L.__maxMipLevel=ge.length}b(E,P)&&_(34067,E,ze.width,ze.height),L.__version=E.version,E.onUpdate&&E.onUpdate(E)}function H(L,E,X,Y){const he=E.texture,me=r.convert(he.format),ze=r.convert(he.type),P=S(he.internalFormat,me,ze);Y===32879||Y===35866?t.texImage3D(Y,0,P,E.width,E.height,E.depth,0,me,ze,null):t.texImage2D(Y,0,P,E.width,E.height,0,me,ze,null),t.bindFramebuffer(36160,L),s.framebufferTexture2D(36160,X,Y,n.get(he).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(L,E,X){if(s.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let Y=33189;if(X){const he=E.depthTexture;he&&he.isDepthTexture&&(he.type===cn?Y=36012:he.type===pr&&(Y=33190));const me=De(E);s.renderbufferStorageMultisample(36161,me,Y,E.width,E.height)}else s.renderbufferStorage(36161,Y,E.width,E.height);s.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){if(X){const Y=De(E);s.renderbufferStorageMultisample(36161,Y,35056,E.width,E.height)}else s.renderbufferStorage(36161,34041,E.width,E.height);s.framebufferRenderbuffer(36160,33306,36161,L)}else{const Y=E.texture,he=r.convert(Y.format),me=r.convert(Y.type),ze=S(Y.internalFormat,he,me);if(X){const P=De(E);s.renderbufferStorageMultisample(36161,P,ze,E.width,E.height)}else s.renderbufferStorage(36161,ze,E.width,E.height)}s.bindRenderbuffer(36161,null)}function Be(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),N(E.depthTexture,0);const Y=n.get(E.depthTexture).__webglTexture;if(E.depthTexture.format===ti)s.framebufferTexture2D(36160,36096,3553,Y,0);else if(E.depthTexture.format===ki)s.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function Se(L){const E=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Be(E.__webglFramebuffer,L)}else if(X){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]=s.createRenderbuffer(),ke(E.__webglDepthbuffer[Y],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),ke(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function be(L){const E=L.texture,X=n.get(L),Y=n.get(E);L.addEventListener("dispose",R),Y.__webglTexture=s.createTexture(),Y.__version=E.version,o.memory.textures++;const he=L.isWebGLCubeRenderTarget===!0,me=L.isWebGLMultisampleRenderTarget===!0,ze=E.isDataTexture3D||E.isDataTexture2DArray,P=g(L)||a;if(a&&E.format===Ln&&(E.type===cn||E.type===br)&&(E.format=Ot,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),he){X.__webglFramebuffer=[];for(let C=0;C<6;C++)X.__webglFramebuffer[C]=s.createFramebuffer()}else if(X.__webglFramebuffer=s.createFramebuffer(),me)if(a){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,X.__webglColorRenderbuffer);const C=r.convert(E.format),Q=r.convert(E.type),te=S(E.internalFormat,C,Q),ge=De(L);s.renderbufferStorageMultisample(36161,ge,te,L.width,L.height),t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(he){t.bindTexture(34067,Y.__webglTexture),ae(34067,E,P);for(let C=0;C<6;C++)H(X.__webglFramebuffer[C],L,36064,34069+C);b(E,P)&&_(34067,E,L.width,L.height),t.bindTexture(34067,null)}else{let C=3553;ze&&(a?C=E.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(C,Y.__webglTexture),ae(C,E,P),H(X.__webglFramebuffer,L,36064,C),b(E,P)&&_(3553,E,L.width,L.height),t.bindTexture(3553,null)}L.depthBuffer&&Se(L)}function Oe(L){const E=L.texture,X=g(L)||a;if(b(E,X)){const Y=L.isWebGLCubeRenderTarget?34067:3553,he=n.get(E).__webglTexture;t.bindTexture(Y,he),_(Y,E,L.width,L.height),t.bindTexture(Y,null)}}function Pe(L){if(L.isWebGLMultisampleRenderTarget)if(a){const E=L.width,X=L.height;let Y=16384;L.depthBuffer&&(Y|=256),L.stencilBuffer&&(Y|=1024);const he=n.get(L);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer),s.blitFramebuffer(0,0,E,X,0,0,E,X,Y,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function De(L){return a&&L.isWebGLMultisampleRenderTarget?Math.min(u,L.samples):0}function ne(L){const E=o.render.frame;d.get(L)!==E&&(d.set(L,E),L.update())}let se=!1,oe=!1;function ye(L,E){L&&L.isWebGLRenderTarget&&(se===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),se=!0),L=L.texture),N(L,E)}function de(L,E){L&&L.isWebGLCubeRenderTarget&&(oe===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),oe=!0),L=L.texture),W(L,E)}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=N,this.setTexture2DArray=B,this.setTexture3D=D,this.setTextureCube=W,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=Pe,this.safeSetTexture2D=ye,this.safeSetTextureCube=de}function Dd(s,e,t){const n=t.isWebGL2;function i(r){let o;if(r===$i)return 5121;if(r===du)return 32819;if(r===fu)return 32820;if(r===pu)return 33635;if(r===cu)return 5120;if(r===hu)return 5122;if(r===_r)return 5123;if(r===uu)return 5124;if(r===pr)return 5125;if(r===cn)return 5126;if(r===br)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===mu)return 6406;if(r===Ln)return 6407;if(r===Ot)return 6408;if(r===gu)return 6409;if(r===xu)return 6410;if(r===ti)return 6402;if(r===ki)return 34041;if(r===vu)return 6403;if(r===_u)return 36244;if(r===bu)return 33319;if(r===wu)return 33320;if(r===Mu)return 36248;if(r===Su)return 36249;if(r===La||r===Ra||r===Ca||r===Pa)if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ra)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ca)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Da||r===Ia||r===Na||r===Fa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Da)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if((r===Ba||r===Oa)&&(o=e.get("WEBGL_compressed_texture_etc"),o!==null)){if(r===Ba)return o.COMPRESSED_RGB8_ETC2;if(r===Oa)return o.COMPRESSED_RGBA8_ETC2_EAC}if(r===Eu||r===Au||r===Lu||r===Ru||r===Cu||r===Pu||r===Du||r===Iu||r===Nu||r===Fu||r===Bu||r===Ou||r===zu||r===ku||r===Gu||r===Hu||r===Vu||r===Wu||r===qu||r===Zu||r===Xu||r===$u||r===Yu||r===Ju||r===ju||r===Ku||r===Qu||r===ed)return o=e.get("WEBGL_compressed_texture_astc"),o!==null?r:null;if(r===Uu)return o=e.get("EXT_texture_compression_bptc"),o!==null?r:null;if(r===Oi)return n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class dl extends gt{constructor(e=[]){super(),this.cameras=e}}dl.prototype.isArrayCamera=!0;class Qn extends Fe{constructor(){super(),this.type="Group"}}Qn.prototype.isGroup=!0;const Xx={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(i=t.getPose(e.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xx))),l&&e.hand){o=!0;for(const x of e.hand.values()){const y=t.getJointPose(x,n);if(l.joints[x.jointName]===void 0){const m=new Qn;m.matrixAutoUpdate=!1,m.visible=!1,l.joints[x.jointName]=m,l.add(m)}const g=l.joints[x.jointName];y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=y.radius),g.visible=y!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}}class $x extends gn{constructor(e,t){super();const n=this,i=e.state;let r=null,o=1,a=null,c="local-floor",l=null;const h=[],u=new Map,d=new gt;d.layers.enable(1),d.viewport=new qe;const f=new gt;f.layers.enable(2),f.viewport=new qe;const p=[d,f],x=new dl;x.layers.enable(1),x.layers.enable(2);let y=null,g=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let F=h[z];return F===void 0&&(F=new sa,h[z]=F),F.getTargetRaySpace()},this.getControllerGrip=function(z){let F=h[z];return F===void 0&&(F=new sa,h[z]=F),F.getGripSpace()},this.getHand=function(z){let F=h[z];return F===void 0&&(F=new sa,h[z]=F),F.getHandSpace()};function m(z){const F=u.get(z.inputSource);F&&F.dispatchEvent({type:z.type,data:z.inputSource})}function b(){u.forEach(function(z,F){z.disconnect(F)}),u.clear(),y=null,g=null,i.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),U.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){c=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){r.addEventListener("select",m),r.addEventListener("selectstart",m),r.addEventListener("selectend",m),r.addEventListener("squeeze",m),r.addEventListener("squeezestart",m),r.addEventListener("squeezeend",m),r.addEventListener("end",b),r.addEventListener("inputsourceschange",_);const F=t.getContextAttributes();F.xrCompatible!==!0&&await t.makeXRCompatible();const N={antialias:F.antialias,alpha:F.alpha,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:o},B=new XRWebGLLayer(r,t,N);r.updateRenderState({baseLayer:B}),a=await r.requestReferenceSpace(c),U.setContext(r),U.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function _(z){const F=r.inputSources;for(let N=0;N<h.length;N++)u.set(F[N],h[N]);for(let N=0;N<z.removed.length;N++){const B=z.removed[N],D=u.get(B);D&&(D.dispatchEvent({type:"disconnected",data:B}),u.delete(B))}for(let N=0;N<z.added.length;N++){const B=z.added[N],D=u.get(B);D&&D.dispatchEvent({type:"connected",data:B})}}const S=new w,v=new w;function A(z,F,N){S.setFromMatrixPosition(F.matrixWorld),v.setFromMatrixPosition(N.matrixWorld);const B=S.distanceTo(v),D=F.projectionMatrix.elements,W=N.projectionMatrix.elements,ee=D[14]/(D[10]-1),$=D[14]/(D[10]+1),ae=(D[9]+1)/D[5],re=(D[9]-1)/D[5],ve=(D[8]-1)/D[0],Me=(W[8]+1)/W[0],H=ee*ve,ke=ee*Me,Be=B/(-ve+Me),Se=Be*-ve;F.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Se),z.translateZ(Be),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const be=ee+Be,Oe=$+Be,Pe=H-Se,De=ke+(B-Se),ne=ae*$/Oe*be,se=re*$/Oe*be;z.projectionMatrix.makePerspective(Pe,De,ne,se,be,Oe)}function R(z,F){F===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(F.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.getCamera=function(z){x.near=f.near=d.near=z.near,x.far=f.far=d.far=z.far,(y!==x.near||g!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,g=x.far);const F=z.parent,N=x.cameras;R(x,F);for(let D=0;D<N.length;D++)R(N[D],F);z.matrixWorld.copy(x.matrixWorld),z.matrix.copy(x.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const B=z.children;for(let D=0,W=B.length;D<W;D++)B[D].updateMatrixWorld(!0);return N.length===2?A(x,d,f):x.projectionMatrix.copy(d.projectionMatrix),x};let I=null;function O(z,F){if(l=F.getViewerPose(a),l!==null){const B=l.views,D=r.renderState.baseLayer;i.bindXRFramebuffer(D.framebuffer);let W=!1;B.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let ee=0;ee<B.length;ee++){const $=B[ee],ae=D.getViewport($),re=p[ee];re.matrix.fromArray($.transform.matrix),re.projectionMatrix.fromArray($.projectionMatrix),re.viewport.set(ae.x,ae.y,ae.width,ae.height),ee===0&&x.matrix.copy(re.matrix),W===!0&&x.cameras.push(re)}}const N=r.inputSources;for(let B=0;B<h.length;B++){const D=h[B],W=N[B];D.update(W,F,a)}I&&I(z,F)}const U=new Md;U.setAnimationLoop(O),this.setAnimationLoop=function(z){I=z},this.dispose=function(){}}}function Yx(s){function e(g,m){g.fogColor.value.copy(m.color),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function t(g,m,b,_){m.isMeshBasicMaterial?n(g,m):m.isMeshLambertMaterial?(n(g,m),c(g,m)):m.isMeshToonMaterial?(n(g,m),h(g,m)):m.isMeshPhongMaterial?(n(g,m),l(g,m)):m.isMeshStandardMaterial?(n(g,m),m.isMeshPhysicalMaterial?d(g,m):u(g,m)):m.isMeshMatcapMaterial?(n(g,m),f(g,m)):m.isMeshDepthMaterial?(n(g,m),p(g,m)):m.isMeshDistanceMaterial?(n(g,m),x(g,m)):m.isMeshNormalMaterial?(n(g,m),y(g,m)):m.isLineBasicMaterial?(i(g,m),m.isLineDashedMaterial&&r(g,m)):m.isPointsMaterial?o(g,m,b,_):m.isSpriteMaterial?a(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function n(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap),m.specularMap&&(g.specularMap.value=m.specularMap);const b=s.get(m).envMap;if(b){g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b._needsFlipEnvMap?-1:1,g.reflectivity.value=m.reflectivity,g.refractionRatio.value=m.refractionRatio;const v=s.get(b).__maxMipLevel;v!==void 0&&(g.maxMipLevel.value=v)}m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity);let _;m.map?_=m.map:m.specularMap?_=m.specularMap:m.displacementMap?_=m.displacementMap:m.normalMap?_=m.normalMap:m.bumpMap?_=m.bumpMap:m.roughnessMap?_=m.roughnessMap:m.metalnessMap?_=m.metalnessMap:m.alphaMap?_=m.alphaMap:m.emissiveMap?_=m.emissiveMap:m.clearcoatMap?_=m.clearcoatMap:m.clearcoatNormalMap?_=m.clearcoatNormalMap:m.clearcoatRoughnessMap&&(_=m.clearcoatRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix));let S;m.aoMap?S=m.aoMap:m.lightMap&&(S=m.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uv2Transform.value.copy(S.matrix))}function i(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity}function r(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function o(g,m,b,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=_*.5,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let S;m.map?S=m.map:m.alphaMap&&(S=m.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),g.uvTransform.value.copy(S.matrix))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map),m.alphaMap&&(g.alphaMap.value=m.alphaMap);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix))}function c(g,m){m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap)}function l(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function u(g,m){g.roughness.value=m.roughness,g.metalness.value=m.metalness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),s.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m){u(g,m),g.reflectivity.value=m.reflectivity,g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.sheen&&g.sheen.value.copy(m.sheen),m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),g.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===rt&&g.clearcoatNormalScale.value.negate()),g.transmission.value=m.transmission,m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap)}function f(g,m){m.matcap&&(g.matcap.value=m.matcap),m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function p(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}function x(g,m){m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),g.referencePosition.value.copy(m.referencePosition),g.nearDistance.value=m.nearDistance,g.farDistance.value=m.farDistance}function y(g,m){m.bumpMap&&(g.bumpMap.value=m.bumpMap,g.bumpScale.value=m.bumpScale,m.side===rt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,g.normalScale.value.copy(m.normalScale),m.side===rt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Jx(){const s=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return s.style.display="block",s}function Xe(s){s=s||{};const e=s.canvas!==void 0?s.canvas:Jx(),t=s.context!==void 0?s.context:null,n=s.alpha!==void 0?s.alpha:!1,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,o=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,c=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",h=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u=null,d=null;const f=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=Rt,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let y=!1,g=0,m=0,b=null,_=-1,S=null;const v=new qe,A=new qe;let R=null,I=e.width,O=e.height,U=1,z=null,F=null;const N=new qe(0,0,I,O),B=new qe(0,0,I,O);let D=!1;const W=new Wr;let ee=!1,$=!1;const ae=new xe,re=new w,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return b===null?U:1}let H=t;function ke(T,G){for(let k=0;k<T.length;k++){const V=T[k],ue=e.getContext(V,G);if(ue!==null)return ue}return null}try{const T={alpha:n,depth:i,stencil:r,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:h};if(e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",He,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),H=ke(G,T),H===null)throw ke(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Be,Se,be,Oe,Pe,De,ne,se,oe,ye,de,L,E,X,Y,he,me,ze,P,C,Q,te;function ge(){Be=new v0(H),Se=new g0(H,Be,s),Be.init(Se),Q=new Dd(H,Be,Se),be=new qx(H,Be,Se),Oe=new w0,Pe=new Ix,De=new Zx(H,Be,be,Pe,Se,Q,Oe),ne=new y0(x),se=new qp(H,Se),te=new p0(H,Be,se,Se),oe=new _0(H,se,Oe,te),ye=new E0(H,oe,se,Oe),ze=new T0(H),Y=new x0(Pe),de=new Dx(x,ne,Be,Se,te,Y),L=new Yx(Pe),E=new Bx(Pe),X=new Hx(Be,Se),me=new f0(x,ne,be,ye,a),he=new Pd(x,ye,Se),P=new m0(H,Be,Oe,Se),C=new b0(H,Be,Oe,Se),Oe.programs=de.programs,x.capabilities=Se,x.extensions=Be,x.properties=Pe,x.renderLists=E,x.shadowMap=he,x.state=be,x.info=Oe}ge();const J=new $x(x,H);this.xr=J,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(I,O,!1))},this.getSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),T=new Z),T.set(I,O)},this.setSize=function(T,G,k){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,O=G,e.width=Math.floor(T*U),e.height=Math.floor(G*U),k!==!1&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),T=new Z),T.set(I*U,O*U).floor()},this.setDrawingBufferSize=function(T,G,k){I=T,O=G,U=k,e.width=Math.floor(T*k),e.height=Math.floor(G*k),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),T=new qe),T.copy(v)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,G,k,V){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,G,k,V),be.viewport(v.copy(N).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,G,k,V){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,G,k,V),be.scissor(A.copy(B).multiplyScalar(U).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(T){be.setScissorTest(D=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),T=new fe),T.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(T,G,k){let V=0;(T===void 0||T)&&(V|=16384),(G===void 0||G)&&(V|=256),(k===void 0||k)&&(V|=1024),H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",He,!1),E.dispose(),X.dispose(),Pe.dispose(),ne.dispose(),ye.dispose(),te.dispose(),J.dispose(),J.removeEventListener("sessionstart",Ql),J.removeEventListener("sessionend",ec),On.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function He(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Oe.autoReset,G=he.enabled,k=he.autoUpdate,V=he.needsUpdate,ue=he.type;ge(),Oe.autoReset=T,he.enabled=G,he.autoUpdate=k,he.needsUpdate=V,he.type=ue}function We(T){const G=T.target;G.removeEventListener("dispose",We),yt(G)}function yt(T){Qe(T),Pe.remove(T)}function Qe(T){const G=Pe.get(T).programs;G!==void 0&&G.forEach(function(k){de.releaseProgram(k)})}function tn(T,G){T.render(function(k){x.renderBufferImmediate(k,G)})}this.renderBufferImmediate=function(T,G){te.initAttributes();const k=Pe.get(T);T.hasPositions&&!k.position&&(k.position=H.createBuffer()),T.hasNormals&&!k.normal&&(k.normal=H.createBuffer()),T.hasUvs&&!k.uv&&(k.uv=H.createBuffer()),T.hasColors&&!k.color&&(k.color=H.createBuffer());const V=G.getAttributes();T.hasPositions&&(H.bindBuffer(34962,k.position),H.bufferData(34962,T.positionArray,35048),te.enableAttribute(V.position),H.vertexAttribPointer(V.position,3,5126,!1,0,0)),T.hasNormals&&(H.bindBuffer(34962,k.normal),H.bufferData(34962,T.normalArray,35048),te.enableAttribute(V.normal),H.vertexAttribPointer(V.normal,3,5126,!1,0,0)),T.hasUvs&&(H.bindBuffer(34962,k.uv),H.bufferData(34962,T.uvArray,35048),te.enableAttribute(V.uv),H.vertexAttribPointer(V.uv,2,5126,!1,0,0)),T.hasColors&&(H.bindBuffer(34962,k.color),H.bufferData(34962,T.colorArray,35048),te.enableAttribute(V.color),H.vertexAttribPointer(V.color,3,5126,!1,0,0)),te.disableUnusedAttributes(),H.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,G,k,V,ue,Ue){G===null&&(G=ve);const Te=ue.isMesh&&ue.matrixWorld.determinant()<0,Re=sc(T,G,V,ue);be.setMaterial(V,Te);let $e=k.index;const Le=k.attributes.position;if($e===null){if(Le===void 0||Le.count===0)return}else if($e.count===0)return;let Ve=1;V.wireframe===!0&&($e=oe.getWireframeAttribute(k),Ve=2),(V.morphTargets||V.morphNormals)&&ze.update(ue,k,V,Re),te.setup(ue,V,Re,k,$e);let Ee,Ze=P;$e!==null&&(Ee=se.get($e),Ze=C,Ze.setIndex(Ee));const Yt=$e!==null?$e.count:Le.count,Et=k.drawRange.start*Ve,zn=k.drawRange.count*Ve,lt=Ue!==null?Ue.start*Ve:0,kn=Ue!==null?Ue.count*Ve:1/0,it=Math.max(Et,lt),No=Math.min(Yt,Et+zn,lt+kn)-1,Pt=Math.max(0,No-it+1);if(Pt!==0){if(ue.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*Me()),Ze.setMode(1)):Ze.setMode(4);else if(ue.isLine){let nn=V.linewidth;nn===void 0&&(nn=1),be.setLineWidth(nn*Me()),ue.isLineSegments?Ze.setMode(1):ue.isLineLoop?Ze.setMode(2):Ze.setMode(3)}else ue.isPoints?Ze.setMode(0):ue.isSprite&&Ze.setMode(4);if(ue.isInstancedMesh)Ze.renderInstances(it,Pt,ue.count);else if(k.isInstancedBufferGeometry){const nn=Math.min(k.instanceCount,k._maxInstanceCount);Ze.renderInstances(it,Pt,nn)}else Ze.render(it,Pt)}},this.compile=function(T,G){d=X.get(T),d.init(),T.traverseVisible(function(k){k.isLight&&k.layers.test(G.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(),T.traverse(function(k){const V=k.material;if(V)if(Array.isArray(V))for(let ue=0;ue<V.length;ue++){const Ue=V[ue];Io(Ue,T,k)}else Io(V,T,k)})};let Ut=null;function Nf(T){Ut&&Ut(T)}function Ql(){On.stop()}function ec(){On.start()}const On=new Md;On.setAnimationLoop(Nf),typeof window<"u"&&On.setContext(window),this.setAnimationLoop=function(T){Ut=T,J.setAnimationLoop(T),T===null?On.stop():On.start()},J.addEventListener("sessionstart",Ql),J.addEventListener("sessionend",ec),this.render=function(T,G){let k,V;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),k=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),V=arguments[3]),G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(G=J.getCamera(G)),T.isScene===!0&&T.onBeforeRender(x,T,G,k||b),d=X.get(T,p.length),d.init(),p.push(d),ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),W.setFromProjectionMatrix(ae),$=this.localClippingEnabled,ee=Y.init(this.clippingPlanes,$,G),u=E.get(T,f.length),u.init(),f.push(u),tc(T,G,0,x.sortObjects),u.finish(),x.sortObjects===!0&&u.sort(z,F),ee===!0&&Y.beginShadows();const ue=d.state.shadowsArray;he.render(ue,T,G),d.setupLights(),d.setupLightsView(G),ee===!0&&Y.endShadows(),this.info.autoReset===!0&&this.info.reset(),k!==void 0&&this.setRenderTarget(k),me.render(u,T,G,V);const Ue=u.opaque,Te=u.transparent;Ue.length>0&&nc(Ue,T,G),Te.length>0&&nc(Te,T,G),b!==null&&(De.updateRenderTargetMipmap(b),De.updateMultisampleRenderTarget(b)),T.isScene===!0&&T.onAfterRender(x,T,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),te.resetDefaultState(),_=-1,S=null,p.pop(),p.length>0?d=p[p.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function tc(T,G,k,V){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){V&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const Te=ye.update(T),Re=T.material;Re.visible&&u.push(T,Te,Re,k,re.z,null)}}else if(T.isImmediateRenderObject)V&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae),u.push(T,null,T.material,k,re.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Oe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Oe.render.frame),!T.frustumCulled||W.intersectsObject(T))){V&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ae);const Te=ye.update(T),Re=T.material;if(Array.isArray(Re)){const $e=Te.groups;for(let Le=0,Ve=$e.length;Le<Ve;Le++){const Ee=$e[Le],Ze=Re[Ee.materialIndex];Ze&&Ze.visible&&u.push(T,Te,Ze,k,re.z,Ee)}}else Re.visible&&u.push(T,Te,Re,k,re.z,null)}}const Ue=T.children;for(let Te=0,Re=Ue.length;Te<Re;Te++)tc(Ue[Te],G,k,V)}function nc(T,G,k){const V=G.isScene===!0?G.overrideMaterial:null;for(let ue=0,Ue=T.length;ue<Ue;ue++){const Te=T[ue],Re=Te.object,$e=Te.geometry,Le=V===null?Te.material:V,Ve=Te.group;if(k.isArrayCamera){const Ee=k.cameras;for(let Ze=0,Yt=Ee.length;Ze<Yt;Ze++){const Et=Ee[Ze];Re.layers.test(Et.layers)&&(be.viewport(v.copy(Et.viewport)),d.setupLightsView(Et),ic(Re,G,Et,$e,Le,Ve))}}else ic(Re,G,k,$e,Le,Ve)}}function ic(T,G,k,V,ue,Ue){if(T.onBeforeRender(x,G,k,V,ue,Ue),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),T.isImmediateRenderObject){const Te=sc(k,G,ue,T);be.setMaterial(ue),te.reset(),tn(T,Te)}else x.renderBufferDirect(k,G,V,ue,T,Ue);T.onAfterRender(x,G,k,V,ue,Ue)}function Io(T,G,k){G.isScene!==!0&&(G=ve);const V=Pe.get(T),ue=d.state.lights,Ue=d.state.shadowsArray,Te=ue.state.version,Re=de.getParameters(T,ue.state,Ue,G,k),$e=de.getProgramCacheKey(Re);let Le=V.programs;V.environment=T.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=ne.get(T.envMap||V.environment),Le===void 0&&(T.addEventListener("dispose",We),Le=new Map,V.programs=Le);let Ve=Le.get($e);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===Te)return rc(T,Re),Ve}else Re.uniforms=de.getUniforms(T),T.onBuild(Re,x),T.onBeforeCompile(Re,x),Ve=de.acquireProgram(Re,$e),Le.set($e,Ve),V.uniforms=Re.uniforms;const Ee=V.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=Y.uniform),rc(T,Re),V.needsLights=Bf(T),V.lightsStateVersion=Te,V.needsLights&&(Ee.ambientLightColor.value=ue.state.ambient,Ee.lightProbe.value=ue.state.probe,Ee.directionalLights.value=ue.state.directional,Ee.directionalLightShadows.value=ue.state.directionalShadow,Ee.spotLights.value=ue.state.spot,Ee.spotLightShadows.value=ue.state.spotShadow,Ee.rectAreaLights.value=ue.state.rectArea,Ee.ltc_1.value=ue.state.rectAreaLTC1,Ee.ltc_2.value=ue.state.rectAreaLTC2,Ee.pointLights.value=ue.state.point,Ee.pointLightShadows.value=ue.state.pointShadow,Ee.hemisphereLights.value=ue.state.hemi,Ee.directionalShadowMap.value=ue.state.directionalShadowMap,Ee.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,Ee.spotShadowMap.value=ue.state.spotShadowMap,Ee.spotShadowMatrix.value=ue.state.spotShadowMatrix,Ee.pointShadowMap.value=ue.state.pointShadowMap,Ee.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Ze=Ve.getUniforms(),Yt=Rn.seqWithValue(Ze.seq,Ee);return V.currentProgram=Ve,V.uniformsList=Yt,Ve}function rc(T,G){const k=Pe.get(T);k.outputEncoding=G.outputEncoding,k.instancing=G.instancing,k.numClippingPlanes=G.numClippingPlanes,k.numIntersection=G.numClipIntersection,k.vertexAlphas=G.vertexAlphas}function sc(T,G,k,V){G.isScene!==!0&&(G=ve),De.resetTextureUnits();const ue=G.fog,Ue=k.isMeshStandardMaterial?G.environment:null,Te=b===null?x.outputEncoding:b.texture.encoding,Re=ne.get(k.envMap||Ue),$e=k.vertexColors===!0&&V.geometry&&V.geometry.attributes.color&&V.geometry.attributes.color.itemSize===4,Le=Pe.get(k),Ve=d.state.lights;if(ee===!0&&($===!0||T!==S)){const it=T===S&&k.id===_;Y.setState(k,T,it)}let Ee=!1;k.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ve.state.version||Le.outputEncoding!==Te||V.isInstancedMesh&&Le.instancing===!1||!V.isInstancedMesh&&Le.instancing===!0||Le.envMap!==Re||k.fog&&Le.fog!==ue||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Y.numPlanes||Le.numIntersection!==Y.numIntersection)||Le.vertexAlphas!==$e)&&(Ee=!0):(Ee=!0,Le.__version=k.version);let Ze=Le.currentProgram;Ee===!0&&(Ze=Io(k,G,V));let Yt=!1,Et=!1,zn=!1;const lt=Ze.getUniforms(),kn=Le.uniforms;if(be.useProgram(Ze.program)&&(Yt=!0,Et=!0,zn=!0),k.id!==_&&(_=k.id,Et=!0),Yt||S!==T){if(lt.setValue(H,"projectionMatrix",T.projectionMatrix),Se.logarithmicDepthBuffer&&lt.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),S!==T&&(S=T,Et=!0,zn=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const it=lt.map.cameraPosition;it!==void 0&&it.setValue(H,re.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&lt.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||k.skinning)&&lt.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(k.skinning){lt.setOptional(H,V,"bindMatrix"),lt.setOptional(H,V,"bindMatrixInverse");const it=V.skeleton;if(it){const No=it.bones;if(Se.floatVertexTextures){if(it.boneTexture===null){let Pt=Math.sqrt(No.length*4);Pt=hd(Pt),Pt=Math.max(Pt,4);const nn=new Float32Array(Pt*Pt*4);nn.set(it.boneMatrices);const Of=new Vi(nn,Pt,Pt,Ot,cn);it.boneMatrices=nn,it.boneTexture=Of,it.boneTextureSize=Pt}lt.setValue(H,"boneTexture",it.boneTexture,De),lt.setValue(H,"boneTextureSize",it.boneTextureSize)}else lt.setOptional(H,it,"boneMatrices")}}return(Et||Le.receiveShadow!==V.receiveShadow)&&(Le.receiveShadow=V.receiveShadow,lt.setValue(H,"receiveShadow",V.receiveShadow)),Et&&(lt.setValue(H,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&Ff(kn,zn),ue&&k.fog&&L.refreshFogUniforms(kn,ue),L.refreshMaterialUniforms(kn,k,U,O),Rn.upload(H,Le.uniformsList,kn,De)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Rn.upload(H,Le.uniformsList,kn,De),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&lt.setValue(H,"center",V.center),lt.setValue(H,"modelViewMatrix",V.modelViewMatrix),lt.setValue(H,"normalMatrix",V.normalMatrix),lt.setValue(H,"modelMatrix",V.matrixWorld),Ze}function Ff(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Bf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTarget=function(T,G=0,k=0){b=T,g=G,m=k,T&&Pe.get(T).__webglFramebuffer===void 0&&De.setupRenderTarget(T);let V=null,ue=!1,Ue=!1;if(T){const Te=T.texture;(Te.isDataTexture3D||Te.isDataTexture2DArray)&&(Ue=!0);const Re=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(V=Re[G],ue=!0):T.isWebGLMultisampleRenderTarget?V=Pe.get(T).__webglMultisampledFramebuffer:V=Re,v.copy(T.viewport),A.copy(T.scissor),R=T.scissorTest}else v.copy(N).multiplyScalar(U).floor(),A.copy(B).multiplyScalar(U).floor(),R=D;if(be.bindFramebuffer(36160,V),be.viewport(v),be.scissor(A),be.setScissorTest(R),ue){const Te=Pe.get(T.texture);H.framebufferTexture2D(36160,36064,34069+G,Te.__webglTexture,k)}else if(Ue){const Te=Pe.get(T.texture),Re=G||0;H.framebufferTextureLayer(36160,36064,Te.__webglTexture,k||0,Re)}},this.readRenderTargetPixels=function(T,G,k,V,ue,Ue,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){be.bindFramebuffer(36160,Re);try{const $e=T.texture,Le=$e.format,Ve=$e.type;if(Le!==Ot&&Q.convert(Le)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ee=Ve===br&&(Be.has("EXT_color_buffer_half_float")||Se.isWebGL2&&Be.has("EXT_color_buffer_float"));if(Ve!==$i&&Q.convert(Ve)!==H.getParameter(35738)&&!(Ve===cn&&(Se.isWebGL2||Be.has("OES_texture_float")||Be.has("WEBGL_color_buffer_float")))&&!Ee){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H.checkFramebufferStatus(36160)===36053?G>=0&&G<=T.width-V&&k>=0&&k<=T.height-ue&&H.readPixels(G,k,V,ue,Q.convert(Le),Q.convert(Ve),Ue):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const $e=b!==null?Pe.get(b).__webglFramebuffer:null;be.bindFramebuffer(36160,$e)}}},this.copyFramebufferToTexture=function(T,G,k=0){const V=Math.pow(2,-k),ue=Math.floor(G.image.width*V),Ue=Math.floor(G.image.height*V),Te=Q.convert(G.format);De.setTexture2D(G,0),H.copyTexImage2D(3553,k,Te,T.x,T.y,ue,Ue,0),be.unbindTexture()},this.copyTextureToTexture=function(T,G,k,V=0){const ue=G.image.width,Ue=G.image.height,Te=Q.convert(k.format),Re=Q.convert(k.type);De.setTexture2D(k,0),H.pixelStorei(37440,k.flipY),H.pixelStorei(37441,k.premultiplyAlpha),H.pixelStorei(3317,k.unpackAlignment),G.isDataTexture?H.texSubImage2D(3553,V,T.x,T.y,ue,Ue,Te,Re,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(3553,V,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Te,G.mipmaps[0].data):H.texSubImage2D(3553,V,T.x,T.y,Te,Re,G.image),V===0&&k.generateMipmaps&&H.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(T,G,k,V,ue=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:Ue,height:Te,data:Re}=k.image,$e=Q.convert(V.format),Le=Q.convert(V.type);let Ve;if(V.isDataTexture3D)De.setTexture3D(V,0),Ve=32879;else if(V.isDataTexture2DArray)De.setTexture2DArray(V,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,V.flipY),H.pixelStorei(37441,V.premultiplyAlpha),H.pixelStorei(3317,V.unpackAlignment);const Ee=H.getParameter(3314),Ze=H.getParameter(32878),Yt=H.getParameter(3316),Et=H.getParameter(3315),zn=H.getParameter(32877);H.pixelStorei(3314,Ue),H.pixelStorei(32878,Te),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),H.texSubImage3D(Ve,ue,G.x,G.y,G.z,T.max.x-T.min.x+1,T.max.y-T.min.y+1,T.max.z-T.min.z+1,$e,Le,Re),H.pixelStorei(3314,Ee),H.pixelStorei(32878,Ze),H.pixelStorei(3316,Yt),H.pixelStorei(3315,Et),H.pixelStorei(32877,zn),ue===0&&V.generateMipmaps&&H.generateMipmap(Ve),be.unbindTexture()},this.initTexture=function(T){De.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){g=0,m=0,b=null,be.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Id extends Xe{}Id.prototype.isWebGL1Renderer=!0;class qr{constructor(e,t=25e-5){this.name="",this.color=new fe(e),this.density=t}clone(){return new qr(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}qr.prototype.isFogExp2=!0;class Zr{constructor(e,t=1,n=1e3){this.name="",this.color=new fe(e),this.near=t,this.far=n}clone(){return new Zr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Zr.prototype.isFog=!0;class _o extends Fe{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}_o.prototype.isScene=!0;class yn{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ui,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=zt(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new yn(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}yn.prototype.isInterleavedBuffer=!0;const et=new w;class Dn{constructor(e,t,n,i){this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.x=this.getX(t),et.y=this.getY(t),et.z=this.getZ(t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ne(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dn(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Dn.prototype.isInterleavedBufferAttribute=!0;class bo extends at{constructor(e){super(),this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}bo.prototype.isSpriteMaterial=!0;let Si;const sr=new w,Ti=new w,Ei=new w,Ai=new Z,or=new Z,Nd=new xe,gs=new w,ar=new w,xs=new w,Ic=new Z,oa=new Z,Nc=new Z;class wo extends Fe{constructor(e){if(super(),this.type="Sprite",Si===void 0){Si=new _e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yn(t,5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute("position",new Dn(n,3,0,!1)),Si.setAttribute("uv",new Dn(n,2,3,!1))}this.geometry=Si,this.material=e!==void 0?e:new bo,this.center=new Z(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ti.setFromMatrixScale(this.matrixWorld),Nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ei.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ti.multiplyScalar(-Ei.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ys(gs.set(-.5,-.5,0),Ei,o,Ti,i,r),ys(ar.set(.5,-.5,0),Ei,o,Ti,i,r),ys(xs.set(.5,.5,0),Ei,o,Ti,i,r),Ic.set(0,0),oa.set(1,0),Nc.set(1,1);let a=e.ray.intersectTriangle(gs,ar,xs,!1,sr);if(a===null&&(ys(ar.set(-.5,.5,0),Ei,o,Ti,i,r),oa.set(0,1),a=e.ray.intersectTriangle(gs,xs,ar,!1,sr),a===null))return;const c=e.ray.origin.distanceTo(sr);c<e.near||c>e.far||t.push({distance:c,point:sr.clone(),uv:nt.getUV(sr,gs,ar,xs,Ic,oa,Nc,new Z),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}wo.prototype.isSprite=!0;function ys(s,e,t,n,i,r){Ai.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(or.x=r*Ai.x-i*Ai.y,or.y=i*Ai.x+r*Ai.y):or.copy(Ai),s.copy(e),s.x+=or.x,s.y+=or.y,s.applyMatrix4(Nd)}const vs=new w,Fc=new w;class Fd extends Fe{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0){t=Math.abs(t);const n=this.levels;let i;for(i=0;i<n.length&&!(t<n[i].distance);i++);return n.splice(i,0,{distance:t,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i&&!(e<t[n].distance);n++);return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vs.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(vs);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){vs.setFromMatrixPosition(e.matrixWorld),Fc.setFromMatrixPosition(this.matrixWorld);const n=vs.distanceTo(Fc)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r&&n>=t[i].distance;i++)t[i-1].object.visible=!1,t[i].object.visible=!0;for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];t.object.levels.push({object:o.object.uuid,distance:o.distance})}return t}}const Bc=new w,Oc=new qe,zc=new qe,jx=new w,kc=new xe;class Mo extends ot{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xe,this.bindMatrixInverse=new xe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Oc.fromBufferAttribute(i.attributes.skinIndex,e),zc.fromBufferAttribute(i.attributes.skinWeight,e),Bc.fromBufferAttribute(i.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=zc.getComponent(r);if(o!==0){const a=Oc.getComponent(r);kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(jx.copy(Bc).applyMatrix4(kc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}Mo.prototype.isSkinnedMesh=!0;class So extends Fe{constructor(){super(),this.type="Bone"}}So.prototype.isBone=!0;const Uc=new xe,Kx=new xe;class To{constructor(e=[],t=[]){this.uuid=zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Kx;Uc.multiplyMatrices(a,t[r]),Uc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new To(this.bones,this.boneInverses)}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new So),this.bones.push(o),this.boneInverses.push(new xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Gc=new xe,Hc=new xe,_s=[],lr=new ot;class fl extends ot{constructor(e,t,n){super(e,t),this.instanceMatrix=new Ne(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Gc),Hc.multiplyMatrices(n,Gc),lr.matrixWorld=Hc,lr.raycast(e,_s);for(let o=0,a=_s.length;o<a;o++){const c=_s[o];c.instanceId=r,c.object=this,t.push(c)}_s.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ne(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}fl.prototype.isInstancedMesh=!0;class xt extends at{constructor(e){super(),this.type="LineBasicMaterial",this.color=new fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}xt.prototype.isLineBasicMaterial=!0;const Vc=new w,Wc=new w,qc=new xe,aa=new Bn,bs=new Fn;class fn extends Fe{constructor(e=new _e,t=new xt){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vc.fromBufferAttribute(t,i-1),Wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vc.distanceTo(Wc);e.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(i),bs.radius+=r,e.ray.intersectsSphere(bs)===!1)return;qc.copy(i).invert(),aa.copy(e.ray).applyMatrix4(qc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,h=new w,u=new w,d=new w,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const p=n.index,y=n.attributes.position;if(p!==null){const g=Math.max(0,o.start),m=Math.min(p.count,o.start+o.count);for(let b=g,_=m-1;b<_;b+=f){const S=p.getX(b),v=p.getX(b+1);if(l.fromBufferAttribute(y,S),h.fromBufferAttribute(y,v),aa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,o.start),m=Math.min(y.count,o.start+o.count);for(let b=g,_=m-1;b<_;b+=f){if(l.fromBufferAttribute(y,b),h.fromBufferAttribute(y,b+1),aa.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}fn.prototype.isLine=!0;const Zc=new w,Xc=new w;class It extends fn{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Zc.fromBufferAttribute(t,i),Xc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zc.distanceTo(Xc);e.setAttribute("lineDistance",new pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}It.prototype.isLineSegments=!0;class pl extends fn{constructor(e,t){super(e,t),this.type="LineLoop"}}pl.prototype.isLineLoop=!0;class li extends at{constructor(e){super(),this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}li.prototype.isPointsMaterial=!0;const $c=new xe,Ga=new Bn,ws=new Fn,Ms=new w;class Xr extends Fe{constructor(e=new _e,t=new li){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;$c.copy(i).invert(),Ga.copy(e.ray).applyMatrix4($c);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a;if(n.isBufferGeometry){const l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=d,x=f;p<x;p++){const y=l.getX(p);Ms.fromBufferAttribute(u,y),Yc(Ms,y,c,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)Ms.fromBufferAttribute(u,p),Yc(Ms,p,c,i,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Xr.prototype.isPoints=!0;function Yc(s,e,t,n,i,r,o){const a=Ga.distanceSqToPoint(s);if(a<t){const c=new w;Ga.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Bd extends ft{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.format=a!==void 0?a:Ln,this.minFilter=o!==void 0?o:ut,this.magFilter=r!==void 0?r:ut,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Bd.prototype.isVideoTexture=!0;class ml extends ft{constructor(e,t,n,i,r,o,a,c,l,h,u,d){super(null,o,a,c,l,h,i,r,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}ml.prototype.isCompressedTexture=!0;class Od extends ft{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.needsUpdate=!0}}Od.prototype.isCanvasTexture=!0;class zd extends ft{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:ti,h!==ti&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=_r),n===void 0&&h===ki&&(n=Oi),super(null,i,r,o,a,c,h,n,l),this.image={width:e,height:t},this.magFilter=a!==void 0?a:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1}}zd.prototype.isDepthTexture=!0;class Js extends _e{constructor(e=1,t=8,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new w,h=new Z;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(c,2))}}class Wi extends _e{constructor(e=1,t=1,n=1,i=8,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const x=[],y=n/2;let g=0;m(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function m(){const _=new w,S=new w;let v=0;const A=(t-e)/n;for(let R=0;R<=r;R++){const I=[],O=R/r,U=O*(t-e)+e;for(let z=0;z<=i;z++){const F=z/i,N=F*c+a,B=Math.sin(N),D=Math.cos(N);S.x=U*B,S.y=-O*n+y,S.z=U*D,u.push(S.x,S.y,S.z),_.set(B,A,D).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-O),I.push(p++)}x.push(I)}for(let R=0;R<i;R++)for(let I=0;I<r;I++){const O=x[I][R],U=x[I+1][R],z=x[I+1][R+1],F=x[I][R+1];h.push(O,U,F),h.push(U,z,F),v+=6}l.addGroup(g,v,0),g+=v}function b(_){const S=p,v=new Z,A=new w;let R=0;const I=_===!0?e:t,O=_===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,y*O,0),d.push(0,O,0),f.push(.5,.5),p++;const U=p;for(let z=0;z<=i;z++){const N=z/i*c+a,B=Math.cos(N),D=Math.sin(N);A.x=I*D,A.y=y*O,A.z=I*B,u.push(A.x,A.y,A.z),d.push(0,O,0),v.x=B*.5+.5,v.y=D*.5*O+.5,f.push(v.x,v.y),p++}for(let z=0;z<i;z++){const F=S+z,N=U+z;_===!0?h.push(N,N+1,F):h.push(N+1,N,F),R+=3}l.addGroup(g,R,_===!0?1:2),g+=R}}}class js extends Wi{constructor(e=1,t=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}}class In extends _e{constructor(e,t,n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(r.slice(),3)),this.setAttribute("uv",new pe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const b=new w,_=new w,S=new w;for(let v=0;v<t.length;v+=3)f(t[v+0],b),f(t[v+1],_),f(t[v+2],S),c(b,_,S,m)}function c(m,b,_,S){const v=S+1,A=[];for(let R=0;R<=v;R++){A[R]=[];const I=m.clone().lerp(_,R/v),O=b.clone().lerp(_,R/v),U=v-R;for(let z=0;z<=U;z++)z===0&&R===v?A[R][z]=I:A[R][z]=I.clone().lerp(O,z/U)}for(let R=0;R<v;R++)for(let I=0;I<2*(v-R)-1;I++){const O=Math.floor(I/2);I%2===0?(d(A[R][O+1]),d(A[R+1][O]),d(A[R][O])):(d(A[R][O+1]),d(A[R+1][O+1]),d(A[R+1][O]))}}function l(m){const b=new w;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(m),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){const m=new w;for(let b=0;b<r.length;b+=3){m.x=r[b+0],m.y=r[b+1],m.z=r[b+2];const _=y(m)/2/Math.PI+.5,S=g(m)/Math.PI+.5;o.push(_,1-S)}p(),u()}function u(){for(let m=0;m<o.length;m+=6){const b=o[m+0],_=o[m+2],S=o[m+4],v=Math.max(b,_,S),A=Math.min(b,_,S);v>.9&&A<.1&&(b<.2&&(o[m+0]+=1),_<.2&&(o[m+2]+=1),S<.2&&(o[m+4]+=1))}}function d(m){r.push(m.x,m.y,m.z)}function f(m,b){const _=m*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){const m=new w,b=new w,_=new w,S=new w,v=new Z,A=new Z,R=new Z;for(let I=0,O=0;I<r.length;I+=9,O+=6){m.set(r[I+0],r[I+1],r[I+2]),b.set(r[I+3],r[I+4],r[I+5]),_.set(r[I+6],r[I+7],r[I+8]),v.set(o[O+0],o[O+1]),A.set(o[O+2],o[O+3]),R.set(o[O+4],o[O+5]),S.copy(m).add(b).add(_).divideScalar(3);const U=y(S);x(v,O+0,m,U),x(A,O+2,b,U),x(R,O+4,_,U)}}function x(m,b,_,S){S<0&&m.x===1&&(o[b]=m.x-1),_.x===0&&_.z===0&&(o[b]=S/2/Math.PI+.5)}function y(m){return Math.atan2(m.z,-m.x)}function g(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}}class Ks extends In{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}}const Ss=new w,Ts=new w,la=new w,Es=new nt;class gl extends _e{constructor(e,t){if(super(),this.type="EdgesGeometry",this.parameters={thresholdAngle:t},t=t!==void 0?t:1,e.isGeometry===!0){console.error("THREE.EdgesGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const i=Math.pow(10,4),r=Math.cos(ni*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){o?(l[0]=o.getX(p),l[1]=o.getX(p+1),l[2]=o.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:x,b:y,c:g}=Es;if(x.fromBufferAttribute(a,l[0]),y.fromBufferAttribute(a,l[1]),g.fromBufferAttribute(a,l[2]),Es.getNormal(la),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let m=0;m<3;m++){const b=(m+1)%3,_=u[m],S=u[b],v=Es[h[m]],A=Es[h[b]],R=`${_}_${S}`,I=`${S}_${_}`;I in d&&d[I]?(la.dot(d[I].normal)<=r&&(f.push(v.x,v.y,v.z),f.push(A.x,A.y,A.z)),d[I]=null):R in d||(d[R]={index0:l[m],index1:l[b],normal:la.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:y}=d[p];Ss.fromBufferAttribute(a,x),Ts.fromBufferAttribute(a,y),f.push(Ss.x,Ss.y,Ss.z),f.push(Ts.x,Ts.y,Ts.z)}this.setAttribute("position",new pe(f,3))}}const Qx={triangulate:function(s,e,t){t=t||2;const n=e&&e.length,i=n?e[0]*t:s.length;let r=kd(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=ry(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?1/f:0}return Ar(r,o,t,a,c,f),o}};function kd(s,e,t,n,i){let r,o;if(i===my(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Jc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Jc(r,s[r],s[r+1],o);return o&&Eo(o,o.next)&&(Rr(o),o=o.next),o}function Nn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Eo(t,t.next)||je(t.prev,t,t.next)===0)){if(Rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ar(s,e,t,n,i,r,o){if(!s)return;!o&&r&&cy(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?ty(s,n,i,r):ey(s)){e.push(c.i/t),e.push(s.i/t),e.push(l.i/t),Rr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=ny(Nn(s),e,t),Ar(s,e,t,n,i,r,2)):o===2&&iy(s,e,t,n,i,r):Ar(Nn(s),e,t,n,i,r,1);break}}}function ey(s){const e=s.prev,t=s,n=s.next;if(je(e,t,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(Ii(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)&&je(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function ty(s,e,t,n){const i=s.prev,r=s,o=s.next;if(je(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,c=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,l=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=Ha(a,c,e,t,n),d=Ha(l,h,e,t,n);let f=s.prevZ,p=s.nextZ;for(;f&&f.z>=u&&p&&p.z<=d;){if(f!==s.prev&&f!==s.next&&Ii(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&je(f.prev,f,f.next)>=0||(f=f.prevZ,p!==s.prev&&p!==s.next&&Ii(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&je(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&Ii(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&je(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==s.prev&&p!==s.next&&Ii(i.x,i.y,r.x,r.y,o.x,o.y,p.x,p.y)&&je(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function ny(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Eo(i,r)&&Ud(i,n,n.next,r)&&Lr(i,r)&&Lr(r,i)&&(e.push(i.i/t),e.push(n.i/t),e.push(r.i/t),Rr(n),Rr(n.next),n=s=r),n=n.next}while(n!==s);return Nn(n)}function iy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dy(o,a)){let c=Gd(o,a);o=Nn(o,o.next),c=Nn(c,c.next),Ar(o,e,t,n,i,r),Ar(c,e,t,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function ry(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=kd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(uy(l));for(i.sort(sy),r=0;r<i.length;r++)oy(i[r],t),t=Nn(t,t.next);return t}function sy(s,e){return s.x-e.x}function oy(s,e){if(e=ay(s,e),e){const t=Gd(e,s);Nn(e,e.next),Nn(t,t.next)}}function ay(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r){if(r=d,d===n){if(i===t.y)return t;if(i===t.next.y)return t.next}o=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!o)return null;if(n===r)return o;const a=o,c=o.x,l=o.y;let h=1/0,u;t=o;do n>=t.x&&t.x>=c&&n!==t.x&&Ii(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)&&(u=Math.abs(i-t.y)/(n-t.x),Lr(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&ly(o,t)))&&(o=t,h=u)),t=t.next;while(t!==a);return o}function ly(s,e){return je(s.prev,s,e.prev)<0&&je(e.next,s,s.next)<0}function cy(s,e,t,n){let i=s;do i.z===null&&(i.z=Ha(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hy(i)}function hy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ha(s,e,t,n,i){return s=32767*(s-t)*i,e=32767*(e-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function uy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ii(s,e,t,n,i,r,o,a){return(i-o)*(e-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(t-o)*(e-a)>=0&&(t-o)*(r-a)-(i-o)*(n-a)>=0}function dy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!fy(s,e)&&(Lr(s,e)&&Lr(e,s)&&py(s,e)&&(je(s.prev,s,e.prev)||je(s,e.prev,e))||Eo(s,e)&&je(s.prev,s,s.next)>0&&je(e.prev,e,e.next)>0)}function je(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Eo(s,e){return s.x===e.x&&s.y===e.y}function Ud(s,e,t,n){const i=Ls(je(s,e,t)),r=Ls(je(s,e,n)),o=Ls(je(t,n,s)),a=Ls(je(t,n,e));return!!(i!==r&&o!==a||i===0&&As(s,t,e)||r===0&&As(s,n,e)||o===0&&As(t,s,n)||a===0&&As(t,e,n))}function As(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ls(s){return s>0?1:s<0?-1:0}function fy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Lr(s,e){return je(s.prev,s,s.next)<0?je(s,e,s.next)>=0&&je(s,s.prev,e)>=0:je(s,e,s.prev)<0||je(s,s.next,e)<0}function py(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Gd(s,e){const t=new Va(s.i,s.x,s.y),n=new Va(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Jc(s,e,t,n){const i=new Va(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Rr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Va(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function my(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Qt{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Qt.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];jc(e),Kc(n,e);let o=e.length;t.forEach(jc);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Kc(n,t[c]);const a=Qx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function jc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Kc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class pn extends _e{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:100,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:6,p=t.bevelSize!==void 0?t.bevelSize:f-2,x=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:gy;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let b,_=!1,S,v,A,R;g&&(b=g.getSpacedPoints(h),_=!0,d=!1,S=g.computeFrenetFrames(h,!1),v=new w,A=new w,R=new w),d||(y=0,f=0,p=0,x=0);const I=a.extractPoints(l);let O=I.shape;const U=I.holes;if(!Qt.isClockWise(O)){O=O.reverse();for(let ne=0,se=U.length;ne<se;ne++){const oe=U[ne];Qt.isClockWise(oe)&&(U[ne]=oe.reverse())}}const F=Qt.triangulateShape(O,U),N=O;for(let ne=0,se=U.length;ne<se;ne++){const oe=U[ne];O=O.concat(oe)}function B(ne,se,oe){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().multiplyScalar(oe).add(ne)}const D=O.length,W=F.length;function ee(ne,se,oe){let ye,de,L;const E=ne.x-se.x,X=ne.y-se.y,Y=oe.x-ne.x,he=oe.y-ne.y,me=E*E+X*X,ze=E*he-X*Y;if(Math.abs(ze)>Number.EPSILON){const P=Math.sqrt(me),C=Math.sqrt(Y*Y+he*he),Q=se.x-X/P,te=se.y+E/P,ge=oe.x-he/C,J=oe.y+Y/C,we=((ge-Q)*he-(J-te)*Y)/(E*he-X*Y);ye=Q+E*we-ne.x,de=te+X*we-ne.y;const He=ye*ye+de*de;if(He<=2)return new Z(ye,de);L=Math.sqrt(He/2)}else{let P=!1;E>Number.EPSILON?Y>Number.EPSILON&&(P=!0):E<-Number.EPSILON?Y<-Number.EPSILON&&(P=!0):Math.sign(X)===Math.sign(he)&&(P=!0),P?(ye=-X,de=E,L=Math.sqrt(me)):(ye=E,de=X,L=Math.sqrt(me/2))}return new Z(ye/L,de/L)}const $=[];for(let ne=0,se=N.length,oe=se-1,ye=ne+1;ne<se;ne++,oe++,ye++)oe===se&&(oe=0),ye===se&&(ye=0),$[ne]=ee(N[ne],N[oe],N[ye]);const ae=[];let re,ve=$.concat();for(let ne=0,se=U.length;ne<se;ne++){const oe=U[ne];re=[];for(let ye=0,de=oe.length,L=de-1,E=ye+1;ye<de;ye++,L++,E++)L===de&&(L=0),E===de&&(E=0),re[ye]=ee(oe[ye],oe[L],oe[E]);ae.push(re),ve=ve.concat(re)}for(let ne=0;ne<y;ne++){const se=ne/y,oe=f*Math.cos(se*Math.PI/2),ye=p*Math.sin(se*Math.PI/2)+x;for(let de=0,L=N.length;de<L;de++){const E=B(N[de],$[de],ye);Se(E.x,E.y,-oe)}for(let de=0,L=U.length;de<L;de++){const E=U[de];re=ae[de];for(let X=0,Y=E.length;X<Y;X++){const he=B(E[X],re[X],ye);Se(he.x,he.y,-oe)}}}const Me=p+x;for(let ne=0;ne<D;ne++){const se=d?B(O[ne],ve[ne],Me):O[ne];_?(A.copy(S.normals[0]).multiplyScalar(se.x),v.copy(S.binormals[0]).multiplyScalar(se.y),R.copy(b[0]).add(A).add(v),Se(R.x,R.y,R.z)):Se(se.x,se.y,0)}for(let ne=1;ne<=h;ne++)for(let se=0;se<D;se++){const oe=d?B(O[se],ve[se],Me):O[se];_?(A.copy(S.normals[ne]).multiplyScalar(oe.x),v.copy(S.binormals[ne]).multiplyScalar(oe.y),R.copy(b[ne]).add(A).add(v),Se(R.x,R.y,R.z)):Se(oe.x,oe.y,u/h*ne)}for(let ne=y-1;ne>=0;ne--){const se=ne/y,oe=f*Math.cos(se*Math.PI/2),ye=p*Math.sin(se*Math.PI/2)+x;for(let de=0,L=N.length;de<L;de++){const E=B(N[de],$[de],ye);Se(E.x,E.y,u+oe)}for(let de=0,L=U.length;de<L;de++){const E=U[de];re=ae[de];for(let X=0,Y=E.length;X<Y;X++){const he=B(E[X],re[X],ye);_?Se(he.x,he.y+b[h-1].y,b[h-1].x+oe):Se(he.x,he.y,u+oe)}}}H(),ke();function H(){const ne=i.length/3;if(d){let se=0,oe=D*se;for(let ye=0;ye<W;ye++){const de=F[ye];be(de[2]+oe,de[1]+oe,de[0]+oe)}se=h+y*2,oe=D*se;for(let ye=0;ye<W;ye++){const de=F[ye];be(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let se=0;se<W;se++){const oe=F[se];be(oe[2],oe[1],oe[0])}for(let se=0;se<W;se++){const oe=F[se];be(oe[0]+D*h,oe[1]+D*h,oe[2]+D*h)}}n.addGroup(ne,i.length/3-ne,0)}function ke(){const ne=i.length/3;let se=0;Be(N,se),se+=N.length;for(let oe=0,ye=U.length;oe<ye;oe++){const de=U[oe];Be(de,se),se+=de.length}n.addGroup(ne,i.length/3-ne,1)}function Be(ne,se){let oe=ne.length;for(;--oe>=0;){const ye=oe;let de=oe-1;de<0&&(de=ne.length-1);for(let L=0,E=h+y*2;L<E;L++){const X=D*L,Y=D*(L+1),he=se+ye+X,me=se+de+X,ze=se+de+Y,P=se+ye+Y;Oe(he,me,ze,P)}}}function Se(ne,se,oe){c.push(ne),c.push(se),c.push(oe)}function be(ne,se,oe){Pe(ne),Pe(se),Pe(oe);const ye=i.length/3,de=m.generateTopUV(n,i,ye-3,ye-2,ye-1);De(de[0]),De(de[1]),De(de[2])}function Oe(ne,se,oe,ye){Pe(ne),Pe(se),Pe(ye),Pe(se),Pe(oe),Pe(ye);const de=i.length/3,L=m.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);De(L[0]),De(L[1]),De(L[3]),De(L[1]),De(L[2]),De(L[3])}function Pe(ne){i.push(c[ne*3+0]),i.push(c[ne*3+1]),i.push(c[ne*3+2])}function De(ne){r.push(ne.x),r.push(ne.y)}}}toJSON(){const e=_e.prototype.toJSON.call(this),t=this.parameters.shapes,n=this.parameters.options;return xy(t,n,e)}}const gy={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new Z(r,o),new Z(a,c),new Z(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],x=e[r*3],y=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<.01?[new Z(o,1-c),new Z(l,1-u),new Z(d,1-p),new Z(x,1-g)]:[new Z(a,1-c),new Z(h,1-u),new Z(f,1-p),new Z(y,1-g)]}};function xy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qs extends In{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}}class eo extends _e{constructor(e,t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=_t(i,0,Math.PI*2);const r=[],o=[],a=[],c=1/t,l=new w,h=new Z;for(let u=0;u<=t;u++){const d=n+u*c*i,f=Math.sin(d),p=Math.cos(d);for(let x=0;x<=e.length-1;x++)l.x=e[x].x*f,l.y=e[x].y,l.z=e[x].x*p,o.push(l.x,l.y,l.z),h.x=u/t,h.y=x/(e.length-1),a.push(h.x,h.y)}for(let u=0;u<t;u++)for(let d=0;d<e.length-1;d++){const f=d+u*e.length,p=f,x=f+e.length,y=f+e.length+1,g=f+1;r.push(p,x,g),r.push(x,y,g)}if(this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.computeVertexNormals(),i===Math.PI*2){const u=this.attributes.normal.array,d=new w,f=new w,p=new w,x=t*e.length*3;for(let y=0,g=0;y<e.length;y++,g+=3)d.x=u[g+0],d.y=u[g+1],d.z=u[g+2],f.x=u[x+g+0],f.y=u[x+g+1],f.z=u[x+g+2],p.addVectors(d,f).normalize(),u[g+0]=u[x+g+0]=p.x,u[g+1]=u[x+g+1]=p.y,u[g+2]=u[x+g+2]=p.z}}}class Cr extends In{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}}class to extends _e{constructor(e,t,n){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:n};const i=[],r=[],o=[],a=[],c=1e-5,l=new w,h=new w,u=new w,d=new w,f=new w;e.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const p=t+1;for(let x=0;x<=n;x++){const y=x/n;for(let g=0;g<=t;g++){const m=g/t;e(m,y,h),r.push(h.x,h.y,h.z),m-c>=0?(e(m-c,y,u),d.subVectors(h,u)):(e(m+c,y,u),d.subVectors(u,h)),y-c>=0?(e(m,y-c,u),f.subVectors(h,u)):(e(m,y+c,u),f.subVectors(u,h)),l.crossVectors(d,f).normalize(),o.push(l.x,l.y,l.z),a.push(m,y)}}for(let x=0;x<n;x++)for(let y=0;y<t;y++){const g=x*p+y,m=x*p+y+1,b=(x+1)*p+y+1,_=(x+1)*p+y;i.push(g,m,_),i.push(m,b,_)}this.setIndex(i),this.setAttribute("position",new pe(r,3)),this.setAttribute("normal",new pe(o,3)),this.setAttribute("uv",new pe(a,2))}}class no extends _e{constructor(e=.5,t=1,n=8,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let u=e;const d=(t-e)/i,f=new w,p=new Z;for(let x=0;x<=i;x++){for(let y=0;y<=n;y++){const g=r+y/n*o;f.x=u*Math.cos(g),f.y=u*Math.sin(g),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<i;x++){const y=x*(n+1);for(let g=0;g<n;g++){const m=g+y,b=m,_=m+n+1,S=m+n+2,v=m+1;a.push(b,_,v),a.push(_,S,v)}}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2))}}class Pr extends _e{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new pe(i,3)),this.setAttribute("normal",new pe(r,3)),this.setAttribute("uv",new pe(o,2));function l(h){const u=i.length/3,d=h.extractPoints(t);let f=d.shape;const p=d.holes;Qt.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,g=p.length;y<g;y++){const m=p[y];Qt.isClockWise(m)===!0&&(p[y]=m.reverse())}const x=Qt.triangulateShape(f,p);for(let y=0,g=p.length;y<g;y++){const m=p[y];f=f.concat(m)}for(let y=0,g=f.length;y<g;y++){const m=f[y];i.push(m.x,m.y,0),r.push(0,0,1),o.push(m.x,m.y)}for(let y=0,g=x.length;y<g;y++){const m=x[y],b=m[0]+u,_=m[1]+u,S=m[2]+u;n.push(b,_,S),c+=3}}}toJSON(){const e=_e.prototype.toJSON.call(this),t=this.parameters.shapes;return yy(t,e)}}function yy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Dr extends _e{constructor(e=1,t=8,n=6,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,d=new w,f=[],p=[],x=[],y=[];for(let g=0;g<=n;g++){const m=[],b=g/n;let _=0;g==0&&o==0?_=.5/t:g==n&&c==Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){const v=S/t;u.x=-e*Math.cos(i+v*r)*Math.sin(o+b*a),u.y=e*Math.cos(o+b*a),u.z=e*Math.sin(i+v*r)*Math.sin(o+b*a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),y.push(v+_,1-b),m.push(l++)}h.push(m)}for(let g=0;g<n;g++)for(let m=0;m<t;m++){const b=h[g][m+1],_=h[g][m],S=h[g+1][m],v=h[g+1][m+1];(g!==0||o>0)&&f.push(b,_,v),(g!==n-1||c<Math.PI)&&f.push(_,S,v)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(y,2))}}class io extends In{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}}class ro extends pn{constructor(e,t={}){const n=t.font;if(!(n&&n.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new _e;const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t),this.type="TextGeometry"}}class so extends _e{constructor(e=1,t=.4,n=8,i=6,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new w,u=new w,d=new w;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const x=p/i*r,y=f/n*Math.PI*2;u.x=(e+t*Math.cos(y))*Math.cos(x),u.y=(e+t*Math.cos(y))*Math.sin(x),u.z=t*Math.sin(y),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const x=(i+1)*f+p-1,y=(i+1)*(f-1)+p-1,g=(i+1)*(f-1)+p,m=(i+1)*f+p;o.push(x,y,m),o.push(y,g,m)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}}class oo extends _e{constructor(e=1,t=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],c=[],l=[],h=[],u=new w,d=new w,f=new w,p=new w,x=new w,y=new w,g=new w;for(let b=0;b<=n;++b){const _=b/n*r*Math.PI*2;m(_,r,o,e,f),m(_+.01,r,o,e,p),y.subVectors(p,f),g.addVectors(p,f),x.crossVectors(y,g),g.crossVectors(x,y),x.normalize(),g.normalize();for(let S=0;S<=i;++S){const v=S/i*Math.PI*2,A=-t*Math.cos(v),R=t*Math.sin(v);u.x=f.x+(A*g.x+R*x.x),u.y=f.y+(A*g.y+R*x.y),u.z=f.z+(A*g.z+R*x.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(b/n),h.push(S/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){const S=(i+1)*(b-1)+(_-1),v=(i+1)*b+(_-1),A=(i+1)*b+_,R=(i+1)*(b-1)+_;a.push(S,v,R),a.push(v,A,R)}this.setIndex(a),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(h,2));function m(b,_,S,v,A){const R=Math.cos(b),I=Math.sin(b),O=S/_*b,U=Math.cos(O);A.x=v*(2+U)*.5*R,A.y=v*(2+U)*I*.5,A.z=v*Math.sin(O)*.5}}}class ao extends _e{constructor(e,t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new w,c=new w,l=new Z;let h=new w;const u=[],d=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function x(){for(let b=0;b<t;b++)y(b);y(r===!1?t:0),m(),g()}function y(b){h=e.getPointAt(b/t,h);const _=o.normals[b],S=o.binormals[b];for(let v=0;v<=i;v++){const A=v/i*Math.PI*2,R=Math.sin(A),I=-Math.cos(A);c.x=I*_.x+R*S.x,c.y=I*_.y+R*S.y,c.z=I*_.z+R*S.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let _=1;_<=i;_++){const S=(i+1)*(b-1)+(_-1),v=(i+1)*b+(_-1),A=(i+1)*b+_,R=(i+1)*(b-1)+_;p.push(S,v,R),p.push(v,A,R)}}function m(){for(let b=0;b<=t;b++)for(let _=0;_<=i;_++)l.x=b/t,l.y=_/i,f.push(l.x,l.y)}}toJSON(){const e=_e.prototype.toJSON.call(this);return e.path=this.parameters.path.toJSON(),e}}class xl extends _e{constructor(e){if(super(),this.type="WireframeGeometry",e.isGeometry===!0){console.error("THREE.WireframeGeometry no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return}const t=[],n=[0,0],i={},r=new w;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,x=d+f;p<x;p+=3)for(let y=0;y<3;y++){const g=a.getX(p+y),m=a.getX(p+(y+1)%3);n[0]=Math.min(g,m),n[1]=Math.max(g,m);const b=n[0]+","+n[1];i[b]===void 0&&(i[b]={index1:n[0],index2:n[1]})}}for(const l in i){const h=i[l];r.fromBufferAttribute(o,h.index1),t.push(r.x,r.y,r.z),r.fromBufferAttribute(o,h.index2),t.push(r.x,r.y,r.z)}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const h=3*a+l;r.fromBufferAttribute(o,h),t.push(r.x,r.y,r.z);const u=3*a+(l+1)%3;r.fromBufferAttribute(o,u),t.push(r.x,r.y,r.z)}}this.setAttribute("position",new pe(t,3))}}var At=Object.freeze({__proto__:null,BoxGeometry:ii,BoxBufferGeometry:ii,CircleGeometry:Js,CircleBufferGeometry:Js,ConeGeometry:js,ConeBufferGeometry:js,CylinderGeometry:Wi,CylinderBufferGeometry:Wi,DodecahedronGeometry:Ks,DodecahedronBufferGeometry:Ks,EdgesGeometry:gl,ExtrudeGeometry:pn,ExtrudeBufferGeometry:pn,IcosahedronGeometry:Qs,IcosahedronBufferGeometry:Qs,LatheGeometry:eo,LatheBufferGeometry:eo,OctahedronGeometry:Cr,OctahedronBufferGeometry:Cr,ParametricGeometry:to,ParametricBufferGeometry:to,PlaneGeometry:Er,PlaneBufferGeometry:Er,PolyhedronGeometry:In,PolyhedronBufferGeometry:In,RingGeometry:no,RingBufferGeometry:no,ShapeGeometry:Pr,ShapeBufferGeometry:Pr,SphereGeometry:Dr,SphereBufferGeometry:Dr,TetrahedronGeometry:io,TetrahedronBufferGeometry:io,TextGeometry:ro,TextBufferGeometry:ro,TorusGeometry:so,TorusBufferGeometry:so,TorusKnotGeometry:oo,TorusKnotBufferGeometry:oo,TubeGeometry:ao,TubeBufferGeometry:ao,WireframeGeometry:xl});class yl extends at{constructor(e){super(),this.type="ShadowMaterial",this.color=new fe(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}yl.prototype.isShadowMaterial=!0;class ji extends dn{constructor(e){super(e),this.type="RawShaderMaterial"}}ji.prototype.isRawShaderMaterial=!0;class Ao extends at{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}Ao.prototype.isMeshStandardMaterial=!0;class vl extends Ao{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=_t(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new fe).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}vl.prototype.isMeshPhysicalMaterial=!0;class _l extends at{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}_l.prototype.isMeshPhongMaterial=!0;class bl extends at{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}bl.prototype.isMeshToonMaterial=!0;class wl extends at{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}wl.prototype.isMeshNormalMaterial=!0;class Ml extends at{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}Ml.prototype.isMeshLambertMaterial=!0;class Sl extends at{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new fe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=si,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}Sl.prototype.isMeshMatcapMaterial=!0;class Tl extends xt{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Tl.prototype.isLineDashedMaterial=!0;var vy=Object.freeze({__proto__:null,ShadowMaterial:yl,SpriteMaterial:bo,RawShaderMaterial:ji,ShaderMaterial:dn,PointsMaterial:li,MeshPhysicalMaterial:vl,MeshStandardMaterial:Ao,MeshPhongMaterial:_l,MeshToonMaterial:bl,MeshNormalMaterial:wl,MeshLambertMaterial:Ml,MeshDepthMaterial:yo,MeshDistanceMaterial:vo,MeshBasicMaterial:xn,MeshMatcapMaterial:Sl,LineDashedMaterial:Tl,LineBasicMaterial:xt,Material:at});const Je={arraySlice:function(s,e,t){return Je.isTypedArray(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)},convertArray:function(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n},sortedArray:function(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i},flattenJSON:function(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,e,t,n,i=30){const r=s.clone();r.name=e;const o=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<t||p>=n)){u.push(l.times[f]);for(let x=0;x<h;++x)d.push(l.values[f*h+x])}}u.length!==0&&(l.times=Je.convertArray(u,l.times.constructor),l.values=Je.convertArray(d,l.values.constructor),o.push(l))}r.tracks=o;let a=1/0;for(let c=0;c<r.tracks.length;++c)a>r.tracks[c].times[0]&&(a=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let o=0;o<i;++o){const a=t.tracks[o],c=a.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=a.times.length-1;let x;if(r<=a.times[0]){const g=h,m=u-h;x=Je.arraySlice(a.values,g,m)}else if(r>=a.times[p]){const g=p*u+h,m=g+u-h;x=Je.arraySlice(a.values,g,m)}else{const g=a.createInterpolant(),m=h,b=u-h;g.evaluate(r),x=Je.arraySlice(g.resultBuffer,m,b)}c==="quaternion"&&new st().fromArray(x).normalize().conjugate().toArray(x);const y=l.times.length;for(let g=0;g<y;++g){const m=g*f+d;if(c==="quaternion")st.multiplyQuaternionsFlat(l.values,m,x,0,l.values,m);else{const b=f-d*2;for(let _=0;_<b;++_)l.values[m+_]-=x[_]}}}return s.blendMode=rl,s}};class mn{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,r)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,i);if(i===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,r,e)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}mn.prototype.beforeStart_=mn.prototype.copySampleValue_;mn.prototype.afterEnd_=mn.prototype.copySampleValue_;class Hd extends mn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jn,endingEnd:jn}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Kn:r=e,a=2*t-n;break;case Sr:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Kn:o=e,c=2*n-t;break;case Sr:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),x=p*p,y=x*p,g=-d*y+2*d*x-d*p,m=(1+d)*y+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-f)*y+(1.5+f)*x+.5*p,_=f*y-f*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+m*o[l+S]+b*o[c+S]+_*o[u+S];return r}}class El extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}}class Vd extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $t{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Je.convertArray(t,this.TimeBufferType),this.values=Je.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Je.convertArray(e.times,Array),values:Je.convertArray(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case Us:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return Us}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=Je.arraySlice(n,r,o),this.values=Je.arraySlice(this.values,r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Je.isTypedArray(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=Je.arraySlice(this.times),t=Je.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Us,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(i)c=!0;else{const u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=Je.arraySlice(e,0,o),this.values=Je.arraySlice(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Je.arraySlice(this.times,0),t=Je.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$t.prototype.TimeBufferType=Float32Array;$t.prototype.ValueBufferType=Float32Array;$t.prototype.DefaultInterpolation=Mr;class ci extends $t{}ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=wr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;class Al extends $t{}Al.prototype.ValueTypeName="color";class Ir extends $t{}Ir.prototype.ValueTypeName="number";class Wd extends mn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let h=l+a;l!==h;l+=4)st.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Ki extends $t{InterpolantFactoryMethodLinear(e){return new Wd(this.times,this.values,this.getValueSize(),e)}}Ki.prototype.ValueTypeName="quaternion";Ki.prototype.DefaultInterpolation=Mr;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class hi extends $t{}hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=wr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;class Nr extends $t{}Nr.prototype.ValueTypeName="vector";class Fr{constructor(e,t=-1,n,i=ho){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(by(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push($t.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Je.getKeyframeOrder(c);c=Je.sortedArray(c,1,h),l=Je.sortedArray(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,x){if(f.length!==0){const y=[],g=[];Je.flattenJSON(f,y,g,p),y.length!==0&&x.push(new u(d,y,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(const x in f){const y=[],g=[];for(let m=0;m!==d[p].morphTargets.length;++m){const b=d[p];y.push(b.time),g.push(b.morphTarget===x?1:0)}i.push(new Ir(".morphTargetInfluence["+x+"]",y,g))}c=f.length*o}else{const f=".bones["+t[u].name+"]";n(Nr,f+".position",d,"pos",i),n(Ki,f+".quaternion",d,"rot",i),n(Nr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _y(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Nr;case"color":return Al;case"quaternion":return Ki;case"bool":case"boolean":return ci;case"string":return hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function by(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_y(s.type);if(s.times===void 0){const t=[],n=[];Je.flattenJSON(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ri={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ll{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const qd=new Ll;class Tt{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Wt={};class en extends Tt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;if(Wt[e]!==void 0){Wt[e].push({onLoad:t,onProgress:n,onError:i});return}const a=/^data:(.*?)(;base64)?,(.*)$/,c=e.match(a);let l;if(c){const h=c[1],u=!!c[2];let d=c[3];d=decodeURIComponent(d),u&&(d=atob(d));try{let f;const p=(this.responseType||"").toLowerCase();switch(p){case"arraybuffer":case"blob":const x=new Uint8Array(d.length);for(let g=0;g<d.length;g++)x[g]=d.charCodeAt(g);p==="blob"?f=new Blob([x.buffer],{type:h}):f=x.buffer;break;case"document":f=new DOMParser().parseFromString(d,h);break;case"json":f=JSON.parse(d);break;default:f=d;break}setTimeout(function(){t&&t(f),r.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)},0)}}else{Wt[e]=[],Wt[e].push({onLoad:t,onProgress:n,onError:i}),l=new XMLHttpRequest,l.open("GET",e,!0),l.addEventListener("load",function(h){const u=this.response,d=Wt[e];if(delete Wt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ri.add(e,u);for(let f=0,p=d.length;f<p;f++){const x=d[f];x.onLoad&&x.onLoad(u)}r.manager.itemEnd(e)}else{for(let f=0,p=d.length;f<p;f++){const x=d[f];x.onError&&x.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)}},!1),l.addEventListener("progress",function(h){const u=Wt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onProgress&&p.onProgress(h)}},!1),l.addEventListener("error",function(h){const u=Wt[e];delete Wt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),l.addEventListener("abort",function(h){const u=Wt[e];delete Wt[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(h)}r.manager.itemError(e),r.manager.itemEnd(e)},!1),this.responseType!==void 0&&(l.responseType=this.responseType),this.withCredentials!==void 0&&(l.withCredentials=this.withCredentials),l.overrideMimeType&&l.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const h in this.requestHeader)l.setRequestHeader(h,this.requestHeader[h]);l.send(null)}return r.manager.itemStart(e),l}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class wy extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new en(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=Fr.parse(e[n]);t.push(i)}return t}}class My extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=[],a=new ml,c=new en(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){const f=r.parse(d,!0);o[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(a.minFilter=ut),a.image=o,a.format=f.format,a.needsUpdate=!0,t&&t(a))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let x=0;x<d.mipmapCount;x++)o[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+x]),o[p].format=d.format,o[p].width=d.width,o[p].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=ut),a.format=d.format,a.needsUpdate=!0,t&&t(a)},n,i);return a}}class Lo extends Tt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=document.createElementNS("http://www.w3.org/1999/xhtml","img");function c(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),ri.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Zd extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=new Yi,o=new Lo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(h){r.images[l]=h,a++,a===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}}class Xd extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Vi,a=new en(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){const l=r.parse(c);l&&(l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:Lt,o.wrapT=l.wrapT!==void 0?l.wrapT:Lt,o.magFilter=l.magFilter!==void 0?l.magFilter:ut,o.minFilter=l.minFilter!==void 0?l.minFilter:ut,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.encoding!==void 0&&(o.encoding=l.encoding),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=Xi),l.mipmapCount===1&&(o.minFilter=ut),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l))},n,i),o}}class $d extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=new ft,o=new Lo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a;const c=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;r.format=c?Ln:Ot,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class kt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Z:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new w,i=[],r=[],o=[],a=new w,c=new xe;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new w),i[f].normalize()}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(_t(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(_t(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $r extends kt{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new Z,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}$r.prototype.isEllipseCurve=!0;class Rl extends $r{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.type="ArcCurve"}}Rl.prototype.isArcCurve=!0;function Cl(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Rs=new w,ca=new Cl,ha=new Cl,ua=new Cl;class Pl extends kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Rs.subVectors(i[0],i[1]).add(i[0]),l=Rs);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Rs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),y<1e-4&&(y=x),ca.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,x,y),ha.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,x,y),ua.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,x,y)}else this.curveType==="catmullrom"&&(ca.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ha.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ua.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ca.calc(c),ha.calc(c),ua.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Pl.prototype.isCatmullRomCurve3=!0;function Qc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Sy(s,e){const t=1-s;return t*t*e}function Ty(s,e){return 2*(1-s)*s*e}function Ey(s,e){return s*s*e}function gr(s,e,t,n){return Sy(s,e)+Ty(s,t)+Ey(s,n)}function Ay(s,e){const t=1-s;return t*t*t*e}function Ly(s,e){const t=1-s;return 3*t*t*s*e}function Ry(s,e){return 3*(1-s)*s*s*e}function Cy(s,e){return s*s*s*e}function xr(s,e,t,n,i){return Ay(s,e)+Ly(s,t)+Ry(s,n)+Cy(s,i)}class Ro extends kt{constructor(e=new Z,t=new Z,n=new Z,i=new Z){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Ro.prototype.isCubicBezierCurve=!0;class Dl extends kt{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(xr(e,i.x,r.x,o.x,a.x),xr(e,i.y,r.y,o.y,a.y),xr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}Dl.prototype.isCubicBezierCurve3=!0;class Yr extends kt{constructor(e=new Z,t=new Z){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const n=t||new Z;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yr.prototype.isLineCurve=!0;class Yd extends kt{constructor(e=new w,t=new w){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new w){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Co extends kt{constructor(e=new Z,t=new Z,n=new Z){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Co.prototype.isQuadraticBezierCurve=!0;class Il extends kt{constructor(e=new w,t=new w,n=new w){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(gr(e,i.x,r.x,o.x),gr(e,i.y,r.y,o.y),gr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Il.prototype.isQuadraticBezierCurve3=!0;class Po extends kt{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new Z){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Qc(a,c.x,l.x,h.x,u.x),Qc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Z().fromArray(i))}return this}}Po.prototype.isSplineCurve=!0;var Wa=Object.freeze({__proto__:null,ArcCurve:Rl,CatmullRomCurve3:Pl,CubicBezierCurve:Ro,CubicBezierCurve3:Dl,EllipseCurve:$r,LineCurve:Yr,LineCurve3:Yd,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Il,SplineCurve:Po});class Jd extends kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Yr(t,e))}getPoint(e){const t=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=t){const r=n[i]-t,o=this.curves[i],a=o.getLength(),c=a===0?0:1-r/a;return o.getPointAt(c)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o&&o.isEllipseCurve?e*2:o&&(o.isLineCurve||o.isLineCurve3)?1:o&&o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Wa[i.type]().fromJSON(i))}return this}}class Br extends Jd{constructor(e){super(),this.type="Path",this.currentPoint=new Z,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yr(this.currentPoint.clone(),new Z(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Co(this.currentPoint.clone(),new Z(e,t),new Z(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Ro(this.currentPoint.clone(),new Z(e,t),new Z(n,i),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new $r(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Cn extends Br{constructor(e){super(e),this.uuid=zt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Br().fromJSON(i))}return this}}class Xt extends Fe{constructor(e,t=1){super(),this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}Xt.prototype.isLight=!0;class Nl extends Xt{constructor(e,t,n){super(e,n),this.type="HemisphereLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.groundColor=new fe(t)}copy(e){return Xt.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Nl.prototype.isHemisphereLight=!0;const eh=new xe,th=new w,nh=new w;class Fl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;th.setFromMatrixPosition(e.matrixWorld),t.position.copy(th),nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nh),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jd extends Fl{constructor(){super(new gt(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}jd.prototype.isSpotLightShadow=!0;class Bl extends Xt{constructor(e,t,n=0,i=Math.PI/3,r=0,o=1){super(e,t),this.type="SpotLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new jd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Bl.prototype.isSpotLight=!0;const ih=new xe,cr=new w,da=new w;class Kd extends Fl{constructor(){super(new gt(90,1,.5,500)),this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(cr),da.copy(n.position),da.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(da),n.updateMatrixWorld(),i.makeTranslation(-cr.x,-cr.y,-cr.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}Kd.prototype.isPointLightShadow=!0;class Ol extends Xt{constructor(e,t,n=0,i=1){super(e,t),this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Ol.prototype.isPointLight=!0;class Jr extends Vr{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Jr.prototype.isOrthographicCamera=!0;class Qd extends Fl{constructor(){super(new Jr(-5,5,5,-5,.5,500))}}Qd.prototype.isDirectionalLightShadow=!0;class zl extends Xt{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(Fe.DefaultUp),this.updateMatrix(),this.target=new Fe,this.shadow=new Qd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}zl.prototype.isDirectionalLight=!0;class kl extends Xt{constructor(e,t){super(e,t),this.type="AmbientLight"}}kl.prototype.isAmbientLight=!0;class Ul extends Xt{constructor(e,t,n=10,i=10){super(e,t),this.type="RectAreaLight",this.width=n,this.height=i}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}Ul.prototype.isRectAreaLight=!0;class Gl{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new w)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*i),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*i)),t.addScaledVector(o[5],1.092548*(i*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*i),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*i),t.addScaledVector(o[5],2*.429043*i*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}Gl.prototype.isSphericalHarmonics3=!0;class jr extends Xt{constructor(e=new Gl,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}jr.prototype.isLightProbe=!0;class ef extends Tt{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,o=new en(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=new vy[e.type];if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=new fe().setHex(e.sheen)),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==1&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.skinning!==void 0&&(i.skinning=e.skinning),e.morphTargets!==void 0&&(i.morphTargets=e.morphTargets),e.morphNormals!==void 0&&(i.morphNormals=e.morphNormals),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.vertexTangents!==void 0&&(i.vertexTangents=e.vertexTangents),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(i.uniforms[r]={},o.type){case"t":i.uniforms[r].value=n(o.value);break;case"c":i.uniforms[r].value=new fe().setHex(o.value);break;case"v2":i.uniforms[r].value=new Z().fromArray(o.value);break;case"v3":i.uniforms[r].value=new w().fromArray(o.value);break;case"v4":i.uniforms[r].value=new qe().fromArray(o.value);break;case"m3":i.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":i.uniforms[r].value=new xe().fromArray(o.value);break;default:i.uniforms[r].value=o.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.shading!==void 0&&(i.flatShading=e.shading===1),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Z().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Z().fromArray(e.clearcoatNormalScale)),e.transmission!==void 0&&(i.transmission=e.transmission),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),i}setTextures(e){return this.textures=e,this}}class Hl{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class Vl extends _e{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Vl.prototype.isInstancedBufferGeometry=!0;class Wl extends Ne{constructor(e,t,n,i){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,n),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Wl.prototype.isInstancedBufferAttribute=!0;class tf extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new en(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(JSON.parse(a)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];const y=f.interleavedBuffers[p],g=r(f,y.buffer),m=dr(y.type,g),b=new yn(m,y.stride);return b.uuid=y.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];const y=f.arrayBuffers[p],g=new Uint32Array(y).buffer;return n[p]=g,g}const o=e.isInstancedBufferGeometry?new Vl:new _e,a=e.data.index;if(a!==void 0){const f=dr(a.type,a.array);o.setIndex(new Ne(f,1))}const c=e.data.attributes;for(const f in c){const p=c[f];let x;if(p.isInterleavedBufferAttribute){const y=i(e.data,p.data);x=new Dn(y,p.itemSize,p.offset,p.normalized)}else{const y=dr(p.type,p.array),g=p.isInstancedBufferAttribute?Wl:Ne;x=new g(y,p.itemSize,p.normalized)}p.name!==void 0&&(x.name=p.name),p.usage!==void 0&&x.setUsage(p.usage),p.updateRange!==void 0&&(x.updateRange.offset=p.updateRange.offset,x.updateRange.count=p.updateRange.count),o.setAttribute(f,x)}const l=e.data.morphAttributes;if(l)for(const f in l){const p=l[f],x=[];for(let y=0,g=p.length;y<g;y++){const m=p[y];let b;if(m.isInterleavedBufferAttribute){const _=i(e.data,m.data);b=new Dn(_,m.itemSize,m.offset,m.normalized)}else{const _=dr(m.type,m.array);b=new Ne(_,m.itemSize,m.normalized)}m.name!==void 0&&(b.name=m.name),x.push(b)}o.morphAttributes[f]=x}e.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const x=u[f];o.addGroup(x.start,x.count,x.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new w;d.center!==void 0&&f.fromArray(d.center),o.boundingSphere=new Fn(f,d.radius)}return e.name&&(o.name=e.name),e.userData&&(o.userData=e.userData),o}}class Py extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=this.path===""?Hl.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||o;const a=new en(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),o=this.parseImages(e.images,function(){t!==void 0&&t(l)}),a=this.parseTextures(e.textures,o),c=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,c,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let u=!1;for(const d in o)if(o[d]instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new Cn().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=new To().fromJSON(e[r],i);n[a.uuid]=a}return n}parseGeometries(e,t){const n={};let i;if(e!==void 0){const r=new tf;for(let o=0,a=e.length;o<a;o++){let c;const l=e[o];switch(l.type){case"PlaneGeometry":case"PlaneBufferGeometry":c=new At[l.type](l.width,l.height,l.widthSegments,l.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":c=new At[l.type](l.width,l.height,l.depth,l.widthSegments,l.heightSegments,l.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":c=new At[l.type](l.radius,l.segments,l.thetaStart,l.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":c=new At[l.type](l.radiusTop,l.radiusBottom,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":c=new At[l.type](l.radius,l.height,l.radialSegments,l.heightSegments,l.openEnded,l.thetaStart,l.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":c=new At[l.type](l.radius,l.widthSegments,l.heightSegments,l.phiStart,l.phiLength,l.thetaStart,l.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":c=new At[l.type](l.radius,l.detail);break;case"RingGeometry":case"RingBufferGeometry":c=new At[l.type](l.innerRadius,l.outerRadius,l.thetaSegments,l.phiSegments,l.thetaStart,l.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":c=new At[l.type](l.radius,l.tube,l.radialSegments,l.tubularSegments,l.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":c=new At[l.type](l.radius,l.tube,l.tubularSegments,l.radialSegments,l.p,l.q);break;case"TubeGeometry":case"TubeBufferGeometry":c=new At[l.type](new Wa[l.path.type]().fromJSON(l.path),l.tubularSegments,l.radius,l.radialSegments,l.closed);break;case"LatheGeometry":case"LatheBufferGeometry":c=new At[l.type](l.points,l.segments,l.phiStart,l.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":c=new At[l.type](l.vertices,l.indices,l.radius,l.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":i=[];for(let u=0,d=l.shapes.length;u<d;u++){const f=t[l.shapes[u]];i.push(f)}c=new At[l.type](i,l.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":i=[];for(let u=0,d=l.shapes.length;u<d;u++){const f=t[l.shapes[u]];i.push(f)}const h=l.options.extrudePath;h!==void 0&&(l.options.extrudePath=new Wa[h.type]().fromJSON(h)),c=new At[l.type](i,l.options);break;case"BufferGeometry":case"InstancedBufferGeometry":c=r.parse(l);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+l.type+'"');continue}c.uuid=l.uuid,l.name!==void 0&&(c.name=l.name),c.isBufferGeometry===!0&&l.userData!==void 0&&(c.userData=l.userData),n[l.uuid]=c}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new ef;r.setTextures(t);for(let o=0,a=e.length;o<a;o++){const c=e[o];if(c.type==="MultiMaterial"){const l=[];for(let h=0;h<c.materials.length;h++){const u=c.materials[h];n[u.uuid]===void 0&&(n[u.uuid]=r.parse(u)),l.push(n[u.uuid])}i[c.uuid]=l}else n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=Fr.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function o(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function a(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return o(h)}else return c.data?{data:dr(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){const c=new Ll(t);r=new Lo(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){const u=e[l],d=u.url;if(Array.isArray(d)){i[u.uuid]=[];for(let f=0,p=d.length;f<p;f++){const x=d[f],y=a(x);y!==null&&(y instanceof HTMLImageElement?i[u.uuid].push(y):i[u.uuid].push(new Vi(y.data,y.width,y.height)))}}else{const f=a(u.url);f!==null&&(i[u.uuid]=f)}}}return i}parseTextures(e,t){function n(r,o){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(e!==void 0)for(let r=0,o=e.length;r<o;r++){const a=e[r];a.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',a.uuid),t[a.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",a.image);let c;const l=t[a.image];Array.isArray(l)?(c=new Yi(l),l.length===6&&(c.needsUpdate=!0)):(l&&l.data?c=new Vi(l.data,l.width,l.height):c=new ft(l),l&&(c.needsUpdate=!0)),c.uuid=a.uuid,a.name!==void 0&&(c.name=a.name),a.mapping!==void 0&&(c.mapping=n(a.mapping,Dy)),a.offset!==void 0&&c.offset.fromArray(a.offset),a.repeat!==void 0&&c.repeat.fromArray(a.repeat),a.center!==void 0&&c.center.fromArray(a.center),a.rotation!==void 0&&(c.rotation=a.rotation),a.wrap!==void 0&&(c.wrapS=n(a.wrap[0],rh),c.wrapT=n(a.wrap[1],rh)),a.format!==void 0&&(c.format=a.format),a.type!==void 0&&(c.type=a.type),a.encoding!==void 0&&(c.encoding=a.encoding),a.minFilter!==void 0&&(c.minFilter=n(a.minFilter,sh)),a.magFilter!==void 0&&(c.magFilter=n(a.magFilter,sh)),a.anisotropy!==void 0&&(c.anisotropy=a.anisotropy),a.flipY!==void 0&&(c.flipY=a.flipY),a.premultiplyAlpha!==void 0&&(c.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(c.unpackAlignment=a.unpackAlignment),i[a.uuid]=c}return i}parseObject(e,t,n,i){let r;function o(h){return t[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",h),t[h]}function a(h){if(h!==void 0){if(Array.isArray(h)){const u=[];for(let d=0,f=h.length;d<f;d++){const p=h[d];n[p]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",p),u.push(n[p])}return u}return n[h]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",h),n[h]}}let c,l;switch(e.type){case"Scene":r=new _o,e.background!==void 0&&Number.isInteger(e.background)&&(r.background=new fe(e.background)),e.fog!==void 0&&(e.fog.type==="Fog"?r.fog=new Zr(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(r.fog=new qr(e.fog.color,e.fog.density)));break;case"PerspectiveCamera":r=new gt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(r.focus=e.focus),e.zoom!==void 0&&(r.zoom=e.zoom),e.filmGauge!==void 0&&(r.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(r.filmOffset=e.filmOffset),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"OrthographicCamera":r=new Jr(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(r.zoom=e.zoom),e.view!==void 0&&(r.view=Object.assign({},e.view));break;case"AmbientLight":r=new kl(e.color,e.intensity);break;case"DirectionalLight":r=new zl(e.color,e.intensity);break;case"PointLight":r=new Ol(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":r=new Ul(e.color,e.intensity,e.width,e.height);break;case"SpotLight":r=new Bl(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":r=new Nl(e.color,e.groundColor,e.intensity);break;case"LightProbe":r=new jr().fromJSON(e);break;case"SkinnedMesh":c=o(e.geometry),l=a(e.material),r=new Mo(c,l),e.bindMode!==void 0&&(r.bindMode=e.bindMode),e.bindMatrix!==void 0&&r.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(r.skeleton=e.skeleton);break;case"Mesh":c=o(e.geometry),l=a(e.material),r=new ot(c,l);break;case"InstancedMesh":c=o(e.geometry),l=a(e.material);const h=e.count,u=e.instanceMatrix,d=e.instanceColor;r=new fl(c,l,h),r.instanceMatrix=new Ne(new Float32Array(u.array),16),d!==void 0&&(r.instanceColor=new Ne(new Float32Array(d.array),d.itemSize));break;case"LOD":r=new Fd;break;case"Line":r=new fn(o(e.geometry),a(e.material));break;case"LineLoop":r=new pl(o(e.geometry),a(e.material));break;case"LineSegments":r=new It(o(e.geometry),a(e.material));break;case"PointCloud":case"Points":r=new Xr(o(e.geometry),a(e.material));break;case"Sprite":r=new wo(a(e.material));break;case"Group":r=new Qn;break;case"Bone":r=new So;break;default:r=new Fe}if(r.uuid=e.uuid,e.name!==void 0&&(r.name=e.name),e.matrix!==void 0?(r.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(r.matrixAutoUpdate=e.matrixAutoUpdate),r.matrixAutoUpdate&&r.matrix.decompose(r.position,r.quaternion,r.scale)):(e.position!==void 0&&r.position.fromArray(e.position),e.rotation!==void 0&&r.rotation.fromArray(e.rotation),e.quaternion!==void 0&&r.quaternion.fromArray(e.quaternion),e.scale!==void 0&&r.scale.fromArray(e.scale)),e.castShadow!==void 0&&(r.castShadow=e.castShadow),e.receiveShadow!==void 0&&(r.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(r.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(r.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(r.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&r.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(r.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(r.visible=e.visible),e.frustumCulled!==void 0&&(r.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(r.renderOrder=e.renderOrder),e.userData!==void 0&&(r.userData=e.userData),e.layers!==void 0&&(r.layers.mask=e.layers),e.children!==void 0){const h=e.children;for(let u=0;u<h.length;u++)r.add(this.parseObject(h[u],t,n,i))}if(e.animations!==void 0){const h=e.animations;for(let u=0;u<h.length;u++){const d=h[u];r.animations.push(i[d])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(r.autoUpdate=e.autoUpdate);const h=e.levels;for(let u=0;u<h.length;u++){const d=h[u],f=r.getObjectByProperty("uuid",d.object);f!==void 0&&r.addLevel(f,d.distance)}}return r}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}setTexturePath(e){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(e)}}const Dy={UVMapping:co,CubeReflectionMapping:kr,CubeRefractionMapping:Ur,EquirectangularReflectionMapping:Zs,EquirectangularRefractionMapping:Xs,CubeUVReflectionMapping:Zi,CubeUVRefractionMapping:Gr},rh={RepeatWrapping:yr,ClampToEdgeWrapping:Lt,MirroredRepeatWrapping:vr},sh={NearestFilter:ht,NearestMipmapNearestFilter:$s,NearestMipmapLinearFilter:Ys,LinearFilter:ut,LinearMipmapNearestFilter:il,LinearMipmapLinearFilter:Xi};class nf extends Tt{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ri.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){ri.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}nf.prototype.isImageBitmapLoader=!0;class rf{constructor(){this.type="ShapePath",this.color=new fe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Br,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e,t){function n(m){const b=[];for(let _=0,S=m.length;_<S;_++){const v=m[_],A=new Cn;A.curves=v.curves,b.push(A)}return b}function i(m,b){const _=b.length;let S=!1;for(let v=_-1,A=0;A<_;v=A++){let R=b[v],I=b[A],O=I.x-R.x,U=I.y-R.y;if(Math.abs(U)>Number.EPSILON){if(U<0&&(R=b[A],O=-O,I=b[v],U=-U),m.y<R.y||m.y>I.y)continue;if(m.y===R.y){if(m.x===R.x)return!0}else{const z=U*(m.x-R.x)-O*(m.y-R.y);if(z===0)return!0;if(z<0)continue;S=!S}}else{if(m.y!==R.y)continue;if(I.x<=m.x&&m.x<=R.x||R.x<=m.x&&m.x<=I.x)return!0}}return S}const r=Qt.isClockWise,o=this.subPaths;if(o.length===0)return[];if(t===!0)return n(o);let a,c,l;const h=[];if(o.length===1)return c=o[0],l=new Cn,l.curves=c.curves,h.push(l),h;let u=!r(o[0].getPoints());u=e?!u:u;const d=[],f=[];let p=[],x=0,y;f[x]=void 0,p[x]=[];for(let m=0,b=o.length;m<b;m++)c=o[m],y=c.getPoints(),a=r(y),a=e?!a:a,a?(!u&&f[x]&&x++,f[x]={s:new Cn,p:y},f[x].s.curves=c.curves,u&&x++,p[x]=[]):p[x].push({h:c,p:y[0]});if(!f[0])return n(o);if(f.length>1){let m=!1;const b=[];for(let _=0,S=f.length;_<S;_++)d[_]=[];for(let _=0,S=f.length;_<S;_++){const v=p[_];for(let A=0;A<v.length;A++){const R=v[A];let I=!0;for(let O=0;O<f.length;O++)i(R.p,f[O].p)&&(_!==O&&b.push({froms:_,tos:O,hole:A}),I?(I=!1,d[O].push(R)):m=!0);I&&d[_].push(R)}}b.length>0&&(m||(p=d))}let g;for(let m=0,b=f.length;m<b;m++){l=f[m].s,h.push(l),g=p[m];for(let _=0,S=g.length;_<S;_++)l.holes.push(g[_].h)}return h}}class ql{constructor(e){this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=Iy(e,t,this.data);for(let r=0,o=i.length;r<o;r++)Array.prototype.push.apply(n,i[r].toShapes());return n}}function Iy(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=r;else{const u=Ny(h,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function Ny(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new rf;let a,c,l,h,u,d,f,p;if(r.o){const x=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let y=0,g=x.length;y<g;)switch(x[y++]){case"m":a=x[y++]*e+t,c=x[y++]*e+n,o.moveTo(a,c);break;case"l":a=x[y++]*e+t,c=x[y++]*e+n,o.lineTo(a,c);break;case"q":l=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,o.quadraticCurveTo(u,d,l,h);break;case"b":l=x[y++]*e+t,h=x[y++]*e+n,u=x[y++]*e+t,d=x[y++]*e+n,f=x[y++]*e+t,p=x[y++]*e+n,o.bezierCurveTo(u,d,f,p,l,h);break}}return{offsetX:r.ha*e,path:o}}ql.prototype.isFont=!0;class Fy extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new en(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){let c;try{c=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}const l=r.parse(c);t&&t(l)},n,i)}parse(e){return new ql(e)}}let Cs;const Zl={getContext:function(){return Cs===void 0&&(Cs=new(window.AudioContext||window.webkitAudioContext)),Cs},setContext:function(s){Cs=s}};class sf extends Tt{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new en(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{const c=a.slice(0);Zl.getContext().decodeAudioData(c,function(h){t(h)})}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}}class of extends jr{constructor(e,t,n=1){super(void 0,n);const i=new fe().set(e),r=new fe().set(t),o=new w(i.r,i.g,i.b),a=new w(r.r,r.g,r.b),c=Math.sqrt(Math.PI),l=c*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(c),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(l)}}of.prototype.isHemisphereLightProbe=!0;class af extends jr{constructor(e,t=1){super(void 0,t);const n=new fe().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}af.prototype.isAmbientLightProbe=!0;const oh=new xe,ah=new xe;class By{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new gt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new gt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep;const i=e.projectionMatrix.clone(),r=t.eyeSep/2,o=r*t.near/t.focus,a=t.near*Math.tan(ni*t.fov*.5)/t.zoom;let c,l;ah.elements[12]=-r,oh.elements[12]=r,c=-a*t.aspect+o,l=a*t.aspect+o,i.elements[0]=2*t.near/(l-c),i.elements[8]=(l+c)/(l-c),this.cameraL.projectionMatrix.copy(i),c=-a*t.aspect-o,l=a*t.aspect-o,i.elements[0]=2*t.near/(l-c),i.elements[8]=(l+c)/(l-c),this.cameraR.projectionMatrix.copy(i)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(ah),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(oh)}}class lf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=lh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=lh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function lh(){return(typeof performance>"u"?Date:performance).now()}const Hn=new w,ch=new st,Oy=new w,Vn=new w;class zy extends Fe{constructor(){super(),this.type="AudioListener",this.context=Zl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new lf}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Hn,ch,Oy),Vn.set(0,0,-1).applyQuaternion(ch),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Hn.x,i),t.positionY.linearRampToValueAtTime(Hn.y,i),t.positionZ.linearRampToValueAtTime(Hn.z,i),t.forwardX.linearRampToValueAtTime(Vn.x,i),t.forwardY.linearRampToValueAtTime(Vn.y,i),t.forwardZ.linearRampToValueAtTime(Vn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(Hn.x,Hn.y,Hn.z),t.setOrientation(Vn.x,Vn.y,Vn.z,n.x,n.y,n.z)}}class Xl extends Fe{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Wn=new w,hh=new st,ky=new w,qn=new w;class Uy extends Xl{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Wn,hh,ky),qn.set(0,0,1).applyQuaternion(hh);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Wn.x,n),t.positionY.linearRampToValueAtTime(Wn.y,n),t.positionZ.linearRampToValueAtTime(Wn.z,n),t.orientationX.linearRampToValueAtTime(qn.x,n),t.orientationY.linearRampToValueAtTime(qn.y,n),t.orientationZ.linearRampToValueAtTime(qn.z,n)}else t.setPosition(Wn.x,Wn.y,Wn.z),t.setOrientation(qn.x,qn.y,qn.z)}}class cf{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class hf{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){st.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;st.multiplyQuaternionsFlat(e,o,e,t,e,n),st.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const $l="\\[\\]\\.:\\/",Gy=new RegExp("["+$l+"]","g"),Yl="[^"+$l+"]",Hy="[^"+$l.replace("\\.","")+"]",Vy=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Wy=/(WCOD+)?/.source.replace("WCOD",Hy),qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),Zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Xy=new RegExp("^"+Vy+Wy+qy+Zy+"$"),$y=["material","materials","bones"];class Yy{constructor(e,t,n){const i=n||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ge{constructor(e,t,n){this.path=t,this.parsedPath=n||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,n):new Ge(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){const t=Xy.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=Yy;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uf{constructor(){this.uuid=zt(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=t[f];if(p===void 0){p=c++,t[f]=p,e.push(d);for(let x=0,y=o;x!==y;++x)r[x].push(new Ge(d,n[x],i[x]))}else if(p<l){a=e[p];const x=--l,y=e[x];t[y.uuid]=p,e[p]=y,t[f]=x,e[x]=d;for(let g=0,m=o;g!==m;++g){const b=r[g],_=b[x];let S=b[p];b[p]=_,S===void 0&&(S=new Ge(d,n[g],i[g])),b[x]=S}}else e[p]!==a&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const c=arguments[o],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){const u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,p=i;f!==p;++f){const x=n[f],y=x[u],g=x[h];x[h]=y,x[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=e.length;for(let a=0,c=arguments.length;a!==c;++a){const l=arguments[a],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const d=--r,f=e[d],p=--o,x=e[p];t[f.uuid]=u,e[u]=f,t[x.uuid]=d,e[d]=x,e.pop();for(let y=0,g=i;y!==g;++y){const m=n[y],b=m[d],_=m[p];m[u]=b,m[d]=_,m.pop()}}else{const d=--o,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,x=i;p!==x;++p){const y=n[p];y[u]=y[d],y.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,o.push(e),a.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new Ge(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,c=o[a],l=e[a];t[l]=n,o[n]=c,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}uf.prototype.isAnimationObjectGroup=!0;class Jy{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),c={endingStart:jn,endingEnd:jn};for(let l=0;l!==o;++l){const h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=nd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;if(c<0||n===0)return;this._startTime=null,t=n*c}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case rl:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case ho:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===id;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===td){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Kn,i.endingEnd=Kn):(e?i.endingStart=this.zeroSlopeAtStart?Kn:jn:i.endingStart=Sr,t?i.endingEnd=this.zeroSlopeAtEnd?Kn:jn:i.endingEnd=Sr)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}}class df extends gn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)o[u]=p;else{if(p=o[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;p=new hf(Ge.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),o[u]=p}a[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new El(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Fr.findByName(i,e):e;const a=o!==null?o.uuid:e,c=this._actionsByClip[a];let l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=ho),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;const h=new Jy(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Fr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);const a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){const l=o[a];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}df.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Do{constructor(e){typeof e=="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),e=arguments[1]),this.value=e}clone(){return new Do(this.value.clone===void 0?this.value:this.value.clone())}}class ff extends yn{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}ff.prototype.isInstancedInterleavedBuffer=!0;class pf{constructor(e,t,n,i,r){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}pf.prototype.isGLBufferAttribute=!0;class jy{constructor(e,t,n=0,i=1/0){this.ray=new Bn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new cl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!1,n=[]){return qa(e,this,n,t),n.sort(uh),n}intersectObjects(e,t=!1,n=[]){for(let i=0,r=e.length;i<r;i++)qa(e[i],this,n,t);return n.sort(uh),n}}function uh(s,e){return s.distance-e.distance}function qa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)qa(i[r],e,t,!0)}}class Za{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ky{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const dh=new Z;class Qi{constructor(e=new Z(1/0,1/0),t=new Z(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return e===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),e=new Z),this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),e=new Z),this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),t=new Z),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),t=new Z),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return dh.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Qi.prototype.isBox2=!0;const fh=new w,Ps=new w;class mf{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),e=new w),e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),e=new w),e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return t===void 0&&(console.warn("THREE.Line3: .at() target is now required"),t=new w),this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fh.subVectors(e,this.start),Ps.subVectors(this.end,this.start);const n=Ps.dot(Ps);let r=Ps.dot(fh)/n;return t&&(r=_t(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return n===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),n=new w),this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class gf extends Fe{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}gf.prototype.isImmediateRenderObject=!0;const ph=new w;class Qy extends Fe{constructor(e,t){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=t;const n=new _e,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,c=32;o<c;o++,a++){const l=o/c*Math.PI*2,h=a/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new pe(i,3));const r=new xt({fog:!1,toneMapped:!1});this.cone=new It(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),ph.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ph),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const En=new w,Ds=new xe,fa=new xe;class xf extends It{constructor(e){const t=yf(e),n=new _e,i=[],r=[],o=new fe(0,0,1),a=new fe(0,1,0);for(let l=0;l<t.length;l++){const h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new pe(i,3)),n.setAttribute("color",new pe(r,3));const c=new xt({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");fa.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<t.length;r++){const a=t[r];a.parent&&a.parent.isBone&&(Ds.multiplyMatrices(fa,a.matrixWorld),En.setFromMatrixPosition(Ds),i.setXYZ(o,En.x,En.y,En.z),Ds.multiplyMatrices(fa,a.parent.matrixWorld),En.setFromMatrixPosition(Ds),i.setXYZ(o+1,En.x,En.y,En.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function yf(s){const e=[];s&&s.isBone&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,yf(s.children[t]));return e}class ev extends ot{constructor(e,t,n){const i=new Dr(t,4,2),r=new xn({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.light.updateMatrixWorld(),this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const tv=new w,mh=new fe,gh=new fe;class nv extends Fe{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n;const i=new Cr(t);i.rotateY(Math.PI*.5),this.material=new xn({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new Ne(o,3)),this.add(new ot(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");mh.copy(this.light.color),gh.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?mh:gh;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}e.lookAt(tv.setFromMatrixPosition(this.light.matrixWorld).negate())}}class vf extends It{constructor(e=10,t=10,n=4473924,i=8947848){n=new fe(n),i=new fe(i);const r=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,f=0,p=-a;d<=t;d++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=d===r?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}const h=new _e;h.setAttribute("position",new pe(c,3)),h.setAttribute("color",new pe(l,3));const u=new xt({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}}class iv extends It{constructor(e=10,t=16,n=8,i=64,r=4473924,o=8947848){r=new fe(r),o=new fe(o);const a=[],c=[];for(let u=0;u<=t;u++){const d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;a.push(0,0,0),a.push(f,0,p);const x=u&1?r:o;c.push(x.r,x.g,x.b),c.push(x.r,x.g,x.b)}for(let u=0;u<=n;u++){const d=u&1?r:o,f=e-e/n*u;for(let p=0;p<i;p++){let x=p/i*(Math.PI*2),y=Math.sin(x)*f,g=Math.cos(x)*f;a.push(y,0,g),c.push(d.r,d.g,d.b),x=(p+1)/i*(Math.PI*2),y=Math.sin(x)*f,g=Math.cos(x)*f,a.push(y,0,g),c.push(d.r,d.g,d.b)}}const l=new _e;l.setAttribute("position",new pe(a,3)),l.setAttribute("color",new pe(c,3));const h=new xt({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}}const xh=new w,Is=new w,yh=new w;class rv extends Fe{constructor(e,t,n){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,t===void 0&&(t=1);let i=new _e;i.setAttribute("position",new pe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new xt({fog:!1,toneMapped:!1});this.lightPlane=new fn(i,r),this.add(this.lightPlane),i=new _e,i.setAttribute("position",new pe([0,0,0,0,0,1],3)),this.targetLine=new fn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){xh.setFromMatrixPosition(this.light.matrixWorld),Is.setFromMatrixPosition(this.light.target.matrixWorld),yh.subVectors(Is,xh),this.lightPlane.lookAt(Is),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Is),this.targetLine.scale.z=yh.length()}}const Ns=new w,Ke=new Vr;class sv extends It{constructor(e){const t=new _e,n=new xt({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={},a=new fe(16755200),c=new fe(16711680),l=new fe(43775),h=new fe(16777215),u=new fe(3355443);d("n1","n2",a),d("n2","n4",a),d("n4","n3",a),d("n3","n1",a),d("f1","f2",a),d("f2","f4",a),d("f4","f3",a),d("f3","f1",a),d("n1","f1",a),d("n2","f2",a),d("n3","f3",a),d("n4","f4",a),d("p","n1",c),d("p","n2",c),d("p","n3",c),d("p","n4",c),d("u1","u2",l),d("u2","u3",l),d("u3","u1",l),d("c","t",h),d("p","c",u),d("cn1","cn2",u),d("cn3","cn4",u),d("cf1","cf2",u),d("cf3","cf4",u);function d(p,x,y){f(p,y),f(x,y)}function f(p,x){i.push(0,0,0),r.push(x.r,x.g,x.b),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}t.setAttribute("position",new pe(i,3)),t.setAttribute("color",new pe(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update()}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Ke.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),tt("c",t,e,Ke,0,0,-1),tt("t",t,e,Ke,0,0,1),tt("n1",t,e,Ke,-n,-i,-1),tt("n2",t,e,Ke,n,-i,-1),tt("n3",t,e,Ke,-n,i,-1),tt("n4",t,e,Ke,n,i,-1),tt("f1",t,e,Ke,-n,-i,1),tt("f2",t,e,Ke,n,-i,1),tt("f3",t,e,Ke,-n,i,1),tt("f4",t,e,Ke,n,i,1),tt("u1",t,e,Ke,n*.7,i*1.1,-1),tt("u2",t,e,Ke,-n*.7,i*1.1,-1),tt("u3",t,e,Ke,0,i*2,-1),tt("cf1",t,e,Ke,-n,0,1),tt("cf2",t,e,Ke,n,0,1),tt("cf3",t,e,Ke,0,-i,1),tt("cf4",t,e,Ke,0,i,1),tt("cn1",t,e,Ke,-n,0,-1),tt("cn2",t,e,Ke,n,0,-1),tt("cn3",t,e,Ke,0,-i,-1),tt("cn4",t,e,Ke,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function tt(s,e,t,n,i,r,o){Ns.set(i,r,o).unproject(n);const a=e[s];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,h=a.length;l<h;l++)c.setXYZ(a[l],Ns.x,Ns.y,Ns.z)}}const Fs=new Nt;class _f extends It{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new _e;r.setIndex(new Ne(n,1)),r.setAttribute("position",new Ne(i,3)),super(r,new xt({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Fs.setFromObject(this.object),Fs.isEmpty())return;const t=Fs.min,n=Fs.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e){return It.prototype.copy.call(this,e),this.object=e.object,this}}class ov extends It{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new _e;r.setIndex(new Ne(n,1)),r.setAttribute("position",new pe(i,3)),super(r,new xt({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}}class av extends fn{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],o=new _e;o.setAttribute("position",new pe(r,3)),o.computeBoundingSphere(),super(o,new xt({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const a=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],c=new _e;c.setAttribute("position",new pe(a,3)),c.computeBoundingSphere(),this.add(new ot(c,new xn({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){let t=-this.plane.constant;Math.abs(t)<1e-8&&(t=1e-8),this.scale.set(.5*this.size,.5*this.size,t),this.children[0].material.side=t<0?rt:qi,this.lookAt(this.plane.normal),super.updateMatrixWorld(e)}}const vh=new w;let Bs,pa;class lv extends Fe{constructor(e=new w(0,0,1),t=new w(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Bs===void 0&&(Bs=new _e,Bs.setAttribute("position",new pe([0,0,0,0,1,0],3)),pa=new Wi(0,.5,1,5,1),pa.translate(0,-.5,0)),this.position.copy(t),this.line=new fn(Bs,new xt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ot(pa,new xn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vh.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(vh,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}class bf extends It{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new _e;i.setAttribute("position",new pe(t,3)),i.setAttribute("color",new pe(n,3));const r=new xt({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const wf=new Float32Array(1),cv=new Int32Array(wf.buffer);class hv{static toHalfFloat(e){wf[0]=e;const t=cv[0];let n=t>>16&32768,i=t>>12&2047;const r=t>>23&255;return r<103?n:r>142?(n|=31744,n|=(r==255?0:1)&&t&8388607,n):r<113?(i|=2048,n|=(i>>114-r)+(i>>113-r&1),n):(n|=r-112<<10|i>>1,n+=i&1,n)}}const zi=4,Pn=8,jt=Math.pow(2,Pn),Mf=[.125,.215,.35,.446,.526,.582],Sf=Pn-zi+1+Mf.length,Li=20,Kt={[Rt]:0,[Hr]:1,[fo]:2,[sl]:3,[ol]:4,[al]:5,[uo]:6},$n=new xn({side:rt,depthWrite:!1,depthTest:!1}),uv=new ot(new ii,$n),ma=new Jr,{_lodPlanes:hr,_sizeLods:_h,_sigmas:Os}=pv(),bh=new fe;let ga=null;const Yn=(1+Math.sqrt(5))/2,Ri=1/Yn,wh=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,Yn,Ri),new w(0,Yn,-Ri),new w(Ri,0,Yn),new w(-Ri,0,Yn),new w(Yn,Ri,0),new w(-Yn,Ri,0)];function Mh(s){const e=Math.max(s.r,s.g,s.b),t=Math.min(Math.max(Math.ceil(Math.log2(e)),-128),127);return s.multiplyScalar(Math.pow(2,-t)),(t+128)/255}class dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=mv(Li),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ga=this._renderer.getRenderTarget();const r=this._allocateTargets();return this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Eh(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Th(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<hr.length;e++)hr[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(ga),e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e){ga=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:ht,minFilter:ht,generateMipmaps:!1,type:$i,format:yu,encoding:fv(e)?e.encoding:fo,depthBuffer:!1},n=Sh(t);return n.depthBuffer=!e,this._pingPongRenderTarget=Sh(t),n}_compileMaterial(e){const t=new ot(hr[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i){const a=new gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.outputEncoding,f=h.toneMapping;h.getClearColor(bh),h.toneMapping=ei,h.outputEncoding=Rt,h.autoClear=!1;let p=!1;const x=e.background;if(x){if(x.isColor){$n.color.copy(x).convertSRGBToLinear(),e.background=null;const y=Mh($n.color);$n.opacity=y,p=!0}}else{$n.color.copy(bh).convertSRGBToLinear();const y=Mh($n.color);$n.opacity=y,p=!0}for(let y=0;y<6;y++){const g=y%3;g==0?(a.up.set(0,c[y],0),a.lookAt(l[y],0,0)):g==1?(a.up.set(0,0,c[y]),a.lookAt(0,l[y],0)):(a.up.set(0,c[y],0),a.lookAt(0,0,l[y])),zs(i,g*jt,y>2?jt:0,jt,jt),h.setRenderTarget(i),p&&h.render(uv,a),h.render(e,a)}h.toneMapping=f,h.outputEncoding=d,h.autoClear=u}_textureToCubeUV(e,t){const n=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Eh()):this._equirectShader==null&&(this._equirectShader=Th());const i=e.isCubeTexture?this._cubemapShader:this._equirectShader,r=new ot(hr[0],i),o=i.uniforms;o.envMap.value=e,e.isCubeTexture||o.texelSize.value.set(1/e.image.width,1/e.image.height),o.inputEncoding.value=Kt[e.encoding],o.outputEncoding.value=Kt[t.texture.encoding],zs(t,0,0,3*jt,2*jt),n.setRenderTarget(t),n.render(r,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<Sf;i++){const r=Math.sqrt(Os[i]*Os[i]-Os[i-1]*Os[i-1]),o=wh[(i-1)%wh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ot(hr[i],l),d=l.uniforms,f=_h[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Li-1),x=r/p,y=isFinite(r)?1+Math.floor(h*x):Li;y>Li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Li}`);const g=[];let m=0;for(let v=0;v<Li;++v){const A=v/x,R=Math.exp(-A*A/2);g.push(R),v==0?m+=R:v<y&&(m+=2*R)}for(let v=0;v<g.length;v++)g[v]=g[v]/m;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a),d.dTheta.value=p,d.mipInt.value=Pn-n,d.inputEncoding.value=Kt[e.texture.encoding],d.outputEncoding.value=Kt[e.texture.encoding];const b=_h[i],_=3*Math.max(0,jt-2*b),S=(i===0?0:2*jt)+2*b*(i>Pn-zi?i-Pn+zi:0);zs(t,_,S,3*b,2*b),c.setRenderTarget(t),c.render(u,ma)}}function fv(s){return s===void 0||s.type!==$i?!1:s.encoding===Rt||s.encoding===Hr||s.encoding===uo}function pv(){const s=[],e=[],t=[];let n=Pn;for(let i=0;i<Sf;i++){const r=Math.pow(2,n);e.push(r);let o=1/r;i>Pn-zi?o=Mf[i-Pn+zi-1]:i==0&&(o=0),t.push(o);const a=1/(r-1),c=-a/2,l=1+a/2,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,p=2,x=1,y=new Float32Array(f*d*u),g=new Float32Array(p*d*u),m=new Float32Array(x*d*u);for(let _=0;_<u;_++){const S=_%3*2/3-1,v=_>2?0:-1,A=[S,v,0,S+2/3,v,0,S+2/3,v+1,0,S,v,0,S+2/3,v+1,0,S,v+1,0];y.set(A,f*d*_),g.set(h,p*d*_);const R=[_,_,_,_,_,_];m.set(R,x*d*_)}const b=new _e;b.setAttribute("position",new Ne(y,f)),b.setAttribute("uv",new Ne(g,p)),b.setAttribute("faceIndex",new Ne(m,x)),s.push(b),n>zi&&n--}return{_lodPlanes:s,_sizeLods:e,_sigmas:t}}function Sh(s){const e=new un(3*jt,3*jt,s);return e.texture.mapping=Zi,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function zs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function mv(s){const e=new Float32Array(s),t=new w(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:s},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Kt[Rt]},outputEncoding:{value:Kt[Rt]}},vertexShader:Jl(),fragmentShader:`

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

			${jl()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Th(){const s=new Z(1,1);return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:s},inputEncoding:{value:Kt[Rt]},outputEncoding:{value:Kt[Rt]}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${jl()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Eh(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Kt[Rt]},outputEncoding:{value:Kt[Rt]}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${jl()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function jl(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}const gv=0,xv=1,yv=0,vv=1,_v=2;function bv(s){return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."),s}function wv(s=[]){return console.warn("THREE.MultiMaterial has been removed. Use an Array instead."),s.isMultiMaterial=!0,s.materials=s,s.clone=function(){return s.slice()},s}function Mv(s,e){return console.warn("THREE.PointCloud has been renamed to THREE.Points."),new Xr(s,e)}function Sv(s){return console.warn("THREE.Particle has been renamed to THREE.Sprite."),new wo(s)}function Tv(s,e){return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),new Xr(s,e)}function Ev(s){return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),new li(s)}function Av(s){return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),new li(s)}function Lv(s){return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),new li(s)}function Rv(s,e,t){return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),new w(s,e,t)}function Cv(s,e){return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead."),new Ne(s,e).setUsage(Gi)}function Pv(s,e){return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."),new pd(s,e)}function Dv(s,e){return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."),new md(s,e)}function Iv(s,e){return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."),new gd(s,e)}function Nv(s,e){return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."),new xd(s,e)}function Fv(s,e){return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."),new po(s,e)}function Bv(s,e){return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."),new yd(s,e)}function Ov(s,e){return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."),new mo(s,e)}function zv(s,e){return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."),new pe(s,e)}function kv(s,e){return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."),new _d(s,e)}kt.create=function(s,e){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(kt.prototype),s.prototype.constructor=s,s.prototype.getPoint=e,s};Br.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};function Uv(s){return console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper."),new bf(s)}function Gv(s,e){return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."),new _f(s,e)}function Hv(s,e){return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),new It(new gl(s.geometry),new xt({color:e!==void 0?e:16777215}))}vf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};xf.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};function Vv(s,e){return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),new It(new xl(s.geometry),new xt({color:e!==void 0?e:16777215}))}Tt.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Hl.extractUrlBase(s)};Tt.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};function Wv(s){return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."),new en(s)}function qv(s){return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."),new Xd(s)}Qi.prototype.center=function(s){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(s)};Qi.prototype.empty=function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Qi.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Qi.prototype.size=function(s){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(s)};Nt.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};Nt.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Nt.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Nt.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Nt.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Fn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Wr.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};mf.prototype.center=function(s){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(s)};dt.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};dt.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};dt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};dt.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};dt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};dt.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};xe.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};xe.prototype.flattenToArrayOffset=function(s,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,e)};xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new w().setFromMatrixColumn(this,3)};xe.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xe.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xe.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};xe.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xe.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xe.prototype.makeFrustum=function(s,e,t,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,e,n,t,i,r)};xe.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};qt.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};st.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};st.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Bn.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Bn.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Bn.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};nt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};nt.prototype.barycoordFromPoint=function(s,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,e)};nt.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};nt.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};nt.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};nt.barycoordFromPoint=function(s,e,t,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),nt.getBarycoord(s,e,t,n,i)};nt.normal=function(s,e,t,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),nt.getNormal(s,e,t,n)};Cn.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Cn.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new pn(this,s)};Cn.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Pr(this,s)};Z.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};Z.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};Z.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};w.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};w.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};w.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};w.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};w.prototype.getColumnFromMatrix=function(s,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,s)};w.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};w.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};w.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};w.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qe.prototype.fromAttribute=function(s,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,e,t)};qe.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Fe.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};Fe.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Fe.prototype.translate=function(s,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,s)};Fe.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Fe.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(Fe.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ot.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ot.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),rd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Mo.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};gt.prototype.setLens=function(s,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(s)};Object.defineProperties(Xt.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Ne.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Gi},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Gi)}}});Ne.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Gi:Ui),this};Ne.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ne.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};_e.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};_e.prototype.addAttribute=function(s,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Ne(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(s,e)};_e.prototype.addDrawCall=function(s,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,e)};_e.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};_e.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};_e.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};_e.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(_e.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});yn.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?Gi:Ui),this};yn.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};pn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};pn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};pn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};_o.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Do.prototype.onUpdate=function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this};Object.defineProperties(at.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new fe}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===el}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}}});Object.defineProperties(dn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});Xe.prototype.clearTarget=function(s,e,t,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(e,t,n)};Xe.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};Xe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Xe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Xe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Xe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Xe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Xe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Xe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Xe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Xe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Xe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Xe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Xe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Xe.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};Xe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Xe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Xe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Xe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Xe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Xe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Xe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Xe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Xe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Xe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Xe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?Hr:Rt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Pd.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});function Zv(s,e,t){return console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options )."),new xo(s,t)}Object.defineProperties(un.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});Xl.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new sf().load(s,function(n){e.setBuffer(n)}),this};cf.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};go.prototype.updateCubeMap=function(s,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,e)};go.prototype.clear=function(s,e,t,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,e,t,n)};oi.crossOrigin=void 0;oi.loadTexture=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new $d;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};oi.loadTextureCube=function(s,e,t,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Zd;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,t,void 0,n);return e&&(r.mapping=e),r};oi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};oi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};function Xv(){console.error("THREE.CanvasRenderer has been removed")}function $v(){console.error("THREE.JSONLoader has been removed.")}const Yv={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};function Jv(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ka);const jv=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:au,AddEquation:Jn,AddOperation:iu,AdditiveAnimationBlendMode:rl,AdditiveBlending:Ma,AlphaFormat:mu,AlwaysDepth:Jh,AlwaysStencilFunc:cd,AmbientLight:kl,AmbientLightProbe:af,AnimationClip:Fr,AnimationLoader:wy,AnimationMixer:df,AnimationObjectGroup:uf,AnimationUtils:Je,ArcCurve:Rl,ArrayCamera:dl,ArrowHelper:lv,Audio:Xl,AudioAnalyser:cf,AudioContext:Zl,AudioListener:zy,AudioLoader:sf,AxesHelper:bf,AxisHelper:Uv,BackSide:rt,BasicDepthPacking:od,BasicShadowMap:Uf,BinaryTextureLoader:qv,Bone:So,BooleanKeyframeTrack:ci,BoundingBoxHelper:Gv,Box2:Qi,Box3:Nt,Box3Helper:ov,BoxBufferGeometry:ii,BoxGeometry:ii,BoxHelper:_f,BufferAttribute:Ne,BufferGeometry:_e,BufferGeometryLoader:tf,ByteType:cu,Cache:ri,Camera:Vr,CameraHelper:sv,CanvasRenderer:Xv,CanvasTexture:Od,CatmullRomCurve3:Pl,CineonToneMapping:ou,CircleBufferGeometry:Js,CircleGeometry:Js,ClampToEdgeWrapping:Lt,Clock:lf,Color:fe,ColorKeyframeTrack:Al,CompressedTexture:ml,CompressedTextureLoader:My,ConeBufferGeometry:js,ConeGeometry:js,CubeCamera:go,CubeReflectionMapping:kr,CubeRefractionMapping:Ur,CubeTexture:Yi,CubeTextureLoader:Zd,CubeUVReflectionMapping:Zi,CubeUVRefractionMapping:Gr,CubicBezierCurve:Ro,CubicBezierCurve3:Dl,CubicInterpolant:Hd,CullFaceBack:wa,CullFaceFront:Fh,CullFaceFrontBack:kf,CullFaceNone:Nh,Curve:kt,CurvePath:Jd,CustomBlending:Oh,CustomToneMapping:lu,CylinderBufferGeometry:Wi,CylinderGeometry:Wi,Cylindrical:Ky,DataTexture:Vi,DataTexture2DArray:hl,DataTexture3D:ul,DataTextureLoader:Xd,DataUtils:hv,DecrementStencilOp:jf,DecrementWrapStencilOp:Qf,DefaultLoadingManager:qd,DepthFormat:ti,DepthStencilFormat:ki,DepthTexture:zd,DirectionalLight:zl,DirectionalLightHelper:rv,DiscreteInterpolant:Vd,DodecahedronBufferGeometry:Ks,DodecahedronGeometry:Ks,DoubleSide:Or,DstAlphaFactor:Wh,DstColorFactor:Zh,DynamicBufferAttribute:Cv,DynamicCopyUsage:fp,DynamicDrawUsage:Gi,DynamicReadUsage:hp,EdgesGeometry:gl,EdgesHelper:Hv,EllipseCurve:$r,EqualDepth:Kh,EqualStencilFunc:ip,EquirectangularReflectionMapping:Zs,EquirectangularRefractionMapping:Xs,Euler:ai,EventDispatcher:gn,ExtrudeBufferGeometry:pn,ExtrudeGeometry:pn,FaceColors:vv,FileLoader:en,FlatShading:el,Float16BufferAttribute:vd,Float32Attribute:zv,Float32BufferAttribute:pe,Float64Attribute:kv,Float64BufferAttribute:_d,FloatType:cn,Fog:Zr,FogExp2:qr,Font:ql,FontLoader:Fy,FrontSide:qi,Frustum:Wr,GLBufferAttribute:pf,GLSL1:mp,GLSL3:za,GammaEncoding:uo,GreaterDepth:eu,GreaterEqualDepth:Qh,GreaterEqualStencilFunc:ap,GreaterStencilFunc:sp,GridHelper:vf,Group:Qn,HalfFloatType:br,HemisphereLight:Nl,HemisphereLightHelper:nv,HemisphereLightProbe:of,IcosahedronBufferGeometry:Qs,IcosahedronGeometry:Qs,ImageBitmapLoader:nf,ImageLoader:Lo,ImageUtils:oi,ImmediateRenderObject:gf,IncrementStencilOp:Jf,IncrementWrapStencilOp:Kf,InstancedBufferAttribute:Wl,InstancedBufferGeometry:Vl,InstancedInterleavedBuffer:ff,InstancedMesh:fl,Int16Attribute:Nv,Int16BufferAttribute:xd,Int32Attribute:Bv,Int32BufferAttribute:yd,Int8Attribute:Pv,Int8BufferAttribute:pd,IntType:uu,InterleavedBuffer:yn,InterleavedBufferAttribute:Dn,Interpolant:mn,InterpolateDiscrete:wr,InterpolateLinear:Mr,InterpolateSmooth:Us,InvertStencilOp:ep,JSONLoader:$v,KeepStencilOp:Gs,KeyframeTrack:$t,LOD:Fd,LatheBufferGeometry:eo,LatheGeometry:eo,Layers:cl,LensFlare:Jv,LessDepth:jh,LessEqualDepth:qs,LessEqualStencilFunc:rp,LessStencilFunc:np,Light:Xt,LightProbe:jr,Line:fn,Line3:mf,LineBasicMaterial:xt,LineCurve:Yr,LineCurve3:Yd,LineDashedMaterial:Tl,LineLoop:pl,LinePieces:xv,LineSegments:It,LineStrip:gv,LinearEncoding:Rt,LinearFilter:ut,LinearInterpolant:El,LinearMipMapLinearFilter:qf,LinearMipMapNearestFilter:Wf,LinearMipmapLinearFilter:Xi,LinearMipmapNearestFilter:il,LinearToneMapping:ru,Loader:Tt,LoaderUtils:Hl,LoadingManager:Ll,LogLuvEncoding:sd,LoopOnce:td,LoopPingPong:id,LoopRepeat:nd,LuminanceAlphaFormat:xu,LuminanceFormat:gu,MOUSE:Zn,Material:at,MaterialLoader:ef,Math:ac,MathUtils:ac,Matrix3:dt,Matrix4:xe,MaxEquation:Aa,Mesh:ot,MeshBasicMaterial:xn,MeshDepthMaterial:yo,MeshDistanceMaterial:vo,MeshFaceMaterial:bv,MeshLambertMaterial:Ml,MeshMatcapMaterial:Sl,MeshNormalMaterial:wl,MeshPhongMaterial:_l,MeshPhysicalMaterial:vl,MeshStandardMaterial:Ao,MeshToonMaterial:bl,MinEquation:Ea,MirroredRepeatWrapping:vr,MixOperation:nu,MultiMaterial:wv,MultiplyBlending:Ta,MultiplyOperation:zr,NearestFilter:ht,NearestMipMapLinearFilter:Vf,NearestMipMapNearestFilter:Hf,NearestMipmapLinearFilter:Ys,NearestMipmapNearestFilter:$s,NeverDepth:Yh,NeverStencilFunc:tp,NoBlending:hn,NoColors:yv,NoToneMapping:ei,NormalAnimationBlendMode:ho,NormalBlending:Bi,NotEqualDepth:tu,NotEqualStencilFunc:op,NumberKeyframeTrack:Ir,Object3D:Fe,ObjectLoader:Py,ObjectSpaceNormalMap:ld,OctahedronBufferGeometry:Cr,OctahedronGeometry:Cr,OneFactor:Gh,OneMinusDstAlphaFactor:qh,OneMinusDstColorFactor:Xh,OneMinusSrcAlphaFactor:nl,OneMinusSrcColorFactor:Vh,OrthographicCamera:Jr,PCFShadowMap:Qa,PCFSoftShadowMap:Bh,PMREMGenerator:dv,ParametricBufferGeometry:to,ParametricGeometry:to,Particle:Sv,ParticleBasicMaterial:Av,ParticleSystem:Tv,ParticleSystemMaterial:Lv,Path:Br,PerspectiveCamera:gt,Plane:qt,PlaneBufferGeometry:Er,PlaneGeometry:Er,PlaneHelper:av,PointCloud:Mv,PointCloudMaterial:Ev,PointLight:Ol,PointLightHelper:ev,Points:Xr,PointsMaterial:li,PolarGridHelper:iv,PolyhedronBufferGeometry:In,PolyhedronGeometry:In,PositionalAudio:Uy,PropertyBinding:Ge,PropertyMixer:hf,QuadraticBezierCurve:Co,QuadraticBezierCurve3:Il,Quaternion:st,QuaternionKeyframeTrack:Ki,QuaternionLinearInterpolant:Wd,REVISION:Ka,RGBADepthPacking:ad,RGBAFormat:Ot,RGBAIntegerFormat:Su,RGBA_ASTC_10x10_Format:Ou,RGBA_ASTC_10x5_Format:Nu,RGBA_ASTC_10x6_Format:Fu,RGBA_ASTC_10x8_Format:Bu,RGBA_ASTC_12x10_Format:zu,RGBA_ASTC_12x12_Format:ku,RGBA_ASTC_4x4_Format:Eu,RGBA_ASTC_5x4_Format:Au,RGBA_ASTC_5x5_Format:Lu,RGBA_ASTC_6x5_Format:Ru,RGBA_ASTC_6x6_Format:Cu,RGBA_ASTC_8x5_Format:Pu,RGBA_ASTC_8x6_Format:Du,RGBA_ASTC_8x8_Format:Iu,RGBA_BPTC_Format:Uu,RGBA_ETC2_EAC_Format:Oa,RGBA_PVRTC_2BPPV1_Format:Fa,RGBA_PVRTC_4BPPV1_Format:Na,RGBA_S3TC_DXT1_Format:Ra,RGBA_S3TC_DXT3_Format:Ca,RGBA_S3TC_DXT5_Format:Pa,RGBDEncoding:al,RGBEEncoding:fo,RGBEFormat:yu,RGBFormat:Ln,RGBIntegerFormat:Mu,RGBM16Encoding:ol,RGBM7Encoding:sl,RGB_ETC1_Format:Tu,RGB_ETC2_Format:Ba,RGB_PVRTC_2BPPV1_Format:Ia,RGB_PVRTC_4BPPV1_Format:Da,RGB_S3TC_DXT1_Format:La,RGFormat:bu,RGIntegerFormat:wu,RawShaderMaterial:ji,Ray:Bn,Raycaster:jy,RectAreaLight:Ul,RedFormat:vu,RedIntegerFormat:_u,ReinhardToneMapping:su,RepeatWrapping:yr,ReplaceStencilOp:Yf,ReverseSubtractEquation:kh,RingBufferGeometry:no,RingGeometry:no,SRGB8_ALPHA8_ASTC_10x10_Format:Ku,SRGB8_ALPHA8_ASTC_10x5_Format:Yu,SRGB8_ALPHA8_ASTC_10x6_Format:Ju,SRGB8_ALPHA8_ASTC_10x8_Format:ju,SRGB8_ALPHA8_ASTC_12x10_Format:Qu,SRGB8_ALPHA8_ASTC_12x12_Format:ed,SRGB8_ALPHA8_ASTC_4x4_Format:Gu,SRGB8_ALPHA8_ASTC_5x4_Format:Hu,SRGB8_ALPHA8_ASTC_5x5_Format:Vu,SRGB8_ALPHA8_ASTC_6x5_Format:Wu,SRGB8_ALPHA8_ASTC_6x6_Format:qu,SRGB8_ALPHA8_ASTC_8x5_Format:Zu,SRGB8_ALPHA8_ASTC_8x6_Format:Xu,SRGB8_ALPHA8_ASTC_8x8_Format:$u,Scene:_o,SceneUtils:Yv,ShaderChunk:Ie,ShaderLib:Zt,ShaderMaterial:dn,ShadowMaterial:yl,Shape:Cn,ShapeBufferGeometry:Pr,ShapeGeometry:Pr,ShapePath:rf,ShapeUtils:Qt,ShortType:hu,Skeleton:To,SkeletonHelper:xf,SkinnedMesh:Mo,SmoothShading:Gf,Sphere:Fn,SphereBufferGeometry:Dr,SphereGeometry:Dr,Spherical:Za,SphericalHarmonics3:Gl,SplineCurve:Po,SpotLight:Bl,SpotLightHelper:Qy,Sprite:wo,SpriteMaterial:bo,SrcAlphaFactor:tl,SrcAlphaSaturateFactor:$h,SrcColorFactor:Hh,StaticCopyUsage:dp,StaticDrawUsage:Ui,StaticReadUsage:cp,StereoCamera:By,StreamCopyUsage:pp,StreamDrawUsage:lp,StreamReadUsage:up,StringKeyframeTrack:hi,SubtractEquation:zh,SubtractiveBlending:Sa,TOUCH:Xn,TangentSpaceNormalMap:si,TetrahedronBufferGeometry:io,TetrahedronGeometry:io,TextBufferGeometry:ro,TextGeometry:ro,Texture:ft,TextureLoader:$d,TorusBufferGeometry:so,TorusGeometry:so,TorusKnotBufferGeometry:oo,TorusKnotGeometry:oo,Triangle:nt,TriangleFanDrawMode:Xf,TriangleStripDrawMode:Zf,TrianglesDrawMode:rd,TubeBufferGeometry:ao,TubeGeometry:ao,UVMapping:co,Uint16Attribute:Fv,Uint16BufferAttribute:po,Uint32Attribute:Ov,Uint32BufferAttribute:mo,Uint8Attribute:Dv,Uint8BufferAttribute:md,Uint8ClampedAttribute:Iv,Uint8ClampedBufferAttribute:gd,Uniform:Do,UniformsLib:le,UniformsUtils:wd,UnsignedByteType:$i,UnsignedInt248Type:Oi,UnsignedIntType:pr,UnsignedShort4444Type:du,UnsignedShort5551Type:fu,UnsignedShort565Type:pu,UnsignedShortType:_r,VSMShadowMap:Di,Vector2:Z,Vector3:w,Vector4:qe,VectorKeyframeTrack:Nr,Vertex:Rv,VertexColors:_v,VideoTexture:Bd,WebGL1Renderer:Id,WebGLCubeRenderTarget:xo,WebGLMultisampleRenderTarget:dd,WebGLRenderTarget:un,WebGLRenderTargetCube:Zv,WebGLRenderer:Xe,WebGLUtils:Dd,WireframeGeometry:xl,WireframeHelper:Vv,WrapAroundEnding:Sr,XHRLoader:Wv,ZeroCurvatureEnding:jn,ZeroFactor:Uh,ZeroSlopeEnding:Kn,ZeroStencilOp:$f,sRGBEncoding:Hr},Symbol.toStringTag,{value:"Module"})),Ah={type:"change"},xa={type:"start"},ya={type:"end"};class Kv extends gn{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zn.ROTATE,MIDDLE:Zn.DOLLY,RIGHT:Zn.PAN},this.touches={ONE:Xn.ROTATE,TWO:Xn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.listenToKeyEvents=function(P){P.addEventListener("keydown",X),this._domElementKeyEvents=P},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ah),n.update(),r=i.NONE},this.update=(function(){const P=new w,C=new st().setFromUnitVectors(e.up,new w(0,1,0)),Q=C.clone().invert(),te=new w,ge=new st,J=2*Math.PI;return function(){const He=n.object.position;P.copy(He).sub(n.target),P.applyQuaternion(C),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&A(S()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let We=n.minAzimuthAngle,yt=n.maxAzimuthAngle;return isFinite(We)&&isFinite(yt)&&(We<-Math.PI?We+=J:We>Math.PI&&(We-=J),yt<-Math.PI?yt+=J:yt>Math.PI&&(yt-=J),We<=yt?a.theta=Math.max(We,Math.min(yt,a.theta)):a.theta=a.theta>(We+yt)/2?Math.max(We,a.theta):Math.min(yt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(a),P.applyQuaternion(Q),He.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,u||te.distanceToSquared(n.object.position)>o||8*(1-ge.dot(n.object.quaternion))>o?(n.dispatchEvent(Ah),te.copy(n.object.position),ge.copy(n.object.quaternion),u=!1,!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ze),n.domElement.removeEventListener("pointerdown",ne),n.domElement.removeEventListener("wheel",E),n.domElement.removeEventListener("touchstart",Y),n.domElement.removeEventListener("touchend",me),n.domElement.removeEventListener("touchmove",he),n.domElement.ownerDocument.removeEventListener("pointermove",se),n.domElement.ownerDocument.removeEventListener("pointerup",oe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",X)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Za,c=new Za;let l=1;const h=new w;let u=!1;const d=new Z,f=new Z,p=new Z,x=new Z,y=new Z,g=new Z,m=new Z,b=new Z,_=new Z;function S(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(P){c.theta-=P}function R(P){c.phi-=P}const I=(function(){const P=new w;return function(Q,te){P.setFromMatrixColumn(te,0),P.multiplyScalar(-Q),h.add(P)}})(),O=(function(){const P=new w;return function(Q,te){n.screenSpacePanning===!0?P.setFromMatrixColumn(te,1):(P.setFromMatrixColumn(te,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Q),h.add(P)}})(),U=(function(){const P=new w;return function(Q,te){const ge=n.domElement;if(n.object.isPerspectiveCamera){const J=n.object.position;P.copy(J).sub(n.target);let we=P.length();we*=Math.tan(n.object.fov/2*Math.PI/180),I(2*Q*we/ge.clientHeight,n.object.matrix),O(2*te*we/ge.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(Q*(n.object.right-n.object.left)/n.object.zoom/ge.clientWidth,n.object.matrix),O(te*(n.object.top-n.object.bottom)/n.object.zoom/ge.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function z(P){n.object.isPerspectiveCamera?l/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(P){n.object.isPerspectiveCamera?l*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(P){d.set(P.clientX,P.clientY)}function B(P){m.set(P.clientX,P.clientY)}function D(P){x.set(P.clientX,P.clientY)}function W(P){f.set(P.clientX,P.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const C=n.domElement;A(2*Math.PI*p.x/C.clientHeight),R(2*Math.PI*p.y/C.clientHeight),d.copy(f),n.update()}function ee(P){b.set(P.clientX,P.clientY),_.subVectors(b,m),_.y>0?z(v()):_.y<0&&F(v()),m.copy(b),n.update()}function $(P){y.set(P.clientX,P.clientY),g.subVectors(y,x).multiplyScalar(n.panSpeed),U(g.x,g.y),x.copy(y),n.update()}function ae(P){P.deltaY<0?F(v()):P.deltaY>0&&z(v()),n.update()}function re(P){let C=!1;switch(P.code){case n.keys.UP:U(0,n.keyPanSpeed),C=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),C=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),C=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),C=!0;break}C&&(P.preventDefault(),n.update())}function ve(P){if(P.touches.length==1)d.set(P.touches[0].pageX,P.touches[0].pageY);else{const C=.5*(P.touches[0].pageX+P.touches[1].pageX),Q=.5*(P.touches[0].pageY+P.touches[1].pageY);d.set(C,Q)}}function Me(P){if(P.touches.length==1)x.set(P.touches[0].pageX,P.touches[0].pageY);else{const C=.5*(P.touches[0].pageX+P.touches[1].pageX),Q=.5*(P.touches[0].pageY+P.touches[1].pageY);x.set(C,Q)}}function H(P){const C=P.touches[0].pageX-P.touches[1].pageX,Q=P.touches[0].pageY-P.touches[1].pageY,te=Math.sqrt(C*C+Q*Q);m.set(0,te)}function ke(P){n.enableZoom&&H(P),n.enablePan&&Me(P)}function Be(P){n.enableZoom&&H(P),n.enableRotate&&ve(P)}function Se(P){if(P.touches.length==1)f.set(P.touches[0].pageX,P.touches[0].pageY);else{const Q=.5*(P.touches[0].pageX+P.touches[1].pageX),te=.5*(P.touches[0].pageY+P.touches[1].pageY);f.set(Q,te)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const C=n.domElement;A(2*Math.PI*p.x/C.clientHeight),R(2*Math.PI*p.y/C.clientHeight),d.copy(f)}function be(P){if(P.touches.length==1)y.set(P.touches[0].pageX,P.touches[0].pageY);else{const C=.5*(P.touches[0].pageX+P.touches[1].pageX),Q=.5*(P.touches[0].pageY+P.touches[1].pageY);y.set(C,Q)}g.subVectors(y,x).multiplyScalar(n.panSpeed),U(g.x,g.y),x.copy(y)}function Oe(P){const C=P.touches[0].pageX-P.touches[1].pageX,Q=P.touches[0].pageY-P.touches[1].pageY,te=Math.sqrt(C*C+Q*Q);b.set(0,te),_.set(0,Math.pow(b.y/m.y,n.zoomSpeed)),z(_.y),m.copy(b)}function Pe(P){n.enableZoom&&Oe(P),n.enablePan&&be(P)}function De(P){n.enableZoom&&Oe(P),n.enableRotate&&Se(P)}function ne(P){if(n.enabled!==!1)switch(P.pointerType){case"mouse":case"pen":ye(P);break}}function se(P){if(n.enabled!==!1)switch(P.pointerType){case"mouse":case"pen":de(P);break}}function oe(P){switch(P.pointerType){case"mouse":case"pen":L();break}}function ye(P){P.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus();let C;switch(P.button){case 0:C=n.mouseButtons.LEFT;break;case 1:C=n.mouseButtons.MIDDLE;break;case 2:C=n.mouseButtons.RIGHT;break;default:C=-1}switch(C){case Zn.DOLLY:if(n.enableZoom===!1)return;B(P),r=i.DOLLY;break;case Zn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;D(P),r=i.PAN}else{if(n.enableRotate===!1)return;N(P),r=i.ROTATE}break;case Zn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;N(P),r=i.ROTATE}else{if(n.enablePan===!1)return;D(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",se),n.domElement.ownerDocument.addEventListener("pointerup",oe),n.dispatchEvent(xa))}function de(P){if(n.enabled!==!1)switch(P.preventDefault(),r){case i.ROTATE:if(n.enableRotate===!1)return;W(P);break;case i.DOLLY:if(n.enableZoom===!1)return;ee(P);break;case i.PAN:if(n.enablePan===!1)return;$(P);break}}function L(P){n.domElement.ownerDocument.removeEventListener("pointermove",se),n.domElement.ownerDocument.removeEventListener("pointerup",oe),n.enabled!==!1&&(n.dispatchEvent(ya),r=i.NONE)}function E(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE&&r!==i.ROTATE||(P.preventDefault(),n.dispatchEvent(xa),ae(P),n.dispatchEvent(ya))}function X(P){n.enabled===!1||n.enablePan===!1||re(P)}function Y(P){if(n.enabled!==!1){switch(P.preventDefault(),P.touches.length){case 1:switch(n.touches.ONE){case Xn.ROTATE:if(n.enableRotate===!1)return;ve(P),r=i.TOUCH_ROTATE;break;case Xn.PAN:if(n.enablePan===!1)return;Me(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Xn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ke(P),r=i.TOUCH_DOLLY_PAN;break;case Xn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Be(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(xa)}}function he(P){if(n.enabled!==!1)switch(P.preventDefault(),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;be(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(P),n.update();break;default:r=i.NONE}}function me(P){n.enabled!==!1&&(n.dispatchEvent(ya),r=i.NONE)}function ze(P){n.enabled!==!1&&P.preventDefault()}n.domElement.addEventListener("contextmenu",ze),n.domElement.addEventListener("pointerdown",ne),n.domElement.addEventListener("wheel",E,{passive:!1}),n.domElement.addEventListener("touchstart",Y,{passive:!1}),n.domElement.addEventListener("touchend",me),n.domElement.addEventListener("touchmove",he,{passive:!1}),this.update()}}const ie={...jv,OrbitControls:Kv};function Lh(s,e){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()||e}class Qv{constructor(e,t){this.container=e,this.labelLayer=t,this.renderer=new ie.WebGLRenderer({antialias:!0}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ie.PCFSoftShadowMap,"outputEncoding"in this.renderer&&(this.renderer.outputEncoding=ie.sRGBEncoding),e.appendChild(this.renderer.domElement),this.scene=new ie.Scene,this.camera=new ie.PerspectiveCamera(35,1,.01,20),this.camera.position.set(.42,.42,.95),this.controls=new ie.OrbitControls(this.camera,this.renderer.domElement),this.controls.target.set(.06,.17,0),this.controls.enableDamping=!0,this.controls.minDistance=.08,this.controls.maxDistance=3,this.controls.maxPolarAngle=Math.PI*.49;const n=new ie.HemisphereLight(16777215,8028044,.75);this.scene.add(n);const i=new ie.DirectionalLight(16777215,.85);i.position.set(.6,1.4,.8),i.castShadow=!0,i.shadow.mapSize.set(2048,2048);const r=.9;Object.assign(i.shadow.camera,{left:-r,right:r,top:r,bottom:-r,near:.1,far:4}),i.shadow.bias=-5e-4,this.scene.add(i),this.mats={wood:new ie.MeshStandardMaterial({color:13149302,roughness:.85}),woodDark:new ie.MeshStandardMaterial({color:10254928,roughness:.9}),rubber:new ie.MeshStandardMaterial({color:1780664,roughness:.7}),steel:new ie.MeshStandardMaterial({color:12173e3,metalness:.75,roughness:.35}),brass:new ie.MeshStandardMaterial({color:13214247,metalness:.7,roughness:.35}),motor:new ie.MeshStandardMaterial({color:9080988,metalness:.5,roughness:.45}),black:new ie.MeshStandardMaterial({color:2303533,roughness:.6}),servo:new ie.MeshStandardMaterial({color:2895670,roughness:.55}),char:new ie.MeshStandardMaterial({color:7304061,roughness:.6}),obs:new ie.MeshStandardMaterial({color:14726234,roughness:.75}),obsHit:new ie.MeshStandardMaterial({color:14240314,roughness:.6}),gearHl:new ie.MeshStandardMaterial({color:2783446,emissive:1724368,emissiveIntensity:.6,roughness:.4}),ground:new ie.MeshStandardMaterial({color:14277859,roughness:1})},this.ground=new ie.Mesh(new ie.PlaneGeometry(6,6),this.mats.ground),this.ground.rotation.x=-Math.PI/2,this.ground.receiveShadow=!0,this.scene.add(this.ground),this.rig=new ie.Group,this.scene.add(this.rig),this.labels=[],this.showLabels=!0,this.gearHl=null,this.focus="all",this.camAnim=null,this.applyTheme(),this.resize(),new ResizeObserver(()=>this.resize()).observe(e)}applyTheme(){const e=Lh("--scene-bg","#e4e7ee");this.scene.background=new ie.Color(e),this.mats.ground.color=new ie.Color(Lh("--scene-ground","#d9dce3"))}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;!e||!t||(this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}clearRig(){this.rig.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.scene.remove(this.rig),this.rig=new ie.Group,this.scene.add(this.rig),this.labelLayer.innerHTML="",this.labels=[]}mesh(e,t,n){const i=new ie.Mesh(e,t);return i.castShadow=!0,i.receiveShadow=!0,(n||this.rig).add(i),i}label(e,t,n){const i=document.createElement("div");i.className="label3d",i.textContent=e,this.labelLayer.appendChild(i),this.labels.push({el:i,obj:t,offset:new ie.Vector3(...n)})}highlightGear(e){this.gearHl=e;for(const[t,n]of Object.entries(this.gearMeshes||{}))for(const i of n)i.material=t===e?this.mats.gearHl:this.mats.brass;for(const[t,n]of Object.entries(this.gearTags||{}))n.el.classList.toggle("active",t===e)}tagPart(e,t){e.traverse(n=>{n.userData.part||(n.userData.part=t)})}applyFocus(){if(!this.charRoot)return;const e=this.focus,t=n=>e!=="all"&&(n.userData.part==="belt"||n.userData.part==="char")&&n.userData.part!==e;for(const n of this.rig.children)n.visible=!t(n);for(const n of this.labels)n.dim=t(n.obj)}setFocus(e,t=!0){this.focus=e,this.applyFocus();const n=new ie.Box3;let i;e==="all"?(this.rig.traverse(h=>{h.isMesh&&h.userData.part!=="obs"&&n.expandByObject(h)}),i=new ie.Vector3(.36,.25,.95)):e==="char"?(n.setFromObject(this.charRoot),n.min.y=Math.max(n.min.y,this.beltTop-.02),i=new ie.Vector3(.35,.18,1)):(this.rig.traverse(h=>{h.isMesh&&h.userData.part==="belt"&&n.expandByObject(h)}),i=new ie.Vector3(.55,.6,1));const r=n.getBoundingSphere(new ie.Sphere),o=ie.MathUtils.degToRad(this.camera.fov),a=2*Math.atan(Math.tan(o/2)*this.camera.aspect),c=r.radius/Math.sin(Math.min(o,a)/2)*(e==="all"?.72:.95),l=r.center;this.flyTo(l.clone().add(i.normalize().multiplyScalar(c)),l,t)}flyTo(e,t,n){if(!n||matchMedia("(prefers-reduced-motion: reduce)").matches){this.camAnim=null,this.camera.position.copy(e),this.controls.target.copy(t);return}this.camAnim={p0:this.camera.position.clone(),t0:this.controls.target.clone(),p1:e,t1:t,start:performance.now(),dur:650}}gear(e,t,n,i,r){const o=new ie.CylinderGeometry(e,t,n,Math.max(8,i),1);return this.mesh(o,r)}build(e,t,n){this.clearRig();const i=t.d;this.p=e,this.out=t,this.d=i;const r=i.R,o=i.span,a=e.width,c=Math.max(e.thick,.002);this.H=r+.06;const l=new ie.Group;l.position.y=this.H,this.rig.add(l),this.base=l;const h=new ie.BoxGeometry(o+4*r+.06,2*r+.06,.012);for(const N of[-1,1])this.mesh(h,this.mats.woodDark,l).position.set(0,-.012,N*(a/2+.03));const u=new ie.BoxGeometry(.03,this.H,.03);for(const N of[-1,1])for(const B of[-1,1])this.mesh(u,this.mats.woodDark).position.set(N*(o/2+2*r),this.H/2-.01,B*(a/2+.03));e.deck&&this.mesh(new ie.BoxGeometry(o-2*r,.006,a*.92),this.mats.woodDark,l).position.set(0,r-.004,0),this.rollers=[];const d=new ie.CylinderGeometry(r,r,.022,40),f=new ie.CylinderGeometry(e.dShaft/2,e.dShaft/2,a+.12,16);for(const N of[-o/2,o/2]){const B=new ie.Group;B.position.set(N,0,0),l.add(B);const D=this.mesh(f,this.mats.steel,B);D.rotation.x=Math.PI/2,D.position.z=.03;for(const W of[-1,1]){const ee=this.mesh(d,this.mats.rubber,B);ee.rotation.x=Math.PI/2,ee.position.z=W*(a/2-.02);const $=this.mesh(new ie.BoxGeometry(r*1.6,.004,.024),this.mats.steel,B);$.position.z=W*(a/2-.02)}this.rollers.push(B)}this.label(M("Caoutchouc wheels","Roues caoutchouc"),this.rollers[0],[0,r+.02,a/2]);const p=a/2+.075,x=.0012,y=N=>N*x/2,g=new ie.Group;g.position.set(0,0,p),l.add(g);const m=this.mesh(new ie.CylinderGeometry(.004,.004,o,12),this.mats.steel,g);m.rotation.z=Math.PI/2,this.shaft=g,this.shaftGears=[],this.axleGears=[];const b=this.gearMeshes={Z1:[],Z2:[],Z3:[],Z4:[]};this.gearTags={};const _=M({Z1:"motor pinion",Z2:"crown",Z3:"shaft end ×2",Z4:"roller axle ×2"},{Z1:"pignon moteur",Z2:"couronne",Z3:"bout d’arbre ×2",Z4:"axe de rouleau ×2"}),S=(N,B,D)=>{this.label(`${N} · ${_[N]} · ${e[N]}${M("t","d")}`,B,D);const W=this.labels[this.labels.length-1];W.el.classList.add("gearTag"),this.gearTags[N]=W};for(const N of[-1,1]){const B=this.gear(y(e.Z3)*.55,y(e.Z3),.01,e.Z3,this.mats.brass);g.add(B),B.rotation.z=N>0?-Math.PI/2:Math.PI/2,B.position.x=N*(o/2-y(e.Z4)-.004),this.shaftGears.push(B),b.Z3.push(B);const D=new ie.Group;D.position.set(N*(o/2),0,p-y(e.Z3)-.004),l.add(D);const W=this.gear(y(e.Z4)*.55,y(e.Z4),.01,e.Z4,this.mats.brass);W.rotation.x=-Math.PI/2,D.add(W),this.axleGears.push(D),b.Z4.push(W),N>0&&(S("Z3",B,[0,.03,.01]),S("Z4",D,[.02,-.03,0]))}const v=this.gear(y(e.Z2)*.55,y(e.Z2),.01,e.Z2,this.mats.brass);g.add(v),v.rotation.z=-Math.PI/2,v.position.x=y(e.Z1)+.004,this.crown=v,b.Z2.push(v),S("Z2",v,[0,.03,-.01]),this.label(M("Transmission (rouage conique)","Transmission (rouage conique)"),g,[0,.04,0]);const A=new ie.Group;A.position.set(0,0,p+y(e.Z2)+.006),l.add(A);const R=this.gear(y(e.Z1)*.55,y(e.Z1),.01,e.Z1,this.mats.brass,A);A.add(R),R.rotation.x=Math.PI/2,this.motorPinion=R,b.Z1.push(R),S("Z1",A,[0,-.03,.01]);const I=e.type==="ac",O=I?.045:.0185,U=I?.12:.07,z=this.mesh(new ie.CylinderGeometry(O,O,U,32),this.mats.motor,A);if(z.rotation.x=Math.PI/2,z.position.z=.012+(e.gh>1?.03:0)+U/2,e.gh>1){const N=this.mesh(new ie.CylinderGeometry(O,O,.03,32),this.mats.steel,A);N.rotation.x=Math.PI/2,N.position.z=.012+.015}if(I)for(let N=0;N<10;N++){const B=this.mesh(new ie.BoxGeometry(.004,.01,U*.9),this.mats.motor,A),D=N/10*Math.PI*2;B.position.set(Math.cos(D)*(O+.004),Math.sin(D)*(O+.004),z.position.z),B.rotation.z=D}A.position.y=Math.max(0,-this.H+O+.01),this.label(I?M("AC motor","Moteur asynchrone"):M("DC motor","Moteur CC"),A,[0,O+.03,.05]),this.slatCount=Math.max(8,Math.floor(e.loopLength/e.pitch)),this.slatPitch=e.loopLength/this.slatCount;const F=new ie.BoxGeometry(this.slatPitch*.9,c,a);this.belt=new ie.InstancedMesh(F,this.mats.wood,this.slatCount),this.belt.castShadow=!0,this.belt.receiveShadow=!0,l.add(this.belt),this.beltR=r+c/2,this.label(M("Tablier (laser-cut wood)","Tablier (bois découpé laser)"),this.belt,[-o/4,r+.02,-a/2]),this.highlightGear(this.gearHl),this.obsGeo=new ie.BoxGeometry(e.lObs,e.hObs,.06),this.obsMeshes=[];for(const N of this.rig.children)this.tagPart(N,"belt");this.buildCharacter(e,t,n),this.tagPart(this.charRoot,"char"),this.applyFocus(),this.update(n)}buildCharacter(e,t,n){const i=this.d,r=t.kin,o=this.H+i.R+e.thick;this.beltTop=o;const a=.05,c=n.xChar,h=o+e.footGap+a/2+e.Larm,u=.12,d=h+u*.55,f=0,p=new ie.Group;this.rig.add(p),this.charRoot=p;const x=e.width,y=r.ok?r.rackSide:1,g=i.rpp,m=c-y*g,b=m+e.dx/2,_=d+.1,S=-(x/2+.06);this.mesh(new ie.BoxGeometry(.03,_,.03),this.mats.woodDark,p).position.set(b,_/2,S),this.mesh(new ie.BoxGeometry(.03,.025,-S-.045+.015),this.mats.woodDark,p).position.set(b,_-.0125,(S+(f-.045))/2),this.mesh(new ie.BoxGeometry(Math.max(.16,e.dx+.1),.17,.008),this.mats.wood,p).position.set(b,_-.085,f-.045);const I=new ie.Group;I.position.set(m,d,f),p.add(I);const O=this.mesh(new ie.CylinderGeometry(g,g,.012,Math.max(12,e.Zp)),this.mats.brass,I);O.rotation.x=Math.PI/2;const U=this.mesh(new ie.CylinderGeometry(.003,.003,.03,10),this.mats.steel,I);U.rotation.x=Math.PI/2,this.pinion=I,this.pinionCrankPin=this.mesh(new ie.CylinderGeometry(.003,.003,.02,10),this.mats.steel,p),this.pinionCrankPin.rotation.x=Math.PI/2,this.label("Pignon",I,[-.01,g+.015,0]);const z=new ie.Vector3(m+e.dx,d+e.dy,f-.025),F=this.mesh(new ie.BoxGeometry(.04,.02,.038),this.mats.servo,p);F.position.copy(z).add(new ie.Vector3(.01,0,-.01)),this.label("Servo",F,[.01,.03,0]);const N=new ie.Group;N.position.copy(z).setZ(f-.004),p.add(N);const B=this.mesh(new ie.BoxGeometry(e.r1+.008,.008,.004),this.mats.black,N);B.position.x=e.r1/2,this.horn=N,this.servoC=z,this.bielle=this.mesh(new ie.BoxGeometry(1,.006,.004),this.mats.black,p),this.bielleZ=f+.012,this.label("Bielle",this.bielle,[0,.015,0]);const D=new ie.Group;p.add(D),this.rack=D;const W=this.mesh(new ie.BoxGeometry(.012,u,.012),this.mats.steel,D);W.position.set(c,h+u/2,f);const ee=Math.floor(u/(Math.PI*e.module/1e3)),$=new ie.BoxGeometry(.003,.0015,.012);for(let ke=0;ke<ee;ke++)this.mesh($,this.mats.steel,D).position.set(c-y*.007,h+(ke+.5)*(Math.PI*e.module/1e3),f);this.label("Crémaillère",W,[y*.03,.02,0]),this.mesh(new ie.BoxGeometry(.03,.02,.03),this.mats.woodDark,p).position.set(c,h+u+.02,f);const re=new ie.Group;re.position.set(c,h,f),D.add(re),this.pivot=re;const ve=this.mesh(new ie.CylinderGeometry(.009,.009,.026,20),this.mats.black,re);ve.rotation.x=Math.PI/2,this.label(M("Liaison pivot + pot.","Liaison pivot + potentiomètre"),re,[-.04,0,.02]);const Me=this.mesh(new ie.BoxGeometry(.01,e.Larm,.01),this.mats.black,re);Me.position.y=-e.Larm/2;const H=this.mesh(new ie.BoxGeometry(e.footW,a,.05),this.mats.char,re);H.position.y=-e.Larm,this.label(M("Character","Personnage"),H,[0,-.04,.03]),this.rackBaseY=0}update(e){if(!this.d)return;const t=this.p,n=this.d,i=n.span,r=this.beltR,o=t.loopLength,a=i,c=Math.PI*r,l=2*a+2*c,h=new ie.Matrix4,u=new ie.Quaternion,d=new ie.Vector3,f=new ie.Vector3(1,1,1),p=new ie.Vector3(0,0,1);for(let g=0;g<this.slatCount;g++){let m=((e.xb+g*this.slatPitch)%o+o)%o;m=m/o*l;let b=0;if(m<a)d.set(-i/2+m,r,0),b=0;else if(m<a+c){const _=(m-a)/r;d.set(i/2+r*Math.sin(_),r*Math.cos(_),0),b=-_}else if(m<2*a+c){const _=m-a-c;d.set(i/2-_,-r,0),b=Math.PI}else{const _=(m-2*a-c)/r;d.set(-i/2-r*Math.sin(_),-r*Math.cos(_),0),b=Math.PI-_}u.setFromAxisAngle(p,b),h.compose(d,u,f),this.belt.setMatrixAt(g,h)}this.belt.instanceMatrix.needsUpdate=!0;const x=e.thW;for(const g of this.rollers)g.rotation.z=-x;for(const g of this.axleGears)g.rotation.z=-x;for(this.shaft.rotation.x=x*n.iB,this.motorPinion.rotation.y=x*n.iB*n.iA;this.obsMeshes.length<e.obs.length;){const g=this.mesh(this.obsGeo,this.mats.obs);g.userData.part="obs",this.obsMeshes.push(g)}this.obsMeshes.forEach((g,m)=>{const b=e.obs[m];g.visible=!!b,b&&(g.position.set(b.x,this.beltTop+t.hObs/2,0),g.material=b.ghost||b.contact===1&&b.F>.01?this.mats.obsHit:this.mats.obs)});const y=this.out.kin;if(y.ok){const g=y.at(e.a/mt.DEG);this.rack.position.y=e.y,this.pinion.rotation.z=g.phi-y.phi0;const m=this.pinion.position.x,b=this.pinion.position.y,_=new ie.Vector3(m+g.A[0],b+g.A[1],this.bielleZ),S=new ie.Vector3(m+g.B[0],b+g.B[1],this.bielleZ);this.horn.rotation.z=Math.atan2(g.A[1]-t.dy,g.A[0]-t.dx);const v=_.clone().add(S).multiplyScalar(.5);this.bielle.position.copy(v),this.bielle.scale.x=_.distanceTo(S),this.bielle.rotation.z=Math.atan2(S.y-_.y,S.x-_.x),this.pinionCrankPin.position.set(S.x,S.y,this.bielleZ-.006)}this.pivot.rotation.z=e.theta}render(){const e=this.camAnim;if(e){const r=Math.min(1,(performance.now()-e.start)/e.dur),o=r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2;this.camera.position.lerpVectors(e.p0,e.p1,o),this.controls.target.lerpVectors(e.t0,e.t1,o),r>=1&&(this.camAnim=null)}this.controls.update(),this.renderer.render(this.scene,this.camera);const t=this.container.clientWidth,n=this.container.clientHeight,i=new ie.Vector3;for(const r of this.labels){if(r.el.hidden=!this.showLabels||r.dim,r.el.hidden)continue;r.obj.getWorldPosition(i),i.add(r.offset).project(this.camera);const o=i.z>1;r.el.style.transform=`translate(${(i.x+1)/2*t}px, ${(1-i.y)/2*n}px) translate(-50%, -50%)`,r.el.style.opacity=o?0:1}}}const e_=`/*
  Treadmill + jumping character, Arduino Uno / Nano (ATmega328P, 16 MHz)

  Treadmill : motor -> bevel gears Z1/Z2 -> driveshaft -> bevel gears Z3/Z4 -> 2 roller axles (4 rubber wheels)
              speed loop = feed-forward from the physics model + PI on the wheel encoder
  Character : servo -> horn -> bielle -> pinion crank -> pinion / crémaillère (rack)
  Collision : liaison pivot on the arm, read by a potentiometer (or a microswitch)

  Pins
    D2  encoder (slotted disc or hall sensor on a roller axle)   INT0
    D3  motor PWM  (BTS7960 RPWM, or 0-10 V filter for a VFD)     Timer2, 3.9 kHz
    D11 BTS7960 LPWM, held LOW (one direction only)
    D8  BTS7960 R_EN + L_EN  /  VFD RUN relay (through an optocoupler)
    D4  jump / start button to GND (INPUT_PULLUP)
    D9  servo signal                                              Timer1 (Servo lib)
    A0  pivot potentiometer wiper (10 kΩ linear)
    D7  pivot microswitch to GND (if USE_POT = 0)
    D13 game-over LED

  Do not use tone() (Timer2) or analogWrite() on D9/D10 (Timer1, taken by Servo).
  Power the servo from its own 5-6 V supply (>= 3 A, 1000 µF cap). Common GND with the Arduino.
*/

#include <Servo.h>

// ===== CONFIG BEGIN (paste the block exported by the simulator here) =====
#define MOTOR_DC 1            // 1 = DC motor + H-bridge, 0 = AC motor + VFD (0-10 V input)
#define USE_POT  1            // 1 = potentiometer on the pivot, 0 = microswitch
const float WHEEL_D          = 0.060;   // m, roller wheel diameter
const int   ENC_SLOTS        = 20;      // pulses per roller revolution
const unsigned long ENC_TIMEOUT_US = 150000UL;
const float V_TARGET         = 0.40;    // m/s, belt speed
const float A_MAX            = 0.50;    // m/s², start ramp (keep below the traction limit)
const float A_BRAKE          = 2.00;    // m/s², stop ramp after a collision
const float KP               = 0.910;   // command per m/s
const float KI               = 4.550;   // command per m (integral)
const float FF_U0            = 0.095;   // feed-forward: u = FF_U0 + FF_U1 * v
const float FF_U1            = 1.517;
const unsigned int CTRL_MS   = 20;      // 50 Hz control loop
const int   SERVO_DOWN_DEG   = 30;
const int   SERVO_UP_DEG     = 150;
const unsigned int RISE_MS   = 323;     // from the jump simulation
const unsigned int HOLD_MS   = 250;
const unsigned int FALL_MS   = 393;
const unsigned int COOLDOWN_MS = 150;
const int   THR_COUNTS       = 15;      // ADC counts = threshold angle × 1023 / pot range
const int   DEBOUNCE_N       = 3;       // consecutive samples over threshold
const unsigned long SAMPLE_US = 1000UL; // 1000 Hz collision sampling
// ===== CONFIG END =====

const int PIN_ENC = 2, PIN_PWM = 3, PIN_PWM_REV = 11, PIN_EN = 8;
const int PIN_BTN = 4, PIN_SERVO = 9, PIN_POT = A0, PIN_SW = 7, PIN_LED = 13;
const int SERVO_US_MIN = 500, SERVO_US_MAX = 2500;   // MG996R / DS3218 range

const float ENC_STEP = PI * WHEEL_D / ENC_SLOTS;      // m of belt per pulse

enum GameState { READY, RUNNING, GAME_OVER };
enum JumpState { J_IDLE, J_UP, J_HOLD, J_DOWN, J_COOLDOWN };

Servo servo;
GameState game = READY;
JumpState jump = J_IDLE;

volatile unsigned long encLastUs = 0, encPeriodUs = 0;

float vTarget = 0, vRef = 0, vMeas = 0, integ = 0, u = 0;
unsigned long jumpT0 = 0, lastCtrlMs = 0, lastSampleUs = 0, lastTeleMs = 0;
int adcBase = 512, adcNow = 512, overCount = 0;
bool btnStable = HIGH, btnLast = HIGH;
unsigned long btnChangeMs = 0;

void encoderISR() {
  unsigned long now = micros();
  unsigned long dt = now - encLastUs;
  if (dt > 200) {            // glitch filter
    encPeriodUs = dt;
    encLastUs = now;
  }
}

// Period measurement: much better than counting pulses in a 20 ms window
// (20 slots on a 60 mm wheel = 9.4 mm per pulse = 0.47 m/s resolution when counting).
float measuredSpeed(unsigned long nowUs) {
  noInterrupts();
  unsigned long last = encLastUs, period = encPeriodUs;
  interrupts();
  if (period == 0 || nowUs - last > ENC_TIMEOUT_US) return 0;
  return ENC_STEP / (period * 1e-6);
}

void writeServoDeg(int deg) {
  servo.writeMicroseconds(map(deg, 0, 180, SERVO_US_MIN, SERVO_US_MAX));
}

void writeMotor(float cmd) {
  int duty = (int)(constrain(cmd, 0.0, 1.0) * 255.0 + 0.5);
  analogWrite(PIN_PWM, duty);
#if MOTOR_DC
  digitalWrite(PIN_EN, HIGH);          // PWM off-time = both low sides on = dynamic brake
#else
  digitalWrite(PIN_EN, (game == RUNNING || vRef > 0) ? HIGH : LOW);  // VFD RUN
#endif
}

int readCollisionRaw() {
#if USE_POT
  return analogRead(PIN_POT);
#else
  return digitalRead(PIN_SW) == LOW ? 1023 : adcBase;   // pressed = "full deflection"
#endif
}

void calibratePivot() {
#if USE_POT
  long sum = 0;
  for (int i = 0; i < 64; i++) { sum += analogRead(PIN_POT); delay(1); }
  adcBase = sum / 64;
#else
  adcBase = 0;
#endif
  overCount = 0;
}

void onPress(unsigned long nowMs) {
  if (game == READY) {
    game = RUNNING;
    vTarget = V_TARGET;
    Serial.println(F("# start"));
    return;
  }
  if (game == GAME_OVER) {
    if (vRef == 0) {
      calibratePivot();
      digitalWrite(PIN_LED, LOW);
      game = READY;
      Serial.println(F("# reset, press to start"));
    }
    return;
  }
  if (jump == J_IDLE) {
    jump = J_UP;
    jumpT0 = nowMs;
    writeServoDeg(SERVO_UP_DEG);
  }
}

void handleButton(unsigned long nowMs) {
  bool r = digitalRead(PIN_BTN);
  if (r != btnLast) { btnLast = r; btnChangeMs = nowMs; }
  if (nowMs - btnChangeMs > 20 && r != btnStable) {
    btnStable = r;
    if (btnStable == LOW) onPress(nowMs);
  }
}

void sampleCollision(unsigned long nowMs) {
  adcNow = readCollisionRaw();
  // The arm shakes a little while the rack accelerates: raise the threshold during motion
  bool moving = (jump == J_UP || jump == J_DOWN);
  int thr = moving ? (THR_COUNTS * 3) / 2 : THR_COUNTS;
  if (abs(adcNow - adcBase) > thr) overCount++; else overCount = 0;
  if (overCount >= DEBOUNCE_N && game == RUNNING) {
    game = GAME_OVER;
    vTarget = 0;
    digitalWrite(PIN_LED, HIGH);
    Serial.print(F("# collision adc=")); Serial.print(adcNow);
    Serial.print(F(" base=")); Serial.println(adcBase);
  }
}

void controlStep(unsigned long nowMs, unsigned long nowUs) {
  const float dt = CTRL_MS / 1000.0;
  float aLim = (vTarget < vRef) ? A_BRAKE : A_MAX;
  vRef += constrain(vTarget - vRef, -aLim * dt, aLim * dt);
  if (vRef < 1e-4) vRef = 0;

  vMeas = measuredSpeed(nowUs);
  if (vRef == 0 && vTarget == 0) {
    integ = 0;
    u = 0;
  } else {
    float e = vRef - vMeas;
    integ = constrain(integ + KI * e * dt, -0.5, 0.5);
    float ff = (vRef > 0) ? FF_U0 + FF_U1 * vRef : 0;
    u = constrain(ff + KP * e + integ, 0.0, 1.0);
  }
  writeMotor(u);

  unsigned long tj = nowMs - jumpT0;
  switch (jump) {
    case J_UP:       if (tj >= RISE_MS) jump = J_HOLD; break;
    case J_HOLD:     if (tj >= RISE_MS + HOLD_MS) { jump = J_DOWN; writeServoDeg(SERVO_DOWN_DEG); } break;
    case J_DOWN:     if (tj >= RISE_MS + HOLD_MS + FALL_MS) jump = J_COOLDOWN; break;
    case J_COOLDOWN: if (tj >= RISE_MS + HOLD_MS + FALL_MS + COOLDOWN_MS) jump = J_IDLE; break;
    default: break;
  }
}

void setup() {
  Serial.begin(115200);
  pinMode(PIN_ENC, INPUT_PULLUP);
  pinMode(PIN_BTN, INPUT_PULLUP);
  pinMode(PIN_SW, INPUT_PULLUP);
  pinMode(PIN_LED, OUTPUT);
  pinMode(PIN_EN, OUTPUT);
  pinMode(PIN_PWM_REV, OUTPUT);
  digitalWrite(PIN_PWM_REV, LOW);

  // Timer2 prescaler 8, phase-correct: 16 MHz / (8 × 510) = 3.92 kHz on D3 (default is 490 Hz).
  TCCR2B = (TCCR2B & 0xF8) | 0x02;
  writeMotor(0);

  servo.attach(PIN_SERVO, SERVO_US_MIN, SERVO_US_MAX);
  writeServoDeg(SERVO_DOWN_DEG);
  delay(500);                 // let the character settle before reading the pivot
  calibratePivot();

  attachInterrupt(digitalPinToInterrupt(PIN_ENC), encoderISR, RISING);
  Serial.println(F("# ready: press the button to start"));
}

void loop() {
  unsigned long nowUs = micros();
  unsigned long nowMs = millis();

  handleButton(nowMs);

  if (nowUs - lastSampleUs >= SAMPLE_US) {
    lastSampleUs += SAMPLE_US;
    sampleCollision(nowMs);
  }
  if (nowMs - lastCtrlMs >= CTRL_MS) {
    lastCtrlMs += CTRL_MS;
    controlStep(nowMs, nowUs);
  }
  if (nowMs - lastTeleMs >= 100) {          // Serial Plotter telemetry, 10 Hz
    lastTeleMs = nowMs;
    Serial.print(F("vRef:"));  Serial.print(vRef, 3);
    Serial.print(F(" vMeas:")); Serial.print(vMeas, 3);
    Serial.print(F(" u:"));     Serial.print(u, 3);
    Serial.print(F(" pivot:")); Serial.println((adcNow - adcBase) / 100.0, 2);
  }
}
`,Ce=(s,e=document)=>e.querySelector(s),Tf=mt.DEG,q=(s,e=2)=>Number.isFinite(s)?s.toFixed(e):"—",Ni=M("rpm","tr/min"),Ci=s=>s.type!=="ac",An=s=>s.type==="ac",Pi=s=>Object.entries(s).map(([e,t])=>[e,t.label]),t_={drive:[{h:M("Motor","Moteur")},{k:"motorPreset",label:M("Motor","Moteur"),type:"select",options:[...Pi(mt.MOTORS),["custom",M("Custom (edit values below)","Personnalisé (modifiez les valeurs ci-dessous)")]]},{k:"type",label:M("Motor type","Type de moteur"),type:"select",options:[["dc",M("DC brushed (PWM H-bridge)","CC à balais (pont en H, PWM)")],["ac",M("AC induction (VFD, 0-10 V)","Asynchrone (variateur, 0-10 V)")]]},{k:"V",label:M("Supply voltage","Tension d’alimentation"),unit:"V",step:.5,show:Ci},{k:"R",label:M("Winding resistance","Résistance du bobinage"),unit:"Ω",step:.01,show:Ci},{k:"Kt",label:M("Torque constant Kt = Ke","Constante de couple Kt = Ke"),unit:"N·m/A",step:5e-4,show:Ci},{k:"I0",label:M("No-load current","Courant à vide"),unit:"A",step:.05,show:Ci},{k:"Irated",label:M("Rated (continuous) current","Courant nominal (continu)"),unit:"A",step:.1,show:Ci},{k:"driver",label:M("Motor driver","Driver moteur"),type:"select",options:Pi(mt.DRIVERS),show:Ci},{k:"P",label:M("Rated power","Puissance nominale"),unit:"W",step:5,show:An},{k:"nRated",label:M("Rated speed","Vitesse nominale"),unit:M("rpm","tr/min"),step:10,show:An},{k:"poles",label:M("Poles","Pôles"),unit:"",step:2,show:An},{k:"fBase",label:M("Base frequency","Fréquence de base"),unit:"Hz",step:10,show:An},{k:"kb",label:M("Breakdown / rated torque","Couple de décrochage / nominal"),unit:"×",step:.1,show:An},{k:"In",label:M("Rated current","Courant nominal"),unit:"A",step:.05,show:An},{k:"fMax",label:M("VFD max frequency (= 10 V)","Fréquence max du variateur (= 10 V)"),unit:"Hz",step:5,show:An},{k:"vfdAccel",label:M("VFD ramp 0 → base freq.","Rampe variateur 0 → fréq. de base"),unit:"s",step:.1,show:An},{k:"Jrotor",label:M("Rotor inertia","Inertie du rotor"),unit:"×10⁻⁶ kg·m²",scale:1e6,step:1},{k:"gh",label:M("Built-in gearbox ratio","Rapport du réducteur intégré"),unit:":1",step:1},{k:"etaGh",label:M("Gearbox efficiency","Rendement du réducteur"),unit:"%",scale:100,step:1}],gears:[{h:M("Rouage (bevel gear train)","Rouage (engrenages coniques)")},{k:"gearType",label:M("Gear type","Type d’engrenage"),type:"select",options:Pi(mt.GEARS)},{note:M("Power path: motor → Z1 meshes Z2 (stage A) → driveshaft → Z3 meshes Z4 (stage B) → roller axle. Stage B is at both ends of the driveshaft, so Z3 and Z4 each exist twice. Hover or edit a field to light that gear up in the 3D view.","Chaîne de puissance : moteur → Z1 engrène Z2 (étage A) → arbre de transmission → Z3 engrène Z4 (étage B) → axe du rouleau. L’étage B est aux deux bouts de l’arbre, donc Z3 et Z4 existent chacun en double. Survolez ou modifiez un champ pour mettre l’engrenage en évidence dans la vue 3D.")},{h:M("Stage A · motor → driveshaft","Étage A · moteur → arbre")},{k:"Z1",label:M("Z1 · pinion on the motor shaft","Z1 · pignon sur l’arbre moteur"),unit:M("teeth","dents"),step:1,int:!0,gear:"Z1"},{k:"Z2",label:M("Z2 · crown on the driveshaft (middle)","Z2 · couronne sur l’arbre (au milieu)"),unit:M("teeth","dents"),step:1,int:!0,gear:"Z2"},{note:s=>M("Stage A ratio","Rapport étage A")+` Z2/Z1 = ${s.Z2} / ${s.Z1} = ${(s.Z2/s.Z1).toFixed(2)}`},{h:M("Stage B · driveshaft → rollers (×2)","Étage B · arbre → rouleaux (×2)")},{k:"Z3",label:M("Z3 · gear at each end of the driveshaft","Z3 · engrenage à chaque bout de l’arbre"),unit:M("teeth","dents"),step:1,int:!0,gear:"Z3"},{k:"Z4",label:M("Z4 · gear on each roller axle","Z4 · engrenage sur chaque axe de rouleau"),unit:M("teeth","dents"),step:1,int:!0,gear:"Z4"},{note:s=>M("Stage B ratio","Rapport étage B")+` Z4/Z3 = ${s.Z4} / ${s.Z3} = ${(s.Z4/s.Z3).toFixed(2)}`},{note:s=>{const e=`${s.gh} × ${(s.Z2/s.Z1).toFixed(2)} × ${(s.Z4/s.Z3).toFixed(2)} = ${(s.gh*(s.Z2/s.Z1)*(s.Z4/s.Z3)).toFixed(2)}`;return M(`Total i = gearbox ${e}. Wheel speed = motor speed ÷ i; wheel torque = motor torque × i × η. Miter gears are 1:1 (Z1 = Z2, Z3 = Z4).`,`i total = réducteur ${e}. Vitesse des roues = vitesse moteur ÷ i ; couple aux roues = couple moteur × i × η. Les engrenages à onglet sont en 1:1 (Z1 = Z2, Z3 = Z4).`)}},{h:M("Rollers","Rouleaux")},{k:"D",label:M("Wheel diameter","Diamètre des roues"),unit:"mm",scale:1e3,step:1},{k:"mWheel",label:M("Mass per wheel","Masse par roue"),unit:"g",scale:1e3,step:5},{k:"bearing",label:M("Axle bearings","Paliers des axes"),type:"select",options:Pi(mt.BEARINGS)},{k:"dShaft",label:M("Axle diameter","Diamètre des axes"),unit:"mm",scale:1e3,step:1},{k:"Crr",label:M("Rolling resistance Crr","Résistance au roulement Crr"),unit:"",step:.001}],belt:[{h:M("Tablier (laser-cut belt)","Tablier (découpé au laser)")},{k:"wood",label:M("Board","Panneau"),type:"select",options:Pi(mt.WOODS)},{k:"loopLength",label:M("Loop length","Longueur de la boucle"),unit:"m",step:.05},{k:"width",label:M("Width","Largeur"),unit:"mm",scale:1e3,step:10},{k:"thick",label:M("Thickness","Épaisseur"),unit:"mm",scale:1e3,step:.5},{k:"kerfFrac",label:M("Material removed by kerfs","Matière enlevée par les traits de coupe"),unit:"%",scale:100,step:1},{k:"pitch",label:M("Hinge pitch","Pas des charnières"),unit:"mm",scale:1e3,step:1},{k:"kHinge",label:M("Hinge stiffness (full width)","Raideur des charnières (pleine largeur)"),unit:"N·m/rad",step:.002},{k:"hyst",label:M("Hinge hysteresis loss","Pertes par hystérésis des charnières"),unit:"%",scale:100,step:5},{k:"T0",label:M("Belt pretension","Prétension du tablier"),unit:"N",step:5},{h:M("Friction","Frottement")},{k:"muS",label:M("μ static · rubber wheel / wood","μ statique · roue caoutchouc / bois"),unit:"",step:.05},{k:"muK",label:M("μ kinetic · rubber wheel / wood","μ dynamique · roue caoutchouc / bois"),unit:"",step:.05},{k:"deck",label:M("Support deck under the top run","Plateau d’appui sous le brin supérieur"),type:"check"},{k:"muDeckS",label:M("μ static · belt / deck","μ statique · tablier / plateau"),unit:"",step:.05,show:s=>s.deck},{k:"muDeckK",label:M("μ kinetic · belt / deck","μ dynamique · tablier / plateau"),unit:"",step:.05,show:s=>s.deck},{table:!0}],game:[{h:M("Speed control (Arduino)","Régulation de vitesse (Arduino)")},{k:"aMax",label:M("Start ramp","Rampe de démarrage"),unit:"m/s²",step:.1},{k:"aBrake",label:M("Stop ramp after a hit","Rampe d’arrêt après une touche"),unit:"m/s²",step:.1},{k:"encSlots",label:M("Encoder slots per roller turn","Fentes du codeur par tour de rouleau"),unit:"",step:1,int:!0},{k:"ctrlHz",label:M("Control loop rate","Fréquence de la boucle de régulation"),unit:"Hz",step:10},{h:M("Obstacles","Obstacles")},{k:"mObs",label:M("Mass","Masse"),unit:"g",scale:1e3,step:10},{k:"lObs",label:M("Length (along belt)","Longueur (dans le sens du tapis)"),unit:"mm",scale:1e3,step:5},{k:"hObs",label:M("Height","Hauteur"),unit:"mm",scale:1e3,step:1},{k:"muObsS",label:M("μ static · obstacle / belt","μ statique · obstacle / tablier"),unit:"",step:.05},{k:"muObsK",label:M("μ kinetic · obstacle / belt","μ dynamique · obstacle / tablier"),unit:"",step:.05},{k:"gapMin",label:M("Min spacing","Espacement min"),unit:"m",step:.05},{k:"gapMax",label:M("Max spacing","Espacement max"),unit:"m",step:.05}],character:[{h:"Servo"},{k:"servo",label:"Servo",type:"select",options:Pi(mt.SERVOS)},{k:"tauMech",label:M("Mechanical time constant","Constante de temps mécanique"),unit:"ms",scale:1e3,step:5},{k:"servoDownDeg",label:M("Angle, character down","Angle, personnage en bas"),unit:"°",step:1},{k:"servoUpDeg",label:M("Angle, character up","Angle, personnage en haut"),unit:"°",step:1},{k:"holdMs",label:M("Hold at the top","Maintien en haut"),unit:"ms",step:10},{h:M("Bielle linkage","Système bielle")},{k:"r1",label:M("Servo horn radius","Rayon du palonnier du servo"),unit:"mm",scale:1e3,step:1},{k:"L",label:M("Bielle length","Longueur de la bielle"),unit:"mm",scale:1e3,step:1},{k:"r2",label:M("Crank pin radius on pinion","Rayon du maneton sur le pignon"),unit:"mm",scale:1e3,step:1},{k:"dx",label:M("Servo axis, horizontal offset","Axe du servo, décalage horizontal"),unit:"mm",scale:1e3,step:1},{k:"dy",label:M("Servo axis, vertical offset","Axe du servo, décalage vertical"),unit:"mm",scale:1e3,step:1},{k:"hornOffsetDeg",label:M("Horn angle at 0°","Angle du palonnier à 0°"),unit:"°",step:5},{h:M("Pignon / crémaillère","Pignon / crémaillère")},{k:"module",label:M("Gear module","Module de l’engrenage"),unit:"mm",step:.5},{k:"Zp",label:M("Pinion teeth","Dents du pignon"),unit:M("teeth","dents"),step:1,int:!0},{k:"mChar",label:M("Moving mass (rack + arm + character)","Masse mobile (crémaillère + bras + personnage)"),unit:"g",scale:1e3,step:10},{k:"Fguide",label:M("Rack guide friction","Frottement du guide de crémaillère"),unit:"N",step:.1},{k:"footW",label:M("Character foot length","Longueur du pied du personnage"),unit:"mm",scale:1e3,step:5},{k:"footGap",label:M("Gap above belt (down)","Jeu au-dessus du tapis (en bas)"),unit:"mm",scale:1e3,step:1}],sensor:[{h:M("Liaison pivot","Liaison pivot")},{k:"Larm",label:M("Pivot → hit point","Pivot → point d’impact"),unit:"mm",scale:1e3,step:5},{k:"mLower",label:M("Mass below pivot","Masse sous le pivot"),unit:"g",scale:1e3,step:10},{k:"Tpre",label:M("Return spring preload","Précharge du ressort de rappel"),unit:"N·mm",scale:1e3,step:1},{k:"kSpring",label:M("Return spring stiffness","Raideur du ressort de rappel"),unit:"N·mm/rad",scale:1e3,step:5},{k:"thetaMaxDeg",label:M("Mechanical end stop","Butée mécanique"),unit:"°",step:1},{h:M("Potentiometer + ADC","Potentiomètre + CAN")},{k:"potRangeDeg",label:M("Pot electrical range","Course électrique du potentiomètre"),unit:"°",step:10},{k:"thrDeg",label:M("Detection threshold","Seuil de détection"),unit:"°",step:.5},{k:"debounceN",label:M("Consecutive samples","Échantillons consécutifs"),unit:"",step:1,int:!0},{k:"sampleHz",label:M("Sampling rate","Fréquence d’échantillonnage"),unit:"Hz",step:100}]},n_=[[M("Rubber on raw MDF / particleboard","Caoutchouc sur MDF / aggloméré brut"),"0.5 – 0.8","0.4 – 0.6"],[M("Rubber on varnished or waxed wood","Caoutchouc sur bois verni ou ciré"),"0.4 – 0.6","0.3 – 0.5"],[M("Rubber on dusty wood (sawdust)","Caoutchouc sur bois poussiéreux (sciure)"),"0.3 – 0.5","0.25 – 0.4"],[M("Wood on wood (belt on deck)","Bois sur bois (tablier sur plateau)"),"0.3 – 0.5","0.2 – 0.4"],[M("Wood on UHMW-PE tape","Bois sur ruban PE-UHMW"),"0.15 – 0.25","0.1 – 0.2"]];let j={...mt.DEFAULTS},K,Ae,Mt,Ef=1,Hs=!0;const ct={t:[],vb:[],vm:[],vr:[],I:[],y:[],th:[]},Vs=10;let Xa=0;const i_=e_;let lo="drive";function Kl(){const s=Ce("#form"),e=Mt.gearHl;s.innerHTML="";for(const t of t_[lo]){if(t.show&&!t.show(j))continue;if(t.h){const c=document.createElement("h3");c.className="fh",c.textContent=t.h,s.appendChild(c);continue}if(t.note){const c=document.createElement("p");c.className="fnote",c.textContent=typeof t.note=="function"?t.note(j):t.note,s.appendChild(c);continue}if(t.table){s.appendChild(r_());continue}const n=document.createElement("label");n.className="frow";const i="f_"+t.k;n.htmlFor=i;const r=document.createElement("span");r.className="flabel",r.textContent=t.label,n.appendChild(r);let o;if(t.type==="select"){o=document.createElement("select");for(const[c,l]of t.options){const h=document.createElement("option");h.value=c,h.textContent=l,o.appendChild(h)}o.value=j[t.k]}else if(t.type==="check")o=document.createElement("input"),o.type="checkbox",o.checked=!!j[t.k];else{o=document.createElement("input"),o.type="number",o.step=t.step;const c=t.scale||1;o.value=+(j[t.k]*c).toPrecision(6)}o.id=i;const a=document.createElement("span");if(a.className="finput",a.appendChild(o),t.unit!==void 0&&t.type!=="select"&&t.type!=="check"){const c=document.createElement("span");c.className="funit",c.textContent=t.unit,a.appendChild(c)}if(n.appendChild(a),o.addEventListener("change",()=>o_(t,o)),t.gear){n.classList.add("gearRow");const c=()=>Mt.highlightGear(t.gear),l=()=>{document.activeElement!==o&&Mt.highlightGear(null)};n.addEventListener("pointerenter",c),n.addEventListener("pointerleave",l),o.addEventListener("focus",c),o.addEventListener("blur",()=>Mt.highlightGear(null)),e===t.gear&&(Mt.highlightGear(t.gear),requestAnimationFrame(()=>o.focus()))}s.appendChild(n)}}function r_(){const s=document.createElement("div");return s.className="mutable",s.innerHTML=`<table><thead><tr><th>${M("Pair","Couple de matériaux")}</th><th>${M("μ static","μ statique")}</th><th>${M("μ kinetic","μ dynamique")}</th></tr></thead><tbody>`+n_.map(e=>`<tr><td>${e[0]}</td><td>${e[1]}</td><td>${e[2]}</td></tr>`).join("")+'</tbody></table><p class="fnote">'+M("Typical handbook ranges. Measure yours with a tilt test: put a wheel on a strip of your board, tilt slowly, note the angle θ where it slides. μ static = tan θ.","Plages typiques des manuels. Mesurez les vôtres avec un plan incliné : posez une roue sur une chute de votre panneau, inclinez lentement, notez l’angle θ où elle glisse. μ statique = tan θ.")+"</p>",s}const va=1.15,ks=.8,ur=1.5,s_=[5,10,15,25,40,60,90,120,180,250,370,550,750,1100],_a=(s,e)=>e.find(t=>t>=s)??Math.ceil(s);function Af(){const s=Ce("#specView");if(!s)return;const e=K.d,t=j.type==="ac";let n=!1;const i=$=>{const ae=(n?"</article>":"")+`<article class="card"><header><h3>${$}</h3></header>`;return n=!0,ae},r=$=>`<table class="kv">${$.join("")}</table>`,o=($,ae,re)=>ce($,ae,re).replace("<tr>",'<tr class="big">'),a=($,ae)=>Dt($?"ok":ae?"warn":"bad",$?"ok":ae?M("tight","juste"):M("short","insuffisant")),c=j.vTarget*va,l=K.col.total,h=c/e.R,u=h*e.iTot,d=l*e.R/(e.iTot*e.eta),f=Math.max(d/ks,K.Tstart/2),p=l*c,x=p/e.eta,y=f*u,g=_a(y*ur,s_),m=e.iA*e.iB,b=e.gear.eta*e.gear.eta,_=h*m*60/(2*Math.PI),S=l*e.R/(m*b),v=K.Tstart*j.gh*j.etaGh,A=60/(2*Math.PI);let R,I;t?(R=j.P,I=j.nRated*j.fMax/j.fBase):(R=e.Trated*Math.max(0,(j.V-j.Irated*j.R)/j.Kt),I=e.w0*A);const O=R>=y*ur,U=R>=y,z=e.Trated>=f*ur,F=e.Trated>=f,N=K.vMax>=c,B=K.vMax>=j.vTarget,D=K.TstartAvail>=K.Tstart/.6,W=K.TstartAvail>=K.Tstart,ee=[];if(ee.push(`<div class="spec-intro"><h2>${M("Specification","Cahier des charges")}</h2><p>${M(`Sized for ${q(c,2)} m/s (target ${q(j.vTarget,2)} m/s + ${Math.round((va-1)*100)} %) with one obstacle held by the character. Change the belt speed or any design-sheet tab and this page follows.`,`Dimensionné pour ${q(c,2)} m/s (cible ${q(j.vTarget,2)} m/s + ${Math.round((va-1)*100)} %) avec un obstacle retenu par le personnage. La vitesse du tapis et les onglets de la fiche de conception mettent cette page à jour.`)}</p></div><div class="spec-grid">`),ee.push(i(M("Motor needed","Moteur nécessaire"))),ee.push(r([ce(M("Force at the belt","Force au tapis"),q(l,2)+" N"),ce(M("Power at the belt","Puissance au tapis"),q(p,2)+" W"),ce(M("Power at the motor shaft","Puissance sur l’arbre moteur")+` (η ${q(e.eta*100,0)} %)`,q(x,2)+" W"),ce(M("Motor speed","Vitesse moteur")+` (i = ${q(e.iTot,1)})`,q(u*A,0)+" "+Ni),ce(M("Running torque","Couple en marche"),q(d*1e3,1)+" N·mm"),ce(M("Start torque (breakaway + ramp)","Couple de démarrage (décollage + rampe)"),q(K.Tstart*1e3,1)+" N·mm"),o(M("Rated torque, min","Couple nominal min"),q(f*1e3,1)+" N·mm"),o(M("Rated power, min","Puissance nominale min"),q(y,1)+" W"),o(M("Rated power, recommended","Puissance nominale conseillée"),g+" W")])),ee.push(`<p class="fnote">${M(`Min = running torque at ≤ ${ks*100} % of rated, and start torque ≤ 2× rated. Recommended adds ×${ur} because deck and hinge friction are estimates, rounded up to a catalogue size.`,`Min = couple en marche ≤ ${ks*100} % du nominal, et couple de démarrage ≤ 2× nominal. Conseillé ajoute ×${ur} car les frottements plateau et charnières sont estimés, arrondi à une taille catalogue.`)}</p>`),ee.push(i(M("If you buy a gearmotor","Si vous achetez un motoréducteur"))),ee.push(r([ce(M("Output speed (before Z1)","Vitesse de sortie (avant Z1)"),q(_,0)+" "+Ni+" "+M("or more","ou plus")),ce(M("Output torque, running","Couple de sortie en marche"),q(S*1e3/ks,0)+" N·mm"),ce(M("Output torque, start","Couple de sortie au démarrage"),q(v*1e3,0)+" N·mm"),ce(M("Roller speed","Vitesse des rouleaux"),q(h*A,0)+" "+Ni)])),ee.push(`<p class="fnote">${M(`Bevel stages Z2/Z1 × Z4/Z3 = ${q(m,2)}. Pick a gearmotor whose no-load output speed is about 1.3× the figure above: the rated speed under load sits ~20 % lower.`,`Étages coniques Z2/Z1 × Z4/Z3 = ${q(m,2)}. Choisissez un motoréducteur dont la vitesse à vide en sortie vaut environ 1,3× ce chiffre : sous charge, la vitesse nominale est ~20 % plus basse.`)}</p>`),ee.push(i(M("Your motor vs the need","Votre moteur face au besoin"))),ee.push(r([ce(M("Rated power","Puissance nominale"),q(R,R<10?1:0)+" W"+a(O,U)),ce(M("Rated torque","Couple nominal"),q(e.Trated*1e3,1)+" N·mm"+a(z,F)),ce(M("Top belt speed","Vitesse max du tapis"),q(K.vMax,2)+" m/s"+a(N,B)),ce(t?M("Breakdown torque","Couple de décrochage"):M("Stall torque (driver limit)","Couple de blocage (limite driver)"),q(K.TstartAvail*1e3,0)+" N·mm"+a(D,W)),ce(M("Max motor speed","Vitesse moteur max"),q(I,0)+" "+Ni)])),t){const $=_a(Math.max(j.P,g),[200,400,750,1500,2200]);ee.push(i(M("Variable-frequency drive","Variateur de fréquence"))),ee.push(r([ce(M("Input / output","Entrée / sortie"),M("230 V 1~ → 230 V 3~","230 V 1~ → 230 V 3~")),o(M("VFD rating","Calibre du variateur"),$>=1e3?q($/1e3,1)+" kW":$+" W"),ce(M("Output current ≥","Courant de sortie ≥"),q(j.In,2)+" A"),ce(M("Frequency at target speed","Fréquence à la vitesse cible"),q(K.ss.f,1)+" Hz"),ce(M("Control input","Entrée de commande"),"0–10 V + FWD")]))}else{const $=Math.min(K.Tstart/j.Kt+j.I0,e.Istall),ae=Math.max(j.Irated*1.25,K.ssCol.I*1.5),re=Math.max(j.Irated*2,$),ve=_a(ae,[1,2,3,5,6.5,10,15,20,30]);ee.push(i(M("Power supply and driver","Alimentation et driver"))),ee.push(r([ce(M("Motor current at target","Courant moteur à la cible"),q(K.ss.I,2)+" A"),ce(M("With an obstacle held","Avec un obstacle retenu"),q(K.ssCol.I,2)+" A"),ce(M("Start peak","Pointe au démarrage"),q($,2)+" A"),o(M("Motor supply","Alimentation moteur"),`${q(j.V,0)} V · ${ve} A (${Math.round(j.V*ve)} W)`),o(M("Driver continuous current ≥","Courant continu du driver ≥"),q(re,1)+" A"+a(e.driver.Ilim>=re,e.driver.Ilim>=$))]))}if(ee.push(i(M("Jump servo","Servo de saut"))),K.kin.ok){const $=K.servoStatic*2*100/9.81;ee.push(r([ce(M("Peak static load torque","Couple statique max"),q(K.servoStatic*100/9.81,2)+" kg·cm"),o(M("Stall torque ≥ (×2 margin)","Couple de blocage ≥ (marge ×2)"),q($,1)+" kg·cm"),ce(M("Your servo","Votre servo"),q(e.servo.Ts*100/9.81,1)+" kg·cm"+a(K.servoMargin>=2,K.servoMargin>=1.2)),ce(M("Peak current","Courant crête"),q(K.jump.maxI,2)+" A"),o(M("Servo supply","Alimentation servo"),`5–6 V · ≥ ${Math.ceil(K.jump.maxI*1.5)} A`),ce(M("Rack travel needed","Course de crémaillère nécessaire"),"≥ "+q((j.hObs+j.footGap)*1e3+5,0)+" mm")]))}else ee.push(`<p class="advice">${K.kin.reason}</p>`);ee.push(i(M("Other parts","Autres pièces"))),ee.push(`<ul class="parts">
    <li>${M("Arduino Uno or Nano (5 V)","Arduino Uno ou Nano (5 V)")}</li>
    <li>${M(`Belt: ${j.loopLength.toFixed(2)} m × ${Math.round(j.width*1e3)} mm × ${j.thick*1e3} mm ${mt.WOODS[j.wood].label}, ≈ ${Math.round(e.mBelt*1e3)} g`,`Tablier : ${j.loopLength.toFixed(2)} m × ${Math.round(j.width*1e3)} mm × ${j.thick*1e3} mm ${mt.WOODS[j.wood].label}, ≈ ${Math.round(e.mBelt*1e3)} g`)}</li>
    <li>${M(`2 rollers, 4 wheels Ø${Math.round(j.D*1e3)} mm, axles Ø${Math.round(j.dShaft*1e3)} mm, 4 × ${mt.BEARINGS[j.bearing].label}`,`2 rouleaux, 4 roues Ø${Math.round(j.D*1e3)} mm, axes Ø${Math.round(j.dShaft*1e3)} mm, 4 × ${mt.BEARINGS[j.bearing].label}`)}</li>
    <li>${M(`Bevel gears: Z1 ${j.Z1} / Z2 ${j.Z2}, 2 × Z3 ${j.Z3} / 2 × Z4 ${j.Z4}`,`Engrenages coniques : Z1 ${j.Z1} / Z2 ${j.Z2}, 2 × Z3 ${j.Z3} / 2 × Z4 ${j.Z4}`)}</li>
    <li>${M(`Encoder: ${j.encSlots}-slot disc + optical fork (or A3144 hall + magnets)`,`Codeur : disque ${j.encSlots} fentes + fourche optique (ou hall A3144 + aimants)`)}</li>
    <li>${M(`Rack and pinion, module ${j.module}, pinion ${j.Zp} teeth`,`Pignon / crémaillère module ${j.module}, pignon ${j.Zp} dents`)}</li>
    <li>${M(`10 kΩ linear potentiometer, ${j.potRangeDeg}° travel, on the pivot`,`Potentiomètre 10 kΩ linéaire, course ${j.potRangeDeg}°, sur le pivot`)}</li>
    <li>${M("Push button, LED + 220 Ω, emergency stop in the motor power line","Bouton poussoir, LED + 220 Ω, arrêt d’urgence sur l’alimentation du moteur")}</li>
  </ul></article></div>`),s.innerHTML=ee.join("")}function o_(s,e){let t;if(s.type==="select")t=e.value;else if(s.type==="check")t=e.checked;else{if(t=parseFloat(e.value)/(s.scale||1),!Number.isFinite(t))return;s.int&&(t=Math.max(1,Math.round(t)))}s.k==="motorPreset"?(t!=="custom"&&(j={...j,...mt.MOTORS[t]}),j.motorPreset=t):(j[s.k]=t,["V","R","Kt","I0","Irated","P","nRated","poles","fBase","kb","In","Jrotor","gh","etaGh","type"].includes(s.k)&&(j.motorPreset="custom")),$a(),Kl()}function $a(){Ae=new mt.World(j,7),K=Ae.out;for(const s in ct)ct[s].length=0;Xa=0,Mt.build(j,K,Ae),Lf(),Af(),Cf(),Ws(),Ce("#vTarget").value=j.vTarget,Ce("#vTargetOut").textContent=j.vTarget.toFixed(2)+" m/s",Ce("#log").innerHTML="",Pf(M("# ready: press Start (or Space)","# prêt : appuyez sur Démarrer (ou Espace)"))}function Dt(s,e){return`<span class="pill ${s}">${e}</span>`}function ce(s,e,t=""){return`<tr><th>${s}</th><td>${e}</td>${t?`<td>${t}</td>`:""}</tr>`}function Lf(){const s=K.d,e=K.run,t=j.type==="ac",n=t&&Number.isFinite(K.ss.f)&&K.ss.f<10,i=K.vMax>=j.vTarget*1.15?n?"warn":"ok":K.vMax>=j.vTarget?"warn":"bad",r=K.loadVsRated<=.8?"ok":K.loadVsRated<=1?"warn":"bad",o=K.Tstart<=K.TstartAvail*.6?"ok":K.Tstart<=K.TstartAvail?"warn":"bad",a=K.tractionUse<=.5?"ok":K.tractionUse<=.9?"warn":"bad",c=K.kin,l=t?`${q(K.ss.f,1)} Hz (${q(K.ss.u*10,2)} V ${M("on the VFD input","sur l’entrée du variateur")})`:`${q(K.ss.u*100,0)} % ${M("duty","de rapport cyclique")} (${q(K.ss.Vm,2)} V ${M("at the motor","au moteur")})`;t?j.In:j.Irated;const h=[];if(h.push(`<article class="card wide"><header><h3>${M("Force budget at the belt","Bilan des forces sur le tapis")}</h3><span>${M(`at ${q(j.vTarget,2)} m/s, ${q(j.mObs*1e3,0)} g of obstacles on the belt`,`à ${q(j.vTarget,2)} m/s, ${q(j.mObs*1e3,0)} g d’obstacles sur le tapis`)}</span></header>
    <div class="split"><table class="kv">
    ${ce(M("Deck friction","Frottement sur le plateau")+" μ·(m<sub>belt</sub>/2 + m<sub>obs</sub>)·g",q(e.Fdeck,3)+" N")}
    ${ce(M("Rolling resistance Crr·2·T₀ per roller","Résistance au roulement Crr·2·T₀ par rouleau"),q(e.Frr,3)+" N")}
    ${ce(M("Bearing friction","Frottement des paliers")+" μ<sub>b</sub>·2T₀·d/2 ÷ R",q(e.Fbearing,3)+" N")}
    ${ce(M("Hinge bending loss (living hinge)","Pertes en flexion des charnières (charnière vivante)"),q(e.Fbend,3)+" N")}
    ${ce("<strong>"+M("Total running resistance","Résistance totale en marche")+"</strong>","<strong>"+q(e.total,2)+" N</strong>")}
    ${ce(M("+ one obstacle held by the character","+ un obstacle retenu par le personnage"),"+"+q(K.Fpush,2)+" N")}
    ${ce(M("Breakaway (static) resistance","Résistance au décollage (statique)"),q(K.brk.total,2)+" N")}
    </table><table class="kv">
    ${ce(M("Belt mass","Masse du tablier"),q(s.mBelt*1e3,0)+" g")}
    ${ce(M("Total ratio i","Rapport total i"),q(s.iTot,2)+" : 1")}
    ${ce(M("Drive efficiency η","Rendement de transmission η"),q(s.eta*100,1)+" %")}
    ${ce(M("Roller speed","Vitesse des rouleaux"),q(K.wheelRpm,1)+" "+Ni)}
    ${ce(M("Motor speed","Vitesse moteur"),q(K.motorRpm,0)+" "+Ni)}
    ${ce(M("Torque at the rollers","Couple aux rouleaux"),q(K.Twheel*1e3,1)+" N·mm")}
    ${ce(M("Torque at the motor shaft","Couple sur l’arbre moteur"),q(K.ss.Tload*1e3,2)+" N·mm")}
    ${ce(M("Mechanical power at the belt","Puissance mécanique au tapis"),q(K.Pbelt,2)+" W")}
    </table></div></article>`),h.push(`<article class="card"><header><h3>${M("Motor operating point","Point de fonctionnement du moteur")}</h3>${Dt(i==="bad"||r==="bad"||o==="bad"?"bad":i==="warn"||r==="warn"||o==="warn"?"warn":"ok",i==="bad"?M("Too slow","Trop lent"):r==="bad"?M("Overloaded","Surchargé"):o==="bad"?M("Will not start","Ne démarre pas"):n?M("Needs reduction","Réduction nécessaire"):M("Fits","Convient"))}</header>
    <table class="kv">
    ${ce(M("Command for target speed","Commande pour la vitesse cible"),l)}
    ${ce(M("Motor current","Courant moteur"),q(K.ss.I,2)+" A",`${q(K.currentVsRated*100,0)} % ${M("of rated","du nominal")}`)}
    ${ce(M("Load / rated torque","Couple de charge / nominal"),q(K.loadVsRated*100,0)+" %",Dt(r,r==="ok"?"ok":r==="warn"?M("hot","chauffe"):M("over","dépassé")))}
    ${ce(M("Top speed, full command","Vitesse max, commande à fond"),q(K.vMax,2)+" m/s",Dt(i,i==="ok"?M("margin","marge"):i==="warn"?M("tight","juste"):M("short","insuffisant")))}
    ${ce(M("Start torque needed (breakaway + ramp)","Couple de démarrage requis (décollage + rampe)"),q(K.Tstart*1e3,2)+" N·mm")}
    ${ce(t?M("Available (breakdown, with boost)","Disponible (décrochage, avec boost)"):M("Available (stall at driver limit)","Disponible (blocage à la limite du driver)"),q(K.TstartAvail*1e3,1)+" N·mm",Dt(o,o==="ok"?"ok":o==="warn"?M("tight","juste"):M("stall","calage")))}
    ${t?ce(M("Slip at load","Glissement en charge"),q(K.ss.s*100,2)+" %"):ce("Driver",s.driver.label)}
    </table>
    ${i==="bad"?`<p class="advice">${M("Lower i: try","Baissez i : essayez")} Z2/Z1 = ${q(j.Z2/j.Z1*(K.vMax/j.vTarget)*.85,2)} (${M("e.g.","ex.")} Z1 ${Math.round(j.Z2/(j.Z2/j.Z1*(K.vMax/j.vTarget)*.85))} → Z2 ${j.Z2}), ${M("a faster motor, or a bigger wheel.","un moteur plus rapide ou une roue plus grande.")}</p>`:""}
    ${n?`<p class="advice">${M(`The VFD would run at ${q(K.ss.f,1)} Hz. Below about 10 Hz a self-cooled induction motor overheats and loses torque. Add reduction: a total ratio near ${q(s.iTot*(35/K.ss.f),0)}:1 puts it around 35 Hz (gearbox or Z2/Z1, Z4/Z3).`,`Le variateur tournerait à ${q(K.ss.f,1)} Hz. En dessous d’environ 10 Hz, un moteur asynchrone autoventilé chauffe et perd du couple. Ajoutez de la réduction : un rapport total d’environ ${q(s.iTot*(35/K.ss.f),0)}:1 le place vers 35 Hz (réducteur ou Z2/Z1, Z4/Z3).`)}</p>`:""}
    ${!t&&j.driver==="l298n"?`<p class="advice">${M("The L298N loses about 2 V and heats up. A MOSFET driver (BTS7960, MD10C) gives the motor its full voltage.","Le L298N perd environ 2 V et chauffe. Un driver à MOSFET (BTS7960, MD10C) donne au moteur sa pleine tension.")}</p>`:""}
    </article>`),h.push(`<article class="card"><header><h3>${M("Traction, wheel on tablier","Adhérence, roue sur tablier")}</h3>${Dt(a,a==="ok"?M("Grips","Adhère"):a==="warn"?M("Near slip","Limite de glissement"):M("Slips","Patine"))}</header>
    <table class="kv">
    ${ce(M("Capstan limit 2·T₀·tanh(μθ/2) × 2 rollers","Limite cabestan 2·T₀·tanh(μθ/2) × 2 rouleaux"),q(s.FtracS,1)+" N")}
    ${ce(M("Needed at the start ramp","Nécessaire pendant la rampe de démarrage"),q(K.FtracNeed,2)+" N",`${q(K.tractionUse*100,0)} % ${M("used","utilisé")}`)}
    ${ce(M("Max acceleration before slip","Accélération max avant glissement"),q(K.aSlip,1)+" m/s²")}
    ${ce(M("Reflected rotor inertia (J·i²/R²)","Inertie du rotor ramenée (J·i²/R²)"),q(s.mRotorRefl,2)+M(" kg equivalent"," kg équivalent"))}
    ${ce(M("Chordal speed ripple (slats on roller)","Ondulation de vitesse polygonale (lattes sur rouleau)"),q(s.chordRipple*100,2)+" %")}
    ${j.deck?"":ce(M("Top-run sag without deck","Flèche du brin supérieur sans plateau"),q(K.sag*1e3,1)+" mm")}
    </table>
    <p class="advice">${M("The encoder sits on a roller axle, so it cannot see belt slip. Watch the gap between the true and measured speed in the chart.","Le codeur est sur un axe de rouleau, il ne voit donc pas le glissement du tablier. Surveillez l’écart entre vitesse réelle et mesurée sur le graphique.")}</p></article>`),c.ok){const p=K.jump,x=K.servoMargin>=2?"ok":K.servoMargin>=1.2?"warn":"bad",y=K.timingWindow>=.15?"ok":K.timingWindow>0?"warn":"bad",g=c.minTrans>=40?"ok":c.minTrans>=25?"warn":"bad";h.push(`<article class="card"><header><h3>${M("Jump mechanism","Mécanisme de saut")}</h3>${Dt(!c.mono||x==="bad"||p.stalled||y==="bad"?"bad":x==="warn"||y==="warn"||g!=="ok"?"warn":"ok",p.stalled?M("Servo stalls","Le servo cale"):c.mono?y==="bad"?M("Cannot clear","Ne passe pas"):M("Works","Fonctionne"):M("Dead point","Point mort"))}</header>
      <table class="kv">
      ${ce(M("Pinion pitch radius m·Z/2","Rayon primitif du pignon m·Z/2"),q(s.rpp*1e3,1)+" mm")}
      ${ce(M("Rack travel (jump height)","Course de la crémaillère (hauteur de saut)"),q(c.travel*1e3,1)+" mm",c.travel<j.hObs+j.footGap?Dt("bad",M("below obstacle","sous l’obstacle")):"")}
      ${ce(M("Min transmission angle","Angle de transmission min"),q(c.minTrans,0)+"°",Dt(g,g==="ok"?"ok":g==="warn"?M("poor","médiocre"):M("jams","coince")))}
      ${ce(M("Peak static torque at servo","Couple statique max au servo"),q(K.servoStatic*100/9.81,2)+" kg·cm",`${M("margin","marge")} ×${q(K.servoMargin,1)}`)}
      ${ce(M("Rise / fall time","Temps de montée / descente"),`${q(p.riseT*1e3,0)} / ${q(p.fallT*1e3,0)} ms`)}
      ${ce(M("Peak servo current","Courant crête du servo"),q(p.maxI,2)+" A")}
      ${ce(M("Time above the obstacle","Temps au-dessus de l’obstacle"),q(p.tAbove*1e3,0)+" ms")}
      ${ce(M("Obstacle passes under the foot in","L’obstacle passe sous le pied en"),q(K.tPass*1e3,0)+" ms")}
      ${ce(M("Timing window for the player","Fenêtre de timing pour le joueur"),q(K.timingWindow*1e3,0)+" ms",Dt(y,y==="ok"?M("fair","jouable"):y==="warn"?M("hard","difficile"):"impossible"))}
      ${ce(M("Slowest belt a perfect jump clears","Vitesse min du tapis pour un saut parfait"),q(K.vMinClear,2)+" m/s")}
      </table>
      ${c.mono?"":`<p class="advice">${M("The pinion reverses inside the servo range (dead point). Reduce the servo range or lengthen the bielle.","Le pignon s’inverse dans la course du servo (point mort). Réduisez la course du servo ou allongez la bielle.")}</p>`}
      <p class="advice">${M(`The servo draws its stall current while it accelerates. Feed it from a separate 5–6 V supply rated ≥ ${q(Math.ceil(p.maxI*1.5),0)} A, never from the Arduino 5 V pin.`,`Le servo tire son courant de blocage pendant qu’il accélère. Alimentez-le par une alimentation 5–6 V séparée de ≥ ${q(Math.ceil(p.maxI*1.5),0)} A, jamais par la broche 5 V de l’Arduino.`)}</p></article>`)}else h.push(`<article class="card"><header><h3>${M("Jump mechanism","Mécanisme de saut")}</h3>${Dt("bad",M("Does not assemble","Ne s’assemble pas"))}</header><p class="advice">${c.reason}</p></article>`);const u=K.detected?K.Tpush>K.Tneed*1.5?"ok":"warn":"bad",d=K.overTravelDeg<j.thetaMaxDeg?"ok":"warn";h.push(`<article class="card"><header><h3>${M("Collision sensor","Capteur de collision")}</h3>${Dt(u,u==="bad"?M("Misses hits","Rate des touches"):u==="warn"?M("Marginal","Limite"):M("Detects","Détecte"))}</header>
    <table class="kv">
    ${ce(M("Push from a held obstacle","Poussée d’un obstacle retenu")+" μ<sub>k</sub>·m·g",q(K.Fpush,3)+" N")}
    ${ce(M("Torque on the pivot","Couple sur le pivot"),q(K.Tpush*1e3,1)+" N·mm")}
    ${ce(M("Needed to reach threshold","Nécessaire pour atteindre le seuil"),q(K.Tneed*1e3,1)+" N·mm")}
    ${ce(M("Lightest obstacle detected","Obstacle le plus léger détecté"),q(K.mObsMin*1e3,0)+" g")}
    ${ce(M("ADC counts per degree","Points CAN par degré"),q(K.countsPerDeg,2))}
    ${ce(M("Threshold","Seuil"),K.thrCounts+M(" counts ("," points (")+q(j.thrDeg,1)+"°)")}
    ${ce(M("Detection + reaction latency","Latence de détection + réaction"),q(K.latency*1e3,0)+" ms")}
    ${ce(M("Belt travel until stopped","Course du tapis avant l’arrêt"),q(K.stopDist*1e3,0)+" mm")}
    ${ce(M("Arm deflection if obstacle sticks","Déviation du bras si l’obstacle reste coincé"),q(K.overTravelDeg,1)+"°",Dt(d,d==="ok"?M("within stop","avant la butée"):M("hits stop","touche la butée")))}
    </table>
    <p class="advice">${M("The pivot only sees horizontal hits. If the character lands on top of an obstacle, the arm does not rotate. Sensing servo current (INA219) or a second switch under the foot covers that case.","Le pivot ne voit que les chocs horizontaux. Si le personnage atterrit sur un obstacle, le bras ne tourne pas. Mesurer le courant du servo (INA219) ou ajouter un second contact sous le pied couvre ce cas.")}</p></article>`),Ce("#report").innerHTML=h.join("");const f=[[M("Drive","Motorisation"),i==="bad"||r==="bad"||o==="bad"?"bad":i==="warn"||r==="warn"||o==="warn"?"warn":"ok"],[M("Traction","Adhérence"),a],[M("Jump","Saut"),c.ok&&c.mono&&!K.jump.stalled?K.timingWindow>.15?"ok":K.timingWindow>0?"warn":"bad":"bad"],[M("Sensor","Capteur"),u]];Ce("#verdicts").innerHTML=f.map(([p,x])=>Dt(x,p)).join("")}function wt(s){return getComputedStyle(document.documentElement).getPropertyValue(s).trim()}function Rf(s){const e=Math.min(2,window.devicePixelRatio||1),t=s.clientWidth,n=s.clientHeight;(s.width!==Math.round(t*e)||s.height!==Math.round(n*e))&&(s.width=Math.round(t*e),s.height=Math.round(n*e));const i=s.getContext("2d");return i.setTransform(e,0,0,e,0,0),{ctx:i,w:t,h:n}}function Ya(s){if(s<=0)return 1;const e=Math.pow(10,Math.floor(Math.log10(s))),t=s/e;return(t<=1?1:t<=2?2:t<=2.5?2.5:t<=5?5:10)*e}const Ja={};function ba(s,e,t,n){const i=Ce("#"+s),{ctx:r,w:o,h:a}=Rf(i),c=40,l=10,h=8,u=20,d=ct.t;r.clearRect(0,0,o,a);const f=d.length?d[d.length-1]:0,p=Math.max(0,f-Vs);let x=0;for(const _ of e)if(_.data)for(const S of _.data)S>x&&(x=S);Rh(e)&&(x=Math.max(x,Rh(e))),x=Ya(x*1.1||1);const y=0,g=_=>c+(_-p)/Vs*(o-c-l),m=_=>h+(1-(_-y)/(x-y))*(a-h-u);r.font='11px "IBM Plex Mono", ui-monospace, monospace',r.fillStyle=wt("--muted"),r.strokeStyle=wt("--grid"),r.lineWidth=1;for(let _=0;_<=4;_++){const S=y+(x-y)*_/4,v=Math.round(m(S))+.5;r.beginPath(),r.moveTo(c,v),r.lineTo(o-l,v),r.stroke(),r.textAlign="right",r.textBaseline="middle",r.fillText(+S.toPrecision(3),c-6,v)}r.textAlign="center",r.textBaseline="top";for(let _=Math.ceil(p);_<=f;_+=2)r.fillText(_+" s",g(_),a-u+5);for(const _ of e){if(_.ref!==void 0){r.setLineDash([4,4]),r.strokeStyle=wt(_.color),r.lineWidth=1.5;const v=m(_.ref);r.beginPath(),r.moveTo(c,v),r.lineTo(o-l,v),r.stroke(),r.setLineDash([]);continue}r.strokeStyle=wt(_.color),r.lineWidth=2,r.lineJoin="round",_.dash&&r.setLineDash(_.dash),r.beginPath();let S=!0;for(let v=0;v<d.length;v++){if(d[v]<p)continue;const A=g(d[v]),R=m(_.data[v]);S?(r.moveTo(A,R),S=!1):r.lineTo(A,R)}r.stroke(),r.setLineDash([])}const b=Ja[s];if(b&&d.length){const _=p+(b.x-c)/(o-c-l)*Vs;let S=0,v=1/0;for(let R=0;R<d.length;R++){const I=Math.abs(d[R]-_);I<v&&(v=I,S=R)}const A=g(d[S]);if(A>=c&&A<=o-l){r.strokeStyle=wt("--ink-2"),r.lineWidth=1,r.beginPath(),r.moveTo(A+.5,h),r.lineTo(A+.5,a-u),r.stroke();for(const I of e)I.data&&(r.fillStyle=wt(I.color),r.strokeStyle=wt("--panel"),r.lineWidth=2,r.beginPath(),r.arc(A,m(I.data[S]),4,0,Math.PI*2),r.fill(),r.stroke());const R=Ce("#"+s+"_tip");R.hidden=!1,R.innerHTML=`<b>${d[S].toFixed(2)} s</b>`+e.filter(I=>I.data).map(I=>`<span><i style="background:var(${I.color})"></i>${I.name} ${I.data[S].toFixed(3)} ${t}</span>`).join(""),R.style.left=Math.min(o-170,Math.max(0,A+10))+"px"}}else{const _=Ce("#"+s+"_tip");_&&(_.hidden=!0)}}function Rh(s){const e=s.find(t=>t.ref!==void 0);return e?e.ref:0}function a_(){ba("chSpeed",[{name:M("reference","consigne"),data:ct.vr,color:"--muted",dash:[5,4]},{name:M("true belt","tapis réel"),data:ct.vb,color:"--series-1"},{name:M("encoder","codeur"),data:ct.vm,color:"--series-2"}],"m/s"),ba("chCurrent",[{name:M("motor","moteur"),data:ct.I,color:"--series-1"}],"A"),ba("chLift",[{name:M("obstacle top","haut de l’obstacle"),ref:j.hObs*1e3,color:"--series-2"},{name:M("foot height","hauteur du pied"),data:ct.y,color:"--series-1"}],"mm")}function Ws(){const s=Ce("#chTS"),{ctx:e,w:t,h:n}=Rf(s),i=K.d,r=mt.torqueSpeedCurve(j,i),o=60/(2*Math.PI),a=Ya(r[r.length-1].w*o),c=Ya(Math.max(...r.map(_=>_.T))*1e3*1.05),l=48,h=12,u=10,d=34,f=_=>l+_/a*(t-l-h),p=_=>u+(1-_/c)*(n-u-d);e.clearRect(0,0,t,n),e.font='11px "IBM Plex Mono", ui-monospace, monospace',e.strokeStyle=wt("--grid"),e.fillStyle=wt("--muted"),e.lineWidth=1;for(let _=0;_<=4;_++){const S=c*_/4,v=Math.round(p(S))+.5;e.beginPath(),e.moveTo(l,v),e.lineTo(t-h,v),e.stroke(),e.textAlign="right",e.textBaseline="middle",e.fillText(+S.toPrecision(3),l-6,v);const A=a*_/4;e.textAlign="center",e.textBaseline="top",e.fillText(+A.toPrecision(4),f(A),n-d+5)}e.textAlign="center",e.fillText(M("motor speed (rpm)","vitesse moteur (tr/min)"),(l+t-h)/2,n-14),e.save(),e.translate(11,(u+n-d)/2),e.rotate(-Math.PI/2),e.fillText(M("torque (N·mm)","couple (N·mm)"),0,0),e.restore(),e.strokeStyle=wt("--series-1"),e.lineWidth=2,e.beginPath(),r.forEach((_,S)=>{const v=f(_.w*o),A=p(_.T*1e3);S?e.lineTo(v,A):e.moveTo(v,A)}),e.stroke();const x=K.ss.Tload*1e3,y=K.ssCol.Tload*1e3;e.setLineDash([5,4]),e.strokeStyle=wt("--series-2"),e.lineWidth=1.5,e.beginPath(),e.moveTo(l,p(x)),e.lineTo(t-h,p(x)),e.stroke(),e.strokeStyle=wt("--muted");const g=i.Trated*1e3;g<c&&(e.beginPath(),e.moveTo(l,p(g)),e.lineTo(t-h,p(g)),e.stroke(),e.fillStyle=wt("--muted"),e.textAlign="right",e.textBaseline="bottom",e.fillText(M("rated ","nominal ")+g.toFixed(1),t-h,p(g)-2)),e.setLineDash([]),e.fillStyle=wt("--series-2"),e.textAlign="left",e.textBaseline="bottom",e.fillText(M("load ","charge ")+x.toFixed(2)+" N·mm",l+6,p(x)-2);const m=K.ss;Number.isFinite(m.w)&&(e.fillStyle=wt("--series-2"),e.strokeStyle=wt("--panel"),e.lineWidth=2,e.beginPath(),e.arc(f(m.w*o),p(x),5,0,Math.PI*2),e.fill(),e.stroke());const b=j.type==="ac"?j.fMax+" Hz":"100 % PWM";Ce("#tsNote").textContent=M(`Full-command curve (${b}) vs the load torque reflected to the motor shaft. Dot = operating point at ${j.vTarget.toFixed(2)} m/s. With one obstacle held: ${y.toFixed(2)} N·mm.`,`Courbe à commande maximale (${b}) face au couple de charge ramené sur l’arbre moteur. Point = fonctionnement à ${j.vTarget.toFixed(2)} m/s. Avec un obstacle retenu : ${y.toFixed(2)} N·mm.`)}function Cf(){const s=i_.replace(/\/\/ ===== CONFIG BEGIN[\s\S]*?\/\/ ===== CONFIG END =====/,mt.exportConfig(j,K));Ce("#code").textContent=s}function Pf(s){const e=Ce("#log"),t=document.createElement("div");for(t.textContent=s,e.appendChild(t);e.childNodes.length>60;)e.removeChild(e.firstChild);e.scrollTop=e.scrollHeight}let Fi=0;function l_(){const s=j.type==="ac",e=Ae.ard,t=(r,o)=>{const a=document.getElementById(r);a&&a.textContent!==o&&(a.textContent=o)};t("r_v",q(Ae.vb,3)),t("r_vm",q(Ae.vMeas,3)),t("r_u",s?q(Ae.fCmd,1):q(Ae.u*100,0)),t("r_uUnit",s?"Hz":"% PWM"),t("r_I",q(Ae.I,2)),t("r_Is",q(Ae.Is,2)),t("r_adc",String(Ae.adc)),t("r_base","base "+e.adcBase),t("r_state",oc(e.state)),t("r_jump",oc(e.jump)),t("r_score",String(Ae.score)),t("r_hits",String(e.hits)),t("r_y",q(Ae.y*1e3,1)),t("r_th",q(Ae.theta/Tf,1)),Ce("#slipFlag").hidden=!Ae.slip,Ce("#landFlag").hidden=!Ae.landedOn;const n=Ce("#btnMain"),i=e.state==="READY"?M("Start","Démarrer"):e.state==="GAME_OVER"?e.vRef===0?M("New game","Nouvelle partie"):M("Braking…","Freinage…"):M("Jump","Sauter");n.textContent!==i&&(n.textContent=i),Ce("#stage").dataset.state=e.state}let Ch=performance.now();function Df(s){const e=Math.min(.05,(s-Ch)/1e3);if(Ch=s,Hs){const t=e*Ef,n=2e-4,i=Math.max(1,Math.round(t/n));for(let o=0;o<i;o++)if(Ae.step(n),Ae.t-Xa>=.02)for(Xa=Ae.t,ct.t.push(Ae.t),ct.vb.push(Ae.vb),ct.vm.push(Ae.vMeas),ct.vr.push(Ae.ard.vRef),ct.I.push(Math.abs(Ae.I)),ct.y.push((Ae.y+j.footGap)*1e3),ct.th.push(Ae.theta/Tf);ct.t.length&&ct.t[0]<Ae.t-Vs-.5;)for(const a in ct)ct[a].shift();const r=Ae.ard.events;for(;Fi<r.length;){const o=r[Fi++];Pf(`[${(o.t/1e3).toFixed(2)} s] ${o.msg}`)}Fi>r.length&&(Fi=r.length)}Ce("#simAcc").open&&Ce("#stage").dataset.focus!=="spec"&&(Mt.update(Ae),Mt.render()),l_(),a_(),requestAnimationFrame(Df)}function Ph(){const s=Ae.ard.state;Ae.ard.press(Ae.t*1e3),s==="GAME_OVER"&&Ae.ard.state==="READY"&&(Ae.obs=[],Ae.theta=0,Ae.thetaDot=0,Ae.ard.calibrate(Ae.readAdc()),Ae.score=0),Fi=Math.min(Fi,Ae.ard.events.length)}const ja={belt:["drive","gears","belt","game"],char:["character","sensor","game"]};function If(s){lo=s,Mt.highlightGear(null),document.querySelectorAll(".tabs button").forEach(e=>{const t=e.dataset.tab===s;e.setAttribute("aria-selected",t?"true":"false");const n=Ce("#stage").dataset.focus;e.hidden=n in ja&&!ja[n].includes(e.dataset.tab)}),Kl()}function Dh(s,e=!0){["all","belt","char","spec"].includes(s)||(s="all"),Ce("#stage").dataset.focus=s,document.querySelectorAll(".viewtabs button").forEach(n=>n.setAttribute("aria-selected",n.dataset.focus===s?"true":"false")),s!=="spec"&&Mt.setFocus(s,e);const t=ja[s];If(t&&!t.includes(lo)?t[0]:lo),history.replaceState(null,"",s==="all"?location.pathname+location.search:"#"+s)}function Ih(){zf(Ce("#lang")),Mt=new Qv(Ce("#view"),Ce("#labels")),document.querySelectorAll(".tabs button").forEach(t=>t.addEventListener("click",()=>If(t.dataset.tab))),document.querySelectorAll(".viewtabs button").forEach(t=>t.addEventListener("click",()=>Dh(t.dataset.focus))),Ce("#btnMain").addEventListener("click",Ph),Ce("#btnReset").addEventListener("click",()=>{$a()}),window.addEventListener("keydown",t=>{t.code==="Space"&&!/INPUT|SELECT|TEXTAREA|BUTTON|SUMMARY/.test(document.activeElement.tagName)&&(t.preventDefault(),Ph())}),Ce("#vTarget").addEventListener("input",t=>{j.vTarget=parseFloat(t.target.value),Ce("#vTargetOut").textContent=j.vTarget.toFixed(2)+" m/s",Ae.ard.state==="RUNNING"&&(Ae.ard.vTarget=j.vTarget),Ae.p.vTarget=j.vTarget}),Ce("#vTarget").addEventListener("change",()=>{const t=Ae;K=mt.analyze(j),t.out=K,t.ard.out=K,Lf(),Cf(),Ws(),Af()}),document.querySelectorAll("[data-speed]").forEach(t=>t.addEventListener("click",()=>{Ef=parseFloat(t.dataset.speed),document.querySelectorAll("[data-speed]").forEach(n=>n.setAttribute("aria-pressed",n===t?"true":"false"))})),Ce("#btnPause").addEventListener("click",()=>{Hs=!Hs,Ce("#btnPause").textContent=Hs?"Pause":M("Resume","Reprendre")}),Ce("#btnLabels").addEventListener("click",()=>{Mt.showLabels=!Mt.showLabels;const t=Ce("#btnLabels");t.setAttribute("aria-pressed",Mt.showLabels?"false":"true"),t.textContent=Mt.showLabels?M("Hide names","Masquer les noms"):M("Show names","Afficher les noms")});const s=Ce("#simAcc");try{localStorage.getItem("simAcc")==="closed"&&(s.open=!1)}catch{}s.addEventListener("toggle",()=>{try{localStorage.setItem("simAcc",s.open?"open":"closed")}catch{}});for(const t of["chSpeed","chCurrent","chLift"]){const n=Ce("#"+t);n.addEventListener("pointermove",i=>{const r=n.getBoundingClientRect();Ja[t]={x:i.clientX-r.left}}),n.addEventListener("pointerleave",()=>{Ja[t]=null})}Ce("#btnCopy").addEventListener("click",async()=>{const t=Ce("#code").textContent;try{await navigator.clipboard.writeText(t),Ce("#copyMsg").textContent=M("Copied","Copié")}catch{const n=document.createRange();n.selectNodeContents(Ce("#code"));const i=getSelection();i.removeAllRanges(),i.addRange(n),Ce("#copyMsg").textContent=M("Selected, press Ctrl/Cmd + C","Sélectionné, faites Ctrl/Cmd + C")}setTimeout(()=>{Ce("#copyMsg").textContent=""},2500)});const e=()=>{Mt.applyTheme(),Ws()};matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e),new MutationObserver(e).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),window.addEventListener("resize",()=>Ws()),Kl(),$a(),Dh(location.hash.slice(1)||"all",!1),requestAnimationFrame(Df)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ih):Ih();
