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
      text-decoratio
      text-decoration-color: color-mix(in oklab, var(--link-color) 50%, #00FFFF00 50%)
    }

    a:hover {
      --link-color: var(--link-hover-color);
    }
  `;

  render() {
    return html`
      <a href="${this.href}"><slot></slot></a>
    `
  }
}

window.customElements.define('styled-a', StyledAnchor)
