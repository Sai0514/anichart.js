import Ani from "../charts/ani";
import Position from "../utils/position";
export interface BlurTextOptions {
    ani?: Ani;
    text?: string;
    time?: number;
    last?: number;
    fade?: number;
    pos?: Position;
    fillStyle?: string | CanvasGradient | CanvasPattern;
    font?: string;
    blur?: number;
}
