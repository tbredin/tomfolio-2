import { LitElement, css, html } from 'lit'

/**
 * A divided section element
 *
 * @slot - This element has a slot
 * @csspart button - The button
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
    hr {
      width: 1rem;
      display: inline-block;
      border: 0 none;
      border-bottom: 4px double var(--accent-color);
    }

    section {
      padding-top: var(--spacing)
      padding-bottom: var(--spacing)
    }
  `;

  render() {
    return html`
      <section>
        <slot></slot>
        <br/>
      </section>
    `
  }
}

window.customElements.define('divided-section', DividedSection)
