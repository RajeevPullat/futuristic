const __vite__fileDeps=["assets/PolygonDrawer-ZepQog-R.js","assets/PolygonDrawerBase-DkT1d8FK.js","assets/index-ClkbSqhG.js","assets/index-CJNjDydU.css","assets/TriangleDrawer-erhlJ1CC.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./index-ClkbSqhG.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-ZepQog-R.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-erhlJ1CC.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
