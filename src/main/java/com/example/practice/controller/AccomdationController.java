package com.example.practice.controller;

import com.example.practice.domain.request.AccomdationSaveRequest;
import com.example.practice.service.AccomdationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/accomdation")
public class AccomdationController {
    private final AccomdationService accomdationService;
    @PostMapping // 토큰에 들어있는 유저id와 선택한 room의 id를 받아서 저장
    void save(@RequestBody AccomdationSaveRequest request){
        accomdationService.save(request);
    }
}
