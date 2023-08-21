import Center from "../components/Center";
import "./Detail.css";
import TopBanner from "../components/TopBanner";
import myProfile from "../img/122416681.jpg";

const Detail = () => {
    return (
        <Center>
            <TopBanner></TopBanner>
            <div className="place-center">
                <div className="profile_container">
                    <div className="card_img2" style={{paddingRight : '0', margin : '0 auto'}}>
                        <img style={{width : '100%', height : '100%'}} src={myProfile}/>
                    </div>
                    <div className="story_user">
                        <div className="story_title">낙히</div>
                        <div className="categoryItem" style={{background : "#f9f0ff", color : "#d3adf7"}}>백엔드</div>
                    </div>

                    <div className="flex-row">
                        <div className="field">이전 직업</div>
                        <div className="contents">X</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">총 취준기간</div>
                        <div className="contents">1년</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">취업당시나이</div>
                        <div className="contents">27세</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">취업처</div>
                        <div className="contents">MES를 제외한 SpringFramework를 주로 사용하는 기업</div>
                    </div>

                </div>

                <div className="inform-box">다른 취준생 분들께 도움을 드리기 위해 공유해 주셨습니다.정보와 용기를 얻는 용도로만 봐주세요🙂💕</div>
            </div>
        </Center>
    )
}

export default Detail;