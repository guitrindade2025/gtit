package com.gtit.siteinstitucional.service;

import com.gtit.siteinstitucional.dto.ServiceDto;
import com.gtit.siteinstitucional.model.Service;
import com.gtit.siteinstitucional.repository.ServiceRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceService {
    
    private final ServiceRepository serviceRepository;
    
    public List<ServiceDto> getAllServices() {
        return serviceRepository.findByOrderByDisplayOrderAsc()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public List<ServiceDto> getFeaturedServices() {
        return serviceRepository.findByFeaturedTrue()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public ServiceDto getServiceById(Long id) {
        return serviceRepository.findById(id)
                .map(this::mapToDto)
                .orElseThrow(() -> new EntityNotFoundException("Service not found with id: " + id));
    }
    
    public ServiceDto getServiceBySlug(String slug) {
        return serviceRepository.findBySlug(slug)
                .map(this::mapToDto)
                .orElseThrow(() -> new EntityNotFoundException("Service not found with slug: " + slug));
    }
    
    private ServiceDto mapToDto(Service service) {
        return ServiceDto.builder()
                .id(service.getId())
                .title(service.getTitle())
                .description(service.getDescription())
                .shortDescription(service.getShortDescription())
                .imageUrl(service.getImageUrl())
                .slug(service.getSlug())
                .featured(service.getFeatured())
                .displayOrder(service.getDisplayOrder())
                .build();
    }
}
