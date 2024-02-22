import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView, removeGptMovieResult } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeGptMovieResult());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleLogoClick = () => {
    if (showGptSearch === true) dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeGptMovieResult());
        navigate("/");
      }
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        onClick={handleLogoClick}
        className="w-44 mx-auto md:mx-0 hover:cursor-pointer"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex justify-between md:flex-row items-center p-0">
          {showGptSearch && (
            <select
              className="p-1 m-2 bg-gray-900 text-white"
              onChange={handleChangeLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-1 m-2 text-white rounded-lg"
            onClick={handleGPTSearchClick}
            title={showGptSearch ? "Home" : "GPT Search"}
          >
            {showGptSearch ? (
              <FontAwesomeIcon icon={faHome} />
            ) : (
              <FontAwesomeIcon icon={faSearch} />
            )}
          </button>
          <img
            className="hidden md:block w-12 h-12 mb-4 ml-1"
            src={user?.photoURL}
            alt="userIcon"
          />
          <button
            className="font-bold text-gray-200 text-md p-1 ml-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
