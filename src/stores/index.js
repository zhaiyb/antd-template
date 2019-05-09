/**
 * mobx store
 */

import DemoStore from './demoStore';

class RootStore {
  constructor() {
    this.demoStore = new DemoStore(this);
  }
}

export default new RootStore();
