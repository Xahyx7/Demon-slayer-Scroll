// Character Database
const CharacterDatabase = {
    tanjiro: {
        name: "Tanjiro Kamado",
        title: "Main Protagonist",
        breathingStyle: "Sun Breathing / Water Breathing",
        voiceLine: "Hinokami Kagura!",
        background: "The main protagonist of Demon Slayer, Tanjiro is a kind-hearted young man who became a demon slayer after his family was massacred by demons and his sister Nezuko was turned into a demon. He possesses an incredibly strong sense of smell and exceptional empathy, even for demons. Initially trained in Water Breathing by Sakonji Urokodaki, he later awakens to Sun Breathing (Hinokami Kagura), the original and most powerful breathing technique passed down in his family.",
        techniques: [
            "Water Breathing - First Form: Water Surface Slash",
            "Water Breathing - Second Form: Water Wheel", 
            "Water Breathing - Third Form: Flowing Dance",
            "Water Breathing - Fourth Form: Striking Tide",
            "Water Breathing - Fifth Form: Blessed Rain After the Drought",
            "Water Breathing - Sixth Form: Whirlpool",
            "Water Breathing - Tenth Form: Constant Flux",
            "Hinokami Kagura - Dance",
            "Hinokami Kagura - Clear Blue Sky",
            "Hinokami Kagura - Raging Sun",
            "Hinokami Kagura - Burning Bones, Summer Sun",
            "Hinokami Kagura - Setting Sun Transformation",
            "Hinokami Kagura - Solar Heat Haze",
            "Hinokami Kagura - Beneficent Radiance",
            "Hinokami Kagura - Dragon Sun Halo Head Dance",
            "Hinokami Kagura - Fire Wheel",
            "Hinokami Kagura - Flame Dance"
        ],
        battles: "Major battles include: Final Selection against Hand Demon, Swamp Demon encounter, Kyogai (Former Lower Moon Six), Rui (Lower Moon Five) at Mount Natagumo, Enmu (Lower Moon One) on the Mugen Train, Akaza (Upper Moon Three) alongside Kyojuro Rengoku, Hantengu (Upper Moon Four) in the Swordsmith Village, Gyokko (Upper Moon Five), and the climactic final battle against Muzan Kibutsuji where he played a crucial role in the Demon King's defeat."
    },

    nezuko: {
        name: "Nezuko Kamado",
        title: "Demon Sister",
        breathingStyle: "Blood Demon Art",
        voiceLine: "Nezuko protect!",
        background: "Tanjiro's younger sister who was turned into a demon by Muzan Kibutsuji. Unlike other demons, she retains her human emotions and has never consumed human flesh. She sleeps to regain energy instead of eating humans and has shown remarkable growth in her demon abilities. Her bamboo muzzle prevents her from biting humans and serves as a symbol of her restraint. She eventually conquers the sun, becoming the first demon to overcome this weakness.",
        techniques: [
            "Blood Demon Art - Exploding Blood",
            "Blood Demon Art - Pyrokinesis", 
            "Enhanced Physical Abilities",
            "Size Manipulation (Growth and Shrinking)",
            "Advanced Regeneration",
            "Sunlight Resistance (Developed)",
            "Protective Instincts Enhancement",
            "Demon Strength Amplification"
        ],
        battles: "Notable battles include: Temple Demon with Tanjiro, Swamp Demon assistance, Susamaru and Yahaba encounter, Kyogai's mansion protection, Mount Natagumo against Rui and Spider Family, Entertainment District Arc against Daki where she awakened her full demon form, and various encounters while protecting humans throughout the series."
    },

    zenitsu: {
        name: "Zenitsu Agatsuma",
        title: "Thunder Breathing User",
        breathingStyle: "Thunder Breathing",
        voiceLine: "Kaminari no Kokyu!",
        background: "A cowardly but kind-hearted demon slayer who was trained in Thunder Breathing by the former Thunder Hashira, Jigoro Kuwajima. Despite his fearful nature when awake, Zenitsu becomes incredibly powerful when he falls asleep or loses consciousness, accessing his true potential. He can only perform the First Form of Thunder Breathing but has perfected it beyond measure. He later develops the Seventh Form to defeat his former senior disciple Kaigaku.",
        techniques: [
            "Thunder Breathing - First Form: Thunderclap and Flash",
            "Thunder Breathing - First Form: Thunderclap and Flash, Six Fold",
            "Thunder Breathing - First Form: Thunderclap and Flash, Eight Fold",
            "Thunder Breathing - First Form: Thunderclap and Flash, God Speed",
            "Thunder Breathing - Seventh Form: Honoikazuchi no Kami (Flaming Thunder God)",
            "Enhanced Hearing Abilities",
            "Sleep Fighting Technique",
            "Lightning Speed Movement"
        ],
        battles: "Key battles include: Final Selection survival, Tsuzumi Mansion with Kyogai alongside Tanjiro and Inosuke, Mount Natagumo against Spider Brother, Mugen Train with Enmu, Entertainment District Arc against Daki and Gyutaro, and his most significant battle against Kaigaku (Upper Moon Six) where he used his self-created Seventh Form, plus the final confrontation with Muzan."
    },

    inosuke: {
        name: "Inosuke Hashibira",
        title: "Beast Breathing User",
        breathingStyle: "Beast Breathing",
        voiceLine: "Kemono no Kokyu!",
        background: "A wild and aggressive demon slayer who was raised by wild boars in the mountains after being abandoned as a baby. He created his own breathing technique called Beast Breathing and wields two chipped Nichirin swords. Initially arrogant and competitive, he gradually learns teamwork and friendship through his adventures with Tanjiro and Zenitsu. His enhanced flexibility and beast-like instincts make him a formidable fighter.",
        techniques: [
            "Beast Breathing - First Form: Pierce",
            "Beast Breathing - Second Form: Rip and Tear", 
            "Beast Breathing - Third Form: Devour",
            "Beast Breathing - Fourth Form: Slice 'n' Dice",
            "Beast Breathing - Fifth Form: Crazy Cutting",
            "Beast Breathing - Sixth Form: Palisade Bite",
            "Beast Breathing - Seventh Form: Spatial Awareness",
            "Beast Breathing - Ninth Form: Extending Bendy Slash",
            "Beast Breathing - Tenth Form: Whirling Fangs",
            "Enhanced Flexibility and Agility",
            "Dual Sword Combat Mastery"
        ],
        battles: "Major battles include: Final Selection survival, Tsuzumi Mansion with Kyogai, Mount Natagumo against Mother Spider Demon, Mugen Train Arc against Enmu, Entertainment District Arc supporting against Daki and Gyutaro, Swordsmith Village Arc, and the final battle against Muzan where his spatial awareness proved crucial."
    },

    giyu: {
        name: "Giyu Tomioka",
        title: "Water Hashira",
        breathingStyle: "Water Breathing",
        voiceLine: "Mizu no Kokyu!",
        background: "The Water Hashira and one of the strongest demon slayers in the Corps. He was the first Hashira Tanjiro encountered and initially spared Nezuko's life, recognizing her unusual nature. Giyu is stoic and rarely shows emotion, but deeply cares for his fellow slayers. He trained under Sakonji Urokodaki alongside Sabito, who died protecting him during Final Selection. This tragedy shaped his quiet, guilt-ridden personality.",
        techniques: [
            "Water Breathing - First Form: Water Surface Slash",
            "Water Breathing - Second Form: Water Wheel",
            "Water Breathing - Third Form: Flowing Dance", 
            "Water Breathing - Fourth Form: Striking Tide",
            "Water Breathing - Fifth Form: Blessed Rain After the Drought",
            "Water Breathing - Sixth Form: Whirlpool",
            "Water Breathing - Seventh Form: Drop Ripple Thrust",
            "Water Breathing - Eighth Form: Waterfall Basin",
            "Water Breathing - Ninth Form: Splashing Water Flow",
            "Water Breathing - Tenth Form: Constant Flux",
            "Water Breathing - Eleventh Form: Dead Calm (Self-Created)"
        ],
        battles: "Notable battles include: Initial encounter with Rui (Lower Moon Five) at Mount Natagumo where he instantly defeated him, confrontation with Akaza (Upper Moon Three) during Mugen Train aftermath, battle alongside Tanjiro against Akaza in the final arc, and the ultimate battle against Muzan Kibutsuji where his Dead Calm technique proved invaluable."
    },

    shinobu: {
        name: "Shinobu Kocho",
        title: "Insect Hashira",
        breathingStyle: "Insect Breathing",
        voiceLine: "Mushi no Kokyu!",
        background: "The Insect Hashira known for her cheerful demeanor that masks deep anger toward demons. She cannot cut off demon heads due to her small stature and lack of physical strength, so she developed a unique fighting style using poison derived from wisteria flowers. She seeks revenge against Doma (Upper Moon Two) for killing her sister Kanae. Her mansion serves as a medical facility for injured demon slayers, and she's an expert in pharmaceutical knowledge.",
        techniques: [
            "Insect Breathing - Butterfly Dance: Caprice",
            "Insect Breathing - Dance of the Bee Sting: True Flutter",
            "Insect Breathing - Dance of the Dragonfly: Compound Eye Hexagon",
            "Insect Breathing - Dance of the Centipede: Hundred-Legged Zigzag",
            "Wisteria Flower Poison (Various Concentrations)",
            "Medical Knowledge and Drug Creation",
            "Enhanced Speed and Agility",
            "Poison Blade Techniques"
        ],
        battles: "Key battles include: Various Lower Moon demons, Spider Sister at Mount Natagumo, and her most significant and final battle against Doma (Upper Moon Two) where she sacrifices herself to poison him from within, allowing Kanao and Inosuke to finish him off. Her sacrifice was crucial to defeating one of the strongest demons."
    },

    rengoku: {
        name: "Kyojuro Rengoku",
        title: "Flame Hashira",
        breathingStyle: "Flame Breathing",
        voiceLine: "Honoo no Kokyu!",
        background: "The Flame Hashira known for his enthusiastic and optimistic personality. He comes from a family of Flame Hashira and learned Flame Breathing from the family's flame breathing instruction books after his father Shinjuro retired and fell into depression. His unwavering spirit and dedication to protecting others made him beloved by his fellow demon slayers. He died protecting the passengers of the Mugen Train, inspiring Tanjiro and others with his final words about the flame in their hearts.",
        techniques: [
            "Flame Breathing - First Form: Unknowing Fire",
            "Flame Breathing - Second Form: Rising Scorching Sun",
            "Flame Breathing - Third Form: Blazing Universe", 
            "Flame Breathing - Fourth Form: Blooming Flame Undulation",
            "Flame Breathing - Fifth Form: Flame Tiger",
            "Flame Breathing - Ninth Form: Rengoku (Purgatory)",
            "Enhanced Physical Strength",
            "Indomitable Will and Spirit"
        ],
        battles: "Most famous for his heroic battle against Akaza (Upper Moon Three) on the Mugen Train, where he fought valiantly to protect all 200 passengers and fought Akaza to a standstill before succumbing to his injuries. Also participated in various demon subjugation missions as a Hashira and inspired countless demon slayers with his unwavering dedication."
    },

    tengen: {
        name: "Tengen Uzui",
        title: "Sound Hashira",
        breathingStyle: "Sound Breathing",
        voiceLine: "Oto no Kokyu!",
        background: "The Sound Hashira and former shinobi from a ninja family. He has three wives (Makio, Suma, and Hinatsuru) who are also skilled kunoichi and partners in both life and battle. Known for his flamboyant personality and belief in being 'flashy,' he values life above duty, which sets him apart from traditional shinobi ideology. He retired from active Hashira duty after losing his left hand and eye in battle against Upper Moon Six.",
        techniques: [
            "Sound Breathing - First Form: Roar",
            "Sound Breathing - Fourth Form: Constant Resounding Slashes",
            "Sound Breathing - Fifth Form: String Performance", 
            "Musical Score Technique (Analyzing opponent patterns)",
            "Explosive Beads and Kunai",
            "Dual Nichirin Cleavers Combat",  
            "Enhanced Hearing and Echolocation",
            "Shinobi Techniques and Stealth"
        ],
        battles: "Major battle against Gyutaro and Daki (Upper Moon Six) in the Entertainment District Arc, where he fought alongside Tanjiro, Zenitsu, and Inosuke. This intense battle cost him his hand and eye but resulted in victory and saved countless lives. He also participated in various missions before becoming a Hashira."
    },

    muzan: {
        name: "Muzan Kibutsuji",
        title: "Demon King",
        breathingStyle: "Blood Demon Art",
        voiceLine: "You are nothing but insects!",
        background: "The primary antagonist and Demon King who has lived for over 1000 years. Originally a sickly human during the Heian period, he became the first demon after a doctor's experimental treatment using Blue Spider Lily. He can create other demons by sharing his blood and has spent centuries seeking the Blue Spider Lily to overcome his weakness to sunlight. Extremely intelligent, ruthless, and powerful, he views humans as inferior beings and has no empathy or remorse.",
        techniques: [
            "Blood Demon Art - Biokinesis (Body Manipulation)",
            "Blood Demon Art - Tentacle Creation",
            "Blood Demon Art - Shockwave Generation",
            "Shapeshifting and Disguise",
            "Enhanced Regeneration", 
            "Demon Creation and Blood Sharing",
            "Curse Implantation on demons",
            "Telepathic Control over Lower Demons",
            "Enhanced Speed and Strength",
            "Multiple Hearts and Brains",
            "Memory Absorption from consumed humans"
        ],
        battles: "His most significant battle was the final confrontation against the entire Demon Slayer Corps including all remaining Hashira, Tanjiro, and other demon slayers in a desperate last stand. Previously, he barely escaped death against Yoriichi Tsugikuni, the most powerful demon slayer in history, which traumatized him for centuries and shaped his fear-driven actions."
    }
};

// Character Management Class
class CharacterManager {
    constructor() {
        this.database = CharacterDatabase;
        this.currentFilter = 'all';
        this.searchTerm = '';
    }

    getCharacter(name) {
        return this.database[name] || null;
    }

    getAllCharacters() {
        return Object.keys(this.database).map(key => ({
            id: key,
            ...this.database[key]
        }));
    }

    searchCharacters(term) {
        if (!term) return this.getAllCharacters();
        
        const results = [];
        const searchTerm = term.toLowerCase();
        
        Object.keys(this.database).forEach(key => {
            const character = this.database[key];
            if (
                character.name.toLowerCase().includes(searchTerm) ||
                character.title.toLowerCase().includes(
