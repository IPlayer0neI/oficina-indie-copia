import { ReactNode } from "react";
import styles from "./index.module.css";

interface CardProps {
    imgName: string; 
    title: string; 
    children: ReactNode;
    backgroundName: string;
}

export function Card({ imgName, title, children, backgroundName }: CardProps) {
    return (
        <div className={styles.card} style={{
            backgroundImage: `url(assets/icon_background/${backgroundName})`
        }} >
            <h2 className={styles.cardHeader}>
                <img className={styles.imgCard} src={`assets/various/${imgName}`} alt={title}/>
                <span className={styles.cardTitle}>{title}</span>
            </h2>
            <p className={styles.cardParagraph}>
                {children}
            </p>
        </div>
    )
}