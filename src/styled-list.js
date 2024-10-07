import { LitElement, css, html } from 'lit';

/**
 * A custom element that renders a list of projects, clients, or contacts
 */
export class StyledList extends LitElement {
  static properties = {
    data: { type: Array }, // Allows data to be passed as a prop
    reorder: { type: Boolean, reflect: true }
  };

  constructor() {
    super();
    this.data = [];  // Default data is empty, can be passed in as a prop
    this.reorder = true;  // Alphabetical sorting by default
  }

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 var(--spacing);
    }

    li {
      display: block;
      margin: 0;
      font-size: var(--size-body);
      font-style: var(--style-body);
      font-weight: var(--weight-body);
      color: var(--site-color);
      padding-left: 0;
      margin-left: 1rem;
      position: relative;
    }

    .bullet {
      content: '';
      position: absolute;
      left: -1rem;
      top: 0.75rem;
      transform: translateY(-4px);
      width: 7px;
      height: 7px; 
      image-rendering: pixelated;
    }

    .award {
        transform: translateY(-1px);
        image-rendering: pixelated;
    }

    @media (prefers-color-scheme: light) {
      img {
        filter: brightness(87.5%);
      }
    }

    ::selection {
      background: var(--selected-text-bg);
      color: var(--selected-text-color);
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
            <img 
            class="bullet" 
            aria-hidden="true" 
            alt="+" 
            src="/src/assets/bullet.png" 
          />
          ${item.url || item.to
            ? html`<styled-a href="${item.url || item.to}">${item.title}</styled-a>`
            : html`<span>${item.title}</span>`}
          ${item.award ? html`<a href="${item.url || item.to}"><img 
            class="award" 
            title="View award won for ${item.title}" 
            aria-label="View award won for ${item.title}" 
            alt="View award won for ${item.title}" 
            src="/src/assets/award.png" 
          /></a>` : ''}
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

window.customElements.define('styled-list', StyledList);