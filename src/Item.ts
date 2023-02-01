import { NullNameValidationError } from "./error/NullNameValidationError";
import { QuantityValidationError } from "./error/QuantityValidationError";

export class Item {


    constructor(private name: string, private quantity: number) {

    }

    public check() {
        if (this.name === null || !this.name) {
            throw new NullNameValidationError("Name must must be provided");
        }
        if (this.quantity < 1 || this.quantity > 100) {
            throw new QuantityValidationError("Quantity must be more than zero and greather than 100");
        }

    }

}