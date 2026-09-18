import ExploreTechnologiesSEction from "./components/exploreTechnologiesSection/ExploreTechnologiesSEction";
import HeroSection from "./components/heroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <HeroSection></HeroSection>
                <ExploreTechnologiesSEction></ExploreTechnologiesSEction>
            </main>
        </>
    );
}

export default App;
