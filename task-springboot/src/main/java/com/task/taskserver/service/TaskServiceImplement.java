package com.task.taskserver.service;

import com.task.taskserver.dtos.RequestTask;
import com.task.taskserver.models.Task;
import com.task.taskserver.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TaskServiceImplement implements TaskService {

    private final TaskRepository taskRepository;


    @Override
    public List<Task> getAllTask() {
        return taskRepository.findAll();
    }

    @Override
    public Task getTaskById(Long id) {
        Optional<Task> task = taskRepository.findById(id);

        return task.get();
    }

    @Override
    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task updateTask(Long id, RequestTask requestTask) {
        Optional<Task> taskDB = taskRepository.findById(id);
        taskDB.get().setTitle(requestTask.getTitle());
        taskDB.get().setDescription(requestTask.getDescription());
        taskDB.get().setPriority(requestTask.getPriority());
        return taskRepository.save(taskDB.get());

    }

    @Override
    public void deleteTask(Long id) {
        taskRepository.deleteById(id);

    }

    @Override
    public void changeComplete(Long id) {
        Optional<Task> taskDB = taskRepository.findById(id);
        Boolean complete = taskDB.get().getComplete();
        complete = !complete;
        taskDB.get().setComplete(complete);
        taskRepository.save(taskDB.get());
    }
}
