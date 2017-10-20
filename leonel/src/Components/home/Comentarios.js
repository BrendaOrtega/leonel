import React, { Component } from 'react';
import './Comentarios.css';
import Card from '../card/Card';
import FontAwesome from 'react-fontawesome';
import OwlCarousel from 'react-owl-carousel2';


class Comentarios extends Component {
    render() {
        const options = {
            items: 1,
            nav: false,
            rewind: true,
            autoplay: true,
            loop:true,

        };
        return (
            <div className="coment">
                <br />
                <div className="flex space">
                    <div className="com">
                        <FontAwesome name='check-circle' className='icon_about bot' size='3x'/>
                        <div>
                            <h4 className="text">FREE SHIPPING ON ALL ORDRES</h4>
                            <p className="parrafo">Get Free Shipping on all orders over $75 and free returns
                                to our UK returns centre! Items are dispatched from the
                                US and will arrive in 5-8 days.</p>
                        </div>

                    </div>
                    <div className="com border">
                        <FontAwesome name='check' className='icon_about bot' size='3x'/>
                        <div>
                            <h4 className="text">FREE SHIPPING ON ALL ORDRES</h4>
                            <p className="parrafo">Get Free Shipping on all orders over $75 and free returns
                                to our UK returns centre! Items are dispatched from the
                                US and will arrive in 5-8 days.</p>
                        </div>

                    </div>
                    <div className="com">
                        <FontAwesome name='chain' className='icon_about bot' size='3x'/>
                        <div>
                            <h4 className="text">FREE SHIPPING ON ALL ORDRES</h4>
                            <p className="parrafo">Get Free Shipping on all orders over $75 and free returns
                                to our UK returns centre! Items are dispatched from the
                                US and will arrive in 5-8 days.</p>
                        </div>
                    </div>
                </div>
                <div className="owl">
                    <OwlCarousel ref="car" options={options}  >
                        <div><img src="http://info7.blob.core.windows.net.optimalcdn.com/images/2016/12/16/plagio-artesanias-2.jpg" alt="The Last of us"/></div>
                        <div><img src="http://www.suchitotoelsalvador.com/sites/default/files/styles/banner_1300x600_/public/2016-06/artesanias-cajas.jpg?itok=o9ogaT07" alt="GTA V"/></div>
                        <div><img src="https://c1.staticflickr.com/4/3579/3305437230_72bd2ab1ae_b.jpg" alt="Mirror Edge"/></div>
                    </OwlCarousel>
                </div>
            </div>
        );
    }
}

export default Comentarios;

