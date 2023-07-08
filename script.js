

gsap.from("#main",{x:-1000,duration:3, delay:1, });
gsap.from("#first",{x:-1000, duration:3, delay:2, });
gsap.from("#image", {x:1000, duration:2, delay:3, });
gsap.from("#intro", {x:-1000, duration:2, delay:4, });


gsap.to("#intro", {
    text: " based in Dallas, Texas ",
    duration: 2,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.in",
    yoyo: true,
    delay:6,
})


const sections = gsap.utils.toArray(".sectionAnim");
const lastIndex = sections.length - 1;

sections.forEach((section, i) => {
  section._bg = section.querySelector(".bg");
  section._h1 = section.querySelector("#enjoy");
  
  section._bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight*2}?random=${i})`;

  ScrollTrigger.create({ 
    trigger: section,
    start: ()=> i==0 ? "top top" : "top bottom", 
    end: ()=> i==lastIndex ? "top top" : "bottom top",     
    onRefresh: self => {      
      section._tl = gsap.timeline({paused:true, defaults:{ease:'none', overwrite:'auto'}}) 
      .fromTo(section._h1, {y:()=> i==0 ? 0 : (innerHeight/2)*1.5}, {y:()=> i==lastIndex ? 0 : (-innerHeight/2)*1.5}, 0)
      .fromTo(section._bg, {y:()=> i==0 ? -innerHeight/2 : 0}, {y:()=> i==lastIndex ? -innerHeight/2 : -innerHeight}, 0)	  
      .progress(self.progress); 
    },
    onUpdate: self => { gsap.to(section._tl, {duration:0.75, progress:self.progress}); }
  });
  
});

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:"none", duration:2});

const tl = gsap.timeline();
tl.from(".items", {yPercent:100})
.from(".project", {yPercent:100})

gsap.from(".about",{
    scrollTrigger: {
    trigger:".about",
    start:"top 99%",
    end: "top 10%",
    toggleActions:"restart pause resume pause"
    },
    y:200,
    duration:1,
    delay:0.1,
    opacity: 0,
    yoyo:true,
})
gsap.from(".card",{
    scrollTrigger:{
    trigger:".card",
    start:"top 99%",
    end: "top 10%",
    toggleActions:"restart pause resume pause"
    },
    y:200,
    duration:1,
    delay:0.1,
    opacity: 0,
    pin: true,
})
gsap.from(".btn",{
    scrollTrigger:{
    trigger:".btn",
    start:"top 99%",
    end: "top 10%",
    toggleActions:"restart pause resume pause"
    },
    y:100,
    duration:1,
    delay:0.1,
    opacity: 0,
    pin: true,
})
gsap.from(".animPortfolio",{
    scrollTrigger:{
    trigger:".animPortfolio",
    start:"top 99%",
    end: "top 10%",
    toggleActions:"restart pause resume pause"
    },
    y:200,
    duration:1,
    delay:0.1,
    pin: true,
})
gsap.from("#contact",{
  scrollTrigger:{
  trigger:"#contact",
  start:"top 99%",
  end: "top 10%",
  toggleActions:"restart pause resume pause"
  },
  y:200,
  duration:1,
  delay:0.1,
  pin: true,
})
gsap.from(".pic",{
  scrollTrigger:{
  trigger:".pic",
  start:"top 99%",
  end: "top 10%",
  toggleActions:"restart pause resume pause"
  },
  x:-200,
  duration:1,
  delay:0.1,
  pin: true,
})

gsap.from(".form-label",{
  scrollTrigger:{
  trigger:".pic",
  start:"top 99%",
  end: "top 10%",
  toggleActions:"restart pause resume pause"
  },
  x:200,
  duration:1,
  delay:0.1,
  pin: true,
})
gsap.from(".swiper-wrapper",{
  scrollTrigger:{
  trigger:".swiper-wrapper",
  start:"top 99%",
  end: "top 10%",
  toggleActions:"restart pause resume pause"
  },
  scale:1.5,
  duration:2,
  delay:0.1,
  pin: true,
  opacity:0,
})
gsap.from(".items",{
  scrollTrigger:{
  trigger:".items",
  start:"top 99%",
  end: "top 10%",
  toggleActions:"restart pause resume pause"
  },
  scale:1.5,
  duration:2,
  delay:0.1,
  pin: true,
  opacity:0,
})


