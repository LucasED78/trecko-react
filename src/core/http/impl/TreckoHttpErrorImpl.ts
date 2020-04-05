import TreckoHttpError from "../TreckoHttpError";

class TreckoHttpErrorImpl implements TreckoHttpError {
  error: string;
  invalid: boolean;
  
  constructor(error: string, invalid: boolean) {
    this.error = error;
    this.invalid = invalid;
  }
}

export default TreckoHttpErrorImpl;