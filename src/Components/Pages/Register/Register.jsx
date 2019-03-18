import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';

class Register extends Component {
  render() {
    return (
      <div className="content-wrapper"><Helmet><title>Đăng ký</title></Helmet>
      <div className="container">
        <section className="content">
              <div className="box box-widget">
                 
                  {/* /.box-header */}
                  <div className="box-body">
                        <div className="col-md-4">
                        
                        </div>
                        <div className="col-md-4">
                        <br/><br/><br/><br/>
                        <div className="signup-form">
                                <form action="/examples/actions/confirmation.php" method="post">
                                <h2 className="text-center">Đăng ký </h2>
                                <hr></hr>
                                {/* <p className="hint-text">Create your account. It's free and only takes a minute.</p> */}
                                <div className="form-group">
                                    <div className="row">
                                    <div className="col-xs-6"><input type="text" className="form-control" name="first_name" placeholder="First Name" required="required" /></div>
                                    <div className="col-xs-6"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required="required" /></div>
                                    </div>        	
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
                                </div>        
                                <div className="form-group">
                                    <label className="checkbox-inline"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-lg btn-block">Đăng ký</button>
                                </div>
                                </form>
                                <div className="text-center">Bạn co săn san để tạo một tai khoản ? <Link to="/login">Đăng nhập</Link></div>
                            </div>
                       <br/><br/><br/><br/><br/>
                       <br/><br/>
                        </div>
                        
                  </div>
                  </div>
        </section>
        {/* /.content */}
      </div>
      {/* /.container */}
    </div>
    );
  }
}
export default Register;
