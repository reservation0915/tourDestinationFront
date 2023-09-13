package com.example.practice.service;

import com.example.practice.domain.Entity.Reservation;
import com.example.practice.domain.request.ReservationSaveRequest;
import com.example.practice.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;

    public Optional<Boolean> check(Long roomId){
        Optional<Boolean> byRoomId = reservationRepository.findByRoomId(roomId);
        try {
            if (byRoomId.isEmpty()){
                System.out.println("가능");
            }else {
                System.out.println("불가능");
            }
        }catch (Exception e){
            e.getMessage();
        }
        return byRoomId;
//        daddda
    }
    public void save(ReservationSaveRequest request){
        reservationRepository.save(request.toEntity());
    }

}
