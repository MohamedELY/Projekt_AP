import LoginPopup from '../components/LoginPopup';
import { SetLoggedInUser } from '../session/user';
import { useNavigate } from 'react-router-dom';
import { APICheckLoginUser } from '../api/user';

const TestRoute = () => {

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
            <LoginPopup Login={LoginFunc} />
        </div>
    );
};

export default TestRoute;
