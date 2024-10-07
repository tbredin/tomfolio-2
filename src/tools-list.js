import { LitElement, css, html } from 'lit';
import { dataTools } from './data.js';

/**
 * A custom element that renders a list of projects, clients, or contacts
 */
export class ToolsList extends LitElement {
  render() {
    return html`
      <divided-section>
        <slot></slot>
        <styled-list .data="${dataTools}"></styled-list>
      </divided-section>
    `;
  }
}

window.customElements.define('tools-list', ToolsList);