import React from 'react';
import Awards from './Awards';
import stats from './stats';
import pricing from './pricing';
import education from './education';

import openaccount from '../openaccount';
import Navbar from '../Navbar';
import footer from '../footer';

function homepage() {
    return ( 
        <>
            <Navbar />
            <Awards />
            <stats />
            <pricing />
            <education />
            <openaccount />
            <footer />
        
        </>
     );
}

export default homepage;