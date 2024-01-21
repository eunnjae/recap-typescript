/**
 * Generic in Type
 */

type GenericSimpleType<T> = T;

const genericString: GenericSimpleType<string> = 'wonbin';
// 역시 자동유추 안 된다!
// const genericString2: GenericSimpleType = 'wonbin';

interface DoneState<T> {
    data:T[];
}

interface LoadingState{
    requestedAt: Date;
}
interface ErrorState{
    error: string;
}

type State<T> = DoneState<T> | LoadingState | ErrorState;

let state: State<string> = {
    data:['123','1234']
}

state = {
    requestedAt: new Date()
}

state = {
    error: 'error'
}

// default 가능!
type State2<T = string> = DoneState<T> | LoadingState | ErrorState;

let state2:State2 = {
    data:['123','456']
}