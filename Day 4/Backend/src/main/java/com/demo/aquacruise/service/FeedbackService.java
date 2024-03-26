package com.demo.aquacruise.service;

import java.util.List;

import com.demo.aquacruise.model.Feedback;

public interface FeedbackService {
    Feedback createFeedback(Feedback feedback);
    Feedback getFeedbackById(Long id);
    List<Feedback> getAllFeedback();
    Feedback updateFeedback(Long id, Feedback updatedFeedback);
    void deleteFeedback(Long id);
}
