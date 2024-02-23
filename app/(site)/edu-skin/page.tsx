"use client";
import Typography from '@/components/Typography';
import Link from 'next/link';
import { Col, Row, Button, Carousel } from 'antd';
import React from 'react';
import CustomCarousel from '@/components/Carousel';
import { AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';

interface Video {
    id: string;
    title: string;
    viewCount: number;
    imageUrl: string;
}


interface VideoProps {
    thumbnail: string;
    title: string;
    channelName: string;
    views: string | number;
    timePosted: string;
    videoLink: string;
}

interface YoutubeAvatarProps {
    imageUrl: string;
    subscriberCount: number;
  }

const videoArray: VideoProps[] = [
    {
        title: 'Khaloo Beauty Make Up Anti Longsor',
        views: 17,
        thumbnail: 'https://i.ytimg.com/vi/8ayvqwHmzj8/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        timePosted: 'Jul 25, 2023',
        videoLink: 'https://www.youtube.com/watch?v=8ayvqwHmzj8',
    },
    {
        title: 'The ULTIMATE Normal & Combination Skincare Routine',
        views: '266K',
        thumbnail: 'https://i.ytimg.com/vi/y7UyKEb2ZHw/maxresdefault.jpg',
        channelName: 'Doctorly Routines',
        timePosted: 'Dec 7, 2023',
        videoLink: 'https://www.youtube.com/watch?v=y7UyKEb2ZHw',
    },
    {
        title: 'Duo Combo Make Up Anti Longsor',
        thumbnail: 'https://i.ytimg.com/vi/yENNi6Vh0Yg/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        views: 17,
        timePosted: 'Aug 24, 2023',
        videoLink: 'https://www.youtube.com/watch?v=yENNi6Vh0Yg'
    },
    {
        title: 'Khaloo Beauty Make Up Anti Longsor',
        views: 17,
        thumbnail: 'https://i.ytimg.com/vi/8ayvqwHmzj8/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        timePosted: 'Jul 25, 2023',
        videoLink: 'https://www.youtube.com/watch?v=8ayvqwHmzj8',
    },
    {
        title: 'The ULTIMATE Normal & Combination Skincare Routine',
        views: '266K',
        thumbnail: 'https://i.ytimg.com/vi/y7UyKEb2ZHw/maxresdefault.jpg',
        channelName: 'Doctorly Routines',
        timePosted: 'Dec 7, 2023',
        videoLink: 'https://www.youtube.com/watch?v=y7UyKEb2ZHw',
    },
    {
        title: 'Duo Combo Make Up Anti Longsor',
        thumbnail: 'https://i.ytimg.com/vi/yENNi6Vh0Yg/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        views: 17,
        timePosted: 'Aug 24, 2023',
        videoLink: 'https://www.youtube.com/watch?v=yENNi6Vh0Yg',
    },
    {
        title: 'Khaloo Beauty Make Up Anti Longsor',
        views: 17,
        thumbnail: 'https://i.ytimg.com/vi/8ayvqwHmzj8/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        timePosted: 'Jul 25, 2023',
        videoLink: 'https://www.youtube.com/watch?v=8ayvqwHmzj8',
    },
    {
        title: 'The ULTIMATE Normal & Combination Skincare Routine',
        views: '266K',
        thumbnail: 'https://i.ytimg.com/vi/y7UyKEb2ZHw/maxresdefault.jpg',
        channelName: 'Doctorly Routines',
        timePosted: 'Dec 7, 2023',
        videoLink: 'https://www.youtube.com/watch?v=y7UyKEb2ZHw',
    },
    {
        title: 'Duo Combo Make Up Anti Longsor',
        thumbnail: 'https://i.ytimg.com/vi/yENNi6Vh0Yg/maxresdefault.jpg',
        channelName: 'Khaloo Beauty',
        views: 17,
        timePosted: 'Aug 24, 2023',
        videoLink: 'https://www.youtube.com/watch?v=yENNi6Vh0Yg',
    }
]

const YoutubeAvatar: React.FC<YoutubeAvatarProps> = ({ imageUrl, subscriberCount }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
            <img src={imageUrl} alt="Avatar" style={{ borderRadius: '50%', margin: '0 auto', marginBottom: '10px', maxWidth: '200px', maxHeight: '200px' }} />
            <div style={{ fontSize: '22px', display: 'flex', alignItems: 'center' }}>
                <AiFillYoutube style={{ marginRight: '5px' }} />
                <span style={{ fontWeight: 'bold' }}>Khaloo Beauty</span>
            </div>
            <div style={{ fontSize: '16px', display: 'flex', alignItems: 'center' }}>
                <span>{subscriberCount} subscribers</span>
            </div>
        </div>
    );
};

