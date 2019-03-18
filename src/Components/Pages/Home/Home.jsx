import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Map from './../../Include/Map';
import Search from './../../Include/Search';
import Travel from '../../Include/Travel';
import Slider from '../../Include/Slider';

class Home extends Component {
  render() {
    return (

        <div className="content-wrapper">
        <Helmet><title>Trang chủ</title></Helmet>
        <div className="container">
          <section className="content">
              <div className="row">
                  <div className="col-md-12">
                          <Search/>
                  </div>
                  <div className="col-md-12">
                          <Map/>
                  </div>
                  <div className="col-md-12">
                          <Slider/>
                  </div>
                  <div className="col-md-12">
                          <Travel/>
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
export default Home;


