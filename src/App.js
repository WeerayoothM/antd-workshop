import React, { useState } from 'react';
import './App.less';
import { Col, Row, Input, Button, Image, Select, Radio } from 'antd';

import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import SuggestProduct from './components/SuggestProduct';


function App() {
  return (
    <>

      <Header />
      <Row justify="center" style={{ backgroundColor: "#F3F3F3" }}>
        <Col span={16}>
          <ShoppingCart />
          <SuggestProduct />
        </Col>
      </Row>

    </>
  );
}
export default App;
