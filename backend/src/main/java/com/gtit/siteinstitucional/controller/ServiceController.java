package com.gtit.siteinstitucional.controller;

import com.gtit.siteinstitucional.dto.ServiceDto;
import com.gtit.siteinstitucional.service.ServiceService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
@RequiredArgsConstructor
public class ServiceController {
    
    private final ServiceService serviceService;
    
    @GetMapping
    public ResponseEntity<List<ServiceDto>> getAllServices() {
        return ResponseEntity.ok(serviceService.getAllServices());
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<ServiceDto>> getFeaturedServices() {
        return ResponseEntity.ok(serviceService.getFeaturedServices());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ServiceDto> getServiceById(@PathVariable Long id) {
        return ResponseEntity.ok(serviceService.getServiceById(id));
    }
    
    @GetMapping("/slug/{slug}")
    public ResponseEntity<ServiceDto> getServiceBySlug(@PathVariable String slug) {
        return ResponseEntity.ok(serviceService.getServiceBySlug(slug));
    }
}
