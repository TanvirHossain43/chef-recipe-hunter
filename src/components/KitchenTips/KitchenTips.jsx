import React from 'react';
import photo1 from '../../assets/knife.png'
import photo2 from '../../assets/Pans.jpg'
import photo3 from '../../assets/scale.jpg'
import photo4 from '../../assets/thermometer.jpg'

const KitchenTips = () => {
    return (
        <section>
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Kitchen Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col justify-center items-center">
                            <img src={photo1} alt="Kitchen Tip" className="w-full mb-4 rounded-lg shadow-lg" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Keep your knives sharp</h3>
                            <p className="text-gray-600 text-center"> A sharp knife is essential in the kitchen, not only for safety reasons but also for efficient and precise cutting. You can use a sharpening stone or a honing steel to keep your knives sharp. Sharpening stones are abrasive stones that you use to sharpen the edge of the blade, while honing steels are used to straighten and maintain the edge. It's recommended to sharpen your knives once a year and hone them before each use.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img src={photo3} alt="Kitchen Tip" className="w-full mb-4 rounded-lg shadow-lg" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Use a kitchen scale</h3>
                            <p className="text-gray-600 text-center"> A kitchen scale is a great tool to have in your kitchen, especially if you enjoy baking. Weighing your ingredients can help ensure that your recipes turn out the way they're supposed to. It's much more accurate than measuring with cups and spoons, which can vary depending on how tightly you pack the ingredients.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className=''>
                                <img src={photo2} alt="Kitchen Tip" className="w-auto  mb-4 rounded-lg shadow-lg" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Preheat your pans</h3>
                            <p className="text-gray-600 text-center">Whether you're sautéing, searing, or frying, it's important to preheat your pans before adding your ingredients. Preheating your pan helps to ensure even cooking and prevents sticking. You can test if your pan is hot enough by sprinkling a few drops of water on it – if the water sizzles and evaporates quickly, your pan is ready.</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className=''>
                                <img src={photo4} alt="Kitchen Tip" className="w-full mb-4 rounded-lg shadow-lg h-96" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Use a meat thermometer</h3>
                            <p className="text-gray-600 text-center"> If you're cooking meat, it's important to make sure it's cooked to a safe internal temperature to prevent foodborne illness. Using a meat thermometer can help you achieve this. Different types of meat have different safe internal temperatures, so it's a good idea to look up the specific temperature for the type of meat you're cooking. Simply insert the thermometer into the thickest part of the meat, avoiding any bones or fat, and wait for the temperature to stabilize.</p>
                        </div>
                    </div>
                </div>
            </section>

        </section>

    );
};

export default KitchenTips;