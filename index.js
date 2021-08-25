function roll(){
    var rrandomNumber1=Math.floor(6*Math.random()+1);
    console.log(rrandomNumber1);
    randomimg="images/dice"+rrandomNumber1+".png";
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomimg)

    var rrandomNumber2=Math.floor(6*Math.random()+1);
    console.log(rrandomNumber2);
    randomimg="images/dice"+rrandomNumber2+".png";
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomimg)
}


