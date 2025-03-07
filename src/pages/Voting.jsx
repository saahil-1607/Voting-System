import { useState } from "react";
import "../App.css";
import "../styles/Voting.css"

function Voting() {
    return (
        <div className="body min-h-screen font-['Inter']">
            <div class="container mx-auto px-4 py-8 max-w-2xl">
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h1 class="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-800">
                        Select Your Representative
                    </h1>

                    <form id="voteForm" class="space-y-6">
                        <div class="space-y-4">
                            {/* <!-- Representative options will be dynamically added here --> */}
                        </div>

                        <button type="submit"
                            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
                               hover:bg-blue-700 transition duration-300 ease-in-out
                               disabled:bg-gray-400 disabled:cursor-not-allowed">
                            Submit Vote
                        </button>
                    </form>

                    {/* <!-- Result Modal --> */}
                    <div id="resultModal" class="hidden fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div class="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
                            <h2 class="text-xl font-semibold mb-4" id="modalMessage"></h2>
                            <button onclick="closeModal()"
                                class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg 
                                   hover:bg-blue-700 transition duration-300 ease-in-out">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voting;
