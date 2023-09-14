package com.example.practice.domain.request;

import com.example.practice.domain.Entity.Reservation;

import java.util.Date;

public record ReservationSaveRequest(Long roomId, Long customerId, Integer peopleNum, Date checkIn, Date checkOut) {
    public Reservation toEntity(){
        return Reservation
                .builder()
                .roomId(roomId)
                .customerId(customerId)
                .peopleNum(peopleNum)
                .checkIn(checkIn)
                .checkOut(checkOut)
                .build();
    }
}
