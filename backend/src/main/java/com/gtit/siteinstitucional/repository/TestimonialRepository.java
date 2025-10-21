package com.gtit.siteinstitucional.repository;

import com.gtit.siteinstitucional.model.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {
    
    List<Testimonial> findByActiveTrue();
    
    List<Testimonial> findByActiveTrueOrderByDisplayOrderAsc();
}
