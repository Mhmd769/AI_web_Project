const contact = document.querySelector(".contact");
const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const error = document.querySelector(".error");

// EmailJS IDs
const serviceId = "service_ei2g07o";
const templateId = "template_xdmcazt";
const userId = "user_d8DcekEisfi8mtui3Kt2C";

contact?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    from_name: fullname.value,
    from_email: email.value,
    message: message.value,
  };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (fullname.value && email.value && message.value) {
    if (emailRegex.test(email.value)) {
      try {
        fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: data,
          }),
        });
      } catch (err) {
        console.error(err);
      } finally {
        alert("Message Sent");
        contact.reset();
      }
    } else {
      error.innerHTML = "Please enter a valid email";
      error.style.color = "red";
      error.style.textAlign = "center";
      error.style.fontWeight = "bold";
    }
  } else {
    error.innerHTML = "Please fill in all fields";
    error.style.color = "red";
    error.style.textAlign = "center";
    error.style.fontWeight = "bold";
  }
});

const items = [
  {
    title: "Home",
    link: "home.html",
  },
  {
    title: "How it works",
    link: "works.html",
  },
  {
    title: "Future of AI",
    link: "future.html",
  },
  {
    title: "Opportunities",
    link: "opport.html",
  },

  {
    title: "ChatGPT",
    link: "chatgpt.html",
  },
  {
    title: "AI in Manufacturing",
    link: "manu.html",
  },
  {
    title: "AI in Education",
    link: "education.html",
  },
];

const side_menu = document.querySelector(".side_menu");
const menu = document.querySelector(".menu");
const first = document.querySelector(".top");
const mid = document.querySelector(".mid");
const last = document.querySelector(".last");

items.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.setAttribute("href", item.link);
  a.innerHTML = item.title;
  li.appendChild(a);
  side_menu.appendChild(li);
});

menu?.addEventListener("click", () => {
  side_menu.classList.toggle("show_menu");
  first.classList.toggle("top_menu");
  mid.classList.toggle("mid_menu");
  last.classList.toggle("last_menu");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    side_menu.classList.remove("show_menu");
    first.classList.remove("top_menu");
    mid.classList.remove("mid_menu");
    last.classList.remove("last_menu");
  }
});

document.addEventListener("click", (e) => {
  if (
    e.target !== menu &&
    e.target !== first &&
    e.target !== mid &&
    e.target !== last
  ) {
    side_menu.classList.remove("show_menu");
    first.classList.remove("top_menu");
    mid.classList.remove("mid_menu");
    last.classList.remove("last_menu");
  }
});

// manufacutring.html

const manu_cases = [
  {
    title:
      "AI Transforming Logistics: Improving Efficiency and Reducing Losses.",
    paragraph:
      "Artificial intelligence is improving the logistics industry by providing solutions for the challenges of overstocking or under-stocking inventories. AI is being used to track production floor operations, provide more accurate demand forecasting, and simplify resource management. The use of technologies like 3D printing enables manufacturers to produce serial parts in-house and manage inventories more efficiently. Additionally, AI-powered robots are being utilized as couriers to ensure uninterrupted last-mile deliveries. With AI, logistics operations are becoming more efficient, reducing losses and wastage, and increasing margins and revenue.",
    image: "images/manu/logistic.jpg",
  },
  {
    title: "AI-powered Robots in Manufacturing: Improving Process Automation",
    paragraph:
      "AI-based robots in manufacturing use machine learning algorithms to automate tasks and improve decision-making. Applications include welding, painting, drilling, product inspection, die casting, and grinding. These algorithms continuously improve, leading to better handling of processes over time.",
    image: "images/manu/manu.webp",
  },
  {
    title: "AI in Factory Automation: Improving Productivity and Efficiency",
    paragraph:
      "AI is being used to improve factory automation by reducing labor costs and increasing productivity and efficiency. AI can automate complex tasks, detect anomalies quickly through continuous tracking and monitoring, centralize operational data, reduce resources required, and allow for flexible scaling according to demand and manufacturing strategies",
    image: "images/manu/manu.webp",
  },
];

const cases = document.querySelector(".cases");

