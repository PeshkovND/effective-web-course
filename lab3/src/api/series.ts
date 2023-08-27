import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { SeriesApiResponse } from 'types/seriesApiResponse';

export default {
  async getSeries(page: number): Promise<SeriesApiResponse> {
    const ts = Date.now();
    const response = axios.get('/series', {
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

  async getOneSeries(id: string): Promise<SeriesApiResponse> {
    const ts = Date.now();
    const response = axios.get(`/series/${id}`, {
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

  async getSeriesByName(
    name: string,
    page: number
  ): Promise<SeriesApiResponse> {
    const ts = Date.now();
    const response = axios.get(`/series`, {
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
