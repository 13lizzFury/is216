<?php
    header("Access-Control-Allow-Origin: *");
	
    $jokes = array(
        array(
            'category' => 'Pun',
            'type' => 'single', 
            'joke' => 'I\'m reading a book about anti-gravity. It\'s impossible to put down!'
        ),
   
        array(
            'category' => 'Programming',
            'type' => 'single',
            'joke' => 'A programmer is someone who turns coffee into code.'
        )
   );

    //get query parameter from URL
    $query = $_GET["query"];

    // lookup all jokes from array if $query is not "" 
    if($query != "") {
        foreach($jokes as $indJoke) {
            foreach($indJoke as $key => $value) {
                if($value == $query) {
                    echo $indJoke['joke'];
                }
            }
        }
    }
?>


