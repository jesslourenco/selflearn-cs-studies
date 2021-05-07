from flask import Flask, render_template, redirect, flash, request
from cs50 import SQL
from trips import create_trip, validate_trip, read_trip, delete_trip, query_trip, update_trip
from helpers import *
from config import *
from datetime import datetime 
import calendar

app = Flask(__name__)
app.secret_key = 'super secret'
app.config['TEMPLATES_AUTO_RELOAD'] = True
db = SQL("sqlite:///traveler.db")

@app.route('/')
def index():
    """Home page, nothing special ;)"""
    return render_template('index.html')

@app.route('/trips', methods=["GET", "POST"])
def trips():
    """ Showcase list of created lists; past and upcoming"""

    query = request.args.get('filter')
    now = today_str()

    is_upcoming = query == 'upcoming' or not query;

    trips = read_trip(now, db, is_upcoming)

    if trips == 0:
        return apology("There are no trips yet!", 404, 'https://i.imgur.com/ClaJwOR.jpg')

    return render_template('trips.html', trips=trips, is_upcoming=is_upcoming, is_past=(not is_upcoming))

@app.route('/new-trip', methods=["GET", "POST"])
def newTrip():
    """Creates a new trip"""    

    if request.method == "POST":

        name = request.form.get("name")
        date = request.form.get("date")
        img = request.form.get("icon")
        now = today_str()

        if validate_trip(name,date,now,img) == False:
                try:
                    create_trip(db,name,date,img)
                    message = flash("Trip succesfully recorded!")
                    return redirect('/trips')
                except:
                    return apology("Unexpected error. Please try again", 500)                
        else:
            return validate_trip(name,date,now,img)
                
    return render_template('new-trip.html', images=image_options)


@app.route('/delete-trip')
def deleteTrip():
    """Deletes a trip"""

    trip_id = request.args.get('id')
    try:
        delete_trip(db, trip_id)
        message = flash("Trip succesfully deleted!")
        return redirect('/trips')
    except:
        return apology("Something went wrong when deleting. Please try again", 500)


@app.route('/update-trip', methods=["GET", "POST"])
def updateTrip():
    """Edit Trip fields"""

    if request.method == "POST":
        trip_id = request.form.get('id')
        name = request.form.get("name")
        date = request.form.get("date")
        img = request.form.get("icon")
        now = today_str()

        if validate_trip(name,date,now,img) == False:
                try:
                    update_trip(db,name,date,img,trip_id)
                    message = flash("Trip succesfully updated!")
                    return redirect('/trips')
                except:
                    return apology("Unexpected error. Please try again", 500)                
        else:
            return validate_trip(name,date,now,img)
    else:        
        trip_id = request.args.get('id')
        info = query_trip(db,trip_id)
        name = info['name']
        date = info['date']
        pic = info['image']

        return render_template('update-trip.html', pic=pic, name=name, date=date, images=image_options, trip_id=trip_id)    

@app.template_filter()
def format_date_string(date_string):
    """Filter for formating a date in yyyy/mm/dd to Weekday, Month dd yyyy"""
    date = datetime.strptime(date_string,"%Y-%m-%d")
    weekday = calendar.day_name[date.weekday()]
    month = date.strftime("%b")
    day = date.strftime("%d")
    year = date.strftime("%Y")
    new_date_string = weekday + ', ' + month + ' ' + day + ' ' + year

    return new_date_string

@app.template_filter()
def countdown(date_string):
    """Returns in how many days the trip is happening"""

    now = datetime.now()
    date = datetime.strptime(date_string,"%Y-%m-%d")
    counter = date - now    
    
    return counter.days

if __name__ == "__main__":
    app.run(debug=True)