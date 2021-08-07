# https://www.learnpython.org/en/List_Comprehensions 
# August 7, 2021

sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = []
for word in words:
      if word != "the":
          word_lengths.append(len(word))
print(words) # print the words 
print(word_lengths) # print their lengths

# also does the same thing 
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = [len(word) for word in words if word != "the"]
print(words)
print(word_lengths)

# print the list with a for loop 
numbers = [34.6, -203.4, 44.9, 68.3, -12.2, 44.6, 12.7]
newlist = [int(x) for x in numbers if x > 0]
print(newlist)

# Lesson 13: https://www.learnpython.org/en/Multiple_Function_Arguments
