from flask import Flask, render_template, redirect, flash, request 
from cs50 import SQL
from datetime import datetime 
from helpers import apology

"""CRUD for trips"""
def create_trip(db,trip_name, trip_date):
    """Creates a new trip record"""
    db.execute("INSERT INTO Trips (name, date) VALUES (?,?)", trip_name, trip_date)

def read_trip(now, db, query):
    """Returns list of existing trips based on date + an active state of the list (upcoming vs past) for frontend""" 

    result = []
    is_upcoming = False
    is_past = False

    if query == 'upcoming' or not query:
        result = db.execute("SELECT * FROM Trips WHERE date >= ?", now)
        is_upcoming = True
    else:
        result = db.execute("SELECT * FROM Trips WHERE date < ?", now)
        is_past = True

    if len(result) == 0:
        return 0 

    return result, is_upcoming, is_past

def update_trip(db):
    #TODO update information on existing trip
    return

def delete_trip(db):
    #TODO delete trip
    return

def validate_trip(name,date, now):
    """Ensures correct usage"""    
    if not name:
        return apology("please name your trip", 400)
    elif not date:
        return apology("please provide a date for your trip", 400)    
    else:
        desired_date = datetime.strptime(date,"%Y-%m-%d")
        if date < now:
            return apology("a trip to the past is not allowed", 400, 'https://i.imgur.com/sfRoV8z.png')
        return False


