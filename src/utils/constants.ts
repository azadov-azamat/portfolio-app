import { OfficesDataProps, PortfolioDataProps } from "@/types";

export const portfolioData: PortfolioDataProps[] = [
    {
        id: 10,
        title: "77kv",
        desc: "Loyiha realtor va agentlar uchun mo'ljallangan bo'lib, asosan turar va noturar uy joy e'lonlari joylanib boriladi. Realtorlar bemalol telegram akkountlari va olx.uz saytidagi" +
            "akkountlarini biriktirgan holda tez va qulay platformadan foydalanishadi",
        src: '/images/77kv.png',
        owner: "Big Tech",
        hash: ["Ember js", "Ember Data", "Google api", "Open AI", "GPT 4", "Telegram integrate", "bootstrap", "Node Js", "Express Js", "Postgresql"],
        position: "Full-stack Developer",
        url: "77kv.uz",
        start_date: "01/12/2023",
        final_date: "01/06/2024",
        status: true,
        manager: "Begzod Hayitboyev"
    },
    {
        id: 11,
        title: "Market Lochin",
        desc: "Qurilish mollari do'koni uchun ichki sistema, bunda do'kon egasi mahsulotlari haqida umumiy barcha ma'lumotlarni ko'rib borishi, kirim-chiqim summalarini online dashboard orqali ko'rishi" +
            "mahsulotlatning statistikalari haqida ma'lumot olib borishi uchun shaxsiy loyiha",
        src: '/images/market-lochin.png',
        owner: "Shaxsiy loyiha",
        hash: ["Vite Js", "Redux", "Redux-toolkit", "tailwindcss", "material-tailwind"],
        position: "Frontend Developer",
        url: "marketlochin.uz",
        start_date: "01/09/2023",
        final_date: "01/11/2023",
        status: true,
        manager: "Jamshid Kalandarov"
    },
    {
        id: 3,
        title: "Depository",
        desc: "Loyiha asosan biron-bir korxonaning o'zaro xodimlar, mijozlar va direktorlar o'rtasida bo'lib o'tadigan majlislar va yig'ilishlarni online shaklda o'tkazishga xizmat ko'rsatadi. " +
            "Loyihaning frontend qismida ishladim va to'liq boshidan javascript dasturlash tili yordamida ko'tarilgan. Loyiha muvoffaqiyatli tugatilgan, ammo mijoz tomonidan noma'lum sabablarga ko'ra bekor qilingan",
        src: '/images/depository.png',
        owner: "NAPA Automotive",
        hash: ["react-js", "redux", "socket.io", "bootstrap", "pwa", "zoom", "react-jutsu", "i18n"],
        position: "Frontend Developer",
        url: "evote-uz.vercel.app",
        start_date: "01/08/2021",
        final_date: "01/01/2022",
        status: false,
        manager: "Umid Abdusattorov"
    },
    {
        id: 9,
        title: "Topilmalar - axborot tizimi",
        desc: "Topilmalar axborot tizimi asosan davlat markazlarida ishlovchi xodimlar uchun ma'lumotnomalar shakillantirish va topilgan buyumni o'z egasida topshirishdan iborat. " +
            "Bu loyiha yordamida har kim tizim orqali yo'qotilgan va topilgan ashyolar reestrini ko'ra olishi mumkin. Loyihaning frontend qismida ish olib bordim va to'liq javascript dasturlash tilida ko'tarilgan. " +
            "Loyiha muvoffaqiyatli tugatilgan!",
        src: '/images/topilmalar.png',
        owner: "Davlat Xizmatlar Agentligi",
        hash: ["react-js", "redux", "redux-toolkit", "bootstrap", "crago", "eslint"],
        position: "Frontend Developer",
        url: "topilmalar.davxizmat.uz",
        start_date: "01/02/2022",
        final_date: "01/01/2023", status: true,
        manager: "Mashrab Mamatqulov"
    },
    {
        id: 1,
        title: "Smart Adliya - axborot tizimi",
        desc: "AKTRM bo'limi tomonidan berilgan ushbu loyiha Adliya Vazirligining integratsiya orqali bog'langan barcha xizmatlari haqida ma'lumot berib borish va xizmatlardan foydalanish uchun qulay platformadir. " +
            "Platformada yangiliklar bo'limi, statistika bo'limlari va xizmatlar haqida batafsil ma'lumotlarni ko'rib borish mumkin. Loyihaning backend qismida jamoaviy ish olib bordim va to'liq java dasturlash tilida monolit " +
            "ko'rinishda ko'tarilgan. Loyiha muvoffaqiyatli tugatilgan!",
        src: '/images/smart-adliya.png',
        owner: "Adliya Vazirligi",
        hash: ["java", "oop", "spring", "springboot", "mail"],
        position: "Backend Developer",
        url: "smart.adliya.uz",
        start_date: "01/05/2022",
        final_date: "01/12/2022",
        manager: "Kamoliddin Xojayev",
        status: true
    },
    {
        id: 2,
        title: "B-Advice",
        desc: "AKTRM bo'limi tomonidan berilgan ushbu loyiha tadbirkorlarning bizneslariga maslahat, o'quv qo'llanmalar va maqolalar, turli ekspertlar bilan bog'lanish imkoniyatlari haqida platforma. " +
            "Loyihaning backend qismida jamoaviy ish olib bordim va to'liq java dasturlash tilida microservice ko'rinishda ko'tarilgan. Loyiha muvoffaqiyatli tugatilgan!",
        src: '/images/b-advice.png',
        owner: "Adliya Vazirligi",
        hash: ["java", "oop", "spring", "springboot", "microservice", "mail"],
        position: "Backend Developer",
        url: "b-advice.uz",
        start_date: "01/07/2022",
        final_date: "01/12/2022",
        status: true,
        manager: "Kamoliddin Xojayev"
    },
    {
        id: 7,
        title: "Modme - clone",
        desc: "Loyiha Digital Dreams firmasi tomonidan test sinovi ko'rinishida, amaldagi modme.uz platformasing nusxasini yasash maqsadida topshirilgan." +
            " Loyihaning frontend qismida ish olib bordim va to'liq typescript dasturlash tilida ko'tarilgan. Loyiha muvoffaqiyatli yakunlangan!",
        src: '/images/modme.png',
        owner: "Digital Dreams LLC",
        hash: ["react-js", "vite-js", "redux", "redux-toolkit", "material-tailwind", "tailwindcss", "mobiscroll", "sms-shlyuz", "dnd", "typescript"],
        position: "Frontend Developer",
        url: "modme-crm.vercel.app",
        start_date: "01/02/2023",
        final_date: "10/02/2023",
        status: false,
        manager: "Ziyodulla"
    },
    {
        id: 4,
        title: "Dilhush - restorani",
        src: '/images/dilhush.jpg',
        desc: "Digital Dreams firmasi tomonidan berilgan ushbu loyiha \"Dilhush - oilaviy restoran\" uchun boshqaruv bo'limini yasash maqsad qilingan. " +
            "Loyiha yordamida mobil programma orqali berilgan buyurtmalarni ko'rib borish, mobil programma restoran menyularini doimiy yangilab borish imkoniyatini beradi. " +
            "Loyihaning frontend qismida ish olib bordim va to'liq typescript dasturlash tilida ko'tarilgan. Loyiha muvoffaqiyatli tugatilgan!",
        owner: "Digital Dreams LLC",
        hash: ["react-js", "redux", "redux-toolkit", "socket.io", "material-tailwind", "tailwindcss", "typescript"],
        position: "Frontend Developer",
        url: "dilhush-admin.vercel.app",
        start_date: "01/05/2023",
        final_date: "01/08/2023",
        status: true,
        manager: "Ziyodulla"
    },
    {
        id: 6,
        title: "Guzarpost",
        desc: "Loyiha biron-bir mijozning online sotib olgan ashyolarini Turkiya davlatidan O'zbekistonga olib kelib berish imkoniyatini beradi. " +
            "Va shaxsiy kabinet orqali o'z yuklarini tracking qismini ko'rib borishi mumkin. Loyihaning frontend qismida ish olib bordim va to'liq typescript dasturlash tilida ko'tarilgan. " +
            "Loyiha muvoffaqiyatli tugatilgan!",
        src: '/images/guzarpost.jpg',
        owner: "Kervanyul Technologies",
        hash: ["react-js", "vite-js", "redux", "redux-toolkit", "material-tailwind", "tailwindcss", "typescript", "one-id", "jivo-chat"],
        position: "Frontend Developer",
        url: "guzarpost.uz",
        start_date: "20/05/2023",
        final_date: "01/09/2023",
        status: true,
        manager: "Bexruz Muzaffarov"
    },
    {
        id: 5,
        title: "EximERP",
        desc: "Loyiha biron-bir mijozning O'zbekistonga olib kelmoqchi bo'lgan ashyolarining hujjatlarini deklarantlar yordamida tez va qulay online shaklda to'ldirish va chegara postlaridan oson olib kirishda yordam beruvchi platforma bo'lib. " +
            "Platform tomonidan online deklarant yordamida kerakli hujjatlarni taqdim eta olasiz. Bu loyihada texnik yordamchi bo'lib ish olib bordim. Loyihaning eski kodlarini yangilash va \"Clean Code\", \"DRY\" prinsiplariga rioya qilgan holda" +
            " to'g'irlab chiqilidi va loyiha uchun yangi o'zgartirishlar kiritilgan. Loyiha javascript dasturlash tilida yozilgan bo'lib muvoffaqiyatli yakunlangan! ",
        src: '/images/eximerp.jpg',
        owner: "Kervanyul Technologies",
        hash: ["react-js", "vite-js", "redux", "redux-toolkit", "socket.io", "material-ui", "i18n", "one-id"],
        position: "Texnik yordamchi - Frontend",
        url: "eximerp.uz",
        start_date: "01/06/2023",
        status: true,
        final_date: "01/09/2023",
        manager: "Bexruz Muzaffarov"
    },
    {
        id: 8,
        title: "Blog sayt",
        desc: "Samar Badriddinovning nextjs ga asoslangan darslarini mustahkamlash maqsadida qilingan amaliy ish!",
        src: '/images/sammi.png',
        owner: "Self Study",
        hash: ["react-js", "next-js", "material-ui", "graphql", "sql", "ssr", "seo", "typescript"],
        position: "Frontend Developer",
        url: "nextjs-tutorial-kohl.vercel.app",
        start_date: "10/03/2023",
        final_date: "20/03/2023",
        status: false,
        manager: "Samar Badriddinov"
    }
]

export const officeData: OfficesDataProps[] = [
    {
        id: 1,
        title: "Napa Automotive",
        desc: "",
        src: "https://it-market.uz/media-django/__sized__/logos/Logo_NAPA_Automotive-thumbnail-128x128-90.jpeg",
        owner: "Umid Abdusattorov"
    },
    {
        id: 2,
        title: "Davlat Xizmatlar Agentligi",
        desc: "",
        owner: "",
        src: "https://static8.tgstat.ru/channels/_0/e0/e06c9abc54703ce47dbf2eb40538a46d.jpg"
    },
    {
        id: 3,
        title: "Adliya Vazirligi (AKTRM)",
        desc: "",
        src: "https://huquqiyportal.uz/_nuxt/img/adliya-logo.c5f976c.png",
        owner: ""
    },
    {
        id: 4,
        title: "Kervanyol technologies",
        desc: "",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDN56czZUUpMzgW4KrIGHOmRUJRJ3dZYfFhA&s",
        owner: "",
    },
    {
        id: 5,
        title: "Big technologies",
        desc: "",
        owner: "Begzod Hayitboyev",
        src: '/images/big-tech.png'
    }
]
