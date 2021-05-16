import React from 'react';

const Holding = ({ holding }) => {
    return(
        <article class="br2 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw5 ma4">
            <img src={holding.holdingimage} class="db w-100 br2 br--top" alt="Company logo."/>
            <div class="pa2 ph3-ns pb3-ns">
                <div class="dt w-100 mt1">
                <div class="dtc">
                    <h1 class="f5 f4-ns mv0">{holding.holdingname}</h1>
                </div>
                <div class="dtc tr">
                    <h2 class="f5 mv0">{holding.id}</h2>
                </div>
                </div>
                <p class="f6 lh-copy measure mt2 mid-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </article>
    )
}

export default Holding