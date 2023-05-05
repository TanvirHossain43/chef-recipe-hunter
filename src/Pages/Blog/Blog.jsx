import React from 'react';
import ReactToPdf from '../../components/Pdf/ReactToPdf';




const Blog = () => {

    const ref = React.createRef()
    const options = {
        unit: 'in',
        format: [6, 20]
    };
    return (


        <div className='w-3/4 mx-auto mt-10 '>
            <ReactToPdf targetRef={ref} filename="blog.pdf" options={options} x={.5} y={.5} scale={0.8}>
                {({ toPdf }) => (
                    <button className='btn mx-auto' onClick={toPdf}>Generate pdf</button>
                )}
            </ReactToPdf>
            <div style={{ width: 600 }} ref={ref}>   <div className='w-3/4 mx-auto mt-10 text-white' >
                <div className='mb-5 bg-slate-700 p-4 rounded-xl'>
                    <h2 className=' font-bold text-lg mb-2'>Differences between uncontrolled and controlled components ?</h2>
                    <p >Controlled components are fully managed by React, while uncontrolled components rely on the internal state of the DOM elements they render. Controlled components are more reliable for managing state and implementing complex UI behavior.</p>
                </div>
                <div className='mb-5 bg-slate-700 p-4 rounded-xl'>
                    <h2 className=' font-bold text-lg mb-2'>How to validate React props using PropTypes? </h2>
                    <p>In React, We can use PropTypes to validate the props passed to a component. PropTypes is a package that allows us to define the types of the props expected by our component and ensure that they are of the correct type.To use PropTypes, you must first install it using npm then we have to write function where have to use PropsTypes to identify is something string or boolean or anything else.</p>
                </div>
                <div className='mb-5 bg-slate-700 p-4 rounded-xl'>
                    <h2 className=' font-bold text-lg mb-2'>Difference between nodejs and express js? </h2>
                    <p>Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It provides a server-side environment for JavaScript code to run, allowing developers to build server-side applications using JavaScript. On the other side ,Express.js is a web framework built on top of Node.js. It provides a set of tools and features for building web applications and APIs, such as routing, middleware, and HTTP request/response handling. Express.js simplifies the process of building web applications with Node.js by providing a clean and concise API for handling web requests and responses.</p>
                </div>
                <div className='mb-5 bg-slate-700 p-4 rounded-xl'>
                    <h2 className=' font-bold text-lg mb-2'>What is a custom hook, and why will you create a custom hook? </h2>
                    <p> Custom hook is a JavaScript function which is used to shared logic function between different components.Custom hooks are created by combining existing hooks or using other JavaScript functionality, such as state, props, and context, to create a new hook that provides a specific functionality. The custom hook can be used just like any other React hook, by calling it from within a functional component</p>
                </div>

            </div>
            </div>
        </div>



    );
};

export default Blog;