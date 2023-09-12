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
    private Long roomId; //방 고유번호
    private String roomNumber; //방호수번호 (201, 203)
    private String roomName; //방이름 (스위트, 골드 디럭스)
    private Integer roomMaxPerson; //방최대인원
    private Boolean isRoomValid; //예약 가능 여부
    private String roomImage; // 방 사진
    private LocalDateTime checkIn; //유저의 실제 체크 인 시간
    private LocalDateTime checkOut; //유저의 실제 체크 아웃 시간
    @ManyToOne
    private Accomdation accomdation;
}
