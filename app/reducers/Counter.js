let initialCount = {count: 0};

export default function Counter(state = initialCount, action) {
    switch(action.type){
        case 'DECREMENT':
            return { ...state, ...action};
        case 'INCREMENT': 
            return { ...state, ...action};

        default: return state;
    } 
}
// export default Counter;