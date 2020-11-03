import React, { useState } from 'react';
import { Col, Row, Input, Button, Image, Select, Radio } from 'antd';
import visalogo from '../Images/visa.png';
import paypallogo from '../Images/paypal.png';
import mastercard from '../Images/mastercard.png';
import americanexpress from '../Images/american-express.png'
import discover from '../Images/discover.png';

const { Option } = Select;


function Payment(props) {
    const [radioValue, setRadioValue] = useState(1);
    const { totalPrice } = props;

    const shippingPrice = 19.18;

    function onChangeRadio(e) {
        console.log('radio checked', e.target.value);
        setRadioValue(e.target.value);
    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    return (

        // <Col span={10} style={{ height: '100%', padding: "0 20px" }}>
        <>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <h3>How you'll pay</h3>
                <Radio.Group onChange={onChangeRadio} value={radioValue}>
                    <Radio style={radioStyle} value={1}>
                        <img src={visalogo} width={30} />&nbsp;&nbsp;
                        <img src={mastercard} width={30} />&nbsp;&nbsp;
                        <img src={americanexpress} width={30} />&nbsp;&nbsp;
                        <img src={discover} width={30} />
                    </Radio>
                    <Radio style={radioStyle} value={2}>
                        <img src={paypallogo} width={50} />
                    </Radio>

                </Radio.Group>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Item(s) total</span>
                <span>${totalPrice}</span>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Shipping</span>
                <span>${shippingPrice}</span>
            </Row>
            <Row style={{ borderBottom: "1px solid hsl(0,0%,90%)", paddingBottom: '8px' }}>
                <span>(To France)</span>
            </Row>
            <Row style={{ paddingBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <h3>Total</h3>
                <span>${totalPrice + shippingPrice}</span>
            </Row>
            <Button type="primary" style={{ width: '100%', margin: '0 0 10px 0' }}>Proceed to checkout</Button>
            <span style={{ color: 'gray' }}>VAT included (where applicable). Additional duties and taxes may applies.</span>
        </>
        // </Col>
    )
}

export default Payment
