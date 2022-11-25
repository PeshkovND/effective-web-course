import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { CharactersResponse } from 'types/charactersApiResponse';

export default {
  async getCharacters(): Promise<CharactersResponse[]> {
    const ts = Date.now();
    const response = await axios.get('/characters', {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts
      }
    });
    return response.data;
  },

  async getPost(postId: number): Promise<CharactersResponse> {
    const response = await axios.post(`/posts/${postId}`);

    return response.data;
  }
};
