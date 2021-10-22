import Tools from "../Tools/Tools";
import style from "./text.module.scss";

export default function TextPresentation({content}) {

    console.log(content)

  return (
      <>
      {content.map((el, i) => {
          return (
<div className={style.wrapper}>
      <h3>0{ 1 + i } - {el.section}</h3>
      <p className={style.content}>
          {el.content}
      </p>
    </div>
          )
        
      })}
      <Tools/>
      </>
    
  );
}
