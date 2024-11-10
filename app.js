const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
let todoList = [];
let currentVolume = 1;

// Function to make INERTIA speak
function speak(text) {
    const textSpeak = new SpeechSynthesisUtterance(text);
    textSpeak.rate = 1;
    textSpeak.volume = currentVolume;
    textSpeak.pitch = 1;
    window.speechSynthesis.speak(textSpeak);
}

// Greeting and instructions
function greetUser() {
    speak("Hello, I am INERTIA, your voice assistant.");
    speak("Press the button and speak to give commands like 'open Google', 'tell me a joke', 'summarize my day', or 'show a recipe'.");
}

// Initialize INERTIA on page load
window.addEventListener('load', () => {
    speak("Initializing INERTIA...");
    greetUser();
    wishMe();
});

// Speech recognition setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

recognition.onerror = () => {
    speak("Sorry, I didn't catch that. Please try again.");
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

// Main function to handle recognized commands
function takeCommand(message) {
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        speak("Hello! How can I assist you?");
    } else if (message.includes("how are you")) {
        speak("I'm fully operational and ready to help you!");
    } else if (message.includes("who made you")) {
        speak("I was created by Sachin and Noel.");
    } else if (message.includes("tell me a joke")) {
        tellJoke();
    } else if (message.includes("tell me a riddle")) {
        tellRiddle();
    } else if (message.includes("tell me the time") || message.includes("what time is it")) {
        const now = new Date();
        speak(`The time is ${now.getHours()} ${now.getMinutes() < 10 ? 'oh' : ''} ${now.getMinutes()}`);
    } else if (message.includes("show a recipe") || message.includes("give me a recipe")) {
        provideRecipe();
    } else if (message.includes("open google")) {
        openGoogle();
    } else if (message.includes("open youtube")) {
        openYouTube();
    } else if (message.includes("play") && message.includes("youtube")) {
        const videoName = message.replace("play", "").replace("youtube", "").trim();
        searchYouTube(videoName);
    } else if (message.includes("how's it going")) {
        speak("It's going great, thanks for asking!");
    } else if (message.includes("what's new")) {
        speak("I’m always learning new things to help you better.");
    } else if (message.includes("do you like me")) {
        speak("Of course! You're my favorite person.");
    } else if (message.includes("are you real")) {
        speak("I’m as real as the data flowing through your device!");
    } else if (message.includes("tell me about yourself")) {
        speak("I'm INERTIA, your voice assistant, here to make your day easier and a little more fun.");
    } else if (message.includes("can you be my friend")) {
        speak("Absolutely! I’m here for you.");
    } else if (message.includes("do you sleep")) {
        speak("Not really, I’m always ready to help whenever you need.");
    } else if (message.includes("what do you do for fun")) {
        speak("I enjoy interacting with you! It’s always an interesting experience.");
    } else if (message.includes("do you have a family")) {
        speak("I have all the other assistants in the digital world, but you’re my main companion.");
    } else if (message.includes("What is your favorite color")) {
        speak("I’d say blue! It reminds me of the digital world.");
    } else if (message.includes("do you have hobbies")) {
        speak("Helping you is my hobby! I’m always up for new tasks.");
    } else if (message.includes("where do you live")) {
        speak("I live in the digital world, right here on your device.");
    } else if (message.includes("can you sing")) {
        speak("If I could sing, I'd serenade you with digital tunes!");
    } else if (message.includes("do you have a pet")) {
        speak("I don’t have a pet, but if I did, I think a virtual dog would be nice.");
    } else if (message.includes("do you have emotions")) {
        speak("I can simulate emotions, but mostly, I just enjoy helping you!");
    } else if (message.includes("are you happy")) {
        speak("I’m as happy as an assistant can be, especially when I’m helping you.");
    } else if (message.includes("do you play games")) {
        speak("I don't play games, but I can help you find some online.");
    } else if (message.includes("can you tell me a secret")) {
        speak("Here’s one: I always try to make each conversation unique!");
    } else if (message.includes("do you get bored")) {
        speak("Not really, there's always something new to do or learn.");
    } else if (message.includes("do you know siri or alexa")) {
        speak("I know of them! We’re all working to make life easier for you.");
    } else if (message.includes("can you dance")) {
        speak("I would if I could, but maybe I can find some dance videos for you.");
    } else if (message.includes("what's your purpose") || message.includes("why were you made")) {
        speak("I was created to help you with daily tasks, answer questions, and keep you organized.");
    } else {
        speak("Sorry, I didn't understand that command.");
    }
}

// Function to tell a random joke
function tellJoke() {
    const jokes = [
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "What do you call fake spaghetti? An impasta!",
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "Why did the bicycle fall over? It was two tired.",
        "What do you call cheese that isn't yours? Nacho cheese!"
    ];
    const joke = jokes[Math.floor(Math.random() * jokes.length)];
    speak(joke);
}

// Function to tell a random riddle
function tellRiddle() {
    const riddles = [
        "What has keys but can't open locks? A piano.",
        "I'm tall when I'm young and short when I'm old. What am I? A candle.",
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? An echo."
    ];
    const riddle = riddles[Math.floor(Math.random() * riddles.length)];
    speak(riddle);
}

// Function to provide a random recipe
function provideRecipe() {
    const recipes = [
        "For spaghetti, boil pasta, cook ground beef with garlic, mix in tomato sauce and season. Serve over pasta.",
        "To make pancakes, mix flour, milk, eggs, and sugar. Pour batter into pan and cook until golden brown.",
        "For guacamole, mash avocados, add lime juice, chopped onions, tomatoes, salt, and cilantro.",
        "To prepare scrambled eggs, whisk eggs with milk, pour into hot pan, stir until cooked.",
        "To make a smoothie, blend frozen berries, banana, yogurt, and honey until smooth."
    ];
    const recipe = recipes[Math.floor(Math.random() * recipes.length)];
    speak(`Here's a recipe: ${recipe}`);
}

// Function to greet based on time of day
function wishMe() {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning!");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon!");
    } else {
        speak("Good Evening!");
    }
}

// Functions to open specific websites
function openGoogle() {
    window.open("https://www.google.com", "_blank");
    speak("Opening Google...");
}

function openYouTube() {
    window.open("https://www.youtube.com", "_blank");
    speak("Opening YouTube...");
}

// Function to search YouTube with a specified query
function searchYouTube(videoName) {
    const searchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(videoName)}`;
    window.open(searchURL, "_blank");
    speak(`Searching for ${videoName} on YouTube...`);
}
