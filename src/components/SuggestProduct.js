import React, { useState } from 'react';
import { Col, Row, Input, Button, Image, Select, Radio, Card } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';

function SuggestProduct() {
    return (
        <>
            <Row style={{ marginTop: "20px", display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <h2>You might also like ...</h2>
            </Row>

            <div className="site-card-wrapper" style={{ marginTop: "10px" }}>
                <Row gutter={[32, 32]}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Row>
                <Row gutter={[32, 32]}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Row>
                <Row gutter={[32, 32]}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Row>
            </div>
        </>
    )
}

export default SuggestProduct
