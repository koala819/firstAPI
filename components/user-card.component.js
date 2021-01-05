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
            </style>
            <img src="${avatarURL}">
            <h2>${firstName} ${lastName}</h2>
            `
    }

}

window.customElements.define('user-card', UserCardElement)