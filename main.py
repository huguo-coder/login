from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/") # endpoint  punto dove chimiamo il nostro server web, lo / e la homepage
def home():
    # Restituisce direttamente il file HTML
    return FileResponse('static/index.html')
@app.get("/login")
def controlla(username:str,password:str):
    if username =="admin" && password=="xxx123##"
       risposta=("messaggio":1)
    else
       risposta=("messaggio":0)
    return(risposta)