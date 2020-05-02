-- ******************************************************************************************************
-- ******************************************************************************************************
-- RUN ALL SCRIPTS BELOW (NO NEED TO RUN ONE AT A TIME, JUST HIGHLIGHT THEM ALL AND RUN)
-- WHEN SCRIPTS ARE FINISHED, YOU CAN EXPORT THE FOLLOWING TABLES:
--			
--		aggregate_sentiment_exclude_caucus  (counts by candidate, time_period, sentiment, tweeter_type)
--		negative_tweets						(random sample of negative tweets)
--		positive_tweets						(random sample of positive tweets)
--		probability_summary					(Pranav's candidate_sentiment probabilities)
-- ******************************************************************************************************
-- ******************************************************************************************************


-- ==========================================================
-- INSERT DISTINCT RECORDS FROM LOAD TABLE TO PREDICTED TABLE
-- ==========================================================


INSERT INTO predicted_tweets (
	index_pandas,
	time_stamp,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	predictor,
	candidate,
	fromfile,
	tweeter_type
)

SELECT DISTINCT
	lt.index_pandas,
	lt.time_stamp,
	lt.to_user,
	lt.replies,
	lt.retweets,
	lt.favorites,
	lt.username,
	lt.tweet_text,
	lt.geo,
	lt.mentions,
	lt.hashtags,
	lt.tweet_id,
	lt.permalink,
	lt.predictor,
	lt.candidate,
	lt.fromfile,
	lt.tweeter_type

FROM load_tweets lt

WHERE lt.tweet_id NOT IN(SELECT tweet_id FROM predicted_tweets)
;



-- =======================================================
-- THE FOLLOWING QUERIES FIND CANDIDATES IN THE TWEET TEXT
-- =======================================================


UPDATE predicted_tweets
SET
sanders = 0,
biden = 0,
klobuchar = 0,
warren = 0,
buttigieg = 0,
steyer = 0,
yang = 0,
bloomberg = 0,
gabbard = 0,
trump = 0,
dnc = 0,
democrats = 0,
caucus = 0;


UPDATE predicted_tweets
SET
sanders = 1
WHERE lower(tweet_text) ~~ ANY('{%bernie%,%sanders%,%bsanders%,%bernie sanders%, %berniesanders%, %bernard%, %bernardsanders%, %bernard sanders%}');


UPDATE predicted_tweets
SET
biden = 1
WHERE lower(tweet_text) ~~ ANY('{%joe%,%biden%,%joebiden%,%joe biden%, %jbiden%, %joseph biden%, %josephbiden%, %joseph%}');


UPDATE predicted_tweets
SET
klobuchar = 1
WHERE lower(tweet_text) ~~ ANY('{%amy%,%klobuchar%,%amyklobuchar%,%amy klobuchar%, %aklobuchar%}');


UPDATE predicted_tweets
SET
warren = 1
WHERE lower(tweet_text) ~~ ANY('{%liz%,%warren%,%lizwarren%,%liz warren%, %ewarren%, %elizabeth%, %elizabethwarren%, %elizabeth warren%}');


UPDATE predicted_tweets
SET
buttigieg = 1
WHERE lower(tweet_text) ~~ ANY('{%pete%,%buttigieg%,%petebuttigieg%,%pete buttigieg%, %pbuttigieg%, %mayor pete%, %mayorpete%}');


UPDATE predicted_tweets
SET
steyer = 1
WHERE lower(tweet_text) ~~ ANY('{%tom%,%steyer%,%tomsteyer%,%tom steyer%, %tsteyer%, %thomas steyer%, %thomassteyer%, %thomas%}');


UPDATE predicted_tweets
SET
yang = 1
WHERE lower(tweet_text) ~~ ANY('{%andrew%,%yang%,%andrewyang%,%andrew yang%, %ayang%, %yang gang%, %yanggang%}');


UPDATE predicted_tweets
SET
bloomberg = 1
WHERE lower(tweet_text) ~~ ANY('{%mike%,%bloomberg%,%mikebloomberg%,%mike bloomberg%, %mbloomberg%, %mayor bloomberg%, %mayorbloomberg%, %michael%, %michael bloomberg%, %michaelbloomberg%}');


UPDATE predicted_tweets
SET
gabbard = 1
WHERE lower(tweet_text) ~~ ANY('{%tulsi%,%gabbard%,%tulsigabbard%,%tulsi gabbard%, %tgabbard%}');


UPDATE predicted_tweets
SET
trump = 1
WHERE lower(tweet_text) ~~ ANY('{%donald%,%trump%,%donaldtrump%,%donald trump%, %dtrump%, %president trump%, %presidenttrump%}');


UPDATE predicted_tweets
SET
dnc = 1
WHERE lower(tweet_text) ~~ ANY('{%dnc%,%perez%,%tom perez%,%tperez%}');


UPDATE predicted_tweets
SET
democrats = 1
WHERE lower(tweet_text) ~~ ANY('{%democrats%}');


UPDATE predicted_tweets
SET
caucus = 1
WHERE lower(tweet_text) ~~ ANY('{%caucus%}');



-- =================================================
-- INSERT SANDERS TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Sanders',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(pt.candidate) ~~ ANY('{%bernie%, %sanders%, %bsanders%, %bernie sanders%, %berniesanders%, %bernard%, %bernardsanders%, %bernard sanders%}'))
		OR pt.sanders = 1);



