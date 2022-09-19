import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { NotificationManager } from "react-notifications";

const Signin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
    NotificationManager.success("you have been registered successfully");
  };

  // const navigate = useNavigate();
  //   const handleRegister = () => {
  //     navigate("/signup");
  //   };
  //   const handleSignin = () => {
  //     navigate("/signin");
  //   };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const loginData = { email, password };
  //     console.log(loginData);
  //   };
  return (
    // --------------------------------------------------------------------
    // <div classNameName="login-form">
    //     <form onSubmit={handleSubmit}>
    //         <div className='action'>
    //             <button  onClick={handleSignin}>sign in</button>
    //             <button  onClick={handleRegister}>create account</button>
    //         </div>
    //         <div className="content">
    //             <div className="input-field">
    //                     {/* <label for="email">E-mail</label> */}
    //                     <input  id="email"
    //                      type="email"
    //                       placeholder="E-mail"
    //                       required
    //                       value={email}
    //                       onChange={(e)=>setEmail(e.target.value)}
    //                       />
    //                 </div>

    //                 <div className="input-field">
    //                     {/* <label  for="signin-password">Password</label> */}
    //                     <input
    //                      id="signin-password"
    //                      type="password"
    //                      placeholder="Password"
    //                      required
    //                      value={password}
    //                     onChange={(e)=>setPassword(e.target.value)}
    //                      />
    //                 </div>
    //                 <div className='action'>
    //                     <button type="submit">sign in</button>
    //                     <button type="button" class="btn btn-outline-info">Info</button>
    //                 </div>
    //         </div>
    //     </form>
    // </div>

    //--------------------------------------------------------------------------

    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <h3>Sign In</h3>
        </div>
        <div className="mb-3">
          <label> Email</label>
          <input
            type="email"
            id="loginName"
            className="form-control"
            name="email"
            {...register("email", {
              required: { value: "true", message: "Email is required" },
              pattern: {
                value: /^\S+@\S+$/i,
                message: "This is not a valid email",
              },
            })}
          />
        </div>
        <p>{errors.email?.message}</p>

        <div className=" mb-4">
          <label>Password</label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            {...register("password", {
              required: { value: true, message: "please enter password" },
              minLength: {
                value: 8,
                message: "please enter password with 8 digit at least",
              },
              maxLength: {
                value: 20,
                message: "please enter password no more than 20 digit",
              },
            })}
          />
        </div>
        <p>{errors.password?.message}</p>

        <div className="d-grid">
          <button type="submit" className="btn signin">
            Sign in
          </button>
        </div>
        <p className="forgot-password text-rcenter">
          Don't Have Account?{" "}
          <Link className="link" to="/signup">
            sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
