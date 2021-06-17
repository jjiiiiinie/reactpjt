import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle() {

  const { id } = useParams();

  const [ datas, setDatas ] = useState([]);
  const [ color, setColor ] = useState("");
  const [ size, setSize ] = useState("");

  var process = require('../../../../../myprocess.json');

  useEffect(()=>{
      fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
      .then(res => {
          return res.json();
      })
      .then(data => {
        setDatas(data);
      });
  },[]);

  return(
    <Fragment>
      <ColorAndSize
         data = {datas.variation}
         setColor = {setColor}
         setSize = {setSize}
      />
      <AddBuyAndCart 
        data = {datas}
        color = {color}
        size = {size}
      />
    </Fragment>
  );
}