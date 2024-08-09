// Container.jsx
import React from "react";

const Container = () => (
    <main className="pt-16"> {/* Adds padding top for fixed header */}
        <section id="home" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">Shorten Your URLs with Ease</h1>
                <p className="mt-4 text-lg">Paste your long URL and get a short, manageable link instantly.</p>
                <div className="mt-8 flex justify-center">
                    <input type="text" placeholder="Paste your URL here" className="px-4 py-2 rounded-l-lg" />
                    <button className="bg-yellow-500 px-6 py-2 rounded-r-lg font-bold">Shorten</button>
                </div>
            </div>
        </section>

        <section id="features" className="py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold">Features</h2>
                <div className="mt-8 flex flex-wrap justify-around">
                    <div className="w-full sm:w-1/4 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">Custom Short Links</h3>
                            <p>Create custom short URLs to match your brand.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">Analytics</h3>
                            <p>Track clicks and performance of your short links.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">QR Code Generation</h3>
                            <p>Generate QR codes for your short links.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/4 p-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl mb-4">Integrations</h3>
                            <p>Integrate with popular platforms and tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default Container;
