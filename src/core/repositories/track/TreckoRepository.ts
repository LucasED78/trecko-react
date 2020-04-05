import TreckoHttpResponse from "../../http/TreckoHttpResponse";

interface TreckoRepository {
  track(code: string): Promise<TreckoHttpResponse>
}

export default TreckoRepository;