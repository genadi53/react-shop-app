import React, { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions.js";

import "./sign-up.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const signUpHandler = (userCredentials) =>
    dispatch(signUpStart(userCredentials));

  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { email, password, displayName, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert(`Passwords do not match`);
      return;
    }

    // signUpStart({ email, password, displayName });
    signUpHandler({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Name"
          required
        />

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

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (userData) => dispatch(signUpStart(userData)),
// });

export default SignUp;
