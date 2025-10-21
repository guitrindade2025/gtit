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
@Table(name = "team_members")
public class TeamMember {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, length = 100)
    private String name;
    
    @Column(nullable = false, length = 100)
    private String position;
    
    @Column(nullable = false, columnDefinition = "TEXT")
    private String bio;
    
    @Column(length = 255)
    private String imageUrl;
    
    @Column(length = 255)
    private String linkedinUrl;
    
    @Column(length = 255)
    private String twitterUrl;
    
    @Column(length = 255)
    private String emailAddress;
    
    @Column(nullable = false)
    private LocalDateTime createdAt;
    
    @Column
    private LocalDateTime updatedAt;
    
    @Column
    private Boolean active;
    
    @Column
    private Integer displayOrder;
    
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        if (this.active == null) {
            this.active = true;
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
