import axios from "axios";

export default class PostService {
  static async getAll(limit = 20, page = 1) {
    const response = await axios.get(
      "http://engine.hotellook.com/api/v2/lookup.json?query=moscow",
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getByPostsId(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return response;
  }

  static async getByCommentsId(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
    );
    return response;
  }
}
