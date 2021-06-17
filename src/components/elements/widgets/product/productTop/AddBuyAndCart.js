import { useState } from "react";

export default function AddBuyAndCart({data, color, size}) {

  var process = require('../../../../../myprocess.json');

  const [ count, setCount ] = useState(1);

  const handleCountAdd = () => {
    setCount(count+1)
  }

  const handleCountMinus = () => {
    if(count == 1){
      alert('1개 미만으로는 주문할 수 없습니다.')
    }
    else {
      setCount(count-1)
    }
  }


  const handlePutCompareList = () => {
    fetch(`http://${process.IP}:${process.PORT}/compare`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        discount: data.discount,
        shortDescription : data.shortDescription,
        rating : data.rating
      })
    })
  }

  const handlePutWishList = () => {
    fetch(`http://${process.IP}:${process.PORT}/wish`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        discount: data.discount
      })
    })
  }

  const handlePutCartList = () => {
    fetch(`http://${process.IP}:${process.PORT}/cart`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        discount: data.discount,
        qty: count,
        color: color,
        size: size
      })
    })
  }

  return(
    <div className="pro-details-quality">
      <div className="cart-plus-minus">
        <button className="dec qtybutton" onClick={() => handleCountMinus()}>-</button>
        <input className="cart-plus-minus-box" type="text" readOnly="" value={count}/>
        <button className="inc qtybutton" onClick={() => handleCountAdd()}>+</button>
      </div>
      <div className="pro-details-cart btn-hover">
        <button onClick={() => handlePutCartList()}>Add To Cart</button>
      </div>
      <div class="pro-details-cart btn-hover ml-0"> 
        <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
      </div>
      <div className="pro-details-wishlist">
        <button 
          className="" 
          title="Add to wishlist" 
          onClick={() => handlePutWishList()}
        >
          <i className="las la-bookmark"></i>
        </button>
      </div>
      <div className="pro-details-compare">
        <button 
         className="" 
         title="Add to compare"
         onClick={() => handlePutCompareList()}
         >
          <i className="las la-random"></i>
        </button>
      </div>
    </div>
  );
}