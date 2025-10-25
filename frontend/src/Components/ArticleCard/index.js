
const ArticleCard = ({article}) => {
    return (
        <div>
            <article className='card' data-id={article.id}>    
                <div className='createdAt'>{article.created_at}</div>
                <div className='title'>{article.title}</div>
                <div className='content'>{article.content}</div>
            </article>
           
           {article.comments && article.comments.length > 0 && (
                <div className="comments-section">
                    <h1>Comments</h1>
                    {article.comments.map((comment) => (
                        <div key={comment.id} className="comment">
                            <div className="comment-author">{comment.author_name}</div>
                            <div className="comment-date">
                                {comment.created_at}
                            </div>
                            <div className="comment-content">{comment.content}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticleCard;