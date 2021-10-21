import style from "./education.module.scss";
import content from "../../pages/education.json";
export default function Education() {
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
      <span className={style.number }>03</span>
        <h3 className={style.section_title}>Éducation</h3>
        <div>
          {content.map((el, i) => {
            return <Element el={el} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}
