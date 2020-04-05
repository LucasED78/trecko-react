import TreckoHttp from "../TreckoHttp";
import TreckoHttpErrorImpl from "./TreckoHttpErrorImpl";
import TreckoHttpResponseImpl from "./TreckoHttpResponseImpl";
import TreckoApi from '../../TreckoApi';

class TreckoHttpImpl implements TreckoHttp {
  async get(url: string, headers?: Object): Promise<TreckoHttpResponseImpl> {
    try {
      const response = await TreckoApi.get(url);

      const [ data ] = response.data;
      
      if (data.isInvalid) throw new TreckoHttpErrorImpl(data.error, data.isInvalid);

      return new TreckoHttpResponseImpl(data)
    } catch(e){
      throw new TreckoHttpErrorImpl(e.error, e.isInvalid);
    }
  }
  async post(url: string, body?: Object, headers?: Object): Promise<TreckoHttpResponseImpl> {
    try {
      const response = await TreckoApi.post(url, body);

      const [ data ] = response.data;
      
      if (data.isInvalid) throw new TreckoHttpErrorImpl(data.error, data.isInvalid);

      return new TreckoHttpResponseImpl(data)
    } catch(e){
      throw new TreckoHttpErrorImpl(e.error, e.isInvalid);
    }
  }
  async put(url: string, body?: Object, headers?: Object): Promise<TreckoHttpResponseImpl> {
    try {
      const response = await TreckoApi.put(url, body);

      const [ data ] = response.data;
      
      if (data.isInvalid) throw new TreckoHttpErrorImpl(data.error, data.isInvalid);

      return new TreckoHttpResponseImpl(data)
    } catch(e){
      throw new TreckoHttpErrorImpl(e.error, e.isInvalid);
    }
  }
  async delete(url: string, headers?: Object): Promise<TreckoHttpResponseImpl> {
    try {
      const response = await TreckoApi.delete(url);

      const [ data ] = response.data;
      
      if (data.isInvalid) throw new TreckoHttpErrorImpl(data.error, data.isInvalid);

      return new TreckoHttpResponseImpl(data)
    } catch(e){
      throw new TreckoHttpErrorImpl(e.error, e.isInvalid);
    }
  } 
}

export default TreckoHttpImpl;