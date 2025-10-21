package com.gtit.siteinstitucional.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "services")
public class Service {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 100)
    private String title;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;
    
    @Column(nullable = false, length = 100)
    private String shortDescription;
    
    @Column(length = 255)
    private String imageUrl;
    
    @Column(nullable = false, length = 100)
    private String slug;
    
    @Column(nullable = false)
    private LocalDateTime createdAt;
    
    @Column
    private LocalDateTime updatedAt;
    
    @Column
    private Boolean featured;
    
    @Column
    private Integer displayOrder;
    
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        if (this.featured == null) {
            this.featured = false;
        }
        if (this.displayOrder == null) {
            this.displayOrder = 0;
        }
    }
    
    @PreUpdate
    public void preUpdate() {
        this.updatedAt = LocalDateTime.now();
    }
}
