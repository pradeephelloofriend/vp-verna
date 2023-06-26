import React , { useState }  from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRegCertData } from '../../redux/menu/menuSelector';
import {Button,Typography,Tabs,Card, Table} from 'antd';
import { Collapse } from 'antd';



import UploadUserNewModalComponent from '../modal/UploadUserNewModalComponent';
import UploadDocumentComponent from './UploadDocumentComponent';


const { Panel } = Collapse;

const { TabPane } = Tabs;

const CommitteeDetail = ({regCertData,cDetailData}) =>{
  // console.log('cDetailData answer',cDetailData)
    const{members}=cDetailData
    const [show,setShow]=React.useState(false)
    const[regData,setRegData]=React.useState(null)
    const[tabLayout,setTablLayout]=React.useState(null)
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'designation',
        dataIndex: 'designation',
        key: 'designation',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Contact No',
        dataIndex: 'contactNo',
        key: 'contactNo',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Email ID',
        dataIndex: 'emailId',
        key: 'emailId',
        render: text => <a>{text}</a>,
      }
    ]

    React.useEffect(()=>{
        //console.log('regData',regCertData)
        if(regCertData!==null){
            setRegData(regCertData.regStatus)
            
        }
        else{
            setRegData(null)
        }
        function handleResize() {
            if (window.matchMedia("(min-width: 1400px)").matches) {
              setTablLayout("right")
             
              // Viewport is less or equal to 700 pixels wide
              //console.log("min-width: 1400px")
            } else if(window.matchMedia("(min-width: 1200px)").matches) {
              setTablLayout("right")
             
              // Viewport is greater than 700 pixels wide
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 992px)").matches){
              setTablLayout("right")
              
              //console.log("min-width: 1200px")
            }else if(window.matchMedia("(min-width: 768px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else if(window.matchMedia("(min-width: 576px)").matches){
              setTablLayout("top")
              
              //console.log("min-width: 768px")
            }else{
              setTablLayout("top")
              
              //console.log("min-width: 576px")
            }
          
          }
          handleResize()
          window.addEventListener('resize', handleResize)
    },[regCertData])

    // console.log('members', members);
    
    const handleShow = () => {
        setShow(true)
    };
    const handleClose = () => {
      setShow(false)
      //setRegStatus(false)
    };   
  console.log('cDetailData',cDetailData)
    // console.log('applicationTab.members',applicationTab.members)


  return (
      <>
        <div className='committee-dtls'>
          {cDetailData!==null ? 
            <Table bordered columns={columns} dataSource={cDetailData.members} />
          :<></>}
        </div>
        
        
          {/* <div className='facility-tab'>
              <Tabs tabPosition={tabLayout} className='sub-tab'>

                  <TabPane tab="Application" key="app"> */}
                      {/* <div className='page-content scrollable-div'>
                        <div className='sp-cm' dangerouslySetInnerHTML={{ __html:cDetailData.desc!==null?cDetailData.desc:<></>}} />
                      <table className='cust_tbl'>
                        <thead>
                          <tr>
                            <td className='fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Name</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Designation</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Contact No.</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Email ID</td>
                            <td className='text-center fw-bolder fs-20 fs-clr' style={{textAlign:'center'}}>Address</td>
                          </tr>

                        </thead>
                        {cDetailData.members!==null ? cDetailData.members.map((m)=>
                          
                            <tbody>
                              <tr>
                                <td className='fs-15' style={{textAlign:'center'}}>{m.name}</td>
                                <td className='px-10 fs-15' style={{textAlign:'center'}}>{m.designation}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.contactNo}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.emailId}</td>
                                <td className='text-centre fs-15' style={{textAlign:'center'}}>{m.address}</td>
                              </tr>
                            </tbody>
                         
                        ):<></>}
                         </table>
                
                      </div> */}

          <UploadUserNewModalComponent
              show={show}
              onClick={handleClose}
              onHide={handleClose}
          />

      </>
  )
}
const mapStateToProps=createStructuredSelector({
    regCertData:selectRegCertData
})
export default connect(mapStateToProps) (CommitteeDetail)