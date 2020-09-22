from flask import Flask
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
# from flask_migrate import Migrate

Base = declarative_base()




app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:postgres@localhost:5432/multi_axial"
# db = SQLAlchemy(app)
# migrate = Migrate(app, db)


class Education(Base):
    __tablename__ = 'edu_level_by_zipcode'

    id = db.Column(db.Integer, primary_key=True)
    zip_code =  db.Column(db.String())
    less_than_grade9_est = db.Column(db.Float())
    less_than_grade9_pct = db.Column(db.Float())
    high_school_non_grad_est = db.Column(db.Float())
    high_school_non_grade_pct = db.Column(db.Float())
    high_school_grad_est = db.Column(db.Float())
    high_school_grad_pct = db.Column(db.Float())
    some_college_no_degree_est = db.Column(db.Float())
    some_college_no_degree_pct = db.Column(db.Float())
    associates_degree_est = db.Column(db.Float())
    associates_degree_pct = db.Column(db.Float())
    bachelor_degree_est = db.Column(db.Float())
    bachelor_degree_pct = db.Column(db.Float())
    grad_or_professional_degree_est = db.Column(db.Float())
    grad_or_professional_degree_pct = db.Column(db.Float())
    high_school_or_higher_pct = db.Column(db.Float())


class HouseholdIncome(Base):
    __tablename__ = 'median_household_income_by_zip_code'

    id = db.Column(db.Integer, primary_key=True)
    zip_code =  db.Column(db.String())
    income = db.Column(db.Float())
   
    


@app.route('/')
def hello():
    return 'Hello, World!'




if __name__ == "__main__":
    app.run(debug=True)