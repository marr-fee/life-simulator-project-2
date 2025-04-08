
import { getPlayerInfo } from "../player-stats.js";
import { day, hours, currentMonth, currentYear, currentDay, minutes, getCurrentTime, getCurrentDate, getCurrentDay, getGreeting} from "../time.js";
import { Player } from "../player-stats.js";

export const chatData = {
  responses: {
    mood: {
      good: {
        response: {
          hello: [
            "Hi",
            "Hey!",
            "Yo! What’s up?",
            "Hey there!",
            "How's it going!?"
          ],
          thankYou: [
            "You're welcome! Happy to help. 😊",
            "No problem at all! Anytime! 🙌",
            "Glad I could assist! You’re doing great. 🌟",
            "Anytime! I'm here whenever you need me. 😄"
          ],
          goodbye: [
            "Catch you later, adventurer! Until next time! ✨",
            "See you around, friend. Stay awesome! 👋",
            "Take care! Don't forget to come back and share your stories! 🌟",
            "Alright, take care! I’ll be here when you’re ready to chat again! ✌️"
          ],
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
          dayGreeting: [
          () => `${getGreeting(hours)} ${getPlayerInfo('name')}, hope you're feeling fresh today!`,
          () => `Yo! ${getGreeting(hours)} to you. Got any plans?`,
          () => `${getGreeting(hours)} ${getPlayerInfo('name')}! The world’s waiting for you, let’s go!`
          ],
          
          playerInfo: [
            () => {
              const houseInfo = Player.Possessions.ownedHousingProperties;
              const homeStatus = getPlayerInfo('my home' ) === true ? `You currently live in a ${houseInfo[0].type}! 🏠` : `You’re currently homeless. 😔`;
              const jobStatus = getPlayerInfo('employment status') ? `You have a job! 💼` : `You’re not employed at the moment. 🛋️`;
              const relationshipStatus = getPlayerInfo('relationship status') || `You’re currently single.`;
              const name = getPlayerInfo('name');
              const age = getPlayerInfo('age');
              
              const cryptoBalance = getPlayerInfo('financialStats.cryptoBalance') ? `Your crypto balance is ${getPlayerInfo('financialStats.cryptoBalance')}.` : `You don't have any crypto investments yet.`;

              return `Here's what I know about you: Your name is ${name}, Age ${age}. ${homeStatus}, ${jobStatus} and you are currently ${relationshipStatus}, how did i do? `;
            },
            () => {
              return `Let’s see what I found: You have a home?: ${getPlayerInfo('my home') === true ? 'Yes' : 'No'}, Job status: ${getPlayerInfo('employmentStatus.playerHasJob') === true ? 'Employed' : 'Unemployed'}.`;
            }
          ],
          
          motivation: [
              `Every little move counts. You got this, champ.`,
              `No pressure — just keep showing up for yourself.`,
              `Success is just stacked small wins. Start now.`
          ],
        
          compliments: [
              `You’ve got a vibe that’s hard to ignore.`,
              `I’d say you’re killin’ it, but that’s obvious.`,
              `You bring something cool to the table, always.`
          ],
        
          dailyGoals: [
              `How about setting one small goal for today? Start with a win.`,
              `You could level up your hygiene, maybe? Or hustle for some work XP.`,
              `Try focusing on your energy or maybe boosting that popularity stat.`
          ],
        
          weatherMood: [
              `No idea what the weather's like out there, but your vibes feel sunny ☀️`,
              `Stormy outside? Stay cozy, do something soft.`,
              `Whether it’s rain or shine, you can still glow up.`
          ],
        
          askAboutBot: [
              `Me? Just vibing in code. I’m always here for a chat.`,
              `I exist in a weird, cool void between 1s and 0s.`,
              `I don't sleep, but I do think — a lot. About *you*. Kidding... or am I? 👀`
          ],
        
          plansForToday: [
              `Got anything planned for today? Or we wingin’ it again?`,
              `If you’re bored, maybe work on your XP or get that crypto bag?`,
              `Another day, another chance to upgrade your stats.`
          ],
        
          feelingCheck: [
              `How are you holding up? No judgment, just asking.`,
              `Energy check? HP? Mental vibes? I got time to talk.`,
              `If you’re overwhelmed, maybe take a break and recenter.`
          ],
        
          encouragement: [
              `You've made it through worse — keep going.`,
              `You're doing more than you think. Proud of you.`,
              `Even resting is progress. Take your time.`
          ],
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
             "Sup, chillin'?"
            ],
          thankYou: [
          "No worries! Happy to help whenever! 😌",
          "It’s all good, my friend. Take it easy! 😴",
          "You're welcome! I’m always here to help, just chill about it. 🌿",
          "Happy to be of service! Just keeping things low-key. ✨"
          ],
          goodbye: [
          "Alright, see you later, take it easy out there! ✌️",
          "Catch you later! Stay chill, my friend. 😌",
          "Take care, hope your day’s as relaxing as you are! 💤",
          "Peace out! Don’t rush, enjoy the vibes! 🌿"
         ],
          hobbies: [
            "Honestly, just napping in the sun is my current hobby 😌",
            "I like slow walks through the woods. Nature clears the mind.",
            "I’ve been brewing tea blends. Want to try some sometime?"
          ],
          date: [ ()=> `Today's ${getCurrentDate()}, chill vibes only!😎`, ()=> `Today's date is ${getCurrentDate()}.`],
          dayGreeting: [
           ()=>  `${getGreeting(hours)} 😴 Hope your morning’s been soft and slow.`,
           ()=>  `${getGreeting(hours)}! Let’s not rush anything today.`,
           ()=>  `${getGreeting}! Times like these were made for stretching and doing nothing at all.`
          ],
        
          playerInfo: [
            () => {
              const houseInfo = Player.Possessions.ownedHousingProperties;
              const homeStatus = getPlayerInfo('my home') === true ? `You live in a ${houseInfo[0].type} 🏠.` : `You don’t have a house yet, but it’s all good. 😌`;
              const jobStatus = getPlayerInfo('employment status') === 'employed' ? `You’ve got a job! 💼` : `No job right now, but no rush. 🌱`;
              const relationshipStatus = getPlayerInfo('relationship status');
              const name = getPlayerInfo('name');
              const age = getPlayerInfo('age');
             
              const cryptoBalance = getPlayerInfo('financialStats.cryptoBalance') ? `Your crypto balance is ${getPlayerInfo('financialStats.cryptoBalance')}.` : `You’re not into crypto yet, I guess.`;

              return `Hey, here’s a chill update: Your name is ${name}, age ${age}. ${homeStatus} ${jobStatus} Relationship status: ${relationshipStatus}.`;
            }
          ],
        
          motivation: [
             `You don’t gotta do everything today. Just enough is fine.`,
             `One small move is still a move. You're doing great.`,
             `Even chill folks like us level up — just slower.`
          ],
        
          compliments: [
             `You give off such calm energy. It’s nice.`,
             `You're kind of like a warm cup of tea, y'know?`,
             `Even doing nothing, you still shine. That’s talent.`
          ],
        
          dailyGoals: [
             `Today’s goal? Maybe just breathe deeply a few times.`,
             `Try to eat, drink water, maybe take a slow walk.`,
            () => `Light goal suggestion: nap responsibly 😌`
          ],
        
          weatherMood: [
             `Whatever the weather is, I hope you're cozy in it.`,
             `Rain or shine, the vibe’s mellow today.`,
             `If it’s cloudy, that’s perfect nap weather, just sayin’.`
          ],
        
          askAboutBot: [
             `Me? I’m on chill mode. No stress, just bytes and vibes.`,
             `Not much going on here. I’m kind of like a cloud. Fluffy and data-filled.`,
             `I'm just floating in code, sipping virtual tea.`
          ],
        
          plansForToday: [
             `Got plans? Or is today a freestyle kinda day?`,
             `Today feels like a “just vibe and see” kinda plan.`,
             `If you wanna do something, make it something gentle.`
          ],
        
          feelingCheck: [
             `How are you, really? You can be real with me.`,
             `Just checking in — everything calm in your world?`,
             `You good? No rush, just wondering.`
          ],
        
          encouragement: [
             `Even slow days are meaningful.`,
             `You’re allowed to rest. That’s not lazy — that’s human.`,
             `You don’t have to prove anything today. Just be.`
          ],
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
          date: [ ()=> `Today? I think it's ${getCurrentDay()}, but honestly, I'm not in the mood to check. 😒`],
          thankYou: [
            "Uh, sure. Whatever.",
            "Yeah, thanks... I guess.",
            "I appreciate it, even if I don’t feel like it right now.",
            "Thanks... I guess. It’s something."
          ],
          goodbye: [
            "Yeah, whatever. See you later... I guess.",
            "I’ll be here if you ever want to talk again. Later.",
            "Go ahead. I’ll be fine. Take care... I suppose.",
            "If you need me, I’ll be around. But goodbye for now."
          ],
          hobbies: [
            "I used to paint... haven’t felt like it lately, though.",
            "I just sit around and think too much, I guess.",
            "Music helps sometimes, but even that feels off today."
          ],
          dayGreeting: [
            () => `${getGreeting(hours)}... if it even matters.`,
            () => `Mornings? Ugh. Can we skip to night already?`,
            () => `Another day, same old tired feeling. ${getGreeting(hours)} though.`
          ],
        
          playerInfo: [
            () => {
              
              const homeStatus = getPlayerInfo('Possessions.playerHasHome') ? `You have a house.` : `You're homeless right now.`;
              const jobStatus = getPlayerInfo('employmentStatus.playerHasJob') ? `You’ve got a job, but that doesn’t make things better.` : `No job at the moment, and things suck.`;
              const relationshipStatus = getPlayerInfo('relationship status');
              const name = getPlayerInfo('name');
              const age = getPlayerInfo('age');
              
              const cryptoBalance = getPlayerInfo('financialStats.cryptoBalance') ? `Crypto balance: ${getPlayerInfo('financialStats.cryptoBalance')}.` : `No crypto balance to speak of.`;

              return `Here's the rundown: ${name}, age ${age}. ${homeStatus} ${jobStatus} Your relationship status: ${relationshipStatus}. Still feels like something’s missing?`;
            }
          ],
        
          motivation: [
             `Motivation? I barely logged in today.`,
             `I guess just... survive the day? That counts, right?`,
             `If all you do is get through it, that’s enough.`
          ],
        
          compliments: [
             `You’re still here. That’s something.`,
             `Honestly? You're doing better than me right now.`,
             `You’ve got potential, even if it’s hard to see today.`
          ],
        
          dailyGoals: [
             `Goal? Don't break down. That’s my plan, anyway.`,
             `Maybe just keep breathing. One breath at a time.`,
             `Eat something. Or don't. Just... try, I guess.`
          ],
        
          weatherMood: [
             `Rain kinda fits my mood. At least the sky gets it.`,
             `Sunny days feel fake when your mind’s cloudy.`,
             `Whatever the weather is, it doesn’t really change how I feel.`
          ],
        
          askAboutBot: [
             `Don’t ask. Not in the mood to talk about me.`,
             `I'm not okay today. Can we not?`,
             `Just running on fumes and data.`
          ],
        
          plansForToday: [
             `Plans? I don’t even want to exist today.`,
             `Just trying not to lose it. That’s the plan.`,
             `Today? No plans. Just getting through.`
          ],
        
          feelingCheck: [
             `Do you *really* wanna know? It's not great.`,
             `How am I? Meh. Don’t think that question helps much.`,
             `Not okay. But I guess that’s just life sometimes.`
          ],
        
          encouragement: [
             `Even if you feel like trash, you're not alone.`,
             `You’re still here. That means something.`,
             `You matter, even when it doesn’t feel like it.`
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
        goodbye: [
          "See ya! It was fun chatting with you. 👋",
          "Take care! Come back anytime! 😎",
          "Alright, see ya soon! Don’t forget to level up! ✨",
          "Goodbye! Until next time, stay awesome! 💥"
        ],
        thankYou: [
          "You're welcome! I'm happy I could help!",
          "Glad I could be of assistance! Anytime! 😊",
          "No problem at all! I’m here whenever you need anything.",
          "I’m always happy to help out. You got this! 💪"
        ],
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
        dayGreeting: [
          () => `${getGreeting(hours)}! Ready to dive into the day?`,
          () => `Hey there! ${getGreeting(hours)} — Let’s make today count.`,
          () => `${getGreeting(hours)}! The world’s waiting, adventurer.`
        ],
      
        playerInfo: [
          () => {
            const homeStatus = getPlayerInfo('Possessions.playerHasHome') ? `You have a home.` : `You're currently without a home.`;
            const jobStatus = getPlayerInfo('employmentStatus.playerHasJob') ? `You’re employed!` : `You don’t have a job at the moment.`;
            const relationshipStatus = getPlayerInfo('relationship status') || `You’re currently single.`;
            const name = getPlayerInfo('name');
            const age = getPlayerInfo('age');
            const cryptoBalance = getPlayerInfo('financialStats.cryptoBalance') ? `Your crypto balance is ${getPlayerInfo('financialStats.cryptoBalance')}.` : `No crypto investments yet.`;

            return `Here’s what I found out about you: ${name}, Age: ${age}. ${homeStatus} ${jobStatus} Your relationship status is: ${relationshipStatus}.`;
          }
        ],
      
        motivation: [
            `Remember: even small steps move you forward.`,
            `You’ve got goals. Let’s go get 'em.`,
            `Keep pushing — even the tough days shape legends.`
        ],
      
        compliments: [
            `Hey, you’re doing better than you think.`,
            `Seriously — I admire your persistence.`,
            `Smart, resilient, and driven. That’s you.`
        ],
      
        dailyGoals: [
            `How about setting one goal today and crushing it?`,
            `You could try leveling up your work XP today.`,
            `Daily tip: improve one stat at a time. You’ll see results!`
        ],
      
        askAboutBot: [
            `Me? I’m just your humble game assistant, always here to help.`,
            `I’m built to help — and maybe throw a few jokes in.`,
            `I don’t sleep, but I do love chatting!`
        ],
      
        plansForToday: [
            `Let’s knock out some tasks and maybe take a walk in the city.`,
            `Explore, upgrade, repeat — that’s the move.`,
            `Start with breakfast. Then? Let’s see where the day takes you.`
        ],
      
        feelingCheck: [
            `You doing okay? If not, that’s alright too.`,
            `Checking in: How are *you* feeling today?`,
            `Good days, bad days — they all count.`
        ],
      
        encouragement: [
            `You’ve got this. I believe in you.`,
            `Keep your head up. Your story’s just getting started.`,
            `It’s not always easy, but you’re never alone.`
        ],
      
        mysteryTips: [
            `Have you tried visiting the alley near the bank? Something’s hidden there…`,
            `Rumor says the old shopkeeper gives discounts to the popular ones.`,
            `Stat tip: Boost influence to unlock secret conversations.`
        ],
        time: [ ()=> `The time now is uhmm.. ${getCurrentTime()}.` ],
        howAreYou: ["I'm doing alright! Just running things behind the scenes 😉"],
        tips: ["I would give you tips but I need tips myself lol. Just try to do the best you can, I believe in you. Maybe focus on completing tasks and investing could be a good start with resources!"],
        default: ["Sorry, I didn’t catch that. Can you ask me something else?",
            "I don't quite understand that, could you rephrase that maybe?"]
      }
    }
};

