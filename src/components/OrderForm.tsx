'use client';
import React from 'react'
import { useForm } from 'useform-simple-hook';

const formData = {
    name: "",
    email: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    cardExpMonth: "",
    cardExpYear: "",
    cardCVC: ""
};

interface formData {
    name?: string;
    email?: string;
    phone?: string;
    cardName?: string;
    cardNumber?: string;
    cardExpMonth?: string;
    cardExpYear?: string;
    cardCVC?: string;
}

export const OrderForm = () => {

    const { formState, onInputChange, onResetForm } = useForm(formData);

    const { name, email, phone, cardName, cardNumber, cardExpMonth, cardExpYear, cardCVC }: formData = formState;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            {/* Client data */}
            <input type="text" placeholder='Nombre' value={name} name='name' onChange={onInputChange} />
            <input type="text" placeholder='Email' value={email} name='email' onChange={onInputChange} />
            <input type="text" placeholder='Phone' value={phone} name='phone' onChange={onInputChange} />
            <br />
            {/* Card data */}
            <input type="text" placeholder='Nombre en la tarjeta' value={cardName} name='cardName' onChange={onInputChange} />
            <input type="text" placeholder='Número de tarjeta' value={cardNumber} name='cardNumber' onChange={onInputChange} />
            <input type="text" placeholder='MM' value={cardExpMonth} name='cardExpMonth' onChange={onInputChange} />
            <input type="text" placeholder='YY' value={cardExpYear} name='cardExpYear' onChange={onInputChange} />
            <input type="text" placeholder='CVC' value={cardCVC} name='cardCVC' onChange={onInputChange} />
            <br />

            <button type="submit">Enviar</button>
        </form>
    )
}
