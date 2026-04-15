from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from simulator import predict_hic, hic_to_ais

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware, #https
    allow_origins=["*"],  # for testing, make specific later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    head_circumference: float
    height: float
    sitting_height: float
    weight: float
    angle: float
    speed: float

@app.get("/")
def read_root():
    return {"message": "Backend is running!"}

@app.post("/simulate")
async def simulate(data: UserInput):
    metrics = predict_hic(
        angle=data.angle,
        speed=data.speed,
        weight=data.weight,
        height=data.height,
        sit=data.sitting_height,
        headc=data.head_circumference
    )

    return metrics