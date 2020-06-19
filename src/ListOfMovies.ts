import { I_ListOfMovies } from "./interfaces";
import bg_wretched from './assets/img/wretched.jpg';
import bg_summon from './assets/img/summon.jpg';
import bg_strike from './assets/img/strike.jpg';
import bg_agent from './assets/img/agent.jpg';
import bg_lovebirds from './assets/img/loverbirds.jpg';
import bg_yang from './assets/img/yang.jpg';
import bg_mentor from './assets/img/mentor.jpg';

export const ListOfMovies:I_ListOfMovies = {
  trending: 
    {
      "The Wretched" : {        
        cover: bg_wretched,
        title: "The Wretched",
        genre: "Horror",
        description: "A defiant teenage boy, struggling with his parent's imminent divorce, faces off with a thousand year-old witch, who is living beneath the skin of and posing as the woman next...",
        stars: "Amy Waller, Piper Curda, Jamison Jones, Kevin Bigley, Tug Coker, John Paul Howard, Azie Tesfai, Zarah Mahler, Gabriela Quezada Bloomgarden, Richard Ellis, Sydne Mikelle, Oliver Jones, Eric Guenter Weber, Blane Crockarell, Judah Abner Paul, Jalayah Washington, Ross Kidder"
    },
      "The Summon The Darkness" : {        
        cover: bg_summon,
        title: "The Summon The Darkness",
        genre: "Horror",
        stars: "Johnny Knoxville, Alexandra Daddario, Logan Miller, Allison McAtee, Maddie Hasson, Dennis Scullard, Keean Johnson, Erik Athavale, Amy Forsyth",
        description: "Set in the Midwest against a backdrop involving a killing spree thought to be orchestrated by a satanic cult. Three best friends embark on a road trip to a heavy-metal..."
    },
      "Strike" : {        
        cover: bg_strike,
        title: "Strike",
        genre: "Animated",
        stars: "Kerry Shale, Ken Stott, Jordan Long, Dave Mounfield, Alex Kelly, Denis Khoroshko, Naomi McDonald, Tom Turner, Jacob Scipio, Daniel Barke",
        description: "Mungo Morrison is a young mole who is due to begin work at his proud father's side in their hometown's legendary gold mine. While his best friends are excited to..."
    },
    "Agent Toby Barks" : {        
      cover: bg_agent,
      title: "Agent Toby Barks",
      genre: "Comedy / Adventure / Family",
      description: "Toby appears to be an ordinary dog living the simple put life, but unbeknownst to his family, he moonlights as secret government operative, Agent Toby Barks.",
      stars: "Jon Lovitz, Dean Cain, Brett Azar, Tom Glynn, Claudio Orefice, Dina Cataldi, Charlotte Ciano"
    }
    },
  new: {
    "Jimmy O. Yang: Good Deal": {
      cover: bg_yang,
      title: "Jimmy O. Yang: Good Deal",
      genre: "Comedy",
      description: "Performed live at the Neptune Theater in Seattle, Washington, Jimmy O. Yang covers hilarious interactions with immigrant parents, his thoughts on Matt Damon, and whether ghosts will haunt one-bedroom apartments",
      stars: "Jimmy O Yang"
    },
    "The Mentor": {
      cover: bg_mentor,
      title: "The Mentor",
      genre: "Thriller",
      description: "A wanna-be filmmaker persuades a reluctant film director into giving a mentorship when suddenly they are both kidnapped by an enigmatic gang.",
      stars: "Sarah Williams, David M Sandoval Jr, Corey Jackson, Mike Bash, Brandi Nicole Payne, Liz Sklar"
    },
    "The LoveBirds": {
      cover: bg_lovebirds,
      title: "The LoveBirds",
      genre: "Comedy / Romance",
      description: "A couple (Issa Rae and Kumail Nanjiani) experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery. As their journey to clear their names takes them from one extreme and hilarious circumstance to t...",
      stars: "Paul Sparks, Anna Camp, Kumail Nanjiani, Gralen Bryant Banks, Joe Chrest, Rebecca Chulew"
    }
  }  
};
