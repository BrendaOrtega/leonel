/**
 * Created by brendaortega on 18/10/17.
 */
import React, { Component } from 'react';
import './Intro.css';

class Intro extends Component {
    render() {
        return (
            <div className="intro">
                <div className="text_intro">
                    <div className="dark">
                        <h1>Artesanías Hidalgo</h1>
                        <p className="slogan">Un estilo, una cultura
                        </p>
                        <div className="box_intro">
                            <div className="liga">
                                <p>All</p>
                            </div>
                            <div className="liga">
                                <p>Máscaras</p>
                            </div>
                            <div className="liga">
                                <p>Artesanías</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;