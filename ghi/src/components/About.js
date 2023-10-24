import '../about.css';

function About() {
    return (
        <>
            <div className="binder">
                <div className="aboutheader">
                    <h1>Meet Our Developers</h1>
                </div>
                <div className="grid-container">
                    <div className="grid-item card1">
                        <main className="pokemon-card">
                            <section className="title-row">
                                <p className="rarity">Basic Pokemon</p>
                                <h1 className="name">Charmander</h1>
                                <p className="health">50 HP</p>
                                <img className="element-icon" src="fire123.png" />
                            </section>

                            <section className="character-img">
                                <img src="./charmander.jpg" />
                            </section>

                            <section className="character-meta">
                                <p>Lizard Pokemon. Length: 2' 0", Weight: 19 lbs.</p>
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
                                <span className="ability-cost">
                                    <img src="./fire123.png" />
                                    <img src="./fire1232.png" />
                                    <img src="./fire123.png" />
                                    <img src="./fire123.png" />
                                </span>
                                <span className="ability-description">
                                    <span className="ability-name">Ember</span>
                                    <p>Discard 1 <img src="./fire123.png" />Energy card attached to Charmander in order to use this attack.</p>
                                </span>
                                <span className="ability-damage">10</span>
                            </section>


                            <section>

                            </section>

                            <section></section>
                            <section></section>
                        </main>
                    </div>
                    <div className="grid-item">2</div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>
                    <div className="grid-item">5</div>
                    <div className="grid-item">6</div>
                </div>
            </div >
        </>
    )
}

export default About;
