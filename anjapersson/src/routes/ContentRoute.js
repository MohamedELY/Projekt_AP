import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Recension from '../components/Recension';
import { APIGetPlaceByID } from '../api/place';
import { APIGetRecensionByPlaceID } from '../api/recension';
import { useState, useEffect } from 'react';

const ContentRoute = () => {
    const [contentData, setContentData] = useState(false);
    const [recensionData, setRecensionData] = useState(false);

    useEffect(() => {
        const GetContentdata = async () => {
            // id ska hämtas utav session storage och bytta ut hård kodningen!#####################################
            let info = await APIGetPlaceByID(2);
            setContentData(info);
        };

        const GetRecensiondata = async () => {
            // id ska hämtas utav session storage och bytta ut hård kodningen!#######################################
            let info = await APIGetRecensionByPlaceID(5);
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
