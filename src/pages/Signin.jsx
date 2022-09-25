import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Store } from "react-notifications-component";
import { submitData } from "../api/signin";
import { useTranslation } from "react-i18next";
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate=useNavigate()
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    // phone: yup
    //   .string()
    //   .required("please enter your phone number")
    //   .matches(/^[0-9]+$/, "enter valid phone Number")
    //   .min(9, "please enter phone number with 9 digit at least"),
    password: yup
      .string()
      .required("please enter your password")
      .min(6, "please enter password with 6 digit at least")
      .max(20, "please enter password no more than 20 digit"),
  });

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [userInfo, setUserInfo] = useState();

  const onSubmit = async (data) => {
    setUserInfo(data);
    console.log(data);
    const loginRes = await submitData(data);
    console.log("loginRes: ", loginRes);
    if(loginRes.status===201 && loginRes.statusText==='Created'){
      localStorage.setItem("token",loginRes.data.token);
    Store.addNotification({
      title: "Wonderful!",
      message: "you have been logging successfully",
      type: "success",
      insert: "top",
      container: "top-right",
      dismiss: {
        duration: 1000,
        //onScreen: true
      },
    });
    navigate('/')
    }
    if(loginRes.response.status === 404){
      Store.addNotification({
        message: loginRes.response.data.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        dismiss: {
          duration: 1000,
          //onScreen: true
        },
      });
    }
    
    //await signinApi(data);

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

      <Form onFinish={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <h3>{t("signin")}</h3>
        </div>
        <div className="mb-3">
          <label>{t("email")}</label>
          <input
            type="email"
            className="form-control"
            name="email"
            {...register("email")}
          />
        </div>
        <p>{errors.email?.message}</p>

        <div className=" mb-4">
          <label>{t("password")}</label>
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            {...register("password")}
          />
        </div>
        <p>{errors.password?.message}</p>

        <div className="d-grid">
          <Button
            className="signin"
            htmlType="submit"
            type="primary"
            loading={isSubmitting}
          >
            {t("signin")}
          </Button>
        </div>
        <p className="forgot-password text-rcenter">
          {t(`Don't Have Account`)}{" "}
          <Link className="link" to="/signup">
            {t("signup")}
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Signin;
