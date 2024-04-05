import style from './New.module.css'

const New = ({ newImg, newNews, newNote, newDate }) => {

    return (

        <>
            <div className={style.main}>
                <div className={style.mains}>
                    <img src={newImg} alt="img" id={style.image} />
                    <p id={style.newss}>{newNews}</p>
                    <h5 id={style.note}>{newNote}</h5>
                    <p id={style.date}>{newDate}</p>
                </div>

            </div>

        </>

    )


}
export default New