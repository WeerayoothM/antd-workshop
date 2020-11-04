import React, { useState } from 'react';
import './App.less';
import { Col, Row, Input, Button, Image, Select, Radio } from 'antd';

import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import SuggestProduct from './components/SuggestProduct';
import Payment from './components/Payment';


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProduct, setCartProduct] = useState([]
    //[
    //   {
    //     id: 1,
    //     imgUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //     seller: "Joessa",
    //     description: "This is a solution that fits better the requirements of the question.",
    //     price: 35.25,
    //     size: 'large',
    //   },
    //   {
    //     id: 2,
    //     imgUrl: "https://s.isanook.com/hi/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMjk4LzE0OTM3MTcvaXBob25lLTEyLXByby1uYXZ5LWJsdWUuanBn.jpg",
    //     seller: "Apple",
    //     description: "This is a solution that fits better the requirements of the question.",
    //     price: 19.18,
    //     size: 'regular',
    //   },
    //   {
    //     id: 3,
    //     imgUrl: "https://images.samsung.com/th/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg",
    //     seller: "Sumsung",
    //     description: "This is a solution that fits better the requirements of the question.",
    //     price: 19.18,
    //     size: 'regular',
    //   },
    // ]
  );

  // useEffect(() => {
  //   cartProduct.reduce(product)

  // }, [cartProduct])

  function removeProduct(id, amountProduct) {
    const newProduct = cartProduct.filter(product => product.id !== id);
    const index = cartProduct.findIndex(product => product.id === id);
    setCartProduct(newProduct)
    setTotalPrice(prev => {
      console.log('afterSettotalprice', prev - (cartProduct[index].price * amountProduct))
      return prev - (cartProduct[index].price * amountProduct)
    });
    console.log('beforeSet', totalPrice)
  }

  return (
    <>
      <Header />
      <Row justify="center" style={{ backgroundColor: "#F3F3F3" }}>
        <Col span={16}>
          <Row style={{ marginTop: "10px", display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
            <h1>{cartProduct.length} item in your Cart</h1>
            <Button type="primary" >Keep Shopping</Button>
          </Row>
          <Row style={{ marginTop: "10px", padding: "20px 0", border: "1px solid hsl(0,0%,90%)", display: 'flex', backgroundColor: "white", justifyContent: "space-between", boxShadow: "0 2px 1px -2px gray" }}>
            <Col span={14}>
              {cartProduct.map((product, idx) => {
                return (
                  <ShoppingCart key={product.id} product={product} setTotalPrice={setTotalPrice} removeProduct={removeProduct} />
                )
              })}

            </Col>
            <Col span={10} style={{ height: '100%', padding: "0 20px" }}>

              <Payment totalPrice={totalPrice} cartProduct={cartProduct} />
            </Col>
          </Row>
          <SuggestProduct product={mockProduct} cartProduct={cartProduct} setCartProduct={setCartProduct} />
        </Col>
      </Row>

    </>
  );
}


const mockProduct = [
  {
    id: 1,
    imgUrl: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    seller: "Joessa",
    description: "This is a solution that fits better the requirements of the question.",
    price: 35.25,
    size: 'large',
  },
  {
    id: 2,
    imgUrl: "https://s.isanook.com/hi/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMjk4LzE0OTM3MTcvaXBob25lLTEyLXByby1uYXZ5LWJsdWUuanBn.jpg",
    seller: "Apple",
    description: "This is a solution that fits better the requirements of the question.",
    price: 19.18,
    size: 'regular',
  },
  {
    id: 3,
    imgUrl: "https://images.samsung.com/th/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg",
    seller: "Sumsung",
    description: "This is a solution that fits better the requirements of the question.",
    price: 19.18,
    size: 'regular',
  },
  {
    id: 4,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFFaN9aNy2G9c_DECvJuI3CLrKw2jK0v-YKQ&usqp=CAU",
    seller: "Xiaomi",
    description: "This is a solution that fits better the requirements of the question.",
    price: 19.18,
    size: 'regular',
  },
  {
    id: 5,
    imgUrl: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/pdp/phones/p30/P30_share-img.jpg",
    seller: "Huawei",
    description: "This is a solution that fits better the requirements of the question.",
    price: 19.18,
    size: 'regular',
  },
  {
    id: 6,
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv5qtF9i225V7xRpTA5V3hpa9Icy7DLDmhPA&usqp=CAU",
    seller: "Canon",
    description: "This is a solution that fits better the requirements of the question.",
    price: 19.18,
    size: 'regular',
  },

]

export default App;
