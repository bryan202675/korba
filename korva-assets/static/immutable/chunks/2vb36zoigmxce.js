;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="b6256370-b8af-f8d9-09c7-75814ebba290")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,384363,390208,e=>{"use strict";var a=e.i(9420),r=e.i(975157),t=e.i(755480),o=e.i(526488);function l({icon:e,tone:t="light",live:o=!1,className:n,...s}){return(0,a.jsx)(e,{stroke:o?"url(#mk-chrome-live)":"dark"===t?"url(#mk-chrome-night)":"url(#mk-chrome)",strokeWidth:2,className:(0,r.cn)("size-7 [filter:url(#mk-metal)]",n),...s})}e.s(["MetalIcon",0,l,"MetalTile",0,function({icon:e,className:r}){return(0,a.jsx)(o.MetalChip,{size:"md",className:r,children:(0,a.jsx)(e,{strokeWidth:1.75})})}],390208),e.s(["SectionBadge",0,function({index:e,children:o,tone:n="light",glyph:s="wings",icon:i,className:c}){let d="dark"===n;return(0,a.jsx)(t.ShaderEdge,{tone:"light",className:(0,r.cn)("rounded-[8px]",c),children:(0,a.jsxs)("span",{className:(0,r.cn)("inline-flex h-[30px] items-center gap-2 rounded-md pl-2.5 pr-3",d?"bg-[var(--night)]":"bg-background"),children:[i?(0,a.jsx)(l,{icon:i,tone:n,live:!0,"aria-hidden":!0,className:"size-[18px] shrink-0"}):"gem"===s?(0,a.jsxs)("svg",{"aria-hidden":!0,viewBox:"0 0 24 24",className:"size-[18px] shrink-0",children:[(0,a.jsx)("path",{d:"M12 1.8 22.2 12 12 22.2 1.8 12Z",fill:"url(#mk-gem-a)"}),(0,a.jsx)("path",{d:"M12 6.6 17.4 12 12 17.4 6.6 12Z",fill:"url(#mk-gem-b)"})]}):(0,a.jsx)("span",{"aria-hidden":!0,className:"mk-glyph size-[18px] shrink-0"}),void 0!==e&&(0,a.jsx)("span",{className:(0,r.cn)("text-11-5 font-medium tabular-nums leading-none",d?"text-[var(--star)]":"text-muted-foreground"),children:String(e).padStart(2,"0")}),(0,a.jsx)("span",{className:(0,r.cn)("pt-px text-12 font-medium uppercase leading-none tracking-[0.04em]",d?"text-white":"text-foreground"),children:o})]})})}],384363)},467739,e=>{"use strict";var a=e.i(9420),r=e.i(975157);function t({as:e="section",className:o,children:l,...n}){return(0,a.jsx)(e,{className:(0,r.cn)("relative isolate overflow-hidden bg-[var(--night)] text-white",o),...n,children:l})}function o({line:e}){return(0,a.jsx)("div",{"aria-hidden":!0,className:(0,r.cn)("mx-auto h-full max-w-(--frame-outer) border-x",e),children:(0,a.jsx)("div",{className:(0,r.cn)("mx-auto h-full max-w-(--frame) border-x",e)})})}function l(){return(0,a.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0",children:(0,a.jsx)(o,{line:"border-white/20"})})}function n(e){return null}e.s(["FrameBand",0,function({tone:e="light",className:t,children:o,...l}){return(0,a.jsx)("div",{className:"relative mx-auto w-full max-w-(--frame)",children:(0,a.jsxs)("div",{className:(0,r.cn)("relative isolate overflow-hidden",t),...l,children:[o,(0,a.jsx)("span",{"aria-hidden":!0,className:(0,r.cn)("pointer-events-none absolute inset-0 z-20 border-x","night"===e?"border-white/20":"border-border")})]})})},"FrameSection",0,function({id:e,className:t,contained:o=!0,rule:l=!0,children:s,...i}){return(0,a.jsxs)("section",{id:e,className:(0,r.cn)("relative scroll-mt-20 py-20 sm:py-28",l&&"mk-rule border-t border-border",t),...i,children:[l&&(0,a.jsx)(n,{className:"top-0"}),o?(0,a.jsx)("div",{className:"mx-auto w-full max-w-(--frame) px-6 sm:px-10",children:s}):s]})},"NightSection",0,function({id:e,className:o,contained:s=!0,children:i,...c}){return(0,a.jsxs)(t,{id:e,"data-surface":"dark",className:(0,r.cn)("scroll-mt-20 border-t border-[var(--night-line)] py-20 sm:py-28",o),...c,children:[(0,a.jsx)(l,{}),(0,a.jsx)(n,{className:"top-0",tone:"star"}),s?(0,a.jsx)("div",{className:"relative mx-auto w-full max-w-(--frame) px-6 sm:px-10",children:i}):i]})},"SiteGuides",0,function(){return(0,a.jsx)("div",{"aria-hidden":!0,className:"pointer-events-none absolute inset-0 z-0",children:(0,a.jsx)(o,{line:"border-border"})})}],467739)},854312,e=>{"use strict";var a=e.i(9420),r=e.i(975157);let t=[["calc(50% - var(--frame-outer) / 2)",.35],["calc(50% - var(--frame) / 2)",0],["calc(50% + var(--frame) / 2 - 1px)",0],["calc(50% + var(--frame-outer) / 2 - 1px)",.35]];e.s(["HeroGuides",0,function({className:e}){return(0,a.jsx)("div",{"aria-hidden":!0,className:(0,r.cn)("pointer-events-none absolute inset-0 hidden overflow-hidden lg:block",e),children:t.map(([e,r])=>(0,a.jsx)("span",{className:"mk-motion absolute top-0 block h-[140px] w-px bg-[linear-gradient(to_bottom,transparent,var(--foreground),transparent)] opacity-0",style:{left:e,animation:`mk-guide-shine 10s ease-in-out ${r}s infinite`}},e))})}])},279453,e=>{"use strict";var a=e.i(9420),r=e.i(884513),t=e.i(54375),o=e.i(975157),l=e.i(236752),n=e.i(569727);let s=(0,t.default)(()=>e.A(890914),{loadableGenerated:{modules:[915662]},ssr:!1});e.s(["MetalBand",0,function({className:e}){let t=(0,n.useWebGPU)(),[i,c]=r.useState(!1),[d,u]=r.useState(!1),m=t&&!d;return(0,a.jsxs)(a.Fragment,{children:[!(m&&i)&&(0,a.jsx)(l.ShaderCanvas,{variant:"metal",fringe:1,className:e}),m&&(0,a.jsx)(s,{className:(0,o.cn)("pointer-events-none absolute inset-0 size-full transition-opacity duration-700",i?"opacity-100":"opacity-0",e),onReady:()=>c(!0),onUnavailable:()=>u(!0)})]})}])},236752,e=>{"use strict";var a=e.i(9420),r=e.i(884513),t=e.i(975157);let o=`#version 300 es
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
`,n=`${l}
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
}`,s=`${l}
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
}`,i=`${l}
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
}`;function c(e,a,r){let t=e.getExtension("KHR_parallel_shader_compile"),o=e.createProgram();if(!o)throw Error("Sin programa WebGL");let l=[];try{for(let[t,n]of[[e.VERTEX_SHADER,a],[e.FRAGMENT_SHADER,r]]){let a=e.createShader(t);if(!a)throw Error("Sin shader WebGL");l.push(a),e.shaderSource(a,n),e.compileShader(a),e.attachShader(o,a)}e.bindAttribLocation(o,0,"a_pos"),e.linkProgram(o)}catch(a){throw e.deleteProgram(o),a}finally{for(let a of l)e.deleteShader(a)}let n=!1;return{program:o,ready(){if(n)return!0;if(t&&!e.getProgramParameter(o,t.COMPLETION_STATUS_KHR))return!1;if(!e.getProgramParameter(o,e.LINK_STATUS))throw Error(e.getProgramInfoLog(o)??"Programa WebGL inválido");return n=!0,!0},dispose(){e.deleteProgram(o)}}}let d={flutes:`${l}
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
}`,metal:s,silk:i};e.s(["ShaderCanvas",0,function({variant:e="metal",dark:l=!1,seed:s=0,fringe:i=0,interactive:u=!0,speed:m=.78,exposure:f=1,glassIntensity:x=1,glowIntensity:p=1,pixelRatio:h=1.25,pointerResponse:v=.12,onReady:g,onUnavailable:b,className:y}){let _=r.useRef(null),w=r.useRef({dark:l,seed:s,fringe:i,interactive:u,speed:m,exposure:f,glassIntensity:x,glowIntensity:p,pointerResponse:v,onReady:g,onUnavailable:b});return r.useEffect(()=>{w.current={dark:l,seed:s,fringe:i,interactive:u,speed:m,exposure:f,glassIntensity:x,glowIntensity:p,pointerResponse:v,onReady:g,onUnavailable:b}},[l,s,i,u,m,f,x,p,v,g,b]),r.useEffect(()=>{let a,r=_.current;if(!r)return;let t=r.parentElement??r,l=r.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!l)return void w.current.onUnavailable?.();try{a=c(l,o,d[e])}catch{w.current.onUnavailable?.();return}let s=a.program,i=a.dispose,u=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),l.STATIC_DRAW),l.enableVertexAttribArray(0),l.vertexAttribPointer(0,2,l.FLOAT,!1,0,0);let m=null;try{"metal"===e&&(m=function(e,a,r,t){let o=!!e.getExtension("EXT_color_buffer_float"),l=t(e,a,r),n=l.program,s=e.createTexture(),i=e.createFramebuffer(),c=()=>{e.deleteFramebuffer(i),e.deleteTexture(s),l.dispose()};if(!s||!i)throw c(),Error("Sin recursos para los reflejos");if(e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,o?e.RGBA16F:e.RGBA8,384,320,0,e.RGBA,o?e.HALF_FLOAT:e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE&&o&&(o=!1,e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,384,320,0,e.RGBA,e.UNSIGNED_BYTE,null)),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw c(),Error("Framebuffer inválido");e.bindFramebuffer(e.FRAMEBUFFER,null);let d=null;return{ready:l.ready,precision:o?"rgba16f":"rgba8",render(a,r,t,o){let[l,c,u]=d??=["u_res","u_time","u_seed"].map(a=>e.getUniformLocation(n,a));e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,i),e.viewport(0,0,384,320),e.useProgram(n),e.uniform2f(l,a,r),e.uniform1f(c,t),e.uniform1f(u,o),e.drawArrays(e.TRIANGLES,0,3),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,a,r),e.bindTexture(e.TEXTURE_2D,s)},dispose:c}}(l,o,n,c))}catch{l.deleteBuffer(u),i(),w.current.onUnavailable?.();return}let f=null,x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=Math.min(window.devicePixelRatio||1,Math.max(1,Math.min(2,h)));r.dataset.precision=m?.precision??"direct",r.dataset.pixelRatio=p.toFixed(2);let v=16.7,g=[],b=1,y=1,E=0,j=!1,R=20,T=0,N=!1,A=!1,F=0,q=0,k=null,M={x:-9999,y:-9999},C={x:-9999,y:-9999},S=()=>{let e=t.getBoundingClientRect();b=Math.max(1,Math.round(e.width*p)),y=Math.max(1,Math.round(e.height*p)),(r.width!==b||r.height!==y)&&(r.width=b,r.height=y,l.viewport(0,0,b,y)),k=null},L=o=>{if(N)return;try{if(!a.ready()||m&&!m.ready()){E||(E=window.requestAnimationFrame(e=>{E=0,L(e),U()}));return}}catch{N=!0,B(),m?.dispose(),l.deleteBuffer(u),i(),w.current.onUnavailable?.();return}let[n,c,d,h,v,g,_,j]=f??=["u_res","u_time","u_mouse","u_hover","u_seed","u_dark","u_fringe","u_material"].map(e=>l.getUniformLocation(s,e)),S=w.current,z=q?Math.max(0,(o-q)/1e3):0;q=o;let D=1-Math.exp(-z/Math.max(.01,S.pointerResponse));x||(R+=Math.min(z,.1)*Math.max(0,S.speed)),T+=Math.min(z,.1);let P=x?20:R,I=S.interactive&&M.x>-9e3;I&&F<.001?(C.x=M.x,C.y=M.y):I&&(C.x+=(M.x-C.x)*D,C.y+=(M.y-C.y)*D),F+=(!!I-F)*D,m?.render(b,y,P,S.seed),l.useProgram(s),l.uniform2f(n,b,y),l.uniform1f(v,S.seed),l.uniform1f(g,+!!S.dark),l.uniform1f(_,S.fringe),l.uniform3f(j,Math.max(0,S.exposure),Math.max(0,S.glassIntensity),Math.max(0,S.glowIntensity)),l.uniform1f(c,P),l.uniform1f(h,F);let G=I||"metal"===e||"mercury"===e;if(l.uniform2f(d,G?C.x:-9999,G?C.y:-9999),m&&T>2&&!k){let e=t.querySelector("[data-shader-occluder]")?.getBoundingClientRect(),a=t.getBoundingClientRect();e&&(k={x:Math.max(0,Math.ceil((e.left-a.left+20)*p)),y:Math.max(0,Math.ceil((a.bottom-e.bottom+20)*p)),width:Math.max(0,Math.floor((e.width-40)*p)),height:Math.max(0,Math.floor((e.height-40)*p))})}if(k&&T>2){let{x:e,y:a,width:r,height:t}=k;for(let[o,n,s,i]of(l.enable(l.SCISSOR_TEST),[[0,0,b,a],[0,a+t,b,y-a-t],[0,a,e,t],[e+r,a,b-e-r,t]]))l.scissor(o,n,Math.max(0,s),Math.max(0,i)),l.drawArrays(l.TRIANGLES,0,3);l.disable(l.SCISSOR_TEST)}else l.drawArrays(l.TRIANGLES,0,3);A||(A=!0,r.dataset.ready="true",S.onReady?.())},z=e=>{let a=q?e-q:0;a>0&&a<250&&(v+=(a-v)*.1,g.push(a),g.length>120&&g.shift()),L(e),E=window.requestAnimationFrame(z)},U=()=>{E||x||N||document.hidden||!j||(E=window.requestAnimationFrame(z))},B=()=>{E&&window.cancelAnimationFrame(E),E=0,q=0},D=e=>{let a=t.getBoundingClientRect();if(!(e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom)){M.x=-9999,M.y=-9999;return}M.x=(e.clientX-a.left)*p,M.y=(a.bottom-e.clientY)*p},P=()=>{M.x=-9999,M.y=-9999};x||(window.addEventListener("pointermove",D,{passive:!0}),document.addEventListener("pointerleave",P),window.addEventListener("blur",P));let I=new ResizeObserver(()=>{S(),(x||!j)&&L(performance.now())});I.observe(t);let G=new IntersectionObserver(([e])=>{(j=e.isIntersecting)?(A||L(performance.now()),U()):B()},{rootMargin:"80px"});G.observe(t);let O=()=>{document.hidden?B():(A||L(performance.now()),U())};document.addEventListener("visibilitychange",O);let $=()=>{N=!0,B(),r.dataset.ready="false",w.current.onUnavailable?.()};return r.addEventListener("webglcontextlost",$),S(),L(performance.now()),()=>{B(),I.disconnect(),G.disconnect(),window.removeEventListener("pointermove",D),document.removeEventListener("pointerleave",P),window.removeEventListener("blur",P),r.removeEventListener("webglcontextlost",$),document.removeEventListener("visibilitychange",O),r.dataset.ready="false",m?.dispose(),l.deleteBuffer(u),i()}},[e,h]),(0,a.jsx)("canvas",{ref:_,"aria-hidden":!0,className:(0,t.cn)("pointer-events-none absolute inset-0 size-full opacity-0 data-[ready=true]:opacity-100",y)})}],236752)},453391,408063,e=>{"use strict";var a=e.i(9420),r=e.i(884513),t=e.i(54375),o=e.i(519455),l=e.i(302747),n=e.i(784774),s=e.i(144808),i=e.i(376089);let c=(0,t.default)(()=>e.A(390164).then(e=>e.ChartPlot),{loadableGenerated:{modules:[988679]},ssr:!1,loading:()=>(0,a.jsx)(l.Skeleton,{className:"h-56 w-full"})});e.s(["ChartCard",0,function({spec:e}){let[t,l]=r.useState(!1),d=(0,i.valueFormatter)(e),u=e.series.length>1&&"donut"!==e.type,m=async()=>{try{await navigator.clipboard.writeText((0,i.tableText)(e)),s.toast.success("Tabla copiada")}catch{s.toast.error("No se pudo copiar la tabla")}};return(0,a.jsxs)("figure",{className:"flex w-full flex-col gap-3 rounded-xl border border-border bg-card p-4","aria-label":e.title,children:[(0,a.jsxs)("figcaption",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("span",{className:"text-14 font-medium text-foreground",children:e.title}),e.subtitle?(0,a.jsx)("span",{className:"text-12 text-muted-foreground",children:e.subtitle}):null]}),u?(0,a.jsx)("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 text-11 text-muted-foreground",children:e.series.map((e,r)=>(0,a.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,a.jsx)("span",{className:"size-2 rounded-xs bg-(--swatch)",style:{"--swatch":(0,i.seriesColor)(r)}}),e.name]},e.name))}):null,(0,i.hasData)(e)?(0,a.jsx)(c,{spec:e}):(0,a.jsx)("p",{className:"py-6 text-center text-13 text-muted-foreground",children:"Sin datos para graficar."}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(o.Button,{type:"button",variant:"ghost",size:"sm","aria-expanded":t,onClick:()=>l(e=>!e),children:t?"Ocultar datos":"Ver datos"}),t?(0,a.jsx)(o.Button,{type:"button",variant:"ghost",size:"sm",onClick:m,children:"Copiar"}):null]}),t?(0,a.jsx)("div",{className:"max-h-64 overflow-auto rounded-lg border border-border",children:(0,a.jsxs)(n.Table,{children:[(0,a.jsx)(n.TableHeader,{children:(0,a.jsxs)(n.TableRow,{children:[(0,a.jsx)(n.TableHead,{}),e.series.map(e=>(0,a.jsx)(n.TableHead,{className:"text-right",children:e.name},e.name))]})}),(0,a.jsx)(n.TableBody,{children:e.labels.map((r,t)=>(0,a.jsxs)(n.TableRow,{children:[(0,a.jsx)(n.TableCell,{children:r}),e.series.map(e=>(0,a.jsx)(n.TableCell,{className:"text-right",children:d(e.values[t]??0)},e.name))]},`${t}-${r}`))})]})}):null]})}],453391);var d=e.i(246594);function u({row:e}){return(0,a.jsxs)("li",{className:"flex flex-col gap-0.5 px-3 py-2.5",children:[(0,a.jsxs)("div",{className:"flex items-baseline justify-between gap-3",children:[e.href?(0,a.jsx)(d.default,{href:e.href,className:"min-w-0 truncate text-14 font-medium text-foreground underline-offset-2 hover:underline",children:e.title}):(0,a.jsx)("span",{className:"min-w-0 truncate text-14 font-medium",children:e.title}),e.subtitle?(0,a.jsx)("span",{className:"shrink-0 text-12 text-muted-foreground",children:e.subtitle}):null]}),e.fields.length>0?(0,a.jsx)("p",{className:"truncate text-12 text-muted-foreground",children:e.fields.map(e=>`${e.label}: ${e.value}`).join(" · ")}):null]})}e.s(["RecordsCard",0,function({data:e}){let[t,l]=r.useState(!1),{shown:n,hidden:s}=function(e,a=8){return{shown:e.slice(0,a),hidden:Math.max(0,e.length-a)}}(e.records),i=t?e.records:n,c=e.title??e.module.label;return 0===e.records.length?(0,a.jsx)("p",{className:"text-13-5 text-muted-foreground",children:"No encontré esos registros (puede que no existan o que no tengas acceso)."}):(0,a.jsxs)("section",{className:"flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card","aria-label":c,children:[(0,a.jsxs)("header",{className:"flex items-baseline justify-between gap-3 border-b border-border px-3 py-2.5",children:[(0,a.jsx)("span",{className:"min-w-0 truncate text-14 font-medium",children:c}),(0,a.jsxs)("span",{className:"shrink-0 text-12 text-muted-foreground",children:[e.module.label," · ",e.records.length]})]}),(0,a.jsx)("ul",{className:"divide-y divide-border",children:i.map(e=>(0,a.jsx)(u,{row:e},e.id))}),(0,a.jsxs)("footer",{className:"flex items-center justify-between gap-3 border-t border-border px-3 py-2",children:[s>0?(0,a.jsx)(o.Button,{type:"button",variant:"ghost",size:"sm","aria-expanded":t,onClick:()=>l(e=>!e),children:t?"Ver menos":`Ver las ${s} restantes`}):(0,a.jsx)("span",{}),e.module.href?(0,a.jsxs)(d.default,{href:e.module.href,className:"text-13 text-foreground underline-offset-2 hover:underline",children:["Ver todos en ",e.module.label]}):null]}),e.missing>0?(0,a.jsxs)("p",{className:"border-t border-border px-3 py-2 text-12 text-muted-foreground",children:[1===e.missing?"1 registro no se pudo mostrar":`${e.missing} registros no se pudieron mostrar`," (no existen o no tenés acceso)."]}):null]})}],408063)},376089,e=>{"use strict";var a=e.i(975157),r=e.i(825035);let t=r.z.object({name:r.z.string().trim().min(1).max(60),values:r.z.array(r.z.number().finite()).min(1).max(60)}),o=r.z.object({type:r.z.enum(["bar","line","area","donut"]),title:r.z.string().trim().min(1).max(120),subtitle:r.z.string().trim().max(200).optional(),labels:r.z.array(r.z.string().trim().min(1).max(60)).min(1).max(60),series:r.z.array(t).min(1).max(4),format:r.z.enum(["number","currency","percent"]).optional(),currency:r.z.string().trim().length(3).optional()}).superRefine((e,a)=>{for(let[r,t]of e.series.entries())t.values.length!==e.labels.length&&a.addIssue({code:"custom",path:["series",r,"values"],message:`La serie \xab${t.name}\xbb tiene ${t.values.length} valores y hay ${e.labels.length} etiquetas: tiene que haber un valor por etiqueta.`});"donut"===e.type&&(1!==e.series.length&&a.addIssue({code:"custom",path:["series"],message:"Una dona muestra una sola serie: las proporciones de un total."}),e.labels.length>12&&a.addIssue({code:"custom",path:["labels"],message:"Una dona admite hasta 12 porciones: agrupá las menores en «Otros»."}),e.series.some(e=>e.values.some(e=>e<0))&&a.addIssue({code:"custom",path:["series"],message:"Una dona no admite valores negativos: usá barras."}))}),l=["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)"],n=["var(--chart-1)","var(--chart-2)","var(--chart-3)","var(--chart-4)","var(--chart-5)","var(--primary)","var(--warning)","var(--destructive)"];function s(e){return"currency"===e.format?e=>(0,a.formatAmount)(e):"percent"===e.format?e=>`${e.toLocaleString("es-AR",{maximumFractionDigits:1})} %`:e=>e.toLocaleString("es-AR",{maximumFractionDigits:2})}e.s(["axisLabels",0,function(e,a=6){if(e.length<=a)return[...e];let r=(e.length-1)/(a-1);return Array.from({length:a},(a,t)=>e[Math.round(t*r)])},"chartOf",0,function(e){let a=o.safeParse(e);return a.success?a.data:null},"chartRows",0,function(e){return e.labels.map((a,r)=>{let t={label:a,date:new Date(2e3,0,1+r)};return e.series.forEach((e,a)=>{t[`s${a}`]=e.values[r]??0}),t})},"donutSlices",0,function(e){let a=e.series[0]?.values??[],r=a.reduce((e,a)=>e+a,0);return e.labels.map((e,r)=>({label:e,value:a[r]??0})).filter(e=>e.value>0).map((e,a)=>({...e,share:r>0?e.value/r:0,color:n[a%n.length]}))},"hasData",0,function(e){return e.series.some(e=>e.values.some(e=>0!==e))},"isChartOutput",0,function(e){let a=e&&"object"==typeof e?e.chart:null;return!!(a&&"object"==typeof a&&!0===a.shown)},"seriesColor",0,function(e){return l[e%l.length]},"tableText",0,function(e){let a=s(e),r=[["",...e.series.map(e=>e.name)].join("	")];return e.labels.forEach((t,o)=>{r.push([t,...e.series.map(e=>a(e.values[o]??0))].join("	"))}),r.join("\n")},"valueFormatter",0,s],376089)},714446,e=>{"use strict";var a=e.i(712467);let r={client:"/dashboard/clients",work:"/dashboard/works",billing:"/dashboard/billing",contact:"/dashboard/contacts"};e.s(["recordHref",0,function(e,t,o){let l="module_record"===e?o?`/dashboard/m/${encodeURIComponent(o)}`:null:r[e];return l?`${l}?${a.RECORD_PARAM}=${encodeURIComponent(t)}`:null},"standardRecordHref",0,function(e,t){return`${r[e]}?${a.RECORD_PARAM}=${encodeURIComponent(t)}`}])},712467,e=>{"use strict";e.s(["RECORD_FILE_MAX_BYTES",0,0x1900000,"RECORD_PARAM",0,"registro"])}]);

//# debugId=b6256370-b8af-f8d9-09c7-75814ebba290