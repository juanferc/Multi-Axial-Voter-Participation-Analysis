import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
engine = create_engine(
    "postgresql://postgres:postgres@localhost:5432/multi_axial")
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################


@app.route('/')
def hello():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
