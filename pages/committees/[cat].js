import React from 'react'

import BreadcumbComponent from '../../components/breadcumb/BreadcumbComponent'
import b from '../../public/img/breadcumb/b-page.jpg'
import { useRouter } from 'next/router';
import AboutUsComponent from '../../components/about-us/AboutUsComponent';
const village = () => {
  const router=useRouter()
    
    const tempTitle=router.query.title;
    //console.log('router',tempTitle)
  return (
    <>
    <BreadcumbComponent pageInfo={{title:tempTitle,desc:"History about the beginnings of the panchayat",img:b}}  />
    <AboutUsComponent routeTitle={tempTitle}/>
    </>
  )
}

export default village