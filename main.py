from fastapi import FastAPI,Form
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
import pandas as pd


app = FastAPI()
df=pd.read_excel("/workspaces/login/Foglio di lavoro senza nome.xlsx")
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/") # endpoint  punto dove chimiamo il nostro server web, lo / e la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')
@app.post("/login")
def Controlla(username: str = Form(...), password: str = Form(...)):
    print("username", username, "password", password)


    if username == "admin" and password == "xxx123":
        risposta = {"messaggio": 1}
    else:
        risposta = {"messaggio": 0}


    return risposta
 
@app.post("/loginpandas")
def Controlla_password(username: str = Form(...), password: str = Form(...)):
    risultato = df[(df["username"] == username) & (df["password"] == password)]

    if not risultato.empty:
        return {"messaggio": 1}
    else:
        return {"messaggio": 0}