import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { CharactersResponse } from 'types/charactersApiResponse';

export default {
  async getCharacters(): Promise<CharactersResponse> {
    const ts = Date.now();
    const response = await axios.get('/characters', {
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

  async getOneCharacter(id: string): Promise<CharactersResponse> {
    const ts = Date.now();
    const response = await axios.get(`/characters/${id}`, {
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
