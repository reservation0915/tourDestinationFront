package com.example.practice.domain.Entity;


import jakarta.persistence.*;
import lombok.*;

@Entity @Getter @Builder
@Table(name = "customers")
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerId;
    private String email;
    private String phoneNumber;

}
