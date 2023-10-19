

export default function EditPost() {
    // function handleSubmit(e) {
    //     // Prevent the browser from reloading the page
    //     e.preventDefault();

    //     // Read the form data
    //     const form = e.target;
    //     const formData = new FormData(form);

    //     // You can pass formData as a fetch body directly:
    //     fetch('/some-api', { method: form.method, body: formData });

    //     // Or you can work with it as a plain object:
    //     const formJson = Object.fromEntries(formData.entries());
    //     console.log(formJson);
    // }

    return (
        <>
            <div id="top">
                <div class="topHalf">
                    <div class="left">
                        <div id="UpperHealthContainer">
                            <div class="rectangleOutter" id="healthTop">
                                <div class="rectangleInner">
                                    <ul class="UpperHpContent">
                                        <li class="UpperHpList">
                                            <span id="name">BLASTOISE
                                                <span id="genderf"></span>
                                            </span>
                                            <span id="level">Lv: 99</span>
                                        </li>
                                        <li class="UpperHpList">
                                            <div id="hpBar">
                                                <div id="hp"> HP </div>
                                                <div id="hpBarInner">
                                                    <div id="hpSlider"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div id="rhombus"></div>
                        </div>
                    </div>
                    <div class="right">

                        <div class="ovalOutter" id="theTop">
                            <div class="ovalInner">

                            </div>
                        </div>
                        <div id="topPoke"></div>

                    </div>
                </div>
                <div class="topHalf">
                    <div class="left">
                        <div id="bottomPokemon"></div>
                        <div class="ovalOutter">
                            <div class="ovalInner">

                            </div>
                        </div>

                    </div>
                    <div class="right">
                        <div id="healthContainer">
                            <div class="rectangleOutter" id="healthBottom">
                                <div class="rectangleInner">
                                    <ul class="hpContent">
                                        <li class="hpList">
                                            <span id="name">CHARIZARD
                                                <span id="genderm"></span>
                                            </span>
                                            <span id="level">Lv 99</span>
                                        </li>
                                        <li class="hpList">

                                            <div id="hpBar">
                                                <div id="hp"> HP </div>
                                                <div id="hpBarInner">
                                                    <div id="hpSlider"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="hpList"><span id="health">360/360</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="triangleBit">
                            </div>
                            <div class="rectangleBit">
                                <div class="exp"> ExP </div>
                                <div class="innerRectangleBit">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="bottom">
                <div id="bottomBox">
                    <div id="bottomBoxInner">
                        <div id="battleText">
                            <p>What should CHARIZARD do?</p>
                        </div>
                        <div id="menuText">
                            <table>
                                <tbody>
                                    <tr class="menuRow">
                                        <td class="menuHalf"> FIGHT </td>
                                        <td class="menuHalf"> BAG </td>
                                    </tr>
                                    <tr class="menuRow">
                                        <td class="menuHalf"> PKMN </td>
                                        <td class="menuHalf"> RUN </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="clearBoth"></div>
                    </div>
                </div>
            </div></>
        // <form method="post" onSubmit={handleSubmit}>
        //     <label>
        //         Post title: <input name="postTitle" defaultValue="Biking" />
        //     </label>
        //     <label>
        //         Edit your post:
        //         <textarea
        //             name="postContent"
        //             defaultValue="Journal here"
        //             rows={4}
        //             cols={40}
        //         />
        //     </label>
        //     <hr />
        //     <button type="reset">Reset edits</button>
        //     <button type="submit">Save post</button>
        // </form>
    );
}
