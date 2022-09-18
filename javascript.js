window.onscroll=function(){
    let clientViewPortHeight = document.documentElement.clientHeight;

    let servicesTop = document.querySelector(".services").getBoundingClientRect().y;

    let servicesHeight= document.querySelector(".services").getBoundingClientRect().height;

    let servicesHeaderHeight= document.querySelectorAll(".services .container div");

    

    if(clientViewPortHeight > servicesTop + servicesHeight * 2/3){
      document.querySelector(".services-header").style.opacity = "1";
      document.querySelector(".services-header").style.left = "0";
      servicesHeaderHeight.forEach((service)=>{
        service.style.bottom = "0";
        setTimeout(()=>{
            service.style.opacity = "1";
        },200)
      })
    }else{
      document.querySelector(".services-header").style.opacity = "0";
      document.querySelector(".services-header").style.left = "calc(-339.96px * 4)";
      servicesHeaderHeight.forEach((service)=>{
        service.style.bottom = "-200px";
        setTimeout(()=>{
            service.style.opacity = "0";
        },200)
      })
    }
}