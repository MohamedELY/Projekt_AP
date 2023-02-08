//Gets a list of all Categorys
async function APIGetAllCategorys() {
    const response = await fetch('http://localhost:5271/api/Category').then(
        (res) => res.json()
    );

    return response;
}

export { APIGetAllCategorys };
