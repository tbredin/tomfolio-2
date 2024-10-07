import { LitElement, css, html } from 'lit'

export class StyledAnchor extends LitElement {
  static get properties() {
    return {
      href: { type: String }  
    }
  }

  constructor() {
    super()
    this.href = '#';  // Default value for href
  }

  static styles = css`
    a {
      color: var(--link-color);
      text-decoration: underline;
      text-decoration-skip: ink;
    }

    a:hover {
      text-decoration: none;
      color: var(--link-hover-color);
    }
  `;

  render() {
    return html`
      <a href="${this.href}"><slot></slot></a>
    `
  }
}

window.customElements.define('styled-a', StyledAnchor)
