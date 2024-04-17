from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/algomedic'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
app.app_context().push()
ma = Marshmallow(app)

class Encounters(db.Model):
    enc_num = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default = datetime.datetime.now)
    mrn = db.Column(db.Integer)
    hpi = db.Column(db.Text())
    last_name = db.Column(db.Text())
    first_name = db.Column(db.Text())
    gender = db.Column(db.Text())
    dob = db.Column(db.Date)
    phone = db.Column(db.Text())
    army_unit = db.Column(db.Text())
    cat_selected = db.Column(db.Text())
    results = db.Column(db.Text())
    dispo = db.Column(db.Text())
    activity = db.Column(db.Text())

    def __init__(self, mrn, hpi, cat_selected, last_name, first_name, gender, dob, phone, army_unit, results, dispo, activity):
        self.mrn = mrn
        self.hpi = hpi
        self.cat_selected = cat_selected
        self.last_name = last_name
        self.first_name = first_name
        self.gender = gender
        self.dob = dob
        self.phone = phone
        self.army_unit = army_unit
        self.results = results
        self.dispo = dispo
        self.activity = activity

class EncSchema(ma.Schema):
    class Meta:
        fields = ('enc_num', 'date', 'mrn', 'hpi', 'cat_selected', 'last_name', 'first_name', 'gender', 'dob', 'phone', 'army_unit', 'results', 'dispo', 'activity')


enc_schema = EncSchema()
encs_schema = EncSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_encounters():
    all_encounters = Encounters.query.all()
    all_results = encs_schema.dump(all_encounters)
    return jsonify(all_results)


@app.route('/get/<enc_num>/', methods = ['GET'])
def encounter_details(enc_num): 
    encounter = Encounters.query.get(enc_num)
    return enc_schema.jsonify(encounter)

@app.route('/add', methods = ['POST'])
def add_encounter():
    mrn = request.json['mrn']
    hpi = request.json['hpi']
    cat_selected = request.json['cat_selected']
    last_name = request.json['last_name']
    first_name = request.json['first_name']
    gender = request.json['gender']
    dob = request.json['dob']
    phone = request.json['phone']
    army_unit = request.json['army_unit']
    results = request.json['results']
    dispo = request.json['dispo']
    activity = request.json['activity']

    encounters = Encounters(mrn, hpi, cat_selected, last_name, first_name, gender, dob, phone, army_unit, results, dispo, activity)
    db.session.add(encounters)
    db.session.commit()
    return enc_schema.jsonify(encounters)

@app.route('/delete/<enc_num>/', methods = ['DELETE'])
def delete_encounter(enc_num):
    encounter = Encounters.query.get(enc_num)
    db.session.delete(encounter)
    db.session.commit()
    return enc_schema.jsonify(encounter)

if __name__ == "__main__":
    app.run(debug=True)