// DATA DICTIONARY


// VAR NAME                        DATA TYPE                    CONTAINED IN
// -----------------------------------------------------------------------------
// Candidate                       - STRING
// Electoral Data                  - ARRAY
// -----------------------------------------------------------------------------
// Period                          - STRING                   - Electoral Data
// Overall_result                  - STRING                   - Electoral Data
// Predictive_Accuracy             - INT                      - Electoral Data
// Positive_Sentiment_Score        - INT                      - Electoral Data
// Negative_Sentiment_Score        - INT                      - Electoral Data
// General_Sentiment_Score         - INT                      - Electoral Data
// Tweet_Count                     - INT                      - Electoral Data
// Positive_Tweets                 - DICTIONARY               - Electoral Data
// -----------------------------------------------------------------------------
// Date                            - STRING                   - Positive_Tweets
// Username                        - STRING                   - Positive_Tweets
// Tweet                           - STRING                   - Positive_Tweets
// -----------------------------------------------------------------------------
// Negative_Tweets                 - DICTIONARY               - Electoral Data
// -----------------------------------------------------------------------------
// Date                            - STRING                   - Negative_Tweets
// Username                        - STRING                   - Negative_Tweets
// Tweet                           - STRING                   - Negative_Tweets
// -----------------------------------------------------------------------------



