function Product({ product, addItems }) {
    return (
      <div className="card productCard">
        <div className="imageBlock">
          {product.sale && <span className="sale">Sale</span>}
          {product.stockout && <div className="outOfStock">Out of Stock</div>}
          <img src={product.image} className="card-img-top" alt={product.name} />
        </div>
        <div className="card-body">
          <h5 className="cardTitle">{product.name}</h5>
          <p className="card-text priceValue">
            {product.sale && <del className="offerValue">{product.offerprice}</del>} {product.price}
          </p>
          <div className="ratingStar">
          <span className={`fa fa-star ${product.star1 && "checked"}  `}></span>
          <span className={`fa fa-star ${product.star2 && "checked"}  `}></span>
          <span className={`fa fa-star ${product.star3 && "checked"}  `}></span>
          <span className={`fa fa-star ${product.star4 && "checked"}  `}></span>
          <span className={`fa fa-star ${product.star5 && "checked"}  `}></span>
          </div>
          <button
            onClick={() => addItems(product)}
            className="btn btnPrimary"
            disabled={product.stockout}
          >
            {product.addToCartButton}
          </button>
        </div>
      </div>
    );
  }
  
  export default Product;
  