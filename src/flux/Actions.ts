import { AppDispatcher, Dispatcher } from "../flux/Dispatcher";
import { getPlants } from "../services/Plants";


export const PlantsActiontypes = {
    GET_PLANT: 'GET_PLANT'
}

export const PlantActions = {
getPlants: async () => {
    const plants = await getPlants();
    AppDispatcher.dispatch({
        type: PlantsActiontypes.GET_PLANT,
        playload: plants,
    })
}}
