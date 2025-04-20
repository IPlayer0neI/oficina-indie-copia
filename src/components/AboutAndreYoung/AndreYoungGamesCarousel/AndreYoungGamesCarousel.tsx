import { RefObject, useCallback } from "react";
import styles from "./index.module.css";
import { useDivMeasures } from "@/hooks/useDivMeasures";
import { Showcase } from "../../CarouselComponents/Showcase/Showcase";
import { useCarousel } from "@/hooks/useCarousel";
import { Arrows } from "../../CarouselComponents/Arrows/Arrows";
import { Bullets } from "../../CarouselComponents/Bullets/Bullets";

const itemsLonely = [
    ["9Kings.png", "9 Kings"],
    ["seraphs-last-stand-1.webp", "Seraph's Last Stand"],
    ["ending-tau.webp", "Ending Tau"],
    ["gods-of-sand-1.webp", "Gods of Sand"]
];
const duplicateItems = itemsLonely.concat(itemsLonely);

export function AndreYoungGamesCarousel() {
    /*
    To-Do 
     Gostaria de tentar achar alguma solução mais "matemática" para arrumar a centralização dos itens do carousel"
    */
    const { refMeasuresInstance, divWidth, divHeight } = useDivMeasures();
    const gap = divWidth / 6;
    const { setPosition, getFixedPosition, handleNext, handlePrevious, spacingLeftValue } = useCarousel(duplicateItems.length, divWidth + gap);

    const carouselItemStyle = useCallback(function (index: number): (string | void) {
        const fixedPosition = getFixedPosition(index);

        if (((fixedPosition < 0 || fixedPosition > 2))) {
            return styles.itemHidden;
        }
    }, [getFixedPosition]);

    const bulletItemStyle = useCallback(function (index: number) {
        if (getFixedPosition(index) > (itemsLonely.length - 1)) {
            if ((getFixedPosition(index) - itemsLonely.length) == 0) {
                return styles.expandBullet;
            }
        } else if (getFixedPosition(index) == 0) {
            return styles.expandBullet;
        }

        return styles.bullet;
    }, [getFixedPosition]);

    function customSetPosition(index: number) {
        setPosition(itemsLonely.length - index)
    }

    return (
        <div className={styles.andreYoungGamesCarousel}>
            <Showcase
                items={duplicateItems}
                height={divHeight}
                spacingLeftValue={spacingLeftValue}
                carouselItemStyle={carouselItemStyle}
                refMeasuresInstance={refMeasuresInstance as RefObject<HTMLDivElement>}
                itemStyle={styles.carouselItemStyle}
                imgBasePath="andre-young-games"
            />
            <Arrows arrowLeftStyle={styles.arrowLeft} arrowRightStyle={styles.arrowRight} color="white" handleNext={handleNext} handlePrevious={handlePrevious} />
            <Bullets bottomPosition="0" setPosition={customSetPosition} length={itemsLonely.length} bulletItemStyle={bulletItemStyle} />
        </div>
    )
}