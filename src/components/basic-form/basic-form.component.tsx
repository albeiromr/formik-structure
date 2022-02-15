import React from "react";
import "./basic-form.component.scss";
import { Formik, Field, Form } from "formik";
import { BasicFormInterface } from "../../interfaces/basic-form.interface";
import * as yup from 'yup';

const initialValues: BasicFormInterface = {
    name: "",
    email: "",
    age: 0,
    phone: ""
}

const validationSchema  = yup.object({
    name: yup.string()
    .max(20, "el nombre debe ser maximo de 20 caracteres")
    .min(2, "el nombre debe ser mínimo de 2 caracteres")
    .required("el nombre es requerido")
})

const BasicFormComponent = () => {

    return (
        <div className="basic-form">
            <Formik
                initialValues={initialValues}
                onSubmit={ async (values, actions) => {
                    await new Promise(resolve => console.log(values, actions))
                }} 
                validationSchema={validationSchema}
            >
                {({handleBlur, handleChange, handleSubmit,errors, touched}) => (
                    <form onSubmit={handleSubmit}>

                        <div className="basic-form__input-container">
                            <input 
                                type="text"
                                className="basic-form__input" 
                                id="name" 
                                name="name" 
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name && <p className="basic-form__error-message">{errors.name}</p>}
                        </div>

                        <div className="basic-form__input-container">
                            <input 
                                type="text"
                                className="basic-form__input" 
                                id="email" 
                                name="email" 
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>

                        <div className="basic-form__input-container">
                            <input 
                                type="number"
                                className="basic-form__input" 
                                id="age" 
                                name="age" 
                                placeholder="Age"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>

                        <div className="basic-form__input-container">
                            <input 
                                type="text"
                                className="basic-form__input" 
                                id="phone" 
                                name="phone" 
                                placeholder="Phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur.</p>
                        </div>

                        <button type="submit" className="basic-form__button">Enviar</button>

                    </form>
                )}
                
            </Formik>
        </div>
    )
}

export default BasicFormComponent;