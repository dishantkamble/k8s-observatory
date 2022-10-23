package com.dishant.k8s.observatory.model;

import lombok.Data;

@Data
public class NodeListItem {
    
    private String name;

    private String status;
}
