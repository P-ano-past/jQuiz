// quiz time!

$( "document" ).ready(function(){

    const quizQnA = [
        {
            question: "1. Which of the following is a single global function defined in the jQuery library?",
            answers: {
                a: "A: jQuery()",
                b: "B: $()",
                c: "C: Queryanalysis()",
                d: "D: None of the mentioned",
            },
            correctAnswer: "A: jQuery()"
        },    
        {
            question: "2. Which jQuery method is used to hide selected elements?",
            answers: {
                a: "A: hidden()",
                b: "B: hide()",
                c: "C: visible(false)",
                d: "D: display(none)",
            },
            correctAnswer: "B: hide()"
        },    
        {
            question: "3. Look at the following jQuery selector: $(“div#intro .head”). What does it select?",
            answers: {
                a: "A: The first element with id=”head” inside any div element with class=”intro”",
                b: "B: All elements with class=”head” inside the first div element with id=”intro”",
                c: "C: All div elements with id=”intro” or class=”head”",
                d: "D: None",
            },
            correctAnswer: "C: All div elements with id=”intro” or class=”head”"
        },    
        {
            question: "4. $.foo() is equivalent to",
            answers: {
                a: "A: javascript.foo()",
                b: "B: document.foo()",
                c: "C: jQuery.foo()",
                d: "D: None of the above",
            },
            correctAnswer: "C: jQuery.foo()"
        },    
        {
            question: "5. Which built-in method returns the character at the specified index?",
            answers: {
                a: "A: characterAt()",
                b: "B: getCharAt()",
                c: "C: charAt()",
                d: "D: None of the above",
            },
            correctAnswer: "C: charAt()"
        },    
        {
            question: "6. Using ________ function, we can hold or release the execution of jQuery’s ready event.",
            answers: {
                a: "A: jQuery.holdReady()",
                b: "B: jQuery.ready()",
                c: "C: jQuery.hold()",
                d: "D: jQuery.holdready()",
            },
            correctAnswer: "B: jQuery.ready()"
        },    
        {
            question: "7. The ………. method is like offset(), except that it is a getter only and it returns element positions relative to their offset parent, rather to the document as a whole.",
            answers: {
                a: "A: width()",
                b: "B: position()",
                c: "C: offsetparent()",
                d: "D: setparent()",
            },
            correctAnswer: "B: position()"
        },    
        {
            question: "8. jQuery code to set the background color of all span elements to blue?",
            answers: {
                a: "A: $(“span”).style(“background-color”,”blue”);",
                b: "B: $(“span”).manipulate(“background-color”,”blue”);",
                c: "C: $(“span”).css(“background-color”,”blue”);",
                d: "D: $(“span”).layout(“background-color”,”blue”);",
            },
            correctAnswer: "C: $(“span”).css(“background-color”,”blue”);"
        },    
        {
            question: "9. What does the min mean?",
            answers: {
                a: "A: Minimised version",
                b: "B: Minimised parameters",
                c: "C: Miniature",
                d: "D: Minimum value",
            },
            correctAnswer: "A: Minimised version"
        },    
        {
            question: "10. Which of the following is used for parsing JSON text?",
            answers: {
                a: "A: jQuery.each()",
                b: "B: jQuery.parseJSON()",
                c: "C: jQuery.noConflict()",
                d: "D: None of the mentioned",
            },
            correctAnswer: "B: jQuery.parseJSON()"
        },    

    ];

    
    // start button production:
    function startBtn() {

        return $('<button/>', {
            text: 'Start',
            id: 'start-button',
            click: initiateQ
        });
        function initiateQ() {
            // call timer in here
            // start round 1. 
            $( "#start-button" ).hide()
        }
        setInterval(function(){document.innerHTML
        }, 60000)
    }

    $('body').append(startBtn())

    //restart button production: 
    function restartBtn() {
        //only toggle restart button if quiz is completed. 
        return $('<button/>', {
            text: 'Restart',
            id: 'restart-button',
        });
    }

    $('body').append(restartBtn())

    $('#restart-button').on("click", function(){
            let restartButton = $('#restart-button')
            location.reload()
    })

    //creates selectable buttons for answering and questions. 
    $('#start-button').on('click', function() {
            let btnCount = 0
            let containerEl = $(document.createElement('div')).css({
                padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
                borderTopColor: '#999', borderBottomColor: '#999',
                borderLeftColor: '#999', borderRightColor: '#999'  
            })    

            $(containerEl).append('<p id="q-tag">')

            for(i = 0; i < 4; i++){
            if (btnCount <= 3) {
                    
            btnCount = btnCount + 1; 
            $(containerEl).append('<input type=button class="input" id=btnAdd' + btnCount + ' ' + 'value="Text Element ' + btnCount + '" />');
                }
            $('#main').after(containerEl)
            }
            $(containerEl).append('<p id="ans-tag">')
            throwInfo()
        })   
    
        // Place all quiz related functions in here. 
    function throwInfo() {
        const qTag = $('#q-tag')
        const btn1 = $('#btnAdd1')
        const btn2 = $('#btnAdd2')
        const btn3 = $('#btnAdd3')
        const btn4 = $('#btnAdd4')
        const aTag = $('#ans-tag')
 

        

        qTag.append(quizQnA[0].question)
        btn1.val(quizQnA[0].answers.a)
        btn2.val(quizQnA[0].answers.b)
        btn3.val(quizQnA[0].answers.c)
        btn4.val(quizQnA[0].answers.d)
        btn1.on('click', function(){
            aTag.append(quizQnA[0].correctAnswer)
        })
        

        
    }

        // how to access quiz questions and answers

    // console.log(quizQnA[0].question.length)
    // console.log(quizQnA[0].answers.a)
    // console.log(quizQnA[0].correctAnswer)
    throwInfo()
});