manu_cases.forEach(({ title, paragraph, image }, index) => {
  const case_container = document.createElement("div");
  case_container.classList.add("case_container");

  const span1 = document.createElement("span");
  span1.classList.add("span1");

  const span2 = document.createElement("span");
  span2.classList.add("span2");

  case_container.appendChild(span1);
  case_container.appendChild(span2);

  const case_title = document.createElement("h1");
  case_title.classList.add("case_title");
  case_title.innerHTML = title;

  const detail_btn = document.createElement("button");
  detail_btn.classList.add("detail_btn");
  detail_btn.innerHTML = "More details";

  case_container.appendChild(case_title);
  case_container.appendChild(detail_btn);

  const modal = document.createElement("div");
  modal.classList.add("case_modal");

  const img = document.createElement("img");
  img.setAttribute("src", image);

  const p = document.createElement("p");
  p.classList.add("case_paragraph");
  p.innerHTML = paragraph;

  const close = document.createElement("button");
  close.classList.add("close");
  close.innerHTML = "Close";

  modal.appendChild(img);
  modal.appendChild(p);
  modal.appendChild(close);

  case_container.appendChild(modal);

  cases?.appendChild(case_container);
});

const open_modal = document.querySelectorAll(".detail_btn");

open_modal.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", () => {
      btn.nextElementSibling.style.display = "flex";
      document.body.style.overflow = "hidden";

      const close = btn.nextElementSibling.querySelector(".close");

      close.addEventListener("click", () => {
        btn.nextElementSibling.style.display = "none";
        document.body.style.overflow = "auto";
      });
    });
  }
});

const overview_btn = document.querySelector(".overview_btn");
const predictive_btn = document.querySelector(".predictive_btn");
const overview = document.querySelector(".overview");
const predictive = document.querySelector(".predictive");

overview_btn?.addEventListener("click", () => {
  overview.style.display = "block";
  predictive.style.display = "none";
});

predictive_btn?.addEventListener("click", () => {
  predictive.style.display = "block";
  overview.style.display = "none";
});


/*works*/

var btn = document.getElementById("changeimg");
var btnback = document.getElementById("backimg");
var img = document.querySelector(".imgs");
var array = [
  "images/works/gen1.webp",
  "images/works/gen2.webp",
  "images/works/gen3.webp",
  "images/works/gen4.webp",
];
var x = 0;
btn?.addEventListener("click", () => {
  if (x > 3) {
    x = 0;
  }
  if (x == -1) {
    x = 1;
  }
  console.log(x);
  img.src = array[x];
  x++;
});

btnback?.addEventListener("click", () => {
  if (x < 0) {
    x = 3;
  }
  if (x == 4) {
    x = 2;
  }
  console.log(x);
  img.src = array[x];
  x--;
});
var sec1btn = document.querySelector(".sec1");
var sec2btn = document.querySelector(".sec2");
var section1 = document.querySelector(".section11");
var section2 = document.querySelector(".section2");

sec1btn?.addEventListener("click", () => {
  section2.style.display = "none";
  section1.style.display = "block";
});

sec2btn?.addEventListener("click", () => {
  section1.style.display = "none";
  section2.style.display = "block";
});

var picdiv_img = [
  "images/works/pic1.webp",
  "images/works/pic2.webp",
  "images/works/pic3.webp",
  "images/works/pic4.webp",
];

var counter_img = 0;
var change_img = document.getElementById("switch");

if (change_img != null) {
  setInterval(() => {
    change_img.src = picdiv_img[counter_img++];
    if (counter_img == 4) counter_img = 0;
  }, 2000);
};


const dtElements = document.querySelectorAll('.dttypes');
const ddElements = document.querySelectorAll('.ddtypes');

let timeout;

for (let i = 0; i < dtElements.length; i++) {
  dtElements[i].addEventListener('mouseenter', function() { 
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      ddElements[i].style.opacity = '0';
      ddElements[i].style.display = 'block';
      setTimeout(function() {
        ddElements[i].style.opacity = '1';
      }, 50);
    }, 300);
  });

  dtElements[i].addEventListener('mouseleave', function() { 
    clearTimeout(timeout);
    ddElements[i].style.opacity = '0';
    setTimeout(function() {
      ddElements[i].style.display = 'none';
    }, 300);
  });
}

/*future*/
$("#link").hide();
$(".vidf").click(function(){
  $("#link").show();
    $(".vidf").hide();
});

$("#in").hide();
$(".butt").click(function(){
  $("#in").slideToggle();
});

var video = document.getElementById("link");
var note = document.getElementById("video-note");

video?.addEventListener("play", function () {
  note.innerHTML = "The video is playing";
});

