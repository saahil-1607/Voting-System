import { useState } from "react";
import "../styles/Dashboard.css";
import Sidebar from "../components/Sidebar";
import { BsFillGearFill } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";

function Dashboard() {
    return (
        <div className="body min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 ml-64 p-8">
                    <div className="max-w-7xl mx-auto">
                        {/* <!-- Header --> */}
                        <header className="flex start-between, items-center mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800">Elections 2024</h2>
                                <p className="text-gray-500">Live Monitoring Dashboard</p>
                            </div>
                        </header>

                        {/* <!-- Stats Grid --> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="glass-effect p-6 rounded-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-100 rounded-lg">
                                        <BsFillGearFill className="text-blue-600 text-xl" />
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Live
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">3,721</h3>
                                <p className="text-sm text-gray-500">Registered Voters</p>
                                <div className="mt-2 flex items-center text-green-500 text-sm">
                                    <i className="bi bi-arrow-up mr-1"></i>
                                    <FaArrowUp className="mr-1" />
                                    <span>15% vs last election</span>
                                </div>
                            </div>

                            <div className="glass-effect p-6 rounded-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-purple-100 rounded-lg">
                                        <BsCheck2Circle className="text-purple-600 text-xl" />
                                    </div>
                                    <div id="liveVoteCount" className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                        Updating...
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">2,845</h3>
                                <p className="text-sm text-gray-500">Votes Cast</p>
                                <div className="mt-2">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div className="bg-purple-600 rounded-full h-2 w-[76%]"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-effect p-6 rounded-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-amber-100 rounded-lg">
                                        <BsClockHistory className="text-amber-600 text-xl" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800" id="countdown">05:23:14</h3>
                                <p className="text-sm text-gray-500">Time Remaining</p>
                                <div className="mt-2 text-amber-500 text-sm">
                                    Closes at 6:00 PM Today
                                </div>
                            </div>

                            <div className="glass-effect p-6 rounded-xl">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-green-100 rounded-lg">
                                        <BsShieldCheck className="text-green-600 text-xl" />
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Secure
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800">100%</h3>
                                <p className="text-sm text-gray-500">Verification Rate</p>
                                <div className="mt-2 text-green-500 text-sm">
                                    All systems operational
                                </div>
                            </div>
                        </div>

                        {/* <!-- Charts & Biometric Section --> */}
                        <div className="flex h-[90vh] mb-4 w-100rem">
                            {/* <!-- Voting Progress Chart --> */}
                            <div className="glass-effect p-6 rounded-xl h-full w-full">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Voting Progress</h3>
                                <canvas id="votingProgress" height="h-full" width="w-full" ></canvas>
                            </div>
                        </div>

                        {/* <!-- Recent Activity --> */}
                        <div className="glass-effect p-6 rounded-xl">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
                            <div className="space-y-4" id="activityFeed">
                                {/* <!-- Activity items will be dynamically added here --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
