import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-beige nav">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand fw-bold me-4" href="/">Home</a>
                    <a className="navbar-brand fw-bold" href="/admin">Admin</a>
                </div>
                <div className='input'>
                    <input
                      className="form-control me-2"
                        type="search"
                        placeholder="Search"
                         aria-label="Search"
                        />
                    <button className="btn-sub btn-outline-primary" type="submit">
                       Search
                    </button>
                </div>
 
            </div>
        </nav>
    );
};

export default Navbar;


{/* <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button> */}
// {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <form className="ms-auto d-flex">
//                         {/* <input
//                             className="form-control me-2"
//                             type="search"
//                             placeholder="Search"
//                             aria-label="Search"
//                         /> */}
// <button className="btn btn-outline-primary" type="submit">
//     Search
// </button>
//                     </form >
//                 </div >
//                  */}