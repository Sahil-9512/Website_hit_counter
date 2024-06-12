const customerVisits = new Map();
const websiteVisits = new Map();

function visitWebsite(customerId, deviceId, websiteId) {
    if (!customerVisits.has(customerId)) {
        customerVisits.set(customerId, new Map());
    }
    if (!customerVisits.get(customerId).has(websiteId)) {
        customerVisits.get(customerId).set(websiteId, new Set());
    }
    const devices = customerVisits.get(customerId).get(websiteId);
    if (!devices.has(deviceId)) {
        devices.add(deviceId);

        if (!websiteVisits.has(websiteId)) {
            websiteVisits.set(websiteId, new Set());
        }
        websiteVisits.get(websiteId).add(customerId);
    }
}

function getWebsiteVisitCountForCustomer(customerId, websiteId) {
    if (customerVisits.has(customerId) && customerVisits.get(customerId).has(websiteId)) {
        return customerVisits.get(customerId).get(websiteId).size;
    }
    return 0;
}

function getOverallWebsiteHitCount(websiteId) {
    if (websiteVisits.has(websiteId)) {
        return websiteVisits.get(websiteId).size;
    }
    return 0;
}

module.exports = {
    visitWebsite,
    getWebsiteVisitCountForCustomer,
    getOverallWebsiteHitCount
};
