export class NullNameValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "NullNameValidationError";
    }
}