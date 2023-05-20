import React from 'react'
import style from './Input.module.scss'

const myInput = function (props) {

    return(
        <input {...props}
            className={style.formfield}
        />
    )

}

export default myInput;