import React from 'react'



import './bouton-custom.styles.scss'



const BoutonCustom = ({ children, ...otherProps}) => (

  <button className='bouton-custom' {...otherProps}>

    {children}

  </button>

)



export default BoutonCustom