import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipe = ({ recipe }) => {

    const { method, ingredients, name, foodurl } = recipe;

    const [selected, setSelected] = useState(false);

    const handleButtonClick = () => {
        if (!selected) {
            
            toast.success("Favourite item !!!", {
                position: toast.POSITION.TOP_CENTER
            });

        } else {
            toast.success("not Favourite!!!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
        setSelected(!selected);
    }




    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={foodurl} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6"><span>Ingredients:</span>
                            {ingredients}
                        </p>
                        <p><span>Method:</span>{method}</p>

                        <button className='mt-3' onClick={handleButtonClick}>{selected ? <FontAwesomeIcon className='text-5xl' icon={faHeart} /> : <FontAwesomeIcon className='text-5xl' icon={faHeartCrack} />} </button>
                        <ToastContainer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;