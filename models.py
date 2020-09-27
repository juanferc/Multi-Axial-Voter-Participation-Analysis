import csv
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session
from sqlalchemy import Column, Integer, String, Date, create_engine, Float, create_engine
import psycopg2
import pandas as pd
from sqlalchemy.types import Integer, Text, String, VARCHAR
from pangres import upsert, DocsExampleTable

# class Education(Base):
#     __tablename__ = 'edu_level_by_zipcode'
#     zip_code =  Column(Integer, primary_key=True)
#     less_than_grade9_est = Column(Float())
#     less_than_grade9_pct = Column(Float())
#     high_school_non_grad_est = Column(Float())
#     high_school_non_grade_pct = Column(Float())
#     high_school_grad_est = Column(Float())
#     high_school_grad_pct = Column(Float())
#     some_college_no_degree_est = Column(Float())
#     some_college_no_degree_pct = Column(Float())
#     associates_degree_est = Column(Float())
#     associates_degree_pct = Column(Float())
#     bachelor_degree_est = Column(Float())
#     bachelor_degree_pct = Column(Float())
#     grad_or_professional_degree_est = Column(Float())
#     grad_or_professional_degree_pct = Column(Float())
#     high_school_or_higher_pct = Column(Float())

# class Voting(Base):
#     __tablename__ = 'voting'
#     zip_code =  Column(String, primary_key=True)
#     population = Column(Float())
#     num_registered_voters = Column(Float())
#     voted = Column(Float())
#     dnv = Column(Float())
#     avg_house_value = Column(Float())
#     avg_income = Column(Float())
#     latitude = Column(Float())
#     longitude = Column(Float()) 
 
 
engine = create_engine('postgresql://postgres:postgres@localhost:5432/multi_axial')
# Base.metadata.create_all(engine)
# session = Session(bind=engine)

# Education.__table__.create(bind=engine, checkfirst=True)
# Voting.__table__.create(bind=engine, checkfirst=True)


 

voter_data_df = pd.read_csv('florida_educational_attainment_voting_registration_income.csv')
voter_data_df.set_index(['zip_code'], inplace=True)
voter_data_df.index.names = ['zip_code']
#print(voter_data_df).head()
# voter_data_df.to_sql(
#     'voter_data',
#     con=engine,
#     if_exists='replace',
#     index=False,
#     chunksize=500,
# )

#pandabase.to_sql(voter_data_df, table_name='voter_data', con=engine, how='create_only')
#nblevels = voter_data_df.index.nlevels
#print(nblevels)
datype = {'zip_code':VARCHAR(5)}
upsert(engine=engine,df=voter_data_df,table_name='voter_data',if_row_exists='update',dtype=datype)


#print(voter_data_df.to_markdown)