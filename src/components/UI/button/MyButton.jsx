import React from "react";
import style from './Button.module.scss'

const MyButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={style.btn}>
            {children}
        </button>
    );
}
 
export default MyButton;