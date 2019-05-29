import React from 'react'

export default props => (
    <input { ...props.input } className='formControl' placeholder={props.placeholder} 
        readOnly={props.readOnly} type={props.type || 'text'} />
)