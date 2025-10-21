package com.gtit.siteinstitucional.controller;

import com.gtit.siteinstitucional.dto.TeamMemberDto;
import com.gtit.siteinstitucional.service.TeamMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/team")
@RequiredArgsConstructor
public class TeamMemberController {
    
    private final TeamMemberService teamMemberService;
    
    @GetMapping
    public ResponseEntity<List<TeamMemberDto>> getAllTeamMembers() {
        return ResponseEntity.ok(teamMemberService.getAllActiveTeamMembers());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<TeamMemberDto> getTeamMemberById(@PathVariable Long id) {
        return ResponseEntity.ok(teamMemberService.getTeamMemberById(id));
    }
}
