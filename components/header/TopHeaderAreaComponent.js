import React from 'react'
import { connect, Connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { setRegStatus } from '../../redux/menu/menuAction';
import { selectCuser } from '../../redux/user/userSelector';
import LoginModalComponent from '../modal/LoginModalComponent'

const TopHeaderAreaComponent = ({setRegStatus,cUser}) => {
    const [show,setShow]=React.useState(false)
  const handleShow = () => {
      setShow(true)
  };
  const handleClose = () => {
    setShow(false)
    setRegStatus(false)
  };
    return (
        <>
            <div className="top-header-area bg-c-orange">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="header-content-left">
                                <a>Welcome To Verna Panchayat!</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header-content-right">
                                
                                    <a href="tel:+822456974" className="me-xl-8">
                                    <i className="fa fa-mobile me-xl-1"></i>
                                        Call Us For Inquiry: 0832-2782295 / 7499915202
                                    </a>
                                    <a href="mailto:vp.vernasarpanch@gmail.com" className="me-xl-8">
                                    <i className="fa fa-envelope-o me-xl-1"></i>
                                        Email: vp.vernasarpanch@gmail.com
                                    </a>
                                    {/* {cUser!==null?
                                    <a href="#" onClick={()=>handleShow()} className="text-red">
                                    <i className="fa fa-sign-out me-xl-1"></i>
                                        Log Out
                                    </a>
                                    :
                                    <a href="#" onClick={()=> window.open("https://users.vpnagoasalcetegoa.com","_blank")} className="text-black">
                                    <i className="fa fa-user-o me-xl-1"></i>
                                        Login/Register
                                    </a>
                                    } */}
                                    
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModalComponent
            show={show}
            onClick={handleClose}
            onHide={handleClose}
            />
        </>
    )
}
const mapStateToProps=createStructuredSelector({
    cUser:selectCuser
})
const mapDispatchToProps=dispatch=>({
    setRegStatus:data=>dispatch(setRegStatus(data))
  })
export default connect(mapStateToProps,mapDispatchToProps) (TopHeaderAreaComponent)
