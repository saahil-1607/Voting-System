import { useState } from "react";
import "../App.css";
import "../styles/ElectionControl.css"
// import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function ElectionControl() {
    const [candidateName , setCandidateName] = useState('');
    const [candidateLogo, setCandidateLogo] = useState('');
    const [candidate, setCandidate] = useState([]);
    const navigate = useNavigate();

    const addCandidate = async () => {}
    
    const startElection = async () => {
        navigate('/authentication')
    }

    return (
        <div className="body min-h-screen">
            <div className="flex justify-center">
                {/* <Sidebar /> */}
                <div className="flex-1 p-8 min-h-screen p-4 md:p-8 max-w-4xl">

                    {/* <!-- Admin Controls --> */}
                    <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Election Controls</h2>
                        <div className="flex flex-col md:flex-row gap-4">
                            <button id="startElection"
                                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                                <a onClick={startElection}><i className="bi bi-play-fill"></i> Start Election</a>
                            </button>
                            <button id="endElection"
                                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                                <i className="bi bi-stop-fill"></i> End Election
                            </button>
                            <div id="electionStatus" className="bg-gray-100 px-6 py-2 rounded-lg flex items-center">
                                Status: <span className="ml-2 font-semibold text-gray-700">Not Started</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Election Details Form --> */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700 w-[calc(100vw-64rem)]">Election Details</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Election Title</label>
                                <input type="text" id="electionTitle"
                                    className="w-full p-2 rounded-md focus:ring-2 focus:ring-blue-500 bg-white" />
                            </div>
                            <div className="flex flex-col md:grid-cols-2 gap-4 w-full">
                                <div className="flex justify-between w-full gap-4">
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date & Time</label>
                                        <input type="datetime-local" id="startTime"
                                            className="w-full p-2 bg-white rounded-md focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                    <div className="w-1/2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date & Time</label>
                                        <input type="datetime-local" id="endTime"
                                            className="w-full p-2 bg-white rounded-md focus:ring-2 focus:ring-blue-500" />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Manage Candidates</h3>
                                    <div className="flex gap-2 mb-4">
                                        <input type="text" name="candidateName" onChange={(e) => setCandidateName(e.target.value)} id="candidateName" placeholder="Enter candidate name"
                                            className="flex-1 p-2 bg-white w-full rounded-md focus:ring-2 focus:ring-blue-500" />
                                        <input type="file" id="candidateLogo" name="candidateLogo" onChange={(e) => setCandidateLogo(e.target.value)} className=" p-2 bg-white rounded-md focus:ring-2 focus:ring-blue-500" />
                                        <button onClick={addCandidate}
                                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add
                                            Candidate</button>
                                    </div>
                                    <ul id="candidatesList" className="space-y-2">
                                        {/* <!-- Candidates will be added here dynamically --> */}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6">
                                <button onClick="saveElection()"
                                    className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Save Election
                                    Settings</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Election Status Display --> */}
                    <div id="electionStatus" className="hidden mb-8 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-lg font-semibold mb-2 text-gray-700">Current Election Status</h2>
                        <div id="electionInfo" className="space-y-2 text-gray-600"></div>
                    </div>

                    {/* <!-- Voting Section --> */}
                    <div id="votingSection" className="hidden">
                        <h2 className="text-lg font-semibold mb-4 text-gray-700">Cast Your Vote</h2>
                        <div className="space-y-4">
                            <div className="space-y-2" id="candidatesList">
                                <div className="flex items-center">
                                    <input type="radio" name="candidate" value="candidate1" id="candidate1" className="mr-2" />
                                    <label for="candidate1">John Doe</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="candidate" value="candidate2" id="candidate2" className="mr-2" />
                                    <label for="candidate2">Jane Smith</label>
                                </div>
                                <div className="flex items-center">
                                    <input type="radio" name="candidate" value="candidate3" id="candidate3" className="mr-2" />
                                    <label for="candidate3">Mike Johnson</label>
                                </div>
                            </div>
                            <button onClick="castVote()"
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors">
                                Submit Vote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElectionControl;
