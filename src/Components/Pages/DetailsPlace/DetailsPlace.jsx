import React,{Component} from 'react';
import { Helmet } from 'react-helmet';
import Search from './../../Include/Search';
import Map from '../../Include/Map';
class DetailsPlace extends Component{
        render(){
            return(
            <div className="content-wrapper">
            <Helmet><title>Xem chi tiết</title></Helmet>
                <div className="container">
                <section className="content">
                    <div className="row">
                        <div className="col-md-12">
                                <Search/>
                        </div>
                        <div className="col-md-12">
                            <div className="box box-info">
                                <div className="box-header with-border">
                                <h3 className="box-title">Bản đồ và chi tiết</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                                    </button>
                                    
                                </div>
                                </div>
                                {/* /.box-header */}
                                <div className="box-body">
                                        <div className="col-md-12">
                                            <Map/>
                                        </div>
                                        <div className="col-md-4">
                                        <a href="#" className="thumbnail"> <img alt="100%x180" src="https://images.foody.vn/res/g72/714546/prof/s576x330/foody-mobile-foody-nem-nuong-co-t.jpg" /> </a>
                                        </div>
                                        <div className="col-md-8">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item disabled">
                                            Lâm Đồng » Tp. Đà Lạt » Khu vực Bệnh Viện Tỉnh
                                            </a>
                                            <a href="#" className="list-group-item">Nem Nướng Cô Thu</a>
                                            <a href="#" className="list-group-item">56/13 Hải Thượng,  Tp. Đà Lạt, Lâm Đồng</a>
                                            <a href="#" className="list-group-item">Đang mở cửa  07:00 - 23:00 </a>
                                            <a href="#" className="list-group-item">20.000đ - 35.000đ</a>
                                        </div>
                                        </div>
                                        <div className="clear" />
                                        <div className="col-md-12">
                                            <ul className="timeline timeline-inverse">
                                                {/* timeline time label */}
                                                <li className="time-label">
                                                <span className="bg-green">
                                                    3 Jan. 2014
                                                </span>
                                                </li>
                                                {/* /.timeline-label */}
                                                {/* timeline item */}
                                                <li>
                                                <i className="fa fa-envelope bg-blue" />
                                                <div className="timeline-item">
                                                    <span className="time"><i className="fa fa-clock-o" /> 12:05</span>
                                                    <h3 className="timeline-header"><a href="#">Đinh Văn Lành</a> </h3>
                                                    <div className="timeline-body">
                                                            Món này ngon ne
                                                    </div>
                                                    <div className="timeline-footer thumbai-new">
                                                        <span>
                                                            <a className="btn btn-primary btn-xs">150 <i class="fa fa-thumbs-up" aria-hidden="true"></i></a>
                                                        </span>
                                                        <span>
                                                            <a className="btn btn-danger btn-xs">Xóa</a>
                                                        </span>
                                                            
                                                    </div>
                                                </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* /.box-body */}
                            
                                {/* /.box-footer */}
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
export default DetailsPlace;