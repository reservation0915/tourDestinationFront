import './Review.css';
import myProfile from "../img/122416681.jpg";
import {useNavigate} from "react-router";
import Center from "../components/Center";
import TopBanner from "../components/TopBanner";
import {useEffect, useState} from "react";
import axios from "axios";
import insertReview from "./ReviewInsert";
import {menu} from "../common/menu";

function Review() {
    const nav = useNavigate();
    const [review, setReview] = useState([]);
    const [userId, setUserId] = useState(null);
    const [categoryItem, setcategoryItem] = useState(null);
    const [error, setError] = useState('');

    // 페이지가 처음시작할때 1번 실행
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/review').then((res) => {
            console.log(res.data.content)
            setReview(res.data.content)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const goToDetails = (user) => {
        nav(`/reviewDetail?userId=${user.id}`);
    }

    const ReviewInsert = () => {
        nav(`/reviewInsert?`)
    }

    const findCategory = (item) => {

        const replaceItem = item.replaceAll('/', ',');


        if (replaceItem == '전체보기') {
            axios.get('http://localhost:8080/api/v1/review').then((res) => {
                console.log(res.data.content)
                setReview(res.data.content)
            }).catch((err) => {
                console.log(err)
            })

            return;
        }

        axios.get(`http://localhost:8080/api/v1/review/${replaceItem}`,{})
        .then((response) => {

            if (response.data.length == 0) {
                setReview([]);
                setError('결과없음')
            } else {
                setReview(response.data);
                setError('')
            }

        })
        .catch((error) => {
            setReview([]);
            setError('결과없음')

        })
    }


    return (
        <div className="App">
            <Center>
                <TopBanner> </TopBanner>

                <div className="infoMent">
                    <div className="infoTopMent">
                        <div>💼</div>
                        <div>현실취업후기</div>
                    </div>
                    <div style={{textAlign : 'left'}} className="title">N살 비전공자인데 취업 몇 달 걸릴까요?</div>
                    <div style={{textAlign : 'left'}} className="title_description">이제 걱정은 노노! 다른 분들 참고해요. 취업후기 신청도 환영💖</div>

                    <div className="category">
                        {/* ## 컴포넌트 화 ## */}
                        {/*자바스크립트에서 자바문법을 쓸 때는 {중괄호}해줘야 함*/}
                        {menu.map((item, idx) => (
                            // 글씨만 가지는 애 = span
                            // 글씨와 영역을 동시에 가지는 애 = p
                            <div key={idx} style={{background : item.background, color : item.color, cursor : 'pointer'}} onClick={() => {findCategory(item.name)}} className="categoryItem"><span>{item.name}</span></div>
                        ))}
                    </div>
                </div>


                <div className="card_wrap">
                    {review.map((item,idx) => (
                        <div onClick={() => {goToDetails(item)}} key={idx} className="card">
                            <div className="card_detail_wrap">
                                <div className="card_img">
                                    <img style={{width : '54px', height : '54px'}} src={myProfile}/>
                                    <p>{item.id}</p>
                                </div>
                                <div className="card_detail_new">
                                    <div className="story">
                                        <div className="story_title">{item.story_title}</div>
                                        <div style={{background : item.background, color : item.color}} className="categoryItem">{item.categoryItem}</div>
                                    </div>

                                    <div className="story_profile">전공:<span>{item.major}</span>(<span>{item.minor}</span>) / 취업나이: {item.ageAtEmployment}세 / 취준기간: {item.duration}년</div>
                                    <hr/>
                                    <div className="story_comment"><span>{item.message}</span></div>
                                </div>
                            </div>

                        </div>
                    ))}
                    {error}
                </div>

                <div className="button_container">
                    <button onClick={ReviewInsert} className="insertButton">취업후기 쓰기 > </button>
                </div>

            </Center>


        </div>
    );
}

export default Review;