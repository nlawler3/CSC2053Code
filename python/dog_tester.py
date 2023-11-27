from dog import Dog

dog1 = Dog( "Rover", ["come", "sit", "lay down"], "Golden Retriever", False)
dog2 = Dog( "Maggie", ["come", "sit", "lay down", "shake", "wait"], "Black Lab", True)
dog3 = Dog( "Clifford", ["roll over", "lay down", "sit"], "Golden Retriever", False)

Dogs = [dog1, dog2, dog3]

# testing and printing all of the methods on the first dog in the list:
print(Dogs[0])
Dogs[0].speak()
Dogs[0].feed()
Dogs[0].add_trick("shake")
print("name: " + Dogs[0].get_name())
print("breed: " +Dogs[0].get_breed())
print(Dogs[0].get_tricks())
print(Dogs[0].isHungry())
