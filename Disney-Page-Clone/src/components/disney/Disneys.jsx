import disney from "./Disney.module.css"
import iwaju from '../../assets/iwaju.jpeg'
import disneyA from '../../assets/disneyA.jpeg'
import disneyC from '../../assets/disneyC.jpeg'
import bad from '../../assets/bad.jpeg'
import Disney from "./Disney"

const Disneys = () => {

    const show = [

        {
            disImg: disneyA,
            disName: "This month's recommended works",
            disNote: 'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!'
        },


        {
            disImg: bad,
            disName: "final season",
            disNote: 'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!'
        },


        {
            disImg: iwaju,
            disName: "original series",
            disNote: 'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!'
        },


        {
            disImg: disneyC,
            disName: "disney+",
            disNote: 'Introducing the distribution schedule of Disney Plus works. New movies and original works are appearing one after another!'
        },

    ]
    return (

        <>
            <div className={disney.grand}>
                <h2 id={disney.head}>Disney Plus recommended information</h2>
                <div className={disney.mum}>

                    {show.map((data, index) => {
                        return (<Disney key={index} disImg={data.disImg} disName={data.disName} disNote={data.disNote} />)
                    })}

                </div>
            </div>



        </>
    )
}
export default Disneys