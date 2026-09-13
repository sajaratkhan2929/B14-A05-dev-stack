
# DevStack
A beautiful and responsive web application where users can explore different technologies and build their own technology stack. Users can browse technology cards, view details, and add or remove technologies from their stack.

# Technologies Used
1. React
2. TypeScript
3. Tailwind CSS
4. JavaScript
5. React Toastify
6. JSON Data

## Features
1. Explore Technologies: 
   Browse different technologies with their names, logos, and descriptions.

2. Build Your Own Stack:
   Add your favorite technologies to your personal stack and remove them whenever you want.

3. Responsive Design:
   The website works smoothly on desktop, tablet, and mobile devices.

--------------------------------------------------------------------------

### React Questions & Answers

1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML like code inside a JavaScript and React uses JSX to describe what the UI should looks like. It makes components more easier to write and understand. Besides HTML, using react with JSX it becames more easier to build a Website.

2. What is the difference between props and state?
Props are a kind of data and it passes from a parent component to a child component. They are readable only.
State is a data management system inside a component. When state changes, React updates the UI.

3. What does the useState hook do, and where did you use it in this project?
The useState hook is used to store and to update data inside a React component.
I used it for the list of technologies, the stack array of the technologies the user added, and a loading flag while the JSON data was being fetched.

4.  What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook runs side effects in a React component.
I used it to load the JSON data when the webite starts, so the technology cards can display the data from the JSON file.

5. Why does every item in a .map() list need a unique key prop?
Each item needs a unique key so React can identify it correctly. This helps React to update the list when items are added, removed, or changed.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI based on a condition.
In the "StackSidebar.tsx" , I check if "stack.length === 0"
if it's true, it shows an empty message ("Your stack is empty"), and if
not, it shows the list of added technologies instead.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using the props.
A child can send information back to the parent by calling a function which is passed through the props.