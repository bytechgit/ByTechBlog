import React, { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name') as string,
      email: window.localStorage.getItem('email') as string,
      storeData:( window.localStorage.getItem('name') || window.localStorage.getItem('email'))? true : false,
      comment:" " as string
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
        //   setTimeout(() => {
        //     setShowSuccessMessage(false);
        //   }, 5000);
        }
      });
  };

  return (
    <div className="bg-white rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Ostavite komentar</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea value={formData.comment} onChange={onInputChange} className="p-4 outline-none w-full h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" name="comment" placeholder="Komentar" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" value={formData.name} onChange={onInputChange} className="py-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="Ime" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} className="py-2 px-4 outline-none w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" placeholder="e-mail" name="email" />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData"> Sačuvaj ime i e-mail, kada sledeći put ostavljam komentar.</label>
        </div>
      </div>
      {error && <p className="text-xs text-red-500">Morate popuniti sva polja.</p>}
      <div className="mt-8 comment">
        <button type="button" onClick={handlePostSubmission} className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-lg font-medium rounded-md text-white px-8 py-3 cursor-pointer float-right">
        {/* <i className="fa-solid fa-check"></i> */}
        Objavi
        </button>
        <div className="comment-submit">
        {showSuccessMessage && <span className="text-center text-xl">Hvala na objavi komentara. Komentar će biti dostavljen adminu na pregled i biće objavljen u roku od najkasnije 
        <h3> 6h.</h3>
        </span>}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;