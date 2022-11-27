import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/characters';
import { CharactersResponse } from 'types/charactersApiResponse';

class CharactersStore {
  @observable
  characters: CharactersResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  charactersDetails: CharactersResponse | undefined = undefined;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacters = async (): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.getCharacters();

      runInAction(() => {
        this.characters = characters;
      });
    } catch (error) {
      console.error(error);
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  getOneCharacter = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const charactersDetails = await api.getOneCharacter(id);

      runInAction(() => {
        this.charactersDetails = charactersDetails;
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