-- =================================================
-- INSERT BIDEN TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Biden',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%joe%, %biden%, %joebiden%, %joe biden%, %jbiden%, %joseph biden%, %josephbiden%, %joseph%}'))
		OR pt.biden = 1);



-- =================================================
-- INSERT BUTTIGIEG TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Buttigieg',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%pete%,%buttigieg%,%petebuttigieg%,%pete buttigieg%, %pbuttigieg%, %mayor pete%, %mayorpete%}'))
		OR pt.buttigieg = 1);

-- =================================================
-- INSERT KLOBUCHAR TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Klobuchar',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%amy%, %klobuchar%, %amyklobuchar%, %amy klobuchar%, %aklobuchar%}'))
		OR pt.klobuchar = 1);

-- =================================================
-- INSERT BLOOMBERG TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Bloomberg',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%mike%, %bloomberg%, %mikebloomberg%, %mike bloomberg%, %mbloomberg%, %mayor bloomberg%, %mayorbloomberg%, %michael%, %michael bloomberg%, %michaelbloomberg%}'))
		OR pt.bloomberg = 1);


-- =================================================
-- INSERT YANG TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Yang',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%andrew%, %yang%, %andrewyang%, %andrew yang%, %ayang%, %yang gang%, %yanggang%}'))
		OR pt.yang = 1);


-- =================================================
-- INSERT WARREN TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Warren',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%liz%, %warren%, %lizwarren%, %liz warren%, %ewarren%, %elizabeth%, %elizabethwarren%, %elizabeth warren%}'))
		OR pt.warren = 1);


-- =================================================
-- INSERT STEYER TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Steyer',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%tom%, %steyer%, %tomsteyer%, %tom steyer%, %tsteyer%, %thomas steyer%, %thomassteyer%, %thomas%}'))
		OR pt.steyer = 1);


-- =================================================
-- INSERT GABBARD TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Gabbard',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%tulsi%, %gabbard%, %tulsigabbard%, %tulsi gabbard%, %tgabbard%}'))
		OR pt.gabbard = 1);


-- =================================================
-- INSERT TRUMP TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Trump',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%donald%, %trump%, %donaldtrump%, %donald trump%, %dtrump%, %president trump%, %presidenttrump%}'))
		OR pt.trump = 1);


-- =================================================
-- INSERT DNC TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'DNC',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%dnc%, %perez%, %tom perez%, %tperez%}'))
		OR pt.dnc = 1);


-- =================================================
-- INSERT DEMOCRATS TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Democrats',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%democrats%}'))
		OR pt.democrats = 1);


-- =================================================
-- INSERT CAUCUS TWEETS INTO STAGING TABLE
-- =================================================

