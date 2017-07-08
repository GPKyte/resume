
var name = "Gavin Kyte";
var formattedName = HTMLheaderName.replace('%data%', name);
var role = "IT Specialist - Intern at EBTH";
var formattedRole = HTMLheaderRole.replace('%data%', role);

$('#header').prepend(formattedRole);
$('#header').prepend(formatedName);

var bio = {
  'name': name,
  'role': role,
  'contactInfo': {
    'mobile': '626.626.1753',
    'email': 'GPKyte@gmail.com',
    'location': 'Cincinnati, Ohio',
  }
  'pictureURL': '',
  'welcome-message': 'Hi there user',
  'skills': []
}
