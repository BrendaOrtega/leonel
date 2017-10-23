import React, { Component } from 'react';
import './Destacados.css';
import Card from '../card/Card';
import {Link} from 'react-router-dom';

class Destacados extends Component {
    render() {
        return (
            <div className="destacados">
                <h2 className="subtittle">Novedades</h2>
                <div className="flex">
                    <Card
                    link="/detail"
                    />
                    <Card
                        link="/detail"
                    />
                    <Card
                        link="/detail"
                    />
                    <Card
                        link="/detail"
                    />


                </div>
            </div>
        );
    }
}

export default Destacados;
