len = input("Length OF ID?(With Zero):")
filename = input("File Name?:")

que = "question:"

for i in range(0,int(len)):
    que += "\n  - id: " + str(i) + "\n    str: \n    rev: \n"

filename += ".yml"

with open(filename,'w') as f:
    f.write(que)

print("Done")