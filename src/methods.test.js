import 'jest-localstorage-mock';
import { JSDOM } from 'jsdom';
import { addTask, deleteTask } from './methods.js';
import tasksObj from './tasks.js';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = window.document;

// Tests that a task with a valid description is added to the tasks array.

it('test_add_task_with_valid_description', () => {
  // Arrange
  const initialTasks = [{ id: 1, description: 'Task 1', completed: false }];
  tasksObj.setTasks(initialTasks);
  const description = 'Task 2';

  // Act
  addTask(description);
  const updatedTasks = tasksObj.getTasks();

  // Assert
  expect(updatedTasks.length).toBe(2);
  expect(updatedTasks[1].description).toBe(description);
});
