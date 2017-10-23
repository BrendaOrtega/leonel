import React, { Component } from 'react';
import './Detail.css';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Card extends Component {
    render() {
        return (

            <div className="detalle">
                <Link to="/">
                    <span><FontAwesome name='home' className='icon_home' size="3x"/></span>
                </Link>
                <div className="tarjeta">
                    <h2>Canasta de hoja</h2>
                   <span>Las ensenanzas de una generación</span>
                   <p>Enjoyed minutes related as at on on. Is fanny dried as often me.
                       Goodness as reserved raptures to mistaken steepest oh screened he.
                       Gravity he mr sixteen esteems.</p>
                   <p>Enjoyed minutes related as at on on. Is fanny dried as often me.
                       Goodness as reserved raptures to mistaken steepest oh screened he.
                       Gravity he mr sixteen esteems.</p>
                   <h4>Why?</h4>
                   <p>Concept</p>
                   <p>Concept</p>
                   <div className="cost">
                       <span>Costo: $300 m/n</span>
                       <button className="btn_buy">Comprar</button>
                   </div>
               </div>
            </div>


        );
    }
}

export default Card;
