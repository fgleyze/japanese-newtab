const dictionary = [
    // --- GREETINGS & BASICS ---
    { en: "Hello", romaji: "Konnichiwa", kana: "こんにちは", kanji: "こんにちは", cat: "Greetings" },
    { en: "Good morning", romaji: "Ohayou gozaimasu", kana: "おはよう ございます", kanji: "おはようございます", cat: "Greetings" },
    { en: "Good evening", romaji: "Konbanwa", kana: "こんばんは", kanji: "こんばんは", cat: "Greetings" },
    { en: "Good night", romaji: "Oyasumi nasai", kana: "おやすみ なさい", kanji: "おやすみなさい", cat: "Greetings" },
    { en: "Thank you", romaji: "Arigatou gozaimasu", kana: "ありがとうございます", kanji: "ありがとうございます", cat: "Greetings" },
    { en: "You're welcome", romaji: "Dou itashimashite", kana: "どう いたしまして", kanji: "どういたしまして", cat: "Greetings" },
    { en: "Excuse me / I'm sorry", romaji: "Sumimasen", kana: "すみません", kanji: "すみません", cat: "Greetings" },
    { en: "I'm sorry (apology)", romaji: "Gomen nasai", kana: "ごめん なさい", kanji: "ごめんなさい", cat: "Greetings" },
    { en: "Yes", romaji: "Hai", kana: "はい", kanji: "はい", cat: "Basics" },
    { en: "No", romaji: "Iie", kana: "いいえ", kanji: "いいえ", cat: "Basics" },
    { en: "Please (when asking)", romaji: "Onegaishimasu", kana: "おねがいします", kanji: "お願いします", cat: "Basics" },
    { en: "I don't understand", romaji: "Wakarimasen", kana: "わかりません", kanji: "分かりません", cat: "Basics" },
    { en: "Do you understand?", romaji: "Wakarimasu ka?", kana: "わかります か", kanji: "分かりますか", cat: "Basics" },

    // --- ORDERING & RESTAURANTS ---
    { en: "I would like this, please.", romaji: "Kore o kudasai", kana: "これ を ください", kanji: "これをください", cat: "Ordering" },
    { en: "Water, please.", romaji: "Mizu o kudasai", kana: "みず を ください", kanji: "水をください", cat: "Ordering" },
    { en: "Beer, please.", romaji: "Biiru o kudasai", kana: "ビール を ください", kanji: "ビールをください", cat: "Ordering" },
    { en: "Menu, please.", romaji: "Menyuu o kudasai", kana: "メニュー を ください", kanji: "メニューをください", cat: "Ordering" },
    { en: "Is it delicious?", romaji: "Oishii desu ka?", kana: "おいしい です か", kanji: "美味しいですか", cat: "Ordering" },
    { en: "It's delicious!", romaji: "Oishii desu!", kana: "おいしい です", kanji: "美味しいです", cat: "Ordering" },
    { en: "Check (bill), please.", romaji: "Okaikei onegaishimasu", kana: "おかいけい おねがいします", kanji: "お会計お願いします", cat: "Ordering" },
    { en: "Cheers!", romaji: "Kanpai!", kana: "かんぱい", kanji: "乾杯", cat: "Ordering" },
    { en: "I'll have this.", romaji: "Kore ni shimasu", kana: "これ に します", kanji: "これにします", cat: "Ordering" },
    { en: "Recommendation?", romaji: "Osusume wa?", kana: "おすすめ は", kanji: "お勧めは", cat: "Ordering" },

    // --- DIRECTIONS & TRAVEL ---
    { en: "Where is the train station?", romaji: "Eki wa doko desu ka?", kana: "えき は どこ です か", kanji: "駅はどこですか", cat: "Travel" },
    { en: "Where is the toilet?", romaji: "Toire wa doko desu ka?", kana: "といれ は どこ です か", kanji: "トイレはどこですか", cat: "Travel" },
    { en: "Does this train go to Tokyo?", romaji: "Kono densha wa Toukyou e ikimasu ka?", kana: "この でんしゃ は とうきょう へ いきます か", kanji: "この電車は東京へ行きますか", cat: "Travel" },
    { en: "One ticket to [place]", romaji: "[Place] made ichi mai", kana: "[ばしょ] まで いち まい", kanji: "[場所]まで一枚", cat: "Travel" },
    { en: "How do I get to [place]?", romaji: "[Place] wa dou ikimasu ka?", kana: "[ばしょ] は どう いきます か", kanji: "[場所]はどう行きますか", cat: "Travel" },
    { en: "I want to go to [place]", romaji: "[Place] ni ikitai desu", kana: "[ばしょ] に いきたい です", kanji: "[場所]に行きたいです", cat: "Travel" },
    { en: "Taxi", romaji: "Takushii", kana: "タクシー", kanji: "タクシー", cat: "Travel" },
    { en: "Map", romaji: "Chizu", kana: "ちず", kanji: "地図", cat: "Travel" },
    { en: "Stop here, please.", romaji: "Koko de tomete kudasai", kana: "ここ で とめて ください", kanji: "ここで止めてください", cat: "Travel" },
    { en: "Next stop", romaji: "Tsugi no eki", kana: "つぎ の えき", kanji: "次の駅", cat: "Travel" },

    // --- SHOPPING ---
    { en: "How much is this?", romaji: "Ikura desu ka?", kana: "いくら です か", kanji: "いくらですか", cat: "Shopping" },
    { en: "Too expensive", romaji: "Takai desu", kana: "たかい です", kanji: "高いです", cat: "Shopping" },
    { en: "Do you have [item]?", romaji: "[Item] wa arimasu ka?", kana: "[もの] は あります か", kanji: "[物]はありますか", cat: "Shopping" },
    { en: "Do you have Wi-Fi?", romaji: "Wi-Fi wa arimasu ka?", kana: "Wi-Fi は あります か", kanji: "Wi-Fiはありますか", cat: "Shopping" },
    { en: "Convenience Store", romaji: "Konbini", kana: "コンビニ", kanji: "コンビニ", cat: "Shopping" },
    { en: "I'm just looking", romaji: "Mite iru dake desu", kana: "みて いる だけ です", kanji: "見ているだけです", cat: "Shopping" },
    { en: "Can I try this on?", romaji: "Shichaku dekimasu ka?", kana: "しちゃく できます か", kanji: "試着できますか", cat: "Shopping" },

    // --- ESSENTIAL VOCABULARY ---
    { en: "Subway/Metro", romaji: "Chikatetsu", kana: "ちかてつ", kanji: "地下鉄", cat: "Vocabulary" },
    { en: "Hotel", romaji: "Hoteru", kana: "ホテル", kanji: "ホテル", cat: "Vocabulary" },
    { en: "Restaurant", romaji: "Resutoran", kana: "レストラン", kanji: "レストラン", cat: "Vocabulary" },
    { en: "Airport", romaji: "Kuukou", kana: "くうこう", kanji: "空港", cat: "Vocabulary" },
    { en: "Hospital", romaji: "Byouin", kana: "びょういん", kanji: "病院", cat: "Vocabulary" },
    { en: "Police", romaji: "Keisatsu", kana: "けいさつ", kanji: "警察", cat: "Vocabulary" },
    { en: "Right (direction)", romaji: "Migi", kana: "みぎ", kanji: "右", cat: "Vocabulary" },
    { en: "Left (direction)", romaji: "Hidari", kana: "ひだり", kanji: "左", cat: "Vocabulary" },
    { en: "Straight", romaji: "Massugu", kana: "まっすぐ", kanji: "真っ直ぐ", cat: "Vocabulary" },
    { en: "Today", romaji: "Kyou", kana: "きょう", kanji: "今日", cat: "Vocabulary" },
    { en: "Tomorrow", romaji: "Ashita", kana: "あした", kanji: "明日", cat: "Vocabulary" },
    { en: "Yesterday", romaji: "Kinou", kana: "きのう", kanji: "昨日", cat: "Vocabulary" },
    { en: "Morning", romaji: "Asa", kana: "あさ", kanji: "朝", cat: "Vocabulary" },
    { en: "Afternoon", romaji: "Gogo", kana: "ごご", kanji: "午後", cat: "Vocabulary" },
    { en: "Night", romaji: "Yoru", kana: "よる", kanji: "夜", cat: "Vocabulary" },
    { en: "Dangerous", romaji: "Abunai", kana: "あぶない", kanji: "危ない", cat: "Vocabulary" },
    { en: "Safe", romaji: "Anzen", kana: "あんぜん", kanji: "安全", cat: "Vocabulary" },
    { en: "Hot (temperature)", romaji: "Atsui", kana: "あつい", kanji: "暑い", cat: "Vocabulary" },
    { en: "Cold", romaji: "Samui", kana: "さむい", kanji: "寒い", cat: "Vocabulary" },

    // --- NUMBERS ---
    { en: "One", romaji: "Ichi", kana: "いち", kanji: "一", cat: "Numbers" },
    { en: "Two", romaji: "Ni", kana: "に", kanji: "二", cat: "Numbers" },
    { en: "Three", romaji: "San", kana: "さん", kanji: "三", cat: "Numbers" },
    { en: "Four", romaji: "Yon / Shi", kana: "よん / し", kanji: "四", cat: "Numbers" },
    { en: "Five", romaji: "Go", kana: "ご", kanji: "五", cat: "Numbers" },
    { en: "Ten", romaji: "Juu", kana: "じゅう", kanji: "十", cat: "Numbers" },
    { en: "Hundred", romaji: "Hyaku", kana: "ひゃく", kanji: "百", cat: "Numbers" },
    { en: "Thousand", romaji: "Sen", kana: "せん", kanji: "千", cat: "Numbers" },

    // --- TIME & PLACE EXPRESSIONS ---
    { en: "Now", romaji: "Ima", kana: "いま", kanji: "今", cat: "Time" },
    { en: "Later", romaji: "Ato de", kana: "あと で", kanji: "後で", cat: "Time" },
    { en: "What time?", romaji: "Nanji desu ka?", kana: "なんじ です か", kanji: "何時ですか", cat: "Time" },
    { en: "Here", romaji: "Koko", kana: "ここ", kanji: "ここ", cat: "Place" },
    { en: "There", romaji: "Soko", kana: "そこ", kanji: "そこ", cat: "Place" },
    { en: "Over there", romaji: "Asoko", kana: "あそこ", kanji: "あそこ", cat: "Place" },
    { en: "Where?", romaji: "Doko?", kana: "どこ", kanji: "何処", cat: "Place" },

    // --- PATTERN PRACTICE (Placeholders) ---
    { en: "[Item], please.", romaji: "[Item] o kudasai", kana: "[もの] を ください", kanji: "[物]をください", cat: "Pattern" },
    { en: "Where is [place]?", romaji: "[Place] wa doko desu ka?", kana: "[ばしょ] は どこ です か", kanji: "[場所]はどこですか", cat: "Pattern" },
    { en: "I like [thing]", romaji: "[Thing] ga suki desu", kana: "[もの] が すき です", kanji: "[物]が好きです", cat: "Pattern" },
    { en: "I don't like [thing]", romaji: "[Thing] ga kirai desu", kana: "[もの] が きらい です", kanji: "[物]が嫌いです", cat: "Pattern" },
    { en: "Do you have [item]?", romaji: "[Item] wa arimasu ka?", kana: "[もの] は あります か", kanji: "[物]はありますか", cat: "Pattern" },
    { en: "I want [item]", romaji: "[Item] ga hoshii desu", kana: "[もの] が ほしい です", kanji: "[物]が欲しいです", cat: "Pattern" },
    { en: "[Number] of this, please", romaji: "Kore o [number] kudasai", kana: "これ を [かず] ください", kanji: "これを[数]ください", cat: "Pattern" },
    { en: "Can I [verb]?", romaji: "[Verb] dekimasu ka?", kana: "[どうし] できます か", kanji: "[動詞]できますか", cat: "Pattern" },

    // --- FOOD & DRINK ---
    { en: "Rice", romaji: "Gohan", kana: "ごはん", kanji: "ご飯", cat: "Food" },
    { en: "Tea", romaji: "Ocha", kana: "おちゃ", kanji: "お茶", cat: "Food" },
    { en: "Coffee", romaji: "Koohii", kana: "コーヒー", kanji: "コーヒー", cat: "Food" },
    { en: "Ramen", romaji: "Raamen", kana: "ラーメン", kanji: "ラーメン", cat: "Food" },
    { en: "Sushi", romaji: "Sushi", kana: "すし", kanji: "寿司", cat: "Food" },

    // --- EMERGENCY ---
    { en: "Help!", romaji: "Tasukete!", kana: "たすけて", kanji: "助けて", cat: "Emergency" },
    { en: "I'm lost", romaji: "Mayotte imasu", kana: "まよって います", kanji: "迷っています", cat: "Emergency" },
    { en: "Call the police!", romaji: "Keisatsu o yonde!", kana: "けいさつ を よんで", kanji: "警察を呼んで", cat: "Emergency" },
    { en: "I need a doctor", romaji: "Isha ga hitsuyou desu", kana: "いしゃ が ひつよう です", kanji: "医者が必要です", cat: "Emergency" }
];

