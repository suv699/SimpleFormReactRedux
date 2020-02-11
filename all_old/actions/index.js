//todo reducer action
export const nextTime = time => {
    return {
        type: 'NEXTTIME',
        time
    }
};

export const CounterActionDecrement = function(count) {
    return {
        type: 'DECREMENT',
        count: --count
    }
}

export const CounterActionIncrement = function(count) {
    return {
        type: 'INCREMENT',
        count: ++count
    }
}