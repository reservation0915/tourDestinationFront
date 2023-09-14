package com.example.practice.repository;

import com.example.practice.domain.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.Date;
import java.util.Optional;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query("select r from Reservation r where (r.roomId = :roomId and r.checkIn = :checkIn) or (r.roomId = :roomId and r.checkOut = :checkOut)")
    Optional<Boolean> findByRoomIdAndCheckInAndCheckOut(Long roomId, Date checkIn, Date checkOut);

}
