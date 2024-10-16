import React, { useState } from 'react';
import {nanoid}   from 'nanoid';
import { useNavigate } from 'react-router-dom';

const CreateHissab = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isEncrypted, setIsEncrypted] = useState(false);
    const [password, setPassword] = useState('');
    let navigate =  useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const  newHissab = {
            id: nanoid(),
            title,
            description,
            isEncrypted,
            password,
        }
        const existingHissb = JSON.parse(localStorage.getItem("hissab")) || [];
        existingHissb.push(newHissab)
        localStorage.setItem("hissab", JSON.stringify(existingHissb))
        setDescription("")
        setIsEncrypted(false)
        setTitle("")
        setPassword("")
        navigate(-1)

    };
   

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Create Hissab</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Hissab Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Hissab Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded p-2 w-full"
                        required
                    />
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={isEncrypted}
                        onChange={() => setIsEncrypted(!isEncrypted)}
                        className="mr-2"
                    />
                    <label className="text-sm">Is Hissab Encrypted?</label>
                </div>
                {isEncrypted && (
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded p-2 w-full"
                            required
                        />
                    </div>
                )}
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Create New Hissab
                </button>
            </form>
        </div>
    );
};

export default CreateHissab;