useState --> when useState variable are changed, whole component is rerendered;

useEffect --> when variable inside dependency are changed then the function passed to useEffect runs again;




/*
Header
    logo
    nav-item
Body
    search
    RestaurantContainer
    RestaurantCard
        img
        name, rating, cuisine, delivery time
Footer
    copyright
    links
    address
    contact
*/

The types if Export/Import


--> Default Export/Import

export const Components;
import Components from "path";

--> Named Export/Import

export const Component;
import {component} from "path";

# REACT Hooks
(Normal JS utility function)
--> useState()
--> useEffect()



useEffect() -->
    (1) If no dependency array, useEffect is called on every render
    (2) If dependency array is empty, useEffect is called on initial render(just once)
    (3) If dependency array is [btnName], useEffect is called every time btnName is updated.

////////////////////////////////////////////////////////////////////

                                    <RENDER PHASE>
- Parent Constructor
- Parent Render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

                                    <COMMIT PHASE>

    <DOM UPDATED - IN SINGLE BATCH>
    - First ComponentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

---- MOUNTING ----

1. Constructor (dummy data)
2. Render(dummy data)
    <html (dummy data)>
3.Component Did Mount
    <API Call>
    <this.setState> -> State variable is updated

---- UPDATE ----
1. Render(API data)
    <html (new api data)>
2. Component Did Update

#Redux Toolkit
 -Install @rudexjs/toolkit and react-redex
 -Build our store
 -connect our store to our app
 -Slice (cartSllice) 
 -dispatch()
 -Selector