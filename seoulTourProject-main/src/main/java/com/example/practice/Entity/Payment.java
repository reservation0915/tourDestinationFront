package com.example.practice.Entity;


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
    private Long id;
    @OneToOne
    private Room room; // 방
    @OneToOne
    private Customer customer; //예약자
    private Integer roomPrice; //가격

}
