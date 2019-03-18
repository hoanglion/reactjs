import React ,{Component} from 'react';
import {  Link } from "react-router-dom";
class Slider extends Component{
    render(){
        return(
            <div className="box box-info">
                <div className="box-header with-border">
                <h3 className="box-title">Mới Nhât</h3>
                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    
                </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                        <div className="row">
                            <div className="col-md-12 col-center m-auto">
                            
                            <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval={0}>
                            {/* Carousel indicators */}
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to={0} className="active" />
                                <li data-target="#myCarousel" data-slide-to={1} />
                                <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>   
                            {/* Wrapper for carousel items */}
                            <div className="carousel-inner">
                                <div className="item carousel-item active">
                                <div className="row">
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                </div>
                                </div>
                                <div className="item carousel-item">
                                <div className="row">
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                </div>
                                </div>
                                <div className="item carousel-item">
                                <div className="row">
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                    <div className="col-sm-4"><div className="img-box"><Link to="/chi-tiet"><img src="http://lamdongtv.vn/Uploaded/Users/bientapvien/images/2019/2/thunglung_tinhyeu_.jpg" className="img-responsive img-fluid"  /></Link></div></div>
                                </div>
                                </div>
                            </div>
                            {/* Carousel controls */}
                            <a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                                <i className="fa fa-chevron-left" />
                            </a>
                            <a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                                <i className="fa fa-chevron-right" />
                            </a>
                            </div>
                        </div>
                        </div>
             
                </div>
                {/* /.box-body */}
              
                {/* /.box-footer */}
            </div>
        );
    }
}   
export default Slider;