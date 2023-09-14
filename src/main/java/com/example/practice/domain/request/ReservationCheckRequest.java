package com.example.practice.domain.request;

import java.util.Date;

public record ReservationCheckRequest(Long roomId, Date checkIn, Date checkOut) {
}
