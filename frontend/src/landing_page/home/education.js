import React from 'react';

function education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='images/education.svg' style={{width:'70%'}} />
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>

                    <p>varsity,the largest stock market education book in the world covering everything from basic to advance in trading</p>

                    <a href='' style={{textDecoration:'none'}}>versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                    <p className='mt-5'>Trading Q&A,the most active trading and investment community in india for all your market related queries</p>

                    <a href='' style={{textDecoration:'none'}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default education;