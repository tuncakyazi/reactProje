import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Formik, FormikProps, Field } from 'formik';
import * as Yup from 'yup';

type RegisterPageProp = RouteComponentProps & {

}

const validationSchema = Yup.object({
    firstName: Yup.string().required("Zorunlu alan"),
    lastName: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email('Geçersiz e-mail adresi').required('Zorunlu alan'),
});

const RegisterPage: React.FC<RegisterPageProp> = ({ ...props }): JSX.Element => {

    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
                alert(JSON.stringify(values, null, 4));
            }}
        >
            {({ handleSubmit, errors }: FormikProps<any>) => (
                <form onSubmit={handleSubmit}>

                    <Field type="text" name="firstName" placeholder="Ad"
                        render={({ field }: { field: any }) => {
                            debugger
                            return (
                                <div>
                                    <input type="text" name={field.name} value={field.value} onChange={field.onChange} onBlur={field.onBlur} placeholder="First Name" />
                                </div>
                            )
                        }} />
                    {errors.firstName && errors.firstName}

                    <Field type="text" name="lastName" placeholder="Soyad" />
                    {errors.lastName && errors.lastName}

                    <Field type="email" name="email" placeholder="E-mail" />
                    {errors.email && errors.email}

                    <button type="submit">Kayıt Ol</button>
                </form>
            )}
        </Formik>
    );

}

export default RegisterPage;