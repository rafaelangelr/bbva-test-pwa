import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';

export default Login;

function Login() {
    const router = useRouter();

    // form validation rules 
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username es Requerido'),
        password: Yup.string().required('Password es Requerido')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ username, password }) {
        return userService.login(username, password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <Layout>
            <div className="content-light">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.username?.message}</div>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>
                    <div className="form-group">
                        <button disabled={formState.isSubmitting} className="btn btn-primary btn-block" type="submit">
                            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Log In
                        </button>
                        <Link href="/account/register" className="btn btn-link">Register new user</Link>                       
                    </div>
                </form>
            </div>
        </Layout>
    );
}
