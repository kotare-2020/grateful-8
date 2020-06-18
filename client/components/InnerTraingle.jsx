import React from 'react'

const InnerTraingle = props => {
    return (
        <>
        <svg height="220" width="220" class="content">
            <polygon points="10,10 110,210 210,10" class="triangle" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">Some more stuff to do</text>    
        </svg>
        </>
    )
}


export default InnerTraingle
