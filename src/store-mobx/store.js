import { types, onSnapshot } from 'mobx-state-tree';

const Count = types
  .model('Count', {
    value: 0
  })
  .actions(self => ({
    set: val => self.value = val
  }));

const count = Count.create({value: 0});
count.subscribe = method =>{
  method(count);
  return onSnapshot(count, method);
}
export { count };