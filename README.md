# Nevada_Caucus_2020_Sentiment_Analysis
## Denver University Data Analytics Boot Camp - Final Project
## Students: David Born, Sam Ewing, Pranav Jayanth, Llorrvic Valles


## Project Summary

This project utilizes Machine Learning to perform sentiment analysis on tweets relating to candidates of the 2020 Nevada Presidential Caucus. The tweets used in this analysis were collected at three points in time: 
1) *before* the caucus and *before* the Democratic candidate debate leading up to the caucus;
2) *before* the caucus, but *after* the Democratic candidate debate;
3) *after* the caucus and *after* the debate.
The analysis provides visuals to compare the sentiment for each candidate across these three time periods.


## To Access Our Project Web Site

Click on this link https://borno-co.github.io/Nevada_Caucus_2020_Sentiment_Analysis/ 

![visuals](Images/Nevada_Caucus_Visuals.png?raw=true "Caucus Visuals")

Our deployment is comprised of three web pages:

### Dashboard (home page)
This page displays the % positive, negative, and neutral for a candidate and time period selected from a drop down box. Five samples each of postive and negative tweets are shown based on the dropdown selection.

### Visuals (page 2)
This page displays interactive chart visuals enbabling the user to explore tweet-based sentiment by candidate over three time periods before and after the caucus. Clicking on a "Buzz" bubble produces a bar chart (labeled "Momentum") showing how net sentiment changes Pre- and Post- Debate/Caucus for candidate selected. Clicking on the "Sentiment Breakdown" horizontal bar chart generates tweets to scroll through and explore for the selected candidate and sentiment. All data can be filtered by "Tweeter Type" and "Time Period".

### Predictor (page 3)
This page allows users to test our model by inputting a tweet they see on Twitter in a form, or by writing their own "tweet" mockup. Upon submitting the value of this form, the API call activates our model, which returns a sentiment prediction of whether the "tweet" is positive or negative.

## Data Sources
Twitter


## Technologies and Special Libraries
GetOldTweets3 which is a Python Library to retrieve old tweets from Tritter, Excel, NLTK (Natural Language Tool Kit) which is a NLP (Neuro-Linguistic Programming) platform for Python, PostgreSQL, SQL Alchemy, Flask, Heroku, Javascript, D3, HTML, CSS, Bootstrap, Tableau

## Data Transformation and Methodology

### Sourcing Data
We chose to use the GetOldTweets3 Python Library to retrieve our data, because of its search versatility and it's ability to retrieve tweets from any time period (although the library offers the ability to filter results by time). We retrieved tweets from three time periods:
* Pre-Caucus and Pre-Debate - tweets posted prior to 6pm February 19, 2020
* Pre-Caucus but Post-Debate - tweets posted from 6pm February 19, 2020 to 4pm February 22, 2020
* Post-Caucus and Post-Debate - tweets posted after 4pm February 22, 2020

### Machine Learning
For this project, we decided to use Machine Learning concepts to analyze sentiment on Twitter. Our first challenge was to decide how to process the tweets. To accomplish this, we chose to use Natural Language Processing (NLP) in order to break down each tweet to analyze it.

We decided to use the Natural Language Tool-kit, or NLTK, which is purpose-built NLP library for Python. The cleanup process for a tweet before creating an ML model may best be explained by using some examples – imagine the following tweet:

* “It is a warm and #sunny here in Denver, Colorado! RT https//www.denverweather.com ”
The first thing we have to do is tokenize the tweet – this means that we break down the sentence into individual words:

