const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { upload } = require('../services/file-upload.service');
const stuser = require('../models/stuser');
const FundUser = require('../models/fundUser');

const router = Router();

router.post('/fundrequest', async (req, res) => {
    const { email, identity, amount, whyneed } = req.body;

    try {
        // Check if the email exists in the 'stuser' collection
        const userExists = await stuser.exists({ email });

        if (!userExists) {
            return res.status(400).json({ error: 'User with this email does not exist.' });
        }

        // If email exists, proceed with saving the fund request
        const newFundUser = new FundUser({
            email,
            identity,
            amount,
            whyneed,
        });

        const result = await newFundUser.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
