
import babe from './Cartoon.module.css'

export default function Cartoon({ cartoonImg, cartoonName, cartoonNote }) {

    return (

        <>
            <div className={babe.mainContainer}>
                <div className={babe.container}>
                    <img src={cartoonImg} alt="img" id={babe.img} />
                    <p id={babe.name}>{cartoonName}</p>
                    <p id={babe.note}>{cartoonNote}</p>
                </div>

            </div>
        </>
    )
}