/**
 * @author 翟懿博
 * @email yibo.zhai@okcoin-inc.com
 * @create date 2019-05-08 15:35:31
 * @modify date 2019-05-08 15:35:31
 * @desc [demo-store]
 */

import { action, observable } from 'mobx';
import demoService from '../service/demo';

class TagStore {
  // 标签列表
  @observable todoList = []; 
  // 获取标签列表
  fetchList() {
    return demoService.fetchList().then(
      action((data) => {
      this.todoList = data;
    }));
  }
}

export default TagStore;
