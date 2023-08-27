import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/characters';
import { CharactersResponse } from 'types/charactersApiResponse';
import { FavouriteType } from 'types/favouriteType';

export class CharactersStore {
  @observable
  characters: CharactersResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  charactersDetails: CharactersResponse | undefined = undefined;

  @observable
  pageLimit: number = 1;

  @observable
  error: string | undefined = undefined;

  @observable
  favourites: FavouriteType[] = JSON.parse(
    localStorage.getItem('favouriteCharacters') || '[]'
  );

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacters = async (page: number): Promise<void> => {
    try {
      this.loading = true;
      this.error = undefined;

      const characters = await api.getCharacters(page);

      runInAction(() => {
        this.characters = characters;
        this.pageLimit = Math.ceil(characters.data.total / 18);
      });
    } catch (error) {
      runInAction(() => {
        if (typeof error === 'string') this.error = error;
      });
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
      this.error = undefined;
      const charactersDetails = await api.getOneCharacter(id);

      runInAction(() => {
        this.charactersDetails = charactersDetails;
      });
    } catch (error) {
      runInAction(() => {
        if (typeof error === 'string') this.error = error;
      });
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
      this.error = undefined;
      const characters = await api.getCharactersByName(name, page);

      runInAction(() => {
        this.characters = characters;
        this.pageLimit = Math.ceil(characters.data.total / 18);
      });
    } catch (error) {
      runInAction(() => {
        if (typeof error === 'string') this.error = error;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  };

  @action
  addFavorites = (elem: FavouriteType): void => {
    this.favourites.push(elem);
    localStorage.setItem(
      'favouriteCharacters',
      JSON.stringify(this.favourites)
    );
  };

  @action
  setLoading = (): void => {
    this.loading = true;
  };

  @action
  removeFavorites = (elem: FavouriteType): void => {
    this.favourites = this.favourites.filter(
      (favElem) => favElem.id !== elem.id
    );
    localStorage.setItem(
      'favouriteCharacters',
      JSON.stringify(this.favourites)
    );
  };
}

const charactersStore = new CharactersStore();

export default charactersStore;
