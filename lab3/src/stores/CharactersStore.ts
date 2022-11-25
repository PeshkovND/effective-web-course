import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/characters';
import { CharactersResponse } from 'types/charactersApiResponse';

class CharactersStore {
  @observable
  posts: CharactersResponse[] = [];

  @observable
  loading: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacters = async (): Promise<void> => {
    try {
      this.loading = true;

      const posts = await api.getCharacters();

      runInAction(() => {
        this.posts = posts;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
