
import { FaPlay } from "react-icons/fa";
import './App.scss'
function App() {


    return (
        <div className="app">
            <div className="shell">
                <nav className="header">
                    <ul >
                        <li> <a to="#instroments">instroments</a></li>

                        <li> <a to="#effects">effects</a></li>

                        <li> <a to="#play">play</a></li>
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

            {/* <section id='instruments' className="instrument-list">
                <div className="shell">
                    <h2 className='instrument-list__title'>Embark on a Melodic Journey: Explore What We've Crafted for You.</h2>

                    <h4>Enter a world of melody. Explore our curated instruments, chosen to ignite your creativity. Find your perfect sound and unlock endless possibilities.</h4>

                    <ul>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                        <li>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </section> */}
        </div>

    );
}

export default App;
