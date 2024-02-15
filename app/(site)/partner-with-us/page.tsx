import Typography from '@/components/Typography';
// import Button from '@/components/button';
import { Col, Row, Button } from 'antd';
import React from 'react';

const PartnerWithUsPage: React.FC = () => {
    return (
        <>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center'}}>Tertarik Menjadi Partner Kami ?</Typography.Title>
            </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className='gutter-row' span={6} />
            <Col className='gutter-row' span={6}>
                <div style={{ border: '1px solid orange', margin: '0 10px', padding: '10px' }}>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> XXXX +++ </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller Khaloo di berbagai kota di Indonesia </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Paragraph >
                                Seneng jualan produk langsung? Mau Pegang Produk Khaloo dalam jumlah besar? kamu cocok nih jadi affiliate market kami!
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                            <Button>
                                Selengkapnya
                            </Button>
                        </Col>
                    </Row>
                </div>                    
            </Col>
            <Col className='gutter-row' span={6}>
            <div style={{ border: '1px solid orange', margin: '0 10px', padding: '10px' }}>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> XXXX +++ </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller Khaloo di berbagai kota di Indonesia </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Paragraph >
                                Seneng jualan produk langsung? Mau Pegang Produk Khaloo dalam jumlah besar? kamu cocok nih jadi affiliate market kami!
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                    <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                            <Button>
                                Selengkapnya
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span={6}/>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center', padding: '10px'}}>Masih ragu buat kerja sama? Tanya tanya dlu sabi kok {':)'}</Typography.Title>
            </Col>
        </Row>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '20px'}}>
                <Button>
                    Selengkapnya
                </Button>
            </Col>
        </Row>
        </>
    );
};

export default PartnerWithUsPage;
