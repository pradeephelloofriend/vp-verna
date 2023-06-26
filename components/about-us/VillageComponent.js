import React from 'react'
import {Card,Spin} from 'antd'
import Image from 'next/image'
import { getVillageData } from '../../lib/api'
import SpinningComponent from '../spin/SpinningComponent'
const VillageComponent = () => {
    const [crData,setCrData]=React.useState(null)
    const [isLoading,setIsLoading]=React.useState(false);
    React.useEffect(()=>{
        let isApiSubscribed = true;
        setIsLoading(true)
        async function fetchData() {
            const cData = await getVillageData() //applo client  
            // 👇️ only update state if component is mounted
            if (isApiSubscribed) {
                setCrData(cData)
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
      
        {crData!==null?
        <div className=''>
        <Card className='abt-card mb-5' title={<span className='text-white abt-title-box'><Image src={'https://res.cloudinary.com/depg2aab2/image/upload/v1665070376/vp/nagoa/info_hzkwx2.png'} alt='' height={35} width={35} /><span className='abt-card-head-title'>About VP Verna</span></span>}>
        <div className="mb-3" style={{ fontSize: 'large' }} dangerouslySetInnerHTML={{ __html:crData!==null?crData.desc:<></>}} />
        <div className="mb-3" style={{ fontSize: 'large' }} dangerouslySetInnerHTML={{ __html:crData!==null?crData.otherDesc:<></>}} />
            
            <Image src={crData.image.sourceUrl} alt='' height={400} width={1207} />
           
            
        </Card>
        </div>
        :
        <SpinningComponent/>
        
        }
          
          
      </>
  )
}

export default VillageComponent