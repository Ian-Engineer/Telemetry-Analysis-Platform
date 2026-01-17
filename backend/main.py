from fastapi import FastAPI
app = FastAPI()

# Define a path operation decorator for the root URL ("/") with a GET method
@app.get("/health")
# Define the path operation function
async def root():
    return {"message": "healthy"}
