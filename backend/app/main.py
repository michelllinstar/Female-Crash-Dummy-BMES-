from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for testing, make specific later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.get("/simulate")
def simulate(speed: float = 60, angle: float = 0):
    # Simple fake result
    injury_score = round(0.01 * speed + 0.001 * abs(angle), 3)
    return {"speed": speed, "angle": angle, "injury_score": injury_score}
