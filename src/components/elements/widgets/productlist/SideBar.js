import { useEffect, useState } from 'react';


export default function SideBar() {

  var process = require('../../../../myprocess.json')

  const [ categoryData, setCategoryData ] = useState([]);
  const [ colorData, setColorData ] = useState([]);
  const [ sizeData, setSizeData ] = useState([]);

  useEffect(() => {
    fetch(`http://${process.IP}:${process.PORT}/category`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setCategoryData(data);
    });

    fetch(`http://${process.IP}:${process.PORT}/color`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setColorData(data);
    });

    fetch(`http://${process.IP}:${process.PORT}/size`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setSizeData(data);
    });
  },[]);
  
  return(
    <div className="col-lg-3 order-2 order-lg-1">
      <div className="sidebar-style mr-30">
        <div className="sidebar-widget">
          <h4 className="pro-sidebar-title">Search </h4>
          <div className="pro-sidebar-search mb-50 mt-25">
            <form className="pro-sidebar-search-form" action="#">
              <input type="text" placeholder="Search here..." />
              <button><i className="pe-7s-search"></i></button>
            </form>
          </div>
        </div>
        <div className="sidebar-widget">
          <h4 className="pro-sidebar-title">Categories</h4>
          <div className="sidebar-widget-list mt-30">
            <ul>
              <li>
                <div className="sidebar-widget-list-left">
                  <button><span className="checkmark"></span> All Categories</button>
                  {
                    categoryData.map(item => (
                      <button key={item.id}><span className="checkmark"></span>{item.name}</button>
                    ))
                  }
                </div>
              </li>
            </ul>
          </div>

          <h4 className="pro-sidebar-title">Color</h4>
          <div className="sidebar-widget-list mt-30">
            <ul>
              <li>
                <div className="sidebar-widget-list-left">
                  <button><span className="checkmark"></span> All Colors</button>
                  {
                    colorData.map(item => (
                      <button key={item.id}><span className="checkmark"></span>{item.name}</button>
                    ))
                  }
                </div>
              </li>
            </ul>
          </div>

          <h4 className="pro-sidebar-title">Size</h4>
          <div className="sidebar-widget-list mt-30">
            <ul>
              <li>
                <div className="sidebar-widget-list-left">
                  <button><span className="checkmark"></span> All Sizes</button>
                  {
                    sizeData.map(item => (
                      <button key={item.id}><span className="checkmark"></span>{item.name}</button>
                    ))
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      
        <div className="sidebar-widget mt-50">
          <h4 className="pro-sidebar-title">Tag </h4>
          <div className="sidebar-widget-tag mt-25">
            <ul>
              {
                categoryData.map(item => (
                  <li key={item.id}><button>{item.name}</button></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}