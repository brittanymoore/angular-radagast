export default class Step {

    public name: string;
    public order: number;
    public isActive: boolean;

    constructor(name: string, number?: number) {
        this.name = name;
        this.order = number;
        this.isActive = false;
    }

}
