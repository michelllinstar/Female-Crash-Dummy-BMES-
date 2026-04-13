import pandas as pd
import numpy as np
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

import os
import pandas as pd

current_dir = os.path.dirname(__file__)

file_path = os.path.join(current_dir, "Results_back.xlsx")

df = pd.read_excel(file_path)

df = df[df["HIC"] < 50000]

df = df.drop(columns=[
    "time",
    "accel",
    "dummyName",
    "excelName",
    "testName"
], errors="ignore")

df = df.dropna()

X = df[[
    "impactAngle",
    "speed",
    "weight",
    "height",
    "sit",
    "headc"
]]

y = np.log1p(df["HIC"])

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

model = RandomForestRegressor(
    n_estimators=30,
    max_depth=3,
    min_samples_leaf=2,
    random_state=40
)

model.fit(X_train, y_train)

BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "hic_model.pkl")

joblib.dump(model, MODEL_PATH)

print("Model saved at:", MODEL_PATH)

