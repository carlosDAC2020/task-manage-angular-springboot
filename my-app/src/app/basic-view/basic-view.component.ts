import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Directives
import { FormsModule } from "@angular/forms";  // Two-way binding module
import { Renderer2 } from '@angular/core';
import { ApiTasksService } from '../services/api-tasks.service';
import { Task } from '../models/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-view',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './basic-view.component.html',
  styleUrls: ['./basic-view.component.css']  // Ensure `styleUrls` is used, not `styleUrl`
})
export class BasicViewComponent implements OnInit, OnDestroy {

  taskArray: Task[] = [];
  selectedTask: Task = new Task();
  isEdit: boolean = false;
  filterTitle: string = "";
  filteredTasks: Task[] = [];
  isFilter: boolean = false;
  
  private subscriptions: Subscription = new Subscription();

  constructor(private renderer: Renderer2, private taskService: ApiTasksService) {
    this.renderer.addClass(document.body, 'basic-view-background');
  }
  
  ngOnInit() {
    this.loadTasks();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'basic-view-background');
    this.subscriptions.unsubscribe();  // Clean up subscriptions
  }

  loadTasks() {
    this.subscriptions.add(this.taskService.getAllTasks().subscribe(
      tasks => this.taskArray = tasks,
      error => console.error('Error fetching tasks', error)
    ));
    console.log(this.taskArray.length)
  }

  openForEdit(task: Task) {
    this.selectedTask = { ...task };
    this.isEdit = true;
  }

  addOrEdit() {
    if (!this.selectedTask.title || !this.selectedTask.description || !this.selectedTask.priority) {
      alert("Please complete all the fields before adding the task.");
      return;
    }

    if (this.selectedTask.id === 0 || this.selectedTask.id === undefined) {
      this.subscriptions.add(this.taskService.createTask(this.selectedTask).subscribe(
        newTask => {
          this.taskArray.push(newTask);
          console.log("task save ")
          this.clearSelectedTask();
        },
        error => console.error('Error creating task', error)
      ));
    } else {
      this.subscriptions.add(this.taskService.updateTask(this.selectedTask).subscribe(
        updatedTask => {
          const index = this.taskArray.findIndex(task => task.id === updatedTask.id);
          if (index !== -1) {
            this.taskArray[index] = updatedTask;
          }
          this.clearSelectedTask();
          console.log("task update ")
        },
        error => console.error('Error updating task', error)
      ));
    }
  }

  delete(taskDeleted:Task) {
    if (confirm("Are you sure you want to delete this task?")) {
      this.selectedTask = taskDeleted;
      this.subscriptions.add(this.taskService.deleteTask(this.selectedTask.id).subscribe(
        () => {
          this.taskArray = this.taskArray.filter(task => task.id !== this.selectedTask.id);
          this.clearSelectedTask();
        },
        error => console.error('Error deleting task', error)
      ));
    }
  }

  clearSelectedTask() {
    this.selectedTask = new Task();
    this.isEdit = false;
  }

  handleSearch() {
    if (this.filterTitle.length > 0) {
      this.filteredTasks = this.taskArray.filter(task =>
        task.title?.toLowerCase().includes(this.filterTitle.toLowerCase()));
      this.isFilter = true;
    } else {
      this.isFilter = false;
    }
  }

  toggleCompletion(task: Task) {
    this.subscriptions.add(this.taskService.changeTaskStatus(task.id).subscribe(
      () => {
        task.complete = !task.complete;
      },
      error => console.error('Error changing task status', error)
    ));
  }

}
