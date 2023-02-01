export class QuantityValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "QuantityValidationError";
    }
}