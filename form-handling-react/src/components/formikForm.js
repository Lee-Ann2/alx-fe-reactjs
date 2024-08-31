import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid try again').required('Email is required'),
    paasword: Yup.string().password('Wrong password').required('Password is required')
});


function FormikForm() {
    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            } }>
            {() => (
                <form>
                    <Field type='text' name='name' />
                    <ErrorMessage name='name' component='div' />
                    <Field type='email' name='email' />
                    <ErrorMessage name='email' component='div' />
                    <Field type='password' name='password' />
                    <ErrorMessage name='password' component='div' />
                    <button type='submit'>Submit</button>
                </form>
            )}
        </Formik>
    );
}

export default FormikForm;