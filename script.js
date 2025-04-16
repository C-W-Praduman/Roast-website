const input = document.getElementById('input');
const btn = document.querySelector('#btn');
const resultdiv = document.querySelector(".resultdiv");
// all roasting lines
const classmateMemes = {
    "ankit": "Aree laure tu bhi dekh raha hai?",
    "aryan": "Aaryan Haa tu vahi hai na jisane ek kalu ko kala bola tha  haye hi kalua.",
    "priya": "Priya? Zoom class ki rani, mic hamesha mute!",
    "rohit": "Rohit to dusaro ka WiFi sirf YouTube ke liye chalaata hai.",
    "shubham": "Topper hai Topper hai  Topper hai  Topper hai  Topper hai ",
    "suraj": "Suraj bhai ne to aag laagaa ke rakhi hai.",
    "shyam": "shyamji ki notes Google Docs se bhi zyada accurate hain.",
    "dhiraj": "kya bhai ab aese lauro ke baare me mat puchho  ",
    "raj": " Raj Tu coding nahi comedy sikh ",
    "abhinav": "abhinav har baar last bench pe hota hai — physically and mentally.",
    "shalmili": "shalmili presentation me toh expert hai, but padhne me? No comments.",
    "nitin": "nitin practical me hamesha system error blame karta hai.",
    "shivraj": "shivraj ke answers exam me toh nahi milte, par WhatsApp pe mil jaate hain.",
    "aditi": "aditi har baar test ke baad bolti hai ‘mujhe kuch nahi aata tha’ — aur top karti hai.",
    "dheeraj": "dheeraj class ka DJ hai, bina aux ke bhi bajata hai.",
    "munna": "munna ki attendance itni low hai, uska roll number bhi bhool gaye sab.",
    "vishwajit": "vishwajit aur assignments ka rishta sirf deadline ke din shuru hota hai.",
    "praduman": "praduman har subject me pass ho jaata hai — default setting lagta hai.",
    "mukesh": "maut ko chhuke tak se wapas aa jata hai munna",
    // "yash": "Yash ki notes ki handwriting AI bhi samajhne se mana kar de.",
    // "shruti": "Shruti ke answers copy-paste ke level pe Nobel milna chahiye.",
    // "anmol": "Anmol har subject me pass ho jaata hai — default setting lagta hai."
    // "riya": "Riya ke projects itne ache lagte hain, teacher unhe apna bana lete hain.",
    // "kiran": "Kiran hamesha piche baithta hai, lekin gossip frontbench se zyada hoti hai."
  };

  let audio = new Audio("meme.mp3")


let selectedvoice = [];
// to get all voice in speechsynthesis
window.speechSynthesis.onvoiceschanged = ()=>{
    selectedvoice = speechSynthesis.getVoices();
    selectedvoice = selectedvoice.find((curelem)=>{
        return curelem.lang =='hi-IN'
    })
    
}

  
// function to provide speech facilitities
const speech = (text)=>{
    const speakval = new SpeechSynthesisUtterance(text)
    speakval.lang = 'hi-IN'
    speakval.voice = selectedvoice;
   window.speechSynthesis.speak(speakval)
    
}
// hnadle the btn click and shows result to the screen
const showresult = ()=>{
    let inputname = input.value.toLowerCase().trim()
   if(inputname == ""){
    alert("Kya re Banega Oversmart Naam dal na Bhai 😒");
    return;
   } 
   let resultname= classmateMemes[inputname];
    if(resultname){
        resultdiv.innerHTML = `<p>${resultname}</p>`
    }else{
         resultdiv.innerHTML = `<p>Tujhko koe nahi janta re lode 😂😂</p>`
         audio.play()
    }
    input.value = ""
    if(resultname){
        speech(resultname);
     }
}

btn.addEventListener("click", ()=>{
    showresult();
})

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showresult();
    }
});
