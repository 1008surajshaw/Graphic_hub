// regions
// export const regions = [
//     { id: 1, name: "Africa" },
//     { id: 2, name: "Asia" },
//     { id: 3, name: "Central Africa" },
//     { id: 4, name: "Central America" },
//     { id: 5, name: "Central Asia" },
//     { id: 6, name: "Eastern Africa" },
//     { id: 7, name: "Eastern Asia" },
//     { id: 8, name: "Eastern Europe" },
//     { id: 9, name: "Europe" },
//     { id: 10, name: "Northern Africa" },
//     { id: 11, name: "Northern America" },
//     { id: 12, name: "Northern Europe" },
//     { id: 13, name: "Oceania" },
//     { id: 14, name: "South America" },
//     { id: 15, name: "South-Eastern Asia" },
//     { id: 16, name: "Southern Africa" },
//     { id: 17, name: "Southern Asia" },
//     { id: 18, name: "Southern Europe" },
//     { id: 19, name: "Western Africa" },
//     { id: 20, name: "Western Asia" },
//     { id: 21, name: "Western Europe" },
//     { id: 22, name: "World" },
//     { id: 23, name: "world" },
//   ];
  

 

export const sectors = [
  { id: 1, type: "technologys", name: ["Aerospace & defence", "Automotive", "Manufacturing", "Information Technology", "Security"] },
  { id: 2, type: "constructions", name: ["Construction","Tourism & hospitality","Transport" ] },
  { id: 3, type: "retail", name: ["Retail" ,"Media & entertainment","Healthcare","Food & agriculture" ] },
  { id: 4, type: "environment", name: ["Environment","Energy","Water"] },
  { id: 5, type: "goverments", name: ["Financial services","Government","Support services"] },
  
  
];


export const clusteredDatatopic = [
    { id: 1, name: "Economic", contains: ["economic", "economic growth", "economy", "finance", "investment", "market", "money", "revenue", "risk", "wealth"] },
    { id: 2, name: "Energy", contains: ["energy", "electricity", "emission", "export", "gas", "gasoline", "oil", "peak oil", "power", "shale gas"] },
    { id: 3, name: "Environment", contains: ["aquaculture", "biofuel", "carbon", "climate", "climate change", "coal", "consumer", "consumption", "crisis", "food", "fossil fuel", "fracking", "greenhouse gas", "plastic", "pollution", "water"] },
    { id: 4, name: "Technology", contains: ["3D", "artificial intelligence", "communication", "data", "gamification", "information", "infrastructure", "software", "technology"] },
    { id: 5, name: "Political", contains: ["Washington", "administration", "brexit", "election", "government", "politics", "terrorism", "war"] },
    { id: 6, name: "Transportation", contains: ["car", "factory", "transport", "transportation", "vehicle"] },
    { id: 7, name: "Industry", contains: ["building", "industry", "manufacturing", "material", "production", "resource"] },
    { id: 8, name: "Climate", contains: ["change", "city", "ice", "storm", "weather"] },
    { id: 9, name: "Social", contains: ["clothing", "consumer", "demand", "healthcare", "population", "tourist", "trade", "work", "worker", "workforce"] },
    { id: 10, name: "Security", contains: ["security"] },
    { id: 11, name: "Agriculture", contains: ["agriculture", "farm"] },
    { id: 12, name: "Science", contains: ["biofuel", "data", "electricity", "energy", "factory", "information", "nuclear", "power", "technology"] },
    { id: 13, name: "Global Issues", contains: ["asylum", "climate change", "crisis", "demand", "fracking", "greenhouse gas", "pollution", "shortage", "terrorism", "war"] },
  ];

 
export const years_data = [
    {"id": 1, name: "2016"},
    {"id": 2, name: "2017"},
    {"id": 3, name: "2018"},
    {"id": 4, name: "2019"},
    {"id": 5, name: "2020"},
    {"id": 6, name: "2021"},
    {"id": 7, name: "2022"},
    {"id": 8, name: "2024"},
    {"id": 9, name: "2025"},
    {"id": 10, name: "2026"},
    {"id": 11, name: "2027"},
    {"id": 12, name: "2028"},
    {"id": 13, name: "2030"},
    {"id": 14, name: "2034"},
    {"id": 15, name: "2035"},
    {"id": 16, name: "2036"},
    {"id": 17, name: "2040"},
    {"id": 18, name: "2041"},
    {"id": 19, name: "2046"},
    {"id": 20, name: "2050"},
    {"id": 21, name: "2051"},
    {"id": 22, name: "2055"},
    {"id": 23, name: "2060"},
    {"id": 24, name: "2126"},
    {"id": 25, name: "2200"}
]
export const start_data = [
  {"id": 1, name: "2016"},
  {"id": 2, name: "2017"},
  {"id": 3, name: "2018"},
  {"id": 4, name: "2019"},
  {"id": 5, name: "2020"},
  {"id": 6, name: "2021"},
  {"id": 7, name: "2022"},
  {"id": 8, name: "2025"},
  {"id": 9, name: "2028"},
  {"id": 10, name: "2030"},
  {"id": 11, name: "2035"},
  {"id": 12, name: "2040"},
  {"id": 13, name: "2050"}
]

