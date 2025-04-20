import styles from "./index.module.css";
import { BuyArea } from "../BuyComponents/BuyArea/BuyArea";
import { Benefit } from "./Benefit/Benefit";

export function CourseBuyArea() {
    return (
        <div className={styles.purchaseOverviewContainer}>
            <div className={styles.purchaseOverview}>
                <div className={styles.benefitsArea}>
                    <Benefit title="15 DIAS DE TESTE" imgName="number-15.png">
                        Experimente o curso por 15 dias. Se você não gostar, ou não achar que é pra você, garantimos seu dinheiro de volta com reembolso integral! Fique à vontade para testar o curso sem compromissos.
                    </Benefit>
                    <Benefit title="ACESSO VITALÍCIO" imgName="forever_1_-_1_.webp">
                        Você só precisa comprar o curso uma única vez para receber acesso vitalício à plataforma e ao grupo do discord. Dessa forma, você terá acesso a qualquer conteúdo novo que for lançado no futuro.
                    </Benefit>
                </div>
                <BuyArea />
            </div>
        </div>
    )
}