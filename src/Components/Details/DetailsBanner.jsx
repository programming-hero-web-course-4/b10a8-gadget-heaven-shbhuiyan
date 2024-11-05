import Details from "../Details/Details";



const DetailsBanner = () => {
    return (
        <>
            <div className="text-center text-white bg-purple-600 pt-10 pb-60 rounded-xl px-4">
                <h1 className="text-3xl font-semibold">Product Details</h1>
                <p className="max-w-3xl mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
                <Details></Details>
        </>
    );
};

export default DetailsBanner;