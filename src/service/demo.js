import URL from '_src/constants/URL';
import dataProxy from '../dataProxy';

export default {
  fetchList() {
    const result = new Promise((resolve,reject)=>{
      resolve([{
        id: 1,
        name: '事件1'
      },{
        id: 2,
        name: '事件2'
      },{
        id: 3,
        name: '事件3'
      }]);
    });
    return result;
    // return dataProxy.get(URL.demo);
  }
}