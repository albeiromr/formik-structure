import React from "react";
import "./basic-form.component.scss";

const BasicFormComponent = () => {

    return (
        <div className="basic-form">

            <h1 className="basic-form__title">Basic Form</h1>

            <form className="basic-form__form">

                <div className="basic-form__input-container">
                    <input className="basic-form__input" type="text" placeholder="Name" />
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <input className="basic-form__input" type="text" placeholder="Email" />
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <input className="basic-form__input" type="text" placeholder="Age" />
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="basic-form__input-container">
                    <input className="basic-form__input" type="text" placeholder="Phone" />
                    <p className="basic-form__error-message">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>

                <button type="submit" className="basic-form__button">Enviar</button>

            </form>
        </div>
    )
}

export default BasicFormComponent;