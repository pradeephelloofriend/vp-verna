import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
const RegionComponent = () => {
    const router=useRouter()
    //console.log(router)
  return (
    <div>

        <div className='region-Image'>
            <Image src='https://res.cloudinary.com/depg2aab2/image/upload/v1685013248/vp/verna/pg_map_of_verna_osjv0f.png' alt='' height={1596} width={1920}/>
        </div>
    </div>
  )
}

export default RegionComponent