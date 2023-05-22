import React from 'react'
import Image from 'next/image';
import SocialLinkComponant from '../social/SocialLinkComponant'
import { Typography } from 'antd';
//import s1 from '../../public/img/slider/slide1.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import SliderBottomBarComponent from './SliderBottomBarComponent';
import { getSliderData } from '../../lib/api';

const {Title,Text}=Typography
SwiperCore.use([Pagination]);

const Banner = () => {
  const [sData,setSdata]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData1 = await getSliderData() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              //console.log('cData',cData1)
               setSdata(cData1)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
    return (
      <>
       <section className="wrapper">
          <div className="container-fluid no-padding">
            <Swiper spaceBetween={30}  pagination={{
              "clickable": true
            }} className="mySwiper">
              {sData!==null?sData.map((i,index)=>
              <SwiperSlide key={index}>
                <img
                  alt="s1"
                  src={i.image.sourceUrl}
                />
                <div className="crousel_content container">
                  {/*<Title level={2} className="text-white">{i.caption_small}</Title>
                  <Title level={4} className="text-white mt-1">{i.caption_big}</Title>*/}
                </div>
              </SwiperSlide>
              ):<></>}
            </Swiper>
          </div>
          
        </section>
        {/*<SliderBottomBarComponent noticeData={noticeData}/>*/}
      </>
    )
}

export default Banner
