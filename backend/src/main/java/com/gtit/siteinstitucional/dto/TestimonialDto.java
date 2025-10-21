package com.gtit.siteinstitucional.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TestimonialDto {
    
    private Long id;
    private String name;
    private String position;
    private String content;
    private String avatarUrl;
}
