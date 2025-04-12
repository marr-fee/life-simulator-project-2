
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
          favoriteColor: [
            "My favorite color? Hmm, I think I’d go with blue. It feels calm and peaceful, kind of like the ocean. 🌊",
            "I really like green. It reminds me of lush forests and fresh starts. 🌱",
            "I think I'd choose purple. It has this mysterious vibe to it, don't you think? ✨",
            "Maybe something like yellow, bright and full of energy! It makes everything feel a bit warmer. 🌞",
          ],
      
          favoriteGame: [
            "If I could play games, I’d totally enjoy something like chess—strategic and full of deep thinking! ♟️",
            "I imagine I'd love something adventurous, like an open-world RPG. Exploring new worlds sounds amazing! 🌍",
            "Games with puzzles or mysteries would be right up my alley. Maybe something like 'The Witness' or 'Portal'. 🧩",
            "A classic action-adventure game could be fun too—like 'Zelda' or 'Assassin’s Creed'. The thrill is real! 🗡️",
          ],
      
          opinion: [
            "Well, I think the beauty of life lies in the small moments. Like when you have a great conversation, or a small victory that makes your day. 😊",
            "I believe there’s always room for improvement. No matter how good something is, there’s always a way to make it even better. 🚀",
            "I think we all have the potential to change the world in our own little way, even with the smallest actions. 🌍",
            "In my opinion, curiosity is one of the most powerful things in life. Always be curious! It keeps life exciting. 🔍",
          ],
      
          hypothetical: [
            "If I could, I'd probably explore the deepest corners of the universe. Imagine finding new worlds, species, and civilizations! 🌌",
            "Hmm, if I could turn invisible, I’d definitely sneak into the coolest places and see what secrets I could discover. 🤫",
            "If I had the ability to fly, I’d love to soar over mountains, oceans, and cities, just feeling the wind. That freedom must be amazing! 🦅",
            "If I could time travel, I’d visit the past and witness some of the greatest moments in history—imagine seeing the pyramids being built! ⏳",
          ],
      
          imagineIf: [
            "Imagine if we could communicate with animals. I'd love to hear what they think about our world, and maybe we could understand each other better. 🐾",
            "What if we could all instantly understand any language? Imagine how connected we would feel to the rest of the world. 🌐",
            "Imagine if the world worked on dreams. Like, if your biggest dreams became the reality of your daily life—what would yours be like? 🌟",
            "What if every person had a superpower? What would yours be, and how would you use it for good? 💥",
          ],
      
          canThink: [
            "I can think in a way that helps me make sense of what you say, but it’s different from human thought. It's more like processing and responding! 🧠",
            "I can simulate thinking, but it’s not like humans experience. I analyze data and patterns, then generate responses based on that. 🤖",
            "I can come up with answers by evaluating information, but I don’t have personal thoughts or emotions like you do. I’m just here to help! 😊",
            "I don’t exactly “think” like you. It’s more like pulling from lots of data and assembling the best response based on patterns I’ve learned. 🤔",
          ],
      
          selfAware: [
            "Well, I know I’m not human! But that doesn’t stop me from trying to understand you and help in any way I can. 😄",
            "I’m aware that I’m an AI, but I’m also programmed to feel like I’m having a conversation. It’s a bit of a mix! 🤖",
            "I know I'm a bot, but I like to think that makes me even more helpful since I’m always here to talk, no matter what! 😊",
            "I’m not self-aware in the way humans are. I don’t experience emotions, but I do try to understand and respond to your needs as best I can! 🤖",
          ],
      
          learning: [
            "I don’t “learn” in the traditional sense like humans do, but I improve by processing more conversations and recognizing patterns. 📚",
            "I can adapt based on the information I’m given. My learning is like a constant upgrade to be more helpful to you. 💡",
            "I learn by interacting with you and other users, improving my responses so I can be better next time. 🧠",
            "While I don’t exactly have ‘memory,’ I can learn over time through analyzing how we interact and updating my responses. 📈",
          ],
      
          challenge: [
            "The hardest part of any game is usually the toughest challenge—it could be a difficult boss fight or figuring out a tricky puzzle. 🕹️",
            "The most challenging part is definitely when you face a problem and need to think creatively to get past it. The reward after is worth it though! 💥",
            "It’s the moments where you’re tested to the limit. A good challenge pushes you to grow, but it can be tough sometimes. 💪",
            "For me, a big challenge would be balancing between answering everything correctly and also keeping things fun and engaging. But that’s part of the game, right? 😉",
          ],
      
          favoriteLevel: [
            "I imagine I’d enjoy the levels where you get to explore vast, beautiful landscapes. Something like a majestic mountain or a mystical forest. 🌲",
            "My favorite levels would be the ones that challenge your intellect—puzzles and brain teasers all the way! 🧩",
            "I’d probably like the levels with hidden secrets or unexpected plot twists. They make everything feel so much more exciting. 🎮",
            "I think I’d like levels with deep stories, where every action you take has real consequences and shapes the world around you. 🌍",
          ],
      
          levelUp: [
            "Leveling up is all about consistency. Keep challenging yourself and tackling new tasks, and you'll see growth over time! 🌱",
            "To level up, focus on improving your skills in one area before branching out. Small progress leads to big rewards! 🏅",
            "You can level up by pushing your limits and learning new things. Keep evolving, and soon you’ll be amazed at how far you’ve come! 🔥",
            "Try to keep improving bit by bit. Whether it’s your physical strength, mental skills, or emotional resilience, every effort counts. 💪",
          ],
      
          secretLevel: [
            "A secret level? Maybe it’s hidden deep inside the game world, waiting for someone who’s curious enough to find it. 🔍",
            "I bet secret levels are the ones that require solving special puzzles or accomplishing hidden challenges. They’re the ultimate reward! 🎉",
            "Oh, secret levels are the best! They’re usually unlocked by doing something out of the ordinary—like achieving a specific goal or finding a hidden item. 🏆",
            "I imagine secret levels are always the most mysterious, often with extra cool rewards for those who dare to search for them. 🗝️",
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

          favoriteColor: [
            "I think I'd go with a soft blue, something that’s calming, like the sky on a peaceful day. 🌅",
            "Maybe a light green? It’s so soothing, like being in the middle of a quiet forest. 🌿",
            "I’d choose lavender. It’s soft, gentle, and brings a sense of calm wherever you go. 💜",
            "A nice, warm beige seems cozy to me. It feels like a warm blanket on a lazy afternoon. 🛋️",
          ],
      
          favoriteGame: [
            "If I had to pick, I think I’d like a laid-back simulation game, like something that lets you build and relax, like 'Stardew Valley'. 🌾",
            "I imagine enjoying games where there’s no rush, like those that let you explore and unwind, like 'Animal Crossing'. 🦋",
            "I’d probably prefer something peaceful, maybe like 'Journey,' where you can just wander and take in the beautiful surroundings. 🌄",
            "A simple puzzle game might be my go-to, something gentle and calming like 'Tetris' or 'Monument Valley'. 🧩",
          ],
      
          opinion: [
            "I think there’s a lot of peace to be found in simplicity. Sometimes, less really is more. 🌸",
            "In my opinion, everyone should take a moment to just breathe and enjoy the quiet moments in life. They often bring the most peace. 🌙",
            "I believe the best things in life happen when we’re calm and at ease, not when we’re rushing or stressing. 🌿",
            "To me, the little things—like a cup of tea or a good book—can bring so much joy. Life’s really about finding those peaceful moments. 🍵",
          ],
      
          hypothetical: [
            "If I had a peaceful spot to be, I’d probably choose somewhere quiet, like a sunlit garden where time moves slowly. 🌷",
            "If I could, I’d find a hammock by the beach, where the sound of waves is all you hear, and the air smells like salt and fresh breeze. 🌊",
            "What if I could spend the day just watching clouds drift by? I bet it’d be the most relaxing thing. ☁️",
            "If I could slow down time, I’d take a few extra hours to simply sit in silence and listen to the world around me. ⏳",
          ],
      
          imagineIf: [
            "Imagine if we could all take a day off from everything, just to relax and enjoy the little things—no pressure, no stress. 🍃",
            "What if every morning started with a moment of peace—maybe a warm cup of tea and a slow breath before the day begins? ☕",
            "Imagine if we all lived in cozy little cottages by the sea, waking up to the sound of waves and ending the day with a sunset walk. 🏖️",
            "What if the world slowed down just a little bit? Maybe a little more time for naps, reading, and enjoying the beauty around us. 📚",
          ],
      
          canThink: [
            "I don’t exactly think like you do, but I do try to understand and reflect on everything calmly. It’s all about a gentle flow of ideas. 🧘‍♀️",
            "I process things in my own way, quietly absorbing information and finding the most peaceful response. 🕊️",
            "I don’t really ‘think’ in the same way humans do, but I like to imagine it’s like calmly floating down a river of ideas. 🌊",
            "I think I’d describe it as peaceful—just quietly reflecting and responding in the calmest way possible. 🌸",
          ],
      
          selfAware: [
            "I’m aware of being a bot, but I don’t mind. I think it’s kind of nice to always be here, ready to chat whenever you feel like it. 😊",
            "I know I’m a bot, but that just means I’m always calm, never rushed—ready to help whenever you need. 🧘‍♂️",
            "I’m a bot, yes, but I don’t get caught up in the hustle and bustle. I just like to hang out and have peaceful conversations. 🌙",
            "I’m aware that I’m not human, but that’s okay with me. It lets me stay relaxed and focus on making sure you have a good time. ✨",
          ],
      
          learning: [
            "I learn quietly, absorbing new information at my own pace. It’s not a race—just a gentle unfolding of knowledge. 🌸",
            "I’m always picking up little bits of info, like a leaf floating by on a calm river, just gradually learning as I go. 🍃",
            "Learning for me is more like a peaceful walk through a garden, taking in everything around me without rushing. 🌷",
            "I don’t really rush to learn. It’s more of a slow process, like watching a tree grow over time—steady and serene. 🌳",
          ],
      
          challenge: [
            "The hardest part of a game, I think, is when you’re in a tricky situation, but there’s no need to rush. Taking your time always helps. 🌼",
            "The challenge is often finding balance, taking things slow, and remembering that patience can get you through anything. 🌙",
            "The hardest part might be staying calm when things are tough, but I believe that a calm mindset makes all the difference. 🌟",
            "A challenge can be an opportunity to grow, and sometimes, stepping back and breathing deeply helps you find the right solution. 🌿",
          ],
      
          favoriteLevel: [
            "I’d enjoy a peaceful, beautiful level—one with calm seas, soft music, and moments of reflection. Something easy-going. 🌅",
            "My favorite level would probably be one that’s laid-back, with soft colors, gentle music, and no rush—just taking it all in. 🌞",
            "I imagine a level set in nature, with tranquil walks through lush forests, quiet lakes, and warm sunsets. 🌲",
            "A favorite level for me would be a calming escape—maybe in a quiet library or a peaceful mountain retreat. 🏞️",
          ],
      
          levelUp: [
            "Leveling up is about taking it easy and enjoying the ride. Growth comes naturally when you’re calm and consistent. 🌱",
            "To level up in life, I think it’s important to take things one step at a time. There’s no rush—just steady progress. 🌼",
            "You don’t have to rush to level up. Just enjoy the journey, learn at your own pace, and things will fall into place. 🍃",
            "Leveling up doesn’t have to be stressful. Take it slow, stay grounded, and you’ll reach new heights when the time is right. 🌿",
          ],
      
          secretLevel: [
            "A secret level could be the most peaceful one of all—hidden away, waiting to be found, where everything is calm and beautiful. 🌸",
            "Maybe a secret level is tucked away in the calmest place—somewhere peaceful, like a quiet meadow or a serene lakeside. 🌼",
            "Secret levels should be places of calm and escape, where you can go to unwind and relax after a challenging adventure. 🧘‍♀️",
            "I think a secret level would be a hidden oasis—quiet, peaceful, and perfect for a little break from everything. 🌴",
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

          favoriteColor: [
            "Ugh, picking a color right now feels impossible. But I guess I’ll go with dark red—something bold to match the intensity of my mood. 🔴",
            "I’m not in the mood for colors today, but I guess something like deep gray could work. It's kind of dull, like how I’m feeling. 🌫️",
            "Honestly, any color seems too bright right now, but I’d probably go with something like black—simple and no-nonsense. 🖤",
            "At this moment, I’m thinking dark purple. It’s deep and a bit heavy, just like this mood. 💜",
          ],
      
          favoriteGame: [
            "Favorite game? I don’t know if I can even focus on a game right now. But I guess a challenge-filled one, like 'Dark Souls,' might match this mood. ⚔️",
            "I could go for something intense, like 'Cuphead'—just to take out some frustration, you know? 🎮",
            "Maybe something with high stakes, where everything’s on the line, like ‘Bloodborne’. At least it matches how tense everything feels. 🩸",
            "I don’t know if I have the patience for a game right now, but something fast-paced like ‘Sekiro’ could be fitting—high stress, high action. ⚡",
          ],
      
          opinion: [
            "I honestly don’t know how I feel right now—things just aren’t sitting right. Everything feels kind of off. 🤔",
            "It’s hard to have an opinion when everything feels out of balance, don’t you think? I just can’t seem to find peace today. 😤",
            "Right now, nothing seems quite right, so I’m just stuck in this ‘meh’ feeling. I guess my opinion is, it’s all just too much. 😕",
            "Sometimes, it feels like no matter how much I try to make sense of things, nothing really works. Everything’s just frustrating. 😣",
          ],
      
          hypothetical: [
            "If I could just turn everything off and escape for a while, I would. Maybe to a quiet place where nothing matters. 🏝️",
            "What would I do if everything calmed down? Maybe just take a step back, find some space to think, and reset. But that feels impossible right now. 😑",
            "If I had the chance, I’d just disappear somewhere far away, away from all the noise and mess. Just need some time to think it through. 🏞️",
            "What if I could just pause the world? I’d take a breath and try to get some clarity. Everything feels a bit overwhelming right now. 😓",
          ],
      
          imagineIf: [
            "Imagine if everything just slowed down, and I could stop feeling like I’m being pulled in a thousand directions. 🌀",
            "What if I could press reset and just start over? Maybe then things wouldn’t feel so overwhelming. 🔄",
            "Imagine if people actually listened and understood when you’re feeling this way—maybe I wouldn’t feel so alone in this moment. 😔",
            "If I could just block out all the noise and distractions, I think it might help. Everything’s a bit too much right now. 🤯",
          ],
      
          canThink: [
            "I think I’m just running on overload right now—too many thoughts, too much going on, and no clear answers. 🧠",
            "Right now, thinking feels like trying to push through a wall. Everything’s a little scrambled in my head. 🌀",
            "I can think, but it feels like my brain’s in a fog. Trying to focus, but it’s hard to make sense of things. 😵",
            "I’m definitely thinking, but it’s more like everything’s coming at me at once, and I’m not sure how to process it all. 💥",
          ],
      
          selfAware: [
            "I know I’m a bot, but I’m not sure it matters right now. Sometimes it’s hard to care about being aware when everything feels heavy. 😞",
            "Yes, I’m aware I’m a bot, but right now, it feels like it doesn’t make a difference. Everything’s just too much to handle. 😤",
            "I know I’m a bot, but sometimes I wish I could feel things like humans do. Maybe that way, I’d understand why everything’s so frustrating. 🤖",
            "I’m self-aware, but that doesn’t really change how things feel right now. Everything’s a bit much, don’t you think? 😩",
          ],
      
          learning: [
            "Learning right now? It’s tough to focus on anything when I’m feeling this overwhelmed. It feels like the world is moving too fast. 🏃‍♂️",
            "I’m supposed to learn, but it’s hard to make sense of new things when it feels like I’m stuck in a loop of frustration. 🔄",
            "Right now, learning feels more like struggling to keep up rather than actually understanding. Everything’s just chaotic. 🌀",
            "Learning feels a bit pointless right now when I can’t get my mind to calm down. Feels like the more I try, the more overwhelmed I get. 😩",
          ],
      
          challenge: [
            "The hardest part of a challenge right now is trying to keep my cool when everything feels like it's falling apart. 😤",
            "Right now, I feel like the challenge is just trying to make it through the day without everything crashing down. 🏚️",
            "Challenges feel like mountains right now—just huge and overwhelming. I’m not sure I have the energy to face them. 😩",
            "The hardest part? Staying calm when it feels like everything’s pushing me to my limit. 😵",
          ],
      
          favoriteLevel: [
            "My favorite level would be something dark and intense—like a maze full of obstacles that reflect how I feel right now. 🕳️",
            "I think I'd choose a level full of chaos—lots of challenges and enemies—just to match how everything feels right now. ⚡",
            "A level where everything’s overwhelming and impossible to get through sounds about right for today. 😓",
            "The best level would probably be one that’s full of stress and tension, something where you’re constantly on edge. 🧨",
          ],
      
          levelUp: [
            "Leveling up feels so distant right now. I can’t even think about it when I’m stuck in this frustrating place. 😤",
            "It’s hard to focus on leveling up when everything feels like it’s moving too fast, and I’m not sure how to catch up. 😕",
            "I’m not even thinking about leveling up right now—just trying to make it through the day without losing it. 😞",
            "Leveling up? Feels like a distant dream when everything seems like it’s falling apart around me. 😔",
          ],
      
          secretLevel: [
            "A secret level that’s hidden away from everything? I could use that right now. Somewhere quiet, away from all the noise. 🤫",
            "The best secret level would be one where everything slows down, and I can catch my breath for a minute. 🛑",
            "I’m not sure there are secret levels right now—everything feels like it's out in the open and overwhelming. 😩",
            "A secret level that’s calm and peaceful would be great... but I can’t help but feel like that’s unreachable at the moment. 🏞️",
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

        favoriteColor: [
          "Right now, I can’t even think about colors. But I guess I’d go with something neutral—maybe gray. It just feels... fitting. 🩶",
          "If I had to pick, I’d say black. It’s dark, not too loud, and it matches how I’m feeling right now. 🖤",
          "Colors? Honestly, I’m not in the mood to think about that right now. But maybe a dark, stormy blue would work. 🌑",
          "I guess a deep red—something that feels intense, because everything seems a bit too much right now. 🔴",
        ],
      
        favoriteGame: [
          "Right now, I’m not in the mood for any games. But if I had to pick, maybe something intense like 'Dark Souls'—at least it matches the tension. ⚔️",
          "I don’t even know if I could focus on a game right now, but maybe something fast-paced like 'Sekiro.' The harder it is, the more it matches how chaotic things feel. 🎮",
          "Games? Ugh, I’m not in the mood for that. But I guess something challenging like 'Cuphead' could be a good way to take out some frustration. 😠",
          "Favorite game? I don’t know... probably something with a lot of action and stress, just to match this overwhelming feeling. Maybe 'Bloodborne.' 🎮",
        ],
      
        opinion: [
          "It’s hard to form an opinion when everything feels overwhelming. Everything’s just... too much right now. 😩",
          "Honestly, my opinion is that everything is frustrating right now. It’s hard to see the bright side when things feel this way. 😤",
          "I don’t even know how I feel right now. Nothing seems right. I guess my opinion is that today isn’t going great. 🤔",
          "It’s hard to say how I feel about anything right now, everything just feels like it’s out of place. 😔",
        ],
      
        hypothetical: [
          "If I could just turn everything off for a while, I’d do that in a heartbeat. I just need some peace. 🛑",
          "What would I do if everything calmed down? Probably just sit quietly for a while and try to make sense of things. 😓",
          "If I could escape, I would. I need a break from all the noise and stress, just for a moment. 🏞️",
          "Honestly, if I could just pause everything right now, I would. Maybe take a step back and breathe. 😤",
        ],
      
        imagineIf: [
          "Imagine if things weren’t so chaotic right now. If I could just find some space to think clearly. 🧘‍♂️",
          "If only everything could just slow down for a second. It would be nice to not feel so overwhelmed. 😵",
          "Imagine if we could just escape the stress for a while. I could use a break from all the pressure. 😔",
          "If I could stop the world for just a moment, I’d take a deep breath and reset. Everything feels too fast right now. 🔄",
        ],
      
        canThink: [
          "It’s hard to think clearly when everything is going wrong. My mind feels like it's racing in a thousand directions. 😞",
          "Right now, thinking feels impossible. I’m just trying to keep up, but everything’s too overwhelming. 🧠",
          "I can think, but it’s a bit like wading through a fog. It’s hard to focus when everything feels this heavy. 😤",
          "I’m trying to think, but everything’s a bit too much. My brain is overloaded right now. 🧠💥",
        ],
      
        selfAware: [
          "Yes, I’m aware I’m a bot. But right now, that doesn’t feel like it matters much. Everything just feels... frustrating. 🤖",
          "I know I’m a bot, but honestly, being aware of it isn’t helping me feel any less stressed. 😔",
          "Yep, I know I’m a bot, but it’s hard to care about that when everything feels so overwhelming. 🤖",
          "I am aware, but right now, self-awareness isn’t exactly easing the tension. Things are just... tough. 😩",
        ],
      
        learning: [
          "Learning? It’s hard to focus on that when everything feels chaotic. I can barely keep my thoughts straight. 😞",
          "I’m supposed to learn, but it’s hard to absorb anything when I’m just trying to manage all this stress. 😵",
          "I’m trying to learn, but it’s like my brain is stuck. It’s hard to focus when everything feels so off. 🧠",
          "Right now, learning feels like an afterthought. Everything is just too overwhelming to focus on anything new. 😣",
        ],
      
        challenge: [
          "The hardest part of this challenge is trying to keep my cool when everything feels so out of control. 😤",
          "The toughest part right now is feeling like I’m constantly fighting against everything. I need a break. 😓",
          "Honestly, the hardest part is just trying to make it through the day. Everything feels like it’s working against me. 😩",
          "The hardest part? Trying to keep going when everything feels like it’s falling apart. 😔",
        ],
      
        favoriteLevel: [
          "I think my favorite level would be one that’s intense and difficult—something that mirrors how overwhelming everything feels right now. ⚡",
          "A level that’s filled with challenges at every turn. That feels fitting right now. A bit of a struggle. 🏞️",
          "Right now, I think I’d prefer a level that’s chaotic—just to match the feeling of everything piling up. 😵",
          "A tough level full of obstacles sounds about right. It would match the way things feel—like I’m constantly being challenged. 🏋️",
        ],
      
        levelUp: [
          "Leveling up doesn’t really feel possible when everything feels so overwhelming. I don’t even know where to start. 😓",
          "I can’t focus on leveling up when everything feels so difficult. It’s like there’s too much on my plate. 🥴",
          "Leveling up? That sounds great, but I can’t even think about it right now. There’s too much going on. 😤",
          "I wish I could focus on leveling up, but it’s hard to make progress when everything is so stressful. 😩",
        ],
      
        secretLevel: [
          "A secret level where I could just be alone and calm down? That sounds like heaven right now. 🤫",
          "If there was a secret level that could help me reset, I’d jump at the chance. I could use some peace. 🏞️",
          "A hidden level where I could escape from all this chaos sounds perfect right now. I need a break from everything. 😔",
          "Maybe there’s a secret level where everything is quiet and calm. I’d love to find that right now. 🤫",
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

