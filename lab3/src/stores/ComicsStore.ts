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

  constructor() {
    makeObservable(this);
  }

  @action
  getComics = async (): Promise<void> => {
    try {
      this.loading = true;

      const comics = await api.getComics();

      runInAction(() => {
        this.comics = comics;
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
