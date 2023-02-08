const CheckLoggedInUser = () => {
    let user = window.sessionStorage.getItem('user');
    if (typeof user === 'string') return JSON.parse(user);
    return false;
};

const SetLoggedInUser = (user) =>
    window.sessionStorage.setItem('user', JSON.stringify(user));

const LogOutUser = () => window.sessionStorage.removeItem('user');

export { CheckLoggedInUser, SetLoggedInUser, LogOutUser };
