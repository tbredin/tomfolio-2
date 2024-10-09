import { LitElement, css, html } from 'lit'

/**
 * A divided section element
 *
 * @slot - This element has a slot
 */
export class DividedSection extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super()
  }

  static styles = css`
    section {
      padding-top: var(--section-margin);
      padding-bottom: var(--section-margin);
      position: relative;
      page-break-inside: avoid;
    }
    styled-hr {
      position: absolute;
      bottom: -0.375rem;
      left: 0;
    }
  `;

  render() {
    return html`
      <section>
        <slot></slot>
        <styled-hr></styled-hr>
      </section>
    `
  }
}

window.customElements.define('divided-section', DividedSection)
