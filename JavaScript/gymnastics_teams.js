//for dolphins 
let dolp_Score1 = [96, 108, 89];
//for koalas
let koal_score1 = [88, 91, 110];
//average score for dolphins
let dolp_avg = (dolp_Score1[0] + dolp_Score1[1] + dolp_Score1[2]) / 3;
console.log(dolp_avg);
//average score for koalas
let koal_avg = (koal_score1[0] + koal_score1[1] + koal_score1[2]) / 3;
console.log(koal_avg);

    if (dolp_avg > koal_avg ) 
    {
        console.log("Dolphins win the competiton");
    } 
    else if (koal_avg> dolp_avg) 
    {
        console.log("Koalas win the competiton");
    }
    else if (koal_avg = dolp_avg) 
    {
        console.log("Draw the competiton");
    }

//Bonus 1
bonus1_dolp = (97 + 112 + 101) / 3;
console.log(bonus1_dolp);
bonus1_koal = (109 + 95 + 123) / 3;
console.log(bonus1_koal);
//Bonus 2
// bonus1_dolp = (97 + 112 + 101) / 3;
// console.log(bonus1_dolp);
// bonus1_koal = (109 + 95 + 106) / 3;
// console.log(bonus1_koal);

if (bonus1_dolp > bonus1_koal && bonus1_dolp >= 100)
{
    console.log("Dolphins win the competiton");
}

else if (bonus1_koal > bonus1_dolp && bonus1_koal >= 100)
{
    console.log("Koalas win the competiton");
}
else if (bonus1_dolp === bonus1_koal && bonus1_dolp >= 100 && bonus1_koal >= 100)
{
    console.log("Draw the competiton");
}
else
{
    console.log("No one wins the competiton");
}

