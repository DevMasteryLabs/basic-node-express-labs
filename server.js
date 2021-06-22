/*
###
###
###
###
###
###
###
###
###
###
###
###       PLEASE DO NOT EDIT THIS FILE
###       FOR DevMastery TESTING PURPOSES!
###
###       THIS FILE IS FOR DevMastery TO BE ABLE TO TEST YOUR CODE PROPERLY
###       CHANGING THIS FILE CAN BREAK THE PROCESS OF VERIFICATION

██████╗░███████╗██╗░░░██╗███╗░░░███╗░█████╗░░██████╗████████╗███████╗██████╗░██╗░░░██╗
██╔══██╗██╔════╝██║░░░██║████╗░████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗╚██╗░██╔╝
██║░░██║█████╗░░╚██╗░██╔╝██╔████╔██║███████║╚█████╗░░░░██║░░░█████╗░░██████╔╝░╚████╔╝░
██║░░██║██╔══╝░░░╚████╔╝░██║╚██╔╝██║██╔══██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗░░╚██╔╝░░
██████╔╝███████╗░░╚██╔╝░░██║░╚═╝░██║██║░░██║██████╔╝░░░██║░░░███████╗██║░░██║░░░██║░░░
╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░

###
###
###
###
###
###
###
###
###
###
*/

require('dotenv').config(); 
const backgroundVerification = require('./verification');
const main = require('./main');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 9000;
backgroundVerification.setupBackgroundApp(app, main, __dirname).listen(port, function(){
  backgroundVerification.log(`Server is listening at http://localhost:${port}`)
});

/*
###
###
###
###
###
###
###
###
###
###
###
###       PLEASE DO NOT EDIT THIS FILE
###       FOR DevMastery TESTING PURPOSES!
###
###       THIS FILE IS FOR DevMastery TO BE ABLE TO TEST YOUR CODE PROPERLY
###       CHANGING THIS FILE CAN BREAK THE PROCESS OF VERIFICATION

██████╗░███████╗██╗░░░██╗███╗░░░███╗░█████╗░░██████╗████████╗███████╗██████╗░██╗░░░██╗
██╔══██╗██╔════╝██║░░░██║████╗░████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗╚██╗░██╔╝
██║░░██║█████╗░░╚██╗░██╔╝██╔████╔██║███████║╚█████╗░░░░██║░░░█████╗░░██████╔╝░╚████╔╝░
██║░░██║██╔══╝░░░╚████╔╝░██║╚██╔╝██║██╔══██║░╚═══██╗░░░██║░░░██╔══╝░░██╔══██╗░░╚██╔╝░░
██████╔╝███████╗░░╚██╔╝░░██║░╚═╝░██║██║░░██║██████╔╝░░░██║░░░███████╗██║░░██║░░░██║░░░
╚═════╝░╚══════╝░░░╚═╝░░░╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░

###
###
###
###
###
###
###
###
###
###
*/


