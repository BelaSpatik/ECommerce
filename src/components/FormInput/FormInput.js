import React from 'react'

const FormInput = ({name, type, placeholder, valueHandler, validate, formError}) => {

    const errorTarget =  formError && formError.field_id === name
    const errorDisable = formError && formError.field_id !== name

    return (
        <React.Fragment>
        <input type={type}
               name={name}
               placeholder={placeholder} 
               disabled={errorDisable}
               className={ errorTarget ? "form__input error__input" : "form__input" }
               onChange={valueHandler} 
               onBlur={(e) => validate(e, e.target.value)} />
        { errorTarget ? <span>{formError.message}</span> : null }
        </React.Fragment>
    )
}

export default FormInput