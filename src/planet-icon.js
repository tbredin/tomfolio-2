import { LitElement, css, html } from 'lit'
import planetImg from './assets/planet.gif'

export class PlanetIcon extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    
    img {
      display: block;
      transition: filter 1s;
      will-change: filter, opacity;
      image-rendering: pixelated;
      padding: var(--spacing);
      z-index: 10;
      position: relative;
      margin-left: calc(-1.5 * var(--spacing));
      margin-bottom: calc(-0.5 * var(--spacing));
    }

    img:hover {
      filter: brightness(70%) sepia(100%) hue-rotate(-15deg);
    }

    img:focus {
      filter: none;
    }

    @media (prefers-color-scheme: light) {
      img {
        filter: brightness(50%) sepia(100%) hue-rotate(-135deg);
      }
      img:hover {
        filter: brightness(60%) sepia(100%) hue-rotate(-15deg);
      }
      img:focus {
        filter: brightness(0%);
      }
    }
  `;

  render() {
    return html`
      <a href="/" aria-label="Home">
        <img src="${planetImg}" alt="Animated pixel art icon of earth in front of some twinkling stars" aria-hidden="true" />
      </a>
    `
  }
}

window.customElements.define('planet-icon', PlanetIcon)
