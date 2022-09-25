import axios from "axios";

// ============================
// export const signinApi = async (values) => {
//     console.log( "x",values)
//     const { email, password } = values;
//     const loginData = {
//        "email":email,
//         'password':password
//       };
//       console.log("object",loginData)
//       axios.post(`https://courier.sheltertest.ml/v1/auth/login/admin`, { loginData })
//         .then(res => {
//           console.log(res);
//           //console.log(res.data);
//           return res
//         }).catch(error=>{
//             console.log(error.message)
//             return error.message
//         })

// }
// var config = {
//     headers: { 'Content-Type': 'application/json' },
//     accept: '*/*'
// };
// ========================================

const loginURL = `https://courier.sheltertest.ml/v1/auth/login/admin`;
export const submitData = async function (data) {
  console.log(data);
  const x = axios
    .post(loginURL, data)

    .then((response) => {
      console.log("res", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    });
  return x;
};
