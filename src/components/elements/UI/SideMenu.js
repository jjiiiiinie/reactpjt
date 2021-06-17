import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {

  var process = require('../../../myprocess.json');

  const [ sideData, setsideData ] = useState([]);

  useEffect(() => {
    fetch(`http://${process.IP}:${process.PORT}/sidemenu`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setsideData(data);
    })
  },[]);

  const sideList = sideData.map(item => {
    return(
      <div className="same-style cart-wrap d-block" key={item.id}>
        <Link to={item.url}><i className={item.name}></i>
          <span className="count-style">{item.count}</span>
        </Link>
      </div>
    );
  })

  return(
    <div className="col-xl-2 col-lg-2 col-md-6 col-8">
      <div className="header-right-wrap ">
        {sideList}
        {/* 햄버거 */}
        <div className="same-style mobile-off-canvas d-block d-lg-none">
          <button className="mobile-aside-button"><i className="las la-bars"></i></button>
        </div>
      </div>
    </div>
  );
}