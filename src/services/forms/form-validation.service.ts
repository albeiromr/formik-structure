import * as yup from 'yup';

export class FormValidationService {

    public static basicForm  = yup.object({
        name: yup.string()
        .max(20, "el nombre debe ser maximo de 20 caracteres")
        .min(2, "el nombre debe ser mínimo de 2 caracteres")
        .required("el nombre es requerido")
        .matches(/^(?=.{1,30}$)[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/gm, "el formato del nombre no es valido"),
        email: yup.string()
        .email("ingrese un email valido")
        .max(50, "el email es demasiado largo")
        .min(15, "el email es demasiado corto")
        .required("el email es requerido"),
        age: yup.number()
        .min(1)
        .max(120)
        .required("la edad es requerida"),
        phone: yup.string()
        .required("el teléfono es requerido")
        .matches(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm, "el número de teléfono no es válido")
    })

}

 