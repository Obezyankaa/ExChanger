import React from 'react';
import Card from '../../UI/Card';

export default function AllProducts() {
  const products = [
    {
      photos: ['https://en.rusunion.com/img/news/2018/11/02/amur-forest-cat-for-the-first-time-in-30-years-appeared-in-the-moscow-zoo-blog.png', 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg', 'https://leafclover.club/wp-content/uploads/2021/09/meet-pisco-the-cat-whoo-looks-like-a-real-life-puss-in-boots-05.jpg'],
      userName: 'Катя',
      price: '50',
      userPhoto: 'https://vjoy.cc/wp-content/uploads/2020/12/original-3.jpg',
      description: 'Продам четкий чайник',
      productName: 'Чайник',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://vsegda-pomnim.com/uploads/posts/2022-05/1651426887_2-vsegda-pomnim-com-p-vulkani-mira-foto-2.jpg'],
      userName: 'Настя',
      price: '60',
      userPhoto: 'https://i.pinimg.com/736x/90/ca/eb/90caebe912a86bbcbe41876b02f548b3.jpg',
      description: 'Отобрала у сына, много играет',
      productName: 'GTA 6',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://mykitai.ru/wp-content/uploads/2019/03/Velikaya-Kitajskaya-stena-1.jpg'],
      userName: 'Юля',
      price: '10',
      userPhoto: 'https://media.istockphoto.com/photos/beautiful-teenage-girl-sitting-on-sofa-picture-id499516536',
      description: 'Отличные часы, есть незначительные царапины сзади',
      productName: 'Часы',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://spb.zvetnoe.ru/upload/catalog/2019/02/ZX10121.jpg'],
      userName: 'Владик',
      price: '150',
      userPhoto: 'https://st3.depositphotos.com/1007566/19517/v/600/depositphotos_195177576-stock-illustration-young-man-in-the-classroom.jpg',
      description: 'Подарили на день рождения, не пользовался',
      productName: 'Iphone 15',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://en.rusunion.com/img/news/2018/11/02/amur-forest-cat-for-the-first-time-in-30-years-appeared-in-the-moscow-zoo-blog.png', 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg', 'https://leafclover.club/wp-content/uploads/2021/09/meet-pisco-the-cat-whoo-looks-like-a-real-life-puss-in-boots-05.jpg'],
      userName: 'Катя',
      price: '50',
      userPhoto: 'https://vjoy.cc/wp-content/uploads/2020/12/original-3.jpg',
      description: 'Продам четкий чайник',
      productName: 'Чайник',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://vsegda-pomnim.com/uploads/posts/2022-05/1651426887_2-vsegda-pomnim-com-p-vulkani-mira-foto-2.jpg'],
      userName: 'Настя',
      price: '60',
      userPhoto: 'https://i.pinimg.com/736x/90/ca/eb/90caebe912a86bbcbe41876b02f548b3.jpg',
      description: 'Отобрала у сына, много играет',
      productName: 'GTA 6',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://mykitai.ru/wp-content/uploads/2019/03/Velikaya-Kitajskaya-stena-1.jpg'],
      userName: 'Юля',
      price: '10',
      userPhoto: 'https://media.istockphoto.com/photos/beautiful-teenage-girl-sitting-on-sofa-picture-id499516536',
      description: 'Отличные часы, есть незначительные царапины сзади',
      productName: 'Часы',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://spb.zvetnoe.ru/upload/catalog/2019/02/ZX10121.jpg'],
      userName: 'Владик',
      price: '150',
      userPhoto: 'https://st3.depositphotos.com/1007566/19517/v/600/depositphotos_195177576-stock-illustration-young-man-in-the-classroom.jpg',
      description: 'Подарили на день рождения, не пользовался',
      productName: 'Iphone 15',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://en.rusunion.com/img/news/2018/11/02/amur-forest-cat-for-the-first-time-in-30-years-appeared-in-the-moscow-zoo-blog.png', 'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg', 'https://leafclover.club/wp-content/uploads/2021/09/meet-pisco-the-cat-whoo-looks-like-a-real-life-puss-in-boots-05.jpg'],
      userName: 'Катя',
      price: '50',
      userPhoto: 'https://vjoy.cc/wp-content/uploads/2020/12/original-3.jpg',
      description: 'Продам четкий чайник',
      productName: 'Чайник',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://vsegda-pomnim.com/uploads/posts/2022-05/1651426887_2-vsegda-pomnim-com-p-vulkani-mira-foto-2.jpg'],
      userName: 'Настя',
      price: '60',
      userPhoto: 'https://i.pinimg.com/736x/90/ca/eb/90caebe912a86bbcbe41876b02f548b3.jpg',
      description: 'Отобрала у сына, много играет',
      productName: 'GTA 6',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://mykitai.ru/wp-content/uploads/2019/03/Velikaya-Kitajskaya-stena-1.jpg'],
      userName: 'Юля',
      price: '10',
      userPhoto: 'https://media.istockphoto.com/photos/beautiful-teenage-girl-sitting-on-sofa-picture-id499516536',
      description: 'Отличные часы, есть незначительные царапины сзади',
      productName: 'Часы',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      photos: ['https://spb.zvetnoe.ru/upload/catalog/2019/02/ZX10121.jpg'],
      userName: 'Владик',
      price: '150',
      userPhoto: 'https://st3.depositphotos.com/1007566/19517/v/600/depositphotos_195177576-stock-illustration-young-man-in-the-classroom.jpg',
      description: 'Подарили на день рождения, не пользовался',
      productName: 'Iphone 15',
      date: (new Date()).toLocaleDateString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ];
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',
      }}
      >
        {products.map((el) => (
          <Card product={el} />
        ))}
        <div style={{ marginBottom: '3rem' }} />
      </div>
    </div>
  );
}
