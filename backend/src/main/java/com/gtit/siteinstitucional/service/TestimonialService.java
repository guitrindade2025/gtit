package com.gtit.siteinstitucional.service;

import com.gtit.siteinstitucional.dto.TestimonialDto;
import com.gtit.siteinstitucional.model.Testimonial;
import com.gtit.siteinstitucional.repository.TestimonialRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TestimonialService {
    
    private final TestimonialRepository testimonialRepository;
    
    public List<TestimonialDto> getAllActiveTestimonials() {
        return testimonialRepository.findByActiveTrueOrderByDisplayOrderAsc()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public TestimonialDto getTestimonialById(Long id) {
        return testimonialRepository.findById(id)
                .map(this::mapToDto)
                .orElseThrow(() -> new EntityNotFoundException("Testimonial not found with id: " + id));
    }
    
    private TestimonialDto mapToDto(Testimonial testimonial) {
        return TestimonialDto.builder()
                .id(testimonial.getId())
                .name(testimonial.getName())
                .position(testimonial.getPosition())
                .content(testimonial.getContent())
                .avatarUrl(testimonial.getAvatarUrl())
                .build();
    }
}
