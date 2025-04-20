import styles from "./index.module.css";
import { BuyArea } from "../BuyComponents/BuyArea/BuyArea";

export function CourseGameJam() {
    return (
        <div className={styles.buyGameJamContainer}>
            <div className={styles.buyGameJam}>
                <div className={styles.gameJam}>
                    <div className={styles.gameJamImg}>
                        <div className={styles.imgContainer}>
                            <img src="assets/various/oficina-jam-1.webp" alt="Oficina jam" />
                        </div>
                    </div>
                    <div className={styles.gameJamDescription}>
                        <h2 className={`textShine ${styles.gameJamDescriptionTitle}`}>
                            Ganhe prêmios em dinheiro com nossas Game Jams!
                        </h2>
                        <div className={styles.paragraphs}>
                            <p>
                                A Oficina Jam acontece todo mês na nossa comunidade do Discord. Os alunos tem 48 horas para produzir um jogo curto, mas criativo, baseado em um tema sorteado.
                            </p>
                            <p>
                                Além de ser uma ótima oportunidade de aprendizado, os vencedores ainda levam um prêmio de R$300,00!
                            </p>
                            <p>
                                Forme equipes com outros alunos, ou faça seu projeto sozinho, você escolhe como aplicar tudo que está aprendendo no curso para adicionar um jogo autoral completo ao seu portfólio.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.buyAreaContainer}>
                    <BuyArea />
                </div>
            </div>
        </div>
    )
}