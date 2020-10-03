import csv
import sys
import sqlalchemy
import json
from flask import Flask, jsonify, render_template
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

Base = automap_base()
engine = create_engine('postgresql://postgres:postgres@localhost:5432/multi_axial')

Base.prepare(engine, reflect=True)

Vdata = Base.classes.voter_data
session = Session(engine)   

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route('/Voter')
def Voters():
    #Connect to the database
    session = Session(engine)   
    #Query the fields we need to retriev from the database
    education = session.query(Vdata.zip_code, Vdata.less_than_grade_9_est, Vdata.high_school_non_grad_est, Vdata.high_school_grad_est, Vdata.some_college_no_degree_est, Vdata.associates_degree_est, Vdata.bachelor_degree_est, Vdata.grad_or_professional_degree_est, Vdata.registration_rate, Vdata.turnout_rate, Vdata.latitude, Vdata.longitude, Vdata.population, Vdata.num_registered_voters, Vdata.num_voted, Vdata.did_not_vote, Vdata.average_house_value, Vdata.average_income).all()
    session.close()

    tinfoil = []
    for zip_code, less_than_grade_9_est, high_school_non_grad_est, high_school_grad_est, some_college_no_degree_est, associates_degree_est, bachelor_degree_est, grad_or_professional_degree_est, registration_rate, turnout_rate, latitude, longitude, population, num_registered_voters, num_voted, did_not_vote, average_house_value, average_income in education:       
        voter_dict = {}
        voter_dict["zip_code"] = zip_code
        voter_dict["high_school_non_grad_est"] = high_school_non_grad_est
        voter_dict["high_school_grad_est"] = high_school_grad_est
        voter_dict["some_college_no_degree_est"] = some_college_no_degree_est
        voter_dict["associates_degree_est"] = associates_degree_est
        voter_dict["bachelor_degree_est"] = bachelor_degree_est
        voter_dict["grad_or_professional_degree_est"] = grad_or_professional_degree_est
        voter_dict["registration_rate"] = registration_rate
        voter_dict["turnout_rate"] = turnout_rate
        voter_dict["latitude"] = latitude
        voter_dict["longitude"] = longitude
        voter_dict["population"] = population
        voter_dict["num_registered_voters"] = num_registered_voters
        voter_dict["num_voted"] = num_voted
        voter_dict["did_not_vote"] = did_not_vote
        voter_dict["average_house_value"] = average_house_value
        voter_dict["average_income"] = average_income
        tinfoil.append(voter_dict)
    print(tinfoil, file=sys.stdout)

    return render_template('index.html', voter_map_data = tinfoil)


if __name__ == "__main__":
    app.run(debug=True)

