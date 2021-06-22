# Memory Game
This website is a memory game designed to test users' memory in a series of continuously more difficult memory tasks.

## UX
This website aims to provide a simple and fun way for users to test their memory.
The goal is to create a series of memory tasks that increase in difficulty at every level. This is achieved by increasing the length of the sequence of numbers that are to be remembered, as well as decreasing the time the sequence is displayed for.
Increasing the sequence provides extra cognitive load at each level. This means that the user must put more effort towards remembering.
A simple and clean layout was decided upon in order to maintain the focus of the website on the game and to decrease distractions for the user.

### User Story
As a user who wants to play a quick memory game:
1. I want clear instructions on how to play.
2. I want a good layout without any distractions or unecessary inclusions.
3. I want the game to get more difficult as it progresses.
4. I want a way to play again when I get to the end.

### Wireframes
These are the wireframes used to aid development of the website.
[Desktop](assets/wireframes/wireframe1.png)
[Mobile](assets/wireframes/wireframe2.png)

## Existing Features
The page is composed of a header, a main section and a footer.
The header and footer are kept very simple. The header contains only the logo which links to the page itself.
The footer contains only a brief message telling users to enjoy the page. Other information and links were left out of the footer as not to clutter it because it was considered unecessary for this website.
The main section contains:
* A welcome message.
* Instruction on how to play.
* Six memory tasks or "puzzles".
* Three possible answers for each puzzle.
* A play again button that links to the website in order to reload and refresh the page.

### Features still to implement
There are a number of features I would like to implement in the future.
These include:
* A function to shuffle the guess divs.
* Randomly generated puzzle sequences.
* Hints to give users tips on how to use mnemonics to help remember more easily.
* Different types of memory games, such as card matching games.

## Technologies used
[HTML](https://html.com/) For the structure of the website.
[CSS](https://www.w3.org/) For styling.
[Bootstrap](https://getbootstrap.com/) For enhanced style and grid layout.
[jQuery](https://jquery.com/) For javascript.

## Testing
[Validator](https://validator.w3.org/)
Checked html and css code to make sure there were no errors.

### Testing user Story
1. Are there clear instructions on how to play?
Yes, instructions are displayed prominently near the top of the page.
2. Is the layout clear without any unecessary inclusions?
Yes, there is a clear, linear layout with nothing included that does not pertain to the game.
3. Does the game get progressively more difficult?
Yes, as the user progresses through the levels, the difficulty increases.
4. Is there a way to play again?
Yes, at the end of the game there is a button that allows the user to play again, if they desire.

The jQuery was tested by intentionally creating it in a way were it did not produce the desired result at first.
To do this, it was first written to change the text, then to change the text and revert back after a delay.
After this was successful, jQuery code was included to change the color of the guess divs.