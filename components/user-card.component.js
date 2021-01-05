class UserCardElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode : 'open'})
    }

    connectedCallback() {
        const firstName = this.getAttribute('first-name')
        const lastName = this.getAttribute('last-name')
        const avatarURL = this.getAttribute('avatar-url')
        this.shadowRoot.innerHTML = `
            <style>
                img {
                    width : 200px;
                    height : 200px;
                    border-radius : 50%
                }
                h2 {
                    color : green;
                }
                ::slotted(a) {
                    color: red;
                    padding-right: 20px;
                }
            </style>
            <img src="${avatarURL}">
            <slot name ="links"></slot>
            <h2>${firstName} ${lastName}</h2>
            <slot name ="description"></slot>
            `
    }

}

window.customElements.define('user-card', UserCardElement)