import { LitElement, css, html } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MainContent extends LitElement {
  static get properties() {
    return {

    }
  }

  constructor() {
    super()
  }

  static styles = css`
    main {
      padding: var(--spacing);
      width: var(--content-width);
      max-width: 100%;
    }
  `;

  render() {
    return html`
      <main>
        <slot></slot>
      </main>
    `
  }
}

window.customElements.define('main-content', MainContent)
