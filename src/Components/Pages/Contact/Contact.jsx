import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Contact extends Component {
  render() {
    return (
      <div className="content-wrapper">
      <Helmet><title>Liên hệ</title></Helmet>
      <div className="container">
        <section className="content">
              <div className="box box-widget">
                  <div className="box-header with-border">
                      <span className="description">Liên hệ với chúng tôi</span>
                      
                  {/* /.user-block */}
                  <div className="box-tools">
                      <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                      </button>
                  </div>
                  {/* /.box-tools */}
                  </div>
                  {/* /.box-header */}
                  <div className="box-body">
                      <div className="row">
                 
                      <div className="col-md-5">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.307340145233!2d108.43520911466668!3d11.953210191529621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317112d717b0e357%3A0x40132bdc164c9558!2zNDEgVGjDtG5nIFRoacOqbiBI4buNYywgUGjGsOG7nW5nIDIsIFRow6BuaCBwaOG7kSDEkMOgIEzhuqF0LCBMw6JtIMSQ4buTbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1552753155817"
                            width="100%" 
                            height="570" 
                            frameborder="0" 
                            style={{border:0}}
                            allowfullscreen>
                            </iframe>
                      </div>
                      <div className="col-md-7">
                            {/* /.box-header */}
                            {/* form start */}
                            <form role="form">
                              <div className="box-body">
                                <div className="form-group">
                                  <label htmlFor="exampleInputEmail1">Họ và tên</label>
                                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Họ tên" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Gmail</label>
                                  <input type="mail" className="form-control" id="exampleInputPassword1" placeholder="Gmail" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                                  <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Điện thoại" />
                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleInputPassword1">Ghi chú</label>
                                  <textarea role="50" type="text" className="form-control ghichu" id="exampleInputPassword1" placeholder="Ghi chú" />
                                </div>
                              </div>
                              {/* /.box-body */}
                              <div className="box-footer">
                                <button type="submit" className="btn btn-primary">Gủi</button>
                              </div>
                            </form>
                     
                      </div>
                 
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
export default Contact;
