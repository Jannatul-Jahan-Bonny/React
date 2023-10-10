import React from "react";
import { useForm, Controller } from "react-hook-form";
//import useLogin from '../../hooks/useLogin';
import "./registrationForm.css";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      
    },
  });
    
//   const { registrationData, error, registerUser } = useLogin(); 

  const handlerOnSubmit = (formData) => {
    registerUser(formData);
  };


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Login Form</h1>
      <form onSubmit={handleSubmit(handlerOnSubmit)} className="form-container">
        <div className="form-group">
          <h4>Email</h4>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
            }}
            render={({ field }) => (
              <input placeholder="Enter email" {...field} />
            )}
          />
        </div>

        <div>
          <h4>Password</h4>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Password"
                type="password"
                {...field}
                style={{ border: errors.password ? "1px solid red" : "" }}
              />
            )}
          />
          {errors.password && <h5>{errors.password.message}</h5>}
        </div>

        <br></br>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;