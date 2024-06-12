const express = require('express');
const router = express.Router();
const { visitWebsite, getWebsiteVisitCountForCustomer, getOverallWebsiteHitCount } = require('../fixedandmainfile.js/counter');

router.post('/visit', (req, res) => {
    const { customerId, deviceId, websiteId } = req.body;
    visitWebsite(customerId, deviceId, websiteId);
    res.send('Visit successfully tracked');
});

router.get('/customer-visit-count', (req, res) => {
    const { customerId, websiteId } = req.query;
    const count = getWebsiteVisitCountForCustomer(customerId, websiteId);
    res.send(`Customer ${customerId} visited website ${websiteId} ${count} times`);
});

router.get('/overall-visit-count', (req, res) => {
    const { websiteId } = req.query;
    const count = getOverallWebsiteHitCount(websiteId);
    res.send(`Website ${websiteId} has ${count} overall visits`);
});

module.exports = router;
