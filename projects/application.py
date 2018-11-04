from flask import Flask, render_template, request, session
from flask_session import Session

app = Flask(__name__)


class Notebook():
    def __init__(self, name, notes):
        self.name = name
        self.notes = notes

class Note():
    def __init__(self, notebook, text):
        self.notebook = notebook
        self.notebook.notes.append(self)
        self.text = text

default = Notebook("default", [])
firstNote = Note(default, "Hello there! You can add a note by going to the homepage.")
secondNote = Note(default, "Additionally, you can add a Notebook in the first page as well.")

notebooks = [default]

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        if(request.form.get("notebook") != None):
            notebook = Notebook(request.form.get("notebook"), [])
            notebooks.append(notebook)
        elif(request.form.get("note") != None):            
            note = Note(notebooks[eval(request.form.get("notebookSelect")) - 1], request.form.get("note"))
    return render_template("index.html", notebooks=notebooks)

@app.route("/about")
def about():
    return render_template("about.html", notebooks=notebooks)
