
# CREATING function1
def function1(list):
    """function1 counts the number of 2 digit numbers in a list. Even if the numeric value is a string, 
    the function should understand it is a numeric value and treat it the same as an integer."""
    count = 0
    for val in list:
        temp = str(val)
        if (len(temp) == 2 and temp.isnumeric()):
            count += 1
    return count

# CREATING function2
def function2(list):
    """function2 takes a list of values and returns a new list that multiplies each numeric value by 10. 
    If there are non-numeric values in the string, they will be ignored. 
    if no numbers are present, it returns an empty string. Even if the numeric value is a string, 
    the function should understand it is a numeric value and treat it the same as an integer."""
    new_list = []
    for val in list:
        temp = str(val)
        if (temp.isnumeric()):
            new_list.append(int(temp)*10)
    return new_list


#TESTING function1
print('TESTS FOR FUNCTION1:')
print('function1, test 1:')
temp = function1([1, 4, 55, 7, 3, 44, 85, 3985, 567, 50, 4])
print(f'expected answer: 4, actual answer: {temp}')
print('function1, test 2:')
temp = function1(['a', 65, 7, 594876, 'j8', 'gh', '48'])
print(f'expected answer: 2, actual answer: {temp}')
print('function1, test 3:')
temp = function1([3425, 5436, 54376, 2346])
print(f'expected answer: 0, actual answer: {temp}')


#TESTING function2
print('\nTESTS FOR FUNCTION2:')
print('function2, test 1:')
temp = function2(['jg', 'g5', '66', 4, 8, 'hello', '890'])
print(f'expected answer: [660, 40, 80, 8900], actual answer: {temp}')
print('function2, test 2:')
temp = function2([3, 'villanova', 'nova', '439h'])
print(f'expected answer: [30], actual answer: {temp}')
print('function2, test 3:')
temp = function2([745, '745', 'code', 'k45', '2', 8])
print(f'expected answer: [7450, 7450, 20, 80], actual answer: {temp}')
