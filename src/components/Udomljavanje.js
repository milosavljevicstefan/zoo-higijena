import { getDatabase, ref, onValue, off } from "firebase/database";
import { useEffect, useState, useContext } from "react";
import { firebase } from "../firebase";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Udomljavanje = () => {
    const { user, logout } = useContext(AuthContext);
  const [dogListings, setDogListings] = useState([]);

  useEffect(() => {
    const db = getDatabase(firebase);

    const dogsRef = ref(db, "dogs");

    const onDogsValue = (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const dogArray = Object.values(data);
        const availableDogs = dogArray.filter((dog) => !dog.Udomljen);
        setDogListings(availableDogs);
      }
    };

    onValue(dogsRef, onDogsValue);

    return () => {
      off(dogsRef, "value", onDogsValue);
    };
  }, []);
  return (
        <div className="container mt-4">
          <h2>Psi za Udomljavanje</h2>
          {user ? (
            <Link as={Link} to="/udomljavanje/dodaj" className="btn btn-success mx-2" style={{ fontSize: "20px" }}>
              Dodaj
            </Link>
          ): null}
          <div className="row">
            {dogListings
              .map((dog, index) => (
                <div key={index} className="col-md-4 mb-3">
                  <div className="card">
                    <img src={dog.Slika} className="card-img-top" alt={dog.Ime} />
                    <div className="card-body">
                      <h3 className="card-title">{dog.Ime}</h3>
                      <p className="card-text">
                        <strong>Pol:</strong> {dog.Pol}
                      </p>
                      <p className="card-text">
                        <strong>Starost:</strong> {dog.Starost} godine
                      </p>
                      <p className="card-text">
                        <strong>
                            {dog.Pol === "Muški" ? "Kastriran:" : "Sterilisana:"}
                        </strong>{" "}
                        {dog.KastriranSterilisan ? "Da" : "Ne"}
                    </p>
                      <p className="card-text">
                        <strong>Rasa:</strong> {dog.Rasa}
                      </p>
                      <a href="#" className="btn btn-primary">
                        Udomi
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
  );
};

export default Udomljavanje;
