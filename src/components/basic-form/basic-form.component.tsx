import React from "react";
import "./basic-form.component.scss";
import { Formik, Field, Form } from "formik";
import { BasicFormInterface } from "../../interfaces/basic-form.interface";

const BasicFormComponent = () => {

    const initialValues: BasicFormInterface = {
      name: "",
      email: "",
      age: 0,
      phone: "",
    };

    return (
        <div className="basic-form">

            <h1 className="basic-form__title">Basic Form</h1>

            <Formik
                initialValues={initialValues }
                onSubmit={ async values => {
                    await new Promise(resolve => console.log(values))
                }}
            >
            
            <Form>

                <div className="basic-form__input-container">
                    <Field className="basic-form__input" id="name" name="name" placeholder="Name"/>
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <Field className="basic-form__input" id="email" name="email" placeholder="Email"/>
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <Field className="basic-form__input" id="age" name="age" placeholder="Age"/>
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <Field className="basic-form__input" id="phone" name="phone" placeholder="Phone"/>
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <button type="submit" className="basic-form__button">Enviar</button>

            </Form>
            
                
            </Formik>
        </div>
    )
}

export default BasicFormComponent;