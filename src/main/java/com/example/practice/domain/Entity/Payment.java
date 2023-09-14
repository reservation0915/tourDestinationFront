package com.example.practice.domain.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "payments")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long paymentId;
    private Long roomId; // 방
    private Long customerId; //예약자
    private Integer roomPrice; //가격

}
