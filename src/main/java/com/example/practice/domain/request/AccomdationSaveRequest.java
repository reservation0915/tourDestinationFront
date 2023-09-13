package com.example.practice.domain.request;

import com.example.practice.domain.Entity.Accomdation;

public record AccomdationSaveRequest(
        String accomdationName,
        String accomdationType,
        String accomdationLocation,
        Float accomdationGrade,
        String accomdationContent,
        Integer accomdationCount

) {
    public Accomdation toEntity(){
        return Accomdation
                .builder()
                .accomdationName(accomdationName)
                .accomdationType(accomdationType)
                .accomdationLocation(accomdationLocation)
                .accomdationGrade(accomdationGrade)
                .accomdationContent(accomdationContent)
                .accomdationCount(accomdationCount)
                .build();
    }
}
