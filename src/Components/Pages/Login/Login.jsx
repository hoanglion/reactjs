import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';
class Login extends Component {
  render() {
    return (
     
      <div className="content-wrapper">
       <Helmet><title>Đăng nhập</title></Helmet>
      <div className="container">
        <section className="content">
              <div className="box box-widget">
                 
                  {/* /.box-header */}
                  <div className="box-body">
                        <div className="col-md-3">
                        
                        </div>
                        <div className="col-md-5">
                        <br/><br/><br/><br/>
                        <div className="login-form">
                            <form action="/examples/actions/confirmation.php" method="post">
                            <h2 className="text-center">Đăng Nhập</h2>   
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user" /></span>
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required" />				
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                <input type="password" className="form-control" name="password" placeholder="Password" required="required" />				
                                </div>
                            </div>        
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary login-btn btn-block">Đăng Nhập</button>
                            </div>
                            <div className="clearfix">
                                <label className="pull-left checkbox-inline"><input type="checkbox" />Nhớ đăng nhập</label>
                                <a href="#" className="pull-right">Quên mật khẩu?</a>
                            </div>
                            <div className="or-seperator text-center"><i>or</i></div>
                            <p className="text-center">Đăng nhập bằng tài khoản truyền thông xã hội của bạn</p>
                            <div className="text-center social-btn">
                                <span><a href="#" className="btn btn-primary"><i className="fa fa-facebook" />&nbsp; Facebook</a></span>
                                <span><a href="#" className="btn btn-info"><i className="fa fa-twitter" />&nbsp; Twitter</a></span>
                                <span><a href="#" className="btn btn-danger"><i className="fa fa-google" />&nbsp; Google</a></span>
                            </div>
                            </form>
                            <p className="text-center text-muted small"> Không có tài khoản?  <Link to="register">Đăng ký tại đây!</Link></p>
                        </div>
                        <br/><br/><br/><br/><br/><br/>  <br/><br/><br/><br/>
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
export default Login;
