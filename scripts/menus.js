// to handle all menu displays



// All menu options saved in menus
export const menus = {
  main: {
  title: "Main Menu",
  branches: [
    {tag: "My Home", image: "images/icons8-home-48.png"},
    {tag: "Locations", image: "images/icons8-location-100.png"},
    {tag: "Phone", image: "images/icons8-phone-48.png"},
    {tag: "Stats", image: "images/icons8-bar-chart-48.png"},
    {tag: "Settings", image: "images/icons8-options-100.png"}
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
      {tag: "Hospital", image: "images/icons8-hospital-48.png"}
    ]
  },
  Phone: {
    title: "Phone",
    branches: [
      { tag: "Contacts", image: "images/icons8-contact-64.png"},
      { tag: "Messages", image: "images/icons8-email-48.png"},
      { tag: "Investments", image: "images/icons8-investment-50.png"},
      { tag: "Online Bank", image: "images/icons8-bank-48.png"},
      { tag: "Games", image: "images/icons8-games-50.png"}
    ]
  },
  Games: {
    title: "Games",
    branches: [
      { tag: "R-P-S", image: "images/rock-paper-scissors.png", id: "r-p-s-game"}
    ]
  }
}

