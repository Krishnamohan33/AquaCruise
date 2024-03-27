package com.demo.aquacruise.service;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.demo.aquacruise.dto.request.LoginRequest;
import com.demo.aquacruise.dto.response.LoginResponse;
import com.demo.aquacruise.model.Login;
import com.demo.aquacruise.model.enumerate.Role;
import com.demo.aquacruise.repository.LoginRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class  LoginServiceImpl implements LoginService {

    private final LoginRepository userRepository;
    
    private final PasswordEncoder passwordEncoder;
  
    public List<LoginResponse> getAllUsers() {
        List<Login> userList = userRepository.findAll();
        return userList.stream()
                .filter(user -> !user.getRole().equals(Role.ADMIN))
                .map(this::mapUserToUserResponse)
                .collect(Collectors.toList());
    }

    public LoginResponse getUser(Long uid) {
        Login user = userRepository.findByUid(uid);
        return mapUserToUserResponse(user);
    }

    
    public LoginResponse updateUser(LoginRequest request, Long uid) {
        Login user = userRepository.findById(uid).get();
        Login newUser = new Login();
        if (user != null) {
            newUser = Login.builder()
            		.uid(uid)
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .role(user.getRole())
                    .isEnabled(user.isEnabled())
                    .build();
            userRepository.save(newUser);
        }
        return mapUserToUserResponse(newUser);
    }

    

    private LoginResponse mapUserToUserResponse(Login user) {
        return LoginResponse.builder()
                .uid(user.getUid())
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole())
                .isEnabled(user.getIsEnabled())
                .build();
    }

	@Override
	public boolean deleteUser(Long uid) {
		userRepository.deleteByUid(uid);
		// TODO Auto-generated method stub
		return true;
	}

}
