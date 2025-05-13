import React from 'react'

import { TbMathGreater } from "react-icons/tb";

import boat from './assets/boatbeach.png'
import nature from './assets/naturebeach.png'
import naturebeach from './assets/naturebeach2.png'
import beach from './assets/naturebeach3.png'


import CalenderAndFAQSection from './components/CalenderAndFAQSection';


import ItinerarySection from './components/ItinerarySection';



const Activities = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto p-4 md:p-6">
                {/* Tags */}
                <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-2 py-1 rounded">
                        Bestseller
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-sm font-medium px-2 py-1 rounded">
                        Free cancellation
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                    Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour
                </h1>

                {/* Info Row */}
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-2">
                    <span>⭐ 4.8 (269)</span>
                    <span>• Paris, France</span>
                    <span>• 30K+ booked</span>
                    <div className="ml-auto flex space-x-4 text-blue-600 font-medium">
                        <button>Share</button>
                        <button>Wishlist</button>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* Left Large Image */}
                    <div className="md:col-span-2 md:row-span-2">
                        <img
                            src={boat}
                            alt="Main View"
                            className="w-full h-64 md:h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Top Right Small Image */}
                    <div className="md:col-span-2">
                        <img
                            src={nature}
                            alt="Top Right"
                            className="w-full h-48 md:h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Bottom Right Two Images */}
                    <div className="grid grid-cols-2 gap-4 md:col-span-2">
                        <img
                            src={naturebeach}
                            alt="Bottom Left"
                            className="w-full h-40 object-cover rounded-xl"
                        />
                        <div className="relative">
                            <img
                                src={beach}
                                alt="Bottom Right"
                                className="w-full h-40 object-cover rounded-xl"
                            />
                            <button className="absolute bottom-2 right-2 bg-blue-700 text-white px-3 py-1 rounded text-sm">
                                See all photos
                            </button>
                        </div>
                    </div>
                </div>
            </div>






            <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Info Boxes */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        {[
                            { title: "Duration", value: "3 days" },
                            { title: "Group Size", value: "10 people" },
                            { title: "Ages", value: "18-99 yrs" },
                            { title: "Languages", value: "English, Japanese" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="border rounded-xl p-4 text-sm text-gray-600"
                            >
                                <p className="font-semibold mb-1">{item.title}</p>
                                <p>{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tour Overview */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Tour Overview
                        </h2>
                        <p className="text-gray-700 mb-4">
                            The Phi Phi archipelago is a must-visit while in Phuket...
                            <br />
                            Boat transfers, snacks, buffet lunch, snorkeling equipment, and
                            hotel pickup/drop-off are all included.
                        </p>

                        {/* Highlights */}
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">
                            Tour Highlights
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>
                                Experience the thrill of a speedboat to the stunning Phi Phi
                                Islands
                            </li>
                            <li>
                                Be amazed by the variety of marine life in the archipelago
                            </li>
                            <li>
                                Enjoy relaxing in paradise with white sand beaches and azure
                                turquoise water
                            </li>
                            <li>
                                Feel the comfort of a tour limited to 35 passengers
                            </li>
                            <li>
                                Catch a glimpse of wild monkeys around Monkey Beach
                            </li>
                        </ul>
                    </div>

                    {/* What's Included */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            What's included
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                            {[
                                "Beverages, drinking water, morning tea and buffet lunch",
                                "Local taxes",
                                "Hotel pickup and drop-off by air-conditioned minivan",
                                "InsuranceTransfer to a private pier",
                                "Soft drinks",
                                "Tour Guide",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                    <span className="w-3 h-3 mt-1 bg-green-300 rounded-full"></span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                            {["Towel", "Tips", "Alcoholic Beverages"].map((item, i) => (
                                <div key={i} className="flex items-start space-x-2">
                                    <span className="w-3 h-3 mt-1 bg-red-200 rounded-full"></span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="w-full lg:w-auto">
                    <div className="border rounded-2xl p-6 shadow-md space-y-6">
                        <div>
                            <p className="text-sm text-gray-500">From</p>
                            <p className="text-2xl font-bold text-gray-800">$1,200</p>
                        </div>

                        <div className="space-y-2">
                            <div className="border p-4 rounded-xl">
                                <p className="font-medium text-sm text-gray-600">From</p>
                                <p className="text-gray-700 text-sm">February 05 ~ March 14</p>
                            </div>
                            <div className="border p-4 rounded-xl">
                                <p className="font-medium text-sm text-gray-600">Time</p>
                                <p className="text-gray-700 text-sm">Choose time</p>
                            </div>
                        </div>

                        {/* Tickets */}
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-800">Tickets</h4>
                            {[
                                { type: "Adult (18+ years)", price: "$282.00", qty: 3 },
                                { type: "Youth (13–17 years)", price: "$168.00", qty: 2 },
                                { type: "Children (0–12 years)", price: "$80.00", qty: 4 },
                            ].map((ticket, i) => (
                                <div key={i} className="flex justify-between text-sm py-1">
                                    <span>
                                        {ticket.type} <span className="text-gray-500">{ticket.price}</span>
                                    </span>
                                    <span className="text-gray-700">{ticket.qty}</span>
                                </div>
                            ))}
                        </div>

                        {/* Extras */}
                        <div>
                            <h4 className="font-semibold mb-2 text-gray-800">Add Extra</h4>
                            <div className="space-y-2 text-sm">
                                <label className="flex justify-between items-center">
                                    <span>
                                        <input type="checkbox" className="mr-2" />
                                        Add Service per booking
                                    </span>
                                    <span>$40</span>
                                </label>
                                <label className="flex justify-between items-start">
                                    <span>
                                        <input type="checkbox" className="mr-2" />
                                        Add Service per person
                                        <div className="text-xs text-gray-500">
                                            Adult: $17.00 - Youth: $14.00
                                        </div>
                                    </span>
                                    <span>$40</span>
                                </label>
                            </div>
                        </div>

                        {/* Total & Button */}
                        <div className="flex justify-between font-semibold text-gray-800 text-lg">
                            <span>Total:</span>
                            <span>$530.00</span>
                        </div>
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>





            <ItinerarySection />


            <CalenderAndFAQSection />





        </>
    )
}

export default Activities
