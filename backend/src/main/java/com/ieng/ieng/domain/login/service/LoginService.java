package com.ieng.ieng.domain.login.service;

import org.springframework.http.HttpHeaders;

public interface LoginService {
    HttpHeaders createTokenHeader(String accessToken , String refreshToken);
}
