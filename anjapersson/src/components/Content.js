const Content = ({ data }) => {
    //console.log(data);

    return (
        <div className="flex center">
            {data.pic && (
                <img
                    className="w-64 h-64 ml-20 rounded-lg"
                    src={data.pic}
                    alt=""
                ></img>
            )}
            <div className="ml-6 center">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <h2 className="text-xl font-bold mt-2">{data.address}</h2>
            </div>

            <section id="hero" class=" pb-10"></section>
        </div>
    );
};

export default Content;
