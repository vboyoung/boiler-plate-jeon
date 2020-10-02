import React from 'react'
import './Button.css'

function Button(props) {
    
    const { varient = 'primary', children , ...rest } = props
    return (
        <div>
            <button className={`button ${varient}`}>
                {children} 
            </button>
        </div>
    )
}

export default Button
