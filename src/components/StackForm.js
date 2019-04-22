import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addStack } from '../actions';
import {
    FormControl,
    Form,
    FormGroup,
    Button,
    FormLabel,
} from 'react-bootstrap';

class StackFormContainer extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            cards: [],
        };
    }

    addCard() {
        const { cards } = this.state;

        cards.push({ id: cards.length, prompt: '', answer: '' });
        this.setState({ cards });
    }

    updateCard(event, index, part) {
        const { cards } = this.state;

        cards[index][part] = event.target.value;
        this.setState({ cards });
    }

    addStack() {
        this.props.addStack(this.state);
    }

    render() {
        return (
            <div>
                <Link to="/" className="link-home">
                    <h4>Home</h4>
                </Link>
                <h4>Create a new Stack</h4>
                <br />
                <Form inline>
                    <FormGroup>
                        <FormLabel>Title</FormLabel>{' '}
                        <FormControl
                            onChange={event =>
                                this.setState({ title: event.target.value })
                            }
                        />
                    </FormGroup>
                    {this.state.cards.map((card, index) => (
                        <div key={card.id}>
                            <br />
                            <FormGroup>
                                <FormLabel>Prompt:</FormLabel>
                                <FormControl
                                    onChange={event =>
                                        this.updateCard(event, index, 'prompt')
                                    }
                                />
                                <FormLabel>Answer:</FormLabel>
                                <FormControl
                                    onChange={event =>
                                        this.updateCard(event, index, 'answer')
                                    }
                                />
                            </FormGroup>
                        </div>
                    ))}
                </Form>
                <br />
                <Button onClick={() => this.addCard()}>Add Card</Button>
                <hr />
                <Button onClick={() => this.addStack()}>Add Stack</Button>
            </div>
        );
    }
}

export const StackForm = connect(
    null,
    { addStack }
)(StackFormContainer);
