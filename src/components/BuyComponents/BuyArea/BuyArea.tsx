import styles from "./index.module.css";
import { BuyButton } from "../BuyButton/BuyButton";

export function BuyArea() {
    return (
        <div className={styles.buyArea}>
            <div className={styles.priceContainer}>
                <h2 className={styles.price}>
                    <span className={styles.tagContainer}>
                        <span className={styles.tag}>
                            POR APENAS
                        </span>
                    </span>
                    <span className={styles.amount}>
                        R$149
                        <span className={styles.cents}>
                            ,90
                        </span>
                    </span>
                    <span className={styles.subdivision}>
                        ou em 12 vezes de R$14,90
                    </span>
                </h2>
            </div>
            <BuyButton />
        </div>
    )
}