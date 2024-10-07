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
      border-bottom: 1px solid var(--accent-color);
      opacity: 0.25;
      margin: 0;
      position: absolute;
      bottom: 0;
      left: 0;
    }

    section {
      padding-top: var(--section-margin);
      padding-bottom: var(--section-margin);
      position: relative;
    }
  `;

  render() {
    return html`
      <section>
        <slot></slot>
        <hr/>
      </section>
    `
  }
}

window.customElements.define('divided-section', DividedSection)
