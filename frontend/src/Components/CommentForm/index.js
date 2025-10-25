import { useRef, useEffect } from 'react';
import {Form, useActionData} from 'react-router-dom'

const CommentForm = () => {
	let refForm = useRef()
	const actionData = useActionData()
	const isSubmitting = false; 

  useEffect(() => {
    if (actionData?.status === 200) {
      refForm.current?.reset();
    }
  }, [actionData]);

  return (
		<>
    <Form className='comment-form' method='post' ref={refForm}>
				<h3>Добавить комментарий</h3>
					<input
						type="text"
						name="author_name"
						placeholder="Ваше имя"
						required
					/>
					<textarea
						name="content"
						placeholder="Текст комментария"
						rows="4"
						required
					/>
				<button 
					type="submit" 
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Отправка...' : 'Добавить комментарий'}
				</button>
			</Form>
		</>
		
  );
	
};

export default CommentForm;