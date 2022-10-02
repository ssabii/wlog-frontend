import type Core from "core";

export default class UaaLoginStore {
  private core: Core;

  constructor(core: Core) {
    this.core = core;
  }

  public login = () => {
    this.core.auth.redirectToUAALogin();
  };
}
