import styles from "./index.module.css";
import { PerspectiveCarousel } from "../PerspectiveCarousel/PerspectiveCarousel";

const gamesList = [
    ["Pidgeon.png", "Carrier Pigeon"],
    ["Breath.png", "Breath"],
    ["Jelly.png", "Jelly-Form"],
    ["HumanFarm.png", "Human Farm"],
    ["PiledUp.png", "Piled Up"],
    ["GoodBoy.png", "Good Boy"],
];

export function GamesByStudents() {
    return (
        <div className={styles.gamesByStudentsContainer}>
            <div className={styles.gamesByStudents}>
                <div className={styles.titleContainer}>
                    <h1 className={`textShine ${styles.title}`}>
                        Conheça alguns jogos feitos por nossos alunos durante o curso:
                    </h1>
                </div>
                <div>
                    <div className={styles.gamesByStudentsCarouselContainer}>
                        <PerspectiveCarousel
                            items={gamesList}
                            customItemEmphasisStyle={styles.customItemEmphasisStyle}
                            bottomPosition="-1rem"
                            imgBasePath="students-games"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}