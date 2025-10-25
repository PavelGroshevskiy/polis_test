import {useLoaderData, useNavigate } from "react-router";
import ArticleForm from "../ArticleForm";
import ArticleCard from "../ArticleCard";
import { useCallback, useEffect } from "react";

const ArticleList = () => {
    let navigate = useNavigate()
    const handleClick = useCallback((e) => {            
        const listElement = e.target.closest('.card');
        if (listElement) {
            let id = listElement.dataset.id;                
            navigate(`/article/${id}`);
        }
    }, [navigate]);

     useEffect(() => {
        let list = document.querySelector('.list');
        if (list) {
            list.addEventListener('click', handleClick);
        }
        return () => {
            document.body.removeEventListener('click', handleClick);
        };
    },[handleClick])
    let articles = useLoaderData();
    if (!articles.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Статьи не найдены!
            </h1>
        )
    }
    return (
        <div className="list">
            <ArticleForm/>
            <h1 style={{textAlign: 'center'}}>
                Список Статей
            </h1>   
            <ArticleCard article={
                {
                    created_at:'time',
                    title: 'title',
                    content:'content' 
                }
            }/>
            {articles.map((article, index) => {
                let shortContent = article.content
                if(article.content.length > 200) {
                    shortContent = article.content.split(' ', 14).join(' ') + '...';
                }
                return (
                    <ArticleCard 
                        key={index} 
                        article={{
                            ...article,
                            content: shortContent
                        }}
                    />
                );
            })}
        </div>
    );
};

export default ArticleList;