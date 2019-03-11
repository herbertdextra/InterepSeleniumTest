Feature: Check the Home page

  Background:
    Given User access the Interep Website

    @Interep
    Scenario: User check the text for option cars

      Given User clicks on Carros
      Then User views "Encontre o carro ideal para sua viagem" on screen Tex of Cars
