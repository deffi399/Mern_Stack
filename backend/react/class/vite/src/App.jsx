import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <main>

        <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
          <Banner />
        </section>

        <section className="px-6 py-20 bg-slate-900">
          <Contact />
        </section>

        <section className="px-6 py-20 bg-slate-950">
          <About />
        </section>

      </main>

      <footer className="bg-black border-t border-slate-800">
        <Footer />
      </footer>

    </div>
  )
}

export default App