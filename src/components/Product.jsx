import React from 'react'
import "../components/Product.css"

function Product(props) {
  function Click(){
    alert(`
          Nama=${props.productName}
          Harga=${props.productPrice}`)
  }
  
  return (
      <div id='backo' onClick={Click}>
        <div style={{
          backgroundColor: 'brown',
          width: 150,
          borderRadius: 15,
          padding: 10,
          color : "white"
        }}>
          <img src={props.urlImage}/>
          <p>{props.name}</p>
          <p>{props.harga}</p>
      </div>
    </div>
  )
}
export default Product


