import React from 'react';
import { shallow } from 'enzyme';
import { StackListContainer } from './StackList';
import { stacks } from '../data/fixtures';

const props = {
    stacks,
};

describe('StackList', () => {
    const stackList = shallow(<StackListContainer {...props} />);

    it('should render the correct number of Links', () => {
        expect(stackList.find('Link').length).toEqual(props.stacks.length);
    });
});
