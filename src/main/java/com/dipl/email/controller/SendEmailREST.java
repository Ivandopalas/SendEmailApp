package com.dipl.email.controller;

import com.dipl.email.entity.EmailDataEntity;
import com.dipl.email.service.SendEmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class SendEmailREST {

    @Autowired
    private SendEmailService emailService;
    @RequestMapping(value = "/sendemail", method = RequestMethod.POST)

            public EmailDataEntity sendEmail(@RequestBody EmailDataEntity email) {
                try{
                    emailService.readyToSendEmail(email.get, "test@test.com", subject, body);
        }catch (Exception ex){

        }
        return null;
    }
}