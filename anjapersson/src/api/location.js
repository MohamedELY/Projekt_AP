//Gets a list/obj of spicifik Locations by searchValue in Search bar component
async function APIGetLocaionBySearch(searchValue) {
    const response = await fetch(
        `https://localhost:7047/api/SearchLocation/${searchValue}/findLocation`
    ).then((res) => res.json());

    return response;
}

export { APIGetLocaionBySearch };
