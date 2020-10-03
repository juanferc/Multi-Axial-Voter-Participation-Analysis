from flask import Flask, jsonify, render_template

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################


@app.route('/')
def landing():
    return render_template('index.html')


@app.route('/Voter')
def Voters():
    return render_template('index.html')


if __name__ == "__main__":
    app.run(debug=True)
