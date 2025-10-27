function logMessage(message)
 {
      let output = document.getElementById("output");
      output.innerHTML += message
 }
    function brushTeeth() {
      return new Promise((resolve, reject) => {
        setTimeout(() => 
          {
           
          resolve("Teeth brushed");
          console.log("Teeth brushed");
          // reject("Error: Brushing failed");
        }, 1000);
      });
    }

    function haveBreakfast() {
      return new Promise((resolve, reject) => {
        setTimeout(() => 
            {
          resolve("Had breakfast");
          console.log("Breakfast done");
        }, 1500);

      });
    }

    function goToWork() 
    {
      return new Promise((resolve, reject) => {
        setTimeout(() =>
            {
          resolve("Reached office");
          console.log("At work");
        }, 1000);
      });
    }
    async function start() 
    {
      let output = document.getElementById("output");
    

      try {
        let step1 = await brushTeeth();
        logMessage(step1);
        

        let step2 = await haveBreakfast();
        logMessage(step2);

        let step3 = await goToWork();
        logMessage(step3);

        logMessage("All tasks done!");
      } 
      catch (error) 
      {
        logMessage(error);
      }
    }
    // start();