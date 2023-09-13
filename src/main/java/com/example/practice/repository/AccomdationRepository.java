package com.example.practice.repository;

import com.example.practice.domain.Entity.Accomdation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccomdationRepository extends JpaRepository<Accomdation, Long> {
}
