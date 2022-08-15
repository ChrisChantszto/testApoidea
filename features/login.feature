Feature: The apoidea media web page

  Scenario Outline: As a user, I could swipe the clients board
    Given I am on the home page
    When I click on the swiper
    Then I could see different page

  Scenario Outline: As a user, I could direct to other social medias
    Given I am on the home page
    When I click on the media icons
    Then I will be redirected to corresponding social media
    
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the home page
    When I type with <username>, <email> and <content>
    Then I should see a flash message saying <message>

    Examples:
      | username | email                |content    | message                                         |
      | asdfds   | fdsafsa              |asdfdsaf   | 我們會在一個工作天內回覆你，謝謝你的查詢 !         |
      | asdfdsfd | fdsafsa@hotmail.com  |asdfdsaf   | 我們會在一個工作天內回覆你，謝謝你的查詢 !         |
