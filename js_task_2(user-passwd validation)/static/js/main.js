$(document).ready(function(){

    var validator = {
        length: false,
        letter: false,
        capital: false,
        number: false,
        space: false,
        special: false,
        name_surname: false
    };

    var submitButton = $('#submit');
    var valid = false;

    $('input[id="username"]').keyup(function () {
        var login = $(this).val();

        if (login.match(/\s/)){
		    $("#full_name").attr("class", "valid");
		    validator.space = true;
	    }
	    else{
		    $("#full_name").attr("class", "invalid");
		    validator.space = false;
	    }

        if(login.match(/[^\s.]{2,}\s[^\s.]{2,}/)){
            $("#name_length").attr("class", "valid");
            validator.name_surname = true;
        }
	    else{
		    $("#name_length").attr("class", "invalid");
		    validator.name_surname = false;
	    }

    }).focus(function() {
        $('#login_info').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow').show();
    }).blur(function() {
        $('#login_info').hide();
    });


    $('input[id="password"]').keyup(function() {
        var password = $(this).val();

        if (password.match(/[a-zA-Z]+/)){
   		    $("#letter").attr("class", "valid");
		    validator.letter = true;
	    }
	    else{
		    $("#letter").attr("class", "invalid");
		    validator.letter = false;
	    }

        if (password.match(/[A-Z]+/) && password.match(/[a-z]+/)){
        	$("#capital").attr("class", "valid");
		    validator.capital = true;
	    }
	    else{
		    $("#capital").attr("class", "invalid");
		    validator.capital = false;
	    }

        if (password.match(/[0-9]+/)){
        	$("#number").attr("class", "valid");
		    validator.number = true;
        }
        else{
        	$("#number").attr("class", "invalid");
        	validator.number = false;
        }

        if (password.match(/.{8,}/)){
        	$("#length").attr("class", "valid");
		    validator.length = true;
        }
        else{
        	$("#length").attr("class", "invalid");
        	validator.length = false;
        }

        if (password.match(/[^\da-zA-Z\W]+/)){
        	$("#space").attr("class", "valid");
        	validator.special = true;
        }
        else{
        	$("#space").attr("class", "invalid");
        	validator.special = false;
        }

    }).focus(function() {
        $('#pswd_info').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 'slow').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });


    $('input[id="password"], input[id="username"]').keyup(function () {

        valid = Object.keys(validator).every(function(k){
		    return validator[k];
	    });

        if (valid){
            submitButton.prop('disabled', false);
            $('#pswd_info').hide();
        } else {
            submitButton.prop('disabled', true);
        }
    });


    $('.loginForm').on('submit', function(e){
            e.preventDefault();
    });


    submitButton.click(function(){
        alert('Registration completed!');
    });
});