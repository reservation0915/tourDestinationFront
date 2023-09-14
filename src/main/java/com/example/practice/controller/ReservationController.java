package com.example.practice.controller;

import com.example.practice.domain.request.ReservationCheckRequest;
import com.example.practice.domain.request.ReservationSaveRequest;
import com.example.practice.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/reservation")
@CrossOrigin("*")
public class ReservationController {
    private final ReservationService reservationService;

    @PostMapping// 해당 방이 예약되어있는지 확인하는것 그럼 룸의 id와 날짜를 받아와서 있으면 불가 없으면 가능
    Optional<Boolean> check(@RequestBody ReservationCheckRequest request){
        return reservationService.check(request);
    }

//    유저가 방을 고르면 유저의 id와 방의 id 그리고 사용자 인원수, 체크인-아웃 날짜 를 받아서 가져온다.
//    그리고 예약 할때 바로 결제하는 시스템
    @PostMapping("/save") // 토큰에 들어있는 유저id와 선택한 room의 id를 받아서 저장
    void save(@RequestBody ReservationSaveRequest request){
        reservationService.save(request);
    }




}
