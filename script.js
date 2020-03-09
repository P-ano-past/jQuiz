// quiz time!

$( "document" ).ready(function(){

    const quizQnA = [
        {
            question: "1. Which of the following is a single global function defined in the jQuery library?",
            answers: {
                a: "jQuery()",
                b: "$()",
                c: "Queryanalysis()",
                d: "None of the mentioned",
            },
            correctAnswer: "a"
        },    
        {
            question: "2. Which jQuery method is used to hide selected elements?",
            answers: {
                a: "hidden()",
                b: "hide()",
                c: "visible(false)",
                d: "display(none)",
            },
            correctAnswer: "b"
        },    
        {
            question: "3. Look at the following jQuery selector: $(“div#intro .head”). What does it select?",
            answers: {
                a: "The first element with id=”head” inside any div element with class=”intro”",
                b: "All elements with class=”head” inside the first div element with id=”intro”",
                c: "All div elements with id=”intro” or class=”head”",
                d: "None",
            },
            correctAnswer: "c"
        },    
        {
            question: "4. $.foo() is equivalent to",
            answers: {
                a: "javascript.foo()",
                b: "document.foo()",
                c: "jQuery.foo()",
                d: "None of the above",
            },
            correctAnswer: "c"
        },    
        {
            question: "5. Which built-in method returns the character at the specified index?",
            answers: {
                a: "characterAt()",
                b: "getCharAt()",
                c: "charAt()",
                d: "None of the above",
            },
            correctAnswer: "c"
        },    
        {
            question: "6. Using ________ function, we can hold or release the execution of jQuery’s ready event.",
            answers: {
                a: "jQuery.holdReady()",
                b: "jQuery.ready()",
                c: "jQuery.hold()",
                d: "jQuery.holdready()",
            },
            correctAnswer: ""
        },    
        {
            question: "7. The ………. method is like offset(), except that it is a getter only and it returns element positions relative to their offset parent, rather to the document as a whole.",
            answers: {
                a: "width()",
                b: "position()",
                c: "offsetparent()",
                d: "setparent()",
            },
            correctAnswer: "b"
        },    
        {
            question: "8. jQuery code to set the background color of all span elements to blue?",
            answers: {
                a: "$(“span”).style(“background-color”,”blue”);",
                b: "$(“span”).manipulate(“background-color”,”blue”);",
                c: "$(“span”).css(“background-color”,”blue”);",
                d: "$(“span”).layout(“background-color”,”blue”);",
            },
            correctAnswer: ""
        },    
        {
            question: "9. What does the min mean?",
            answers: {
                a: "Minimised version",
                b: "Minimised parameters",
                c: "Miniature",
                d: "Minimum value",
            },
            correctAnswer: "a"
        },    
        {
            question: "10. Which of the following is used for parsing JSON text?",
            answers: {
                a: "jQuery.each()",
                b: "jQuery.parseJSON()",
                c: "jQuery.noConflict()",
                d: "None of the mentioned",
            },
            correctAnswer: "b"
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
            throwInfo()
        })   
    
        // Place all quiz related functions in here. 
    function throwInfo() {
        const qTag = $( '#q-tag' );
        const btn1 = $( '#btnAdd1' );
        const btn2 = $( '#btnAdd2' );
        const btn3 = $( '#btnAdd3' );
        const btn4 = $( '#btnAdd4' );
        const correctAns = "";
        
        for(i = 0; i < quizQnA.length; i++) {
            console.log(quizQnA[i])
        }
        
        qTag.append( document.createTextNode( quizQnA[0].question ) )
        btn1.val( quizQnA[0].answers.a ) 
        btn2.val( quizQnA[0].answers.b ) 
        btn3.val( quizQnA[0].answers.c ) 
        btn4.val( quizQnA[0].answers.d ) 

        


       
    }

        // how to access quiz questions and answers

    // console.log(quizQnA[0].question)
    console.log(quizQnA[0].answers.a )
    // console.log(quizQnA[0].correctAnswer)
});
