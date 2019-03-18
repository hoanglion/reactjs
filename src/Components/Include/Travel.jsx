import React ,{Component} from 'react';
import Thumbnail from './Thumbnail';
class Travel extends Component{
    render(){
        return(
            <div className="box box-info">
                <div className="box-header with-border">
                <h3 className="box-title">Các địa điểm đi nhiều nhất</h3>
                <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" />
                    </button>
                    
                </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                        <div className="row">
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                            <Thumbnail/>
                        </div>
                </div>
                {/* /.box-body */}
              
                {/* /.box-footer */}
            </div>


        );
    }
}   
export default Travel;