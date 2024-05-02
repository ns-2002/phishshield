from flask import Flask, render_template, url_for, request, redirect,jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import nltk
import sklearn
import warnings
import pickle
warnings.filterwarnings("ignore")

app = Flask(__name__)

load_model = pickle.load(open('phishing.pkl','rb'))

@app.route('/process-url',methods=['POST'])
def process():
    url = request.form['url']
    url_data = [url]
    res = load_model.predict(url_data)
    return jsonify({'response': 'success','content': res[0]})

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
    
    
    
