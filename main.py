import pickle
import string
import re
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
from nltk.tokenize import TweetTokenizer
from nltk import classify
from nltk import NaiveBayesClassifier
import json
import random
import pandas as pd

overall_df = pd.read_csv('overall_counts.csv')
neg_tweets = pd.read_csv('negative_tweets.csv')
pos_tweets = pd.read_csv('positive_tweets.csv')

full_tweets = neg_tweets.append(pos_tweets, sort=True)

app3 = full_tweets

df_sent1 = pd.read_csv('pre_debate_candidate_sentiment.csv')
df_sent1['scenario'] = 'pre_debate'
df_sent2 = pd.read_csv('post_debate_candidate_sentiment.csv')
df_sent3 = pd.read_csv('pre_election_candidate_sentiment.csv')
df_sent4 = pd.read_csv('post_election_candidate_sentiment.csv')

df_sent1 = df_sent1[['Name','Negative Probability','Positive Probability','Results','scenario']]
df_sent2 = df_sent2[['Name','Negative Probability','Positive Probability','Results','scenario']]
df_sent3 = df_sent3[['Name','Negative Probability','Positive Probability','Results','scenario']]
df_sent4 = df_sent4[['Name','Negative Probability','Positive Probability','Results','scenario']]

sent_app1 = df_sent1.append(df_sent2)

sent_app2 = sent_app1.append(df_sent3)

sent_app3 = sent_app2.append(df_sent4)

sent_app3['Staging'] = sent_app3['Negative Probability'] + sent_app3['Positive Probability']
sent_app3['General_Probability'] = 1 - sent_app3['Staging']

sent_app3['General_Probability'] = sent_app3['General_Probability']*100
sent_app3['Negative Probability'] = sent_app3['Negative Probability']*100
sent_app3['Positive Probability'] = sent_app3['Positive Probability']*100

avg_group = sent_app3.groupby('Name').mean().reset_index()
 

def clean_tweets(tweet):
    stopwords_english = stopwords.words('english')

    stopwords_english = stopwords.words('english')
    tweet = re.sub(r'\$\w*', '', tweet)
    
    ## Cleaing up RTs
    tweet = re.sub(r'^RT[\s]+', '', tweet)
    
    ## Removing hyperlinks
    tweet = re.sub(r'https?:\/\/.*[\r\n]*', '', tweet)
    
    ## Removing hastags
    tweet = re.sub(r'#', '', tweet)
 
    # tokenize tweets
    tokenizer = TweetTokenizer(preserve_case=False, strip_handles=True, reduce_len=True)
    tweet_tokens = tokenizer.tokenize(tweet)
 
    tweets_clean = []    
    for word in tweet_tokens:
        if (word not in stopwords_english and # remove stopwords
                word not in string.punctuation): # remove punctuation
            ##stem_word = stemmer.stem(word) # stemming word
            tweets_clean.append(word)
 
    return tweets_clean

def bag_of_words(tweet):
    words = clean_tweets(tweet)
    words_dictionary = dict([word, True] for word in words)    
    return words_dictionary

def run(tweet):
    filename = 'pre_debate_model.sav'
    loaded_model = pickle.load(open(filename, 'rb'))
    user_input = tweet
    custom_tweet_set = bag_of_words(user_input)
    prob_result = loaded_model.prob_classify(custom_tweet_set)
    
    final_result = str(prob_result.max())
    negative_percent = round(((prob_result.prob("neg"))*100),2)
    positive_percent = round(((prob_result.prob("pos"))*100),2)
    general_percent = round(((prob_result.prob("gen"))*100),2)
    jsondata = {}
    json_final = {}
    json_final['Tweet'] = user_input
    json_final['Overall_Sentiment'] = final_result
    json_final['Negative_Percent'] = negative_percent
    json_final['Positive_Percent'] = positive_percent
    json_final['General_Percent'] = general_percent

    jsondata['Sentiment'] = json_final

    myjson = json.dumps(jsondata)

    return myjson

def random_tweets(name,col,time):
        
    save_tweets = []
    time_df = app3[app3['time_period']==time]
    name_df = time_df[time_df['candidate']==name]
    get_df = name_df[name_df['sentiment']==col].reset_index()

    
    for x in range(5):
        date = get_df['date'].iloc[random.randint(1,20)]
        username = get_df['username'].iloc[random.randint(1,20)]
        tweet = get_df['tweet_text'].iloc[random.randint(1,20)]

        save = {'date' : date, 'username': username, 'tweet': tweet}
        save_tweets.append(save)
    
    return save_tweets

