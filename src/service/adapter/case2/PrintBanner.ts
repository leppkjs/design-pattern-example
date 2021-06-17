import {Print} from "../case1/Print";
import {Banner} from "../case1/Banner";

export class PrintBanner implements Print {
    #banner: Banner;

    constructor(text: string) {
        this.#banner = new Banner(text);
    }

    public printStrong(): void {
        this.#banner.showWithAster()
    }

    public printWeak(): void {
        this.#banner.showWithParen();
    }

}