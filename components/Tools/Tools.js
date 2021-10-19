import style from './tools.module.scss'

export default function Tools () {

    return (
        <div className={style.wrapper}>
            <table>
                <tr>
                    <th>Créatif</th>
                    <th>Languages</th>
                </tr>
                <tr>
                    <th>
                        <tr>Figma</tr>
                        <tr>InDesign</tr>
                        <tr>Illustrator</tr>
                        <tr>Blender</tr>
                        <tr>Photoshop</tr>
                    </th>
                    <th>
                        <tr className={style.row}>
                            <th >
                                <tr>HTML 5</tr>
                                <tr>CSS 3</tr>
                                <tr>Javascript</tr>
                            </th>
                            <th>
                                <tr>ReactJS</tr>
                                <tr>NextJS</tr>
                                <tr>NodeJs</tr>
                            </th>
                            <th>
                                <tr>Express</tr>
                                <tr>MongoDB</tr>
                                <tr>Git</tr>
                            </th>
                        </tr>
                    </th>
                </tr>
            </table>
        </div>
    )
}