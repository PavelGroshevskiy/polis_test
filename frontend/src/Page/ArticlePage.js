import { useLoaderData } from "react-router";
import ArticleCard from "../Components/ArticleCard";
import CommentForm from "../Components/CommentForm";

const ArticlePage = () => {

    let {data} = useLoaderData();
    
    return (
        <div className="App">
            <h1> Статья № {data.id} </h1>
            <ArticleCard article={data}/>
            <CommentForm articleId={data.id}/>
        </div>
    );
};

export default ArticlePage;