import React, {FormEvent, useState} from 'react';
import {createDataFeedback} from "@/module/fetchFeedbackForm";


export const CallBackForm: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const clear = () => {
        setName(``)
        setEmail(``)
        setPhone(``)
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('phone', phone)
        createDataFeedback(data)
        clear()
    }

    return (
        <div className='border-solid border-2 border-black rounded-md lg:max-w-md m-5'>
            <form className='p-5' id='contactform' onSubmit={handleSubmit}>
                <h2>Свяжитесь с нами.</h2>
                <div>
                    <h3>Имя*</h3>
                    <input type="text" name='name' id='name' value={name} placeholder='Иван' className='p-2 bg-gray-200 rounded'
                           onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <h3>Email*</h3>
                    <input type="text" name='email' id='email' value={email} placeholder='mail@mail.ru' className='p-2 bg-gray-200 rounded'
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <h3>Телефон*</h3>
                    <input type="text" name='phone' id='phone' value={phone} placeholder='+7 (000) 000-00-00' className='p-2 bg-gray-200 rounded'
                           onChange={(e) => setPhone(e.target.value)}/>
                </div>
                {/* <div>
                    <h3>Комментарий</h3>
                    <textarea name="" id="" cols={50} rows={4} placeholder='Перезвоните мне в 17:00' className='p-2 bg-gray-200  rounded resize-none'></textarea>
                </div> */}
                <p>* - поля, обязательные для заполнения</p>
                {/*<button type='submit' className='bg-gray-400 rounded p-2 mt-2 '>ОТПРАВИТЬ ЗАЯВКУ</button>*/}
                <button type="submit" value="Submit" className='bg-gray-400 rounded p-2 mt-2'>ОТПРАВИТЬ ЗАЯВКУ</button>
            </form>
        </div>
    )
}
