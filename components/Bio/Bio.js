import TextPresentation from '../TextPresentation/Text'
import style from './bio.module.scss'
import content from '../../pages/content.json'

export default function Bio () {

    return (
        <section style={{height: "auto"}}>
            <div className={style.head}>
                <h2> Je suis passionnée de nouvelles technologie de puis mon enfance, me tournée vers le dévellopement web m'es parue comme une evidence.</h2>
                <div className={style.img}>
                    <img src="/assets/img/me.jpg"/>
                        </div>
            </div>
            <TextPresentation content={content}/>
        </section>
    )
}