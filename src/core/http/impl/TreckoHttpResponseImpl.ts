import TreckoHttpResponse from "../TreckoHttpResponse";

class TreckoHttpResponseImpl implements TreckoHttpResponse {
  data: Object;

  constructor(data: Object) {
    this.data = data;
  }
}

export default TreckoHttpResponseImpl;