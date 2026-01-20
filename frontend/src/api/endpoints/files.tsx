import type { ApiResponse } from "../../config/models/index";
import config from "../../config/index";
import axios from "axios";

export async function uploadMissionFile(file: File, missionId?: number) {
  const formData = new FormData();
  formData.append("file", file);
  if (missionId) {
    formData.append("mission_id", String(missionId));
  }

  return axios.post(`${config.endpoint}/missions/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}


const files = {
  uploadMissionFile,
};

export default files;
