import styles from "./index.module.css";
import { Plus } from "@/icons/Plus";

interface CurriculumListModuleProps {
    title: string;
    steps: string[];
    isActived: boolean;
    handleActivedDetails: () => void;
}

export function CurriculumModule({ title, steps, isActived, handleActivedDetails }: CurriculumListModuleProps) {
    /*
    Há um delay estranho quando o .curtain for fechar;
    */
    return (
        <li className={styles.module} >
            <button className={styles.moduleSummary} onClick={handleActivedDetails}>
                <h3>{title}</h3>
                <Plus degs={isActived ? -45 : 0} />
            </button>
            <div className={styles.curtain} style={{
                maxHeight: isActived ? "" : "0"
            }}>
                {
                    <ul className={styles.moduleStepslist}>
                        {
                            steps.map(function (stepText) {
                                return (
                                    <li key={stepText} className={styles.moduleStep}>{stepText}</li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        </li>
    )
}