video?.addEventListener("pause", function () {
  note.innerHTML = "The video is paused";
});

video?.addEventListener("ended", function () {
  note.innerHTML = "The video has ended";
});

video?.addEventListener("seeking", function () {
  note.innerHTML = "The video is seeking";
});

video?.addEventListener("seeked", function () {
  note.innerHTML = "The video has seeked";
});

video?.addEventListener("timeupdate", function () {
  note.innerHTML = "The current time is " + video.currentTime.toFixed(2);
});


// Oppurtinities
const skills = document.querySelector(".skills");

const skills_array = [
  {
    skill: "Machine learning algorithms and techniques",
    def: "Machine learning is a field<br> of artificial intelligence that focuses on developing algorithms that can learn from data and make predictions or decisions without being explicity programmed.Here are some of the most commonly used techinques:<br>1-Suppervised Learning<br>2-Reinforcement Learning<br>3-Decision Trees",
  },
  {
    skill: "Programming languages such as Python,R,and Java",
    def: "Programming Languages are a set of rules, symbols and instructions used to create computer programs, applications, and software.<br>They allow programmers to communicate with computers and give them instructions on how to execute specific tasks. ",
  },
  {
    skill: "Deep learning and neural networks",
    def: "Deep learning is a subfield of machine learning that involves training neural networks to recognize patterns and make predictions from data.<br>Neural networks are a type of mathematical model that is loosely inspired by the structure and function of the human brain.",
  },
  {
    skill: "Data science and data analysis",
    def: "Data science is broader<br>field that encompasses data analysis and other related disciplines, such as machine learning and artificial intelligence.<br>Data analysis on the other hand, is the process of examining, cleaning, transforming, and modeling data in order to extract useful information and draw conclusions from it.",
  },
  {
    skill: "Cloud computing and distributed systems",
    def: "Cloud computing refers to the use of remote servers, often hosted by third-party providers to store, manage and process data.<br>Distributed systems on the other hand, refers to a network of interconnected computers that work together to achieve common goal.",
  },
  {
    skill: "Natural language processing (NLP) and computer vision",
    def: "NLP involves teaching machines to understand, interpret, and generate human language in a way that is similar to how humans do. On the other hand, CV is concerned with enabling machines to analyze and interpret visual information, such as images and videos.  ",
  },
  {
    skill: "Problem-solving, critical thinking, and creative thinking",
    def: "1-In Problem solving you'll be faced with a lot of challenges, from designing algorithms and models to implementing and deploying them.<br>2-Critical thinking involves being able information and ideas objectively.<br>3-Creativity involves being able to approach problems in new and innovative ways.",
  },
  {
    skill: "Cloud computing and distributed systems",
    def: "Cloud computing is a model for delivering computing services, in which users can access shared computing resource, such as servers, databases, and software.<br>Distributed systems, on the other hand, refer to a collection of independent computers that work together as a single system to achieve a common goal.",
  },
  {
    skill: "Ethics and the impact of AI on society",
    def: "The use of AI in various domains such as healthcare, employment, criminal justice, and social media<br>can have significant implications for people's lives, privacy, and freedoms.",
  },
  {
    skill:
      "Interdisciplinary skills, such as design thinking and effective communication",
    def: "Interdisciplinary skills refer<br> to a set of abilities and competenceis that allow individuals to work effectively across multiple discipline or fields.",
  },
];

skills_array.forEach(({ skill, def }) => {
  const div = document.createElement("div");
  div.classList.add("skill");
  const skill_div = document.createElement("h1");
  skill_div.innerHTML = skill;
  div.appendChild(skill_div);
  const popup_div = document.createElement("div");
  popup_div.classList.add("popup_def");
  popup_div.innerHTML = def;
  div.appendChild(popup_div);
  skills?.appendChild(div);
});

function changeImage() {
  var image = document.getElementById("change");
  if (image.src.match("images/Opportunites/img1.webp")) {
    image.src = "images/Opportunites/img2.webp";
  } else if (image.src.match("images/Opportunites/img2.webp")) {
    image.src = "images/Opportunites/img3.webp";
  } else if (image.src.match("images/Opportunites/img3.webp")) {
    image.src = "images/Opportunites/img4.webp";
  } else {
    image.src = "images/Opportunites/img1.webp";
  }
};

// Chatgpt page

