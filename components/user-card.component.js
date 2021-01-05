class UserCardElement extends HTMLElement {
    set firstName(value){
        this.setAttribute('first-name',value)
    }

    get firstName(){
        return this._firstName
    }

    set lastName(value){
        this.setAttribute('last-name',value)
    }

    get lastName(){
        return this._lastName
    }

    set avatarURL(value){
        this.setAttribute('avatar-url',value)
    }

    get avatarURL(){
        return this._avatarURL
    }

    constructor() {
        super()
        this.attachShadow({mode : 'open'})
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
            <img src="">
            <slot name ="links"></slot>
            <h2></h2>
            <slot name ="description"></slot>
            `
    }

    connectedCallback() {
        this._firstName = this.getAttribute('first-name')
        this._lastName = this.getAttribute('last-name')
        this._avatarURL = this.getAttribute('avatar-url')  
        this.render()
    }

    render() {
        this.shadowRoot.querySelector('img').src = this._avatarURL
        this.shadowRoot.querySelector('h2').textContent = this._firstName + ' ' + this._lastName
    }

    static get observedAttributes() {
        return ['first-name', 'last-name', 'avatar-url']
    }

    attributeChangedCallback(name, oldVal, newVal){
        if (name == 'first-name'){
            this._firstName = newVal
        } else if (name == 'last-name'){
            this._lastName = newVal
        } else {
            this._avatarURL = newVal
        }
        this.render()
    }

}

window.customElements.define('user-card', UserCardElement)