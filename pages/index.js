import React from 'react'
import Banner from '../components/home/Banner';

import MapComponent from '../components/home/MapComponent';

import AboutUsBlockComponent from '../components/home/AboutUsBlockComponent';
import NewsSectionComponent from '../components/home/NewsSectionComponent';
import PopulationSectionComponent from '../components/home/PopulationSectionComponent';
import FacilitesComponent from '../components/home/FacilitesComponent';
import Schemes from '../components/home/Schemes';
import OtherLinks from '../components/home/OtherLinks';
import BigMenuComponent from '../components/home/BigMenuComponent';
import ProfileComponent from '../components/home/ProfileComponent';
import OtherLinksComponent from '../components/home/OtherLinksComponent';

//get initial ServerSideProps

const Index = () => {
    
    
    return (
        <>
            <OtherLinks />
            <Banner/>
            {/* <BigMenuComponent/> */}
           { /*<OtherLinks noticeData={noticeData} />*/}
            <AboutUsBlockComponent/>
            <ProfileComponent/>
            <NewsSectionComponent/>
            {/* <OtherLinksComponent/> */}
            <PopulationSectionComponent/>
            <FacilitesComponent/>
            <Schemes />
            {/*<AddBlock stepData={stepData} />
            <Scheme schemeData={data1} />
            <EventsComponent eventdata={eventdata}/>
            <ProductComponent aboutData={aboutData} /> {/* ABOUT AREA*/}
            <MapComponent/>
            {/*<ContactComponent/>*/}
            {/*<SmallAreaComponent/>*/}
            {/*<ContactComponent/>*/}

        </>
    )
}


export default Index