import "./basic-form.component.scss";
import { Formik, useFormik } from "formik";
import { FormValidationService } from "../../services/forms/form-validation.service";
import { basicFormInitialValues } from "../../services/forms/initial-values.service";
import { setForm } from "../../redux/basic-form/basic-form.reducer";
import { useAppDispatch } from "../../redux/hooks";

const BasicFormComponent = () => {

    const dispatch = useAppDispatch();

    const form = useFormik({
        initialValues: basicFormInitialValues,
        onSubmit: (values) => {  
            dispatch(setForm(values));
        },
        validationSchema: FormValidationService.basicForm
    })

    const handleReset = () => {
        form.resetForm();
    }

    return (
        <div className="basic-form">

            <form onSubmit={form.handleSubmit}>

                <div className="basic-form__input-container">
                    <input
                        type="text"
                        className="basic-form__input"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.name && form.touched.name && <p className="basic-form__error-message">{form.errors.name}</p>}
                </div>

                <div className="basic-form__input-container">
                    <input 
                        type="text"
                        className="basic-form__input" 
                        id="email" 
                        name="email" 
                        placeholder="Email"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.email && form.touched.email && <p className="basic-form__error-message">{form.errors.email}</p>}
                </div>

                <div className="basic-form__input-container">
                    <input 
                        type="number"
                        className="basic-form__input" 
                        id="age" 
                        name="age" 
                        placeholder="Age"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.age && form.touched.age && <p className="basic-form__error-message">{form.errors.age}</p>}
                </div>

                <div className="basic-form__input-container">
                    <input 
                        type="text"
                        className="basic-form__input" 
                        id="phone" 
                        name="phone" 
                        placeholder="Phone"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.phone && form.touched.phone && <p className="basic-form__error-message">{form.errors.phone}</p>}
                </div>

                <button type="submit" className="basic-form__button">Enviar</button>
                <button type="reset" className="basic-form__button--reset" onClick={handleReset}>Reset</button>

            </form>
                
        </div>
    )
}

export default BasicFormComponent;