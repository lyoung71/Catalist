import '../about.css';
import '../style.css';
import '../style.scss';


function About() {
    return (
        <>
            <div className="binder">
                <div className="aboutheader">
                    <h1>Meet Our Developers</h1>
                </div>
                <div className="flex-container">
                    <div className="grid-container">
                        <div className="grid-item card1">
                            <main className="pokemon-card-char">
                                <section className="title-row">
                                    <p className="rarity">Basic Pokemon</p>
                                    <h1 id="card-name-one" className="name">Emre</h1>
                                    <p className="health">50 HP</p>
                                    <img className="element-icon" src="fire.png" />
                                </section>

                                <section className="character-img">
                                    <img src="./charmander.jpg" />
                                </section>

                                <section className="character-meta">
                                    <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                </section>

                                <section className="character-ability">
                                    <span className="ability-cost">
                                        <img src="./fire.png" />
                                    </span>
                                    <span className="ability-description">
                                        <span className="ability-name">Scratch</span>
                                    </span>
                                    <span className="ability-damage">10</span>
                                </section>

                                <section className="character-ability">
                                    <span id="middle-row" className="ability-cost">
                                        <img src="./fire.png" />
                                        <img src="./fire.png" />
                                        <img src="./fire.png" />
                                        <img src="./fire.png" />
                                    </span>
                                    <span id="middle-mid-row" className="ability-description">
                                        <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                    </span>
                                    <span className="ability-damage">10</span>
                                </section>

                                <section className="character-stats">
                                    <span className="character-stat">
                                        <p>weakness</p>
                                        <img className="element-icon" src="./fire.png" />
                                    </span>
                                    <span className="character-stat">
                                        <p>resistance</p>
                                    </span>
                                    <span className="character-stat">
                                        <p>retreat cost</p>
                                        <img className="element-icon" src="./fire.png" />
                                    </span>
                                </section>

                                <section className="character-description">
                                    <p>Obviously fire at front end. But he's excels at both. LV.10 #4</p>
                                </section>
                                <section className="card-details">
                                    <p className="artist">Coolius Personius</p>
                                    <p className="company">&copy; 1995, 96, 97 Nintendo. Creatures, GAMEFREAK. &copy;1999 Wizards.</p>
                                    <p className="collector-card-num">46/120</p>
                                </section>
                            </main>
                        </div>
                        {/* <---------------new card(joyce)------------> */}
                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-pika">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Joyce</h1>
                                        <p className="health">40 HP</p>
                                        <img className="element-icon" src="fire.png" />
                                    </section>

                                    <section className="character-img-pika">
                                        <img src="./thickachu.jpg" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./fire.png" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">30</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>weakness</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>retreat cost</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                    </section>

                                    <section className="character-description">
                                        <p>Obviously fire at front end. But he's excels at both. LV.10 #4</p>
                                    </section>
                                    <section className="card-details">
                                        <p className="artist">Coolius Personius</p>
                                        <p className="company">&copy; 1995, 96, 97 Nintendo. Creatures, GAMEFREAK. &copy;1999 Wizards.</p>
                                        <p className="collector-card-num">46/120</p>
                                    </section>
                                </main>
                            </div>
                        </div>
                        {/* <------------ new card(hamzah) ------------> */}
                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-sp">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Hamzah</h1>
                                        <p className="health">20 HP</p>
                                        <img className="element-icon" src="fire.png" />
                                    </section>

                                    <section className="character-img-sp">
                                        <img src="./starplat.jpg" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./fire.png" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Speed</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>weakness</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>retreat cost</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                    </section>

                                    <section className="character-description">
                                        <p>Obviously fire at front end. But he's excels at both. LV.10 #4</p>
                                    </section>
                                    <section className="card-details">
                                        <p className="artist">Coolius Personius</p>
                                        <p className="company">&copy; 1995, 96, 97 Nintendo. Creatures, GAMEFREAK. &copy;1999 Wizards.</p>
                                        <p className="collector-card-num">46/120</p>
                                    </section>
                                </main>
                            </div>
                        </div>
                        {/* <------------ new card (landon) ------------> */}
                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-snor">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Landon</h1>
                                        <p className="health">10 HP</p>
                                        <img className="element-icon" src="fire.png" />
                                    </section>

                                    <section className="character-img-snor">
                                        <img src="./snorlax.jpg" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./fire.png" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>weakness</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                            =                                        </span>
                                        <span className="character-stat">
                                            <p>retreat cost</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                    </section>

                                    <section className="character-description">
                                        <p>Obviously fire at front end. But he's excels at both. LV.10 #4</p>
                                    </section>
                                    <section className="card-details">
                                        <p className="artist">Coolius Personius</p>
                                        <p className="company">&copy; 1995, 96, 97 Nintendo. Creatures, GAMEFREAK. &copy;1999 Wizards.</p>
                                        <p className="collector-card-num">46/120</p>
                                    </section>
                                </main>
                            </div>
                        </div>
                        {/* <------------ new card (gameboy) ------------> */}
                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="gameboy-card">
                                    <section className="gameboy-row">
                                    </section>

                                    <section className="gameboy-img">
                                    </section>

                                    <section className="console">
                                        <p>GAMEBOY</p>
                                        <section className="game-button">
                                            <img src="./buttons_transparent.png" />
                                        </section>
                                        <section className="cross">
                                            <img src="./gamecross.png" />
                                        </section>


                                    </section>
                                    <section></section>
                                </main>
                            </div>
                        </div>
                        {/* <------------ new card(mark)------------> */}
                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-snom">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Mark</h1>
                                        <p className="health">70 HP</p>
                                        <img className="element-icon" src="fire.png" />
                                    </section>

                                    <section className="character-img-snom">
                                        <img src="./snom.jpg" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./fire.png" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                            <img src="./fire.png" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>weakness</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>retreat cost</p>
                                            <img className="element-icon" src="./fire.png" />
                                        </span>
                                    </section>

                                    <section className="character-description">
                                        <p>Obviously fire at front end. But he's excels at both. LV.10 #4</p>
                                    </section>
                                    <section className="card-details">
                                        <p className="artist">Coolius Personius</p>
                                        <p className="company">&copy; 1995, 96, 97 Nintendo. Creatures, GAMEFREAK. &copy;1999 Wizards.</p>
                                        <p className="collector-card-num">46/120</p>
                                    </section>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About;
