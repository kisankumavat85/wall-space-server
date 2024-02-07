class HttpError extends Error {
  code: number;
  constructor(code: number = 500, message: string = "Something went wrong") {
    super(message);
    this.code = code;
  }
}

export default HttpError;
