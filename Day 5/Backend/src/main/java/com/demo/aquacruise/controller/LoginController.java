package com.demo.aquacruise.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.aquacruise.constant.Api;
import com.demo.aquacruise.dto.request.LoginRequest;
import com.demo.aquacruise.dto.response.LoginResponse;
import com.demo.aquacruise.service.LoginService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.USER)
@RequiredArgsConstructor
@Tag(name = "User")
@CrossOrigin
public class LoginController {

 private final LoginService loginService;
 @GetMapping("/all")
public ResponseEntity<List<LoginResponse>> getAllUsers() {
 List<LoginResponse> userList = loginService.getAllUsers();
      return !userList.isEmpty() ? ResponseEntity.ok().body(userList) : ResponseEntity.noContent().build();
}
//
    @GetMapping("/{uid}")
    public ResponseEntity<LoginResponse> getUser(@PathVariable Long uid) {
        LoginResponse userResponse = loginService.getUser(uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{uid}")
    public ResponseEntity<LoginResponse> updateUser(@RequestBody LoginRequest request, @PathVariable Long uid) {
        LoginResponse userResponse = loginService.updateUser(request, uid);
        return userResponse != null ? ResponseEntity.ok().body(userResponse) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/delete/{uid}")
    public ResponseEntity<String> deleteUser(@PathVariable Long uid) {
        boolean isDeleted = loginService.deleteUser(uid);
        return isDeleted ? ResponseEntity.ok().body("User deleted successfully!")
                : ResponseEntity.notFound().build();
    }
}
