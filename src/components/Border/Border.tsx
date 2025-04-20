import styles from "./index.module.css";
import { ArrowDown } from "@/icons/ArrowDown";

interface BorderProps {
    disableArrow?: boolean | null;
}

export function Border({ disableArrow }: BorderProps) {
    return (
        <div className={styles.borderContainer}>
            <div className={styles.border}></div>
            {
                disableArrow || (
                    <div className={styles.marker}>
                        <div className={styles.arrowDownContainer}>
                            <ArrowDown />
                        </div>
                    </div>
                )
            }
        </div>
    )
}