package com.example.practice.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "reservationdates")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReservationDate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private Room room;
    private Boolean isRoomValid; //가능여부
    private Date checkIn; //체크인 시간
    private Date checkOut; //체크아웃 시간
}
