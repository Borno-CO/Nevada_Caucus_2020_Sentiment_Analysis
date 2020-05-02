from flask import Flask, jsonify
import pandas as pd
import main
import pickle
from flask_cors import CORS


## Flask setup
app = Flask(__name__)
CORS(app)

@app.route("/")
def welcome():
    return "Home Page of DB"

@app.route("/api/v1/tweet_predictor/<tweet>")
def test_model(tweet):
    s = main.run(tweet)
    return s

@app.route("/api/v1/candidates")
def create_api():
    api_call = main.create_dash_api()
    return api_call

if __name__ == "__main__":  
    app.run(debug=True)