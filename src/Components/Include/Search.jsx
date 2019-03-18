import React, { Component } from 'react';
class Search extends Component {
  render() {
    return (
        <div className="box box-widget">
            <div className="box-header with-border">
                <span className="description">Tìm kiếm</span>
                
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
                    <div className="col-md-3">
                          <select className="form-control select2">
                                  <option>Hà Nội</option>
                                  <option>Đà Nẵng</option>
                                  <option>Cần Thơ</option>
                                  <option>Đà Lạt</option>
                                  <option>Nha Trang</option>
                                  <option>Quy Nhơn</option>
                          </select>
                    </div>
                    <div className="col-md-3">
                          <select className="form-control select2">
                                  <option>Ăn Uống</option>
                                  <option>Du Lịch</option>
                                  <option>Đẹp khỏe</option>
                                  <option>Giải Trí</option>
                                  <option>Mua Sắm</option>
                                  <option>Dịch Vụ</option>
                          </select>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group input-group-sm">
                          <input type="text" className="form-control" placeholder="Nhâp từ khóa để tìm kiếm"/>
                              <span className="input-group-btn">
                                <button type="button" className="btn btn-info btn-flat" >Tìm kiếm</button>
                              </span>
                        </div>
                    </div>

                </div>
            </div>
            {/* /.box-footer */}
        </div>
    );
  }
}
export default Search;