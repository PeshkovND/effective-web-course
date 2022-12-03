import { observable, action, makeObservable } from 'mobx';

export class ThemeStore {
  @observable
  darkTheme: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  changeTheme = (theme: boolean): void => {
    this.darkTheme = !theme;
  };
}

const themeStore = new ThemeStore();

export default themeStore;
