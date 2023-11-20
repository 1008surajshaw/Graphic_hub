const express = require('express');
const router = express.Router();
const { getObjectsByRegion,
        getObjectsByLikelihood,
        getObjectsBySource,
        getObjectsByPestle,
        getObjectsByStartYear,
         getObjectsByEndYear,
         getObjectByCountrys,
         getObjectByTopic,
         getObjectBySector
        } = require('../controllers/search_value');

router.get('/getobjectsbyregion/:region', getObjectsByRegion);
router.get('/getobjectsbylikelihood/:likelihood', getObjectsByLikelihood);
router.get('/getobjectsbysource/:source', getObjectsBySource);
router.get('/getobjectsbypestle/:pestle', getObjectsByPestle);
router.get('/getobjectsbystartyear/:start_year', getObjectsByStartYear);
router.get('/getobjectsbyendyear/:end_year', getObjectsByEndYear);
router.get('/getobjectsbycountry/:country', getObjectByCountrys);
router.get('/getobjectsbytopic/:topic', getObjectByTopic);
router.get('/getobjectsbysector/:sector', getObjectBySector);

module.exports = router;
