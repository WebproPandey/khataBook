
const HomeComponent = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hissab</h1>
            
            <div className="flex justify-between mb-4">
                <input type="text" placeholder="Search..." className="border rounded p-2 w-1/3" />
                <button className="bg-blue-500 text-white rounded p-2">Filter</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-md rounded p-4">
                    <h2 className="font-semibold">Hissab Title</h2>
                    <p>Details about the hissab... Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sapiente itaque nobis!</p>
                    <p className="text-gray-500">Created on: 2023-10-01</p>
                    <div className="flex justify-between mt-4">
                        <button className="bg-green-500 text-white rounded p-2">Edit</button>
                        <button className="bg-red-500 text-white rounded p-2">Delete</button>
                        <button className="bg-yellow-500 text-white rounded p-2">Share Link</button>
                        <button className="bg-purple-500 text-white rounded p-2">Encrypt</button>
                        <button className="bg-blue-500 text-white rounded p-2">Decrypt</button>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded p-4">
                    <h2 className="font-semibold">Hissab Title</h2>
                    <p>Details about the hissab...</p>
                    <p className="text-gray-500">Created on: 2023-10-01</p>
                    <div className="flex justify-between mt-4">
                        <button className="bg-green-500 text-white rounded p-2">Edit</button>
                        <button className="bg-red-500 text-white rounded p-2">Delete</button>
                        <button className="bg-yellow-500 text-white rounded p-2">Share Link</button>
                        <button className="bg-purple-500 text-white rounded p-2">Encrypt</button>
                        <button className="bg-blue-500 text-white rounded p-2">Decrypt</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;