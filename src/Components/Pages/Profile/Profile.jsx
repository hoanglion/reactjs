import React,{Component} from 'react';
class Profile extends Component{
        render(){
            return(
            <div className="content-wrapper">
                <div className="container">
                <section className="content">
                    <div className="row">
                    <div className="col-md-4">
                        {/* Profile Image */}
                        <div className="box box-primary">
                        <div className="box-body box-profile">
                            <img className="profile-user-img img-responsive img-circle" 
                                src="/themes/dist/img/user4-128x128.jpg" alt="User profile picture" />
                            <h3 className="profile-username text-center">Đinh Văn Lành</h3>
                        </div>
                        {/* /.box-body */}
                        </div>
                        {/* /.box */}
                        {/* About Me Box */}
                        <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">Thông tin của bạn</h3>
                        </div>
                        {/* /.box-header */}
                        <div className="box-body">
                            <strong><i class="fa fa-user" aria-hidden="true"></i> Họ và tên : Đinh Văn Lành</strong>
                            <hr />
                            <strong><i className="fa fa-map-marker margin-r-5" /> Địa chỉ : Thông thiên học - Đà Lạt</strong>
                            <hr />
                            <strong><i class="fa fa-calendar-o" aria-hidden="true"></i> Ngày Sinh : 12/02/1996</strong>
                            <hr />
                            <strong><i class="fa fa-mobile" aria-hidden="true"></i> Số Điện Thoại : 0966334404</strong>
                            
                        </div>
                        {/* /.box-body */}
                        </div>
                        {/* /.box */}
                    </div>
                    {/* /.col */}
                    <div className="col-md-8">
                        <div className="nav-tabs-custom">
                        <ul className="nav nav-tabs">
                         
                            <li className="active"><a href="#info" data-toggle="tab">Chỉnh sửa thông tin</a></li>
                            <li><a href="#settings" data-toggle="tab">Thay đổi mật khẩu</a></li>
                            
                        </ul>
                        <div className="tab-content">
                        <div className="tab-pane active" id="info">
                            <form className="form-horizontal">
                                <div className="form-group">
                                <label htmlFor="inputName" className="col-sm-2 control-label">Họ</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputHo" placeholder="Họ" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputEmail" className="col-sm-2 control-label">Tên</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputTen" placeholder="Tên" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputName" className="col-sm-2 control-label">Địa chỉ</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputDiaChi" placeholder="Đị chỉ" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputName" className="col-sm-2 control-label">Ngày Sinh</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputDiaChi" placeholder="Ngày sinh" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputExperience" className="col-sm-2 control-label">Mô tả</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" id="inputExperience" placeholder="Mô tả" defaultValue={""} />
                                </div>
                                </div>
                           
                                <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-danger">Lưu</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        <div className="tab-pane" id="settings">
                            <form className="form-horizontal">
                                <div className="form-group">
                                <label htmlFor="inputEmail" className="col-sm-3 control-label">Nhập mật khẩu củ</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="inputEmail" placeholder="Nhập mật khẩu củ" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputName" className="col-sm-3 control-label">Nhập mật khẩu mới</label>
                                <div className="col-sm-9">
                                    <input type="password" className="form-control" id="inputName" placeholder="Nhập mật khẩu mới" />
                                </div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="inputExperience" className="col-sm-3 control-label">Nhập lại mật khẩu mới</label>
                                <div className="col-sm-9">
                                <input type="password" className="form-control" id="inputSkills" placeholder="Nhập lại mật khẩu mới" />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" className="btn btn-danger">Lưu lại</button>
                                </div>
                                </div>
                            </form>
                            </div>
                            
                        </div>
                        {/* /.tab-content */}
                        </div>
                        {/* /.nav-tabs-custom */}
                    </div>
                    {/* /.col */}
                    </div>
                    {/* /.row */}
                </section>
                {/* /.content */}
                </div>
                {/* /.container */}
            </div>
            
            );
        }

}
export default Profile;