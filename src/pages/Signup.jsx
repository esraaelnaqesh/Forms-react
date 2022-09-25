import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Store } from "react-notifications-component";
import { useTranslation } from "react-i18next";
import { Button, Form } from "antd";

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
  const { t } = useTranslation();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("please enter your name")
      .matches(/^[A-Za-z]+$/, "enter valid name without number"),
    email: yup.string().email().required("please enter your email"),
    phone: yup
      .string()
      .required("please enter your phone number")
      .matches(/^[0-9]+$/, "enter valid phone Number")
      .min(9, "please enter phone number with 9 digit at least"),
    password: yup
      .string()
      .required("please enter your password")
      .min(6, "please enter password with 6 digit at least")
      .max(20, "please enter password no more than 20 digit"),
    confirmPassword: yup
      .string()
      .required("please enter your password again")
      .oneOf([yup.ref("password"), null], `confirm password don't match `),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    console.log("event", data);
    e.preventDefault();
    console.log("xx", e);
    Store.addNotification({
      title: "Wonderful!",
      message: "you have been register successfully",
      type: "success",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 1000,
        //onScreen: true
      },
    });
  };

  // ===================================================
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const registerData = { name, email, password ,phone,confirmPassword};
  //     console.log(registerData);
  //   };

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

  // ==========================================
  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <div className="text-center mb-3">
        <h3>{t("signup")}</h3>
      </div>
      <div className="mb-3">
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          id="name"
          className="form-control"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>
      </div>

      {/* email */}
      <div className=" mb-3">
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          className="form-control "
          {...register("email")}
        />
        <p>{errors.email?.message}</p>
      </div>

      {/* phone number */}
      <div className="form-outline mb-3">
        <label htmlFor="phone">{t("phone")}</label>
        <input
          type="tel"
          id="phone"
          className="form-control "
          {...register("phone")}
        />
        <p>{errors.phone?.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="password">{t("password")}</label>
        <input
          type="password"
          id="password"
          className="form-control"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>

      <div className="form-outline mb-3">
        <label htmlFor="repeatPassword">{t("confirm password")}</label>
        <input
          type="password"
          id="repeatPassword"
          className="form-control "
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>

      <div className="d-grid">
        <Button
          className="signup"
          htmlType="submit"
          type="primary"
          loading={isSubmitting}
        >
          {t("signup")}
        </Button>
      </div>
      <p className="forgot-password text-right">
        {t("registered")}{" "}
        <Link className="link" to="/signin">
          {t("signin")}
        </Link>
      </p>
    </Form>
  );
};

export default Signup;
