# React Assignment for terribly-tiny-tales
# Task Details:
1. Create a frontend which contains a submit button on first load.
2. On clicking the Submit Button, it will fetch the contents of https://www.terriblytinytales.com/test.txt .
3. Then Parse the content and find the frequency of occurrence of each word .
4. Then on the frontend, plot a histogram/Bar Chart of the 20 most occurring words.

# Hosted Url:  
https://react-assignment-ttt.vercel.app/

# Screens: 
## Screen on First Load-
![photo_2022-11-23_15-46-19](https://user-images.githubusercontent.com/70057143/203522001-7b657857-0b82-4ef0-8ac3-89800f678c37.jpg)
## Histogram Showing Data-
![photo_2022-11-23_15-46-25](https://user-images.githubusercontent.com/70057143/203522044-94a946ef-2499-4c5d-8e4e-e1e53e26aa48.jpg)

# Components of the Code:
## App.js:
It contains the submit button and functions that is responsible of fetching the data and parsing into suitable format.
![carbon (2)](https://user-images.githubusercontent.com/70057143/203490533-006bb957-5461-439e-a486-15e315e982b1.png)
## Histogram.js:
It Uses React-Chartjs npm package to show the count of 20 most frequent words in the file.
<br/>
X-axis = top 20 words with highest occurrence
<br/>
Y-axis = how many times they occurred in the file
![carbon (3)](https://user-images.githubusercontent.com/70057143/203491433-4922946e-6682-4562-ae0a-64252077e7cf.png)

# Libraries and Plugins
1. React.js 
2. React Chart js
3. Chart js


