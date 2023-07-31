import Navbar from "./navbar";
import Presentation from "./presentation";
import Footer from "./footer";
import Projects from "./projects";
import Contact from "./contact";
import Skills from "./skills";

const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Presentation />
                <Projects />
                <Skills />
                
                <Contact />
            </main>
            <footer className="bg-main-color p-7">
                <Footer />
            </footer>
        </div>
    );
};

export default App;
