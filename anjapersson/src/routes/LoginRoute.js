import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';
import { APICheckLoginUser } from '../api/user';
import { SetLoggedInUser } from '../session/user';

const LoginRoute = () => {
    const history = useNavigate();

    const LoginFunc = async (details) => {
        let user = await APICheckLoginUser(details.username, details.password);

        if (typeof user === 'object') {
            SetLoggedInUser(user);
            history(-1);
        }
    };

    return (
        <div>
            <NavBar />
            <LoginForm Login={LoginFunc} />
            <Footer />
        </div>
    );
};

export default LoginRoute;
