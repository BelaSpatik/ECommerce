import React, { useState } from 'react'
import "./cartform.css"

const CartForm = ({getInfo, orderId}) => {

    console.log(getInfo)

    const initialState = { fullname: "", telephone: "", email: ""}

    const [formData, setFormData] = useState(initialState)
    const { fullname, telephone, email } = formData
    const [formError, setFormError] = useState(null)

    /*
    const validation = [
        {input: "fullname", regex: "/^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i"},
        {input: "telephone", regex: "/^((\(?\d{3}\)?[-. ]?\d{4})|(\(?\d{4}\)?[-. ]?\d{3})|(\(?\d{5}\)?[-. ]?\d{2}))[-. ]?\d{4}$/"},
        {input: "email", regex: "/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/"}
    ]
    const error = [
        {field_id: "fullname", message: "Ingrese su nombre completo"},
        {field_id: "telephone", message: "Ingrese un número válido para Argentina"},
        {field_id: "email", message: "Ingrese una dirección de correo válida"}
    ]
    const validate = (e, inputValue) => { -> este e ya no lo reconoce. Me parece que es por el blur
        const inputTarget = validation.find(rule => rule.input === [e.target.id])
        const alert = error.find(alert => alert.field_id === [e.target.id])
        !inputTarget.regex.test(inputValue) ? setFormError(alert.message) : setFormError(null)
    }
    const valueHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value -> este funciona
        })
        formError && formError.field_id === "fullname" && validate(fullname)
        formError && formError.field_id === "telephone" && validate(telephone)
        formError && formError.field_id === "email" && validate(email)
    }*/

    const nameRegex = /^[a-zA-z]+ (.+\s+.*)|(.*\s+.+)[a-zA-z]+$/i
    const phoneRegex = /^((\(?\d{3}\)?[-. ]?\d{4})|(\(?\d{4}\)?[-. ]?\d{3})|(\(?\d{5}\)?[-. ]?\d{2}))[-. ]?\d{4}$/
    const emailRegex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/

    const validateName = (fullname) => {
        let nameError = {
            field_id: "fullname",
            message: "Ingrese su nombre completo",
        } 
        !nameRegex.test(fullname) ? setFormError(nameError) : setFormError(null)//(console.log("Name: Success!")
    }

    const validateTel = (telephone) => {
        let phoneError = {
            field_id: "telephone",
            message: "Ingrese un número válido para Argentina",
        } 
        !phoneRegex.test(telephone) ? setFormError(phoneError) : setFormError(null) //console.log("Phone: Success!")
    }

    const validateEmail = (email) => {
        let emailError = {
            field_id: "email",
            message: "Ingrese una dirección de correo válida",
        } 
        !emailRegex.test(email) ? setFormError(emailError) : setFormError(null) //console.log("Email: Success!")
    }

    const valueHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        formError && formError.field_id === "fullname" && validateName(e.target.value)
        formError && formError.field_id === "telephone" && validateTel(e.target.value)
        formError && formError.field_id === "email" && validateEmail(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        !formError && getInfo(formData)
    } 

    console.log("FORM ERROR", formError)
    

        /*
        const submitHandler = (e) => {
        e.preventDefault();
        setFormError(null);
        setTimeout(() => {
            if (!nameRegex.test(fullname)) {
                let error = {
                    field_id: "fullname",
                    message: "Ingrese su nombre completo",
                } 
                setFormError(error)
            } else if (!phoneRegex.test(telephone)) {
                let error = {
                    field_id: "fullname",
                    message: "Ingrese un número válido para Argentina",
                } 
                setFormError(error)
            }
        }, 1000)
         }*/
        
        //console.log("Form submitted")
    return (
        <React.Fragment>
            <h2 className="form__title">Complete sus datos</h2>
            <form onSubmit={submitHandler} className="form__form">
                <input onChange={valueHandler} onBlur={(e) => validateName(fullname)} className="form__input"
                    type="text" /*id="name"*/
                    name="fullname"
                    value={fullname}
                    placeholder="Nombre completo" />
                    { formError && formError.field_id === "fullname" ? <p>{formError.message}</p> : null }
                <input onChange={valueHandler} onBlur={() => validateTel(telephone)} className="form__input"
                    type="tel" /*id="telephone"*/
                    name="telephone"
                    value={telephone}
                    placeholder="(011) 4780-0000"
                    disabled={formError && formError.field_id === "fullname"} />
                    { formError && formError.field_id === "telephone" ? <p>{formError.message}</p> : null }                       
                <input onChange={valueHandler} onBlur={() => validateEmail(email)} className="form__input"
                    type="email" /*id="email"*/
                    name="email"
                    value={email}
                    placeholder="Email"
                    disabled={formError && formError.field_id !== "email" } />
                    { formError && formError.field_id === "email" ? <p>{formError.message}</p> : null }
                <button className="cartview__button form__submit" type="submit" disabled={orderId}
                >Generar orden de compra</button>
            </form>
        </React.Fragment>
    )
}

export default CartForm