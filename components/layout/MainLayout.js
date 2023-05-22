import React from 'react'
import { Layout,Spin } from 'antd';
import {useRouter} from 'next/router'
import TopHeaderAreaComponent from '../header/TopHeaderAreaComponent';
import NavbarComponent from '../header/NavbarComponent';

import Footer from '../footer/Footer';
import AuthProvider from '../auth/AuthProvider';
import { createStructuredSelector } from 'reselect';
import { selectIsLoading } from '../../redux/user/userSelector';
import { connect } from 'react-redux';
const MainLayout = ({children,isloading}) => {
    const router=useRouter()
    //console.log('main-layout-router',router)
    const{iscomplete}=router.query
    
    return (
        <>
        <Layout className="content-wrapper">
            <Spin className='main-spin' spinning={isloading}>
                <TopHeaderAreaComponent/>
                <NavbarComponent/>
                    {children}
                <Footer/>
                </Spin>
        </Layout>
        </>
    )
}
const mapStateToProps=createStructuredSelector({
    isloading:selectIsLoading
})
export default connect(mapStateToProps)  (MainLayout)