import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";

const Signup = () => {
  //const navigate = useNavigate();
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  // const handleRegister=()=>{
  //     navigate('/signup');

  // }
  // const handleSignin=()=>{
  //     navigate('/signin');
  // }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e) => {
    console.log("event", data);
    e.preventDefault();
    console.log("xx", e);
    NotificationManager.success("you have been registered successfully");
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const registerData = { name, email, password ,phone,confirmPassword};
  //     console.log(registerData);
  //   };
  return (
    //     <div classNameName="login-form">
    //     <form onSubmit={handleSubmit}>
    //         <div classNameName='action'>
    //             <button  onClick={handleSignin}>sign in</button>
    //             <button  onClick={handleRegister}>create account</button>
    //         </div>
    //         <div classNameName="content">
    //             <div classNameName="input-field">
    //                 <input  id="name"
    //                 type="text"
    //                 placeholder="Name"
    //                 required
    //                 value={name}
    //                 onChange={(e)=>setName(e.target.value)}

    //                 />
    //             </div>
    //             <div classNameName="input-field">
    //                 <input  id="email"
    //                 type="email"
    //                 placeholder="E-mail"
    //                 required
    //                 value={email}
    //                 onChange={(e)=>setEmail(e.target.value)}
    //                 />
    //             </div>

    //             <div classNameName="input-field">
    //                 <input
    //                 id="password"
    //                 type="password"
    //                 placeholder="Password"
    //                 required
    //                 value={password}
    //                 onChange={(e)=>setPassword(e.target.value)}
    //                 />
    //             </div>
    //             <div classNameName='action'>
    //                 <button type="submit">register</button>
    //             </div>
    //         </div>
    //     </form>
    // </div>
    // ==================================

    // ****************************************
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-center mb-3">
        <h3>Sign Up</h3>
      </div>
      <div className="mb-3">
        <label>name</label>
        <input
          type="text"
          id="registerName"
          className="form-control"
          placeholder="name"
          {...register("name", {
            required: "please enter your name",
            minLength: {
              value: 3,
              message: "please enter name at least 3 character",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "enter valid name",
            },
          })}
        />
      </div>
      <p>{errors.name?.message}</p>
      {/* email */}
      <div className=" mb-4">
        <label>Email address</label>
        <input
          type="email"
          id="registerEmail"
          className="form-control form-control-lg"
          placeholder="Email"
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

      {/* phone number */}
      <div className="form-outline mb-4">
        <input
          type="tel"
          id="registerPhone"
          className="form-control form-control-lg"
          placeholder="phone Number"
          {...register("phone", {
            required: "please enter your phone number",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i,
              message: "enter valid phone Number",
            },
          })}
        />
        <p>{errors.phone?.message}</p>
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          id="registerPassword"
          className="form-control form-control-lg"
          placeholder="password"
          {...register("password", {
            required: " please enter your password",
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
      {/* 
       <div className="form-outline mb-4">
        <input
          type="password"
          id="registerRepeatPassword"
          className="form-control form-control-lg"
          placeholder="Confirm Password"
          {...register('confirmPassword',{required:' please enter your  confirm password',
          minLength:{
              value:8,
              message:"please enter password with 8 digit at least"
          },
          maxLength:{
              value:20,
              message:"please enter password no more than 20 digit"
          }
        })}
   
        />
      </div>
      <p>{errors.confirmPassword?.message}</p>  */}

      <div className="d-grid">
        <button type="submit" className="btn btn-info signup">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered{" "}
        <Link className="link" to="/signin">
          sign in
        </Link>
      </p>
    </form>
  );
};

export default Signup;
