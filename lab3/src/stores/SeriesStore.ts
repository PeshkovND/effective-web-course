import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/series';
import { SeriesApiResponse } from 'types/seriesApiResponse';
import { FavouriteType } from 'types/favouriteType';

export class SeriesStore {
  @observable
  series: SeriesApiResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  seriesDetails: SeriesApiResponse | undefined = undefined;

  @observable
  pageLimit: number = 1;

  @observable
  error: string | undefined = undefined;

  @observable
  favourites: FavouriteType[] = JSON.parse(
    localStorage.getItem('favouriteSeries') || '[]'
  );

  constructor() {
    makeObservable(this);
  }

  @action
  getSeries = async (page: number): Promise<void> => {
    try {
      this.loading = true;
      this.error = undefined;

      const series = await api.getSeries(page);

      runInAction(() => {
        this.series = series;
        this.pageLimit = Math.ceil(series.data.total / 18);
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
  getOneSeries = async (id: string): Promise<void> => {
    try {
      this.loading = true;
      this.error = undefined;

      const seriesDetails = await api.getOneSeries(id);

      runInAction(() => {
        this.seriesDetails = seriesDetails;
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

      const characters = await api.getSeriesByName(name, page);

      runInAction(() => {
        this.series = characters;
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
    localStorage.setItem('favouriteSeries', JSON.stringify(this.favourites));
  };

  @action
  removeFavorites = (elem: FavouriteType): void => {
    this.favourites = this.favourites.filter(
      (favElem) => favElem.id !== elem.id
    );
    localStorage.setItem('favouriteSeries', JSON.stringify(this.favourites));
  };
}

const seriesStore = new SeriesStore();

export default seriesStore;
