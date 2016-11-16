$.validator.setDefaults({
    submitHandler: function() {
//        alert("submitted!");
    }
});

// modified from - http://stackoverflow.com/questions/14347177/how-can-i-validate-that-the-max-field-is-greater-than-the-min-field
// NEED TO CLICK OUTSIDE BOX FOR ERROR MESSAGE TO GO AWAY
$.validator.addMethod('lessThanOrEqual', function(value, element, param) {
    return this.optional(element) || parseInt(value) <= parseInt($(param).val());
}, 'Invalid range');
$.validator.addMethod('greaterThanOrEqual', function(value, element, param) {
    return this.optional(element) || parseInt(value) >= parseInt($(param).val());
}, 'Invalid range');

// Does all the form checking
$().ready(function() {
    $("#myform").validate({
        rules: {
            multiplicand1: {
                required: true,
                number: true,
                min: 1,
                max: 50,
                lessThanOrEqual: '#multiplicand2'
            },
            multiplicand2: {
                required: true,
                number: true,
                min: 1,
                max: 50,
                greaterThanOrEqual: '#multiplicand1'
            },
            multiplier1: {
                required: true,
                number: true,
                min: 1,
                max: 50,
                lessThanOrEqual: '#multiplier2'
            },
            multiplier2: {
                required: true,
                number: true,
                min: 1,
                max: 50,
                greaterThanOrEqual: '#multiplier1'
            }
         },
        messages: {
            multiplicand1: {
                number: "Please enter a number",
                min: "Value must be greater than 0",
                max: "Value must be lower than 50",
                lessThanOrEqual: 'Must be less than or equal to field 2'
            },
            multiplicand2: {
                number: "Please enter a number",
                min: "Value must be greater than 0",
                max: "Value must be lower than 50",
                greaterThanOrEqual: 'Must be greater than or equal to field 1'
            },
            multiplier1: {
                number: "Please enter a number",
                min: "Value must be greater than 0",
                max: "Value must be lower than 50",
                lessThanOrEqual: 'Must be less than or equal to field 4'
            },
            multiplier2: {
                number: "Please enter a number",
                min: "Value must be greater than 0",
                max: "Value must be lower than 50",
                greaterThanOrEqual: 'Must be greater than or equal to field 3'
            }
        }
    });
});
