import { AppDispatcher, Action } from './Dispatcher';

export type State = {
    plant: Plant[]
};

type Listener = (state: State) => void;

export type Plant = {
name:'string';
cientificName:'string';
image:'string';
}


class Store {
    private _myState: State = {
        plant: []
    }

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    subscribe (){
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return this._myState;
    }

    load() {
        return{};
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case "UNO":
                break;
        }
    }

    private _emitChange(): void {
        for (const listener of this._listeners) { }
    }

    unsubscribe(listener: Listener): void { }
}

export const store = new Store();