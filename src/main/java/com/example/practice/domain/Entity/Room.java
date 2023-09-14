package com.example.practice.domain.Entity;


import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity @Getter @Builder
@Table(name = "rooms")
@AllArgsConstructor
@NoArgsConstructor
public class Room {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long roomId; // 방 고유번호
    private String roomNumber; // 방호수번호 (201, 203)
    private String roomName; // 방이름 (스위트, 골드 디럭스)
    private Integer roomMaxPerson; // 방최대인원
    private String roomImage; // 방 사진
    private String checkIn; //체크 인 시간
    private String checkOut; //체크 아웃 시간
    @ManyToOne
    private Accomdation accomdation;
}
