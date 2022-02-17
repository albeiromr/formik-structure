import "./basic-form.component.scss";
import { Formik } from "formik";
import { FormValidationService } from "../../services/forms/form-validation.service";
import { basicFormInitialValues } from "../../services/forms/initial-values.service";
import { setForm } from "../../redux/basic-form/basic-form.reducer";
import { useAppDispatch } from "../../redux/hooks";

const BasicFormComponent = () => {

    const dispatch = useAppDispatch();

    return (
        <div className="basic-form">
            <Formik
                initialValues={basicFormInitialValues}
                onSubmit={ (values) => { dispatch(setForm(values)) }} 
                validationSchema={FormValidationService.basicForm}
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
                            {errors.email && touched.email && <p className="basic-form__error-message">{errors.email}</p>}
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
                            {errors.age && touched.age && <p className="basic-form__error-message">{errors.age}</p>}
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
                            {errors.phone && touched.phone && <p className="basic-form__error-message">{errors.phone}</p>}
                        </div>

                        <button type="submit" className="basic-form__button">Enviar</button>

                    </form>
                )}
                
            </Formik>
        </div>
    )
}

export default BasicFormComponent;