import { useState } from "react";
import "../App.css";
import Sidebar from "../components/Sidebar";
import "../styles/VoteAnalytics.css"

function VoteAnalytics() {
    return (
        <div className="body min-h-screen">
            <div className="flex">
                <Sidebar />
                <div class="flex-1 ml-64 p-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* <!-- Overview Cards --> */}
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="flex justify-between h-16">
                            <div class="flex items-center">
                                <h1 class="text-2xl font-bold text-teal-600">VoteAnalytics</h1>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div class="gradient-card rounded-lg p-6 text-white">
                            <h3 class="text-lg font-semibold mb-2">Total Votes</h3>
                            <p class="text-3xl font-bold">124,567</p>
                            <p class="text-sm mt-2">↑ 12% from previous election</p>
                        </div>
                        <div class="gradient-card rounded-lg p-6 text-white">
                            <h3 class="text-lg font-semibold mb-2">Voter Turnout</h3>
                            <p class="text-3xl font-bold">76.3%</p>
                            <p class="text-sm mt-2">↑ 5% from previous election</p>
                        </div>
                        <div class="gradient-card rounded-lg p-6 text-white">
                            <h3 class="text-lg font-semibold mb-2">Registered Voters</h3>
                            <p class="text-3xl font-bold">163,256</p>
                            <p class="text-sm mt-2">↑ 8% from previous election</p>
                        </div>
                    </div>

                    {/* <!-- Charts Section --> */}
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-white rounded-lg shadow p-6">
                            <h3 class="text-lg font-semibold mb-4">Vote Distribution</h3>
                            <canvas id="voteDistribution"></canvas>
                        </div>
                        <div class="bg-white rounded-lg shadow p-6">
                            <h3 class="text-lg font-semibold mb-4">Demographic Analysis</h3>
                            <canvas id="demographicAnalysis"></canvas>
                        </div>
                    </div>

                    {/* <!-- Detailed Stats --> */}
                    <div class="bg-white rounded-lg shadow p-6">
                        <h3 class="text-lg font-semibold mb-4">Voting Trends by Region</h3>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Votes</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turnout %</th>
                                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trend</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    {/* <!-- Table rows will be dynamically populated --> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoteAnalytics;
