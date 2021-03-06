# React-App-Mentoring-Program

The idea is to create a single page application which will allow users to search the Netflix Roulette database.

There will be two pages: main page with search and a page with a particular film.

API

Interface:

0. Empty results state
1. Search field - enter button should works as well
2. Search filter - by default 'title' is selected, click to switch
3. Search button
4. Results count
5. Results filter - 'release date' is selected by default. Click to switch
6. Results body - All found items, without pagination
7. Item image - URL for the image you will get from the server
8. Item release date
9. Item genre
10. Item title
11. Film cover image
12. Film title
13. Film rating
14. Search button - returns user to the main page with search
15. Film duration and release year
16. Description
17. Director and cast list
18. Films by the same director

Task 1: Setting up the Environment
For this task you will need to setup a simple NodeJS server to implement server-side rendering. We recommend using Express.
Please install Webpack and setup Babel for your application. Try to make your configuration simple as for a small SPA.
You will also need to install React, Redux, React-Redux, React-Router, Jest and Redux Form.

Task 2: Create the HTML Layout with React components for both pages
You should only layout these pages using JSX. They will be used in future tasks.
Try to use all of the React composition power when performing the task: decompose components into small reusable parts.

Task 3: Create Routing for your Application
Link app states between each other with React Router
By default, a user lands on a new page with empty results state('0').
When the user performs a new search, you should redirect them to: './search/Search%20Query'
When the user lands on the page with this URL, you should perform the search andd isplay results.
When the user clicks on a film item, redirect him to: './film/Name%20Of%20Film'
On switching the search/sorting type, you should not change routes.

Task 4
Fetching and managing data with Redux
Read netflixroulette API docs: https://netflixroulette.net/api/
Make your search component perform real AJAX requests. Connect redux and store all the data in your Redux store.

Task 5 Testing
Please create unit tests for some edge cases for each of your components. Covering redux reducers with tests is a plus.

Task 6
Server side rendering
Implement server rendering in your NodeJS application.