var data = [
    {
        candidate: "Bernie Sanders",

        electoral_data: [
            {
                period: "Overall",
                overall_result: "Positive",
                predictive_accuracy: 80,
                Positive_Sentiment_Score: 57.3,
                Negative_Sentiment_Score: 40.7,
                general_sentiment_score: 2,
                tweet_count: 9347,
                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "randyslovacek",
                        tweet: "Attended #NevadaCaucus today. Lots of long lines and patient folks waiting to cast their votes. Walking up and down the line, I heard a lot of folks talking about @PeteButtigieg and @JoeBiden. Just thought I'd throw that out there. @nvdemspic.twitter.com/bRU0ZpTZa5"
                    },
                    {
                        date: "2020-02-16",
                        username: "nyltak2015",
                        tweet: "#Latinos #Bernie2020 #Tulsi2020 #YangGang #NevadaCaucus @msnbc @thehill #ImmigrationReform #Borderwallpic.twitter.com/rGsRwDCO0t"
                    },
                    {
                        date: "2020-02-16",
                        username: "startledsquirel",
                        tweet: "No. Because it is. #corruption in the #NevadaCaucus but let’s make sure everyone knows. https://twitter.com/abdulelsayed/status/1228798156583788544 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "caroltpsworld",
                        tweet: "Check out #NevadaCaucus #EarlyVoting there might be long lines and take a bit of time ...I think our #democracy is worth. #GoodTrouble"
                    },
                    {
                        date: "2020-02-16",
                        username: "clevergrrly",
                        tweet: "A great day to vote in #Nevada! Getting out in Henderson to participate in the Democratic process. #NevadaCaucus #CaucusWeekend2020 #CaucusForBernie #BernieSanders2020 #Bernie2020 #BernieSanders2020 #BernieBeatsTrump #OnlyVegaspic.twitter.com/2Urj6dGHMO – at Water Street District"
                    },
                    {
                        date: "2020-02-16",
                        username: "OzoneSwag",
                        tweet: "Doesn’t Nevada caucus???"
                    }

                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "PapaESoCo",
                        tweet: "Nevada's Caucus Could Implode Like Iowa: ‘They Were Handed a Complete Shit Sandwich’ https://www.vice.com/en_us/article/y3mnmy/nevadas-caucus-could-implode-like-iowa-they-were-handed-a-complete-shit-sandwich?utm_campaign=sharebutton … via @vice"
                    },
                    {
                        date: "2020-02-16",
                        username: "demmyiv",
                        tweet: "Not sure about that. Nevada is having early ranked choice voting for people who can't attend the caucus."
                    },
                    {
                        date: "2020-02-16",
                        username: "CBCWorldNews",
                        tweet: "Health care top of mind for early Democratic caucus voters in Nevada https://www.cbc.ca/news/world/nevada-democratic-caucus-health-care-1.5465667?cmp=rss …pic.twitter.com/2bhYbywflk"
                    },
                    {
                        date: "2020-02-16",
                        username: "MikeHipp10",
                        tweet: "#Pete2020 - Growing up gay, I thought I was the only one - #Buttigieg2020 - #ButtigiegForPresident - #Buttigieg - #TurnThePage - #WinTheEra - #NevadaCaucus - #NevadaForPete - #SouthCarolinaForPete - #LGBTQForPetepic.twitter.com/Pze7Cvmfni"
                    },
                    {
                        date: "2020-02-16",
                        username: "davwim",
                        tweet: "I would've said that 8 months ago. The problem is the DNC just got caught cheating in Iowa, and now one of the caucus captains is saying Nevada may be worse."
                    },
                    {
                        date: "2020-02-16",
                        username: "AbbyBrickler",
                        tweet: "So we’ve got the #NevadaCaucus & the #SouthCarolinaPrimary coming up soon! If you want @SenSanders to go 4 for 4, here’s what you can do:pic.twitter.com/hLHhTNrsuf"
                    }
                ]
            },

            {
                period: "Pre-Caucus",
                overall_result: "Positive",
                predictive_accuracy: 78,
                Positive_Sentiment_Score: 67.3,
                Negative_Sentiment_Score: 30.7,
                general_sentiment_score: 2,
                tweet_count: 6035,

                positive_tweets: [
                    {
                        date: "2020-02-19",
                        username: "SalKappa",
                        tweet: "#PresidentSanders #BernieWonIowa #BernieWonNewHampshire #BernieBeatsTrump #BerniesGonnaWin #NevadaCaucus #SouthCarolina #FeelTheBern #NotMeUs #BigUs #Bernie2020 #Sanders2020 #BernieSanders2020 #BernieSanders #DemocraticPrimaries #2020Dem #Election2020 #TrumpFearsBerniehttps://twitter.com/kubethy/status/1229950096286081024"
                    },
                    {
                        date: "2020-02-19",
                        username: "iamwillkeating",
                        tweet: "#MayorPete Buttigieg just said his religious faith “does have implications for how I approach public office.” So much for the separation of church and state. #NevadaCaucus #2020election #CNNTownHall"
                    },
                    {
                        date: "2020-02-19",
                        username: "GoHawksThe12",
                        tweet: "Bernie is now the ONLY candidate with NO billionaire donors!!! #warren2020 #Bernie2020 #PetesBillionaires #WarrenMediaBlackout #PeteForAmerica #PeteForPresident #Biden2020 #Biden #SCprimary #SouthCarolinaPrimary #NVCaucus #NevadaCaucus https://twitter.com/bern_identity/status/1229945043932237824"
                    },
                    {
                        date: "2020-02-19",
                        username: "chad_b_morrow",
                        tweet: "Absolutely absurd how long the line is for early voting in #NevadaCaucus"
                    },
                    {
                        date: "2020-02-19",
                        username: "DestiGrace1",
                        tweet: "Lordie the discussion is about dirty AF #CorruptBarr via #Maddow. Forget #PeteButtigieg you guys, @maddow is about to drop more dirty on the CORRUPT USAG #DisBarr. Apparently dude has been clandestinely shutting down cases against #CrookedTRUMP. #CNNTownHall #NevadaCaucus https://twitter.com/DestiGrace1/status/1229721358126505984"
                    },
                    {
                        date: "2020-02-19",
                        username: "Magsaliciouss",
                        tweet: "Just picked up my Precinct Captain box for Saturday, RSVP'd to see and hear @PeteButtigieg one more time before caucus day and I'm excited for #TeamPete to bring this home in Nevada."
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-18",
                        username: "gatewaypundit",
                        tweet: "Joe Biden Channels Hillary Clinton, Musters Fake Accent When Speaking at Nevada Black Legislative Caucus (VIDEO) @CristinaLaila1 https://www.thegatewaypundit.com/2020/02/joe-biden-channels-hillary-clinton-musters-fake-accent-when-speaking-at-nevada-black-legislative-caucus-video/ … via @gatewaypundit"
                    },
                    {
                        date: "2020-02-18",
                        username: "KLHirst1",
                        tweet: "Buffon Joe Biden Channels Hillary Clinton, Musters Fake Accent When Speaking at Nevada Black Legislative Caucus (VIDEO) https://www.thegatewaypundit.com/2020/02/joe-biden-channels-hillary-clinton-musters-fake-accent-when-speaking-at-nevada-black-legislative-caucus-video/ … via @gatewaypundit"
                    },
                    {
                        date: "2020-02-18",
                        username: "Writing_Destiny",
                        tweet: "Tomorrow Watch the #DemocraticDebate hosted by @NBCNews and @MSNBC Our moderators, @LesterHoltNBC @HallieJackson @ChuckTodd @VanessaHauc @RalstonReports will put the remaining candidates to the test just days ahead of the Nevada Caucus. Watch on Wednesday, 2/19 at 9PM ET. pic.twitter.com/LaNevAujXe"
                    },
                    {
                        date: "2020-02-18",
                        username: "onebagel",
                        tweet: "We wouldn't want to cut defense when we can let poor people suffer more and die earlier. Wow, just wow... #NVCaucus #NevadaCaucus We need a resounding @SenSanders victory in NV ti send this kind of thinking away."
                    },
                    {
                        date: "2020-02-18",
                        username: "mdslock",
                        tweet: "Major Latino group backs Sanders on eve of Nevada caucus https://www.politico.com/news/2020/02/18/national-latino-group-endorses-bernie-sanders-115712 …"
                    },
                    {
                        date: "2020-02-18",
                        username: "ArbaxasIsGay",
                        tweet: "Hey Nevada! Today's the last day to get out and EARLY VOTE for the caucus! Lots of polling locations are open around the state and you can find your closest location at http://caucus.nvdems.com ! #NVCaucus #NVcaucus2020 #FeelTheBern #Bernie2020"
                    }
        
                ]
            },
            {
                period: "Post-Caucus",
                overall_result: "Positive",
                predictive_accuracy: 77,
                Positive_Sentiment_Score: 63.3,
                Negative_Sentiment_Score: 34.7,
                general_sentiment_score: 2,
                tweet_count: 4387,
                positive_tweets: [

                    {
                        date: "2020-02-16",
                        username: "Jacq4Peace",
                        tweet: "I am not leaving it up to one guy. I just saying Reid is the person who can actually determine how the candidates will perform in the Nevada caucus, period. I support @JoeBiden 2020 for president and I am not changing."
                    },
                    {
                        date: "2020-02-16",
                        username: "re1nhardsanders",
                        tweet: "I thought Bloomberg was trying to get into the Nevada caucus?"
                    },
                    {
                        date: "2020-02-16",
                        username: "MikeHipp10",
                        tweet: "#Pete2020 - Building an encompassing coalition - #ButtigiegForPresident - #Buttigieg2020 - #Buttigieg - #TeamPete - #TurnThePage - #WinTheEra - #NevadaCaucus - #NevadaForPete - #SouthCarolinaPrimary - #SouthCarolinapic.twitter.com/ZXgvucvmBn"
                    },
                    {
                        date: "2020-02-16",
                        username: "Chacelounge",
                        tweet: "Vegas is favoring Bernie to win. Hard. Bernie: -330 Biden : +345 Buttigieg : +655 Klobachar: +2150 Warren: +3750 #NevadaCaucus #Bernie2020 #BernieSanders #BernieBeatsTrump #NotMeUshttps://www.google.com/amp/s/www.sportsbettingdime.com/amp/news/politics/opening-odds-win-nevada-caucuses-favor-bernie-sanders-2020/ …"
                    },
                    {
                        date: "2020-02-16",
                        username: "MangoTangoMeri",
                        tweet: "(2/2) I’m sure the timing has nothing to do with the fact that early voting in the Nevada caucus starts today. 'Bernie campaign surrogates and low level followers lied and smeared Yang. I have receipts...' https://bit.ly/2u2wXFd (from @BlacksForYang)"
                    },
                    {
                        date: "2020-02-16",
                        username: "nwdem",
                        tweet: "Important comment about the GOP pushing their voters to vote Bernie in the #NevadaCaucus to screw with our nomination process https://twitter.com/RalstonReports/status/1228780464065761280 …"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "CCEA_SJC",
                        tweet: "Nevada Caucus = Long Gruelling Lines https://twitter.com/peterkoltak/status/1228855874078162944 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "TheWashingtonRT",
                        tweet: "Candidates Klobuchar and Steyer forgot the name of the president of Mexico, during their campaign in Nevada. #15thFeb #EEUU #TOPNEWS #WashigtonToday #AmyKlobuchar #TomSteyer #LopezObrador #NevadaCaucus CreditsNews https://cnn.it/2SvY5FW pic.twitter.com/1CIkq4HA21"
                    },
                    {
                        date: "2020-02-16",
                        username: "TheNVIndy",
                        tweet: "ICYMI Late to organize in Nevada, Klobuchar fans say Minnesota senator hitting her stride on eve of caucus Via @MichelleRindelshttps://thenevadaindependent.com/article/late-to-organize-in-nevada-klobuchar-fans-say-minnesota-senator-hitting-her-stride-on-eve-of-caucus …"
                    },
                    {
                        date: "2020-02-16",
                        username: "stefaniefogel",
                        tweet: "Still waiting in line at the #NevadaCaucus over 3 hours later. And there's still a ton of people here."
                    },
                    {
                        date: "2020-02-16",
                        username: "CharismaWhee",
                        tweet: "This goes for every single day of early voting. If you are doing the in-person caucus on the 22nd and are in line by NOON they cannot turn you away!! STAY IN LINE!!! #NevadaCaucus #NVCaucushttps://twitter.com/BiancaRecto/status/1228852572909273088 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "nicktalksalot",
                        tweet: "It took four days for me to arrange rides for my friends to vote, despite early voting. EVERY VOTE NEEDS TO BE A NATIONAL HOLIDAY. It's easy to do and anything less is. BLATANT voter suppression. #NevadaCaucus #Bernie2020 #NVcaucus2020 #NVLocal @AndrewYang supported this idea."
                    }
                ]
            },
            {
                period: "Pre-Debate",
                overall_result: "Positive",
                predictive_accuracy: 76,
                Positive_Sentiment_Score: 57.4,
                Negative_Sentiment_Score: 41.6,
                general_sentiment_score: 2,
                tweet_count: 2222,

                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "TheRealMoatsad",
                        tweet: "#Nevada #NVCaucus #NevadaCaucus #NevadaCaucuses #UnidosConBernie ¡Atención! #Latinoamérica #latinos #lagente #tiobernie #latinos #latinx #EEUUhttps://twitter.com/peterdaou/status/1228859481435594752 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "silentspider14",
                        tweet: "#NevadaCaucus #NevadaForBerniehttps://twitter.com/BiancaRecto/status/1228852572909273088 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "DemocratHoosier",
                        tweet: "Reminder: to get any delegates from this race, the candidate has to finish at 15% or higher in the caucus. The goal for some candidates right now isn't necessarily to WIN Nevada, but to finish well enough to get delegates."
                    },
                    {
                        date: "2020-02-16",
                        username: "EdWytkind",
                        tweet: "Very proud that my dear friends at the 60,000 member strong @Culinary226 @unitehere are at the center of the #NVCaucus #NevadaCaucus and will be heard very loudly #PresidentialElectionhttps://twitter.com/culinary226/status/1228783118988894208 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "nfoertch",
                        tweet: "This is the first year Nevada has early voting for the caucus and it started today at 10am"
                    },
                    {
                        date: "2020-02-16",
                        username: "LMarieB1978",
                        tweet: "#NevadaCaucus https://twitter.com/michigandeb1/status/1228817609757536256 …"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "bakes781",
                        tweet: "#NevadaCaucus https://twitter.com/DenaePFA/status/1228818623000535040 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "K12Mlissa2004",
                        tweet: "Find early voting locations and times here. Nevada Democratic caucus early voting set to begin | Las Vegas Review-Journal #vote2020 https://www.reviewjournal.com/news/politics-and-government/nevada-democratic-caucus-early-voting-set-to-begin-1956467/amp/ …"
                    },
                    {
                        date: "2020-02-16",
                        username: "Bernie2020WA",
                        tweet: "There are so many amazing volunteers traveling to early primary/caucus states everyday from across Washington State! Here, Iggy, stopped by the Seattle Field Office for a send off before heading to Nevada to go knock on doors before they caucus! Thank you to the both of you! https://twitter.com/ChickenMcPoopy/status/1228757331233525760 …pic.twitter.com/jjw9ZiL026"
                    },
                    {
                        date: "2020-02-16",
                        username: "spundun",
                        tweet: "I read on Twitter that last time Nevada caucus was a chaos too, do you have a podcast for that?"
                    },
                    {
                        date: "2020-02-16",
                        username: "Saabturbo9000",
                        tweet: "yeah just ignore it. pretend like you dont know. the expectations are very stupid."
                    },
                    {
                        date: "2020-02-16",
                        username: "HRCpersists",
                        tweet: "Do you want Nevada to cancel it's caucus then? Because you're only going to get calm again if Bernie wins a landslide. The only thing that happened in Iowa was the party messed up while trying to implement the new DNC rules for caucuses that Bernie wanted."
                    }
                ]

            },
            {
                period: "Post-Debate",
                overall_result: "Positive",
                predictive_accuracy: 75,
                Positive_Sentiment_Score: 67.4,
                Negative_Sentiment_Score: 51.6,
                general_sentiment_score: 2,
                tweet_count: 3649,

                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "ivypacdotorg",
                        tweet: "#IVYPAC Nevadans and we implore you to #StayInLine to early vote in the #NevadaCaucus! If you're in line when the polls close, you will be allowed to cast your ballot https://store.ivypac.org/products/nevada-3-ivypac-feminine-cut-short-sleeve-t-shirt …"
                    },
                    {
                        date: "2020-02-16",
                        username: "PoliticsAlt77",
                        tweet: "This is because Nevada is a caucus, and it works differently. If one candidate doesn’t meet a minimum threshold they can join other candidates."
                    },
                    {
                        date: "2020-02-16",
                        username: "woltgan",
                        tweet: "THIS IS THE NEXT PRESIDENT. @BernieSanders ONE WITH THE PEOPLE! HUELGA!! @verakingxxx #BernieIsMyPresident #BernieSanders #Bernie2020 #democraticsocialism #Huelga #BernieBeatsTrump #AOC #NevadaCaucus #NevadaForBernie #LasVegas #getupstanduphttps://twitter.com/famishedcreator/status/1228779874040471552 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "poop_doctor",
                        tweet: "Hey early voting is here for dems too. I'm currently at an early voting location for the dem caucus. You can find locations and times if you go onto the Nevada dem party site"
                    },
                    {
                        date: "2020-02-16",
                        username: "Earth2500",
                        tweet: "The #Bloomberg + #HillaryClinton pairing > continues the extreme corruption of #TRUMP but more systemic/tyrannical, not just focused on helping Trump + Russia. #NevadaCaucus #Nevada #SouthCarolinaPrimary #democraticdebate #BernieSanders #BernieBeatsTrump #NevadaForBerniehttps://twitter.com/sahouraxo/status/1228839321643503616 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "iambatmandoug",
                        tweet: "On the trail: Inside the Nevada Caucus https://youtu.be/nc_n-JnWF1Y via @YouTube"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "Trumpenator2",
                        tweet: "@JoeBiden Black and Brown people, Joe pushed for Mass incarceration and imprisonment of minorities. He is a racist, don't be fooled. I am the one pushing for prison reform #NevadaCaucus #SouthCarolina #biden #biden2020"
                    },
                    {
                        date: "2020-02-16",
                        username: "Saabturbo9000",
                        tweet: "Wish they would expand on this, I like the idea that there is no standard measurement of time and it depends where you are in the galaxy."
                    },
                    {
                        date: "2020-02-16",
                        username: "TwoThousand_17",
                        tweet: "Actually the drama is going to come from the early votes who are going to be “virtually caucusing” with their living breathing neighbors at the actual caucus and somehow their realignment votes are supposed to be seamlessly folded into the live action votes!"
                    },
                    {
                        date: "2020-02-16",
                        username: "bakes781",
                        tweet: "#NevadaCaucus https://twitter.com/toJamesConnor/status/1228848078645387264 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "IndianWoof",
                        tweet: "Knocking doors in Nevada #Bernie2020 6 early caucus commit cards (one card is husband and wife) pic.twitter.com/Im7dZJWns6"
                    },
                    {
                        date: "2020-02-16",
                        username: "Josh_Reif",
                        tweet: "PREDICTION: After next week, the Nevada Caucus will be renamed the Fyre Festival caucus. #NevadaCaucus"
                    }
                ]
            }

        ]
    },

    {
        candidate: "Elizabeth Warren",
        electoral_data: [
            {
                period: "Overall",
                overall_result: "Positive",
                predictive_accuracy: 80,
                Positive_Sentiment_Score: 55.8,
                Negative_Sentiment_Score: 41.2,
                general_sentiment_score: 3,
                tweet_count: 8026,
                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "CherylSeas",
                        tweet: "Congratulations to the people in Nevada who patiently waited to vote in the most important caucus of their lives! Thank you!"
                    },
                    {
                        date: "2020-02-16",
                        username: "cfirmleader",
                        tweet: "Trump to rally in Las Vegas on eve of Nevada's crucial Democratic presidential caucus- so you not see Satans pattern in Trump? It is there folks- Satan/Trump they are synonyms in 2020 https://flip.it/pwt350"
                    },
                    {
                        date: "2020-02-16",
                        username: "2Dmonds1Pistol",
                        tweet: "#NevadaCaucus #NVEarlyVoting Votes are voided if you fill out early vote preference wrong. You can fill in the list up to 5 candidates. You will get vote voided if you put one name three times. Put Bernie Sanders then uncommitted on next 2 lines."
                    },
                    {
                        date: "2020-02-16",
                        username: "DrStapes85",
                        tweet: "Line was over 2 hours at library with no movement for over 30 minutes. Trying another location... this doesn’t bode well for #NevadaCaucus or @TheDemocrats."
                    },
                    {
                        date: "2020-02-16",
                        username: "SalKappa",
                        tweet: "#MedicareForAll #PresidentSanders #BernieWonIowa #BernieWonNewHampshire #BernieBeatsTrump #BerniesGonnaWin #NevadaCaucus #SouthCarolina #FeelTheBern #NotMeUs #BigUs #Bernie2020 #Sanders2020 #BernieSanders2020 #BernieSanders #DemocraticPrimaries #2020Dem #Election2020https://twitter.com/HeatherGautney/status/1228820798892380160 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "VillarosaArts",
                        tweet: "If only there was senator running for President in #Election2020 whom Obama really liked and really accomplished a lot with..... #NevadaCaucus #California #SouthCarolinaPrimary https://twitter.com/PhotosByBeanz/status/1228711305353269248 …pic.twitter.com/d3e8GC0i6T"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "PolitiMonkey",
                        tweet: "We’re experimenting with #BernieSanders phone cases... Let us know what you think. #BernieIsMyPresident #BernieSanders2020 #Democrats2020 #NevadaCaucus #NevadaForBernie #NevadaCaucusespic.twitter.com/VNxWZ3oIv5"
                    },
                    {
                        date: "2020-02-16",
                        username: "LeeBorowska",
                        tweet: "#CulinaryUnion #Culinary226 workers, of course #Bernie supports you as do I! #Unionstrong !! #NV #NVCaucus #Nevadacaucus #NVUnion #NVDemocrats #NV4Berniehttps://twitter.com/CPDAction/status/1228777272519221248 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "SGailAdam",
                        tweet: "Caucus worker warns Nevada is 'on the path to becoming another Iowa' https://www.fox5vegas.com/news/caucus-worker-warns-nevada-is-on-the-path-to-becoming/article_d5dfb1f6-4e30-11ea-a2cd-676e8152b2f9.html?utm_medium=social&utm_source=twitter&utm_campaign=user-share … via @fox5vegas"
                    },
                    {
                        date: "2020-02-16",
                        username: "CrazyBernie2020",
                        tweet: "#NevadaCaucus https://twitter.com/BernieSanders/status/1228727331851788288 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "LeeBorowska",
                        tweet: "#CulinaryUnion #Culinary226 workers, of course #Bernie supports you as do I! #Unionstrong !! #NV #NVCaucus #Nevadacaucus #NVUnion #NVDemocrats #NV4Berniehttps://twitter.com/GaiaBoy/status/1228778309506326528 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "JordiAGarcia",
                        tweet: "Another Iowa caucus debacle. 3 and a half hour wait to vote in Nevada. The Dems have to get there act together to have a shot against the man himself. @realDonaldTrump #NevadaCaucus #Democrats2020 #Republican #CNN @CNN #vote #VoteBlue #VoteRedpic.twitter.com/b2fGT0cEYj"
                    }
                ]
            },

            {
                period: "Pre-Caucus",
                overall_result: "Positive",
                predictive_accuracy: 78,
                Positive_Sentiment_Score: 50.8,
                Negative_Sentiment_Score: 46.2,
                general_sentiment_score: 3,
                tweet_count: 4167,

                positive_tweets: [
                    {
                        date: "2020-02-19",
                        username: "4HollyF",
                        tweet: "It didn't matter to me and I just stood in line for 3 hours in LV to vote for Liz, Amy, Pete, Bernie, Joe at the Clusterfuhk Nevada calls an early caucus vote. I have a new respect for those in voter suppression states who stand line much longer. What a mess."
                    },
                    {
                        date: "2020-02-19",
                        username: "1nd1obravo",
                        tweet: "is bloomberg not participating in the nevada town hall? (maybe he bought the entire town hall?) #NevadaCaucus"
                    },
                    {
                        date: "2020-02-19",
                        username: "Steveninformed",
                        tweet: "#CNNTownHall #BernieSanders rocked the #NevadaCaucus wow. Excellent job. Viewer. #Democrats"
                    },
                    {
                        date: "2020-02-19",
                        username: "miamibeachfella",
                        tweet: "I wonder how much Bloomberg paid all the news and radio stations to get his poll numbers up. #NevadaCaucus #Bloomberg #DemocraticDebate #BernieSanders"
                    },
                    {
                        date: "2020-02-19",
                        username: "MIWNV",
                        tweet: "“You have the right to vote so exercise your right and SHOW UP, Nevada you have until 8 P.M. PACIFIC TIME to get out to early vote for the caucus” -Tameka, MIWN Ambassador https://www.facebook.com/HigherHeights4/videos/608548459712282/ …pic.twitter.com/kUYMpPraBO"
                    },
                    {
                        date: "2020-02-19",
                        username: "engrqamarabbas5",
                        tweet: "Democratic presidential candidates ramp up attacks against Bloomberg ahead of Nevada caucus - CBS News https://ift.tt/2V1KLL1 Democratic presidential candidates ramp up attacks against Bloomberg ahead of Nevada caucus CBS News 2020 Nevada caucus just a week away ABC News"
                    }
                ],
        
                negative_tweets: [
                    {
                        date: "2020-02-18",
                        username: "RoryTDC",
                        tweet: "'Complete Disaster' Fears Grow Over Potential Nevada Caucus Malfunction (Video) https://thedailycoin.org/2020/02/18/complete-disaster-fears-grow-over-potential-nevada-caucus-malfunction-video/ …"
                    },
                    {
                        date: "2020-02-18",
                        username: "DemocraticLuntz",
                        tweet: "Obviously conditioned on Nevada not being a caucus"
                    },
                    {
                        date: "2020-02-18",
                        username: "LilMamaMayhem",
                        tweet: "I've got to remember to record the Nevada Caucus tomorrow now Bloomberg got accepted to be there. This will be too funny not to see. All your money cant protect you from your worst enemy: yourself. Here's a campaign ad for all his 'supporters' pic.twitter.com/KdZgts2PSh"
                    },
                    {
                        date: "2020-02-18",
                        username: "itsstevenhudson",
                        tweet: "2020 Nevada caucus just a week away - https://www.youtube.com/watch?v=S9kL8Tl4-pw …"
                    },
                    {
                        date: "2020-02-18",
                        username: "DemocraticLuntz",
                        tweet: "Delaware and Nevada on the same day as the new first in the nation states, should Iowa and New Hampshire violate then any candidate who files for their primaries/caucus is banned from eligibility from the nomination https://twitter.com/marcushjohnson/status/1229502435116318720 …"
                    },
                    {
                        date: "2020-02-18",
                        username: "sdmartinez2",
                        tweet: "#TheFixIsInNVCaucus @KyleKulinski @jimmy_dore BREAKING: Volunteers WARN Nevada Caucus Voting App WILL NOT WORK & Be 'A... https://youtu.be/R9V5f2ra3g0 via @YouTube"
                    }
        
                ]
            },
            {
                period: "Post-Caucus",
                overall_result: "Positive",
                predictive_accuracy: 77,
                Positive_Sentiment_Score: 58.8,
                Negative_Sentiment_Score: 38.2,
                general_sentiment_score: 3,
                tweet_count: 5051,
                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "Anti45Potus2020",
                        tweet: "Caucus worker warns Nevada is 'on the path to becoming another Iowa' | Las Vegas Local Breaking News, Headlines | http://fox5vegas.com https://www.fox5vegas.com/news/caucus-worker-warns-nevada-is-on-the-path-to-becoming/article_d5dfb1f6-4e30-11ea-a2cd-676e8152b2f9.html …"
                    },
                    {
                        date: "2020-02-16",
                        username: "Ray_Phenicie",
                        tweet: "For anyone doing #EarlyVoting in NV, listen up. #NevadaCaucus https://twitter.com/amy4thepeople/status/1228690217642733570 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "monkeymoo1992",
                        tweet: "I'm new to the state. This is my first time voting in Nevada. It is a paper ballot. You pick three in different columns. You can choose Andrew Yang in each column. Not sure what to do but will show up on caucus day to do what I can."
                    },
                    {
                        date: "2020-02-16",
                        username: "wilnernau",
                        tweet: "The Technology 202: Google is working with Nevada caucus officials to prevent an Iowa repeat - https://goo.gl/alerts/d9NdE #GoogleAlerts"
                    },
                    {
                        date: "2020-02-16",
                        username: "Saabturbo9000",
                        tweet: "I still can't find any information on how people within Star Wars count years. It can't be BBY/ABY before the Battle of Yavin because how would people in the Clone Wars know to count down to that battle happening in 20 years."
                    },
                    {
                        date: "2020-02-16",
                        username: "ThisIsReno",
                        tweet: "Sen. Amy Klobuchar returns to northern Nevada ahead of Democratic caucus https://buff.ly/2SZW6Jd"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "bakes781",
                        tweet: "#NevadaCaucus #dacahttps://twitter.com/PeteForAmerica/status/1228850086689595397 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "TheRealMoatsad",
                        tweet: "what do you know @NVDEMS my son gets to the to early vote after 4 hours in line - I double check his registration prior, and yesterday. and behold - has to re register because they cannot find his records that I know are good. @NVDEMS @BERNIESANDERS #NevadaCaucus #NVCaucus"
                    },
                    {
                        date: "2020-02-16",
                        username: "CharlieFeigin",
                        tweet: "Don't get too excited. #NewHampshirePrimary definitely didn't skew to the most optimistic polls/forecasts. But if we work hard enough to smash the #NevadaCaucus we may even take the #SouthCarolinaPrimary for @BernieSanders #NotMeUshttps://twitter.com/PpollingNumbers/status/1228855541264453632 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "HilarieGrey",
                        tweet: "Hey that’s my photo Still here, 1 hour & 40 minutes in #persist #NVcaucus2020 #NevadaCaucus #NVerthelesshttps://twitter.com/8NewsNow/status/1228838844407189504 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "keith_silver",
                        tweet: "We want Michael Avenatti. #NevadaCaucus #NeverBloomberg"
                    },
                    {
                        date: "2020-02-16",
                        username: "Blindedbyreligi",
                        tweet: "#NevadaCaucus super impressed with the long ass line for early voting. Closes in 20 minutes and I'm wayyyyy back in line"
                    }
                ]
            },
            {
                period: "Pre-Debate",
                overall_result: "Positive",
                predictive_accuracy: 76,
                Positive_Sentiment_Score: 63.8,
                Negative_Sentiment_Score: 38.2,
                general_sentiment_score: 3,
                tweet_count: 5123,
                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "MSNBCNN1",
                        tweet: "#NevadaCaucus DNC rule is trying to undermine the voters with no second and third choice by making it confusing and throwing out ballots with just @BernieSanders selected. Democracy at action."
                    },
                    {
                        date: "2020-02-16",
                        username: "honorverity",
                        tweet: "TRUMP PLANS TO DISRUPT DEMOCRATIC EVENTS AND FLOOD CITIES WITH COUNTER TRUMP RALLY CROWDS. Trump to rally in Las Vegas on eve of Nevada's crucial Democratic presidential caucus https://flip.it/8fe2Qq"
                    },
                    {
                        date: "2020-02-16",
                        username: "MonicaHabla",
                        tweet: "NEVADA I LOVE YOU. Six hours straight of early caucus goers and I barely had a chance to look up from my lists. Bravo @nvdems!!!"
                    },
                    {
                        date: "2020-02-16",
                        username: "CCDBC",
                        tweet: "The 'pay for play' crippling #Congress & #politics in America has got to STOP. We simply want our government back. One that serves the American people, not just corporate interests #WealthGap #justiceReforms #EducationEquity #equality #BernieSanders #NevadaCaucus @NevadaforBerniepic.twitter.com/kd4NWKM1dU"
                    },
                    {
                        date: "2020-02-16",
                        username: "MSNBCNN1",
                        tweet: "#NevadaCaucus DNC rule is trying to undermine the voters with no second and third choice by making it confusing and throwing out ballots with just @BernieSanders selected. Democracy at action."
                    },
                    {
                        date: "2020-02-16",
                        username: "e_c_sanders",
                        tweet: "Nevada voters, important information regarding early voting! #NevadaForBernie #GOTV #NevadaCaucus #nevadaprimarypic.twitter.com/VZPkIl1WuA"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "quizzaciou",
                        tweet: "a contested convention in the nevada caucus?"
                    },
                    {
                        date: "2020-02-16",
                        username: "PaulaVotesBLUE",
                        tweet: "#Nevada our early voting started TODAY! Thanks to an entirely #DEMOCRATIC Gov't. You couldn't do this before. You had to #caucus on one day only. If you had it off. Only in one place. But you have three more days to vote in ANY PLACE YOU EARLY VOTE. #GOTV"
                    },
                    {
                        date: "2020-02-16",
                        username: "Electric_Erik",
                        tweet: "#NVcaucus2020 This is how to vote for Bernie! #Bernie2020 #NevadaForBernie #NevadaCaucus #UnidosConBernie #TioBerniehttps://twitter.com/fightdenial/status/1228833139339849729 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "Dr4Socialist",
                        tweet: "If this happens, fireworks my friends. #Bernie2020 #NevadaCaucus https://twitter.com/PpollingNumbers/status/1228855541264453632 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "ungaro",
                        tweet: "Can anyone pls deny or verify this? “Nevada Dem Party made a last min rule change to toss ballots that only name one choice (rather than top 3 choices).” @JamesFallows @donnabrazile @CiaraVinzant @TomPerez #NevadaDemParty #NevadaCaucus @BP4B2020 #NevadaEarlyVoting @Latinx4Bernie https://twitter.com/abdulelsayed/status/1228798156583788544 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "marteeno9",
                        tweet: "Two hour wait to early caucus? I’m going to vote for tRump. This is asinine. Nevada needs to do it like Oregon. Mail in ballots, only. And a real primary. Forget this caucus nonsense!!!"
                    }
                ]
            },
            {
                period: "Post-Debate",
                overall_result: "Negative",
                predictive_accuracy: 75,
                Positive_Sentiment_Score: 43.8,
                Negative_Sentiment_Score: 58.2,
                general_sentiment_score: 3,
                tweet_count: 2346,
                positive_tweets: [
                    {
                        date: "2020-02-16",
                        username: "lesleyanna87",
                        tweet: "So. Darn. Heartwarming. #NevadaCaucus https://twitter.com/joebiden/status/1228806692353249280 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "wheresmyelf",
                        tweet: "This is literally fucking voter suppression. #NevadaCaucus #Nevadavotersuppression the party knows a lot of Bernie supporters are singularly Bernie voters and they are pulling the padge! #dempartypullingthepadgehttps://twitter.com/BernieSanders/status/1228727331851788288 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "letitbe1023",
                        tweet: "#DemDebate #NevadaCaucus #SouthCarolinaPrimary #BernieIsACommunist #BloombergIsAFascist #warrenisasnake #ButtigiegIsAMarxisthttps://twitter.com/bee_a_rebel/status/1228796152532746240 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "Culinary226",
                        tweet: "First day of early voting almost done! Hundreds of Culinary Union members came down to cast their ranked preferences today. Tomorrow the early vote location at the Culinary Union (1630 South Commerce Street Las Vegas, NV 89102) is open from 1-5pm. #NevadaCaucus #wevotewewinpic.twitter.com/Z44VrTD2oY"
                    },
                    {
                        date: "2020-02-16",
                        username: "FR3SH0PS",
                        tweet: "Very hard to game Nevada caucus... that is short of ballot stuffing/deadvote/grammy/throwing away/misplacing votes. LOL"
                    },
                    {
                        date: "2020-02-16",
                        username: "TheRealMoatsad",
                        tweet: "#Nevada #NevadaCaucus #NVCaucus #NevadaCaucus #NevadaCaucuses #UnidosConBernie ¡Atención! #Latinoamérica #latinos #lagente #tiobernie #latinos #latinx #EEUUhttps://twitter.com/TheRealMoatsad/status/1228850262963453953 …"
                    }
                ],
                negative_tweets: [
                    {
                        date: "2020-02-16",
                        username: "rmgg5553",
                        tweet: "Re: Nevada Caucus - 'digital tool' not yet available. https://twitter.com/JordanChariton/status/1228796930756694022 …"
                    },
                    {
                        date: "2020-02-16",
                        username: "tmgj24",
                        tweet: "#NevadaCaucuses, #NevadaCaucus, #EarlyVoting Waiting in line to early vote. Line is not moving at all!"
                    },
                    {
                        date: "2020-02-16",
                        username: "HRC_NV",
                        tweet: "NEVADA: Early voting has begun! Find caucus and early voting info at http://hrc.org/Nevada . @HRC is out at the @thecenterlv's early vote site — if you're in the area, come join us and cast your ballot. Thanks to @GovSisolak for turning out today!pic.twitter.com/E7jfUQv1Lz"
                    },
                    {
                        date: "2020-02-16",
                        username: "MizJoni",
                        tweet: "Faith, Deb! We started early voting in Nevada today ahead of the 2/22 caucus. I sense a quiet revolution going on that enough is enough."
                    },
                    {
                        date: "2020-02-16",
                        username: "RyanMcTHANOS",
                        tweet: "YO WHEN DO THE RESULTS OF THE EARLY VOTING AT THE NEVADA CAUCUS COME IN? OR DOES IT GET COUNTED ON ELECTION NIGHT? #Bernie2020"
                    },
                    {
                        date: "2020-02-16",
                        username: "rhoadstweet",
                        tweet: "Insubordinate........ and Churlish #NevadaCaucus #NevadaForPete 'Buttigieg campaign says actor Keegan-Michael Key is not endorsing him'https://twitter.com/i/events/1228744865975898112 …"
                    }
                ]
            }
        ]
        
        

    }
    


];
