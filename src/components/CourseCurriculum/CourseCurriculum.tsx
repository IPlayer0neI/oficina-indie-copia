import { useCallback, useState } from "react";
import styles from "./index.module.css";
import { BuyButton } from "../BuyComponents/BuyButton/BuyButton";
import { CurriculumModule } from "./CurriculumModule/CurriculumModule";

const courseModules = [
    {
        title: "Módulo 1: Introdução à Programação",
        steps: [
            "Instalando a Unity",
            "Variáveis e Operações Aritméticas",
            "Estruturas Condicionais",
            "Elementos de UI",
            "Criando um simulador de Pedra, Papel e Tesoura"
        ]
    },
    {
        title: "Módulo 2: Top Down RPG",
        steps: [
            "Movimentação de Personagem",
            "Inimigos Simples",
            "Mecânica de Combate",
            "Inventário",
            "Dinheiro e Loja",
            "Inimigos Complexos",
            "Mecânica de Level Up",
            "Gráficos e Tilemaps",
            "Animação 2D",
            "Sistema de Particulas",
            "Efeitos Sonoros",
            "Polimento e Pós-Processamento",
            "Opções e Save Game"
        ]
    },
    {
        title: "Módulo 3: Recriando Jogos Clássicos",
        steps: [
            "Flappy Bird",
            "Super Mario",
            "Pong",
            "Space Invaders",
            "Frogger",
            "Breakout",
            "Vampire Survivors"
        ]
    },
    {
        title: "Módulo 4: Programação Intermediária e Avançada",
        steps: [
            " Estruturas em Loop",
            "Arrays e Listas",
            "Padrões de programação",
            "Save Game por arquivos de texto"
        ]
    },
    {
        title: "Módulo 5: Tower Defense",
        steps: [
            "Inimigos e Movimentação em Trilhos",
            "HUD e UI",
            "Sistema de Waves",
            "Torres e Construção"
        ]
    },
    {
        title: "Módulo 6: Terror e FPS",
        steps: [
            "3D e Movimentação em Primeira Pessoa",
            "Inimigo e Navegação",
            "Objetivos, Vitória e Derrota",
            "Gráficos e Animação",
            "Mecânica de Tiro (Recarregar, Trocar e Headshot)",
            "Polimento"
        ]
    },
    {
        title: "Módulo 7: Game Design",
        steps: [
            " Teoria de Cores",
            "Padrões de UI",
            "Estilos de jogos: O que vende x O que não vende",
            " GDD: Documento de Design de Jogos",
            "Ferramentas de Organização",
            "Trabalhando em Equipe"
        ]
    },
    {
        title: "Módulo 8:  Publicando seu Jogo",
        steps: [
            " Publicando no itch.io",
            "Publicando na Steam",
            "Marketing: Como ter um canal de sucesso no Youtube",
            "Marketing: Youtube, Redes Sociais e Influencers",
            "Finanças: Como pagar menos impostos"
        ]
    }
];

export function CurriculumList() {
    const [activedDetails, setActivedDetails] = useState<null | number>(null);

    const handleActivedDetails = useCallback(function (newActivedDetails: number) {
        if (activedDetails == newActivedDetails) {
            setActivedDetails(null)
        } else {
            setActivedDetails(newActivedDetails)
        }
    }, [setActivedDetails, activedDetails]);

    return (
        <div className={styles.curriculumListContainer}>
            <div className={styles.curriculumList}>
                <h2 className={`textShine ${styles.curriculumListTitle}`} >
                    Conheça a jornada da Oficina Indie
                </h2>
                <ul className={styles.modulesList}>
                    {
                        courseModules.map(function ({ title, steps }, index) {
                            return (
                                <CurriculumModule
                                    key={title}
                                    title={title}
                                    steps={steps}
                                    isActived={activedDetails == index}
                                    handleActivedDetails={() => { handleActivedDetails(index) }}
                                />
                            )
                        })
                    }
                </ul>
                <div className={styles.buttonStyle}>
                    <BuyButton />
                </div>
            </div>
        </div >
    )
}