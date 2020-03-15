var qs = ['You enioy outside activities (ie. day at the beach, hiking, sand volleyball, taking a walk)',
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


// Use for loop to traverse the qs array
for (let i = 0; i < qs.length; i++) {

    qHead = $(`<h3><strong>q ${(i + 1)}<strong></h3>`)
    q = $(`<h4 class='q' id="q${(i + 1)}"></h4>`).append(qs[i]);
    select = $(`<select id='q${(i + 1)}'>
                <option>Select an Option</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                </select>`);
    // Add the qs to the page 
    $('.qs').append(qHead).append(q).append(select);
}

$("#submitBtn").on("click", function (event) {
    event.preventDefault();

    // Form validation
    var valid = true;

    // if ($("#name").val() === "" || $("#photo").val() === "" || $("#q1").val() === "empty" || $("#q2").val() === "empty" || $("#q3").val() === "empty" || $("#q4").val() === "empty" || $("#q5").val() === "empty" || $("#q6").val() === "empty" || $("#q7").val() === "empty" || $("#q8").val() === "empty" || $("#q9").val() === "empty" || $("#q10").val() === "empty") {
    //     valid = false;
    // }

    $(":input, :select").each(function () {
        if ($(this).val() === "")
            valid = false;
    });

    if (valid) {
        var newUser = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        console.log(newUser);

        var currentURL = window.location.origin;

        // Ajax call for receiving response after POST req
        $.post(currentURL + "/api/friends", newUser, function (data) {
            // $("#BFFName").text(data.name);
            // $("#BFFPhoto").attr("src", data.photo);
        });
    } else {
        // If a required field is missing, show alert
        alert("All fields of the survey must be completed");
    }
})