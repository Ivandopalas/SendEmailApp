package com.dipl.email.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

public class SendEmailService {
    @Autowired
    private MailSender mailSender;

    public SendEmailService(MailSender mailSender) {
        this.mailSender = mailSender;
    }
    public void readyToSendEmail(String toAddress, String fromAddress, String subject, String msgBody) {

        SimpleMailMessage crunchifyMsg = new SimpleMailMessage();
        crunchifyMsg.setFrom(fromAddress);
        crunchifyMsg.setTo(toAddress);
        crunchifyMsg.setSubject(subject);
        crunchifyMsg.setText(msgBody);
        mailSender.send(crunchifyMsg);
    }
}