* [it],[is].[a],[warm],[and][#sunny][day]….and so on.
The next step is to remove things like hashtags and other items like retweets and hyperlinks to only get the English words.

Finally, we create a "bag of words" where each instance of the word is given an equivalent weight. The concept behind "bag of words" is that we take each word, strip it of context (ie: it’s a grab-bag) and then we characterize/weight it.

After creating our "bag of words", we can then create a testing / training data set. However, in order to create our training sample, we manually labeled each of 1,000 tweets as positive or negative (this involved reading individual tweets and categorizing them according to what we perceived the overall sentiment of the tweet was). 

Finally, we used a Naïve Bayes classifier to classify the text as positive or negative, based on each word's Bag of Words values. We then ran the entire file with the predictor to get all of our results.

### 3) Data Cleaning and Enhancements
The tweet sourcing produced four separate Comma-Separated Value (.csv) files with overlapping time frames and, therefore, duplicated tweets. The cleaning deleted duplicate tweets from the same username, timestamp, and "to recipient". Tweets with blank text were deleted (less than 200 records). The timestamp column was re-formatted to: yyyy-mm-dd hh:mm:ss. The hours are in 24-hour time (AKA military time). Quote marks were removed, so as not to interfere with JavaScript coding controlling front-end display.

Over the sampled time frame (February 9-25, 2020), a frequency count by username was used to identify "tweeter types" for reporting filters:

* Heavy (over 25 tweets)
* Moderate (10-25 tweets)
* Light (less than 10 tweets)

Suspected "bots" and "trolls" were further split out from the heavy tweeter group by manual inspection of their tweets as follows.

* "Bots" are typically tweeters sending hundreds of tweets with the same text.
* "Trolls" are characterized by tweeters that send hundreds of tweets with different text, but the tweets are largely malicious in nature.

### 4) PostgreSQL Database
After cleaning, the four source files containing tweet scrapes were manually combined into one Comma-Separated Value (.csv) file before loading into Postgres. The source file was loaded unchanged into a single Postgres table and then distinct records were inserted into a second table to ensure that there were no duplicates.

A series of process queries were then executed to stage the data for the API and dashboard reporting:

* A date field was created in yyyy-mm-dd format.
* A time_period field was created to assign the tweets by chronology to important caucus milestones as follows (also see diagram in the Data Retrieval section).
** Pre-Caucus and Pre-Debate: tweets from 2020-02-09 23:33:00 to before 2020-02-19 18:00:00
** Pre-Caucus but Post-Debate: tweets from 2020-02-19 18:00:00 to before 2020-02-22 16:00:00
** Post-Caucus and Post-Debate: tweets from 2020-02-22 16:00:00 to 2020-02-25 01:23:00
*A random integer between 1 and 20 was assigned to each record to facilitate easy sampling.
** Because Heroku (the service hosting our API) has a 10,000 record limit, we anticipated needing to use some form of sampling to produce tweet text examples for the API. Each integer represents roughly 5% of the data.
** Note: The dashboard reporting our visualizations on the Visuals page uses 100% of the data without sampling, as it is hosted on Tableau Public.
* Queries utilizing Postgres string wildcards (e.g., %bernie%) were utilized to search tweet text for the occurrence of candidate names. For the search, the text was transformed to lower case, thereby eliminating variations in capitalization. Where a candidate's name was detected, a separate flag field for that candidate was marked.
* A final staging table was loaded with tweet records that were flagged for each candidate. Be aware that a single tweet can have multiple candidates mentioned. In that case, tweet records were loaded for each candidate mentioned, thereby intentionally creating duplicate tweets in the final staging table. This enables dashboard reporting of "tweet mentions" by candidate. If a candidate is mentioned more than once in a single tweet, that would count as one (1) tweet mention for that candidate. But if two or more candidates are mentioned in a single tweet, then that would count as one mention for each of those candidates.
After staging, separate tables were populated by positive and negative tweet samples for final exporting for the API and Tableau dashboard. In addition, a summary table was created using a GROUP BY query that stored a count of candidate, sentiment, time period, date, and tweeter type. The summary table drives all the visuals on the Tableau dashboard except for the tweet samples.

### 5) Flask API
With our data stored in a PostgreSQL Database, the next step was to develop an Application Program Interface (API) that could retrieve our data from the database for use on the front-end, as well as a platform to provide tools necessary to our website's functionality. To create this API, we utilized Python's Flask library.

The resulting Flask application drives two main APIs:

* Candidate API
This API is automatically called by our Dashboard page each time it loads.
* Tweet Predictor API
This API is only called upon receiving an input value entered into the text field on our Predictor page. As long there is text in the text field, the API will be called when the "Predict Sentiment" button is clicked. If there is no input, the API will not be called.
The Candidate API was created using data from our PostgreSQL database. It retrieves the data and then converts it into a JavaScript Object Notation (JSON) format using the Python Pandas library.

The Predictor API was created using a "pickled" (serialized) version of the initial Machine Learning model. When provided an input, the API will load the model and pass the input string into it. After performing it's analysis, the model will output a series of probability values about the sentiment of the input string. These values are returned to the website for display.

The Python Flask app that creates our API is hosted using Heroku. Because Heroku has a 10,000 record limit for data, we utilize a set of random numbers to select manageable increments of our data. For more information about how this selection process occurs, please refer to the previous section (Part 4 - PostgreSQL Database).

### 6) Displaying Our Data
**Dashboard**
As the webpage loads, a call is made to the API that was built in the previous step. Once the data is retrieved from the API, it is organized into a format that can easily be applied to the various dynamic website elements.

The d3.js JavaScript library is utilized to select labeled tags throughout the website. These selections are used as containers for our data to be dropped into. When the website is updated (either through initialization when the site is first loaded, or when a new selection is made from either of the two drop-down menus), each of these selections are called and perform the following actions:

Clear any value that's already present by removing it's HTML element
Append a new HTML element to replace the old one
Apply an HTML ID to the new element in order to apply the correct styling
Insert the data value in the new element created
This process is applied to every piece of dynamic content on the webpage - none of the elements pertaining to displaying our data is permanently-coded into our site.


**Visuals**
The visuals displayed on this webpage are created using a Tableau dashboard that is embedded into the page. Typically associated with Business Intelligence (BI), Tableau is a powerful visualization tool that enables the creation of complex, fully-interactive visualizations in a user-friendly manner. The only JavaScript being utilized on this page controls the dimensions of the dashboard on the page.

Users can gain deeper insights into the data by clicking on each chart (particularly the bubble chart and the stacked-bar chart, which display sentiment values over time and a set of tweets respectively). A drop-down on the Tableau dashboard also allows users to filter content on time-point, similar to the Dashboard page.


**Predictor**
The Predictor page allows users to test our model for themselves. The page features an input form where users can either copy a tweet they see on Twitter, or write their own "tweet" mockup. Upon submitting the value of this form, the website calls our API requesting data for the input value. The API call activates our model, which analyzes the value entered into this field. When the model completes it's analysis, it returns a sentiment prediction of whether the "tweet" is a positive or negative one. A table displaying the sentiment of the most heavily-weighted words discovered by our model is also dynamically generated, along with a line graph that shows how the sentiment value of these words compares to one another.

Like the Dashboard page, the page is designed to be dynamically populated with data upon receiving a new input using the d3.js JavaScript library. In regards to how the data is displayed, there are no hard-coded elements on this page.

