"use client";
import React from 'react';
import Typography from '@/components/Typography';
import { Col, Row, Button, Form, Input, Select, Checkbox, Modal} from 'antd';

import { GlobalOutlined, ShoppingOutlined, AppleOutlined, ShoppingCartOutlined, DollarOutlined } from '@ant-design/icons';

import { ReactNode } from 'react';
import { API_URL } from '../../../../libs/constant';

interface BoxComponentProps {
    icon?: ReactNode;
    text : string;
}

const BoxComponent: React.FC<BoxComponentProps> = ({ icon, text }) => {
    return (
        <div style={{ backgroundColor: 'orange', color: 'black', padding: '20px', textAlign: 'center', borderRadius: '15px', width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            {icon}
            <br />
            <Typography.Title level={5} style={{ alignSelf: 'center' }}>{text}</Typography.Title>
        </div>
    );
};
const { Option } = Select;

const PartnerWithUsResellerPage: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = async (values: {
        firstName: string; 
        lastName: string; 
        email: string; 
        provinceID: 
        string; 
        city: string; 
        address: string; 
        instagram: string; 
        tiktok: string; 
        facebook: string; 
        whatsapp: string; 
        termsAndConditions: boolean; 
        role: string | undefined | null; 
    }) => {
        console.log('Form values:', values);
        // Add your logic here to handle form submission
        values.role = 'Affiliate'
        showModal();
        try {
            const response = await fetch(`${API_URL}/partnership/createPartnership`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
        
            if (response.ok) {
              // Handle successful response
              showModal();
            } else {
              // Handle error response
              throw new Error('Failed to create partnership');
            }
          } catch (error) {
            // Handle fetch error
            console.error(error);
          }
    }
    return (
        <main className='flex min-h-screen flex-col gap-5 p-24'>
        <Row gutter={24}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center'}}>Yakin ga mau jadi Affiliate Market?</Typography.Title>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={3}/>
            <Col className='gutter-row' span={6}>
                <BoxComponent icon={<ShoppingOutlined style={{ fontSize: '24px', alignSelf: 'center' }}/>} text='Dapetin Reward dan Points dari Khaloo' />
            </Col>
            <Col className='gutter-row' span={6}>
                <BoxComponent icon={<ShoppingCartOutlined style={{ fontSize: '24px', alignSelf: 'center' }}/>} text='Dapet Produk Untuk direview, Gratis Ongkir'/>
            </Col>
            <Col className='gutter-row' span={6}>
                <BoxComponent icon={<DollarOutlined style={{ fontSize: '24px', alignSelf: 'center' }}/>} text='Komisi Mulai Dari 10%'/>
            </Col>
            <Col className='gutter-row' span={3}/>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center'}}>XXX +++</Typography.Title>
                <p style={{ textAlign: 'center', fontSize: '24px' }}>
                    Affiliate Market Di Berbagai kota di Indonesia Merasakan Keuntungan dan Komunitas yang Suportif di Khaloo
                </p>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={24}>
                <Typography.Title level={3} style={{textAlign: 'center'}}>Emangnya Affiliate Ngapain aja?</Typography.Title>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={3}/>
            <Col className='gutter-row' span={6}>
                <BoxComponent text='Buat Konten Produk Khaloo Di Sosmed'/>
            </Col>
            <Col className='gutter-row' span={6}>
                <BoxComponent text='Advocate Product Secara Digital'/>
            </Col>
            <Col className='gutter-row' span={6}>
                <BoxComponent text='Kumpulin Point dan Reward dari berbagai tantangan!'/>
            </Col>
            <Col className='gutter-row' span={3}/>
        </Row>
        <Row gutter={24}>
                <Col className='gutter-row' span={6}/>
                <Col className='gutter-row' span={12}>
                    <Typography.Title level={2} style={{marginTop: '20px', textAlign: 'center'}}>Gas Daftar!</Typography.Title>
                    <Form onFinish={onFinish}>
                        <Row gutter={24}>
                            <Col className='gutter-row' span={12}>
                                <Form.Item
                                    name="firstName"
                                    label="First Name"
                                    rules={[{ required: true, message: 'Please enter your first name' }]}
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col className='gutter-row' span={12}>
                                <Form.Item
                                    name="lastName"
                                    label="Last Name"
                                    rules={[{ required: true, message: 'Please enter your last name' }]}
                                    labelCol={{ span: 24 }}
                                    wrapperCol={{ span: 24 }}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                            ]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="province"
                            label="Province"
                            rules={[{ required: true, message: 'Please select your province' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Select>
                                <Select.Option value="Jakarta">Jakarta</Select.Option>
                                <Select.Option value="Bogor">Bogor</Select.Option>
                                <Select.Option value="Depok">Depok</Select.Option>
                                <Select.Option value="Tangerang">Tangerang</Select.Option>
                                <Select.Option value="Bekasi">Bekasi</Select.Option>
                                <Select.Option value="Jawa Barat">Jawa Barat</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="city"
                            label="City"
                            rules={[{ required: true, message: 'Please enter your city' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Full Address"
                            rules={[{ required: true, message: 'Please enter your full address' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item
                            name="instagram"
                            label="Instagram"
                            rules={[{ required: true, message: 'Please enter your Instagram username' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="tiktok"
                            label="Tiktok"
                            rules={[{ required: true, message: 'Please enter your Tiktok username' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="facebook"
                            label="Facebook"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="whatsapp"
                            label="Whatsapp"
                            rules={[{ required: true, message: 'Please enter your Whatsapp number' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="termsAndConditions"
                            valuePropName="checked"
                            rules={[{ required: true, message: 'Please accept the terms and conditions' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Checkbox>
                                Saya Telah Membaca dan menyetujui Syarat dan ketentuan yang berlaku
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#F26A2A', color: 'black' }}>
                                Send
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col className='gutter-row' span={6}/>
            </Row>
            <Modal visible={isModalVisible} footer={[
                <Button key="back" onClick={handleOk}>
                    Oke!
                </Button>
            ]}>
                <Typography.Title level={3}>Kamu berhasil Daftar! Tim kami akan kontak kamu dalam waktu 7x24 Jam!</Typography.Title>
            </Modal>
        </main>
    )
}

export default PartnerWithUsResellerPage;