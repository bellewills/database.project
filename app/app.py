from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///air_quality.db'
db = SQLAlchemy(app)

# Model of database 
class AirQuality(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(50))
    air_quality_index = db.Column(db.Float)

# Route to display data
@app.route('/')
def index():
    air_quality_data = AirQuality.query.all()
    return render_template('index.html', air_quality_data=air_quality_data)

if __name__ == '__main__':
    db.create_all()  # Create database and table here
    app.run(debug=True)
