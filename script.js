// Локализация приложения (6 языков) с переводом подвала
const i18n = {
    ru: {
        title: "Генератор никнеймов", tabMain: "Генератор", tabSettings: "Настройки",
        lblLang: "Язык интерфейса", lblLength: "Длина никнейма", lblCount: "Количество",
        lblMode: "Режим генерации", lblPrefix: "Префикс", lblSuffix: "Суффикс", lblExclude: "Исключить буквы",
        optReadable: "Читаемый (чередование)", optRandom: "Полный рандом", optVowel: "Больше гласных", optConsonant: "Больше согласных",
        chkDigits: "Добавлять цифры", chkUpperFirst: "Заглавная первая буква", chkCaps: "ВСЕ БУКВЫ CAPS", chkNoRepeat: "Без повторов подряд",
        btnGenerate: "СГЕНЕРИРОВАТЬ", btnCopy: "Копировать", txtHistory: "История (нажмите для копирования)",
        footerText: "С Любовью от Mind", copied: "Скопировано!", success: "Успешно!", rtl: false
    },
    en: {
        title: "Nickname Generator", tabMain: "Generator", tabSettings: "Settings",
        lblLang: "Interface Language", lblLength: "Length", lblCount: "Count",
        lblMode: "Generation Mode", lblPrefix: "Prefix", lblSuffix: "Suffix", lblExclude: "Exclude Letters",
        optReadable: "Readable (alternate)", optRandom: "Pure Random", optVowel: "Vowel Heavy", optConsonant: "Consonant Heavy",
        chkDigits: "Add Numbers", chkUpperFirst: "Capitalize First Letter", chkCaps: "ALL CAPS", chkNoRepeat: "No Consecutive Repeats",
        btnGenerate: "GENERATE", btnCopy: "Copy Results", txtHistory: "History (click to copy)",
        footerText: "Made with Love by Mind", copied: "Copied!", success: "Success!", rtl: false
    },
    zh: {
        title: "网名生成器 PRO", tabMain: "生成器", tabSettings: "设置",
        lblLang: "界面语言", lblLength: "长度", lblCount: "数量",
        lblMode: "生成模式", lblPrefix: "前缀", lblSuffix: "后缀", lblExclude: "排除字母",
        optReadable: "易讀模式", optRandom: "完全随机", optVowel: "多母音", optConsonant: "多子音",
        chkDigits: "添加数字", chkUpperFirst: "首字母大写", chkCaps: "全大写", chkNoRepeat: "无连续重复",
        btnGenerate: "立即生成", btnCopy: "复制结果", txtHistory: "历史记录 (点击复制)",
        footerText: "Mind 精心打造", copied: "已复制!", success: "成功!", rtl: false
    },
    ar: {
        title: "مولد ألقاب الكترونية", tabMain: "المولد", tabSettings: "الإعدادات",
        lblLang: "لغة الواجهة", lblLength: "الطول", lblCount: "العدد",
        lblMode: "وضع التوليد", lblPrefix: "البادئة", lblSuffix: "اللاحقة", lblExclude: "استبعاد الحروف",
        optReadable: "سهل القراءة", optRandom: "عشوائي بالكامل", optVowel: "متحرك كثيف", optConsonant: "ساكن كثيف",
        chkDigits: "إضافة أرقام", chkUpperFirst: "تكبير الحرف الأول", chkCaps: "الحروف كلها كبيرة", chkNoRepeat: "بدون تكرار متتالي",
        btnGenerate: "توليد", btnCopy: "نسخ النتائج", txtHistory: "السجل (اضغط للنسخ)",
        footerText: "بكل حب من Mind", copied: "تم النسخ!", success: "تم!", rtl: true
    },
    ja: {
        title: "ニックネーム生成器", tabMain: "ジェネレーター", tabSettings: "設定",
        lblLang: "表示言語", lblLength: "文字数", lblCount: "生成数",
        lblMode: "生成モード", lblPrefix: "接头辞", lblSuffix: "接尾辞", lblExclude: "除外する文字",
        optReadable: "読みやすい", optRandom: "完全ランダム", optVowel: "母音多め", optConsonant: "子音多め",
        chkDigits: "数字を追加", chkUpperFirst: "頭文字を大文字にする", chkCaps: "すべて大文字", chkNoRepeat: "連続重複なし",
        btnGenerate: "生成する", btnCopy: "コピーする", txtHistory: "履歴 (クリックでコピー)",
        footerText: "Mind より愛を込めて", copied: "コピーしました!", success: "成功!", rtl: false
    },
    ko: {
        title: "닉네임 생성기 PRO", tabMain: "생성기", tabSettings: "설정",
        lblLang: "언어 설정", lblLength: "글자 수", lblCount: "생성 수",
        lblMode: "생성 모드", lblPrefix: "접두사", lblSuffix: "접미사", lblExclude: "제외할 글자",
        optReadable: "읽기 쉬운 모드", optRandom: "완전 랜덤", optVowel: "모음 위주", optConsonant: "자음 위주",
        chkDigits: "숫자 추가", chkUpperFirst: "첫 글자 대문자", chkCaps: "모두 대문자(CAPS)", chkNoRepeat: "연속 중복 방지",
        btnGenerate: "닉네임 생성", btnCopy: "복사하기", txtHistory: "히스토리 (클릭 시 복사)",
        footerText: "Mind가 사랑을 담아 만듦", copied: "복사 완료!", success: "성공!", rtl: false
    }
};

