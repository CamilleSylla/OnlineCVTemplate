import style from "./experience.module.scss";
import content from "../../pages/experience.json";
export default function Experience() {
  const Element = ({ el, i }) => {
    return (
      <div key={i} className={style.wrapper}>
        <h3>
          {" "}
          <span>{el.school}</span> - {el.degree}
        </h3>
        <p className={style.school}>{el.annee}</p>
        <p>{el.desc}</p>
        <p>
          Url du projet : <a style={{color: "purple"}} href={el.url}>{el.url}</a>
        </p>
      </div>
    );
  };

  return (
    <section style={{ height: "auto" }}>
      <div className={style.container}>
        <h3 className={style.section_title}> 04 - Expérience</h3>
        <div>
          {content.map((el, i) => {
            return <Element el={el} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
