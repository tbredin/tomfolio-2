import { LitElement, css, html } from 'lit';
import { dataContacts } from './data.js';

export class ContactList extends LitElement {
  render() {
    return html`
      <divided-section>
        <slot></slot>
        <styled-list .data="${dataContacts}"></styled-list>
      </divided-section>
    `;
  }
}

window.customElements.define('contact-list', ContactList);