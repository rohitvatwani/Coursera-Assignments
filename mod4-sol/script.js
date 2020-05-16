

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var name in names) {


  if (names[name].charAt(0)=='J') {
      
      byeSpeaker.speak(names[name]);
    // byeSpeaker.xxxx
  } else {
      helloSpeaker.speak(names[name]);
  }
}