const Articles: React.FC = () => {
    return (
        <main className='flex min-h-screen flex-col gap-5 px-24 py-24 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
            <Row gutter={24}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={1} style={{ textAlign: 'center' }}>Explore Dunia Screencare Disini!</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={3} style={{ textAlign: 'left' }}>Fresh Video To Watch</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={4}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100%' }}>
                        <YoutubeAvatar imageUrl='https://yt3.googleusercontent.com/ytc/AIf8zZTUmfcTJBkhBS4gYnvaDAvSI-QYpyWyNSgBsfZcb_WNFrSuuR4oeNv6xVevC1jc=s176-c-k-c0x00ffffff-no-rj' subscriberCount={100} />
                    </div>
                </Col>
                <Col className='gutter-row' span={20}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: '100%' }}>
                    <RevealCarousel videos={videoArray} />
                    </div>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col className='gutter-row' span={24}>
                    <Typography.Title level={3} style={{ textAlign: 'left' }}>Nice Thing to read</Typography.Title>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col span = {24}>
                {articleArray.map((article, index) => (
                    <Row gutter={24} style={{ marginBottom: '20px' }} key={index}>
                        <Col className='gutter-row' span={24}>
                            <ArticleCard
                                title={article.title}
                                image={article.image}
                                author={article.author}
                                description={article.description}
                                created={article.created}
                                article_content={article.article_content}
                                article_id={article.article_id}
                            />
                        </Col>
                    </Row>
                ))}
                </Col>
            </Row>
        </main>
    )
};

const VideoCard: React.FC<VideoProps> = ({ thumbnail, title, channelName, views, timePosted, videoLink }) => {
    return (
        <a href={videoLink} className="w-48 p-2 link-black">
            <img src={thumbnail} alt={title} className="w-full rounded-lg" />
            <div className="text-center">
                <h4 className="text-lg font-bold" style={{ fontSize: '16px' }}>{title}</h4>
                <p className="text-sm" style={{ fontSize: '12px' }}>{channelName}</p>
                <span className="text-xs" style={{ fontSize: '10px' }}>{views} - {timePosted}</span>
            </div>
        </a>
    );
};

const RevealCarousel: React.FC<{ videos: VideoProps[] }> = ({ videos }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    const renderCarouselItems = () => {
        const carouselItems: JSX.Element[] = [];
        const videosPerRow = 2;

        for (let i = 0; i < videos.length; i += videosPerRow) {
            const videosChunk = videos.slice(i, i + videosPerRow);
            carouselItems.push(
                <div key={i} className={`carousel-item ${i === currentIndex ? 'active' : ''}`}>
                    <Row gutter={24}>
                        {videosChunk.map((video, index) => (
                            <Col key={index} className='gutter-row' span={24 / videosPerRow}>
                                <VideoCard {...video} />
                            </Col>
                        ))}
                    </Row>
                </div>
            );
        }
        return carouselItems;
    };

    return (
        <CustomCarousel infinite={false} enableArrow={true}>
            {renderCarouselItems()}
        </CustomCarousel>
    );
};

