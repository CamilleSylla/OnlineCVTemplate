import style from './experience.module.scss'
import content from '../../pages/experience.json'
export default function Experience () {

    const Element = ({ el, i }) => {
        return (
          <div className={style.wrapper}>
            <h3>
              {" "}
              <span>{el.annee}</span> - {el.degree}
            </h3>
            <p className={style.school}>{el.school}</p>
            <p>{el.desc}</p>
          </div>
        );
      };

    return (
        <section style={{height: "auto"}}>
            <div className={style.container}>
            <span className={style.number }>04</span>
        <h3 className={style.section_title}>Expérience</h3>
        <div>
          {content.map((el, i) => {
            return <Element el={el} index={i} />;
          })}
        </div>
      </div>
        </section>
    )
}