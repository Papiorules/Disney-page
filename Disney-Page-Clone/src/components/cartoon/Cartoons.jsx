import Cartoon from "./Cartoon"
import pixar from '../../assets/pixar.jpeg'
import minnie from '../../assets/minnie.jpeg'
import donald from '../../assets/donald.jpeg'
import classic from '../../assets/classic.jpeg'
import babe from './Cartoon.module.css'


const Cartoons = () => {

    const cartoon = [
        {
            cartoonImg: pixar,
            cartoonName: "Pixar Best",
            cartoonNote: 'The ultimate best album of Pixar music! CD release/digital distribution on March 20th'
        },

        {
            cartoonImg: classic,
            cartoonName: "Held nationwide from May to June!",
            cartoonNote: 'The ultimate best album of Pixar music! CD release/digital distribution on March 20th'
        },

        {
            cartoonImg: minnie,
            cartoonName: "Focus on Minnie in March",
            cartoonNote: 'The ultimate best album of Pixar music! CD release/digital distribution on March 20th'
        },

        {
            cartoonImg: donald,
            cartoonName: "Disney palpalooza",
            cartoonNote: 'The ultimate best album of Pixar music! CD release/digital distribution on March 20th'
        },




    ];

    return (

        <>

            <div className={babe.iya}>

                {cartoon.map((data, index) => {
                    return (<Cartoon key={index} cartoonImg={data.cartoonImg} cartoonName={data.cartoonName} cartoonNote={data.cartoonNote} />)
                })}
            </div>
        </>
    )
}
export default Cartoons