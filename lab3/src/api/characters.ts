import axios from 'api/helpers/axios';
import environments from 'config/environments';
import { Md5 } from 'ts-md5';
import { CharactersResponse } from 'types/charactersApiResponse';

export default {
  async getCharacters(page: number): Promise<CharactersResponse> {
    const ts = Date.now();
    const response = axios.get('/characters', {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18,
        offset: page,
        orderBy: 'name'
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

  async getOneCharacter(id: string): Promise<CharactersResponse> {
    const ts = Date.now();
    const response = axios.get(`/characters/${id}`, {
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

  async getCharactersByName(
    name: string,
    page: number
  ): Promise<CharactersResponse> {
    const ts = Date.now();
    const response = axios.get(`/characters`, {
      params: {
        apikey: environments.apiKey,
        hash: Md5.hashStr(
          ts + environments.apiKeyPrivate + environments.apiKey
        ),
        ts,
        limit: 18,
        offset: page,
        nameStartsWith: name,
        orderBy: 'name'
      }
    });
    return response
      .then((e) => {
        if (e.data.data.total === 0) throw new Error('Characters not found');
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
