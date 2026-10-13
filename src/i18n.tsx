import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Language = "bg" | "en" | "ua" | "he";

export const translations = {
  bg: {
    nav: {
      about: "За Блатото",
      bio: "Биоразнообразие",
      video: "Видео",
      info: "Информация",
    },
    hero: {
      subtitle: "Оазис на дивата природа",
      title1: "Драгоманското",
      title2: "Блато",
      desc: "Най-голямото естествено карстово влажно място в България. Ключова спирка по миграционния път Via Aristotelis и дом на безценно биоразнообразие.",
      btn: "Открий магията",
      scroll: "Скрол надолу",
    },
    about: {
      title_small: "Биоразнообразие",
      title1: "Карстов комплекс",
      title2: "Драгоманско Блато",
      desc: "В комплекса са описани 256 вида птици, представляващи 61% от орнитофауната на страната, 9 вида земноводни, 11 вида влечуги, 43 вида бозайници и 180 вида висши растения, като повечето от тях са ендемични видове за страната и Балканския полуостров. Комплексът е важно местообитание и за редица видове пеперуди и водни кончета, с европейско и световно значение.",
      f1_t: "Фауна",
      f1_d: "Установени са 237 вида, от които около 130 гнездят в блатото и отглеждат поколенията си тук. Тук гнездят световно застрашени видове като белооката потапница и ливадният дърдавец, малък и голям воден бик. Бозайниците в района на блатото са представени от 23 вида. Влечугите са 10 вида, земноводните са 9 вида. От животните в блатото 188 вида са строго защитени.",
      f2_t: "Флора",
      f2_d: "Драгоманското блато попада в Европейската широколистна горска област. Установени са 138 вида от 37 семейства. Някои видове като обикновената мехурка, блатната перуника, бялата водна роза, орхидеите, ниската теменуга представляват голям интерес. Те са редки и ендемични видове, включени в Червената книга на България.",
    },
    bio: {
      title_small: "Видове",
      title: "Флора и Фауна",
      desc: "Разгледайте част от емблематичните видове, които намират своя дом в Драгоманското блато.",
      birds: "Фауна",
      plants: "Флора",
      fauna_t: "Фауна",
      fauna_d: "Установени са 237 вида, от които около 130 гнездят в блатото и отглеждат поколенията си тук. Тук гнездят световно застрашени видове като белооката потапница и ливадният дърдавец, малък и голям воден бик. Бозайниците в района на блатото са представени от 23 вида. Влечугите са 10 вида, земноводните са 9 вида. От животните в блатото 188 вида са строго защитени.",
      flora_t: "Флора",
      flora_d: "Драгоманското блато попада в Европейската широколистна горска област. Установени са 138 вида от 37 семейства. Някои видове като обикновената мехурка, блатната перуника, бялата водна роза, орхидеите, ниската теменуга представляват голям интерес. Те са редки и ендемични видове, включени в Червената книга на България.",
      b1_n: "Малък воден бик",
      b1_d: "(Ixobrychus minutus) е птица от семейство Чаплови. Това е една от най-малките чапли, която се крие умело в гъстата блатна растителност. Храни се предимно с дребни рибки, земноводни и водни насекоми.",
      b2_n: "Малка пъструшка",
      b2_d: "(Porzana pusilla) е птица от семейство Дърдавцови (Rallidae). Изключително потаен вид, който рядко излиза на открито. Предпочита плитки блата с гъста растителност.",
      b3_n: "Голям воден бик",
      b3_d: "(Botaurus stellaris) е птица от семейство Чаплови. Известен е със своя характерен, наподобяващ рев на бик зов по време на размножителния период. Оперението му осигурява перфектен камуфлаж сред тръстиките.",
      b4_n: "Зеленоножка",
      b4_d: "(Gallinula chloropus) е птица от семейство Дърдавцови. Лесно се разпознава по червения клюн с жълт връх и жълто-зелените крака. Често може да се види да плува край бреговете на блатото.",
      b5_n: "Голям гмурец",
      b5_d: "(Podiceps cristatus), наричан и Гмурец рогач. Отличен плувец и гмуркач, който се храни главно с риба. През размножителния сезон изпълнява сложни и красиви сватбени танци във водата.",
      b6_n: "Голяма пъструшка",
      b6_d: "(Porzana porzana) е птица от семейство Дърдавцови. Подобно на другите дърдавци, тя е активна предимно по здрач и през нощта, издавайки характерни повтарящи се звуци, приличащи на плющене на камшик.",
      p1_n: "Блатна перуника",
      p1_d: "(Iris pseudacorus) е растение от семейство Перуникови. Отличава се с красиви яркожълти цветове. Често се среща в плитките води по бреговете на блатото и служи за убежище на много видове.",
      p2_n: "Бяла водна лилия",
      p2_d: "(Nymphaea alba) е вид растение от семейство Водни лилии. Това е едно от най-красивите водни растения, чиито големи бели цветове се отварят сутрин и се затварят привечер.",
      p3_n: "Щитолистни какички",
      p3_d: "(Nymphoides peltata) е тревисто многогодишно растение от семейство Воднодетелинови. Има красиви жълти цветове с ресничести ръбове и плаващи листа, наподобяващи тези на водната лилия.",
      p4_n: "Ниска теменуга",
      p4_d: "(Viola pumila) е растение от семейство Теменугови. Застрашен вид в България, който предпочита влажни ливади и е изключително рядък. Цъфти с нежни бледолилави цветове.",
    },
    video: {
      title_small: "Видео презентация",
      title1: "Потопете се в",
      title2: "магията",
      desc: "Въведение в Драгоманското Блато. Насладете се на панорамен изглед от високо с дрон и видео презентация.",
      v1_title: "Панорамно видео",
      v2_title: "Видео презентация",
    },
    visit: {
      title_small: "Информация и планиране",
      title: "Вашето приключение започва тук",
      desc: "Разходката по понтонните пътеки, обградени от триметрови тръстики, предлага истинско потапяне в дивата природа. Вземете бинокъл и камера, и се насладете на симфонията от птичи песни.",
      f1_t: "Как да стигнете",
      f1_d: "Блатото се намира на 40 км северозападно от София по пътя за Калотина (E80). Влезте в град Драгоман и следвайте кафявите указателни табели, които ще ви отведат до паркинга пред дървените пътеки.",
      f2_t: "Подходящо време",
      f2_d: "Най-доброто време за наблюдение на птици е по време на пролетната (април-май) или есенната (август-октомври) миграция. Препоръчваме посещения рано сутрин или късно следобед.",
      f3_t: "Дървени пътеки",
      f3_d: "Изградени са специални дървени (понтонни) пътеки, които ви отвеждат навътре в тръстиките, както и кули за наблюдение с отлична панорамна гледка към блатото и птиците.",
      f4_t: "Опръстенителен лагер",
      f4_d: "Всяка есен (август-октомври) тук се провежда орнитологичен лагер за опръстеняване на птици. Посетителите могат да се запознаят отблизо с изследователската дейност.",
      photo: "Фотография",
      photo_d:
        "Идеално място за орнитология и улавяне на спиращи дъха залези зад Чепън планина.",
      map_title: "Карта на комплекса",
    },
    footer: {
      rights: "Опазване на дивата природа. Всички права запазени.",
      credits: "Уебсайтът е създаден по идея на Георги Стефанов.",
    },
  },
  en: {
    nav: {
      about: "About",
      bio: "Biodiversity",
      video: "Video",
      info: "Information",
    },
    hero: {
      subtitle: "Wildlife Oasis",
      title1: "Dragoman",
      title2: "Marsh",
      desc: "The largest natural karst wetland in Bulgaria. A key stopover on the Via Aristotelis migration route and home to invaluable biodiversity.",
      btn: "Discover the magic",
      scroll: "Scroll down",
    },
    about: {
      title_small: "About the Marsh",
      title1: "A Story of Destruction and",
      title2: "Revival",
      desc: "Dragoman Marsh is an exceptional natural phenomenon — a complex mosaic of open water and vast reed beds. Together with Chepan Mountain, it forms an inseparable complex, preserving hundreds of rare plant and animal species and offering unique opportunities for ecotourism.",
      f1_t: "Location & Terrain",
      f1_d: "Located 40 km from Sofia, at the foot of the karst Chepan Mountain. Covers an area of over 350 hectares.",
      f2_t: "Via Aristotelis",
      f2_d: "A key stop on one of the main bird migration routes in Europe. A vital resting place.",
      f3_t: "Resurrection",
      f3_d: "Drained in the 1930s. Thanks to long-term conservation efforts, the marsh has been restored to its full glory.",
      f4_t: "Status",
      f4_d: "Declared an Important Bird Area, a Ramsar site, and part of the Natura 2000 ecological network.",
    },
    bio: {
      title_small: "Flora and Fauna",
      title: "Sanctuary of Biodiversity",
      desc: "With its 226 bird species (including globally threatened species), unique amphibians, and rich flora, Dragoman Marsh is a magnet for nature lovers, ornithologists, and photographers from around the world.",
      birds: "Birds",
      plants: "Plants",
      fauna_t: "Fauna",
      fauna_d: "A total of 237 species have been recorded, of which about 130 breed in the marsh and raise their young here. Globally threatened species such as the Ferruginous Duck, the Corncrake, the Little Bittern, and the Great Bittern nest here. Mammals in the marsh area are represented by 23 species. There are 10 reptile species and 9 amphibian species. Out of the animals in the marsh, 188 species are strictly protected.",
      flora_t: "Flora",
      flora_d: "The Dragoman Marsh falls within the European broadleaf forest region. 138 species from 37 families have been recorded. Certain species like the Common Bladderwort, the Yellow Iris, the White Water Lily, orchids, and the Dwarf Violet are of great interest. These are rare and endemic species, included in the Red Data Book of Bulgaria.",
      b1_n: "Great Bittern",
      b1_d: "A secretive bird of the heron family that skillfully hides in the reeds. Known for its specific call, resembling a bull's roar.",
      b2_n: "Ferruginous Duck",
      b2_d: "A globally threatened diving duck. Dragoman Marsh is one of its most important breeding sites in Bulgaria.",
      b3_n: "Purple Heron",
      b3_d: "An elegant migratory bird with dark reddish-brown plumage. Breeds colonially in the impenetrable reed beds of the marsh.",
      b4_n: "Western Marsh Harrier",
      b4_d: "A large bird of prey often seen patrolling with a slow flight low over the reeds in search of prey.",
      b5_n: "Great Crested Grebe",
      b5_d: "An excellent swimmer and diver that feeds mainly on fish. During the breeding season it performs complex and beautiful mating dances in the water.",
      b6_n: "Spotted Crake",
      b6_d: "A bird of the crake family. Like other crakes, it is active mainly at dusk and at night, making characteristic repetitive sounds resembling a whip crack.",
      p1_n: "Yellow Iris",
      p1_d: "A plant of the iris family. It is characterized by beautiful bright yellow flowers. Often found in shallow waters along the shores of the marsh, serving as a refuge for many species.",
      p2_n: "White Water Lily",
      p2_d: "One of the most beautiful aquatic plants, whose large white flowers open in the morning and close in the evening.",
      p3_n: "Fringed Water Lily",
      p3_d: "A herbaceous perennial plant with beautiful yellow flowers with fringed edges and floating leaves resembling those of a water lily.",
      p4_n: "Dwarf Violet",
      p4_d: "An endangered species in Bulgaria that prefers wet meadows and is extremely rare. It blooms with delicate pale purple flowers.",
    },
    video: {
      title_small: "Video Presentation",
      title1: "Immerse yourself in",
      title2: "the magic",
      desc: "Introduction to the Dragoman Marsh. Enjoy a panoramic view from above with a drone and a video presentation.",
      v1_title: "Panoramic Video",
      v2_title: "Video Presentation",
    },
    visit: {
      title_small: "Information & Planning",
      title: "Your adventure starts here",
      desc: "Walking on the pontoon paths, surrounded by three-meter reeds, offers a true immersion in the wild nature. Take your binoculars and camera, and enjoy the symphony of bird songs.",
      f1_t: "How to get there",
      f1_d: "The marsh is located 40 km northwest of Sofia on the road to Kalotina (E80). Enter the town of Dragoman and follow the brown signs that will lead you to the parking lot in front of the wooden paths.",
      f2_t: "Best time to visit",
      f2_d: "The best time for bird watching is during the spring (April-May) or autumn (August-October) migration. We recommend early morning or late afternoon visits.",
      f3_t: "Wooden paths",
      f3_d: "Special wooden (pontoon) paths have been built that take you deep into the reeds, as well as observation towers with an excellent panoramic view of the marsh and the birds.",
      f4_t: "Bird ringing camp",
      f4_d: "Every autumn (August-October), an ornithological bird ringing camp is held here. Visitors can get a close look at the research activities.",
      photo: "Photography",
      photo_d:
        "An ideal place for ornithology and capturing breathtaking sunsets behind Chepan Mountain.",
      map_title: "Complex Map",
    },
    footer: {
      rights: "Wildlife Conservation. All rights reserved.",
      credits: "The website was created based on an idea by Georgi Stefanov.",
    },
  },
  ua: {
    nav: {
      about: "Про болото",
      bio: "Біорізноманіття",
      video: "Відео",
      info: "Інформація",
    },
    hero: {
      subtitle: "Оазис дикої природи",
      title1: "Драгоманське",
      title2: "Болото",
      desc: "Найбільше природне карстове водно-болотне угіддя в Болгарії. Ключова зупинка на міграційному шляху Via Aristotelis та дім для безцінного біорізноманіття.",
      btn: "Відкрий магію",
      scroll: "Гортати вниз",
    },
    about: {
      title_small: "Про Болото",
      title1: "Історія знищення та",
      title2: "відродження",
      desc: "Драгоманське болото — винятковий природний феномен, складна мозаїка відкритих вод та великих очеретяних заростей. Разом з горою Чепинь воно утворює нерозривний комплекс, що зберігає сотні рідкісних видів рослин і тварин.",
      f1_t: "Локація та рельєф",
      f1_d: "Розташоване за 40 км від Софії, біля підніжжя карстової гори Чепинь. Займає площу понад 350 гектарів.",
      f2_t: "Via Aristotelis",
      f2_d: "Ключова зупинка на одному з головних міграційних шляхів птахів у Європі. Життєво важливе місце для відпочинку.",
      f3_t: "Відродження",
      f3_d: "Осушене в 1930-х роках. Завдяки довготривалим природоохоронним зусиллям болото було відновлено у всій красі.",
      f4_t: "Статус",
      f4_d: "Оголошено Важливою орнітологічною територією, Рамсарським угіддям та частиною екологічної мережі Natura 2000.",
    },
    bio: {
      title_small: "Флора і Фауна",
      title: "Святилище біорізноманіття",
      desc: "Зі своїми 226 видами птахів, унікальними земноводними та багатою флорою, Драгоманське болото є магнітом для любителів природи, орнітологів та фотографів.",
      birds: "Птахи",
      plants: "Рослини",
      fauna_t: "Фауна",
      fauna_d: "Загалом виявлено 237 видів, з яких близько 130 гніздяться на болоті та вирощують тут своє потомство. Тут гніздяться такі глобально вразливі види, як чернь білоока, деркач, бугайчик і бугай. Ссавці в районі болота представлені 23 видами. Рептилій налічується 10 видів, земноводних – 9 видів. З тварин болота 188 видів знаходяться під суворою охороною.",
      flora_t: "Флора",
      flora_d: "Драгоманське болото розташоване в Європейській зоні широколистих лісів. Виявлено 138 видів із 37 родин. Окремі види, такі як пухирник звичайний, півники болотні, латаття біле, орхідеї та фіалка низька, становлять великий інтерес. Це рідкісні та ендемічні види, занесені до Червоної книги Болгарії.",
      b1_n: "Бугай",
      b1_d: "Секретний птах родини чаплевих, який майстерно ховається в очереті. Відомий своїм специфічним криком, що нагадує рев бика.",
      b2_n: "Чернь білоока",
      b2_d: "Глобально вразливий вид ниркових качок. Драгоманське болото є одним із найважливіших місць її гніздування в Болгарії.",
      b3_n: "Чапля руда",
      b3_d: "Елегантний перелітний птах із темно-червоно-коричневим оперенням. Гніздиться колоніями в непрохідних очеретах болота.",
      b4_n: "Лунь очеретяний",
      b4_d: "Великий хижий птах, якого часто можна побачити, коли він повільно патрулює низько над очеретом у пошуках здобичі.",
      b5_n: "Пірникоза велика",
      b5_d: "Відмінний плавець і нирець, який харчується переважно рибою. У період розмноження виконує складні та красиві шлюбні танці у воді.",
      b6_n: "Погонич звичайний",
      b6_d: "Птах родини пастушкових. Як і інші погоничі, активний переважно в сутінках та вночі, видаючи характерні повторювані звуки, що нагадують ляскіт батога.",
      p1_n: "Півники болотні",
      p1_d: "Рослина родини півникових. Відрізняється красивими яскраво-жовтими квітами. Часто зустрічається на мілководді біля берегів болота і служить притулком для багатьох видів.",
      p2_n: "Латаття біле",
      p2_d: "Одна з найкрасивіших водних рослин, чиї великі білі квіти відкриваються вранці і закриваються ввечері.",
      p3_n: "Болотноцвіт щитолистий",
      p3_d: "Трав'яниста багаторічна рослина з красивими жовтими квітами з торочкуватими краями та плаваючим листям, що нагадує листя латаття.",
      p4_n: "Фіалка низька",
      p4_d: "Зникаючий вид у Болгарії, який віддає перевагу вологим лукам і є надзвичайно рідкісним. Цвіте ніжними блідо-фіолетовими квітами.",
    },
    video: {
      title_small: "Відеопрезентація",
      title1: "Пориньте у",
      title2: "магію",
      desc: "Вступ до Драгоманського болота. Насолоджуйтесь панорамним видом зверху за допомогою дрона та відеопрезентацією.",
      v1_title: "Панорамне відео",
      v2_title: "Відеопрезентація",
    },
    visit: {
      title_small: "Інформація та планування",
      title: "Ваша пригода починається тут",
      desc: "Прогулянка понтонними стежками в оточенні триметрових очеретів пропонує справжнє занурення в дику природу. Візьміть бінокль та камеру і насолоджуйтеся симфонією пташиних пісень.",
      f1_t: "Як дістатися",
      f1_d: "Болото розташоване за 40 км на північний захід від Софії по дорозі на Калотіну (E80). Заїдьте в місто Драгоман і слідуйте за коричневими вказівниками, які приведуть вас до парковки перед дерев'яними стежками.",
      f2_t: "Найкращий час для відвідування",
      f2_d: "Найкращий час для спостереження за птахами — під час весняної (квітень-травень) або осінньої (серпень-жовтень) міграції. Рекомендуємо відвідувати рано вранці або пізно ввечері.",
      f3_t: "Дерев'яні стежки",
      f3_d: "Побудовані спеціальні дерев'яні (понтонні) стежки, які ведуть вас углиб очеретів, а також оглядові вежі з чудовим панорамним видом на болото та птахів.",
      f4_t: "Табір кільцювання птахів",
      f4_d: "Щоосені (серпень-жовтень) тут проводиться орнітологічний табір кільцювання птахів. Відвідувачі можуть ближче познайомитися з дослідницькою діяльністю.",
      photo: "Фотографія",
      photo_d:
        "Ідеальне місце для орнітології та зйомки захоплюючих заходів сонця за горою Чепинь.",
      map_title: "Карта комплексу",
    },
    footer: {
      rights: "Охорона дикої природи. Всі права захищені.",
      credits: "Веб-сайт створено за ідеєю Георгія Стефанова.",
    },
  },
  he: {
    nav: { about: "אודות", bio: "מגוון ביולוגי", video: "וידאו", info: "מידע" },
    hero: {
      subtitle: "נווה מדבר של חיות בר",
      title1: "ביצת",
      title2: "דרגומאן",
      desc: "אזור הביצה הקרסטי הטבעי הגדול ביותר בבולגריה. תחנת עצירה מרכזית בנתיב הנדידה Via Aristotelis ובית למגוון ביולוגי יקר ערך.",
      btn: "גלה את הקסם",
      scroll: "גלול מטה",
    },
    about: {
      title_small: "אודות הביצה",
      title1: "סיפור של הרס ו",
      title2: "תחייה",
      desc: "ביצת דרגומאן היא תופעת טבע יוצאת דופן - פסיפס מורכב של מים פתוחים ומיטות קנים ענקיות. יחד עם הר צ'פאן, היא יוצרת קומפלקס בלתי נפרד השומר על מאות מיני צמחים ובעלי חיים נדירים.",
      f1_t: "מיקום ופני השטח",
      f1_d: "ממוקם 40 ק\"מ מסופיה, למרגלות הר הקרסט צ'פאן. משתרע על שטח של למעלה מ-350 דונם.",
      f2_t: "Via Aristotelis",
      f2_d: "תחנת עצירה מרכזית באחד מנתיבי נדידת הציפורים הראשיים באירופה. מקום מנוחה חיוני.",
      f3_t: "תחייה",
      f3_d: "יובש בשנות ה-30. הודות למאמצי שימור ארוכי טווח, הביצה שוחזרה למלוא תפארתה.",
      f4_t: "סטטוס",
      f4_d: "הוכרז כאזור ציפורים חשוב, אתר ראמסאר, וחלק מהרשת האקולוגית של Natura 2000.",
    },
    bio: {
      title_small: "חי וצומח",
      title: "מקלט למגוון ביולוגי",
      desc: "עם 226 מיני הציפורים שבה, דו-חיים ייחודיים וצמחייה עשירה, ביצת דרגומאן היא אבן שואבת לאוהבי טבע, צפרים וצלמים.",
      birds: "ציפורים",
      plants: "צמחים",
      fauna_t: "פאונה",
      fauna_d: "בסך הכל תועדו 237 מינים, מתוכם כ-130 מקננים בביצה ומגדלים כאן את צאצאיהם. מינים בסכנת הכחדה עולמית כגון צולל ביצות, מלכישליו, אנפית גמדית ואנפה מסורטטת גדול מקננים כאן. יונקים באזור הביצה מיוצגים על ידי 23 מינים. ישנם 10 מיני זוחלים ו-9 מיני דו-חיים. מתוך בעלי החיים בביצה, 188 מינים מוגנים בקפידה.",
      flora_t: "פלורה",
      flora_d: "ביצת דרגומאן שוכנת באזור יערות רחבי העלים האירופי. תועדו 138 מינים מ-37 משפחות. מינים מסוימים כמו נדיד מצוי, אירוס ענף, שושנת מים לבנה, סחלבים וסיגלית ננסית מעוררים עניין רב. אלו הם מינים נדירים ואנדמיים, הכלולים בספר הנתונים האדום של בולגריה.",
      b1_n: "אנפה מסורטטת",
      b1_d: "ציפור חשאית ממשפחת האנפות המסתתרת במיומנות בקנים. ידועה בקריאתה הספציפית, המזכירה שאגת שור.",
      b2_n: "צולל ביצות",
      b2_d: "ברווז צולל בסכנת הכחדה עולמית. ביצת דרגומאן היא אחד מאתרי הרבייה החשובים ביותר שלה בבולגריה.",
      b3_n: "אנפה ארגמנית",
      b3_d: "ציפור נודדת אלגנטית בעלת נוצות חומות-אדמדמות כהות. מקננת במושבות במיטות הקנים הבלתי עבירות של הביצה.",
      b4_n: "זרון סוף",
      b4_d: "עוף דורס גדול שלעתים קרובות נראה מסייר במעוף איטי ונמוך מעל הקנים בחיפוש אחר טרף.",
      b5_n: "טבלן מצויץ",
      b5_d: "שחיין וצוללן מצוין שניזון בעיקר מדגים. במהלך עונת הרבייה הוא מבצע ריקודי חיזור מורכבים ויפים במים.",
      b6_n: "ברודית גדולה",
      b6_d: "ציפור ממשפחת הרליתיים. כמו ברודיות אחרות, היא פעילה בעיקר בשעות הדמדומים ובלילה, ומשמיעה צלילים אופייניים החוזרים על עצמם המזכירים הצלפת שוט.",
      p1_n: "אירוס ענף",
      p1_d: "צמח ממשפחת האירוסיים. מתאפיין בפרחים צהובים בוהקים ויפים. מצוי לעתים קרובות במים רדודים לאורך חופי הביצה ומשמש מקלט למינים רבים.",
      p2_n: "שושנת מים לבנה",
      p2_d: "אחד מצמחי המים היפים ביותר, שפרחיו הלבנים הגדולים נפתחים בבוקר ונסגרים בערב.",
      p3_n: "נימפאה צהובה",
      p3_d: "צמח עשבוני רב-שנתי עם פרחים צהובים יפהפיים בעלי שוליים מצויצים ועלים צפים המזכירים את אלו של שושנת המים.",
      p4_n: "סיגלית ננסית",
      p4_d: "מין בסכנת הכחדה בבולגריה המעדיף כרי דשא לחים ונדיר ביותר. פורח בפרחים סגולים חיוורים ועדינים.",
    },
    video: {
      title_small: "מצגת וידאו",
      title1: "שקע בתוך",
      title2: "הקסם",
      desc: "מבוא לביצת דרגומאן. תיהנו מנוף פנורמי מלמעלה עם רחפן וממצגת וידאו.",
      v1_title: "סרטון פנורמי",
      v2_title: "מצגת וידאו",
    },
    visit: {
      title_small: "מידע ותכנון",
      title: "ההרפתקה שלך מתחילה כאן",
      desc: "הליכה על שבילי הפונטון, מוקפת בקנים בגובה שלושה מטרים, מציעה טבילה אמיתית בטבע הפראי. קח משקפת ומצלמה, ותיהנה מסימפוניית שירי הציפורים.",
      f1_t: "איך להגיע",
      f1_d: 'הביצה ממוקמת 40 ק"מ צפונית-מערבית לסופיה על הכביש לקלוטינה (E80). היכנסו לעיר דרגומאן ועקבו אחר השלטים החומים שיובילו אתכם לחניון מול שבילי העץ.',
      f2_t: "הזמן הטוב ביותר לביקור",
      f2_d: "הזמן הטוב ביותר לצפרות הוא במהלך נדידת האביב (אפריל-מאי) או הסתיו (אוגוסט-אוקטובר). אנו ממליצים על ביקורים מוקדם בבוקר או בשעות אחר הצהריים המאוחרות.",
      f3_t: "שבילי עץ",
      f3_d: "נבנו שבילי עץ (פונטון) מיוחדים שלוקחים אתכם עמוק אל תוך הקנים, כמו גם מגדלי תצפית עם נוף פנורמי מצוין של הביצה והציפורים.",
      f4_t: "מחנה טיבוע ציפורים",
      f4_d: "מדי סתיו (אוגוסט-אוקטובר) נערך כאן מחנה טיבוע ציפורים אורניתולוגי. המבקרים יכולים להתרשם מקרוב מפעילות המחקר.",
      photo: "צילום",
      photo_d:
        "מקום אידיאלי לצפרות וללכידת שקיעות עוצרות נשימה מאחורי הר צ'פאן.",
      map_title: "מפת מתחם",
    },
    footer: {
      rights: "שימור חיות בר. כל הזכויות שמורות.",
      credits: "האתר נוצר על פי רעיון של גיאורגי סטפנוב.",
    },
  },
};

type LanguageContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: (typeof translations)["bg"];
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANG_STORAGE_KEY = "dragoman-marsh-lang";

function getInitialLang(): Language {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && stored in translations) return stored as Language;
  return "bg";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    // "ua" is our internal code; the ISO 639-1 code for Ukrainian is "uk"
    document.documentElement.lang = lang === "ua" ? "uk" : lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang], isRtl: lang === "he" }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
