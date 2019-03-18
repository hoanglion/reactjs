import React, { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
        <header className="main-header">
            <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link to="" className="navbar-brand"><b>Trang chủ</b></Link >
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                <i className="fa fa-bars" />
              </button>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                  <ul className="nav navbar-nav">
                    <li><Link to="/kham-pha">Khám phá</Link ></li>
                    <li><Link to="/dat-ban">Đặt bàn</Link ></li>
                    <li><Link to="/di-cho">Đi Chợ</Link ></li>
                    <li><Link to="/lam-dep" href="#">Làm đẹp</Link ></li>
                  </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="btn-group">
                          <button type="button" className="btn btn-success dropdown-toggle" data-toggle={'dropdown'}>
                          <i className="fa fa-download" aria-hidden="true"></i>  Dowload App  
                          <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                              <li><Link to="#"><i className="fa fa-apple" aria-hidden="true"></i> IOS</Link></li>
                              <li><Link to="#"><i className="fa fa-android" aria-hidden="true"></i> Andoird</Link></li>
                          </ul>
                    </div>
                </form>
              </div>
            {/* /.navbar-collapse */}
            {/* Navbar Right Menu */}
            <div className="navbar-custom-menu">
     
              <ul className="nav navbar-nav">
                <li><Link to="/lien-he">Liên hệ</Link ></li>
                <li><Link to="/gioi-thieu">Giới thiệu</Link ></li>
                <li><Link to="/login">
                                  <i className="fa fa-sign-in" aria-hidden="true"></i> Đăng nhập</Link >
                </li>
                {/* User Account Menu */}
                <li className="dropdown user user-menu">
                  {/* Menu Toggle Button */}
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {/* The user image in the navbar*/}
                    <img src="./themes/dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                    {/* hidden-xs hides the username on small devices so only the image appears. */}
                    <span className="hidden-xs">Văn Lành</span>
                  </a>
                  <ul className="dropdown-menu">
                    {/* The user image in the menu */}
                    <li className="user-header">
                      <img src="./themes/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                      <p>
                                  Đinh Văn Lành
                                  <small>12/02/1996</small>
                      </p>
                    </li>
                    {/* Menu Body */}
                    {/* Menu Footer*/}
                    <li className="user-footer">
                      <div className="pull-left">
                        <Link to="/profile" className="btn btn-success btn-flat">Hô sơ cá nhân</Link >
                      </div>
                      <div className="pull-right">
                        <Link to="#" className="btn btn-danger btn-flat">Đăng xuất</Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* /.navbar-custom-menu */}
          </div>
          {/* /.container-fluid */}
        </nav>
        </header>
    );
  }
}
export default Header;