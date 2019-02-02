# FanpageOctopus

![Octopus](octopus.png)


## Usage

- Go to the "People and Other Pages" section of the settings of your Facebook page.
- Copy the contents of `scrap.js` to the browser developer console.
- Execute the script and wait for the results to be logged into the console.


## Note

The script uses a delay to emulate the user scroll action.
The time used to check if there are more results available might need to be adjusted.
If the time is to small then there might not be enough time to allow the page lo load the content.
In this scenario the algorithm will interpret that there is no more information to be loaded and thus it will return the available information.
