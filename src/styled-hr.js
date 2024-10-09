import { LitElement, css, html } from 'lit'
import {classMap} from 'lit/directives/class-map.js';

export class StyledHr extends LitElement {
  static get properties() {
    return {
      inline: { type: Boolean }  
    }
  }


  static styles = css`
    hr {
      width: 1rem;
      display: inline-block;
      border: 0 none;
      border-bottom: 1px solid var(--accent-color);
      opacity: 0.25;
      margin: 0;
    }

    .inline {
      margin-top: var(--spacing);
      margin-bottom: calc(var(--spacing) / 2);
      width: 0.25rem
    }
  `;

  render() {
    const classes = { inline: this.inline };

    return html`<hr class="${classMap(classes)}" />`
  }
}

window.customElements.define('styled-hr', StyledHr)
