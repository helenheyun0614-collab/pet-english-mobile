(() => {
    // 内置50个核心词汇
    const vocab = [
        { word: "adventure", meaning: "冒险，奇遇", example: "We started a new adventure in the forest." },
        { word: "abroad", meaning: "在国外", example: "She's studying abroad this year." },
        { word: "accept", meaning: "接受", example: "I accept your invitation." },
        { word: "achieve", meaning: "达到，完成", example: "She achieved her goal." },
        { word: "activity", meaning: "活动", example: "Swimming is my favourite activity." },
        { word: "admit", meaning: "承认", example: "He admitted making a mistake." },
        { word: "advice", meaning: "建议", example: "Can you give me some advice?" },
        { word: "afford", meaning: "负担得起", example: "I can't afford a new car." },
        { word: "afraid", meaning: "害怕的", example: "Don't be afraid of mistakes." },
        { word: "agree", meaning: "同意", example: "I agree with you." },
        { word: "allow", meaning: "允许", example: "We don't allow smoking here." },
        { word: "amazing", meaning: "令人惊奇的", example: "What an amazing story!" },
        { word: "appear", meaning: "出现，似乎", example: "She appears to be happy." },
        { word: "apply", meaning: "申请，应用", example: "I want to apply for this job." },
        { word: "approach", meaning: "接近，方法", example: "Winter is approaching." },
        { word: "argue", meaning: "争论", example: "Don't argue with your parents." },
        { word: "arrange", meaning: "安排", example: "Let's arrange a meeting." },
        { word: "arrive", meaning: "到达", example: "We arrived at school early." },
        { word: "attack", meaning: "攻击", example: "The dog attacked the stranger." },
        { word: "attempt", meaning: "尝试", example: "She attempted to climb the mountain." },
        { word: "attend", meaning: "参加，出席", example: "Did you attend the party?" },
        { word: "attract", meaning: "吸引", example: "Flowers attract bees." },
        { word: "avoid", meaning: "避免", example: "Try to avoid mistakes." },
        { word: "award", meaning: "奖，授予", example: "She won an award." },
        { word: "aware", meaning: "意识到的", example: "Are you aware of the problem?" },
        { word: "balance", meaning: "平衡", example: "Keep your balance on the bike." },
        { word: "behave", meaning: "表现", example: "Please behave yourself." },
        { word: "believe", meaning: "相信", example: "I believe in you." },
        { id: 28, word: "belong", meaning: "属于", example: "This book belongs to me." },
        { word: "benefit", meaning: "益处", example: "Exercise has many benefits." },
        { word: "borrow", meaning: "借入", example: "Can I borrow your pen?" },
        { word: "bother", meaning: "打扰", example: "Sorry to bother you." },
        { word: "brave", meaning: "勇敢的", example: "He was very brave." },
        { word: "bright", meaning: "明亮的", example: "The sun is bright today." },
        { word: "brilliant", meaning: "聪明的，辉煌的", example: "She has a brilliant mind." },
        { word: "build", meaning: "建造", example: "They're building a new house." },
        { word: "calm", meaning: "平静的", example: "Please stay calm." },
        { word: "cancel", meaning: "取消", example: "We had to cancel the trip." },
        { word: "capable", meaning: "有能力的", example: "She's capable of doing it." },
        { word: "capital", meaning: "首都，资本", example: "Paris is the capital of France." },
        { word: "care", meaning: "关心，照顾", example: "I care about you." },
        { word: "careful", meaning: "小心的", example: "Be careful!" },
        { word: "celebrate", meaning: "庆祝", example: "Let's celebrate your birthday!" },
        { word: "century", meaning: "世纪", example: "We live in the 21st century." },
        { word: "certain", meaning: "确定的", example: "I'm certain about this." },
        { word: "challenge", meaning: "挑战", example: "This is a big challenge." },
        { word: "chance", meaning: "机会", example: "Give me another chance." },
        { word: "change", meaning: "改变", example: "People change over time." },
        { word: "character", meaning: "性格，角色", example: "He has a strong character." },
        { word: "choice", meaning: "选择", example: "You have no choice." }
    ];

    // 生成PET级别阅读理解题目（200道）
    const generateReadingSets = () => {
        const baseQuestions = [
            {
                id: 1,
                text: "Emma loves to help at her school library. Every Wednesday she arranges the books and recommends her favourite story to classmates.",
                question: "What does Emma do every Wednesday?",
                choices: [
                    { text: "She reads books at home", correct: false },
                    { text: "She helps at the library", correct: true },
                    { text: "She studies with friends", correct: false },
                    { text: "She plays sports", correct: false }
                ],
                tip: "注意关键词 'Every Wednesday'",
                feedbackCorrect: "答对了！Emma每周三在图书馆帮忙。",
                feedbackWrong: "再仔细读读文章，Emma周三做什么？"
            },
            {
                id: 2,
                text: "Last Saturday, Tom went to the cinema with his friends. They watched a funny movie and ate popcorn. Everyone had a great time.",
                question: "What did Tom do last Saturday?",
                choices: [
                    { text: "He stayed at home", correct: false },
                    { text: "He went to the cinema", correct: true },
                    { text: "He played football", correct: false },
                    { text: "He visited his grandparents", correct: false }
                ],
                tip: "Last Saturday是关键",
                feedbackCorrect: "正确！Tom去看电影了。",
                feedbackWrong: "看看Tom上周六去哪里了。"
            }
        ];

        // PET级别阅读理解题目模板（3-200）- 扩展版，包含更多题目
        const templates = [
            { text: "Sarah enjoys playing the piano. She practices for two hours every day after school. Her teacher says she is making excellent progress.", question: "How long does Sarah practice piano each day?", correct: "Two hours", wrongs: ["One hour", "Three hours", "Four hours"] },
            { text: "The library is open from Monday to Friday, 9am to 5pm. On weekends, it opens at 10am and closes at 4pm. Students can borrow up to five books at a time.", question: "When does the library close on weekdays?", correct: "5pm", wrongs: ["4pm", "6pm", "7pm"] },
            { text: "Mark loves reading adventure stories. He has read over fifty books this year. His favourite author writes about explorers and treasure hunters.", question: "What kind of books does Mark like?", correct: "Adventure stories", wrongs: ["Romance novels", "Science fiction", "History books"] },
            { text: "The school canteen serves lunch from 12:00 to 1:30. Today's menu includes pasta, salad, and fruit. Students can also bring their own lunch.", question: "What can students do for lunch?", correct: "Eat at canteen or bring lunch", wrongs: ["Only eat at the canteen", "Only bring lunch from home", "Order food online"] },
            { text: "Lucy's family moved to London last month. She started at a new school and has already made three good friends. She feels happy about the change.", question: "How does Lucy feel about moving?", correct: "Happy", wrongs: ["Sad", "Worried", "Angry"] },
            { text: "The sports club meets every Tuesday and Thursday at 4pm. Members can play football, basketball, or tennis. New members are always welcome.", question: "On which days does the sports club meet?", correct: "Tuesday and Thursday", wrongs: ["Monday and Wednesday", "Friday and Saturday", "Sunday only"] },
            { text: "James wants to become a doctor. He studies biology and chemistry at school. He also volunteers at the local hospital on weekends.", question: "Where does James volunteer?", correct: "At the hospital", wrongs: ["At school", "At home", "At the library"] },
            { text: "The museum is free for children under 12. Adults pay £5, and students with ID cards get a discount. The museum is closed on Mondays.", question: "How much do adults pay?", correct: "£5", wrongs: ["Free", "£3", "£10"] },
            { text: "My brother is learning to drive. He takes lessons twice a week. He hopes to pass his test next month.", question: "How often does he take driving lessons?", correct: "Twice a week", wrongs: ["Once a week", "Three times a week", "Every day"] },
            { text: "The park has a playground, a lake, and many trees. It's a great place for families. The park is open from 6am to 10pm every day.", question: "What time does the park close?", correct: "10pm", wrongs: ["8pm", "9pm", "11pm"] },
            { text: "Anna works in a bookshop. She helps customers find books and arranges displays. She loves her job because she enjoys reading.", question: "Why does Anna love her job?", correct: "She enjoys reading", wrongs: ["The pay is good", "It's easy work", "She works alone"] },
            { text: "The train leaves at 8:30am and arrives at 11:15am. The journey takes about three hours. Tickets cost £25 for adults.", question: "How long is the train journey?", correct: "About three hours", wrongs: ["Two hours", "Four hours", "Five hours"] },
            { text: "David plays football every Saturday morning. His team practices for one hour, then plays a match. He has been playing for three years.", question: "How long has David been playing football?", correct: "Three years", wrongs: ["One year", "Two years", "Four years"] },
            { text: "The café serves breakfast from 7am to 11am. They have eggs, toast, and coffee. Lunch is served from 12pm to 3pm.", question: "When is breakfast served?", correct: "7am to 11am", wrongs: ["6am to 10am", "8am to 12pm", "9am to 1pm"] },
            { text: "Maria studies French at university. She wants to work in France one day. She practices speaking with her French friend every week.", question: "What does Maria want to do?", correct: "Work in France", wrongs: ["Teach French", "Visit France", "Learn Spanish"] },
            { text: "The swimming pool is open from 6am to 9pm on weekdays. On weekends, it opens at 8am. Children under 5 swim for free.", question: "When does the pool open on weekdays?", correct: "6am", wrongs: ["7am", "8am", "9am"] },
            { text: "Peter collects stamps. He has over 500 stamps from different countries. His favourite stamps are from Japan.", question: "How many stamps does Peter have?", correct: "Over 500", wrongs: ["About 300", "Around 400", "More than 600"] },
            { text: "The concert starts at 7:30pm. Doors open at 6:30pm. Tickets are available online or at the venue.", question: "What time do the doors open?", correct: "6:30pm", wrongs: ["7:00pm", "7:30pm", "8:00pm"] },
            { text: "Lisa walks her dog every morning before school. The walk takes about 20 minutes. Her dog is called Max.", question: "How long does the walk take?", correct: "About 20 minutes", wrongs: ["10 minutes", "30 minutes", "40 minutes"] },
            { text: "The shop sells clothes, shoes, and accessories. It's open Monday to Saturday from 9am to 6pm. On Sundays, it's closed.", question: "What does the shop sell?", correct: "Clothes, shoes, and accessories", wrongs: ["Books and magazines", "Food and drinks", "Electronics"] },
            { text: "My friend loves cooking. She makes dinner for her family every evening. She learned to cook from her grandmother.", question: "Who taught her to cook?", correct: "Her grandmother", wrongs: ["Her mother", "Her teacher", "Her friend"] },
            { text: "The bus stop is next to the supermarket. Buses come every 15 minutes. The journey to the city centre takes 20 minutes.", question: "How often do buses come?", correct: "Every 15 minutes", wrongs: ["Every 10 minutes", "Every 20 minutes", "Every 30 minutes"] },
            { text: "John's birthday is in December. He will be 16 years old. He wants a new bicycle as a present.", question: "How old will John be?", correct: "16 years old", wrongs: ["15 years old", "17 years old", "18 years old"] },
            { text: "The school trip is next Friday. We will visit a science museum. Students need to bring a packed lunch.", question: "What do students need to bring?", correct: "A packed lunch", wrongs: ["Money", "A camera", "A notebook"] },
            { text: "My aunt lives in Australia. She visits us once a year. She always brings us interesting gifts.", question: "How often does the aunt visit?", correct: "Once a year", wrongs: ["Twice a year", "Every month", "Every week"] },
            { text: "The film starts at 8pm. It lasts for two hours. There will be a break in the middle.", question: "How long does the film last?", correct: "Two hours", wrongs: ["One hour", "Three hours", "Four hours"] },
            { text: "I enjoy playing tennis. I play with my friends every weekend. We usually play for about an hour.", question: "When does the person play tennis?", correct: "Every weekend", wrongs: ["Every day", "Once a month", "During the week"] },
            { text: "The restaurant is very popular. You need to book a table in advance. It's closed on Sundays.", question: "What do you need to do?", correct: "Book a table in advance", wrongs: ["Arrive early", "Bring friends", "Pay extra"] },
            { text: "My cousin is studying medicine. She wants to be a doctor. She has three more years of study.", question: "What does the cousin want to be?", correct: "A doctor", wrongs: ["A nurse", "A teacher", "A scientist"] },
            { text: "The weather forecast says it will rain tomorrow. We should take umbrellas. The temperature will be around 15 degrees.", question: "What will the weather be like tomorrow?", correct: "Rainy", wrongs: ["Sunny", "Cloudy", "Windy"] }
        ];

        // 生成更多题目以达到200道
        const allQuestions = [...baseQuestions];
        let id = 3;

        // 使用模板生成题目，通过变化细节创建多样性
        while (allQuestions.length < 200) {
            const templateIndex = (id - 3) % templates.length;
            const template = templates[templateIndex];

            // 为每个模板创建多个变体
            const cycle = Math.floor((id - 3) / templates.length);
            const nameVariations = ["Sarah", "Tom", "Emma", "Lucy", "Mark", "James", "Anna", "David", "Maria", "Peter", "Lisa", "John"];
            const name = nameVariations[cycle % nameVariations.length];

            // 替换名字（如果模板中有名字）
            let modifiedText = template.text;
            if (cycle > 0) {
                modifiedText = template.text.replace(/\b(Sarah|Tom|Emma|Lucy|Mark|James|Anna|David|Maria|Peter|Lisa|John|My friend|My brother|My sister|My cousin|My aunt)\b/gi, name);
            }

            allQuestions.push({
                id: id++,
                text: modifiedText,
                question: template.question,
                choices: [
                    { text: template.correct, correct: true },
                    ...template.wrongs.map(w => ({ text: w, correct: false }))
                ].sort(() => Math.random() - 0.5), // 随机排序选项
                tip: "仔细阅读文章，找出关键信息",
                feedbackCorrect: "答对了！",
                feedbackWrong: "再仔细读读文章。"
            });
        }

        return allQuestions.slice(0, 200);
    };

    const readingSets = generateReadingSets();

    // 生成PET级别完形填空题目（200道）
    const generateClozeSets = () => {
        const baseCloze = [
            {
                id: 1,
                text: [
                    "Yesterday, I ",
                    { answer: "went", options: ["go", "went", "going", "gone"] },
                    " to the park. The weather ",
                    { answer: "was", options: ["is", "was", "are", "were"] },
                    " beautiful. I ",
                    { answer: "played", options: ["play", "played", "playing", "plays"] },
                    " with my friends."
                ],
                tip: "注意过去时态",
                feedbackCorrect: "太棒了！时态掌握得很好！",
                feedbackWrong: "注意Yesterday提示用过去时。"
            },
            {
                id: 2,
                text: [
                    "Every morning, Tom ",
                    { answer: "gets", options: ["get", "gets", "got", "getting"] },
                    " up at 7 o'clock. He ",
                    { answer: "has", options: ["have", "has", "had", "having"] },
                    " breakfast and ",
                    { answer: "goes", options: ["go", "goes", "went", "going"] },
                    " to school."
                ],
                tip: "注意第三人称单数",
                feedbackCorrect: "完美！主谓一致掌握得很好！",
                feedbackWrong: "Tom是第三人称单数，动词要加s。"
            }
        ];

        // PET级别完形填空模板
        const templates = [
            {
                text: [
                    "Last summer, I ",
                    { answer: "visited", options: ["visit", "visited", "visiting", "visits"] },
                    " my grandparents. They ",
                    { answer: "live", options: ["live", "lived", "living", "lives"] },
                    " in a small village. We ",
                    { answer: "had", options: ["have", "had", "having", "has"] },
                    " a wonderful time together."
                ],
                tip: "注意时态变化"
            },
            {
                text: [
                    "My sister ",
                    { answer: "loves", options: ["love", "loves", "loved", "loving"] },
                    " reading books. She ",
                    { answer: "reads", options: ["read", "reads", "reading", "readed"] },
                    " at least one book every week. I ",
                    { answer: "think", options: ["think", "thinks", "thought", "thinking"] },
                    " she is very clever."
                ],
                tip: "注意第三人称单数"
            },
            {
                text: [
                    "Tomorrow, we ",
                    { answer: "will go", options: ["go", "went", "will go", "going"] },
                    " to the beach. The weather ",
                    { answer: "will be", options: ["is", "was", "will be", "be"] },
                    " sunny. I ",
                    { answer: "am looking", options: ["look", "looked", "am looking", "looks"] },
                    " forward to it."
                ],
                tip: "注意将来时"
            },
            {
                text: [
                    "I ",
                    { answer: "have been", options: ["am", "was", "have been", "will be"] },
                    " studying English for three years. I ",
                    { answer: "can", options: ["can", "could", "will", "must"] },
                    " speak it quite well now. My teacher ",
                    { answer: "is", options: ["is", "was", "are", "were"] },
                    " very helpful."
                ],
                tip: "注意现在完成时和情态动词"
            },
            {
                text: [
                    "When I ",
                    { answer: "was", options: ["am", "was", "is", "are"] },
                    " young, I ",
                    { answer: "wanted", options: ["want", "wanted", "wants", "wanting"] },
                    " to be a pilot. Now I ",
                    { answer: "want", options: ["want", "wanted", "wants", "wanting"] },
                    " to be a teacher instead."
                ],
                tip: "注意过去时和现在时的对比"
            },
            {
                text: [
                    "She ",
                    { answer: "has", options: ["have", "has", "had", "having"] },
                    " a beautiful garden. Every morning, she ",
                    { answer: "waters", options: ["water", "waters", "watered", "watering"] },
                    " the plants. They ",
                    { answer: "grow", options: ["grow", "grows", "grew", "growing"] },
                    " very well."
                ],
                tip: "注意第三人称单数和复数"
            },
            {
                text: [
                    "If it ",
                    { answer: "rains", options: ["rain", "rains", "rained", "raining"] },
                    " tomorrow, we ",
                    { answer: "will stay", options: ["stay", "stayed", "will stay", "staying"] },
                    " at home. We ",
                    { answer: "will watch", options: ["watch", "watched", "will watch", "watching"] },
                    " a film instead."
                ],
                tip: "注意if条件句的时态"
            },
            {
                text: [
                    "I ",
                    { answer: "am", options: ["am", "is", "are", "was"] },
                    " very tired today. I ",
                    { answer: "worked", options: ["work", "worked", "working", "works"] },
                    " late last night. I ",
                    { answer: "need", options: ["need", "needed", "needs", "needing"] },
                    " to rest now."
                ],
                tip: "注意时态变化"
            }
        ];

        const allCloze = [...baseCloze];
        let id = 3;

        // 生成更多题目以达到200道
        while (allCloze.length < 200) {
            const template = templates[(id - 3) % templates.length];
            const newCloze = {
                id: id++,
                text: JSON.parse(JSON.stringify(template.text)), // 深拷贝
                tip: template.tip,
                feedbackCorrect: "很好！时态和语法都正确！",
                feedbackWrong: "再仔细检查一下时态和语法。"
            };
            allCloze.push(newCloze);
        }

        return allCloze.slice(0, 200);
    };

    const clozeSets = generateClozeSets();

    const shuffleArray = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    const collocationSets = [
        // Make/Do搭配 (1-20)
        { id: 1, sentence: "I need to _____ a decision about university.", answer: "make", options: ["make", "do", "take", "have"], tip: "make a decision固定搭配" },
        { id: 2, sentence: "Can you help me _____ my homework?", answer: "do", options: ["do", "make", "take", "finish"], tip: "do homework固定搭配" },
        { id: 3, sentence: "She always _____ mistakes when tired.", answer: "makes", options: ["makes", "does", "takes", "has"], tip: "make mistakes固定搭配" },
        { id: 4, sentence: "I need to _____ a phone call.", answer: "make", options: ["make", "do", "give", "take"], tip: "make a phone call固定搭配" },
        { id: 5, sentence: "Let's _____ our best to finish this.", answer: "do", options: ["do", "make", "give", "try"], tip: "do one's best固定搭配" },
        { id: 6, sentence: "He _____ progress in English this year.", answer: "made", options: ["made", "did", "took", "had"], tip: "make progress固定搭配" },
        { id: 7, sentence: "Can you _____ me a favour?", answer: "do", options: ["do", "make", "give", "take"], tip: "do someone a favour固定搭配" },
        { id: 8, sentence: "We need to _____ an appointment.", answer: "make", options: ["make", "do", "take", "have"], tip: "make an appointment固定搭配" },
        { id: 9, sentence: "She _____ an effort to arrive on time.", answer: "made", options: ["made", "did", "took", "gave"], tip: "make an effort固定搭配" },
        { id: 10, sentence: "I always _____ the shopping on Saturdays.", answer: "do", options: ["do", "make", "go", "have"], tip: "do the shopping固定搭配" },
        { id: 11, sentence: "They _____ a deal to share the costs.", answer: "made", options: ["made", "did", "took", "struck"], tip: "make a deal固定搭配" },
        { id: 12, sentence: "He needs to _____ the washing up.", answer: "do", options: ["do", "make", "finish", "complete"], tip: "do the washing up固定搭配" },
        { id: 13, sentence: "Let me _____ a suggestion.", answer: "make", options: ["make", "do", "give", "offer"], tip: "make a suggestion固定搭配" },
        { id: 14, sentence: "I need to _____ some exercise.", answer: "do", options: ["do", "make", "take", "have"], tip: "do exercise固定搭配" },
        { id: 15, sentence: "She _____ a promise to help us.", answer: "made", options: ["made", "did", "gave", "took"], tip: "make a promise固定搭配" },
        { id: 16, sentence: "Can you _____ the dishes tonight?", answer: "do", options: ["do", "make", "wash", "clean"], tip: "do the dishes固定搭配" },
        { id: 17, sentence: "We should _____ a plan before we start.", answer: "make", options: ["make", "do", "create", "prepare"], tip: "make a plan固定搭配" },
        { id: 18, sentence: "He always _____ his job very well.", answer: "does", options: ["does", "makes", "performs", "completes"], tip: "do one's job固定搭配" },
        { id: 19, sentence: "They _____ a choice to move to London.", answer: "made", options: ["made", "did", "took", "had"], tip: "make a choice固定搭配" },
        { id: 20, sentence: "I need to _____ some research.", answer: "do", options: ["do", "make", "conduct", "perform"], tip: "do research固定搭配" },

        // Have/Take搭配 (21-40)
        { id: 21, sentence: "Let's _____ a break for ten minutes.", answer: "take", options: ["take", "make", "do", "have"], tip: "take a break固定搭配" },
        { id: 22, sentence: "I _____ a shower every morning.", answer: "have", options: ["have", "take", "make", "get"], tip: "have a shower固定搭配" },
        { id: 23, sentence: "Can I _____ a look at your photos?", answer: "take", options: ["take", "have", "make", "get"], tip: "take a look固定搭配" },
        { id: 24, sentence: "We _____ a great time at the party.", answer: "had", options: ["had", "took", "made", "spent"], tip: "have a great time固定搭配" },
        { id: 25, sentence: "Please _____ a seat and wait here.", answer: "take", options: ["take", "have", "get", "find"], tip: "take a seat固定搭配" },
        { id: 26, sentence: "They _____ a conversation about it.", answer: "had", options: ["had", "made", "took", "held"], tip: "have a conversation固定搭配" },
        { id: 27, sentence: "I need to _____ a nap after lunch.", answer: "take", options: ["take", "have", "make", "get"], tip: "take a nap固定搭配" },
        { id: 28, sentence: "She _____ breakfast at seven.", answer: "has", options: ["has", "takes", "makes", "eats"], tip: "have breakfast固定搭配" },
        { id: 29, sentence: "We should _____ a photo of this.", answer: "take", options: ["take", "make", "get", "shoot"], tip: "take a photo固定搭配" },
        { id: 30, sentence: "He _____ a cold last week.", answer: "had", options: ["had", "got", "caught", "took"], tip: "have a cold固定搭配" },
        { id: 31, sentence: "Let me _____ a chance to explain.", answer: "have", options: ["have", "take", "get", "find"], tip: "have a chance固定搭配" },
        { id: 32, sentence: "They _____ a walk in the park.", answer: "take", options: ["take", "have", "make", "go"], tip: "take a walk固定搭配" },
        { id: 33, sentence: "I _____ an argument with my sister.", answer: "had", options: ["had", "made", "got", "started"], tip: "have an argument固定搭配" },
        { id: 34, sentence: "Can you _____ a message for me?", answer: "take", options: ["take", "have", "leave", "give"], tip: "take a message固定搭配" },
        { id: 35, sentence: "We _____ a meeting yesterday.", answer: "had", options: ["had", "took", "held", "attended"], tip: "have a meeting固定搭配" },
        { id: 36, sentence: "I need to _____ a rest now.", answer: "take", options: ["take", "have", "get", "need"], tip: "take a rest固定搭配" },
        { id: 37, sentence: "She _____ a dream about flying.", answer: "had", options: ["had", "saw", "dreamed", "got"], tip: "have a dream固定搭配" },
        { id: 38, sentence: "Let's _____ a trip to the beach.", answer: "take", options: ["take", "make", "have", "go"], tip: "take a trip固定搭配" },
        { id: 39, sentence: "They _____ lunch at one o'clock.", answer: "have", options: ["have", "take", "eat", "get"], tip: "have lunch固定搭配" },
        { id: 40, sentence: "Please _____ your time choosing.", answer: "take", options: ["take", "have", "spend", "use"], tip: "take your time固定搭配" },

        // Get搭配 (41-60)
        { id: 41, sentence: "I need to _____ ready for school.", answer: "get", options: ["get", "make", "be", "become"], tip: "get ready固定搭配" },
        { id: 42, sentence: "He _____ angry when he heard it.", answer: "got", options: ["got", "became", "was", "turned"], tip: "get angry固定搭配" },
        { id: 43, sentence: "We should _____ home before dark.", answer: "get", options: ["get", "arrive", "reach", "come"], tip: "get home固定搭配" },
        { id: 44, sentence: "She _____ married last summer.", answer: "got", options: ["got", "became", "was", "went"], tip: "get married固定搭配" },
        { id: 45, sentence: "I need to _____ some sleep tonight.", answer: "get", options: ["get", "have", "take", "catch"], tip: "get sleep固定搭配" },
        { id: 46, sentence: "They _____ lost in the city.", answer: "got", options: ["got", "became", "were", "went"], tip: "get lost固定搭配" },
        { id: 47, sentence: "Can you _____ in touch with John?", answer: "get", options: ["get", "keep", "stay", "be"], tip: "get in touch固定搭配" },
        { id: 48, sentence: "He _____ dressed quickly.", answer: "got", options: ["got", "was", "became", "went"], tip: "get dressed固定搭配" },
        { id: 49, sentence: "We _____ tired after the walk.", answer: "got", options: ["got", "became", "felt", "were"], tip: "get tired固定搭配" },
        { id: 50, sentence: "I need to _____ better at maths.", answer: "get", options: ["get", "become", "be", "grow"], tip: "get better固定搭配" },
        { id: 51, sentence: "She _____ excited about the trip.", answer: "got", options: ["got", "became", "was", "felt"], tip: "get excited固定搭配" },
        { id: 52, sentence: "Let's _____ started with the work.", answer: "get", options: ["get", "begin", "start", "commence"], tip: "get started固定搭配" },
        { id: 53, sentence: "He _____ rid of his old clothes.", answer: "got", options: ["got", "threw", "removed", "disposed"], tip: "get rid of固定搭配" },
        { id: 54, sentence: "We need to _____ permission first.", answer: "get", options: ["get", "obtain", "receive", "ask"], tip: "get permission固定搭配" },
        { id: 55, sentence: "I _____ wet in the rain.", answer: "got", options: ["got", "became", "was", "went"], tip: "get wet固定搭配" },
        { id: 56, sentence: "They _____ along well together.", answer: "get", options: ["get", "go", "work", "fit"], tip: "get along固定搭配" },
        { id: 57, sentence: "She _____ worried about the exam.", answer: "got", options: ["got", "became", "was", "felt"], tip: "get worried固定搭配" },
        { id: 58, sentence: "He _____ better at playing guitar.", answer: "got", options: ["got", "became", "grew", "improved"], tip: "get better固定搭配" },
        { id: 59, sentence: "I need to _____ some fresh air.", answer: "get", options: ["get", "have", "take", "breathe"], tip: "get fresh air固定搭配" },
        { id: 60, sentence: "We _____ back from holiday yesterday.", answer: "got", options: ["got", "came", "went", "returned"], tip: "get back固定搭配" },

        // Give/Pay/Keep搭配 (61-80)
        { id: 61, sentence: "Can you _____ attention in class?", answer: "pay", options: ["pay", "give", "take", "make"], tip: "pay attention固定搭配" },
        { id: 62, sentence: "She _____ advice to her friends.", answer: "gives", options: ["gives", "makes", "offers", "provides"], tip: "give advice固定搭配" },
        { id: 63, sentence: "I need to _____ a visit to grandma.", answer: "pay", options: ["pay", "make", "take", "give"], tip: "pay a visit固定搭配" },
        { id: 64, sentence: "He _____ a speech at the event.", answer: "gave", options: ["gave", "made", "delivered", "presented"], tip: "give a speech固定搭配" },
        { id: 65, sentence: "We should _____ respect to teachers.", answer: "pay", options: ["pay", "give", "show", "offer"], tip: "pay respect固定搭配" },
        { id: 66, sentence: "She _____ a hand to her neighbour.", answer: "gave", options: ["gave", "lent", "offered", "provided"], tip: "give a hand固定搭配" },
        { id: 67, sentence: "I need to _____ calm during the test.", answer: "keep", options: ["keep", "stay", "remain", "be"], tip: "keep calm固定搭配" },
        { id: 68, sentence: "They _____ the bill at the restaurant.", answer: "paid", options: ["paid", "settled", "covered", "met"], tip: "pay the bill固定搭配" },
        { id: 69, sentence: "Can you _____ me a call later?", answer: "give", options: ["give", "make", "ring", "telephone"], tip: "give a call固定搭配" },
        { id: 70, sentence: "He _____ quiet during the movie.", answer: "kept", options: ["kept", "stayed", "remained", "was"], tip: "keep quiet固定搭配" },
        { id: 71, sentence: "I need to _____ back the book.", answer: "give", options: ["give", "take", "bring", "return"], tip: "give back固定搭配" },
        { id: 72, sentence: "We should _____ the promise we made.", answer: "keep", options: ["keep", "hold", "maintain", "honor"], tip: "keep a promise固定搭配" },
        { id: 73, sentence: "She _____ a compliment to her friend.", answer: "paid", options: ["paid", "gave", "made", "offered"], tip: "pay a compliment固定搭配" },
        { id: 74, sentence: "They _____ permission to leave early.", answer: "gave", options: ["gave", "granted", "provided", "offered"], tip: "give permission固定搭配" },
        { id: 75, sentence: "I need to _____ in touch with friends.", answer: "keep", options: ["keep", "stay", "get", "remain"], tip: "keep in touch固定搭配" },
        { id: 76, sentence: "He _____ the price for his mistakes.", answer: "paid", options: ["paid", "suffered", "bore", "faced"], tip: "pay the price固定搭配" },
        { id: 77, sentence: "Can you _____ an example?", answer: "give", options: ["give", "provide", "show", "offer"], tip: "give an example固定搭配" },
        { id: 78, sentence: "She _____ fit by exercising.", answer: "keeps", options: ["keeps", "stays", "remains", "gets"], tip: "keep fit固定搭配" },
        { id: 79, sentence: "We need to _____ tribute to heroes.", answer: "pay", options: ["pay", "give", "show", "offer"], tip: "pay tribute固定搭配" },
        { id: 80, sentence: "He _____ up smoking last year.", answer: "gave", options: ["gave", "stopped", "quit", "finished"], tip: "give up固定搭配" },

        // Go/Come搭配 (81-100)
        { id: 81, sentence: "Let's _____ shopping this afternoon.", answer: "go", options: ["go", "do", "make", "take"], tip: "go shopping固定搭配" },
        { id: 82, sentence: "She _____ home at five o'clock.", answer: "came", options: ["came", "went", "got", "arrived"], tip: "come home固定搭配" },
        { id: 83, sentence: "We _____ swimming every Sunday.", answer: "go", options: ["go", "do", "make", "play"], tip: "go swimming固定搭配" },
        { id: 84, sentence: "He _____ first in the race.", answer: "came", options: ["came", "went", "got", "finished"], tip: "come first固定搭配" },
        { id: 85, sentence: "They _____ abroad for holiday.", answer: "went", options: ["went", "came", "traveled", "flew"], tip: "go abroad固定搭配" },
        { id: 86, sentence: "The dream _____ true eventually.", answer: "came", options: ["came", "went", "became", "turned"], tip: "come true固定搭配" },
        { id: 87, sentence: "I need to _____ out tonight.", answer: "go", options: ["go", "come", "get", "walk"], tip: "go out固定搭配" },
        { id: 88, sentence: "She _____ across an old friend.", answer: "came", options: ["came", "went", "ran", "bumped"], tip: "come across固定搭配" },
        { id: 89, sentence: "We should _____ for a walk.", answer: "go", options: ["go", "take", "have", "walk"], tip: "go for a walk固定搭配" },
        { id: 90, sentence: "The price _____ down last month.", answer: "came", options: ["came", "went", "fell", "dropped"], tip: "come down固定搭配" },
        { id: 91, sentence: "He _____ fishing with his father.", answer: "goes", options: ["goes", "does", "plays", "makes"], tip: "go fishing固定搭配" },
        { id: 92, sentence: "They _____ to an agreement.", answer: "came", options: ["came", "went", "reached", "arrived"], tip: "come to an agreement固定搭配" },
        { id: 93, sentence: "Let's _____ on holiday next week.", answer: "go", options: ["go", "take", "have", "be"], tip: "go on holiday固定搭配" },
        { id: 94, sentence: "She _____ to bed early last night.", answer: "went", options: ["went", "came", "got", "was"], tip: "go to bed固定搭配" },
        { id: 95, sentence: "The results _____ out yesterday.", answer: "came", options: ["came", "went", "got", "were"], tip: "come out固定搭配" },
        { id: 96, sentence: "We _____ wrong somewhere.", answer: "went", options: ["went", "came", "got", "did"], tip: "go wrong固定搭配" },
        { id: 97, sentence: "He _____ up with a great idea.", answer: "came", options: ["came", "went", "thought", "made"], tip: "come up with固定搭配" },
        { id: 98, sentence: "They _____ back to their country.", answer: "went", options: ["went", "came", "got", "returned"], tip: "go back固定搭配" },
        { id: 99, sentence: "The story _____ to an end.", answer: "came", options: ["came", "went", "got", "reached"], tip: "come to an end固定搭配" },
        { id: 100, sentence: "I _____ jogging every morning.", answer: "go", options: ["go", "do", "make", "run"], tip: "go jogging固定搭配" },

        // Run/Break搭配 (101-120)
        { id: 101, sentence: "We _____ out of milk this morning.", answer: "ran", options: ["ran", "went", "came", "got"], tip: "run out of固定搭配" },
        { id: 102, sentence: "He _____ the law by speeding.", answer: "broke", options: ["broke", "violated", "disobeyed", "ignored"], tip: "break the law固定搭配" },
        { id: 103, sentence: "I _____ into an old teacher yesterday.", answer: "ran", options: ["ran", "came", "bumped", "met"], tip: "run into固定搭配" },
        { id: 104, sentence: "She _____ the news to her parents.", answer: "broke", options: ["broke", "told", "gave", "shared"], tip: "break the news固定搭配" },
        { id: 105, sentence: "They _____ a business together.", answer: "run", options: ["run", "operate", "manage", "own"], tip: "run a business固定搭配" },
        { id: 106, sentence: "We _____ the record for most goals.", answer: "broke", options: ["broke", "beat", "set", "made"], tip: "break the record固定搭配" },
        { id: 107, sentence: "He _____ away from home at sixteen.", answer: "ran", options: ["ran", "went", "left", "escaped"], tip: "run away固定搭配" },
        { id: 108, sentence: "I _____ my promise to help.", answer: "broke", options: ["broke", "failed", "forgot", "ignored"], tip: "break a promise固定搭配" },
        { id: 109, sentence: "She _____ the risk of failing.", answer: "runs", options: ["runs", "takes", "faces", "risks"], tip: "run the risk固定搭配" },
        { id: 110, sentence: "They _____ up after five years.", answer: "broke", options: ["broke", "split", "ended", "separated"], tip: "break up固定搭配" },
        { id: 111, sentence: "We _____ late for the meeting.", answer: "ran", options: ["ran", "were", "came", "arrived"], tip: "run late固定搭配" },
        { id: 112, sentence: "He _____ his arm playing football.", answer: "broke", options: ["broke", "fractured", "injured", "hurt"], tip: "break one's arm固定搭配" },
        { id: 113, sentence: "The play _____ for two hours.", answer: "ran", options: ["ran", "lasted", "went", "continued"], tip: "run for固定搭配" },
        { id: 114, sentence: "We _____ even on the deal.", answer: "broke", options: ["broke", "came", "ended", "finished"], tip: "break even固定搭配" },
        { id: 115, sentence: "I _____ short of time today.", answer: "ran", options: ["ran", "went", "came", "got"], tip: "run short固定搭配" },
        { id: 116, sentence: "She _____ the ice with a joke.", answer: "broke", options: ["broke", "melted", "eased", "lightened"], tip: "break the ice固定搭配" },
        { id: 117, sentence: "We _____ a marathon last month.", answer: "ran", options: ["ran", "did", "completed", "finished"], tip: "run a marathon固定搭配" },
        { id: 118, sentence: "He _____ the silence with a cough.", answer: "broke", options: ["broke", "ended", "stopped", "interrupted"], tip: "break the silence固定搭配" },
        { id: 119, sentence: "I _____ loose from the rope.", answer: "broke", options: ["broke", "got", "came", "freed"], tip: "break loose固定搭配" },
        { id: 120, sentence: "They _____ the rules constantly.", answer: "break", options: ["break", "violate", "disobey", "ignore"], tip: "break the rules固定搭配" },

        // Catch/Miss/Lose搭配 (121-140)
        { id: 121, sentence: "I need to _____ the bus at six.", answer: "catch", options: ["catch", "take", "get", "board"], tip: "catch the bus固定搭配" },
        { id: 122, sentence: "He _____ his wallet on the train.", answer: "lost", options: ["lost", "forgot", "dropped", "misplaced"], tip: "lose one's wallet固定搭配" },
        { id: 123, sentence: "We _____ the train by two minutes.", answer: "missed", options: ["missed", "lost", "caught", "took"], tip: "miss the train固定搭配" },
        { id: 124, sentence: "She _____ a cold from her brother.", answer: "caught", options: ["caught", "got", "had", "developed"], tip: "catch a cold固定搭配" },
        { id: 125, sentence: "I _____ weight during the holidays.", answer: "lost", options: ["lost", "dropped", "reduced", "decreased"], tip: "lose weight固定搭配" },
        { id: 126, sentence: "They _____ the opportunity.", answer: "missed", options: ["missed", "lost", "wasted", "passed"], tip: "miss an opportunity固定搭配" },
        { id: 127, sentence: "He _____ someone's attention.", answer: "caught", options: ["caught", "got", "attracted", "drew"], tip: "catch attention固定搭配" },
        { id: 128, sentence: "We _____ our way in the fog.", answer: "lost", options: ["lost", "missed", "forgot", "couldn't find"], tip: "lose one's way固定搭配" },
        { id: 129, sentence: "I _____ my keys somewhere.", answer: "lost", options: ["lost", "misplaced", "forgot", "dropped"], tip: "lose one's keys固定搭配" },
        { id: 130, sentence: "She _____ him red-handed.", answer: "caught", options: ["caught", "found", "discovered", "saw"], tip: "catch red-handed固定搭配" },
        { id: 131, sentence: "They _____ the point.", answer: "missed", options: ["missed", "lost", "understood", "got"], tip: "miss the point固定搭配" },
        { id: 132, sentence: "Wood _____ fire easily.", answer: "catches", options: ["catches", "gets", "takes", "lights"], tip: "catch fire固定搭配" },
        { id: 133, sentence: "We _____ contact with them.", answer: "lost", options: ["lost", "missed", "broke", "stopped"], tip: "lose contact固定搭配" },
        { id: 134, sentence: "I _____ my flight due to traffic.", answer: "missed", options: ["missed", "lost", "caught", "took"], tip: "miss a flight固定搭配" },
        { id: 135, sentence: "She _____ sight of her goals.", answer: "caught", options: ["caught", "got", "had", "found"], tip: "catch sight of固定搭配" },
        { id: 136, sentence: "They _____ hope after failures.", answer: "lost", options: ["lost", "gave up", "abandoned", "dropped"], tip: "lose hope固定搭配" },
        { id: 137, sentence: "He _____ the meeting yesterday.", answer: "missed", options: ["missed", "skipped", "forgot", "lost"], tip: "miss a meeting固定搭配" },
        { id: 138, sentence: "We need to _____ up with the news.", answer: "catch", options: ["catch", "keep", "stay", "get"], tip: "catch up固定搭配" },
        { id: 139, sentence: "I _____ my temper when tired.", answer: "lose", options: ["lose", "lost", "get", "have"], tip: "lose one's temper固定搭配" },
        { id: 140, sentence: "She _____ out on the fun.", answer: "missed", options: ["missed", "lost", "left", "skipped"], tip: "miss out固定搭配" },

        // Tell/Say/Speak/Talk搭配 (141-160)
        { id: 141, sentence: "Can you _____ the truth?", answer: "tell", options: ["tell", "say", "speak", "talk"], tip: "tell the truth固定搭配" },
        { id: 142, sentence: "He _____ hello to everyone.", answer: "said", options: ["said", "told", "spoke", "greeted"], tip: "say hello固定搭配" },
        { id: 143, sentence: "I need to _____ to the manager.", answer: "speak", options: ["speak", "talk", "say", "tell"], tip: "speak to固定搭配" },
        { id: 144, sentence: "Let's _____ about the problem.", answer: "talk", options: ["talk", "speak", "discuss", "chat"], tip: "talk about固定搭配" },
        { id: 145, sentence: "She _____ a lie to her parents.", answer: "told", options: ["told", "said", "spoke", "made"], tip: "tell a lie固定搭配" },
        { id: 146, sentence: "We _____ goodbye at the station.", answer: "said", options: ["said", "told", "waved", "bid"], tip: "say goodbye固定搭配" },
        { id: 147, sentence: "He _____ three languages fluently.", answer: "speaks", options: ["speaks", "talks", "says", "knows"], tip: "speak a language固定搭配" },
        { id: 148, sentence: "They _____ business over lunch.", answer: "talked", options: ["talked", "spoke", "discussed", "did"], tip: "talk business固定搭配" },
        { id: 149, sentence: "I _____ a joke to lighten the mood.", answer: "told", options: ["told", "said", "made", "cracked"], tip: "tell a joke固定搭配" },
        { id: 150, sentence: "She _____ sorry for what happened.", answer: "said", options: ["said", "told", "felt", "was"], tip: "say sorry固定搭配" },
        { id: 151, sentence: "Can you _____ up louder please?", answer: "speak", options: ["speak", "talk", "say", "shout"], tip: "speak up固定搭配" },
        { id: 152, sentence: "We need to _____ sense to him.", answer: "talk", options: ["talk", "speak", "make", "say"], tip: "talk sense固定搭配" },
        { id: 153, sentence: "He _____ a story to the children.", answer: "told", options: ["told", "said", "read", "narrated"], tip: "tell a story固定搭配" },
        { id: 154, sentence: "I _____ yes to the invitation.", answer: "said", options: ["said", "replied", "answered", "responded"], tip: "say yes固定搭配" },
        { id: 155, sentence: "She _____ highly of her teacher.", answer: "spoke", options: ["spoke", "talked", "said", "praised"], tip: "speak highly固定搭配" },
        { id: 156, sentence: "Can you _____ the difference?", answer: "tell", options: ["tell", "see", "notice", "spot"], tip: "tell the difference固定搭配" },
        { id: 157, sentence: "He _____ thank you to everyone.", answer: "said", options: ["said", "told", "gave", "expressed"], tip: "say thank you固定搭配" },
        { id: 158, sentence: "I _____ out against the decision.", answer: "spoke", options: ["spoke", "talked", "said", "protested"], tip: "speak out固定搭配" },
        { id: 159, sentence: "She can _____ the time from clocks.", answer: "tell", options: ["tell", "read", "know", "see"], tip: "tell the time固定搭配" },
        { id: 160, sentence: "They _____ no when asked.", answer: "said", options: ["said", "replied", "answered", "responded"], tip: "say no固定搭配" },

        // Bring/Put/Set搭配 (161-180)
        { id: 161, sentence: "Can you _____ the light on?", answer: "put the light on", options: ["put the light on", "turn the light on", "switch the light on", "make the light on"], tip: "put on固定搭配" },
        { id: 162, sentence: "She _____ up three children.", answer: "brought up", options: ["brought up", "raised up", "grew up", "took up"], tip: "bring up固定搭配" },
        { id: 163, sentence: "I need to _____ my mind to work.", answer: "set my mind", options: ["set my mind", "put my mind", "make my mind", "focus my mind"], tip: "set one's mind固定搭配" },
        { id: 164, sentence: "He _____ on his coat before leaving.", answer: "put on", options: ["put on", "wore on", "dressed on", "had on"], tip: "put on固定搭配" },
        { id: 165, sentence: "We _____ about a change in policy.", answer: "brought about", options: ["brought about", "made about", "caused about", "created about"], tip: "bring about固定搭配" },
        { id: 166, sentence: "They _____ an example for others.", answer: "set an example", options: ["set an example", "made an example", "gave an example", "showed an example"], tip: "set an example固定搭配" },
        { id: 167, sentence: "I _____ off my homework.", answer: "put off", options: ["put off", "postponed off", "delayed off", "pushed off"], tip: "put off固定搭配" },
        { id: 168, sentence: "She _____ back memories.", answer: "brought back", options: ["brought back", "took back", "recalled back", "remembered back"], tip: "bring back固定搭配" },
        { id: 169, sentence: "We need to _____ a date.", answer: "set a date", options: ["set a date", "make a date", "fix a date", "arrange a date"], tip: "set a date固定搭配" },
        { id: 170, sentence: "He _____ up with the noise.", answer: "puts up with", options: ["puts up with", "puts with", "tolerates with", "bears with"], tip: "put up with固定搭配" },
        { id: 171, sentence: "They _____ forward a proposal.", answer: "brought forward", options: ["brought forward", "put forward", "made forward", "gave forward"], tip: "bring forward固定搭配" },
        { id: 172, sentence: "She _____ away her clothes.", answer: "put away", options: ["put away", "took away", "stored away", "kept away"], tip: "put away固定搭配" },
        { id: 173, sentence: "He _____ off on a journey.", answer: "set off", options: ["set off", "went off", "started off", "began off"], tip: "set off固定搭配" },
        { id: 174, sentence: "I _____ down my thoughts.", answer: "put down", options: ["put down", "wrote down", "noted down", "set down"], tip: "put down固定搭配" },
        { id: 175, sentence: "She _____ us together as friends.", answer: "brought us together", options: ["brought us together", "put us together", "got us together", "made us together"], tip: "bring together固定搭配" },
        { id: 176, sentence: "They _____ out to achieve goals.", answer: "set out", options: ["set out", "went out", "started out", "began out"], tip: "set out固定搭配" },
        { id: 177, sentence: "He _____ down the government.", answer: "brought down", options: ["brought down", "took down", "pulled down", "put down"], tip: "bring down固定搭配" },
        { id: 178, sentence: "She _____ forward an idea.", answer: "put forward", options: ["put forward", "brought forward", "gave forward", "suggested forward"], tip: "put forward固定搭配" },
        { id: 179, sentence: "They _____ the table for dinner.", answer: "set the table", options: ["set the table", "laid the table", "prepared the table", "arranged the table"], tip: "set the table固定搭配" },
        { id: 180, sentence: "He _____ out the fire.", answer: "put out", options: ["put out", "turned out", "switched out", "extinguished out"], tip: "put out固定搭配" },

        // Bring/Put/Set搭配 (161-180)
        { id: 161, sentence: "Can you _____ the light on?", answer: "put", options: ["put", "turn", "switch", "set"], tip: "put on固定搭配" },
        { id: 162, sentence: "She _____ up three children alone.", answer: "brought", options: ["brought", "raised", "grew", "educated"], tip: "bring up固定搭配" },
        { id: 163, sentence: "I need to _____ my mind to this task.", answer: "set", options: ["set", "put", "apply", "focus"], tip: "set one's mind固定搭配" },
        { id: 164, sentence: "He _____ on his coat before leaving.", answer: "put", options: ["put", "wore", "got", "slipped"], tip: "put on固定搭配" },
        { id: 165, sentence: "This decision _____ about big changes.", answer: "brought", options: ["brought", "caused", "made", "created"], tip: "bring about固定搭配" },
        { id: 166, sentence: "They _____ an example for others.", answer: "set", options: ["set", "made", "gave", "provided"], tip: "set an example固定搭配" },
        { id: 167, sentence: "I _____ off my homework until later.", answer: "put", options: ["put", "postponed", "delayed", "left"], tip: "put off固定搭配" },
        { id: 168, sentence: "Music _____ back happy memories.", answer: "brought", options: ["brought", "recalled", "reminded", "evoked"], tip: "bring back固定搭配" },
        { id: 169, sentence: "We need to _____ a date for meeting.", answer: "set", options: ["set", "make", "fix", "arrange"], tip: "set a date固定搭配" },
        { id: 170, sentence: "He _____ up with all the complaints.", answer: "puts", options: ["puts", "tolerates", "bears", "stands"], tip: "put up with固定搭配" },
        { id: 171, sentence: "They _____ forward a new proposal.", answer: "brought", options: ["brought", "put", "presented", "submitted"], tip: "bring forward固定搭配" },
        { id: 172, sentence: "She _____ away her toys neatly.", answer: "put", options: ["put", "stored", "kept", "placed"], tip: "put away固定搭配" },
        { id: 173, sentence: "He _____ off on his long journey.", answer: "set", options: ["set", "went", "started", "began"], tip: "set off固定搭配" },
        { id: 174, sentence: "I _____ down all my ideas.", answer: "put", options: ["put", "wrote", "noted", "jotted"], tip: "put down固定搭配" },
        { id: 175, sentence: "Music _____ us all together.", answer: "brought", options: ["brought", "got", "drew", "united"], tip: "bring together固定搭配" },
        { id: 176, sentence: "They _____ out to discover the truth.", answer: "set", options: ["set", "went", "started", "began"], tip: "set out固定搭配" },
        { id: 177, sentence: "Scandal _____ down the politician.", answer: "brought", options: ["brought", "took", "pulled", "forced"], tip: "bring down固定搭配" },
        { id: 178, sentence: "She _____ forward a clever idea.", answer: "put", options: ["put", "brought", "suggested", "proposed"], tip: "put forward固定搭配" },
        { id: 179, sentence: "They _____ the table beautifully.", answer: "set", options: ["set", "laid", "prepared", "arranged"], tip: "set the table固定搭配" },
        { id: 180, sentence: "Firefighters _____ out the blaze.", answer: "put", options: ["put", "extinguished", "doused", "quenched"], tip: "put out固定搭配" },

        // Look/See/Watch搭配 (181-200)
        { id: 181, sentence: "Can you _____ after my cat?", answer: "look", options: ["look", "take care", "watch", "care"], tip: "look after固定搭配" },
        { id: 182, sentence: "I _____ eye to eye with you on this.", answer: "see", options: ["see", "look", "agree", "think"], tip: "see eye to eye固定搭配" },
        { id: 183, sentence: "Let's _____ TV tonight.", answer: "watch", options: ["watch", "see", "look at", "view"], tip: "watch TV固定搭配" },
        { id: 184, sentence: "She _____ forward to the holiday.", answer: "looks", options: ["looks", "sees", "waits", "expects"], tip: "look forward to固定搭配" },
        { id: 185, sentence: "We _____ the point immediately.", answer: "saw", options: ["saw", "got", "understood", "grasped"], tip: "see the point固定搭配" },
        { id: 186, sentence: "He _____ out for danger ahead.", answer: "watches", options: ["watches", "looks", "sees", "observes"], tip: "watch out固定搭配" },
        { id: 187, sentence: "I need to _____ into this problem.", answer: "look", options: ["look", "see", "check", "investigate"], tip: "look into固定搭配" },
        { id: 188, sentence: "We finally _____ the light.", answer: "saw", options: ["saw", "found", "got", "understood"], tip: "see the light固定搭配" },
        { id: 189, sentence: "He _____ a movie last night.", answer: "watched", options: ["watched", "saw", "viewed", "enjoyed"], tip: "watch a movie固定搭配" },
        { id: 190, sentence: "I _____ out of the window.", answer: "looked", options: ["looked", "gazed", "stared", "peered"], tip: "look out固定搭配" },
        { id: 191, sentence: "She eventually _____ reason.", answer: "saw", options: ["saw", "understood", "got", "found"], tip: "see reason固定搭配" },
        { id: 192, sentence: "We never _____ down on anyone.", answer: "look", options: ["look", "see", "treat", "think"], tip: "look down on固定搭配" },
        { id: 193, sentence: "He _____ to it that all was ready.", answer: "saw", options: ["saw", "made sure", "ensured", "checked"], tip: "see to it固定搭配" },
        { id: 194, sentence: "I _____ over the children carefully.", answer: "watch", options: ["watch", "look", "guard", "supervise"], tip: "watch over固定搭配" },
        { id: 195, sentence: "She _____ like her mother a lot.", answer: "looks", options: ["looks", "seems", "appears", "resembles"], tip: "look like固定搭配" },
        { id: 196, sentence: "He _____ the clock all day.", answer: "watches", options: ["watches", "looks at", "checks", "observes"], tip: "watch the clock固定搭配" },
        { id: 197, sentence: "I _____ up to my older brother.", answer: "look", options: ["look", "admire", "respect", "follow"], tip: "look up to固定搭配" },
        { id: 198, sentence: "She _____ red when she's angry.", answer: "sees", options: ["sees", "goes", "gets", "turns"], tip: "see red固定搭配" },
        { id: 199, sentence: "We _____ back on those happy times.", answer: "look", options: ["look", "think", "remember", "reflect"], tip: "look back固定搭配" },
        { id: 200, sentence: "She always _____ on the bright side.", answer: "looks", options: ["looks", "sees", "thinks", "stays"], tip: "look on bright side固定搭配" }
    ];

    window.petContent = {
        vocab,
        readingSets,
        collocationSets,
        clozeSets
    };

    // 词典AI图片异步加载（主功能初始化后调用）
    // 优化词典AI图片异步加载逻辑，添加日志记录
    window.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            var imgs = document.querySelectorAll('[id^="dict-ai-img-"]');
            imgs.forEach(function (img) {
                if (img && window.fetchAIGeneratedImage) {
                    var word = img.id.replace('dict-ai-img-', '');
                    console.log(`🔍 正在加载单词图片: ${word}`);

                    window.fetchAIGeneratedImage(word, function (url) {
                        if (url) {
                            console.log(`✅ 图片 URL 加载成功: ${url}`);
                            img.src = url;
                        } else {
                            console.warn(`⚠️ 未能加载图片，使用默认图片: ${word}`);
                            img.src = '../assets/default.jpg'; // 修正为相对路径
                        }
                    });

                    // 添加图片加载错误的回退机制
                    img.onerror = function () {
                        console.error(`❌ 图片加载失败，使用默认图片: ${img.src}`);
                        img.src = '../assets/default.jpg'; // 修正为相对路径
                    };
                } else {
                    console.warn('⚠️ 未找到图片元素或 fetchAIGeneratedImage 函数未定义');
                }
            });
        }, 500);
    });

    // 使用 GLM-Image API 获取图片 URL
    window.fetchAIGeneratedImage = function (word, callback) {
        const GLM_IMAGE_API_KEY = localStorage.getItem('glm_image_api_key') || '';
        const GLM_IMAGE_API_URL = 'https://open.bigmodel.cn/api/paas/v4/images/generations';

        // 如果没有配置 API Key，使用默认图片
        if (!GLM_IMAGE_API_KEY) {
            console.warn('⚠️ 未配置 GLM-Image API Key，使用默认图片');
            callback(null);
            return;
        }

        // 调用 GLM-Image API 生成图片
        const prompt = `A simple, clear illustration of "${word}" for English vocabulary learning, suitable for children, cartoon style, bright colors, white background`;

        fetch(GLM_IMAGE_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GLM_IMAGE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'glm-image',
                prompt: prompt,
                size: '1280x1280'
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`GLM-Image API 请求失败，状态码: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data && data.data[0] && data.data[0].url) {
                    console.log(`✅ GLM-Image 返回图片 URL: ${data.data[0].url}`);
                    callback(data.data[0].url);
                } else {
                    console.warn('⚠️ GLM-Image 未返回有效的图片 URL');
                    callback(null);
                }
            })
            .catch(error => {
                console.error('❌ GLM-Image API 请求错误:', error);
                callback(null);
            });
    };
})();

