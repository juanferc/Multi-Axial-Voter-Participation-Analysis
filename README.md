# Multi-Axial-Voter-Participation-Analysis

What factors influence the number of people who vote?

The Multi Axial Voter Participation Analysis attempts to answer the question of whether or not there is a connection between economic status and voter registration and turnout rates.

TOPIC 
Multi-Axial Analysis of Voter Participation studies the suggestion that higher income populations are more inclined to vote than lower income populations.  

Zip code and voter information was pulled for the State of Florida.  Due to the large amount of data, the Project narrowed the population pool to voters in 115 zip codes in the State of Florida.   The Project’s zip codes were randomly selected from a set of 983 Florida zip codes. 

DATASETS to be USED:  
Data was obtained from several sources utilizing API calls, data inquiries and publicly shared csvs.  Data sources included:
•	https://api.census.gov/data/2017/acs/acs5/variables.html
•	http://www.electproject.org/
•	https://ballotpedia.org/
•	https://worldpopulationreview.com/states

All information was consolidated into a cs and a flask app was constructed to pull the data into the Project’s visualizations from a PostGres database.
