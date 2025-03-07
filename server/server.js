const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const Admin = require("./models/Admin");
const Voter = require("./models/Voter");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ProjectDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Admin Database Code Setup
app.post('/api/admin-signin', async (req, res) => {
    const { adminID, password, fingerprintID } = req.body;
    try {
        const existingAdmin = await Admin.findOne({ adminID });
        if (existingAdmin) {
            return res.status(400).json({ success: false, message: 'Admin already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedFingerprintID = await bcrypt.hash(fingerprintID, 10);
        const newAdmin = new Admin({ adminID, password: hashedPassword, fingerprintID: hashedFingerprintID });
        await newAdmin.save();

        res.json({ success: true, message: 'Admin registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Server Error ${error}` });
    }
});

app.post('/api/admin-login', async (req, res) => {
    const { adminID, password, fingerprintID } = req.body;
    try {
        console.log(fingerprintID);
        const admin = await Admin.findOne({ adminID });
        if (!admin) {
            return res.status(404).json({ success: false, message: 'Admin Not Found' });
        }

        const hashedPassword = await bcrypt.compare(password, admin.password);
        if (!hashedPassword) return res.status(400).json({ success: false, message: 'Invalid Details' });

        const hashedFingerprintID = await bcrypt.compare(fingerprintID, admin.fingerprintID)
        if (!hashedFingerprintID) return res.status(400).json({ success: false, message: 'Fingerprint Did Not Match' });

        res.json({ success: true, message: 'Admin verified successfully'});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Server Error ${error}` });
    }
});

// Voter Database Code Setup
app.post('/api/voter-signin', async (req, res) => {
    const { voterID, voterfingerprintID } = req.body;
    try {
        const existingUser = await Voter.findOne({ voterID });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'Voter already exists' });
        }

        const hashedFingerprintID = await bcrypt.hash(voterfingerprintID, 10);
        const newVoter = new Voter ({ voterID, voterfingerprintID: hashedFingerprintID });
        await newVoter.save();

        res.json({ success: true, message: 'Voter registered successfully' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Server Error ${error}` });
    }
});

app.post('/api/voter-login', async (req, res) => {
    const { voterID, voterfingerprintID } = req.body;
    try {
        const voter = await Voter.findOne({ voterID });
        if (!voter) {
            return res.status(404).json({ success: false, message: 'Voter Not Found' });
        }
       
        const hashedFingerprintID = await bcrypt.compare(voterfingerprintID, voter.voterfingerprintID)
        if (!hashedFingerprintID) return res.status(400).json({ success: false, message: 'Fingerprint Did Not Match' });

        res.json({ success: true, message: 'Voter verified successfully'});
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: `Server Error ${error}` });
    }
});

app.listen(5000, () => {
    console.log(`Server is running on port ${port}`);
})