import Navbar from "./navbar";
import Presentation from "./presentation";
import Footer from './footer';
import Projects from "./projects";
import Contact from "./contact";

const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Presentation />
                <Projects />
                <Contact />
            </main>
            <footer className="bg-dark-blue p-5">
                <Footer />
            </footer>
        </div>
    )
}

export default App;