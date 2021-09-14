const initialState = {
  list: [
    {
      id: 1,
      name: "Primeiro item",
    },
    {
      id: 2,
      name: "Segundo item",
    },
  ],
};

export default function reducer(state = initialState, action){
    switch (action.type){
        case 'ADD_TODO':
            return {...state, list: [...state.list, action.payload] }; // necessário puxar os valores de state novamente por conta da imutabilidade (assim será sempre criado o objeto novamente)
        default:
            return state;
    }
}