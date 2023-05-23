import React from 'react'
import Card from 'react-bootstrap/Card';

const ProfileComponent = () => {
  return (
    <>
    <section className="wrapper image-wrapper bg-image bg-overlay profile-section" >
      <div className="container py-12">
        <div className="row">
          <div className="col-lg-5">
            <div className='pf-img-block'>
                <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1670342628/vp/dongrim/dongurli-map-min_jhxgx1.png' alt=''/>
            </div>
            
          </div>
          <div className='col-7'>
          <Card className='bg-card-prof'>
            <Card.Body>
            <div className='pf-content-block '>
            <h4 className="display-6 mb-0">Dongurli-Thane Profile</h4>
            <ul className='pf-ul mt-3'>
              <li>Block / Taluka :
                <p>Satari</p>
              </li>
              <li>District :
                <p>North Goa</p>
              </li>
              <li>State :
                <p>Goa</p>
              </li>
              <li>Pincode :
                <p>403506</p>
              </li>
            </ul>
            <ul className='pf-ul mt-3'>
              <li>Area :
                <p>6901.68 hectares</p>
              </li>
              <li>Population :
                <p>5488</p>
              </li>
              <li>Households :
                <p>1190</p>
              </li>
              
            </ul>
            <ul className='pf-ul pf-other text-white text-center mt-3'>
              <li className='pf-bg-orange'>Assembly Constituency<p>Poriem</p></li>
              <li className='pf-bg-blue'>Parliament Constituency<p>North Goa</p></li>
              <li className='pf-bg-merun'>Nearest Town <p>Satari</p></li>
            </ul>  
            </div>
            </Card.Body>
          </Card>

          </div>
        </div>
        
      </div>
      
    </section>
    </>
  )
}

export default ProfileComponent