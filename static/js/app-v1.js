var candidate_data = data;

console.log("Data Retrieved from API: ", candidate_data)


data_list = []

// Unpack data from the API into an list for easy iteration
candidate_data.forEach((item) => {

    var candidate_list = []

    // Iterate through each key/value
    Object.entries(item).forEach(([key, value]) => {
  
      // Add all values relevant to one candidate to candidate_list
      candidate_list.push(value)
    })

    // Append the candidate data to the master Data List
    data_list.push(candidate_list)
})

// Populate Dropdown Menu with Candidate Values
var select_Candidate_Values = d3
    .selectAll("#candidate-dropdown")
    .selectAll(`candidate`)
    .data(
        d3.map(candidate_data, function(d){
            return d.candidate
        }).keys()
)

select_Candidate_Values
    .enter()
    .append('option')
    .classed('candidate', true)
    .attr('value', function(d) {
        return d;
    })
    .text(function(d) {
        return `${d}`;
    })
    .exit()
    .remove() 
 

// Define D3 selections for each tag of interest
var overallSent = d3.select("#overall-sent-tag")
var positiveSent_percent = d3.select("#positive-percent-tag")
var negativeSent_percent = d3.select("#negative-percent-tag")
var general_percent = d3.select("#general-percent-tag")
var total_tweetCount = d3.select("#total-count-tag")
var model_accuracy = d3.select('#model-accuracy-tag')

var positiveSent_Table = d3.select("#positive-tweet-tag")
var negativeSent_Table = d3.select("#negative-tweet-tag")

    

// Change values and tweets on dropdown selection
 d3.selectAll("#candidate-dropdown").on("change", updateCandidate)
 
//  Function updateCandidate updates all Candidate data
 function updateCandidate() {
        // Select Candidate dropdown and take the value of the selected element
        var selected_candidate = d3.select("#candidate-dropdown");
        var selected_candidate_value = selected_candidate.property("value");
        
        // Print the selected candidate
        console.log(`Candidate selected: ${selected_candidate_value}`);

        

        // Function deep_locate_name will look for a candidates name within nested arrays and retrieve the index of that name 
        function deep_locate_items (dataset, item_input) {
            Array.prototype.deepIndexOf = function (desired_candidate) {
                for (var i=0; i < this.length; i++) {
                    if(this[i] == desired_candidate)
                        return [i];
                    var candidateIndex = this[i].deepIndexOf ?
                        this[i].deepIndexOf(desired_candidate) : -1;
                    if (candidateIndex != -1)
                        return [i].concat(desired_candidate);
                    }
                return -1;
              }
            return dataset.deepIndexOf(item_input)
        }
        
        var deep_index = deep_locate_items(data_list, selected_candidate_value)

        
        // Select the first value of the Deep Index output (select the entire array containing the candidate name)
        var indexValue = deep_index[0]
        var selected_candidate_data = data_list[indexValue]


        // Unpack the data
        var selected_candidate_name = selected_candidate_data[0]
        var selected_candidate_electoral_data = selected_candidate_data[1]
        



        // Filter by time period selection
        d3.selectAll("#time-dropdown").on('change', updateFilter)


        // Function updateFilter selects the time-frame of the candidate's tweets
        function updateFilter() {
            var selected_time_frame = d3.select("#time-dropdown");
            var selected_time_frame_value = selected_time_frame.property("value");
            // Print input date
            console.log(`Tweet Table Filter Selected: ${selected_time_frame_value}`);


            period_list = []

            // Unpack data from the API into an list for easy iteration
            selected_candidate_electoral_data.forEach((item) => {

                var timepoint_list = []

                // Iterate through each key/value
                Object.entries(item).forEach(([key, value]) => {
            
                // Add all values relevant to one timepoint to timepoint_list
                timepoint_list.push(value)
                })

                // Append the timepoint data to the master Period List
                period_list.push(timepoint_list)
            })

            
            // Unpack candidate data into individual components for easy use
        

            
            // Call the Deep Locate Items function to retrieve the timepoint
            var period_index = deep_locate_items(period_list, selected_time_frame_value)
            

            // Select the first value of the Deep Index output (select the entire array containing the candidate name)
            var electoral_indexValue = period_index[0]
            var selected_electoral_data = period_list[electoral_indexValue]

            // Unpack the data from selected_electoral_data
            
            var selected_time_label = selected_electoral_data[0]

            var selected_time_overall_sentiment = selected_electoral_data[1]
            var selected_time_positive_score = selected_electoral_data[2]
            var selected_time_negative_score = selected_electoral_data[3]
            var selected_time_general_score = selected_electoral_data[4]
            var selected_time_tweet_count = selected_electoral_data[5]
            
        
            var selected_time_positive_tweet_selections = selected_electoral_data[6]
            var selected_time_negative_tweet_selections = selected_electoral_data[7]

            

            // Wipe existing Positive and Negative Sentiment tables
            positiveSent_Table.selectAll('tr').remove();
            negativeSent_Table.selectAll('tr').remove();

            // Wipe existing Summary Statistic values
            overallSent.selectAll('p').remove();
            positiveSent_percent.selectAll('p').remove();
            negativeSent_percent.selectAll('p').remove();
            general_percent.selectAll('p').remove();
            total_tweetCount.selectAll('p').remove();


            if (selected_time_overall_sentiment === "Positive") {
                overallSent
                    .append('p')
                    .attr('id', 'overall-sentiment-positive')
                    .text(selected_time_overall_sentiment)
            } else {
                overallSent
                    .append('p')
                    .attr('id', 'overall-sentiment-negative')
                    .text(selected_time_overall_sentiment)

            }
            // Repopulate Summary Statistics
            

            positiveSent_percent
                .append('p')
                .attr('id', 'percent-pos')
                .text(`${selected_time_positive_score}%`)

            negativeSent_percent
                .append('p')
                .attr('id', 'percent-neg')
                .text(`${selected_time_negative_score}%`)

            general_percent 
                .append('p')
                .attr('id', 'general-percent')
                .text(`${selected_time_general_score}%`)

            total_tweetCount
                .append('p')
                .attr('id', 'tweet-count')
                .text(selected_time_tweet_count)


            



            // Function Build_Positive_Table will populate the Negative Tweet Table based on the input data
            function Build_Positive_Table(positive_tweet_list) {
            

                positive_tweet_list.forEach(candidate => {
            

                var positive_table_row = positiveSent_Table.append('tr');
                    
                Object.entries(candidate).forEach(([key, value]) => {
                    positive_table_row
                        .append('td')
                        .attr('class', 'table-item')
                        .text(value)
                    });
                });
            }    
            
            // Call Build_Positive_Table (see line 146) to build the Positive Tweet table using Filtered Positive-Sentiment Tweets
            Build_Positive_Table(selected_time_positive_tweet_selections)
            

            // Function Build_Negative_Table will populate the Negative Tweet Table based on the input data
            function Build_Negative_Table(negative_tweet_list) {
                
                

                negative_tweet_list.forEach(candidate => {
            

                var negative_table_row = negativeSent_Table.append('tr');
                    
                Object.entries(candidate).forEach(([key, value]) => {
                    negative_table_row
                        .append('td')
                        .attr('class', 'table-item')
                        .text(value)
                    });
                });
            }
            
            // Call Build_Negative_Table (see line 169) to build the Negative Tweet table using Filtered Negative-Sentiment Tweets
            Build_Negative_Table(selected_time_negative_tweet_selections)


            

        }
        // Call updateFilter to filter tweets to the selected value, even when candidate name changes
        updateFilter()
    
        
    
}
// Call updateCandidate to initialize the function and populate the website
updateCandidate()




