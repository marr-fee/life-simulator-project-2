// to handle all menu displays

import { JobsList } from "./Jobs/job-list.js";



// All menu options saved in menus
export const menus = {
  main: {
  title: "Main Menu",
  branches: [
    {tag: "My Home", image: "images/icons8-home-48.png"},
    {tag: "Locations", image: "images/icons8-location-100.png"},
    {tag: "Phone", image: "images/icons8-phone-48.png"},
    {tag: "Stats", image: "images/icons8-bar-chart-48.png"},
    {tag: "Settings", image: "images/icons8-options-100.png"},
    {tag: "House Listing", image: "scripts/houses/images/agreement.png"}
  ]
  },
  Locations: {
    title: "Locations",
    branches: [
      {tag: "City", image: "images/cityscape.png"},
      {tag: "Village", image: "images/houses.png"}
    ]
  },
  City: {
    title: "City",
    branches: [
      {tag: "Hospital", image: ""},
      { tag: "Shopping Mall", image: "" },
      { tag: "Public Park", image: "" },
      { tag: "Bank", image: "" },
      { tag: "Beach", image: "" },
      { tag: "Restaurant", image: "" },
      { tag: "City Hall", image: "" },
      { tag: "Train Station", image: "" },
      { tag: "Hospital", image: "" },
      { tag: "Apartment Complex", image: "" },
      { tag: "Downtown", image: "" },
      { tag: "Museum", image: "" },
      { tag: "Stadium", image: "" }
    ]
  },
  Village: {
    title: "Village",
    branches: [
      { tag: "Village Market", image: "" },
      { tag: "Farm", image: "" },
    ]
  },
  Phone: {
    title: "Phone",
    branches: [
      { tag: "Contacts", image: "images/icons8-contact-64.png"},
      { tag: "Messages", image: "images/icons8-email-48.png"},
      { tag: "Investments", image: "images/icons8-investment-50.png"},
      { tag: "Online Bank", image: "images/icons8-bank-48.png"},
      { tag: "Games", image: "images/icons8-games-50.png"},
      { tag: "Calculator", image: "images/calculator.png"},
      { tag: "Job Search", image: "images/job.png" }
    ]
  },
  Investments: {
    title: "Investments",
    branches: [
      { tag: "Real Estate", image: "images/icons8-real-estate-50.png"},
      { tag: "Crypto Exchange", image: "images/icons8-crypto-40.png"}
    ]
  },
  Games: {
    title: "Games",
    branches: [
      { tag: "R-P-S", image: "images/rock-paper-scissors.png", id: "r-p-s-game"},
      { tag: "Tik Tak Toe", image: "images/three-in-a-row.png", id: "tik-tak-toe-game"}
    ]
  },
  "Job Search": {
    title: "Job Search",
    branches: JobsList.branches
  },
  Doctor: {
    title: "Doctor",
    branches: JobsList.Doctor.branches
    
  }

}

