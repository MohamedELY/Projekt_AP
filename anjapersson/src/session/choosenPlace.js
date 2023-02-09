const SetChoosenPlace = (placeId) =>
    window.sessionStorage.setItem('place', JSON.stringify(placeId));

const RemoveChoosenPlace= () => window.sessionStorage.removeItem('place');

export {SetChoosenPlace, RemoveChoosenPlace };