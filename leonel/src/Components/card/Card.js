import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="img_prod">

                </div>
                <div className="text_prod">
                    <h4>Adestra</h4>
                    <hr  className="line"/>
                </div>
            </div>
        );
    }
}

export default Card;
