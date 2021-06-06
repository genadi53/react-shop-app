import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions.js';

import './sign-up.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, displayName, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if(password !== confirmPassword){
            alert(`Passwords do not match`);
            return;
        }

        signUpStart({ email, password, displayName });
    }

    handleChange = (event) => {
        const { value , name } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const { email, password, displayName, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={ this.handleSubmit }>

                    <FormInput 
                     name='displayName'
                     type='text' 
                     value={ displayName }
                     handleChange={ this.handleChange } 
                     label='Name'
                    required />

                    <FormInput 
                     name='email'
                     type='email' 
                     value={ email }
                     handleChange={ this.handleChange } 
                     label='Email'
                    required />
                    
                    <FormInput 
                     name='password' 
                     type='password' 
                     value={ password }
                     handleChange={ this.handleChange }  
                     label='Password'
                    required />

                    <FormInput 
                     name='confirmPassword' 
                     type='password' 
                     value={ confirmPassword }
                     handleChange={ this.handleChange }  
                     label='Confirm Password'
                    required />

                    <CustomButton type='submit'> SIGN UP </CustomButton>
                    
                </form>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userData =>  dispatch(signUpStart(userData))  
})

export default connect(null, mapDispatchToProps)(SignUp);