package com.gtit.siteinstitucional.controller;

import com.gtit.siteinstitucional.dto.TestimonialDto;
import com.gtit.siteinstitucional.service.TestimonialService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/testimonials")
@RequiredArgsConstructor
public class TestimonialController {
    
    private final TestimonialService testimonialService;
    
    @GetMapping
    public ResponseEntity<List<TestimonialDto>> getAllTestimonials() {
        return ResponseEntity.ok(testimonialService.getAllActiveTestimonials());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<TestimonialDto> getTestimonialById(@PathVariable Long id) {
        return ResponseEntity.ok(testimonialService.getTestimonialById(id));
    }
}
