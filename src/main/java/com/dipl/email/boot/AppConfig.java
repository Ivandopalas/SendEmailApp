package com.dipl.email.boot;

import com.dipl.email.service.SendEmailService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
@ComponentScan("com.dipl.email")
public class AppConfig {

    @Bean
    public SendEmailService sendEmailService() {
        return new SendEmailService(mailSender());
    }

    @Bean
    public MailSender mailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        Properties properties = new Properties();
        properties.put("mail.transport.protocol","smtp");
        properties.put("mail.smtp.auth", true);
        properties.put("mail.smtp.starttls.enable", true);
        properties.put("mail.debug",true);
        mailSender.setJavaMailProperties(properties);
        mailSender.setHost("localhost");
        mailSender.setPort(25);
        mailSender.setUsername("test");
        mailSender.setPassword("test");
        return mailSender;
    }
}
