import style from './footer.module.scss'

export default function BannierFooter () {

    return (
        <div className={style.wrapper}>
            <div className={style.social}>
                <a>LinkedIn</a>
                <span>{"   " + "/" + "   "}</span>
                <a>Github</a>
            </div>
            <a className={style.mail}>
                camillesylla.web@gmail.com
            </a>

            <div className={style.scroll}>
                <p>Scrollez vers le bas <br/>ˬ</p>
            </div>
        </div>
    )
}