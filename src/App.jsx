
import { FaPlay } from "react-icons/fa";
import './App.scss'
import { VectorInstruments } from "./utils/data";
function App() {


    return (
        <div className="app">
            <div className="shell">
                {/* Header */}
                <nav className="header">
                    <ul >
                        <li className="effects__effect"> <a href="#instruments">instroments</a></li>

                        <li> <a href="#effects-section">effects</a></li>

                        <li> <a href="#play">play</a></li>
                    </ul>
                </nav>
            </div>
            {/* Hero */}
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

            {/*Instruments-list  */}
            <section id='instruments' className="instrument-list">
                <div className="shell">
                    <div className="instrument-list__inner">
                        <h2 >Embark on a Melodic Journey: Explore What We've Crafted for You.</h2>

                        <h4>Enter a world of melody. Explore our curated instruments, chosen to ignite your creativity. Find your perfect sound and unlock endless possibilities.</h4>

                        <ul>
                            {VectorInstruments.map(({ id, title, path }) =>
                                <div className="instrument" id={id}>
                                    <h4>{title}</h4>
                                    <img src={path} alt="" />
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            </section>
            {/* effects */}
            <section id='effects-section' className="effects">
                <div className="shell">
                    <div className="effects__inner">

                        <h3>effects, which you can use</h3>

                        <ul>
                            <li className="effects__effect">
                                <h4>equalizer</h4>

                                <div className="effects__effect-container  ">
                                    <img src="./assets/effects/eq.png" alt="" />

                                    <p>Shape your sound with precision and finesse using the transformative power of EQ. Sculpt your audio landscape, enhancing clarity, balance, and definition with surgical precision. From boosting lows to accentuating highs, EQ allows you to tailor the tonal character of your music to perfection.</p>
                                </div>

                            </li>

                            <li className="effects__effect">
                                <h4>reverb</h4>

                                <div className="effects__effect-container ">
                                    <img src="./assets/effects/reverb.png" alt="" />

                                    <p>  Elevate your sound with the ethereal ambiance of reverb. Transform your audio into a sonic landscape, adding depth and dimensionality that captivates the senses. From subtle room reflections to expansive cathedral-like reverberations, this effect imbues your music with an immersive richness, inviting listeners to experience every note in a new light. </p>
                                </div>
                            </li>

                            <li className="effects__effect">
                                <h4>delay</h4>

                                <div className="effects__effect-container effects__effect-container--reverse">
                                    <img src="./assets/effects/delay.png" alt="" />

                                    <p>Sculpt your sound with the hypnotic allure of delay. Create captivating echoes that dance around your music, adding depth and intrigue to each note. From subtle rhythmic pulsations to expansive cascades of sound, this effect weaves a tapestry of sonic textures that elevate your compositions to new heights.</p>
                                </div>
                            </li>

                            <li className="effects__effect">
                                <h4>chorus</h4>
                                
                                <div className="effects__effect-container effects__effect-container--reverse">
                                    <img src="./assets/effects/chorus.png" alt="" />

                                    <p>Enrich your sound with the shimmering brilliance of chorus. Infuse your music with a lush, swirling texture that breathes life into every chord and melody. From gentle modulation to expansive ensemble-like effects, chorus adds depth and dimensionality that captivates the ear and ignites the imagination.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>

    );
}

export default App;
