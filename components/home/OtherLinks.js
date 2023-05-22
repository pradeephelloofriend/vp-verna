import React from 'react'
import Marquee from "react-fast-marquee";
import { connect } from 'react-redux';
import { getNoticeData } from '../../lib/api';
import { setLoading } from '../../redux/user/userAction';
const OtherLinks = ({setLoading}) => {
    //console.log('noticedata1',noticeData)
    const [nData,setNdata]=React.useState(null)
    React.useEffect(()=>{
        setLoading(true)
        let isApiSubscribed = true;
        async function fetchData() {
            
            const cData = await getNoticeData() //applo client   
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
        <section className='slider-bottom-bar bg-light-orange'>
            <div className='container'>
       <div className='row'>
                    <div className='col-12'>
                        <div className='marquee-box'>
                            <div className="row text-center">
                                
                                <div className="col-md-12">

                                    <Marquee
                                        gradient={false}
                                        speed={50}
                                    >
                                        {nData!==null?nData.filter(d=>d.notices.action=='Yes').map((data, index) =>
                                            <a href={data.notices.download_url
                                            } target="_blank" key={index} className="text-c-red ms-7 ">{data.notices.title
                                            }<span className="badge bg-c-red rounded-pill blink">New</span></a>
                                        ):<></>}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
       
         
    )
}
const mapDispatchToProps=dispatch=>({
    setLoading:data=>dispatch(setLoading(data))
  })    
export default connect(null,mapDispatchToProps) (OtherLinks)
