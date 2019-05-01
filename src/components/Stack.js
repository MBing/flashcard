import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from './Card';

export class StackContainer extends Component {
    render() {
        const { title, cards } = this.props.stack;

        return (
            <div>
                <Link to="/" className="link-home">
                    <h4>Home</h4>
                </Link>
                <h3>{title}</h3>
                {cards.map(card => (
                    <Card card={card} key={card.id} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({ stack: state.stack });

export const Stack = connect(mapStateToProps)(StackContainer);
