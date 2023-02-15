import './styles/globals.css';
import { Routes, Route } from 'react-router-dom';

// Routes
import HomeRoute from './routes/HomeRoute';
import LoginRoute from './routes/LoginRoute';
import CreateAccountRoute from './routes/CreateAccountRoute';
import CreatePlaceForm from './routes/CreatePlaceRoute';
import ContentRoute from './routes/ContentRoute';
import TestRoute from './routes/TestRoute';
import ContactUsRoute from './routes/ContactUsRoute';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomeRoute />}></Route>
                <Route path="/login" element={<LoginRoute />}></Route>
                <Route path="/content" element={<ContentRoute />}></Route>
                <Route path="/test" element={<TestRoute />}></Route>
                <Route
                    path="/createPlace"
                    element={<CreatePlaceForm />}
                ></Route>
                <Route
                    path="/createAccount"
                    element={<CreateAccountRoute />}
                ></Route>
                 <Route path="/contactus" element={<ContactUsRoute />}></Route>
            </Routes>
        </div>
    );
}

export default App;
