//Gets a spicifik Place info by Id
async function APIGetPlaceByID(id) {
    const response = await fetch(`https://localhost:7047/api/Place/${id}`).then(
        (res) => res.json()
    );

    return response;
}

//Creates a Place
async function APICreatePlace(param) {
    let url = 'http://localhost:5271/api/Place';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 0,
            name: param.name,
            location: param.location,
            address: param.address,
            category: param.category,
            country: param.country,
            pic: param.pic,
        }),
    }).catch((error) => console.error(error));
}

export { APIGetPlaceByID, APICreatePlace };
