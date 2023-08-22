import Center from "../components/Center";
import "./ReviewInsert.css";
import TopBanner from "../components/TopBanner";
import myProfile from "../img/122416681.jpg";
import {menu} from "../common/menu";

const Detail = () => {

    const handleCategoryChange = () => {

    }

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

                        <div className="category">
                            <select style={{padding : '6px', borderRadius : '8px'}} className="categoryItemSelect" onChange={handleCategoryChange}>
                                {menu.map((item, idx) => (
                                    <option
                                        key={idx}
                                        style={{ color: item.color }}
                                        value={item.name}

                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex-row">
                        <div className="field">이전 직업</div>
                        <div className="contents">
                            <input className="review_input"/>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="field">총 취준기간</div>
                        <div className="contents"><input className="review_input"/></div>
                    </div>
                    <div className="flex-row">
                        <div className="field">취업당시나이</div>
                        <div className="contents"><input className="review_input" placeholder="숫자만 입력해주세요."/></div>
                    </div>
                    <div className="flex-row">
                        <div className="field">취업처</div>
                        <div className="contents"><input className="review_input"/></div>
                    </div>
                </div>

                <div style={{ margin: '48px' }} className="inform-box">다른 취준생 분들께 도움을 드리기 위해 공유해 주셨습니다.정보와 용기를 얻는 용도로만 봐주세요🙂💕</div>


                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">💯 취업만족도</div>
                            <div className="description">
                                <p><textarea rows="16" className="input_contents"/></p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">📚 업무내용</div>
                            <div className="description">
                                <p><textarea rows="16" className="input_contents"/></p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">🤝 하고싶은 말</div>
                            <div className="description">
                                <p><textarea rows="16" className="input_contents"/></p>
                            </div>
                        </div>
                    </div>

                <div>
                    <button className="save_button">저장하기</button>
                </div>


            </div>
        </Center>
    )
}

export default Detail;