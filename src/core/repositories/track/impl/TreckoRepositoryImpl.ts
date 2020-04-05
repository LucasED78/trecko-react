import TreckoRepository from "../TreckoRepository";
import TreckoHttp from "../../../http/TreckoHttp";
import TreckoHttpResponse from "../../../http/TreckoHttpResponse";

class TreckoRepositoryImpl implements TreckoRepository {
  treckoHttp: TreckoHttp;

  constructor(treckoHttp: TreckoHttp) {
    this.treckoHttp = treckoHttp;
  }

  async track(code: string): Promise<TreckoHttpResponse> {
    try {
      const data = await this.treckoHttp.get(`/${code}`);

      return data;
    } catch(e){
      throw e;
    }
  }
}

export default TreckoRepositoryImpl;