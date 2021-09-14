export function addToDo(text){
    return {
        type: 'ADD_TODO',
        payload: {
            id: Math.random(),
            name: text
        }
    }
}