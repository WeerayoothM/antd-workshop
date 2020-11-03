import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Col, Row, Input, Button, Image, Select, Radio, Card, Avatar } from 'antd';
import { DingdingOutlined } from '@ant-design/icons';

const { Meta } = Card;

function ProductCard() {
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
    return (
        <>
            <Col span={8} style={{ display: "flex", flexDirection: "column" }}>
                <Row style={{ padding: '10px', display: "flex", justifyContent: 'space-between', backgroundColor: 'white', borderBottom: '1px solid hsl(0,0%,90%)' }}>
                    <Col span={12} >
                        <Image
                            height={'100%'}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </Col>
                    <Col span={11} style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <p>This is a solution that fits better the requirements of the question.</p>
                        <Button type="link" block style={{ padding: '0' }}>
                            By ieie
                        </Button>
                    </Col>
                </Row >
                <Row style={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', }}>
                    <span>$19.18</span>
                    <Button type="primary">Add to Cart</Button>
                </Row>

            </Col>
        </>
    )
}

export default ProductCard
