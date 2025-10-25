import { useState } from 'react';
import ArticleService from '../../Api/ArticleService';
import { redirect, useNavigate } from 'react-router-dom';

const ArticleForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ArticleService.create(formData);
            if (response.status) navigate(`/article/${response.data.data.id}`)
        } catch (error) {
            console.error('Error submitting form:', error);
        }
        setFormData({
            title: '',
            content: ''
        })
    };
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    return (
        <div className="form">
            <h1>Добавить статью</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Заголовок'
                    name="title" 
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="text" 
                    name="content" 
                    placeholder='содержание'
                    value={formData.content}
                    onChange={handleChange}
                    required
                />
                <button type="submit" onClick={() => {
                    redirect('/articles/3')
                }}>Submit</button>
            </form>
        </div>
    );
};

export default ArticleForm;