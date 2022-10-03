import { useNavigate } from "react-router-dom";

// css
import "./imageUploader.scss";
import { Button } from "@mui/material";

const ImageUploader = ({ image, setImage }) => {
  const navigate = useNavigate();
  let inputRef;

  // 이미지 저장
  const saveImage = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setImage({
        image_file: e.target.files[0],
        preview_URL: fileReader.result,
      }); 
    };
  };

  return (
    <div className="uploader-wrapper">
      {/* 이미지 업로드 */}
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />

      {/* 미리보기 */}
      <div className="img-wrapper">
        <img src={image.preview_URL} alt="이미지 없음"/>
      </div>
      
      {/* 업로드 버튼 */}
      <div className="upload-button">
        {image.preview_URL === "image/default_image.png" ? (
          <Button
            onClick={() => inputRef.click()}
          >
            오늘의 일기 사진 업로드
          </Button>

          ) : (

          <div>
            <Button
              onClick={() => inputRef.click()}
            >
              사진 다시 고르기
            </Button>

            <Button
              onClick={() => navigate("/DiaryKeyword", {state : {image : image}})}
            >
            일기 쓰러가기
            </Button>
          </div>    
        )}
      </div>
    </div>
  );
};

export default ImageUploader;