const articleArray = [
    {
        title: '6 Langkah Skincare Pagi yang Benar',
        image : 'https://www.shutterstock.com/shutterstock/photos/1416346496/display_1500/stock-photo-skincare-routine-step-for-healthy-skin-woman-hands-holding-facial-cotton-pad-foam-essential-oil-1416346496.jpg',
        author: 'Khaloo Beauty',
        description: 'Skincare pagi yang benar akan membuat kulitmu lebih sehat dan terlindungi dari berbagai masalah kulit. Yuk, simak langkah-langkahnya!',
        created: new Date('Jul 25, 2023'),
        article_content: `
        6 Langkah Skincare Pagi yang Benar: Panduan Lengkap untuk Merawat Kulit Sehari-hari
Skincare pagi adalah ritual yang penting untuk menjaga kulit Anda tetap sehat dan berseri sepanjang hari. Meskipun terkadang terlihat sederhana, langkah-langkah skincare pagi yang benar dapat membuat perbedaan yang besar dalam penampilan dan kesehatan kulit Anda secara keseluruhan. Dalam artikel ini, kita akan membahas enam langkah penting yang harus Anda lakukan dalam skincare pagi yang efektif.

1. Membersihkan Wajah dengan Lembut
Langkah pertama yang penting dalam skincare pagi adalah membersihkan wajah dengan lembut. Meskipun Anda sudah membersihkan wajah sebelum tidur, kulit Anda masih dapat mengumpulkan kotoran dan minyak semalaman. Oleh karena itu, membersihkan wajah di pagi hari adalah langkah penting untuk menyegarkan kulit Anda.

Pilihlah pembersih wajah yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit berminyak, pilihlah pembersih yang mengandung bahan-bahan seperti asam salisilat atau tea tree oil yang dapat membantu mengontrol produksi minyak berlebih. Sementara itu, jika Anda memiliki kulit kering atau sensitif, pilihlah pembersih yang lembut dan bebas dari pewangi atau bahan-bahan keras lainnya yang dapat menyebabkan iritasi.

Gunakan air hangat untuk membilas wajah Anda setelah membersihkan, karena air panas dapat mengeringkan kulit. Hindari menggosok wajah terlalu keras, karena hal ini dapat merusak lapisan kulit dan menyebabkan iritasi.

2. Menggunakan Toner untuk Menyeimbangkan pH Kulit
Langkah kedua dalam skincare pagi adalah menggunakan toner. Toner membantu menyegarkan kulit Anda dan menyeimbangkan pH setelah proses pembersihan. Ini juga membantu membersihkan sisa-sisa kotoran atau minyak yang mungkin masih tertinggal setelah pembersihan.

Pilihlah toner yang mengandung bahan-bahan alami seperti witch hazel, rose water, atau aloe vera yang dapat menenangkan dan melembapkan kulit Anda. Hindari toner yang mengandung alkohol, karena alkohol dapat mengeringkan kulit dan menyebabkan iritasi.

Tuangkan sedikit toner ke kapas dan tepuk-tepuk lembut di seluruh wajah Anda, hindari area mata. Biarkan toner meresap ke dalam kulit sebelum melanjutkan ke langkah berikutnya.

3. Serum untuk Memberikan Nutrisi Tambahan
Langkah ketiga dalam skincare pagi adalah menggunakan serum. Serum adalah produk perawatan kulit yang kaya akan bahan-bahan aktif yang dapat memberikan nutrisi tambahan untuk kulit Anda. Serum dapat membantu menargetkan masalah spesifik kulit Anda, seperti penuaan dini, hiperpigmentasi, atau dehidrasi.

Pilihlah serum yang sesuai dengan kebutuhan kulit Anda. Misalnya, jika Anda memiliki kulit kering, pilihlah serum yang mengandung asam hialuronat atau ceramide untuk membantu mengunci kelembapan di dalam kulit. Sementara itu, jika Anda memiliki kulit berjerawat, pilihlah serum yang mengandung asam salisilat atau niacinamide yang dapat membantu mengurangi peradangan dan mengontrol produksi minyak.

Aplikasikan serum dengan meneteskan beberapa tetes ke telapak tangan Anda dan tepuk-tepuk lembut di seluruh wajah dan leher. Biarkan serum meresap sepenuhnya sebelum melanjutkan ke langkah berikutnya.

4. Pelembap untuk Menjaga Kelembapan Kulit
Langkah selanjutnya dalam skincare pagi adalah menggunakan pelembap. Pelembap sangat penting untuk menjaga kelembapan kulit dan menciptakan lapisan pelindung dari polusi dan zat-zat berbahaya lainnya di lingkungan sekitar Anda.

Pilihlah pelembap yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit kering, pilihlah pelembap yang kaya akan bahan-bahan pelembap seperti minyak jojoba atau shea butter. Sementara itu, jika Anda memiliki kulit berminyak, pilihlah pelembap yang ringan dan bebas dari minyak, seperti gel atau lotion.

Gunakan pelembap secara merata di seluruh wajah dan leher setelah serum. Pastikan untuk memijatnya dengan lembut ke dalam kulit untuk meningkatkan penyerapan.

5. Perlindungan Matahari dengan Tabir Surya
Perlindungan dari sinar matahari sangat penting untuk menjaga kesehatan kulit Anda dan mencegah penuaan dini serta risiko kanker kulit. Oleh karena itu, langkah selanjutnya dalam skincare pagi adalah menggunakan tabir surya.

Pilihlah tabir surya dengan SPF minimal 30 dan yang melindungi dari sinar UVA dan UVB. Aplikasikan tabir surya secara merata di seluruh wajah, leher, dan area lain yang terpapar sinar matahari setidaknya 15 menit sebelum Anda keluar rumah. Jangan lupa untuk mengaplikasikan ulang setiap dua jam jika Anda berada di bawah sinar matahari langsung atau beraktivitas di luar ruangan.

6. Perawatan Tambahan sesuai Kebutuhan Kulit Anda
Selain keenam langkah utama di atas, Anda juga dapat menambahkan langkah-langkah tambahan sesuai kebutuhan kulit Anda. Misalnya, jika Anda memiliki masalah kulit tertentu seperti jerawat atau hiperpigmentasi, Anda dapat menggunakan produk perawatan tambahan seperti spot treatment atau produk mencerahkan. Selain itu, jangan lupakan perawatan bibir dan mata dengan menggunakan lip balm dan krim mata yang sesuai.

Perawatan tambahan ini dapat membantu menyelesaikan masalah spesifik kulit Anda dan meningkatkan hasil dari rutinitas skincare Anda secara keseluruhan.

Dengan mengikuti langkah-langkah di atas secara teratur, Anda dapat menciptakan rutinitas skincare pagi yang efektif untuk menjaga kesehatan dan kecantikan kulit Anda. Ingatlah bahwa konsistensi adalah kunci dalam merawat kulit, jadi pastikan untuk menjaga rutinitas Anda setiap hari. Selain itu, jangan lupakan pentingnya gaya hidup sehat seperti pola makan seimbang, cukup tidur, dan menghindari stres untuk mendukung kesehatan kulit Anda secara keseluruhan. Dengan perawatan yang tepat, Anda dapat meraih kulit yang sehat, cerah, dan berseri sepanjang hari.
        `,
        article_id: '1'
    },
    {
        title: '5 Langkah Skincare Malam yang Benar',
        image : 'https://www.shutterstock.com/shutterstock/photos/659319469/display_1500/stock-photo-bottles-and-jars-with-natural-skincare-cosmetics-creams-and-oils-on-dark-background-plant-based-659319469.jpg',
        author: 'Khaloo Beauty',
        description: 'Skincare malam yang benar akan membuat kulitmu lebih sehat dan terlindungi dari berbagai masalah kulit. Yuk, simak langkah-langkahnya!',
        created: new Date('Jul 25, 2023'),
        article_content: `
        Menjaga Kesehatan Kulit Anda: Panduan 5 Langkah Skincare Malam yang Benar
Skincare malam adalah ritual yang penting untuk menjaga kesehatan kulit Anda dan memperbaiki kerusakan yang terjadi selama seharian. Saat Anda tidur, kulit Anda melakukan proses regenerasi yang penting untuk memperbaiki dan memperbarui sel-sel kulit. Oleh karena itu, menggunakan produk skincare yang tepat pada malam hari dapat memberikan manfaat maksimal untuk kulit Anda. Dalam artikel ini, kita akan membahas lima langkah skincare malam yang benar untuk membantu Anda mencapai kulit yang sehat dan bersinar.

1. Membersihkan Wajah dengan Seksama
Langkah pertama dalam skincare malam yang benar adalah membersihkan wajah secara seksama untuk menghilangkan kotoran, minyak, dan sisa makeup yang menempel pada kulit sepanjang hari. Membersihkan wajah dengan baik pada malam hari penting karena dapat mencegah penyumbatan pori-pori, mencegah jerawat, dan memungkinkan produk perawatan kulit lainnya menyerap dengan lebih baik.

Pilihlah pembersih wajah yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit berminyak atau berjerawat, pilihlah pembersih yang mengandung bahan-bahan seperti asam salisilat atau benzoyl peroxide untuk membantu mengontrol produksi minyak dan membersihkan pori-pori. Jika kulit Anda cenderung kering atau sensitif, pilihlah pembersih yang lembut dan bebas dari pewangi atau bahan-bahan keras lainnya yang dapat menyebabkan iritasi.

Gunakan pembersih wajah dengan lembut, pijatkan dengan gerakan melingkar di seluruh wajah dan leher, kemudian bilas dengan air hangat. Pastikan untuk menghapus makeup dengan menyeluruh, termasuk di sekitar mata dan bibir.

2. Gunakan Toner untuk Menyeimbangkan pH Kulit
Setelah membersihkan wajah, langkah berikutnya adalah menggunakan toner untuk menyeimbangkan pH kulit dan mempersiapkannya untuk langkah-langkah perawatan selanjutnya. Toner juga membantu mengangkat sisa-sisa kotoran atau minyak yang mungkin masih tertinggal setelah pembersihan, serta menyegarkan kulit.

Pilihlah toner yang mengandung bahan-bahan alami seperti witch hazel, rose water, atau chamomile yang dapat menenangkan dan meredakan kulit. Hindari toner yang mengandung alkohol, karena alkohol dapat mengeringkan kulit dan menyebabkan iritasi.

Tuangkan sedikit toner ke kapas dan tepuk-tepuk lembut di seluruh wajah Anda, hindari area mata. Biarkan toner meresap ke dalam kulit sebelum melanjutkan ke langkah berikutnya.

3. Serum untuk Perbaikan Kulit yang Intensif
Langkah ketiga dalam skincare malam yang benar adalah menggunakan serum untuk perbaikan kulit yang intensif. Serum mengandung bahan-bahan aktif yang konsentrat dan memiliki kemampuan penetrasi yang lebih baik ke dalam kulit dibandingkan dengan pelembap biasa. Oleh karena itu, penggunaan serum pada malam hari dapat memberikan manfaat maksimal untuk memperbaiki kerusakan kulit dan merangsang regenerasi sel-sel kulit baru.

Pilihlah serum yang sesuai dengan kebutuhan kulit Anda. Misalnya, jika Anda memiliki masalah penuaan dini seperti garis halus atau kerutan, pilihlah serum yang mengandung bahan-bahan seperti retinol, vitamin C, atau peptida untuk membantu merangsang produksi kolagen dan elastin. Jika Anda memiliki masalah hiperpigmentasi atau noda hitam, pilihlah serum yang mengandung bahan-bahan seperti asam kojic atau arbutin yang dapat membantu mencerahkan dan menyamarkan noda kulit.

Aplikasikan serum dengan meneteskan beberapa tetes ke telapak tangan Anda dan tepuk-tepuk lembut di seluruh wajah dan leher. Biarkan serum meresap sepenuhnya sebelum melanjutkan ke langkah berikutnya.

4. Pelembap untuk Meningkatkan Kandungan Kelembapan Kulit
Langkah selanjutnya dalam skincare malam yang benar adalah menggunakan pelembap untuk meningkatkan kandungan kelembapan kulit. Pelembap sangat penting untuk menjaga kulit tetap terhidrasi dan elastis, terutama saat Anda tidur, karena kelembapan dapat mengurangi kerutan dan garis halus serta membantu kulit memperbaiki diri selama proses regenerasi malam hari.

Pilihlah pelembap yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit kering atau sangat kering, pilihlah pelembap yang kaya akan bahan-bahan pelembap seperti minyak alami (misalnya, minyak argan, minyak jojoba, atau minyak almond) atau bahan-bahan seperti ceramide atau asam hialuronat yang dapat membantu mengunci kelembapan di dalam kulit. Sementara itu, jika Anda memiliki kulit berminyak atau cenderung berjerawat, pilihlah pelembap yang ringan dan bebas dari minyak, seperti gel atau lotion.

Gunakan pelembap secara merata di seluruh wajah dan leher setelah serum. Pastikan untuk memijatnya dengan lembut ke dalam kulit untuk meningkatkan penyerapan dan melindungi kulit dari kekeringan.

5. Penggunaan Produk Perawatan Kulit Tambahan sesuai Kebutuhan
Selain langkah-langkah utama di atas, Anda juga dapat menambahkan produk perawatan kulit tambahan sesuai kebutuhan spesifik kulit Anda. Misalnya, jika Anda memiliki masalah jerawat, Anda dapat menggunakan produk perawatan jerawat seperti spot treatment atau masker yang mengandung bahan-bahan seperti asam salisilat atau belerang untuk membantu mengurangi peradangan dan mencegah timbulnya jerawat baru. Jika Anda memiliki masalah kulit kering atau sensitif, Anda dapat menggunakan masker atau krim pelembap tambahan yang kaya akan bahan-bahan pelembap untuk memberikan kelembapan tambahan dan meredakan iritasi.

Selain itu, jangan lupakan perawatan khusus untuk area mata dan bibir. Area mata cenderung memiliki kulit yang lebih tipis dan rentan terhadap kerutan dan garis halus, sehingga penggunaan krim mata pada malam hari dapat membantu melembapkan dan meremajakan kulit di sekitar mata. Sementara itu, penggunaan lip balm atau krim bibir pada malam hari dapat membantu menjaga bibir tetap lembap dan terhidrasi.

Dengan mengikuti lima langkah skincare malam yang benar di atas, Anda dapat menciptakan rutinitas perawatan kulit yang efektif untuk membantu Anda mencapai kulit yang sehat, berseri, dan bercahaya. Ingatlah bahwa konsistensi adalah kunci dalam perawatan kulit, jadi pastikan untuk menjaga rutinitas skincare Anda setiap malam. Selain itu, jangan lupakan pentingnya gaya hidup sehat seperti pola makan seimbang, cukup tidur, dan menghindari stres untuk mendukung kesehatan kulit Anda secara keseluruhan. Dengan perawatan yang tepat, Anda dapat meraih kulit yang indah dan sehat dalam jangka panjang.
        `,
        article_id: '2'
    },

    {
        title: '6 Langkah Skincare Pagi yang Benar',
        image : 'https://www.shutterstock.com/shutterstock/photos/1416346496/display_1500/stock-photo-skincare-routine-step-for-healthy-skin-woman-hands-holding-facial-cotton-pad-foam-essential-oil-1416346496.jpg',
        author: 'Khaloo Beauty',
        description: 'Skincare pagi yang benar akan membuat kulitmu lebih sehat dan terlindungi dari berbagai masalah kulit. Yuk, simak langkah-langkahnya!',
        created: new Date('Jul 25, 2023'),
        article_content: `
        6 Langkah Skincare Pagi yang Benar: Panduan Lengkap untuk Merawat Kulit Sehari-hari
Skincare pagi adalah ritual yang penting untuk menjaga kulit Anda tetap sehat dan berseri sepanjang hari. Meskipun terkadang terlihat sederhana, langkah-langkah skincare pagi yang benar dapat membuat perbedaan yang besar dalam penampilan dan kesehatan kulit Anda secara keseluruhan. Dalam artikel ini, kita akan membahas enam langkah penting yang harus Anda lakukan dalam skincare pagi yang efektif.

1. Membersihkan Wajah dengan Lembut
Langkah pertama yang penting dalam skincare pagi adalah membersihkan wajah dengan lembut. Meskipun Anda sudah membersihkan wajah sebelum tidur, kulit Anda masih dapat mengumpulkan kotoran dan minyak semalaman. Oleh karena itu, membersihkan wajah di pagi hari adalah langkah penting untuk menyegarkan kulit Anda.

Pilihlah pembersih wajah yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit berminyak, pilihlah pembersih yang mengandung bahan-bahan seperti asam salisilat atau tea tree oil yang dapat membantu mengontrol produksi minyak berlebih. Sementara itu, jika Anda memiliki kulit kering atau sensitif, pilihlah pembersih yang lembut dan bebas dari pewangi atau bahan-bahan keras lainnya yang dapat menyebabkan iritasi.

Gunakan air hangat untuk membilas wajah Anda setelah membersihkan, karena air panas dapat mengeringkan kulit. Hindari menggosok wajah terlalu keras, karena hal ini dapat merusak lapisan kulit dan menyebabkan iritasi.

2. Menggunakan Toner untuk Menyeimbangkan pH Kulit
Langkah kedua dalam skincare pagi adalah menggunakan toner. Toner membantu menyegarkan kulit Anda dan menyeimbangkan pH setelah proses pembersihan. Ini juga membantu membersihkan sisa-sisa kotoran atau minyak yang mungkin masih tertinggal setelah pembersihan.

Pilihlah toner yang mengandung bahan-bahan alami seperti witch hazel, rose water, atau aloe vera yang dapat menenangkan dan melembapkan kulit Anda. Hindari toner yang mengandung alkohol, karena alkohol dapat mengeringkan kulit dan menyebabkan iritasi.

Tuangkan sedikit toner ke kapas dan tepuk-tepuk lembut di seluruh wajah Anda, hindari area mata. Biarkan toner meresap ke dalam kulit sebelum melanjutkan ke langkah berikutnya.

3. Serum untuk Memberikan Nutrisi Tambahan
Langkah ketiga dalam skincare pagi adalah menggunakan serum. Serum adalah produk perawatan kulit yang kaya akan bahan-bahan aktif yang dapat memberikan nutrisi tambahan untuk kulit Anda. Serum dapat membantu menargetkan masalah spesifik kulit Anda, seperti penuaan dini, hiperpigmentasi, atau dehidrasi.

Pilihlah serum yang sesuai dengan kebutuhan kulit Anda. Misalnya, jika Anda memiliki kulit kering, pilihlah serum yang mengandung asam hialuronat atau ceramide untuk membantu mengunci kelembapan di dalam kulit. Sementara itu, jika Anda memiliki kulit berjerawat, pilihlah serum yang mengandung asam salisilat atau niacinamide yang dapat membantu mengurangi peradangan dan mengontrol produksi minyak.

Aplikasikan serum dengan meneteskan beberapa tetes ke telapak tangan Anda dan tepuk-tepuk lembut di seluruh wajah dan leher. Biarkan serum meresap sepenuhnya sebelum melanjutkan ke langkah berikutnya.

4. Pelembap untuk Menjaga Kelembapan Kulit
Langkah selanjutnya dalam skincare pagi adalah menggunakan pelembap. Pelembap sangat penting untuk menjaga kelembapan kulit dan menciptakan lapisan pelindung dari polusi dan zat-zat berbahaya lainnya di lingkungan sekitar Anda.

Pilihlah pelembap yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit kering, pilihlah pelembap yang kaya akan bahan-bahan pelembap seperti minyak jojoba atau shea butter. Sementara itu, jika Anda memiliki kulit berminyak, pilihlah pelembap yang ringan dan bebas dari minyak, seperti gel atau lotion.

Gunakan pelembap secara merata di seluruh wajah dan leher setelah serum. Pastikan untuk memijatnya dengan lembut ke dalam kulit untuk meningkatkan penyerapan.

5. Perlindungan Matahari dengan Tabir Surya
Perlindungan dari sinar matahari sangat penting untuk menjaga kesehatan kulit Anda dan mencegah penuaan dini serta risiko kanker kulit. Oleh karena itu, langkah selanjutnya dalam skincare pagi adalah menggunakan tabir surya.

Pilihlah tabir surya dengan SPF minimal 30 dan yang melindungi dari sinar UVA dan UVB. Aplikasikan tabir surya secara merata di seluruh wajah, leher, dan area lain yang terpapar sinar matahari setidaknya 15 menit sebelum Anda keluar rumah. Jangan lupa untuk mengaplikasikan ulang setiap dua jam jika Anda berada di bawah sinar matahari langsung atau beraktivitas di luar ruangan.

6. Perawatan Tambahan sesuai Kebutuhan Kulit Anda
Selain keenam langkah utama di atas, Anda juga dapat menambahkan langkah-langkah tambahan sesuai kebutuhan kulit Anda. Misalnya, jika Anda memiliki masalah kulit tertentu seperti jerawat atau hiperpigmentasi, Anda dapat menggunakan produk perawatan tambahan seperti spot treatment atau produk mencerahkan. Selain itu, jangan lupakan perawatan bibir dan mata dengan menggunakan lip balm dan krim mata yang sesuai.

Perawatan tambahan ini dapat membantu menyelesaikan masalah spesifik kulit Anda dan meningkatkan hasil dari rutinitas skincare Anda secara keseluruhan.

Dengan mengikuti langkah-langkah di atas secara teratur, Anda dapat menciptakan rutinitas skincare pagi yang efektif untuk menjaga kesehatan dan kecantikan kulit Anda. Ingatlah bahwa konsistensi adalah kunci dalam merawat kulit, jadi pastikan untuk menjaga rutinitas Anda setiap hari. Selain itu, jangan lupakan pentingnya gaya hidup sehat seperti pola makan seimbang, cukup tidur, dan menghindari stres untuk mendukung kesehatan kulit Anda secara keseluruhan. Dengan perawatan yang tepat, Anda dapat meraih kulit yang sehat, cerah, dan berseri sepanjang hari.
        `,
        article_id: '3'
    },
    {
        title: '5 Langkah Skincare Malam yang Benar',
        image : 'https://www.shutterstock.com/shutterstock/photos/659319469/display_1500/stock-photo-bottles-and-jars-with-natural-skincare-cosmetics-creams-and-oils-on-dark-background-plant-based-659319469.jpg',
        author: 'Khaloo Beauty',
        description: 'Skincare malam yang benar akan membuat kulitmu lebih sehat dan terlindungi dari berbagai masalah kulit. Yuk, simak langkah-langkahnya!',
        created: new Date('Jul 25, 2023'),
        article_content: `
        Menjaga Kesehatan Kulit Anda: Panduan 5 Langkah Skincare Malam yang Benar
Skincare malam adalah ritual yang penting untuk menjaga kesehatan kulit Anda dan memperbaiki kerusakan yang terjadi selama seharian. Saat Anda tidur, kulit Anda melakukan proses regenerasi yang penting untuk memperbaiki dan memperbarui sel-sel kulit. Oleh karena itu, menggunakan produk skincare yang tepat pada malam hari dapat memberikan manfaat maksimal untuk kulit Anda. Dalam artikel ini, kita akan membahas lima langkah skincare malam yang benar untuk membantu Anda mencapai kulit yang sehat dan bersinar.

1. Membersihkan Wajah dengan Seksama
Langkah pertama dalam skincare malam yang benar adalah membersihkan wajah secara seksama untuk menghilangkan kotoran, minyak, dan sisa makeup yang menempel pada kulit sepanjang hari. Membersihkan wajah dengan baik pada malam hari penting karena dapat mencegah penyumbatan pori-pori, mencegah jerawat, dan memungkinkan produk perawatan kulit lainnya menyerap dengan lebih baik.

Pilihlah pembersih wajah yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit berminyak atau berjerawat, pilihlah pembersih yang mengandung bahan-bahan seperti asam salisilat atau benzoyl peroxide untuk membantu mengontrol produksi minyak dan membersihkan pori-pori. Jika kulit Anda cenderung kering atau sensitif, pilihlah pembersih yang lembut dan bebas dari pewangi atau bahan-bahan keras lainnya yang dapat menyebabkan iritasi.

Gunakan pembersih wajah dengan lembut, pijatkan dengan gerakan melingkar di seluruh wajah dan leher, kemudian bilas dengan air hangat. Pastikan untuk menghapus makeup dengan menyeluruh, termasuk di sekitar mata dan bibir.

2. Gunakan Toner untuk Menyeimbangkan pH Kulit
Setelah membersihkan wajah, langkah berikutnya adalah menggunakan toner untuk menyeimbangkan pH kulit dan mempersiapkannya untuk langkah-langkah perawatan selanjutnya. Toner juga membantu mengangkat sisa-sisa kotoran atau minyak yang mungkin masih tertinggal setelah pembersihan, serta menyegarkan kulit.

Pilihlah toner yang mengandung bahan-bahan alami seperti witch hazel, rose water, atau chamomile yang dapat menenangkan dan meredakan kulit. Hindari toner yang mengandung alkohol, karena alkohol dapat mengeringkan kulit dan menyebabkan iritasi.

Tuangkan sedikit toner ke kapas dan tepuk-tepuk lembut di seluruh wajah Anda, hindari area mata. Biarkan toner meresap ke dalam kulit sebelum melanjutkan ke langkah berikutnya.

3. Serum untuk Perbaikan Kulit yang Intensif
Langkah ketiga dalam skincare malam yang benar adalah menggunakan serum untuk perbaikan kulit yang intensif. Serum mengandung bahan-bahan aktif yang konsentrat dan memiliki kemampuan penetrasi yang lebih baik ke dalam kulit dibandingkan dengan pelembap biasa. Oleh karena itu, penggunaan serum pada malam hari dapat memberikan manfaat maksimal untuk memperbaiki kerusakan kulit dan merangsang regenerasi sel-sel kulit baru.

Pilihlah serum yang sesuai dengan kebutuhan kulit Anda. Misalnya, jika Anda memiliki masalah penuaan dini seperti garis halus atau kerutan, pilihlah serum yang mengandung bahan-bahan seperti retinol, vitamin C, atau peptida untuk membantu merangsang produksi kolagen dan elastin. Jika Anda memiliki masalah hiperpigmentasi atau noda hitam, pilihlah serum yang mengandung bahan-bahan seperti asam kojic atau arbutin yang dapat membantu mencerahkan dan menyamarkan noda kulit.

Aplikasikan serum dengan meneteskan beberapa tetes ke telapak tangan Anda dan tepuk-tepuk lembut di seluruh wajah dan leher. Biarkan serum meresap sepenuhnya sebelum melanjutkan ke langkah berikutnya.

4. Pelembap untuk Meningkatkan Kandungan Kelembapan Kulit
Langkah selanjutnya dalam skincare malam yang benar adalah menggunakan pelembap untuk meningkatkan kandungan kelembapan kulit. Pelembap sangat penting untuk menjaga kulit tetap terhidrasi dan elastis, terutama saat Anda tidur, karena kelembapan dapat mengurangi kerutan dan garis halus serta membantu kulit memperbaiki diri selama proses regenerasi malam hari.

Pilihlah pelembap yang cocok untuk jenis kulit Anda. Jika Anda memiliki kulit kering atau sangat kering, pilihlah pelembap yang kaya akan bahan-bahan pelembap seperti minyak alami (misalnya, minyak argan, minyak jojoba, atau minyak almond) atau bahan-bahan seperti ceramide atau asam hialuronat yang dapat membantu mengunci kelembapan di dalam kulit. Sementara itu, jika Anda memiliki kulit berminyak atau cenderung berjerawat, pilihlah pelembap yang ringan dan bebas dari minyak, seperti gel atau lotion.

Gunakan pelembap secara merata di seluruh wajah dan leher setelah serum. Pastikan untuk memijatnya dengan lembut ke dalam kulit untuk meningkatkan penyerapan dan melindungi kulit dari kekeringan.

5. Penggunaan Produk Perawatan Kulit Tambahan sesuai Kebutuhan
Selain langkah-langkah utama di atas, Anda juga dapat menambahkan produk perawatan kulit tambahan sesuai kebutuhan spesifik kulit Anda. Misalnya, jika Anda memiliki masalah jerawat, Anda dapat menggunakan produk perawatan jerawat seperti spot treatment atau masker yang mengandung bahan-bahan seperti asam salisilat atau belerang untuk membantu mengurangi peradangan dan mencegah timbulnya jerawat baru. Jika Anda memiliki masalah kulit kering atau sensitif, Anda dapat menggunakan masker atau krim pelembap tambahan yang kaya akan bahan-bahan pelembap untuk memberikan kelembapan tambahan dan meredakan iritasi.

Selain itu, jangan lupakan perawatan khusus untuk area mata dan bibir. Area mata cenderung memiliki kulit yang lebih tipis dan rentan terhadap kerutan dan garis halus, sehingga penggunaan krim mata pada malam hari dapat membantu melembapkan dan meremajakan kulit di sekitar mata. Sementara itu, penggunaan lip balm atau krim bibir pada malam hari dapat membantu menjaga bibir tetap lembap dan terhidrasi.

Dengan mengikuti lima langkah skincare malam yang benar di atas, Anda dapat menciptakan rutinitas perawatan kulit yang efektif untuk membantu Anda mencapai kulit yang sehat, berseri, dan bercahaya. Ingatlah bahwa konsistensi adalah kunci dalam perawatan kulit, jadi pastikan untuk menjaga rutinitas skincare Anda setiap malam. Selain itu, jangan lupakan pentingnya gaya hidup sehat seperti pola makan seimbang, cukup tidur, dan menghindari stres untuk mendukung kesehatan kulit Anda secara keseluruhan. Dengan perawatan yang tepat, Anda dapat meraih kulit yang indah dan sehat dalam jangka panjang.
        `,
        article_id: '4'
    },
]

interface ArticleCardProps {
    title: string;
    image: string;
    author: string;
    description: string;
    created: Date;
    article_content: string;
    article_id: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({title, image, author, description, created, article_id}) => {
    const handleClick = () => {
        // Open the article with the specified article_id
        console.log(`Opening article with ID: ${article_id}`);
        // Add your logic to open the article here
    };

    return (
        <Row gutter={24} onClick={handleClick}>
            <Col span={6}>
                <div style={{ maxWidth: '300px', maxHeight: '200px', overflow: 'hidden', borderRadius: '10px' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </Col>
            <Col span={18}>
                <Typography.Title level={4}>{title}</Typography.Title>
                <Typography.Paragraph>{description}</Typography.Paragraph>
                <Typography.Text>{author}</Typography.Text> <br/>
                <Typography.Text>{created.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</Typography.Text>
            </Col>
        </Row>
    );
}


export default Articles;
