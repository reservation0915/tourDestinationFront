import {useEffect, useState} from "react";
import {Api} from "../network/Api";
import "../css/Mentors.css"
import Center from "./Center";
import myImg from "../img/122416681.jpg";
import {useNavigate} from "react-router";


const Mentors = () => {
    const nav = useNavigate();
    const [mentors, setMentors] = useState([]);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [mentoringField, setMentoringField] = useState([]);

    const menu = [
        {
            name: "전체보기",
            background: "#F6FFED",
            color: "389e0d"
        },
        {
            name: "인사/총무/노무",
            background: "#FFF0F6",
            color: "#C41D7F"
        },
        {
            name: "마케팅/MD",
            background: "#F9F0FF",
            color: "#531DAB"
        },
        {
            name: "홍보/CSR",
            background: "#FFF1F0",
            color: "#CF1322"
        },
        {
            name: "해외영업",
            background: "#e6f7ff",
            color: "#096dd9"
        },
        {
            name: "유통/무역/구매",
            background: "#e6fffb",
            color: "#08979c"
        },
        {
            name: "전략/기획",
            background: "#fcffe6",
            color: "#7cb305"
        },
        {
            name: "공사/공기업",
            background: "#f9f0ff",
            color: "#531dab"
        },
        {
            name: "IT개발/데이터",
            background: "#fff1f0",
            color: "#cf1322"
        },
        {
            name: "서비스 기획/UIUX",
            background: "#fff7e6",
            color: "#d46b08"
        },
        {
            name: "디자인/예술",
            background: "#F6FFED",
            color: "389e0d"
        },
        {
            name: "연구/설계",
            background: "#FFF1F0",
            color: "#CF1322"
        },
        {
            name: "미디어",
            background: "#F9F0FF",
            color: "#531DAB"
        },
        {
            name: "연구/설계",
            background: "#FFF1F0",
            color: "#CF1322"
        },
        {
            name: "전문/특수",
            background: "#fff7e6",
            color: "#d46b08"
        },
        {
            name: "교육/상담/컨설팅",
            background: "#FFF1F0",
            color: "#CF1322"
        },
        {
            name: "공무원/비영리",
            background: "#e6fffb",
            color: "#08979c"
        },
        {
            name: "생산/품질/제조",
            background: "#F9F0FF",
            color: "#531DAB"
        },
        {
            name: "생산/품질/제조",
            background: "#fcffe6",
            color: "#7cb305"
        },
        {
            name: "회계/재무/금융",
            background: "#FFF1F0",
            color: "#CF1322"
        }
    ]


    useEffect(() => {
        const fetchMentors = async () => {
            try {
                // 요청이 시작 할 때 error와 mentor 초기화
                setError(null);
                setMentors([]);
                // loading 상태 true
                setLoading(true);
                const mentors = await Api(`api/v1/mentors`, "GET");
                console.log(mentors)
                setMentors(mentors.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchMentors();
    }, []);

    useEffect(() => {
        const fetchField = async () => {
            try {
                setError(null);
                setMentoringField([]);
                setLoading(true);
                const mentoringField = await Api(`api/v1/mentoringField`, "GET");
                console.log(mentoringField)
                setMentoringField(mentoringField.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchField();
    }, [])

    const mentorDetail = (mentor) => {
        nav(`/mentorDetail?mentorId=${mentor.mentorId}`)
    }
    return <div className="App">
        <Center>
            <div className="infoMent">
                <div className="infoTopMent">
                    <div className="category">
                        {menu.map((item, idx) => (
                            <div key={idx} style={{background: item.background, color: item.color}}
                                 className="categoryItem"><span>{item.name}</span></div>
                        ))}
                    </div>
                </div>
            </div>


            <div><h1>Mentor</h1></div>
            <div className="card_wrap">
                {mentors.map((mentor, idx) =>
                    <div key={idx} onClick={() => {mentorDetail(mentor)}}>
                        <div className="card_detail">
                            <div className="story">
                                <div className="story_title">{mentor.company}</div>
                                <div style={{background: mentor.background, color: mentor.color}}
                                     className="categoryItem">{mentor.categoryItem}</div>
                            </div>
                            <div className="card_img">
                                <img style={{width: '150px', height: '150px'}}
                                     src={myImg}/>
                            </div>
                            <div><strong>{mentor.username} <span> 멘토 </span></strong></div>
                            <div className="story_profile"> <span>{mentor.department}</span></div>

                            <div>{mentor.majorCareer}</div>
                        </div>
                    </div>
                )}
            </div>
        </Center>

    </div>
}
export default Mentors;