import { useCallback, useState } from "react";
import axios from "axios";
import useRecorder from "./useRecoder"

// css
import { Button } from "@mui/material";

const ApiTest = () => {
  let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  const [res, setRes] = useState("");

  // 제출 
  const handleSubmit = useCallback(async () => {
    const formData = new FormData()

    let blob = await fetch(audioURL).then(r => r.blob());

    formData.append('voice', blob)

    const baseURL = "https://j7d209.p.ssafy.io/";
    const postApi = axios.create({
      baseURL,
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    try{
      const res = await postApi.post("ai-api/studies/stt/", formData);

      if (res.data.message === "SUCCESS") {
        window.alert("분석 완료!");
        setRes(res.data.data)
      }
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e)
    }
  }, [audioURL]);

  return (
    <div>
      <div>
        <audio src={audioURL} controls />
        <button onClick={startRecording} disabled={isRecording}>
          start
        </button>
        <button onClick={stopRecording} disabled={!isRecording}>
          stop
        </button>
      </div>

      {audioURL === "" ? (
        <div>
          녹음 하세요!
        </div>
      ) : (
        <div>
          <Button
            onClick={handleSubmit}
          >
            제출
          </Button>
        </div>
      )}

      {res === "" ? (
        <div></div>
      ) : (
        <div>{res}</div>
      )}
    </div>
  );
};

export default ApiTest;
