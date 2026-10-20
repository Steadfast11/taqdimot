/* Shared by the board (index.html) and the phone remote (pult.html).
   SPEECH: word^id   -> when he says this word, #id on the board lights up and enlarges
           word^^id  -> same, plus the board camera zooms in on #id
           a|b       -> alternative spellings the recogniser may return
   c = camera centre on the 4x3 map (column+.5, row+.5)                              */
const SLIDES=[
 {c:[1.5,1.5],name:'Ochilish',s:`Assalomu alaykum, hurmatli ustozlar, mehmonlar va do'stlar! Mening ismim Xasan. Men 15|o'n yoshdaman. Bir kuni o'zimga oddiy savol berdim: qo'limdagi soat,^n-watch cho'ntagimdagi telefon^n-phone va uyimdagi kompyuter^n-pc bir-biri bilan gaplasha^s1q oladimi? Bugun sizga shu savoldan nima chiqqanini ko'rsataman.`},
 {c:[1.5,.5],name:'Men kimman',s:`Men maktabimizning axborot texnologiyalari va sun'iy intellekt bo'yicha sardoriman.^s2role Kasbim bo'yicha men software^s2eng engineerman: g'oyadan boshlab, haqiqatda ishlaydigan tizimgacha o'zim quraman. Mening asosiy yo'nalishim: Agentic^s2dir Systems Architecture. Oddiy qilib aytganda, insonga o'zi yordam beradigan, mustaqil ishlaydigan AI tizimlarini^s2t1 loyihalash. Bundan tashqari, algoritmlar asosida ishlaydigan simulyatsiyalar^s2t2 quraman: ularda virtual agentlar belgilangan qoidalar bo'yicha o'zi harakat qiladi va o'zi qaror qabul qiladi. Qurilmalarni^s2t3 ham bitta tizimga bog'layman. Ishlarimni ochiq qilaman: nima qurayotganimni, xatolarimni ham, hammasini ko'rsataman. Buni build in public^s2gh deyishadi.`},
 {c:[2.5,.5],name:'Loyihalarim',s:`Qisqacha, mening loyihalarim. Astra^pj1 — shaxsiy AI agent. Life-Tracker^pj2 — kunimni o'zi o'lchaydigan tizim. Orvell^pj3 — soat uchun o'zim yozgan Android ilova. Astra-video^pj4 — o'zi video yasaydigan tizim. Jarvis^pj5 — har kuni ertalab yangiliklarni o'zi yuboradigan bot. Kodla^pj6 — dasturlashni o'rgatadigan mobil ilova. Va algoritmik^pj7 simulyatsiyalar. Hozir ulardan uchtasini batafsil ko'rsataman.`},
 {c:[3.5,.5],name:'Life-Tracker',s:`Birinchi loyiha: Life-Tracker.^l-title Muammo shunday edi: men o'z kunimni tushunmoqchi edim. Qancha^l-q uxlayman? Qancha harakat qilaman? Vaqtim qayerga ketadi? Shuning uchun tizim qurdim. Soat^l-watch ma'lumotni telefonga^l-phone beradi. Telefon uni uyimdagi serverga^l-pc yuboradi. Bu serverni o'zim^^l-spec sozladim. Keyin sun'iy intellekt^l-ai shu serverga ulanadi va ma'lumotlarimni o'qib, tahlil qiladi. Muhimi: ma'lumotlar hech qanday begona kompaniyada emas. Ular faqat^^l-safe menda turadi.`},
 {c:[3.5,1.5],name:'Orvell',s:`Ikkinchi loyiha shu tizimdan tug'ildi. Uning nomi Orvell.^o-title Soatimning rasmiy ilovasi menga yoqmadi. Shuning uchun o'z ilovamni yozdim. Soat telefon bilan Bluetooth^^o-proto orqali o'z tilida gaplashadi. Men shu tilni o'zim tahlil qildim va soat bilan gaplashadigan dasturni noldan yozdim. Ilova Kotlin^o-kotlin tilida yozilgan, 40|qirq^o-tests dan ortiq avtomatik testdan o'tadi. Hozir u telefonimda ishlayapti:^o-live yurak urishi, qondagi kislorod, uyqu. Keyingi qadam: Play^o-store Market'ga chiqarish. Hozir shunga tayyorlanyapman.`},
 {c:[3.5,2.5],name:'Astra-video',s:`Uchinchi loyiha: Astra-video.^v-title Bu tizim bitta^v-cmd buyruq bilan texnologiya yangiligini olib, tayyor video yasaydi. U o'zi matn^v-s1 yozadi, ovoz^v-s2 beradi, animatsiya^v-s3 chizadi va montaj^v-s4 qiladi. Inson^^v-human aralashmaydi. Bu tizim bilan YouTube^v-yt kanalim uchun videolar tayyorlaganman.`},
 {c:[2.5,2.5],name:"Nimani o'rgandim",s:`Bu loyihalardan ikkita muhim narsani o'rgandim. Birinchisi:^r1 sun'iy intellekt kod yozib berishi mumkin. Lekin tizimni tushunish va loyihalash insonning ishi. Shuning uchun AI'ga bog'lanib qolmaslik uchun hozir Python^r1py kursida o'qiyapman. Ikkinchisi:^r2 eng qiyini g'oya topish emas. Eng qiyini loyihani oxirigacha yetkazish. Shuning uchun hozir bitta fokusim bor: Orvell'ni^r2f tugatish.`},
 {c:[1.5,2.5],name:'Nega aynan men',s:`Endi eng muhim savol: nega^w-q maktabda IT va sun'iy intellekt sardori aynan men bo'lishim kerak? Birinchidan,^w1 men faqat gapirmayman, quraman. Siz hozir ko'rgan tizimlar haqiqatda ishlayapti. Ikkinchidan,^w2 sun'iy intellekt bilan har kuni ishlayman va uni to'g'ri, xavfsiz ishlatishni bilaman. Uchinchidan,^w3 men ham o'quvchiman. O'quvchilarning tilida gapiraman va ularga qayerdan boshlashni o'z tajribamdan ko'rsata olaman. To'rtinchidan,^w4 hamma ishimni ochiq qilaman, shuning uchun natijani har kim tekshira oladi.`},
 {c:[.5,2.5],name:"Maktab uchun reja",s:`Maktabimizda nimani^m-title o'zgartirmoqchiman? Bu mening aniq rejam. Birinchi:^p1 IT va sun'iy intellekt klubi, haftada bir marta. Ikkinchi:^p2 klubdagi har bir o'quvchi yil davomida bitta tugallangan, real loyiha qiladi. Uchinchi:^p3 ustozlar uchun sun'iy intellektdan foydalanish bo'yicha amaliy mashg'ulotlar: dars materiali va test tayyorlashni tezlashtirish. Bu rejalashtirilgan. To'rtinchi:^p4 maktabimiz uchun foydali raqamli vositalar, masalan e'lonlar uchun Telegram bot. Beshinchi:^p5 sun'iy intellektdan xavfsiz va halol foydalanish bo'yicha suhbatlar. Oltinchi:^p6 yil oxirida maktab hakatoni. Maqsadim oddiy: maktabimiz o'quvchilari texnologiyadan faqat foydalanuvchi emas, uni yaratuvchi^^m-goal bo'lsin.`},
 {c:[.5,1.5],name:'Kelajak',s:`Endi kelajak haqida. Mening katta maqsadim: Astra.^f-astra Telefon, kompyuter va uydagi qurilmalarda bitta xotira bilan ishlaydigan shaxsiy AI yordamchi. Uning yadrosi ustida ishlayapman. Lekin bitta odam ko'p narsa qila olmaydi. Shuning uchun ASTRA^f-labs Labs g'oyasi bor: yosh ixtirochilar hamjamiyati. Avval hamjamiyat, keyin loyihalar, keyin mahsulotlar. Bugun bu zalda boshqa maktab va markazlardan kelgan mutaxassislar ham bor. Sizlarga taklifim: keling,^^f-invite birga ishlaylik. Loyihalar va tajriba almashishga tayyormiz.`},
 {c:[.5,.5],name:'Yakun',s:`Mening uzoq muddatli maqsadim: texnologiya sohasining eng kuchli mutaxassislaridan biri bo'lish. Lekin bu yo'l bugun, shu maktabdan boshlanadi. Bir gap bor, menga juda yoqadi: The starlight^q-en you see today left long ago. We build what arrives tomorrow. Ya'ni bugun ko'rayotgan yulduz^q-uz nuri ancha oldin yo'lga chiqqan. Biz esa ertaga yetib keladigan narsani quryapmiz. E'tiboringiz uchun rahmat!^^thanks`}
];
const MAPVIEW={x:2,y:1.5,z:.23};

