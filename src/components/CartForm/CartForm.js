import React, { useState } from 'react'
import { animateScroll } from "react-scroll"
import "./cartform.css"
import FormInput from "../FormInput/FormInput"
 

const CartForm = ({getInfo, orderId}) => {

    const initialState = { fullname: "", telephone: "", email: ""}

    const [formData, setFormData] = useState(initialState)
    //let { fullname, telephone, email } = formData
    const [formError, setFormError] = useState(null)

    console.log(formError);
    const validation = {
        fullname: {
            regex: /^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i,
            error: "Ingrese su nombre completo"
        },
        telephone: {
            regex: /^((\(?\d{3}\)?[-. ]?\d{4})|(\(?\d{4}\)?[-. ]?\d{3})|(\(?\d{5}\)?[-. ]?\d{2}))[-. ]?\d{4}$/,
            error: "Ingrese un número válido para Argentina. Ej: (011) 4780-9032"
        },
        email: {
            regex: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/,
            error: "Ingrese una dirección de correo válida"
        }
    };
    const validate = (e, inputValue) => {
        const inputTarget = validation[e.target.name]; //property access with bracket notation para mantener el valor dinámico
        !inputTarget.regex.test(inputValue) ? setFormError({
            field_id: e.target.name,
            message: inputTarget.error
        }) : setFormError(null)
    }
    const valueHandler = (e) => {
        let newData = {
            ...formData,
        };
        newData[e.target.name] = e.target.value
        setFormData(newData)
        formError && validate(e, e.target.value) //valida al momento de escribir
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const button = document.querySelector(".form__submit");
        button.innerHTML = 'Confirmando <img class="loading" src="/images/greenloading.gif"}>'
        button.classList.add("loading-state")
        animateScroll.scrollToBottom({delay: 1000, smooth: "linear"})
        setTimeout(() => {
            !formError && getInfo(formData)
            button.innerHTML = 'Orden generada'
        }, 1000);
    }

    const inputs = [
        { name: "fullname", type: "text", placeholder: "Nombre completo"},
        { name: "telephone", type: "tel", placeholder: "(011) 4780-9032"},
        { name: "email", type: "email", placeholder: "Email"}
    ]
    
    console.log(formData)

    return (
        <React.Fragment>
            <h2 className="form__title">Complete sus datos</h2>
            <form onSubmit={submitHandler} className="form__form">
                { inputs.map((input) => {
                    return (
                        <FormInput key={input.name} name={input.name} type={input.type} placeholder={input.placeholder}
                               valueHandler={valueHandler} validate={validate} formError={formError} />
                    )
                })}
                <button className="cartview__button form__submit" 
                type="submit" disabled={orderId}>Generar orden de compra</button>
            </form>
        </React.Fragment>
    )
}

export default CartForm
