package com.gtit.siteinstitucional.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactFormDto {
      @NotBlank(message = "O nome é de preenchimento obrigatório")
    @Size(max = 100, message = "O nome não pode ter mais de 100 caracteres")
    private String name;
    
    @NotBlank(message = "O email é de preenchimento obrigatório")
    @Email(message = "O endereço de email é inválido")
    @Size(max = 100, message = "O email não pode ter mais de 100 caracteres")
    private String email;
    
    @Size(max = 20, message = "O telefone não pode ter mais de 20 caracteres")
    private String phone;
    
    @NotBlank(message = "O assunto é de preenchimento obrigatório")
    @Size(max = 100, message = "O assunto não pode ter mais de 100 caracteres")
    private String subject;
    
    @NotBlank(message = "A mensagem é de preenchimento obrigatório")
    @Size(min = 10, message = "A mensagem tem de ter pelo menos 10 caracteres")
    private String message;
}
