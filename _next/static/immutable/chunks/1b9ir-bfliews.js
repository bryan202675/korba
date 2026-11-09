;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="630ccf69-150e-c182-2b84-ad7b74fccf01")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,865842,e=>{"use strict";var a=e.i(884513),t=e.i(735359);let r={some:0,all:1};e.s(["useInView",0,function(e,{root:s,margin:n,amount:o,once:i=!1,initial:l=!1}={}){let[d,c]=(0,a.useState)(l);return(0,a.useEffect)(()=>{if(!e.current||i&&d)return;let a={root:s&&s.current||void 0,margin:n,amount:o};return function(e,a,{root:s,margin:n,amount:o="some"}={}){let i=(0,t.resolveElements)(e),l=new WeakMap,d=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target);if(!!t!==e.isIntersecting)if(e.isIntersecting){let t=a(e.target,e);"function"==typeof t?l.set(e.target,t):d.unobserve(e.target)}else"function"==typeof t&&(t(e),l.delete(e.target))})},{root:s,rootMargin:n,threshold:"number"==typeof o?o:r[o]});return i.forEach(e=>d.observe(e)),()=>d.disconnect()}(e.current,()=>(c(!0),i?void 0:()=>c(!1)),a)},[s,e,n,i,o]),d}],865842)},151427,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(247301),s=e.i(271874),n=e.i(975157);e.s(["Chip",0,function({tone:e="light",className:t,children:r}){return(0,a.jsx)("span",{className:(0,n.cn)("inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-md border px-2 font-code text-12","dark"===e?"border-white/12 bg-[#161616] text-white":"border-border bg-background text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)]",t),children:r})},"Fade",0,function({edges:e="x",solidOnMobile:t=!1,className:r,children:s}){return(0,a.jsx)("div",{className:(0,n.cn)("relative w-full [-webkit-mask-image:var(--fade)] [mask-image:var(--fade)]",t&&"max-sm:[-webkit-mask-image:none] max-sm:[mask-image:none]",r),style:{"--fade":"x"===e?"linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)":"r"===e?"linear-gradient(to right, #000 60%, transparent)":"b"===e?"linear-gradient(to bottom, #000 62%, transparent)":"radial-gradient(ellipse at center, #000 52%, transparent 78%)"},children:s})},"Node",0,function({icon:e,tone:t="light",size:r="md",className:s,children:o}){let i="dark"===t;return(0,a.jsx)("span",{className:(0,n.cn)("relative z-10 flex shrink-0 items-center justify-center rounded-full border","lg"===r?"size-16":"sm"===r?"size-10":"size-14",i?"border-white/12 bg-[#161616]":"border-border bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05)]",s),children:(0,a.jsx)("span",{className:(0,n.cn)("flex items-center justify-center rounded-full border","lg"===r?"size-11":"sm"===r?"size-7":"size-10",i?"border-white/10 bg-white/[0.04] text-[var(--night-text)]":"border-border bg-muted text-muted-foreground"),children:e?(0,a.jsx)(e,{className:"size-4"}):o})})},"Radar",0,function({tone:e="light",rings:t=3,className:o}){let i=(0,s.useReducedMotion)();return(0,a.jsx)("span",{"aria-hidden":!0,className:(0,n.cn)("pointer-events-none absolute inset-0 flex items-center justify-center",o),children:Array.from({length:t},(t,s)=>{let o=96+56*s;return(0,a.jsx)(r.motion.span,{className:(0,n.cn)("absolute rounded-full border border-dashed","dark"===e?"border-white/15":"border-foreground/15"),style:{width:o,height:o},animate:i?void 0:{opacity:[.35,1,.35],scale:[.98,1.02,.98]},transition:{duration:3.2,repeat:1/0,delay:.45*s,ease:"easeInOut"}},s)})})},"Wire",0,function({vertical:e=!1,tone:t="light",delay:o=0,duration:i=2.2,reverse:l=!1,className:d}){let c=(0,s.useReducedMotion)(),u=l?"100%":"0%",m=l?"0%":"100%";return(0,a.jsxs)("span",{"aria-hidden":!0,className:(0,n.cn)("relative block shrink-0",e?"h-full w-px":"h-px w-full",d),children:[(0,a.jsx)("span",{className:(0,n.cn)("absolute inset-0 border-dashed",e?"border-l":"border-t","dark"===t?"border-white/20":"border-foreground/20")}),!c&&(0,a.jsx)(r.motion.span,{className:(0,n.cn)("absolute size-1.5 rounded-full","dark"===t?"bg-white":"bg-foreground",e?"-left-[2.5px]":"-top-[2.5px]"),initial:e?{top:u,opacity:0}:{left:u,opacity:0},animate:e?{top:[u,m],opacity:[0,1,1,0]}:{left:[u,m],opacity:[0,1,1,0]},transition:{duration:i,delay:o,repeat:1/0,repeatDelay:.6,ease:"easeInOut"}})]})},"useCycle",0,function(e,a=1800){let r=(0,s.useReducedMotion)(),[n,o]=t.useState(0);return t.useEffect(()=>{if(r||e<2)return;let t=window.setInterval(()=>o(a=>(a+1)%e),a);return()=>window.clearInterval(t)},[r,e,a]),n}])},369182,e=>{"use strict";var a=e.i(9420),t=e.i(600037),r=e.i(247301),s=e.i(975157),n=e.i(672509),o=e.i(151427),i=e.i(312724);let l=["Resumir","Sacar tareas","Mejorar la redacción","Seguir escribiendo"],d=[{ask:0,lines:["Rediseño en tres etapas, entrega el 12 de diciembre.","$ 4.800 con un anticipo del 40%.","Si el logo no llega el viernes, se corre una semana."]},{ask:1,lines:["Mandar la propuesta firmada · Mariana","Pedir el logo en vectores · Lucía","Agendar la revisión · Mariana"]}],c=[{title:"Mandar la propuesta firmada",who:"Mariana",when:"Hoy"},{title:"Pedir el logo en vectores",who:"Lucía",when:"Vie 19"},{title:"Agendar la revisión de la etapa 1",who:"Mariana",when:"Lun 22"}];e.s(["EditProposalMock",0,function(){let e=(0,o.useCycle)(3,1800),l=2===e;return(0,a.jsxs)("div",{className:(0,s.cn)(i.SHOT,"w-full max-w-[360px] p-4 text-12"),children:[(0,a.jsx)("p",{className:"text-14 font-medium text-foreground",children:"Kickoff · Klar Estudio"}),(0,a.jsx)("p",{className:"mt-2 text-muted-foreground",children:"Rediseño en tres etapas, entrega el 12 de diciembre."}),(0,a.jsxs)(r.motion.div,{className:(0,s.cn)("mt-3 rounded-md border px-2.5 py-2 transition-[border-color,background-color] duration-500",l?"border-transparent":"border-dashed border-success bg-[color-mix(in_oklab,var(--success)_7%,transparent)]"),initial:!1,animate:{opacity:0===e?.35:1},children:[(0,a.jsx)("p",{className:"text-13 font-medium text-foreground",children:"Próximos pasos"}),(0,a.jsx)("p",{className:"mt-1 text-foreground",children:"1. Propuesta firmada · Mariana"}),(0,a.jsx)("p",{className:"text-foreground",children:"2. Logo en vectores · Lucía"})]}),(0,a.jsxs)("div",{className:"mt-3 flex h-7 items-center justify-between",children:[(0,a.jsxs)("span",{className:"flex items-center gap-1.5 text-10 max-lg:text-12 text-muted-foreground",children:[(0,a.jsx)(n.KorvaCharacter,{size:14,eyes:"still",tone:"white"}),"Usó 2 créditos de IA"]}),(0,a.jsx)(t.AnimatePresence,{mode:"wait",initial:!1,children:l?(0,a.jsx)(r.motion.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"text-12 font-medium text-success",children:"Agregado a la nota"},"ok"):(0,a.jsxs)(r.motion.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"inline-flex h-7 items-center rounded-md border border-border px-2.5 text-12 text-foreground",children:"Descartar"}),(0,a.jsx)("span",{className:"inline-flex h-7 items-center rounded-md bg-foreground px-2.5 text-12 font-medium text-background",children:"Agregar"})]},"ask")})]})]})},"SummaryMock",0,function(){let e=(0,o.useCycle)(d.length,3e3),c=d[e];return(0,a.jsxs)("div",{className:(0,s.cn)(i.SHOT,"w-full max-w-[340px] p-3"),children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 text-13 font-medium text-foreground",children:[(0,a.jsx)(n.KorvaCharacter,{size:22,eyes:"roam",tone:"white"}),"Korvita sobre esta nota"]}),(0,a.jsx)("div",{className:"mt-3 flex flex-wrap gap-1.5",children:l.map((e,t)=>(0,a.jsx)("span",{className:(0,s.cn)("rounded-md border px-2 py-1 text-11 max-lg:text-12 transition-colors duration-300",t===c.ask?"border-foreground bg-foreground text-background":"border-border text-muted-foreground"),children:e},e))}),(0,a.jsx)("div",{className:"mt-3 h-[84px] max-sm:h-[136px] rounded-lg bg-muted px-3 py-2.5",children:(0,a.jsx)(t.AnimatePresence,{mode:"wait",initial:!1,children:(0,a.jsx)(r.motion.ul,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},transition:{duration:.3},className:(0,s.cn)("space-y-1 text-12 leading-snug text-foreground",0===c.ask?"list-disc pl-4 marker:text-muted-foreground":""),children:c.lines.map(e=>(0,a.jsxs)("li",{className:1===c.ask?"flex items-center gap-2":void 0,children:[1===c.ask&&(0,a.jsx)("span",{className:"size-3 shrink-0 rounded-[3px] border border-border bg-background"}),e]},e))},e)})}),(0,a.jsx)("p",{className:"mt-2 text-10 max-lg:text-12 text-muted-foreground",children:"Usó 1 crédito de IA"})]})},"TaskProposalsMock",0,function(){let e=(0,o.useCycle)(c.length+2,900);return(0,a.jsxs)("div",{className:(0,s.cn)(i.SHOT,"w-full max-w-[360px] p-3"),children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 text-12 text-muted-foreground",children:[(0,a.jsx)(n.KorvaCharacter,{size:18,eyes:"still",tone:"white"}),"Encontré 3 tareas en la nota"]}),(0,a.jsx)("div",{className:"mt-2.5 space-y-1.5",children:c.map((t,r)=>{let n=r<e;return(0,a.jsxs)("div",{className:"flex items-center gap-2 rounded-md border border-border px-2 py-1.5 text-12",children:[(0,a.jsx)("span",{className:(0,s.cn)("flex size-4 shrink-0 items-center justify-center rounded border text-10 max-lg:text-12 transition-colors duration-300",n?"border-foreground bg-foreground text-background":"border-border"),children:n?"✓":""}),(0,a.jsx)("span",{className:"min-w-0 flex-1 truncate text-foreground",children:t.title}),(0,a.jsx)("span",{className:"rounded bg-muted px-1.5 py-0.5 text-11 max-lg:text-12 text-muted-foreground",children:t.who}),(0,a.jsx)("span",{className:"text-11 max-lg:text-12 text-muted-foreground",children:t.when})]},t.title)})}),(0,a.jsxs)("span",{className:(0,s.cn)("mt-3 inline-flex h-7 items-center rounded-md px-2.5 text-12 font-medium transition-colors duration-300",e>=c.length?"bg-foreground text-background":"bg-muted text-muted-foreground"),children:["Crear ",Math.min(e,c.length)," tareas"]})]})}])},388763,e=>{"use strict";var a=e.i(9420),t=e.i(600037),r=e.i(247301),s=e.i(975157),n=e.i(132930),o=e.i(360460),i=e.i(769508),l=e.i(181398),d=e.i(903831),c=e.i(101060),u=e.i(151427),m=e.i(312724);let x={Calificado:"bg-[#f59e0b]",Propuesta:"bg-[#6366f1]",Ganado:"bg-success"},p=[{name:"Rediseño de marca",client:"Klar Estudio",amount:"$ 4.800"},{name:"Sitio web",client:"Nube Creativa",amount:"$ 6.200"},{name:"Campaña de verano",client:"Faro Digital",amount:"$ 3.100"}],f=["Calificado","Propuesta","Ganado"],h=[{name:"Jul",value:28.4},{name:"Ago",value:31.9},{name:"Sep",value:30.2},{name:"Oct",value:36.8},{name:"Nov",value:41.3}],g=[{title:"Brief del rediseño",by:"Mariana",when:"Ayer"},{title:"Llamada de seguimiento",by:"Mariana",when:"12 oct"}];e.s(["ModuleTableMock",0,function(){let e=(0,u.useCycle)(f.length,2e3);return(0,a.jsxs)("div",{className:(0,s.cn)(m.DARK_SHOT,"w-full max-w-[400px] overflow-hidden text-12"),children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 border-b border-border px-3 py-2.5 text-11 max-lg:text-12 text-muted-foreground",children:[(0,a.jsx)(l.ModuleChip,{icon:"pipeline",color:c.STANDARD_MODULE_COLORS.pipeline,className:"size-4"}),(0,a.jsx)("span",{className:"text-foreground",children:"Prospectos"}),(0,a.jsx)("span",{children:"· Vista del equipo"}),(0,a.jsxs)("span",{className:"ml-auto flex items-center gap-1.5",children:[(0,a.jsxs)("span",{className:"relative flex size-1.5",children:[(0,a.jsx)("span",{className:"absolute inset-0 animate-ping rounded-full bg-success"}),(0,a.jsx)("span",{className:"relative size-1.5 rounded-full bg-success"})]}),"En vivo"]})]}),p.map((n,o)=>{let i=0===o?f[e]:1===o?"Propuesta":"Calificado";return(0,a.jsxs)(r.motion.div,{className:"grid grid-cols-[1.4fr_1fr_auto] items-center gap-3 border-b border-border px-3 py-2.5 last:border-b-0",initial:0===o&&{backgroundColor:"rgba(255,255,255,0.1)"},animate:{backgroundColor:"rgba(255,255,255,0)"},transition:{duration:1.4},children:[(0,a.jsxs)("span",{className:"min-w-0",children:[(0,a.jsx)("span",{className:"block truncate text-foreground",children:n.name}),(0,a.jsx)("span",{className:"block truncate text-11 max-lg:text-12 text-muted-foreground",children:n.client})]}),(0,a.jsx)("span",{className:"relative h-5 overflow-hidden",children:(0,a.jsx)(t.AnimatePresence,{mode:"wait",initial:!1,children:(0,a.jsxs)(r.motion.span,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.25},className:"flex h-5 items-center gap-1.5 text-11 max-lg:text-12 text-foreground",children:[(0,a.jsx)("span",{className:(0,s.cn)("size-1.5 rounded-full",x[i])}),i]},i)})}),(0,a.jsx)("span",{className:"tabular-nums text-foreground",children:n.amount})]},0===o?`${n.name}-${e}`:n.name)})]})},"RecordNotesMock",0,function(){let e=(0,u.useCycle)(3,1800)>0;return(0,a.jsxs)("div",{className:(0,s.cn)(m.DARK_SHOT,"w-full max-w-[380px] overflow-hidden"),children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 border-b border-border px-3 py-2.5",children:[(0,a.jsx)(l.ModuleChip,{icon:"client",color:c.STANDARD_MODULE_COLORS.client,className:"size-5"}),(0,a.jsx)("span",{className:"text-13 font-medium text-foreground",children:"Klar Estudio"}),(0,a.jsx)("span",{className:"ml-auto text-11 max-lg:text-12 text-muted-foreground",children:"Cliente"})]}),(0,a.jsx)("div",{className:"flex gap-4 border-b border-border px-3 text-12",children:["Resumen","Actividad","Notas"].map(e=>(0,a.jsx)("span",{className:(0,s.cn)("py-2","Notas"===e?"border-b border-foreground text-foreground":"text-muted-foreground"),children:e},e))}),(0,a.jsxs)("div",{className:"space-y-1 p-2",children:[(0,a.jsx)(t.AnimatePresence,{initial:!1,children:e&&(0,a.jsx)(r.motion.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.4,ease:[.22,1,.36,1]},className:"overflow-hidden",children:(0,a.jsxs)("div",{className:"rounded-md border border-border bg-accent px-2 py-2",children:[(0,a.jsxs)("p",{className:"flex items-center gap-2.5",children:[(0,a.jsx)(d.IconNotebook,{className:"size-4 text-foreground"}),(0,a.jsx)("span",{className:"min-w-0 flex-1 truncate text-12 text-foreground",children:"Kickoff · Klar Estudio"}),(0,a.jsx)("span",{className:"text-11 max-lg:text-12 text-muted-foreground",children:"Lucía · ahora"})]}),(0,a.jsx)("p",{className:"mt-1 pl-[26px] text-11 max-lg:text-12 text-muted-foreground",children:"Lo nombra en «Lo que acordamos»"})]})},"fresh")}),g.map(e=>(0,a.jsxs)("div",{className:"flex items-center gap-2.5 rounded-md px-2 py-2",children:[(0,a.jsx)(d.IconNotebook,{className:"size-4 text-muted-foreground"}),(0,a.jsx)("span",{className:"min-w-0 flex-1 truncate text-12 text-foreground",children:e.title}),(0,a.jsxs)("span",{className:"text-11 max-lg:text-12 text-muted-foreground",children:[e.by," · ",e.when]})]},e.title))]})]})},"ReportMock",0,function(){return(0,a.jsxs)("div",{className:(0,s.cn)(m.DARK_SHOT,"w-full max-w-[380px] p-4"),children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 text-12 text-muted-foreground",children:[(0,a.jsx)(d.IconReport,{className:"size-4"}),"Ventas por mes",(0,a.jsx)("span",{className:"ml-auto",children:"Reportes · Comercial"})]}),(0,a.jsxs)("p",{className:"mt-3 flex items-baseline gap-2",children:[(0,a.jsx)("span",{className:"text-[26px] font-normal leading-none tracking-[-0.03em] text-foreground",children:"$ 41.300"}),(0,a.jsx)("span",{className:"text-12 text-success",children:"+12% vs. octubre"})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)(o.BarChart,{data:h,xDataKey:"name",aspectRatio:"2.8 / 1",barGap:.42,margin:{top:6,right:0,bottom:2,left:0},children:[(0,a.jsx)(i.Grid,{horizontal:!0,numTicksRows:3,hideHorizontalEdgeLines:!0}),(0,a.jsx)(n.Bar,{dataKey:"value",fill:"var(--primary)",lineCap:3})]}),(0,a.jsx)("div",{className:"mt-2 grid grid-cols-5 text-center text-11 max-lg:text-12 text-muted-foreground",children:h.map(e=>(0,a.jsx)("span",{children:e.name},e.name))})]})]})}])},4069,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(246594);e.i(546607);var s=e.i(732919),n=e.i(314604),o=e.i(903831),i=e.i(384363),l=e.i(467739),d=e.i(959749),c=e.i(154559),u=e.i(279453),m=e.i(600037),x=e.i(247301),p=e.i(865842),f=e.i(271874),h=e.i(975157),g=e.i(181398),b=e.i(672509),v=e.i(101060);function j({children:e,icon:t}){return(0,a.jsxs)("span",{className:"mx-0.5 inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-px align-baseline text-[0.92em] text-foreground",children:[t,e]})}function y({show:e,children:t}){return(0,a.jsx)(m.AnimatePresence,{initial:!1,children:e&&(0,a.jsx)(x.motion.div,{initial:{opacity:0,y:8,filter:"blur(3px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},exit:{opacity:0,transition:{duration:.2}},transition:{duration:.45,ease:[.22,1,.36,1]},children:t})})}function N(){let{ref:e,shown:r}=function(){let e=t.useRef(null),a=(0,p.useInView)(e,{margin:"-80px"}),r=(0,f.useReducedMotion)(),[s,n]=t.useState(0);return t.useEffect(()=>{if(!a||r)return;let e=window.setInterval(()=>n(e=>e>=11?0:e+1),1400);return()=>window.clearInterval(e)},[a,r]),{ref:e,shown:r?6:Math.max(1,Math.min(s,6))}}();return(0,a.jsxs)("div",{ref:e,className:"relative flex h-full flex-col text-15 leading-relaxed text-foreground",children:[(0,a.jsxs)("p",{className:"flex items-center justify-between text-13 text-muted-foreground",children:[(0,a.jsx)("span",{children:"Clientes / Kickoff"}),(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{className:"hidden text-12 sm:inline",children:"Lucía está editando"}),(0,a.jsx)("span",{className:"flex -space-x-1.5",children:[["L","#6366f1"],["M","#f97316"]].map(([e,t])=>(0,a.jsx)("span",{className:"flex size-6 items-center justify-center rounded-full border-2 border-background text-11 max-lg:text-12 font-medium text-white",style:{background:t},children:e},e))})]})]}),(0,a.jsx)("h2",{className:"mt-8 text-[26px] font-medium leading-tight tracking-[-0.03em]",children:"Kickoff · Klar Estudio"}),(0,a.jsxs)("p",{className:"mt-2.5 flex flex-wrap items-center gap-1.5 text-13 text-muted-foreground",children:[(0,a.jsx)(j,{icon:(0,a.jsx)(g.ModuleChip,{icon:"client",color:v.STANDARD_MODULE_COLORS.client,className:"size-3.5"}),children:"Klar Estudio"}),(0,a.jsx)(j,{icon:(0,a.jsx)(o.IconCalendar,{className:"size-3.5"}),children:"Jue 18 · 10:30"})]}),(0,a.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,a.jsx)(y,{show:r>=1,children:(0,a.jsx)("p",{className:"text-17 font-medium tracking-[-0.015em]",children:"Lo que acordamos"})}),(0,a.jsx)(y,{show:r>=2,children:(0,a.jsxs)("ul",{className:"list-disc space-y-1 pl-5 text-14 marker:text-border",children:[(0,a.jsx)("li",{children:"Rediseño de marca en tres etapas, entrega el 12 de diciembre."}),(0,a.jsx)("li",{children:"$ 4.800, con un anticipo del 40%."})]})}),(0,a.jsx)(y,{show:r>=3,children:(0,a.jsx)("div",{className:"space-y-1.5 text-14",children:[{done:!0,text:"Mandar la propuesta firmada",who:"Mariana",when:"Hoy"},{done:!1,text:"Pedir el logo en vectores",who:"Lucía",when:"Mañana"}].map(e=>(0,a.jsxs)("p",{className:"flex flex-wrap items-center gap-2",children:[(0,a.jsx)("span",{className:(0,h.cn)("flex size-4 shrink-0 items-center justify-center rounded border text-10 max-lg:text-12",e.done?"border-foreground bg-foreground text-background":"border-border bg-background"),children:e.done?"✓":""}),(0,a.jsx)("span",{className:e.done?"text-muted-foreground line-through":"",children:e.text}),(0,a.jsxs)(j,{children:["@",e.who]}),(0,a.jsx)(j,{children:e.when})]},e.text))})}),(0,a.jsx)(y,{show:r>=4,children:(0,a.jsxs)("div",{className:"flex gap-3 rounded-lg border border-border bg-muted px-3.5 py-2.5 text-13",children:[(0,a.jsx)("span",{"aria-hidden":!0,children:"⚠"}),(0,a.jsx)("span",{children:"Si el logo no llega el viernes, la primera entrega se corre una semana."})]})}),(0,a.jsx)(y,{show:r>=5,children:(0,a.jsxs)("div",{className:"overflow-hidden rounded-lg border border-border bg-background text-12",children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 border-b border-border bg-muted px-3 py-1.5 text-11 max-lg:text-12 text-muted-foreground",children:[(0,a.jsx)(g.ModuleChip,{icon:"pipeline",color:v.STANDARD_MODULE_COLORS.pipeline,className:"size-4"}),"Prospectos · Klar Estudio",(0,a.jsx)("span",{className:"ml-auto",children:"Vista del equipo"})]}),[["Rediseño de marca","Propuesta","$ 4.800"],["Sitio web","Calificado","$ 6.200"]].map(([e,t,r])=>(0,a.jsxs)("p",{className:"grid grid-cols-[1.4fr_1fr_auto] gap-3 border-b border-border px-3 py-1.5 last:border-b-0",children:[(0,a.jsx)("span",{children:e}),(0,a.jsx)("span",{className:"text-muted-foreground",children:t}),(0,a.jsx)("span",{className:"tabular-nums",children:r})]},e))]})})]}),r>=2&&r<6&&(0,a.jsxs)(x.motion.span,{"aria-hidden":!0,className:"pointer-events-none absolute flex items-start max-sm:hidden",initial:!1,animate:{left:`${24+9*r}%`,top:150+52*r},transition:{duration:.9,ease:[.22,1,.36,1]},children:[(0,a.jsx)("span",{className:"h-5 w-0.5 bg-[#6366f1]"}),(0,a.jsx)("span",{className:"-mt-4 rounded-sm bg-[#6366f1] px-1 text-10 max-lg:text-12 font-medium text-white",children:"Lucía"})]}),(0,a.jsx)("div",{className:"mt-auto pt-6",children:(0,a.jsx)(y,{show:r>=6,children:(0,a.jsxs)("div",{className:"flex items-center gap-3 rounded-xl border border-border bg-background p-3 shadow-[0_16px_32px_-20px_rgba(15,23,42,0.45)]",children:[(0,a.jsx)(b.KorvaCharacter,{size:26,eyes:"roam",tone:"white"}),(0,a.jsx)("p",{className:"min-w-0 flex-1 text-13 leading-snug text-foreground",children:"Encontré 2 tareas en esta nota. ¿Las creo?"}),(0,a.jsx)("span",{className:"inline-flex h-7 shrink-0 items-center rounded-md bg-foreground px-2.5 text-12 font-medium text-background",children:"Revisar"})]})})})]})}let w=[{title:"Kickoff · Klar Estudio",meta:"Lucía está editando"},{title:"Semanal del equipo",meta:"Ayer"},{title:"Ideas de producto",meta:"Hace 3 días"},{title:"Onboarding de clientes",meta:"La semana pasada"},{title:"Proveedores",meta:"Hace 2 semanas"}],_=[["#escribir","Escribir","#f97316"],["#crm","Tu CRM","#3b82f6"],["#agente","Korvita","#a855f7"],["#equipo","En equipo","#22c55e"]],k="bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_31px,color-mix(in_oklab,var(--border)_70%,transparent)_31px,color-mix(in_oklab,var(--border)_70%,transparent)_32px)]";function E(){return(0,a.jsx)("div",{"aria-hidden":!0,className:"absolute bottom-8 left-1/2 top-8 z-20 hidden -translate-x-1/2 flex-col justify-between lg:flex",children:Array.from({length:14},(e,t)=>(0,a.jsx)("span",{className:"h-3.5 w-12 rounded-full border border-[#8a8f98] bg-[linear-gradient(180deg,#ffffff_0%,#d9dce1_30%,#8d929b_55%,#e8eaee_75%,#a6abb3_100%)] shadow-[0_2px_4px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.9)]"},t))})}e.s(["NotebooksHero",0,function(){let e=t.useRef(null);return(0,n.useGSAP)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return void s.gsap.set("[data-hero-in]",{autoAlpha:1});let e=s.gsap.timeline({defaults:{ease:"power3.out"}});e.fromTo("[data-page='left']",{autoAlpha:0,x:40,rotateY:-14},{autoAlpha:1,x:0,rotateY:0,duration:.9}),e.fromTo("[data-page='right']",{autoAlpha:0,x:-40,rotateY:14},{autoAlpha:1,x:0,rotateY:0,duration:.9},.08),e.fromTo("[data-hero-in]",{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.6,stagger:.07},.35),e.fromTo("[data-tab]",{autoAlpha:0,x:-16},{autoAlpha:1,x:0,duration:.45,stagger:.06},.7)},{scope:e}),(0,a.jsxs)("section",{ref:e,className:"relative pt-[72px]",children:[(0,a.jsxs)("div",{className:"mx-auto w-full max-w-(--frame) px-6 pb-14 pt-20 sm:px-10 sm:pb-16 sm:pt-28",children:[(0,a.jsx)("div",{"data-hero-in":!0,className:"sky-reveal",children:(0,a.jsx)(i.SectionBadge,{icon:o.IconNotebook,children:"Cuadernos"})}),(0,a.jsx)("h1",{"data-hero-in":!0,className:"sky-reveal mt-7 max-w-[900px] text-[38px] font-normal leading-[1.02] tracking-[-0.045em] text-foreground sm:text-[52px] lg:text-[60px]",children:"Las notas del equipo, con el CRM adentro."}),(0,a.jsx)("p",{"data-hero-in":!0,className:"sky-reveal mt-6 max-w-[620px] text-16 leading-relaxed text-muted-foreground sm:text-17",children:"Lo que se habla queda escrito, y lo que se escribe se hace: escriben a la vez, nombran clientes y reuniones, meten la tabla viva de un módulo y Korvita saca las tareas."}),(0,a.jsxs)("div",{"data-hero-in":!0,className:"sky-reveal mt-9 flex flex-wrap items-center gap-2.5",children:[(0,a.jsx)(c.PrimaryLink,{href:"/login",children:"Crear mi primer cuaderno"}),(0,a.jsx)(c.OutlineLink,{href:"/academia/cuadernos",children:"Ver el curso"})]})]}),(0,a.jsx)("div",{className:"relative border-y border-border",children:(0,a.jsxs)(l.FrameBand,{className:"bg-muted",children:[(0,a.jsx)(d.ShaderImage,{name:"metal-claro"}),(0,a.jsx)(u.MetalBand,{}),(0,a.jsx)("div",{className:"relative px-5 py-12 [perspective:1600px] sm:px-10 sm:py-16 lg:px-16 lg:py-16",children:(0,a.jsxs)("div",{className:"relative mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-2 lg:gap-0",children:[(0,a.jsxs)("div",{"data-page":"left",className:`sky-reveal relative flex flex-col max-lg:hidden rounded-2xl bg-background p-8 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.55),0_2px_6px_rgba(15,23,42,0.06)] sm:p-12 lg:h-[660px] lg:rounded-r-none lg:pr-16 ${k}`,children:[(0,a.jsxs)("p",{"data-hero-in":!0,className:"sky-reveal flex items-center gap-2 text-13 text-muted-foreground",children:[(0,a.jsx)(o.IconNotebook,{className:"size-4"}),"Cuadernos",(0,a.jsx)("span",{children:"/"}),(0,a.jsx)("span",{className:"text-foreground",children:"Para tu equipo"})]}),(0,a.jsx)("p",{"data-hero-in":!0,className:"sky-reveal mt-10 text-[28px] font-medium leading-none tracking-[-0.03em] text-foreground sm:text-[34px]",children:"Para tu equipo"}),(0,a.jsx)("ul",{"data-hero-in":!0,className:"sky-reveal mt-8 space-y-1",children:w.map((e,t)=>(0,a.jsxs)("li",{className:0===t?"flex items-center justify-between gap-4 rounded-lg bg-muted px-3 py-2.5":"flex items-center justify-between gap-4 px-3 py-2.5",children:[(0,a.jsxs)("span",{className:"flex min-w-0 items-center gap-2.5 text-15 text-foreground",children:[(0,a.jsx)(o.IconNotebook,{className:"size-4 shrink-0 text-muted-foreground"}),(0,a.jsx)("span",{className:"truncate",children:e.title})]}),(0,a.jsx)("span",{className:"shrink-0 text-13 text-muted-foreground",children:e.meta})]},e.title))})]}),(0,a.jsx)("div",{"data-page":"right",className:`sky-reveal relative overflow-hidden rounded-2xl bg-background p-5 shadow-[0_40px_90px_-40px_rgba(15,23,42,0.55),0_2px_6px_rgba(15,23,42,0.06)] max-lg:min-h-[600px] sm:p-12 lg:h-[660px] lg:rounded-l-none lg:pl-16 ${k}`,children:(0,a.jsx)(N,{})}),(0,a.jsx)(E,{}),(0,a.jsx)("nav",{"aria-label":"En esta página",className:"absolute -right-9 top-16 z-10 hidden flex-col gap-2 lg:flex",children:_.map(([e,t,s])=>(0,a.jsx)(r.default,{href:e,"data-tab":!0,className:"sky-reveal group flex h-28 w-9 items-center justify-center rounded-r-lg border border-l-0 border-border bg-background shadow-[6px_6px_16px_-8px_rgba(15,23,42,0.35)] transition-transform hover:translate-x-1",children:(0,a.jsxs)("span",{className:"flex -rotate-180 items-center gap-1.5 whitespace-nowrap text-12 text-foreground [writing-mode:vertical-rl]",children:[(0,a.jsx)("span",{className:"size-1.5 rounded-full",style:{background:s}}),t]})},e))})]})})]})})]})}],4069)},312724,e=>{"use strict";e.s(["DARK_SHOT",0,"dark rounded-xl border border-white/10 bg-background text-foreground shadow-[0_40px_80px_-24px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.03)]","SHOT",0,"rounded-xl border border-border bg-background text-foreground shadow-[0_28px_56px_-30px_rgba(15,23,42,0.45),0_1px_2px_rgba(15,23,42,0.05)]"])},757670,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(247301),s=e.i(271874),n=e.i(975157),o=e.i(903831),i=e.i(611253),l=e.i(68400),d=e.i(151427),c=e.i(312724);let u=[{who:"Mariana",color:"#f97316",text:"Entrega el 12 de diciembre, en tres etapas."},{who:"Lucía",color:"#6366f1",text:"Pedir el logo en vectores antes del viernes."}];function m({who:e,color:t}){return(0,a.jsx)("span",{"aria-hidden":!0,className:"relative inline-block h-[1.1em] w-0.5 translate-y-[3px] align-baseline",style:{background:t},children:(0,a.jsx)("span",{className:"absolute -top-4 left-0 whitespace-nowrap rounded-sm px-1 text-10 max-lg:hidden font-medium leading-4 text-white",style:{background:t},children:e})})}let x=[{name:"Clientes",access:"Todo el equipo",notes:48,locked:!1},{name:"Dirección",access:"3 personas",notes:12,locked:!0},{name:"Procesos",access:"Todo el equipo",notes:21,locked:!1}];e.s(["AccessMock",0,function(){let e=(0,d.useCycle)(x.length,1600);return(0,a.jsxs)("div",{className:(0,n.cn)(c.SHOT,"w-full max-w-[360px] p-1.5"),children:[(0,a.jsx)("p",{className:"px-2 pb-1 pt-1 text-11 max-lg:text-12 text-muted-foreground",children:"Cuadernos"}),x.map((t,r)=>(0,a.jsxs)("div",{className:(0,n.cn)("flex h-11 items-center gap-2.5 rounded-md px-2 transition-colors duration-300",r===e?"bg-accent":"bg-transparent"),children:[(0,a.jsx)(o.IconNotebook,{className:"size-4 text-muted-foreground"}),(0,a.jsxs)("span",{className:"min-w-0 flex-1",children:[(0,a.jsx)("span",{className:"block text-13 text-foreground",children:t.name}),(0,a.jsxs)("span",{className:"block text-11 max-lg:text-12 text-muted-foreground",children:[t.notes," notas"]})]}),(0,a.jsxs)("span",{className:"flex items-center gap-1 text-11 max-lg:text-12 text-muted-foreground",children:[t.locked&&(0,a.jsx)(i.Lock,{className:"size-3.5"}),t.access]})]},t.name))]})},"McpNotesMock",0,function(){let e=1===(0,d.useCycle)(2,2200);return(0,a.jsxs)("div",{className:"w-full max-w-[360px] space-y-2",children:[(0,a.jsxs)("div",{className:(0,n.cn)(c.SHOT,"flex items-center gap-2 px-3 py-2.5 text-12"),children:[(0,a.jsx)(l.Terminal,{className:"size-4 text-muted-foreground"}),(0,a.jsx)("span",{className:"text-foreground",children:"«Pasá a una nota lo que hablamos con Klar»"})]}),(0,a.jsxs)(r.motion.div,{className:(0,n.cn)(c.SHOT,"ml-8 px-3 py-2.5 text-12"),initial:!1,animate:{opacity:e?1:.3,y:6*!e},transition:{duration:.4},children:[(0,a.jsxs)("p",{className:"flex items-center gap-2 text-foreground",children:[(0,a.jsx)(o.IconNotebook,{className:"size-4 text-muted-foreground"}),"Nota creada en Clientes"]}),(0,a.jsx)("p",{className:"mt-0.5 pl-6 text-11 max-lg:text-12 text-muted-foreground",children:"Kickoff · Klar Estudio"})]})]})},"PresenceMock",0,function(){let e=function(){let e=(0,s.useReducedMotion)(),[a,r]=t.useState(0);return(t.useEffect(()=>{if(e)return;let a=window.setInterval(()=>r(e=>(e+1)%90),70);return()=>window.clearInterval(a)},[e]),e)?u.map(e=>e.text.length):[Math.min(Math.floor(.9*a),u[0].text.length),Math.min(Math.max(0,Math.floor((a-8)*.75)),u[1].text.length)]}();return(0,a.jsxs)("div",{className:(0,n.cn)(c.SHOT,"relative w-full max-w-[380px] p-4 text-13"),children:[(0,a.jsxs)("p",{className:"flex items-center justify-between text-11 max-lg:text-12 text-muted-foreground",children:["Kickoff · Klar Estudio",(0,a.jsxs)("span",{className:"flex items-center gap-2",children:[(0,a.jsx)("span",{children:"Editando ahora"}),(0,a.jsx)("span",{className:"flex -space-x-1.5",children:u.map(e=>(0,a.jsx)("span",{className:"flex size-5 items-center justify-center rounded-full border-2 border-background text-10 max-lg:text-12 font-medium text-white",style:{background:e.color},children:e.who[0]},e.who))})]})]}),(0,a.jsx)("p",{className:"mt-4 text-14 font-medium text-foreground",children:"Lo que acordamos"}),(0,a.jsxs)("div",{className:"mt-2 space-y-4 text-foreground",children:[(0,a.jsx)("p",{className:"text-muted-foreground",children:"Rediseño de marca para Klar Estudio."}),u.map((t,r)=>(0,a.jsxs)("p",{className:"min-h-[1.4em]",children:[t.text.slice(0,e[r]),(0,a.jsx)(m,{who:t.who,color:t.color})]},t.who))]})]})}])},283796,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(600037),s=e.i(247301),n=e.i(975157),o=e.i(68400),i=e.i(611253),l=e.i(979074),d=e.i(151427),c=e.i(312724);let u=[{title:"Título grande",hint:"Para empezar una sección",icon:l.TextSize},{title:"Lista para tildar",hint:"Pendientes que se tachan",icon:l.TaskList},{title:"Tabla",hint:"Filas y columnas, con encabezado",icon:l.Table},{title:"Aviso",hint:"Lo que no se puede pasar por alto",icon:i.InfoCircle},{title:"Desplegable",hint:"Un título que abre y cierra",icon:i.NavArrowDown},{title:"Código",hint:"Letra de ancho fijo",icon:l.CodeBrackets}],m=[{label:"Hoy",group:"Fechas"},{label:"Mañana",group:"Fechas"},{label:"Recordarme",group:"Fechas"},{label:"Mariana Ruiz",group:"Personas"},{label:"Lucía Paz",group:"Personas"}],x=["En blanco","Kickoff con un cliente","Reunión semanal","Brief de proyecto"];function p({active:e}){return(0,a.jsxs)("div",{className:"bg-muted p-1.5 sm:border-r sm:border-border",children:[(0,a.jsx)("p",{className:"px-2 pb-1 pt-1 text-11 max-lg:text-12 text-muted-foreground",children:"Plantillas"}),x.map((t,r)=>(0,a.jsx)("p",{className:(0,n.cn)("rounded-md px-2 py-1.5 text-12 transition-colors duration-300",r===e?"bg-background text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.06)]":"text-muted-foreground"),children:t},t))]})}function f({active:e}){return(0,a.jsx)("div",{className:"p-3 text-12",children:(0,a.jsxs)(s.motion.div,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},transition:{duration:.25},children:[(0,a.jsx)("p",{className:"text-14 font-medium text-foreground",children:x[e]}),(0,a.jsx)("p",{className:"mt-2 flex flex-wrap gap-1",children:["Klar Estudio","Jue 18 · 10:30","Mariana Ruiz"].map(e=>(0,a.jsx)("span",{className:"rounded bg-[color-mix(in_oklab,var(--signal)_14%,transparent)] px-1.5 py-0.5 text-11 max-lg:text-12 text-foreground",children:e},e))}),(0,a.jsx)("div",{className:"mt-3 space-y-1.5",children:["Objetivos","Lo que acordamos","Próximos pasos"].map(e=>(0,a.jsxs)("p",{className:"flex items-center gap-1.5 text-muted-foreground",children:[(0,a.jsx)(i.CheckCircle,{className:"size-3.5"}),e]},e))})]},e)})}e.s(["MentionMock",0,function(){let e=(0,d.useCycle)(3,1600);return(0,a.jsxs)("div",{className:"w-full max-w-[320px]",children:[(0,a.jsx)("div",{className:(0,n.cn)(c.SHOT,"px-4 py-3 text-14"),children:(0,a.jsxs)("p",{className:"flex flex-wrap items-center gap-1.5 text-foreground",children:[(0,a.jsx)("span",{className:"flex size-4 items-center justify-center rounded border border-border"}),"Mandar la propuesta",(0,a.jsx)(r.AnimatePresence,{mode:"wait",initial:!1,children:e<2?(0,a.jsx)(s.motion.span,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"text-muted-foreground",children:"@"},"at"):(0,a.jsxs)(s.motion.span,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},className:"inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-px text-13",children:[(0,a.jsx)(o.Bell,{className:"size-3.5"}),"Mañana 9:00"]},"chip")})]})}),(0,a.jsx)(s.motion.div,{className:(0,n.cn)(c.SHOT,"ml-8 mt-2 p-1.5"),animate:{opacity:+(e<2),y:e<2?0:-6},transition:{duration:.3},children:m.map((r,s)=>(0,a.jsxs)(t.Fragment,{children:[(0===s||m[s-1].group!==r.group)&&(0,a.jsx)("p",{className:"px-2 pb-0.5 pt-1.5 text-11 max-lg:text-12 text-muted-foreground",children:r.group}),(0,a.jsx)("div",{className:(0,n.cn)("flex h-8 items-center rounded-md px-2 text-13 text-foreground transition-colors duration-300",1===e&&"Recordarme"===r.label?"bg-accent":"bg-transparent"),children:r.label})]},r.label))})]})},"SlashMock",0,function(){let e=(0,d.useCycle)(u.length,1100);return(0,a.jsxs)("div",{className:"w-full max-w-[300px]",children:[(0,a.jsxs)("p",{className:"mb-2 px-1 text-15 text-foreground",children:["/",(0,a.jsx)("span",{className:"ml-px inline-block h-4 w-px animate-pulse bg-foreground align-middle"})]}),(0,a.jsxs)("div",{className:(0,n.cn)(c.SHOT,"p-1.5"),children:[(0,a.jsx)("p",{className:"px-2 pb-1 pt-1 text-11 max-lg:text-12 text-muted-foreground",children:"Bloques"}),u.map((t,r)=>{let s=t.icon;return(0,a.jsxs)("div",{className:(0,n.cn)("flex h-10 items-center gap-2.5 rounded-md px-2 transition-colors duration-300",r===e?"bg-accent":"bg-transparent"),children:[(0,a.jsx)("span",{className:"flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground",children:(0,a.jsx)(s,{className:"size-4"})}),(0,a.jsxs)("span",{className:"min-w-0",children:[(0,a.jsx)("span",{className:"block text-13 text-foreground",children:t.title}),(0,a.jsx)("span",{className:"block truncate text-11 max-lg:text-12 text-muted-foreground",children:t.hint})]})]},t.title)})]})]})},"TemplateMock",0,function(){let e=(0,d.useCycle)(6,1e3),[r,s]=t.useState(null),o=Math.floor(e/2)+1,i=r??(e%2==0?"list":"content");return(0,a.jsxs)("div",{className:(0,n.cn)(c.SHOT,"w-full max-w-[400px] overflow-hidden"),children:[(0,a.jsxs)("div",{className:"sm:hidden",children:[(0,a.jsx)("div",{role:"tablist",className:"grid grid-cols-2 border-b border-border",children:[["list","Plantillas"],["content","Contenido"]].map(([e,t])=>(0,a.jsx)("button",{type:"button",role:"tab","aria-selected":i===e,onClick:()=>s(e),className:(0,n.cn)("h-10 text-13 transition-colors",i===e?"border-b border-foreground text-foreground":"text-muted-foreground"),children:t},e))}),"list"===i?(0,a.jsx)(p,{active:o}):(0,a.jsx)(f,{active:o})]}),(0,a.jsxs)("div",{className:"hidden grid-cols-[136px_1fr] sm:grid",children:[(0,a.jsx)(p,{active:o}),(0,a.jsx)(f,{active:o})]})]})}])},279453,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(54375),s=e.i(975157),n=e.i(236752),o=e.i(569727);let i=(0,r.default)(()=>e.A(890914),{loadableGenerated:{modules:[915662]},ssr:!1});e.s(["MetalBand",0,function({className:e}){let r=(0,o.useWebGPU)(),[l,d]=t.useState(!1),[c,u]=t.useState(!1),m=r&&!c;return(0,a.jsxs)(a.Fragment,{children:[!(m&&l)&&(0,a.jsx)(n.ShaderCanvas,{variant:"metal",fringe:1,className:e}),m&&(0,a.jsx)(i,{className:(0,s.cn)("pointer-events-none absolute inset-0 size-full transition-opacity duration-700",l?"opacity-100":"opacity-0",e),onReady:()=>d(!0),onUnavailable:()=>u(!0)})]})}])},236752,e=>{"use strict";var a=e.i(9420),t=e.i(884513),r=e.i(975157);let s=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() { v_uv = a_pos * 0.5 + 0.5; gl_Position = vec4(a_pos, 0.0, 1.0); }`,n=`#version 300 es
precision highp float;

uniform vec2 u_res;
uniform float u_time;
uniform float u_seed;
uniform float u_dark;
uniform float u_fringe;
uniform vec2 u_mouse;
in vec2 v_uv;
out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p;
    a *= 0.5;
  }
  return s;
}

vec2 pointer() { return (u_mouse - 0.5 * u_res) / u_res.y; }

vec3 finish(vec3 col, vec2 frag) {
  vec2 uv = frag / u_res;
  col *= mix(1.0, 0.82, smoothstep(0.55, 1.0, length(uv - 0.5) * 1.2));
  col += (hash(frag + floor(u_time * 24.0)) - 0.5) * 0.02;
  return clamp(col, 0.0, 1.0);
}
`,o=`${n}
// Ruido de valor que se repite cada \`period\` celdas a lo ancho.
float pnoise(vec2 p, float period) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x0 = mod(i.x, period);
  float x1 = mod(i.x + 1.0, period);
  return mix(mix(hash(vec2(x0, i.y)), hash(vec2(x1, i.y)), u.x),
             mix(hash(vec2(x0, i.y + 1.0)), hash(vec2(x1, i.y + 1.0)), u.x), u.y);
}

void main() {
  float t = u_time;
  // El atlas cubre 48 l\xe1minas en ciclo (se lee con REPEAT): todo lo que var\xeda
  // a lo ancho usa m\xfaltiplos de 2π/48, as\xed el ciclo no deja un salto.
  float s = v_uv.x * 48.0;
  float along = (v_uv.y - 0.5) * 3.0;
  float k = 6.2831853 / 48.0;
  // La luz que hay detr\xe1s: una ola que cruza todas las l\xe1minas y viaja de
  // derecha a izquierda (la fase crece con el tiempo y con s). Sus crestas
  // cortan las l\xe1minas en diagonal, as\xed el degrad\xe9 corre a lo largo de cada una.
  // Una segunda ola y un ruido suave la deforman sin romperla. El centro est\xe1
  // corrido hacia la bandera negra: cerca de un tercio de la luz es negro.
  float bend = 0.5 * sin(along * 1.1 - s * k * 2.0 + t * 0.45 + u_seed * 3.0);
  float look = 0.6 + 0.85 * sin(s * k * 3.0 + along * 2.6 + t * 1.05 + bend + u_seed * 5.0);
  look += 0.35 * sin(s * k * 6.0 - along * 1.6 + t * 1.5 + 1.7);
  float cloud = pnoise(vec2(s / 4.0 + t * 0.5, along * 1.6 + u_seed * 3.0), 12.0);
  look += (cloud - 0.5) * 1.4;
  // Humo: un ruido m\xe1s fino que arrastra la ola y le quita lo geom\xe9trico.
  float smoke = pnoise(vec2(s / 2.0 + t * 0.9, along * 2.4 - t * 0.3 + u_seed), 24.0);
  look += (smoke - 0.5) * 0.5;
  float soft = pnoise(vec2(s / 4.0 + t * 0.4 + 5.0, along * 1.1 + 2.0), 12.0);
  float glow = 0.5 + 0.5 * sin(s * k * 5.0 + along * 2.0 + t * 1.1);
  outColor = vec4(look * 0.125 + 0.5, soft, glow, cloud);
}`,i=`${n}
uniform float u_hover;

float bell(float x) { return exp(-x * x); }

// ─── Capa 1: metal l\xedquido (el \xabLiquidMetal\xbb de Shaders.com) ───────────────
// Una superficie de cromo fundido: un campo de alturas hecho con ruido
// deformado por ruido (los pliegues que fluyen), su normal, y el reflejo de un
// estudio en esa normal. Donde la superficie est\xe1 casi plana refleja la luz
// pareja (la plata); donde se pliega, el reflejo barre por el estudio y pasa
// por el negro de las banderas y el blanco del softbox: ah\xed est\xe1n los trazos.
const vec3 LIGHT = vec3(0.933, 0.941, 0.965); // #eef0f6, el tono claro del cromo
const vec3 DARK = vec3(0.078, 0.078, 0.078);  // #141414, adonde cae en sombra
const vec2 FLOW = vec2(0.8746, -0.4848);      // los pliegues corren bajando a la derecha

// Ruido de dos octavas: los pliegues grandes y lisos. Con m\xe1s octavas la
// normal levanta cada arruga chica y el cromo se ve arrugado, no fundido.
float smoothNoise(vec2 p) {
  return 0.66 * vnoise(p) + 0.34 * vnoise(mat2(1.6, 1.2, -1.2, 1.6) * p);
}

float liquidHeight(vec2 q, float t) {
  vec2 a = vec2(dot(q, FLOW) * 0.7, dot(q, vec2(-FLOW.y, FLOW.x)) * 1.6) + u_seed * 3.0;
  // Swirl: el flujo se enrosca (domain warping).
  a += 1.5 * vec2(smoothNoise(a * 0.55 + vec2(0.0, t * 0.09)), smoothNoise(a * 0.55 + vec2(5.2, -t * 0.08))) - 0.75;
  return smoothNoise(a + vec2(t * 0.05, -t * 0.12));
}

// El estudio que refleja el cromo, seg\xfan hacia d\xf3nde mira la normal: casi todo
// es la luz pareja; hacia un lado, el softbox (m\xe1s blanco que blanco), y hacia
// el otro, una bandera negra.
float studio(float e) {
  float v = 0.945; // la plata de la referencia: #e4e4e4
  v += 0.16 * bell((e - 0.5) / 0.16);   // el softbox
  v -= 0.95 * bell((e + 0.55) / 0.32);     // la bandera negra
  v -= 0.4 * bell((e - 1.05) / 0.3);   // el corte del otro lado
  return v;
}

vec3 liquidMetal(vec2 q, float t, float extraDispersion) {
  float h = liquidHeight(q, t);
  float px = 0.004;
  float gx = (liquidHeight(q + vec2(px, 0.0), t) - h) / px;
  float gy = (liquidHeight(q + vec2(0.0, px), t) - h) / px;
  // Turbulencia: cu\xe1nto se pliega la superficie.
  vec3 nrm = normalize(vec3(-gx * 0.2, -gy * 0.2, 1.0));
  // El estudio gira apenas con el tiempo: el reflejo se desliza solo.
  float env = t * 0.04;
  vec2 envDir = vec2(cos(env + 0.6), sin(env + 0.6));
  float e = dot(nrm.xy, envDir) * 2.6;
  // Dispersi\xf3n: cada canal lee el estudio un poco corrido donde el reflejo cambia.
  float disp = (0.25 * 0.07 + extraDispersion) * length(nrm.xy) * 2.0 * u_fringe;
  vec3 v = vec3(studio(e + disp), studio(e), studio(e - disp));
  vec3 col = mix(DARK, LIGHT, clamp(v, 0.0, 1.0)) + LIGHT * max(v - 1.0, 0.0);
  // Los brillos especulares, con la luz principal a 265\xb0.
  vec3 key = normalize(vec3(cos(radians(265.0)), sin(radians(265.0)), 1.4));
  col += vec3(1.0) * pow(max(dot(nrm, key), 0.0), 60.0) * 0.25;
  return col;
}

// ─── Capa 2: vidrio acanalado (el \xabFlutedGlass\xbb, forma \xabwaves\xbb) ─────────────
// 18 varillas cil\xedndricas que se mecen a lo largo. Cada una refracta lo que
// tiene atr\xe1s: casi nada en el centro y mucho cerca de la uni\xf3n, donde la
// imagen se comprime en astillas; la aberraci\xf3n separa los canales en las
// uniones y cada varilla tiene su brillo especular.
void main() {
  vec2 frag = gl_FragCoord.xy;
  float scale = min(u_res.y, u_res.x * 0.62);
  vec2 p = (frag - 0.5 * u_res) / scale;
  vec2 d = vec2(0.8571673, -0.5150381); // 31\xb0 respecto de la vertical
  vec2 n = vec2(-d.y, d.x);
  float t = u_time;
  float along = dot(p, n);
  float across = dot(p, d);

  // Waves: cada varilla se mece a lo ancho mientras corre.
  float sway = 0.32 * sin(along * 1.6 + across * 0.7 + t * 0.1 + u_seed * 4.0)
             + 0.3 * (fbm(vec2(along * 0.8, across * 0.7) + vec2(t * 0.03, u_seed)) - 0.5);
  float s = across * 12.4 + sway + u_seed * 7.0; // 18 varillas a lo ancho del hero
  float id = floor(s);
  float f = s - id;
  float x = f * 2.0 - 1.0;

  // El puntero acent\xfaa la refracci\xf3n de las varillas que tiene cerca.
  float lens = 0.0;
  if (u_hover > 0.001) {
    vec2 hit = p - (u_mouse - 0.5 * u_res) / scale;
    lens = bell(dot(hit, d) / 0.22) * bell(dot(hit, n) / 0.38) * u_hover;
  }

  // Refracci\xf3n del cilindro (softness 0.5): crece sin l\xedmite hacia la uni\xf3n.
  float g = x / sqrt(1.0 - 0.6 * x * x);
  float refraction = 0.11 * (1.0 + lens);
  // La refracci\xf3n corre la imagen a lo ancho (comprime) y a lo largo de la
  // varilla: eso \xfaltimo es lo que rompe una banda que cruza en escalones, y
  // cada varilla adem\xe1s la corre un poco distinto.
  float offset = (hash(vec2(id, u_seed + 2.0)) - 0.5) * 0.08;
  vec2 q = p - d * g * refraction * 0.5 + n * (g * refraction * 0.75 + offset);
  // Aberraci\xf3n en las uniones: m\xe1s corrimiento entre canales donde |x| es grande.
  vec3 col = liquidMetal(q, t, 0.2 * 0.12 * x * x);

  // La uni\xf3n entre varillas, n\xedtida y filtrada en p\xedxeles de pantalla: un hilo
  // de sombra donde el vidrio cambia de varilla.
  float px = max(fwidth(s), 1e-4);
  float seam = bell(min(f, 1.0 - f) / (px * 1.3));
  col *= 1.0 - 0.1 * seam;
  // Los filos de color: celeste al salir de la varilla, \xe1mbar al entrar en la
  // siguiente; se afinan a lo largo y pesan donde atr\xe1s est\xe1 oscuro.
  float lum = dot(col, vec3(0.3333));
  float taper = smoothstep(0.25, 0.75, vnoise(vec2(along * 3.2 - t * 0.1, id * 1.7)));
  col = mix(col, vec3(0.3, 0.46, 0.88), bell((1.0 - f) / (px * 1.4)) * u_fringe * (0.25 + 0.75 * taper) * (0.15 + 0.75 * (1.0 - lum)));
  col = mix(col, vec3(0.88, 0.62, 0.42), bell(f / (px * 2.0)) * u_fringe * taper * (0.08 + 0.65 * (1.0 - lum)));

  // El brillo especular de cada varilla (highlight 0.2, luz a 30\xb0).
  vec3 nf = normalize(vec3(x * 0.9, 0.0, sqrt(max(1.0 - 0.81 * x * x, 0.0))));
  vec3 l = normalize(vec3(sin(radians(30.0)), 0.0, cos(radians(30.0))));
  col += 0.07 * pow(max(dot(nf, l), 0.0), 10.0) * LIGHT;

  if (u_dark > 0.5) col *= 0.24;
  // Grano de pel\xedcula fino, m\xe1s en lo oscuro.
  float grain = (hash(frag + fract(t) * 91.0) - 0.5) * 0.03;
  col += grain * (1.0 - 0.6 * dot(col, vec3(0.3333)));
  outColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,l=`${n}
void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 p = (frag - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.1;

  // Un centro lejano, abajo a la derecha: los arcos salen de ah\xed.
  vec2 c = vec2(0.85 + 0.25 * u_seed, -0.7) + 0.05 * vec2(sin(t * 3.0), cos(t * 2.0));
  vec2 m = pointer();
  float near = exp(-dot(p - m, p - m) * 6.0);

  float r = length(p - c);
  float w = r * 4.2 + (fbm(p * 1.5 + u_seed) - 0.5) * 1.6 - t * 2.0 + near * 0.12;
  float band = 0.5 + 0.5 * sin(w * 3.14159);

  // Cuerpo suave de la tela y un filo especular fino.
  float body = pow(band, 1.8);
  float edge = pow(1.0 - abs(band * 2.0 - 1.0), 14.0);
  float fall = 1.0 - smoothstep(0.15, 1.5, r);
  float lum = 0.02 + body * 0.85 * (0.25 + fall) + edge * 0.7 * (0.3 + fall);

  // Pliegues finos: la tela no es lisa.
  lum += (vnoise(p * 90.0 + w) - 0.5) * 0.02;
  if (u_dark < 0.5) lum = 1.0 - lum * 0.9;
  outColor = vec4(finish(vec3(lum), frag), 1.0);
}`;function d(e,a,t){let r=e.getExtension("KHR_parallel_shader_compile"),s=e.createProgram();if(!s)throw Error("Sin programa WebGL");let n=[];try{for(let[r,o]of[[e.VERTEX_SHADER,a],[e.FRAGMENT_SHADER,t]]){let a=e.createShader(r);if(!a)throw Error("Sin shader WebGL");n.push(a),e.shaderSource(a,o),e.compileShader(a),e.attachShader(s,a)}e.bindAttribLocation(s,0,"a_pos"),e.linkProgram(s)}catch(a){throw e.deleteProgram(s),a}finally{for(let a of n)e.deleteShader(a)}let o=!1;return{program:s,ready(){if(o)return!0;if(r&&!e.getProgramParameter(s,r.COMPLETION_STATUS_KHR))return!1;if(!e.getProgramParameter(s,e.LINK_STATUS))throw Error(e.getProgramInfoLog(s)??"Programa WebGL inválido");return o=!0,!0},dispose(){e.deleteProgram(s)}}}let c={flutes:`${n}
// El fondo que refractan las estr\xedas: gris casi blanco con nubes suaves y una
// diagonal de luz que cruza; en oscuro, negro con brillos.
float backdrop(vec2 q, float t) {
  float n = fbm(q * 1.4 + vec2(t * 0.6, -t * 0.4) + u_seed * 4.0);
  float sweep = smoothstep(0.0, 0.7, 0.5 + 0.5 * sin(q.x * 1.6 - q.y * 1.1 + t * 0.9 + n * 2.0));
  return mix(0.72 + 0.16 * n, 1.0, sweep * 0.85);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 p = (frag - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.12;

  // Estr\xedas inclinadas 31\xb0 respecto de la vertical.
  float a = radians(31.0);
  vec2 d = vec2(cos(a), -sin(a));
  vec2 n = vec2(sin(a), cos(a));
  float along = dot(p, n);

  // El puntero empuja la ola.
  vec2 m = pointer();
  float near = exp(-dot(p - m, p - m) * 6.0);

  // La ola: cada l\xednea de uni\xf3n se mece a lo largo de su largo.
  float x = dot(p, d);
  x += 0.03 * sin(along * 3.1 + t * 2.6 + u_seed * 5.0) + 0.012 * sin(along * 7.3 - t * 3.4) + near * 0.03;

  float freq = 5.4;
  float s = x * freq;
  float id = floor(s);
  float u = fract(s) * 2.0 - 1.0; // -1 … 1 a lo ancho de la estr\xeda

  // Refracci\xf3n de cilindro: lo que se ve adentro est\xe1 corrido y comprimido.
  vec2 q = p - d * (u * 0.55 / freq);

  float seam = pow(abs(u), 5.0);
  float spec = pow(max(0.0, 1.0 - abs(u + 0.4) * 2.6), 2.0);

  // Aberraci\xf3n: los tres canales miran un poco corrido el fondo.
  float k = 0.012 * (0.35 + seam * 2.2) * (0.4 + u_fringe);
  vec3 col = vec3(backdrop(q + d * k, t), backdrop(q, t), backdrop(q - d * k, t));

  // Cada estr\xeda tiene su tono y su sombra a lo largo.
  float tone = 0.84 + 0.16 * hash(vec2(id, u_seed)) + 0.05 * sin(along * 2.0 + id);
  col *= tone;
  col *= 1.0 - seam * 0.22;
  col += spec * 0.18;

  // Iridiscencia pastel en las uniones.
  float hue = u * 0.9 + along * 0.8 + t * 1.3 + id * 0.13;
  vec3 irid = 0.5 + 0.5 * cos(6.28318 * (vec3(0.0, 0.33, 0.67) + hue));
  float lit = step(0.42, hash(vec2(id + 7.0, u_seed)));
  col = mix(col, col * (0.5 + 1.0 * irid), seam * lit * (0.12 + 0.4 * u_fringe));

  if (u_dark > 0.5) {
    // Negro con filos de cromo: el cuerpo casi no tiene luz, las uniones brillan.
    float l = dot(col, vec3(0.299, 0.587, 0.114));
    vec3 body = vec3(0.02 + pow(l, 3.0) * 0.22);
    vec3 rim = vec3(spec * 0.9 + pow(1.0 - abs(u), 10.0) * 0.28);
    col = body + rim + (col - l) * seam * 0.5;
  }

  // Textura: grano fino y una veta apenas visible.
  col += (vnoise(vec2(s * 22.0, along * 3.0)) - 0.5) * 0.04;
  outColor = vec4(finish(col, frag), 1.0);
}`,mercury:`${n}
// 0 → 1 mientras el puntero est\xe1 adentro; al salir baja suave y la onda se
// apaga en vez de quedar colgada donde estaba el mouse.
uniform float u_hover;

float liquid(vec2 p, float t) {
  vec2 q = vec2(fbm(p * 0.9 + vec2(0.0, t) + u_seed * 3.0), fbm(p * 0.9 + vec2(5.2, 1.3) - t * 0.7));
  float h = fbm(p * 1.3 + q * 1.8 + u_seed);
  // El dedo: un hundimiento suave con anillos que se abren desde el puntero.
  float d = length(p - pointer());
  h += 0.16 * u_hover * exp(-d * d * 7.0) * cos(d * 26.0 - u_time * 2.2);
  h -= 0.1 * u_hover * exp(-d * d * 30.0);
  return h;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 p = (frag - 0.5 * u_res) / u_res.y;
  float t = u_time * 0.06;

  float e = 0.004;
  vec2 g = vec2(liquid(p + vec2(e, 0.0), t) - liquid(p - vec2(e, 0.0), t),
                liquid(p + vec2(0.0, e), t) - liquid(p - vec2(0.0, e), t)) / (2.0 * e);
  vec3 n = normalize(vec3(-g * 0.55, 1.0));
  vec3 r = reflect(vec3(0.0, 0.0, -1.0), n);

  // Estudio: franjas horizontales de luz, una ventana grande arriba.
  float bands = pow(0.5 + 0.5 * sin(r.y * 7.0 + r.x * 2.0), 3.0);
  float window = smoothstep(0.2, 0.7, r.y) * smoothstep(0.9, 0.1, abs(r.x));
  float lum = 0.03 + bands * 0.5 + window * 0.75;
  lum += pow(1.0 - n.z, 2.0) * 0.4;
  lum = lum / (1.0 + lum * 0.5);
  if (u_dark < 0.5) lum = 1.0 - lum * 0.85;
  outColor = vec4(finish(vec3(lum), frag), 1.0);
}`,metal:i,silk:l};e.s(["ShaderCanvas",0,function({variant:e="metal",dark:n=!1,seed:i=0,fringe:l=0,interactive:u=!0,speed:m=.78,exposure:x=1,glassIntensity:p=1,glowIntensity:f=1,pixelRatio:h=1.25,pointerResponse:g=.12,onReady:b,onUnavailable:v,className:j}){let y=t.useRef(null),N=t.useRef({dark:n,seed:i,fringe:l,interactive:u,speed:m,exposure:x,glassIntensity:p,glowIntensity:f,pointerResponse:g,onReady:b,onUnavailable:v});return t.useEffect(()=>{N.current={dark:n,seed:i,fringe:l,interactive:u,speed:m,exposure:x,glassIntensity:p,glowIntensity:f,pointerResponse:g,onReady:b,onUnavailable:v}},[n,i,l,u,m,x,p,f,g,b,v]),t.useEffect(()=>{let a,t=y.current;if(!t)return;let r=t.parentElement??t,n=t.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!n)return void N.current.onUnavailable?.();try{a=d(n,s,c[e])}catch{N.current.onUnavailable?.();return}let i=a.program,l=a.dispose,u=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,u),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0);let m=null;try{"metal"===e&&(m=function(e,a,t,r){let s=!!e.getExtension("EXT_color_buffer_float"),n=r(e,a,t),o=n.program,i=e.createTexture(),l=e.createFramebuffer(),d=()=>{e.deleteFramebuffer(l),e.deleteTexture(i),n.dispose()};if(!i||!l)throw d(),Error("Sin recursos para los reflejos");if(e.bindTexture(e.TEXTURE_2D,i),e.texImage2D(e.TEXTURE_2D,0,s?e.RGBA16F:e.RGBA8,384,320,0,e.RGBA,s?e.HALF_FLOAT:e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&s&&(s=!1,e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,384,320,0,e.RGBA,e.UNSIGNED_BYTE,null)),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw d(),Error("Framebuffer inválido");e.bindFramebuffer(e.FRAMEBUFFER,null);let c=null;return{ready:n.ready,precision:s?"rgba16f":"rgba8",render(a,t,r,s){let[n,d,u]=c??=["u_res","u_time","u_seed"].map(a=>e.getUniformLocation(o,a));e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,l),e.viewport(0,0,384,320),e.useProgram(o),e.uniform2f(n,a,t),e.uniform1f(d,r),e.uniform1f(u,s),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,a,t),e.bindTexture(e.TEXTURE_2D,i)},dispose:d}}(n,s,o,d))}catch{n.deleteBuffer(u),l(),N.current.onUnavailable?.();return}let x=null,p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=Math.min(window.devicePixelRatio||1,Math.max(1,Math.min(2,h)));t.dataset.precision=m?.precision??"direct",t.dataset.pixelRatio=f.toFixed(2);let g=16.7,b=[],v=1,j=1,w=0,_=!1,k=20,E=0,R=!1,T=!1,M=0,A=0,L=null,C={x:-9999,y:-9999},q={x:-9999,y:-9999},S=()=>{let e=r.getBoundingClientRect();v=Math.max(1,Math.round(e.width*f)),j=Math.max(1,Math.round(e.height*f)),(t.width!==v||t.height!==j)&&(t.width=v,t.height=j,n.viewport(0,0,v,j)),L=null},z=s=>{if(R)return;try{if(!a.ready()||m&&!m.ready()){w||(w=window.requestAnimationFrame(e=>{w=0,z(e),P()}));return}}catch{R=!0,I(),m?.dispose(),n.deleteBuffer(u),l(),N.current.onUnavailable?.();return}let[o,d,c,h,g,b,y,_]=x??=["u_res","u_time","u_mouse","u_hover","u_seed","u_dark","u_fringe","u_material"].map(e=>n.getUniformLocation(i,e)),S=N.current,F=A?Math.max(0,(s-A)/1e3):0;A=s;let O=1-Math.exp(-F/Math.max(.01,S.pointerResponse));p||(k+=Math.min(F,.1)*Math.max(0,S.speed)),E+=Math.min(F,.1);let D=p?20:k,U=S.interactive&&C.x>-9e3;U&&M<.001?(q.x=C.x,q.y=C.y):U&&(q.x+=(C.x-q.x)*O,q.y+=(C.y-q.y)*O),M+=(!!U-M)*O,m?.render(v,j,D,S.seed),n.useProgram(i),n.uniform2f(o,v,j),n.uniform1f(g,S.seed),n.uniform1f(b,+!!S.dark),n.uniform1f(y,S.fringe),n.uniform3f(_,Math.max(0,S.exposure),Math.max(0,S.glassIntensity),Math.max(0,S.glowIntensity)),n.uniform1f(d,D),n.uniform1f(h,M);let B=U||"metal"===e||"mercury"===e;if(n.uniform2f(c,B?q.x:-9999,B?q.y:-9999),m&&E>2&&!L){let e=r.querySelector("[data-shader-occluder]")?.getBoundingClientRect(),a=r.getBoundingClientRect();e&&(L={x:Math.max(0,Math.ceil((e.left-a.left+20)*f)),y:Math.max(0,Math.ceil((a.bottom-e.bottom+20)*f)),width:Math.max(0,Math.floor((e.width-40)*f)),height:Math.max(0,Math.floor((e.height-40)*f))})}if(L&&E>2){let{x:e,y:a,width:t,height:r}=L;for(let[s,o,i,l]of(n.enable(n.SCISSOR_TEST),[[0,0,v,a],[0,a+r,v,j-a-r],[0,a,e,r],[e+t,a,v-e-t,r]]))n.scissor(s,o,Math.max(0,i),Math.max(0,l)),n.drawArrays(n.TRIANGLES,0,3);n.disable(n.SCISSOR_TEST)}else n.drawArrays(n.TRIANGLES,0,3);T||(T=!0,t.dataset.ready="true",S.onReady?.())},F=e=>{let a=A?e-A:0;a>0&&a<250&&(g+=(a-g)*.1,b.push(a),b.length>120&&b.shift()),z(e),w=window.requestAnimationFrame(F)},P=()=>{w||p||R||document.hidden||!_||(w=window.requestAnimationFrame(F))},I=()=>{w&&window.cancelAnimationFrame(w),w=0,A=0},O=e=>{let a=r.getBoundingClientRect();if(!(e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom)){C.x=-9999,C.y=-9999;return}C.x=(e.clientX-a.left)*f,C.y=(a.bottom-e.clientY)*f},D=()=>{C.x=-9999,C.y=-9999};p||(window.addEventListener("pointermove",O,{passive:!0}),document.addEventListener("pointerleave",D),window.addEventListener("blur",D));let U=new ResizeObserver(()=>{S(),(p||!_)&&z(performance.now())});U.observe(r);let B=new IntersectionObserver(([e])=>{(_=e.isIntersecting)?(T||z(performance.now()),P()):I()},{rootMargin:"80px"});B.observe(r);let H=()=>{document.hidden?I():(T||z(performance.now()),P())};document.addEventListener("visibilitychange",H);let K=()=>{R=!0,I(),t.dataset.ready="false",N.current.onUnavailable?.()};return t.addEventListener("webglcontextlost",K),S(),z(performance.now()),()=>{I(),U.disconnect(),B.disconnect(),window.removeEventListener("pointermove",O),document.removeEventListener("pointerleave",D),window.removeEventListener("blur",D),t.removeEventListener("webglcontextlost",K),document.removeEventListener("visibilitychange",H),t.dataset.ready="false",m?.dispose(),n.deleteBuffer(u),l()}},[e,h]),(0,a.jsx)("canvas",{ref:y,"aria-hidden":!0,className:(0,r.cn)("pointer-events-none absolute inset-0 size-full opacity-0 data-[ready=true]:opacity-100",j)})}],236752)}]);

//# debugId=630ccf69-150e-c182-2b84-ad7b74fccf01