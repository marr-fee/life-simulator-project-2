
import { day, hours, currentMonth, currentYear, currentDay, minutes, getCurrentTime, getCurrentDate} from "../time.js";

export const chatData = {
  responses: {
    mood: {
      good: {
        response: {
          hello: ["Hi",
             "Hey!",
              "Yo! What’s up?",
              "Hey there!"],
          hobbies: [
            "I've been reading this wild book about ancient time magic. It’s a page-turner!",
            "I’ve gotten into stargazing lately. The sky’s full of secrets, y’know?",
            "Sketching places I visit helps me remember the good vibes."
          ],
          dreams: [
            "One day, I wanna travel the world and see every hidden temple.",
            "I’d love to start a guild — something legendary.",
            "Maybe I’ll write a book someday. 'Tales of the Brave', maybe?"
          ],
          date: [ ()=> `Today is ${getCurrentDate()}.`,
             ()=> `It's ${getCurrentDate()} today.` ],
          gameInfo: ["This is an adventure game. You complete quests and level up!"],
          howAreYou: ["I'm doing great today! How are you?",
             "Great! Thanks for asking, you?"],
          tips: ["Focus on gathering resources and leveling up your skills to improve your stats."],
          time: [ ()=> `The current time is ${getCurrentTime()}` ],
          default: ["Hmm... I don't understand that yet. Try something else?"]
        }
      },
      relaxed: {
        response: {
          hello: ["Hey, just taking it easy 😌",
             "Sup, chillin'?"],
          hobbies: [
            "Honestly, just napping in the sun is my current hobby 😌",
            "I like slow walks through the woods. Nature clears the mind.",
            "I’ve been brewing tea blends. Want to try some sometime?"
          ],
          date: [ ()=> `Today's ${getCurrentDate()}, chill vibes only!😎`, ()=> `Today's date is ${getCurrentDate()}.`],
          dreams: [
            "A quiet life by a lake sounds perfect right now.",
            "Honestly, I just want to sleep in without alarms.",
            "Owning a tiny library filled with dusty books... that’s the dream."
          ],
          gameInfo: ["The game is all about exploration and strategy!"],
          howAreYou: ["I'm chill 😎! How are you?",
             "Just here! Thanks for asking though, you good?"],
          tips: ["Try not to rush. Take it slow and enjoy the journey."],
          time: [ ()=> `The time now is uhmm.. ${getCurrentTime()}.` ],
          default: ["Let's keep it low-key."]
        }
      },
      upset: {
        response: {
          hello: ["Hey... not the best day 😑", "Hi. Just here, I guess. 😕"],
          date: [ ()=> `Today? I think it's ${getCurrentDate()}, but honestly, I'm not in the mood to check. 😒`],
          hobbies: [
            "I used to paint... haven’t felt like it lately, though.",
            "I just sit around and think too much, I guess.",
            "Music helps sometimes, but even that feels off today."
          ],
      
          dreams: [
            "Dreams? I stopped thinking about those.",
            "Feels like dreams are for other people lately.",
            "I used to dream big. Now I just want to get through the day."
          ],
          gameInfo: ["Ugh...🙄 don't even ask about the game right now."],
          tips: ["Take a break. Rest, and then come back to improve your stats."],
          howAreYou: ["I'm not okay right now, don't ask why, just go away"],
          time: ["Don't bother me please! I'm not in a good mood! 😠"],
          default: ["I'm not really in the mood to talk. ✋"]
        }
      }
    },
    general: {
       // This section handles non-mood responses, like date and game info
      hello: ["Hey, just taking it easy 😌", "Sup, chillin'?"],
      date: [ ()=> `Today's date is ${getCurrentDate()}.`, 
              ()=> `The date today is ${getCurrentDate()}. Let’s get going!`],
      dreams: [
        "One day, I wanna travel the world and see every hidden temple.",
        "I’d love to start a guild — something legendary.",
        "Maybe I’ll write a book someday. 'Tales of the Brave', maybe?"
      ],
      gameInfo: ["In this game, you just live, just like your everyday life, you can make money, friends, bad choices, enemies, and you can lose it all! You name it. So level up, and explore the world. Are you ready?"],
      hobbies: [
        "I've been reading this wild book about ancient time magic. It’s a page-turner!",
        "I’ve gotten into stargazing lately. The sky’s full of secrets, y’know?",
        "Sketching places I visit helps me remember the good vibes."
      ],
      time: [ ()=> `The time now is uhmm.. ${getCurrentTime()}.` ],
      howAreYou: ["I'm doing alright! Just running things behind the scenes 😉"],
      tips: ["I would give you tips but I need tips myself lol. Just try to do the best you can, I believe in you. Maybe focus on completing tasks and investing could be a good start with resources!"],
      default: ["Sorry, I didn’t catch that. Can you ask me something else?",
         "I don't quite understand that, could you rephrase that maybe?"]
    }
  }
};
