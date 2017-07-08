var bio = {
  'name': 'Gavin Kyte',
  'role': 'IT Specialist - Intern at EBTH',
  'contactInfo': {
    'mobile': '626.626.1753',
    'email': 'GPKyte@gmail.com',
    'location': 'Cincinnati, Ohio',
  },
  'pictureURL': '',
  'welcome-message': 'Hi there user',
  'skills': ['Python','Java','GIT','bash','SQL']
}

var work = {
  'jobs': [
    {
      'employer': 'Xavier University',
      'title': 'Tier II Student Technician',
      'dates': 'Aug 2016 — May 2017',
      'location': 'Cincinnati, OH',
      'description': 'Fixed all the WiFis'
    }
  ]
}
var project = {
  'projects': [
    {
      'title': 'Dynamic slack archive tool',
      'dates': 'May 2017',
      'description': 'A Slack API bot for message archiving to SQLite + to-web-page converter.',
      'image': 'null'
    }
  ]
}
var education = {
  'universities': [
    {
      'name': 'Xavier University',
      'city': 'Cincinnati',
      'degree': 'Bachelors of Science in Computer Science',
      'dates': '2016 - 2020'
    }
  ],
  'courses': [

  ],
  'onlineCourses': [
    {
      'title':'HTML5 & CSS3',
      'school':'Dash',
      'dates':'2017',
      'url':'https://dash.generalassemb.ly/'
    }
  ]
}

if (bio.skills.length > 0) {
  $('#skillsChart').append(HTMLskillsStart);
  for (var i=0; i < bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
    $('#skills-entry').append(formattedSkills);
  }
}
work.display = function() {
  for (var job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
 		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
  }
}
work.display();

function inName() {
  var name = $('#name').text();
  var names = name.split(' ');
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  return names[0] + ' ' + names[1];
}

function displayBio() {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  $('#header').prepend(formattedName);
}
displayBio();

project.display = function() {
  for (var project in this.projects) {
    $('#projects').append(HTMLprojectStart);
    var formattedDates = HTMLprojectDates.replace('%data%', this.projects[project].dates);
		$('.project-entry:last').append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace('%data%', this.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace('%data%', this.projects[project].image);
		$('.project-entry:last').append(formattedImage);
  }
}
project.display();
