const ProductCard = () => {
    return (
        <div className="w-80 bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

            <img
                src="/Luxury Choice.jpg"
                alt=""
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />

            <div className="p-6">

                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide">
                    Princeps
                </h3>

                <Detail />

            </div>
        </div>
    );
};

export default ProductCard;

export const Detail = () => {
    return (
        <p className="text-slate-300 text-sm leading-relaxed">
            
        </p>
    );
};