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
                <img src='https://res.cloudinary.com/depg2aab2/image/upload/v1685012197/vp/verna/home_profile_map_w4c4jl.png' height={500} width={600} alt=''/>
            </div>
            
          </div>
          <div className='col-7'>
          <Card className='bg-card-prof'>
            <Card.Body>
            <div className='pf-content-block '>
            <h4 className="display-6 mb-0">Verna Profile</h4>
            <ul className='pf-ul mt-3'>
              <li>Block / Taluka :
                <p>Salcete</p>
              </li>
              <li>District :
                <p>South Goa</p>
              </li>
              <li>State :
                <p>Goa</p>
              </li>
              <li>Pincode :
                <p>403722</p>
              </li>
            </ul>
            <ul className='pf-ul mt-3'>
              <li>Area :
                <p>NA</p>
              </li>
              <li>Population :
                <p>6632</p>
              </li>
              <li>Households :
                <p>1,668</p>
              </li>
              
            </ul>
            <ul className='pf-ul pf-other text-white text-center mt-3'>
              <li className='pf-bg-orange'>Assembly Constituency<p> Nuvem </p></li>
              <li className='pf-bg-blue'>Parliament Constituency<p>South Goa</p></li>
              <li className='pf-bg-merun'>Nearest Town <p>Margao</p></li>
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