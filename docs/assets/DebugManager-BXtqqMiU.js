const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PostProcessing.debug-D9-ZQV1A.js","assets/index-_jQa80Dm.js","assets/index-DF8svE4a.css","assets/TopIslandUVSampling.debug-gxKJB_Ve.js","assets/UVSampler-XfTJK-_C.js","assets/UVSampling.debug-CQqK9SqZ.js","assets/DistantTerrain.debug-bs8cTBbA.js","assets/Campfire.debug-CCoEOQSK.js","assets/Crystals.debug-DWOKWvvG.js","assets/Waterfalls.debug-BM36iHvH.js"])))=>i.map(i=>d[i]);
import{P as js,C as N,W as Gs,R as Ws,L as In,M as ce,m as Xs,a as S,D as F,I as Ue,A as Ys,H as ee,b as ve,S as U,V as v,T as Zs,c as As,d as vt,e as Vt,f as Ks,g as Zt,h as Dn,i as zt,O as Qs,B as Is,j as q,E as Rn,k as qt,l as dt,n as vn,o as Kt,p as Ds,q as ye,r as Js,s as Fn,t as ei,u as Q,v as ti,G as ni,_ as ie,w as Cn,x as si,y as Ut,z as wn,F as kn,J as H,K as Tt,N as de,Q as Gt,U as ii,X as Y,Y as ct,Z as Sn,$ as oi,a0 as Z,a1 as W,a2 as yn,a3 as Nn,a4 as It,a5 as fe,a6 as Pe,a7 as Pt,a8 as ai,a9 as ri,aa as li,ab as ci,ac as di,ad as _t,ae as Ne,af as xn,ag as hi,ah as ui,ai as pi,aj as gi,ak as mi,al as bi,am as fi,an as vi,ao as Bn,ap as yi,aq as xi,ar as Ci,as as wi,at as ki,au as ht}from"./index-_jQa80Dm.js";class Si{listeners=new Map;on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{this.listeners.get(e)?.delete(t)}}emit(e,...t){const n=this.listeners.get(e);if(!n)return;const s=t[0];for(const i of n)i(s)}clear(e){e?this.listeners.delete(e):this.listeners.clear()}dispose(){this.listeners.clear()}}class Ei{tools=new Map;events;log;manager=null;constructor(e,t){this.events=e,this.log=t}setManager(e){this.manager=e}register(e){if(!this.manager){this.log.err('Cannot register tool "%s" - manager not set',e.id);return}if(this.tools.has(e.id)){this.log.warn('Tool "%s" already registered, skipping',e.id);return}this.tools.set(e.id,e),e.init(this.manager),this.log.info("Registered tool: %s",e.id)}get(e){return this.tools.get(e)}getAll(){return Array.from(this.tools.values())}enable(e){const t=this.tools.get(e);if(!t){this.log.warn("Cannot enable unknown tool: %s",e);return}t.enabled||(t.enabled=!0,t.enable(),this.events.emit("tool:enabled",{id:e}))}disable(e){const t=this.tools.get(e);if(!t){this.log.warn("Cannot disable unknown tool: %s",e);return}t.enabled&&(t.enabled=!1,t.disable(),this.events.emit("tool:disabled",{id:e}))}toggle(e){const t=this.tools.get(e);t&&(t.enabled?this.disable(e):this.enable(e))}isEnabled(e){return this.tools.get(e)?.enabled??!1}disableAll(){const e=[];for(const t of this.tools.values())t.enabled&&(e.push(t),t.disable());return e}enableAll(e){for(const t of e)t.enable()}update(e){for(const t of this.tools.values())t.update&&(t.enabled||t.alwaysUpdate)&&t.update(e)}render(e){for(const t of this.tools.values())t.enabled&&t.render&&t.render(e)}dispose(){for(const e of this.tools.values())e.enabled&&e.disable(),e.dispose();this.tools.clear(),this.log.info("ToolRegistry disposed")}}class Li extends js{renderScene;renderCamera;getActiveCamera;selectedObjects=[];maskRenderTarget;maskMaterial;outlineMaterial;outlineColor;thickness;originalMaterials=new Map;originalVisibility=new Map;constructor(e,t,n={}){super("SelectionOutlinePass"),this.renderScene=e,this.renderCamera=t,this.getActiveCamera=n.getActiveCamera??null,this.outlineColor=n.color instanceof N?n.color:new N(n.color??16746496),this.thickness=n.thickness??2,this.maskRenderTarget=new Gs(1,1,{minFilter:In,magFilter:In,format:Ws,generateMipmaps:!1}),this.maskMaterial=new ce({color:16777215,depthTest:!1,depthWrite:!1}),this.outlineMaterial=Xs["effects:selection-outline"].material,this.outlineMaterial.uniforms.tMask.value=this.maskRenderTarget.texture,this.outlineMaterial.uniforms.uOutlineColor.value=this.outlineColor,this.outlineMaterial.uniforms.uThickness.value=this.thickness,this.fullscreenMaterial=this.outlineMaterial}getCurrentCamera(){return this.getActiveCamera?this.getActiveCamera():this.renderCamera}setSelectedObjects(e){this.selectedObjects=e}clear(){this.selectedObjects=[]}setColor(e){e instanceof N?this.outlineColor.copy(e):this.outlineColor.set(e)}setThickness(e){this.thickness=e,this.outlineMaterial.uniforms.uThickness.value=e}setSize(e,t){this.maskRenderTarget.setSize(e,t),this.outlineMaterial.uniforms.uResolution.value.set(e,t)}render(e,t,n,s,i){this.outlineMaterial.uniforms.tDiffuse.value=t.texture;const o=e.getClearColor(new N),a=e.getClearAlpha();this.selectedObjects.length===0?(e.setRenderTarget(this.maskRenderTarget),e.setClearColor(0,0),e.clear()):this.renderMask(e),e.setClearColor(o,a),this.outlineMaterial.uniforms.tMask.value=this.maskRenderTarget.texture,e.setRenderTarget(this.renderToScreen?null:n),e.render(this.scene,this.camera)}renderMask(e){const t=this.getCurrentCamera();this.storeSceneState(),this.prepareSceneForMask(),e.setRenderTarget(this.maskRenderTarget),e.setClearColor(0,0),e.clear(),e.render(this.renderScene,t),this.restoreSceneState()}storeSceneState(){this.originalMaterials.clear(),this.originalVisibility.clear()}prepareSceneForMask(){this.renderScene.traverse(e=>{this.isSelected(e)||this.isAncestorOfSelected(e)||this.isDescendantOfSelected(e)||(this.originalVisibility.set(e,e.visible),e.visible=!1)});for(const e of this.selectedObjects)e.traverse(t=>{t instanceof S&&(this.originalMaterials.set(t,t.material),t.material=this.maskMaterial)})}isSelected(e){return this.selectedObjects.includes(e)}isAncestorOfSelected(e){for(const t of this.selectedObjects){let n=t.parent;for(;n;){if(n===e)return!0;n=n.parent}}return!1}isDescendantOfSelected(e){let t=e.parent;for(;t;){if(this.selectedObjects.includes(t))return!0;t=t.parent}return!1}restoreSceneState(){for(const[e,t]of this.originalMaterials)e.material=t;this.originalMaterials.clear();for(const[e,t]of this.originalVisibility)e.visible=t;this.originalVisibility.clear()}dispose(){this.maskRenderTarget.dispose(),this.maskMaterial.dispose(),this.outlineMaterial.dispose(),super.dispose()}}class V extends HTMLElement{shadow;initialized=!1;listenersAttached=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.initialized||(this.render(),this.initialized=!0),this.listenersAttached||(this.setupEventListeners(),this.listenersAttached=!0)}disconnectedCallback(){this.cleanupEventListeners(),this.listenersAttached=!1}adoptedCallback(){this.listenersAttached||(this.setupEventListeners(),this.listenersAttached=!0)}ensureInitialized(){this.initialized||(this.render(),this.initialized=!0)}dispose(){this.cleanupEventListeners(),this.listenersAttached=!1,this.shadow.innerHTML="",this.initialized=!1}setupEventListeners(){}cleanupEventListeners(){}$(e){return this.shadow.querySelector(e)}$required(e){const t=this.shadow.querySelector(e);if(!t)throw new Error(`${this.constructor.name}: Required element "${e}" not found`);return t}$$(e){return this.shadow.querySelectorAll(e)}emit(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}}const Ti=`<div class="panel">
    <div class="header">
        <span class="title"><slot name="title"></slot></span>
        <button class="close" title="Close">&times;</button>
    </div>
    <div class="content">
        <slot></slot>
    </div>
    <div class="resize-handle" title="Drag to resize"></div>
</div>
`,zi=`/**
 * FloatingPanel component styles.
 * Draggable, closable panel with localStorage position persistence.
 */

:host {
    position: fixed;
    z-index: 20000;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    display: none;
    max-height: 80vh;
    overflow: hidden;
    text-transform: none;
    letter-spacing: normal;
}

:host([visible]) {
    display: flex;
    flex-direction: column;
}

.panel {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 8px;
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.9));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    cursor: grab;
    user-select: none;
    flex-shrink: 0;
}

.header:active {
    cursor: grabbing;
}

.title {
    font-weight: 500;
    font-size: 11px;
}

.close {
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    padding: 0 4px;
    transition: color 0.2s;
}

.close:hover {
    color: var(--debug-error, #f44336);
}

.content {
    padding: 8px;
    overflow-y: auto;
    overflow-x: hidden;
    flex: 1;
}

.content::-webkit-scrollbar {
    width: 6px;
}

.content::-webkit-scrollbar-track {
    background: transparent;
}

.content::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

/* Slotted content styling */

/* Collapsible sections */
::slotted(.debug-floating-section) {
    margin-bottom: 8px;
}

::slotted(.debug-floating-section:last-child) {
    margin-bottom: 0;
}

/* Key-value rows */
::slotted(.debug-floating-row) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    padding: 2px 0;
    font-size: 11px;
}

/* Resize handle */
.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    cursor: se-resize;
    background: linear-gradient(
        135deg,
        transparent 50%,
        var(--debug-border-light, rgba(80, 80, 80, 0.6)) 50%
    );
    border-radius: 0 0 var(--debug-radius, 4px) 0;
    z-index: 1;
    opacity: 0.6;
    transition: opacity 0.15s;
}

.resize-handle:hover {
    opacity: 1;
    background: linear-gradient(
        135deg,
        transparent 50%,
        var(--debug-accent, #4a90d9) 50%
    );
}
`,$n="floating-panel:",Hn=28,he=10,Pi=200,Mi=100;class xe extends V{static tagName="debug-floating-panel";static get observedAttributes(){return["visible","panel-id"]}headerEl;closeBtn;contentEl;resizeHandle;isDragging=!1;dragStartX=0;dragStartY=0;panelStartX=0;panelStartY=0;isResizing=!1;resizeStartX=0;resizeStartY=0;resizeStartWidth=0;resizeStartHeight=0;boundMouseMove=null;boundMouseUp=null;boundResizeMove=null;boundResizeEnd=null;render(){this.shadow.innerHTML=`<style>${zi}</style>${Ti}`,this.headerEl=this.$required(".header"),this.closeBtn=this.$required(".close"),this.contentEl=this.$required(".content"),this.resizeHandle=this.$required(".resize-handle")}setupEventListeners(){this.closeBtn.addEventListener("click",this.handleClose),this.headerEl.addEventListener("mousedown",this.handleDragStart),this.resizeHandle.addEventListener("mousedown",this.handleResizeStart)}cleanupEventListeners(){this.closeBtn.removeEventListener("click",this.handleClose),this.headerEl.removeEventListener("mousedown",this.handleDragStart),this.resizeHandle.removeEventListener("mousedown",this.handleResizeStart),this.boundMouseMove&&document.removeEventListener("mousemove",this.boundMouseMove),this.boundMouseUp&&document.removeEventListener("mouseup",this.boundMouseUp),this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeEnd&&document.removeEventListener("mouseup",this.boundResizeEnd)}handleClose=()=>{this.hide(),this.emit("close")};handleDragStart=e=>{if(e.target.classList.contains("close"))return;this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY;const t=this.getBoundingClientRect();this.panelStartX=t.left,this.panelStartY=t.top,document.body.style.cursor="grabbing",document.body.style.userSelect="none",this.boundMouseMove=this.handleDragMove.bind(this),this.boundMouseUp=this.handleDragEnd.bind(this),document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp)};handleDragMove(e){if(!this.isDragging)return;const t=e.clientX-this.dragStartX,n=e.clientY-this.dragStartY;let s=this.panelStartX+t,i=this.panelStartY+n;const o=this.getBoundingClientRect(),a=window.innerWidth-o.width-he,r=window.innerHeight-Hn-he;s=Math.max(he,Math.min(a,s)),i=Math.max(he,Math.min(r,i)),this.style.left=`${s}px`,this.style.top=`${i}px`}handleDragEnd(){if(!this.isDragging)return;this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",this.boundMouseMove&&document.removeEventListener("mousemove",this.boundMouseMove),this.boundMouseUp&&document.removeEventListener("mouseup",this.boundMouseUp),this.saveState();const e=this.getBoundingClientRect();this.emit("dragend",{x:e.left,y:e.top})}handleResizeStart=e=>{e.stopPropagation(),this.isResizing=!0,this.resizeStartX=e.clientX,this.resizeStartY=e.clientY;const t=this.getBoundingClientRect();this.resizeStartWidth=t.width,this.resizeStartHeight=t.height,document.body.style.cursor="se-resize",document.body.style.userSelect="none",this.boundResizeMove=this.handleResizeMove.bind(this),this.boundResizeEnd=this.handleResizeEnd.bind(this),document.addEventListener("mousemove",this.boundResizeMove),document.addEventListener("mouseup",this.boundResizeEnd)};handleResizeMove(e){if(!this.isResizing)return;const t=e.clientX-this.resizeStartX,n=e.clientY-this.resizeStartY,s=this.getBoundingClientRect(),i=window.innerWidth-s.left-he,o=window.innerHeight-s.top-he,a=Math.max(Pi,Math.min(i,this.resizeStartWidth+t)),r=Math.max(Mi,Math.min(o,this.resizeStartHeight+n));this.style.width=`${a}px`,this.style.height=`${r}px`}handleResizeEnd(){if(!this.isResizing)return;this.isResizing=!1,document.body.style.cursor="",document.body.style.userSelect="",this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeEnd&&document.removeEventListener("mouseup",this.boundResizeEnd),this.saveState();const e=this.getBoundingClientRect();this.emit("resize",{width:e.width,height:e.height})}get visible(){return this.hasAttribute("visible")}set visible(e){e?this.setAttribute("visible",""):this.removeAttribute("visible")}get panelId(){return this.getAttribute("panel-id")??""}set panelId(e){this.setAttribute("panel-id",e)}show(e,t){const n=this.loadState();if(n)e=n.x,t=n.y,n.width&&(this.style.width=`${n.width}px`),n.height&&(this.style.height=`${n.height}px`);else if(e===void 0||t===void 0){const o=this.getBoundingClientRect();e=(window.innerWidth-o.width)/2,t=window.innerHeight/4}const i=this.getBoundingClientRect().width||280;e=Math.max(he,Math.min(window.innerWidth-i-he,e)),t=Math.max(he,Math.min(window.innerHeight-Hn-he,t)),this.style.left=`${e}px`,this.style.top=`${t}px`,this.visible=!0}hide(){this.visible=!1}toggle(e,t){this.visible?this.hide():this.show(e,t)}isVisible(){return this.visible}getContentSlot(){return this.shadow.querySelector("slot:not([name])")}saveState(){if(!this.panelId)return;const e=this.getBoundingClientRect(),t={x:e.left,y:e.top,width:e.width,height:e.height};F.setProject($n+this.panelId,t)}loadState(){return this.panelId?F.getProject($n+this.panelId):null}static register(){customElements.get(xe.tagName)||customElements.define(xe.tagName,xe)}}xe.register();xe.register();const Ai=340;class Ii{id;element;contentContainer;options;constructor(e){this.id=e.id,this.options=e,this.element=document.createElement("debug-floating-panel"),this.element.panelId=e.id,this.element.id=`debug-floating-${e.id}`,this.element.style.width=`${e.width??Ai}px`,e.height&&(this.element.style.height=`${e.height}px`);const t=document.createElement("span");t.slot="title",t.textContent=e.title,this.element.appendChild(t),this.contentContainer=document.createElement("div"),this.contentContainer.className="floating-panel-content-wrapper",this.element.appendChild(this.contentContainer),e.onClose&&this.element.addEventListener("close",()=>{e.onClose()})}getContent(){return this.contentContainer}show(e,t){this.element.parentElement||document.body.appendChild(this.element),this.element.show(e,t)}hide(){this.element.hide()}isVisible(){return this.element.isVisible()}toggle(e,t){this.element.parentElement||document.body.appendChild(this.element),this.element.toggle(e,t)}setTitle(e){const t=this.element.querySelector('[slot="title"]');t&&(t.textContent=e)}clearContent(){this.contentContainer.innerHTML=""}dispose(){this.element.remove()}}const Di=`<div class="inspector-content"></div>
`,Ri=`/**
 * FloatingInspector component styles.
 * Inspector-specific styling for sections, rows, and values.
 */

:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

/* Collapsible sections */
.section {
    margin-bottom: 8px;
}

.section:last-child {
    margin-bottom: 0;
}

.section-header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 0;
    cursor: pointer;
    font-weight: 500;
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
    user-select: none;
}

.section-header:hover {
    color: var(--debug-accent, #4a90d9);
}

.section-icon {
    font-size: 8px;
    width: 10px;
    text-align: center;
    opacity: 0.7;
}

.section-content {
    padding-left: 14px;
}

.section.collapsed .section-content {
    display: none;
}

/* Key-value rows */
.row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    padding: 2px 0;
    font-size: 11px;
}

.row.copyable {
    cursor: pointer;
    border-radius: 2px;
    margin: 0 -4px;
    padding: 2px 4px;
}

.row.copyable:hover {
    background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
}

.key {
    color: var(--debug-text-muted, #888);
    flex-shrink: 0;
}

.value {
    text-align: right;
    word-break: break-word;
    color: var(--debug-text, #e0e0e0);
    flex: 1;
}

.copy-icon,
.copy-placeholder {
    font-size: 10px;
    flex-shrink: 0;
    margin-left: 4px;
    width: 12px;
    text-align: center;
}

.copy-icon {
    color: var(--debug-text-muted, #555);
    opacity: 0;
    transition: opacity 0.15s;
}

.copy-placeholder {
    visibility: hidden;
}

.row.copyable:hover .copy-icon {
    opacity: 1;
}

.row.copyable:hover .copy-icon:hover {
    color: var(--debug-accent, #4a90d9);
}

/* Value type colors */
.value.null {
    color: var(--debug-text-muted, #888);
    font-style: italic;
}

.value.boolean {
    color: var(--debug-warning, #ff9800);
}

.value.number {
    color: var(--debug-accent, #4a90d9);
}

.value.string {
    color: var(--debug-success, #4caf50);
}

/* Nested object container */
.nested {
    padding-left: 8px;
    border-left: 1px solid var(--debug-border, #3c3c3c);
    margin-left: 4px;
    margin-top: 4px;
}

.nested-key {
    color: var(--debug-text-muted, #888);
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 11px;
}

/* Action buttons */
.actions {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 8px 0 4px;
    border-top: 1px solid var(--debug-border, #3c3c3c);
    margin-top: 8px;
}

.action-btn {
    padding: 4px 8px;
    font-size: 10px;
    font-family: inherit;
    background: var(--debug-bg-lighter, #3c3c3c);
    border: 1px solid var(--debug-border, #4a4a4a);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
}

.action-btn:hover:not(:disabled) {
    background: var(--debug-bg-hover, #4a4a4a);
    border-color: var(--debug-accent, #4a90d9);
}

.action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.action-btn.active {
    background: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
    color: white;
}

.action-btn.destructive {
    color: var(--debug-error, #f44336);
}

.action-btn.destructive:hover:not(:disabled) {
    background: var(--debug-error, #f44336);
    border-color: var(--debug-error, #f44336);
    color: white;
}

/* Control rows (select, range, checkbox, number) */
.control-row {
    align-items: center;
}

.control-select {
    background: var(--debug-bg-lighter, #3c3c3c);
    border: 1px solid var(--debug-border, #4a4a4a);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-size: 10px;
    padding: 3px 6px;
    min-width: 80px;
    cursor: pointer;
}

.control-select:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.control-select:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

/* Range slider */
.range-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    justify-content: flex-end;
}

.control-range {
    width: 100px;
    height: 4px;
    -webkit-appearance: none;
    appearance: none;
    background: var(--debug-bg-lighter, #3c3c3c);
    border-radius: 2px;
    cursor: pointer;
}

.control-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background: var(--debug-accent, #4a90d9);
    border-radius: 50%;
    cursor: pointer;
}

.control-range::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: var(--debug-accent, #4a90d9);
    border-radius: 50%;
    border: none;
    cursor: pointer;
}

.range-value {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    min-width: 40px;
    text-align: right;
    font-family: monospace;
}

/* Checkbox */
.control-checkbox {
    width: 14px;
    height: 14px;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

/* Number input */
.control-number {
    background: var(--debug-bg-lighter, #3c3c3c);
    border: 1px solid var(--debug-border, #4a4a4a);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-size: 10px;
    padding: 3px 6px;
    width: 60px;
    text-align: right;
    font-family: monospace;
}

.control-number:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.control-number:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

/* Button group */
.button-group {
    display: flex;
    gap: 2px;
    margin: 4px 0;
}

.group-btn {
    padding: 4px 8px;
    font-size: 10px;
    font-family: inherit;
    background: var(--debug-bg-lighter, #3c3c3c);
    border: 1px solid var(--debug-border, #4a4a4a);
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
}

.group-btn:first-child {
    border-radius: 3px 0 0 3px;
}

.group-btn:last-child {
    border-radius: 0 3px 3px 0;
}

.group-btn:only-child {
    border-radius: 3px;
}

.group-btn:hover:not(:disabled) {
    background: var(--debug-bg-hover, #4a4a4a);
}

.group-btn.active {
    background: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
    color: white;
}
`;class _e extends V{static tagName="debug-floating-inspector";contentEl;render(){this.shadow.innerHTML=`<style>${Ri}</style>${Di}`,this.contentEl=this.$required(".inspector-content")}clear(){this.ensureInitialized(),this.contentEl.innerHTML=""}addSection(e,t=!1){this.ensureInitialized();const n=document.createElement("div");n.className=`section${t?" collapsed":""}`;const s=document.createElement("div");s.className="section-header";const i=document.createElement("span");i.className="section-icon",i.textContent=t?"▶":"▼";const o=document.createElement("span");o.textContent=e,s.appendChild(i),s.appendChild(o),s.addEventListener("click",()=>{n.classList.toggle("collapsed"),i.textContent=n.classList.contains("collapsed")?"▶":"▼"});const a=document.createElement("div");return a.className="section-content",n.appendChild(s),n.appendChild(a),this.contentEl.appendChild(n),a}addRow(e,t,n){const s=document.createElement("div");s.className="row";const i=document.createElement("span");i.className="key",i.textContent=t;const o=document.createElement("span");o.className="value",this.formatValue(o,n);const a=document.createElement("span");a.className="copy-placeholder",s.appendChild(i),s.appendChild(o),s.appendChild(a),e.appendChild(s)}addColorRow(e,t,n){const s=document.createElement("div");s.className="row";const i=document.createElement("span");i.className="key",i.textContent=t;const o=document.createElement("span");o.className="value";const a=document.createElement("span");a.style.display="inline-flex",a.style.alignItems="center",a.style.gap="6px";const r=document.createElement("span");r.style.display="inline-block",r.style.width="14px",r.style.height="14px",r.style.backgroundColor=n,r.style.border="1px solid rgba(255, 255, 255, 0.3)",r.style.borderRadius="2px",r.style.flexShrink="0";const l=document.createElement("span");l.textContent=n,l.style.fontFamily="monospace",a.appendChild(r),a.appendChild(l),o.appendChild(a);const d=document.createElement("span");d.className="copy-placeholder",s.appendChild(i),s.appendChild(o),s.appendChild(d),e.appendChild(s)}addCopyableRow(e,t,n,s,i){const o=document.createElement("div");o.className="row copyable";const a=document.createElement("span");a.className="key",a.textContent=t;const r=document.createElement("span");r.className="value",r.textContent=n;const l=document.createElement("span");l.className="copy-icon",l.textContent="⎘",l.title="Click to copy",o.appendChild(a),o.appendChild(r),o.appendChild(l),e.appendChild(o),o.addEventListener("click",()=>{const d=s??n;navigator.clipboard.writeText(d),i?.()})}addActions(){this.ensureInitialized();const e=document.createElement("div");return e.className="actions",this.contentEl.appendChild(e),e}addButton(e,t,n,s={}){const i=document.createElement("button");return i.className="action-btn",i.textContent=t,i.disabled=s.disabled??!1,s.active&&i.classList.add("active"),s.destructive&&i.classList.add("destructive"),i.addEventListener("click",n),e.appendChild(i),i}addSelect(e,t,n,s,i){const o=document.createElement("div");o.className="row control-row";const a=document.createElement("span");a.className="key",a.textContent=t;const r=document.createElement("select");r.className="control-select";for(const l of n){const d=document.createElement("option");d.value=l.value,d.textContent=l.label,r.appendChild(d)}return i!==void 0&&(r.value=i),r.addEventListener("change",()=>s(r.value)),o.appendChild(a),o.appendChild(r),e.appendChild(o),r}addRange(e,t,n,s){const i=document.createElement("div");i.className="row control-row range-row";const o=document.createElement("span");o.className="key",o.textContent=t;const a=document.createElement("div");a.className="range-wrapper";const r=document.createElement("input");r.type="range",r.className="control-range",r.min=String(n.min),r.max=String(n.max),r.step=String(n.step),r.value=String(n.value);const l=document.createElement("span");return l.className="range-value",l.textContent=n.value.toFixed(2),r.addEventListener("input",()=>{const d=parseFloat(r.value);l.textContent=d.toFixed(2),s(d)}),a.appendChild(r),a.appendChild(l),i.appendChild(o),i.appendChild(a),e.appendChild(i),{slider:r,valueDisplay:l}}addCheckbox(e,t,n,s){const i=document.createElement("div");i.className="row control-row";const o=document.createElement("span");o.className="key",o.textContent=t;const a=document.createElement("input");return a.type="checkbox",a.className="control-checkbox",a.checked=n,a.addEventListener("change",()=>s(a.checked)),i.appendChild(o),i.appendChild(a),e.appendChild(i),a}addNumberInput(e,t,n,s){const i=document.createElement("div");i.className="row control-row";const o=document.createElement("span");o.className="key",o.textContent=t;const a=document.createElement("input");return a.type="number",a.className="control-number",a.value=String(n.value),n.min!==void 0&&(a.min=String(n.min)),n.max!==void 0&&(a.max=String(n.max)),n.step!==void 0&&(a.step=String(n.step)),a.addEventListener("change",()=>{const r=parseFloat(a.value);isNaN(r)||s(r)}),i.appendChild(o),i.appendChild(a),e.appendChild(i),a}addButtonGroup(e,t){const n=document.createElement("div");n.className="button-group";const s={};for(const i of t){const o=document.createElement("button");o.className="group-btn",o.textContent=i.label,i.active&&o.classList.add("active"),o.addEventListener("click",i.onClick),n.appendChild(o),s[i.name]=o}return e.appendChild(n),s}renderObject(e,t,n=0,s=3){if(n>s){this.addRow(e,"...","max depth reached");return}for(const[i,o]of Object.entries(t))if(o!==null&&typeof o=="object"&&!Array.isArray(o)){const a=document.createElement("div");a.className="nested-key",a.textContent=i,e.appendChild(a);const r=document.createElement("div");r.className="nested",this.renderObject(r,o,n+1,s),e.appendChild(r)}else if(Array.isArray(o)&&o.length<=5){const a=o.map(r=>typeof r=="number"?Number.isInteger(r)?r:r.toFixed(2):String(r)).join(", ");this.addRow(e,i,`[${a}]`)}else this.addRow(e,i,o)}formatValue(e,t){t===null?(e.textContent="null",e.classList.add("null")):t===void 0?(e.textContent="undefined",e.classList.add("null")):typeof t=="boolean"?(e.textContent=t?"true":"false",e.classList.add("boolean")):typeof t=="number"?(e.textContent=Number.isInteger(t)?String(t):t.toFixed(3),e.classList.add("number")):typeof t=="string"?(e.textContent=t.length>30?t.substring(0,30)+"...":t,e.classList.add("string"),e.title=t):typeof t=="object"?(Array.isArray(t)?e.textContent=`Array[${t.length}]`:e.textContent="{...}",e.classList.add("null")):e.textContent=String(t)}static register(){customElements.get(_e.tagName)||customElements.define(_e.tagName,_e)}}_e.register();const Fi="/assets/debugUVTiles-DNfi9Cd4.svg";_e.register();class Ni{panel;inspector;getAllowedUserDataKeys;currentObject=null;uvDebugTexture=null;uvDebugTextureLoading=!1;uvDebugObjects=new Map;uvDebugMaterials=new Map;uvDebugBtn=null;animationRegistry=null;currentClipName=null;animationUpdateInterval=null;animationControls={};focusCallback=null;log=null;constructor(e,t){this.getAllowedUserDataKeys=e,this.focusCallback=t?.onFocus??null,this.log=t?.logger??null,this.animationRegistry=t?.animationRegistry??null,this.inspector=document.createElement("debug-floating-inspector"),this.panel=new Ii({id:"object-inspector",title:"Inspector",width:300,persistPosition:!0,onClose:()=>{this.currentObject=null}}),this.panel.getContent().appendChild(this.inspector)}inspect(e,t,n){this.currentObject=e,this.updateContent();const s=t!==void 0?t+20:void 0,i=n!==void 0?n-10:void 0;this.panel.show(s,i)}update(){this.currentObject&&this.panel.isVisible()&&this.updateContent()}hide(){this.stopAnimationUpdateInterval(),this.panel.hide(),this.currentObject=null}setAnimationRegistry(e){this.animationRegistry=e}isVisible(){return this.panel.isVisible()}updateContent(){const e=this.currentObject;if(!e)return;this.inspector.clear(),this.uvDebugBtn=null;const t=e.name||"[unnamed]";this.panel.setTitle(`Inspector: ${t}`);const n=this.inspector.addSection("Object",!1);this.inspector.addCopyableRow(n,"Name",e.name||"[unnamed]",e.name||"",()=>this.log?.info("Name copied")),this.inspector.addRow(n,"Type",e.type),this.inspector.addRow(n,"ID",e.id),this.inspector.addCopyableRow(n,"UUID",e.uuid.substring(0,8)+"...",e.uuid,()=>this.log?.info("UUID copied")),this.inspector.addRow(n,"Visible",e.visible),this.inspector.addRow(n,"Children",e.children.length);const s=this.inspector.addSection("Transform",!1),i=e.position,o=e.rotation,a=e.scale,r=`${i.x.toFixed(2)}, ${i.y.toFixed(2)}, ${i.z.toFixed(2)}`,l=`new Vector3(${i.x.toFixed(3)}, ${i.y.toFixed(3)}, ${i.z.toFixed(3)})`;this.inspector.addCopyableRow(s,"Position",r,l,()=>this.log?.info("Position copied"));const d=`${(o.x*180/Math.PI).toFixed(1)}°, ${(o.y*180/Math.PI).toFixed(1)}°, ${(o.z*180/Math.PI).toFixed(1)}°`,h=e.quaternion,u=`new Quaternion(${h.x.toFixed(3)}, ${h.y.toFixed(3)}, ${h.z.toFixed(3)}, ${h.w.toFixed(3)})`;this.inspector.addCopyableRow(s,"Rotation",d,u,()=>this.log?.info("Rotation copied"));const p=`${a.x.toFixed(2)}, ${a.y.toFixed(2)}, ${a.z.toFixed(2)}`,x=`new Vector3(${a.x.toFixed(3)}, ${a.y.toFixed(3)}, ${a.z.toFixed(3)})`;if(this.inspector.addCopyableRow(s,"Scale",p,x,()=>this.log?.info("Scale copied")),e instanceof S){const m=e.material,w=this.inspector.addSection("Material",!0);Array.isArray(m)?this.inspector.addRow(w,"Materials",`Array[${m.length}]`):this.inspector.addRow(w,"Name",m.name||m.type)}if(this.isLight(e)&&this.addLightSection(e),this.isAudio(e)&&this.addAudioSection(e),e instanceof Ue){const m=this.inspector.addSection("Instancing",!1);this.inspector.addRow(m,"Count",e.count),this.inspector.addRow(m,"Max Count",e.instanceMatrix.count)}this.animationRegistry?.hasAnimations(e)&&this.addAnimationSection(e);const f=this.getAllowedUserDataKeys(),C={};for(const m of f)m in e.userData&&(C[m]=e.userData[m]);if(Object.keys(C).length>0){const m=this.inspector.addSection("User Data",!1);this.inspector.renderObject(m,C)}this.addActionButtons(e)}addActionButtons(e){const t=this.inspector.addActions();this.inspector.addButton(t,"Focus",()=>this.focusObject(e),{disabled:!this.focusCallback});const n=e instanceof S,s=this.uvDebugObjects.has(e);this.uvDebugBtn=this.inspector.addButton(t,s?"UV: ON":"UV Debug",()=>this.toggleUVDebug(e),{disabled:!n,active:s})}isLight(e){return e.isLight===!0}isAudio(e){return e instanceof Ys}addLightSection(e){const t=this.inspector.addSection("Light",!1);let n="Unknown";if(e instanceof vt?n="Directional":e instanceof ve?n="Point":e instanceof U?n="Spot":e instanceof ee&&(n="Hemisphere"),this.inspector.addRow(t,"Light Type",n),"color"in e&&e.color){const s="#"+e.color.getHexString();this.inspector.addColorRow(t,"Color",s)}if(e instanceof ee){const s="#"+e.groundColor.getHexString();this.inspector.addColorRow(t,"Ground Color",s)}if("intensity"in e&&this.inspector.addRow(t,"Intensity",e.intensity.toFixed(2)),(e instanceof ve||e instanceof U)&&(this.inspector.addRow(t,"Distance",e.distance.toFixed(1)),this.inspector.addRow(t,"Decay",e.decay.toFixed(2))),e instanceof U){const s=(e.angle*180/Math.PI).toFixed(1);this.inspector.addRow(t,"Angle",`${s}°`),this.inspector.addRow(t,"Penumbra",e.penumbra.toFixed(2))}if("castShadow"in e&&this.inspector.addRow(t,"Cast Shadow",e.castShadow?"Yes":"No"),e.castShadow&&e.shadow){const s=`${e.shadow.mapSize.x}x${e.shadow.mapSize.y}`;this.inspector.addRow(t,"Shadow Map",s)}}addAudioSection(e){const t=this.inspector.addSection("Audio",!1),n=e instanceof Vt;this.inspector.addRow(t,"Type",n?"Positional":"Global"),this.inspector.addRow(t,"Playing",e.isPlaying?"Yes":"No"),this.inspector.addRow(t,"Loop",e.getLoop()?"Yes":"No"),this.inspector.addRow(t,"Volume",e.getVolume().toFixed(2));const s=e.userData;if(s.initialVolume!==void 0&&this.inspector.addRow(t,"Initial Volume",s.initialVolume.toFixed(2)),s.crossfadeFactor!==void 0&&this.inspector.addRow(t,"Crossfade",s.crossfadeFactor.toFixed(2)),n&&s.spatialFactor!==void 0&&this.inspector.addRow(t,"Spatial Factor",s.spatialFactor.toFixed(2)),n){const i=e.panner;this.inspector.addRow(t,"Ref Distance",e.getRefDistance().toFixed(1)),this.inspector.addRow(t,"Max Distance",e.getMaxDistance().toFixed(1)),this.inspector.addRow(t,"Rolloff Factor",e.getRolloffFactor().toFixed(2)),this.inspector.addRow(t,"Distance Model",e.getDistanceModel());const o=i.coneInnerAngle,a=i.coneOuterAngle;(o<360||a<360)&&(this.inspector.addRow(t,"Cone Inner",`${o.toFixed(0)}°`),this.inspector.addRow(t,"Cone Outer",`${a.toFixed(0)}°`),this.inspector.addRow(t,"Cone Outer Gain",i.coneOuterGain.toFixed(2)))}}addAnimationSection(e){if(!this.animationRegistry)return;const t=this.animationRegistry.getClipNames(e);if(t.length===0)return;const n=this.inspector.addSection("Animation",!1),s=t.map(l=>({value:l,label:l}));this.currentClipName=this.currentClipName&&t.includes(this.currentClipName)?this.currentClipName:t[0],this.inspector.addSelect(n,"Clip",s,l=>{this.currentClipName=l,this.updateAnimationControls(e)},this.currentClipName);const i=this.animationRegistry.getAnimationState(e,this.currentClipName),o=i?.duration??0,a=this.inspector.addButtonGroup(n,[{name:"play",label:"▶",onClick:()=>this.playAnimation(e),active:i?.isPlaying??!1},{name:"pause",label:"⏸",onClick:()=>this.pauseAnimation(e),active:i?.isPaused??!1},{name:"stop",label:"⏹",onClick:()=>this.stopAnimation(e)}]);this.animationControls.playBtn=a.play,this.animationControls.pauseBtn=a.pause,this.animationControls.stopBtn=a.stop;const r=this.inspector.addRange(n,"Time",{min:0,max:o,step:.01,value:i?.time??0},l=>this.seekAnimation(e,l));this.animationControls.timeSlider=r.slider,this.animationControls.timeDisplay=r.valueDisplay,this.updateTimeDisplay(i?.time??0,o),this.animationControls.loopCheckbox=this.inspector.addCheckbox(n,"Loop",i?.loop??!0,l=>this.setAnimationLoop(e,l)),this.animationControls.speedInput=this.inspector.addNumberInput(n,"Speed",{min:.1,max:5,step:.1,value:i?.speed??1},l=>this.setAnimationSpeed(e,l)),this.startAnimationUpdateInterval(e)}updateAnimationControls(e){if(!this.animationRegistry||!this.currentClipName)return;const t=this.animationRegistry.getAnimationState(e,this.currentClipName);t&&(this.animationControls.playBtn?.classList.toggle("active",t.isPlaying),this.animationControls.pauseBtn?.classList.toggle("active",t.isPaused),this.animationControls.timeSlider&&(this.animationControls.timeSlider.max=String(t.duration),this.animationControls.timeSlider.value=String(t.time)),this.updateTimeDisplay(t.time,t.duration),this.animationControls.loopCheckbox&&(this.animationControls.loopCheckbox.checked=t.loop),this.animationControls.speedInput&&(this.animationControls.speedInput.value=String(t.speed)))}updateTimeDisplay(e,t){this.animationControls.timeDisplay&&(this.animationControls.timeDisplay.textContent=`${e.toFixed(2)}s / ${t.toFixed(2)}s`)}startAnimationUpdateInterval(e){this.stopAnimationUpdateInterval(),this.animationUpdateInterval=window.setInterval(()=>{if(!this.animationRegistry||!this.currentClipName||!this.currentObject)return;const t=this.animationRegistry.getAnimationState(e,this.currentClipName);!t||!t.isPlaying||(this.animationControls.timeSlider&&(this.animationControls.timeSlider.value=String(t.time)),this.updateTimeDisplay(t.time,t.duration))},50)}stopAnimationUpdateInterval(){this.animationUpdateInterval!==null&&(window.clearInterval(this.animationUpdateInterval),this.animationUpdateInterval=null)}playAnimation(e){if(!this.animationRegistry||!this.currentClipName)return;this.animationRegistry.getAnimationState(e,this.currentClipName)?.isPaused?this.animationRegistry.resume(e,this.currentClipName):this.animationRegistry.play(e,this.currentClipName,{loop:this.animationControls.loopCheckbox?.checked,speed:parseFloat(this.animationControls.speedInput?.value??"1")}),this.updateAnimationControls(e),this.log?.info("Animation playing: %s",this.currentClipName)}pauseAnimation(e){!this.animationRegistry||!this.currentClipName||(this.animationRegistry.pause(e,this.currentClipName),this.updateAnimationControls(e),this.log?.info("Animation paused: %s",this.currentClipName))}stopAnimation(e){!this.animationRegistry||!this.currentClipName||(this.animationRegistry.stop(e,this.currentClipName),this.updateAnimationControls(e),this.log?.info("Animation stopped: %s",this.currentClipName))}seekAnimation(e,t){if(!this.animationRegistry||!this.currentClipName)return;this.animationRegistry.seek(e,this.currentClipName,t);const n=this.animationRegistry.getAnimationState(e,this.currentClipName);n&&this.updateTimeDisplay(t,n.duration)}setAnimationLoop(e,t){!this.animationRegistry||!this.currentClipName||(this.animationRegistry.setLoop(e,this.currentClipName,t),this.log?.info("Animation loop: %s",t))}setAnimationSpeed(e,t){!this.animationRegistry||!this.currentClipName||(this.animationRegistry.setSpeed(e,this.currentClipName,t),this.log?.info("Animation speed: %s",t))}focusObject(e){if(!this.focusCallback)return;const t=new v;e.getWorldPosition(t),this.focusCallback(t,5)}async loadUVDebugTexture(){if(this.uvDebugTexture)return this.uvDebugTexture;if(this.uvDebugTextureLoading)return null;this.uvDebugTextureLoading=!0;try{const e=new Zs;return this.uvDebugTexture=await e.loadAsync(Fi),this.uvDebugTexture.colorSpace=As,this.log?.info("UV debug texture loaded"),this.uvDebugTexture}catch(e){return this.log?.err("Failed to load UV debug texture: %s",e),null}finally{this.uvDebugTextureLoading=!1}}async toggleUVDebug(e){if(!(e instanceof S))return;if(this.uvDebugObjects.has(e)){this.restoreUVDebug(e);return}const t=await this.loadUVDebugTexture();if(!t)return;this.uvDebugObjects.set(e,e.material);const n=new ce({map:t});this.uvDebugMaterials.set(e,n),e.material=n,this.log?.info("UV debug enabled on: %s",e.name||e.uuid),this.updateUVDebugButtonState()}restoreUVDebug(e){if(!(e instanceof S))return;const t=this.uvDebugObjects.get(e);t&&(e.material=t,this.uvDebugObjects.delete(e));const n=this.uvDebugMaterials.get(e);n&&(n.dispose(),this.uvDebugMaterials.delete(e)),this.log?.info("UV debug disabled on: %s",e.name||e.uuid),this.updateUVDebugButtonState()}clearAllUVDebug(){for(const[e,t]of this.uvDebugObjects)e instanceof S&&(e.material=t);this.uvDebugObjects.clear();for(const e of this.uvDebugMaterials.values())e.dispose();this.uvDebugMaterials.clear(),this.log?.info("Cleared all UV debug"),this.updateUVDebugButtonState()}updateUVDebugButtonState(){if(this.uvDebugBtn&&this.currentObject){const e=this.uvDebugObjects.has(this.currentObject);this.uvDebugBtn.textContent=e?"UV: ON":"UV Debug",this.uvDebugBtn.classList.toggle("active",e)}}dispose(){this.stopAnimationUpdateInterval(),this.clearAllUVDebug(),this.uvDebugTexture&&(this.uvDebugTexture.dispose(),this.uvDebugTexture=null),this.panel.dispose(),this.currentObject=null,this.animationControls={}}}class Bi{engine;events;log;selectedObject=null;outlinePass=null;floatingInspector;inspectorUserDataKeys=new Set(["culling","lod"]);constructor(e){this.engine=e.engine,this.events=e.events,this.log=e.logger,this.floatingInspector=new Ni(()=>this.inspectorUserDataKeys,{onFocus:e.onFocus,logger:e.engine.getLogger("Debug.FloatingInspector"),animationRegistry:e.animationRegistry}),this.setupOutlinePass(e.getActiveCamera)}setupOutlinePass(e){const t=this.engine.getPostProcessing();if(!t){this.log.warn("PostProcessing not available, selection outline disabled");return}this.outlinePass=new Li(this.engine.scene,this.engine.camera.instance,{color:16746496,thickness:2,getActiveCamera:e}),t.insertDynamicPassBefore("__debug_selectionOutline",{pass:this.outlinePass,resize:(n,s)=>this.outlinePass?.setSize(n,s)},"main"),this.log.info("Selection outline pass registered")}updateScene(e){this.outlinePass&&(this.outlinePass.mainScene=e)}getOutlinePass(){return this.outlinePass}getSelected(){return this.selectedObject}getState(){return{selected:this.selectedObject,onSelect:(e,t)=>this.select(e,t)}}select(e,t){this.selectedObject!==e&&(this.selectedObject=e,this.outlinePass&&(e?this.outlinePass.setSelectedObjects([e]):this.outlinePass.clear()),e?this.floatingInspector.inspect(e,t?.x,t?.y):this.floatingInspector.hide(),this.events.emit("selection:change",{object:e,mousePos:t}))}clear(){this.select(null)}addInspectorUserDataKey(e){this.inspectorUserDataKeys.add(e)}dispose(){this.floatingInspector.dispose(),this.selectedObject=null,this.log.info("SelectionManager disposed")}}class $i{entries=new Map;register(e,t){if(t.length===0)return null;if(this.entries.has(e))return this.entries.get(e);const n=new Ks(e),s=new Map;for(const o of t){const a=n.clipAction(o);s.set(o.name||`clip_${s.size}`,a)}const i={mixer:n,clips:t,actions:s,root:e};return this.entries.set(e,i),i}unregister(e){const t=this.entries.get(e);t&&(t.mixer.stopAllAction(),t.mixer.uncacheRoot(e),this.entries.delete(e))}getEntry(e){if(this.entries.has(e))return this.entries.get(e);let t=e.parent;for(;t;){if(this.entries.has(t))return this.entries.get(t);t=t.parent}for(const[n,s]of this.entries)if(this.isDescendantOf(e,n))return s;return null}hasAnimations(e){return this.getEntry(e)!==null}getClipNames(e){const t=this.getEntry(e);return t?Array.from(t.actions.keys()):[]}getAction(e,t){const n=this.getEntry(e);return n?n.actions.get(t)??null:null}play(e,t,n){const s=this.getAction(e,t);s&&(s.setLoop(n?.loop!==!1?Zt:Dn,1/0),n?.speed!==void 0&&(s.timeScale=n.speed),s.reset().play())}pause(e,t){const n=this.getAction(e,t);n&&(n.paused=!0)}resume(e,t){const n=this.getAction(e,t);n&&(n.paused=!1)}stop(e,t){const n=this.getAction(e,t);n&&n.stop()}stopAll(e){const t=this.getEntry(e);t&&t.mixer.stopAllAction()}seek(e,t,n){const s=this.getAction(e,t);s&&(s.isRunning()||(s.play(),s.paused=!0),s.time=Math.max(0,Math.min(n,s.getClip().duration)))}setSpeed(e,t,n){const s=this.getAction(e,t);s&&(s.timeScale=n)}setLoop(e,t,n){const s=this.getAction(e,t);s&&(s.setLoop(n?Zt:Dn,1/0),s.clampWhenFinished=!n)}getAnimationState(e,t){const n=this.getAction(e,t);if(!n)return null;const s=n.getClip();return{clipName:t,duration:s.duration,time:n.time,isPlaying:n.isRunning()&&!n.paused,isPaused:n.paused,loop:n.loop===Zt,speed:n.timeScale,weight:n.weight}}update(e){for(const t of this.entries.values())t.mixer.update(e)}get count(){return this.entries.size}clear(){for(const e of this.entries.values())e.mixer.stopAllAction(),e.mixer.uncacheRoot(e.root);this.entries.clear()}isDescendantOf(e,t){let n=e;for(;n;){if(n===t)return!0;n=n.parent}return!1}}class Hi{engine;controls;canvas;log;debugCamera;enabled=!1;sceneCameraControlsWereEnabled=!1;onInteractionEnd=null;hasBeenPositioned=!1;constructor(e,t){if(this.engine=e,this.log=t,!(e.canvas instanceof HTMLCanvasElement))throw new Error("DebugCamera requires HTMLCanvasElement (main thread only)");this.canvas=e.canvas;const n=e.camera.instance;this.debugCamera=new zt(n.fov??60,n.aspect??1,n.near??.1,n.far??1e3),this.debugCamera.name="__debug_camera__",this.controls=new Qs(this.debugCamera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.1,this.controls.enablePan=!0,this.controls.enableZoom=!0,this.controls.enableRotate=!0,this.controls.screenSpacePanning=!0,this.controls.minDistance=.1,this.controls.maxDistance=500,this.controls.addEventListener("end",this.handleControlsEnd),this.controls.enabled=!1}handleControlsEnd=()=>{this.enabled&&this.onInteractionEnd&&this.onInteractionEnd()};setOnInteractionEnd(e){this.onInteractionEnd=e}get instance(){return this.debugCamera}visualizerCameraGetter=null;setVisualizerCameraGetter(e){this.visualizerCameraGetter=e}get sceneCamera(){return this.visualizerCameraGetter?.()??this.engine.camera.instance}isEnabled(){return this.enabled}enable(){if(this.enabled)return;const e=this.sceneCamera;if(!this.hasBeenPositioned){this.debugCamera.position.copy(e.position),this.debugCamera.quaternion.copy(e.quaternion),this.debugCamera.fov=e.fov??60,this.debugCamera.near=e.near??.1,this.debugCamera.far=e.far??1e3;const n=new v;this.debugCamera.getWorldDirection(n),this.controls.target.copy(this.debugCamera.position).add(n.multiplyScalar(5)),this.hasBeenPositioned=!0}this.debugCamera.aspect=this.engine.sizes.aspectRatio||1,this.debugCamera.updateProjectionMatrix();const t=this.engine.camera.controls;this.sceneCameraControlsWereEnabled=t?.enabled??!1,t&&(t.enabled=!1),this.controls.enabled=!0,this.controls.update(),this.engine.setRenderCamera(this.debugCamera),this.enabled=!0}disable(){if(!this.enabled)return;this.controls.enabled=!1;const e=this.engine.camera.controls;e&&(e.enabled=this.sceneCameraControlsWereEnabled),this.engine.setRenderCamera(null),this.enabled=!1}toggle(){this.enabled?this.disable():this.enable()}reset(){if(!this.enabled)return;const e=this.sceneCamera;this.debugCamera.position.copy(e.position),this.debugCamera.quaternion.copy(e.quaternion),this.debugCamera.fov=e.fov||60,this.debugCamera.updateProjectionMatrix();const t=new v;this.debugCamera.getWorldDirection(t),this.controls.target.copy(this.debugCamera.position).add(t.multiplyScalar(5)),this.controls.update()}lookAt(e,t=10){if(!this.enabled)return;const n=new v(1,.5,1).normalize().multiplyScalar(t);this.debugCamera.position.copy(e).add(n),this.controls.target.copy(e),this.controls.update()}focusOn(e,t=5){if(!this.enabled)return;const n=new v(1,.7,1).normalize().multiplyScalar(t);this.debugCamera.position.copy(e).add(n),this.controls.target.copy(e),this.controls.update()}getPositionArray(){const e=this.debugCamera.position;return[e.x,e.y,e.z]}getTargetArray(){const e=this.controls.target;return[e.x,e.y,e.z]}getSceneCameraPosition(){return this.sceneCamera.position.clone()}getSceneCameraQuaternion(){return this.sceneCamera.quaternion.clone()}getSceneCameraFov(){return this.sceneCamera.fov}setPosition(e){this.debugCamera.position.set(e[0],e[1],e[2]),this.enabled&&this.controls.update()}setTarget(e){this.controls.target.set(e[0],e[1],e[2]),this.enabled&&this.controls.update()}setFov(e){this.debugCamera.fov=e,this.debugCamera.updateProjectionMatrix()}getFov(){return this.debugCamera.fov}update(){if(this.enabled){this.controls.update();const e=this.engine.sizes.aspectRatio;e&&this.debugCamera.aspect!==e&&(this.debugCamera.aspect=e,this.debugCamera.updateProjectionMatrix())}}setControlsEnabled(e){this.enabled&&(this.controls.enabled=e)}dispose(){this.disable(),this.controls.removeEventListener("end",this.handleControlsEnd),this.controls.dispose(),this.onInteractionEnd=null}}const Oi=`<button class="expand-btn" title="Expand panel">&#9654;</button>
<div class="panel">
    <div class="header">
        <button class="collapse-btn" title="Collapse panel">&#9664;</button>
        <span class="title"><slot name="title">Tools</slot></span>
        <button class="compact-btn" title="Toggle compact mode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0-6h4v-4H4v4Zm6 0h4v-4h-4v4ZM16 4v4h4V4h-4Zm-6 4h4V4h-4v4Zm6 6h4v-4h-4v4Zm0 6h4v-4h-4v4Z"/>
            </svg>
        </button>
    </div>
    <div class="sections-container">
        <slot></slot>
    </div>
    <div class="resize-handle"></div>
</div>
<div class="flyout">
    <div class="flyout-header">
        <span class="flyout-title"></span>
        <span class="flyout-checkbox"></span>
        <button class="flyout-close" title="Close">×</button>
    </div>
    <div class="flyout-content"></div>
    <div class="flyout-resize-handle"></div>
</div>
`,Vi=`/**
 * DebugPanel component styles.
 * Left-side panel with collapsible sections and resize handle.
 */

:host {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 10000;
    display: flex;
    pointer-events: none;
    text-transform: none;
    letter-spacing: normal;
}

.panel {
    position: relative;
    width: var(--debug-panel-width, 280px);
    height: 100%;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border-right: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    transition: width 0.2s ease;
}

.header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--debug-bg-header, rgba(25, 25, 25, 0.98));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    user-select: none;
    flex-shrink: 0;
}

.collapse-btn {
    background: none;
    border: none;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    padding: 2px 6px;
    font-size: 10px;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.collapse-btn:hover {
    opacity: 1;
}

.title {
    flex: 1;
    font-weight: bold;
    font-size: 12px;
}

.compact-btn {
    background: none;
    border: 1px solid transparent;
    border-radius: 3px;
    color: var(--debug-text-muted, rgba(160, 160, 160, 1));
    cursor: pointer;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.compact-btn:hover {
    color: var(--debug-text, #e0e0e0);
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
    border-color: var(--debug-border, rgba(60, 60, 60, 1));
}

.compact-btn.active {
    color: var(--debug-accent, #4a90d9);
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.9));
    border-color: var(--debug-accent, #4a90d9);
}

.sections-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

.sections-container::-webkit-scrollbar {
    width: 6px;
}

.sections-container::-webkit-scrollbar-track {
    background: transparent;
}

.sections-container::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

.resize-handle {
    position: absolute;
    top: 0;
    right: -3px;
    width: 6px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    z-index: 1;
    transition: background 0.2s;
}

.resize-handle:hover {
    background: var(--debug-accent, #4a90d9);
}

/* Expand button - shown when collapsed */
.expand-btn {
    display: none;
    width: 28px;
    height: 28px;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    font-size: 10px;
    pointer-events: auto;
    opacity: 0.7;
    transition: opacity 0.2s, background 0.2s;
    margin: 8px;
}

.expand-btn:hover {
    opacity: 1;
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

/* Collapsed state */
:host([collapsed]) .panel {
    display: none;
}

:host([collapsed]) .expand-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hidden state */
:host([hidden]) {
    display: none;
}

/* ─── Compact mode ─── */
:host([compact]) .panel {
    width: 54px;
}

:host([compact]) .header {
    padding: 8px;
    justify-content: center;
}

:host([compact]) .title,
:host([compact]) .collapse-btn {
    display: none;
}

:host([compact]) .compact-btn {
    margin: 0;
}

:host([compact]) .resize-handle {
    display: none;
}

/* ─── Flyout panel (compact mode only) ─── */
.flyout {
    display: none;
    position: fixed;
    top: 0;
    left: 54px;
    width: 240px;
    height: 100%;
    /* position context for resize handle */
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border-right: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    flex-direction: column;
    pointer-events: auto;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    z-index: 9999;
    box-shadow: 4px 0 12px rgba(0, 0, 0, 0.3);
}

:host([compact][flyout-open]) .flyout {
    display: flex;
}

.flyout-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: var(--debug-bg-header, rgba(25, 25, 25, 0.98));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    flex-shrink: 0;
}

.flyout-title {
    flex: 1;
    font-weight: bold;
    font-size: 12px;
    color: var(--debug-text, #e0e0e0);
}

.flyout-checkbox {
    display: flex;
    align-items: center;
}

.flyout-checkbox input[type="checkbox"] {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.flyout-close {
    background: none;
    border: none;
    color: var(--debug-text-muted, rgba(160, 160, 160, 1));
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 3px;
    transition: all 0.15s;
}

.flyout-close:hover {
    color: var(--debug-text, #e0e0e0);
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.flyout-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--debug-spacing, 8px);
}

.flyout-content::-webkit-scrollbar {
    width: 6px;
}

.flyout-content::-webkit-scrollbar-track {
    background: transparent;
}

.flyout-content::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

/* Account for logs panel when expanded */
:host-context(body.logs-panel-expanded) .flyout-content {
    padding-bottom: 300px;
}

@media (max-width: 600px) {
    :host-context(body.logs-panel-expanded) .flyout-content {
        padding-bottom: 50dvh;
    }
}

.flyout-resize-handle {
    position: absolute;
    top: 0;
    right: -3px;
    width: 6px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    z-index: 1;
    transition: background 0.2s;
}

.flyout-resize-handle:hover {
    background: var(--debug-accent, #4a90d9);
}
`,K=`/**
 * Shared UI styles for debug components.
 * Astro Darkrise theme.
 */

/* Info Row - label/value pair */
.debug-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
}

.debug-info-label {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 11px;
}

.debug-info-value {
    font-family: var(--debug-font, monospace);
    color: var(--debug-text, #e8eaed);
    font-size: 11px;
    text-align: right;
    word-break: break-all;
}

/* Checkbox Row */
.debug-checkbox-row {
    display: flex;
    align-items: center;
    gap: 6px;
}

.debug-checkbox-row input[type="checkbox"] {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.debug-checkbox-row label {
    cursor: pointer;
    font-size: 11px;
}

/* Button */
.debug-button {
    margin: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    color: var(--debug-text, #e8eaed);
    padding: 6px 10px;
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    transition: all 0.2s;
}

.debug-button:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.debug-button:active {
    background: var(--debug-accent, #4a90d9);
}

/* Button Group */
.debug-button-group {
    display: flex;
    gap: 2px;
}

.debug-button-group-item {
    flex: 1;
    margin: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    color: var(--debug-text, #e8eaed);
    padding: 6px 8px;
    cursor: pointer;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    transition: all 0.2s;
}

.debug-button-group-item:first-child {
    border-radius: var(--debug-radius, 4px) 0 0 var(--debug-radius, 4px);
}

.debug-button-group-item:last-child {
    border-radius: 0 var(--debug-radius, 4px) var(--debug-radius, 4px) 0;
}

.debug-button-group-item:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.debug-button-group-item.active {
    background: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
}

/* Select */
.debug-select-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--debug-spacing, 8px);
}

.debug-select-row label {
    font-size: 11px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.debug-select {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    color: var(--debug-text, #e8eaed);
    padding: 4px 8px;
    border-radius: var(--debug-radius, 4px);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    cursor: pointer;
    min-width: 80px;
}

.debug-select:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.debug-select option {
    background: var(--debug-bg, #191c2d);
    color: var(--debug-text, #e8eaed);
}

.debug-select option:disabled {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
}

/* Input */
.debug-input {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    color: var(--debug-text, #e8eaed);
    padding: 4px 6px;
    border-radius: var(--debug-radius, 4px);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    width: 60px;
}

.debug-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

/* Remove spinner buttons from number inputs */
.debug-input[type="number"]::-webkit-inner-spin-button,
.debug-input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.debug-input[type="number"] {
    -moz-appearance: textfield;
}

/* Separator */
.debug-separator {
    height: 1px;
    background: var(--debug-border, rgba(255, 255, 255, 0.08));
    margin: 4px 0;
}

/* Utility classes */
.debug-text-muted {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.debug-text-accent {
    color: var(--debug-accent, #4a90d9);
}

.debug-text-success {
    color: var(--debug-success, #4caf50);
}

.debug-text-warning {
    color: var(--debug-warning, #ff9800);
}

.debug-text-error {
    color: var(--debug-error, #f44336);
}

/* Component List (for flyout content) */
.debug-component-list {
    max-height: 200px;
    overflow-y: auto;
}

.debug-component-list-info {
    font-size: 10px;
    margin-bottom: 8px;
}

.debug-component-list-empty {
    font-size: 10px;
}

.debug-category-header {
    font-size: 10px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 4px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.debug-component-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
    margin-bottom: 4px;
}

.debug-component-name {
    font-size: 11px;
}

.debug-component-name.active {
    color: var(--debug-accent, #4a90d9);
}

.debug-button-small {
    margin: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    color: var(--debug-text, #e8eaed);
    padding: 2px 8px;
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    transition: all 0.2s;
}

.debug-button-small:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.debug-button-small:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Lab Options */
.debug-lab-options {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.debug-lab-option-row {
    display: flex;
    align-items: center;
    gap: 6px;
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--debug-bg, #191c2d);
}

::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

/* Shortcuts Section */
.debug-shortcuts-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.debug-shortcut-group-header {
    font-size: 10px;
    font-weight: 600;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-top: 4px;
    padding-bottom: 2px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
}

.debug-shortcut-group-header:first-child {
    margin-top: 0;
}

.debug-shortcut-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 0;
}

.debug-shortcut-key {
    display: inline-block;
    min-width: 24px;
    padding: 2px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    text-align: center;
    color: var(--debug-text, #e8eaed);
}

.debug-shortcut-desc {
    font-size: 11px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}
`,Rs=`/* Resources Inspector Styles */

.resources-stats {
    padding: 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    margin-bottom: 8px;
}

.stats-row {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    padding: 2px 0;
}

.stats-label {
    color: var(--debug-text-muted, #888);
}

.stats-value {
    color: var(--debug-text, #e0e0e0);
}

.stats-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 6px;
}

.stats-badge {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 3px;
    background: var(--debug-bg, #1e1e1e);
}

.stats-badge.status-loaded { color: var(--debug-success, #4caf50); }
.stats-badge.status-loading { color: var(--debug-warning, #ff9800); }
.stats-badge.status-pending { color: var(--debug-text-muted, #888); }
.stats-badge.status-error { color: var(--debug-error, #f44336); }

.resources-search-row {
    display: flex;
    gap: 6px;
    margin-bottom: 8px;
}

.resources-search-input {
    flex: 1;
    padding: 6px 8px;
    font-size: 11px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    outline: none;
}

.resources-search-input:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.resources-sort-select {
    padding: 6px 8px;
    font-size: 11px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    outline: none;
    cursor: pointer;
}

.resources-sort-select:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.resources-list {
    max-height: 400px;
    overflow-y: auto;
}

/* In compact mode flyout, use viewport-relative height */
:host-context([flyout-open]) .resources-list {
    max-height: 60vh;
}

:host-context([flyout-open]):host-context(body.logs-panel-expanded) .resources-list {
    max-height: 40vh;
}

.resource-row {
    border-bottom: 1px solid var(--debug-border, #3c3c3c);
}

.resource-row:last-child {
    border-bottom: none;
}

.resource-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 4px;
    cursor: pointer;
    font-size: 11px;
}

.resource-header:hover {
    background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
}

.resource-expand-icon {
    font-size: 8px;
    width: 10px;
    color: var(--debug-text-muted, #888);
}

.resource-status-icon {
    font-size: 10px;
    width: 14px;
    text-align: center;
}

.resource-status-icon.status-pending { color: var(--debug-text-muted, #888); }
.resource-status-icon.status-loading { color: var(--debug-warning, #ff9800); }
.resource-status-icon.status-loaded { color: var(--debug-success, #4caf50); }
.resource-status-icon.status-error { color: var(--debug-error, #f44336); }

.resource-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: none;
}

.resource-name.status-pending { color: var(--debug-text-muted, #888); }
.resource-name.status-loading { color: var(--debug-warning, #ff9800); }
.resource-name.status-loaded { color: var(--debug-success, #4caf50); }
.resource-name.status-error { color: var(--debug-error, #f44336); }

.resource-meta {
    font-size: 10px;
    color: var(--debug-text-muted, #666);
    white-space: nowrap;
}

.resource-details {
    padding: 8px 8px 8px 30px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    font-size: 10px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
}

.detail-label {
    color: var(--debug-text-muted, #888);
}

.detail-value {
    color: var(--debug-text, #e0e0e0);
    word-break: break-all;
    text-align: right;
    max-width: 200px;
}

.resource-actions {
    display: flex;
    gap: 4px;
    margin-top: 8px;
}

.resource-action-btn {
    padding: 4px 8px;
    font-size: 10px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
}

.resource-action-btn:hover:not(:disabled) {
    border-color: var(--debug-accent, #4a90d9);
}

.resource-action-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Import section */
.import-section-header {
    font-size: 11px;
    font-weight: 500;
    color: var(--debug-text, #e0e0e0);
    padding: 12px 0 6px;
    border-top: 1px solid var(--debug-border, #3c3c3c);
    margin-top: 8px;
}

.import-drop-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 2px dashed var(--debug-border, #3c3c3c);
    border-radius: 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
}

.import-drop-zone:hover {
    border-color: var(--debug-accent, #4a90d9);
    background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
}

.import-drop-zone.drag-over {
    border-color: var(--debug-accent, #4a90d9);
    background: rgba(74, 144, 217, 0.1);
}

.drop-zone-icon {
    font-size: 20px;
    color: var(--debug-text-muted, #888);
    margin-bottom: 4px;
}

.drop-zone-text {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
}

.drop-zone-subtext {
    font-size: 10px;
    color: var(--debug-text-muted, #666);
}

/* Debug imports list */
.debug-imports-list {
    margin-top: 8px;
}

.imports-list-header {
    font-size: 10px;
    font-weight: 500;
    color: var(--debug-text-muted, #888);
    padding: 4px 0;
}

.import-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 4px;
    font-size: 11px;
    border-bottom: 1px solid var(--debug-border, #3c3c3c);
}

.import-row:last-child {
    border-bottom: none;
}

.import-row:hover {
    background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
}

.import-name {
    flex: 1;
    color: var(--debug-accent, #4a90d9);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: none;
}

.import-meta {
    font-size: 10px;
    color: var(--debug-text-muted, #666);
    white-space: nowrap;
}

.import-actions {
    display: flex;
    gap: 4px;
}

.import-action-btn {
    padding: 2px 6px;
    font-size: 10px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
}

.import-action-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.import-action-btn.destructive {
    color: var(--debug-error, #f44336);
}

.import-action-btn.destructive:hover {
    background: var(--debug-error, #f44336);
    border-color: var(--debug-error, #f44336);
    color: white;
}

/* GPU Compression Toggle */
.gpu-compression-toggle {
    margin-bottom: 8px;
    padding: 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
}

.gpu-compression-toggle .debug-checkbox-row {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
}

.gpu-compression-toggle input[type="checkbox"] {
    margin: 0;
    cursor: pointer;
}

.gpu-compression-toggle label {
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
}

.gpu-compression-reload-hint {
    color: var(--debug-warning, #ff9800);
    font-size: 10px;
}
`,On=200,Vn=500,qi=280,Ui=54,_i=180,ji=400,Gi=240,qn="panel-left:compact",Dt="panel-left:active-section";class je extends V{static tagName="debug-panel";static get observedAttributes(){return["collapsed","hidden","compact"]}panelEl;collapseBtn;expandBtn;compactBtn;resizeHandle;flyoutEl;flyoutTitleEl;flyoutCheckboxEl;flyoutContentEl;flyoutCloseBtn;flyoutResizeHandle;panelWidth=qi;flyoutWidth=Gi;isDragging=!1;activeSectionId=null;movedContent=[];originalCheckbox=null;boundResizeMove=null;boundResizeUp=null;render(){if(this.shadow.innerHTML=`<style>${Vi}${K}${Rs}</style>${Oi}`,this.panelEl=this.$required(".panel"),this.collapseBtn=this.$required(".collapse-btn"),this.expandBtn=this.$required(".expand-btn"),this.compactBtn=this.$required(".compact-btn"),this.resizeHandle=this.$required(".resize-handle"),this.flyoutEl=this.$required(".flyout"),this.flyoutTitleEl=this.$required(".flyout-title"),this.flyoutCheckboxEl=this.$required(".flyout-checkbox"),this.flyoutContentEl=this.$required(".flyout-content"),this.flyoutCloseBtn=this.$required(".flyout-close"),this.flyoutResizeHandle=this.$required(".flyout-resize-handle"),this.compact||(this.panelEl.style.width=`${this.panelWidth}px`),this.collapsed?(document.body.classList.add("debug-panel-collapsed"),document.documentElement.style.setProperty("--debug-panel-width","36px")):document.documentElement.style.setProperty("--debug-panel-width",`${this.panelWidth}px`),F.getGlobal(qn)===!0){this.compact=!0;const t=F.getProject(Dt);t&&requestAnimationFrame(()=>{this.querySelector(`[section-id="${t}"]`)&&this.openFlyout(t)})}}setupEventListeners(){this.collapseBtn.addEventListener("click",this.handleCollapse),this.expandBtn.addEventListener("click",this.handleExpand),this.compactBtn.addEventListener("click",this.handleCompactToggle),this.resizeHandle.addEventListener("mousedown",this.handleResizeStart),this.flyoutResizeHandle.addEventListener("mousedown",this.handleResizeStart),this.flyoutCloseBtn.addEventListener("click",this.handleFlyoutClose),this.addEventListener("activate",this.handleSectionActivate)}cleanupEventListeners(){this.collapseBtn.removeEventListener("click",this.handleCollapse),this.expandBtn.removeEventListener("click",this.handleExpand),this.compactBtn.removeEventListener("click",this.handleCompactToggle),this.resizeHandle.removeEventListener("mousedown",this.handleResizeStart),this.flyoutResizeHandle.removeEventListener("mousedown",this.handleResizeStart),this.flyoutCloseBtn.removeEventListener("click",this.handleFlyoutClose),this.removeEventListener("activate",this.handleSectionActivate),this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeUp&&document.removeEventListener("mouseup",this.boundResizeUp)}handleCollapse=()=>{this.collapsed=!0};handleExpand=()=>{this.collapsed=!1};handleCompactToggle=()=>{this.compact=!this.compact};handleFlyoutClose=()=>{this.closeFlyout()};handleSectionActivate=e=>{if(!this.compact)return;const t=e.detail.sectionId;this.activeSectionId===t?this.closeFlyout():this.openFlyout(t)};openFlyout(e){this.closeFlyout();const t=this.querySelector(`[section-id="${e}"]`);if(!t)return;this.activeSectionId=e,t.compactActive=!0;const s=t.querySelector('[slot="title"]')?.textContent||e;this.flyoutTitleEl.textContent=s,this.flyoutCheckboxEl.innerHTML="";const i=t.querySelector('[slot="header-checkbox"]');i&&(this.originalCheckbox=i,this.flyoutCheckboxEl.appendChild(i),i.removeAttribute("slot")),this.movedContent=[];const o=t.shadowRoot?.querySelector("slot:not([name])");o&&o.assignedNodes({flatten:!1}).forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(this.movedContent.push(r),this.flyoutContentEl.appendChild(r))}),this.setAttribute("flyout-open",""),F.setProject(Dt,e)}closeFlyout(e=!0){if(this.activeSectionId){const t=this.querySelector(`[section-id="${this.activeSectionId}"]`);t&&(this.movedContent.forEach(n=>{t.appendChild(n)}),this.originalCheckbox&&(this.originalCheckbox.slot="header-checkbox",t.appendChild(this.originalCheckbox)))}this.clearActiveSection(),this.activeSectionId=null,this.movedContent=[],this.originalCheckbox=null,this.removeAttribute("flyout-open"),e&&F.removeProject(Dt)}clearActiveSection(){this.querySelectorAll("[compact-active]").forEach(t=>{t.compactActive=!1})}resizeStartX=0;resizeStartWidth=0;handleResizeStart=e=>{this.isDragging=!0,this.resizeStartX=e.clientX,this.resizeStartWidth=this.compact?this.flyoutWidth:this.panelWidth,document.body.style.cursor="ew-resize",document.body.style.userSelect="none",this.boundResizeMove=this.handleResizeMove.bind(this),this.boundResizeUp=this.handleResizeUp.bind(this),document.addEventListener("mousemove",this.boundResizeMove),document.addEventListener("mouseup",this.boundResizeUp)};handleResizeMove(e){if(!this.isDragging)return;const t=e.clientX-this.resizeStartX;if(this.compact){const n=Math.min(ji,Math.max(_i,this.resizeStartWidth+t));this.flyoutWidth=n,this.flyoutEl&&(this.flyoutEl.style.width=`${n}px`),this.emit("resize",{width:n,target:"flyout"})}else{const n=Math.min(Vn,Math.max(On,this.resizeStartWidth+t));this.panelWidth=n,this.panelEl&&(this.panelEl.style.width=`${n}px`),document.documentElement.style.setProperty("--debug-panel-width",`${n}px`),this.emit("resize",{width:n,target:"panel"})}}handleResizeUp(){this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeUp&&document.removeEventListener("mouseup",this.boundResizeUp)}attributeChangedCallback(e,t,n){if(t!==n){if(e==="collapsed")this.updateCollapseButton(),this.emit("collapse",{collapsed:this.collapsed}),this.collapsed?(document.body.classList.add("debug-panel-collapsed"),document.documentElement.style.setProperty("--debug-panel-width","36px")):(document.body.classList.remove("debug-panel-collapsed"),document.documentElement.style.setProperty("--debug-panel-width",`${this.panelWidth}px`));else if(e==="compact"){if(this.updateCompactButton(),this.emit("compact",{compact:this.compact}),this.compact){this.panelEl.style.width="",document.documentElement.style.setProperty("--debug-panel-width",`${Ui}px`);const s=F.getProject(Dt);s&&this.querySelector(`[section-id="${s}"]`)&&requestAnimationFrame(()=>this.openFlyout(s))}else this.panelEl.style.width=`${this.panelWidth}px`,this.collapsed||document.documentElement.style.setProperty("--debug-panel-width",`${this.panelWidth}px`),this.closeFlyout(!1);F.setGlobal(qn,this.compact)}}}updateCollapseButton(){this.collapseBtn&&(this.collapseBtn.innerHTML=this.collapsed?"&#9654;":"&#9664;")}updateCompactButton(){this.compactBtn&&this.compactBtn.classList.toggle("active",this.compact)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed")}get compact(){return this.hasAttribute("compact")}set compact(e){e?this.setAttribute("compact",""):this.removeAttribute("compact")}toggleCollapse(){this.collapsed=!this.collapsed}toggleCompact(){this.compact=!this.compact}show(){this.removeAttribute("hidden")}hide(){this.setAttribute("hidden","")}toggle(){this.hasAttribute("hidden")?this.show():this.hide()}isVisible(){return!this.hasAttribute("hidden")}getSectionsSlot(){return this.shadow.querySelector("slot:not([name])")}getWidth(){return this.panelWidth}setWidth(e){this.panelWidth=Math.min(Vn,Math.max(On,e)),this.panelEl&&(this.panelEl.style.width=`${this.panelWidth}px`),document.documentElement.style.setProperty("--debug-panel-width",`${this.panelWidth}px`)}static register(){customElements.get(je.tagName)||customElements.define(je.tagName,je)}}je.register();const Wi=`<div class="section">
    <div class="header">
        <span class="fold-icon">▼</span>
        <span class="section-icon"></span>
        <span class="title"><slot name="title"></slot></span>
        <slot name="header-checkbox"></slot>
    </div>
    <div class="content">
        <slot></slot>
    </div>
</div>
`,Xi=`/**
 * Section component styles.
 * Collapsible section with header and content area.
 */

:host {
    display: block;
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.section {
    display: flex;
    flex-direction: column;
}

.header {
    display: flex;
    align-items: center;
    padding: var(--debug-spacing, 8px) calc(var(--debug-spacing, 8px) + 2px);
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.9));
    user-select: none;
    gap: 6px;
    transition: background 0.2s;
}

.header:hover {
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.fold-icon {
    font-size: 8px;
    opacity: 0.7;
    width: 10px;
    text-align: center;
    cursor: pointer;
    flex-shrink: 0;
}

.section-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--debug-accent, #4a90d9);
    opacity: 0.9;
    flex-shrink: 0;
}

.section-icon svg {
    display: block;
}

.title {
    flex: 1;
    font-weight: 600;
    font-size: 11px;
    cursor: pointer;
}

/* Compact mode - icon-only sidebar style */
:host-context([compact]) .title {
    display: none;
}

:host-context([compact]) .fold-icon {
    display: none;
}

:host-context([compact]) .header {
    padding: 10px 8px;
    justify-content: center;
    cursor: pointer;
    border-radius: 4px;
    margin: 2px 4px;
    transition: background 0.15s, box-shadow 0.15s;
}

:host-context([compact]) .section-icon {
    color: var(--debug-accent, #4a90d9);
}

/* Bigger icons in compact mode */
:host-context([compact]) .section-icon svg {
    width: 18px;
    height: 18px;
}

/* Hide content in compact mode - will be shown in flyout */
:host-context([compact]) .content {
    display: none;
}

/* Active section in compact mode - highlighted icon */
:host-context([compact]):host([compact-active]) .header {
    background: var(--debug-accent, #4a90d9);
    box-shadow: 0 0 8px rgba(74, 144, 217, 0.4);
}

:host-context([compact]):host([compact-active]) .section-icon {
    color: white;
}

/* Enabled tool indicator in compact mode - green dot */
:host-context([compact]):host([tool-enabled]) .header::after {
    content: '';
    position: absolute;
    top: 4px;
    right: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #4caf50;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.6);
}

:host-context([compact]) .header {
    position: relative;
}

/* Header checkbox slot styling */
::slotted(input[type="checkbox"]) {
    margin: 0 0 0 8px;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

/* Compact mode: hide checkbox - it moves to flyout header */
:host-context([compact]) ::slotted(input[type="checkbox"]) {
    display: none;
}

.content {
    padding: var(--debug-spacing, 8px);
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* Collapsed state */
:host([collapsed]) .content {
    display: none;
}

/* Non-foldable sections have no content to show */
:host([foldable="false"]) .content {
    display: none;
}

/* Slotted content styling */
::slotted(.debug-info-row) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
}

::slotted(.debug-checkbox-row) {
    display: flex;
    align-items: center;
    gap: 6px;
}

::slotted(.debug-button) {
    margin: 0;
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.9));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    color: var(--debug-text, #e0e0e0);
    padding: 6px 10px;
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    transition: all 0.2s;
}

::slotted(.debug-separator) {
    height: 1px;
    background: var(--debug-border, rgba(60, 60, 60, 1));
    margin: 4px 0;
}
`,Yi={cube:'<path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.36.2-.78.2-1.14 0l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.36-.2.78-.2 1.14 0l7.9 4.44c.32.17.53.5.53.88v9ZM12 4.15 5.04 8 12 11.85 18.96 8 12 4.15ZM5 15.91l6 3.38v-6.71L5 9.21v6.7Zm14 0v-6.7l-6 3.37v6.71l6-3.38Z"/>',camera:'<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12Z"/><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"/>',volume:'<path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02ZM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77Z"/>',lightbulb:'<path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1Z"/>',folder:'<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2Z"/>',eye:'<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5ZM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z"/>',grid:'<path d="M3 3v8h8V3H3Zm6 6H5V5h4v4Zm-6 4v8h8v-8H3Zm6 6H5v-4h4v4Zm4-16v8h8V3h-8Zm6 6h-4V5h4v4Zm-6 4v8h8v-8h-8Zm6 6h-4v-4h4v4Z"/>',wireframe:'<path d="M12 2L2 7v10l10 5 10-5V7L12 2Zm0 2.18L19.53 8 12 11.82 4.47 8 12 4.18ZM4 9.27l7 3.5v7.96l-7-3.5V9.27Zm9 11.46v-7.96l7-3.5v7.96l-7 3.5Z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="2" r="1.5" fill="currentColor"/><circle cx="2" cy="7" r="1.5" fill="currentColor"/><circle cx="22" cy="7" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="2" cy="17" r="1.5" fill="currentColor"/><circle cx="22" cy="17" r="1.5" fill="currentColor"/><circle cx="12" cy="22" r="1.5" fill="currentColor"/>',flask:'<path d="M10 2h4v6l5 8.5c.5.85-.15 2-.85 2.5H5.85c-.7-.5-1.35-1.65-.85-2.5L10 8V2Zm1 2v5l-4.5 7.5h11L13 9V4h-2Z"/>',transform:'<path d="M10 9h4V6h3l-5-5-5 5h3v3Zm-1 1H6V7l-5 5 5 5v-3h3v-4Zm14 2-5-5v3h-3v4h3v3l5-5Zm-9 3h-4v3H7l5 5 5-5h-3v-3Z"/>',axes:'<path d="M4 21V4M4 21h17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M4 4l-2 4M4 4l2 4M21 21l-4-2M21 21l-4 2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',raycaster:'<circle cx="4" cy="4" r="2" fill="currentColor"/><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-dasharray="3,2"/><circle cx="19" cy="19" r="3" fill="currentColor"/><circle cx="19" cy="19" r="5" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>',cursor:'<path d="M4 2l12 9.5-5.5 1.5 3.5 7-2.5 1-3.5-7L4 18V2Z" fill="currentColor"/>',keyboard:'<rect x="2" y="6" width="20" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><line x1="6" y1="10" x2="8" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="11" y1="10" x2="13" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="16" y1="10" x2="18" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="7" y1="14" x2="17" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',sitemap:'<path d="M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3h7ZM7 9H4V5h3v4Zm10 6h3v4h-3v-4Zm0-10h3v4h-3V5Z"/>',gauge:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"/><path d="m14.59 8.59-3.17 3.17c-.39.39-.39 1.02 0 1.41l.71.71c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41l-.71-.71a.996.996 0 0 0-1.41 0Z"/><circle cx="7.5" cy="14.5" r="1.5"/><circle cx="10.5" cy="9.5" r="1.5"/>',chart:'<path d="M4 9h4v11H4V9Zm6-5h4v16h-4V4Zm6 8h4v8h-4v-8Z"/>',sliders:'<path d="M3 17v2h6v-2H3ZM3 5v2h10V5H3Zm10 16v-2h8v-2h-8v-2h-2v6h2ZM7 9v2H3v2h4v2h2V9H7Zm14 4v-2H11v2h10Zm-6-4h2V7h4V5h-4V3h-2v6Z"/>',image:'<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2ZM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5Z"/>',code:'<path d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z"/>',bug:'<path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8Zm-6 8h-4v-2h4v2Zm0-4h-4v-2h4v2Z"/>',cog:'<path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z"/>',info:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z"/>',layers:'<path d="m11.99 18.54-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74ZM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16Z"/>',palette:'<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8Zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12Zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8Zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8Zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z"/>',compass:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5Zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1Z"/>',bookmark:'<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2Z"/>',scene:'<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4Z"/>',mesh:'<path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.36.2-.78.2-1.14 0l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.36-.2.78-.2 1.14 0l7.9 4.44c.32.17.53.5.53.88v9Z"/>',group:'<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm-6 10H6v-2h8v2Zm4-4H6v-2h12v2Z"/>',bone:'<path d="M8.5 8.64L6.43 6.56c.15-.4.24-.83.24-1.28C6.67 3.47 5.2 2 3.38 2 2.38 2 1.5 2.47.97 3.2l.02.02C.39 4.03 0 5.09 0 6.26c0 .52.06 1.02.17 1.5l-.13.13c-.65.65-.65 1.7 0 2.35l.71.71c.65.65 1.7.65 2.35 0l.13-.13c.48.11.98.17 1.5.17 1.17 0 2.23-.39 3.05-1.03l2.08 2.08-2.08 2.08c-.82-.64-1.88-1.03-3.05-1.03-.52 0-1.02.06-1.5.17l-.13-.13c-.65-.65-1.7-.65-2.35 0l-.71.71c-.65.65-.65 1.7 0 2.35l.13.13c-.11.48-.17.98-.17 1.5 0 1.17.39 2.23 1.03 3.05l-.02.02C.5 21.53 1.38 22 2.38 22c1.82 0 3.29-1.47 3.29-3.28 0-.45-.09-.88-.24-1.28l2.07-2.08 2.07 2.07c-.15.4-.24.83-.24 1.28 0 1.81 1.47 3.28 3.29 3.28 1 0 1.88-.47 2.41-1.2l-.02-.02c.64-.82 1.03-1.88 1.03-3.05 0-.52-.06-1.02-.17-1.5l.13-.13c.65-.65.65-1.7 0-2.35l-.71-.71c-.65-.65-1.7-.65-2.35 0l-.13.13c-.48-.11-.98-.17-1.5-.17-1.17 0-2.23.39-3.05 1.03L8.5 12l5.16-5.16c.82.64 1.88 1.03 3.05 1.03.52 0 1.02-.06 1.5-.17l.13.13c.65.65 1.7.65 2.35 0l.71-.71c.65-.65.65-1.7 0-2.35l-.13-.13c.11-.48.17-.98.17-1.5 0-1.17-.39-2.23-1.03-3.05l.02-.02C19.5 2.47 18.62 2 17.62 2c-1.82 0-3.29 1.47-3.29 3.28 0 .45.09.88.24 1.28L8.5 12.64Z"/>',dots:'<circle cx="4" cy="12" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="20" cy="12" r="2.5"/><circle cx="8" cy="6" r="2"/><circle cx="16" cy="6" r="2"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',line:'<path d="M3.5 18.5l14-14" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>',diamond:'<path d="M12 2L2 12l10 10 10-10L12 2Zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83Z"/>',circle:'<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>',sun:'<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5ZM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1Zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1ZM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1Zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1ZM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58Zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 0 0 0-1.41l-1.06-1.06Zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06ZM7.05 18.36a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06Z"/>',spotlight:'<path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Zm2 14h-4v-1h4v1Zm0-2h-4v-1h4v1Zm-2-3c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"/><path d="M12 20h-2v2h4v-2h-2Z"/>',hemisphere:'<path d="M12 2C6.48 2 2 6.48 2 12h20c0-5.52-4.48-10-10-10Z"/><path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10H2Z" opacity="0.3"/>',cloud:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Z"/>'};function En(c,e=16){const t=Yi[c];return t?`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${e}" height="${e}" fill="currentColor">${t}</svg>`:(console.warn(`[DebugIcons] Unknown icon: ${c}`),"")}class Ge extends V{static tagName="debug-section";static get observedAttributes(){return["collapsed","section-id","foldable","icon","compact-active"]}foldIconEl;sectionIconEl;titleEl;render(){this.shadow.innerHTML=`<style>${Xi}</style>${Wi}`,this.foldIconEl=this.$required(".fold-icon"),this.sectionIconEl=this.$required(".section-icon"),this.titleEl=this.$required(".title"),this.foldable||(this.foldIconEl.style.visibility="hidden",this.foldIconEl.style.cursor="default",this.titleEl.style.cursor="default"),this.foldIconEl.textContent=this.collapsed?"▶":"▼",this.updateSectionIcon()}setupEventListeners(){this.foldable&&(this.foldIconEl.addEventListener("click",this.handleToggle),this.titleEl.addEventListener("click",this.handleToggle)),this.$required(".header").addEventListener("click",this.handleHeaderClick);const t=this.titleEl.querySelector('slot[name="title"]');t&&t.addEventListener("slotchange",this.handleTitleSlotChange),this.updateHeaderTitle()}handleTitleSlotChange=()=>{this.updateHeaderTitle()};updateHeaderTitle(){const e=this.shadow.querySelector(".header"),t=this.titleEl.querySelector('slot[name="title"]');if(t){const s=t.assignedNodes({flatten:!0}).map(i=>i.textContent).join("").trim();s&&(e.title=s)}}cleanupEventListeners(){this.foldIconEl.removeEventListener("click",this.handleToggle),this.titleEl.removeEventListener("click",this.handleToggle),this.shadow.querySelector(".header")?.removeEventListener("click",this.handleHeaderClick),this.titleEl.querySelector('slot[name="title"]')?.removeEventListener("slotchange",this.handleTitleSlotChange)}handleToggle=e=>{this.foldable&&(e.stopPropagation(),this.toggle())};handleHeaderClick=e=>{this.closest("[compact]")&&(e.stopPropagation(),this.emit("activate",{sectionId:this.sectionId}))};attributeChangedCallback(e,t,n){t!==n&&this.initialized&&(e==="collapsed"?this.updateFoldIcon():e==="foldable"?this.updateFoldableState():e==="icon"?this.updateSectionIcon():e==="compact-active"&&this.emit("compact-active-change",{active:this.compactActive}))}updateFoldIcon(){if(this.initialized){if(!this.foldable){this.foldIconEl.style.visibility="hidden";return}this.foldIconEl.style.visibility="",this.foldIconEl.textContent=this.collapsed?"▶":"▼"}}updateSectionIcon(){if(!this.sectionIconEl)return;const e=this.icon;e?(this.sectionIconEl.innerHTML=En(e,14),this.sectionIconEl.style.display=""):(this.sectionIconEl.innerHTML="",this.sectionIconEl.style.display="none")}updateFoldableState(){this.initialized&&(this.updateFoldIcon(),this.foldable?(this.foldIconEl.style.cursor="pointer",this.titleEl.style.cursor="pointer"):(this.foldIconEl.style.cursor="default",this.titleEl.style.cursor="default"))}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed")}get foldable(){return this.getAttribute("foldable")!=="false"}set foldable(e){this.setAttribute("foldable",e?"true":"false"),this.updateFoldableState()}get icon(){return this.getAttribute("icon")}set icon(e){e?this.setAttribute("icon",e):this.removeAttribute("icon")}get sectionId(){return this.getAttribute("section-id")??""}set sectionId(e){this.setAttribute("section-id",e)}get compactActive(){return this.hasAttribute("compact-active")}set compactActive(e){e?this.setAttribute("compact-active",""):this.removeAttribute("compact-active")}get toolEnabled(){return this.hasAttribute("tool-enabled")}set toolEnabled(e){e?this.setAttribute("tool-enabled",""):this.removeAttribute("tool-enabled")}toggle(){this.collapsed=!this.collapsed,this.emit("toggle",{collapsed:this.collapsed})}expand(){this.collapsed&&this.toggle()}collapse(){this.collapsed||this.toggle()}isCollapsed(){return this.collapsed}getContentSlot(){return this.shadow.querySelector("slot:not([name])")}static register(){customElements.get(Ge.tagName)||customElements.define(Ge.tagName,Ge)}}Ge.register();const Fs="section-fold-state";let yt=null;function Ns(){return yt||(yt=F.getProject(Fs,{})??{}),yt}function Zi(){yt&&F.setProject(Fs,yt)}function Wt(c,e){const t=Ns();t[c]=e,Zi()}function Xt(c){const t=Ns()[c];return t===void 0?null:t}Ge.register();class qe{id;element;contentContainer;headerCheckbox=null;constructor(e){this.id=e.id,this.element=document.createElement("debug-section"),this.element.sectionId=e.id,e.order!==void 0&&(this.element.style.order=String(e.order)),e.foldable===!1&&(this.element.foldable=!1),e.icon&&(this.element.icon=e.icon);const t=Xt(e.id);(t!==null?t:e.collapsed)&&(this.element.collapsed=!0),this.element.addEventListener("toggle",i=>{const o=i.detail;Wt(e.id,o.collapsed)});const s=document.createElement("span");s.slot="title",s.textContent=e.title,this.element.appendChild(s),e.headerCheckbox&&(this.headerCheckbox=document.createElement("input"),this.headerCheckbox.type="checkbox",this.headerCheckbox.slot="header-checkbox",this.headerCheckbox.checked=e.headerCheckbox.checked,this.headerCheckbox.addEventListener("change",()=>{e.headerCheckbox.onChange(this.headerCheckbox.checked)}),this.headerCheckbox.addEventListener("click",i=>i.stopPropagation()),this.element.appendChild(this.headerCheckbox)),this.contentContainer=document.createElement("div"),this.contentContainer.className="section-content-wrapper",this.element.appendChild(this.contentContainer)}getContent(){return this.contentContainer}toggle(){this.element.toggle()}expand(){this.element.expand()}collapse(){this.element.collapse()}isCollapsed(){return this.element.isCollapsed()}getHeaderCheckbox(){return this.headerCheckbox}setHeaderCheckboxState(e){this.headerCheckbox&&(this.headerCheckbox.checked=e)}setToolEnabled(e){this.element.toolEnabled=e}addInfoRow(e,t=""){const n=document.createElement("div");n.className="debug-info-row";const s=document.createElement("span");s.className="debug-info-label",s.textContent=e;const i=document.createElement("span");return i.className="debug-info-value",i.textContent=t,n.appendChild(s),n.appendChild(i),this.contentContainer.appendChild(n),i}addCheckbox(e,t,n){const s=document.createElement("div");s.className="debug-checkbox-row";const i=document.createElement("input");i.type="checkbox",i.checked=t,i.id=`debug-cb-${this.id}-${e.toLowerCase().replace(/\s+/g,"-")}`;const o=document.createElement("label");return o.htmlFor=i.id,o.textContent=e,i.addEventListener("change",()=>n(i.checked)),s.appendChild(i),s.appendChild(o),this.contentContainer.appendChild(s),s}addButton(e,t){const n=document.createElement("button");return n.className="debug-button",n.textContent=e,n.addEventListener("click",t),this.contentContainer.appendChild(n),n}addButtonGroup(e){const t=document.createElement("div");t.className="debug-button-group";for(const n of e){const s=document.createElement("button");s.className="debug-button-group-item",n.active&&s.classList.add("active"),s.textContent=n.label,s.addEventListener("click",()=>{t.querySelectorAll(".debug-button-group-item").forEach(i=>i.classList.remove("active")),s.classList.add("active"),n.onClick()}),t.appendChild(s)}return this.contentContainer.appendChild(t),t}addSelect(e,t,n,s){const i=document.createElement("div");i.className="debug-select-row";const o=document.createElement("label");o.textContent=e;const a=document.createElement("select");a.className="debug-select";for(const r of t){const l=document.createElement("option");l.value=r,l.textContent=r,r===n&&(l.selected=!0),a.appendChild(l)}return a.addEventListener("change",()=>s(a.value)),i.appendChild(o),i.appendChild(a),this.contentContainer.appendChild(i),a}addNumberInput(e,t,n,s){const i=document.createElement("div");i.className="debug-info-row";const o=document.createElement("span");o.className="debug-info-label",o.textContent=e;const a=document.createElement("input");return a.type="number",a.className="debug-input",a.value=String(t),n.min!==void 0&&(a.min=String(n.min)),n.max!==void 0&&(a.max=String(n.max)),n.step!==void 0&&(a.step=String(n.step)),a.addEventListener("change",()=>{const r=parseFloat(a.value);isNaN(r)||s(r)}),i.appendChild(o),i.appendChild(a),this.contentContainer.appendChild(i),a}addSlider(e,t,n,s){const i=document.createElement("div");i.className="debug-slider-row";const o=document.createElement("span");o.className="debug-info-label",o.textContent=e;const a=document.createElement("div");a.className="debug-slider-container";const r=document.createElement("input");r.type="range",r.className="debug-slider",r.value=String(t),r.min=String(n.min??0),r.max=String(n.max??1),r.step=String(n.step??.01);const l=document.createElement("span");return l.className="debug-slider-value",l.textContent=t.toFixed(2),r.addEventListener("input",()=>{const d=parseFloat(r.value);l.textContent=d.toFixed(2),s(d)}),a.appendChild(r),a.appendChild(l),i.appendChild(o),i.appendChild(a),this.contentContainer.appendChild(i),{slider:r,valueEl:l}}addSeparator(){const e=document.createElement("div");return e.className="debug-separator",this.contentContainer.appendChild(e),e}clearContent(){this.contentContainer.innerHTML=""}dispose(){this.element.remove()}}je.register();class Ki{manager;element;sectionsContainer;sections=new Map;toolSections=new Map;constructor(e){this.manager=e,this.element=document.createElement("debug-panel"),this.element.id="debug-panel-container";const t=document.createElement("span");t.slot="title",t.textContent="Tools",this.element.appendChild(t),this.sectionsContainer=document.createElement("div"),this.sectionsContainer.className="debug-sections-container",this.element.appendChild(this.sectionsContainer),this.injectStyles(),this.manager.camera.enable(),document.body.classList.add("debug-mode-active")}getElement(){return this.element}injectStyles(){if(document.getElementById("debug-panel-styles"))return;const e=document.createElement("link");e.id="debug-panel-styles",e.rel="stylesheet",e.href=new URL("/assets/styles-BN1vICfe.css",import.meta.url).href,document.head.appendChild(e)}addSection(e){this.sections.set(e.id,e),this.sectionsContainer.appendChild(e.element)}removeSection(e){const t=this.sections.get(e);t&&(t.dispose(),this.sections.delete(e))}getSection(e){return this.sections.get(e)}addToolSection(e){const t=!!e.createUI,n=new qe({id:`tool-${e.id}`,title:e.name,icon:e.icon,collapsed:t?!e.enabled:!1,foldable:t,order:10+this.toolSections.size,headerCheckbox:{checked:e.enabled,onChange:s=>{s?(this.manager.enableTool(e.id),t&&n.expand()):(this.manager.disableTool(e.id),t&&n.collapse())}}});e.createUI&&e.createUI(n.getContent()),n.setToolEnabled(e.enabled),this.toolSections.set(e.id,n),this.addSection(n)}updateToolState(e,t){const n=this.toolSections.get(e);n&&(n.setHeaderCheckboxState(t),n.setToolEnabled(t))}onModeChange(e,t){}update(){}onComponentLoaded(e){}onComponentUnloaded(e){}toggleCollapse(){this.element.toggleCollapse()}show(){this.element.show()}hide(){this.element.hide()}toggle(){this.element.toggle()}isVisible(){return this.element.isVisible()}dispose(){for(const t of this.sections.values())t.dispose();this.sections.clear(),this.toolSections.clear(),this.element.remove(),document.body.classList.remove("debug-mode-active"),document.body.classList.remove("debug-panel-collapsed");const e=document.getElementById("debug-panel-styles");e&&e.remove()}}const Qi=`<button class="expand-btn" title="Expand panel">&#9664;</button>
<div class="flyout">
    <div class="flyout-resize-handle"></div>
    <div class="flyout-header">
        <button class="flyout-close" title="Close">×</button>
        <span class="flyout-title"></span>
        <span class="flyout-checkbox"></span>
    </div>
    <div class="flyout-content"></div>
</div>
<div class="panel">
    <div class="resize-handle"></div>
    <div class="header">
        <span class="title"><slot name="title">Info</slot></span>
        <button class="compact-btn" title="Toggle compact mode">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0-6h4v-4H4v4Zm6 0h4v-4h-4v4ZM16 4v4h4V4h-4Zm-6 4h4V4h-4v4Zm6 6h4v-4h-4v4Zm0 6h4v-4h-4v4Z"/>
            </svg>
        </button>
        <button class="collapse-btn" title="Collapse panel">&#9654;</button>
    </div>
    <div class="sections-container">
        <slot></slot>
    </div>
</div>
`,Ji=`/**
 * InfoPanel component styles.
 * Right-side panel with resize handle on left edge.
 */

:host {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 10000;
    display: flex;
    pointer-events: none;
    text-transform: none;
    letter-spacing: normal;
}

.panel {
    position: relative;
    width: var(--debug-info-panel-width, 260px);
    height: 100%;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border-left: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    transition: width 0.2s ease;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 10px 12px;
    background: var(--debug-bg-header, rgba(25, 25, 25, 0.98));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    user-select: none;
    flex-shrink: 0;
}

.collapse-btn {
    background: none;
    border: none;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    padding: 2px 6px;
    font-size: 10px;
    opacity: 0.6;
    transition: opacity 0.2s;
}

.collapse-btn:hover {
    opacity: 1;
}

.title {
    flex: 1;
    font-weight: bold;
    font-size: 12px;
}

.compact-btn {
    background: none;
    border: 1px solid transparent;
    border-radius: 3px;
    color: var(--debug-text-muted, rgba(160, 160, 160, 1));
    cursor: pointer;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.compact-btn:hover {
    color: var(--debug-text, #e0e0e0);
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
    border-color: var(--debug-border, rgba(60, 60, 60, 1));
}

.compact-btn.active {
    color: var(--debug-accent, #4a90d9);
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.9));
    border-color: var(--debug-accent, #4a90d9);
}

.sections-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

.sections-container::-webkit-scrollbar {
    width: 6px;
}

.sections-container::-webkit-scrollbar-track {
    background: transparent;
}

.sections-container::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

.resize-handle {
    position: absolute;
    top: 0;
    left: -3px;
    width: 6px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    z-index: 1;
    transition: background 0.2s;
}

.resize-handle:hover {
    background: var(--debug-accent, #4a90d9);
}

/* Expand button - shown when collapsed */
.expand-btn {
    display: none;
    width: 28px;
    height: 28px;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    font-size: 10px;
    pointer-events: auto;
    opacity: 0.7;
    transition: opacity 0.2s, background 0.2s;
    margin: 8px;
    margin-left: auto;
}

.expand-btn:hover {
    opacity: 1;
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

/* Collapsed state */
:host([collapsed]) .panel {
    display: none;
}

:host([collapsed]) .expand-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Hidden state */
:host([hidden]) {
    display: none;
}

/* ─── Compact mode ─── */
:host([compact]) .panel {
    width: 54px;
}

:host([compact]) .header {
    padding: 8px;
    justify-content: center;
}

:host([compact]) .title,
:host([compact]) .collapse-btn {
    display: none;
}

:host([compact]) .compact-btn {
    margin: 0;
}

:host([compact]) .resize-handle {
    display: none;
}

/* ─── Flyout panel (compact mode only) - appears on LEFT of info panel ─── */
.flyout {
    display: none;
    position: fixed;
    top: 0;
    right: 54px;
    width: 240px;
    height: 100%;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border-left: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    flex-direction: column;
    pointer-events: auto;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    z-index: 9999;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.3);
}

:host([compact][flyout-open]) .flyout {
    display: flex;
}

.flyout-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: var(--debug-bg-header, rgba(25, 25, 25, 0.98));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    flex-shrink: 0;
}

.flyout-title {
    flex: 1;
    font-weight: bold;
    font-size: 12px;
    color: var(--debug-text, #e0e0e0);
}

.flyout-checkbox {
    display: flex;
    align-items: center;
}

.flyout-checkbox input[type="checkbox"] {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.flyout-close {
    background: none;
    border: none;
    color: var(--debug-text-muted, rgba(160, 160, 160, 1));
    cursor: pointer;
    font-size: 18px;
    line-height: 1;
    padding: 2px 6px;
    border-radius: 3px;
    transition: all 0.15s;
}

.flyout-close:hover {
    color: var(--debug-text, #e0e0e0);
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.flyout-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--debug-spacing, 8px);
}

.flyout-content::-webkit-scrollbar {
    width: 6px;
}

.flyout-content::-webkit-scrollbar-track {
    background: transparent;
}

.flyout-content::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

/* Account for logs panel when expanded */
:host-context(body.logs-panel-expanded) .flyout-content {
    padding-bottom: 300px;
}

@media (max-width: 600px) {
    :host-context(body.logs-panel-expanded) .flyout-content {
        padding-bottom: 50dvh;
    }
}

.flyout-resize-handle {
    position: absolute;
    top: 0;
    left: -3px;
    width: 6px;
    height: 100%;
    cursor: ew-resize;
    background: transparent;
    z-index: 1;
    transition: background 0.2s;
}

.flyout-resize-handle:hover {
    background: var(--debug-accent, #4a90d9);
}
`,Un=180,_n=400,eo=260,to=54,no=180,so=400,io=240,jn="panel-right:compact",Qt="panel-right:active-section";class We extends V{static tagName="debug-info-panel";static get observedAttributes(){return["collapsed","hidden","compact"]}panelEl;collapseBtn;expandBtn;compactBtn;resizeHandle;flyoutEl;flyoutTitleEl;flyoutCheckboxEl;flyoutContentEl;flyoutCloseBtn;flyoutResizeHandle;panelWidth=eo;flyoutWidth=io;isDragging=!1;activeSectionId=null;movedContent=[];originalCheckbox=null;boundResizeMove=null;boundResizeUp=null;render(){if(this.shadow.innerHTML=`<style>${Ji}${K}${Rs}</style>${Qi}`,this.panelEl=this.$required(".panel"),this.collapseBtn=this.$required(".collapse-btn"),this.expandBtn=this.$required(".expand-btn"),this.compactBtn=this.$required(".compact-btn"),this.resizeHandle=this.$required(".resize-handle"),this.flyoutEl=this.$required(".flyout"),this.flyoutTitleEl=this.$required(".flyout-title"),this.flyoutCheckboxEl=this.$required(".flyout-checkbox"),this.flyoutContentEl=this.$required(".flyout-content"),this.flyoutCloseBtn=this.$required(".flyout-close"),this.flyoutResizeHandle=this.$required(".flyout-resize-handle"),this.compact||(this.panelEl.style.width=`${this.panelWidth}px`),this.collapsed?(document.body.classList.add("debug-info-panel-collapsed"),document.documentElement.style.setProperty("--debug-info-panel-width","36px")):document.documentElement.style.setProperty("--debug-info-panel-width",`${this.panelWidth}px`),F.getGlobal(jn)===!0){this.compact=!0;const t=F.getProject(Qt);t&&requestAnimationFrame(()=>{this.querySelector(`[section-id="${t}"]`)&&this.openFlyout(t)})}}setupEventListeners(){this.collapseBtn.addEventListener("click",this.handleCollapse),this.expandBtn.addEventListener("click",this.handleExpand),this.compactBtn.addEventListener("click",this.handleCompactToggle),this.resizeHandle.addEventListener("mousedown",this.handleResizeStart),this.flyoutResizeHandle.addEventListener("mousedown",this.handleResizeStart),this.flyoutCloseBtn.addEventListener("click",this.handleFlyoutClose),this.addEventListener("activate",this.handleSectionActivate)}cleanupEventListeners(){this.collapseBtn.removeEventListener("click",this.handleCollapse),this.expandBtn.removeEventListener("click",this.handleExpand),this.compactBtn.removeEventListener("click",this.handleCompactToggle),this.resizeHandle.removeEventListener("mousedown",this.handleResizeStart),this.flyoutResizeHandle.removeEventListener("mousedown",this.handleResizeStart),this.flyoutCloseBtn.removeEventListener("click",this.handleFlyoutClose),this.removeEventListener("activate",this.handleSectionActivate),this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeUp&&document.removeEventListener("mouseup",this.boundResizeUp)}handleCollapse=()=>{this.collapsed=!0};handleExpand=()=>{this.collapsed=!1};handleCompactToggle=()=>{this.compact=!this.compact};handleFlyoutClose=()=>{this.closeFlyout()};handleSectionActivate=e=>{if(!this.compact)return;const t=e.detail.sectionId;this.activeSectionId===t?this.closeFlyout():this.openFlyout(t)};openFlyout(e){this.closeFlyout();const t=this.querySelector(`[section-id="${e}"]`);if(!t)return;this.activeSectionId=e,t.compactActive=!0;const s=t.querySelector('[slot="title"]')?.textContent||e;this.flyoutTitleEl.textContent=s,this.flyoutCheckboxEl.innerHTML="";const i=t.querySelector('[slot="header-checkbox"]');i&&(this.originalCheckbox=i,this.flyoutCheckboxEl.appendChild(i),i.removeAttribute("slot")),this.movedContent=[];const o=t.shadowRoot?.querySelector("slot:not([name])");o&&o.assignedNodes({flatten:!1}).forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&(this.movedContent.push(r),this.flyoutContentEl.appendChild(r))}),this.setAttribute("flyout-open",""),document.body.classList.add("debug-info-flyout-open"),this.updateFlyoutWidthVar(),F.setProject(Qt,e)}updateFlyoutWidthVar(){document.documentElement.style.setProperty("--debug-info-flyout-width",`${this.flyoutWidth}px`)}closeFlyout(){if(this.activeSectionId){const e=this.querySelector(`[section-id="${this.activeSectionId}"]`);e&&(this.movedContent.forEach(t=>{e.appendChild(t)}),this.originalCheckbox&&(this.originalCheckbox.slot="header-checkbox",e.appendChild(this.originalCheckbox)))}this.clearActiveSection(),this.activeSectionId=null,this.movedContent=[],this.originalCheckbox=null,this.removeAttribute("flyout-open"),document.body.classList.remove("debug-info-flyout-open"),document.documentElement.style.removeProperty("--debug-info-flyout-width"),F.removeProject(Qt)}clearActiveSection(){this.querySelectorAll("[compact-active]").forEach(t=>{t.compactActive=!1})}resizeStartX=0;resizeStartWidth=0;handleResizeStart=e=>{this.isDragging=!0,this.resizeStartX=e.clientX,this.resizeStartWidth=this.compact?this.flyoutWidth:this.panelWidth,document.body.style.cursor="ew-resize",document.body.style.userSelect="none",this.boundResizeMove=this.handleResizeMove.bind(this),this.boundResizeUp=this.handleResizeUp.bind(this),document.addEventListener("mousemove",this.boundResizeMove),document.addEventListener("mouseup",this.boundResizeUp)};handleResizeMove(e){if(!this.isDragging)return;const t=this.resizeStartX-e.clientX;if(this.compact){const n=Math.min(so,Math.max(no,this.resizeStartWidth+t));this.flyoutWidth=n,this.flyoutEl&&(this.flyoutEl.style.width=`${n}px`),this.updateFlyoutWidthVar(),this.emit("resize",{width:n,target:"flyout"})}else{const n=Math.min(_n,Math.max(Un,this.resizeStartWidth+t));this.panelWidth=n,this.panelEl&&(this.panelEl.style.width=`${n}px`),document.documentElement.style.setProperty("--debug-info-panel-width",`${n}px`),this.emit("resize",{width:n,target:"panel"})}}handleResizeUp(){this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",this.boundResizeMove&&document.removeEventListener("mousemove",this.boundResizeMove),this.boundResizeUp&&document.removeEventListener("mouseup",this.boundResizeUp)}attributeChangedCallback(e,t,n){t!==n&&(e==="collapsed"?(this.updateCollapseButton(),this.emit("collapse",{collapsed:this.collapsed}),this.collapsed?(document.body.classList.add("debug-info-panel-collapsed"),document.documentElement.style.setProperty("--debug-info-panel-width","36px")):(document.body.classList.remove("debug-info-panel-collapsed"),document.documentElement.style.setProperty("--debug-info-panel-width",`${this.panelWidth}px`))):e==="compact"&&(this.updateCompactButton(),this.emit("compact",{compact:this.compact}),this.compact?(this.panelEl.style.width="",document.documentElement.style.setProperty("--debug-info-panel-width",`${to}px`)):(this.panelEl.style.width=`${this.panelWidth}px`,this.collapsed||document.documentElement.style.setProperty("--debug-info-panel-width",`${this.panelWidth}px`),this.closeFlyout()),F.setGlobal(jn,this.compact)))}updateCollapseButton(){this.collapseBtn&&(this.collapseBtn.innerHTML=this.collapsed?"&#9664;":"&#9654;")}updateCompactButton(){this.compactBtn&&this.compactBtn.classList.toggle("active",this.compact)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed")}get compact(){return this.hasAttribute("compact")}set compact(e){e?this.setAttribute("compact",""):this.removeAttribute("compact")}toggleCollapse(){this.collapsed=!this.collapsed}toggleCompact(){this.compact=!this.compact}show(){this.removeAttribute("hidden"),document.body.classList.add("debug-info-panel-active")}hide(){this.setAttribute("hidden",""),document.body.classList.remove("debug-info-panel-active")}toggle(){this.hasAttribute("hidden")?this.show():this.hide()}isVisible(){return!this.hasAttribute("hidden")}getSectionsSlot(){return this.shadow.querySelector("slot:not([name])")}getWidth(){return this.panelWidth}setWidth(e){this.panelWidth=Math.min(_n,Math.max(Un,e)),this.panelEl&&(this.panelEl.style.width=`${this.panelWidth}px`),document.documentElement.style.setProperty("--debug-info-panel-width",`${this.panelWidth}px`)}static register(){customElements.get(We.tagName)||customElements.define(We.tagName,We)}}We.register();const oo=`<div class="hierarchy">
    <div class="search-wrapper">
        <input type="text" class="search-input" placeholder="Search hierarchy...">
        <button class="menu-button" title="Options">&#9776;</button>
        <div class="menu-dropdown"></div>
    </div>
    <div class="tree-container">
        <slot></slot>
    </div>
</div>
`,ao=`/**
 * HierarchyTree component styles.
 * Scene graph tree view with search and context menu.
 */

:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.hierarchy {
    display: flex;
    flex-direction: column;
}

/* ─────────────────────────────────────────────────────────────
   Search bar
   ───────────────────────────────────────────────────────────── */

.search-wrapper {
    display: flex;
    gap: 4px;
    margin-bottom: 6px;
    position: relative;
}

.search-input {
    flex: 1;
    min-width: 0;
    height: 24px;
    box-sizing: border-box;
    padding: 0 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 11px;
}

.search-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.search-input::placeholder {
    color: var(--debug-text-muted, #888);
}

.menu-button {
    width: 24px;
    min-width: 24px;
    height: 24px;
    padding: 0;
    font-size: 12px;
    line-height: 1;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
    transition: all 0.2s;
}

.menu-button:hover {
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
    border-color: var(--debug-border-light, rgba(80, 80, 80, 1));
}

/* ─────────────────────────────────────────────────────────────
   Menu dropdown
   ───────────────────────────────────────────────────────────── */

.menu-dropdown {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: var(--debug-bg, rgba(32, 32, 32, 0.98));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    z-index: 100;
    min-width: 180px;
    padding: 4px 0;
    margin-top: 2px;
}

.menu-dropdown.visible {
    display: block;
}

/* ─────────────────────────────────────────────────────────────
   Tree container
   ───────────────────────────────────────────────────────────── */

.tree-container {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 400px;
}

/* In compact mode flyout, remove height limit - flyout content scrolls */
:host-context([flyout-open]) .tree-container {
    max-height: none;
}

.tree-container::-webkit-scrollbar {
    width: 6px;
}

.tree-container::-webkit-scrollbar-track {
    background: transparent;
}

.tree-container::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

/* No results message */
.no-results {
    padding: 8px;
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    text-align: center;
}

/* ─────────────────────────────────────────────────────────────
   Menu items (direct children of menu-dropdown)
   ───────────────────────────────────────────────────────────── */

.menu-dropdown .menu-item {
    display: block;
    width: 100%;
    padding: 6px 12px;
    text-align: left;
    background: none;
    border: none;
    color: var(--debug-text, #e0e0e0);
    font-size: 11px;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.1s;
    box-sizing: border-box;
    margin: 0;
}

.menu-dropdown .menu-item:hover {
    background: var(--debug-hover, rgba(255, 255, 255, 0.1));
}

.menu-dropdown .menu-separator {
    height: 1px;
    background: var(--debug-border, rgba(60, 60, 60, 1));
    margin: 4px 0;
}
`;class Xe extends V{static tagName="debug-hierarchy-tree";searchInput;menuButton;menuDropdown;treeContainer;boundCloseMenu=this.handleCloseMenu.bind(this);render(){this.shadow.innerHTML=`<style>${ao}</style>${oo}`,this.searchInput=this.$required(".search-input"),this.menuButton=this.$required(".menu-button"),this.menuDropdown=this.$required(".menu-dropdown"),this.treeContainer=this.$required(".tree-container")}setupEventListeners(){this.searchInput.addEventListener("input",this.handleSearchInput),this.searchInput.addEventListener("keydown",this.handleSearchKeydown),this.menuButton.addEventListener("click",this.handleMenuClick),document.addEventListener("click",this.boundCloseMenu)}cleanupEventListeners(){this.searchInput.removeEventListener("input",this.handleSearchInput),this.searchInput.removeEventListener("keydown",this.handleSearchKeydown),this.menuButton.removeEventListener("click",this.handleMenuClick),document.removeEventListener("click",this.boundCloseMenu)}handleSearchInput=()=>{this.emit("search",{query:this.searchInput.value})};handleSearchKeydown=e=>{e.stopPropagation(),e.key==="Escape"&&(this.clearSearch(),this.searchInput.blur())};handleMenuClick=e=>{e.stopPropagation(),this.toggleMenu()};handleCloseMenu(e){this.contains(e.target)||this.closeMenu()}getTreeContainer(){return this.ensureInitialized(),this.treeContainer}getMenuDropdown(){return this.ensureInitialized(),this.menuDropdown}getSearchQuery(){return this.ensureInitialized(),this.searchInput.value}setSearchQuery(e){this.ensureInitialized(),this.searchInput.value=e}clearSearch(){this.ensureInitialized(),this.searchInput.value="",this.emit("search",{query:""})}openMenu(){this.ensureInitialized(),this.menuDropdown.classList.add("visible"),this.emit("menu-toggle",{visible:!0})}closeMenu(){this.ensureInitialized(),this.menuDropdown.classList.remove("visible"),this.emit("menu-toggle",{visible:!1})}toggleMenu(){this.ensureInitialized(),this.menuDropdown.classList.contains("visible")?this.closeMenu():this.openMenu()}isMenuOpen(){return this.ensureInitialized(),this.menuDropdown.classList.contains("visible")}showNoResults(){this.ensureInitialized();const e=document.createElement("div");e.className="no-results",e.textContent="No matches found",this.treeContainer.appendChild(e)}static register(){customElements.get(Xe.tagName)||customElements.define(Xe.tagName,Xe)}}Xe.register();const ro=`<div class="row">
    <span class="toggle"></span>
    <span class="indicators"></span>
    <span class="icon"></span>
    <span class="name"></span>
    <span class="warning" hidden></span>
</div>
<div class="children">
    <slot></slot>
</div>
`,lo=`/**
 * TreeNode component styles.
 * Individual node in the hierarchy tree.
 */

:host {
    display: block;
    user-select: none;
    --depth: 0;
}

.row {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 2px 4px;
    padding-left: calc(var(--depth) * 12px + 4px);
    cursor: pointer;
    border-radius: 2px;
    transition: background 0.1s;
}

.row:hover {
    background: var(--debug-hover, rgba(255, 255, 255, 0.05));
}

:host([selected]) .row {
    background: var(--debug-accent, #4a90d9);
    color: white;
}

:host([match]) .row {
    background: rgba(74, 144, 217, 0.2);
}

:host([match][selected]) .row {
    background: var(--debug-accent, #4a90d9);
}

.toggle {
    width: 12px;
    font-size: 8px;
    text-align: center;
    cursor: pointer;
    opacity: 0.7;
    flex-shrink: 0;
}

.toggle:hover {
    opacity: 1;
}

:host([leaf]) .toggle {
    opacity: 0.3;
    cursor: default;
}

.indicators {
    font-size: 8px;
    margin-right: 2px;
    opacity: 0.9;
}

:host(:not([has-indicators])) .indicators {
    display: none;
}

.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    flex-shrink: 0;
    color: var(--debug-accent, #4a90d9);
    opacity: 0.9;
}

.icon svg {
    display: block;
}

.name {
    flex: 1;
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: none;
}

:host([hidden-object]) .name {
    opacity: 0.4;
}

.warning {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 6px;
    flex-shrink: 0;
    font-size: 12px;
    color: var(--debug-warning, #f0a030);
    cursor: help;
    text-shadow: 0 0 4px rgba(240, 160, 48, 0.5);
}

.warning[hidden] {
    display: none;
}

.warning::before {
    content: '\\26A0'; /* Warning sign */
}

.children {
    display: block;
}

:host([collapsed]) .children {
    display: none;
}

/* Search highlight */
.highlight {
    background: var(--debug-warning, #ff9800);
    color: black;
    padding: 0 2px;
    border-radius: 2px;
}
`;class Ye extends V{static tagName="debug-tree-node";static get observedAttributes(){return["collapsed","selected","match","leaf","hidden-object","has-indicators","depth"]}rowEl;toggleEl;indicatorsEl;iconEl;nameEl;warningEl;render(){this.shadow.innerHTML=`<style>${lo}</style>${ro}`,this.rowEl=this.$required(".row"),this.toggleEl=this.$required(".toggle"),this.indicatorsEl=this.$required(".indicators"),this.iconEl=this.$required(".icon"),this.nameEl=this.$required(".name"),this.warningEl=this.$required(".warning"),this.updateToggleIcon(),this.updateDepth()}setupEventListeners(){this.toggleEl.addEventListener("click",this.handleToggleClick),this.rowEl.addEventListener("click",this.handleRowClick),this.rowEl.addEventListener("dblclick",this.handleRowDblClick)}cleanupEventListeners(){this.toggleEl.removeEventListener("click",this.handleToggleClick),this.rowEl.removeEventListener("click",this.handleRowClick),this.rowEl.removeEventListener("dblclick",this.handleRowDblClick)}handleToggleClick=e=>{e.stopPropagation(),this.leaf||this.emit("toggle")};handleRowClick=()=>{this.emit("select")};handleRowDblClick=()=>{this.emit("dblclick-node")};attributeChangedCallback(e,t,n){t!==n&&this.initialized&&(e==="collapsed"?this.updateToggleIcon():e==="depth"&&this.updateDepth())}updateToggleIcon(){this.leaf?this.toggleEl.textContent=" ":this.toggleEl.textContent=this.collapsed?"▶":"▼"}updateDepth(){this.style.setProperty("--depth",String(this.depth))}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.toggleAttribute("collapsed",e)}get selected(){return this.hasAttribute("selected")}set selected(e){this.toggleAttribute("selected",e)}get match(){return this.hasAttribute("match")}set match(e){this.toggleAttribute("match",e)}get leaf(){return this.hasAttribute("leaf")}set leaf(e){this.toggleAttribute("leaf",e),this.initialized&&this.updateToggleIcon()}get hiddenObject(){return this.hasAttribute("hidden-object")}set hiddenObject(e){this.toggleAttribute("hidden-object",e)}get depth(){return parseInt(this.getAttribute("depth")??"0",10)}set depth(e){this.setAttribute("depth",String(e))}setIcon(e){this.ensureInitialized(),this.iconEl.textContent=e}setIconHTML(e){this.ensureInitialized(),this.iconEl.innerHTML=e}setName(e){this.ensureInitialized(),this.nameEl.textContent=e}setNameHTML(e){this.ensureInitialized(),this.nameEl.innerHTML=e}setIndicators(e,t){this.ensureInitialized(),this.indicatorsEl.textContent=e,t&&(this.indicatorsEl.title=t),this.toggleAttribute("has-indicators",e.length>0)}setWarning(e,t){this.ensureInitialized(),this.warningEl.hidden=!e,t&&(this.warningEl.title=t)}static register(){customElements.get(Ye.tagName)||customElements.define(Ye.tagName,Ye)}}Ye.register();Xe.register();Ye.register();class co{container;element;treeContainer;menuDropdown;scene;onSelect;onSelectMultiple;selectedNode=null;selectedObject=null;expandedNodes=new Set;nodeMap=new Map;searchQuery="";parsedSearch={pattern:"",mode:"contains"};matchingObjects=new Set;ancestorsOfMatches=new Set;boundsHelpers=[];wireframeToggled=new Set;boundingBoxShown=new Map;boundingSphereShown=new Map;visibilityForced=new Set;originalWireframeState=new Map;constructor(e,t,n,s){this.container=e,this.scene=t,this.onSelect=n,this.onSelectMultiple=s?.onSelectMultiple,this.element=document.createElement("debug-hierarchy-tree"),this.container.appendChild(this.element),this.treeContainer=this.element.getTreeContainer(),this.menuDropdown=this.element.getMenuDropdown(),this.createMenuItems(),this.element.addEventListener("search",i=>{const o=i.detail.query;this.setSearchQuery(o)}),s?.expandRoot&&this.expandedNodes.add(t.uuid),this.render()}createMenuItems(){const e=[{label:"Show unnamed",action:()=>this.showUnnamed()},{label:"Force visibility",action:()=>this.forceVisibility(),separator:!0},{label:"Select all matches",action:()=>this.selectAllMatches()},{label:"Toggle wireframe",action:()=>this.toggleWireframe(),separator:!0},{label:"Show bounding box",action:()=>this.toggleBoundingBox()},{label:"Show bounding sphere",action:()=>this.toggleBoundingSphere()},{label:"Reset all",action:()=>this.resetAll(),separator:!0}];for(const t of e){if(t.separator){const s=document.createElement("div");s.className="menu-separator",this.menuDropdown.appendChild(s)}const n=document.createElement("button");n.className="menu-item",n.textContent=t.label,n.addEventListener("click",()=>{this.element.closeMenu(),t.action()}),this.menuDropdown.appendChild(n)}}showUnnamed(){this.matchingObjects.clear(),this.ancestorsOfMatches.clear(),this.scene.traverse(e=>{if(!e.name.startsWith("__debug_")&&!e.name){this.matchingObjects.add(e.uuid);let t=e.parent;for(;t;)this.ancestorsOfMatches.add(t.uuid),t=t.parent}}),this.searchQuery="[unnamed]",this.element.setSearchQuery("[unnamed]"),this.render()}forceVisibility(){this.matchingObjects.size!==0&&(this.scene.traverse(e=>{if(this.matchingObjects.has(e.uuid)){e.visible=!0,this.visibilityForced.add(e.uuid);let t=e.parent;for(;t;)t.visible=!0,this.visibilityForced.add(t.uuid),t=t.parent}}),this.render())}selectAllMatches(){if(this.matchingObjects.size===0)return;const e=[];this.scene.traverse(t=>{this.matchingObjects.has(t.uuid)&&e.push(t)}),this.onSelectMultiple?this.onSelectMultiple(e):e.length>0&&this.selectObject(e[0])}toggleWireframe(){const e=this.getBoundsTargets();if(e.length===0)return;const t=e.some(n=>this.wireframeToggled.has(n.uuid));for(const n of e){const s=n.uuid;n.traverse(i=>{if(i instanceof S||i instanceof Ue){const o=Array.isArray(i.material)?i.material:[i.material];for(const a of o)if(a&&"wireframe"in a){const r=a;this.originalWireframeState.has(a.uuid)||this.originalWireframeState.set(a.uuid,r.wireframe),r.wireframe=!r.wireframe}}}),t?this.wireframeToggled.delete(s):this.wireframeToggled.add(s)}this.render()}getRandomColor(){const e=Math.random(),t=.7+Math.random()*.3,n=.5+Math.random()*.2;return new N().setHSL(e,t,n)}getBoundsTargets(){if(this.matchingObjects.size>0){const e=[];return this.scene.traverse(t=>{this.matchingObjects.has(t.uuid)&&e.push(t)}),e}return this.selectedObject?[this.selectedObject]:[]}getObjectBounds(e){if(e.updateMatrixWorld(!0),e instanceof Ue){if(e.boundingBox||e.computeBoundingBox(),e.boundingBox){const n=e.boundingBox.clone();return n.applyMatrix4(e.matrixWorld),n}return null}const t=new Is().setFromObject(e);if(t.isEmpty()){const n=new v,s=new v;e.getWorldPosition(n),e.getWorldScale(s);const i=Math.max(s.x,s.y,s.z,.1);t.setFromCenterAndSize(n,new v(i,i,i))}return t}createBoxHelperFromBounds(e,t){const n=new q(1,1,1),s=new Rn(n);n.dispose();const i=new qt({color:t,depthTest:!0}),o=new dt(s,i),a=e.getSize(new v),r=e.getCenter(new v);return o.scale.copy(a),o.position.copy(r),o}toggleBoundingBox(){const e=this.getBoundsTargets();if(e.length===0)return;if(e.some(n=>this.boundingBoxShown.has(n.uuid)))for(const n of e){const s=n.uuid;if(this.boundingBoxShown.has(s)){const i=this.boundingBoxShown.get(s);i.parent?.remove(i),i instanceof vn?i.dispose():i instanceof dt&&(i.geometry.dispose(),i.material instanceof Kt&&i.material.dispose()),this.boundingBoxShown.delete(s),this.boundsHelpers=this.boundsHelpers.filter(o=>o!==i)}}else for(const n of e){const s=n.uuid,i=this.getRandomColor(),o=this.getObjectBounds(n);if(!o)continue;const a=this.createBoxHelperFromBounds(o,i);a.name="__debug_bounds_box",this.scene.add(a),this.boundsHelpers.push(a),this.boundingBoxShown.set(s,a)}this.render()}createBoundingSphereHelper(e){const t=this.getObjectBounds(e);if(!t)return null;const n=new Ds;t.getBoundingSphere(n);const s=new ye(n.radius,16,12),i=new Rn(s);s.dispose();const o=this.getRandomColor(),a=new qt({color:o,depthTest:!0}),r=new dt(i,a);return r.name="__debug_bounds_sphere",r.position.copy(n.center),r}toggleBoundingSphere(){const e=this.getBoundsTargets();if(e.length===0)return;if(e.some(n=>this.boundingSphereShown.has(n.uuid)))for(const n of e){const s=n.uuid;if(this.boundingSphereShown.has(s)){const i=this.boundingSphereShown.get(s);i.parent?.remove(i),i instanceof dt&&(i.geometry.dispose(),i.material instanceof Kt&&i.material.dispose()),this.boundingSphereShown.delete(s),this.boundsHelpers=this.boundsHelpers.filter(o=>o!==i)}}else for(const n of e){const s=n.uuid,i=this.createBoundingSphereHelper(n);i&&(this.scene.add(i),this.boundsHelpers.push(i),this.boundingSphereShown.set(s,i))}this.render()}clearBoundsHelpers(){for(const e of this.boundsHelpers)e.parent?.remove(e),e instanceof vn?e.dispose():(e instanceof S||e instanceof dt)&&(e.geometry.dispose(),e.material instanceof Kt&&e.material.dispose());this.boundsHelpers=[],this.boundingBoxShown.clear(),this.boundingSphereShown.clear()}resetAll(){this.scene.traverse(e=>{if(e instanceof S||e instanceof Ue){const t=Array.isArray(e.material)?e.material:[e.material];for(const n of t)n&&"wireframe"in n&&this.originalWireframeState.has(n.uuid)&&(n.wireframe=this.originalWireframeState.get(n.uuid))}}),this.clearBoundsHelpers(),this.wireframeToggled.clear(),this.visibilityForced.clear(),this.originalWireframeState.clear(),this.render()}setSearchQuery(e){this.searchQuery=e.toLowerCase().trim(),this.parsedSearch=this.parseSearchQuery(this.searchQuery),this.updateMatchingObjects(),this.render()}parseSearchQuery(e){if(!e)return{pattern:"",mode:"contains"};const t=e.startsWith("^"),n=e.endsWith("$");return t&&n&&e.length>2?{pattern:e.slice(1,-1),mode:"exact"}:t&&e.length>1?{pattern:e.slice(1),mode:"startsWith"}:n&&e.length>1?{pattern:e.slice(0,-1),mode:"endsWith"}:{pattern:e,mode:"contains"}}matchesSearch(e){const{pattern:t,mode:n}=this.parsedSearch;if(!t)return!1;switch(n){case"exact":return e===t;case"startsWith":return e.startsWith(t);case"endsWith":return e.endsWith(t);default:return e.includes(t)}}updateMatchingObjects(){this.matchingObjects.clear(),this.ancestorsOfMatches.clear(),this.parsedSearch.pattern&&this.scene.traverse(e=>{if(e.name.startsWith("__debug_"))return;const t=this.getDisplayName(e).toLowerCase();if(this.matchesSearch(t)){this.matchingObjects.add(e.uuid);let n=e.parent;for(;n;)this.ancestorsOfMatches.add(n.uuid),n=n.parent}})}isVisibleInSearch(e){return this.searchQuery?this.matchingObjects.has(e.uuid)||this.ancestorsOfMatches.has(e.uuid):!0}refresh(){this.updateMatchingObjects(),this.render()}setScene(e){this.resetAll(),this.scene=e,this.expandedNodes.clear(),this.selectedObject=null,this.selectedNode=null,this.searchQuery="",this.element.setSearchQuery(""),this.matchingObjects.clear(),this.ancestorsOfMatches.clear()}setSelected(e){if(this.selectedObject=e,this.selectedNode&&(this.selectedNode.selected=!1),e){const t=this.nodeMap.get(e.uuid);t&&(t.selected=!0,this.selectedNode=t),this.expandToObject(e)}}render(){this.treeContainer.innerHTML="",this.nodeMap.clear(),this.selectedNode=null,this.renderNode(this.scene,this.treeContainer,0),this.searchQuery&&this.matchingObjects.size===0&&this.element.showNoResults()}renderNode(e,t,n){const s=e===this.scene,i=e.name==="__lab_component_container__";if(!s&&!i&&e.name.startsWith("__debug_")||!this.isVisibleInSearch(e))return;const o=e.uuid,a=e.children.some(u=>(u.name==="__lab_component_container__"||!u.name.startsWith("__debug_"))&&this.isVisibleInSearch(u)),r=this.searchQuery?this.ancestorsOfMatches.has(o)||this.matchingObjects.has(o):this.expandedNodes.has(o),l=document.createElement("debug-tree-node");l.dataset.uuid=o,l.depth=n,l.leaf=!a,l.collapsed=!r,l.hiddenObject=!e.visible,l.setIconHTML(this.getTypeIcon(e));const d=this.getDisplayName(e);this.searchQuery&&this.matchingObjects.has(o)?(l.match=!0,l.setNameHTML(this.highlightMatch(d))):l.setName(d);const h=this.getStateIndicators(o);if(h&&l.setIndicators(h,this.getIndicatorTooltip(o)),this.isUnnamedObject(e)&&l.setWarning(!0,"Unnamed object - won't persist in debug history"),e===this.selectedObject&&(l.selected=!0,this.selectedNode=l),l.addEventListener("select",u=>{u.stopPropagation(),this.selectObject(e)}),l.addEventListener("toggle",u=>{u.stopPropagation(),this.toggleNode(o)}),l.addEventListener("dblclick-node",u=>{u.stopPropagation(),a&&this.toggleNode(o)}),this.nodeMap.set(o,l),a&&r)for(const u of e.children)this.renderNode(u,l,n+1);t.appendChild(l)}highlightMatch(e){const{pattern:t,mode:n}=this.parsedSearch,s=e.toLowerCase();let i;switch(n){case"exact":case"startsWith":i=0;break;case"endsWith":i=s.length-t.length;break;default:i=s.indexOf(t);break}if(i===-1||i<0)return e;const o=e.slice(0,i),a=e.slice(i,i+t.length),r=e.slice(i+t.length);return`${o}<span class="highlight">${a}</span>${r}`}getDisplayName(e){return e.name?e.name:`[${e.type}]`}isUnnamedObject(e){return e.name?(e.name.startsWith("__debug_"),!1):!0}getTypeIcon(e){const n={Scene:"scene",Mesh:"mesh",Group:"group",InstancedMesh:"layers",SkinnedMesh:"bone",Points:"dots",Line:"line",LineSegments:"line",Sprite:"diamond",PerspectiveCamera:"camera",OrthographicCamera:"camera",DirectionalLight:"sun",PointLight:"lightbulb",SpotLight:"spotlight",AmbientLight:"cloud",HemisphereLight:"hemisphere",Bone:"bone"}[e.type]??"circle";return En(n,12)}getStateIndicators(e){const t=[];return this.wireframeToggled.has(e)&&t.push("▧"),this.boundingBoxShown.has(e)&&t.push("□"),this.boundingSphereShown.has(e)&&t.push("○"),this.visibilityForced.has(e)&&t.push("👁"),t.join("")}getIndicatorTooltip(e){const t=[];return this.wireframeToggled.has(e)&&t.push("Wireframe"),this.boundingBoxShown.has(e)&&t.push("Bounding Box"),this.boundingSphereShown.has(e)&&t.push("Bounding Sphere"),this.visibilityForced.has(e)&&t.push("Visibility Forced"),t.join(", ")}toggleNode(e){this.expandedNodes.has(e)?this.expandedNodes.delete(e):this.expandedNodes.add(e),this.render()}selectObject(e){this.selectedNode&&(this.selectedNode.selected=!1),this.selectedObject=e;const t=this.nodeMap.get(e.uuid);t&&(t.selected=!0,this.selectedNode=t),this.onSelect(e)}expandToObject(e){let t=e.parent;for(;t&&t!==this.scene;)this.expandedNodes.add(t.uuid),t=t.parent;this.expandedNodes.add(this.scene.uuid),this.render()}expandAll(){this.scene.traverse(e=>{e.children.length>0&&this.expandedNodes.add(e.uuid)}),this.render()}collapseAll(){this.expandedNodes.clear(),this.render()}dispose(){this.resetAll(),this.element.remove()}}const ho=`<div class="texture-preview">
    <canvas class="preview-canvas"></canvas>
    <span class="dim-label"></span>
    <div class="placeholder">Preview unavailable</div>
</div>
`,uo=`:host {
    display: block;
    margin-top: 8px;
    text-transform: none;
    letter-spacing: normal;
}

.texture-preview {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
}

.preview-canvas {
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s;
    max-width: 100%;
    display: none;
}

.preview-canvas:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.preview-canvas.visible {
    display: block;
}

.dim-label {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    display: none;
}

.dim-label.visible {
    display: block;
}

.placeholder {
    padding: 12px;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    background: var(--debug-bg, #1e1e1e);
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    display: none;
}

.placeholder.visible {
    display: block;
}

/* Fullscreen overlay */
.fullscreen-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 100000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
}

.fullscreen-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.fullscreen-close:hover {
    opacity: 1;
}

.fullscreen-title {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
    font-size: 14px;
    font-family: monospace;
}

.fullscreen-content {
    flex: 1;
    width: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.fullscreen-canvas {
    border-radius: 4px;
    image-rendering: pixelated;
    display: block;
}

/* Zoom controls */
.fullscreen-zoom-bar {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(30, 30, 30, 0.9);
    border: 1px solid rgba(80, 80, 80, 0.6);
    border-radius: 6px;
    padding: 4px 6px;
    backdrop-filter: blur(8px);
}

.fullscreen-zoom-btn {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(80, 80, 80, 0.5);
    color: #e0e0e0;
    font-family: monospace;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    line-height: 1;
    transition: background 0.15s, border-color 0.15s;
}

.fullscreen-zoom-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #4a90d9;
}

.fullscreen-zoom-input {
    width: 52px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(80, 80, 80, 0.5);
    color: #e0e0e0;
    font-family: monospace;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 4px;
    text-align: center;
    outline: none;
}

.fullscreen-zoom-input:focus {
    border-color: #4a90d9;
}
`,Se=128;function Jt(c){return Math.round(c*100)/100}class Me extends HTMLElement{static tagName="debug-texture-preview";shadow;initialized=!1;canvas=null;dimLabel=null;placeholder=null;texture=null;textureKey="";constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${uo}</style>${ho}`,this.canvas=this.shadow.querySelector(".preview-canvas"),this.dimLabel=this.shadow.querySelector(".dim-label"),this.placeholder=this.shadow.querySelector(".placeholder")}setupEventListeners(){this.canvas?.addEventListener("click",this.onCanvasClick)}cleanupEventListeners(){this.canvas?.removeEventListener("click",this.onCanvasClick)}onCanvasClick=e=>{e.stopPropagation(),this.texture&&this.showFullscreen()};setTexture(e,t){this.texture=e,this.textureKey=t,this.updatePreview()}updatePreview(){if(!this.canvas||!this.dimLabel||!this.placeholder)return;if(this.canvas.classList.remove("visible"),this.dimLabel.classList.remove("visible"),this.placeholder.classList.remove("visible"),!this.texture||!this.texture.image){this.placeholder.textContent="Preview unavailable",this.placeholder.classList.add("visible");return}const e=this.texture.image;let t,n,s=null;if(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)s=e,t=e.width,n=e.height;else if(e instanceof ImageBitmap)s=e,t=e.width,n=e.height;else if(typeof e=="object"&&e!==null&&"width"in e&&"height"in e){if(t=e.width,n=e.height,this.texture instanceof Js){const l=e.depth??0;this.placeholder.textContent=`${t}×${n}×${l} (3D)`,this.placeholder.classList.add("visible"),this.dimLabel.classList.add("visible"),this.dimLabel.textContent=`${t}×${n}×${l}`;return}if(this.texture instanceof Fn&&"data"in e&&e.data){this.renderDataTexture(t,n,e.data);return}if(this.texture instanceof ei){this.placeholder.textContent=`${t}×${n} (Compressed)`,this.placeholder.classList.add("visible");return}s=e}else{this.placeholder.textContent="Unknown texture format",this.placeholder.classList.add("visible");return}const i=t/n;let o,a;i>1?(o=Se,a=Math.round(Se/i)):(a=Se,o=Math.round(Se*i)),this.canvas.width=o,this.canvas.height=a;const r=this.canvas.getContext("2d");r&&s&&r.drawImage(s,0,0,o,a),this.canvas.title="Click to expand",this.canvas.classList.add("visible"),this.dimLabel.textContent=`${t}×${n}`,this.dimLabel.classList.add("visible")}rawDataToImageData(e,t,n){const s=e*t,i=Math.round(n.length/s);if(i<1||i>4)return null;const o=new Uint8ClampedArray(s*4),a=n instanceof Float32Array;for(let r=0;r<s;r++){const l=r*i,d=r*4,h=a?Math.round(n[l]*255):n[l],u=i>=2?a?Math.round(n[l+1]*255):n[l+1]:h,p=i>=3?a?Math.round(n[l+2]*255):n[l+2]:h,x=i>=4?a?Math.round(n[l+3]*255):n[l+3]:255;o[d]=h,o[d+1]=u,o[d+2]=p,o[d+3]=x}return new ImageData(o,e,t)}renderDataTexture(e,t,n){if(!this.canvas||!this.dimLabel||!this.placeholder)return;const s=this.rawDataToImageData(e,t,n);if(!s){this.placeholder.textContent=`${e}×${t} (unsupported format)`,this.placeholder.classList.add("visible");return}const i=e/t,o=i>1?Se:Math.round(Se*i),a=i>1?Math.round(Se/i):Se,r=document.createElement("canvas");r.width=e,r.height=t;const l=r.getContext("2d");if(!l)return;l.putImageData(s,0,0),this.canvas.width=o,this.canvas.height=a;const d=this.canvas.getContext("2d");d&&d.drawImage(r,0,0,o,a),this.canvas.title="Click to expand",this.canvas.classList.add("visible"),this.dimLabel.textContent=`${e}×${t}`,this.dimLabel.classList.add("visible")}showFullscreen(){if(!this.texture||!this.texture.image)return;const e=document.createElement("div");e.className="fullscreen-overlay";const t=document.createElement("button");t.className="fullscreen-close",t.textContent="✕",t.addEventListener("click",()=>E());const n=document.createElement("div");n.className="fullscreen-title",n.textContent=this.textureKey;const s=document.createElement("div");s.className="fullscreen-content";let i=null;const o=this.texture.image;if(o&&typeof o=="object"&&"width"in o&&"height"in o){const P=o.width,b=o.height;i=document.createElement("canvas"),i.className="fullscreen-canvas",i.width=P,i.height=b;const k=i.getContext("2d");if(k)if(this.texture instanceof Fn&&"data"in o&&o.data){const L=this.rawDataToImageData(P,b,o.data);L&&k.putImageData(L,0,0)}else k.drawImage(o,0,0);s.appendChild(i)}const a=.1,r=32,l=.25;let d=1;const h=document.createElement("div");h.className="fullscreen-zoom-bar";const u=document.createElement("button");u.className="fullscreen-zoom-btn",u.textContent="−",u.title="Zoom out";const p=document.createElement("button");p.className="fullscreen-zoom-btn",p.textContent="+",p.title="Zoom in";const x=document.createElement("input");x.className="fullscreen-zoom-input",x.type="text",x.value="100%";const f=document.createElement("button");f.className="fullscreen-zoom-btn",f.textContent="Fit",f.title="Fit to screen";const C=document.createElement("button");C.className="fullscreen-zoom-btn",C.textContent="1:1",C.title="Actual size",h.appendChild(u),h.appendChild(x),h.appendChild(p),h.appendChild(f),h.appendChild(C);const m=()=>{i&&(d=Math.max(a,Math.min(r,d)),i.style.width=`${Math.round(i.width*d)}px`,i.style.height=`${Math.round(i.height*d)}px`,x.value=`${Math.round(d*100)}%`)};u.addEventListener("click",P=>{P.stopPropagation(),d=Jt(d-l),m()}),p.addEventListener("click",P=>{P.stopPropagation(),d=Jt(d+l),m()}),x.addEventListener("click",P=>P.stopPropagation()),x.addEventListener("keydown",P=>{if(P.key!=="Enter")return;P.preventDefault();const b=parseFloat(x.value.replace("%",""));!isNaN(b)&&b>0&&(d=b/100,m())}),f.addEventListener("click",P=>{if(P.stopPropagation(),!i)return;const b=window.innerWidth*.85,k=window.innerHeight*.75;d=Math.min(b/i.width,k/i.height),m()}),C.addEventListener("click",P=>{P.stopPropagation(),d=1,m()}),s.addEventListener("wheel",P=>{P.preventDefault(),P.stopPropagation();const b=P.deltaY>0?-l:l;d=Jt(d+b),m()},{passive:!1}),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(h),e.addEventListener("click",P=>{P.target===e&&E()});const w=P=>{P.key==="Escape"&&E()};document.addEventListener("keydown",w);const E=()=>{document.removeEventListener("keydown",w),e.remove()};this.shadow.appendChild(e),i&&requestAnimationFrame(()=>{f.click()})}static register(){customElements.get(Me.tagName)||customElements.define(Me.tagName,Me)}}Me.register();const po=`<div class="audio-preview">
    <div class="progress-container">
        <div class="progress-bar"></div>
    </div>
    <div class="controls">
        <button class="play-btn" title="Play">&#x25B6;</button>
        <span class="time-display">0:00 / 0:00</span>
    </div>
    <div class="placeholder">Audio unavailable</div>
</div>
`,go=`:host {
    display: block;
    margin-top: 8px;
    text-transform: none;
    letter-spacing: normal;
}

.audio-preview {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.play-btn {
    width: 24px;
    height: 24px;
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    background: var(--debug-bg, #1e1e1e);
    color: var(--debug-success, #4caf50);
    cursor: pointer;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s, background 0.2s;
}

.play-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.progress-container {
    width: 100%;
    height: 12px;
    background: var(--debug-bg, #1e1e1e);
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    width: 0%;
    background: var(--debug-accent, #4a90d9);
    transition: width 0.1s linear;
}

.time-display {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    font-family: monospace;
    white-space: nowrap;
}

.placeholder {
    padding: 8px;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    display: none;
}

.placeholder.visible {
    display: block;
}

:host([unavailable]) .controls,
:host([unavailable]) .progress-container {
    display: none;
}

:host([unavailable]) .placeholder {
    display: block;
}
`;class Ze extends HTMLElement{static tagName="debug-audio-preview";shadow;initialized=!1;playBtn=null;progressContainer=null;progressBar=null;timeDisplay=null;placeholder=null;audioContext=null;buffer=null;sourceNode=null;isPlaying=!1;startTime=0;pauseTime=0;duration=0;updateInterval;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners(),this.stopPlayback(),this.audioContext?.close(),this.audioContext=null}render(){this.shadow.innerHTML=`<style>${go}</style>${po}`,this.playBtn=this.shadow.querySelector(".play-btn"),this.progressContainer=this.shadow.querySelector(".progress-container"),this.progressBar=this.shadow.querySelector(".progress-bar"),this.timeDisplay=this.shadow.querySelector(".time-display"),this.placeholder=this.shadow.querySelector(".placeholder")}setupEventListeners(){this.playBtn?.addEventListener("click",this.onPlayClick),this.progressContainer?.addEventListener("click",this.onProgressClick)}cleanupEventListeners(){this.playBtn?.removeEventListener("click",this.onPlayClick),this.progressContainer?.removeEventListener("click",this.onProgressClick)}onPlayClick=e=>{if(e.stopPropagation(),this.isPlaying){const t=this.audioContext.currentTime-this.startTime+this.pauseTime;this.pauseTime=t,this.stopPlayback(),this.updatePlayButton(!1)}else this.startPlayback(this.pauseTime),this.updatePlayButton(!0)};onProgressClick=e=>{if(e.stopPropagation(),!this.progressContainer||this.duration===0)return;const t=this.progressContainer.getBoundingClientRect(),s=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width))*this.duration;this.updateProgress(s),this.isPlaying?(this.stopPlayback(),this.startPlayback(s),this.updatePlayButton(!0)):this.pauseTime=s};startPlayback(e=0){!this.buffer||!this.audioContext||(this.audioContext.state==="suspended"&&this.audioContext.resume(),this.sourceNode=this.audioContext.createBufferSource(),this.sourceNode.buffer=this.buffer,this.sourceNode.connect(this.audioContext.destination),this.sourceNode.start(0,e),this.startTime=this.audioContext.currentTime,this.pauseTime=e,this.isPlaying=!0,this.updateInterval=window.setInterval(()=>this.updateProgressFromPlayback(),100),this.sourceNode.onended=()=>{this.isPlaying&&(this.updatePlayButton(!1),this.isPlaying=!1,this.pauseTime=0,this.updateProgress(0),this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0))})}stopPlayback(){this.sourceNode&&(this.sourceNode.onended=null,this.sourceNode.stop(),this.sourceNode.disconnect(),this.sourceNode=null),this.isPlaying=!1,this.updateInterval&&(clearInterval(this.updateInterval),this.updateInterval=void 0)}updateProgressFromPlayback(){if(this.isPlaying&&this.startTime>0&&this.audioContext){const e=this.audioContext.currentTime-this.startTime+this.pauseTime;this.updateProgress(e)}}updateProgress(e){if(!this.progressBar||!this.timeDisplay)return;const t=Math.min(e/this.duration*100,100);this.progressBar.style.width=`${t}%`,this.timeDisplay.textContent=`${this.formatTime(e)} / ${this.formatTime(this.duration)}`}updatePlayButton(e){this.playBtn&&(this.playBtn.innerHTML=e?"&#x23F8;":"&#x25B6;",this.playBtn.title=e?"Pause":"Play")}formatTime(e){if(!isFinite(e))return"0:00";const t=Math.floor(e/60),n=Math.floor(e%60);return`${t}:${n.toString().padStart(2,"0")}`}setBuffer(e){if(this.stopPlayback(),this.buffer=e,this.pauseTime=0,!e){this.setAttribute("unavailable","");return}this.removeAttribute("unavailable"),this.duration=e.duration,this.audioContext||(this.audioContext=new AudioContext),this.updateProgress(0),this.updatePlayButton(!1)}static register(){customElements.get(Ze.tagName)||customElements.define(Ze.tagName,Ze)}}Ze.register();const Gn="gpu-compression";function ut(c){if(c===0)return"0 B";const e=1024,t=["B","KB","MB","GB"],n=Math.floor(Math.log(c)/Math.log(e));return parseFloat((c/Math.pow(e,n)).toFixed(2))+" "+t[n]}function Rt(c){return c<1e3?`${Math.round(c)}ms`:`${(c/1e3).toFixed(2)}s`}function en(c){switch(c){case"pending":return"status-pending";case"loading":return"status-loading";case"loaded":return"status-loaded";case"error":return"status-error"}}function mo(c){switch(c){case"pending":return"○";case"loading":return"⏳";case"loaded":return"✓";case"error":return"✗"}}class bo{section;resources;config;statsContainer;searchInput;sortSelect;listContainer;importsContainer;dropZone;expandedItems=new Set;filterText="";sortMode="name";debugImports=new Map;gltfLoader=null;importCounter=0;constructor(e,t={}){this.resources=e,this.config=t,this.section=new qe({id:"resources",title:"Resources",icon:"folder",collapsed:!0,order:3}),this.createUI(),this.setupEventListeners(),this.prefetchMissingSizes(),this.refresh()}prefetchMissingSizes(){const e=this.resources.getAllResourcesInfo(),t=[];for(const n of e)n.type===Q.TEXTURE&&t.push(this.resources.prefetchSize(n.key,n.path));t.length>0&&Promise.all(t).then(()=>this.refresh())}get element(){return this.section.element}createUI(){const e=this.section.getContent();this.statsContainer=document.createElement("div"),this.statsContainer.className="resources-stats",e.appendChild(this.statsContainer);const t=document.createElement("div");t.className="resources-search-row",this.searchInput=document.createElement("input"),this.searchInput.type="text",this.searchInput.placeholder="Filter...",this.searchInput.className="resources-search-input",this.searchInput.addEventListener("input",()=>{this.filterText=this.searchInput.value.toLowerCase(),this.renderList()}),this.sortSelect=document.createElement("select"),this.sortSelect.className="resources-sort-select",this.sortSelect.innerHTML=`
            <option value="status">By Status</option>
            <option value="name">By Name</option>
            <option value="size">By Size</option>
            <option value="type">By Type</option>
        `,this.sortSelect.value=this.sortMode,this.sortSelect.addEventListener("change",()=>{this.sortMode=this.sortSelect.value,this.renderList()}),t.appendChild(this.searchInput),t.appendChild(this.sortSelect),e.appendChild(t),this.listContainer=document.createElement("div"),this.listContainer.className="resources-list",e.appendChild(this.listContainer),this.createImportSection(e)}createGpuCompressionToggle(e){const t=document.createElement("div");t.className="gpu-compression-toggle";const n=document.createElement("div");n.className="debug-checkbox-row";const s=document.createElement("input");s.type="checkbox",s.id="debug-gpu-compression-toggle",s.checked=F.getGlobal(Gn,!1)??!1;const i=document.createElement("label");i.htmlFor=s.id,i.textContent="Use GPU Compression (KTX2)";const o=document.createElement("span");o.className="gpu-compression-reload-hint",o.textContent="",o.style.display="none",s.addEventListener("change",()=>{F.setGlobal(Gn,s.checked),o.textContent=" (reload required)",o.style.display="inline",setTimeout(()=>{window.location.reload()},500)}),n.appendChild(s),n.appendChild(i),n.appendChild(o),t.appendChild(n),e.appendChild(t)}createImportSection(e){const t=document.createElement("div");t.className="import-section-header",t.textContent="Import Models",e.appendChild(t),this.dropZone=document.createElement("div"),this.dropZone.className="import-drop-zone",this.dropZone.innerHTML=`
            <span class="drop-zone-icon">⬇</span>
            <span class="drop-zone-text">Drop GLTF/GLB here</span>
            <span class="drop-zone-subtext">or click to browse</span>
        `;const n=document.createElement("input");n.type="file",n.accept=".gltf,.glb",n.style.display="none",n.addEventListener("change",()=>{n.files&&n.files.length>0&&(this.handleFile(n.files[0]),n.value="")}),this.dropZone.addEventListener("click",()=>n.click()),this.dropZone.addEventListener("dragover",s=>{s.preventDefault(),this.dropZone.classList.add("drag-over")}),this.dropZone.addEventListener("dragleave",()=>{this.dropZone.classList.remove("drag-over")}),this.dropZone.addEventListener("drop",s=>{s.preventDefault(),this.dropZone.classList.remove("drag-over"),s.dataTransfer?.files&&s.dataTransfer.files.length>0&&this.handleFile(s.dataTransfer.files[0])}),e.appendChild(this.dropZone),e.appendChild(n),this.importsContainer=document.createElement("div"),this.importsContainer.className="debug-imports-list",e.appendChild(this.importsContainer)}handleFile(e){const t=e.name.split(".").pop()?.toLowerCase();if(t!=="gltf"&&t!=="glb"){console.warn("ResourcesInspector: Only GLTF/GLB files are supported");return}this.loadGLTFFile(e)}loadGLTFFile(e){if(!this.gltfLoader){const s=new ti;s.setDecoderPath("/draco/"),this.gltfLoader=new ni,this.gltfLoader.setDRACOLoader(s)}const t=performance.now(),n=URL.createObjectURL(e);this.gltfLoader.load(n,s=>{URL.revokeObjectURL(n);const i=performance.now()-t;this.importCounter++;const o=`import_${this.importCounter}`,a={key:o,filename:e.name,path:e.name,gltf:s,root:s.scene,size:e.size,loadTime:i};this.config.scene&&this.config.scene.add(s.scene),s.animations.length>0&&this.config.animationRegistry&&this.config.animationRegistry.register(s.scene,s.animations),this.debugImports.set(o,a),this.renderImportsList()},void 0,s=>{URL.revokeObjectURL(n),console.error("ResourcesInspector: Failed to load GLTF:",s)})}renderImportsList(){if(!this.importsContainer||(this.importsContainer.innerHTML="",this.debugImports.size===0))return;const e=document.createElement("div");e.className="imports-list-header",e.textContent=`Debug Imports (${this.debugImports.size})`,this.importsContainer.appendChild(e);for(const[t,n]of this.debugImports){const s=this.createImportRow(n);this.importsContainer.appendChild(s)}}createImportRow(e){const t=document.createElement("div");t.className="import-row";const n=document.createElement("span");n.className="import-name",n.textContent=e.filename,n.title=e.filename;const s=document.createElement("span");s.className="import-meta",s.textContent=`${ut(e.size)} | ${Rt(e.loadTime)}`;const i=document.createElement("div");i.className="import-actions";const o=document.createElement("button");o.className="import-action-btn",o.textContent="Select",o.addEventListener("click",()=>{this.config.onImportSelect?.(e)}),i.appendChild(o);const a=document.createElement("button");a.className="import-action-btn",a.textContent="Copy",a.title="Copy config code",a.addEventListener("click",()=>{this.copyImportConfigCode(e)}),i.appendChild(a);const r=document.createElement("button");return r.className="import-action-btn destructive",r.textContent="✕",r.title="Remove",r.addEventListener("click",()=>{this.removeImport(e.key)}),i.appendChild(r),t.appendChild(n),t.appendChild(s),t.appendChild(i),t}copyImportConfigCode(e){const n=`${e.filename.replace(/\.(gltf|glb)$/i,"").replace(/[^a-zA-Z0-9]/g,"_").replace(/^_+|_+$/g,"").replace(/_+/g,"_")}: gltf('/models/${e.filename}', { compressed: true }),`;navigator.clipboard.writeText(n)}removeImport(e){const t=this.debugImports.get(e);t&&(this.config.scene&&t.root.parent&&t.root.parent.remove(t.root),this.config.animationRegistry&&this.config.animationRegistry.unregister(t.root),this.debugImports.delete(e),this.renderImportsList())}setupEventListeners(){const e=this.resources.getAllResourcesInfo();for(const t of e)this.resources.on(`status:${t.key}`,()=>this.refresh()),this.resources.on(`progress:${t.key}`,()=>this.updateResourceRow(t.key))}refresh(){this.renderStats(),this.renderList(),this.renderImportsList()}renderStats(){const e=this.resources.getStats(),t=e.unknownSizeCount>0?`${ut(e.totalSize)} (${e.unknownSizeCount} unknown)`:ut(e.totalSize);this.statsContainer.innerHTML=`
            <div class="stats-row">
                <span class="stats-label">Total</span>
                <span class="stats-value">${e.total} resources</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">Size</span>
                <span class="stats-value">${t}</span>
            </div>
            <div class="stats-row">
                <span class="stats-label">Load Time</span>
                <span class="stats-value">${Rt(e.totalLoadTime)}</span>
            </div>
            <div class="stats-badges">
                <span class="stats-badge status-loaded">${e.byStatus.loaded} loaded</span>
                <span class="stats-badge status-loading">${e.byStatus.loading} loading</span>
                <span class="stats-badge status-pending">${e.byStatus.pending} pending</span>
                <span class="stats-badge status-error">${e.byStatus.error} error</span>
            </div>
        `}renderList(){const t=this.resources.getAllResourcesInfo().filter(n=>this.filterText===""||n.key.toLowerCase().includes(this.filterText)||n.path.toLowerCase().includes(this.filterText));t.sort((n,s)=>{switch(this.sortMode){case"name":return n.key.localeCompare(s.key);case"size":{const i=n.size??-1,o=s.size??-1;return i===o?n.key.localeCompare(s.key):o-i}case"type":return n.type!==s.type?n.type.localeCompare(s.type):n.key.localeCompare(s.key);default:{const i={loading:0,error:1,pending:2,loaded:3},o=i[n.status]-i[s.status];return o!==0?o:n.type!==s.type?n.type.localeCompare(s.type):n.key.localeCompare(s.key)}}}),this.listContainer.innerHTML="";for(const n of t){const s=this.createResourceRow(n);this.listContainer.appendChild(s)}}createResourceRow(e){const t=document.createElement("div");t.className=`resource-row ${en(e.status)}`,t.dataset.key=e.key;const n=this.expandedItems.has(e.key),s=document.createElement("div");s.className="resource-header";const i=document.createElement("span");i.className="resource-expand-icon",i.textContent=n?"▼":"▶";const o=document.createElement("span");o.className=`resource-status-icon ${en(e.status)}`,o.textContent=mo(e.status);const a=document.createElement("span");a.className=`resource-name ${en(e.status)}`,a.title=e.key,e.status==="loading"&&e.progress>0?a.textContent=`${e.key} (${e.progress}%)`:a.textContent=e.key;const r=document.createElement("span");r.className="resource-meta";const l=[];if(e.size!==null?l.push(ut(e.size)):e.sizeUnavailable&&e.status==="loaded"&&l.push("size n/a"),e.loadTime!==null&&l.push(Rt(e.loadTime)),r.textContent=l.join(" | "),s.appendChild(i),s.appendChild(o),s.appendChild(a),s.appendChild(r),s.addEventListener("click",()=>{this.expandedItems.has(e.key)?this.expandedItems.delete(e.key):this.expandedItems.add(e.key),this.renderList()}),t.appendChild(s),n){const d=document.createElement("div");if(d.className="resource-details",d.innerHTML=`
                <div class="detail-row">
                    <span class="detail-label">Path</span>
                    <span class="detail-value">${e.path}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Type</span>
                    <span class="detail-value">${e.type}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Mode</span>
                    <span class="detail-value">${e.loadingMode}</span>
                </div>
                ${e.size!==null?`
                <div class="detail-row">
                    <span class="detail-label">Size</span>
                    <span class="detail-value">${ut(e.size)}</span>
                </div>
                `:""}
                ${e.loadTime!==null?`
                <div class="detail-row">
                    <span class="detail-label">Load Time</span>
                    <span class="detail-value">${Rt(e.loadTime)}</span>
                </div>
                `:""}
            `,(e.type===Q.TEXTURE||e.type===Q.KTX2||e.type===Q.GENERATED)&&e.status==="loaded"){const p=this.createTexturePreview(e);d.appendChild(p)}if(e.type===Q.SOUND&&e.status==="loaded"){const p=this.createAudioPreview(e);d.appendChild(p)}const h=document.createElement("div");h.className="resource-actions";const u=document.createElement("button");if(u.className="resource-action-btn",u.textContent="Copy Config",u.addEventListener("click",p=>{p.stopPropagation(),this.copyConfigCode(e)}),h.appendChild(u),e.type===Q.GLTF||e.type===Q.DRACO){const p=document.createElement("button");p.className="resource-action-btn",p.textContent="Select",p.disabled=e.status!=="loaded",p.addEventListener("click",x=>{x.stopPropagation(),this.config.onResourceSelect?.(e.key,e)}),h.appendChild(p)}d.appendChild(h),t.appendChild(d)}return t}updateResourceRow(e){const t=this.resources.getResourceInfo(e);if(!t)return;const n=this.listContainer.querySelector(`[data-key="${e}"]`);if(!n)return;const s=n.querySelector(".resource-name");s&&t.status==="loading"&&t.progress>0&&(s.textContent=`${t.key} (${t.progress}%)`)}copyConfigCode(e){let t="";const n=e.key;switch(e.type){case Q.GLTF:t=`${n}: gltf('${e.path}'),`;break;case Q.DRACO:t=`${n}: gltf('${e.path}', { compressed: true }),`;break;case Q.TEXTURE:t=`${n}: texture('${e.path}'),`;break;case Q.KTX2:t=`${n}: ktx2('${e.path}'),`;break;case Q.SOUND:t=`${n}: sound('${e.path}'),`;break;case Q.HDR:t=`${n}: {
    type: RESOURCE_TYPE.HDR,
    urls: ['${e.path}'],
},`;break}navigator.clipboard.writeText(t)}createTexturePreview(e){const t=document.createElement(Me.tagName),n=this.resources.items[e.key];return t.setTexture(n??null,e.key),t}createAudioPreview(e){const t=document.createElement(Ze.tagName),n=this.resources.items[e.key];return t.setBuffer(n??null),t}dispose(){for(const e of this.debugImports.values())this.config.scene&&e.root.parent&&e.root.parent.remove(e.root),this.config.animationRegistry&&this.config.animationRegistry.unregister(e.root);this.debugImports.clear(),this.section.dispose()}}const fo=`<div class="history-panel">
    <div class="header">
        <span class="title">History</span>
        <span class="status"></span>
        <button class="settings-btn" title="Settings">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
        </button>
    </div>

    <div class="filter-row">
        <label class="scope-label">Scope:</label>
        <select class="scope-select">
            <option value="">All</option>
        </select>
    </div>

    <div class="search-row">
        <input type="text" class="search-input" placeholder="Search history...">
        <button class="clear-search-btn" title="Clear search">&times;</button>
    </div>

    <div class="list-container">
        <div class="list"></div>
        <div class="empty-state">No history yet</div>
    </div>

    <div class="footer">
        <button class="undo-btn" disabled title="Undo (Ctrl+Z)">Undo</button>
        <button class="redo-btn" disabled title="Redo (Ctrl+Shift+Z)">Redo</button>
        <button class="clear-btn" title="Clear history">Clear</button>
    </div>

    <div class="settings-panel" hidden>
        <div class="settings-header">
            <span>Settings</span>
            <button class="close-settings-btn" title="Close">&times;</button>
        </div>
        <div class="settings-content">
            <label>
                <span>Max history length:</span>
                <input type="number" class="max-length-input" min="10" max="5000" step="10" value="2000">
            </label>
        </div>
    </div>
</div>
`,vo=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: 11px;
    color: var(--debug-text, #e8eaed);
    text-transform: none;
    letter-spacing: normal;
}

.history-panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 200px;
    max-height: 400px;
}

/* In compact mode flyout, use viewport-relative height */
:host-context([flyout-open]) .history-panel {
    max-height: 60vh;
}

.header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    flex-shrink: 0;
}

.title {
    font-weight: 600;
    color: var(--debug-text, #e8eaed);
}

.status {
    flex: 1;
    text-align: right;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
}

.settings-btn {
    background: none;
    border: none;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
}

.settings-btn:hover {
    color: var(--debug-text, #e8eaed);
    background: var(--debug-bg-hover, #1e2235);
}

/* Filter Row */
.filter-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    flex-shrink: 0;
}

.scope-label {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
    flex-shrink: 0;
}

.scope-select {
    flex: 1;
    padding: 3px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
    color: var(--debug-text, #e8eaed);
    font-family: inherit;
    font-size: 10px;
    cursor: pointer;
}

.scope-select:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.scope-select option {
    background: var(--debug-bg, #191c2d);
    color: var(--debug-text, #e8eaed);
}

/* Search Row */
.search-row {
    display: flex;
    gap: 4px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    flex-shrink: 0;
}

.search-input {
    flex: 1;
    padding: 4px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
    color: var(--debug-text, #e8eaed);
    font-family: inherit;
    font-size: 11px;
}

.search-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.search-input::placeholder {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.clear-search-btn {
    width: 24px;
    padding: 0;
    background: var(--debug-bg-section, #1a1d2e);
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 14px;
    cursor: pointer;
    display: none;
}

.clear-search-btn.visible {
    display: block;
}

.clear-search-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
}

.list-container {
    flex: 1;
    overflow-y: auto;
    position: relative;
}

.list {
    display: flex;
    flex-direction: column;
}

.empty-state {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
}

.list:not(:empty) + .empty-state {
    display: none;
}

.entry {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    cursor: pointer;
    border-left: 3px solid transparent;
    gap: 6px;
}

.entry:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.entry.current {
    border-left-color: var(--debug-accent, #4a90d9);
    background: rgba(74, 144, 217, 0.15);
}

.entry.future {
    opacity: 0.4;
}

.entry-indicator {
    width: 10px;
    flex-shrink: 0;
    color: var(--debug-accent, #4a90d9);
}

.entry-description {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.entry-time {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
    flex-shrink: 0;
}

.entry-scope {
    padding: 1px 4px;
    background: rgba(74, 144, 217, 0.2);
    border-radius: 2px;
    color: var(--debug-accent, #4a90d9);
    font-size: 9px;
    flex-shrink: 0;
    margin-left: auto;
}

.footer {
    display: flex;
    gap: 4px;
    padding: 6px 8px;
    border-top: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    flex-shrink: 0;
}

.footer button {
    flex: 1;
    padding: 4px 8px;
    background: var(--debug-bg-section, #1a1d2e);
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    color: var(--debug-text, #e8eaed);
    border-radius: 3px;
    cursor: pointer;
    font-size: 10px;
}

.footer button:hover:not(:disabled) {
    background: var(--debug-bg-hover, #1e2235);
}

.footer button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}

.footer .clear-btn {
    flex: 0;
    padding: 4px 6px;
    background: rgba(244, 67, 54, 0.15);
    border-color: rgba(244, 67, 54, 0.3);
}

.footer .clear-btn:hover {
    background: rgba(244, 67, 54, 0.25);
}

/* Settings Panel */
.settings-panel {
    position: absolute;
    top: 30px;
    right: 8px;
    background: var(--debug-bg, #191c2d);
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    z-index: 100;
    min-width: 200px;
}

.settings-panel[hidden] {
    display: none;
}

.settings-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 10px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    font-weight: 600;
}

.close-settings-btn {
    background: none;
    border: none;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
    padding: 0;
}

.close-settings-btn:hover {
    color: var(--debug-text, #e8eaed);
}

.settings-content {
    padding: 10px;
}

.settings-content label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
}

.settings-content input[type="number"] {
    width: 70px;
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
    color: var(--debug-text, #e8eaed);
    border-radius: 3px;
    font-size: 11px;
}

/* Scrollbar styling */
.list-container::-webkit-scrollbar {
    width: 6px;
}

.list-container::-webkit-scrollbar-track {
    background: var(--debug-bg, #191c2d);
}

.list-container::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
}

.list-container::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}
`,yo=`<div class="overlay">
    <div class="dialog">
        <div class="message"></div>
        <div class="buttons">
            <button class="btn btn-cancel">Cancel</button>
            <button class="btn btn-confirm">Confirm</button>
        </div>
    </div>
</div>
`,xo=`:host {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
    text-transform: none;
    letter-spacing: normal;
}

:host([open]) {
    display: block;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.dialog {
    background: var(--debug-bg, rgba(32, 32, 32, 0.98));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    padding: 16px 20px;
    min-width: 250px;
    max-width: 400px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.message {
    font-size: 12px;
    color: var(--debug-text, #e0e0e0);
    margin-bottom: 16px;
    line-height: 1.4;
    text-align: center;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
}

.btn {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    color: var(--debug-text, #e0e0e0);
    padding: 6px 14px;
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    transition: all 0.15s;
}

.btn:hover {
    border-color: var(--debug-border-light, rgba(80, 80, 80, 1));
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.btn-confirm {
    background: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
}

.btn-confirm:hover {
    background: #5a9fe9;
    border-color: #5a9fe9;
}
`;class me extends HTMLElement{static tagName="debug-confirm-dialog";shadow;initialized=!1;overlayEl;messageEl;cancelBtn;confirmBtn;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.initialized||(this.render(),this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${xo}</style>${yo}`,this.overlayEl=this.shadow.querySelector(".overlay"),this.messageEl=this.shadow.querySelector(".message"),this.cancelBtn=this.shadow.querySelector(".btn-cancel"),this.confirmBtn=this.shadow.querySelector(".btn-confirm")}setupEventListeners(){this.overlayEl.addEventListener("click",this.handleOverlayClick),this.cancelBtn.addEventListener("click",this.handleCancel),this.confirmBtn.addEventListener("click",this.handleConfirm),document.addEventListener("keydown",this.handleKeyDown)}cleanupEventListeners(){this.overlayEl.removeEventListener("click",this.handleOverlayClick),this.cancelBtn.removeEventListener("click",this.handleCancel),this.confirmBtn.removeEventListener("click",this.handleConfirm),document.removeEventListener("keydown",this.handleKeyDown)}handleOverlayClick=e=>{e.target===this.overlayEl&&this.cancel()};handleCancel=()=>{this.cancel()};handleConfirm=()=>{this.confirm()};handleKeyDown=e=>{this.hasAttribute("open")&&(e.key==="Escape"?this.cancel():e.key==="Enter"&&this.confirm())};setMessage(e){this.messageEl&&(this.messageEl.textContent=e)}open(){this.setAttribute("open",""),this.confirmBtn?.focus()}close(){this.removeAttribute("open")}cancel(){this.close(),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0}))}confirm(){this.close(),this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0}))}static show(e){return new Promise(t=>{const n=document.createElement(me.tagName);document.body.appendChild(n),n.setMessage(e),n.open();const s=()=>{n.remove()};n.addEventListener("confirm",()=>{s(),t(!0)},{once:!0}),n.addEventListener("cancel",()=>{s(),t(!1)},{once:!0})})}static register(){customElements.get(me.tagName)||customElements.define(me.tagName,me)}}me.register();class Ke extends V{static tagName="debug-history-panel";listEl;statusEl;emptyStateEl;undoBtn;redoBtn;clearBtn;settingsBtn;settingsPanel;closeSettingsBtn;maxLengthInput;searchInput;clearSearchBtn;scopeSelect;entries=[];pointer=-1;maxLength=300;searchTerm="";selectedScope="";canUndoGlobal=!1;canRedoGlobal=!1;canUndoScoped=!1;canRedoScoped=!1;render(){this.shadow.innerHTML=`<style>${vo}</style>${fo}`,this.listEl=this.$required(".list"),this.statusEl=this.$required(".status"),this.emptyStateEl=this.$required(".empty-state"),this.undoBtn=this.$required(".undo-btn"),this.redoBtn=this.$required(".redo-btn"),this.clearBtn=this.$required(".clear-btn"),this.settingsBtn=this.$required(".settings-btn"),this.settingsPanel=this.$required(".settings-panel"),this.closeSettingsBtn=this.$required(".close-settings-btn"),this.maxLengthInput=this.$required(".max-length-input"),this.searchInput=this.$required(".search-input"),this.clearSearchBtn=this.$required(".clear-search-btn"),this.scopeSelect=this.$required(".scope-select")}setupEventListeners(){this.undoBtn.addEventListener("click",this.handleUndo),this.redoBtn.addEventListener("click",this.handleRedo),this.clearBtn.addEventListener("click",this.handleClear),this.settingsBtn.addEventListener("click",this.handleSettingsToggle),this.closeSettingsBtn.addEventListener("click",this.handleSettingsClose),this.maxLengthInput.addEventListener("change",this.handleMaxLengthChange),this.listEl.addEventListener("click",this.handleEntryClick),this.searchInput.addEventListener("input",this.handleSearchInput),this.clearSearchBtn.addEventListener("click",this.handleClearSearch),this.scopeSelect.addEventListener("change",this.handleScopeChange)}cleanupEventListeners(){this.undoBtn.removeEventListener("click",this.handleUndo),this.redoBtn.removeEventListener("click",this.handleRedo),this.clearBtn.removeEventListener("click",this.handleClear),this.settingsBtn.removeEventListener("click",this.handleSettingsToggle),this.closeSettingsBtn.removeEventListener("click",this.handleSettingsClose),this.maxLengthInput.removeEventListener("change",this.handleMaxLengthChange),this.listEl.removeEventListener("click",this.handleEntryClick),this.searchInput.removeEventListener("input",this.handleSearchInput),this.clearSearchBtn.removeEventListener("click",this.handleClearSearch),this.scopeSelect.removeEventListener("change",this.handleScopeChange)}handleUndo=()=>{this.emit("undo",{scope:this.selectedScope||void 0})};handleRedo=()=>{this.emit("redo",{scope:this.selectedScope||void 0})};handleScopeChange=()=>{this.selectedScope=this.scopeSelect.value,this.updateButtons(),this.renderList(),this.emit("scope-change",{scope:this.selectedScope})};handleClear=async()=>{await me.show("Clear all history?")&&this.emit("clear")};handleSettingsToggle=()=>{this.settingsPanel.hidden=!this.settingsPanel.hidden};handleSettingsClose=()=>{this.settingsPanel.hidden=!0};handleMaxLengthChange=()=>{const e=parseInt(this.maxLengthInput.value,10);!isNaN(e)&&e>=10&&e<=1e3&&(this.maxLength=e,this.emit("settings-change",{maxLength:e}))};handleEntryClick=e=>{const n=e.target.closest(".entry");if(!n)return;const s=parseInt(n.dataset.index??"",10);isNaN(s)||this.emit("jump",{index:s})};handleSearchInput=()=>{this.searchTerm=this.searchInput.value.toLowerCase(),this.clearSearchBtn.classList.toggle("visible",this.searchTerm.length>0),this.renderList()};handleClearSearch=()=>{this.searchInput.value="",this.searchTerm="",this.clearSearchBtn.classList.remove("visible"),this.renderList()};update(e,t,n){this.entries=e,this.pointer=t,this.canUndoGlobal=n?.canUndo??t>=0,this.canRedoGlobal=n?.canRedo??t<e.length-1,this.canUndoScoped=n?.canUndoScoped??!1,this.canRedoScoped=n?.canRedoScoped??!1,n?.scopes&&this.updateScopeOptions(n.scopes),this.renderList(),this.updateButtons(),this.updateStatus()}updateScopeOptions(e){const t=this.scopeSelect.value;this.scopeSelect.innerHTML='<option value="">All</option>';for(const n of e){const s=document.createElement("option");s.value=n,s.textContent=n,this.scopeSelect.appendChild(s)}e.includes(t)?(this.scopeSelect.value=t,this.selectedScope=t):(this.scopeSelect.value="",this.selectedScope="")}setSettings(e){this.maxLength=e.maxHistoryLength,this.maxLengthInput.value=String(this.maxLength)}getSelectedScope(){return this.selectedScope}renderList(){this.listEl.innerHTML="";const e=[];for(let t=0;t<this.entries.length;t++){const n=this.entries[t],s=!this.searchTerm||n.description.toLowerCase().includes(this.searchTerm),i=!this.selectedScope||n.scope===this.selectedScope;s&&i&&e.push(t)}e.length===0?(this.searchTerm&&this.selectedScope?this.emptyStateEl.textContent="No matching entries":this.searchTerm?this.emptyStateEl.textContent="No matching entries":this.selectedScope?this.emptyStateEl.textContent=`No ${this.selectedScope} entries`:this.emptyStateEl.textContent="No history yet",this.emptyStateEl.style.display="block"):this.emptyStateEl.style.display="none";for(let t=e.length-1;t>=0;t--){const n=e[t],s=this.entries[n],i=n===this.pointer,o=n>this.pointer,a=!!s.scopedUndone,r=document.createElement("div");r.className="entry",i&&!a&&r.classList.add("current"),(o||a)&&r.classList.add("future"),r.dataset.index=String(n);const l=document.createElement("span");l.className="entry-indicator",l.textContent=i?"▸":"";const d=document.createElement("span");d.className="entry-description",d.textContent=s.description,d.title=s.description;const h=document.createElement("span");if(h.className="entry-time",h.textContent=this.formatTime(s.timestamp),!this.selectedScope&&s.scope){const u=document.createElement("span");u.className="entry-scope",u.textContent=s.scope,r.appendChild(l),r.appendChild(d),r.appendChild(u),r.appendChild(h)}else r.appendChild(l),r.appendChild(d),r.appendChild(h);this.listEl.appendChild(r)}}updateButtons(){this.selectedScope?(this.undoBtn.disabled=!this.canUndoScoped,this.redoBtn.disabled=!this.canRedoScoped):(this.undoBtn.disabled=!this.canUndoGlobal,this.redoBtn.disabled=!this.canRedoGlobal),this.clearBtn.disabled=this.entries.length===0}updateStatus(){const e=this.pointer+1,t=this.entries.length;this.statusEl.textContent=t>0?`${e}/${t}`:""}formatTime(e){const t=new Date(e),n=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0"),i=t.getSeconds().toString().padStart(2,"0");return`${n}:${s}:${i}`}static register(){customElements.get(Ke.tagName)||customElements.define(Ke.tagName,Ke)}}Ke.register();class ne{static instance;shortcuts=[];listeners=new Set;constructor(){}static getInstance(){return ne.instance||(ne.instance=new ne),ne.instance}register(e,t,n){const s=this.shortcuts.find(i=>i.tool===e&&i.key===t);s?s.description=n:this.shortcuts.push({tool:e,key:t,description:n}),this.notifyListeners()}registerMany(e,t){for(const{key:n,description:s}of t)this.register(e,n,s)}unregister(e){this.shortcuts=this.shortcuts.filter(t=>t.tool!==e),this.notifyListeners()}getGroupedByTool(){const e=new Map;for(const t of this.shortcuts){const n=e.get(t.tool);n?n.push(t):e.set(t.tool,[t])}return e}getAll(){return[...this.shortcuts]}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){for(const e of this.listeners)e()}}We.register();class Co{manager;element;sectionsContainer;sections=new Map;toolSections=new Map;historySection;historyPanel=null;historyUnsubscribe=null;hierarchySection;hierarchyTree=null;resourcesInspector=null;shortcutsSection;shortcutsContainer=null;shortcutsUnsubscribe=null;constructor(e){this.manager=e,this.element=document.createElement("debug-info-panel"),this.element.id="debug-info-panel-container";const t=document.createElement("span");t.slot="title",t.textContent="Info",this.element.appendChild(t),this.sectionsContainer=document.createElement("div"),this.sectionsContainer.className="debug-sections-container",this.element.appendChild(this.sectionsContainer),this.createCoreSections(),document.body.classList.add("debug-info-panel-active")}getElement(){return this.element}createCoreSections(){this.createHistorySection(),this.hierarchySection=new qe({id:"hierarchy",title:"Hierarchy",icon:"sitemap",collapsed:!1,order:2});const e=document.createElement("div");e.className="debug-button-row";const t=document.createElement("button");t.className="debug-button",t.textContent="Expand All",t.addEventListener("click",()=>this.hierarchyTree?.expandAll()),e.appendChild(t);const n=document.createElement("button");n.className="debug-button",n.textContent="Collapse",n.addEventListener("click",()=>this.hierarchyTree?.collapseAll()),e.appendChild(n);const s=document.createElement("button");s.className="debug-button",s.textContent="Refresh",s.addEventListener("click",()=>this.hierarchyTree?.refresh()),e.appendChild(s),this.hierarchySection.getContent().appendChild(e),this.hierarchyTree=new co(this.hierarchySection.getContent(),this.manager.context.scene,i=>this.manager.selection.onSelect(i),{expandRoot:!0,onSelectMultiple:i=>{const o=this.manager.outlinePass;o&&i.length>0&&o.setSelectedObjects(i)}}),this.addSection(this.hierarchySection),this.shortcutsSection=new qe({id:"shortcuts",title:"Shortcuts",icon:"keyboard",collapsed:!0,order:1e3}),this.createShortcutsUI(),this.addSection(this.shortcutsSection),this.shortcutsUnsubscribe=ne.getInstance().onChange(()=>{this.updateShortcutsUI()})}createHistorySection(){this.historySection=new qe({id:"history",title:"History",icon:"bookmark",collapsed:!0,order:0}),this.historyPanel=document.createElement(Ke.tagName),this.historyPanel.ensureInitialized(),this.historyPanel.addEventListener("undo",e=>{const{scope:t}=e.detail??{};t?this.manager.history.undoScoped(t):this.manager.history.undo()}),this.historyPanel.addEventListener("redo",e=>{const{scope:t}=e.detail??{};t?this.manager.history.redoScoped(t):this.manager.history.redo()}),this.historyPanel.addEventListener("clear",()=>{this.manager.history.clearHistory()}),this.historyPanel.addEventListener("jump",e=>{const{index:t}=e.detail;this.manager.history.jumpTo(t)}),this.historyPanel.addEventListener("settings-change",e=>{const{maxLength:t}=e.detail;this.manager.history.setSettings({maxHistoryLength:t})}),this.historyPanel.addEventListener("scope-change",e=>{const{scope:t}=e.detail;this.manager.history.setSelectedScope(t),this.updateHistoryPanel()}),this.historySection.getContent().appendChild(this.historyPanel),this.addSection(this.historySection),this.historyUnsubscribe=this.manager.history.on("change",()=>{this.updateHistoryPanel()}),setTimeout(()=>this.updateHistoryPanel(),100)}updateHistoryPanel(){if(!this.historyPanel)return;const e=this.manager.history,t=e.getHistory(),n=e.getPointer(),s=e.getSettings(),i=e.getAvailableScopes(),o=this.historyPanel.getSelectedScope();this.historyPanel.update(t,n,{scopes:i,canUndo:e.canUndo(),canRedo:e.canRedo(),canUndoScoped:o?e.canUndoScoped(o):!1,canRedoScoped:o?e.canRedoScoped(o):!1}),this.historyPanel.setSettings(s)}initResourcesInspector(e,t){this.resourcesInspector||(this.resourcesInspector=new bo(e,{scene:this.manager.context.scene,animationRegistry:t,onResourceSelect:(n,s)=>{const i=e.items[n];i&&"scene"in i&&this.manager.selection.onSelect(i.scene)},onImportSelect:n=>{this.manager.selection.onSelect(n.root)}}),this.sectionsContainer.appendChild(this.resourcesInspector.element))}addSection(e){this.sections.set(e.id,e),this.sectionsContainer.appendChild(e.element)}addToolSection(e){const t=e.id==="camera-inspector"?1:100+this.toolSections.size,n=new qe({id:`tool-${e.id}`,title:e.name,icon:e.icon,collapsed:!e.enabled,order:t,headerCheckbox:{checked:e.enabled,onChange:s=>{s?this.manager.enableTool(e.id):this.manager.disableTool(e.id)}}});e.createUI&&e.createUI(n.getContent()),n.setToolEnabled(e.enabled),this.toolSections.set(e.id,n),this.addSection(n)}updateToolState(e,t){const n=this.toolSections.get(e);n&&(n.setHeaderCheckboxState(t),n.setToolEnabled(t))}onSelectionChange(e){this.hierarchyTree?.setSelected(e)}updateScene(){this.hierarchyTree&&(this.hierarchyTree.setScene(this.manager.context.scene),this.hierarchyTree.refresh())}toggleCollapse(){this.element.toggleCollapse()}show(){this.element.show()}hide(){this.element.hide()}toggle(){this.element.toggle()}isVisible(){return this.element.isVisible()}createShortcutsUI(){this.shortcutsContainer=document.createElement("div"),this.shortcutsContainer.className="debug-shortcuts-list",this.shortcutsSection.getContent().appendChild(this.shortcutsContainer),this.updateShortcutsUI()}updateShortcutsUI(){if(!this.shortcutsContainer)return;this.shortcutsContainer.innerHTML="";const e=ne.getInstance().getGroupedByTool();if(e.size===0){const t=document.createElement("div");t.className="debug-text-muted",t.textContent="No shortcuts registered",this.shortcutsContainer.appendChild(t);return}for(const[t,n]of e){const s=document.createElement("div");s.className="debug-shortcut-group-header",s.textContent=t,this.shortcutsContainer.appendChild(s);for(const i of n){const o=document.createElement("div");o.className="debug-shortcut-row";const a=document.createElement("kbd");a.className="debug-shortcut-key",a.textContent=i.key,o.appendChild(a);const r=document.createElement("span");r.className="debug-shortcut-desc",r.textContent=i.description,o.appendChild(r),this.shortcutsContainer.appendChild(o)}}}dispose(){this.historyUnsubscribe?.(),this.historyUnsubscribe=null,this.historyPanel?.dispose(),this.historyPanel=null,this.hierarchyTree?.dispose(),this.hierarchyTree=null,this.resourcesInspector?.dispose(),this.resourcesInspector=null,this.shortcutsUnsubscribe?.(),this.shortcutsUnsubscribe=null,this.shortcutsContainer=null;for(const e of this.sections.values())e.dispose();this.sections.clear(),this.toolSections.clear(),this.element.remove(),document.body.classList.remove("debug-info-panel-active"),document.body.classList.remove("debug-info-panel-collapsed"),document.documentElement.style.removeProperty("--debug-info-panel-width")}}const Bs={maxHistoryLength:2e3,persistTweaks:!0},Ht=2;function $s(c){return typeof c=="object"&&c!==null&&"getState"in c&&"setState"in c&&typeof c.getState=="function"&&typeof c.setState=="function"}const wo="debug-history",ko=1,oe="state";class So{db=null;initPromise=null;dbName;constructor(e){this.dbName=`${wo}:${e}`}async init(){if(!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise((e,t)=>{const n=indexedDB.open(this.dbName,ko);n.onerror=()=>{t(new Error(`Failed to open IndexedDB: ${n.error?.message}`))},n.onsuccess=()=>{this.db=n.result,e()},n.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(oe)||i.createObjectStore(oe)}}),this.initPromise)}async get(e){return await this.init(),new Promise((t,n)=>{const o=this.db.transaction(oe,"readonly").objectStore(oe).get(e);o.onerror=()=>n(o.error),o.onsuccess=()=>t(o.result)})}async set(e,t){return await this.init(),new Promise((n,s)=>{const a=this.db.transaction(oe,"readwrite").objectStore(oe).put(t,e);a.onerror=()=>s(a.error),a.onsuccess=()=>n()})}async delete(e){return await this.init(),new Promise((t,n)=>{const o=this.db.transaction(oe,"readwrite").objectStore(oe).delete(e);o.onerror=()=>n(o.error),o.onsuccess=()=>t()})}async clear(){return await this.init(),new Promise((e,t)=>{const i=this.db.transaction(oe,"readwrite").objectStore(oe).clear();i.onerror=()=>t(i.error),i.onsuccess=()=>e()})}async getCurrentState(){const e=await this.get("current-state");if(e){if(e.version!==Ht){const t=this.migrateState(e);return await this.clearHistory(),t}return e}return this.createDefaultState()}async getHistory(){return await this.get("history")??[]}async clearHistory(){await this.set("history",[]),await this.set("history-pointer",-1)}async getHistoryPointer(){return await this.get("history-pointer")??-1}async getSettings(){return await this.get("settings")??{...Bs}}async saveAll(e,t,n,s){return await this.init(),new Promise((i,o)=>{const a=this.db.transaction(oe,"readwrite"),r=a.objectStore(oe);r.put(e,"current-state"),r.put(t,"history"),r.put(n,"history-pointer"),r.put(s,"settings"),a.oncomplete=()=>i(),a.onerror=()=>o(a.error)})}createDefaultState(){return{version:Ht,managerState:null,toolStates:{}}}migrateState(e){const t=e;return t.version===1||!t.managerState?this.createDefaultState():{...this.createDefaultState(),...e,version:Ht}}dispose(){this.db&&(this.db.close(),this.db=null),this.initPromise=null}}function we(c){return typeof c=="object"&&c!==null&&!Array.isArray(c)}function tn(c){return c.replace(/~/g,"~0").replace(/\//g,"~1")}function jt(c,e){if(c===e)return!0;if(typeof c!=typeof e)return!1;if(c===null||e===null)return c===e;if(Array.isArray(c)&&Array.isArray(e)){if(c.length!==e.length)return!1;for(let t=0;t<c.length;t++)if(!jt(c[t],e[t]))return!1;return!0}if(we(c)&&we(e)){const t=Object.keys(c),n=Object.keys(e);if(t.length!==n.length)return!1;for(const s of t)if(!Object.prototype.hasOwnProperty.call(e,s)||!jt(c[s],e[s]))return!1;return!0}return!1}function te(c){if(c===null||typeof c!="object")return c;if(Array.isArray(c))return c.map(te);const e={};for(const t of Object.keys(c))e[t]=te(c[t]);return e}function Hs(c,e,t=""){const n=[];if(jt(c,e))return n;if(typeof c!=typeof e||c===null||e===null||Array.isArray(c)!==Array.isArray(e))return c===void 0?n.push({op:"add",path:t||"/",value:te(e)}):e===void 0?n.push({op:"remove",path:t||"/"}):n.push({op:"replace",path:t||"/",value:te(e)}),n;if(Array.isArray(c)&&Array.isArray(e))return jt(c,e)||n.push({op:"replace",path:t||"/",value:te(e)}),n;if(we(c)&&we(e)){const s=new Set(Object.keys(c)),i=new Set(Object.keys(e));for(const o of s)i.has(o)||n.push({op:"remove",path:`${t}/${tn(o)}`});for(const o of i)s.has(o)||n.push({op:"add",path:`${t}/${tn(o)}`,value:te(e[o])});for(const o of s)if(i.has(o)){const a=Hs(c[o],e[o],`${t}/${tn(o)}`);n.push(...a)}return n}return n.push({op:"replace",path:t||"/",value:te(e)}),n}function Eo(c,e){const t=[];for(let n=c.length-1;n>=0;n--){const s=c[n],i=Lo(e,s.path);switch(s.op){case"add":t.push({op:"remove",path:s.path});break;case"remove":t.push({op:"add",path:s.path,value:te(i)});break;case"replace":t.push({op:"replace",path:s.path,value:te(i)});break}}return t}function Lo(c,e){if(e===""||e==="/")return c;const t=e.split("/").slice(1);let n=c;for(const s of t){const i=s.replace(/~1/g,"/").replace(/~0/g,"~");if(n==null)return;if(Array.isArray(n)){const o=parseInt(i,10);n=n[o]}else if(we(n))n=n[i];else return}return n}function To(c,e,t){if(e===""||e==="/")return t;const n=te(c),s=e.split("/").slice(1);let i=n;for(let a=0;a<s.length-1;a++){const r=s[a].replace(/~1/g,"/").replace(/~0/g,"~");if(Array.isArray(i)){const l=parseInt(r,10);i[l]===void 0&&(i[l]={}),i=i[l]}else we(i)&&(i[r]===void 0&&(i[r]={}),i=i[r])}const o=s[s.length-1].replace(/~1/g,"/").replace(/~0/g,"~");if(Array.isArray(i)){const a=parseInt(o,10);i[a]=t}else we(i)&&(i[o]=t);return n}function zo(c,e){if(e===""||e==="/")return;const t=te(c),n=e.split("/").slice(1);let s=t;for(let o=0;o<n.length-1;o++){const a=n[o].replace(/~1/g,"/").replace(/~0/g,"~");if(Array.isArray(s))s=s[parseInt(a,10)];else if(we(s))s=s[a];else return t;if(s===void 0)return t}const i=n[n.length-1].replace(/~1/g,"/").replace(/~0/g,"~");if(Array.isArray(s)){const o=parseInt(i,10);s.splice(o,1)}else we(s)&&delete s[i];return t}function Be(c,e){let t=c;for(const n of e)switch(n.op){case"add":case"replace":t=To(t,n.path,n.value);break;case"remove":t=zo(t,n.path);break}return t}function Po(c){const e=c.split("/").filter(Boolean);return e[0]==="toolStates"&&e[1]?e[1]:e[0]==="managerState"?"manager":e[0]==="tweakValues"?"tweaks":null}function Mo(c){const e=new Set;for(const t of c){const n=Po(t.path);n&&e.add(n)}return e}function Ln(c){if(!c)return null;const e=[];let t=c;for(;t;){if(!t.name){if(!t.parent){e.unshift("Scene");break}return null}e.unshift(t.name),t=t.parent}return e.join("/")}function Tn(c,e){if(!e)return null;const t=e.split("/");let n=c;const s=t[0],o=c.name===s||c.uuid===s||s==="Scene"?1:0;for(let a=o;a<t.length;a++){const r=t[a];if(!n)return null;const l=n.children.find(d=>d.name===r);if(!l)return null;n=l}return n}function Ft(c,e){const t={version:Ht,managerState:c.getManager().getState(),toolStates:{}};for(const n of c.getTools())$s(n)&&(t.toolStates[n.id]=n.getState());return e.persistTweaks&&c.getTweakValues&&(t.tweakValues=c.getTweakValues()),t}function Ao(c,e,t){e.getManager().setState(c.managerState);const n=e.getTools();for(const s of n)$s(s)&&c.toolStates[s.id]!==void 0&&s.setState(c.toolStates[s.id]);t.persistTweaks&&c.tweakValues&&e.setTweakValues&&e.setTweakValues(c.tweakValues)}class Io{store;log;currentState=null;history=[];pointer=-1;settings={...Bs};serializerContext=null;deserializerContext=null;persistTimer=null;PERSIST_DEBOUNCE_MS=500;listeners=new Map;isApplyingState=!1;isInitializing=!0;initPromise=null;initialized=!1;selectedScope="";constructor(e,t){this.log=e,this.store=new So(t)}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=this.doInit(),this.initPromise)}async doInit(){try{await this.store.init(),this.settings=await this.store.getSettings(),this.currentState=await this.store.getCurrentState();const e=await this.store.getHistory(),t=await this.store.getHistoryPointer();e.length>0?(this.history=e,this.pointer=t,this.log.info("Restored %d history entries, pointer at %d",this.history.length,this.pointer)):this.log.info("No persisted history, starting fresh"),this.initialized=!0,this.emit("change")}catch(e){this.log.err("Failed to initialize history manager: %s",e),this.currentState=null,this.history=[],this.pointer=-1,this.initialized=!0}}setSerializerContext(e){this.serializerContext=e}setDeserializerContext(e){this.deserializerContext=e}recordAction(e){if(this.isApplyingState||this.isInitializing)return;if(!this.serializerContext){this.log.warn("Cannot record action: serializer context not set");return}this.currentState||(this.currentState=Ft(this.serializerContext,this.settings),this.log.info("Captured initial state"));const t=te(this.currentState),n=Ft(this.serializerContext,this.settings),s=Hs(t,n);if(s.length===0){this.log.info("No changes detected for action: %s",e);return}this.log.info('Recording action "%s" with %d patches',e,s.length);const i=Eo(s,t),o=Mo(s),a=o.size===1?[...o][0]:o.size>1?[...o][0]:null,r={id:this.generateId(),timestamp:Date.now(),description:e,patches:s,reversePatches:i,scope:a};this.pointer<this.history.length-1&&(this.history=this.history.slice(0,this.pointer+1)),a&&(this.history=this.history.filter(l=>!(l.scope===a&&l.scopedUndone)),this.pointer=this.history.length-1),this.history.push(r),this.pointer=this.history.length-1,this.currentState=n,this.trimHistory(),this.schedulePersist(),this.emit("change"),this.log.info("Recorded action: %s (history: %d/%d)",e,this.pointer+1,this.history.length)}undo(){if(!this.canUndo())return this.log.info("Nothing to undo"),!1;const e=this.history[this.pointer];return this.log.info("Undoing: %s",e.description),this.currentState=Be(this.currentState,e.reversePatches),this.pointer--,this.applyCurrentState(),this.schedulePersist(),this.emit("change"),!0}redo(){if(!this.canRedo())return this.log.info("Nothing to redo"),!1;this.pointer++;const e=this.history[this.pointer];return this.log.info("Redoing: %s",e.description),this.currentState=Be(this.currentState,e.patches),this.applyCurrentState(),this.schedulePersist(),this.emit("change"),!0}jumpTo(e){if(e<-1||e>=this.history.length)return this.log.warn("Invalid history index: %d",e),!1;if(e===this.pointer)return!0;if(!this.currentState)return this.log.warn("No current state available"),!1;let t=te(this.currentState);if(e<this.pointer)for(let n=this.pointer;n>e;n--)t=Be(t,this.history[n].reversePatches);else for(let n=this.pointer+1;n<=e;n++)t=Be(t,this.history[n].patches);return this.currentState=t,this.pointer=e,this.applyCurrentState(),this.schedulePersist(),this.emit("change"),this.log.info("Jumped to history index %d",e),!0}canUndo(){return this.pointer>=0}canRedo(){return this.pointer<this.history.length-1}getHistory(){return this.history}getPointer(){return this.pointer}getAvailableScopes(){const e=new Set;for(const t of this.history)t.scope&&e.add(t.scope);return[...e].sort()}setSelectedScope(e){this.selectedScope=e}getSelectedScope(){return this.selectedScope}canUndoScoped(e){for(let t=this.pointer;t>=0;t--){const n=this.history[t];if(n.scope===e&&!n.scopedUndone)return!0}return!1}canRedoScoped(e){for(let t=this.pointer;t>=0;t--){const n=this.history[t];if(n.scope===e&&n.scopedUndone)return!0}return!1}undoScoped(e){let t=-1;for(let s=this.pointer;s>=0;s--){const i=this.history[s];if(i.scope===e&&!i.scopedUndone){t=s;break}}if(t<0)return this.log.info("Nothing to undo for scope: %s",e),!1;const n=this.history[t];return this.log.info("Scoped undo (%s): %s",e,n.description),this.currentState=Be(this.currentState,n.reversePatches),n.scopedUndone=!0,this.applyCurrentState(),this.schedulePersist(),this.emit("change"),!0}redoScoped(e){let t=-1;for(let s=this.pointer;s>=0;s--){const i=this.history[s];if(i.scope===e&&i.scopedUndone){t=s;break}}if(t<0)return this.log.info("Nothing to redo for scope: %s",e),!1;const n=this.history[t];return this.log.info("Scoped redo (%s): %s",e,n.description),this.currentState=Be(this.currentState,n.patches),n.scopedUndone=!1,this.applyCurrentState(),this.schedulePersist(),this.emit("change"),!0}getSettings(){return{...this.settings}}async setSettings(e){this.settings={...this.settings,...e},this.trimHistory(),await this.persist(),this.emit("settings-change")}async clearHistory(){this.history=[],this.pointer=-1,this.serializerContext&&(this.currentState=Ft(this.serializerContext,this.settings)),await this.persist(),this.emit("change"),this.log.info("History cleared")}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{this.listeners.get(e)?.delete(t)}}applyCurrentState(){if(!(!this.deserializerContext||!this.currentState)){this.isApplyingState=!0;try{Ao(this.currentState,this.deserializerContext,this.settings)}finally{this.isApplyingState=!1}}}trimHistory(){const e=this.settings.maxHistoryLength;if(this.history.length>e){const t=this.history.length-e;this.history=this.history.slice(t),this.pointer=Math.max(-1,this.pointer-t)}}schedulePersist(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>{this.persist().catch(e=>{this.log.err("Failed to persist history: %s",e)})},this.PERSIST_DEBOUNCE_MS)}persistNow(){this.persistTimer&&(clearTimeout(this.persistTimer),this.persistTimer=null),this.persist().catch(e=>{this.log.err("Failed to persist: %s",e)})}async persist(){if(this.currentState)try{await this.store.saveAll(this.currentState,this.history,this.pointer,this.settings)}catch(e){this.log.err("Failed to persist: %s",e)}}emit(e){const t=this.listeners.get(e);if(t)for(const n of t)n()}generateId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}refreshState(){if(!this.serializerContext){this.log.warn("Cannot refresh state: no serializer context");return}if(this.currentState&&this.history.length>0){this.log.info("Skipping refresh - already have %d history entries",this.history.length);return}this.currentState=Ft(this.serializerContext,this.settings),this.log.info("State refreshed"),this.schedulePersist()}restorePersistedState(){if(!this.currentState){this.log.info("No persisted state to restore");return}this.log.info("Restoring persisted state (history entries: %d)",this.history.length),this.applyCurrentState()}finishInitialization(){this.isInitializing=!1,this.log.info("Initialization complete, recording enabled")}isInitialized(){return this.initialized}getCurrentState(){return this.currentState}dispose(){this.persistTimer&&clearTimeout(this.persistTimer),this.store.dispose(),this.listeners.clear(),this.log.info("History manager disposed")}}const Do=`<div class="left-area">
    <slot name="left"></slot>
</div>
<div class="center-area">
    <slot name="center"></slot>
</div>
<div class="right-area">
    <slot name="right"></slot>
</div>
<div class="bottom-area">
    <slot name="bottom"></slot>
</div>
`,Ro=`/**
 * DebugLayout - Fullscreen grid container for debug UI elements.
 * Uses CSS Grid to position panels without complex CSS variable coordination.
 */

:host {
    position: fixed;
    inset: 0;
    z-index: 9998;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr auto;
    pointer-events: none;
}

/* ─────────────────────────────────────────────────────────────
 * Initializing state: block interaction + pulsing animation
 * ───────────────────────────────────────────────────────────── */
:host([initializing]) {
    pointer-events: none !important;
}

:host([initializing]) .left-area,
:host([initializing]) .right-area {
    pointer-events: none !important;
    animation: debug-pulse 1.2s ease-in-out infinite;
}

:host(:not([initializing])) .left-area,
:host(:not([initializing])) .right-area {
    transition: filter 0.3s ease-out;
}

@keyframes debug-pulse {
    0%, 100% { filter: grayscale(0.7); }
    50% { filter: grayscale(1); }
}

/* Left panel area - spans both rows by default */
.left-area {
    grid-column: 1;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    z-index: 1;
}

/* Right panel area - spans both rows by default */
.right-area {
    grid-column: 3;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    z-index: 1;
}

/* Center area - for perfs-gui and dialogs */
.center-area {
    grid-column: 2;
    grid-row: 1;
    pointer-events: none;
    position: relative;
    z-index: 0;
}

.center-area > * {
    pointer-events: auto;
}

/* Bottom panel area - center column only by default */
.bottom-area {
    grid-column: 2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    pointer-events: none;
    z-index: 2;
}

/* Panel containers need pointer-events for interaction */
.left-area > *,
.right-area > *,
.bottom-area > * {
    pointer-events: auto;
}

/* Override fixed positioning from slotted panel components */
::slotted(debug-panel) {
    position: relative !important;
    inset: auto !important;
    height: 100% !important;
    z-index: 1 !important;
}

::slotted(debug-info-panel) {
    position: relative !important;
    inset: auto !important;
    height: 100% !important;
    z-index: 1 !important;
}

::slotted(logs-panel) {
    position: relative !important;
    inset: auto !important;
    z-index: 2 !important;
}

::slotted(perfs-gui) {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: auto !important;
    bottom: auto !important;
}

::slotted(perfs-detail-dialog) {
    position: absolute !important;
    inset: 0 !important;
}

/* ─────────────────────────────────────────────────────────────
 * Left collapsed: left area row 1 only (button doesn't need full height)
 * ───────────────────────────────────────────────────────────── */
:host([left-collapsed]) .left-area {
    grid-row: 1;
}

/* ─────────────────────────────────────────────────────────────
 * Right collapsed: right area row 1 only
 * ───────────────────────────────────────────────────────────── */
:host([right-collapsed]) .right-area {
    grid-row: 1;
}

/* ─────────────────────────────────────────────────────────────
 * Left collapsed + logs collapsed:
 * left btn | screen | right panel
 * logs btn | screen | right panel
 * ───────────────────────────────────────────────────────────── */
:host([left-collapsed][logs-collapsed]) .bottom-area {
    grid-column: 1;
}

/* ─────────────────────────────────────────────────────────────
 * Right collapsed + logs collapsed:
 * left panel | screen | right btn
 * left panel | screen | logs btn
 * ───────────────────────────────────────────────────────────── */
:host([right-collapsed][logs-collapsed]) .bottom-area {
    grid-column: 3;
}

/* ─────────────────────────────────────────────────────────────
 * Both side panels collapsed (with or without logs):
 * Logs/button stays in center
 * ───────────────────────────────────────────────────────────── */
:host([left-collapsed][right-collapsed]) .bottom-area {
    grid-column: 2;
}
`;class Qe extends HTMLElement{static tagName="debug-layout";shadow;initialized=!1;logsObserver=null;leftPanelObserver=null;rightPanelObserver=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.initialized||(this.setAttribute("initializing",""),this.render(),this.initialized=!0)}setReady(){this.removeAttribute("initializing")}disconnectedCallback(){this.logsObserver?.disconnect(),this.logsObserver=null,this.leftPanelObserver?.disconnect(),this.leftPanelObserver=null,this.rightPanelObserver?.disconnect(),this.rightPanelObserver=null}render(){this.shadow.innerHTML=`<style>${Ro}</style>${Do}`}observeLogsPanel(e){this.updateLogsCollapsedState(e),this.logsObserver=new MutationObserver(()=>{this.updateLogsCollapsedState(e)}),this.logsObserver.observe(e,{attributes:!0,attributeFilter:["expanded"]})}updateLogsCollapsedState(e){e.hasAttribute("expanded")?this.removeAttribute("logs-collapsed"):this.setAttribute("logs-collapsed","")}observeLeftPanel(e){this.updateLeftCollapsedState(e),this.leftPanelObserver=new MutationObserver(()=>{this.updateLeftCollapsedState(e)}),this.leftPanelObserver.observe(e,{attributes:!0,attributeFilter:["collapsed"]})}updateLeftCollapsedState(e){e.hasAttribute("collapsed")?this.setAttribute("left-collapsed",""):this.removeAttribute("left-collapsed")}observeRightPanel(e){this.updateRightCollapsedState(e),this.rightPanelObserver=new MutationObserver(()=>{this.updateRightCollapsedState(e)}),this.rightPanelObserver.observe(e,{attributes:!0,attributeFilter:["collapsed"]})}updateRightCollapsedState(e){e.hasAttribute("collapsed")?this.setAttribute("right-collapsed",""):this.removeAttribute("right-collapsed")}addToLeft(e){e.slot="left",this.appendChild(e)}addToRight(e){e.slot="right",this.appendChild(e)}addToBottom(e){e.slot="bottom",this.appendChild(e)}addToCenter(e){e.slot="center",this.appendChild(e)}moveToSlot(e,t){e.slot=t,this.appendChild(e)}static register(){customElements.get(Qe.tagName)||customElements.define(Qe.tagName,Qe)}}Qe.register();const nn=[{id:"experience/PostProcessing",load:()=>ie(()=>import("./PostProcessing.debug-D9-ZQV1A.js"),__vite__mapDeps([0,1,2]))},{id:"experience/global",load:()=>ie(()=>import("./global.debug-CoxRyowJ.js"),[])},{id:"experience/lib/debug/AutoFrame",load:()=>ie(()=>import("./AutoFrame.debug-CtSX8I7M.js"),[])},{id:"experience/lib/effects/weather/Weather",load:()=>ie(()=>import("./Weather.debug-CK8l8PCs.js"),[])},{id:"experience/lib/optimisation/occlusion/OcclusionCulling",load:()=>ie(()=>import("./OcclusionCulling.debug-BkuiuH5Q.js"),[])},{id:"experience/lib/utils/sampling/TopIslandUVSampling",load:()=>ie(()=>import("./TopIslandUVSampling.debug-gxKJB_Ve.js"),__vite__mapDeps([3,1,2,4]))},{id:"experience/lib/utils/sampling/UVSampling",load:()=>ie(()=>import("./UVSampling.debug-CQqK9SqZ.js"),__vite__mapDeps([5,1,2,4]))},{id:"experience/scenes/distantTerrain/DistantTerrain",load:()=>ie(()=>import("./DistantTerrain.debug-bs8cTBbA.js"),__vite__mapDeps([6,1,2]))},{id:"experience/scenes/islands/MainIslands",load:()=>ie(()=>import("./MainIslands.debug-1d-tXgBs.js"),[])},{id:"experience/scenes/islands/campfire/Campfire",load:()=>ie(()=>import("./Campfire.debug-CCoEOQSK.js"),__vite__mapDeps([7,1,2]))},{id:"experience/scenes/islands/crystals/Crystals",load:()=>ie(()=>import("./Crystals.debug-DWOKWvvG.js"),__vite__mapDeps([8,1,2]))},{id:"experience/scenes/islands/waterfalls/Waterfalls",load:()=>ie(()=>import("./Waterfalls.debug-BM36iHvH.js"),__vite__mapDeps([9,1,2]))}];class _{panel="tools";enabled=!1;manager;init(e){this.manager=e}get scene(){return this.manager.context.scene}get engine(){return this.manager.context.engine}get camera(){return this.manager.context.engine.camera.instance}}const Fo=`<div class="audio-tool-panel">
    <div class="info-row">
        <span class="info-label">Master Volume</span>
        <span class="info-value master-volume">0%</span>
    </div>
    <div class="separator"></div>
    <div class="sources-container"></div>
</div>
`,No=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
}

.audio-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0;
}

.info-label {
    font-size: 11px;
    color: var(--debug-text-muted, #888);
}

.info-value {
    font-size: 11px;
}

.separator {
    height: 1px;
    background: var(--debug-border, #3c3c3c);
    margin: 6px 0;
}

.sources-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.empty-state {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 4px 0;
}

.no-audio {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 8px 0;
}
`,Bo=`<div class="debug-subsection">
    <div class="debug-subsection-header">
        <span class="debug-subsection-arrow"></span>
        <span class="subsection-title"></span>
        <input type="checkbox" class="subsection-checkbox" hidden>
    </div>
    <div class="debug-subsection-content">
        <slot></slot>
    </div>
</div>
`,$o=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.debug-subsection {
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    margin-bottom: 6px;
    overflow: hidden;
}

.debug-subsection-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    cursor: pointer;
    font-size: 11px;
    color: var(--debug-text-muted, #888);
    user-select: none;
}

.debug-subsection-header:hover {
    color: var(--debug-text, #e0e0e0);
    background: rgba(0, 0, 0, 0.35);
}

.debug-subsection-arrow {
    font-size: 8px;
    transition: transform 0.15s ease;
    display: inline-block;
    width: 10px;
}

.debug-subsection-arrow::before {
    content: '\\25B6'; /* Unicode triangle right */
}

.debug-subsection-arrow[hidden] {
    display: none;
}

.debug-subsection:not(.collapsed) .debug-subsection-arrow {
    transform: rotate(90deg);
}

/* No-fold mode: remove pointer cursor since clicking does nothing */
.debug-subsection.no-fold .debug-subsection-header {
    cursor: default;
}

/* No-fold mode: hide content container (no effects to show) */
.debug-subsection.no-fold .debug-subsection-content {
    display: none;
}

.subsection-title {
    flex: 1;
    font-size: 11px;
}

.subsection-checkbox {
    cursor: pointer;
    margin: 0;
    accent-color: var(--debug-accent, #4a90d9);
}

.subsection-checkbox[hidden] {
    display: none;
}

.debug-subsection-content {
    padding: 6px 8px;
}

.debug-subsection.collapsed .debug-subsection-content {
    display: none;
}
`;class O extends HTMLElement{static tagName="debug-subsection";shadow;initialized=!1;subsectionEl;headerEl;arrowEl;titleEl;checkboxEl;static get observedAttributes(){return["title","collapsed","with-checkbox","persist-id","no-fold"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render(),this.cacheElements()}connectedCallback(){if(this.initialized||(this.initialized=!0),this.setupEventListeners(),this.updateTitle(this.getAttribute("title")),this.updateCheckboxVisibility(this.hasAttribute("with-checkbox")),this.updateNoFold(this.hasAttribute("no-fold")),!this.hasAttribute("no-fold")){const e=this.getAttribute("persist-id");if(e){const t=Xt(e);this.updateCollapsed(t!==null?t:this.hasAttribute("collapsed"))}else this.updateCollapsed(this.hasAttribute("collapsed"))}}disconnectedCallback(){this.cleanupEventListeners()}attributeChangedCallback(e,t,n){if(this.initialized&&t!==n)switch(e){case"title":this.updateTitle(n);break;case"collapsed":this.updateCollapsed(n!==null);break;case"with-checkbox":this.updateCheckboxVisibility(n!==null);break;case"no-fold":this.updateNoFold(n!==null);break}}render(){this.shadow.innerHTML=`
            <style>${$o}</style>
            ${Bo}
        `}cacheElements(){this.subsectionEl=this.shadow.querySelector(".debug-subsection"),this.headerEl=this.shadow.querySelector(".debug-subsection-header"),this.arrowEl=this.shadow.querySelector(".debug-subsection-arrow"),this.titleEl=this.shadow.querySelector(".subsection-title"),this.checkboxEl=this.shadow.querySelector(".subsection-checkbox")}setupEventListeners(){this.headerEl.addEventListener("click",this.onHeaderClick),this.checkboxEl.addEventListener("click",this.onCheckboxClick),this.checkboxEl.addEventListener("change",this.onCheckboxChange)}cleanupEventListeners(){this.headerEl.removeEventListener("click",this.onHeaderClick),this.checkboxEl.removeEventListener("click",this.onCheckboxClick),this.checkboxEl.removeEventListener("change",this.onCheckboxChange)}onCheckboxClick=e=>{e.stopPropagation()};onCheckboxChange=()=>{this.dispatchEvent(new CustomEvent("checkbox-change",{bubbles:!0,composed:!0,detail:{checked:this.checkboxEl.checked}}))};onHeaderClick=()=>{this.hasAttribute("no-fold")||(this.toggle(),this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0,detail:{collapsed:this.isCollapsed()}})))};updateTitle(e){this.titleEl.textContent=e??""}updateCollapsed(e){this.subsectionEl.classList.toggle("collapsed",e)}persistCurrentState(){const e=this.getAttribute("persist-id");e&&Wt(e,this.isCollapsed())}updateCheckboxVisibility(e){this.checkboxEl.hidden=!e}updateNoFold(e){this.arrowEl.hidden=e,this.subsectionEl.classList.toggle("no-fold",e),e&&this.subsectionEl.classList.remove("collapsed")}isCollapsed(){return this.subsectionEl.classList.contains("collapsed")}expand(){this.subsectionEl.classList.remove("collapsed"),this.removeAttribute("collapsed"),this.persistCurrentState()}collapse(){this.subsectionEl.classList.add("collapsed"),this.setAttribute("collapsed",""),this.persistCurrentState()}toggle(){this.isCollapsed()?this.expand():this.collapse()}getContent(){return this}get withCheckbox(){return this.hasAttribute("with-checkbox")}set withCheckbox(e){e?this.setAttribute("with-checkbox",""):this.removeAttribute("with-checkbox")}isChecked(){return this.checkboxEl.checked}setChecked(e){this.checkboxEl.checked=e}static register(){customElements.get(O.tagName)||customElements.define(O.tagName,O)}}O.register();const Ho=`<div class="audio-source">
    <span class="status"></span>
    <span class="name"></span>
    <input type="range" class="slider" min="0" max="2" step="0.01" value="1">
    <span class="volume-value">1.00</span>
</div>
<div class="position-row">
    <span class="position-value">(0, 0, 0)</span>
</div>
`,Oo=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
}

.audio-source {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 0;
}

/* Status indicator (dot) */
.status {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--debug-text-muted, #888);
    flex-shrink: 0;
}

.status.playing {
    background: var(--debug-success, #4caf50);
    box-shadow: 0 0 4px var(--debug-success, #4caf50);
}

.status.looping {
    background: var(--debug-accent, #4a90d9);
    box-shadow: 0 0 4px var(--debug-accent, #4a90d9);
}

/* Name */
.name {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: none;
}

.name.playing {
    color: var(--debug-success, #4caf50);
}

:host([positional]) .name {
    cursor: pointer;
}

:host([positional]) .name:hover {
    color: var(--debug-accent, #4a90d9);
}

/* Volume slider */
.slider {
    width: 50px;
    height: 3px;
    -webkit-appearance: none;
    appearance: none;
    background: var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: 2px;
    cursor: pointer;
    flex-shrink: 0;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    background: var(--debug-accent, #4a90d9);
    border-radius: 50%;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background: var(--debug-accent, #4a90d9);
    border: none;
    border-radius: 50%;
    cursor: pointer;
}

/* Volume value */
.volume-value {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
    min-width: 24px;
    text-align: right;
}

/* Position row (only shown for positional audio) */
.position-row {
    display: none;
    padding-left: 12px;
    margin-top: -2px;
    margin-bottom: 4px;
}

:host([positional]) .position-row {
    display: block;
}

.position-value {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
}
`;class Ae extends HTMLElement{static tagName="debug-audio-source";shadow;initialized=!1;statusEl;nameEl;sliderEl;volumeValueEl;positionValueEl;static get observedAttributes(){return["name","positional"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render(),this.cacheElements()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners(),this.updateName(this.getAttribute("name"))}disconnectedCallback(){this.cleanupEventListeners()}attributeChangedCallback(e,t,n){this.initialized&&t!==n&&e==="name"&&this.updateName(n)}render(){this.shadow.innerHTML=`
            <style>${Oo}</style>
            ${Ho}
        `}cacheElements(){this.statusEl=this.shadow.querySelector(".status"),this.nameEl=this.shadow.querySelector(".name"),this.sliderEl=this.shadow.querySelector(".slider"),this.volumeValueEl=this.shadow.querySelector(".volume-value"),this.positionValueEl=this.shadow.querySelector(".position-value")}setupEventListeners(){this.sliderEl.addEventListener("input",this.onSliderInput),this.nameEl.addEventListener("click",this.onNameClick)}cleanupEventListeners(){this.sliderEl.removeEventListener("input",this.onSliderInput),this.nameEl.removeEventListener("click",this.onNameClick)}onSliderInput=()=>{const e=parseFloat(this.sliderEl.value);this.volumeValueEl.textContent=e.toFixed(2),this.sliderEl.title=`Volume: ${e.toFixed(2)}`,this.dispatchEvent(new CustomEvent("volume-change",{bubbles:!0,composed:!0,detail:{volume:e}}))};onNameClick=()=>{this.hasAttribute("positional")&&this.dispatchEvent(new CustomEvent("name-click",{bubbles:!0,composed:!0}))};updateName(e){this.nameEl.textContent=e??""}setVolume(e){this.sliderEl.value=String(e),this.volumeValueEl.textContent=e.toFixed(2),this.sliderEl.title=`Volume: ${e.toFixed(2)}`}getVolume(){return parseFloat(this.sliderEl.value)}setStatus(e){this.statusEl.className="status",e!=="stopped"&&this.statusEl.classList.add(e),this.statusEl.title=e.charAt(0).toUpperCase()+e.slice(1),this.nameEl.classList.toggle("playing",e!=="stopped")}setPosition(e,t,n){this.positionValueEl.textContent=`(${e.toFixed(1)}, ${t.toFixed(1)}, ${n.toFixed(1)})`}static register(){customElements.get(Ae.tagName)||customElements.define(Ae.tagName,Ae)}}Ae.register();O.register();Ae.register();class Je extends HTMLElement{static tagName="debug-audio-tool-panel";shadow;masterVolumeEl;sourcesContainer;sourceComponents=new Map;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){}disconnectedCallback(){}render(){this.shadow.innerHTML=`<style>${No}</style>${Fo}`,this.cacheElements()}cacheElements(){this.masterVolumeEl=this.shadow.querySelector(".master-volume"),this.sourcesContainer=this.shadow.querySelector(".sources-container")}setNoAudio(){this.sourcesContainer.innerHTML='<div class="no-audio">No audio system</div>'}setMasterVolume(e){this.masterVolumeEl.textContent=`${Math.round(e*100)}%`}setSources(e,t){if(this.sourcesContainer.innerHTML="",this.sourceComponents.clear(),e.length===0&&t.length===0){const n=document.createElement("div");n.className="empty-state",n.textContent="No sources",this.sourcesContainer.appendChild(n);return}if(e.length>0){const n=document.createElement(O.tagName);n.setAttribute("title","Positional"),n.setAttribute("persist-id","audio.positional"),n.setAttribute("collapsed",""),this.sourcesContainer.appendChild(n);for(const s of e)this.createSourceComponent(s,n)}if(t.length>0){const n=document.createElement(O.tagName);n.setAttribute("title","Global"),n.setAttribute("persist-id","audio.global"),n.setAttribute("collapsed",""),this.sourcesContainer.appendChild(n);for(const s of t)this.createSourceComponent(s,n)}}updateSource(e){const t=this.sourceComponents.get(e.name);t&&(t.setStatus(e.status),e.position&&t.setPosition(e.position.x,e.position.y,e.position.z))}clear(){this.sourcesContainer.innerHTML="",this.sourceComponents.clear()}createSourceComponent(e,t){const n=document.createElement(Ae.tagName);n.setAttribute("name",e.name),e.isPositional&&(n.setAttribute("positional",""),n.title="Click name to select"),n.addEventListener("volume-change",s=>{const i=s.detail;this.dispatchEvent(new CustomEvent("source-volume-change",{bubbles:!0,composed:!0,detail:{name:e.name,volume:i.volume}}))}),e.isPositional&&n.addEventListener("name-click",()=>{this.dispatchEvent(new CustomEvent("source-select",{bubbles:!0,composed:!0,detail:{name:e.name}}))}),t.appendChild(n),n.setVolume(e.initialVolume),this.sourceComponents.set(e.name,n)}static register(){customElements.get(Je.tagName)||customElements.define(Je.tagName,Je)}}Je.register();class Vo extends _{id="audio";name="Audio";icon="volume";panelElement=null;sourceRefs=[];lastAudioSourceCount=0;enable(){const e=this.engine.audio;e&&e.enable()}disable(){const e=this.engine.audio;e&&e.disable()}update(e){const t=this.engine.audio;if(!t||!this.panelElement)return;const n=Object.keys(t.items).length;if(n!==this.lastAudioSourceCount&&(this.lastAudioSourceCount=n,this.refreshSources()),!this.enabled)return;const s=t.listener.getMasterVolume();this.panelElement.setMasterVolume(s);for(const i of this.sourceRefs){const o=i.source,a=o.isPlaying,r=o.getLoop();let l="stopped";a&&(l=r?"looping":"playing");const d=new v;i.isPositional&&o instanceof Vt&&o.getWorldPosition(d),this.panelElement.updateSource({name:i.name,status:l,position:i.isPositional?{x:d.x,y:d.y,z:d.z}:void 0})}}alwaysUpdate=!0;createUI(e){const t=this.engine.audio;if(this.panelElement=document.createElement(Je.tagName),!t){this.panelElement.setNoAudio(),e.appendChild(this.panelElement);return}this.panelElement.addEventListener("source-volume-change",n=>{const{name:s,volume:i}=n.detail;this.onVolumeChange(s,i)}),this.panelElement.addEventListener("source-select",n=>{const{name:s}=n.detail;this.onSourceSelect(s)}),e.appendChild(this.panelElement),this.refreshSources()}refreshSources(){const e=this.engine.audio;if(!e||!this.panelElement)return;this.sourceRefs=[];const t=e.items,n=Object.keys(t).sort((o,a)=>o.localeCompare(a));this.lastAudioSourceCount=n.length;const s=[],i=[];for(const o of n){const a=t[o],r=a instanceof Vt,d=a.userData.initialVolume??1,h={name:o,isPositional:r,initialVolume:d};r?s.push(h):i.push(h),this.sourceRefs.push({name:o,source:a,isPositional:r})}this.panelElement.setSources(s,i)}onVolumeChange(e,t){const n=this.sourceRefs.find(i=>i.name===e);if(!n)return;const s=n.source.userData;s.initialVolume=t}onSourceSelect(e){const t=this.sourceRefs.find(n=>n.name===e);!t||!t.isPositional||this.manager.selection.onSelect(t.source)}dispose(){this.sourceRefs=[],this.panelElement=null}}const qo=`<div class="pp-tool-panel">
    <button class="reset-btn">Reset All</button>
    <div class="passes-list"></div>
</div>
`,Uo=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
}

.pp-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.reset-btn {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-size: 11px;
    margin-bottom: 4px;
}

.reset-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.passes-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.empty-state {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 8px 0;
}
`;O.register();class et extends HTMLElement{static tagName="debug-postprocessing-tool-panel";shadow;resetBtn;passesList;passSubsections=new Map;listenersSet=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.listenersSet||(this.setupEventListeners(),this.listenersSet=!0)}disconnectedCallback(){}render(){this.shadow.innerHTML=`<style>${Uo}</style>${qo}`,this.cacheElements()}cacheElements(){this.resetBtn=this.shadow.querySelector(".reset-btn"),this.passesList=this.shadow.querySelector(".passes-list")}setupEventListeners(){this.resetBtn.addEventListener("click",this.onResetClick)}cleanupEventListeners(){this.resetBtn.removeEventListener("click",this.onResetClick)}onResetClick=()=>{this.dispatchEvent(new CustomEvent("reset",{bubbles:!0,composed:!0}))};setPasses(e){if(this.passesList.innerHTML="",this.passSubsections.clear(),e.length===0){const t=document.createElement("div");t.className="empty-state",t.textContent="No passes registered",this.passesList.appendChild(t);return}for(const t of e){const n=this.createPassSubsection(t);this.passesList.appendChild(n),this.passSubsections.set(t.name,n)}}setPassEnabled(e,t){const n=this.passSubsections.get(e);n&&n.setChecked(t)}clear(){this.passesList.innerHTML="",this.passSubsections.clear()}createPassSubsection(e){const t=e.effects.length>0,n=document.createElement(O.tagName);n.setAttribute("title",e.name),n.setAttribute("with-checkbox",""),n.setAttribute("persist-id",`pp.${e.name}`),t?n.setAttribute("collapsed",""):n.setAttribute("no-fold",""),n.setChecked(e.enabled),n.addEventListener("checkbox-change",s=>{const i=s.detail;this.dispatchEvent(new CustomEvent("pass-change",{bubbles:!0,composed:!0,detail:{name:e.name,enabled:i.checked}}))});for(const s of e.effects){const i=document.createElement("div");i.className="debug-checkbox-row";const o=document.createElement("input");o.type="checkbox",o.checked=s.enabled,o.id=`pp-effect-${e.name}-${s.name}`,o.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("effect-change",{bubbles:!0,composed:!0,detail:{passName:e.name,effectName:s.name,enabled:o.checked}}))});const a=document.createElement("label");a.htmlFor=o.id,a.textContent=s.name,i.appendChild(o),i.appendChild(a),n.appendChild(i)}return n}static register(){customElements.get(et.tagName)||customElements.define(et.tagName,et)}}et.register();const sn="pp:pass:",on="pp:effect:";class _o extends _{id="postprocessing";name="Post Processing";icon="layers";panelElement=null;lastPassCount=0;enable(){}disable(){}update(e){const t=this.engine.getPostProcessing();if(!t||!this.panelElement)return;const n=t.getRegisteredPassNames().length;n!==this.lastPassCount&&n>0&&this.refreshPasses()}alwaysUpdate=!0;createUI(e){this.panelElement=document.createElement(et.tagName),this.panelElement.addEventListener("reset",()=>this.resetAllStates()),this.panelElement.addEventListener("pass-change",t=>{const{name:n,enabled:s}=t.detail;this.onPassChange(n,s)}),this.panelElement.addEventListener("effect-change",t=>{const{passName:n,effectName:s,enabled:i}=t.detail;this.onEffectChange(n,s,i)}),e.appendChild(this.panelElement),this.refreshPasses()}refreshPasses(){const e=this.engine.getPostProcessing();if(!e||!this.panelElement)return;const t=e.getRegisteredPassNames();this.lastPassCount=t.length;const n=t.map(s=>{const i=F.getProject(sn+s),o=i??e.isPassEnabled(s);i!==null&&i!==e.isPassEnabled(s)&&e.setPassEnabled(s,i);const a=e.getPassEffects(s).map(r=>{const l=`${s}:${r.name}`,d=F.getProject(on+l),h=d??r.enabled;return d!==null&&d!==e.isEffectEnabled(s,r.name)&&e.setEffectEnabled(s,r.name,d),{name:r.name,enabled:h}});return{name:s,enabled:o,effects:a}});this.panelElement.setPasses(n)}onPassChange(e,t){const n=this.engine.getPostProcessing();n&&(n.setPassEnabled(e,t),F.setProject(sn+e,t))}onEffectChange(e,t,n){const s=this.engine.getPostProcessing();s&&(s.setEffectEnabled(e,t,n),F.setProject(on+`${e}:${t}`,n))}resetAllStates(){const e=this.engine.getPostProcessing();if(!e)return;const t=e.getRegisteredPassNames();for(const n of t){F.removeProject(sn+n),e.setPassEnabled(n,!0);const s=e.getPassEffects(n);for(const i of s)F.removeProject(on+`${n}:${i.name}`),e.setEffectEnabled(n,i.name,!0)}this.refreshPasses()}dispose(){this.panelElement=null}}class jo{scene;ambientLight;directionalLight;componentContainer;log;currentComponent=null;constructor(e){this.log=e,this.scene=new Cn,this.scene.name="__lab_scene__",this.scene.background=new N(1710618),this.ambientLight=new si(16777215,.5),this.ambientLight.name="__debug_ambient_light__",this.scene.add(this.ambientLight),this.directionalLight=new vt(16777215,1),this.directionalLight.name="__debug_directional_light__",this.directionalLight.position.set(10,20,10),this.directionalLight.castShadow=!0,this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=100,this.directionalLight.shadow.camera.left=-25,this.directionalLight.shadow.camera.right=25,this.directionalLight.shadow.camera.top=25,this.directionalLight.shadow.camera.bottom=-25,this.scene.add(this.directionalLight),this.componentContainer=new Ut,this.componentContainer.name="__lab_component_container__",this.scene.add(this.componentContainer),this.log.info("Lab scene created")}loadComponent(e){this.unloadComponent(),this.currentComponent=e,this.componentContainer.add(e),this.log.info(`Loaded component: "${e.name||e.uuid}"`)}unloadComponent(){this.currentComponent&&(this.componentContainer.remove(this.currentComponent),this.log.info(`Unloaded component: "${this.currentComponent.name||this.currentComponent.uuid}"`),this.currentComponent=null)}getComponent(){return this.currentComponent}setBackgroundColor(e){this.scene.background=new N(e)}setAmbientIntensity(e){this.ambientLight.intensity=e}setDirectionalIntensity(e){this.directionalLight.intensity=e}dispose(){this.unloadComponent(),this.scene.clear(),this.log.info("Lab scene disposed")}}class Go{instance;frustumHelper;canvas;sensitivity;damping;speed;enabled=!1;keyboardEnabled=!0;isDragging=!1;previousPointerPosition={x:0,y:0};yaw=0;pitch=0;targetYaw=0;targetPitch=0;euler;direction;velocity;targetVelocity;keysPressed=new Set;constructor({canvas:e,position:t=[5,3,5],target:n=[0,0,0],speed:s=5,sensitivity:i=.003,damping:o=.1}){this.canvas=e,this.speed=s,this.sensitivity=i,this.damping=o,this.instance=new zt(60,1,.1,1e3),this.instance.name="__lab_camera__",this.frustumHelper=new wn(this.instance),this.frustumHelper.name="__lab_camera_helper__",this.euler=new kn(0,0,0,"YXZ"),this.direction=new v,this.velocity=new v,this.targetVelocity=new v,this.setPosition(...t),this.setTarget(...n),this.setupEventListeners()}setupEventListeners(){document.addEventListener("pointerdown",this.onPointerDown),document.addEventListener("pointermove",this.onPointerMove),document.addEventListener("pointerup",this.onPointerUp),document.addEventListener("pointerleave",this.onPointerUp),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)}isPointerOnCanvas(e){const t=this.canvas.getBoundingClientRect();return e.clientX>=t.left&&e.clientX<=t.right&&e.clientY>=t.top&&e.clientY<=t.bottom}onPointerDown=e=>{this.enabled&&this.isPointerOnCanvas(e)&&(this.isDragging=!0,this.previousPointerPosition={x:e.clientX,y:e.clientY})};onPointerMove=e=>{if(!this.enabled||!this.isDragging)return;const t=e.clientX-this.previousPointerPosition.x,n=e.clientY-this.previousPointerPosition.y;this.previousPointerPosition={x:e.clientX,y:e.clientY},this.targetYaw-=t*this.sensitivity,this.targetPitch-=n*this.sensitivity;const s=Math.PI/2-.1;this.targetPitch=H.clamp(this.targetPitch,-s,s)};onPointerUp=()=>{this.isDragging=!1};onKeyDown=e=>{!this.enabled||!this.keyboardEnabled||this.keysPressed.add(e.code)};onKeyUp=e=>{this.keysPressed.delete(e.code)};initFromCamera(){const e=this.instance.getWorldDirection(new v);this.yaw=Math.atan2(-e.x,-e.z),this.pitch=Math.asin(H.clamp(e.y,-1,1)),this.targetYaw=this.yaw,this.targetPitch=this.pitch}setPosition(e,t,n){this.instance.position.set(e,t,n),this.instance.updateMatrixWorld(),this.frustumHelper.update()}setTarget(e,t,n){this.instance.lookAt(e,t,n),this.instance.updateMatrixWorld(),this.initFromCamera(),this.frustumHelper.update()}setSpeed(e){this.speed=e}getSpeed(){return this.speed}getPosition(){return this.instance.position.clone()}getPositionArray(){const e=this.instance.position;return[e.x,e.y,e.z]}getTargetArray(){const e=this.instance.getWorldDirection(new v),t=this.instance.position.clone().add(e.multiplyScalar(5));return[t.x,t.y,t.z]}getDirection(){return this.instance.getWorldDirection(new v)}move(e,t){const n=e.clone().normalize().multiplyScalar(this.speed*t);n.applyQuaternion(this.instance.quaternion),this.instance.position.add(n),this.instance.updateMatrixWorld(),this.frustumHelper.update()}rotate(e,t){this.targetYaw-=e,this.targetPitch+=t;const n=Math.PI/2-.1;this.targetPitch=H.clamp(this.targetPitch,-n,n),this.yaw=this.targetYaw,this.pitch=this.targetPitch,this.euler.set(this.pitch,this.yaw,0,"YXZ"),this.instance.quaternion.setFromEuler(this.euler),this.instance.updateMatrixWorld(),this.frustumHelper.update()}getFov(){return this.instance.fov}setFov(e){this.instance.fov=e,this.instance.updateProjectionMatrix(),this.frustumHelper.update()}setAspect(e){!e||!Number.isFinite(e)||(this.instance.aspect=e,this.instance.updateProjectionMatrix(),this.frustumHelper.update())}enable(){this.enabled=!0,this.keysPressed.clear(),this.velocity.set(0,0,0),this.targetVelocity.set(0,0,0)}disable(){this.enabled=!1,this.isDragging=!1,this.keysPressed.clear()}isEnabled(){return this.enabled}setKeyboardEnabled(e){this.keyboardEnabled=e,e||(this.keysPressed.clear(),this.velocity.set(0,0,0),this.targetVelocity.set(0,0,0))}update(e){if(!this.enabled)return;this.yaw+=(this.targetYaw-this.yaw)*this.damping,this.pitch+=(this.targetPitch-this.pitch)*this.damping,this.euler.set(this.pitch,this.yaw,0,"YXZ"),this.instance.quaternion.setFromEuler(this.euler),this.targetVelocity.set(0,0,0);const t=this.keysPressed.has("ArrowUp")||this.keysPressed.has("KeyW"),n=this.keysPressed.has("ArrowDown")||this.keysPressed.has("KeyS"),s=this.keysPressed.has("ArrowLeft")||this.keysPressed.has("KeyA"),i=this.keysPressed.has("ArrowRight")||this.keysPressed.has("KeyD"),o=this.keysPressed.has("Space"),a=this.keysPressed.has("ShiftLeft")||this.keysPressed.has("ShiftRight");t&&(this.targetVelocity.z-=1),n&&(this.targetVelocity.z+=1),s&&(this.targetVelocity.x-=1),i&&(this.targetVelocity.x+=1),o&&(this.targetVelocity.y+=1),a&&(this.targetVelocity.y-=1),this.targetVelocity.lengthSq()>0&&this.targetVelocity.normalize().multiplyScalar(this.speed),this.velocity.lerp(this.targetVelocity,this.damping),this.velocity.lengthSq()>1e-4&&(this.direction.copy(this.velocity).multiplyScalar(e),this.direction.applyQuaternion(this.instance.quaternion),this.instance.position.add(this.direction)),this.instance.updateMatrixWorld(),this.frustumHelper.update()}dispose(){document.removeEventListener("pointerdown",this.onPointerDown),document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerUp),document.removeEventListener("pointerleave",this.onPointerUp),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),this.frustumHelper.dispose()}}const Wn={fillRatio:.5,elevationAngle:Math.PI/6,azimuthAngle:Math.PI/4,centerVertically:!1};class Wo{box=new Is;center=new v;size=new v;sphere=new Ds;centerAtOrigin(e,t=!1){return this.box.setFromObject(e),this.box.isEmpty()?this.box:(this.box.getCenter(this.center),t||(this.center.y=0),e.position.sub(this.center),this.box.setFromObject(e),this.box)}frame(e,t,n={}){const s={...Wn,...n};if(e.isEmpty()){t.setPosition(5,3,5),t.setTarget(0,0,0);return}e.getBoundingSphere(this.sphere);const i=this.sphere.radius,o=H.degToRad(t.instance.fov),a=i/(Math.tan(o/2)*s.fillRatio),r=a*Math.cos(s.elevationAngle)*Math.sin(s.azimuthAngle),l=a*Math.sin(s.elevationAngle),d=a*Math.cos(s.elevationAngle)*Math.cos(s.azimuthAngle);t.setPosition(r,l,d),t.setTarget(0,0,0)}centerAndFrame(e,t,n={}){const s={...Wn,...n},i=this.centerAtOrigin(e,s.centerVertically);this.frame(i,t,s)}}class Xo{components=new Map;loaded=new Map;listeners=new Set;log;constructor(e){this.log=e}register(e){this.components.has(e.id)&&this.log.warn(`Component "${e.id}" already registered, overwriting`),this.components.set(e.id,e),this.log.info(`Registered component: "${e.name}" (${e.id})`),this.notifyListeners()}unregister(e){this.components.has(e)&&(this.components.delete(e),this.log.info(`Unregistered component: ${e}`),this.notifyListeners())}getAll(){return Array.from(this.components.values())}getByCategory(e){return this.getAll().filter(t=>t.category===e)}getCategories(){const e=new Set;for(const t of this.components.values())e.add(t.category);return Array.from(e).sort()}get(e){return this.components.get(e)}async load(e,t){const n=this.components.get(e);if(!n)return this.log.err(`Component not found: ${e}`),null;if(this.loaded.has(e))return this.log.warn(`Component "${e}" already loaded`),this.loaded.get(e).instance;try{this.log.info(`Loading component: "${n.name}"`),n.requiredResources&&n.requiredResources.length>0&&this.log.info(`Loading required resources: ${n.requiredResources.join(", ")}`);const s=await Promise.resolve(n.create(t));return s.name=s.name||n.name,this.loaded.set(e,{config:n,instance:s}),this.log.info(`Component loaded: "${n.name}"`),this.notifyListeners(),s}catch(s){const i=s instanceof Error?s:new Error(String(s));return this.log.err(`Failed to load component "${n.name}": ${i.stack??i}`),null}}unload(e){const t=this.loaded.get(e);if(!t)return;const{config:n,instance:s}=t;try{n.dispose&&n.dispose(s),this.log.info(`Component unloaded: "${n.name}"`)}catch(i){const o=i instanceof Error?i:new Error(String(i));this.log.err(`Error unloading component "${n.name}": ${o.stack??o}`)}this.loaded.delete(e),this.notifyListeners()}isLoaded(e){return this.loaded.has(e)}getInstance(e){return this.loaded.get(e)?.instance??null}onChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notifyListeners(){for(const e of this.listeners)e()}dispose(){for(const e of this.loaded.keys())this.unload(e);this.components.clear(),this.listeners.clear(),this.log.info("Registry disposed")}}const Yo=`<div class="lab-tool-panel">
    <!-- Scene subsection will be created dynamically -->
    <!-- Options subsection will be created dynamically -->
    <!-- Components subsection will be created dynamically -->
</div>
`,Zo=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
}

.lab-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0;
}

.info-label {
    font-size: 11px;
    color: var(--debug-text-muted, #888);
}

.debug-input {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 6px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 11px;
    width: 60px;
}

.debug-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

input[type="color"] {
    width: 32px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    cursor: pointer;
    background: transparent;
}

input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 2px;
}

input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
}

input[type="checkbox"] {
    cursor: pointer;
}

/* Options container */
.options-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.options-empty {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 4px 0;
}

/* Components list */
.components-info {
    color: var(--debug-text-muted, #888);
    font-size: 10px;
    padding: 4px 0;
}

.component-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.component-list-empty {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 4px 0;
}

.category-header {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    padding: 4px 0 2px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.component-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0;
}

.component-name {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
}

.component-name.active {
    color: var(--debug-accent, #4a90d9);
    font-weight: bold;
}

.button-small {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 2px 8px;
    border-radius: 3px;
    cursor: pointer;
    font-family: inherit;
    font-size: 10px;
}

.button-small:hover:not(:disabled) {
    border-color: var(--debug-accent, #4a90d9);
}

.button-small:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
`,Ko=`<div class="tweaks-tool-panel">
    <div class="header">
        <label class="auto-track">
            <input type="checkbox" class="auto-track-checkbox" checked>
            <span>Auto-track changes</span>
        </label>
        <div class="header-actions">
            <button class="reset-all-btn" title="Reset all to original" disabled>Reset All</button>
        </div>
    </div>

    <debug-subsection title="Changed Values" persist-id="labTweaks.overrides">
        <div class="overrides-content">
            <div class="overrides-header">
                <span class="override-count">0</span>
                <button class="copy-btn" title="Copy to clipboard" disabled>Copy</button>
            </div>
            <div class="overrides-list"></div>
            <div class="empty-state">No changes tracked</div>
        </div>
    </debug-subsection>

    <debug-subsection title="Presets" persist-id="labTweaks.presets">
        <div class="presets-content">
            <div class="presets-header">
                <button class="add-bookmark-btn" title="Save current changes as preset">+</button>
            </div>
            <div class="bookmarks-list"></div>
            <div class="bookmarks-empty">No presets saved</div>
        </div>
    </debug-subsection>
</div>
`,Qo=`/**
 * TweaksToolPanel styles - Astro Darkrise theme
 */

:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', 'Courier New', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e8eaed);
}

.tweaks-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
}

.auto-track {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    user-select: none;
    font-size: 11px;
}

.auto-track-checkbox {
    width: 14px;
    height: 14px;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.header-actions {
    display: flex;
    gap: 6px;
}

.reset-all-btn {
    padding: 4px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-error, #f44336);
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-error, #f44336);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    cursor: pointer;
    transition: background 0.15s;
}

.reset-all-btn:hover:not(:disabled) {
    background: rgba(244, 67, 54, 0.2);
}

.reset-all-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Content sections */
.overrides-content,
.presets-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.overrides-header,
.presets-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
}

.override-count {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 10px;
    min-width: 16px;
    text-align: center;
}

.override-count.has-changes {
    background: rgba(76, 175, 80, 0.2);
    color: var(--debug-success, #4caf50);
}

.copy-btn {
    padding: 2px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.copy-btn:hover:not(:disabled) {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
    background: rgba(74, 144, 217, 0.15);
}

.copy-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Overrides list */
.overrides-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 300px;
    overflow-y: auto;
}

.empty-state,
.bookmarks-empty {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
    padding: 8px;
    text-align: center;
    font-size: 11px;
}

/* Folder group */
.folder-group {
    margin-bottom: 4px;
}

.folder-header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    background: var(--debug-bg-section, #1a1d2e);
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
}

.folder-header:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.folder-icon {
    font-size: 10px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    width: 12px;
}

.folder-name {
    flex: 1;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 11px;
}

.folder-count {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
}

.folder-entries {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-left: 16px;
    margin-top: 2px;
}

.folder-entries.collapsed {
    display: none;
}

/* Override entry */
.override-entry {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border-radius: var(--debug-radius, 4px);
    transition: background 0.15s;
}

.override-entry:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.entry-name {
    flex: 1;
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.entry-values {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--debug-font, monospace);
    font-size: 10px;
}

.entry-original {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    text-decoration: line-through;
}

.entry-arrow {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.entry-current {
    color: var(--debug-success, #4caf50);
}

.entry-color-swatch {
    width: 12px;
    height: 12px;
    border-radius: var(--debug-radius, 4px);
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
}

.entry-reset-btn {
    padding: 2px 4px;
    background: transparent;
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s, background 0.15s, border-color 0.15s;
}

.override-entry:hover .entry-reset-btn {
    opacity: 1;
}

.entry-reset-btn:hover {
    background: rgba(244, 67, 54, 0.2);
    border-color: var(--debug-error, #f44336);
    color: var(--debug-error, #f44336);
}

/* Bookmarks */
.add-bookmark-btn {
    width: 20px;
    height: 20px;
    padding: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.add-bookmark-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
}

.add-bookmark-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.bookmarks-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 200px;
    overflow-y: auto;
}

.bookmark-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    transition: background 0.15s;
}

.bookmark-item:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.bookmark-item.starred {
    border-left: 2px solid var(--debug-warning, #ff9800);
    padding-left: 6px;
}

.bookmark-star-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    transition: color 0.15s;
}

.bookmark-star-btn:hover {
    color: var(--debug-warning, #ff9800);
}

.bookmark-star-btn.starred {
    color: var(--debug-warning, #ff9800);
}

.bookmark-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.bookmark-name {
    color: var(--debug-text, #e8eaed);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.bookmark-meta {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
}

.bookmark-delete-btn {
    background: none;
    border: none;
    padding: 2px 4px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 14px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s, color 0.15s;
}

.bookmark-item:hover .bookmark-delete-btn {
    opacity: 1;
}

.bookmark-delete-btn:hover {
    color: var(--debug-error, #f44336);
}

/* Edit input */
.bookmark-edit-input {
    flex: 1;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-accent, #4a90d9);
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    padding: 2px 4px;
    outline: none;
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--debug-bg, #191c2d);
}

::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}
`;O.register();class Ce extends HTMLElement{static tagName="debug-tweaks-tool-panel";shadow;tool=null;autoTrackCheckbox;resetAllBtn;copyBtn;overrideCountEl;overridesListEl;emptyStateEl;addBookmarkBtn;bookmarksListEl;bookmarksEmptyEl;collapsedFolders=new Set;editingBookmarkId=null;bookmarkUnsubscribe=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${Qo}</style>${Ko}`,this.autoTrackCheckbox=this.shadow.querySelector(".auto-track-checkbox"),this.resetAllBtn=this.shadow.querySelector(".reset-all-btn"),this.copyBtn=this.shadow.querySelector(".copy-btn"),this.overrideCountEl=this.shadow.querySelector(".override-count"),this.overridesListEl=this.shadow.querySelector(".overrides-list"),this.emptyStateEl=this.shadow.querySelector(".empty-state"),this.addBookmarkBtn=this.shadow.querySelector(".add-bookmark-btn"),this.bookmarksListEl=this.shadow.querySelector(".bookmarks-list"),this.bookmarksEmptyEl=this.shadow.querySelector(".bookmarks-empty")}setupEventListeners(){this.autoTrackCheckbox.addEventListener("change",this.handleAutoTrackChange),this.resetAllBtn.addEventListener("click",this.handleResetAll),this.copyBtn.addEventListener("click",this.handleCopy),this.addBookmarkBtn.addEventListener("click",this.handleAddBookmark),this.overridesListEl.addEventListener("click",this.handleOverridesClick),this.bookmarksListEl.addEventListener("click",this.handleBookmarksClick),this.bookmarksListEl.addEventListener("dblclick",this.handleBookmarksDblClick)}cleanupEventListeners(){this.autoTrackCheckbox.removeEventListener("change",this.handleAutoTrackChange),this.resetAllBtn.removeEventListener("click",this.handleResetAll),this.copyBtn.removeEventListener("click",this.handleCopy),this.addBookmarkBtn.removeEventListener("click",this.handleAddBookmark),this.overridesListEl.removeEventListener("click",this.handleOverridesClick),this.bookmarksListEl.removeEventListener("click",this.handleBookmarksClick),this.bookmarksListEl.removeEventListener("dblclick",this.handleBookmarksDblClick),this.bookmarkUnsubscribe?.()}init(e){this.tool=e;const t=e.getBookmarkManager();t&&t.init().then(()=>{this.bookmarkUnsubscribe=t.on("change",()=>this.renderBookmarks()),this.renderBookmarks()}),this.update()}update(){if(!this.tool)return;this.autoTrackCheckbox.checked=this.tool.isAutoTrackEnabled();const e=this.tool.getOverrideCount();this.overrideCountEl.textContent=String(e),this.overrideCountEl.classList.toggle("has-changes",e>0),this.resetAllBtn.disabled=e===0,this.copyBtn.disabled=e===0,this.addBookmarkBtn.disabled=e===0,this.renderOverrides()}handleAutoTrackChange=()=>{this.tool?.setAutoTrackEnabled(this.autoTrackCheckbox.checked)};handleResetAll=async()=>{await me.show("Reset all tweaks to original values?")&&this.tool?.resetAll()};handleCopy=async()=>{if(!this.tool)return;if(await this.tool.copyOverridesToClipboard()){const t=this.copyBtn.textContent;this.copyBtn.textContent="Copied!",setTimeout(()=>{this.copyBtn.textContent=t},1500)}};handleAddBookmark=async()=>{if(!this.tool)return;const e=this.tool.getOverrides();if(e.length===0)return;const t={};for(const s of e)t[s.path]=s.current;await this.tool.getBookmarkManager()?.addBookmark(t)};handleOverridesClick=e=>{const t=e.target,n=t.closest(".folder-header");if(n){const i=n.dataset.folder;i&&this.toggleFolder(i);return}const s=t.closest(".entry-reset-btn");if(s){e.stopPropagation();const i=s.dataset.path;i&&this.tool?.resetValue(i)}};handleBookmarksClick=e=>{const t=e.target,n=t.closest(".bookmark-star-btn");if(n){e.stopPropagation();const o=n.dataset.id;o&&this.tool?.getBookmarkManager()?.toggleStar(o);return}const s=t.closest(".bookmark-delete-btn");if(s){e.stopPropagation();const o=s.dataset.id;o&&this.tool?.getBookmarkManager()?.removeBookmark(o);return}const i=t.closest(".bookmark-item");if(i&&!this.editingBookmarkId){const o=i.dataset.id;o&&this.applyBookmark(o)}};handleBookmarksDblClick=e=>{const n=e.target.closest(".bookmark-name");if(n){e.stopPropagation();const i=n.closest(".bookmark-item")?.dataset.id;i&&this.startEditingBookmark(i)}};renderOverrides(){if(!this.tool)return;const e=this.tool.getOverrideGroups();if(e.length===0){this.overridesListEl.style.display="none",this.emptyStateEl.style.display="block";return}this.overridesListEl.style.display="flex",this.emptyStateEl.style.display="none",this.overridesListEl.innerHTML="";for(const t of e){const n=this.createFolderGroup(t);this.overridesListEl.appendChild(n)}}createFolderGroup(e){const t=document.createElement("div");t.className="folder-group";const n=this.collapsedFolders.has(e.folder),s=document.createElement("div");s.className="folder-header",s.dataset.folder=e.folder;const i=document.createElement("span");i.className="folder-icon",i.textContent=n?"▶":"▼";const o=document.createElement("span");o.className="folder-name",o.textContent=e.folder;const a=document.createElement("span");a.className="folder-count",a.textContent=`(${e.entries.length})`,s.appendChild(i),s.appendChild(o),s.appendChild(a),t.appendChild(s);const r=document.createElement("div");r.className="folder-entries",n&&r.classList.add("collapsed");for(const l of e.entries){const d=this.createOverrideEntry(l);r.appendChild(d)}return t.appendChild(r),t}createOverrideEntry(e){const t=document.createElement("div");t.className="override-entry";const n=e.path.split("."),s=n[n.length-1],i=document.createElement("span");i.className="entry-name",i.textContent=s,i.title=e.path;const o=document.createElement("div");if(o.className="entry-values",this.isColorValue(e.original)||this.isColorValue(e.current)){const l=document.createElement("span");l.className="entry-color-swatch",l.style.background=this.formatColorValue(e.original);const d=document.createElement("span");d.className="entry-arrow",d.textContent="→";const h=document.createElement("span");h.className="entry-color-swatch",h.style.background=this.formatColorValue(e.current),o.appendChild(l),o.appendChild(d),o.appendChild(h)}else{const l=document.createElement("span");l.className="entry-original",l.textContent=this.formatValue(e.original);const d=document.createElement("span");d.className="entry-arrow",d.textContent="→";const h=document.createElement("span");h.className="entry-current",h.textContent=this.formatValue(e.current),o.appendChild(l),o.appendChild(d),o.appendChild(h)}const r=document.createElement("button");return r.className="entry-reset-btn",r.dataset.path=e.path,r.title="Reset to original",r.textContent="↺",t.appendChild(i),t.appendChild(o),t.appendChild(r),t}renderBookmarks(){const e=this.tool?.getBookmarkManager();if(!e)return;const t=e.getBookmarks();if(t.length===0){this.bookmarksListEl.style.display="none",this.bookmarksEmptyEl.style.display="block";return}this.bookmarksListEl.style.display="flex",this.bookmarksEmptyEl.style.display="none",this.bookmarksListEl.innerHTML="";for(let n=t.length-1;n>=0;n--){const s=t[n],i=this.createBookmarkItem(s);this.bookmarksListEl.appendChild(i)}}createBookmarkItem(e){const t=document.createElement("div");t.className="bookmark-item",e.starred&&t.classList.add("starred"),t.dataset.id=e.id;const n=document.createElement("button");n.className="bookmark-star-btn",e.starred&&n.classList.add("starred"),n.dataset.id=e.id,n.title=e.starred?"Unstar":"Set as default",n.textContent=e.starred?"★":"☆";const s=document.createElement("div");if(s.className="bookmark-info",this.editingBookmarkId===e.id){const l=document.createElement("input");l.type="text",l.className="bookmark-edit-input",l.value=e.name,l.addEventListener("keydown",d=>{d.key==="Enter"?(d.preventDefault(),this.finishEditingBookmark(e.id,l.value)):d.key==="Escape"&&(d.preventDefault(),this.cancelEditingBookmark())}),l.addEventListener("blur",()=>{setTimeout(()=>{this.editingBookmarkId===e.id&&this.finishEditingBookmark(e.id,l.value)},100)}),s.appendChild(l),setTimeout(()=>{l.focus(),l.select()},0)}else{const l=document.createElement("span");l.className="bookmark-name",l.textContent=e.name,l.title=`${e.name} (double-click to rename)`,s.appendChild(l)}const o=document.createElement("span");o.className="bookmark-meta";const a=Object.keys(e.overrides).length;o.textContent=`${a} override${a!==1?"s":""}`,s.appendChild(o);const r=document.createElement("button");return r.className="bookmark-delete-btn",r.dataset.id=e.id,r.title="Delete preset",r.textContent="×",t.appendChild(n),t.appendChild(s),t.appendChild(r),t}toggleFolder(e){this.collapsedFolders.has(e)?this.collapsedFolders.delete(e):this.collapsedFolders.add(e),this.renderOverrides()}applyBookmark(e){const t=this.tool?.getBookmarkManager();if(!t||!this.tool)return;const s=t.getBookmarks().find(i=>i.id===e);s&&this.tool.applyBookmark(s.overrides)}startEditingBookmark(e){this.editingBookmarkId=e,this.renderBookmarks()}finishEditingBookmark(e,t){const n=t.trim();n&&this.tool?.getBookmarkManager()?.renameBookmark(e,n),this.editingBookmarkId=null,this.renderBookmarks()}cancelEditingBookmark(){this.editingBookmarkId=null,this.renderBookmarks()}formatValue(e){return e===null?"null":e===void 0?"undefined":typeof e=="number"?Number.isInteger(e)?String(e):e.toFixed(2):typeof e=="boolean"?String(e):typeof e=="string"?e.length>20?e.slice(0,17)+"...":e:typeof e=="object"?JSON.stringify(e).slice(0,20):String(e)}isColorValue(e){if(typeof e=="string"&&e.startsWith("#"))return!0;if(typeof e=="object"&&e!==null){const t=e;return"r"in t&&"g"in t&&"b"in t}return!1}formatColorValue(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){const t=e;if(typeof t.r=="number"&&typeof t.g=="number"&&typeof t.b=="number"){const n=Math.round(t.r*255),s=Math.round(t.g*255),i=Math.round(t.b*255);return`rgb(${n}, ${s}, ${i})`}}return"#888"}static register(){customElements.get(Ce.tagName)||customElements.define(Ce.tagName,Ce)}}Ce.register();O.register();Ce.register();class tt extends HTMLElement{static tagName="debug-lab-tool-panel";shadow;panel;sceneSubsection=null;optionsSubsection=null;componentsSubsection=null;tweaksSubsection=null;tweaksPanel=null;bgColorInput=null;ambientInput=null;directionalInput=null;usePostProcessingCheckbox=null;optionsContainer=null;componentListContainer=null;currentComponentId=null;isEnabled=!1;uiBuilt=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.uiBuilt||(this.buildUI(),this.uiBuilt=!0)}disconnectedCallback(){}render(){this.shadow.innerHTML=`<style>${Zo}</style>${Yo}`,this.panel=this.shadow.querySelector(".lab-tool-panel")}buildUI(){this.sceneSubsection=this.createSubsection("Scene",!0,"lab.scene"),this.panel.appendChild(this.sceneSubsection),this.createSceneControls(),this.optionsSubsection=this.createSubsection("Options",!0,"lab.options"),this.panel.appendChild(this.optionsSubsection),this.createUsePostProcessingOption(),this.optionsContainer=document.createElement("div"),this.optionsContainer.className="options-container",this.optionsSubsection.appendChild(this.optionsContainer),this.componentsSubsection=this.createSubsection("Components",!1,"lab.components"),this.panel.appendChild(this.componentsSubsection);const e=document.createElement("div");e.className="components-info",e.textContent="Enable Lab mode to load components",this.componentsSubsection.appendChild(e),this.componentListContainer=document.createElement("div"),this.componentListContainer.className="component-list",this.componentsSubsection.appendChild(this.componentListContainer),this.tweaksSubsection=this.createSubsection("Tweaks",!0,"lab.tweaks"),this.panel.appendChild(this.tweaksSubsection),this.tweaksPanel=document.createElement(Ce.tagName),this.tweaksSubsection.appendChild(this.tweaksPanel)}createSubsection(e,t,n){const s=document.createElement(O.tagName);return s.setAttribute("title",e),s.setAttribute("persist-id",n),t&&s.setAttribute("collapsed",""),s}createSceneControls(){if(!this.sceneSubsection)return;const e=this.sceneSubsection.getContent(),t=document.createElement("div");t.className="info-row",t.innerHTML='<label class="info-label">Background</label>',this.bgColorInput=document.createElement("input"),this.bgColorInput.type="color",this.bgColorInput.value="#1a1a1a",this.bgColorInput.addEventListener("input",()=>{this.dispatchEvent(new CustomEvent("background-change",{bubbles:!0,composed:!0,detail:{color:this.bgColorInput.value}}))}),t.appendChild(this.bgColorInput),e.appendChild(t);const n=document.createElement("div");n.className="info-row",n.innerHTML='<label class="info-label">Ambient</label>',this.ambientInput=document.createElement("input"),this.ambientInput.type="number",this.ambientInput.value="0.5",this.ambientInput.step="0.1",this.ambientInput.min="0",this.ambientInput.className="debug-input",this.ambientInput.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("ambient-change",{bubbles:!0,composed:!0,detail:{intensity:parseFloat(this.ambientInput.value)||0}}))}),n.appendChild(this.ambientInput),e.appendChild(n);const s=document.createElement("div");s.className="info-row",s.innerHTML='<label class="info-label">Directional</label>',this.directionalInput=document.createElement("input"),this.directionalInput.type="number",this.directionalInput.value="1",this.directionalInput.step="0.1",this.directionalInput.min="0",this.directionalInput.className="debug-input",this.directionalInput.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("directional-change",{bubbles:!0,composed:!0,detail:{intensity:parseFloat(this.directionalInput.value)||0}}))}),s.appendChild(this.directionalInput),e.appendChild(s)}createUsePostProcessingOption(){if(!this.optionsSubsection)return;const e=this.optionsSubsection.getContent(),t=document.createElement("div");t.className="info-row";const n=document.createElement("label");n.className="info-label",n.textContent="Use Postprocessing",n.title="Enable the full post-processing pipeline in lab mode",t.appendChild(n),this.usePostProcessingCheckbox=document.createElement("input"),this.usePostProcessingCheckbox.type="checkbox",this.usePostProcessingCheckbox.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("use-postprocessing-change",{bubbles:!0,composed:!0,detail:{enabled:this.usePostProcessingCheckbox.checked}}))}),t.appendChild(this.usePostProcessingCheckbox),e.appendChild(t)}setEnabled(e){this.isEnabled=e,this.updateComponentButtons()}setUsePostProcessing(e){this.usePostProcessingCheckbox&&(this.usePostProcessingCheckbox.checked=e)}setTweaksTool(e){this.tweaksPanel&&e&&(this.tweaksPanel.init(e),e.setComponent(this.tweaksPanel)),this.tweaksSubsection&&(this.tweaksSubsection.style.display=e?"":"none")}setOptions(e){if(this.optionsContainer){if(this.optionsContainer.innerHTML="",e.length===0){const t=document.createElement("div");t.className="options-empty",t.textContent="No lab options registered",this.optionsContainer.appendChild(t);return}for(const t of e){const n=document.createElement("div");if(n.className="info-row",t.type==="boolean"){const s=document.createElement("label");s.className="info-label",s.textContent=t.name,t.description&&(s.title=t.description);const i=document.createElement("input");i.type="checkbox",i.checked=t.value,i.addEventListener("change",()=>{this.dispatchEvent(new CustomEvent("option-change",{bubbles:!0,composed:!0,detail:{id:t.id,value:i.checked}}))}),n.appendChild(s),n.appendChild(i)}this.optionsContainer.appendChild(n)}}}setComponents(e,t){if(!this.componentListContainer)return;if(this.currentComponentId=t,this.componentListContainer.innerHTML="",e.length===0){const i=document.createElement("div");i.className="component-list-empty",i.textContent="No components registered",this.componentListContainer.appendChild(i);return}const n=new Map;for(const i of e)n.has(i.category)||n.set(i.category,[]),n.get(i.category).push(i);const s=Array.from(n.keys()).sort();for(const i of s){const o=n.get(i),a=document.createElement("div");a.className="category-header",a.textContent=i,this.componentListContainer.appendChild(a);for(const r of o){const l=document.createElement("div");l.className="component-row";const d=r.id===t,h=document.createElement("span");h.className=d?"component-name active":"component-name",h.textContent=r.name,l.appendChild(h);const u=document.createElement("button");u.className="button-small",d?(u.textContent="Unload",u.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("unload-component",{bubbles:!0,composed:!0}))})):(u.textContent="Load",u.disabled=!this.isEnabled,u.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("load-component",{bubbles:!0,composed:!0,detail:{id:r.id}}))})),l.appendChild(u),this.componentListContainer.appendChild(l)}}}setCurrentComponentId(e){this.currentComponentId=e}updateComponentButtons(){if(!this.componentListContainer)return;this.componentListContainer.querySelectorAll(".button-small").forEach(t=>{const n=t;n.textContent==="Load"&&(n.disabled=!this.isEnabled)})}static register(){customElements.get(tt.tagName)||customElements.define(tt.tagName,tt)}}tt.register();const Jo="debug-tweak-bookmarks",ea=1,$e="data",Xn="bookmarks:";class ta{db=null;initPromise=null;async init(){if(!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise((e,t)=>{const n=indexedDB.open(Jo,ea);n.onerror=()=>{t(new Error(`Failed to open IndexedDB: ${n.error?.message}`))},n.onsuccess=()=>{this.db=n.result,e()},n.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains($e)||i.createObjectStore($e)}}),this.initPromise)}async get(e){return await this.init(),new Promise((t,n)=>{const o=this.db.transaction($e,"readonly").objectStore($e).get(e);o.onerror=()=>n(o.error),o.onsuccess=()=>t(o.result)})}async set(e,t){return await this.init(),new Promise((n,s)=>{const a=this.db.transaction($e,"readwrite").objectStore($e).put(t,e);a.onerror=()=>s(a.error),a.onsuccess=()=>n()})}async getBookmarks(e){const t=`${Xn}${e}`;return await this.get(t)??[]}async saveBookmarks(e,t){const n=`${Xn}${e}`;await this.set(n,t)}dispose(){this.db&&(this.db.close(),this.db=null),this.initPromise=null}}class na{store;bookmarks=[];currentComponentId=null;storeInitialized=!1;initPromise=null;listeners=new Map;constructor(){this.store=new ta}async init(){if(!this.storeInitialized){if(this.initPromise)return this.initPromise;this.initPromise=this.store.init(),await this.initPromise,this.storeInitialized=!0}}async setComponentId(e){if(!e){this.currentComponentId=null,this.bookmarks=[],this.emit("change");return}e!==this.currentComponentId&&(this.currentComponentId=e,await this.init(),this.bookmarks=await this.store.getBookmarks(e),this.emit("change"))}getComponentId(){return this.currentComponentId}getBookmarks(){return[...this.bookmarks]}getPreferred(){if(this.bookmarks.length===0)return null;const e=this.bookmarks.find(t=>t.starred);return e||this.bookmarks[this.bookmarks.length-1]}getStarred(){return this.bookmarks.find(e=>e.starred)??null}async addBookmark(e){if(!this.currentComponentId)return null;const t={id:this.generateId(),name:this.generateName(),createdAt:Date.now(),starred:!1,overrides:{...e}};return this.bookmarks.push(t),await this.persist(),this.emit("change"),t}async removeBookmark(e){const t=this.bookmarks.findIndex(n=>n.id===e);t!==-1&&(this.bookmarks.splice(t,1),await this.persist(),this.emit("change"))}async toggleStar(e){const t=this.bookmarks.find(n=>n.id===e);if(t){if(t.starred)t.starred=!1;else for(const n of this.bookmarks)n.starred=n.id===e;await this.persist(),this.emit("change")}}async clearAll(){this.bookmarks=[],await this.persist(),this.emit("change")}async renameBookmark(e,t){const n=this.bookmarks.find(s=>s.id===e);n&&(n.name=t,await this.persist(),this.emit("change"))}async updateOverrides(e,t){const n=this.bookmarks.find(s=>s.id===e);n&&(n.overrides={...t},await this.persist(),this.emit("change"))}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{this.listeners.get(e)?.delete(t)}}async persist(){this.currentComponentId&&await this.store.saveBookmarks(this.currentComponentId,this.bookmarks)}emit(e){const t=this.listeners.get(e);if(t)for(const n of t)n()}generateId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}generateName(){const e=/^Preset (\d+)$/;let t=0;for(const n of this.bookmarks){const s=n.name.match(e);s&&(t=Math.max(t,parseInt(s[1],10)))}return`Preset ${t+1}`}dispose(){this.store.dispose(),this.listeners.clear()}}class sa extends _{id="tweaks";name="Lab Tweaks";icon="sliders";panel="info";originalValues=new Map;currentOverrides=new Map;autoTrackEnabled=!0;unsubscribeChange=null;isApplyingState=!1;bookmarks=null;component=null;log;init(e){super.init(e),this.log=this.engine.getLogger("Debug.TweaksTool"),this.bookmarks=new na,this.autoTrackEnabled=F.getProject("tweaks:autoTrack",!0)??!0,this.subscribeToChanges()}enable(){}disable(){this.originalValues.clear(),this.currentOverrides.clear(),this.updateUI()}onComponentLoaded(e,t=!1){this.isLabMode()&&(t||(this.captureOriginals(),this.currentOverrides.clear()),this.bookmarks?.setComponentId(e),this.updateUI())}onComponentUnloaded(){this.originalValues.clear(),this.currentOverrides.clear(),this.bookmarks?.setComponentId(null),this.updateUI()}dispose(){this.unsubscribeFromChanges(),this.bookmarks?.dispose(),this.bookmarks=null,this.component=null}isLabMode(){return this.engine.tweaks.getMode()==="lab"}captureOriginals(){this.originalValues.clear();const t=this.engine.tweaks.getLabBindingValues();for(const[n,s]of t)this.originalValues.set(n,this.cloneValue(s));this.log.info("Captured %d original values",this.originalValues.size)}subscribeToChanges(){this.unsubscribeChange||(this.unsubscribeChange=this.engine.tweaks.onGlobalChange((e,t,n)=>{if(!this.isLabMode()||this.isApplyingState||!this.autoTrackEnabled||!this.engine.tweaks.isLabBinding(e))return;if(!this.originalValues.has(e)){this.originalValues.set(e,this.cloneValue(t)),this.log.info("Late capture of original for %s",e);return}const s=this.originalValues.get(e);this.valuesEqual(t,s)?(this.currentOverrides.delete(e),this.log.info("Override removed: %s (returned to original)",e)):(this.currentOverrides.set(e,this.cloneValue(t)),this.log.info("Override added: %s (now %d overrides)",e,this.currentOverrides.size)),n&&this.manager.history.recordAction(`Tweak: ${this.getShortPath(e)}`),this.updateUI()}))}unsubscribeFromChanges(){this.unsubscribeChange?.(),this.unsubscribeChange=null}getShortPath(e){const t=e.split(".");return t.length>1?t.slice(-2).join("."):e}getState(){if(!this.isLabMode())return{overrides:{},autoTrackEnabled:this.autoTrackEnabled};const e={};for(const[n,s]of this.currentOverrides)e[n]=s;const t={};for(const[n,s]of this.originalValues)t[n]=s;return{overrides:e,originals:t,autoTrackEnabled:this.autoTrackEnabled}}setState(e){const t=e;if(t&&(typeof t.autoTrackEnabled=="boolean"&&(this.autoTrackEnabled=t.autoTrackEnabled),!!this.isLabMode())){this.isApplyingState=!0;try{if(t.originals&&typeof t.originals=="object")for(const[i,o]of Object.entries(t.originals))this.originalValues.set(i,o);const n=t.overrides&&typeof t.overrides=="object"?t.overrides:{},s=new Set(Object.keys(n));for(const i of this.currentOverrides.keys())if(!s.has(i)){const o=this.originalValues.get(i);o!==void 0&&this.engine.tweaks.setValue(i,o)}this.currentOverrides.clear();for(const[i,o]of Object.entries(n))this.currentOverrides.set(i,o),this.engine.tweaks.setValue(i,o);this.updateUI()}finally{this.isApplyingState=!1}}}getOverrideGroups(){const e=new Map;for(const[n,s]of this.currentOverrides){const o=n.split(".").slice(0,-1).join(".")||"Root",a=this.originalValues.get(n);e.has(o)||e.set(o,[]),e.get(o).push({path:n,original:a,current:s})}const t=[];for(const[n,s]of e)t.push({folder:n,entries:s});return t.sort((n,s)=>n.folder.localeCompare(s.folder)),t}getOverrides(){const e=[];for(const[t,n]of this.currentOverrides)e.push({path:t,original:this.originalValues.get(t),current:n});return e}resetValue(e){const t=this.originalValues.get(e);if(t===void 0)return;if(this.engine.tweaks.getValue(e)===void 0){this.currentOverrides.delete(e),this.updateUI();return}this.isApplyingState=!0;try{this.engine.tweaks.setValue(e,t),this.currentOverrides.delete(e),this.manager.history.recordAction(`Reset: ${this.getShortPath(e)}`),this.updateUI()}finally{this.isApplyingState=!1}}resetAll(){if(this.currentOverrides.size!==0){this.isApplyingState=!0;try{for(const e of this.currentOverrides.keys()){const t=this.originalValues.get(e);t===void 0||this.engine.tweaks.getValue(e)===void 0||this.engine.tweaks.setValue(e,t)}this.currentOverrides.clear(),this.manager.history.recordAction("Reset all tweaks"),this.updateUI()}finally{this.isApplyingState=!1}}}setAutoTrackEnabled(e){this.autoTrackEnabled=e,F.setProject("tweaks:autoTrack",e)}isAutoTrackEnabled(){return this.autoTrackEnabled}getBookmarkManager(){return this.bookmarks}getOverrideCount(){return this.currentOverrides.size}async copyOverridesToClipboard(){if(this.currentOverrides.size===0)return!1;const e=[];for(const[t,n]of this.currentOverrides){const s=this.formatValueForCopy(n);e.push(`${t}: ${s},`)}try{return await navigator.clipboard.writeText(e.join(`
`)),!0}catch{return!1}}formatValueForCopy(e){return e===null?"null":e===void 0?"undefined":typeof e=="string"?`'${e}'`:typeof e=="number"||typeof e=="boolean"?String(e):JSON.stringify(e)}applyBookmark(e){this.isApplyingState=!0;try{for(const[t,n]of Object.entries(e))this.engine.tweaks.setValue(t,n),this.currentOverrides.set(t,this.cloneValue(n));this.updateUI()}finally{this.isApplyingState=!1}}createUI(e){Ce.register(),this.component=document.createElement(Ce.tagName),this.component.init(this),e.appendChild(this.component)}setComponent(e){this.component=e}updateUI(){this.component?.update()}cloneValue(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>this.cloneValue(n));const t={};for(const[n,s]of Object.entries(e))t[n]=this.cloneValue(s);return t}valuesEqual(e,t){if(e===t)return!0;if(e===null||t===null||e===void 0||t===void 0||typeof e!=typeof t)return!1;if(typeof e!="object")return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!this.valuesEqual(e[a],t[a]))return!1;return!0}const n=e,s=t,i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const a of i)if(!this.valuesEqual(n[a],s[a]))return!1;return!0}}const Yn="lab:usePostProcessing",an="lab:savedDebugCameraPosition",rn="lab:savedDebugCameraTarget";class ia extends _{id="lab";name="Lab";icon="flask";liveScene;labScene=null;labCamera=null;labFramer=new Wo;componentRegistry;resources;events;log;labOptionsMap=new Map;labOptionsValues=new Map;labGlobalConfigs=[];currentComponentId=null;previousComponentId=null;savedTweaksStates=new Map;savedPassStates=new Map;usePostProcessing=!1;debugCameraWasEnabledBeforeLab=!1;savedDebugCameraPosition=null;savedDebugCameraTarget=null;isRestoringState=!1;tweaksTool=null;panelElement=null;registryUnsubscribe=null;labOptionsUnsubscribe=null;constructor(){super(),this.liveScene=null,this.componentRegistry=null}init(e){super.init(e);const t=e.context.engine;this.resources=e.context.resources,this.events=e.eventBus,this.log=t.getLogger("Lab.Tool"),this.liveScene=t.scene,this.componentRegistry=new Xo(t.getLogger("Lab.Registry")),this.registryUnsubscribe=this.componentRegistry.onChange(()=>{this.updateComponentsList()}),this.labOptionsUnsubscribe=this.events.on("lab-options:change",()=>{this.updateLabOptionsUI()}),this.tweaksTool=new sa,this.tweaksTool.init(e)}enable(){document.body.classList.add("lab-mode"),this.engine.tweaks.setMode("lab"),this.disablePostProcessingPasses(),this.applyLabOptionsDefaults(),this.usePostProcessing=F.getProject(Yn,!0)??!0,this.labScene||(this.labScene=new jo(this.engine.getLogger("Lab.Scene"))),this.labCamera||(this.labCamera=new Go({canvas:this.engine.canvas,position:[5,3,5],target:[0,0,0]}),this.engine.sizes.on("resize",()=>{this.labCamera?.setAspect(this.engine.sizes.aspectRatio||1)})),this.labCamera.setAspect(this.engine.sizes.aspectRatio||1),this.labCamera.instance.updateProjectionMatrix(),this.labCamera.instance.updateMatrixWorld(!0),this.labScene.scene.add(this.labCamera.instance),this.labCamera.frustumHelper.update(),this.labCamera.frustumHelper.visible=!1,this.labScene.scene.add(this.labCamera.frustumHelper),this.labCamera.enable(),this.engine.setRenderScene(this.labScene.scene),this.debugCameraWasEnabledBeforeLab=this.manager.camera.isEnabled();const e=F.getProject(an);!e&&this.debugCameraWasEnabledBeforeLab?(this.savedDebugCameraPosition=this.manager.camera.getPositionArray(),this.savedDebugCameraTarget=this.manager.camera.getTargetArray(),F.setProject(an,this.savedDebugCameraPosition),F.setProject(rn,this.savedDebugCameraTarget)):e&&(this.savedDebugCameraPosition=e,this.savedDebugCameraTarget=F.getProject(rn)),this.manager.camera.isEnabled()?this.engine.setRenderCamera(this.manager.camera.instance):this.manager.camera.enable(),this.manager.camera.setPosition([12,8,12]),this.manager.camera.setTarget([0,0,0]),this.manager.camera.instance.near=.1,this.manager.camera.instance.far=2e3,this.manager.camera.instance.updateProjectionMatrix();const t=this.engine.getPostProcessing();if(t&&(t.resize(),t.setDirectRenderMode(!this.usePostProcessing)),this.tweaksTool?.enable(),this.panelElement&&(this.panelElement.setEnabled(!0),this.panelElement.setUsePostProcessing(this.usePostProcessing),this.panelElement.setTweaksTool(this.tweaksTool)),this.updateComponentsList(),this.events.emit("lab:entered",{context:this.getDebugContext(),scene:this.labScene.scene}),this.previousComponentId){const n=this.previousComponentId;this.previousComponentId=null,this.isRestoringState=!0,this.loadComponent(n).then(()=>{const s=this.savedTweaksStates.get(n);s&&this.tweaksTool&&this.tweaksTool.setState(s)}).catch(s=>{this.log.err("Failed to reload component %s: %s",n,s)}).finally(()=>{this.isRestoringState=!1})}this.log.info("Entered Lab mode")}disable(){this.previousComponentId=this.currentComponentId,this.currentComponentId&&this.tweaksTool&&this.savedTweaksStates.set(this.currentComponentId,this.tweaksTool.getState()),this.currentComponentId&&this.unloadComponent(),this.labCamera&&this.labScene&&(this.labCamera.disable(),this.labScene.scene.remove(this.labCamera.instance),this.labScene.scene.remove(this.labCamera.frustumHelper)),!this.debugCameraWasEnabledBeforeLab&&this.manager.camera.isEnabled()?this.manager.camera.disable():this.savedDebugCameraPosition&&(this.manager.camera.setPosition(this.savedDebugCameraPosition),this.savedDebugCameraTarget&&this.manager.camera.setTarget(this.savedDebugCameraTarget)),this.savedDebugCameraPosition=null,this.savedDebugCameraTarget=null,F.removeProject(an),F.removeProject(rn),this.engine.setRenderScene(null),this.engine.tweaks.setMode("live"),this.restorePostProcessingPasses();const e=this.engine.getPostProcessing();if(e&&(e.setDirectRenderMode(!1),e.setRenderScene(null)),this.labGlobalConfigs.length>0&&this.labCamera){const t={engine:this.engine,scene:this.liveScene,resources:this.resources,labCamera:this.labCamera};for(const n of this.labGlobalConfigs)n.onLabExit?.(t)}document.body.classList.remove("lab-mode"),this.tweaksTool?.disable(),this.panelElement&&(this.panelElement.setEnabled(!1),this.panelElement.setTweaksTool(null)),this.updateComponentsList(),this.events.emit("lab:exited",{context:this.getDebugContext(),scene:this.liveScene}),this.log.info("Exited Lab mode")}update(e){if(this.labCamera?.update(e),this.currentComponentId){const t=this.componentRegistry.getInstance(this.currentComponentId),n=t?.userData.__labConfig;t&&n?.update&&n.update(t,e)}}async loadComponent(e){if(!this.enabled)return this.log.warn("Cannot load components when lab mode is disabled"),null;this.currentComponentId&&this.unloadComponent();const t={engine:this.engine,scene:this.labScene.scene,resources:this.resources},n=await this.componentRegistry.load(e,t);if(n&&this.labScene){this.labScene.loadComponent(n),this.currentComponentId=e;const s=this.componentRegistry.get(e);if((this.labOptionsValues.get("lab.autoFrame")??!0)&&!s?.disableAutoFrame&&this.labCamera){const a={fillRatio:.5,...s?.frameOptions};this.labFramer.centerAndFrame(n,this.labCamera,a)}else s?.defaultCamera&&this.labCamera&&(this.labCamera.setPosition(...s.defaultCamera.position),this.labCamera.setTarget(...s.defaultCamera.target));this.labCamera&&(this.manager.camera.setPosition(this.labCamera.getPositionArray()),this.manager.camera.setTarget(this.labCamera.getTargetArray())),this.tweaksTool?.onComponentLoaded(e,this.isRestoringState);const o=this.savedTweaksStates.get(e);o&&this.tweaksTool&&!this.isRestoringState&&this.tweaksTool.setState(o),this.events.emit("component:loaded",{id:e}),this.updateComponentsList(),this.isRestoringState||(this.manager.history.recordAction(`Load component: ${e}`),this.manager.history.persistNow())}return n}unloadComponent(){if(!this.currentComponentId)return;const e=this.currentComponentId;this.tweaksTool&&this.savedTweaksStates.set(e,this.tweaksTool.getState()),this.componentRegistry.unload(this.currentComponentId),this.labScene?.unloadComponent(),this.engine.tweaks.clearLabTweaks(),this.tweaksTool?.onComponentUnloaded(),this.currentComponentId=null,this.events.emit("component:unloaded",{id:e}),this.updateComponentsList(),this.isRestoringState||(this.manager.history.recordAction(`Unload component: ${e}`),this.manager.history.persistNow())}getCurrentComponentId(){return this.currentComponentId}registerLabEntries(e,t){const n=Array.isArray(t)?t:[t];for(let s=0;s<n.length;s++){const i=n.length>1?`${e}:${s}`:e;this.registerLabConfig(i,n[s])}}registerOptions(e){const t=Array.isArray(e)?e:[e];for(const n of t)this.labOptionsMap.set(n.id,n),this.labOptionsValues.set(n.id,n.defaultValue),this.log.info(`Registered lab option: ${n.id}`);this.events.emit("lab-options:change")}registerGlobalConfig(e){this.labGlobalConfigs.push(e),this.log.info("Loaded global lab config")}registerLabConfig(e,t){const n={id:e,name:t.name,category:t.category,description:t.description,requiredResources:t.requiredResources,defaultCamera:t.defaultCamera,frameOptions:t.frameOptions,disableAutoFrame:t.disableAutoFrame,create:async s=>{const i={...s,labCamera:this.labCamera},o=await Promise.resolve(t.create(i));return o.userData.__labConfig=t,o},dispose:t.dispose};this.componentRegistry.register(n),this.log.info(`Registered lab component: "${t.name}" (${e})`)}getRegistry(){return this.componentRegistry}getLabOptions(){return{register:(e,t)=>{this.labOptionsMap.set(e,t),this.labOptionsValues.set(e,t.defaultValue),this.events.emit("lab-options:change")},unregister:e=>{this.labOptionsMap.delete(e),this.labOptionsValues.delete(e),this.events.emit("lab-options:change")},get:e=>this.labOptionsMap.get(e),getValue:e=>this.labOptionsValues.get(e),setValue:(e,t)=>{const n=this.labOptionsMap.get(e);n&&(this.labOptionsValues.set(e,t),this.engine.tweaks.setValue(n.tweakPath,t),this.events.emit("lab-options:change"))},getAll:()=>this.labOptionsMap}}applyLabOptionsDefaults(){for(const[e,t]of this.labOptionsMap)this.labOptionsValues.set(e,t.defaultValue),this.engine.tweaks.setValue(t.tweakPath,t.defaultValue)||this.log.warn(`Lab option "${e}" references unregistered tweak path: ${t.tweakPath}`);this.log.info("Applied lab options defaults")}setUsePostProcessing(e){this.usePostProcessing=e,F.setProject(Yn,e);const t=this.engine.getPostProcessing();t&&t.setDirectRenderMode(!e),this.log.info("Lab postprocessing: %s",e?"enabled":"disabled")}isUsingPostProcessing(){return this.usePostProcessing}disablePostProcessingPasses(){const e=this.engine.getPostProcessing();if(!e)return;this.savedPassStates.clear();const t=e.getRegisteredPassNames();for(const n of t)n!=="main"&&(this.savedPassStates.set(n,e.isPassEnabled(n)),e.setPassEnabled(n,!1));this.log.info("Disabled %d post-processing passes (kept main)",this.savedPassStates.size)}restorePostProcessingPasses(){const e=this.engine.getPostProcessing();if(e){for(const[t,n]of this.savedPassStates)e.setPassEnabled(t,n);this.log.info("Restored %d post-processing passes",this.savedPassStates.size),this.savedPassStates.clear()}}getLabScene(){return this.labScene}getLabCamera(){return this.labCamera}getVisualizerCamera(){return this.labCamera?.instance??null}getLabCameraController(){return this.labCamera??null}getLabCameraHelper(){return this.labCamera?.frustumHelper??null}getLiveScene(){return this.liveScene}getTweaksTool(){return this.tweaksTool}getDebugContext(){return{engine:this.engine,scene:this.enabled&&this.labScene?this.labScene.scene:this.liveScene,resources:this.resources}}createUI(e){this.panelElement=document.createElement(tt.tagName),this.panelElement.addEventListener("background-change",t=>{const{color:n}=t.detail;this.labScene?.setBackgroundColor(n)}),this.panelElement.addEventListener("ambient-change",t=>{const{intensity:n}=t.detail;this.labScene?.setAmbientIntensity(n)}),this.panelElement.addEventListener("directional-change",t=>{const{intensity:n}=t.detail;this.labScene?.setDirectionalIntensity(n)}),this.panelElement.addEventListener("use-postprocessing-change",t=>{const{enabled:n}=t.detail;this.setUsePostProcessing(n)}),this.panelElement.addEventListener("option-change",t=>{const{id:n,value:s}=t.detail;this.getLabOptions().setValue(n,s)}),this.panelElement.addEventListener("load-component",t=>{const{id:n}=t.detail;this.loadComponent(n)}),this.panelElement.addEventListener("unload-component",()=>{this.unloadComponent()}),e.appendChild(this.panelElement),this.panelElement.setEnabled(this.enabled),this.panelElement.setUsePostProcessing(this.usePostProcessing),this.updateLabOptionsUI(),this.updateComponentsList()}updateLabOptionsUI(){if(!this.panelElement)return;const e=[];for(const[t,n]of this.labOptionsMap)n.type==="boolean"&&e.push({id:t,type:"boolean",name:n.name,description:n.description,value:this.labOptionsValues.get(t)});this.panelElement.setOptions(e)}updateComponentsList(){if(!this.panelElement)return;const e=this.componentRegistry.getAll().map(t=>({id:t.id,name:t.name,category:t.category}));this.panelElement.setComponents(e,this.currentComponentId)}getState(){return{componentId:this.currentComponentId,tweaks:this.tweaksTool?.getState()}}setState(e){const t=e;if(!t)return;const n=t.componentId??null,s=this.currentComponentId;this.isRestoringState=!0;const i=()=>{t.tweaks&&this.tweaksTool&&this.tweaksTool.setState(t.tweaks)};n===s?(i(),this.isRestoringState=!1):n?this.loadComponent(n).then(()=>{i()}).catch(o=>{this.log.err("Failed to restore component %s: %s",n,o)}).finally(()=>{this.isRestoringState=!1}):(this.unloadComponent(),this.isRestoringState=!1)}dispose(){this.registryUnsubscribe&&(this.registryUnsubscribe(),this.registryUnsubscribe=null),this.labOptionsUnsubscribe&&(this.labOptionsUnsubscribe(),this.labOptionsUnsubscribe=null),this.currentComponentId&&this.unloadComponent(),this.componentRegistry.dispose(),this.labScene?.dispose(),this.labCamera?.dispose(),this.labOptionsMap.clear(),this.labOptionsValues.clear(),this.labGlobalConfigs.length=0,this.tweaksTool?.dispose(),this.tweaksTool=null,this.log.info("LabTool disposed")}}const oa=`<div class="grid-tool-panel">
    <!-- Global Settings Subsection -->
    <div class="subsection collapsed" data-section="global">
        <div class="subsection-header">
            <span class="subsection-icon">▶</span>
            <span class="subsection-title">Global Settings</span>
        </div>
        <div class="subsection-content">
            <div class="setting-row">
                <label>Cell Size</label>
                <input type="number" class="cell-size-input debug-input" value="1" step="0.1" min="0.1">
            </div>
            <div class="setting-row">
                <label>Grid Size</label>
                <input type="number" class="grid-size-input debug-input" value="100" step="10" min="1">
            </div>
        </div>
    </div>

    <!-- Colors & Thickness Subsection -->
    <div class="subsection collapsed" data-section="colors">
        <div class="subsection-header">
            <span class="subsection-icon">▶</span>
            <span class="subsection-title">Colors & Thickness</span>
        </div>
        <div class="subsection-content">
            <div class="setting-row">
                <label>Grid Color</label>
                <input type="color" class="grid-color-input" value="#222222">
            </div>
            <div class="setting-row">
                <label>Center Color</label>
                <input type="color" class="center-color-input" value="#444444">
            </div>
            <div class="setting-row">
                <label>Grid Thick.</label>
                <input type="number" class="grid-thickness-input debug-input" value="1.0" step="0.1" min="0.1">
            </div>
            <div class="setting-row">
                <label>Center Thick.</label>
                <input type="number" class="center-thickness-input debug-input" value="1.5" step="0.1" min="0.1">
            </div>
            <div class="setting-row">
                <label>Opacity</label>
                <input type="number" class="opacity-input debug-input" value="1.0" step="0.1" min="0" max="1">
            </div>
        </div>
    </div>

    <!-- Major Grid Subsection -->
    <div class="subsection collapsed" data-section="major">
        <div class="subsection-header">
            <span class="subsection-icon">▶</span>
            <span class="subsection-title">Major Grid</span>
        </div>
        <div class="subsection-content">
            <div class="setting-row">
                <label>Interval</label>
                <input type="number" class="major-interval-input debug-input" value="5" step="1" min="2">
            </div>
            <div class="setting-row">
                <label>Color</label>
                <input type="color" class="major-color-input" value="#333333">
            </div>
            <div class="setting-row">
                <label>Thickness</label>
                <input type="number" class="major-thickness-input debug-input" value="1.5" step="0.1" min="0.1">
            </div>
        </div>
    </div>

    <!-- Grid Planes Subsection -->
    <div class="subsection" data-section="planes">
        <div class="subsection-header">
            <span class="subsection-icon">▼</span>
            <div class="planes-header">
                <span class="subsection-title">Grid Planes</span>
                <button class="add-plane-btn debug-button">+</button>
            </div>
        </div>
        <div class="subsection-content">
            <div class="planes-list"></div>

            <!-- Add Plane Dialog (hidden by default) -->
            <div class="add-dialog hidden">
                <div class="setting-row">
                    <label>Axis</label>
                    <select class="dialog-axis debug-select">
                        <option value="XZ">XZ</option>
                        <option value="XY">XY</option>
                        <option value="YZ">YZ</option>
                    </select>
                </div>
                <div class="setting-row">
                    <label>Position</label>
                    <input type="number" class="dialog-position debug-input" value="0" step="0.5">
                </div>
                <div class="dialog-actions">
                    <button class="dialog-cancel debug-button">Cancel</button>
                    <button class="dialog-add debug-button">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>
`,aa=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.grid-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* Subsection styling */
.subsection {
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    margin-bottom: 6px;
    overflow: hidden;
}

.subsection-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    cursor: pointer;
    user-select: none;
    font-size: 11px;
}

.subsection-header:hover {
    background: rgba(0, 0, 0, 0.35);
}

.subsection-icon {
    font-size: 8px;
    width: 10px;
    color: var(--debug-text-muted, #888);
}

.subsection-title {
    flex: 1;
}

.subsection-content {
    padding: 6px 8px;
}

.subsection.collapsed .subsection-content {
    display: none;
}

.setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0;
}

.setting-row label {
    font-size: 11px;
    color: var(--debug-text-muted, #888);
}

/* Grid Planes section */
.planes-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.add-plane-btn {
    padding: 2px 8px;
    font-size: 12px;
    line-height: 1;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
}

.add-plane-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.planes-list {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.planes-empty {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    padding: 8px 0;
}

/* Add Dialog */
.add-dialog {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    padding: 8px;
    margin-top: 8px;
}

.add-dialog.hidden {
    display: none;
}

.dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 4px;
    margin-top: 8px;
}

/* Form inputs for shadow DOM */
.debug-input {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 6px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 11px;
    width: 60px;
}

.debug-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.debug-select {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 8px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 11px;
    cursor: pointer;
}

.debug-select:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.debug-select option {
    background: var(--debug-bg, #1e1e1e);
    color: var(--debug-text, #e0e0e0);
}

.debug-button {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-size: 10px;
}

.debug-button:hover {
    border-color: var(--debug-accent, #4a90d9);
}

/* Color inputs */
input[type="color"] {
    width: 32px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    background: transparent;
}

input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 2px;
}

input[type="color"]::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
}
`,ra=`<div class="plane-card">
    <div class="plane-header">
        <input type="checkbox" class="plane-enabled" checked>
        <span class="plane-axis">XZ</span>
        <input type="number" class="plane-position debug-input" value="0" step="0.5">
        <button class="plane-remove debug-button">&times;</button>
    </div>
    <div class="plane-toggle">
        <span class="toggle-arrow"></span> Custom colors/thickness
    </div>
    <div class="plane-overrides hidden">
        <div class="override-row">
            <span class="override-label">Grid</span>
            <div class="override-controls">
                <input type="checkbox" class="grid-color-global" checked title="Use global">
                <span class="global-label">global</span>
                <input type="color" class="grid-color-input" disabled>
            </div>
        </div>
        <div class="override-row">
            <span class="override-label">Center</span>
            <div class="override-controls">
                <input type="checkbox" class="center-color-global" checked title="Use global">
                <span class="global-label">global</span>
                <input type="color" class="center-color-input" disabled>
            </div>
        </div>
        <div class="override-row">
            <span class="override-label">Grid Th.</span>
            <div class="override-controls">
                <input type="checkbox" class="grid-thickness-global" checked title="Use global">
                <span class="global-label">global</span>
                <input type="number" class="grid-thickness-input debug-input" step="0.1" min="0.1" disabled>
            </div>
        </div>
        <div class="override-row">
            <span class="override-label">Center Th.</span>
            <div class="override-controls">
                <input type="checkbox" class="center-thickness-global" checked title="Use global">
                <span class="global-label">global</span>
                <input type="number" class="center-thickness-input debug-input" step="0.1" min="0.1" disabled>
            </div>
        </div>
    </div>
</div>
`,la=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.plane-card {
    background: var(--debug-bg-lighter, #2a2a2a);
    border-bottom: 1px solid var(--debug-border, #3c3c3c);
    padding: 6px 4px;
}

.plane-card:last-child {
    border-bottom: none;
}

.plane-header {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
}

.plane-enabled {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.plane-axis {
    font-weight: 500;
    min-width: 24px;
}

.plane-position {
    width: 50px !important;
}

.plane-remove {
    margin-left: auto;
    padding: 2px 6px;
    font-size: 12px;
    line-height: 1;
    background: var(--debug-bg-lighter, #2a2a2a);
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    cursor: pointer;
}

.plane-remove:hover {
    border-color: var(--debug-error, #f44336);
    color: var(--debug-error, #f44336);
}

.plane-toggle {
    margin-top: 6px;
    padding: 4px 0;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    user-select: none;
}

.plane-toggle:hover {
    color: var(--debug-text, #e0e0e0);
}

.toggle-arrow {
    display: inline-block;
    transition: transform 0.15s ease;
}

.toggle-arrow::before {
    content: '\\25B6';
}

.plane-overrides:not(.hidden) ~ .plane-toggle .toggle-arrow,
:host([expanded]) .toggle-arrow {
    transform: rotate(90deg);
}

.plane-overrides {
    margin-top: 6px;
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.plane-overrides.hidden {
    display: none;
}

.override-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    font-size: 10px;
}

.override-label {
    color: var(--debug-text-muted, #888);
}

.override-controls {
    display: flex;
    align-items: center;
    gap: 4px;
}

.global-label {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
}

.override-row input[type="checkbox"] {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}

.grid-color-input,
.center-color-input {
    width: 24px;
    height: 18px;
    padding: 0;
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    cursor: pointer;
}

.grid-color-input:disabled,
.center-color-input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.grid-thickness-input,
.center-thickness-input {
    width: 45px !important;
}

/* Form inputs for shadow DOM */
.debug-input {
    background: var(--debug-bg, #1e1e1e);
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 6px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 11px;
}

.debug-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.debug-input:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.debug-button {
    background: var(--debug-bg, #1e1e1e);
    border: 1px solid var(--debug-border, #3c3c3c);
    color: var(--debug-text, #e0e0e0);
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
    font-family: inherit;
    font-size: 10px;
}

.debug-button:hover {
    border-color: var(--debug-accent, #4a90d9);
}
`;class Ie extends HTMLElement{static tagName="debug-grid-plane-card";shadow;initialized=!1;enabledCheckbox;axisLabel;positionInput;removeBtn;toggleEl;overridesEl;gridColorGlobal;gridColorInput;centerColorGlobal;centerColorInput;gridThicknessGlobal;gridThicknessInput;centerThicknessGlobal;centerThicknessInput;defaultGridColor="#222222";defaultCenterColor="#444444";defaultGridThickness=1;defaultCenterThickness=1.5;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${la}</style>${ra}`,this.cacheElements()}cacheElements(){this.enabledCheckbox=this.shadow.querySelector(".plane-enabled"),this.axisLabel=this.shadow.querySelector(".plane-axis"),this.positionInput=this.shadow.querySelector(".plane-position"),this.removeBtn=this.shadow.querySelector(".plane-remove"),this.toggleEl=this.shadow.querySelector(".plane-toggle"),this.overridesEl=this.shadow.querySelector(".plane-overrides"),this.gridColorGlobal=this.shadow.querySelector(".grid-color-global"),this.gridColorInput=this.shadow.querySelector(".grid-color-input"),this.centerColorGlobal=this.shadow.querySelector(".center-color-global"),this.centerColorInput=this.shadow.querySelector(".center-color-input"),this.gridThicknessGlobal=this.shadow.querySelector(".grid-thickness-global"),this.gridThicknessInput=this.shadow.querySelector(".grid-thickness-input"),this.centerThicknessGlobal=this.shadow.querySelector(".center-thickness-global"),this.centerThicknessInput=this.shadow.querySelector(".center-thickness-input")}setupEventListeners(){this.enabledCheckbox.addEventListener("change",this.onEnabledChange),this.positionInput.addEventListener("change",this.onPositionChange),this.removeBtn.addEventListener("click",this.onRemoveClick),this.toggleEl.addEventListener("click",this.onToggleClick),this.gridColorGlobal.addEventListener("change",this.onGridColorGlobalChange),this.gridColorInput.addEventListener("input",this.onGridColorChange),this.centerColorGlobal.addEventListener("change",this.onCenterColorGlobalChange),this.centerColorInput.addEventListener("input",this.onCenterColorChange),this.gridThicknessGlobal.addEventListener("change",this.onGridThicknessGlobalChange),this.gridThicknessInput.addEventListener("change",this.onGridThicknessChange),this.centerThicknessGlobal.addEventListener("change",this.onCenterThicknessGlobalChange),this.centerThicknessInput.addEventListener("change",this.onCenterThicknessChange)}cleanupEventListeners(){this.enabledCheckbox.removeEventListener("change",this.onEnabledChange),this.positionInput.removeEventListener("change",this.onPositionChange),this.removeBtn.removeEventListener("click",this.onRemoveClick),this.toggleEl.removeEventListener("click",this.onToggleClick),this.gridColorGlobal.removeEventListener("change",this.onGridColorGlobalChange),this.gridColorInput.removeEventListener("input",this.onGridColorChange),this.centerColorGlobal.removeEventListener("change",this.onCenterColorGlobalChange),this.centerColorInput.removeEventListener("input",this.onCenterColorChange),this.gridThicknessGlobal.removeEventListener("change",this.onGridThicknessGlobalChange),this.gridThicknessInput.removeEventListener("change",this.onGridThicknessChange),this.centerThicknessGlobal.removeEventListener("change",this.onCenterThicknessGlobalChange),this.centerThicknessInput.removeEventListener("change",this.onCenterThicknessChange)}onEnabledChange=()=>{this.dispatchEvent(new CustomEvent("enable-change",{bubbles:!0,composed:!0,detail:{enabled:this.enabledCheckbox.checked}}))};onPositionChange=()=>{this.dispatchEvent(new CustomEvent("position-change",{bubbles:!0,composed:!0,detail:{position:parseFloat(this.positionInput.value)||0}}))};onRemoveClick=()=>{this.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0}))};onToggleClick=()=>{this.overridesEl.classList.toggle("hidden")};onGridColorGlobalChange=()=>{const e=this.gridColorGlobal.checked;this.gridColorInput.disabled=e,this.dispatchEvent(new CustomEvent("grid-color-change",{bubbles:!0,composed:!0,detail:{color:e?null:this.gridColorInput.value}}))};onGridColorChange=()=>{this.dispatchEvent(new CustomEvent("grid-color-change",{bubbles:!0,composed:!0,detail:{color:this.gridColorInput.value}}))};onCenterColorGlobalChange=()=>{const e=this.centerColorGlobal.checked;this.centerColorInput.disabled=e,this.dispatchEvent(new CustomEvent("center-color-change",{bubbles:!0,composed:!0,detail:{color:e?null:this.centerColorInput.value}}))};onCenterColorChange=()=>{this.dispatchEvent(new CustomEvent("center-color-change",{bubbles:!0,composed:!0,detail:{color:this.centerColorInput.value}}))};onGridThicknessGlobalChange=()=>{const e=this.gridThicknessGlobal.checked;this.gridThicknessInput.disabled=e,this.dispatchEvent(new CustomEvent("grid-thickness-change",{bubbles:!0,composed:!0,detail:{thickness:e?null:parseFloat(this.gridThicknessInput.value)}}))};onGridThicknessChange=()=>{this.dispatchEvent(new CustomEvent("grid-thickness-change",{bubbles:!0,composed:!0,detail:{thickness:parseFloat(this.gridThicknessInput.value)}}))};onCenterThicknessGlobalChange=()=>{const e=this.centerThicknessGlobal.checked;this.centerThicknessInput.disabled=e,this.dispatchEvent(new CustomEvent("center-thickness-change",{bubbles:!0,composed:!0,detail:{thickness:e?null:parseFloat(this.centerThicknessInput.value)}}))};onCenterThicknessChange=()=>{this.dispatchEvent(new CustomEvent("center-thickness-change",{bubbles:!0,composed:!0,detail:{thickness:parseFloat(this.centerThicknessInput.value)}}))};setState(e){this.axisLabel.textContent=e.axis,this.positionInput.value=String(e.position),this.enabledCheckbox.checked=e.enabled,this.gridColorGlobal.checked=e.gridColor===null,this.gridColorInput.disabled=e.gridColor===null,this.gridColorInput.value=e.gridColor??this.defaultGridColor,this.centerColorGlobal.checked=e.centerColor===null,this.centerColorInput.disabled=e.centerColor===null,this.centerColorInput.value=e.centerColor??this.defaultCenterColor,this.gridThicknessGlobal.checked=e.gridThickness===null,this.gridThicknessInput.disabled=e.gridThickness===null,this.gridThicknessInput.value=String(e.gridThickness??this.defaultGridThickness),this.centerThicknessGlobal.checked=e.centerThickness===null,this.centerThicknessInput.disabled=e.centerThickness===null,this.centerThicknessInput.value=String(e.centerThickness??this.defaultCenterThickness)}setGlobalDefaults(e,t,n,s){this.defaultGridColor=e,this.defaultCenterColor=t,this.defaultGridThickness=n,this.defaultCenterThickness=s}static register(){customElements.get(Ie.tagName)||customElements.define(Ie.tagName,Ie)}}Ie.register();Ie.register();class nt extends HTMLElement{static tagName="debug-grid-tool-panel";shadow;initialized=!1;cellSizeInput;gridSizeInput;gridColorInput;centerColorInput;gridThicknessInput;centerThicknessInput;opacityInput;majorIntervalInput;majorColorInput;majorThicknessInput;addBtn;addDialog;dialogAxis;dialogPosition;dialogCancel;dialogAdd;planesList;planeCards=new Map;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${aa}</style>${oa}`,this.cacheElements()}cacheElements(){this.cellSizeInput=this.shadow.querySelector(".cell-size-input"),this.gridSizeInput=this.shadow.querySelector(".grid-size-input"),this.gridColorInput=this.shadow.querySelector(".grid-color-input"),this.centerColorInput=this.shadow.querySelector(".center-color-input"),this.gridThicknessInput=this.shadow.querySelector(".grid-thickness-input"),this.centerThicknessInput=this.shadow.querySelector(".center-thickness-input"),this.opacityInput=this.shadow.querySelector(".opacity-input"),this.majorIntervalInput=this.shadow.querySelector(".major-interval-input"),this.majorColorInput=this.shadow.querySelector(".major-color-input"),this.majorThicknessInput=this.shadow.querySelector(".major-thickness-input"),this.addBtn=this.shadow.querySelector(".add-plane-btn"),this.addDialog=this.shadow.querySelector(".add-dialog"),this.dialogAxis=this.shadow.querySelector(".dialog-axis"),this.dialogPosition=this.shadow.querySelector(".dialog-position"),this.dialogCancel=this.shadow.querySelector(".dialog-cancel"),this.dialogAdd=this.shadow.querySelector(".dialog-add"),this.planesList=this.shadow.querySelector(".planes-list")}setupEventListeners(){this.cellSizeInput.addEventListener("change",this.onCellSizeChange),this.gridSizeInput.addEventListener("change",this.onGridSizeChange),this.gridColorInput.addEventListener("input",this.onGridColorChange),this.centerColorInput.addEventListener("input",this.onCenterColorChange),this.gridThicknessInput.addEventListener("change",this.onGridThicknessChange),this.centerThicknessInput.addEventListener("change",this.onCenterThicknessChange),this.opacityInput.addEventListener("change",this.onOpacityChange),this.majorIntervalInput.addEventListener("change",this.onMajorIntervalChange),this.majorColorInput.addEventListener("input",this.onMajorColorChange),this.majorThicknessInput.addEventListener("change",this.onMajorThicknessChange),this.addBtn.addEventListener("click",this.onAddBtnClick),this.dialogCancel.addEventListener("click",this.onDialogCancel),this.dialogAdd.addEventListener("click",this.onDialogAdd),this.shadow.querySelectorAll(".subsection-header").forEach(e=>{e.addEventListener("click",t=>{if(t.target.closest(".add-plane-btn"))return;const n=e.closest(".subsection");if(n){n.classList.toggle("collapsed");const s=e.querySelector(".subsection-icon");s&&(s.textContent=n.classList.contains("collapsed")?"▶":"▼")}})})}cleanupEventListeners(){this.cellSizeInput.removeEventListener("change",this.onCellSizeChange),this.gridSizeInput.removeEventListener("change",this.onGridSizeChange),this.gridColorInput.removeEventListener("input",this.onGridColorChange),this.centerColorInput.removeEventListener("input",this.onCenterColorChange),this.gridThicknessInput.removeEventListener("change",this.onGridThicknessChange),this.centerThicknessInput.removeEventListener("change",this.onCenterThicknessChange),this.opacityInput.removeEventListener("change",this.onOpacityChange),this.majorIntervalInput.removeEventListener("change",this.onMajorIntervalChange),this.majorColorInput.removeEventListener("input",this.onMajorColorChange),this.majorThicknessInput.removeEventListener("change",this.onMajorThicknessChange),this.addBtn.removeEventListener("click",this.onAddBtnClick),this.dialogCancel.removeEventListener("click",this.onDialogCancel),this.dialogAdd.removeEventListener("click",this.onDialogAdd)}onCellSizeChange=()=>{this.dispatchEvent(new CustomEvent("cell-size-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.cellSizeInput.value)||1}}))};onGridSizeChange=()=>{this.dispatchEvent(new CustomEvent("grid-size-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.gridSizeInput.value)||100}}))};onGridColorChange=()=>{this.dispatchEvent(new CustomEvent("grid-color-change",{bubbles:!0,composed:!0,detail:{value:this.gridColorInput.value}}))};onCenterColorChange=()=>{this.dispatchEvent(new CustomEvent("center-color-change",{bubbles:!0,composed:!0,detail:{value:this.centerColorInput.value}}))};onGridThicknessChange=()=>{this.dispatchEvent(new CustomEvent("grid-thickness-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.gridThicknessInput.value)||1}}))};onCenterThicknessChange=()=>{this.dispatchEvent(new CustomEvent("center-thickness-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.centerThicknessInput.value)||1.5}}))};onOpacityChange=()=>{this.dispatchEvent(new CustomEvent("opacity-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.opacityInput.value)||1}}))};onMajorIntervalChange=()=>{this.dispatchEvent(new CustomEvent("major-interval-change",{bubbles:!0,composed:!0,detail:{value:parseInt(this.majorIntervalInput.value)||5}}))};onMajorColorChange=()=>{this.dispatchEvent(new CustomEvent("major-color-change",{bubbles:!0,composed:!0,detail:{value:this.majorColorInput.value}}))};onMajorThicknessChange=()=>{this.dispatchEvent(new CustomEvent("major-thickness-change",{bubbles:!0,composed:!0,detail:{value:parseFloat(this.majorThicknessInput.value)||1.5}}))};onAddBtnClick=()=>{this.addDialog.classList.remove("hidden")};onDialogCancel=()=>{this.addDialog.classList.add("hidden")};onDialogAdd=()=>{const e=this.dialogAxis.value,t=parseFloat(this.dialogPosition.value)||0;this.dispatchEvent(new CustomEvent("add-plane",{bubbles:!0,composed:!0,detail:{axis:e,position:t}})),this.addDialog.classList.add("hidden"),this.dialogPosition.value="0"};setSettings(e){this.cellSizeInput.value=String(e.cellSize),this.gridSizeInput.value=String(e.gridSize),this.gridColorInput.value=e.gridColor,this.centerColorInput.value=e.centerColor,this.gridThicknessInput.value=String(e.gridThickness),this.centerThicknessInput.value=String(e.centerThickness),this.opacityInput.value=String(e.opacity),this.majorIntervalInput.value=String(e.majorInterval),this.majorColorInput.value=e.majorColor,this.majorThicknessInput.value=String(e.majorThickness)}addPlaneCard(e,t){const n=document.createElement(Ie.tagName);return n.dataset.planeId=e,n.setState(t),n.setGlobalDefaults(this.gridColorInput.value,this.centerColorInput.value,parseFloat(this.gridThicknessInput.value),parseFloat(this.centerThicknessInput.value)),this.planesList.appendChild(n),this.planeCards.set(e,n),this.updateEmptyState(),n}removePlaneCard(e){const t=this.planeCards.get(e);t&&(t.remove(),this.planeCards.delete(e),this.updateEmptyState())}getPlaneCard(e){return this.planeCards.get(e)}clearPlaneCards(){for(const e of this.planeCards.values())e.remove();this.planeCards.clear(),this.updateEmptyState()}updateEmptyState(){const e=this.planesList.querySelector(".planes-empty");if(this.planeCards.size===0){if(!e){const t=document.createElement("div");t.className="planes-empty",t.textContent="No grid planes",this.planesList.appendChild(t)}}else e&&e.remove()}static register(){customElements.get(nt.tagName)||customElements.define(nt.tagName,nt)}}nt.register();var ca="varying vec3 vWorldPosition;void main(){vec4 worldPos=modelMatrix*vec4(position,1.0);vWorldPosition=worldPos.xyz;gl_Position=projectionMatrix*viewMatrix*worldPos;}",da="uniform float uCellSize;uniform vec3 uGridColor;uniform vec3 uCenterColor;uniform float uGridThickness;uniform float uCenterThickness;uniform float uOpacity;uniform int uAxis;uniform float uMajorInterval;uniform vec3 uMajorColor;uniform float uMajorThickness;varying vec3 vWorldPosition;void main(){vec2 planePos;if(uAxis==1){planePos=vWorldPosition.xy;}else if(uAxis==2){planePos=vWorldPosition.yz;}else{planePos=vWorldPosition.xz;}vec2 minorCoord=planePos/uCellSize;vec2 minorGrid=abs(fract(minorCoord-0.5)-0.5);vec2 minorWidth=fwidth(minorCoord);vec2 minorLine=minorGrid/minorWidth;float minorDist=min(minorLine.x,minorLine.y);float majorCellSize=uCellSize*uMajorInterval;vec2 majorCoord=planePos/majorCellSize;vec2 majorGrid=abs(fract(majorCoord-0.5)-0.5);vec2 majorWidth=fwidth(majorCoord);vec2 majorLine=majorGrid/majorWidth;float majorDist=min(majorLine.x,majorLine.y);vec2 centerDist=abs(planePos);vec2 centerWidth=fwidth(planePos);vec2 centerLine=centerDist/centerWidth;float centerLineDist=min(centerLine.x,centerLine.y);float minorAlpha=1.0-smoothstep(0.0,uGridThickness,minorDist);float majorAlpha=1.0-smoothstep(0.0,uMajorThickness,majorDist);float centerAlpha=1.0-smoothstep(0.0,uCenterThickness,centerLineDist);vec3 color=uGridColor;float alpha=minorAlpha;color=mix(color,uMajorColor,majorAlpha);alpha=max(alpha,majorAlpha);color=mix(color,uCenterColor,centerAlpha);alpha=max(alpha,centerAlpha);alpha*=uOpacity;if(alpha<0.01)discard;gl_FragColor=vec4(color,alpha);}";class ha extends _{id="grid";name="Grid";icon="grid";planes=new Map;size=100;cellSize=1;globalGridColor="#222222";globalCenterColor="#444444";globalGridThickness=1;globalCenterThickness=1.5;globalOpacity=1;majorInterval=5;majorColor="#333333";majorThickness=1.5;nextId=1;component=null;modeChangeUnsubscribe=null;previousScene=null;init(e){super.init(e),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&this.onModeChanged()})}onModeChanged(){if(this.previousScene)for(const e of this.planes.values())this.previousScene.remove(e.mesh);for(const e of this.planes.values())e.enabled&&this.scene.add(e.mesh);this.previousScene=this.scene}enable(){this.planes.size===0&&this.addPlane("XZ",0);for(const e of this.planes.values())e.enabled&&this.scene.add(e.mesh);this.previousScene=this.scene}disable(){for(const e of this.planes.values())this.scene.remove(e.mesh)}addPlane(e,t){const n=`plane_${this.nextId++}`,s=this.createGridMesh(n);this.orientGrid(s,e,t);const i={id:n,axis:e,position:t,mesh:s,enabled:!0,gridColor:null,centerColor:null,gridThickness:null,centerThickness:null};return this.planes.set(n,i),this.enabled&&this.scene.add(s),this.updateUI(),this.manager.history.recordAction("Add grid plane"),n}removePlane(e){const t=this.planes.get(e);t&&(this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose(),this.planes.delete(e),this.updateUI(),this.manager.history.recordAction("Remove grid plane"))}togglePlane(e,t){const n=this.planes.get(e);n&&n.enabled!==t&&(n.enabled=t,this.enabled&&(t?this.scene.add(n.mesh):this.scene.remove(n.mesh)),this.manager.history.recordAction(t?"Enable grid plane":"Disable grid plane"))}setPlanePosition(e,t){const n=this.planes.get(e);n&&n.position!==t&&(n.position=t,this.orientGrid(n.mesh,n.axis,t),this.manager.history.recordAction("Grid plane position"))}setCellSize(e){this.cellSize!==e&&(this.cellSize=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid cell size"))}setSize(e){this.size!==e&&(this.size=e,this.rebuildAllGrids(),this.manager.history.recordAction("Grid size"))}setGlobalGridColor(e){this.globalGridColor!==e&&(this.globalGridColor=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid color"))}setGlobalCenterColor(e){this.globalCenterColor!==e&&(this.globalCenterColor=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid center color"))}setGlobalGridThickness(e){this.globalGridThickness!==e&&(this.globalGridThickness=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid thickness"))}setGlobalCenterThickness(e){this.globalCenterThickness!==e&&(this.globalCenterThickness=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid center thickness"))}setGlobalOpacity(e){this.globalOpacity!==e&&(this.globalOpacity=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid opacity"))}setMajorInterval(e){this.majorInterval!==e&&(this.majorInterval=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid major interval"))}setMajorColor(e){this.majorColor!==e&&(this.majorColor=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid major color"))}setMajorThickness(e){this.majorThickness!==e&&(this.majorThickness=e,this.updateAllUniforms(),this.manager.history.recordAction("Grid major thickness"))}setPlaneGridColor(e,t){const n=this.planes.get(e);n&&n.gridColor!==t&&(n.gridColor=t,this.updatePlaneUniforms(n),this.manager.history.recordAction("Grid plane color"))}setPlaneCenterColor(e,t){const n=this.planes.get(e);n&&n.centerColor!==t&&(n.centerColor=t,this.updatePlaneUniforms(n),this.manager.history.recordAction("Grid plane center color"))}setPlaneGridThickness(e,t){const n=this.planes.get(e);n&&n.gridThickness!==t&&(n.gridThickness=t,this.updatePlaneUniforms(n),this.manager.history.recordAction("Grid plane thickness"))}setPlaneCenterThickness(e,t){const n=this.planes.get(e);n&&n.centerThickness!==t&&(n.centerThickness=t,this.updatePlaneUniforms(n),this.manager.history.recordAction("Grid plane center thickness"))}createGridMesh(e){const t=new Tt(this.size,this.size),n=new de({vertexShader:ca,fragmentShader:da,uniforms:{uCellSize:{value:this.cellSize},uGridColor:{value:new N(this.globalGridColor)},uCenterColor:{value:new N(this.globalCenterColor)},uGridThickness:{value:this.globalGridThickness},uCenterThickness:{value:this.globalCenterThickness},uOpacity:{value:this.globalOpacity},uAxis:{value:0},uMajorInterval:{value:this.majorInterval},uMajorColor:{value:new N(this.majorColor)},uMajorThickness:{value:this.majorThickness}},transparent:!0,side:Gt,depthWrite:!1}),s=new S(t,n);return s.name=`__debug_grid_${e}__`,s.frustumCulled=!1,s}orientGrid(e,t,n){e.rotation.set(0,0,0),e.position.set(0,0,0);const s=e.material;switch(t){case"XZ":e.rotation.x=-Math.PI/2,e.position.y=n,s.uniforms.uAxis.value=0;break;case"XY":e.position.z=n,s.uniforms.uAxis.value=1;break;case"YZ":e.rotation.y=Math.PI/2,e.position.x=n,s.uniforms.uAxis.value=2;break}}updatePlaneUniforms(e){const t=e.mesh.material;t.uniforms&&(t.uniforms.uCellSize.value=this.cellSize,t.uniforms.uGridColor.value.set(e.gridColor??this.globalGridColor),t.uniforms.uCenterColor.value.set(e.centerColor??this.globalCenterColor),t.uniforms.uGridThickness.value=e.gridThickness??this.globalGridThickness,t.uniforms.uCenterThickness.value=e.centerThickness??this.globalCenterThickness,t.uniforms.uOpacity.value=this.globalOpacity,t.uniforms.uMajorInterval.value=this.majorInterval,t.uniforms.uMajorColor.value.set(this.majorColor),t.uniforms.uMajorThickness.value=this.majorThickness)}updateAllUniforms(){for(const e of this.planes.values())this.updatePlaneUniforms(e)}rebuildAllGrids(){for(const e of this.planes.values())this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.geometry=new Tt(this.size,this.size),this.orientGrid(e.mesh,e.axis,e.position),this.enabled&&e.enabled&&this.scene.add(e.mesh)}createUI(e){this.component=document.createElement(nt.tagName),this.component.setSettings({cellSize:this.cellSize,gridSize:this.size,gridColor:this.globalGridColor,centerColor:this.globalCenterColor,gridThickness:this.globalGridThickness,centerThickness:this.globalCenterThickness,opacity:this.globalOpacity,majorInterval:this.majorInterval,majorColor:this.majorColor,majorThickness:this.majorThickness}),this.component.addEventListener("cell-size-change",this.onCellSizeChange),this.component.addEventListener("grid-size-change",this.onGridSizeChange),this.component.addEventListener("grid-color-change",this.onGridColorChange),this.component.addEventListener("center-color-change",this.onCenterColorChange),this.component.addEventListener("grid-thickness-change",this.onGridThicknessChange),this.component.addEventListener("center-thickness-change",this.onCenterThicknessChange),this.component.addEventListener("opacity-change",this.onOpacityChange),this.component.addEventListener("major-interval-change",this.onMajorIntervalChange),this.component.addEventListener("major-color-change",this.onMajorColorChange),this.component.addEventListener("major-thickness-change",this.onMajorThicknessChange),this.component.addEventListener("add-plane",this.onAddPlane),e.appendChild(this.component),this.updateUI()}onCellSizeChange=e=>{this.setCellSize(e.detail.value)};onGridSizeChange=e=>{this.setSize(e.detail.value)};onGridColorChange=e=>{this.setGlobalGridColor(e.detail.value)};onCenterColorChange=e=>{this.setGlobalCenterColor(e.detail.value)};onGridThicknessChange=e=>{this.setGlobalGridThickness(e.detail.value)};onCenterThicknessChange=e=>{this.setGlobalCenterThickness(e.detail.value)};onOpacityChange=e=>{this.setGlobalOpacity(e.detail.value)};onMajorIntervalChange=e=>{this.setMajorInterval(e.detail.value)};onMajorColorChange=e=>{this.setMajorColor(e.detail.value)};onMajorThicknessChange=e=>{this.setMajorThickness(e.detail.value)};onAddPlane=e=>{const{axis:t,position:n}=e.detail;this.addPlane(t,n)};onPlaneEnableChange=(e,t)=>{this.togglePlane(e,t.detail.enabled)};onPlanePositionChange=(e,t)=>{this.setPlanePosition(e,t.detail.position)};onPlaneRemove=e=>{this.removePlane(e)};onPlaneGridColorChange=(e,t)=>{this.setPlaneGridColor(e,t.detail.color)};onPlaneCenterColorChange=(e,t)=>{this.setPlaneCenterColor(e,t.detail.color)};onPlaneGridThicknessChange=(e,t)=>{this.setPlaneGridThickness(e,t.detail.thickness)};onPlaneCenterThicknessChange=(e,t)=>{this.setPlaneCenterThickness(e,t.detail.thickness)};updateUI(){if(this.component){this.component.clearPlaneCards();for(const e of this.planes.values()){const t=this.component.addPlaneCard(e.id,{axis:e.axis,position:e.position,enabled:e.enabled,gridColor:e.gridColor,centerColor:e.centerColor,gridThickness:e.gridThickness,centerThickness:e.centerThickness});t.addEventListener("enable-change",n=>this.onPlaneEnableChange(e.id,n)),t.addEventListener("position-change",n=>this.onPlanePositionChange(e.id,n)),t.addEventListener("remove",()=>this.onPlaneRemove(e.id)),t.addEventListener("grid-color-change",n=>this.onPlaneGridColorChange(e.id,n)),t.addEventListener("center-color-change",n=>this.onPlaneCenterColorChange(e.id,n)),t.addEventListener("grid-thickness-change",n=>this.onPlaneGridThicknessChange(e.id,n)),t.addEventListener("center-thickness-change",n=>this.onPlaneCenterThicknessChange(e.id,n))}}}getState(){const e=[];for(const t of this.planes.values())e.push({axis:t.axis,position:t.position,enabled:t.enabled,gridColor:t.gridColor,centerColor:t.centerColor,gridThickness:t.gridThickness,centerThickness:t.centerThickness});return{size:this.size,cellSize:this.cellSize,globalGridColor:this.globalGridColor,globalCenterColor:this.globalCenterColor,globalGridThickness:this.globalGridThickness,globalCenterThickness:this.globalCenterThickness,globalOpacity:this.globalOpacity,majorInterval:this.majorInterval,majorColor:this.majorColor,majorThickness:this.majorThickness,planes:e}}setState(e){const t=e;if(t){if(typeof t.size=="number"&&(this.size=t.size),typeof t.cellSize=="number"&&(this.cellSize=t.cellSize),t.globalGridColor&&(this.globalGridColor=t.globalGridColor),t.globalCenterColor&&(this.globalCenterColor=t.globalCenterColor),typeof t.globalGridThickness=="number"&&(this.globalGridThickness=t.globalGridThickness),typeof t.globalCenterThickness=="number"&&(this.globalCenterThickness=t.globalCenterThickness),typeof t.globalOpacity=="number"&&(this.globalOpacity=t.globalOpacity),typeof t.majorInterval=="number"&&(this.majorInterval=t.majorInterval),t.majorColor&&(this.majorColor=t.majorColor),typeof t.majorThickness=="number"&&(this.majorThickness=t.majorThickness),Array.isArray(t.planes)){for(const n of this.planes.values())this.scene.remove(n.mesh),n.mesh.geometry.dispose(),n.mesh.material.dispose();this.planes.clear(),this.nextId=1;for(const n of t.planes){const s=`plane_${this.nextId++}`,i=this.createGridMesh(s);this.orientGrid(i,n.axis,n.position);const o={id:s,axis:n.axis,position:n.position,mesh:i,enabled:n.enabled,gridColor:n.gridColor,centerColor:n.centerColor,gridThickness:n.gridThickness,centerThickness:n.centerThickness};this.planes.set(s,o),this.updatePlaneUniforms(o),this.enabled&&o.enabled&&this.scene.add(i)}}this.component?.setSettings({cellSize:this.cellSize,gridSize:this.size,gridColor:this.globalGridColor,centerColor:this.globalCenterColor,gridThickness:this.globalGridThickness,centerThickness:this.globalCenterThickness,opacity:this.globalOpacity,majorInterval:this.majorInterval,majorColor:this.majorColor,majorThickness:this.majorThickness}),this.updateUI()}}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.component&&(this.component.removeEventListener("cell-size-change",this.onCellSizeChange),this.component.removeEventListener("grid-size-change",this.onGridSizeChange),this.component.removeEventListener("grid-color-change",this.onGridColorChange),this.component.removeEventListener("center-color-change",this.onCenterColorChange),this.component.removeEventListener("grid-thickness-change",this.onGridThicknessChange),this.component.removeEventListener("center-thickness-change",this.onCenterThicknessChange),this.component.removeEventListener("opacity-change",this.onOpacityChange),this.component.removeEventListener("major-interval-change",this.onMajorIntervalChange),this.component.removeEventListener("major-color-change",this.onMajorColorChange),this.component.removeEventListener("major-thickness-change",this.onMajorThicknessChange),this.component.removeEventListener("add-plane",this.onAddPlane),this.component=null);for(const e of this.planes.values())e.mesh.geometry.dispose(),e.mesh.material.dispose();this.planes.clear()}}class ua extends _{id="axes";name="Axes";icon="axes";axes=null;size=5;modeChangeUnsubscribe=null;previousScene=null;init(e){super.init(e),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&this.axes&&(this.previousScene?.remove(this.axes),this.scene.add(this.axes),this.previousScene=this.scene)})}enable(){this.axes||(this.axes=new ii(this.size),this.axes.name="__debug_axes__",this.scene.add(this.axes),this.previousScene=this.scene)}disable(){this.axes&&(this.scene.remove(this.axes),this.axes.dispose(),this.axes=null)}setSize(e){this.size!==e&&(this.size=e,this.enabled&&(this.disable(),this.enable()),this.manager.history.recordAction("Axes size"))}getState(){return{size:this.size}}setState(e){const t=e;t&&typeof t.size=="number"&&t.size!==this.size&&(this.size=t.size,this.enabled&&(this.disable(),this.enable()))}createUI(e){const t=document.createElement("div");t.className="debug-info-row",t.innerHTML=`
            <label>Size</label>
            <input type="number" value="${this.size}" step="1" min="1" style="width: 60px" class="debug-input">
        `;const n=t.querySelector("input");n.addEventListener("change",()=>{this.setSize(parseFloat(n.value)||5)}),e.appendChild(t);const s=document.createElement("div");s.className="debug-info-row",s.innerHTML=`
            <span style="color: #ff4444">X</span> /
            <span style="color: #44ff44">Y</span> /
            <span style="color: #4444ff">Z</span>
        `,s.style.fontSize="10px",s.style.opacity="0.7",e.appendChild(s)}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.disable()}}class pa extends _{id="wireframe";name="Wireframe";icon="wireframe";originalStates=new Map;enable(){this.traverseMaterials(this.scene,e=>{this.originalStates.has(e)||this.originalStates.set(e,e.wireframe??!1),e.wireframe=!0})}disable(){this.traverseMaterials(this.scene,e=>{const t=this.originalStates.get(e);t!==void 0?e.wireframe=t:e.wireframe=!1})}traverseMaterials(e,t){e.traverse(n=>{if(!n.name.startsWith("__debug_")&&n instanceof S){const s=Array.isArray(n.material)?n.material:[n.material];for(const i of s)i&&"wireframe"in i&&t(i)}})}dispose(){this.disable(),this.originalStates.clear()}}class ga extends _{id="raycaster";name="Raycaster";icon="raycaster";panel="info";raycaster;pointer=new Y;hitPoint=new v;hitNormal=new v;marker=null;hasHit=!1;hitObjectName="";positionDisplay=null;objectDisplay=null;onPointerMove;onClick;log;modeChangeUnsubscribe=null;previousScene=null;constructor(){super(),this.raycaster=new ct,this.onPointerMove=this.handlePointerMove.bind(this),this.onClick=this.handleClick.bind(this)}init(e){super.init(e),this.log=this.engine.getLogger("Debug.RaycasterTool"),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&this.marker&&(this.previousScene?.remove(this.marker),this.scene.add(this.marker),this.previousScene=this.scene)})}enable(){this.marker=new S(new ye(.05,16,16),new ce({color:16711680,depthTest:!1})),this.marker.name="__debug_raycaster_marker__",this.marker.renderOrder=999,this.marker.visible=!1,this.scene.add(this.marker),this.previousScene=this.scene;const e=this.engine.canvas;e instanceof HTMLCanvasElement&&(e.addEventListener("pointermove",this.onPointerMove),e.addEventListener("click",this.onClick))}disable(){this.marker&&(this.scene.remove(this.marker),this.marker.geometry.dispose(),this.marker.material.dispose(),this.marker=null);const e=this.engine.canvas;e instanceof HTMLCanvasElement&&(e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("click",this.onClick)),this.hasHit=!1,this.updateDisplay()}handlePointerMove(e){const t=this.engine.sizes;this.pointer.x=e.clientX/t.width*2-1,this.pointer.y=-(e.clientY/t.height)*2+1}handleClick(e){if(this.hasHit){const t=`[${this.hitPoint.x.toFixed(3)}, ${this.hitPoint.y.toFixed(3)}, ${this.hitPoint.z.toFixed(3)}]`;navigator.clipboard.writeText(t).then(()=>{this.log.info("Position copied: %s",t)})}}update(e){this.raycaster.setFromCamera(this.pointer,this.engine.getActiveCamera());const n=this.raycaster.intersectObjects(this.scene.children,!0).filter(s=>!s.object.name.startsWith("__debug_"));if(n.length>0){const s=n[0];this.hitPoint.copy(s.point),this.hitNormal.copy(s.face?.normal??new v(0,1,0)),this.hitObjectName=s.object.name||s.object.type,this.hasHit=!0,this.marker&&(this.marker.position.copy(this.hitPoint),this.marker.visible=!0)}else this.hasHit=!1,this.hitObjectName="",this.marker&&(this.marker.visible=!1);this.updateDisplay()}updateDisplay(){this.positionDisplay&&(this.hasHit?this.positionDisplay.textContent=`${this.hitPoint.x.toFixed(2)}, ${this.hitPoint.y.toFixed(2)}, ${this.hitPoint.z.toFixed(2)}`:this.positionDisplay.textContent="-"),this.objectDisplay&&(this.objectDisplay.textContent=this.hasHit?this.hitObjectName:"-")}createUI(e){const t=document.createElement("div");t.className="debug-info-row",t.innerHTML=`
            <span class="debug-info-label">Position</span>
            <span class="debug-info-value">-</span>
        `,this.positionDisplay=t.querySelector(".debug-info-value"),e.appendChild(t);const n=document.createElement("div");n.className="debug-info-row",n.innerHTML=`
            <span class="debug-info-label">Object</span>
            <span class="debug-info-value">-</span>
        `,this.objectDisplay=n.querySelector(".debug-info-value"),e.appendChild(n);const s=document.createElement("button");s.className="debug-button",s.textContent="Copy Position",s.addEventListener("click",()=>{if(this.hasHit){const o=`[${this.hitPoint.x.toFixed(3)}, ${this.hitPoint.y.toFixed(3)}, ${this.hitPoint.z.toFixed(3)}]`;navigator.clipboard.writeText(o)}}),e.appendChild(s);const i=document.createElement("div");i.style.fontSize="10px",i.style.opacity="0.6",i.style.marginTop="4px",i.textContent="Click in scene to copy position",e.appendChild(i)}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.disable(),this.positionDisplay=null,this.objectDisplay=null}}const ma=`<div class="camera-controls">
    <!-- Render Camera Selector -->
    <div class="render-selector-row">
        <label>Render Camera</label>
        <select class="render-camera-select">
            <option value="debug">Debug</option>
            <option value="scene" class="scene-option">Scene</option>
            <option value="lab" class="lab-option">Lab</option>
        </select>
    </div>

    <!-- Debug Camera Section -->
    <div class="camera-section debug-camera-section">
        <div class="camera-section-header" data-camera="debug">
            <span class="camera-section-arrow"></span>
            <span class="camera-section-title">Debug Camera</span>
        </div>
        <div class="camera-section-content">
            <div class="fov-row info-row">
                <span class="label">FOV</span>
                <input type="number" class="debug-fov-input input" min="10" max="120" step="1">
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Position</span><button class="copy-vec-btn" data-copy="debug-pos" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="debug-pos-x input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="debug-pos-y input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="debug-pos-z input" step="0.1">
                    </div>
                </div>
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Target</span><button class="copy-vec-btn" data-copy="debug-target" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="debug-target-x input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="debug-target-y input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="debug-target-z input" step="0.1">
                    </div>
                </div>
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Direction</span><button class="copy-vec-btn" data-copy="debug-dir" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="debug-dir-x input" step="0.01">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="debug-dir-y input" step="0.01">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="debug-dir-z input" step="0.01">
                    </div>
                </div>
            </div>

            <div class="camera-info-row">
                <span class="info-item"><span class="label">Rot:</span> <span class="debug-rotation-display">-</span></span>
                <span class="info-item"><span class="label">Asp:</span> <span class="debug-aspect-display">-</span></span>
            </div>
            <div class="camera-info-row">
                <span class="info-item"><span class="label">Near:</span> <span class="debug-near-display">-</span></span>
                <span class="info-item"><span class="label">Far:</span> <span class="debug-far-display">-</span></span>
            </div>

            <div class="button-row">
                <button class="btn debug-reset-btn">Reset</button>
                <button class="btn debug-copy-pos-btn">Copy Pos</button>
                <button class="btn debug-copy-all-btn">Copy All</button>
            </div>

            <div class="bookmarks-slot debug-bookmarks-slot"></div>
        </div>
    </div>

    <!-- Scene Camera Section -->
    <div class="camera-section scene-camera-section">
        <div class="camera-section-header" data-camera="scene">
            <span class="camera-section-arrow"></span>
            <span class="camera-section-title">Scene Camera</span>
            <div class="header-controls">
                <label class="header-checkbox-label">
                    <input type="checkbox" class="scene-helper-checkbox">
                    Helper
                </label>
                <label class="header-checkbox-label">
                    <input type="checkbox" class="manual-checkbox">
                    Manual
                </label>
            </div>
        </div>
        <div class="camera-section-content">
            <!-- Editable mode (when manual is checked) -->
            <div class="scene-editable-section">
                <div class="fov-row info-row">
                    <span class="label">FOV</span>
                    <input type="number" class="scene-fov-input input" min="10" max="120" step="1">
                </div>

                <div class="vector-section">
                    <div class="vector-header">
                        <span class="vector-label">Position</span><button class="copy-vec-btn" data-copy="scene-pos" title="Copy as JSON"></button>
                    </div>
                    <div class="vector-row">
                        <div class="axis-input">
                            <span class="axis-label x">X</span>
                            <input type="number" class="scene-pos-x input" step="0.1">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label y">Y</span>
                            <input type="number" class="scene-pos-y input" step="0.1">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label z">Z</span>
                            <input type="number" class="scene-pos-z input" step="0.1">
                        </div>
                    </div>
                </div>

                <div class="vector-section">
                    <div class="vector-header">
                        <span class="vector-label">Target</span><button class="copy-vec-btn" data-copy="scene-target" title="Copy as JSON"></button>
                    </div>
                    <div class="vector-row">
                        <div class="axis-input">
                            <span class="axis-label x">X</span>
                            <input type="number" class="scene-target-x input" step="0.1">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label y">Y</span>
                            <input type="number" class="scene-target-y input" step="0.1">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label z">Z</span>
                            <input type="number" class="scene-target-z input" step="0.1">
                        </div>
                    </div>
                </div>

                <div class="vector-section">
                    <div class="vector-header">
                        <span class="vector-label">Direction</span><button class="copy-vec-btn" data-copy="scene-dir" title="Copy as JSON"></button>
                    </div>
                    <div class="vector-row">
                        <div class="axis-input">
                            <span class="axis-label x">X</span>
                            <input type="number" class="scene-dir-x input" step="0.01">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label y">Y</span>
                            <input type="number" class="scene-dir-y input" step="0.01">
                        </div>
                        <div class="axis-input">
                            <span class="axis-label z">Z</span>
                            <input type="number" class="scene-dir-z input" step="0.01">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Read-only mode (default) -->
            <div class="scene-readonly-section">
                <div class="info-row">
                    <span class="label">Position</span>
                    <span class="scene-position-display value">-</span>
                </div>
                <div class="info-row">
                    <span class="label">Direction</span>
                    <span class="scene-direction-display value">-</span>
                </div>
                <div class="info-row">
                    <span class="label">Rotation</span>
                    <span class="scene-rotation-display value">-</span>
                </div>
                <div class="info-row">
                    <span class="label">FOV</span>
                    <span class="scene-fov-display value">-</span>
                </div>
            </div>

            <div class="camera-info-row">
                <span class="info-item"><span class="label">Asp:</span> <span class="scene-aspect-display">-</span></span>
                <span class="info-item"><span class="label">Near:</span> <span class="scene-near-display">-</span></span>
                <span class="info-item"><span class="label">Far:</span> <span class="scene-far-display">-</span></span>
            </div>

            <div class="button-row">
                <button class="btn scene-reset-btn">Reset</button>
                <button class="btn scene-copy-pos-btn">Copy Pos</button>
                <button class="btn scene-copy-all-btn">Copy All</button>
            </div>

            <div class="bookmarks-slot scene-bookmarks-slot"></div>
        </div>
    </div>

    <!-- Lab Camera Section -->
    <div class="camera-section lab-camera-section">
        <div class="camera-section-header" data-camera="lab">
            <span class="camera-section-arrow"></span>
            <span class="camera-section-title">Lab Camera</span>
            <label class="header-checkbox-label">
                <input type="checkbox" class="lab-helper-checkbox">
                Helper
            </label>
        </div>
        <div class="camera-section-content">
            <div class="fov-row info-row">
                <span class="label">FOV</span>
                <input type="number" class="lab-fov-input input" min="10" max="120" step="1">
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Position</span><button class="copy-vec-btn" data-copy="lab-pos" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="lab-pos-x input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="lab-pos-y input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="lab-pos-z input" step="0.1">
                    </div>
                </div>
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Target</span><button class="copy-vec-btn" data-copy="lab-target" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="lab-target-x input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="lab-target-y input" step="0.1">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="lab-target-z input" step="0.1">
                    </div>
                </div>
            </div>

            <div class="vector-section">
                <div class="vector-header">
                    <span class="vector-label">Direction</span><button class="copy-vec-btn" data-copy="lab-dir" title="Copy as JSON"></button>
                </div>
                <div class="vector-row">
                    <div class="axis-input">
                        <span class="axis-label x">X</span>
                        <input type="number" class="lab-dir-x input" step="0.01">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label y">Y</span>
                        <input type="number" class="lab-dir-y input" step="0.01">
                    </div>
                    <div class="axis-input">
                        <span class="axis-label z">Z</span>
                        <input type="number" class="lab-dir-z input" step="0.01">
                    </div>
                </div>
            </div>

            <div class="camera-info-row">
                <span class="info-item"><span class="label">Rot:</span> <span class="lab-rotation-display">-</span></span>
                <span class="info-item"><span class="label">Asp:</span> <span class="lab-aspect-display">-</span></span>
            </div>
            <div class="camera-info-row">
                <span class="info-item"><span class="label">Near:</span> <span class="lab-near-display">-</span></span>
                <span class="info-item"><span class="label">Far:</span> <span class="lab-far-display">-</span></span>
            </div>

            <div class="button-row">
                <button class="btn lab-reset-btn">Reset</button>
                <button class="btn lab-copy-pos-btn">Copy Pos</button>
                <button class="btn lab-copy-all-btn">Copy All</button>
            </div>

            <div class="bookmarks-slot lab-bookmarks-slot"></div>
        </div>
    </div>
</div>
`,ba=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.camera-controls {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Render Camera Selector
   ───────────────────────────────────────────────────────────────────────────── */

.render-selector-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
    border-bottom: 1px solid var(--debug-border, #3c3c3c);
    margin-bottom: 2px;
}

.render-selector-row label {
    color: var(--debug-text, #e0e0e0);
    font-size: 11px;
    font-weight: 500;
}

.render-camera-select {
    padding: 4px 8px;
    background: var(--debug-accent, #4a90d9);
    border: 1px solid var(--debug-accent, #4a90d9);
    border-radius: 4px;
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    cursor: pointer;
}

.render-camera-select:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 217, 0.3);
}

.render-camera-select option {
    background: var(--debug-bg, #1e1e1e);
    color: var(--debug-text, #e0e0e0);
}

.render-camera-select option:disabled {
    color: var(--debug-text-muted, #888);
    font-style: italic;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Camera Sections (Collapsible)
   ───────────────────────────────────────────────────────────────────────────── */

.camera-section {
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    overflow: hidden;
}

.camera-section-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    cursor: pointer;
    font-size: 11px;
    color: var(--debug-text-muted, #888);
    user-select: none;
}

.camera-section-header:hover {
    color: var(--debug-text, #e0e0e0);
    background: rgba(0, 0, 0, 0.35);
}

.camera-section-arrow {
    font-size: 8px;
    transition: transform 0.15s ease;
    display: inline-block;
    width: 10px;
}

.camera-section-arrow::before {
    content: '\\25B6';
}

.camera-section:not(.collapsed) .camera-section-arrow {
    transform: rotate(90deg);
}

.camera-section-title {
    flex: 1;
    font-size: 11px;
}

.camera-section-content {
    padding: 8px;
}

.camera-section.collapsed .camera-section-content {
    display: none;
}

/* Disabled/Grayed state for unavailable cameras */
.camera-section.disabled {
    opacity: 0.5;
}

.camera-section.disabled .camera-section-content {
    pointer-events: none;
}

/* Header still clickable when disabled */
.camera-section.disabled .camera-section-header {
    pointer-events: auto;
    cursor: pointer;
}

.camera-section.disabled .camera-section-title::after {
    content: ' (unavailable)';
    font-style: italic;
    color: var(--debug-text-muted, #888);
}

/* ─────────────────────────────────────────────────────────────────────────────
   Header Controls (Checkboxes in Section Headers)
   ───────────────────────────────────────────────────────────────────────────── */

.header-controls {
    display: flex;
    gap: 8px;
    margin-left: auto;
}

.header-checkbox-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    pointer-events: auto;
}

.header-checkbox-label:hover {
    color: var(--debug-text, #e0e0e0);
}

.header-checkbox-label input[type="checkbox"] {
    cursor: pointer;
    margin: 0;
    accent-color: var(--debug-accent, #4a90d9);
}

/* Legacy class kept for compatibility */
.manual-checkbox {
    cursor: pointer;
    margin: 0;
    accent-color: var(--debug-accent, #4a90d9);
}

/* ─────────────────────────────────────────────────────────────────────────────
   Scene Camera Editable/ReadOnly Toggle
   ───────────────────────────────────────────────────────────────────────────── */

.scene-editable-section {
    display: none;
}

.scene-camera-section.manual-mode .scene-editable-section {
    display: block;
}

.scene-readonly-section {
    display: block;
}

.scene-camera-section.manual-mode .scene-readonly-section {
    display: none;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Info Rows
   ───────────────────────────────────────────────────────────────────────────── */

.info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 0;
    font-size: 11px;
}

.label {
    color: var(--debug-text-muted, #888);
}

.value {
    color: var(--debug-text, #e0e0e0);
}

/* Compact camera info row (multiple items per line) */
.camera-info-row {
    display: flex;
    gap: 12px;
    padding: 2px 0;
    font-size: 10px;
    margin-top: 4px;
}

.info-item {
    color: var(--debug-text, #e0e0e0);
}

.info-item .label {
    color: var(--debug-text-muted, #888);
}

/* ─────────────────────────────────────────────────────────────────────────────
   Input Styling
   ───────────────────────────────────────────────────────────────────────────── */

.input {
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 11px;
    width: 60px;
}

.input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

/* ─────────────────────────────────────────────────────────────────────────────
   Vector Section
   ───────────────────────────────────────────────────────────────────────────── */

.vector-section {
    margin-top: 6px;
}

.vector-header {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
}

.vector-label {
    color: var(--debug-text-muted, #888);
    font-size: 11px;
}

.copy-vec-btn {
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 10px;
    padding: 0;
    margin-left: 4px;
    width: 12px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.15s;
}

.copy-vec-btn::before {
    content: '\\2398';
}

.vector-section:hover .copy-vec-btn {
    opacity: 1;
}

.copy-vec-btn:hover {
    color: var(--debug-accent, #4a90d9);
}

.vector-row {
    display: flex;
    gap: 4px;
}

.axis-input {
    display: flex;
    align-items: center;
    gap: 2px;
}

.axis-label {
    font-size: 10px;
    width: 12px;
    font-weight: 500;
}

.axis-label.x {
    color: #ff6666;
}

.axis-label.y {
    color: #66ff66;
}

.axis-label.z {
    color: #6666ff;
}

.axis-input .input {
    width: 55px;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Buttons
   ───────────────────────────────────────────────────────────────────────────── */

.button-row {
    display: flex;
    gap: 4px;
    margin-top: 8px;
}

.btn {
    padding: 4px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 10px;
    cursor: pointer;
}

.btn:hover {
    border-color: var(--debug-accent, #4a90d9);
}

/* ─────────────────────────────────────────────────────────────────────────────
   FOV Row
   ───────────────────────────────────────────────────────────────────────────── */

.fov-row .input {
    width: 60px;
}

/* ─────────────────────────────────────────────────────────────────────────────
   Bookmarks Slot
   ───────────────────────────────────────────────────────────────────────────── */

.bookmarks-slot {
    margin-top: 8px;
}
`;class st extends HTMLElement{static tagName="debug-camera-controls";shadow;initialized=!1;renderCameraSelect=null;sceneOption=null;labOption=null;debugSection=null;sceneSection=null;labSection=null;manualCheckbox=null;sceneHelperCheckbox=null;labHelperCheckbox=null;debugFovInput=null;debugPosX=null;debugPosY=null;debugPosZ=null;debugTargetX=null;debugTargetY=null;debugTargetZ=null;debugDirX=null;debugDirY=null;debugDirZ=null;debugRotationDisplay=null;debugAspectDisplay=null;debugNearDisplay=null;debugFarDisplay=null;debugResetBtn=null;debugCopyPosBtn=null;debugCopyAllBtn=null;labFovInput=null;labPosX=null;labPosY=null;labPosZ=null;labTargetX=null;labTargetY=null;labTargetZ=null;labDirX=null;labDirY=null;labDirZ=null;labRotationDisplay=null;labAspectDisplay=null;labNearDisplay=null;labFarDisplay=null;labResetBtn=null;labCopyPosBtn=null;labCopyAllBtn=null;sceneFovInput=null;scenePosX=null;scenePosY=null;scenePosZ=null;sceneTargetX=null;sceneTargetY=null;sceneTargetZ=null;sceneDirX=null;sceneDirY=null;sceneDirZ=null;scenePositionDisplay=null;sceneDirectionDisplay=null;sceneRotationDisplay=null;sceneFovDisplay=null;sceneAspectDisplay=null;sceneNearDisplay=null;sceneFarDisplay=null;sceneResetBtn=null;sceneCopyPosBtn=null;sceneCopyAllBtn=null;debugBookmarksSlot=null;sceneBookmarksSlot=null;labBookmarksSlot=null;renderCamera="debug";manualMode=!1;labModeEnabled=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0,this.restoreCollapsedStates()),this.setupEventListeners(),this.updateSectionStates()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${ba}</style>${ma}`,this.cacheElements()}cacheElements(){this.renderCameraSelect=this.shadow.querySelector(".render-camera-select"),this.sceneOption=this.shadow.querySelector(".scene-option"),this.labOption=this.shadow.querySelector(".lab-option"),this.debugSection=this.shadow.querySelector(".debug-camera-section"),this.sceneSection=this.shadow.querySelector(".scene-camera-section"),this.labSection=this.shadow.querySelector(".lab-camera-section"),this.manualCheckbox=this.shadow.querySelector(".manual-checkbox"),this.sceneHelperCheckbox=this.shadow.querySelector(".scene-helper-checkbox"),this.labHelperCheckbox=this.shadow.querySelector(".lab-helper-checkbox"),this.debugFovInput=this.shadow.querySelector(".debug-fov-input"),this.debugPosX=this.shadow.querySelector(".debug-pos-x"),this.debugPosY=this.shadow.querySelector(".debug-pos-y"),this.debugPosZ=this.shadow.querySelector(".debug-pos-z"),this.debugTargetX=this.shadow.querySelector(".debug-target-x"),this.debugTargetY=this.shadow.querySelector(".debug-target-y"),this.debugTargetZ=this.shadow.querySelector(".debug-target-z"),this.debugDirX=this.shadow.querySelector(".debug-dir-x"),this.debugDirY=this.shadow.querySelector(".debug-dir-y"),this.debugDirZ=this.shadow.querySelector(".debug-dir-z"),this.debugRotationDisplay=this.shadow.querySelector(".debug-rotation-display"),this.debugAspectDisplay=this.shadow.querySelector(".debug-aspect-display"),this.debugNearDisplay=this.shadow.querySelector(".debug-near-display"),this.debugFarDisplay=this.shadow.querySelector(".debug-far-display"),this.debugResetBtn=this.shadow.querySelector(".debug-reset-btn"),this.debugCopyPosBtn=this.shadow.querySelector(".debug-copy-pos-btn"),this.debugCopyAllBtn=this.shadow.querySelector(".debug-copy-all-btn"),this.labFovInput=this.shadow.querySelector(".lab-fov-input"),this.labPosX=this.shadow.querySelector(".lab-pos-x"),this.labPosY=this.shadow.querySelector(".lab-pos-y"),this.labPosZ=this.shadow.querySelector(".lab-pos-z"),this.labTargetX=this.shadow.querySelector(".lab-target-x"),this.labTargetY=this.shadow.querySelector(".lab-target-y"),this.labTargetZ=this.shadow.querySelector(".lab-target-z"),this.labDirX=this.shadow.querySelector(".lab-dir-x"),this.labDirY=this.shadow.querySelector(".lab-dir-y"),this.labDirZ=this.shadow.querySelector(".lab-dir-z"),this.labRotationDisplay=this.shadow.querySelector(".lab-rotation-display"),this.labAspectDisplay=this.shadow.querySelector(".lab-aspect-display"),this.labNearDisplay=this.shadow.querySelector(".lab-near-display"),this.labFarDisplay=this.shadow.querySelector(".lab-far-display"),this.labResetBtn=this.shadow.querySelector(".lab-reset-btn"),this.labCopyPosBtn=this.shadow.querySelector(".lab-copy-pos-btn"),this.labCopyAllBtn=this.shadow.querySelector(".lab-copy-all-btn"),this.sceneFovInput=this.shadow.querySelector(".scene-fov-input"),this.scenePosX=this.shadow.querySelector(".scene-pos-x"),this.scenePosY=this.shadow.querySelector(".scene-pos-y"),this.scenePosZ=this.shadow.querySelector(".scene-pos-z"),this.sceneTargetX=this.shadow.querySelector(".scene-target-x"),this.sceneTargetY=this.shadow.querySelector(".scene-target-y"),this.sceneTargetZ=this.shadow.querySelector(".scene-target-z"),this.sceneDirX=this.shadow.querySelector(".scene-dir-x"),this.sceneDirY=this.shadow.querySelector(".scene-dir-y"),this.sceneDirZ=this.shadow.querySelector(".scene-dir-z"),this.scenePositionDisplay=this.shadow.querySelector(".scene-position-display"),this.sceneDirectionDisplay=this.shadow.querySelector(".scene-direction-display"),this.sceneRotationDisplay=this.shadow.querySelector(".scene-rotation-display"),this.sceneFovDisplay=this.shadow.querySelector(".scene-fov-display"),this.sceneAspectDisplay=this.shadow.querySelector(".scene-aspect-display"),this.sceneNearDisplay=this.shadow.querySelector(".scene-near-display"),this.sceneFarDisplay=this.shadow.querySelector(".scene-far-display"),this.sceneResetBtn=this.shadow.querySelector(".scene-reset-btn"),this.sceneCopyPosBtn=this.shadow.querySelector(".scene-copy-pos-btn"),this.sceneCopyAllBtn=this.shadow.querySelector(".scene-copy-all-btn"),this.debugBookmarksSlot=this.shadow.querySelector(".debug-bookmarks-slot"),this.sceneBookmarksSlot=this.shadow.querySelector(".scene-bookmarks-slot"),this.labBookmarksSlot=this.shadow.querySelector(".lab-bookmarks-slot")}setupEventListeners(){this.renderCameraSelect?.addEventListener("change",this.onRenderCameraChange),this.shadow.querySelectorAll(".camera-section-header").forEach(e=>{e.addEventListener("click",this.onSectionHeaderClick)}),this.manualCheckbox?.addEventListener("click",this.onManualCheckboxClick),this.manualCheckbox?.addEventListener("change",this.onManualCheckboxChange),this.sceneHelperCheckbox?.addEventListener("click",this.onHelperCheckboxClick),this.sceneHelperCheckbox?.addEventListener("change",this.onSceneHelperChange),this.labHelperCheckbox?.addEventListener("click",this.onHelperCheckboxClick),this.labHelperCheckbox?.addEventListener("change",this.onLabHelperChange),this.debugFovInput?.addEventListener("input",this.onDebugFovChange),this.debugPosX?.addEventListener("input",this.onDebugPositionChange),this.debugPosY?.addEventListener("input",this.onDebugPositionChange),this.debugPosZ?.addEventListener("input",this.onDebugPositionChange),this.debugTargetX?.addEventListener("input",this.onDebugTargetChange),this.debugTargetY?.addEventListener("input",this.onDebugTargetChange),this.debugTargetZ?.addEventListener("input",this.onDebugTargetChange),this.debugDirX?.addEventListener("input",this.onDebugDirectionChange),this.debugDirY?.addEventListener("input",this.onDebugDirectionChange),this.debugDirZ?.addEventListener("input",this.onDebugDirectionChange),this.debugResetBtn?.addEventListener("click",this.onDebugReset),this.debugCopyPosBtn?.addEventListener("click",this.onDebugCopyPosition),this.debugCopyAllBtn?.addEventListener("click",this.onDebugCopyAll),this.labFovInput?.addEventListener("input",this.onLabFovChange),this.labPosX?.addEventListener("input",this.onLabPositionChange),this.labPosY?.addEventListener("input",this.onLabPositionChange),this.labPosZ?.addEventListener("input",this.onLabPositionChange),this.labTargetX?.addEventListener("input",this.onLabTargetChange),this.labTargetY?.addEventListener("input",this.onLabTargetChange),this.labTargetZ?.addEventListener("input",this.onLabTargetChange),this.labDirX?.addEventListener("input",this.onLabDirectionChange),this.labDirY?.addEventListener("input",this.onLabDirectionChange),this.labDirZ?.addEventListener("input",this.onLabDirectionChange),this.labResetBtn?.addEventListener("click",this.onLabReset),this.labCopyPosBtn?.addEventListener("click",this.onLabCopyPosition),this.labCopyAllBtn?.addEventListener("click",this.onLabCopyAll),this.sceneFovInput?.addEventListener("input",this.onSceneFovChange),this.scenePosX?.addEventListener("input",this.onScenePositionChange),this.scenePosY?.addEventListener("input",this.onScenePositionChange),this.scenePosZ?.addEventListener("input",this.onScenePositionChange),this.sceneTargetX?.addEventListener("input",this.onSceneTargetChange),this.sceneTargetY?.addEventListener("input",this.onSceneTargetChange),this.sceneTargetZ?.addEventListener("input",this.onSceneTargetChange),this.sceneDirX?.addEventListener("input",this.onSceneDirectionChange),this.sceneDirY?.addEventListener("input",this.onSceneDirectionChange),this.sceneDirZ?.addEventListener("input",this.onSceneDirectionChange),this.sceneResetBtn?.addEventListener("click",this.onSceneReset),this.sceneCopyPosBtn?.addEventListener("click",this.onSceneCopyPosition),this.sceneCopyAllBtn?.addEventListener("click",this.onSceneCopyAll),this.shadow.addEventListener("click",this.onCopyVectorClick)}cleanupEventListeners(){this.renderCameraSelect?.removeEventListener("change",this.onRenderCameraChange),this.shadow.querySelectorAll(".camera-section-header").forEach(e=>{e.removeEventListener("click",this.onSectionHeaderClick)}),this.manualCheckbox?.removeEventListener("click",this.onManualCheckboxClick),this.manualCheckbox?.removeEventListener("change",this.onManualCheckboxChange),this.sceneHelperCheckbox?.removeEventListener("click",this.onHelperCheckboxClick),this.sceneHelperCheckbox?.removeEventListener("change",this.onSceneHelperChange),this.labHelperCheckbox?.removeEventListener("click",this.onHelperCheckboxClick),this.labHelperCheckbox?.removeEventListener("change",this.onLabHelperChange),this.debugFovInput?.removeEventListener("input",this.onDebugFovChange),this.debugPosX?.removeEventListener("input",this.onDebugPositionChange),this.debugPosY?.removeEventListener("input",this.onDebugPositionChange),this.debugPosZ?.removeEventListener("input",this.onDebugPositionChange),this.debugTargetX?.removeEventListener("input",this.onDebugTargetChange),this.debugTargetY?.removeEventListener("input",this.onDebugTargetChange),this.debugTargetZ?.removeEventListener("input",this.onDebugTargetChange),this.debugDirX?.removeEventListener("input",this.onDebugDirectionChange),this.debugDirY?.removeEventListener("input",this.onDebugDirectionChange),this.debugDirZ?.removeEventListener("input",this.onDebugDirectionChange),this.debugResetBtn?.removeEventListener("click",this.onDebugReset),this.debugCopyPosBtn?.removeEventListener("click",this.onDebugCopyPosition),this.debugCopyAllBtn?.removeEventListener("click",this.onDebugCopyAll),this.labFovInput?.removeEventListener("input",this.onLabFovChange),this.labPosX?.removeEventListener("input",this.onLabPositionChange),this.labPosY?.removeEventListener("input",this.onLabPositionChange),this.labPosZ?.removeEventListener("input",this.onLabPositionChange),this.labTargetX?.removeEventListener("input",this.onLabTargetChange),this.labTargetY?.removeEventListener("input",this.onLabTargetChange),this.labTargetZ?.removeEventListener("input",this.onLabTargetChange),this.labDirX?.removeEventListener("input",this.onLabDirectionChange),this.labDirY?.removeEventListener("input",this.onLabDirectionChange),this.labDirZ?.removeEventListener("input",this.onLabDirectionChange),this.labResetBtn?.removeEventListener("click",this.onLabReset),this.labCopyPosBtn?.removeEventListener("click",this.onLabCopyPosition),this.labCopyAllBtn?.removeEventListener("click",this.onLabCopyAll),this.sceneFovInput?.removeEventListener("input",this.onSceneFovChange),this.scenePosX?.removeEventListener("input",this.onScenePositionChange),this.scenePosY?.removeEventListener("input",this.onScenePositionChange),this.scenePosZ?.removeEventListener("input",this.onScenePositionChange),this.sceneTargetX?.removeEventListener("input",this.onSceneTargetChange),this.sceneTargetY?.removeEventListener("input",this.onSceneTargetChange),this.sceneTargetZ?.removeEventListener("input",this.onSceneTargetChange),this.sceneDirX?.removeEventListener("input",this.onSceneDirectionChange),this.sceneDirY?.removeEventListener("input",this.onSceneDirectionChange),this.sceneDirZ?.removeEventListener("input",this.onSceneDirectionChange),this.sceneResetBtn?.removeEventListener("click",this.onSceneReset),this.sceneCopyPosBtn?.removeEventListener("click",this.onSceneCopyPosition),this.sceneCopyAllBtn?.removeEventListener("click",this.onSceneCopyAll),this.shadow.removeEventListener("click",this.onCopyVectorClick)}restoreCollapsedStates(){["debug","scene","lab"].forEach(t=>{const n=this.getCameraSection(t);if(!n)return;const s=`camera-inspector.section.${t}`,i=Xt(s),o=t!=="debug";n.classList.toggle("collapsed",i??o)})}saveCollapsedState(e,t){const n=`camera-inspector.section.${e}`;Wt(n,t)}getCameraSection(e){switch(e){case"debug":return this.debugSection;case"scene":return this.sceneSection;case"lab":return this.labSection}}onRenderCameraChange=()=>{this.renderCamera=this.renderCameraSelect.value,this.dispatchEvent(new CustomEvent("render-camera-change",{bubbles:!0,composed:!0,detail:{camera:this.renderCamera}}))};onSectionHeaderClick=e=>{const n=e.currentTarget.dataset.camera;if(!n||e.target.closest(".manual-mode-label"))return;const s=this.getCameraSection(n);if(!s)return;const i=!s.classList.contains("collapsed");s.classList.toggle("collapsed",i),this.saveCollapsedState(n,i)};onManualCheckboxClick=e=>{e.stopPropagation()};onManualCheckboxChange=()=>{this.manualMode=this.manualCheckbox.checked,this.sceneSection?.classList.toggle("manual-mode",this.manualMode),this.dispatchEvent(new CustomEvent("manual-mode-change",{bubbles:!0,composed:!0,detail:{enabled:this.manualMode}}))};onHelperCheckboxClick=e=>{e.stopPropagation()};onSceneHelperChange=()=>{this.dispatchEvent(new CustomEvent("scene-helper-change",{bubbles:!0,composed:!0,detail:{visible:this.sceneHelperCheckbox.checked}}))};onLabHelperChange=()=>{this.dispatchEvent(new CustomEvent("lab-helper-change",{bubbles:!0,composed:!0,detail:{visible:this.labHelperCheckbox.checked}}))};onDebugFovChange=()=>{const e=parseFloat(this.debugFovInput.value);!isNaN(e)&&e>=10&&e<=120&&this.dispatchEvent(new CustomEvent("debug-fov-change",{bubbles:!0,composed:!0,detail:{fov:e}}))};onDebugPositionChange=()=>{this.dispatchEvent(new CustomEvent("debug-position-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.debugPosX.value)||0,y:parseFloat(this.debugPosY.value)||0,z:parseFloat(this.debugPosZ.value)||0}}))};onDebugTargetChange=()=>{this.dispatchEvent(new CustomEvent("debug-target-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.debugTargetX.value)||0,y:parseFloat(this.debugTargetY.value)||0,z:parseFloat(this.debugTargetZ.value)||0}}))};onDebugDirectionChange=()=>{this.dispatchEvent(new CustomEvent("debug-direction-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.debugDirX.value)||0,y:parseFloat(this.debugDirY.value)||0,z:parseFloat(this.debugDirZ.value)||0}}))};onDebugReset=()=>{this.dispatchEvent(new CustomEvent("debug-reset",{bubbles:!0,composed:!0}))};onDebugCopyPosition=()=>{this.dispatchEvent(new CustomEvent("debug-copy-position",{bubbles:!0,composed:!0}))};onDebugCopyAll=()=>{this.dispatchEvent(new CustomEvent("debug-copy-all",{bubbles:!0,composed:!0}))};onLabFovChange=()=>{const e=parseFloat(this.labFovInput.value);!isNaN(e)&&e>=10&&e<=120&&this.dispatchEvent(new CustomEvent("lab-fov-change",{bubbles:!0,composed:!0,detail:{fov:e}}))};onLabPositionChange=()=>{this.dispatchEvent(new CustomEvent("lab-position-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.labPosX.value)||0,y:parseFloat(this.labPosY.value)||0,z:parseFloat(this.labPosZ.value)||0}}))};onLabTargetChange=()=>{this.dispatchEvent(new CustomEvent("lab-target-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.labTargetX.value)||0,y:parseFloat(this.labTargetY.value)||0,z:parseFloat(this.labTargetZ.value)||0}}))};onLabDirectionChange=()=>{this.dispatchEvent(new CustomEvent("lab-direction-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.labDirX.value)||0,y:parseFloat(this.labDirY.value)||0,z:parseFloat(this.labDirZ.value)||0}}))};onLabReset=()=>{this.dispatchEvent(new CustomEvent("lab-reset",{bubbles:!0,composed:!0}))};onLabCopyPosition=()=>{this.dispatchEvent(new CustomEvent("lab-copy-position",{bubbles:!0,composed:!0}))};onLabCopyAll=()=>{this.dispatchEvent(new CustomEvent("lab-copy-all",{bubbles:!0,composed:!0}))};onSceneFovChange=()=>{const e=parseFloat(this.sceneFovInput.value);!isNaN(e)&&e>=10&&e<=120&&this.dispatchEvent(new CustomEvent("scene-fov-change",{bubbles:!0,composed:!0,detail:{fov:e}}))};onScenePositionChange=()=>{this.dispatchEvent(new CustomEvent("scene-position-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.scenePosX.value)||0,y:parseFloat(this.scenePosY.value)||0,z:parseFloat(this.scenePosZ.value)||0}}))};onSceneTargetChange=()=>{this.dispatchEvent(new CustomEvent("scene-target-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.sceneTargetX.value)||0,y:parseFloat(this.sceneTargetY.value)||0,z:parseFloat(this.sceneTargetZ.value)||0}}))};onSceneDirectionChange=()=>{this.dispatchEvent(new CustomEvent("scene-direction-change",{bubbles:!0,composed:!0,detail:{x:parseFloat(this.sceneDirX.value)||0,y:parseFloat(this.sceneDirY.value)||0,z:parseFloat(this.sceneDirZ.value)||0}}))};onSceneReset=()=>{this.dispatchEvent(new CustomEvent("scene-reset",{bubbles:!0,composed:!0}))};onSceneCopyPosition=()=>{this.dispatchEvent(new CustomEvent("scene-copy-position",{bubbles:!0,composed:!0}))};onSceneCopyAll=()=>{this.dispatchEvent(new CustomEvent("scene-copy-all",{bubbles:!0,composed:!0}))};onCopyVectorClick=e=>{const t=e.target;if(!t.classList.contains("copy-vec-btn"))return;const n=t.dataset.copy;if(!n)return;const s=this.getVectorValues(n);if(!s)return;const i=JSON.stringify({x:s.x,y:s.y,z:s.z});navigator.clipboard.writeText(i)};getVectorValues(e){switch(e){case"debug-pos":return{x:parseFloat(this.debugPosX?.value??"0"),y:parseFloat(this.debugPosY?.value??"0"),z:parseFloat(this.debugPosZ?.value??"0")};case"debug-target":return{x:parseFloat(this.debugTargetX?.value??"0"),y:parseFloat(this.debugTargetY?.value??"0"),z:parseFloat(this.debugTargetZ?.value??"0")};case"debug-dir":return{x:parseFloat(this.debugDirX?.value??"0"),y:parseFloat(this.debugDirY?.value??"0"),z:parseFloat(this.debugDirZ?.value??"0")};case"lab-pos":return{x:parseFloat(this.labPosX?.value??"0"),y:parseFloat(this.labPosY?.value??"0"),z:parseFloat(this.labPosZ?.value??"0")};case"lab-target":return{x:parseFloat(this.labTargetX?.value??"0"),y:parseFloat(this.labTargetY?.value??"0"),z:parseFloat(this.labTargetZ?.value??"0")};case"lab-dir":return{x:parseFloat(this.labDirX?.value??"0"),y:parseFloat(this.labDirY?.value??"0"),z:parseFloat(this.labDirZ?.value??"0")};case"scene-pos":return{x:parseFloat(this.scenePosX?.value??"0"),y:parseFloat(this.scenePosY?.value??"0"),z:parseFloat(this.scenePosZ?.value??"0")};case"scene-target":return{x:parseFloat(this.sceneTargetX?.value??"0"),y:parseFloat(this.sceneTargetY?.value??"0"),z:parseFloat(this.sceneTargetZ?.value??"0")};case"scene-dir":return{x:parseFloat(this.sceneDirX?.value??"0"),y:parseFloat(this.sceneDirY?.value??"0"),z:parseFloat(this.sceneDirZ?.value??"0")};default:return null}}updateSectionStates(){this.labSection?.classList.toggle("disabled",!this.labModeEnabled),this.sceneSection?.classList.toggle("disabled",this.labModeEnabled),this.labOption&&(this.labOption.disabled=!this.labModeEnabled,this.labOption.title=this.labModeEnabled?"":"Only available in Lab mode"),this.sceneOption&&(this.sceneOption.disabled=this.labModeEnabled,this.sceneOption.title=this.labModeEnabled?"Not available in Lab mode":"")}setLabModeEnabled(e){this.labModeEnabled=e,this.updateSectionStates()}getRenderCamera(){return this.renderCamera}setRenderCamera(e){this.renderCamera=e,this.renderCameraSelect&&(this.renderCameraSelect.value=e)}setManualMode(e){this.manualMode=e,this.manualCheckbox&&(this.manualCheckbox.checked=e),this.sceneSection?.classList.toggle("manual-mode",e)}setSceneHelperVisible(e){this.sceneHelperCheckbox&&(this.sceneHelperCheckbox.checked=e)}setLabHelperVisible(e){this.labHelperCheckbox&&(this.labHelperCheckbox.checked=e)}getBookmarksSlot(e){switch(e){case"debug":return this.debugBookmarksSlot;case"scene":return this.sceneBookmarksSlot;case"lab":return this.labBookmarksSlot}}updateDebugCamera(e){e.fov!==void 0&&this.debugFovInput&&document.activeElement!==this.debugFovInput&&(this.debugFovInput.value=e.fov.toFixed(1)),e.position&&(this.updateInputIfNotFocused(this.debugPosX,e.position[0]),this.updateInputIfNotFocused(this.debugPosY,e.position[1]),this.updateInputIfNotFocused(this.debugPosZ,e.position[2])),e.target&&(this.updateInputIfNotFocused(this.debugTargetX,e.target[0]),this.updateInputIfNotFocused(this.debugTargetY,e.target[1]),this.updateInputIfNotFocused(this.debugTargetZ,e.target[2])),e.direction&&(this.updateInputIfNotFocused(this.debugDirX,e.direction[0]),this.updateInputIfNotFocused(this.debugDirY,e.direction[1]),this.updateInputIfNotFocused(this.debugDirZ,e.direction[2]))}updateDebugCameraInfo(e){this.debugRotationDisplay&&(this.debugRotationDisplay.textContent=e.rotation),this.debugAspectDisplay&&(this.debugAspectDisplay.textContent=e.aspect),this.debugNearDisplay&&(this.debugNearDisplay.textContent=e.near),this.debugFarDisplay&&(this.debugFarDisplay.textContent=e.far)}updateLabCamera(e){e.fov!==void 0&&this.labFovInput&&document.activeElement!==this.labFovInput&&(this.labFovInput.value=e.fov.toFixed(1)),e.position&&(this.updateInputIfNotFocused(this.labPosX,e.position[0]),this.updateInputIfNotFocused(this.labPosY,e.position[1]),this.updateInputIfNotFocused(this.labPosZ,e.position[2])),e.target&&(this.updateInputIfNotFocused(this.labTargetX,e.target[0]),this.updateInputIfNotFocused(this.labTargetY,e.target[1]),this.updateInputIfNotFocused(this.labTargetZ,e.target[2])),e.direction&&(this.updateInputIfNotFocused(this.labDirX,e.direction[0]),this.updateInputIfNotFocused(this.labDirY,e.direction[1]),this.updateInputIfNotFocused(this.labDirZ,e.direction[2]))}updateLabCameraInfo(e){this.labRotationDisplay&&(this.labRotationDisplay.textContent=e.rotation),this.labAspectDisplay&&(this.labAspectDisplay.textContent=e.aspect),this.labNearDisplay&&(this.labNearDisplay.textContent=e.near),this.labFarDisplay&&(this.labFarDisplay.textContent=e.far)}updateSceneCameraEditable(e){e.fov!==void 0&&this.sceneFovInput&&document.activeElement!==this.sceneFovInput&&(this.sceneFovInput.value=e.fov.toFixed(1)),e.position&&(this.updateInputIfNotFocused(this.scenePosX,e.position[0]),this.updateInputIfNotFocused(this.scenePosY,e.position[1]),this.updateInputIfNotFocused(this.scenePosZ,e.position[2])),e.target&&(this.updateInputIfNotFocused(this.sceneTargetX,e.target[0]),this.updateInputIfNotFocused(this.sceneTargetY,e.target[1]),this.updateInputIfNotFocused(this.sceneTargetZ,e.target[2])),e.direction&&(this.updateInputIfNotFocused(this.sceneDirX,e.direction[0]),this.updateInputIfNotFocused(this.sceneDirY,e.direction[1]),this.updateInputIfNotFocused(this.sceneDirZ,e.direction[2]))}updateSceneCameraReadOnly(e,t,n,s){this.scenePositionDisplay&&(this.scenePositionDisplay.textContent=e),this.sceneDirectionDisplay&&(this.sceneDirectionDisplay.textContent=t),this.sceneRotationDisplay&&(this.sceneRotationDisplay.textContent=n),this.sceneFovDisplay&&(this.sceneFovDisplay.textContent=s)}updateSceneCameraInfo(e){this.sceneAspectDisplay&&(this.sceneAspectDisplay.textContent=e.aspect),this.sceneNearDisplay&&(this.sceneNearDisplay.textContent=e.near),this.sceneFarDisplay&&(this.sceneFarDisplay.textContent=e.far)}updateInputIfNotFocused(e,t){e&&document.activeElement!==e&&(e.value=t.toFixed(2))}static register(){customElements.get(st.tagName)||customElements.define(st.tagName,st)}}st.register();const fa=`<div class="bookmark-list">
    <div class="header">
        <button class="add-btn" title="Save current camera position as bookmark">+ Add</button>
        <button class="restore-btn" title="Restore preferred (starred) bookmark">Restore</button>
        <button class="clear-btn" title="Clear all bookmarks">Clear All</button>
    </div>

    <div class="search-row">
        <input type="text" class="search-input" placeholder="Search bookmarks...">
        <button class="clear-search-btn" title="Clear search">&times;</button>
    </div>

    <div class="list"></div>
    <div class="empty-state">No bookmarks yet</div>
</div>
`,va=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.bookmark-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

/* Header with buttons */
.header {
    display: flex;
    gap: 4px;
}

.header button {
    flex: 1;
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 10px;
    cursor: pointer;
}

.header button:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.header button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.add-btn {
    color: var(--debug-success, #4caf50) !important;
}

.clear-btn {
    color: var(--debug-error, #f44336) !important;
}

/* Search row */
.search-row {
    display: flex;
    gap: 4px;
}

.search-input {
    flex: 1;
    padding: 4px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 11px;
}

.search-input:focus {
    outline: none;
    border-color: var(--debug-accent, #4a90d9);
}

.search-input::placeholder {
    color: var(--debug-text-muted, #888);
}

.clear-search-btn {
    width: 24px;
    padding: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, #3c3c3c);
    border-radius: 4px;
    color: var(--debug-text-muted, #888);
    font-size: 14px;
    cursor: pointer;
    display: none;
}

.clear-search-btn.visible {
    display: block;
}

.clear-search-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e0e0e0);
}

/* List */
.list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 180px;
    overflow-y: auto;
}

.list:empty + .empty-state {
    display: block;
}

.empty-state {
    display: none;
    text-align: center;
    color: var(--debug-text-muted, #888);
    font-size: 11px;
    padding: 12px 0;
}

/* Bookmark item */
.bookmark-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.15));
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
}

.bookmark-item:hover {
    background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
    border-color: var(--debug-border, #3c3c3c);
}

.bookmark-item.starred {
    border-color: var(--debug-warning, #ff9800);
}

/* Star button */
.star-btn {
    width: 18px;
    height: 18px;
    padding: 0;
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    font-size: 12px;
    cursor: pointer;
    flex-shrink: 0;
}

.star-btn:hover {
    color: var(--debug-warning, #ff9800);
}

.star-btn.starred {
    color: var(--debug-warning, #ff9800);
}

/* Bookmark info */
.bookmark-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.bookmark-name {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: text;
}

/* Edit input */
.edit-input {
    width: 100%;
    padding: 2px 4px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-accent, #4a90d9);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 11px;
}

.edit-input:focus {
    outline: none;
}

.bookmark-date {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
}

/* Delete button */
.delete-btn {
    width: 18px;
    height: 18px;
    padding: 0;
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    font-size: 14px;
    cursor: pointer;
    flex-shrink: 0;
    opacity: 0;
}

.bookmark-item:hover .delete-btn {
    opacity: 1;
}

.delete-btn:hover {
    color: var(--debug-error, #f44336);
}

/* Scrollbar styling */
.list::-webkit-scrollbar {
    width: 6px;
}

.list::-webkit-scrollbar-track {
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
}

.list::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

.list::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, #888);
}
`;class it extends V{static tagName="debug-bookmark-list";listEl;emptyStateEl;searchInput;clearSearchBtn;addBtn;restoreBtn;clearBtn;bookmarks=[];searchTerm="";editingId=null;render(){this.shadow.innerHTML=`<style>${va}</style>${fa}`,this.listEl=this.$required(".list"),this.emptyStateEl=this.$required(".empty-state"),this.searchInput=this.$required(".search-input"),this.clearSearchBtn=this.$required(".clear-search-btn"),this.addBtn=this.$required(".add-btn"),this.restoreBtn=this.$required(".restore-btn"),this.clearBtn=this.$required(".clear-btn")}setupEventListeners(){this.addBtn.addEventListener("click",this.handleAdd),this.restoreBtn.addEventListener("click",this.handleRestorePreferred),this.clearBtn.addEventListener("click",this.handleClearAll),this.searchInput.addEventListener("input",this.handleSearchInput),this.clearSearchBtn.addEventListener("click",this.handleClearSearch),this.listEl.addEventListener("click",this.handleListClick),this.listEl.addEventListener("dblclick",this.handleListDblClick)}cleanupEventListeners(){this.addBtn.removeEventListener("click",this.handleAdd),this.restoreBtn.removeEventListener("click",this.handleRestorePreferred),this.clearBtn.removeEventListener("click",this.handleClearAll),this.searchInput.removeEventListener("input",this.handleSearchInput),this.clearSearchBtn.removeEventListener("click",this.handleClearSearch),this.listEl.removeEventListener("click",this.handleListClick),this.listEl.removeEventListener("dblclick",this.handleListDblClick)}handleAdd=()=>{this.emit("add-bookmark")};handleRestorePreferred=()=>{this.emit("restore-bookmark",{})};handleClearAll=async()=>{await me.show("Clear all bookmarks?")&&this.emit("clear-all")};handleSearchInput=()=>{this.searchTerm=this.searchInput.value.toLowerCase(),this.clearSearchBtn.classList.toggle("visible",this.searchTerm.length>0),this.renderList()};handleClearSearch=()=>{this.searchInput.value="",this.searchTerm="",this.clearSearchBtn.classList.remove("visible"),this.renderList()};handleListClick=e=>{const t=e.target;if(t.tagName==="INPUT")return;const n=t.closest(".star-btn");if(n){e.stopPropagation();const o=n.dataset.id;o&&this.emit("toggle-star",{id:o});return}const s=t.closest(".delete-btn");if(s){e.stopPropagation();const o=s.dataset.id;o&&this.emit("delete-bookmark",{id:o});return}const i=t.closest(".bookmark-item");if(i){const o=i.dataset.id;o&&this.emit("restore-bookmark",{id:o})}};handleListDblClick=e=>{const n=e.target.closest(".bookmark-name");if(n){e.stopPropagation();const i=n.closest(".bookmark-item")?.dataset.id;i&&this.startEditing(i)}};startEditing(e){this.editingId=e,this.renderList();const t=this.listEl.querySelector(".edit-input");t&&(t.focus(),t.select())}finishEditing(e,t){const n=t.trim();n&&n!==this.getBookmarkName(e)&&this.emit("rename-bookmark",{id:e,name:n}),this.editingId=null,this.renderList()}cancelEditing(){this.editingId=null,this.renderList()}getBookmarkName(e){return this.bookmarks.find(n=>n.id===e)?.name??""}update(e){this.bookmarks=e,this.renderList(),this.updateButtons()}renderList(){this.listEl.innerHTML="";const e=this.searchTerm?this.bookmarks.filter(t=>t.name.toLowerCase().includes(this.searchTerm)):this.bookmarks;if(e.length===0){this.emptyStateEl.style.display="block",this.emptyStateEl.textContent=this.searchTerm?"No matching bookmarks":"No bookmarks yet";return}this.emptyStateEl.style.display="none";for(let t=e.length-1;t>=0;t--){const n=e[t],s=this.createBookmarkItem(n);this.listEl.appendChild(s)}}createBookmarkItem(e){const t=document.createElement("div");t.className="bookmark-item",e.starred&&t.classList.add("starred"),t.dataset.id=e.id;const n=this.editingId===e.id,s=document.createElement("button");s.className="star-btn",e.starred&&s.classList.add("starred"),s.dataset.id=e.id,s.title=e.starred?"Unstar":"Set as preferred",s.textContent=e.starred?"★":"☆";const i=document.createElement("div");if(i.className="bookmark-info",n){const r=document.createElement("input");r.type="text",r.className="edit-input",r.value=e.name,r.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.finishEditing(e.id,r.value)):l.key==="Escape"&&(l.preventDefault(),this.cancelEditing())}),r.addEventListener("blur",()=>{setTimeout(()=>{this.editingId===e.id&&this.finishEditing(e.id,r.value)},100)}),i.appendChild(r)}else{const r=document.createElement("span");r.className="bookmark-name",r.textContent=e.name,r.title=`${e.name} (double-click to rename)`,i.appendChild(r)}const o=document.createElement("span");o.className="bookmark-date",o.textContent=this.formatDate(e.createdAt),i.appendChild(o);const a=document.createElement("button");return a.className="delete-btn",a.dataset.id=e.id,a.title="Delete bookmark",a.textContent="×",t.appendChild(s),t.appendChild(i),t.appendChild(a),t}updateButtons(){this.restoreBtn.disabled=this.bookmarks.length===0,this.clearBtn.disabled=this.bookmarks.length===0}formatDate(e){const t=new Date(e),s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],i=t.getDate(),o=t.getFullYear(),a=t.getHours().toString().padStart(2,"0"),r=t.getMinutes().toString().padStart(2,"0");return`${s} ${i}, ${o} ${a}:${r}`}static register(){customElements.get(it.tagName)||customElements.define(it.tagName,it)}}it.register();const ya="debug-bookmarks",xa=1,He="data";class Ca{db=null;initPromise=null;async init(){if(!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise((e,t)=>{const n=indexedDB.open(ya,xa);n.onerror=()=>{t(new Error(`Failed to open IndexedDB: ${n.error?.message}`))},n.onsuccess=()=>{this.db=n.result,e()},n.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(He)||i.createObjectStore(He)}}),this.initPromise)}async get(e){return await this.init(),new Promise((t,n)=>{const o=this.db.transaction(He,"readonly").objectStore(He).get(e);o.onerror=()=>n(o.error),o.onsuccess=()=>t(o.result)})}async set(e,t){return await this.init(),new Promise((n,s)=>{const a=this.db.transaction(He,"readwrite").objectStore(He).put(t,e);a.onerror=()=>s(a.error),a.onsuccess=()=>n()})}async getBookmarks(){return await this.get("bookmarks")??[]}async saveBookmarks(e){await this.set("bookmarks",e)}dispose(){this.db&&(this.db.close(),this.db=null),this.initPromise=null}}class wa{store;bookmarks=[];initialized=!1;initPromise=null;listeners=new Map;constructor(){this.store=new Ca}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=this.doInit(),this.initPromise)}async doInit(){await this.store.init(),this.bookmarks=await this.store.getBookmarks(),this.initialized=!0}getBookmarks(e){return e===void 0?[...this.bookmarks]:this.bookmarks.filter(t=>(t.cameraType??"debug")===e)}getPreferred(e){const t=e!==void 0?this.bookmarks.filter(s=>(s.cameraType??"debug")===e):this.bookmarks;if(t.length===0)return null;const n=t.find(s=>s.starred);return n||t[t.length-1]}async addBookmark(e,t="debug"){const n={id:this.generateId(),cameraType:t,name:this.generateName(t),createdAt:Date.now(),position:[...e.position],target:[...e.target],fov:e.fov,starred:!1};return this.bookmarks.push(n),await this.persist(),this.emit("change"),n}async removeBookmark(e){const t=this.bookmarks.findIndex(n=>n.id===e);t!==-1&&(this.bookmarks.splice(t,1),await this.persist(),this.emit("change"))}async toggleStar(e){const t=this.bookmarks.find(n=>n.id===e);if(t){if(t.starred)t.starred=!1;else for(const n of this.bookmarks)n.starred=n.id===e;await this.persist(),this.emit("change")}}async clearAll(){this.bookmarks=[],await this.persist(),this.emit("change")}async renameBookmark(e,t){const n=this.bookmarks.find(s=>s.id===e);n&&(n.name=t,await this.persist(),this.emit("change"))}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{this.listeners.get(e)?.delete(t)}}async persist(){await this.store.saveBookmarks(this.bookmarks)}emit(e){const t=this.listeners.get(e);if(t)for(const n of t)n()}generateId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}generateName(e){const t=e.charAt(0).toUpperCase()+e.slice(1),n=new RegExp(`^${t} (\\d+)$`);let s=0;for(const i of this.bookmarks){if((i.cameraType??"debug")!==e)continue;const o=i.name.match(n);o&&(s=Math.max(s,parseInt(o[1],10)))}return`${t} ${s+1}`}dispose(){this.store.dispose(),this.listeners.clear()}}class ka extends _{id="camera-inspector";name="Camera";icon="camera";panel="info";component=null;sceneManualMode=!1;labModeActive=!1;log;sceneCameraHelper=null;bookmarkManager=null;debugBookmarkSection=null;sceneBookmarkSection=null;labBookmarkSection=null;debugBookmarkList=null;sceneBookmarkList=null;labBookmarkList=null;bookmarkUnsubscribe=null;init(e){super.init(e),this.log=this.engine.getLogger("Debug.CameraInspector"),this.sceneCameraHelper=new wn(this.engine.camera.instance),this.sceneCameraHelper.name="__scene_camera_helper__",this.sceneCameraHelper.visible=!1,this.engine.scene.add(this.sceneCameraHelper),this.bookmarkManager=new wa,this.bookmarkManager.init().then(()=>{this.updateAllBookmarkLists();const t=this.bookmarkManager.getPreferred();t&&t.starred&&(this.restoreCameraFromBookmark(t),this.log.info("Restored preferred bookmark: %s",t.name))}).catch(t=>{this.log.err("Failed to initialize bookmark manager: %s",t)})}enable(){this.labModeActive=this.isLabMode()??!1,this.component?.setLabModeEnabled(this.labModeActive),this.manager.camera.isEnabled()?this.component?.setRenderCamera("debug"):this.labModeActive?this.component?.setRenderCamera("lab"):this.component?.setRenderCamera("scene"),this.updateAllBookmarkLists()}disable(){this.sceneManualMode&&this.setSceneManualMode(!1)}update(e){this.updateDisplayValues(),this.sceneCameraHelper?.visible&&this.sceneCameraHelper.update()}updateDisplayValues(){if(!this.component)return;const e=this.isLabMode()??!1;if(this.labModeActive!==e){this.labModeActive=e,this.component.setLabModeEnabled(e);const t=this.component.getRenderCamera();e&&t==="scene"?this.setRenderCamera("debug"):!e&&t==="lab"&&this.setRenderCamera("debug")}this.updateDebugCameraDisplay(),this.updateSceneCameraDisplay(),e&&this.updateLabCameraDisplay()}updateDebugCameraDisplay(){if(!this.component)return;const e=this.manager.camera.instance,t=e.position,n=this.manager.camera.getTargetArray(),s=e.getWorldDirection(new v);this.component.updateDebugCamera({position:[t.x,t.y,t.z],target:n,direction:[s.x,s.y,s.z],fov:this.manager.camera.getFov()}),this.component.updateDebugCameraInfo(this.getCameraInfo(e))}updateLabCameraDisplay(){if(!this.component)return;const e=this.getLabCamera();if(!e)return;const t=e.instance.getWorldDirection(new v);this.component.updateLabCamera({position:e.getPositionArray(),target:e.getTargetArray(),direction:[t.x,t.y,t.z],fov:e.getFov()}),this.component.updateLabCameraInfo(this.getCameraInfo(e.instance))}updateSceneCameraDisplay(){if(!this.component)return;const e=this.engine.camera.instance,t=e.position,n=this.engine.camera.controls,s=e.getWorldDirection(new v);if(this.sceneManualMode){const o=n?[n.target.x,n.target.y,n.target.z]:[0,0,0];this.component.updateSceneCameraEditable({position:[t.x,t.y,t.z],target:o,direction:[s.x,s.y,s.z],fov:e.fov})}else{const o=`${t.x.toFixed(2)}, ${t.y.toFixed(2)}, ${t.z.toFixed(2)}`,a=`${s.x.toFixed(2)}, ${s.y.toFixed(2)}, ${s.z.toFixed(2)}`,r=e.rotation,l=`${H.radToDeg(r.x).toFixed(1)}°, ${H.radToDeg(r.y).toFixed(1)}°, ${H.radToDeg(r.z).toFixed(1)}°`,d=`${e.fov.toFixed(1)}°`;this.component.updateSceneCameraReadOnly(o,a,l,d)}const i=this.getCameraInfo(e);this.component.updateSceneCameraInfo({aspect:i.aspect,near:i.near,far:i.far})}getCameraInfo(e){const t=e.rotation,n=`${H.radToDeg(t.x).toFixed(1)}°, ${H.radToDeg(t.y).toFixed(1)}°, ${H.radToDeg(t.z).toFixed(1)}°`;let s="-";if(e instanceof zt&&e.aspect!==void 0)s=e.aspect.toFixed(3);else if(e instanceof Sn){const a=e.right-e.left,r=e.top-e.bottom;s=(a/r).toFixed(3)}const i=e.near!==void 0?e.near.toFixed(2):"-",o=e.far!==void 0?e.far.toFixed(0):"-";return{rotation:n,aspect:s,near:i,far:o}}setSceneManualMode(e){this.sceneManualMode=e,e?this.engine.camera.enableControls():this.engine.camera.disableControls(),this.component?.setManualMode(e)}setRenderCamera(e){switch(this.component?.setRenderCamera(e),e){case"debug":this.manager.camera.enable();break;case"scene":this.manager.camera.disable();break;case"lab":this.manager.camera.disable();break}this.log.info("Render camera changed to: %s",e)}createUI(e){this.component=document.createElement(st.tagName),this.component.setLabModeEnabled(this.labModeActive),this.component.addEventListener("render-camera-change",this.onRenderCameraChange),this.component.addEventListener("manual-mode-change",this.onManualModeChange),this.component.addEventListener("debug-fov-change",this.onDebugFovChange),this.component.addEventListener("debug-position-change",this.onDebugPositionChange),this.component.addEventListener("debug-target-change",this.onDebugTargetChange),this.component.addEventListener("debug-direction-change",this.onDebugDirectionChange),this.component.addEventListener("debug-reset",this.onDebugReset),this.component.addEventListener("debug-copy-position",this.onDebugCopyPosition),this.component.addEventListener("debug-copy-all",this.onDebugCopyAll),this.component.addEventListener("lab-fov-change",this.onLabFovChange),this.component.addEventListener("lab-position-change",this.onLabPositionChange),this.component.addEventListener("lab-target-change",this.onLabTargetChange),this.component.addEventListener("lab-direction-change",this.onLabDirectionChange),this.component.addEventListener("lab-reset",this.onLabReset),this.component.addEventListener("lab-copy-position",this.onLabCopyPosition),this.component.addEventListener("lab-copy-all",this.onLabCopyAll),this.component.addEventListener("scene-fov-change",this.onSceneFovChange),this.component.addEventListener("scene-position-change",this.onScenePositionChange),this.component.addEventListener("scene-target-change",this.onSceneTargetChange),this.component.addEventListener("scene-direction-change",this.onSceneDirectionChange),this.component.addEventListener("scene-reset",this.onSceneReset),this.component.addEventListener("scene-copy-position",this.onSceneCopyPosition),this.component.addEventListener("scene-copy-all",this.onSceneCopyAll),this.component.addEventListener("scene-helper-change",this.onSceneHelperChange),this.component.addEventListener("lab-helper-change",this.onLabHelperChange),e.appendChild(this.component),this.createBookmarkSection("debug"),this.createBookmarkSection("scene"),this.createBookmarkSection("lab"),this.bookmarkManager&&(this.bookmarkUnsubscribe=this.bookmarkManager.on("change",()=>{this.updateAllBookmarkLists()}),this.updateAllBookmarkLists())}createBookmarkSection(e){if(!this.component)return;const t=this.component.getBookmarksSlot(e);if(!t)return;const n=document.createElement(O.tagName);n.setAttribute("title","Bookmarks"),n.setAttribute("persist-id",`camera-inspector.bookmarks.${e}`),n.setAttribute("collapsed","");const s=document.createElement(it.tagName);switch(e){case"debug":this.debugBookmarkSection=n,this.debugBookmarkList=s;break;case"scene":this.sceneBookmarkSection=n,this.sceneBookmarkList=s;break;case"lab":this.labBookmarkSection=n,this.labBookmarkList=s;break}s.addEventListener("add-bookmark",()=>this.onAddBookmark(e)),s.addEventListener("restore-bookmark",i=>this.onRestoreBookmark(i,e)),s.addEventListener("delete-bookmark",this.onDeleteBookmark),s.addEventListener("toggle-star",this.onToggleStar),s.addEventListener("rename-bookmark",this.onRenameBookmark),s.addEventListener("clear-all",()=>this.onClearBookmarks(e)),n.getContent().appendChild(s),t.appendChild(n)}updateAllBookmarkLists(){this.updateBookmarkList("debug"),this.updateBookmarkList("scene"),this.updateBookmarkList("lab")}updateBookmarkList(e){if(!this.bookmarkManager)return;let t=null,n=null;switch(e){case"debug":t=this.debugBookmarkList,n=this.debugBookmarkSection;break;case"scene":t=this.sceneBookmarkList,n=this.sceneBookmarkSection;break;case"lab":t=this.labBookmarkList,n=this.labBookmarkSection;break}if(!t)return;t.ensureInitialized();const s=this.bookmarkManager.getBookmarks(e);t.update(s),n&&s.length>0?n.setAttribute("title",`Bookmarks (${s.length})`):n&&n.setAttribute("title","Bookmarks")}onRenderCameraChange=e=>{const t=e.detail;this.setRenderCamera(t.camera)};onManualModeChange=e=>{const t=e.detail;this.setSceneManualMode(t.enabled)};onDebugFovChange=e=>{const t=e.detail;this.manager.camera.setFov(t.fov)};onDebugPositionChange=e=>{const t=e.detail,n=this.manager.camera.getPositionArray();this.manager.camera.setPosition([isNaN(t.x)?n[0]:t.x,isNaN(t.y)?n[1]:t.y,isNaN(t.z)?n[2]:t.z])};onDebugTargetChange=e=>{const t=e.detail,n=this.manager.camera.getTargetArray();this.manager.camera.setTarget([isNaN(t.x)?n[0]:t.x,isNaN(t.y)?n[1]:t.y,isNaN(t.z)?n[2]:t.z])};onDebugDirectionChange=e=>{const t=e.detail,n=new v(t.x,t.y,t.z);if(n.lengthSq()<1e-4)return;n.normalize();const i=this.manager.camera.instance.position.clone().add(n);this.manager.camera.setTarget([i.x,i.y,i.z])};onDebugReset=()=>{this.manager.camera.reset(),this.log.info("Debug camera reset")};onDebugCopyPosition=()=>{const e=this.manager.camera.instance.position,t=`[${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)}]`;navigator.clipboard.writeText(t),this.log.info("Debug camera position copied: %s",t)};onDebugCopyAll=()=>{this.copyCameraData("debug")};onLabFovChange=e=>{const t=this.getLabCamera();if(!t)return;const n=e.detail;t.setFov(n.fov)};onLabPositionChange=e=>{const t=this.getLabCamera();if(!t)return;const n=e.detail,s=t.getPositionArray();t.setPosition(isNaN(n.x)?s[0]:n.x,isNaN(n.y)?s[1]:n.y,isNaN(n.z)?s[2]:n.z)};onLabTargetChange=e=>{const t=this.getLabCamera();if(!t)return;const n=e.detail,s=t.getTargetArray();t.setTarget(isNaN(n.x)?s[0]:n.x,isNaN(n.y)?s[1]:n.y,isNaN(n.z)?s[2]:n.z)};onLabDirectionChange=e=>{const t=this.getLabCamera();if(!t)return;const n=e.detail,s=new v(n.x,n.y,n.z);if(s.lengthSq()<1e-4)return;s.normalize();const i=t.getPositionArray(),o=new v(i[0],i[1],i[2]).add(s);t.setTarget(o.x,o.y,o.z)};onLabReset=()=>{const e=this.getLabCamera();e&&(e.setPosition(5,3,5),e.setTarget(0,0,0),e.setFov(60),this.log.info("Lab camera reset to default"))};onLabCopyPosition=()=>{const e=this.getLabCamera();if(!e)return;const t=e.getPositionArray(),n=`[${t[0].toFixed(3)}, ${t[1].toFixed(3)}, ${t[2].toFixed(3)}]`;navigator.clipboard.writeText(n),this.log.info("Lab camera position copied: %s",n)};onLabCopyAll=()=>{this.copyCameraData("lab")};onSceneFovChange=e=>{const t=e.detail,n=this.engine.camera.instance;n.fov=t.fov,n.updateProjectionMatrix()};onScenePositionChange=e=>{const t=e.detail,n=this.engine.camera.instance;isNaN(t.x)||(n.position.x=t.x),isNaN(t.y)||(n.position.y=t.y),isNaN(t.z)||(n.position.z=t.z),this.engine.camera.controls?.update()};onSceneTargetChange=e=>{const t=e.detail,n=this.engine.camera.controls;n&&(isNaN(t.x)||(n.target.x=t.x),isNaN(t.y)||(n.target.y=t.y),isNaN(t.z)||(n.target.z=t.z),n.update())};onSceneDirectionChange=e=>{const t=e.detail,n=this.engine.camera.controls;if(!n)return;const s=new v(t.x,t.y,t.z);if(s.lengthSq()<1e-4)return;s.normalize();const i=this.engine.camera.instance.position;n.target.copy(i).add(s),n.update()};onSceneReset=()=>{this.log.info("Scene camera reset (no-op)")};onSceneCopyPosition=()=>{const e=this.engine.camera.instance.position,t=`[${e.x.toFixed(3)}, ${e.y.toFixed(3)}, ${e.z.toFixed(3)}]`;navigator.clipboard.writeText(t),this.log.info("Scene camera position copied: %s",t)};onSceneCopyAll=()=>{this.copyCameraData("scene")};onSceneHelperChange=e=>{const t=e.detail;this.sceneCameraHelper&&(this.sceneCameraHelper.visible=t.visible,this.log.info("Scene camera helper: %s",t.visible?"shown":"hidden"))};onLabHelperChange=e=>{const t=e.detail,s=this.manager.getTool("lab")?.getLabCameraHelper();s&&(s.visible=t.visible,this.log.info("Lab camera helper: %s",t.visible?"shown":"hidden"))};copyCameraData(e){let t=null,n=null;switch(e){case"debug":t=this.manager.camera.instance,n=this.manager.camera.getTargetArray();break;case"lab":{const d=this.getLabCamera();d&&(t=d.instance,n=d.getTargetArray());break}case"scene":t=this.engine.camera.instance;const l=this.engine.camera.controls;if(l){const d=l.target;n=[d.x,d.y,d.z]}break}if(!t)return;const s=t.position,i=t.quaternion,o=t.getWorldDirection(new v),a={position:[s.x,s.y,s.z].map(l=>parseFloat(l.toFixed(3))),quaternion:[i.x,i.y,i.z,i.w].map(l=>parseFloat(l.toFixed(3))),direction:[o.x,o.y,o.z].map(l=>parseFloat(l.toFixed(3))),fov:t.fov,near:t.near,far:t.far};n&&(a.target=n.map(l=>parseFloat(l.toFixed(3))));const r=JSON.stringify(a,null,2);navigator.clipboard.writeText(r),this.log.info("%s camera data copied",e)}getLabCamera(){return this.manager.getTool("lab")?.getLabCamera()??null}isLabMode(){return this.manager.getTool("lab")?.enabled??!1}onAddBookmark=async e=>{if(!this.bookmarkManager)return;const t=this.getCurrentCameraState(e),n=await this.bookmarkManager.addBookmark(t,e);this.log.info("Bookmark added for %s: %s",e,n.name)};onRestoreBookmark=(e,t)=>{if(!this.bookmarkManager)return;const n=e.detail;let s=null;if(n.id?s=this.bookmarkManager.getBookmarks(t).find(i=>i.id===n.id)??null:s=this.bookmarkManager.getPreferred(t),!s){this.log.warn("No bookmark to restore for %s",t);return}this.restoreCameraFromBookmark(s),this.log.info("Restored bookmark: %s",s.name)};onDeleteBookmark=async e=>{if(!this.bookmarkManager)return;const t=e.detail;await this.bookmarkManager.removeBookmark(t.id),this.log.info("Bookmark deleted")};onToggleStar=async e=>{if(!this.bookmarkManager)return;const t=e.detail;await this.bookmarkManager.toggleStar(t.id)};onRenameBookmark=async e=>{if(!this.bookmarkManager)return;const t=e.detail;await this.bookmarkManager.renameBookmark(t.id,t.name),this.log.info("Bookmark renamed to: %s",t.name)};onClearBookmarks=async e=>{if(!this.bookmarkManager)return;const t=this.bookmarkManager.getBookmarks(e);for(const n of t)await this.bookmarkManager.removeBookmark(n.id);this.log.info("Cleared all %s bookmarks",e)};getCurrentCameraState(e){switch(e){case"debug":{const t=this.manager.camera.getPositionArray(),n=this.manager.camera.getTargetArray();return{position:[t[0],t[1],t[2]],target:[n[0],n[1],n[2]],fov:this.manager.camera.getFov()}}case"lab":{const t=this.getLabCamera();return t?{position:t.getPositionArray(),target:t.getTargetArray(),fov:t.getFov()}:{position:[0,0,0],target:[0,0,0],fov:60}}default:{const t=this.engine.camera.instance,n=this.engine.camera.controls,s=n?[n.target.x,n.target.y,n.target.z]:[0,0,0];return{position:[t.position.x,t.position.y,t.position.z],target:s,fov:t.fov}}}}restoreCameraFromBookmark(e){switch(e.cameraType??"debug"){case"debug":this.manager.camera.setPosition(e.position),this.manager.camera.setTarget(e.target),this.manager.camera.setFov(e.fov);break;case"lab":{const n=this.getLabCamera();n&&(n.setPosition(...e.position),n.setTarget(...e.target),n.setFov(e.fov));break}case"scene":{const n=this.engine.camera.instance;n.position.set(...e.position),n.fov=e.fov,n.updateProjectionMatrix();const s=this.engine.camera.controls;s&&(s.target.set(...e.target),s.update());break}}}dispose(){this.sceneManualMode&&this.setSceneManualMode(!1),this.component&&(this.component.removeEventListener("render-camera-change",this.onRenderCameraChange),this.component.removeEventListener("manual-mode-change",this.onManualModeChange),this.component.removeEventListener("debug-fov-change",this.onDebugFovChange),this.component.removeEventListener("debug-position-change",this.onDebugPositionChange),this.component.removeEventListener("debug-target-change",this.onDebugTargetChange),this.component.removeEventListener("debug-direction-change",this.onDebugDirectionChange),this.component.removeEventListener("debug-reset",this.onDebugReset),this.component.removeEventListener("debug-copy-position",this.onDebugCopyPosition),this.component.removeEventListener("debug-copy-all",this.onDebugCopyAll),this.component.removeEventListener("lab-fov-change",this.onLabFovChange),this.component.removeEventListener("lab-position-change",this.onLabPositionChange),this.component.removeEventListener("lab-target-change",this.onLabTargetChange),this.component.removeEventListener("lab-direction-change",this.onLabDirectionChange),this.component.removeEventListener("lab-reset",this.onLabReset),this.component.removeEventListener("lab-copy-position",this.onLabCopyPosition),this.component.removeEventListener("lab-copy-all",this.onLabCopyAll),this.component.removeEventListener("scene-fov-change",this.onSceneFovChange),this.component.removeEventListener("scene-position-change",this.onScenePositionChange),this.component.removeEventListener("scene-target-change",this.onSceneTargetChange),this.component.removeEventListener("scene-direction-change",this.onSceneDirectionChange),this.component.removeEventListener("scene-reset",this.onSceneReset),this.component.removeEventListener("scene-copy-position",this.onSceneCopyPosition),this.component.removeEventListener("scene-copy-all",this.onSceneCopyAll),this.component.removeEventListener("scene-helper-change",this.onSceneHelperChange),this.component.removeEventListener("lab-helper-change",this.onLabHelperChange),this.component=null),this.bookmarkUnsubscribe&&(this.bookmarkUnsubscribe(),this.bookmarkUnsubscribe=null),this.debugBookmarkList=null,this.sceneBookmarkList=null,this.labBookmarkList=null,this.debugBookmarkSection=null,this.sceneBookmarkSection=null,this.labBookmarkSection=null,this.bookmarkManager&&(this.bookmarkManager.dispose(),this.bookmarkManager=null),this.sceneCameraHelper&&(this.engine.scene.remove(this.sceneCameraHelper),this.sceneCameraHelper.dispose(),this.sceneCameraHelper=null)}}class Sa extends _{id="selection";name="Selection";icon="cursor";panel="info";raycaster;pointer=new Y;pointerDownPos=new Y;DRAG_THRESHOLD=5;originalSelection=null;allChunksSelected=!1;boundingBox=null;currentSelected=null;unsubscribeSelection=null;onPointerDown;onClick;onKeyDown;modeChangeUnsubscribe=null;previousScene=null;constructor(){super(),this.raycaster=new ct,this.onPointerDown=this.handlePointerDown.bind(this),this.onClick=this.handleClick.bind(this),this.onKeyDown=this.handleKeyDown.bind(this)}init(e){super.init(e),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.boundingBox&&this.previousScene&&(this.previousScene.remove(this.boundingBox),this.boundingBox.dispose(),this.boundingBox=null),this.previousScene=this.scene})}enable(){const e=this.engine.canvas;e instanceof HTMLCanvasElement&&(e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("click",this.onClick)),window.addEventListener("keydown",this.onKeyDown),this.unsubscribeSelection=this.manager.onSelectionChange(t=>{this.onSelectionChange(t)}),this.manager.selection.selected&&this.onSelectionChange(this.manager.selection.selected),this.previousScene=this.scene,ne.getInstance().registerMany("Selection",[{key:"Esc",description:"Deselect"},{key:"H",description:"Toggle visibility"},{key:"A",description:"Select all chunks"},{key:"D",description:"Clear selection"}])}disable(){const e=this.engine.canvas;e instanceof HTMLCanvasElement&&(e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("click",this.onClick)),window.removeEventListener("keydown",this.onKeyDown),this.unsubscribeSelection?.(),this.unsubscribeSelection=null,this.removeBoundingBox(),this.currentSelected=null,this.originalSelection=null,this.allChunksSelected=!1,this.manager.selection.onSelect(null),ne.getInstance().unregister("Selection")}isDebugObject(e){if(e.name.startsWith("__debug_")||e.name.includes("gizmo")||e.name.includes("Gizmo")||e.name.includes("helper")||e.name.includes("Helper"))return!0;let t=e.parent;for(;t;){if(t.type==="TransformControls"||t.name.includes("TransformControls")||t.name.startsWith("__debug_"))return!0;t=t.parent}return!1}handlePointerDown(e){this.pointerDownPos.set(e.clientX,e.clientY)}handleClick(e){if(e.target.closest(".debug-panel-container"))return;const t=e.clientX-this.pointerDownPos.x,n=e.clientY-this.pointerDownPos.y;if(Math.sqrt(t*t+n*n)>this.DRAG_THRESHOLD)return;const i=this.engine.sizes;this.pointer.x=e.clientX/i.width*2-1,this.pointer.y=-(e.clientY/i.height)*2+1,this.raycaster.setFromCamera(this.pointer,this.engine.getActiveCamera());const a=this.raycaster.intersectObjects(this.scene.children,!0).find(r=>{const l=r.object;return this.isDebugObject(l)||!l.visible?!1:l instanceof S||l.children.length>0});if(a){let r=a.object;if(!r.name){let d=r.parent;for(;d&&d!==this.scene;){if(d.name&&!this.isDebugObject(d)){r=d;break}d=d.parent}}this.manager.selection.selected!==r&&(this.manager.selection.onSelect(r,{x:e.clientX,y:e.clientY}),this.manager.history.recordAction(`Select: ${r.name||r.type}`))}else this.manager.selection.selected&&(this.manager.selection.onSelect(null),this.manager.history.recordAction("Clear selection"))}handleKeyDown(e){if(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const t=e.key.toLowerCase();if(e.key==="Escape"){this.clearSelection();return}if(t==="d"&&this.manager.selection.selected){this.clearSelection();return}if(t==="h"&&this.manager.selection.selected){const n=this.manager.selection.selected;n.visible=!n.visible;return}if(t==="a"&&this.manager.selection.selected){this.toggleChunkSelection();return}}clearSelection(){const e=this.manager.selection.selected;this.originalSelection=null,this.allChunksSelected=!1,this.manager.selection.onSelect(null),e&&this.manager.history.recordAction("Clear selection")}toggleChunkSelection(){const e=this.manager.selection.selected;if(!e)return;const t=this.getChunkedParent(e);if(!t)return;const n=this.manager.outlinePass;if(n)if(this.allChunksSelected)this.allChunksSelected=!1,this.originalSelection&&n.setSelectedObjects([this.originalSelection]);else{this.originalSelection=e,this.allChunksSelected=!0;const s=t.getAllChunkMeshes();n.setSelectedObjects(s)}}getChunkedParent(e){return e instanceof Ue&&e.userData._chunkedParent?e.userData._chunkedParent:null}createUI(e){const t=document.createElement("div");t.className="debug-tool-hint";const n=["Click object to select","Esc/D: deselect","H: toggle visibility","A: select all chunks"];for(const s of n){const i=document.createElement("div");i.textContent=s,t.appendChild(i)}e.appendChild(t)}onSelectionChange(e){this.currentSelected=e,this.updateBoundingBox()}updateBoundingBox(){if(this.removeBoundingBox(),this.currentSelected){if(this.currentSelected.isLight)return;try{this.boundingBox=new vn(this.currentSelected,new N(65280)),this.boundingBox.name="__debug_selection_box__",this.scene.add(this.boundingBox)}catch{this.boundingBox=null}}}removeBoundingBox(){this.boundingBox&&(this.scene.remove(this.boundingBox),this.boundingBox.dispose(),this.boundingBox=null)}update(e){if(this.boundingBox&&this.currentSelected)try{this.boundingBox.update()}catch{this.removeBoundingBox()}}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.disable()}getState(){const e=this.manager.selection.selected;return{selectedObjectPath:e?Ln(e):null}}setState(e){const t=e;if(t)if(t.selectedObjectPath){const n=Tn(this.scene,t.selectedObjectPath);n&&this.manager.selection.onSelect(n)}else this.manager.selection.onSelect(null)}}const Te=new ct,X=new v,Ee=new v,$=new Z,Zn={X:new v(1,0,0),Y:new v(0,1,0),Z:new v(0,0,1)},ln={type:"change"},Kn={type:"mouseDown",mode:null},Qn={type:"mouseUp",mode:null},Jn={type:"objectChange"};class Ea extends oi{constructor(e,t=null){super(void 0,t);const n=new Aa(this);this._root=n;const s=new Ia;this._gizmo=s,n.add(s);const i=new Da;this._plane=i,n.add(i);const o=this;function a(E,P){let b=P;Object.defineProperty(o,E,{get:function(){return b!==void 0?b:P},set:function(k){b!==k&&(b=k,i[E]=k,s[E]=k,o.dispatchEvent({type:E+"-changed",value:k}),o.dispatchEvent(ln))}}),o[E]=P,i[E]=P,s[E]=P}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const r=new v,l=new v,d=new Z,h=new Z,u=new v,p=new Z,x=new v,f=new v,C=new v,m=0,w=new v;a("worldPosition",r),a("worldPositionStart",l),a("worldQuaternion",d),a("worldQuaternionStart",h),a("cameraPosition",u),a("cameraQuaternion",p),a("pointStart",x),a("pointEnd",f),a("rotationAxis",C),a("rotationAngle",m),a("eye",w),this._offset=new v,this._startNorm=new v,this._endNorm=new v,this._cameraScale=new v,this._parentPosition=new v,this._parentQuaternion=new Z,this._parentQuaternionInv=new Z,this._parentScale=new v,this._worldScaleStart=new v,this._worldQuaternionInv=new Z,this._worldScale=new v,this._positionStart=new v,this._quaternionStart=new Z,this._scaleStart=new v,this._getPointer=La.bind(this),this._onPointerDown=za.bind(this),this._onPointerHover=Ta.bind(this),this._onPointerMove=Pa.bind(this),this._onPointerUp=Ma.bind(this),t!==null&&this.connect(t)}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&Te.setFromCamera(e,this.camera);const t=cn(this._gizmo.picker[this.mode],Te);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&Te.setFromCamera(e,this.camera);const t=cn(this._plane,Te,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Kn.mode=this.mode,this.dispatchEvent(Kn)}}pointerMove(e){const t=this.axis,n=this.mode,s=this.object;let i=this.space;if(n==="scale"?i="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(i="world"),s===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&Te.setFromCamera(e,this.camera);const o=cn(this._plane,Te,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),i==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),i==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(i==="local"&&(s.position.applyQuaternion($.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),i==="world"&&(s.parent&&s.position.add(X.setFromMatrixPosition(s.parent.matrixWorld)),t.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(X.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),Ee.set(a,a,a)}else X.copy(this.pointStart),Ee.copy(this.pointEnd),X.applyQuaternion(this._worldQuaternionInv),Ee.applyQuaternion(this._worldQuaternionInv),Ee.divide(X),t.search("X")===-1&&(Ee.x=1),t.search("Y")===-1&&(Ee.y=1),t.search("Z")===-1&&(Ee.z=1);s.scale.copy(this._scaleStart).multiply(Ee),this.scaleSnap&&(t.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(X.setFromMatrixPosition(this.camera.matrixWorld));let r=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(X.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Zn[t]),X.copy(Zn[t]),i==="local"&&X.applyQuaternion(this.worldQuaternion),X.cross(this.eye),X.length()===0?r=!0:this.rotationAngle=this._offset.dot(X.normalize())*a),(t==="E"||r)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),i==="local"&&t!=="E"&&t!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply($.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy($.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ln),this.dispatchEvent(Jn)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Qn.mode=this.mode,this.dispatchEvent(Qn)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(e){return this.object=e,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ln),this.dispatchEvent(Jn),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Te}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}setColors(e,t,n,s){const i=this._gizmo.materialLib;i.xAxis.color.set(e),i.yAxis.color.set(t),i.zAxis.color.set(n),i.active.color.set(s),i.xAxisTransparent.color.set(e),i.yAxisTransparent.color.set(t),i.zAxisTransparent.color.set(n),i.activeTransparent.color.set(s),i.xAxis._color&&i.xAxis._color.set(e),i.yAxis._color&&i.yAxis._color.set(t),i.zAxis._color&&i.zAxis._color.set(n),i.active._color&&i.active._color.set(s),i.xAxisTransparent._color&&i.xAxisTransparent._color.set(e),i.yAxisTransparent._color&&i.yAxisTransparent._color.set(t),i.zAxisTransparent._color&&i.zAxisTransparent._color.set(n),i.activeTransparent._color&&i.activeTransparent._color.set(s)}}function La(c){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:c.button};{const e=this.domElement.getBoundingClientRect();return{x:(c.clientX-e.left)/e.width*2-1,y:-(c.clientY-e.top)/e.height*2+1,button:c.button}}}function Ta(c){if(this.enabled)switch(c.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(c));break}}function za(c){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(c.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(c)),this.pointerDown(this._getPointer(c)))}function Pa(c){this.enabled&&this.pointerMove(this._getPointer(c))}function Ma(c){this.enabled&&(this.domElement.releasePointerCapture(c.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(c)))}function cn(c,e,t){const n=e.intersectObject(c,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||t)return n[s];return!1}const Nt=new kn,B=new v(0,1,0),es=new v(0,0,0),ts=new Pt,Bt=new Z,Ot=new Z,ue=new v,ns=new Pt,bt=new v(1,0,0),ze=new v(0,1,0),ft=new v(0,0,1),$t=new v,pt=new v,gt=new v;class Aa extends Ut{constructor(e){super(),this.isTransformControlsRoot=!0,this.controls=e,this.visible=!1}updateMatrixWorld(e){const t=this.controls;t.object!==void 0&&(t.object.updateMatrixWorld(),t.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):t.object.parent.matrixWorld.decompose(t._parentPosition,t._parentQuaternion,t._parentScale),t.object.matrixWorld.decompose(t.worldPosition,t.worldQuaternion,t._worldScale),t._parentQuaternionInv.copy(t._parentQuaternion).invert(),t._worldQuaternionInv.copy(t.worldQuaternion).invert()),t.camera.updateMatrixWorld(),t.camera.matrixWorld.decompose(t.cameraPosition,t.cameraQuaternion,t._cameraScale),t.camera.isOrthographicCamera?t.camera.getWorldDirection(t.eye).negate():t.eye.copy(t.cameraPosition).sub(t.worldPosition).normalize(),super.updateMatrixWorld(e)}dispose(){this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}}class Ia extends Ut{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new ce({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new qt({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const s=t.clone();s.opacity=.5;const i=e.clone();i.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const r=e.clone();r.color.setHex(16711680),r.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const d=e.clone();d.color.setHex(255),d.opacity=.5;const h=e.clone();h.opacity=.25;const u=e.clone();u.color.setHex(16776960),u.opacity=.25;const p=e.clone();p.color.setHex(16776960);const x=e.clone();x.color.setHex(7895160),this.materialLib={xAxis:i,yAxis:o,zAxis:a,active:p,xAxisTransparent:r,yAxisTransparent:l,zAxisTransparent:d,activeTransparent:u};const f=new W(0,.04,.1,12);f.translate(0,.05,0);const C=new q(.08,.08,.08);C.translate(0,.04,0);const m=new yn;m.setAttribute("position",new Nn([0,0,0,1,0,0],3));const w=new W(.0075,.0075,.5,3);w.translate(0,.25,0);function E(D,R){const j=new Pe(D,.0075,3,64,R*Math.PI*2);return j.rotateY(Math.PI/2),j.rotateX(Math.PI/2),j}function P(){const D=new yn;return D.setAttribute("position",new Nn([0,0,0,1,1,1],3)),D}const b={X:[[new S(f,i),[.5,0,0],[0,0,-Math.PI/2]],[new S(f,i),[-.5,0,0],[0,0,Math.PI/2]],[new S(w,i),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new S(f,o),[0,.5,0]],[new S(f,o),[0,-.5,0],[Math.PI,0,0]],[new S(w,o)]],Z:[[new S(f,a),[0,0,.5],[Math.PI/2,0,0]],[new S(f,a),[0,0,-.5],[-Math.PI/2,0,0]],[new S(w,a),null,[Math.PI/2,0,0]]],XYZ:[[new S(new It(.1,0),h),[0,0,0]]],XY:[[new S(new q(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new S(new q(.15,.15,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new S(new q(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},k={X:[[new S(new W(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new S(new W(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new S(new W(.2,0,.6,4),n),[0,.3,0]],[new S(new W(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new S(new W(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new S(new W(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new S(new It(.2,0),n)]],XY:[[new S(new q(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new S(new q(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new S(new q(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},L={START:[[new S(new It(.01,2),s),null,null,null,"helper"]],END:[[new S(new It(.01,2),s),null,null,null,"helper"]],DELTA:[[new fe(P(),s),null,null,null,"helper"]],X:[[new fe(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new fe(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new fe(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new S(E(.5,1),x),null,[0,Math.PI/2,0]]],X:[[new S(E(.5,.5),i)]],Y:[[new S(E(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new S(E(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new S(E(.75,1),u),null,[0,Math.PI/2,0]]]},M={AXIS:[[new fe(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},A={XYZE:[[new S(new ye(.25,10,8),n)]],X:[[new S(new Pe(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new S(new Pe(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new S(new Pe(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new S(new Pe(.75,.1,2,24),n)]]},g={X:[[new S(C,i),[.5,0,0],[0,0,-Math.PI/2]],[new S(w,i),[0,0,0],[0,0,-Math.PI/2]],[new S(C,i),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new S(C,o),[0,.5,0]],[new S(w,o)],[new S(C,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new S(C,a),[0,0,.5],[Math.PI/2,0,0]],[new S(w,a),[0,0,0],[Math.PI/2,0,0]],[new S(C,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new S(new q(.15,.15,.01),d),[.15,.15,0]]],YZ:[[new S(new q(.15,.15,.01),r),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new S(new q(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new S(new q(.1,.1,.1),h)]]},y={X:[[new S(new W(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new S(new W(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new S(new W(.2,0,.6,4),n),[0,.3,0]],[new S(new W(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new S(new W(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new S(new W(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new S(new q(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new S(new q(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new S(new q(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new S(new q(.2,.2,.2),n),[0,0,0]]]},z={X:[[new fe(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new fe(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new fe(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function T(D){const R=new Ut;for(const j in D)for(let ke=D[j].length;ke--;){const G=D[j][ke][0].clone(),se=D[j][ke][1],Mt=D[j][ke][2],At=D[j][ke][3],_s=D[j][ke][4];G.name=j,G.tag=_s,se&&G.position.set(se[0],se[1],se[2]),Mt&&G.rotation.set(Mt[0],Mt[1],Mt[2]),At&&G.scale.set(At[0],At[1],At[2]),G.updateMatrix();const An=G.geometry.clone();An.applyMatrix4(G.matrix),G.geometry=An,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),R.add(G)}return R}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=T(b)),this.add(this.gizmo.rotate=T(I)),this.add(this.gizmo.scale=T(g)),this.add(this.picker.translate=T(k)),this.add(this.picker.rotate=T(A)),this.add(this.picker.scale=T(y)),this.add(this.helper.translate=T(L)),this.add(this.helper.rotate=T(M)),this.add(this.helper.scale=T(z)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Ot;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let i=0;i<s.length;i++){const o=s[i];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&($.setFromEuler(Nt.set(0,0,0)),o.quaternion.copy(n).multiply($),Math.abs(B.copy(bt).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&($.setFromEuler(Nt.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply($),Math.abs(B.copy(ze).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&($.setFromEuler(Nt.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply($),Math.abs(B.copy(ft).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&($.setFromEuler(Nt.set(0,Math.PI/2,0)),B.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ts.lookAt(es,B,ze)),o.quaternion.multiply($),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),X.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),X.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(X),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(B.copy(bt).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(B.copy(ze).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(B.copy(ft).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(B.copy(ft).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(B.copy(bt).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(B.copy(ze).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Bt.copy(n),B.copy(this.eye).applyQuaternion($.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ts.lookAt(this.eye,es,ze)),o.name==="X"&&($.setFromAxisAngle(bt,Math.atan2(-B.y,B.z)),$.multiplyQuaternions(Bt,$),o.quaternion.copy($)),o.name==="Y"&&($.setFromAxisAngle(ze,Math.atan2(B.x,B.z)),$.multiplyQuaternions(Bt,$),o.quaternion.copy($)),o.name==="Z"&&($.setFromAxisAngle(ft,Math.atan2(B.y,B.x)),$.multiplyQuaternions(Bt,$),o.quaternion.copy($))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(r){return o.name===r})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(e)}}class Da extends S{constructor(){super(new Tt(1e5,1e5,2,2),new ce({visible:!1,wireframe:!0,side:Gt,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),$t.copy(bt).applyQuaternion(t==="local"?this.worldQuaternion:Ot),pt.copy(ze).applyQuaternion(t==="local"?this.worldQuaternion:Ot),gt.copy(ft).applyQuaternion(t==="local"?this.worldQuaternion:Ot),B.copy(pt),this.mode){case"translate":case"scale":switch(this.axis){case"X":B.copy(this.eye).cross($t),ue.copy($t).cross(B);break;case"Y":B.copy(this.eye).cross(pt),ue.copy(pt).cross(B);break;case"Z":B.copy(this.eye).cross(gt),ue.copy(gt).cross(B);break;case"XY":ue.copy(gt);break;case"YZ":ue.copy($t);break;case"XZ":B.copy(gt),ue.copy(pt);break;case"XYZ":case"E":ue.set(0,0,0);break}break;default:ue.set(0,0,0)}ue.length()===0?this.quaternion.copy(this.cameraQuaternion):(ns.lookAt(X.set(0,0,0),ue,B),this.quaternion.setFromRotationMatrix(ns)),super.updateMatrixWorld(e)}}const Ra=`<div class="vector3-row">
    <label class="label"></label>
    <div class="inputs">
        <div class="axis-input">
            <span class="axis-label axis-x">X</span>
            <input type="number" class="input debug-input input-x">
        </div>
        <div class="axis-input">
            <span class="axis-label axis-y">Y</span>
            <input type="number" class="input debug-input input-y">
        </div>
        <div class="axis-input">
            <span class="axis-label axis-z">Z</span>
            <input type="number" class="input debug-input input-z">
        </div>
    </div>
</div>
`,Fa=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.vector3-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.label {
    font-size: 11px;
    color: var(--debug-text-muted, #888);
}

.inputs {
    display: flex;
    gap: 4px;
}

.axis-input {
    display: flex;
    align-items: center;
    gap: 2px;
}

.axis-label {
    font-size: 9px;
    font-weight: 500;
}

.axis-x {
    color: #ff6666;
}

.axis-y {
    color: #66ff66;
}

.axis-z {
    color: #6688ff;
}

.input {
    width: 50px;
    text-align: right;
}
`;class ot extends V{static tagName="debug-vector3-row";static get observedAttributes(){return["label","x","y","z","step"]}labelEl;inputX;inputY;inputZ;render(){this.shadow.innerHTML=`<style>${K}${Fa}</style>${Ra}`,this.labelEl=this.$required(".label"),this.inputX=this.$required(".input-x"),this.inputY=this.$required(".input-y"),this.inputZ=this.$required(".input-z"),this.updateLabel(),this.updateStep(),this.updateX(),this.updateY(),this.updateZ()}setupEventListeners(){this.inputX.addEventListener("change",this.handleChangeX),this.inputY.addEventListener("change",this.handleChangeY),this.inputZ.addEventListener("change",this.handleChangeZ)}cleanupEventListeners(){this.inputX.removeEventListener("change",this.handleChangeX),this.inputY.removeEventListener("change",this.handleChangeY),this.inputZ.removeEventListener("change",this.handleChangeZ)}handleChangeX=()=>this.emitChange("x");handleChangeY=()=>this.emitChange("y");handleChangeZ=()=>this.emitChange("z");emitChange(e){const t=parseFloat(this.inputX.value)||0,n=parseFloat(this.inputY.value)||0,s=parseFloat(this.inputZ.value)||0;this.emit("change",{x:t,y:n,z:s,axis:e})}attributeChangedCallback(e,t,n){if(!(t===n||!this.initialized))switch(e){case"label":this.updateLabel();break;case"x":this.updateX();break;case"y":this.updateY();break;case"z":this.updateZ();break;case"step":this.updateStep();break}}updateLabel(){this.labelEl.textContent=this.getAttribute("label")??""}updateX(){this.inputX.value=this.getAttribute("x")??"0"}updateY(){this.inputY.value=this.getAttribute("y")??"0"}updateZ(){this.inputZ.value=this.getAttribute("z")??"0"}updateStep(){const e=this.getAttribute("step")??"0.1";this.inputX.step=e,this.inputY.step=e,this.inputZ.step=e}getValue(){return{x:parseFloat(this.inputX.value)||0,y:parseFloat(this.inputY.value)||0,z:parseFloat(this.inputZ.value)||0}}setValue(e,t,n){this.inputX.value=e.toFixed(2),this.inputY.value=t.toFixed(2),this.inputZ.value=n.toFixed(2)}static register(){customElements.get(ot.tagName)||customElements.define(ot.tagName,ot)}}ot.register();const Na=`<div class="transform-panel">
    <!-- Mode buttons (T/R/S) -->
    <div class="debug-button-group mode-buttons">
        <button class="debug-button-group-item active" data-mode="translate" title="Translate (G)">T</button>
        <button class="debug-button-group-item" data-mode="rotate" title="Rotate (R)">R</button>
        <button class="debug-button-group-item" data-mode="scale" title="Scale (S)">S</button>
    </div>

    <!-- Space select -->
    <div class="debug-select-row">
        <label>Space</label>
        <select class="debug-select space-select">
            <option value="local">Local</option>
            <option value="world">World</option>
        </select>
    </div>

    <!-- Transform sections -->
    <div class="transform-sections">
        <debug-vector3-row class="position-row" label="Position" step="0.001"></debug-vector3-row>
        <debug-vector3-row class="rotation-row" label="Rotation (deg)" step="0.01"></debug-vector3-row>
        <debug-vector3-row class="scale-row" label="Scale" step="0.001"></debug-vector3-row>
    </div>

    <div class="debug-separator"></div>

    <!-- Gizmo size -->
    <div class="debug-info-row">
        <label class="debug-info-label">Size</label>
        <input type="number" class="debug-input size-input" value="0.75" step="0.1" min="0.1" max="5">
    </div>

    <!-- Snap settings -->
    <div class="snap-section">
        <div class="snap-header">Snap (0 = off)</div>
        <div class="snap-inputs">
            <div class="snap-input-group">
                <span class="snap-label">T</span>
                <input type="number" class="debug-input snap-translate" value="0.001" step="0.001" min="0">
            </div>
            <div class="snap-input-group">
                <span class="snap-label">R</span>
                <input type="number" class="debug-input snap-rotate" value="0.001" step="0.001" min="0">
            </div>
            <div class="snap-input-group">
                <span class="snap-label">S</span>
                <input type="number" class="debug-input snap-scale" value="0.001" step="0.001" min="0">
            </div>
        </div>
    </div>

    <!-- Keyboard hints -->
    <div class="hints">G/R/S: Mode | X/Y/Z: Axis</div>
</div>
`,Ba=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.transform-panel {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mode-buttons {
    margin-bottom: 4px;
}

.transform-sections {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.size-input {
    width: 50px;
    text-align: right;
}

.snap-section {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.snap-header {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
}

.snap-inputs {
    display: flex;
    gap: 4px;
}

.snap-input-group {
    display: flex;
    align-items: center;
    gap: 2px;
}

.snap-label {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
}

.snap-input-group .debug-input {
    width: 40px;
    text-align: right;
}

.hints {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    opacity: 0.6;
}
`;ot.register();class at extends V{static tagName="debug-transform-tool-panel";modeButtons;spaceSelect;positionRow;rotationRow;scaleRow;sizeInput;snapTranslateInput;snapRotateInput;snapScaleInput;render(){this.shadow.innerHTML=`<style>${K}${Ba}</style>${Na}`,this.cacheElements()}cacheElements(){this.modeButtons=this.shadow.querySelectorAll(".mode-buttons button"),this.spaceSelect=this.$required(".space-select"),this.positionRow=this.$required(".position-row"),this.rotationRow=this.$required(".rotation-row"),this.scaleRow=this.$required(".scale-row"),this.sizeInput=this.$required(".size-input"),this.snapTranslateInput=this.$required(".snap-translate"),this.snapRotateInput=this.$required(".snap-rotate"),this.snapScaleInput=this.$required(".snap-scale")}setupEventListeners(){this.modeButtons.forEach(e=>{e.addEventListener("click",this.handleModeClick)}),this.spaceSelect.addEventListener("change",this.handleSpaceChange),this.positionRow.addEventListener("change",this.handlePositionChange),this.rotationRow.addEventListener("change",this.handleRotationChange),this.scaleRow.addEventListener("change",this.handleScaleChange),this.sizeInput.addEventListener("input",this.handleSizeChange),this.snapTranslateInput.addEventListener("input",this.handleSnapChange),this.snapRotateInput.addEventListener("input",this.handleSnapChange),this.snapScaleInput.addEventListener("input",this.handleSnapChange)}cleanupEventListeners(){this.modeButtons.forEach(e=>{e.removeEventListener("click",this.handleModeClick)}),this.spaceSelect.removeEventListener("change",this.handleSpaceChange),this.positionRow.removeEventListener("change",this.handlePositionChange),this.rotationRow.removeEventListener("change",this.handleRotationChange),this.scaleRow.removeEventListener("change",this.handleScaleChange),this.sizeInput.removeEventListener("input",this.handleSizeChange),this.snapTranslateInput.removeEventListener("input",this.handleSnapChange),this.snapRotateInput.removeEventListener("input",this.handleSnapChange),this.snapScaleInput.removeEventListener("input",this.handleSnapChange)}handleModeClick=e=>{const n=e.currentTarget.dataset.mode;this.updateModeButtons(n),this.emit("mode-change",{mode:n})};handleSpaceChange=()=>{const e=this.spaceSelect.value;this.emit("space-change",{space:e})};handlePositionChange=e=>{const t=e.detail;this.emit("position-change",{x:t.x,y:t.y,z:t.z})};handleRotationChange=e=>{const t=e.detail;this.emit("rotation-change",{x:t.x,y:t.y,z:t.z})};handleScaleChange=e=>{const t=e.detail;this.emit("scale-change",{x:t.x,y:t.y,z:t.z})};handleSizeChange=()=>{const e=parseFloat(this.sizeInput.value)||.75;this.emit("size-change",{size:e})};handleSnapChange=()=>{const e=parseFloat(this.snapTranslateInput.value)||0,t=parseFloat(this.snapRotateInput.value)||0,n=parseFloat(this.snapScaleInput.value)||0;this.emit("snap-change",{translate:e,rotate:t,scale:n})};updateModeButtons(e){this.modeButtons.forEach(t=>{t.classList.toggle("active",t.dataset.mode===e)})}setMode(e){this.updateModeButtons(e)}setSpace(e){this.spaceSelect.value=e}setPosition(e,t,n){this.positionRow.setValue(e,t,n)}setRotation(e,t,n){this.rotationRow.setValue(e,t,n)}setScale(e,t,n){this.scaleRow.setValue(e,t,n)}clearTransform(){this.positionRow.setValue(0,0,0),this.rotationRow.setValue(0,0,0),this.scaleRow.setValue(1,1,1)}setSnap(e,t,n){this.snapTranslateInput.value=String(e),this.snapRotateInput.value=String(t),this.snapScaleInput.value=String(n)}setSize(e){this.sizeInput.value=String(e)}static register(){customElements.get(at.tagName)||customElements.define(at.tagName,at)}}at.register();const xt=new ct,ss=new ai,$a=new v,Ha=new v;function is(c,e,t){xt.setFromCamera(c,e);const n=xt.ray.intersectPlane(t,$a);return n?n.clone():null}function Oa(c,e,t,n){xt.setFromCamera(c,e);const s=xt.ray.origin,i=xt.ray.direction,o=n.clone().normalize(),a=Ha.copy(s).sub(t),r=i.dot(i),l=i.dot(o),d=o.dot(o),h=i.dot(a),u=o.dot(a),p=r*d-l*l;if(Math.abs(p)<1e-4){const f=-u/d;return t.clone().add(o.multiplyScalar(f))}const x=(l*h-r*u)/p;return t.clone().add(o.multiplyScalar(x))}function dn(c,e){const t=c.clone().project(e);return new Y(t.x,t.y)}function os(c,e){return c.distanceTo(e)}function as(c,e){const t=c.x-e.x,n=c.y-e.y;return Math.atan2(n,t)}function Va(c,e){let t=c-e;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;return t}function qa(c,e,t=.01){if(e<.001)return 1;const n=c/e;return Math.max(n,t)}function rs(c,e,t,n){let s;switch(t){case"x":s=hn(e,new v(1,0,0));break;case"y":s=hn(e,new v(0,1,0));break;case"z":s=hn(e,new v(0,0,1));break;case"xy":s=new v(0,0,1);break;case"xz":s=new v(0,1,0);break;case"yz":s=new v(1,0,0);break;default:s=e.getWorldDirection(new v).negate();break}return ss.setFromNormalAndCoplanarPoint(s,c),ss.clone()}function hn(c,e){const t=c.getWorldDirection(new v),n=t.clone().sub(e.clone().multiplyScalar(t.dot(e)));if(n.lengthSq()<1e-4){const s=new v(0,1,0).applyQuaternion(c.quaternion);return e.clone().cross(s).normalize()}return e.clone().cross(n).normalize()}function ls(c){switch(c){case"x":return new v(1,0,0);case"y":return new v(0,1,0);case"z":return new v(0,0,1);default:return null}}function Ua(c,e){switch(e){case"x":return new v(c.x,0,0);case"y":return new v(0,c.y,0);case"z":return new v(0,0,c.z);case"xy":return new v(c.x,c.y,0);case"xz":return new v(c.x,0,c.z);case"yz":return new v(0,c.y,c.z);default:return c.clone()}}function cs(c,e){switch(e){case"x":return new v(c,1,1);case"y":return new v(1,c,1);case"z":return new v(1,1,c);case"xy":return new v(c,c,1);case"xz":return new v(c,1,c);case"yz":return new v(1,c,c);default:return new v(c,c,c)}}function ds(c,e){switch(c){case"x":return new v(1,0,0);case"y":return new v(0,1,0);case"z":return new v(0,0,1);default:return e.getWorldDirection(new v)}}const hs=1e3,_a={x:16729156,y:4521796,z:4474111};class ja{scene;lines=new Map;materials=new Map;constructor(e){this.scene=e,this.createMaterials()}createMaterials(){for(const[e,t]of Object.entries(_a)){const n=new qt({color:t,linewidth:2,depthTest:!1,transparent:!0,opacity:.8});this.materials.set(e,n)}}show(e,t,n){if(this.hide(),t==="none")return;const s=this.getAxesForConstraint(t);for(const i of s){const o=this.createAxisLine(e,i);this.lines.set(i,o),this.scene.add(o)}}hide(){for(const e of this.lines.values())this.scene.remove(e),e.geometry.dispose();this.lines.clear()}getAxesForConstraint(e){switch(e){case"x":return["x"];case"y":return["y"];case"z":return["z"];case"xy":return["x","y"];case"xz":return["x","z"];case"yz":return["y","z"];default:return[]}}createAxisLine(e,t){const n=this.getAxisDirection(t),s=e.clone().sub(n.clone().multiplyScalar(hs)),i=e.clone().add(n.clone().multiplyScalar(hs)),o=new yn().setFromPoints([s,i]),a=this.materials.get(t),r=new fe(o,a);return r.name=`__debug_axis_${t}`,r.renderOrder=9999,r.frustumCulled=!1,r}getAxisDirection(e){switch(e){case"x":return new v(1,0,0);case"y":return new v(0,1,0);case"z":return new v(0,0,1);default:return new v(0,0,0)}}dispose(){this.hide();for(const e of this.materials.values())e.dispose();this.materials.clear()}}const un=.001,Ga=.005,Wa=.005;class Xa{state="idle";mode="translate";session=null;context;raycaster=new ct;pointer=new Y;axisVisualizer;log;onPointerDownBound;onPointerMoveBound;onPointerUpBound;onKeyDownBound;onPointerLockChangeBound;onStatusChange=null;virtualCursor=null;virtualCursorPos={x:0,y:0};constructor(e,t){this.context=e,this.log=t,this.axisVisualizer=new ja(e.scene),this.onPointerDownBound=this.handlePointerDown.bind(this),this.onPointerMoveBound=this.handlePointerMove.bind(this),this.onPointerUpBound=this.handlePointerUp.bind(this),this.onKeyDownBound=this.handleKeyDown.bind(this),this.onPointerLockChangeBound=this.handlePointerLockChange.bind(this)}setStatusCallback(e){this.onStatusChange=e}getState(){return this.state}getMode(){return this.mode}arm(e){if(this.state==="manipulating"){this.mode=e,this.updateStatus();return}this.mode=e,this.state="armed",this.attachListeners(),this.updateStatus(),this.log.info("Armed for %s",e)}disarm(){if(this.state==="manipulating"){this.cancel();return}this.state="idle",this.detachListeners(),this.updateStatus(),this.log.info("Disarmed")}isActive(){return this.state!=="idle"}isManipulating(){return this.state==="manipulating"}attachListeners(){const e=this.context.engine.canvas;e instanceof HTMLCanvasElement&&(e.addEventListener("pointerdown",this.onPointerDownBound),e.addEventListener("pointermove",this.onPointerMoveBound),e.addEventListener("pointerup",this.onPointerUpBound),window.addEventListener("keydown",this.onKeyDownBound,{capture:!0}))}detachListeners(){const e=this.context.engine.canvas;e instanceof HTMLCanvasElement&&(e.removeEventListener("pointerdown",this.onPointerDownBound),e.removeEventListener("pointermove",this.onPointerMoveBound),e.removeEventListener("pointerup",this.onPointerUpBound),window.removeEventListener("keydown",this.onKeyDownBound,{capture:!0}))}handlePointerDown(e){if(this.state!=="armed"||e.target.closest(".debug-panel-container"))return;const t=this.context.getSelectedObject();if(!t){this.disarm();return}if(this.updatePointer(e),this.raycaster.setFromCamera(this.pointer,this.context.getCamera()),this.raycaster.intersectObject(t,!0).length===0){this.disarm();return}e.preventDefault(),e.stopPropagation(),this.startManipulation(t,e)}handlePointerMove(e){this.state!=="manipulating"||!this.session||(e.preventDefault(),this.session.usePointerLock?(this.session.accumulatedDelta.x+=e.movementX,this.session.accumulatedDelta.y+=e.movementY,this.updateVirtualCursor(e.movementX,e.movementY)):this.updatePointer(e),this.updateManipulation())}handlePointerUp(e){this.state==="manipulating"&&(e.preventDefault(),this.finalize())}handleKeyDown(e){if(this.state==="idle"||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)return;const t=e.key.toLowerCase();if(e.key==="Escape"){e.preventDefault(),e.stopPropagation(),this.state==="manipulating"?this.cancel():this.disarm();return}if(e.key==="Enter"){e.preventDefault(),e.stopPropagation(),this.state==="manipulating"&&this.finalize();return}if(this.state==="manipulating"&&this.session){if(t==="x"||t==="y"||t==="z"){e.preventDefault(),e.stopPropagation(),this.toggleConstraint(t,e.shiftKey);return}if(this.isNumericKey(e.key)){e.preventDefault(),e.stopPropagation(),this.handleNumericInput(e.key);return}if(e.key==="Backspace"){e.preventDefault(),e.stopPropagation(),this.session.typedValue.length>0&&(this.session.typedValue=this.session.typedValue.slice(0,-1),this.applyTypedValue(),this.updateStatus());return}}}isNumericKey(e){return/^[0-9.\-]$/.test(e)}handleNumericInput(e){if(!this.session)return;const t=this.session.typedValue+e;e==="."&&this.session.typedValue.includes(".")||e==="-"&&this.session.typedValue.length>0||(this.session.typedValue=t,this.applyTypedValue(),this.updateStatus())}applyTypedValue(){if(!this.session)return;const e=parseFloat(this.session.typedValue);if(isNaN(e)){this.restoreOriginalTransform();return}const t=this.session.object,n=this.session.originalTransform,s=this.session.constraint;switch(this.mode){case"translate":this.applyTypedTranslate(t,n,s,e);break;case"rotate":this.applyTypedRotate(t,n,s,e);break;case"scale":this.applyTypedScale(t,n,s,e);break}}applyTypedTranslate(e,t,n,s){switch(e.position.copy(t.position),n){case"x":e.position.x+=s;break;case"y":e.position.y+=s;break;case"z":e.position.z+=s;break;default:const o=this.context.getCamera().getWorldDirection(new v).multiplyScalar(s);e.position.add(o);break}}applyTypedRotate(e,t,n,s){e.rotation.copy(t.rotation);const i=s*(Math.PI/180),o=ds(n,this.context.getCamera()),a=new Z().setFromAxisAngle(o,i);e.quaternion.premultiply(a)}applyTypedScale(e,t,n,s){if(s<=0)return;const i=cs(s,n);e.scale.set(t.scale.x*i.x,t.scale.y*i.y,t.scale.z*i.z)}toggleConstraint(e,t){if(!this.session)return;const n=this.session.constraint;if(t){const i={x:"yz",y:"xz",z:"xy"}[e];this.session.constraint=n===i?"none":i}else this.session.constraint=n===e?"none":e;this.axisVisualizer.show(this.session.objectWorldCenter,this.session.constraint,this.mode),this.mode==="translate"&&this.updateManipulation(),this.updateStatus(),this.log.info("Constraint: %s",this.session.constraint)}startManipulation(e,t){this.state="manipulating";const n={position:e.position.clone(),rotation:e.rotation.clone(),scale:e.scale.clone()};e.updateMatrixWorld();const s=new v;e.getWorldPosition(s);const i=this.context.getCamera(),o=dn(s,i);this.updatePointer(t);const a=this.pointer.clone(),r=rs(s,i,"none",this.mode),l=is(a,i,r)??s.clone(),d=os(a,o),h=as(a,o);this.session={object:e,mode:this.mode,constraint:"none",originalTransform:n,initialPointer:a,initialObjectCenter:o,initialWorldPoint:l,objectWorldCenter:s,initialDistance:d,initialAngle:h,accumulatedDelta:new Y(0,0),usePointerLock:!1,typedValue:""},this.context.disableOrbitControls(),this.requestPointerLock(),this.updateStatus(),this.log.info("Started %s manipulation",this.mode)}requestPointerLock(){const e=this.context.engine.canvas;e instanceof HTMLCanvasElement&&(document.addEventListener("pointerlockchange",this.onPointerLockChangeBound),e.requestPointerLock().catch(()=>{this.log.warn("Pointer lock denied, using fallback mode")}))}handlePointerLockChange(){const e=this.context.engine.canvas,t=document.pointerLockElement===e;if(this.session){if(t){this.session.usePointerLock=!0;const n=this.context.engine.sizes,s=(this.session.initialPointer.x+1)*.5*n.width,i=(1-this.session.initialPointer.y)*.5*n.height;this.showVirtualCursor(s,i)}else if(this.session.usePointerLock){this.log.info("Pointer lock exited, cancelling manipulation"),this.cancel();return}}}exitPointerLock(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeBound),document.pointerLockElement&&document.exitPointerLock(),this.hideVirtualCursor()}createVirtualCursor(){this.virtualCursor||(this.virtualCursor=document.createElement("div"),this.virtualCursor.style.cssText=`
            position: fixed;
            width: 20px;
            height: 20px;
            pointer-events: none;
            z-index: 100000;
            transform: translate(-50%, -50%);
        `,this.virtualCursor.innerHTML=`
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" stroke-width="2"/>
                <circle cx="10" cy="10" r="8" stroke="black" stroke-width="1"/>
                <line x1="10" y1="2" x2="10" y2="6" stroke="white" stroke-width="2"/>
                <line x1="10" y1="14" x2="10" y2="18" stroke="white" stroke-width="2"/>
                <line x1="2" y1="10" x2="6" y2="10" stroke="white" stroke-width="2"/>
                <line x1="14" y1="10" x2="18" y2="10" stroke="white" stroke-width="2"/>
            </svg>
        `,document.body.appendChild(this.virtualCursor))}showVirtualCursor(e,t){this.createVirtualCursor(),this.virtualCursorPos.x=e,this.virtualCursorPos.y=t,this.updateVirtualCursorPosition(),this.virtualCursor&&(this.virtualCursor.style.display="block")}hideVirtualCursor(){this.virtualCursor&&(this.virtualCursor.style.display="none")}updateVirtualCursor(e,t){if(!this.virtualCursor)return;const n=window.innerWidth,s=window.innerHeight;this.virtualCursorPos.x+=e,this.virtualCursorPos.y+=t,this.virtualCursorPos.x<0?this.virtualCursorPos.x+=n:this.virtualCursorPos.x>=n&&(this.virtualCursorPos.x-=n),this.virtualCursorPos.y<0?this.virtualCursorPos.y+=s:this.virtualCursorPos.y>=s&&(this.virtualCursorPos.y-=s),this.updateVirtualCursorPosition()}updateVirtualCursorPosition(){this.virtualCursor&&(this.virtualCursor.style.left=`${this.virtualCursorPos.x}px`,this.virtualCursor.style.top=`${this.virtualCursorPos.y}px`)}updateManipulation(){if(!this.session||this.session.typedValue.length>0)return;const e=this.session.object,t=this.session.originalTransform,n=this.context.getCamera();switch(this.mode){case"translate":this.updateTranslate(e,t,n);break;case"rotate":this.updateRotate(e,t,n);break;case"scale":this.updateScale(e,t,n);break}}updateTranslate(e,t,n){if(!this.session)return;const s=this.session.constraint;let i;if(this.session.usePointerLock)i=this.screenDeltaToWorldDelta(this.session.accumulatedDelta,n,s,this.session.objectWorldCenter);else{const o=this.session.objectWorldCenter;let a;if(s==="x"||s==="y"||s==="z"){const r=ls(s);a=Oa(this.pointer,n,o,r)}else{const r=rs(o,n,s);a=is(this.pointer,n,r)}if(!a)return;i=a.clone().sub(this.session.initialWorldPoint),i.multiplyScalar(.5)}i=Ua(i,s),e.position.copy(t.position).add(i)}screenDeltaToWorldDelta(e,t,n,s){if(n==="x"||n==="y"||n==="z"){const a=ls(n),r=dn(s,t),l=dn(s.clone().add(a),t),d=new Y(l.x-r.x,l.y-r.y),h=d.length();if(h<.001)return new v;d.divideScalar(h);const p=new Y(e.x,-e.y).dot(d);return a.clone().multiplyScalar(p*un)}const i=new v(1,0,0).applyQuaternion(t.quaternion),o=new v(0,1,0).applyQuaternion(t.quaternion);return new v().addScaledVector(i,e.x*un).addScaledVector(o,-e.y*un)}updateRotate(e,t,n){if(!this.session)return;let s;if(this.session.usePointerLock)s=-this.session.accumulatedDelta.x*Ga;else{const a=as(this.pointer,this.session.initialObjectCenter);s=-Va(a,this.session.initialAngle)}const i=ds(this.session.constraint,n);e.rotation.copy(t.rotation);const o=new Z().setFromAxisAngle(i,s);e.quaternion.premultiply(o)}updateScale(e,t,n){if(!this.session)return;let s;if(this.session.usePointerLock){const o=this.session.accumulatedDelta.x*Wa;s=Math.max(.01,1+o)}else{const o=os(this.pointer,this.session.initialObjectCenter);s=qa(o,this.session.initialDistance)}const i=cs(s,this.session.constraint);e.scale.set(t.scale.x*i.x,t.scale.y*i.y,t.scale.z*i.z)}finalize(){if(!this.session)return;const e=this.session.object.name||this.session.object.type;this.context.recordHistory(`${this.mode}: ${e}`),this.endManipulation(),this.log.info("Finalized %s",this.mode)}cancel(){this.session&&(this.restoreOriginalTransform(),this.endManipulation(),this.log.info("Cancelled %s",this.mode))}restoreOriginalTransform(){if(!this.session)return;const e=this.session.object,t=this.session.originalTransform;e.position.copy(t.position),e.rotation.copy(t.rotation),e.scale.copy(t.scale)}endManipulation(){this.exitPointerLock(),this.state="idle",this.session=null,this.axisVisualizer.hide(),this.context.enableOrbitControls(),this.detachListeners(),this.updateStatus()}updatePointer(e){const t=this.context.engine.sizes;this.pointer.x=e.clientX/t.width*2-1,this.pointer.y=-(e.clientY/t.height)*2+1}updateStatus(){if(!this.onStatusChange)return;if(this.state==="idle"){this.onStatusChange(null);return}let e="";e={translate:"Move",rotate:"Rotate",scale:"Scale"}[this.mode],this.session&&this.session.constraint!=="none"&&(e+=` ${this.session.constraint.toUpperCase()}`),this.session&&this.session.typedValue&&(e+=`: ${this.session.typedValue}`,this.mode==="rotate"&&(e+="°")),this.onStatusChange(e)}dispose(){this.detachListeners(),this.exitPointerLock(),this.axisVisualizer.dispose(),this.virtualCursor&&(this.virtualCursor.remove(),this.virtualCursor=null),this.session=null,this.onStatusChange=null}}class Ya extends _{id="transform";name="Transform";icon="transform";controls=null;currentObject=null;unsubscribe=null;mode="translate";space="world";snapTranslate=.001;snapRotate=.001;snapScale=.001;gizmoSize=.75;panelElement=null;directManipulator=null;statusOverlay=null;log;modeChangeUnsubscribe=null;init(e){super.init(e),this.log=this.engine.getLogger("Debug.TransformTool"),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&(this.disable(),this.enable())})}enable(){const e=this.engine.canvas;if(!(e instanceof HTMLCanvasElement)){this.log.warn("Requires HTMLCanvasElement");return}const t=this.engine.getActiveCamera();this.log.info("Enabling with camera: %s",t.type),this.controls=new Ea(t,e),this.controls.setMode(this.mode),this.controls.setSpace(this.space),this.controls.setSize(this.gizmoSize),this.controls.showX=!0,this.controls.showY=!0,this.controls.showZ=!0,this.updateSnap();const n=this.controls.getHelper();n.name="__debug_transform_controls",this.scene.add(n),this.log.info("TransformControls helper added to scene"),this.controls.addEventListener("dragging-changed",i=>{const o=i.value;if(this.manager.camera.setControlsEnabled(!o),this.engine.camera.controls.enabled=!o,!o&&this.currentObject){const a=this.currentObject.name||this.currentObject.type;this.manager.history.recordAction(`Transform: ${a}`)}}),this.controls.addEventListener("objectChange",()=>{this.updateTransformDisplay()}),this.unsubscribe=this.manager.onSelectionChange(i=>{this.onSelectionChange(i)});const s=this.manager.selection.selected;s&&this.onSelectionChange(s),window.addEventListener("keydown",this.onKeyDown),ne.getInstance().registerMany("Transform",[{key:"G",description:"Translate mode (click object to drag)"},{key:"R",description:"Rotate mode (click object to drag)"},{key:"S",description:"Scale mode (click object to drag)"},{key:"X",description:"Constrain to X axis"},{key:"Y",description:"Constrain to Y axis"},{key:"Z",description:"Constrain to Z axis"},{key:"Shift+X/Y/Z",description:"Constrain to plane"},{key:"Esc",description:"Cancel manipulation"}]),this.createDirectManipulator(),this.createStatusOverlay()}createDirectManipulator(){const e={engine:this.engine,manager:this.manager,scene:this.scene,getCamera:()=>this.engine.getActiveCamera(),getSelectedObject:()=>this.currentObject,disableOrbitControls:()=>{this.manager.camera.setControlsEnabled(!1),this.engine.camera.controls.enabled=!1},enableOrbitControls:()=>{this.manager.camera.setControlsEnabled(!0),this.engine.camera.controls.enabled=!0},recordHistory:t=>{this.manager.history.recordAction(t)}};this.directManipulator=new Xa(e,this.engine.getLogger("Debug.DirectManipulator")),this.directManipulator.setStatusCallback(t=>{this.updateStatusOverlay(t)})}createStatusOverlay(){this.statusOverlay=document.createElement("div"),this.statusOverlay.className="transform-status-overlay",this.statusOverlay.style.cssText=`
            position: fixed;
            bottom: 60px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.8);
            color: #fff;
            padding: 8px 16px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 14px;
            z-index: 10000;
            pointer-events: none;
            display: none;
        `,document.body.appendChild(this.statusOverlay)}updateStatusOverlay(e){this.statusOverlay&&(e?(this.statusOverlay.textContent=e,this.statusOverlay.style.display="block"):this.statusOverlay.style.display="none")}disable(){this.unsubscribe?.(),this.unsubscribe=null,window.removeEventListener("keydown",this.onKeyDown),ne.getInstance().unregister("Transform"),this.controls&&(this.controls.detach(),this.scene.remove(this.controls.getHelper()),this.controls.dispose(),this.controls=null),this.directManipulator&&(this.directManipulator.dispose(),this.directManipulator=null),this.statusOverlay&&(this.statusOverlay.remove(),this.statusOverlay=null),this.currentObject=null,this.clearTransformDisplay()}onSelectionChange(e){this.currentObject=e,this.log.info("Selection changed: %s",e?.name||"null"),this.controls&&(e&&e.type==="Scene"?(this.log.warn("Cannot attach TransformControls to Scene (would cause infinite recursion)"),this.controls.detach(),this.clearTransformDisplay()):e?(this.controls.attach(e),this.controls.getHelper().visible=!0,this.log.info("Attached to object: %s",e.name||e.uuid),this.updateTransformDisplay()):(this.controls.detach(),this.clearTransformDisplay()))}onKeyDown=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)&&this.enabled&&!this.directManipulator?.isActive())switch(e.key.toLowerCase()){case"g":this.setMode("translate"),this.currentObject&&this.directManipulator?.arm("translate");break;case"r":this.setMode("rotate"),this.currentObject&&this.directManipulator?.arm("rotate");break;case"s":!e.ctrlKey&&!e.metaKey&&(this.setMode("scale"),this.currentObject&&this.directManipulator?.arm("scale"));break}};setMode(e){this.mode!==e&&(this.mode=e,this.controls?.setMode(e),this.panelElement?.setMode(e),this.updateSnap(),this.manager.history.recordAction(`Transform mode → ${e}`))}setSpace(e){this.space!==e&&(this.space=e,this.controls?.setSpace(e),this.panelElement?.setSpace(e),this.manager.history.recordAction(`Transform space → ${e}`))}updateSnap(){if(this.controls)switch(this.mode){case"translate":this.controls.setTranslationSnap(this.snapTranslate||null);break;case"rotate":this.controls.setRotationSnap(this.snapRotate?H.degToRad(this.snapRotate):null);break;case"scale":this.controls.setScaleSnap(this.snapScale||null);break}}updateTransformDisplay(){if(!this.currentObject||!this.panelElement)return;const e=this.currentObject.position,t=this.currentObject.rotation,n=this.currentObject.scale;this.panelElement.setPosition(e.x,e.y,e.z),this.panelElement.setRotation(H.radToDeg(t.x),H.radToDeg(t.y),H.radToDeg(t.z)),this.panelElement.setScale(n.x,n.y,n.z)}clearTransformDisplay(){this.panelElement?.clearTransform()}applyPosition(e,t,n){this.currentObject&&(this.currentObject.position.set(e,t,n),this.recordTransformChange("position"))}applyRotation(e,t,n){this.currentObject&&(this.currentObject.rotation.set(H.degToRad(e),H.degToRad(t),H.degToRad(n)),this.recordTransformChange("rotation"))}applyScale(e,t,n){this.currentObject&&(e>0&&(this.currentObject.scale.x=e),t>0&&(this.currentObject.scale.y=t),n>0&&(this.currentObject.scale.z=n),this.recordTransformChange("scale"))}recordTransformChange(e){if(!this.currentObject)return;const t=this.currentObject.name||this.currentObject.type;this.manager.history.recordAction(`${e}: ${t}`)}update(e){if(this.controls){const t=this.engine.getActiveCamera();this.controls.camera!==t&&(this.log.info("Syncing camera to: %s",t.type),this.controls.camera=t,this.controls.getHelper().updateMatrixWorld())}this.currentObject&&this.updateTransformDisplay()}createUI(e){this.panelElement=document.createElement(at.tagName),this.panelElement.ensureInitialized(),this.panelElement.setMode(this.mode),this.panelElement.setSpace(this.space),this.panelElement.setSnap(this.snapTranslate,this.snapRotate,this.snapScale),this.panelElement.setSize(this.gizmoSize),this.panelElement.addEventListener("mode-change",t=>{const{mode:n}=t.detail;this.setMode(n)}),this.panelElement.addEventListener("space-change",t=>{const{space:n}=t.detail;this.setSpace(n)}),this.panelElement.addEventListener("position-change",t=>{const{x:n,y:s,z:i}=t.detail;this.applyPosition(n,s,i)}),this.panelElement.addEventListener("rotation-change",t=>{const{x:n,y:s,z:i}=t.detail;this.applyRotation(n,s,i)}),this.panelElement.addEventListener("scale-change",t=>{const{x:n,y:s,z:i}=t.detail;this.applyScale(n,s,i)}),this.panelElement.addEventListener("snap-change",t=>{const{translate:n,rotate:s,scale:i}=t.detail;this.snapTranslate=n,this.snapRotate=s,this.snapScale=i,this.updateSnap()}),this.panelElement.addEventListener("size-change",t=>{const{size:n}=t.detail;this.gizmoSize=n,this.controls?.setSize(n)}),e.appendChild(this.panelElement)}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.disable(),this.panelElement=null,this.directManipulator=null,this.statusOverlay=null}getState(){let e=null,t=null;if(this.currentObject){e=Ln(this.currentObject);const n=this.currentObject.position,s=this.currentObject.rotation,i=this.currentObject.scale;t={position:[n.x,n.y,n.z],rotation:[s.x,s.y,s.z],scale:[i.x,i.y,i.z]}}return{mode:this.mode,space:this.space,snapTranslate:this.snapTranslate,snapRotate:this.snapRotate,snapScale:this.snapScale,gizmoSize:this.gizmoSize,objectPath:e,objectTransform:t}}setState(e){const t=e;if(t&&(t.mode&&t.mode!==this.mode&&(this.mode=t.mode,this.controls?.setMode(t.mode),this.panelElement?.setMode(t.mode)),t.space&&t.space!==this.space&&(this.space=t.space,this.controls?.setSpace(t.space),this.panelElement?.setSpace(t.space)),typeof t.snapTranslate=="number"&&(this.snapTranslate=t.snapTranslate),typeof t.snapRotate=="number"&&(this.snapRotate=t.snapRotate),typeof t.snapScale=="number"&&(this.snapScale=t.snapScale),typeof t.gizmoSize=="number"&&(this.gizmoSize=t.gizmoSize,this.controls?.setSize(t.gizmoSize)),this.updateSnap(),this.panelElement?.setSnap(this.snapTranslate,this.snapRotate,this.snapScale),this.panelElement?.setSize(this.gizmoSize),t.objectPath&&t.objectTransform)){const n=Tn(this.scene,t.objectPath);if(n){const[s,i,o]=t.objectTransform.position,[a,r,l]=t.objectTransform.rotation,[d,h,u]=t.objectTransform.scale;n.position.set(s,i,o),n.rotation.set(a,r,l),n.scale.set(d,h,u),this.log.info("Restored transform for: %s",t.objectPath)}else this.log.warn("Could not find object to restore transform: %s",t.objectPath)}}}const Za=`<div class="light-panel">
    <!-- Light creation -->
    <div class="create-section">
        <select class="debug-select type-select">
            <option value="directional">Directional</option>
            <option value="point">Point</option>
            <option value="spot">Spot</option>
            <option value="hemisphere">Hemisphere</option>
        </select>
        <button class="debug-button btn-add">+ Add Light</button>
    </div>

    <div class="debug-separator"></div>

    <!-- Helper size -->
    <div class="size-section debug-info-row">
        <label>Helper Size</label>
        <input type="number" class="debug-input size-input" value="1" step="0.5" min="0.1">
    </div>

    <div class="debug-separator"></div>

    <!-- Light list -->
    <div class="light-list"></div>

    <!-- Empty state -->
    <div class="empty-state">No lights found</div>
</div>
`,Ka=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.light-panel {
    font-size: 11px;
}

.create-section {
    display: flex;
    gap: 8px;
}

.type-select {
    flex: 1;
}

.btn-add {
    padding: 4px 8px;
    font-size: 10px;
}

.size-section {
    margin: 0;
}

.size-input {
    width: 60px;
    text-align: right;
}

.light-list {
    max-height: 300px;
    overflow-y: auto;
}

.empty-state {
    display: none;
    padding: 8px;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    text-align: center;
}

:host([empty]) .empty-state {
    display: block;
}

:host([empty]) .light-list {
    display: none;
}
`,Qa=`<div class="light-item">
    <div class="header">
        <span class="expand-icon"></span>
        <span class="name"></span>
        <span class="warning" hidden title="Unnamed light - won't persist in debug history"></span>
        <span class="intensity"></span>
    </div>
    <div class="details-container"></div>
</div>
`,Ja=`:host {
    display: block;
    margin-bottom: 2px;
}

.header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    font-size: 10px;
    border-radius: 2px;
    user-select: none;
    cursor: pointer;
}

.header:hover {
    background: rgba(255, 255, 255, 0.05);
}

:host([selected]) .header {
    background: rgba(255, 255, 255, 0.15);
}

.expand-icon {
    font-size: 8px;
    opacity: 0.6;
    width: 10px;
    text-align: center;
}

.name {
    flex: 1;
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    display: flex;
    align-items: center;
    gap: 4px;
}

.name .light-icon {
    display: inline-flex;
    color: var(--debug-accent, #4a90d9);
    opacity: 0.9;
}

.name .light-icon svg {
    display: block;
}

.intensity {
    color: var(--debug-text-muted, #888);
    font-size: 9px;
}

.warning {
    font-size: 12px;
    color: var(--debug-warning, #f0a030);
    cursor: help;
    text-shadow: 0 0 4px rgba(240, 160, 48, 0.5);
    margin-left: 4px;
}

.warning[hidden] {
    display: none;
}

.warning::before {
    content: '\\26A0'; /* Warning sign */
}

.details-container {
    display: none;
}

:host([expanded]) .details-container {
    display: block;
}
`,er=`<div class="light-details">
    <div class="properties"></div>
    <div class="debug-separator"></div>
    <div class="actions">
        <button class="debug-button btn-copy">Copy Code</button>
        <button class="debug-button btn-delete">Delete</button>
    </div>
</div>
`,tr=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.light-details {
    padding: 8px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 0 4px 4px;
    margin-top: -2px;
}

.properties {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.actions {
    display: flex;
    gap: 4px;
    margin-top: 4px;
}

.actions .debug-button {
    flex: 1;
    padding: 4px 8px;
    font-size: 10px;
}

.btn-delete {
    background: rgba(255, 80, 80, 0.3) !important;
    flex: 0 0 auto !important;
}

.btn-delete:hover {
    background: rgba(255, 80, 80, 0.5) !important;
}

:host(:not([deletable])) .btn-delete {
    display: none;
}
`,nr=`<div class="color-row">
    <label class="label"></label>
    <input type="color" class="color-input">
</div>
`,sr=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.color-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
}

.label {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
}

.color-input {
    width: 40px;
    height: 20px;
    padding: 0;
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    background: transparent;
    cursor: pointer;
}

.color-input::-webkit-color-swatch-wrapper {
    padding: 2px;
}

.color-input::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
}
`;class Ct extends V{static tagName="debug-color-row";static get observedAttributes(){return["label","value"]}labelEl;inputEl;render(){this.shadow.innerHTML=`<style>${K}${sr}</style>${nr}`,this.labelEl=this.$required(".label"),this.inputEl=this.$required(".color-input"),this.updateLabel(),this.updateValue()}setupEventListeners(){this.inputEl.addEventListener("input",this.handleInput)}cleanupEventListeners(){this.inputEl.removeEventListener("input",this.handleInput)}handleInput=()=>{this.emit("change",{value:this.inputEl.value})};attributeChangedCallback(e,t,n){if(!(t===n||!this.initialized))switch(e){case"label":this.updateLabel();break;case"value":this.updateValue();break}}updateLabel(){this.labelEl.textContent=this.getAttribute("label")??""}updateValue(){this.inputEl.value=this.getAttribute("value")??"#ffffff"}getValue(){return this.inputEl.value}setValue(e){this.inputEl.value=e}static register(){customElements.get(Ct.tagName)||customElements.define(Ct.tagName,Ct)}}Ct.register();const ir=`<div class="input-row">
    <label class="label"></label>
    <input class="input debug-input">
</div>
`,or=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.input-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
}

.label {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
}

.input {
    width: 60px;
    text-align: right;
}
`;class wt extends V{static tagName="debug-input-row";static get observedAttributes(){return["label","type","value","step","min","max"]}labelEl;inputEl;render(){this.shadow.innerHTML=`<style>${K}${or}</style>${ir}`,this.labelEl=this.$required(".label"),this.inputEl=this.$required(".input"),this.updateLabel(),this.updateInputType(),this.updateValue(),this.updateStep(),this.updateMin(),this.updateMax()}setupEventListeners(){this.inputEl.addEventListener("change",this.handleChange)}cleanupEventListeners(){this.inputEl.removeEventListener("change",this.handleChange)}handleChange=()=>{const e=this.inputEl.type==="number",t=e?parseFloat(this.inputEl.value):this.inputEl.value;e&&isNaN(t)||this.emit("change",{value:t})};attributeChangedCallback(e,t,n){if(!(t===n||!this.initialized))switch(e){case"label":this.updateLabel();break;case"type":this.updateInputType();break;case"value":this.updateValue();break;case"step":this.updateStep();break;case"min":this.updateMin();break;case"max":this.updateMax();break}}updateLabel(){this.labelEl.textContent=this.getAttribute("label")??""}updateInputType(){this.inputEl.type=this.getAttribute("type")??"number"}updateValue(){this.inputEl.value=this.getAttribute("value")??""}updateStep(){const e=this.getAttribute("step");e&&(this.inputEl.step=e)}updateMin(){const e=this.getAttribute("min");e?this.inputEl.min=e:this.inputEl.removeAttribute("min")}updateMax(){const e=this.getAttribute("max");e?this.inputEl.max=e:this.inputEl.removeAttribute("max")}getValue(){return this.inputEl.type==="number"?parseFloat(this.inputEl.value):this.inputEl.value}setValue(e){this.inputEl.value=String(e)}static register(){customElements.get(wt.tagName)||customElements.define(wt.tagName,wt)}}wt.register();const ar=`<div class="checkbox-row">
    <label class="label"></label>
    <input type="checkbox" class="checkbox">
</div>
`,rr=`:host {
    display: block;
    text-transform: none;
    letter-spacing: normal;
}

.checkbox-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--debug-spacing, 8px);
}

.label {
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
}

.checkbox {
    margin: 0;
    cursor: pointer;
    accent-color: var(--debug-accent, #4a90d9);
}
`;class kt extends V{static tagName="debug-checkbox-row";static get observedAttributes(){return["label","checked"]}labelEl;inputEl;render(){this.shadow.innerHTML=`<style>${K}${rr}</style>${ar}`,this.labelEl=this.$required(".label"),this.inputEl=this.$required(".checkbox"),this.updateLabel(),this.updateChecked()}setupEventListeners(){this.inputEl.addEventListener("change",this.handleChange)}cleanupEventListeners(){this.inputEl.removeEventListener("change",this.handleChange)}handleChange=()=>{this.emit("change",{checked:this.inputEl.checked})};attributeChangedCallback(e,t,n){if(!(t===n||!this.initialized))switch(e){case"label":this.updateLabel();break;case"checked":this.updateChecked();break}}updateLabel(){this.labelEl.textContent=this.getAttribute("label")??""}updateChecked(){this.inputEl.checked=this.hasAttribute("checked")}get checked(){return this.inputEl.checked}set checked(e){e?this.setAttribute("checked",""):this.removeAttribute("checked"),this.inputEl.checked=e}static register(){customElements.get(kt.tagName)||customElements.define(kt.tagName,kt)}}kt.register();class St extends V{static tagName="debug-light-details";static get observedAttributes(){return["deletable"]}propertiesEl;copyBtn;deleteBtn;lightData=null;render(){this.shadow.innerHTML=`<style>${K}${tr}</style>${er}`,this.propertiesEl=this.$required(".properties"),this.copyBtn=this.$required(".btn-copy"),this.deleteBtn=this.$required(".btn-delete")}setupEventListeners(){this.copyBtn.addEventListener("click",this.handleCopyClick),this.deleteBtn.addEventListener("click",this.handleDeleteClick)}cleanupEventListeners(){this.copyBtn.removeEventListener("click",this.handleCopyClick),this.deleteBtn.removeEventListener("click",this.handleDeleteClick)}handleCopyClick=()=>{this.emit("copy-code")};handleDeleteClick=()=>{this.emit("delete")};setLightData(e){this.ensureInitialized(),this.lightData=e,this.buildProperties()}get deletable(){return this.hasAttribute("deletable")}set deletable(e){e?this.setAttribute("deletable",""):this.removeAttribute("deletable")}buildProperties(){if(!this.lightData)return;this.propertiesEl.innerHTML="";const e=this.lightData;if(e.type!=="hemisphere"&&this.addColorRow("Color","color",e.color),e.type==="hemisphere"&&(this.addColorRow("Sky","color",e.color),e.groundColor!==void 0&&this.addColorRow("Ground","groundColor",e.groundColor)),this.addInputRow("Intensity","intensity",e.intensity,.01),(e.type==="point"||e.type==="spot")&&(e.distance!==void 0&&this.addInputRow("Distance","distance",e.distance,.1),e.decay!==void 0&&this.addInputRow("Decay","decay",e.decay,.01)),e.type==="spot"){if(e.angle!==void 0){const t=e.angle*180/Math.PI;this.addInputRow("Angle","angle",t,1)}e.penumbra!==void 0&&this.addInputRow("Penumbra","penumbra",e.penumbra,.01)}e.type!=="hemisphere"&&e.castShadow!==void 0&&this.addCheckboxRow("Cast Shadow","castShadow",e.castShadow),e.type!=="hemisphere"&&e.position&&this.addVector3Row("Position","position",e.position)}addColorRow(e,t,n){const s=document.createElement("debug-color-row");s.setAttribute("label",e),s.setAttribute("value",n),s.addEventListener("change",i=>{const o=i.detail;this.emit("property-change",{property:t,value:o.value})}),this.propertiesEl.appendChild(s)}addInputRow(e,t,n,s){const i=document.createElement("debug-input-row");i.setAttribute("label",e),i.setAttribute("value",String(n)),i.setAttribute("step",String(s)),i.addEventListener("change",o=>{const a=o.detail;t==="angle"?this.emit("property-change",{property:t,value:a.value*Math.PI/180}):this.emit("property-change",{property:t,value:a.value})}),this.propertiesEl.appendChild(i)}addCheckboxRow(e,t,n){const s=document.createElement("debug-checkbox-row");s.setAttribute("label",e),n&&s.setAttribute("checked",""),s.addEventListener("change",i=>{const o=i.detail;this.emit("property-change",{property:t,value:o.checked})}),this.propertiesEl.appendChild(s)}addVector3Row(e,t,n){const s=document.createElement("debug-vector3-row");s.setAttribute("label",e),s.setAttribute("x",n.x.toFixed(2)),s.setAttribute("y",n.y.toFixed(2)),s.setAttribute("z",n.z.toFixed(2)),s.addEventListener("change",i=>{const o=i.detail;this.emit("property-change",{property:t,value:{x:o.x,y:o.y,z:o.z}})}),this.propertiesEl.appendChild(s)}static register(){customElements.get(St.tagName)||customElements.define(St.tagName,St)}}St.register();const lr={directional:"sun",point:"lightbulb",spot:"spotlight",hemisphere:"hemisphere"};class Et extends V{static tagName="debug-light-item";static get observedAttributes(){return["expanded","selected","deletable"]}headerEl;expandIconEl;nameEl;warningEl;intensityEl;detailsContainerEl;detailsEl=null;lightName="";lightType="point";intensityValue=1;render(){this.shadow.innerHTML=`<style>${K}${Ja}</style>${Qa}`,this.headerEl=this.$required(".header"),this.expandIconEl=this.$required(".expand-icon"),this.nameEl=this.$required(".name"),this.warningEl=this.$required(".warning"),this.intensityEl=this.$required(".intensity"),this.detailsContainerEl=this.$required(".details-container"),this.updateExpandIcon()}setupEventListeners(){this.expandIconEl.addEventListener("click",this.handleExpandClick),this.nameEl.addEventListener("click",this.handleNameClick)}cleanupEventListeners(){this.expandIconEl.removeEventListener("click",this.handleExpandClick),this.nameEl.removeEventListener("click",this.handleNameClick)}handleExpandClick=e=>{e.stopPropagation(),this.emit("toggle")};handleNameClick=e=>{e.stopPropagation(),this.emit("select")};attributeChangedCallback(e,t,n){if(!(t===n||!this.initialized))switch(e){case"expanded":this.updateExpandIcon(),this.updateDetailsVisibility();break;case"deletable":this.updateDeletable();break}}updateExpandIcon(){this.expandIconEl.textContent=this.expanded?"▼":"▶"}updateDetailsVisibility(){this.expanded&&!this.detailsEl&&(this.detailsEl=document.createElement("debug-light-details"),this.detailsEl.deletable=this.deletable,this.detailsContainerEl.appendChild(this.detailsEl))}updateDeletable(){this.detailsEl&&(this.detailsEl.deletable=this.deletable)}get expanded(){return this.hasAttribute("expanded")}set expanded(e){e?this.setAttribute("expanded",""):this.removeAttribute("expanded")}get selected(){return this.hasAttribute("selected")}set selected(e){e?this.setAttribute("selected",""):this.removeAttribute("selected")}get deletable(){return this.hasAttribute("deletable")}set deletable(e){e?this.setAttribute("deletable",""):this.removeAttribute("deletable")}setLightInfo(e,t,n){this.ensureInitialized(),this.lightName=e,this.lightType=t,this.intensityValue=n;const s=lr[t]??"lightbulb",i=En(s,12),o=e||`[${t}]`;this.nameEl.innerHTML=`<span class="light-icon">${i}</span> ${o}`,this.intensityEl.textContent=`I: ${n.toFixed(2)}`,this.warningEl.hidden=!!e}setLightData(e){this.ensureInitialized(),this.detailsEl||(this.detailsEl=document.createElement("debug-light-details"),this.detailsEl.deletable=this.deletable,this.detailsContainerEl.appendChild(this.detailsEl)),this.detailsEl.setLightData(e)}toggle(){this.expanded=!this.expanded}static register(){customElements.get(Et.tagName)||customElements.define(Et.tagName,Et)}}Et.register();class Lt extends V{static tagName="debug-light-panel";typeSelectEl;addBtnEl;sizeInputEl;lightListEl;itemElements=new Map;expandedLights=new Set;selectedUuid=null;render(){this.shadow.innerHTML=`<style>${K}${Ka}</style>${Za}`,this.typeSelectEl=this.$required(".type-select"),this.addBtnEl=this.$required(".btn-add"),this.sizeInputEl=this.$required(".size-input"),this.lightListEl=this.$required(".light-list")}setupEventListeners(){this.addBtnEl.addEventListener("click",this.handleAddClick),this.sizeInputEl.addEventListener("change",this.handleSizeChange)}cleanupEventListeners(){this.addBtnEl.removeEventListener("click",this.handleAddClick),this.sizeInputEl.removeEventListener("change",this.handleSizeChange)}handleAddClick=()=>{this.emit("create-light",{type:this.typeSelectEl.value})};handleSizeChange=()=>{const e=parseFloat(this.sizeInputEl.value)||1;this.emit("size-change",{size:e})};setLights(e){this.ensureInitialized(),e.length===0?this.setAttribute("empty",""):this.removeAttribute("empty");const t=new Set(e.map(s=>s.uuid));for(const[s,i]of this.itemElements)t.has(s)||(i.remove(),this.itemElements.delete(s));const n=[...e].sort((s,i)=>{const o=s.name||`[${s.type}]`,a=i.name||`[${i.type}]`;return o.localeCompare(a)});for(const s of n){let i=this.itemElements.get(s.uuid);i||(i=this.createLightItem(s.uuid),this.itemElements.set(s.uuid,i),this.lightListEl.appendChild(i)),i.setLightInfo(s.name,s.type,s.intensity),i.setLightData(s.data),i.expanded=this.expandedLights.has(s.uuid),i.selected=s.uuid===this.selectedUuid,i.deletable=s.deletable}}setSelected(e){this.selectedUuid=e;for(const[t,n]of this.itemElements)n.selected=t===e}setSize(e){this.ensureInitialized(),this.sizeInputEl.value=String(e)}expandLight(e){this.expandedLights.add(e);const t=this.itemElements.get(e);t&&(t.expanded=!0)}collapseLight(e){this.expandedLights.delete(e);const t=this.itemElements.get(e);t&&(t.expanded=!1)}toggleLight(e){this.expandedLights.has(e)?this.collapseLight(e):this.expandLight(e)}createLightItem(e){const t=document.createElement("debug-light-item");return t.addEventListener("toggle",()=>{this.toggleLight(e),this.emit("light-toggle",{uuid:e})}),t.addEventListener("select",()=>{this.emit("light-select",{uuid:e})}),t.addEventListener("property-change",n=>{const s=n.detail;this.emit("light-property-change",{uuid:e,...s})}),t.addEventListener("copy-code",()=>{this.emit("light-copy-code",{uuid:e})}),t.addEventListener("delete",()=>{this.emit("light-delete",{uuid:e})}),t}static register(){customElements.get(Lt.tagName)||customElements.define(Lt.tagName,Lt)}}Lt.register();class cr extends _{id="lights";name="Lights";icon="lightbulb";lights=new Map;helpers=new Map;helperSize=1;log;panelElement=null;unsubscribeSelection=null;boundOnReady=null;modeChangeUnsubscribe=null;lastScanTime=0;SCAN_INTERVAL=2e3;createdLightCounters={directional:0,point:0,spot:0,hemisphere:0};init(e){super.init(e),this.log=this.engine.getLogger("Debug.LightHelpersTool"),this.unsubscribeSelection=this.manager.onSelectionChange(()=>{this.updateSelectionHighlight()}),this.boundOnReady=()=>this.scanLights(),this.manager.context.resources.on("ready",this.boundOnReady),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&(this.disable(),this.enable())})}enable(){this.scanLights(),this.createHelpers(),this.log.info(`Enabled with ${this.lights.size} lights`)}disable(){this.clearHelpers(),this.log.info("Disabled")}update(e){const t=performance.now();if(t-this.lastScanTime>this.SCAN_INTERVAL&&(this.lastScanTime=t,this.scanLights()&&this.enabled&&this.syncHelpers()),this.enabled)for(const[n,s]of this.helpers){const i=this.lights.get(n);i&&(i.type==="directional"||i.type==="spot")&&s.update()}}createUI(e){this.scanLights(),this.panelElement=document.createElement("debug-light-panel"),this.panelElement.setSize(this.helperSize),this.panelElement.addEventListener("create-light",t=>{const{type:n}=t.detail;this.createNewLight(n)}),this.panelElement.addEventListener("size-change",t=>{const{size:n}=t.detail;this.setSize(n)}),this.panelElement.addEventListener("light-select",t=>{const{uuid:n}=t.detail,s=this.lights.get(n);s&&this.manager.selection.onSelect(s.light)}),this.panelElement.addEventListener("light-property-change",t=>{const{uuid:n,property:s,value:i}=t.detail;this.applyPropertyChange(n,s,i)}),this.panelElement.addEventListener("light-copy-code",t=>{const{uuid:n}=t.detail,s=this.lights.get(n);s&&this.copyLightCode(s.light,s.type)}),this.panelElement.addEventListener("light-delete",t=>{const{uuid:n}=t.detail,s=this.lights.get(n);s&&this.deleteLight(s.light)}),e.appendChild(this.panelElement),this.updateUI()}scanLights(){const e=new Set(this.lights.keys()),t=new Set;let n=!1;this.scene.traverse(s=>{if(this.isLight(s)&&!s.name.startsWith("__debug_")&&(t.add(s.uuid),!this.lights.has(s.uuid))){const i=this.getLightType(s);this.lights.set(s.uuid,{light:s,type:i}),n=!0}});for(const s of e)t.has(s)||(this.lights.delete(s),n=!0);return n&&this.updateUI(),n}isLight(e){return e.isLight===!0}getLightType(e){return e instanceof vt?"directional":e instanceof ve?"point":e instanceof U?"spot":e instanceof ee?"hemisphere":"point"}updateUI(){if(!this.panelElement)return;const e=[];for(const[t,{light:n,type:s}]of this.lights){const i="intensity"in n?n.intensity:0;e.push({uuid:t,name:n.name,type:s,intensity:i,deletable:!!n.userData.debugCreated,data:this.getLightData(n,s)})}this.panelElement.setLights(e)}updateSelectionHighlight(){if(!this.panelElement)return;const e=this.manager.selection.selected?.uuid??null;this.panelElement.setSelected(e)}getLightData(e,t){const n=e.color?.getHexString()??"ffffff",s={type:t,color:"#"+n,intensity:"intensity"in e?e.intensity:1};return e instanceof ee&&(s.groundColor="#"+e.groundColor.getHexString()),(e instanceof ve||e instanceof U)&&(s.distance=e.distance,s.decay=e.decay),e instanceof U&&(s.angle=e.angle,s.penumbra=e.penumbra),"castShadow"in e&&(s.castShadow=e.castShadow),e instanceof ee||(s.position={x:e.position.x,y:e.position.y,z:e.position.z}),s}applyPropertyChange(e,t,n){const s=this.lights.get(e);if(!s)return;const i=s.light;switch(t){case"color":"color"in i&&(i.color.set(n),this.updateHelperColor(e));break;case"groundColor":i instanceof ee&&(i.groundColor.set(n),this.updateHelperColor(e));break;case"intensity":"intensity"in i&&(i.intensity=n);break;case"distance":(i instanceof ve||i instanceof U)&&(i.distance=n);break;case"decay":(i instanceof ve||i instanceof U)&&(i.decay=n);break;case"angle":i instanceof U&&(i.angle=n);break;case"penumbra":i instanceof U&&(i.penumbra=n);break;case"castShadow":"castShadow"in i&&(i.castShadow=n);break;case"position":if(!(i instanceof ee)){const a=n;i.position.set(a.x,a.y,a.z)}break}const o=i.name||s.type;this.manager.history.recordAction(`Light ${t}: ${o}`)}createHelpers(){for(const[e,t]of this.lights){if(this.helpers.has(e))continue;const n=this.createHelper(t.light,t.type);n&&(n.name=`__debug_light_helper_${e}`,this.scene.add(n),this.helpers.set(e,n))}}createHelper(e,t){switch(t){case"directional":return new di(e,this.helperSize,e.color);case"point":return new ci(e,this.helperSize,e.color);case"spot":return new li(e,e.color);case"hemisphere":return new ri(e,this.helperSize);default:return null}}syncHelpers(){for(const[e,t]of this.lights)if(!this.helpers.has(e)){const n=this.createHelper(t.light,t.type);n&&(n.name=`__debug_light_helper_${e}`,this.scene.add(n),this.helpers.set(e,n))}for(const[e,t]of this.helpers)this.lights.has(e)||(this.scene.remove(t),t.dispose(),this.helpers.delete(e))}clearHelpers(){for(const e of this.helpers.values())this.scene.remove(e),e.dispose();this.helpers.clear()}updateHelperColor(e){const t=this.helpers.get(e);t&&"update"in t&&typeof t.update=="function"&&t.update()}setSize(e){this.helperSize!==e&&(this.helperSize=e,this.enabled&&(this.clearHelpers(),this.createHelpers()),this.manager.history.recordAction("Light helper size"))}createNewLight(e){this.createdLightCounters[e]++;const t=this.createdLightCounters[e],n=`Debug_${this.capitalizeType(e)}Light_${t}`;let s;switch(e){case"directional":{const i=new vt(16777215,1);i.position.set(5,10,5),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),s=i;break}case"point":{const i=new ve(16777215,1,50,2);i.position.set(0,5,0),i.castShadow=!0,i.shadow.mapSize.set(512,512),s=i;break}case"spot":{const i=new U(16777215,1,50,Math.PI/6,.5,2);i.position.set(0,10,0),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),s=i;break}case"hemisphere":{s=new ee(8900331,4021340,.5);break}}s.name=n,s.userData.debugCreated=!0,this.scene.add(s),this.scanLights(),this.panelElement&&this.panelElement.expandLight(s.uuid),this.enabled&&this.syncHelpers(),this.log.info(`Created ${e} light: ${n}`)}capitalizeType(e){return e.charAt(0).toUpperCase()+e.slice(1)}deleteLight(e){const t=this.helpers.get(e.uuid);t&&(this.scene.remove(t),t.dispose(),this.helpers.delete(e.uuid)),this.lights.delete(e.uuid),this.scene.remove(e),"dispose"in e&&typeof e.dispose=="function"&&e.dispose(),this.updateUI(),this.log.info(`Deleted light: ${e.name}`)}copyLightCode(e,t){const n=[],s=this.toVariableName(e.name||t),i=this.getClassName(t);if(n.push(this.generateConstructor(e,t,s,i)),e.name&&n.push(`${s}.name = '${e.name}';`),!(e instanceof ee)){const a=e.position;n.push(`${s}.position.set(${this.formatNum(a.x)}, ${this.formatNum(a.y)}, ${this.formatNum(a.z)});`)}if(e instanceof U){const a=e.target.position;n.push(`${s}.target.position.set(${this.formatNum(a.x)}, ${this.formatNum(a.y)}, ${this.formatNum(a.z)});`)}if("castShadow"in e&&e.castShadow){n.push(`${s}.castShadow = true;`);const a=e.shadow;if(n.push(`${s}.shadow.mapSize.set(${a.mapSize.x}, ${a.mapSize.y});`),n.push(`${s}.shadow.bias = ${this.formatNum(a.bias)};`),e instanceof vt&&a.camera instanceof Sn){const r=a.camera;n.push(`${s}.shadow.camera.left = ${this.formatNum(r.left)};`),n.push(`${s}.shadow.camera.right = ${this.formatNum(r.right)};`),n.push(`${s}.shadow.camera.top = ${this.formatNum(r.top)};`),n.push(`${s}.shadow.camera.bottom = ${this.formatNum(r.bottom)};`),n.push(`${s}.shadow.camera.near = ${this.formatNum(r.near)};`),n.push(`${s}.shadow.camera.far = ${this.formatNum(r.far)};`)}}n.push(""),n.push("// Add to scene"),n.push(`this.group.add(${s});`),e instanceof U&&n.push(`this.group.add(${s}.target);`);const o=n.join(`
`);navigator.clipboard.writeText(o).then(()=>{this.log.ok("Light code copied to clipboard")}).catch(a=>{this.log.err("Failed to copy: %s",a)})}generateConstructor(e,t,n,s){switch(t){case"directional":{const i=e;return`const ${n} = new ${s}(0x${i.color.getHexString()}, ${this.formatNum(i.intensity)});`}case"point":{const i=e;return`const ${n} = new ${s}(0x${i.color.getHexString()}, ${this.formatNum(i.intensity)}, ${this.formatNum(i.distance)}, ${this.formatNum(i.decay)});`}case"spot":{const i=e;return`const ${n} = new ${s}(0x${i.color.getHexString()}, ${this.formatNum(i.intensity)}, ${this.formatNum(i.distance)}, ${this.formatNum(i.angle)}, ${this.formatNum(i.penumbra)}, ${this.formatNum(i.decay)});`}case"hemisphere":{const i=e;return`const ${n} = new ${s}(0x${i.color.getHexString()}, 0x${i.groundColor.getHexString()}, ${this.formatNum(i.intensity)});`}default:return`const ${n} = new Light();`}}getClassName(e){switch(e){case"directional":return"DirectionalLight";case"point":return"PointLight";case"spot":return"SpotLight";case"hemisphere":return"HemisphereLight";default:return"Light"}}toVariableName(e){const t=e.replace(/[^a-zA-Z0-9]/g," ").trim();return t?t.split(/\s+/).map((s,i)=>i===0?s.toLowerCase():s.charAt(0).toUpperCase()+s.slice(1).toLowerCase()).join(""):"light"}formatNum(e){const t=Math.round(e*1e3)/1e3;return String(t)}getState(){const e={};for(const[,t]of this.lights){const n=t.light,s=Ln(n);if(!s)continue;const i={type:t.type};"color"in n&&(i.color="#"+n.color.getHexString()),n instanceof ee&&(i.groundColor="#"+n.groundColor.getHexString()),"intensity"in n&&(i.intensity=n.intensity),(n instanceof ve||n instanceof U)&&(i.distance=n.distance,i.decay=n.decay),n instanceof U&&(i.angle=n.angle,i.penumbra=n.penumbra),"castShadow"in n&&(i.castShadow=n.castShadow),n instanceof ee||(i.position={x:n.position.x,y:n.position.y,z:n.position.z}),e[s]=i}return{helperSize:this.helperSize,lightProps:e}}setState(e){const t=e;if(t&&(typeof t.helperSize=="number"&&t.helperSize!==this.helperSize&&(this.helperSize=t.helperSize,this.panelElement?.setSize(t.helperSize),this.enabled&&(this.clearHelpers(),this.createHelpers())),t.lightProps)){for(const[n,s]of Object.entries(t.lightProps)){const i=Tn(this.scene,n);if(!i||!i.isLight)continue;const o=i;s.color&&"color"in o&&o.color.set(s.color),s.groundColor&&o instanceof ee&&o.groundColor.set(s.groundColor),typeof s.intensity=="number"&&"intensity"in o&&(o.intensity=s.intensity),(o instanceof ve||o instanceof U)&&(typeof s.distance=="number"&&(o.distance=s.distance),typeof s.decay=="number"&&(o.decay=s.decay)),o instanceof U&&(typeof s.angle=="number"&&(o.angle=s.angle),typeof s.penumbra=="number"&&(o.penumbra=s.penumbra)),typeof s.castShadow=="boolean"&&"castShadow"in o&&(o.castShadow=s.castShadow),s.position&&!(o instanceof ee)&&o.position.set(s.position.x,s.position.y,s.position.z)}if(this.updateUI(),this.enabled)for(const[n]of this.helpers)this.updateHelperColor(n)}}dispose(){this.unsubscribeSelection?.(),this.unsubscribeSelection=null,this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null,this.boundOnReady&&(this.manager.context.resources.off("ready",this.boundOnReady),this.boundOnReady=null),this.disable(),this.lights.clear(),this.panelElement=null}}const dr=`<header class="header">
    <span class="title">Scene Camera View</span>
    <div class="controls">
        <button class="btn lock-btn active" title="Lock rotation (drag inside to rotate scene camera when unlocked)">Lock</button>
        <button class="btn follow-btn" title="Sync debug camera to scene camera">Follow</button>
        <button class="btn focus-btn" title="Focus mode: WASD to move, mouse to look (click to toggle)">Focus</button>
    </div>
</header>
<div class="content"></div>
<div class="resize-handle"></div>
`,hr=`:host {
    position: fixed;
    display: block;
    border: 2px solid var(--debug-accent, #4a90d9);
    border-radius: 4px;
    background: transparent;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    z-index: 20000;
    overflow: hidden;
    pointer-events: auto;
    user-select: none;
    text-transform: none;
    letter-spacing: normal;
}

:host([hidden]) {
    display: none;
}

:host([focused]) {
    border-color: #ff8800;
    box-shadow: 0 0 12px rgba(255, 136, 0, 0.5);
}

.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.95));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    cursor: move;
    display: flex;
    align-items: center;
    padding: 0 8px;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
    user-select: none;
    pointer-events: auto;
}

.title {
    flex: 1;
}

.controls {
    display: flex;
    gap: 4px;
}

.btn {
    background: none;
    border: 1px solid var(--debug-border, #444);
    border-radius: 3px;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 9px;
    padding: 2px 6px;
    font-family: inherit;
}

.btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e0e0e0);
}

.btn.active {
    background: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
    color: #fff;
}

.focus-btn.active {
    background: #ff8800;
    border-color: #ff8800;
    color: #fff;
}

.content {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: default;
}

:host([unlocked]) .content {
    cursor: grab;
}

:host([unlocked]) .content:active {
    cursor: grabbing;
}

:host([focused]) .content {
    cursor: crosshair;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    pointer-events: auto;
    background: linear-gradient(135deg, transparent 50%, var(--debug-accent, #4a90d9) 50%);
    border-radius: 0 0 2px 0;
    z-index: 1;
}
`;class Le extends HTMLElement{static tagName="debug-pip-viewport";shadow;initialized=!1;headerEl=null;titleEl=null;contentEl=null;resizeHandleEl=null;lockBtn=null;followBtn=null;focusBtn=null;isDragging=!1;dragStartX=0;dragStartY=0;isResizing=!1;resizeStartX=0;resizeStartY=0;resizeStartWidth=0;resizeStartHeight=0;isRotating=!1;rotateStartX=0;rotateStartY=0;previousMouseX=0;previousMouseY=0;static get observedAttributes(){return["locked","following","focused"]}constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}attributeChangedCallback(e,t,n){t!==n&&this.onAttributeChange(e,n)}render(){this.shadow.innerHTML=`<style>${hr}</style>${dr}`,this.headerEl=this.shadow.querySelector(".header"),this.titleEl=this.shadow.querySelector(".title"),this.contentEl=this.shadow.querySelector(".content"),this.resizeHandleEl=this.shadow.querySelector(".resize-handle"),this.lockBtn=this.shadow.querySelector(".lock-btn"),this.followBtn=this.shadow.querySelector(".follow-btn"),this.focusBtn=this.shadow.querySelector(".focus-btn")}setupEventListeners(){this.headerEl?.addEventListener("mousedown",this.onDragStart),this.resizeHandleEl?.addEventListener("mousedown",this.onResizeStart),this.contentEl?.addEventListener("mousedown",this.onRotateStart),this.contentEl?.addEventListener("mouseenter",this.onContentMouseEnter),this.contentEl?.addEventListener("mouseleave",this.onContentMouseLeave),this.contentEl?.addEventListener("mousemove",this.onContentMouseMove),this.lockBtn?.addEventListener("click",this.onLockClick),this.followBtn?.addEventListener("click",this.onFollowClick),this.focusBtn?.addEventListener("click",this.onFocusClick)}cleanupEventListeners(){this.headerEl?.removeEventListener("mousedown",this.onDragStart),this.resizeHandleEl?.removeEventListener("mousedown",this.onResizeStart),this.contentEl?.removeEventListener("mousedown",this.onRotateStart),this.contentEl?.removeEventListener("mouseenter",this.onContentMouseEnter),this.contentEl?.removeEventListener("mouseleave",this.onContentMouseLeave),this.contentEl?.removeEventListener("mousemove",this.onContentMouseMove),this.lockBtn?.removeEventListener("click",this.onLockClick),this.followBtn?.removeEventListener("click",this.onFollowClick),this.focusBtn?.removeEventListener("click",this.onFocusClick),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("mousemove",this.onResizeMove),document.removeEventListener("mouseup",this.onResizeEnd),document.removeEventListener("mousemove",this.onRotateMove),document.removeEventListener("mouseup",this.onRotateEnd)}onAttributeChange(e,t){const n=t!==null;switch(e){case"locked":this.lockBtn?.classList.toggle("active",n),n?this.removeAttribute("unlocked"):this.setAttribute("unlocked","");break;case"following":this.followBtn?.classList.toggle("active",n);break;case"focused":this.focusBtn?.classList.toggle("active",n);break}}onDragStart=e=>{e.target.closest(".btn")||(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),this.dispatchEvent(new CustomEvent("drag-start",{bubbles:!0,composed:!0})))};onDragMove=e=>{if(!this.isDragging)return;const t={deltaX:e.clientX-this.dragStartX,deltaY:e.clientY-this.dragStartY,startX:this.dragStartX,startY:this.dragStartY};this.dispatchEvent(new CustomEvent("drag-move",{bubbles:!0,composed:!0,detail:t}))};onDragEnd=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),this.dispatchEvent(new CustomEvent("drag-end",{bubbles:!0,composed:!0}))};onResizeStart=e=>{e.stopPropagation(),this.isResizing=!0,this.resizeStartX=e.clientX,this.resizeStartY=e.clientY,this.resizeStartWidth=this.offsetWidth,this.resizeStartHeight=this.offsetHeight,document.addEventListener("mousemove",this.onResizeMove),document.addEventListener("mouseup",this.onResizeEnd),this.dispatchEvent(new CustomEvent("resize-start",{bubbles:!0,composed:!0}))};onResizeMove=e=>{if(!this.isResizing)return;const t={deltaX:e.clientX-this.resizeStartX,deltaY:e.clientY-this.resizeStartY,startWidth:this.resizeStartWidth,startHeight:this.resizeStartHeight,shiftKey:e.shiftKey};this.dispatchEvent(new CustomEvent("resize-move",{bubbles:!0,composed:!0,detail:t}))};onResizeEnd=()=>{this.isResizing=!1,document.removeEventListener("mousemove",this.onResizeMove),document.removeEventListener("mouseup",this.onResizeEnd),this.dispatchEvent(new CustomEvent("resize-end",{bubbles:!0,composed:!0}))};onRotateStart=e=>{this.hasAttribute("locked")||(e.preventDefault(),this.isRotating=!0,this.rotateStartX=e.clientX,this.rotateStartY=e.clientY,document.body.style.cursor="grabbing",document.addEventListener("mousemove",this.onRotateMove),document.addEventListener("mouseup",this.onRotateEnd),this.dispatchEvent(new CustomEvent("rotate-start",{bubbles:!0,composed:!0})))};onRotateMove=e=>{if(!this.isRotating)return;const t={deltaX:e.clientX-this.rotateStartX,deltaY:e.clientY-this.rotateStartY};this.dispatchEvent(new CustomEvent("rotate-move",{bubbles:!0,composed:!0,detail:t}))};onRotateEnd=()=>{this.isRotating=!1,document.body.style.cursor="",document.removeEventListener("mousemove",this.onRotateMove),document.removeEventListener("mouseup",this.onRotateEnd),this.dispatchEvent(new CustomEvent("rotate-end",{bubbles:!0,composed:!0}))};onContentMouseEnter=e=>{this.previousMouseX=e.clientX,this.previousMouseY=e.clientY,this.dispatchEvent(new CustomEvent("content-mouse-enter",{bubbles:!0,composed:!0}))};onContentMouseLeave=()=>{this.dispatchEvent(new CustomEvent("content-mouse-leave",{bubbles:!0,composed:!0}))};onContentMouseMove=e=>{const t={x:e.clientX,y:e.clientY,deltaX:e.clientX-this.previousMouseX,deltaY:e.clientY-this.previousMouseY};this.previousMouseX=e.clientX,this.previousMouseY=e.clientY,this.dispatchEvent(new CustomEvent("content-mouse-move",{bubbles:!0,composed:!0,detail:t}))};onLockClick=()=>{this.dispatchEvent(new CustomEvent("lock-click",{bubbles:!0,composed:!0}))};onFollowClick=()=>{this.dispatchEvent(new CustomEvent("follow-click",{bubbles:!0,composed:!0}))};onFocusClick=()=>{this.dispatchEvent(new CustomEvent("focus-click",{bubbles:!0,composed:!0}))};setPosition(e,t){this.style.left=`${e}px`,this.style.top=`${t}px`}setSize(e,t){this.style.width=`${e}px`,this.style.height=`${t}px`}getSize(){return{width:this.offsetWidth,height:this.offsetHeight}}setTitle(e){this.titleEl&&(this.titleEl.textContent=e)}static HEADER_HEIGHT=24;static register(){customElements.get(Le.tagName)||customElements.define(Le.tagName,Le)}}Le.register();const ur=280,pr=200,pn=160,gn=120;class gr{constructor(e,t,n,s,i={}){this.cameraControls=t,this.cameraHelper=n,this.log=s,this.callbacks=i,this.getSceneCamera=e}pipEnabled=!0;followSceneCamera=!1;lockRotation=!0;isFocused=!1;component=null;pipX=0;pipY=0;pipWidth=ur;pipHeight=pr;dragStartPipX=0;dragStartPipY=0;rotateStartSpherical=new _t;cameraController=null;keysPressed=new Set;lastUpdateTime=0;focusAnimationId=null;isMouseInContent=!1;focusMoveDebounceTimer=null;hasMoved=!1;widthInput=null;heightInput=null;callbacks;log;getSceneCamera;create(){if(this.component)return;const e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--debug-panel-width")||"280");this.pipX=window.innerWidth-this.pipWidth-20-e,this.pipY=(window.innerHeight-this.pipHeight)/2,this.component=document.createElement(Le.tagName),this.component.setPosition(this.pipX,this.pipY),this.component.setSize(this.pipWidth,this.pipHeight),this.component.setAttribute("locked",""),this.setupEventListeners(),document.body.appendChild(this.component),this.log.info("PiP viewport created")}setupEventListeners(){this.component&&(this.component.addEventListener("drag-start",this.onDragStart),this.component.addEventListener("drag-move",this.onDragMove),this.component.addEventListener("drag-end",this.onDragEnd),this.component.addEventListener("resize-move",this.onResizeMove),this.component.addEventListener("resize-end",this.onResizeEnd),this.component.addEventListener("rotate-start",this.onRotateStart),this.component.addEventListener("rotate-move",this.onRotateMove),this.component.addEventListener("rotate-end",this.onRotateEnd),this.component.addEventListener("lock-click",this.onLockClick),this.component.addEventListener("follow-click",this.onFollowClick),this.component.addEventListener("focus-click",this.onFocusClick),this.component.addEventListener("content-mouse-enter",this.onContentMouseEnter),this.component.addEventListener("content-mouse-leave",this.onContentMouseLeave),this.component.addEventListener("content-mouse-move",this.onContentMouseMove))}cleanupEventListeners(){this.component&&(this.component.removeEventListener("drag-start",this.onDragStart),this.component.removeEventListener("drag-move",this.onDragMove),this.component.removeEventListener("drag-end",this.onDragEnd),this.component.removeEventListener("resize-move",this.onResizeMove),this.component.removeEventListener("resize-end",this.onResizeEnd),this.component.removeEventListener("rotate-start",this.onRotateStart),this.component.removeEventListener("rotate-move",this.onRotateMove),this.component.removeEventListener("rotate-end",this.onRotateEnd),this.component.removeEventListener("lock-click",this.onLockClick),this.component.removeEventListener("follow-click",this.onFollowClick),this.component.removeEventListener("focus-click",this.onFocusClick),this.component.removeEventListener("content-mouse-enter",this.onContentMouseEnter),this.component.removeEventListener("content-mouse-leave",this.onContentMouseLeave),this.component.removeEventListener("content-mouse-move",this.onContentMouseMove))}destroy(){this.setFocused(!1),this.cleanupEventListeners(),this.component&&(this.component.remove(),this.component=null),this.widthInput=null,this.heightInput=null,this.cameraController=null}render(e,t,n){if(!this.pipEnabled||!this.component)return;const s=e.domElement,i=this.component.getBoundingClientRect(),o=s.getBoundingClientRect(),a=Le.HEADER_HEIGHT,r=i.height-a,l=e.getSize(new Y),d=l.x,h=l.y,u=d/o.width,p=h/o.height,x=(i.left-o.left)*u,f=(o.bottom-i.bottom)*p,C=i.width*u,m=r*p,w=new Ne,E=new Ne;e.getViewport(w),e.getScissor(E);const P=e.getScissorTest(),b=new N;e.getClearColor(b);const k=e.getClearAlpha(),L=this.getSceneCamera(),I=L.aspect||1,M=i.width/r;L.aspect=M,L.updateProjectionMatrix(),L.updateMatrixWorld(!0),L.matrixWorldInverse.copy(L.matrixWorld).invert(),e.setViewport(x,f,C,m),e.setScissor(x,f,C,m),e.setScissorTest(!0),e.setClearColor(1710618,1),e.clear(!0,!0,!0),n&&(n.visible=!1);const A=[],g=[t];for(;g.length>0;){const y=g.pop();for(const z of y.children)g.push(z);!y.visible&&y.userData._chunkedParent&&(A.push({obj:y,visible:!1}),y.visible=!0)}e.render(t,L);for(const{obj:y,visible:z}of A)y.visible=z;n&&(n.visible=!0),L.aspect=I,L.updateProjectionMatrix(),e.setViewport(w),e.setScissor(E),e.setScissorTest(P),e.setClearColor(b,k)}onDragStart=()=>{this.dragStartPipX=this.pipX,this.dragStartPipY=this.pipY};onDragMove=e=>{const{deltaX:t,deltaY:n}=e.detail;this.pipX=Math.max(0,Math.min(window.innerWidth-this.pipWidth,this.dragStartPipX+t)),this.pipY=Math.max(0,Math.min(window.innerHeight-this.pipHeight,this.dragStartPipY+n)),this.component?.setPosition(this.pipX,this.pipY)};onDragEnd=()=>{this.callbacks.onDragEnd?.()};onResizeMove=e=>{const{deltaX:t,deltaY:n,startWidth:s,startHeight:i,shiftKey:o}=e.detail,a=window.innerWidth-this.pipX-20,r=window.innerHeight-this.pipY-20;if(o){const l=Le.HEADER_HEIGHT,d=i-l,h=d>0?s/d:1,u=Math.max(pn,Math.min(a,s+t)),p=Math.round(u/h),x=Math.max(gn,Math.min(r,p+l));this.pipWidth=u,this.pipHeight=x}else this.pipWidth=Math.max(pn,Math.min(a,s+t)),this.pipHeight=Math.max(gn,Math.min(r,i+n));this.component?.setSize(this.pipWidth,this.pipHeight),this.widthInput&&(this.widthInput.value=String(Math.round(this.pipWidth))),this.heightInput&&(this.heightInput.value=String(Math.round(this.pipHeight)))};onResizeEnd=()=>{this.callbacks.onResizeEnd?.()};onRotateStart=()=>{const e=this.cameraControls.controls;if(e){const t=this.getSceneCamera(),n=new v().subVectors(e.target,t.position);this.rotateStartSpherical.setFromVector3(n)}};onRotateMove=e=>{const{deltaX:t,deltaY:n}=e.detail,s=this.cameraControls.controls;if(s){const o=this.rotateStartSpherical.theta+t*.005,a=Math.max(.1,Math.min(Math.PI-.1,this.rotateStartSpherical.phi+n*.005)),r=new _t(this.rotateStartSpherical.radius,a,o),l=new v().setFromSpherical(r),d=this.getSceneCamera();s.target.copy(d.position).add(l),s.update()}};onRotateEnd=()=>{this.callbacks.onRotateEnd?.()};onLockClick=()=>{this.setLockRotation(!this.lockRotation)};onFollowClick=()=>{this.setFollowSceneCamera(!this.followSceneCamera)};onFocusClick=()=>{this.setFocused(!this.isFocused)};onContentMouseEnter=()=>{this.isMouseInContent=!0};onContentMouseLeave=()=>{this.isMouseInContent=!1};onContentMouseMove=e=>{if(!this.isFocused||!this.isMouseInContent||!this.cameraController)return;const{deltaX:t,deltaY:n}=e.detail,s=.003;this.cameraController.rotate(t*s,-n*s)};onFocusKeyDown=e=>{if(!this.isFocused||!this.cameraController||e.ctrlKey||e.altKey||e.metaKey)return;["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight"].includes(e.code)&&(e.preventDefault(),e.stopPropagation(),this.keysPressed.add(e.code),this.hasMoved=!0,this.focusMoveDebounceTimer&&(clearTimeout(this.focusMoveDebounceTimer),this.focusMoveDebounceTimer=null)),e.code==="Escape"&&this.setFocused(!1)};onFocusKeyUp=e=>{this.keysPressed.delete(e.code),this.keysPressed.size===0&&this.hasMoved&&(this.focusMoveDebounceTimer&&clearTimeout(this.focusMoveDebounceTimer),this.focusMoveDebounceTimer=setTimeout(()=>{this.focusMoveDebounceTimer=null,this.hasMoved&&(this.hasMoved=!1,this.callbacks.onFocusMoveEnd?.())},300))};focusUpdateLoop=()=>{if(!this.isFocused||!this.cameraController)return;const e=performance.now(),t=(e-this.lastUpdateTime)/1e3;this.lastUpdateTime=e;const n=new v(0,0,0),s=this.keysPressed.has("ArrowUp")||this.keysPressed.has("KeyW"),i=this.keysPressed.has("ArrowDown")||this.keysPressed.has("KeyS"),o=this.keysPressed.has("ArrowLeft")||this.keysPressed.has("KeyA"),a=this.keysPressed.has("ArrowRight")||this.keysPressed.has("KeyD"),r=this.keysPressed.has("Space"),l=this.keysPressed.has("ShiftLeft")||this.keysPressed.has("ShiftRight");s&&(n.z-=1),i&&(n.z+=1),o&&(n.x-=1),a&&(n.x+=1),r&&(n.y+=1),l&&(n.y-=1),n.lengthSq()>0&&this.cameraController.move(n,t),this.focusAnimationId=requestAnimationFrame(this.focusUpdateLoop)};setEnabled(e){this.pipEnabled=e,this.component&&(this.component.style.display=e?"block":"none")}isEnabled(){return this.pipEnabled}setLockRotation(e){this.lockRotation=e,this.component&&(e?this.component.setAttribute("locked",""):this.component.removeAttribute("locked")),this.callbacks.onLockChange?.(e),this.log.info(e?"Scene camera locked":"Scene camera unlocked")}isLocked(){return this.lockRotation}setFollowSceneCamera(e){this.followSceneCamera=e,this.component&&(e?this.component.setAttribute("following",""):this.component.removeAttribute("following")),this.callbacks.onFollowChange?.(e),e&&this.log.info("Follow mode enabled")}isFollowing(){return this.followSceneCamera}setSize(e,t){this.pipWidth=Math.max(pn,e),this.pipHeight=Math.max(gn,t),this.component?.setSize(this.pipWidth,this.pipHeight),this.widthInput&&(this.widthInput.value=String(Math.round(this.pipWidth))),this.heightInput&&(this.heightInput.value=String(Math.round(this.pipHeight)))}getSize(){return{width:this.pipWidth,height:this.pipHeight}}getPosition(){return{x:this.pipX,y:this.pipY}}setPosition(e,t){this.pipX=e,this.pipY=t,this.component?.setPosition(e,t)}bindSizeInputs(e,t){this.widthInput=e,this.heightInput=t}setCameraController(e){this.cameraController=e}setTitle(e){this.component?.setTitle(e)}setFocused(e){this.isFocused!==e&&(this.isFocused=e,e?(this.lockRotation&&this.setLockRotation(!1),document.addEventListener("keydown",this.onFocusKeyDown),document.addEventListener("keyup",this.onFocusKeyUp),this.lastUpdateTime=performance.now(),this.keysPressed.clear(),this.focusAnimationId=requestAnimationFrame(this.focusUpdateLoop),this.component?.setAttribute("focused",""),this.log.info("Focus mode enabled - use WASD/arrows to move, mouse to look")):(document.removeEventListener("keydown",this.onFocusKeyDown),document.removeEventListener("keyup",this.onFocusKeyUp),this.keysPressed.clear(),this.focusMoveDebounceTimer&&(clearTimeout(this.focusMoveDebounceTimer),this.focusMoveDebounceTimer=null),this.hasMoved&&(this.hasMoved=!1,this.callbacks.onFocusMoveEnd?.()),this.focusAnimationId!==null&&(cancelAnimationFrame(this.focusAnimationId),this.focusAnimationId=null),this.component?.removeAttribute("focused"),this.log.info("Focus mode disabled")),this.callbacks.onFocusChange?.(e))}isFocusedMode(){return this.isFocused}}class Ve{constructor(e,t){this.scene=e,this.log=t}isRecording=!1;recordedFrames=0;analyticsStats=new Map;triangleCountCache=new Map;log;getTriangleCount(e){if(this.triangleCountCache.has(e.id))return this.triangleCountCache.get(e.id);const t=e.geometry;if(!t)return this.triangleCountCache.set(e.id,0),0;let n;if(t.index)n=t.index.count/3;else{const s=t.getAttribute("position");n=s?s.count/3:0}return this.triangleCountCache.set(e.id,n),n}getObjectPath(e){const t=[];let n=e;for(;n;)t.unshift(n.name||`[${n.type}]`),n=n.parent;return t.join("/")}startRecording(){this.isRecording||(this.isRecording=!0,this.recordedFrames=0,this.analyticsStats.clear(),this.triangleCountCache.clear(),this.log.info("Recording started"))}stopRecording(){this.isRecording&&(this.isRecording=!1,this.log.info("Recording stopped after %d frames",this.recordedFrames))}resetRecording(){this.isRecording=!1,this.recordedFrames=0,this.analyticsStats.clear(),this.triangleCountCache.clear(),this.log.info("Recording reset")}isRecordingActive(){return this.isRecording}getRecordedFrames(){return this.recordedFrames}accumulateStats(e,t){if(!this.isRecording)return;let n=this.analyticsStats.get(e.id);n||(n={name:e.name||`[${e.type}:${e.id}]`,path:this.getObjectPath(e),triangleCount:this.getTriangleCount(e),framesVisible:0,framesTotal:0,cullReasons:{}},this.analyticsStats.set(e.id,n)),n.framesTotal++,n.cullReasons[t]=(n.cullReasons[t]??0)+1,t==="VISIBLE"&&n.framesVisible++}endFrame(){this.isRecording&&this.recordedFrames++}getSummary(){let e=0,t=0,n=0,s=0;for(const i of this.analyticsStats.values())if(e++,t+=i.triangleCount,i.framesTotal>0){const o=i.framesVisible/i.framesTotal;n+=i.triangleCount*o,s+=i.triangleCount*(1-o)}return{totalMeshes:e,totalTriangles:Math.round(t),visibleTriangles:Math.round(n),wastedTriangles:Math.round(s)}}getWorstOffenders(e=10){const t=[];for(const[n,s]of this.analyticsStats.entries()){if(s.framesTotal===0)continue;const i=s.framesVisible/s.framesTotal*100,o=s.triangleCount*(1-s.framesVisible/s.framesTotal);t.push({id:n,name:s.name,path:s.path,triangles:s.triangleCount,visibilityPercent:i,wastedTriangles:o,cullReasons:{...s.cullReasons}})}return t.sort((n,s)=>s.wastedTriangles-n.wastedTriangles),t.slice(0,e)}findMeshById(e){let t=null;return this.scene.traverse(n=>{n.id===e&&n instanceof S&&(t=n)}),t}getTrackedMeshesWithWaste(){const e=new Map;for(const[t,n]of this.analyticsStats.entries()){const s=this.findMeshById(t);if(!s)continue;const i=n.framesTotal>0?n.framesVisible/n.framesTotal*100:0,o=n.framesTotal>0?n.triangleCount*(1-n.framesVisible/n.framesTotal):0;e.set(t,{mesh:s,visibilityPercent:i,wastedTriangles:o})}return e}getStatsForMesh(e){const t=this.analyticsStats.get(e);if(!t||t.framesTotal===0)return null;const n=t.framesVisible/t.framesTotal*100,s=t.triangleCount*(1-t.framesVisible/t.framesTotal);let i="";return n<30&&t.triangleCount>1e4?i="Consider splitting - low visibility, high triangle count":n<30?i="Low visibility - potential split candidate":n>90?i="Well optimized or always in view":(t.cullReasons.FRUSTUM_GRID_CULLED??0)>t.framesTotal*.5?i="Grid pre-filter working well":i="Normal visibility range",{name:t.name,path:t.path,triangles:t.triangleCount,visibilityPercent:n,wastedTriangles:s,cullReasons:{...t.cullReasons},suggestion:i}}static formatNumber(e){return e>=1e6?(e/1e6).toFixed(1)+"M":e>=1e3?(e/1e3).toFixed(1)+"K":String(Math.round(e))}exportReport(){const e=this.getSummary(),t=this.getWorstOffenders(100),n={recordedFrames:this.recordedFrames,timestamp:new Date().toISOString(),summary:{totalMeshes:e.totalMeshes,totalTriangles:e.totalTriangles,visibleTriangles:e.visibleTriangles,wastedTriangles:e.wastedTriangles,wastedPercent:e.totalTriangles>0?Math.round(e.wastedTriangles/e.totalTriangles*1e3)/10:0},objects:t.map(s=>{const i=this.analyticsStats.get(s.id),o=this.generateSuggestion(s.visibilityPercent,s.triangles,i);return{name:s.name,path:s.path,triangles:s.triangles,visibilityPercent:Math.round(s.visibilityPercent*10)/10,wastedTriangles:Math.round(s.wastedTriangles),cullReasons:s.cullReasons,suggestion:o}})};return JSON.stringify(n,null,2)}generateSuggestion(e,t,n){return e<30&&t>1e4?"Consider splitting - low visibility, high triangle count":e<30?"Low visibility - potential split candidate":e>90?"Well optimized or always in view":n&&(n.cullReasons.FRUSTUM_GRID_CULLED??0)>n.framesTotal*.5?"Grid pre-filter working well":"Normal visibility range"}}class mr{constructor(e){this.cameraControls=e,this.initFromCamera()}speed=5;euler=new kn(0,0,0,"YXZ");quaternion=new Z;yaw=0;pitch=0;initFromCamera(){const t=this.cameraControls.instance.getWorldDirection(new v);this.yaw=Math.atan2(-t.x,-t.z),this.pitch=Math.asin(H.clamp(t.y,-1,1))}sync(){this.initFromCamera()}move(e,t){const n=this.cameraControls.instance,s=this.cameraControls.controls,i=e.clone().normalize().multiplyScalar(this.speed*t);i.applyQuaternion(n.quaternion),n.position.add(i),s&&(s.target.add(i),s.update()),n.updateMatrixWorld()}rotate(e,t){const n=this.cameraControls.instance,s=this.cameraControls.controls;this.yaw-=e,this.pitch+=t;const i=Math.PI/2-.1;if(this.pitch=H.clamp(this.pitch,-i,i),this.euler.set(this.pitch,this.yaw,0,"YXZ"),this.quaternion.setFromEuler(this.euler),n.quaternion.copy(this.quaternion),s){const o=new v(0,0,-1).applyQuaternion(this.quaternion),a=n.position.distanceTo(s.target);s.target.copy(n.position).add(o.multiplyScalar(a)),s.update()}n.updateMatrixWorld()}getPosition(){return this.cameraControls.instance.position.clone()}getDirection(){return this.cameraControls.instance.getWorldDirection(new v)}getSpeed(){return this.speed}setSpeed(e){this.speed=e}}const br=`<div class="visualizer-tool-panel">
    <!-- PiP Controls (static, always present) -->
    <div class="pip-section">
        <div class="debug-checkbox-row">
            <input type="checkbox" id="pip-checkbox" checked>
            <label for="pip-checkbox">Show Scene Camera View</label>
        </div>
        <div class="debug-separator"></div>
        <div class="debug-tool-hint">Shows what the scene camera sees.</div>
        <button class="debug-button sync-btn">Sync Debug Camera to Scene</button>
        <div class="size-row">
            <label>W</label>
            <input type="number" class="debug-input width-input" value="280" min="160">
            <label>H</label>
            <input type="number" class="debug-input height-input" value="200" min="120">
            <span class="suffix">px</span>
        </div>
    </div>

    <!-- Camera Info -->
    <div class="debug-separator"></div>
    <div class="debug-info-row">
        <span class="debug-info-label">Scene Cam Pos</span>
        <span class="debug-info-value camera-pos">-</span>
    </div>

    <!-- Dynamic Plugin Area (populated programmatically) -->
    <div class="debug-separator"></div>
    <div class="plugin-area"></div>
</div>
`,fr=`:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

/* ─────────────────────────────────────────────────────────────────────────
   PiP Section
   ───────────────────────────────────────────────────────────────────────── */

.pip-section .sync-btn {
    width: 100%;
    margin-bottom: 8px;
}

.size-row {
    display: flex;
    align-items: center;
    gap: 6px;
}

.size-row label {
    font-size: 11px;
    color: var(--debug-text-muted, #888);
}

.size-row .suffix {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
}

/* ─────────────────────────────────────────────────────────────────────────
   Category Headers
   ───────────────────────────────────────────────────────────────────────── */

.category-header {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    padding: 6px 0 2px 0;
}

/* ─────────────────────────────────────────────────────────────────────────
   Scrollbar
   ───────────────────────────────────────────────────────────────────────── */

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
}

::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, #888);
}
`;O.register();class rt extends HTMLElement{static tagName="debug-visualizer-tool-panel";shadow;initialized=!1;pipCheckbox;syncBtn;widthInput;heightInput;cameraPosEl;pluginAreaEl;pluginSections=new Map;tool=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${K}${fr}</style>${br}`,this.cacheElements()}cacheElements(){this.pipCheckbox=this.shadow.querySelector("#pip-checkbox"),this.syncBtn=this.shadow.querySelector(".sync-btn"),this.widthInput=this.shadow.querySelector(".width-input"),this.heightInput=this.shadow.querySelector(".height-input"),this.cameraPosEl=this.shadow.querySelector(".camera-pos"),this.pluginAreaEl=this.shadow.querySelector(".plugin-area")}setupEventListeners(){this.pipCheckbox.addEventListener("change",this.onPipToggle),this.syncBtn.addEventListener("click",this.onSyncCamera),this.widthInput.addEventListener("change",this.onSizeChange),this.heightInput.addEventListener("change",this.onSizeChange)}cleanupEventListeners(){this.pipCheckbox.removeEventListener("change",this.onPipToggle),this.syncBtn.removeEventListener("click",this.onSyncCamera),this.widthInput.removeEventListener("change",this.onSizeChange),this.heightInput.removeEventListener("change",this.onSizeChange)}onPipToggle=()=>{this.emit("pip-toggle",{enabled:this.pipCheckbox.checked})};onSyncCamera=()=>{this.emit("sync-camera")};onSizeChange=()=>{const e=parseInt(this.widthInput.value,10)||280,t=parseInt(this.heightInput.value,10)||200;this.emit("pip-size-change",{width:e,height:t})};bindTool(e){this.tool=e;const t={onPluginRegistered:n=>this.addPluginSection(n),onPluginUnregistered:n=>this.removePluginSection(n),onPluginActivated:n=>this.setPluginChecked(n,!0),onPluginDeactivated:n=>this.setPluginChecked(n,!1)};e.setPanelCallbacks(t);for(const n of e.getPlugins())this.addPluginSection(n),e.isPluginActive(n.id)&&this.setPluginChecked(n.id,!0)}addPluginSection(e){if(this.pluginSections.has(e.id))return;this.ensureCategoryHeader(e.category);const t=document.createElement(O.tagName);t.setAttribute("title",e.name),t.setAttribute("with-checkbox",""),t.setAttribute("collapsed",""),t.setAttribute("persist-id",`visualizer.${e.id}`),t.addEventListener("checkbox-change",i=>{const o=i.detail;this.emit("plugin-toggle",{id:e.id,enabled:o.checked}),this.tool&&(o.checked?(this.tool.activatePlugin(e.id),t.expand()):(this.tool.deactivatePlugin(e.id),t.collapse()))});const n=t.getContent();e.createUI?.(n),this.getCategoryGroup(e.category).appendChild(t),this.pluginSections.set(e.id,{subsection:t,contentContainer:n,plugin:e})}removePluginSection(e){const t=this.pluginSections.get(e);t&&(t.subsection.remove(),this.pluginSections.delete(e),this.cleanupEmptyCategoryGroups())}setPluginChecked(e,t){const n=this.pluginSections.get(e);n&&(n.subsection.setChecked(t),t?n.subsection.expand():n.subsection.collapse())}ensureCategoryHeader(e){const t=this.categoryGroupId(e);if(this.shadow.querySelector(`[data-category-group="${t}"]`))return;const n=document.createElement("div");n.className="category-header",n.textContent=e,n.dataset.categoryHeader=t;const s=document.createElement("div");s.dataset.categoryGroup=t,this.pluginAreaEl.appendChild(n),this.pluginAreaEl.appendChild(s)}getCategoryGroup(e){const t=this.categoryGroupId(e);return this.shadow.querySelector(`[data-category-group="${t}"]`)??this.pluginAreaEl}cleanupEmptyCategoryGroups(){const e=this.shadow.querySelectorAll("[data-category-group]");for(const t of e)if(t.children.length===0){const n=t.dataset.categoryGroup;this.shadow.querySelector(`[data-category-header="${n}"]`)?.remove(),t.remove()}}categoryGroupId(e){return e.toLowerCase().replace(/\s+/g,"-")}setCameraPosition(e,t,n){this.cameraPosEl.textContent=`(${e.toFixed(2)}, ${t.toFixed(2)}, ${n.toFixed(2)})`}setPipSize(e,t){this.widthInput.value=String(Math.round(e)),this.heightInput.value=String(Math.round(t))}getWidthInput(){return this.widthInput}getHeightInput(){return this.heightInput}resetAllPlugins(){for(const e of this.pluginSections.values())e.subsection.setChecked(!1),e.subsection.collapse()}emit(e,t){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0,detail:t}))}static register(){customElements.get(rt.tagName)||customElements.define(rt.tagName,rt)}}rt.register();class vr extends _{id="visualizer";name="Visualizers";icon="eye";cameraHelper=null;pipViewport=null;analytics=null;pipCameraController=null;sceneCameraController=null;usingExternalCameraHelper=!1;lockRotation=!0;lockedPosition=new v;lockedQuaternion=new Z;lockedDirection=new v;lockedFov=50;lockedFrustum=new xn;projScreenMatrix=new Pt;cullingCamera=new zt;dynamicFrustum=new xn;dynamicPosition=new v;dynamicDirection=new v;uiUpdateInterval=null;plugins=new Map;activePlugins=new Set;pendingBuffers=[];panelElement=null;panelCallbacks=null;modeChangeUnsubscribe=null;log;get visualizerCamera(){return this.manager.getVisualizerCamera()}init(e){super.init(e),this.log=this.engine.getLogger("Debug.VisualizerTool"),this.modeChangeUnsubscribe=e.onModeChange(()=>{this.enabled&&this.onModeChanged()})}onModeChanged(){this.destroyCameraHelper(),this.createCameraHelper(),this.destroyCameraController(),this.createCameraController(),this.captureSceneCameraState(),this.updateCullingOverride();const e=this.manager.mode==="lab";this.pipViewport?.setTitle(e?"Lab Camera View":"Scene Camera View"),this.log.info("Mode changed, recreated camera helper for %s mode",this.manager.mode)}destroyCameraController(){this.sceneCameraController=null,this.pipCameraController=null}registerPlugin(e){if(this.plugins.has(e.id)){this.log.warn('Plugin "%s" already registered, skipping',e.id);return}if(this.plugins.set(e.id,e),e.init(this.createPluginContext()),this.panelCallbacks?.onPluginRegistered(e),e.id==="buffer-viewer"&&this.pendingBuffers.length>0){const t=e;for(const n of this.pendingBuffers)t.registerBuffer(n);this.pendingBuffers.length=0}this.log.info("Plugin registered: %s (%s)",e.name,e.id)}unregisterPlugin(e){const t=this.plugins.get(e);t&&(this.activePlugins.has(e)&&this.deactivatePlugin(e),t.dispose(),this.plugins.delete(e),this.panelCallbacks?.onPluginUnregistered(e),this.log.info("Plugin unregistered: %s",e))}activatePlugin(e){const t=this.plugins.get(e);if(!(!t||this.activePlugins.has(e))){if(this.enabled||this.manager.enableTool(this.id),t.group)for(const[n,s]of this.plugins)n!==e&&s.group===t.group&&this.activePlugins.has(n)&&this.deactivatePlugin(n);t.enable(),this.activePlugins.add(e),this.panelCallbacks?.onPluginActivated(e),this.manager.history.recordAction(`Enable ${t.name}`),this.log.info("Plugin activated: %s",t.name)}}deactivatePlugin(e){const t=this.plugins.get(e);!t||!this.activePlugins.has(e)||(t.disable(),this.activePlugins.delete(e),this.panelCallbacks?.onPluginDeactivated(e),this.manager.history.recordAction(`Disable ${t.name}`),this.log.info("Plugin deactivated: %s",t.name))}togglePlugin(e){this.activePlugins.has(e)?this.deactivatePlugin(e):this.activatePlugin(e)}getPlugin(e){return this.plugins.get(e)}getPlugins(){return Array.from(this.plugins.values())}isPluginActive(e){return this.activePlugins.has(e)}enable(){this.captureSceneCameraState(),this.updateCullingOverride(),this.createCameraHelper(),this.createCoreComponents(),this.manager.camera.setOnInteractionEnd(()=>{this.manager.history.recordAction("Debug camera move")}),this.log.info("Enabled - showing scene camera frustum")}disable(){this.engine.camera.setCullingOverride(null),this.manager.camera.setOnInteractionEnd(null),this.uiUpdateInterval&&(clearInterval(this.uiUpdateInterval),this.uiUpdateInterval=null);for(const e of[...this.activePlugins]){const t=this.plugins.get(e);t&&(t.disable(),this.activePlugins.delete(e),this.panelCallbacks?.onPluginDeactivated(e))}this.destroyCoreComponents(),this.destroyCameraHelper(),this.log.info("Disabled")}update(e){this.lockRotation&&(this.visualizerCamera.position.copy(this.lockedPosition),this.visualizerCamera.quaternion.copy(this.lockedQuaternion),this.visualizerCamera.fov=this.lockedFov,this.visualizerCamera.updateProjectionMatrix(),this.visualizerCamera.updateMatrixWorld(!0)),this.cameraHelper&&this.cameraHelper.update(),this.pipViewport?.isFollowing()&&this.manager.camera.isEnabled()&&this.manager.camera.reset(),this.lockRotation||this.updateDynamicCullingOverride();for(const t of this.activePlugins)this.plugins.get(t)?.update?.(e);this.analytics?.isRecordingActive()&&!this.activePlugins.has("culling")&&this.plugins.get("culling")?.computeForAnalytics()}render(e){this.pipViewport?.render(e,this.scene,this.cameraHelper);for(const t of this.activePlugins)this.plugins.get(t)?.render?.(e)}createCoreComponents(){this.log.info('Creating components - scene: "%s", mode: %s',this.scene.name||"unnamed",this.manager.mode),this.analytics=new Ve(this.scene,this.engine.getLogger("Debug.CullingAnalytics")),this.pipViewport=new gr(()=>this.visualizerCamera,this.engine.camera,this.cameraHelper,this.engine.getLogger("Debug.PipViewport"),{onLockChange:t=>{t&&!this.lockRotation&&this.captureSceneCameraState(),!t&&this.lockRotation&&this.syncControlsToLockedState(),this.lockRotation=t,this.updateCullingOverride(),this.manager.history.recordAction(t?"Lock scene camera":"Unlock scene camera")},onFollowChange:t=>{this.manager.history.recordAction(t?"Enable follow mode":"Disable follow mode")},onFocusChange:t=>{if(this.manager.mode==="lab"){const s=this.manager.getTool("lab")?.getLabCameraController();s?.setKeyboardEnabled&&s.setKeyboardEnabled(!t)}this.manager.history.recordAction(t?"Enable focus mode":"Disable focus mode")},onFocusMoveEnd:()=>{this.manager.history.recordAction("Scene camera move")},onRotateEnd:()=>{this.manager.history.recordAction("Scene camera rotate")},onDragEnd:()=>{this.manager.history.recordAction("PiP viewport move")},onResizeEnd:()=>{this.manager.history.recordAction("PiP viewport resize")}}),this.pipViewport.create();const e=this.manager.mode==="lab";this.pipViewport.setTitle(e?"Lab Camera View":"Scene Camera View"),this.createCameraController()}createCameraController(){if(this.manager.mode==="lab"){const e=this.manager.getTool("lab");this.pipCameraController=e?.getLabCameraController()??null}else this.sceneCameraController=new mr(this.engine.camera),this.pipCameraController=this.sceneCameraController;this.pipViewport&&this.pipCameraController&&this.pipViewport.setCameraController(this.pipCameraController)}destroyCoreComponents(){this.pipViewport?.destroy(),this.pipViewport=null,this.pipCameraController=null,this.sceneCameraController=null,this.analytics=null}createCameraHelper(){if(!this.cameraHelper){if(this.manager.mode==="lab"){const t=this.manager.getTool("lab")?.getLabCameraHelper();if(t){this.cameraHelper=t,this.cameraHelper.visible=!0,this.usingExternalCameraHelper=!0,this.log.info("Using lab camera helper");return}}this.cameraHelper=new wn(this.visualizerCamera),this.cameraHelper.name="__debug_camera_helper__",this.scene.add(this.cameraHelper),this.usingExternalCameraHelper=!1,this.log.info("Camera helper created for %s mode",this.manager.mode)}}destroyCameraHelper(){this.cameraHelper&&(this.usingExternalCameraHelper?this.cameraHelper.visible=!1:(this.scene.remove(this.cameraHelper),this.cameraHelper.dispose()),this.cameraHelper=null,this.usingExternalCameraHelper=!1)}captureSceneCameraState(){const e=this.visualizerCamera;this.lockedPosition.copy(e.position),this.lockedQuaternion.copy(e.quaternion),this.lockedFov=e.fov||60,e.getWorldDirection(this.lockedDirection),e.updateProjectionMatrix(),e.updateMatrixWorld(!0),this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.lockedFrustum.setFromProjectionMatrix(this.projScreenMatrix),this.syncCullingCamera(e)}syncControlsToLockedState(){const e=this.visualizerCamera,t=this.engine.camera.controls;if(!t)return;e.position.copy(this.lockedPosition),e.quaternion.copy(this.lockedQuaternion),e.updateMatrixWorld(!0);const n=new v(0,0,-1).applyQuaternion(this.lockedQuaternion);t.target.copy(this.lockedPosition).addScaledVector(n,5);const s=t.enableDamping;t.enableDamping=!1,t.saveState(),t.reset(),t.enableDamping=s,e.quaternion.copy(this.lockedQuaternion),e.updateMatrixWorld(!0),this.sceneCameraController?.sync()}setLockRotation(e){e&&!this.lockRotation&&this.captureSceneCameraState(),!e&&this.lockRotation&&this.syncControlsToLockedState(),this.lockRotation=e,this.pipViewport?.setLockRotation(e),this.updateCullingOverride()}syncCullingCamera(e){this.cullingCamera.fov=e.fov,this.cullingCamera.aspect=e.aspect,this.cullingCamera.near=e.near,this.cullingCamera.far=e.far,this.cullingCamera.position.copy(e.position),this.cullingCamera.quaternion.copy(e.quaternion),this.cullingCamera.updateProjectionMatrix(),this.cullingCamera.updateMatrixWorld(!0)}updateCullingOverride(){this.lockRotation?this.engine.camera.setCullingOverride({frustum:this.lockedFrustum,position:this.lockedPosition,direction:this.lockedDirection,camera:this.cullingCamera}):this.updateDynamicCullingOverride()}updateDynamicCullingOverride(){const e=this.visualizerCamera;this.syncCullingCamera(e),this.projScreenMatrix.multiplyMatrices(this.cullingCamera.projectionMatrix,this.cullingCamera.matrixWorldInverse),this.dynamicFrustum.setFromProjectionMatrix(this.projScreenMatrix),this.dynamicPosition.copy(this.cullingCamera.position),this.cullingCamera.getWorldDirection(this.dynamicDirection),this.engine.camera.setCullingOverride({frustum:this.dynamicFrustum,position:this.dynamicPosition,direction:this.dynamicDirection,camera:this.cullingCamera})}syncDebugToSceneCamera(){this.manager.camera.reset(),this.log.info("Debug camera synced to scene camera")}setPipEnabled(e){this.pipViewport?.setEnabled(e)}setPipSize(e,t){this.pipViewport?.setSize(e,t)}getPipViewport(){return this.pipViewport}getAnalytics(){return this.analytics}startRecording(){this.analytics?.startRecording()}stopRecording(){this.analytics?.stopRecording()}resetRecording(){this.analytics?.resetRecording()}isRecordingActive(){return this.analytics?.isRecordingActive()??!1}getRecordedFrames(){return this.analytics?.getRecordedFrames()??0}exportReport(){if(!this.analytics)return;const e=this.analytics.exportReport(),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),s=document.createElement("a");s.href=n,s.download=`culling-report-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(n),this.log.info("Report exported")}selectObjectById(e){const t=this.analytics?.findMeshById(e);t&&this.manager.selection.onSelect(t)}registerBuffer(e){const t=this.plugins.get("buffer-viewer");t?t.registerBuffer(e):this.pendingBuffers.push(e)}unregisterBuffer(e){this.plugins.get("buffer-viewer")?.unregisterBuffer(e)}createUI(e){this.panelElement=document.createElement(rt.tagName);const t=this.pipViewport?.getSize()??{width:280,height:200};this.panelElement.setPipSize(t.width,t.height),this.pipViewport?.bindSizeInputs(this.panelElement.getWidthInput(),this.panelElement.getHeightInput()),this.panelElement.bindTool(this),this.panelElement.addEventListener("pip-toggle",n=>{const s=n.detail;this.setPipEnabled(s.enabled)}),this.panelElement.addEventListener("pip-size-change",n=>{const s=n.detail;this.setPipSize(s.width,s.height)}),this.panelElement.addEventListener("sync-camera",()=>{this.syncDebugToSceneCamera()}),e.appendChild(this.panelElement),this.startUIUpdates()}setPanelCallbacks(e){this.panelCallbacks=e}startUIUpdates(){this.uiUpdateInterval||(this.uiUpdateInterval=setInterval(()=>{if(this.panelElement){const e=this.visualizerCamera.position;this.panelElement.setCameraPosition(e.x,e.y,e.z)}for(const e of this.activePlugins)this.plugins.get(e)?.updateUI?.()},1e3))}getState(){const e=this.pipViewport?.getSize()??{width:280,height:200},t=this.pipViewport?.getPosition()??{x:0,y:0},n=this.manager.camera.getPositionArray(),s=this.manager.camera.getTargetArray(),i=this.manager.camera.instance,o=[i.quaternion.x,i.quaternion.y,i.quaternion.z,i.quaternion.w],a=this.visualizerCamera,r=[a.position.x,a.position.y,a.position.z],l=[a.quaternion.x,a.quaternion.y,a.quaternion.z,a.quaternion.w],d={};for(const[h,u]of this.plugins)d[h]={enabled:this.activePlugins.has(h),state:u.getState?.()??null};return{lockRotation:this.lockRotation,pipEnabled:this.pipViewport?.isEnabled()??!0,pipX:t.x,pipY:t.y,pipWidth:e.width,pipHeight:e.height,pipFollow:this.pipViewport?.isFollowing()??!1,pipFocused:this.pipViewport?.isFocusedMode()??!1,plugins:d,debugCamera:{position:n,quaternion:o,target:s},sceneCamera:{position:r,quaternion:l}}}setState(e){const t=e;if(!(!t||!this.enabled)){if(t.debugCamera&&(this.manager.camera.setPosition(t.debugCamera.position),this.manager.camera.setTarget(t.debugCamera.target)),t.sceneCamera){const n=this.visualizerCamera;n.position.set(t.sceneCamera.position[0],t.sceneCamera.position[1],t.sceneCamera.position[2]),n.quaternion.set(t.sceneCamera.quaternion[0],t.sceneCamera.quaternion[1],t.sceneCamera.quaternion[2],t.sceneCamera.quaternion[3]),n.updateMatrixWorld(!0)}if(typeof t.lockRotation=="boolean"&&(t.lockRotation&&this.captureSceneCameraState(),this.lockRotation=t.lockRotation,this.pipViewport?.setLockRotation(t.lockRotation),this.updateCullingOverride()),typeof t.pipEnabled=="boolean"&&this.setPipEnabled(t.pipEnabled),typeof t.pipX=="number"&&typeof t.pipY=="number"&&this.pipViewport?.setPosition(t.pipX,t.pipY),typeof t.pipWidth=="number"&&typeof t.pipHeight=="number"&&this.setPipSize(t.pipWidth,t.pipHeight),typeof t.pipFollow=="boolean"&&this.pipViewport?.setFollowSceneCamera(t.pipFollow),typeof t.pipFocused=="boolean"&&this.pipViewport?.setFocused(t.pipFocused),t.plugins)for(const[n,s]of Object.entries(t.plugins)){const i=this.plugins.get(n);i&&(s.enabled&&!this.activePlugins.has(n)?this.activatePlugin(n):!s.enabled&&this.activePlugins.has(n)&&this.deactivatePlugin(n),s.state&&i.setState&&i.setState(s.state))}}}dispose(){this.modeChangeUnsubscribe?.(),this.modeChangeUnsubscribe=null;for(const[e,t]of this.plugins)this.activePlugins.has(e)&&t.disable(),t.dispose();this.plugins.clear(),this.activePlugins.clear(),this.disable()}createPluginContext(){return{engine:this.engine,scene:this.scene,debugContext:this.manager.context,selection:this.manager.selection,history:this.manager.history,analytics:this.analytics,getVisualizerCamera:()=>this.visualizerCamera,createLogger:e=>this.engine.getLogger(`Debug.${e}`),getMode:()=>this.manager.mode,requestPluginActivation:e=>this.activatePlugin(e),resolveCamera:e=>{switch(e){case"scene-cam":return this.engine.camera.instance;case"debug-cam":return this.manager.camera.instance;case"active-cam":return this.manager.getVisualizerCamera();default:return null}}}}}class zn{constructor(e,t){this.scene=e,this.log=t}enabled=!1;originalMaterialStates=new Map;log;onEnable(){}onDisable(){}update(){this.enabled&&this.scene.traverse(e=>{if(this.shouldSkipObject(e)||!(e instanceof S))return;const t=e,n=t.material;if(n&&!Array.isArray(n)&&(n.colorWrite===!1||n.opacity<.01))return;const s=this.computeColorForMesh(t);s!==null&&(this.storeOriginalMaterialState(t),this.applyColor(t,s))})}shouldSkipObject(e){if(e.name.startsWith("__debug_")||e.name.includes("gizmo")||e.name.includes("Gizmo")||e.name.includes("helper")||e.name.includes("Helper")||e.type==="TransformControls")return!0;let t=e.parent;for(;t;){if(t.type==="TransformControls"||t.name.includes("TransformControls"))return!0;t=t.parent}return!1}storeOriginalMaterialState(e){if(this.originalMaterialStates.has(e.id))return;const t=e.material;if(!t||Array.isArray(t))return;const n=t;n.colorWrite===!1||n.opacity<.01||this.originalMaterialStates.set(e.id,{material:n,opacity:n.opacity??1,transparent:n.transparent??!1,wireframe:"wireframe"in n?n.wireframe:!1,color:"color"in n&&n.color?n.color.clone():null,depthWrite:n.depthWrite??!0,visible:e.visible})}applyColor(e,t){const n=e.material;if(!n||Array.isArray(n))return;const s=this.originalMaterialStates.get(e.id);if(!s)return;if(n instanceof de){e.material=this.getOrCreateDebugMaterial(e,s,t);return}const i=n;"color"in i&&i.color&&(i.color.copy(t),i.needsUpdate=!0)}getOrCreateDebugMaterial(e,t,n){const s=t.material;if(!(s instanceof de))return s;if(t.debugMaterial&&t.debugMaterial instanceof de){const a=t.debugMaterial;if(a.uniforms.uDebugColor)return a.uniforms.uDebugColor.value.copy(n),a}t.debugMaterial&&t.debugMaterial.dispose();const i={};for(const[a,r]of Object.entries(s.uniforms))this.isLightUniform(a)||(i[a]={value:r.value});const o=new de({uniforms:{...i,uDebugColor:{value:n.clone()}},vertexShader:s.vertexShader,fragmentShader:`
                uniform vec3 uDebugColor;
                void main() {
                    gl_FragColor = vec4(uDebugColor, 1.0);
                }
            `,transparent:!1,depthWrite:!0,side:s.side,lights:!1});return o.name=`debug_${e.id}`,t.debugMaterial=o,o}isLightUniform(e){return["pointLights","spotLights","directionalLights","hemisphereLights","rectAreaLights","ambientLightColor","lightProbe"].some(n=>e.startsWith(n))}restoreMaterial(e){const t=this.originalMaterialStates.get(e.id);if(!t)return;e.material=t.material,e.visible=t.visible,t.debugMaterial&&t.debugMaterial.dispose();const n=t.material;n.opacity=t.opacity,n.transparent=t.transparent,n.depthWrite=t.depthWrite,"wireframe"in n&&(n.wireframe=t.wireframe),"color"in n&&n.color&&t.color&&n.color.copy(t.color),n.needsUpdate=!0}restoreAllMaterials(){this.scene.traverse(e=>{!(e instanceof S)||!this.originalMaterialStates.get(e.id)||this.restoreMaterial(e)}),this.originalMaterialStates.clear()}setEnabled(e){this.enabled!==e&&(this.enabled=e,e?this.onEnable():(this.restoreAllMaterials(),this.onDisable()))}isEnabled(){return this.enabled}dispose(){this.restoreAllMaterials()}}class Pn extends zn{mode="wireframe";reasonColors=new Map;reasonMaterials=new Map;static FALLBACK_COLORS=[16716947,52945,16747520,8388352,16738740,4251856,16729344,65407,16777215,16766720];nextColorIndex=0;lastSceneCameraPosition=new v;lastSceneCameraQuaternion=new Z;MOVE_THRESHOLD=.001;ROTATE_THRESHOLD=1e-4;cullingFrustum=new xn;projScreenMatrix=new Pt;stats={};knownReasons=[...hi];callbacks;getSceneCamera;constructor(e,t,n,s={}){super(t,n),this.getSceneCamera=e,this.callbacks=s}computeColorForMesh(e){return null}getColorForReason(e){if(!this.reasonColors.has(e)){const t=ui(e);if(t?.color!==void 0)this.reasonColors.set(e,t.color);else{const n=Pn.FALLBACK_COLORS,s=n[this.nextColorIndex%n.length];this.nextColorIndex++,this.reasonColors.set(e,s)}}return this.reasonColors.get(e)}getMaterialForReason(e,t){const n=`${e}_${t?"wire":"solid"}`;if(!this.reasonMaterials.has(n)){const s=this.getColorForReason(e),i=new ce({color:s,wireframe:t,transparent:!0,opacity:.6,depthWrite:!1});this.reasonMaterials.set(n,i)}return this.reasonMaterials.get(n)}getReasonLegend(){return this.knownReasons.map(e=>({reason:e,color:this.getColorForReason(e)})).sort((e,t)=>e.reason.localeCompare(t.reason))}hasSceneCameraMoved(){const e=this.getSceneCamera(),t=e.position,n=e.quaternion,s=this.lastSceneCameraPosition.distanceToSquared(t)>this.MOVE_THRESHOLD,i=1-Math.abs(this.lastSceneCameraQuaternion.dot(n))>this.ROTATE_THRESHOLD;return s||i?(this.lastSceneCameraPosition.copy(t),this.lastSceneCameraQuaternion.copy(n),!0):!1}initializeCameraTracking(){const e=this.getSceneCamera();this.lastSceneCameraPosition.copy(e.position),this.lastSceneCameraQuaternion.copy(e.quaternion)}onEnable(){this.initializeCameraTracking();for(const e of this.knownReasons)this.getColorForReason(e)}buildFrustumFromSceneCamera(){const e=this.getSceneCamera();e.updateMatrixWorld(!0),e.updateProjectionMatrix(),this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.cullingFrustum.setFromProjectionMatrix(this.projScreenMatrix)}testObjectAgainstFrustum(e){if(!e.geometry)return!0;if(e.updateMatrixWorld(!0),e instanceof Ue){e.boundingSphere||e.computeBoundingSphere();const s=e.boundingSphere;if(!s)return!0;const i=s.clone().applyMatrix4(e.matrixWorld);return this.cullingFrustum.intersectsSphere(i)}e.geometry.boundingSphere||e.geometry.computeBoundingSphere();const t=e.geometry.boundingSphere;if(!t)return!0;const n=t.clone().applyMatrix4(e.matrixWorld);return this.cullingFrustum.intersectsSphere(n)}update(){this.enabled&&this.computeVisibilityInternal(!0)}computeForAnalytics(){this.computeVisibilityInternal(!1)}computeVisibilityInternal(e){this.buildFrustumFromSceneCamera(),this.stats={},this.scene.traverse(t=>{if(this.shouldSkipObject(t)||!(t instanceof S))return;const n=t,s=n.material;if(s&&!Array.isArray(s)&&(s.colorWrite===!1||s.opacity<.01))return;const i=n.userData.culling;let o,a;i?(o=i.inFrustum,a=i.reason):(o=this.testObjectAgainstFrustum(n),a=o?"VISIBLE":"FRUSTUM_CULLED"),this.stats[a]=(this.stats[a]??0)+1,this.knownReasons.includes(a)||this.knownReasons.push(a),this.getColorForReason(a),this.callbacks.onStatsAccumulate?.(n,a),e&&(this.applyVisualization(n,a),a.includes("_CULLED")&&(n.visible=!0))}),this.callbacks.onFrameEnd?.()}applyVisualization(e,t){if(this.mode==="none")return;const n=e.material;if(!n||Array.isArray(n))return;const s=n;if(s.colorWrite===!1||s.opacity<.01)return;this.storeOriginalMaterialState(e);const i=this.originalMaterialStates.get(e.id);if(!i)return;if(t.includes("_CULLED")){const a=this.mode==="wireframe";e.material=this.getDebugMaterialForMesh(e,i,t,a)}else{e.material!==i.material&&(e.material=i.material);const a=i.material;a.opacity=i.opacity,a.transparent=i.transparent,a.depthWrite=i.depthWrite,"wireframe"in a&&(a.wireframe=i.wireframe),"color"in a&&a.color&&i.color&&a.color.copy(i.color),a.needsUpdate=!0}}getDebugMaterialForMesh(e,t,n,s){const i=t.material;if(i instanceof de){const o=`${e.id}_${n}_${s?"wire":"solid"}`;if(!t.debugMaterial||t.debugMaterial.name!==o){const a=this.getColorForReason(n),r=(a>>16&255)/255,l=(a>>8&255)/255,d=(a&255)/255,h={};for(const[p,x]of Object.entries(i.uniforms))this.isLightUniform(p)||(h[p]={value:x.value});const u=new de({uniforms:h,vertexShader:i.vertexShader,fragmentShader:`
                        void main() {
                            gl_FragColor = vec4(${r.toFixed(3)}, ${l.toFixed(3)}, ${d.toFixed(3)}, 0.6);
                        }
                    `,wireframe:s,transparent:!0,depthWrite:!1,side:i.side,lights:!1});u.name=o,t.debugMaterial&&t.debugMaterial.dispose(),t.debugMaterial=u}return t.debugMaterial}return this.getMaterialForReason(n,s)}setMode(e){this.mode!==e&&(this.enabled&&this.restoreAllMaterials(),this.mode=e,this.enabled&&this.update())}getMode(){return this.mode}getStats(){return this.knownReasons.map(e=>({reason:e,count:this.stats[e]??0})).sort((e,t)=>t.count-e.count)}dispose(){super.dispose();for(const e of this.reasonMaterials.values())e.dispose();this.reasonMaterials.clear(),this.reasonColors.clear()}}class yr{id="culling";name="Culling";category="Scene Analysis";group="scene-colorizer";context;visualization=null;enabled=!1;log;modeSelect=null;statsContainer=null;legendContainer=null;init(e){this.context=e,this.log=e.createLogger("CullingPlugin"),this.visualization=new Pn(()=>e.getVisualizerCamera(),e.scene,e.createLogger("CullingVisualization"),{onStatsAccumulate:(t,n)=>{e.analytics?.accumulateStats(t,n)},onFrameEnd:()=>{e.analytics?.endFrame()}})}enable(){this.enabled||(this.enabled=!0,this.visualization?.setEnabled(!0),this.log.info("Culling visualization enabled"))}disable(){this.enabled&&(this.enabled=!1,this.visualization?.setEnabled(!1),this.log.info("Culling visualization disabled"))}update(e){this.enabled&&this.visualization?.update()}computeForAnalytics(){this.visualization?.computeForAnalytics()}createUI(e){const t=document.createElement("div");t.className="debug-info-row",t.innerHTML=`
            <span class="debug-info-label">Mode</span>
            <select class="debug-select">
                <option value="wireframe" selected>Wireframe</option>
                <option value="solidColor">Solid Color</option>
            </select>
        `,this.modeSelect=t.querySelector("select"),this.modeSelect.addEventListener("change",()=>{const n=this.modeSelect.value;this.visualization?.setMode(n),this.context.history.recordAction(`Culling mode → ${n}`)}),e.appendChild(t),this.statsContainer=document.createElement("div"),this.statsContainer.className="viz-stats culling-stats",e.appendChild(this.statsContainer),this.legendContainer=document.createElement("div"),this.legendContainer.className="viz-legend culling-legend",this.legendContainer.innerHTML='<div class="debug-text-muted">Enable to see legend</div>',e.appendChild(this.legendContainer)}updateUI(){if(!this.enabled||!this.visualization)return;const e=this.visualization.getStats(),t=this.visualization.getReasonLegend();this.renderStats(e,t),this.renderLegend(t)}isEnabled(){return this.enabled}getState(){return{mode:this.visualization?.getMode()??"wireframe"}}setState(e){const t=e;t.mode&&(this.visualization?.setMode(t.mode),this.modeSelect&&(this.modeSelect.value=t.mode))}dispose(){this.visualization?.dispose(),this.visualization=null}getStats(){return this.visualization?.getStats()??[]}getReasonLegend(){return this.visualization?.getReasonLegend()??[]}renderStats(e,t){if(!this.statsContainer)return;const n=new Map;for(const{reason:i,color:o}of t)n.set(i,o);let s="";for(const{reason:i,count:o}of e){const a=n.get(i),r=a!==void 0?"#"+a.toString(16).padStart(6,"0"):"var(--debug-text-muted, #888)",l=i.replace(/_/g," ").toLowerCase();s+=`<div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
                <span style="color:${r};">${l}:</span>
                <span>${o}</span>
            </div>`}this.statsContainer.innerHTML=s}renderLegend(e){if(!this.legendContainer)return;if(e.length===0){this.legendContainer.innerHTML='<div class="debug-text-muted">Enable to see legend</div>';return}let t='<div style="font-size:10px;color:var(--debug-text-muted,#888);margin-bottom:4px;">Culling Reasons:</div>';for(const{reason:n,color:s}of e){const i="#"+s.toString(16).padStart(6,"0"),o=n.replace(/_/g," ").toLowerCase();t+=`<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;font-size:11px;">
                <span style="width:12px;height:12px;border-radius:2px;flex-shrink:0;background:${i};display:inline-block;"></span>
                <span style="color:${i};">${o}</span>
            </div>`}this.legendContainer.innerHTML=t}}const us=new N(4521796),ps=new N(16777028),xr=new N(16729156);class Cr extends zn{constructor(e,t){super(e,t)}computeColorForMesh(e){const t=e.userData.lod;return t?this.getColorForLodLevel(t.level,t.levelCount):null}getColorForLodLevel(e,t){const n=new N;if(t<=1)return n.copy(us);const s=e/(t-1);if(s<=.5){const i=s*2;n.copy(us).lerp(ps,i)}else{const i=(s-.5)*2;n.copy(ps).lerp(xr,i)}return n}getLegend(){let e=0;if(this.scene.traverse(n=>{if(!(n instanceof S))return;const s=n.userData.lod;s&&s.levelCount>e&&(e=s.levelCount)}),e===0)return[];const t=[];for(let n=0;n<e;n++){const s=this.getColorForLodLevel(n,e),i=n===0,o=n===e-1;let a=`Level ${n}`;i&&(a+=" (highest)"),o&&(a+=" (lowest)"),t.push({level:n,color:"#"+s.getHexString(),label:a})}return t}}class wr{id="lod";name="LOD Levels";category="Scene Analysis";group="scene-colorizer";context;visualization=null;enabled=!1;log;legendContainer=null;init(e){this.context=e,this.log=e.createLogger("LodPlugin"),this.visualization=new Cr(e.scene,e.createLogger("LodVisualization"))}enable(){this.enabled||(this.enabled=!0,this.visualization?.setEnabled(!0),this.visualization?.update(),this.log.info("LOD visualization enabled"))}disable(){this.enabled&&(this.enabled=!1,this.visualization?.setEnabled(!1),this.log.info("LOD visualization disabled"))}update(e){this.enabled&&this.visualization?.update()}createUI(e){const t=document.createElement("div");t.className="debug-tool-hint",t.textContent="Green = highest detail, Red = lowest detail",e.appendChild(t),this.legendContainer=document.createElement("div"),this.legendContainer.className="viz-legend lod-legend",this.legendContainer.innerHTML='<div class="debug-text-muted">Enable to see legend</div>',e.appendChild(this.legendContainer)}updateUI(){!this.enabled||!this.visualization||this.renderLegend(this.visualization.getLegend())}isEnabled(){return this.enabled}getState(){return null}setState(e){}dispose(){this.visualization?.dispose(),this.visualization=null}getLegend(){return this.visualization?.getLegend()??[]}renderLegend(e){if(!this.legendContainer)return;if(e.length===0){this.legendContainer.innerHTML='<div class="debug-text-muted">No LOD data found in scene</div>';return}let t='<div style="font-size:10px;color:var(--debug-text-muted,#888);margin-bottom:4px;">LOD Levels</div>';for(const n of e)t+=`<div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;font-size:11px;">
                <span style="width:12px;height:12px;border-radius:2px;flex-shrink:0;background:${n.color};display:inline-block;"></span>
                <span>${n.label}</span>
            </div>`;this.legendContainer.innerHTML=t}}const gs=new N(4521796),mn=new N(16776960),kr=new N(16729156);class Sr extends zn{wasteData=new Map;maxWastedTriangles=0;constructor(e,t){super(e,t)}setWasteData(e){this.wasteData=e,this.maxWastedTriangles=0;for(const t of e.values())t.wastedTriangles>this.maxWastedTriangles&&(this.maxWastedTriangles=t.wastedTriangles)}refresh(){this.enabled&&(this.restoreAllMaterials(),this.update())}clearWasteData(){this.wasteData.clear(),this.enabled&&this.restoreAllMaterials()}computeColorForMesh(e){const t=this.wasteData.get(e.id);return t?this.getColorForWaste(t.wastedTriangles):null}getColorForWaste(e){const t=new N;if(this.maxWastedTriangles===0)return t.copy(gs);const n=e/this.maxWastedTriangles*100;if(n<=30){const s=n/30;t.copy(gs).lerp(mn,s)}else if(n<=70)t.copy(mn);else{const s=(n-70)/30;t.copy(mn).lerp(kr,s)}return t}hasData(){return this.wasteData.size>0}getDataCount(){return this.wasteData.size}}class Er{id="waste";name="Waste Heatmap";category="Scene Analysis";group="scene-colorizer";context;visualization=null;enabled=!1;log;recordingBtn=null;resetBtn=null;frameCount=null;totalMeshesEl=null;totalTrisEl=null;visibleTrisEl=null;wastedTrisEl=null;offendersListEl=null;exportBtn=null;init(e){this.context=e,this.log=e.createLogger("WastePlugin"),this.visualization=new Sr(e.scene,e.createLogger("WasteVisualization"))}enable(){this.enabled||(this.enabled=!0,this.visualization?.setEnabled(!0),this.refreshWasteVisualization(),this.log.info("Waste visualization enabled"))}disable(){this.enabled&&(this.enabled=!1,this.visualization?.setEnabled(!1),this.log.info("Waste visualization disabled"))}update(e){}createUI(e){const t=document.createElement("div");t.className="debug-tool-hint",t.textContent="Green = low waste, Red = high waste",e.appendChild(t);const n=document.createElement("div");n.style.cssText="display:flex;align-items:center;gap:6px;margin-bottom:8px;",this.recordingBtn=document.createElement("button"),this.recordingBtn.className="debug-button",this.recordingBtn.style.padding="4px 8px",this.recordingBtn.textContent="Start",this.recordingBtn.addEventListener("click",()=>this.onRecordingToggle()),this.resetBtn=document.createElement("button"),this.resetBtn.className="debug-button",this.resetBtn.style.padding="4px 8px",this.resetBtn.textContent="Reset",this.resetBtn.addEventListener("click",()=>this.onRecordingReset()),this.frameCount=document.createElement("span"),this.frameCount.style.cssText="font-size:10px;color:var(--debug-text-muted,#888);",this.frameCount.textContent="(0 frames)",n.appendChild(this.recordingBtn),n.appendChild(this.resetBtn),n.appendChild(this.frameCount),e.appendChild(n);const s=document.createElement("div");s.className="viz-stats",s.innerHTML=`
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
                <span style="color:var(--debug-text-muted,#888);">Total Meshes:</span>
                <span class="total-meshes">--</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
                <span style="color:var(--debug-text-muted,#888);">Total Triangles:</span>
                <span class="total-tris">--</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
                <span style="color:var(--debug-text-muted,#888);">Avg Visible:</span>
                <span class="visible-tris">--</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:2px;">
                <span style="color:#f44336;">Avg Wasted:</span>
                <span class="wasted-tris">--</span>
            </div>
        `,this.totalMeshesEl=s.querySelector(".total-meshes"),this.totalTrisEl=s.querySelector(".total-tris"),this.visibleTrisEl=s.querySelector(".visible-tris"),this.wastedTrisEl=s.querySelector(".wasted-tris"),e.appendChild(s);const i=document.createElement("div");i.style.cssText="font-size:10px;color:var(--debug-text-muted,#888);margin:8px 0 4px 0;",i.textContent="Worst Offenders (by wasted tris)",e.appendChild(i),this.offendersListEl=document.createElement("div"),this.offendersListEl.style.cssText="max-height:200px;overflow-y:auto;margin-bottom:8px;padding:6px 8px;background:var(--debug-bg-inset,rgba(0,0,0,0.25));border-radius:4px;",this.offendersListEl.innerHTML='<div class="debug-text-muted">Start recording to collect data</div>',e.appendChild(this.offendersListEl),this.exportBtn=document.createElement("button"),this.exportBtn.className="debug-button",this.exportBtn.style.width="100%",this.exportBtn.textContent="Export Report",this.exportBtn.addEventListener("click",()=>this.onExportReport()),e.appendChild(this.exportBtn)}updateUI(){const e=this.context.analytics;if(!e)return;const t=e.isRecordingActive(),n=e.getRecordedFrames();this.recordingBtn&&(this.recordingBtn.textContent=t?"Stop":"Start"),this.frameCount&&(this.frameCount.textContent=`(${n} frames)`);const s=e.getSummary();this.renderSummary(s);const i=e.getWorstOffenders(10);this.renderOffenders(i)}isEnabled(){return this.enabled}getState(){return null}setState(e){}dispose(){this.visualization?.dispose(),this.visualization=null}refreshWasteVisualization(){if(!this.visualization?.isEnabled()||!this.context.analytics)return;const e=this.context.analytics.getTrackedMeshesWithWaste();this.visualization.setWasteData(e),this.visualization.refresh()}onRecordingToggle(){const e=this.context.analytics;e&&(e.isRecordingActive()?(e.stopRecording(),this.refreshWasteVisualization()):e.startRecording())}onRecordingReset(){const e=this.context.analytics;e&&(e.resetRecording(),this.visualization?.clearWasteData(),this.visualization?.refresh())}onExportReport(){const e=this.context.analytics;if(!e)return;const t=e.exportReport(),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),i=document.createElement("a");i.href=s,i.download=`culling-report-${new Date().toISOString().slice(0,19).replace(/:/g,"-")}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s),this.log.info("Report exported")}renderSummary(e){if(this.totalMeshesEl&&(this.totalMeshesEl.textContent=String(e.totalMeshes)),this.totalTrisEl&&(this.totalTrisEl.textContent=Ve.formatNumber(e.totalTriangles)),this.visibleTrisEl&&(this.visibleTrisEl.textContent=Ve.formatNumber(e.visibleTriangles)),this.wastedTrisEl){const t=e.totalTriangles>0?Math.round(e.wastedTriangles/e.totalTriangles*100):0;this.wastedTrisEl.textContent=`${Ve.formatNumber(e.wastedTriangles)} (${t}%)`}}renderOffenders(e){if(!this.offendersListEl)return;if(e.length===0){this.offendersListEl.innerHTML='<div class="debug-text-muted">Start recording to collect data</div>';return}let t="";e.forEach((n,s)=>{const i=100-Math.round(n.visibilityPercent),o=Ve.formatNumber(n.wastedTriangles),a=n.name.length>20?n.name.substring(0,18)+"...":n.name,r=i>50?' style="border-left:2px solid #f44336;"':"";t+=`
                <div${r} data-mesh-id="${n.id}" style="padding:4px 6px;margin-bottom:2px;background:var(--debug-bg-section,rgba(40,40,40,0.9));border-radius:2px;cursor:pointer;">
                    <div style="display:flex;justify-content:space-between;font-size:11px;">
                        <span>${s+1}. ${a}</span>
                        <span style="color:#f44336;">${o}</span>
                    </div>
                    <div style="font-size:10px;color:var(--debug-text-muted,#888);">
                        ${Ve.formatNumber(n.triangles)} tris · ${i}% culled
                    </div>
                </div>
            `}),this.offendersListEl.innerHTML=t,this.offendersListEl.querySelectorAll("[data-mesh-id]").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.meshId||"0",10);if(s){const i=this.context.analytics?.findMeshById(s);i&&this.context.selection.onSelect(i)}})})}}var Lr="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",Tr="uniform sampler2D tTexture;uniform int uMode;uniform int uChannel;uniform float uNear;uniform float uFar;uniform vec2 uValueRange;varying vec2 vUv;float linearizeDepth(float depth,float near,float far){float z=depth*2.0-1.0;float linearZ=(2.0*near*far)/(far+near-z*(far-near));return(linearZ-near)/(far-near);}void main(){vec4 texel=texture2D(tTexture,vUv);if(uMode==1){float d=linearizeDepth(texel.r,uNear,uFar);d=(d-uValueRange.x)/(uValueRange.y-uValueRange.x);d=clamp(d,0.0,1.0);gl_FragColor=vec4(vec3(d),1.0);}else if(uMode==2){float value;if(uChannel==0)value=texel.r;else if(uChannel==1)value=texel.g;else if(uChannel==2)value=texel.b;else value=texel.a;value=(value-uValueRange.x)/(uValueRange.y-uValueRange.x);value=clamp(value,0.0,1.0);gl_FragColor=vec4(vec3(value),1.0);}else{vec3 color=(texel.rgb-uValueRange.x)/(uValueRange.y-uValueRange.x);color=clamp(color,0.0,1.0);gl_FragColor=vec4(color,1.0);}}";const zr={color:0,depth:1,"single-channel":2};class Pr{camera;blitScene;material;mesh;savedViewport=new Ne;savedScissor=new Ne;savedClearColor=new N;constructor(){this.camera=new Sn(-.5,.5,.5,-.5,0,1),this.material=new de({vertexShader:Lr,fragmentShader:Tr,uniforms:{tTexture:{value:null},uMode:{value:0},uChannel:{value:0},uNear:{value:.1},uFar:{value:100},uValueRange:{value:[0,1]}},depthTest:!1,depthWrite:!1});const e=new Tt(1,1);this.mesh=new S(e,this.material),this.mesh.frustumCulled=!1,this.blitScene=new Cn,this.blitScene.add(this.mesh)}blit(e,t,n,s){e.getViewport(this.savedViewport),e.getScissor(this.savedScissor);const i=e.getScissorTest();e.getClearColor(this.savedClearColor);const o=e.getClearAlpha(),a=e.autoClear;this.material.uniforms.tTexture.value=t,this.material.uniforms.uMode.value=zr[s.mode],this.material.uniforms.uChannel.value=s.channel,this.material.uniforms.uNear.value=s.near,this.material.uniforms.uFar.value=s.far,this.material.uniforms.uValueRange.value=s.valueRange,e.setViewport(n.x,n.y,n.width,n.height),e.setScissor(n.x,n.y,n.width,n.height),e.setScissorTest(!0),e.setClearColor(1710618,1),e.autoClear=!1,e.clear(!0,!0,!0),e.render(this.blitScene,this.camera),e.setViewport(this.savedViewport),e.setScissor(this.savedScissor),e.setScissorTest(i),e.setClearColor(this.savedClearColor,o),e.autoClear=a}dispose(){this.material.dispose(),this.mesh.geometry.dispose()}}const Mr=`<header class="header">
    <span class="title"></span>
    <select class="source-select" title="Camera source"></select>
    <div class="controls">
        <select class="mode-select" title="Display mode">
            <option value="color">Color</option>
            <option value="depth">Depth</option>
            <option value="r">R</option>
            <option value="g">G</option>
            <option value="b">B</option>
            <option value="a">A</option>
        </select>
        <button class="btn range-btn" title="Value range">&#x2194;</button>
        <button class="btn close-btn" title="Close">&#x2715;</button>
    </div>
</header>
<div class="range-toolbar" hidden>
    <label class="range-label">min <input type="number" class="range-input range-min" value="0" step="0.01" min="0" max="10"></label>
    <label class="range-label">max <input type="number" class="range-input range-max" value="1" step="0.01" min="0" max="10"></label>
</div>
<div class="content"></div>
<div class="resize-handle"></div>
`,Ar=`:host {
    position: fixed;
    display: block;
    border: 2px solid var(--debug-accent, #4a90d9);
    border-radius: 4px;
    background: transparent;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    z-index: 20000;
    overflow: hidden;
    pointer-events: auto;
    user-select: none;
    text-transform: none;
    letter-spacing: normal;
}

:host([hidden]) {
    display: none;
}

.header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 24px;
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.95));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    cursor: move;
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 6px;
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    color: var(--debug-text, #e0e0e0);
    user-select: none;
    pointer-events: auto;
}

.title {
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.source-select {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 1px 4px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    flex-shrink: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.source-select:not(:disabled):hover,
.source-select:not(:disabled):focus {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e0e0e0);
}

.source-select:disabled {
    cursor: default;
    opacity: 0.8;
}

.controls {
    display: flex;
    gap: 4px;
    margin-left: auto;
    flex-shrink: 0;
}

.mode-select {
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.95));
    border: 1px solid var(--debug-border, #444);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-size: 9px;
    padding: 1px 4px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
}

.mode-select:hover,
.mode-select:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.btn {
    background: none;
    border: 1px solid var(--debug-border, #444);
    border-radius: 3px;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 9px;
    padding: 2px 6px;
    font-family: inherit;
    line-height: 1;
}

.btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e0e0e0);
}

.close-btn:hover {
    border-color: #e74c3c;
    color: #e74c3c;
}

.range-toolbar {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 20px;
    background: var(--debug-bg-section, rgba(40, 40, 40, 0.95));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 8px;
    font-family: var(--debug-font, monospace);
    font-size: 9px;
    color: var(--debug-text-muted, #888);
}

.range-toolbar[hidden] {
    display: none;
}

.range-label {
    display: flex;
    align-items: center;
    gap: 3px;
}

.range-input {
    width: 48px;
    background: var(--debug-bg, rgba(32, 32, 32, 0.95));
    border: 1px solid var(--debug-border, #444);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-size: 9px;
    padding: 1px 3px;
    font-family: inherit;
    outline: none;
    -moz-appearance: textfield;
}

.range-input::-webkit-inner-spin-button,
.range-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.range-input:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.range-btn.active {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-accent, #4a90d9);
}

.content {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    bottom: 0;
}

:host(.range-open) .content {
    top: 44px;
}

:host(.range-open) .range-toolbar {
    display: flex;
}

.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 16px;
    height: 16px;
    cursor: se-resize;
    pointer-events: auto;
    background: linear-gradient(135deg, transparent 50%, var(--debug-accent, #4a90d9) 50%);
    border-radius: 0 0 2px 0;
    z-index: 1;
}
`;class ge extends HTMLElement{static tagName="debug-buffer-panel";static HEADER_HEIGHT=24;static TOOLBAR_HEIGHT=20;shadow;initialized=!1;headerEl=null;titleEl=null;sourceSelectEl=null;modeSelectEl=null;closeBtn=null;rangeBtn=null;rangeToolbarEl=null;rangeMinEl=null;rangeMaxEl=null;resizeHandleEl=null;rangeOpen=!1;isDragging=!1;dragStartX=0;dragStartY=0;isResizing=!1;resizeStartX=0;resizeStartY=0;resizeStartWidth=0;resizeStartHeight=0;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${Ar}</style>${Mr}`,this.headerEl=this.shadow.querySelector(".header"),this.titleEl=this.shadow.querySelector(".title"),this.sourceSelectEl=this.shadow.querySelector(".source-select"),this.modeSelectEl=this.shadow.querySelector(".mode-select"),this.closeBtn=this.shadow.querySelector(".close-btn"),this.rangeBtn=this.shadow.querySelector(".range-btn"),this.rangeToolbarEl=this.shadow.querySelector(".range-toolbar"),this.rangeMinEl=this.shadow.querySelector(".range-min"),this.rangeMaxEl=this.shadow.querySelector(".range-max"),this.resizeHandleEl=this.shadow.querySelector(".resize-handle")}setupEventListeners(){this.headerEl?.addEventListener("mousedown",this.onDragStart),this.resizeHandleEl?.addEventListener("mousedown",this.onResizeStart),this.sourceSelectEl?.addEventListener("change",this.onSourceChange),this.modeSelectEl?.addEventListener("change",this.onModeChange),this.closeBtn?.addEventListener("click",this.onCloseClick),this.rangeBtn?.addEventListener("click",this.onRangeToggle),this.rangeMinEl?.addEventListener("input",this.onRangeInput),this.rangeMaxEl?.addEventListener("input",this.onRangeInput)}cleanupEventListeners(){this.headerEl?.removeEventListener("mousedown",this.onDragStart),this.resizeHandleEl?.removeEventListener("mousedown",this.onResizeStart),this.sourceSelectEl?.removeEventListener("change",this.onSourceChange),this.modeSelectEl?.removeEventListener("change",this.onModeChange),this.closeBtn?.removeEventListener("click",this.onCloseClick),this.rangeBtn?.removeEventListener("click",this.onRangeToggle),this.rangeMinEl?.removeEventListener("input",this.onRangeInput),this.rangeMaxEl?.removeEventListener("input",this.onRangeInput),document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("mousemove",this.onResizeMove),document.removeEventListener("mouseup",this.onResizeEnd)}onDragStart=e=>{e.target.closest(".controls")||(this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY,document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),this.dispatchEvent(new CustomEvent("drag-start",{bubbles:!0,composed:!0})))};onDragMove=e=>{if(!this.isDragging)return;const t={deltaX:e.clientX-this.dragStartX,deltaY:e.clientY-this.dragStartY,startX:this.dragStartX,startY:this.dragStartY};this.dispatchEvent(new CustomEvent("drag-move",{bubbles:!0,composed:!0,detail:t}))};onDragEnd=()=>{this.isDragging=!1,document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),this.dispatchEvent(new CustomEvent("drag-end",{bubbles:!0,composed:!0}))};onResizeStart=e=>{e.stopPropagation(),this.isResizing=!0,this.resizeStartX=e.clientX,this.resizeStartY=e.clientY,this.resizeStartWidth=this.offsetWidth,this.resizeStartHeight=this.offsetHeight,document.addEventListener("mousemove",this.onResizeMove),document.addEventListener("mouseup",this.onResizeEnd)};onResizeMove=e=>{if(!this.isResizing)return;const t={deltaX:e.clientX-this.resizeStartX,deltaY:e.clientY-this.resizeStartY,startWidth:this.resizeStartWidth,startHeight:this.resizeStartHeight,shiftKey:e.shiftKey};this.dispatchEvent(new CustomEvent("resize-move",{bubbles:!0,composed:!0,detail:t}))};onResizeEnd=()=>{this.isResizing=!1,document.removeEventListener("mousemove",this.onResizeMove),document.removeEventListener("mouseup",this.onResizeEnd),this.dispatchEvent(new CustomEvent("resize-end",{bubbles:!0,composed:!0}))};onSourceChange=()=>{const e={source:this.sourceSelectEl?.value??""};this.dispatchEvent(new CustomEvent("source-change",{bubbles:!0,composed:!0,detail:e}))};onModeChange=()=>{const e={mode:this.modeSelectEl?.value??"color"};this.dispatchEvent(new CustomEvent("mode-change",{bubbles:!0,composed:!0,detail:e}))};onRangeToggle=()=>{this.rangeOpen=!this.rangeOpen,this.rangeBtn?.classList.toggle("active",this.rangeOpen),this.rangeOpen?(this.classList.add("range-open"),this.rangeToolbarEl?.removeAttribute("hidden")):(this.classList.remove("range-open"),this.rangeToolbarEl?.setAttribute("hidden","")),this.dispatchEvent(new CustomEvent("range-toggle",{bubbles:!0,composed:!0,detail:{open:this.rangeOpen}}))};onRangeInput=()=>{const e=parseFloat(this.rangeMinEl?.value??"0"),t=parseFloat(this.rangeMaxEl?.value??"1");if(isNaN(e)||isNaN(t))return;const n={min:e,max:t};this.dispatchEvent(new CustomEvent("range-change",{bubbles:!0,composed:!0,detail:n}))};onCloseClick=()=>{this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))};setPosition(e,t){this.style.left=`${e}px`,this.style.top=`${t}px`}setSize(e,t){this.style.width=`${e}px`,this.style.height=`${t}px`}setTitle(e){this.titleEl&&(this.titleEl.textContent=e)}setSourceOptions(e){if(this.sourceSelectEl){this.sourceSelectEl.innerHTML="";for(const t of e){const n=document.createElement("option");n.value=t.value,n.textContent=t.label,this.sourceSelectEl.appendChild(n)}this.sourceSelectEl.disabled=e.length<=1}}setSource(e){this.sourceSelectEl&&(this.sourceSelectEl.value=e)}setMode(e){this.modeSelectEl&&(this.modeSelectEl.value=e)}setRange(e,t){this.rangeMinEl&&(this.rangeMinEl.value=String(e)),this.rangeMaxEl&&(this.rangeMaxEl.value=String(t))}isRangeOpen(){return this.rangeOpen}getChromeHeight(){return ge.HEADER_HEIGHT+(this.rangeOpen?ge.TOOLBAR_HEIGHT:0)}static register(){customElements.get(ge.tagName)||customElements.define(ge.tagName,ge)}}ge.register();const Ir={"scene-cam":"scene cam","debug-cam":"debug cam","active-cam":"active cam",light:"light",compute:"compute"},ms=120,bs=100,Dr=256;class fs{descriptor;component=null;panelX;panelY;panelWidth;panelHeight;dragStartX=0;dragStartY=0;settings;currentSource;onClose;onStateChange;cameraResolver;constructor(e,t,n,s,i,o){this.descriptor=e,this.onClose=s,this.onStateChange=i,this.cameraResolver=o,this.currentSource=e.source??"active-cam";const{width:a,height:r}=this.computeDefaultSize();this.panelX=t,this.panelY=n,this.panelWidth=a,this.panelHeight=r;const l=e.defaultMode??"color";this.settings={mode:l,channel:0,near:e.near??.1,far:e.far??100,valueRange:e.valueRange??[0,1]}}computeDefaultSize(){const e=ge.HEADER_HEIGHT;let t=this.descriptor.aspectRatio??0;if(t<=0){const i=this.descriptor.getTexture();if(i&&i.image){const o=i.image,a=o.width??0,r=o.height??0;a>0&&r>0&&(t=a/r)}}if(t<=0){const i=this.descriptor.source??"active-cam";i==="active-cam"||i==="scene-cam"||i==="debug-cam"?t=window.innerWidth/window.innerHeight:t=1}const n=Dr,s=Math.round(n/t);return{width:n,height:s+e}}create(){this.component=document.createElement(ge.tagName),this.component.setTitle(this.descriptor.name),this.component.setPosition(this.panelX,this.panelY),this.component.setSize(this.panelWidth,this.panelHeight);const e=this.descriptor.supportedSources??[this.descriptor.source??"active-cam"];this.component.setSourceOptions(e.map(n=>({value:n,label:Ir[n]??n}))),this.component.setSource(this.currentSource);const t=this.displayModeToSelectValue(this.settings.mode,this.settings.channel);this.component.setMode(t),this.component.setRange(this.settings.valueRange[0],this.settings.valueRange[1]),this.setupEventListeners(),document.body.appendChild(this.component)}destroy(){this.cleanupEventListeners(),this.component&&(this.component.remove(),this.component=null)}getBlitRect(e){if(!this.component)return null;const t=e.domElement,n=this.component.getBoundingClientRect(),s=t.getBoundingClientRect(),i=this.component.getChromeHeight(),o=n.height-i;if(o<=0)return null;const a=e.getSize(new Y),r=a.x,l=a.y,d=r/s.width,h=l/s.height;return{x:(n.left-s.left)*d,y:(s.bottom-n.bottom)*h,width:n.width*d,height:o*h}}getSettings(){return this.settings}render(e,t){const n=this.descriptor.getTexture();if(!n)return;const s=this.getBlitRect(e);if(s){if(this.descriptor.getNearFar){const{near:i,far:o}=this.descriptor.getNearFar();this.settings.near=i,this.settings.far=o}t.blit(e,n,s,this.settings)}}setPosition(e,t){this.panelX=e,this.panelY=t,this.component?.setPosition(e,t)}setSize(e,t){this.panelWidth=e,this.panelHeight=t,this.component?.setSize(e,t)}getPosition(){return{x:this.panelX,y:this.panelY}}getSize(){return{width:this.panelWidth,height:this.panelHeight}}setupEventListeners(){this.component&&(this.component.addEventListener("drag-start",this.onDragStart),this.component.addEventListener("drag-move",this.onDragMove),this.component.addEventListener("drag-end",this.onDragEnd),this.component.addEventListener("resize-move",this.onResizeMove),this.component.addEventListener("resize-end",this.onResizeEnd),this.component.addEventListener("source-change",this.onSourceChange),this.component.addEventListener("mode-change",this.onModeChange),this.component.addEventListener("range-change",this.onRangeChange),this.component.addEventListener("close",this.onCloseClick))}cleanupEventListeners(){this.component&&(this.component.removeEventListener("drag-start",this.onDragStart),this.component.removeEventListener("drag-move",this.onDragMove),this.component.removeEventListener("drag-end",this.onDragEnd),this.component.removeEventListener("resize-move",this.onResizeMove),this.component.removeEventListener("resize-end",this.onResizeEnd),this.component.removeEventListener("source-change",this.onSourceChange),this.component.removeEventListener("mode-change",this.onModeChange),this.component.removeEventListener("range-change",this.onRangeChange),this.component.removeEventListener("close",this.onCloseClick))}onDragStart=()=>{this.dragStartX=this.panelX,this.dragStartY=this.panelY};onDragMove=e=>{const{deltaX:t,deltaY:n}=e.detail,s=window.innerWidth-this.panelWidth,i=window.innerHeight-this.panelHeight;this.panelX=Math.max(0,Math.min(s,this.dragStartX+t)),this.panelY=Math.max(0,Math.min(i,this.dragStartY+n)),this.component?.setPosition(this.panelX,this.panelY)};onDragEnd=()=>{this.onStateChange(this)};onResizeMove=e=>{const{deltaX:t,deltaY:n,startWidth:s,startHeight:i,shiftKey:o}=e.detail,a=window.innerWidth-this.panelX-20,r=window.innerHeight-this.panelY-20;if(o){const l=this.component?.getChromeHeight()??ge.HEADER_HEIGHT,d=i-l,h=d>0?s/d:1,u=Math.max(ms,Math.min(a,s+t)),p=Math.round(u/h),x=Math.max(bs,Math.min(r,p+l));this.panelWidth=u,this.panelHeight=x}else this.panelWidth=Math.max(ms,Math.min(a,s+t)),this.panelHeight=Math.max(bs,Math.min(r,i+n));this.component?.setSize(this.panelWidth,this.panelHeight)};onResizeEnd=()=>{this.onStateChange(this)};onSourceChange=e=>{const t=e.detail.source;if(this.currentSource=t,this.descriptor.setSource){const n=this.cameraResolver;this.descriptor.setSource(t,()=>n(t))}this.onStateChange(this)};onModeChange=e=>{const t=e.detail.mode;this.applyModeFromSelect(t),this.onStateChange(this)};onRangeChange=e=>{this.settings.valueRange=[e.detail.min,e.detail.max],this.onStateChange(this)};onCloseClick=()=>{this.onClose(this)};applyModeFromSelect(e){switch(e){case"color":this.settings.mode="color",this.settings.channel=0;break;case"depth":this.settings.mode="depth",this.settings.channel=0;break;case"r":this.settings.mode="single-channel",this.settings.channel=0;break;case"g":this.settings.mode="single-channel",this.settings.channel=1;break;case"b":this.settings.mode="single-channel",this.settings.channel=2;break;case"a":this.settings.mode="single-channel",this.settings.channel=3;break}}displayModeToSelectValue(e,t){return e==="depth"?"depth":e==="single-channel"?["r","g","b","a"][t]??"r":"color"}getSerializedState(){return{x:this.panelX,y:this.panelY,width:this.panelWidth,height:this.panelHeight,mode:this.settings.mode,channel:this.settings.channel,valueRange:[...this.settings.valueRange],source:this.currentSource}}applyState(e){if(this.panelX=e.x,this.panelY=e.y,this.panelWidth=e.width,this.panelHeight=e.height,this.settings.mode=e.mode,this.settings.channel=e.channel,this.settings.valueRange=[...e.valueRange],e.source&&(this.currentSource=e.source,this.descriptor.setSource)){const t=this.cameraResolver,n=e.source;this.descriptor.setSource(n,()=>t(n))}this.component&&(this.component.setPosition(this.panelX,this.panelY),this.component.setSize(this.panelWidth,this.panelHeight),this.component.setMode(this.displayModeToSelectValue(this.settings.mode,this.settings.channel)),this.component.setRange(this.settings.valueRange[0],this.settings.valueRange[1]),e.source&&this.component.setSource(e.source))}}const Rr=200;class Fr{id="buffer-viewer";name="Buffer Viewer";category="Buffers";group=null;context;enabled=!1;log;cameraResolver;registry=new Map;openPanels=new Map;blitter=null;listContainer=null;panelCounter=0;stateChangeTimer=null;autoShadowMapIds=[];init(e){this.context=e,this.log=e.createLogger("BufferViewerPlugin"),this.cameraResolver=t=>e.resolveCamera(t)}enable(){this.enabled||(this.enabled=!0,this.blitter=new Pr,this.registerShadowMaps(),this.updateListUI(),this.log.info("Buffer viewer enabled"))}disable(){if(this.enabled){this.enabled=!1,this.unregisterShadowMaps(),this.stateChangeTimer!==null&&(clearTimeout(this.stateChangeTimer),this.stateChangeTimer=null);for(const e of this.openPanels.values())e.destroy();this.openPanels.clear(),this.blitter?.dispose(),this.blitter=null,this.updateListUI(),this.log.info("Buffer viewer disabled")}}render(e){if(this.blitter)for(const t of this.openPanels.values())t.render(e,this.blitter)}createUI(e){const t=document.createElement("div");t.style.cssText="font-family: monospace; font-size: 11px; color: #e0e0e0;";const n=document.createElement("button");n.textContent="Tile All",n.title="Arrange all open panels in a grid",n.className="debug-button",n.style.cssText="width: 100%; margin-bottom: 8px;",n.addEventListener("click",()=>this.tileAll()),t.appendChild(n),this.listContainer=document.createElement("div"),t.appendChild(this.listContainer),e.appendChild(t),this.updateListUI()}updateUI(){this.updateListUI()}isEnabled(){return this.enabled}getState(){const e={};for(const[t,n]of this.openPanels)e[t]=n.getSerializedState();return{openPanels:e}}setState(e){const t=e;if(t?.openPanels){for(const n of this.openPanels.values())n.destroy();this.openPanels.clear();for(const[n,s]of Object.entries(t.openPanels)){const i=this.registry.get(n);if(!i)continue;const o=new fs(i,s.x,s.y,a=>this.closePanel(a.descriptor.id),()=>this.onPanelStateChange(),this.cameraResolver);o.create(),o.applyState(s),this.openPanels.set(n,o)}this.updateListUI()}}dispose(){this.disable(),this.registry.clear()}registerBuffer(e){this.registry.set(e.id,e),this.updateListUI()}unregisterBuffer(e){this.closePanel(e),this.registry.delete(e),this.updateListUI()}registerShadowMaps(){let e=0;this.context.scene.traverse(t=>{const n=t;if(!n.isLight||!n.shadow?.map?.texture)return;const s=`shadow-map-${e}`,i=n.name?`Shadow: ${n.name}`:`Shadow Map ${e}`;this.registerBuffer({id:s,name:i,category:"Shadows",getTexture:()=>n.shadow?.map?.texture??null,defaultMode:"depth",source:"light"}),this.autoShadowMapIds.push(s),e++})}unregisterShadowMaps(){for(const e of this.autoShadowMapIds)this.unregisterBuffer(e);this.autoShadowMapIds.length=0}getAvailableLeftEdge(){const e=document.querySelector("debug-panel[flyout-open]");if(e){const n=e.shadowRoot?.querySelector(".flyout");if(n)return n.getBoundingClientRect().right}const t=getComputedStyle(document.documentElement).getPropertyValue("--debug-panel-width").trim();return t&&parseInt(t,10)||60}getAvailableTopEdge(){const e=document.querySelector("perfs-gui");return e?e.getBoundingClientRect().bottom:0}openPanel(e,t=!1){if(this.openPanels.has(e))return;const n=this.registry.get(e);if(!n)return;const s=this.panelCounter*30,i=this.getAvailableLeftEdge(),o=this.getAvailableTopEdge(),a=i+20+s,r=o+20+s;this.panelCounter++;const l=new fs(n,a,r,d=>this.closePanel(d.descriptor.id),()=>this.onPanelStateChange(),this.cameraResolver);l.create(),this.openPanels.set(e,l),this.updateListUI(),t||this.context.history.recordAction(`Open buffer: ${n.name}`)}closePanel(e,t=!1){const n=this.openPanels.get(e);if(!n)return;const s=n.descriptor.name;n.destroy(),this.openPanels.delete(e),this.updateListUI(),t||this.context.history.recordAction(`Close buffer: ${s}`)}togglePanel(e){this.openPanels.has(e)?this.closePanel(e):(this.enabled||this.context.requestPluginActivation(this.id),this.openPanel(e))}tileAll(){const e=Array.from(this.openPanels.values());if(e.length===0)return;const t=Math.ceil(Math.sqrt(e.length)),n=Math.ceil(e.length/t),s=20,i=this.getAvailableLeftEdge(),o=this.getAvailableTopEdge(),a=i+s,r=o+s,l=window.innerWidth-i-s*2,d=window.innerHeight-o-s*2,h=Math.floor(l/t),u=Math.floor(d/n),p=8;e.forEach((x,f)=>{const C=f%t,m=Math.floor(f/t);x.setPosition(a+C*h+p,r+m*u+p),x.setSize(h-p*2,u-p*2)}),this.context.history.recordAction("Tile buffer panels")}onPanelStateChange(){this.stateChangeTimer!==null&&clearTimeout(this.stateChangeTimer),this.stateChangeTimer=setTimeout(()=>{this.stateChangeTimer=null,this.context.history.recordAction("Buffer panel layout")},Rr)}updateListUI(){if(!this.listContainer)return;this.listContainer.innerHTML="";const e=new Map;for(const t of this.registry.values()){const n=e.get(t.category)??[];n.push(t),e.set(t.category,n)}for(const[t,n]of e){const s=document.createElement("div");s.textContent=t,s.style.cssText="color:#888;font-size:9px;margin:8px 0 4px;",this.listContainer.appendChild(s);for(const i of n){const o=this.openPanels.has(i.id),a=document.createElement("div");a.style.cssText="display:flex;align-items:center;justify-content:space-between;padding:3px 0;cursor:pointer;",a.addEventListener("click",()=>this.togglePanel(i.id));const r=document.createElement("span");r.textContent=i.name,r.style.cssText=o?"color:#4a90d9;":"color:#ccc;";const l=document.createElement("span");l.textContent=o?"●":"○",l.style.cssText=`font-size:8px;color:${o?"#4a90d9":"#666"};`,a.appendChild(r),a.appendChild(l),this.listContainer.appendChild(a)}}if(this.registry.size===0){const t=document.createElement("div");t.textContent="No buffers registered",t.style.cssText="color:#666;font-style:italic;padding:8px 0;",this.listContainer.appendChild(t)}}}var Nr="varying vec3 vWorldPosition;varying vec3 vRayOrigin;varying vec3 vRayDirection;void main(){vec4 worldPos=modelMatrix*vec4(position,1.0);vWorldPosition=worldPos.xyz;vRayOrigin=cameraPosition;vRayDirection=normalize(worldPos.xyz-cameraPosition);gl_Position=projectionMatrix*viewMatrix*worldPos;}",Br="uniform vec3 uAudioPosition;uniform float uRefDistance;uniform float uMaxDistance;uniform float uRolloffFactor;uniform int uDistanceModel;uniform vec3 uColor;uniform float uOpacityScale;varying vec3 vWorldPosition;varying vec3 vRayOrigin;varying vec3 vRayDirection;float computeGain(float dist){float d=max(dist,uRefDistance);if(uDistanceModel==0){float range=uMaxDistance-uRefDistance;if(range<=0.0)return 1.0;return clamp(1.0-uRolloffFactor*(d-uRefDistance)/range,0.0,1.0);}else if(uDistanceModel==1){return uRefDistance/(uRefDistance+uRolloffFactor*(d-uRefDistance));}else{return pow(d/uRefDistance,-uRolloffFactor);}}vec2 intersectSphere(vec3 ro,vec3 rd,vec3 center,float radius){vec3 oc=ro-center;float b=dot(oc,rd);float c=dot(oc,oc)-radius*radius;float h=b*b-c;if(h<0.0)return vec2(-1.0);h=sqrt(h);return vec2(-b-h,-b+h);}void main(){vec3 ro=vRayOrigin;vec3 rd=normalize(vRayDirection);vec2 tOuter=intersectSphere(ro,rd,uAudioPosition,uMaxDistance);if(tOuter.x<0.0&&tOuter.y<0.0){discard;}float tEnter=max(tOuter.x,0.0);float tExit=tOuter.y;if(tExit<0.0)discard;const int MAX_STEPS=32;float stepSize=(tExit-tEnter)/float(MAX_STEPS);float accumAlpha=0.0;vec3 accumColor=vec3(0.0);for(int i=0;i<MAX_STEPS;i++){float t=tEnter+(float(i)+0.5)*stepSize;vec3 pos=ro+rd*t;float dist=length(pos-uAudioPosition);if(dist>uMaxDistance)continue;float gain=computeGain(dist);float density=gain*uOpacityScale*0.8;float alpha=density*stepSize;accumColor+=(1.0-accumAlpha)*alpha*uColor*gain;accumAlpha+=(1.0-accumAlpha)*alpha;if(accumAlpha>0.95)break;}if(accumAlpha<0.001)discard;gl_FragColor=vec4(accumColor,accumAlpha);}";function vs(c){switch(c){case"linear":return 0;case"exponential":return 2;default:return 1}}class $r{scene;entries=new Map;sphereGeometry;log;color=new N(52394);opacityScale=1.5;constructor(e){this.scene=e,this.log=new pi("AudioVisualizer",gi.ALL,{root:"Debug"}),this.sphereGeometry=new ye(1,32,24),this.log.info("Created for scene: %s",e.name||"unnamed")}calculateAudibleRange(e,t=.05){const n=e.getRefDistance(),s=e.getRolloffFactor(),i=e.getMaxDistance(),o=e.getDistanceModel();if(o==="linear")return i;if(o==="inverse"){const a=n+(n/t-n)/s;return Math.min(a,50)}else{const a=n*Math.pow(t,-1/s);return Math.min(a,50)}}show(e,t){if(this.entries.has(e)){this.log.warn("Already showing: %s",e);return}t.updateWorldMatrix(!0,!1);const n=new v;t.getWorldPosition(n);const s=t.getRefDistance(),i=this.calculateAudibleRange(t),o=new ye(1,24,16),a=new ce({color:this.color,transparent:!0,opacity:.4,depthWrite:!1}),r=new S(o,a);r.name=`__debug_audio_viz_inner_${e}`,r.scale.setScalar(s),r.position.copy(n),r.frustumCulled=!1;const l=new ye(1,32,24),d=this.createMaterial(t,i),h=new S(l,d);h.name=`__debug_audio_viz_outer_${e}`,h.scale.setScalar(i),h.position.copy(n),h.frustumCulled=!1,this.scene.add(r),this.scene.add(h),this.entries.set(e,{outerMesh:h,outerMaterial:d,innerMesh:r,innerMaterial:a,audio:t}),this.log.info('Show "%s": pos=(%s, %s, %s) refDist=%d outerDist=%d',e,n.x.toFixed(2),n.y.toFixed(2),n.z.toFixed(2),s,i.toFixed(2))}hide(e){const t=this.entries.get(e);t&&(this.scene.remove(t.outerMesh),this.scene.remove(t.innerMesh),t.outerMesh.geometry.dispose(),t.innerMesh.geometry.dispose(),t.outerMaterial.dispose(),t.innerMaterial.dispose(),this.entries.delete(e),this.log.info('Hide "%s"',e))}isVisible(e){return this.entries.has(e)}toggle(e,t){return this.entries.has(e)?(this.hide(e),!1):(this.show(e,t),!0)}update(){const e=new v;for(const t of this.entries.values()){const{outerMesh:n,outerMaterial:s,innerMesh:i,audio:o}=t;o.getWorldPosition(e),n.position.copy(e),i.position.copy(e);const a=o.getRefDistance(),r=this.calculateAudibleRange(o);s.uniforms.uAudioPosition.value.copy(e),s.uniforms.uRefDistance.value=a,s.uniforms.uMaxDistance.value=r,s.uniforms.uRolloffFactor.value=o.getRolloffFactor(),s.uniforms.uDistanceModel.value=vs(o.getDistanceModel()),i.scale.setScalar(a),n.scale.setScalar(r)}}createMaterial(e,t){const n=new v;return e.getWorldPosition(n),new de({vertexShader:Nr,fragmentShader:Br,uniforms:{uAudioPosition:{value:n.clone()},uRefDistance:{value:e.getRefDistance()},uMaxDistance:{value:t},uRolloffFactor:{value:e.getRolloffFactor()},uDistanceModel:{value:vs(e.getDistanceModel())},uColor:{value:this.color.clone()},uOpacityScale:{value:this.opacityScale}},transparent:!0,side:Gt,depthWrite:!1})}dispose(){for(const e of this.entries.keys())this.hide(e);this.sphereGeometry.dispose()}}class Hr{id="audio-visualizer";name="Audio Falloff";category="Scene Analysis";group=null;context;log;visualizer=null;enabled=!1;visualizedSources=new Set;audioSources=new Map;uiContainer=null;init(e){this.context=e,this.log=e.createLogger("AudioVisualizerPlugin")}enable(){if(!this.enabled){this.enabled=!0,this.visualizer=new $r(this.context.scene),this.refreshAudioSources();for(const e of this.visualizedSources){const t=this.audioSources.get(e);t&&this.visualizer.show(e,t)}this.renderUI(),this.log.info("Enabled with %d sources",this.audioSources.size)}}disable(){this.enabled&&(this.enabled=!1,this.visualizer?.dispose(),this.visualizer=null,this.log.info("Disabled"))}update(e){this.visualizer?.update()}isEnabled(){return this.enabled}createUI(e){this.uiContainer=e,this.renderUI()}updateUI(){const e=this.audioSources.size;this.refreshAudioSources(),this.audioSources.size!==e&&this.renderUI()}getState(){return{visualizedSources:Array.from(this.visualizedSources)}}setState(e){const t=e;if(t.visualizedSources){if(this.visualizedSources=new Set(t.visualizedSources),this.enabled&&this.visualizer)for(const n of this.visualizedSources){const s=this.audioSources.get(n);s&&!this.visualizer.isVisible(n)&&this.visualizer.show(n,s)}this.renderUI()}}dispose(){this.disable(),this.audioSources.clear(),this.visualizedSources.clear()}refreshAudioSources(){const e=this.context.engine.audio;if(!e)return;this.audioSources.clear();const t=e.items;for(const[n,s]of Object.entries(t))s instanceof Vt&&this.audioSources.set(n,s)}renderUI(){if(!this.uiContainer)return;const e=Array.from(this.audioSources.entries()).sort((t,n)=>t[0].localeCompare(n[0]));if(e.length===0){this.uiContainer.innerHTML=`
                <div class="debug-text-muted" style="font-size: 11px; padding: 8px 0;">
                    No positional audio sources found.
                </div>
            `;return}this.uiContainer.innerHTML=`
            <div class="audio-viz-sources">
                ${e.map(([t])=>this.renderSourceRow(t)).join("")}
            </div>
            <div class="audio-viz-actions">
                <button class="debug-button-small audio-viz-all">Show All</button>
                <button class="debug-button-small audio-viz-none">Hide All</button>
            </div>
            <style>
                .audio-viz-sources { display: flex; flex-direction: column; gap: 4px; }
                .audio-viz-actions { margin-top: 8px; display: flex; gap: 6px; }
                .audio-viz-actions .debug-button-small { flex: 1; }
                .audio-viz-row { display: flex; align-items: center; gap: 6px; }
                .audio-viz-toggle {
                    width: 20px; height: 20px; padding: 2px;
                    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
                    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
                    border-radius: var(--debug-radius, 4px);
                    color: var(--debug-text-muted, #888);
                    cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                    transition: all 0.2s;
                }
                .audio-viz-toggle:hover { border-color: var(--debug-accent, #4a90d9); }
                .audio-viz-toggle.active {
                    background: var(--debug-accent, #4a90d9);
                    border-color: var(--debug-accent, #4a90d9);
                    color: white;
                }
                .audio-viz-name {
                    font-size: 11px; color: var(--debug-text, #e8eaed); flex: 1;
                    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
                }
            </style>
        `,this.uiContainer.querySelectorAll(".audio-viz-toggle").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.name;this.toggleVisualization(n)})}),this.uiContainer.querySelector(".audio-viz-all")?.addEventListener("click",()=>{this.showAll()}),this.uiContainer.querySelector(".audio-viz-none")?.addEventListener("click",()=>{this.hideAll()})}renderSourceRow(e){return`
            <div class="audio-viz-row">
                <button class="audio-viz-toggle ${this.visualizedSources.has(e)?"active":""}" data-name="${e}">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="3"/>
                        <circle cx="12" cy="12" r="7" stroke-dasharray="2 2"/>
                    </svg>
                </button>
                <span class="audio-viz-name">${e}</span>
            </div>
        `}toggleVisualization(e){const t=this.audioSources.get(e);if(!t||!this.visualizer){this.log.warn("Cannot toggle: audio=%o, visualizer=%o",!!t,!!this.visualizer);return}this.visualizedSources.has(e)?(this.visualizer.hide(e),this.visualizedSources.delete(e),this.log.info("Hidden: %s",e)):(this.visualizer.show(e,t),this.visualizedSources.add(e),this.log.info("Shown: %s (maxDist=%d, refDist=%d)",e,t.getMaxDistance(),t.getRefDistance())),this.renderUI(),this.context.history.recordAction(`Toggle audio visualization: ${e}`)}showAll(){if(this.visualizer){for(const[e,t]of this.audioSources)this.visualizedSources.has(e)||(this.visualizer.show(e,t),this.visualizedSources.add(e));this.renderUI(),this.context.history.recordAction("Show all audio visualizations")}}hideAll(){if(this.visualizer){for(const e of this.visualizedSources)this.visualizer.hide(e);this.visualizedSources.clear(),this.renderUI(),this.context.history.recordAction("Hide all audio visualizations")}}}const ys=180,be=16,Or=.3,xs={x:{dir:new v(1,0,0),color:16729156},"-x":{dir:new v(-1,0,0),color:16729156},y:{dir:new v(0,1,0),color:4521796},"-y":{dir:new v(0,-1,0),color:4521796},z:{dir:new v(0,0,1),color:4491519},"-z":{dir:new v(0,0,-1),color:4491519}};class Vr extends _{id="orientation-gizmo";name="Orientation Gizmo";icon="compass";gizmoScene=null;gizmoCamera=null;gizmoGroup=null;container=null;raycaster;pointer=new Y;axisCones=new Map;axisLabels=new Map;rings=new Map;centerSphere=null;originalColors=new Map;hoveredObject=null;mode="none";isDragging=!1;dragStart=new Y;startSpherical=new _t;orbitTarget=new v;isAnimating=!1;animationDuration=Or;position="bottom-right";constructor(){super(),this.raycaster=new ct}enable(){this.createGizmoScene(),this.createContainer(),this.addEventListeners()}disable(){this.removeEventListeners(),this.destroyContainer(),this.destroyGizmoScene()}createGizmoScene(){this.gizmoScene=new Cn,this.gizmoScene.background=null,this.gizmoCamera=new zt(50,1,.1,100),this.gizmoCamera.position.set(0,0,5),this.gizmoCamera.lookAt(0,0,0),this.gizmoGroup=new mi,this.gizmoScene.add(this.gizmoGroup),this.createCenterSphere(),this.createAxes(),this.createRings()}createCenterSphere(){const e=new ye(.15,16,16),t=new ce({color:8947848});this.centerSphere=new S(e,t),this.centerSphere.name="center",this.centerSphere.userData.interactive=!0,this.centerSphere.userData.action="orbit",this.gizmoGroup.add(this.centerSphere),this.originalColors.set(this.centerSphere,new N(8947848))}createAxes(){const o=new W(.04,.04,2.3,8),a=new bi(.12,.25,12),r=new ye(.08,12,12),l=1.15+.25+.12;for(const[d,h]of Object.entries(xs)){const u=d,p=d.startsWith("-"),x=h.dir.clone(),f=this.createTextSprite(d,h.color);if(f.position.copy(x.clone().multiplyScalar(l+.2)),f.name=`text-${d}`,f.userData.interactive=!0,f.userData.action="snap",f.userData.axis=u,this.gizmoGroup.add(f),p){const C=new ce({color:h.color}),m=new S(r,C);m.position.copy(x.clone().multiplyScalar(l)),m.name=`snap-${d}`,m.userData.interactive=!0,m.userData.action="snap",m.userData.axis=u,this.gizmoGroup.add(m),this.axisCones.set(u,m),this.originalColors.set(m,new N(h.color))}else{const C=new ce({color:h.color}),m=new S(o,C.clone());m.position.set(0,0,0),m.name=`shaft-${d}`,d==="x"?m.rotation.z=-Math.PI/2:d==="z"&&(m.rotation.x=Math.PI/2),this.gizmoGroup.add(m),this.originalColors.set(m,new N(h.color));const w=new S(a,C.clone());this.positionOnAxis(w,x,1.15+.25/2,d),w.name=`cone-${d}`,w.userData.interactive=!0,w.userData.action="snap",w.userData.axis=u,this.gizmoGroup.add(w),this.axisCones.set(u,w),this.originalColors.set(w,new N(h.color));const E=new S(r,C.clone());this.positionOnAxis(E,x,l,d),E.name=`label-${d}`,E.userData.interactive=!0,E.userData.action="snap",E.userData.axis=u,this.gizmoGroup.add(E),this.axisLabels.set(u,E),this.originalColors.set(E,new N(h.color))}}}positionOnAxis(e,t,n,s){e.position.copy(t.clone().multiplyScalar(n)),s==="x"?e.rotation.z=-Math.PI/2:s==="z"&&(e.rotation.x=Math.PI/2)}createTextSprite(e,t){const n=document.createElement("canvas"),s=128;n.width=s,n.height=s;const i=n.getContext("2d");i.clearRect(0,0,s,s);const o="#"+t.toString(16).padStart(6,"0");i.font="900 64px Arial",i.textAlign="center",i.textBaseline="middle",i.strokeStyle="#000000",i.lineWidth=6,i.strokeText(e.toUpperCase(),s/2,s/2),i.fillStyle=o,i.fillText(e.toUpperCase(),s/2,s/2);const a=new fi(n);a.colorSpace=As;const r=new vi({map:a,transparent:!0,depthTest:!1}),l=new Bn(r);return l.scale.set(.7,.7,1),l}createRings(){const n=new Pe(1.15,.12,16,64),s=[{name:"ring-x",color:16729156,rotation:[0,Math.PI/2,0]},{name:"ring-y",color:4521796,rotation:[Math.PI/2,0,0]},{name:"ring-z",color:4491519,rotation:[0,0,0]}];for(const i of s){const o=new ce({color:i.color,side:Gt}),a=new S(n,o);a.rotation.set(i.rotation[0],i.rotation[1],i.rotation[2]),a.name=i.name,a.userData.interactive=!0,a.userData.action=i.name,this.gizmoGroup.add(a),this.rings.set(i.name,a),this.originalColors.set(a,new N(i.color))}}destroyGizmoScene(){this.gizmoGroup&&this.gizmoGroup.traverse(e=>{if(e instanceof S)e.geometry.dispose(),e.material instanceof ce&&e.material.dispose();else if(e instanceof Bn){const t=e.material;t.map?.dispose(),t.dispose()}}),this.axisCones.clear(),this.axisLabels.clear(),this.rings.clear(),this.originalColors.clear(),this.centerSphere=null,this.gizmoScene=null,this.gizmoCamera=null,this.gizmoGroup=null}createContainer(){this.container=document.createElement("div"),this.container.className="debug-orientation-gizmo",this.container.style.cssText=`
            position: fixed;
            width: ${ys}px;
            height: ${ys}px;
            pointer-events: auto;
            z-index: 9999;
            cursor: grab;
            background: transparent;
        `,document.body.appendChild(this.container)}destroyContainer(){this.container&&(this.container.remove(),this.container=null)}addEventListeners(){this.container&&(this.container.addEventListener("pointerdown",this.onPointerDown),this.container.addEventListener("pointermove",this.onPointerMove),this.container.addEventListener("pointerup",this.onPointerUp),this.container.addEventListener("pointerleave",this.onPointerLeave))}removeEventListeners(){this.container&&(this.container.removeEventListener("pointerdown",this.onPointerDown),this.container.removeEventListener("pointermove",this.onPointerMove),this.container.removeEventListener("pointerup",this.onPointerUp),this.container.removeEventListener("pointerleave",this.onPointerLeave),document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp))}getPointerCoords(e){if(!this.container)return new Y;const t=this.container.getBoundingClientRect();return new Y((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}raycast(e){if(!this.gizmoScene||!this.gizmoCamera||!this.gizmoGroup)return null;this.gizmoGroup.updateMatrixWorld(!0),this.raycaster.setFromCamera(e,this.gizmoCamera);const t=this.raycaster.intersectObjects(this.gizmoGroup.children,!0);for(const n of t)if(n.object.userData.interactive)return n.object;return null}onPointerDown=e=>{if(e.preventDefault(),e.stopPropagation(),!this.manager.camera.isEnabled())return;const t=this.getPointerCoords(e),n=this.raycast(t);if(n){const s=n.userData.action;if(s==="snap"){const i=n.userData.axis;this.snapToAxis(i)}else(s==="orbit"||s?.startsWith("ring-"))&&(this.isDragging=!0,this.mode=s,this.dragStart.set(e.clientX,e.clientY),this.captureStartState(),this.container.style.cursor="grabbing",document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp))}else this.isDragging=!0,this.mode="orbit",this.dragStart.set(e.clientX,e.clientY),this.captureStartState(),this.container.style.cursor="grabbing",document.addEventListener("pointermove",this.onDocumentPointerMove),document.addEventListener("pointerup",this.onDocumentPointerUp)};onPointerMove=e=>{if(this.isDragging)return;const t=this.getPointerCoords(e),n=this.raycast(t);this.updateHover(n),this.container&&(n?.userData.action==="snap"?this.container.style.cursor="pointer":this.container.style.cursor="grab")};onPointerUp=e=>{this.endDrag()};onPointerLeave=e=>{this.isDragging||this.updateHover(null)};onDocumentPointerMove=e=>{if(!this.isDragging)return;const t=e.clientX-this.dragStart.x,n=e.clientY-this.dragStart.y;this.applyOrbit(t,n)};onDocumentPointerUp=e=>{this.endDrag()};captureStartState(){const e=this.manager.camera.instance,t=this.manager.camera.getTargetArray();this.orbitTarget.set(t[0],t[1],t[2]);const n=e.position.clone().sub(this.orbitTarget);this.startSpherical.setFromVector3(n)}applyOrbit(e,t){let s=this.startSpherical.theta,i=this.startSpherical.phi;switch(this.mode){case"orbit":s=this.startSpherical.theta-e*.005,i=this.startSpherical.phi+t*.005;break;case"ring-x":i=this.startSpherical.phi+t*.005;break;case"ring-y":s=this.startSpherical.theta-e*.005;break;case"ring-z":i=this.startSpherical.phi+t*.005;break}i=Math.max(.01,Math.min(Math.PI-.01,i));const o=new _t(this.startSpherical.radius,i,s),a=new v().setFromSpherical(o),r=this.orbitTarget.clone().add(a);this.manager.camera.setPosition([r.x,r.y,r.z])}endDrag(){this.isDragging=!1,this.mode="none",this.container&&(this.container.style.cursor="grab"),document.removeEventListener("pointermove",this.onDocumentPointerMove),document.removeEventListener("pointerup",this.onDocumentPointerUp)}updateHover(e){if(this.hoveredObject&&this.hoveredObject!==e){const t=this.originalColors.get(this.hoveredObject);t&&this.hoveredObject instanceof S&&this.hoveredObject.material.color.copy(t)}if(this.hoveredObject=e,e instanceof S){const t=this.originalColors.get(e);if(t){const n=t.clone().multiplyScalar(1.5);e.material.color.copy(n)}}}snapToAxis(e){if(!this.manager.camera.isEnabled())return;const t=xs[e],n=this.manager.camera.instance,s=this.manager.camera.getTargetArray(),i=new v(s[0],s[1],s[2]),o=n.position.distanceTo(i),a=i.clone().add(t.dir.clone().multiplyScalar(o));this.animateCameraSnap(a,i)}animateCameraSnap(e,t){const s=this.manager.camera.instance.position.clone(),i=performance.now()/1e3;this.isAnimating=!0;const o=()=>{const a=performance.now()/1e3-i,r=Math.min(1,a/this.animationDuration),l=1-Math.pow(1-r,3),d=s.clone().lerp(e,l);this.manager.camera.setPosition([d.x,d.y,d.z]),r<1?requestAnimationFrame(o):(this.manager.camera.setPosition([e.x,e.y,e.z]),this.isAnimating=!1)};requestAnimationFrame(o)}update(e){if(!this.gizmoGroup)return;const t=this.engine.getActiveCamera();this.gizmoGroup.quaternion.copy(t.quaternion).invert(),this.container&&this.updatePosition()}updatePosition(){if(!this.container)return;this.container.style.top="",this.container.style.bottom="",this.container.style.left="",this.container.style.right="";const e=document.querySelector("logs-panel[expanded]"),t=e?e.getBoundingClientRect().height:0,n=document.querySelector("perfs-gui"),s=n?n.getBoundingClientRect().height:0,i=document.querySelector(".tp-dfwv"),o=i?window.innerWidth-i.getBoundingClientRect().left+be:0,a=document.querySelector("debug-panel");let r=0;if(a)if(a.hasAttribute("flyout-open")){const p=a.shadowRoot?.querySelector(".flyout");p&&(r=p.getBoundingClientRect().right)}else r=a.getBoundingClientRect().right;const l=document.querySelector("debug-info-panel");let d=0;if(l)if(l.hasAttribute("flyout-open")){const p=l.shadowRoot?.querySelector(".flyout");p&&(d=window.innerWidth-p.getBoundingClientRect().left)}else d=window.innerWidth-l.getBoundingClientRect().left;const h=this.position.startsWith("bottom"),u=this.position.endsWith("left");if(h){const p=Math.max(be,t+be);this.container.style.bottom=`${p}px`}else{const p=u&&s>0?s+be:be;this.container.style.top=`${p}px`}if(u){const p=Math.max(be,r+be);this.container.style.left=`${p}px`}else{let p=be;d>0&&(p=d+be),!h&&o>0&&(p=Math.max(p,o)),this.container.style.right=`${p}px`}}render(e){if(!this.container||!this.gizmoScene||!this.gizmoCamera)return;const t=e.domElement,n=this.container.getBoundingClientRect(),s=t.getBoundingClientRect(),i=e.getSize(new Y),o=i.x,a=i.y,r=o/s.width,l=a/s.height,d=(n.left-s.left)*r,h=(s.bottom-n.bottom)*l,u=n.width*r,p=n.height*l,x=new Ne,f=new Ne;e.getViewport(x),e.getScissor(f);const C=e.getScissorTest(),m=e.autoClear;e.setViewport(d,h,u,p),e.setScissor(d,h,u,p),e.setScissorTest(!0),e.autoClear=!1,e.clear(!1,!0,!1),e.render(this.gizmoScene,this.gizmoCamera),e.setViewport(x),e.setScissor(f),e.setScissorTest(C),e.autoClear=m}createUI(e){const t=document.createElement("div");t.className="debug-row",t.innerHTML='<span class="debug-label">Position</span>';const n=document.createElement("select");n.className="debug-select";const s=["bottom-right","bottom-left","top-right","top-left"];for(const o of s){const a=document.createElement("option");a.value=o,a.textContent=o.replace("-"," "),a.selected=o===this.position,n.appendChild(a)}n.addEventListener("change",()=>{const o=n.value;this.position!==o&&(this.position=o,this.updatePosition(),this.manager.history.recordAction("Gizmo position"))}),t.appendChild(n),e.appendChild(t);const i=document.createElement("div");i.style.fontSize="10px",i.style.opacity="0.7",i.style.marginTop="8px",i.innerHTML=`
            <div style="margin-bottom: 4px;"><b>Click</b> axis to snap view</div>
            <div style="margin-bottom: 4px;"><b>Drag</b> to orbit camera</div>
            <div style="margin-bottom: 8px;"><b>Drag ring</b> to constrain orbit</div>
            <div>X = <span style="color:#ff4444">Red</span></div>
            <div>Y = <span style="color:#44ff44">Green</span></div>
            <div>Z = <span style="color:#4488ff">Blue</span></div>
        `,e.appendChild(i)}getState(){return{position:this.position}}setState(e){const t=e;t&&t.position&&t.position!==this.position&&(this.position=t.position,this.updatePosition())}dispose(){this.disable()}}function qr(c){const e=[];for(const[t,n]of c.entries())n instanceof de&&e.push({id:t,material:n});return e.sort((t,n)=>t.id.localeCompare(n.id)),e}function Ur(c){const e=[];for(const[t,n]of c.entries())typeof n.applyShaderEdit=="function"&&e.push({id:t,effect:n});return e.sort((t,n)=>t.id.localeCompare(n.id)),e}Me.register();function _r(c,e,t){const n=e.value;return n==null?ws(c,"null"):typeof n=="boolean"?Gr(c,e,t):typeof n=="number"?jr(c,e,t):n instanceof N?Wr(c,e,t):n instanceof Y?bn(c,e,2,t):n instanceof v?bn(c,e,3,t):n instanceof Ne?bn(c,e,4,t):n instanceof yi?Cs(c,n.elements,3):n instanceof Pt?Cs(c,n.elements,4):n instanceof xi?Xr(c,n):ws(c,Zr(n))}function jr(c,e,t){const n=Yt(c),s=document.createElement("input");return s.type="number",s.className="debug-input uniform-number",s.value=String(e.value),s.step=Yr(e.value),s.addEventListener("input",()=>{const i=parseFloat(s.value);isNaN(i)||(e.value=i,t(c,i))}),n.appendChild(s),n}function Gr(c,e,t){const n=Yt(c),s=document.createElement("input");return s.type="checkbox",s.checked=e.value,s.style.accentColor="var(--debug-accent, #4a90d9)",s.addEventListener("change",()=>{e.value=s.checked,t(c,s.checked)}),n.appendChild(s),n}function Wr(c,e,t){const n=Yt(c),s=e.value,i=document.createElement("input");return i.type="color",i.className="uniform-color",i.value=`#${s.getHexString()}`,i.addEventListener("input",()=>{s.set(i.value),t(c,s)}),n.appendChild(i),n}function bn(c,e,t,n){const s=document.createElement("div");s.className="uniform-row uniform-vector-row";const i=document.createElement("span");i.className="debug-info-label uniform-label",i.textContent=c,i.title=`vec${t}`,s.appendChild(i);const o=document.createElement("div");o.className="uniform-vector-inputs";const a=e.value,r=["x","y","z","w"].slice(0,t);for(const l of r){const d=document.createElement("input");d.type="number",d.className="debug-input uniform-vector-input",d.value=String(a[l]??0),d.step="0.01",d.title=l,d.placeholder=l,d.addEventListener("input",()=>{const h=parseFloat(d.value);isNaN(h)||(a[l]=h,n(c,a))}),o.appendChild(d)}return s.appendChild(o),s}function Cs(c,e,t){const n=document.createElement("div");n.className="uniform-row uniform-matrix-row";const s=document.createElement("span");s.className="debug-info-label uniform-label",s.textContent=`${c} (mat${t})`,n.appendChild(s);const i=document.createElement("div");i.className=`uniform-matrix-grid uniform-matrix-${t}`;for(let o=0;o<t;o++)for(let a=0;a<t;a++){const r=document.createElement("span");r.className="uniform-matrix-cell",r.textContent=e[o*t+a].toFixed(2),i.appendChild(r)}return n.appendChild(i),n}function Xr(c,e){const t=document.createElement("div");t.className="uniform-row uniform-texture-row";const n=document.createElement("span");n.className="debug-info-label uniform-label",n.textContent=c,t.appendChild(n);const s=document.createElement("debug-texture-preview");return s.setTexture(e,c),t.appendChild(s),t}function ws(c,e){const t=Yt(c),n=document.createElement("span");return n.className="debug-info-value",n.textContent=e,t.appendChild(n),t}function Yt(c){const e=document.createElement("div");e.className="uniform-row debug-info-row";const t=document.createElement("span");return t.className="debug-info-label uniform-label",t.textContent=c,e.appendChild(t),e}function Yr(c){const e=Math.abs(c);return e===0||e>=100?"1":e>=10?"0.1":e>=1?"0.01":"0.001"}function Zr(c){return Array.isArray(c)?`Array[${c.length}]`:c instanceof Float32Array||c instanceof Float64Array?`${c.constructor.name}[${c.length}]`:typeof c=="object"?"{...}":String(c)}const Kr="__debug_shader_";class Qr{scene;spawned=[];constructor(e){this.scene=e}spawn(e,t,n){const s=this.createGeometry(n),i=new S(s,e);return i.name=`${Kr}${t}_${n.type}`,this.scene.add(i),this.spawned.push({mesh:i,materialId:t,config:n}),i}remove(e){if(e<0||e>=this.spawned.length)return;const t=this.spawned[e];this.scene.remove(t.mesh),t.mesh.geometry.dispose(),this.spawned.splice(e,1)}removeAll(){for(const e of this.spawned)this.scene.remove(e.mesh),e.mesh.geometry.dispose();this.spawned.length=0}getAll(){return this.spawned}get count(){return this.spawned.length}createGeometry(e){const t=e.segments;switch(e.type){case"plane":return new Tt(1,1,t,t);case"sphere":return new ye(.5,t,t);case"box":return new q(1,1,1,t,t,t);case"circle":return new Ci(.5,t);case"cylinder":return new W(.5,.5,1,t,t);case"torus":return new Pe(.4,.15,t,t*2)}}dispose(){this.removeAll()}}const Jr=`<div class="shader-tool-panel">
    <div class="panel-header">
        <span class="panel-title">Shader Materials</span>
        <span class="material-count"></span>
        <button class="refresh-btn" title="Refresh material list">⟳</button>
    </div>
    <input type="text" class="debug-input search-input" placeholder="Filter materials..." spellcheck="false">
    <div class="material-list"></div>
    <div class="primitives-section">
        <div class="primitives-header">Primitives</div>
        <div class="primitives-controls">
            <div class="primitives-row">
                <select class="debug-select geo-select">
                    <option value="plane">Plane</option>
                    <option value="sphere">Sphere</option>
                    <option value="box">Box</option>
                    <option value="circle">Circle</option>
                    <option value="cylinder">Cylinder</option>
                    <option value="torus">Torus</option>
                </select>
                <label class="segments-label">Seg
                    <input type="number" class="debug-input segments-input" value="16" min="1" max="256" step="1">
                </label>
            </div>
            <div class="primitives-row">
                <button class="debug-button spawn-btn">Spawn</button>
                <button class="debug-button remove-all-btn">Remove All</button>
            </div>
        </div>
        <div class="spawned-list"></div>
    </div>
</div>
`,el=`:host {
    display: block;
    font-family: var(--debug-font, monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
	text-transform: initial;
}

.shader-tool-panel {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.panel-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 0;
}

.panel-title {
    font-size: 11px;
    font-weight: 600;
    color: var(--debug-text, #e0e0e0);
}

.material-count {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
}

.refresh-btn {
    margin-left: auto;
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 14px;
    padding: 2px 4px;
    border-radius: var(--debug-radius, 4px);
    line-height: 1;
}

.refresh-btn:hover {
    color: var(--debug-accent, #4a90d9);
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.search-input {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 2px;
}

.material-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 60vh;
    overflow-y: auto;
}

:host-context([flyout-open]):host-context(body.logs-panel-expanded) .material-list {
    max-height: 40vh;
}

/* Primitives section */
.primitives-section {
    border-top: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    padding-top: 6px;
    margin-top: 4px;
}

.primitives-header {
    font-size: 11px;
    font-weight: 600;
    color: var(--debug-text-muted, #888);
    margin-bottom: 4px;
    letter-spacing: 0.5px;
}

.primitives-controls {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.primitives-row {
    display: flex;
    align-items: center;
    gap: 4px;
}

.primitives-row .debug-button {
    flex: 1;
}

.geo-select {
    flex: 1;
}

.segments-label {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 10px;
    color: var(--debug-text-muted, #888);
}

.segments-input {
    width: 42px !important;
}

.spawned-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-top: 4px;
}

.spawned-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 4px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border-radius: var(--debug-radius, 4px);
    font-size: 10px;
}

.spawned-item-name {
    color: var(--debug-text-muted, #888);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.spawned-item-remove {
    background: none;
    border: none;
    color: var(--debug-error, #f44336);
    cursor: pointer;
    font-size: 12px;
    padding: 0 2px;
    line-height: 1;
}

.spawned-item-remove:hover {
    color: #ff6659;
}
`;class De extends HTMLElement{static tagName="debug-shader-tool-panel";shadow;materialList=null;countLabel=null;searchInput=null;geoSelect=null;segmentsInput=null;spawnedList=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${K}${el}</style>${Jr}`,this.materialList=this.shadow.querySelector(".material-list"),this.countLabel=this.shadow.querySelector(".material-count"),this.searchInput=this.shadow.querySelector(".search-input"),this.geoSelect=this.shadow.querySelector(".geo-select"),this.segmentsInput=this.shadow.querySelector(".segments-input"),this.spawnedList=this.shadow.querySelector(".spawned-list")}setupEventListeners(){this.shadow.querySelector(".refresh-btn")?.addEventListener("click",this.onRefresh),this.shadow.querySelector(".spawn-btn")?.addEventListener("click",this.onSpawn),this.shadow.querySelector(".remove-all-btn")?.addEventListener("click",this.onRemoveAll),this.searchInput?.addEventListener("input",this.onSearchInput)}cleanupEventListeners(){this.shadow.querySelector(".refresh-btn")?.removeEventListener("click",this.onRefresh),this.shadow.querySelector(".spawn-btn")?.removeEventListener("click",this.onSpawn),this.shadow.querySelector(".remove-all-btn")?.removeEventListener("click",this.onRemoveAll),this.searchInput?.removeEventListener("input",this.onSearchInput)}onRefresh=()=>{this.dispatchEvent(new CustomEvent("refresh",{bubbles:!0,composed:!0}))};onSpawn=()=>{this.dispatchEvent(new CustomEvent("spawn-primitive",{bubbles:!0,composed:!0,detail:{type:this.geoSelect?.value??"plane",segments:parseInt(this.segmentsInput?.value??"16",10)}}))};onRemoveAll=()=>{this.dispatchEvent(new CustomEvent("remove-all-primitives",{bubbles:!0,composed:!0}))};onSearchInput=()=>{const e=this.searchInput?.value.toLowerCase().trim()??"";if(!this.materialList)return;let t=0;for(const n of Array.from(this.materialList.children)){const s=n;if(!s.getMaterialId)continue;const i=s.getMaterialId().toLowerCase(),o=!e||i.includes(e);s.style.display=o?"":"none",o&&t++}this.setMaterialCount(t)};getMaterialListContainer(){return this.materialList}setMaterialCount(e){this.countLabel&&(this.countLabel.textContent=`(${e})`)}updateSpawnedList(e){if(this.spawnedList){this.spawnedList.innerHTML="";for(let t=0;t<e.length;t++){const n=document.createElement("div");n.className="spawned-item";const s=document.createElement("span");s.className="spawned-item-name",s.textContent=e[t].name;const i=document.createElement("button");i.className="spawned-item-remove",i.textContent="✕",i.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("remove-primitive",{bubbles:!0,composed:!0,detail:{index:t}}))}),n.appendChild(s),n.appendChild(i),this.spawnedList.appendChild(n)}}}static register(){customElements.get(De.tagName)||customElements.define(De.tagName,De)}}De.register();const tl=`<div class="material-card">
    <div class="card-header">
        <span class="card-chevron">▶</span>
        <span class="card-title"></span>
        <span class="card-badge"></span>
    </div>
    <div class="card-body">
        <div class="card-section uniforms-section">
            <div class="section-title">Uniforms</div>
            <div class="uniforms-container"></div>
        </div>
        <div class="card-section attributes-section">
            <div class="section-title">Attributes</div>
            <div class="attributes-container"></div>
        </div>
        <div class="card-section shader-actions">
            <button class="debug-button edit-shaders-btn">Shaders</button>
        </div>
    </div>
</div>
`,nl=`:host {
    display: block;
    font-family: var(--debug-font, monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    text-transform: none;
    letter-spacing: normal;
}

.material-card {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.25));
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    overflow: hidden;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px 8px;
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
}

.card-header:hover {
    background: var(--debug-bg-hover, rgba(50, 50, 50, 0.95));
}

.card-chevron {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
    transition: transform 0.15s;
    width: 10px;
    text-align: center;
}

:host([expanded]) .card-chevron {
    transform: rotate(90deg);
}

.card-title {
    font-size: 11px;
    font-weight: 500;
    color: var(--debug-text, #e0e0e0);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
}

.card-badge {
    font-size: 9px;
    color: var(--debug-text-muted, #888);
    background: rgba(255, 255, 255, 0.05);
    padding: 1px 5px;
    border-radius: 8px;
    white-space: nowrap;
}

.card-body {
    display: none;
    padding: 6px 8px;
    border-top: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    flex-direction: column;
    gap: 8px;
}

:host([expanded]) .card-body {
    display: flex;
}

.card-section {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.section-title {
    font-size: 10px;
    font-weight: 600;
    color: var(--debug-text-muted, #888);
    letter-spacing: 0.5px;
    margin-bottom: 2px;
}

/* Uniform rows */
.uniforms-container {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.uniform-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 22px;
}

.uniform-label {
    font-size: 10px;
    max-width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.uniform-number {
    width: 65px !important;
    text-align: right;
}

.uniform-color {
    width: 40px;
    height: 20px;
    padding: 0;
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    background: none;
}

.uniform-color::-webkit-color-swatch-wrapper {
    padding: 1px;
}

.uniform-color::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
}

.uniform-vector-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.uniform-vector-inputs {
    display: flex;
    gap: 2px;
    width: 100%;
}

.uniform-vector-input {
    flex: 1;
    width: 0 !important;
    min-width: 0;
    text-align: center;
    font-size: 10px !important;
    padding: 2px 3px !important;
}

.uniform-matrix-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

.uniform-matrix-grid {
    display: grid;
    gap: 1px;
    width: 100%;
}

.uniform-matrix-3 {
    grid-template-columns: repeat(3, 1fr);
}

.uniform-matrix-4 {
    grid-template-columns: repeat(4, 1fr);
}

.uniform-matrix-cell {
    font-size: 9px;
    text-align: center;
    padding: 1px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 2px;
    color: var(--debug-text-muted, #888);
}

.uniform-texture-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
}

/* Attributes */
.attributes-container {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.attribute-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10px;
}

.attribute-name {
    color: var(--debug-text, #e0e0e0);
}

.attribute-info {
    color: var(--debug-text-muted, #888);
}

.empty-message {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    font-style: italic;
    padding: 2px 0;
}

/* Shader action buttons */
.shader-actions {
    flex-direction: row !important;
    gap: 4px !important;
}

.shader-actions .debug-button {
    flex: 1;
    font-size: 10px;
    padding: 4px 6px;
}
`;class Re extends HTMLElement{static tagName="debug-material-card";shadow;materialId="";constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${K}${nl}</style>${tl}`}setupEventListeners(){this.shadow.querySelector(".card-header")?.addEventListener("click",this.onToggle),this.shadow.querySelector(".edit-shaders-btn")?.addEventListener("click",this.onEditShaders)}cleanupEventListeners(){this.shadow.querySelector(".card-header")?.removeEventListener("click",this.onToggle),this.shadow.querySelector(".edit-shaders-btn")?.removeEventListener("click",this.onEditShaders)}onToggle=()=>{const e=this.hasAttribute("expanded");e?this.removeAttribute("expanded"):this.setAttribute("expanded",""),Wt(`shader-card:${this.materialId}`,e),this.dispatchEvent(new CustomEvent("card-toggle",{bubbles:!0,composed:!0,detail:{materialId:this.materialId,expanded:!e}}))};onEditShaders=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("edit-shaders",{bubbles:!0,composed:!0,detail:{materialId:this.materialId}}))};setMaterial(e,t){this.materialId=e;const n=this.shadow.querySelector(".card-title");n&&(n.textContent=e);const s=this.shadow.querySelector(".card-badge");s&&(s.textContent=`${t} uniforms`),Xt(`shader-card:${e}`)===!1&&this.setAttribute("expanded","")}getUniformsContainer(){return this.shadow.querySelector(".uniforms-container")}getAttributesContainer(){return this.shadow.querySelector(".attributes-container")}getMaterialId(){return this.materialId}isExpanded(){return this.hasAttribute("expanded")}static register(){customElements.get(Re.tagName)||customElements.define(Re.tagName,Re)}}Re.register();const sl=`<div class="panel">
    <div class="header">
        <span class="editor-material-name"></span>
        <div class="layout-toggles">
            <button class="layout-btn layout-tabbed active" title="Tabbed view">
                <svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="3" width="12" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.2"/><rect x="1" y="1" width="5" height="3" rx="1" fill="currentColor"/></svg>
            </button>
            <button class="layout-btn layout-vsplit" title="Vertical split">
                <svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="7" y1="1" x2="7" y2="13" stroke="currentColor" stroke-width="1.2"/></svg>
            </button>
            <button class="layout-btn layout-hsplit" title="Horizontal split">
                <svg width="14" height="14" viewBox="0 0 14 14"><rect x="1" y="1" width="12" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.2"/><line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" stroke-width="1.2"/></svg>
            </button>
        </div>
        <div class="header-actions">
            <button class="header-btn diff-btn" title="Toggle diff view">Diff</button>
            <button class="header-btn apply-btn" title="Apply (Ctrl+S)">Apply</button>
            <button class="header-btn reset-btn" title="Reset focused shader">Reset</button>
            <button class="close-btn" title="Close (Esc)">&times;</button>
        </div>
    </div>
    <div class="tab-bar">
        <button class="tab tab-vertex active" data-type="vertex">
            <span class="tab-dot"></span>
            <span class="tab-label">Vertex</span>
        </button>
        <button class="tab tab-fragment" data-type="fragment">
            <span class="tab-dot"></span>
            <span class="tab-label">Fragment</span>
        </button>
    </div>
    <div class="editor-error"></div>
    <div class="editor-body">
        <div class="editor-pane pane-vertex" data-type="vertex">
            <div class="pane-line-numbers"><div class="pane-line-numbers-inner"></div></div>
            <div class="pane-code-container">
                <pre class="pane-code-highlight"><code></code></pre>
                <pre class="pane-search-highlight" style="display:none"></pre>
                <textarea class="pane-code-input" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"></textarea>
                <div class="pane-diff" style="display:none"></div>
            </div>
            <div class="search-bar" style="display:none">
                <input type="text" class="search-input" placeholder="Find..." spellcheck="false">
                <span class="search-count"></span>
                <button class="search-prev" title="Previous (Shift+Enter)">&#x25B2;</button>
                <button class="search-next" title="Next (Enter)">&#x25BC;</button>
                <button class="search-close" title="Close (Esc)">&times;</button>
            </div>
        </div>
        <div class="split-divider"></div>
        <div class="editor-pane pane-fragment" data-type="fragment" style="display:none">
            <div class="pane-line-numbers"><div class="pane-line-numbers-inner"></div></div>
            <div class="pane-code-container">
                <pre class="pane-code-highlight"><code></code></pre>
                <pre class="pane-search-highlight" style="display:none"></pre>
                <textarea class="pane-code-input" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"></textarea>
                <div class="pane-diff" style="display:none"></div>
            </div>
            <div class="search-bar" style="display:none">
                <input type="text" class="search-input" placeholder="Find..." spellcheck="false">
                <span class="search-count"></span>
                <button class="search-prev" title="Previous (Shift+Enter)">&#x25B2;</button>
                <button class="search-next" title="Next (Enter)">&#x25BC;</button>
                <button class="search-close" title="Close (Esc)">&times;</button>
            </div>
        </div>
    </div>
    <div class="resize-handle" title="Drag to resize"></div>
</div>
`,il=`/* ─── Host: floating panel ─── */
:host {
    position: fixed;
    z-index: 20000;
    background: var(--debug-bg, rgba(25, 28, 45, 0.98));
    border: 1px solid var(--debug-border, rgba(60, 60, 80, 1));
    border-radius: 6px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    font-family: var(--debug-font, monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e0e0e0);
    display: none;
    overflow: hidden;
    text-transform: none;
    letter-spacing: normal;
}

:host([visible]) {
    display: flex;
    flex-direction: column;
}

.panel {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 0;
}

/* ─── Header (draggable) ─── */
.header {
    display: flex;
    align-items: center;
    padding: 6px 10px;
    background: var(--debug-bg-header, rgba(20, 22, 35, 0.98));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 80, 1));
    gap: 10px;
    flex-shrink: 0;
    cursor: grab;
    user-select: none;
}

.header:active { cursor: grabbing; }

.editor-material-name {
    font-size: 12px;
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
}

.layout-toggles {
    display: flex;
    gap: 2px;
    flex-shrink: 0;
}

.layout-btn {
    background: none;
    border: 1px solid transparent;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    padding: 3px 4px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.15s, border-color 0.15s;
}

.layout-btn:hover { color: var(--debug-text, #e0e0e0); }
.layout-btn.active {
    color: var(--debug-accent, #4a90d9);
    border-color: var(--debug-accent, #4a90d9);
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    margin-left: auto;
}

.header-btn {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--debug-border, rgba(60, 60, 60, 1));
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 3px;
    font-family: inherit;
    font-size: 10px;
    transition: color 0.15s, background 0.15s;
}

.header-btn:hover {
    color: var(--debug-text, #e0e0e0);
    background: rgba(255, 255, 255, 0.1);
}

.apply-btn {
    background: rgba(78, 201, 176, 0.15) !important;
    border-color: rgba(78, 201, 176, 0.4) !important;
    color: #4ec9b0 !important;
}
.apply-btn:hover { background: rgba(78, 201, 176, 0.25) !important; }

.reset-btn {
    background: rgba(206, 145, 120, 0.15) !important;
    border-color: rgba(206, 145, 120, 0.4) !important;
    color: #ce9178 !important;
}
.reset-btn:hover { background: rgba(206, 145, 120, 0.25) !important; }

.diff-btn.active {
    background: rgba(74, 144, 217, 0.2) !important;
    border-color: var(--debug-accent, #4a90d9) !important;
    color: var(--debug-accent, #4a90d9) !important;
}

.close-btn {
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 16px;
    padding: 2px 6px;
    border-radius: 3px;
    line-height: 1;
}

.close-btn:hover {
    color: var(--debug-text, #e0e0e0);
    background: rgba(255, 255, 255, 0.1);
}

/* ─── Tab bar ─── */
.tab-bar {
    display: flex;
    background: var(--debug-bg-section, rgba(30, 33, 50, 0.95));
    border-bottom: 1px solid var(--debug-border, rgba(60, 60, 80, 1));
    flex-shrink: 0;
    gap: 0;
}

/* Hide tabs in split modes — both panes are visible */
:host([layout="vsplit"]) .tab-bar,
:host([layout="hsplit"]) .tab-bar { display: none; }

.tab {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 4px 12px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-family: inherit;
    font-size: 11px;
    transition: color 0.15s, border-color 0.15s;
}

.tab:hover { color: var(--debug-text, #e0e0e0); }

.tab.active {
    color: var(--debug-text, #e0e0e0);
}

.tab-vertex.active { border-bottom-color: #4ec9b0; }
.tab-fragment.active { border-bottom-color: #ce9178; }

.tab-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: transparent;
    flex-shrink: 0;
}

.tab-dot.dirty {
    background: #e8a838;
}

.tab-dot.applied {
    background: #4ec9b0;
}

/* ─── Error bar ─── */
.editor-error {
    display: none;
    padding: 4px 10px;
    background: rgba(244, 67, 54, 0.15);
    border-bottom: 1px solid rgba(244, 67, 54, 0.4);
    color: #f44336;
    font-size: 11px;
    white-space: pre-wrap;
    max-height: 60px;
    overflow-y: auto;
    flex-shrink: 0;
}

.editor-error.visible { display: block; }

/* ─── Editor body ─── */
.editor-body {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
}

/* Tabbed mode (default) */
:host([layout="tabbed"]) .editor-body { flex-direction: row; }
:host([layout="vsplit"]) .editor-body { flex-direction: row; }
:host([layout="hsplit"]) .editor-body { flex-direction: column; }

/* ─── Editor pane ─── */
.editor-pane {
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    position: relative;
}

/* ─── Split divider (drag handle between panes) ─── */
.split-divider {
    display: none;
    flex-shrink: 0;
    background: var(--debug-border, rgba(60, 60, 60, 1));
    position: relative;
    z-index: 2;
}

.split-divider:hover,
.split-divider.dragging {
    background: var(--debug-accent, #4a90d9);
}

:host([layout="vsplit"]) .split-divider {
    display: block;
    width: 3px;
    cursor: col-resize;
}

:host([layout="hsplit"]) .split-divider {
    display: block;
    height: 3px;
    cursor: row-resize;
}

.pane-line-numbers {
    width: 40px;
    flex-shrink: 0;
    background: var(--debug-bg, rgba(25, 28, 45, 0.98));
    border-right: 1px solid rgba(60, 60, 80, 0.5);
    font-size: 12px;
    line-height: 18px;
    color: var(--debug-text-muted, #6a6d80);
    text-align: right;
    overflow: hidden;
    user-select: none;
    white-space: pre;
    position: relative;
}

.pane-line-numbers-inner {
    padding: 8px 6px 8px 4px;
}

.pane-code-container {
    flex: 1;
    position: relative;
    overflow: hidden;
    min-width: 0;
}

/* Shared text metrics for both layers — must be identical */
.pane-code-highlight,
.pane-code-input {
    font-family: var(--debug-font, monospace);
    font-size: 12px;
    line-height: 18px;
    white-space: pre;
    letter-spacing: normal;
    word-spacing: normal;
    overflow-wrap: normal;
    tab-size: 4;
    -moz-tab-size: 4;
    padding: 8px;
    margin: 0;
    border: none;
    box-sizing: border-box;
}

.pane-code-highlight {
    position: absolute;
    top: 0;
    left: 0;
    color: #d4d4d4;
    pointer-events: none;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
}

.pane-code-highlight code {
    display: block;
    font: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
    tab-size: inherit;
    -moz-tab-size: inherit;
    padding: 0;
    margin: 0;
}

.pane-code-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    -webkit-text-fill-color: transparent;
    color: transparent;
    caret-color: #aeafad;
    outline: none;
    resize: none;
    overflow: auto;
}

.pane-code-input::selection {
    background: rgba(74, 144, 217, 0.3);
    color: transparent;
}

/* ─── Diff view ─── */
.pane-diff {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    font-family: var(--debug-font, monospace);
    font-size: 12px;
    line-height: 18px;
    white-space: pre;
    letter-spacing: normal;
    word-spacing: normal;
    tab-size: 4;
    -moz-tab-size: 4;
    padding: 8px;
    background: var(--debug-bg, rgba(25, 28, 45, 0.98));
    z-index: 2;
}

.diff-line {
    display: block;
    padding: 0 4px;
}

.diff-line-same { color: #d4d4d4; }

.diff-line-add {
    background: rgba(78, 201, 120, 0.12);
}

.diff-line-add::before {
    content: "+ ";
    color: #4ec978;
    opacity: 0.6;
}

.diff-line-remove {
    background: rgba(244, 67, 54, 0.12);
    text-decoration: line-through;
    opacity: 0.7;
}

.diff-line-remove::before {
    content: "- ";
    color: #f44336;
    opacity: 0.6;
}

.diff-line-same::before {
    content: "  ";
    opacity: 0.3;
}

/* ─── Resize handle ─── */
.resize-handle {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    cursor: se-resize;
    background: linear-gradient(135deg, transparent 50%, var(--debug-border-light, rgba(80, 80, 80, 0.6)) 50%);
    border-radius: 0 0 6px 0;
    z-index: 3;
    opacity: 0.6;
    transition: opacity 0.15s;
}

.resize-handle:hover {
    opacity: 1;
    background: linear-gradient(135deg, transparent 50%, var(--debug-accent, #4a90d9) 50%);
}

/* ─── GLSL syntax highlighting ─── */
.glsl-keyword { color: #c586c0; }
.glsl-type { color: #4ec9b0; }
.glsl-qualifier { color: #569cd6; }
.glsl-builtin { color: #dcdcaa; }
.glsl-builtin-var { color: #9cdcfe; }
.glsl-number { color: #b5cea8; }
.glsl-comment { color: #6a9955; }
.glsl-preproc { color: #c586c0; }
.glsl-string { color: #ce9178; }

/* ─── Search bar ─── */
.search-bar {
    position: absolute;
    top: 4px;
    right: 12px;
    z-index: 5;
    display: flex;
    align-items: center;
    gap: 4px;
    background: var(--debug-bg-section, rgba(30, 33, 50, 0.98));
    border: 1px solid var(--debug-border, rgba(60, 60, 80, 1));
    border-radius: 4px;
    padding: 3px 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.search-bar .search-input {
    width: 140px;
    background: var(--debug-bg, rgba(25, 28, 45, 0.98));
    border: 1px solid rgba(60, 60, 80, 0.8);
    border-radius: 3px;
    color: var(--debug-text, #e0e0e0);
    font-family: inherit;
    font-size: 11px;
    padding: 2px 6px;
    outline: none;
}

.search-bar .search-input:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.search-bar .search-count {
    font-size: 10px;
    color: var(--debug-text-muted, #888);
    min-width: 40px;
    text-align: center;
    white-space: nowrap;
}

.search-bar button {
    background: none;
    border: none;
    color: var(--debug-text-muted, #888);
    cursor: pointer;
    font-size: 10px;
    padding: 2px 4px;
    border-radius: 3px;
    line-height: 1;
}

.search-bar button:hover {
    color: var(--debug-text, #e0e0e0);
    background: rgba(255, 255, 255, 0.08);
}

.search-bar .search-close {
    font-size: 14px;
}

/* ─── Search highlight overlay ─── */
.pane-search-highlight {
    position: absolute;
    top: 0;
    left: 0;
    font-family: var(--debug-font, monospace);
    font-size: 12px;
    line-height: 18px;
    white-space: pre;
    letter-spacing: normal;
    word-spacing: normal;
    overflow-wrap: normal;
    tab-size: 4;
    -moz-tab-size: 4;
    padding: 8px;
    margin: 0;
    border: none;
    box-sizing: border-box;
    color: transparent;
    pointer-events: none;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
    z-index: 0;
}

.pane-search-highlight mark {
    color: transparent;
    background: rgba(255, 200, 50, 0.25);
    border-radius: 1px;
}

.pane-search-highlight mark.current {
    background: rgba(255, 150, 0, 0.55);
    outline: 1px solid rgba(255, 150, 0, 0.8);
}

/* ─── Fragment-only mode (postprocessing effects) ─── */
:host([fragment-only]) .tab-bar,
:host([fragment-only]) .layout-toggles,
:host([fragment-only]) .split-divider,
:host([fragment-only]) .pane-vertex {
    display: none !important;
}

:host([fragment-only]) .pane-fragment {
    display: flex !important;
    flex: 1 !important;
}

/* ─── Scrollbar ─── */
.pane-code-input::-webkit-scrollbar,
.pane-diff::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.pane-code-input::-webkit-scrollbar-track,
.pane-diff::-webkit-scrollbar-track {
    background: transparent;
}

.pane-code-input::-webkit-scrollbar-thumb,
.pane-diff::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(80, 80, 80, 1));
    border-radius: 3px;
}
`,ol=[{className:"glsl-comment",pattern:/\/\*[\s\S]*?\*\//g},{className:"glsl-comment",pattern:/\/\/[^\n]*/g},{className:"glsl-preproc",pattern:/^\s*#\s*\w+[^\n]*/gm},{className:"glsl-string",pattern:/"(?:[^"\\]|\\.)*"/g},{className:"glsl-number",pattern:/\b(?:\d+\.\d*|\.\d+|\d+)(?:[eE][+-]?\d+)?[fuFU]?\b/g},{className:"glsl-type",pattern:/\b(?:void|bool|int|uint|float|double|vec[234]|[dib]vec[234]|mat[234](?:x[234])?|sampler[123]D|samplerCube|sampler2DShadow|sampler2DArray|samplerCubeShadow|image[123]D|imageCube)\b/g},{className:"glsl-qualifier",pattern:/\b(?:uniform|varying|attribute|in|out|inout|const|precision|highp|mediump|lowp|flat|smooth|centroid|layout|buffer|shared|coherent|volatile|restrict|readonly|writeonly)\b/g},{className:"glsl-keyword",pattern:/\b(?:if|else|for|while|do|switch|case|default|break|continue|return|discard|struct|true|false)\b/g},{className:"glsl-builtin",pattern:/\b(?:radians|degrees|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|pow|exp|exp2|log|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|modf|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|outerProduct|transpose|inverse|determinant|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|texture|texture2D|textureLod|textureGrad|texelFetch|textureSize|textureProjLod|dFdx|dFdy|fwidth|intBitsToFloat|floatBitsToInt|uintBitsToFloat|floatBitsToUint|packSnorm2x16|unpackSnorm2x16|packUnorm2x16|unpackUnorm2x16|bitfieldExtract|bitfieldInsert|bitfieldReverse|bitCount|findLSB|findMSB|EmitVertex|EndPrimitive)\b/g},{className:"glsl-builtin-var",pattern:/\bgl_(?:Position|PointSize|FragCoord|FrontFacing|FragDepth|VertexID|InstanceID|FragColor|FragData)\b/g}];function lt(c){return c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Os(c){const e=[];for(const o of ol){o.pattern.lastIndex=0;let a;for(;(a=o.pattern.exec(c))!==null;)e.push({start:a.index,end:a.index+a[0].length,className:o.className})}e.sort((o,a)=>o.start-a.start||a.end-o.end);const t=[];let n=0;for(const o of e)o.start>=n&&(t.push(o),n=o.end);const s=[];let i=0;for(const o of t)o.start>i&&s.push(lt(c.slice(i,o.start))),s.push(`<span class="${o.className}">${lt(c.slice(o.start,o.end))}</span>`),i=o.end;return i<c.length&&s.push(lt(c.slice(i))),s.join("")}class al{el;margin;onEnd;excludeSelectors;isDragging=!1;dragStartX=0;dragStartY=0;panelStartX=0;panelStartY=0;handle=null;boundMove=null;boundEnd=null;constructor(e){this.el=e.element,this.margin=e.margin??10,this.onEnd=e.onEnd,this.excludeSelectors=e.excludeSelectors??[]}attach(e){this.handle=e,e.addEventListener("mousedown",this.onStart)}detach(){this.handle?.removeEventListener("mousedown",this.onStart),this.cleanupDocumentListeners(),this.handle=null}onStart=e=>{const t=e.target;for(const s of this.excludeSelectors)if(t.closest(s))return;this.isDragging=!0,this.dragStartX=e.clientX,this.dragStartY=e.clientY;const n=this.el.getBoundingClientRect();this.panelStartX=n.left,this.panelStartY=n.top,document.body.style.cursor="grabbing",document.body.style.userSelect="none",this.boundMove=this.onMove.bind(this),this.boundEnd=this.onEndDrag.bind(this),document.addEventListener("mousemove",this.boundMove),document.addEventListener("mouseup",this.boundEnd)};onMove(e){if(!this.isDragging)return;const t=this.el.getBoundingClientRect();let n=this.panelStartX+(e.clientX-this.dragStartX),s=this.panelStartY+(e.clientY-this.dragStartY);n=Math.max(this.margin,Math.min(window.innerWidth-t.width-this.margin,n)),s=Math.max(this.margin,Math.min(window.innerHeight-28-this.margin,s)),this.el.style.left=`${n}px`,this.el.style.top=`${s}px`}onEndDrag(){this.isDragging&&(this.isDragging=!1,document.body.style.cursor="",document.body.style.userSelect="",this.cleanupDocumentListeners(),this.onEnd?.())}cleanupDocumentListeners(){this.boundMove&&(document.removeEventListener("mousemove",this.boundMove),this.boundMove=null),this.boundEnd&&(document.removeEventListener("mouseup",this.boundEnd),this.boundEnd=null)}}class rl{el;minWidth;minHeight;margin;onEnd;isResizing=!1;startX=0;startY=0;startWidth=0;startHeight=0;handle=null;boundMove=null;boundEnd=null;constructor(e){this.el=e.element,this.minWidth=e.minWidth??400,this.minHeight=e.minHeight??200,this.margin=e.margin??10,this.onEnd=e.onEnd}attach(e){this.handle=e,e.addEventListener("mousedown",this.onStart)}detach(){this.handle?.removeEventListener("mousedown",this.onStart),this.cleanupDocumentListeners(),this.handle=null}onStart=e=>{e.stopPropagation(),this.isResizing=!0,this.startX=e.clientX,this.startY=e.clientY;const t=this.el.getBoundingClientRect();this.startWidth=t.width,this.startHeight=t.height,document.body.style.cursor="se-resize",document.body.style.userSelect="none",this.boundMove=this.onMove.bind(this),this.boundEnd=this.onEndResize.bind(this),document.addEventListener("mousemove",this.boundMove),document.addEventListener("mouseup",this.boundEnd)};onMove(e){if(!this.isResizing)return;const t=this.el.getBoundingClientRect(),n=window.innerWidth-t.left-this.margin,s=window.innerHeight-t.top-this.margin,i=Math.max(this.minWidth,Math.min(n,this.startWidth+(e.clientX-this.startX))),o=Math.max(this.minHeight,Math.min(s,this.startHeight+(e.clientY-this.startY)));this.el.style.width=`${i}px`,this.el.style.height=`${o}px`}onEndResize(){this.isResizing&&(this.isResizing=!1,document.body.style.cursor="",document.body.style.userSelect="",this.cleanupDocumentListeners(),this.onEnd?.())}cleanupDocumentListeners(){this.boundMove&&(document.removeEventListener("mousemove",this.boundMove),this.boundMove=null),this.boundEnd&&(document.removeEventListener("mouseup",this.boundEnd),this.boundEnd=null)}}const ll=18;class cl{panes;states={vertex:{query:"",matches:[],currentIndex:-1},fragment:{query:"",matches:[],currentIndex:-1}};activePane=null;constructor(e,t){this.panes={vertex:e,fragment:t},this.setupListeners("vertex"),this.setupListeners("fragment")}open(e){const t=this.panes[e];this.activePane=e,t.searchBar.style.display="",t.searchInput.focus(),t.searchInput.select()}close(e){const t=this.panes[e],n=this.states[e];t.searchBar.style.display="none",t.searchHighlight.style.display="none",t.searchCount.textContent="",n.query="",n.matches=[],n.currentIndex=-1,this.activePane=null,t.textarea.focus()}update(e){this.runSearch(e)}next(e){const t=this.states[e];t.matches.length!==0&&(t.currentIndex=(t.currentIndex+1)%t.matches.length,this.renderHighlight(e),this.updateCount(e),this.scrollToMatch(e))}prev(e){const t=this.states[e];t.matches.length!==0&&(t.currentIndex=(t.currentIndex-1+t.matches.length)%t.matches.length,this.renderHighlight(e),this.updateCount(e),this.scrollToMatch(e))}isOpen(){return this.activePane}syncScroll(e,t,n){this.panes[e].searchHighlight.style.transform=`translate(${-t}px, ${-n}px)`}setupListeners(e){const t=this.panes[e];t.searchInput.addEventListener("input",()=>this.runSearch(e)),t.searchInput.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),n.shiftKey?this.prev(e):this.next(e)),n.key==="Escape"&&(n.preventDefault(),this.close(e))}),t.searchBar.querySelector(".search-prev").addEventListener("click",()=>this.prev(e)),t.searchBar.querySelector(".search-next").addEventListener("click",()=>this.next(e)),t.searchBar.querySelector(".search-close").addEventListener("click",()=>this.close(e))}runSearch(e){const t=this.panes[e],n=this.states[e],s=t.searchInput.value;if(n.query=s,!s){n.matches=[],n.currentIndex=-1,t.searchHighlight.style.display="none",t.searchCount.textContent="";return}const o=t.textarea.value.toLowerCase(),a=s.toLowerCase(),r=[];let l=0;for(;l<o.length;){const d=o.indexOf(a,l);if(d===-1)break;r.push({start:d,end:d+s.length}),l=d+1}n.matches=r,n.currentIndex=r.length>0?0:-1,this.renderHighlight(e),this.updateCount(e),n.currentIndex>=0&&this.scrollToMatch(e)}updateCount(e){const t=this.panes[e],n=this.states[e];n.matches.length===0?t.searchCount.textContent=n.query?"No results":"":t.searchCount.textContent=`${n.currentIndex+1}/${n.matches.length}`}renderHighlight(e){const t=this.panes[e],n=this.states[e];if(n.matches.length===0){t.searchHighlight.style.display="none";return}const s=t.textarea.value;let i="",o=0;for(let r=0;r<n.matches.length;r++){const l=n.matches[r];i+=lt(s.slice(o,l.start));const d=r===n.currentIndex?"current":"";i+=`<mark class="${d}">${lt(s.slice(l.start,l.end))}</mark>`,o=l.end}i+=lt(s.slice(o)),t.searchHighlight.innerHTML=i,t.searchHighlight.style.display="";const a=`translate(${-t.textarea.scrollLeft}px, ${-t.textarea.scrollTop}px)`;t.searchHighlight.style.transform=a}scrollToMatch(e){const t=this.panes[e],n=this.states[e];if(n.currentIndex<0)return;const s=n.matches[n.currentIndex],o=(t.textarea.value.slice(0,s.start).split(`
`).length-1)*ll,a=t.textarea.clientHeight;t.textarea.scrollTop=Math.max(0,o-a/3)}}function dl(c,e){const t=c.split(`
`),n=e.split(`
`),s=hl(t,n),i=[];let o=0,a=0,r=0;for(;o<t.length||a<n.length;)r<s.length&&o<t.length&&a<n.length&&t[o]===s[r]&&n[a]===s[r]?(i.push({type:"same",content:t[o],oldLineNo:o+1,newLineNo:a+1}),o++,a++,r++):o<t.length&&(r>=s.length||t[o]!==s[r])?(i.push({type:"remove",content:t[o],oldLineNo:o+1}),o++):a<n.length&&(r>=s.length||n[a]!==s[r])&&(i.push({type:"add",content:n[a],newLineNo:a+1}),a++);return i}function hl(c,e){const t=c.length,n=e.length,s=Array.from({length:t+1},()=>new Array(n+1).fill(0));for(let r=1;r<=t;r++)for(let l=1;l<=n;l++)c[r-1]===e[l-1]?s[r][l]=s[r-1][l-1]+1:s[r][l]=Math.max(s[r-1][l],s[r][l-1]);const i=[];let o=t,a=n;for(;o>0&&a>0;)c[o-1]===e[a-1]?(i.push(c[o-1]),o--,a--):s[o-1][a]>s[o][a-1]?o--:a--;return i.reverse()}class ul{panes;active=!1;constructor(e,t){this.panes={vertex:e,fragment:t}}isActive(){return this.active}toggle(e,t){return this.active=!this.active,this.active?(this.show("vertex",e),this.show("fragment",t)):(this.hide("vertex"),this.hide("fragment")),this.active}disable(){this.active&&(this.active=!1,this.hide("vertex"),this.hide("fragment"))}refresh(e,t){this.active&&this.show(e,t)}syncScroll(e){const t=this.panes[e];t.lineNumbers.style.transform=`translateY(${-t.diff.scrollTop}px)`}show(e,t){const n=this.panes[e],s=dl(t,n.textarea.value);let i="";const o=[];let a=0;for(const r of s){const l=Os(r.content);switch(i+=`<span class="diff-line diff-line-${r.type}">${l}</span>`,r.type){case"same":a++,o.push(String(a));break;case"add":a++,o.push(String(a));break;case"remove":o.push("");break}}n.diff.innerHTML=i,n.diff.style.display="",n.lineNumbers.textContent=o.join(`
`),n.textarea.style.display="none",n.pane.querySelector(".pane-code-highlight").style.display="none"}hide(e){const t=this.panes[e];t.diff.style.display="none",t.textarea.style.display="",t.pane.querySelector(".pane-code-highlight").style.display=""}}const ks="shader-editor";class Fe extends V{static tagName="debug-shader-editor";materialId="";layout="tabbed";activeTab="vertex";focusedPane="vertex";fragmentOnly=!1;originalVertex="";originalFragment="";appliedVertex="";appliedFragment="";vertex;fragment;errorBar;splitDivider;editorBody;splitRatio=.5;drag;resize;search;diff;render(){this.shadow.innerHTML=`<style>${il}</style>${sl}`,this.vertex=this.collectPaneRefs(".pane-vertex"),this.fragment=this.collectPaneRefs(".pane-fragment"),this.errorBar=this.$required(".editor-error"),this.splitDivider=this.$required(".split-divider"),this.editorBody=this.$required(".editor-body"),this.drag=new al({element:this,onEnd:()=>this.saveState(),excludeSelectors:[".header-actions",".layout-toggles"]}),this.resize=new rl({element:this,onEnd:()=>this.saveState()}),this.search=new cl(this.extractSearchRefs(this.vertex),this.extractSearchRefs(this.fragment)),this.diff=new ul(this.extractDiffRefs(this.vertex),this.extractDiffRefs(this.fragment));const e=this.loadState();e?.layout&&(this.layout=e.layout),e?.splitRatio!=null&&(this.splitRatio=e.splitRatio),this.setAttribute("layout",this.layout),this.updateLayoutButtons(),this.applySplitRatio()}setupEventListeners(){this.$required(".apply-btn").addEventListener("click",this.onApply),this.$required(".reset-btn").addEventListener("click",this.onReset),this.$required(".close-btn").addEventListener("click",this.onClose),this.$required(".diff-btn").addEventListener("click",this.onToggleDiff),this.$required(".layout-tabbed").addEventListener("click",()=>this.setLayout("tabbed")),this.$required(".layout-vsplit").addEventListener("click",()=>this.setLayout("vsplit")),this.$required(".layout-hsplit").addEventListener("click",()=>this.setLayout("hsplit")),this.$required(".tab-vertex").addEventListener("click",()=>this.setActiveTab("vertex")),this.$required(".tab-fragment").addEventListener("click",()=>this.setActiveTab("fragment")),this.setupPaneListeners(this.vertex,"vertex"),this.setupPaneListeners(this.fragment,"fragment"),this.drag.attach(this.$required(".header")),this.resize.attach(this.$required(".resize-handle")),this.splitDivider.addEventListener("mousedown",this.onSplitStart),this.splitDivider.addEventListener("dblclick",this.onSplitReset),document.addEventListener("keydown",this.onGlobalKeyDown)}cleanupEventListeners(){document.removeEventListener("keydown",this.onGlobalKeyDown),this.drag.detach(),this.resize.detach()}collectPaneRefs(e){const t=this.$required(e);return{pane:t,textarea:t.querySelector(".pane-code-input"),highlight:t.querySelector(".pane-code-highlight code"),lineNumbers:t.querySelector(".pane-line-numbers-inner"),diff:t.querySelector(".pane-diff"),codeContainer:t.querySelector(".pane-code-container"),searchBar:t.querySelector(".search-bar"),searchInput:t.querySelector(".search-input"),searchCount:t.querySelector(".search-count"),searchHighlight:t.querySelector(".pane-search-highlight")}}extractSearchRefs(e){return{textarea:e.textarea,searchBar:e.searchBar,searchInput:e.searchInput,searchCount:e.searchCount,searchHighlight:e.searchHighlight}}extractDiffRefs(e){return{pane:e.pane,textarea:e.textarea,lineNumbers:e.lineNumbers,diff:e.diff}}setupPaneListeners(e,t){e.textarea.addEventListener("input",()=>{this.updatePaneHighlight(e),this.updatePaneLineNumbers(e),this.updateDirtyIndicators(),this.emit("shader-input",{materialId:this.materialId,shaderType:t,source:e.textarea.value}),this.search.isOpen()===t&&this.search.update(t)}),e.textarea.addEventListener("scroll",()=>this.syncPaneScroll(e,t)),e.diff.addEventListener("scroll",()=>this.diff.syncScroll(t)),e.textarea.addEventListener("keydown",n=>this.onPaneKeyDown(n,e)),e.textarea.addEventListener("focus",()=>{this.focusedPane=t})}updatePaneHighlight(e){e.highlight.innerHTML=Os(e.textarea.value)+`
`}updatePaneLineNumbers(e){const t=e.textarea.value.split(`
`).length,n=[];for(let s=1;s<=t;s++)n.push(String(s));e.lineNumbers.textContent=n.join(`
`)}syncPaneScroll(e,t){const n=`translate(${-e.textarea.scrollLeft}px, ${-e.textarea.scrollTop}px)`,s=e.pane.querySelector(".pane-code-highlight");s&&(s.style.transform=n),e.lineNumbers.style.transform=`translateY(${-e.textarea.scrollTop}px)`,this.search.syncScroll(t,e.textarea.scrollLeft,e.textarea.scrollTop)}onPaneKeyDown(e,t){if(e.key!=="Tab")return;e.preventDefault();const n=t.textarea,s=n.selectionStart,i=n.selectionEnd;n.value=n.value.substring(0,s)+"	"+n.value.substring(i),n.selectionStart=s+1,n.selectionEnd=s+1,this.updatePaneHighlight(t),this.updatePaneLineNumbers(t)}setLayout(e){this.layout=e,this.setAttribute("layout",e),this.updateLayoutButtons(),this.updatePaneVisibility(),this.applySplitRatio(),this.saveState()}updateLayoutButtons(){for(const e of this.shadow.querySelectorAll(".layout-btn"))e.classList.remove("active");switch(this.layout){case"tabbed":this.$required(".layout-tabbed").classList.add("active");break;case"vsplit":this.$required(".layout-vsplit").classList.add("active");break;case"hsplit":this.$required(".layout-hsplit").classList.add("active");break}}updatePaneVisibility(){if(this.fragmentOnly){this.vertex.pane.style.display="none",this.fragment.pane.style.display="";return}this.layout==="tabbed"?(this.vertex.pane.style.display=this.activeTab==="vertex"?"":"none",this.fragment.pane.style.display=this.activeTab==="fragment"?"":"none"):(this.vertex.pane.style.display="",this.fragment.pane.style.display="")}applySplitRatio(){if(this.layout==="tabbed"){this.vertex.pane.style.flex="",this.fragment.pane.style.flex="";return}const e=this.splitRatio;this.vertex.pane.style.flex=`${e} 0 0`,this.fragment.pane.style.flex=`${1-e} 0 0`}onSplitReset=()=>{this.splitRatio=.5,this.applySplitRatio(),this.saveState()};onSplitStart=e=>{e.preventDefault(),this.splitDivider.classList.add("dragging"),document.body.style.cursor=this.layout==="vsplit"?"col-resize":"row-resize",document.body.style.userSelect="none";const t=s=>{const i=this.editorBody.getBoundingClientRect();let o;this.layout==="vsplit"?o=(s.clientX-i.left)/i.width:o=(s.clientY-i.top)/i.height,this.splitRatio=Math.max(.15,Math.min(.85,o)),this.applySplitRatio()},n=()=>{this.splitDivider.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n),this.saveState()};document.addEventListener("mousemove",t),document.addEventListener("mouseup",n)};setActiveTab(e){this.activeTab=e,this.focusedPane=e;const t=this.$required(".tab-vertex"),n=this.$required(".tab-fragment");e==="vertex"?(t.classList.add("active"),n.classList.remove("active")):(n.classList.add("active"),t.classList.remove("active")),this.updatePaneVisibility();const s=e==="vertex"?this.vertex:this.fragment;requestAnimationFrame(()=>s.textarea.focus())}updateDirtyIndicators(){this.updateDot(".tab-vertex .tab-dot",this.vertex.textarea.value,this.appliedVertex,this.originalVertex),this.updateDot(".tab-fragment .tab-dot",this.fragment.textarea.value,this.appliedFragment,this.originalFragment)}updateDot(e,t,n,s){const i=this.$required(e);i.classList.remove("dirty","applied"),t!==n?i.classList.add("dirty"):t!==s&&i.classList.add("applied")}onApply=()=>{this.appliedVertex=this.vertex.textarea.value,this.appliedFragment=this.fragment.textarea.value,this.updateDirtyIndicators(),this.emit("apply-shader",{materialId:this.materialId,vertexSource:this.vertex.textarea.value,fragmentSource:this.fragment.textarea.value})};onReset=()=>{this.emit("reset-shader",{materialId:this.materialId,shaderType:this.focusedPane})};onClose=()=>{this.hide(),this.emit("close-editor")};onToggleDiff=()=>{const e=this.diff.toggle(this.originalVertex,this.originalFragment);this.$required(".diff-btn").classList.toggle("active",e)};onGlobalKeyDown=e=>{if(this.hasAttribute("visible")){if((e.ctrlKey||e.metaKey)&&e.key==="f"){e.preventDefault(),this.search.open(this.focusedPane);return}if(e.key==="Escape"){const t=this.search.isOpen();if(t!==null){this.search.close(t);return}this.onClose();return}(e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),this.onApply())}};saveState(){const e=this.getBoundingClientRect(),t={x:e.left,y:e.top,width:e.width,height:e.height,layout:this.layout,splitRatio:this.splitRatio};F.setGlobal(ks,t)}loadState(){return F.getGlobal(ks)}open(e,t,n,s,i,o=!1){this.materialId=e,this.originalVertex=s,this.originalFragment=i,this.appliedVertex=t,this.appliedFragment=n,this.fragmentOnly=o;const a=this.$(".editor-material-name");a&&(a.textContent=e),o?this.setAttribute("fragment-only",""):this.removeAttribute("fragment-only"),this.vertex.textarea.value=t,this.fragment.textarea.value=n,this.updatePaneHighlight(this.vertex),this.updatePaneHighlight(this.fragment),this.updatePaneLineNumbers(this.vertex),this.updatePaneLineNumbers(this.fragment),this.updateDirtyIndicators(),this.clearError();const r=this.search.isOpen();r!==null&&this.search.close(r),this.diff.isActive()&&(this.diff.disable(),this.$required(".diff-btn").classList.remove("active")),this.show(),o?this.setActiveTab("fragment"):this.setActiveTab("vertex")}show(){const e=this.loadState();if(e)this.style.left=`${e.x}px`,this.style.top=`${e.y}px`,this.style.width=`${e.width}px`,this.style.height=`${e.height}px`;else{const t=Math.min(900,window.innerWidth*.8),n=window.innerHeight*.4;this.style.width=`${t}px`,this.style.height=`${n}px`,this.style.left=`${(window.innerWidth-t)/2}px`,this.style.top=`${window.innerHeight*.55}px`}this.setAttribute("visible","")}hide(){this.removeAttribute("visible")}setEditorContent(e,t){const n=e==="vertex"?this.vertex:this.fragment;n.textarea.value=t,this.updatePaneHighlight(n),this.updatePaneLineNumbers(n),this.updateDirtyIndicators()}setSource(e,t){const n=e==="vertex"?this.vertex:this.fragment;if(n.textarea.value=t,this.updatePaneHighlight(n),this.updatePaneLineNumbers(n),e==="vertex"?this.appliedVertex=t:this.appliedFragment=t,this.updateDirtyIndicators(),this.diff.isActive()){const s=e==="vertex"?this.originalVertex:this.originalFragment;this.diff.refresh(e,s)}}getSource(e){return(e==="vertex"?this.vertex:this.fragment).textarea.value}markApplied(e,t){this.appliedVertex=e,this.appliedFragment=t,this.updateDirtyIndicators()}showError(e){this.errorBar.textContent=e,this.errorBar.classList.add("visible")}clearError(){this.errorBar.textContent="",this.errorBar.classList.remove("visible")}isVisible(){return this.hasAttribute("visible")}static register(){customElements.get(Fe.tagName)||customElements.define(Fe.tagName,Fe)}}Fe.register();function mt(c){const e=pl(c),t=ml(e),n=bl(t),s=xl(n),i=Cl(s);return El(i)}function pl(c){const e=[];let t=0;for(;t<c.length;){if(c[t]==="/"&&c[t+1]==="*"){const s=c.indexOf("*/",t+2),i=s===-1?c.length:s+2;e.push({kind:1,text:c.slice(t,i)}),t=i;continue}if(c[t]==="/"&&c[t+1]==="/"){let s=c.indexOf(`
`,t);s===-1&&(s=c.length),e.push({kind:2,text:c.slice(t,s)}),t=s;continue}if(c[t]==="#"&&Ss(c,t)){let s=t+1;for(;s<c.length&&c[s]!==`
`;){if(c[s]==="\\"&&s+1<c.length&&c[s+1]===`
`){s+=2;continue}s++}e.push({kind:3,text:c.slice(t,s).trim()}),t=s;continue}if(c[t]==='"'){let s=t+1;for(;s<c.length&&c[s]!=='"';)c[s]==="\\"&&s++,s++;s<c.length&&s++,e.push({kind:4,text:c.slice(t,s)}),t=s;continue}let n=t+1;for(;n<c.length&&!(c[n]==="/"&&(c[n+1]==="/"||c[n+1]==="*")||c[n]==="#"&&Ss(c,n)||c[n]==='"');)n++;e.push({kind:0,text:c.slice(t,n)}),t=n}return e}function Ss(c,e){if(e===0)return!0;let t=e-1;for(;t>=0&&c[t]!==`
`;){if(c[t]!==" "&&c[t]!=="	")return!1;t--}return!0}function gl(c){let e=c;return e=e.replace(/  +/g," "),e=e.replace(/\s*(==|!=|<=|>=|&&|\|\||\+=|-=|\*=|\/=|<<|>>)\s*/g," $1 "),e=e.replace(new RegExp("(?<![=!<>+\\-*/])=(?!=)","g")," = "),e=e.replace(/(\w|\))\s*\+\s*(?!\+|=)/g,"$1 + "),e=e.replace(/(\w|\))\s*-\s*(?!-|=|>)/g,"$1 - "),e=e.replace(/(\w|\))\s*\*\s*(?!\*|=|\/)/g,"$1 * "),e=e.replace(/(\w|\))\s*\/\s*(?!\/|\*|=)/g,"$1 / "),e=e.replace(/(\w|\))\s*<\s*(?!=|<)/g,"$1 < "),e=e.replace(/(\w|\))\s*>\s*(?!=|>)/g,"$1 > "),e=e.replace(/\s*,\s*/g,", "),e=e.replace(/  +/g," "),e}function ml(c){const e=[];let t="";const n=()=>{const i=t.trim();i.length>0&&e.push(i),t=""};for(const i of c){if(i.kind===1){n();const r=i.text.split(`
`);for(const l of r)e.push(l.trim());continue}if(i.kind===2){t+=" "+i.text.trim(),n();continue}if(i.kind===3){n(),e.push(i.text);continue}if(i.kind===4){t+=i.text;continue}const o=i.text;let a=0;for(let r=0;r<o.length;r++){const l=o[r];if(l==="("){a++,t+=l;continue}if(l===")"){a--,t+=l;continue}if(l===";"&&a<=0){t+=";",n();continue}if(l==="{"){t+=" {",n();continue}if(l==="}"){n(),e.push("}");continue}if(l===" "||l==="	"||l===`
`||l==="\r"){t.length>0&&t[t.length-1]!==" "&&(t+=" ");continue}t+=l}}const s=t.trim();return s.length>0&&e.push(s),e.map(i=>i.startsWith("#")||i.startsWith("//")||i.startsWith("/*")||i.startsWith("*")?i:gl(i))}function bl(c){const e=[];for(let t=0;t<c.length;t++){const n=c[t];if(n==="}"&&t+1<c.length){const s=c[t+1];if(s.startsWith("else")){e.push("} "+s),t++;continue}}e.push(n)}return e}const Vs=/^(uniform|varying|in|out|attribute|flat\s+in|flat\s+out)\s/,qs=/^(if|else if|for|while|switch|do)\s*[\({]/,fl=new Set(["void","bool","int","uint","float","double","vec2","vec3","vec4","ivec2","ivec3","ivec4","uvec2","uvec3","uvec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","mat2","mat3","mat4","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","sampler2D","sampler3D","samplerCube","sampler2DShadow","sampler2DArray","isampler2D","isampler3D","usampler2D","usampler3D"]);function vl(c){const e=c.match(Vs);return e?e[1]:null}function yl(c){if(Vs.test(c)||qs.test(c)||c.startsWith("#")||c.startsWith("//")||c.startsWith("/*")||c.startsWith("*")||c.startsWith("}")||c.startsWith("return "))return null;const e=c.match(/^(const\s+)?(\w+)\s+\w/);if(!e)return null;const t=e[2];return!fl.has(t)||c.endsWith("{")?null:t}function Es(c){return qs.test(c)}function xl(c){const e=[];let t=null,n=null;for(let s=0;s<c.length;s++){const i=c[s],o=i.trim();if(o.length===0||o.startsWith("#")){t=null,n=null,e.push(i);continue}const a=vl(o);if(a!==null){if(t!==null&&t!==a){const l=e[e.length-1];l!==void 0&&l.trim().length>0&&e.push("")}t=a,n=null}else{if(t!==null){const l=e[e.length-1];l!==void 0&&l.trim().length>0&&e.push("")}t=null}const r=yl(o);if(r!==null){if(n!==null&&n!==r){const l=e[e.length-1];l!==void 0&&l.trim().length>0&&e.push("")}else if(n===null&&e.length>0){const l=e[e.length-1]?.trim();l&&l.length>0&&!l.endsWith("{")&&e.push("")}n=r}else{if(n!==null&&e.length>0){const l=e[e.length-1]?.trim();l&&l.length>0&&e.push("")}n=null}if(Es(o)&&e.length>0){const l=e[e.length-1]?.trim();l&&l.length>0&&!l.endsWith("{")&&!Es(l)&&e.push("")}if(o.startsWith("gl_")&&e.length>0){const l=e[e.length-1]?.trim();l&&l.length>0&&!l.endsWith("{")&&!l.startsWith("gl_")&&e.push("")}if(o.startsWith("return ")||o==="return;"){const l=e[e.length-1]?.trim();l&&l.length>0&&!l.endsWith("{")&&e.push("")}if(e.push(i),o.startsWith("precision ")&&s+1<c.length){const l=c[s+1]?.trim();l&&l.length>0&&!l.startsWith("precision ")&&e.push("")}if((o==="}"||o.startsWith("} else"))&&s+1<c.length){const l=c[s+1]?.trim();l&&l.length>0&&l!=="}"&&!l.startsWith("} else")&&!l.startsWith("#")&&e.push("")}}return e}function Cl(c){const e=[];let t=0;const n="    ";for(let s=0;s<c.length;s++){const i=c[s];if(i.trim().length===0){e.push("");continue}if(i.startsWith("#")){if(s>0&&(i.startsWith("#ifdef")||i.startsWith("#ifndef")||i.startsWith("#if "))){const o=e[e.length-1];o!==void 0&&o.trim().length>0&&e.push("")}e.push(i);continue}if(i.startsWith("}")&&(t=Math.max(0,t-1)),s>0&&wl(i)){const o=e[e.length-1];o!==void 0&&o.trim().length>0&&e.push("")}e.push(n.repeat(t)+i),i.endsWith("{")&&t++}return e.join(`
`)}function wl(c){return/^\w+\s+\w+\s*\(/.test(c)&&c.endsWith("{")}const kl=80,Sl=3;function El(c){const e=c.split(`
`),t=[];for(const s of e){const i=s.trimStart(),o=s.slice(0,s.length-i.length);if(i.startsWith("#")||i.startsWith("//")||i.startsWith("/*")){t.push(s);continue}const a=Ll(i);if(a===-1){t.push(s);continue}const r=Tl(i,a);if(r===-1){t.push(s);continue}const l=i.slice(a+1,r),d=zl(l);if(!(d.length>Sl||s.length>kl)||d.length<=1){t.push(s);continue}const u=i.slice(0,a+1),p=i.slice(r),x=o+"    ",f=t[t.length-1]?.trim();f!==void 0&&f.length>0&&!f.endsWith("{")&&t.push(""),t.push(o+u);for(let C=0;C<d.length;C++){const m=C<d.length-1?",":"";t.push(x+d[C].trim()+m)}t.push(o+p),t.push("\0AFTER_SPLIT")}const n=[];for(let s=0;s<t.length;s++){if(t[s]==="\0AFTER_SPLIT"){const i=t[s+1]?.trim();i!==void 0&&i.length>0&&i!=="}"&&n.push("");continue}n.push(t[s])}return n.join(`
`)}function Ll(c){const e=c.match(/\w\s*\(/);return!e||e.index===void 0?-1:e.index+e[0].length-1}function Tl(c,e){let t=1;for(let n=e+1;n<c.length;n++)if(c[n]==="("&&t++,c[n]===")"&&(t--,t===0))return n;return-1}function zl(c){const e=[];let t=0,n=0;for(let s=0;s<c.length;s++)c[s]==="("&&t++,c[s]===")"&&t--,c[s]===","&&t===0&&(e.push(c.slice(n,s)),n=s+1);return e.push(c.slice(n)),e}De.register();Re.register();Fe.register();function Ls(c){return c.kind==="material"?{vertex:c.data.material.vertexShader,fragment:c.data.material.fragmentShader}:{vertex:c.data.effect.getVertexShader()??"",fragment:c.data.effect.getFragmentShader()}}function Ts(c){if(c.kind==="material")return c.data.material.uniforms;const e={};for(const[t,n]of c.data.effect.uniforms)e[t]=n;return e}class Pl extends _{id="shader";name="Shaders";icon="code";panelElement=null;editorElement=null;spawner=null;materials=[];effects=[];entries=[];cards=new Map;originals=new Map;modifiedShaders=new Map;editorEntryId=null;pendingEditorEntryId=null;pendingEditorContent=null;boundOnReady=null;init(e){super.init(e),this.boundOnReady=()=>this.onResourcesReady(),this.manager.context.resources.on("ready",this.boundOnReady)}enable(){this.spawner=new Qr(this.scene),this.refreshEntries(),this.materials.length===0&&this.manager.context.resources.once("ready",()=>{this.enabled&&this.refreshEntries()})}disable(){this.closeEditor(),this.spawner?.dispose(),this.spawner=null}createUI(e){this.panelElement=document.createElement(De.tagName),this.panelElement.addEventListener("refresh",this.onRefresh),this.panelElement.addEventListener("spawn-primitive",this.onSpawnPrimitive),this.panelElement.addEventListener("remove-primitive",this.onRemovePrimitive),this.panelElement.addEventListener("remove-all-primitives",this.onRemoveAllPrimitives),e.appendChild(this.panelElement),this.editorElement=document.createElement(Fe.tagName),this.editorElement.addEventListener("apply-shader",this.onApplyShader),this.editorElement.addEventListener("reset-shader",this.onResetShader),this.editorElement.addEventListener("shader-input",this.onShaderInput),this.editorElement.addEventListener("close-editor",this.onCloseEditor),document.body.appendChild(this.editorElement)}dispose(){this.disable(),this.boundOnReady&&(this.manager.context.resources.off("ready",this.boundOnReady),this.boundOnReady=null),this.editorElement?.remove(),this.editorElement=null,this.panelElement=null,this.cards.clear(),this.originals.clear(),this.modifiedShaders.clear()}getState(){const e={};for(const[n,s]of this.modifiedShaders)e[n]={...s};let t=null;return this.editorEntryId&&this.editorElement?.isVisible()&&(t={vertex:this.editorElement.getSource("vertex"),fragment:this.editorElement.getSource("fragment")}),{modifiedShaders:e,editorMaterialId:this.editorEntryId,editorContent:t}}setState(e){const t=e;if(t?.modifiedShaders){this.modifiedShaders.clear();for(const[n,s]of Object.entries(t.modifiedShaders)){const i=this.findEntry(n);i&&(this.applyShaderToEntry(i,s.vertex,s.fragment),this.modifiedShaders.set(n,{...s}))}t.editorMaterialId?(this.pendingEditorEntryId=t.editorMaterialId,this.pendingEditorContent=t.editorContent??null,this.tryOpenPendingEditor()):(this.pendingEditorEntryId=null,this.pendingEditorContent=null,this.closeEditor())}}onResourcesReady(){this.refreshEntries()}refreshEntries(){const e=this.engine.materials;this.materials=qr(e);const t=this.engine.effects;this.effects=Ur(t),this.entries=[...this.materials.map(n=>({kind:"material",id:n.id,data:n})),...this.effects.map(n=>({kind:"effect",id:n.id,data:n}))];for(const n of this.entries)if(!this.originals.has(n.id)){const s=Ls(n);this.originals.set(n.id,{vertexShader:s.vertex,fragmentShader:s.fragment})}this.rebuildCards(),this.tryOpenPendingEditor()}rebuildCards(){const e=this.panelElement?.getMaterialListContainer();if(e){e.innerHTML="",this.cards.clear();for(const t of this.entries){const n=document.createElement(Re.tagName),s=Ts(t),i=Object.keys(s).length;n.setMaterial(t.id,i),n.addEventListener("card-toggle",(o=>{o.detail.expanded&&this.populateCard(t,n)})),n.addEventListener("edit-shaders",(()=>{this.openEditor(t.id)})),e.appendChild(n),this.cards.set(t.id,n),n.isExpanded()&&this.populateCard(t,n)}this.panelElement?.setMaterialCount(this.entries.length)}}populateCard(e,t){const n=t.getUniformsContainer();if(n&&n.children.length===0){const i=Ts(e),o=Object.keys(i).sort();if(o.length===0){const a=document.createElement("div");a.className="empty-message",a.textContent="No uniforms",n.appendChild(a)}else for(const a of o){const r=_r(a,i[a],this.onUniformChange);n.appendChild(r)}}const s=t.getAttributesContainer();if(s&&s.children.length===0)if(e.kind==="material")this.populateAttributes(e.data,s);else{const i=document.createElement("div");i.className="empty-message",i.textContent="Post-processing effect",s.appendChild(i)}}populateAttributes(e,t){const n=new Map;if(this.scene.traverse(s=>{if(s.name.startsWith("__debug_"))return;const i=s;if(!(i.material!==e.material||!i.geometry?.attributes))for(const[o,a]of Object.entries(i.geometry.attributes))n.has(o)||n.set(o,{itemSize:a.itemSize,count:a.count,type:a.array.constructor.name})}),n.size===0){const s=document.createElement("div");s.className="empty-message",s.textContent="No geometry found",t.appendChild(s);return}for(const[s,i]of n){const o=document.createElement("div");o.className="attribute-row";const a=document.createElement("span");a.className="attribute-name",a.textContent=s;const r=document.createElement("span");r.className="attribute-info",r.textContent=`${i.type}[${i.count}] × ${i.itemSize}`,o.appendChild(a),o.appendChild(r),t.appendChild(o)}}tryOpenPendingEditor(){if(!this.pendingEditorEntryId||!this.findEntry(this.pendingEditorEntryId)||!this.editorElement)return;const t=this.pendingEditorEntryId,n=this.pendingEditorContent;this.pendingEditorEntryId=null,this.pendingEditorContent=null,this.openEditor(t),n&&(this.editorElement.setEditorContent("vertex",n.vertex),this.editorElement.setEditorContent("fragment",n.fragment))}openEditor(e){const t=this.findEntry(e),n=this.originals.get(e);if(!t||!n||!this.editorElement)return;this.editorEntryId=e,this.manager.history.recordAction(`Open shader editor: ${e}`);const s=this.modifiedShaders.get(e),i=Ls(t),o=s?.vertex??mt(i.vertex),a=s?.fragment??mt(i.fragment),r=t.kind==="effect"&&!i.vertex;this.editorElement.open(e,o,a,mt(n.vertexShader),mt(n.fragmentShader),r)}closeEditor(){this.editorElement&&this.editorElement.hide(),this.editorEntryId=null}findEntry(e){return this.entries.find(t=>t.id===e)}applyShaderToEntry(e,t,n){e.kind==="material"?(t!==void 0&&(e.data.material.vertexShader=t),n!==void 0&&(e.data.material.fragmentShader=n),e.data.material.needsUpdate=!0,this.propagateToClones(e.id,t,n)):e.data.effect.applyShaderEdit(n??e.data.effect.getFragmentShader(),t)}propagateToClones(e,t,n){const i=this.engine.materials.getClones(e);if(i)for(const o of i)o instanceof de&&(t!==void 0&&(o.vertexShader=t),n!==void 0&&(o.fragmentShader=n),o.needsUpdate=!0)}onRefresh=()=>{this.refreshEntries()};onUniformChange=(e,t)=>{};onApplyShader=e=>{const{materialId:t,vertexSource:n,fragmentSource:s}=e.detail,i=this.findEntry(t);i&&(this.manager.history.recordAction(`Edit shaders: ${t}`),this.applyShaderToEntry(i,n,s),this.modifiedShaders.set(t,{vertex:n,fragment:s}),this.editorElement?.clearError(),i.kind==="material"&&requestAnimationFrame(()=>{const o=this.checkCompilationError(i.data.material);o&&this.editorElement?.showError(o)}))};onResetShader=e=>{const{materialId:t,shaderType:n}=e.detail,s=this.findEntry(t),i=this.originals.get(t);if(!s||!i)return;this.manager.history.recordAction(`Reset ${n} shader: ${t}`);const o=n==="vertex"?i.vertexShader:i.fragmentShader;n==="vertex"?this.applyShaderToEntry(s,o,void 0):this.applyShaderToEntry(s,void 0,o),this.editorElement?.setSource(n,mt(o)),this.editorElement?.clearError();const a=this.modifiedShaders.get(t);a&&(delete a[n],!a.vertex&&!a.fragment&&this.modifiedShaders.delete(t))};onShaderInput=e=>{const{materialId:t,shaderType:n,source:s}=e.detail,i=this.modifiedShaders.get(t)??{};i[n]=s,this.modifiedShaders.set(t,i),this.manager.history.recordAction(`Edit ${n} shader: ${t}`)};onCloseEditor=()=>{this.editorEntryId=null,this.manager.history.recordAction("Close shader editor")};onSpawnPrimitive=e=>{const{type:t,segments:n}=e.detail,s=this.editorEntryId??this.materials[0]?.id,i=this.findEntry(s);!i||i.kind!=="material"||!this.spawner||(this.spawner.spawn(i.data.material,s,{type:t,segments:Math.max(1,n)}),this.updateSpawnedList())};onRemovePrimitive=e=>{const{index:t}=e.detail;this.spawner?.remove(t),this.updateSpawnedList()};onRemoveAllPrimitives=()=>{this.spawner?.removeAll(),this.updateSpawnedList()};updateSpawnedList(){if(!this.spawner||!this.panelElement)return;const e=this.spawner.getAll().map(t=>({name:t.mesh.name}));this.panelElement.updateSpawnedList(e)}checkCompilationError(e){const t=this.engine.renderer.instance,n=t.getContext(),s=t.properties.get(e);if(!s?.currentProgram)return null;const i=s.currentProgram.program;if(!i)return null;const o=n.getAttachedShaders(i)?.[0],a=n.getAttachedShaders(i)?.[1];return o&&!n.getShaderParameter(o,n.COMPILE_STATUS)?`Vertex: ${n.getShaderInfoLog(o)}`:a&&!n.getShaderParameter(a,n.COMPILE_STATUS)?`Fragment: ${n.getShaderInfoLog(a)}`:n.getProgramParameter(i,n.LINK_STATUS)?null:`Link: ${n.getProgramInfoLog(i)}`}}const Ml="debug-config-bookmarks",Al=1,Oe="data";class Il{db=null;initPromise=null;async init(){if(!this.db)return this.initPromise?this.initPromise:(this.initPromise=new Promise((e,t)=>{const n=indexedDB.open(Ml,Al);n.onerror=()=>{t(new Error(`Failed to open IndexedDB: ${n.error?.message}`))},n.onsuccess=()=>{this.db=n.result,e()},n.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(Oe)||i.createObjectStore(Oe)}}),this.initPromise)}async get(e){return await this.init(),new Promise((t,n)=>{const o=this.db.transaction(Oe,"readonly").objectStore(Oe).get(e);o.onerror=()=>n(o.error),o.onsuccess=()=>t(o.result)})}async set(e,t){return await this.init(),new Promise((n,s)=>{const a=this.db.transaction(Oe,"readwrite").objectStore(Oe).put(t,e);a.onerror=()=>s(a.error),a.onsuccess=()=>n()})}async getBookmarks(){return await this.get("bookmarks")??[]}async saveBookmarks(e){await this.set("bookmarks",e)}dispose(){this.db&&(this.db.close(),this.db=null),this.initPromise=null}}class Dl{store;bookmarks=[];initialized=!1;initPromise=null;listeners=new Map;constructor(){this.store=new Il}async init(){if(!this.initialized)return this.initPromise?this.initPromise:(this.initPromise=this.doInit(),this.initPromise)}async doInit(){await this.store.init(),this.bookmarks=await this.store.getBookmarks(),this.initialized=!0}getBookmarks(){return[...this.bookmarks]}getPreferred(){if(this.bookmarks.length===0)return null;const e=this.bookmarks.find(t=>t.starred);return e||this.bookmarks[this.bookmarks.length-1]}getStarred(){return this.bookmarks.find(e=>e.starred)??null}async addBookmark(e){const t={id:this.generateId(),name:this.generateName(),createdAt:Date.now(),starred:!1,overrides:{...e}};return this.bookmarks.push(t),await this.persist(),this.emit("change"),t}async removeBookmark(e){const t=this.bookmarks.findIndex(n=>n.id===e);t!==-1&&(this.bookmarks.splice(t,1),await this.persist(),this.emit("change"))}async toggleStar(e){const t=this.bookmarks.find(n=>n.id===e);if(t){if(t.starred)t.starred=!1;else for(const n of this.bookmarks)n.starred=n.id===e;await this.persist(),this.emit("change")}}async clearAll(){this.bookmarks=[],await this.persist(),this.emit("change")}async renameBookmark(e,t){const n=this.bookmarks.find(s=>s.id===e);n&&(n.name=t,await this.persist(),this.emit("change"))}async updateOverrides(e,t){const n=this.bookmarks.find(s=>s.id===e);n&&(n.overrides={...t},await this.persist(),this.emit("change"))}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>{this.listeners.get(e)?.delete(t)}}async persist(){await this.store.saveBookmarks(this.bookmarks)}emit(e){const t=this.listeners.get(e);if(t)for(const n of t)n()}generateId(){return`${Date.now()}-${Math.random().toString(36).substr(2,9)}`}generateName(){const e=/^Config (\d+)$/;let t=0;for(const n of this.bookmarks){const s=n.name.match(e);s&&(t=Math.max(t,parseInt(s[1],10)))}return`Config ${t+1}`}dispose(){this.store.dispose(),this.listeners.clear()}}const Rl=`<div class="config-editor-panel">
    <debug-subsection title="Browse Config" persist-id="config.browser">
        <div class="browser-content">
            <div class="browser-search">
                <input type="text" class="browser-search-input" placeholder="Search config paths...">
            </div>
            <div class="browser-results"></div>
            <div class="browser-resize-handle"></div>
        </div>
    </debug-subsection>

    <debug-subsection title="Overrides" persist-id="config.overrides">
        <div class="overrides-content">
            <div class="overrides-header">
                <span class="override-count">0</span>
                <button class="copy-btn" title="Copy to clipboard" disabled>Copy</button>
                <button class="reset-all-btn" title="Reset all to original" disabled>Reset All</button>
            </div>
            <div class="overrides-list"></div>
            <div class="empty-state">No config overrides</div>
        </div>
    </debug-subsection>

    <debug-subsection title="Presets" persist-id="config.presets">
        <div class="presets-content">
            <div class="presets-header">
                <button class="add-bookmark-btn" title="Save current overrides as preset">+</button>
            </div>
            <div class="bookmarks-list"></div>
            <div class="bookmarks-empty">No presets saved</div>
        </div>
    </debug-subsection>
</div>
`,Fl=`/**
 * ConfigEditorPanel styles - Astro Darkrise theme
 */

:host {
    display: block;
    font-family: var(--debug-font, 'Consolas', 'Monaco', 'Courier New', monospace);
    font-size: var(--debug-font-size, 12px);
    color: var(--debug-text, #e8eaed);
}

.config-editor-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

/* Browser content */
.browser-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;
}

.browser-search {
    display: flex;
}

.browser-search-input {
    flex: 1;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    padding: 6px 8px;
    outline: none;
}

.browser-search-input:focus {
    border-color: var(--debug-accent, #4a90d9);
}

.browser-search-input::placeholder {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.browser-results {
    height: 200px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1px;
}

.browser-resize-handle {
    height: 6px;
    background: transparent;
    cursor: ns-resize;
    position: relative;
    margin-top: 2px;
}

.browser-resize-handle::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 2px;
    background: var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 1px;
}

.browser-resize-handle:hover::before {
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.browser-empty {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
    padding: 8px;
    text-align: center;
    font-size: 11px;
}

/* Tree nodes */
.tree-node {
    display: flex;
    flex-direction: column;
}

.tree-folder {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    background: var(--debug-bg-section, #1a1d2e);
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
}

.tree-folder:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.tree-folder-icon {
    font-size: 8px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    width: 10px;
    text-align: center;
}

.tree-folder-name {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 11px;
}

.tree-children {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-left: 14px;
    margin-top: 1px;
}

.tree-children.collapsed {
    display: none;
}

.tree-leaf {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border-radius: var(--debug-radius, 4px);
    transition: background 0.15s;
}

.tree-leaf:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.tree-leaf-name {
    flex: 1;
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tree-leaf-value {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    max-width: 80px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tree-leaf-edit-btn {
    padding: 2px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-family: var(--debug-font, monospace);
    font-size: 9px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s, border-color 0.15s;
}

.tree-leaf:hover .tree-leaf-edit-btn {
    opacity: 1;
}

.tree-leaf-edit-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
}

.tree-leaf.has-override .tree-leaf-value {
    color: var(--debug-success, #4caf50);
}

.tree-leaf.has-override .tree-leaf-edit-btn {
    color: var(--debug-warning, #ff9800);
}

.tree-leaf-input {
    flex: 1;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-accent, #4a90d9);
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    padding: 2px 6px;
    outline: none;
    min-width: 60px;
}

.tree-leaf-input:focus {
    box-shadow: 0 0 0 1px var(--debug-accent, #4a90d9);
}

/* Remove spinner buttons from number inputs */
.tree-leaf-input[type="number"]::-webkit-inner-spin-button,
.tree-leaf-input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.tree-leaf-input[type="number"] {
    -moz-appearance: textfield;
}

.tree-leaf-color-input {
    width: 60px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    background: transparent;
    cursor: pointer;
}

.tree-leaf-color-input::-webkit-color-swatch-wrapper {
    padding: 2px;
}

.tree-leaf-color-input::-webkit-color-swatch {
    border-radius: 2px;
    border: none;
}

/* Content sections */
.overrides-content,
.presets-content {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.overrides-header,
.presets-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
}

.override-count {
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    padding: 2px 6px;
    border-radius: 10px;
    font-size: 10px;
    min-width: 16px;
    text-align: center;
}

.override-count.has-changes {
    background: rgba(76, 175, 80, 0.2);
    color: var(--debug-success, #4caf50);
}

.copy-btn {
    padding: 2px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
}

.copy-btn:hover:not(:disabled) {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
    background: rgba(74, 144, 217, 0.15);
}

.copy-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.reset-all-btn {
    margin-left: auto;
    padding: 2px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-error, #f44336);
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-error, #f44336);
    font-family: var(--debug-font, monospace);
    font-size: 10px;
    cursor: pointer;
    transition: background 0.15s;
}

.reset-all-btn:hover:not(:disabled) {
    background: rgba(244, 67, 54, 0.2);
}

.reset-all-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Overrides list */
.overrides-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 200px;
    overflow-y: auto;
}

.empty-state,
.bookmarks-empty {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
    padding: 8px;
    text-align: center;
    font-size: 11px;
}

/* Folder group */
.folder-group {
    margin-bottom: 4px;
}

.folder-header {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    background: var(--debug-bg-section, #1a1d2e);
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    user-select: none;
    transition: background 0.15s;
}

.folder-header:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.folder-icon {
    font-size: 10px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    width: 12px;
}

.folder-name {
    flex: 1;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 11px;
}

.folder-count {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
}

.folder-entries {
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding-left: 16px;
    margin-top: 2px;
}

.folder-entries.collapsed {
    display: none;
}

/* Override entry */
.override-entry {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 6px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border-radius: var(--debug-radius, 4px);
    transition: background 0.15s;
}

.override-entry:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.entry-name {
    flex: 1;
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.entry-values {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: var(--debug-font, monospace);
    font-size: 10px;
}

.entry-original {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    text-decoration: line-through;
}

.entry-arrow {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.entry-current {
    color: var(--debug-success, #4caf50);
}

.entry-color-swatch {
    width: 12px;
    height: 12px;
    border-radius: var(--debug-radius, 4px);
    border: 1px solid var(--debug-border-light, rgba(255, 255, 255, 0.12));
}

.entry-reset-btn {
    padding: 2px 4px;
    background: transparent;
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s, background 0.15s, border-color 0.15s;
}

.override-entry:hover .entry-reset-btn {
    opacity: 1;
}

.entry-reset-btn:hover {
    background: rgba(244, 67, 54, 0.2);
    border-color: var(--debug-error, #f44336);
    color: var(--debug-error, #f44336);
}

/* Bookmarks */
.add-bookmark-btn {
    width: 20px;
    height: 20px;
    padding: 0;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.add-bookmark-btn:hover {
    border-color: var(--debug-accent, #4a90d9);
    color: var(--debug-text, #e8eaed);
}

.add-bookmark-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.bookmarks-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 150px;
    overflow-y: auto;
}

.bookmark-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    transition: background 0.15s;
}

.bookmark-item:hover {
    background: var(--debug-bg-hover, #1e2235);
}

.bookmark-item.starred {
    border-left: 2px solid var(--debug-warning, #ff9800);
    padding-left: 6px;
}

.bookmark-star-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    transition: color 0.15s;
}

.bookmark-star-btn:hover {
    color: var(--debug-warning, #ff9800);
}

.bookmark-star-btn.starred {
    color: var(--debug-warning, #ff9800);
}

.bookmark-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.bookmark-name {
    color: var(--debug-text, #e8eaed);
    font-size: 11px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.bookmark-meta {
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 10px;
}

.bookmark-delete-btn {
    background: none;
    border: none;
    padding: 2px 4px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-size: 14px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s, color 0.15s;
}

.bookmark-item:hover .bookmark-delete-btn {
    opacity: 1;
}

.bookmark-delete-btn:hover {
    color: var(--debug-error, #f44336);
}

/* Edit input */
.bookmark-edit-input {
    flex: 1;
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    border: 1px solid var(--debug-accent, #4a90d9);
    border-radius: var(--debug-radius, 4px);
    color: var(--debug-text, #e8eaed);
    font-family: var(--debug-font, monospace);
    font-size: 11px;
    padding: 2px 4px;
    outline: none;
}

/* Scrollbar styling */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: var(--debug-bg, #191c2d);
}

::-webkit-scrollbar-thumb {
    background: var(--debug-border-light, rgba(255, 255, 255, 0.12));
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}
`;O.register();class pe extends HTMLElement{static tagName="debug-config-editor-panel";shadow;tool=null;browserSearchInput;browserResultsEl;browserResizeHandle;resetAllBtn;copyBtn;overrideCountEl;overridesListEl;emptyStateEl;addBookmarkBtn;bookmarksListEl;bookmarksEmptyEl;collapsedFolders=new Set;collapsedTreeNodes=new Set;editingBookmarkId=null;editingPath=null;bookmarkUnsubscribe=null;searchFilter="";isResizing=!1;browserHeight=200;static STORAGE_SEARCH_FILTER="configEditor:searchFilter";static STORAGE_BROWSER_HEIGHT="configEditor:browserHeight";constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${Fl}</style>${Rl}`,this.browserSearchInput=this.shadow.querySelector(".browser-search-input"),this.browserResultsEl=this.shadow.querySelector(".browser-results"),this.browserResizeHandle=this.shadow.querySelector(".browser-resize-handle"),this.resetAllBtn=this.shadow.querySelector(".reset-all-btn"),this.copyBtn=this.shadow.querySelector(".copy-btn"),this.overrideCountEl=this.shadow.querySelector(".override-count"),this.overridesListEl=this.shadow.querySelector(".overrides-list"),this.emptyStateEl=this.shadow.querySelector(".empty-state"),this.addBookmarkBtn=this.shadow.querySelector(".add-bookmark-btn"),this.bookmarksListEl=this.shadow.querySelector(".bookmarks-list"),this.bookmarksEmptyEl=this.shadow.querySelector(".bookmarks-empty");const e=F.getProject(pe.STORAGE_BROWSER_HEIGHT);e&&(this.browserHeight=e),this.browserResultsEl.style.height=`${this.browserHeight}px`;const t=F.getProject(pe.STORAGE_SEARCH_FILTER);t&&(this.searchFilter=t,this.browserSearchInput.value=t)}setupEventListeners(){this.browserSearchInput.addEventListener("input",this.handleSearchInput),this.browserResultsEl.addEventListener("click",this.handleBrowserClick),this.browserResizeHandle.addEventListener("mousedown",this.handleResizeStart),this.resetAllBtn.addEventListener("click",this.handleResetAll),this.copyBtn.addEventListener("click",this.handleCopy),this.addBookmarkBtn.addEventListener("click",this.handleAddBookmark),this.overridesListEl.addEventListener("click",this.handleOverridesClick),this.bookmarksListEl.addEventListener("click",this.handleBookmarksClick),this.bookmarksListEl.addEventListener("dblclick",this.handleBookmarksDblClick)}cleanupEventListeners(){this.browserSearchInput.removeEventListener("input",this.handleSearchInput),this.browserResultsEl.removeEventListener("click",this.handleBrowserClick),this.browserResizeHandle.removeEventListener("mousedown",this.handleResizeStart),document.removeEventListener("mousemove",this.handleResizeMove),document.removeEventListener("mouseup",this.handleResizeEnd),this.resetAllBtn.removeEventListener("click",this.handleResetAll),this.copyBtn.removeEventListener("click",this.handleCopy),this.addBookmarkBtn.removeEventListener("click",this.handleAddBookmark),this.overridesListEl.removeEventListener("click",this.handleOverridesClick),this.bookmarksListEl.removeEventListener("click",this.handleBookmarksClick),this.bookmarksListEl.removeEventListener("dblclick",this.handleBookmarksDblClick),this.bookmarkUnsubscribe?.()}init(e){this.tool=e;const t=e.getBookmarkManager();t&&t.init().then(()=>{this.bookmarkUnsubscribe=t.on("change",()=>this.renderBookmarks()),this.renderBookmarks()}),this.update()}update(){if(!this.tool)return;const e=this.tool.getOverrideCount();this.overrideCountEl.textContent=String(e),this.overrideCountEl.classList.toggle("has-changes",e>0),this.resetAllBtn.disabled=e===0,this.copyBtn.disabled=e===0,this.addBookmarkBtn.disabled=e===0,this.renderBrowser(),this.renderOverrides()}handleSearchInput=()=>{this.searchFilter=this.browserSearchInput.value.toLowerCase(),F.setProject(pe.STORAGE_SEARCH_FILTER,this.searchFilter),this.renderBrowser()};handleResizeStart=e=>{e.preventDefault(),this.isResizing=!0,document.addEventListener("mousemove",this.handleResizeMove),document.addEventListener("mouseup",this.handleResizeEnd)};handleResizeMove=e=>{if(!this.isResizing)return;const t=this.browserResultsEl.getBoundingClientRect(),n=e.clientY-t.top;this.browserHeight=Math.max(80,Math.min(400,n)),this.browserResultsEl.style.height=`${this.browserHeight}px`};handleResizeEnd=()=>{this.isResizing=!1,document.removeEventListener("mousemove",this.handleResizeMove),document.removeEventListener("mouseup",this.handleResizeEnd),F.setProject(pe.STORAGE_BROWSER_HEIGHT,this.browserHeight)};handleBrowserClick=e=>{const t=e.target,n=t.closest(".tree-folder");if(n){const i=n.dataset.path;i!==void 0&&this.toggleTreeNode(i);return}const s=t.closest(".tree-leaf-edit-btn");if(s){e.stopPropagation();const i=s.dataset.path;i&&this.startEditingValue(i);return}};handleResetAll=async()=>{await me.show("Reset all config overrides to original values?")&&this.tool?.resetAll()};handleCopy=async()=>{if(!this.tool)return;if(await this.tool.copyOverridesToClipboard()){const t=this.copyBtn.textContent;this.copyBtn.textContent="Copied!",setTimeout(()=>{this.copyBtn.textContent=t},1500)}};handleAddBookmark=async()=>{if(!this.tool)return;const e=this.tool.getOverrides();if(e.length===0)return;const t={};for(const s of e)t[s.path]=s.current;await this.tool.getBookmarkManager()?.addBookmark(t)};handleOverridesClick=e=>{const t=e.target,n=t.closest(".folder-header");if(n){const i=n.dataset.folder;i&&this.toggleFolder(i);return}const s=t.closest(".entry-reset-btn");if(s){e.stopPropagation();const i=s.dataset.path;i&&this.tool?.resetValue(i)}};handleBookmarksClick=e=>{const t=e.target,n=t.closest(".bookmark-star-btn");if(n){e.stopPropagation();const o=n.dataset.id;o&&this.tool?.getBookmarkManager()?.toggleStar(o);return}const s=t.closest(".bookmark-delete-btn");if(s){e.stopPropagation();const o=s.dataset.id;o&&this.tool?.getBookmarkManager()?.removeBookmark(o);return}const i=t.closest(".bookmark-item");if(i&&!this.editingBookmarkId){const o=i.dataset.id;o&&this.applyBookmark(o)}};handleBookmarksDblClick=e=>{const n=e.target.closest(".bookmark-name");if(n){e.stopPropagation();const i=n.closest(".bookmark-item")?.dataset.id;i&&this.startEditingBookmark(i)}};buildConfigTree(){const e={name:"",path:"",children:new Map,isLeaf:!1};if(!this.tool)return e;const t=this.tool.getAvailableConfigPaths();for(const n of t){if(this.searchFilter&&!n.toLowerCase().includes(this.searchFilter))continue;const s=n.split(".");let i=e;for(let o=0;o<s.length;o++){const a=s[o],r=o===s.length-1,l=s.slice(0,o+1).join(".");i.children.has(a)||i.children.set(a,{name:a,path:l,children:new Map,isLeaf:r,value:r?this.tool.getValue(n):void 0}),i=i.children.get(a)}}return e}renderBrowser(){if(!this.tool)return;const e=this.buildConfigTree();if(e.children.size===0){this.browserResultsEl.innerHTML='<div class="browser-empty">No matching config paths</div>';return}this.browserResultsEl.innerHTML="";for(const[,t]of e.children){const n=this.createTreeNode(t);this.browserResultsEl.appendChild(n)}}createTreeNode(e){const t=document.createElement("div");if(t.className="tree-node",e.isLeaf){const n=document.createElement("div");n.className="tree-leaf";const s=this.tool?.getOverrides().some(a=>a.path===e.path);s&&n.classList.add("has-override");const i=this.editingPath===e.path,o=document.createElement("span");if(o.className="tree-leaf-name",o.textContent=e.name,o.title=e.path,i){const a=this.isColorValue(e.value),r=document.createElement("input");a?(r.type="color",r.className="tree-leaf-color-input",r.value=this.formatColorValue(e.value),r.addEventListener("input",()=>{this.tool?.setValue(e.path,r.value)}),r.addEventListener("change",()=>{this.editingPath=null,this.renderBrowser()}),r.addEventListener("blur",()=>{setTimeout(()=>{this.editingPath===e.path&&(this.editingPath=null,this.renderBrowser())},100)})):(r.type=typeof e.value=="number"?"number":"text",r.className="tree-leaf-input",r.value=String(e.value),typeof e.value=="number"&&(r.step="any"),r.addEventListener("keydown",l=>{l.key==="Enter"?(l.preventDefault(),this.finishEditingValue(e.path,r.value)):l.key==="Escape"&&(l.preventDefault(),this.cancelEditingValue())}),r.addEventListener("blur",()=>{setTimeout(()=>{this.editingPath===e.path&&this.finishEditingValue(e.path,r.value)},100)})),n.appendChild(o),n.appendChild(r),t.appendChild(n),setTimeout(()=>{r.focus(),!a&&r.select&&r.select()},0)}else{const a=document.createElement("span");a.className="tree-leaf-value",a.textContent=this.formatValue(e.value),a.title=String(e.value);const r=document.createElement("button");r.className="tree-leaf-edit-btn",r.dataset.path=e.path,r.textContent=s?"Edit":"Set",n.appendChild(o),n.appendChild(a),n.appendChild(r),t.appendChild(n)}}else{const n=this.collapsedTreeNodes.has(e.path),s=document.createElement("div");s.className="tree-folder",s.dataset.path=e.path;const i=document.createElement("span");i.className="tree-folder-icon",i.textContent=n?"▶":"▼";const o=document.createElement("span");o.className="tree-folder-name",o.textContent=e.name,s.appendChild(i),s.appendChild(o),t.appendChild(s);const a=document.createElement("div");a.className="tree-children",n&&a.classList.add("collapsed");const r=Array.from(e.children.values()).sort((l,d)=>l.isLeaf!==d.isLeaf?l.isLeaf?1:-1:l.name.localeCompare(d.name));for(const l of r)a.appendChild(this.createTreeNode(l));t.appendChild(a)}return t}toggleTreeNode(e){this.collapsedTreeNodes.has(e)?this.collapsedTreeNodes.delete(e):this.collapsedTreeNodes.add(e),this.renderBrowser()}startEditingValue(e){if(!this.tool)return;const t=this.tool.getValue(e);if(typeof t==="boolean"){this.tool.setValue(e,!t);return}this.editingPath=e,this.renderBrowser()}finishEditingValue(e,t){if(!this.tool)return;const s=typeof this.tool.getValue(e);let i;if(s==="number"){if(i=parseFloat(t),isNaN(i)){this.editingPath=null,this.renderBrowser();return}}else i=t;this.tool.setValue(e,i),this.editingPath=null,this.renderBrowser()}cancelEditingValue(){this.editingPath=null,this.renderBrowser()}renderOverrides(){if(!this.tool)return;const e=this.tool.getOverrideGroups();if(e.length===0){this.overridesListEl.style.display="none",this.emptyStateEl.style.display="block";return}this.overridesListEl.style.display="flex",this.emptyStateEl.style.display="none",this.overridesListEl.innerHTML="";for(const t of e){const n=this.createFolderGroup(t);this.overridesListEl.appendChild(n)}}createFolderGroup(e){const t=document.createElement("div");t.className="folder-group";const n=this.collapsedFolders.has(e.folder),s=document.createElement("div");s.className="folder-header",s.dataset.folder=e.folder;const i=document.createElement("span");i.className="folder-icon",i.textContent=n?"▶":"▼";const o=document.createElement("span");o.className="folder-name",o.textContent=e.folder;const a=document.createElement("span");a.className="folder-count",a.textContent=`(${e.entries.length})`,s.appendChild(i),s.appendChild(o),s.appendChild(a),t.appendChild(s);const r=document.createElement("div");r.className="folder-entries",n&&r.classList.add("collapsed");for(const l of e.entries){const d=this.createOverrideEntry(l);r.appendChild(d)}return t.appendChild(r),t}createOverrideEntry(e){const t=document.createElement("div");t.className="override-entry";const n=e.path.split("."),s=n[n.length-1],i=document.createElement("span");i.className="entry-name",i.textContent=s,i.title=e.path;const o=document.createElement("div");if(o.className="entry-values",this.isColorValue(e.original)||this.isColorValue(e.current)){const l=document.createElement("span");l.className="entry-color-swatch",l.style.background=this.formatColorValue(e.original);const d=document.createElement("span");d.className="entry-arrow",d.textContent="→";const h=document.createElement("span");h.className="entry-color-swatch",h.style.background=this.formatColorValue(e.current),o.appendChild(l),o.appendChild(d),o.appendChild(h)}else{const l=document.createElement("span");l.className="entry-original",l.textContent=this.formatValue(e.original);const d=document.createElement("span");d.className="entry-arrow",d.textContent="→";const h=document.createElement("span");h.className="entry-current",h.textContent=this.formatValue(e.current),o.appendChild(l),o.appendChild(d),o.appendChild(h)}const r=document.createElement("button");return r.className="entry-reset-btn",r.dataset.path=e.path,r.title="Reset to original",r.textContent="↺",t.appendChild(i),t.appendChild(o),t.appendChild(r),t}renderBookmarks(){const e=this.tool?.getBookmarkManager();if(!e)return;const t=e.getBookmarks();if(t.length===0){this.bookmarksListEl.style.display="none",this.bookmarksEmptyEl.style.display="block";return}this.bookmarksListEl.style.display="flex",this.bookmarksEmptyEl.style.display="none",this.bookmarksListEl.innerHTML="";for(let n=t.length-1;n>=0;n--){const s=t[n],i=this.createBookmarkItem(s);this.bookmarksListEl.appendChild(i)}}createBookmarkItem(e){const t=document.createElement("div");t.className="bookmark-item",e.starred&&t.classList.add("starred"),t.dataset.id=e.id;const n=document.createElement("button");n.className="bookmark-star-btn",e.starred&&n.classList.add("starred"),n.dataset.id=e.id,n.title=e.starred?"Unstar":"Set as default",n.textContent=e.starred?"★":"☆";const s=document.createElement("div");if(s.className="bookmark-info",this.editingBookmarkId===e.id){const l=document.createElement("input");l.type="text",l.className="bookmark-edit-input",l.value=e.name,l.addEventListener("keydown",d=>{d.key==="Enter"?(d.preventDefault(),this.finishEditingBookmark(e.id,l.value)):d.key==="Escape"&&(d.preventDefault(),this.cancelEditingBookmark())}),l.addEventListener("blur",()=>{setTimeout(()=>{this.editingBookmarkId===e.id&&this.finishEditingBookmark(e.id,l.value)},100)}),s.appendChild(l),setTimeout(()=>{l.focus(),l.select()},0)}else{const l=document.createElement("span");l.className="bookmark-name",l.textContent=e.name,l.title=`${e.name} (double-click to rename)`,s.appendChild(l)}const o=document.createElement("span");o.className="bookmark-meta";const a=Object.keys(e.overrides).length;o.textContent=`${a} override${a!==1?"s":""}`,s.appendChild(o);const r=document.createElement("button");return r.className="bookmark-delete-btn",r.dataset.id=e.id,r.title="Delete preset",r.textContent="×",t.appendChild(n),t.appendChild(s),t.appendChild(r),t}toggleFolder(e){this.collapsedFolders.has(e)?this.collapsedFolders.delete(e):this.collapsedFolders.add(e),this.renderOverrides()}applyBookmark(e){const t=this.tool?.getBookmarkManager();if(!t||!this.tool)return;const s=t.getBookmarks().find(i=>i.id===e);s&&this.tool.applyBookmark(s.overrides)}startEditingBookmark(e){this.editingBookmarkId=e,this.renderBookmarks()}finishEditingBookmark(e,t){const n=t.trim();n&&this.tool?.getBookmarkManager()?.renameBookmark(e,n),this.editingBookmarkId=null,this.renderBookmarks()}cancelEditingBookmark(){this.editingBookmarkId=null,this.renderBookmarks()}formatValue(e){return e===null?"null":e===void 0?"undefined":typeof e=="number"?Number.isInteger(e)?String(e):e.toFixed(2):typeof e=="boolean"?String(e):typeof e=="string"?e.length>15?e.slice(0,12)+"...":e:typeof e=="object"?JSON.stringify(e).slice(0,15)+"...":String(e)}isColorValue(e){if(typeof e=="string"&&e.startsWith("#"))return!0;if(typeof e=="object"&&e!==null){const t=e;return"r"in t&&"g"in t&&"b"in t}return!1}formatColorValue(e){if(typeof e=="string")return e;if(typeof e=="object"&&e!==null){const t=e;if(typeof t.r=="number"&&typeof t.g=="number"&&typeof t.b=="number"){const n=Math.round(t.r*255),s=Math.round(t.g*255),i=Math.round(t.b*255);return`rgb(${n}, ${s}, ${i})`}}return"#888"}static register(){customElements.get(pe.tagName)||customElements.define(pe.tagName,pe)}}pe.register();const zs="debug-config-editor";class Nl extends _{id="config-editor";name="Config";icon="sliders";panel="info";originalConfig={};currentOverrides=new Map;autoTrackEnabled=!0;isApplyingState=!1;bookmarks=null;panelElement=null;init(e){super.init(e),this.bookmarks=new Dl,this.autoTrackEnabled=F.getProject("config:autoTrack",!0)??!0,this.captureOriginals()}enable(){}disable(){}dispose(){this.bookmarks?.dispose(),this.bookmarks=null,this.panelElement=null}captureOriginals(){const e=this.engine.config.data;this.originalConfig=wi(e)}applyOverridesToConfig(){if(this.currentOverrides.size===0){this.engine.config.removePatch(zs);return}const e={};for(const[t,n]of this.currentOverrides)ki(e,t,n);this.engine.config.patch(e,zs)}getShortPath(e){const t=e.split(".");return t.length>1?t.slice(-2).join("."):e}getState(){const e={};for(const[t,n]of this.currentOverrides)e[t]=n;return{overrides:e,autoTrackEnabled:this.autoTrackEnabled}}setState(e){const t=e;if(t){this.isApplyingState=!0;try{if(typeof t.autoTrackEnabled=="boolean"&&(this.autoTrackEnabled=t.autoTrackEnabled),t.overrides&&typeof t.overrides=="object"){this.currentOverrides.clear();for(const[n,s]of Object.entries(t.overrides))this.currentOverrides.set(n,s);this.applyOverridesToConfig()}this.updateUI()}finally{this.isApplyingState=!1}}}setValue(e,t){if(this.isApplyingState)return;const n=ht(this.originalConfig,e);this.valuesEqual(t,n)?this.currentOverrides.delete(e):this.currentOverrides.set(e,this.cloneValue(t)),this.applyOverridesToConfig(),this.manager.history.recordAction(`Config: ${this.getShortPath(e)}`),this.updateUI()}getValue(e){return ht(this.engine.config.data,e)}getOriginalValue(e){return ht(this.originalConfig,e)}getOverrideGroups(){const e=new Map;for(const[n,s]of this.currentOverrides){const o=n.split(".").slice(0,-1).join(".")||"Root",a=ht(this.originalConfig,n);e.has(o)||e.set(o,[]),e.get(o).push({path:n,original:a,current:s})}const t=[];for(const[n,s]of e)t.push({folder:n,entries:s});return t.sort((n,s)=>n.folder.localeCompare(s.folder)),t}getOverrides(){const e=[];for(const[t,n]of this.currentOverrides)e.push({path:t,original:ht(this.originalConfig,t),current:n});return e}resetValue(e){this.isApplyingState=!0;try{this.currentOverrides.delete(e),this.applyOverridesToConfig(),this.manager.history.recordAction(`Reset: ${this.getShortPath(e)}`),this.updateUI()}finally{this.isApplyingState=!1}}resetAll(){this.isApplyingState=!0;try{this.currentOverrides.clear(),this.applyOverridesToConfig(),this.manager.history.recordAction("Reset all config"),this.updateUI()}finally{this.isApplyingState=!1}}setAutoTrackEnabled(e){this.autoTrackEnabled=e,F.setProject("config:autoTrack",e)}isAutoTrackEnabled(){return this.autoTrackEnabled}getBookmarkManager(){return this.bookmarks}getOverrideCount(){return this.currentOverrides.size}async copyOverridesToClipboard(){if(this.currentOverrides.size===0)return!1;const e=[];for(const[t,n]of this.currentOverrides){const s=this.formatValueForCopy(n);e.push(`${t}: ${s},`)}try{return await navigator.clipboard.writeText(e.join(`
`)),!0}catch{return!1}}formatValueForCopy(e){return e===null?"null":e===void 0?"undefined":typeof e=="string"?`'${e}'`:typeof e=="number"||typeof e=="boolean"?String(e):JSON.stringify(e)}applyBookmark(e){this.isApplyingState=!0;try{for(const[t,n]of Object.entries(e))this.currentOverrides.set(t,this.cloneValue(n));this.applyOverridesToConfig(),this.updateUI()}finally{this.isApplyingState=!1}}getAvailableConfigPaths(){const e=[],t=(n,s)=>{if(n!=null){if(typeof n!="object"){e.push(s);return}if(Array.isArray(n)){e.push(s);return}for(const[i,o]of Object.entries(n)){const a=s?`${s}.${i}`:i;t(o,a)}}};return t(this.engine.config.data,""),e.sort()}createUI(e){this.panelElement=document.createElement(pe.tagName),this.panelElement.init(this),e.appendChild(this.panelElement)}updateUI(){this.panelElement?.update()}cloneValue(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(n=>this.cloneValue(n));const t={};for(const[n,s]of Object.entries(e))t[n]=this.cloneValue(s);return t}valuesEqual(e,t){if(e===t)return!0;if(e===null||t===null||e===void 0||t===void 0||typeof e!=typeof t)return!1;if(typeof e!="object")return e===t;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!this.valuesEqual(e[a],t[a]))return!1;return!0}const n=e,s=t,i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const a of i)if(!this.valuesEqual(n[a],s[a]))return!1;return!0}}const Bl={autoStart:!0,maxSpans:1e4};function ae(){return`span_${Date.now()}_${Math.random().toString(36).slice(2,9)}`}function $l(){return`snapshot_${Date.now()}_${Math.random().toString(36).slice(2,9)}`}class Hl{config;spans=new Map;spansByName=new Map;completedSpans=[];startTime=0;running=!1;engineUnsubscribers=[];resourcesUnsubscribers=[];hookedEngine=null;log=null;constructor(e={}){this.config={...Bl,...e},this.config.autoStart&&this.start()}setLogger(e){this.log=e}start(e){this.running||(this.startTime=e??performance.now(),this.running=!0,this.spans.clear(),this.spansByName.clear(),this.completedSpans.length=0)}stop(){if(!this.running)return;const e=this.getRelativeTime();for(const t of this.spans.values())t.end===null&&(t.end=e,this.completedSpans.push(this.freezeSpan(t)));this.spans.clear(),this.spansByName.clear(),this.running=!1}isRunning(){return this.running}getRelativeTime(){return performance.now()-this.startTime}freezeSpan(e){return{id:e.id,name:e.name,category:e.category,start:e.start,end:e.end,parentId:e.parentId,data:{...e.data}}}beginSpan(e,t,n={}){if(!this.running)return"";const s=ae();let i=n.parentId??null;!i&&n.parentName&&(i=this.spansByName.get(n.parentName)??null);const o={id:s,name:e,category:t,start:this.getRelativeTime(),end:null,parentId:i,data:n.data??{}};return this.spans.set(s,o),this.spansByName.set(e,s),this.completedSpans.length>this.config.maxSpans&&this.completedSpans.shift(),s}endSpan(e,t){if(!this.running||!e)return;const n=this.spans.get(e);n&&(n.end=this.getRelativeTime(),t&&Object.assign(n.data,t),this.completedSpans.push(this.freezeSpan(n)),this.spans.delete(e))}endSpanByName(e,t){const n=this.spansByName.get(e);n&&(this.endSpan(n,t),this.spansByName.delete(e))}hookEngine(e){this.hookedEngine=e;const t=e,n=t.getComponentTiming(),s=t.getEffectTiming(),i=t.getShaderTiming(),o=t.getSamplingTiming(),a=t.getBakingTiming(),r=new Set;for(const[g,y]of n)if(y.endTime!==null){const z=y.endTime-y.startTime,T=Math.max(0,y.startTime-this.startTime),D=T+z;let R=null;y.parent&&(R=this.spansByName.get(y.parent)??null);const j={id:ae(),name:g,category:"component",start:T,end:D,parentId:R,data:{type:"component",retrospective:!0}};this.spansByName.set(g,j.id),this.completedSpans.push(this.freezeSpan(j)),r.add(g)}else{const z=Math.max(0,y.startTime-this.startTime);let T=null;y.parent&&(T=this.spansByName.get(y.parent)??null);const D=ae(),R={id:D,name:g,category:"component",start:z,end:null,parentId:T,data:{type:"component"}};this.spans.set(D,R),this.spansByName.set(g,D),r.add(g)}const l=new Set,d=[];for(const[g,y]of s)if(y.endTime!==null){const z=y.endTime-y.startTime,T=Math.max(0,y.startTime-this.startTime),D=T+z,R={id:ae(),name:g,category:"effect",start:T,end:D,parentId:null,data:{type:"effect",retrospective:!0,parentName:y.parent}};this.spansByName.set(g,R.id),d.push({span:R,parentName:y.parent}),l.add(g)}else{const z=Math.max(0,y.startTime-this.startTime),T=ae();let D=null;y.parent&&(D=this.spansByName.get(y.parent)??null);const R={id:T,name:g,category:"effect",start:z,end:null,parentId:D,data:{type:"effect",parentName:y.parent}};this.spans.set(T,R),this.spansByName.set(g,T),l.add(g)}for(const{span:g,parentName:y}of d)y&&(g.parentId=this.spansByName.get(y)??null),this.completedSpans.push(this.freezeSpan(g));const h=new Set,u=[];for(const[g,y]of i)if(y.endTime!==null){const z=y.endTime-y.startTime,T=Math.max(0,y.startTime-this.startTime),D=T+z,R={id:ae(),name:g,category:"shader",start:T,end:D,parentId:null,data:{type:"shader",retrospective:!0,parentName:y.parent}};this.spansByName.set(g,R.id),u.push({span:R,parentName:y.parent}),h.add(g)}else{const z=Math.max(0,y.startTime-this.startTime),T=ae();let D=null;y.parent&&(D=this.spansByName.get(y.parent)??null);const R={id:T,name:g,category:"shader",start:z,end:null,parentId:D,data:{type:"shader",parentName:y.parent}};this.spans.set(T,R),this.spansByName.set(g,T),h.add(g)}for(const{span:g,parentName:y}of u)y&&(g.parentId=this.spansByName.get(y)??null),this.completedSpans.push(this.freezeSpan(g));const p=g=>{r.has(g.name)||this.beginSpan(g.name,"component",{parentName:g.parent,data:{type:"component"}})},x=g=>{this.endSpanByName(g.name)};t.on("component:loading",p),t.on("component:ready",x);const f=g=>{l.has(g.name)||this.beginSpan(g.name,"effect",{parentName:g.parent,data:{type:"effect"}})},C=g=>{this.endSpanByName(g.name)};t.on("effect:loading",f),t.on("effect:ready",C);const m=g=>{h.has(g.name)||this.beginSpan(g.name,"shader",{parentName:g.parent,data:{type:"shader"}})},w=g=>{this.endSpanByName(g.name)};t.on("shader:loading",m),t.on("shader:ready",w);const E=new Set,P=[];for(const[g,y]of o)if(y.endTime!==null){const z=y.endTime-y.startTime,T=Math.max(0,y.startTime-this.startTime),D=T+z,R={id:ae(),name:g,category:"sampling",start:T,end:D,parentId:null,data:{type:"sampling",retrospective:!0,parentName:y.parent}};this.spansByName.set(g,R.id),P.push({span:R,parentName:y.parent}),E.add(g)}else{const z=Math.max(0,y.startTime-this.startTime),T=ae();let D=null;y.parent&&(D=this.spansByName.get(y.parent)??null);const R={id:T,name:g,category:"sampling",start:z,end:null,parentId:D,data:{type:"sampling",parentName:y.parent}};this.spans.set(T,R),this.spansByName.set(g,T),E.add(g)}for(const{span:g,parentName:y}of P)y&&(g.parentId=this.spansByName.get(y)??null),this.completedSpans.push(this.freezeSpan(g));const b=new Set,k=[];for(const[g,y]of a)if(y.endTime!==null){const z=y.endTime-y.startTime,T=Math.max(0,y.startTime-this.startTime),D=T+z,R={id:ae(),name:g,category:"baking",start:T,end:D,parentId:null,data:{type:"baking",retrospective:!0,parentName:y.parent}};this.spansByName.set(g,R.id),k.push({span:R,parentName:y.parent}),b.add(g)}else{const z=Math.max(0,y.startTime-this.startTime),T=ae();let D=null;y.parent&&(D=this.spansByName.get(y.parent)??null);const R={id:T,name:g,category:"baking",start:z,end:null,parentId:D,data:{type:"baking",parentName:y.parent}};this.spans.set(T,R),this.spansByName.set(g,T),b.add(g)}for(const{span:g,parentName:y}of k)y&&(g.parentId=this.spansByName.get(y)??null),this.completedSpans.push(this.freezeSpan(g));const L=g=>{E.has(g.name)||this.beginSpan(g.name,"sampling",{parentName:g.parent,data:{type:"sampling"}})},I=g=>{this.endSpanByName(g.name)};t.on("sampling:loading",L),t.on("sampling:ready",I);const M=g=>{b.has(g.name)||this.beginSpan(g.name,"baking",{parentName:g.parent,data:{type:"baking"}})},A=g=>{this.endSpanByName(g.name)};t.on("baking:loading",M),t.on("baking:ready",A),this.engineUnsubscribers.push(()=>t.off("component:loading",p),()=>t.off("component:ready",x),()=>t.off("effect:loading",f),()=>t.off("effect:ready",C),()=>t.off("shader:loading",m),()=>t.off("shader:ready",w),()=>t.off("sampling:loading",L),()=>t.off("sampling:ready",I),()=>t.off("baking:loading",M),()=>t.off("baking:ready",A))}hookResources(e){const t=new Map,n=new Set,s=e.getAllResourcesInfo();for(const i of s){const o=i.key;if(i.status==="loaded"&&i.loadTime!==null&&i.startTime!==null){const l=Math.max(0,i.startTime-this.startTime),d=l+i.loadTime,h={id:ae(),name:o,category:"resource",start:l,end:d,parentId:null,data:{type:i.type,loadingMode:i.loadingMode,path:i.path,status:"loaded",size:i.size,loadTime:i.loadTime,retrospective:!0}};this.completedSpans.push(this.freezeSpan(h)),n.add(o);continue}i.status==="loading"&&(this.beginSpan(o,"resource",{data:{type:i.type,loadingMode:i.loadingMode,path:i.path}}),n.add(o));const a=`status:${o}`,r=l=>{if(l.status==="loading"){if(n.has(o))return;n.add(o),this.beginSpan(o,"resource",{data:{type:i.type,loadingMode:i.loadingMode,path:i.path}})}else if(l.status==="loaded"||l.status==="error"){const d=e.getResourceInfo(o);this.endSpanByName(o,{status:l.status,size:d?.size,loadTime:d?.loadTime})}};e.on(a,r),t.set(o,r)}this.resourcesUnsubscribers.push(()=>{for(const[i,o]of t)e.off(`status:${i}`,o)})}unhookEngine(){for(const e of this.engineUnsubscribers)e();this.engineUnsubscribers=[],this.hookedEngine=null}unhookResources(){for(const e of this.resourcesUnsubscribers)e();this.resourcesUnsubscribers=[]}getSpans(){this.refreshComponentParents();const e=Array.from(this.spans.values()).map(t=>this.freezeSpan(t));return[...this.completedSpans,...e]}getCompletedSpans(){return this.completedSpans}refreshComponentParents(){if(!this.hookedEngine)return;const t=this.hookedEngine.getComponentTiming();for(const[n,s]of t){if(!s.parent)continue;const i=this.spansByName.get(n);if(!i)continue;const o=this.spansByName.get(s.parent);if(!o)continue;const a=this.spans.get(i);a&&a.parentId!==o&&(a.parentId=o);const r=this.completedSpans.findIndex(l=>l.id===i);if(r!==-1){const l=this.completedSpans[r];l.parentId!==o&&(this.completedSpans[r]={...l,parentId:o})}}}takeSnapshot(e){this.refreshComponentParents();const t=this.getRelativeTime(),n=this.getSpans(),s={userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",url:typeof window<"u"?window.location.href:"unknown"};return{id:$l(),name:e??`Snapshot ${new Date().toLocaleTimeString()}`,timestamp:Date.now(),duration:t,spans:n,metadata:s}}clear(){this.spans.clear(),this.spansByName.clear(),this.completedSpans.length=0}dispose(){this.stop(),this.unhookEngine(),this.unhookResources(),this.clear()}}const Ol=.05;function Vl(c){return c.end===null?0:c.end-c.start}function ql(c){if(c.length<2)throw new Error("Need at least 2 snapshots to diff");const e=new Set,t=[];for(const a of c){const r=new Map;for(const l of a.spans)r.set(l.name,l),e.add(l.name);t.push(r)}const n=[];let s=0,i=0,o=0;for(const a of e){const r=[],l=[],d=[],h=[],u=[],p=[];for(const m of t){const w=m.get(a);w?(r.push(w.start),l.push(w.end),d.push(Vl(w))):(r.push(null),l.push(null),d.push(null))}const x=d[0],f=r[0];for(let m=0;m<d.length;m++){const w=d[m],E=r[m];if(E===null||f===null?h.push(null):h.push(E-f),w===null)u.push(null),p.push("missing");else if(x===null||x===0)u.push(null),p.push(m===0?"same":"missing");else{const P=(w-x)/x*100;u.push(P),Math.abs(P)<Ol*100?(p.push("same"),m>0&&o++):P<0?(p.push("faster"),m>0&&s++):(p.push("slower"),m>0&&i++)}}let C="custom";for(const m of t){const w=m.get(a);if(w){C=w.category;break}}n.push({name:a,category:C,starts:r,ends:l,durations:d,startDeltas:h,deltas:u,status:p})}return n.sort((a,r)=>a.name.localeCompare(r.name)),{snapshotIds:c.map(a=>a.id),snapshotNames:c.map(a=>a.name),spans:n,summary:{totalDurations:c.map(a=>a.duration),fasterCount:s,slowerCount:i,sameCount:o}}}function Ul(c,e){if(c.length===0)throw new Error("Need at least 1 snapshot to average");if(c.length===1)return{...c[0],id:`group_${e}_${Date.now()}`,name:e};const t=new Map;for(const i of c)for(const o of i.spans){t.has(o.name)||t.set(o.name,{starts:[],ends:[],category:o.category,parentId:o.parentId,data:{...o.data}});const a=t.get(o.name);a.starts.push(o.start),o.end!==null&&a.ends.push(o.end)}const n=[];let s=0;for(const[i,o]of t){const a=o.starts.reduce((l,d)=>l+d,0)/o.starts.length,r=o.ends.length>0?o.ends.reduce((l,d)=>l+d,0)/o.ends.length:null;r!==null&&r>s&&(s=r),n.push({id:`${e}_${i}`,name:i,category:o.category,start:a,end:r,parentId:o.parentId,data:{...o.data,_averaged:!0,_sampleCount:o.starts.length}})}return{id:`group_${e}_${Date.now()}`,name:e,timestamp:Date.now(),duration:s,spans:n,metadata:{...c[0].metadata}}}const _l=`<div class="analyzer-header">
    <div class="status">
        <span class="status-dot"></span>
        <span class="status-text">Profiler stopped</span>
    </div>
    <div class="analyzer-controls">
        <button class="start-btn">Start</button>
        <button class="stop-btn">Stop</button>
        <button class="clear-btn">Clear</button>
        <button class="snapshot-btn">Snapshot</button>
    </div>
</div>

<div class="plugin-area">
    <div class="no-plugins">No analyzer plugins registered</div>
</div>
`,jl=`/**
 * AnalyzerPanel styles - Astro Darkrise theme.
 */

:host {
    display: block;
}

.analyzer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    margin-bottom: 12px;
}

.analyzer-header .status {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
}

.analyzer-header .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    transition: background 0.2s, box-shadow 0.2s;
}

.analyzer-header .status-dot.running {
    background: var(--debug-success, #4caf50);
    box-shadow: 0 0 6px var(--debug-success, #4caf50);
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.analyzer-controls {
    display: flex;
    gap: 4px;
}

.analyzer-controls button {
    padding: 4px 8px;
    font-size: 11px;
    font-family: var(--debug-font, monospace);
    background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));
    color: var(--debug-text, #e8eaed);
    border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
    border-radius: var(--debug-radius, 4px);
    cursor: pointer;
    transition: all 0.2s;
}

.analyzer-controls button:hover {
    border-color: var(--debug-accent, #4a90d9);
}

.analyzer-controls button:active {
    background: var(--debug-accent, #4a90d9);
}

.analyzer-controls button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.analyzer-controls button:disabled:hover {
    border-color: var(--debug-border, rgba(255, 255, 255, 0.08));
}

.plugin-area {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.no-plugins {
    padding: 20px;
    text-align: center;
    color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
    font-style: italic;
    font-size: 11px;
}
`;O.register();class Ps extends HTMLElement{static tagName="debug-analyzer-panel";shadow;initialized=!1;statusDot;statusText;startBtn;stopBtn;clearBtn;snapshotBtn;pluginAreaEl;pluginSections=new Map;tool=null;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}connectedCallback(){this.initialized||(this.initialized=!0),this.setupEventListeners()}disconnectedCallback(){this.cleanupEventListeners()}render(){this.shadow.innerHTML=`<style>${K}${jl}</style>${_l}`,this.cacheElements()}cacheElements(){this.statusDot=this.shadow.querySelector(".status-dot"),this.statusText=this.shadow.querySelector(".status-text"),this.startBtn=this.shadow.querySelector(".start-btn"),this.stopBtn=this.shadow.querySelector(".stop-btn"),this.clearBtn=this.shadow.querySelector(".clear-btn"),this.snapshotBtn=this.shadow.querySelector(".snapshot-btn"),this.pluginAreaEl=this.shadow.querySelector(".plugin-area")}setupEventListeners(){this.startBtn.addEventListener("click",this.onStart),this.stopBtn.addEventListener("click",this.onStop),this.clearBtn.addEventListener("click",this.onClear),this.snapshotBtn.addEventListener("click",this.onSnapshot)}cleanupEventListeners(){this.startBtn.removeEventListener("click",this.onStart),this.stopBtn.removeEventListener("click",this.onStop),this.clearBtn.removeEventListener("click",this.onClear),this.snapshotBtn.removeEventListener("click",this.onSnapshot)}onStart=()=>{this.tool?.startProfiling(),this.updateStatus()};onStop=()=>{this.tool?.stopProfiling(),this.updateStatus()};onClear=()=>{this.tool?.clearProfiling(),this.updateStatus()};onSnapshot=()=>{const e=prompt("Snapshot name:",`Snapshot ${new Date().toLocaleTimeString()}`);e!==null&&this.tool?.takeSnapshot(e)};bindTool(e){this.tool=e;const t={onPluginRegistered:n=>this.addPluginSection(n),onPluginUnregistered:n=>this.removePluginSection(n),onSnapshotsChanged:()=>this.notifyPluginsSnapshotsChanged(),onDiffSelectionChanged:()=>this.notifyPluginsSnapshotsChanged(),onProfilerStateChanged:()=>this.updateStatus()};e.setPanelCallbacks(t);for(const n of e.getPlugins())this.addPluginSection(n);this.updateStatus()}updateStatus(){if(!this.tool)return;const e=this.tool.getProfiler(),t=e.isRunning(),n=e.getSpans().length;this.statusDot.classList.toggle("running",t),this.statusText.textContent=t?`Profiling (${n} spans)`:`Profiler stopped (${n} spans)`,this.startBtn.disabled=t,this.stopBtn.disabled=!t}addPluginSection(e){if(this.pluginSections.has(e.id))return;const t=this.pluginAreaEl.querySelector(".no-plugins");t&&t.remove();const n=document.createElement(O.tagName);n.setAttribute("title",e.name),n.setAttribute("with-checkbox",""),n.setAttribute("persist-id",`analyzer-${e.id}`),e.isEnabled()&&n.setChecked(!0),n.addEventListener("checkbox-change",(i=>{i.detail.checked?this.tool?.activatePlugin(e.id):this.tool?.deactivatePlugin(e.id)}));const s=n.getContent();e.createUI&&e.createUI(s),this.pluginAreaEl.appendChild(n),this.pluginSections.set(e.id,{subsection:n,contentContainer:s,plugin:e})}removePluginSection(e){const t=this.pluginSections.get(e);t&&(t.subsection.remove(),this.pluginSections.delete(e),this.pluginSections.size===0&&(this.pluginAreaEl.innerHTML='<div class="no-plugins">No analyzer plugins registered</div>'))}updatePluginUIs(){for(const e of this.pluginSections.values())e.plugin.updateUI?.()}notifyPluginsSnapshotsChanged(){for(const e of this.pluginSections.values())e.plugin.onSnapshotsChanged?.()}static register(){customElements.get(this.tagName)||customElements.define(this.tagName,this)}}const Ms="analyzer:state";class Gl extends _{id="analyzer";name="Analyzer";icon="chart";profiler;snapshots=[];selectedForDiff=[];groupAssignments=new Map;definedGroups=new Set;plugins=new Map;activePlugins=new Set;uiUpdateInterval=null;panelCallbacks=null;log;constructor(){super(),this.profiler=new Hl({autoStart:!1})}init(e){if(super.init(e),this.log=this.engine.getLogger("Debug.AnalyzerTool"),this.profiler.setLogger(this.engine.getLogger("Debug.Profiler")),this.loadPersistedState(),!this.profiler.isRunning()){const t=this.engine.getStartTime();this.profiler.start(t),this.log.info("Profiler started with reference time: %d",t)}this.profiler.hookEngine(this.engine),this.profiler.hookResources(this.manager.context.resources)}loadPersistedState(){const e=F.getProject(Ms);e&&(this.snapshots=e.snapshots??[],this.selectedForDiff=e.selectedForDiff??[],e.groupAssignments&&(this.groupAssignments=new Map(Object.entries(e.groupAssignments))),e.definedGroups&&(this.definedGroups=new Set(e.definedGroups)),this.log.info("Loaded %d snapshots from storage",this.snapshots.length))}persistState(){const e={enabled:this.enabled,snapshots:this.snapshots,selectedForDiff:this.selectedForDiff,groupAssignments:Object.fromEntries(this.groupAssignments),definedGroups:[...this.definedGroups]};F.setProject(Ms,e)}setPanelCallbacks(e){this.panelCallbacks=e}registerPlugin(e){if(this.plugins.has(e.id)){this.log.warn('Plugin "%s" already registered, skipping',e.id);return}this.plugins.set(e.id,e),e.init(this.createPluginContext()),this.panelCallbacks?.onPluginRegistered(e),this.log.info("Plugin registered: %s (%s)",e.name,e.id)}unregisterPlugin(e){const t=this.plugins.get(e);t&&(this.activePlugins.has(e)&&this.deactivatePlugin(e),t.dispose(),this.plugins.delete(e),this.panelCallbacks?.onPluginUnregistered(e),this.log.info("Plugin unregistered: %s",e))}activatePlugin(e){const t=this.plugins.get(e);!t||this.activePlugins.has(e)||(t.enable(),this.activePlugins.add(e),this.log.info("Plugin activated: %s",e))}deactivatePlugin(e){const t=this.plugins.get(e);!t||!this.activePlugins.has(e)||(t.disable(),this.activePlugins.delete(e),this.log.info("Plugin deactivated: %s",e))}togglePlugin(e){this.activePlugins.has(e)?this.deactivatePlugin(e):this.activatePlugin(e)}getPlugins(){return Array.from(this.plugins.values())}getPlugin(e){return this.plugins.get(e)}createPluginContext(){return{engine:this.engine,resources:this.manager.context.resources,debugContext:this.manager.context,history:this.manager.history,profiler:this.profiler,createLogger:e=>this.engine.getLogger(`Debug.${e}`),getSnapshots:()=>this.snapshots,saveSnapshot:e=>this.addSnapshot(e),deleteSnapshot:e=>this.removeSnapshot(e),getSelectedForDiff:()=>this.selectedForDiff,setSelectedForDiff:e=>this.setSelectedForDiff(e),computeDiff:()=>this.computeDiff(),getSnapshotGroup:e=>this.getSnapshotGroup(e),setSnapshotGroup:(e,t)=>this.setSnapshotGroup(e,t),getGroupAssignments:()=>this.getGroupAssignments(),getGroupNames:()=>this.getGroupNames(),createGroup:e=>this.createGroup(e),deleteGroup:e=>this.deleteGroup(e),requestUIRefresh:()=>this.refreshUI(),notifyProfilerStateChanged:()=>this.panelCallbacks?.onProfilerStateChanged()}}getProfiler(){return this.profiler}startProfiling(){this.profiler.start(),this.log.info("Profiling started")}stopProfiling(){this.profiler.stop(),this.log.info("Profiling stopped")}clearProfiling(){this.profiler.clear(),this.profiler.start(),this.log.info("Profiler cleared and restarted")}takeSnapshot(e){const t=this.profiler.takeSnapshot(e);return this.addSnapshot(t),t}addSnapshot(e){if(this.snapshots.some(t=>t.id===e.id)){this.log.warn("Snapshot %s already exists, skipping",e.id);return}this.snapshots.push(e),this.persistState(),this.panelCallbacks?.onSnapshotsChanged(),this.log.info("Snapshot added: %s (%d spans)",e.name,e.spans.length)}removeSnapshot(e){const t=this.snapshots.findIndex(n=>n.id===e);t!==-1&&(this.snapshots.splice(t,1),this.selectedForDiff=this.selectedForDiff.filter(n=>n!==e),this.groupAssignments.delete(e),this.persistState(),this.panelCallbacks?.onSnapshotsChanged(),this.log.info("Snapshot removed: %s",e))}getSnapshots(){return this.snapshots}getSnapshot(e){return this.snapshots.find(t=>t.id===e)}renameSnapshot(e,t){const n=this.snapshots.find(i=>i.id===e);if(!n)return;const s=this.snapshots.indexOf(n);this.snapshots[s]={...n,name:t},this.persistState(),this.panelCallbacks?.onSnapshotsChanged()}setSelectedForDiff(e){this.selectedForDiff=e,this.persistState(),this.panelCallbacks?.onDiffSelectionChanged()}getSelectedForDiff(){return this.selectedForDiff}toggleDiffSelection(e){this.selectedForDiff.includes(e)?this.selectedForDiff=this.selectedForDiff.filter(t=>t!==e):this.selectedForDiff=[...this.selectedForDiff,e],this.persistState(),this.panelCallbacks?.onDiffSelectionChanged()}setSnapshotGroup(e,t){t&&t.trim()?this.groupAssignments.set(e,t.trim()):this.groupAssignments.delete(e),this.persistState(),this.panelCallbacks?.onSnapshotsChanged()}getSnapshotGroup(e){return this.groupAssignments.get(e)}getGroupAssignments(){return this.groupAssignments}getGroupNames(){return[...new Set([...this.definedGroups,...this.groupAssignments.values()])].sort()}createGroup(e){const t=e.trim();!t||this.definedGroups.has(t)||(this.definedGroups.add(t),this.persistState(),this.panelCallbacks?.onSnapshotsChanged())}deleteGroup(e){this.definedGroups.delete(e);for(const[t,n]of this.groupAssignments)n===e&&this.groupAssignments.delete(t);this.persistState(),this.panelCallbacks?.onSnapshotsChanged()}buildEffectiveSnapshots(e){const t=[],n=new Map;for(const i of e){const o=this.groupAssignments.get(i.id);o?(n.has(o)||n.set(o,[]),n.get(o).push(i)):t.push(i)}const s=[...t];for(const[i,o]of n)s.push(Ul(o,i));return s}computeDiff(){const e=this.selectedForDiff.map(n=>this.snapshots.find(s=>s.id===n)).filter(n=>n!==void 0),t=this.buildEffectiveSnapshots(e);return t.length<2?null:ql(t)}enable(){this.enabled=!0;for(const e of this.activePlugins)this.plugins.get(e)?.enable();this.uiUpdateInterval=setInterval(()=>this.refreshUI(),1e3),this.log.info("AnalyzerTool enabled")}disable(){this.enabled=!1;for(const e of this.activePlugins)this.plugins.get(e)?.disable();this.uiUpdateInterval&&(clearInterval(this.uiUpdateInterval),this.uiUpdateInterval=null),this.log.info("AnalyzerTool disabled")}update(e){if(this.enabled)for(const t of this.activePlugins)this.plugins.get(t)?.update?.(e)}render(e){if(this.enabled)for(const t of this.activePlugins)this.plugins.get(t)?.render?.(e)}createUI(e){Ps.register();const t=document.createElement(Ps.tagName);t.bindTool(this),e.appendChild(t)}refreshUI(){for(const e of this.activePlugins)this.plugins.get(e)?.updateUI?.()}dispose(){this.disable();for(const e of this.plugins.values())e.dispose();this.plugins.clear(),this.activePlugins.clear(),this.profiler.dispose(),this.log.info("AnalyzerTool disposed")}getState(){const e={};for(const[t,n]of this.plugins)e[t]={enabled:this.activePlugins.has(t),state:n.getState?.()??null};return{enabled:this.enabled,profilerRunning:this.profiler.isRunning(),snapshots:[],selectedForDiff:this.selectedForDiff,plugins:e}}setState(e){const t=new Set(this.snapshots.map(n=>n.id));this.selectedForDiff=(e.selectedForDiff??[]).filter(n=>t.has(n));for(const[n,s]of Object.entries(e.plugins)){const i=this.plugins.get(n);i&&(s.state!==null&&i.setState?.(s.state),s.enabled&&!this.activePlugins.has(n)?this.activatePlugin(n):!s.enabled&&this.activePlugins.has(n)&&this.deactivatePlugin(n))}this.panelCallbacks?.onDiffSelectionChanged()}}const J={faster:"var(--debug-success, #4caf50)",slower:"var(--debug-error, #f44336)",same:"var(--debug-text-muted, rgba(147, 159, 167, 0.8))",missing:"var(--debug-border, rgba(255, 255, 255, 0.08))",resource:"var(--debug-accent, #4a90d9)",component:"var(--debug-success, #4caf50)",effect:"#9b59b6",shader:"#e8a838",sampling:"#3498db",baking:"#e67e22",custom:"var(--debug-warning, #ff9800)"},fn={faster:"#4caf50",slower:"#f44336",textMuted:"#939fa7"};class Wl{container;diff;mode;onModeChange;sortBy="delta";sortAsc=!1;filterText="";constructor(e){this.container=e.container,this.diff=e.diff,this.mode=e.mode,this.onModeChange=e.onModeChange}getFilteredSpans(){if(!this.filterText)return this.diff.spans;const e=this.filterText.toLowerCase();return this.diff.spans.filter(t=>t.name.toLowerCase().includes(e))}setDiff(e){this.diff=e,this.render()}setMode(e){this.mode=e,this.render(),this.onModeChange?.(e)}render(){switch(this.container.innerHTML="",this.renderHeader(),this.mode){case"side-by-side":this.renderSideBySide();break;case"overlay":this.renderOverlay();break;case"table":this.renderTable();break}}renderHeader(){const e=document.createElement("div");e.className="diff-header";const t=this.renderAnalytics();e.appendChild(t);const n=document.createElement("div");n.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; gap: 12px;";const s=document.createElement("div");s.className="debug-button-group";const i=[{mode:"side-by-side",label:"Side by Side"},{mode:"overlay",label:"Overlay"},{mode:"table",label:"Table"}];for(const{mode:h,label:u}of i){const p=document.createElement("button");p.textContent=u,p.className=`debug-button-group-item${this.mode===h?" active":""}`,p.addEventListener("click",()=>this.setMode(h)),s.appendChild(p)}n.appendChild(s);const o=document.createElement("div");o.style.cssText="flex: 1; max-width: 250px;";const a=document.createElement("input");a.type="text",a.placeholder="Filter spans...",a.value=this.filterText,a.style.cssText=`
            width: 100%;
            padding: 4px 8px;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            color: var(--debug-text, #e8eaed);
            font-size: 11px;
            outline: none;
        `,a.addEventListener("input",()=>{this.filterText=a.value,this.render();const h=this.container.querySelector('input[type="text"]');h&&(h.focus(),h.setSelectionRange(h.value.length,h.value.length))}),o.appendChild(a),n.appendChild(o);const r=this.getFilteredSpans().length,l=this.diff.spans.length,d=document.createElement("div");d.className="diff-summary",d.innerHTML=`
            ${this.filterText?`<span class="debug-text-muted">${r}/${l}</span><span class="diff-separator">|</span>`:""}
            <span class="debug-text-success">▼ ${this.diff.summary.fasterCount} faster</span>
            <span class="diff-separator">|</span>
            <span class="debug-text-error">▲ ${this.diff.summary.slowerCount} slower</span>
            <span class="diff-separator">|</span>
            <span class="debug-text-muted">${this.diff.summary.sameCount} same</span>
        `,n.appendChild(d),e.appendChild(n),this.container.appendChild(e)}renderAnalytics(){const e=this.diff.snapshotNames,t=e.length,n=[];for(let x=0;x<t;x++){let f=0;for(const C of this.diff.spans){const m=C.ends[x];m!==null&&m>f&&(f=m)}n.push(f)}const s=n.reduce((x,f)=>x+f,0)/n.length,i=Math.min(...n),o=Math.max(...n),a=n.indexOf(i),r=n.indexOf(o),l=n[0],d=n[n.length-1],h=l>0?(l-d)/l*100:0,u=document.createElement("div");u.className="diff-analytics",u.style.cssText=`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 12px;
            padding: 12px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, 0.08);
        `;const p=[{label:"Average",value:`${s.toFixed(0)}ms`,detail:`${(s/1e3).toFixed(2)}s`,color:"var(--debug-text, #e8eaed)"},{label:"Best",value:`${i.toFixed(0)}ms`,detail:e[a],color:"var(--debug-success, #4caf50)"},{label:"Worst",value:`${o.toFixed(0)}ms`,detail:e[r],color:"var(--debug-error, #f44336)"},{label:"Spread",value:`${(o-i).toFixed(0)}ms`,detail:`${((o-i)/s*100).toFixed(1)}% variance`,color:"var(--debug-warning, #ff9800)"},{label:"Trend",value:h>0?`▼ ${h.toFixed(1)}%`:h<0?`▲ ${Math.abs(h).toFixed(1)}%`:"—",detail:"first → last",color:h>0?"var(--debug-success, #4caf50)":h<0?"var(--debug-error, #f44336)":"var(--debug-text-muted)"}];for(const x of p){const f=document.createElement("div");f.style.cssText="text-align: center;";const C=document.createElement("div");C.style.cssText="font-size: 10px; color: var(--debug-text-muted, #939fa7); text-transform: uppercase; letter-spacing: 0.5px;",C.textContent=x.label,f.appendChild(C);const m=document.createElement("div");m.style.cssText=`font-size: 18px; font-weight: bold; color: ${x.color}; margin: 4px 0;`,m.textContent=x.value,f.appendChild(m);const w=document.createElement("div");w.style.cssText="font-size: 9px; color: var(--debug-text-muted, #939fa7); overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",w.textContent=x.detail,w.title=x.detail,f.appendChild(w),u.appendChild(f)}return u}renderSideBySide(){const e=document.createElement("div");e.className="diff-side-by-side",e.style.cssText=`
            display: flex;
            gap: 16px;
            overflow-x: auto;
        `;const t=this.getFilteredSpans();let n=0;for(const s of t)for(const i of s.ends)i!==null&&i>n&&(n=i);n===0&&(n=Math.max(...this.diff.summary.totalDurations));for(let s=0;s<this.diff.snapshotNames.length;s++){const i=this.createTimelineColumn(s,n,t);e.appendChild(i)}this.setupSideBySideHover(e),this.container.appendChild(e)}setupSideBySideHover(e){if(e.addEventListener("mouseover",t=>{const s=t.target.closest("[data-span-name]");if(!s)return;const i=s.getAttribute("data-span-name");i&&e.querySelectorAll(`[data-span-name="${CSS.escape(i)}"]`).forEach(o=>{o.classList.add("highlighted")})}),e.addEventListener("mouseout",t=>{const s=t.target.closest("[data-span-name]");if(!s)return;const i=s.getAttribute("data-span-name");i&&e.querySelectorAll(`[data-span-name="${CSS.escape(i)}"]`).forEach(o=>{o.classList.remove("highlighted")})}),!document.getElementById("diff-hover-styles")){const t=document.createElement("style");t.id="diff-hover-styles",t.textContent=`
                [data-span-name] { transition: background 0.1s; }
                [data-span-name].highlighted rect { filter: brightness(1.4); }
                [data-span-name].highlighted text { fill: #fff !important; }
                [data-span-name].highlighted { background: rgba(255, 255, 255, 0.05); }
            `,document.head.appendChild(t)}}createTimelineColumn(e,t,n){const s=document.createElement("div");s.style.cssText=`
            flex: 1;
            min-width: 350px;
            border: 1px solid #333;
            border-radius: 4px;
            background: #1a1a1a;
            padding: 8px;
        `;const i=document.createElement("div");i.style.cssText=`
            font-weight: bold;
            font-size: 12px;
            margin-bottom: 8px;
            padding-bottom: 8px;
            border-bottom: 1px solid #333;
        `,i.textContent=`${this.diff.snapshotNames[e]} (${this.diff.summary.totalDurations[e].toFixed(0)}ms)`,s.appendChild(i);const a=[...n.filter(f=>f.starts[e]!==null)].sort((f,C)=>{const m=f.starts[e]??0,w=C.starts[e]??0;return m-w}),r=22,l=140,d=180,u=l+d+90,p=a.length*r+40,x=document.createElementNS("http://www.w3.org/2000/svg","svg");return x.setAttribute("width",String(u)),x.setAttribute("height",String(p)),this.renderTimeAxis(x,l,d,p-20,t),a.forEach((f,C)=>{const m=C*r+10,w=f.starts[e]??0,E=f.ends[e]??w,P=f.durations[e]??0,b=document.createElementNS("http://www.w3.org/2000/svg","g");b.setAttribute("data-span-name",f.name),b.style.cursor="pointer";const k=document.createElementNS("http://www.w3.org/2000/svg","rect");k.setAttribute("x","0"),k.setAttribute("y",String(m)),k.setAttribute("width",String(u)),k.setAttribute("height",String(r)),k.setAttribute("fill","transparent"),b.appendChild(k);const L=l+w/t*d,I=Math.max(2,(E-w)/t*d),M=document.createElementNS("http://www.w3.org/2000/svg","text");M.setAttribute("x",String(l-4)),M.setAttribute("y",String(m+14)),M.setAttribute("text-anchor","end"),M.setAttribute("fill","#888"),M.setAttribute("font-size","10");const A=f.name.length>20?f.name.slice(0,17)+"...":f.name;M.textContent=A,b.appendChild(M);const g=document.createElementNS("http://www.w3.org/2000/svg","title");g.textContent=f.name,b.appendChild(g);const y=this.getStatusColor(f.status[e]),z=document.createElementNS("http://www.w3.org/2000/svg","rect");z.setAttribute("x",String(L)),z.setAttribute("y",String(m+4)),z.setAttribute("width",String(I)),z.setAttribute("height","14"),z.setAttribute("fill",y),z.setAttribute("rx","2"),b.appendChild(z);const T=document.createElementNS("http://www.w3.org/2000/svg","text");T.setAttribute("x",String(l+d+4)),T.setAttribute("y",String(m+14)),T.setAttribute("fill","#666"),T.setAttribute("font-size","9"),T.textContent=`${w.toFixed(0)}→${P.toFixed(0)}ms`,b.appendChild(T),x.appendChild(b)}),s.appendChild(x),s}renderTimeAxis(e,t,n,s,i){const o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",String(t)),o.setAttribute("y1",String(s)),o.setAttribute("x2",String(t+n)),o.setAttribute("y2",String(s)),o.setAttribute("stroke","#444"),e.appendChild(o);const a=[0,.25,.5,.75,1];for(const r of a){const l=t+r*n,d=r*i,h=document.createElementNS("http://www.w3.org/2000/svg","line");h.setAttribute("x1",String(l)),h.setAttribute("y1",String(s)),h.setAttribute("x2",String(l)),h.setAttribute("y2",String(s+4)),h.setAttribute("stroke","#444"),e.appendChild(h);const u=document.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("x",String(l)),u.setAttribute("y",String(s+14)),u.setAttribute("text-anchor","middle"),u.setAttribute("fill","#555"),u.setAttribute("font-size","8"),u.textContent=`${(d/1e3).toFixed(1)}s`,e.appendChild(u)}}renderOverlay(){const e=document.createElement("div");e.style.cssText=`
            overflow-x: auto;
            border: 1px solid #333;
            border-radius: 4px;
            background: #1a1a1a;
            padding: 8px;
        `;const t=["#4a90d9","#e8a838","#9b59b6","#2ecc71","#e74c3c"],n=document.createElement("div");n.style.cssText="display: flex; gap: 16px; margin-bottom: 12px; font-size: 11px; flex-wrap: wrap;";for(let C=0;C<this.diff.snapshotNames.length;C++){const m=t[C%t.length],w=document.createElement("span");w.innerHTML=`<span style="display: inline-block; width: 12px; height: 12px; background: ${m}; border-radius: 2px; vertical-align: middle; margin-right: 4px;"></span>${this.diff.snapshotNames[C]}`,n.appendChild(w)}const s=document.createElement("div");s.style.cssText="margin-left: auto; display: flex; gap: 12px;",s.innerHTML=`
            <span style="color: ${J.faster}">▼ faster</span>
            <span style="color: ${J.slower}">▲ slower</span>
        `,n.appendChild(s),e.appendChild(n);const i=this.getFilteredSpans();let o=0;for(const C of i)for(const m of C.ends)m!==null&&m>o&&(o=m);o===0&&(o=Math.max(...this.diff.summary.totalDurations));const a=[...i].sort((C,m)=>{const w=C.starts[0]??0,E=m.starts[0]??0;return w-E}),r=this.diff.snapshotNames.length,l=8+r*10,d=180,h=400,p=d+h+100,x=a.length*l+40,f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",String(p)),f.setAttribute("height",String(x)),this.renderTimeAxis(f,d,h,x-20,o),a.forEach((C,m)=>{const w=m*l+10,E=document.createElementNS("http://www.w3.org/2000/svg","g");E.setAttribute("data-span-name",C.name),E.style.cursor="pointer";const P=document.createElementNS("http://www.w3.org/2000/svg","rect");P.setAttribute("x","0"),P.setAttribute("y",String(w)),P.setAttribute("width",String(p)),P.setAttribute("height",String(l)),P.setAttribute("fill","transparent"),E.appendChild(P);const b=document.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("x",String(d-8)),b.setAttribute("y",String(w+l/2+4)),b.setAttribute("text-anchor","end"),b.setAttribute("fill","#aaa"),b.setAttribute("font-size","10");const k=C.name.length>25?C.name.slice(0,22)+"...":C.name;b.textContent=k,E.appendChild(b);const L=document.createElementNS("http://www.w3.org/2000/svg","title");L.textContent=C.name,E.appendChild(L);const I=8,M=2;for(let z=0;z<r;z++){const T=C.starts[z],D=C.ends[z];if(T===null||D===null)continue;const R=d+T/o*h,j=Math.max(2,(D-T)/o*h),ke=w+z*(I+M),G=t[z%t.length],se=document.createElementNS("http://www.w3.org/2000/svg","rect");se.setAttribute("x",String(R)),se.setAttribute("y",String(ke)),se.setAttribute("width",String(j)),se.setAttribute("height",String(I)),se.setAttribute("fill",G),se.setAttribute("rx","1"),E.appendChild(se)}const A=C.startDeltas[1],g=C.deltas[1];let y="";if(A!==null&&Math.abs(A)>10&&(y+=A>0?`+${A.toFixed(0)}ms`:`${A.toFixed(0)}ms`),g!==null&&Math.abs(g)>5&&(y&&(y+=" "),y+=g>0?`(+${g.toFixed(0)}%)`:`(${g.toFixed(0)}%)`),y){const z=(g??0)<-5?fn.faster:(g??0)>5?fn.slower:fn.textMuted,T=document.createElementNS("http://www.w3.org/2000/svg","text");T.setAttribute("x",String(d+h+8)),T.setAttribute("y",String(w+l/2+4)),T.setAttribute("fill",z),T.setAttribute("font-size","9"),T.textContent=y,E.appendChild(T)}f.appendChild(E)}),this.setupOverlayHover(f),e.appendChild(f),this.container.appendChild(e)}setupOverlayHover(e){if(e.addEventListener("mouseover",t=>{const s=t.target.closest("[data-span-name]");s&&s.classList.add("highlighted")}),e.addEventListener("mouseout",t=>{const s=t.target.closest("[data-span-name]");s&&s.classList.remove("highlighted")}),!document.getElementById("diff-hover-styles")){const t=document.createElement("style");t.id="diff-hover-styles",t.textContent=`
                [data-span-name] { transition: background 0.1s; }
                [data-span-name].highlighted rect { filter: brightness(1.4); }
                [data-span-name].highlighted text { fill: #fff !important; }
                [data-span-name].highlighted { background: rgba(255, 255, 255, 0.05); }
            `,document.head.appendChild(t)}}renderTable(){const e=document.createElement("div");e.style.cssText="overflow-x: auto;";const t=document.createElement("table");t.style.cssText=`
            width: 100%;
            border-collapse: collapse;
            font-size: 11px;
        `;const n=document.createElement("thead"),s=document.createElement("tr");s.style.cssText="background: #252525; border-bottom: 1px solid #444;";const i=[{key:"name",label:"Name",sortable:!0},{key:"category",label:"Cat"}];for(let r=0;r<this.diff.snapshotNames.length;r++){const l=this.diff.snapshotNames[r].length>12?this.diff.snapshotNames[r].slice(0,10)+"...":this.diff.snapshotNames[r];i.push({key:`start-${r}`,label:`${l} @`}),i.push({key:`duration-${r}`,label:`${l} ms`})}i.push({key:"startDelta",label:"Start Δ"}),i.push({key:"delta",label:"Dur Δ",sortable:!0});for(const r of i){const l=document.createElement("th");l.style.cssText=`
                padding: 6px 8px;
                text-align: ${r.key==="name"?"left":"right"};
                white-space: nowrap;
                ${r.sortable?"cursor: pointer; user-select: none;":""}
            `,l.textContent=r.label,r.sortable&&(l.addEventListener("click",()=>{this.sortBy===r.key?this.sortAsc=!this.sortAsc:(this.sortBy=r.key,this.sortAsc=r.key==="name"),this.render()}),l.textContent+=this.sortBy===r.key?this.sortAsc?" ▲":" ▼":""),s.appendChild(l)}n.appendChild(s),t.appendChild(n);const o=document.createElement("tbody"),a=this.getSortedSpans();for(const r of a){const l=document.createElement("tr");l.style.cssText="border-bottom: 1px solid #333;",l.addEventListener("mouseenter",()=>l.style.background="#2a2a2a"),l.addEventListener("mouseleave",()=>l.style.background="");const d=document.createElement("td");d.style.cssText="padding: 6px 8px; max-width: 180px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;",d.textContent=r.name,d.title=r.name,l.appendChild(d);const h=document.createElement("td");h.style.cssText="padding: 6px 8px; text-align: right;",h.innerHTML=`<span style="color: ${this.getCategoryColor(r.category)}">${r.category.slice(0,4)}</span>`,l.appendChild(h);for(let C=0;C<r.starts.length;C++){const m=document.createElement("td");m.style.cssText="padding: 6px 8px; text-align: right; color: #666;";const w=r.starts[C];m.textContent=w!==null?`${w.toFixed(0)}`:"-",l.appendChild(m);const E=document.createElement("td");E.style.cssText="padding: 6px 8px; text-align: right;";const P=r.durations[C];E.textContent=P!==null?`${P.toFixed(0)}`:"-",E.style.color=this.getStatusColor(r.status[C]),l.appendChild(E)}const u=document.createElement("td");u.style.cssText="padding: 6px 8px; text-align: right;";const p=r.startDeltas[1];p!==null&&Math.abs(p)>10?(u.textContent=p>0?`+${p.toFixed(0)}`:`${p.toFixed(0)}`,u.style.color=p>100?J.slower:p<-100?J.faster:J.same):(u.textContent="-",u.style.color=J.missing),l.appendChild(u);const x=document.createElement("td");x.style.cssText="padding: 6px 8px; text-align: right; font-weight: bold;";const f=r.deltas[1];f!==null?(x.textContent=f>0?`+${f.toFixed(1)}%`:`${f.toFixed(1)}%`,x.style.color=f<-5?J.faster:f>5?J.slower:J.same):(x.textContent="-",x.style.color=J.missing),l.appendChild(x),o.appendChild(l)}t.appendChild(o),e.appendChild(t),this.container.appendChild(e)}getSortedSpans(){const e=[...this.getFilteredSpans()];return e.sort((t,n)=>{let s=0;switch(this.sortBy){case"name":s=t.name.localeCompare(n.name);break;case"delta":const i=t.deltas[1]??0;s=(n.deltas[1]??0)-i;break;case"duration":const a=t.durations[0]??0;s=(n.durations[0]??0)-a;break}return this.sortAsc?s:-s}),e}getStatusColor(e){return J[e]}getCategoryColor(e){return J[e]??J.custom}}const Us={components:{AABBTestPass:{parent:"OcclusionCulling",resources:[],materials:[],sourceFile:"experience/lib/optimisation/occlusion/AABBTestPass.ts"},AchievementManager:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/AchievementManager.ts"},AchievementToast:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/AchievementToast.ts"},AchievementTracker:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/AchievementTracker.ts"},AmbientAudioBridge:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/audio/AmbientAudioBridge.ts"},AnalyzerTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AnalyzerTool/AnalyzerTool.ts"},AnimationRegistry:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/AnimationRegistry.ts"},AnimeSky:{parent:"Environment",resources:[],materials:["environment:anime-sky"],sourceFile:"experience/environment/animeSky/AnimeSky.ts"},AnimeSkyMaterial:{parent:"AnimeSky",resources:[],materials:[],sourceFile:"experience/environment/animeSky/AnimeSkyMaterial.ts"},AnimeSkyTransition:{parent:"AnimeSky",resources:[],materials:[],sourceFile:"experience/environment/animeSky/AnimeSkyTransition.ts"},Audio:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Audio.ts"},AudioStateManager:{parent:"AmbientAudioBridge",resources:[],materials:[],sourceFile:"experience/lib/core/AudioStateManager.ts"},AudioTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AudioTool.ts"},AudioVisualizerPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/plugins/AudioVisualizerPlugin.ts"},AuroraEffect:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/weather/effects/AuroraEffect.ts"},AuroraIntegration:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/aurora/AuroraIntegration.ts"},AuroraPass:{parent:"AuroraIntegration",resources:[],materials:[],sourceFile:"experience/lib/effects/aurora/AuroraPass.ts"},AxesTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AxesTool.ts"},AxisVisualizer:{parent:"DirectManipulator",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/TransformTool/AxisVisualizer.ts"},BasaltDebris:{parent:"TopIsland",resources:[],materials:[],sourceFile:"experience/scenes/islands/basalt/BasaltDebris.ts"},BaseDebugComponent:{resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/BaseDebugComponent.ts"},BilateralUpscaler:{parent:"VolumetricCloudsPass",resources:[],materials:[],sourceFile:"experience/lib/optimisation/BilateralUpscaler.ts"},Birds:{parent:"DistantTerrain",resources:[],materials:["distant:birds-update","distant:birds-draw"],sourceFile:"experience/scenes/distantTerrain/birds/Birds.ts"},BlitPass:{parent:"VolumetricCloudsPass",resources:[],materials:[],sourceFile:"experience/lib/optimisation/BlitPass.ts"},BookmarkManager:{parent:"CameraInspector",resources:[],materials:[],sourceFile:"experience/lib/debug/bookmarks/BookmarkManager.ts"},BookmarkStore:{parent:"BookmarkManager",resources:[],materials:[],sourceFile:"experience/lib/debug/bookmarks/BookmarkStore.ts"},BufferBlitter:{parent:"BufferViewerPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/buffer/BufferBlitter.ts"},BufferPanel:{parent:"BufferViewerPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/buffer/BufferPanel.ts"},BufferPanelElement:{resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/buffer-panel/BufferPanelElement.ts"},BufferViewerPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/plugins/BufferViewerPlugin.ts"},Butterflies:{parent:"TopIsland",resources:[],materials:[],sourceFile:"experience/scenes/grassField/butterflies/Butterflies.ts"},Butterfly:{parent:"Butterflies",resources:[],materials:["grassField:butterfly"],sourceFile:"experience/scenes/grassField/butterflies/Butterfly.ts"},Camera:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Camera.ts"},CameraInspector:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/CameraInspector.ts"},CameraLookAround:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/CameraLookAround.ts"},CameraSpots:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/CameraSpots.ts"},Campfire:{parent:"MainIslands",resources:[],materials:["islands:campfire-wood"],sourceFile:"experience/scenes/islands/campfire/Campfire.ts"},CASEffect:{resources:[],materials:[],sourceFile:"experience/lib/effects/taa/CASEffect.ts"},CelestialSync:{parent:"AnimeSky",resources:[],materials:[],sourceFile:"experience/environment/animeSky/CelestialSync.ts"},ChunkCuller:{parent:"ChunkedPoints",resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/ChunkCuller.ts"},Chunked3D:{parent:"ChunkedPoints",resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/Chunked3D.ts"},ChunkedInstancedMesh:{resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/ChunkedInstancedMesh.ts"},ChunkedInstancedMeshLod:{parent:"Foliage",resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/ChunkedInstancedMeshLod.ts"},ChunkedPoints:{parent:"DistantFoliageParticles",resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/ChunkedPoints.ts"},CloudCompositorPass:{resources:[],materials:[],sourceFile:"experience/lib/effects/cloudCompositor/CloudCompositorPass.ts"},CloudsEffect:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/weather/effects/CloudsEffect.ts"},CloudTemporalAccumulator:{resources:[],materials:[],sourceFile:"experience/lib/effects/volumetricClouds/CloudTemporalAccumulator.ts"},ComponentRegistry:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/ComponentRegistry.ts"},Conf:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/Conf.ts"},ConfigBookmarkManager:{parent:"ConfigEditorTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/config/ConfigBookmarkManager.ts"},ConfigBookmarkStore:{parent:"ConfigBookmarkManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/config/ConfigBookmarkStore.ts"},ConfigEditorTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/config/ConfigEditorTool.ts"},ContactSection:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/ContactSection.ts"},CrystalProgress:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/CrystalProgress.ts"},Crystals:{parent:"MainIslands",resources:[],materials:["islands:crystal"],sourceFile:"experience/scenes/islands/crystals/Crystals.ts"},CullingAnalytics:{parent:"VisualizerTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/CullingAnalytics.ts"},CullingBatch:{parent:"SceneCuller",resources:[],materials:[],sourceFile:"experience/lib/optimisation/CullingBatch.ts"},CullingPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/plugins/CullingPlugin.ts"},CullingVisualization:{parent:"CullingPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/CullingVisualization.ts"},CurvedPathUtils:{parent:"Butterfly",resources:[],materials:[],sourceFile:"experience/lib/utils/CurvedPathUtils.ts"},DayCycleManager:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/DayCycleManager.ts"},DayTimeSwitch:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/DayTimeSwitch.ts"},DebugCamera:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/DebugCamera.ts"},DebugEventBus:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/DebugEventBus.ts"},DebugManager:{resources:[],materials:[],sourceFile:"experience/lib/debug/DebugManager.ts"},DebugPanel:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/debug-panel/DebugPanel.ts"},DebugRegistry:{parent:"LabTool",resources:[],materials:[],sourceFile:"experience/lib/debug/DebugRegistry.ts"},DebugTool:{resources:[],materials:[],sourceFile:"experience/lib/debug/tools/DebugTool.ts"},DependencyGraphPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AnalyzerTool/plugins/DependencyGraphPlugin.ts"},DiffRenderer:{parent:"LoadingAnalyzerPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AnalyzerTool/DiffRenderer.ts"},DirectManipulator:{parent:"TransformTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/TransformTool/DirectManipulator.ts"},DistantFoliageParticles:{parent:"DistantTerrain",resources:[],materials:["distant:foliage-particles"],sourceFile:"experience/scenes/distantTerrain/DistantFoliageParticles.ts"},DistantTerrain:{parent:"World",resources:[],materials:[],sourceFile:"experience/scenes/distantTerrain/DistantTerrain.ts"},DistantTerrainGround:{parent:"DistantTerrain",resources:[],materials:["distant:terrain-ground"],sourceFile:"experience/scenes/distantTerrain/DistantTerrainGround.ts"},DistantWater:{parent:"DistantTerrain",resources:[],materials:["distant:water"],sourceFile:"experience/scenes/distantTerrain/DistantWater.ts"},DomEventBus:{resources:[],materials:[],sourceFile:"experience/lib/core/events/DomEventBus.ts"},DragBehavior:{parent:"ShaderEditorElement",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/behaviors/DragBehavior.ts"},DynamicTexture:{resources:[],materials:[],sourceFile:"experience/lib/core/DynamicTexture.ts"},EdgeHighlight:{resources:[],materials:[],sourceFile:"experience/lib/utils/EdgeHighlight.ts"},EditorDiff:{parent:"ShaderEditorElement",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/shader-tool-panel/EditorDiff.ts"},EditorSearch:{parent:"ShaderEditorElement",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/shader-tool-panel/EditorSearch.ts"},EffectRegistry:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/EffectRegistry.ts"},Engine:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/Engine.ts"},Environment:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/environment/Environment.ts"},EnvironmentMapBlender:{parent:"SkyEnvironmentRenderer",resources:[],materials:[],sourceFile:"experience/lib/environment/EnvironmentMapBlender.ts"},EventEmitter:{resources:[],materials:[],sourceFile:"experience/lib/utils/EventEmitter.ts"},Experience:{resources:[],materials:[],sourceFile:"experience/Experience.ts"},FBM3DTexture:{parent:"VolumetricCloudsPass",resources:[],materials:[],sourceFile:"experience/lib/utils/FBM3DTexture.ts"},Fire:{parent:"Campfire",resources:[],materials:["islands:fire"],sourceFile:"experience/scenes/islands/campfire/fire/Fire.ts"},FloatingInspector:{parent:"SelectionManager",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/FloatingInspector.ts"},FloatingInspectorElement:{resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/floating-inspector/FloatingInspectorElement.ts"},FloatingPanel:{parent:"FloatingInspector",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/floating-panel/FloatingPanel.ts"},Flowers:{parent:"TopIsland",resources:["flowersTexture","flowersSamplingTexture","grassFieldDisplacementMap","waterNoiseTexture","zonesTexture"],materials:["grassField:flowers"],sourceFile:"experience/scenes/grassField/flowers/Flowers.ts"},Foam:{parent:"Waterfalls",resources:[],materials:["islands:foam"],sourceFile:"experience/scenes/islands/waterfalls/foam/Foam.ts"},Foliage:{parent:"MainIslands",resources:["foliage"],materials:["islands:foliage"],sourceFile:"experience/scenes/islands/foliage/Foliage.ts"},FoliageMarkers:{parent:"Foliage",resources:[],materials:[],sourceFile:"experience/scenes/islands/foliage/FoliageMarkers.ts"},FractalSimplex:{resources:[],materials:[],sourceFile:"experience/lib/utils/dynamicNoises/simplex/FractalSimplex.ts"},FractalVoronoi:{resources:[],materials:[],sourceFile:"experience/lib/utils/dynamicNoises/voronoi/FractalVoronoi.ts"},FrustumGridQuery:{parent:"ChunkCuller",resources:[],materials:[],sourceFile:"experience/lib/utils/chunked/FrustumGridQuery.ts"},GodraysIntegration:{resources:[],materials:[],sourceFile:"experience/lib/effects/godrays/GodraysIntegration.ts"},GodraysPass:{parent:"GodraysIntegration",resources:[],materials:[],sourceFile:"experience/lib/effects/godrays/GodraysPass.ts"},GpuPerfCollector:{parent:"Perfs",resources:[],materials:[],sourceFile:"experience/lib/perfs/GpuPerfCollector.ts"},Graph:{parent:"PerfsGui",resources:[],materials:[],sourceFile:"experience/lib/perfs/graph/Graph.ts"},Grass:{parent:"TopIsland",resources:["grassModel","grassFieldDisplacementMap","grassFieldWindNoiseTexture","waterNoiseTexture","zonesTexture"],materials:["grassField:grass"],sourceFile:"experience/scenes/grassField/grass/Grass.ts"},GrassChunks:{parent:"Pampa",resources:[],materials:[],sourceFile:"experience/scenes/grassField/grass/GrassChunks.ts"},GridTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/GridTool.ts"},HierarchyTree:{parent:"InfoPanel",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/hierarchy-tree/HierarchyTree.ts"},HistoryManager:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/history/HistoryManager.ts"},HistoryStore:{parent:"HistoryManager",resources:[],materials:[],sourceFile:"experience/lib/debug/history/HistoryStore.ts"},HiZPyramid:{parent:"OcclusionCulling",resources:[],materials:[],sourceFile:"experience/lib/optimisation/occlusion/HiZPyramid.ts"},HomeSection:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/HomeSection.ts"},InfoPanel:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/info-panel/InfoPanel.ts"},IslandBender:{parent:"TopIsland",resources:[],materials:[],sourceFile:"experience/scenes/islands/island/IslandBender.ts"},LabCamera:{parent:"LabTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/LabCamera.ts"},LabFramer:{parent:"LabTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/LabFramer.ts"},LabScene:{parent:"LabTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/LabScene.ts"},LabTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/LabTool.ts"},Light:{parent:"Experience",resources:["lensFlare0","lensFlare1"],materials:[],sourceFile:"experience/Light.ts"},LightHelpersTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/LightHelpersTool.ts"},LoadingAnalyzerPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/AnalyzerTool/plugins/LoadingAnalyzerPlugin.ts"},LoadingScreen:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/LoadingScreen.ts"},LodPlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/plugins/LodPlugin.ts"},LodVisualization:{parent:"LodPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/LodVisualization.ts"},Logger:{parent:"UVSampler",resources:[],materials:[],sourceFile:"experience/lib/utils/logger/Logger.ts"},LoggerPool:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/utils/logger/LoggerPool.ts"},LogsPanel:{resources:[],materials:[],sourceFile:"experience/lib/utils/logger/LogsPanel.ts"},LogsPanelElement:{resources:[],materials:[],sourceFile:"experience/lib/utils/logger/components/logs-panel/LogsPanelElement.ts"},MainEffectsIntegration:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/mainEffects/MainEffectsIntegration.ts"},MainIsland:{parent:"MainIslands",resources:[],materials:["islands:cliffs"],sourceFile:"experience/scenes/islands/island/MainIsland.ts"},MainIslands:{parent:"World",resources:["testIsland","cliffsColor","grassFieldDisplacementMap","grassFieldWindNoiseTexture","zonesTexture","topIslandZonesTexture"],materials:[],sourceFile:"experience/scenes/islands/MainIslands.ts"},MainMenu:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/MainMenu.ts"},MainThreadEventBus:{resources:[],materials:[],sourceFile:"experience/lib/core/events/MainThreadEventBus.ts"},MainWater:{parent:"MainIslands",resources:[],materials:["islands:main-water"],sourceFile:"experience/scenes/islands/water/MainWater.ts"},MaterialRegistry:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/MaterialRegistry.ts"},MeshUtils:{resources:[],materials:[],sourceFile:"experience/lib/utils/MeshUtils.ts"},Motes:{parent:"MainIslands",resources:[],materials:["islands:motes"],sourceFile:"experience/scenes/islands/motes/Motes.ts"},NoiseDebugger:{resources:[],materials:[],sourceFile:"experience/lib/dev/tools/NoiseDebugger.ts"},OcclusionCulling:{parent:"SceneCuller",resources:[],materials:[],sourceFile:"experience/lib/optimisation/occlusion/OcclusionCulling.ts"},OrbitControlsBridge:{parent:"Camera",resources:[],materials:[],sourceFile:"experience/lib/compatibility/controls/OrbitControlsBridge.ts"},OrientationGizmoTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/OrientationGizmoTool.ts"},Pampa:{parent:"TopIsland",resources:["pampaGrassModel","grassFieldDisplacementMap","grassFieldWindNoiseTexture","waterNoiseTexture","zonesTexture"],materials:["grassField:pampa"],sourceFile:"experience/scenes/grassField/grass/Pampa.ts"},ParallaxEffect:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/utils/ParallaxEffect.ts"},Perfs:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/perfs/Perfs.ts"},PerfsDetailDialog:{parent:"PerfsGui",resources:[],materials:[],sourceFile:"experience/lib/perfs/PerfsDetailDialog.ts"},PerfsDetailDialogElement:{resources:[],materials:[],sourceFile:"experience/lib/perfs/components/perfs-detail-dialog/PerfsDetailDialogElement.ts"},PerfsGui:{parent:"PerfsGuiBridge",resources:[],materials:[],sourceFile:"experience/lib/perfs/PerfsGui.ts"},PerfsGuiBridge:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/perfs/PerfsGuiBridge.ts"},PerfsGuiElement:{resources:[],materials:[],sourceFile:"experience/lib/perfs/components/perfs-gui/PerfsGuiElement.ts"},PipViewport:{parent:"VisualizerTool",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/pip-viewport/PipViewport.ts"},Pointer:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Pointer.ts"},PortableSampler:{resources:[],materials:[],sourceFile:"experience/lib/workers/sampling/PortableSampler.ts"},PositionalAudioVisualizer:{parent:"AudioVisualizerPlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/audio-visualizer/PositionalAudioVisualizer.ts"},PositionMapBaker:{parent:"UVSampler",resources:[],materials:[],sourceFile:"experience/lib/utils/sampling/PositionMapBaker.ts"},PostProcessing:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/PostProcessing.ts"},PostProcessingTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/PostProcessingTool.ts"},PrimitiveSpawner:{parent:"ShaderTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/ShaderTool/PrimitiveSpawner.ts"},Profiler:{parent:"AnalyzerTool",resources:[],materials:[],sourceFile:"experience/lib/debug/profiler/Profiler.ts"},RainEffect:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/weather/effects/RainEffect.ts"},RainParticles:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/vfx/rain/RainParticles.ts"},RainSplashes:{parent:"MainIslands",resources:[],materials:[],sourceFile:"experience/lib/vfx/rain/RainSplashes.ts"},Random:{resources:[],materials:[],sourceFile:"experience/lib/utils/Random.ts"},Raycaster:{parent:"DirectManipulator",resources:[],materials:[],sourceFile:"experience/lib/core/Raycaster.ts"},RaycasterTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/RaycasterTool.ts"},Renderer:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Renderer.ts"},ResizeBehavior:{parent:"ShaderEditorElement",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/behaviors/ResizeBehavior.ts"},Resources:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/core/Resources.ts"},ResourcesInspector:{parent:"InfoPanel",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/ResourcesInspector.ts"},RevealMesh:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/effects/revealMesh/RevealMesh.ts"},RingBuffer:{parent:"Graph",resources:[],materials:[],sourceFile:"experience/lib/perfs/graph/RingBuffer.ts"},SamplingClient:{resources:[],materials:[],sourceFile:"experience/lib/workers/sampling/SamplingClient.ts"},SceneCameraController:{parent:"VisualizerTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/SceneCameraController.ts"},SceneCuller:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/optimisation/SceneCuller.ts"},SceneVisualizer:{resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/SceneVisualizer.ts"},Section:{parent:"ResourcesInspector",resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/section/Section.ts"},SelectionManager:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/SelectionManager.ts"},SelectionOutlineIntegration:{resources:[],materials:[],sourceFile:"experience/lib/effects/selectionOutline/SelectionOutlineIntegration.ts"},SelectionOutlinePass:{parent:"SelectionOutlineIntegration",resources:[],materials:[],sourceFile:"experience/lib/effects/selectionOutline/SelectionOutlinePass.ts"},SelectionTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/SelectionTool.ts"},SettingsPanel:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/SettingsPanel/SettingsPanel.ts"},ShaderBaker:{resources:[],materials:[],sourceFile:"experience/lib/utils/baker/ShaderBaker.ts"},ShaderEnvironmentMap:{parent:"SkyEnvironmentRenderer",resources:[],materials:[],sourceFile:"experience/lib/environment/ShaderEnvironmentMap.ts"},ShaderTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/ShaderTool/ShaderTool.ts"},ShortcutRegistry:{resources:[],materials:[],sourceFile:"experience/lib/debug/ui/ShortcutRegistry.ts"},ShortcutsPanel:{resources:[],materials:[],sourceFile:"experience/lib/debug/ui/components/shortcuts-panel/ShortcutsPanel.ts"},Signal:{parent:"Logger",resources:[],materials:[],sourceFile:"experience/lib/utils/Signal.ts"},Sizes:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Sizes.ts"},SkyEnvironmentRenderer:{parent:"AnimeSky",resources:[],materials:[],sourceFile:"experience/environment/animeSky/SkyEnvironmentRenderer.ts"},SoundIcon:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/SoundIcon.ts"},Sparks:{parent:"Campfire",resources:[],materials:["islands:sparks"],sourceFile:"experience/scenes/islands/campfire/sparks/Sparks.ts"},Storage:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Storage.ts"},Swarm:{parent:"MainIslands",resources:[],materials:["islands:swarm-init","islands:swarm-update","islands:swarm-draw"],sourceFile:"experience/scenes/islands/swarm/Swarm.ts"},TAAIntegration:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/taa/TAAIntegration.ts"},TAAPass:{parent:"TAAIntegration",resources:[],materials:[],sourceFile:"experience/lib/effects/taa/TAAPass.ts"},TerrainSampler:{parent:"TopIsland",resources:[],materials:[],sourceFile:"experience/lib/utils/sampling/TerrainSampler.ts"},TextureSampler:{parent:"UVSampler",resources:[],materials:[],sourceFile:"experience/lib/utils/sampling/TextureSampler.ts"},TextureUtils:{resources:[],materials:[],sourceFile:"experience/lib/utils/TextureUtils.ts"},Time:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/core/Time.ts"},ToastManager:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/ToastManager.ts"},ToolRegistry:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/ToolRegistry.ts"},TopIsland:{parent:"MainIslands",resources:[],materials:["islands:cliffs"],sourceFile:"experience/scenes/islands/island/TopIsland.ts"},TourButton:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/TourButton.ts"},TourMode:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/TourMode.ts"},TransformTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/TransformTool.ts"},Trees:{parent:"MainIslands",resources:["barkColor"],materials:[],sourceFile:"experience/scenes/islands/trees/Trees.ts"},TweakBookmarkManager:{parent:"TweaksTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/tweaks/TweakBookmarkManager.ts"},TweakBookmarkStore:{parent:"TweakBookmarkManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/tweaks/TweakBookmarkStore.ts"},TweakBuilder:{resources:[],materials:[],sourceFile:"experience/lib/dev/TweakBuilder.ts"},Tweaks:{parent:"TweaksBridge",resources:[],materials:[],sourceFile:"experience/lib/dev/Tweaks.ts"},TweaksBridge:{parent:"Engine",resources:[],materials:[],sourceFile:"experience/lib/dev/TweaksBridge.ts"},TweaksTool:{parent:"LabTool",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/lab/tweaks/TweaksTool.ts"},Ui:{resources:[],materials:[],sourceFile:"experience/ui/Ui.ts"},UIStack:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/UIStack.ts"},UpdateToast:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/UpdateToast.ts"},UVSampler:{resources:[],materials:[],sourceFile:"experience/lib/utils/sampling/UVSampler.ts"},ViewPoints:{parent:"Ui",resources:[],materials:[],sourceFile:"experience/ui/ViewPoints.ts"},VisualizerTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/VisualizerTool.ts"},VolumetricCloudsIntegration:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/volumetricClouds/VolumetricCloudsIntegration.ts"},VolumetricCloudsMaterial:{resources:[],materials:[],sourceFile:"experience/lib/effects/volumetricClouds/VolumetricCloudsMaterial.ts"},VolumetricCloudsPass:{parent:"VolumetricCloudsIntegration",resources:[],materials:[],sourceFile:"experience/lib/effects/volumetricClouds/VolumetricCloudsPass.ts"},VRButton:{resources:[],materials:[],sourceFile:"experience/ui/VRButton.ts"},VRMode:{parent:"Experience",resources:[],materials:[],sourceFile:"experience/lib/vr/VRMode.ts"},WastePlugin:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/plugins/WastePlugin.ts"},WasteVisualization:{parent:"WastePlugin",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/VisualizerTool/WasteVisualization.ts"},WaterColorRevealEffect:{resources:[],materials:[],sourceFile:"experience/lib/effects/waterColorReveal/WaterColorRevealEffect.ts"},WaterColorRevealIntegration:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/waterColorReveal/WaterColorRevealIntegration.ts"},WaterDrops:{parent:"Waterfalls",resources:[],materials:["islands:water-drops"],sourceFile:"experience/scenes/islands/waterfalls/particles/WaterDrops.ts"},WaterDropsEffect:{resources:[],materials:[],sourceFile:"experience/lib/effects/waterDrops/WaterDropsEffect.ts"},Waterfalls:{parent:"MainIslands",resources:[],materials:["islands:waterfalls"],sourceFile:"experience/scenes/islands/waterfalls/Waterfalls.ts"},WeatherController:{parent:"PostProcessing",resources:[],materials:[],sourceFile:"experience/lib/effects/weather/WeatherController.ts"},WireframeTool:{parent:"DebugManager",resources:[],materials:[],sourceFile:"experience/lib/debug/tools/WireframeTool.ts"},WorkerEventBus:{resources:[],materials:[],sourceFile:"experience/lib/core/events/WorkerEventBus.ts"},World:{parent:"Experience",resources:["testIsland"],materials:[],sourceFile:"experience/World.ts"}}},re={resource:"#4a90d9",component:"#4caf50",effect:"#9b59b6",shader:"#e8a838",sampling:"#00bcd4",baking:"#e91e63",custom:"#ff9800",text:"#e8eaed",textMuted:"#939fa7",border:"#333",bg:"#191c2d"};class Mn{id="loading";name="Loading Timeline";category="Performance";context;log;enabled=!1;categoryFilters=new Set(["resource","component","effect","shader","sampling","baking","custom"]);showCompleted=!0;showInProgress=!0;viewingSnapshotId=null;container=null;statsContainer=null;timelinePanel=null;timelinePanelContainer=null;timelineControlsContainer=null;timelineTitleEl=null;collapsedParents=new Set;resizeObserver=null;boundAutoStop=null;boundKeyHandler=null;init(e){this.context=e,this.log=e.createLogger("LoadingAnalyzer"),this.boundAutoStop=()=>{this.context.profiler.isRunning()&&(this.context.profiler.stop(),this.log.info("Profiler auto-stopped on experience:ready"),this.context.notifyProfilerStateChanged(),this.updateUI())},this.context.engine.experienceReady?this.boundAutoStop():this.context.engine.once("experience:ready",this.boundAutoStop)}enable(){this.enabled=!0,this.log.info("LoadingAnalyzer enabled"),this.updateUI(),this.boundKeyHandler=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)&&this.container?.closest('[data-active="true"]'))switch(e.key.toLowerCase()){case"s":!e.ctrlKey&&!e.metaKey&&(e.preventDefault(),this.takeSnapshot());break;case"t":e.preventDefault(),this.showTimelinePanel();break;case"d":this.context.getSelectedForDiff().length>=2&&(e.preventDefault(),this.showDiff());break}},document.addEventListener("keydown",this.boundKeyHandler)}disable(){this.enabled=!1,this.log.info("LoadingAnalyzer disabled"),this.boundKeyHandler&&(document.removeEventListener("keydown",this.boundKeyHandler),this.boundKeyHandler=null)}isEnabled(){return this.enabled}injectStyles(e){const t="loading-analyzer-styles";if(e.querySelector(`#${t}`))return;const n=document.createElement("style");n.id=t,n.textContent=`
            .analyzer-controls-row {
                display: flex;
                gap: 8px;
                margin-bottom: 12px;
                flex-wrap: wrap;
                align-items: center;
            }

            .analyzer-stats {
                display: flex;
                flex-direction: column;
                gap: 4px;
                margin-bottom: 12px;
                font-size: 11px;
                color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
            }

            .analyzer-stats .stat-value {
                color: var(--debug-text, #e8eaed);
                font-weight: 600;
            }

            .analyzer-snapshots {
                margin-top: 16px;
            }

            .analyzer-snapshots-header {
                font-weight: 600;
                font-size: 11px;
                margin-bottom: 8px;
                color: var(--debug-text, #e8eaed);
            }

            .analyzer-snapshot-list {
                max-height: 200px;
                overflow-y: auto;
            }

            .analyzer-snapshot-row {
                display: flex;
                gap: 8px;
                padding: 8px;
                border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
                border-radius: 4px;
                margin-bottom: 6px;
                cursor: pointer;
                transition: border-color 0.15s, background 0.15s;
            }

            .analyzer-snapshot-row:hover {
                background: var(--debug-bg-hover, rgba(255, 255, 255, 0.05));
            }

            .analyzer-snapshot-row.selected {
                border-color: var(--debug-accent, #4a90d9);
                background: rgba(74, 144, 217, 0.1);
            }

            .analyzer-snapshot-content {
                flex: 1;
                min-width: 0;
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .analyzer-snapshot-info {
                font-size: 11px;
                overflow: hidden;
            }

            .analyzer-snapshot-info strong {
                display: block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .analyzer-snapshot-info .meta {
                color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
                font-size: 10px;
            }

            .analyzer-snapshot-group select {
                width: 100%;
            }

            .analyzer-snapshot-actions {
                display: flex;
                flex-direction: column;
                gap: 4px;
                flex-shrink: 0;
            }

            .analyzer-snapshot-actions-footer {
                display: flex;
                flex-direction: column;
                gap: 8px;
                margin-top: 8px;
                padding-top: 8px;
                border-top: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
            }

            .analyzer-import-row {
            }

            .analyzer-import-row input[type="file"] {
                display: none;
            }

            .analyzer-snapshot-info strong {
                color: var(--debug-text, #e8eaed);
            }

            .analyzer-snapshot-group select {
                padding: 2px 4px;
                font-size: 10px;
                background: rgba(0, 0, 0, 0.3);
                border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.1));
                border-radius: 3px;
                color: var(--debug-text, #e8eaed);
                outline: none;
                cursor: pointer;
                min-width: 60px;
            }

            .analyzer-snapshot-group select:focus {
                border-color: var(--debug-accent, #4a90d9);
            }

            .analyzer-groups-section {
                margin-top: 12px;
                padding: 8px;
                background: rgba(0, 0, 0, 0.2);
                border-radius: 4px;
            }

            .analyzer-groups-header {
                font-weight: 600;
                font-size: 10px;
                margin-bottom: 6px;
                color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
                text-transform: uppercase;
            }

            .analyzer-groups-list {
                display: flex;
                flex-wrap: wrap;
                gap: 4px;
                margin-bottom: 6px;
            }

            .analyzer-group-tag {
                display: inline-flex;
                align-items: center;
                gap: 4px;
                padding: 2px 6px;
                font-size: 10px;
                border-radius: 3px;
                font-weight: 500;
            }

            .analyzer-group-tag button {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                padding: 0;
                font-size: 10px;
                opacity: 0.7;
            }

            .analyzer-group-tag button:hover {
                opacity: 1;
            }

            .analyzer-group-create {
                display: flex;
                gap: 4px;
            }

            .analyzer-group-create input {
                flex: 1;
                padding: 3px 6px;
                font-size: 10px;
                background: rgba(0, 0, 0, 0.3);
                border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.1));
                border-radius: 3px;
                color: var(--debug-text, #e8eaed);
                outline: none;
            }

            .analyzer-group-create input::placeholder {
                color: var(--debug-text-muted, rgba(147, 159, 167, 0.5));
            }

            .analyzer-group-create button {
                padding: 3px 8px;
                font-size: 10px;
            }

            .analyzer-empty {
                padding: 20px;
                text-align: center;
                color: var(--debug-text-muted, rgba(147, 159, 167, 0.8));
                font-style: italic;
                font-size: 11px;
            }
        `,e.insertBefore(n,e.firstChild)}createUI(e){this.container=e,e.innerHTML="",this.injectStyles(e),this.statsContainer=document.createElement("div"),this.statsContainer.className="analyzer-stats",e.appendChild(this.statsContainer);const t=document.createElement("div");t.className="analyzer-controls-row";const n=document.createElement("button");n.className="debug-button",n.textContent="View Timeline",n.addEventListener("click",()=>this.showTimelinePanel()),t.appendChild(n);const s=document.createElement("button");s.className="debug-button",s.textContent="Take Snapshot",s.addEventListener("click",()=>this.takeSnapshot()),t.appendChild(s);const i=document.createElement("button");i.className="debug-button",i.textContent="Clear",i.addEventListener("click",()=>{this.context.profiler.clear(),this.context.profiler.start(),this.updateUI()}),t.appendChild(i),e.appendChild(t);const o=document.createElement("div");o.className="analyzer-groups-section",o.innerHTML=`
            <div class="analyzer-groups-header">Snapshot Groups</div>
            <div class="analyzer-groups-list"></div>
            <div class="analyzer-group-create">
                <input type="text" placeholder="New group name..." />
                <button class="debug-button-small">+</button>
            </div>
        `,e.appendChild(o);const a=o.querySelector("input"),r=o.querySelector("button"),l=()=>{const h=a.value.trim();h&&(this.context.createGroup(h),a.value="")};r.addEventListener("click",l),a.addEventListener("keydown",h=>{h.key==="Enter"&&l()});const d=document.createElement("div");d.className="analyzer-snapshots",d.innerHTML=`
            <div class="analyzer-snapshots-header">Saved Snapshots</div>
            <div class="analyzer-snapshot-list"></div>
            <div class="analyzer-snapshot-actions-footer"></div>
        `,e.appendChild(d),this.updateUI(),this.onSnapshotsChanged()}updateUI(){if(!this.statsContainer)return;const e=this.context.profiler.getSpans();this.renderStats(e),this.timelinePanel&&this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}onSnapshotsChanged(){this.renderGroups(),this.renderSnapshots()}getFilteredSpans(){let e;return this.viewingSnapshotId?e=this.context.getSnapshots().find(n=>n.id===this.viewingSnapshotId)?.spans??[]:e=this.context.profiler.getSpans(),this.categoryFilters.size<7&&(e=e.filter(t=>this.categoryFilters.has(t.category))),this.showInProgress||(e=e.filter(t=>t.end!==null)),this.showCompleted||(e=e.filter(t=>t.end===null)),e}renderStats(e){if(!this.statsContainer)return;const t=e.filter(r=>r.end!==null),n=e.filter(r=>r.end===null),s=t.reduce((r,l)=>r+(l.end-l.start),0),i=t.length>0?s/t.length:0,o=new Map;for(const r of t){const l=o.get(r.category)??0;o.set(r.category,l+1)}let a="";for(const[r,l]of o)a+=`${r}: ${l}  `;this.statsContainer.innerHTML=`
            <span>Total: ${e.length}</span>
            <span>Completed: ${t.length}</span>
            <span>In Progress: ${n.length}</span>
            <span>Avg Duration: ${i.toFixed(1)}ms</span>
            <span>${a}</span>
        `}createTimeMarkers(e,t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","g");let o=[10,50,100,250,500,1e3,2e3,5e3].find(a=>e/a<=10)??5e3;for(let a=0;a<=e;a+=o){const r=t+a/e*n,l=document.createElementNS("http://www.w3.org/2000/svg","line");l.setAttribute("x1",String(r)),l.setAttribute("y1","20"),l.setAttribute("x2",String(r)),l.setAttribute("y2","100%"),l.setAttribute("stroke",re.border),l.setAttribute("stroke-dasharray","2,2"),s.appendChild(l);const d=document.createElementNS("http://www.w3.org/2000/svg","text");d.setAttribute("x",String(r)),d.setAttribute("y","14"),d.setAttribute("text-anchor","middle"),d.setAttribute("fill",re.textMuted),d.setAttribute("font-size","10"),d.textContent=a>=1e3?`${(a/1e3).toFixed(1)}s`:`${a}ms`,s.appendChild(d)}return s}createSpanRow(e,t,n,s,i,o,a,r){const l=document.createElementNS("http://www.w3.org/2000/svg","g"),d=e.start-n,u=(e.end!==null?e.end-n:s)-d,p=i+d/s*o,x=Math.max(2,u/s*o),f=document.createElementNS("http://www.w3.org/2000/svg","text");f.setAttribute("x",String(i-8)),f.setAttribute("y",String(t+a/2+4)),f.setAttribute("text-anchor","end"),f.setAttribute("fill",re.textMuted),f.setAttribute("font-size","11"),f.textContent=e.name.length>25?e.name.slice(0,22)+"...":e.name,l.appendChild(f);const C=re[e.category]??re.textMuted,m=document.createElementNS("http://www.w3.org/2000/svg","rect");if(m.setAttribute("x",String(p)),m.setAttribute("y",String(t+r)),m.setAttribute("width",String(x)),m.setAttribute("height",String(a-r*2)),m.setAttribute("fill",C),m.setAttribute("opacity",e.end===null?"0.5":"0.8"),m.setAttribute("rx","2"),l.appendChild(m),x>40){const E=document.createElementNS("http://www.w3.org/2000/svg","text");E.setAttribute("x",String(p+4)),E.setAttribute("y",String(t+a/2+4)),E.setAttribute("fill",re.text),E.setAttribute("font-size","10"),E.textContent=e.end!==null?`${u.toFixed(0)}ms`:"loading...",l.appendChild(E)}const w=document.createElementNS("http://www.w3.org/2000/svg","title");return w.textContent=`${e.name}
Category: ${e.category}
Duration: ${u.toFixed(1)}ms
Start: ${d.toFixed(1)}ms`,l.appendChild(w),l}createSpanRowHierarchical(e,t,n,s,i,o,a,r,l,d,h,u,p){const x=document.createElementNS("http://www.w3.org/2000/svg","g");x.style.cursor="pointer";const f=e.start-n,m=(e.end!==null?e.end-n:s)-f,w=i+f/s*o,E=Math.max(2,m/s*o),P=l*u,b=document.createElementNS("http://www.w3.org/2000/svg","rect");if(b.setAttribute("x","0"),b.setAttribute("y",String(t)),b.setAttribute("width",String(p)),b.setAttribute("height",String(a)),b.setAttribute("fill","rgba(255, 255, 255, 0.05)"),b.setAttribute("opacity","0"),x.appendChild(b),x.addEventListener("mouseenter",()=>b.setAttribute("opacity","1")),x.addEventListener("mouseleave",()=>b.setAttribute("opacity","0")),d){const z=this.collapsedParents.has(e.name),T=document.createElementNS("http://www.w3.org/2000/svg","text");T.setAttribute("x",String(8+P)),T.setAttribute("y",String(t+a/2+4)),T.setAttribute("fill",re.textMuted),T.setAttribute("font-size","10"),T.setAttribute("cursor","pointer"),T.textContent=z?`▶ (${h})`:"▼",T.addEventListener("click",()=>{z?this.collapsedParents.delete(e.name):this.collapsedParents.add(e.name),this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}),x.appendChild(T)}const k=(d?24:8)+P,L=Math.floor((i-k-8)/6),I=e.name.length>L?e.name.slice(0,L-3)+"...":e.name,M=document.createElementNS("http://www.w3.org/2000/svg","text");M.setAttribute("x",String(i-8)),M.setAttribute("y",String(t+a/2+4)),M.setAttribute("text-anchor","end"),M.setAttribute("fill",l>0?re.textMuted:re.text),M.setAttribute("font-size","11"),M.textContent=I,x.appendChild(M);const A=re[e.category]??re.textMuted,g=document.createElementNS("http://www.w3.org/2000/svg","rect");if(g.setAttribute("x",String(w)),g.setAttribute("y",String(t+r)),g.setAttribute("width",String(E)),g.setAttribute("height",String(a-r*2)),g.setAttribute("fill",A),g.setAttribute("opacity",e.end===null?"0.5":"0.8"),g.setAttribute("rx","2"),x.appendChild(g),E>40){const z=document.createElementNS("http://www.w3.org/2000/svg","text");z.setAttribute("x",String(w+4)),z.setAttribute("y",String(t+a/2+4)),z.setAttribute("fill",re.text),z.setAttribute("font-size","10"),z.textContent=e.end!==null?`${m.toFixed(0)}ms`:"loading...",x.appendChild(z)}const y=document.createElementNS("http://www.w3.org/2000/svg","title");return y.textContent=`${e.name}
Category: ${e.category}
Duration: ${m.toFixed(1)}ms
Start: ${f.toFixed(1)}ms`,x.appendChild(y),x}getProfilerStartTime(){const e=this.context.profiler.getSpans();return e.length===0?performance.now():performance.now()-Math.max(...e.map(t=>t.end??t.start+100))}renderGroups(){if(!this.container)return;const e=this.container.querySelector(".analyzer-groups-list");if(!e)return;const t=this.context.getGroupNames();if(t.length===0){e.innerHTML='<span style="font-size: 10px; color: var(--debug-text-muted);">No groups yet</span>';return}e.innerHTML="";for(const n of t){const s=document.createElement("span");s.className="analyzer-group-tag",s.style.background=this.getGroupColor(n),s.style.color="#fff";const i=document.createElement("span");i.textContent=n,s.appendChild(i);const o=document.createElement("button");o.textContent="×",o.title="Delete group",o.addEventListener("click",()=>{this.context.deleteGroup(n)}),s.appendChild(o),e.appendChild(s)}}renderSnapshots(){if(!this.container)return;const e=this.container.querySelector(".analyzer-snapshot-list");if(!e)return;const t=this.context.getSnapshots(),n=this.context.getSelectedForDiff();if(t.length===0){e.innerHTML='<div class="analyzer-empty">No snapshots saved</div>';return}e.innerHTML="";for(const i of t){const o=n.includes(i.id),a=document.createElement("div");a.className=`analyzer-snapshot-row${o?" selected":""}`,a.addEventListener("click",w=>{if(w.target.closest("select, button"))return;const E=this.context.getSelectedForDiff();o?this.context.setSelectedForDiff(E.filter(P=>P!==i.id)):this.context.setSelectedForDiff([...E,i.id])});const r=document.createElement("div");r.className="analyzer-snapshot-content";const l=document.createElement("div");l.className="analyzer-snapshot-info",l.innerHTML=`
                <strong title="${i.name}">${i.name}</strong>
                <span class="meta">${i.spans.length} spans, ${i.duration.toFixed(0)}ms</span>
            `,r.appendChild(l);const d=document.createElement("div");d.className="analyzer-snapshot-group";const h=this.context.getSnapshotGroup(i.id),u=this.context.getGroupNames(),p=document.createElement("select");p.title="Assign to group for averaging";const x=document.createElement("option");x.value="",x.textContent="No group",p.appendChild(x);for(const w of u){const E=document.createElement("option");E.value=w,E.textContent=w,w===h&&(E.selected=!0),p.appendChild(E)}h&&(p.style.background=this.getGroupColor(h),p.style.color="#fff",p.style.fontWeight="600"),p.addEventListener("change",()=>{this.context.setSnapshotGroup(i.id,p.value||void 0)}),d.appendChild(p),r.appendChild(d),a.appendChild(r);const f=document.createElement("div");f.className="analyzer-snapshot-actions";const C=document.createElement("button");C.className="debug-button-small",C.textContent="↓",C.title="Export as JSON",C.addEventListener("click",w=>{w.stopPropagation(),this.exportSnapshot(i)}),f.appendChild(C);const m=document.createElement("button");m.className="debug-button-small",m.textContent="×",m.title="Delete",m.addEventListener("click",w=>{w.stopPropagation(),this.context.deleteSnapshot(i.id)}),f.appendChild(m),a.appendChild(f),e.appendChild(a)}const s=this.container.querySelector(".analyzer-snapshot-actions-footer");if(s){if(s.innerHTML="",n.length>=2){const r=document.createElement("button");r.className="debug-button",r.style.cssText="width: 100%;",r.textContent=`Compare ${n.length} Snapshots`,r.addEventListener("click",()=>this.showDiff()),s.appendChild(r)}const i=document.createElement("div");i.className="analyzer-import-row";const o=document.createElement("input");o.type="file",o.accept=".json",o.id="snapshot-import-input",o.addEventListener("change",r=>this.handleImport(r)),i.appendChild(o);const a=document.createElement("button");a.className="debug-button",a.style.cssText="width: 100%;",a.textContent="Import Snapshot (JSON)",a.addEventListener("click",()=>o.click()),i.appendChild(a),s.appendChild(i)}}static GROUP_COLORS=["#4a90d9","#4caf50","#9b59b6","#e8a838","#e74c3c","#1abc9c","#f39c12","#3498db"];getGroupColor(e){let t=0;for(let s=0;s<e.length;s++)t=(t<<5)-t+e.charCodeAt(s)|0;const n=Mn.GROUP_COLORS;return n[Math.abs(t)%n.length]}formatSnapshotDate(e){const t=n=>n.toString().padStart(2,"0");return`${e.getFullYear()}/${t(e.getMonth()+1)}/${t(e.getDate())} ${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}takeSnapshot(){const e=this.formatSnapshotDate(new Date),t=this.context.profiler.takeSnapshot(e);this.context.saveSnapshot(t),this.updateUI(),this.log.info("Snapshot taken: %s",e)}exportSnapshot(e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),i=document.createElement("a");i.href=s,i.download=`${e.name.replace(/[^a-z0-9]/gi,"_")}_${e.id}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(s),this.log.info("Exported snapshot: %s",e.name)}handleImport(e){const t=e.target,n=t.files?.[0];if(!n)return;const s=new FileReader;s.onload=i=>{try{const o=i.target?.result,a=JSON.parse(o);if(!a.id||!a.name||!Array.isArray(a.spans))throw new Error("Invalid snapshot format");const r={...a,id:`imported_${Date.now()}_${Math.random().toString(36).slice(2,9)}`};this.context.saveSnapshot(r),this.updateUI(),this.log.info("Imported snapshot: %s (%d spans)",a.name,a.spans.length)}catch(o){this.log.err("Failed to import snapshot: %s",o.message),alert(`Failed to import snapshot: ${o.message}`)}},s.readAsText(n),t.value=""}showTimelinePanel(){if(!this.timelinePanel){this.timelinePanel=document.createElement(xe.tagName),this.timelinePanel.panelId="analyzer-timeline",this.timelinePanel.style.cssText="width: 900px; height: 600px; min-width: 500px; min-height: 300px; resize: both; overflow: hidden;",this.timelineTitleEl=document.createElement("span"),this.timelineTitleEl.slot="title",this.timelineTitleEl.textContent="Loading Timeline",this.timelinePanel.appendChild(this.timelineTitleEl);const e=document.createElement("div");e.style.cssText="display: flex; flex-direction: column; height: 100%;",this.timelineControlsContainer=document.createElement("div"),this.timelineControlsContainer.style.cssText=`
                display: flex; gap: 8px; padding: 8px; align-items: center; flex-wrap: wrap;
                border-bottom: 1px solid var(--debug-border, rgba(255, 255, 255, 0.08));
                background: var(--debug-bg, #191c2d);
            `,this.renderTimelineControls(),e.appendChild(this.timelineControlsContainer),this.timelinePanelContainer=document.createElement("div"),this.timelinePanelContainer.style.cssText="flex: 1; overflow: auto; background: var(--debug-bg-inset, rgba(0, 0, 0, 0.3));",e.appendChild(this.timelinePanelContainer),this.timelinePanel.appendChild(e),document.body.appendChild(this.timelinePanel),this.resizeObserver=new ResizeObserver(()=>{this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}),this.resizeObserver.observe(this.timelinePanelContainer)}this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer),this.timelinePanel.show()}updateTimelineTitle(){if(this.timelineTitleEl)if(this.viewingSnapshotId){const e=this.context.getSnapshots().find(t=>t.id===this.viewingSnapshotId);this.timelineTitleEl.textContent=e?`Timeline: ${e.name}`:"Loading Timeline"}else this.timelineTitleEl.textContent="Loading Timeline (Live)"}renderTimelineControls(){if(!this.timelineControlsContainer)return;this.timelineControlsContainer.innerHTML="";const e=document.createElement("select");e.style.cssText=`
            padding: 4px 8px;
            font-size: 11px;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid var(--debug-border, rgba(255, 255, 255, 0.1));
            border-radius: 4px;
            color: var(--debug-text, #e8eaed);
            outline: none;
            min-width: 150px;
        `;const t=document.createElement("option");t.value="",t.textContent="● Live",this.viewingSnapshotId||(t.selected=!0),e.appendChild(t);const n=this.context.getSnapshots();for(const h of n){const u=document.createElement("option");u.value=h.id,u.textContent=h.name,h.id===this.viewingSnapshotId&&(u.selected=!0),e.appendChild(u)}e.addEventListener("change",()=>{this.viewingSnapshotId=e.value||null,this.updateTimelineTitle(),this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}),this.timelineControlsContainer.appendChild(e);const s=document.createElement("span");s.style.cssText="width: 1px; height: 20px; background: var(--debug-border, rgba(255, 255, 255, 0.1));",this.timelineControlsContainer.appendChild(s);const i=[{value:"resource",label:"Resources"},{value:"component",label:"Components"},{value:"effect",label:"Effects"},{value:"shader",label:"Shaders"},{value:"sampling",label:"Sampling"},{value:"baking",label:"Baking"},{value:"custom",label:"Custom"}],o=document.createElement("div");o.style.cssText="display: flex; gap: 12px; align-items: center;";for(const h of i){const u=document.createElement("label");u.style.cssText="display: flex; align-items: center; gap: 4px; font-size: 11px; cursor: pointer;";const p=document.createElement("input");p.type="checkbox",p.checked=this.categoryFilters.has(h.value),p.addEventListener("change",()=>{p.checked?this.categoryFilters.add(h.value):this.categoryFilters.delete(h.value),this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer),this.renderTimelineControls()}),u.appendChild(p),u.appendChild(document.createTextNode(h.label)),o.appendChild(u)}this.timelineControlsContainer.appendChild(o);const a=document.createElement("button");a.className="debug-button",a.textContent="Expand All",a.addEventListener("click",()=>{this.collapsedParents.clear(),this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}),this.timelineControlsContainer.appendChild(a);const r=document.createElement("button");r.className="debug-button",r.textContent="Collapse All",r.addEventListener("click",()=>{const h=this.getFilteredSpans();this.getParentSpans(h).forEach(p=>this.collapsedParents.add(p.name)),this.timelinePanelContainer&&this.renderTimelineIntoContainer(this.getFilteredSpans(),this.timelinePanelContainer)}),this.timelineControlsContainer.appendChild(r);const l=this.getFilteredSpans(),d=document.createElement("span");d.style.cssText="margin-left: auto; font-size: 11px; color: var(--debug-text-muted);",d.textContent=`${l.length} spans`,this.timelineControlsContainer.appendChild(d)}getParentSpans(e){const t=new Set;for(const n of e)if(n.parentId){const s=e.find(i=>i.id===n.parentId);s&&t.add(s.name)}return e.filter(n=>t.has(n.name))}organizeSpans(e){const t=Us.components,n=new Map;for(const b of e)n.set(b.name,b);const s=new Map,i=[];for(const[b,k]of Object.entries(t))k.parent?(s.has(k.parent)||s.set(k.parent,[]),s.get(k.parent).push(b)):i.push(b);const o=b=>{const k=[];for(const L of b)if(n.has(L))k.push(L);else{const I=s.get(L)??[];k.push(...o(I))}return k},a=o(i),r=new Map;for(const[b,k]of Object.entries(t))for(const L of k.resources)r.has(L)||r.set(L,[]),r.get(L).push(b);const l=new Map;for(const[b,k]of Object.entries(t))for(const L of k.materials)l.has(L)||l.set(L,[]),l.get(L).push(b);const d=new Set,h=(b,k)=>(b.end??1/0)-(k.end??1/0),u=[],p=(b,k)=>{const L=n.get(b);if(!L||L.category==="effect"||L.category==="shader")return;d.add(b);const I=t[b],M=[],A=[];if(I){for(const D of I.resources){const R=n.get(D);R&&!d.has(D)&&(M.push(R),d.add(D))}for(const D of I.materials){const R=n.get(D);R&&!d.has(D)&&(A.push(R),d.add(D))}}const g=s.get(b)??[],y=M.length+A.length+g.length,z=y>0,T=this.collapsedParents.has(b);if(u.push({span:L,indent:k,isParent:z,childCount:y}),!T){M.sort(h);for(const R of M)u.push({span:R,indent:k+1,isParent:!1,childCount:0});A.sort(h);for(const R of A)u.push({span:R,indent:k+1,isParent:!1,childCount:0});const D=g.map(R=>n.get(R)).filter(R=>R!==void 0);D.sort(h);for(const R of D)p(R.name,k+1)}},x=a.map(b=>n.get(b)).filter(b=>b!==void 0);x.sort(h);for(const b of x)p(b.name,0);const f=e.filter(b=>!d.has(b.name)),C=new Map,m=[],w=new Map;for(const b of e)w.set(b.id,b);const E=new Set(f.map(b=>b.name));for(const b of f){let k=b.parentId?w.get(b.parentId):null;const L=b.data?.parentName;!k&&L&&(k=n.get(L)??null),k&&(!d.has(k.name)||E.has(k.name))&&k?(C.has(k.name)||C.set(k.name,[]),C.get(k.name).push(b)):m.push(b)}const P=(b,k)=>{d.add(b.name);const L=C.get(b.name)??[],I=L.length,M=I>0,A=this.collapsedParents.has(b.name);if(u.push({span:b,indent:k,isParent:M,childCount:I}),!A&&L.length>0){L.sort(h);for(const g of L)P(g,k+1)}};m.sort(h);for(const b of m)P(b,0);return u}renderTimelineIntoContainer(e,t){if(e.length===0){t.innerHTML=`
                <div class="analyzer-empty">
                    No spans recorded yet. Loading data will appear here.
                </div>
            `;return}const n=this.organizeSpans(e),s=Math.min(...e.map(w=>w.start)),o=Math.max(...e.map(w=>w.end??performance.now()-this.getProfilerStartTime()))-s,a=24,r=16,l=220,d=Math.max(...n.map(w=>w.indent)),h=l+d*r,u=Math.max(400,t.clientWidth-h-40),p=4,x=h+u+20,f=n.length*a+40,C=document.createElementNS("http://www.w3.org/2000/svg","svg");C.setAttribute("width",String(x)),C.setAttribute("height",String(f)),C.style.display="block";const m=this.createTimeMarkers(o,h,u);C.appendChild(m),n.forEach((w,E)=>{const P=E*a+30,b=this.createSpanRowHierarchical(w.span,P,s,o,h,u,a,p,w.indent,w.isParent,w.childCount,r,x);C.appendChild(b)}),t.innerHTML="",t.appendChild(C)}diffPanel=null;diffRenderer=null;showDiff(){const e=this.context.computeDiff();if(!e){this.log.warn("Cannot compute diff - need at least 2 snapshots selected");return}if(this.log.info("Diff summary: %d faster, %d slower, %d same",e.summary.fasterCount,e.summary.slowerCount,e.summary.sameCount),this.diffPanel)this.diffRenderer?.setDiff(e);else{this.diffPanel=document.createElement(xe.tagName),this.diffPanel.panelId="analyzer-diff",this.diffPanel.style.cssText="width: 800px; height: 500px;";const t=document.createElement("span");t.slot="title",t.textContent="Snapshot Comparison",this.diffPanel.appendChild(t);const n=document.createElement("div");n.style.cssText="height: 100%; overflow: auto;",this.diffPanel.appendChild(n),this.diffRenderer=new Wl({container:n,diff:e,mode:"table"}),document.body.appendChild(this.diffPanel)}this.diffRenderer?.render(),this.diffPanel.show()}getState(){return{categoryFilters:Array.from(this.categoryFilters),showCompleted:this.showCompleted,showInProgress:this.showInProgress}}setState(e){const t=e;if(t.categoryFilters){const n=["resource","component","effect","shader","sampling","baking","custom"],s=new Set(t.categoryFilters);for(const i of n)t.categoryFilters.includes(i)||s.add(i);this.categoryFilters=s}this.showCompleted=t.showCompleted??!0,this.showInProgress=t.showInProgress??!0,this.updateUI()}dispose(){this.container=null,this.statsContainer=null,this.boundAutoStop&&(this.context.engine.off("experience:ready",this.boundAutoStop),this.boundAutoStop=null),this.boundKeyHandler&&(document.removeEventListener("keydown",this.boundKeyHandler),this.boundKeyHandler=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.timelinePanel&&(this.timelinePanel.remove(),this.timelinePanel=null,this.timelinePanelContainer=null,this.timelineControlsContainer=null),this.diffPanel&&(this.diffPanel.remove(),this.diffPanel=null,this.diffRenderer=null)}}const le={component:"#4caf50",resource:"#4a90d9",material:"#e8a838",parentEdge:"#666",resourceEdge:"#4a90d9",materialEdge:"#e8a838",text:"#e8eaed",textMuted:"#939fa7",bg:"#1a1a1a",nodeBg:"#252525",border:"#333"};class Xl{id="dependency-graph";name="Dependency Graph";category="Analysis";context;log;enabled=!1;viewMode="all";selectedNode=null;container=null;floatingPanel=null;svgContainer=null;nodes=new Map;edges=[];selectedNodes=new Set;hoveredNode=null;connections=new Map;selectionInfoElement=null;filterText="";init(e){this.context=e,this.log=e.createLogger("DependencyGraph"),this.buildGraph()}enable(){this.enabled=!0,this.log.info("DependencyGraphPlugin enabled")}disable(){this.enabled=!1,this.log.info("DependencyGraphPlugin disabled")}isEnabled(){return this.enabled}createUI(e){this.container=e,this.renderButton()}updateUI(){}renderButton(){if(!this.container)return;this.container.innerHTML="",this.container.style.cssText="padding: 8px;";const e=document.createElement("button");e.className="debug-button",e.style.cssText="width: 100%; display: flex; justify-content: space-between; align-items: center;",e.addEventListener("click",()=>this.showFloatingPanel());const t=document.createElement("span");t.textContent="Open Dependency Graph";const n=document.createElement("span");n.className="debug-text-muted",n.style.cssText="font-size: 10px;",n.textContent=`${this.nodes.size} nodes, ${this.edges.length} edges`,e.appendChild(t),e.appendChild(n),this.container.appendChild(e)}showFloatingPanel(){if(!this.floatingPanel){this.floatingPanel=document.createElement(xe.tagName),this.floatingPanel.panelId="dependency-graph",this.floatingPanel.style.cssText="width: 900px; height: 600px;";const e=document.createElement("span");e.slot="title",e.textContent="Dependency Graph",this.floatingPanel.appendChild(e);const t=document.createElement("div");t.style.cssText="height: 100%; display: flex; flex-direction: column;",this.floatingPanel.appendChild(t),this.renderControls(t),this.svgContainer=document.createElement("div"),this.svgContainer.style.cssText=`
                flex: 1;
                overflow: auto;
                background: ${le.bg};
                border: 1px solid ${le.border};
                border-radius: 4px;
            `,t.appendChild(this.svgContainer),this.renderGraph(),document.body.appendChild(this.floatingPanel)}this.floatingPanel.show()}renderControls(e){const t=document.createElement("div");t.style.cssText="display: flex; gap: 6px; margin-bottom: 8px; flex-wrap: wrap; align-items: center;";const n=document.createElement("input");n.type="text",n.className="debug-input",n.placeholder="Filter...",n.style.cssText="width: 100px;",n.value=this.filterText,n.addEventListener("input",()=>{if(this.filterText=n.value.toLowerCase(),this.svgContainer){const l=this.svgContainer.querySelector("svg");l&&this.updateHighlighting(l)}}),t.appendChild(n);const s=document.createElement("select");s.className="debug-select",s.innerHTML=`
            <option value="all">All Dependencies</option>
            <option value="hierarchy">Component Hierarchy</option>
            <option value="resources">Resource Dependencies</option>
            <option value="materials">Material Dependencies</option>
        `,s.value=this.viewMode,s.addEventListener("change",()=>{this.viewMode=s.value,this.renderGraph(),r.textContent=`${this.getVisibleNodes().size} nodes, ${this.getFilteredEdges().length} edges`}),t.appendChild(s);const i=document.createElement("div");i.style.cssText="display: flex; gap: 10px; margin-left: 8px;",i.innerHTML=`
            <span style="display: flex; align-items: center; gap: 3px; font-size: 10px;">
                <span style="width: 8px; height: 8px; background: ${le.component}; border-radius: 2px;"></span>
                <span class="debug-text-muted">Comp</span>
            </span>
            <span style="display: flex; align-items: center; gap: 3px; font-size: 10px;">
                <span style="width: 8px; height: 8px; background: ${le.resource}; border-radius: 2px;"></span>
                <span class="debug-text-muted">Res</span>
            </span>
            <span style="display: flex; align-items: center; gap: 3px; font-size: 10px;">
                <span style="width: 8px; height: 8px; background: ${le.material}; border-radius: 2px;"></span>
                <span class="debug-text-muted">Mat</span>
            </span>
        `,t.appendChild(i);const o=document.createElement("button");o.className="debug-button-small",o.textContent="Clear",o.addEventListener("click",()=>{if(this.selectedNodes.clear(),this.svgContainer){const l=this.svgContainer.querySelector("svg");l&&this.updateHighlighting(l)}}),t.appendChild(o);const a=document.createElement("span");a.className="debug-text-muted",a.style.cssText="font-size: 10px;",this.selectionInfoElement=a,this.updateSelectionInfo(),t.appendChild(a);const r=document.createElement("span");r.className="debug-text-muted",r.style.cssText="margin-left: auto; font-size: 10px;",r.textContent=`${this.nodes.size} nodes, ${this.edges.length} edges`,t.appendChild(r),e.appendChild(t)}updateSelectionInfo(){this.selectionInfoElement&&(this.selectedNodes.size===0?this.selectionInfoElement.textContent="(click nodes to lock highlight)":this.selectionInfoElement.textContent=`${this.selectedNodes.size} selected`)}buildGraph(){this.nodes.clear(),this.edges=[];const e=Us.components,t=new Set,n=new Set;for(const[s,i]of Object.entries(e)){for(const o of i.resources)t.add(o);for(const o of i.materials)n.add(o)}for(const s of t)this.nodes.set(`res:${s}`,{id:`res:${s}`,label:s,type:"resource",x:0,y:0,width:0,height:0});for(const s of n)this.nodes.set(`mat:${s}`,{id:`mat:${s}`,label:this.shortenMaterialName(s),type:"material",x:0,y:0,width:0,height:0});for(const[s,i]of Object.entries(e)){this.nodes.set(`comp:${s}`,{id:`comp:${s}`,label:s,type:"component",x:0,y:0,width:0,height:0}),i.parent&&this.edges.push({from:`comp:${i.parent}`,to:`comp:${s}`,type:"parent"});for(const o of i.resources)this.edges.push({from:`res:${o}`,to:`comp:${s}`,type:"resource"});for(const o of i.materials)this.edges.push({from:`mat:${o}`,to:`comp:${s}`,type:"material"})}this.log.info("Built graph: %d nodes, %d edges",this.nodes.size,this.edges.length)}shortenMaterialName(e){const t=e.split(":");return t[t.length-1]}getFilteredEdges(){switch(this.viewMode){case"hierarchy":return this.edges.filter(e=>e.type==="parent");case"resources":return this.edges.filter(e=>e.type==="resource");case"materials":return this.edges.filter(e=>e.type==="material");default:return this.edges}}getVisibleNodes(){const e=this.getFilteredEdges(),t=new Set;for(const n of e)t.add(n.from),t.add(n.to);if(this.viewMode==="hierarchy")for(const[n,s]of this.nodes)s.type==="component"&&t.add(n);return t}renderGraph(){if(!this.svgContainer)return;const e=this.getFilteredEdges(),t=this.getVisibleNodes(),n=Array.from(t).map(h=>this.nodes.get(h)).filter(Boolean);this.connections.clear();for(const h of n)this.connections.set(h.id,new Set);for(const h of e)!t.has(h.from)||!t.has(h.to)||(this.connections.get(h.from)?.add(h.to),this.connections.get(h.to)?.add(h.from));this.hoveredNode=null,this.layoutNodes(n,e);let s=100,i=100;for(const h of n)s=Math.max(s,h.x+h.width+20),i=Math.max(i,h.y+h.height+20);const o=Math.max(s,600),a=Math.max(i,400),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",String(o)),r.setAttribute("height",String(a)),r.style.minWidth="100%";const l=document.createElementNS("http://www.w3.org/2000/svg","g");l.setAttribute("class","edges");const d=document.createElementNS("http://www.w3.org/2000/svg","g");d.setAttribute("class","nodes");for(const h of e){const u=this.nodes.get(h.from),p=this.nodes.get(h.to);!u||!p||!t.has(h.from)||!t.has(h.to)||this.drawEdge(l,u,p,h)}for(const h of n)this.drawNode(d,h,r);r.appendChild(l),r.appendChild(d),r.addEventListener("click",h=>{h.target===r&&(this.selectedNodes.clear(),this.updateHighlighting(r))}),this.svgContainer.innerHTML="",this.svgContainer.appendChild(r)}escapeId(e){return e.replace(/[:.]/g,"_")}layoutNodes(e,t){if(e.length===0)return;const n=120,s=28,i=80,o=12,a=40,r=20,l=new Set(e.map(f=>f.id)),d=new Map(e.map(f=>[f.id,f])),h=new Map;for(const f of e)h.set(f.id,new Set);for(const f of t)!l.has(f.from)||!l.has(f.to)||(h.get(f.from).add(f.to),h.get(f.to).add(f.from));const u=new Set,p=[];for(const f of e){if(u.has(f.id))continue;const C=[],m=[f.id];for(;m.length>0;){const w=m.pop();if(u.has(w))continue;u.add(w);const E=d.get(w);E&&C.push(E);for(const P of h.get(w)??[])u.has(P)||m.push(P)}C.length>0&&p.push(C)}p.sort((f,C)=>C.length-f.length);let x=r;for(const f of p){const C=new Set(f.map(E=>E.id)),m=t.filter(E=>C.has(E.from)&&C.has(E.to)),{height:w}=this.layoutIsland(f,m,r,x,n,s,i,o);x+=w+a}}layoutIsland(e,t,n,s,i,o,a,r){if(e.length===0)return{width:0,height:0};const l=new Set(e.map(b=>b.id)),d=new Map,h=(b,k)=>{if(d.has(b))return d.get(b);if(k.has(b))return 0;k.add(b);let L=-1;for(const M of t)if(M.to===b&&l.has(M.from)){const A=h(M.from,new Set(k));L=Math.max(L,A)}const I=L+1;return d.set(b,I),I};for(const b of e)h(b.id,new Set);const u=new Map;let p=0;for(const b of e){const k=d.get(b.id)??0;p=Math.max(p,k),u.has(k)||u.set(k,[]),u.get(k).push(b)}for(let b=0;b<4;b++){for(let k=1;k<=p;k++){const L=u.get(k)??[],I=u.get(k-1)??[],M=new Map;I.forEach((g,y)=>M.set(g.id,y));const A=new Map;for(const g of L){const y=[];for(const z of t)z.to===g.id&&M.has(z.from)&&y.push(M.get(z.from));A.set(g.id,y.length>0?y.reduce((z,T)=>z+T,0)/y.length:L.indexOf(g))}L.sort((g,y)=>{const z=(A.get(g.id)??0)-(A.get(y.id)??0);return z!==0?z:g.label.localeCompare(y.label)})}for(let k=p-1;k>=0;k--){const L=u.get(k)??[],I=u.get(k+1)??[],M=new Map;I.forEach((g,y)=>M.set(g.id,y));const A=new Map;for(const g of L){const y=[];for(const z of t)z.from===g.id&&M.has(z.to)&&y.push(M.get(z.to));A.set(g.id,y.length>0?y.reduce((z,T)=>z+T,0)/y.length:L.indexOf(g))}L.sort((g,y)=>{const z=(A.get(g.id)??0)-(A.get(y.id)??0);return z!==0?z:g.label.localeCompare(y.label)})}}let x=0;for(const[,b]of u)x=Math.max(x,b.length);const f=x*(o+r)-r,C=(p+1)*(i+a)-a;for(let b=0;b<=p;b++){const k=u.get(b)??[],L=k.length*(o+r)-r,I=s+(f-L)/2;for(let M=0;M<k.length;M++){const A=k[M];A.x=n+b*(i+a),A.y=I+M*(o+r),A.width=i,A.height=o}}for(let b=0;b<8;b++){for(let k=1;k<=p;k++){const L=u.get(k)??[];for(const I of L){const M=[];for(const A of t)if(A.to===I.id){const g=e.find(y=>y.id===A.from);g&&M.push(g.y+g.height/2)}if(M.length>0){const A=M.reduce((g,y)=>g+y,0)/M.length-o/2;I.y=I.y*.3+A*.7}}L.sort((I,M)=>I.y-M.y);for(let I=1;I<L.length;I++){const M=L[I-1],A=L[I],g=M.y+o+r;A.y<g&&(A.y=g)}}for(let k=p-1;k>=0;k--){const L=u.get(k)??[];for(const I of L){const M=[];for(const A of t)if(A.from===I.id){const g=e.find(y=>y.id===A.to);g&&M.push(g.y+g.height/2)}if(M.length>0){const A=M.reduce((g,y)=>g+y,0)/M.length-o/2;I.y=I.y*.3+A*.7}}L.sort((I,M)=>I.y-M.y);for(let I=1;I<L.length;I++){const M=L[I-1],A=L[I],g=M.y+o+r;A.y<g&&(A.y=g)}}}let m=1/0;for(const b of e)m=Math.min(m,b.y);const w=s-m;for(const b of e)b.y+=w;let E=0;for(const b of e)E=Math.max(E,b.y+b.height);const P=E-s;return{width:C,height:P}}drawNode(e,t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","g"),i=this.escapeId(t.id);s.setAttribute("data-node-id",i),s.setAttribute("data-raw-id",t.id),s.style.cursor="pointer",s.style.transition="opacity 0.15s";const o=document.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("x",String(t.x)),o.setAttribute("y",String(t.y)),o.setAttribute("width",String(t.width)),o.setAttribute("height",String(t.height)),o.setAttribute("rx","4"),o.setAttribute("fill",le.nodeBg),o.setAttribute("stroke",le[t.type]),o.setAttribute("stroke-width","2"),o.setAttribute("data-stroke-rect","true"),s.appendChild(o);const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("x",String(t.x)),a.setAttribute("y",String(t.y)),a.setAttribute("width","4"),a.setAttribute("height",String(t.height)),a.setAttribute("rx","2"),a.setAttribute("fill",le[t.type]),s.appendChild(a);const r=document.createElementNS("http://www.w3.org/2000/svg","text");r.setAttribute("x",String(t.x+10)),r.setAttribute("y",String(t.y+t.height/2+4)),r.setAttribute("fill",le.text),r.setAttribute("font-size","11"),r.textContent=t.label.length>14?t.label.slice(0,12)+"...":t.label,s.appendChild(r),s.addEventListener("mouseenter",()=>{this.hoveredNode=t.id,this.updateHighlighting(n)}),s.addEventListener("mouseleave",()=>{this.hoveredNode=null,this.updateHighlighting(n)}),s.addEventListener("click",l=>{l.stopPropagation(),this.selectedNodes.has(t.id)?this.selectedNodes.delete(t.id):this.selectedNodes.add(t.id),this.updateHighlighting(n)}),e.appendChild(s)}updateHighlighting(e){const t=new Set;for(const s of this.selectedNodes){t.add(s);const i=this.connections.get(s);if(i)for(const o of i)t.add(o)}if(this.filterText){for(const[s,i]of this.nodes)if(i.label.toLowerCase().includes(this.filterText)){t.add(s);const o=this.connections.get(s);if(o)for(const a of o)t.add(a)}}if(this.hoveredNode){t.add(this.hoveredNode);const s=this.connections.get(this.hoveredNode);if(s)for(const i of s)t.add(i)}const n=this.selectedNodes.size>0||this.filterText!==""||this.hoveredNode!==null;e.querySelectorAll("[data-node-id]").forEach(s=>{const i=s,o=i.getAttribute("data-raw-id");if(!o)return;n?i.style.opacity=t.has(o)?"1":"0.15":i.style.opacity="1";const a=i.querySelector("[data-stroke-rect]");a&&a.setAttribute("stroke-width",this.selectedNodes.has(o)?"3":"2")}),e.querySelectorAll("[data-edge-from-raw]").forEach(s=>{const i=s,o=i.getAttribute("data-edge-from-raw"),a=i.getAttribute("data-edge-to-raw");if(!(!o||!a))if(!n)i.style.opacity="0.6";else{const r=t.has(o)&&t.has(a);i.style.opacity=r?"1":"0.08"}}),this.updateSelectionInfo()}drawEdge(e,t,n,s){const i=t.x+t.width,o=t.y+t.height/2,a=n.x,r=n.y+n.height/2,l=document.createElementNS("http://www.w3.org/2000/svg","g");l.setAttribute("data-edge-from",this.escapeId(s.from)),l.setAttribute("data-edge-to",this.escapeId(s.to)),l.setAttribute("data-edge-from-raw",s.from),l.setAttribute("data-edge-to-raw",s.to),l.style.transition="opacity 0.15s";const d=(i+a)/2,h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d",`M ${i} ${o} C ${d} ${o}, ${d} ${r}, ${a} ${r}`),h.setAttribute("fill","none");const u=s.type==="parent"?le.parentEdge:s.type==="resource"?le.resourceEdge:le.materialEdge;h.setAttribute("stroke",u),h.setAttribute("stroke-width",s.type==="parent"?"2":"1"),h.setAttribute("stroke-dasharray",s.type==="parent"?"":"4,2"),l.appendChild(h);const p=6,x=document.createElementNS("http://www.w3.org/2000/svg","polygon");x.setAttribute("points",`
            ${a},${r}
            ${a-p},${r-p/2}
            ${a-p},${r+p/2}
        `),x.setAttribute("fill",u),l.appendChild(x),l.style.opacity="0.6",e.appendChild(l)}getState(){return{viewMode:this.viewMode,selectedNode:this.selectedNode}}setState(e){const t=e;this.viewMode=t.viewMode??"all",this.selectedNode=t.selectedNode??null,this.floatingPanel&&this.svgContainer&&this.renderGraph()}dispose(){this.floatingPanel&&(this.floatingPanel.remove(),this.floatingPanel=null),this.container=null,this.svgContainer=null,this.selectionInfoElement=null,this.nodes.clear(),this.edges=[],this.selectedNodes.clear(),this.connections.clear(),this.hoveredNode=null,this.filterText=""}}Qe.register();class Zl{currentMode="live";debugContext;events;toolRegistry;selectionManager;animationRegistry;debugCamera;historyManager;layout;panel;infoPanel;engine;log;onKeyDown;constructor(e,t,n){this.engine=e,this.log=e.getLogger("Debug.Manager"),F.init(n.projectId),this.debugContext={engine:e,scene:e.scene,resources:t,app:n.app},this.events=new Si,this.animationRegistry=new $i,this.debugCamera=new Hi(e,e.getLogger("Debug.Camera")),this.debugCamera.setVisualizerCameraGetter(()=>this.getVisualizerCamera()),this.toolRegistry=new Ei(this.events,e.getLogger("Debug.ToolRegistry")),this.toolRegistry.setManager(this),this.selectionManager=new Bi({engine:e,events:this.events,animationRegistry:this.animationRegistry,logger:e.getLogger("Debug.Selection"),getActiveCamera:()=>e.getActiveCamera(),onFocus:(l,d)=>{this.debugCamera.isEnabled()&&this.debugCamera.focusOn(l,d)}}),this.historyManager=new Io(e.getLogger("Debug.History"),n.projectId),this.setupHistoryManager(),this.layout=document.createElement("debug-layout"),document.body.appendChild(this.layout),this.panel=new Ki(this),this.infoPanel=new Co(this),this.infoPanel.initResourcesInspector(t,this.animationRegistry);const s=this.panel.getElement(),i=this.infoPanel.getElement();this.layout.addToLeft(s),this.layout.addToRight(i),this.layout.observeLeftPanel(s),this.layout.observeRightPanel(i),this.captureLogsPanel(),this.capturePerfsGui(),this.capturePerfsDetailDialog(),this.registerCoreTools(),this.setupLabModeListeners(),this.onKeyDown=this.handleKeyDown.bind(this),window.addEventListener("keydown",this.onKeyDown),ne.getInstance().registerMany("History",[{key:"Ctrl+Z",description:"Undo"},{key:"Ctrl+Shift+Z",description:"Redo"}]),this.engine.monitor.setSuppressAutoDecline(!0),e.on("update",()=>this.update(e.time.deltaSeconds)),e.on("postRender",()=>this.render(e.renderer.instance));const o=this.loadDebugManifest(),a=this.historyManager.init(),r=this.waitForAppReady(n.app);Promise.all([o,a,r]).then(()=>{this.historyManager.refreshState(),this.historyManager.restorePersistedState(),this.historyManager.finishInitialization(),this.layout.setReady()}).catch(l=>{this.log.err("Failed to initialize debug manager: %s",l),this.historyManager.finishInitialization(),this.layout.setReady()}),this.log.info("Debug manager initialized")}setupHistoryManager(){this.historyManager.setSerializerContext({getManager:()=>this,getTools:()=>this.toolRegistry.getAll()}),this.historyManager.setDeserializerContext({getManager:()=>this,getTools:()=>this.toolRegistry.getAll()})}setupLabModeListeners(){this.events.on("lab:entered",({context:e,scene:t})=>{const n=this.currentMode;this.currentMode="lab",this.debugContext=e,this.selectionManager.updateScene(t),this.selectionManager.clear(),this.events.emit("mode:change",{previous:n,current:"lab"}),this.panel.onModeChange(n,"lab"),this.infoPanel.updateScene()}),this.events.on("lab:exited",({context:e,scene:t})=>{const n=this.currentMode;this.currentMode="live",this.debugContext=e,this.selectionManager.updateScene(t),this.selectionManager.clear(),this.events.emit("mode:change",{previous:n,current:"live"}),this.panel.onModeChange(n,"live"),this.infoPanel.updateScene()})}handleKeyDown(e){if(e.target instanceof HTMLTextAreaElement)return;if(e.target instanceof HTMLInputElement){const s=e.target.type.toLowerCase();if(s==="text"||s==="number"||s==="password"||s==="email"||s==="search"||s==="url"||s==="tel")return}const t=e.key.toLowerCase(),n=this.historyManager.getSelectedScope();if((e.ctrlKey||e.metaKey)&&t==="z"&&!e.shiftKey){e.preventDefault(),n?this.historyManager.undoScoped(n):this.historyManager.undo();return}if((e.ctrlKey||e.metaKey)&&t==="z"&&e.shiftKey){e.preventDefault(),n?this.historyManager.redoScoped(n):this.historyManager.redo();return}if((e.ctrlKey||e.metaKey)&&t==="y"){e.preventDefault(),n?this.historyManager.redoScoped(n):this.historyManager.redo();return}}async loadDebugManifest(){if(nn.length===0){this.log.info("No debug manifest entries found");return}this.log.info(`Found ${nn.length} debug manifest entries`);const e=this.getTool("lab"),t=nn.map(async n=>{try{const s=await n.load();s.lab&&e&&e.registerLabEntries(n.id,s.lab),s.options&&e&&e.registerOptions(s.options),s.config&&e&&e.registerGlobalConfig(s.config),s.buffers&&this.registerBuffers(s.buffers),s.visualizations&&this.registerVisualizations(s.visualizations)}catch(s){this.log.err('Failed to load debug manifest entry "%s": %o',n.id,s)}});await Promise.all(t),this.log.info("All debug manifest entries loaded")}registerBuffers(e){const t=this.getTool("visualizer");if(!t)return;const n=e.register(this.debugContext);for(const s of n)t.registerBuffer(s)}registerVisualizations(e){const t=this.getTool("visualizer");if(!t)return;const n=e.register();for(const s of n)t.registerPlugin(s)}registerCoreTools(){this.registerTool(new Vo),this.registerTool(new _o),this.registerTool(new ia),this.registerTool(new ha),this.registerTool(new ua),this.registerTool(new pa),this.registerTool(new ga),this.registerTool(new Sa),this.registerTool(new ka),this.registerTool(new Ya),this.registerTool(new cr),this.registerTool(new Vr),this.registerTool(new Pl);const e=new vr;this.registerTool(e),e.registerPlugin(new yr),e.registerPlugin(new wr),e.registerPlugin(new Er),e.registerPlugin(new Fr),e.registerPlugin(new Hr);const t=new Gl;this.registerTool(t),t.registerPlugin(new Mn),t.registerPlugin(new Xl),this.registerTool(new Nl),this.enableTool("selection"),this.enableTool("camera-inspector"),this.enableTool("transform"),this.enableTool("grid"),this.enableTool("axes"),this.enableTool("orientation-gizmo")}get mode(){return this.currentMode}get context(){return this.debugContext}get selection(){return{selected:this.selectionManager.getSelected(),onSelect:(e,t)=>this.select(e,t)}}get camera(){return this.debugCamera}get labOptions(){return this.getTool("lab")?.getLabOptions()??{register:()=>{},unregister:()=>{},get:()=>{},getValue:()=>{},setValue:()=>{},getAll:()=>new Map}}get eventBus(){return this.events}get history(){return this.historyManager}get registry(){return this.getTool("lab")?.getRegistry()}get outlinePass(){return this.selectionManager.getOutlinePass()}setMode(e){if(this.currentMode===e)return;const t=this.toolRegistry.getAll().filter(n=>n.enabled&&n.id!=="lab").map(n=>n.id);for(const n of t)this.toolRegistry.disable(n);e==="lab"?this.toolRegistry.enable("lab"):this.toolRegistry.disable("lab");for(const n of t)this.toolRegistry.enable(n);this.historyManager.recordAction(`Mode → ${e}`),this.log.info(`Switched to ${e} mode`)}registerTool(e){this.toolRegistry.register(e),e.panel==="info"?this.infoPanel.addToolSection(e):this.panel.addToolSection(e)}getTool(e){return this.toolRegistry.get(e)}enableTool(e){this.toolRegistry.enable(e);const t=this.toolRegistry.get(e);t?.panel==="info"?this.infoPanel.updateToolState(e,!0):this.panel.updateToolState(e,!0),this.historyManager.recordAction(`Enable ${t?.name??e}`)}disableTool(e){this.toolRegistry.disable(e);const t=this.toolRegistry.get(e);t?.panel==="info"?this.infoPanel.updateToolState(e,!1):this.panel.updateToolState(e,!1),this.historyManager.recordAction(`Disable ${t?.name??e}`)}toggleTool(e){this.toolRegistry.toggle(e)}onSelectionChange(e){return this.events.on("selection:change",({object:t})=>e(t))}onModeChange(e){return this.events.on("mode:change",({previous:t,current:n})=>e(t,n))}onLabOptionsChange(e){return this.events.on("lab-options:change",e)}update(e){this.debugCamera.update(),this.animationRegistry.update(e),this.panel.update(),this.toolRegistry.update(e)}render(e){this.toolRegistry.render(e)}getVisualizerCamera(){if(this.currentMode==="lab"){const t=this.getTool("lab")?.getVisualizerCamera();if(t)return t}return this.engine.camera.instance}select(e,t){this.selectionManager.getSelected()!==e&&(this.selectionManager.select(e,t),this.infoPanel.onSelectionChange(e))}addInspectorUserDataKey(e){this.selectionManager.addInspectorUserDataKey(e)}show(){this.panel.show(),this.infoPanel.show()}hide(){this.panel.hide(),this.infoPanel.hide()}toggle(){this.panel.toggle(),this.infoPanel.toggle()}static shouldEnable(){return new URLSearchParams(window.location.search).get("debug")==="true"}getState(){const e=this.toolRegistry.getAll();return{mode:this.currentMode,enabledTools:e.filter(t=>t.enabled).map(t=>t.id)}}setState(e){const t=e;if(t&&(t.mode&&t.mode!==this.currentMode&&this.setMode(t.mode),Array.isArray(t.enabledTools))){const n=new Set(t.enabledTools),s=this.toolRegistry.getAll();for(const i of s)n.has(i.id)?i.enabled||this.toolRegistry.enable(i.id):i.enabled&&this.toolRegistry.disable(i.id);for(const i of s)i.panel==="info"?this.infoPanel.updateToolState(i.id,i.enabled):this.panel.updateToolState(i.id,i.enabled)}}captureLogsPanel(){const e=document.querySelector("logs-panel");if(e)this.layout.addToBottom(e),this.layout.observeLogsPanel(e);else{const t=new MutationObserver(n=>{for(const s of n)for(const i of s.addedNodes)if(i instanceof HTMLElement&&i.tagName.toLowerCase()==="logs-panel"){this.layout.addToBottom(i),this.layout.observeLogsPanel(i),t.disconnect();return}});t.observe(document.body,{childList:!0}),this.logsPanelObserver=t}}logsPanelObserver=null;capturePerfsGui(){const e=document.querySelector("perfs-gui");if(e)this.layout.addToCenter(e);else{const t=new MutationObserver(n=>{for(const s of n)for(const i of s.addedNodes)if(i instanceof HTMLElement&&i.tagName.toLowerCase()==="perfs-gui"){this.layout.addToCenter(i),t.disconnect();return}});t.observe(document.body,{childList:!0}),this.perfsGuiObserver=t}}perfsGuiObserver=null;capturePerfsDetailDialog(){const e=document.querySelector("perfs-detail-dialog");if(e)this.layout.addToCenter(e);else{const t=new MutationObserver(n=>{for(const s of n)for(const i of s.addedNodes)if(i instanceof HTMLElement&&i.tagName.toLowerCase()==="perfs-detail-dialog"){this.layout.addToCenter(i),t.disconnect();return}});t.observe(document.body,{childList:!0}),this.perfsDetailDialogObserver=t}}perfsDetailDialogObserver=null;waitForAppReady(e){return new Promise(t=>{let n=!1;const s=o=>{n||(n=!0,this.log.info("App ready (%s), proceeding with state restoration",o),t())},i=e;i?.once&&i.once("ready",()=>s("event")),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s("fallback")})})})}dispose(){window.removeEventListener("keydown",this.onKeyDown),ne.getInstance().unregister("History"),this.logsPanelObserver?.disconnect(),this.logsPanelObserver=null,this.perfsGuiObserver?.disconnect(),this.perfsGuiObserver=null,this.perfsDetailDialogObserver?.disconnect(),this.perfsDetailDialogObserver=null,this.toolRegistry.dispose(),this.selectionManager.dispose(),this.debugCamera.dispose(),this.historyManager.dispose(),this.events.dispose(),this.panel.dispose(),this.infoPanel.dispose(),this.layout.remove(),this.log.info("Debug manager disposed")}}export{Zl as DebugManager};
