export const projects = [
  {
    id: "sneaker-studio",
    title: "Sneaker Studio ABN",
    status: "IN_PROGRESS",
    description: "Sneaker Studio သည် React နှင့် Custom CSS ကို အသုံးပြုကာ သပ်ရပ်သော UI/UX ဖြင့် တည်ဆောက်ထားသည့် E-commerce Shopping Platform တစ်ခု ဖြစ်ပါသည်။ လက်ရှိတွင် မှာယူမှုအချက်အလက်များကို အလွယ်တကူ Auto-copy ကူးယူနိုင်သော စနစ်ကို အသုံးပြုထားပြီး၊ ပိုမိုပြည့်စုံသည့် Website ဖြစ်လာစေရန် Backend API ပိုင်းကို ဆက်လက်အချောသတ်နေပါသည်။",
    tech: ["React", "Vite", "Responsive UI", "Custom CSS"],
    live: "https://sneakerstudioabn-project-1.vercel.app/",
    github: "",
    // image: "sneaker-studio.png",
    challenge: "Project ရဲ့ အဓိကစိန်ခေါ်မှုကတော့ Seamless Checkout System တစ်ခု တည်ဆောက်ဖို့ ဖြစ်ပါတယ်။",
    solution: "ဝယ်ယူသူတွေအတွက် လက်ရှိမှာ Manual Copy-Paste လုပ်ပြီး မှာယူနိုင်တဲ့ Solution တစ်ခုကို အသုံးပြုထားပါတယ်။ ဒီထက်ပိုပြီး စနစ်ကျတဲ့ Full-stack Website တစ်ခုဖြစ်လာဖို့အတွက် API ရေးသားနည်းတွေနဲ့ အဆင့်မြင့် နည်းပညာသစ်တွေကို အားစိုက်လေ့လာနေပါတယ်။",
    outcome: "Sample project လေးဖြစ်တဲ့အတွက် design concepts အပိုင်းလေးတွေမှာ ပိုပြီးသပ်ရပ်သင့်တယ်လို့လည်း မြင်မိပါတယ်။ ထပ်ပြီးတော့လည်း update လုပ်သွားပါမယ်။"
  },
   
  {
    id: "snake-game",
    title: "Snake Game ASCII Edition",
    status: "LIVE_DEMO",
    description: "Classic Snake game re-imagined with a retro ASCII aesthetic. Features responsive grid adjustments for mobile devices and a 'Low Power Mode' for battery efficiency. Fully built with React state management.",
    tech: ["React", "Game Logic", "Performance Opt"],
    live: "#lab",
    github: "", 
    image: "",
    challenge: "Ensuring smooth gameplay loop and rendering performance on lower-end mobile devices without canvas.",
    solution: "Implemented a custom game loop with adjustable tick rates and optimized DOM rendering for the ASCII grid.",
    outcome: "A lightweight, nostalgic game that runs smoothly across all devices."
  },
  {
    id: "blog-page",
    title: "Retro Personal Blog",
    status: "IN_PROGRESS",
    description: "Building a dedicated space for long-form thoughts on tech and design, keeping the 90s retro aesthetic alive.",
    tech: ["React", "Node.js", "Markdown"],
    live: "",
    github: "",
    image: "",
    challenge: "Capturing the 90s retro aesthetic without sacrificing modern usability and performance.",
    solution: "Using custom fonts and scanline effects via CSS while keeping the underlying React structure clean.",
    outcome: "Learned how to balance strong visual design with core accessibility and performance."
  },
];
