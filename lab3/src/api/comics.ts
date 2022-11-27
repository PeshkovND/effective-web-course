import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { ComicsApiResponse } from 'types/comicsApiResponse';

export default {
  async getComics(): Promise<ComicsApiResponse> {
    const ts = Date.now();
    const response = await axios.get('/comics', {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18
      }
    });
    return response.data;
  },

  async getOneComics(id: string): Promise<ComicsApiResponse> {
    const ts = Date.now();
    const response = await axios.get(`/comics/${id}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 1
      }
    });

    return response.data;
  }
};
