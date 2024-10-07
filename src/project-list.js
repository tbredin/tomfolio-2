import { LitElement, css, html } from 'lit';
import { dataClients } from './data.js';

/**
 * A custom element that renders a list of projects, clients, or contacts
 */
export class ProjectList extends LitElement {
  render() {
    return html`
      <divided-section>
        <slot></slot>
        <styled-list .data="${dataClients}"></styled-list>
      </divided-section>
    `;
  }
}

window.customElements.define('project-list', ProjectList);