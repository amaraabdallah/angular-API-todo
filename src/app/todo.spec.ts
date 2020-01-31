import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
});

it('should accept values in the constructor', () => {
  let todo = new Todo({
    title: 'hello',
    done: true
  });
  expect(todo.title).toEqual('hello');
  expect(todo.done).toEqual(true);
});
