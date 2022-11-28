import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/comics';
import { ComicsApiResponse } from 'types/comicsApiResponse';

class ComicsStore {
  @observable
  comics: ComicsApiResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  comicsDetails: ComicsApiResponse | undefined = undefined;

  @observable
  pageLimit: number = 1;

  constructor() {
    makeObservable(this);
  }

  @action
  getComics = async (page: number): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.getComics(page);

      runInAction(() => {
        this.comics = comics;
        this.pageLimit = Math.ceil(comics.data.total / 18);
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
  getOneComics = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const comicsDetails = await api.getOneComics(id);

      runInAction(() => {
        this.comicsDetails = comicsDetails;
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

const comicsStore = new ComicsStore();

export default comicsStore;
