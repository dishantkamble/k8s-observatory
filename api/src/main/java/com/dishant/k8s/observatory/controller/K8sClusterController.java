package com.dishant.k8s.observatory.controller;

import java.util.List;

import com.dishant.k8s.observatory.model.NodeListItem;
import com.dishant.k8s.observatory.service.K8sClusterService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping("/k8s")
@AllArgsConstructor
public class K8sClusterController {
    
    private final K8sClusterService k8sClusterService;

    @GetMapping("/nodes")
    public List<NodeListItem> getAllNodes() {
        return this.k8sClusterService.getAllNodes();
    }
}