function getRandomEntry() {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex];
}

// Quiz modes: 1 = hide romaji, 2 = hide english, 3 = hide both romaji and english
let currentMode = 1;
let isRevealed = false;

function updateUI() {
    const entry = getRandomEntry();

    // Randomly select quiz mode
    currentMode = Math.floor(Math.random() * 3) + 1;
    isRevealed = false;

    // Always show kanji and kana
    document.getElementById('kana-text').textContent = entry.kana;
    document.getElementById('kanji-text').textContent = entry.kanji;
    document.getElementById('category-tag').textContent = entry.cat;

    const romajiEl = document.getElementById('romaji-text');
    const englishEl = document.getElementById('english-text');
    const revealBtn = document.getElementById('reveal-button');
    const nextBtn = document.getElementById('next-button');

    // Reset visibility
    romajiEl.classList.remove('blurred');
    englishEl.classList.remove('blurred');
    revealBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');

    // Set content
    romajiEl.textContent = entry.romaji;
    englishEl.textContent = entry.en;

    // Apply quiz mode
    if (currentMode === 1) {
        // Hide romaji (practice reading kana/kanji and knowing the meaning)
        romajiEl.classList.add('blurred');
        revealBtn.innerHTML = '<span>見</span> Reveal Romaji';
    } else if (currentMode === 2) {
        // Hide english (practice translating from Japanese)
        englishEl.classList.add('blurred');
        revealBtn.innerHTML = '<span>見</span> Reveal English';
    } else {
        // Hide both (practice reading kana/kanji without any hints)
        romajiEl.classList.add('blurred');
        englishEl.classList.add('blurred');
        revealBtn.innerHTML = '<span>見</span> Reveal Answer';
    }
}

function revealAnswer() {
    if (isRevealed) return;

    isRevealed = true;
    const romajiEl = document.getElementById('romaji-text');
    const englishEl = document.getElementById('english-text');
    const revealBtn = document.getElementById('reveal-button');
    const nextBtn = document.getElementById('next-button');

    // Remove blur to reveal answers
    romajiEl.classList.remove('blurred');
    englishEl.classList.remove('blurred');

    // Swap buttons
    revealBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateUI();

    // Add click event to reveal button
    const revealButton = document.getElementById('reveal-button');
    if (revealButton) {
        revealButton.addEventListener('click', revealAnswer);
    }

    // Add click event to next button
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', updateUI);
    }
});
