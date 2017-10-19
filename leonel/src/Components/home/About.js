/**
 * Created by brendaortega on 18/10/17.
 */
import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div >
                <div className="about">
                    <div className="cuadro">
                        <div className="img">
                            <p>Sobre nosotros</p>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="img">
                            <p>Sobre nosotros</p>
                        </div>
                    </div>
                    <div className="cuadro">
                        <div className="img">
                            <p>Sobre nosotros</p>
                        </div>
                    </div>
                </div>

                <div className="categorias">
                    <hr />
                    <h2>Categorías</h2>
                    <br />
                    <div className="box_cats">
                        <div className="cat">
                            <div className="cubierta">
                                <div className="etiqueta">
                                    <p>Mascara</p>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cubierta">
                                <div className="etiqueta">
                                    <p>Mascara</p>
                                </div>
                            </div>
                        </div>
                        <div className="cat">
                            <div className="cubierta">
                                <div className="etiqueta">
                                    <p>Mascara</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;/**
 * Created by brendaortega on 18/10/17.
 */
