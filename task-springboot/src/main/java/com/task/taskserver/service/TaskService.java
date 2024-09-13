package com.task.taskserver.service;

import com.task.taskserver.dtos.RequestTask;
import com.task.taskserver.models.Task;

import java.util.List;
import java.util.Optional;

public interface TaskService {
    List<Task> getAllTask();
    Task getTaskById(Long id);
    Task saveTask(Task task);
    Task updateTask(Long id, RequestTask requestTask);
    void deleteTask(Long id);
    void changeComplete(Long id);
}
