import React from 'react';
import { shallow } from 'enzyme';
import { StackFormContainer } from './StackForm';

const props = {
    addStack: jest.fn(),
};

describe('StackForm', () => {
    const stackForm = shallow(<StackFormContainer {...props} />);
    it('should render the a home Link', () => {
        expect(
            stackForm
                .find('h4')
                .at(0)
                .text()
        ).toEqual('Home');
    });

    it('should render the Form title', () => {
        expect(
            stackForm
                .find('h4')
                .at(1)
                .text()
        ).toEqual('Create a new Stack');
    });

    it('should render a Form component', () => {
        expect(stackForm.find('Form').exists()).toBe(true);
    });

    it('should render a button to add a new Card', () => {
        expect(
            stackForm
                .find('Button')
                .at(0)
                .props().children
        ).toEqual('Add Card');
    });

    it('should render a button to add a new Card', () => {
        expect(
            stackForm
                .find('Button')
                .at(1)
                .props().children
        ).toEqual('Add Stack');
    });

    describe('Update the Title', () => {
        const title = 'Change Title';
        beforeEach(() => {
            stackForm.find('FormControl').simulate('change', {
                target: {
                    value: title,
                },
            });
        });

        it('should update the title in state', () => {
            expect(stackForm.state().title).toEqual(title);
        });
    });

    describe('Add a new Card', () => {
        beforeEach(() => {
            stackForm
                .find('Button')
                .at(0)
                .simulate('click');
        });

        afterEach(() => {
            stackForm.setState({ cards: [] });
        });

        it('should add a new card to the state', () => {
            expect(stackForm.state().cards.length).toBe(1);
        });

        it('should render the prompt section', () => {
            expect(
                stackForm
                    .find('FormLabel')
                    .at(1)
                    .props().children
            ).toEqual('Prompt:');
        });

        it('should render the answer section', () => {
            expect(
                stackForm
                    .find('FormLabel')
                    .at(2)
                    .props().children
            ).toEqual('Answer:');
        });

        describe('Update the card prompt', () => {
            const card = 'Change Prompt';
            beforeEach(() => {
                stackForm
                    .find('FormControl')
                    .at(1)
                    .simulate('change', { target: { value: card } });
            });

            it('should update the prompt in the state', () => {
                expect(stackForm.state().cards[0].prompt).toBe(card);
            });
        });

        describe('Update the card answer', () => {
            const card = 'Change Answer';
            beforeEach(() => {
                stackForm
                    .find('FormControl')
                    .at(2)
                    .simulate('change', { target: { value: card } });
            });

            it('should update the prompt in the state', () => {
                expect(stackForm.state().cards[0].answer).toBe(card);
            });
        });
    });
});
