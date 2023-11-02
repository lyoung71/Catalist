import '../about.css';
import '../style.css';
import '../style.scss';
import { NavLink } from 'react-router-dom';


function About() {
    return (
        <>
            <div className="binder">
                <div className="aboutheader">
                    <h1 id="abt-h1">Meet Our Developers</h1>
                </div>
                <div className="flex-container">
                    <div className="grid-container">
                        <div className="grid-item card1">
                            <main className="pokemon-card-char">
                                <section className="title-row">
                                    <p className="rarity">Basic Pokemon</p>
                                    <h1 id="card-name-one" className="name">Emre</h1>
                                    <p className="health">50 HP</p>
                                    <img className="element-icon" src="fire.png" alt="" />
                                </section>

                                <section className="character-img">
                                    <img src="./charmander.jpg" alt="" />
                                </section>

                                <section className="character-meta">
                                    <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                </section>

                                <section className="character-ability">
                                    <span className="ability-cost">
                                        <img src="./fire.png" alt="" />
                                    </span>
                                    <span className="ability-description">
                                        <span className="ability-name">Scratch</span>
                                    </span>
                                    <span className="ability-damage">10</span>
                                </section>

                                <section className="character-ability">
                                    <span id="middle-row" className="ability-cost">
                                        <img src="./fire.png" alt="" />
                                        <img src="./fire.png" alt="" />
                                        <img src="./fire.png" alt="" />
                                        <img src="./fire.png" alt="" />
                                    </span>
                                    <span id="middle-mid-row" className="ability-description">
                                        <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./fire.png" alt="" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                    </span>
                                    <span className="ability-damage">10</span>
                                </section>

                                <section className="character-stats">
                                    <span className="character-stat">
                                        <p>gitlab</p>
                                        <NavLink to="https://gitlab.com/emreakilli">
                                            <img className="element-icon" src="./git.png" alt="gitlab" />
                                        </NavLink>
                                    </span>
                                    <span className="character-stat">
                                        <p>resistance</p>
                                    </span>
                                    <span className="character-stat">
                                        <p>linked in</p>
                                        <NavLink to="https://www.linkedin.com/in/eakilli/">
                                            <img className="element-icon" src="./linked.png" alt="" />
                                        </NavLink>
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

                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-pika">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Joyce</h1>
                                        <p className="health">40 HP</p>
                                        <img className="element-icon" src="lightning.png" alt="" />
                                    </section>

                                    <section className="character-img-pika">
                                        <img src="./thickachu.jpg" alt="" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./lightning.png" alt="" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./lightning.png" alt="" />
                                            <img src="./lightning.png" alt="" />
                                            <img src="./lightning.png" alt="" />
                                            <img src="./lightning.png" alt="" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./lightning.png" alt="" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">30</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>gitlab</p>
                                            <NavLink to="https://gitlab.com/jojodionisio">
                                                <img className="element-icon" src="./git.png" alt="gitlab" />
                                            </NavLink>
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>linked in</p>
                                            <NavLink to="https://www.linkedin.com/in/joyce-dionisio/">
                                                <img className="element-icon" src="./linked.png" alt="linkedin" />
                                            </NavLink>
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

                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-sp">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Hamzah</h1>
                                        <p className="health">20 HP</p>
                                        <img className="element-icon" src="hammy.png" alt="" />
                                    </section>

                                    <section className="character-img-sp">
                                        <img src="./starplat.jpg" alt="" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./hammy.png" alt="" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Speed</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./hammy.png" alt="" />
                                            <img src="./hammy.png" alt="" />
                                            <img src="./hammy.png" alt="" />
                                            <img src="./hammy.png" alt="" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./hammy.png" alt="" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>gitlab</p>
                                            <NavLink to="https://gitlab.com/hrahman3">
                                                <img className="element-icon" src="./git.png" alt="gitlab" />
                                            </NavLink>
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>linked in</p>
                                            <NavLink to="https://www.linkedin.com/in/hamzahrahman/">
                                                <img className="element-icon" src="./linked.png" alt="" />
                                            </NavLink>
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

                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-snor">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Landon</h1>
                                        <p className="health">10 HP</p>
                                        <img className="element-icon" src="normal.png" alt="" />
                                    </section>

                                    <section className="character-img-snor">
                                        <img src="./snorlax.jpg" alt="" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./normal.png" alt="" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./normal.png" alt="" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>gitlab</p>
                                            <NavLink to="https://gitlab.com/lyoung71">
                                                <img className="element-icon" src="./git.png" alt="gitlab" />
                                            </NavLink>
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>linked in</p>
                                            <NavLink to="https://www.linkedin.com/in/landon-young1/">
                                                <img className="element-icon" src="./linked.png" alt="" />
                                            </NavLink>
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

                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="gameboy-card">
                                    <section className="gameboy-row">
                                    </section>

                                    <section className="gameboy-img">
                                        <p className="gb-title">&gt; SHOUT OUT TO:</p>
                                        <p className="gb-text">&gt; Chris Zaleski</p>
                                        <p className="gb-text">&gt; Jay Wilson Jr.</p>
                                        <p className="gb-text">&gt; Chris Harding</p>
                                        <p className="gb-text">&gt; Whitley, Kethlyn, Sabina, + Wanda</p>
                                        <p className="gb-text">&gt; Dalonte Griffin</p>
                                        <p className="gb-text">&gt; Violet Hall</p>
                                    </section>

                                    <section className="console">
                                        <p>GAMEBOY</p>
                                        <section className="game-button">
                                            <img src="./buttons_transparent.png" alt="" />
                                        </section>
                                        <section className="cross">
                                            <img src="./gamecross.png" alt="" />
                                        </section>
                                        <section className="startbtn">
                                            <img src="./startbtn.png" alt="start-button" />
                                        </section>

                                    </section>
                                </main>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="grid-item card1">
                                <main className="pokemon-card-snom">
                                    <section className="title-row">
                                        <p className="rarity">Basic Pokemon</p>
                                        <h1 id="card-name-one" className="name">Mark</h1>
                                        <p className="health">70 HP</p>
                                        <img className="element-icon" src="normal.png" alt="" />
                                    </section>

                                    <section className="character-img-snom">
                                        <img src="./snom.jpg" alt="" />
                                    </section>

                                    <section className="character-meta">
                                        <p>Software Engineer. Length: 2' 0", Weight: 19 lbs.</p>
                                    </section>

                                    <section className="character-ability">
                                        <span className="ability-cost">
                                            <img src="./normal.png" alt="" />
                                        </span>
                                        <span className="ability-description">
                                            <span className="ability-name">Scratch</span>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-ability">
                                        <span id="middle-row" className="ability-cost">
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                            <img src="./normal.png" alt="" />
                                        </span>
                                        <span id="middle-mid-row" className="ability-description">
                                            <div> <b>Ember</b> Discard 1 <img id="mini-fire" src="./normal.png" alt="" /> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
                                        </span>
                                        <span className="ability-damage">10</span>
                                    </section>

                                    <section className="character-stats">
                                        <span className="character-stat">
                                            <p>gitlab</p>
                                            <NavLink to="https://gitlab.com/mpastoral">
                                                <img className="element-icon" src="./git.png" alt="gitlab" />
                                            </NavLink>
                                        </span>
                                        <span className="character-stat">
                                            <p>resistance</p>
                                        </span>
                                        <span className="character-stat">
                                            <p>linked in</p>
                                            <NavLink to="https://www.linkedin.com/in/mark-pastoral-66617399/">
                                                <img className="element-icon" src="./linked.png" alt="" />
                                            </NavLink>
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