INSERT INTO tweets_staged (
	candidate,
	sentiment,
	time_stamp,
	date,
	to_user,
	replies,
	retweets,
	favorites,
	username,
	tweet_text,
	geo,
	mentions,
	hashtags,
	tweet_id,
	permalink,
	fromfile,
	tweeter_type
)

SELECT
	'Caucus',	-- change to candidate in WHERE clause
	pt.predictor,
	pt.time_stamp,
	date(pt.time_stamp),
	pt.to_user,
	pt.replies,
	pt.retweets,
	pt.favorites,
	pt.username,
	pt.tweet_text,
	pt.geo,
	pt.mentions,
	pt.hashtags,
	pt.tweet_id,
	pt.permalink,
	pt.fromfile,
	pt.tweeter_type

FROM predicted_tweets pt

WHERE ((lower(candidate) ~~ ANY('{%caucus%}'))
		OR pt.caucus = 1);
		


-- =================================================
-- SET RANDOM_INTEGER BETWEEN 1 AND 20 IN tweets_staged TABLE (for selecting tweet samples)
-- =================================================
UPDATE tweets_staged
SET
random_integer = floor(random() * 20 + 1)::int;



-- =================================================
-- RESET PRIMARY KEY IN tweets_staged TABLE
-- =================================================
UPDATE tweets_staged
SET
time_period = 
	CASE 
	WHEN time_stamp < '2020-02-19 18:00:00' THEN 'Pre-Debate'
	WHEN time_stamp < '2020-02-22 16:00:00' THEN 'Post-Debate'
	ELSE 'Post-Caucus'
	END
;



-- =================================================
-- INSERT INTO positive_tweets TABLE
-- =================================================

INSERT INTO positive_tweets (
	candidate,
	sentiment,
	time_period,
	date,
	username,
	tweet_text,
	pos_tweet_id,
	tweeter_type
)

SELECT
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.username,
	staged.tweet_text,
	staged.primary_key,
	staged.tweeter_type

FROM tweets_staged staged

WHERE staged.sentiment = 'positive' 
-- AND staged.candidate IS NOT NULL
AND staged.candidate IN ('Sanders', 'Biden', 'Warren', 'Klobuchar', 'Trump', 'Bloomberg', 'Buttigieg', 'Steyer', 'Gabbard', 'Yang')
AND staged.random_integer IN ('7', '9', '11', '17', '19');



-- =================================================
-- INSERT INTO negative_tweets TABLE
-- =================================================

INSERT INTO negative_tweets (
	candidate,
	sentiment,
	time_period,
	date,
	username,
	tweet_text,
	neg_tweet_id,
	tweeter_type
)

SELECT
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.username,
	staged.tweet_text,
	staged.primary_key,
	staged.tweeter_type

FROM tweets_staged staged

WHERE staged.sentiment = 'negative' 
-- AND staged.candidate IS NOT NULL
AND staged.candidate IN ('Sanders', 'Biden', 'Warren', 'Klobuchar', 'Trump', 'Bloomberg', 'Buttigieg', 'Steyer', 'Gabbard', 'Yang')
AND staged.random_integer IN ('3', '5', '7', '9', '11', '17', '19');



-- =================================================
-- INSERT INTO aggregate_sentiment_exclude_caucus TABLE
-- =================================================

INSERT INTO aggregate_sentiment_exclude_caucus (
	candidate,
	sentiment,
	time_period,
	date,
	tweeter_type,
	count
)

SELECT
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.tweeter_type,
	count(*)

FROM tweets_staged staged

WHERE staged.candidate NOT IN ('Caucus', 'DNC', 'Democrats') AND staged.sentiment IN ('positive', 'negative')

GROUP BY
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.tweeter_type
;



-- =================================================
-- INSERT INTO aggregate_sentiment_include_caucus TABLE
-- =================================================

INSERT INTO aggregate_sentiment_include_caucus (
	candidate,
	sentiment,
	time_period,
	date,
	tweeter_type,
	count
)

SELECT
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.tweeter_type,
	count(*)

FROM tweets_staged staged
	   
WHERE staged.sentiment IN ('positive', 'negative')

GROUP BY
	staged.candidate,
	staged.sentiment,
	staged.time_period,
	staged.date,
	staged.tweeter_type
;


