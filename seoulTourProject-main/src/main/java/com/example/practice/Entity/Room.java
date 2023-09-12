package com.example.practice.Entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "rooms")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String roomNumber; //방번호
    private String roomName; //방이름
    private Integer roomMaxPerson; //방인원
    @OneToMany(mappedBy = "room")
    private List<ReservationDate> reservationDateList;
    @ManyToOne
    private Accomdation accomdation;
}
