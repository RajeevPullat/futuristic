const __vite__fileDeps=["assets/Collider-D-Gl9SVI.js","assets/index-VYqynKLf.js","assets/index-2DZtUusv.css","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./index-VYqynKLf.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-D-Gl9SVI.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
