import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CreateAccountForm from '../components/CreateAccountForm';
import { APICreateAccount } from '../api/user';
import { useNavigate } from 'react-router-dom';

const CreateAccountRoute = () => {
    const history = useNavigate();

    const CreateAcc = async (details) => {
        APICreateAccount(details);
        history(-1);
    };

    return (
        <div>
            <NavBar />
            <CreateAccountForm func={CreateAcc} />
            <Footer />
        </div>
    );
};

export default CreateAccountRoute;
