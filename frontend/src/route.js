import { createBrowserRouter } from "react-router";
import ArticleService from "./Api/ArticleService";
import App from "./App";
import ArticlePage from "./Page/ArticlePage";

const router = createBrowserRouter([
  {
    path: "/",
		loader: async () => {
			let articles = await ArticleService.getAll();
			return articles ;
		},
    Component: App,
	},
	{
		path: '/article/:id',
		action: async ({request, params}) => {
				const data = await request.formData()
				const content = data.get('content')
				const author_name = data.get('author_name');
				const articleCommentData = {
					author_name: author_name,
					content: content
				}				
				let comment = await ArticleService.createComment(params.id, articleCommentData);
				return comment
		},

		loader: async ({request, params}) => {				
				let article = await ArticleService.getById(params.id);
				return article;
			},
			Component: ArticlePage
		},
]);



console.log(router);


export default router;