const initialStore = {
    number: 1,
    boolean: false,
};


const setRandomNumber = (state) => {
    const newNumber = Math.floor(Math.random() * 100);
    return {...state, number: newNumber}
};

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SET_RANDOM_NUMBER':
            return setRandomNumber();
        case 'SET_NUMBER':
            return { ...state, number: action.payload };

        default:
            return state;
    }
};

export default reducer;
