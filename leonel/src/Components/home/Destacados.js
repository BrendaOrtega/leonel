import React, { Component } from 'react';
import './Destacados.css';
import Card from '../card/Card';

class Destacados extends Component {
    render() {
        return (
            <div className="destacados">
                <h2 className="subtittle">Novedades</h2>
                <div className="flex">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        );
    }
}

export default Destacados;
