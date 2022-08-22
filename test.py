def reverseWordSentence(Sentence, case):
    words = Sentence.split("")
    
    newWords = [word[::-1] for word in words]
    
    newSentence = "".join(newWords)
    if(case==0):
        return newSentence
    elif(case==1):
        return newSentence.swapcase()
    
    return newSentence

Sentence = input()
case = int(input())
print(reverseWordSentence(Sentence, case))