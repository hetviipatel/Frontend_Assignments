function showmessage(message) 
{
      let output = document.getElementById("output"); 
      output.innerHTML= message;
      
    }

    function prepareBreakfast() {
      return new Promise((resolve) => {
        setTimeout(() =>
         resolve("Breakfast is ready!"), 1000);
      });
    }

    function washDishes() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(" Dishes are washed!"), 1500);
      });
    }

    function makeCoffee() {
      return new Promise((resolve) => {
        setTimeout(() => resolve("Coffee is ready!"), 1000);
      });
    }


    const tasks = [
      { name: "Prepare Breakfast" },
      { name: "Wash Dishes"},
      { name: "Make Coffee"}
    ];

    let msg = []


    async function Start() 
    {

      document.getElementById("output").innerHTML = ""; 

      showmessage(" Starting Routine...");



     
      tasks.forEach((task, index) => 
      {
        // task.charAt(0).ToUpper();
        let show = `Step ${index - 1}: ${task.name}`;
        showmessage(show);
        
      });

      
        let step1 = await prepareBreakfast();
        showmessage(step1);

        let step2 = await washDishes();
        showmessage(step2);

        let step3 = await makeCoffee();
        showmessage(step3);

        showmessage("All tasks completed!", "success");
    }

    function Reset() 
    {
      document.getElementById("output").innerHTML = "";
    }
