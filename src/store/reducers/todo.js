const initialState = {
    list: [
        {
            id: 1,
            name: 'Primeiro item'
        },
        {
            id: 2,
            name: 'Segundo item'
        }
    ]
};

export default function reducer(state = initialState, actions) {
    switch (actions.type) {
        case 'ADD_TODO':
            return { ...state, list: [...state.list, actions.payload] };

        default:
            return state;
    }
}