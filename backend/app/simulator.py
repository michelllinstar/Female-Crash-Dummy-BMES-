import pandas as pd
import numpy as np
import joblib
import os



# Get path to model file
BASE_DIR = os.path.dirname(__file__)
MODEL_PATH = os.path.join(BASE_DIR, "hic_model.pkl")

# Load trained model
model = joblib.load(MODEL_PATH)


def predict_hic(angle, speed, weight, height, sit, headc):

    x = pd.DataFrame([{
        "impactAngle": angle,
        "speed": speed,
        "weight": weight,
        "height": height,
        "sit": sit,
        "headc": headc
    }])

    log_pred = model.predict(x)[0]

    hic = np.expm1(log_pred)
    ais = hic_to_ais(hic)

    return {
        "HIC": float(hic),
        "AIS": int(ais)
    }

def hic_to_ais(hic):
    if hic < 100:
        return 0
    elif hic < 250:
        return 1
    elif hic < 500:
        return 2
    elif hic < 700:
        return 3
    elif hic < 1000:
        return 4
    elif hic < 1500:
        return 5
    else:
        return 6

# Test locally
if __name__ == "__main__":

    result = predict_hic(
        angle=25,
        speed=96,
        weight=54,
        height=157,
        sit=101,
        headc=45
    )

    print("Predicted HIC:", result)
