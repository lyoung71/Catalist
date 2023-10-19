

export default function Carousel() {

    let slides = [
        "https://th.bing.com/th/id/OIG.oJNCbh1Khtmjjta7zqMn?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.0HNrK4.PF4WnMnOGWCxx?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.giqR1XeXyzxMwb87S2Sd?pid=ImgGn",
        "https://th.bing.com/th/id/OIG.HR723eKIyVKYL_dJcFZI?pid=ImgGn"
    ]

    // tryna figure out why this isn't wokring https://www.youtube.com/watch?v=GguJODC2cvI

    return (
        <div className="overflow-hidden relative">
            <div className="w-[15%] m-auto">
                {slides.map((s) => {
                    return <img src={s} />
                })}
            </div>
        </div>
    )
}