def get_elements(name, col, scenario):
    df_cand = sent_app3[sent_app3['scenario']==scenario]
    df_sent = df_cand[df_cand['Name']==name]
    
    for i in df_sent[col]:
        return i

def get_avg(name,col):
    avg_group = sent_app3.groupby('Name').mean().reset_index()
    df_sent = avg_group[avg_group['Name']==name]
    for i in df_sent[col]:
        return i

def get_agg(name,period):
    name_agg = overall_df[overall_df['Name']==name]
    per_agg = name_agg[period]
    for i in per_agg:
        return i

def create_dash_api():

    jsondata = {}
    candidate_1 = {}
    electoral_data = {}

    ## Create Bernie Candidate 
    candidate_1 = 'Bernie Sanders'

    ## Create electoral data

    electoral_data['period4'] = 'Overall'
    electoral_data['positive_sentitment_score_4'] = get_avg('Sanders','Positive Probability')
    electoral_data['negative_sentiment_score_4'] = get_avg('Sanders','Negative Probability')
    electoral_data['general_sentitment_score_4'] = get_avg('Sanders','General_Probability')
    electoral_data['tweet_count_4'] = get_agg('Sanders','Overall')
    positive_tweets = random_tweets('Sanders','positive','Pre-Debate')
    negative_tweets = random_tweets('Sanders','negative','Pre-Debate')
    electoral_data['positive_tweets_4'] = [positive_tweets]
    electoral_data['negative_tweets_4'] = [negative_tweets]

    electoral_data['period1'] = 'pre_debate'
    electoral_data['positive_sentitment_score_1'] = get_elements('Sanders','Positive Probability','pre_debate')
    electoral_data['negative_sentiment_score_1'] = get_elements('Sanders','Negative Probability','pre_debate')
    electoral_data['general_sentitment_score_1'] = get_elements('Sanders','General_Probability','pre_debate')
    electoral_data['tweet_count_1'] = get_agg('Sanders','Pre-Debate')
    positive_tweets = random_tweets('Sanders','positive','Pre-Debate')
    negative_tweets = random_tweets('Sanders','negative','Pre-Debate')
    electoral_data['positive_tweets_1'] = [positive_tweets]
    electoral_data['negative_tweets_1'] = [negative_tweets]


    electoral_data['period2'] = 'post_debate'
    electoral_data['positive_sentitment_score_2'] = get_elements('Sanders','Positive Probability','post_debate')
    electoral_data['negative_sentiment_score_2'] = get_elements('Sanders','Negative Probability','post_debate')
    electoral_data['general_sentitment_score_2'] = get_elements('Sanders','General_Probability','post_debate')
    electoral_data['tweet_count_2'] = get_agg('Sanders','Post-Debate')
    positive_tweets = random_tweets('Sanders','positive','Post-Debate')
    negative_tweets = random_tweets('Sanders','negative','Post-Debate')
    electoral_data['positive_tweets_2'] = [positive_tweets]
    electoral_data['negative_tweets_2'] = [negative_tweets]

    electoral_data['period3'] = 'post_election'
    electoral_data['positive_sentitment_score_3'] = get_elements('Sanders','Positive Probability','post_election')
    electoral_data['negative_sentiment_score_3'] = get_elements('Sanders','Negative Probability','post_election')
    electoral_data['general_sentitment_score_3'] = get_elements('Sanders','General_Probability','post_election')
    electoral_data['tweet_count_3'] = get_agg('Sanders','Post-Caucus')
    positive_tweets = random_tweets('Sanders','positive','Post-Caucus')
    negative_tweets = random_tweets('Sanders','negative','Post-Caucus')
    electoral_data['positive_tweets_3'] = [positive_tweets]
    electoral_data['negative_tweets_3'] = [negative_tweets]








    ## Liz Warren JSON

    candidate_2 = {}
    electoral_data_2 = {}

    ## Create Candidate
    candidate_2 = 'Elizabeth Warren'

    ## Create electoral data for Liz Warren 

    electoral_data_2['period4'] = 'Overall'
    electoral_data_2['positive_sentitment_score_4'] = get_avg('Warren','Positive Probability')
    electoral_data_2['negative_sentiment_score_4'] = get_avg('Warren','Negative Probability')
    electoral_data_2['general_sentitment_score_4'] = get_avg('Warren','General_Probability')
    electoral_data_2['tweet_count_4'] = get_agg('Warren','Overall')
    positive_tweets = random_tweets('Warren','positive','Post-Caucus')
    negative_tweets = random_tweets('Warren','negative','Post-Caucus')
    electoral_data_2['positive_tweets_4'] = [positive_tweets]
    electoral_data_2['negative_tweets_4'] = [negative_tweets]


    electoral_data_2['period1'] = 'pre_debate'
    electoral_data_2['positive_sentitment_score_1'] = get_elements('Warren','Positive Probability','pre_debate')
    electoral_data_2['negative_sentiment_score_1'] = get_elements('Warren','Negative Probability','pre_debate')
    electoral_data_2['general_sentitment_score_1'] = get_elements('Warren','General_Probability','pre_debate')
    electoral_data_2['tweet_count_1'] = get_agg('Warren','Pre-Debate')
    positive_tweets = random_tweets('Warren','positive','Pre-Debate')
    negative_tweets = random_tweets('Warren','negative','Pre-Debate')
    electoral_data_2['positive_tweets_1'] = [positive_tweets]
    electoral_data_2['negative_tweets_1'] = [negative_tweets]


    electoral_data_2['period2'] = 'post_debate'
    electoral_data_2['positive_sentitment_score_2'] = get_elements('Warren','Positive Probability','post_debate')
    electoral_data_2['negative_sentiment_score_2'] = get_elements('Warren','Negative Probability','post_debate')
    electoral_data_2['general_sentitment_score_2'] = get_elements('Warren','General_Probability','post_debate')
    electoral_data_2['tweet_count_2'] = get_agg('Warren','Post-Debate')
    positive_tweets = random_tweets('Warren','positive','Post-Debate')
    negative_tweets = random_tweets('Warren','negative','Post-Debate')
    electoral_data_2['positive_tweets_2'] = [positive_tweets]
    electoral_data_2['negative_tweets_2'] = [negative_tweets]


    electoral_data_2['period3'] = 'post_election'
    electoral_data_2['positive_sentitment_score_3'] = get_elements('Warren','Positive Probability','post_election')
    electoral_data_2['negative_sentiment_score_3'] = get_elements('Warren','Negative Probability','post_election')
    electoral_data_2['general_sentitment_score_3'] = get_elements('Warren','General_Probability','post_election')
    electoral_data_2['tweet_count_3'] = get_agg('Warren','Post-Caucus')
    positive_tweets = random_tweets('Warren','positive','Post-Caucus')
    negative_tweets = random_tweets('Warren','negative','Post-Caucus')
    electoral_data_2['positive_tweets_3'] = [positive_tweets]
    electoral_data_2['negative_tweets_3'] = [negative_tweets]


    ## Kloobuchar build

    candidate_3 = {}
    electoral_data_3 = {}

    candidate_3 = 'Amy Klobuchar'

    ## Create for Amy

    electoral_data_3['period4'] = 'Overall'
    electoral_data_3['positive_sentitment_score_4'] = get_avg('Klobuchar','Positive Probability')
    electoral_data_3['negative_sentiment_score_4'] = get_avg('Klobuchar','Negative Probability')
    electoral_data_3['general_sentitment_score_4'] = get_avg('Klobuchar','General_Probability')
    electoral_data_3['tweet_count_4'] = get_agg('Klobuchar','Overall')
    positive_tweets = random_tweets('Klobuchar','positive','Post-Caucus')
    negative_tweets = random_tweets('Klobuchar','negative','Post-Caucus')
    electoral_data_3['positive_tweets_4'] = [positive_tweets]
    electoral_data_3['negative_tweets_4'] = [negative_tweets]

    electoral_data_3['period1'] = 'pre_debate'
    electoral_data_3['positive_sentitment_score_1'] = get_elements('Klobuchar','Positive Probability','pre_debate')
    electoral_data_3['negative_sentiment_score_1'] = get_elements('Klobuchar','Negative Probability','pre_debate')
    electoral_data_3['general_sentitment_score_1'] = get_elements('Klobuchar','General_Probability','pre_debate')
    electoral_data_3['tweet_count_1'] = get_agg('Klobuchar','Pre-Debate')
    positive_tweets = random_tweets('Klobuchar','positive','Pre-Debate')
    negative_tweets = random_tweets('Klobuchar','negative','Pre-Debate')
    electoral_data_3['positive_tweets_1'] = [positive_tweets]
    electoral_data_3['negative_tweets_1'] = [negative_tweets]

    electoral_data_3['period2'] = 'post_debate'
    electoral_data_3['positive_sentitment_score_2'] = get_elements('Klobuchar','Positive Probability','post_debate')
    electoral_data_3['negative_sentiment_score_2'] = get_elements('Klobuchar','Negative Probability','post_debate')
    electoral_data_3['general_sentitment_score_2'] = get_elements('Klobuchar','General_Probability','post_debate')
    electoral_data_3['tweet_count_2'] = get_agg('Klobuchar','Post-Debate')
    positive_tweets = random_tweets('Klobuchar','positive','Post-Debate')
    negative_tweets = random_tweets('Klobuchar','negative','Post-Debate')
    electoral_data_3['positive_tweets_2'] = [positive_tweets]
    electoral_data_3['negative_tweets_2'] = [negative_tweets]


    electoral_data_3['period3'] = 'post_election'
    electoral_data_3['positive_sentitment_score_3'] = get_elements('Klobuchar','Positive Probability','post_election')
    electoral_data_3['negative_sentiment_score_3'] = get_elements('Klobuchar','Negative Probability','post_election')
    electoral_data_3['general_sentitment_score_3'] = get_elements('Klobuchar','General_Probability','post_election')
    electoral_data_3['tweet_count_3'] = get_agg('Klobuchar','Post-Caucus')
    positive_tweets = random_tweets('Klobuchar','positive','Post-Caucus')
    negative_tweets = random_tweets('Klobuchar','negative','Post-Caucus')
    electoral_data_3['positive_tweets_3'] = [positive_tweets]
    electoral_data_3['negative_tweets_3'] = [negative_tweets]


    ## Buttigieg Build

    candidate_4 = {}
    electoral_data_4 = {}

    candidate_4 = 'Pete Buttigieg'

    ## Create for Pete

    electoral_data_4['period4'] = 'Overall'
    electoral_data_4['positive_sentitment_score_4'] = get_avg('Buttigieg','Positive Probability')
    electoral_data_4['negative_sentiment_score_4'] = get_avg('Buttigieg','Negative Probability')
    electoral_data_4['general_sentitment_score_4'] = get_avg('Buttigieg','General_Probability')
    electoral_data_4['tweet_count_4'] = get_agg('Buttigieg','Overall')
    positive_tweets = random_tweets('Buttigieg','positive','Post-Caucus')
    negative_tweets = random_tweets('Buttigieg','negative','Post-Caucus')
    electoral_data_4['positive_tweets_4'] = [positive_tweets]
    electoral_data_4['negative_tweets_4'] = [negative_tweets]

    electoral_data_4['period1'] = 'pre_debate'
    electoral_data_4['positive_sentitment_score_1'] = get_elements('Buttigieg','Positive Probability','pre_debate')
    electoral_data_4['negative_sentiment_score_1'] = get_elements('Buttigieg','Negative Probability','pre_debate')
    electoral_data_4['general_sentitment_score_1'] = get_elements('Buttigieg','General_Probability','pre_debate')
    electoral_data_4['tweet_count_1'] = get_agg('Buttigieg','Pre-Debate')
    positive_tweets = random_tweets('Buttigieg','positive','Pre-Debate')
    negative_tweets = random_tweets('Buttigieg','negative','Pre-Debate')
    electoral_data_4['positive_tweets_1'] = [positive_tweets]
    electoral_data_4['negative_tweets_1'] = [negative_tweets]

    electoral_data_4['period2'] = 'post_debate'
    electoral_data_4['positive_sentitment_score_2'] = get_elements('Buttigieg','Positive Probability','post_debate')
    electoral_data_4['negative_sentiment_score_2'] = get_elements('Buttigieg','Negative Probability','post_debate')
    electoral_data_4['general_sentitment_score_2'] = get_elements('Buttigieg','General_Probability','post_debate')
    electoral_data_4['tweet_count_2'] = get_agg('Buttigieg','Post-Debate')
    positive_tweets = random_tweets('Buttigieg','positive','Post-Debate')
    negative_tweets = random_tweets('Buttigieg','negative','Post-Debate')
    electoral_data_4['positive_tweets_2'] = [positive_tweets]
    electoral_data_4['negative_tweets_2'] = [negative_tweets]

    electoral_data_4['period3'] = 'post_election'
    electoral_data_4['positive_sentitment_score_3'] = get_elements('Buttigieg','Positive Probability','post_election')
    electoral_data_4['negative_sentiment_score_3'] = get_elements('Buttigieg','Negative Probability','post_election')
    electoral_data_4['general_sentitment_score_3'] = get_elements('Buttigieg','General_Probability','post_election')
    electoral_data_4['tweet_count_3'] = get_agg('Buttigieg','Post-Caucus')
    positive_tweets = random_tweets('Buttigieg','positive','Post-Caucus')
    negative_tweets = random_tweets('Buttigieg','negative','Post-Caucus')
    electoral_data_4['positive_tweets_3'] = [positive_tweets]
    electoral_data_4['negative_tweets_3'] = [negative_tweets]


    ## Biden Build

    candidate_5 = {}
    electoral_data_5 = {}

    candidate_5 = 'Joe Biden'

    ## Create for Biden

    electoral_data_5['period4'] = 'Overall'
    electoral_data_5['positive_sentitment_score_4'] = get_avg('Biden','Positive Probability')
    electoral_data_5['negative_sentiment_score_4'] = get_avg('Biden','Negative Probability')
    electoral_data_5['general_sentitment_score_4'] = get_avg('Biden','General_Probability')
    electoral_data_5['tweet_count_4'] = get_agg('Biden','Overall')
    positive_tweets = random_tweets('Biden','positive','Post-Caucus')
    negative_tweets = random_tweets('Biden','negative','Post-Caucus')
    electoral_data_5['positive_tweets_4'] = [positive_tweets]
    electoral_data_5['negative_tweets_4'] = [negative_tweets]

    electoral_data_5['period1'] = 'pre_debate'
    electoral_data_5['positive_sentitment_score_1'] = get_elements('Biden','Positive Probability','pre_debate')
    electoral_data_5['negative_sentiment_score_1'] = get_elements('Biden','Negative Probability','pre_debate')
    electoral_data_5['general_sentitment_score_1'] = get_elements('Biden','General_Probability','pre_debate')
    electoral_data_5['tweet_count_1'] = get_agg('Biden','Pre-Debate')
    positive_tweets = random_tweets('Biden','positive','Pre-Debate')
    negative_tweets = random_tweets('Biden','negative','Pre-Debate')
    electoral_data_5['positive_tweets_1'] = [positive_tweets]
    electoral_data_5['negative_tweets_1'] = [negative_tweets]

    electoral_data_5['period2'] = 'post_debate'
    electoral_data_5['positive_sentitment_score_2'] = get_elements('Biden','Positive Probability','post_debate')
    electoral_data_5['negative_sentiment_score_2'] = get_elements('Biden','Negative Probability','post_debate')
    electoral_data_5['general_sentitment_score_2'] = get_elements('Biden','General_Probability','post_debate')
    electoral_data_5['tweet_count_2'] = get_agg('Biden','Post-Debate')
    positive_tweets = random_tweets('Biden','positive','Post-Debate')
    negative_tweets = random_tweets('Biden','negative','Post-Debate')
    electoral_data_5['positive_tweets_2'] = [positive_tweets]
    electoral_data_5['negative_tweets_2'] = [negative_tweets]

    electoral_data_5['period3'] = 'post_election'
    electoral_data_5['positive_sentitment_score_3'] = get_elements('Biden','Positive Probability','post_election')
    electoral_data_5['negative_sentiment_score_3'] = get_elements('Biden','Negative Probability','post_election')
    electoral_data_5['general_sentitment_score_3'] = get_elements('Biden','General_Probability','post_election')
    electoral_data_5['tweet_count_3'] = get_agg('Biden','Post-Caucus')
    positive_tweets = random_tweets('Biden','positive','Post-Caucus')
    negative_tweets = random_tweets('Biden','negative','Post-Caucus')
    electoral_data_5['positive_tweets_3'] = [positive_tweets]
    electoral_data_5['negative_tweets_3'] = [negative_tweets]


    ## Bloomberg Build

    candidate_6 = {}
    electoral_data_6 = {}

    candidate_6 = 'Michael Bloomberg'

    ## Build for Bloomberg

    electoral_data_6['period4'] = 'Overall'
    electoral_data_6['positive_sentitment_score_4'] = get_avg('Bloomberg','Positive Probability')
    electoral_data_6['negative_sentiment_score_4'] = get_avg('Bloomberg','Negative Probability')
    electoral_data_6['general_sentitment_score_4'] = get_avg('Bloomberg','General_Probability')
    electoral_data_6['tweet_count_4'] = get_agg('Bloomberg','Overall')
    positive_tweets = random_tweets('Bloomberg','positive','Post-Caucus')
    negative_tweets = random_tweets('Bloomberg','negative','Post-Caucus')
    electoral_data_6['positive_tweets_4'] = [positive_tweets]
    electoral_data_6['negative_tweets_4'] = [negative_tweets]

    electoral_data_6['period1'] = 'pre_debate'
    electoral_data_6['positive_sentitment_score_1'] = get_elements('Bloomberg','Positive Probability','pre_debate')
    electoral_data_6['negative_sentiment_score_1'] = get_elements('Bloomberg','Negative Probability','pre_debate')
    electoral_data_6['general_sentitment_score_1'] = get_elements('Bloomberg','General_Probability','pre_debate')
    electoral_data_6['tweet_count_1'] = get_agg('Bloomberg','Pre-Debate')
    positive_tweets = random_tweets('Bloomberg','positive','Pre-Debate')
    negative_tweets = random_tweets('Bloomberg','negative','Pre-Debate')
    electoral_data_6['positive_tweets_1'] = [positive_tweets]
    electoral_data_6['negative_tweets_1'] = [negative_tweets]

    electoral_data_6['period2'] = 'post_debate'
    electoral_data_6['positive_sentitment_score_2'] = get_elements('Bloomberg','Positive Probability','post_debate')
    electoral_data_6['negative_sentiment_score_2'] = get_elements('Bloomberg','Negative Probability','post_debate')
    electoral_data_6['general_sentitment_score_2'] = get_elements('Bloomberg','General_Probability','post_debate')
    electoral_data_6['tweet_count_2'] = get_agg('Bloomberg','Post-Debate')
    positive_tweets = random_tweets('Bloomberg','positive','Post-Debate')
    negative_tweets = random_tweets('Bloomberg','negative','Post-Debate')
    electoral_data_6['positive_tweets_2'] = [positive_tweets]
    electoral_data_6['negative_tweets_2'] = [negative_tweets]

    electoral_data_6['period3'] = 'post_election'
    electoral_data_6['positive_sentitment_score_3'] = get_elements('Bloomberg','Positive Probability','post_election')
    electoral_data_6['negative_sentiment_score_3'] = get_elements('Bloomberg','Negative Probability','post_election')
    electoral_data_6['general_sentitment_score_3'] = get_elements('Bloomberg','General_Probability','post_election')
    electoral_data_6['tweet_count_3'] = get_agg('Bloomberg','Post-Caucus')
    positive_tweets = random_tweets('Bloomberg','positive','Post-Caucus')
    negative_tweets = random_tweets('Bloomberg','negative','Post-Caucus')
    electoral_data_6['positive_tweets_3'] = [positive_tweets]
    electoral_data_6['negative_tweets_3'] = [negative_tweets]


    ## Bernie - done
    jsondata['candidate1'] = candidate_1
    jsondata['electoral_data'] = electoral_data

    ##Warren - done
    jsondata['candidate2'] = candidate_2
    jsondata['electoral_data_2'] = electoral_data_2

    ##Klobuchar - done
    jsondata['candidate3'] = candidate_3
    jsondata['electoral_data_3'] = electoral_data_3

    ##Buttigieg - done
    jsondata['candidate4'] = candidate_4
    jsondata['electoral_data_4'] = electoral_data_4

    ##Biden
    jsondata['candidate5'] = candidate_5
    jsondata['electoral_data_5'] = electoral_data_5

    ##Bloomberg
    jsondata['candidate6'] = candidate_6
    jsondata['electoral_data_6'] = electoral_data_6

    final_json = json.dumps(jsondata)
    return final_json