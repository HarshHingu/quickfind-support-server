// const express = require('express');
import express from 'express';
import runComparisonWithlocation  from './scrapers/withlocation/index.js';
import runComparisonWithoutLocation from './scrapers/withoutlocation/index.js';

// server.js - simple Express server with a GET route

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/compare/withoutlocation', async (req, res) => {
    //Get the searchkeyword from query params
    const searchKeyword = req.query.searchkeyword;
    console.log("Received search keyword:", searchKeyword);
    if(!searchKeyword) {
        return res.status(400).json({ error: 'Missing searchkeyword query parameter' });
    }
    const result = await runComparisonWithoutLocation(searchKeyword);
    return res.json(result);

});

app.get('/api/compare/withlocation', async (req, res) => {
    //Get the searchkeyword from query params
    const searchKeyword = req.query.searchkeyword;
    const location = req.query.location;
    console.log("Received search keyword:", searchKeyword);
    if(!searchKeyword || !location) {
        return res.status(400).json({ error: 'Missing searchkeyword or location query parameter' });
    }
    const result = await runComparisonWithlocation(searchKeyword, location);
    return res.json(result);

});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});