import React, { Component } from 'react';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            isHidden: true,
        };
    }

    render() {
        const { prompt, answer } = this.props.card;
        return (
            <div
                className="card"
                onClick={() =>
                    this.setState({ isHidden: !this.state.isHidden })
                }
            >
                <div className="card-prompt">
                    <h4>{prompt}</h4>
                </div>
                <div className="card-answer">
                    <h4 className={this.state.isHidden ? ' isHidden' : ''}>
                        {answer}
                    </h4>
                </div>
            </div>
        );
    }
}

export { Card };
