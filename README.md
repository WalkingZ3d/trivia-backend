## Neweet Trivia App - LAP 3 Group Project

### Contributors
- [Jianli Lin](https://github.com/jianli1028)
- [Dan Willis](https://github.com/WalkingZ3d)
- [Liberty Sprackling](https://githhub.com/LibertySprackling)
- [Doreen Kamushinda](https://github.com/doreenkam)

### Project Description

This repo specifically is the server that connects to the Mongo database.

###  Installation & Usage

#### Installation

Clone the repo on your local pc and run `npi i` to install all the dependencies.
Once the installation is complete, run `npm run dev` and go on the designated URL to run it with nodemon.

#### Usage

The live back-end is available [here](https://neweet-server.herokuapp.com/)
All the available routes for the API are
* https://neweet-server.herokuapp.com/records show all games
* https://neweet-server.herokuapp.com/records/create only access to create new games
* https://neweet-server.herokuapp.com/records/players show all players and how many times they've played
* https://neweet-server.herokuapp.com/records/players/PLAYERNAME show all the game that the player have participated in
* https://neweet-server.herokuapp.com/records/winners show all the winners and how many times they have won
* https://neweet-server.herokuapp.com/records/winners/PLAYERNAME show all the games that the player is the winner

### Technologies Used
- React
- Redux
- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Netlify
- Heroku
