// Select the submission button
var submit_button = d3.select("#tweet-submit-button");

// Apply an On-Click function to the button to retrieve the input value, return the text and fire the sentiment analysis model
submit_button.on("click", tweet_analyzer)
    
function tweet_analyzer() {
    
    
    // Select the text predictor input element and retrieve the value
    var text_predictor_input = d3.select("#text-form-input");
    var inputValue = text_predictor_input.property("value");

   
    

    var full_tweet_output_field = d3.select("#text-input-output-field")
    var sentiment_prediction_field = d3.select("#sentiment-prediction-output")
    var predicted_positive_percent = d3.select("#predicted-positive-percent-tag")
    var predicted_negative_percent = d3.select("#predicted-negative-percent-tag")
    var predicted_neutral_percent = d3.select("#predicted-general-percent-tag")

    
    // Check for input value before proceeding
    // If input value is blank, return a message
    if (inputValue!== ``) {

        // Packaging the input text for the API
        var packaged_input_text= `"${inputValue}"`
        
        // API Base URL that the data will be sent to
        var model_api_url = "https://twitter-sentiment-app-du.herokuapp.com/api/v1/tweet_predictor/"
        
        
        // Build the full URL by appending the packaged text to the base URL
        var tweet_api_destination = model_api_url + packaged_input_text

        
        // Make a JSON call to the API to retrieve the data
        d3.json(tweet_api_destination).then(function(retrieved_tweet_data) { 

            

            console.log("Input value received: ", packaged_input_text);
            

            var data_unpack_layer_one= retrieved_tweet_data
            var {Sentiment: sentiment_data} = data_unpack_layer_one

            var data_unpack_layer_two = sentiment_data
            var {
                Tweet: returned_tweet_text, 
                Overall_Sentiment: returned_tweet_overall,
                Negative_Percent: returned_tweet_negative_percent,
                Positive_Percent: returned_tweet_positive_percent,
                General_Percent: returned_tweet_general_percent
            } = data_unpack_layer_two

            

            // Wipe any values already displayed
            full_tweet_output_field.selectAll('p').remove();
            predicted_positive_percent.selectAll('p').remove();
            predicted_negative_percent.selectAll('p').remove();
            predicted_neutral_percent.selectAll('p').remove();
            
            // Display the text that the user wants analyzed in the output field
            full_tweet_output_field
                .append('p')
                .attr('id', 'tweet-output-format')
                .text(returned_tweet_text);

            // Display the model's prediction for the input value

            sentiment_prediction_field.selectAll('p').remove();

            if (returned_tweet_overall === "pos") {
                sentiment_prediction_field
                    .append('p')
                    .attr('id', 'sentiment-prediction-positive')
                    .text("POSITIVE")
            } else if (returned_tweet_overall === "neg") {
                sentiment_prediction_field
                    .append('p')
                    .attr('id', 'sentiment-prediction-negative')
                    .text("NEGATIVE")
            } else {
                sentiment_prediction_field
                    .append('p')
                    .attr('id', 'sentiment-prediction-neutral')
                    .text("NEUTRAL")
            }

            predicted_positive_percent
                .append('p')
                .attr('id', 'predicted-percent-pos')
                .text(`${returned_tweet_positive_percent}%`)

            predicted_negative_percent
                .append('p')
                .attr('id', 'predicted-percent-neg')
                .text(`${returned_tweet_negative_percent}%`)

            predicted_neutral_percent 
                .append('p')
                .attr('id', 'predicted-general-percent')
                .text(`${returned_tweet_general_percent}%`)
        })
        

        


    // The Else clause of this if-statement handles situations when there is no value in the input field
    } else {
        

        // Wipe any values already displayed
        sentiment_prediction_field.selectAll('p').remove();
        full_tweet_output_field.selectAll('p').remove();
        predicted_positive_percent.selectAll('p').remove();
        predicted_negative_percent.selectAll('p').remove();
        predicted_neutral_percent.selectAll('p').remove();
        

        // Insert a message in the output field requesting that the user inputs a value
        full_tweet_output_field
            .append('p')
            .attr('id', 'tweet-output-format-need-text')
            .text(`Please input a value.`);

        sentiment_prediction_field
            .append('p')
            .attr('id', 'sentiment-prediction-need-text')
            .text("-")

        predicted_positive_percent
            .append('p')
            .attr('id', 'predicted-sent-need-text')
            .text(`-`)

        predicted_negative_percent
            .append('p')
            .attr('id', 'predicted-sent-need-text')
            .text(`-`)

        predicted_neutral_percent 
            .append('p')
            .attr('id', 'predicted-sent-need-text')
            .text(`-`)

    }




}

// Initialize the page by calling the function
tweet_analyzer()

// Data from informative-features.js
var word_data = feature_data;

// Populate Model Word Sentiment table and create Plot

// Create the table
var word_weight_table = d3.select("#word-weight-tag")

word_weight_table.selectAll('tr').remove();

function Build_Word_Table(array) {
    
    array.forEach(word => {


    var word_table_row = word_weight_table.append('tr');
        
    Object.entries(word).forEach(([key, value]) => {
        word_table_row
            .append('td')
            .attr('class', 'table-item-center')
            .text(value)
        });

        
    });
}
Build_Word_Table(word_data)

word_list = []

    // Unpack data from the API into an list for easy iteration
    word_data.forEach((item) => {

        var item_list = []

        // Iterate through each key/value
        Object.entries(item).forEach(([key, value]) => {
    
        // Add all values relevant to one timepoint to timepoint_list
        item_list.push(value)
        })

        // Append the timepoint data to the master Period List
        word_list.push(item_list)
    })

// Sent graph word list collects the words and is used as the X-values in the graph
sent_graph_word_list = []

// Sent graph value list collects the sentiment values and is used as the Y-values in the graph
sent_graph_value_list = []

word_list.forEach((item) => {
    // Collect the words
    sent_graph_word_list.push(item[0])
    // Collect the sentiment values
    sent_graph_value_list.push(parseFloat(item[2]))
})




// Line Chart to display how sentiment is weighted
var trace = {
    x: sent_graph_word_list,
    y: sent_graph_value_list,
    type: "line"
};

var sent_graph_data = [trace];

var sent_graph_layout = {
    title: "Model Word Sentiment Value",

    xaxis: {
        title: "Words"
    },

    yaxis: {
        title: "Sentiment Value"
    }

};

var responsive_functionality = {
    responsive: true
}

Plotly.newPlot("sentiment-line-chart", sent_graph_data, sent_graph_layout, responsive_functionality)

  
