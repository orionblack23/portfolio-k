var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    section1: {
      sideBarName: 'Home',
      firstName: 'Lindan',
      lastName: 'MOYO',
      imgAvatar: '/images/others/imgAvatar.jpg',
      profileBackground: '/images/others/profilBackground.jpg',
      title: 'LINDAN MOYO'
  },

  section2: {
    sideBarName: 'ABOUT',
    header: 'ABOUT ME',
    subHeader: 'Welcome on my portfolio',
    greeting: "I'm lindan MOYO",
    bio: "Hi! My name is <strong>Lindan MOYO</strong>.I am a Computer Engineer who is self motivated and keen to take up any challenging position to learn new skills to broaden my skills in computing technologies as well as a software developer. l am proficient at working both independently and in a team set up and also thrive in deadline-driven environments.Equipped with strong organizational and analytical skills as well as practical problem-solving , decision making skills andstrong communication skills (written and verbal).",
    imgAvatar2: '/images/others/imgAvatar2.jpg',
    birthday: "20.01.1997",
    age: "22",
    city: 'Harare',
    interests: 'Drama',
    study: 'European University of Lefke',
    degree: 'Undergraduate',
    mail: 'lindanmoyo',
    downloadCv: '/images/others/MOYO CV.pdf'
  },

  section3: {
    header: 'My Abilities',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply."
  },
  section4: {
    sideBarName: 'CONTACT',
    header: 'CONTACT ME',
    subHeader: 'To contact me:',
    address: '24 Anafat',
    mail: 'lindanmoyo',

  }

   });
});


/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
