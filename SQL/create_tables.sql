-- ******************************************************************************************************
-- ******************************************************************************************************
-- 1.	CREATE A POSTGRES DATABASE CALLED:	democratic_primary_db
-- 2.	RUN ALL SCRIPTS BELOW (NO NEED TO RUN ONE AT A TIME, JUST HIGHLIGHT THEM ALL AND RUN)
-- 3.	RIGHT CLICK ON "Schemas" AND SELECT "Refresh"; YOU SHOULD HAVE EIGHT (8) TABLES
-- 4.	IMPORT THE FOLLOWING TWO .CSV FILES INTO THE INDICATED TABLES:
--			
--			IMPORT FILE  										INTO TABLE
--			combined_predicted.csv								load_tweets
--			probability_summary_candidate_sentiment.csv			probability_summary
--
--	5.  AFTER IMPORTING .CSV FILES, RUN THE processing_script.sql IN ITS ENTIRETY AFTER READING INSTRUCTIONS
-- 	6.	THEN, YOU SHOULD BE READY TO EXPORT TABLE FILES
-- ******************************************************************************************************
-- ******************************************************************************************************


DROP TABLE IF EXISTS aggregate_sentiment_exclude_caucus;
DROP TABLE IF EXISTS aggregate_sentiment_include_caucus;
DROP TABLE IF EXISTS load_tweets;
DROP TABLE IF EXISTS negative_tweets;
DROP TABLE IF EXISTS positive_tweets;
DROP TABLE IF EXISTS predicted_tweets CASCADE;
DROP TABLE IF EXISTS tweets_staged;
DROP TABLE IF EXISTS probability_summary;




CREATE TABLE "load_tweets" (
    "index_pandas" int   NOT NULL,
    "time_stamp" timestamp   NOT NULL,
    "to_user" varchar(250)   NULL,
    "replies" int   NOT NULL,
    "retweets" int   NOT NULL,
    "favorites" int   NOT NULL,
    "username" varchar(250)   NOT NULL,
    "tweet_text" varchar(800)   NOT NULL,
    "geo" varchar(30)   NULL,
    "mentions" varchar(250)   NULL,
    "hashtags" varchar(500)   NULL,
    "tweet_id" varchar(50)   NOT NULL,
    "permalink" varchar(500)   NOT NULL,
    "predictor" varchar(15)   NOT NULL,
    "candidate" varchar(250)   NULL,
    "fromfile" varchar(20)   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_load_tweets" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "predicted_tweets" (
    "index_pandas" int   NOT NULL,
    "time_stamp" timestamp   NOT NULL,
    "to_user" varchar(250)   NULL,
    "replies" int   NOT NULL,
    "retweets" int   NOT NULL,
    "favorites" int   NOT NULL,
    "username" varchar(250)   NOT NULL,
    "tweet_text" varchar(800)   NOT NULL,
    "geo" varchar(30)   NULL,
    "mentions" varchar(250)   NULL,
    "hashtags" varchar(500)   NULL,
    "tweet_id" varchar(50)   NOT NULL,
    "permalink" varchar(500)   NOT NULL,
    "predictor" varchar(15)   NOT NULL,
    "candidate" varchar(250)   NULL,
    "fromfile" varchar(20)   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "sanders" int   NULL,
    "biden" int   NULL,
    "klobuchar" int   NULL,
    "warren" int   NULL,
    "buttigieg" int   NULL,
    "steyer" int   NULL,
    "yang" int   NULL,
    "gabbard" int   NULL,
    "bloomberg" int   NULL,
    "trump" int   NULL,
    "dnc" int   NULL,
    "democrats" int   NULL,
    "caucus" int   NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_predicted_tweets" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "tweets_staged" (
    "candidate" varchar(20)   NOT NULL,
    "sentiment" varchar(15)   NOT NULL,
    "time_stamp" timestamp   NOT NULL,
    "date" date   NOT NULL,
    "to_user" varchar(250)   NULL,
    "replies" int   NOT NULL,
    "retweets" int   NOT NULL,
    "favorites" int   NOT NULL,
    "username" varchar(250)   NOT NULL,
    "tweet_text" varchar(800)   NOT NULL,
    "geo" varchar(30)   NULL,
    "mentions" varchar(250)   NULL,
    "hashtags" varchar(500)   NULL,
    "tweet_id" varchar(50)   NOT NULL,
    "permalink" varchar(500)   NOT NULL,
    "fromfile" varchar(20)   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "random_integer" int   NULL,
    "time_period" varchar(30)   NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_tweets_staged" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "positive_tweets" (
    "candidate" varchar(20)   NOT NULL,
    "sentiment" varchar(15)   NOT NULL,
    "time_period" varchar(20)   NOT NULL,
    "date" date   NOT NULL,
    "username" varchar(250)   NOT NULL,
    "tweet_text" varchar(800)   NOT NULL,
    "pos_tweet_id" bigint   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_positive_tweets" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "negative_tweets" (
    "candidate" varchar(20)   NOT NULL,
    "sentiment" varchar(15)   NOT NULL,
    "time_period" varchar(20)   NOT NULL,
    "date" date   NOT NULL,
    "username" varchar(250)   NOT NULL,
    "tweet_text" varchar(800)   NOT NULL,
    "neg_tweet_id" bigint   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_negative_tweets" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "aggregate_sentiment_exclude_caucus" (
    "candidate" varchar(20)   NOT NULL,
    "sentiment" varchar(15)   NOT NULL,
    "time_period" varchar(20)   NOT NULL,
    "date" date   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "count" int   NOT NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_aggregate_sentiment_exclude_caucus" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "aggregate_sentiment_include_caucus" (
    "candidate" varchar(20)   NOT NULL,
    "sentiment" varchar(15)   NOT NULL,
    "time_period" varchar(20)   NOT NULL,
    "date" date   NOT NULL,
    "tweeter_type" varchar(15)   NOT NULL,
    "count" int   NOT NULL,
    "primary_key" serial   NOT NULL,
    CONSTRAINT "pk_aggregate_sentiment_include_caucus" PRIMARY KEY (
        "primary_key"
     )
);

CREATE TABLE "probability_summary" (
    "index_pandas" int   NOT NULL,
    "candidate" varchar(20)   NOT NULL,
    "negative_probability" float   NOT NULL,
    "positive_probability" float   NOT NULL,
    "results" varchar(15)   NOT NULL,
    "scenario" varchar(20)   NOT NULL
);

ALTER TABLE "positive_tweets" ADD CONSTRAINT "fk_positive_tweets_pos_tweet_id" FOREIGN KEY("pos_tweet_id")
REFERENCES "tweets_staged" ("primary_key");

ALTER TABLE "negative_tweets" ADD CONSTRAINT "fk_negative_tweets_neg_tweet_id" FOREIGN KEY("neg_tweet_id")
REFERENCES "tweets_staged" ("primary_key");


