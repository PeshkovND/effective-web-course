import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { SeriesApiResponse } from 'types/seriesApiResponse';

export default {
  async getSeries(page: number): Promise<SeriesApiResponse> {
    const ts = Date.now();
    const response = await axios.get('/series', {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18,
        offset: page
      }
    });
    return response.data;
  },

  async getOneSeries(id: string): Promise<SeriesApiResponse> {
    const ts = Date.now();
    const response = await axios.get(`/series/${id}`, {
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
