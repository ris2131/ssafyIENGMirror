import { useState } from "react";
import ImageUploader from "../../components/ImageUploader";
import NavBar from "../../components/NavBar";

// css
import "./Diary.scss";

const DiaryStart = () => {
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "image/default_image.png",
  });

  return (
    <div>
      <NavBar />

      <div className="diary-wrapper">
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

      </div>
    </div>
  );
}

export default DiaryStart;