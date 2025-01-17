import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom' 

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={ `/product/${props.id}`} > <img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
        <p>{props.name}</p>
        <div className='item-prices'>
            <div className='item-price-new'>
                BTN:{props.new_price*70}
            </div>
            <div className='item-price-old'>
                BTN:{props.old_price*70}
            </div>
        </div>
      
    </div>
  )
}

export default Item
