import React, { Component } from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

const Card = ({link="/"}) => {

        return (
                    <div className="card">
                        <Link to={link}>
                            <div className="img_prod">

                            </div>
                            <div className="text_prod">
                                <h4>Adestra</h4>
                                <hr  className="line"/>
                            </div>
                        </Link>
                    </div>


        );
    }


export default Card;
