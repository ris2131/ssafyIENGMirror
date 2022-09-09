import "./Diary.scss";
// import {useNavigate} from "react-router-dom";
import {useState} from "react";
import ImageUploader from "../../components/ImageUploader";

const DiaryStart = () => {
  // const navigate = useNavigate();
  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "image/default_image.png",
  });

  return (
    <div className="diary-wrapper">
      <div className="diary-header">
        오늘의 일기 사진은 뭔가요?
        <br/>
        사진을 추가 해 볼까요?
      </div>

      <div className="diary-body">
        <ImageUploader setImage={setImage} preview_URL={image.preview_URL}/>
      </div>
    </div>
  );
}

export default DiaryStart;