import styles from "./index.module.css";
import { Card } from "./Card/Card";

export function CourseContent() {
    return (
        <div className={styles.summaryContentContainer}>
            <div className={styles.cardsContainer}>
                <Card
                    imgName="csharp.webp"
                    title="Programação em C#"
                    backgroundName="icon_Program.webp"
                >
                    Aprenda a programar do zero ao avançado, <br />
                    sem precisar ter conhecimentos prévios.
                </Card>
                <Card
                    imgName="arte-game-design.webp"
                    title="	Arte"
                    backgroundName="icon_Arte.webp"
                >
                    Aprenda as fundações de design gráfico, arte 2D,<br />
                    sound design, e composição de músicas.
                </Card>
                <Card
                    imgName="unity.webp"
                    title="Unity 2D e 3D"
                    backgroundName="icon_Unity.webp"
                >
                    Com a Unity, a engine de criação de jogos mais usada<br />
                    do mercado profissional, faremos jogos 2D e 3D.
                </Card>
                <Card
                    imgName="marketing-financas.webp"
                    backgroundName="icon_Marketing.webp"
                    title="Marketing e Finanças"
                >
                    Entenda como divulgar seu jogo, e como<br />
                    cuidar da parte financeira de seu jogo.
                </Card>
            </div>
        </div>
    )
}