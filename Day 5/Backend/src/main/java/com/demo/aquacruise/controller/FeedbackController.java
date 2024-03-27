package com.demo.aquacruise.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.aquacruise.constant.Api;
import com.demo.aquacruise.model.Feedback;
import com.demo.aquacruise.service.FeedbackService;

@RestController
@RequestMapping(Api.AUTH)
public class FeedbackController {

    private final FeedbackService feedbackService;

    @Autowired
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @PostMapping("/feedback")
    public Feedback createFeedback(@RequestBody Feedback feedback) {
        return feedbackService.createFeedback(feedback);
    }

    @GetMapping("/feedback/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable Long id) {
        try {
            Feedback feedback = feedbackService.getFeedbackById(id);
            return ResponseEntity.ok(feedback);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/allfeedback")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }

    @PutMapping("/feedback/{id}")
    public Feedback updateFeedback(@PathVariable Long id, @RequestBody Feedback updatedFeedback) {
        return feedbackService.updateFeedback(id, updatedFeedback);
    }

    @DeleteMapping("/feedback/{id}")
    public void deleteFeedback(@PathVariable Long id) {
        feedbackService.deleteFeedback(id);
    }
}
