package com.example.practice.domain.request;

import com.example.practice.domain.Entity.Reservation;

public record ReservationSaveRequest(Long roomId, Long customerId) {
    public Reservation toEntity(){
        return Reservation
                .builder()
                .roomId(roomId)
                .customerId(customerId)
                .build();
    }
}
