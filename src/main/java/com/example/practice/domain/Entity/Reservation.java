package com.example.practice.domain.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity @Getter @Builder
@Table(name = "reservations")
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;
    @OneToOne
    private Room room;
    @OneToOne
    private Customer customer;
}
