import React from 'react'
import { Card,Divider } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
  Pagination
} from 'swiper';
import { getVillageDataShort } from '../../lib/api'
import abt1 from '../../public/img/about/vpverna.jpg'

const AboutUsBlockComponent = () => {
  const [nData,setNdata]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const cData = await getVillageDataShort() //applo client   
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
              //console.log('cData',cData)
               setNdata(cData)
            }
          }
         
          fetchData()
          return () => {
            // cancel the subscription
            isApiSubscribed = false;
          };
    },[])
  return (
    <section className="wrapper ">
    <div className="container py-10 py-md-10 pb-md-10">
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6'>
          <Card className='bg-light-blue '>
            
            <div className='slider-block'>
              <div className="caption1">
                <h1>About </h1>
                {/* <h2>{ vilData!==null?vilData.title:<></>}</h2> */}
              </div>
              <div className='slider-content'>
                <div className="mb-3 ab-block" dangerouslySetInnerHTML={{ __html:nData!==null?nData.desc:null}} /> 
                {/* <div className="mb-3" dangerouslySetInnerHTML={{ __html:vilData!==null?vilData.desc:<></>}} />
                <div className="mb-3" dangerouslySetInnerHTML={{ __html:vilData!==null?vilData.otherDesc:<></>}} /> */}
                <Divider />
              </div>
            </div>
          </Card>

        </div>


        <div className='col-lg-6 col-md-6 col-sm-6'>
          <Swiper spaceBetween={30} pagination={{
            "clickable": true
          }} className="mySwiper">
              <SwiperSlide>
                <Image
                  alt="s1"

                  src={abt1}
                />
                <div className="crousel_content container">
                  {/*<Title level={2} className="text-white">{i.caption_small}</Title>
            <Title level={4} className="text-white mt-1">{i.caption_big}</Title>*/}
                </div>
              </SwiperSlide>
          </Swiper>
        </div>


      </div>
      
    </div>
    
  </section>

      // <section className="about_section">
      //     <div className="container py-md-14 pb-md-14 ">
      //         <div className="row">
      //           <div className='col-6'>
      //             <div className="mb-3 ab-block" dangerouslySetInnerHTML={{ __html:nData!==null?nData.desc:null}} />  
      //           </div>
      //           <div className='col-6 '>

      //           </div>
      //             {/*<div className="col-md-6 col-xl-4">
      //               <Card className='abt-card mb-5' title={<span className='text-white abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070376/vp/nagoa/info_hzkwx2.png'} alt='' height={35} width={35}/><span className='abt-card-head-title'>About VP Nagoa</span></span>}>
      //               <div className="mb-3" dangerouslySetInnerHTML={{ __html:villageData.acf.desc}} />    
                              
      //                         <Image src={villageData.acf.image.url} alt='' height={219} width={414}/>
                              
      //               </Card>
      //             </div>
      //             <div className="col-md-6 col-xl-8">
      //               <Card className='abt-card sar-profile mb-5'  title={<span className='text-white abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/msg_bt2e56.png'} alt='' height={35} width={35}/><span className='abt-card-head-title'>Message from the Sarpanch</span></span>}>
                            
      //               <div className='desk-image'>
      //                           <Image src={msgData.acf.image.url} alt='' height={200} width={200}/>
      //                         </div> 
      //                         <div className="mb-5" dangerouslySetInnerHTML={{ __html:msgData.acf.desc}} />
      //               </Card>
      //             </div>*/}
      //         </div>
      //     </div>
      // </section>
  )
}

export default AboutUsBlockComponent