import aishat from './Hero.module.css'

const Hero = () => {

    return (

        <>
            <div className={aishat.hero}>
                <div className={aishat.lefty}>
                    <div className={aishat.leftwrap}>
                        <h1 id={aishat.dis}>Disney movie "Frozen" 10th <br />anniversary</h1>

                        <p id={aishat.pee}>"Thank you for loving this story for 10 years!"<br />
                            To express our gratitude for 10years, we will introduce the <br />
                            latest information, character information, related videos, <br />
                            e.t.c, unique to the 10th anniversary!
                        </p>

                        <button type="button">Work Information</button>



                    </div>

                </div>


            </div>

        </>
    )
}
export default Hero