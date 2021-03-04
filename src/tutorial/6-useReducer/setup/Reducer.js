// reducer function
export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Person Added',
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter a value',
        }
    }
    if (action.type === 'CLOSE_MODAL') {
        return { ...state, isModalOpen: false }
    }
    if (action.type === 'REMOVE_PERSON') {
        const newPeople = state.people.filter(person => { return person.id !== action.payload })
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Person Removed',
        }
    }
    throw new Error('No matching action type');
}
