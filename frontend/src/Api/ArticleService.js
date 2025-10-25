import axios from "axios";

const BASE_API_URL = 'http://localhost:8000/api'

export default class ArticleService {
    static async getAll() {
        const response = await axios.get(`${BASE_API_URL}/articles`)
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`${BASE_API_URL}/articles/${id}`)
        return response.data;
    }
    static async create(ArticleData) {
        const response = await axios.post(`${BASE_API_URL}/articles`, {
            title: ArticleData.title,
            content: ArticleData.content
        })
        return response;
    }
    static async createComment(articleId, commentData) {
        const response = await axios.post(`${BASE_API_URL}/article/${articleId}/comments`, {
            article_id: articleId,
            content: commentData.content,
            author_name:commentData.author_name
        })
        return response;
    }
}