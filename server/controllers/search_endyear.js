const mongoose = require("mongoose");
const collections = require("../modals/Collections");

//allcolection
exports.showAllCollection =async(req,res) =>{
    try{
      const collection =await collections.find({});
     return res.status(200).json({
        success:true,
        message:"ok,all collection",
        data:collection,
      })
    }
    catch(error){
      return res.status(500).json({
         success:false,
         message:'come in cath block in showAllCollection',
        })
    }
}
//searchbyId
exports.getCollectionById = async (req, res) => {
  const { id } = req.params;

  try {
    const collection = await collections.findById(id);

    if (!collection) {
      return res.status(404).json({
        success: false,
        message: 'Collection not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: collection,
      message: 'Collection found by ID',
    });
  } catch (error) {
    console.error('Error fetching collection by ID:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};


//allregion
exports.getAllRegions = async (req, res) => {
  try {
    const regions = await collections.distinct('region');
    return res.status(200).json({ 
      data:regions ,
      success:true,
      message:"all region",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};

// all sector
exports.getAllSector = async (req, res) => {
  try {
    const sectors = await collections.distinct('sector');
    return res.status(200).json({ 
      data:sectors ,
      success:true,
      message:"all sector",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//allTopics
exports.getAllTopic = async (req, res) => {
  try {
    const topics = await collections.distinct('topic');
    return res.status(200).json({ 
      data:topics ,
      success:true,
      message:"all topics",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//allcountry
exports.getAllCountrys = async (req, res) => {
  try {
    const countrys = await collections.distinct('country');
    return res.status(200).json({ 
      data:countrys ,
      success:true,
      message:"all countrys",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//end year
exports.getAllEndYear = async (req, res) => {
  try {
    const years = await collections.distinct('end_year');
    return res.status(200).json({ 
      data:years ,
      success:true,
      message:"all end years",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
// start year
exports.getAllStartYear = async (req, res) => {
  try {
    const years = await collections.distinct('start_year');
    return res.status(200).json({ 
      data:years ,
      success:true,
      message:"all end years",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};

//all pest
exports.getAllPestle = async (req, res) => {
  try {
    const pest = await collections.distinct('pestle');
    return res.status(200).json({ 
      data:pest ,
      success:true,
      message:"all end pest",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//all source
exports.getAllSource = async (req, res) => {
  try {
    const sources = await collections.distinct('source');
    return res.status(200).json({ 
      data:sources ,
      success:true,
      message:"all end sources",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
  

//all intensity
exports.getAllIntensity = async (req, res) => {
  try {
    const intensitys = await collections.distinct('intensity');
    return res.status(200).json({ 
      data:intensitys ,
      success:true,
      message:"all end intensitys",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//allrelevence
exports.getAllRelevances = async (req, res) => {
  try {
    const relevances = await collections.distinct('relevance');
    return res.status(200).json({ 
      data:relevances ,
      success:true,
      message:"all end relevances",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
// all likelihood
exports.getAllLikelihoods = async (req, res) => {
  try {
    const likelihoods = await collections.distinct('likelihood');
    return res.status(200).json({ 
      data:likelihoods ,
      success:true,
      message:"all end likelihoods",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({  
      success:false,
      message:'come in cath block in showAllCollection',
     })
  }
};
//all swot
exports.getCollectionBySWOT = async (req, res) => {
  try {
    const thresholdi = 36;
    const thresholdl = 3;
    const thresholdr = 4;

    const filter = {
      $and: [
        { intensity: { $gt: thresholdi } },
        { likelihood: { $gt: thresholdl } },
        { relevance: { $gt: thresholdr } },
      ],
    };
    
    const collection = await collections.find(filter);

    return res.status(200).json({
      success: true,
      data: collection,
      message: 'Collection filtered by threshold criteria',
    });
  } catch (error) {
    console.error('Error fetching collection by threshold criteria:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

