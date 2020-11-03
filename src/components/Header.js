import React from 'react'
import { Col, Row, Input, Button, Image, Select, Radio } from 'antd';
import { HomeOutlined, UserOutlined, HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;


function Header() {
    function onChangeRadio(e) {
        //
    }


    function onSearch(e) {
        console.log(e)
    }

    return (
        <>
            <Row justify="center" style={{ borderBottom: "1px solid hsl(0,0%,90%)" }}>
                <Col span={8} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1 style={{ color: "khaki", fontSize: "35px" }}>Etsy</h1>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="default"
                        onSearch={onSearch}
                        style={{ width: '70%', marginRight: '30px', color: 'hsl(188, 60%, 40%)' }}
                    />

                </Col>
                <Col
                    span={8}
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <ul style={{ height: '100%', listStyleType: 'none', fontSize: '15px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '5px' }}>
                        <li style={{ marginRight: '15px', paddingRight: '10px', borderRight: "1px solid hsl(0,0%,90%)", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center' }}><span style={{ color: 'hsl(188, 60%, 50%)' }}>Sell on Etsy</span></li>
                        {mainMenus.map((menu, index) => {
                            const isLastIndex = mainMenus.length - 1 === index;
                            return (
                                <li
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        listStyleType: "none",
                                        marginRight: isLastIndex ? 0 : 20,
                                        paddingRight: isLastIndex ? 0 : 20,
                                        borderRight: isLastIndex ? "" : "1px solid hsl(0,0%,90%)",
                                    }}
                                >
                                    {menu.icon}
                                    <span>{menu.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </Col>
            </Row >

            <Row justify="center" style={{ borderBottom: "1px solid hsl(0,0%,90%)", boxShadow: "0 2px 1px -2px gray" }}>
                <Col span={16} >
                    <ul style={{ height: '100%', listStyleType: 'none', fontSize: '12px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '5px' }}>
                        {categories.map((category, index) => {
                            const isLastIndex = categories.length - 1 === index;
                            return (
                                <li
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        listStyleType: "none",
                                        marginRight: isLastIndex ? 0 : 20,
                                        paddingRight: isLastIndex ? 0 : 20,
                                    }}
                                >
                                    {category.name}
                                </li>

                            )
                        })}
                    </ul>
                </Col>
            </Row>

        </>
    )
}

const mainMenus = [
    { name: "Home", icon: <HomeOutlined /> },
    { name: "Favorite", icon: <HeartOutlined /> },
    { name: "You", icon: <UserOutlined /> },
    { name: "Cart", icon: <ShoppingCartOutlined /> },
];

const categories = [
    { name: "Clothing & Accessories" },
    { name: "Jewelry" },
    { name: "Craft Supplies & Tools" },
    { name: "Weddings" },
    { name: "Entertainment" },
    { name: "Home & Living" },
    { name: "Kids & Baby" },
    { name: "Vintage" },
];


export default Header
