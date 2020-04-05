import TreckoHttpResponse from "../TreckoHttpResponse";

class TreckoHttpResponseImpl implements TreckoHttpResponse {
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}

export default TreckoHttpResponseImpl;