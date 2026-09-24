const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white px-8 py-5 shadow-lg">

            <div className="flex justify-center gap-12">

                <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10 hover:text-indigo-300 transition duration-300">
                    Home
                </div>

                <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10 hover:text-indigo-300 transition duration-300">
                    Categories
                </div>

                <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10 hover:text-indigo-300 transition duration-300">
                    Contact
                </div>

                <div className="cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10 hover:text-indigo-300 transition duration-300">
                    About
                </div>

            </div>

        </nav>
    );
};

export default Navbar;