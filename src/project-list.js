import { LitElement, css, html } from 'lit';
import { dataClients } from './data.js';  // Import your data directly

/**
 * A custom element that renders a list of projects, clients, or contacts
 */
export class ProjectList extends LitElement {
  static properties = {
    reorder: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.data = dataClients;  // Use the imported data directly
    this.reorder = false;
  }

  static styles = css`
    ul {
      padding: var(--spacing, 1rem) 0;
      list-style: none;
      margin: 0;
    }

    li {
      display: block;
      margin: 0 0 0.5rem;
      font-size: var(--size-body);
      font-style: var(--style-body);
      font-weight: var(--weight-body);
      color: var(--site-color);
      padding-left: 1rem;
    }

    li::before {
      content: "♦";
      color: var(--accent-color);
      position: absolute;
      margin-left: -1rem;
    }

    a {
      text-decoration: none;
      color: var(--link-color);
    }

    a:hover {
      text-decoration: underline;
    }
  `;

  /**
   * Reorders the items alphabetically if reorder is true
   */
  getListItems() {
    const items = this.reorder
      ? [...this.data].sort((a, b) => a.title.localeCompare(b.title))
      : this.data;

    return items.map(
      (item) =>
        html`<li>
          ${item.url || item.to
            ? html`<styled-a href="${item.url || item.to}">${item.title}</styled-a>`
            : html`<span>${item.title}</span>`}
          ${item.award ? html`<span class="award">🏆</span>` : ''}
        </li>`
    );
  }

  render() {
    return html`
      <ul>
        ${this.getListItems()}
      </ul>
    `;
  }
}

window.customElements.define('project-list', ProjectList);
