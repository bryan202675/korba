import React from 'react';
import { createRoot } from 'react-dom/client';
import GradientASCII from './GradientASCII.jsx';
import Silk from './Silk.jsx';
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
