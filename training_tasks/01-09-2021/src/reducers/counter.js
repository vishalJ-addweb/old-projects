const initialCounter = 0;

const counterReducer = (state=initialCounter, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + 2;
        case 'DECREMENT':
            return state - 2;
        default:
            return state;
    }
}

export default counterReducer;