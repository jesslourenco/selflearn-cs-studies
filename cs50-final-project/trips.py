from flask import Flask, render_template, redirect, flash, request 
from cs50 import SQL
from datetime import datetime 
from helpers import apology
from config import *

"""CRUD for trips and a couple of helper functions"""

def create_trip(db,trip_name, trip_date, img):
    """Creates a new trip record"""

    for image in image_options:
        if image['name'] == img:
            img = image['link']
            break

    db.execute("INSERT INTO Trips (name, date, image) VALUES (?,?,?)", trip_name, trip_date, img)

def read_trip(now, db, is_upcoming):
    """Returns list of existing trips based on date + an active state of the list (upcoming vs past) for frontend""" 

    result = []

    if is_upcoming:
        result = db.execute("SELECT * FROM Trips WHERE date >= ? ORDER BY date", now)
    else:
        result = db.execute("SELECT * FROM Trips WHERE date < ? ORDER BY date", now)

    if len(result) == 0:
        return 0  

    return result

def update_trip(db,trip_name,trip_date,trip_img,trip_id):
    """Update database for selected trip"""

    for image in image_options:
        if image['name'] == trip_img:
            trip_img = image['link']
            break

    db.execute("UPDATE Trips SET name = ?, date = ?, image = ? WHERE id = ?", trip_name, trip_date, trip_img, trip_id)

def query_trip(db,trip_id):
    """Returns trip information with the selected id in database"""

    trip = db.execute("SELECT name, date, image FROM Trips WHERE id = ?", trip_id)

    new_img = ''
    for image in image_options:
        if image['link'] == trip[0]['image']:
            new_img = image['name']

    results = {
                    'name': trip[0]['name'],
                    'date': trip[0]['date'],
                    'image': new_img
              }
              
    return results

def delete_trip(db, trip_id):
    """Delete trip with the selected id from database"""

    db.execute("DELETE FROM Trips WHERE id = ?", trip_id)


def validate_trip(name,date,now,img):
    """Ensures correct usage"""   

    if not name:
        return apology("please name your trip", 400)

    elif not date:
        return apology("please provide a date for your trip", 400)   

    elif not img:
        return apology("please select an icon for your trip", 400)

    elif any(image['name'] == img for image in image_options) == False:
        return apology("There's no icon with this name", 404, 'https://i.imgur.com/1jcDcRG.jpeg')

    else:

        desired_date = datetime.strptime(date,"%Y-%m-%d")
        if date < now:
            return apology("a trip to the past is not allowed", 400, 'https://i.imgur.com/sfRoV8z.png')

        return False


