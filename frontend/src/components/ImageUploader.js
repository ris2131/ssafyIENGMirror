import "./imageUploader.scss";
import { Button } from "@mui/material";
import {useNavigate} from "react-router-dom";

const ImageUploader = ({ preview_URL, setImage }) => {
  const navigate = useNavigate();
  let inputRef;

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
      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={preview_URL} alt="이미지 없음"/>
      </div>
      
      <div className="upload-button">
        {preview_URL === "image/default_image.png" ? (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => inputRef.click()}
          >
            오늘의 일기 사진 업로드
          </Button>
          ) : (
          <div>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => inputRef.click()}
            >
              사진 다시 고르기
            </Button>

            <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/DiaryKeyword")}
            >
            확인
            </Button>
          </div>    
          )}

        
      </div>
    </div>
  );
};

export default ImageUploader;