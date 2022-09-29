import { useState, useEffect, useCallback } from "react";
import ImageUploader from "./ImageUploader";
import NavBar from "../../components/NavBar";
import { studyApi } from '../../shared/studyApi';

// css
import "./Diary.scss";

const DiaryStart = () => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "image/default_image.png",
  });

  const [check, setCheck] = useState(false);

  // 일기작성 여부 확인
  const checkDiary = useCallback(async () => {
    const date = new Date();

    let temp = date.getMonth()+1;

    let month = temp;

    if (temp < 10) {
      month = `0${temp}`;
    }

    //const data = `${date.getFullYear()}-${month}}`
    const data2 = `${date.getFullYear()}-${month}-${date.getDate()}`

    try{  
      const res = await studyApi.gethistorylist(data2);

      if (res.data.status === "SUCCESS") {
        let diaryList = res.data.data.diary_histories;

        for (let i=0; i<diaryList.length; i++) {
          if (diaryList[i] === data2) {
            setCheck(true)
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }, []);

  useEffect(() => {
    checkDiary();

  },[checkDiary])

  return (
    <div className="background">
      <NavBar />

      <div className="back">
        <div className="diary-wrapper">
          {check ? (
            <div className="diary-header">
              오늘은 이미 일기를 작성했어요!
            </div>
          ) : (
            <div>
            {/* 머리글 */}
            <div className="diary-header">
              오늘 일기에 쓸 사진은 뭔가요?
              <br/>
              사진을 추가 해 볼까요?
            </div>

            {/* 사진 업로드 */}
            <div className="diary-body">
              <ImageUploader setImage={setImage} preview_URL={image.preview_URL}/>
            </div>
          </div>)}
        </div>
      </div>
    </div>
  );
}

export default DiaryStart;