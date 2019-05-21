import React from 'react';
import { useFormState } from 'react-use-form-state';

const SignUpForm = () => {
    const [formState, {text, email, password, radio}] = useFormState();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <form onSubmit={submitHandler}>
            <p><label>Name</label><input { ...text('name')} /></p>
            <p><label>email</label><input { ...email('email')} required /></p>
            <p><label>password</label><input { ...password('password')} required minLength='8' /></p>
            <p><label>free</label><input { ...radio('plan', 'free')} /></p>
            <p><label>premium</label><input { ...radio('plan', 'premium')} /></p>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default SignUpForm;