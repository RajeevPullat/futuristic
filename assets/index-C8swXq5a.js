const __vite__fileDeps=["assets/StrokeColorUpdater-C2RbMF3d.js","assets/index-VYqynKLf.js","assets/index-2DZtUusv.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as e}from"./index-VYqynKLf.js";async function i(r,o=!0){await r.addParticleUpdater("strokeColor",async t=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-C2RbMF3d.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadStrokeColorUpdater};