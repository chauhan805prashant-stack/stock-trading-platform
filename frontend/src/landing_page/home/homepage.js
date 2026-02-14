import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';

import Openaccount from '../openaccount';
import Navbar from '../Navbar';
import Footer from '../footer';

function homepage() {
    return ( 
        <>
            <Navbar />
            <Awards />
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <Openaccount />
            <Footer />
        
        </>
     );
}

export default homepage;