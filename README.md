# Multi-Axial-Voter-Participation-Analysis

Multi-Axial Analysis of Voter Participation studies the suggestion that higher income populations are more inclined to vote than lower income populations.

•	Zip code and voter information was pulled for the State of Florida. 
•	Due to the large amount of data, the Project narrowed the population pool to voters in 115 zip codes in the State of Florida. 
•	The Project’s zip codes were randomly selected by computer from a set of 983 Florida zip codes.

Datasets Used
Data was obtained from several sources utilizing API calls, data inquiries and publicly shared csvs. Data sources included: • https://api.census.gov/data/2017/acs/acs5/variables.html 
• http://www.electproject.org/ 
• https://ballotpedia.org/ 
• https://worldpopulationreview.com/states.

All information was consolidated into one master csv file and a flask app was constructed to pull the data into the Project’s visualizations from a postGres database.
The landing page for presentation of information and data visualizations was constructed utilizing HTML, javascript, D3 and Bootstrap with the main elements of the page enabled by a Bootstrap carousel and js.ui library.

For our first visualization first converted our cleaned and revised csv into geojson format. We then used D3 to load that file and its features.

We then created a tile layer using a map box api and created a for loop that assigned the city’s name, population, estimated number of people with at least a bachelor degree and registration rate for each zip code (coordinates point).

For the map we read our final csv file using D3 and assigned values to variables regarding the zip code and voter and registration rates using the “.map” function.

To create the plot we used the plotly library by creating 2 traces: one for turnout rate and the other for registration rate. We then assigned these two traces to data variable to be used when creating the plot. We had some problems laying out the zip codes on the x-axis as they were labeled in a per thousand format at the start. Consequently, we used the “.toString” function to convert them to strings. Additionally, when assigning our plot layout we assigned the type of the x-axis to “category”. We chose a dual bar chart as we think it is the ideal way to visualize the comparison among the rates.
