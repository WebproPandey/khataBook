import { useEffect, useState } from "react";
import CreateHissab from './CreateHissab'; 
import { Link } from "react-router-dom";

const HomeComponent = () => {
    const [hissab, setHissab] = useState([]);

    const fetchHissabs = () => {
        const storedHissabs = JSON.parse(localStorage.getItem('hissab')) || [];
        
        setHissab(storedHissabs);
    };

    useEffect(() => {
        fetchHissabs();
    }, []);

    const handleNewHissab = (newHissab) => {
        setHissab((prevHissabs) => [...prevHissabs, newHissab]);         
    };
    const handleDeleteHissab = (id) => {
        setHissab((prevHissabs) => prevHissabs.filter(h => h.id !== id));
        localStorage.setItem('hissab', JSON.stringify(hissab.filter(h => h.id !== id))); // Update localStorage
    };
   


    <CreateHissab onNewHissab={handleNewHissab} /> 


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hissab</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {hissab.length > 0 ? ( 
                   hissab.map((hissab , index) => ( 
                    <div key={index} className="bg-white shadow-md rounded p-4">
                        <h2 className="font-semibold">{hissab.title}</h2>
                        <p>{hissab.description}</p>
                        <p className="text-gray-500">Created on: {new Date().toLocaleDateString()}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/home/edit/CreateHissab/${hissab.id}`} className="bg-green-500 text-white rounded p-2">Edit</Link>
                            <button onClick={() =>handleDeleteHissab(hissab.id)} className="bg-red-500 text-white rounded p-2">Delete</button>
                            <button className="bg-yellow-500 text-white rounded p-2">Share Link</button>
                            <button className="bg-purple-500 text-white rounded p-2">Encrypt</button>
                            <button className="bg-blue-500 text-white rounded p-2">Decrypt</button>
                        </div>
                    </div>
                )) 
                ) : (
                    <h1>Not any hissab created</h1>
                )}
               
            </div>
        </div>
    );
};

export default HomeComponent;
