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
            </main>
        </>
    );
}

export default App;
