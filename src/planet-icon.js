import { LitElement, css, html } from 'lit'

export class PlanetIcon extends LitElement {
  static styles = css`
    img {
      display: block;
      margin: var(--spacing);
      transition: filter 1s;
      will-change: filter, opacity;
      image-rendering: pixelated;
      margin: 2rem 0.3rem -3rem;
      padding: 2rem;
      z-index: 10;
      position: relative;
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
      <img src="src/assets/planet.gif" aria-hidden="true" />
    `
  }
}

window.customElements.define('planet-icon', PlanetIcon)
