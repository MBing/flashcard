import rootReducer from './index';
import * as actions from '../actions';
import { stack, stacks } from '../data/fixtures';

describe('Root Reducer', () => {
    it('should return the initial state', () => {
        const expectedState = {
            stack: {},
            stacks: [],
        };
        expect(rootReducer({}, {})).toEqual(expectedState);
    });

    it('should set the main stack', () => {
        const expectedState = {
            stack,
            stacks: [],
        };
        expect(rootReducer({}, { type: actions.SET_STACK, stack })).toEqual(
            expectedState
        );
    });

    it('should add the main stack', () => {
        const expectedState = {
            stack: {},
            stacks: [stack],
        };
        expect(rootReducer({}, { type: actions.ADD_STACK, stack })).toEqual(
            expectedState
        );
    });

    it('should load the main stacks', () => {
        const expectedState = {
            stack: {},
            stacks,
        };
        expect(rootReducer({}, { type: actions.LOAD_STACKS, stacks })).toEqual(
            expectedState
        );
    });
});
