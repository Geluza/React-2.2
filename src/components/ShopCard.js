import '../App.css';
import PropTypes from "prop-types";


function ShopCard({products}) {
  return (
    <ul class="card_list">
  {products.map(product => {
  return (
    <li class="shop_card"> 
    <h3 className="shop_name">{product.name}</h3>
    <div className="product_color">{product.color}</div>
    <img src={product.img} className="shop_image" alt="картинка товара"></img>
    <div className="price_add-button">
    <span className="price">${product.price}</span>
    <button className="add_button">ADD TO CART</button> 
    </div>
  </li>
  )})
  } </ul>)
}



ShopCard.propTypes = {
  products: PropTypes.array,
}


export default ShopCard;
