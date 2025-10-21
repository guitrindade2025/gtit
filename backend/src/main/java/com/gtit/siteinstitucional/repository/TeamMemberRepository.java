package com.gtit.siteinstitucional.repository;

import com.gtit.siteinstitucional.model.TeamMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamMemberRepository extends JpaRepository<TeamMember, Long> {
    
    List<TeamMember> findByActiveTrue();
    
    List<TeamMember> findByActiveTrueOrderByDisplayOrderAsc();
}
