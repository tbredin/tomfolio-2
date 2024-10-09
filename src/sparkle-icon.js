import { LitElement, css, html } from 'lit'

export class SparkleIcon extends LitElement {
  static styles = css`
    img {
      width: var(--sparkle-w);
      aspect-ratio: 70/79;
      display: block;
      margin: var(--spacing);
      transition: filter 1s;
      filter: brightness(60%) sepia(100%) hue-rotate(-135deg);
      will-change: filter, opacity;
      image-rendering: pixelated;
      position: absik;
      bottom: var(--spacing);
      right: var(--spacing);
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
      <img src="/sparkle.gif" aria-hidden="true" />
    `
  }
}

window.customElements.define('sparkle-icon', SparkleIcon)
