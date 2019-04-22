import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../actions';

import stacks from '../data/stacks.json';

class StacklistContainer extends Component {
    componentDidMount() {
        if (!Boolean(this.props.stacks.length)) {
            this.props.loadStacks(stacks);
        }
    }

    render() {
        return (
            <div>
                {this.props.stacks.map(stack => (
                    <Link
                        to="/stack"
                        key={stack.id}
                        onClick={() => this.props.setStack(stack)}
                    >
                        <h4>{stack.title}</h4>
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    stacks: state.stacks,
});

export const Stacklist = connect(
    mapStateToProps,
    { setStack, loadStacks }
)(StacklistContainer);
