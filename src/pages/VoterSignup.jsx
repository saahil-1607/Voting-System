import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/VoterSignup.css"
import { BsFingerprint } from "react-icons/bs";
import { GoShieldLock } from "react-icons/go";
import { BsBox } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

function VoterSignup() {
    const [voterID, setVoterID] = useState('');
    const [voterfingerprintID, setvoterFingerprintID] = useState('');
    const [error, setError] = useState('');
    const [notification, setNotification] = useState('');
    const [isFetchingFingerprint, setIsFetchingFingerprint] = useState(false);
    const [fetchActivity, setFetchActivity] = useState(false);
    const navigate = useNavigate();

    const handleFetchFingerprint = async () => {
        setError('');
        setIsFetchingFingerprint(true);

        try {
            console.log("Running Fingerprint Fetching");
            const response = await axios.get('http://localhost:5001/api/verify-fingerprint');
            setvoterFingerprintID(response.data.fingerprint);
            setFetchActivity(true);
        } catch (error) {
            setError('Failed to fetch fingerprint. Please try again.');
        } finally {
            setIsFetchingFingerprint(false);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setNotification('');

        try {
            const response = await axios.post('http://localhost:5000/api/voter-login', {
                voterID,
                voterfingerprintID,
            });
            if (response.status === 200) {
                setNotification('Voter verified successfully!');
                navigate('/vote', { state: { voterID } });
                setError('');
            } else {
                setError('Voter Not Found.')
            }
        } catch (err) {
            setError('Server Error. Please try again later.');
            console.log(err);
        }
    };

    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-center min-h-screen">
                {/* <!-- Left Section - Login Form --> */}
                <div className="glass-effect p-8 rounded-lg shadow-xl w-full max-w-md mx-4 mb-8 md:mb-0 card-border">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-500 mb-2">Secure E-Voting System</h1>
                        <p className="text-gray-500">Biometric Authentication & Blockchain</p>
                    </div>

                    <form id="loginForm" className="space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label className="block text-gray-500 mb-2"><b>Voter ID</b></label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-black border-opacity-30 focus:border-blue-500 focus:outline-none text-black placeholder-gray-300"
                                required
                                name="voterID"
                                value={voterID}
                                onChange={(e) => setVoterID(e.target.value)}
                                placeholder="Enter your Voter ID"
                            />
                        </div>
                        <div className="text-center">
                            <p className="text-black text-sm mb-4">
                                <a onClick={() => { setvoterFingerprintID(null); setFetchActivity(false); }} className="underline text-blue-600 cursor-pointer">Reset Fingerprint</a>
                            </p>
                            <button
                                type="submit"
                                id="biometricBtn"
                                onClick={handleFetchFingerprint}
                                disabled={isFetchingFingerprint}
                                className="fingerprint-scanner1 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                {
                                    fetchActivity ?
                                        <FaCheckCircle className="text-4xl text-green-600" />
                                        :
                                        <BsFingerprint className="text-4xl text-black">
                                            <input
                                                name="FingerprintInput"
                                                type="text"
                                                placeholder="Fingerprint (Identifier)"
                                                value={voterfingerprintID}
                                                onChange={(e) => setvoterFingerprintID(e.target.value)}
                                                required
                                                readOnly
                                                className="text-transparent"
                                            />
                                        </BsFingerprint>
                                }
                            </button>
                        </div>
                        <a href="voting.html">
                            <button type="submit" className="w-full bg-white-600 text-black border border-blue py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300">
                                Login
                            </button></a>
                    </form>


                </div>

                {/* <!-- Right Section - Features --> */}
                <div className="w-full max-w-md mx-4">
                    <div className="space-y-6">
                        <div className="glass-effect p-6 rounded-lg card-border">
                            <div className="flex items-center mb-4">
                                <GoShieldLock className="text-3xl text-green-400 mr-4" />
                                <h3 className="text-xl font-semibold text-gray-500">Secure Authentication</h3>
                            </div>
                            <p className="text-gray-500">Multi-factor authentication with biometric verification ensures maximum security.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg card-border">
                            <div className="flex items-center mb-4">
                                <BsBox className="text-3xl text-blue-400 mr-4" />
                                <h3 className="text-xl font-semibold text-gray-500">Blockchain Technology</h3>
                            </div>
                            <p className="text-gray-500">Immutable and transparent voting records using advanced blockchain.</p>
                        </div>

                        <div className="glass-effect p-6 rounded-lg card-border">
                            <div className="flex items-center mb-4">
                                <BsGraphUp className="text-3xl text-purple-400 mr-4" />
                                <h3 className="text-xl font-semibold text-gray-500">Real-time Analytics</h3>
                            </div>
                            <p className="text-gray-500">Monitor voting progress and results with detailed analytics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoterSignup;
