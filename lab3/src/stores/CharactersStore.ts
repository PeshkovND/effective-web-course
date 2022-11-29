import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/characters';
import { CharactersResponse } from 'types/charactersApiResponse';

export class CharactersStore {
  @observable
  characters: CharactersResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  charactersDetails: CharactersResponse | undefined = undefined;

  @observable
  pageLimit: number = 1;

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacters = async (page: number): Promise<void> => {
    try {
      this.loading = true;

      const characters = await api.getCharacters(page);

      runInAction(() => {
        this.characters = characters;
        this.pageLimit = Math.ceil(characters.data.total / 18);
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

  @action
  getByName = async (name: string, page: number): Promise<void> => {
    try {
      this.loading = true;
      const characters = await api.getCharactersByName(name, page);

      runInAction(() => {
        this.characters = characters;
        this.pageLimit = Math.ceil(characters.data.total / 18);
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
