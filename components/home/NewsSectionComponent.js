import React from 'react'
import {Card, List} from 'antd'
import {connect} from 'react-redux'
import { setTabKey } from '../../redux/menu/menuAction'
import {useRouter} from 'next/router'
import Image from 'next/image'
import moment from 'moment';
import RecentDevelopmentComponent from './RecentDevelopmentComponent'
import { getDevHomeData, getNewsCardData, getNewsLetterDataHome } from '../../lib/api'
const NewsSectionComponent = ({setTabKey,devData}) => {
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
    const [newsData,setNewsdata]=React.useState(null)
    React.useEffect(()=>{
        let isApiSubscribed = true;
        async function fetchData() {
            const dData=await getDevHomeData()
            const nwData = await getNewsCardData()
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                //console.log('newws',dData)
               setDdata(dData)
               setNewsdata(nwData)
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
          <section className="wrapper bg-light-grey">
              <div className="container py-10 py-md-10 pb-md-10">
                  <div className="row">
                      <div className="col-md-12 col-xl-5">
                          <div className='vil-info'>
                              <Card className='abt-card mb-5' title={<span className='latest-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070375/vp/nagoa/news_chxnrr.png'} alt='' height={35} width={35} /><span className='abt-card-head-title'> Latest News</span></span>}>
                              <div className='news-sidebar m-t20'>

                            <List
                              itemLayout="vertical"
                              size="large"
                              pagination={{
                                onChange: (page) => {
                                  console.log(page);
                                },
                                pageSize: 2,
                              }}
                              dataSource={newsData!==null?newsData:[]}
                              
                              renderItem={(item) => {
                                  let day = item.newsLetter.date;
                                  let parsed = moment(day, "DD/MM/YYYY");
                                  const date = parsed.format("ll")
                                  const tempDate = date.split(',')

                                return(
                                  
                                <List.Item
                                  key={item.slug}
                                >
                                  
                                  <div  className="news-block">
                                      <a href="" title="">
                                        <h4></h4>
                                        <div className="news-date">{tempDate[0]}<span>{tempDate[1]}</span></div>
                                        <div className='news-content'>
                                          <h4>{item.newsLetter.title}</h4>
                                          <p>{item.newsLetter.desc}</p>
                                          {item.newsLetter.images !== null ? item.newsLetter.images.map((j, jx) =>
                                                  <Image alt="s1" src={j.sourceUrl} height={400} width={1000} />
                                                ) : <></>}
                                        </div>
                                        <div className='f-right news-status'>
                                          <span className="badge bg-c-red rounded-pill blink">New</span>
                                        </div>
                                      </a>
                                    </div>
                                </List.Item>
                                
                                )
                              }
                              }
                            />
                              </div>

                              <a
                                onClick={() => goToPage('media/news-letters', 'news-letters', 'News Letters', 'Media Links', '/news-letters/', 'Yes')}
                                href="#"
                                className="more hover link-disp-blue mt-3 f-right">View More</a>
                            </Card>
                            
                          </div>
                      </div>
                      <div className="col-md-12 col-xl-7">
                        <div className='dev-card'>
                        <Card className='abt-card dev0-card bg-c-blue shdw'  
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