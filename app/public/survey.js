var questions = ['You enioy outside activities (ie. day at the beach, hiking, sand volleyball, taking a walk)',
    'You enioy inside activities (ie. board/card/video games, TV show/movie binging, Shopping at the Mall, galleries/museums',
    'You enioy alcoholic beverages',
    'You enioy going out for the night',
    'You enioy traveling',
    'You enioy tackling new experiences',
    'You value personal appearance',
    'You value fact based, intellectual conversation',
    'You consider yourself religious/spiritual',
    'You are SUPER excited to meet your next BFF!'
]

console.log('hello mon?')

$(document).ready(function () {


    // Use for loop to traverse the qs array
    for (let i = 0; i < questions.length; i++) {

        var questionHead = $(`<h3><strong>Question ${(i + 1)}<strong></h3>`)
        var question = $(`<h4 class='question' id="q${(i + 1)}"></h4>`).append(questions[i]);
        var select = $(`<select class='select-value'>
                <option>Select Your Answer</option>
                <option value='1'>1 (Strongly Disagree)</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5 (Strongly Agree)</option>
                </select>`);
        // Add the questions to the page 
        $('.questions').append(questionHead).append(question).append(select).append('<br><br>');
    }



    $("#submitBtn").on("click", function (event) {
        event.preventDefault();

        // Form validation
        var valid = true;

        $(":input, :select").each(function () {
            if ($(this).val() === "")
                valid = false;
        });

        if (valid) {
            var newUser = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [
                    $(".q1").val(),
                    $(".q2").val(),
                    $(".q3").val(),
                    $(".q4").val(),
                    $(".q5").val(),
                    $(".q6").val(),
                    $(".q7").val(),
                    $(".q8").val(),
                    $(".q9").val(),
                    $(".q10").val()
                ]
            };

            console.log(newUser);

            var currentURL = window.location.origin;

            // Ajax call for receiving response after POST req
            $.post(currentURL + "/api/friends", newUser).then(function (data) {
                console.log(data);
                $('#BFname').text(data.name);
                $('#BFpic').attr(data.photo);
                $('#BFmodal').modal('toggle');
            });
        } else {
            // If a required field is missing, show alert
            alert("All fields of the survey must be completed");
        }
    })

});