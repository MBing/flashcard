import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from './Card';

export const StackContainer = ({ stack: { title, cards } }) => (
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

const mapStateToProps = state => ({ stack: state.stack });

export const Stack = connect(mapStateToProps)(StackContainer);
