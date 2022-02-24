import React from 'react';

import {useDataProvider} from '../Provider';
import FinishedTasks from '../components/completedTask';

export default function DoneScreen() {
  const tasks = useDataProvider();

  return <FinishedTasks tasks={tasks.done} />;
}
