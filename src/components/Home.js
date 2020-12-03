import React, { Component } from 'react';
import { Link as ScrollLink, Element, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { Link } from 'react-router-dom';

import Hero from './Hero';
import ScrollArrow from './ScrollArrow';

class Home extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function() {
            console.log("end", arguments);
        });
    }
    scrollToTop() {
        scroll.scrollToTop();
    }
    scrollTo(offset) {
        scroller.scrollTo("scroll-to-element", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
            offset: offset
        });
    }
    scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
            Events.scrollEvent.register("end", () => {
                resolve();
                Events.scrollEvent.remove("end");
            });

            scroller.scrollTo("scroll-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart"
            });
        });

        goToContainer.then(() =>
            scroller.scrollTo("scroll-container-second-element", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                containerId: "scroll-container",
                offset: 50
            })
        );
    }
    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        return (
            <main>
                <Hero />         
                <div className='home container'>
                    <div className='grid-row-2-1'>
                        <img
                            className='home-image'
                            src='http://localhost:5000/public/images/home-image-3.png'
                            alt='Kitchen 1'
                        />
                        <div className='home-text right'>
                            <div className='at-amada-image'>
                                <img
                                    src={'http://localhost:5000/public/images/atamada.png'}
                                    style={{
                                    width: '300px',
                                    // height: '166px',
                                    }}
                                    alt='At Amada'
                                />
                            </div>
                            {/* <h1 style={{marginTop: '0', fontFamily: 'Fidena'}}><span style={{fontFamily: 'Eras', color: '#555', fontWeight: 'normal'}}>At </span>amada</h1> */}
                            each project is managed from the beginning to the very last touch, with as much or as little input as you desire. This way you can let your creative ideas run wild and simply leave the burden on us.
                            Units are tailored to your unique space to maximise its potential, suit your needs and allow the heart of the home store even more unforgettable moments.
                            <br />
                            <br />
                            Every kitchen is designed and built specifically per client, so no two are ever the same. Bespoke means you don’t need to stick to what is ‘standard’. With thousands of colours and textures, your imagination becomes the limit.
                        </div>
                    </div>

                    <div className='grid-row-1-2'>
                        <p className='home-text left'>
                        With smaller businesses comes more attention to detail and easier quality control. Teaming up with smaller manufacturers across Europe allows us to drop our prices while retaining the quality.
                        <br /><br />
                        We’re a design company, so we don’t restrict you to a basic selection of colours, textures, and materials. Although it would make our job a whole lot easier, we believe that the home should reflect the people living in it, so each one should be given the freedom to do so.
                        <br /><br />
                        <Link to='/process'>Make it happen <span>{String.fromCharCode(8594)}</span></Link>
                        </p>
                        <img
                            className='home-image'
                            src='http://localhost:5000/public/images/home-image-2.png'
                            alt='Kitchen 1'
                        />
                    </div>
                </div>
                
            </main>
        )
    }
}

export default Home;