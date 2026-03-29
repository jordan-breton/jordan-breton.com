import{N as F,Q as S,a2 as D,aB as P,aC as B,aD as T,K as _,s as C,R as V,aE as z,M as Z,a as A,aF as X,aG as Y,aH as G,aI as L,ai as R,aj as W}from"./index-D9iA3wnd.js";function $(M,e,t=16711680,o=.05){const i=new D;i.setAttribute("position",new P(M,3));const a=new B({color:t,size:o,sizeAttenuation:!0,depthTest:!0,depthWrite:!0}),n=new T(i,a);return n.name="__debug_sampled_points",n}function j(M,e=2){const t=new _(e,e),{positionMap:o,resolution:i}=M,a=o.image.data;let n=1/0,c=-1/0,m=1/0,d=-1/0,g=1/0,u=-1/0;for(let s=0;s<a.length;s+=4){const x=a[s],f=a[s+1],b=a[s+2];(x!==0||f!==0||b!==0)&&(n=Math.min(n,x),c=Math.max(c,x),m=Math.min(m,f),d=Math.max(d,f),g=Math.min(g,b),u=Math.max(u,b))}const r=new Uint8Array(i*i*4),p=c-n||1,v=d-m||1,h=u-g||1;for(let s=0;s<a.length;s+=4){const x=a[s],f=a[s+1],b=a[s+2],w=s;r[w]=Math.floor((x-n)/p*255),r[w+1]=Math.floor((f-m)/v*255),r[w+2]=Math.floor((b-g)/h*255),r[w+3]=255}const l=new C(r,i,i,V,z);l.needsUpdate=!0;const k=new Z({map:l,side:S}),y=new A(t,k);return y.name="__debug_position_map",y}function N(M,e="g",t=!1,o=!1){const i={r:"vec3(weight.r, 0.0, 0.0)",g:"vec3(0.0, weight.g, 0.0)",b:"vec3(0.0, 0.0, weight.b)"}[e],a=t?"1.0 - vUv.x":"vUv.x",n=o?"1.0 - vUv.y":"vUv.y";return new F({uniforms:{uWeightTexture:{value:M}},vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			uniform sampler2D uWeightTexture;
			varying vec2 vUv;
			void main() {
				vec2 sampleUv = vec2(${a}, ${n});
				vec4 weight = texture2D(uWeightTexture, sampleUv);
				vec3 color = ${i};
				gl_FragColor = vec4(color, 1.0);
			}
		`,side:S})}function H(){return new F({vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			varying vec2 vUv;
			void main() {
				// R = U, G = V, B = 0
				gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);
			}
		`,side:S})}const U=new R("UVSampler",W.ALL,{root:"Sampling"});class I{sampler;bakedMaps;constructor(e,t){this.sampler=e,this.bakedMaps=t}static create(e){const{renderer:t,geometry:o,modelMatrix:i,weightTexture:a,weightChannel:n="g",resolution:c=512,threshold:m=.01,flipU:d=!1,flipV:g=!0,flipPositionMapV:u=!1,weightFlipV:r=!1}=e,p=o.name||"UVSampler",v=X(`${p}.positionMap`),l=new Y(t,o,{resolution:c,modelMatrix:i}).bake();v.done();const k=G(`${p}.cdf`),y=new L({positionMap:l.positionMap,normalMap:l.normalMap,mapResolution:l.resolution,weightTexture:a,weightChannel:n,threshold:m,renderer:t,flipU:d,flipV:g,flipPositionMapV:u,weightFlipV:r});return k.done(),new I(y,l)}sample(e){return this.sampler.sample(e)}getStats(){return{...this.sampler.getStats(),mapResolution:this.bakedMaps.resolution}}dispose(){this.bakedMaps.positionMap.dispose(),this.bakedMaps.normalMap.dispose()}getBakedMaps(){return this.bakedMaps}createSampledPointsDebug(e,t,o=16711680,i=.05){return $(e,t,o,i)}createPositionMapDebug(e=2){return j(this.bakedMaps,e)}debugCDF(){this.sampler.debugCDF()}getCoverageMask(){return this.sampler.getCoverageMask()}debugPositionMap(){const e=this.bakedMaps.positionMap.image.data,t=this.bakedMaps.resolution;let o=0,i=1/0,a=-1/0,n=1/0,c=-1/0,m=1/0,d=-1/0;for(let p=0;p<e.length;p+=4){const v=e[p],h=e[p+1],l=e[p+2];(v!==0||h!==0||l!==0)&&(o++,i=Math.min(i,v),a=Math.max(a,v),n=Math.min(n,h),c=Math.max(c,h),m=Math.min(m,l),d=Math.max(d,l))}const g=t*t,u=(o/g*100).toFixed(1);U.info("Position map: %dx%d, non-zero=%d/%d (%s%%)",t,t,o,g,u),U.info("Bounds: X[%s,%s] Y[%s,%s] Z[%s,%s]",i.toFixed(3),a.toFixed(3),n.toFixed(3),c.toFixed(3),m.toFixed(3),d.toFixed(3));const r=Math.floor(t/2)*t+Math.floor(t/2);U.info("Center pixel pos: (%s, %s, %s)",e[r*4].toFixed(3),e[r*4+1].toFixed(3),e[r*4+2].toFixed(3))}}export{I as U,H as a,N as c};
