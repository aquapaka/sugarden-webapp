import {Wrapper, ProductsWrapper, ProductWrapper, ImageWrapper} from "./TopSellingProduct.styles";
import React from "react";

type Props = {
  products: Product[]
}

const TopSellingProduct: React.FC<Props> = ({products}) => {
  return (
    <Wrapper>
      <h1>SẢN PHẨM BÁN CHẠY</h1>
      <ProductsWrapper>
        {products.map(product => (
          <ProductCard imageUrl={product.imageUrl} name={product.name} price={product.price}/>
        ))}
      </ProductsWrapper>
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
    <ProductWrapper href="javascript:void(0);">
      <ImageWrapper>
        <img className="image" src={imageUrl} alt={name}/>
      </ImageWrapper>
      <p className="name">{name}</p>
      <p className="price">{new Intl.NumberFormat('vi-VN').format(price)}đ</p>
    </ProductWrapper>
  )
}

export default TopSellingProduct;