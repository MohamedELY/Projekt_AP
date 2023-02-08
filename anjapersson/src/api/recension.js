//Gets a list/obj of spicifik posts by Id of place
async function APIGetRecensionByPlaceID(id) {
    const response = await fetch(`https://localhost:7047/api/Post/${id}`).then(
        (res) => res.json()
    );

    return response;
}

export { APIGetRecensionByPlaceID };
