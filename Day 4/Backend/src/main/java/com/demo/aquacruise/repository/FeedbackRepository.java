package com.demo.aquacruise.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.aquacruise.model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
}
