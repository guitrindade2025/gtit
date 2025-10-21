package com.gtit.siteinstitucional.controller;

import com.gtit.siteinstitucional.dto.ContactFormDto;
import com.gtit.siteinstitucional.model.ContactMessage;
import com.gtit.siteinstitucional.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {
    
    private final ContactService contactService;
    
    @PostMapping
    public ResponseEntity<Map<String, Object>> submitContactForm(@Valid @RequestBody ContactFormDto contactFormDto) {
        ContactMessage savedMessage = contactService.saveContactMessage(contactFormDto);
        
        Map<String, Object> response = new HashMap<>();        response.put("success", true);
        response.put("message", "A sua mensagem foi enviada com êxito! Em breve entraremos em contacto.");
        response.put("id", savedMessage.getId());
        
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
