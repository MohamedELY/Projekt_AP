import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Recension from '../components/Recension';
import { APIGetPlaceByID } from '../api/place';
import { APIGetRecensionByPlaceID } from '../api/recension';
import { useState, useEffect } from 'react';
import { CheckChoosenPlace } from '../session/choosenPlace';

const ContentRoute = () => {
    const [contentData, setContentData] = useState(false);
    const [recensionData, setRecensionData] = useState(false);
    let id = CheckChoosenPlace();

    useEffect(() => {
        const GetContentdata = async () => {
            // id ska hämtas utav session storage och bytta ut hård kodningen!#####################################
            let info = await APIGetPlaceByID(id);
            setContentData(info);
        };

        const GetRecensiondata = async () => {
            // id ska hämtas utav session storage och bytta ut hård kodningen!#######################################
            let info = await APIGetRecensionByPlaceID(id);
            setRecensionData(info);
        };

        GetRecensiondata();
        GetContentdata();
    }, []);

    return (
        <div>
            <NavBar />
            <Content data={contentData} />
            <Recension data={recensionData} />
            <Footer />
        </div>
    );
};

export default ContentRoute;
