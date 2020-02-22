import React from 'react'
import "./custom-button.styles.scss"
const CustomButton = ({children, signInWithGoogle, ...otherProps}) => (
    <button className={`${signInWithGoogle ? 'google-signin': ''} custom-button`} {...otherProps}>
    {children}
    </button>
) 
  


export default CustomButton;