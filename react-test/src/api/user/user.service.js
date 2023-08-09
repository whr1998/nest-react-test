import httpService from "../../service/http.service";

// 获取全部用户
export function getUserInfoService() {
  return httpService("get", "/user/getUserInfo");
}

// 添加用户
export function addUserService(data) {
  return httpService("post", "/user/addUser", data);
}
