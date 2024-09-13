package com.task.taskserver.controller;

import com.task.taskserver.dtos.RequestTask;
import com.task.taskserver.models.Task;
import com.task.taskserver.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@AllArgsConstructor
@RestController
@RequestMapping("/task")
public class TaskController {
    private final TaskService taskService;

    @GetMapping("/get-all-task")
    public List<Task> getAllTask(){
        return taskService.getAllTask();
    }
    @PostMapping("/new-task")
    public ResponseEntity<Task> seveTask(@RequestBody Task task){
        Task task1 = taskService.saveTask(task);
        return ResponseEntity.status(HttpStatus.CREATED).body(task1);
    }
    @GetMapping("/get-task/{id}")
    public ResponseEntity<Task> getTask(@PathVariable Long id){
        Task task = taskService.getTaskById(id);
        return ResponseEntity.status(HttpStatus.OK).body(task);
    }
    @PutMapping("/update-task/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody RequestTask requestTask){
        Task task = taskService.updateTask(id, requestTask);
        return ResponseEntity.status(HttpStatus.CREATED).body(task);
    }
    @DeleteMapping("/delete-task/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
    @PutMapping("/change-status/{id}")
    public ResponseEntity<?> changeState(@PathVariable Long id){
        taskService.changeComplete(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
