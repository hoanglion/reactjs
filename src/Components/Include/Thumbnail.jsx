import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class Thumbnail extends Component {
  render() {
    return (
        <div className="col-sm-4">
        <div className="thumbnail">
        <div className="thumb-wrapper">
        <div className="img-box">
        <Link  to="/chi-tiet">
          <img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" 
          className="img-responsive img-fluid" />
        </Link>
        </div>
        <div className="thumb-content">
            <Link  to="/chi-tiet"><h4>Thung lũng tình yêu</h4></Link>
            <p>Convallis eget pretium eu, bibendum non leo. Proin susc ipit purus adipiscing dolor.</p>
            <p className="thumbai-new"> 
                <span> <Link to="/chi-tiet" className="btn btn-warning">Xem <i className="fa fa-angle-right" /></Link></span>
                <span> <i className="fa fa-eye" aria-hidden="true"> 5060 </i> </span>
                <span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> 500  </span>
            </p>
        </div>						
        </div>	
        </div>					
    </div>
    );
  }
}
export default Thumbnail;
