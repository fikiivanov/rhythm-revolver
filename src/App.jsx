
import { FaPlay } from "react-icons/fa";
import './App.scss'
import { VectorInstruments } from "./utils/data";
function App() {


    return (
        <div className="app">
            <div className="shell">
                <nav className="header">
                    <ul >
                        <li> <a href="#instruments">instroments</a></li>

                        <li> <a href="#effects">effects</a></li>

                        <li> <a href="#play">play</a></li>
                    </ul>
                </nav>
            </div>

            <section className="hero">
                <img src='./assets/backgroundHero.jpg' alt="" />

                <div className="shell">
                    <div className="hero__inner">
                        <h1 >
                            Explore a Symphony of Instruments: Let's Play with Music!
                        </h1>

                        <button>
                            play <FaPlay />
                        </button>
                    </div>
                </div >
            </section>

            <section id='instruments' className="instrument-list">
                <div className="shell">
                    <div className="instrument-list__inner">
                        <h2 >Embark on a Melodic Journey: Explore What We've Crafted for You.</h2>

                        <h4>Enter a world of melody. Explore our curated instruments, chosen to ignite your creativity. Find your perfect sound and unlock endless possibilities.</h4>

                        <ul>
                            {VectorInstruments.map(({ id, title, path }) =>
                                <div className="instrument" id={id}>
                                    <h3>{title}</h3>
                                    <img src={path} alt="" />
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default App;
