class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = "CustomError";

    Object.setPrototypeOf(this, new.target.prototype);
  }

  toJSON() {
    return { message: this.message, statusCode: this.statusCode };
  }
}

export default CustomError;
