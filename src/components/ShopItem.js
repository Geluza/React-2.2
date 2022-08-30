import '../App.css';
import PropTypes from "prop-types";

function ShopItem({products}) {
return(
<ul className="item_list">
{products.map(product =>{
    return (
 <li className="shop_item">
<img src={product.img} className="shop_item_image" alt="картинка товара"></img>
<h3 className="shop_item_name">{product.name}</h3>
    <span className="shop_item_color">{product.color}</span>
    <span className="shop_item_price">${product.price}</span>
    <button className="item_add_button">ADD TO CART</button> 
 </li>)
})
}
</ul>)
}

export default ShopItem;


ShopItem.propTypes = {
    products: PropTypes.array,
  }
  