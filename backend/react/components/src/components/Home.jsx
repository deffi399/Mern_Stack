import ProductCard from "./ProductCard";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 p-10">

            <h2 className="text-4xl font-extrabold text-slate-800 text-center mb-10 tracking-wide">
                Watches
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
};
export default Home;