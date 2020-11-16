import React from 'react'

function Footer() {
    return (
        <div>

            <footer className="page-footer font-small mdb-color lighten-3 pt-4 ">

                {/* <!-- Footer Links --> */}
                <div className="container-fluid text-center text-md-left text-white bg-dark">

                    {/* <!-- Grid row --> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                            {/* <!-- Content --> */}
                            <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                            esse
          quasi, veritatis totam voluptas nostrum.</p>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <a  href="#!">PROJECTS</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">ABOUT US</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">BLOG</a>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href="#!">AWARDS</a>
                                    </p>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                            {/* <!-- Contact details --> */}
                            <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>
                                        <i className="fa fa-home mr-3"></i> Samastipu, Bihar 848505, IN</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-envelope mr-3"></i> sanjeetdca1218@gmail.com</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-phone mr-3"></i> +91 828406470</p>
                                </li>
                                <li>
                                    <p>
                                        <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        <hr className="clearfix w-100 d-md-none" />

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 text-center  my-4" style={{display:"inline-grid"}}>

                            {/* <!-- Social buttons --> */}
                            <h5 className="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                            {/* <!-- Facebook --> */}
                          
                            {/* <button type="button" className="btn btn-secondary btn-circle btn-xl">  </button>  */}
                            <a type="button" className="btn-floating btn-fb">
                            <i className="fa fa-facebook-f fa-2x"></i>
                            </a>
                            
                            {/* <!-- Twitter --> */}
                            <a type="button" className="btn-floating btn-tw">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                            {/* <!-- Google +--> */}
                            <a type="button" className="btn-floating btn-gplus">
                                <i className="fa fa-google-plus fa-2x"></i>
                            </a>
                            {/* <!-- Dribbble --> */}
                            <a type="button" className="btn-floating btn-dribbble">
                                <i className="fa fa-dribbble fa-2x"></i>
                            </a>

                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row --> */}

                </div>
                {/* <!-- Footer Links --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3 bg-info">© 2020 Copyright:
    <a href="https://mdbootstrap.com/" className="text-light mb-2x"> Student-panti.com</a>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}


        </div>


    )
}

export default Footer
