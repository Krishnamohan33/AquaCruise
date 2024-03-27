package com.demo.aquacruise.dto.request;

import com.demo.aquacruise.model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    private String name;
    private String email;
    private String password;
    private Boolean isEnabled;
    private Role role;
}
