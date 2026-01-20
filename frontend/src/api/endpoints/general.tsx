import type { ApiResponse } from "../../config/models/index";
import config from "../../config/index";

const getRequest = async (endpoint: string): Promise<ApiResponse<any>> => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const postRequest = async (endpoint: string, payload: any) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then((response) => response.json());
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const deleteRequest = async (endpoint: string, payload: any) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const general = {
  getRequest,
  postRequest,
  deleteRequest
};

export default general;
