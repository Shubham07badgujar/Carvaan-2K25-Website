var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    const committees = [
        { name: "AI Club", coordinator: "Alice", coCoordinators: ["Bob", "Charlie"] },
        { name: "Cyber Security", coordinator: "David", coCoordinators: ["Eve", "Frank"] },
        { name: "Robotics Club", coordinator: "Grace", coCoordinators: ["Hank", "Ivy"] },
        { name: "Coding Club", coordinator: "Jack", coCoordinators: ["Kate", "Leo"] },
        { name: "IoT Club", coordinator: "Mia", coCoordinators: ["Nick", "Olivia"] },
        { name: "Cloud Computing", coordinator: "Peter", coCoordinators: ["Quinn", "Ryan"] },
        { name: "Game Development", coordinator: "Sophia", coCoordinators: ["Tom", "Uma"] },
        { name: "AI Research", coordinator: "Victor", coCoordinators: ["Walter", "Xander"] },
        { name: "Data Science", coordinator: "Yara", coCoordinators: ["Zane", "Anna"] },
        { name: "Web Development", coordinator: "Ben", coCoordinators: ["Catherine", "Daniel"] }
    ];
    var cityList = committees.reduce(function(cityList, city) {
      cityList.push(require('../public/cityData/' + city))
      return cityList;
    }, [])

    //TODO::need to update this to send an array
    res.render('map', {
        cityList : JSON.stringify(cityList),
    });
});

module.exports = router;