from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, model_validator
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
    head_circumference: float = Field(..., gt=30, lt=70, description="cm")
    height: float = Field(..., gt=50, lt=250, description="cm")
    sitting_height: float = Field(..., gt=30, lt=150, description="cm")
    weight: float = Field(..., gt=1, lt=300, description="kg")
    angle: float = Field(..., ge=0, le=180, description="degrees")
    speed: float = Field(..., gt=0, le=300, description="km/h")

    @model_validator(mode="after")
    def _sitting_le_height(self):
        if self.sitting_height >= self.height:
            raise ValueError("sitting_height must be less than height")
        return self

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