import { useState, useEffect, useCallback } from "react";
import ImageUploader from "./ImageUploader";
import NavBar from "../../components/NavBar";
import { diaryApi } from "../../shared/diaryApi";

// css
import "./Diary.scss";
import Loading from "../../util/Loading";

const DiaryStart = () => {
  const [image, setImage] = useState({
    image_file: {},
    preview_URL: "image/default_image.png",
  });

  const [today, setToday] = useState();
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(true);

  // 날짜 변환
  const getDate = useCallback(async () => {
    var date = new Date()

    let temp = date.getMonth() + 1;
    let month = temp;
    if (temp < 10) {
      month = `0${temp}`;
    }

    let temp2 = date.getDate();
    let day = temp2;
    if (temp2 < 10) {
      day = `0${temp2}`;
    }
    setToday(`${date.getFullYear()}-${month}-${day}`)
  },[])

  const [diaryContent, setDiaryContent] = useState("");
  const [diaryEmotion, setDiaryEmotion] = useState("");
  const [diaryKeywordList, setDiaryKeywordList] = useState([]);
  const [diaryPicturePath, setDiaryPicturePath] = useState("");

  // 일기 불러오기
  const getDiary = useCallback(async () => {
    if (loading) {
      try {
        const res = await diaryApi.getdiary(today);
        if (res.data.status === "SUCCESS") {
          if (res.data.data.diaryEmotion) {
            setDiaryContent(res.data.data.diaryContent)
            setDiaryEmotion(res.data.data.diaryEmotion)
            setDiaryKeywordList(res.data.data.diaryKeywordList)
            setDiaryPicturePath(res.data.data.diaryPicturePath)
            
            setCheck(true)
          }
          setLoading(false);
        }
      } catch (e) {
        console.log(e)
      }
    }
  }, [today, loading]);

  useEffect(() => {
    getDate()
    getDiary()
  });

  return (
    <div className="background">
      <NavBar />

      {loading ? (
        <Loading />
      ) : (
        <div className="back">
          <div className="diary-wrapper">
            {check ? (
              <div>
                <div className="diary-header">
                  오늘은 이미 일기를 작성했어요!
                  {/* 기분 */}
                  <div className="emotion">
                    <span>오늘의 기분 : {diaryEmotion}</span>
                    <img src={`image/${diaryEmotion}.png`} alt=""/>
                  </div>  
                </div>

                 {/* 일기 메인 */}
                <div className="diary-body">
                  <div className="text">
                    {/* 사진 */}
                    <img src={diaryPicturePath} alt=""/>
                  
                    {/* 일기 */}
                    <div className="content">
                      {diaryContent}
                    </div>
                  </div>
                  
                </div>

                {/* 단어 */}
                <div className="words">
                  <div className="diary-header">사용한 단어</div>

                  <div className="word">
                    {diaryKeywordList.map((item, index) => (
                      <div className="word-list" key={index}>
                        <span>{item}</span>
                      </div>
                    ))} 
                  </div>
                </div>

              </div>
            ) : (
              <div>
                {/* 머리글 */}
                <div className="diary-header">
                  오늘 일기에 쓸 사진은 뭔가요?
                  <br />
                  사진을 추가 해 볼까요?
                </div>

                {/* 사진 업로드 */}
                <div className="diary-body">
                  <ImageUploader image={image} setImage={setImage} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryStart;
