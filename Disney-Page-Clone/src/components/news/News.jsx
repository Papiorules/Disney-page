import New from "./New"
import style from './New.module.css'
import rabbit from '../../assets/rabbit.jpeg'
import picnic from '../../assets/picnic.jpeg'
import bunny from '../../assets/bunny.jpeg'
import ducky from '../../assets/ducky.jpeg'


const News = () => {
    const news = [
        {
            newImg: picnic,
            newNews: 'NEWS',
            newNote: 'ACCOMODE New spring items from the Disney collection are now available! A large collection of colourful and unique items such as bags and poushes perfect for lunchtime!',
            newDate: 'March 26th, 2024'

        },

        {
            newImg: rabbit,
            newNews: 'NEWS',
            newNote: 'ACCOMODE New spring items from the Disney collection are now available! A large collection of colourful and unique items such as bags and poushes perfect for lunchtime!',
            newDate: 'March 26th, 2024'

        },

        {
            newImg: bunny,
            newNews: 'NEWS',
            newNote: 'ACCOMODE New spring items from the Disney collection are now available! A large collection of colourful and unique items such as bags and poushes perfect for lunchtime!',
            newDate: 'March 26th, 2024'

        },

        {
            newImg: ducky,
            newNews: 'NEWS',
            newNote: 'ACCOMODE New spring items from the Disney collection are now available! A large collection of colourful and unique items such as bags and poushes perfect for lunchtime!',
            newDate: 'March 26th, 2024'

        },
    ]

    return (

        <>
            <div className={style.sec}>
                <h2 id={style.hi}>news</h2>

                <div className={style.app}>

                    {news.map((data, index) => {
                        return (<New key={index} newImg={data.newImg} newNews={data.newNews} newNote={data.newNote} newDate={data.newDate} />)
                    })}
                </div>

            </div>






        </>
    )
}
export default News