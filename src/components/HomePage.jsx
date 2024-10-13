import { useEffect, useState } from "react";
import CreateHissab from './CreateHissab'; // Ensure you import CreateHissab

const HomeComponent = () => {
    const [hissab, setHissab] = useState([]);

    const fetchHissabs = () => {
        const storedHissabs = JSON.parse(localStorage.getItem('hissab')) || [];
        setHissab(storedHissabs);
    };

    useEffect(() => {
        fetchHissabs(); // Fetch Hissabs on component mount
    }, []);

    const handleNewHissab = (newHissab) => {
        setHissab((prevHissabs) => [...prevHissabs, newHissab]); // Update state with new Hissab
    };
    <CreateHissab onNewHissab={handleNewHissab} /> // Ensure this component handles the creation


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hissab</h1>
            {/* <CreateHissab onNewHissab={handleNewHissab} /> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hissab.map((hissab) => (
                    <div key={hissab.id} className="bg-white shadow-md rounded p-4">
                        <h2 className="font-semibold">{hissab.title}</h2>
                        <p>{hissab.description}</p>
                        <p className="text-gray-500">Created on: {new Date().toLocaleDateString()}</p>
                        <div className="flex justify-between mt-4">
                            <button className="bg-green-500 text-white rounded p-2">Edit</button>
                            <button className="bg-red-500 text-white rounded p-2">Delete</button>
                            <button className="bg-yellow-500 text-white rounded p-2">Share Link</button>
                            <button className="bg-purple-500 text-white rounded p-2">Encrypt</button>
                            <button className="bg-blue-500 text-white rounded p-2">Decrypt</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeComponent;
