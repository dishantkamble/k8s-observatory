package com.dishant.k8s.observatory.service;

import java.util.List;
import java.util.stream.Collectors;

import com.dishant.k8s.observatory.model.NodeListItem;

import org.springframework.stereotype.Service;

import io.fabric8.kubernetes.client.KubernetesClient;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class K8sClusterService {

    private final KubernetesClient k8sClient;

    public List<NodeListItem> getAllNodes() {
        return k8sClient.nodes()
                .list()
                .getItems()
                .stream()
                .map(node -> {
                    NodeListItem nodeListItem = new NodeListItem();
                    nodeListItem.setName(node.getMetadata().getName());
                    nodeListItem.setStatus("READY");
                    return nodeListItem;
                })
                .collect(Collectors.toList());
    }
}
