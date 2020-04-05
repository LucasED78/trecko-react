import TreckoHttpResponse from "./TreckoHttpResponse";
import TreckoHttpError from "./TreckoHttpError";

interface TreckoHttp {
  get(url: string, headers?: Object): Promise<TreckoHttpResponse>;
  post(url: string, body?: Object, headers?: Object): Promise<TreckoHttpResponse>;
  put(url: string, body?: Object, headers?: Object): Promise<TreckoHttpResponse>;
  delete(url: string, headers?: Object): Promise<TreckoHttpResponse>;
}

export default TreckoHttp;