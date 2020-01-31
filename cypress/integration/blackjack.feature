Feature: Black Jack

    Scenario: open game hall page
        When I open game hall page
        Then I can see text 'Start Play Black Jack'
        And I can see 'Start' button
    
    Scenario: start game
        Given state 'cards are A2, A1, B2, A3'
        And server response data 'startgame'
        """
        {
            "host": {
                "cards":["A1"]
            },
            "player":{
                "cards":["A2","B2"]
            }
        }
        """
        When I start game
        Then I can see host cards '🂡'
        And I can see player cards '🂢🂲'
        And game is runing

    Scenario: show winner
        Given state 'cards are A2, A1, B2, A3'
        And server response data 'startgame'
        """
        {
            "host": {
                "cards":["A1"]
            },
            "player":{
                "cards":["A2","B2"]
            }
        }
        """
        And server response data 'closedeal'
        """
        {
            "host": {
                "cards":["A1","A3"],
                "winner":true
            },
            "player":{
                "cards":["A2","B2"],
                "winner":false
            }
        }
        """
        When I start game
        And I close deal
        Then I can see text 'winner is host'
        And I can see host cards '🂡🂣'