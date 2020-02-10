const initialState = { time : new Date()};

function TimeFunc (state = initialState, action) {
    if (action.type === 'NEXTTIME') {
        return {
            ...state, ...action
        }
    }
    return state;
};

export default TimeFunc;