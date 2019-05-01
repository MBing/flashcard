import React from 'react';
import { shallow } from 'enzyme';
import { StackContainer } from './Stack';
import { stack } from '../data/fixtures';

const props = {
    stack,
};

describe('Stack', () => {
    const stack = shallow(<StackContainer {...props} />);
    it('should render the title', () => {
        expect(stack.find('h3').text()).toEqual(props.stack.title);
    });

    it('should render the home Link', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    });

    it('should render the correct number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    });
});
