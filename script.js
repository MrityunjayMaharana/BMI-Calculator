$(document).ready(function(){
    $("#bmi-calc").click(function(){
        var weight = parseFloat($("#weight").val());
        var height = parseFloat($("#height").val()) / 100; // convert height to meters

        if(!isNaN(weight) && !isNaN(height) && height > 0 && weight > 0) {
            var bmi = weight / (height * height);

            // BMI conditions
            if(bmi < 18.5) {
                $("#bmi-result").html("Your BMI is: " + bmi.toFixed(2) + " (Underweight)");
            } else if ( bmi >= 18.5 && bmi < 25) {
                $("#bmi-result").html("Your BMI is: " + bmi.toFixed(2) + " (Normal)");
            } else if (bmi >= 25 && bmi < 30) {
                $("#bmi-result").html("Your BMI is: " + bmi.toFixed(2) + " (Overweight)");
            } else if (bmi >= 30 && bmi < 35) {
                $("#bmi-result").html("Your BMI is: " + bmi.toFixed(2) + " (Obesity degree : 1)");
            } else {
                $("#bmi-result").html("Your BMI is: " + bmi.toFixed(2) + " (Obesity degree : 2)");
            }
        
        } else {
            $("#bmi-result").html("Please enter valid weight and height values.");
        }
    });
});