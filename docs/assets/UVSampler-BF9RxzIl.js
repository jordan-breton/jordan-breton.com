import{N as S,Q as U,a2 as D,aB as I,aC as P,aD as B,K as T,s as _,R as C,aE as V,M as z,a as Z,ai as A,aF as X,aG as Y,aH as G,aI as L,aj as R}from"./index-G3tB3Owe.js";function W(x,e,t=16711680,n=.05){const i=new D;i.setAttribute("position",new I(x,3));const a=new P({color:t,size:n,sizeAttenuation:!0,depthTest:!0,depthWrite:!0}),o=new B(i,a);return o.name="__debug_sampled_points",o}function $(x,e=2){const t=new T(e,e),{positionMap:n,resolution:i}=x,a=n.image.data;let o=1/0,p=-1/0,l=1/0,c=-1/0,g=1/0,u=-1/0;for(let s=0;s<a.length;s+=4){const f=a[s],b=a[s+1],y=a[s+2];(f!==0||b!==0||y!==0)&&(o=Math.min(o,f),p=Math.max(p,f),l=Math.min(l,b),c=Math.max(c,b),g=Math.min(g,y),u=Math.max(u,y))}const r=new Uint8Array(i*i*4),m=p-o||1,d=c-l||1,h=u-g||1;for(let s=0;s<a.length;s+=4){const f=a[s],b=a[s+1],y=a[s+2],k=s;r[k]=Math.floor((f-o)/m*255),r[k+1]=Math.floor((b-l)/d*255),r[k+2]=Math.floor((y-g)/h*255),r[k+3]=255}const v=new _(r,i,i,C,V);v.needsUpdate=!0;const M=new z({map:v,side:U}),w=new Z(t,M);return w.name="__debug_position_map",w}function N(x,e="g",t=!1,n=!1){const i={r:"vec3(weight.r, 0.0, 0.0)",g:"vec3(0.0, weight.g, 0.0)",b:"vec3(0.0, 0.0, weight.b)"}[e],a=t?"1.0 - vUv.x":"vUv.x",o=n?"1.0 - vUv.y":"vUv.y";return new S({uniforms:{uWeightTexture:{value:x}},vertexShader:`
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`,fragmentShader:`
			uniform sampler2D uWeightTexture;
			varying vec2 vUv;
			void main() {
				vec2 sampleUv = vec2(${a}, ${o});
				vec4 weight = texture2D(uWeightTexture, sampleUv);
				vec3 color = ${i};
				gl_FragColor = vec4(color, 1.0);
			}
		`,side:U})}function H(){return new S({vertexShader:`
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
		`,side:U})}const E=new A("UVSampler",R.DISABLED,{root:"Sampling"});class F{sampler;bakedMaps;log;constructor(e,t,n){this.sampler=e,this.bakedMaps=t,this.log=n}static create(e){const{renderer:t,geometry:n,modelMatrix:i,weightTexture:a,weightChannel:o="g",resolution:p=512,threshold:l=.01,flipU:c=!1,flipV:g=!0,flipPositionMapV:u=!1,weightFlipV:r=!1,logger:m=E}=e,d=n.name||"UVSampler",h=X(`${d}.positionMap`),M=new Y(t,n,{resolution:p,modelMatrix:i}).bake();h.done();const w=G(`${d}.cdf`),s=new L({positionMap:M.positionMap,normalMap:M.normalMap,mapResolution:M.resolution,weightTexture:a,weightChannel:o,threshold:l,renderer:t,flipU:c,flipV:g,flipPositionMapV:u,weightFlipV:r,logger:m});return w.done(),new F(s,M,m)}sample(e){return this.sampler.sample(e)}getStats(){return{...this.sampler.getStats(),mapResolution:this.bakedMaps.resolution}}dispose(){this.bakedMaps.positionMap.dispose(),this.bakedMaps.normalMap.dispose()}getBakedMaps(){return this.bakedMaps}createSampledPointsDebug(e,t,n=16711680,i=.05){return W(e,t,n,i)}createPositionMapDebug(e=2){return $(this.bakedMaps,e)}debugCDF(){this.sampler.debugCDF()}getCoverageMask(){return this.sampler.getCoverageMask()}debugPositionMap(){const e=this.bakedMaps.positionMap.image.data,t=this.bakedMaps.resolution;let n=0,i=1/0,a=-1/0,o=1/0,p=-1/0,l=1/0,c=-1/0;for(let m=0;m<e.length;m+=4){const d=e[m],h=e[m+1],v=e[m+2];(d!==0||h!==0||v!==0)&&(n++,i=Math.min(i,d),a=Math.max(a,d),o=Math.min(o,h),p=Math.max(p,h),l=Math.min(l,v),c=Math.max(c,v))}const g=t*t,u=(n/g*100).toFixed(1);this.log.info("Position map: %dx%d, non-zero=%d/%d (%s%%)",t,t,n,g,u),this.log.info("Bounds: X[%s,%s] Y[%s,%s] Z[%s,%s]",i.toFixed(3),a.toFixed(3),o.toFixed(3),p.toFixed(3),l.toFixed(3),c.toFixed(3));const r=Math.floor(t/2)*t+Math.floor(t/2);this.log.info("Center pixel pos: (%s, %s, %s)",e[r*4].toFixed(3),e[r*4+1].toFixed(3),e[r*4+2].toFixed(3))}}export{F as U,H as a,N as c};
