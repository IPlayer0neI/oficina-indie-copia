import styles from "./index.module.css";

export function Introduction() {
    return (
        <div className={styles.introductionContainer}>
            <div className={styles.introduction}>
                <header className={styles.header}>
                    <div className={styles.imgContainer}>
                        <img height="auto" src="assets/various/Oficina-Indie_noBG_nospace-300x68.webp" alt="Oficina indie"/>
                    </div>
                </header>
                <div className={styles.youtubeVideoContainer}>
                    <div className={styles.youtubeFrame}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nkSGOuvBnYI?autoplay=1&si=YEgsNIkMxMbncsAM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
                <div className={styles.introductionText}>
                    <h1 className={`textShine ${styles.introductionTitle}`}>
                        Aprenda a viver de Jogos Indie!
                    </h1>
                    <p className={styles.introductionParagraph}>
                        Na Oficina Indie você aprende desde o básico da programação em C# até a criação completa de jogos 2D e 3D, incluindo a criação de gráficos, sons e músicas. Além disso, você ainda fica por dentro de partes essenciais do mercado dos jogos indie, aprendendo a publicar seus jogos, as melhores técnicas de marketing e como lidar com a parte financeira.
                    </p>
                </div>
            </div>
        </div>
    )
}