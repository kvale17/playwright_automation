@login

Feature: Login
    Scenario: Can login
        Given the user is in the login page
        When the user enters valid username "student" and password "Password123" and clicks submit
        Then the user is logged in
