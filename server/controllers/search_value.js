const collections = require("../modals/Collections")

exports.getObjectsByRegion = async (req, res) => {
    const { region } = req.params;
    //console.log(region,"region is.....")
  
    try {
      
      const objectsInRegion = await collections.find({ region });
  
      return res.status(200).json({ 
        data: objectsInRegion,
        success: true,
        message: `Objects in region: ${region}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsByRegion',
      });
    }
  };
  exports.getObjectsByLikelihood = async (req, res) => {
    const { likelihood } = req.params;
  
    try {
      
      const objectsByLikelihood = await collections.find({ likelihood });
  
      return res.status(200).json({ 
        data: objectsByLikelihood,
        success: true,
        message: `Objects with likelihood: ${likelihood}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsByLikelihood',
      });
    }
  };
  exports.getObjectsBySource = async (req, res) => {
    const { source } = req.params;
  
    try {
      const objectsBySource = await collections.find({ source });
  
      return res.status(200).json({ 
        data: objectsBySource,
        success: true,
        message: `Objects with source: ${source}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsBySource',
      });
    }
  };
  
  exports.getObjectsByPestle = async (req, res) => {
    const { pestle } = req.params;
  
    try {
      const objectsByPestle = await collections.find({ pestle });
  
      return res.status(200).json({ 
        data: objectsByPestle,
        success: true,
        message: `Objects with pestle: ${pestle}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsByPestle',
      });
    }
  };
  
  exports.getObjectsByStartYear = async (req, res) => {
    const { start_year } = req.params;
  
    try {
      const objectsByStartYear = await collections.find({ start_year });
  
      return res.status(200).json({ 
        data: objectsByStartYear,
        success: true,
        message: `Objects with start year: ${start_year}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsByStartYear',
      });
    }
  };
  
  exports.getObjectsByEndYear = async (req, res) => {
    const { end_year } = req.params;
  
    try {
      const objectsByEndYear = await collections.find({ end_year });
  
      return res.status(200).json({ 
        data: objectsByEndYear,
        success: true,
        message: `Objects with end year: ${end_year}`,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({  
        success: false,
        message: 'Error in getObjectsByEndYear',
      });
    }
  };
  exports.getObjectByCountrys = async (req, res) => {
    const { country } = req.params;
    try {
      const regex = new RegExp(country, 'i'); // 'i' for case-insensitive
      console.log(country)
      const objectByCountry = await collections.find({country: regex});
      return res.status(200).json({ 
        data: objectByCountry,
        success: true,
        message: "all countrys",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({  
        success: false,
        message: 'come in catch block in showAllCollection',
      });
    }
  };
  
  exports.getObjectByTopic = async (req, res) => {
    const { topic } = req.params;
    try {
      const objectBytopics = await collections.find({topic});
      return res.status(200).json({ 
        data: objectBytopics,
        success: true,
        message: "all topics",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({  
        success: false,
        message: 'come in catch block in showAllCollection',
      });
    }
  };
  
  exports.getObjectBySector = async (req, res) => {
    try {
        const { sector } = req.params;
      const objectBySectors = await collections.find({ sector });
      return res.status(200).json({ 
        data: objectBySectors,
        success: true,
        message: "all sector",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({  
        success: false,
        message: 'come in catch block in showAllCollection',
      });
    }
  };
  