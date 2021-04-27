import React, { useState } from 'react';
import {tasks} from '../api/tasks';

export const Task = () => {


  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <ul>
        {tasks.map((task) => 
            <li>{task._id} {task.text}</li>
        )}
        </ul>
    </div>
  );
};