const chat_images = [
  {
    img: "images/chatgpt/response1.webp",
  },
  {
    img: "images/chatgpt/response2.webp",
  },
  {
    img: "images/chatgpt/response3.webp",
  },
  {
    img: "images/chatgpt/response4.webp",
  },
  {
    img: "images/chatgpt/response5.webp",
  },
  {
    img: "images/chatgpt/response6.webp",
  },
];

const reponses = document.querySelector(".responses");

chat_images.forEach(({ img }, i) => {
  const div = document.createElement("div");
  div.classList.add(`res${i + 1}_img`);
  const img_div = document.createElement("img");
  img_div.src = img;
  img_div.alt = `res${i + 1}`;
  div.appendChild(img_div);
  reponses?.appendChild(div);
});

const responses_images = document.querySelectorAll(".responses div");

responses_images.forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoom_response");
  });
});

// chat gpt

const path1_button = document.querySelectorAll('.path1');
const path2_button = document.querySelectorAll('.path2');
const path1_page = document.querySelectorAll('.path1_content');
const path2_page = document.querySelectorAll('.path2_content');

path1_button[0]?.addEventListener('click',page1);

function page1(){
    path1_page[0].style.display="block";
    path2_page[0].style.display="none";
    
    path1_page[0].style.opacity="1";
    path2_page[0].style.display="0";
}
path2_button[0]?.addEventListener('click',page2);

function page2(){
    path2_page[0].style.display="block";
    path1_page[0].style.display="none";
    
    path2_page[0].style.opacity="1";
    path1_page[0].style.opacity="0";
}


const popping_buttons = document.querySelectorAll('#popping_button');
const popping_details = document.querySelectorAll('#popping_details');
const closing_buttons = document.querySelectorAll('.closing_button');
const blurring_layer = document.querySelector('.blurring');


for(k=0; k<popping_buttons.length ; k++){
    let index;
    index=k;
    popping_buttons[k].addEventListener('click', function(){
        popping(index);
    });


}

function popping(x){
    popping_details[x].style.display="block";
    blurring_layer.style.zIndex="+1";
}

for(l=0; l<closing_buttons.length;l++){
    let n;
    n=l;
    closing_buttons[l].addEventListener('click', function(){
        closing(n);
    });
}
function closing(n){
    popping_details[n].style.display= "none";
    blurring_layer.style.zIndex="-1";

}

blurring_layer?.addEventListener('click', () =>{
    for( j=0;j< popping_details.length; j++){
        popping_details[j].style.display= "none";
    }

    blurring_layer.style.zIndex="-1";
});
  /*education*/ 


function toggleVisibility(paragraph, button) {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    button.innerHTML = "click to hide";
  } else {
    paragraph.style.display = "none";
    button.innerHTML = "click to show";
  }
}
var toggleButton1 = document.getElementById("toggle-button1");
var toggleButton2 = document.getElementById("toggle-button2");
var toggleButton3 = document.getElementById("toggle-button3");
var toggleButton4 = document.getElementById("toggle-button4");

var paragraph1 = document.getElementById("toggle-p1");
var paragraph2 = document.getElementById("float-p2");
var paragraph3 = document.getElementById("toggle-p3");
var paragraph4 = document.getElementById("float-p4");

toggleButton1.addEventListener("click", function () {
  if (paragraph1.style.display === "none") {
    paragraph1.style.display = "block";
    toggleButton1.innerHTML = "click to hide";
  } else {
    paragraph1.style.display = "none";
    toggleButton1.innerHTML = "click to show";
  }
});

toggleButton2.addEventListener("click", function () {
  if (paragraph2.style.display === "none") {
    paragraph2.style.display = "block";
    toggleButton2.innerHTML = "click to hide";
  } else {
    paragraph2.style.display = "none";
    toggleButton2.innerHTML = "click to show";
  }
});

toggleButton3.addEventListener("click", function () {
  if (paragraph3.style.display === "none") {
    paragraph3.style.display = "block";
    toggleButton3.innerHTML = "click to hide";
  } else {
    paragraph3.style.display = "none";
    toggleButton3.innerHTML = "click to show";
  }
});

toggleButton4.addEventListener("click", function () {
  if (paragraph4.style.display === "none") {
    paragraph4.style.display = "block";
    toggleButton4.innerHTML = "click to hide";
  } else {
    paragraph4.style.display = "none";
    toggleButton4.innerHTML = "click to show";
  }
});
