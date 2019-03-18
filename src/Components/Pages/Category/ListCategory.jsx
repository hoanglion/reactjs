import React, { Component } from 'react';
import {  Link } from "react-router-dom";
class ListCategory extends Component {
  render() {
    return (
        <div className="col-sm-4">
        <div className="thumbnail">
        <div className="thumb-wrapper">
        <div className="img-box">
        <Link  to="/chi-tiet">
          <img src={this.props.image} 
          className="img-responsive img-fluid" />
        </Link>
        </div>
        <div className="thumb-content">
            <Link  to="/chi-tiet"><h4>{this.props.name}</h4></Link>
            <p>{this.props.mota}</p>
            <p className="thumbai-new"> 
                <span> <Link to="/chi-tiet" className="btn btn-warning">Xem <i className="fa fa-angle-right" /></Link></span>
                <span> <i className="fa fa-eye" aria-hidden="true"> {this.props.view} </i> </span>
                <span> <i className="fa fa-thumbs-up" aria-hidden="true"></i> {this.props.like}  </span>
            </p>
        </div>						
        </div>	
        </div>					
    </div>
    );
  }
}
export default ListCategory;