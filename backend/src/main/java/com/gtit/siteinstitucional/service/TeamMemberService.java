package com.gtit.siteinstitucional.service;

import com.gtit.siteinstitucional.dto.TeamMemberDto;
import com.gtit.siteinstitucional.model.TeamMember;
import com.gtit.siteinstitucional.repository.TeamMemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TeamMemberService {
    
    private final TeamMemberRepository teamMemberRepository;
    
    public List<TeamMemberDto> getAllActiveTeamMembers() {
        return teamMemberRepository.findByActiveTrueOrderByDisplayOrderAsc()
                .stream()
                .map(this::mapToDto)
                .collect(Collectors.toList());
    }
    
    public TeamMemberDto getTeamMemberById(Long id) {
        return teamMemberRepository.findById(id)
                .map(this::mapToDto)
                .orElseThrow(() -> new EntityNotFoundException("Team member not found with id: " + id));
    }
    
    private TeamMemberDto mapToDto(TeamMember teamMember) {
        return TeamMemberDto.builder()
                .id(teamMember.getId())
                .name(teamMember.getName())
                .position(teamMember.getPosition())
                .bio(teamMember.getBio())
                .imageUrl(teamMember.getImageUrl())
                .linkedinUrl(teamMember.getLinkedinUrl())
                .twitterUrl(teamMember.getTwitterUrl())
                .emailAddress(teamMember.getEmailAddress())
                .build();
    }
}
