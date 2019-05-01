import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

const props = {
    card: {
        prompt: 'Card Prompt',
        answer: 'Card Answer',
    },
};

describe('Card', () => {
    const card = shallow(<Card {...props} />);

    it('should be hidden by default', () => {
        expect(card.state().isHidden).toBe(true);
        expect(
            card
                .find('.card-answer h4')
                .at(0)
                .hasClass('isHidden')
        ).toBe(true);
    });

    it('should render the card prompt with the props value', () => {
        expect(card.find('.card-prompt h4').text()).toBe(props.card.prompt);
    });

    it('should render the card answer with the props value', () => {
        expect(card.find('.card-answer h4').text()).toBe(props.card.answer);
    });

    describe('Click on the Card', () => {
        it('should be visible after clicking', () => {
            card.find('.card').simulate('click');
            expect(card.state().isHidden).toBe(false);
            expect(
                card
                    .find('.card-answer h4')
                    .at(0)
                    .hasClass('isHidden')
            ).toBe(false);
        });
    });
});
