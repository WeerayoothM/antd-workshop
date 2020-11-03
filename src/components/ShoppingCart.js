import React, { useState, useEffect } from 'react';
import { Col, Row, Input, Button, Image, InputNumber } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';



function ShoppingCart(props) {
    const { imgUrl, seller, description, price, size, id } = props.product;
    const { setTotalPrice, removeProduct } = props;
    const [amountProduct, setAmountProduct] = useState(1)

    useEffect(() => {
        setTotalPrice(prev => prev + price);
    }, [])
    function onChangeTextarea(e) {
        //
    };



    function onChangeNumber(value) {
        console.log('changed', value);
        setAmountProduct((prevAmount) => {
            console.log(prevAmount)
            if (prevAmount > value) {
                setTotalPrice(prevPrice => prevPrice - price)
            } else {
                setTotalPrice(prevPrice => prevPrice + price)
            }
            return value
        })
    }

    return (
        <Row >
            <Col style={{ padding: "0 20px", borderRight: "1px solid hsl(0,0%,90%)" }}>
                < Row justify="space-between" >
                    <h3><DingdingOutlined />by {seller}</h3>
                    <span>Contact Shop</span>
                </Row>
                <Row style={{ margin: "20px 0", display: "flex" }}>
                    <Image
                        width={150}
                        src={imgUrl}
                    />
                    <div style={{ width: '200px', margin: '0 20px', display: 'flex', flexWrap: 'wrap' }}>
                        <p>{description}</p>
                        <p style={{ color: 'gray' }}>Size : {size}</p>
                        <div style={{ display: 'flex' }}>
                            <Button type="link" style={{ padding: '0' }}>
                                Save for later
                                        </Button>
                            <Button type="link" onClick={() => removeProduct(id)}>
                                Remove
                        </Button>
                        </div>
                    </div>

                    <div>
                        <InputNumber min={1} max={10} defaultValue={amountProduct} onChange={onChangeNumber} />
                    </div>
                    <div style={{ color: 'green', display: 'flex', justifyContent: 'flex-end', flexGrow: '1' }}>
                        <span>${price}</span>
                    </div>
                </Row>
                <Row justify="space-between">
                    <Input.TextArea placeholder="textarea with clear icon" allowClear onChange={onChangeTextarea} style={{ width: '50%' }} />
                    <span style={{ textAlign: 'right' }}>Ready to ship 1-3 business days <br /> from United Kingdom</span>
                </Row>
            </Col>

        </Row>

    )
}

export default ShoppingCart
