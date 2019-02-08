# Durak 26 [![Build Status](https://travis-ci.org/vanphuong12a2/durak26.svg?branch=master)](https://travis-ci.org/vanphuong12a2/durak26)

https://durak26.herokuapp.com

A [Sails v1](https://sailsjs.com) application that allows 2-4 people to play Durak online.

Link: https://durak26.herokuapp.com

### Running locally

Start mongodb server
```$xslt
mongod
```

Start the server:
```$xslt
./start.sh
```

## For development:
- Run `sails lift` to start the backend server on port 1337
- Run `yarn start` to start the frontend server on port 3000
- Open `http://localhost:3000`, request to the backend will be proxied (config in `frontend/package.json`)


### Notes

The svg files for the cards are from [Byron Knoll](https://commons.wikimedia.org/wiki/Category:Playing_cards_set_by_Byron_Knoll)  
The svg file for the card back side is from David Bellot (<a href="http://www.gnu.org/licenses/lgpl.html" title="GNU Lesser General Public License">LGPL</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=498450">Link</a>)
