# Co-op Your Pay

![Image of website on multiple devices](https://paulio11.github.io/project-2/documentation/hero-img.png)

[Link to live GitHub deployment](https://paulio11.github.io/project-2/)

## Contents 

1. [Introduction](https://github.com/paulio11/project-2#introduction)
2. [The User Experience](https://github.com/paulio11/project-2#the-user-experience)
    1. [User Goals](https://github.com/paulio11/project-2#user-goals)
3. [Development Planning](https://github.com/paulio11/project-2#development-planning)
    1. [Strategy](https://github.com/paulio11/project-2#strategy)
    2. [Site Map](https://github.com/paulio11/project-2#site-map)
    3. [Wireframes](https://github.com/paulio11/project-2#wireframe)
4. [Design](https://github.com/paulio11/project-2#design)
    1. [Color Scheme](https://github.com/paulio11/project-2#color-scheme)
    2. [Color Palette](https://github.com/paulio11/project-2#color-palette)
    3. [Typography](https://github.com/paulio11/project-2#typography)
    4. [Images](https://github.com/paulio11/project-2#images)
    5. [Lightweight Design](https://github.com/paulio11/project-2#lightweight-design)
5.  [Features](https://github.com/paulio11/project-2#features)
    1. [Unimplemented Features](https://github.com/paulio11/project-2#unimplemented-features)
6. [Bugs and Other Development Issues](https://github.com/paulio11/project-2#unimplemented-features)
7. [Technologies](https://github.com/paulio11/project-2#technologies)
    1. [Main Languages Used](https://github.com/paulio11/project-2#main-languages-used)
    2. [Other](https://github.com/paulio11/project-2#other)
8. [Testing](https://github.com/paulio11/project-2#testing)
9. [Deployment](https://github.com/paulio11/project-2#deployment)
    1. [Download Code](https://github.com/paulio11/project-2#download-code)
    2. [GitHub Pages Deployment Procedure](https://github.com/paulio11/project-2#github-pages-deployment-procedure)
10. [Credits and Acknowledgements](https://github.com/paulio11/project-2#credits-and-acknowledgements)
    1. [Text](https://github.com/paulio11/project-2#text)
    2. [Images](https://github.com/paulio11/project-2#images-1)
    3. [Acknowledgements](https://github.com/paulio11/project-2#acknowledgements)

## Introduction
This website serves as a tool for employees of The Co-op - where a user can find help understanding their pay, calculating their pay, and solving any potential issues with their income.

I often hear a problem from many employees: the information they require is scattered over too many services and sources. Co-op Your Pay brings the related information into one interactive, mobile-friendly destination.

This project is in no way associated with The Co-op. Therefore, it should not be used as a definitive source of information or to calculate pay reliably.

Co-op Your Pay is my second milestone project required to complete my Diploma in Full Stack Software Development at The Code Institute. This project required me to showcase my newly learned JavaScript skills paired with HTML and CSS to create something interactive, valuable to the end user, and responsive.

[Back to top 🔺](#)

## The User Experience
The ideal user for this website is:
- A new co-op employee.
- A current employee.

### User Goals
**New employee goals:**
- As a new employee, I want to quickly navigate to what I need.
- I want the information to be clear, relevant and accurate.

**Current employee goals:**
- As a current employee, I want help with the problems I have with my pay.
- I want to know when payday is.
- I want help with keeping track and calculating my pay.

[Back to top 🔺](#)

## Development Planning
To create an interactive website that allows users to learn more about their pay and help them understand and calculate what they will receive.

### Strategy
The strategy will include all the user needs and my objectives. The website will target the following audience:

**Roles:**
- New employees.
- Current employees.

**Personality:**
- Employees seeking further information.
- Curious forward-thinking employees.
- Employees who track and value pay.

The website needs to enable users to:
- Find out about payday.
- Learn more about their payslip.
- Understand what the different deductions and payments mean.
- Test their knowledge.
- Help calculate their pay.

Taking the above into account, I created this chart to show what is essential and what is actually viable.

| Feature | Importance | Viability | Notes |
| ----------- | ----------- | ----------- | ----------- |
| Payday Calculator | 5 | 5 | Ranked high in importance as this would be the necessary interactive element of the website. |
| Deductions and paymenents explaination | 4 | 5 | Easy to add information - plain text. |
| Payslip information | 3 | 5 | Easy to add information - plain text. |
| User Quiz | 2 | 2 | Futher interactivity - more challenging to implement. |
| Payday Countdown | 1 | 3 | Extended javascript fuctionality.

### Site Map
With the information above, I came up with the website hierarchical structure. The site map below shows how employees would navigate around the website.

![Site map](https://paulio11.github.io/project-2/documentation/site-map.png)

### Wireframes
[Balsamiq for Desktop](https://balsamiq.com/wireframes/) was used ahead of development to plan the basic skeleton of all pages. You can download my wireframes file [here](https://paulio11.github.io/project-2/documentation/wireframe.bmpr).

![Website wireframes](https://paulio11.github.io/project-2/documentation/wireframe.jpg)

[Back to top 🔺](#)

## Design

### Color Scheme
The site uses a restrained and on-brand colour scheme. The design is professional and fits with existing Co-op employee websites. The idea is that one day it could be a part of it. I am demonstrating my ability to create a potential and seamless addition to what is currently available to employees. The few colours chosen are featured throughout the entire site, from the home page to each page after that - providing a cohesive experience for the user.

#### Color Palette
![Color Palette](https://paulio11.github.io/project-2/documentation/color-palette.png)

### Typography
Fonts are imported from [Google Fonts](https://fonts.google.com/). The font used for all elements is [Roboto](https://fonts.google.com/specimen/Roboto). Roboto is a clear, versatile font. Simply increasing the font-weight creates enough contrast between titles and body text.

### Images
A single image is used - the Co-op logo, shown on the home page and in the header of every other page.

### Lightweight Design
The whole site is minimal and lightweight. A single font import keeps the required resources low. A single image ensures the combined filesizes remain small. Together they will enable more users and devices to use the website, even on a mobile connection.

[Back to top 🔺](#)

## Features
The Calculator, Understand, Problems, Quiz, and about pages have a consistent style. They are built from the ground up to be simple and responsive. Viewable on all screen sizes with a `min-width` of 300px.

These pages contain the following common features:

**Header**
- An area at the top of each page containing the logo, a username and a button to open the navigation menu.
- The icons for the user and menu are from [Font Awesome](https://fontawesome.com/).
- Within the header, if the user clicks on "Hello Employee" a JavaScript prompt appears asking for the user's name. This will save the input in local storage and display on each future page visit. Just a little easter egg - local storage fun!

**Sidebar**
- Clicking the menu button in the header will open the navigation menu. Sliding in from the right of the screen using css translation. The button for the menu and the menu’s close button are controlled by javascript.
- Links to all pages on the website. Communicated to the user by a `:hover` effect that changes the `background-colour` and the cursor to pointer.
- The JavaScript used to make this work can be found in [sidebar.js](https://github.com/paulio11/project-2/blob/main/assets/js/sidebar.js).

**The Page Title**
- A `<h1>` element.

**Style**
- All fonts, margins, padding and colours match throughout all pages.

**Footer**
- A footer at the bottom of each page containing the site title and author.
- Placed at the bottom of the viewport using `display: flex;`, `flex-direction: column;`, and `flex-grow: 1;` on a container `<div>` that holds the page content above the `<footer>`.

Neither the `<header>` nor `<footer>` are fixed to the top/bottom of the screen, as I believed it would have taken up too much screen space - especially on a smaller device. To remedy the navigation issues caused on the taller home page, I added a simple javascript scroll back to the top button. The javascript code for this is in the sidebar.js file, as it is loaded on every page.

On pages with contents (understand.html and problems.html) the css rule `scroll-behavior: smooth;` allows the user to better understand where they are navigating to.

_**[Home Page](https://paulio11.github.io/project-2)**_

A simple landing page is all that is needed for a visiting user: the Co-op logo, website title, and a small sentence describing the purpose of the website. Below is the main navigation menu, a copy of what is in the sidebar on other pages.

_**[Payday Calculator](https://paulio11.github.io/project-2/calculator.html)**_

The main interactive part of the whole website. This page consists of:
- User instructions.
- A link to fill the form with data - useful for testing. This would not be there in a final shipping product. The link calls the `fillForm()` function in [calculator.js](https://github.com/paulio11/project-2/blob/main/assets/js/calculator.js).
- Three user input sections:
    - **About You** - questions about the employee.
    - **About This Period** - questions about the current pay period. The dropdown box populates the calendar with the correct dates. An event listener calls the `populateCalendar()` function whenever this dropdown menu value is changed by the user.
    - **Hours You Have Worked** - Four tables, one for each week, where the user can input how many hours they have worked this period. Each week is calculated separately because of how overtime is computed.
- A reset button which clears the form.
- A calculate pay button calls the `handeSubmit()` functions. This shows the results below.
- Calculator Results. Shown once the user fills out the form and submits. This contains several `<span>` elements that are filled by calculator.js.

_**[Understand Your Pay](https://paulio11.github.io/project-2/understand.html)**_ *and* _**[Problems With Your Pay](https://paulio11.github.io/project-2/problems.html)**_

Both the *Understand Your Pay* and *Problems With Your Pay* pages start with page contents. An unordered list with a left border to connect them stylistically. Every list item links to a section within each page.

Below is a simple display of information. Each bit of information or frequently asked question is in its own `<div>` container so it can be navigated to via the page contents and styled to stand apart from each other.

At the top of the *Understand Your Pay* page is a countdown to the next payday. This is is the output of an if statement comparing the current date with a list of paydays from an array within [payday.js](https://github.com/paulio11/project-2/blob/main/assets/js/payday.js).

_**[Quiz](https://paulio11.github.io/project2/quiz.html)**_

Most of the content on this page is generated by JavaScript in [quiz.js](https://github.com/paulio11/project-2/blob/main/assets/js/quiz.js) and [questions.js](https://github.com/paulio11/project-2/blob/main/assets/js/questions.js).

The instruction box uses the same styles as the information on the *Understand Your Pay* and *Problems With Your Pay* pages. All content below is created using `document.createElement` within the javascript code. 

The innerText of the created elements comes from reading the value of the (question) `number` variable to get the question text. A `for` loop creates multiple elements with `click` event listeners to show the multiple choice answers. Styles are applied when the choices are created, giving them a `:hover` style. When an option is clicked, the hover style is removed and then the relevant style is applied, whether the selected answer was correct or incorrect. Additionally, the click event displays a continue button, either functioning as the *Next Question*, or *Check My Score* buttons based on the progress through the quiz defined by `questions.length`. This enables more questions to be added beyond what is currently available, and the quiz will still function correctly.

_**[About](https://paulio11.github.io/project-2/about.html)**_

Using the same `<div class="box">` for the information presented in understand.html and problems.html to display a simple about this website box.

_**[Error 404](https://paulio11.github.io/project-2/404.html)**_ *and* _**[Error 500](https://paulio11.github.io/project-2/500.html)**_

The error pages are a copy of the design used for the home page. Containing the website logo, title, an explanation of the error and a Go Back button. The go back button jumps the user 1 page back in their history using JavaScript. The left arrow is from [Font Awesome](https://fontawesome.com/).

### Unimplemented Features
There were just a few things I would have liked to have added.

- **A more comprehensive source of information for employees** - I decided this wouldn’t be an effective use of my time, as it would just be more basic HTML and not display the required interactivity. Hopefully, you can see how you could quickly expand a website like this.
- **Calculator Improvemenets** - An easier way for employees to use the calculator would be to use what they already know, i.e. the shift *Start Time* and *End Time*. This way, a user wouldn’t have to calculate the length of the shift and instead just input what time they started and finished work. Ultimately the javascript calculation would remain the same but would have required an extra step at the start - working out the difference in the two date (time) values and using that instead of a simple hours value.
- **Payslip Information** - Another idea I wanted to implement was to explain the payslip in more detail - to expand the information available to the user further. A page dedicated to the payslip layout where a clickable, interactive example is shown. Clicking elements of the payslip would reveal more detailed information. I passed on this idea early on as it would have proven to be a relatively large amount of work to make something look like this clearly viewable on a smaller screen.

[Back to top 🔺](#)

## Bugs and Other Development Issues

[Back to top 🔺](#)

## Technologies

### Main Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
    - You can see my stylesheet [here](https://github.com/paulio11/project-2/blob/main/assets/css/style.css).
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - You can see all my JavaScript files [here](https://github.com/paulio11/project-2/tree/main/assets/js).

### Other
- [Google Fonts](https://fonts.google.com/)
    - Fonts were imported from Google Fonts, see Typography section of readme above.
- [Font Awesome](https://fontawesome.com/)
    - Social and other icons used in my project taken from Font Awesome.
- [GitHub](https://github.com/)
    - Used to store files, changes, and host the page.
- [GitPod](https://www.gitpod.io/)
    - Used to write, comment code, and commit to GitHub.
- [Balsamiq](https://balsamiq.com/)
    - Used to plan the layout of the pages before development.
- [Code Institute Student Template](https://github.com/Code-Institute-Org/gitpod-full-template)
    - Used as the basis of the project, helped to set up GitPod workspace.
- [Affinity Photo](https://affinity.serif.com/en-gb/photo/)
    - Used to edit images, resizing and optimizing them for use on a website.
- [Am I Responsive](https://ui.dev/amiresponsive)
    - Used to create the hero image at the top of this readme.
- [Free Formatter](https://www.freeformatter.com/html-formatter.html)
    - Recommended by my mentor and used to format my code before project submission.
- [W3C Markup Validation Service](https://validator.w3.org)
    - Used to validate HTML code.
- [Jigsaw CSS Validation Service](https://jigsaw.w3.org/css-validator/)
    - Used to validate CSS code.
- [JSHint JavaScript Code Quality Tool](https://jshint.com)
    - Used to validated JavaScript code.

[Back to top 🔺](#)

## Testing

[Back to top 🔺](#)

## Deployment

Project written and developed in GitPod, which was then used to commit changes and push to GitHub. The site is hosted using GitHub Pages. 

### Download Code

To download a copy of this project and all required assets click the green **Code** button above the file tree at the top. Then **Download ZIP**. Alternatively click [here](https://github.com/paulio11/project-2/archive/refs/heads/main.zip).

### GitHub Pages Deployment Procedure

To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate this [GitHub Repository](https://github.com/paulio11/project-2 "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Scroll down the Settings page to the "Pages" section.
5. Under "Source" click the drop-down menu labelled "None" and select "Main".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Scroll back down to the "Pages" section to retrieve the deployed link.

**Note:** when this website is hosted at a different URL - the head link to the stylesheet and favicon will need to be manually changed to correctly style the error pages 404.html and 500.html.

[Back to top 🔺](#)

## Credits and Acknowledgements 

### Text
- Employee paydays taken from [Co-op Colleagues - See next paydays](https://colleagues.coop.co.uk/see-next-pay-days).
- Problems with your pay text taken from [Co-op Colleagues - Problems with your pay](https://colleagues.coop.co.uk/problems-with-your-pay).
- Understand your pay text taken from [Co-op Colleagues - Understand your payslip and pay deductions](https://colleagues.coop.co.uk/understand-your-payslip-and-pay-deductions).

### Images
- Co-op logo taken from [Co-op Assets](https://www.co-operative.coop/media/assets).

### Acknowledgements

Thanks to my mentor [Oluwaseun Owonikoko](https://github.com/seunkoko) and the students from class June 2022 for their help and suggestions throughout the project.

I would also like to thank fellow CI student [Rebecca Rayner](https://github.com/Irishbecky91). Her excellent project readme was the basis of my own readme's structure.

[Back to top 🔺](#)