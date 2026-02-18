import React from 'react';

function pricing() {
    return ( 
        <div className='container mb-5'>

            <div className='row'>

                <div className='col-4'>

                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>

                    <p>Thats why 1.3+ crorecustomers trust zerodha with 3.5+ lakh crores worth of equity investments</p>

                    <a href='' classname='mx-5' style={{textDecoration:"none"}}>See Pricing<i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                </div>

                <div className='col-2'></div>

                <div className='col-6'>

                    <div className='row text-center'>

                        <div className='col p-3 border'>

                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"> 0 </i></h1>

                            <p>Free equity delivery and <br/>direct mutual funds</p>

                        </div>

                        <div className='col p-3 border'>

                            <h1 className='mb-3'><i class="fa fa-inr" aria-hidden="true"> 20 </i></h1>

                            <p>Intraday and f&o</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default pricing;