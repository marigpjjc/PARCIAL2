import { PlantActions } from "../flux/Actions";
import { State, store } from "../flux/Store";

class plantForm extends HTMLElement {
    connectedCallback() {
        store.subscribe();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        const name = this.getAttribute('title')
        const cientificName = this.getAttribute('cientificName') 
        const image = this.getAttribute('image');
        const description = this.getAttribute('description');

        this.shadowRoot.innerHTML = `
            <style>
                .product-card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    text-align: center;
                    max-width: 300px;
                    margin: 16px auto;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .product-image {
                    max-width: 100%;
                    height: auto;
                }
                .product-title {
                    font-size: 1.5em;
                    color: #333;
                }
                .product-price {
                    font-size: 1.2em;
                    color:rgb(255, 0, 0);
                }
                button {
                    background-color:rgb(255, 242, 0);
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    margin-top: 10px;
                    border-radius: 4px;
                    cursor: pointer;
                }
            </style>

            <div class="product-card">
                <img src="${image}" class="product-image" />
                <cite contenteditable="true">${name}</cite>
                <cite contenteditable="true">${cientificName}</cite>
                <cite contenteditable="true">${description}</cite>
                <button id="modify-plant">modify</button>
            </div>
        `;

    }
}

export default plantForm;