/* ---------- tokenise ---------- */
const norm=w=>w.toLowerCase().replace(/[ʻʼ’‘`']/g,'').replace(/[^0-9a-zа-яўқғҳё\-]/gi,'').replace(/-/g,'');
const CYR={а:'a',б:'b',в:'v',г:'g',д:'d',е:'e',ё:'yo',ж:'j',з:'z',и:'i',й:'y',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'x',ц:'s',ч:'ch',ш:'sh',ъ:'',ы:'i',ь:'',э:'e',ю:'yu',я:'ya',ў:'o',қ:'q',ғ:'g',ҳ:'h'};
const lat=w=>w.split('').map(ch=>CYR[ch]??ch).join('');
const T=[],sentStart=[],slideStart=[];
SLIDES.forEach((sl,si)=>{slideStart[si]=T.length;let sent=sentStart.length;sentStart.push(T.length);
 sl.s.split(/\s+/).filter(Boolean).forEach((raw,k,arr)=>{
  let wordPart,ids=[],zoom=false;
  if(raw.includes('^^')){const m=raw.split('^^');wordPart=m[0];ids=[m[1]];zoom=true}
  else{const m=raw.split('^');wordPart=m[0];ids=m.slice(1)}
  const alts=wordPart.split('|');
  T.push({d:alts[0],n:alts.map(norm).filter(Boolean),slide:si,sent,ids,zoom});
  if(/[.!?]["”]?$/.test(alts[0])&&k<arr.length-1){sent=sentStart.length;sentStart.push(T.length)}
 })});
sentStart.push(T.length);slideStart.push(T.length);
const sentOf=i=>{i=Math.min(i,T.length-1);let s=0;while(s+1<sentStart.length&&sentStart[s+1]<=i)s++;return s};

/* ---------- link between phone and board ----------
   primary: public MQTT broker over WebSocket (retained -> board gets the latest state on (re)load)
   backup : ntfy.sh (only used while MQTT is down; it is rate limited)                          */
const ROOM='xasan-taqdimot-k7q2m9x4';
const Link={c:null,ok:false,lastNtfy:0,pending:null,nt:null,
 start(onMsg,onState){
  try{this.c=mqtt.connect('wss://broker.hivemq.com:8884/mqtt',{clientId:'x'+Math.random().toString(16).slice(2,10),keepalive:15,reconnectPeriod:1500,connectTimeout:7000,clean:true});
   this.c.on('connect',()=>{this.ok=true;onState&&onState(true);if(onMsg)this.c.subscribe(ROOM)});
   this.c.on('close',()=>{this.ok=false;onState&&onState(false)});
   this.c.on('offline',()=>{this.ok=false;onState&&onState(false)});
   this.c.on('message',(t,m)=>{try{onMsg(JSON.parse(m.toString()))}catch(e){}});
  }catch(e){onState&&onState(false)}
  if(onMsg){try{const es=new EventSource('https://ntfy.sh/'+ROOM+'/sse');
   es.onmessage=e=>{try{const d=JSON.parse(e.data);if(d.message)onMsg(JSON.parse(d.message))}catch(_){}}}catch(e){}}
 },
 send(o){const s=JSON.stringify(o);
  if(this.c&&this.ok){try{this.c.publish(ROOM,s,{qos:0,retain:true})}catch(e){}}
  else{this.pending=s;const wait=Math.max(0,1500-(Date.now()-this.lastNtfy));clearTimeout(this.nt);
   this.nt=setTimeout(()=>{this.lastNtfy=Date.now();fetch('https://ntfy.sh/'+ROOM,{method:'POST',body:this.pending}).catch(()=>{})},wait)}}
};
