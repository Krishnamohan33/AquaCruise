package com.demo.aquacruise.service;

import com.demo.aquacruise.dto.request.AuthenticationRequest;
import com.demo.aquacruise.dto.request.RegisterRequest;
import com.demo.aquacruise.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
