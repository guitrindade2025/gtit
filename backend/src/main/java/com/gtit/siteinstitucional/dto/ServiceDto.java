package com.gtit.siteinstitucional.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ServiceDto {
    
    private Long id;
    private String title;
    private String description;
    private String shortDescription;
    private String imageUrl;
    private String slug;
    private Boolean featured;
    private Integer displayOrder;
}
