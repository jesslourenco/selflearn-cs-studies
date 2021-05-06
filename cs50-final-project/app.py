from flask import Flask, render_template, redirect, flash, request
from cs50 import SQL
from trips import create_trip, validate_trip, read_trip
from helpers import apology, current_day

app = Flask(__name__)
app.secret_key = 'super secret'
app.config['TEMPLATES_AUTO_RELOAD'] = True
db = SQL("sqlite:///traveler.db")

@app.route('/')
def index():
    #TODO
    return render_template('index.html')

@app.route('/trips')
def trips():
    """ Showcase list of created lists; past and upcoming"""
      
    query = request.args.get('filter')
    now = current_day()
    trips = read_trip(now, db, query)[0]
    is_upcoming = read_trip(now, db, query)[1]
    is_past = read_trip(now, db, query)[2]

    if trips == 0:
        return apology("There are no trips yet!", 404, 'https://i.imgur.com/ClaJwOR.jpg')

    return render_template('trips.html', trips=trips, is_upcoming=is_upcoming, is_past=is_past)

@app.route('/schedule')
def schedule():
    #TODO
    return render_template('index.html')

@app.route('/new-trip', methods=["GET", "POST"])
def newTrip():
    """Creates a new trip"""
    if request.method == "POST":

        name = request.form.get("name")
        date = request.form.get("date")
        now = current_day()

        if validate_trip(name,date,now) == False:
                try:
                    create_trip(db,name,date)
                    message = flash("Trip succesfully recorded!")
                    return redirect('/trips')
                except:
                    return apology("Unexpected error. Please try again", 500)                
        else:
            return validate_trip(name,date)
                
    return render_template('new-trip.html')

if __name__ == "__main__":
    app.run(debug=True)