import React from 'react';
import './sign-up.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfile } from '../../firebase/firebase.utils';

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
        
        if(password !== confirmPassword){
            alert(`Passwords do not match`);
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            
            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            });

        } catch(error){
            console.error(error);
        }
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

export default SignUp;