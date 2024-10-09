import { LitElement, css, html } from 'lit';
import { dataClients } from './data.js';

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