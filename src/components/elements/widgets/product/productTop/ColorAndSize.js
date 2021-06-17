import React, { useEffect, useState } from 'react';

export default function ColorAndSize({data, setColor, setSize}) {
  
  const [isCheck, setIsCheck] = useState(false);  
  const [ sizeDatas, setSizeDatas ] = useState([]);

  var process = require('../../../../../myprocess.json');

  useEffect(()=>{
    fetch(`http://${process.IP}:${process.PORT}/size`)
    .then(res => {
        return res.json();
    })
    .then(data => {
        setSizeDatas(data);
    });
  },[process.IP, process.PORT]);

  function toggleCheck(e) {
      setIsCheck(!isCheck);
      alert(e.target.value)
  }
  
  return(
    <div className="pro-details-size-color">
      <div className="pro-details-color-wrap">
        <span>Color</span>
        <div className="pro-details-color-content">
          {  
            data ? data.map((item, index) => (
                <label key={index} className={`pro-details-color-content--single ${item.color}`}>
                    <input type="radio" name="product-color" value={item.color} onClick={() => setColor(item.color)}/>
                    <span className="checkmark"></span>
                </label>
            ))
            : <p style={{fontSize:"0.7rem"}}>no color</p>
          }
        </div>
      </div>

      <div className="pro-details-size">
        <span>Size</span>
        <div className="pro-details-size-content">
          {
            sizeDatas.map(item => (
              <label className="pro-details-size-content--single" key={item.id}>
                <input type="radio" value={item.name} onClick={()=>setSize(item.name)}/>
                <span className="size-name">{item.name}</span>
              </label>
            ))  
          }
        </div>
      </div>
    </div>
  );
}