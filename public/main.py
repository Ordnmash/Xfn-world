import random

playerMove = input(str())
computerChoices = ["Rock", "Paper", "Scissors"]
computerMove = random.choice(computerChoices)

def main():
  if playerMove == computerMove:
    print("You tied")
  elif playerMove == "Rock":
    if computerMove == "Paper":
      print("Computer chose paper, you lose.")
    elif computerMove == "Scissors":
      print("Computer chose Scisors, You Won!")
  elif playerMove == "Paper":
    if computerMove == "Rock":
      print("Computer chose Rock, you Won!")
    elif computerMove == "Scissors":
      print("Computer chose Scisors, You Lose!")
  elif playerMove == "Scissors":
    if computerMove == "Rock":
      print("Computer chose Rock, you lose.")
    elif computerMove == "Paper":
      print("Computer chose Paper, You Won!")

main()