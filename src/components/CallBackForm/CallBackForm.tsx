import React from 'react';

export const CallBackForm: React.FC = () => {
    return (
        <div className='border-solid border-2 border-black rounded-md lg:max-w-md m-5'>
            <form className='p-5' method='POST' id='contactform' action='http://localhost:5000/feedback'>
                <h2>Свяжитесь с нами.</h2>
                <div>
                    <h3>Имя*</h3>
                    <input type="name" name='name' placeholder='Иван' className='p-2 bg-gray-200 rounded' required/>
                </div>
                <div>
                    <h3>Телефон*</h3>
                    <input type="tel" name='phone' placeholder='+7 (000) 000-00-00' className='p-2 bg-gray-200 rounded' required/>
                </div>
                {/* <div>
                    <h3>Комментарий</h3>
                    <textarea name="" id="" cols={50} rows={4} placeholder='Перезвоните мне в 17:00' className='p-2 bg-gray-200  rounded resize-none'></textarea>
                </div> */}
                <p>* - поля, обязательные для заполнения</p>
                <button type='submit' className='bg-gray-400 rounded p-2 mt-2'>ОТПРАВИТЬ ЗАЯВКУ</button>
            </form>
        </div>
    )
}
