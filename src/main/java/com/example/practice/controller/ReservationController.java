package com.example.practice.controller;

import com.example.practice.domain.request.ReservationSaveRequest;
import com.example.practice.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/reservation")
public class ReservationController {
    private final ReservationService reservationService;

    @GetMapping// 해당 방이 예약되어있는지 확인하는것
    Optional<Boolean> check(@RequestParam Long roomId){
        return reservationService.check(roomId);
    }
    @PostMapping // 토큰에 들어있는 유저id와 선택한 room의 id를 받아서 저장
    void save(@RequestBody ReservationSaveRequest request){
        reservationService.save(request);
    }


}
