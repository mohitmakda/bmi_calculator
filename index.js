const btnEl=document.getElementById("btn");

const bmiValEl = document.getElementById("bmiVal")


function calculateBmi(){
    const heightValue = document.getElementById("height").value/100
    const weightValue = document.getElementById("weight").value
    const bmiValue=weightValue/(heightValue*heightValue)
    const bmiEll= document.getElementById("bmi")
    bmiEll.value=bmiValue

    if(bmiValue<18.5){
        bmiValEl.innerText="underweight"
    }else if(bmiValue>25){
        bmiValEl.innerText="overweight"
    }else{
        bmiValEl.innerText="normal"
    }
}




btnEl.addEventListener("click",calculateBmi)