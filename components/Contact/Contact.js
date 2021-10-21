import style from './contact.module.scss'

export default function Contact () {

    return (
        <section style={{height: "auto"}}>
            <div className={style.container}>
      <span className={style.number }>06</span>
        <h3 className={style.section_title}>Contact</h3>
        <form>
            <input placeholder="Nom et Prénom"/>
            <input placeholder="Adresse e-mail"/>
            <br/>
            <input placeholder="Sujet"/>
            <br/>
            <textarea placeholder="Votre Message"/>
            <button>Envoyer</button>
        </form>
      </div>
        </section>
    )
}