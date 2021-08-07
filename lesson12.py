# https://www.learnpython.org/en/List_Comprehensions 
sentence = "the quick brown fox jumps over the lazy dog"
words = sentence.split()
word_lengths = []
for word in words:
      if word != "the":
          word_lengths.append(len(word))
print(words) # print the words 
print(word_lengths) # print their lengths
