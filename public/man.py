import math

X = [
  1, 0, 0, 0,
  1, 0, 0, 0,
  1, 0, 0, 0,
  1, 0, 0, 0,
]
W = [
  0, 0, 0.51, 0.98,
  0, 0.32, 1, 0.83,
  0, 0.93, 0.82, 0,
  0.91, 0.69, 0, 0,
]
b = 0
threshold = 2.0

#weighted sum (dot production)
z = sum(x * w for x, w in zip(X, W)) + b

print(f"Weighted sum (z): {z: .2f}")

#activation function 
def sigmoid_function(z):
  return 1/ (1 + math.exp(-z))
pred = sigmoid_function(z)
print(f"sigmoid activation output: {pred: .3f}")
predout = round(pred, 3)
def check_prediction():
  if predout >= 0.666:
    print("is a forward slash")
  elif predout >= 0.333:
    print("it might be the forward slash but not sure")
  else:
    print("it doesn't look like forward slash")
check_prediction()