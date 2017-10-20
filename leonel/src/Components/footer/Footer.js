import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';


class Footer extends Component {
    render() {
        return (
           <div className="footer">
                <div className="flex message">
                    <h3>Apoya el Arte, y compra hecho a mano!</h3>
                    <button>Explorar</button>
                </div>
               <hr className="hr"/>
               <div className="flex redes">
                   <span><FontAwesome name='facebook-square' className='icon_redes' size="2x"/></span>
                   <span><FontAwesome name='twitter-square' className='icon_redes' size="2x"/></span>
                   <span><FontAwesome name='google-plus-square' className='icon_redes' size="2x"/></span>
               </div>
            </div>
        );
    }
}

export default Footer;
/**
 * Created by brendaortega on 20/10/17.
 */
