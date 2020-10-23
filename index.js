class MyCustomElement extends HTMLElement {
    static get observedAttributes() {
        return ['attr1', 'attr2'];
    }
    shadowRoot;
    constructor() {
        super();
        console.log('inside constructor');
        const shadow = this.attachShadow({ mode: 'open' });
        const template = document.getElementById('my-template');
        shadow.appendChild(template.content.cloneNode(true));
        // const wrapper = document.createElement('div');
        // wrapper.innerText = 'Inner Div';
        // wrapper.setAttribute('class', 'center');
        // const style = document.createElement('style');
        // style.innerHTML = `
        // div {
        //     color: blue;
        // }
        // .center {
        //     text-align: center;
        //     font-size: initial;
        // }`;
        // shadow.appendChild(style);
        // shadow.appendChild(wrapper);
        this.shadowRoot = shadow;
    }
    connectedCallback() {
        console.log('element connected');
        elemRef = document.getElementById('elem1');
    }
    disconnectedCallback() {
        console.log('element disconnected');
    }
    attributeChangedCallback(name, oldValue, newValue) {
        console.log(newValue);
        console.log(`${name} changed from ${oldValue} to ${newValue}`);
        if (elemRef) {
            console.log(elemRef.prop1);
        }
    }
}

customElements.define('my-element', MyCustomElement);
let elemRef;

setTimeout(() => {
    elemRef.prop1 = { name: 'test' };
    elemRef.setAttribute('attr1', { name: 'test' });
    console.log(elemRef.shadowRoot);
}, 1000);

setTimeout(() => {
    elemRef.setAttribute('attr2', 'attribute2');
}, 2000);

// setTimeout(() => {
//     elemRef.remove();
// }, 3000);
