import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
    // use of shallow to get around the mandatory use of the store through 'connect'
    const app = shallow(<App />);

    it('should render the Flashcard title', () => {
        expect(app.find('h2').text()).toEqual('Flash Card');
    });

    it('should render the StackListContainer', () => {
        // TODO: this does not work with newer react-redux 6/7, so using 5
        expect(app.find('Connect(StackListContainer)').exists()).toBe(true);
    });

    it('should render a link to create a new stack', () => {
        expect(app.find('Link h4').text()).toEqual('Create a New Stack');
    });
});
