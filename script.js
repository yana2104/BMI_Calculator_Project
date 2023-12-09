function calculateBMI() {
    // Get values from input fields
    var weight = parseFloat(document.getElementById('weight').value);
    var heightValue = parseFloat(document.getElementById('heightValue').value);

    // Check if the values are valid numbers
    if (isNaN(weight) || isNaN(heightValue) || weight <= 0 || heightValue <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    // Convert weight to kg if in lbs
    if (document.getElementById('weightUnit').value === 'lbs') {
        weight = weight * 0.453592; // 1 lb = 0.453592 kg
    }

    // Convert height to cm if in feet
    if (document.getElementById('heightUnit').value === 'feet') {
        var feet = heightValue;
        var inches = parseFloat(document.getElementById('inches').value) || 0;

        var heightInCm = feet * 30.48 + inches * 2.54; // 1 foot = 30.48 cm, 1 inch = 2.54 cm
    } else {
        var heightInCm = heightValue;
    }

    // Calculate BMI
    var bmi = weight / ((heightInCm / 100) * (heightInCm / 100));

    // Determine BMI category
    var category = getBMICategory(bmi);

    // Display the result
    document.getElementById('result').innerHTML = `Your BMI is: ${bmi.toFixed(2)} (${category}).`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal Weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

// Show/hide inches input based on height unit selection
document.getElementById('heightUnit').addEventListener('change', function() {
    var inchesInput = document.getElementById('inches');
    inchesInput.style.display = this.value === 'feet' ? 'inline-block' : 'none';
});
