package com.gtit.siteinstitucional.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TeamMemberDto {
    
    private Long id;
    private String name;
    private String position;
    private String bio;
    private String imageUrl;
    private String linkedinUrl;
    private String twitterUrl;
    private String emailAddress;
}
