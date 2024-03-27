package com.demo.aquacruise.service;

import java.util.List;

import com.demo.aquacruise.dto.request.LoginRequest;
import com.demo.aquacruise.dto.response.LoginResponse;

public interface LoginService {

    List<LoginResponse> getAllUsers();

    LoginResponse getUser(Long uid);

    LoginResponse updateUser(LoginRequest request, Long uid);

    boolean deleteUser(Long uid);

}