const App = {
    currentLang: "ru",

    init() {
        this.changeLanguage("ru");
    },

    switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active'));
        
        if(tabId === 'main') {
            document.getElementById('tab-main').classList.add('active');
            document.getElementById('view-main').classList.add('active');
        } else {
            document.getElementById('tab-settings').classList.add('active');
            document.getElementById('view-settings').classList.add('active');
        }
    },

    toggleTheme() {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        root.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
    },

    changeLanguage(lang) {
        this.currentLang = lang;
        const data = i18n[lang];
        
        // Направление текста (RTL)
        document.documentElement.dir = data.rtl ? "rtl" : "ltr";

        // Перевод текстовых элементов
        document.getElementById("txt-title").innerText = data.title;
        document.getElementById("tab-main").innerText = data.tabMain;
        document.getElementById("tab-settings").innerText = data.tabSettings;
        document.getElementById("lbl-lang").innerText = data.lblLang;
        document.getElementById("lbl-length").innerText = data.lblLength;
        document.getElementById("lbl-count").innerText = data.lblCount;
        document.getElementById("lbl-mode").innerText = data.lblMode;
        document.getElementById("lbl-prefix").innerText = data.lblPrefix;
        document.getElementById("lbl-suffix").innerText = data.lblSuffix;
        document.getElementById("lbl-exclude").innerText = data.lblExclude;
        
        document.getElementById("opt-readable").innerText = data.optReadable;
        document.getElementById("opt-random").innerText = data.optRandom;
        document.getElementById("opt-vowel").innerText = data.optVowel;
        document.getElementById("opt-consonant").innerText = data.optConsonant;

        document.getElementById("chk-digits").innerText = data.chkDigits;
        document.getElementById("chk-upperfirst").innerText = data.chkUpperFirst;
        document.getElementById("chk-caps").innerText = data.chkCaps;
        document.getElementById("chk-norepeat").innerText = data.chkNoRepeat;

        document.getElementById("btn-generate").innerText = data.btnGenerate;
        document.getElementById("btn-copy").innerText = data.btnCopy;
        document.getElementById("txt-history-title").innerText = data.txtHistory;
        
        // ПЕРЕВОД ПОДВАЛА
        document.getElementById("txt-footer").innerText = data.footerText;
    },

    getRandom(arr) {
        if (!arr.length) return "";
        return arr[Math.floor(Math.random() * arr.length)];
    },

    generateNick(length, mode, exclude, noRepeat) {
        let letters = "abcdefghijklmnopqrstuvwxyz".split("");
        let vowels = "aeiou".split("");
        let consonants = "bcdfghjklmnpqrstvwxyz".split("");

        if (exclude) {
            let exArr = exclude.toLowerCase().split("");
            letters = letters.filter(l => !exArr.includes(l));
            vowels = vowels.filter(l => !exArr.includes(l));
            consonants = consonants.filter(l => !exArr.includes(l));
        }

        if (!letters.length) letters = ["x"];
        if (!vowels.length) vowels = [...letters];
        if (!consonants.length) consonants = [...letters];

        let nick = "";
        let lastChar = "";
        let attempts = 0;

        for (let i = 0; i < length; i++) {
            let char;
            if (mode === "readable") {
                char = (i % 2 === 0) ? this.getRandom(consonants) : this.getRandom(vowels);
            } else if (mode === "vowelHeavy") {
                char = Math.random() > 0.3 ? this.getRandom(vowels) : this.getRandom(consonants);
            } else if (mode === "consonantHeavy") {
                char = Math.random() > 0.7 ? this.getRandom(vowels) : this.getRandom(consonants);
            } else {
                char = this.getRandom(letters);
            }

            if (noRepeat && char === lastChar && letters.length > 1 && attempts < 40) {
                i--; attempts++; continue;
            }
            attempts = 0;
            nick += char;
            lastChar = char;
        }
        return nick;
    },

    generate() {
        let length = parseInt(document.getElementById("length").value);
        let count = parseInt(document.getElementById("count").value);
        
        if (isNaN(length) || length < 3) length = 8;
        if (length > 20) length = 20;
        if (isNaN(count) || count < 1) count = 1;
        if (count > 20) count = 20;

        document.getElementById("length").value = length;
        document.getElementById("count").value = count;

        const mode = document.getElementById("mode").value;
        const prefix = document.getElementById("prefix").value.trim();
        const suffix = document.getElementById("suffix").value.trim();
        const exclude = document.getElementById("exclude").value;
        const numbers = document.getElementById("numbers").checked;
        const upperFirst = document.getElementById("upperFirst").checked;
        const upperAll = document.getElementById("upperAll").checked;
        const noRepeat = document.getElementById("noRepeat").checked;

        let results = [];
        for (let i = 0; i < count; i++) {
            let nick = this.generateNick(length, mode, exclude, noRepeat);
            if (upperAll) {
                nick = nick.toUpperCase();
            } else if (upperFirst && nick.length > 0) {
                nick = nick.charAt(0).toUpperCase() + nick.slice(1);
            }
            if (numbers) {
                nick += Math.floor(Math.random() * 90 + 10);
            }
            results.push(prefix + nick + suffix);
        }

        document.getElementById("result").innerHTML = results.join("<br>");
        this.switchTab('main'); 
        
        let history = document.getElementById("history");
        const currentLangData = i18n[this.currentLang];

        results.forEach(nick => {
            let item = document.createElement("span");
            item.className = "history-item";
            item.innerText = nick;
            item.onclick = () => {
                navigator.clipboard.writeText(nick);
                let originalText = item.innerText;
                item.innerText = currentLangData.copied;
                item.classList.add("copied");
                setTimeout(() => {
                    item.innerText = originalText;
                    item.classList.remove("copied");
                }, 900);
            };
            history.prepend(item);
        });
    },

    copyResult(btn) {
        let text = document.getElementById("result").innerText.replace(/---/g, "");
        if (!text) return;
        
        navigator.clipboard.writeText(text).then(() => {
            let oldText = btn.innerText;
            btn.innerText = i18n[this.currentLang].success;
            btn.style.background = "var(--accent-color)";
            btn.style.color = "var(--container-bg)";
            setTimeout(() => {
                btn.innerText = oldText;
                btn.style.background = "var(--input-bg)";
                btn.style.color = "var(--text-main)";
            }, 1200);
        });
    },

    clearHistory() {
        document.getElementById("history").innerHTML = "";
    }
};

window.onload = () => App.init();