import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditHissab = () => {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const EdithandleSubmit = (e) => {
    e.preventDefault();
    const existingHissb = JSON.parse(localStorage.getItem("hissab")) || [];
    const updatedHissab = {
      id,
      title,
      description,
      isEncrypted,
      password,
    };
    const currentHissabIndex = existingHissb.findIndex((h) => h.id === id);
    if (currentHissabIndex !== -1) {
      existingHissb[currentHissabIndex] = updatedHissab;
    }
    localStorage.setItem("hissab", JSON.stringify(existingHissb));
    setDescription("");
    setIsEncrypted(false);
    setTitle("");
    setPassword("");
    navigate(-1);
  };
  useEffect(() => {
    const existingHissabs = JSON.parse(localStorage.getItem("hissab")) || [];
    const currentHissab = existingHissabs.find((h) => h.id === id); // Find the hissab by id
    if (currentHissab) {
      setTitle(currentHissab.title);
      setDescription(currentHissab.description);
      setIsEncrypted(currentHissab.isEncrypted);
      setPassword(currentHissab.password);
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Hissab</h1>
      <form onSubmit={EdithandleSubmit} className="space-y-4">
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
          <label className="block text-sm font-medium">
            Hissab Description
          </label>
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
          Edit New Hissab
        </button>
      </form>
    </div>
  );
};

export default EditHissab;
