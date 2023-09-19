const End = () => {
    return<>
    <div style={{width:"100%", height:"100%"}}>
        <div>
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjEwMjNfNzMg%2FMDAxNjY2NDk1ODk2NTkw.Vd_qHonKH0gRGpzYWSRr0J4ydc9ej8_nnC8YrDxn6Xkg.-3SCRzDZ1JEsO0DFHEXBxMugxJzuYEywwiJ4-xypO-8g.JPEG.sss4988111%2FKakaoTalk_20221023_122730077_07.jpg&type=sc960_832" alt=""/>
        </div>
        <div style={{padding:"30px"}}>
            <div style={{margin:"50px 0 50px 0"}}>
                <h3>서울 숙소 예약 및 관광 명소 추천</h3>
                <span>서울에 온 외국이 관광객의 숙박 업소를 미리 예약을 하고 또한 서울의 다양한 목적에 따른</span><br/>
                <span>관광명소를 추천하고 예약을 하는 서비스를 만들고자 하였다.</span>
            </div>
            <div style={{margin:"50px 0 50px 0"}}>
                <h3>조 : </h3>
                <ul>
                    <li>조장 : 김정수</li>
                    <li>조원 : 김태홍</li>
                    <li>조원 : 이태웅</li>
                </ul>
            </div>
            <div style={{margin:"50px 0 50px 0"}}>
                <h3>서비스 : </h3>
                <span>1. FindService</span><br/>
                <span>예약을 하거나 리스트를 확인하기 위해 필요한 서비스</span><br/><br/>
                <span>2. ReservationService</span><br/>
                <span>체크한 숙박 업소를 예약하는 서비스</span><br/><br/>
                <span>3. TourDestinationService</span><br/>
                <span>관광지를 추천받고 예약하는 서비스</span><br/><br/>
            </div>
            <div style={{margin:"20px 0 20px 0"}}>
                <span>김정수 : </span>
                <div style={{width:"780px"}}>이번 프로젝트를 통해 서버 부분도 유레카나 Gateway를 사용해서 msa를 사용해 보는 것도 좋은 경험이었고,
                    배운 것도 많지만 특히 프런트 부분에서 복습이 정말 많이 된 거 같다.
                    프로젝트를 구성할 때 서버에서 필요한 요소들과 클라이언트에서 필요한 요소들이 많이 다르다는 걸 알게 되었고,
                    프런트부터 구성을 먼저 해야 나중에 서버를 조금 쉽게 구성할 수 있는 것을 배운 거 같다.</div>
            </div>
            <div style={{margin:"20px 0 20px 0"}}>
                <span>김태홍 : </span>
                <div style={{width:"780px"}}>이번 프로젝트 역시 3명이서 진행하였고 MSA프로젝트 공부도 이해하고 구현하는데 문제는 없어서
                    큰 어려움이 없을것이라 예상하고 임했지만,  계속해서 발생하는 CORS문제와 작업하던 Entity, Request, Response가 달라져 여러 400~500오류와 프론트 연동 작업이 연달아 발생했고,
                    더군다나 다소 미흡한 프론트엔드 작업도 원하는만큼 작업결과를 못내어 아쉬웠습니다. 그렇지만 이번 MSA프로젝트를 만들어 서비스를 분리함으로써,
                    백엔드 서비스를 구현할때 서로 각자 서비스를 담당하여 충돌날 일이 현저히 줄었고, 프론트도 결제나,예약서비스가 꺼져있어도 다른 서비스를 이용할수 있는 MSA설계를 경험해봐서 좋았습니다.</div>
            </div>
            <div style={{margin:"20px 0 20px 0"}}>
                <span>이태웅 : </span>
                <div style={{width:"780px"}}>처음으로 서비스를 나누어 msa를 통하여 프로젝트를 진행 하였는데 기초적인 msa의 느낌은 이해하였지만,
                    처음으로 서비스를 나누어 msa를 통하여 프로젝트를 진행하였는데 기초적인 msa의 느낌은 이해하였지만,
                    프로젝트에서 거의 msa를 쓰는 목적에는 미치지 못한 것 같다. 프로젝트를 하면서 cors 에러가 자주 발생하였는데 코드를 잘 보면서 가져와야 할 것 같다고 생각했다.
                    3명의 조원들과 프로젝트를 하였고, 수업을 많이 못 들었지만 그래도 조원들에게 고맙고 100%로 하지 못해서 조원들에게 미안하기도 하다.
                    조금 더 목표를 크게 잡고 도전적으로 프로젝트를 했어야 하는데 하지 못해서 아쉽다.</div>
            </div>
        </div>
    </div>
    </>
}
export default End;