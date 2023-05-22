import React from 'react'
import Image from 'next/image'
import {Space,Typography} from 'antd'
import logo from '../../public/img/logo.png'
import cm from '../../public/img/cm-logo.png'
const {Title,Text}=Typography
const LogoNavbarComponent = () => {
  return (
    <>
    <section className="wrapper header-wrapper">
        <div className="container-fluid">
        <div className="m-logo">
            <Space>
            <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665069084/vp/nagoa/logo_kb3vep.png'} height={100} width={69} alt="Village Panchayats"/>
            <a href="/" title="Village Panchayats">

                     <span>Village Panchayat Dongurli </span>
                    <span>Government of Goa</span>
                </a>
            </Space>
                
            </div>
        </div>
        <div className='cm-logo'>
        <Space>
            {/* <div className='cm-text'>
                <Title level={5}>Shri Pramod Sawant</Title>
                <Text>Hon'ble Chief Minister</Text>
            </div> */}
            <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1671253990/vp/dongrim/img1_ah0leg.jpg'} height={100} width={80} alt="Village Panchayats"/>
            
            </Space>
        </div>
    </section>
    </>
  )
}

export default LogoNavbarComponent