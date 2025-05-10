import { PlantActions } from '../flux/Actions';
import { Plant, store } from '../flux/Store';
import { getPlants } from '../services/Plants';

class Root extends HTMLElement {
    plants: Plant[] = []; 
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        store.load();
        await PlantActions.getPlants();
        this.render();
    }

    async render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `
            <div>
                <ul id="plant-form"></ul>
                <plant-card></plant-card>
            </div>
        `;

        const plantModify = this.shadowRoot.querySelector('#plant-form');
        store.getState().plant.forEach((plants: Plant) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <plant-form name="${plants.name}" cientificName="${plants.cientificName}" image="${plants.image}"></plant-form>
            `;
            plantModify?.appendChild(li);
        });
    }
}

export default Root;