import React from 'react';
import { createRoot } from 'react-dom/client';
import GradientASCII from './GradientASCII.jsx';
import MagicBento from './MagicBento.jsx';
import Silk from './Silk.jsx';
import StarBorder from './StarBorder.jsx';
import './main.css';

const stage = document.querySelector(
  'section[data-hero-entry="true"] [data-hero-card="true"]'
)?.parentElement;
const dashboard = stage?.querySelector('.mk-app-mock [data-shader-occluder="true"]');
const frame = dashboard?.parentElement;

if (stage && dashboard && frame) {
  const silkHost = document.createElement('div');
  silkHost.className = 'korva-silk-layer';
  silkHost.setAttribute('aria-hidden', 'true');

  stage.classList.add('korva-silk-stage');
  stage.querySelector('[data-hero-card="true"]')?.classList.add('korva-dashboard-layer');
  frame.classList.add('korva-dashboard-frame');
  stage.insertBefore(silkHost, stage.firstChild);

  const svgNamespace = 'http://www.w3.org/2000/svg';
  const orbit = document.createElementNS(svgNamespace, 'svg');
  orbit.setAttribute('viewBox', '0 0 1294 718');
  orbit.setAttribute('preserveAspectRatio', 'none');
  orbit.setAttribute('aria-hidden', 'true');
  orbit.classList.add('korva-dashboard-orbit');

  for (const className of ['korva-orbit-glow', 'korva-orbit-runner']) {
    const stroke = document.createElementNS(svgNamespace, 'rect');
    stroke.setAttribute('x', '3.5');
    stroke.setAttribute('y', '3.5');
    stroke.setAttribute('width', '1287');
    stroke.setAttribute('height', '711');
    stroke.setAttribute('rx', '16.5');
    stroke.setAttribute('pathLength', '1000');
    stroke.setAttribute('fill', 'none');
    stroke.setAttribute('stroke-dasharray', '42 958');
    stroke.setAttribute('stroke-linecap', 'round');
    stroke.classList.add(className);
    orbit.appendChild(stroke);
  }

  frame.appendChild(orbit);

  createRoot(silkHost).render(
    <Silk
      color="#8d8a96"
      sheenColor="#ffffff"
      speed={5}
      scale={1}
      rotation={0}
      sheen={0.7}
      depth={0.7}
      glow={0.2}
      noiseIntensity={1}
      mouseInteraction
      clickRipple
      intro
      lightMode
    />
  );
}

const gradientColors = ['#1e3fd8', '#f6f8ff', '#a5d8ff', '#38bdf8'];

const mountGradientCard = (menuId, linkLabel) => {
  const menu = document.getElementById(menuId);
  const card = Array.from(menu?.querySelectorAll('a') ?? []).find(link =>
    link.textContent?.includes(linkLabel)
  );
  const visual = card?.querySelector(':scope > span:first-child');
  if (!card || !visual) return;

  const gradientHost = document.createElement('div');
  gradientHost.className = 'korva-gradient-ascii-host';
  gradientHost.setAttribute('aria-hidden', 'true');
  visual.insertBefore(gradientHost, visual.firstChild);
  visual.querySelector(':scope > img')?.classList.add('korva-gradient-ascii-image');
  visual.lastElementChild?.classList.add('korva-gradient-ascii-title');

  createRoot(gradientHost).render(
    <GradientASCII
      colors={gradientColors}
      shape="horizon"
      characters=" =+xX0S8#@"
      cellSize={18}
      density={0.8}
      mouseInteraction={false}
      clickEffect="none"
    />
  );
};

mountGradientCard('menu-productos', 'Ver soluciones');
mountGradientCard('menu-recursos', 'Ver los cursos');
mountGradientCard('menu-empresa', 'Ver el changelog');

const mountMagicBento = (label, columns, rowHeight) => {
  const section = document.querySelector(`section[aria-label="${label}"]`);
  const wrapper = section?.querySelector(':scope > div');
  const grid = wrapper?.classList.contains('grid') ? wrapper : wrapper?.querySelector(':scope > .grid');
  if (!grid || !grid.children.length) return;

  const items = Array.from(grid.children).map((card, index) => {
    const title = card.querySelector('h3')?.textContent?.trim();
    const description = card.querySelector('p')?.textContent?.trim() ?? '';
    const href = card instanceof HTMLAnchorElement ? card.getAttribute('href') : null;

    return {
      id: `${label}-${index}`,
      label: title ? undefined : 'Dato clave',
      title: title || description,
      description: title ? description : '',
      href: href || undefined
    };
  });

  const host = document.createElement('div');
  host.className = 'korva-magic-bento-host';
  host.style.gridColumn = '1 / -1';
  host.style.minWidth = '0';
  grid.replaceChildren(host);

  createRoot(host).render(
    <MagicBento
      items={items}
      columns={columns}
      rowHeight={rowHeight}
      gap={14}
      radius={20}
      theme="light"
      glowColor="59, 130, 246"
      textAutoHide={false}
      enableBorderGlow
      enableSpotlight
      spotlightRadius={240}
      clickEffect
      intro
    />
  );
};

mountMagicBento('Datos clave', 4, 132);
mountMagicBento('Cómo empezamos', 3, 150);
mountMagicBento('Soluciones por rubro', 4, 170);
mountMagicBento('Planes y precios en resumen', 3, 150);

const mountStarBorder = sectionLabel => {
  const anchor = document.querySelector(`section[aria-label="${sectionLabel}"] a[href="sales.html"], section[aria-label="${sectionLabel}"] a[href="pricing.html"]`);
  if (!(anchor instanceof HTMLAnchorElement)) return;

  const label = anchor.textContent?.trim();
  if (!label) return;

  anchor.classList.remove('h-11', 'px-7', 'rounded-xl', 'transition-transform', 'hover:opacity-95');
  anchor.classList.add('korva-star-border-link');

  createRoot(anchor).render(
    <StarBorder
      as="span"
      className="korva-star-border-button"
      color="#3b82f6"
      trailColor="#a5c8ff"
      duration={3.8}
      direction="clockwise"
      stars={1}
      trailLength={0.3}
      thickness={1.5}
      radius={12}
      glow={0.45}
      hover="lap"
      clickPulse
      theme="light"
      backgroundColor="#ffffff"
      textColor="#18181b"
      borderColor="rgba(24, 24, 27, 0.12)"
    >
      {label}
    </StarBorder>
  );
};

mountStarBorder('Cómo empezamos');
mountStarBorder('Planes y precios en resumen');
