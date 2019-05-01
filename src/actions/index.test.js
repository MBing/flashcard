import * as actions from './index';
import { stack, stacks } from '../data/fixtures';

describe('Actions', () => {
    it('should create an action to set the main stack', () => {
        const expectedAction = {
            type: actions.SET_STACK,
            stack,
        };

        expect(actions.setStack(stack)).toEqual(expectedAction);
    });

    it('should create an action to add the main stack', () => {
        const expectedAction = {
            type: actions.ADD_STACK,
            stack,
        };

        expect(actions.addStack(stack)).toEqual(expectedAction);
    });

    it('should create an action to load the main stacks', () => {
        const expectedAction = {
            type: actions.LOAD_STACKS,
            stacks,
        };

        expect(actions.loadStacks(stacks)).toEqual(expectedAction);
    });
});
