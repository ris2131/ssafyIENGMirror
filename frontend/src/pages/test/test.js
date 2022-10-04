import { useState, useCallback,} from "react";
import axios from "axios";

// css
import { Button } from "@mui/material";

const ApiTest = () => {
  const [file, setFile] = useState({
    file: {},
    preview: "not",
  });
  let inputRef;

  // 파일 저장
  const saveFile = (e) => {
    e.preventDefault();
    const fileReader = new FileReader();

    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
    }

    fileReader.onload = () => {
      setFile({
        file: e.target.files[0],
        preview: fileReader.result,
      }); 
    };
  };

  // 제출 
  const handleSubmit = useCallback(async () => {
    console.log("제출")

    const formData = new FormData()
    formData.append('voice', file.file)

    const baseURL = "http://localhost:3000/";
    const postApi = axios.create({
      baseURL,
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    try{
      const res = await postApi.post("ai-api/studies/stt/", formData);
      console.log(res)

      if (res.data.status === "SUCCESS") {
        window.alert("등록이 완료되었습니다.");
      }
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e)
    }
  }, [file]);

  return (
    <div>
      <div>
        {file.preview}
      </div>

      <input
        type="file"
        accept="wav/*"
        onChange={saveFile}
        ref={(refParam) => (inputRef = refParam)}
        style={{ display: "none" }}
      />

      {file.preview === "not" ? (
        <div>
          <Button
            onClick={() => inputRef.click()}
          >
            파일 선택
          </Button>
        </div>
      ) : (
        <div>
          <Button
            onClick={() => inputRef.click()}
          >
            파일 재선택
          </Button>

          <Button
            onClick={handleSubmit}
          >
            제출
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
