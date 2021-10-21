import style from './nav.module.scss'

export default function Nav ({refs}) {
console.log(refs);
    return (

        <nav className={style.wrapper}>
            <ul>
                <li>Mon histoire</li>
                <li>Mes Outils</li>
                <li>Éducation</li>
                <li>Experience</li>
                <li>Travaux</li>
                <li>Contact</li>

            </ul>
        </nav>
    )
}