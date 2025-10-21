package com.gtit.siteinstitucional.service;

import com.gtit.siteinstitucional.dto.ContactFormDto;
import com.gtit.siteinstitucional.model.ContactMessage;
import com.gtit.siteinstitucional.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class ContactService {
    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;
    
    /**
     * Saves a contact message and sends notification email
     *
     * @param contactFormDto the contact form data
     * @return the saved contact message
     */
    @Transactional
    public ContactMessage saveContactMessage(ContactFormDto contactFormDto) {
        log.info("Saving new contact message from: {}", contactFormDto.getEmail());
        ContactMessage contactMessage = ContactMessage.builder()
                .name(contactFormDto.getName())
                .email(contactFormDto.getEmail())
                .phone(contactFormDto.getPhone())
                .subject(contactFormDto.getSubject())
                .message(contactFormDto.getMessage())
                .createdAt(LocalDateTime.now())
                .build();
        ContactMessage savedMessage = contactMessageRepository.save(contactMessage);
        sendNotificationEmail(savedMessage);
        return savedMessage;
    }
    
    /**
     * Sends an email notification about a new contact message
     * This is a stub method that would be implemented with a real email service
     *
     * @param contactMessage the contact message
     */
    private void sendNotificationEmail(ContactMessage contactMessage) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setFrom("gtit2025@hotmail.com");
            helper.setTo("guilherme.tridnade@gtit.pt");
            helper.setSubject("Novo pedido de contacto: " + contactMessage.getSubject());
            StringBuilder sb = new StringBuilder();
            sb.append("<b>Nome:</b> ").append(contactMessage.getName()).append("<br>");
            sb.append("<b>Email:</b> ").append(contactMessage.getEmail()).append("<br>");
            sb.append("<b>Telefone:</b> ").append(contactMessage.getPhone() != null ? contactMessage.getPhone() : "-").append("<br>");
            sb.append("<b>Assunto:</b> ").append(contactMessage.getSubject()).append("<br>");
            sb.append("<b>Mensagem:</b> <br>").append(contactMessage.getMessage());
            helper.setText(sb.toString(), true);
            mailSender.send(message);
            log.info("Email enviado para guilherme.tridnade@gtit.pt com sucesso!");
        } catch (Exception e) {
            log.error("Erro ao enviar email de contacto", e);
        }
    }
}
