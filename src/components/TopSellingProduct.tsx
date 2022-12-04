import {Wrapper, ProductWrapper} from "./TopSellingProduct.styles";
import React from "react";

type Props = {
  products: Product[]
}

const TopSellingProduct: React.FC<Props> = ({products}) => {
  return (
    <Wrapper>
      <h2>SẢN PHẨM BÁN CHẠY</h2>
      <div className="products">
        {products.map(product => (
          <ProductCard imageUrl={product.imageUrl} name={product.name} price={product.price}/>
        ))}
      </div>
    </Wrapper>
  )
}

export type Product = {
  imageUrl: string,
  name: string,
  price: number
}

const ProductCard: React.FC<Product> = ({imageUrl,name,price}) => {
  return (
    <ProductWrapper>
      <img className="image" src={imageUrl} alt={name}/>
      <p className="name">{name}</p>
      <p className="price">{new Intl.NumberFormat('vi-VN').format(price)}đ</p>
    </ProductWrapper>
  )
}

export default TopSellingProduct;