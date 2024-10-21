import { LitElement, css, html } from 'lit'
import sparkleImg from './assets/sparkle.gif'

export class SparkleIcon extends LitElement {
  static styles = css`
    img {
      width: var(--sparkle-w);
      aspect-ratio: 70/79;
      display: block;
      margin: var(--spacing);
      top: -0.1rem;
      transition: filter 1s;
      filter: brightness(60%) sepia(100%) hue-rotate(-135deg);
      will-change: filter, opacity;
      image-rendering: pixelated;
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
      <img src="${sparkleImg}" aria-hidden="true" />
    `
  }
}

window.customElements.define('sparkle-icon', SparkleIcon)
