 let num = 0;
 const increaseCount = document.getElementById("increase");
 const decrementCount = document.getElementById("decrease");
 const restCount = document.getElementById("rest")
 const totalCount = document.getElementById("value");
 const topHead = document.getElementById("head");

totalCount.innerHTML = num
 

 const holdIncrease = () => {
    totalCount.style.color = "orange";
    topHead.style.color = "#ceff33";
    num++;
    totalCount.innerHTML = num;
 }

 const holdDecrease = () => {
    totalCount.style.color = "green";
    topHead.style.color = "#33fbff"
    num--;
    totalCount.innerHTML = num;
 }

 const btnRest = () => {
      totalCount.style.color = "blue";
      topHead.style.color = "#7a33ff";
        num = 0;
        totalCount.innerHTML= num;
    totalCount.innerHTML = num;
 }
 

 increaseCount.addEventListener("click", holdIncrease);
 decrementCount.addEventListener("click", holdDecrease);
 restCount.addEventListener("click", btnRest);