export const clusteredCountries = [
    { 
        id: 1, 
        continent: "Africa",
        name: ["Africa","Central Africa","Eastern Africa","Northern Africa","Southern Africa","Western Africa"],
    },
    
    { 
        id: 2, 
        continent: "Asia",
        name: ["Asia","Central Asia","Eastern Asia","Southern Asia","South-Eastern Asia","Western Asia"] },
    
    { 
        id: 3, 
        continent: "North America",
        name: ["Central America","Northern America"]  
    },

    {   id: 4, 
        continent: "Oceania" ,
        name: ["Oceania"], 
    },
    { 
        id: 5, 
        continent: "Europe",
        name: ["Europe","Eastern Europe","Northern Europe","Southern Europe","Western Europe"] 
    },

    { 
        id: 6, 
        continent: "South America",
        name: ["South America"] 
    },
  ];
  
 export const countriesData = [
    { id: 1, continent: "Africa", name: ["Algeria", "Angola", "Burkina Faso", "Gabon", "Ghana", "Liberia", "Libya", "Mali", "Morocco", "Niger", "Nigeria", "South Africa"] },
    { id: 2, continent: "Asia", name: ["China", "India", "Indonesia", "Iran", "Iraq", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Lebanon", "Malaysia", "Pakistan", "Qatar", "Saudi Arabia", "Syria", "Turkey", "United Arab Emirates"] },
    { id: 3, continent: "Europe", name: ["Austria", "Cyprus", "Denmark", "Estonia", "Germany", "Greece", "Hungary", "Norway", "Poland", "Russia", "Spain", "Ukraine", "United Kingdom"] },
    { id: 4, continent: "North America", name: ["Belize", "Canada", "Mexico", "United States of America"] },
    { id: 5, continent: "Oceania", name: ["Australia"] },
    { id: 6, continent: "South America", name: ["Argentina", "Brazil", "Colombia", "Venezuela"] }
  ];
  
  

export const pestleData = [
    { id: 1, name: "Economic" },
    { id: 2, name: "Environmental" },
    { id: 3, name: "Healthcare" },
    { id: 4, name: "Industries" },
    { id: 5, name: "Lifestyles" },
    { id: 6, name: "Organization" },
    { id: 7, name: "Political" },
    { id: 8, name: "Social" },
    { id: 9, name: "Technological" },
  ];
  
  // cluster1.js

export const cluster1 = [
    { id: 1, name: "Technology and Innovation", data: ["3D Printing Progress", "Bloomberg New Energy Finance", "BBC News Technology", "Azonano"] },
    { id: 2, name: "Bioenergy and Congress", data: ["4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE", "Biofuels Digest"] },
    { id: 3, name: "Agriculture and Environment", data: ["AgWeb - The Home Page of Agriculture", "AllAfrica", "Arangkada Philippines", "Blue and Green Tomorrow", "BorneoPost Online"] },
    { id: 4, name: "Government and Defense", data: ["Australian Government", "Australian Government Department of Defence"] },
    { id: 5, name: "Health and Science", data: ["AMERICAN COUNCIL ON SCIENCE AND HEALTH", "Activist Post"] },
    { id: 6, name: "Finance and Business", data: ["About Best Binary Options Strategy", "Business Green", "Business Insider", "Business Standard", "Business Wire", "Bloomberg Business"] },
    { id: 7, name: "Global News", data: ["Aljazeera.com", "AllAfrica", "Atlantic Council", "Avi Melamed"] },
    { id: 8, name: "Philippines News", data: ["Arangkada Philippines", "BorneoPost Online"] },
    { id: 9, name: "Government of Australia", data: ["Australian Government", "Australian Government Department of Defence"] },
    { id: 10, name: "Health and Science", data: ["AMERICAN COUNCIL ON SCIENCE AND HEALTH", "Activist Post"] },
   
  ];
  
  // clustersData.js

export const clustersData = [
  { id: 1, name: "3D Printing", data: ["3D Printing Progress"] },
  { id: 2, name: "Bioenergy Congress", data: ["4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE"] },
  { id: 3, name: "Agriculture", data: ["AgWeb - The Home Page of Agriculture", "Farms.com"] },
  { id: 4, name: "Environment", data: ["Environmental Leader"] },
  { id: 5, name: "Technology", data: ["BBC News Technology", "MIT Technology Review", "Wired UK"] },
  { id: 6, name: "Business", data: ["Bloomberg Business", "Business Insider", "Business Standard", "Business Wire"] },
  { id: 7, name: "Climate Change", data: ["Climate Change News", "Climate News Network"] },
  { id: 8, name: "Energy", data: ["Biofuels Digest", "Energy Tomorrow", "Energy.gov Website"] },
  { id: 9, name: "Economy", data: ["Economy", "Market Realist"] },
  // ... (previous clusters)

  { id: 10, name: "Health", data: ["CDC", "Huffington Post", "National Geographic Society (blogs)", "Scientific American"] },
  { id: 11, name: "Finance", data: ["Citibank", "Finance Magnates", "JP Morgan", "Wells Fargo"] },
  { id: 12, name: "Media", data: ["BBC News Technology", "Business Insider", "CNNMoney", "Wired UK"] },
  // Add more clusters based on your specific criteria
];

export const alphabetData = [
  { id: 1, alphabet: 'A', contain: ["AHDB", "AMERICAN COUNCIL ON SCIENCE AND HEALTH", "About Best Binary Options Strategy", "Abq", "Activist Post", "Adam Curry", "African Arguments", "African Development Bank", "AgWeb - The Home Page of Agriculture", "Aljazeera.com", "AllAfrica"] },
  { id: 2, alphabet: 'B', contain: ["Bearnobull", "Before It's News | Alternative News | UFO | Beyond Science | True News| Prophecy News | People Powered News", "Biofuels Digest", "Bloomberg Business", "Bloomberg New Energy Finance", "Blue and Green Tomorrow", "BorneoPost Online", "Brookings Institute", "Business Green", "Business Insider", "Business Standard", "Business Wire"] },
  { id: 3, alphabet: 'C', contain: ["CAFrackFacts", "CAJ News Africa", "CBO", "CCN: Financial Bitcoin & Cryptocurrency News", "CDC", "CIO", "CNBC", "CNNMoney", "CSIS", "Canadian Biomass", "Carbon Brief", "Cars.co.za", "Channel News Asia", "Cii Radio", "Citibank", "CleanTechnica", "Climate Change News", "Climate News Network", "Common Dreams", "Convenience Store Decisions", "Cornell University", "Countries.com Global Content", "Critical Threats", "Cushman & Wakefield", "Cushman & Wakefield Blog"] },
  { id: 4, alphabet: 'D', contain: ["DOE EIA 2013 Energy Conference","DW.COM", "Days Of Year", "Digitalist Magazine", "Drill or drop?"] },
];


export const sidebarLinks = [
  {
    id:1,
    name:"Start Year",
    path: "/filterbystart_year"
  },
  {
    id:2,
    name:"Country",
    path: "/searchbycountry"
  },
  {
    id:3,
    name:"Topic",
    path: "/searchbytopic"
  },
  {
    id:4,
    name:"End Year",
    path: "/searchbyend_year"
  },
  {
    id:5,
    name:"Pestler",
    path: "/searchbypestle"
  },
  {
    id:6,
    name:"Region",
    path: "/searchbyregion"
  },
  {
    id:7,
    name:"Custom Search",
    path: "/cumtomsearch"
  },
  {
    id:8,
    name:"Sector",
    path: "/searchbysector"
  },
  {
    id:9,
    name:"Source",
    path: "/searchbysource"
  },
  {
    id:10,
    name:"Custom Start Year",
    path: "/searchbycustomstart_year"
  },
  {
    id:11,
    name:"SWOT",
    path: "/searchbyswot"
  },

]
export const searhopt =[
  {
    id:1,
    name:"relevance"
  },
  {
    id:2,
    name:"country"
  },
  {
    id:3,
    name:"end_year"
  },
  {
    id:4,
    name:"start_year"
  },
  {
   id:5,
   name:"pestle"
  },
  {
    id:6,
    name:"likelihood"
  },
  {
    id:7,
    name:"region"
  },
  {
    id:8,
    name:"intensity"
  },
  
  
]