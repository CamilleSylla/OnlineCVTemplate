import { useRef } from 'react'
import style from './banniere.module.scss'
import BannierFooter from './footer/Footer'

export default function Banniere ({position}) {
    const story = useRef()
    console.log(story);
    return (
        <section className={style.wrapper} ref={story}>
            
            <div className={style.content}>
                <h1>Camille, <br/> Développeur web</h1>
                <p>Hey, je m'appelle Camille Sylla. Je suis un développeur passionné de React basé en France !</p>
                <button>Télécharger mon CV</button>
            </div>

            <div className={style.img}>
                <img src='/assets/img/Dev.svg'/>
            </div>

            
<BannierFooter/>
        </section>
    )
}