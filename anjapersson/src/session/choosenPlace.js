const CheckChoosenPlace = () => {
    let place = window.sessionStorage.getItem('place');
    if (typeof place === 'string') return JSON.parse(place);
    return false;
};

const SetChoosenPlace = (placeId) =>
    window.sessionStorage.setItem('place', JSON.stringify(placeId));

const RemoveChoosenPlace = () => window.sessionStorage.removeItem('place');

export { CheckChoosenPlace, SetChoosenPlace, RemoveChoosenPlace };