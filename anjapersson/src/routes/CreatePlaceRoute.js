import CreatePageForm from '../components/CreatePlaceForm';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { APIGetAllCategorys } from '../api/categorys';

const CreatePlaceForm = () => {
    const [catList, setCatList] = useState([]);

    const getData = async () => {
        const data = await APIGetAllCategorys();
        setCatList(data.map((obj) => obj.name));
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <NavBar />
            <CreatePageForm categorys={catList} />
            <Footer />
        </div>
    );
};

export default CreatePlaceForm;
