import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { ComicsApiResponse } from 'types/comicsApiResponse';

export default {
  async getComics(page: number): Promise<ComicsApiResponse> {
    const ts = Date.now();
    const response = axios.get('/comics', {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18,
        offset: page,
        orderBy: 'title'
      }
    });
    return response
      .then((e) => {
        if (e.data.data.count !== 0) return e.data;
        throw new Error('Large page number');
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.data === '') throw e.response.statusText;
          else if (e.response.data.status) throw e.response.data.status;
          else throw e.response.data.message;
        } else throw e.message;
      });
  },

  async getOneComics(id: string): Promise<ComicsApiResponse> {
    const ts = Date.now();
    const response = axios.get(`/comics/${id}`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 1
      }
    });

    return response
      .then((e) => {
        return e.data;
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.data === '') throw e.response.statusText;
          else if (e.response.data.status) throw e.response.data.status;
          else throw e.response.data.message;
        } else throw e.message;
      });
  },

  async getComicsByName(
    name: string,
    page: number
  ): Promise<ComicsApiResponse> {
    const ts = Date.now();
    const response = axios.get(`/comics`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18,
        offset: page,
        titleStartsWith: name,
        orderBy: 'title'
      }
    });
    return response
      .then((e) => {
        if (e.data.data.total === 0) throw new Error('Comics not found');
        if (e.data.data.count === 0) throw new Error('Large page number');
        return e.data;
      })
      .catch((e) => {
        if (e.response) {
          if (e.response.data === '') throw e.response.statusText;
          else if (e.response.data.status) throw e.response.data.status;
          else throw e.response.data.message;
        } else throw e.message;
      });
  }
};
