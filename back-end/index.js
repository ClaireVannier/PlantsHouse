const express = require('express');
const apiPlants = express();
const cors = require('cors');

apiPlants.use(cors({}));

const port = 5000;

apiPlants.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is listening on port 5000");
  }
});

apiPlants.get("/", (req, res) => {
  res.send("Welcome to the website PlantsHouse!")
})

const getPlants = (req, res) => {
  res.status(200).json(plantList);
};

apiPlants.get("/plants", getPlants);


const plantList = [
  {
    name: "Cindy",
    description: "Elle habille l'escalier par ses jolies feuilles tombantes",
    image: "/assets/cindy.jpg",
    needwater: "1 fois par semaine",
    moreinfo: "https://plantespourtous.co/collections/fiches-dentretien/products/hoya-carnosa-tricolor?_pos=4&_fid=81f0082b2&_ss=c"
  },
  {
    name: "Martha",
    description: "Elle aussi à trouver sa place dans l'escalier, elle s'y sent bien",
    image: "/assets/martha.jpg",
    needwater: "2 fois par mois",
    moreinfo: "https://plantespourtous.co/products/sansevieria-laurentii?_pos=1&_sid=a984aee9e&_ss=r"
  },
  {
    name: "Noueux",
    description: "Le joli bonzaï du bureau, il est solide comme nous",
    image: "./assets/noueux.jpg",
    needwater: "1 fois par mois",
    moreinfo: "https://plantespourtous.co/products/ficus-microcarpa-ginseng?_pos=1&_sid=6cd6fb18d&_ss=r"
  },
  {
    name: "Orchidée",
    description: "La seule fleur de la maison, elle est copine avec la carafe",
    image: "./back-end/assets/orchidee.jpg",
    needwater: "1 fois par semaine",
    moreinfo: "https://www.mnhn.fr/fr/comment-entretenir-une-orchidee"
  },
  {
    name: "Boo",
    description: "Le petit Bamboo de la fratrie, il a été trop arrosé mais il va guérir",
    image: "./assets/boo.jpg",
    needwater: "Ne plus l'arroser",
    moreinfo: "https://plantespourtous.co/products/chamaedorea-seifrizii?_pos=1&_sid=f9e5d8f47&_ss=r"
  },
  {
    name: "Vera",
    description: "Le medecin de la famille, on attend de pouvoir lui couper ses feuilles",
    image: "./assets/vera.jpg",
    needwater: "2 à 3 fois par mois",
    moreinfo: "https://plantespourtous.co/collections/fiches-dentretien/products/aloe-vera?_pos=26&_fid=145bcb793&_ss=c"
  }
]