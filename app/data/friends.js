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


// Use for loop to traverse the questions array
for (let i = 0; i < questions.length; i++) {

    questionHead = $(`<h3><strong>Question ${(i + 1)}<strong></h3>`)
    question = $(`<h4 class='question' id="q${(i + 1)}"></h4>`).append(questions[i]);
    select = $(`<select id='q${(i + 1)}'>
                <option>Select an Option</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                </select>`);
    // Add the questions to the page 
    $('.questions').append(questionHead).append(question).append(select);
}

