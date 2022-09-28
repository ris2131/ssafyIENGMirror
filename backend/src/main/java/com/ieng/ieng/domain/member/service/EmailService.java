package com.ieng.ieng.domain.member.service;



public interface EmailService {

    String sendSimpleMessage(String to) throws Exception;
    Boolean checkEmail(String email);
}
