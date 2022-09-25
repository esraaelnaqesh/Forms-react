import { useNavigate } from "react-router-dom";
import {useEffect } from "react";
const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    const token =localStorage.getItem('token')
    if(!token){
      navigate('/signin')
    }
  })
  return (
    <div>
      <main>
        <h2>Welcome back ...</h2>
        <button onClick={()=>{
          localStorage.removeItem('token')
          navigate('/signin')
        }}>log out</button>
      </main>
    </div>

    // ===========================================
    // <section className="vh-100">
    //   <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    //     <div className="container h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
    //           <div className="card">
    //               <div className="card-header d-flex align-items-center mt-2 justify-content-around">
    //                 <Button
    //                     className="btn btn btn-secondary btn-lg"
    //                     data-bs-target="#exampleModalToggle2"
    //                     data-bs-toggle="modal"
    //                     data-bs-dismiss="modal"
    //                   > Sign up
    //                 </Button>
    //                 <button
    //                   className="btn btn-secondary btn-lg"
    //                   data-bs-target="#exampleModalToggle"
    //                   data-bs-toggle="modal"
    //                   data-bs-dismiss="modal"
    //                 > Sign in
    //                 </button>
    //               </div>
    //               {/* modal sign in */}
    //               <div
    //                 className="modal fade"
    //                 id="exampleModalToggle"
    //                 aria-hidden="true"
    //                 aria-labelledby="exampleModalToggleLabel"
    //                  tabIndex="-1"
    //               >
    //                 <div className="modal-dialog modal-dialog-centered">
    //                   <div className="modal-content">
    //                     <div className="modal-header d-flex justify-content-space-around">
    //                       <button
    //                         className="btn btn-primary me-3"
    //                         data-bs-target="#exampleModalToggle2"
    //                         data-bs-toggle="modal"
    //                         data-bs-dismiss="modal"

    //                       > Sign up
    //                     </button>
    //                     <button
    //                       className="btn btn-primary"
    //                       data-bs-target="#exampleModalToggle"
    //                       data-bs-toggle="modal"
    //                       data-bs-dismiss="modal"
    //                     > Sign in
    //                     </button>
    //                       <button
    //                         type="button"
    //                         className="btn-close"
    //                         data-bs-dismiss="modal"
    //                         aria-label="Close"
    //                       ></button>

    //                     </div>
    //                     <div className="modal-body">
    //                      <Signin/>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* modal sign up */}
    //               <div
    //                 className="modal fade"
    //                 id="exampleModalToggle2"
    //                 aria-hidden="true"
    //                 aria-labelledby="exampleModalToggleLabel2"
    //                  tabIndex="-1"
    //               >
    //                 <div className="modal-dialog modal-dialog-centered">
    //                   <div className="modal-content">
    //                     <div className="modal-header">
    //                     <button
    //                   className="btn btn-primary"
    //                   data-bs-target="#exampleModalToggle2"
    //                   data-bs-toggle="modal"
    //                   data-bs-dismiss="modal"
    //                 > Sign up
    //               </button>
    //               <button
    //                 className="btn btn-primary"
    //                 data-bs-target="#exampleModalToggle"
    //                 data-bs-toggle="modal"
    //                 data-bs-dismiss="modal"
    //               > Sign in
    //               </button>
    //                       <button
    //                         type="button"
    //                         className="btn-close"
    //                         data-bs-dismiss="modal"
    //                         aria-label="Close"
    //                       ></button>
    //                     </div>
    //                     <div className="modal-body">
    //                      <Signup/>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* <div classNameName="card-body p-5">
    //               <div classNameName="tab-content">
    //                 <div
    //                   classNameName="tab-pane fade"
    //                   id="pills-login"
    //                   role="tabpanel"
    //                   aria-labelledby="tab-login"
    //                 >
    //                   <Signin />
    //                 </div>
    //                 <div
    //                   classNameName="tab-pane fade show active"
    //                   id="pills-register"
    //                   role="tabpanel"
    //                   aria-labelledby="tab-register"
    //                 >
    //                   <Signup />
    //                 </div>
    //               </div>
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    // </section>

    // <div>
    //     <nav className="main-nav">
    //       <ul>
    //         <li><Link className"signin" to="/signin">Sign in</Link></li>
    //         <li><Link className="signup" to="/signup">Sign up</Link></li>
    //       </ul>
    //     </nav>
    //     <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"  tabIndex="-1">
    // <div class="modal-dialog modal-dialog-centered">
    //   <div class="modal-content">
    //     <div class="modal-header">
    //       <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
    //       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //     </div>
    //     <div class="modal-body">
    //       Show a second modal and hide this one with the button below.
    //     </div>
    //     <div class="modal-footer">
    //       <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
    //     </div>
    //   </div>
    // </div>
    //    </div>
    //    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"  tabIndex="-1">
    // <div class="modal-dialog modal-dialog-centered">
    //   <div class="modal-content">
    //     <div class="modal-header">
    //       <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
    //       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //     </div>
    //     <div class="modal-body">
    //       Hide this modal and show the first with the button below.
    //     </div>
    //     <div class="modal-footer">
    //       <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
    //     </div>
    //   </div>
    // </div>
    //    </div>
    //      <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a>
    // </div>
  );
};

export default Home;
