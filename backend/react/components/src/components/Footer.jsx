import { Detail } from "./ProductCard"

const Footer = () => {
    return (
        <>
            <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-12 px-6">

                <div className="max-w-6xl mx-auto text-center bg-slate-800/60 p-8 rounded-2xl shadow-xl border border-slate-700">
                    <Detail />
                </div>

            </div>
        </>
    )
}

export default Footer