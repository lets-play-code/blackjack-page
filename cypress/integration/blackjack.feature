Feature: Black Jack

    Scenario: open game hall page
        When I open game hall page
        Then I can see text 'Start Play Black Jack'
        And I can see 'Start' button

    Scenario: start game
        Given I open game hall page
        And I click 'Start' button
        Then I can see 3 cards
