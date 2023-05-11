import 'jest-localstorage-mock';
// import { JSDOM } from 'jsdom';
import { addTask, deleteTask } from './methods.js';
import tasksObj from './tasks.js';

// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.window = dom.window;
// global.document = window.document;

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

// Tests that multiple tasks with valid descriptions are added to the tasks array.

it('test_add_multiple_tasks_with_valid_descriptions', () => {
  // Arrange
  const initialTasks = [{ id: 1, description: 'Task 1', completed: false }];
  tasksObj.setTasks(initialTasks);
  const descriptions = ['Task 2', 'Task 3'];

  // Act
  descriptions.forEach((description) => addTask(description));
  const updatedTasks = tasksObj.getTasks();

  // Assert
  expect(updatedTasks.length).toBe(3);
  expect(updatedTasks[1].description).toBe(descriptions[0]);
  expect(updatedTasks[2].description).toBe(descriptions[1]);
});

// Tests that a task is successfully deleted from the task list when given a valid id.
it('test_delete_task_with_valid_id', () => {
  // Arrange
  const id = 2;
  const initialTasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ];
  tasksObj.setTasks(initialTasks);

  // Act
  deleteTask(id);

  // Assert
  const updatedTasks = tasksObj.getTasks();
  expect(updatedTasks.length).toBe(2);
  expect(updatedTasks[0].id).toBe(1);
  expect(updatedTasks[1].id).toBe(2);
});
// Tests that no task is deleted from the task list when given an invalid id.
it('test_delete_task_with_invalid_id', () => {
  // Arrange
  const id = 4;
  const initialTasks = [
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
  ];
  tasksObj.setTasks(initialTasks);

  // Act
  deleteTask(id);

  // Assert
  const updatedTasks = tasksObj.getTasks();
  expect(updatedTasks.length).toBe(3);
});
