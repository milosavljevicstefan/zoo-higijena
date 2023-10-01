import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const DodajPsa = () => {
    const navigate = useNavigate();
    const firebaseConfig = {
        apiKey: "AIzaSyAhq_7KdoET3D-NrcMuyQZN6fHzHHp70nQ",
        authDomain: "zoo-higijena-ns.firebaseapp.com",
        databaseURL: "https://zoo-higijena-ns-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "zoo-higijena-ns",
        storageBucket: "zoo-higijena-ns.appspot.com",
        messagingSenderId: "475293179835",
        appId: "1:475293179835:web:796cd075c55682932e6e9e"
      };

  const [dogInfo, setDogInfo] = useState({
    Ime: '',
    Pol: 'Muški',
    Starost: '',
    KastriranSterilisan: false,
    Rasa: '',
    Slika: '',
    Udomljen: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setDogInfo((prevDogInfo) => ({
      ...prevDogInfo,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  const db = getDatabase(app);
  
  const addDog = (dog) => {
    
    const newDogRef = push(ref(db, "dogs"), dog);
    return newDogRef.key; 
  };
  
  const newDogKey = addDog(dogInfo);
  console.log(`Dog added with key: ${newDogKey}`);
  alert("Pas uspešno dodat!");
  setTimeout(() => {
    navigate('/udomljavanje');
  }, 2000);
  };

  return (
    <div>
      <h2>Dodaj Psa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="ime" className="form-label">
            Ime
          </label>
          <input
            type="text"
            id="ime"
            name="Ime"
            value={dogInfo.Ime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pol" className="form-label">
            Pol
          </label>
          <select
            id="pol"
            name="Pol"
            value={dogInfo.Pol}
            onChange={handleInputChange}
          >
            <option value="Muški">Muški</option>
            <option value="Ženski">Ženski</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="starost" className="form-label">
            Starost (godine)
          </label>
          <input
            type="number"
            id="starost"
            name="Starost"
            value={dogInfo.Starost}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-check-label">Kastriran/Sterilisan</label>
          <input
            type="checkbox"
            id="kastriranSterilisan"
            name="KastriranSterilisan"
            checked={dogInfo.KastriranSterilisan}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rasa" className="form-label">
            Rasa
          </label>
          <input
            type="text"
            id="rasa"
            name="Rasa"
            value={dogInfo.Rasa}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="slika" className="form-label">
            URL Slike
          </label>
          <input
            type="url"
            id="slika"
            name="Slika"
            value={dogInfo.Slika}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Dodaj Psa
        </button>
      </form>
    </div>
  );
};

export default DodajPsa;
