import { observable, action, makeObservable } from 'mobx';

export class ThemeStore {
  @observable
  darkTheme: boolean = localStorage.getItem('theme') === 'true';

  constructor() {
    makeObservable(this);
  }

  @action
  changeTheme = (theme: boolean): void => {
    this.darkTheme = !theme;
    localStorage.setItem('theme', String(this.darkTheme));
  };
}

const themeStore = new ThemeStore();

export default themeStore;
