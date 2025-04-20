import { RefObject, useCallback, useEffect } from "react";
import styles from "./index.module.css";
import { useCarousel } from "@/hooks/useCarousel";
import { useDivMeasures } from "@/hooks/useDivMeasures";
import { Bullets } from "../CarouselComponents/Bullets/Bullets";
import { Arrows } from "../CarouselComponents/Arrows/Arrows";
import { Showcase } from "../CarouselComponents/Showcase/Showcase";

interface PerspectiveCarouselProps {
    items: string[] | Array<Array<string>>;
    customItemEmphasisStyle?: string;
    bottomPosition?: string;
    imgBasePath: string;
}

export function PerspectiveCarousel({ items, customItemEmphasisStyle, bottomPosition, imgBasePath }: PerspectiveCarouselProps) {
    const { refMeasuresInstance, divWidth, divHeight } = useDivMeasures();
    const { position, setPosition, getFixedPosition, handleNext, handlePrevious, spacingLeftValue } = useCarousel(items.length, divWidth);

    const carouselItemStyle = useCallback(function (index: number): (string | void) {
        const fixedPosition = getFixedPosition(index);

        if (fixedPosition == 1) {
            return `${styles.carouselItEmemphasis} ${customItemEmphasisStyle}`;
        } else if (fixedPosition == 0) {
            return styles.carouselItemLeft;
        } else if (fixedPosition == 2) {
            return styles.carouselItemRight;
        } else if (!((fixedPosition == 0) || (fixedPosition == 2))) {
            return styles.carouselItemHidden;
        }
    }, [getFixedPosition, customItemEmphasisStyle])

    const bulletItemStyle = useCallback(function (index: number) {
        if (getFixedPosition(index) == 0) {
            return styles.expandBullet;
        }

        return styles.bullet;
    }, [getFixedPosition])

    useEffect(function () {
        console.log("position", position)
    }, [position])

    function customSetPosition(index: number) {
        setPosition(items.length - index)
    }

    return (
        <div className={styles.carouselContainer}>
            <>
                <Showcase
                    items={items}
                    height={divHeight}
                    spacingLeftValue={spacingLeftValue}
                    carouselItemStyle={carouselItemStyle}
                    refMeasuresInstance={refMeasuresInstance as RefObject<HTMLDivElement>}
                    itemStyle={styles.carouselItem}
                    imgBasePath={imgBasePath}
                />
                <Arrows arrowLeftStyle={styles.arrowLeft} arrowRightStyle={styles.arrowRight} handleNext={handleNext} handlePrevious={handlePrevious} />
                <Bullets setPosition={customSetPosition} length={items.length} bulletItemStyle={bulletItemStyle} bottomPosition={bottomPosition} />
            </>
        </div>
    )
}