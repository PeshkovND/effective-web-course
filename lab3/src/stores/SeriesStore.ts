import { observable, action, makeObservable, runInAction } from 'mobx';
import api from 'api/series';
import { SeriesApiResponse } from 'types/seriesApiResponse';

class SeriesStore {
  @observable
  series: SeriesApiResponse | undefined = undefined;

  @observable
  loading: boolean = false;

  @observable
  seriesDetails: SeriesApiResponse | undefined = undefined;

  constructor() {
    makeObservable(this);
  }

  @action
  getSeries = async (): Promise<void> => {
    try {
      this.loading = true;

      const series = await api.getSeries();

      runInAction(() => {
        this.series = series;
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
  getOneSeries = async (id: string): Promise<void> => {
    try {
      this.loading = true;

      const seriesDetails = await api.getOneSeries(id);

      runInAction(() => {
        this.seriesDetails = seriesDetails;
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

const seriesStore = new SeriesStore();

export default seriesStore;
