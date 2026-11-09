;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="1bbe503e-29c5-c627-aee2-97ad4b9ec3de")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,384363,390208,e=>{"use strict";var a=e.i(9420),r=e.i(975157),o=e.i(755480),t=e.i(526488);function l({icon:e,tone:o="light",live:t=!1,className:i,...n}){return(0,a.jsx)(e,{stroke:t?"url(#mk-chrome-live)":"dark"===o?"url(#mk-chrome-night)":"url(#mk-chrome)",strokeWidth:2,className:(0,r.cn)("size-7 [filter:url(#mk-metal)]",i),...n})}e.s(["MetalIcon",0,l,"MetalTile",0,function({icon:e,className:r}){return(0,a.jsx)(t.MetalChip,{size:"md",className:r,children:(0,a.jsx)(e,{strokeWidth:1.75})})}],390208),e.s(["SectionBadge",0,function({index:e,children:t,tone:i="light",glyph:n="wings",icon:s,className:c}){let d="dark"===i;return(0,a.jsx)(o.ShaderEdge,{tone:"light",className:(0,r.cn)("rounded-[8px]",c),children:(0,a.jsxs)("span",{className:(0,r.cn)("inline-flex h-[30px] items-center gap-2 rounded-md pl-2.5 pr-3",d?"bg-[var(--night)]":"bg-background"),children:[s?(0,a.jsx)(l,{icon:s,tone:i,live:!0,"aria-hidden":!0,className:"size-[18px] shrink-0"}):"gem"===n?(0,a.jsxs)("svg",{"aria-hidden":!0,viewBox:"0 0 24 24",className:"size-[18px] shrink-0",children:[(0,a.jsx)("path",{d:"M12 1.8 22.2 12 12 22.2 1.8 12Z",fill:"url(#mk-gem-a)"}),(0,a.jsx)("path",{d:"M12 6.6 17.4 12 12 17.4 6.6 12Z",fill:"url(#mk-gem-b)"})]}):(0,a.jsx)("span",{"aria-hidden":!0,className:"mk-glyph size-[18px] shrink-0"}),void 0!==e&&(0,a.jsx)("span",{className:(0,r.cn)("text-11-5 font-medium tabular-nums leading-none",d?"text-[var(--star)]":"text-muted-foreground"),children:String(e).padStart(2,"0")}),(0,a.jsx)("span",{className:(0,r.cn)("pt-px text-12 font-medium uppercase leading-none tracking-[0.04em]",d?"text-white":"text-foreground"),children:t})]})})}],384363)},151427,e=>{"use strict";var a=e.i(9420),r=e.i(884513),o=e.i(247301),t=e.i(271874),l=e.i(975157);e.s(["Chip",0,function({tone:e="light",className:r,children:o}){return(0,a.jsx)("span",{className:(0,l.cn)("inline-flex h-7 items-center gap-1.5 whitespace-nowrap rounded-md border px-2 font-code text-12","dark"===e?"border-white/12 bg-[#161616] text-white":"border-border bg-background text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.05)]",r),children:o})},"Fade",0,function({edges:e="x",solidOnMobile:r=!1,className:o,children:t}){return(0,a.jsx)("div",{className:(0,l.cn)("relative w-full [-webkit-mask-image:var(--fade)] [mask-image:var(--fade)]",r&&"max-sm:[-webkit-mask-image:none] max-sm:[mask-image:none]",o),style:{"--fade":"x"===e?"linear-gradient(to right, transparent, #000 14%, #000 86%, transparent)":"r"===e?"linear-gradient(to right, #000 60%, transparent)":"b"===e?"linear-gradient(to bottom, #000 62%, transparent)":"radial-gradient(ellipse at center, #000 52%, transparent 78%)"},children:t})},"Node",0,function({icon:e,tone:r="light",size:o="md",className:t,children:i}){let n="dark"===r;return(0,a.jsx)("span",{className:(0,l.cn)("relative z-10 flex shrink-0 items-center justify-center rounded-full border","lg"===o?"size-16":"sm"===o?"size-10":"size-14",n?"border-white/12 bg-[#161616]":"border-border bg-background shadow-[0_1px_2px_rgba(0,0,0,0.05)]",t),children:(0,a.jsx)("span",{className:(0,l.cn)("flex items-center justify-center rounded-full border","lg"===o?"size-11":"sm"===o?"size-7":"size-10",n?"border-white/10 bg-white/[0.04] text-[var(--night-text)]":"border-border bg-muted text-muted-foreground"),children:e?(0,a.jsx)(e,{className:"size-4"}):i})})},"Radar",0,function({tone:e="light",rings:r=3,className:i}){let n=(0,t.useReducedMotion)();return(0,a.jsx)("span",{"aria-hidden":!0,className:(0,l.cn)("pointer-events-none absolute inset-0 flex items-center justify-center",i),children:Array.from({length:r},(r,t)=>{let i=96+56*t;return(0,a.jsx)(o.motion.span,{className:(0,l.cn)("absolute rounded-full border border-dashed","dark"===e?"border-white/15":"border-foreground/15"),style:{width:i,height:i},animate:n?void 0:{opacity:[.35,1,.35],scale:[.98,1.02,.98]},transition:{duration:3.2,repeat:1/0,delay:.45*t,ease:"easeInOut"}},t)})})},"Wire",0,function({vertical:e=!1,tone:r="light",delay:i=0,duration:n=2.2,reverse:s=!1,className:c}){let d=(0,t.useReducedMotion)(),u=s?"100%":"0%",f=s?"0%":"100%";return(0,a.jsxs)("span",{"aria-hidden":!0,className:(0,l.cn)("relative block shrink-0",e?"h-full w-px":"h-px w-full",c),children:[(0,a.jsx)("span",{className:(0,l.cn)("absolute inset-0 border-dashed",e?"border-l":"border-t","dark"===r?"border-white/20":"border-foreground/20")}),!d&&(0,a.jsx)(o.motion.span,{className:(0,l.cn)("absolute size-1.5 rounded-full","dark"===r?"bg-white":"bg-foreground",e?"-left-[2.5px]":"-top-[2.5px]"),initial:e?{top:u,opacity:0}:{left:u,opacity:0},animate:e?{top:[u,f],opacity:[0,1,1,0]}:{left:[u,f],opacity:[0,1,1,0]},transition:{duration:n,delay:i,repeat:1/0,repeatDelay:.6,ease:"easeInOut"}})]})},"useCycle",0,function(e,a=1800){let o=(0,t.useReducedMotion)(),[l,i]=r.useState(0);return r.useEffect(()=>{if(o||e<2)return;let r=window.setInterval(()=>i(a=>(a+1)%e),a);return()=>window.clearInterval(r)},[o,e,a]),l}])},467739,e=>{"use strict";var a=e.i(9420),r=e.i(975157);function o({as:e="section",className:t,children:l,...i}){return(0,a.jsx)(e,{className:(0,r.cn)("relative isolate overflow-hidden bg-[var(--night)] text-white",t),...i,children:l})}function t({line:e}){return(0,a.jsx)("div",{"aria-hidden":!0,className:(0,r.cn)("mx-auto h-full max-w-(--frame-outer) border-x",e),children:(0,a.jsx)("div",{className:(0,r.cn)("mx-auto h-full max-w-(--frame) border-x",e)})})}function l(){return(0,a.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0",children:(0,a.jsx)(t,{line:"border-white/20"})})}function i(e){return null}e.s(["FrameBand",0,function({tone:e="light",className:o,children:t,...l}){return(0,a.jsx)("div",{className:"relative mx-auto w-full max-w-(--frame)",children:(0,a.jsxs)("div",{className:(0,r.cn)("relative isolate overflow-hidden",o),...l,children:[t,(0,a.jsx)("span",{"aria-hidden":!0,className:(0,r.cn)("pointer-events-none absolute inset-0 z-20 border-x","night"===e?"border-white/20":"border-border")})]})})},"FrameSection",0,function({id:e,className:o,contained:t=!0,rule:l=!0,children:n,...s}){return(0,a.jsxs)("section",{id:e,className:(0,r.cn)("relative scroll-mt-20 py-20 sm:py-28",l&&"mk-rule border-t border-border",o),...s,children:[l&&(0,a.jsx)(i,{className:"top-0"}),t?(0,a.jsx)("div",{className:"mx-auto w-full max-w-(--frame) px-6 sm:px-10",children:n}):n]})},"NightSection",0,function({id:e,className:t,contained:n=!0,children:s,...c}){return(0,a.jsxs)(o,{id:e,"data-surface":"dark",className:(0,r.cn)("scroll-mt-20 border-t border-[var(--night-line)] py-20 sm:py-28",t),...c,children:[(0,a.jsx)(l,{}),(0,a.jsx)(i,{className:"top-0",tone:"star"}),n?(0,a.jsx)("div",{className:"relative mx-auto w-full max-w-(--frame) px-6 sm:px-10",children:s}):s]})},"SiteGuides",0,function(){return(0,a.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-0",children:(0,a.jsx)(t,{line:"border-border"})})}],467739)},312660,e=>{"use strict";var a=e.i(9420);e.s(["CursorLogo",0,function(e){return(0,a.jsx)("svg",{viewBox:"0 0 466.73 532.09",fill:"currentColor","aria-hidden":!0,...e,children:(0,a.jsx)("path",{d:"M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"})})},"GeminiLogo",0,function({idPrefix:e="gemini",...r}){let o=a=>`${e}__${a}`,t=(e,r,t,l,i,n)=>(0,a.jsxs)("filter",{id:o(e),width:l,height:i,x:r,y:t,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[(0,a.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,a.jsx)("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,a.jsx)("feGaussianBlur",{result:"effect1_foregroundBlur",stdDeviation:n})]});return(0,a.jsxs)("svg",{viewBox:"0 0 296 298",fill:"none","aria-hidden":!0,...r,children:[(0,a.jsx)("mask",{id:o("a"),width:"296",height:"298",x:"0",y:"0",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},children:(0,a.jsx)("path",{fill:"#3186FF",d:"M141.201 4.886c2.282-6.17 11.042-6.071 13.184.148l5.985 17.37a184.004 184.004 0 0 0 111.257 113.049l19.304 6.997c6.143 2.227 6.156 10.91.02 13.155l-19.35 7.082a184.001 184.001 0 0 0-109.495 109.385l-7.573 20.629c-2.241 6.105-10.869 6.121-13.133.025l-7.908-21.296a184 184 0 0 0-109.02-108.658l-19.698-7.239c-6.102-2.243-6.118-10.867-.025-13.132l20.083-7.467A183.998 183.998 0 0 0 133.291 26.28l7.91-21.394Z"})}),(0,a.jsxs)("g",{mask:`url(#${o("a")})`,children:[(0,a.jsx)("g",{filter:`url(#${o("b")})`,children:(0,a.jsx)("ellipse",{cx:"163",cy:"149",fill:"#3689FF",rx:"196",ry:"159"})}),(0,a.jsx)("g",{filter:`url(#${o("c")})`,children:(0,a.jsx)("ellipse",{cx:"33.5",cy:"142.5",fill:"#F6C013",rx:"68.5",ry:"72.5"})}),(0,a.jsx)("g",{filter:`url(#${o("d")})`,children:(0,a.jsx)("ellipse",{cx:"19.5",cy:"148.5",fill:"#F6C013",rx:"68.5",ry:"72.5"})}),(0,a.jsx)("g",{filter:`url(#${o("e")})`,children:(0,a.jsx)("path",{fill:"#FA4340",d:"M194 10.5C172 82.5 65.5 134.333 22.5 135L144-66l50 76.5Z"})}),(0,a.jsx)("g",{filter:`url(#${o("f")})`,children:(0,a.jsx)("path",{fill:"#FA4340",d:"M190.5-12.5C168.5 59.5 62 111.333 19 112L140.5-89l50 76.5Z"})}),(0,a.jsx)("g",{filter:`url(#${o("g")})`,children:(0,a.jsx)("path",{fill:"#14BB69",d:"M194.5 279.5C172.5 207.5 66 155.667 23 155l121.5 201 50-76.5Z"})}),(0,a.jsx)("g",{filter:`url(#${o("h")})`,children:(0,a.jsx)("path",{fill:"#14BB69",d:"M196.5 320.5C174.5 248.5 68 196.667 25 196l121.5 201 50-76.5Z"})})]}),(0,a.jsxs)("defs",{children:[t("b",-69,-46,464,390,18),t("c",-99,6,265,273,32),t("d",-113,12,265,273,32),t("e",-41.5,-130,299.5,329,32),t("f",-45,-153,299.5,329,32),t("g",-41,91,299.5,329,32),t("h",-39,132,299.5,329,32)]})]})}])},333554,e=>{"use strict";var a=e.i(9420),r=e.i(565525),o=e.i(975157),t=e.i(312660);let l=[{id:"claude-code",name:"Claude Code",logo:"/logos/marketing/claude-ai-icon.svg",hint:"En tu terminal"},{id:"codex",name:"Codex",logo:"/logos/marketing/openai.svg",hint:"En tu editor"},{id:"cursor",name:"Cursor",glyph:e=>(0,a.jsx)(t.CursorLogo,{className:"text-foreground",style:{width:e,height:e}}),hint:"Al programar"},{id:"gemini",name:"Gemini CLI",glyph:e=>(0,a.jsx)(t.GeminiLogo,{idPrefix:`gemini-${e}`,style:{width:e,height:e}}),hint:"En tu terminal"},{id:"claude",name:"Claude",logo:"/logos/marketing/claude-ai-icon.svg",hint:"En el chat"}];e.s(["CLIENTS",0,l,"ClientLogo",0,function({client:e,size:t=18}){return e.logo?(0,a.jsx)(r.default,{src:e.logo,alt:"",width:t,height:t,className:(0,o.cn)("object-contain","codex"===e.id&&"dark:invert"),style:{width:t,height:t}}):(0,a.jsx)("span",{className:"flex shrink-0 items-center justify-center",children:e.glyph?.(t)})}])},236752,e=>{"use strict";var a=e.i(9420),r=e.i(884513),o=e.i(975157);let t=`#version 300 es
in vec2 a_pos;
out vec2 v_uv;
void main() { v_uv = a_pos * 0.5 + 0.5; gl_Position = vec4(a_pos, 0.0, 1.0); }`,l=`#version 300 es
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
`,i=`${l}
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
}`,n=`${l}
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
}`,s=`${l}
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
}`;function c(e,a,r){let o=e.getExtension("KHR_parallel_shader_compile"),t=e.createProgram();if(!t)throw Error("Sin programa WebGL");let l=[];try{for(let[o,i]of[[e.VERTEX_SHADER,a],[e.FRAGMENT_SHADER,r]]){let a=e.createShader(o);if(!a)throw Error("Sin shader WebGL");l.push(a),e.shaderSource(a,i),e.compileShader(a),e.attachShader(t,a)}e.bindAttribLocation(t,0,"a_pos"),e.linkProgram(t)}catch(a){throw e.deleteProgram(t),a}finally{for(let a of l)e.deleteShader(a)}let i=!1;return{program:t,ready(){if(i)return!0;if(o&&!e.getProgramParameter(t,o.COMPLETION_STATUS_KHR))return!1;if(!e.getProgramParameter(t,e.LINK_STATUS))throw Error(e.getProgramInfoLog(t)??"Programa WebGL inválido");return i=!0,!0},dispose(){e.deleteProgram(t)}}}let d={flutes:`${l}
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
}`,mercury:`${l}
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
}`,metal:n,silk:s};e.s(["ShaderCanvas",0,function({variant:e="metal",dark:l=!1,seed:n=0,fringe:s=0,interactive:u=!0,speed:f=.78,exposure:m=1,glassIntensity:x=1,glowIntensity:h=1,pixelRatio:p=1.25,pointerResponse:v=.12,onReady:g,onUnavailable:b,className:y}){let _=r.useRef(null),w=r.useRef({dark:l,seed:n,fringe:s,interactive:u,speed:f,exposure:m,glassIntensity:x,glowIntensity:h,pointerResponse:v,onReady:g,onUnavailable:b});return r.useEffect(()=>{w.current={dark:l,seed:n,fringe:s,interactive:u,speed:f,exposure:m,glassIntensity:x,glowIntensity:h,pointerResponse:v,onReady:g,onUnavailable:b}},[l,n,s,u,f,m,x,h,v,g,b]),r.useEffect(()=>{let a,r=_.current;if(!r)return;let o=r.parentElement??r,l=r.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!l)return void w.current.onUnavailable?.();try{a=c(l,t,d[e])}catch{w.current.onUnavailable?.();return}let n=a.program,s=a.dispose,u=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),l.STATIC_DRAW),l.enableVertexAttribArray(0),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0);let f=null;try{"metal"===e&&(f=function(e,a,r,o){let t=!!e.getExtension("EXT_color_buffer_float"),l=o(e,a,r),i=l.program,n=e.createTexture(),s=e.createFramebuffer(),c=()=>{e.deleteFramebuffer(s),e.deleteTexture(n),l.dispose()};if(!n||!s)throw c(),Error("Sin recursos para los reflejos");if(e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t?e.RGBA16F:e.RGBA8,384,320,0,e.RGBA,t?e.HALF_FLOAT:e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,s),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&t&&(t=!1,e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,384,320,0,e.RGBA,e.UNSIGNED_BYTE,null)),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw c(),Error("Framebuffer inválido");e.bindFramebuffer(e.FRAMEBUFFER,null);let d=null;return{ready:l.ready,precision:t?"rgba16f":"rgba8",render(a,r,o,t){let[l,c,u]=d??=["u_res","u_time","u_seed"].map(a=>e.getUniformLocation(i,a));e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,s),e.viewport(0,0,384,320),e.useProgram(i),e.uniform2f(l,a,r),e.uniform1f(c,o),e.uniform1f(u,t),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,a,r),e.bindTexture(e.TEXTURE_2D,n)},dispose:c}}(l,t,i,c))}catch{l.deleteBuffer(u),s(),w.current.onUnavailable?.();return}let m=null,x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,h=Math.min(window.devicePixelRatio||1,Math.max(1,Math.min(2,p)));r.dataset.precision=f?.precision??"direct",r.dataset.pixelRatio=h.toFixed(2);let v=16.7,g=[],b=1,y=1,E=0,j=!1,R=20,T=0,k=!1,F=!1,A=0,M=0,q=null,L={x:-9999,y:-9999},N={x:-9999,y:-9999},C=()=>{let e=o.getBoundingClientRect();b=Math.max(1,Math.round(e.width*h)),y=Math.max(1,Math.round(e.height*h)),(r.width!==b||r.height!==y)&&(r.width=b,r.height=y,l.viewport(0,0,b,y)),q=null},S=t=>{if(k)return;try{if(!a.ready()||f&&!f.ready()){E||(E=window.requestAnimationFrame(e=>{E=0,S(e),B()}));return}}catch{k=!0,z(),f?.dispose(),l.deleteBuffer(u),s(),w.current.onUnavailable?.();return}let[i,c,d,p,v,g,_,j]=m??=["u_res","u_time","u_mouse","u_hover","u_seed","u_dark","u_fringe","u_material"].map(e=>l.getUniformLocation(n,e)),C=w.current,U=M?Math.max(0,(t-M)/1e3):0;M=t;let I=1-Math.exp(-U/Math.max(.01,C.pointerResponse));x||(R+=Math.min(U,.1)*Math.max(0,C.speed)),T+=Math.min(U,.1);let P=x?20:R,D=C.interactive&&L.x>-9e3;D&&A<.001?(N.x=L.x,N.y=L.y):D&&(N.x+=(L.x-N.x)*I,N.y+=(L.y-N.y)*I),A+=(!!D-A)*I,f?.render(b,y,P,C.seed),l.useProgram(n),l.uniform2f(i,b,y),l.uniform1f(v,C.seed),l.uniform1f(g,+!!C.dark),l.uniform1f(_,C.fringe),l.uniform3f(j,Math.max(0,C.exposure),Math.max(0,C.glassIntensity),Math.max(0,C.glowIntensity)),l.uniform1f(c,P),l.uniform1f(p,A);let G=D||"metal"===e||"mercury"===e;if(l.uniform2f(d,G?N.x:-9999,G?N.y:-9999),f&&T>2&&!q){let e=o.querySelector("[data-shader-occluder]")?.getBoundingClientRect(),a=o.getBoundingClientRect();e&&(q={x:Math.max(0,Math.ceil((e.left-a.left+20)*h)),y:Math.max(0,Math.ceil((a.bottom-e.bottom+20)*h)),width:Math.max(0,Math.floor((e.width-40)*h)),height:Math.max(0,Math.floor((e.height-40)*h))})}if(q&&T>2){let{x:e,y:a,width:r,height:o}=q;for(let[t,i,n,s]of(l.enable(l.SCISSOR_TEST),[[0,0,b,a],[0,a+o,b,y-a-o],[0,a,e,o],[e+r,a,b-e-r,o]]))l.scissor(t,i,Math.max(0,n),Math.max(0,s)),l.drawArrays(l.TRIANGLES,0,3);l.disable(l.SCISSOR_TEST)}else l.drawArrays(l.TRIANGLES,0,3);F||(F=!0,r.dataset.ready="true",C.onReady?.())},U=e=>{let a=M?e-M:0;a>0&&a<250&&(v+=(a-v)*.1,g.push(a),g.length>120&&g.shift()),S(e),E=window.requestAnimationFrame(U)},B=()=>{E||x||k||document.hidden||!j||(E=window.requestAnimationFrame(U))},z=()=>{E&&window.cancelAnimationFrame(E),E=0,M=0},I=e=>{let a=o.getBoundingClientRect();if(!(e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom)){L.x=-9999,L.y=-9999;return}L.x=(e.clientX-a.left)*h,L.y=(a.bottom-e.clientY)*h},P=()=>{L.x=-9999,L.y=-9999};x||(window.addEventListener("pointermove",I,{passive:!0}),document.addEventListener("pointerleave",P),window.addEventListener("blur",P));let D=new ResizeObserver(()=>{C(),(x||!j)&&S(performance.now())});D.observe(o);let G=new IntersectionObserver(([e])=>{(j=e.isIntersecting)?(F||S(performance.now()),B()):z()},{rootMargin:"80px"});G.observe(o);let O=()=>{document.hidden?z():(F||S(performance.now()),B())};document.addEventListener("visibilitychange",O);let X=()=>{k=!0,z(),r.dataset.ready="false",w.current.onUnavailable?.()};return r.addEventListener("webglcontextlost",X),C(),S(performance.now()),()=>{z(),D.disconnect(),G.disconnect(),window.removeEventListener("pointermove",I),document.removeEventListener("pointerleave",P),window.removeEventListener("blur",P),r.removeEventListener("webglcontextlost",X),document.removeEventListener("visibilitychange",O),r.dataset.ready="false",f?.dispose(),l.deleteBuffer(u),s()}},[e,p]),(0,a.jsx)("canvas",{ref:_,"aria-hidden":!0,className:(0,o.cn)("pointer-events-none absolute inset-0 size-full opacity-0 data-[ready=true]:opacity-100",y)})}],236752)}]);

//# debugId=1bbe503e-29c5-c627-aee2-97ad4b9ec3de