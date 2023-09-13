package com.example.practice.service;

import com.example.practice.domain.request.AccomdationSaveRequest;
import com.example.practice.repository.AccomdationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AccomdationService {
    private final AccomdationRepository accomdationRepository;

    public void save(AccomdationSaveRequest request){
        accomdationRepository.save(request.toEntity());
    }

}
