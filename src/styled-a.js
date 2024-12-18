import { LitElement, css, html } from 'lit'

export class StyledAnchor extends LitElement {
  static get properties() {
    return {
      href: { type: String }  
    }
  }

  constructor() {
    super()
    this.href = '#';  
  }

  static styles = css`
    a {
      color: var(--link-color);
      text-decoration: underline;
      text-decoration-skip: ink;
      text-decoration-color: color-mix(in hsl, var(--link-color) 75%, transparent)
    }

    a:hover {
      --link-color: var(--link-hover-color);
    }

    @media print {
      a::after {
        content: " (" attr(href) ")";
        font-size: 80%;
      }
    }
  `;

  render() {
    return html`<a href="${this.href}"><slot></slot></a>`
  }
}

window.customElements.define('styled-a', StyledAnchor)
