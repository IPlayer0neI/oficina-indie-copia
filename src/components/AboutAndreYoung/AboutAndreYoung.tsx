import styles from "./index.module.css";
import { AndreYoungGamesCarousel } from "./AndreYoungGamesCarousel/AndreYoungGamesCarousel";

export function AboutAndreYoung() {
    return (
        <div className={styles.aboutAndreYoungContainer}>
            <div className={styles.aboutAndreYoung}>
                <div className={styles.andreYoungDescriptionContainer}>
                    <div className={styles.andreYoungImgContainer}>
                        <img src="assets/various/Foto_Andre.png" alt="Foto do andrezitos" />
                    </div>
                    <div className={styles.andreYoungDescription}>
                        <h1 className={`textShine ${styles.andreYoungTitle}`}>
                            Aprenda com quem faz!
                        </h1>
                        <p className={styles.andreYoungParagraph}>
                            Com quase 10 anos de experiência em desenvolvimento de jogos, já lancei jogos para PC, consoles e mobile, e hoje em dia mantenho minha empresa de criação de jogos, a Sad Socket, atualmente com três projetos ativos. Alguns dos jogos que já criei e projetos que estou envolvido são:
                        </p>
                    </div>
                </div>
                <AndreYoungGamesCarousel />
            </div>
        </div>
    )
}