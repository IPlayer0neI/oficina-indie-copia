import { ArrowHollow } from "@/icons/ArrowHollow";
import { useWaitToPassHandler } from "@/hooks/useWaitToPassHandler";

interface ArrowsProps {
    handlePrevious: () => void;
    handleNext: () => void;
    arrowLeftStyle: string;
    arrowRightStyle: string;
    color?: string;
}

export function Arrows({ handlePrevious, handleNext, color, arrowLeftStyle, arrowRightStyle }: ArrowsProps) {
    const { waitHandler } = useWaitToPassHandler(450);

    return (
        <>
            <button onClick={waitHandler(handleNext)} style={{ zIndex: "2000" }} className={arrowLeftStyle}>
                <ArrowHollow color={color} side="left" />
            </button>
            <button onClick={waitHandler(handlePrevious)} style={{ zIndex: "2000" }} className={arrowRightStyle}>
                <ArrowHollow color={color} />
            </button>
        </>
    )
}