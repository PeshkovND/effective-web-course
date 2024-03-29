import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/comics';
import { ComicsApiResponse } from 'types/comicsApiResponse';
import { FavouriteType } from 'types/favouriteType';

export class ComicsStore {
  @observable
  comics: ComicsApiResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  comicsDetails: ComicsApiResponse | undefined = undefined;

  @observable
  pageLimit: number = 1;

  @observable
  error: string | undefined = undefined;

  @observable
  favourites: FavouriteType[] = JSON.parse(
    localStorage.getItem('favouriteComics') || '[]'
  );

  constructor() {
    makeObservable(this);
  }

  @action
  getComics = async (page: number): Promise<void> => {
    try {
      this.loading = true;
      this.error = undefined;

      const comics = await api.getComics(page);

      runInAction(() => {
        this.comics = comics;
        this.pageLimit = Math.ceil(comics.data.total / 18);
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
  getOneComics = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      this.error = undefined;

      const comicsDetails = await api.getOneComics(id);

      runInAction(() => {
        this.comicsDetails = comicsDetails;
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

      const characters = await api.getComicsByName(name, page);

      runInAction(() => {
        this.comics = characters;
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
    localStorage.setItem('favouriteComics', JSON.stringify(this.favourites));
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
    localStorage.setItem('favouriteComics', JSON.stringify(this.favourites));
  };
}

const comicsStore = new ComicsStore();

export default comicsStore;
