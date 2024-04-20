'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    number: z.string().regex(/^[\+]?\d*$/, 'Invalid number format'),
    message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-md rounded-md p-6"
            >
                <div className="mb-4">
                    <label htmlFor="name" className="block font-semibold mb-1 text-gray-700">
                        Name
                    </label>
                    <input
                        {...register('name')}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <span className="text-red-500 mt-1">{errors.name.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-semibold mb-1 text-gray-700">
                        Email
                    </label>
                    <input
                        {...register('email')}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <span className="text-red-500 mt-1">{errors.email.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block font-semibold mb-1 text-gray-700">
                        Number
                    </label>
                    <input
                        {...register('number')}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.number && (
                        <span className="text-red-500 mt-1">{errors.number.message}</span>
                    )}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-semibold mb-1 text-gray-700">
                        Message
                    </label>
                    <textarea
                        {...register('message')}
                        rows={4}
                        className="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.message && (
                        <span className="text-red-500 mt-1">{errors.message.message}</span>
                    )}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}