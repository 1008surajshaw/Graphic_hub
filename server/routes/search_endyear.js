const express = require("express");
const router = express.Router();

const {
    showAllCollection,
     getAllRegions,
     getCollectionById,
     getAllIntensity,
     getAllRelevances,
     getAllLikelihoods,
     getAllSector,
     getAllTopic,
     getAllCountrys,
     getAllEndYear,
     getAllStartYear,
     getAllPestle,
     getAllSource,
     getCollectionBySWOT
} = require("../controllers/search_endyear");

router.get("/getdata",showAllCollection);
router.get("/getcollection/:id",getCollectionById);


router.get("/getregion",getAllRegions);
router.get("/getsector",getAllSector);
router.get("/gettopic",getAllTopic);
router.get("/getcountry",getAllCountrys);
router.get("/getendyear",getAllEndYear);
router.get("/getstartyear",getAllStartYear);
router.get("/getpest",getAllPestle);
router.get("/getsource",getAllSource);
router.get("/getswot",getCollectionBySWOT)



//**********************************************// 
// *****************swot************************//
//**********************************************// 

router.get("/getintensity",getAllIntensity);
router.get("/getrelevances",getAllRelevances);
router.get("/getlikelihood",getAllLikelihoods);

//**********************************************// 



module.exports = router;