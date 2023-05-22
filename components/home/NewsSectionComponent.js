import React from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction'
import {useRouter} from 'next/router'
import Image from 'next/image'
import moment from 'moment';
import RecentDevelopmentComponent from './RecentDevelopmentComponent'
import { getDevHomeData, getNewsLetterDataHome } from '../../lib/api'
const NewsSectionComponent = ({newsData,setTabKey,devData}) => {
  const router=useRouter()
  function goToPage(pathId, catCode, desc,title,uri,iscomplete) {
    //alert(pathId)
    
            setTabKey(uri)
            router.push({
                pathname: `/${pathId}/`,
                query: { catCode: catCode, desc: desc,title:title,uri:uri,iscomplete:iscomplete }
            })
}
  //console.log('newsData',newsData)
  
    const [dData,setDdata]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const dData=await getDevHomeData()
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                //console.log('newws',dData)
               setDdata(dData)
               
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
          <section className="wrapper bg-light-orange">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-12 col-xl-5">
                          <div className='vil-info'>
                              <Card className='abt-card  bg-c-blue' 
                              title={
                                <>
                                  <span className='abt-card-head-title text-white'>Villages in Dongurli Gram Panchayat </span>
                                  <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1670307442/vp/dongrim/map-min_vkmwjd.png'} alt='' height={35} width={35} />
                                </>
                              }>
                                <div className='vil-card-block'>
                                  <ul className='text-white'>
                                    <li>Choraundem</li>
                                    <li>Dongurli</li>
                                    <li>Golauli</li>
                                    <li>Ivrem Buzruco</li>
                                    <li>Ivrem Curdo</li>
                                    <li>Naneli</li>
                                    <li>Rivem</li>
                                    <li>Pali</li>
                                    <li>Surla</li>
                                  </ul>
                                </div>
                                {/*<div className="mb-3" dangerouslySetInnerHTML={{ __html: "villageData.acf.desc" }} />*/}
                              </Card>
                            
                          </div>
                      </div>
                      <div className="col-md-12 col-xl-7">
                        <div className='dev-card'>
                        <Card className='abt-card dev0-card bg-c-blue' 
                        title={
                        <>
                        <Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070682/vp/nagoa/social_gbnief.png'} alt='' height={35} width={35} />
                          <span className='abt-card-head-title text-white'> Recent development works</span>
                        </>}>
                            <RecentDevelopmentComponent devData={dData}/>
                          </Card>
                        </div>
                          
                        </div>
                  </div>
              </div>
          </section>
      </>
  )
}
const mapDispatchToProps=dispatch=>({
  setTabKey:data=>dispatch(setTabKey(data))
})
export default connect(null,mapDispatchToProps)(NewsSectionComponent)