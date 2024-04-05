import disney from "./Disney.module.css"

const Disney = ({ disImg, disName, disNote }) => {

    return (

        <>
            <div className={disney.back}>
                <div className={disney.cont}>
                    <img src={disImg} alt="img" id={disney.img} />
                    <p id={disney.oruko}>{disName}</p>
                    <p id={disney.note}>{disNote}</p>
                </div>

            </div>

        </>
    )
}
export default Disney