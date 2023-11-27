class Dog:

    def __init__(self, name, tricks, breed, hungry=True):
        self.name = name
        self.tricks = []    
        self.breed = breed
        self.hungry = hungry

    def __str__(self):
        return self.name + "; " + self.breed
    
    def speak(self):
        print("Woof")
    
    def feed(self):
        self.hungry = False

    def add_trick(self, trick):
        self.tricks.append(trick)

    def get_name(self):
        return self.name
    
    def get_breed(self):
        return self.breed
    
    def get_tricks(self):
        return self.tricks
    
    def isHungry(self):
        return self.hungry
    

