import Action from "./index";
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export type COUNTER_INCREMENT = { }

export function counterIncrement(): Action<COUNTER_INCREMENT> {
    return {
        type: COUNTER_INCREMENT,
        payload: {}
    }
}

export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export type COUNTER_DECREMENT = { }

export function counterDecrement(): Action<COUNTER_DECREMENT> {
    return {
        type: COUNTER_DECREMENT,
        payload: {}
    }
}

