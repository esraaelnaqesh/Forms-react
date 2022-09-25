import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18next from "i18next";


const Header = () => {
  const {i18n,t}=useTranslation()
  const currentLanguage=localStorage.getItem('i18nextLng') || 'en'
  document.body.dir = i18n.dir();

useEffect(() =>{
  console.log("lang",currentLanguage)
  console.log(document.body.dir)
  if(localStorage.getItem("i18nextLng")?.length >2){
    i18next.changeLanguage("en")
  }
  // currentLanguage==='ar'? document.body.dir='rtl' :document.body.dir='ltr'

},[currentLanguage])

const handleLanguageChange=(e)=>{
  i18n.changeLanguage(e.target.value)
}

  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <Link className="navbar-brand" to="/">
    //     yousuckatcoding
    //   </Link>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item">
    //         <select
    //           className="nav-link bg-dark border-0 ml-1 mr-2 mt-1"
    //           // onChange={handleLanguageChange}
    //         >
    //           <option value="en">English</option>
    //           <option value="ar">Arabic</option>
    //         </select>
    //       </li>
    //       <li className="nav-item ml-2">
    //         <Link className="nav-link" to="/signin">
    //           Login
    //         </Link>
    //       </li>
    //       <li className="nav-item ml-2">
    //         <Link className="nav-link" to="/signup">
    //           Sign up
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    // ===============================
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark fixed-top d-flex justify-contoent-end header">
      
        <Link className="navbar-brand ms-3" to="/">
          {t('home')}
        </Link>
        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3 ">
          <li className="nav-item ms-2">
         <Link className="nav-link" to="/profile">
         profile
             </Link>
          </li>
       <li className="nav-item ms-2">
         <Link className="nav-link" to="/signin">
          {t("signin")}
             </Link>
          </li>
          <li className="nav-item ms-2">
            <Link className="nav-link" to="/signup">
            {t("signup")}
        </Link>
          </li>
           <li className="nav-item">
           <select
               className="nav-link bg-dark border-0 ms-1 me-2 mt-1"
               value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
            >
              <option value="en">{t("english")}</option>
              <option value="ar">{t("arabic")}</option>
            </select>
       </li>
         </ul>
       
        </div>
     
    </nav>
  );
};

export default Header;
