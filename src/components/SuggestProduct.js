import React, { useState } from 'react';
import { Col, Row, Input, Button, Image, Select, Radio, Card } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import ProductCard from './ProductCard';

function SuggestProduct(props) {
    return (
        <>
            <Row style={{ marginTop: "20px", display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <h2>You might also like ...</h2>
            </Row>

            <div className="site-card-wrapper" style={{ marginTop: "10px", display: 'flex', flexWrap: 'wrap' }}>
                <Row gutter={[32, 32]}>
                    {props.product.map((product, index) => {
                        return (
                            <ProductCard product={product} cartProduct={props.cartProduct} setCartProduct={props.setCartProduct} />
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

// const mockProduct = [
//     {
//         imgUrl: "https://s.isanook.com/hi/0/rp/r/w728/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hpLzAvdWQvMjk4LzE0OTM3MTcvaXBob25lLTEyLXByby1uYXZ5LWJsdWUuanBn.jpg",
//         seller: "Apple",
//         description: "This is a solution that fits better the requirements of the question.",
//         price: 19.18,
//         size: 'regular',
//     },
//     {
//         imgUrl: "https://images.samsung.com/th/smartphones/galaxy-note20/buy/001-note20series-productimage-mo-720.jpg",
//         seller: "Sumsung",
//         description: "This is a solution that fits better the requirements of the question.",
//         price: 19.18,
//         size: 'regular',
//     },
//     {
//         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFFaN9aNy2G9c_DECvJuI3CLrKw2jK0v-YKQ&usqp=CAU",
//         seller: "Xiaomi",
//         description: "This is a solution that fits better the requirements of the question.",
//         price: 19.18,
//         size: 'regular',
//     },
//     {
//         imgUrl: "https://consumer.huawei.com/content/dam/huawei-cbg-site/en/mkt/pdp/phones/p30/P30_share-img.jpg",
//         seller: "Huawei",
//         description: "This is a solution that fits better the requirements of the question.",
//         price: 19.18,
//         size: 'regular',
//     },
//     {
//         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQv5qtF9i225V7xRpTA5V3hpa9Icy7DLDmhPA&usqp=CAU",
//         seller: "Canon",
//         description: "This is a solution that fits better the requirements of the question.",
//         price: 19.18,
//         size: 'regular',
//     },
// ]


export default SuggestProduct
