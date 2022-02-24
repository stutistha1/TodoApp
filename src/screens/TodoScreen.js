import React from 'react';

import {useDataProvider} from '../Provider';
import AddTask from '../components/Task';
import Tasks from '../components/IncompleteTasks';

export default function TodoScreen() {
  const tasks = useDataProvider();

  return (
    <>
      <Tasks tasks={tasks.todo} />
      <AddTask />
    </>
  );
}
