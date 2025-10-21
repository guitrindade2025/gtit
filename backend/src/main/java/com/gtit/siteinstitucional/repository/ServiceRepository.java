package com.gtit.siteinstitucional.repository;

import com.gtit.siteinstitucional.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    
    List<Service> findByFeaturedTrue();
    
    List<Service> findByOrderByDisplayOrderAsc();
    
    Optional<Service> findBySlug(String slug);
}
