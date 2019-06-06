/**
 * @author 翟懿博
 * @email yibo.zhai@okcoin-inc.net
 * @create date 2019-05-10 14:21:33
 * @modify date 2019-05-10 14:21:33
 * @desc [demo-store]
 */

import { action, observable } from 'mobx';
import demoService from '../service/demo';

class DemoStore {
  // 标签列表
  @observable todoList = [];

  // 获取标签列表
  fetchList() {
    return demoService.fetchList().then(
      action((data) => {
        this.todoList = data;
      }),
    );
  }
}
const demoStore = new DemoStore();
export default demoStore;
