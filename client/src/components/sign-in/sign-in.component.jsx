import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

import "./sign-in.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignInHandler = () => dispatch(googleSignInStart());
  const emailSignInHandler = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInHandler(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> SIGN IN </CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={googleSignInHandler}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

//const mapDispatchToProps = dispatch => ({
//     googleSignInStart: () => dispatch(googleSignInStart()),
//     emailSignInStart: (email, password) =>
//         dispatch(emailSignInStart({ email, password })),

// });

export default SignIn;
