import React, { useState } from 'react';
import { Col, Row, Input, Button, Image, Select, Radio } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';
import visalogo from '../Images/visa.png';
import paypallogo from '../Images/paypal.png'

const { Option } = Select;

function ShoppingCart() {
    const [radioValue, setRadioValue] = useState(1);

    function onChangeRadio(e) {
        console.log('radio checked', e.target.value);
        setRadioValue(e.target.value);
    }

    function onChangeTextarea(e) {
        //
    };

    function handleChangeSelect(e) {
        //
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    return (
        <>
            <Row style={{ marginTop: "10px", display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
                <h1>1 item in your Cart</h1>
                <Button type="primary" >Keep Shopping</Button>
            </Row>
            <Row style={{ marginTop: "10px", padding: "20px 0", border: "1px solid hsl(0,0%,90%)", display: 'flex', backgroundColor: "white", justifyContent: "space-between", boxShadow: "0 2px 1px -2px gray" }}>
                <Col span={14} style={{ padding: "0 20px", borderRight: "1px solid hsl(0,0%,90%)" }}>
                    < Row justify="space-between" >
                        <h3><DingdingOutlined />by Joessa</h3>
                        <span>Contact Shop</span>
                    </Row>
                    <Row style={{ margin: "20px 0", display: "flex" }}>
                        <Image
                            width={150}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <div style={{ width: '200px', margin: '0 20px', display: 'flex', flexWrap: 'wrap' }}>
                            <p>This is a solution that fits better the requirements of the question.It really spans the full bottom of the element.</p>
                            <p style={{ color: 'gray' }}>Size : Large</p>
                            <div style={{ display: 'flex' }}>
                                <Button type="link" block style={{ padding: '0' }}>
                                    Save for later
                                        </Button>
                                <Button type="link" block>
                                    Remove
                                        </Button>
                            </div>
                        </div>

                        <div>
                            <Select defaultValue="1" style={{ width: 60 }} onChange={handleChangeSelect}>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                            </Select>
                        </div>
                        <div style={{ color: 'green', display: 'flex', justifyContent: 'flex-end', flexGrow: '1' }}>
                            <span>$33.25</span>
                        </div>
                    </Row>
                    <Row justify="space-between">
                        <Input.TextArea placeholder="textarea with clear icon" allowClear onChange={onChangeTextarea} style={{ width: '50%' }} />
                        <span style={{ textAlign: 'right' }}>Ready to ship 1-3 business days <br /> from United Kingdom</span>
                    </Row>
                </Col>

                <Col span={10} style={{ height: '100%', padding: "0 20px" }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                        <h3>How you'll pay</h3>
                        <Radio.Group onChange={onChangeRadio} value={radioValue}>
                            <Radio style={radioStyle} value={1}>
                                <img src={visalogo} width={35} />
                            </Radio>
                            <Radio style={radioStyle} value={2}>
                                <img src={paypallogo} width={50} />
                            </Radio>
                        </Radio.Group>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Item(s) total</span>
                        <span>$33.25</span>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>Shipping</span>
                        <span>$19.18</span>
                    </Row>
                    <Row style={{ borderBottom: "1px solid hsl(0,0%,90%)", paddingBottom: '8px' }}>
                        <span>(To France)</span>
                    </Row>
                    <Row style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <h3>Total</h3>
                        <span>$52.43</span>
                    </Row>
                    <Button type="primary" style={{ width: '100%', margin: '0 0 10px 0' }}>Proceed to checkout</Button>
                    <span style={{ color: 'gray' }}>VAT included (where applicable). Additional duties and taxes may applies.</span>

                </Col>
            </Row>


        </>
    )
}

export default ShoppingCart
