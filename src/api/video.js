import axios from "axios";

// http://localhost:8080/api/
const instance = axios.create({
    baseURL: "http://localhost:8080/api/",
});

export const getCategories = async () => {
    return await instance.get("category");

};

export const addVideo = async (data) => {   //데이터를 넘겨야 함 post 방식
    return await instance.post("video", data);
};

export const getVideos = async () => {
    return await instance.get("video");
}

