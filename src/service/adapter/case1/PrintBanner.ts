import {Print} from "./Print";
import {Banner} from "./Banner";

export class PrintBanner extends Banner implements Print {
    constructor(text: string) {
        super(text);
    }
    public printStrong(): void {
        this.showWithAster()
    }

    public printWeak(): void {
        this.showWithParen();
    }

}