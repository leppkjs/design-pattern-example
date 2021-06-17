import {Print} from "./Print";
import {Banner} from "../case1/Banner";

export class PrintBanner extends Print {
    #banner: Banner;

    constructor(text: string) {
        super();
        this.#banner = new Banner(text);
    }

    public printStrong(): void {
        this.#banner.showWithAster()
    }

    public printWeak(): void {
        this.#banner.showWithParen();
    }

}