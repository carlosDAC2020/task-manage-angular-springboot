package com.task.taskserver.dtos;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class RequestTask {
    private String title;
    private String description;
    private String priority;
}
