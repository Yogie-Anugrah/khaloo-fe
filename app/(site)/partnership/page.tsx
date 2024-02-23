import Typography from '@/components/Typography';
import Link from 'next/link';
import { Col, Row, Button } from 'antd';
import React from 'react';

const PartnerWithUsPage: React.FC = () => {
    return (
        <main className='flex min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
        <Row gutter={24}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center'}}>Tertarik Menjadi Partner Kami ?</Typography.Title>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={6} />
            <Col className='gutter-row' span={6}>
                <div style={{ border: '1px solid orange', margin: '0 10px', padding: '10px' , display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> XXXX +++ </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Reseller Khaloo di berbagai kota di Indonesia </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ display: 'flex', alignItems: 'stretch' }}>
                        <Col span={24} style={{textAlign: 'justify', padding: '10px'}}>
                            <Typography.Paragraph >
                                Seneng jualan produk langsung? Mau Pegang Produk Khaloo dalam jumlah besar? kamu cocok nih jadi affiliate market kami!
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                    <Row gutter={24} style={{ marginTop: 'auto' }}>
                        <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                            <Button style={{ width: '100%', backgroundColor: '#F26A2A', color: 'white' }}>
                                <Link href="/partner-with-us/reseller">
                                    Selengkapnya
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>                    
            </Col>
            <Col className='gutter-row' span={6}>
            <div style={{ border: '1px solid orange', margin: '0 10px', padding: '10px' , display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Affiliate Market </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> XXXX +++ </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'center', padding: '10px'}}>
                            <Typography.Text style={{fontWeight: 'bold'}}> Affiliate Market Khaloo di berbagai kota di Indonesia </Typography.Text>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{textAlign: 'justify', padding: '10px'}}>
                            <Typography.Paragraph >
                                Berbakat Bikin Konten Review Skin care? Tertarik Dapetin Sampel Produk Gratis? Gaskeun Jadi Affiliate Kami!
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                            <Button style={{ width: '100%', backgroundColor: '#F26A2A', color: 'white' }}>
                                <Link href="/partner-with-us/affiliate">
                                    Selengkapnya
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span={6}/>
        </Row>
        <Row gutter={24}>
            <Col className='gutter-row' span={24}>
                <Typography.Title style={{textAlign: 'center', padding: '10px'}}>Masih ragu buat kerja sama? Tanya tanya dlu sabi kok {':)'}</Typography.Title>
            </Col>
        </Row>
        <Row gutter={24}>
            <Col span={24} style={{alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '20px'}}>
                <Button>
                    Selengkapnya
                </Button>
            </Col>
        </Row>
        </main>
    );
};

export default PartnerWithUsPage;
