
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { Carousel } from 'flowbite-react';


const Name = () => {
    return (
        <>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': 'red',
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
            //   'url(https://swiperjs.com/demos/images/nature-1.jpg)',
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide className='text-white'>
          <div className="grid grid-cols-2" data-swiper-parallax="-100">
            <div className='text-center font-bold mt-60'>
            <p className='text-xl mr-4 '>boAt Airdopes 131</p>
            <p className='text-3xl pt-2 ml-12'>Featherweight For</p>
            <p className='text-3xl ml-6 pt-1'>ComfortbAll-Day.</p>
            <p className='text-2xl pt-8 mr-20'>$ 1099<span className='text-gray-600 text-lg pl-2 line-through'>$ 2990</span></p>
            <button className='bg-red-700 hover:bg-red-500 text-white  py-2 px-4 rounded mt-4 mr-20 '>Shop Now</button>
            </div>
            <div className=''>
            <img src="./images/sony1000xm4-1.png" alt="" className="w-full  " />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" grid grid-cols-2 text-white" data-swiper-parallax="-100">
            <div className='text-center font-bold mt-60 '>
            <p className='text-xl mr-20 '>boAt Airdopes 203</p>
            <p className='text-3xl pt-2 ml-20'>In-Ear Truly Wireless Earbuds</p>
            <p className='text-3xl ml-20 pt-1'>Wireless Over-Ear NC Headphones</p>
            <p className='text-2xl pt-8 mr-20'>$ 2400<span className='text-gray-600 text-lg pl-2 line-through'>$ 2990</span></p>
            <button className='bg-red-700 hover:bg-red-500 text-white  py-2 px-4 rounded mt-4 mr-20 '>Shop Now</button>
            </div>
            <div className=''>
            <img src="./images/sonyxb910n-1.png" alt="" className="w-full  " />
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className=" grid grid-cols-2 text-white" data-swiper-parallax="-100">
            <div className='text-center font-bold mt-60 '>
            <p className='text-xl mr-20 '>JBL Wave 100</p>
            <p className='text-3xl pt-2 ml-20'> Truly Wireless Earbuds</p>
            <p className='text-3xl ml-6 pt-1'>ComfortbAll-Day.</p>
            <p className='text-2xl pt-8 mr-20'>$ 2000<span className='text-gray-600 text-lg pl-2 line-through'>$ 2990</span></p>
            <button className='bg-red-700 hover:bg-red-500 text-white  py-2 px-4 rounded mt-4 mr-20 '>Shop Now</button>
            </div>
            <div className=''>
            <img src="./images/jbl760nc-1.png" alt="" className="w-full  " />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </>

    );
  };
  export default Name;
        