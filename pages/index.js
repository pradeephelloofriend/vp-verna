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
    
    //Sameer change
    return (
        <>
            <OtherLinks />
            <Banner/>
            <AboutUsBlockComponent/>
            <ProfileComponent/>
            <NewsSectionComponent/>
            <PopulationSectionComponent/>
            <FacilitesComponent/>
            <Schemes />
            <MapComponent/>

        </>
    )
}


export default Index