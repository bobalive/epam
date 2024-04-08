import {MutableRefObject, RefObject} from "react";

export interface useAnimationInterface {
    roadWidth: number|undefined;
    interval: MutableRefObject<number|undefined>;
    speed: number;
    carRef: RefObject<SVGSVGElement>;
}

export const useAnimation = ({ roadWidth, interval, speed, carRef }: useAnimationInterface) => {
    let pos = 0;
    if (roadWidth) {
        interval.current = setInterval(() => {
            if (carRef.current && roadWidth - 70 > pos) {
                carRef.current.style.transform = `translateX(${pos}px)`;
                pos++;
            } else {
                clearInterval(interval.current);
            }
        }, 100 / speed);
    }
};
