import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/chicken-nugget-parm-casserole-1672785083.jpg?crop=1.00xw:0.750xh;0,0.250xh&resize=1200:*")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5 text-2xl">This the place where you can find the best chefs in India and the poupular foods of india and also some tips to be safe in kitchen.....</p>
                        <button className="btn btn-primary">WithOut any delay give a look!!!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;