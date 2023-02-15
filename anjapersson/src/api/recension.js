//Gets a list/obj of spicifik posts by Id of place
async function APIGetRecensionByPlaceID(id) {
    const response = await fetch(`https://localhost:7047/api/Post/${id}`).then(
        (res) => res.json()
    );

    return response;
}

//Gets total likes and dislikes for a Place
async function APIGetRating() {
    const response = await fetch('https://localhost:7047/api/SearchLocation/rating').then(
        (res) => res.json()
    );

    return response;
}

//Creates a Post
async function APICreatePost(param) {
    let url = 'https://localhost:7047/api/Post';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 0,
            placeId: param.placeId,
            title: param.title,
            description: param.description,
            userId: param.userId,
            rating: param.rating,
        }),
    }).then((response) => {
        if (response.ok) {
            window.location.reload();
        }
    }).catch((error) => console.error(error));
}

export { APIGetRecensionByPlaceID, APICreatePost, APIGetRating };
