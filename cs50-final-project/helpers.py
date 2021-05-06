from flask import Flask, render_template, redirect, flash, request
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

"""Support functions for the application"""
        
def apology(message, code=400, img='https://i.imgur.com/CsCgN7Ll.png'):
    """Render message as an apology to user."""  
    def escape(s):
        """
        Escape special characters.

        https://github.com/jacebrowning/memegen#special-characters

        """       

        for old, new in [("-", "--"), (" ", "-"), ("_", "__"), ("?", "~q"),
                         ("%", "~p"), ("#", "~h"), ("/", "~s"), ("\"", "''")]:
            s = s.replace(old, new)
        return s
    return render_template("apology.html", top=code, bottom=escape(message), img=img), code

def current_day():
    """Returns what day is today parsed to str"""
    now = datetime.now()
    now = now.strftime("%Y-%m-%d")
    return now
